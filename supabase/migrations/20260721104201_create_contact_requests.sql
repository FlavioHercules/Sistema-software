/*
# Create contact_requests table (single-tenant, no auth)

1. New Tables
- `contact_requests`
  - `id` (uuid, primary key)
  - `name` (text, not null) — sender's full name
  - `email` (text, not null) — sender's email
  - `company` (text) — optional company name
  - `project_description` (text, not null) — details of the requested project
  - `status` (text, default 'new') — workflow status: new | contacted | closed
  - `created_at` (timestamptz, default now())

2. Security
- Enable RLS on `contact_requests`.
- Allow anon + authenticated INSERT only (public contact form submissions).
- No SELECT/UPDATE/DELETE for anon — only authenticated (staff) can read/manage.
*/

CREATE TABLE IF NOT EXISTS contact_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  company text,
  project_description text NOT NULL,
  status text NOT NULL DEFAULT 'new',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_requests ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_contact_requests" ON contact_requests;
CREATE POLICY "anon_insert_contact_requests"
ON contact_requests FOR INSERT
TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "auth_select_contact_requests" ON contact_requests;
CREATE POLICY "auth_select_contact_requests"
ON contact_requests FOR SELECT
TO authenticated USING (true);

DROP POLICY IF EXISTS "auth_update_contact_requests" ON contact_requests;
CREATE POLICY "auth_update_contact_requests"
ON contact_requests FOR UPDATE
TO authenticated USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "auth_delete_contact_requests" ON contact_requests;
CREATE POLICY "auth_delete_contact_requests"
ON contact_requests FOR DELETE
TO authenticated USING (true);
