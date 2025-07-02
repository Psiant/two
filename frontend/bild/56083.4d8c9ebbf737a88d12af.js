"use strict";
(window.webpackChunk = window.webpackChunk || []).push([[56083], {
    956083: (e, n, d) => {
        d.r(n),
        d.d(n, {
            default: () => a
        });
        var o = d(55188)
          , t = d.n(o)
          , i = {};
        if ("undefined" != typeof window) {
            var u = function() {
                return t().each(["ding"], (function(e) {
                    i[e] || function(e) {
                        var n;
                        "undefined" != typeof document && (n || ((n = document.createElement("audio")).innerHTML = '\n      <source src="/frontend/js/lib/components/base/inbox/assets/'.concat(e, '.mp3" type="audio/mpeg"/>\n    ')),
                        n.style.display = "none",
                        n.addEventListener("load", (function() {
                            n.volume = 0,
                            n.play()
                        }
                        ), !0),
                        document.body.appendChild(n),
                        i[e] = n)
                    }(e)
                }
                ))
            };
            window.addEventListener("focus", u, !1),
            document.hasFocus() && u()
        }
        const a = function() {
            var e;
            (e = i.ding) && (e.pause(),
            e.volume = 1,
            e.currentTime = 0,
            e.play())
        };
        var f = "../build/transpiled/components/base/inbox/sound/index";
        window.define(f, (function() {
            var e = "undefined"
              , d = typeof n === e ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === e ? typeof module === e ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : n;
            return d && d.default || d
        }
        )),
        window.require([f])
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
        e._sentryDebugIds[n] = "6d392b5a-3dec-4309-80f1-0c23a5434e16",
        e._sentryDebugIdIdentifier = "sentry-dbid-6d392b5a-3dec-4309-80f1-0c23a5434e16")
    } catch (e) {}
}();
//# sourceMappingURL=56083.4d8c9ebbf737a88d12af.js.map
