console.log("The Springfield-sivu avattu")

function openSet(num) {
    document.getElementById("ikuva").style.display = "none";

    document.querySelectorAll(".set").forEach(set => {
        set.style.display = "none";
    });

    document.getElementById("set" + num).style.display = "block";
}

function back() {
    document.getElementById("ikuva").style.display = "block";

    document.querySelectorAll(".set").forEach(set => {
        set.style.display = "none";
    });
}

function openFull(img) {
    document.getElementById("fullScreen").style.display = "flex";
    document.getElementById("fullImg").src = img.src;
}

function closeFull() {
    document.getElementById("fullScreen").style.display = "none";
}