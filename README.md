## IEMRE-2027 Conference Website

This repository contains the frontend for the **6th International Conference on Innovation in Energy Management & Renewable Resources (IEMRE-2027)**. The site is a single-page layout with a sticky navigation bar that smoothly scrolls to each section.

### Live / External Links
- Springer publication series (Lecture Notes in Electrical Engineering - LNEE): https://link.springer.com/series/7818
- Call for Papers poster (Google Drive): https://drive.google.com/file/d/1-0MBEh0kHjH5xXxl9cQM1OPI1U1YcfFW/view?usp=drive_link

## Tech Stack
- React (v19)
- Vite (build/dev tooling)
- Tailwind CSS (utility-first styling)
- React Router (`BrowserRouter`, used as app wrapper)
- Icons: `lucide-react`

## Project Structure
- `frontend/src/App.jsx`: assembles the page sections in order
- `frontend/src/pages/`: section components (Home, About, etc.)
- `frontend/src/components/`: shared UI (navbars, headlines)
- `frontend/src/data/`: JSON content used by timeline/committee/papercalls/registrations

## Site Sections
The main sections rendered by `frontend/src/App.jsx`:
- `#Home` (conference overview/hero)
- `#About` (conference insight + college info)
- `#papercalls` (Call for Papers blocks; driven by JSON data)
- `#keydates` (conference timeline table; driven by JSON data)
- `#publication` (publication plans + partner logos)
- `#submission` (submission guidelines + CMT note)
- `#registration` (registration options + payment details)
- `#committee` (committee members; cycles between categories)
- `#contact` (email/phone/address + quick links)

Data for the JSON-driven sections lives in `frontend/src/data/`.

## Getting Started (Local Development)
### Prerequisites
- Install **Node.js** (recommended: Node 18+)
- `npm` should come with Node.js

### Run the dev server
1. Open a terminal in the project root: `iemre`
2. Install dependencies:
   - `cd frontend`
   - `npm install`
3. Start the development server:
   - `npm run dev`
4. Open the provided local URL (typically `http://localhost:5173`).

## Build & Preview
- Build for production:
  - `cd frontend`
  - `npm run build`
- Preview the production build locally:
  - `npm run preview`

## Linting
- `cd frontend`
- `npm run lint`

