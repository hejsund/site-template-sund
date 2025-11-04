# Sund och Stark v0 - Project Overview

## ✅ Status: Ready for Development

**Cloned from:** https://github.com/rickardsteinwig/sommarboosten-gl
**Local path:** `~/site-template-sund-och-stark-v0`
**Build status:** ✅ Success
**Supabase:** ✅ Connected

---

## 🏗️ Tech Stack

- **Framework:** React 18 + TypeScript
- **Build Tool:** Vite 5
- **UI Library:** shadcn/ui (Radix UI + Tailwind CSS)
- **Backend:** Supabase (PostgreSQL)
- **State Management:** TanStack Query (React Query)
- **Routing:** React Router v6
- **Styling:** Tailwind CSS + CSS Modules
- **Forms:** React Hook Form + Zod validation
- **Analytics:** Google Tag Manager + Facebook CAPI

---

## 📁 Project Structure

```
site-template-sund-och-stark-v0/
├── src/
│   ├── components/          # React components
│   │   ├── ui/             # shadcn/ui components (40+ components)
│   │   ├── quiz/           # Quiz-related components
│   │   ├── hemlig/         # Secret page components
│   │   ├── Navigation.tsx
│   │   ├── Hero.tsx
│   │   ├── Quiz.tsx
│   │   └── ...
│   ├── pages/              # Route pages
│   │   ├── Index.tsx
│   │   ├── QuizPage.tsx
│   │   ├── articles/       # Article pages
│   │   └── ...
│   ├── contexts/           # React contexts
│   │   └── TimePhaseContext.tsx
│   ├── integrations/       # External integrations
│   │   └── supabase/
│   │       ├── client.ts   # Supabase client
│   │       └── types.ts    # Generated DB types
│   ├── utils/              # Utility functions
│   │   ├── pushToDataLayer.ts  # GTM tracking
│   │   ├── facebookEvents.ts   # Facebook CAPI
│   │   └── ...
│   ├── data/               # Static data
│   │   └── questions.ts    # Quiz questions
│   ├── types/              # TypeScript types
│   └── App.tsx             # Main app component
├── supabase/
│   ├── migrations/         # 20+ SQL migrations
│   ├── functions/          # Edge functions
│   └── config.toml         # Supabase config
├── public/                 # Static assets
├── dist/                   # Build output
└── package.json
```

---

## 🗄️ Supabase Database Schema

### Connection Details
- **URL:** `https://ttidnpncifqtetnhcdhq.supabase.co`
- **Status:** ✅ Connected
- **RLS:** Enabled with public insert policies

### Tables

#### 1. `sb_home_page_leads`
Stores email signups from the home page.
```sql
- id: uuid (PK)
- email: text
- year: integer
- created_at: timestamp
- updated_at: timestamp
- ip_address: inet
- user_agent: text
- source: text (default: 'home_page')
- synced_at: timestamp (for Airtable sync)
```

#### 2. `sb_quiz_leads` / `sb_leads_quiz_new`
Stores quiz completions with user data.
```sql
- id: uuid (PK)
- email: text
- age: text
- gender: text
- quiz_score: integer
- quiz_answers: jsonb
- recommendation_type: text
- year: integer
- created_at: timestamp
- updated_at: timestamp
- ip_address: inet
- user_agent: text
- source: text (default: 'quiz')
```

#### 3. `sb_content_sub_pages`
Content management for dynamic article pages.
```sql
- id: uuid (PK)
- title: text
- slug: text
- category: text
- content: text
- image_url: text
- icon: text
- color: text
- excerpt: text
- read_time: text
- custom_sections: jsonb
- email_signup_title: text
- email_signup_description: text
- email_signup_button_text: text
- cta_title: text
- cta_primary_button_text: text
- cta_secondary_button_text: text
- created_at: timestamp
- updated_at: timestamp
```

#### 4. `leads` (Legacy)
Old leads table from previous implementation.
```sql
- id: uuid (PK)
- name: text
- email: text
- phone: text
- address: text
- house_size: text
- installation_time: text
- is_homeowner: text
- project_plan: text
- notes: text
- airtable_success: boolean
- capi_success: boolean
- capi_error: text
- fbp: text
- fbc: text
- source: text
- stage: text
- created_at: timestamp
- updated_at: timestamp
```

---

## 🔌 Key Integrations

### 1. Supabase
- **Client:** `src/integrations/supabase/client.ts`
- **Types:** Auto-generated from DB schema
- **Usage:** Direct inserts from React components
- **RLS:** Public insert policies enabled

### 2. Google Tag Manager
- **Implementation:** `src/utils/pushToDataLayer.ts`
- **Events:**
  - Page views
  - Quiz begin/complete
  - Email submissions
  - Form interactions

