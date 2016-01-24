var SysError = '系统错误';
var get = function(url, params) {
  var promise = $.Deferred();
  $.get(url, params).done(function(res) {
    if (res && res.code === 0) {
      promise.resolve(res.data);
    } else {
      res.msg ? promise.reject(res.msg) : promise.reject(SysError);
    }
  }).fail(function() {
    promise.reject(SysError);
  });
  return promise;
};

var post = function(url, params) {
  var promise = $.Deferred();
  $.post(url, params).done(function(res) {
    if (res && res.code === 0) {
      promise.resolve(res.data);
    } else {
      res.msg ? promise.reject(res.msg) : promise.reject(SysError);
    }
  }).fail(function() {
    promise.reject(SysError);
  });
  return promise;
};

var ajax = function(url, data, type) {
  type = type || 'POST';
  var promise = $.Deferred();
  $.ajax({
    url: url,
    type: type,
    datatype: 'json',
    contentType: 'application/json; charset=utf-8',
    data: JSON.stringify(data)
  }).done(function(res) {
    if (res && res.code === 0) {
      promise.resolve(res.data);
    } else {
      res.msg ? promise.reject(res.msg) : promise.reject(SysError);
    }
  }).fail(function() {
    promise.reject(SysError);
  });
  return promise;
};

window.request = {
  get: get,
  post: post,
  ajax: ajax
};