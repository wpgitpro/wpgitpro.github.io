var mycolours = ["lightcyan","pink","coral","orange"];

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

document.addEventListener('DOMContentLoaded',function() {
    document.querySelector(".wrapper").style.background = mycolours[getRndInteger(0,3)];
});
 