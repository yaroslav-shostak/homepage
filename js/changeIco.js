let t = 'Résumé';

function changeTitle(icon, text) {
    document.querySelector('head title').innerHTML = text;
    document.querySelector('link[rel="icon"]').setAttribute('href', icon);
}


window.onblur = () => {
    setTimeout( () => changeTitle('../img/angry.svg', 'Come back'), 1500);
}
window.onfocus = () => {
    changeTitle('../img/oars.svg', t);
}






