/**
 * Swiper 6.5.8
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * https://swiperjs.com
 *
 * Copyright 2014-2021 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: April 23, 2021
 */

!(function (e, t) {
  "object" == typeof exports && "undefined" != typeof module
      ? (module.exports = t())
      : "function" == typeof define && define.amd
          ? define(t)
          : ((e = "undefined" != typeof globalThis ? globalThis : e || self).Swiper =
              t());
})(this, function () {
  "use strict";
  function e(e, t) {
    for (var a = 0; a < t.length; a++) {
      var i = t[a];
      (i.enumerable = i.enumerable || !1),
          (i.configurable = !0),
      "value" in i && (i.writable = !0),
          Object.defineProperty(e, i.key, i);
    }
  }
  function t() {
    return (t =
        Object.assign ||
        function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var a = arguments[t];
            for (var i in a)
              Object.prototype.hasOwnProperty.call(a, i) && (e[i] = a[i]);
          }
          return e;
        }).apply(this, arguments);
  }
  function a(e) {
    return (
        null !== e &&
        "object" == typeof e &&
        "constructor" in e &&
        e.constructor === Object
    );
  }
  function i(e, t) {
    void 0 === e && (e = {}),
    void 0 === t && (t = {}),
        Object.keys(t).forEach(function (s) {
          void 0 === e[s]
              ? (e[s] = t[s])
              : a(t[s]) && a(e[s]) && Object.keys(t[s]).length > 0 && i(e[s], t[s]);
        });
  }
  var s = {
    body: {},
    addEventListener: function () {},
    removeEventListener: function () {},
    activeElement: { blur: function () {}, nodeName: "" },
    querySelector: function () {
      return null;
    },
    querySelectorAll: function () {
      return [];
    },
    getElementById: function () {
      return null;
    },
    createEvent: function () {
      return { initEvent: function () {} };
    },
    createElement: function () {
      return {
        children: [],
        childNodes: [],
        style: {},
        setAttribute: function () {},
        getElementsByTagName: function () {
          return [];
        },
      };
    },
    createElementNS: function () {
      return {};
    },
    importNode: function () {
      return null;
    },
    location: {
      hash: "",
      host: "",
      hostname: "",
      href: "",
      origin: "",
      pathname: "",
      protocol: "",
      search: "",
    },
  };
  function r() {
    var e = "undefined" != typeof document ? document : {};
    return i(e, s), e;
  }
  var n = {
    document: s,
    navigator: { userAgent: "" },
    location: {
      hash: "",
      host: "",
      hostname: "",
      href: "",
      origin: "",
      pathname: "",
      protocol: "",
      search: "",
    },
    history: {
      replaceState: function () {},
      pushState: function () {},
      go: function () {},
      back: function () {},
    },
    CustomEvent: function () {
      return this;
    },
    addEventListener: function () {},
    removeEventListener: function () {},
    getComputedStyle: function () {
      return {
        getPropertyValue: function () {
          return "";
        },
      };
    },
    Image: function () {},
    Date: function () {},
    screen: {},
    setTimeout: function () {},
    clearTimeout: function () {},
    matchMedia: function () {
      return {};
    },
    requestAnimationFrame: function (e) {
      return "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0);
    },
    cancelAnimationFrame: function (e) {
      "undefined" != typeof setTimeout && clearTimeout(e);
    },
  };
  function o() {
    var e = "undefined" != typeof window ? window : {};
    return i(e, n), e;
  }
  function l(e) {
    return (l = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (e) {
          return e.__proto__ || Object.getPrototypeOf(e);
        })(e);
  }
  function d(e, t) {
    return (d =
        Object.setPrototypeOf ||
        function (e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
  }
  function p() {
    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
    if (Reflect.construct.sham) return !1;
    if ("function" == typeof Proxy) return !0;
    try {
      return (
          Date.prototype.toString.call(
              Reflect.construct(Date, [], function () {})
          ),
              !0
      );
    } catch (e) {
      return !1;
    }
  }
  function c(e, t, a) {
    return (c = p()
        ? Reflect.construct
        : function (e, t, a) {
          var i = [null];
          i.push.apply(i, t);
          var s = new (Function.bind.apply(e, i))();
          return a && d(s, a.prototype), s;
        }).apply(null, arguments);
  }
  function u(e) {
    var t = "function" == typeof Map ? new Map() : void 0;
    return (u = function (e) {
      if (
          null === e ||
          ((a = e), -1 === Function.toString.call(a).indexOf("[native code]"))
      )
        return e;
      var a;
      if ("function" != typeof e)
        throw new TypeError(
            "Super expression must either be null or a function"
        );
      if (void 0 !== t) {
        if (t.has(e)) return t.get(e);
        t.set(e, i);
      }
      function i() {
        return c(e, arguments, l(this).constructor);
      }
      return (
          (i.prototype = Object.create(e.prototype, {
            constructor: {
              value: i,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          })),
              d(i, e)
      );
    })(e);
  }
  var h = (function (e) {
    var t, a;
    function i(t) {
      var a, i, s;
      return (
          (a = e.call.apply(e, [this].concat(t)) || this),
              (i = (function (e) {
                if (void 0 === e)
                  throw new ReferenceError(
                      "this hasn't been initialised - super() hasn't been called"
                  );
                return e;
              })(a)),
              (s = i.__proto__),
              Object.defineProperty(i, "__proto__", {
                get: function () {
                  return s;
                },
                set: function (e) {
                  s.__proto__ = e;
                },
              }),
              a
      );
    }
    return (
        (a = e),
            ((t = i).prototype = Object.create(a.prototype)),
            (t.prototype.constructor = t),
            (t.__proto__ = a),
            i
    );
  })(u(Array));
  function v(e) {
    void 0 === e && (e = []);
    var t = [];
    return (
        e.forEach(function (e) {
          Array.isArray(e) ? t.push.apply(t, v(e)) : t.push(e);
        }),
            t
    );
  }
  function f(e, t) {
    return Array.prototype.filter.call(e, t);
  }
  function m(e, t) {
    var a = o(),
        i = r(),
        s = [];
    if (!t && e instanceof h) return e;
    if (!e) return new h(s);
    if ("string" == typeof e) {
      var n = e.trim();
      if (n.indexOf("<") >= 0 && n.indexOf(">") >= 0) {
        var l = "div";
        0 === n.indexOf("<li") && (l = "ul"),
        0 === n.indexOf("<tr") && (l = "tbody"),
        (0 !== n.indexOf("<td") && 0 !== n.indexOf("<th")) || (l = "tr"),
        0 === n.indexOf("<tbody") && (l = "table"),
        0 === n.indexOf("<option") && (l = "select");
        var d = i.createElement(l);
        d.innerHTML = n;
        for (var p = 0; p < d.childNodes.length; p += 1)
          s.push(d.childNodes[p]);
      } else
        s = (function (e, t) {
          if ("string" != typeof e) return [e];
          for (
              var a = [], i = t.querySelectorAll(e), s = 0;
              s < i.length;
              s += 1
          )
            a.push(i[s]);
          return a;
        })(e.trim(), t || i);
    } else if (e.nodeType || e === a || e === i) s.push(e);
    else if (Array.isArray(e)) {
      if (e instanceof h) return e;
      s = e;
    }
    return new h(
        (function (e) {
          for (var t = [], a = 0; a < e.length; a += 1)
            -1 === t.indexOf(e[a]) && t.push(e[a]);
          return t;
        })(s)
    );
  }
  m.fn = h.prototype;
  var g,
      b,
      w,
      y = {
        addClass: function () {
          for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++)
            t[a] = arguments[a];
          var i = v(
              t.map(function (e) {
                return e.split(" ");
              })
          );
          return (
              this.forEach(function (e) {
                var t;
                (t = e.classList).add.apply(t, i);
              }),
                  this
          );
        },
        removeClass: function () {
          for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++)
            t[a] = arguments[a];
          var i = v(
              t.map(function (e) {
                return e.split(" ");
              })
          );
          return (
              this.forEach(function (e) {
                var t;
                (t = e.classList).remove.apply(t, i);
              }),
                  this
          );
        },
        hasClass: function () {
          for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++)
            t[a] = arguments[a];
          var i = v(
              t.map(function (e) {
                return e.split(" ");
              })
          );
          return (
              f(this, function (e) {
                return (
                    i.filter(function (t) {
                      return e.classList.contains(t);
                    }).length > 0
                );
              }).length > 0
          );
        },
        toggleClass: function () {
          for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++)
            t[a] = arguments[a];
          var i = v(
              t.map(function (e) {
                return e.split(" ");
              })
          );
          this.forEach(function (e) {
            i.forEach(function (t) {
              e.classList.toggle(t);
            });
          });
        },
        attr: function (e, t) {
          if (1 === arguments.length && "string" == typeof e)
            return this[0] ? this[0].getAttribute(e) : void 0;
          for (var a = 0; a < this.length; a += 1)
            if (2 === arguments.length) this[a].setAttribute(e, t);
            else
              for (var i in e) (this[a][i] = e[i]), this[a].setAttribute(i, e[i]);
          return this;
        },
        removeAttr: function (e) {
          for (var t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
          return this;
        },
        transform: function (e) {
          for (var t = 0; t < this.length; t += 1) this[t].style.transform = e;
          return this;
        },
        transition: function (e) {
          for (var t = 0; t < this.length; t += 1)
            this[t].style.transitionDuration =
                "string" != typeof e ? e + "ms" : e;
          return this;
        },
        on: function () {
          for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++)
            t[a] = arguments[a];
          var i = t[0],
              s = t[1],
              r = t[2],
              n = t[3];
          function o(e) {
            var t = e.target;
            if (t) {
              var a = e.target.dom7EventData || [];
              if ((a.indexOf(e) < 0 && a.unshift(e), m(t).is(s))) r.apply(t, a);
              else
                for (var i = m(t).parents(), n = 0; n < i.length; n += 1)
                  m(i[n]).is(s) && r.apply(i[n], a);
            }
          }
          function l(e) {
            var t = (e && e.target && e.target.dom7EventData) || [];
            t.indexOf(e) < 0 && t.unshift(e), r.apply(this, t);
          }
          "function" == typeof t[1] &&
          ((i = t[0]), (r = t[1]), (n = t[2]), (s = void 0)),
          n || (n = !1);
          for (var d, p = i.split(" "), c = 0; c < this.length; c += 1) {
            var u = this[c];
            if (s)
              for (d = 0; d < p.length; d += 1) {
                var h = p[d];
                u.dom7LiveListeners || (u.dom7LiveListeners = {}),
                u.dom7LiveListeners[h] || (u.dom7LiveListeners[h] = []),
                    u.dom7LiveListeners[h].push({ listener: r, proxyListener: o }),
                    u.addEventListener(h, o, n);
              }
            else
              for (d = 0; d < p.length; d += 1) {
                var v = p[d];
                u.dom7Listeners || (u.dom7Listeners = {}),
                u.dom7Listeners[v] || (u.dom7Listeners[v] = []),
                    u.dom7Listeners[v].push({ listener: r, proxyListener: l }),
                    u.addEventListener(v, l, n);
              }
          }
          return this;
        },
        off: function () {
          for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++)
            t[a] = arguments[a];
          var i = t[0],
              s = t[1],
              r = t[2],
              n = t[3];
          "function" == typeof t[1] &&
          ((i = t[0]), (r = t[1]), (n = t[2]), (s = void 0)),
          n || (n = !1);
          for (var o = i.split(" "), l = 0; l < o.length; l += 1)
            for (var d = o[l], p = 0; p < this.length; p += 1) {
              var c = this[p],
                  u = void 0;
              if (
                  (!s && c.dom7Listeners
                      ? (u = c.dom7Listeners[d])
                      : s && c.dom7LiveListeners && (u = c.dom7LiveListeners[d]),
                  u && u.length)
              )
                for (var h = u.length - 1; h >= 0; h -= 1) {
                  var v = u[h];
                  (r && v.listener === r) ||
                  (r &&
                      v.listener &&
                      v.listener.dom7proxy &&
                      v.listener.dom7proxy === r)
                      ? (c.removeEventListener(d, v.proxyListener, n),
                          u.splice(h, 1))
                      : r ||
                      (c.removeEventListener(d, v.proxyListener, n),
                          u.splice(h, 1));
                }
            }
          return this;
        },
        trigger: function () {
          for (
              var e = o(), t = arguments.length, a = new Array(t), i = 0;
              i < t;
              i++
          )
            a[i] = arguments[i];
          for (var s = a[0].split(" "), r = a[1], n = 0; n < s.length; n += 1)
            for (var l = s[n], d = 0; d < this.length; d += 1) {
              var p = this[d];
              if (e.CustomEvent) {
                var c = new e.CustomEvent(l, {
                  detail: r,
                  bubbles: !0,
                  cancelable: !0,
                });
                (p.dom7EventData = a.filter(function (e, t) {
                  return t > 0;
                })),
                    p.dispatchEvent(c),
                    (p.dom7EventData = []),
                    delete p.dom7EventData;
              }
            }
          return this;
        },
        transitionEnd: function (e) {
          var t = this;
          return (
              e &&
              t.on("transitionend", function a(i) {
                i.target === this && (e.call(this, i), t.off("transitionend", a));
              }),
                  this
          );
        },
        outerWidth: function (e) {
          if (this.length > 0) {
            if (e) {
              var t = this.styles();
              return (
                  this[0].offsetWidth +
                  parseFloat(t.getPropertyValue("margin-right")) +
                  parseFloat(t.getPropertyValue("margin-left"))
              );
            }
            return this[0].offsetWidth;
          }
          return null;
        },
        outerHeight: function (e) {
          if (this.length > 0) {
            if (e) {
              var t = this.styles();
              return (
                  this[0].offsetHeight +
                  parseFloat(t.getPropertyValue("margin-top")) +
                  parseFloat(t.getPropertyValue("margin-bottom"))
              );
            }
            return this[0].offsetHeight;
          }
          return null;
        },
        styles: function () {
          var e = o();
          return this[0] ? e.getComputedStyle(this[0], null) : {};
        },
        offset: function () {
          if (this.length > 0) {
            var e = o(),
                t = r(),
                a = this[0],
                i = a.getBoundingClientRect(),
                s = t.body,
                n = a.clientTop || s.clientTop || 0,
                l = a.clientLeft || s.clientLeft || 0,
                d = a === e ? e.scrollY : a.scrollTop,
                p = a === e ? e.scrollX : a.scrollLeft;
            return { top: i.top + d - n, left: i.left + p - l };
          }
          return null;
        },
        css: function (e, t) {
          var a,
              i = o();
          if (1 === arguments.length) {
            if ("string" != typeof e) {
              for (a = 0; a < this.length; a += 1)
                for (var s in e) this[a].style[s] = e[s];
              return this;
            }
            if (this[0])
              return i.getComputedStyle(this[0], null).getPropertyValue(e);
          }
          if (2 === arguments.length && "string" == typeof e) {
            for (a = 0; a < this.length; a += 1) this[a].style[e] = t;
            return this;
          }
          return this;
        },
        each: function (e) {
          return e
              ? (this.forEach(function (t, a) {
                e.apply(t, [t, a]);
              }),
                  this)
              : this;
        },
        html: function (e) {
          if (void 0 === e) return this[0] ? this[0].innerHTML : null;
          for (var t = 0; t < this.length; t += 1) this[t].innerHTML = e;
          return this;
        },
        text: function (e) {
          if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
          for (var t = 0; t < this.length; t += 1) this[t].textContent = e;
          return this;
        },
        is: function (e) {
          var t,
              a,
              i = o(),
              s = r(),
              n = this[0];
          if (!n || void 0 === e) return !1;
          if ("string" == typeof e) {
            if (n.matches) return n.matches(e);
            if (n.webkitMatchesSelector) return n.webkitMatchesSelector(e);
            if (n.msMatchesSelector) return n.msMatchesSelector(e);
            for (t = m(e), a = 0; a < t.length; a += 1) if (t[a] === n) return !0;
            return !1;
          }
          if (e === s) return n === s;
          if (e === i) return n === i;
          if (e.nodeType || e instanceof h) {
            for (t = e.nodeType ? [e] : e, a = 0; a < t.length; a += 1)
              if (t[a] === n) return !0;
            return !1;
          }
          return !1;
        },
        index: function () {
          var e,
              t = this[0];
          if (t) {
            for (e = 0; null !== (t = t.previousSibling); )
              1 === t.nodeType && (e += 1);
            return e;
          }
        },
        eq: function (e) {
          if (void 0 === e) return this;
          var t = this.length;
          if (e > t - 1) return m([]);
          if (e < 0) {
            var a = t + e;
            return m(a < 0 ? [] : [this[a]]);
          }
          return m([this[e]]);
        },
        append: function () {
          for (var e, t = r(), a = 0; a < arguments.length; a += 1) {
            e = a < 0 || arguments.length <= a ? void 0 : arguments[a];
            for (var i = 0; i < this.length; i += 1)
              if ("string" == typeof e) {
                var s = t.createElement("div");
                for (s.innerHTML = e; s.firstChild; )
                  this[i].appendChild(s.firstChild);
              } else if (e instanceof h)
                for (var n = 0; n < e.length; n += 1) this[i].appendChild(e[n]);
              else this[i].appendChild(e);
          }
          return this;
        },
        prepend: function (e) {
          var t,
              a,
              i = r();
          for (t = 0; t < this.length; t += 1)
            if ("string" == typeof e) {
              var s = i.createElement("div");
              for (s.innerHTML = e, a = s.childNodes.length - 1; a >= 0; a -= 1)
                this[t].insertBefore(s.childNodes[a], this[t].childNodes[0]);
            } else if (e instanceof h)
              for (a = 0; a < e.length; a += 1)
                this[t].insertBefore(e[a], this[t].childNodes[0]);
            else this[t].insertBefore(e, this[t].childNodes[0]);
          return this;
        },
        next: function (e) {
          return this.length > 0
              ? e
                  ? this[0].nextElementSibling && m(this[0].nextElementSibling).is(e)
                      ? m([this[0].nextElementSibling])
                      : m([])
                  : this[0].nextElementSibling
                      ? m([this[0].nextElementSibling])
                      : m([])
              : m([]);
        },
        nextAll: function (e) {
          var t = [],
              a = this[0];
          if (!a) return m([]);
          for (; a.nextElementSibling; ) {
            var i = a.nextElementSibling;
            e ? m(i).is(e) && t.push(i) : t.push(i), (a = i);
          }
          return m(t);
        },
        prev: function (e) {
          if (this.length > 0) {
            var t = this[0];
            return e
                ? t.previousElementSibling && m(t.previousElementSibling).is(e)
                    ? m([t.previousElementSibling])
                    : m([])
                : t.previousElementSibling
                    ? m([t.previousElementSibling])
                    : m([]);
          }
          return m([]);
        },
        prevAll: function (e) {
          var t = [],
              a = this[0];
          if (!a) return m([]);
          for (; a.previousElementSibling; ) {
            var i = a.previousElementSibling;
            e ? m(i).is(e) && t.push(i) : t.push(i), (a = i);
          }
          return m(t);
        },
        parent: function (e) {
          for (var t = [], a = 0; a < this.length; a += 1)
            null !== this[a].parentNode &&
            (e
                ? m(this[a].parentNode).is(e) && t.push(this[a].parentNode)
                : t.push(this[a].parentNode));
          return m(t);
        },
        parents: function (e) {
          for (var t = [], a = 0; a < this.length; a += 1)
            for (var i = this[a].parentNode; i; )
              e ? m(i).is(e) && t.push(i) : t.push(i), (i = i.parentNode);
          return m(t);
        },
        closest: function (e) {
          var t = this;
          return void 0 === e ? m([]) : (t.is(e) || (t = t.parents(e).eq(0)), t);
        },
        find: function (e) {
          for (var t = [], a = 0; a < this.length; a += 1) {
            try {
              var i = this[a].querySelectorAll(e);
            } catch (t) {
              console.log(e);
            }
            for (var s = 0; s < i.length; s += 1) t.push(i[s]);
          }
          return m(t);
        },
        children: function (e) {
          for (var t = [], a = 0; a < this.length; a += 1)
            for (var i = this[a].children, s = 0; s < i.length; s += 1)
              (e && !m(i[s]).is(e)) || t.push(i[s]);
          return m(t);
        },
        filter: function (e) {
          return m(f(this, e));
        },
        remove: function () {
          for (var e = 0; e < this.length; e += 1)
            this[e].parentNode && this[e].parentNode.removeChild(this[e]);
          return this;
        },
      };
  function E(e, t) {
    return void 0 === t && (t = 0), setTimeout(e, t);
  }
  function x() {
    return Date.now();
  }
  function T(e, t) {
    void 0 === t && (t = "x");
    var a,
        i,
        s,
        r = o(),
        n = (function (e) {
          var t,
              a = o();
          return (
              a.getComputedStyle && (t = a.getComputedStyle(e, null)),
              !t && e.currentStyle && (t = e.currentStyle),
              t || (t = e.style),
                  t
          );
        })(e);
    return (
        r.WebKitCSSMatrix
            ? ((i = n.transform || n.webkitTransform).split(",").length > 6 &&
            (i = i
                .split(", ")
                .map(function (e) {
                  return e.replace(",", ".");
                })
                .join(", ")),
                (s = new r.WebKitCSSMatrix("none" === i ? "" : i)))
            : (a = (s =
                n.MozTransform ||
                n.OTransform ||
                n.MsTransform ||
                n.msTransform ||
                n.transform ||
                n
                    .getPropertyValue("transform")
                    .replace("translate(", "matrix(1, 0, 0, 1,"))
                .toString()
                .split(",")),
        "x" === t &&
        (i = r.WebKitCSSMatrix
            ? s.m41
            : 16 === a.length
                ? parseFloat(a[12])
                : parseFloat(a[4])),
        "y" === t &&
        (i = r.WebKitCSSMatrix
            ? s.m42
            : 16 === a.length
                ? parseFloat(a[13])
                : parseFloat(a[5])),
        i || 0
    );
  }
  function S(e) {
    return (
        "object" == typeof e &&
        null !== e &&
        e.constructor &&
        "Object" === Object.prototype.toString.call(e).slice(8, -1)
    );
  }
  function C() {
    for (
        var e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
            t = ["__proto__", "constructor", "prototype"],
            a = 1;
        a < arguments.length;
        a += 1
    ) {
      var i = a < 0 || arguments.length <= a ? void 0 : arguments[a];
      if (null != i)
        for (
            var s = Object.keys(Object(i)).filter(function (e) {
                  return t.indexOf(e) < 0;
                }),
                r = 0,
                n = s.length;
            r < n;
            r += 1
        ) {
          var o = s[r],
              l = Object.getOwnPropertyDescriptor(i, o);
          void 0 !== l &&
          l.enumerable &&
          (S(e[o]) && S(i[o])
              ? i[o].__swiper__
                  ? (e[o] = i[o])
                  : C(e[o], i[o])
              : !S(e[o]) && S(i[o])
                  ? ((e[o] = {}), i[o].__swiper__ ? (e[o] = i[o]) : C(e[o], i[o]))
                  : (e[o] = i[o]));
        }
    }
    return e;
  }
  function M(e, t) {
    Object.keys(t).forEach(function (a) {
      S(t[a]) &&
      Object.keys(t[a]).forEach(function (i) {
        "function" == typeof t[a][i] && (t[a][i] = t[a][i].bind(e));
      }),
          (e[a] = t[a]);
    });
  }
  function z(e) {
    return (
        void 0 === e && (e = ""),
        "." +
        e
            .trim()
            .replace(/([\.:\/])/g, "\\$1")
            .replace(/ /g, ".")
    );
  }
  function P() {
    return (
        g ||
        (g = (function () {
          var e = o(),
              t = r();
          return {
            touch: !!(
                "ontouchstart" in e ||
                (e.DocumentTouch && t instanceof e.DocumentTouch)
            ),
            pointerEvents:
                !!e.PointerEvent &&
                "maxTouchPoints" in e.navigator &&
                e.navigator.maxTouchPoints >= 0,
            observer: "MutationObserver" in e || "WebkitMutationObserver" in e,
            passiveListener: (function () {
              var t = !1;
              try {
                var a = Object.defineProperty({}, "passive", {
                  get: function () {
                    t = !0;
                  },
                });
                e.addEventListener("testPassiveListener", null, a);
              } catch (e) {}
              return t;
            })(),
            gestures: "ongesturestart" in e,
          };
        })()),
            g
    );
  }
  function k(e) {
    return (
        void 0 === e && (e = {}),
        b ||
        (b = (function (e) {
          var t = (void 0 === e ? {} : e).userAgent,
              a = P(),
              i = o(),
              s = i.navigator.platform,
              r = t || i.navigator.userAgent,
              n = { ios: !1, android: !1 },
              l = i.screen.width,
              d = i.screen.height,
              p = r.match(/(Android);?[\s\/]+([\d.]+)?/),
              c = r.match(/(iPad).*OS\s([\d_]+)/),
              u = r.match(/(iPod)(.*OS\s([\d_]+))?/),
              h = !c && r.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
              v = "Win32" === s,
              f = "MacIntel" === s;
          return (
              !c &&
              f &&
              a.touch &&
              [
                "1024x1366",
                "1366x1024",
                "834x1194",
                "1194x834",
                "834x1112",
                "1112x834",
                "768x1024",
                "1024x768",
                "820x1180",
                "1180x820",
                "810x1080",
                "1080x810",
              ].indexOf(l + "x" + d) >= 0 &&
              ((c = r.match(/(Version)\/([\d.]+)/)) || (c = [0, 1, "13_0_0"]),
                  (f = !1)),
              p && !v && ((n.os = "android"), (n.android = !0)),
              (c || h || u) && ((n.os = "ios"), (n.ios = !0)),
                  n
          );
        })(e)),
            b
    );
  }
  function L() {
    return (
        w ||
        (w = (function () {
          var e,
              t = o();
          return {
            isEdge: !!t.navigator.userAgent.match(/Edge/g),
            isSafari:
                ((e = t.navigator.userAgent.toLowerCase()),
                e.indexOf("safari") >= 0 &&
                e.indexOf("chrome") < 0 &&
                e.indexOf("android") < 0),
            isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
                t.navigator.userAgent
            ),
          };
        })()),
            w
    );
  }
  Object.keys(y).forEach(function (e) {
    Object.defineProperty(m.fn, e, { value: y[e], writable: !0 });
  });
  var $ = {
        name: "resize",
        create: function () {
          var e = this;
          C(e, {
            resize: {
              observer: null,
              createObserver: function () {
                e &&
                !e.destroyed &&
                e.initialized &&
                ((e.resize.observer = new ResizeObserver(function (t) {
                  var a = e.width,
                      i = e.height,
                      s = a,
                      r = i;
                  t.forEach(function (t) {
                    var a = t.contentBoxSize,
                        i = t.contentRect,
                        n = t.target;
                    (n && n !== e.el) ||
                    ((s = i ? i.width : (a[0] || a).inlineSize),
                        (r = i ? i.height : (a[0] || a).blockSize));
                  }),
                  (s === a && r === i) || e.resize.resizeHandler();
                })),
                    e.resize.observer.observe(e.el));
              },
              removeObserver: function () {
                e.resize.observer &&
                e.resize.observer.unobserve &&
                e.el &&
                (e.resize.observer.unobserve(e.el), (e.resize.observer = null));
              },
              resizeHandler: function () {
                e &&
                !e.destroyed &&
                e.initialized &&
                (e.emit("beforeResize"), e.emit("resize"));
              },
              orientationChangeHandler: function () {
                e && !e.destroyed && e.initialized && e.emit("orientationchange");
              },
            },
          });
        },
        on: {
          init: function (e) {
            var t = o();
            e.params.resizeObserver && void 0 !== o().ResizeObserver
                ? e.resize.createObserver()
                : (t.addEventListener("resize", e.resize.resizeHandler),
                    t.addEventListener(
                        "orientationchange",
                        e.resize.orientationChangeHandler
                    ));
          },
          destroy: function (e) {
            var t = o();
            e.resize.removeObserver(),
                t.removeEventListener("resize", e.resize.resizeHandler),
                t.removeEventListener(
                    "orientationchange",
                    e.resize.orientationChangeHandler
                );
          },
        },
      },
      I = {
        attach: function (e, t) {
          void 0 === t && (t = {});
          var a = o(),
              i = this,
              s = new (a.MutationObserver || a.WebkitMutationObserver)(function (
                  e
              ) {
                if (1 !== e.length) {
                  var t = function () {
                    i.emit("observerUpdate", e[0]);
                  };
                  a.requestAnimationFrame
                      ? a.requestAnimationFrame(t)
                      : a.setTimeout(t, 0);
                } else i.emit("observerUpdate", e[0]);
              });
          s.observe(e, {
            attributes: void 0 === t.attributes || t.attributes,
            childList: void 0 === t.childList || t.childList,
            characterData: void 0 === t.characterData || t.characterData,
          }),
              i.observer.observers.push(s);
        },
        init: function () {
          var e = this;
          if (e.support.observer && e.params.observer) {
            if (e.params.observeParents)
              for (var t = e.$el.parents(), a = 0; a < t.length; a += 1)
                e.observer.attach(t[a]);
            e.observer.attach(e.$el[0], {
              childList: e.params.observeSlideChildren,
            }),
                e.observer.attach(e.$wrapperEl[0], { attributes: !1 });
          }
        },
        destroy: function () {
          this.observer.observers.forEach(function (e) {
            e.disconnect();
          }),
              (this.observer.observers = []);
        },
      },
      O = {
        name: "observer",
        params: { observer: !1, observeParents: !1, observeSlideChildren: !1 },
        create: function () {
          M(this, { observer: t({}, I, { observers: [] }) });
        },
        on: {
          init: function (e) {
            e.observer.init();
          },
          destroy: function (e) {
            e.observer.destroy();
          },
        },
      };
  function A(e) {
    var t = this,
        a = r(),
        i = o(),
        s = t.touchEventsData,
        n = t.params,
        l = t.touches;
    if (!t.animating || !n.preventInteractionOnTransition) {
      var d = e;
      d.originalEvent && (d = d.originalEvent);
      var p = m(d.target);
      if ("wrapper" !== n.touchEventsTarget || p.closest(t.wrapperEl).length)
        if (
            ((s.isTouchEvent = "touchstart" === d.type),
            s.isTouchEvent || !("which" in d) || 3 !== d.which)
        )
          if (!(!s.isTouchEvent && "button" in d && d.button > 0))
            if (!s.isTouched || !s.isMoved)
              if (
                  (!!n.noSwipingClass &&
                  "" !== n.noSwipingClass &&
                  d.target &&
                  d.target.shadowRoot &&
                  e.path &&
                  e.path[0] &&
                  (p = m(e.path[0])),
                  n.noSwiping &&
                  p.closest(
                      n.noSwipingSelector
                          ? n.noSwipingSelector
                          : "." + n.noSwipingClass
                  )[0])
              )
                t.allowClick = !0;
              else if (!n.swipeHandler || p.closest(n.swipeHandler)[0]) {
                (l.currentX =
                    "touchstart" === d.type ? d.targetTouches[0].pageX : d.pageX),
                    (l.currentY =
                        "touchstart" === d.type
                            ? d.targetTouches[0].pageY
                            : d.pageY);
                var c = l.currentX,
                    u = l.currentY,
                    h = n.edgeSwipeDetection || n.iOSEdgeSwipeDetection,
                    v = n.edgeSwipeThreshold || n.iOSEdgeSwipeThreshold;
                if (h && (c <= v || c >= i.innerWidth - v)) {
                  if ("prevent" !== h) return;
                  e.preventDefault();
                }
                if (
                    (C(s, {
                      isTouched: !0,
                      isMoved: !1,
                      allowTouchCallbacks: !0,
                      isScrolling: void 0,
                      startMoving: void 0,
                    }),
                        (l.startX = c),
                        (l.startY = u),
                        (s.touchStartTime = x()),
                        (t.allowClick = !0),
                        t.updateSize(),
                        (t.swipeDirection = void 0),
                    n.threshold > 0 && (s.allowThresholdMove = !1),
                    "touchstart" !== d.type)
                ) {
                  var f = !0;
                  p.is(s.formElements) && (f = !1),
                  a.activeElement &&
                  m(a.activeElement).is(s.formElements) &&
                  a.activeElement !== p[0] &&
                  a.activeElement.blur();
                  var g = f && t.allowTouchMove && n.touchStartPreventDefault;
                  (!n.touchStartForcePreventDefault && !g) ||
                  p[0].isContentEditable ||
                  d.preventDefault();
                }
                t.emit("touchStart", d);
              }
    }
  }
  function D(e) {
    var t = r(),
        a = this,
        i = a.touchEventsData,
        s = a.params,
        n = a.touches,
        o = a.rtlTranslate,
        l = e;
    if ((l.originalEvent && (l = l.originalEvent), i.isTouched)) {
      if (!i.isTouchEvent || "touchmove" === l.type) {
        var d =
                "touchmove" === l.type &&
                l.targetTouches &&
                (l.targetTouches[0] || l.changedTouches[0]),
            p = "touchmove" === l.type ? d.pageX : l.pageX,
            c = "touchmove" === l.type ? d.pageY : l.pageY;
        if (l.preventedByNestedSwiper)
          return (n.startX = p), void (n.startY = c);
        if (!a.allowTouchMove)
          return (
              (a.allowClick = !1),
                  void (
                      i.isTouched &&
                      (C(n, { startX: p, startY: c, currentX: p, currentY: c }),
                          (i.touchStartTime = x()))
                  )
          );
        if (i.isTouchEvent && s.touchReleaseOnEdges && !s.loop)
          if (a.isVertical()) {
            if (
                (c < n.startY && a.translate <= a.maxTranslate()) ||
                (c > n.startY && a.translate >= a.minTranslate())
            )
              return (i.isTouched = !1), void (i.isMoved = !1);
          } else if (
              (p < n.startX && a.translate <= a.maxTranslate()) ||
              (p > n.startX && a.translate >= a.minTranslate())
          )
            return;
        if (
            i.isTouchEvent &&
            t.activeElement &&
            l.target === t.activeElement &&
            m(l.target).is(i.formElements)
        )
          return (i.isMoved = !0), void (a.allowClick = !1);
        if (
            (i.allowTouchCallbacks && a.emit("touchMove", l),
                !(l.targetTouches && l.targetTouches.length > 1))
        ) {
          (n.currentX = p), (n.currentY = c);
          var u = n.currentX - n.startX,
              h = n.currentY - n.startY;
          if (
              !(
                  a.params.threshold &&
                  Math.sqrt(Math.pow(u, 2) + Math.pow(h, 2)) < a.params.threshold
              )
          ) {
            var v;
            if (void 0 === i.isScrolling)
              (a.isHorizontal() && n.currentY === n.startY) ||
              (a.isVertical() && n.currentX === n.startX)
                  ? (i.isScrolling = !1)
                  : u * u + h * h >= 25 &&
                  ((v = (180 * Math.atan2(Math.abs(h), Math.abs(u))) / Math.PI),
                      (i.isScrolling = a.isHorizontal()
                          ? v > s.touchAngle
                          : 90 - v > s.touchAngle));
            if (
                (i.isScrolling && a.emit("touchMoveOpposite", l),
                void 0 === i.startMoving &&
                ((n.currentX === n.startX && n.currentY === n.startY) ||
                    (i.startMoving = !0)),
                    i.isScrolling)
            )
              i.isTouched = !1;
            else if (i.startMoving) {
              (a.allowClick = !1),
              !s.cssMode && l.cancelable && l.preventDefault(),
              s.touchMoveStopPropagation && !s.nested && l.stopPropagation(),
              i.isMoved ||
              (s.loop && a.loopFix(),
                  (i.startTranslate = a.getTranslate()),
                  a.setTransition(0),
              a.animating &&
              a.$wrapperEl.trigger("webkitTransitionEnd transitionend"),
                  (i.allowMomentumBounce = !1),
              !s.grabCursor ||
              (!0 !== a.allowSlideNext && !0 !== a.allowSlidePrev) ||
              a.setGrabCursor(!0),
                  a.emit("sliderFirstMove", l)),
                  a.emit("sliderMove", l),
                  (i.isMoved = !0);
              var f = a.isHorizontal() ? u : h;
              (n.diff = f),
                  (f *= s.touchRatio),
              o && (f = -f),
                  (a.swipeDirection = f > 0 ? "prev" : "next"),
                  (i.currentTranslate = f + i.startTranslate);
              var g = !0,
                  b = s.resistanceRatio;
              if (
                  (s.touchReleaseOnEdges && (b = 0),
                      f > 0 && i.currentTranslate > a.minTranslate()
                          ? ((g = !1),
                          s.resistance &&
                          (i.currentTranslate =
                              a.minTranslate() -
                              1 +
                              Math.pow(-a.minTranslate() + i.startTranslate + f, b)))
                          : f < 0 &&
                          i.currentTranslate < a.maxTranslate() &&
                          ((g = !1),
                          s.resistance &&
                          (i.currentTranslate =
                              a.maxTranslate() +
                              1 -
                              Math.pow(a.maxTranslate() - i.startTranslate - f, b))),
                  g && (l.preventedByNestedSwiper = !0),
                  !a.allowSlideNext &&
                  "next" === a.swipeDirection &&
                  i.currentTranslate < i.startTranslate &&
                  (i.currentTranslate = i.startTranslate),
                  !a.allowSlidePrev &&
                  "prev" === a.swipeDirection &&
                  i.currentTranslate > i.startTranslate &&
                  (i.currentTranslate = i.startTranslate),
                  a.allowSlidePrev ||
                  a.allowSlideNext ||
                  (i.currentTranslate = i.startTranslate),
                  s.threshold > 0)
              ) {
                if (!(Math.abs(f) > s.threshold || i.allowThresholdMove))
                  return void (i.currentTranslate = i.startTranslate);
                if (!i.allowThresholdMove)
                  return (
                      (i.allowThresholdMove = !0),
                          (n.startX = n.currentX),
                          (n.startY = n.currentY),
                          (i.currentTranslate = i.startTranslate),
                          void (n.diff = a.isHorizontal()
                              ? n.currentX - n.startX
                              : n.currentY - n.startY)
                  );
              }
              s.followFinger &&
              !s.cssMode &&
              ((s.freeMode ||
                  s.watchSlidesProgress ||
                  s.watchSlidesVisibility) &&
              (a.updateActiveIndex(), a.updateSlidesClasses()),
              s.freeMode &&
              (0 === i.velocities.length &&
              i.velocities.push({
                position: n[a.isHorizontal() ? "startX" : "startY"],
                time: i.touchStartTime,
              }),
                  i.velocities.push({
                    position: n[a.isHorizontal() ? "currentX" : "currentY"],
                    time: x(),
                  })),
                  a.updateProgress(i.currentTranslate),
                  a.setTranslate(i.currentTranslate));
            }
          }
        }
      }
    } else i.startMoving && i.isScrolling && a.emit("touchMoveOpposite", l);
  }
  function N(e) {
    var t = this,
        a = t.touchEventsData,
        i = t.params,
        s = t.touches,
        r = t.rtlTranslate,
        n = t.$wrapperEl,
        o = t.slidesGrid,
        l = t.snapGrid,
        d = e;
    if (
        (d.originalEvent && (d = d.originalEvent),
        a.allowTouchCallbacks && t.emit("touchEnd", d),
            (a.allowTouchCallbacks = !1),
            !a.isTouched)
    )
      return (
          a.isMoved && i.grabCursor && t.setGrabCursor(!1),
              (a.isMoved = !1),
              void (a.startMoving = !1)
      );
    i.grabCursor &&
    a.isMoved &&
    a.isTouched &&
    (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) &&
    t.setGrabCursor(!1);
    var p,
        c = x(),
        u = c - a.touchStartTime;
    if (
        (t.allowClick &&
        (t.updateClickedSlide(d),
            t.emit("tap click", d),
        u < 300 &&
        c - a.lastClickTime < 300 &&
        t.emit("doubleTap doubleClick", d)),
            (a.lastClickTime = x()),
            E(function () {
              t.destroyed || (t.allowClick = !0);
            }),
        !a.isTouched ||
        !a.isMoved ||
        !t.swipeDirection ||
        0 === s.diff ||
        a.currentTranslate === a.startTranslate)
    )
      return (a.isTouched = !1), (a.isMoved = !1), void (a.startMoving = !1);
    if (
        ((a.isTouched = !1),
            (a.isMoved = !1),
            (a.startMoving = !1),
            (p = i.followFinger
                ? r
                    ? t.translate
                    : -t.translate
                : -a.currentTranslate),
            !i.cssMode)
    )
      if (i.freeMode) {
        if (p < -t.minTranslate()) return void t.slideTo(t.activeIndex);
        if (p > -t.maxTranslate())
          return void (t.slides.length < l.length
              ? t.slideTo(l.length - 1)
              : t.slideTo(t.slides.length - 1));
        if (i.freeModeMomentum) {
          if (a.velocities.length > 1) {
            var h = a.velocities.pop(),
                v = a.velocities.pop(),
                f = h.position - v.position,
                m = h.time - v.time;
            (t.velocity = f / m),
                (t.velocity /= 2),
            Math.abs(t.velocity) < i.freeModeMinimumVelocity &&
            (t.velocity = 0),
            (m > 150 || x() - h.time > 300) && (t.velocity = 0);
          } else t.velocity = 0;
          (t.velocity *= i.freeModeMomentumVelocityRatio),
              (a.velocities.length = 0);
          var g = 1e3 * i.freeModeMomentumRatio,
              b = t.velocity * g,
              w = t.translate + b;
          r && (w = -w);
          var y,
              T,
              S = !1,
              C = 20 * Math.abs(t.velocity) * i.freeModeMomentumBounceRatio;
          if (w < t.maxTranslate())
            i.freeModeMomentumBounce
                ? (w + t.maxTranslate() < -C && (w = t.maxTranslate() - C),
                    (y = t.maxTranslate()),
                    (S = !0),
                    (a.allowMomentumBounce = !0))
                : (w = t.maxTranslate()),
            i.loop && i.centeredSlides && (T = !0);
          else if (w > t.minTranslate())
            i.freeModeMomentumBounce
                ? (w - t.minTranslate() > C && (w = t.minTranslate() + C),
                    (y = t.minTranslate()),
                    (S = !0),
                    (a.allowMomentumBounce = !0))
                : (w = t.minTranslate()),
            i.loop && i.centeredSlides && (T = !0);
          else if (i.freeModeSticky) {
            for (var M, z = 0; z < l.length; z += 1)
              if (l[z] > -w) {
                M = z;
                break;
              }
            w = -(w =
                Math.abs(l[M] - w) < Math.abs(l[M - 1] - w) ||
                "next" === t.swipeDirection
                    ? l[M]
                    : l[M - 1]);
          }
          if (
              (T &&
              t.once("transitionEnd", function () {
                t.loopFix();
              }),
              0 !== t.velocity)
          ) {
            if (
                ((g = r
                    ? Math.abs((-w - t.translate) / t.velocity)
                    : Math.abs((w - t.translate) / t.velocity)),
                    i.freeModeSticky)
            ) {
              var P = Math.abs((r ? -w : w) - t.translate),
                  k = t.slidesSizesGrid[t.activeIndex];
              g = P < k ? i.speed : P < 2 * k ? 1.5 * i.speed : 2.5 * i.speed;
            }
          } else if (i.freeModeSticky) return void t.slideToClosest();
          i.freeModeMomentumBounce && S
              ? (t.updateProgress(y),
                  t.setTransition(g),
                  t.setTranslate(w),
                  t.transitionStart(!0, t.swipeDirection),
                  (t.animating = !0),
                  n.transitionEnd(function () {
                    t &&
                    !t.destroyed &&
                    a.allowMomentumBounce &&
                    (t.emit("momentumBounce"),
                        t.setTransition(i.speed),
                        setTimeout(function () {
                          t.setTranslate(y),
                              n.transitionEnd(function () {
                                t && !t.destroyed && t.transitionEnd();
                              });
                        }, 0));
                  }))
              : t.velocity
                  ? (t.updateProgress(w),
                      t.setTransition(g),
                      t.setTranslate(w),
                      t.transitionStart(!0, t.swipeDirection),
                  t.animating ||
                  ((t.animating = !0),
                      n.transitionEnd(function () {
                        t && !t.destroyed && t.transitionEnd();
                      })))
                  : (t.emit("_freeModeNoMomentumRelease"), t.updateProgress(w)),
              t.updateActiveIndex(),
              t.updateSlidesClasses();
        } else {
          if (i.freeModeSticky) return void t.slideToClosest();
          i.freeMode && t.emit("_freeModeNoMomentumRelease");
        }
        (!i.freeModeMomentum || u >= i.longSwipesMs) &&
        (t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses());
      } else {
        for (
            var L = 0, $ = t.slidesSizesGrid[0], I = 0;
            I < o.length;
            I += I < i.slidesPerGroupSkip ? 1 : i.slidesPerGroup
        ) {
          var O = I < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
          void 0 !== o[I + O]
              ? p >= o[I] && p < o[I + O] && ((L = I), ($ = o[I + O] - o[I]))
              : p >= o[I] && ((L = I), ($ = o[o.length - 1] - o[o.length - 2]));
        }
        var A = (p - o[L]) / $,
            D = L < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
        if (u > i.longSwipesMs) {
          if (!i.longSwipes) return void t.slideTo(t.activeIndex);
          "next" === t.swipeDirection &&
          (A >= i.longSwipesRatio ? t.slideTo(L + D) : t.slideTo(L)),
          "prev" === t.swipeDirection &&
          (A > 1 - i.longSwipesRatio ? t.slideTo(L + D) : t.slideTo(L));
        } else {
          if (!i.shortSwipes) return void t.slideTo(t.activeIndex);
          t.navigation &&
          (d.target === t.navigation.nextEl || d.target === t.navigation.prevEl)
              ? d.target === t.navigation.nextEl
                  ? t.slideTo(L + D)
                  : t.slideTo(L)
              : ("next" === t.swipeDirection && t.slideTo(L + D),
              "prev" === t.swipeDirection && t.slideTo(L));
        }
      }
  }
  function G() {
    var e = this,
        t = e.params,
        a = e.el;
    if (!a || 0 !== a.offsetWidth) {
      t.breakpoints && e.setBreakpoint();
      var i = e.allowSlideNext,
          s = e.allowSlidePrev,
          r = e.snapGrid;
      (e.allowSlideNext = !0),
          (e.allowSlidePrev = !0),
          e.updateSize(),
          e.updateSlides(),
          e.updateSlidesClasses(),
          ("auto" === t.slidesPerView || t.slidesPerView > 1) &&
          e.isEnd &&
          !e.isBeginning &&
          !e.params.centeredSlides
              ? e.slideTo(e.slides.length - 1, 0, !1, !0)
              : e.slideTo(e.activeIndex, 0, !1, !0),
      e.autoplay &&
      e.autoplay.running &&
      e.autoplay.paused &&
      e.autoplay.run(),
          (e.allowSlidePrev = s),
          (e.allowSlideNext = i),
      e.params.watchOverflow && r !== e.snapGrid && e.checkOverflow();
    }
  }
  function B(e) {
    var t = this;
    t.allowClick ||
    (t.params.preventClicks && e.preventDefault(),
    t.params.preventClicksPropagation &&
    t.animating &&
    (e.stopPropagation(), e.stopImmediatePropagation()));
  }
  function H() {
    var e = this,
        t = e.wrapperEl,
        a = e.rtlTranslate;
    (e.previousTranslate = e.translate),
        e.isHorizontal()
            ? (e.translate = a
                ? t.scrollWidth - t.offsetWidth - t.scrollLeft
                : -t.scrollLeft)
            : (e.translate = -t.scrollTop),
    -0 === e.translate && (e.translate = 0),
        e.updateActiveIndex(),
        e.updateSlidesClasses();
    var i = e.maxTranslate() - e.minTranslate();
    (0 === i ? 0 : (e.translate - e.minTranslate()) / i) !== e.progress &&
    e.updateProgress(a ? -e.translate : e.translate),
        e.emit("setTranslate", e.translate, !1);
  }
  var X = !1;
  function Y() {}
  var R = {
        init: !0,
        direction: "horizontal",
        touchEventsTarget: "container",
        initialSlide: 0,
        speed: 300,
        cssMode: !1,
        updateOnWindowResize: !0,
        resizeObserver: !1,
        nested: !1,
        width: null,
        height: null,
        preventInteractionOnTransition: !1,
        userAgent: null,
        url: null,
        edgeSwipeDetection: !1,
        edgeSwipeThreshold: 20,
        freeMode: !1,
        freeModeMomentum: !0,
        freeModeMomentumRatio: 1,
        freeModeMomentumBounce: !0,
        freeModeMomentumBounceRatio: 1,
        freeModeMomentumVelocityRatio: 1,
        freeModeSticky: !1,
        freeModeMinimumVelocity: 0.02,
        autoHeight: !1,
        setWrapperSize: !1,
        virtualTranslate: !1,
        effect: "slide",
        breakpoints: void 0,
        breakpointsBase: "window",
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerColumn: 1,
        slidesPerColumnFill: "column",
        slidesPerGroup: 1,
        slidesPerGroupSkip: 0,
        centeredSlides: !1,
        centeredSlidesBounds: !1,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        normalizeSlideIndex: !0,
        centerInsufficientSlides: !1,
        watchOverflow: !1,
        roundLengths: !1,
        touchRatio: 1,
        touchAngle: 45,
        simulateTouch: !0,
        shortSwipes: !0,
        longSwipes: !0,
        longSwipesRatio: 0.5,
        longSwipesMs: 300,
        followFinger: !0,
        allowTouchMove: !0,
        threshold: 0,
        touchMoveStopPropagation: !1,
        touchStartPreventDefault: !0,
        touchStartForcePreventDefault: !1,
        touchReleaseOnEdges: !1,
        uniqueNavElements: !0,
        resistance: !0,
        resistanceRatio: 0.85,
        watchSlidesProgress: !1,
        watchSlidesVisibility: !1,
        grabCursor: !1,
        preventClicks: !0,
        preventClicksPropagation: !0,
        slideToClickedSlide: !1,
        preloadImages: !0,
        updateOnImagesReady: !0,
        loop: !1,
        loopAdditionalSlides: 0,
        loopedSlides: null,
        loopFillGroupWithBlank: !1,
        loopPreventsSlide: !0,
        allowSlidePrev: !0,
        allowSlideNext: !0,
        swipeHandler: null,
        noSwiping: !0,
        noSwipingClass: "swiper-no-swiping",
        noSwipingSelector: null,
        passiveListeners: !0,
        containerModifierClass: "swiper-container-",
        slideClass: "swiper-slide",
        slideBlankClass: "swiper-slide-invisible-blank",
        slideActiveClass: "swiper-slide-active",
        slideDuplicateActiveClass: "swiper-slide-duplicate-active",
        slideVisibleClass: "swiper-slide-visible",
        slideDuplicateClass: "swiper-slide-duplicate",
        slideNextClass: "swiper-slide-next",
        slideDuplicateNextClass: "swiper-slide-duplicate-next",
        slidePrevClass: "swiper-slide-prev",
        slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
        wrapperClass: "swiper-wrapper",
        runCallbacksOnInit: !0,
        _emitClasses: !1,
      },
      V = {
        modular: {
          useParams: function (e) {
            var t = this;
            t.modules &&
            Object.keys(t.modules).forEach(function (a) {
              var i = t.modules[a];
              i.params && C(e, i.params);
            });
          },
          useModules: function (e) {
            void 0 === e && (e = {});
            var t = this;
            t.modules &&
            Object.keys(t.modules).forEach(function (a) {
              var i = t.modules[a],
                  s = e[a] || {};
              i.on &&
              t.on &&
              Object.keys(i.on).forEach(function (e) {
                t.on(e, i.on[e]);
              }),
              i.create && i.create.bind(t)(s);
            });
          },
        },
        eventsEmitter: {
          on: function (e, t, a) {
            var i = this;
            if ("function" != typeof t) return i;
            var s = a ? "unshift" : "push";
            return (
                e.split(" ").forEach(function (e) {
                  i.eventsListeners[e] || (i.eventsListeners[e] = []),
                      i.eventsListeners[e][s](t);
                }),
                    i
            );
          },
          once: function (e, t, a) {
            var i = this;
            if ("function" != typeof t) return i;
            function s() {
              i.off(e, s), s.__emitterProxy && delete s.__emitterProxy;
              for (var a = arguments.length, r = new Array(a), n = 0; n < a; n++)
                r[n] = arguments[n];
              t.apply(i, r);
            }
            return (s.__emitterProxy = t), i.on(e, s, a);
          },
          onAny: function (e, t) {
            var a = this;
            if ("function" != typeof e) return a;
            var i = t ? "unshift" : "push";
            return (
                a.eventsAnyListeners.indexOf(e) < 0 && a.eventsAnyListeners[i](e), a
            );
          },
          offAny: function (e) {
            var t = this;
            if (!t.eventsAnyListeners) return t;
            var a = t.eventsAnyListeners.indexOf(e);
            return a >= 0 && t.eventsAnyListeners.splice(a, 1), t;
          },
          off: function (e, t) {
            var a = this;
            return a.eventsListeners
                ? (e.split(" ").forEach(function (e) {
                  void 0 === t
                      ? (a.eventsListeners[e] = [])
                      : a.eventsListeners[e] &&
                      a.eventsListeners[e].forEach(function (i, s) {
                        (i === t ||
                            (i.__emitterProxy && i.__emitterProxy === t)) &&
                        a.eventsListeners[e].splice(s, 1);
                      });
                }),
                    a)
                : a;
          },
          emit: function () {
            var e,
                t,
                a,
                i = this;
            if (!i.eventsListeners) return i;
            for (var s = arguments.length, r = new Array(s), n = 0; n < s; n++)
              r[n] = arguments[n];
            "string" == typeof r[0] || Array.isArray(r[0])
                ? ((e = r[0]), (t = r.slice(1, r.length)), (a = i))
                : ((e = r[0].events), (t = r[0].data), (a = r[0].context || i)),
                t.unshift(a);
            var o = Array.isArray(e) ? e : e.split(" ");
            return (
                o.forEach(function (e) {
                  i.eventsAnyListeners &&
                  i.eventsAnyListeners.length &&
                  i.eventsAnyListeners.forEach(function (i) {
                    i.apply(a, [e].concat(t));
                  }),
                  i.eventsListeners &&
                  i.eventsListeners[e] &&
                  i.eventsListeners[e].forEach(function (e) {
                    e.apply(a, t);
                  });
                }),
                    i
            );
          },
        },
        update: {
          updateSize: function () {
            var e,
                t,
                a = this,
                i = a.$el;
            (e =
                void 0 !== a.params.width && null !== a.params.width
                    ? a.params.width
                    : i[0].clientWidth),
                (t =
                    void 0 !== a.params.height && null !== a.params.height
                        ? a.params.height
                        : i[0].clientHeight),
            (0 === e && a.isHorizontal()) ||
            (0 === t && a.isVertical()) ||
            ((e =
                e -
                parseInt(i.css("padding-left") || 0, 10) -
                parseInt(i.css("padding-right") || 0, 10)),
                (t =
                    t -
                    parseInt(i.css("padding-top") || 0, 10) -
                    parseInt(i.css("padding-bottom") || 0, 10)),
            Number.isNaN(e) && (e = 0),
            Number.isNaN(t) && (t = 0),
                C(a, { width: e, height: t, size: a.isHorizontal() ? e : t }));
          },
          updateSlides: function () {
            var e = this,
                t = function (t) {
                  return e.isHorizontal()
                      ? t
                      : {
                        width: "height",
                        "margin-top": "margin-left",
                        "margin-bottom ": "margin-right",
                        "margin-left": "margin-top",
                        "margin-right": "margin-bottom",
                        "padding-left": "padding-top",
                        "padding-right": "padding-bottom",
                        marginRight: "marginBottom",
                      }[t];
                },
                a = function (e, a) {
                  return parseFloat(e.getPropertyValue(t(a)) || 0);
                },
                i = e.params,
                s = e.$wrapperEl,
                r = e.size,
                n = e.rtlTranslate,
                o = e.wrongRTL,
                l = e.virtual && i.virtual.enabled,
                d = l ? e.virtual.slides.length : e.slides.length,
                p = s.children("." + e.params.slideClass),
                c = l ? e.virtual.slides.length : p.length,
                u = [],
                h = [],
                v = [],
                f = i.slidesOffsetBefore;
            "function" == typeof f && (f = i.slidesOffsetBefore.call(e));
            var m = i.slidesOffsetAfter;
            "function" == typeof m && (m = i.slidesOffsetAfter.call(e));
            var g = e.snapGrid.length,
                b = e.slidesGrid.length,
                w = i.spaceBetween,
                y = -f,
                E = 0,
                x = 0;
            if (void 0 !== r) {
              var T, S;
              "string" == typeof w &&
              w.indexOf("%") >= 0 &&
              (w = (parseFloat(w.replace("%", "")) / 100) * r),
                  (e.virtualSize = -w),
                  n
                      ? p.css({ marginLeft: "", marginTop: "" })
                      : p.css({ marginRight: "", marginBottom: "" }),
              i.slidesPerColumn > 1 &&
              ((T =
                  Math.floor(c / i.slidesPerColumn) ===
                  c / e.params.slidesPerColumn
                      ? c
                      : Math.ceil(c / i.slidesPerColumn) * i.slidesPerColumn),
              "auto" !== i.slidesPerView &&
              "row" === i.slidesPerColumnFill &&
              (T = Math.max(T, i.slidesPerView * i.slidesPerColumn)));
              for (
                  var M,
                      z,
                      P,
                      k = i.slidesPerColumn,
                      L = T / k,
                      $ = Math.floor(c / i.slidesPerColumn),
                      I = 0;
                  I < c;
                  I += 1
              ) {
                S = 0;
                var O = p.eq(I);
                if (i.slidesPerColumn > 1) {
                  var A = void 0,
                      D = void 0,
                      N = void 0;
                  if ("row" === i.slidesPerColumnFill && i.slidesPerGroup > 1) {
                    var G = Math.floor(
                            I / (i.slidesPerGroup * i.slidesPerColumn)
                        ),
                        B = I - i.slidesPerColumn * i.slidesPerGroup * G,
                        H =
                            0 === G
                                ? i.slidesPerGroup
                                : Math.min(
                                    Math.ceil((c - G * k * i.slidesPerGroup) / k),
                                    i.slidesPerGroup
                                );
                    (A =
                        (D =
                            B - (N = Math.floor(B / H)) * H + G * i.slidesPerGroup) +
                        (N * T) / k),
                        O.css({
                          "-webkit-box-ordinal-group": A,
                          "-moz-box-ordinal-group": A,
                          "-ms-flex-order": A,
                          "-webkit-order": A,
                          order: A,
                        });
                  } else
                    "column" === i.slidesPerColumnFill
                        ? ((N = I - (D = Math.floor(I / k)) * k),
                        (D > $ || (D === $ && N === k - 1)) &&
                        (N += 1) >= k &&
                        ((N = 0), (D += 1)))
                        : (D = I - (N = Math.floor(I / L)) * L);
                  O.css(
                      t("margin-top"),
                      0 !== N && i.spaceBetween && i.spaceBetween + "px"
                  );
                }
                if ("none" !== O.css("display")) {
                  if ("auto" === i.slidesPerView) {
                    var X = getComputedStyle(O[0]),
                        Y = O[0].style.transform,
                        R = O[0].style.webkitTransform;
                    if (
                        (Y && (O[0].style.transform = "none"),
                        R && (O[0].style.webkitTransform = "none"),
                            i.roundLengths)
                    )
                      S = e.isHorizontal() ? O.outerWidth(!0) : O.outerHeight(!0);
                    else {
                      var V = a(X, "width"),
                          W = a(X, "padding-left"),
                          F = a(X, "padding-right"),
                          _ = a(X, "margin-left"),
                          q = a(X, "margin-right"),
                          j = X.getPropertyValue("box-sizing");
                      if (j && "border-box" === j) S = V + _ + q;
                      else {
                        var U = O[0],
                            K = U.clientWidth;
                        S = V + W + F + _ + q + (U.offsetWidth - K);
                      }
                    }
                    Y && (O[0].style.transform = Y),
                    R && (O[0].style.webkitTransform = R),
                    i.roundLengths && (S = Math.floor(S));
                  } else
                    (S = (r - (i.slidesPerView - 1) * w) / i.slidesPerView),
                    i.roundLengths && (S = Math.floor(S)),
                    p[I] && (p[I].style[t("width")] = S + "px");
                  p[I] && (p[I].swiperSlideSize = S),
                      v.push(S),
                      i.centeredSlides
                          ? ((y = y + S / 2 + E / 2 + w),
                          0 === E && 0 !== I && (y = y - r / 2 - w),
                          0 === I && (y = y - r / 2 - w),
                          Math.abs(y) < 0.001 && (y = 0),
                          i.roundLengths && (y = Math.floor(y)),
                          x % i.slidesPerGroup == 0 && u.push(y),
                              h.push(y))
                          : (i.roundLengths && (y = Math.floor(y)),
                          (x - Math.min(e.params.slidesPerGroupSkip, x)) %
                          e.params.slidesPerGroup ==
                          0 && u.push(y),
                              h.push(y),
                              (y = y + S + w)),
                      (e.virtualSize += S + w),
                      (E = S),
                      (x += 1);
                }
              }
              if (
                  ((e.virtualSize = Math.max(e.virtualSize, r) + m),
                  n &&
                  o &&
                  ("slide" === i.effect || "coverflow" === i.effect) &&
                  s.css({ width: e.virtualSize + i.spaceBetween + "px" }),
                      i.setWrapperSize)
              )
                s.css(
                    (((z = {})[t("width")] = e.virtualSize + i.spaceBetween + "px"),
                        z)
                );
              if (i.slidesPerColumn > 1)
                if (
                    ((e.virtualSize = (S + i.spaceBetween) * T),
                        (e.virtualSize =
                            Math.ceil(e.virtualSize / i.slidesPerColumn) -
                            i.spaceBetween),
                        s.css(
                            (((P = {})[t("width")] =
                                e.virtualSize + i.spaceBetween + "px"),
                                P)
                        ),
                        i.centeredSlides)
                ) {
                  M = [];
                  for (var Z = 0; Z < u.length; Z += 1) {
                    var J = u[Z];
                    i.roundLengths && (J = Math.floor(J)),
                    u[Z] < e.virtualSize + u[0] && M.push(J);
                  }
                  u = M;
                }
              if (!i.centeredSlides) {
                M = [];
                for (var Q = 0; Q < u.length; Q += 1) {
                  var ee = u[Q];
                  i.roundLengths && (ee = Math.floor(ee)),
                  u[Q] <= e.virtualSize - r && M.push(ee);
                }
                (u = M),
                Math.floor(e.virtualSize - r) - Math.floor(u[u.length - 1]) >
                1 && u.push(e.virtualSize - r);
              }
              if ((0 === u.length && (u = [0]), 0 !== i.spaceBetween)) {
                var te,
                    ae = e.isHorizontal() && n ? "marginLeft" : t("marginRight");
                p.filter(function (e, t) {
                  return !i.cssMode || t !== p.length - 1;
                }).css((((te = {})[ae] = w + "px"), te));
              }
              if (i.centeredSlides && i.centeredSlidesBounds) {
                var ie = 0;
                v.forEach(function (e) {
                  ie += e + (i.spaceBetween ? i.spaceBetween : 0);
                });
                var se = (ie -= i.spaceBetween) - r;
                u = u.map(function (e) {
                  return e < 0 ? -f : e > se ? se + m : e;
                });
              }
              if (i.centerInsufficientSlides) {
                var re = 0;
                if (
                    (v.forEach(function (e) {
                      re += e + (i.spaceBetween ? i.spaceBetween : 0);
                    }),
                    (re -= i.spaceBetween) < r)
                ) {
                  var ne = (r - re) / 2;
                  u.forEach(function (e, t) {
                    u[t] = e - ne;
                  }),
                      h.forEach(function (e, t) {
                        h[t] = e + ne;
                      });
                }
              }
              C(e, { slides: p, snapGrid: u, slidesGrid: h, slidesSizesGrid: v }),
              c !== d && e.emit("slidesLengthChange"),
              u.length !== g &&
              (e.params.watchOverflow && e.checkOverflow(),
                  e.emit("snapGridLengthChange")),
              h.length !== b && e.emit("slidesGridLengthChange"),
              (i.watchSlidesProgress || i.watchSlidesVisibility) &&
              e.updateSlidesOffset();
            }
          },
          updateAutoHeight: function (e) {
            var t,
                a = this,
                i = [],
                s = 0;
            if (
                ("number" == typeof e
                    ? a.setTransition(e)
                    : !0 === e && a.setTransition(a.params.speed),
                "auto" !== a.params.slidesPerView && a.params.slidesPerView > 1)
            )
              if (a.params.centeredSlides)
                a.visibleSlides.each(function (e) {
                  i.push(e);
                });
              else
                for (t = 0; t < Math.ceil(a.params.slidesPerView); t += 1) {
                  var r = a.activeIndex + t;
                  if (r > a.slides.length) break;
                  i.push(a.slides.eq(r)[0]);
                }
            else i.push(a.slides.eq(a.activeIndex)[0]);
            for (t = 0; t < i.length; t += 1)
              if (void 0 !== i[t]) {
                var n = i[t].offsetHeight;
                s = n > s ? n : s;
              }
            s && a.$wrapperEl.css("height", s + "px");
          },
          updateSlidesOffset: function () {
            for (var e = this.slides, t = 0; t < e.length; t += 1)
              e[t].swiperSlideOffset = this.isHorizontal()
                  ? e[t].offsetLeft
                  : e[t].offsetTop;
          },
          updateSlidesProgress: function (e) {
            void 0 === e && (e = (this && this.translate) || 0);
            var t = this,
                a = t.params,
                i = t.slides,
                s = t.rtlTranslate;
            if (0 !== i.length) {
              void 0 === i[0].swiperSlideOffset && t.updateSlidesOffset();
              var r = -e;
              s && (r = e),
                  i.removeClass(a.slideVisibleClass),
                  (t.visibleSlidesIndexes = []),
                  (t.visibleSlides = []);
              for (var n = 0; n < i.length; n += 1) {
                var o = i[n],
                    l =
                        (r +
                            (a.centeredSlides ? t.minTranslate() : 0) -
                            o.swiperSlideOffset) /
                        (o.swiperSlideSize + a.spaceBetween);
                if (
                    a.watchSlidesVisibility ||
                    (a.centeredSlides && a.autoHeight)
                ) {
                  var d = -(r - o.swiperSlideOffset),
                      p = d + t.slidesSizesGrid[n];
                  ((d >= 0 && d < t.size - 1) ||
                      (p > 1 && p <= t.size) ||
                      (d <= 0 && p >= t.size)) &&
                  (t.visibleSlides.push(o),
                      t.visibleSlidesIndexes.push(n),
                      i.eq(n).addClass(a.slideVisibleClass));
                }
                o.progress = s ? -l : l;
              }
              t.visibleSlides = m(t.visibleSlides);
            }
          },
          updateProgress: function (e) {
            var t = this;
            if (void 0 === e) {
              var a = t.rtlTranslate ? -1 : 1;
              e = (t && t.translate && t.translate * a) || 0;
            }
            var i = t.params,
                s = t.maxTranslate() - t.minTranslate(),
                r = t.progress,
                n = t.isBeginning,
                o = t.isEnd,
                l = n,
                d = o;
            0 === s
                ? ((r = 0), (n = !0), (o = !0))
                : ((n = (r = (e - t.minTranslate()) / s) <= 0), (o = r >= 1)),
                C(t, { progress: r, isBeginning: n, isEnd: o }),
            (i.watchSlidesProgress ||
                i.watchSlidesVisibility ||
                (i.centeredSlides && i.autoHeight)) &&
            t.updateSlidesProgress(e),
            n && !l && t.emit("reachBeginning toEdge"),
            o && !d && t.emit("reachEnd toEdge"),
            ((l && !n) || (d && !o)) && t.emit("fromEdge"),
                t.emit("progress", r);
          },
          updateSlidesClasses: function () {
            var e,
                t = this,
                a = t.slides,
                i = t.params,
                s = t.$wrapperEl,
                r = t.activeIndex,
                n = t.realIndex,
                o = t.virtual && i.virtual.enabled;
            a.removeClass(
                i.slideActiveClass +
                " " +
                i.slideNextClass +
                " " +
                i.slidePrevClass +
                " " +
                i.slideDuplicateActiveClass +
                " " +
                i.slideDuplicateNextClass +
                " " +
                i.slideDuplicatePrevClass
            ),
                (e = o
                    ? t.$wrapperEl.find(
                        "." + i.slideClass + '[data-swiper-slide-index="' + r + '"]'
                    )
                    : a.eq(r)).addClass(i.slideActiveClass),
            i.loop &&
            (e.hasClass(i.slideDuplicateClass)
                ? s
                    .children(
                        "." +
                        i.slideClass +
                        ":not(." +
                        i.slideDuplicateClass +
                        ')[data-swiper-slide-index="' +
                        n +
                        '"]'
                    )
                    .addClass(i.slideDuplicateActiveClass)
                : s
                    .children(
                        "." +
                        i.slideClass +
                        "." +
                        i.slideDuplicateClass +
                        '[data-swiper-slide-index="' +
                        n +
                        '"]'
                    )
                    .addClass(i.slideDuplicateActiveClass));
            var l = e
                .nextAll("." + i.slideClass)
                .eq(0)
                .addClass(i.slideNextClass);
            i.loop && 0 === l.length && (l = a.eq(0)).addClass(i.slideNextClass);
            var d = e
                .prevAll("." + i.slideClass)
                .eq(0)
                .addClass(i.slidePrevClass);
            i.loop && 0 === d.length && (d = a.eq(-1)).addClass(i.slidePrevClass),
            i.loop &&
            (l.hasClass(i.slideDuplicateClass)
                ? s
                    .children(
                        "." +
                        i.slideClass +
                        ":not(." +
                        i.slideDuplicateClass +
                        ')[data-swiper-slide-index="' +
                        l.attr("data-swiper-slide-index") +
                        '"]'
                    )
                    .addClass(i.slideDuplicateNextClass)
                : s
                    .children(
                        "." +
                        i.slideClass +
                        "." +
                        i.slideDuplicateClass +
                        '[data-swiper-slide-index="' +
                        l.attr("data-swiper-slide-index") +
                        '"]'
                    )
                    .addClass(i.slideDuplicateNextClass),
                d.hasClass(i.slideDuplicateClass)
                    ? s
                        .children(
                            "." +
                            i.slideClass +
                            ":not(." +
                            i.slideDuplicateClass +
                            ')[data-swiper-slide-index="' +
                            d.attr("data-swiper-slide-index") +
                            '"]'
                        )
                        .addClass(i.slideDuplicatePrevClass)
                    : s
                        .children(
                            "." +
                            i.slideClass +
                            "." +
                            i.slideDuplicateClass +
                            '[data-swiper-slide-index="' +
                            d.attr("data-swiper-slide-index") +
                            '"]'
                        )
                        .addClass(i.slideDuplicatePrevClass)),
                t.emitSlidesClasses();
          },
          updateActiveIndex: function (e) {
            var t,
                a = this,
                i = a.rtlTranslate ? a.translate : -a.translate,
                s = a.slidesGrid,
                r = a.snapGrid,
                n = a.params,
                o = a.activeIndex,
                l = a.realIndex,
                d = a.snapIndex,
                p = e;
            if (void 0 === p) {
              for (var c = 0; c < s.length; c += 1)
                void 0 !== s[c + 1]
                    ? i >= s[c] && i < s[c + 1] - (s[c + 1] - s[c]) / 2
                        ? (p = c)
                        : i >= s[c] && i < s[c + 1] && (p = c + 1)
                    : i >= s[c] && (p = c);
              n.normalizeSlideIndex && (p < 0 || void 0 === p) && (p = 0);
            }
            if (r.indexOf(i) >= 0) t = r.indexOf(i);
            else {
              var u = Math.min(n.slidesPerGroupSkip, p);
              t = u + Math.floor((p - u) / n.slidesPerGroup);
            }
            if ((t >= r.length && (t = r.length - 1), p !== o)) {
              var h = parseInt(
                  a.slides.eq(p).attr("data-swiper-slide-index") || p,
                  10
              );
              C(a, {
                snapIndex: t,
                realIndex: h,
                previousIndex: o,
                activeIndex: p,
              }),
                  a.emit("activeIndexChange"),
                  a.emit("snapIndexChange"),
              l !== h && a.emit("realIndexChange"),
              (a.initialized || a.params.runCallbacksOnInit) &&
              a.emit("slideChange");
            } else t !== d && ((a.snapIndex = t), a.emit("snapIndexChange"));
          },
          updateClickedSlide: function (e) {
            var t,
                a = this,
                i = a.params,
                s = m(e.target).closest("." + i.slideClass)[0],
                r = !1;
            if (s)
              for (var n = 0; n < a.slides.length; n += 1)
                if (a.slides[n] === s) {
                  (r = !0), (t = n);
                  break;
                }
            if (!s || !r)
              return (a.clickedSlide = void 0), void (a.clickedIndex = void 0);
            (a.clickedSlide = s),
                a.virtual && a.params.virtual.enabled
                    ? (a.clickedIndex = parseInt(
                        m(s).attr("data-swiper-slide-index"),
                        10
                    ))
                    : (a.clickedIndex = t),
            i.slideToClickedSlide &&
            void 0 !== a.clickedIndex &&
            a.clickedIndex !== a.activeIndex &&
            a.slideToClickedSlide();
          },
        },
        translate: {
          getTranslate: function (e) {
            void 0 === e && (e = this.isHorizontal() ? "x" : "y");
            var t = this,
                a = t.params,
                i = t.rtlTranslate,
                s = t.translate,
                r = t.$wrapperEl;
            if (a.virtualTranslate) return i ? -s : s;
            if (a.cssMode) return s;
            var n = T(r[0], e);
            return i && (n = -n), n || 0;
          },
          setTranslate: function (e, t) {
            var a = this,
                i = a.rtlTranslate,
                s = a.params,
                r = a.$wrapperEl,
                n = a.wrapperEl,
                o = a.progress,
                l = 0,
                d = 0;
            a.isHorizontal() ? (l = i ? -e : e) : (d = e),
            s.roundLengths && ((l = Math.floor(l)), (d = Math.floor(d))),
                s.cssMode
                    ? (n[a.isHorizontal() ? "scrollLeft" : "scrollTop"] =
                        a.isHorizontal() ? -l : -d)
                    : s.virtualTranslate ||
                    r.transform("translate3d(" + l + "px, " + d + "px, 0px)"),
                (a.previousTranslate = a.translate),
                (a.translate = a.isHorizontal() ? l : d);
            var p = a.maxTranslate() - a.minTranslate();
            (0 === p ? 0 : (e - a.minTranslate()) / p) !== o &&
            a.updateProgress(e),
                a.emit("setTranslate", a.translate, t);
          },
          minTranslate: function () {
            return -this.snapGrid[0];
          },
          maxTranslate: function () {
            return -this.snapGrid[this.snapGrid.length - 1];
          },
          translateTo: function (e, t, a, i, s) {
            void 0 === e && (e = 0),
            void 0 === t && (t = this.params.speed),
            void 0 === a && (a = !0),
            void 0 === i && (i = !0);
            var r = this,
                n = r.params,
                o = r.wrapperEl;
            if (r.animating && n.preventInteractionOnTransition) return !1;
            var l,
                d = r.minTranslate(),
                p = r.maxTranslate();
            if (
                ((l = i && e > d ? d : i && e < p ? p : e),
                    r.updateProgress(l),
                    n.cssMode)
            ) {
              var c,
                  u = r.isHorizontal();
              if (0 === t) o[u ? "scrollLeft" : "scrollTop"] = -l;
              else if (o.scrollTo)
                o.scrollTo(
                    (((c = {})[u ? "left" : "top"] = -l),
                        (c.behavior = "smooth"),
                        c)
                );
              else o[u ? "scrollLeft" : "scrollTop"] = -l;
              return !0;
            }
            return (
                0 === t
                    ? (r.setTransition(0),
                        r.setTranslate(l),
                    a &&
                    (r.emit("beforeTransitionStart", t, s),
                        r.emit("transitionEnd")))
                    : (r.setTransition(t),
                        r.setTranslate(l),
                    a &&
                    (r.emit("beforeTransitionStart", t, s),
                        r.emit("transitionStart")),
                    r.animating ||
                    ((r.animating = !0),
                    r.onTranslateToWrapperTransitionEnd ||
                    (r.onTranslateToWrapperTransitionEnd = function (e) {
                      r &&
                      !r.destroyed &&
                      e.target === this &&
                      (r.$wrapperEl[0].removeEventListener(
                          "transitionend",
                          r.onTranslateToWrapperTransitionEnd
                      ),
                          r.$wrapperEl[0].removeEventListener(
                              "webkitTransitionEnd",
                              r.onTranslateToWrapperTransitionEnd
                          ),
                          (r.onTranslateToWrapperTransitionEnd = null),
                          delete r.onTranslateToWrapperTransitionEnd,
                      a && r.emit("transitionEnd"));
                    }),
                        r.$wrapperEl[0].addEventListener(
                            "transitionend",
                            r.onTranslateToWrapperTransitionEnd
                        ),
                        r.$wrapperEl[0].addEventListener(
                            "webkitTransitionEnd",
                            r.onTranslateToWrapperTransitionEnd
                        ))),
                    !0
            );
          },
        },
        transition: {
          setTransition: function (e, t) {
            var a = this;
            a.params.cssMode || a.$wrapperEl.transition(e),
                a.emit("setTransition", e, t);
          },
          transitionStart: function (e, t) {
            void 0 === e && (e = !0);
            var a = this,
                i = a.activeIndex,
                s = a.params,
                r = a.previousIndex;
            if (!s.cssMode) {
              s.autoHeight && a.updateAutoHeight();
              var n = t;
              if (
                  (n || (n = i > r ? "next" : i < r ? "prev" : "reset"),
                      a.emit("transitionStart"),
                  e && i !== r)
              ) {
                if ("reset" === n)
                  return void a.emit("slideResetTransitionStart");
                a.emit("slideChangeTransitionStart"),
                    "next" === n
                        ? a.emit("slideNextTransitionStart")
                        : a.emit("slidePrevTransitionStart");
              }
            }
          },
          transitionEnd: function (e, t) {
            void 0 === e && (e = !0);
            var a = this,
                i = a.activeIndex,
                s = a.previousIndex,
                r = a.params;
            if (((a.animating = !1), !r.cssMode)) {
              a.setTransition(0);
              var n = t;
              if (
                  (n || (n = i > s ? "next" : i < s ? "prev" : "reset"),
                      a.emit("transitionEnd"),
                  e && i !== s)
              ) {
                if ("reset" === n) return void a.emit("slideResetTransitionEnd");
                a.emit("slideChangeTransitionEnd"),
                    "next" === n
                        ? a.emit("slideNextTransitionEnd")
                        : a.emit("slidePrevTransitionEnd");
              }
            }
          },
        },
        slide: {
          slideTo: function (e, t, a, i) {
            if (
                (void 0 === e && (e = 0),
                void 0 === t && (t = this.params.speed),
                void 0 === a && (a = !0),
                "number" != typeof e && "string" != typeof e)
            )
              throw new Error(
                  "The 'index' argument cannot have type other than 'number' or 'string'. [" +
                  typeof e +
                  "] given."
              );
            if ("string" == typeof e) {
              var s = parseInt(e, 10);
              if (!isFinite(s))
                throw new Error(
                    "The passed-in 'index' (string) couldn't be converted to 'number'. [" +
                    e +
                    "] given."
                );
              e = s;
            }
            var r = this,
                n = e;
            n < 0 && (n = 0);
            var o = r.params,
                l = r.snapGrid,
                d = r.slidesGrid,
                p = r.previousIndex,
                c = r.activeIndex,
                u = r.rtlTranslate,
                h = r.wrapperEl;
            if (r.animating && o.preventInteractionOnTransition) return !1;
            var v = Math.min(r.params.slidesPerGroupSkip, n),
                f = v + Math.floor((n - v) / r.params.slidesPerGroup);
            f >= l.length && (f = l.length - 1),
            (c || o.initialSlide || 0) === (p || 0) &&
            a &&
            r.emit("beforeSlideChangeStart");
            var m,
                g = -l[f];
            if ((r.updateProgress(g), o.normalizeSlideIndex))
              for (var b = 0; b < d.length; b += 1) {
                var w = -Math.floor(100 * g),
                    y = Math.floor(100 * d[b]),
                    E = Math.floor(100 * d[b + 1]);
                void 0 !== d[b + 1]
                    ? w >= y && w < E - (E - y) / 2
                        ? (n = b)
                        : w >= y && w < E && (n = b + 1)
                    : w >= y && (n = b);
              }
            if (r.initialized && n !== c) {
              if (!r.allowSlideNext && g < r.translate && g < r.minTranslate())
                return !1;
              if (
                  !r.allowSlidePrev &&
                  g > r.translate &&
                  g > r.maxTranslate() &&
                  (c || 0) !== n
              )
                return !1;
            }
            if (
                ((m = n > c ? "next" : n < c ? "prev" : "reset"),
                (u && -g === r.translate) || (!u && g === r.translate))
            )
              return (
                  r.updateActiveIndex(n),
                  o.autoHeight && r.updateAutoHeight(),
                      r.updateSlidesClasses(),
                  "slide" !== o.effect && r.setTranslate(g),
                  "reset" !== m && (r.transitionStart(a, m), r.transitionEnd(a, m)),
                      !1
              );
            if (o.cssMode) {
              var x,
                  T = r.isHorizontal(),
                  S = -g;
              if ((u && (S = h.scrollWidth - h.offsetWidth - S), 0 === t))
                h[T ? "scrollLeft" : "scrollTop"] = S;
              else if (h.scrollTo)
                h.scrollTo(
                    (((x = {})[T ? "left" : "top"] = S), (x.behavior = "smooth"), x)
                );
              else h[T ? "scrollLeft" : "scrollTop"] = S;
              return !0;
            }
            return (
                0 === t
                    ? (r.setTransition(0),
                        r.setTranslate(g),
                        r.updateActiveIndex(n),
                        r.updateSlidesClasses(),
                        r.emit("beforeTransitionStart", t, i),
                        r.transitionStart(a, m),
                        r.transitionEnd(a, m))
                    : (r.setTransition(t),
                        r.setTranslate(g),
                        r.updateActiveIndex(n),
                        r.updateSlidesClasses(),
                        r.emit("beforeTransitionStart", t, i),
                        r.transitionStart(a, m),
                    r.animating ||
                    ((r.animating = !0),
                    r.onSlideToWrapperTransitionEnd ||
                    (r.onSlideToWrapperTransitionEnd = function (e) {
                      r &&
                      !r.destroyed &&
                      e.target === this &&
                      (r.$wrapperEl[0].removeEventListener(
                          "transitionend",
                          r.onSlideToWrapperTransitionEnd
                      ),
                          r.$wrapperEl[0].removeEventListener(
                              "webkitTransitionEnd",
                              r.onSlideToWrapperTransitionEnd
                          ),
                          (r.onSlideToWrapperTransitionEnd = null),
                          delete r.onSlideToWrapperTransitionEnd,
                          r.transitionEnd(a, m));
                    }),
                        r.$wrapperEl[0].addEventListener(
                            "transitionend",
                            r.onSlideToWrapperTransitionEnd
                        ),
                        r.$wrapperEl[0].addEventListener(
                            "webkitTransitionEnd",
                            r.onSlideToWrapperTransitionEnd
                        ))),
                    !0
            );
          },
          slideToLoop: function (e, t, a, i) {
            void 0 === e && (e = 0),
            void 0 === t && (t = this.params.speed),
            void 0 === a && (a = !0);
            var s = this,
                r = e;
            return s.params.loop && (r += s.loopedSlides), s.slideTo(r, t, a, i);
          },
          slideNext: function (e, t, a) {
            void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
            var i = this,
                s = i.params,
                r = i.animating,
                n = i.activeIndex < s.slidesPerGroupSkip ? 1 : s.slidesPerGroup;
            if (s.loop) {
              if (r && s.loopPreventsSlide) return !1;
              i.loopFix(), (i._clientLeft = i.$wrapperEl[0].clientLeft);
            }
            return i.slideTo(i.activeIndex + n, e, t, a);
          },
          slidePrev: function (e, t, a) {
            void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
            var i = this,
                s = i.params,
                r = i.animating,
                n = i.snapGrid,
                o = i.slidesGrid,
                l = i.rtlTranslate;
            if (s.loop) {
              if (r && s.loopPreventsSlide) return !1;
              i.loopFix(), (i._clientLeft = i.$wrapperEl[0].clientLeft);
            }
            function d(e) {
              return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
            }
            var p = d(l ? i.translate : -i.translate),
                c = n.map(function (e) {
                  return d(e);
                });
            n[c.indexOf(p)];
            var u,
                h = n[c.indexOf(p) - 1];
            return (
                void 0 === h &&
                s.cssMode &&
                n.forEach(function (e) {
                  !h && p >= e && (h = e);
                }),
                void 0 !== h && (u = o.indexOf(h)) < 0 && (u = i.activeIndex - 1),
                    i.slideTo(u, e, t, a)
            );
          },
          slideReset: function (e, t, a) {
            return (
                void 0 === e && (e = this.params.speed),
                void 0 === t && (t = !0),
                    this.slideTo(this.activeIndex, e, t, a)
            );
          },
          slideToClosest: function (e, t, a, i) {
            void 0 === e && (e = this.params.speed),
            void 0 === t && (t = !0),
            void 0 === i && (i = 0.5);
            var s = this,
                r = s.activeIndex,
                n = Math.min(s.params.slidesPerGroupSkip, r),
                o = n + Math.floor((r - n) / s.params.slidesPerGroup),
                l = s.rtlTranslate ? s.translate : -s.translate;
            if (l >= s.snapGrid[o]) {
              var d = s.snapGrid[o];
              l - d > (s.snapGrid[o + 1] - d) * i &&
              (r += s.params.slidesPerGroup);
            } else {
              var p = s.snapGrid[o - 1];
              l - p <= (s.snapGrid[o] - p) * i && (r -= s.params.slidesPerGroup);
            }
            return (
                (r = Math.max(r, 0)),
                    (r = Math.min(r, s.slidesGrid.length - 1)),
                    s.slideTo(r, e, t, a)
            );
          },
          slideToClickedSlide: function () {
            var e,
                t = this,
                a = t.params,
                i = t.$wrapperEl,
                s =
                    "auto" === a.slidesPerView
                        ? t.slidesPerViewDynamic()
                        : a.slidesPerView,
                r = t.clickedIndex;
            if (a.loop) {
              if (t.animating) return;
              (e = parseInt(
                  m(t.clickedSlide).attr("data-swiper-slide-index"),
                  10
              )),
                  a.centeredSlides
                      ? r < t.loopedSlides - s / 2 ||
                      r > t.slides.length - t.loopedSlides + s / 2
                          ? (t.loopFix(),
                              (r = i
                                  .children(
                                      "." +
                                      a.slideClass +
                                      '[data-swiper-slide-index="' +
                                      e +
                                      '"]:not(.' +
                                      a.slideDuplicateClass +
                                      ")"
                                  )
                                  .eq(0)
                                  .index()),
                              E(function () {
                                t.slideTo(r);
                              }))
                          : t.slideTo(r)
                      : r > t.slides.length - s
                          ? (t.loopFix(),
                              (r = i
                                  .children(
                                      "." +
                                      a.slideClass +
                                      '[data-swiper-slide-index="' +
                                      e +
                                      '"]:not(.' +
                                      a.slideDuplicateClass +
                                      ")"
                                  )
                                  .eq(0)
                                  .index()),
                              E(function () {
                                t.slideTo(r);
                              }))
                          : t.slideTo(r);
            } else t.slideTo(r);
          },
        },
        loop: {
          loopCreate: function () {
            var e = this,
                t = r(),
                a = e.params,
                i = e.$wrapperEl;
            i.children("." + a.slideClass + "." + a.slideDuplicateClass).remove();
            var s = i.children("." + a.slideClass);
            if (a.loopFillGroupWithBlank) {
              var n = a.slidesPerGroup - (s.length % a.slidesPerGroup);
              if (n !== a.slidesPerGroup) {
                for (var o = 0; o < n; o += 1) {
                  var l = m(t.createElement("div")).addClass(
                      a.slideClass + " " + a.slideBlankClass
                  );
                  i.append(l);
                }
                s = i.children("." + a.slideClass);
              }
            }
            "auto" !== a.slidesPerView ||
            a.loopedSlides ||
            (a.loopedSlides = s.length),
                (e.loopedSlides = Math.ceil(
                    parseFloat(a.loopedSlides || a.slidesPerView, 10)
                )),
                (e.loopedSlides += a.loopAdditionalSlides),
            e.loopedSlides > s.length && (e.loopedSlides = s.length);
            var d = [],
                p = [];
            s.each(function (t, a) {
              var i = m(t);
              a < e.loopedSlides && p.push(t),
              a < s.length && a >= s.length - e.loopedSlides && d.push(t),
                  i.attr("data-swiper-slide-index", a);
            });
            for (var c = 0; c < p.length; c += 1)
              i.append(m(p[c].cloneNode(!0)).addClass(a.slideDuplicateClass));
            for (var u = d.length - 1; u >= 0; u -= 1)
              i.prepend(m(d[u].cloneNode(!0)).addClass(a.slideDuplicateClass));
          },
          loopFix: function () {
            var e = this;
            e.emit("beforeLoopFix");
            var t,
                a = e.activeIndex,
                i = e.slides,
                s = e.loopedSlides,
                r = e.allowSlidePrev,
                n = e.allowSlideNext,
                o = e.snapGrid,
                l = e.rtlTranslate;
            (e.allowSlidePrev = !0), (e.allowSlideNext = !0);
            var d = -o[a] - e.getTranslate();
            if (a < s)
              (t = i.length - 3 * s + a),
                  (t += s),
              e.slideTo(t, 0, !1, !0) &&
              0 !== d &&
              e.setTranslate((l ? -e.translate : e.translate) - d);
            else if (a >= i.length - s) {
              (t = -i.length + a + s),
                  (t += s),
              e.slideTo(t, 0, !1, !0) &&
              0 !== d &&
              e.setTranslate((l ? -e.translate : e.translate) - d);
            }
            (e.allowSlidePrev = r), (e.allowSlideNext = n), e.emit("loopFix");
          },
          loopDestroy: function () {
            var e = this,
                t = e.$wrapperEl,
                a = e.params,
                i = e.slides;
            t
                .children(
                    "." +
                    a.slideClass +
                    "." +
                    a.slideDuplicateClass +
                    ",." +
                    a.slideClass +
                    "." +
                    a.slideBlankClass
                )
                .remove(),
                i.removeAttr("data-swiper-slide-index");
          },
        },
        grabCursor: {
          setGrabCursor: function (e) {
            var t = this;
            if (
                !(
                    t.support.touch ||
                    !t.params.simulateTouch ||
                    (t.params.watchOverflow && t.isLocked) ||
                    t.params.cssMode
                )
            ) {
              var a = t.el;
              (a.style.cursor = "move"),
                  (a.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab"),
                  (a.style.cursor = e ? "-moz-grabbin" : "-moz-grab"),
                  (a.style.cursor = e ? "grabbing" : "grab");
            }
          },
          unsetGrabCursor: function () {
            var e = this;
            e.support.touch ||
            (e.params.watchOverflow && e.isLocked) ||
            e.params.cssMode ||
            (e.el.style.cursor = "");
          },
        },
        manipulation: {
          appendSlide: function (e) {
            var t = this,
                a = t.$wrapperEl,
                i = t.params;
            if (
                (i.loop && t.loopDestroy(), "object" == typeof e && "length" in e)
            )
              for (var s = 0; s < e.length; s += 1) e[s] && a.append(e[s]);
            else a.append(e);
            i.loop && t.loopCreate(),
            (i.observer && t.support.observer) || t.update();
          },
          prependSlide: function (e) {
            var t = this,
                a = t.params,
                i = t.$wrapperEl,
                s = t.activeIndex;
            a.loop && t.loopDestroy();
            var r = s + 1;
            if ("object" == typeof e && "length" in e) {
              for (var n = 0; n < e.length; n += 1) e[n] && i.prepend(e[n]);
              r = s + e.length;
            } else i.prepend(e);
            a.loop && t.loopCreate(),
            (a.observer && t.support.observer) || t.update(),
                t.slideTo(r, 0, !1);
          },
          addSlide: function (e, t) {
            var a = this,
                i = a.$wrapperEl,
                s = a.params,
                r = a.activeIndex;
            s.loop &&
            ((r -= a.loopedSlides),
                a.loopDestroy(),
                (a.slides = i.children("." + s.slideClass)));
            var n = a.slides.length;
            if (e <= 0) a.prependSlide(t);
            else if (e >= n) a.appendSlide(t);
            else {
              for (var o = r > e ? r + 1 : r, l = [], d = n - 1; d >= e; d -= 1) {
                var p = a.slides.eq(d);
                p.remove(), l.unshift(p);
              }
              if ("object" == typeof t && "length" in t) {
                for (var c = 0; c < t.length; c += 1) t[c] && i.append(t[c]);
                o = r > e ? r + t.length : r;
              } else i.append(t);
              for (var u = 0; u < l.length; u += 1) i.append(l[u]);
              s.loop && a.loopCreate(),
              (s.observer && a.support.observer) || a.update(),
                  s.loop
                      ? a.slideTo(o + a.loopedSlides, 0, !1)
                      : a.slideTo(o, 0, !1);
            }
          },
          removeSlide: function (e) {
            var t = this,
                a = t.params,
                i = t.$wrapperEl,
                s = t.activeIndex;
            a.loop &&
            ((s -= t.loopedSlides),
                t.loopDestroy(),
                (t.slides = i.children("." + a.slideClass)));
            var r,
                n = s;
            if ("object" == typeof e && "length" in e) {
              for (var o = 0; o < e.length; o += 1)
                (r = e[o]),
                t.slides[r] && t.slides.eq(r).remove(),
                r < n && (n -= 1);
              n = Math.max(n, 0);
            } else
              (r = e),
              t.slides[r] && t.slides.eq(r).remove(),
              r < n && (n -= 1),
                  (n = Math.max(n, 0));
            a.loop && t.loopCreate(),
            (a.observer && t.support.observer) || t.update(),
                a.loop ? t.slideTo(n + t.loopedSlides, 0, !1) : t.slideTo(n, 0, !1);
          },
          removeAllSlides: function () {
            for (var e = [], t = 0; t < this.slides.length; t += 1) e.push(t);
            this.removeSlide(e);
          },
        },
        events: {
          attachEvents: function () {
            var e = this,
                t = r(),
                a = e.params,
                i = e.touchEvents,
                s = e.el,
                n = e.wrapperEl,
                o = e.device,
                l = e.support;
            (e.onTouchStart = A.bind(e)),
                (e.onTouchMove = D.bind(e)),
                (e.onTouchEnd = N.bind(e)),
            a.cssMode && (e.onScroll = H.bind(e)),
                (e.onClick = B.bind(e));
            var d = !!a.nested;
            if (!l.touch && l.pointerEvents)
              s.addEventListener(i.start, e.onTouchStart, !1),
                  t.addEventListener(i.move, e.onTouchMove, d),
                  t.addEventListener(i.end, e.onTouchEnd, !1);
            else {
              if (l.touch) {
                var p = !(
                    "touchstart" !== i.start ||
                    !l.passiveListener ||
                    !a.passiveListeners
                ) && { passive: !0, capture: !1 };
                s.addEventListener(i.start, e.onTouchStart, p),
                    s.addEventListener(
                        i.move,
                        e.onTouchMove,
                        l.passiveListener ? { passive: !1, capture: d } : d
                    ),
                    s.addEventListener(i.end, e.onTouchEnd, p),
                i.cancel && s.addEventListener(i.cancel, e.onTouchEnd, p),
                X || (t.addEventListener("touchstart", Y), (X = !0));
              }
              ((a.simulateTouch && !o.ios && !o.android) ||
                  (a.simulateTouch && !l.touch && o.ios)) &&
              (s.addEventListener("mousedown", e.onTouchStart, !1),
                  t.addEventListener("mousemove", e.onTouchMove, d),
                  t.addEventListener("mouseup", e.onTouchEnd, !1));
            }
            (a.preventClicks || a.preventClicksPropagation) &&
            s.addEventListener("click", e.onClick, !0),
            a.cssMode && n.addEventListener("scroll", e.onScroll),
                a.updateOnWindowResize
                    ? e.on(
                        o.ios || o.android
                            ? "resize orientationchange observerUpdate"
                            : "resize observerUpdate",
                        G,
                        !0
                    )
                    : e.on("observerUpdate", G, !0);
          },
          detachEvents: function () {
            var e = this,
                t = r(),
                a = e.params,
                i = e.touchEvents,
                s = e.el,
                n = e.wrapperEl,
                o = e.device,
                l = e.support,
                d = !!a.nested;
            if (!l.touch && l.pointerEvents)
              s.removeEventListener(i.start, e.onTouchStart, !1),
                  t.removeEventListener(i.move, e.onTouchMove, d),
                  t.removeEventListener(i.end, e.onTouchEnd, !1);
            else {
              if (l.touch) {
                var p = !(
                    "onTouchStart" !== i.start ||
                    !l.passiveListener ||
                    !a.passiveListeners
                ) && { passive: !0, capture: !1 };
                s.removeEventListener(i.start, e.onTouchStart, p),
                    s.removeEventListener(i.move, e.onTouchMove, d),
                    s.removeEventListener(i.end, e.onTouchEnd, p),
                i.cancel && s.removeEventListener(i.cancel, e.onTouchEnd, p);
              }
              ((a.simulateTouch && !o.ios && !o.android) ||
                  (a.simulateTouch && !l.touch && o.ios)) &&
              (s.removeEventListener("mousedown", e.onTouchStart, !1),
                  t.removeEventListener("mousemove", e.onTouchMove, d),
                  t.removeEventListener("mouseup", e.onTouchEnd, !1));
            }
            (a.preventClicks || a.preventClicksPropagation) &&
            s.removeEventListener("click", e.onClick, !0),
            a.cssMode && n.removeEventListener("scroll", e.onScroll),
                e.off(
                    o.ios || o.android
                        ? "resize orientationchange observerUpdate"
                        : "resize observerUpdate",
                    G
                );
          },
        },
        breakpoints: {
          setBreakpoint: function () {
            var e = this,
                t = e.activeIndex,
                a = e.initialized,
                i = e.loopedSlides,
                s = void 0 === i ? 0 : i,
                r = e.params,
                n = e.$el,
                o = r.breakpoints;
            if (o && (!o || 0 !== Object.keys(o).length)) {
              var l = e.getBreakpoint(o, e.params.breakpointsBase, e.el);
              if (l && e.currentBreakpoint !== l) {
                var d = l in o ? o[l] : void 0;
                d &&
                [
                  "slidesPerView",
                  "spaceBetween",
                  "slidesPerGroup",
                  "slidesPerGroupSkip",
                  "slidesPerColumn",
                ].forEach(function (e) {
                  var t = d[e];
                  void 0 !== t &&
                  (d[e] =
                      "slidesPerView" !== e || ("AUTO" !== t && "auto" !== t)
                          ? "slidesPerView" === e
                              ? parseFloat(t)
                              : parseInt(t, 10)
                          : "auto");
                });
                var p = d || e.originalParams,
                    c = r.slidesPerColumn > 1,
                    u = p.slidesPerColumn > 1;
                c && !u
                    ? (n.removeClass(
                        r.containerModifierClass +
                        "multirow " +
                        r.containerModifierClass +
                        "multirow-column"
                    ),
                        e.emitContainerClasses())
                    : !c &&
                    u &&
                    (n.addClass(r.containerModifierClass + "multirow"),
                    "column" === p.slidesPerColumnFill &&
                    n.addClass(r.containerModifierClass + "multirow-column"),
                        e.emitContainerClasses());
                var h = p.direction && p.direction !== r.direction,
                    v = r.loop && (p.slidesPerView !== r.slidesPerView || h);
                h && a && e.changeDirection(),
                    C(e.params, p),
                    C(e, {
                      allowTouchMove: e.params.allowTouchMove,
                      allowSlideNext: e.params.allowSlideNext,
                      allowSlidePrev: e.params.allowSlidePrev,
                    }),
                    (e.currentBreakpoint = l),
                    e.emit("_beforeBreakpoint", p),
                v &&
                a &&
                (e.loopDestroy(),
                    e.loopCreate(),
                    e.updateSlides(),
                    e.slideTo(t - s + e.loopedSlides, 0, !1)),
                    e.emit("breakpoint", p);
              }
            }
          },
          getBreakpoint: function (e, t, a) {
            if ((void 0 === t && (t = "window"), e && ("container" !== t || a))) {
              var i = !1,
                  s = o(),
                  r = "window" === t ? s.innerWidth : a.clientWidth,
                  n = "window" === t ? s.innerHeight : a.clientHeight,
                  l = Object.keys(e).map(function (e) {
                    if ("string" == typeof e && 0 === e.indexOf("@")) {
                      var t = parseFloat(e.substr(1));
                      return { value: n * t, point: e };
                    }
                    return { value: e, point: e };
                  });
              l.sort(function (e, t) {
                return parseInt(e.value, 10) - parseInt(t.value, 10);
              });
              for (var d = 0; d < l.length; d += 1) {
                var p = l[d],
                    c = p.point;
                p.value <= r && (i = c);
              }
              return i || "max";
            }
          },
        },
        checkOverflow: {
          checkOverflow: function () {
            var e = this,
                t = e.params,
                a = e.isLocked,
                i =
                    e.slides.length > 0 &&
                    t.slidesOffsetBefore +
                    t.spaceBetween * (e.slides.length - 1) +
                    e.slides[0].offsetWidth * e.slides.length;
            t.slidesOffsetBefore && t.slidesOffsetAfter && i
                ? (e.isLocked = i <= e.size)
                : (e.isLocked = 1 === e.snapGrid.length),
                (e.allowSlideNext = !e.isLocked),
                (e.allowSlidePrev = !e.isLocked),
            a !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock"),
            a &&
            a !== e.isLocked &&
            ((e.isEnd = !1), e.navigation && e.navigation.update());
          },
        },
        classes: {
          addClasses: function () {
            var e,
                t,
                a,
                i = this,
                s = i.classNames,
                r = i.params,
                n = i.rtl,
                o = i.$el,
                l = i.device,
                d = i.support,
                p =
                    ((e = [
                      "initialized",
                      r.direction,
                      { "pointer-events": d.pointerEvents && !d.touch },
                      { "free-mode": r.freeMode },
                      { autoheight: r.autoHeight },
                      { rtl: n },
                      { multirow: r.slidesPerColumn > 1 },
                      {
                        "multirow-column":
                            r.slidesPerColumn > 1 && "column" === r.slidesPerColumnFill,
                      },
                      { android: l.android },
                      { ios: l.ios },
                      { "css-mode": r.cssMode },
                    ]),
                        (t = r.containerModifierClass),
                        (a = []),
                        e.forEach(function (e) {
                          "object" == typeof e
                              ? Object.keys(e).forEach(function (i) {
                                e[i] && a.push(t + i);
                              })
                              : "string" == typeof e && a.push(t + e);
                        }),
                        a);
            s.push.apply(s, p),
                o.addClass([].concat(s).join(" ")),
                i.emitContainerClasses();
          },
          removeClasses: function () {
            var e = this,
                t = e.$el,
                a = e.classNames;
            t.removeClass(a.join(" ")), e.emitContainerClasses();
          },
        },
        images: {
          loadImage: function (e, t, a, i, s, r) {
            var n,
                l = o();
            function d() {
              r && r();
            }
            m(e).parent("picture")[0] || (e.complete && s)
                ? d()
                : t
                    ? (((n = new l.Image()).onload = d),
                        (n.onerror = d),
                    i && (n.sizes = i),
                    a && (n.srcset = a),
                    t && (n.src = t))
                    : d();
          },
          preloadImages: function () {
            var e = this;
            function t() {
              null != e &&
              e &&
              !e.destroyed &&
              (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1),
              e.imagesLoaded === e.imagesToLoad.length &&
              (e.params.updateOnImagesReady && e.update(),
                  e.emit("imagesReady")));
            }
            e.imagesToLoad = e.$el.find("img");
            for (var a = 0; a < e.imagesToLoad.length; a += 1) {
              var i = e.imagesToLoad[a];
              e.loadImage(
                  i,
                  i.currentSrc || i.getAttribute("src"),
                  i.srcset || i.getAttribute("srcset"),
                  i.sizes || i.getAttribute("sizes"),
                  !0,
                  t
              );
            }
          },
        },
      },
      W = {},
      F = (function () {
        function t() {
          for (
              var e, a, i = arguments.length, s = new Array(i), r = 0;
              r < i;
              r++
          )
            s[r] = arguments[r];
          if (
              (1 === s.length &&
              s[0].constructor &&
              "Object" === Object.prototype.toString.call(s[0]).slice(8, -1)
                  ? (a = s[0])
                  : ((e = s[0]), (a = s[1])),
              a || (a = {}),
                  (a = C({}, a)),
              e && !a.el && (a.el = e),
              a.el && m(a.el).length > 1)
          ) {
            var n = [];
            return (
                m(a.el).each(function (e) {
                  var i = C({}, a, { el: e });
                  n.push(new t(i));
                }),
                    n
            );
          }
          var o = this;
          (o.__swiper__ = !0),
              (o.support = P()),
              (o.device = k({ userAgent: a.userAgent })),
              (o.browser = L()),
              (o.eventsListeners = {}),
              (o.eventsAnyListeners = []),
          void 0 === o.modules && (o.modules = {}),
              Object.keys(o.modules).forEach(function (e) {
                var t = o.modules[e];
                if (t.params) {
                  var i = Object.keys(t.params)[0],
                      s = t.params[i];
                  if ("object" != typeof s || null === s) return;
                  if (!(i in a) || !("enabled" in s)) return;
                  !0 === a[i] && (a[i] = { enabled: !0 }),
                  "object" != typeof a[i] ||
                  "enabled" in a[i] ||
                  (a[i].enabled = !0),
                  a[i] || (a[i] = { enabled: !1 });
                }
              });
          var l,
              d,
              p = C({}, R);
          return (
              o.useParams(p),
                  (o.params = C({}, p, W, a)),
                  (o.originalParams = C({}, o.params)),
                  (o.passedParams = C({}, a)),
              o.params &&
              o.params.on &&
              Object.keys(o.params.on).forEach(function (e) {
                o.on(e, o.params.on[e]);
              }),
              o.params && o.params.onAny && o.onAny(o.params.onAny),
                  (o.$ = m),
                  C(o, {
                    el: e,
                    classNames: [],
                    slides: m(),
                    slidesGrid: [],
                    snapGrid: [],
                    slidesSizesGrid: [],
                    isHorizontal: function () {
                      return "horizontal" === o.params.direction;
                    },
                    isVertical: function () {
                      return "vertical" === o.params.direction;
                    },
                    activeIndex: 0,
                    realIndex: 0,
                    isBeginning: !0,
                    isEnd: !1,
                    translate: 0,
                    previousTranslate: 0,
                    progress: 0,
                    velocity: 0,
                    animating: !1,
                    allowSlideNext: o.params.allowSlideNext,
                    allowSlidePrev: o.params.allowSlidePrev,
                    touchEvents:
                        ((l = ["touchstart", "touchmove", "touchend", "touchcancel"]),
                            (d = ["mousedown", "mousemove", "mouseup"]),
                        o.support.pointerEvents &&
                        (d = ["pointerdown", "pointermove", "pointerup"]),
                            (o.touchEventsTouch = {
                              start: l[0],
                              move: l[1],
                              end: l[2],
                              cancel: l[3],
                            }),
                            (o.touchEventsDesktop = { start: d[0], move: d[1], end: d[2] }),
                            o.support.touch || !o.params.simulateTouch
                                ? o.touchEventsTouch
                                : o.touchEventsDesktop),
                    touchEventsData: {
                      isTouched: void 0,
                      isMoved: void 0,
                      allowTouchCallbacks: void 0,
                      touchStartTime: void 0,
                      isScrolling: void 0,
                      currentTranslate: void 0,
                      startTranslate: void 0,
                      allowThresholdMove: void 0,
                      formElements:
                          "input, select, option, textarea, button, video, label",
                      lastClickTime: x(),
                      clickTimeout: void 0,
                      velocities: [],
                      allowMomentumBounce: void 0,
                      isTouchEvent: void 0,
                      startMoving: void 0,
                    },
                    allowClick: !0,
                    allowTouchMove: o.params.allowTouchMove,
                    touches: {
                      startX: 0,
                      startY: 0,
                      currentX: 0,
                      currentY: 0,
                      diff: 0,
                    },
                    imagesToLoad: [],
                    imagesLoaded: 0,
                  }),
                  o.useModules(),
                  o.emit("_swiper"),
              o.params.init && o.init(),
                  o
          );
        }
        var a,
            i,
            s,
            r = t.prototype;
        return (
            (r.setProgress = function (e, t) {
              var a = this;
              e = Math.min(Math.max(e, 0), 1);
              var i = a.minTranslate(),
                  s = (a.maxTranslate() - i) * e + i;
              a.translateTo(s, void 0 === t ? 0 : t),
                  a.updateActiveIndex(),
                  a.updateSlidesClasses();
            }),
                (r.emitContainerClasses = function () {
                  var e = this;
                  if (e.params._emitClasses && e.el) {
                    var t = e.el.className.split(" ").filter(function (t) {
                      return (
                          0 === t.indexOf("swiper-container") ||
                          0 === t.indexOf(e.params.containerModifierClass)
                      );
                    });
                    e.emit("_containerClasses", t.join(" "));
                  }
                }),
                (r.getSlideClasses = function (e) {
                  var t = this;
                  return e.className
                      .split(" ")
                      .filter(function (e) {
                        return (
                            0 === e.indexOf("swiper-slide") ||
                            0 === e.indexOf(t.params.slideClass)
                        );
                      })
                      .join(" ");
                }),
                (r.emitSlidesClasses = function () {
                  var e = this;
                  if (e.params._emitClasses && e.el) {
                    var t = [];
                    e.slides.each(function (a) {
                      var i = e.getSlideClasses(a);
                      t.push({ slideEl: a, classNames: i }),
                          e.emit("_slideClass", a, i);
                    }),
                        e.emit("_slideClasses", t);
                  }
                }),
                (r.slidesPerViewDynamic = function () {
                  var e = this,
                      t = e.params,
                      a = e.slides,
                      i = e.slidesGrid,
                      s = e.size,
                      r = e.activeIndex,
                      n = 1;
                  if (t.centeredSlides) {
                    for (
                        var o, l = a[r].swiperSlideSize, d = r + 1;
                        d < a.length;
                        d += 1
                    )
                      a[d] &&
                      !o &&
                      ((n += 1), (l += a[d].swiperSlideSize) > s && (o = !0));
                    for (var p = r - 1; p >= 0; p -= 1)
                      a[p] &&
                      !o &&
                      ((n += 1), (l += a[p].swiperSlideSize) > s && (o = !0));
                  } else
                    for (var c = r + 1; c < a.length; c += 1)
                      i[c] - i[r] < s && (n += 1);
                  return n;
                }),
                (r.update = function () {
                  var e = this;
                  if (e && !e.destroyed) {
                    var t = e.snapGrid,
                        a = e.params;
                    a.breakpoints && e.setBreakpoint(),
                        e.updateSize(),
                        e.updateSlides(),
                        e.updateProgress(),
                        e.updateSlidesClasses(),
                        e.params.freeMode
                            ? (i(), e.params.autoHeight && e.updateAutoHeight())
                            : (("auto" === e.params.slidesPerView ||
                            e.params.slidesPerView > 1) &&
                        e.isEnd &&
                        !e.params.centeredSlides
                            ? e.slideTo(e.slides.length - 1, 0, !1, !0)
                            : e.slideTo(e.activeIndex, 0, !1, !0)) || i(),
                    a.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
                        e.emit("update");
                  }
                  function i() {
                    var t = e.rtlTranslate ? -1 * e.translate : e.translate,
                        a = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
                    e.setTranslate(a), e.updateActiveIndex(), e.updateSlidesClasses();
                  }
                }),
                (r.changeDirection = function (e, t) {
                  void 0 === t && (t = !0);
                  var a = this,
                      i = a.params.direction;
                  return (
                      e || (e = "horizontal" === i ? "vertical" : "horizontal"),
                      e === i ||
                      ("horizontal" !== e && "vertical" !== e) ||
                      (a.$el
                          .removeClass("" + a.params.containerModifierClass + i)
                          .addClass("" + a.params.containerModifierClass + e),
                          a.emitContainerClasses(),
                          (a.params.direction = e),
                          a.slides.each(function (t) {
                            "vertical" === e ? (t.style.width = "") : (t.style.height = "");
                          }),
                          a.emit("changeDirection"),
                      t && a.update()),
                          a
                  );
                }),
                (r.mount = function (e) {
                  var t = this;
                  if (t.mounted) return !0;
                  var a,
                      i = m(e || t.params.el);
                  return (
                      !!(e = i[0]) &&
                      ((e.swiper = t),
                          e && e.shadowRoot && e.shadowRoot.querySelector
                              ? ((a = m(
                                  e.shadowRoot.querySelector("." + t.params.wrapperClass)
                              )).children = function (e) {
                                return i.children(e);
                              })
                              : (a = i.children("." + t.params.wrapperClass)),
                          C(t, {
                            $el: i,
                            el: e,
                            $wrapperEl: a,
                            wrapperEl: a[0],
                            mounted: !0,
                            rtl:
                                "rtl" === e.dir.toLowerCase() || "rtl" === i.css("direction"),
                            rtlTranslate:
                                "horizontal" === t.params.direction &&
                                ("rtl" === e.dir.toLowerCase() || "rtl" === i.css("direction")),
                            wrongRTL: "-webkit-box" === a.css("display"),
                          }),
                          !0)
                  );
                }),
                (r.init = function (e) {
                  var t = this;
                  return (
                      t.initialized ||
                      !1 === t.mount(e) ||
                      (t.emit("beforeInit"),
                      t.params.breakpoints && t.setBreakpoint(),
                          t.addClasses(),
                      t.params.loop && t.loopCreate(),
                          t.updateSize(),
                          t.updateSlides(),
                      t.params.watchOverflow && t.checkOverflow(),
                      t.params.grabCursor && t.setGrabCursor(),
                      t.params.preloadImages && t.preloadImages(),
                          t.params.loop
                              ? t.slideTo(
                                  t.params.initialSlide + t.loopedSlides,
                                  0,
                                  t.params.runCallbacksOnInit
                              )
                              : t.slideTo(
                                  t.params.initialSlide,
                                  0,
                                  t.params.runCallbacksOnInit
                              ),
                          t.attachEvents(),
                          (t.initialized = !0),
                          t.emit("init"),
                          t.emit("afterInit")),
                          t
                  );
                }),
                (r.destroy = function (e, t) {
                  void 0 === e && (e = !0), void 0 === t && (t = !0);
                  var a,
                      i = this,
                      s = i.params,
                      r = i.$el,
                      n = i.$wrapperEl,
                      o = i.slides;
                  return (
                      void 0 === i.params ||
                      i.destroyed ||
                      (i.emit("beforeDestroy"),
                          (i.initialized = !1),
                          i.detachEvents(),
                      s.loop && i.loopDestroy(),
                      t &&
                      (i.removeClasses(),
                          r.removeAttr("style"),
                          n.removeAttr("style"),
                      o &&
                      o.length &&
                      o
                          .removeClass(
                              [
                                s.slideVisibleClass,
                                s.slideActiveClass,
                                s.slideNextClass,
                                s.slidePrevClass,
                              ].join(" ")
                          )
                          .removeAttr("style")
                          .removeAttr("data-swiper-slide-index")),
                          i.emit("destroy"),
                          Object.keys(i.eventsListeners).forEach(function (e) {
                            i.off(e);
                          }),
                      !1 !== e &&
                      ((i.$el[0].swiper = null),
                          (a = i),
                          Object.keys(a).forEach(function (e) {
                            try {
                              a[e] = null;
                            } catch (e) {}
                            try {
                              delete a[e];
                            } catch (e) {}
                          })),
                          (i.destroyed = !0)),
                          null
                  );
                }),
                (t.extendDefaults = function (e) {
                  C(W, e);
                }),
                (t.installModule = function (e) {
                  t.prototype.modules || (t.prototype.modules = {});
                  var a = e.name || Object.keys(t.prototype.modules).length + "_" + x();
                  t.prototype.modules[a] = e;
                }),
                (t.use = function (e) {
                  return Array.isArray(e)
                      ? (e.forEach(function (e) {
                        return t.installModule(e);
                      }),
                          t)
                      : (t.installModule(e), t);
                }),
                (a = t),
                (s = [
                  {
                    key: "extendedDefaults",
                    get: function () {
                      return W;
                    },
                  },
                  {
                    key: "defaults",
                    get: function () {
                      return R;
                    },
                  },
                ]),
            (i = null) && e(a.prototype, i),
            s && e(a, s),
                t
        );
      })();
  Object.keys(V).forEach(function (e) {
    Object.keys(V[e]).forEach(function (t) {
      F.prototype[t] = V[e][t];
    });
  }),
      F.use([$, O]);
  var _ = {
        update: function (e) {
          var t = this,
              a = t.params,
              i = a.slidesPerView,
              s = a.slidesPerGroup,
              r = a.centeredSlides,
              n = t.params.virtual,
              o = n.addSlidesBefore,
              l = n.addSlidesAfter,
              d = t.virtual,
              p = d.from,
              c = d.to,
              u = d.slides,
              h = d.slidesGrid,
              v = d.renderSlide,
              f = d.offset;
          t.updateActiveIndex();
          var m,
              g,
              b,
              w = t.activeIndex || 0;
          (m = t.rtlTranslate ? "right" : t.isHorizontal() ? "left" : "top"),
              r
                  ? ((g = Math.floor(i / 2) + s + l), (b = Math.floor(i / 2) + s + o))
                  : ((g = i + (s - 1) + l), (b = s + o));
          var y = Math.max((w || 0) - b, 0),
              E = Math.min((w || 0) + g, u.length - 1),
              x = (t.slidesGrid[y] || 0) - (t.slidesGrid[0] || 0);
          function T() {
            t.updateSlides(),
                t.updateProgress(),
                t.updateSlidesClasses(),
            t.lazy && t.params.lazy.enabled && t.lazy.load();
          }
          if (
              (C(t.virtual, {
                from: y,
                to: E,
                offset: x,
                slidesGrid: t.slidesGrid,
              }),
              p === y && c === E && !e)
          )
            return (
                t.slidesGrid !== h && x !== f && t.slides.css(m, x + "px"),
                    void t.updateProgress()
            );
          if (t.params.virtual.renderExternal)
            return (
                t.params.virtual.renderExternal.call(t, {
                  offset: x,
                  from: y,
                  to: E,
                  slides: (function () {
                    for (var e = [], t = y; t <= E; t += 1) e.push(u[t]);
                    return e;
                  })(),
                }),
                    void (t.params.virtual.renderExternalUpdate && T())
            );
          var S = [],
              M = [];
          if (e) t.$wrapperEl.find("." + t.params.slideClass).remove();
          else
            for (var z = p; z <= c; z += 1)
              (z < y || z > E) &&
              t.$wrapperEl
                  .find(
                      "." +
                      t.params.slideClass +
                      '[data-swiper-slide-index="' +
                      z +
                      '"]'
                  )
                  .remove();
          for (var P = 0; P < u.length; P += 1)
            P >= y &&
            P <= E &&
            (void 0 === c || e
                ? M.push(P)
                : (P > c && M.push(P), P < p && S.push(P)));
          M.forEach(function (e) {
            t.$wrapperEl.append(v(u[e], e));
          }),
              S.sort(function (e, t) {
                return t - e;
              }).forEach(function (e) {
                t.$wrapperEl.prepend(v(u[e], e));
              }),
              t.$wrapperEl.children(".swiper-slide").css(m, x + "px"),
              T();
        },
        renderSlide: function (e, t) {
          var a = this,
              i = a.params.virtual;
          if (i.cache && a.virtual.cache[t]) return a.virtual.cache[t];
          var s = i.renderSlide
              ? m(i.renderSlide.call(a, e, t))
              : m(
                  '<div class="' +
                  a.params.slideClass +
                  '" data-swiper-slide-index="' +
                  t +
                  '">' +
                  e +
                  "</div>"
              );
          return (
              s.attr("data-swiper-slide-index") ||
              s.attr("data-swiper-slide-index", t),
              i.cache && (a.virtual.cache[t] = s),
                  s
          );
        },
        appendSlide: function (e) {
          var t = this;
          if ("object" == typeof e && "length" in e)
            for (var a = 0; a < e.length; a += 1)
              e[a] && t.virtual.slides.push(e[a]);
          else t.virtual.slides.push(e);
          t.virtual.update(!0);
        },
        prependSlide: function (e) {
          var t = this,
              a = t.activeIndex,
              i = a + 1,
              s = 1;
          if (Array.isArray(e)) {
            for (var r = 0; r < e.length; r += 1)
              e[r] && t.virtual.slides.unshift(e[r]);
            (i = a + e.length), (s = e.length);
          } else t.virtual.slides.unshift(e);
          if (t.params.virtual.cache) {
            var n = t.virtual.cache,
                o = {};
            Object.keys(n).forEach(function (e) {
              var t = n[e],
                  a = t.attr("data-swiper-slide-index");
              a && t.attr("data-swiper-slide-index", parseInt(a, 10) + 1),
                  (o[parseInt(e, 10) + s] = t);
            }),
                (t.virtual.cache = o);
          }
          t.virtual.update(!0), t.slideTo(i, 0);
        },
        removeSlide: function (e) {
          var t = this;
          if (null != e) {
            var a = t.activeIndex;
            if (Array.isArray(e))
              for (var i = e.length - 1; i >= 0; i -= 1)
                t.virtual.slides.splice(e[i], 1),
                t.params.virtual.cache && delete t.virtual.cache[e[i]],
                e[i] < a && (a -= 1),
                    (a = Math.max(a, 0));
            else
              t.virtual.slides.splice(e, 1),
              t.params.virtual.cache && delete t.virtual.cache[e],
              e < a && (a -= 1),
                  (a = Math.max(a, 0));
            t.virtual.update(!0), t.slideTo(a, 0);
          }
        },
        removeAllSlides: function () {
          var e = this;
          (e.virtual.slides = []),
          e.params.virtual.cache && (e.virtual.cache = {}),
              e.virtual.update(!0),
              e.slideTo(0, 0);
        },
      },
      q = {
        name: "virtual",
        params: {
          virtual: {
            enabled: !1,
            slides: [],
            cache: !0,
            renderSlide: null,
            renderExternal: null,
            renderExternalUpdate: !0,
            addSlidesBefore: 0,
            addSlidesAfter: 0,
          },
        },
        create: function () {
          M(this, {
            virtual: t({}, _, { slides: this.params.virtual.slides, cache: {} }),
          });
        },
        on: {
          beforeInit: function (e) {
            if (e.params.virtual.enabled) {
              e.classNames.push(e.params.containerModifierClass + "virtual");
              var t = { watchSlidesProgress: !0 };
              C(e.params, t),
                  C(e.originalParams, t),
              e.params.initialSlide || e.virtual.update();
            }
          },
          setTranslate: function (e) {
            e.params.virtual.enabled && e.virtual.update();
          },
        },
      },
      j = {
        handle: function (e) {
          var t = this,
              a = o(),
              i = r(),
              s = t.rtlTranslate,
              n = e;
          n.originalEvent && (n = n.originalEvent);
          var l = n.keyCode || n.charCode,
              d = t.params.keyboard.pageUpDown,
              p = d && 33 === l,
              c = d && 34 === l,
              u = 37 === l,
              h = 39 === l,
              v = 38 === l,
              f = 40 === l;
          if (
              !t.allowSlideNext &&
              ((t.isHorizontal() && h) || (t.isVertical() && f) || c)
          )
            return !1;
          if (
              !t.allowSlidePrev &&
              ((t.isHorizontal() && u) || (t.isVertical() && v) || p)
          )
            return !1;
          if (
              !(
                  n.shiftKey ||
                  n.altKey ||
                  n.ctrlKey ||
                  n.metaKey ||
                  (i.activeElement &&
                      i.activeElement.nodeName &&
                      ("input" === i.activeElement.nodeName.toLowerCase() ||
                          "textarea" === i.activeElement.nodeName.toLowerCase()))
              )
          ) {
            if (
                t.params.keyboard.onlyInViewport &&
                (p || c || u || h || v || f)
            ) {
              var m = !1;
              if (
                  t.$el.parents("." + t.params.slideClass).length > 0 &&
                  0 === t.$el.parents("." + t.params.slideActiveClass).length
              )
                return;
              var g = t.$el,
                  b = g[0].clientWidth,
                  w = g[0].clientHeight,
                  y = a.innerWidth,
                  E = a.innerHeight,
                  x = t.$el.offset();
              s && (x.left -= t.$el[0].scrollLeft);
              for (
                  var T = [
                        [x.left, x.top],
                        [x.left + b, x.top],
                        [x.left, x.top + w],
                        [x.left + b, x.top + w],
                      ],
                      S = 0;
                  S < T.length;
                  S += 1
              ) {
                var C = T[S];
                if (C[0] >= 0 && C[0] <= y && C[1] >= 0 && C[1] <= E) {
                  if (0 === C[0] && 0 === C[1]) continue;
                  m = !0;
                }
              }
              if (!m) return;
            }
            t.isHorizontal()
                ? ((p || c || u || h) &&
                (n.preventDefault ? n.preventDefault() : (n.returnValue = !1)),
                (((c || h) && !s) || ((p || u) && s)) && t.slideNext(),
                (((p || u) && !s) || ((c || h) && s)) && t.slidePrev())
                : ((p || c || v || f) &&
                (n.preventDefault ? n.preventDefault() : (n.returnValue = !1)),
                (c || f) && t.slideNext(),
                (p || v) && t.slidePrev()),
                t.emit("keyPress", l);
          }
        },
        enable: function () {
          var e = this,
              t = r();
          e.keyboard.enabled ||
          (m(t).on("keydown", e.keyboard.handle), (e.keyboard.enabled = !0));
        },
        disable: function () {
          var e = this,
              t = r();
          e.keyboard.enabled &&
          (m(t).off("keydown", e.keyboard.handle), (e.keyboard.enabled = !1));
        },
      },
      U = {
        name: "keyboard",
        params: { keyboard: { enabled: !1, onlyInViewport: !0, pageUpDown: !0 } },
        create: function () {
          M(this, { keyboard: t({ enabled: !1 }, j) });
        },
        on: {
          init: function (e) {
            e.params.keyboard.enabled && e.keyboard.enable();
          },
          destroy: function (e) {
            e.keyboard.enabled && e.keyboard.disable();
          },
        },
      };
  var K = {
        lastScrollTime: x(),
        lastEventBeforeSnap: void 0,
        recentWheelEvents: [],
        event: function () {
          return o().navigator.userAgent.indexOf("firefox") > -1
              ? "DOMMouseScroll"
              : (function () {
                var e = r(),
                    t = "onwheel",
                    a = t in e;
                if (!a) {
                  var i = e.createElement("div");
                  i.setAttribute(t, "return;"),
                      (a = "function" == typeof i.onwheel);
                }
                return (
                    !a &&
                    e.implementation &&
                    e.implementation.hasFeature &&
                    !0 !== e.implementation.hasFeature("", "") &&
                    (a = e.implementation.hasFeature("Events.wheel", "3.0")),
                        a
                );
              })()
                  ? "wheel"
                  : "mousewheel";
        },
        normalize: function (e) {
          var t = 0,
              a = 0,
              i = 0,
              s = 0;
          return (
              "detail" in e && (a = e.detail),
              "wheelDelta" in e && (a = -e.wheelDelta / 120),
              "wheelDeltaY" in e && (a = -e.wheelDeltaY / 120),
              "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120),
              "axis" in e && e.axis === e.HORIZONTAL_AXIS && ((t = a), (a = 0)),
                  (i = 10 * t),
                  (s = 10 * a),
              "deltaY" in e && (s = e.deltaY),
              "deltaX" in e && (i = e.deltaX),
              e.shiftKey && !i && ((i = s), (s = 0)),
              (i || s) &&
              e.deltaMode &&
              (1 === e.deltaMode
                  ? ((i *= 40), (s *= 40))
                  : ((i *= 800), (s *= 800))),
              i && !t && (t = i < 1 ? -1 : 1),
              s && !a && (a = s < 1 ? -1 : 1),
                  { spinX: t, spinY: a, pixelX: i, pixelY: s }
          );
        },
        handleMouseEnter: function () {
          this.mouseEntered = !0;
        },
        handleMouseLeave: function () {
          this.mouseEntered = !1;
        },
        handle: function (e) {
          var t = e,
              a = this,
              i = a.params.mousewheel;
          a.params.cssMode && t.preventDefault();
          var s = a.$el;
          if (
              ("container" !== a.params.mousewheel.eventsTarget &&
              (s = m(a.params.mousewheel.eventsTarget)),
              !a.mouseEntered && !s[0].contains(t.target) && !i.releaseOnEdges)
          )
            return !0;
          t.originalEvent && (t = t.originalEvent);
          var r = 0,
              n = a.rtlTranslate ? -1 : 1,
              o = K.normalize(t);
          if (i.forceToAxis)
            if (a.isHorizontal()) {
              if (!(Math.abs(o.pixelX) > Math.abs(o.pixelY))) return !0;
              r = -o.pixelX * n;
            } else {
              if (!(Math.abs(o.pixelY) > Math.abs(o.pixelX))) return !0;
              r = -o.pixelY;
            }
          else
            r =
                Math.abs(o.pixelX) > Math.abs(o.pixelY) ? -o.pixelX * n : -o.pixelY;
          if (0 === r) return !0;
          i.invert && (r = -r);
          var l = a.getTranslate() + r * i.sensitivity;
          if (
              (l >= a.minTranslate() && (l = a.minTranslate()),
              l <= a.maxTranslate() && (l = a.maxTranslate()),
              (!!a.params.loop ||
                  !(l === a.minTranslate() || l === a.maxTranslate())) &&
              a.params.nested &&
              t.stopPropagation(),
                  a.params.freeMode)
          ) {
            var d = { time: x(), delta: Math.abs(r), direction: Math.sign(r) },
                p = a.mousewheel.lastEventBeforeSnap,
                c =
                    p &&
                    d.time < p.time + 500 &&
                    d.delta <= p.delta &&
                    d.direction === p.direction;
            if (!c) {
              (a.mousewheel.lastEventBeforeSnap = void 0),
              a.params.loop && a.loopFix();
              var u = a.getTranslate() + r * i.sensitivity,
                  h = a.isBeginning,
                  v = a.isEnd;
              if (
                  (u >= a.minTranslate() && (u = a.minTranslate()),
                  u <= a.maxTranslate() && (u = a.maxTranslate()),
                      a.setTransition(0),
                      a.setTranslate(u),
                      a.updateProgress(),
                      a.updateActiveIndex(),
                      a.updateSlidesClasses(),
                  ((!h && a.isBeginning) || (!v && a.isEnd)) &&
                  a.updateSlidesClasses(),
                      a.params.freeModeSticky)
              ) {
                clearTimeout(a.mousewheel.timeout),
                    (a.mousewheel.timeout = void 0);
                var f = a.mousewheel.recentWheelEvents;
                f.length >= 15 && f.shift();
                var g = f.length ? f[f.length - 1] : void 0,
                    b = f[0];
                if (
                    (f.push(d),
                    g && (d.delta > g.delta || d.direction !== g.direction))
                )
                  f.splice(0);
                else if (
                    f.length >= 15 &&
                    d.time - b.time < 500 &&
                    b.delta - d.delta >= 1 &&
                    d.delta <= 6
                ) {
                  var w = r > 0 ? 0.8 : 0.2;
                  (a.mousewheel.lastEventBeforeSnap = d),
                      f.splice(0),
                      (a.mousewheel.timeout = E(function () {
                        a.slideToClosest(a.params.speed, !0, void 0, w);
                      }, 0));
                }
                a.mousewheel.timeout ||
                (a.mousewheel.timeout = E(function () {
                  (a.mousewheel.lastEventBeforeSnap = d),
                      f.splice(0),
                      a.slideToClosest(a.params.speed, !0, void 0, 0.5);
                }, 500));
              }
              if (
                  (c || a.emit("scroll", t),
                  a.params.autoplay &&
                  a.params.autoplayDisableOnInteraction &&
                  a.autoplay.stop(),
                  u === a.minTranslate() || u === a.maxTranslate())
              )
                return !0;
            }
          } else {
            var y = {
                  time: x(),
                  delta: Math.abs(r),
                  direction: Math.sign(r),
                  raw: e,
                },
                T = a.mousewheel.recentWheelEvents;
            T.length >= 2 && T.shift();
            var S = T.length ? T[T.length - 1] : void 0;
            if (
                (T.push(y),
                    S
                        ? (y.direction !== S.direction ||
                            y.delta > S.delta ||
                            y.time > S.time + 150) &&
                        a.mousewheel.animateSlider(y)
                        : a.mousewheel.animateSlider(y),
                    a.mousewheel.releaseScroll(y))
            )
              return !0;
          }
          return t.preventDefault ? t.preventDefault() : (t.returnValue = !1), !1;
        },
        animateSlider: function (e) {
          var t = this,
              a = o();
          return (
              !(
                  this.params.mousewheel.thresholdDelta &&
                  e.delta < this.params.mousewheel.thresholdDelta
              ) &&
              !(
                  this.params.mousewheel.thresholdTime &&
                  x() - t.mousewheel.lastScrollTime <
                  this.params.mousewheel.thresholdTime
              ) &&
              ((e.delta >= 6 && x() - t.mousewheel.lastScrollTime < 60) ||
                  (e.direction < 0
                      ? (t.isEnd && !t.params.loop) ||
                      t.animating ||
                      (t.slideNext(), t.emit("scroll", e.raw))
                      : (t.isBeginning && !t.params.loop) ||
                      t.animating ||
                      (t.slidePrev(), t.emit("scroll", e.raw)),
                      (t.mousewheel.lastScrollTime = new a.Date().getTime()),
                      !1))
          );
        },
        releaseScroll: function (e) {
          var t = this,
              a = t.params.mousewheel;
          if (e.direction < 0) {
            if (t.isEnd && !t.params.loop && a.releaseOnEdges) return !0;
          } else if (t.isBeginning && !t.params.loop && a.releaseOnEdges)
            return !0;
          return !1;
        },
        enable: function () {
          var e = this,
              t = K.event();
          if (e.params.cssMode)
            return e.wrapperEl.removeEventListener(t, e.mousewheel.handle), !0;
          if (!t) return !1;
          if (e.mousewheel.enabled) return !1;
          var a = e.$el;
          return (
              "container" !== e.params.mousewheel.eventsTarget &&
              (a = m(e.params.mousewheel.eventsTarget)),
                  a.on("mouseenter", e.mousewheel.handleMouseEnter),
                  a.on("mouseleave", e.mousewheel.handleMouseLeave),
                  a.on(t, e.mousewheel.handle),
                  (e.mousewheel.enabled = !0),
                  !0
          );
        },
        disable: function () {
          var e = this,
              t = K.event();
          if (e.params.cssMode)
            return e.wrapperEl.addEventListener(t, e.mousewheel.handle), !0;
          if (!t) return !1;
          if (!e.mousewheel.enabled) return !1;
          var a = e.$el;
          return (
              "container" !== e.params.mousewheel.eventsTarget &&
              (a = m(e.params.mousewheel.eventsTarget)),
                  a.off(t, e.mousewheel.handle),
                  (e.mousewheel.enabled = !1),
                  !0
          );
        },
      },
      Z = {
        toggleEl: function (e, t) {
          e[t ? "addClass" : "removeClass"](this.params.navigation.disabledClass),
          e[0] && "BUTTON" === e[0].tagName && (e[0].disabled = t);
        },
        update: function () {
          var e = this,
              t = e.params.navigation,
              a = e.navigation.toggleEl;
          if (!e.params.loop) {
            var i = e.navigation,
                s = i.$nextEl,
                r = i.$prevEl;
            r &&
            r.length > 0 &&
            (e.isBeginning ? a(r, !0) : a(r, !1),
                r[
                    e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"
                    ](t.lockClass)),
            s &&
            s.length > 0 &&
            (e.isEnd ? a(s, !0) : a(s, !1),
                s[
                    e.params.watchOverflow && e.isLocked
                        ? "addClass"
                        : "removeClass"
                    ](t.lockClass));
          }
        },
        onPrevClick: function (e) {
          var t = this;
          e.preventDefault(), (t.isBeginning && !t.params.loop) || t.slidePrev();
        },
        onNextClick: function (e) {
          var t = this;
          e.preventDefault(), (t.isEnd && !t.params.loop) || t.slideNext();
        },
        init: function () {
          var e,
              t,
              a = this,
              i = a.params.navigation;
          (i.nextEl || i.prevEl) &&
          (i.nextEl &&
          ((e = m(i.nextEl)),
          a.params.uniqueNavElements &&
          "string" == typeof i.nextEl &&
          e.length > 1 &&
          1 === a.$el.find(i.nextEl).length &&
          (e = a.$el.find(i.nextEl))),
          i.prevEl &&
          ((t = m(i.prevEl)),
          a.params.uniqueNavElements &&
          "string" == typeof i.prevEl &&
          t.length > 1 &&
          1 === a.$el.find(i.prevEl).length &&
          (t = a.$el.find(i.prevEl))),
          e && e.length > 0 && e.on("click", a.navigation.onNextClick),
          t && t.length > 0 && t.on("click", a.navigation.onPrevClick),
              C(a.navigation, {
                $nextEl: e,
                nextEl: e && e[0],
                $prevEl: t,
                prevEl: t && t[0],
              }));
        },
        destroy: function () {
          var e = this,
              t = e.navigation,
              a = t.$nextEl,
              i = t.$prevEl;
          a &&
          a.length &&
          (a.off("click", e.navigation.onNextClick),
              a.removeClass(e.params.navigation.disabledClass)),
          i &&
          i.length &&
          (i.off("click", e.navigation.onPrevClick),
              i.removeClass(e.params.navigation.disabledClass));
        },
      },
      J = {
        update: function () {
          var e = this,
              t = e.rtl,
              a = e.params.pagination;
          if (
              a.el &&
              e.pagination.el &&
              e.pagination.$el &&
              0 !== e.pagination.$el.length
          ) {
            var i,
                s =
                    e.virtual && e.params.virtual.enabled
                        ? e.virtual.slides.length
                        : e.slides.length,
                r = e.pagination.$el,
                n = e.params.loop
                    ? Math.ceil((s - 2 * e.loopedSlides) / e.params.slidesPerGroup)
                    : e.snapGrid.length;
            if (
                (e.params.loop
                    ? ((i = Math.ceil(
                        (e.activeIndex - e.loopedSlides) / e.params.slidesPerGroup
                    )) >
                    s - 1 - 2 * e.loopedSlides && (i -= s - 2 * e.loopedSlides),
                    i > n - 1 && (i -= n),
                    i < 0 && "bullets" !== e.params.paginationType && (i = n + i))
                    : (i = void 0 !== e.snapIndex ? e.snapIndex : e.activeIndex || 0),
                "bullets" === a.type &&
                e.pagination.bullets &&
                e.pagination.bullets.length > 0)
            ) {
              var o,
                  l,
                  d,
                  p = e.pagination.bullets;
              if (
                  (a.dynamicBullets &&
                  ((e.pagination.bulletSize = p
                      .eq(0)
                      [e.isHorizontal() ? "outerWidth" : "outerHeight"](!0)),
                      r.css(
                          e.isHorizontal() ? "width" : "height",
                          e.pagination.bulletSize * (a.dynamicMainBullets + 4) + "px"
                      ),
                  a.dynamicMainBullets > 1 &&
                  void 0 !== e.previousIndex &&
                  ((e.pagination.dynamicBulletIndex += i - e.previousIndex),
                      e.pagination.dynamicBulletIndex > a.dynamicMainBullets - 1
                          ? (e.pagination.dynamicBulletIndex =
                              a.dynamicMainBullets - 1)
                          : e.pagination.dynamicBulletIndex < 0 &&
                          (e.pagination.dynamicBulletIndex = 0)),
                      (o = i - e.pagination.dynamicBulletIndex),
                      (d =
                          ((l = o + (Math.min(p.length, a.dynamicMainBullets) - 1)) +
                              o) /
                          2)),
                      p.removeClass(
                          a.bulletActiveClass +
                          " " +
                          a.bulletActiveClass +
                          "-next " +
                          a.bulletActiveClass +
                          "-next-next " +
                          a.bulletActiveClass +
                          "-prev " +
                          a.bulletActiveClass +
                          "-prev-prev " +
                          a.bulletActiveClass +
                          "-main"
                      ),
                  r.length > 1)
              )
                p.each(function (e) {
                  var t = m(e),
                      s = t.index();
                  s === i && t.addClass(a.bulletActiveClass),
                  a.dynamicBullets &&
                  (s >= o &&
                  s <= l &&
                  t.addClass(a.bulletActiveClass + "-main"),
                  s === o &&
                  t
                      .prev()
                      .addClass(a.bulletActiveClass + "-prev")
                      .prev()
                      .addClass(a.bulletActiveClass + "-prev-prev"),
                  s === l &&
                  t
                      .next()
                      .addClass(a.bulletActiveClass + "-next")
                      .next()
                      .addClass(a.bulletActiveClass + "-next-next"));
                });
              else {
                var c = p.eq(i),
                    u = c.index();
                if ((c.addClass(a.bulletActiveClass), a.dynamicBullets)) {
                  for (var h = p.eq(o), v = p.eq(l), f = o; f <= l; f += 1)
                    p.eq(f).addClass(a.bulletActiveClass + "-main");
                  if (e.params.loop)
                    if (u >= p.length - a.dynamicMainBullets) {
                      for (var g = a.dynamicMainBullets; g >= 0; g -= 1)
                        p.eq(p.length - g).addClass(
                            a.bulletActiveClass + "-main"
                        );
                      p.eq(p.length - a.dynamicMainBullets - 1).addClass(
                          a.bulletActiveClass + "-prev"
                      );
                    } else
                      h
                          .prev()
                          .addClass(a.bulletActiveClass + "-prev")
                          .prev()
                          .addClass(a.bulletActiveClass + "-prev-prev"),
                          v
                              .next()
                              .addClass(a.bulletActiveClass + "-next")
                              .next()
                              .addClass(a.bulletActiveClass + "-next-next");
                  else
                    h
                        .prev()
                        .addClass(a.bulletActiveClass + "-prev")
                        .prev()
                        .addClass(a.bulletActiveClass + "-prev-prev"),
                        v
                            .next()
                            .addClass(a.bulletActiveClass + "-next")
                            .next()
                            .addClass(a.bulletActiveClass + "-next-next");
                }
              }
              if (a.dynamicBullets) {
                var b = Math.min(p.length, a.dynamicMainBullets + 4),
                    w =
                        (e.pagination.bulletSize * b - e.pagination.bulletSize) / 2 -
                        d * e.pagination.bulletSize,
                    y = t ? "right" : "left";
                p.css(e.isHorizontal() ? y : "top", w + "px");
              }
            }
            if (
                ("fraction" === a.type &&
                (r.find(z(a.currentClass)).text(a.formatFractionCurrent(i + 1)),
                    r.find(z(a.totalClass)).text(a.formatFractionTotal(n))),
                "progressbar" === a.type)
            ) {
              var E;
              E = a.progressbarOpposite
                  ? e.isHorizontal()
                      ? "vertical"
                      : "horizontal"
                  : e.isHorizontal()
                      ? "horizontal"
                      : "vertical";
              var x = (i + 1) / n,
                  T = 1,
                  S = 1;
              "horizontal" === E ? (T = x) : (S = x),
                  r
                      .find(z(a.progressbarFillClass))
                      .transform(
                          "translate3d(0,0,0) scaleX(" + T + ") scaleY(" + S + ")"
                      )
                      .transition(e.params.speed);
            }
            "custom" === a.type && a.renderCustom
                ? (r.html(a.renderCustom(e, i + 1, n)),
                    e.emit("paginationRender", r[0]))
                : e.emit("paginationUpdate", r[0]),
                r[
                    e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"
                    ](a.lockClass);
          }
        },
        render: function () {
          var e = this,
              t = e.params.pagination;
          if (
              t.el &&
              e.pagination.el &&
              e.pagination.$el &&
              0 !== e.pagination.$el.length
          ) {
            var a =
                    e.virtual && e.params.virtual.enabled
                        ? e.virtual.slides.length
                        : e.slides.length,
                i = e.pagination.$el,
                s = "";
            if ("bullets" === t.type) {
              var r = e.params.loop
                  ? Math.ceil((a - 2 * e.loopedSlides) / e.params.slidesPerGroup)
                  : e.snapGrid.length;
              e.params.freeMode && !e.params.loop && r > a && (r = a);
              for (var n = 0; n < r; n += 1)
                t.renderBullet
                    ? (s += t.renderBullet.call(e, n, t.bulletClass))
                    : (s +=
                        "<" +
                        t.bulletElement +
                        ' class="' +
                        t.bulletClass +
                        '"></' +
                        t.bulletElement +
                        ">");
              i.html(s), (e.pagination.bullets = i.find(z(t.bulletClass)));
            }
            "fraction" === t.type &&
            ((s = t.renderFraction
                ? t.renderFraction.call(e, t.currentClass, t.totalClass)
                : '<span class="' +
                t.currentClass +
                '"></span> / <span class="' +
                t.totalClass +
                '"></span>'),
                i.html(s)),
            "progressbar" === t.type &&
            ((s = t.renderProgressbar
                ? t.renderProgressbar.call(e, t.progressbarFillClass)
                : '<span class="' + t.progressbarFillClass + '"></span>'),
                i.html(s)),
            "custom" !== t.type &&
            e.emit("paginationRender", e.pagination.$el[0]);
          }
        },
        init: function () {
          var e = this,
              t = e.params.pagination;
          if (t.el) {
            var a = m(t.el);
            0 !== a.length &&
            (e.params.uniqueNavElements &&
            "string" == typeof t.el &&
            a.length > 1 &&
            (a = e.$el.find(t.el)),
            "bullets" === t.type && t.clickable && a.addClass(t.clickableClass),
                a.addClass(t.modifierClass + t.type),
            "bullets" === t.type &&
            t.dynamicBullets &&
            (a.addClass("" + t.modifierClass + t.type + "-dynamic"),
                (e.pagination.dynamicBulletIndex = 0),
            t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)),
            "progressbar" === t.type &&
            t.progressbarOpposite &&
            a.addClass(t.progressbarOppositeClass),
            t.clickable &&
            a.on("click", z(t.bulletClass), function (t) {
              t.preventDefault();
              var a = m(this).index() * e.params.slidesPerGroup;
              e.params.loop && (a += e.loopedSlides), e.slideTo(a);
            }),
                C(e.pagination, { $el: a, el: a[0] }));
          }
        },
        destroy: function () {
          var e = this,
              t = e.params.pagination;
          if (
              t.el &&
              e.pagination.el &&
              e.pagination.$el &&
              0 !== e.pagination.$el.length
          ) {
            var a = e.pagination.$el;
            a.removeClass(t.hiddenClass),
                a.removeClass(t.modifierClass + t.type),
            e.pagination.bullets &&
            e.pagination.bullets.removeClass(t.bulletActiveClass),
            t.clickable && a.off("click", z(t.bulletClass));
          }
        },
      },
      Q = {
        setTranslate: function () {
          var e = this;
          if (e.params.scrollbar.el && e.scrollbar.el) {
            var t = e.scrollbar,
                a = e.rtlTranslate,
                i = e.progress,
                s = t.dragSize,
                r = t.trackSize,
                n = t.$dragEl,
                o = t.$el,
                l = e.params.scrollbar,
                d = s,
                p = (r - s) * i;
            a
                ? (p = -p) > 0
                    ? ((d = s - p), (p = 0))
                    : -p + s > r && (d = r + p)
                : p < 0
                    ? ((d = s + p), (p = 0))
                    : p + s > r && (d = r - p),
                e.isHorizontal()
                    ? (n.transform("translate3d(" + p + "px, 0, 0)"),
                        (n[0].style.width = d + "px"))
                    : (n.transform("translate3d(0px, " + p + "px, 0)"),
                        (n[0].style.height = d + "px")),
            l.hide &&
            (clearTimeout(e.scrollbar.timeout),
                (o[0].style.opacity = 1),
                (e.scrollbar.timeout = setTimeout(function () {
                  (o[0].style.opacity = 0), o.transition(400);
                }, 1e3)));
          }
        },
        setTransition: function (e) {
          var t = this;
          t.params.scrollbar.el &&
          t.scrollbar.el &&
          t.scrollbar.$dragEl.transition(e);
        },
        updateSize: function () {
          var e = this;
          if (e.params.scrollbar.el && e.scrollbar.el) {
            var t = e.scrollbar,
                a = t.$dragEl,
                i = t.$el;
            (a[0].style.width = ""), (a[0].style.height = "");
            var s,
                r = e.isHorizontal() ? i[0].offsetWidth : i[0].offsetHeight,
                n = e.size / e.virtualSize,
                o = n * (r / e.size);
            (s =
                "auto" === e.params.scrollbar.dragSize
                    ? r * n
                    : parseInt(e.params.scrollbar.dragSize, 10)),
                e.isHorizontal()
                    ? (a[0].style.width = s + "px")
                    : (a[0].style.height = s + "px"),
                (i[0].style.display = n >= 1 ? "none" : ""),
            e.params.scrollbar.hide && (i[0].style.opacity = 0),
                C(t, { trackSize: r, divider: n, moveDivider: o, dragSize: s }),
                t.$el[
                    e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"
                    ](e.params.scrollbar.lockClass);
          }
        },
        getPointerPosition: function (e) {
          return this.isHorizontal()
              ? "touchstart" === e.type || "touchmove" === e.type
                  ? e.targetTouches[0].clientX
                  : e.clientX
              : "touchstart" === e.type || "touchmove" === e.type
                  ? e.targetTouches[0].clientY
                  : e.clientY;
        },
        setDragPosition: function (e) {
          var t,
              a = this,
              i = a.scrollbar,
              s = a.rtlTranslate,
              r = i.$el,
              n = i.dragSize,
              o = i.trackSize,
              l = i.dragStartPos;
          (t =
              (i.getPointerPosition(e) -
                  r.offset()[a.isHorizontal() ? "left" : "top"] -
                  (null !== l ? l : n / 2)) /
              (o - n)),
              (t = Math.max(Math.min(t, 1), 0)),
          s && (t = 1 - t);
          var d = a.minTranslate() + (a.maxTranslate() - a.minTranslate()) * t;
          a.updateProgress(d),
              a.setTranslate(d),
              a.updateActiveIndex(),
              a.updateSlidesClasses();
        },
        onDragStart: function (e) {
          var t = this,
              a = t.params.scrollbar,
              i = t.scrollbar,
              s = t.$wrapperEl,
              r = i.$el,
              n = i.$dragEl;
          (t.scrollbar.isTouched = !0),
              (t.scrollbar.dragStartPos =
                  e.target === n[0] || e.target === n
                      ? i.getPointerPosition(e) -
                      e.target.getBoundingClientRect()[
                          t.isHorizontal() ? "left" : "top"
                          ]
                      : null),
              e.preventDefault(),
              e.stopPropagation(),
              s.transition(100),
              n.transition(100),
              i.setDragPosition(e),
              clearTimeout(t.scrollbar.dragTimeout),
              r.transition(0),
          a.hide && r.css("opacity", 1),
          t.params.cssMode && t.$wrapperEl.css("scroll-snap-type", "none"),
              t.emit("scrollbarDragStart", e);
        },
        onDragMove: function (e) {
          var t = this,
              a = t.scrollbar,
              i = t.$wrapperEl,
              s = a.$el,
              r = a.$dragEl;
          t.scrollbar.isTouched &&
          (e.preventDefault ? e.preventDefault() : (e.returnValue = !1),
              a.setDragPosition(e),
              i.transition(0),
              s.transition(0),
              r.transition(0),
              t.emit("scrollbarDragMove", e));
        },
        onDragEnd: function (e) {
          var t = this,
              a = t.params.scrollbar,
              i = t.scrollbar,
              s = t.$wrapperEl,
              r = i.$el;
          t.scrollbar.isTouched &&
          ((t.scrollbar.isTouched = !1),
          t.params.cssMode &&
          (t.$wrapperEl.css("scroll-snap-type", ""), s.transition("")),
          a.hide &&
          (clearTimeout(t.scrollbar.dragTimeout),
              (t.scrollbar.dragTimeout = E(function () {
                r.css("opacity", 0), r.transition(400);
              }, 1e3))),
              t.emit("scrollbarDragEnd", e),
          a.snapOnRelease && t.slideToClosest());
        },
        enableDraggable: function () {
          var e = this;
          if (e.params.scrollbar.el) {
            var t = r(),
                a = e.scrollbar,
                i = e.touchEventsTouch,
                s = e.touchEventsDesktop,
                n = e.params,
                o = e.support,
                l = a.$el[0],
                d = !(!o.passiveListener || !n.passiveListeners) && {
                  passive: !1,
                  capture: !1,
                },
                p = !(!o.passiveListener || !n.passiveListeners) && {
                  passive: !0,
                  capture: !1,
                };
            l &&
            (o.touch
                ? (l.addEventListener(i.start, e.scrollbar.onDragStart, d),
                    l.addEventListener(i.move, e.scrollbar.onDragMove, d),
                    l.addEventListener(i.end, e.scrollbar.onDragEnd, p))
                : (l.addEventListener(s.start, e.scrollbar.onDragStart, d),
                    t.addEventListener(s.move, e.scrollbar.onDragMove, d),
                    t.addEventListener(s.end, e.scrollbar.onDragEnd, p)));
          }
        },
        disableDraggable: function () {
          var e = this;
          if (e.params.scrollbar.el) {
            var t = r(),
                a = e.scrollbar,
                i = e.touchEventsTouch,
                s = e.touchEventsDesktop,
                n = e.params,
                o = e.support,
                l = a.$el[0],
                d = !(!o.passiveListener || !n.passiveListeners) && {
                  passive: !1,
                  capture: !1,
                },
                p = !(!o.passiveListener || !n.passiveListeners) && {
                  passive: !0,
                  capture: !1,
                };
            l &&
            (o.touch
                ? (l.removeEventListener(i.start, e.scrollbar.onDragStart, d),
                    l.removeEventListener(i.move, e.scrollbar.onDragMove, d),
                    l.removeEventListener(i.end, e.scrollbar.onDragEnd, p))
                : (l.removeEventListener(s.start, e.scrollbar.onDragStart, d),
                    t.removeEventListener(s.move, e.scrollbar.onDragMove, d),
                    t.removeEventListener(s.end, e.scrollbar.onDragEnd, p)));
          }
        },
        init: function () {
          var e = this;
          if (e.params.scrollbar.el) {
            var t = e.scrollbar,
                a = e.$el,
                i = e.params.scrollbar,
                s = m(i.el);
            e.params.uniqueNavElements &&
            "string" == typeof i.el &&
            s.length > 1 &&
            1 === a.find(i.el).length &&
            (s = a.find(i.el));
            var r = s.find("." + e.params.scrollbar.dragClass);
            0 === r.length &&
            ((r = m(
                '<div class="' + e.params.scrollbar.dragClass + '"></div>'
            )),
                s.append(r)),
                C(t, { $el: s, el: s[0], $dragEl: r, dragEl: r[0] }),
            i.draggable && t.enableDraggable();
          }
        },
        destroy: function () {
          this.scrollbar.disableDraggable();
        },
      },
      ee = {
        setTransform: function (e, t) {
          var a = this.rtl,
              i = m(e),
              s = a ? -1 : 1,
              r = i.attr("data-swiper-parallax") || "0",
              n = i.attr("data-swiper-parallax-x"),
              o = i.attr("data-swiper-parallax-y"),
              l = i.attr("data-swiper-parallax-scale"),
              d = i.attr("data-swiper-parallax-opacity");
          if (
              (n || o
                  ? ((n = n || "0"), (o = o || "0"))
                  : this.isHorizontal()
                      ? ((n = r), (o = "0"))
                      : ((o = r), (n = "0")),
                  (n =
                      n.indexOf("%") >= 0
                          ? parseInt(n, 10) * t * s + "%"
                          : n * t * s + "px"),
                  (o = o.indexOf("%") >= 0 ? parseInt(o, 10) * t + "%" : o * t + "px"),
              null != d)
          ) {
            var p = d - (d - 1) * (1 - Math.abs(t));
            i[0].style.opacity = p;
          }
          if (null == l) i.transform("translate3d(" + n + ", " + o + ", 0px)");
          else {
            var c = l - (l - 1) * (1 - Math.abs(t));
            i.transform(
                "translate3d(" + n + ", " + o + ", 0px) scale(" + c + ")"
            );
          }
        },
        setTranslate: function () {
          var e = this,
              t = e.$el,
              a = e.slides,
              i = e.progress,
              s = e.snapGrid;
          t
              .children(
                  "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]"
              )
              .each(function (t) {
                e.parallax.setTransform(t, i);
              }),
              a.each(function (t, a) {
                var r = t.progress;
                e.params.slidesPerGroup > 1 &&
                "auto" !== e.params.slidesPerView &&
                (r += Math.ceil(a / 2) - i * (s.length - 1)),
                    (r = Math.min(Math.max(r, -1), 1)),
                    m(t)
                        .find(
                            "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]"
                        )
                        .each(function (t) {
                          e.parallax.setTransform(t, r);
                        });
              });
        },
        setTransition: function (e) {
          void 0 === e && (e = this.params.speed);
          this.$el
              .find(
                  "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]"
              )
              .each(function (t) {
                var a = m(t),
                    i = parseInt(a.attr("data-swiper-parallax-duration"), 10) || e;
                0 === e && (i = 0), a.transition(i);
              });
        },
      },
      te = {
        getDistanceBetweenTouches: function (e) {
          if (e.targetTouches.length < 2) return 1;
          var t = e.targetTouches[0].pageX,
              a = e.targetTouches[0].pageY,
              i = e.targetTouches[1].pageX,
              s = e.targetTouches[1].pageY;
          return Math.sqrt(Math.pow(i - t, 2) + Math.pow(s - a, 2));
        },
        onGestureStart: function (e) {
          var t = this,
              a = t.support,
              i = t.params.zoom,
              s = t.zoom,
              r = s.gesture;
          if (
              ((s.fakeGestureTouched = !1), (s.fakeGestureMoved = !1), !a.gestures)
          ) {
            if (
                "touchstart" !== e.type ||
                ("touchstart" === e.type && e.targetTouches.length < 2)
            )
              return;
            (s.fakeGestureTouched = !0),
                (r.scaleStart = te.getDistanceBetweenTouches(e));
          }
          (r.$slideEl && r.$slideEl.length) ||
          ((r.$slideEl = m(e.target).closest("." + t.params.slideClass)),
          0 === r.$slideEl.length && (r.$slideEl = t.slides.eq(t.activeIndex)),
              (r.$imageEl = r.$slideEl.find(
                  "img, svg, canvas, picture, .swiper-zoom-target"
              )),
              (r.$imageWrapEl = r.$imageEl.parent("." + i.containerClass)),
              (r.maxRatio = r.$imageWrapEl.attr("data-swiper-zoom") || i.maxRatio),
          0 !== r.$imageWrapEl.length)
              ? (r.$imageEl && r.$imageEl.transition(0), (t.zoom.isScaling = !0))
              : (r.$imageEl = void 0);
        },
        onGestureChange: function (e) {
          var t = this,
              a = t.support,
              i = t.params.zoom,
              s = t.zoom,
              r = s.gesture;
          if (!a.gestures) {
            if (
                "touchmove" !== e.type ||
                ("touchmove" === e.type && e.targetTouches.length < 2)
            )
              return;
            (s.fakeGestureMoved = !0),
                (r.scaleMove = te.getDistanceBetweenTouches(e));
          }
          r.$imageEl && 0 !== r.$imageEl.length
              ? (a.gestures
                  ? (s.scale = e.scale * s.currentScale)
                  : (s.scale = (r.scaleMove / r.scaleStart) * s.currentScale),
              s.scale > r.maxRatio &&
              (s.scale =
                  r.maxRatio - 1 + Math.pow(s.scale - r.maxRatio + 1, 0.5)),
              s.scale < i.minRatio &&
              (s.scale =
                  i.minRatio + 1 - Math.pow(i.minRatio - s.scale + 1, 0.5)),
                  r.$imageEl.transform("translate3d(0,0,0) scale(" + s.scale + ")"))
              : "gesturechange" === e.type && s.onGestureStart(e);
        },
        onGestureEnd: function (e) {
          var t = this,
              a = t.device,
              i = t.support,
              s = t.params.zoom,
              r = t.zoom,
              n = r.gesture;
          if (!i.gestures) {
            if (!r.fakeGestureTouched || !r.fakeGestureMoved) return;
            if (
                "touchend" !== e.type ||
                ("touchend" === e.type && e.changedTouches.length < 2 && !a.android)
            )
              return;
            (r.fakeGestureTouched = !1), (r.fakeGestureMoved = !1);
          }
          n.$imageEl &&
          0 !== n.$imageEl.length &&
          ((r.scale = Math.max(Math.min(r.scale, n.maxRatio), s.minRatio)),
              n.$imageEl
                  .transition(t.params.speed)
                  .transform("translate3d(0,0,0) scale(" + r.scale + ")"),
              (r.currentScale = r.scale),
              (r.isScaling = !1),
          1 === r.scale && (n.$slideEl = void 0));
        },
        onTouchStart: function (e) {
          var t = this.device,
              a = this.zoom,
              i = a.gesture,
              s = a.image;
          i.$imageEl &&
          0 !== i.$imageEl.length &&
          (s.isTouched ||
              (t.android && e.cancelable && e.preventDefault(),
                  (s.isTouched = !0),
                  (s.touchesStart.x =
                      "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX),
                  (s.touchesStart.y =
                      "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY)));
        },
        onTouchMove: function (e) {
          var t = this,
              a = t.zoom,
              i = a.gesture,
              s = a.image,
              r = a.velocity;
          if (
              i.$imageEl &&
              0 !== i.$imageEl.length &&
              ((t.allowClick = !1), s.isTouched && i.$slideEl)
          ) {
            s.isMoved ||
            ((s.width = i.$imageEl[0].offsetWidth),
                (s.height = i.$imageEl[0].offsetHeight),
                (s.startX = T(i.$imageWrapEl[0], "x") || 0),
                (s.startY = T(i.$imageWrapEl[0], "y") || 0),
                (i.slideWidth = i.$slideEl[0].offsetWidth),
                (i.slideHeight = i.$slideEl[0].offsetHeight),
                i.$imageWrapEl.transition(0),
            t.rtl && ((s.startX = -s.startX), (s.startY = -s.startY)));
            var n = s.width * a.scale,
                o = s.height * a.scale;
            if (!(n < i.slideWidth && o < i.slideHeight)) {
              if (
                  ((s.minX = Math.min(i.slideWidth / 2 - n / 2, 0)),
                      (s.maxX = -s.minX),
                      (s.minY = Math.min(i.slideHeight / 2 - o / 2, 0)),
                      (s.maxY = -s.minY),
                      (s.touchesCurrent.x =
                          "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX),
                      (s.touchesCurrent.y =
                          "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY),
                  !s.isMoved && !a.isScaling)
              ) {
                if (
                    t.isHorizontal() &&
                    ((Math.floor(s.minX) === Math.floor(s.startX) &&
                            s.touchesCurrent.x < s.touchesStart.x) ||
                        (Math.floor(s.maxX) === Math.floor(s.startX) &&
                            s.touchesCurrent.x > s.touchesStart.x))
                )
                  return void (s.isTouched = !1);
                if (
                    !t.isHorizontal() &&
                    ((Math.floor(s.minY) === Math.floor(s.startY) &&
                            s.touchesCurrent.y < s.touchesStart.y) ||
                        (Math.floor(s.maxY) === Math.floor(s.startY) &&
                            s.touchesCurrent.y > s.touchesStart.y))
                )
                  return void (s.isTouched = !1);
              }
              e.cancelable && e.preventDefault(),
                  e.stopPropagation(),
                  (s.isMoved = !0),
                  (s.currentX = s.touchesCurrent.x - s.touchesStart.x + s.startX),
                  (s.currentY = s.touchesCurrent.y - s.touchesStart.y + s.startY),
              s.currentX < s.minX &&
              (s.currentX =
                  s.minX + 1 - Math.pow(s.minX - s.currentX + 1, 0.8)),
              s.currentX > s.maxX &&
              (s.currentX =
                  s.maxX - 1 + Math.pow(s.currentX - s.maxX + 1, 0.8)),
              s.currentY < s.minY &&
              (s.currentY =
                  s.minY + 1 - Math.pow(s.minY - s.currentY + 1, 0.8)),
              s.currentY > s.maxY &&
              (s.currentY =
                  s.maxY - 1 + Math.pow(s.currentY - s.maxY + 1, 0.8)),
              r.prevPositionX || (r.prevPositionX = s.touchesCurrent.x),
              r.prevPositionY || (r.prevPositionY = s.touchesCurrent.y),
              r.prevTime || (r.prevTime = Date.now()),
                  (r.x =
                      (s.touchesCurrent.x - r.prevPositionX) /
                      (Date.now() - r.prevTime) /
                      2),
                  (r.y =
                      (s.touchesCurrent.y - r.prevPositionY) /
                      (Date.now() - r.prevTime) /
                      2),
              Math.abs(s.touchesCurrent.x - r.prevPositionX) < 2 && (r.x = 0),
              Math.abs(s.touchesCurrent.y - r.prevPositionY) < 2 && (r.y = 0),
                  (r.prevPositionX = s.touchesCurrent.x),
                  (r.prevPositionY = s.touchesCurrent.y),
                  (r.prevTime = Date.now()),
                  i.$imageWrapEl.transform(
                      "translate3d(" + s.currentX + "px, " + s.currentY + "px,0)"
                  );
            }
          }
        },
        onTouchEnd: function () {
          var e = this.zoom,
              t = e.gesture,
              a = e.image,
              i = e.velocity;
          if (t.$imageEl && 0 !== t.$imageEl.length) {
            if (!a.isTouched || !a.isMoved)
              return (a.isTouched = !1), void (a.isMoved = !1);
            (a.isTouched = !1), (a.isMoved = !1);
            var s = 300,
                r = 300,
                n = i.x * s,
                o = a.currentX + n,
                l = i.y * r,
                d = a.currentY + l;
            0 !== i.x && (s = Math.abs((o - a.currentX) / i.x)),
            0 !== i.y && (r = Math.abs((d - a.currentY) / i.y));
            var p = Math.max(s, r);
            (a.currentX = o), (a.currentY = d);
            var c = a.width * e.scale,
                u = a.height * e.scale;
            (a.minX = Math.min(t.slideWidth / 2 - c / 2, 0)),
                (a.maxX = -a.minX),
                (a.minY = Math.min(t.slideHeight / 2 - u / 2, 0)),
                (a.maxY = -a.minY),
                (a.currentX = Math.max(Math.min(a.currentX, a.maxX), a.minX)),
                (a.currentY = Math.max(Math.min(a.currentY, a.maxY), a.minY)),
                t.$imageWrapEl
                    .transition(p)
                    .transform(
                        "translate3d(" + a.currentX + "px, " + a.currentY + "px,0)"
                    );
          }
        },
        onTransitionEnd: function () {
          var e = this,
              t = e.zoom,
              a = t.gesture;
          a.$slideEl &&
          e.previousIndex !== e.activeIndex &&
          (a.$imageEl && a.$imageEl.transform("translate3d(0,0,0) scale(1)"),
          a.$imageWrapEl && a.$imageWrapEl.transform("translate3d(0,0,0)"),
              (t.scale = 1),
              (t.currentScale = 1),
              (a.$slideEl = void 0),
              (a.$imageEl = void 0),
              (a.$imageWrapEl = void 0));
        },
        toggle: function (e) {
          var t = this.zoom;
          t.scale && 1 !== t.scale ? t.out() : t.in(e);
        },
        in: function (e) {
          var t,
              a,
              i,
              s,
              r,
              n,
              l,
              d,
              p,
              c,
              u,
              h,
              v,
              f,
              m,
              g,
              b = this,
              w = o(),
              y = b.zoom,
              E = b.params.zoom,
              x = y.gesture,
              T = y.image;
          (x.$slideEl ||
          (b.params.virtual && b.params.virtual.enabled && b.virtual
              ? (x.$slideEl = b.$wrapperEl.children(
                  "." + b.params.slideActiveClass
              ))
              : (x.$slideEl = b.slides.eq(b.activeIndex)),
              (x.$imageEl = x.$slideEl.find(
                  "img, svg, canvas, picture, .swiper-zoom-target"
              )),
              (x.$imageWrapEl = x.$imageEl.parent("." + E.containerClass))),
          x.$imageEl && 0 !== x.$imageEl.length) &&
          (x.$slideEl.addClass("" + E.zoomedSlideClass),
              void 0 === T.touchesStart.x && e
                  ? ((t =
                      "touchend" === e.type ? e.changedTouches[0].pageX : e.pageX),
                      (a = "touchend" === e.type ? e.changedTouches[0].pageY : e.pageY))
                  : ((t = T.touchesStart.x), (a = T.touchesStart.y)),
              (y.scale = x.$imageWrapEl.attr("data-swiper-zoom") || E.maxRatio),
              (y.currentScale =
                  x.$imageWrapEl.attr("data-swiper-zoom") || E.maxRatio),
              e
                  ? ((m = x.$slideEl[0].offsetWidth),
                      (g = x.$slideEl[0].offsetHeight),
                      (i = x.$slideEl.offset().left + w.scrollX + m / 2 - t),
                      (s = x.$slideEl.offset().top + w.scrollY + g / 2 - a),
                      (l = x.$imageEl[0].offsetWidth),
                      (d = x.$imageEl[0].offsetHeight),
                      (p = l * y.scale),
                      (c = d * y.scale),
                      (v = -(u = Math.min(m / 2 - p / 2, 0))),
                      (f = -(h = Math.min(g / 2 - c / 2, 0))),
                  (r = i * y.scale) < u && (r = u),
                  r > v && (r = v),
                  (n = s * y.scale) < h && (n = h),
                  n > f && (n = f))
                  : ((r = 0), (n = 0)),
              x.$imageWrapEl
                  .transition(300)
                  .transform("translate3d(" + r + "px, " + n + "px,0)"),
              x.$imageEl
                  .transition(300)
                  .transform("translate3d(0,0,0) scale(" + y.scale + ")"));
        },
        out: function () {
          var e = this,
              t = e.zoom,
              a = e.params.zoom,
              i = t.gesture;
          i.$slideEl ||
          (e.params.virtual && e.params.virtual.enabled && e.virtual
              ? (i.$slideEl = e.$wrapperEl.children(
                  "." + e.params.slideActiveClass
              ))
              : (i.$slideEl = e.slides.eq(e.activeIndex)),
              (i.$imageEl = i.$slideEl.find(
                  "img, svg, canvas, picture, .swiper-zoom-target"
              )),
              (i.$imageWrapEl = i.$imageEl.parent("." + a.containerClass))),
          i.$imageEl &&
          0 !== i.$imageEl.length &&
          ((t.scale = 1),
              (t.currentScale = 1),
              i.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"),
              i.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"),
              i.$slideEl.removeClass("" + a.zoomedSlideClass),
              (i.$slideEl = void 0));
        },
        toggleGestures: function (e) {
          var t = this,
              a = t.zoom,
              i = a.slideSelector,
              s = a.passiveListener;
          t.$wrapperEl[e]("gesturestart", i, a.onGestureStart, s),
              t.$wrapperEl[e]("gesturechange", i, a.onGestureChange, s),
              t.$wrapperEl[e]("gestureend", i, a.onGestureEnd, s);
        },
        enableGestures: function () {
          this.zoom.gesturesEnabled ||
          ((this.zoom.gesturesEnabled = !0), this.zoom.toggleGestures("on"));
        },
        disableGestures: function () {
          this.zoom.gesturesEnabled &&
          ((this.zoom.gesturesEnabled = !1), this.zoom.toggleGestures("off"));
        },
        enable: function () {
          var e = this,
              t = e.support,
              a = e.zoom;
          if (!a.enabled) {
            a.enabled = !0;
            var i = !(
                    "touchstart" !== e.touchEvents.start ||
                    !t.passiveListener ||
                    !e.params.passiveListeners
                ) && { passive: !0, capture: !1 },
                s = !t.passiveListener || { passive: !1, capture: !0 },
                r = "." + e.params.slideClass;
            (e.zoom.passiveListener = i),
                (e.zoom.slideSelector = r),
                t.gestures
                    ? (e.$wrapperEl.on(e.touchEvents.start, e.zoom.enableGestures, i),
                        e.$wrapperEl.on(e.touchEvents.end, e.zoom.disableGestures, i))
                    : "touchstart" === e.touchEvents.start &&
                    (e.$wrapperEl.on(e.touchEvents.start, r, a.onGestureStart, i),
                        e.$wrapperEl.on(e.touchEvents.move, r, a.onGestureChange, s),
                        e.$wrapperEl.on(e.touchEvents.end, r, a.onGestureEnd, i),
                    e.touchEvents.cancel &&
                    e.$wrapperEl.on(e.touchEvents.cancel, r, a.onGestureEnd, i)),
                e.$wrapperEl.on(
                    e.touchEvents.move,
                    "." + e.params.zoom.containerClass,
                    a.onTouchMove,
                    s
                );
          }
        },
        disable: function () {
          var e = this,
              t = e.zoom;
          if (t.enabled) {
            var a = e.support;
            e.zoom.enabled = !1;
            var i = !(
                    "touchstart" !== e.touchEvents.start ||
                    !a.passiveListener ||
                    !e.params.passiveListeners
                ) && { passive: !0, capture: !1 },
                s = !a.passiveListener || { passive: !1, capture: !0 },
                r = "." + e.params.slideClass;
            a.gestures
                ? (e.$wrapperEl.off(e.touchEvents.start, e.zoom.enableGestures, i),
                    e.$wrapperEl.off(e.touchEvents.end, e.zoom.disableGestures, i))
                : "touchstart" === e.touchEvents.start &&
                (e.$wrapperEl.off(e.touchEvents.start, r, t.onGestureStart, i),
                    e.$wrapperEl.off(e.touchEvents.move, r, t.onGestureChange, s),
                    e.$wrapperEl.off(e.touchEvents.end, r, t.onGestureEnd, i),
                e.touchEvents.cancel &&
                e.$wrapperEl.off(e.touchEvents.cancel, r, t.onGestureEnd, i)),
                e.$wrapperEl.off(
                    e.touchEvents.move,
                    "." + e.params.zoom.containerClass,
                    t.onTouchMove,
                    s
                );
          }
        },
      },
      ae = {
        loadInSlide: function (e, t) {
          void 0 === t && (t = !0);
          var a = this,
              i = a.params.lazy;
          if (void 0 !== e && 0 !== a.slides.length) {
            var s =
                    a.virtual && a.params.virtual.enabled
                        ? a.$wrapperEl.children(
                            "." +
                            a.params.slideClass +
                            '[data-swiper-slide-index="' +
                            e +
                            '"]'
                        )
                        : a.slides.eq(e),
                r = s.find(
                    "." +
                    i.elementClass +
                    ":not(." +
                    i.loadedClass +
                    "):not(." +
                    i.loadingClass +
                    ")"
                );
            !s.hasClass(i.elementClass) ||
            s.hasClass(i.loadedClass) ||
            s.hasClass(i.loadingClass) ||
            r.push(s[0]),
            0 !== r.length &&
            r.each(function (e) {
              var r = m(e);
              r.addClass(i.loadingClass);
              var n = r.attr("data-background"),
                  o = r.attr("data-src"),
                  l = r.attr("data-srcset"),
                  d = r.attr("data-sizes"),
                  p = r.parent("picture");
              a.loadImage(r[0], o || n, l, d, !1, function () {
                if (null != a && a && (!a || a.params) && !a.destroyed) {
                  if (
                      (n
                          ? (r.css("background-image", 'url("' + n + '")'),
                              r.removeAttr("data-background"))
                          : (l &&
                          (r.attr("srcset", l), r.removeAttr("data-srcset")),
                          d && (r.attr("sizes", d), r.removeAttr("data-sizes")),
                          p.length &&
                          p.children("source").each(function (e) {
                            var t = m(e);
                            t.attr("data-srcset") &&
                            (t.attr("srcset", t.attr("data-srcset")),
                                t.removeAttr("data-srcset"));
                          }),
                          o && (r.attr("src", o), r.removeAttr("data-src"))),
                          r.addClass(i.loadedClass).removeClass(i.loadingClass),
                          s.find("." + i.preloaderClass).remove(),
                      a.params.loop && t)
                  ) {
                    var e = s.attr("data-swiper-slide-index");
                    if (s.hasClass(a.params.slideDuplicateClass)) {
                      var c = a.$wrapperEl.children(
                          '[data-swiper-slide-index="' +
                          e +
                          '"]:not(.' +
                          a.params.slideDuplicateClass +
                          ")"
                      );
                      a.lazy.loadInSlide(c.index(), !1);
                    } else {
                      var u = a.$wrapperEl.children(
                          "." +
                          a.params.slideDuplicateClass +
                          '[data-swiper-slide-index="' +
                          e +
                          '"]'
                      );
                      a.lazy.loadInSlide(u.index(), !1);
                    }
                  }
                  a.emit("lazyImageReady", s[0], r[0]),
                  a.params.autoHeight && a.updateAutoHeight();
                }
              }),
                  a.emit("lazyImageLoad", s[0], r[0]);
            });
          }
        },
        load: function () {
          var e = this,
              t = e.$wrapperEl,
              a = e.params,
              i = e.slides,
              s = e.activeIndex,
              r = e.virtual && a.virtual.enabled,
              n = a.lazy,
              o = a.slidesPerView;
          function l(e) {
            if (r) {
              if (
                  t.children(
                      "." + a.slideClass + '[data-swiper-slide-index="' + e + '"]'
                  ).length
              )
                return !0;
            } else if (i[e]) return !0;
            return !1;
          }
          function d(e) {
            return r ? m(e).attr("data-swiper-slide-index") : m(e).index();
          }
          if (
              ("auto" === o && (o = 0),
              e.lazy.initialImageLoaded || (e.lazy.initialImageLoaded = !0),
                  e.params.watchSlidesVisibility)
          )
            t.children("." + a.slideVisibleClass).each(function (t) {
              var a = r ? m(t).attr("data-swiper-slide-index") : m(t).index();
              e.lazy.loadInSlide(a);
            });
          else if (o > 1)
            for (var p = s; p < s + o; p += 1) l(p) && e.lazy.loadInSlide(p);
          else e.lazy.loadInSlide(s);
          if (n.loadPrevNext)
            if (o > 1 || (n.loadPrevNextAmount && n.loadPrevNextAmount > 1)) {
              for (
                  var c = n.loadPrevNextAmount,
                      u = o,
                      h = Math.min(s + u + Math.max(c, u), i.length),
                      v = Math.max(s - Math.max(u, c), 0),
                      f = s + o;
                  f < h;
                  f += 1
              )
                l(f) && e.lazy.loadInSlide(f);
              for (var g = v; g < s; g += 1) l(g) && e.lazy.loadInSlide(g);
            } else {
              var b = t.children("." + a.slideNextClass);
              b.length > 0 && e.lazy.loadInSlide(d(b));
              var w = t.children("." + a.slidePrevClass);
              w.length > 0 && e.lazy.loadInSlide(d(w));
            }
        },
        checkInViewOnLoad: function () {
          var e = o(),
              t = this;
          if (t && !t.destroyed) {
            var a = t.params.lazy.scrollingElement
                    ? m(t.params.lazy.scrollingElement)
                    : m(e),
                i = a[0] === e,
                s = i ? e.innerWidth : a[0].offsetWidth,
                r = i ? e.innerHeight : a[0].offsetHeight,
                n = t.$el.offset(),
                l = !1;
            t.rtlTranslate && (n.left -= t.$el[0].scrollLeft);
            for (
                var d = [
                      [n.left, n.top],
                      [n.left + t.width, n.top],
                      [n.left, n.top + t.height],
                      [n.left + t.width, n.top + t.height],
                    ],
                    p = 0;
                p < d.length;
                p += 1
            ) {
              var c = d[p];
              if (c[0] >= 0 && c[0] <= s && c[1] >= 0 && c[1] <= r) {
                if (0 === c[0] && 0 === c[1]) continue;
                l = !0;
              }
            }
            l
                ? (t.lazy.load(), a.off("scroll", t.lazy.checkInViewOnLoad))
                : t.lazy.scrollHandlerAttached ||
                ((t.lazy.scrollHandlerAttached = !0),
                    a.on("scroll", t.lazy.checkInViewOnLoad));
          }
        },
      },
      ie = {
        LinearSpline: function (e, t) {
          var a,
              i,
              s,
              r,
              n,
              o = function (e, t) {
                for (i = -1, a = e.length; a - i > 1; )
                  e[(s = (a + i) >> 1)] <= t ? (i = s) : (a = s);
                return a;
              };
          return (
              (this.x = e),
                  (this.y = t),
                  (this.lastIndex = e.length - 1),
                  (this.interpolate = function (e) {
                    return e
                        ? ((n = o(this.x, e)),
                            (r = n - 1),
                        ((e - this.x[r]) * (this.y[n] - this.y[r])) /
                        (this.x[n] - this.x[r]) +
                        this.y[r])
                        : 0;
                  }),
                  this
          );
        },
        getInterpolateFunction: function (e) {
          var t = this;
          t.controller.spline ||
          (t.controller.spline = t.params.loop
              ? new ie.LinearSpline(t.slidesGrid, e.slidesGrid)
              : new ie.LinearSpline(t.snapGrid, e.snapGrid));
        },
        setTranslate: function (e, t) {
          var a,
              i,
              s = this,
              r = s.controller.control,
              n = s.constructor;
          function o(e) {
            var t = s.rtlTranslate ? -s.translate : s.translate;
            "slide" === s.params.controller.by &&
            (s.controller.getInterpolateFunction(e),
                (i = -s.controller.spline.interpolate(-t))),
            (i && "container" !== s.params.controller.by) ||
            ((a =
                (e.maxTranslate() - e.minTranslate()) /
                (s.maxTranslate() - s.minTranslate())),
                (i = (t - s.minTranslate()) * a + e.minTranslate())),
            s.params.controller.inverse && (i = e.maxTranslate() - i),
                e.updateProgress(i),
                e.setTranslate(i, s),
                e.updateActiveIndex(),
                e.updateSlidesClasses();
          }
          if (Array.isArray(r))
            for (var l = 0; l < r.length; l += 1)
              r[l] !== t && r[l] instanceof n && o(r[l]);
          else r instanceof n && t !== r && o(r);
        },
        setTransition: function (e, t) {
          var a,
              i = this,
              s = i.constructor,
              r = i.controller.control;
          function n(t) {
            t.setTransition(e, i),
            0 !== e &&
            (t.transitionStart(),
            t.params.autoHeight &&
            E(function () {
              t.updateAutoHeight();
            }),
                t.$wrapperEl.transitionEnd(function () {
                  r &&
                  (t.params.loop &&
                  "slide" === i.params.controller.by &&
                  t.loopFix(),
                      t.transitionEnd());
                }));
          }
          if (Array.isArray(r))
            for (a = 0; a < r.length; a += 1)
              r[a] !== t && r[a] instanceof s && n(r[a]);
          else r instanceof s && t !== r && n(r);
        },
      },
      se = {
        getRandomNumber: function (e) {
          void 0 === e && (e = 16);
          return "x".repeat(e).replace(/x/g, function () {
            return Math.round(16 * Math.random()).toString(16);
          });
        },
        makeElFocusable: function (e) {
          return e.attr("tabIndex", "0"), e;
        },
        makeElNotFocusable: function (e) {
          return e.attr("tabIndex", "-1"), e;
        },
        addElRole: function (e, t) {
          return e.attr("role", t), e;
        },
        addElRoleDescription: function (e, t) {
          return e.attr("aria-roledescription", t), e;
        },
        addElControls: function (e, t) {
          return e.attr("aria-controls", t), e;
        },
        addElLabel: function (e, t) {
          return e.attr("aria-label", t), e;
        },
        addElId: function (e, t) {
          return e.attr("id", t), e;
        },
        addElLive: function (e, t) {
          return e.attr("aria-live", t), e;
        },
        disableEl: function (e) {
          return e.attr("aria-disabled", !0), e;
        },
        enableEl: function (e) {
          return e.attr("aria-disabled", !1), e;
        },
        onEnterOrSpaceKey: function (e) {
          if (13 === e.keyCode || 32 === e.keyCode) {
            var t = this,
                a = t.params.a11y,
                i = m(e.target);
            t.navigation &&
            t.navigation.$nextEl &&
            i.is(t.navigation.$nextEl) &&
            ((t.isEnd && !t.params.loop) || t.slideNext(),
                t.isEnd
                    ? t.a11y.notify(a.lastSlideMessage)
                    : t.a11y.notify(a.nextSlideMessage)),
            t.navigation &&
            t.navigation.$prevEl &&
            i.is(t.navigation.$prevEl) &&
            ((t.isBeginning && !t.params.loop) || t.slidePrev(),
                t.isBeginning
                    ? t.a11y.notify(a.firstSlideMessage)
                    : t.a11y.notify(a.prevSlideMessage)),
            t.pagination &&
            i.is(z(t.params.pagination.bulletClass)) &&
            i[0].click();
          }
        },
        notify: function (e) {
          var t = this.a11y.liveRegion;
          0 !== t.length && (t.html(""), t.html(e));
        },
        updateNavigation: function () {
          var e = this;
          if (!e.params.loop && e.navigation) {
            var t = e.navigation,
                a = t.$nextEl,
                i = t.$prevEl;
            i &&
            i.length > 0 &&
            (e.isBeginning
                ? (e.a11y.disableEl(i), e.a11y.makeElNotFocusable(i))
                : (e.a11y.enableEl(i), e.a11y.makeElFocusable(i))),
            a &&
            a.length > 0 &&
            (e.isEnd
                ? (e.a11y.disableEl(a), e.a11y.makeElNotFocusable(a))
                : (e.a11y.enableEl(a), e.a11y.makeElFocusable(a)));
          }
        },
        updatePagination: function () {
          var e = this,
              t = e.params.a11y;
          e.pagination &&
          e.params.pagination.clickable &&
          e.pagination.bullets &&
          e.pagination.bullets.length &&
          e.pagination.bullets.each(function (a) {
            var i = m(a);
            e.a11y.makeElFocusable(i),
            e.params.pagination.renderBullet ||
            (e.a11y.addElRole(i, "button"),
                e.a11y.addElLabel(
                    i,
                    t.paginationBulletMessage.replace(
                        /\{\{index\}\}/,
                        i.index() + 1
                    )
                ));
          });
        },
        init: function () {
          var e = this,
              t = e.params.a11y;
          e.$el.append(e.a11y.liveRegion);
          var a = e.$el;
          t.containerRoleDescriptionMessage &&
          e.a11y.addElRoleDescription(a, t.containerRoleDescriptionMessage),
          t.containerMessage && e.a11y.addElLabel(a, t.containerMessage);
          var i,
              s,
              r,
              n = e.$wrapperEl,
              o = n.attr("id") || "swiper-wrapper-" + e.a11y.getRandomNumber(16);
          e.a11y.addElId(n, o),
              (i =
                  e.params.autoplay && e.params.autoplay.enabled ? "off" : "polite"),
              e.a11y.addElLive(n, i),
          t.itemRoleDescriptionMessage &&
          e.a11y.addElRoleDescription(
              m(e.slides),
              t.itemRoleDescriptionMessage
          ),
              e.a11y.addElRole(m(e.slides), t.slideRole),
              e.slides.each(function (a) {
                var i = m(a),
                    s = t.slideLabelMessage
                        .replace(/\{\{index\}\}/, i.index() + 1)
                        .replace(/\{\{slidesLength\}\}/, e.slides.length);
                e.a11y.addElLabel(i, s);
              }),
          e.navigation && e.navigation.$nextEl && (s = e.navigation.$nextEl),
          e.navigation && e.navigation.$prevEl && (r = e.navigation.$prevEl),
          s &&
          s.length &&
          (e.a11y.makeElFocusable(s),
          "BUTTON" !== s[0].tagName &&
          (e.a11y.addElRole(s, "button"),
              s.on("keydown", e.a11y.onEnterOrSpaceKey)),
              e.a11y.addElLabel(s, t.nextSlideMessage),
              e.a11y.addElControls(s, o)),
          r &&
          r.length &&
          (e.a11y.makeElFocusable(r),
          "BUTTON" !== r[0].tagName &&
          (e.a11y.addElRole(r, "button"),
              r.on("keydown", e.a11y.onEnterOrSpaceKey)),
              e.a11y.addElLabel(r, t.prevSlideMessage),
              e.a11y.addElControls(r, o)),
          e.pagination &&
          e.params.pagination.clickable &&
          e.pagination.bullets &&
          e.pagination.bullets.length &&
          e.pagination.$el.on(
              "keydown",
              z(e.params.pagination.bulletClass),
              e.a11y.onEnterOrSpaceKey
          );
        },
        destroy: function () {
          var e,
              t,
              a = this;
          a.a11y.liveRegion &&
          a.a11y.liveRegion.length > 0 &&
          a.a11y.liveRegion.remove(),
          a.navigation && a.navigation.$nextEl && (e = a.navigation.$nextEl),
          a.navigation && a.navigation.$prevEl && (t = a.navigation.$prevEl),
          e && e.off("keydown", a.a11y.onEnterOrSpaceKey),
          t && t.off("keydown", a.a11y.onEnterOrSpaceKey),
          a.pagination &&
          a.params.pagination.clickable &&
          a.pagination.bullets &&
          a.pagination.bullets.length &&
          a.pagination.$el.off(
              "keydown",
              z(a.params.pagination.bulletClass),
              a.a11y.onEnterOrSpaceKey
          );
        },
      },
      re = {
        init: function () {
          var e = this,
              t = o();
          if (e.params.history) {
            if (!t.history || !t.history.pushState)
              return (
                  (e.params.history.enabled = !1),
                      void (e.params.hashNavigation.enabled = !0)
              );
            var a = e.history;
            (a.initialized = !0),
                (a.paths = re.getPathValues(e.params.url)),
            (a.paths.key || a.paths.value) &&
            (a.scrollToSlide(0, a.paths.value, e.params.runCallbacksOnInit),
            e.params.history.replaceState ||
            t.addEventListener("popstate", e.history.setHistoryPopState));
          }
        },
        destroy: function () {
          var e = o();
          this.params.history.replaceState ||
          e.removeEventListener("popstate", this.history.setHistoryPopState);
        },
        setHistoryPopState: function () {
          var e = this;
          (e.history.paths = re.getPathValues(e.params.url)),
              e.history.scrollToSlide(e.params.speed, e.history.paths.value, !1);
        },
        getPathValues: function (e) {
          var t = o(),
              a = (e ? new URL(e) : t.location).pathname
                  .slice(1)
                  .split("/")
                  .filter(function (e) {
                    return "" !== e;
                  }),
              i = a.length;
          return { key: a[i - 2], value: a[i - 1] };
        },
        setHistory: function (e, t) {
          var a = this,
              i = o();
          if (a.history.initialized && a.params.history.enabled) {
            var s;
            s = a.params.url ? new URL(a.params.url) : i.location;
            var r = a.slides.eq(t),
                n = re.slugify(r.attr("data-history"));
            if (a.params.history.root.length > 0) {
              var l = a.params.history.root;
              "/" === l[l.length - 1] && (l = l.slice(0, l.length - 1)),
                  (n = l + "/" + e + "/" + n);
            } else s.pathname.includes(e) || (n = e + "/" + n);
            var d = i.history.state;
            (d && d.value === n) ||
            (a.params.history.replaceState
                ? i.history.replaceState({ value: n }, null, n)
                : i.history.pushState({ value: n }, null, n));
          }
        },
        slugify: function (e) {
          return e
              .toString()
              .replace(/\s+/g, "-")
              .replace(/[^\w-]+/g, "")
              .replace(/--+/g, "-")
              .replace(/^-+/, "")
              .replace(/-+$/, "");
        },
        scrollToSlide: function (e, t, a) {
          var i = this;
          if (t)
            for (var s = 0, r = i.slides.length; s < r; s += 1) {
              var n = i.slides.eq(s);
              if (
                  re.slugify(n.attr("data-history")) === t &&
                  !n.hasClass(i.params.slideDuplicateClass)
              ) {
                var o = n.index();
                i.slideTo(o, e, a);
              }
            }
          else i.slideTo(0, e, a);
        },
      },
      ne = {
        onHashCange: function () {
          var e = this,
              t = r();
          e.emit("hashChange");
          var a = t.location.hash.replace("#", "");
          if (a !== e.slides.eq(e.activeIndex).attr("data-hash")) {
            var i = e.$wrapperEl
                .children("." + e.params.slideClass + '[data-hash="' + a + '"]')
                .index();
            if (void 0 === i) return;
            e.slideTo(i);
          }
        },
        setHash: function () {
          var e = this,
              t = o(),
              a = r();
          if (e.hashNavigation.initialized && e.params.hashNavigation.enabled)
            if (
                e.params.hashNavigation.replaceState &&
                t.history &&
                t.history.replaceState
            )
              t.history.replaceState(
                  null,
                  null,
                  "#" + e.slides.eq(e.activeIndex).attr("data-hash") || ""
              ),
                  e.emit("hashSet");
            else {
              var i = e.slides.eq(e.activeIndex),
                  s = i.attr("data-hash") || i.attr("data-history");
              (a.location.hash = s || ""), e.emit("hashSet");
            }
        },
        init: function () {
          var e = this,
              t = r(),
              a = o();
          if (
              !(
                  !e.params.hashNavigation.enabled ||
                  (e.params.history && e.params.history.enabled)
              )
          ) {
            e.hashNavigation.initialized = !0;
            var i = t.location.hash.replace("#", "");
            if (i)
              for (var s = 0, n = e.slides.length; s < n; s += 1) {
                var l = e.slides.eq(s);
                if (
                    (l.attr("data-hash") || l.attr("data-history")) === i &&
                    !l.hasClass(e.params.slideDuplicateClass)
                ) {
                  var d = l.index();
                  e.slideTo(d, 0, e.params.runCallbacksOnInit, !0);
                }
              }
            e.params.hashNavigation.watchState &&
            m(a).on("hashchange", e.hashNavigation.onHashCange);
          }
        },
        destroy: function () {
          var e = o();
          this.params.hashNavigation.watchState &&
          m(e).off("hashchange", this.hashNavigation.onHashCange);
        },
      },
      oe = {
        run: function () {
          var e = this,
              t = e.slides.eq(e.activeIndex),
              a = e.params.autoplay.delay;
          t.attr("data-swiper-autoplay") &&
          (a = t.attr("data-swiper-autoplay") || e.params.autoplay.delay),
              clearTimeout(e.autoplay.timeout),
              (e.autoplay.timeout = E(function () {
                var t;
                e.params.autoplay.reverseDirection
                    ? e.params.loop
                        ? (e.loopFix(),
                            (t = e.slidePrev(e.params.speed, !0, !0)),
                            e.emit("autoplay"))
                        : e.isBeginning
                            ? e.params.autoplay.stopOnLastSlide
                                ? e.autoplay.stop()
                                : ((t = e.slideTo(
                                    e.slides.length - 1,
                                    e.params.speed,
                                    !0,
                                    !0
                                )),
                                    e.emit("autoplay"))
                            : ((t = e.slidePrev(e.params.speed, !0, !0)),
                                e.emit("autoplay"))
                    : e.params.loop
                        ? (e.loopFix(),
                            (t = e.slideNext(e.params.speed, !0, !0)),
                            e.emit("autoplay"))
                        : e.isEnd
                            ? e.params.autoplay.stopOnLastSlide
                                ? e.autoplay.stop()
                                : ((t = e.slideTo(0, e.params.speed, !0, !0)),
                                    e.emit("autoplay"))
                            : ((t = e.slideNext(e.params.speed, !0, !0)), e.emit("autoplay")),
                ((e.params.cssMode && e.autoplay.running) || !1 === t) &&
                e.autoplay.run();
              }, a));
        },
        start: function () {
          var e = this;
          return (
              void 0 === e.autoplay.timeout &&
              !e.autoplay.running &&
              ((e.autoplay.running = !0),
                  e.emit("autoplayStart"),
                  e.autoplay.run(),
                  !0)
          );
        },
        stop: function () {
          var e = this;
          return (
              !!e.autoplay.running &&
              void 0 !== e.autoplay.timeout &&
              (e.autoplay.timeout &&
              (clearTimeout(e.autoplay.timeout), (e.autoplay.timeout = void 0)),
                  (e.autoplay.running = !1),
                  e.emit("autoplayStop"),
                  !0)
          );
        },
        pause: function (e) {
          var t = this;
          t.autoplay.running &&
          (t.autoplay.paused ||
              (t.autoplay.timeout && clearTimeout(t.autoplay.timeout),
                  (t.autoplay.paused = !0),
                  0 !== e && t.params.autoplay.waitForTransition
                      ? (t.$wrapperEl[0].addEventListener(
                          "transitionend",
                          t.autoplay.onTransitionEnd
                      ),
                          t.$wrapperEl[0].addEventListener(
                              "webkitTransitionEnd",
                              t.autoplay.onTransitionEnd
                          ))
                      : ((t.autoplay.paused = !1), t.autoplay.run())));
        },
        onVisibilityChange: function () {
          var e = this,
              t = r();
          "hidden" === t.visibilityState &&
          e.autoplay.running &&
          e.autoplay.pause(),
          "visible" === t.visibilityState &&
          e.autoplay.paused &&
          (e.autoplay.run(), (e.autoplay.paused = !1));
        },
        onTransitionEnd: function (e) {
          var t = this;
          t &&
          !t.destroyed &&
          t.$wrapperEl &&
          e.target === t.$wrapperEl[0] &&
          (t.$wrapperEl[0].removeEventListener(
              "transitionend",
              t.autoplay.onTransitionEnd
          ),
              t.$wrapperEl[0].removeEventListener(
                  "webkitTransitionEnd",
                  t.autoplay.onTransitionEnd
              ),
              (t.autoplay.paused = !1),
              t.autoplay.running ? t.autoplay.run() : t.autoplay.stop());
        },
      },
      le = {
        setTranslate: function () {
          for (var e = this, t = e.slides, a = 0; a < t.length; a += 1) {
            var i = e.slides.eq(a),
                s = -i[0].swiperSlideOffset;
            e.params.virtualTranslate || (s -= e.translate);
            var r = 0;
            e.isHorizontal() || ((r = s), (s = 0));
            var n = e.params.fadeEffect.crossFade
                ? Math.max(1 - Math.abs(i[0].progress), 0)
                : 1 + Math.min(Math.max(i[0].progress, -1), 0);
            i.css({ opacity: n }).transform(
                "translate3d(" + s + "px, " + r + "px, 0px)"
            );
          }
        },
        setTransition: function (e) {
          var t = this,
              a = t.slides,
              i = t.$wrapperEl;
          if ((a.transition(e), t.params.virtualTranslate && 0 !== e)) {
            var s = !1;
            a.transitionEnd(function () {
              if (!s && t && !t.destroyed) {
                (s = !0), (t.animating = !1);
                for (
                    var e = ["webkitTransitionEnd", "transitionend"], a = 0;
                    a < e.length;
                    a += 1
                )
                  i.trigger(e[a]);
              }
            });
          }
        },
      },
      de = {
        setTranslate: function () {
          var e,
              t = this,
              a = t.$el,
              i = t.$wrapperEl,
              s = t.slides,
              r = t.width,
              n = t.height,
              o = t.rtlTranslate,
              l = t.size,
              d = t.browser,
              p = t.params.cubeEffect,
              c = t.isHorizontal(),
              u = t.virtual && t.params.virtual.enabled,
              h = 0;
          p.shadow &&
          (c
              ? (0 === (e = i.find(".swiper-cube-shadow")).length &&
              ((e = m('<div class="swiper-cube-shadow"></div>')),
                  i.append(e)),
                  e.css({ height: r + "px" }))
              : 0 === (e = a.find(".swiper-cube-shadow")).length &&
              ((e = m('<div class="swiper-cube-shadow"></div>')), a.append(e)));
          for (var v = 0; v < s.length; v += 1) {
            var f = s.eq(v),
                g = v;
            u && (g = parseInt(f.attr("data-swiper-slide-index"), 10));
            var b = 90 * g,
                w = Math.floor(b / 360);
            o && ((b = -b), (w = Math.floor(-b / 360)));
            var y = Math.max(Math.min(f[0].progress, 1), -1),
                E = 0,
                x = 0,
                T = 0;
            g % 4 == 0
                ? ((E = 4 * -w * l), (T = 0))
                : (g - 1) % 4 == 0
                    ? ((E = 0), (T = 4 * -w * l))
                    : (g - 2) % 4 == 0
                        ? ((E = l + 4 * w * l), (T = l))
                        : (g - 3) % 4 == 0 && ((E = -l), (T = 3 * l + 4 * l * w)),
            o && (E = -E),
            c || ((x = E), (E = 0));
            var S =
                "rotateX(" +
                (c ? 0 : -b) +
                "deg) rotateY(" +
                (c ? b : 0) +
                "deg) translate3d(" +
                E +
                "px, " +
                x +
                "px, " +
                T +
                "px)";
            if (
                (y <= 1 &&
                y > -1 &&
                ((h = 90 * g + 90 * y), o && (h = 90 * -g - 90 * y)),
                    f.transform(S),
                    p.slideShadows)
            ) {
              var C = c
                      ? f.find(".swiper-slide-shadow-left")
                      : f.find(".swiper-slide-shadow-top"),
                  M = c
                      ? f.find(".swiper-slide-shadow-right")
                      : f.find(".swiper-slide-shadow-bottom");
              0 === C.length &&
              ((C = m(
                  '<div class="swiper-slide-shadow-' +
                  (c ? "left" : "top") +
                  '"></div>'
              )),
                  f.append(C)),
              0 === M.length &&
              ((M = m(
                  '<div class="swiper-slide-shadow-' +
                  (c ? "right" : "bottom") +
                  '"></div>'
              )),
                  f.append(M)),
              C.length && (C[0].style.opacity = Math.max(-y, 0)),
              M.length && (M[0].style.opacity = Math.max(y, 0));
            }
          }
          if (
              (i.css({
                "-webkit-transform-origin": "50% 50% -" + l / 2 + "px",
                "-moz-transform-origin": "50% 50% -" + l / 2 + "px",
                "-ms-transform-origin": "50% 50% -" + l / 2 + "px",
                "transform-origin": "50% 50% -" + l / 2 + "px",
              }),
                  p.shadow)
          )
            if (c)
              e.transform(
                  "translate3d(0px, " +
                  (r / 2 + p.shadowOffset) +
                  "px, " +
                  -r / 2 +
                  "px) rotateX(90deg) rotateZ(0deg) scale(" +
                  p.shadowScale +
                  ")"
              );
            else {
              var z = Math.abs(h) - 90 * Math.floor(Math.abs(h) / 90),
                  P =
                      1.5 -
                      (Math.sin((2 * z * Math.PI) / 360) / 2 +
                          Math.cos((2 * z * Math.PI) / 360) / 2),
                  k = p.shadowScale,
                  L = p.shadowScale / P,
                  $ = p.shadowOffset;
              e.transform(
                  "scale3d(" +
                  k +
                  ", 1, " +
                  L +
                  ") translate3d(0px, " +
                  (n / 2 + $) +
                  "px, " +
                  -n / 2 / L +
                  "px) rotateX(-90deg)"
              );
            }
          var I = d.isSafari || d.isWebView ? -l / 2 : 0;
          i.transform(
              "translate3d(0px,0," +
              I +
              "px) rotateX(" +
              (t.isHorizontal() ? 0 : h) +
              "deg) rotateY(" +
              (t.isHorizontal() ? -h : 0) +
              "deg)"
          );
        },
        setTransition: function (e) {
          var t = this,
              a = t.$el;
          t.slides
              .transition(e)
              .find(
                  ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
              )
              .transition(e),
          t.params.cubeEffect.shadow &&
          !t.isHorizontal() &&
          a.find(".swiper-cube-shadow").transition(e);
        },
      },
      pe = {
        setTranslate: function () {
          for (
              var e = this, t = e.slides, a = e.rtlTranslate, i = 0;
              i < t.length;
              i += 1
          ) {
            var s = t.eq(i),
                r = s[0].progress;
            e.params.flipEffect.limitRotation &&
            (r = Math.max(Math.min(s[0].progress, 1), -1));
            var n = -180 * r,
                o = 0,
                l = -s[0].swiperSlideOffset,
                d = 0;
            if (
                (e.isHorizontal()
                    ? a && (n = -n)
                    : ((d = l), (l = 0), (o = -n), (n = 0)),
                    (s[0].style.zIndex = -Math.abs(Math.round(r)) + t.length),
                    e.params.flipEffect.slideShadows)
            ) {
              var p = e.isHorizontal()
                      ? s.find(".swiper-slide-shadow-left")
                      : s.find(".swiper-slide-shadow-top"),
                  c = e.isHorizontal()
                      ? s.find(".swiper-slide-shadow-right")
                      : s.find(".swiper-slide-shadow-bottom");
              0 === p.length &&
              ((p = m(
                  '<div class="swiper-slide-shadow-' +
                  (e.isHorizontal() ? "left" : "top") +
                  '"></div>'
              )),
                  s.append(p)),
              0 === c.length &&
              ((c = m(
                  '<div class="swiper-slide-shadow-' +
                  (e.isHorizontal() ? "right" : "bottom") +
                  '"></div>'
              )),
                  s.append(c)),
              p.length && (p[0].style.opacity = Math.max(-r, 0)),
              c.length && (c[0].style.opacity = Math.max(r, 0));
            }
            s.transform(
                "translate3d(" +
                l +
                "px, " +
                d +
                "px, 0px) rotateX(" +
                o +
                "deg) rotateY(" +
                n +
                "deg)"
            );
          }
        },
        setTransition: function (e) {
          var t = this,
              a = t.slides,
              i = t.activeIndex,
              s = t.$wrapperEl;
          if (
              (a
                  .transition(e)
                  .find(
                      ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
                  )
                  .transition(e),
              t.params.virtualTranslate && 0 !== e)
          ) {
            var r = !1;
            a.eq(i).transitionEnd(function () {
              if (!r && t && !t.destroyed) {
                (r = !0), (t.animating = !1);
                for (
                    var e = ["webkitTransitionEnd", "transitionend"], a = 0;
                    a < e.length;
                    a += 1
                )
                  s.trigger(e[a]);
              }
            });
          }
        },
      },
      ce = {
        setTranslate: function () {
          for (
              var e = this,
                  t = e.width,
                  a = e.height,
                  i = e.slides,
                  s = e.slidesSizesGrid,
                  r = e.params.coverflowEffect,
                  n = e.isHorizontal(),
                  o = e.translate,
                  l = n ? t / 2 - o : a / 2 - o,
                  d = n ? r.rotate : -r.rotate,
                  p = r.depth,
                  c = 0,
                  u = i.length;
              c < u;
              c += 1
          ) {
            var h = i.eq(c),
                v = s[c],
                f = ((l - h[0].swiperSlideOffset - v / 2) / v) * r.modifier,
                g = n ? d * f : 0,
                b = n ? 0 : d * f,
                w = -p * Math.abs(f),
                y = r.stretch;
            "string" == typeof y &&
            -1 !== y.indexOf("%") &&
            (y = (parseFloat(r.stretch) / 100) * v);
            var E = n ? 0 : y * f,
                x = n ? y * f : 0,
                T = 1 - (1 - r.scale) * Math.abs(f);
            Math.abs(x) < 0.001 && (x = 0),
            Math.abs(E) < 0.001 && (E = 0),
            Math.abs(w) < 0.001 && (w = 0),
            Math.abs(g) < 0.001 && (g = 0),
            Math.abs(b) < 0.001 && (b = 0),
            Math.abs(T) < 0.001 && (T = 0);
            var S =
                "translate3d(" +
                x +
                "px," +
                E +
                "px," +
                w +
                "px)  rotateX(" +
                b +
                "deg) rotateY(" +
                g +
                "deg) scale(" +
                T +
                ")";
            if (
                (h.transform(S),
                    (h[0].style.zIndex = 1 - Math.abs(Math.round(f))),
                    r.slideShadows)
            ) {
              var C = n
                      ? h.find(".swiper-slide-shadow-left")
                      : h.find(".swiper-slide-shadow-top"),
                  M = n
                      ? h.find(".swiper-slide-shadow-right")
                      : h.find(".swiper-slide-shadow-bottom");
              0 === C.length &&
              ((C = m(
                  '<div class="swiper-slide-shadow-' +
                  (n ? "left" : "top") +
                  '"></div>'
              )),
                  h.append(C)),
              0 === M.length &&
              ((M = m(
                  '<div class="swiper-slide-shadow-' +
                  (n ? "right" : "bottom") +
                  '"></div>'
              )),
                  h.append(M)),
              C.length && (C[0].style.opacity = f > 0 ? f : 0),
              M.length && (M[0].style.opacity = -f > 0 ? -f : 0);
            }
          }
        },
        setTransition: function (e) {
          this.slides
              .transition(e)
              .find(
                  ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
              )
              .transition(e);
        },
      },
      ue = {
        init: function () {
          var e = this,
              t = e.params.thumbs;
          if (e.thumbs.initialized) return !1;
          e.thumbs.initialized = !0;
          var a = e.constructor;
          return (
              t.swiper instanceof a
                  ? ((e.thumbs.swiper = t.swiper),
                      C(e.thumbs.swiper.originalParams, {
                        watchSlidesProgress: !0,
                        slideToClickedSlide: !1,
                      }),
                      C(e.thumbs.swiper.params, {
                        watchSlidesProgress: !0,
                        slideToClickedSlide: !1,
                      }))
                  : S(t.swiper) &&
                  ((e.thumbs.swiper = new a(
                      C({}, t.swiper, {
                        watchSlidesVisibility: !0,
                        watchSlidesProgress: !0,
                        slideToClickedSlide: !1,
                      })
                  )),
                      (e.thumbs.swiperCreated = !0)),
                  e.thumbs.swiper.$el.addClass(e.params.thumbs.thumbsContainerClass),
                  e.thumbs.swiper.on("tap", e.thumbs.onThumbClick),
                  !0
          );
        },
        onThumbClick: function () {
          var e = this,
              t = e.thumbs.swiper;
          if (t) {
            var a = t.clickedIndex,
                i = t.clickedSlide;
            if (
                !(
                    (i && m(i).hasClass(e.params.thumbs.slideThumbActiveClass)) ||
                    null == a
                )
            ) {
              var s;
              if (
                  ((s = t.params.loop
                      ? parseInt(
                          m(t.clickedSlide).attr("data-swiper-slide-index"),
                          10
                      )
                      : a),
                      e.params.loop)
              ) {
                var r = e.activeIndex;
                e.slides.eq(r).hasClass(e.params.slideDuplicateClass) &&
                (e.loopFix(),
                    (e._clientLeft = e.$wrapperEl[0].clientLeft),
                    (r = e.activeIndex));
                var n = e.slides
                        .eq(r)
                        .prevAll('[data-swiper-slide-index="' + s + '"]')
                        .eq(0)
                        .index(),
                    o = e.slides
                        .eq(r)
                        .nextAll('[data-swiper-slide-index="' + s + '"]')
                        .eq(0)
                        .index();
                s = void 0 === n ? o : void 0 === o ? n : o - r < r - n ? o : n;
              }
              e.slideTo(s);
            }
          }
        },
        update: function (e) {
          var t = this,
              a = t.thumbs.swiper;
          if (a) {
            var i =
                    "auto" === a.params.slidesPerView
                        ? a.slidesPerViewDynamic()
                        : a.params.slidesPerView,
                s = t.params.thumbs.autoScrollOffset,
                r = s && !a.params.loop;
            if (t.realIndex !== a.realIndex || r) {
              var n,
                  o,
                  l = a.activeIndex;
              if (a.params.loop) {
                a.slides.eq(l).hasClass(a.params.slideDuplicateClass) &&
                (a.loopFix(),
                    (a._clientLeft = a.$wrapperEl[0].clientLeft),
                    (l = a.activeIndex));
                var d = a.slides
                        .eq(l)
                        .prevAll('[data-swiper-slide-index="' + t.realIndex + '"]')
                        .eq(0)
                        .index(),
                    p = a.slides
                        .eq(l)
                        .nextAll('[data-swiper-slide-index="' + t.realIndex + '"]')
                        .eq(0)
                        .index();
                (n =
                    void 0 === d
                        ? p
                        : void 0 === p
                            ? d
                            : p - l == l - d
                                ? l
                                : p - l < l - d
                                    ? p
                                    : d),
                    (o = t.activeIndex > t.previousIndex ? "next" : "prev");
              } else o = (n = t.realIndex) > t.previousIndex ? "next" : "prev";
              r && (n += "next" === o ? s : -1 * s),
              a.visibleSlidesIndexes &&
              a.visibleSlidesIndexes.indexOf(n) < 0 &&
              (a.params.centeredSlides
                  ? (n =
                      n > l
                          ? n - Math.floor(i / 2) + 1
                          : n + Math.floor(i / 2) - 1)
                  : n > l && (n = n - i + 1),
                  a.slideTo(n, e ? 0 : void 0));
            }
            var c = 1,
                u = t.params.thumbs.slideThumbActiveClass;
            if (
                (t.params.slidesPerView > 1 &&
                !t.params.centeredSlides &&
                (c = t.params.slidesPerView),
                t.params.thumbs.multipleActiveThumbs || (c = 1),
                    (c = Math.floor(c)),
                    a.slides.removeClass(u),
                a.params.loop || (a.params.virtual && a.params.virtual.enabled))
            )
              for (var h = 0; h < c; h += 1)
                a.$wrapperEl
                    .children(
                        '[data-swiper-slide-index="' + (t.realIndex + h) + '"]'
                    )
                    .addClass(u);
            else
              for (var v = 0; v < c; v += 1)
                a.slides.eq(t.realIndex + v).addClass(u);
          }
        },
      },
      he = [
        q,
        U,
        {
          name: "mousewheel",
          params: {
            mousewheel: {
              enabled: !1,
              releaseOnEdges: !1,
              invert: !1,
              forceToAxis: !1,
              sensitivity: 1,
              eventsTarget: "container",
              thresholdDelta: null,
              thresholdTime: null,
            },
          },
          create: function () {
            M(this, {
              mousewheel: {
                enabled: !1,
                lastScrollTime: x(),
                lastEventBeforeSnap: void 0,
                recentWheelEvents: [],
                enable: K.enable,
                disable: K.disable,
                handle: K.handle,
                handleMouseEnter: K.handleMouseEnter,
                handleMouseLeave: K.handleMouseLeave,
                animateSlider: K.animateSlider,
                releaseScroll: K.releaseScroll,
              },
            });
          },
          on: {
            init: function (e) {
              !e.params.mousewheel.enabled &&
              e.params.cssMode &&
              e.mousewheel.disable(),
              e.params.mousewheel.enabled && e.mousewheel.enable();
            },
            destroy: function (e) {
              e.params.cssMode && e.mousewheel.enable(),
              e.mousewheel.enabled && e.mousewheel.disable();
            },
          },
        },
        {
          name: "navigation",
          params: {
            navigation: {
              nextEl: null,
              prevEl: null,
              hideOnClick: !1,
              disabledClass: "swiper-button-disabled",
              hiddenClass: "swiper-button-hidden",
              lockClass: "swiper-button-lock",
            },
          },
          create: function () {
            M(this, { navigation: t({}, Z) });
          },
          on: {
            init: function (e) {
              e.navigation.init(), e.navigation.update();
            },
            toEdge: function (e) {
              e.navigation.update();
            },
            fromEdge: function (e) {
              e.navigation.update();
            },
            destroy: function (e) {
              e.navigation.destroy();
            },
            click: function (e, t) {
              var a = e.navigation,
                  i = a.$nextEl,
                  s = a.$prevEl,
                  r = t.target;
              if (e.params.navigation.hideOnClick && !m(r).is(s) && !m(r).is(i)) {
                if (
                    e.pagination &&
                    e.params.pagination &&
                    e.params.pagination.clickable &&
                    (e.pagination.el === r || e.pagination.el.contains(r))
                )
                  return;
                var n;
                i
                    ? (n = i.hasClass(e.params.navigation.hiddenClass))
                    : s && (n = s.hasClass(e.params.navigation.hiddenClass)),
                    !0 === n ? e.emit("navigationShow") : e.emit("navigationHide"),
                i && i.toggleClass(e.params.navigation.hiddenClass),
                s && s.toggleClass(e.params.navigation.hiddenClass);
              }
            },
          },
        },
        {
          name: "pagination",
          params: {
            pagination: {
              el: null,
              bulletElement: "span",
              clickable: !1,
              hideOnClick: !1,
              renderBullet: null,
              renderProgressbar: null,
              renderFraction: null,
              renderCustom: null,
              progressbarOpposite: !1,
              type: "bullets",
              dynamicBullets: !1,
              dynamicMainBullets: 1,
              formatFractionCurrent: function (e) {
                return e;
              },
              formatFractionTotal: function (e) {
                return e;
              },
              bulletClass: "swiper-pagination-bullet",
              bulletActiveClass: "swiper-pagination-bullet-active",
              modifierClass: "swiper-pagination-",
              currentClass: "swiper-pagination-current",
              totalClass: "swiper-pagination-total",
              hiddenClass: "swiper-pagination-hidden",
              progressbarFillClass: "swiper-pagination-progressbar-fill",
              progressbarOppositeClass: "swiper-pagination-progressbar-opposite",
              clickableClass: "swiper-pagination-clickable",
              lockClass: "swiper-pagination-lock",
            },
          },
          create: function () {
            M(this, { pagination: t({ dynamicBulletIndex: 0 }, J) });
          },
          on: {
            init: function (e) {
              e.pagination.init(), e.pagination.render(), e.pagination.update();
            },
            activeIndexChange: function (e) {
              (e.params.loop || void 0 === e.snapIndex) && e.pagination.update();
            },
            snapIndexChange: function (e) {
              e.params.loop || e.pagination.update();
            },
            slidesLengthChange: function (e) {
              e.params.loop && (e.pagination.render(), e.pagination.update());
            },
            snapGridLengthChange: function (e) {
              e.params.loop || (e.pagination.render(), e.pagination.update());
            },
            destroy: function (e) {
              e.pagination.destroy();
            },
            click: function (e, t) {
              var a = t.target;
              if (
                  e.params.pagination.el &&
                  e.params.pagination.hideOnClick &&
                  e.pagination.$el.length > 0 &&
                  !m(a).hasClass(e.params.pagination.bulletClass)
              ) {
                if (
                    e.navigation &&
                    ((e.navigation.nextEl && a === e.navigation.nextEl) ||
                        (e.navigation.prevEl && a === e.navigation.prevEl))
                )
                  return;
                !0 === e.pagination.$el.hasClass(e.params.pagination.hiddenClass)
                    ? e.emit("paginationShow")
                    : e.emit("paginationHide"),
                    e.pagination.$el.toggleClass(e.params.pagination.hiddenClass);
              }
            },
          },
        },
        {
          name: "scrollbar",
          params: {
            scrollbar: {
              el: null,
              dragSize: "auto",
              hide: !1,
              draggable: !1,
              snapOnRelease: !0,
              lockClass: "swiper-scrollbar-lock",
              dragClass: "swiper-scrollbar-drag",
            },
          },
          create: function () {
            M(this, {
              scrollbar: t(
                  { isTouched: !1, timeout: null, dragTimeout: null },
                  Q
              ),
            });
          },
          on: {
            init: function (e) {
              e.scrollbar.init(),
                  e.scrollbar.updateSize(),
                  e.scrollbar.setTranslate();
            },
            update: function (e) {
              e.scrollbar.updateSize();
            },
            resize: function (e) {
              e.scrollbar.updateSize();
            },
            observerUpdate: function (e) {
              e.scrollbar.updateSize();
            },
            setTranslate: function (e) {
              e.scrollbar.setTranslate();
            },
            setTransition: function (e, t) {
              e.scrollbar.setTransition(t);
            },
            destroy: function (e) {
              e.scrollbar.destroy();
            },
          },
        },
        {
          name: "parallax",
          params: { parallax: { enabled: !1 } },
          create: function () {
            M(this, { parallax: t({}, ee) });
          },
          on: {
            beforeInit: function (e) {
              e.params.parallax.enabled &&
              ((e.params.watchSlidesProgress = !0),
                  (e.originalParams.watchSlidesProgress = !0));
            },
            init: function (e) {
              e.params.parallax.enabled && e.parallax.setTranslate();
            },
            setTranslate: function (e) {
              e.params.parallax.enabled && e.parallax.setTranslate();
            },
            setTransition: function (e, t) {
              e.params.parallax.enabled && e.parallax.setTransition(t);
            },
          },
        },
        {
          name: "zoom",
          params: {
            zoom: {
              enabled: !1,
              maxRatio: 3,
              minRatio: 1,
              toggle: !0,
              containerClass: "swiper-zoom-container",
              zoomedSlideClass: "swiper-slide-zoomed",
            },
          },
          create: function () {
            var e = this;
            M(e, {
              zoom: t(
                  {
                    enabled: !1,
                    scale: 1,
                    currentScale: 1,
                    isScaling: !1,
                    gesture: {
                      $slideEl: void 0,
                      slideWidth: void 0,
                      slideHeight: void 0,
                      $imageEl: void 0,
                      $imageWrapEl: void 0,
                      maxRatio: 3,
                    },
                    image: {
                      isTouched: void 0,
                      isMoved: void 0,
                      currentX: void 0,
                      currentY: void 0,
                      minX: void 0,
                      minY: void 0,
                      maxX: void 0,
                      maxY: void 0,
                      width: void 0,
                      height: void 0,
                      startX: void 0,
                      startY: void 0,
                      touchesStart: {},
                      touchesCurrent: {},
                    },
                    velocity: {
                      x: void 0,
                      y: void 0,
                      prevPositionX: void 0,
                      prevPositionY: void 0,
                      prevTime: void 0,
                    },
                  },
                  te
              ),
            });
            var a = 1;
            Object.defineProperty(e.zoom, "scale", {
              get: function () {
                return a;
              },
              set: function (t) {
                if (a !== t) {
                  var i = e.zoom.gesture.$imageEl
                          ? e.zoom.gesture.$imageEl[0]
                          : void 0,
                      s = e.zoom.gesture.$slideEl
                          ? e.zoom.gesture.$slideEl[0]
                          : void 0;
                  e.emit("zoomChange", t, i, s);
                }
                a = t;
              },
            });
          },
          on: {
            init: function (e) {
              e.params.zoom.enabled && e.zoom.enable();
            },
            destroy: function (e) {
              e.zoom.disable();
            },
            touchStart: function (e, t) {
              e.zoom.enabled && e.zoom.onTouchStart(t);
            },
            touchEnd: function (e, t) {
              e.zoom.enabled && e.zoom.onTouchEnd(t);
            },
            doubleTap: function (e, t) {
              !e.animating &&
              e.params.zoom.enabled &&
              e.zoom.enabled &&
              e.params.zoom.toggle &&
              e.zoom.toggle(t);
            },
            transitionEnd: function (e) {
              e.zoom.enabled && e.params.zoom.enabled && e.zoom.onTransitionEnd();
            },
            slideChange: function (e) {
              e.zoom.enabled &&
              e.params.zoom.enabled &&
              e.params.cssMode &&
              e.zoom.onTransitionEnd();
            },
          },
        },
        {
          name: "lazy",
          params: {
            lazy: {
              checkInView: !1,
              enabled: !1,
              loadPrevNext: !1,
              loadPrevNextAmount: 1,
              loadOnTransitionStart: !1,
              scrollingElement: "",
              elementClass: "swiper-lazy",
              loadingClass: "swiper-lazy-loading",
              loadedClass: "swiper-lazy-loaded",
              preloaderClass: "swiper-lazy-preloader",
            },
          },
          create: function () {
            M(this, { lazy: t({ initialImageLoaded: !1 }, ae) });
          },
          on: {
            beforeInit: function (e) {
              e.params.lazy.enabled &&
              e.params.preloadImages &&
              (e.params.preloadImages = !1);
            },
            init: function (e) {
              e.params.lazy.enabled &&
              !e.params.loop &&
              0 === e.params.initialSlide &&
              (e.params.lazy.checkInView
                  ? e.lazy.checkInViewOnLoad()
                  : e.lazy.load());
            },
            scroll: function (e) {
              e.params.freeMode && !e.params.freeModeSticky && e.lazy.load();
            },
            "scrollbarDragMove resize _freeModeNoMomentumRelease": function (e) {
              e.params.lazy.enabled && e.lazy.load();
            },
            transitionStart: function (e) {
              e.params.lazy.enabled &&
              (e.params.lazy.loadOnTransitionStart ||
                  (!e.params.lazy.loadOnTransitionStart &&
                      !e.lazy.initialImageLoaded)) &&
              e.lazy.load();
            },
            transitionEnd: function (e) {
              e.params.lazy.enabled &&
              !e.params.lazy.loadOnTransitionStart &&
              e.lazy.load();
            },
            slideChange: function (e) {
              e.params.lazy.enabled && e.params.cssMode && e.lazy.load();
            },
          },
        },
        {
          name: "controller",
          params: { controller: { control: void 0, inverse: !1, by: "slide" } },
          create: function () {
            M(this, {
              controller: t({ control: this.params.controller.control }, ie),
            });
          },
          on: {
            update: function (e) {
              e.controller.control &&
              e.controller.spline &&
              ((e.controller.spline = void 0), delete e.controller.spline);
            },
            resize: function (e) {
              e.controller.control &&
              e.controller.spline &&
              ((e.controller.spline = void 0), delete e.controller.spline);
            },
            observerUpdate: function (e) {
              e.controller.control &&
              e.controller.spline &&
              ((e.controller.spline = void 0), delete e.controller.spline);
            },
            setTranslate: function (e, t, a) {
              e.controller.control && e.controller.setTranslate(t, a);
            },
            setTransition: function (e, t, a) {
              e.controller.control && e.controller.setTransition(t, a);
            },
          },
        },
        {
          name: "a11y",
          params: {
            a11y: {
              enabled: !0,
              notificationClass: "swiper-notification",
              prevSlideMessage: "Previous slide",
              nextSlideMessage: "Next slide",
              firstSlideMessage: "This is the first slide",
              lastSlideMessage: "This is the last slide",
              paginationBulletMessage: "Go to slide {{index}}",
              slideLabelMessage: "{{index}} / {{slidesLength}}",
              containerMessage: null,
              containerRoleDescriptionMessage: null,
              itemRoleDescriptionMessage: null,
              slideRole: "group",
            },
          },
          create: function () {
            M(this, {
              a11y: t({}, se, {
                liveRegion: m(
                    '<span class="' +
                    this.params.a11y.notificationClass +
                    '" aria-live="assertive" aria-atomic="true"></span>'
                ),
              }),
            });
          },
          on: {
            afterInit: function (e) {
              e.params.a11y.enabled && (e.a11y.init(), e.a11y.updateNavigation());
            },
            toEdge: function (e) {
              e.params.a11y.enabled && e.a11y.updateNavigation();
            },
            fromEdge: function (e) {
              e.params.a11y.enabled && e.a11y.updateNavigation();
            },
            paginationUpdate: function (e) {
              e.params.a11y.enabled && e.a11y.updatePagination();
            },
            destroy: function (e) {
              e.params.a11y.enabled && e.a11y.destroy();
            },
          },
        },
        {
          name: "history",
          params: {
            history: { enabled: !1, root: "", replaceState: !1, key: "slides" },
          },
          create: function () {
            M(this, { history: t({}, re) });
          },
          on: {
            init: function (e) {
              e.params.history.enabled && e.history.init();
            },
            destroy: function (e) {
              e.params.history.enabled && e.history.destroy();
            },
            transitionEnd: function (e) {
              e.history.initialized &&
              e.history.setHistory(e.params.history.key, e.activeIndex);
            },
            slideChange: function (e) {
              e.history.initialized &&
              e.params.cssMode &&
              e.history.setHistory(e.params.history.key, e.activeIndex);
            },
          },
        },
        {
          name: "hash-navigation",
          params: {
            hashNavigation: { enabled: !1, replaceState: !1, watchState: !1 },
          },
          create: function () {
            M(this, { hashNavigation: t({ initialized: !1 }, ne) });
          },
          on: {
            init: function (e) {
              e.params.hashNavigation.enabled && e.hashNavigation.init();
            },
            destroy: function (e) {
              e.params.hashNavigation.enabled && e.hashNavigation.destroy();
            },
            transitionEnd: function (e) {
              e.hashNavigation.initialized && e.hashNavigation.setHash();
            },
            slideChange: function (e) {
              e.hashNavigation.initialized &&
              e.params.cssMode &&
              e.hashNavigation.setHash();
            },
          },
        },
        {
          name: "autoplay",
          params: {
            autoplay: {
              enabled: !1,
              delay: 3e3,
              waitForTransition: !0,
              disableOnInteraction: !0,
              stopOnLastSlide: !1,
              reverseDirection: !1,
            },
          },
          create: function () {
            M(this, { autoplay: t({}, oe, { running: !1, paused: !1 }) });
          },
          on: {
            init: function (e) {
              e.params.autoplay.enabled &&
              (e.autoplay.start(),
                  r().addEventListener(
                      "visibilitychange",
                      e.autoplay.onVisibilityChange
                  ));
            },
            beforeTransitionStart: function (e, t, a) {
              e.autoplay.running &&
              (a || !e.params.autoplay.disableOnInteraction
                  ? e.autoplay.pause(t)
                  : e.autoplay.stop());
            },
            sliderFirstMove: function (e) {
              e.autoplay.running &&
              (e.params.autoplay.disableOnInteraction
                  ? e.autoplay.stop()
                  : e.autoplay.pause());
            },
            touchEnd: function (e) {
              e.params.cssMode &&
              e.autoplay.paused &&
              !e.params.autoplay.disableOnInteraction &&
              e.autoplay.run();
            },
            destroy: function (e) {
              e.autoplay.running && e.autoplay.stop(),
                  r().removeEventListener(
                      "visibilitychange",
                      e.autoplay.onVisibilityChange
                  );
            },
          },
        },
        {
          name: "effect-fade",
          params: { fadeEffect: { crossFade: !1 } },
          create: function () {
            M(this, { fadeEffect: t({}, le) });
          },
          on: {
            beforeInit: function (e) {
              if ("fade" === e.params.effect) {
                e.classNames.push(e.params.containerModifierClass + "fade");
                var t = {
                  slidesPerView: 1,
                  slidesPerColumn: 1,
                  slidesPerGroup: 1,
                  watchSlidesProgress: !0,
                  spaceBetween: 0,
                  virtualTranslate: !0,
                };
                C(e.params, t), C(e.originalParams, t);
              }
            },
            setTranslate: function (e) {
              "fade" === e.params.effect && e.fadeEffect.setTranslate();
            },
            setTransition: function (e, t) {
              "fade" === e.params.effect && e.fadeEffect.setTransition(t);
            },
          },
        },
        {
          name: "effect-cube",
          params: {
            cubeEffect: {
              slideShadows: !0,
              shadow: !0,
              shadowOffset: 20,
              shadowScale: 0.94,
            },
          },
          create: function () {
            M(this, { cubeEffect: t({}, de) });
          },
          on: {
            beforeInit: function (e) {
              if ("cube" === e.params.effect) {
                e.classNames.push(e.params.containerModifierClass + "cube"),
                    e.classNames.push(e.params.containerModifierClass + "3d");
                var t = {
                  slidesPerView: 1,
                  slidesPerColumn: 1,
                  slidesPerGroup: 1,
                  watchSlidesProgress: !0,
                  resistanceRatio: 0,
                  spaceBetween: 0,
                  centeredSlides: !1,
                  virtualTranslate: !0,
                };
                C(e.params, t), C(e.originalParams, t);
              }
            },
            setTranslate: function (e) {
              "cube" === e.params.effect && e.cubeEffect.setTranslate();
            },
            setTransition: function (e, t) {
              "cube" === e.params.effect && e.cubeEffect.setTransition(t);
            },
          },
        },
        {
          name: "effect-flip",
          params: { flipEffect: { slideShadows: !0, limitRotation: !0 } },
          create: function () {
            M(this, { flipEffect: t({}, pe) });
          },
          on: {
            beforeInit: function (e) {
              if ("flip" === e.params.effect) {
                e.classNames.push(e.params.containerModifierClass + "flip"),
                    e.classNames.push(e.params.containerModifierClass + "3d");
                var t = {
                  slidesPerView: 1,
                  slidesPerColumn: 1,
                  slidesPerGroup: 1,
                  watchSlidesProgress: !0,
                  spaceBetween: 0,
                  virtualTranslate: !0,
                };
                C(e.params, t), C(e.originalParams, t);
              }
            },
            setTranslate: function (e) {
              "flip" === e.params.effect && e.flipEffect.setTranslate();
            },
            setTransition: function (e, t) {
              "flip" === e.params.effect && e.flipEffect.setTransition(t);
            },
          },
        },
        {
          name: "effect-coverflow",
          params: {
            coverflowEffect: {
              rotate: 50,
              stretch: 0,
              depth: 100,
              scale: 1,
              modifier: 1,
              slideShadows: !0,
            },
          },
          create: function () {
            M(this, { coverflowEffect: t({}, ce) });
          },
          on: {
            beforeInit: function (e) {
              "coverflow" === e.params.effect &&
              (e.classNames.push(e.params.containerModifierClass + "coverflow"),
                  e.classNames.push(e.params.containerModifierClass + "3d"),
                  (e.params.watchSlidesProgress = !0),
                  (e.originalParams.watchSlidesProgress = !0));
            },
            setTranslate: function (e) {
              "coverflow" === e.params.effect && e.coverflowEffect.setTranslate();
            },
            setTransition: function (e, t) {
              "coverflow" === e.params.effect &&
              e.coverflowEffect.setTransition(t);
            },
          },
        },
        {
          name: "thumbs",
          params: {
            thumbs: {
              swiper: null,
              multipleActiveThumbs: !0,
              autoScrollOffset: 0,
              slideThumbActiveClass: "swiper-slide-thumb-active",
              thumbsContainerClass: "swiper-container-thumbs",
            },
          },
          create: function () {
            M(this, { thumbs: t({ swiper: null, initialized: !1 }, ue) });
          },
          on: {
            beforeInit: function (e) {
              var t = e.params.thumbs;
              t && t.swiper && (e.thumbs.init(), e.thumbs.update(!0));
            },
            slideChange: function (e) {
              e.thumbs.swiper && e.thumbs.update();
            },
            update: function (e) {
              e.thumbs.swiper && e.thumbs.update();
            },
            resize: function (e) {
              e.thumbs.swiper && e.thumbs.update();
            },
            observerUpdate: function (e) {
              e.thumbs.swiper && e.thumbs.update();
            },
            setTransition: function (e, t) {
              var a = e.thumbs.swiper;
              a && a.setTransition(t);
            },
            beforeDestroy: function (e) {
              var t = e.thumbs.swiper;
              t && e.thumbs.swiperCreated && t && t.destroy();
            },
          },
        },
      ];
  return F.use(he), F;
});
//# sourceMappingURL=swiper-bundle.min.js.map
