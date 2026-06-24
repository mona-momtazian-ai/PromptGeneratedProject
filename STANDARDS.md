# گالری میراث باستانی ایران — UI & Logic Standards

> A living reference for every convention used in this project.  
> Stack: pure HTML5 · CSS3 · vanilla JavaScript — no frameworks, no build tools.

---

## 1. Project Structure

```
project/
├── index.html   — markup shell, semantic HTML5, RTL document root
├── style.css    — all visual styles; imported by index.html
└── script.js    — data array + all interactivity; deferred via <script> at body end
```

---

## 2. Internationalisation & RTL

| Setting | Value | Location |
|---|---|---|
| Document language | `lang="fa"` | `<html>` |
| Text direction | `dir="rtl"` | `<html>` |
| Font stack | `'Vazirmatn', 'Tahoma', 'Arial Unicode MS', sans-serif` | `body` in CSS |
| Font source | Google Fonts `@import` via `<link rel="preconnect">` + stylesheet link | `<head>` |
| Font weights loaded | 300, 400, 500, 700 | Google Fonts query string |

### RTL-aware CSS property used

```css
/* Close button anchored to the logical start edge (= right in RTL, left in LTR) */
inset-inline-start: 14px;
```

Use logical properties (`inset-inline-*`, `padding-inline-*`) for any position that must flip with text direction.

---

## 3. Design Tokens (CSS Custom Properties)

Defined once on `:root`; reference everywhere with `var()`.

```css
:root {
  /* Backgrounds */
  --bg:           #111111;              /* page background */
  --bg-card:      #1b1b1b;              /* card surface */
  --bg-modal:     #181818;              /* modal surface */

  /* Accent */
  --accent:       #c9a84c;              /* warm gold — headings, highlights */
  --accent-dim:   rgba(201,168,76,.22); /* tinted accent for hover states */

  /* Text */
  --text:         #e8e4dc;              /* primary body text */
  --text-muted:   #9a9080;              /* secondary / caption text */

  /* Chrome */
  --border:       rgba(255,255,255,.07); /* subtle card/modal border */
  --overlay:      rgba(0,0,0,.88);       /* modal backdrop */

  /* Shape */
  --radius-card:  12px;
  --radius-modal: 16px;

  /* Animation */
  --ease: cubic-bezier(0.4, 0, 0.2, 1); /* material-standard easing */
  --dur:  0.32s;                         /* base transition duration */
}
```

---

## 4. Typography Scale

| Element | Size | Weight | Color |
|---|---|---|---|
| Header eyebrow (`p.header-eyebrow`) | `0.7rem` | 500 | `--accent` |
| Page title (`h1`) | `clamp(1.8rem, 4.5vw, 3rem)` | 700 | `--text` |
| Header subtitle | `clamp(0.85rem, 2vw, 1rem)` | 300 | `--text-muted` |
| Card name (`.card-name`) | `1.05rem` | 700 | `--accent` |
| Card teaser (`.card-teaser`) | `0.82rem` | 400 | `--text-muted` |
| Modal eyebrow (`.modal-eyebrow`) | `0.68rem` | 500 | `--accent` |
| Modal title (`#modal-title`) | `clamp(1.5rem, 3vw, 2.1rem)` | 700 | `--text` |
| Modal description (`#modal-description`) | `0.9rem` | 300 | `--text-muted` |
| Footer | `0.75rem` | 400 | `--text-muted` |

`clamp()` is used for fluid type scaling on headings — no breakpoint needed.  
Body `line-height`: **1.7**; modal description `line-height`: **2**.

---

## 5. Color System

| Role | Hex / Value |
|---|---|
| Page background | `#111111` |
| Card background | `#1b1b1b` |
| Modal background | `#181818` |
| Primary accent (gold) | `#c9a84c` |
| Accent dim (hover bg) | `rgba(201,168,76,.22)` |
| Primary text | `#e8e4dc` |
| Secondary text | `#9a9080` |
| Subtle border | `rgba(255,255,255,.07)` |
| Backdrop overlay | `rgba(0,0,0,.88)` |

