"use strict";
(window.webpackChunk = window.webpackChunk || []).push([[13754, 56083], {
    956083: (e, n, t) => {
        t.r(n),
        t.d(n, {
            default: () => d
        });
        var o = t(55188)
          , u = t.n(o)
          , i = {};
        if ("undefined" != typeof window) {
            var r = function() {
                return u().each(["ding"], (function(e) {
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
            window.addEventListener("focus", r, !1),
            document.hasFocus() && r()
        }
        const d = function() {
            var e;
            (e = i.ding) && (e.pause(),
            e.volume = 1,
            e.currentTime = 0,
            e.play())
        };
        var s = "../build/transpiled/components/base/inbox/sound/index";
        window.define(s, (function() {
            var e = "undefined"
              , t = typeof n === e ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === e ? typeof module === e ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : n;
            return t && t.default || t
        }
        )),
        window.require([s])
    }
    ,
    213754: (e, n, t) => {
        t.r(n),
        t.d(n, {
            default: () => b
        });
        var o = t(55188)
          , u = t.n(o)
          , i = t(629821)
          , r = t.n(i)
          , d = t(521466)
          , s = t(880774)
          , c = t(956083);
        function a(e, n) {
            for (var t = 0; t < n.length; t++) {
                var o = n[t];
                o.enumerable = o.enumerable || !1,
                o.configurable = !0,
                "value"in o && (o.writable = !0),
                Object.defineProperty(e, o.key, o)
            }
        }
        function l(e, n, t) {
            return l = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(e, n, t) {
                var o = function(e, n) {
                    for (; !Object.prototype.hasOwnProperty.call(e, n) && null !== (e = f(e)); )
                        ;
                    return e
                }(e, n);
                if (o) {
                    var u = Object.getOwnPropertyDescriptor(o, n);
                    return u.get ? u.get.call(t || e) : u.value
                }
            }
            ,
            l(e, n, t || e)
        }
        function f(e) {
            return f = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            ,
            f(e)
        }
        function _(e, n) {
            return _ = Object.setPrototypeOf || function(e, n) {
                return e.__proto__ = n,
                e
            }
            ,
            _(e, n)
        }
        function p(e) {
            var n = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                    ))),
                    !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var t, o = f(e);
                if (n) {
                    var u = f(this).constructor;
                    t = Reflect.construct(o, arguments, u)
                } else
                    t = o.apply(this, arguments);
                return function(e, n) {
                    return !n || "object" != ((t = n) && "undefined" != typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t) && "function" != typeof n ? function(e) {
                        if (void 0 === e)
                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return e
                    }(e) : n;
                    var t
                }(this, t)
            }
        }
        var b = function(e) {
            !function(e, n) {
                if ("function" != typeof n && null !== n)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(n && n.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                n && _(e, n)
            }(i, e);
            var n, t, o = p(i);
            function i() {
                return function(e, n) {
                    if (!(e instanceof n))
                        throw new TypeError("Cannot call a class as a function")
                }(this, i),
                o.apply(this, arguments)
            }
            return n = i,
            t = [{
                key: "initialize",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    l(f(i.prototype), "initialize", this).call(this, arguments),
                    this.playSound = c.default,
                    this.sound_id = e.storage_id || "amo_inbox_sound",
                    this.sound_enabled = r().get(this.sound_id),
                    u().isUndefined(this.sound_enabled) && (this.sound_enabled = !0),
                    this._elem("mute").before('\n      <svg class="button-input__context-menu__item__icon svg-icon svg-common--unmute-dims">\n        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#common--unmute"></use>\n      </svg>\n    '),
                    this.changeSoundState()
                }
            }, {
                key: "_selectors",
                value: function() {
                    return {
                        button_sound: ".button-input__context-menu__item__text",
                        mute: ".svg-common--mute-dims",
                        unmute: ".svg-common--unmute-dims"
                    }
                }
            }, {
                key: "events",
                value: function() {
                    return {
                        click: "onSoundStateChange"
                    }
                }
            }, {
                key: "playSoundMessage",
                value: function() {
                    this.sound_enabled && this.playSound()
                }
            }, {
                key: "changeSoundState",
                value: function() {
                    this._elem("button_sound").text(this.sound_enabled ? (0,
                    s.i18n)("Mute") : (0,
                    s.i18n)("Turn on sound")),
                    this.sound_enabled ? (this._elem("mute").show(),
                    this._elem("unmute").hide()) : (this._elem("mute").hide(),
                    this._elem("unmute").show())
                }
            }, {
                key: "onSoundStateChange",
                value: function() {
                    this.sound_enabled = !this.sound_enabled,
                    r().set(this.sound_id, this.sound_enabled),
                    this.changeSoundState()
                }
            }],
            t && a(n.prototype, t),
            i
        }(d.default)
          , y = "../build/transpiled/components/base/inbox/sound/toggler";
        window.define(y, (function() {
            var e = "undefined"
              , t = typeof n === e ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === e ? typeof module === e ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : n;
            return t && t.default || t
        }
        )),
        window.require([y])
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
        e._sentryDebugIds[n] = "1be8e7e7-8e44-41c2-8d21-bdfcddb37dc5",
        e._sentryDebugIdIdentifier = "sentry-dbid-1be8e7e7-8e44-41c2-8d21-bdfcddb37dc5")
    } catch (e) {}
}();
//# sourceMappingURL=13754.eb1f762c6795f3552651.js.map
