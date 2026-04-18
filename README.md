# 🚀 MetricFlow Dashboard (Pulse Analytics)

A modern analytics dashboard built with a scalable front-end architecture, focusing on performance, maintainability, and real-world engineering practices.

---

## 🧭 Project Overview

**MetricFlow Dashboard** (Pulse Analytics) is a data-driven UI application designed to visualize analytics metrics using clean architecture and production-ready patterns.

> ⚡ This project is currently in its initial setup phase and will evolve incrementally.

---

## ⚙️ Tech Stack

- **Framework:** React + TypeScript + Vite
- **Styling:** SCSS (7–1 Architecture)
- **State Management:** Zustand (UI State)
- **Server State:** React Query
- **API Layer:** Axios
- **Routing:** React Router
- **Charts:** Recharts
- **Testing:** Jest

---

## 📁 Project Structure

```
src/
 ├── app/
 │    └── App.tsx
 ├── components/
 ├── hooks/
 ├── services/
 ├── store/
 ├── styles/
```

---

## 🧠 Architecture Principles

- **Container / Presentational Pattern**
- **Custom Hooks for business logic**
- **Service → Transform → Hook → UI flow**
- **Minimal and purposeful design patterns**
- **No inline styles (SCSS only)**

---

## 🎨 Styling Guidelines

- SCSS **7–1 architecture**
- Light/Dark theme support
- Strict separation of styles from components

---

## 🌍 APIs

- Primary: DummyJSON
- Secondary: CoinGecko

---

## ⚡ Key Features (Planned)

- 📊 Interactive charts (Recharts)
- 🌗 Theme switching (Light/Dark)
- 📡 API-driven data visualization
- ⚡ Optimized data fetching (React Query)
- 🧱 Reusable UI components

---

## 🧩 Engineering Practices

- Clean code & modular structure
- Global API error handling
- Skeleton loaders for UX
- PR-based development workflow

---

## 👥 Team

- **Raja** → Architecture, API, Data Layer, Performance
- **Nandha** → UI System, SCSS Architecture, Layout

---

## 📌 Status

🚧 Project Initialized — Development in Progress

---

## 🌿 Branch Naming Convention

Use structured, phase-based naming for clarity and tracking progress.

**Format:**

```
Phase-{number}-{short-description}
```

**Example:**

```bash
git checkout -b "Phase-1-setting-up-project"
```

---

## 📝 Commit Message Convention

Follow a consistent commit format aligned with phases.

**Format:**

```
Phase {number} | {short description}
```

**Example:**

```bash
git commit -m "Phase 1 | Setting up project with prettier"
```

---

## 🔀 Pull Request Guidelines

Every PR should include a **clear summary of changes**.

### 📌 PR Title Format

```
Phase {number} | {short description}
```

### 📄 PR Description Template

Copy-paste this while creating a PR:

```
## 🚀 Phase {number}

### ✅ Changes in this PR

- [ ] Feature / Setup 1
- [ ] Feature / Setup 2
- [ ] Feature / Setup 3

### 🧠 Notes

- Any important decisions or considerations
- Known limitations (if any)

### 🔍 Review Focus

- Areas where reviewer should focus more
```

---

## 📌 Contribution Rule

- No direct commits to `main`
- All changes must go through PR
- Minimum **1 approval required before merge**
- Always review teammate’s code before merging

## 🔮 Future Enhancements

- Advanced analytics modules
- Authentication & role-based access
- Performance monitoring
- Improved test coverage

---

## 🛠️ Getting Started

```bash
# Install dependencies
npm install
```

```bash
# Start development server
npm run dev
```

---

## 📄 License

MIT License
