# Deploying FFI Website (Vercel + Neon + Resend)

This app is a full Next.js server app with a database (accounts, saved course
progress, admin portal). It must be deployed to a Node host — **not** a static
host. This guide uses **Vercel** (hosting), **Neon** (Postgres), **Resend**
(password-reset email), and the domain **ffiaz.info**.

Steps marked **[you]** need your logins. Steps marked **[agent]** are code
changes I make once I have the values from the **[you]** steps.

---

## 1. Create the database — Neon  [you]

1. Go to https://neon.tech and sign up (free tier is fine).
2. Create a project (name it e.g. `ffi-website`). Choose a region near Arizona
   (e.g. US West).
3. On the project dashboard, open **Connection Details** and copy **two** strings:
   - **Pooled** connection string → this is `DATABASE_URL`
   - **Direct** connection string (toggle off "Pooled connection") → this is `DIRECT_URL`
4. Send me both strings (or just paste them into Vercel in step 4). They look like:
   `postgresql://USER:PASSWORD@ep-xxx.us-west-2.aws.neon.tech/neondb?sslmode=require`

> Once I have these, I'll switch Prisma from SQLite to Postgres and create the
> production migration. **[agent]**

---

## 2. Set up email — Resend  [you]

1. Go to https://resend.com and sign up.
2. Add and verify the domain **ffiaz.info** (Resend shows the DNS records to add;
   you'll add them where ffiaz.info's DNS is managed).
3. Create an **API key** and copy it → this is `RESEND_API_KEY`.
4. Decide your "from" address, e.g. `FFI Courses <no-reply@ffiaz.info>` → `EMAIL_FROM`.

> If you skip this, the site still works, but password-reset links are written to
> the server logs instead of emailed.

---

## 3. Put the code on GitHub  [you + agent]

- **[agent]** I'll initialize git and make the first commit (on your go-ahead).
- **[you]** Create an empty GitHub repo (e.g. `ffi-website`) and tell me the URL,
  or connect it during the Vercel import in step 4 (Vercel can create the repo).

---

## 4. Deploy on Vercel  [you]

1. Go to https://vercel.com and sign in with GitHub.
2. **Add New → Project** and import the `ffi-website` repo.
3. Framework preset: **Next.js** (auto-detected). Leave build settings default —
   the build command already runs migrations (`prisma migrate deploy`).
4. Add **Environment Variables** (Production + Preview):

   | Name | Value |
   |------|-------|
   | `DATABASE_URL` | Neon **pooled** string (from step 1) |
   | `DIRECT_URL` | Neon **direct** string (from step 1) |
   | `AUTH_SECRET` | `JIn2Qq89yJjGQVadmBpo6QUZ2rek9iIj3iXD7FMptXk=` (or run `npx auth secret`) |
   | `APP_URL` | `https://ffiaz.info` |
   | `RESEND_API_KEY` | from Resend (step 2) — optional |
   | `EMAIL_FROM` | `FFI Courses <no-reply@ffiaz.info>` |

5. Click **Deploy**. The first build runs the database migration automatically.

---

## 5. Point the domain — ffiaz.info  [you]

1. In the Vercel project: **Settings → Domains → Add** `ffiaz.info` (and
   `www.ffiaz.info`).
2. Vercel shows the DNS records to add (an A record / CNAME). Add them at your
   domain's DNS provider.
3. Wait for it to verify (usually minutes). HTTPS is automatic.

---

## 6. Create the production admin  [you, one-time]

The seed reads `SEED_ADMIN_EMAIL` / `SEED_ADMIN_PASSWORD`. To create your real
admin account on the production database, either:

- **Easiest:** sign up normally on the live site, then I (or you) promote that
  account to admin once (a one-line script / Neon SQL update), **or**
- Set `SEED_ADMIN_EMAIL` and `SEED_ADMIN_PASSWORD` in Vercel and run the seed
  once against the production DB.

> Don't reuse the local dev password (`ChangeMe!123`). Pick a strong one.

---

## What changes between local and production

| | Local (dev) | Production |
|---|---|---|
| Database | SQLite file (`prisma/dev.db`) | Neon Postgres |
| Prisma provider | `sqlite` → **switches to `postgresql`** | `postgresql` |
| Email | logged to console | sent via Resend |
| Secrets | `.env` (not committed) | Vercel env vars |

After we switch to Postgres, local development also uses the Neon connection
(or a Neon "development" branch) so the two environments match.

---

## Quick reference — env vars

```
DATABASE_URL=        # Neon pooled connection string
DIRECT_URL=          # Neon direct connection string (for migrations)
AUTH_SECRET=         # session secret (npx auth secret)
APP_URL=https://ffiaz.info
RESEND_API_KEY=      # optional, enables reset emails
EMAIL_FROM=FFI Courses <no-reply@ffiaz.info>
```
