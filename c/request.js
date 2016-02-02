const SysError = '系统错误';

function _doneFn(promise) {
  return function(res) {
    if (res && res.code === 0) {
      promise.resolve(res.data);
    } else {
      res.msg ? promise.reject(res.msg) : promise.reject(SysError);
    }
  }
}

function _failFn(promise) {
  return function(res) {
    let json = res.responseJSON || {};
    promise.reject(json.msg || SysError);
  }
}

function get(url, params) {
  let promise = $.Deferred();
  $.get(url, params, null, 'json')
    .done(_doneFn(promise))
    .fail(_failFn(promise));
  return promise;
}

function post(url, params) {
  let promise = $.Deferred();
  $.post(url, params, null, 'json')
    .done(_doneFn(promise))
    .fail(_failFn(promise));
  return promise;
}

function ajax(url, data, type) {
  type = type || 'POST';
  let promise = $.Deferred();
  $.ajax({
      url: url,
      type: type,
      dataType: 'json',
      contentType: 'application/json; charset=utf-8',
      data: JSON.stringify(data)
    })
    .done(_doneFn(promise))
    .fail(_failFn(promise));
  return promise;
}

window.request = {
  get: get,
  post: post,
  ajax: ajax
};
