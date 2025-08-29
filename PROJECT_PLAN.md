# Project Plan – KaleriAI

## Goal
KaleriAI is an AI-powered nutrition tracker.  
Users can take a photo of their meal and receive calorie/macronutrient breakdowns, personalized diet recommendations, and progress tracking via dashboards.

---

## Phases

### Phase 1 – Core Landing Page
- Build **Home page** with modern hero, animations, FAQ, and SEO meta.  
- Implement **Parallax background** with mouse movement.  
- Add **CTA** for user conversion.

### Phase 2 – Authentication
- Implement **custom auth system** (no Supabase).  
- **Phone-based signup & login** (only valid Iranian numbers: `09...`, `+98...`, `0098...`).  
- Store hashed passwords in in-memory DB (later replace with real DB).  
- JWT-based sessions (signed with server secret).  
- Token saved in **localStorage** (for simple demo).  
- Pages:  
  - `/signup` → Sign up with phone + password  
  - `/login` → Login with phone + password  
- After login/signup → redirect to `/dashboard`.  
- Logout → remove token, redirect to `/`.  
- `/api/auth/*` endpoints:  
  - `POST /register`  
  - `POST /login`  
  - `GET /me`

### Phase 3 – Dashboard
- Layout with **Sidebar** and **Header**  
- Sections:  
  - User Card (avatar, profile info)  
  - Stats Grid (Calories, Protein, Carbs, Fat)  
  - Goals Progress (progress bars)  
  - Activity Chart (weekly calories)  
  - Recent Meals list  
- Responsive + dark/light mode support.

### Phase 4 – Content & SEO
- **Not-found page** (`app/not-found.tsx`) with branded UI  
- **sitemap.ts** + **robots.ts** for search engines  
- FAQPage JSON-LD for better Google ranking

### Phase 5 – Enhancements (Future)
- Realtime meal tracking with web sockets / channels  
- File upload for meal photos  
- AI model integration (depth + segmentation inference)  
- Parallel routes for inbox/detail style dashboards  
- Replace localStorage tokens with secure **HttpOnly cookies** and **middleware** guards

---

## Deliverables
- SEO-optimized marketing website  
- Secure custom phone-based auth  
- Modern dashboard with analytics  
- Deployment-ready Next.js app
