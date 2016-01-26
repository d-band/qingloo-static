import hotTpl from './mods/hot.atpl';

const main = {
  init: function() {
    $('#J_hotList').html(hotTpl({
      list: [{
        name: '高血压吧',
        description: '高血压（hypertension）是指以体循环动脉血压指以体循',
        avatar: 'http://tb1.bdstatic.com/tb/%E5%85%AD%E5%B0%8F%E9%BE%84%E7%AB%A5.jpg'
      }, {
        name: '高血压吧',
        description: '高血压（hypertension）是指以体循环动脉血压指以体循'
      }, {
        name: '高血压吧',
        description: '高血压（hypertension）是指以体循环动脉血压指以体循',
        avatar: 'http://tb1.bdstatic.com/tb/%E5%85%AD%E5%B0%8F%E9%BE%84%E7%AB%A5.jpg'
      }, {
        name: '高血压吧',
        description: '高血压（hypertension）是指以体循环动脉血压指以体循'
      }, {
        name: '高血压吧',
        description: '高血压（hypertension）是指以体循环动脉血压指以体循',
        avatar: 'http://tb1.bdstatic.com/tb/%E5%85%AD%E5%B0%8F%E9%BE%84%E7%AB%A5.jpg'
      }, {
        name: '高血压吧',
        description: '高血压（hypertension）是指以体循环动脉血压指以体循',
        avatar: 'http://tb1.bdstatic.com/tb/%E5%85%AD%E5%B0%8F%E9%BE%84%E7%AB%A5.jpg'
      }]
    }));
  }
};

$(function() {
  main.init();
});