// File: cfs.js 

window.onload = refreshTime;

/*

function init() {
    let ele = document.querySelector("#footer");
    // const content = ele.innerHTML;
    const content = "&copy; Carels Financial Services Inc."
    const sdate = getDateText();
    ele.innerHTML = `${content} - ${sdate}`;
}

function getDateText() {
   const date = new Date();
   const options = {
      weekday: "long", year: "numeric", month: "short", day: "numeric"
   };
   return date.toLocaleDateString("en-CA", options);
}

*/

function refreshTime() {
  const content = "&copy; Carels Financial Services Inc."
  const timeDisplay = document.getElementById("footer");
  let timer = setInterval(function() {
     'use strict';
     const dateString = new Date().toLocaleString();
     const formattedString = dateString.replace(", ", " - ");
     timeDisplay.innerHTML = `${content} - ${formattedString}`;
  }, 1000); 
}





