querySelectorAll('.theme-btn');

//Event listeners for theme buttons
themeButtons.forEach(button => {
    button.addEventListener('click', () => {
        const selectedTheme = button.getAttribute('data-theme'); // Get selected theme from button's data attribute
        switchTheme(selectedTheme); // Call function to switch theme
    });
});

// Function to switch themes
function switchTheme(theme) {
    document.documentElement.removeAttribute('data-theme'); // Remove existing data-theme attribute
    document.documentElement.setAttribute('data-theme', theme); // Set data-theme attribute on root element
    document.body.className = theme + '-theme'; // Update body class to match theme
}