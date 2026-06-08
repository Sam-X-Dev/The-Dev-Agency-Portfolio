# Unified Enterprise Dashboard (SPA)

A high-performance, cohesive **Single Page Application (SPA)** built using pure **HTML5, CSS3, and Vanilla Modern JavaScript (ES6+ Modules)** without any external libraries or frameworks.

The platform features a centralized, responsive layout shell managing six core data-driven software modules under a **Track B Single Page Architecture**.

---

# 📂 Project Architecture

```text
UNIFIED-ENTERPRISE-DASHBOARD/
├── css/
│   ├── views/
│   │   ├── kanban.css       # Isolated layout and drag states for the Kanban board
│   │   ├── portfolio.css    # Responsive grid styles for agency team cards
│   │   └── quiz.css         # Visual feedback states (success/error color systems)
│   ├── main.css             # Global reset, foundational typography, and layout shell
│   └── themes.css           # Core Light/Dark mode configuration variables
│
├── js/
│   ├── components/
│   │   ├── contactForm.js   # Portfolio regex pattern matching and validation logic
│   │   └── dragDrop.js      # Native HTML5 Drag and Drop event orchestration
│   ├── api.js               # Native fetch infrastructure handling async/await protocols
│   ├── app.js               # Central bootstrap script and orchestration entry point
│   ├── router.js            # Client-side router engine (History/Hash state mutations)
│   ├── state.js             # Decoupled state store with automated localStorage sync
│   └── utils.js             # Functional data filters and mathematical engines (.reduce/.filter)
│
├── index.html               # Immutable SPA DOM mounting node wrapper
└── README.md                # Project architecture and technical specification log
```

---

# 👥 Collective Layer Ownership Matrix

To satisfy the rigorous constraints of the Capstone program—where no member may work exclusively on presentation layers, every engineer must defend core script logic, and code will be evaluated via random cross-examination—this project utilizes a **Horizontal Architectural Layer Allocation**.

## Member 1: Router & Page Lifecycle (`js/router.js`)

**Scope:**

* Manages client-side routing
* Intercepts hash/URL changes
* Drives clean view unmounting protocols
* Safeguards structural integrity across views

## Member 2: State Engine & Storage (`js/state.js`)

**Scope:**

* Maintains the single source of truth runtime state engine
* Tracks deep objects
* Manages serialization pipelines with Local Storage

## Member 3: CSS Architecture & Themes (`css/`)

**Scope:**

* Controls responsive layout scaling (320px → Desktop)
* Enforces style isolation through explicit component scoping
* Implements global theme toggling

## Member 4: Async API Infrastructure (`js/api.js`)

**Scope:**

* Programs native network pipelines using async/await
* Handles loading feedback indicators
* Creates API error-defense mechanisms

## Member 5: Data Analytics & Logic (`js/utils.js`)

**Scope:**

* Implements structural transformations using:

  * `.filter()`
  * `.reduce()`
* Handles schema mapping
* Generates statistical visualizations

## Member 6: User Interaction & Components (`js/components/`)

**Scope:**

* Standardizes input regex systems
* Controls focus states
* Maps interactive alerts
* Orchestrates native interaction interfaces

---

# ⚙️ Core Technical Specifications

## 1. Zero-Framework Routing & State Persistence

The custom client-side router matches path states without browser reloads.

The dashboard intercepts transitions to save memory matrices inside the global store module before container cleanup, preserving active visual conditions (such as open tasks or quiz states) perfectly upon return.

---

## 2. Isolated CSS Scope Architecture

Styles inside `css/views/` utilize strict structural scoping via explicit data-attribute bindings.

Example:

```css
[data-view="kanban"] .card
```

### Benefits

* Prevents style leakage between modules
* Ensures Kanban drag surfaces never affect other layouts
* Supports scalable component isolation
* Uses global variables from `themes.css` for instant appearance switching

Theme preferences are persisted through storage keys and restored automatically.

---

## 3. Integrated Sub-Application Specifications

### Agency Portfolio

* Dynamic rendering of a 6-member registry
* Powered by a centralized state object
* Regex-based form validation
* Mock asynchronous submission timeouts

### Interactive Quiz

* Dynamic question progression
* Green/Red answer confirmation
* Percentage-based performance analytics

### Expense Tracker

* Complete Atomic CRUD functionality
* Real-time balance calculations
* Uses:

  * `.filter()`
  * `.reduce()`

### Live News Feed

* External API integration
* Async/Await request handling
* Loading indicators and graceful error states

### GitHub Explorer

* Parallel multi-endpoint API compilation
* Language statistics visualization
* Pure CSS proportional charts
* API rate-limit awareness

### Kanban Task Board

* Native HTML5 Drag & Drop implementation
* Real-time task movement
* Nested array state synchronization

---

# 🔀 Git Workflow & Code Quality Protocols

To maximize scores under:

* **Git Flow & Collaboration (35%)**
* **Code Architecture (40%)**

the team follows strict engineering standards.

## Protected Core Branches

Direct pushes to the `main` branch are prohibited.

## Layer-Based Branching

Assignments map to architectural layers instead of separate applications.

Examples:

```text
feature/state-serialization
feature/native-drag-drop
feature/router-lifecycle
```

## Mandatory Code Reviews

Every merge into the main branch requires:

1. Pull Request creation
2. Peer review approval
3. Quality validation and sign-off

## Cross-Examination Readiness

The team conducts mock defense sessions where members explain architectural decisions from modules they did not personally implement.

This ensures:

* Team-wide understanding
* Shared ownership
* Strong technical defense capability

---

# 🛠️ Local Development Setup

## Clone the Repository

```bash
git clone https://github.com/your-org/unified-enterprise-dashboard.git
```

## Navigate to the Project Folder

```bash
cd unified-enterprise-dashboard
```

## Launch a Local Development Server

Using Python:

```bash
python -m http.server 8080
```

## Open in Browser

```text
http://localhost:8080
```

The application will now be available locally for development and testing.

---

# 🚀 Technology Stack

* HTML5
* CSS3
* JavaScript (ES6+ Modules)
* Local Storage API
* Fetch API
* Async/Await
* HTML5 Drag & Drop API
* Hash/History Routing

---

# 📌 Key Architectural Highlights

* Zero Framework Dependency
* Single Page Application Architecture
* Centralized State Management
* Persistent Local Storage Synchronization
* Modular ES6 Codebase
* Responsive Design System
* Dark/Light Theme Support
* Native API Integration
* Strict CSS Isolation
* Git Flow Collaboration Model
* Component-Based JavaScript Structure
