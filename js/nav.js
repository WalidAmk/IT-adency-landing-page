
const menuBtn = document.getElementById('menuBtn');
const menu = document.getElementById('navList');
const menuItems = document.getElementsByClassName('listItems');
const navBar = document.getElementById('navBarContainer');
const contactBtn = document.getElementById('navContactBtn');
const toHomeBtn = document.getElementById('toHomeBtn');

let clickCounter = 1;

menuBtn.addEventListener('click', () => {
    if(clickCounter%2 != 0 ) {
        menu.style.left = "0";
        menu.style.zIndex = "999";
    } else {
        menu.style.left = "-100%";
    }
    clickCounter++;
})

contactBtn.addEventListener('click' , () => {
    menu.style.left = "-100%";
    clickCounter++;
})

for(const key in menuItems) {
    try {
        menuItems[key].addEventListener('click', () => {
            menu.style.left = "-100%";
            clickCounter++;
        })
    } catch (error) {}
    
}

window.addEventListener("scroll", () => {
    if(screen.width > 1024) {
        if(window.pageYOffset > 60 ) {
            navBar.style.position = 'fixed';
            navBar.style.top = '0';
            navBar.style.left = '0';
            navBar.style.zIndex = '1111';
            navBar.style.backgroundColor = '#00247e';
            document.getElementById('navLogoName').style.color = '#fff';
            contactBtn.backgroundColor = 'white';
            contactBtn.color = '#00247e';
            for(const key in menuItems) {
                try {
                    menuItems[key].style.color = "#fff";
                } catch (error) {}
            }
        } else {
            navBar.style.position = 'static';
            navBar.style.backgroundColor = '#fff';
            document.getElementById('navLogoName').style.color = '#161616';
            contactBtn.backgroundColor = '#00247e';
            contactBtn.color = 'white';
            for(const key in menuItems) {
                try {
                    menuItems[key].style.color = "#161616";
                } catch (error) {}
            }
        }
    }
    

    window.addEventListener('scroll', () => {
        if(window.scrollY > screen.height / 2) {
            toHomeBtn.style.display = 'flex';

        } else {
            toHomeBtn.style.display = 'none';
        }
})  
})