### 3. Facebook Conversion API (CAPI)
- **Implementation:** `src/utils/facebookEvents.ts`
- **Events:**
  - Page views
  - Lead submissions
  - Form completions
- **Cookies:** fbp, fbc tracking

### 4. Airtable Sync
- **Component:** `src/components/AirtableSync.tsx`
- **Purpose:** Sync leads to Airtable
- **Status:** Legacy integration

---

## 🛣️ Routes

```
/                          → Index (home page)
/quiz                      → Quiz page
/om-charlotte              → About Charlotte
/om-sommarboosten          → About Sommarboosten
/sa-har-borjade-det        → How it started
/tidigare-ar               → Previous years
/program/:year             → Program by year
/artiklar                  → Articles listing
/artiklar/:slug            → Dynamic article pages
/integritetspolicy         → Privacy policy
/villkor                   → Terms
/airtable-sync             → Airtable sync admin
/hemlig                    → Secret page
```

---

## 📦 Dependencies Summary

### Core
- react@18.3.1
- react-dom@18.3.1
- react-router-dom@6.26.2
- typescript@5.5.3

### UI & Styling
- @radix-ui/* (40+ components)
- tailwindcss@3.4.11
- lucide-react@0.462.0 (icons)
- class-variance-authority@0.7.1

### Backend & Data
- @supabase/supabase-js@2.50.0
- @tanstack/react-query@5.56.2

### Forms & Validation
- react-hook-form@7.53.0
- zod@3.23.8

### Utilities
- date-fns@3.6.0
- sonner@1.5.0 (toast notifications)

---

## 🚀 Development Commands

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:5173)
npm run dev

# Build for production
npm run build

# Build for development
npm run build:dev

# Preview production build
npm run preview

# Lint code
npm run lint
```

---

## ✅ Supabase Write Test Results

### Quiz Lead Insert
**Component:** `src/components/Quiz.tsx`
**Table:** `sb_leads_quiz_new`
**Status:** ✅ Working

**Example Insert:**
```typescript
const { data, error } = await supabase
  .from('sb_leads_quiz_new')
  .insert({
    email: 'test@example.com',
    age: '25-34',
    gender: 'Kvinna',
    quiz_score: 75,
    quiz_answers: { ... },
    recommendation_type: 'sommarboosten',
    user_agent: navigator.userAgent,
    source: 'quiz'
  })
  .select()
  .single();
```

### Home Page Lead Insert
**Component:** `src/components/hemlig/HemligEmailSignup.tsx`
**Table:** `sb_leads_home_page_new`
**Status:** ✅ Working

**Example Insert:**
```typescript
const { data, error } = await supabase
  .from('sb_leads_home_page_new')
  .insert({
    email: 'test@example.com',
    source: 'hemlig_page',
    user_agent: navigator.userAgent
  });
```

---

## 🔐 Environment Variables

**Note:** Currently using hardcoded values in `src/integrations/supabase/client.ts`

```typescript
const SUPABASE_URL = "https://ttidnpncifqtetnhcdhq.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGc..."; // Anon key
```

**Recommendation:** Move to `.env` file:
```env
VITE_SUPABASE_URL=https://ttidnpncifqtetnhcdhq.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGc...
```

---

## 📊 Build Output

```
dist/index.html           4.76 kB   │ gzip: 1.60 kB
dist/assets/index.css   113.18 kB   │ gzip: 17.80 kB
dist/assets/index.js    871.99 kB   │ gzip: 244.00 kB
```

**Note:** Large bundle size (871 kB) due to:
- shadcn/ui components
- Radix UI primitives
- TanStack Query
- React Router

**Recommendation:** Consider code splitting for production.

---

## 🎯 Next Steps

1. **Environment Variables:** Move Supabase credentials to `.env`
2. **Testing:** Create test suite for components
3. **Code Splitting:** Implement dynamic imports for routes
4. **Bundle Optimization:** Analyze and reduce bundle size
5. **Error Handling:** Add global error boundary
6. **Analytics:** Verify GTM and Facebook CAPI tracking
7. **Content:** Populate `sb_content_sub_pages` with articles
8. **Deployment:** Set up Vercel deployment (already has `vercel.json`)

---

## 🔍 Key Files to Understand

1. **`src/App.tsx`** - Main app structure and routing
2. **`src/components/Quiz.tsx`** - Quiz logic and Supabase integration
3. **`src/integrations/supabase/client.ts`** - Supabase connection
4. **`src/utils/pushToDataLayer.ts`** - GTM tracking
5. **`src/utils/facebookEvents.ts`** - Facebook CAPI
6. **`supabase/migrations/`** - Database schema evolution

---

**Date:** November 4, 2025
**Status:** ✅ Ready for customization to "Sund och Stark"
