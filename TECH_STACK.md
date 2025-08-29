# Tech Stack – KaleriAI

## Framework
- **Next.js 14 (App Router)**  
  - Server Components
  - Parallel Routes (for future Inbox/Detail style layouts)
  - Metadata API for SEO
  - File-based routing

## UI
- **TailwindCSS** – modern utility-first styling  
- **shadcn/ui** – prebuilt headless UI components (button, card, accordion, progress, sheet, etc.)  
- **Framer Motion** – animations and scroll-based transitions  
- **lucide-react** – icons  
- **Recharts** – charts for analytics  

## Theming
- **next-themes** – Dark/Light mode toggle  
- Gradient background (`bg-gradient-to-br from-gray-950 via-gray-800 to-indigo-900`)  

## Backend & Database
- **Supabase**  
  - Postgres database  
  - Authentication (email/password with JWT session)  
  - Realtime subscriptions  
  - Row Level Security (RLS) for access control  

## Forms & Validation
- **react-hook-form** for form management  
- **zod** + `@hookform/resolvers` for schema validation  

## SEO
- **sitemap.ts** and **robots.ts** with dynamic URLs  
- **JSON-LD** for FAQ schema  
- OpenGraph and Twitter metadata  

## Deployment
- Node.js 20 runtime  
- Flexible for Vercel, Netlify, or Docker-based deployment  
