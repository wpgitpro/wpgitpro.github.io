//

document.addEventListener('DOMContentLoaded', () => {
   canvas = document.getElementById('canvas1');

   if (canvas.getContext) {
      
      ctx = canvas.getContext('2d');

      ctx.globalAlpha = 0.5;

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
      ctx.fill();

      ctx.beginPath();
      ctx.moveTo(100, 100);
      ctx.lineTo(200, 100);
      ctx.lineTo(200, 200);
      ctx.strokeStyle = "red";
      // ctx.closePath();
      // ctx.stroke();
      ctx.fill();

      for (var i = 0; i < 6; i++) {
         for (var j = 0; j < 6; j++) {
           ctx.fillStyle = 'rgb(' + Math.floor(255 - 42.5 * i) + ', ' +
                            Math.floor(255 - 42.5 * j) + ', 0)';
           ctx.fillRect(j * 25, i * 25, 25, 25);
         }
       }
       // draw background
      ctx.fillStyle = '#FD0';
      ctx.fillRect(0, 0, 75, 75);
      ctx.fillStyle = '#6C0';
      ctx.fillRect(75, 0, 75, 75);
      ctx.fillStyle = '#09F';
      ctx.fillRect(0, 75, 75, 75);
      ctx.fillStyle = '#F30';
      ctx.fillRect(75, 75, 75, 75);
      ctx.fillStyle = '#FFF';

       // set transparency value
      ctx.globalAlpha = 0.2;

      // Draw semi transparent circles
      for (var i = 0; i < 7; i++) {
         ctx.beginPath();
         ctx.arc(75, 75, 10 + 10 * i, 0, Math.PI * 2, true);
         ctx.fill();
      }

      ctx.font = '48px serif';
      ctx.fillStyle = "black";
      ctx.fillText('Hello world', 10, 50);

   }

});