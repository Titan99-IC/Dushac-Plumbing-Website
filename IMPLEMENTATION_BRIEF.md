# IMPLEMENTATION BRIEF FOR WEBSITE CODING WORKER

## PROJECT OVERVIEW
Modern, multi-page contractor website for Dushac Plumbing Inc. (Aliquippa, PA). Family-owned, two generations Master Plumbers, established 1979. Serves commercial, industrial, and residential clients. Licensed PA/OH/WV. Tagline: "When Quality Counts."

---

## DESIGN PHILOSOPHY (Single Direction)
**Modern Industrial Contractor Aesthetic**
- Clean, confident composition. Generous whitespace. Large authentic project photography.
- Palette: Deep navy/slate (primary) + copper/rust (accents) + off-white/neutral grays
- Typography: Two families max — industrial grotesk for headings, neutral sans-serif for body
- Avoid: Generic plumbing stock photos, patterns, excessive cards/gradients/shadows, decorative elements, SaaS layouts

---

## SITE STRUCTURE & PAGES

**Navigation:** Logo (Home link) · Services · Projects · About · Qualifications · Clients · Contact | Request a Quote CTA

**Pages:**
1. **Home** — 10-section overview (Hero, Credibility strip, Company overview, Services teaser, Featured Projects, Client logos, Qualifications preview, Testimonials, Contact CTA, Footer)
2. **Services** — Hub page with 4–6 key service categories; includes other capabilities (excavation, welding, etc.)
3. **Projects** — Gallery/grid with real projects only (images + name/location/type/description)
4. **About** — Founding story, family ownership, licensing/geographic footprint, team positioning
5. **Qualifications** — Licenses (PA/OH/WV), certifications, Dominion HomeServe contractor status
6. **Clients** — Curated roster organized by type or geography; no invented endorsements
7. **Contact** — Phone, email, address, hours, Request a Quote form

---

## SHARED COMPONENTS & SYSTEMS

### Color Palette (CSS Variables)
```
--primary-navy: #1a1f3a (or similar deep slate/navy)
--accent-copper: #b8860b or #a0522d (rust/copper)
--bg-light: #f8f8f6 (off-white)
--text-dark: #1a1f3a
--text-light: #7a7a78 (neutral gray)
--border: #e0dcd8
```

### Typography
- **Headings:** Industrial grotesk (e.g., Inter, Montserrat, IBM Plex Sans Condensed bold)
- **Body:** Neutral sans-serif (e.g., Inter, Source Sans Pro, IBM Plex Sans)
- No serif body copy

### CTA Buttons
- Primary: "Request a Quote" — copper/rust background, white text, solid
- Secondary: Navigation links
- Always visible in header, footer, and contact sections

### Responsive Breakpoints
- Desktop: 1440px+
- Tablet: 768px–1439px
- Mobile: 320px–767px
- Mobile nav: Hamburger menu for tablet/mobile, with Request a Quote button always accessible

---

## CRITICAL CONSTRAINTS

### Fact Discipline (Do Not Invent)
- ❌ New certifications, licenses, service territories, warranties
- ❌ Client relationships beyond what existing site supports
- ❌ Project scope, contract values, dates, testimonials
- ❌ Team members, emergency availability, proprietary processes
- ❌ HVAC or capabilities beyond verified plumbing services
- ✓ Use only facts from existing Dushac website
- ✓ Flag uncertain items (e.g., certifications) for verification before production

### Imagery Rules
- Use real project photos from existing site only
- Client logos from existing site only (request high-quality files)
- No generic plumbing stock photos
- No placeholder imagery in production build

### CTA Rules
- Always use "Request a Quote" (not "Get a Quote")
- Phone: 724-624-4215 (verify all digits before implementation)
- Email: dushacplumbing@yahoo.com
- Phone always visible: header badge or sticky footer on mobile
- Form: Functional backend (see Form Backend Decision below)

### Homepage Structure (10 Sections in Order)
1. Hero — "Commercial, Industrial & Residential Plumbing Since 1979" + Request a Quote button
2. Credibility strip — Established 1979 | Licensed PA/OH/WV | Technical certifications
3. Company overview — Family-owned, "When Quality Counts," link to About
4. Services overview — 4–6 key services, "View All Services" link
5. Featured projects — 3–4 real projects, "View Our Work" link
6. Commercial proof — Client logos (curated), "View Our Clients" link
7. Qualifications preview — Licenses + certifications, "See Our Qualifications" link
8. Testimonials preview — 2–3 short excerpts, contextual link
9. Contact CTA — "Ready to talk plumbing?" with Request a Quote + phone
10. Footer — Site links, certifications, hours, address, email

