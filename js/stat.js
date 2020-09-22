'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 50;
var GAP = 10;
var FONT_GAP = 15;
var TEXT_WIDTH = 50;
var BAR_HEIGHT = 20;
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

  ctx.fillStyle = '#000';
  ctx.fillText(
    'Вы',
    CLOUD_X + GAP + FONT_GAP + (GAP + BAR_HEIGHT) * 0,
    CLOUD_Y + GAP
  );
  ctx.fillRect(120, 90, 40, 200);


  ctx.fillStyle = '#FF0000';
  ctx.fillText(
    'Иван',
    CLOUD_X + GAP + FONT_GAP + (GAP + BAR_HEIGHT) * 1,
    CLOUD_Y + GAP
  );
  ctx.fillRect(160, 90, 40, 200);

  ctx.fillStyle = '#FF0000';
  ctx.fillText(
    'Юлия',
    CLOUD_X + GAP + FONT_GAP + (GAP + BAR_HEIGHT) * 2,
    CLOUD_Y + GAP
  );
  ctx.fillRect(210, 90, 40, 200);

  ctx.fillStyle = '#FF0000';
  ctx.fillText(
    'Васян',
    CLOUD_X + GAP + FONT_GAP + (GAP + BAR_HEIGHT) * 2,
    CLOUD_Y + GAP
  );
  ctx.fillRect(260, 90, 40, 200);

  ctx.fillStyle = '#000';
  ctx.font = "16px PT Mono";
  ctx.fillText("Ура вы победили!", 50, 100);
  ctx.fillText("Список результатов: ", 50, 110);
};





