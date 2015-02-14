document.addEventListener("DOMContentLoaded", function() {
	var canvas = document.getElementById("c");
  var ctx = canvas.getContext("2d");

  var styles = window.getComputedStyle(canvas);

  canvas.style.width = styles.width;
  canvas.style.height = styles.height;
  var h = canvas.height = parseInt(styles.height);
  var w = canvas.width = parseInt(styles.width);

  var step = 0, i = 0;
  while(i < w) {
    step = randomInt(6, 70)
    ctx.fillStyle = Please.make_color();
    ctx.fillRect(i, 0, step * h, h);
    i += step;
  }
});

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
