var token = $('meta[name="_csrf"]').attr('content');
$.ajaxPrefilter(function(options, originalOptions, jqXHR) {
  jqXHR.setRequestHeader('X-CSRF-Token', token);
});

$.fn.toObject = function() {
  var o = {};
  var a = this.serializeArray();
  $.each(a, function() {
    if (o[this.name] !== undefined) {
      if (!o[this.name].push) {
        o[this.name] = [o[this.name]];
      }
      o[this.name].push(this.value || '');
    } else {
      o[this.name] = this.value || '';
    }
  });
  return o;
};