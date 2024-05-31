document.addEventListener("DOMContentLoaded", () => {
    const themes = {
        "light": {
            "background-color": "#ffffff",
            "text-color": "#000000",
            "highlight-color": "#5c9ded",
            "highlight-hover-color": "#4a8bd5",
            "highlight-active-color": "#3a73b8",
            "text-hover-color": "#ffffff",
            "text-active-color": "#ffffff",
            "card-background-light": "#5c9ded",
            "card-hover-background-light": "#4a8bd5",
            "card-text-color-light": "#000000",
            "input-background-color": "#f2f2f2",
            "box-shadow-hover": "rgba(74, 139, 213, 0.5) 0px 2px 15px 0px",
            "box-shadow-active": "rgba(58, 115, 184, 0.5) 0px 7px 29px 0px"
        },
        "dark": {
            "background-color": "#121212",
            "text-color": "#ffffff",
            "highlight-color": "#ffd700",
            "highlight-hover-color": "#ffbf00",
            "highlight-active-color": "#ffbf00",
            "text-hover-color": "#000000",
            "text-active-color": "#000000",
            "card-background-dark": "#ffd700",
            "card-hover-background-dark": "#ffbf00",
            "card-text-color-dark": "#000000",
            "input-background-color-dark": "#2a2a2a",
            "box-shadow-hover-dark": "rgba(255, 191, 0, 0.5) 0px 2px 15px 0px",
            "box-shadow-active-dark": "rgba(255, 191, 0, 0.5) 0px 7px 29px 0px"
        }
    };

    const themeToggle = document.getElementById('themeToggle');
    themeToggle.addEventListener('change', toggleTheme);

    function toggleTheme() {
        const theme = themeToggle.checked ? 'dark' : 'light';
        applyTheme(theme);
    }

    function applyTheme(theme) {
        const themeData = themes[theme];
        Object.keys(themeData).forEach(key => {
            document.documentElement.style.setProperty(`--${key}`, themeData[key]);
        });
    }

    // Aplicar tema inicial
    const initialTheme = themeToggle.checked ? 'dark' : 'light';
    applyTheme(initialTheme);

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            targetElement.scrollIntoView({ behavior: 'smooth' });
        });
    });
});
