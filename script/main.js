const mycolours = ["mintcream","gainsboro","honeydew","lightsteelblue",'cornsilk'];
const mytilecolours = ["aquamarine","orange","yellow","blue",'green'];
var size = 12;
var direction = "up";

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

document.addEventListener('DOMContentLoaded', () => {
    // document.querySelector(".wrapper").style.background = mycolours[getRndInteger(0,4)];
    // document.getElementById("sidebar").style.background = mytilecolours[getRndInteger(0,4)];
    document.querySelector("h1").addEventListener('click', ()=> {
        document.querySelector('.wrapper').style.backgroundColor = mycolours[getRndInteger(0,4)];
        if (size > 20) {
            direction = "down";
        } else if (size < 12) {
            direction = "up";
        }
        if (direction == "up") {
            size = size + 1;
        } else {
            size = size - 1;
        }
        // alert(document.body.style.fontSize);
        document.body.style.fontSize = size + 'px';
    });
});
