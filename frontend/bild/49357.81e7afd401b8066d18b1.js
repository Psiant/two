"use strict";
(window.webpackChunk = window.webpackChunk || []).push([[49357, 3218], {
    949357: (e, n, r) => {
        r.r(n),
        r.d(n, {
            default: () => l
        });
        var t = r(55188)
          , o = r.n(t)
          , a = r(803218)
          , i = [{
            name: "show_welcome_back"
        }, {
            name: "show_welcome_form"
        }, {
            name: "main_tour",
            prop: "show"
        }, {
            name: "main_tour",
            prop: "show_qualification_form"
        }, {
            name: "main_tour",
            prop: "is_crm_template_selected"
        }];
        function l() {
            var e = "Y" === (0,
            a.getInitParam)("run_wizard")
              , n = o().find(i, (function(e) {
                var n = APP.constant(e.name);
                return e.prop ? n[e.prop] : n
            }
            ));
            (e || n && Boolean(APP.constant("show_old_tour"))) && Promise.all([r.e(95882), r.e(29020), r.e(93231), r.e(52167)]).then(r.bind(r, 393711)).then((function(e) {
                e.default.init()
            }
            ))
        }
        var u = "../build/transpiled/tour/controller";
        window.define(u, (function() {
            var e = "undefined"
              , r = typeof n === e ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === e ? typeof module === e ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : n;
            return r && r.default || r
        }
        )),
        window.require([u])
    }
    ,
    803218: (e, n, r) => {
        function t(e, n) {
            (null == n || n > e.length) && (n = e.length);
            for (var r = 0, t = new Array(n); r < n; r++)
                t[r] = e[r];
            return t
        }
        function o(e, n, r) {
            return n in e ? Object.defineProperty(e, n, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[n] = r,
            e
        }
        r.r(n),
        r.d(n, {
            getAllInitParams: () => l,
            getInitParam: () => i
        });
        var a = function() {
            var e, n, r = new URLSearchParams(window.location.search), o = {}, a = !0, i = !1, l = void 0;
            try {
                for (var u, f = r.entries()[Symbol.iterator](); !(a = (u = f.next()).done); a = !0) {
                    var d = (e = u.value,
                    n = 2,
                    function(e) {
                        if (Array.isArray(e))
                            return e
                    }(e) || function(e, n) {
                        var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                        if (null != r) {
                            var t, o, a = [], i = !0, l = !1;
                            try {
                                for (r = r.call(e); !(i = (t = r.next()).done) && (a.push(t.value),
                                !n || a.length !== n); i = !0)
                                    ;
                            } catch (e) {
                                l = !0,
                                o = e
                            } finally {
                                try {
                                    i || null == r.return || r.return()
                                } finally {
                                    if (l)
                                        throw o
                                }
                            }
                            return a
                        }
                    }(e, n) || function(e, n) {
                        if (e) {
                            if ("string" == typeof e)
                                return t(e, n);
                            var r = Object.prototype.toString.call(e).slice(8, -1);
                            return "Object" === r && e.constructor && (r = e.constructor.name),
                            "Map" === r || "Set" === r ? Array.from(r) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? t(e, n) : void 0
                        }
                    }(e, n) || function() {
                        throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }())
                      , c = d[0]
                      , s = d[1];
                    o[c] = s
                }
            } catch (e) {
                i = !0,
                l = e
            } finally {
                try {
                    a || null == f.return || f.return()
                } finally {
                    if (i)
                        throw l
                }
            }
            return o
        }();
        function i(e) {
            return a[e]
        }
        function l() {
            return function(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var r = null != arguments[n] ? arguments[n] : {}
                      , t = Object.keys(r);
                    "function" == typeof Object.getOwnPropertySymbols && (t = t.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(r, e).enumerable
                    }
                    )))),
                    t.forEach((function(n) {
                        o(e, n, r[n])
                    }
                    ))
                }
                return e
            }({}, a)
        }
    }
}]);
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
    id: "build_2025_07_01_16_55_40_release"
},
function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}
          , n = (new Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {},
        e._sentryDebugIds[n] = "1b1a67b2-60d5-4fe8-9ab8-544c01dd3207",
        e._sentryDebugIdIdentifier = "sentry-dbid-1b1a67b2-60d5-4fe8-9ab8-544c01dd3207")
    } catch (e) {}
}();
//# sourceMappingURL=49357.81e7afd401b8066d18b1.js.map
