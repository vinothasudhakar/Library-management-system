# 📚 Library Management – Frontend Application

A **frontend-focused Library Management application** built with **React and TypeScript**, created to showcase **clean architecture**, **accessible UI practices**, and **maintainable styling**.

This project is intentionally **frontend-only** and relies on **mock JSON data** to simulate real-world API interactions.

---

## ✨ What This App Does

* Displays a list of books from a static dataset
* Allows users to search books by **title, author, or category**
* Shows detailed information for a selected book
* Follows accessibility-first design principles
* Uses scalable SCSS styling with BEM methodology

---

## 🧰 Technologies Used

* **React** (Functional Components)
* **TypeScript** for type safety
* **React Router** for client-side routing
* **SCSS (Sass)** for styling
* **BEM** naming convention for CSS structure
* **Mock JSON** as a simulated data source
* **Jest + React Testing Library** for testing

---

## 🗂️ Folder Structure

```
src/
├── components/   # Shared and reusable UI components
├── pages/        # Page-level components
├── data/         # Static JSON files
├── types/        # TypeScript definitions
├── styles/       # Global and modular SCSS files
└── App.tsx
```

---

## 🚀 Getting Started

### Install & Run

```bash
git clone <repository-url>
cd library-management
npm install
npm run dev
```

Open your browser at:

👉 **[http://localhost:5173](http://localhost:5173)**

---

## 🧠 How the App Is Structured

This project keeps the structure **intentionally simple and practical**, matching its frontend-only scope.

* UI components are responsible only for rendering and user interaction
* State and side-effects are handled locally using React hooks
* Data is read through small service utilities instead of directly importing JSON into components

This approach avoids artificial layering while still maintaining clarity, testability, and future flexibility.

---

### State Management

* Uses **local component state** only
* No global state libraries
* State remains close to where it is used

This keeps the application simple and easy to reason about.

---

### Styling Strategy

* SCSS is organized modularly
* BEM ensures consistent and readable class names
* Variables and mixins provide theme consistency
* Styles map clearly to UI components

---

## 🔄 Data Flow Overview

* Book data is retrieved through a service layer
* `useEffect` handles initial data loading
* Search filters data in-memory
* Route changes update displayed content

---

## ♿ Accessibility & Quality Checks

Accessibility and UI quality were treated as **first-class concerns** during development.

### Accessibility Practices

* Semantic HTML elements for meaningful structure
* Keyboard-accessible interactions across the app
* Visible focus indicators for navigation clarity
* Proper labels for form controls
* Descriptive `alt` text for book images
* ARIA live regions for dynamic search results
* High-contrast colors managed via SCSS variables

### Validation Tools Used

* **axe DevTools** – to identify accessibility issues during development
  <img width="1916" height="929" alt="Screenshot 2026-01-28 102332" src="https://github.com/user-attachments/assets/63e322a3-604a-4ae5-9237-8140dd99c035" />

* **Lighthouse** – to evaluate accessibility, performance, and best practices
<img width="1919" height="869" alt="Screenshot 2026-01-28 102352" src="https://github.com/user-attachments/assets/1cfe6549-de0b-4d9e-b3c9-ff4b6e29c25f" />

Screenshots from these tools are included to demonstrate compliance.

---

## 🧪 Testing & Verification

Testing focuses on **real user behavior** rather than internal implementation details.

* **Jest** is used as the test runner
* **React Testing Library** is used to validate rendering and interactions

Test coverage includes:

* Rendering of book lists and details
* Search filtering behavior
* Routing between pages
* Accessibility-related checks such as presence of labels and alt text

Test result screenshots are provided to support test coverage.

---<img width="1848" height="930" alt="Screenshot 2026-01-28 101135" src="https://github.com/user-attachments/assets/e89ac232-e3ac-46dc-a9ad-c85e35effca4" />


## ⚠️ Project Scope & Limitations

* Frontend-only
* Read-only data
* Small static dataset
* No authentication
* No persistence layer

This project is designed for **learning and demonstration**, not production use.

---

## 🔮 Possible Improvements

* Integrate a real backend API
* Add pagination or infinite scrolling
* Introduce authentication
* Expand test coverage
* Add CI/CD pipeline

---


