var mycolours = ["lavender","lightcyan","lemonchiffon","lightcoral"];

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

document.addEventListener('DOMContentLoaded',function() {
    document.querySelector(".wrapper").style.background = mycolours[getRndInteger(0,3)];
});

document.addEventListener('DOMContentLoaded',function() {
    document.querySelector("select").onchange = function() {
        document.querySelector('#name').style.color = this.value;
    };
});
 