(function(){
var f, aa = aa || {}, l = this;
function ba(a) {
  a = a.split(".");
  for (var b = l, c;c = a.shift();) {
    if (null != b[c]) {
      b = b[c];
    } else {
      return null;
    }
  }
  return b;
}
function ca() {
}
function da(a) {
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
function m(a) {
  return "array" == da(a);
}
function ea(a) {
  var b = da(a);
  return "array" == b || "object" == b && "number" == typeof a.length;
}
function n(a) {
  return "string" == typeof a;
}
function fa(a) {
  return "function" == da(a);
}
var ga = "closure_uid_" + (1E9 * Math.random() >>> 0), ha = 0;
function ia(a, b, c) {
  return a.call.apply(a.bind, arguments);
}
function ja(a, b, c) {
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
function p(a, b, c) {
  p = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? ia : ja;
  return p.apply(null, arguments);
}
var q = Date.now || function() {
  return+new Date;
};
function r(a, b) {
  function c() {
  }
  c.prototype = b.prototype;
  a.oa = b.prototype;
  a.prototype = new c;
  a.jc = function(a, c, g) {
    var h = Array.prototype.slice.call(arguments, 2);
    b.prototype[c].apply(a, h);
  };
}
;function ka(a, b) {
  for (var c = a.split("%s"), d = "", e = Array.prototype.slice.call(arguments, 1);e.length && 1 < c.length;) {
    d += c.shift() + e.shift();
  }
  return d + c.join("%s");
}
function la(a) {
  if (!ma.test(a)) {
    return a;
  }
  -1 != a.indexOf("&") && (a = a.replace(na, "&amp;"));
  -1 != a.indexOf("<") && (a = a.replace(oa, "&lt;"));
  -1 != a.indexOf(">") && (a = a.replace(pa, "&gt;"));
  -1 != a.indexOf('"') && (a = a.replace(qa, "&quot;"));
  -1 != a.indexOf("'") && (a = a.replace(ra, "&#39;"));
  return a;
}
var na = /&/g, oa = /</g, pa = />/g, qa = /"/g, ra = /'/g, ma = /[&<>"']/;
function sa(a, b) {
  return a < b ? -1 : a > b ? 1 : 0;
}
;var w, ta, ua, va;
function wa() {
  return l.navigator ? l.navigator.userAgent : null;
}
va = ua = ta = w = !1;
var xa;
if (xa = wa()) {
  var ya = l.navigator;
  w = 0 == xa.lastIndexOf("Opera", 0);
  ta = !w && (-1 != xa.indexOf("MSIE") || -1 != xa.indexOf("Trident"));
  ua = !w && -1 != xa.indexOf("WebKit");
  va = !w && !ua && !ta && "Gecko" == ya.product;
}
var za = w, x = ta, Aa = va, y = ua;
function Ba() {
  var a = l.document;
  return a ? a.documentMode : void 0;
}
var Ca;
a: {
  var Da = "", Ea;
  if (za && l.opera) {
    var Fa = l.opera.version, Da = "function" == typeof Fa ? Fa() : Fa
  } else {
    if (Aa ? Ea = /rv\:([^\);]+)(\)|;)/ : x ? Ea = /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/ : y && (Ea = /WebKit\/(\S+)/), Ea) {
      var Ga = Ea.exec(wa()), Da = Ga ? Ga[1] : ""
    }
  }
  if (x) {
    var Ha = Ba();
    if (Ha > parseFloat(Da)) {
      Ca = String(Ha);
      break a;
    }
  }
  Ca = Da;
}
var Ia = {};
function z(a) {
  var b;
  if (!(b = Ia[a])) {
    b = 0;
    for (var c = String(Ca).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), d = String(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), e = Math.max(c.length, d.length), g = 0;0 == b && g < e;g++) {
      var h = c[g] || "", k = d[g] || "", u = RegExp("(\\d*)(\\D*)", "g"), s = RegExp("(\\d*)(\\D*)", "g");
      do {
        var v = u.exec(h) || ["", "", ""], t = s.exec(k) || ["", "", ""];
        if (0 == v[0].length && 0 == t[0].length) {
          break;
        }
        b = sa(0 == v[1].length ? 0 : parseInt(v[1], 10), 0 == t[1].length ? 0 : parseInt(t[1], 10)) || sa(0 == v[2].length, 0 == t[2].length) || sa(v[2], t[2]);
      } while (0 == b);
    }
    b = Ia[a] = 0 <= b;
  }
  return b;
}
var Ja = l.document, Ka = Ja && x ? Ba() || ("CSS1Compat" == Ja.compatMode ? parseInt(Ca, 10) : 5) : void 0;
function La(a) {
  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, La);
  } else {
    var b = Error().stack;
    b && (this.stack = b);
  }
  a && (this.message = String(a));
}
r(La, Error);
La.prototype.name = "CustomError";
function Ma(a, b) {
  b.unshift(a);
  La.call(this, ka.apply(null, b));
  b.shift();
}
r(Ma, La);
Ma.prototype.name = "AssertionError";
function Na(a, b) {
  throw new Ma("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1));
}
;var Oa = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$");
function Pa(a) {
  if (Qa) {
    Qa = !1;
    var b = l.location;
    if (b) {
      var c = b.href;
      if (c && (c = (c = Pa(c)[3] || null) && decodeURIComponent(c)) && c != b.hostname) {
        throw Qa = !0, Error();
      }
    }
  }
  return a.match(Oa);
}
var Qa = y;
function Ra(a) {
  var b = [], c = 0, d;
  for (d in a) {
    b[c++] = a[d];
  }
  return b;
}
function Sa(a) {
  var b = [], c = 0, d;
  for (d in a) {
    b[c++] = d;
  }
  return b;
}
var Ta = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
function Ua(a, b) {
  for (var c, d, e = 1;e < arguments.length;e++) {
    d = arguments[e];
    for (c in d) {
      a[c] = d[c];
    }
    for (var g = 0;g < Ta.length;g++) {
      c = Ta[g], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c]);
    }
  }
}
;var A = Array.prototype, Va = A.indexOf ? function(a, b, c) {
  return A.indexOf.call(a, b, c);
} : function(a, b, c) {
  c = null == c ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
  if (n(a)) {
    return n(b) && 1 == b.length ? a.indexOf(b, c) : -1;
  }
  for (;c < a.length;c++) {
    if (c in a && a[c] === b) {
      return c;
    }
  }
  return-1;
}, Wa = A.forEach ? function(a, b, c) {
  A.forEach.call(a, b, c);
} : function(a, b, c) {
  for (var d = a.length, e = n(a) ? a.split("") : a, g = 0;g < d;g++) {
    g in e && b.call(c, e[g], g, a);
  }
};
function Xa(a) {
  var b;
  a: {
    b = Ya;
    for (var c = a.length, d = n(a) ? a.split("") : a, e = 0;e < c;e++) {
      if (e in d && b.call(void 0, d[e], e, a)) {
        b = e;
        break a;
      }
    }
    b = -1;
  }
  return 0 > b ? null : n(a) ? a.charAt(b) : a[b];
}
function Za(a) {
  return A.concat.apply(A, arguments);
}
function $a(a) {
  var b = a.length;
  if (0 < b) {
    for (var c = Array(b), d = 0;d < b;d++) {
      c[d] = a[d];
    }
    return c;
  }
  return[];
}
;function ab(a, b) {
  this.O = {};
  this.j = [];
  this.o = 0;
  var c = arguments.length;
  if (1 < c) {
    if (c % 2) {
      throw Error("Uneven number of arguments");
    }
    for (var d = 0;d < c;d += 2) {
      this.set(arguments[d], arguments[d + 1]);
    }
  } else {
    if (a) {
      a instanceof ab ? (c = a.ba(), d = a.N()) : (c = Sa(a), d = Ra(a));
      for (var e = 0;e < c.length;e++) {
        this.set(c[e], d[e]);
      }
    }
  }
}
f = ab.prototype;
f.N = function() {
  bb(this);
  for (var a = [], b = 0;b < this.j.length;b++) {
    a.push(this.O[this.j[b]]);
  }
  return a;
};
f.ba = function() {
  bb(this);
  return this.j.concat();
};
f.va = function(a) {
  return B(this.O, a);
};
f.remove = function(a) {
  return B(this.O, a) ? (delete this.O[a], this.o--, this.j.length > 2 * this.o && bb(this), !0) : !1;
};
function bb(a) {
  if (a.o != a.j.length) {
    for (var b = 0, c = 0;b < a.j.length;) {
      var d = a.j[b];
      B(a.O, d) && (a.j[c++] = d);
      b++;
    }
    a.j.length = c;
  }
  if (a.o != a.j.length) {
    for (var e = {}, c = b = 0;b < a.j.length;) {
      d = a.j[b], B(e, d) || (a.j[c++] = d, e[d] = 1), b++;
    }
    a.j.length = c;
  }
}
f.get = function(a, b) {
  return B(this.O, a) ? this.O[a] : b;
};
f.set = function(a, b) {
  B(this.O, a) || (this.o++, this.j.push(a));
  this.O[a] = b;
};
f.n = function() {
  return new ab(this);
};
function B(a, b) {
  return Object.prototype.hasOwnProperty.call(a, b);
}
;function cb(a) {
  if ("function" == typeof a.N) {
    return a.N();
  }
  if (n(a)) {
    return a.split("");
  }
  if (ea(a)) {
    for (var b = [], c = a.length, d = 0;d < c;d++) {
      b.push(a[d]);
    }
    return b;
  }
  return Ra(a);
}
function C(a, b, c) {
  if ("function" == typeof a.forEach) {
    a.forEach(b, c);
  } else {
    if (ea(a) || n(a)) {
      Wa(a, b, c);
    } else {
      var d;
      if ("function" == typeof a.ba) {
        d = a.ba();
      } else {
        if ("function" != typeof a.N) {
          if (ea(a) || n(a)) {
            d = [];
            for (var e = a.length, g = 0;g < e;g++) {
              d.push(g);
            }
          } else {
            d = Sa(a);
          }
        } else {
          d = void 0;
        }
      }
      for (var e = cb(a), g = e.length, h = 0;h < g;h++) {
        b.call(c, e[h], d && d[h], a);
      }
    }
  }
}
;function D(a, b) {
  var c;
  if (a instanceof D) {
    this.D = void 0 !== b ? b : a.D, db(this, a.na), c = a.fb, E(this), this.fb = c, eb(this, a.ia), fb(this, a.Ca), gb(this, a.I), hb(this, a.R.n()), c = a.Oa, E(this), this.Oa = c;
  } else {
    if (a && (c = Pa(String(a)))) {
      this.D = !!b;
      db(this, c[1] || "", !0);
      var d = c[2] || "";
      E(this);
      this.fb = d ? decodeURIComponent(d) : "";
      eb(this, c[3] || "", !0);
      fb(this, c[4]);
      gb(this, c[5] || "", !0);
      hb(this, c[6] || "", !0);
      c = c[7] || "";
      E(this);
      this.Oa = c ? decodeURIComponent(c) : "";
    } else {
      this.D = !!b, this.R = new ib(null, 0, this.D);
    }
  }
}
f = D.prototype;
f.na = "";
f.fb = "";
f.ia = "";
f.Ca = null;
f.I = "";
f.Oa = "";
f.pc = !1;
f.D = !1;
f.toString = function() {
  var a = [], b = this.na;
  b && a.push(jb(b, kb), ":");
  if (b = this.ia) {
    a.push("//");
    var c = this.fb;
    c && a.push(jb(c, kb), "@");
    a.push(encodeURIComponent(String(b)));
    b = this.Ca;
    null != b && a.push(":", String(b));
  }
  if (b = this.I) {
    this.ia && "/" != b.charAt(0) && a.push("/"), a.push(jb(b, "/" == b.charAt(0) ? lb : mb));
  }
  (b = this.R.toString()) && a.push("?", b);
  (b = this.Oa) && a.push("#", jb(b, nb));
  return a.join("");
};
f.n = function() {
  return new D(this);
};
function db(a, b, c) {
  E(a);
  a.na = c ? b ? decodeURIComponent(b) : "" : b;
  a.na && (a.na = a.na.replace(/:$/, ""));
}
function eb(a, b, c) {
  E(a);
  a.ia = c ? b ? decodeURIComponent(b) : "" : b;
}
function fb(a, b) {
  E(a);
  if (b) {
    b = Number(b);
    if (isNaN(b) || 0 > b) {
      throw Error("Bad port number " + b);
    }
    a.Ca = b;
  } else {
    a.Ca = null;
  }
}
function gb(a, b, c) {
  E(a);
  a.I = c ? b ? decodeURIComponent(b) : "" : b;
}
function hb(a, b, c) {
  E(a);
  b instanceof ib ? (a.R = b, a.R.ub(a.D)) : (c || (b = jb(b, ob)), a.R = new ib(b, 0, a.D));
}
function F(a, b, c) {
  E(a);
  a.R.set(b, c);
}
function pb(a, b, c) {
  E(a);
  m(c) || (c = [String(c)]);
  qb(a.R, b, c);
}
function G(a) {
  E(a);
  F(a, "zx", Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ q()).toString(36));
  return a;
}
function E(a) {
  if (a.pc) {
    throw Error("Tried to modify a read-only Uri");
  }
}
f.ub = function(a) {
  this.D = a;
  this.R && this.R.ub(a);
  return this;
};
function rb(a) {
  return a instanceof D ? a.n() : new D(a, void 0);
}
function sb(a, b, c, d) {
  var e = new D(null, void 0);
  a && db(e, a);
  b && eb(e, b);
  c && fb(e, c);
  d && gb(e, d);
  return e;
}
function jb(a, b) {
  return n(a) ? encodeURI(a).replace(b, tb) : null;
}
function tb(a) {
  a = a.charCodeAt(0);
  return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16);
}
var kb = /[#\/\?@]/g, mb = /[\#\?:]/g, lb = /[\#\?]/g, ob = /[\#\?@]/g, nb = /#/g;
function ib(a, b, c) {
  this.C = a || null;
  this.D = !!c;
}
function H(a) {
  if (!a.h && (a.h = new ab, a.o = 0, a.C)) {
    for (var b = a.C.split("&"), c = 0;c < b.length;c++) {
      var d = b[c].indexOf("="), e = null, g = null;
      0 <= d ? (e = b[c].substring(0, d), g = b[c].substring(d + 1)) : e = b[c];
      e = decodeURIComponent(e.replace(/\+/g, " "));
      e = I(a, e);
      a.add(e, g ? decodeURIComponent(g.replace(/\+/g, " ")) : "");
    }
  }
}
f = ib.prototype;
f.h = null;
f.o = null;
f.add = function(a, b) {
  H(this);
  this.C = null;
  a = I(this, a);
  var c = this.h.get(a);
  c || this.h.set(a, c = []);
  c.push(b);
  this.o++;
  return this;
};
f.remove = function(a) {
  H(this);
  a = I(this, a);
  return this.h.va(a) ? (this.C = null, this.o -= this.h.get(a).length, this.h.remove(a)) : !1;
};
f.va = function(a) {
  H(this);
  a = I(this, a);
  return this.h.va(a);
};
f.ba = function() {
  H(this);
  for (var a = this.h.N(), b = this.h.ba(), c = [], d = 0;d < b.length;d++) {
    for (var e = a[d], g = 0;g < e.length;g++) {
      c.push(b[d]);
    }
  }
  return c;
};
f.N = function(a) {
  H(this);
  var b = [];
  if (n(a)) {
    this.va(a) && (b = Za(b, this.h.get(I(this, a))));
  } else {
    a = this.h.N();
    for (var c = 0;c < a.length;c++) {
      b = Za(b, a[c]);
    }
  }
  return b;
};
f.set = function(a, b) {
  H(this);
  this.C = null;
  a = I(this, a);
  this.va(a) && (this.o -= this.h.get(a).length);
  this.h.set(a, [b]);
  this.o++;
  return this;
};
f.get = function(a, b) {
  var c = a ? this.N(a) : [];
  return 0 < c.length ? String(c[0]) : b;
};
function qb(a, b, c) {
  a.remove(b);
  0 < c.length && (a.C = null, a.h.set(I(a, b), $a(c)), a.o += c.length);
}
f.toString = function() {
  if (this.C) {
    return this.C;
  }
  if (!this.h) {
    return "";
  }
  for (var a = [], b = this.h.ba(), c = 0;c < b.length;c++) {
    for (var d = b[c], e = encodeURIComponent(String(d)), d = this.N(d), g = 0;g < d.length;g++) {
      var h = e;
      "" !== d[g] && (h += "=" + encodeURIComponent(String(d[g])));
      a.push(h);
    }
  }
  return this.C = a.join("&");
};
f.n = function() {
  var a = new ib;
  a.C = this.C;
  this.h && (a.h = this.h.n(), a.o = this.o);
  return a;
};
function I(a, b) {
  var c = String(b);
  a.D && (c = c.toLowerCase());
  return c;
}
f.ub = function(a) {
  a && !this.D && (H(this), this.C = null, C(this.h, function(a, c) {
    var d = c.toLowerCase();
    c != d && (this.remove(c), qb(this, d, a));
  }, this));
  this.D = a;
};
function ub(a) {
  a = String(a);
  if (/^\s*$/.test(a) ? 0 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""))) {
    try {
      return eval("(" + a + ")");
    } catch (b) {
    }
  }
  throw Error("Invalid JSON string: " + a);
}
function vb(a) {
  return eval("(" + a + ")");
}
function wb(a) {
  var b = [];
  xb(new yb, a, b);
  return b.join("");
}
function yb() {
  this.Za = void 0;
}
function xb(a, b, c) {
  switch(typeof b) {
    case "string":
      zb(b, c);
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
      if (m(b)) {
        var d = b.length;
        c.push("[");
        for (var e = "", g = 0;g < d;g++) {
          c.push(e), e = b[g], xb(a, a.Za ? a.Za.call(b, String(g), e) : e, c), e = ",";
        }
        c.push("]");
        break;
      }
      c.push("{");
      d = "";
      for (g in b) {
        Object.prototype.hasOwnProperty.call(b, g) && (e = b[g], "function" != typeof e && (c.push(d), zb(g, c), c.push(":"), xb(a, a.Za ? a.Za.call(b, g, e) : e, c), d = ","));
      }
      c.push("}");
      break;
    case "function":
      break;
    default:
      throw Error("Unknown type: " + typeof b);;
  }
}
var Ab = {'"':'\\"', "\\":"\\\\", "/":"\\/", "\b":"\\b", "\f":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t", "\x0B":"\\u000b"}, Bb = /\uffff/.test("\uffff") ? /[\\\"\x00-\x1f\x7f-\uffff]/g : /[\\\"\x00-\x1f\x7f-\xff]/g;
function zb(a, b) {
  b.push('"', a.replace(Bb, function(a) {
    if (a in Ab) {
      return Ab[a];
    }
    var b = a.charCodeAt(0), e = "\\u";
    16 > b ? e += "000" : 256 > b ? e += "00" : 4096 > b && (e += "0");
    return Ab[a] = e + b.toString(16);
  }), '"');
}
;function Cb(a) {
  return Db(a || arguments.callee.caller, []);
}
function Db(a, b) {
  var c = [];
  if (0 <= Va(b, a)) {
    c.push("[...circular reference...]");
  } else {
    if (a && 50 > b.length) {
      c.push(Eb(a) + "(");
      for (var d = a.arguments, e = 0;d && e < d.length;e++) {
        0 < e && c.push(", ");
        var g;
        g = d[e];
        switch(typeof g) {
          case "object":
            g = g ? "object" : "null";
            break;
          case "string":
            break;
          case "number":
            g = String(g);
            break;
          case "boolean":
            g = g ? "true" : "false";
            break;
          case "function":
            g = (g = Eb(g)) ? g : "[fn]";
            break;
          default:
            g = typeof g;
        }
        40 < g.length && (g = g.substr(0, 40) + "...");
        c.push(g);
      }
      b.push(a);
      c.push(")\n");
      try {
        c.push(Db(a.caller, b));
      } catch (h) {
        c.push("[exception trying to get caller]\n");
      }
    } else {
      a ? c.push("[...long stack...]") : c.push("[end]");
    }
  }
  return c.join("");
}
function Eb(a) {
  if (Fb[a]) {
    return Fb[a];
  }
  a = String(a);
  if (!Fb[a]) {
    var b = /function ([^\(]+)/.exec(a);
    Fb[a] = b ? b[1] : "[Anonymous]";
  }
  return Fb[a];
}
var Fb = {};
function Gb(a, b, c, d, e) {
  this.reset(a, b, c, d, e);
}
Gb.prototype.Gb = null;
Gb.prototype.Fb = null;
var Hb = 0;
Gb.prototype.reset = function(a, b, c, d, e) {
  "number" == typeof e || Hb++;
  d || q();
  this.za = a;
  this.rc = b;
  delete this.Gb;
  delete this.Fb;
};
Gb.prototype.ac = function(a) {
  this.za = a;
};
function Ib(a) {
  this.sc = a;
  this.Kb = this.kb = this.za = this.Ta = null;
}
function J(a, b) {
  this.name = a;
  this.value = b;
}
J.prototype.toString = function() {
  return this.name;
};
var Jb = new J("SEVERE", 1E3), Kb = new J("WARNING", 900), Lb = new J("INFO", 800), Mb = new J("CONFIG", 700), Nb = new J("FINE", 500);
f = Ib.prototype;
f.getParent = function() {
  return this.Ta;
};
f.ac = function(a) {
  this.za = a;
};
function Ob(a) {
  if (a.za) {
    return a.za;
  }
  if (a.Ta) {
    return Ob(a.Ta);
  }
  Na("Root logger has no level set.");
  return null;
}
f.log = function(a, b, c) {
  if (a.value >= Ob(this).value) {
    for (fa(b) && (b = b()), a = this.oc(a, b, c), b = "log:" + a.rc, l.console && (l.console.timeStamp ? l.console.timeStamp(b) : l.console.markTimeline && l.console.markTimeline(b)), l.msWriteProfilerMark && l.msWriteProfilerMark(b), b = this;b;) {
      c = b;
      var d = a;
      if (c.Kb) {
        for (var e = 0, g = void 0;g = c.Kb[e];e++) {
          g(d);
        }
      }
      b = b.getParent();
    }
  }
};
f.oc = function(a, b, c) {
  var d = new Gb(a, String(b), this.sc);
  if (c) {
    d.Gb = c;
    var e;
    var g = arguments.callee.caller;
    try {
      var h;
      var k = ba("window.location.href");
      if (n(c)) {
        h = {message:c, name:"Unknown error", lineNumber:"Not available", fileName:k, stack:"Not available"};
      } else {
        var u, s, v = !1;
        try {
          u = c.lineNumber || c.Hc || "Not available";
        } catch (t) {
          u = "Not available", v = !0;
        }
        try {
          s = c.fileName || c.filename || c.sourceURL || l.$googDebugFname || k;
        } catch (K) {
          s = "Not available", v = !0;
        }
        h = !v && c.lineNumber && c.fileName && c.stack && c.message && c.name ? c : {message:c.message || "Not available", name:c.name || "UnknownError", lineNumber:u, fileName:s, stack:c.stack || "Not available"};
      }
      e = "Message: " + la(h.message) + '\nUrl: <a href="view-source:' + h.fileName + '" target="_new">' + h.fileName + "</a>\nLine: " + h.lineNumber + "\n\nBrowser stack:\n" + la(h.stack + "-> ") + "[end]\n\nJS stack traversal:\n" + la(Cb(g) + "-> ");
    } catch (Kd) {
      e = "Exception trying to expose exception! You win, we lose. " + Kd;
    }
    d.Fb = e;
  }
  return d;
};
f.J = function(a, b) {
  this.log(Jb, a, b);
};
f.fa = function(a, b) {
  this.log(Kb, a, b);
};
f.info = function(a, b) {
  this.log(Lb, a, b);
};
var Pb = {}, Qb = null;
function Rb(a) {
  Qb || (Qb = new Ib(""), Pb[""] = Qb, Qb.ac(Mb));
  var b;
  if (!(b = Pb[a])) {
    b = new Ib(a);
    var c = a.lastIndexOf("."), d = a.substr(c + 1), c = Rb(a.substr(0, c));
    c.kb || (c.kb = {});
    c.kb[d] = b;
    b.Ta = c;
    Pb[a] = b;
  }
  return b;
}
;function L(a, b) {
  a && a.log(Nb, b, void 0);
}
;function M() {
  this.r = Rb("goog.net.BrowserChannel");
}
function Sb(a, b, c, d) {
  a.info("XMLHTTP TEXT (" + b + "): " + Tb(a, c) + (d ? " " + d : ""));
}
M.prototype.debug = function(a) {
  this.info(a);
};
function N(a, b, c) {
  a.J((c || "Exception") + b);
}
M.prototype.info = function(a) {
  var b = this.r;
  b && b.info(a, void 0);
};
M.prototype.fa = function(a) {
  var b = this.r;
  b && b.fa(a, void 0);
};
M.prototype.J = function(a) {
  var b = this.r;
  b && b.J(a, void 0);
};
function Tb(a, b) {
  if (!b || b == Ub) {
    return b;
  }
  try {
    var c = vb(b);
    if (c) {
      for (var d = 0;d < c.length;d++) {
        if (m(c[d])) {
          var e = c[d];
          if (!(2 > e.length)) {
            var g = e[1];
            if (m(g) && !(1 > g.length)) {
              var h = g[0];
              if ("noop" != h && "stop" != h) {
                for (var k = 1;k < g.length;k++) {
                  g[k] = "";
                }
              }
            }
          }
        }
      }
    }
    return wb(c);
  } catch (u) {
    return a.debug("Exception parsing expected JS array - probably was not JS"), b;
  }
}
;function Vb(a, b) {
  this.P = b ? vb : ub;
}
Vb.prototype.parse = function(a) {
  return this.P(a);
};
function O() {
  0 != Wb && (Xb[this[ga] || (this[ga] = ++ha)] = this);
}
var Wb = 0, Xb = {};
O.prototype.mb = !1;
O.prototype.Ka = function() {
  if (!this.mb && (this.mb = !0, this.u(), 0 != Wb)) {
    var a = this[ga] || (this[ga] = ++ha);
    delete Xb[a];
  }
};
O.prototype.u = function() {
  if (this.Qb) {
    for (;this.Qb.length;) {
      this.Qb.shift()();
    }
  }
};
var Yb = "closure_listenable_" + (1E6 * Math.random() | 0);
function Zb(a) {
  try {
    return!(!a || !a[Yb]);
  } catch (b) {
    return!1;
  }
}
var $b = 0;
function ac(a, b, c, d, e) {
  this.ea = a;
  this.Va = null;
  this.src = b;
  this.type = c;
  this.capture = !!d;
  this.Pa = e;
  this.key = ++$b;
  this.ma = this.Ia = !1;
}
function bc(a) {
  a.ma = !0;
  a.ea = null;
  a.Va = null;
  a.src = null;
  a.Pa = null;
}
;function P(a) {
  this.src = a;
  this.s = {};
  this.Ga = 0;
}
P.prototype.add = function(a, b, c, d, e) {
  var g = this.s[a];
  g || (g = this.s[a] = [], this.Ga++);
  var h = cc(g, b, d, e);
  -1 < h ? (a = g[h], c || (a.Ia = !1)) : (a = new ac(b, this.src, a, !!d, e), a.Ia = c, g.push(a));
  return a;
};
P.prototype.remove = function(a, b, c, d) {
  if (!(a in this.s)) {
    return!1;
  }
  var e = this.s[a];
  b = cc(e, b, c, d);
  return-1 < b ? (bc(e[b]), A.splice.call(e, b, 1), 0 == e.length && (delete this.s[a], this.Ga--), !0) : !1;
};
function dc(a, b) {
  var c = b.type;
  if (!(c in a.s)) {
    return!1;
  }
  var d = a.s[c], e = Va(d, b), g;
  (g = 0 <= e) && A.splice.call(d, e, 1);
  g && (bc(b), 0 == a.s[c].length && (delete a.s[c], a.Ga--));
  return g;
}
P.prototype.Ya = function(a) {
  var b = 0, c;
  for (c in this.s) {
    if (!a || c == a) {
      for (var d = this.s[c], e = 0;e < d.length;e++) {
        ++b, bc(d[e]);
      }
      delete this.s[c];
      this.Ga--;
    }
  }
  return b;
};
P.prototype.xa = function(a, b, c, d) {
  a = this.s[a];
  var e = -1;
  a && (e = cc(a, b, c, d));
  return-1 < e ? a[e] : null;
};
function cc(a, b, c, d) {
  for (var e = 0;e < a.length;++e) {
    var g = a[e];
    if (!g.ma && g.ea == b && g.capture == !!c && g.Pa == d) {
      return e;
    }
  }
  return-1;
}
;var ec = !x || x && 9 <= Ka, fc = x && !z("9");
!y || z("528");
Aa && z("1.9b") || x && z("8") || za && z("9.5") || y && z("528");
Aa && !z("8") || x && z("9");
function Q(a, b) {
  this.type = a;
  this.currentTarget = this.target = b;
  this.defaultPrevented = this.ka = !1;
  this.Zb = !0;
}
Q.prototype.u = function() {
};
Q.prototype.Ka = function() {
};
Q.prototype.preventDefault = function() {
  this.defaultPrevented = !0;
  this.Zb = !1;
};
function gc(a) {
  gc[" "](a);
  return a;
}
gc[" "] = ca;
function R(a, b) {
  R.jc(this, "constructor", a ? a.type : "");
  this.relatedTarget = this.currentTarget = this.target = null;
  this.charCode = this.keyCode = this.button = this.screenY = this.screenX = this.clientY = this.clientX = this.offsetY = this.offsetX = 0;
  this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
  this.Eb = this.state = null;
  if (a) {
    var c = this.type = a.type;
    this.target = a.target || a.srcElement;
    this.currentTarget = b;
    var d = a.relatedTarget;
    if (d) {
      if (Aa) {
        var e;
        a: {
          try {
            gc(d.nodeName);
            e = !0;
            break a;
          } catch (g) {
          }
          e = !1;
        }
        e || (d = null);
      }
    } else {
      "mouseover" == c ? d = a.fromElement : "mouseout" == c && (d = a.toElement);
    }
    this.relatedTarget = d;
    this.offsetX = y || void 0 !== a.offsetX ? a.offsetX : a.layerX;
    this.offsetY = y || void 0 !== a.offsetY ? a.offsetY : a.layerY;
    this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX;
    this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY;
    this.screenX = a.screenX || 0;
    this.screenY = a.screenY || 0;
    this.button = a.button;
    this.keyCode = a.keyCode || 0;
    this.charCode = a.charCode || ("keypress" == c ? a.keyCode : 0);
    this.ctrlKey = a.ctrlKey;
    this.altKey = a.altKey;
    this.shiftKey = a.shiftKey;
    this.metaKey = a.metaKey;
    this.state = a.state;
    this.Eb = a;
    a.defaultPrevented && this.preventDefault();
  }
}
r(R, Q);
R.prototype.preventDefault = function() {
  R.oa.preventDefault.call(this);
  var a = this.Eb;
  if (a.preventDefault) {
    a.preventDefault();
  } else {
    if (a.returnValue = !1, fc) {
      try {
        if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) {
          a.keyCode = -1;
        }
      } catch (b) {
      }
    }
  }
};
R.prototype.u = function() {
};
var hc = "closure_lm_" + (1E6 * Math.random() | 0), ic = {}, jc = 0;
function kc(a, b, c, d, e) {
  if (m(b)) {
    for (var g = 0;g < b.length;g++) {
      kc(a, b[g], c, d, e);
    }
    return null;
  }
  c = lc(c);
  if (Zb(a)) {
    a = a.Sa(b, c, d, e);
  } else {
    if (!b) {
      throw Error("Invalid event type");
    }
    var g = !!d, h = mc(a);
    h || (a[hc] = h = new P(a));
    c = h.add(b, c, !1, d, e);
    c.Va || (d = nc(), c.Va = d, d.src = a, d.ea = c, a.addEventListener ? a.addEventListener(b, d, g) : a.attachEvent(b in ic ? ic[b] : ic[b] = "on" + b, d), jc++);
    a = c;
  }
  return a;
}
function nc() {
  var a = oc, b = ec ? function(c) {
    return a.call(b.src, b.ea, c);
  } : function(c) {
    c = a.call(b.src, b.ea, c);
    if (!c) {
      return c;
    }
  };
  return b;
}
function pc(a, b, c, d, e) {
  if (m(b)) {
    for (var g = 0;g < b.length;g++) {
      pc(a, b[g], c, d, e);
    }
  } else {
    c = lc(c), Zb(a) ? a.vb(b, c, d, e) : a && (a = mc(a)) && (b = a.xa(b, c, !!d, e)) && qc(b);
  }
}
function qc(a) {
  if ("number" == typeof a || !a || a.ma) {
    return!1;
  }
  var b = a.src;
  if (Zb(b)) {
    return dc(b.V, a);
  }
  var c = a.type, d = a.Va;
  b.removeEventListener ? b.removeEventListener(c, d, a.capture) : b.detachEvent && b.detachEvent(c in ic ? ic[c] : ic[c] = "on" + c, d);
  jc--;
  (c = mc(b)) ? (dc(c, a), 0 == c.Ga && (c.src = null, b[hc] = null)) : bc(a);
  return!0;
}
function rc(a, b, c, d) {
  var e = 1;
  if (a = mc(a)) {
    if (b = a.s[b]) {
      for (b = $a(b), a = 0;a < b.length;a++) {
        var g = b[a];
        g && g.capture == c && !g.ma && (e &= !1 !== sc(g, d));
      }
    }
  }
  return Boolean(e);
}
function sc(a, b) {
  var c = a.ea, d = a.Pa || a.src;
  a.Ia && qc(a);
  return c.call(d, b);
}
function oc(a, b) {
  if (a.ma) {
    return!0;
  }
  if (!ec) {
    var c = b || ba("window.event"), d = new R(c, this), e = !0;
    if (!(0 > c.keyCode || void 0 != c.returnValue)) {
      a: {
        var g = !1;
        if (0 == c.keyCode) {
          try {
            c.keyCode = -1;
            break a;
          } catch (h) {
            g = !0;
          }
        }
        if (g || void 0 == c.returnValue) {
          c.returnValue = !0;
        }
      }
      c = [];
      for (g = d.currentTarget;g;g = g.parentNode) {
        c.push(g);
      }
      for (var g = a.type, k = c.length - 1;!d.ka && 0 <= k;k--) {
        d.currentTarget = c[k], e &= rc(c[k], g, !0, d);
      }
      for (k = 0;!d.ka && k < c.length;k++) {
        d.currentTarget = c[k], e &= rc(c[k], g, !1, d);
      }
    }
    return e;
  }
  return sc(a, new R(b, this));
}
function mc(a) {
  a = a[hc];
  return a instanceof P ? a : null;
}
var tc = "__closure_events_fn_" + (1E9 * Math.random() >>> 0);
function lc(a) {
  return fa(a) ? a : a[tc] || (a[tc] = function(b) {
    return a.handleEvent(b);
  });
}
;function S() {
  O.call(this);
  this.V = new P(this);
  this.gc = this;
}
r(S, O);
S.prototype[Yb] = !0;
f = S.prototype;
f.tb = null;
f.addEventListener = function(a, b, c, d) {
  kc(this, a, b, c, d);
};
f.removeEventListener = function(a, b, c, d) {
  pc(this, a, b, c, d);
};
f.dispatchEvent = function(a) {
  var b, c = this.tb;
  if (c) {
    for (b = [];c;c = c.tb) {
      b.push(c);
    }
  }
  var c = this.gc, d = a.type || a;
  if (n(a)) {
    a = new Q(a, c);
  } else {
    if (a instanceof Q) {
      a.target = a.target || c;
    } else {
      var e = a;
      a = new Q(d, c);
      Ua(a, e);
    }
  }
  var e = !0, g;
  if (b) {
    for (var h = b.length - 1;!a.ka && 0 <= h;h--) {
      g = a.currentTarget = b[h], e = uc(g, d, !0, a) && e;
    }
  }
  a.ka || (g = a.currentTarget = c, e = uc(g, d, !0, a) && e, a.ka || (e = uc(g, d, !1, a) && e));
  if (b) {
    for (h = 0;!a.ka && h < b.length;h++) {
      g = a.currentTarget = b[h], e = uc(g, d, !1, a) && e;
    }
  }
  return e;
};
f.u = function() {
  S.oa.u.call(this);
  this.V && this.V.Ya(void 0);
  this.tb = null;
};
f.Sa = function(a, b, c, d) {
  return this.V.add(String(a), b, !1, c, d);
};
f.vb = function(a, b, c, d) {
  return this.V.remove(String(a), b, c, d);
};
function uc(a, b, c, d) {
  b = a.V.s[String(b)];
  if (!b) {
    return!0;
  }
  b = $a(b);
  for (var e = !0, g = 0;g < b.length;++g) {
    var h = b[g];
    if (h && !h.ma && h.capture == c) {
      var k = h.ea, u = h.Pa || h.src;
      h.Ia && dc(a.V, h);
      e = !1 !== k.call(u, d) && e;
    }
  }
  return e && !1 != d.Zb;
}
f.xa = function(a, b, c, d) {
  return this.V.xa(String(a), b, c, d);
};
function vc(a, b) {
  S.call(this);
  this.da = a || 1;
  this.qa = b || wc;
  this.jb = p(this.Gc, this);
  this.sb = q();
}
r(vc, S);
vc.prototype.enabled = !1;
var wc = l;
f = vc.prototype;
f.l = null;
f.setInterval = function(a) {
  this.da = a;
  this.l && this.enabled ? (this.stop(), this.start()) : this.l && this.stop();
};
f.Gc = function() {
  if (this.enabled) {
    var a = q() - this.sb;
    0 < a && a < 0.8 * this.da ? this.l = this.qa.setTimeout(this.jb, this.da - a) : (this.l && (this.qa.clearTimeout(this.l), this.l = null), this.dispatchEvent(xc), this.enabled && (this.l = this.qa.setTimeout(this.jb, this.da), this.sb = q()));
  }
};
f.start = function() {
  this.enabled = !0;
  this.l || (this.l = this.qa.setTimeout(this.jb, this.da), this.sb = q());
};
f.stop = function() {
  this.enabled = !1;
  this.l && (this.qa.clearTimeout(this.l), this.l = null);
};
f.u = function() {
  vc.oa.u.call(this);
  this.stop();
  delete this.qa;
};
var xc = "tick";
function yc(a, b, c) {
  if (fa(a)) {
    c && (a = p(a, c));
  } else {
    if (a && "function" == typeof a.handleEvent) {
      a = p(a.handleEvent, a);
    } else {
      throw Error("Invalid listener argument");
    }
  }
  return 2147483647 < b ? -1 : wc.setTimeout(a, b || 0);
}
;function zc() {
}
zc.prototype.Ab = null;
function Ac(a) {
  var b;
  (b = a.Ab) || (b = {}, Bc(a) && (b[0] = !0, b[1] = !0), b = a.Ab = b);
  return b;
}
;var Cc;
function Dc() {
}
r(Dc, zc);
function Ec(a) {
  return(a = Bc(a)) ? new ActiveXObject(a) : new XMLHttpRequest;
}
function Bc(a) {
  if (!a.Lb && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
    for (var b = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], c = 0;c < b.length;c++) {
      var d = b[c];
      try {
        return new ActiveXObject(d), a.Lb = d;
      } catch (e) {
      }
    }
    throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");
  }
  return a.Lb;
}
Cc = new Dc;
function Fc(a) {
  S.call(this);
  this.headers = new ab;
  this.hb = a || null;
  this.S = !1;
  this.gb = this.f = null;
  this.Nb = this.Ra = "";
  this.ja = 0;
  this.q = "";
  this.ca = this.qb = this.Qa = this.nb = !1;
  this.Fa = 0;
  this.cb = null;
  this.Yb = Gc;
  this.eb = this.ec = !1;
}
r(Fc, S);
var Gc = "";
Fc.prototype.r = Rb("goog.net.XhrIo");
var Hc = /^https?$/i, Ic = ["POST", "PUT"];
f = Fc.prototype;
f.send = function(a, b, c, d) {
  if (this.f) {
    throw Error("[goog.net.XhrIo] Object is active with another request=" + this.Ra + "; newUri=" + a);
  }
  b = b ? b.toUpperCase() : "GET";
  this.Ra = a;
  this.q = "";
  this.ja = 0;
  this.Nb = b;
  this.nb = !1;
  this.S = !0;
  this.f = this.Cb();
  this.gb = this.hb ? Ac(this.hb) : Ac(Cc);
  this.f.onreadystatechange = p(this.Rb, this);
  try {
    L(this.r, T(this, "Opening Xhr")), this.qb = !0, this.f.open(b, String(a), !0), this.qb = !1;
  } catch (e) {
    L(this.r, T(this, "Error opening Xhr: " + e.message));
    Jc(this, e);
    return;
  }
  a = c || "";
  var g = this.headers.n();
  d && C(d, function(a, b) {
    g.set(b, a);
  });
  d = Xa(g.ba());
  c = l.FormData && a instanceof l.FormData;
  !(0 <= Va(Ic, b)) || d || c || g.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
  C(g, function(a, b) {
    this.f.setRequestHeader(b, a);
  }, this);
  this.Yb && (this.f.responseType = this.Yb);
  "withCredentials" in this.f && (this.f.withCredentials = this.ec);
  try {
    Kc(this), 0 < this.Fa && (this.eb = Lc(this.f), L(this.r, T(this, "Will abort after " + this.Fa + "ms if incomplete, xhr2 " + this.eb)), this.eb ? (this.f.timeout = this.Fa, this.f.ontimeout = p(this.pa, this)) : this.cb = yc(this.pa, this.Fa, this)), L(this.r, T(this, "Sending request")), this.Qa = !0, this.f.send(a), this.Qa = !1;
  } catch (h) {
    L(this.r, T(this, "Send error: " + h.message)), Jc(this, h);
  }
};
function Lc(a) {
  return x && z(9) && "number" == typeof a.timeout && void 0 !== a.ontimeout;
}
function Ya(a) {
  return "content-type" == a.toLowerCase();
}
f.Cb = function() {
  return this.hb ? Ec(this.hb) : Ec(Cc);
};
f.pa = function() {
  "undefined" != typeof aa && this.f && (this.q = "Timed out after " + this.Fa + "ms, aborting", this.ja = 8, L(this.r, T(this, this.q)), this.dispatchEvent("timeout"), this.abort(8));
};
function Jc(a, b) {
  a.S = !1;
  a.f && (a.ca = !0, a.f.abort(), a.ca = !1);
  a.q = b;
  a.ja = 5;
  Mc(a);
  Nc(a);
}
function Mc(a) {
  a.nb || (a.nb = !0, a.dispatchEvent("complete"), a.dispatchEvent("error"));
}
f.abort = function(a) {
  this.f && this.S && (L(this.r, T(this, "Aborting")), this.S = !1, this.ca = !0, this.f.abort(), this.ca = !1, this.ja = a || 7, this.dispatchEvent("complete"), this.dispatchEvent("abort"), Nc(this));
};
f.u = function() {
  this.f && (this.S && (this.S = !1, this.ca = !0, this.f.abort(), this.ca = !1), Nc(this, !0));
  Fc.oa.u.call(this);
};
f.Rb = function() {
  this.mb || (this.qb || this.Qa || this.ca ? Oc(this) : this.vc());
};
f.vc = function() {
  Oc(this);
};
function Oc(a) {
  if (a.S && "undefined" != typeof aa) {
    if (a.gb[1] && 4 == U(a) && 2 == Pc(a)) {
      L(a.r, T(a, "Local request error detected and ignored"));
    } else {
      if (a.Qa && 4 == U(a)) {
        yc(a.Rb, 0, a);
      } else {
        if (a.dispatchEvent("readystatechange"), 4 == U(a)) {
          L(a.r, T(a, "Request complete"));
          a.S = !1;
          try {
            var b = Pc(a), c, d;
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
                  d = !0;
                  break a;
                default:
                  d = !1;
              }
            }
            if (!(c = d)) {
              var e;
              if (e = 0 === b) {
                var g = Pa(String(a.Ra))[1] || null;
                if (!g && self.location) {
                  var h = self.location.protocol, g = h.substr(0, h.length - 1)
                }
                e = !Hc.test(g ? g.toLowerCase() : "");
              }
              c = e;
            }
            if (c) {
              a.dispatchEvent("complete"), a.dispatchEvent("success");
            } else {
              a.ja = 6;
              var k;
              try {
                k = 2 < U(a) ? a.f.statusText : "";
              } catch (u) {
                L(a.r, "Can not get status: " + u.message), k = "";
              }
              a.q = k + " [" + Pc(a) + "]";
              Mc(a);
            }
          } finally {
            Nc(a);
          }
        }
      }
    }
  }
}
function Nc(a, b) {
  if (a.f) {
    Kc(a);
    var c = a.f, d = a.gb[0] ? ca : null;
    a.f = null;
    a.gb = null;
    b || a.dispatchEvent("ready");
    try {
      c.onreadystatechange = d;
    } catch (e) {
      (c = a.r) && c.J("Problem encountered resetting onreadystatechange: " + e.message, void 0);
    }
  }
}
function Kc(a) {
  a.f && a.eb && (a.f.ontimeout = null);
  "number" == typeof a.cb && (wc.clearTimeout(a.cb), a.cb = null);
}
f.isActive = function() {
  return!!this.f;
};
function U(a) {
  return a.f ? a.f.readyState : 0;
}
function Pc(a) {
  try {
    return 2 < U(a) ? a.f.status : -1;
  } catch (b) {
    return-1;
  }
}
function Qc(a) {
  try {
    return a.f ? a.f.responseText : "";
  } catch (b) {
    return L(a.r, "Can not get responseText: " + b.message), "";
  }
}
f.Jb = function() {
  return n(this.q) ? this.q : String(this.q);
};
function T(a, b) {
  return b + " [" + a.Nb + " " + a.Ra + " " + Pc(a) + "]";
}
;function Rc() {
  this.Xb = q();
}
new Rc;
Rc.prototype.set = function(a) {
  this.Xb = a;
};
Rc.prototype.reset = function() {
  this.set(q());
};
Rc.prototype.get = function() {
  return this.Xb;
};
function Sc(a) {
  O.call(this);
  this.e = a;
  this.j = {};
}
r(Sc, O);
var Tc = [];
f = Sc.prototype;
f.Sa = function(a, b, c, d) {
  m(b) || (Tc[0] = b, b = Tc);
  for (var e = 0;e < b.length;e++) {
    var g = kc(a, b[e], c || this.handleEvent, d || !1, this.e || this);
    if (!g) {
      break;
    }
    this.j[g.key] = g;
  }
  return this;
};
f.vb = function(a, b, c, d, e) {
  if (m(b)) {
    for (var g = 0;g < b.length;g++) {
      this.vb(a, b[g], c, d, e);
    }
  } else {
    c = c || this.handleEvent, e = e || this.e || this, c = lc(c), d = !!d, b = Zb(a) ? a.xa(b, c, d, e) : a ? (a = mc(a)) ? a.xa(b, c, d, e) : null : null, b && (qc(b), delete this.j[b.key]);
  }
  return this;
};
f.Ya = function() {
  var a = this.j, b = qc, c;
  for (c in a) {
    b.call(void 0, a[c], c, a);
  }
  this.j = {};
};
f.u = function() {
  Sc.oa.u.call(this);
  this.Ya();
};
f.handleEvent = function() {
  throw Error("EventHandler.handleEvent not implemented");
};
function Uc(a, b, c) {
  O.call(this);
  this.qc = a;
  this.da = b;
  this.e = c;
  this.lc = p(this.wc, this);
}
r(Uc, O);
f = Uc.prototype;
f.$a = !1;
f.Wb = 0;
f.l = null;
f.stop = function() {
  this.l && (wc.clearTimeout(this.l), this.l = null, this.$a = !1);
};
f.u = function() {
  Uc.oa.u.call(this);
  this.stop();
};
f.wc = function() {
  this.l = null;
  this.$a && !this.Wb && (this.$a = !1, Vc(this));
};
function Vc(a) {
  a.l = yc(a.lc, a.da);
  a.qc.call(a.e);
}
;function V(a, b, c, d, e) {
  this.b = a;
  this.a = b;
  this.Y = c;
  this.B = d;
  this.Ea = e || 1;
  this.pa = Wc;
  this.ob = new Sc(this);
  this.Ua = new vc;
  this.Ua.setInterval(Xc);
}
f = V.prototype;
f.v = null;
f.F = !1;
f.ta = null;
f.xb = null;
f.Da = null;
f.ra = null;
f.T = null;
f.w = null;
f.W = null;
f.k = null;
f.Ha = 0;
f.K = null;
f.sa = null;
f.q = null;
f.g = -1;
f.$b = !0;
f.Z = !1;
f.la = 0;
f.Wa = null;
var Wc = 45E3, Xc = 250;
function Yc(a, b) {
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
var Zc = {}, $c = {};
function ad() {
  return!x || x && 10 <= Ka;
}
f = V.prototype;
f.X = function(a) {
  this.v = a;
};
f.setTimeout = function(a) {
  this.pa = a;
};
f.cc = function(a) {
  this.la = a;
};
function bd(a, b, c) {
  a.ra = 1;
  a.T = G(b.n());
  a.W = c;
  a.Db = !0;
  cd(a, null);
}
function dd(a, b, c, d, e) {
  a.ra = 1;
  a.T = G(b.n());
  a.W = null;
  a.Db = c;
  e && (a.$b = !1);
  cd(a, d);
}
function cd(a, b) {
  a.Da = q();
  ed(a);
  a.w = a.T.n();
  pb(a.w, "t", a.Ea);
  a.Ha = 0;
  a.k = a.b.Ja(a.b.ab() ? b : null);
  0 < a.la && (a.Wa = new Uc(p(a.fc, a, a.k), a.la));
  a.ob.Sa(a.k, "readystatechange", a.Cc);
  var c;
  if (a.v) {
    c = a.v;
    var d = {}, e;
    for (e in c) {
      d[e] = c[e];
    }
    c = d;
  } else {
    c = {};
  }
  a.W ? (a.sa = "POST", c["Content-Type"] = "application/x-www-form-urlencoded", a.k.send(a.w, a.sa, a.W, c)) : (a.sa = "GET", a.$b && !y && (c.Connection = "close"), a.k.send(a.w, a.sa, null, c));
  a.b.H(fd);
  if (d = a.W) {
    for (c = "", d = d.split("&"), e = 0;e < d.length;e++) {
      var g = d[e].split("=");
      if (1 < g.length) {
        var h = g[0], g = g[1], k = h.split("_");
        c = 2 <= k.length && "type" == k[1] ? c + (h + "=" + g + "&") : c + (h + "=redacted&");
      }
    }
  } else {
    c = null;
  }
  a.a.info("XMLHTTP REQ (" + a.B + ") [attempt " + a.Ea + "]: " + a.sa + "\n" + a.w + "\n" + c);
}
f.Cc = function(a) {
  a = a.target;
  var b = this.Wa;
  b && 3 == U(a) ? (this.a.debug("Throttling readystatechange."), b.l || b.Wb ? b.$a = !0 : Vc(b)) : this.fc(a);
};
f.fc = function(a) {
  try {
    if (a == this.k) {
      a: {
        var b = U(this.k), c = this.k.ja, d = Pc(this.k);
        if (!ad() || y && !z("420+")) {
          if (4 > b) {
            break a;
          }
        } else {
          if (3 > b || 3 == b && !za && !Qc(this.k)) {
            break a;
          }
        }
        this.Z || 4 != b || 7 == c || (8 == c || 0 >= d ? this.b.H(gd) : this.b.H(hd));
        id(this);
        var e = Pc(this.k);
        this.g = e;
        var g = Qc(this.k);
        g || this.a.debug("No response text for uri " + this.w + " status " + e);
        this.F = 200 == e;
        this.a.info("XMLHTTP RESP (" + this.B + ") [ attempt " + this.Ea + "]: " + this.sa + "\n" + this.w + "\n" + b + " " + e);
        this.F ? (4 == b && W(this), this.Db ? (jd(this, b, g), za && this.F && 3 == b && (this.ob.Sa(this.Ua, xc, this.Bc), this.Ua.start())) : (Sb(this.a, this.B, g, null), kd(this, g)), this.F && !this.Z && (4 == b ? this.b.Ba(this) : (this.F = !1, ed(this)))) : (400 == e && 0 < g.indexOf("Unknown SID") ? (this.q = 3, X(), this.a.fa("XMLHTTP Unknown SID (" + this.B + ")")) : (this.q = 0, X(), this.a.fa("XMLHTTP Bad status " + e + " (" + this.B + ")")), W(this), ld(this));
      }
    } else {
      this.a.fa("Called back with an unexpected xmlhttp");
    }
  } catch (h) {
    this.a.debug("Failed call to OnXmlHttpReadyStateChanged_"), this.k && Qc(this.k) ? N(this.a, h, "ResponseText: " + Qc(this.k)) : N(this.a, h, "No response text");
  } finally {
  }
};
function jd(a, b, c) {
  for (var d = !0;!a.Z && a.Ha < c.length;) {
    var e = md(a, c);
    if (e == $c) {
      4 == b && (a.q = 4, X(), d = !1);
      Sb(a.a, a.B, null, "[Incomplete Response]");
      break;
    } else {
      if (e == Zc) {
        a.q = 4;
        X();
        Sb(a.a, a.B, c, "[Invalid Chunk]");
        d = !1;
        break;
      } else {
        Sb(a.a, a.B, e, null), kd(a, e);
      }
    }
  }
  4 == b && 0 == c.length && (a.q = 1, X(), d = !1);
  a.F = a.F && d;
  d || (Sb(a.a, a.B, c, "[Invalid Chunked Response]"), W(a), ld(a));
}
f.Bc = function() {
  var a = U(this.k), b = Qc(this.k);
  this.Ha < b.length && (id(this), jd(this, a, b), this.F && 4 != a && ed(this));
};
function md(a, b) {
  var c = a.Ha, d = b.indexOf("\n", c);
  if (-1 == d) {
    return $c;
  }
  c = Number(b.substring(c, d));
  if (isNaN(c)) {
    return Zc;
  }
  d += 1;
  if (d + c > b.length) {
    return $c;
  }
  var e = b.substr(d, c);
  a.Ha = d + c;
  return e;
}
function nd(a, b) {
  a.Da = q();
  ed(a);
  var c = b ? window.location.hostname : "";
  a.w = a.T.n();
  F(a.w, "DOMAIN", c);
  F(a.w, "t", a.Ea);
  try {
    a.K = new ActiveXObject("htmlfile");
  } catch (d) {
    a.a.J("ActiveX blocked");
    W(a);
    a.q = 7;
    X();
    ld(a);
    return;
  }
  var e = "<html><body>";
  b && (e += '<script>document.domain="' + c + '"\x3c/script>');
  e += "</body></html>";
  a.K.open();
  a.K.write(e);
  a.K.close();
  a.K.parentWindow.m = p(a.zc, a);
  a.K.parentWindow.d = p(a.Vb, a, !0);
  a.K.parentWindow.rpcClose = p(a.Vb, a, !1);
  c = a.K.createElement("div");
  a.K.parentWindow.document.body.appendChild(c);
  c.innerHTML = '<iframe src="' + a.w + '"></iframe>';
  a.a.info("TRIDENT REQ (" + a.B + ") [ attempt " + a.Ea + "]: GET\n" + a.w);
  a.b.H(fd);
}
f.zc = function(a) {
  Y(p(this.yc, this, a), 0);
};
f.yc = function(a) {
  if (!this.Z) {
    var b = this.a;
    b.info("TRIDENT TEXT (" + this.B + "): " + Tb(b, a));
    id(this);
    kd(this, a);
    ed(this);
  }
};
f.Vb = function(a) {
  Y(p(this.xc, this, a), 0);
};
f.xc = function(a) {
  this.Z || (this.a.info("TRIDENT TEXT (" + this.B + "): " + a ? "success" : "failure"), W(this), this.F = a, this.b.Ba(this), this.b.H(od));
};
f.cancel = function() {
  this.Z = !0;
  W(this);
};
function ed(a) {
  a.xb = q() + a.pa;
  pd(a, a.pa);
}
function pd(a, b) {
  if (null != a.ta) {
    throw Error("WatchDog timer not null");
  }
  a.ta = Y(p(a.Ac, a), b);
}
function id(a) {
  a.ta && (l.clearTimeout(a.ta), a.ta = null);
}
f.Ac = function() {
  this.ta = null;
  var a = q();
  0 <= a - this.xb ? (this.F && this.a.J("Received watchdog timeout even though request loaded successfully"), this.a.info("TIMEOUT: " + this.w), 2 != this.ra && this.b.H(gd), W(this), this.q = 2, X(), ld(this)) : (this.a.fa("WatchDog timer called too early"), pd(this, this.xb - a));
};
function ld(a) {
  a.b.Mb() || a.Z || a.b.Ba(a);
}
function W(a) {
  id(a);
  var b = a.Wa;
  b && "function" == typeof b.Ka && b.Ka();
  a.Wa = null;
  a.Ua.stop();
  a.ob.Ya();
  a.k && (b = a.k, a.k = null, b.abort(), b.Ka());
  a.K && (a.K = null);
}
f.Jb = function() {
  return this.q;
};
function kd(a, b) {
  try {
    a.b.Sb(a, b), a.b.H(od);
  } catch (c) {
    N(a.a, c, "Error in httprequest callback");
  }
}
;function qd(a, b, c, d, e) {
  (new M).debug("TestLoadImageWithRetries: " + e);
  if (0 == d) {
    c(!1);
  } else {
    var g = e || 0;
    d--;
    rd(a, b, function(e) {
      e ? c(!0) : l.setTimeout(function() {
        qd(a, b, c, d, g);
      }, g);
    });
  }
}
function rd(a, b, c) {
  var d = new M;
  d.debug("TestLoadImage: loading " + a);
  var e = new Image;
  e.onload = function() {
    try {
      d.debug("TestLoadImage: loaded"), sd(e), c(!0);
    } catch (a) {
      N(d, a);
    }
  };
  e.onerror = function() {
    try {
      d.debug("TestLoadImage: error"), sd(e), c(!1);
    } catch (a) {
      N(d, a);
    }
  };
  e.onabort = function() {
    try {
      d.debug("TestLoadImage: abort"), sd(e), c(!1);
    } catch (a) {
      N(d, a);
    }
  };
  e.ontimeout = function() {
    try {
      d.debug("TestLoadImage: timeout"), sd(e), c(!1);
    } catch (a) {
      N(d, a);
    }
  };
  l.setTimeout(function() {
    if (e.ontimeout) {
      e.ontimeout();
    }
  }, b);
  e.src = a;
}
function sd(a) {
  a.onload = null;
  a.onerror = null;
  a.onabort = null;
  a.ontimeout = null;
}
;function td(a, b) {
  this.b = a;
  this.a = b;
  this.P = new Vb(0, !0);
}
f = td.prototype;
f.v = null;
f.A = null;
f.Xa = !1;
f.dc = null;
f.Ma = null;
f.rb = null;
f.I = null;
f.c = null;
f.g = -1;
f.L = null;
f.ua = null;
f.X = function(a) {
  this.v = a;
};
f.bc = function(a) {
  this.P = a;
};
f.lb = function(a) {
  this.I = a;
  a = ud(this.b, this.I);
  X();
  this.dc = q();
  var b = this.b.Hb;
  null != b ? (this.L = this.b.correctHostPrefix(b[0]), (this.ua = b[1]) ? (this.c = 1, vd(this)) : (this.c = 2, wd(this))) : (pb(a, "MODE", "init"), this.A = new V(this, this.a, void 0, void 0, void 0), this.A.X(this.v), dd(this.A, a, !1, null, !0), this.c = 0);
};
function vd(a) {
  var b = xd(a.b, a.ua, "/mail/images/cleardot.gif");
  G(b);
  qd(b.toString(), 5E3, p(a.mc, a), 3, 2E3);
  a.H(fd);
}
f.mc = function(a) {
  if (a) {
    this.c = 2, wd(this);
  } else {
    X();
    var b = this.b;
    b.a.debug("Test Connection Blocked");
    b.g = b.U.g;
    Z(b, 9);
  }
  a && this.H(hd);
};
function wd(a) {
  a.a.debug("TestConnection: starting stage 2");
  var b = a.b.Ec;
  if (null != b) {
    a.a.debug("TestConnection: skipping stage 2, precomputed result is " + b ? "Buffered" : "Unbuffered"), X(), b ? (X(), yd(a.b, a, !1)) : (X(), yd(a.b, a, !0));
  } else {
    if (a.A = new V(a, a.a, void 0, void 0, void 0), a.A.X(a.v), b = zd(a.b, a.L, a.I), X(), ad()) {
      pb(b, "TYPE", "xmlhttp"), dd(a.A, b, !1, a.L, !1);
    } else {
      pb(b, "TYPE", "html");
      var c = a.A;
      a = Boolean(a.L);
      c.ra = 3;
      c.T = G(b.n());
      nd(c, a);
    }
  }
}
f.Ja = function(a) {
  return this.b.Ja(a);
};
f.abort = function() {
  this.A && (this.A.cancel(), this.A = null);
  this.g = -1;
};
f.Mb = function() {
  return!1;
};
f.Sb = function(a, b) {
  this.g = a.g;
  if (0 == this.c) {
    if (this.a.debug("TestConnection: Got data for stage 1"), b) {
      try {
        var c = this.P.parse(b);
      } catch (d) {
        N(this.a, d);
        Ad(this.b, this);
        return;
      }
      this.L = this.b.correctHostPrefix(c[0]);
      this.ua = c[1];
    } else {
      this.a.debug("TestConnection: Null responseText"), Ad(this.b, this);
    }
  } else {
    if (2 == this.c) {
      if (this.Xa) {
        X(), this.rb = q();
      } else {
        if ("11111" == b) {
          if (X(), this.Xa = !0, this.Ma = q(), c = this.Ma - this.dc, ad() || 500 > c) {
            this.g = 200, this.A.cancel(), this.a.debug("Test connection succeeded; using streaming connection"), X(), yd(this.b, this, !0);
          }
        } else {
          X(), this.Ma = this.rb = q(), this.Xa = !1;
        }
      }
    }
  }
};
f.Ba = function() {
  this.g = this.A.g;
  if (!this.A.F) {
    this.a.debug("TestConnection: request failed, in state " + this.c), 0 == this.c ? X() : 2 == this.c && X(), Ad(this.b, this);
  } else {
    if (0 == this.c) {
      this.a.debug("TestConnection: request complete for initial check"), this.ua ? (this.c = 1, vd(this)) : (this.c = 2, wd(this));
    } else {
      if (2 == this.c) {
        this.a.debug("TestConnection: request complete for stage 2");
        var a = !1;
        (a = ad() ? this.Xa : 200 > this.rb - this.Ma ? !1 : !0) ? (this.a.debug("Test connection succeeded; using streaming connection"), X(), yd(this.b, this, !0)) : (this.a.debug("Test connection failed; not using streaming"), X(), yd(this.b, this, !1));
      }
    }
  }
};
f.ab = function() {
  return this.b.ab();
};
f.isActive = function() {
  return this.b.isActive();
};
f.H = function(a) {
  this.b.H(a);
};
function Bd(a, b, c) {
  this.Bb = a || null;
  this.c = Cd;
  this.t = [];
  this.Q = [];
  this.a = new M;
  this.P = new Vb(0, !0);
  this.Hb = b || null;
  this.Ec = null != c ? c : null;
}
function Dd(a, b) {
  this.Pb = a;
  this.map = b;
}
f = Bd.prototype;
f.v = null;
f.wa = null;
f.p = null;
f.i = null;
f.I = null;
f.Na = null;
f.zb = null;
f.L = null;
f.ic = !0;
f.Aa = 0;
f.tc = 0;
f.La = !1;
f.e = null;
f.G = null;
f.M = null;
f.$ = null;
f.U = null;
f.wb = null;
f.hc = !0;
f.ya = -1;
f.Ob = -1;
f.g = -1;
f.aa = 0;
f.ga = 0;
f.kc = 5E3;
f.Dc = 1E4;
f.pb = 2;
f.Ib = 2E4;
f.la = 0;
f.bb = !1;
f.ha = 8;
var Cd = 1, Ed = new S;
function Fd(a) {
  Q.call(this, "statevent", a);
}
r(Fd, Q);
function Gd(a, b) {
  Q.call(this, "timingevent", a);
  this.size = b;
}
r(Gd, Q);
var fd = 1, hd = 2, gd = 3, od = 4;
function Hd(a) {
  Q.call(this, "serverreachability", a);
}
r(Hd, Q);
var Ub = "y2f%";
f = Bd.prototype;
f.lb = function(a, b, c, d, e) {
  this.a.debug("connect()");
  X();
  this.I = b;
  this.wa = c || {};
  d && void 0 !== e && (this.wa.OSID = d, this.wa.OAID = e);
  this.a.debug("connectTest_()");
  Id(this) && (this.U = new td(this, this.a), this.U.X(this.v), this.U.bc(this.P), this.U.lb(a));
};
f.disconnect = function() {
  this.a.debug("disconnect()");
  Jd(this);
  if (3 == this.c) {
    var a = this.Aa++, b = this.Na.n();
    F(b, "SID", this.Y);
    F(b, "RID", a);
    F(b, "TYPE", "terminate");
    Ld(this, b);
    a = new V(this, this.a, this.Y, a, void 0);
    a.ra = 2;
    a.T = G(b.n());
    (new Image).src = a.T;
    a.Da = q();
    ed(a);
  }
  Md(this);
};
function Jd(a) {
  a.U && (a.U.abort(), a.U = null);
  a.i && (a.i.cancel(), a.i = null);
  a.M && (l.clearTimeout(a.M), a.M = null);
  Nd(a);
  a.p && (a.p.cancel(), a.p = null);
  a.G && (l.clearTimeout(a.G), a.G = null);
}
f.X = function(a) {
  this.v = a;
};
f.cc = function(a) {
  this.la = a;
};
f.Mb = function() {
  return 0 == this.c;
};
f.bc = function(a) {
  this.P = a;
};
function Od(a) {
  a.p || a.G || (a.G = Y(p(a.Ub, a), 0), a.aa = 0);
}
f.Ub = function(a) {
  this.G = null;
  this.a.debug("startForwardChannel_");
  if (Id(this)) {
    if (this.c == Cd) {
      if (a) {
        this.a.J("Not supposed to retry the open");
      } else {
        this.a.debug("open_()");
        this.Aa = Math.floor(1E5 * Math.random());
        a = this.Aa++;
        var b = new V(this, this.a, "", a, void 0);
        b.X(this.v);
        var c = Pd(this), d = this.Na.n();
        F(d, "RID", a);
        this.Bb && F(d, "CVER", this.Bb);
        Ld(this, d);
        bd(b, d, c);
        this.p = b;
        this.c = 2;
      }
    } else {
      3 == this.c && (a ? Qd(this, a) : 0 == this.t.length ? this.a.debug("startForwardChannel_ returned: nothing to send") : this.p ? this.a.J("startForwardChannel_ returned: connection already in progress") : (Qd(this), this.a.debug("startForwardChannel_ finished, sent request")));
    }
  }
};
function Qd(a, b) {
  var c, d;
  b ? 6 < a.ha ? (a.t = a.Q.concat(a.t), a.Q.length = 0, c = a.Aa - 1, d = Pd(a)) : (c = b.B, d = b.W) : (c = a.Aa++, d = Pd(a));
  var e = a.Na.n();
  F(e, "SID", a.Y);
  F(e, "RID", c);
  F(e, "AID", a.ya);
  Ld(a, e);
  c = new V(a, a.a, a.Y, c, a.aa + 1);
  c.X(a.v);
  c.setTimeout(Math.round(0.5 * a.Ib) + Math.round(0.5 * a.Ib * Math.random()));
  a.p = c;
  bd(c, e, d);
}
function Ld(a, b) {
  if (a.e) {
    var c = a.e.getAdditionalParams(a);
    c && C(c, function(a, c) {
      F(b, c, a);
    });
  }
}
function Pd(a) {
  var b = Math.min(a.t.length, 1E3), c = ["count=" + b], d;
  6 < a.ha && 0 < b ? (d = a.t[0].Pb, c.push("ofs=" + d)) : d = 0;
  for (var e = 0;e < b;e++) {
    var g = a.t[e].Pb, h = a.t[e].map, g = 6 >= a.ha ? e : g - d;
    try {
      C(h, function(a, b) {
        c.push("req" + g + "_" + b + "=" + encodeURIComponent(a));
      });
    } catch (k) {
      c.push("req" + g + "_type=" + encodeURIComponent("_badmap")), a.e && a.e.badMapError(a, h);
    }
  }
  a.Q = a.Q.concat(a.t.splice(0, b));
  return c.join("&");
}
function Rd(a) {
  a.i || a.M || (a.yb = 1, a.M = Y(p(a.Tb, a), 0), a.ga = 0);
}
function Sd(a) {
  if (a.i || a.M) {
    return a.a.J("Request already in progress"), !1;
  }
  if (3 <= a.ga) {
    return!1;
  }
  a.a.debug("Going to retry GET");
  a.yb++;
  a.M = Y(p(a.Tb, a), Td(a, a.ga));
  a.ga++;
  return!0;
}
f.Tb = function() {
  this.M = null;
  if (Id(this)) {
    this.a.debug("Creating new HttpRequest");
    this.i = new V(this, this.a, this.Y, "rpc", this.yb);
    this.i.X(this.v);
    this.i.cc(this.la);
    var a = this.zb.n();
    F(a, "RID", "rpc");
    F(a, "SID", this.Y);
    F(a, "CI", this.wb ? "0" : "1");
    F(a, "AID", this.ya);
    Ld(this, a);
    if (ad()) {
      F(a, "TYPE", "xmlhttp"), dd(this.i, a, !0, this.L, !1);
    } else {
      F(a, "TYPE", "html");
      var b = this.i, c = Boolean(this.L);
      b.ra = 3;
      b.T = G(a.n());
      nd(b, c);
    }
    this.a.debug("New Request created");
  }
};
function Id(a) {
  if (a.e) {
    var b = a.e.okToMakeRequest(a);
    if (0 != b) {
      return a.a.debug("Handler returned error code from okToMakeRequest"), Z(a, b), !1;
    }
  }
  return!0;
}
function yd(a, b, c) {
  a.a.debug("Test Connection Finished");
  a.wb = a.hc && c;
  a.g = b.g;
  a.a.debug("connectChannel_()");
  a.nc(Cd, 0);
  a.Na = ud(a, a.I);
  Od(a);
}
function Ad(a, b) {
  a.a.debug("Test Connection Failed");
  a.g = b.g;
  Z(a, 2);
}
f.Sb = function(a, b) {
  if (0 != this.c && (this.i == a || this.p == a)) {
    if (this.g = a.g, this.p == a && 3 == this.c) {
      if (7 < this.ha) {
        var c;
        try {
          c = this.P.parse(b);
        } catch (d) {
          c = null;
        }
        if (m(c) && 3 == c.length) {
          var e = c;
          if (0 == e[0]) {
            a: {
              if (this.a.debug("Server claims our backchannel is missing."), this.M) {
                this.a.debug("But we are currently starting the request.");
              } else {
                if (this.i) {
                  if (this.i.Da + 3E3 < this.p.Da) {
                    Nd(this), this.i.cancel(), this.i = null;
                  } else {
                    break a;
                  }
                } else {
                  this.a.fa("We do not have a BackChannel established");
                }
                Sd(this);
                X();
              }
            }
          } else {
            this.Ob = e[1], c = this.Ob - this.ya, 0 < c && (e = e[2], this.a.debug(e + " bytes (in " + c + " arrays) are outstanding on the BackChannel"), 37500 > e && this.wb && 0 == this.ga && !this.$ && (this.$ = Y(p(this.uc, this), 6E3)));
          }
        } else {
          this.a.debug("Bad POST response data returned"), Z(this, 11);
        }
      } else {
        b != Ub && (this.a.debug("Bad data returned - missing/invald magic cookie"), Z(this, 11));
      }
    } else {
      if (this.i == a && Nd(this), !/^[\s\xa0]*$/.test(b)) {
        c = this.P.parse(b);
        for (var e = this.e && this.e.channelHandleMultipleArrays ? [] : null, g = 0;g < c.length;g++) {
          var h = c[g];
          this.ya = h[0];
          h = h[1];
          2 == this.c ? "c" == h[0] ? (this.Y = h[1], this.L = this.correctHostPrefix(h[2]), h = h[3], this.ha = null != h ? h : 6, this.c = 3, this.e && this.e.channelOpened(this), this.zb = zd(this, this.L, this.I), Rd(this)) : "stop" == h[0] && Z(this, 7) : 3 == this.c && ("stop" == h[0] ? (e && 0 != e.length && (this.e.channelHandleMultipleArrays(this, e), e.length = 0), Z(this, 7)) : "noop" != h[0] && (e ? e.push(h) : this.e && this.e.channelHandleArray(this, h)), this.ga = 0);
        }
        e && 0 != e.length && this.e.channelHandleMultipleArrays(this, e);
      }
    }
  }
};
f.correctHostPrefix = function(a) {
  return this.ic ? this.e ? this.e.correctHostPrefix(a) : a : null;
};
f.uc = function() {
  null != this.$ && (this.$ = null, this.i.cancel(), this.i = null, Sd(this), X());
};
function Nd(a) {
  null != a.$ && (l.clearTimeout(a.$), a.$ = null);
}
f.Ba = function(a) {
  this.a.debug("Request complete");
  var b;
  if (this.i == a) {
    Nd(this), this.i = null, b = 2;
  } else {
    if (this.p == a) {
      this.p = null, b = 1;
    } else {
      return;
    }
  }
  this.g = a.g;
  if (0 != this.c) {
    if (a.F) {
      1 == b ? (q(), Ed.dispatchEvent(new Gd(Ed, a.W ? a.W.length : 0)), Od(this), this.Q.length = 0) : Rd(this);
    } else {
      var c = a.Jb();
      if (3 == c || 7 == c || 0 == c && 0 < this.g) {
        this.a.debug("Not retrying due to error type");
      } else {
        this.a.debug("Maybe retrying, last error: " + Yc(c, this.g));
        var d;
        if (d = 1 == b) {
          this.p || this.G ? (this.a.J("Request already in progress"), d = !1) : this.c == Cd || this.aa >= (this.La ? 0 : this.pb) ? d = !1 : (this.a.debug("Going to retry POST"), this.G = Y(p(this.Ub, this, a), Td(this, this.aa)), this.aa++, d = !0);
        }
        if (d || 2 == b && Sd(this)) {
          return;
        }
        this.a.debug("Exceeded max number of retries");
      }
      this.a.debug("Error: HTTP request failed");
      switch(c) {
        case 1:
          Z(this, 5);
          break;
        case 4:
          Z(this, 10);
          break;
        case 3:
          Z(this, 6);
          break;
        case 7:
          Z(this, 12);
          break;
        default:
          Z(this, 2);
      }
    }
  }
};
function Td(a, b) {
  var c = a.kc + Math.floor(Math.random() * a.Dc);
  a.isActive() || (a.a.debug("Inactive channel"), c *= 2);
  return c * b;
}
f.nc = function(a) {
  if (!(0 <= Va(arguments, this.c))) {
    throw Error("Unexpected channel state: " + this.c);
  }
};
function Z(a, b) {
  a.a.info("Error code " + b);
  if (2 == b || 9 == b) {
    var c = null;
    a.e && (c = a.e.getNetworkTestImageUri(a));
    var d = p(a.Fc, a);
    c || (c = new D("//www.google.com/images/cleardot.gif"), G(c));
    rd(c.toString(), 1E4, d);
  } else {
    X();
  }
  Ud(a, b);
}
f.Fc = function(a) {
  a ? (this.a.info("Successfully pinged google.com"), X()) : (this.a.info("Failed to ping google.com"), X(), Ud(this, 8));
};
function Ud(a, b) {
  a.a.debug("HttpChannel: error - " + b);
  a.c = 0;
  a.e && a.e.channelError(a, b);
  Md(a);
  Jd(a);
}
function Md(a) {
  a.c = 0;
  a.g = -1;
  if (a.e) {
    if (0 == a.Q.length && 0 == a.t.length) {
      a.e.channelClosed(a);
    } else {
      a.a.debug("Number of undelivered maps, pending: " + a.Q.length + ", outgoing: " + a.t.length);
      var b = $a(a.Q), c = $a(a.t);
      a.Q.length = 0;
      a.t.length = 0;
      a.e.channelClosed(a, b, c);
    }
  }
}
function ud(a, b) {
  var c = xd(a, null, b);
  a.a.debug("GetForwardChannelUri: " + c);
  return c;
}
function zd(a, b, c) {
  b = xd(a, a.ab() ? b : null, c);
  a.a.debug("GetBackChannelUri: " + b);
  return b;
}
function xd(a, b, c) {
  var d = rb(c);
  if ("" != d.ia) {
    b && eb(d, b + "." + d.ia), fb(d, d.Ca);
  } else {
    var e = window.location, d = sb(e.protocol, b ? b + "." + e.hostname : e.hostname, e.port, c)
  }
  a.wa && C(a.wa, function(a, b) {
    F(d, b, a);
  });
  F(d, "VER", a.ha);
  Ld(a, d);
  return d;
}
f.Ja = function(a) {
  if (a && !this.bb) {
    throw Error("Can't create secondary domain capable XhrIo object.");
  }
  a = new Fc;
  a.ec = this.bb;
  return a;
};
f.isActive = function() {
  return!!this.e && this.e.isActive(this);
};
function Y(a, b) {
  if (!fa(a)) {
    throw Error("Fn must not be null and must be a function");
  }
  return l.setTimeout(function() {
    a();
  }, b);
}
f.H = function() {
  Ed.dispatchEvent(new Hd(Ed));
};
function X() {
  Ed.dispatchEvent(new Fd(Ed));
}
f.ab = function() {
  return this.bb || !ad();
};
function Vd() {
}
f = Vd.prototype;
f.channelHandleMultipleArrays = null;
f.okToMakeRequest = function() {
  return 0;
};
f.channelOpened = function() {
};
f.channelHandleArray = function() {
};
f.channelError = function() {
};
f.channelClosed = function() {
};
f.getAdditionalParams = function() {
  return{};
};
f.getNetworkTestImageUri = function() {
  return null;
};
f.isActive = function() {
  return!0;
};
f.badMapError = function() {
};
f.correctHostPrefix = function(a) {
  return a;
};
var $, Wd, Xd = [].slice;
Wd = {0:"Ok", 4:"User is logging out", 6:"Unknown session ID", 7:"Stopped by server", 8:"General network error", 2:"Request failed", 9:"Blocked by a network administrator", 5:"No data from server", 10:"Got bad data from the server", 11:"Got a bad response from the server"};
$ = function(a, b) {
  var c, d, e, g, h, k, u, s, v, t, K;
  s = this;
  a || (a = "channel");
  a.match(/:\/\//) && a.replace(/^ws/, "http");
  b || (b = {});
  m(b || "string" === typeof b) && (b = {});
  k = b.reconnectTime || 3E3;
  K = function(a) {
    s.readyState = s.readyState = a;
  };
  K(this.CLOSED);
  t = null;
  g = b.Ic;
  c = function() {
    var a, b;
    b = arguments[0];
    a = 2 <= arguments.length ? Xd.call(arguments, 1) : [];
    try {
      return "function" === typeof s[b] ? s[b].apply(s, a) : void 0;
    } catch (c) {
      throw a = c, "undefined" !== typeof console && null !== console && console.error(a.stack), a;
    }
  };
  d = new Vd;
  d.channelOpened = function() {
    g = t;
    K($.OPEN);
    return c("onopen");
  };
  e = null;
  d.channelError = function(a, b) {
    var d;
    d = Wd[b];
    e = b;
    s.readyState !== $.CLOSED && K($.ib);
    try {
      return c("onerror", d, b);
    } catch (g) {
    }
  };
  u = null;
  d.channelClosed = function(a, d, g) {
    var v;
    if (s.readyState !== $.CLOSED) {
      t = null;
      a = e ? Wd[e] : "Closed";
      K($.CLOSED);
      b.reconnect && 7 !== e && 0 !== e && (v = 6 === e ? 0 : k, clearTimeout(u), u = setTimeout(h, v));
      try {
        c("onclose", a, d, g);
      } catch ($d) {
      }
      return e = null;
    }
  };
  d.channelHandleArray = function(a, b) {
    return c("onmessage", b);
  };
  h = function() {
    if (t) {
      throw Error("Reconnect() called from invalid state");
    }
    K($.CONNECTING);
    c("onconnecting");
    clearTimeout(u);
    t = new Bd(b.appVersion, null != g ? g.Hb : void 0);
    b.crossDomainXhr && (t.bb = !0);
    t.e = d;
    e = null;
    if (b.failFast) {
      var h = t;
      h.La = !0;
      h.a.info("setFailFast: true");
      (h.p || h.G) && h.aa > (h.La ? 0 : h.pb) && (h.a.info("Retry count " + h.aa + " > new maxRetries " + (h.La ? 0 : h.pb) + ". Fail immediately!"), h.p ? (h.p.cancel(), h.Ba(h.p)) : (l.clearTimeout(h.G), h.G = null, Z(h, 2)));
    }
    return t.lb("" + a + "/test", "" + a + "/bind", b.extraParams, null != g ? g.Y : void 0, null != g ? g.ya : void 0);
  };
  this.open = function() {
    if (s.readyState !== s.CLOSED) {
      throw Error("Already open");
    }
    return h();
  };
  this.close = function() {
    clearTimeout(u);
    e = 0;
    if (s.readyState !== $.CLOSED) {
      return K($.ib), t.disconnect();
    }
  };
  this.sendMap = v = function(a) {
    var b;
    if ((b = s.readyState) === $.ib || b === $.CLOSED) {
      throw Error("Cannot send to a closed connection");
    }
    b = t;
    if (0 == b.c) {
      throw Error("Invalid operation: sending map when state is closed");
    }
    1E3 == b.t.length && b.a.J("Already have 1000 queued maps upon queueing " + wb(a));
    b.t.push(new Dd(b.tc++, a));
    2 != b.c && 3 != b.c || Od(b);
  };
  this.send = function(a) {
    return "string" === typeof a ? v({_S:a}) : v({JSON:wb(a)});
  };
  h();
  return this;
};
$.prototype.CONNECTING = $.CONNECTING = $.CONNECTING = 0;
$.prototype.OPEN = $.OPEN = $.OPEN = 1;
$.prototype.CLOSING = $.CLOSING = $.ib = 2;
$.prototype.CLOSED = $.CLOSED = $.CLOSED = 3;
("undefined" !== typeof exports && null !== exports ? exports : window).BCSocket = $;
var Image, XMLHttpRequest, Yd, Zd, window;
Yd = require("request");
Image = function() {
  this.__defineSetter__("src", function(a) {
    return function(b) {
      b = b.toString();
      b.match(/^\/\//) && (b = "http:" + b);
      return Yd(b, function(b) {
        return null != b ? "function" === typeof a.onerror ? a.onerror() : void 0 : "function" === typeof a.onload ? a.onload() : void 0;
      });
    };
  }(this));
  return this;
};
XMLHttpRequest = require("../XMLHttpRequest").XMLHttpRequest;
Bd.prototype.Ja = function() {
  var a;
  a = new Fc;
  a.Cb = function() {
    return new XMLHttpRequest;
  };
  return a;
};
l = window = {setTimeout:setTimeout, clearTimeout:clearTimeout, setInterval:setInterval, clearInterval:clearInterval, console:console, location:null, navigator:{userAgent:"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_7_2) AppleWebKit/535.1 (KHTML, like Gecko) Chrome/14.0.835.202 Safari/535.1"}};
Zd = require("url");
exports.setDefaultLocation = function(a) {
  "string" === typeof a && (a = Zd.parse(a));
  return window.location = a;
};

})();
