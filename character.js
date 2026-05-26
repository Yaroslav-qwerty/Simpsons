console.log("charater-sivu avattu")

function showtab(tabId) {
    const tabs = document.querySelectorAll('.tab-content');

    tabs.forEach(tab => {
        tab.style.display = 'none';
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