(function(){
var g, aa = aa || {}, k = this;
function ca(a) {
  a = a.split(".");
  for (var b = k, c;c = a.shift();) {
    if (null != b[c]) {
      b = b[c];
    } else {
      return null;
    }
  }
  return b;
}
function da() {
}
function ea(a) {
  var b = typeof a;
  if ("object" == b) {
    if (a) {
      if (a instanceof Array) {
        return "array";
      }
      if (a instanceof Object) {
        return b;
      }
      var c = Object.prototype.toString.call(a);
      if ("[object Window]" == c) {
        return "object";
      }
      if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) {
        return "array";
      }
      if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) {
        return "function";
      }
    } else {
      return "null";
    }
  } else {
    if ("function" == b && "undefined" == typeof a.call) {
      return "object";
    }
  }
  return b;
}
function n(a) {
  return "array" == ea(a);
}
function fa(a) {
  var b = ea(a);
  return "array" == b || "object" == b && "number" == typeof a.length;
}
function q(a) {
  return "string" == typeof a;
}
function ga(a) {
  return "function" == ea(a);
}
var ia = "closure_uid_" + (1E9 * Math.random() >>> 0), ja = 0;
function ka(a, b, c) {
  return a.call.apply(a.bind, arguments);
}
function la(a, b, c) {
  if (!a) {
    throw Error();
  }
  if (2 < arguments.length) {
    var d = Array.prototype.slice.call(arguments, 2);
    return function() {
      var c = Array.prototype.slice.call(arguments);
      Array.prototype.unshift.apply(c, d);
      return a.apply(b, c);
    };
  }
  return function() {
    return a.apply(b, arguments);
  };
}
function r(a, b, c) {
  r = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? ka : la;
  return r.apply(null, arguments);
}
var t = Date.now || function() {
  return +new Date;
};
function u(a, b) {
  function c() {
  }
  c.prototype = b.prototype;
  a.ea = b.prototype;
  a.prototype = new c;
  a.prototype.constructor = a;
  a.Ob = function(a, c, f) {
    return b.prototype[c].apply(a, Array.prototype.slice.call(arguments, 2));
  };
}
;function ma(a, b) {
  for (var c = a.split("%s"), d = "", e = Array.prototype.slice.call(arguments, 1);e.length && 1 < c.length;) {
    d += c.shift() + e.shift();
  }
  return d + c.join("%s");
}
function na(a) {
  if (!oa.test(a)) {
    return a;
  }
  -1 != a.indexOf("&") && (a = a.replace(pa, "&amp;"));
  -1 != a.indexOf("<") && (a = a.replace(qa, "&lt;"));
  -1 != a.indexOf(">") && (a = a.replace(ra, "&gt;"));
  -1 != a.indexOf('"') && (a = a.replace(sa, "&quot;"));
  -1 != a.indexOf("'") && (a = a.replace(ta, "&#39;"));
  return a;
}
var pa = /&/g, qa = /</g, ra = />/g, sa = /"/g, ta = /'/g, oa = /[&<>"']/;
function ua() {
  return Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ t()).toString(36);
}
function va(a, b) {
  return a < b ? -1 : a > b ? 1 : 0;
}
;var wa, xa, ya, za;
function Aa() {
  return k.navigator ? k.navigator.userAgent : null;
}
za = ya = xa = wa = !1;
var Ba;
if (Ba = Aa()) {
  var Ca = k.navigator;
  wa = 0 == Ba.lastIndexOf("Opera", 0);
  xa = !wa && (-1 != Ba.indexOf("MSIE") || -1 != Ba.indexOf("Trident"));
  ya = !wa && -1 != Ba.indexOf("WebKit");
  za = !wa && !ya && !xa && "Gecko" == Ca.product;
}
var Da = wa, w = xa, Ea = za, Fa = ya;
function Ha() {
  var a = k.document;
  return a ? a.documentMode : void 0;
}
var Ia;
a: {
  var Ja = "", Ka;
  if (Da && k.opera) {
    var La = k.opera.version, Ja = "function" == typeof La ? La() : La
  } else {
    if (Ea ? Ka = /rv\:([^\);]+)(\)|;)/ : w ? Ka = /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/ : Fa && (Ka = /WebKit\/(\S+)/), Ka) {
      var Ma = Ka.exec(Aa()), Ja = Ma ? Ma[1] : ""
    }
  }
  if (w) {
    var Na = Ha();
    if (Na > parseFloat(Ja)) {
      Ia = String(Na);
      break a;
    }
  }
  Ia = Ja;
}
var Oa = {};
function y(a) {
  var b;
  if (!(b = Oa[a])) {
    b = 0;
    for (var c = String(Ia).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), d = String(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), e = Math.max(c.length, d.length), f = 0;0 == b && f < e;f++) {
      var h = c[f] || "", l = d[f] || "", p = RegExp("(\\d*)(\\D*)", "g"), B = RegExp("(\\d*)(\\D*)", "g");
      do {
        var z = p.exec(h) || ["", "", ""], x = B.exec(l) || ["", "", ""];
        if (0 == z[0].length && 0 == x[0].length) {
          break;
        }
        b = va(0 == z[1].length ? 0 : parseInt(z[1], 10), 0 == x[1].length ? 0 : parseInt(x[1], 10)) || va(0 == z[2].length, 0 == x[2].length) || va(z[2], x[2]);
      } while (0 == b);
    }
    b = Oa[a] = 0 <= b;
  }
  return b;
}
var Pa = k.document, C = Pa && w ? Ha() || ("CSS1Compat" == Pa.compatMode ? parseInt(Ia, 10) : 5) : void 0;
function Qa(a) {
  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, Qa);
  } else {
    var b = Error().stack;
    b && (this.stack = b);
  }
  a && (this.message = String(a));
}
u(Qa, Error);
Qa.prototype.name = "CustomError";
function Ra(a, b) {
  b.unshift(a);
  Qa.call(this, ma.apply(null, b));
  b.shift();
}
u(Ra, Qa);
Ra.prototype.name = "AssertionError";
function Sa(a, b) {
  throw new Ra("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1));
}
;var Ta = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#(.*))?$/;
function Ua(a) {
  if (Va) {
    Va = !1;
    var b = k.location;
    if (b) {
      var c = b.href;
      if (c && (c = (c = Ua(c)[3] || null) && decodeURIComponent(c)) && c != b.hostname) {
        throw Va = !0, Error();
      }
    }
  }
  return a.match(Ta);
}
var Va = Fa;
function Wa(a) {
  var b = Xa, c;
  for (c in a) {
    b.call(void 0, a[c], c, a);
  }
}
function Ya(a) {
  var b = [], c = 0, d;
  for (d in a) {
    b[c++] = a[d];
  }
  return b;
}
function Za(a) {
  var b = [], c = 0, d;
  for (d in a) {
    b[c++] = d;
  }
  return b;
}
var $a = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
function ab(a, b) {
  for (var c, d, e = 1;e < arguments.length;e++) {
    d = arguments[e];
    for (c in d) {
      a[c] = d[c];
    }
    for (var f = 0;f < $a.length;f++) {
      c = $a[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c]);
    }
  }
}
;var D = Array.prototype, bb = D.indexOf ? function(a, b, c) {
  return D.indexOf.call(a, b, c);
} : function(a, b, c) {
  c = null == c ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
  if (q(a)) {
    return q(b) && 1 == b.length ? a.indexOf(b, c) : -1;
  }
  for (;c < a.length;c++) {
    if (c in a && a[c] === b) {
      return c;
    }
  }
  return -1;
}, cb = D.forEach ? function(a, b, c) {
  D.forEach.call(a, b, c);
} : function(a, b, c) {
  for (var d = a.length, e = q(a) ? a.split("") : a, f = 0;f < d;f++) {
    f in e && b.call(c, e[f], f, a);
  }
};
function db(a) {
  var b;
  a: {
    b = eb;
    for (var c = a.length, d = q(a) ? a.split("") : a, e = 0;e < c;e++) {
      if (e in d && b.call(void 0, d[e], e, a)) {
        b = e;
        break a;
      }
    }
    b = -1;
  }
  return 0 > b ? null : q(a) ? a.charAt(b) : a[b];
}
function fb(a) {
  return D.concat.apply(D, arguments);
}
function gb(a) {
  var b = a.length;
  if (0 < b) {
    for (var c = Array(b), d = 0;d < b;d++) {
      c[d] = a[d];
    }
    return c;
  }
  return [];
}
;function E(a, b) {
  this.b = {};
  this.a = [];
  this.f = this.c = 0;
  var c = arguments.length;
  if (1 < c) {
    if (c % 2) {
      throw Error("Uneven number of arguments");
    }
    for (var d = 0;d < c;d += 2) {
      F(this, arguments[d], arguments[d + 1]);
    }
  } else {
    if (a) {
      a instanceof E ? (c = a.W(), d = a.O()) : (c = Za(a), d = Ya(a));
      for (var e = 0;e < c.length;e++) {
        F(this, c[e], d[e]);
      }
    }
  }
}
E.prototype.O = function() {
  hb(this);
  for (var a = [], b = 0;b < this.a.length;b++) {
    a.push(this.b[this.a[b]]);
  }
  return a;
};
E.prototype.W = function() {
  hb(this);
  return this.a.concat();
};
E.prototype.clear = function() {
  this.b = {};
  this.f = this.c = this.a.length = 0;
};
function hb(a) {
  if (a.c != a.a.length) {
    for (var b = 0, c = 0;b < a.a.length;) {
      var d = a.a[b];
      G(a.b, d) && (a.a[c++] = d);
      b++;
    }
    a.a.length = c;
  }
  if (a.c != a.a.length) {
    for (var e = {}, c = b = 0;b < a.a.length;) {
      d = a.a[b], G(e, d) || (a.a[c++] = d, e[d] = 1), b++;
    }
    a.a.length = c;
  }
}
function ib(a, b) {
  return G(a.b, b) ? a.b[b] : void 0;
}
function F(a, b, c) {
  G(a.b, b) || (a.c++, a.a.push(b), a.f++);
  a.b[b] = c;
}
E.prototype.clone = function() {
  return new E(this);
};
function G(a, b) {
  return Object.prototype.hasOwnProperty.call(a, b);
}
;function jb(a) {
  if ("function" == typeof a.O) {
    return a.O();
  }
  if (q(a)) {
    return a.split("");
  }
  if (fa(a)) {
    for (var b = [], c = a.length, d = 0;d < c;d++) {
      b.push(a[d]);
    }
    return b;
  }
  return Ya(a);
}
function kb(a, b, c) {
  if ("function" == typeof a.forEach) {
    a.forEach(b, c);
  } else {
    if (fa(a) || q(a)) {
      cb(a, b, c);
    } else {
      var d;
      if ("function" == typeof a.W) {
        d = a.W();
      } else {
        if ("function" != typeof a.O) {
          if (fa(a) || q(a)) {
            d = [];
            for (var e = a.length, f = 0;f < e;f++) {
              d.push(f);
            }
          } else {
            d = Za(a);
          }
        } else {
          d = void 0;
        }
      }
      for (var e = jb(a), f = e.length, h = 0;h < f;h++) {
        b.call(c, e[h], d && d[h], a);
      }
    }
  }
}
;function H(a, b) {
  var c;
  if (a instanceof H) {
    this.X = void 0 !== b ? b : a.X, lb(this, a.da), this.Ia = a.Ia, mb(this, a.aa), nb(this, a.qa), this.ka = a.ka, ob(this, a.a.clone()), this.ya = a.ya;
  } else {
    if (a && (c = Ua(String(a)))) {
      this.X = !!b;
      lb(this, c[1] || "", !0);
      var d = c[2] || "";
      this.Ia = d ? decodeURIComponent(d) : "";
      mb(this, c[3] || "", !0);
      nb(this, c[4]);
      this.ka = (d = c[5] || "") ? decodeURIComponent(d) : "";
      ob(this, c[6] || "", !0);
      this.ya = (c = c[7] || "") ? decodeURIComponent(c) : "";
    } else {
      this.X = !!b, this.a = new pb(null, 0, this.X);
    }
  }
}
g = H.prototype;
g.da = "";
g.Ia = "";
g.aa = "";
g.qa = null;
g.ka = "";
g.ya = "";
g.X = !1;
g.toString = function() {
  var a = [], b = this.da;
  b && a.push(qb(b, rb), ":");
  if (b = this.aa) {
    a.push("//");
    var c = this.Ia;
    c && a.push(qb(c, rb), "@");
    a.push(encodeURIComponent(String(b)));
    b = this.qa;
    null != b && a.push(":", String(b));
  }
  if (b = this.ka) {
    this.aa && "/" != b.charAt(0) && a.push("/"), a.push(qb(b, "/" == b.charAt(0) ? sb : tb));
  }
  (b = this.a.toString()) && a.push("?", b);
  (b = this.ya) && a.push("#", qb(b, ub));
  return a.join("");
};
g.clone = function() {
  return new H(this);
};
function lb(a, b, c) {
  a.da = c ? b ? decodeURIComponent(b) : "" : b;
  a.da && (a.da = a.da.replace(/:$/, ""));
}
function mb(a, b, c) {
  a.aa = c ? b ? decodeURIComponent(b) : "" : b;
}
function nb(a, b) {
  if (b) {
    b = Number(b);
    if (isNaN(b) || 0 > b) {
      throw Error("Bad port number " + b);
    }
    a.qa = b;
  } else {
    a.qa = null;
  }
}
function ob(a, b, c) {
  b instanceof pb ? (a.a = b, vb(a.a, a.X)) : (c || (b = qb(b, wb)), a.a = new pb(b, 0, a.X));
}
function I(a, b, c) {
  a = a.a;
  J(a);
  a.a = null;
  b = K(a, b);
  xb(a, b) && (a.B -= ib(a.h, b).length);
  F(a.h, b, [c]);
  a.B++;
}
function yb(a, b, c) {
  n(c) || (c = [String(c)]);
  zb(a.a, b, c);
}
function Ab(a) {
  I(a, "zx", ua());
  return a;
}
function Bb(a) {
  return a instanceof H ? a.clone() : new H(a, void 0);
}
function Cb(a, b, c, d) {
  var e = new H(null, void 0);
  a && lb(e, a);
  b && mb(e, b);
  c && nb(e, c);
  d && (e.ka = d);
  return e;
}
function qb(a, b) {
  return q(a) ? encodeURI(a).replace(b, Db) : null;
}
function Db(a) {
  a = a.charCodeAt(0);
  return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16);
}
var rb = /[#\/\?@]/g, tb = /[\#\?:]/g, sb = /[\#\?]/g, wb = /[\#\?@]/g, ub = /#/g;
function pb(a, b, c) {
  this.a = a || null;
  this.b = !!c;
}
function J(a) {
  if (!a.h && (a.h = new E, a.B = 0, a.a)) {
    for (var b = a.a.split("&"), c = 0;c < b.length;c++) {
      var d = b[c].indexOf("="), e = null, f = null;
      0 <= d ? (e = b[c].substring(0, d), f = b[c].substring(d + 1)) : e = b[c];
      e = decodeURIComponent(e.replace(/\+/g, " "));
      e = K(a, e);
      d = a;
      f = f ? decodeURIComponent(f.replace(/\+/g, " ")) : "";
      J(d);
      d.a = null;
      var e = K(d, e), h = ib(d.h, e);
      h || F(d.h, e, h = []);
      h.push(f);
      d.B++;
    }
  }
}
g = pb.prototype;
g.h = null;
g.B = null;
function Eb(a, b) {
  J(a);
  b = K(a, b);
  if (G(a.h.b, b)) {
    a.a = null;
    a.B -= ib(a.h, b).length;
    var c = a.h;
    G(c.b, b) && (delete c.b[b], c.c--, c.f++, c.a.length > 2 * c.c && hb(c));
  }
}
g.clear = function() {
  this.h = this.a = null;
  this.B = 0;
};
function xb(a, b) {
  J(a);
  b = K(a, b);
  return G(a.h.b, b);
}
g.W = function() {
  J(this);
  for (var a = this.h.O(), b = this.h.W(), c = [], d = 0;d < b.length;d++) {
    for (var e = a[d], f = 0;f < e.length;f++) {
      c.push(b[d]);
    }
  }
  return c;
};
g.O = function(a) {
  J(this);
  var b = [];
  if (q(a)) {
    xb(this, a) && (b = fb(b, ib(this.h, K(this, a))));
  } else {
    a = this.h.O();
    for (var c = 0;c < a.length;c++) {
      b = fb(b, a[c]);
    }
  }
  return b;
};
function zb(a, b, c) {
  Eb(a, b);
  0 < c.length && (a.a = null, F(a.h, K(a, b), gb(c)), a.B += c.length);
}
g.toString = function() {
  if (this.a) {
    return this.a;
  }
  if (!this.h) {
    return "";
  }
  for (var a = [], b = this.h.W(), c = 0;c < b.length;c++) {
    for (var d = b[c], e = encodeURIComponent(String(d)), d = this.O(d), f = 0;f < d.length;f++) {
      var h = e;
      "" !== d[f] && (h += "=" + encodeURIComponent(String(d[f])));
      a.push(h);
    }
  }
  return this.a = a.join("&");
};
g.clone = function() {
  var a = new pb;
  a.a = this.a;
  this.h && (a.h = this.h.clone(), a.B = this.B);
  return a;
};
function K(a, b) {
  var c = String(b);
  a.b && (c = c.toLowerCase());
  return c;
}
function vb(a, b) {
  b && !a.b && (J(a), a.a = null, kb(a.h, function(a, b) {
    var e = b.toLowerCase();
    b != e && (Eb(this, b), zb(this, e, a));
  }, a));
  a.b = b;
}
;function Fb(a) {
  a = String(a);
  if (/^\s*$/.test(a) ? 0 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""))) {
    try {
      return eval("(" + a + ")");
    } catch (b) {
    }
  }
  throw Error("Invalid JSON string: " + a);
}
function Gb(a) {
  return eval("(" + a + ")");
}
function Hb(a) {
  var b = [];
  Ib(new Jb, a, b);
  return b.join("");
}
function Jb() {
}
function Ib(a, b, c) {
  switch(typeof b) {
    case "string":
      Kb(b, c);
      break;
    case "number":
      c.push(isFinite(b) && !isNaN(b) ? b : "null");
      break;
    case "boolean":
      c.push(b);
      break;
    case "undefined":
      c.push("null");
      break;
    case "object":
      if (null == b) {
        c.push("null");
        break;
      }
      if (n(b)) {
        var d = b.length;
        c.push("[");
        for (var e = "", f = 0;f < d;f++) {
          c.push(e), Ib(a, b[f], c), e = ",";
        }
        c.push("]");
        break;
      }
      c.push("{");
      d = "";
      for (e in b) {
        Object.prototype.hasOwnProperty.call(b, e) && (f = b[e], "function" != typeof f && (c.push(d), Kb(e, c), c.push(":"), Ib(a, f, c), d = ","));
      }
      c.push("}");
      break;
    case "function":
      break;
    default:
      throw Error("Unknown type: " + typeof b);;
  }
}
var Lb = {'"':'\\"', "\\":"\\\\", "/":"\\/", "\b":"\\b", "\f":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t", "\x0B":"\\u000b"}, Mb = /\uffff/.test("\uffff") ? /[\\\"\x00-\x1f\x7f-\uffff]/g : /[\\\"\x00-\x1f\x7f-\xff]/g;
function Kb(a, b) {
  b.push('"', a.replace(Mb, function(a) {
    if (a in Lb) {
      return Lb[a];
    }
    var b = a.charCodeAt(0), e = "\\u";
    16 > b ? e += "000" : 256 > b ? e += "00" : 4096 > b && (e += "0");
    return Lb[a] = e + b.toString(16);
  }), '"');
}
;function Nb(a) {
  return Ob(a || arguments.callee.caller, []);
}
function Ob(a, b) {
  var c = [];
  if (0 <= bb(b, a)) {
    c.push("[...circular reference...]");
  } else {
    if (a && 50 > b.length) {
      c.push(Pb(a) + "(");
      for (var d = a.arguments, e = 0;d && e < d.length;e++) {
        0 < e && c.push(", ");
        var f;
        f = d[e];
        switch(typeof f) {
          case "object":
            f = f ? "object" : "null";
            break;
          case "string":
            break;
          case "number":
            f = String(f);
            break;
          case "boolean":
            f = f ? "true" : "false";
            break;
          case "function":
            f = (f = Pb(f)) ? f : "[fn]";
            break;
          default:
            f = typeof f;
        }
        40 < f.length && (f = f.substr(0, 40) + "...");
        c.push(f);
      }
      b.push(a);
      c.push(")\n");
      try {
        c.push(Ob(a.caller, b));
      } catch (h) {
        c.push("[exception trying to get caller]\n");
      }
    } else {
      a ? c.push("[...long stack...]") : c.push("[end]");
    }
  }
  return c.join("");
}
function Pb(a) {
  if (Qb[a]) {
    return Qb[a];
  }
  a = String(a);
  if (!Qb[a]) {
    var b = /function ([^\(]+)/.exec(a);
    Qb[a] = b ? b[1] : "[Anonymous]";
  }
  return Qb[a];
}
var Qb = {};
function Rb(a, b, c, d, e) {
  "number" == typeof e || Sb++;
  d || t();
  this.c = b;
  delete this.b;
  delete this.a;
}
Rb.prototype.b = null;
Rb.prototype.a = null;
var Sb = 0;
function Tb() {
  this.b = this.c = this.a = null;
}
function Ub(a, b) {
  this.name = a;
  this.value = b;
}
Ub.prototype.toString = function() {
  return this.name;
};
var Vb = new Ub("SEVERE", 1E3), Wb = new Ub("WARNING", 900), Xb = new Ub("INFO", 800), Yb = new Ub("CONFIG", 700), Zb = new Ub("FINE", 500);
function $b(a) {
  if (a.c) {
    return a.c;
  }
  if (a.a) {
    return $b(a.a);
  }
  Sa("Root logger has no level set.");
  return null;
}
Tb.prototype.log = function(a, b, c) {
  if (a.value >= $b(this).value) {
    for (ga(b) && (b = b()), a = "log:" + this.f(a, b, c).c, k.console && (k.console.timeStamp ? k.console.timeStamp(a) : k.console.markTimeline && k.console.markTimeline(a)), k.msWriteProfilerMark && k.msWriteProfilerMark(a), a = this;a;) {
      a = a.a;
    }
  }
};
Tb.prototype.f = function(a, b, c) {
  var d = new Rb(0, String(b));
  if (c) {
    d.b = c;
    var e;
    var f = arguments.callee.caller;
    try {
      var h;
      var l = ca("window.location.href");
      if (q(c)) {
        h = {message:c, name:"Unknown error", lineNumber:"Not available", fileName:l, stack:"Not available"};
      } else {
        var p, B, z = !1;
        try {
          p = c.lineNumber || c.Pb || "Not available";
        } catch (x) {
          p = "Not available", z = !0;
        }
        try {
          B = c.fileName || c.filename || c.sourceURL || k.$googDebugFname || l;
        } catch (ba) {
          B = "Not available", z = !0;
        }
        h = !z && c.lineNumber && c.fileName && c.stack && c.message && c.name ? c : {message:c.message || "Not available", name:c.name || "UnknownError", lineNumber:p, fileName:B, stack:c.stack || "Not available"};
      }
      e = "Message: " + na(h.message) + '\nUrl: <a href="view-source:' + h.fileName + '" target="_new">' + h.fileName + "</a>\nLine: " + h.lineNumber + "\n\nBrowser stack:\n" + na(h.stack + "-> ") + "[end]\n\nJS stack traversal:\n" + na(Nb(f) + "-> ");
    } catch (A) {
      e = "Exception trying to expose exception! You win, we lose. " + A;
    }
    d.a = e;
  }
  return d;
};
function ac(a, b) {
  a.log(Wb, b, void 0);
}
var bc = {}, cc = null;
function dc(a) {
  cc || (cc = new Tb, bc[""] = cc, cc.c = Yb);
  var b;
  if (!(b = bc[a])) {
    b = new Tb;
    var c = a.lastIndexOf("."), d = a.substr(c + 1), c = dc(a.substr(0, c));
    c.b || (c.b = {});
    c.b[d] = b;
    b.a = c;
    bc[a] = b;
  }
  return b;
}
;function L(a, b) {
  a && a.log(Vb, b, void 0);
}
function M(a, b) {
  a && a.log(Zb, b, void 0);
}
;function ec() {
  this.a = dc("goog.net.BrowserChannel");
}
function fc(a, b, c, d) {
  N(a, "XMLHTTP TEXT (" + b + "): " + gc(a, c) + (d ? " " + d : ""));
}
function hc(a, b) {
  N(a, b);
}
function ic(a, b, c) {
  L(a.a, (c || "Exception") + b);
}
function N(a, b) {
  var c = a.a;
  c && c.log(Xb, b, void 0);
}
function gc(a, b) {
  if (!b || b == jc) {
    return b;
  }
  try {
    var c = Gb(b);
    if (c) {
      for (var d = 0;d < c.length;d++) {
        if (n(c[d])) {
          var e = c[d];
          if (!(2 > e.length)) {
            var f = e[1];
            if (n(f) && !(1 > f.length)) {
              var h = f[0];
              if ("noop" != h && "stop" != h) {
                for (var l = 1;l < f.length;l++) {
                  f[l] = "";
                }
              }
            }
          }
        }
      }
    }
    return Hb(c);
  } catch (p) {
    return N(a, "Exception parsing expected JS array - probably was not JS"), b;
  }
}
;function kc(a, b) {
  this.a = b ? Gb : Fb;
}
kc.prototype.parse = function(a) {
  return this.a(a);
};
function O() {
  0 != lc && (mc[this[ia] || (this[ia] = ++ja)] = this);
}
var lc = 0, mc = {};
O.prototype.Ya = !1;
O.prototype.ua = function() {
  if (!this.Ya && (this.Ya = !0, this.F(), 0 != lc)) {
    var a = this[ia] || (this[ia] = ++ja);
    delete mc[a];
  }
};
O.prototype.F = function() {
  if (this.bb) {
    for (;this.bb.length;) {
      this.bb.shift()();
    }
  }
};
var nc = "closure_listenable_" + (1E6 * Math.random() | 0);
function oc(a) {
  try {
    return !(!a || !a[nc]);
  } catch (b) {
    return !1;
  }
}
var pc = 0;
function qc(a, b, c, d, e) {
  this.listener = a;
  this.f = null;
  this.src = b;
  this.type = c;
  this.b = !!d;
  this.c = e;
  this.jb = ++pc;
  this.a = this.ta = !1;
}
function rc(a) {
  a.a = !0;
  a.listener = null;
  a.f = null;
  a.src = null;
  a.c = null;
}
;function sc(a) {
  this.src = a;
  this.a = {};
  this.b = 0;
}
function tc(a, b, c, d, e) {
  var f = a.a[b];
  f || (f = a.a[b] = [], a.b++);
  var h = uc(f, c, d, e);
  -1 < h ? (a = f[h], a.ta = !1) : (a = new qc(c, a.src, b, !!d, e), a.ta = !1, f.push(a));
  return a;
}
function vc(a, b) {
  var c = b.type;
  if (!(c in a.a)) {
    return !1;
  }
  var d = a.a[c], e = bb(d, b), f;
  (f = 0 <= e) && D.splice.call(d, e, 1);
  f && (rc(b), 0 == a.a[c].length && (delete a.a[c], a.b--));
  return f;
}
function wc(a, b, c, d, e) {
  a = a.a[b];
  b = -1;
  a && (b = uc(a, c, d, e));
  return -1 < b ? a[b] : null;
}
function uc(a, b, c, d) {
  for (var e = 0;e < a.length;++e) {
    var f = a[e];
    if (!f.a && f.listener == b && f.b == !!c && f.c == d) {
      return e;
    }
  }
  return -1;
}
;var xc = !w || w && 9 <= C, yc = w && !y("9");
!Fa || y("528");
Ea && y("1.9b") || w && y("8") || Da && y("9.5") || Fa && y("528");
Ea && !y("8") || w && y("9");
function P(a, b) {
  this.type = a;
  this.a = this.b = b;
  this.ub = !0;
}
P.prototype.ua = function() {
};
P.prototype.c = function() {
  this.ub = !1;
};
function zc(a) {
  zc[" "](a);
  return a;
}
zc[" "] = da;
function Ac(a, b) {
  P.call(this, a ? a.type : "");
  this.f = this.state = this.a = this.b = null;
  if (a) {
    this.type = a.type;
    this.b = a.target || a.srcElement;
    this.a = b;
    var c = a.relatedTarget;
    if (c && Ea) {
      try {
        zc(c.nodeName);
      } catch (d) {
      }
    }
    this.state = a.state;
    this.f = a;
    a.defaultPrevented && this.c();
  }
}
u(Ac, P);
Ac.prototype.c = function() {
  Ac.ea.c.call(this);
  var a = this.f;
  if (a.preventDefault) {
    a.preventDefault();
  } else {
    if (a.returnValue = !1, yc) {
      try {
        if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) {
          a.keyCode = -1;
        }
      } catch (b) {
      }
    }
  }
};
var Bc = "closure_lm_" + (1E6 * Math.random() | 0), Cc = {}, Dc = 0;
function Ec(a, b, c, d, e) {
  if (n(b)) {
    for (var f = 0;f < b.length;f++) {
      Ec(a, b[f], c, d, e);
    }
    return null;
  }
  c = Fc(c);
  if (oc(a)) {
    a = a.Aa(b, c, d, e);
  } else {
    if (!b) {
      throw Error("Invalid event type");
    }
    var f = !!d, h = Gc(a);
    h || (a[Bc] = h = new sc(a));
    c = tc(h, b, c, d, e);
    c.f || (d = Hc(), c.f = d, d.src = a, d.listener = c, a.addEventListener ? a.addEventListener(b, d, f) : a.attachEvent(b in Cc ? Cc[b] : Cc[b] = "on" + b, d), Dc++);
    a = c;
  }
  return a;
}
function Hc() {
  var a = Ic, b = xc ? function(c) {
    return a.call(b.src, b.listener, c);
  } : function(c) {
    c = a.call(b.src, b.listener, c);
    if (!c) {
      return c;
    }
  };
  return b;
}
function Jc(a, b, c, d, e) {
  if (n(b)) {
    for (var f = 0;f < b.length;f++) {
      Jc(a, b[f], c, d, e);
    }
  } else {
    c = Fc(c), oc(a) ? a.Wa(b, c, d, e) : a && (a = Gc(a)) && (b = wc(a, b, c, !!d, e)) && Xa(b);
  }
}
function Xa(a) {
  if ("number" == typeof a || !a || a.a) {
    return !1;
  }
  var b = a.src;
  if (oc(b)) {
    return vc(b.N, a);
  }
  var c = a.type, d = a.f;
  b.removeEventListener ? b.removeEventListener(c, d, a.b) : b.detachEvent && b.detachEvent(c in Cc ? Cc[c] : Cc[c] = "on" + c, d);
  Dc--;
  (c = Gc(b)) ? (vc(c, a), 0 == c.b && (c.src = null, b[Bc] = null)) : rc(a);
  return !0;
}
function Kc(a, b, c, d) {
  var e = 1;
  if (a = Gc(a)) {
    if (b = a.a[b]) {
      for (b = gb(b), a = 0;a < b.length;a++) {
        var f = b[a];
        f && f.b == c && !f.a && (e &= !1 !== Lc(f, d));
      }
    }
  }
  return Boolean(e);
}
function Lc(a, b) {
  var c = a.listener, d = a.c || a.src;
  a.ta && Xa(a);
  return c.call(d, b);
}
function Ic(a, b) {
  if (a.a) {
    return !0;
  }
  if (!xc) {
    var c = b || ca("window.event"), d = new Ac(c, this), e = !0;
    if (!(0 > c.keyCode || void 0 != c.returnValue)) {
      a: {
        var f = !1;
        if (0 == c.keyCode) {
          try {
            c.keyCode = -1;
            break a;
          } catch (h) {
            f = !0;
          }
        }
        if (f || void 0 == c.returnValue) {
          c.returnValue = !0;
        }
      }
      c = [];
      for (f = d.a;f;f = f.parentNode) {
        c.push(f);
      }
      for (var f = a.type, l = c.length - 1;0 <= l;l--) {
        d.a = c[l], e &= Kc(c[l], f, !0, d);
      }
      for (l = 0;l < c.length;l++) {
        d.a = c[l], e &= Kc(c[l], f, !1, d);
      }
    }
    return e;
  }
  return Lc(a, new Ac(b, this));
}
function Gc(a) {
  a = a[Bc];
  return a instanceof sc ? a : null;
}
var Mc = "__closure_events_fn_" + (1E9 * Math.random() >>> 0);
function Fc(a) {
  return ga(a) ? a : a[Mc] || (a[Mc] = function(b) {
    return a.handleEvent(b);
  });
}
;function Q() {
  O.call(this);
  this.N = new sc(this);
  this.yb = this;
}
u(Q, O);
Q.prototype[nc] = !0;
g = Q.prototype;
g.Va = null;
g.removeEventListener = function(a, b, c, d) {
  Jc(this, a, b, c, d);
};
function R(a, b) {
  var c, d = a.Va;
  if (d) {
    for (c = [];d;d = d.Va) {
      c.push(d);
    }
  }
  var d = a.yb, e = b, f = e.type || e;
  if (q(e)) {
    e = new P(e, d);
  } else {
    if (e instanceof P) {
      e.b = e.b || d;
    } else {
      var h = e, e = new P(f, d);
      ab(e, h);
    }
  }
  var h = !0, l;
  if (c) {
    for (var p = c.length - 1;0 <= p;p--) {
      l = e.a = c[p], h = Nc(l, f, !0, e) && h;
    }
  }
  l = e.a = d;
  h = Nc(l, f, !0, e) && h;
  h = Nc(l, f, !1, e) && h;
  if (c) {
    for (p = 0;p < c.length;p++) {
      l = e.a = c[p], h = Nc(l, f, !1, e) && h;
    }
  }
}
g.F = function() {
  Q.ea.F.call(this);
  if (this.N) {
    var a = this.N, b = 0, c;
    for (c in a.a) {
      for (var d = a.a[c], e = 0;e < d.length;e++) {
        ++b, rc(d[e]);
      }
      delete a.a[c];
      a.b--;
    }
  }
  this.Va = null;
};
g.Aa = function(a, b, c, d) {
  return tc(this.N, String(a), b, c, d);
};
g.Wa = function(a, b, c, d) {
  var e;
  e = this.N;
  a = String(a);
  if (a in e.a) {
    var f = e.a[a];
    b = uc(f, b, c, d);
    -1 < b ? (rc(f[b]), D.splice.call(f, b, 1), 0 == f.length && (delete e.a[a], e.b--), e = !0) : e = !1;
  } else {
    e = !1;
  }
  return e;
};
function Nc(a, b, c, d) {
  b = a.N.a[String(b)];
  if (!b) {
    return !0;
  }
  b = gb(b);
  for (var e = !0, f = 0;f < b.length;++f) {
    var h = b[f];
    if (h && !h.a && h.b == c) {
      var l = h.listener, p = h.c || h.src;
      h.ta && vc(a.N, h);
      e = !1 !== l.call(p, d) && e;
    }
  }
  return e && 0 != d.ub;
}
;function Oc(a, b) {
  Q.call(this);
  this.c = a || 1;
  this.b = b || k;
  this.g = r(this.s, this);
  this.j = t();
}
u(Oc, Q);
Oc.prototype.f = !1;
Oc.prototype.a = null;
Oc.prototype.s = function() {
  if (this.f) {
    var a = t() - this.j;
    0 < a && a < .8 * this.c ? this.a = this.b.setTimeout(this.g, this.c - a) : (this.a && (this.b.clearTimeout(this.a), this.a = null), R(this, Pc), this.f && (this.a = this.b.setTimeout(this.g, this.c), this.j = t()));
  }
};
function Qc(a) {
  a.f = !0;
  a.a || (a.a = a.b.setTimeout(a.g, a.c), a.j = t());
}
function Rc(a) {
  a.f = !1;
  a.a && (a.b.clearTimeout(a.a), a.a = null);
}
Oc.prototype.F = function() {
  Oc.ea.F.call(this);
  Rc(this);
  delete this.b;
};
var Pc = "tick";
function Sc(a, b, c) {
  if (ga(a)) {
    c && (a = r(a, c));
  } else {
    if (a && "function" == typeof a.handleEvent) {
      a = r(a.handleEvent, a);
    } else {
      throw Error("Invalid listener argument");
    }
  }
  return 2147483647 < b ? -1 : k.setTimeout(a, b || 0);
}
;function Tc() {
}
Tc.prototype.a = null;
function Uc(a) {
  var b;
  (b = a.a) || (b = {}, Vc(a) && (b[0] = !0, b[1] = !0), b = a.a = b);
  return b;
}
;var Wc;
function Xc() {
}
u(Xc, Tc);
function Yc(a) {
  return (a = Vc(a)) ? new ActiveXObject(a) : new XMLHttpRequest;
}
function Vc(a) {
  if (!a.b && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
    for (var b = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], c = 0;c < b.length;c++) {
      var d = b[c];
      try {
        return new ActiveXObject(d), a.b = d;
      } catch (e) {
      }
    }
    throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");
  }
  return a.b;
}
Wc = new Xc;
function S(a) {
  Q.call(this);
  this.zb = new E;
  this.Ja = a || null;
  this.c = !1;
  this.Ha = this.a = null;
  this.ab = this.K = "";
  this.g = 0;
  this.j = "";
  this.f = this.La = this.G = this.Ka = !1;
  this.s = 0;
  this.Ba = null;
  this.eb = Zc;
  this.Ea = this.fb = !1;
}
u(S, Q);
var Zc = "";
S.prototype.b = dc("goog.net.XhrIo");
var $c = /^https?$/i, ad = ["POST", "PUT"];
function bd(a, b, c, d, e) {
  if (a.a) {
    throw Error("[goog.net.XhrIo] Object is active with another request=" + a.K + "; newUri=" + b);
  }
  c = c ? c.toUpperCase() : "GET";
  a.K = b;
  a.j = "";
  a.g = 0;
  a.ab = c;
  a.Ka = !1;
  a.c = !0;
  a.a = a.Ja ? Yc(a.Ja) : Yc(Wc);
  a.Ha = a.Ja ? Uc(a.Ja) : Uc(Wc);
  a.a.onreadystatechange = r(a.cb, a);
  try {
    M(a.b, T(a, "Opening Xhr")), a.La = !0, a.a.open(c, String(b), !0), a.La = !1;
  } catch (f) {
    M(a.b, T(a, "Error opening Xhr: " + f.message));
    cd(a, f);
    return;
  }
  b = d || "";
  var h = a.zb.clone();
  e && kb(e, function(a, b) {
    F(h, b, a);
  });
  e = db(h.W());
  d = k.FormData && b instanceof k.FormData;
  !(0 <= bb(ad, c)) || e || d || F(h, "Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
  kb(h, function(a, b) {
    this.a.setRequestHeader(b, a);
  }, a);
  a.eb && (a.a.responseType = a.eb);
  "withCredentials" in a.a && (a.a.withCredentials = a.fb);
  try {
    dd(a), 0 < a.s && (a.Ea = ed(a.a), M(a.b, T(a, "Will abort after " + a.s + "ms if incomplete, xhr2 " + a.Ea)), a.Ea ? (a.a.timeout = a.s, a.a.ontimeout = r(a.$a, a)) : a.Ba = Sc(a.$a, a.s, a)), M(a.b, T(a, "Sending request")), a.G = !0, a.a.send(b), a.G = !1;
  } catch (l) {
    M(a.b, T(a, "Send error: " + l.message)), cd(a, l);
  }
}
function ed(a) {
  return w && y(9) && "number" == typeof a.timeout && void 0 !== a.ontimeout;
}
function eb(a) {
  return "content-type" == a.toLowerCase();
}
S.prototype.$a = function() {
  "undefined" != typeof aa && this.a && (this.j = "Timed out after " + this.s + "ms, aborting", this.g = 8, M(this.b, T(this, this.j)), R(this, "timeout"), fd(this, 8));
};
function cd(a, b) {
  a.c = !1;
  a.a && (a.f = !0, a.a.abort(), a.f = !1);
  a.j = b;
  a.g = 5;
  gd(a);
  hd(a);
}
function gd(a) {
  a.Ka || (a.Ka = !0, R(a, "complete"), R(a, "error"));
}
function fd(a, b) {
  a.a && a.c && (M(a.b, T(a, "Aborting")), a.c = !1, a.f = !0, a.a.abort(), a.f = !1, a.g = b || 7, R(a, "complete"), R(a, "abort"), hd(a));
}
S.prototype.F = function() {
  this.a && (this.c && (this.c = !1, this.f = !0, this.a.abort(), this.f = !1), hd(this, !0));
  S.ea.F.call(this);
};
S.prototype.cb = function() {
  this.Ya || (this.La || this.G || this.f ? id(this) : this.Ab());
};
S.prototype.Ab = function() {
  id(this);
};
function id(a) {
  if (a.c && "undefined" != typeof aa) {
    if (a.Ha[1] && 4 == U(a) && 2 == jd(a)) {
      M(a.b, T(a, "Local request error detected and ignored"));
    } else {
      if (a.G && 4 == U(a)) {
        Sc(a.cb, 0, a);
      } else {
        if (R(a, "readystatechange"), 4 == U(a)) {
          M(a.b, T(a, "Request complete"));
          a.c = !1;
          try {
            var b = jd(a), c;
            a: {
              switch(b) {
                case 200:
                ;
                case 201:
                ;
                case 202:
                ;
                case 204:
                ;
                case 206:
                ;
                case 304:
                ;
                case 1223:
                  c = !0;
                  break a;
                default:
                  c = !1;
              }
            }
            var d;
            if (!(d = c)) {
              var e;
              if (e = 0 === b) {
                var f = Ua(String(a.K))[1] || null;
                if (!f && self.location) {
                  var h = self.location.protocol, f = h.substr(0, h.length - 1)
                }
                e = !$c.test(f ? f.toLowerCase() : "");
              }
              d = e;
            }
            if (d) {
              R(a, "complete"), R(a, "success");
            } else {
              a.g = 6;
              var l;
              try {
                l = 2 < U(a) ? a.a.statusText : "";
              } catch (p) {
                M(a.b, "Can not get status: " + p.message), l = "";
              }
              a.j = l + " [" + jd(a) + "]";
              gd(a);
            }
          } finally {
            hd(a);
          }
        }
      }
    }
  }
}
function hd(a, b) {
  if (a.a) {
    dd(a);
    var c = a.a, d = a.Ha[0] ? da : null;
    a.a = null;
    a.Ha = null;
    b || R(a, "ready");
    try {
      c.onreadystatechange = d;
    } catch (e) {
      L(a.b, "Problem encountered resetting onreadystatechange: " + e.message);
    }
  }
}
function dd(a) {
  a.a && a.Ea && (a.a.ontimeout = null);
  "number" == typeof a.Ba && (k.clearTimeout(a.Ba), a.Ba = null);
}
function U(a) {
  return a.a ? a.a.readyState : 0;
}
function jd(a) {
  try {
    return 2 < U(a) ? a.a.status : -1;
  } catch (b) {
    return -1;
  }
}
function kd(a) {
  try {
    return a.a ? a.a.responseText : "";
  } catch (b) {
    return M(a.b, "Can not get responseText: " + b.message), "";
  }
}
function T(a, b) {
  return b + " [" + a.ab + " " + a.K + " " + jd(a) + "]";
}
;new function() {
  t();
};
function ld(a) {
  O.call(this);
  this.b = a;
  this.a = {};
}
u(ld, O);
var md = [];
ld.prototype.Aa = function(a, b, c, d) {
  n(b) || (md[0] = b, b = md);
  for (var e = 0;e < b.length;e++) {
    var f = Ec(a, b[e], c || this.handleEvent, d || !1, this.b || this);
    if (!f) {
      break;
    }
    this.a[f.jb] = f;
  }
  return this;
};
ld.prototype.Wa = function(a, b, c, d, e) {
  if (n(b)) {
    for (var f = 0;f < b.length;f++) {
      this.Wa(a, b[f], c, d, e);
    }
  } else {
    c = c || this.handleEvent, e = e || this.b || this, c = Fc(c), d = !!d, b = oc(a) ? wc(a.N, String(b), c, d, e) : a ? (a = Gc(a)) ? wc(a, b, c, d, e) : null : null, b && (Xa(b), delete this.a[b.jb]);
  }
  return this;
};
ld.prototype.F = function() {
  ld.ea.F.call(this);
  Wa(this.a);
  this.a = {};
};
ld.prototype.handleEvent = function() {
  throw Error("EventHandler.handleEvent not implemented");
};
function nd(a, b, c) {
  O.call(this);
  this.j = a;
  this.g = b;
  this.f = c;
  this.c = r(this.s, this);
}
u(nd, O);
nd.prototype.b = !1;
nd.prototype.a = null;
nd.prototype.F = function() {
  nd.ea.F.call(this);
  this.a && (k.clearTimeout(this.a), this.a = null, this.b = !1);
};
nd.prototype.s = function() {
  this.a = null;
  this.b && (this.b = !1, od(this));
};
function od(a) {
  a.a = Sc(a.c, a.g);
  a.j.call(a.f);
}
;function V(a, b, c, d, e) {
  this.b = a;
  this.a = b;
  this.g = c;
  this.c = d;
  this.f = e || 1;
  this.G = pd;
  this.s = new ld(this);
  a = this.j = new Oc;
  a.c = qd;
  a.a && a.f ? (Rc(a), Qc(a)) : a.a && Rc(a);
}
g = V.prototype;
g.Z = null;
g.C = !1;
g.ha = null;
g.Za = null;
g.ra = null;
g.fa = null;
g.L = null;
g.w = null;
g.ca = null;
g.l = null;
g.sa = 0;
g.I = null;
g.ga = null;
g.R = null;
g.na = -1;
g.vb = !0;
g.S = !1;
g.Ta = 0;
g.Ca = null;
var pd = 45E3, qd = 250;
function rd(a, b) {
  switch(a) {
    case 0:
      return "Non-200 return code (" + b + ")";
    case 1:
      return "XMLHTTP failure (no data)";
    case 2:
      return "HttpConnection timeout";
    default:
      return "Unknown error";
  }
}
var sd = {}, td = {};
g = V.prototype;
g.setTimeout = function(a) {
  this.G = a;
};
function ud(a, b, c) {
  a.fa = 1;
  a.L = Ab(b.clone());
  a.ca = c;
  a.K = !0;
  vd(a, null);
}
function wd(a, b, c, d, e) {
  a.fa = 1;
  a.L = Ab(b.clone());
  a.ca = null;
  a.K = c;
  e && (a.vb = !1);
  vd(a, d);
}
function vd(a, b) {
  a.ra = t();
  xd(a);
  a.w = a.L.clone();
  yb(a.w, "t", a.f);
  a.sa = 0;
  a.l = a.b.Na(a.b.Fa() ? b : null);
  0 < a.Ta && (a.Ca = new nd(r(a.xb, a, a.l), a.Ta));
  a.s.Aa(a.l, "readystatechange", a.Lb);
  var c;
  if (a.Z) {
    c = a.Z;
    var d = {}, e;
    for (e in c) {
      d[e] = c[e];
    }
    c = d;
  } else {
    c = {};
  }
  a.ca ? (a.ga = "POST", c["Content-Type"] = "application/x-www-form-urlencoded", bd(a.l, a.w, a.ga, a.ca, c)) : (a.ga = "GET", a.vb && !Fa && (c.Connection = "close"), bd(a.l, a.w, a.ga, null, c));
  a.b.H(yd);
  if (d = a.ca) {
    for (c = "", d = d.split("&"), e = 0;e < d.length;e++) {
      var f = d[e].split("=");
      if (1 < f.length) {
        var h = f[0], f = f[1], l = h.split("_");
        c = 2 <= l.length && "type" == l[1] ? c + (h + "=" + f + "&") : c + (h + "=redacted&");
      }
    }
  } else {
    c = null;
  }
  N(a.a, "XMLHTTP REQ (" + a.c + ") [attempt " + a.f + "]: " + a.ga + "\n" + a.w + "\n" + c);
}
g.Lb = function(a) {
  a = a.b;
  var b = this.Ca;
  b && 3 == U(a) ? (N(this.a, "Throttling readystatechange."), b.a ? b.b = !0 : od(b)) : this.xb(a);
};
g.xb = function(a) {
  try {
    if (a == this.l) {
      a: {
        var b = U(this.l), c = this.l.g, d = jd(this.l);
        if (w && !(w && 10 <= C) || Fa && !y("420+")) {
          if (4 > b) {
            break a;
          }
        } else {
          if (3 > b || 3 == b && !Da && !kd(this.l)) {
            break a;
          }
        }
        this.S || 4 != b || 7 == c || (8 == c || 0 >= d ? this.b.H(zd) : this.b.H(Ad));
        Bd(this);
        var e = jd(this.l);
        this.na = e;
        var f = kd(this.l);
        f || N(this.a, "No response text for uri " + this.w + " status " + e);
        this.C = 200 == e;
        N(this.a, "XMLHTTP RESP (" + this.c + ") [ attempt " + this.f + "]: " + this.ga + "\n" + this.w + "\n" + b + " " + e);
        if (this.C) {
          4 == b && Cd(this), this.K ? (Dd(this, b, f), Da && this.C && 3 == b && (this.s.Aa(this.j, Pc, this.Kb), Qc(this.j))) : (fc(this.a, this.c, f, null), Ed(this, f)), this.C && !this.S && (4 == b ? this.b.ba(this) : (this.C = !1, xd(this)));
        } else {
          if (400 == e && 0 < f.indexOf("Unknown SID")) {
            this.R = 3;
            W();
            var h = this.a.a;
            h && ac(h, "XMLHTTP Unknown SID (" + this.c + ")");
          } else {
            this.R = 0;
            W();
            var l = this.a.a;
            l && ac(l, "XMLHTTP Bad status " + e + " (" + this.c + ")");
          }
          Cd(this);
          Fd(this);
        }
      }
    } else {
      var p = this.a.a;
      p && ac(p, "Called back with an unexpected xmlhttp");
    }
  } catch (B) {
    N(this.a, "Failed call to OnXmlHttpReadyStateChanged_"), this.l && kd(this.l) ? ic(this.a, B, "ResponseText: " + kd(this.l)) : ic(this.a, B, "No response text");
  } finally {
  }
};
function Dd(a, b, c) {
  for (var d = !0;!a.S && a.sa < c.length;) {
    var e = Gd(a, c);
    if (e == td) {
      4 == b && (a.R = 4, W(), d = !1);
      fc(a.a, a.c, null, "[Incomplete Response]");
      break;
    } else {
      if (e == sd) {
        a.R = 4;
        W();
        fc(a.a, a.c, c, "[Invalid Chunk]");
        d = !1;
        break;
      } else {
        fc(a.a, a.c, e, null), Ed(a, e);
      }
    }
  }
  4 == b && 0 == c.length && (a.R = 1, W(), d = !1);
  a.C = a.C && d;
  d || (fc(a.a, a.c, c, "[Invalid Chunked Response]"), Cd(a), Fd(a));
}
g.Kb = function() {
  var a = U(this.l), b = kd(this.l);
  this.sa < b.length && (Bd(this), Dd(this, a, b), this.C && 4 != a && xd(this));
};
function Gd(a, b) {
  var c = a.sa, d = b.indexOf("\n", c);
  if (-1 == d) {
    return td;
  }
  c = Number(b.substring(c, d));
  if (isNaN(c)) {
    return sd;
  }
  d += 1;
  if (d + c > b.length) {
    return td;
  }
  var e = b.substr(d, c);
  a.sa = d + c;
  return e;
}
function Hd(a, b) {
  a.ra = t();
  xd(a);
  var c = b ? window.location.hostname : "";
  a.w = a.L.clone();
  I(a.w, "DOMAIN", c);
  I(a.w, "t", a.f);
  try {
    a.I = new ActiveXObject("htmlfile");
  } catch (d) {
    L(a.a.a, "ActiveX blocked");
    Cd(a);
    a.R = 7;
    W();
    Fd(a);
    return;
  }
  var e = "<html><body>";
  b && (e += '<script>document.domain="' + c + '"\x3c/script>');
  e += "</body></html>";
  a.I.open();
  a.I.write(e);
  a.I.close();
  a.I.parentWindow.m = r(a.Ib, a);
  a.I.parentWindow.d = r(a.tb, a, !0);
  a.I.parentWindow.rpcClose = r(a.tb, a, !1);
  c = a.I.createElement("div");
  a.I.parentWindow.document.body.appendChild(c);
  c.innerHTML = '<iframe src="' + a.w + '"></iframe>';
  N(a.a, "TRIDENT REQ (" + a.c + ") [ attempt " + a.f + "]: GET\n" + a.w);
  a.b.H(yd);
}
g.Ib = function(a) {
  X(r(this.Hb, this, a), 0);
};
g.Hb = function(a) {
  if (!this.S) {
    var b = this.a;
    N(b, "TRIDENT TEXT (" + this.c + "): " + gc(b, a));
    Bd(this);
    Ed(this, a);
    xd(this);
  }
};
g.tb = function(a) {
  X(r(this.Gb, this, a), 0);
};
g.Gb = function(a) {
  this.S || (N(this.a, "TRIDENT TEXT (" + this.c + "): " + a ? "success" : "failure"), Cd(this), this.C = a, this.b.ba(this), this.b.H(Id));
};
g.Db = function() {
  Bd(this);
  this.b.ba(this);
};
function Jd(a) {
  a.S = !0;
  Cd(a);
}
function xd(a) {
  a.Za = t() + a.G;
  Kd(a, a.G);
}
function Kd(a, b) {
  if (null != a.ha) {
    throw Error("WatchDog timer not null");
  }
  a.ha = X(r(a.Jb, a), b);
}
function Bd(a) {
  a.ha && (k.clearTimeout(a.ha), a.ha = null);
}
g.Jb = function() {
  this.ha = null;
  var a = t();
  if (0 <= a - this.Za) {
    this.C && L(this.a.a, "Received watchdog timeout even though request loaded successfully"), N(this.a, "TIMEOUT: " + this.w), 2 != this.fa && this.b.H(zd), Cd(this), this.R = 2, W(), Fd(this);
  } else {
    var b = this.a.a;
    b && ac(b, "WatchDog timer called too early");
    Kd(this, this.Za - a);
  }
};
function Fd(a) {
  a.b.ob() || a.S || a.b.ba(a);
}
function Cd(a) {
  Bd(a);
  var b = a.Ca;
  b && "function" == typeof b.ua && b.ua();
  a.Ca = null;
  Rc(a.j);
  b = a.s;
  Wa(b.a);
  b.a = {};
  a.l && (b = a.l, a.l = null, fd(b), b.ua());
  a.I && (a.I = null);
}
g.ib = function() {
  return this.g;
};
function Ed(a, b) {
  try {
    a.b.qb(a, b), a.b.H(Id);
  } catch (c) {
    ic(a.a, c, "Error in httprequest callback");
  }
}
;function Ld(a, b, c, d, e) {
  hc(new ec, "TestLoadImageWithRetries: " + e);
  if (0 == d) {
    c(!1);
  } else {
    var f = e || 0;
    d--;
    Md(a, b, function(e) {
      e ? c(!0) : k.setTimeout(function() {
        Ld(a, b, c, d, f);
      }, f);
    });
  }
}
function Md(a, b, c) {
  function d(a, b) {
    return function() {
      try {
        N(e, "TestLoadImage: " + b), f.onload = null, f.onerror = null, f.onabort = null, f.ontimeout = null, k.clearTimeout(h), c(a);
      } catch (d) {
        ic(e, d);
      }
    };
  }
  var e = new ec;
  N(e, "TestLoadImage: loading " + a);
  var f = new Image, h = null;
  f.onload = d(!0, "loaded");
  f.onerror = d(!1, "error");
  f.onabort = d(!1, "abort");
  f.ontimeout = d(!1, "timeout");
  h = k.setTimeout(function() {
    if (f.ontimeout) {
      f.ontimeout();
    }
  }, b);
  f.src = a;
}
;function Nd(a, b) {
  this.a = a;
  this.b = b;
  this.c = new kc(0, !0);
}
g = Nd.prototype;
g.Ra = null;
g.A = null;
g.Da = !1;
g.wb = null;
g.wa = null;
g.Ua = null;
g.Sa = null;
g.v = null;
g.Y = -1;
g.ma = null;
g.ia = null;
function Od(a) {
  var b = Pd(a.a, a.ia, "/mail/images/cleardot.gif");
  Ab(b);
  Ld(b.toString(), 5E3, r(a.Bb, a), 3, 2E3);
  a.H(yd);
}
g.Bb = function(a) {
  if (a) {
    this.v = 2, Qd(this);
  } else {
    W();
    var b = this.a;
    N(b.a, "Test Connection Blocked");
    b.P = b.M.Y;
    Y(b, 9);
  }
  a && this.H(Ad);
};
function Qd(a) {
  N(a.b, "TestConnection: starting stage 2");
  var b = a.a.K;
  if (null != b) {
    N(a.b, "TestConnection: skipping stage 2, precomputed result is " + b ? "Buffered" : "Unbuffered"), W(), b ? (W(), Rd(a.a, a, !1)) : (W(), Rd(a.a, a, !0));
  } else {
    if (a.A = new V(a, a.b, void 0, void 0, void 0), a.A.Z = a.Ra, b = Sd(a.a, a.ma, a.Sa), W(), !w || w && 10 <= C) {
      yb(b, "TYPE", "xmlhttp"), wd(a.A, b, !1, a.ma, !1);
    } else {
      yb(b, "TYPE", "html");
      var c = a.A;
      a = Boolean(a.ma);
      c.fa = 3;
      c.L = Ab(b.clone());
      Hd(c, a);
    }
  }
}
g.Na = function(a) {
  return this.a.Na(a);
};
g.ob = function() {
  return !1;
};
g.qb = function(a, b) {
  this.Y = a.na;
  if (0 == this.v) {
    if (N(this.b, "TestConnection: Got data for stage 1"), b) {
      try {
        var c = this.c.parse(b);
      } catch (d) {
        ic(this.b, d);
        Td(this.a, this);
        return;
      }
      this.ma = c[0];
      this.ia = c[1];
    } else {
      N(this.b, "TestConnection: Null responseText"), Td(this.a, this);
    }
  } else {
    if (2 == this.v) {
      if (this.Da) {
        W(), this.Ua = t();
      } else {
        if ("11111" == b) {
          if (W(), this.Da = !0, this.wa = t(), c = this.wa - this.wb, !w || w && 10 <= C || 500 > c) {
            this.Y = 200, Jd(this.A), N(this.b, "Test connection succeeded; using streaming connection"), W(), Rd(this.a, this, !0);
          }
        } else {
          W(), this.wa = this.Ua = t(), this.Da = !1;
        }
      }
    }
  }
};
g.ba = function() {
  this.Y = this.A.na;
  if (!this.A.C) {
    N(this.b, "TestConnection: request failed, in state " + this.v), 0 == this.v ? W() : 2 == this.v && W(), Td(this.a, this);
  } else {
    if (0 == this.v) {
      N(this.b, "TestConnection: request complete for initial check"), this.ia ? (this.v = 1, Od(this)) : (this.v = 2, Qd(this));
    } else {
      if (2 == this.v) {
        N(this.b, "TestConnection: request complete for stage 2");
        var a = !1;
        (a = !w || w && 10 <= C ? this.Da : 200 > this.Ua - this.wa ? !1 : !0) ? (N(this.b, "Test connection succeeded; using streaming connection"), W(), Rd(this.a, this, !0)) : (N(this.b, "Test connection failed; not using streaming"), W(), Rd(this.a, this, !1));
      }
    }
  }
};
g.Fa = function() {
  return this.a.Fa();
};
g.H = function(a) {
  this.a.H(a);
};
function Ud(a, b, c) {
  this.G = a || null;
  this.b = Vd;
  this.c = [];
  this.f = [];
  this.a = new ec;
  this.j = new kc(0, !0);
  this.hb = b || null;
  this.K = null != c ? c : null;
}
function Wd(a, b) {
  this.a = a;
  this.map = b;
}
g = Ud.prototype;
g.la = null;
g.ja = null;
g.o = null;
g.i = null;
g.Qa = null;
g.xa = null;
g.gb = null;
g.za = null;
g.pa = 0;
g.Eb = 0;
g.va = !1;
g.u = null;
g.D = null;
g.J = null;
g.U = null;
g.M = null;
g.Xa = null;
g.oa = -1;
g.pb = -1;
g.P = -1;
g.V = 0;
g.$ = 0;
g.Oa = 2E4;
g.Ga = !1;
g.T = 8;
var Vd = 1, Xd = new Q;
function Yd(a) {
  P.call(this, "statevent", a);
}
u(Yd, P);
function Zd(a) {
  P.call(this, "timingevent", a);
}
u(Zd, P);
var yd = 1, Ad = 2, zd = 3, Id = 4;
function $d(a) {
  P.call(this, "serverreachability", a);
}
u($d, P);
var jc = "y2f%";
g = Ud.prototype;
g.disconnect = function() {
  N(this.a, "disconnect()");
  ae(this);
  if (3 == this.b) {
    var a = this.pa++, b = this.xa.clone();
    I(b, "SID", this.g);
    I(b, "RID", a);
    I(b, "TYPE", "terminate");
    be(this, b);
    a = new V(this, this.a, this.g, a, void 0);
    a.fa = 2;
    a.L = Ab(b.clone());
    b = new Image;
    b.src = a.L;
    b.onload = b.onerror = r(a.Db, a);
    a.ra = t();
    xd(a);
  }
  ce(this);
};
g.ib = function() {
  return this.g;
};
function ae(a) {
  if (a.M) {
    var b = a.M;
    b.A && (Jd(b.A), b.A = null);
    b.Y = -1;
    a.M = null;
  }
  a.i && (Jd(a.i), a.i = null);
  a.J && (k.clearTimeout(a.J), a.J = null);
  de(a);
  a.o && (Jd(a.o), a.o = null);
  a.D && (k.clearTimeout(a.D), a.D = null);
}
g.ob = function() {
  return 0 == this.b;
};
function ee(a) {
  a.o || a.D || (a.D = X(r(a.sb, a), 0), a.V = 0);
}
g.sb = function(a) {
  this.D = null;
  N(this.a, "startForwardChannel_");
  if (this.b == Vd) {
    if (a) {
      L(this.a.a, "Not supposed to retry the open");
    } else {
      N(this.a, "open_()");
      this.pa = Math.floor(1E5 * Math.random());
      a = this.pa++;
      var b = new V(this, this.a, "", a, void 0);
      b.Z = this.la;
      var c = fe(this), d = this.xa.clone();
      I(d, "RID", a);
      this.G && I(d, "CVER", this.G);
      be(this, d);
      ud(b, d, c);
      this.o = b;
      this.b = 2;
    }
  } else {
    3 == this.b && (a ? ge(this, a) : 0 == this.c.length ? N(this.a, "startForwardChannel_ returned: nothing to send") : this.o ? L(this.a.a, "startForwardChannel_ returned: connection already in progress") : (ge(this), N(this.a, "startForwardChannel_ finished, sent request")));
  }
};
function ge(a, b) {
  var c, d;
  b ? 6 < a.T ? (a.c = a.f.concat(a.c), a.f.length = 0, c = a.pa - 1, d = fe(a)) : (c = b.c, d = b.ca) : (c = a.pa++, d = fe(a));
  var e = a.xa.clone();
  I(e, "SID", a.g);
  I(e, "RID", c);
  I(e, "AID", a.oa);
  be(a, e);
  c = new V(a, a.a, a.g, c, a.V + 1);
  c.Z = a.la;
  c.setTimeout(Math.round(.5 * a.Oa) + Math.round(.5 * a.Oa * Math.random()));
  a.o = c;
  ud(c, e, d);
}
function be(a, b) {
  a.u && kb({}, function(a, d) {
    I(b, d, a);
  });
}
function fe(a) {
  var b = Math.min(a.c.length, 1E3), c = ["count=" + b], d;
  6 < a.T && 0 < b ? (d = a.c[0].a, c.push("ofs=" + d)) : d = 0;
  for (var e = 0;e < b;e++) {
    var f = a.c[e].a, h = a.c[e].map, f = 6 >= a.T ? e : f - d;
    try {
      kb(h, function(a, b) {
        c.push("req" + f + "_" + b + "=" + encodeURIComponent(a));
      });
    } catch (l) {
      c.push("req" + f + "_type=" + encodeURIComponent("_badmap"));
    }
  }
  a.f = a.f.concat(a.c.splice(0, b));
  return c.join("&");
}
function he(a) {
  a.i || a.J || (a.s = 1, a.J = X(r(a.rb, a), 0), a.$ = 0);
}
function ie(a) {
  if (a.i || a.J) {
    return L(a.a.a, "Request already in progress"), !1;
  }
  if (3 <= a.$) {
    return !1;
  }
  N(a.a, "Going to retry GET");
  a.s++;
  a.J = X(r(a.rb, a), je(a, a.$));
  a.$++;
  return !0;
}
g.rb = function() {
  this.J = null;
  N(this.a, "Creating new HttpRequest");
  this.i = new V(this, this.a, this.g, "rpc", this.s);
  this.i.Z = this.la;
  this.i.Ta = 0;
  var a = this.gb.clone();
  I(a, "RID", "rpc");
  I(a, "SID", this.g);
  I(a, "CI", this.Xa ? "0" : "1");
  I(a, "AID", this.oa);
  be(this, a);
  if (!w || w && 10 <= C) {
    I(a, "TYPE", "xmlhttp"), wd(this.i, a, !0, this.za, !1);
  } else {
    I(a, "TYPE", "html");
    var b = this.i, c = Boolean(this.za);
    b.fa = 3;
    b.L = Ab(a.clone());
    Hd(b, c);
  }
  N(this.a, "New Request created");
};
function Rd(a, b, c) {
  N(a.a, "Test Connection Finished");
  a.Xa = c;
  a.P = b.Y;
  N(a.a, "connectChannel_()");
  a.Cb(Vd, 0);
  a.xa = ke(a, a.Qa);
  ee(a);
}
function Td(a, b) {
  N(a.a, "Test Connection Failed");
  a.P = b.Y;
  Y(a, 2);
}
g.qb = function(a, b) {
  if (0 != this.b && (this.i == a || this.o == a)) {
    if (this.P = a.na, this.o == a && 3 == this.b) {
      if (7 < this.T) {
        var c;
        try {
          c = this.j.parse(b);
        } catch (d) {
          c = null;
        }
        if (n(c) && 3 == c.length) {
          var e = c;
          if (0 == e[0]) {
            a: {
              if (N(this.a, "Server claims our backchannel is missing."), this.J) {
                N(this.a, "But we are currently starting the request.");
              } else {
                if (this.i) {
                  if (this.i.ra + 3E3 < this.o.ra) {
                    de(this), Jd(this.i), this.i = null;
                  } else {
                    break a;
                  }
                } else {
                  (c = this.a.a) && ac(c, "We do not have a BackChannel established");
                }
                ie(this);
                W();
              }
            }
          } else {
            this.pb = e[1], c = this.pb - this.oa, 0 < c && (e = e[2], N(this.a, e + " bytes (in " + c + " arrays) are outstanding on the BackChannel"), 37500 > e && this.Xa && 0 == this.$ && !this.U && (this.U = X(r(this.Fb, this), 6E3)));
          }
        } else {
          N(this.a, "Bad POST response data returned"), Y(this, 11);
        }
      } else {
        b != jc && (N(this.a, "Bad data returned - missing/invald magic cookie"), Y(this, 11));
      }
    } else {
      if (this.i == a && de(this), !/^[\s\xa0]*$/.test(b)) {
        for (c = this.j.parse(b), e = 0;e < c.length;e++) {
          var f = c[e];
          this.oa = f[0];
          f = f[1];
          2 == this.b ? "c" == f[0] ? (this.g = f[1], this.za = f[2], f = f[3], null != f ? this.T = f : this.T = 6, this.b = 3, this.u && this.u.mb(this), this.gb = Sd(this, this.za, this.Qa), he(this)) : "stop" == f[0] && Y(this, 7) : 3 == this.b && ("stop" == f[0] ? Y(this, 7) : "noop" != f[0] && this.u && this.u.lb(this, f), this.$ = 0);
        }
      }
    }
  }
};
g.Fb = function() {
  null != this.U && (this.U = null, Jd(this.i), this.i = null, ie(this), W());
};
function de(a) {
  null != a.U && (k.clearTimeout(a.U), a.U = null);
}
g.ba = function(a) {
  N(this.a, "Request complete");
  var b;
  if (this.i == a) {
    de(this), this.i = null, b = 2;
  } else {
    if (this.o == a) {
      this.o = null, b = 1;
    } else {
      return;
    }
  }
  this.P = a.na;
  if (0 != this.b) {
    if (a.C) {
      1 == b ? (t(), R(Xd, new Zd(Xd)), ee(this), this.f.length = 0) : he(this);
    } else {
      var c = a.R;
      if (3 == c || 7 == c || 0 == c && 0 < this.P) {
        N(this.a, "Not retrying due to error type");
      } else {
        N(this.a, "Maybe retrying, last error: " + rd(c, this.P));
        var d;
        if (d = 1 == b) {
          this.o || this.D ? (L(this.a.a, "Request already in progress"), d = !1) : this.b == Vd || this.V >= (this.va ? 0 : 2) ? d = !1 : (N(this.a, "Going to retry POST"), this.D = X(r(this.sb, this, a), je(this, this.V)), this.V++, d = !0);
        }
        if (d || 2 == b && ie(this)) {
          return;
        }
        N(this.a, "Exceeded max number of retries");
      }
      N(this.a, "Error: HTTP request failed");
      switch(c) {
        case 1:
          Y(this, 5);
          break;
        case 4:
          Y(this, 10);
          break;
        case 3:
          Y(this, 6);
          break;
        case 7:
          Y(this, 12);
          break;
        default:
          Y(this, 2);
      }
    }
  }
};
function je(a, b) {
  var c = 5E3 + Math.floor(1E4 * Math.random());
  a.u || (N(a.a, "Inactive channel"), c *= 2);
  return c * b;
}
g.Cb = function(a) {
  if (!(0 <= bb(arguments, this.b))) {
    throw Error("Unexpected channel state: " + this.b);
  }
};
function Y(a, b) {
  N(a.a, "Error code " + b);
  if (2 == b || 9 == b) {
    var c = null;
    a.u && (c = a.u.nb(a));
    var d = r(a.Nb, a);
    c || (c = new H("//www.google.com/images/cleardot.gif"), Ab(c));
    Md(c.toString(), 1E4, d);
  } else {
    W();
  }
  le(a, b);
}
g.Nb = function(a) {
  a ? (N(this.a, "Successfully pinged google.com"), W()) : (N(this.a, "Failed to ping google.com"), W(), le(this, 8));
};
function le(a, b) {
  N(a.a, "HttpChannel: error - " + b);
  a.b = 0;
  a.u && a.u.kb(a, b);
  ce(a);
  ae(a);
}
function ce(a) {
  a.b = 0;
  a.P = -1;
  if (a.u) {
    if (0 == a.f.length && 0 == a.c.length) {
      a.u.Pa(a);
    } else {
      N(a.a, "Number of undelivered maps, pending: " + a.f.length + ", outgoing: " + a.c.length);
      var b = gb(a.f), c = gb(a.c);
      a.f.length = 0;
      a.c.length = 0;
      a.u.Pa(a, b, c);
    }
  }
}
function ke(a, b) {
  var c = Pd(a, null, b);
  N(a.a, "GetForwardChannelUri: " + c);
  return c;
}
function Sd(a, b, c) {
  b = Pd(a, a.Fa() ? b : null, c);
  N(a.a, "GetBackChannelUri: " + b);
  return b;
}
function Pd(a, b, c) {
  var d = Bb(c);
  if ("" != d.aa) {
    b && mb(d, b + "." + d.aa), nb(d, d.qa);
  } else {
    var e = window.location, d = Cb(e.protocol, b ? b + "." + e.hostname : e.hostname, e.port, c)
  }
  a.ja && kb(a.ja, function(a, b) {
    I(d, b, a);
  });
  I(d, "VER", a.T);
  be(a, d);
  return d;
}
g.Na = function(a) {
  if (a && !this.Ga) {
    throw Error("Can't create secondary domain capable XhrIo object.");
  }
  a = new S;
  a.fb = this.Ga;
  return a;
};
function X(a, b) {
  if (!ga(a)) {
    throw Error("Fn must not be null and must be a function");
  }
  return k.setTimeout(function() {
    a();
  }, b);
}
g.H = function() {
  R(Xd, new $d(Xd));
};
function W() {
  R(Xd, new Yd(Xd));
}
g.Fa = function() {
  return this.Ga || !(!w || w && 10 <= C);
};
function me() {
}
g = me.prototype;
g.mb = function() {
};
g.lb = function() {
};
g.kb = function() {
};
g.Pa = function() {
};
g.nb = function() {
  return null;
};
var Z, ne;
ne = {0:"Ok", 4:"User is logging out", 6:"Unknown session ID", 7:"Stopped by server", 8:"General network error", 2:"Request failed", 9:"Blocked by a network administrator", 5:"No data from server", 10:"Got bad data from the server", 11:"Got a bad response from the server"};
Z = function(a, b) {
  var c, d, e, f, h, l, p, B, z, x, ba, A, ha, Ga;
  if (!(this instanceof Z)) {
    return new Z(a, b);
  }
  x = this;
  a || (a = "channel");
  a.match(/:\/\//) && a.replace(/^ws/, "http");
  b || (b = {});
  n(b || "string" === typeof b) && (b = {});
  B = b.reconnectTime || 3E3;
  c = b.extraHeaders || null;
  d = b.extraParams || null;
  null !== b.affinity && (d || (d = {}), b.affinityParam || (b.affinityParam = "a"), this.affinity = b.affinity || ua(), d[b.affinityParam] = this.affinity);
  ha = function(a) {
    x.readyState = x.readyState = a;
  };
  ha(this.CLOSED);
  A = null;
  l = null != (Ga = b.prev) ? Ga.Mb : void 0;
  e = function(a, b, c, d, e) {
    try {
      return "function" === typeof x[a] ? x[a](c, d, e) : void 0;
    } catch (f) {
      throw "undefined" !== typeof console && null !== console && console.error(f.stack), f;
    }
  };
  f = new me;
  f.mb = function() {
    l = A;
    ha(Z.OPEN);
    return e("onopen");
  };
  h = null;
  f.kb = function(a, b) {
    var c;
    c = ne[b];
    h = b;
    x.readyState !== Z.CLOSED && ha(Z.Ma);
    return e("onerror", 0, c, b);
  };
  f.nb = function() {
    return b.testImageUri;
  };
  z = null;
  f.Pa = function(a, c, d) {
    var f;
    if (x.readyState !== Z.CLOSED) {
      return A = null, a = h ? ne[h] : "Closed", ha(Z.CLOSED), b.reconnect && 7 !== h && 0 !== h && (f = 6 === h ? 0 : B, clearTimeout(z), z = setTimeout(p, f)), e("onclose", 0, a, c, d), h = null;
    }
  };
  f.lb = function(a, b) {
    return e("onmessage", 0, {type:"message", data:b});
  };
  p = function() {
    if (A) {
      throw Error("Reconnect() called from invalid state");
    }
    ha(Z.CONNECTING);
    e("onconnecting");
    clearTimeout(z);
    x.Mb = A = new Ud(b.appVersion, null != l ? l.hb : void 0);
    b.crossDomainXhr && (A.Ga = !0);
    A.u = f;
    c && (A.la = c);
    h = null;
    if (b.failFast) {
      var v = A;
      v.va = !0;
      N(v.a, "setFailFast: true");
      (v.o || v.D) && v.V > (v.va ? 0 : 2) && (N(v.a, "Retry count " + v.V + " > new maxRetries " + (v.va ? 0 : 2) + ". Fail immediately!"), v.o ? (Jd(v.o), v.ba(v.o)) : (k.clearTimeout(v.D), v.D = null, Y(v, 2)));
    }
    b.forwardChannelRequestTimeout && (A.Oa = b.forwardChannelRequestTimeout);
    var m = A, v = "" + a + "/test", p = "" + a + "/bind", B = d, ba = null != l ? l.ib() : void 0, Ga = null != l ? l.oa : void 0;
    N(m.a, "connect()");
    W();
    m.Qa = p;
    m.ja = B || {};
    ba && void 0 !== Ga && (m.ja.OSID = ba, m.ja.OAID = Ga);
    N(m.a, "connectTest_()");
    m.M = new Nd(m, m.a);
    m.M.Ra = m.la;
    m.M.c = m.j;
    m = m.M;
    m.Sa = v;
    v = ke(m.a, m.Sa);
    W();
    m.wb = t();
    p = m.a.hb;
    null != p ? (m.ma = p[0], m.ia = p[1], m.ia ? (m.v = 1, Od(m)) : (m.v = 2, Qd(m))) : (yb(v, "MODE", "init"), m.A = new V(m, m.b, void 0, void 0, void 0), m.A.Z = m.Ra, wd(m.A, v, !1, null, !0), m.v = 0);
  };
  this.open = function() {
    if (x.readyState !== x.CLOSED) {
      throw Error("Already open");
    }
    return p();
  };
  this.close = function() {
    clearTimeout(z);
    h = 0;
    if (x.readyState !== Z.CLOSED) {
      return ha(Z.Ma), A.disconnect();
    }
  };
  this.sendMap = ba = function(a) {
    var b;
    if ((b = x.readyState) !== Z.Ma && b !== Z.CLOSED) {
      b = A;
      if (0 == b.b) {
        throw Error("Invalid operation: sending map when state is closed");
      }
      if (1E3 == b.c.length) {
        var c = "Already have 1000 queued maps upon queueing " + Hb(a);
        L(b.a.a, c);
      }
      b.c.push(new Wd(b.Eb++, a));
      2 != b.b && 3 != b.b || ee(b);
    }
  };
  this.send = function(a) {
    return "string" === typeof a ? ba({_S:a}) : ba({JSON:Hb(a)});
  };
  p();
};
Z.prototype.canSendWhileConnecting = Z.canSendWhileConnecting = !0;
Z.prototype.canSendJSON = Z.canSendJSON = !0;
Z.prototype.CONNECTING = Z.CONNECTING = Z.CONNECTING = 0;
Z.prototype.OPEN = Z.OPEN = Z.OPEN = 1;
Z.prototype.CLOSING = Z.CLOSING = Z.Ma = 2;
Z.prototype.CLOSED = Z.CLOSED = Z.CLOSED = 3;
("undefined" !== typeof exports && null !== exports ? exports : window).BCSocket = Z;

})();
