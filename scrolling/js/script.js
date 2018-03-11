$(document).ready(function () {
    var tabScreen = [];
    var tabBg = [];
    var tabTexte = [];
    var screen1 = document.querySelector('#screen1');
    var screen2 = document.querySelector('#screen2');
    var screen3 = document.querySelector('#screen3');
    tabScreen.push(screen1, screen2, screen3);
    var bg1 = document.querySelector('#bg1');
    var bg2 = document.querySelector('#bg2');
    var bg3 = document.querySelector('#bg3');
    tabBg.push(bg1, bg2, bg3);
    var texte1 = document.querySelector('#texte1');
    var texte2 = document.querySelector('#texte2');
    var texte3 = document.querySelector('#texte3');
    tabTexte.push(texte1, texte2, texte3);
    var currentScreen = document.querySelector('.currentScreen').dataset.screen;
    var currentBg = document.querySelector('.currentBg').dataset.bg;
    var currentTexte = document.querySelector('.currentTexte').dataset.texte;
    console.log(currentBg);
    $('#fullpage').fullpage({
        onLeave: function (index, nextIndex, direction) {
            if (index == 1) {
                document.querySelector('body').style.backgroundColor = '#EEE657';
            }
            if (index == 2) {
                if (nextIndex == 1) {
                    document.querySelector('body').style.backgroundColor = '#00D7FB';
                } else {
                    document.querySelector('body').style.backgroundColor = '#4F4933';
                }
            }
            if (index == 3) {
                document.querySelector('body').style.backgroundColor = '#EEE657';
            }
            if (direction == "down") {
                tabBg[currentBg - 1].classList.remove('currentBg');
                tabBg[currentBg - 1].classList.add('hiddenBgBottom');
                tabTexte[currentTexte - 1].classList.remove('currentTexte');
                tabTexte[currentTexte - 1].classList.add('hiddenTexteBottom');
                currentTexte++;
                tabTexte[currentTexte - 1].classList.remove('hiddenTexteTop');
                tabTexte[currentTexte - 1].classList.remove('hiddenTexteBottom');
                tabTexte[currentTexte - 1].classList.add('currentTexte');
            } else if (direction == "up") {
                tabBg[currentBg - 1].classList.remove('currentBg');
                tabBg[currentBg - 1].classList.add('hiddenBgTop');
                tabTexte[currentTexte - 1].classList.remove('currentTexte');
                tabTexte[currentTexte - 1].classList.add('hiddenTexteTop');
                currentTexte--;
                tabTexte[currentTexte - 1].classList.remove('hiddenTexteBottom');
                tabTexte[currentTexte - 1].classList.add('currentTexte');
            }
        },
        afterLoad: function (anchorLink, index) {
            if (currentScreen < index) {
                tabScreen[currentScreen - 1].classList.remove('currentScreen');
                tabScreen[currentScreen - 1].classList.add('hiddenScreenBottom');
                currentScreen++;
                tabScreen[currentScreen - 1].classList.remove('hiddenScreenTop');
                tabScreen[currentScreen - 1].classList.remove('hiddenScreenBottom');
                tabScreen[currentScreen - 1].classList.add('currentScreen');
            } else if (currentScreen > index) {
                tabScreen[currentScreen - 1].classList.remove('currentScreen');
                tabScreen[currentScreen - 1].classList.add('hiddenScreenTop');
                currentScreen--;
                tabScreen[currentScreen - 1].classList.remove('hiddenScreenBottom');
                tabScreen[currentScreen - 1].classList.add('currentScreen');
            }
            if (currentBg < index) {
                currentBg++;
                tabBg[currentBg - 1].classList.remove('hiddenBgTop');
                tabBg[currentBg - 1].classList.remove('hiddenBgBottom');
                tabBg[currentBg - 1].classList.add('currentBg');
            } else if (currentBg > index) {
                currentBg--;
                tabBg[currentBg - 1].classList.remove('hiddenBgBottom');
                tabBg[currentBg - 1].classList.add('currentBg');
            }
        }
    });
});