---

## 6. Layout — Gallery Grid

```css
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
  padding: 24px 40px 72px;
  max-width: 1440px;
  margin: 0 auto;
}
```

- **`auto-fill` + `minmax`**: cards fill available width; single column on narrow screens without explicit breakpoints (collapses naturally below 280px column).
- `max-width: 1440px` caps the grid on ultra-wide displays.

---

## 7. Card Component

### HTML structure

```html
<article class="card" role="listitem" tabindex="0" aria-label="[name] — [teaser]">
  <div class="card-image-wrap">
    <img src="..." alt="..." loading="lazy" decoding="async">
  </div>
  <div class="card-body">
    <p class="card-name">...</p>
    <p class="card-teaser">...</p>
  </div>
</article>
```

### Visual behaviour

| State | Effect |
|---|---|
| Default | dark card surface, `1px` border at `--border` |
| `:hover` / `:focus-visible` | `translateY(-7px)`, box-shadow with gold tint |
| `:focus-visible` (keyboard) | additional `3px` gold ring |
| Image on hover | `scale(1.07)` zoom (65 clipped by `overflow:hidden`) |

### Image area

- `aspect-ratio: 16 / 10` — fixed proportion regardless of image size
- `object-fit: cover` — image fills without distortion
- `::after` gradient overlay: `transparent 55%` → `rgba(0,0,0,.38) 100%`

---

## 8. Modal / Lightbox Component

### HTML structure

```html
<div class="modal-overlay" id="modal"
     role="dialog" aria-modal="true"
     aria-labelledby="modal-title" aria-hidden="true">

  <div class="modal-content" id="modal-content">
    <button class="modal-close" id="modal-close" aria-label="بستن پنجره">✕</button>

    <div class="modal-image-wrap">
      <img id="modal-image" src="" alt="">
    </div>

    <div class="modal-text">
      <p class="modal-eyebrow">میراث تاریخی ایران</p>
      <h2 id="modal-title"></h2>
      <div class="modal-divider"></div>
      <p id="modal-description"></p>
    </div>
  </div>

</div>
```

### Layout

- Desktop: `.modal-content` is a **flex row** — image panel `flex: 0 0 55%`, text panel `flex: 1`
- Mobile (≤680px): **flex column** — image fixed height `220px`, text scrollable below

### Animation

| Property | Hidden state | Visible state |
|---|---|---|
| `.modal-overlay` opacity | `0` | `1` |
| `.modal-overlay` visibility | `hidden` | `visible` |
| `.modal-content` transform | `scale(0.93) translateY(14px)` | `scale(1) translateY(0)` |

Backdrop also applies `backdrop-filter: blur(5px)`.

### Close triggers

| Trigger | Mechanism |
|---|---|
| ✕ button click | `modalClose.addEventListener('click', closeModal)` |
| Backdrop click | `modal.addEventListener('click', e => { if (e.target === modal) closeModal() })` |
| Escape key | `document.addEventListener('keydown', e => { if (e.key === 'Escape' ...) })` |

---

## 9. Accessibility Standards

| Pattern | Implementation |
|---|---|
| Landmark roles | `<header role="banner">`, `<main>`, `<footer role="contentinfo">` |
| Gallery label | `<div role="list" aria-label="آثار تاریخی ایران">` |
| Card keyboard access | `tabindex="0"` + Enter/Space keydown handler → `openModal()` |
| Card ARIA label | `aria-label="[name] — [teaser]"` on each `<article>` |
| Modal dialog | `role="dialog"`, `aria-modal="true"`, `aria-labelledby="modal-title"` |
| Modal hidden state | `aria-hidden="true"` when closed, attribute removed on open |
| Modal focus management | On open: `requestAnimationFrame(() => modalClose.focus())`; on close: `lastFocused.focus()` |
| Close button label | `aria-label="بستن پنجره"` |
| Scroll lock | `body.modal-open { overflow: hidden }` toggled on open/close |
| Focus ring (keyboard) | `:focus-visible` — gold `3px` outline; `:focus` (mouse) suppressed |

