# Design Guidelines – KaleriAI

## Visual Identity
- **Theme:** modern, gradient, health + AI focus  
- **Primary Gradient:** `from-gray-950 via-gray-800 to-indigo-900`  
- **Highlight Colors:** emerald (#10b981), cyan, fuchsia for glow effects  
- **Typography:** clean, bold for headers, system font fallback  

## Components
- **Navbar:**  
  - Brand logo (KaleriAI text)  
  - Links: How it works, Features, FAQ  
  - Actions: Login, Sign up, Dashboard  
  - Theme toggle (dark/light with Sun/Moon icon)  
  - Mobile: collapsible Sheet menu

- **Home Page Sections:**  
  1. Hero (badge, CTA, hero image with AI scan demo)  
  2. How It Works (3-step cards with icons)  
  3. Accuracy (progress bar, AI correction feature)  
  4. Features grid (cards with icons)  
  5. Testimonials (avatars + quotes)  
  6. FAQ accordion (SEO structured data)  
  7. Final CTA

- **Authentication Pages:**  
  - **Signup:**  
    - Form fields: **Phone (Iran only, 09 / +98 / 0098)**, Password, Confirm Password  
    - Inline validation with error states (shadcn Alert for "User already exists" or invalid phone)  
  - **Login:**  
    - Form fields: Phone, Password  
    - Error handling:  
      - 404 → User not registered → red Alert  
      - 401 → Wrong password → inline error  
    - On success: save JWT to `localStorage` and redirect to `/dashboard`  
  - **Logout:** button clears token and redirects to `/`

- **Dashboard:**  
  - **Sidebar:** Navigation (Dashboard, Analytics, Settings, Logout)  
  - **Header:** Page title + Theme toggle + User avatar  
  - **User Card:** Profile picture, **phone number** (instead of email), membership info  
  - **Stats Grid:** Calories, Protein, Carbs, Fat (cards)  
  - **Goals Progress:** Progress bars  
  - **Activity Chart:** Line chart (weekly calories)  
  - **Recent Meals:** List with kcal values  

## Animation
- **Framer Motion**: fade-in, slide-up, scaling  
- **Parallax Background:** glow orbs shifting with mouse movement  
- **Smooth hover states** with Tailwind `hover:bg-white/10` style  

## Responsiveness
- Mobile-first design  
- Grid layouts (`md:grid-cols-2`, `lg:grid-cols-3`)  
- Collapsible sidebar on smaller screens  

## Accessibility
- Semantic HTML (header, main, nav, section)  
- Alt text on all images  
- Buttons and links with aria-labels where needed  
- Proper error messaging on auth forms for screen readers  
