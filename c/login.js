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

$('.J_loginForm, .J_registerForm', $login).on('submit', function(e){
  e.preventDefault();
  var url = $(this).attr('action');
  var data = $(this).toObject();
  request.post(url, data).done(function(){
    window.location.reload();
  }).fail(function(msg){
    toastr.error(msg);
  });
  return false;
});