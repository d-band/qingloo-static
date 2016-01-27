import hotTpl from './mods/hot.atpl';
import topicTpl from './mods/topic.atpl';
import userTpl from './mods/user.atpl';

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
    })).parent().fadeIn(300);

    $('#J_hotTopicList').html(topicTpl({
      list: [{
        group: '量子物理',
        title: '解方程解一宿是什么体验？',
        avatar: 'http://tb1.bdstatic.com/tb/%E5%85%AD%E5%B0%8F%E9%BE%84%E7%AB%A5.jpg',
        description: '另有研究显示，打字的时候不喜欢在中文和英文之间加空格的人，感情路都走得很辛苦，有七成的比例会在 34 岁的时候跟自己不爱的人结婚，而其余三成的人最后只能把遗产留给自己的猫。毕竟爱情跟书写都需要适时地留白。'
      }, {
        group: '量子物理',
        title: '解方程解一宿是什么体验？',
        avatar: 'http://tb1.bdstatic.com/tb/%E5%85%AD%E5%B0%8F%E9%BE%84%E7%AB%A5.jpg',
        description: '另有研究显示，打字的时候不喜欢在中文和英文之间加空格的人，感情路都走得很辛苦，有七成的比例会在 34 岁的时候跟自己不爱的人结婚，而其余三成的人最后只能把遗产留给自己的猫。毕竟爱情跟书写都需要适时地留白。'
      }, {
        group: '量子物理',
        title: '解方程解一宿是什么体验？',
        avatar: 'http://tb1.bdstatic.com/tb/%E5%85%AD%E5%B0%8F%E9%BE%84%E7%AB%A5.jpg',
        description: '另有研究显示，打字的时候不喜欢在中文和英文之间加空格的人，感情路都走得很辛苦，有七成的比例会在 34 岁的时候跟自己不爱的人结婚，而其余三成的人最后只能把遗产留给自己的猫。毕竟爱情跟书写都需要适时地留白。'
      }, {
        group: '量子物理',
        title: '解方程解一宿是什么体验？',
        avatar: 'http://tb1.bdstatic.com/tb/%E5%85%AD%E5%B0%8F%E9%BE%84%E7%AB%A5.jpg',
        description: '另有研究显示，打字的时候不喜欢在中文和英文之间加空格的人，感情路都走得很辛苦，有七成的比例会在 34 岁的时候跟自己不爱的人结婚，而其余三成的人最后只能把遗产留给自己的猫。毕竟爱情跟书写都需要适时地留白。'
      }]
    })).parent().fadeIn(300);

    $('#J_hotUserList').html(userTpl({
      list: [{
        name: '高血压吧',
        description: '体循环动脉血压指以体循',
        avatar: 'http://tb1.bdstatic.com/tb/%E5%85%AD%E5%B0%8F%E9%BE%84%E7%AB%A5.jpg'
      }, {
        name: '高血压吧',
        description: '体循环动脉血压指以体循'
      }, {
        name: '高血压吧',
        description: '体循环动脉血压指以体循',
        avatar: 'http://tb1.bdstatic.com/tb/%E5%85%AD%E5%B0%8F%E9%BE%84%E7%AB%A5.jpg'
      }, {
        name: '高血压吧',
        description: '体循环动脉血压指以体循'
      }, {
        name: '高血压吧',
        description: '体循环动脉血压指以体循',
        avatar: 'http://tb1.bdstatic.com/tb/%E5%85%AD%E5%B0%8F%E9%BE%84%E7%AB%A5.jpg'
      }, {
        name: '高血压吧',
        description: '体循环动脉血压指以体循',
        avatar: 'http://tb1.bdstatic.com/tb/%E5%85%AD%E5%B0%8F%E9%BE%84%E7%AB%A5.jpg'
      }]
    })).parent().fadeIn(300);
  }
};

$(function() {
  main.init();
});