'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 50;
var GAP = 10;
var GAP_LEFT = 20;
var COLUMN_GAP = 50;
var BAR_WIDTH = 40;
var TEXT_HEIGHT = 20;
var BAR_HEIGHT = CLOUD_X + CLOUD_Y - TEXT_WIDTH;


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
  ctx.fillRect(
    CLOUD_X + GAP_LEFT,
    CLOUD_X + CLOUD_Y,
    BAR_WIDTH,
    BAR_HEIGHT
  );
  ctx.fillStyle = '#000';
  ctx.fillText('Вы', 120, 295);
  ctx.fillText(1745, 120, 140);


  ctx.fillStyle = '#0000FF';
  ctx.fillRect(
    CLOUD_X + GAP_LEFT + COLUMN_GAP,
    CLOUD_X + CLOUD_Y,
    BAR_WIDTH,
    BAR_HEIGHT
  );
  ctx.fillStyle = '#000';
  ctx.fillText('Иван', 210, 295);
  ctx.fillText(1545, 210, 140);

  ctx.fillStyle = '#4682B4';
  ctx.fillRect(
    CLOUD_X + GAP_LEFT + COLUMN_GAP * 2,
    CLOUD_X + CLOUD_Y,
    BAR_WIDTH,
    BAR_HEIGHT
  );
  ctx.fillStyle = '#000';
  ctx.fillText('Юлия', 300, 295);
  ctx.fillText(1245, 300, 140);

  ctx.fillStyle = '#00BFFF';
  ctx.fillRect(
    CLOUD_X + GAP_LEFT + COLUMN_GAP * 3,
    CLOUD_X + CLOUD_Y,
    BAR_WIDTH,
    BAR_HEIGHT
  );
  ctx.fillStyle = '#000';
  ctx.fillText('Васян', 390, 295);
  ctx.fillText(1745, 390, 140);

  ctx.fillStyle = '#000';
  ctx.font = "16px PT Mono";
  ctx.fillText("Ура вы победили!", CLOUD_X + GAP, 80);
  ctx.fillText("Список результатов: ", CLOUD_X + GAP, 95);

};






