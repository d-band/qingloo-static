import data from './mods/data';
import tpl from './mods/list.atpl';

const main = {
  init: function() {
    $('.category-list').html(tpl({
      list: data
    }));
  }
};

$(function() {
  main.init();
});