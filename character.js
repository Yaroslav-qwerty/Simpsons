console.log("charater-sivu avattu")

function showtab(tabId){
    document.querySelectorAll('.tab-content')
    .forEach(tab => {
        tab.computedStyleMap.display = 'none';
    });

    document.getElementById(tabId).style.display = 'block';
}
showtab('info');

function openMeme(img) {
    document.getElementById('fullscreen').style.display = 'flex';

    document.getElementById('fullscreenImg').src = img.src;
}

function closeMeme() {
    document.getElementById('fullscreen').style.display = 'none';
}