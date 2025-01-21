
function resizePage() {
    const width = window.innerWidth;

    if (width >= 992 && width <= 1600) {
        document.body.style.transform = "scale(0.9)";
        document.body.style.transformOrigin = "centre";
    } else if (width >= 700 && width <= 767) {
        document.body.style.transform = "scale(0.8)";
        document.body.style.transformOrigin = "centre";
    } else if (width >= 600 && width < 700) {
        document.body.style.transform = "scale(0.75)";
        document.body.style.transformOrigin = "centre";
    } else if (width <= 600) {
        document.body.style.transform = "scale(0.5)";
        document.body.style.transformOrigin = "centre";
    } else {
        document.body.style.transform = "scale(1)";
        document.body.style.transformOrigin = "centre";
    }
}

window.addEventListener('resize', resizePage);
window.addEventListener('load', resizePage);

function toggleMenu() {
    const menu = document.getElementById('leftMenu');
    
    
    if (menu.style.display === 'none' || menu.style.display === '') {
        menu.style.display = 'block';  
    } else {
        menu.style.display = 'none';  
    }
}
