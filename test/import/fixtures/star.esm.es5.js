var b=b||{};b.scope={};b.arrayIteratorImpl=function(a){var c=0;return function(){return c<a.length?{done:!1,value:a[c++]}:{done:!0}}};b.arrayIterator=function(a){return{next:b.arrayIteratorImpl(a)}};b.makeIterator=function(a){var c="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return c?c.call(a):b.arrayIterator(a)};b.arrayFromIterator=function(a){for(var c,d=[];!(c=a.next()).done;)d.push(c.value);return d};
b.arrayFromIterable=function(a){return a instanceof Array?a:b.arrayFromIterator(b.makeIterator(a))};var e=Object.freeze({__proto__:null,yay:1,baaaa:2,foo:function(){return console.log("foo")}});console.log.apply(console,b.arrayFromIterable(e));