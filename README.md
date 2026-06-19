# CodeStrikes — Capstone Project

**On Job Training Capstone | Track A: The "Dev Agency" Distributed Workflow**

> Where an idea turns into a project. Help your startups, business, and ideas grow and solve real problems with the power of code.

This repository hosts the **Team Agency Portfolio** — the central landing page for the CodeStrikes team, linking out to the five other applications built for this capstone.

---

## 📋 Table of Contents

- [About the Project](#about-the-project)
- [Live Demo](#live-demo)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Features](#features)
- [The Six Apps](#the-six-apps)
- [Execution Track](#execution-track)
- [Team](#team)
- [Git Workflow](#git-workflow)
- [Known Issues / TODOs](#known-issues--todos)
- [Evaluation Criteria](#evaluation-criteria)
- [License](#license)

---

## About the Project

This is the **Team Agency Portfolio** — a data-driven landing page that introduces the CodeStrikes team and showcases all six capstone applications. Built with **pure HTML, CSS, and JavaScript** (no frameworks), it is fully responsive from 320px (mobile) up to desktop.

**Sections included:**
- Hero with animated illustration
- Services overview
- Filterable project showcase
- Skills / progress bars (animate in on scroll)
- Team stats
- Team member cards (with GitHub links)
- Contact form
- Footer with newsletter signup

---

## Live Demo

🔗 _Add your deployed link here (e.g. GitHub Pages, Netlify, Vercel)_

---

## Tech Stack

- **HTML5** — semantic structure
- **CSS3** — custom properties (CSS variables), Grid, Flexbox, keyframe animations
- **Vanilla JavaScript** — hamburger menu, project filtering, scroll-spy nav, scroll-triggered skill bar animation
- **Google Fonts** — Poppins (display) + Inter (body)

No build tools, frameworks, or external JS libraries required.

---

## Project Structure

```
.
├── index.html          # Main landing page markup
├── js/
│   └── app.js          # Hamburger menu, filter tabs, scroll-spy, skill bar animation
├── src/
│   └── css/
│       └── styles.css  # All styling (theme tokens, layout, responsive rules)
└── README.md
```

> **Note:** `index.html` loads the stylesheet from `/src/css/styles.css` and the script from `js/app.js`. Keep these paths in sync if you reorganize folders.

---

## Getting Started

No installation or build step needed — this is a static site.

1. **Clone the repo**
   ```bash
   git clone https://github.com/<org>/codestrikes-portfolio.git
   cd codestrikes-portfolio
   ```

2. **Open it**
   - Easiest: open `index.html` directly in your browser, **or**
   - Recommended: serve it locally so relative paths behave correctly:
     ```bash
     # Using VS Code Live Server extension, or:
     npx serve .
     # or
     python3 -m http.server 5500
     ```
   Then visit `http://localhost:5500`.

3. **Make changes** to `index.html`, `src/css/styles.css`, or `js/app.js` and refresh the browser — no build step required.

---

## Features

- **Portfolio filtering** — switch between All / Web Development / App-Logic / UI-UX project categories without a page reload
- **Scroll-spy navigation** — the active nav link updates automatically as you scroll through sections
- **Scroll-triggered skill bars** — progress bars animate into view only once the Skills section is visible, instead of on page load
- **Fully responsive** — tested down to 320px width, through tablet, up to desktop

---

## The Six Apps
 
| # | App | Focus | Status |
|---|-----|-------|--------|
| 1 | **Team Agency Portfolio** *(this repo)* | DOM & Layout | ✅ Done |
| 2 | Interactive Quiz App | State & Logic | ✅ Done |
| 3 | Expense Tracker | CRUD & localStorage | ✅ Done |
| 4 | Live News Feed | Async API Integration | ✅ Done |
| 5 | GitHub Developer Explorer | Multi-Endpoint APIs | ✅ Done |
| 6 | Kanban Task Board | Drag & Drop & Complex State | ✅ Done |
 
> Update this table as each app is built and linked. Each app should live in its own page/repo per Track A.

---

## Execution Track

**Track A — The "Dev Agency" Distributed Workflow**

- This portfolio links out to the other five apps, each hosted on a separate page/repository.
- Git workflow: `main` branch is protected; all work happens on feature branches.
- Every PR requires at least one peer review before merging.
- Features are distributed across the team via the Kanban board (e.g., one member owns the GitHub API fetch logic, another owns the UI rendering).

---

## Team

| Name | Role | GitHub |
|------|------|--------|
| Bhavya Kumar | Frontend Developer | [@bhavyaku11](https://github.com/bhavyaku11) |
| Dhruv Takale | State & Logic | [@Mr-robot365](https://github.com/Mr-robot365) |
| Nikita | UI/UX Designer | _TODO: add GitHub link_ |
| Safia Anjum | Frontend Developer | [@Safiaanjum01](https://github.com/Safiaanjum01) |
| Samarth Swami | Frontend Lead | [@Sam-X-Dev](https://github.com/Sam-X-Dev) |
| Shreyansh | Frontend Developer | [@SHREYYY3](https://github.com/SHREYYY3) |

> No team member works exclusively on HTML/CSS — every member must also defend JavaScript logic during the viva.

---

## Git Workflow

1. **Branch naming:** `feature/<short-description>` (e.g. `feature/kanban-drag-drop`)
2. **Commit messages:** clear and meaningful (e.g. `Add expense filter logic`, not `fix stuff`)
3. **Pull Requests:**
   - Open a PR against `main` when a feature is ready
   - At least one teammate must review and approve before merging
   - Be ready to explain any PR you authored during the viva
4. **Conflicts:** if you hit a merge conflict, resolve it locally, test thoroughly, and document what happened — the team will present one such scenario during evaluation.

---

## License

This project was built for educational purposes as part of an On Job Training Capstone program. Feel free to fork and adapt for your own learning.