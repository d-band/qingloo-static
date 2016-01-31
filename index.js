require('bootstrap');
require('./c/util');
require('./c/request');

var $login = $('#J_loginModal');
$('#J_loginBtn').on('click', function() {
  $login.modal('show').on('shown.bs.modal', function() {
    $('.J_loginForm input[name=username]').focus();
  });
});
$('#J_registerBtn').on('click', function() {
  $login.modal('show').on('shown.bs.modal', function() {
    $('.J_registerForm input[name=username]').focus();
  });
});