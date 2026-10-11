/**
 * BHAVYA REDDY — PORTFOLIO SCRIPT
 * Framework-free vanilla JavaScript for GitHub Pages
 * Handles theme toggling, mobile navigation, modals, copy clipboard, and contact launcher.
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  /* ------------------------------------------------------------------------
   * 1. DYNAMIC YEAR
   * ------------------------------------------------------------------------ */
  const yearElement = document.getElementById('currentYear');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  /* ------------------------------------------------------------------------
   * 2. THEME TOGGLE (LIGHT / DARK)
   * ------------------------------------------------------------------------ */
  const themeToggle = document.getElementById('themeToggle');
  const root = document.documentElement;

  // Detect stored theme or system preference
  const savedTheme = localStorage.getItem('portfolio-theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (savedTheme) {
    root.setAttribute('data-theme', savedTheme);
  } else if (prefersDark) {
    // Optionally respect system preference; defaults to clean light editorial
    // root.setAttribute('data-theme', 'dark');
  }

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const currentTheme = root.getAttribute('data-theme');
      const targetTheme = currentTheme === 'dark' ? 'light' : 'dark';
      
      root.setAttribute('data-theme', targetTheme);
      localStorage.setItem('portfolio-theme', targetTheme);
      showToast(`Switched to ${targetTheme} theme`);
    });
  }

  /* ------------------------------------------------------------------------
   * 3. ACCESSIBLE MOBILE NAVIGATION MENU
   * ------------------------------------------------------------------------ */
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const primaryNav = document.getElementById('primary-nav');
  const navLinks = document.querySelectorAll('.nav-link');

  function toggleMenu(isOpen) {
    const shouldOpen = typeof isOpen === 'boolean' ? isOpen : !primaryNav.classList.contains('is-open');
    if (shouldOpen) {
      primaryNav.classList.add('is-open');
      mobileMenuBtn.classList.add('active');
      mobileMenuBtn.setAttribute('aria-expanded', 'true');
    } else {
      primaryNav.classList.remove('is-open');
      mobileMenuBtn.classList.remove('active');
      mobileMenuBtn.setAttribute('aria-expanded', 'false');
    }
  }

  if (mobileMenuBtn && primaryNav) {
    mobileMenuBtn.addEventListener('click', () => toggleMenu());

    // Close menu when clicking outside
    document.addEventListener('click', (event) => {
      if (
        primaryNav.classList.contains('is-open') &&
        !primaryNav.contains(event.target) &&
        !mobileMenuBtn.contains(event.target)
      ) {
        toggleMenu(false);
      }
    });

    // Close menu on pressing Escape key
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && primaryNav.classList.contains('is-open')) {
        toggleMenu(false);
        mobileMenuBtn.focus();
      }
    });

    // Close menu on clicking any navigation link
    navLinks.forEach((link) => {
      link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
          toggleMenu(false);
        }
      });
    });
  }

  /* ------------------------------------------------------------------------
   * 4. ACTIVE NAVIGATION SCROLLSPY
   * ------------------------------------------------------------------------ */
  const sections = document.querySelectorAll('section[id]');

  function updateActiveNavLink() {
    const scrollY = window.pageYOffset || document.documentElement.scrollTop;
    const headerHeight = 90;

    sections.forEach((section) => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - headerHeight;
      const sectionId = section.getAttribute('id');

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        navLinks.forEach((link) => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', updateActiveNavLink, { passive: true });
  updateActiveNavLink();

  /* ------------------------------------------------------------------------
   * 5. COPY EMAIL TO CLIPBOARD WITH TOAST
   * ------------------------------------------------------------------------ */
  const copyEmailBtn = document.getElementById('copyEmailBtn');
  const emailLink = document.getElementById('emailLink');

  if (copyEmailBtn && emailLink) {
    copyEmailBtn.addEventListener('click', async () => {
      const email = emailLink.textContent.trim();
      try {
        if (navigator.clipboard && window.isSecureContext) {
          await navigator.clipboard.writeText(email);
        } else {
          // Fallback for older browsers
          const textArea = document.createElement('textarea');
          textArea.value = email;
          textArea.style.position = 'fixed';
          textArea.style.left = '-999999px';
          document.body.appendChild(textArea);
          textArea.focus();
          textArea.select();
          document.execCommand('copy');
          textArea.remove();
        }
        showToast('Email address copied to clipboard!');
      } catch (err) {
        showToast('Unable to copy automatically. Please copy manually.');
      }
    });
  }

  /* ------------------------------------------------------------------------
   * 6. INTERACTIVE CONTACT COMPOSER (STANDALONE MAILTO GENERATOR)
   * ------------------------------------------------------------------------ */
  const contactForm = document.getElementById('contactForm');
  if (contactForm && emailLink) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('contactName').value.trim();
      const subject = document.getElementById('contactSubject').value.trim();
      const message = document.getElementById('contactMessage').value.trim();
      const targetEmail = emailLink.textContent.trim();

      const encodedSubject = encodeURIComponent(`[Portfolio Inquiry] ${subject} - from ${name}`);
      const encodedBody = encodeURIComponent(`Hi Bhavya,\n\n${message}\n\nBest regards,\n${name}`);

      const mailtoUrl = `mailto:${targetEmail}?subject=${encodedSubject}&body=${encodedBody}`;
      
      // Launch user's default email client
      window.location.href = mailtoUrl;
      showToast('Opening your default email client...');
    });
  }

  /* ------------------------------------------------------------------------
   * 7. PROJECT ARCHITECTURE DETAILS MODAL
   * ------------------------------------------------------------------------ */
  const projectModal = document.getElementById('projectModal');
  const modalTitle = document.getElementById('modalTitle');
  const modalCategory = document.getElementById('modalCategory');
  const modalBody = document.getElementById('modalBody');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalDismissBtn = document.getElementById('modalDismissBtn');
  const viewDetailsButtons = document.querySelectorAll('.view-details-btn');

  // Detailed Architectural Specifications
  const projectData = {
    edupath: {
      category: 'AI-Assisted Educational Decision Support',
      title: 'EduPath — Architecture & Technical Breakdown',
      body: `
        <h4>1. Problem Context & Objectives</h4>
        <p>Choosing an engineering branch and target college is one of the highest-stakes decisions for prospective students in India. With complex entrance exam ranks, diverse regional quotas, shifting closing ranks, and opaque fee structures, students and parents frequently make suboptimal choices based on hearsay rather than structured insights.</p>
        
        <h4>2. System Architecture</h4>
        <ul>
          <li><strong>Client-Side Interface (React.js):</strong> Clean, step-by-step intake wizard collecting student test rank, target domains (CSE, ECE, AI/DS), financial bounds, and preferred geographic zones.</li>
          <li><strong>Backend Services (Node.js & Express):</strong> Micro-service architecture parsing admission datasets and exposing filtered REST endpoints.</li>
          <li><strong>Database Layer (SQL):</strong> Structured schema organizing historic college cutoffs, faculty-to-student ratios, accreditation metrics (NAAC/NBA), and tuition bounds.</li>
          <li><strong>Decision & Scoring Algorithm:</strong> Multi-factor scoring model that weights rank eligibility against user career goals and produces categorized options: "Safe", "Target", and "Reach".</li>
        </ul>

        <h4>3. Verification Status</h4>
        <p>Active prototype in development. Repository is publicly available at <a href="https://github.com/bhavya782/edupath-ai-branch-college-recommender" target="_blank" rel="noopener noreferrer">github.com/bhavya782/edupath-ai-branch-college-recommender</a>.</p>
      `
    },
    annaseva: {
      category: 'Social Logistics Platform Concept',
      title: 'AnnaSeva — Food Redistribution Platform Architecture',
      body: `
        <h4>1. Problem Context & Objectives</h4>
        <p>Weddings, collegiate events, and catering institutions produce significant quantities of edible surplus food daily. Meanwhile, localized charities and shelters face unpredictable food supply. The bottleneck is not food availability, but time-critical coordination and logistical transport.</p>

        <h4>2. Workflow & Technical Components</h4>
        <ul>
          <li><strong>Donor Interface (React & Vite):</strong> Minimalist form enabling donors to quickly broadcast surplus quantity, food type (perishable/non-perishable), preparation time, and precise pickup coordinates.</li>
          <li><strong>Dispatcher & Notification Engine (Express.js):</strong> Proximity-based filtering alerting certified NGOs and registered community volunteers within an actionable radius.</li>
          <li><strong>Relational Data Store (MySQL):</strong> Handles user identity verification, donation logs, pickup confirmations, and audit trails.</li>
          <li><strong>Mapping Integration:</strong> Integrates geolocation APIs to provide real-time routing estimates for volunteer collectors.</li>
        </ul>

        <h4>3. Verification Status</h4>
        <p>Platform concept and functional UI prototype. Repository available at <a href="https://github.com/bhavya782/annaseva-food-donation-platform" target="_blank" rel="noopener noreferrer">github.com/bhavya782/annaseva-food-donation-platform</a>.</p>
      `
    },
    vulnerability: {
      category: 'Cybersecurity & Machine Learning Research',
      title: 'AI Vulnerability Prediction — Research & Engineering Scope',
      body: `
        <h4>1. Research Motivation</h4>
        <p>Static code analysis tools rely heavily on rigid rule databases and often generate overwhelming false-positive rates. This project investigates using syntactic representations and lightweight machine learning models to detect software vulnerability patterns prior to integration.</p>

        <h4>2. Technical Pipeline</h4>
        <ul>
          <li><strong>Abstract Syntax Tree (AST) Tokenization:</strong> Parsing source code snippets into structural token representations using Python syntax tools.</li>
          <li><strong>Feature Extraction:</strong> Transforming token sequences into numerical vectors representing control flow complexity and sensitive function calls.</li>
          <li><strong>Model Pipeline (scikit-learn):</strong> Exploring classification algorithms (Random Forest, Logistic Classifiers) trained on open vulnerability benchmark datasets (e.g. CWE/CVE corpora).</li>
          <li><strong>Reporting API (FastAPI):</strong> Lightweight backend generating a human-readable risk summary and pinpointing suspect lines of code.</li>
        </ul>

        <h4>3. Verification Status</h4>
        <p><strong>In Progress:</strong> Currently in data preprocessing and algorithm experimentation phase. Code will be made public once the evaluation baseline is established.</p>
      `
    }
  };

  let lastActiveElement = null;

  function openProjectModal(projectId) {
    const data = projectData[projectId];
    if (!data) return;

    lastActiveElement = document.activeElement;

    modalTitle.textContent = data.title;
    modalCategory.textContent = data.category;
    modalBody.innerHTML = data.body;

    projectModal.classList.add('is-open');
    projectModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    modalCloseBtn.focus();
  }

  function closeProjectModal() {
    projectModal.classList.remove('is-open');
    projectModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';

    if (lastActiveElement) {
      lastActiveElement.focus();
    }
  }

  viewDetailsButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const projectId = btn.getAttribute('data-project');
      openProjectModal(projectId);
    });
  });

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeProjectModal);
  if (modalDismissBtn) modalDismissBtn.addEventListener('click', closeProjectModal);

  if (projectModal) {
    projectModal.addEventListener('click', (e) => {
      if (e.target === projectModal) {
        closeProjectModal();
      }
    });
  }

  /* ------------------------------------------------------------------------
   * 8. RESUME PREVIEW & DOWNLOAD MODAL
   * ------------------------------------------------------------------------ */
  const resumeBtn = document.getElementById('resumeBtn');
  const resumeModal = document.getElementById('resumeModal');
  const resumeModalCloseBtn = document.getElementById('resumeModalCloseBtn');
  const resumeDismissBtn = document.getElementById('resumeDismissBtn');

  function openResumeModal() {
    lastActiveElement = document.activeElement;
    resumeModal.classList.add('is-open');
    resumeModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    resumeModalCloseBtn.focus();
  }

  function closeResumeModal() {
    resumeModal.classList.remove('is-open');
    resumeModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    if (lastActiveElement) {
      lastActiveElement.focus();
    }
  }

  if (resumeBtn) resumeBtn.addEventListener('click', openResumeModal);
  if (resumeModalCloseBtn) resumeModalCloseBtn.addEventListener('click', closeResumeModal);
  if (resumeDismissBtn) resumeDismissBtn.addEventListener('click', closeResumeModal);

  if (resumeModal) {
    resumeModal.addEventListener('click', (e) => {
      if (e.target === resumeModal) {
        closeResumeModal();
      }
    });
  }

  // Global Escape key handler for all modals
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (projectModal && projectModal.classList.contains('is-open')) {
        closeProjectModal();
      }
      if (resumeModal && resumeModal.classList.contains('is-open')) {
        closeResumeModal();
      }
    }
  });

  /* ------------------------------------------------------------------------
   * 9. ACCESSIBLE TOAST NOTIFICATION HELPER
   * ------------------------------------------------------------------------ */
  function showToast(message, duration = 3200) {
    const container = document.getElementById('toastContainer');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `
      <svg width="16" height="16" viewBox="0 0 20 20" fill="#10B981" aria-hidden="true">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
      </svg>
      <span>${escapeHTML(message)}</span>
    `;

    container.appendChild(toast);

    setTimeout(() => {
      toast.style.transition = 'opacity 0.25s ease, transform 0.25s ease';
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      setTimeout(() => toast.remove(), 250);
    }, duration);
  }

  function escapeHTML(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }
});
