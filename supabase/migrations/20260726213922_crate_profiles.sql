create table public.profiles (
    id uuid references auth.users(id) on delete cascade primary key,
    first_name text not null
        check (length(trim(first_name)) between 3 and 50),    
    last_name text not null
        check (length(trim(last_name)) between 3 and 50),
    phone text not null
        check (phone ~ '^\+?[0-9 ]{8,15}$'),
    user_type text
        check(user_type is null or user_type in ('client', 'provider')),
    postal_code text not null
        check (postal_code ~ '^(10\d{3}|[2-4]\d{4}|5[0-3]\d{3})$'),
    city text not null
        check (length(trim(city)) between 3 and 100),
    deleted_at timestamptz,
    created_at timestamptz not null default now(),
    updated_at timestamptz not null default now()
);

-- ==========================================================
-- Function: handle_new_user
-- Description:
-- Automatically creates a profile after a new user registers.
-- If required metadata is missing, the registration fails.
-- ==========================================================

create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
declare
    v_first_name text;
    v_last_name  text;
    v_phone      text;
    v_city       text;
    v_postal     text;
begin
    -- Read values from Supabase Auth metadata
    v_first_name := trim(new.raw_user_meta_data->>'first_name');
    v_last_name  := trim(new.raw_user_meta_data->>'last_name');
    v_phone      := trim(new.raw_user_meta_data->>'phone');
    v_city       := trim(new.raw_user_meta_data->>'city');
    v_postal     := trim(new.raw_user_meta_data->>'postal_code');

    -- Validate required values
    if coalesce(v_first_name, '') = '' then
        raise exception 'First name is required';
    end if;

    if coalesce(v_last_name, '') = '' then
        raise exception 'Last name is required';
    end if;

    if coalesce(v_phone, '') = '' then
        raise exception 'Phone is required';
    end if;

    if coalesce(v_city, '') = '' then
        raise exception 'City is required';
    end if;

    if coalesce(v_postal, '') = '' then
        raise exception 'Postal code is required';
    end if;

    -- Create profile
    insert into public.profiles (
        id,
        first_name,
        last_name,
        phone,
        city,
        postal_code
    )
    values (
        new.id,
        v_first_name,
        v_last_name,
        v_phone,
        v_city,
        v_postal
    );

    return new;
end;
$$;

create trigger on_auth_user_created
after insert on auth.users
for each row
execute function public.handle_new_user();

alter table public.profiles
enable row level security;

create policy "Users can view own profile"
on public.profiles
for select
using (auth.uid() = id);

create policy "Users can update own profile"
on public.profiles
for update
using (auth.uid() = id)
with check (auth.uid() = id);