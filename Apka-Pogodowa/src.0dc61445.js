parcelRequire = (function (e, r, t, n) {
  var i,
    o = "function" == typeof parcelRequire && parcelRequire,
    u = "function" == typeof require && require;
  function f(t, n) {
    if (!r[t]) {
      if (!e[t]) {
        var i = "function" == typeof parcelRequire && parcelRequire;
        if (!n && i) return i(t, !0);
        if (o) return o(t, !0);
        if (u && "string" == typeof t) return u(t);
        var c = new Error("Cannot find module '" + t + "'");
        throw ((c.code = "MODULE_NOT_FOUND"), c);
      }
      (p.resolve = function (r) {
        return e[t][1][r] || r;
      }),
        (p.cache = {});
      var l = (r[t] = new f.Module(t));
      e[t][0].call(l.exports, p, l, l.exports, this);
    }
    return r[t].exports;
    function p(e) {
      return f(p.resolve(e));
    }
  }
  (f.isParcelRequire = !0),
    (f.Module = function (e) {
      (this.id = e), (this.bundle = f), (this.exports = {});
    }),
    (f.modules = e),
    (f.cache = r),
    (f.parent = o),
    (f.register = function (r, t) {
      e[r] = [
        function (e, r) {
          r.exports = t;
        },
        {},
      ];
    });
  for (var c = 0; c < t.length; c++)
    try {
      f(t[c]);
    } catch (e) {
      i || (i = e);
    }
  if (t.length) {
    var l = f(t[t.length - 1]);
    "object" == typeof exports && "undefined" != typeof module
      ? (module.exports = l)
      : "function" == typeof define && define.amd
      ? define(function () {
          return l;
        })
      : n && (this[n] = l);
  }
  if (((parcelRequire = f), i)) throw i;
  return f;
})(
  {
    rDCW: [function (require, module, exports) {}, {}],
    pBGv: [
      function (require, module, exports) {
        var t,
          e,
          n = (module.exports = {});
        function r() {
          throw new Error("setTimeout has not been defined");
        }
        function o() {
          throw new Error("clearTimeout has not been defined");
        }
        function i(e) {
          if (t === setTimeout) return setTimeout(e, 0);
          if ((t === r || !t) && setTimeout)
            return (t = setTimeout), setTimeout(e, 0);
          try {
            return t(e, 0);
          } catch (n) {
            try {
              return t.call(null, e, 0);
            } catch (n) {
              return t.call(this, e, 0);
            }
          }
        }
        function u(t) {
          if (e === clearTimeout) return clearTimeout(t);
          if ((e === o || !e) && clearTimeout)
            return (e = clearTimeout), clearTimeout(t);
          try {
            return e(t);
          } catch (n) {
            try {
              return e.call(null, t);
            } catch (n) {
              return e.call(this, t);
            }
          }
        }
        !(function () {
          try {
            t = "function" == typeof setTimeout ? setTimeout : r;
          } catch (n) {
            t = r;
          }
          try {
            e = "function" == typeof clearTimeout ? clearTimeout : o;
          } catch (n) {
            e = o;
          }
        })();
        var c,
          s = [],
          l = !1,
          a = -1;
        function f() {
          l &&
            c &&
            ((l = !1),
            c.length ? (s = c.concat(s)) : (a = -1),
            s.length && h());
        }
        function h() {
          if (!l) {
            var t = i(f);
            l = !0;
            for (var e = s.length; e; ) {
              for (c = s, s = []; ++a < e; ) c && c[a].run();
              (a = -1), (e = s.length);
            }
            (c = null), (l = !1), u(t);
          }
        }
        function m(t, e) {
          (this.fun = t), (this.array = e);
        }
        function p() {}
        (n.nextTick = function (t) {
          var e = new Array(arguments.length - 1);
          if (arguments.length > 1)
            for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
          s.push(new m(t, e)), 1 !== s.length || l || i(h);
        }),
          (m.prototype.run = function () {
            this.fun.apply(null, this.array);
          }),
          (n.title = "browser"),
          (n.env = {}),
          (n.argv = []),
          (n.version = ""),
          (n.versions = {}),
          (n.on = p),
          (n.addListener = p),
          (n.once = p),
          (n.off = p),
          (n.removeListener = p),
          (n.removeAllListeners = p),
          (n.emit = p),
          (n.prependListener = p),
          (n.prependOnceListener = p),
          (n.listeners = function (t) {
            return [];
          }),
          (n.binding = function (t) {
            throw new Error("process.binding is not supported");
          }),
          (n.cwd = function () {
            return "/";
          }),
          (n.chdir = function (t) {
            throw new Error("process.chdir is not supported");
          }),
          (n.umask = function () {
            return 0;
          });
      },
      {},
    ],
    UUq2: [
      function (require, module, exports) {
        var process = require("process");
        var r = require("process");
        function t(r, t) {
          for (var e = 0, n = r.length - 1; n >= 0; n--) {
            var o = r[n];
            "." === o
              ? r.splice(n, 1)
              : ".." === o
              ? (r.splice(n, 1), e++)
              : e && (r.splice(n, 1), e--);
          }
          if (t) for (; e--; e) r.unshift("..");
          return r;
        }
        function e(r) {
          "string" != typeof r && (r += "");
          var t,
            e = 0,
            n = -1,
            o = !0;
          for (t = r.length - 1; t >= 0; --t)
            if (47 === r.charCodeAt(t)) {
              if (!o) {
                e = t + 1;
                break;
              }
            } else -1 === n && ((o = !1), (n = t + 1));
          return -1 === n ? "" : r.slice(e, n);
        }
        function n(r, t) {
          if (r.filter) return r.filter(t);
          for (var e = [], n = 0; n < r.length; n++)
            t(r[n], n, r) && e.push(r[n]);
          return e;
        }
        (exports.resolve = function () {
          for (
            var e = "", o = !1, s = arguments.length - 1;
            s >= -1 && !o;
            s--
          ) {
            var i = s >= 0 ? arguments[s] : r.cwd();
            if ("string" != typeof i)
              throw new TypeError("Arguments to path.resolve must be strings");
            i && ((e = i + "/" + e), (o = "/" === i.charAt(0)));
          }
          return (
            (o ? "/" : "") +
              (e = t(
                n(e.split("/"), function (r) {
                  return !!r;
                }),
                !o
              ).join("/")) || "."
          );
        }),
          (exports.normalize = function (r) {
            var e = exports.isAbsolute(r),
              s = "/" === o(r, -1);
            return (
              (r = t(
                n(r.split("/"), function (r) {
                  return !!r;
                }),
                !e
              ).join("/")) ||
                e ||
                (r = "."),
              r && s && (r += "/"),
              (e ? "/" : "") + r
            );
          }),
          (exports.isAbsolute = function (r) {
            return "/" === r.charAt(0);
          }),
          (exports.join = function () {
            var r = Array.prototype.slice.call(arguments, 0);
            return exports.normalize(
              n(r, function (r, t) {
                if ("string" != typeof r)
                  throw new TypeError("Arguments to path.join must be strings");
                return r;
              }).join("/")
            );
          }),
          (exports.relative = function (r, t) {
            function e(r) {
              for (var t = 0; t < r.length && "" === r[t]; t++);
              for (var e = r.length - 1; e >= 0 && "" === r[e]; e--);
              return t > e ? [] : r.slice(t, e - t + 1);
            }
            (r = exports.resolve(r).substr(1)),
              (t = exports.resolve(t).substr(1));
            for (
              var n = e(r.split("/")),
                o = e(t.split("/")),
                s = Math.min(n.length, o.length),
                i = s,
                u = 0;
              u < s;
              u++
            )
              if (n[u] !== o[u]) {
                i = u;
                break;
              }
            var f = [];
            for (u = i; u < n.length; u++) f.push("..");
            return (f = f.concat(o.slice(i))).join("/");
          }),
          (exports.sep = "/"),
          (exports.delimiter = ":"),
          (exports.dirname = function (r) {
            if (("string" != typeof r && (r += ""), 0 === r.length)) return ".";
            for (
              var t = r.charCodeAt(0),
                e = 47 === t,
                n = -1,
                o = !0,
                s = r.length - 1;
              s >= 1;
              --s
            )
              if (47 === (t = r.charCodeAt(s))) {
                if (!o) {
                  n = s;
                  break;
                }
              } else o = !1;
            return -1 === n
              ? e
                ? "/"
                : "."
              : e && 1 === n
              ? "/"
              : r.slice(0, n);
          }),
          (exports.basename = function (r, t) {
            var n = e(r);
            return (
              t &&
                n.substr(-1 * t.length) === t &&
                (n = n.substr(0, n.length - t.length)),
              n
            );
          }),
          (exports.extname = function (r) {
            "string" != typeof r && (r += "");
            for (
              var t = -1, e = 0, n = -1, o = !0, s = 0, i = r.length - 1;
              i >= 0;
              --i
            ) {
              var u = r.charCodeAt(i);
              if (47 !== u)
                -1 === n && ((o = !1), (n = i + 1)),
                  46 === u
                    ? -1 === t
                      ? (t = i)
                      : 1 !== s && (s = 1)
                    : -1 !== t && (s = -1);
              else if (!o) {
                e = i + 1;
                break;
              }
            }
            return -1 === t ||
              -1 === n ||
              0 === s ||
              (1 === s && t === n - 1 && t === e + 1)
              ? ""
              : r.slice(t, n);
          });
        var o =
          "b" === "ab".substr(-1)
            ? function (r, t, e) {
                return r.substr(t, e);
              }
            : function (r, t, e) {
                return t < 0 && (t = r.length + t), r.substr(t, e);
              };
      },
      { process: "pBGv" },
    ],
    zv8z: [
      function (require, module, exports) {
        (exports.endianness = function () {
          return "LE";
        }),
          (exports.hostname = function () {
            return "undefined" != typeof location ? location.hostname : "";
          }),
          (exports.loadavg = function () {
            return [];
          }),
          (exports.uptime = function () {
            return 0;
          }),
          (exports.freemem = function () {
            return Number.MAX_VALUE;
          }),
          (exports.totalmem = function () {
            return Number.MAX_VALUE;
          }),
          (exports.cpus = function () {
            return [];
          }),
          (exports.type = function () {
            return "Browser";
          }),
          (exports.release = function () {
            return "undefined" != typeof navigator ? navigator.appVersion : "";
          }),
          (exports.networkInterfaces = exports.getNetworkInterfaces =
            function () {
              return {};
            }),
          (exports.arch = function () {
            return "javascript";
          }),
          (exports.platform = function () {
            return "browser";
          }),
          (exports.tmpdir = exports.tmpDir =
            function () {
              return "/tmp";
            }),
          (exports.EOL = "\n"),
          (exports.homedir = function () {
            return "/";
          });
      },
      {},
    ],
    YF8F: [
      function (require, module, exports) {
        var process = require("process");
        var e = require("process"),
          r = require("fs"),
          n = require("path"),
          o = require("os"),
          a =
            /(?:^|^)\s*(?:export\s+)?([\w.-]+)(?:\s*=\s*?|:\s+?)(\s*'(?:\\'|[^'])*'|\s*"(?:\\"|[^"])*"|\s*`(?:\\`|[^`])*`|[^#\r\n]+)?\s*(?:#.*)?(?:$|$)/gm;
        function c(e) {
          var r,
            n = {},
            o = e.toString();
          for (o = o.replace(/\r\n?/gm, "\n"); null != (r = a.exec(o)); ) {
            var c = r[1],
              t = r[2] || "",
              s = (t = t.trim())[0];
            (t = t.replace(/^(['"`])([\s\S]*)\1$/gm, "$2")),
              '"' === s &&
                (t = (t = t.replace(/\\n/g, "\n")).replace(/\\r/g, "\r")),
              (n[c] = t);
          }
          return n;
        }
        function t(e) {
          console.log("[dotenv][DEBUG] ".concat(e));
        }
        function s(e) {
          return "~" === e[0] ? n.join(o.homedir(), e.slice(1)) : e;
        }
        function i(o) {
          var a = n.resolve(e.cwd(), ".env"),
            c = "utf8",
            i = Boolean(o && o.debug),
            d = Boolean(o && o.override);
          o &&
            (null != o.path && (a = s(o.path)),
            null != o.encoding && (c = o.encoding));
          try {
            var p = l.parse(r.readFileSync(a, { encoding: c }));
            return (
              Object.keys(p).forEach(function (r) {
                Object.prototype.hasOwnProperty.call(e.env, r)
                  ? (!0 === d && (e.env[r] = p[r]),
                    i &&
                      t(
                        '"'.concat(
                          r,
                          !0 === d
                            ? '" is already defined in `process.env` and WAS overwritten'
                            : '" is already defined in `process.env` and was NOT overwritten'
                        )
                      ))
                  : (e.env[r] = p[r]);
              }),
              { parsed: p }
            );
          } catch (u) {
            return (
              i && t("Failed to load ".concat(a, " ").concat(u.message)),
              { error: u }
            );
          }
        }
        var l = { config: i, parse: c };
        (module.exports.config = l.config),
          (module.exports.parse = l.parse),
          (module.exports = l);
      },
      { fs: "rDCW", path: "UUq2", os: "zv8z", process: "pBGv" },
    ],
    Ns7c: [
      function (require, module, exports) {
        module.exports = "./clouds.08047729.jpg";
      },
      {},
    ],
    dplO: [
      function (require, module, exports) {
        module.exports = "./sunrise.4ce4905e.jpg";
      },
      {},
    ],
    Focm: [
      function (require, module, exports) {
        var define;
        var t,
          e = n(require("../src/images/clouds.jpg")),
          r = n(require("../src/images/sunrise.jpg"));
        function n(t) {
          return t && t.__esModule ? t : { default: t };
        }
        function o(t) {
          return (o =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                })(t);
        }
        function i() {
          "use strict";
          i = function () {
            return t;
          };
          var t = {},
            e = Object.prototype,
            r = e.hasOwnProperty,
            n = "function" == typeof Symbol ? Symbol : {},
            a = n.iterator || "@@iterator",
            c = n.asyncIterator || "@@asyncIterator",
            u = n.toStringTag || "@@toStringTag";
          function s(t, e, r) {
            return (
              Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              }),
              t[e]
            );
          }
          try {
            s({}, "");
          } catch (j) {
            s = function (t, e, r) {
              return (t[e] = r);
            };
          }
          function l(t, e, r, n) {
            var o = e && e.prototype instanceof p ? e : p,
              i = Object.create(o.prototype),
              a = new E(n || []);
            return (
              (i._invoke = (function (t, e, r) {
                var n = "suspendedStart";
                return function (o, i) {
                  if ("executing" === n)
                    throw new Error("Generator is already running");
                  if ("completed" === n) {
                    if ("throw" === o) throw i;
                    return k();
                  }
                  for (r.method = o, r.arg = i; ; ) {
                    var a = r.delegate;
                    if (a) {
                      var c = b(a, r);
                      if (c) {
                        if (c === f) continue;
                        return c;
                      }
                    }
                    if ("next" === r.method) r.sent = r._sent = r.arg;
                    else if ("throw" === r.method) {
                      if ("suspendedStart" === n)
                        throw ((n = "completed"), r.arg);
                      r.dispatchException(r.arg);
                    } else "return" === r.method && r.abrupt("return", r.arg);
                    n = "executing";
                    var u = h(t, e, r);
                    if ("normal" === u.type) {
                      if (
                        ((n = r.done ? "completed" : "suspendedYield"),
                        u.arg === f)
                      )
                        continue;
                      return { value: u.arg, done: r.done };
                    }
                    "throw" === u.type &&
                      ((n = "completed"),
                      (r.method = "throw"),
                      (r.arg = u.arg));
                  }
                };
              })(t, r, a)),
              i
            );
          }
          function h(t, e, r) {
            try {
              return { type: "normal", arg: t.call(e, r) };
            } catch (j) {
              return { type: "throw", arg: j };
            }
          }
          t.wrap = l;
          var f = {};
          function p() {}
          function d() {}
          function y() {}
          var v = {};
          s(v, a, function () {
            return this;
          });
          var m = Object.getPrototypeOf,
            g = m && m(m(q([])));
          g && g !== e && r.call(g, a) && (v = g);
          var w = (y.prototype = p.prototype = Object.create(v));
          function x(t) {
            ["next", "throw", "return"].forEach(function (e) {
              s(t, e, function (t) {
                return this._invoke(e, t);
              });
            });
          }
          function _(t, e) {
            var n;
            this._invoke = function (i, a) {
              function c() {
                return new e(function (n, c) {
                  !(function n(i, a, c, u) {
                    var s = h(t[i], t, a);
                    if ("throw" !== s.type) {
                      var l = s.arg,
                        f = l.value;
                      return f && "object" == o(f) && r.call(f, "__await")
                        ? e.resolve(f.__await).then(
                            function (t) {
                              n("next", t, c, u);
                            },
                            function (t) {
                              n("throw", t, c, u);
                            }
                          )
                        : e.resolve(f).then(
                            function (t) {
                              (l.value = t), c(l);
                            },
                            function (t) {
                              return n("throw", t, c, u);
                            }
                          );
                    }
                    u(s.arg);
                  })(i, a, n, c);
                });
              }
              return (n = n ? n.then(c, c) : c());
            };
          }
          function b(t, e) {
            var r = t.iterator[e.method];
            if (void 0 === r) {
              if (((e.delegate = null), "throw" === e.method)) {
                if (
                  t.iterator.return &&
                  ((e.method = "return"),
                  (e.arg = void 0),
                  b(t, e),
                  "throw" === e.method)
                )
                  return f;
                (e.method = "throw"),
                  (e.arg = new TypeError(
                    "The iterator does not provide a 'throw' method"
                  ));
              }
              return f;
            }
            var n = h(r, t.iterator, e.arg);
            if ("throw" === n.type)
              return (
                (e.method = "throw"), (e.arg = n.arg), (e.delegate = null), f
              );
            var o = n.arg;
            return o
              ? o.done
                ? ((e[t.resultName] = o.value),
                  (e.next = t.nextLoc),
                  "return" !== e.method &&
                    ((e.method = "next"), (e.arg = void 0)),
                  (e.delegate = null),
                  f)
                : o
              : ((e.method = "throw"),
                (e.arg = new TypeError("iterator result is not an object")),
                (e.delegate = null),
                f);
          }
          function L(t) {
            var e = { tryLoc: t[0] };
            1 in t && (e.catchLoc = t[1]),
              2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
              this.tryEntries.push(e);
          }
          function S(t) {
            var e = t.completion || {};
            (e.type = "normal"), delete e.arg, (t.completion = e);
          }
          function E(t) {
            (this.tryEntries = [{ tryLoc: "root" }]),
              t.forEach(L, this),
              this.reset(!0);
          }
          function q(t) {
            if (t) {
              var e = t[a];
              if (e) return e.call(t);
              if ("function" == typeof t.next) return t;
              if (!isNaN(t.length)) {
                var n = -1,
                  o = function e() {
                    for (; ++n < t.length; )
                      if (r.call(t, n))
                        return (e.value = t[n]), (e.done = !1), e;
                    return (e.value = void 0), (e.done = !0), e;
                  };
                return (o.next = o);
              }
            }
            return { next: k };
          }
          function k() {
            return { value: void 0, done: !0 };
          }
          return (
            (d.prototype = y),
            s(w, "constructor", y),
            s(y, "constructor", d),
            (d.displayName = s(y, u, "GeneratorFunction")),
            (t.isGeneratorFunction = function (t) {
              var e = "function" == typeof t && t.constructor;
              return (
                !!e &&
                (e === d || "GeneratorFunction" === (e.displayName || e.name))
              );
            }),
            (t.mark = function (t) {
              return (
                Object.setPrototypeOf
                  ? Object.setPrototypeOf(t, y)
                  : ((t.__proto__ = y), s(t, u, "GeneratorFunction")),
                (t.prototype = Object.create(w)),
                t
              );
            }),
            (t.awrap = function (t) {
              return { __await: t };
            }),
            x(_.prototype),
            s(_.prototype, c, function () {
              return this;
            }),
            (t.AsyncIterator = _),
            (t.async = function (e, r, n, o, i) {
              void 0 === i && (i = Promise);
              var a = new _(l(e, r, n, o), i);
              return t.isGeneratorFunction(r)
                ? a
                : a.next().then(function (t) {
                    return t.done ? t.value : a.next();
                  });
            }),
            x(w),
            s(w, u, "Generator"),
            s(w, a, function () {
              return this;
            }),
            s(w, "toString", function () {
              return "[object Generator]";
            }),
            (t.keys = function (t) {
              var e = [];
              for (var r in t) e.push(r);
              return (
                e.reverse(),
                function r() {
                  for (; e.length; ) {
                    var n = e.pop();
                    if (n in t) return (r.value = n), (r.done = !1), r;
                  }
                  return (r.done = !0), r;
                }
              );
            }),
            (t.values = q),
            (E.prototype = {
              constructor: E,
              reset: function (t) {
                if (
                  ((this.prev = 0),
                  (this.next = 0),
                  (this.sent = this._sent = void 0),
                  (this.done = !1),
                  (this.delegate = null),
                  (this.method = "next"),
                  (this.arg = void 0),
                  this.tryEntries.forEach(S),
                  !t)
                )
                  for (var e in this)
                    "t" === e.charAt(0) &&
                      r.call(this, e) &&
                      !isNaN(+e.slice(1)) &&
                      (this[e] = void 0);
              },
              stop: function () {
                this.done = !0;
                var t = this.tryEntries[0].completion;
                if ("throw" === t.type) throw t.arg;
                return this.rval;
              },
              dispatchException: function (t) {
                if (this.done) throw t;
                var e = this;
                function n(r, n) {
                  return (
                    (a.type = "throw"),
                    (a.arg = t),
                    (e.next = r),
                    n && ((e.method = "next"), (e.arg = void 0)),
                    !!n
                  );
                }
                for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                  var i = this.tryEntries[o],
                    a = i.completion;
                  if ("root" === i.tryLoc) return n("end");
                  if (i.tryLoc <= this.prev) {
                    var c = r.call(i, "catchLoc"),
                      u = r.call(i, "finallyLoc");
                    if (c && u) {
                      if (this.prev < i.catchLoc) return n(i.catchLoc, !0);
                      if (this.prev < i.finallyLoc) return n(i.finallyLoc);
                    } else if (c) {
                      if (this.prev < i.catchLoc) return n(i.catchLoc, !0);
                    } else {
                      if (!u)
                        throw new Error(
                          "try statement without catch or finally"
                        );
                      if (this.prev < i.finallyLoc) return n(i.finallyLoc);
                    }
                  }
                }
              },
              abrupt: function (t, e) {
                for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                  var o = this.tryEntries[n];
                  if (
                    o.tryLoc <= this.prev &&
                    r.call(o, "finallyLoc") &&
                    this.prev < o.finallyLoc
                  ) {
                    var i = o;
                    break;
                  }
                }
                i &&
                  ("break" === t || "continue" === t) &&
                  i.tryLoc <= e &&
                  e <= i.finallyLoc &&
                  (i = null);
                var a = i ? i.completion : {};
                return (
                  (a.type = t),
                  (a.arg = e),
                  i
                    ? ((this.method = "next"), (this.next = i.finallyLoc), f)
                    : this.complete(a)
                );
              },
              complete: function (t, e) {
                if ("throw" === t.type) throw t.arg;
                return (
                  "break" === t.type || "continue" === t.type
                    ? (this.next = t.arg)
                    : "return" === t.type
                    ? ((this.rval = this.arg = t.arg),
                      (this.method = "return"),
                      (this.next = "end"))
                    : "normal" === t.type && e && (this.next = e),
                  f
                );
              },
              finish: function (t) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                  var r = this.tryEntries[e];
                  if (r.finallyLoc === t)
                    return this.complete(r.completion, r.afterLoc), S(r), f;
                }
              },
              catch: function (t) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                  var r = this.tryEntries[e];
                  if (r.tryLoc === t) {
                    var n = r.completion;
                    if ("throw" === n.type) {
                      var o = n.arg;
                      S(r);
                    }
                    return o;
                  }
                }
                throw new Error("illegal catch attempt");
              },
              delegateYield: function (t, e, r) {
                return (
                  (this.delegate = {
                    iterator: q(t),
                    resultName: e,
                    nextLoc: r,
                  }),
                  "next" === this.method && (this.arg = void 0),
                  f
                );
              },
            }),
            t
          );
        }
        function a(t, e, r, n, o, i, a) {
          try {
            var c = t[i](a),
              u = c.value;
          } catch (s) {
            return void r(s);
          }
          c.done ? e(u) : Promise.resolve(u).then(n, o);
        }
        function c(t) {
          return function () {
            var e = this,
              r = arguments;
            return new Promise(function (n, o) {
              var i = t.apply(e, r);
              function c(t) {
                a(i, n, o, c, u, "next", t);
              }
              function u(t) {
                a(i, n, o, c, u, "throw", t);
              }
              c(void 0);
            });
          };
        }
        require("dotenv").config();
        var u = document.querySelector("#city"),
          s = document.querySelector(".weather__error");
        u.addEventListener("input", function (t) {
          return h(t.target.value);
        }),
          (window.onload = function () {
            return (u.value = "");
          });
        var l = navigator.geolocation;
        function h(t) {
          return f.apply(this, arguments);
        }
        function f() {
          return (f = c(
            i().mark(function t(e) {
              var r, n, o;
              return i().wrap(
                function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          "4a637b306881b7669e12424ffe25dbbf",
                          (r =
                            "https://api.openweathermap.org/data/2.5/weather?q="
                              .concat(e, "&appid=")
                              .concat(
                                "4a637b306881b7669e12424ffe25dbbf",
                                "&units=metric&lang=pl"
                              )),
                          (t.prev = 2),
                          (t.next = 5),
                          fetch(r)
                        );
                      case 5:
                        return (n = t.sent), (t.next = 8), n.json();
                      case 8:
                        return (o = t.sent), (t.t0 = p), (t.next = 12), o;
                      case 12:
                        (t.t1 = t.sent),
                          (0, t.t0)(t.t1),
                          s.classList.add("weather__error--hide"),
                          (t.next = 21);
                        break;
                      case 17:
                        (t.prev = 17),
                          (t.t2 = t.catch(2)),
                          console.error(
                            'Cannot find city names "'.concat(e, '"')
                          ),
                          "" !== u.value
                            ? s.classList.remove("weather__error--hide")
                            : s.classList.add("weather__error--hide");
                      case 21:
                      case "end":
                        return t.stop();
                    }
                },
                t,
                null,
                [[2, 17]]
              );
            })
          )).apply(this, arguments);
        }
        function p(t) {
          var e = t.name,
            r = t.visibility,
            n = t.timezone,
            o = t.main,
            i = o.temp,
            a = o.feels_like,
            c = o.humidity,
            u = o.pressure,
            s = t.wind.speed,
            l = t.sys,
            h = l.sunrise,
            f = l.sunset,
            p = l.country,
            y = t.weather[0],
            v = y.description,
            m = y.icon,
            g = new Date(),
            w = g.toLocaleDateString("PL-pl"),
            x = Math.floor(g.getHours() + n / 3600 - 2),
            _ = g.getMinutes(),
            b = new Date(1e3 * h).getHours(),
            L = new Date(1e3 * f).getHours(),
            S = new Date(1e3 * h).getMinutes(),
            E = new Date(1e3 * f).getMinutes(),
            q = "".concat(x, ":").concat(_ < 10 ? "0" + _ : _),
            k = "".concat(b, ":").concat(S < 10 ? "0" + S : S),
            j = "".concat(L, ":").concat(E < 10 ? "0" + E : E);
          d(e),
            (document.querySelector(".weather__date").textContent = w),
            (document.querySelector(".weather__time").textContent = q),
            (document.querySelector(".weather__city").textContent = e),
            (document.querySelector(".weather__country").textContent = p),
            (document.querySelector(".weather__temp").textContent = i),
            (document.querySelector(".weather__icon").src =
              "https://openweathermap.org/img/wn/".concat(m, "@2x.png")),
            (document.querySelector(".weather__description").textContent = v),
            (document.querySelector(".weather__tempLikesValue").textContent =
              a),
            (document.querySelector(".weather__sunrise").textContent = k),
            (document.querySelector(".weather__sunset").textContent = j),
            (document.querySelector(".weather__windValue").textContent = s),
            (document.querySelector(".weather__humidityValue").textContent = c),
            (document.querySelector(".weather__visibilityValue").textContent =
              r / 1e3),
            (document.querySelector(".weather__pressureValue").textContent = u);
        }
        function d(t) {
          return y.apply(this, arguments);
        }
        function y() {
          return (y = c(
            i().mark(function t(n) {
              var o, a, c, u;
              return i().wrap(
                function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          (o =
                            "https://source.unsplash.com/1920x1080/?%22".concat(
                              n,
                              "%22"
                            )),
                          (t.prev = 1),
                          (t.next = 4),
                          fetch(o)
                        );
                      case 4:
                        (a = t.sent),
                          (c = new URL(a.url)),
                          (u = document.body.style),
                          "/source-404" === c.pathname
                            ? window.innerWidth >= window.innerHeight
                              ? (u.backgroundImage = "url(".concat(
                                  r.default,
                                  ")"
                                ))
                              : (u.backgroundImage = "url(".concat(
                                  e.default,
                                  ")"
                                ))
                            : (u.backgroundImage = 'url("'.concat(o, '")')),
                          (t.next = 13);
                        break;
                      case 10:
                        (t.prev = 10), (t.t0 = t.catch(1)), console.log(t.t0);
                      case 13:
                        document.querySelector("main").classList.remove("hide"),
                          document.querySelector(".spin").classList.add("hide");
                      case 15:
                      case "end":
                        return t.stop();
                    }
                },
                t,
                null,
                [[1, 10]]
              );
            })
          )).apply(this, arguments);
        }
        function v(t, e) {
          return m.apply(this, arguments);
        }
        function m() {
          return (m = c(
            i().mark(function t(e, r) {
              var n, o, a, c;
              return i().wrap(
                function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          "6820d96c9d6f47309bd98ef20c4f40c9",
                          (n =
                            "https://api.geoapify.com/v1/geocode/reverse?lat="
                              .concat(e, "&lon=")
                              .concat(r, "&lang=pl&apiKey=")
                              .concat("6820d96c9d6f47309bd98ef20c4f40c9")),
                          (t.prev = 2),
                          (t.next = 5),
                          fetch(n)
                        );
                      case 5:
                        return (o = t.sent), (t.next = 8), o.json();
                      case 8:
                        return (
                          (a = t.sent),
                          (t.next = 11),
                          a.features[0].properties.city
                        );
                      case 11:
                        return (c = t.sent), (t.t0 = h), (t.next = 15), c;
                      case 15:
                        (t.t1 = t.sent), (0, t.t0)(t.t1), (t.next = 22);
                        break;
                      case 19:
                        (t.prev = 19), (t.t2 = t.catch(2)), console.log(t.t2);
                      case 22:
                      case "end":
                        return t.stop();
                    }
                },
                t,
                null,
                [[2, 19]]
              );
            })
          )).apply(this, arguments);
        }
        l
          ? l.getCurrentPosition(
              function (t) {
                v(t.coords.latitude, t.coords.longitude);
              },
              function () {
                h("Warszawa");
              }
            )
          : h("Warszawa");
      },
      {
        dotenv: "YF8F",
        "../src/images/clouds.jpg": "Ns7c",
        "../src/images/sunrise.jpg": "dplO",
      },
    ],
  },
  {},
  ["Focm"],
  null
);
//# sourceMappingURL=/src.0dc61445.js.map
