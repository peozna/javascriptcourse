const themeButtons = document.querySelectorAll('.theme-btn');

//Event listeners for theme buttons
themeButtons.forEach(button => {
    button.addEventListener('click', () => {
        const selectedTheme = button.getAttribute('data-theme'); // Get selected theme from button's data attribute
        switchTheme(selectedTheme); // Call function to switch theme
    });
});

// Function to switch themes
function switchTheme(theme) {
    // Remove existing theme classes
    document.body.className = '';

    //Apply new theme if it's not purple (default)
    if (theme !== 'purple') {
        document.body.classList.add(theme + '-theme'); // Add selected theme class to body
    }

    saveTheme(theme); // Save selected theme in cookie
}

function saveTheme(theme) {
    document.cookie = "selectedTheme="+ theme + "; path=/; max-age=" + 60*60*24*30; // Save theme in cookie for 30 days
}