---

## FORM BACKEND DECISION (Required Before Phase B)

**Request a Quote form must be:**
- ✓ **Option A:** Functional (EmailJS, Formspree, or custom backend) → Recommended for production
- ❌ Option B: Demo-only (console logging, fake confirmation) → Never ship this
- ❌ Option C: Hidden/disabled (breaks trust) → Not acceptable

**Recommendation:** Option A. Form should feel production-ready.

---

## RESPONSIVE & ACCESSIBILITY REQUIREMENTS

- Mobile-first approach
- Semantic HTML (nav, header, main, section, article, footer)
- ARIA labels where appropriate
- Form accessibility (labels, error states, success messages)
- Hamburger menu on tablet/mobile (Request a Quote button always visible)
- Touch-friendly button sizes (min 44x44px)
- No auto-play media
- Proper heading hierarchy (h1, h2, h3)

---

## IMPLEMENTATION ORDER

**Phase A:** Asset collection (projects, clients, certifications, testimonials from existing site)

**Phase B:** Shared system
- GitHub Pages setup / hosting configuration
- Header, footer, typography, color system
- Navigation (desktop + mobile hamburger)
- Form backend integration (decision required)
- Reusable components (buttons, cards, grids)

**Phase C:** Homepage (all 10 sections)

**Phase D:** Interior pages (Services, Projects, About, Qualifications, Clients, Contact)

**Phase E:** Responsive & functional validation
- Desktop, tablet, mobile testing
- Form submission validation
- All navigation links functional
- Cross-browser testing
- Performance checks

**Phase F:** Deploy to production

**Phase G:** Final Visual QA
- One desktop capture (1440x900)
- One mobile capture (390x844)
- Acceptance checklist:
  - ✓ All pages load correctly
  - ✓ Navigation works on desktop and mobile
  - ✓ CTAs (Request a Quote, phone) always visible
  - ✓ Hero communicates company position clearly
  - ✓ Real project images / client logos present
  - ✓ Form is functional (not broken/demo-only)
  - ✓ Responsive design looks good at all breakpoints
  - ✓ No generic plumbing stock photos
  - ✓ Typography is distinctive and readable
  - ✓ Palette is restrained (navy, copper, off-white, grays only)

---

## KNOWN FACTS TO USE

| Fact | Value |
|------|-------|
| Business Name | Dushac Plumbing Inc. |
| Address | 117 Dushac Lane, Aliquippa PA |
| Phone | 724-624-4215 |
| Email | dushacplumbing@yahoo.com |
| Hours | M–F 6 AM–5 PM |
| Founded | 1979 |
| Ownership | Family-owned, two generations Master Plumbers |
| Licenses | PA, OH, WV (licensing claim; do not infer service areas) |
| Certifications | Rinnai ACE, ASSE Backflow, UTI Gas, DOT Gas (verify before production) |
| Contractor | Dominion HomeServe (verify before production) |
| Tagline | "When Quality Counts" |
| Services | Plumbing repair/install, water heater, gas lines, water/fire lines, new construction, fixture install, excavation, dump truck, welding, camera sewer/line locating, radiant floor heating, septic repair |

---

## WHAT NOT TO BUILD

- ❌ One-page template
- ❌ Generic emergency-plumber landing page
- ❌ SaaS-style white/blue layouts
- ❌ Excessive card-based designs
- ❌ Plumbing pattern backgrounds
- ❌ Stock photo heroes with random plumbers
- ❌ HVAC section or capabilities
- ❌ Fake testimonials or invented client relationships
- ❌ Demo-only form (must be functional or clearly disabled)
- ❌ More than two typeface families
- ❌ Green success accents or secondary brand colors
- ❌ Calculated experience counts ("45+ years") instead of "Since 1979"
- ❌ Service area inferences beyond licensed states

---

## ACCEPTANCE CRITERIA (Phase G Visual QA)

- ✓ Design communicates family-owned + technical capability + established history
- ✓ Homepage preview sections clearly link to their corresponding detail pages
- ✓ All real project images and client logos present (no stock photos)
- ✓ Request a Quote CTA always visible and functional
- ✓ Phone number (724-624-4215) always prominent
- ✓ Responsive design works on all breakpoints
- ✓ Form backend is functional (not demo-only)
- ✓ Visual design feels modern, confident, and industrial—not generic or templated
- ✓ No invented facts or capabilities

---

*This brief is sufficient for Phase B–G implementation. Phase A (asset collection) requires stakeholder coordination.*
