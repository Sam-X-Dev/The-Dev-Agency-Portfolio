
/* =====================================================
   app.js
   All interactive behavior for the CodeStrikes landing page:
     1. Portfolio filter tabs (show/hide project cards by category)
     2. Scroll-spy nav highlighting (active link follows scroll position)
     3. Skill bar animation trigger (animates progress bars into view)
   No external libraries — pure vanilla JS.
===================================================== */

document.addEventListener("DOMContentLoaded", () => {
  initScrollSpy();
  initSkillBarAnimation();
});

/* =====================================================
   1. PORTFOLIO FILTER TABS
   Called inline from index.html via onclick="setTab(this, 'web')".
   Toggles the "active" style on the clicked tab and shows
   only the .project-card elements whose data-cat matches —
   "all" shows every card regardless of category.
===================================================== */
function setTab(clickedTab, category) {
  // Update active tab styling
  document.querySelectorAll(".tab").forEach((tab) => tab.classList.remove("active"));
  clickedTab.classList.add("active");

  // Show/hide project cards based on data-cat
  document.querySelectorAll(".project-card").forEach((card) => {
    const matches = category === "all" || card.dataset.cat === category;
    card.style.display = matches ? "" : "none";
  });
}

/* =====================================================
   2. SCROLL-SPY NAVIGATION
   Highlights the nav link matching whichever section
   is currently in view as the user scrolls.
===================================================== */
function initScrollSpy() {
  const sections = document.querySelectorAll("section[id]");
  const navLinkEls = document.querySelectorAll(".nav-links a");

  if (!sections.length || !navLinkEls.length) return;

  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((section) => {
      if (window.scrollY >= section.offsetTop - 100) {
        current = section.id;
      }
    });

    navLinkEls.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === "#" + current) {
        link.classList.add("active");
      }
    });
  });
}

/* =====================================================
   3. SKILL BAR ANIMATION ON SCROLL INTO VIEW
   Uses IntersectionObserver to trigger the bar-fill width
   transition only once the #skills section scrolls into
   the viewport, instead of animating on page load.
===================================================== */
function initSkillBarAnimation() {
  const skillsSection = document.getElementById("skills");
  if (!skillsSection) return;

  const bars = skillsSection.querySelectorAll(".bar-fill");

  // Cache each bar's intended width, then collapse it to 0 to start
  bars.forEach((bar) => {
    bar.dataset.targetWidth = bar.style.width;
    bar.style.width = "0%";
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          bars.forEach((bar) => {
            bar.style.width = bar.dataset.targetWidth;
          });
          observer.disconnect(); // only animate once
        }
      });
    },
    { threshold: 0.3 }
  );

  observer.observe(skillsSection);
}



