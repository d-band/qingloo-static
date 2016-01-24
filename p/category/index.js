var data = require('./mods/data');
var tpl = require('./mods/list.atpl');
var main = {
  init: function() {
    $('.category-list').html(tpl({
      list: data
    }));
  }
};

$(function() {
  main.init();
});