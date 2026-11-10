# Mentorplan – mentorplan.dk

Static Next.js 14 site (App Router, `output: "export"`), deployed to Simply.com by
`.github/workflows/deploy.yml` on every push to `main`.

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # static site in ./out
```

## Where things live

| What | Where |
| --- | --- |
| Company details (phone, address, e-mail, CVR, services, menu) | `app/lib/site.ts` |
| Page metadata helper (title, description, canonical, OG/Twitter) | `app/lib/metadata.ts` |
| Consultants (edit this to add/remove people) | `app/data/employees.json` + photo in `public/images/` mapped in `app/lib/employees.ts` |
| GSAP setup (plugins registered once) | `app/lib/gsap.ts` |
| Front-page sections | `app/ui/sections/` |
| Shared UI (navbar, footer, logo, contact form, …) | `app/ui/` |

Navbar and footer are rendered once in `app/layout.tsx`.

### Adding a consultant

1. Add the photo to `public/images/` (square, ~512×512 JPG).
2. Import it in `app/lib/employees.ts` and add it to `IMAGES`.
3. Add the person to `app/data/employees.json` with `"img"` set to that key.

A profile page is generated automatically at `/employees/<name-slug>/` and added to the sitemap.

### Images and video

Images are served as-is (static export, no image optimisation), so keep files small:
max ~1600 px wide, JPG quality ~80. The hero video is 1080p H.264 without audio.

### Contact form

Submits to Web3Forms (`app/ui/contact-form.tsx`); messages arrive in the inbox configured in the Web3Forms account.
