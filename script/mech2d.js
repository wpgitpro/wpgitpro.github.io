//

document.addEventListener('DOMContentLoaded', () => {
   canvas = document.getElementById('canvas1');

   ctx = canvas.getContext('2d');

   ctx.save();

   const saturation = 20;

   var my_gradient = ctx.createLinearGradient(0, 0, 0, 170);
   my_gradient.addColorStop(0, "lightblue");
   my_gradient.addColorStop(1, "yellow");
   my_gradient.saturation = 90;
   ctx.fillStyle = my_gradient;

   ctx.strokeStyle = `hsl(160, ${saturation}%, 60%)`;
   ctx.fillStyle = 'rgb(200, 0, 0)';
   ctx.fillStyle = 'blue';
   ctx.fillStyle = `hsl(160, ${saturation}%, 60%)`;
   ctx.fillStyle = my_gradient;
   ctx.fillRect(10, 10, 50, 50);

   my_gradient.addColorStop(0, "red");
   my_gradient.addColorStop(1, "pink");
   my_gradient.saturation = 50;

   ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
   ctx.fillStyle = 'red';
   ctx.fillStyle = `hsl(160, ${saturation}%, 60%)`;
   ctx.fillStyle = my_gradient;
   ctx.fillRect(30, 30, 50, 50);

   ctx.clearRect(50, 50, 50, 50);

   ctx.strokeStyle = 'blue';
   ctx.strokeRect(50, 50, 50, 50);

   
   ctx.beginPath();
   ctx.moveTo(100, 100);
   ctx.lineTo(200, 100);
   ctx.lineTo(100, 200);
   ctx.fillStyle = "green";
   ctx.fill();
   
});