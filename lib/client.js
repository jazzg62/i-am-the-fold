'use strict';

var hashcache = require('./hashcache-client');

// var start = Date.now();
hashcache.generate(challenge, strength, function (err, workToken) {
  if (err) throw err;
  // var end = Date.now();
  // console.log(end - start);
  var xhr = new XMLHttpRequest();
  var obj = {
    fold: fold,
    token: token,
    workToken: workToken
  };

  xhr.open('POST', '/fold', true);
  xhr.setRequestHeader('Content-type', 'application/json');
  xhr.send(JSON.stringify(obj));
});

var sample = folds;
var ul = document.querySelector('ul');
sample.forEach(function(fold){
  var child = document.createElement('li');
  var label = document.createElement('span');
  child.style.top = fold;
  label.innerText = fold;
  child.appendChild(label)
  ul.appendChild(child);
});