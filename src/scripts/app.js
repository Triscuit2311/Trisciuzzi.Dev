'use strict';

const theme_switch = document.querySelector('#theme_swap');

const className = document.body.className;

if(className == 'dark-theme'){
    theme_switch.src = "assets/img/sun-warm-icon.svg"
    particlesJS.load('particles-js', 'scripts/config/particles-dark.json');
}
else{
    theme_switch.src = "assets/img/moon-icon.svg"
    particlesJS.load('particles-js', 'scripts/config/particles-light.json');
}

theme_switch.addEventListener('click', function() {

    const className = document.body.className;

    if(className == 'light-theme'){
        theme_switch.src = "assets/img/sun-warm-icon.svg"
        document.body.className = 'dark-theme';
        particlesJS.load('particles-js', 'scripts/config/particles-dark.json');
    }
    else{
        theme_switch.src = "assets/img/moon-icon.svg"
        document.body.className = 'light-theme';
        particlesJS.load('particles-js', 'scripts/config/particles-light.json');
    }
});