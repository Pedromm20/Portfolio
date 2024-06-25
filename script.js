document.addEventListener("DOMContentLoaded", function() {
    // Cargar las traducciones
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'translations.json', true);
    xhr.onload = function() {
        if (xhr.status === 200) {
            let translations = JSON.parse(xhr.responseText);
            
            // Configuración inicial del idioma
            let currentLang = 'es'; // Por defecto en español

            // Función para cambiar el idioma
            function changeLanguage(lang) {
                currentLang = lang;
                let elementsToTranslate = document.querySelectorAll('[data-translate]');
                for (let i = 0; i < elementsToTranslate.length; i++) {
                    let el = elementsToTranslate[i];
                    let key = el.getAttribute('data-translate');
                    el.textContent = translations[lang][key];
                }
                document.getElementById('languageToggle').textContent = lang === 'es' ? 'EN' : 'ES';
            }

            // Evento para cambiar el idioma
            let languageToggle = document.getElementById('languageToggle');
            languageToggle.addEventListener('click', function() {
                let lang = currentLang === 'es' ? 'en' : 'es';
                changeLanguage(lang);
            });

            // Aplicar el idioma inicial
            changeLanguage(currentLang);
        } else {
            console.error('Error loading translations:', xhr.statusText);
        }
    };
    xhr.onerror = function() {
        console.error('Request error...');
    };
    xhr.send();

    // Definición de los temas
    let themes = {
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
            "box-shadow-active": "rgba(58, 115, 184, 0.5) 0px 7px 29px 0px",
            "icon-color": "#0000ff"
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
            "box-shadow-hover-dark": "rgba(255, 255, 255, 0.9) 0px 2px 15px 0px",
            "box-shadow-active-dark": "rgba(255, 255, 255, 0.9) 0px 7px 29px 0px",
            "icon-color": "#ffbf00"
        }
    };
    

    // Función para aplicar el tema
    function applyTheme(theme) {
        let themeData = themes[theme];
        for (let key in themeData) {
            document.documentElement.style.setProperty('--' + key, themeData[key]);
        }
    }

    // Función para cambiar el tema
    function toggleTheme() {
        let theme = themeToggle.checked ? 'dark' : 'light';
        applyTheme(theme);
    }

    // Obtener el interruptor de tema
    let themeToggle = document.getElementById('themeToggle');
    themeToggle.addEventListener('change', toggleTheme);

    // Aplicar el tema inicial
    let initialTheme = themeToggle.checked ? 'dark' : 'light';
    applyTheme(initialTheme);

    let abrir = document.getElementById('abrir');
    let cerrar = document.getElementById('cerrar');
    let nav = document.getElementById('nav');

    abrir.addEventListener('click', function () {
        nav.classList.add('visible');
        document.body.classList.add('menu-open');
    });

    cerrar.addEventListener('click', function () {
        nav.classList.remove('visible');
        document.body.classList.remove('menu-open');
    });

    // Cerrar el menú cuando se hace clic en un enlace
    let navLinks = nav.getElementsByTagName('a');
    for (let i = 0; i < navLinks.length; i++) {
        navLinks[i].addEventListener('click', function () {
            nav.classList.remove('visible');
            document.body.classList.remove('menu-open');
        });
    }
});

