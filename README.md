# Edge Institute of Technology — MERN Website

A complete MERN (MongoDB, Express, React, Node.js) website for **Edge Institute of Technology** — an industry-led degree institute powered by MentriQ Technologies.

Built from scratch with an original design and original content. The information architecture (home, programs, program detail, about, insights, admissions, FAQ, contact) follows common higher-education site patterns, but no copy, style or layout is copied from any other institute's site.

---

## What's inside

```
Edge/
├── server/                  # Express + MongoDB REST API
│   ├── config/db.js         # Mongoose connection
│   ├── models/              # User, Program, Inquiry, News, Testimonial, Faq, Partner
│   ├── controllers/         # Route handlers
│   ├── routes/              # API endpoints
│   ├── middleware/          # Auth (JWT), error handling
│   └── seed/                # Seed script + sample data
└── client/                  # React (Vite) frontend
    └── src/
        ├── api/client.js    # Axios instance + auth token interceptor
        ├── context/         # Auth context (admin login)
        ├── components/      # Navbar, Footer, LeadsForm, FaqList, ProgramCard, ...
        ├── pages/           # Home, Programs, ProgramDetail, About, Insights, ...
        └── pages/admin/     # Admin login + dashboard (CRUD for all content)
```

### Public website features
- Home page (hero, stats, programs, outcomes, partners, testimonials, FAQ, insights)
- Program listing with level filters + program detail pages (curriculum, careers, skills, fees, seats)
- About page, Insights (news/blog) list + article pages
- Admissions page with step-by-step process + lead-capture form
- Contact page with message form
- Fast, responsive, original design — no UI framework, hand-rolled CSS

### Admin features
- Secure login (JWT, bcrypt)
- Dashboard with an overview
- Manage **inquiries/leads** (update status, delete)
- Full CRUD for **programs** (incl. curriculum, highlights, careers, skills)
- Full CRUD for **news articles**, **testimonials**, **FAQs**, **partners**

---

## Tech stack

| Layer     | Technology |
|-----------|------------|
| Frontend  | React 18, Vite 5, React Router 6, Axios |
| Backend   | Node.js, Express 4 |
| Database  | MongoDB (Mongoose 8) |
| Auth      | JSON Web Tokens, bcryptjs |

---

## Getting started

### 1. Prerequisites
- Node.js 18+ (tested on Node 24)
- MongoDB running locally on `mongodb://127.0.0.1:27017` (or use MongoDB Atlas)

### 2. Backend

```bash
cd server
npm install
copy .env.example .env      # Windows  (on macOS/Linux: cp .env.example .env)
npm run seed                # seeds database + creates admin user
npm run dev                 # starts API on http://localhost:5000
```

### 3. Frontend

```bash
cd client
npm install
copy .env.example .env      # optional (defaults already point at /api via Vite proxy)
npm run dev                 # starts app on http://localhost:5173
```

Open **http://localhost:5173**. The Vite dev server proxies `/api` requests to `http://localhost:5000`, so no extra config is needed.

### 4. Production build

```bash
cd client
npm run build               # outputs static site to client/dist
```

Serve `client/dist` from any static host and point it at the API (set `VITE_API_URL` at build time if the API isn't on the same origin).

---

## Demo admin credentials

Seeded with the seed script:

```
Email:    admin@edge.edu
Password: admin123
```

Login at **http://localhost:5173/admin/login**.

> Change the JWT secret in `server/.env` before deploying.

---

## API reference (summary)

| Method | Endpoint                  | Access  | Description |
|--------|---------------------------|---------|-------------|
| GET    | `/api/health`             | Public  | Health check |
| GET    | `/api/programs`           | Public  | List programs (`?level=&category=&featured=&search=`) |
| GET    | `/api/programs/slug/:slug`| Public  | Program detail |
| POST   | `/api/programs`           | Admin   | Create program |
| PUT    | `/api/programs/:id`       | Admin   | Update program |
| DELETE | `/api/programs/:id`       | Admin   | Delete program |
| GET    | `/api/news`               | Public  | List published articles (paginated) |
| GET    | `/api/news/slug/:slug`    | Public  | Article detail |
| POST   | `/api/news`               | Admin   | Create article |
| PUT    | `/api/news/:id`           | Admin   | Update article |
| DELETE | `/api/news/:id`           | Admin   | Delete article |
| GET    | `/api/testimonials`       | Public  | List testimonials |
| POST   | `/api/testimonials`       | Admin   | Create testimonial |
| PUT/DELETE | `/api/testimonials/:id` | Admin   | Update / delete |
| GET    | `/api/faqs`               | Public  | List FAQs |
| POST   | `/api/faqs`               | Admin   | Create FAQ |
| PUT/DELETE | `/api/faqs/:id`        | Admin   | Update / delete |
| GET    | `/api/partners`           | Public  | List partners |
| POST   | `/api/partners`           | Admin   | Create partner |
| PUT/DELETE | `/api/partners/:id`    | Admin   | Update / delete |
| POST   | `/api/inquiries`          | Public  | Submit lead / contact / callback form |
| GET    | `/api/inquiries`          | Admin   | List inquiries |
| PUT    | `/api/inquiries/:id/status`| Admin  | Update inquiry status |
| DELETE | `/api/inquiries/:id`      | Admin   | Delete inquiry |
| POST   | `/api/auth/login`         | Public  | Admin login → JWT |
| GET    | `/api/auth/me`            | Admin   | Current user |

---

## Project structure notes
- All admin content changes go live immediately on the public site (no cache layer).
- Forms submit as **inquiries** and are managed from the admin dashboard.
- Original fonts: Sora (display) + Inter (body) from Google Fonts.

---

## Disclaimer
This is a demo/institute website and is not affiliated with any official academic body. Degree-granting partner campus details shown are sample data managed via the admin dashboard.