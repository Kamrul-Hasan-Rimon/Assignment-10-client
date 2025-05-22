# Visa Navigator ✈️🌍

**Visa Navigator** is a comprehensive web application designed to streamline and simplify the often complex process of visa research, application, and management. Our platform aims to empower users with the information and tools they need to confidently navigate international travel requirements.

## 🚀 Project Overview

Traveling abroad, whether for leisure, study, or work, begins with understanding and securing the necessary visas. Visa Navigator tackles this challenge by providing a user-friendly interface where individuals can:
*   Explore detailed information about various visa types across different countries.
*   Manage their personal visa applications (for logged-in users).
*   Benefit from a system designed for clarity, efficiency, and ease of use.

This project focuses on delivering a polished, professional, and responsive user experience, making it portfolio-ready.

## ✨ Key Features

*   **Dynamic User Experience:**
    *   Navbar and content dynamically adjust based on user login status.
    *   Responsive design ensures optimal viewing on desktop, tablet, and mobile devices.
*   **Comprehensive Visa Information Portal (`/allvisas`):**
    *   Browse a wide range of visa types.
    *   View detailed information for each visa (requirements, processing times, fees, etc.).
    *   Dynamic sorting functionalities (e.g., by country, visa name).
    *   Balanced and consistently styled visa information cards.
*   **User Authentication & Authorization:**
    *   Secure user registration and login system.
    *   Protected routes for user-specific areas.
*   **User Dashboard (`/dashboard` - Protected):**
    *   **Account Security & Overview Page:**
        *   Summary cards for account status (e.g., 2FA, password health).
        *   Table displaying recent account activity (logins, security events).
        *   Links to manage profile and security settings.
    *   **Profile Page (`/dashboard/profile`):**
        *   View and update complete user information.
    *   **My Visa Applications Page (`/dashboard/my-applications`):**
        *   Track the status of submitted visa applications.
        *   View application details.
        *   Filter and sort applications.
    *   **My Added Visas Page (`/dashboard/my-added-visas`):**
        *   Users can manage visa types they have contributed or are tracking (CRUD operations).
        *   Updates here can reflect in the global `/allvisas` list through data revalidation.
*   **Polished UI & Visual Design:**
    *   Consistent and appropriate color scheme (max 4 relevant colors).
    *   Support for both Light and Dark modes with good visibility.
    *   Uniform button styles (filled and outlined).
    *   Clean spacing, consistent alignment, and aspect ratios for images and cards.
    *   Sticky Navbar for persistent navigation.
*   **Home Page:**
    *   Engaging Hero Section.
    *   At least 8 meaningful sections (e.g., Features, How It Works, Testimonials, Call to Action, Footer).
    *   Visually balanced cards and consistent design elements.
*   **Other Essentials:**
    *   Smooth animations and hover effects for enhanced interactivity.
    *   Descriptive and meaningful Git commits.

## 🛠️ Tech Stack

**Client-Side (Frontend):**
*   **Framework/Library:** React.js (v[YOUR_REACT_VERSION])
*   **Styling:** Tailwind CSS (v[YOUR_TAILWIND_VERSION]), DaisyUI (v[YOUR_DAISYUI_VERSION])
*   **Routing:** React Router DOM (v6+)
*   **State Management:** React Context API (and `useState`, `useEffect` hooks)
*   **HTTP Client:** Fetch API (Native Browser API)
*   **Notifications/Alerts:** SweetAlert2

**Server-Side (Backend):**
*   **Runtime Environment:** Node.js
*   **Framework:** Express.js\
*   **Middleware:** `cors`, `express.json`
*   **Environment Variables:** `dotenv`

**Database:**
*   **Type:** MongoDB (NoSQL)
*   **Driver/ODM:** Official MongoDB Node.js Driver

**Deployment:**
*   **Client:** Firebase (or Netlify, GitHub Pages)
*   **Server:** Vercel (or Heroku, Render, etc.)

## ⚙️ Setup and Installation

Follow these instructions to get a local copy of the project up and running on your machine for development and testing purposes.

**Prerequisites:**
*   Node.js
*   npm 
*   MongoDB instance

**Client Setup (Frontend):**
1.  **Clone the client repository:**
    ```bash
    github client side reposetory [(https://github.com/programming-hero-web-course2/b10-a10-client-side-Kamrul-Hasan-Rimon)]
    ```
2.  **Install dependencies:**
    ```bash
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
**server Setup (backend):**
1.  **Clone the server repository:**
    ```bash
    github server side reposetory [(https://github.com/programming-hero-web-course2/b10-a10-server-side-Kamrul-Hasan-Rimon)]
    ```
2.  **Install dependencies:**
    ```bash
  "cors": "^2.8.5",
    "dotenv": "^16.4.7",
    "express": "^4.21.2",
    "mongodb": "^6.11.0"

## 🌐 Live Project Link

Experience Visa Navigator live:
**[https://visa-navigator-3bc52.web.app/]** 
## 🔑 Default Credentials

To explore user-specific features and the dashboard, you can use the following default credentials:

*   **User:**
    * null

---

Thank you for checking out Visa Navigator! We welcome feedback and contributions.
