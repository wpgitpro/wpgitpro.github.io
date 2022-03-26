window.onload = init;

var mycolours = ["mintcream","dodgerblue","cornflowerblue","darkorange"];
var mytilecolours = ["aquamarine","orange","yellow","blue"];

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector(".wrapper").style.background = mycolours[getRndInteger(0,4)];
});

document.addEventListener('DOMContentLoaded',function() {
    document.querySelector("#heading").onload = function() {
        document.querySelector('.wrapper').style.background = mycolours[getRndInteger(0,4)];
    };
});
