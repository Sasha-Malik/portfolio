// Demo by Aurelio De Rosa (@AurelioDeRosa)
// See article: http://www.sitepoint.com/css-position-sticky-introduction-polyfills/

var menu = document.querySelector('.menu');
var menuPosition = menu.getBoundingClientRect();
var placeholder = document.createElement('div');
placeholder.style.width = menuPosition.width + 'px';
placeholder.style.height = menuPosition.height + 'px';
var width = menu.clientWidth + 'px';
var isAdded = false;
var min_width = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--phone-screen-width'));

window.addEventListener('scroll', function() {

    var w = document.documentElement.clientWidth;
    if (w<min_width){
        console.log(w,min_width)
        menu.classList.remove('sticky');
        return;
    }

    if (window.pageYOffset >= menuPosition.top && !isAdded) {
        menu.classList.add('sticky');
        // menu.style.width = width;
        menu.parentNode.insertBefore(placeholder, menu);
        isAdded = true;
    } else if (window.pageYOffset < menuPosition.bottom && isAdded) {
        menu.classList.remove('sticky');
        menu.parentNode.removeChild(placeholder);
        isAdded = false;
    }
});