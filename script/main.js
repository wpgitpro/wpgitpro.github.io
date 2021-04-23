var mycolours = ["mintcream","bisque","lemonchiffon","khaki","peachpuff"];

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

document.addEventListener('DOMContentLoaded',function() {
    var newcolour = getRndInteger(0,mycolours.length-1);
    document.querySelector(".wrapper").style.background = mycolours[newcolour];
    document.querySelector("#sidebar").style.background = mycolours[newcolour];
});

document.addEventListener('DOMContentLoaded',function() {
    document.querySelector("select").onchange = function() {
        document.querySelector('#name').style.color = this.value;
    };
});
 