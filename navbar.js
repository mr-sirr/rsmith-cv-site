// Shared navbar for all pages
// Detect if we're on main page (index.html) or project page
const isMainPage = window.location.pathname.endsWith('index.html') || window.location.pathname.endsWith('/');

const logoHTML = isMainPage ? '<img src="rsmith_logo.png" alt="Ryan Smith Logo">' : '';

const backArrow = isMainPage ? '' : `
    <a href="index.html" style="display: flex; align-items: center; justify-content: center; width: 36px; height: 36px; color: var(--slate-600); text-decoration: none; font-size: 1.125rem; transition: color 0.2s ease; margin-right: 0.75rem;" onmouseover="this.style.color='var(--blue-600)'" onmouseout="this.style.color='var(--slate-600)'">
        <i class="fas fa-arrow-left"></i>
    </a>
`;

const navbarHTML = `
    <nav class="nav">
        <div class="nav-container">
            <div style="display: flex; align-items: center;">
                ${backArrow}
                <a href="${isMainPage ? '#' : 'index.html'}" class="nav-brand">
                    ${logoHTML}
                    Ryan Smith
                </a>
            </div>
            <div class="nav-links">
                <a href="${isMainPage ? '#projects' : 'index.html#projects'}" class="nav-link">Projects</a>
                <a href="${isMainPage ? '#contact' : 'index.html#contact'}" class="nav-link">Contact</a>
                <a href="ryan_smith_resume.pdf" class="btn btn-secondary" target="_blank">Resume PDF</a>
            </div>
        </div>
    </nav>
`;

// Inject navbar on page load
document.addEventListener('DOMContentLoaded', function() {
    const navPlaceholder = document.getElementById('navbar-placeholder');
    if (navPlaceholder) {
        navPlaceholder.outerHTML = navbarHTML;
    }
});
