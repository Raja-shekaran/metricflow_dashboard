# 🎨 Styles Architecture (7–1 SASS Pattern)

This project follows the **7–1 SASS Architecture Pattern**, a scalable way to organize styles in large applications.

---

## 📁 Folder Structure

styles/
├── abstracts/ → Variables, mixins, functions (no CSS output)
├── base/ → Global styles (reset, typography)
├── components/ → Reusable UI components
├── layout/ → Layout structure (header, footer, grid)
├── pages/ → Page-specific styles
├── themes/ → Theme configurations (dark/light)
├── vendors/ → Third-party styles
└── main.scss → Entry point for all styles

---

## 🚀 Entry Point: `main.scss`

`main.scss` is the **central file that imports all other SCSS modules**.

It is the **only file imported into React**:

```tsx
import './styles/main.scss';
```
