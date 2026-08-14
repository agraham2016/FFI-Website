# FFI Qualified Vendor Policy Manual

Source files and build tooling for the Foundation for Independence **DDD Qualified Vendor Policy
Manual** — the policy set required by the Arizona DES Division of Developmental Disabilities
Policy Development Tool (DDD-2051A) for FFI's approved services:

- Habilitation, Supported Living (HAI/HID)
- Group Supported Employment (GSE)
- Individual Supported Employment (ISE)
- Employment Support Aide (ESA)
- Pathways to Employment (PTE)
- Transportation — Employment Related (TR1)

## Structure

```
policy-manual/
  agency.json          Agency identity used on the cover & headers (edit contract # here)
  front-matter/        Agency profile + how-to-use pages
  policies/            One markdown file per policy (FFI-01 ... FFI-27)
  styles.css           Print design (FFI brand colors + logo)
  build.mjs            Builds dist/manual.html and dist/FFI-Policy-Manual.pdf
```

Each policy file starts with front matter (number, title, section, owner, effective date, the
DDD-2051A checklist it satisfies, and services it applies to) followed by the policy body in
markdown.

## Building the PDF

```bash
cd policy-manual
npm install
npm run build        # writes dist/manual.html + dist/FFI-Policy-Manual.pdf
npm run html         # HTML only (no Chromium needed)
```

The build embeds `../public/logo.png` and uses the website's brand palette (teal + sand), a cover
page, agency profile, table of contents, part dividers, and per-policy document-control headers.

## Editing workflow

1. Edit the relevant `policies/*.md` file (or add a new one — files are ordered by filename).
2. Update the policy's `reviewed:` date in front matter when reviewed.
3. Re-run `npm run build` and share/print the PDF.

## Before submitting to DDD

- Replace `[DDD Contract #]` in `agency.json` with the real contract number.
- Fill out the DDD-2051A checklist "Policy Page Reference" columns against the built PDF's page
  numbers.
- Have the Executive Director sign/date the manual per DDD submission instructions.
