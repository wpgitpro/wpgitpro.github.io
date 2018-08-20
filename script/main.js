var mycolours = ["blue","pink","coral","orange"];

/* sample function */

function myTestGL() {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.lineWidth = 5;
    ctx.lineCap = "round";
    ctx.moveTo(10,10);
    ctx.lineTo(200,100);
    ctx.stroke();
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}