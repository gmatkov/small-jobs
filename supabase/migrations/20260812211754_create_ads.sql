create table public.ads (
  id uuid primary key default gen_random_uuid(),

  user_id uuid not null
    references auth.users(id) on delete cascade,

  category_id uuid not null
    references public.categories(id),

  title text not null,
  description text not null,

  postal_code text not null,
  location text not null,

  price integer
    check (price is null or price > 0),

  status text not null default 'draft'
    check (status in ('draft', 'published', 'closed')),

  contact_method text not null default 'message'
    check (contact_method in ('message', 'phone', 'both')),

  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);