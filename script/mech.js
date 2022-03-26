window.onload = init;

var mycolours = ["mintcream","lavenderblush","mistyrose","papayawhip"];

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function  draw() {
    //  var ctx = document.getElementById('mechanism').getContext('2d');
    var canvas = document.getElementById('mechanism');
    var ctx = canvas.getContext('2d');
    // ctx.rotate(270);
    ctx.lineWidth = 6;
    ctx.beginPath();
    ctx.moveTo(5, 5);
    ctx.fillStyle = 'black';
    ctx.lineCap = 'round';
    ctx.lineTo(70, 140);
    ctx.stroke();
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector(".wrapper").style.background = mycolours[getRndInteger(0,4)];
});

document.addEventListener('DOMContentLoaded',function() {
    document.querySelector("h1").onpointerover = function() {
        document.querySelector('.wrapper').style.background = mycolours[getRndInteger(0,4)];
    };
});
