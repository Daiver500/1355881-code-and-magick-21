'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 50;
var GAP = 10;
var FONT_GAP = 15;
var TEXT_WIDTH = 50;
var BAR_HEIGHT = 80;
var barWidth = CLOUD_WIDTH - GAP - TEXT_WIDTH - GAP;

var renderCloud = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};


window.renderStatistics = function(ctx) {
  renderCloud(
    ctx,
    CLOUD_X + GAP,
    CLOUD_Y + GAP,
    'rgba(0, 0, 0, 0.3)'
  );
  renderCloud(
    ctx,
    CLOUD_X,
    CLOUD_Y,
    '#fff',
  );

  /**ctx.translate(0, canvas.height);
  ctx.rotate(-Math.PI/2);**/

  ctx.fillStyle = '#000';
  ctx.fillRect(120, 150, 40, 110);
  ctx.fillStyle = '#000';
  ctx.fillText('Вы', 120, 295);
  ctx.fillText(1745, 120, 140);


  ctx.fillStyle = '#0000FF';
  ctx.fillRect(210, 150, 40, 130);
  ctx.fillStyle = '#000';
  ctx.fillText('Иван', 210, 295);
  ctx.fillText(1545, 210, 140);

  ctx.fillStyle = '#4682B4';
  ctx.fillRect(300, 150, 40, 120);
  ctx.fillStyle = '#000';
  ctx.fillText('Юлия', 300, 295);
  ctx.fillText(1245, 300, 140);

  ctx.fillStyle = '#00BFFF';
  ctx.fillRect(390, 150, 40, 100);
  ctx.fillStyle = '#000';
  ctx.fillText('Васян', 390, 295);
  ctx.fillText(1745, 390, 140);

  ctx.fillStyle = '#000';
  ctx.font = "16px PT Mono";
  ctx.fillText("Ура вы победили!", 120, 100);
  ctx.fillText("Список результатов: ", 120, 110);

};