---

## 10. Performance Standards

| Technique | Detail |
|---|---|
| Lazy image loading | `loading="lazy"` on all `<img>` elements |
| Async decoding | `decoding="async"` on all card images |
| Deferred script | `<script src="script.js">` placed at end of `<body>` |
| Font preconnect | `<link rel="preconnect" href="https://fonts.googleapis.com">` |
| Modal image clearing | `src=""` cleared 350 ms after close (post-transition) to free memory and avoid stale flash on reopen |
| Transition duration | `--dur: 0.32s` — fast enough to feel instant, long enough to register |

---

## 11. Responsive Breakpoints

| Breakpoint | Changes |
|---|---|
| ≤900px (tablet) | Grid padding reduced; gap tightened |
| ≤680px (mobile) | Modal switches to vertical stack; image fixed at `220px` height; header padding reduced |
| ≤420px (narrow) | Grid forced to single column (`grid-template-columns: 1fr`); modal image at `190px` |

---

## 12. JavaScript Data Model

Each entry in the `SITES` array follows this schema:

```javascript
{
  name:   string,  // Persian site name (displayed in card + modal title)
  teaser: string,  // One-line summary (card subtitle)
  image:  string,  // Wikimedia Commons 1280px thumbnail URL
  alt:    string,  // Descriptive Persian alt text for the image
  desc:   string,  // Full Persian paragraph for modal body
}
```

**Image URL convention** — Wikimedia Commons 1280px thumbnail pattern:

```
https://upload.wikimedia.org/wikipedia/commons/thumb/{a}/{ab}/{filename}/1280px-{filename}
```

Thumbnails at this size must be pre-cached via the Wikipedia `pageimages` API (`pithumbsize=1000` or higher triggers generation of the nearest standard size, `1280px`).

---

## 13. JavaScript Logic Patterns

### Card rendering

```javascript
function renderCards() {
  SITES.forEach((site, index) => {
    const article = document.createElement('article');
    // set className, role, tabindex, aria-label, innerHTML
    article.addEventListener('click',   () => openModal(index));
    article.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openModal(index); }
    });
    grid.appendChild(article);
  });
}
document.addEventListener('DOMContentLoaded', renderCards);
```

### Modal open

```javascript
function openModal(index) {
  lastFocused = document.activeElement;      // save focus origin
  // populate modal fields from SITES[index]
  modal.removeAttribute('aria-hidden');
  modal.classList.add('active');
  document.body.classList.add('modal-open');
  requestAnimationFrame(() => modalClose.focus());
}
```

### Modal close

```javascript
function closeModal() {
  modal.setAttribute('aria-hidden', 'true');
  modal.classList.remove('active');
  document.body.classList.remove('modal-open');
  setTimeout(() => { if (!modal.classList.contains('active')) modalImg.src = ''; }, 350);
  if (lastFocused) lastFocused.focus();
}
```

---

## 14. Semantic HTML Conventions

- Page sections use native sectioning elements: `<header>`, `<main>`, `<footer>`
- Each gallery card is an `<article>` (self-contained content item)
- Card title uses `<p class="card-name">` (not `<h3>`) — the page has only one true heading hierarchy; modal uses `<h2>` for the active item title
- Decorative dividers are `<div>` (not `<hr>`) — they carry no semantic meaning
- Footer attribution link: `target="_blank" rel="noopener noreferrer"` (security best-practice for external links)

---

## 15. Scrollbar Styling (Modal Text Panel)

```css
scrollbar-width: thin;                              /* Firefox */
scrollbar-color: rgba(255,255,255,0.1) transparent;

/* WebKit */
::-webkit-scrollbar       { width: 4px; }
::-webkit-scrollbar-track { background: transparent; }
::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.1); border-radius: 2px; }
```

---

*Last updated: 2026-06-24*
