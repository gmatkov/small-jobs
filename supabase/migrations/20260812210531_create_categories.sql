create table public.categories (
  id uuid primary key default gen_random_uuid(),
  name text not null unique,
  slug text not null unique,
  created_at timestamptz not null default now()
);

alter table public.categories enable row level security;

create policy "Anyone can view categories"
on public.categories
for select
to authenticated
using (true);

insert into public.categories (name, slug)
values
  ('Čišćenje i održavanje', 'ciscenje-i-odrzavanje'),
  ('Vrt i okućnica', 'vrt-i-okucnica'),
  ('Kućni ljubimci', 'kucni-ljubimci'),
  ('Pomoć u kući', 'pomoc-u-kuci'),
  ('Kućni popravci', 'kucni-popravci'),
  ('Prijevoz i selidbe', 'prijevoz-i-selidbe'),
  ('Računala i tehnologija', 'racunala-i-tehnologija'),
  ('Administrativna pomoć', 'administrativna-pomoc'),
  ('Kućne i tehničke usluge', 'kucne-i-tehnicke-usluge'),
  ('Ostalo', 'ostalo');