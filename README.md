# ✈️🌍 Visa Navigator

**Visa Navigator** is a full-stack web application that simplifies the process of researching, applying for, and managing visas. Our goal is to empower travelers with up-to-date information and tools to confidently navigate international visa requirements.

---

## 🚀 Project Overview

Whether traveling for leisure, education, or work, Visa Navigator helps users:
- 📄 Explore detailed information about visa types across countries.
- 🧑‍💼 Manage their personal visa applications.
- ✅ Use an intuitive, responsive interface built for clarity and efficiency.

---

## ✨ Key Features

### 👤 Dynamic User Experience
- Navbar and page content adapt to login state.
- Responsive design for desktop, tablet, and mobile.

### 🌐 Visa Information Portal (`/allvisas`)
- Browse and search global visa types.
- View visa details: requirements, processing time, and fees.
- Sort visas by country, name, and more.

### 🔐 User Authentication & Authorization
- Firebase-based sign up and login.
- Protected routes for personal data.

### 📋 Dashboard (`/dashboard`) *(Protected)*
- **Account Overview**:
  - 2FA status, login history, and password security.
- **Profile Management** (`/dashboard/profile`):
  - View/edit profile details.
- **My Applications** (`/dashboard/my-applications`):
  - View, track, and manage visa applications.
- **My Added Visas** (`/dashboard/my-added-visas`):
  - Manage visas users have contributed (CRUD).
  - Updates sync with `/allvisas`.

### 🎨 UI & Design
- Polished design with consistent spacing and visual hierarchy.
- Light & Dark mode support.
- Reusable and consistent components (buttons, cards, etc.).
- Sticky navbar for better navigation.

### 🏠 Home Page Sections
- Hero section, features, how it works, testimonials, CTAs, and footer.
- Clean layout with animations and hover effects.

---

## 🛠️ Tech Stack

### 🔧 Frontend
- React.js
- Tailwind CSS + DaisyUI
- React Router DOM
- Context API + Hooks
- SweetAlert2, Swiper
- Firebase Auth
- Axios, React Icons

### ⚙️ Backend
- Node.js + Express.js
- MongoDB (NoSQL)
- Middleware: CORS, dotenv
- Native Fetch API

### 🚀 Deployment
- Frontend: Firebase
- Backend: Vercel

---

## 📦 Key NPM Dependencies

### Frontend
```json
{
  "axios": "^1.7.9",
  "firebase": "^11.0.2",
  "localforage": "^1.10.0",
  "match-sorter": "^8.0.0",
  "react": "^18.3.1",
  "react-dom": "^18.3.1",
  "react-hot-toast": "^2.4.1",
  "react-icons": "^5.4.0",
  "react-router-dom": "^7.0.2",
  "react-simple-typewriter": "^5.0.1",
  "sort-by": "^1.2.0",
  "sweetalert2": "^11.14.5",
  "swiper": "^11.1.15"
}
```
## Backend
{
  "cors": "^2.8.5",
  "dotenv": "^16.4.7",
  "express": "^4.21.2",
  "mongodb": "^6.11.0"
}


⚙️ Local Setup
Prerequisites:

-Node.js

-MongoDB (local or cloud instance)

**Frontend
git clone https://github.com/programming-hero-web-course2/b10-a10-client-side-Kamrul-Hasan-Rimon
cd b10-a10-client-side-Kamrul-Hasan-Rimon
npm install
npm run dev

**Backend
git clone https://github.com/programming-hero-web-course2/b10-a10-server-side-Kamrul-Hasan-Rimon
cd b10-a10-server-side-Kamrul-Hasan-Rimon
npm install
npm run dev


🌐 Live Site
👉 Visit Visa Navigator: https://visa-navigator-3bc52.web.app/

📌 Future Enhancements
Admin dashboard

Email/SMS notifications

Advanced filters and analytics

PWA support


🤝 Contributing
Pull requests and stars are always welcome! For major changes, please open an issue first.

📄 License
MIT License © 2025 Kamrul Hasan Rimon

🙌 Acknowledgements
Thanks to Programming Hero for the project base and guidance.


---
