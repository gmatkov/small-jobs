create table public.private_profiles (
    id uuid references auth.users(id) on delete cascade primary key,

    oib text not null
        check (oib ~ '^[0-9]{11}$'),

    address text not null
        check (length(trim(address)) between 5 and 200),

    created_at timestamptz not null default now(),
    updated_at timestamptz not null default now()
);

alter table public.private_profiles
enable row level security;

create policy "Users can view own private profile"
on public.private_profiles
for select
using (auth.uid() = id);

create policy "Users can update own private profile"
on public.private_profiles
for update
using (auth.uid() = id)
with check (auth.uid() = id);