/**
 * SITE.JS
 * Contains interactivity for Bio Toggles, Password Protection, and Navigation.
 */

document.addEventListener('DOMContentLoaded', function () {

    /**
     * 1. BIO TOGGLE (Read More / Show Less)
     * Handles the truncation of the main bio paragraph.
     */
    const bioText = document.getElementById('bioText');
    const readMoreBtn = document.getElementById('readMoreBtn');

    if (readMoreBtn && bioText) {
        readMoreBtn.addEventListener('click', function () {
            // Check if the 'expanded' class is currently active
            const isExpanded = bioText.classList.contains('expanded');

            if (isExpanded) {
                bioText.classList.remove('expanded');
                readMoreBtn.textContent = 'read more';
            } else {
                bioText.classList.add('expanded');
                readMoreBtn.textContent = 'show less';
            }
        });
    }
});

/**
 * 2. PASSWORD PROTECTION
 * @param {string} path - The relative file path to the project.
 * @param {string} expectedPassword - The required string to gain access.
 */
function protectedOpen(path, expectedPassword) {
    const p = prompt('This project is password-protected. Enter password to continue:');

    // Handle user clicking 'Cancel'
    if (p === null) return false;

    if (p === expectedPassword) {
        // Redirect user to the project file
        window.location.href = encodeURI(path);
    } else {
        alert('Incorrect password. Access denied.');
    }
    return false;
}

/**
 * 3. RESUME CONFIRMATION
 * Simple confirmation box before navigating away from current page.
 */
function viewResume() {
    if (confirm('View my resume?')) {
        window.location.href = 'resume.html';
    }
    return false;
}