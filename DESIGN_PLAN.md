# DUSHAC PLUMBING INC. — WEBSITE REDESIGN MASTER PLAN

**Status:** Planning complete. Ready for Phase A.

---

## EXISTING BUSINESS FACTS (Verified)
- **Established:** 1979, family-owned, two generations Master Plumbers
- **Location:** 117 Dushac Lane, Aliquippa PA
- **Licensed:** PA, OH & WV (licensing claim only; do not infer service area beyond what existing site supports)
- **Phone:** 724-624-4215 | **Email:** dushacplumbing@yahoo.com
- **Hours:** M-F 6 AM–5 PM
- **Certifications (current-site-supported, verify before production):** Rinnai ACE, ASSE Backflow, UTI Gas, DOT Gas
- **Contractor:** Dominion HomeServe (current-site-supported, verify before production)
- **Services:** plumbing repair/install, water heater, gas lines, water/fire lines, new construction, fixture install, excavation, dump truck, welding, camera sewer/line locating, radiant floor heating, septic repair
- **Tagline:** "When Quality Counts"
- **Current site:** WordPress.com hosted, dated design, fragmented information architecture, inconsistent page depth, several unmaintained sections

---

## CORE STRATEGY
Multi-page B2B contractor website (not one-page template). Homepage overview → detailed pages. Primary nav: **Logo (Home) · Services · Projects · About · Qualifications · Clients · Contact**. Testimonials/Careers in footer/contextual links only.

**Design:** Modern industrial contractor aesthetic. Strong typography, authentic project photography, clean grids, restrained palette (deep navy/slate, copper/rust, off-white, neutral grays). No generic stock photos, patterns, excessive cards/gradients/shadows, or decorative elements.

---

## HOMEPAGE STRUCTURE
1. **Hero** — "Commercial, Industrial & Residential Plumbing Since 1979" + primary CTA (Request a Quote)
2. **Credibility strip** — Established 1979 | Licensed PA/OH/WV | Technical certifications
3. **Company overview** — Family-owned positioning, "When Quality Counts," link to About
4. **Services overview** — 4–6 key services, link to View All Services
5. **Featured projects** — 3–4 real projects from existing portfolio, link to View Our Work
6. **Commercial proof** — Client logos (curated sample), link to View Our Clients
7. **Qualifications preview** — Certifications + licenses, link to See Our Qualifications
8. **Testimonials preview** — 2–3 short excerpts, link contextually
9. **Strong contact CTA** — "Ready to talk plumbing?" Request a Quote + phone prominent
10. **Footer** — Links to all pages, certifications, hours, address, secondary contact

---

## SITEMAP & DETAILED-PAGE STRUCTURE

**Primary Pages (Phase 1):**
- **Home** — Overview + links to all sections
- **Services** — Hub page (short description per category, link to each detail page if Phase 2 executed)
- **Projects** — Gallery/grid (real projects only, images + project name/location/type/description)
- **About** — Founding story, family ownership, licensing/geographic footprint, team positioning
- **Qualifications** — Licenses (PA/OH/WV), certifications (Rinnai/ASSE/UTI/DOT), Dominion HomeServe
- **Clients** — Curated roster, organized by type (commercial/industrial/residential) or geography, no endorsement claims
- **Contact** — Phone, email, address, hours, Request a Quote form

**Optional Phase 2 (only if source content justifies):**
- Service detail pages (Gas Lines, Water/Fire Lines, Water Heaters, New Construction, Fixture Install, Septic/Excavation)

---

## NAVIGATION & CTA STRATEGY

**Desktop Nav:** Logo (Home link) | Services · Projects · About · Qualifications · Clients · Contact | **Request a Quote** (button, copper/rust accent)

**Mobile Nav:** Hamburger menu, same structure, Request a Quote button always accessible

**Primary CTA:** "Request a Quote" (appears in hero, footer, contact page, prominent on all pages)

**Secondary CTA:** Phone number (724-624-4215) always visible in header or sticky footer on mobile

**Tertiary CTA:** Email link in footer

**Form Decision Required Before Coding:**
The Contact page includes a Request a Quote form. Axle must decide:
- **Option A:** Functional backend (email service or database integration)
- **Option B:** Intentionally demo-only (logs user input, displays confirmation, no backend)
- **Option C:** Disabled/placeholder (form marked "contact us directly" pending backend setup)

**Recommendation:** Option A (email integration via service like Formspree, EmailJS, or custom backend). Form should feel production-ready.

---

## CONTENT VERIFICATION CHECKLIST (Before Implementation)
- [ ] Exact current project images and descriptions available?
- [ ] Client logos available in high quality?
- [ ] Exact certification/license language from current site confirmed?
- [ ] Verify current active status: Rinnai ACE, ASSE Backflow, UTI Gas, DOT Gas, Dominion HomeServe?
- [ ] Testimonials (if any exist on current site) — exact wording to preserve or rewrite?
- [ ] Preferred primary phone: 724-624-4215 confirmed? (verify all digits)
- [ ] Service area/territory geographic scope explicitly stated on current site?
- [ ] Team/personnel information to include in About section?
- [ ] Radiant floor heating, septic repair, excavation — include on main Services hub or separate service pages?

---

## DESIGN DIRECTION
**Modern Industrial Contractor:** Deep navy/slate primary, copper/rust accents, off-white/neutral gray supporting palette. Two typefaces max (industrial grotesk display + neutral sans-serif body). Large authentic project photography, clean grids, confident composition, generous whitespace. No generic plumbing imagery, patterns, excessive decoration, or SaaS-style layouts. Communicate: family-owned + technical capability + established history + multi-service expertise.

---

## IMPLEMENTATION ORDER

**Phase A:** Asset collection (projects, clients, qualifications, testimonials from existing site)

**Phase B:** Shared system (header, footer, typography, color vars, components, repository setup)

**Phase C:** Homepage

**Phase D:** Interior pages (Services hub, Projects, About, Qualifications, Clients, Contact)

**Phase E:** Responsive + functional validation (forms, links, mobile nav, cross-browser testing)

**Phase F:** Deploy to production

**Phase G:** One final desktop + mobile Visual QA (against live production build)

---

## FORM BACKEND DECISION
**Action required:** Decide on Request a Quote form backend before Phase B implementation.
- Recommended: Email service (EmailJS or Formspree) for immediate production readiness
- Timeline: Integrate during Phase B (shared components)
- Testing: Validate form submission during Phase E

---

*Planning document finalized. Ready for Phase A approval.*
