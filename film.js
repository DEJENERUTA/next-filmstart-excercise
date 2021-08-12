let posterList = ["anne_les_mis", "brad_bastards", "colin_single_man", "drew_miss_you", "eddie_bev_hills_cop"];

let index = 0;

const smallPic = document.querySelectorAll("nav img");

const arrayPic = Array.from(smallPic);

const caption = document.querySelector("h2");

const bigImage = document.querySelector("#plakat");

for (let i = 0; i<smallPic.length; i++) {
    smallPic[i].addEventListener("click", change);
}

for (let i = 0; i < smallPic.length; i++) {
    smallPic[i].addEventListener("mouseover", showMenu);
    smallPic[i].addEventListener("mouseleave", hideMenu);
}

function change() {

    caption.textContent = this.getAttribute("alt");

    index = arrayPic.indexOf(this);
    bigImage.setAttribute("src", "posters/" + posterList[index] + ".jpg")
}

function showMenu() {
    this.querySelector("nav").style.oppacity = "100%"
}