window.onload = init;

var mycolours = ["mintcream","lavenderblush","mistyrose","papayawhip"];

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

document.addEventListener('DOMContentLoaded',function() {
    var newcolour = getRndInteger(0,mycolours.length-1);
    document.querySelector(".wrapper").style.background = mycolours[newcolour];
    document.querySelector("#sidebar").style.background = mycolours[newcolour];
    document.querySelector("#footer").style.background = mycolours[newcolour];
});

document.addEventListener('DOMContentLoaded',function() {
    document.querySelector("select").onchange = function() {
        document.querySelector('#name').style.color = this.value;
    };
});
                
function init() {
    var sdate = getDateText();
    var ele = document.getElementById("footer");
    ele.innerHTML = ele.innerHTML + " - " + sdate;
}

function getDateText() {
   var date = new Date();
   var options = {
      weekday: "long", year: "numeric", month: "short", day: "numeric"
   };
   return date.toLocaleDateString("en-CA", options);
}
 