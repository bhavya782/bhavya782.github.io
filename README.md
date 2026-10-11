# Bhavya Reddy — Personal Developer Portfolio

A minimal, editorial-style personal portfolio website for **Bhavya Reddy**, a Computer Science Engineering student at **Vignana Bharathi Institute of Technology (VBIT)**, Class of 2028, aspiring to become a Software Developer.

The website communicates engineering rigor, practical problem solving, clean aesthetics, and attention to detail. Built entirely with semantic HTML5, modern CSS3, and vanilla JavaScript for zero-dependency static hosting on **GitHub Pages**.

---

## 1. Portfolio Overview

- **Owner:** Bhavya Reddy
- **Role:** Computer Science Engineering Student | Aspiring Software Developer
- **Institution:** Vignana Bharathi Institute of Technology (VBIT)
- **Graduation:** 2028
- **Expected GitHub Pages Deployment URL:** [https://bhavya782.github.io/](https://bhavya782.github.io/)
- **Core Focus Areas:** Software Development, Full-Stack Applications, AI, Cloud Computing, and DevOps

---

## 2. Key Features

- **Editorial-Grade Design:** Warm off-white canvas, crisp typography, generous whitespace, and subtle depth with no distracting rainbow glows or heavy animations.
- **Accessible & Semantic:** Full keyboard accessibility (Tab navigation, Escape dismissal, visible focus rings, ARIA landmarks and attributes).
- **Zero-Dependency Architecture:** Framework-free vanilla JavaScript and standard CSS custom properties. No build steps, bundlers, or `npm install` needed.
- **Featured Project Showcase:**
  - **EduPath:** AI-assisted educational decision support system (`https://github.com/bhavya782/edupath-ai-branch-college-recommender`).
  - **AnnaSeva:** Food redistribution logistics platform (`https://github.com/bhavya782/annaseva-food-donation-platform`).
  - **AI-Based Vulnerability Prediction System:** Machine learning research concept for code vulnerability prediction (marked honestly as *In Progress*).
  - Built-in architecture detail modals for in-depth engineering breakdowns.
- **Skills Categorization:** 4 distinct categories (Programming Languages, Frontend, Backend & Databases, Developer Tools) with zero arbitrary percentage bars or fake meters.
- **Verified Credentials:** Showcase of completed industry virtual experiences and certifications from Automation Anywhere, Deloitte, and Tata.
- **Interactive Micro-Interactions:**
  - One-click email copy button with toast notification.
  - Transparent message composer generating pre-filled `mailto:` links.
  - Accessible mobile slide-down menu.
  - Subdued Light/Dark mode switcher with persistent preference.
  - Modal resume preview with clear file configuration steps.
- **Performance & SEO:** Preconnected fonts, SVG favicon, Open Graph & Twitter meta tags, and full `prefers-reduced-motion` compliance.

---

## 3. Technology Stack

- **Markup:** Semantic HTML5 (`header`, `nav`, `main`, `section`, `article`, `footer`, `dialog/modal`)
- **Styles:** Modern CSS3 (CSS Custom Properties, CSS Grid, Flexbox, Clamp typography, Media Queries)
- **Scripting:** Vanilla JavaScript (ES6+, DOM API, Clipboard API, LocalStorage, IntersectionObserver)
- **Icons & Graphics:** Crisp, resolution-independent SVGs (0 HTTP network roundtrips)
- **Fonts:** Google Fonts [Inter](https://fonts.google.com/specimen/Inter) and [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono) with system fallbacks

---

## 4. Project Directory Structure

```text
bhavya782.github.io/
├── index.html           # Main semantic HTML structure & portfolio content
├── style.css            # Responsive layout, design tokens, and theme styling
├── script.js            # Vanilla JS for theme toggle, navigation, and modals
├── README.md            # Documentation and deployment guide
└── assets/
    └── images/
        └── favicon.svg  # Minimalist vector icon
```

---

## 5. Personalization Checklist (Before Publishing)

Search for the comment `<!-- PLACEHOLDER -->` or `placeholder` inside `index.html` and update the following items with your verified personal information:

- [ ] **LinkedIn Profile URL:**
  - Located in: `index.html` (Hero section, Contact section, and Footer).
  - Search for: `https://linkedin.com/in/your-linkedin-profile`
  - Replace with your actual public LinkedIn URL.
- [ ] **Email Address:**
  - Located in: `index.html` (Contact section).
  - Search for: `bhavya.reddy.placeholder@example.com`
  - Replace both the visible text and the `href="mailto:..."` attribute with your real email.
- [ ] **Resume PDF (Optional):**
  - Save your finalized PDF resume as `Bhavya_Reddy_Resume.pdf`.
  - Place it in the `assets/` directory.
  - The download link in the Resume modal is already wired to `assets/Bhavya_Reddy_Resume.pdf`.
- [ ] **Technical Skills Verification:**
  - Review the skills under `#skills` in `index.html`. Add or remove technologies based on your current comfort and learning progress.
- [ ] **Third-Party Contact Form (Optional):**
  - By default, the contact form launches your visitor's email client with pre-filled fields.
  - If you prefer direct form submissions without an email client, register a free endpoint on [Formspree](https://formspree.io) or [Web3Forms](https://web3forms.com), set the `action` attribute on `<form id="contactForm">`, and set `method="POST"`.

---

## 6. How to Run Locally

Because this project uses standard web technologies without Node.js or build scripts, you can preview it locally in several ways:

### Option A: Direct Browser Preview
Double-click `index.html` in your file explorer, or open your web browser and press `Ctrl + O` (Windows) / `Cmd + O` (Mac) to select `index.html`.

### Option B: Using VS Code Live Server
1. Open the project folder in VS Code:
   ```bash
   code .
   ```
2. Install the **Live Server** extension (by Ritwick Dey).
3. Right-click `index.html` and select **Open with Live Server** (runs at `http://127.0.0.1:5500/`).

### Option C: Using Python's Built-in HTTP Server
Run the following command from the project root:
```bash
# Python 3
python -m http.server 8000
```
Open your browser at `http://localhost:8000/`.

---

## 7. How to Deploy to GitHub Pages

To host the site publicly at `https://bhavya782.github.io/`:

### Step 1: Initialize Git and Create the GitHub Repository
1. Log in to your GitHub account: `https://github.com/bhavya782`
2. Create a **new public repository** named exactly:
   ```text
   bhavya782.github.io
   ```
   *(Using this exact name enables GitHub User Pages automatically at the root domain).*

### Step 2: Push Your Code to the Repository
Open PowerShell or your terminal in this directory and run:

```bash
# Initialize git if not already initialized
git init

# Add all files
git add .

# Commit files
git commit -m "Initial commit: Production-ready developer portfolio"

# Rename default branch to main
git branch -M main

# Link to your remote GitHub repository
git remote add origin https://github.com/bhavya782/bhavya782.github.io.git

# Push to GitHub
git push -u origin main
```

### Step 3: Verify GitHub Pages Settings
1. Go to your repository on GitHub: `https://github.com/bhavya782/bhavya782.github.io`
2. Navigate to **Settings** > **Pages** (under the "Code and automation" section).
3. Under **Build and deployment**:
   - **Source:** Deploy from a branch
   - **Branch:** `main`
   - **Folder:** `/ (root)`
4. Click **Save**.
5. Wait 1–3 minutes for the GitHub Actions deployment workflow to finish.
6. Your live portfolio will be available at:
   **[https://bhavya782.github.io/](https://bhavya782.github.io/)**

---

## 8. License & Credits

- Designed and built for **Bhavya Reddy**.
- Fonts: [Inter](https://rsms.me/inter/) by Rasmus Andersson (SIL Open Font License) and [JetBrains Mono](https://www.jetbrains.com/lp/mono/) (Apache 2.0).
- Open source and free to customize.
