var mycolours = ["lavender","lightcyan","lemonchiffon","khaki","peachpuff"];

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector(".wrapper").style.background = mycolours[getRndInteger(0,4)];
});

document.addEventListener('DOMContentLoaded',function() {
    document.querySelector("h1").onpointerover = function() {
        document.querySelector('.wrapper').style.background = mycolours[getRndInteger(0,4)];
    };
});
