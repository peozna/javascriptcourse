document.addEventListener('DOMContentLoaded', () => { 

const themeButtons = document.querySelectorAll('.theme-btn');

//Event listeners for theme buttons
themeButtons.forEach(button => {
    button.addEventListener('click', () => {
        const selectedTheme = button.getAttribute('data-theme'); // Get selected theme from button's data attribute
        switchTheme(selectedTheme); // Call function to switch theme
    });
});
    loadTheme();
});

// Function to switch themes
function switchTheme(theme) {
    // Remove existing theme classes
    document.body.classList.remove('light-theme', 'dark-theme', 'purple-theme');

    document.body.classList.add(theme + '-theme'); // Add selected theme class to body
   
    saveTheme(theme); // Save selected theme in cookie
}

// Function to save theme in cookie
function saveTheme(theme) {
    document.cookie = "selectedTheme="+ theme + "; path=/; max-age=" + 60*60*24*30; // Save theme in cookie for 30 days
}

//Function to load theme from cookie
function loadTheme() {
    const cookies = document.cookie.split('; ');
    
    for (let cookie of cookies) {
        const [name, value] = cookie.split('=');

        if (name === 'selectedTheme') {
            switchTheme(value);
            return;
        }
    }
}