/*! For license information please see 1676.888b5ebc58d225dcb360.js.LICENSE.txt */
(window.webpackChunk = window.webpackChunk || []).push([[1676, 77562], {
    162262: (e, t, n) => {
        var i, o, s, r;
        r = function(e) {
            var t, n = {
                mixins: {},
                mixin: function(t) {
                    var i = e.chain(arguments).toArray().slice(1).flatten().value()
                      , o = t.prototype || t
                      , s = {};
                    return e.each(i, (function(t) {
                        e.isString(t) && (t = n.mixins[t]),
                        e.each(t, (function(t, n) {
                            if (e.isFunction(t)) {
                                if (o[n] === t)
                                    return;
                                o[n] && (s[n] = s.hasOwnProperty(n) ? s[n] : [o[n]],
                                s[n].push(t)),
                                o[n] = t
                            } else
                                e.isArray(t) ? o[n] = e.union(t, o[n] || []) : e.isObject(t) ? o[n] = e.extend({}, t, o[n] || {}) : n in o || (o[n] = t)
                        }
                        ))
                    }
                    )),
                    e.each(s, (function(t, n) {
                        o[n] = function() {
                            var n, i = this, o = arguments;
                            return e.each(t, (function(t) {
                                var s = e.isFunction(t) ? t.apply(i, o) : t;
                                n = void 0 === s ? n : s
                            }
                            )),
                            n
                        }
                    }
                    )),
                    t
                },
                patch: function(i, o) {
                    var s = [i.Model, i.Collection, i.Router, i.View].concat(o || []);
                    t = i.Model.extend;
                    var r = function(e, i) {
                        var o = t.call(this, e, i)
                          , s = o.prototype.mixins;
                        return s && o.prototype.hasOwnProperty("mixins") && n.mixin(o, s),
                        o
                    };
                    e.each(s, (function(t) {
                        t.mixin = function() {
                            n.mixin(this, e.toArray(arguments))
                        }
                        ,
                        t.extend = r
                    }
                    ))
                },
                unpatch: function(n) {
                    e.each([n.Model, n.Collection, n.Router, n.View], (function(e) {
                        e.mixin = void 0,
                        e.extend = t
                    }
                    ))
                }
            };
            return n
        }
        ,
        e.exports ? e.exports = r(n(55188)) : (o = [n(55188)],
        void 0 === (s = "function" == typeof (i = r) ? i.apply(t, o) : i) || (e.exports = s));
        var a = "cocktail";
        window.define(a, (function() {
            var t = "undefined"
              , n = typeof __webpack_exports__ === t ? typeof s === t ? typeof e === t ? void 0 : e.exports : s : __webpack_exports__;
            return n && n.default || n
        }
        )),
        window.require([a])
    }
    ,
    567952: e => {
        function t(e) {
            return e && "object" == typeof e ? o(e) || s(e) ? e : i(e) ? function(e, t) {
                if (e.map)
                    return e.map(t);
                for (var n = [], i = 0; i < e.length; i++)
                    n.push(t(e[i], i));
                return n
            }(e, t) : function(e, t, n) {
                if (e.reduce)
                    return e.reduce(t, n);
                for (var i = 0; i < e.length; i++)
                    n = t(n, e[i]);
                return n
            }(a(e), (function(i, o) {
                return i[n(o)] = t(e[o]),
                i
            }
            ), {}) : e
        }
        function n(e) {
            return e.replace(/[_.-](\w|$)/g, (function(e, t) {
                return t.toUpperCase()
            }
            ))
        }
        e.exports = function(e) {
            return "string" == typeof e ? n(e) : t(e)
        }
        ;
        var i = Array.isArray || function(e) {
            return "[object Array]" === Object.prototype.toString.call(e)
        }
          , o = function(e) {
            return "[object Date]" === Object.prototype.toString.call(e)
        }
          , s = function(e) {
            return "[object RegExp]" === Object.prototype.toString.call(e)
        }
          , r = Object.prototype.hasOwnProperty
          , a = Object.keys || function(e) {
            var t = [];
            for (var n in e)
                r.call(e, n) && t.push(n);
            return t
        }
    }
    ,
    575049: e => {
        var t;
        window,
        t = function() {
            return function(e) {
                var t = {};
                function n(i) {
                    if (t[i])
                        return t[i].exports;
                    var o = t[i] = {
                        i,
                        l: !1,
                        exports: {}
                    };
                    return e[i].call(o.exports, o, o.exports, n),
                    o.l = !0,
                    o.exports
                }
                return n.m = e,
                n.c = t,
                n.d = function(e, t, i) {
                    n.o(e, t) || Object.defineProperty(e, t, {
                        enumerable: !0,
                        get: i
                    })
                }
                ,
                n.r = function(e) {
                    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                        value: "Module"
                    }),
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    })
                }
                ,
                n.t = function(e, t) {
                    if (1 & t && (e = n(e)),
                    8 & t)
                        return e;
                    if (4 & t && "object" == typeof e && e && e.__esModule)
                        return e;
                    var i = Object.create(null);
                    if (n.r(i),
                    Object.defineProperty(i, "default", {
                        enumerable: !0,
                        value: e
                    }),
                    2 & t && "string" != typeof e)
                        for (var o in e)
                            n.d(i, o, function(t) {
                                return e[t]
                            }
                            .bind(null, o));
                    return i
                }
                ,
                n.n = function(e) {
                    var t = e && e.__esModule ? function() {
                        return e.default
                    }
                    : function() {
                        return e
                    }
                    ;
                    return n.d(t, "a", t),
                    t
                }
                ,
                n.o = function(e, t) {
                    return Object.prototype.hasOwnProperty.call(e, t)
                }
                ,
                n.p = "",
                n(n.s = 0)
            }([function(e, t, n) {
                e.exports = n(1)
            }
            , function(e, t, n) {
                "use strict";
                n.r(t);
                var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                }
                : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }
                  , o = window.device
                  , s = {}
                  , r = [];
                window.device = s;
                var a = window.document.documentElement
                  , l = window.navigator.userAgent.toLowerCase()
                  , c = ["googletv", "viera", "smarttv", "internet.tv", "netcast", "nettv", "appletv", "boxee", "kylo", "roku", "dlnadoc", "pov_tv", "hbbtv", "ce-html"];
                function u(e) {
                    return -1 !== l.indexOf(e)
                }
                function d(e) {
                    return a.className.match(new RegExp(e,"i"))
                }
                function h(e) {
                    var t = null;
                    d(e) || (t = a.className.replace(/^\s+|\s+$/g, ""),
                    a.className = t + " " + e)
                }
                function p(e) {
                    d(e) && (a.className = a.className.replace(" " + e, ""))
                }
                function f() {
                    s.landscape() ? (p("portrait"),
                    h("landscape"),
                    _("landscape")) : (p("landscape"),
                    h("portrait"),
                    _("portrait")),
                    v()
                }
                function _(e) {
                    for (var t in r)
                        r[t](e)
                }
                s.macos = function() {
                    return u("mac")
                }
                ,
                s.ios = function() {
                    return s.iphone() || s.ipod() || s.ipad()
                }
                ,
                s.iphone = function() {
                    return !s.windows() && u("iphone")
                }
                ,
                s.ipod = function() {
                    return u("ipod")
                }
                ,
                s.ipad = function() {
                    return u("ipad")
                }
                ,
                s.android = function() {
                    return !s.windows() && u("android")
                }
                ,
                s.androidPhone = function() {
                    return s.android() && u("mobile")
                }
                ,
                s.androidTablet = function() {
                    return s.android() && !u("mobile")
                }
                ,
                s.blackberry = function() {
                    return u("blackberry") || u("bb10") || u("rim")
                }
                ,
                s.blackberryPhone = function() {
                    return s.blackberry() && !u("tablet")
                }
                ,
                s.blackberryTablet = function() {
                    return s.blackberry() && u("tablet")
                }
                ,
                s.windows = function() {
                    return u("windows")
                }
                ,
                s.windowsPhone = function() {
                    return s.windows() && u("phone")
                }
                ,
                s.windowsTablet = function() {
                    return s.windows() && u("touch") && !s.windowsPhone()
                }
                ,
                s.fxos = function() {
                    return (u("(mobile") || u("(tablet")) && u(" rv:")
                }
                ,
                s.fxosPhone = function() {
                    return s.fxos() && u("mobile")
                }
                ,
                s.fxosTablet = function() {
                    return s.fxos() && u("tablet")
                }
                ,
                s.meego = function() {
                    return u("meego")
                }
                ,
                s.cordova = function() {
                    return window.cordova && "file:" === location.protocol
                }
                ,
                s.nodeWebkit = function() {
                    return "object" === i(window.process)
                }
                ,
                s.mobile = function() {
                    return s.androidPhone() || s.iphone() || s.ipod() || s.windowsPhone() || s.blackberryPhone() || s.fxosPhone() || s.meego()
                }
                ,
                s.tablet = function() {
                    return s.ipad() || s.androidTablet() || s.blackberryTablet() || s.windowsTablet() || s.fxosTablet()
                }
                ,
                s.desktop = function() {
                    return !s.tablet() && !s.mobile()
                }
                ,
                s.television = function() {
                    for (var e = 0; e < c.length; ) {
                        if (u(c[e]))
                            return !0;
                        e++
                    }
                    return !1
                }
                ,
                s.portrait = function() {
                    return screen.orientation && Object.prototype.hasOwnProperty.call(window, "onorientationchange") ? screen.orientation.type.includes("portrait") : window.innerHeight / window.innerWidth > 1
                }
                ,
                s.landscape = function() {
                    return screen.orientation && Object.prototype.hasOwnProperty.call(window, "onorientationchange") ? screen.orientation.type.includes("landscape") : window.innerHeight / window.innerWidth < 1
                }
                ,
                s.noConflict = function() {
                    return window.device = o,
                    this
                }
                ,
                s.ios() ? s.ipad() ? h("ios ipad tablet") : s.iphone() ? h("ios iphone mobile") : s.ipod() && h("ios ipod mobile") : s.macos() ? h("macos desktop") : s.android() ? s.androidTablet() ? h("android tablet") : h("android mobile") : s.blackberry() ? s.blackberryTablet() ? h("blackberry tablet") : h("blackberry mobile") : s.windows() ? s.windowsTablet() ? h("windows tablet") : s.windowsPhone() ? h("windows mobile") : h("windows desktop") : s.fxos() ? s.fxosTablet() ? h("fxos tablet") : h("fxos mobile") : s.meego() ? h("meego mobile") : s.nodeWebkit() ? h("node-webkit") : s.television() ? h("television") : s.desktop() && h("desktop"),
                s.cordova() && h("cordova"),
                s.onChangeOrientation = function(e) {
                    "function" == typeof e && r.push(e)
                }
                ;
                var m = "resize";
                function g(e) {
                    for (var t = 0; t < e.length; t++)
                        if (s[e[t]]())
                            return e[t];
                    return "unknown"
                }
                function v() {
                    s.orientation = g(["portrait", "landscape"])
                }
                Object.prototype.hasOwnProperty.call(window, "onorientationchange") && (m = "orientationchange"),
                window.addEventListener ? window.addEventListener(m, f, !1) : window.attachEvent ? window.attachEvent(m, f) : window[m] = f,
                f(),
                s.type = g(["mobile", "tablet", "desktop"]),
                s.os = g(["ios", "iphone", "ipad", "ipod", "android", "blackberry", "windows", "fxos", "meego", "television"]),
                v(),
                t.default = s
            }
            ]).default
        }
        ,
        e.exports = t();
        var n = "device";
        window.define(n, (function() {
            var t = "undefined"
              , n = typeof __webpack_exports__ === t ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === t ? typeof e === t ? void 0 : e.exports : __WEBPACK_AMD_DEFINE_RESULT__ : __webpack_exports__;
            return n && n.default || n
        }
        )),
        window.require([n])
    }
    ,
    397738: function(e, t, n) {
        var i, o, s, r;
        o = this,
        s = function(e) {
            "use strict";
            function t(e, t) {
                for (var n = 0, i = e.length; n < i && !1 !== t(e[n], n); n++)
                    ;
            }
            function n(e) {
                this.options = e,
                !e.deferSetup && this.setup()
            }
            function i(t, n) {
                this.query = t,
                this.isUnconditional = n,
                this.handlers = [],
                this.mql = e(t);
                var i = this;
                this.listener = function(e) {
                    i.mql = e,
                    i.assess()
                }
                ,
                this.mql.addListener(this.listener)
            }
            function o() {
                if (!e)
                    throw new Error("matchMedia not present, legacy browsers require a polyfill");
                this.queries = {},
                this.browserIsIncapable = !e("only all").matches
            }
            return n.prototype = {
                setup: function() {
                    this.options.setup && this.options.setup(),
                    this.initialised = !0
                },
                on: function() {
                    !this.initialised && this.setup(),
                    this.options.match && this.options.match()
                },
                off: function() {
                    this.options.unmatch && this.options.unmatch()
                },
                destroy: function() {
                    this.options.destroy ? this.options.destroy() : this.off()
                },
                equals: function(e) {
                    return this.options === e || this.options.match === e
                }
            },
            i.prototype = {
                addHandler: function(e) {
                    var t = new n(e);
                    this.handlers.push(t),
                    this.matches() && t.on()
                },
                removeHandler: function(e) {
                    var n = this.handlers;
                    t(n, (function(t, i) {
                        if (t.equals(e))
                            return t.destroy(),
                            !n.splice(i, 1)
                    }
                    ))
                },
                matches: function() {
                    return this.mql.matches || this.isUnconditional
                },
                clear: function() {
                    t(this.handlers, (function(e) {
                        e.destroy()
                    }
                    )),
                    this.mql.removeListener(this.listener),
                    this.handlers.length = 0
                },
                assess: function() {
                    var e = this.matches() ? "on" : "off";
                    t(this.handlers, (function(t) {
                        t[e]()
                    }
                    ))
                }
            },
            o.prototype = {
                register: function(e, n, o) {
                    var s, r = this.queries, a = o && this.browserIsIncapable;
                    return r[e] || (r[e] = new i(e,a)),
                    "function" == typeof n && (n = {
                        match: n
                    }),
                    s = n,
                    "[object Array]" === Object.prototype.toString.apply(s) || (n = [n]),
                    t(n, (function(t) {
                        r[e].addHandler(t)
                    }
                    )),
                    this
                },
                unregister: function(e, t) {
                    var n = this.queries[e];
                    return n && (t ? n.removeHandler(t) : (n.clear(),
                    delete this.queries[e])),
                    this
                }
            },
            new o
        }
        ,
        r = window.matchMedia,
        e.exports ? e.exports = s(r) : void 0 === (i = function() {
            return o.enquire = s(r)
        }
        .call(t, n, t, e)) || (e.exports = i);
        var a = "enquire";
        window.define(a, (function() {
            var t = "undefined"
              , n = typeof __webpack_exports__ === t ? typeof i === t ? typeof e === t ? void 0 : e.exports : i : __webpack_exports__;
            return n && n.default || n
        }
        )),
        window.require([a])
    },
    95871: (e, t, n) => {
        var i, o, s;
        o = [n(661533)],
        void 0 === (s = "function" == typeof (i = function(e) {
            var t, n, i = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"], o = "onwheel"in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"], s = Array.prototype.slice;
            if (e.event.fixHooks)
                for (var r = i.length; r; )
                    e.event.fixHooks[i[--r]] = e.event.mouseHooks;
            var a = e.event.special.mousewheel = {
                version: "3.1.12",
                setup: function() {
                    if (this.addEventListener)
                        for (var t = o.length; t; )
                            this.addEventListener(o[--t], l, !1);
                    else
                        this.onmousewheel = l;
                    e.data(this, "mousewheel-line-height", a.getLineHeight(this)),
                    e.data(this, "mousewheel-page-height", a.getPageHeight(this))
                },
                teardown: function() {
                    if (this.removeEventListener)
                        for (var t = o.length; t; )
                            this.removeEventListener(o[--t], l, !1);
                    else
                        this.onmousewheel = null;
                    e.removeData(this, "mousewheel-line-height"),
                    e.removeData(this, "mousewheel-page-height")
                },
                getLineHeight: function(t) {
                    var n = e(t)
                      , i = n["offsetParent"in e.fn ? "offsetParent" : "parent"]();
                    return i.length || (i = e("body")),
                    parseInt(i.css("fontSize"), 10) || parseInt(n.css("fontSize"), 10) || 16
                },
                getPageHeight: function(t) {
                    return e(t).height()
                },
                settings: {
                    adjustOldDeltas: !0,
                    normalizeOffset: !0
                }
            };
            function l(i) {
                var o = i || window.event
                  , r = s.call(arguments, 1)
                  , l = 0
                  , d = 0
                  , h = 0
                  , p = 0
                  , f = 0
                  , _ = 0;
                if ((i = e.event.fix(o)).type = "mousewheel",
                "detail"in o && (h = -1 * o.detail),
                "wheelDelta"in o && (h = o.wheelDelta),
                "wheelDeltaY"in o && (h = o.wheelDeltaY),
                "wheelDeltaX"in o && (d = -1 * o.wheelDeltaX),
                "axis"in o && o.axis === o.HORIZONTAL_AXIS && (d = -1 * h,
                h = 0),
                l = 0 === h ? d : h,
                "deltaY"in o && (l = h = -1 * o.deltaY),
                "deltaX"in o && (d = o.deltaX,
                0 === h && (l = -1 * d)),
                0 !== h || 0 !== d) {
                    if (1 === o.deltaMode) {
                        var m = e.data(this, "mousewheel-line-height");
                        l *= m,
                        h *= m,
                        d *= m
                    } else if (2 === o.deltaMode) {
                        var g = e.data(this, "mousewheel-page-height");
                        l *= g,
                        h *= g,
                        d *= g
                    }
                    if (p = Math.max(Math.abs(h), Math.abs(d)),
                    (!n || p < n) && (n = p,
                    u(o, p) && (n /= 40)),
                    u(o, p) && (l /= 40,
                    d /= 40,
                    h /= 40),
                    l = Math[l >= 1 ? "floor" : "ceil"](l / n),
                    d = Math[d >= 1 ? "floor" : "ceil"](d / n),
                    h = Math[h >= 1 ? "floor" : "ceil"](h / n),
                    a.settings.normalizeOffset && this.getBoundingClientRect) {
                        var v = this.getBoundingClientRect();
                        f = i.clientX - v.left,
                        _ = i.clientY - v.top
                    }
                    return i.deltaX = d,
                    i.deltaY = h,
                    i.deltaFactor = n,
                    i.offsetX = f,
                    i.offsetY = _,
                    i.deltaMode = 0,
                    r.unshift(i, l, d, h),
                    t && clearTimeout(t),
                    t = setTimeout(c, 200),
                    (e.event.dispatch || e.event.handle).apply(this, r)
                }
            }
            function c() {
                n = null
            }
            function u(e, t) {
                return a.settings.adjustOldDeltas && "mousewheel" === e.type && t % 120 == 0
            }
            e.fn.extend({
                mousewheel: function(e) {
                    return e ? this.bind("mousewheel", e) : this.trigger("mousewheel")
                },
                unmousewheel: function(e) {
                    return this.unbind("mousewheel", e)
                }
            })
        }
        ) ? i.apply(t, o) : i) || (e.exports = s)
    }
    ,
    876901: (e, t, n) => {
        var i, o, s;
        o = [n(661533), n(145027)],
        void 0 === (s = "function" == typeof (i = function(e) {
            var t, n = {}, i = function(e) {
                var t, n = document.createElement("div");
                for (t = 0; t < e.length; t++)
                    if (null != n.style[e[t]])
                        return e[t];
                return ""
            };
            n.transform = i(["transform", "WebkitTransform", "MozTransform", "OTransform", "msTransform"]),
            n.transition = i(["transition", "WebkitTransition", "MozTransition", "OTransition", "msTransition"]),
            t = n.transform && n.transition,
            e.widget("ui.sortable", e.ui.sortable, {
                options: {
                    animation: 0
                },
                _rearrange: function(i, o) {
                    var s, r, a = {}, l = {}, c = e.trim(this.options.axis);
                    if (!parseInt(this.currentContainer.options.animation) || !c)
                        return this._superApply(arguments);
                    s = e(o.item[0]),
                    r = ("up" == this.direction ? "" : "-") + s["x" == c ? "width" : "height"]() + "px",
                    this._superApply(arguments),
                    t ? a[n.transform] = ("x" == c ? "translateX" : "translateY") + "(" + r + ")" : (a = {
                        position: "relative"
                    })["x" == c ? "left" : "top"] = r,
                    s.css(a),
                    t ? (a[n.transition] = n.transform + " " + this.options.animation + "ms",
                    a[n.transform] = "",
                    l[n.transform] = "",
                    l[n.transition] = "",
                    setTimeout((function() {
                        s.css(a)
                    }
                    ), 0)) : (l.top = "",
                    l.position = "",
                    s.animate({
                        top: "",
                        position: ""
                    }, this.options.animation)),
                    setTimeout((function() {
                        s.css(l)
                    }
                    ), this.options.animation)
                }
            })
        }
        ) ? i.apply(t, o) : i) || (e.exports = s)
    }
    ,
    259085: (e, t, n) => {
        var i, o, s;
        o = [n(661533), n(948220)],
        void 0 === (s = "function" == typeof (i = function(e) {
            return e.extend(e.expr[":"], {
                data: e.expr.createPseudo ? e.expr.createPseudo((function(t) {
                    return function(n) {
                        return !!e.data(n, t)
                    }
                }
                )) : function(t, n, i) {
                    return !!e.data(t, i[3])
                }
            })
        }
        ) ? i.apply(t, o) : i) || (e.exports = s)
    }
    ,
    256547: (e, t, n) => {
        var i, o, s;
        o = [n(661533), n(948220)],
        void 0 === (s = "function" == typeof (i = function(e) {
            return e.fn.extend({
                disableSelection: (t = "onselectstart"in document.createElement("div") ? "selectstart" : "mousedown",
                function() {
                    return this.on(t + ".ui-disableSelection", (function(e) {
                        e.preventDefault()
                    }
                    ))
                }
                ),
                enableSelection: function() {
                    return this.off(".ui-disableSelection")
                }
            });
            var t
        }
        ) ? i.apply(t, o) : i) || (e.exports = s)
    }
    ,
    316936: (e, t, n) => {
        var i, o, s;
        o = [n(661533), n(948220)],
        void 0 === (s = "function" == typeof (i = function(e) {
            return e.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase())
        }
        ) ? i.apply(t, o) : i) || (e.exports = s)
    }
    ,
    866484: (e, t, n) => {
        var i, o, s;
        o = [n(661533), n(948220)],
        i = function(e) {
            return e.ui.plugin = {
                add: function(t, n, i) {
                    var o, s = e.ui[t].prototype;
                    for (o in i)
                        s.plugins[o] = s.plugins[o] || [],
                        s.plugins[o].push([n, i[o]])
                },
                call: function(e, t, n, i) {
                    var o, s = e.plugins[t];
                    if (s && (i || e.element[0].parentNode && 11 !== e.element[0].parentNode.nodeType))
                        for (o = 0; o < s.length; o++)
                            e.options[s[o][0]] && s[o][1].apply(e.element, n)
                }
            }
        }
        ,
        void 0 === (s = i.apply(t, o)) || (e.exports = s)
    }
    ,
    382915: (e, t, n) => {
        var i, o, s;
        o = [n(661533), n(948220)],
        void 0 === (s = "function" == typeof (i = function(e) {
            return e.ui.safeActiveElement = function(e) {
                var t;
                try {
                    t = e.activeElement
                } catch (n) {
                    t = e.body
                }
                return t || (t = e.body),
                t.nodeName || (t = e.body),
                t
            }
        }
        ) ? i.apply(t, o) : i) || (e.exports = s)
    }
    ,
    976552: (e, t, n) => {
        var i, o, s;
        o = [n(661533), n(948220)],
        void 0 === (s = "function" == typeof (i = function(e) {
            return e.ui.safeBlur = function(t) {
                t && "body" !== t.nodeName.toLowerCase() && e(t).trigger("blur")
            }
        }
        ) ? i.apply(t, o) : i) || (e.exports = s)
    }
    ,
    317626: (e, t, n) => {
        var i, o, s;
        o = [n(661533), n(948220)],
        void 0 === (s = "function" == typeof (i = function(e) {
            return e.fn.scrollParent = function(t) {
                var n = this.css("position")
                  , i = "absolute" === n
                  , o = t ? /(auto|scroll|hidden)/ : /(auto|scroll)/
                  , s = this.parents().filter((function() {
                    var t = e(this);
                    return (!i || "static" !== t.css("position")) && o.test(t.css("overflow") + t.css("overflow-y") + t.css("overflow-x"))
                }
                )).eq(0);
                return "fixed" !== n && s.length ? s : e(this[0].ownerDocument || document)
            }
        }
        ) ? i.apply(t, o) : i) || (e.exports = s)
    }
    ,
    948220: (e, t, n) => {
        var i, o, s;
        o = [n(661533)],
        void 0 === (s = "function" == typeof (i = function(e) {
            return e.ui = e.ui || {},
            e.ui.version = "1.12.1"
        }
        ) ? i.apply(t, o) : i) || (e.exports = s)
    }
    ,
    528803: (e, t, n) => {
        var i, o, s;
        o = [n(661533), n(948220)],
        void 0 === (s = "function" == typeof (i = function(e) {
            var t, n = 0, i = Array.prototype.slice;
            return e.cleanData = (t = e.cleanData,
            function(n) {
                var i, o, s;
                for (s = 0; null != (o = n[s]); s++)
                    try {
                        (i = e._data(o, "events")) && i.remove && e(o).triggerHandler("remove")
                    } catch (e) {}
                t(n)
            }
            ),
            e.widget = function(t, n, i) {
                var o, s, r, a = {}, l = t.split(".")[0], c = l + "-" + (t = t.split(".")[1]);
                return i || (i = n,
                n = e.Widget),
                e.isArray(i) && (i = e.extend.apply(null, [{}].concat(i))),
                e.expr[":"][c.toLowerCase()] = function(t) {
                    return !!e.data(t, c)
                }
                ,
                e[l] = e[l] || {},
                o = e[l][t],
                s = e[l][t] = function(e, t) {
                    if (!this._createWidget)
                        return new s(e,t);
                    arguments.length && this._createWidget(e, t)
                }
                ,
                e.extend(s, o, {
                    version: i.version,
                    _proto: e.extend({}, i),
                    _childConstructors: []
                }),
                (r = new n).options = e.widget.extend({}, r.options),
                e.each(i, (function(t, i) {
                    e.isFunction(i) ? a[t] = function() {
                        function e() {
                            return n.prototype[t].apply(this, arguments)
                        }
                        function o(e) {
                            return n.prototype[t].apply(this, e)
                        }
                        return function() {
                            var t, n = this._super, s = this._superApply;
                            return this._super = e,
                            this._superApply = o,
                            t = i.apply(this, arguments),
                            this._super = n,
                            this._superApply = s,
                            t
                        }
                    }() : a[t] = i
                }
                )),
                s.prototype = e.widget.extend(r, {
                    widgetEventPrefix: o && r.widgetEventPrefix || t
                }, a, {
                    constructor: s,
                    namespace: l,
                    widgetName: t,
                    widgetFullName: c
                }),
                o ? (e.each(o._childConstructors, (function(t, n) {
                    var i = n.prototype;
                    e.widget(i.namespace + "." + i.widgetName, s, n._proto)
                }
                )),
                delete o._childConstructors) : n._childConstructors.push(s),
                e.widget.bridge(t, s),
                s
            }
            ,
            e.widget.extend = function(t) {
                for (var n, o, s = i.call(arguments, 1), r = 0, a = s.length; r < a; r++)
                    for (n in s[r])
                        o = s[r][n],
                        s[r].hasOwnProperty(n) && void 0 !== o && (e.isPlainObject(o) ? t[n] = e.isPlainObject(t[n]) ? e.widget.extend({}, t[n], o) : e.widget.extend({}, o) : t[n] = o);
                return t
            }
            ,
            e.widget.bridge = function(t, n) {
                var o = n.prototype.widgetFullName || t;
                e.fn[t] = function(s) {
                    var r = "string" == typeof s
                      , a = i.call(arguments, 1)
                      , l = this;
                    return r ? this.length || "instance" !== s ? this.each((function() {
                        var n, i = e.data(this, o);
                        return "instance" === s ? (l = i,
                        !1) : i ? e.isFunction(i[s]) && "_" !== s.charAt(0) ? (n = i[s].apply(i, a)) !== i && void 0 !== n ? (l = n && n.jquery ? l.pushStack(n.get()) : n,
                        !1) : void 0 : e.error("no such method '" + s + "' for " + t + " widget instance") : e.error("cannot call methods on " + t + " prior to initialization; attempted to call method '" + s + "'")
                    }
                    )) : l = void 0 : (a.length && (s = e.widget.extend.apply(null, [s].concat(a))),
                    this.each((function() {
                        var t = e.data(this, o);
                        t ? (t.option(s || {}),
                        t._init && t._init()) : e.data(this, o, new n(s,this))
                    }
                    ))),
                    l
                }
            }
            ,
            e.Widget = function() {}
            ,
            e.Widget._childConstructors = [],
            e.Widget.prototype = {
                widgetName: "widget",
                widgetEventPrefix: "",
                defaultElement: "<div>",
                options: {
                    classes: {},
                    disabled: !1,
                    create: null
                },
                _createWidget: function(t, i) {
                    i = e(i || this.defaultElement || this)[0],
                    this.element = e(i),
                    this.uuid = n++,
                    this.eventNamespace = "." + this.widgetName + this.uuid,
                    this.bindings = e(),
                    this.hoverable = e(),
                    this.focusable = e(),
                    this.classesElementLookup = {},
                    i !== this && (e.data(i, this.widgetFullName, this),
                    this._on(!0, this.element, {
                        remove: function(e) {
                            e.target === i && this.destroy()
                        }
                    }),
                    this.document = e(i.style ? i.ownerDocument : i.document || i),
                    this.window = e(this.document[0].defaultView || this.document[0].parentWindow)),
                    this.options = e.widget.extend({}, this.options, this._getCreateOptions(), t),
                    this._create(),
                    this.options.disabled && this._setOptionDisabled(this.options.disabled),
                    this._trigger("create", null, this._getCreateEventData()),
                    this._init()
                },
                _getCreateOptions: function() {
                    return {}
                },
                _getCreateEventData: e.noop,
                _create: e.noop,
                _init: e.noop,
                destroy: function() {
                    var t = this;
                    this._destroy(),
                    e.each(this.classesElementLookup, (function(e, n) {
                        t._removeClass(n, e)
                    }
                    )),
                    this.element.off(this.eventNamespace).removeData(this.widgetFullName),
                    this.widget().off(this.eventNamespace).removeAttr("aria-disabled"),
                    this.bindings.off(this.eventNamespace)
                },
                _destroy: e.noop,
                widget: function() {
                    return this.element
                },
                option: function(t, n) {
                    var i, o, s, r = t;
                    if (0 === arguments.length)
                        return e.widget.extend({}, this.options);
                    if ("string" == typeof t)
                        if (r = {},
                        i = t.split("."),
                        t = i.shift(),
                        i.length) {
                            for (o = r[t] = e.widget.extend({}, this.options[t]),
                            s = 0; s < i.length - 1; s++)
                                o[i[s]] = o[i[s]] || {},
                                o = o[i[s]];
                            if (t = i.pop(),
                            1 === arguments.length)
                                return void 0 === o[t] ? null : o[t];
                            o[t] = n
                        } else {
                            if (1 === arguments.length)
                                return void 0 === this.options[t] ? null : this.options[t];
                            r[t] = n
                        }
                    return this._setOptions(r),
                    this
                },
                _setOptions: function(e) {
                    var t;
                    for (t in e)
                        this._setOption(t, e[t]);
                    return this
                },
                _setOption: function(e, t) {
                    return "classes" === e && this._setOptionClasses(t),
                    this.options[e] = t,
                    "disabled" === e && this._setOptionDisabled(t),
                    this
                },
                _setOptionClasses: function(t) {
                    var n, i, o;
                    for (n in t)
                        o = this.classesElementLookup[n],
                        t[n] !== this.options.classes[n] && o && o.length && (i = e(o.get()),
                        this._removeClass(o, n),
                        i.addClass(this._classes({
                            element: i,
                            keys: n,
                            classes: t,
                            add: !0
                        })))
                },
                _setOptionDisabled: function(e) {
                    this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, !!e),
                    e && (this._removeClass(this.hoverable, null, "ui-state-hover"),
                    this._removeClass(this.focusable, null, "ui-state-focus"))
                },
                enable: function() {
                    return this._setOptions({
                        disabled: !1
                    })
                },
                disable: function() {
                    return this._setOptions({
                        disabled: !0
                    })
                },
                _classes: function(t) {
                    var n = []
                      , i = this;
                    function o(o, s) {
                        var r, a;
                        for (a = 0; a < o.length; a++)
                            r = i.classesElementLookup[o[a]] || e(),
                            r = t.add ? e(e.unique(r.get().concat(t.element.get()))) : e(r.not(t.element).get()),
                            i.classesElementLookup[o[a]] = r,
                            n.push(o[a]),
                            s && t.classes[o[a]] && n.push(t.classes[o[a]])
                    }
                    return t = e.extend({
                        element: this.element,
                        classes: this.options.classes || {}
                    }, t),
                    this._on(t.element, {
                        remove: "_untrackClassesElement"
                    }),
                    t.keys && o(t.keys.match(/\S+/g) || [], !0),
                    t.extra && o(t.extra.match(/\S+/g) || []),
                    n.join(" ")
                },
                _untrackClassesElement: function(t) {
                    var n = this;
                    e.each(n.classesElementLookup, (function(i, o) {
                        -1 !== e.inArray(t.target, o) && (n.classesElementLookup[i] = e(o.not(t.target).get()))
                    }
                    ))
                },
                _removeClass: function(e, t, n) {
                    return this._toggleClass(e, t, n, !1)
                },
                _addClass: function(e, t, n) {
                    return this._toggleClass(e, t, n, !0)
                },
                _toggleClass: function(e, t, n, i) {
                    i = "boolean" == typeof i ? i : n;
                    var o = "string" == typeof e || null === e
                      , s = {
                        extra: o ? t : n,
                        keys: o ? e : t,
                        element: o ? this.element : e,
                        add: i
                    };
                    return s.element.toggleClass(this._classes(s), i),
                    this
                },
                _on: function(t, n, i) {
                    var o, s = this;
                    "boolean" != typeof t && (i = n,
                    n = t,
                    t = !1),
                    i ? (n = o = e(n),
                    this.bindings = this.bindings.add(n)) : (i = n,
                    n = this.element,
                    o = this.widget()),
                    e.each(i, (function(i, r) {
                        function a() {
                            if (t || !0 !== s.options.disabled && !e(this).hasClass("ui-state-disabled"))
                                return ("string" == typeof r ? s[r] : r).apply(s, arguments)
                        }
                        "string" != typeof r && (a.guid = r.guid = r.guid || a.guid || e.guid++);
                        var l = i.match(/^([\w:-]*)\s*(.*)$/)
                          , c = l[1] + s.eventNamespace
                          , u = l[2];
                        u ? o.on(c, u, a) : n.on(c, a)
                    }
                    ))
                },
                _off: function(t, n) {
                    n = (n || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace,
                    t.off(n).off(n),
                    this.bindings = e(this.bindings.not(t).get()),
                    this.focusable = e(this.focusable.not(t).get()),
                    this.hoverable = e(this.hoverable.not(t).get())
                },
                _delay: function(e, t) {
                    var n = this;
                    return setTimeout((function() {
                        return ("string" == typeof e ? n[e] : e).apply(n, arguments)
                    }
                    ), t || 0)
                },
                _hoverable: function(t) {
                    this.hoverable = this.hoverable.add(t),
                    this._on(t, {
                        mouseenter: function(t) {
                            this._addClass(e(t.currentTarget), null, "ui-state-hover")
                        },
                        mouseleave: function(t) {
                            this._removeClass(e(t.currentTarget), null, "ui-state-hover")
                        }
                    })
                },
                _focusable: function(t) {
                    this.focusable = this.focusable.add(t),
                    this._on(t, {
                        focusin: function(t) {
                            this._addClass(e(t.currentTarget), null, "ui-state-focus")
                        },
                        focusout: function(t) {
                            this._removeClass(e(t.currentTarget), null, "ui-state-focus")
                        }
                    })
                },
                _trigger: function(t, n, i) {
                    var o, s, r = this.options[t];
                    if (i = i || {},
                    (n = e.Event(n)).type = (t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t).toLowerCase(),
                    n.target = this.element[0],
                    s = n.originalEvent)
                        for (o in s)
                            o in n || (n[o] = s[o]);
                    return this.element.trigger(n, i),
                    !(e.isFunction(r) && !1 === r.apply(this.element[0], [n].concat(i)) || n.isDefaultPrevented())
                }
            },
            e.each({
                show: "fadeIn",
                hide: "fadeOut"
            }, (function(t, n) {
                e.Widget.prototype["_" + t] = function(i, o, s) {
                    var r;
                    "string" == typeof o && (o = {
                        effect: o
                    });
                    var a = o ? !0 === o || "number" == typeof o ? n : o.effect || n : t;
                    "number" == typeof (o = o || {}) && (o = {
                        duration: o
                    }),
                    r = !e.isEmptyObject(o),
                    o.complete = s,
                    o.delay && i.delay(o.delay),
                    r && e.effects && e.effects.effect[a] ? i[t](o) : a !== t && i[a] ? i[a](o.duration, o.easing, s) : i.queue((function(n) {
                        e(this)[t](),
                        s && s.call(i[0]),
                        n()
                    }
                    ))
                }
            }
            )),
            e.widget
        }
        ) ? i.apply(t, o) : i) || (e.exports = s)
    }
    ,
    659642: (e, t, n) => {
        var i, o, s;
        o = [n(661533), n(462106), n(259085), n(866484), n(382915), n(976552), n(317626), n(948220), n(528803)],
        void 0 === (s = "function" == typeof (i = function(e) {
            return e.widget("ui.draggable", e.ui.mouse, {
                version: "1.12.1",
                widgetEventPrefix: "drag",
                options: {
                    addClasses: !0,
                    appendTo: "parent",
                    axis: !1,
                    connectToSortable: !1,
                    containment: !1,
                    cursor: "auto",
                    cursorAt: !1,
                    grid: !1,
                    handle: !1,
                    helper: "original",
                    iframeFix: !1,
                    opacity: !1,
                    refreshPositions: !1,
                    revert: !1,
                    revertDuration: 500,
                    scope: "default",
                    scroll: !0,
                    scrollSensitivity: 20,
                    scrollSpeed: 20,
                    snap: !1,
                    snapMode: "both",
                    snapTolerance: 20,
                    stack: !1,
                    zIndex: !1,
                    drag: null,
                    start: null,
                    stop: null
                },
                _create: function() {
                    "original" === this.options.helper && this._setPositionRelative(),
                    this.options.addClasses && this._addClass("ui-draggable"),
                    this._setHandleClassName(),
                    this._mouseInit()
                },
                _setOption: function(e, t) {
                    this._super(e, t),
                    "handle" === e && (this._removeHandleClassName(),
                    this._setHandleClassName())
                },
                _destroy: function() {
                    (this.helper || this.element).is(".ui-draggable-dragging") ? this.destroyOnClear = !0 : (this._removeHandleClassName(),
                    this._mouseDestroy())
                },
                _mouseCapture: function(t) {
                    var n = this.options;
                    return !(this.helper || n.disabled || e(t.target).closest(".ui-resizable-handle").length > 0 || (this.handle = this._getHandle(t),
                    !this.handle || (this._blurActiveElement(t),
                    this._blockFrames(!0 === n.iframeFix ? "iframe" : n.iframeFix),
                    0)))
                },
                _blockFrames: function(t) {
                    this.iframeBlocks = this.document.find(t).map((function() {
                        var t = e(this);
                        return e("<div>").css("position", "absolute").appendTo(t.parent()).outerWidth(t.outerWidth()).outerHeight(t.outerHeight()).offset(t.offset())[0]
                    }
                    ))
                },
                _unblockFrames: function() {
                    this.iframeBlocks && (this.iframeBlocks.remove(),
                    delete this.iframeBlocks)
                },
                _blurActiveElement: function(t) {
                    var n = e.ui.safeActiveElement(this.document[0]);
                    e(t.target).closest(n).length || e.ui.safeBlur(n)
                },
                _mouseStart: function(t) {
                    var n = this.options;
                    return this.helper = this._createHelper(t),
                    this._addClass(this.helper, "ui-draggable-dragging"),
                    this._cacheHelperProportions(),
                    e.ui.ddmanager && (e.ui.ddmanager.current = this),
                    this._cacheMargins(),
                    this.cssPosition = this.helper.css("position"),
                    this.scrollParent = this.helper.scrollParent(!0),
                    this.offsetParent = this.helper.offsetParent(),
                    this.hasFixedAncestor = this.helper.parents().filter((function() {
                        return "fixed" === e(this).css("position")
                    }
                    )).length > 0,
                    this.positionAbs = this.element.offset(),
                    this._refreshOffsets(t),
                    this.originalPosition = this.position = this._generatePosition(t, !1),
                    this.originalPageX = t.pageX,
                    this.originalPageY = t.pageY,
                    n.cursorAt && this._adjustOffsetFromHelper(n.cursorAt),
                    this._setContainment(),
                    !1 === this._trigger("start", t) ? (this._clear(),
                    !1) : (this._cacheHelperProportions(),
                    e.ui.ddmanager && !n.dropBehaviour && e.ui.ddmanager.prepareOffsets(this, t),
                    this._mouseDrag(t, !0),
                    e.ui.ddmanager && e.ui.ddmanager.dragStart(this, t),
                    !0)
                },
                _refreshOffsets: function(e) {
                    this.offset = {
                        top: this.positionAbs.top - this.margins.top,
                        left: this.positionAbs.left - this.margins.left,
                        scroll: !1,
                        parent: this._getParentOffset(),
                        relative: this._getRelativeOffset()
                    },
                    this.offset.click = {
                        left: e.pageX - this.offset.left,
                        top: e.pageY - this.offset.top
                    }
                },
                _mouseDrag: function(t, n) {
                    if (this.hasFixedAncestor && (this.offset.parent = this._getParentOffset()),
                    this.position = this._generatePosition(t, !0),
                    this.positionAbs = this._convertPositionTo("absolute"),
                    !n) {
                        var i = this._uiHash();
                        if (!1 === this._trigger("drag", t, i))
                            return this._mouseUp(new e.Event("mouseup",t)),
                            !1;
                        this.position = i.position
                    }
                    return this.helper[0].style.left = this.position.left + "px",
                    this.helper[0].style.top = this.position.top + "px",
                    e.ui.ddmanager && e.ui.ddmanager.drag(this, t),
                    !1
                },
                _mouseStop: function(t) {
                    var n = this
                      , i = !1;
                    return e.ui.ddmanager && !this.options.dropBehaviour && (i = e.ui.ddmanager.drop(this, t)),
                    this.dropped && (i = this.dropped,
                    this.dropped = !1),
                    "invalid" === this.options.revert && !i || "valid" === this.options.revert && i || !0 === this.options.revert || e.isFunction(this.options.revert) && this.options.revert.call(this.element, i) ? e(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), (function() {
                        !1 !== n._trigger("stop", t) && n._clear()
                    }
                    )) : !1 !== this._trigger("stop", t) && this._clear(),
                    !1
                },
                _mouseUp: function(t) {
                    return this._unblockFrames(),
                    e.ui.ddmanager && e.ui.ddmanager.dragStop(this, t),
                    this.handleElement.is(t.target) && this.element.trigger("focus"),
                    e.ui.mouse.prototype._mouseUp.call(this, t)
                },
                cancel: function() {
                    return this.helper.is(".ui-draggable-dragging") ? this._mouseUp(new e.Event("mouseup",{
                        target: this.element[0]
                    })) : this._clear(),
                    this
                },
                _getHandle: function(t) {
                    return !this.options.handle || !!e(t.target).closest(this.element.find(this.options.handle)).length
                },
                _setHandleClassName: function() {
                    this.handleElement = this.options.handle ? this.element.find(this.options.handle) : this.element,
                    this._addClass(this.handleElement, "ui-draggable-handle")
                },
                _removeHandleClassName: function() {
                    this._removeClass(this.handleElement, "ui-draggable-handle")
                },
                _createHelper: function(t) {
                    var n = this.options
                      , i = e.isFunction(n.helper)
                      , o = i ? e(n.helper.apply(this.element[0], [t])) : "clone" === n.helper ? this.element.clone().removeAttr("id") : this.element;
                    return o.parents("body").length || o.appendTo("parent" === n.appendTo ? this.element[0].parentNode : n.appendTo),
                    i && o[0] === this.element[0] && this._setPositionRelative(),
                    o[0] === this.element[0] || /(fixed|absolute)/.test(o.css("position")) || o.css("position", "absolute"),
                    o
                },
                _setPositionRelative: function() {
                    /^(?:r|a|f)/.test(this.element.css("position")) || (this.element[0].style.position = "relative")
                },
                _adjustOffsetFromHelper: function(t) {
                    "string" == typeof t && (t = t.split(" ")),
                    e.isArray(t) && (t = {
                        left: +t[0],
                        top: +t[1] || 0
                    }),
                    "left"in t && (this.offset.click.left = t.left + this.margins.left),
                    "right"in t && (this.offset.click.left = this.helperProportions.width - t.right + this.margins.left),
                    "top"in t && (this.offset.click.top = t.top + this.margins.top),
                    "bottom"in t && (this.offset.click.top = this.helperProportions.height - t.bottom + this.margins.top)
                },
                _isRootNode: function(e) {
                    return /(html|body)/i.test(e.tagName) || e === this.document[0]
                },
                _getParentOffset: function() {
                    var t = this.offsetParent.offset()
                      , n = this.document[0];
                    return "absolute" === this.cssPosition && this.scrollParent[0] !== n && e.contains(this.scrollParent[0], this.offsetParent[0]) && (t.left += this.scrollParent.scrollLeft(),
                    t.top += this.scrollParent.scrollTop()),
                    this._isRootNode(this.offsetParent[0]) && (t = {
                        top: 0,
                        left: 0
                    }),
                    {
                        top: t.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                        left: t.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
                    }
                },
                _getRelativeOffset: function() {
                    if ("relative" !== this.cssPosition)
                        return {
                            top: 0,
                            left: 0
                        };
                    var e = this.element.position()
                      , t = this._isRootNode(this.scrollParent[0]);
                    return {
                        top: e.top - (parseInt(this.helper.css("top"), 10) || 0) + (t ? 0 : this.scrollParent.scrollTop()),
                        left: e.left - (parseInt(this.helper.css("left"), 10) || 0) + (t ? 0 : this.scrollParent.scrollLeft())
                    }
                },
                _cacheMargins: function() {
                    this.margins = {
                        left: parseInt(this.element.css("marginLeft"), 10) || 0,
                        top: parseInt(this.element.css("marginTop"), 10) || 0,
                        right: parseInt(this.element.css("marginRight"), 10) || 0,
                        bottom: parseInt(this.element.css("marginBottom"), 10) || 0
                    }
                },
                _cacheHelperProportions: function() {
                    this.helperProportions = {
                        width: this.helper.outerWidth(),
                        height: this.helper.outerHeight()
                    }
                },
                _setContainment: function() {
                    var t, n, i, o = this.options, s = this.document[0];
                    this.relativeContainer = null,
                    o.containment ? "window" !== o.containment ? "document" !== o.containment ? o.containment.constructor !== Array ? ("parent" === o.containment && (o.containment = this.helper[0].parentNode),
                    (i = (n = e(o.containment))[0]) && (t = /(scroll|auto)/.test(n.css("overflow")),
                    this.containment = [(parseInt(n.css("borderLeftWidth"), 10) || 0) + (parseInt(n.css("paddingLeft"), 10) || 0), (parseInt(n.css("borderTopWidth"), 10) || 0) + (parseInt(n.css("paddingTop"), 10) || 0), (t ? Math.max(i.scrollWidth, i.offsetWidth) : i.offsetWidth) - (parseInt(n.css("borderRightWidth"), 10) || 0) - (parseInt(n.css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (t ? Math.max(i.scrollHeight, i.offsetHeight) : i.offsetHeight) - (parseInt(n.css("borderBottomWidth"), 10) || 0) - (parseInt(n.css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom],
                    this.relativeContainer = n)) : this.containment = o.containment : this.containment = [0, 0, e(s).width() - this.helperProportions.width - this.margins.left, (e(s).height() || s.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top] : this.containment = [e(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, e(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, e(window).scrollLeft() + e(window).width() - this.helperProportions.width - this.margins.left, e(window).scrollTop() + (e(window).height() || s.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top] : this.containment = null
                },
                _convertPositionTo: function(e, t) {
                    t || (t = this.position);
                    var n = "absolute" === e ? 1 : -1
                      , i = this._isRootNode(this.scrollParent[0]);
                    return {
                        top: t.top + this.offset.relative.top * n + this.offset.parent.top * n - ("fixed" === this.cssPosition ? -this.offset.scroll.top : i ? 0 : this.offset.scroll.top) * n,
                        left: t.left + this.offset.relative.left * n + this.offset.parent.left * n - ("fixed" === this.cssPosition ? -this.offset.scroll.left : i ? 0 : this.offset.scroll.left) * n
                    }
                },
                _generatePosition: function(e, t) {
                    var n, i, o, s, r = this.options, a = this._isRootNode(this.scrollParent[0]), l = e.pageX, c = e.pageY;
                    return a && this.offset.scroll || (this.offset.scroll = {
                        top: this.scrollParent.scrollTop(),
                        left: this.scrollParent.scrollLeft()
                    }),
                    t && (this.containment && (this.relativeContainer ? (i = this.relativeContainer.offset(),
                    n = [this.containment[0] + i.left, this.containment[1] + i.top, this.containment[2] + i.left, this.containment[3] + i.top]) : n = this.containment,
                    e.pageX - this.offset.click.left < n[0] && (l = n[0] + this.offset.click.left),
                    e.pageY - this.offset.click.top < n[1] && (c = n[1] + this.offset.click.top),
                    e.pageX - this.offset.click.left > n[2] && (l = n[2] + this.offset.click.left),
                    e.pageY - this.offset.click.top > n[3] && (c = n[3] + this.offset.click.top)),
                    r.grid && (o = r.grid[1] ? this.originalPageY + Math.round((c - this.originalPageY) / r.grid[1]) * r.grid[1] : this.originalPageY,
                    c = n ? o - this.offset.click.top >= n[1] || o - this.offset.click.top > n[3] ? o : o - this.offset.click.top >= n[1] ? o - r.grid[1] : o + r.grid[1] : o,
                    s = r.grid[0] ? this.originalPageX + Math.round((l - this.originalPageX) / r.grid[0]) * r.grid[0] : this.originalPageX,
                    l = n ? s - this.offset.click.left >= n[0] || s - this.offset.click.left > n[2] ? s : s - this.offset.click.left >= n[0] ? s - r.grid[0] : s + r.grid[0] : s),
                    "y" === r.axis && (l = this.originalPageX),
                    "x" === r.axis && (c = this.originalPageY)),
                    {
                        top: c - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.offset.scroll.top : a ? 0 : this.offset.scroll.top),
                        left: l - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.offset.scroll.left : a ? 0 : this.offset.scroll.left)
                    }
                },
                _clear: function() {
                    this._removeClass(this.helper, "ui-draggable-dragging"),
                    this.helper[0] === this.element[0] || this.cancelHelperRemoval || this.helper.remove(),
                    this.helper = null,
                    this.cancelHelperRemoval = !1,
                    this.destroyOnClear && this.destroy()
                },
                _trigger: function(t, n, i) {
                    return i = i || this._uiHash(),
                    e.ui.plugin.call(this, t, [n, i, this], !0),
                    /^(drag|start|stop)/.test(t) && (this.positionAbs = this._convertPositionTo("absolute"),
                    i.offset = this.positionAbs),
                    e.Widget.prototype._trigger.call(this, t, n, i)
                },
                plugins: {},
                _uiHash: function() {
                    return {
                        helper: this.helper,
                        position: this.position,
                        originalPosition: this.originalPosition,
                        offset: this.positionAbs
                    }
                }
            }),
            e.ui.plugin.add("draggable", "connectToSortable", {
                start: function(t, n, i) {
                    var o = e.extend({}, n, {
                        item: i.element
                    });
                    i.sortables = [],
                    e(i.options.connectToSortable).each((function() {
                        var n = e(this).sortable("instance");
                        n && !n.options.disabled && (i.sortables.push(n),
                        n.refreshPositions(),
                        n._trigger("activate", t, o))
                    }
                    ))
                },
                stop: function(t, n, i) {
                    var o = e.extend({}, n, {
                        item: i.element
                    });
                    i.cancelHelperRemoval = !1,
                    e.each(i.sortables, (function() {
                        var e = this;
                        e.isOver ? (e.isOver = 0,
                        i.cancelHelperRemoval = !0,
                        e.cancelHelperRemoval = !1,
                        e._storedCSS = {
                            position: e.placeholder.css("position"),
                            top: e.placeholder.css("top"),
                            left: e.placeholder.css("left")
                        },
                        e._mouseStop(t),
                        e.options.helper = e.options._helper) : (e.cancelHelperRemoval = !0,
                        e._trigger("deactivate", t, o))
                    }
                    ))
                },
                drag: function(t, n, i) {
                    e.each(i.sortables, (function() {
                        var o = !1
                          , s = this;
                        s.positionAbs = i.positionAbs,
                        s.helperProportions = i.helperProportions,
                        s.offset.click = i.offset.click,
                        s._intersectsWith(s.containerCache) && (o = !0,
                        e.each(i.sortables, (function() {
                            return this.positionAbs = i.positionAbs,
                            this.helperProportions = i.helperProportions,
                            this.offset.click = i.offset.click,
                            this !== s && this._intersectsWith(this.containerCache) && e.contains(s.element[0], this.element[0]) && (o = !1),
                            o
                        }
                        ))),
                        o ? (s.isOver || (s.isOver = 1,
                        i._parent = n.helper.parent(),
                        s.currentItem = n.helper.appendTo(s.element).data("ui-sortable-item", !0),
                        s.options._helper = s.options.helper,
                        s.options.helper = function() {
                            return n.helper[0]
                        }
                        ,
                        t.target = s.currentItem[0],
                        s._mouseCapture(t, !0),
                        s._mouseStart(t, !0, !0),
                        s.offset.click.top = i.offset.click.top,
                        s.offset.click.left = i.offset.click.left,
                        s.offset.parent.left -= i.offset.parent.left - s.offset.parent.left,
                        s.offset.parent.top -= i.offset.parent.top - s.offset.parent.top,
                        i._trigger("toSortable", t),
                        i.dropped = s.element,
                        e.each(i.sortables, (function() {
                            this.refreshPositions()
                        }
                        )),
                        i.currentItem = i.element,
                        s.fromOutside = i),
                        s.currentItem && (s._mouseDrag(t),
                        n.position = s.position)) : s.isOver && (s.isOver = 0,
                        s.cancelHelperRemoval = !0,
                        s.options._revert = s.options.revert,
                        s.options.revert = !1,
                        s._trigger("out", t, s._uiHash(s)),
                        s._mouseStop(t, !0),
                        s.options.revert = s.options._revert,
                        s.options.helper = s.options._helper,
                        s.placeholder && s.placeholder.remove(),
                        n.helper.appendTo(i._parent),
                        i._refreshOffsets(t),
                        n.position = i._generatePosition(t, !0),
                        i._trigger("fromSortable", t),
                        i.dropped = !1,
                        e.each(i.sortables, (function() {
                            this.refreshPositions()
                        }
                        )))
                    }
                    ))
                }
            }),
            e.ui.plugin.add("draggable", "cursor", {
                start: function(t, n, i) {
                    var o = e("body")
                      , s = i.options;
                    o.css("cursor") && (s._cursor = o.css("cursor")),
                    o.css("cursor", s.cursor)
                },
                stop: function(t, n, i) {
                    var o = i.options;
                    o._cursor && e("body").css("cursor", o._cursor)
                }
            }),
            e.ui.plugin.add("draggable", "opacity", {
                start: function(t, n, i) {
                    var o = e(n.helper)
                      , s = i.options;
                    o.css("opacity") && (s._opacity = o.css("opacity")),
                    o.css("opacity", s.opacity)
                },
                stop: function(t, n, i) {
                    var o = i.options;
                    o._opacity && e(n.helper).css("opacity", o._opacity)
                }
            }),
            e.ui.plugin.add("draggable", "scroll", {
                start: function(e, t, n) {
                    n.scrollParentNotHidden || (n.scrollParentNotHidden = n.helper.scrollParent(!1)),
                    n.scrollParentNotHidden[0] !== n.document[0] && "HTML" !== n.scrollParentNotHidden[0].tagName && (n.overflowOffset = n.scrollParentNotHidden.offset())
                },
                drag: function(t, n, i) {
                    var o = i.options
                      , s = !1
                      , r = i.scrollParentNotHidden[0]
                      , a = i.document[0];
                    r !== a && "HTML" !== r.tagName ? (o.axis && "x" === o.axis || (i.overflowOffset.top + r.offsetHeight - t.pageY < o.scrollSensitivity ? r.scrollTop = s = r.scrollTop + o.scrollSpeed : t.pageY - i.overflowOffset.top < o.scrollSensitivity && (r.scrollTop = s = r.scrollTop - o.scrollSpeed)),
                    o.axis && "y" === o.axis || (i.overflowOffset.left + r.offsetWidth - t.pageX < o.scrollSensitivity ? r.scrollLeft = s = r.scrollLeft + o.scrollSpeed : t.pageX - i.overflowOffset.left < o.scrollSensitivity && (r.scrollLeft = s = r.scrollLeft - o.scrollSpeed))) : (o.axis && "x" === o.axis || (t.pageY - e(a).scrollTop() < o.scrollSensitivity ? s = e(a).scrollTop(e(a).scrollTop() - o.scrollSpeed) : e(window).height() - (t.pageY - e(a).scrollTop()) < o.scrollSensitivity && (s = e(a).scrollTop(e(a).scrollTop() + o.scrollSpeed))),
                    o.axis && "y" === o.axis || (t.pageX - e(a).scrollLeft() < o.scrollSensitivity ? s = e(a).scrollLeft(e(a).scrollLeft() - o.scrollSpeed) : e(window).width() - (t.pageX - e(a).scrollLeft()) < o.scrollSensitivity && (s = e(a).scrollLeft(e(a).scrollLeft() + o.scrollSpeed)))),
                    !1 !== s && e.ui.ddmanager && !o.dropBehaviour && e.ui.ddmanager.prepareOffsets(i, t)
                }
            }),
            e.ui.plugin.add("draggable", "snap", {
                start: function(t, n, i) {
                    var o = i.options;
                    i.snapElements = [],
                    e(o.snap.constructor !== String ? o.snap.items || ":data(ui-draggable)" : o.snap).each((function() {
                        var t = e(this)
                          , n = t.offset();
                        this !== i.element[0] && i.snapElements.push({
                            item: this,
                            width: t.outerWidth(),
                            height: t.outerHeight(),
                            top: n.top,
                            left: n.left
                        })
                    }
                    ))
                },
                drag: function(t, n, i) {
                    var o, s, r, a, l, c, u, d, h, p, f = i.options, _ = f.snapTolerance, m = n.offset.left, g = m + i.helperProportions.width, v = n.offset.top, y = v + i.helperProportions.height;
                    for (h = i.snapElements.length - 1; h >= 0; h--)
                        c = (l = i.snapElements[h].left - i.margins.left) + i.snapElements[h].width,
                        d = (u = i.snapElements[h].top - i.margins.top) + i.snapElements[h].height,
                        g < l - _ || m > c + _ || y < u - _ || v > d + _ || !e.contains(i.snapElements[h].item.ownerDocument, i.snapElements[h].item) ? (i.snapElements[h].snapping && i.options.snap.release && i.options.snap.release.call(i.element, t, e.extend(i._uiHash(), {
                            snapItem: i.snapElements[h].item
                        })),
                        i.snapElements[h].snapping = !1) : ("inner" !== f.snapMode && (o = Math.abs(u - y) <= _,
                        s = Math.abs(d - v) <= _,
                        r = Math.abs(l - g) <= _,
                        a = Math.abs(c - m) <= _,
                        o && (n.position.top = i._convertPositionTo("relative", {
                            top: u - i.helperProportions.height,
                            left: 0
                        }).top),
                        s && (n.position.top = i._convertPositionTo("relative", {
                            top: d,
                            left: 0
                        }).top),
                        r && (n.position.left = i._convertPositionTo("relative", {
                            top: 0,
                            left: l - i.helperProportions.width
                        }).left),
                        a && (n.position.left = i._convertPositionTo("relative", {
                            top: 0,
                            left: c
                        }).left)),
                        p = o || s || r || a,
                        "outer" !== f.snapMode && (o = Math.abs(u - v) <= _,
                        s = Math.abs(d - y) <= _,
                        r = Math.abs(l - m) <= _,
                        a = Math.abs(c - g) <= _,
                        o && (n.position.top = i._convertPositionTo("relative", {
                            top: u,
                            left: 0
                        }).top),
                        s && (n.position.top = i._convertPositionTo("relative", {
                            top: d - i.helperProportions.height,
                            left: 0
                        }).top),
                        r && (n.position.left = i._convertPositionTo("relative", {
                            top: 0,
                            left: l
                        }).left),
                        a && (n.position.left = i._convertPositionTo("relative", {
                            top: 0,
                            left: c - i.helperProportions.width
                        }).left)),
                        !i.snapElements[h].snapping && (o || s || r || a || p) && i.options.snap.snap && i.options.snap.snap.call(i.element, t, e.extend(i._uiHash(), {
                            snapItem: i.snapElements[h].item
                        })),
                        i.snapElements[h].snapping = o || s || r || a || p)
                }
            }),
            e.ui.plugin.add("draggable", "stack", {
                start: function(t, n, i) {
                    var o, s = i.options, r = e.makeArray(e(s.stack)).sort((function(t, n) {
                        return (parseInt(e(t).css("zIndex"), 10) || 0) - (parseInt(e(n).css("zIndex"), 10) || 0)
                    }
                    ));
                    r.length && (o = parseInt(e(r[0]).css("zIndex"), 10) || 0,
                    e(r).each((function(t) {
                        e(this).css("zIndex", o + t)
                    }
                    )),
                    this.css("zIndex", o + r.length))
                }
            }),
            e.ui.plugin.add("draggable", "zIndex", {
                start: function(t, n, i) {
                    var o = e(n.helper)
                      , s = i.options;
                    o.css("zIndex") && (s._zIndex = o.css("zIndex")),
                    o.css("zIndex", s.zIndex)
                },
                stop: function(t, n, i) {
                    var o = i.options;
                    o._zIndex && e(n.helper).css("zIndex", o._zIndex)
                }
            }),
            e.ui.draggable
        }
        ) ? i.apply(t, o) : i) || (e.exports = s)
    }
    ,
    517430: (e, t, n) => {
        var i, o, s;
        o = [n(661533), n(659642), n(462106), n(948220), n(528803)],
        void 0 === (s = "function" == typeof (i = function(e) {
            e.widget("ui.droppable", {
                version: "1.12.1",
                widgetEventPrefix: "drop",
                options: {
                    accept: "*",
                    addClasses: !0,
                    greedy: !1,
                    scope: "default",
                    tolerance: "intersect",
                    activate: null,
                    deactivate: null,
                    drop: null,
                    out: null,
                    over: null
                },
                _create: function() {
                    var t, n = this.options, i = n.accept;
                    this.isover = !1,
                    this.isout = !0,
                    this.accept = e.isFunction(i) ? i : function(e) {
                        return e.is(i)
                    }
                    ,
                    this.proportions = function() {
                        if (!arguments.length)
                            return t || (t = {
                                width: this.element[0].offsetWidth,
                                height: this.element[0].offsetHeight
                            });
                        t = arguments[0]
                    }
                    ,
                    this._addToManager(n.scope),
                    n.addClasses && this._addClass("ui-droppable")
                },
                _addToManager: function(t) {
                    e.ui.ddmanager.droppables[t] = e.ui.ddmanager.droppables[t] || [],
                    e.ui.ddmanager.droppables[t].push(this)
                },
                _splice: function(e) {
                    for (var t = 0; t < e.length; t++)
                        e[t] === this && e.splice(t, 1)
                },
                _destroy: function() {
                    var t = e.ui.ddmanager.droppables[this.options.scope];
                    this._splice(t)
                },
                _setOption: function(t, n) {
                    if ("accept" === t)
                        this.accept = e.isFunction(n) ? n : function(e) {
                            return e.is(n)
                        }
                        ;
                    else if ("scope" === t) {
                        var i = e.ui.ddmanager.droppables[this.options.scope];
                        this._splice(i),
                        this._addToManager(n)
                    }
                    this._super(t, n)
                },
                _activate: function(t) {
                    var n = e.ui.ddmanager.current;
                    this._addActiveClass(),
                    n && this._trigger("activate", t, this.ui(n))
                },
                _deactivate: function(t) {
                    var n = e.ui.ddmanager.current;
                    this._removeActiveClass(),
                    n && this._trigger("deactivate", t, this.ui(n))
                },
                _over: function(t) {
                    var n = e.ui.ddmanager.current;
                    n && (n.currentItem || n.element)[0] !== this.element[0] && this.accept.call(this.element[0], n.currentItem || n.element) && (this._addHoverClass(),
                    this._trigger("over", t, this.ui(n)))
                },
                _out: function(t) {
                    var n = e.ui.ddmanager.current;
                    n && (n.currentItem || n.element)[0] !== this.element[0] && this.accept.call(this.element[0], n.currentItem || n.element) && (this._removeHoverClass(),
                    this._trigger("out", t, this.ui(n)))
                },
                _drop: function(n, i) {
                    var o = i || e.ui.ddmanager.current
                      , s = !1;
                    return !(!o || (o.currentItem || o.element)[0] === this.element[0]) && (this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each((function() {
                        var i = e(this).droppable("instance");
                        if (i.options.greedy && !i.options.disabled && i.options.scope === o.options.scope && i.accept.call(i.element[0], o.currentItem || o.element) && t(o, e.extend(i, {
                            offset: i.element.offset()
                        }), i.options.tolerance, n))
                            return s = !0,
                            !1
                    }
                    )),
                    !s && !!this.accept.call(this.element[0], o.currentItem || o.element) && (this._removeActiveClass(),
                    this._removeHoverClass(),
                    this._trigger("drop", n, this.ui(o)),
                    this.element))
                },
                ui: function(e) {
                    return {
                        draggable: e.currentItem || e.element,
                        helper: e.helper,
                        position: e.position,
                        offset: e.positionAbs
                    }
                },
                _addHoverClass: function() {
                    this._addClass("ui-droppable-hover")
                },
                _removeHoverClass: function() {
                    this._removeClass("ui-droppable-hover")
                },
                _addActiveClass: function() {
                    this._addClass("ui-droppable-active")
                },
                _removeActiveClass: function() {
                    this._removeClass("ui-droppable-active")
                }
            });
            var t = e.ui.intersect = function() {
                function e(e, t, n) {
                    return e >= t && e < t + n
                }
                return function(t, n, i, o) {
                    if (!n.offset)
                        return !1;
                    var s = (t.positionAbs || t.position.absolute).left + t.margins.left
                      , r = (t.positionAbs || t.position.absolute).top + t.margins.top
                      , a = s + t.helperProportions.width
                      , l = r + t.helperProportions.height
                      , c = n.offset.left
                      , u = n.offset.top
                      , d = c + n.proportions().width
                      , h = u + n.proportions().height;
                    switch (i) {
                    case "fit":
                        return c <= s && a <= d && u <= r && l <= h;
                    case "intersect":
                        return c < s + t.helperProportions.width / 2 && a - t.helperProportions.width / 2 < d && u < r + t.helperProportions.height / 2 && l - t.helperProportions.height / 2 < h;
                    case "pointer":
                        return e(o.pageY, u, n.proportions().height) && e(o.pageX, c, n.proportions().width);
                    case "touch":
                        return (r >= u && r <= h || l >= u && l <= h || r < u && l > h) && (s >= c && s <= d || a >= c && a <= d || s < c && a > d);
                    default:
                        return !1
                    }
                }
            }();
            return e.ui.ddmanager = {
                current: null,
                droppables: {
                    default: []
                },
                prepareOffsets: function(t, n) {
                    var i, o, s = e.ui.ddmanager.droppables[t.options.scope] || [], r = n ? n.type : null, a = (t.currentItem || t.element).find(":data(ui-droppable)").addBack();
                    e: for (i = 0; i < s.length; i++)
                        if (!(s[i].options.disabled || t && !s[i].accept.call(s[i].element[0], t.currentItem || t.element))) {
                            for (o = 0; o < a.length; o++)
                                if (a[o] === s[i].element[0]) {
                                    s[i].proportions().height = 0;
                                    continue e
                                }
                            s[i].visible = "none" !== s[i].element.css("display"),
                            s[i].visible && ("mousedown" === r && s[i]._activate.call(s[i], n),
                            s[i].offset = s[i].element.offset(),
                            s[i].proportions({
                                width: s[i].element[0].offsetWidth,
                                height: s[i].element[0].offsetHeight
                            }))
                        }
                },
                drop: function(n, i) {
                    var o = !1;
                    return e.each((e.ui.ddmanager.droppables[n.options.scope] || []).slice(), (function() {
                        this.options && (!this.options.disabled && this.visible && t(n, this, this.options.tolerance, i) && (o = this._drop.call(this, i) || o),
                        !this.options.disabled && this.visible && this.accept.call(this.element[0], n.currentItem || n.element) && (this.isout = !0,
                        this.isover = !1,
                        this._deactivate.call(this, i)))
                    }
                    )),
                    o
                },
                dragStart: function(t, n) {
                    t.element.parentsUntil("body").on("scroll.droppable", (function() {
                        t.options.refreshPositions || e.ui.ddmanager.prepareOffsets(t, n)
                    }
                    ))
                },
                drag: function(n, i) {
                    n.options.refreshPositions && e.ui.ddmanager.prepareOffsets(n, i),
                    e.each(e.ui.ddmanager.droppables[n.options.scope] || [], (function() {
                        if (!this.options.disabled && !this.greedyChild && this.visible) {
                            var o, s, r, a = t(n, this, this.options.tolerance, i), l = !a && this.isover ? "isout" : a && !this.isover ? "isover" : null;
                            l && (this.options.greedy && (s = this.options.scope,
                            (r = this.element.parents(":data(ui-droppable)").filter((function() {
                                return e(this).droppable("instance").options.scope === s
                            }
                            ))).length && ((o = e(r[0]).droppable("instance")).greedyChild = "isover" === l)),
                            o && "isover" === l && (o.isover = !1,
                            o.isout = !0,
                            o._out.call(o, i)),
                            this[l] = !0,
                            this["isout" === l ? "isover" : "isout"] = !1,
                            this["isover" === l ? "_over" : "_out"].call(this, i),
                            o && "isout" === l && (o.isout = !1,
                            o.isover = !0,
                            o._over.call(o, i)))
                        }
                    }
                    ))
                },
                dragStop: function(t, n) {
                    t.element.parentsUntil("body").off("scroll.droppable"),
                    t.options.refreshPositions || e.ui.ddmanager.prepareOffsets(t, n)
                }
            },
            !1 !== e.uiBackCompat && e.widget("ui.droppable", e.ui.droppable, {
                options: {
                    hoverClass: !1,
                    activeClass: !1
                },
                _addActiveClass: function() {
                    this._super(),
                    this.options.activeClass && this.element.addClass(this.options.activeClass)
                },
                _removeActiveClass: function() {
                    this._super(),
                    this.options.activeClass && this.element.removeClass(this.options.activeClass)
                },
                _addHoverClass: function() {
                    this._super(),
                    this.options.hoverClass && this.element.addClass(this.options.hoverClass)
                },
                _removeHoverClass: function() {
                    this._super(),
                    this.options.hoverClass && this.element.removeClass(this.options.hoverClass)
                }
            }),
            e.ui.droppable
        }
        ) ? i.apply(t, o) : i) || (e.exports = s)
    }
    ,
    462106: (e, t, n) => {
        var i, o, s;
        o = [n(661533), n(316936), n(948220), n(528803)],
        void 0 === (s = "function" == typeof (i = function(e) {
            var t = !1;
            return e(document).on("mouseup", (function() {
                t = !1
            }
            )),
            e.widget("ui.mouse", {
                version: "1.12.1",
                options: {
                    cancel: "input, textarea, button, select, option",
                    distance: 1,
                    delay: 0
                },
                _mouseInit: function() {
                    var t = this;
                    this.element.on("mousedown." + this.widgetName, (function(e) {
                        return t._mouseDown(e)
                    }
                    )).on("click." + this.widgetName, (function(n) {
                        if (!0 === e.data(n.target, t.widgetName + ".preventClickEvent"))
                            return e.removeData(n.target, t.widgetName + ".preventClickEvent"),
                            n.stopImmediatePropagation(),
                            !1
                    }
                    )),
                    this.started = !1
                },
                _mouseDestroy: function() {
                    this.element.off("." + this.widgetName),
                    this._mouseMoveDelegate && this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate)
                },
                _mouseDown: function(n) {
                    if (!t) {
                        this._mouseMoved = !1,
                        this._mouseStarted && this._mouseUp(n),
                        this._mouseDownEvent = n;
                        var i = this
                          , o = 1 === n.which
                          , s = !("string" != typeof this.options.cancel || !n.target.nodeName) && e(n.target).closest(this.options.cancel).length;
                        return !(o && !s && this._mouseCapture(n) && (this.mouseDelayMet = !this.options.delay,
                        this.mouseDelayMet || (this._mouseDelayTimer = setTimeout((function() {
                            i.mouseDelayMet = !0
                        }
                        ), this.options.delay)),
                        this._mouseDistanceMet(n) && this._mouseDelayMet(n) && (this._mouseStarted = !1 !== this._mouseStart(n),
                        !this._mouseStarted) ? (n.preventDefault(),
                        0) : (!0 === e.data(n.target, this.widgetName + ".preventClickEvent") && e.removeData(n.target, this.widgetName + ".preventClickEvent"),
                        this._mouseMoveDelegate = function(e) {
                            return i._mouseMove(e)
                        }
                        ,
                        this._mouseUpDelegate = function(e) {
                            return i._mouseUp(e)
                        }
                        ,
                        this.document.on("mousemove." + this.widgetName, this._mouseMoveDelegate).on("mouseup." + this.widgetName, this._mouseUpDelegate),
                        n.preventDefault(),
                        t = !0,
                        0)))
                    }
                },
                _mouseMove: function(t) {
                    if (this._mouseMoved) {
                        if (e.ui.ie && (!document.documentMode || document.documentMode < 9) && !t.button)
                            return this._mouseUp(t);
                        if (!t.which)
                            if (t.originalEvent.altKey || t.originalEvent.ctrlKey || t.originalEvent.metaKey || t.originalEvent.shiftKey)
                                this.ignoreMissingWhich = !0;
                            else if (!this.ignoreMissingWhich)
                                return this._mouseUp(t)
                    }
                    return (t.which || t.button) && (this._mouseMoved = !0),
                    this._mouseStarted ? (this._mouseDrag(t),
                    t.preventDefault()) : (this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = !1 !== this._mouseStart(this._mouseDownEvent, t),
                    this._mouseStarted ? this._mouseDrag(t) : this._mouseUp(t)),
                    !this._mouseStarted)
                },
                _mouseUp: function(n) {
                    this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate),
                    this._mouseStarted && (this._mouseStarted = !1,
                    n.target === this._mouseDownEvent.target && e.data(n.target, this.widgetName + ".preventClickEvent", !0),
                    this._mouseStop(n)),
                    this._mouseDelayTimer && (clearTimeout(this._mouseDelayTimer),
                    delete this._mouseDelayTimer),
                    this.ignoreMissingWhich = !1,
                    t = !1,
                    n.preventDefault()
                },
                _mouseDistanceMet: function(e) {
                    return Math.max(Math.abs(this._mouseDownEvent.pageX - e.pageX), Math.abs(this._mouseDownEvent.pageY - e.pageY)) >= this.options.distance
                },
                _mouseDelayMet: function() {
                    return this.mouseDelayMet
                },
                _mouseStart: function() {},
                _mouseDrag: function() {},
                _mouseStop: function() {},
                _mouseCapture: function() {
                    return !0
                }
            })
        }
        ) ? i.apply(t, o) : i) || (e.exports = s)
    }
    ,
    772362: (e, t, n) => {
        var i, o, s;
        o = [n(661533), n(462106), n(256547), n(866484), n(948220), n(528803)],
        void 0 === (s = "function" == typeof (i = function(e) {
            return e.widget("ui.resizable", e.ui.mouse, {
                version: "1.12.1",
                widgetEventPrefix: "resize",
                options: {
                    alsoResize: !1,
                    animate: !1,
                    animateDuration: "slow",
                    animateEasing: "swing",
                    aspectRatio: !1,
                    autoHide: !1,
                    classes: {
                        "ui-resizable-se": "ui-icon ui-icon-gripsmall-diagonal-se"
                    },
                    containment: !1,
                    ghost: !1,
                    grid: !1,
                    handles: "e,s,se",
                    helper: !1,
                    maxHeight: null,
                    maxWidth: null,
                    minHeight: 10,
                    minWidth: 10,
                    zIndex: 90,
                    resize: null,
                    start: null,
                    stop: null
                },
                _num: function(e) {
                    return parseFloat(e) || 0
                },
                _isNumber: function(e) {
                    return !isNaN(parseFloat(e))
                },
                _hasScroll: function(t, n) {
                    if ("hidden" === e(t).css("overflow"))
                        return !1;
                    var i = n && "left" === n ? "scrollLeft" : "scrollTop"
                      , o = !1;
                    return t[i] > 0 || (t[i] = 1,
                    o = t[i] > 0,
                    t[i] = 0,
                    o)
                },
                _create: function() {
                    var t, n = this.options, i = this;
                    this._addClass("ui-resizable"),
                    e.extend(this, {
                        _aspectRatio: !!n.aspectRatio,
                        aspectRatio: n.aspectRatio,
                        originalElement: this.element,
                        _proportionallyResizeElements: [],
                        _helper: n.helper || n.ghost || n.animate ? n.helper || "ui-resizable-helper" : null
                    }),
                    this.element[0].nodeName.match(/^(canvas|textarea|input|select|button|img)$/i) && (this.element.wrap(e("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({
                        position: this.element.css("position"),
                        width: this.element.outerWidth(),
                        height: this.element.outerHeight(),
                        top: this.element.css("top"),
                        left: this.element.css("left")
                    })),
                    this.element = this.element.parent().data("ui-resizable", this.element.resizable("instance")),
                    this.elementIsWrapper = !0,
                    t = {
                        marginTop: this.originalElement.css("marginTop"),
                        marginRight: this.originalElement.css("marginRight"),
                        marginBottom: this.originalElement.css("marginBottom"),
                        marginLeft: this.originalElement.css("marginLeft")
                    },
                    this.element.css(t),
                    this.originalElement.css("margin", 0),
                    this.originalResizeStyle = this.originalElement.css("resize"),
                    this.originalElement.css("resize", "none"),
                    this._proportionallyResizeElements.push(this.originalElement.css({
                        position: "static",
                        zoom: 1,
                        display: "block"
                    })),
                    this.originalElement.css(t),
                    this._proportionallyResize()),
                    this._setupHandles(),
                    n.autoHide && e(this.element).on("mouseenter", (function() {
                        n.disabled || (i._removeClass("ui-resizable-autohide"),
                        i._handles.show())
                    }
                    )).on("mouseleave", (function() {
                        n.disabled || i.resizing || (i._addClass("ui-resizable-autohide"),
                        i._handles.hide())
                    }
                    )),
                    this._mouseInit()
                },
                _destroy: function() {
                    this._mouseDestroy();
                    var t, n = function(t) {
                        e(t).removeData("resizable").removeData("ui-resizable").off(".resizable").find(".ui-resizable-handle").remove()
                    };
                    return this.elementIsWrapper && (n(this.element),
                    t = this.element,
                    this.originalElement.css({
                        position: t.css("position"),
                        width: t.outerWidth(),
                        height: t.outerHeight(),
                        top: t.css("top"),
                        left: t.css("left")
                    }).insertAfter(t),
                    t.remove()),
                    this.originalElement.css("resize", this.originalResizeStyle),
                    n(this.originalElement),
                    this
                },
                _setOption: function(e, t) {
                    this._super(e, t),
                    "handles" === e && (this._removeHandles(),
                    this._setupHandles())
                },
                _setupHandles: function() {
                    var t, n, i, o, s, r = this.options, a = this;
                    if (this.handles = r.handles || (e(".ui-resizable-handle", this.element).length ? {
                        n: ".ui-resizable-n",
                        e: ".ui-resizable-e",
                        s: ".ui-resizable-s",
                        w: ".ui-resizable-w",
                        se: ".ui-resizable-se",
                        sw: ".ui-resizable-sw",
                        ne: ".ui-resizable-ne",
                        nw: ".ui-resizable-nw"
                    } : "e,s,se"),
                    this._handles = e(),
                    this.handles.constructor === String)
                        for ("all" === this.handles && (this.handles = "n,e,s,w,se,sw,ne,nw"),
                        i = this.handles.split(","),
                        this.handles = {},
                        n = 0; n < i.length; n++)
                            o = "ui-resizable-" + (t = e.trim(i[n])),
                            s = e("<div>"),
                            this._addClass(s, "ui-resizable-handle " + o),
                            s.css({
                                zIndex: r.zIndex
                            }),
                            this.handles[t] = ".ui-resizable-" + t,
                            this.element.append(s);
                    this._renderAxis = function(t) {
                        var n, i, o, s;
                        for (n in t = t || this.element,
                        this.handles)
                            this.handles[n].constructor === String ? this.handles[n] = this.element.children(this.handles[n]).first().show() : (this.handles[n].jquery || this.handles[n].nodeType) && (this.handles[n] = e(this.handles[n]),
                            this._on(this.handles[n], {
                                mousedown: a._mouseDown
                            })),
                            this.elementIsWrapper && this.originalElement[0].nodeName.match(/^(textarea|input|select|button)$/i) && (i = e(this.handles[n], this.element),
                            s = /sw|ne|nw|se|n|s/.test(n) ? i.outerHeight() : i.outerWidth(),
                            o = ["padding", /ne|nw|n/.test(n) ? "Top" : /se|sw|s/.test(n) ? "Bottom" : /^e$/.test(n) ? "Right" : "Left"].join(""),
                            t.css(o, s),
                            this._proportionallyResize()),
                            this._handles = this._handles.add(this.handles[n])
                    }
                    ,
                    this._renderAxis(this.element),
                    this._handles = this._handles.add(this.element.find(".ui-resizable-handle")),
                    this._handles.disableSelection(),
                    this._handles.on("mouseover", (function() {
                        a.resizing || (this.className && (s = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)),
                        a.axis = s && s[1] ? s[1] : "se")
                    }
                    )),
                    r.autoHide && (this._handles.hide(),
                    this._addClass("ui-resizable-autohide"))
                },
                _removeHandles: function() {
                    this._handles.remove()
                },
                _mouseCapture: function(t) {
                    var n, i, o = !1;
                    for (n in this.handles)
                        ((i = e(this.handles[n])[0]) === t.target || e.contains(i, t.target)) && (o = !0);
                    return !this.options.disabled && o
                },
                _mouseStart: function(t) {
                    var n, i, o, s = this.options, r = this.element;
                    return this.resizing = !0,
                    this._renderProxy(),
                    n = this._num(this.helper.css("left")),
                    i = this._num(this.helper.css("top")),
                    s.containment && (n += e(s.containment).scrollLeft() || 0,
                    i += e(s.containment).scrollTop() || 0),
                    this.offset = this.helper.offset(),
                    this.position = {
                        left: n,
                        top: i
                    },
                    this.size = this._helper ? {
                        width: this.helper.width(),
                        height: this.helper.height()
                    } : {
                        width: r.width(),
                        height: r.height()
                    },
                    this.originalSize = this._helper ? {
                        width: r.outerWidth(),
                        height: r.outerHeight()
                    } : {
                        width: r.width(),
                        height: r.height()
                    },
                    this.sizeDiff = {
                        width: r.outerWidth() - r.width(),
                        height: r.outerHeight() - r.height()
                    },
                    this.originalPosition = {
                        left: n,
                        top: i
                    },
                    this.originalMousePosition = {
                        left: t.pageX,
                        top: t.pageY
                    },
                    this.aspectRatio = "number" == typeof s.aspectRatio ? s.aspectRatio : this.originalSize.width / this.originalSize.height || 1,
                    o = e(".ui-resizable-" + this.axis).css("cursor"),
                    e("body").css("cursor", "auto" === o ? this.axis + "-resize" : o),
                    this._addClass("ui-resizable-resizing"),
                    this._propagate("start", t),
                    !0
                },
                _mouseDrag: function(t) {
                    var n, i, o = this.originalMousePosition, s = this.axis, r = t.pageX - o.left || 0, a = t.pageY - o.top || 0, l = this._change[s];
                    return this._updatePrevProperties(),
                    !!l && (n = l.apply(this, [t, r, a]),
                    this._updateVirtualBoundaries(t.shiftKey),
                    (this._aspectRatio || t.shiftKey) && (n = this._updateRatio(n, t)),
                    n = this._respectSize(n, t),
                    this._updateCache(n),
                    this._propagate("resize", t),
                    i = this._applyChanges(),
                    !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(),
                    e.isEmptyObject(i) || (this._updatePrevProperties(),
                    this._trigger("resize", t, this.ui()),
                    this._applyChanges()),
                    !1)
                },
                _mouseStop: function(t) {
                    this.resizing = !1;
                    var n, i, o, s, r, a, l, c = this.options, u = this;
                    return this._helper && (o = (i = (n = this._proportionallyResizeElements).length && /textarea/i.test(n[0].nodeName)) && this._hasScroll(n[0], "left") ? 0 : u.sizeDiff.height,
                    s = i ? 0 : u.sizeDiff.width,
                    r = {
                        width: u.helper.width() - s,
                        height: u.helper.height() - o
                    },
                    a = parseFloat(u.element.css("left")) + (u.position.left - u.originalPosition.left) || null,
                    l = parseFloat(u.element.css("top")) + (u.position.top - u.originalPosition.top) || null,
                    c.animate || this.element.css(e.extend(r, {
                        top: l,
                        left: a
                    })),
                    u.helper.height(u.size.height),
                    u.helper.width(u.size.width),
                    this._helper && !c.animate && this._proportionallyResize()),
                    e("body").css("cursor", "auto"),
                    this._removeClass("ui-resizable-resizing"),
                    this._propagate("stop", t),
                    this._helper && this.helper.remove(),
                    !1
                },
                _updatePrevProperties: function() {
                    this.prevPosition = {
                        top: this.position.top,
                        left: this.position.left
                    },
                    this.prevSize = {
                        width: this.size.width,
                        height: this.size.height
                    }
                },
                _applyChanges: function() {
                    var e = {};
                    return this.position.top !== this.prevPosition.top && (e.top = this.position.top + "px"),
                    this.position.left !== this.prevPosition.left && (e.left = this.position.left + "px"),
                    this.size.width !== this.prevSize.width && (e.width = this.size.width + "px"),
                    this.size.height !== this.prevSize.height && (e.height = this.size.height + "px"),
                    this.helper.css(e),
                    e
                },
                _updateVirtualBoundaries: function(e) {
                    var t, n, i, o, s, r = this.options;
                    s = {
                        minWidth: this._isNumber(r.minWidth) ? r.minWidth : 0,
                        maxWidth: this._isNumber(r.maxWidth) ? r.maxWidth : 1 / 0,
                        minHeight: this._isNumber(r.minHeight) ? r.minHeight : 0,
                        maxHeight: this._isNumber(r.maxHeight) ? r.maxHeight : 1 / 0
                    },
                    (this._aspectRatio || e) && (t = s.minHeight * this.aspectRatio,
                    i = s.minWidth / this.aspectRatio,
                    n = s.maxHeight * this.aspectRatio,
                    o = s.maxWidth / this.aspectRatio,
                    t > s.minWidth && (s.minWidth = t),
                    i > s.minHeight && (s.minHeight = i),
                    n < s.maxWidth && (s.maxWidth = n),
                    o < s.maxHeight && (s.maxHeight = o)),
                    this._vBoundaries = s
                },
                _updateCache: function(e) {
                    this.offset = this.helper.offset(),
                    this._isNumber(e.left) && (this.position.left = e.left),
                    this._isNumber(e.top) && (this.position.top = e.top),
                    this._isNumber(e.height) && (this.size.height = e.height),
                    this._isNumber(e.width) && (this.size.width = e.width)
                },
                _updateRatio: function(e) {
                    var t = this.position
                      , n = this.size
                      , i = this.axis;
                    return this._isNumber(e.height) ? e.width = e.height * this.aspectRatio : this._isNumber(e.width) && (e.height = e.width / this.aspectRatio),
                    "sw" === i && (e.left = t.left + (n.width - e.width),
                    e.top = null),
                    "nw" === i && (e.top = t.top + (n.height - e.height),
                    e.left = t.left + (n.width - e.width)),
                    e
                },
                _respectSize: function(e) {
                    var t = this._vBoundaries
                      , n = this.axis
                      , i = this._isNumber(e.width) && t.maxWidth && t.maxWidth < e.width
                      , o = this._isNumber(e.height) && t.maxHeight && t.maxHeight < e.height
                      , s = this._isNumber(e.width) && t.minWidth && t.minWidth > e.width
                      , r = this._isNumber(e.height) && t.minHeight && t.minHeight > e.height
                      , a = this.originalPosition.left + this.originalSize.width
                      , l = this.originalPosition.top + this.originalSize.height
                      , c = /sw|nw|w/.test(n)
                      , u = /nw|ne|n/.test(n);
                    return s && (e.width = t.minWidth),
                    r && (e.height = t.minHeight),
                    i && (e.width = t.maxWidth),
                    o && (e.height = t.maxHeight),
                    s && c && (e.left = a - t.minWidth),
                    i && c && (e.left = a - t.maxWidth),
                    r && u && (e.top = l - t.minHeight),
                    o && u && (e.top = l - t.maxHeight),
                    e.width || e.height || e.left || !e.top ? e.width || e.height || e.top || !e.left || (e.left = null) : e.top = null,
                    e
                },
                _getPaddingPlusBorderDimensions: function(e) {
                    for (var t = 0, n = [], i = [e.css("borderTopWidth"), e.css("borderRightWidth"), e.css("borderBottomWidth"), e.css("borderLeftWidth")], o = [e.css("paddingTop"), e.css("paddingRight"), e.css("paddingBottom"), e.css("paddingLeft")]; t < 4; t++)
                        n[t] = parseFloat(i[t]) || 0,
                        n[t] += parseFloat(o[t]) || 0;
                    return {
                        height: n[0] + n[2],
                        width: n[1] + n[3]
                    }
                },
                _proportionallyResize: function() {
                    if (this._proportionallyResizeElements.length)
                        for (var e, t = 0, n = this.helper || this.element; t < this._proportionallyResizeElements.length; t++)
                            e = this._proportionallyResizeElements[t],
                            this.outerDimensions || (this.outerDimensions = this._getPaddingPlusBorderDimensions(e)),
                            e.css({
                                height: n.height() - this.outerDimensions.height || 0,
                                width: n.width() - this.outerDimensions.width || 0
                            })
                },
                _renderProxy: function() {
                    var t = this.element
                      , n = this.options;
                    this.elementOffset = t.offset(),
                    this._helper ? (this.helper = this.helper || e("<div style='overflow:hidden;'></div>"),
                    this._addClass(this.helper, this._helper),
                    this.helper.css({
                        width: this.element.outerWidth(),
                        height: this.element.outerHeight(),
                        position: "absolute",
                        left: this.elementOffset.left + "px",
                        top: this.elementOffset.top + "px",
                        zIndex: ++n.zIndex
                    }),
                    this.helper.appendTo("body").disableSelection()) : this.helper = this.element
                },
                _change: {
                    e: function(e, t) {
                        return {
                            width: this.originalSize.width + t
                        }
                    },
                    w: function(e, t) {
                        var n = this.originalSize;
                        return {
                            left: this.originalPosition.left + t,
                            width: n.width - t
                        }
                    },
                    n: function(e, t, n) {
                        var i = this.originalSize;
                        return {
                            top: this.originalPosition.top + n,
                            height: i.height - n
                        }
                    },
                    s: function(e, t, n) {
                        return {
                            height: this.originalSize.height + n
                        }
                    },
                    se: function(t, n, i) {
                        return e.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [t, n, i]))
                    },
                    sw: function(t, n, i) {
                        return e.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [t, n, i]))
                    },
                    ne: function(t, n, i) {
                        return e.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [t, n, i]))
                    },
                    nw: function(t, n, i) {
                        return e.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [t, n, i]))
                    }
                },
                _propagate: function(t, n) {
                    e.ui.plugin.call(this, t, [n, this.ui()]),
                    "resize" !== t && this._trigger(t, n, this.ui())
                },
                plugins: {},
                ui: function() {
                    return {
                        originalElement: this.originalElement,
                        element: this.element,
                        helper: this.helper,
                        position: this.position,
                        size: this.size,
                        originalSize: this.originalSize,
                        originalPosition: this.originalPosition
                    }
                }
            }),
            e.ui.plugin.add("resizable", "animate", {
                stop: function(t) {
                    var n = e(this).resizable("instance")
                      , i = n.options
                      , o = n._proportionallyResizeElements
                      , s = o.length && /textarea/i.test(o[0].nodeName)
                      , r = s && n._hasScroll(o[0], "left") ? 0 : n.sizeDiff.height
                      , a = s ? 0 : n.sizeDiff.width
                      , l = {
                        width: n.size.width - a,
                        height: n.size.height - r
                    }
                      , c = parseFloat(n.element.css("left")) + (n.position.left - n.originalPosition.left) || null
                      , u = parseFloat(n.element.css("top")) + (n.position.top - n.originalPosition.top) || null;
                    n.element.animate(e.extend(l, u && c ? {
                        top: u,
                        left: c
                    } : {}), {
                        duration: i.animateDuration,
                        easing: i.animateEasing,
                        step: function() {
                            var i = {
                                width: parseFloat(n.element.css("width")),
                                height: parseFloat(n.element.css("height")),
                                top: parseFloat(n.element.css("top")),
                                left: parseFloat(n.element.css("left"))
                            };
                            o && o.length && e(o[0]).css({
                                width: i.width,
                                height: i.height
                            }),
                            n._updateCache(i),
                            n._propagate("resize", t)
                        }
                    })
                }
            }),
            e.ui.plugin.add("resizable", "containment", {
                start: function() {
                    var t, n, i, o, s, r, a, l = e(this).resizable("instance"), c = l.options, u = l.element, d = c.containment, h = d instanceof e ? d.get(0) : /parent/.test(d) ? u.parent().get(0) : d;
                    h && (l.containerElement = e(h),
                    /document/.test(d) || d === document ? (l.containerOffset = {
                        left: 0,
                        top: 0
                    },
                    l.containerPosition = {
                        left: 0,
                        top: 0
                    },
                    l.parentData = {
                        element: e(document),
                        left: 0,
                        top: 0,
                        width: e(document).width(),
                        height: e(document).height() || document.body.parentNode.scrollHeight
                    }) : (t = e(h),
                    n = [],
                    e(["Top", "Right", "Left", "Bottom"]).each((function(e, i) {
                        n[e] = l._num(t.css("padding" + i))
                    }
                    )),
                    l.containerOffset = t.offset(),
                    l.containerPosition = t.position(),
                    l.containerSize = {
                        height: t.innerHeight() - n[3],
                        width: t.innerWidth() - n[1]
                    },
                    i = l.containerOffset,
                    o = l.containerSize.height,
                    s = l.containerSize.width,
                    r = l._hasScroll(h, "left") ? h.scrollWidth : s,
                    a = l._hasScroll(h) ? h.scrollHeight : o,
                    l.parentData = {
                        element: h,
                        left: i.left,
                        top: i.top,
                        width: r,
                        height: a
                    }))
                },
                resize: function(t) {
                    var n, i, o, s, r = e(this).resizable("instance"), a = r.options, l = r.containerOffset, c = r.position, u = r._aspectRatio || t.shiftKey, d = {
                        top: 0,
                        left: 0
                    }, h = r.containerElement, p = !0;
                    h[0] !== document && /static/.test(h.css("position")) && (d = l),
                    c.left < (r._helper ? l.left : 0) && (r.size.width = r.size.width + (r._helper ? r.position.left - l.left : r.position.left - d.left),
                    u && (r.size.height = r.size.width / r.aspectRatio,
                    p = !1),
                    r.position.left = a.helper ? l.left : 0),
                    c.top < (r._helper ? l.top : 0) && (r.size.height = r.size.height + (r._helper ? r.position.top - l.top : r.position.top),
                    u && (r.size.width = r.size.height * r.aspectRatio,
                    p = !1),
                    r.position.top = r._helper ? l.top : 0),
                    o = r.containerElement.get(0) === r.element.parent().get(0),
                    s = /relative|absolute/.test(r.containerElement.css("position")),
                    o && s ? (r.offset.left = r.parentData.left + r.position.left,
                    r.offset.top = r.parentData.top + r.position.top) : (r.offset.left = r.element.offset().left,
                    r.offset.top = r.element.offset().top),
                    n = Math.abs(r.sizeDiff.width + (r._helper ? r.offset.left - d.left : r.offset.left - l.left)),
                    i = Math.abs(r.sizeDiff.height + (r._helper ? r.offset.top - d.top : r.offset.top - l.top)),
                    n + r.size.width >= r.parentData.width && (r.size.width = r.parentData.width - n,
                    u && (r.size.height = r.size.width / r.aspectRatio,
                    p = !1)),
                    i + r.size.height >= r.parentData.height && (r.size.height = r.parentData.height - i,
                    u && (r.size.width = r.size.height * r.aspectRatio,
                    p = !1)),
                    p || (r.position.left = r.prevPosition.left,
                    r.position.top = r.prevPosition.top,
                    r.size.width = r.prevSize.width,
                    r.size.height = r.prevSize.height)
                },
                stop: function() {
                    var t = e(this).resizable("instance")
                      , n = t.options
                      , i = t.containerOffset
                      , o = t.containerPosition
                      , s = t.containerElement
                      , r = e(t.helper)
                      , a = r.offset()
                      , l = r.outerWidth() - t.sizeDiff.width
                      , c = r.outerHeight() - t.sizeDiff.height;
                    t._helper && !n.animate && /relative/.test(s.css("position")) && e(this).css({
                        left: a.left - o.left - i.left,
                        width: l,
                        height: c
                    }),
                    t._helper && !n.animate && /static/.test(s.css("position")) && e(this).css({
                        left: a.left - o.left - i.left,
                        width: l,
                        height: c
                    })
                }
            }),
            e.ui.plugin.add("resizable", "alsoResize", {
                start: function() {
                    var t = e(this).resizable("instance").options;
                    e(t.alsoResize).each((function() {
                        var t = e(this);
                        t.data("ui-resizable-alsoresize", {
                            width: parseFloat(t.width()),
                            height: parseFloat(t.height()),
                            left: parseFloat(t.css("left")),
                            top: parseFloat(t.css("top"))
                        })
                    }
                    ))
                },
                resize: function(t, n) {
                    var i = e(this).resizable("instance")
                      , o = i.options
                      , s = i.originalSize
                      , r = i.originalPosition
                      , a = {
                        height: i.size.height - s.height || 0,
                        width: i.size.width - s.width || 0,
                        top: i.position.top - r.top || 0,
                        left: i.position.left - r.left || 0
                    };
                    e(o.alsoResize).each((function() {
                        var t = e(this)
                          , i = e(this).data("ui-resizable-alsoresize")
                          , o = {}
                          , s = t.parents(n.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
                        e.each(s, (function(e, t) {
                            var n = (i[t] || 0) + (a[t] || 0);
                            n && n >= 0 && (o[t] = n || null)
                        }
                        )),
                        t.css(o)
                    }
                    ))
                },
                stop: function() {
                    e(this).removeData("ui-resizable-alsoresize")
                }
            }),
            e.ui.plugin.add("resizable", "ghost", {
                start: function() {
                    var t = e(this).resizable("instance")
                      , n = t.size;
                    t.ghost = t.originalElement.clone(),
                    t.ghost.css({
                        opacity: .25,
                        display: "block",
                        position: "relative",
                        height: n.height,
                        width: n.width,
                        margin: 0,
                        left: 0,
                        top: 0
                    }),
                    t._addClass(t.ghost, "ui-resizable-ghost"),
                    !1 !== e.uiBackCompat && "string" == typeof t.options.ghost && t.ghost.addClass(this.options.ghost),
                    t.ghost.appendTo(t.helper)
                },
                resize: function() {
                    var t = e(this).resizable("instance");
                    t.ghost && t.ghost.css({
                        position: "relative",
                        height: t.size.height,
                        width: t.size.width
                    })
                },
                stop: function() {
                    var t = e(this).resizable("instance");
                    t.ghost && t.helper && t.helper.get(0).removeChild(t.ghost.get(0))
                }
            }),
            e.ui.plugin.add("resizable", "grid", {
                resize: function() {
                    var t, n = e(this).resizable("instance"), i = n.options, o = n.size, s = n.originalSize, r = n.originalPosition, a = n.axis, l = "number" == typeof i.grid ? [i.grid, i.grid] : i.grid, c = l[0] || 1, u = l[1] || 1, d = Math.round((o.width - s.width) / c) * c, h = Math.round((o.height - s.height) / u) * u, p = s.width + d, f = s.height + h, _ = i.maxWidth && i.maxWidth < p, m = i.maxHeight && i.maxHeight < f, g = i.minWidth && i.minWidth > p, v = i.minHeight && i.minHeight > f;
                    i.grid = l,
                    g && (p += c),
                    v && (f += u),
                    _ && (p -= c),
                    m && (f -= u),
                    /^(se|s|e)$/.test(a) ? (n.size.width = p,
                    n.size.height = f) : /^(ne)$/.test(a) ? (n.size.width = p,
                    n.size.height = f,
                    n.position.top = r.top - h) : /^(sw)$/.test(a) ? (n.size.width = p,
                    n.size.height = f,
                    n.position.left = r.left - d) : ((f - u <= 0 || p - c <= 0) && (t = n._getPaddingPlusBorderDimensions(this)),
                    f - u > 0 ? (n.size.height = f,
                    n.position.top = r.top - h) : (f = u - t.height,
                    n.size.height = f,
                    n.position.top = r.top + s.height - f),
                    p - c > 0 ? (n.size.width = p,
                    n.position.left = r.left - d) : (p = c - t.width,
                    n.size.width = p,
                    n.position.left = r.left + s.width - p))
                }
            }),
            e.ui.resizable
        }
        ) ? i.apply(t, o) : i) || (e.exports = s)
    }
    ,
    963880: (e, t, n) => {
        var i, o, s;
        o = [n(661533), n(462106), n(259085), n(316936), n(317626), n(948220), n(528803)],
        void 0 === (s = "function" == typeof (i = function(e) {
            return e.widget("ui.sortable", e.ui.mouse, {
                version: "1.12.1",
                widgetEventPrefix: "sort",
                ready: !1,
                options: {
                    appendTo: "parent",
                    axis: !1,
                    connectWith: !1,
                    containment: !1,
                    cursor: "auto",
                    cursorAt: !1,
                    dropOnEmpty: !0,
                    forcePlaceholderSize: !1,
                    forceHelperSize: !1,
                    grid: !1,
                    handle: !1,
                    helper: "original",
                    items: "> *",
                    opacity: !1,
                    placeholder: !1,
                    revert: !1,
                    scroll: !0,
                    scrollSensitivity: 20,
                    scrollSpeed: 20,
                    scope: "default",
                    tolerance: "intersect",
                    zIndex: 1e3,
                    activate: null,
                    beforeStop: null,
                    change: null,
                    deactivate: null,
                    out: null,
                    over: null,
                    receive: null,
                    remove: null,
                    sort: null,
                    start: null,
                    stop: null,
                    update: null
                },
                _isOverAxis: function(e, t, n) {
                    return e >= t && e < t + n
                },
                _isFloating: function(e) {
                    return /left|right/.test(e.css("float")) || /inline|table-cell/.test(e.css("display"))
                },
                _create: function() {
                    this.containerCache = {},
                    this._addClass("ui-sortable"),
                    this.refresh(),
                    this.offset = this.element.offset(),
                    this._mouseInit(),
                    this._setHandleClassName(),
                    this.ready = !0
                },
                _setOption: function(e, t) {
                    this._super(e, t),
                    "handle" === e && this._setHandleClassName()
                },
                _setHandleClassName: function() {
                    var t = this;
                    this._removeClass(this.element.find(".ui-sortable-handle"), "ui-sortable-handle"),
                    e.each(this.items, (function() {
                        t._addClass(this.instance.options.handle ? this.item.find(this.instance.options.handle) : this.item, "ui-sortable-handle")
                    }
                    ))
                },
                _destroy: function() {
                    this._mouseDestroy();
                    for (var e = this.items.length - 1; e >= 0; e--)
                        this.items[e].item.removeData(this.widgetName + "-item");
                    return this
                },
                _mouseCapture: function(t, n) {
                    var i = null
                      , o = !1
                      , s = this;
                    return !(this.reverting || this.options.disabled || "static" === this.options.type || (this._refreshItems(t),
                    e(t.target).parents().each((function() {
                        if (e.data(this, s.widgetName + "-item") === s)
                            return i = e(this),
                            !1
                    }
                    )),
                    e.data(t.target, s.widgetName + "-item") === s && (i = e(t.target)),
                    !i || this.options.handle && !n && (e(this.options.handle, i).find("*").addBack().each((function() {
                        this === t.target && (o = !0)
                    }
                    )),
                    !o) || (this.currentItem = i,
                    this._removeCurrentsFromItems(),
                    0)))
                },
                _mouseStart: function(t, n, i) {
                    var o, s, r = this.options;
                    if (this.currentContainer = this,
                    this.refreshPositions(),
                    this.helper = this._createHelper(t),
                    this._cacheHelperProportions(),
                    this._cacheMargins(),
                    this.scrollParent = this.helper.scrollParent(),
                    this.offset = this.currentItem.offset(),
                    this.offset = {
                        top: this.offset.top - this.margins.top,
                        left: this.offset.left - this.margins.left
                    },
                    e.extend(this.offset, {
                        click: {
                            left: t.pageX - this.offset.left,
                            top: t.pageY - this.offset.top
                        },
                        parent: this._getParentOffset(),
                        relative: this._getRelativeOffset()
                    }),
                    this.helper.css("position", "absolute"),
                    this.cssPosition = this.helper.css("position"),
                    this.originalPosition = this._generatePosition(t),
                    this.originalPageX = t.pageX,
                    this.originalPageY = t.pageY,
                    r.cursorAt && this._adjustOffsetFromHelper(r.cursorAt),
                    this.domPosition = {
                        prev: this.currentItem.prev()[0],
                        parent: this.currentItem.parent()[0]
                    },
                    this.helper[0] !== this.currentItem[0] && this.currentItem.hide(),
                    this._createPlaceholder(),
                    r.containment && this._setContainment(),
                    r.cursor && "auto" !== r.cursor && (s = this.document.find("body"),
                    this.storedCursor = s.css("cursor"),
                    s.css("cursor", r.cursor),
                    this.storedStylesheet = e("<style>*{ cursor: " + r.cursor + " !important; }</style>").appendTo(s)),
                    r.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")),
                    this.helper.css("opacity", r.opacity)),
                    r.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")),
                    this.helper.css("zIndex", r.zIndex)),
                    this.scrollParent[0] !== this.document[0] && "HTML" !== this.scrollParent[0].tagName && (this.overflowOffset = this.scrollParent.offset()),
                    this._trigger("start", t, this._uiHash()),
                    this._preserveHelperProportions || this._cacheHelperProportions(),
                    !i)
                        for (o = this.containers.length - 1; o >= 0; o--)
                            this.containers[o]._trigger("activate", t, this._uiHash(this));
                    return e.ui.ddmanager && (e.ui.ddmanager.current = this),
                    e.ui.ddmanager && !r.dropBehaviour && e.ui.ddmanager.prepareOffsets(this, t),
                    this.dragging = !0,
                    this._addClass(this.helper, "ui-sortable-helper"),
                    this._mouseDrag(t),
                    !0
                },
                _mouseDrag: function(t) {
                    var n, i, o, s, r = this.options, a = !1;
                    for (this.position = this._generatePosition(t),
                    this.positionAbs = this._convertPositionTo("absolute"),
                    this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs),
                    this.options.scroll && (this.scrollParent[0] !== this.document[0] && "HTML" !== this.scrollParent[0].tagName ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - t.pageY < r.scrollSensitivity ? this.scrollParent[0].scrollTop = a = this.scrollParent[0].scrollTop + r.scrollSpeed : t.pageY - this.overflowOffset.top < r.scrollSensitivity && (this.scrollParent[0].scrollTop = a = this.scrollParent[0].scrollTop - r.scrollSpeed),
                    this.overflowOffset.left + this.scrollParent[0].offsetWidth - t.pageX < r.scrollSensitivity ? this.scrollParent[0].scrollLeft = a = this.scrollParent[0].scrollLeft + r.scrollSpeed : t.pageX - this.overflowOffset.left < r.scrollSensitivity && (this.scrollParent[0].scrollLeft = a = this.scrollParent[0].scrollLeft - r.scrollSpeed)) : (t.pageY - this.document.scrollTop() < r.scrollSensitivity ? a = this.document.scrollTop(this.document.scrollTop() - r.scrollSpeed) : this.window.height() - (t.pageY - this.document.scrollTop()) < r.scrollSensitivity && (a = this.document.scrollTop(this.document.scrollTop() + r.scrollSpeed)),
                    t.pageX - this.document.scrollLeft() < r.scrollSensitivity ? a = this.document.scrollLeft(this.document.scrollLeft() - r.scrollSpeed) : this.window.width() - (t.pageX - this.document.scrollLeft()) < r.scrollSensitivity && (a = this.document.scrollLeft(this.document.scrollLeft() + r.scrollSpeed))),
                    !1 !== a && e.ui.ddmanager && !r.dropBehaviour && e.ui.ddmanager.prepareOffsets(this, t)),
                    this.positionAbs = this._convertPositionTo("absolute"),
                    this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px"),
                    this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px"),
                    n = this.items.length - 1; n >= 0; n--)
                        if (o = (i = this.items[n]).item[0],
                        (s = this._intersectsWithPointer(i)) && i.instance === this.currentContainer && !(o === this.currentItem[0] || this.placeholder[1 === s ? "next" : "prev"]()[0] === o || e.contains(this.placeholder[0], o) || "semi-dynamic" === this.options.type && e.contains(this.element[0], o))) {
                            if (this.direction = 1 === s ? "down" : "up",
                            "pointer" !== this.options.tolerance && !this._intersectsWithSides(i))
                                break;
                            this._rearrange(t, i),
                            this._trigger("change", t, this._uiHash());
                            break
                        }
                    return this._contactContainers(t),
                    e.ui.ddmanager && e.ui.ddmanager.drag(this, t),
                    this._trigger("sort", t, this._uiHash()),
                    this.lastPositionAbs = this.positionAbs,
                    !1
                },
                _mouseStop: function(t, n) {
                    if (t) {
                        if (e.ui.ddmanager && !this.options.dropBehaviour && e.ui.ddmanager.drop(this, t),
                        this.options.revert) {
                            var i = this
                              , o = this.placeholder.offset()
                              , s = this.options.axis
                              , r = {};
                            s && "x" !== s || (r.left = o.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollLeft)),
                            s && "y" !== s || (r.top = o.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollTop)),
                            this.reverting = !0,
                            e(this.helper).animate(r, parseInt(this.options.revert, 10) || 500, (function() {
                                i._clear(t)
                            }
                            ))
                        } else
                            this._clear(t, n);
                        return !1
                    }
                },
                cancel: function() {
                    if (this.dragging) {
                        this._mouseUp(new e.Event("mouseup",{
                            target: null
                        })),
                        "original" === this.options.helper ? (this.currentItem.css(this._storedCSS),
                        this._removeClass(this.currentItem, "ui-sortable-helper")) : this.currentItem.show();
                        for (var t = this.containers.length - 1; t >= 0; t--)
                            this.containers[t]._trigger("deactivate", null, this._uiHash(this)),
                            this.containers[t].containerCache.over && (this.containers[t]._trigger("out", null, this._uiHash(this)),
                            this.containers[t].containerCache.over = 0)
                    }
                    return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]),
                    "original" !== this.options.helper && this.helper && this.helper[0].parentNode && this.helper.remove(),
                    e.extend(this, {
                        helper: null,
                        dragging: !1,
                        reverting: !1,
                        _noFinalSort: null
                    }),
                    this.domPosition.prev ? e(this.domPosition.prev).after(this.currentItem) : e(this.domPosition.parent).prepend(this.currentItem)),
                    this
                },
                serialize: function(t) {
                    var n = this._getItemsAsjQuery(t && t.connected)
                      , i = [];
                    return t = t || {},
                    e(n).each((function() {
                        var n = (e(t.item || this).attr(t.attribute || "id") || "").match(t.expression || /(.+)[\-=_](.+)/);
                        n && i.push((t.key || n[1] + "[]") + "=" + (t.key && t.expression ? n[1] : n[2]))
                    }
                    )),
                    !i.length && t.key && i.push(t.key + "="),
                    i.join("&")
                },
                toArray: function(t) {
                    var n = this._getItemsAsjQuery(t && t.connected)
                      , i = [];
                    return t = t || {},
                    n.each((function() {
                        i.push(e(t.item || this).attr(t.attribute || "id") || "")
                    }
                    )),
                    i
                },
                _intersectsWith: function(e) {
                    var t = this.positionAbs.left
                      , n = t + this.helperProportions.width
                      , i = this.positionAbs.top
                      , o = i + this.helperProportions.height
                      , s = e.left
                      , r = s + e.width
                      , a = e.top
                      , l = a + e.height
                      , c = this.offset.click.top
                      , u = this.offset.click.left
                      , d = "x" === this.options.axis || i + c > a && i + c < l
                      , h = "y" === this.options.axis || t + u > s && t + u < r
                      , p = d && h;
                    return "pointer" === this.options.tolerance || this.options.forcePointerForContainers || "pointer" !== this.options.tolerance && this.helperProportions[this.floating ? "width" : "height"] > e[this.floating ? "width" : "height"] ? p : s < t + this.helperProportions.width / 2 && n - this.helperProportions.width / 2 < r && a < i + this.helperProportions.height / 2 && o - this.helperProportions.height / 2 < l
                },
                _intersectsWithPointer: function(e) {
                    var t, n, i = "x" === this.options.axis || this._isOverAxis(this.positionAbs.top + this.offset.click.top, e.top, e.height), o = "y" === this.options.axis || this._isOverAxis(this.positionAbs.left + this.offset.click.left, e.left, e.width);
                    return !(!i || !o) && (t = this._getDragVerticalDirection(),
                    n = this._getDragHorizontalDirection(),
                    this.floating ? "right" === n || "down" === t ? 2 : 1 : t && ("down" === t ? 2 : 1))
                },
                _intersectsWithSides: function(e) {
                    var t = this._isOverAxis(this.positionAbs.top + this.offset.click.top, e.top + e.height / 2, e.height)
                      , n = this._isOverAxis(this.positionAbs.left + this.offset.click.left, e.left + e.width / 2, e.width)
                      , i = this._getDragVerticalDirection()
                      , o = this._getDragHorizontalDirection();
                    return this.floating && o ? "right" === o && n || "left" === o && !n : i && ("down" === i && t || "up" === i && !t)
                },
                _getDragVerticalDirection: function() {
                    var e = this.positionAbs.top - this.lastPositionAbs.top;
                    return 0 !== e && (e > 0 ? "down" : "up")
                },
                _getDragHorizontalDirection: function() {
                    var e = this.positionAbs.left - this.lastPositionAbs.left;
                    return 0 !== e && (e > 0 ? "right" : "left")
                },
                refresh: function(e) {
                    return this._refreshItems(e),
                    this._setHandleClassName(),
                    this.refreshPositions(),
                    this
                },
                _connectWith: function() {
                    var e = this.options;
                    return e.connectWith.constructor === String ? [e.connectWith] : e.connectWith
                },
                _getItemsAsjQuery: function(t) {
                    var n, i, o, s, r = [], a = [], l = this._connectWith();
                    if (l && t)
                        for (n = l.length - 1; n >= 0; n--)
                            for (i = (o = e(l[n], this.document[0])).length - 1; i >= 0; i--)
                                (s = e.data(o[i], this.widgetFullName)) && s !== this && !s.options.disabled && a.push([e.isFunction(s.options.items) ? s.options.items.call(s.element) : e(s.options.items, s.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), s]);
                    function c() {
                        r.push(this)
                    }
                    for (a.push([e.isFunction(this.options.items) ? this.options.items.call(this.element, null, {
                        options: this.options,
                        item: this.currentItem
                    }) : e(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]),
                    n = a.length - 1; n >= 0; n--)
                        a[n][0].each(c);
                    return e(r)
                },
                _removeCurrentsFromItems: function() {
                    var t = this.currentItem.find(":data(" + this.widgetName + "-item)");
                    this.items = e.grep(this.items, (function(e) {
                        for (var n = 0; n < t.length; n++)
                            if (t[n] === e.item[0])
                                return !1;
                        return !0
                    }
                    ))
                },
                _refreshItems: function(t) {
                    this.items = [],
                    this.containers = [this];
                    var n, i, o, s, r, a, l, c, u = this.items, d = [[e.isFunction(this.options.items) ? this.options.items.call(this.element[0], t, {
                        item: this.currentItem
                    }) : e(this.options.items, this.element), this]], h = this._connectWith();
                    if (h && this.ready)
                        for (n = h.length - 1; n >= 0; n--)
                            for (i = (o = e(h[n], this.document[0])).length - 1; i >= 0; i--)
                                (s = e.data(o[i], this.widgetFullName)) && s !== this && !s.options.disabled && (d.push([e.isFunction(s.options.items) ? s.options.items.call(s.element[0], t, {
                                    item: this.currentItem
                                }) : e(s.options.items, s.element), s]),
                                this.containers.push(s));
                    for (n = d.length - 1; n >= 0; n--)
                        for (r = d[n][1],
                        i = 0,
                        c = (a = d[n][0]).length; i < c; i++)
                            (l = e(a[i])).data(this.widgetName + "-item", r),
                            u.push({
                                item: l,
                                instance: r,
                                width: 0,
                                height: 0,
                                left: 0,
                                top: 0
                            })
                },
                refreshPositions: function(t) {
                    var n, i, o, s;
                    for (this.floating = !!this.items.length && ("x" === this.options.axis || this._isFloating(this.items[0].item)),
                    this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset()),
                    n = this.items.length - 1; n >= 0; n--)
                        (i = this.items[n]).instance !== this.currentContainer && this.currentContainer && i.item[0] !== this.currentItem[0] || (o = this.options.toleranceElement ? e(this.options.toleranceElement, i.item) : i.item,
                        t || (i.width = o.outerWidth(),
                        i.height = o.outerHeight()),
                        s = o.offset(),
                        i.left = s.left,
                        i.top = s.top);
                    if (this.options.custom && this.options.custom.refreshContainers)
                        this.options.custom.refreshContainers.call(this);
                    else
                        for (n = this.containers.length - 1; n >= 0; n--)
                            s = this.containers[n].element.offset(),
                            this.containers[n].containerCache.left = s.left,
                            this.containers[n].containerCache.top = s.top,
                            this.containers[n].containerCache.width = this.containers[n].element.outerWidth(),
                            this.containers[n].containerCache.height = this.containers[n].element.outerHeight();
                    return this
                },
                _createPlaceholder: function(t) {
                    var n, i = (t = t || this).options;
                    i.placeholder && i.placeholder.constructor !== String || (n = i.placeholder,
                    i.placeholder = {
                        element: function() {
                            var i = t.currentItem[0].nodeName.toLowerCase()
                              , o = e("<" + i + ">", t.document[0]);
                            return t._addClass(o, "ui-sortable-placeholder", n || t.currentItem[0].className)._removeClass(o, "ui-sortable-helper"),
                            "tbody" === i ? t._createTrPlaceholder(t.currentItem.find("tr").eq(0), e("<tr>", t.document[0]).appendTo(o)) : "tr" === i ? t._createTrPlaceholder(t.currentItem, o) : "img" === i && o.attr("src", t.currentItem.attr("src")),
                            n || o.css("visibility", "hidden"),
                            o
                        },
                        update: function(e, o) {
                            n && !i.forcePlaceholderSize || (o.height() || o.height(t.currentItem.innerHeight() - parseInt(t.currentItem.css("paddingTop") || 0, 10) - parseInt(t.currentItem.css("paddingBottom") || 0, 10)),
                            o.width() || o.width(t.currentItem.innerWidth() - parseInt(t.currentItem.css("paddingLeft") || 0, 10) - parseInt(t.currentItem.css("paddingRight") || 0, 10)))
                        }
                    }),
                    t.placeholder = e(i.placeholder.element.call(t.element, t.currentItem)),
                    t.currentItem.after(t.placeholder),
                    i.placeholder.update(t, t.placeholder)
                },
                _createTrPlaceholder: function(t, n) {
                    var i = this;
                    t.children().each((function() {
                        e("<td>&#160;</td>", i.document[0]).attr("colspan", e(this).attr("colspan") || 1).appendTo(n)
                    }
                    ))
                },
                _contactContainers: function(t) {
                    var n, i, o, s, r, a, l, c, u, d, h = null, p = null;
                    for (n = this.containers.length - 1; n >= 0; n--)
                        if (!e.contains(this.currentItem[0], this.containers[n].element[0]))
                            if (this._intersectsWith(this.containers[n].containerCache)) {
                                if (h && e.contains(this.containers[n].element[0], h.element[0]))
                                    continue;
                                h = this.containers[n],
                                p = n
                            } else
                                this.containers[n].containerCache.over && (this.containers[n]._trigger("out", t, this._uiHash(this)),
                                this.containers[n].containerCache.over = 0);
                    if (h)
                        if (1 === this.containers.length)
                            this.containers[p].containerCache.over || (this.containers[p]._trigger("over", t, this._uiHash(this)),
                            this.containers[p].containerCache.over = 1);
                        else {
                            for (o = 1e4,
                            s = null,
                            r = (u = h.floating || this._isFloating(this.currentItem)) ? "left" : "top",
                            a = u ? "width" : "height",
                            d = u ? "pageX" : "pageY",
                            i = this.items.length - 1; i >= 0; i--)
                                e.contains(this.containers[p].element[0], this.items[i].item[0]) && this.items[i].item[0] !== this.currentItem[0] && (l = this.items[i].item.offset()[r],
                                c = !1,
                                t[d] - l > this.items[i][a] / 2 && (c = !0),
                                Math.abs(t[d] - l) < o && (o = Math.abs(t[d] - l),
                                s = this.items[i],
                                this.direction = c ? "up" : "down"));
                            if (!s && !this.options.dropOnEmpty)
                                return;
                            if (this.currentContainer === this.containers[p])
                                return void (this.currentContainer.containerCache.over || (this.containers[p]._trigger("over", t, this._uiHash()),
                                this.currentContainer.containerCache.over = 1));
                            s ? this._rearrange(t, s, null, !0) : this._rearrange(t, null, this.containers[p].element, !0),
                            this._trigger("change", t, this._uiHash()),
                            this.containers[p]._trigger("change", t, this._uiHash(this)),
                            this.currentContainer = this.containers[p],
                            this.options.placeholder.update(this.currentContainer, this.placeholder),
                            this.containers[p]._trigger("over", t, this._uiHash(this)),
                            this.containers[p].containerCache.over = 1
                        }
                },
                _createHelper: function(t) {
                    var n = this.options
                      , i = e.isFunction(n.helper) ? e(n.helper.apply(this.element[0], [t, this.currentItem])) : "clone" === n.helper ? this.currentItem.clone() : this.currentItem;
                    return i.parents("body").length || e("parent" !== n.appendTo ? n.appendTo : this.currentItem[0].parentNode)[0].appendChild(i[0]),
                    i[0] === this.currentItem[0] && (this._storedCSS = {
                        width: this.currentItem[0].style.width,
                        height: this.currentItem[0].style.height,
                        position: this.currentItem.css("position"),
                        top: this.currentItem.css("top"),
                        left: this.currentItem.css("left")
                    }),
                    i[0].style.width && !n.forceHelperSize || i.width(this.currentItem.width()),
                    i[0].style.height && !n.forceHelperSize || i.height(this.currentItem.height()),
                    i
                },
                _adjustOffsetFromHelper: function(t) {
                    "string" == typeof t && (t = t.split(" ")),
                    e.isArray(t) && (t = {
                        left: +t[0],
                        top: +t[1] || 0
                    }),
                    "left"in t && (this.offset.click.left = t.left + this.margins.left),
                    "right"in t && (this.offset.click.left = this.helperProportions.width - t.right + this.margins.left),
                    "top"in t && (this.offset.click.top = t.top + this.margins.top),
                    "bottom"in t && (this.offset.click.top = this.helperProportions.height - t.bottom + this.margins.top)
                },
                _getParentOffset: function() {
                    this.offsetParent = this.helper.offsetParent();
                    var t = this.offsetParent.offset();
                    return "absolute" === this.cssPosition && this.scrollParent[0] !== this.document[0] && e.contains(this.scrollParent[0], this.offsetParent[0]) && (t.left += this.scrollParent.scrollLeft(),
                    t.top += this.scrollParent.scrollTop()),
                    (this.offsetParent[0] === this.document[0].body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && e.ui.ie) && (t = {
                        top: 0,
                        left: 0
                    }),
                    {
                        top: t.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                        left: t.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
                    }
                },
                _getRelativeOffset: function() {
                    if ("relative" === this.cssPosition) {
                        var e = this.currentItem.position();
                        return {
                            top: e.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                            left: e.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                        }
                    }
                    return {
                        top: 0,
                        left: 0
                    }
                },
                _cacheMargins: function() {
                    this.margins = {
                        left: parseInt(this.currentItem.css("marginLeft"), 10) || 0,
                        top: parseInt(this.currentItem.css("marginTop"), 10) || 0
                    }
                },
                _cacheHelperProportions: function() {
                    this.helperProportions = {
                        width: this.helper.outerWidth(),
                        height: this.helper.outerHeight()
                    }
                },
                _setContainment: function() {
                    var t, n, i, o = this.options;
                    "parent" === o.containment && (o.containment = this.helper[0].parentNode),
                    "document" !== o.containment && "window" !== o.containment || (this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, "document" === o.containment ? this.document.width() : this.window.width() - this.helperProportions.width - this.margins.left, ("document" === o.containment ? this.document.height() || document.body.parentNode.scrollHeight : this.window.height() || this.document[0].body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]),
                    /^(document|window|parent)$/.test(o.containment) || (t = e(o.containment)[0],
                    n = e(o.containment).offset(),
                    i = "hidden" !== e(t).css("overflow"),
                    this.containment = [n.left + (parseInt(e(t).css("borderLeftWidth"), 10) || 0) + (parseInt(e(t).css("paddingLeft"), 10) || 0) - this.margins.left, n.top + (parseInt(e(t).css("borderTopWidth"), 10) || 0) + (parseInt(e(t).css("paddingTop"), 10) || 0) - this.margins.top, n.left + (i ? Math.max(t.scrollWidth, t.offsetWidth) : t.offsetWidth) - (parseInt(e(t).css("borderLeftWidth"), 10) || 0) - (parseInt(e(t).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, n.top + (i ? Math.max(t.scrollHeight, t.offsetHeight) : t.offsetHeight) - (parseInt(e(t).css("borderTopWidth"), 10) || 0) - (parseInt(e(t).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top])
                },
                _convertPositionTo: function(t, n) {
                    n || (n = this.position);
                    var i = "absolute" === t ? 1 : -1
                      , o = "absolute" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && e.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent
                      , s = /(html|body)/i.test(o[0].tagName);
                    return {
                        top: n.top + this.offset.relative.top * i + this.offset.parent.top * i - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : s ? 0 : o.scrollTop()) * i,
                        left: n.left + this.offset.relative.left * i + this.offset.parent.left * i - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : s ? 0 : o.scrollLeft()) * i
                    }
                },
                _generatePosition: function(t) {
                    var n, i, o = this.options, s = t.pageX, r = t.pageY, a = "absolute" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && e.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent, l = /(html|body)/i.test(a[0].tagName);
                    return "relative" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && this.scrollParent[0] !== this.offsetParent[0] || (this.offset.relative = this._getRelativeOffset()),
                    this.originalPosition && (this.containment && (t.pageX - this.offset.click.left < this.containment[0] && (s = this.containment[0] + this.offset.click.left),
                    t.pageY - this.offset.click.top < this.containment[1] && (r = this.containment[1] + this.offset.click.top),
                    t.pageX - this.offset.click.left > this.containment[2] && (s = this.containment[2] + this.offset.click.left),
                    t.pageY - this.offset.click.top > this.containment[3] && (r = this.containment[3] + this.offset.click.top)),
                    o.grid && (n = this.originalPageY + Math.round((r - this.originalPageY) / o.grid[1]) * o.grid[1],
                    r = this.containment ? n - this.offset.click.top >= this.containment[1] && n - this.offset.click.top <= this.containment[3] ? n : n - this.offset.click.top >= this.containment[1] ? n - o.grid[1] : n + o.grid[1] : n,
                    i = this.originalPageX + Math.round((s - this.originalPageX) / o.grid[0]) * o.grid[0],
                    s = this.containment ? i - this.offset.click.left >= this.containment[0] && i - this.offset.click.left <= this.containment[2] ? i : i - this.offset.click.left >= this.containment[0] ? i - o.grid[0] : i + o.grid[0] : i)),
                    {
                        top: r - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : l ? 0 : a.scrollTop()),
                        left: s - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : l ? 0 : a.scrollLeft())
                    }
                },
                _rearrange: function(e, t, n, i) {
                    n ? n[0].appendChild(this.placeholder[0]) : t.item[0].parentNode.insertBefore(this.placeholder[0], "down" === this.direction ? t.item[0] : t.item[0].nextSibling),
                    this.counter = this.counter ? ++this.counter : 1;
                    var o = this.counter;
                    this._delay((function() {
                        o === this.counter && this.refreshPositions(!i)
                    }
                    ))
                },
                _clear: function(e, t) {
                    this.reverting = !1;
                    var n, i = [];
                    if (!this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem),
                    this._noFinalSort = null,
                    this.helper[0] === this.currentItem[0]) {
                        for (n in this._storedCSS)
                            "auto" !== this._storedCSS[n] && "static" !== this._storedCSS[n] || (this._storedCSS[n] = "");
                        this.currentItem.css(this._storedCSS),
                        this._removeClass(this.currentItem, "ui-sortable-helper")
                    } else
                        this.currentItem.show();
                    function o(e, t, n) {
                        return function(i) {
                            n._trigger(e, i, t._uiHash(t))
                        }
                    }
                    for (this.fromOutside && !t && i.push((function(e) {
                        this._trigger("receive", e, this._uiHash(this.fromOutside))
                    }
                    )),
                    !this.fromOutside && this.domPosition.prev === this.currentItem.prev().not(".ui-sortable-helper")[0] && this.domPosition.parent === this.currentItem.parent()[0] || t || i.push((function(e) {
                        this._trigger("update", e, this._uiHash())
                    }
                    )),
                    this !== this.currentContainer && (t || (i.push((function(e) {
                        this._trigger("remove", e, this._uiHash())
                    }
                    )),
                    i.push(function(e) {
                        return function(t) {
                            e._trigger("receive", t, this._uiHash(this))
                        }
                    }
                    .call(this, this.currentContainer)),
                    i.push(function(e) {
                        return function(t) {
                            e._trigger("update", t, this._uiHash(this))
                        }
                    }
                    .call(this, this.currentContainer)))),
                    n = this.containers.length - 1; n >= 0; n--)
                        t || i.push(o("deactivate", this, this.containers[n])),
                        this.containers[n].containerCache.over && (i.push(o("out", this, this.containers[n])),
                        this.containers[n].containerCache.over = 0);
                    if (this.storedCursor && (this.document.find("body").css("cursor", this.storedCursor),
                    this.storedStylesheet.remove()),
                    this._storedOpacity && this.helper.css("opacity", this._storedOpacity),
                    this._storedZIndex && this.helper.css("zIndex", "auto" === this._storedZIndex ? "" : this._storedZIndex),
                    this.dragging = !1,
                    t || this._trigger("beforeStop", e, this._uiHash()),
                    this.placeholder[0].parentNode.removeChild(this.placeholder[0]),
                    this.cancelHelperRemoval || (this.helper[0] !== this.currentItem[0] && this.helper.remove(),
                    this.helper = null),
                    !t) {
                        for (n = 0; n < i.length; n++)
                            i[n].call(this, e);
                        this._trigger("stop", e, this._uiHash())
                    }
                    return this.fromOutside = !1,
                    !this.cancelHelperRemoval
                },
                _trigger: function() {
                    !1 === e.Widget.prototype._trigger.apply(this, arguments) && this.cancel()
                },
                _uiHash: function(t) {
                    var n = t || this;
                    return {
                        helper: n.helper,
                        placeholder: n.placeholder || e([]),
                        position: n.position,
                        originalPosition: n.originalPosition,
                        offset: n.positionAbs,
                        item: n.currentItem,
                        sender: t ? t.element : null
                    }
                }
            })
        }
        ) ? i.apply(t, o) : i) || (e.exports = s)
    }
    ,
    245522: (e, t, n) => {
        var i, o = n(661533);
        (i = o).fn.visible = function(e, t, n, o) {
            if (!(this.length < 1)) {
                var s = this.length > 1 ? this.eq(0) : this
                  , r = null != o
                  , a = i(r ? o : window)
                  , l = r ? a.position() : 0
                  , c = s.get(0)
                  , u = a.outerWidth()
                  , d = a.outerHeight()
                  , h = (n = n || "both",
                !0 !== t || c.offsetWidth * c.offsetHeight);
                if ("function" == typeof c.getBoundingClientRect) {
                    var p = c.getBoundingClientRect()
                      , f = r ? p.top - l.top >= 0 && p.top < d + l.top : p.top >= 0 && p.top < d
                      , _ = r ? p.bottom - l.top > 0 && p.bottom <= d + l.top : p.bottom > 0 && p.bottom <= d
                      , m = r ? p.left - l.left >= 0 && p.left < u + l.left : p.left >= 0 && p.left < u
                      , g = r ? p.right - l.left > 0 && p.right < u + l.left : p.right > 0 && p.right <= u
                      , v = e ? f || _ : f && _
                      , y = e ? m || g : m && g;
                    if ("both" === n)
                        return h && v && y;
                    if ("vertical" === n)
                        return h && v;
                    if ("horizontal" === n)
                        return h && y
                } else {
                    var b = r ? 0 : l
                      , w = b + d
                      , k = a.scrollLeft()
                      , P = k + u
                      , C = s.position()
                      , x = C.top
                      , E = x + s.height()
                      , S = C.left
                      , A = S + s.width()
                      , T = !0 === e ? E : x
                      , I = !0 === e ? x : E
                      , D = !0 === e ? A : S
                      , O = !0 === e ? S : A;
                    if ("both" === n)
                        return !!h && I <= w && T >= b && O <= P && D >= k;
                    if ("vertical" === n)
                        return !!h && I <= w && T >= b;
                    if ("horizontal" === n)
                        return !!h && O <= P && D >= k
                }
            }
        }
    }
    ,
    623967: e => {
        e.exports = function e(i) {
            return i && "object" == typeof i ? t(i) || n(i) ? i : Array.isArray(i) ? i.map(e) : Object.keys(i).reduce((function(t, n) {
                return t[n[0].toLowerCase() + n.slice(1).replace(/([A-Z]+)/g, (function(e, t) {
                    return "_" + t.toLowerCase()
                }
                ))] = e(i[n]),
                t
            }
            ), {}) : i
        }
        ;
        var t = function(e) {
            return "[object Date]" === Object.prototype.toString.call(e)
        }
          , n = function(e) {
            return "[object RegExp]" === Object.prototype.toString.call(e)
        }
    }
    ,
    11326: (e, t, n) => {
        "use strict";
        n.r(t);
        var i = n(661533)
          , o = n.n(i)
          , s = n(880774)
          , r = n(77305);
        o()(document).one("page:construct", (function() {
            APP.constant("user").settings.is_current_account_data_deleted && new r.default({
                text: (0,
                s.i18n)("Data created during the trial period has been deleted"),
                no_cancel: !0,
                accept: function() {
                    o().ajax({
                        url: "/ajax/v4/users/me/modal_deleted_data",
                        type: "PATCH",
                        contentType: "application/json",
                        dataType: "json",
                        data: JSON.stringify({
                            is_show_modal_after_delete_data: !1
                        })
                    }),
                    this.modal.destroy()
                }
            })
        }
        ));
        var a = "../build/transpiled/common/modal_deleted_data";
        window.define(a, (function() {
            var e = "undefined"
              , n = typeof t === e ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === e ? typeof module === e ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : t;
            return n && n.default || n
        }
        )),
        window.require([a])
    }
    ,
    395044: (e, t, n) => {
        "use strict";
        n.r(t),
        n.d(t, {
            default: () => m
        });
        var i = n(55188)
          , o = n.n(i)
          , s = n(871082)
          , r = n.n(s)
          , a = n(77305)
          , l = n(661533)
          , c = {
            message: APP.lang.page_leave_has_changes,
            accept_text: "OK",
            decline_text: APP.lang.button_cancel,
            accept: null,
            decline: null
        }
          , u = !1
          , d = !1
          , h = {}
          , p = {}
          , f = l(document)
          , _ = {
            getPreventFlag: function() {
                return u
            },
            getTrackChanges: function(e) {
                return o().isUndefined(e) ? _.getChanges() : h[e]
            },
            preventPageChange: function(e, t) {
                var n = !!o().isUndefined(e) || e;
                return t = _.checkCode(t),
                n ? p[t] && (h[t] = l.extend({}, c, p[t])) : delete h[t],
                u = o().keys(h).length > 0,
                this
            },
            registerPreventConfig: function(e, t) {
                p[_.checkCode(t)] = e
            },
            removePreventConfig: function(e) {
                e = _.checkCode(e),
                p[e] && (_.preventPageChange(!1, e),
                delete h[e],
                delete p[e])
            },
            confirmPageChange: function(e, t) {
                var n = o().bind(this.confirmPageChange, this);
                e.onlyBeforeUnload ? t() : (e = o().isString(e) ? p[e] : e,
                t = o().isFunction(t) ? t : o().noop,
                f.trigger("menu:icon:restore").trigger("page:change:stop"),
                APP.router.prevent_page_confirm || (this.declined = !1,
                APP.router.prevent_page_confirm = !0,
                new a.default({
                    class_name: "modal-list modal-leave-confirm",
                    decline_text: e.decline_text,
                    accept_text: e.accept_text,
                    button_class: e.gray_button ? "" : "button-input_blue",
                    text: e.title || e.message || APP.lang.card_page_leave_has_changes,
                    message: e.description,
                    no_cancel: e.no_cancel,
                    init: function() {
                        "function" == typeof e.init && e.init((function() {
                            t()
                        }
                        ))
                    },
                    accept: function() {
                        "function" == typeof e.accept ? e.accept.call(this.modal, (function(e) {
                            t(e)
                        }
                        )) : t(),
                        this.modal.destroy()
                    },
                    destroy: function() {
                        !1 !== this.accepted || this.declined || (this.declined = !0,
                        "function" == typeof e.decline ? e.decline.call(this.modal, (function(e) {
                            t(e)
                        }
                        ), this.accepted) : t()),
                        "function" == typeof e.destroy && e.destroy(),
                        o().keys(h).length <= 1 ? APP.router.prevent_page_confirm = !1 : (delete h[o().first(o().keys(h))],
                        n())
                    }
                })))
            },
            checkCode: function(e) {
                return e || APP.data.current_entity
            },
            getChanges: function() {
                return o().first(o().values(h)) || {}
            }
        };
        r().History.prototype.navigate = o().wrap(r().History.prototype.navigate, (function(e, t, n) {
            var i = this
              , o = _.getChanges()
              , s = function(o) {
                APP.router.preventPageChange(!1, o),
                e.call(i, t, n)
            };
            u && n.trigger && !o.onlyBeforeUnload ? APP.router.confirmPageChange(o, s) : s()
        }
        )),
        l(window).on("page-preventer:disable-unload", (function() {
            d = !0
        }
        )).on("page-preventer:enable-unload", (function() {
            d = !1
        }
        )).on("beforeunload", (function() {
            if (u && !d)
                return APP.lang.page_leave_has_changes
        }
        ));
        const m = _;
        var g = "../build/transpiled/common/page_preventer";
        window.define(g, (function() {
            var e = "undefined"
              , n = typeof t === e ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === e ? typeof module === e ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : t;
            return n && n.default || n
        }
        )),
        window.require([g])
    }
    ,
    312309: (e, t, n) => {
        "use strict";
        n.r(t),
        n.d(t, {
            QStoJSON: () => d,
            getParam: () => p,
            getQueryParam: () => m,
            getQueryString: () => h,
            removeQueryParam: () => _,
            setParam: () => f,
            setQueryParam: () => g
        });
        var i = n(661533)
          , o = n.n(i)
          , s = n(55188)
          , r = n.n(s)
          , a = n(577486);
        function l(e, t) {
            return null != t && "undefined" != typeof Symbol && t[Symbol.hasInstance] ? !!t[Symbol.hasInstance](e) : e instanceof t
        }
        function c(e) {
            return e.indexOf("?") >= 0 ? e.split("?")[1] : e
        }
        function u(e) {
            try {
                e = decodeURIComponent(e.toString().replace(/\+/gi, " "))
            } catch (t) {
                e = ""
            }
            return e.toString()
        }
        function d(e) {
            var t, n, i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return "string" == typeof e ? i ? function(e, t) {
                var n, i = {}, s = c(e);
                return r().isObject(t) || (t = {
                    to_arrays: !1
                }),
                s ? (o().each(s.split("&"), (function(e, o) {
                    var s;
                    o = o.split("=");
                    try {
                        o[0] = decodeURIComponent(o[0])
                    } catch (e) {
                        return console.error(e),
                        i
                    }
                    if (void 0 !== i[o[0]])
                        l(i[o[0]], Array) ? i[o[0]].push(u(o[1] || "")) : (n = i[o[0]].toString(),
                        i[o[0]] = [n, u(o[1] || "")]);
                    else if (o[0].indexOf("[", 1) > 0) {
                        (s = o[0].split("["))[s.length] = u(o[1]);
                        var r = 0
                          , a = function(e, n) {
                            if (r < n.length - 1)
                                if (n[r] = n[r].replace("]", ""),
                                "" === n[r])
                                    Object.keys(e).length ? e[Object.keys(e).length] = n[n.length - 1] : e[0] = n[n.length - 1];
                                else {
                                    e[n[r]] = e[n[r]] || (t.to_arrays && "]" === n[r + 1] ? [] : {});
                                    var i = e[n[r]];
                                    ++r == n.length - 1 ? e[n[r - 1]] = n[r] : a(i, n)
                                }
                        };
                        a(i, s)
                    } else
                        i[o[0]] = function(e) {
                            try {
                                e = decodeURIComponent(e.toString().replace(/\+/gi, " "))
                            } catch (t) {
                                e = ""
                            }
                            try {
                                return JSON.parse(e)
                            } catch (t) {
                                return e.toString()
                            }
                        }(o[1] || "")
                }
                )),
                i) : i
            }(e, i) : function(e) {
                var t, n = {}, i = c(e);
                if (!i)
                    return n;
                try {
                    o().each(i.split("&"), (function(e, i) {
                        (i = i.split("="))[0] = decodeURIComponent(i[0]),
                        void 0 === n[i[0]] ? n[i[0]] = u(i[1] || "") : l(n[i[0]], Array) ? n[i[0]].push(u(i[1] || "")) : (t = n[i[0]].toString(),
                        n[i[0]] = [t, u(i[1] || "")])
                    }
                    ))
                } catch (e) {
                    return console.error(e),
                    {}
                }
                return n
            }(e) : (t = e,
            n = [],
            r().each(t, (function(e, t) {
                "object" == typeof e ? r().each(e, (function(e, i) {
                    n.push("".concat(t, "[").concat(isNaN(i, 10) ? i : "", "]=").concat(encodeURIComponent(e)))
                }
                )) : n.push("".concat(t, "=").concat(encodeURIComponent(e)))
            }
            )),
            n.join("&"))
        }
        function h() {
            var e = window.location.href.replace(/.*\?/, "").toString();
            return e === window.location.href && (e = ""),
            e || ""
        }
        function p(e) {
            var t, n = window.location.pathname || "", i = new a.UnsafeRegExp("".concat(e.toString(), "/([^\\/]+)"),"i");
            return !(!n.length || !(t = n.match(i)) || 2 !== t.length) && 0 | (t[1] || 1)
        }
        function f(e, t) {
            var n = window.location.pathname
              , i = h();
            return t = t || {},
            r().each(e, (function(e, t) {
                p(t) ? n = n.replace(new a.UnsafeRegExp("(".concat(t, ")/([^/]?)+(/)?(.*)")), e && e.toString().length ? "$1/".concat(e, "/$4") : "$4") : e && e.toString().length && ("/" !== n.charAt(n.length - 1) && (n += "/"),
                n += "".concat(t, "/").concat(e, "/"))
            }
            )),
            n + (!0 !== t.only_path && i.length ? "?".concat(i) : "")
        }
        function _(e, t) {
            var n, i = (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}).shouldDecodeValues, o = void 0 === i || i, s = ((r().isUndefined(t) ? h() : t.replace(/^\?/, "")).replace(/\+/g, " ") || "").split(/[&;]/g);
            r().isArray(e) || (e = [e]);
            try {
                r().each(e, (function(e, t) {
                    for (n = "".concat(decodeURIComponent(e), "="),
                    t = s.length; t-- > 0; )
                        -1 !== (o ? decodeURIComponent(s[t]) : s[t]).lastIndexOf(n, 0) && s.splice(t, 1)
                }
                ))
            } catch (e) {
                console.error(e)
            }
            return t && 0 === t.indexOf("?") ? "?".concat(s.join("&")) : s.join("&")
        }
        function m(e) {
            var t = "?".concat(h().replace(/\[/g, "%5B").replace(/\]/g, "%5D"));
            e = e.replace(/\[/g, "%5B").replace(/\]/g, "%5D");
            var n, i = "[\\?&]".concat(e, "=([^&#]*)"), o = new a.UnsafeRegExp(i).exec(t);
            if (r().isNull(o))
                return !1;
            n = "phone" === e ? o[1] : o[1].replace(/\+/g, " ");
            try {
                n = decodeURIComponent(n)
            } catch (e) {
                return console.error(e),
                !1
            }
            return n
        }
        function g(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
              , n = window.location.pathname
              , i = r().isString(t.query_string) ? t.query_string : h();
            return 0 !== i.indexOf("?") && (i = "?".concat(i)),
            r().each(e, (function(e, t) {
                var n = "";
                if ("?" !== i && (n = -1 === i.indexOf("?") ? "?" : "&"),
                i = _(t, i),
                "object" == typeof e)
                    i = "".concat(i + n + t, "=").concat(e.join("&".concat(t, "=")));
                else {
                    e = encodeURIComponent(e);
                    var o = new a.UnsafeRegExp("([?|&])".concat(t.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&"), "=.*?(&|$)"),"ig")
                      , s = i.match(o);
                    if (s)
                        if (e)
                            i = i.replace(o, "$1".concat(t, "=").concat(e, "$2"));
                        else {
                            var r = s[0]
                              , l = r[0]
                              , c = "";
                            "&" === r[r.length - 1] && (c = l),
                            i = i.replace(o, c)
                        }
                    else
                        i += e ? "".concat(n + t, "=").concat(e) : ""
                }
            }
            )),
            0 !== i.indexOf("?") && (i = "?".concat(i)),
            !1 === t.question_mark && (i = i.replace(/^\?/, "")),
            (!0 === t.only_query_string ? "" : n) + ("?" === i ? "" : i.replace(/^\?&=?/, "?"))
        }
        var v = "../build/transpiled/common/urlparams";
        window.define(v, (function() {
            var e = "undefined"
              , n = typeof t === e ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === e ? typeof module === e ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : t;
            return n && n.default || n
        }
        )),
        window.require([v])
    }
    ,
    971579: (e, t, n) => {
        "use strict";
        n.r(t);
        var i = n(661533)
          , o = n.n(i)
          , s = n(397738)
          , r = n.n(s)
          , a = n(189967);
        o()((function() {
            var e = function() {
                var e = o()("#page").width();
                APP.notSmall = (0,
                a.isImboxSection)() ? e > 1594 : e > 1230,
                APP.is_widgets_maximized = (0,
                a.isImboxSection)() ? e > 1864 : e > 1500,
                o()("html").toggleClass("h-widgets-closed", !1 === APP.notSmall).toggleClass("h-widgets-maximized", APP.is_widgets_maximized),
                APP.is_widgets_maximized && o()(document).trigger("openWidgetPanel")
            };
            o()(document).on("page:changed", e),
            e()
        }
        )),
        r().register("screen and (max-width: ".concat(1230, "px)"), {
            match: function() {
                (0,
                a.isImboxSection)() || (APP.notSmall = !1,
                o()("html").addClass("h-widgets-closed"),
                o()(document).trigger("closeWidgetPanel").trigger("widgets:card-minimized"))
            },
            unmatch: function() {
                (0,
                a.isImboxSection)() || (APP.notSmall = !0,
                o()("html").removeClass("h-widgets-closed"),
                o()(document).trigger("widgets:card-maximized"))
            }
        }),
        r().register("screen and (min-width: ".concat(1500, "px)"), {
            match: function() {
                (0,
                a.isImboxSection)() || (APP.is_widgets_maximized = !0,
                o()("html").addClass("h-widgets-maximized"),
                o()(document).trigger("openWidgetPanel"))
            },
            unmatch: function() {
                (0,
                a.isImboxSection)() || (APP.is_widgets_maximized = !1,
                o()("html").removeClass("h-widgets-maximized"))
            }
        }),
        r().register("screen and (max-width: ".concat(1594, "px)"), {
            match: function() {
                (0,
                a.isImboxSection)() && (APP.notSmall = !1,
                o()("html").addClass("h-widgets-closed"),
                o()(document).trigger("closeWidgetPanel").trigger("widgets:card-minimized"))
            },
            unmatch: function() {
                (0,
                a.isImboxSection)() && (APP.notSmall = !0,
                o()("html").removeClass("h-widgets-closed"),
                o()(document).trigger("widgets:card-maximized"))
            }
        }),
        r().register("screen and (min-width: ".concat(1864, "px)"), {
            match: function() {
                (0,
                a.isImboxSection)() && (APP.is_widgets_maximized = !0,
                o()("html").addClass("h-widgets-maximized"),
                o()(document).trigger("openWidgetPanel"))
            },
            unmatch: function() {
                (0,
                a.isImboxSection)() && (o()("html").removeClass("h-widgets-maximized"),
                APP.is_widgets_maximized = !1)
            }
        }),
        r().register("screen and (max-device-width: 640px)", {
            match: function() {
                APP.is_phone = !0,
                o()('meta[name="viewport"]').attr("content", "")
            }
        });
        var l = "../build/transpiled/common/windowWidthController";
        window.define(l, (function() {
            var e = "undefined"
              , n = typeof t === e ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === e ? typeof module === e ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : t;
            return n && n.default || n
        }
        )),
        window.require([l])
    }
    ,
    77305: (e, t, n) => {
        "use strict";
        n.r(t),
        n.d(t, {
            default: () => d
        });
        var i = n(661533)
          , o = n.n(i)
          , s = n(55188)
          , r = n.n(s)
          , a = n(460159)
          , l = n.n(a)
          , c = n(889378)
          , u = function(e) {
            var t = this;
            this.options = r().extend({}, e),
            this.modal = new c.default({
                can_centrify: !0,
                class_name: "".concat(r().isUndefined(this.options.class_name) ? "modal-list" : this.options.class_name, " js-modal-confirm"),
                disable_overlay_click: this.options.disable_overlay_click,
                init: l()._preload([t.options.template || "/tmpl/common/modal/confirm.twig"], (function(e) {
                    t.$modal_body = e,
                    e.trigger("modal:loaded").html(l()({
                        ref: t.options.template || "/tmpl/common/modal/confirm.twig"
                    }).render(o().extend({
                        decline_text: t.options.decline_text,
                        accept_text: t.options.accept_text,
                        button_class: t.options.button_class,
                        no_cancel: t.options.no_cancel
                    }, t.options, r().result(t.options, "getRenderParams", {})))).trigger("modal:centrify"),
                    r().isFunction(t.options.init) && t.options.init.call(t),
                    e.on("click", (function(e) {
                        o()(e.target).is(".button-input") || e.stopPropagation()
                    }
                    )).on("click", ".button-cancel", (function(e) {
                        e.stopPropagation(),
                        t.accepted = !1,
                        t.destroy()
                    }
                    )).on("click", ".modal-body__close", (function(e) {
                        e.stopPropagation(),
                        t.destroy()
                    }
                    )).on("click", ".js-modal-accept", (function(e) {
                        t.accepted = !0,
                        "function" == typeof t.options.accept ? (t.options.accept.call(t),
                        t.options.close_on_accept && t.destroy()) : t.destroy(),
                        e.stopPropagation()
                    }
                    ))
                }
                )),
                destroy: function() {
                    return !(t.xhr && 4 !== t.xhr.readyState || (t.modal.$modal.find(".modal-body").off(),
                    "function" == typeof t.options.destroy && t.options.destroy.call(t),
                    0))
                },
                onBeforeInit: t.options.onBeforeInit,
                tryAgain: t.options.tryAgain
            }),
            this.modal.$el.on("click", ".modal-scroller", r().bind((function(e) {
                e.stopPropagation()
            }
            )))
        };
        u.prototype.requestStart = function() {
            return this.modal ? this.modal.requestStart() : this.$modal_body.hide(),
            this
        }
        ,
        u.prototype.requestSuccess = function(e, t) {
            this.$modal_body.show(),
            this.modal.showSuccess(e, t)
        }
        ,
        u.prototype.requestFail = function(e, t) {
            this.$modal_body.show(),
            this.modal.showError(e, t)
        }
        ,
        u.prototype.destroy = function() {
            this._destroyed || this.modal.destroy(),
            this._destroyed = !0
        }
        ;
        const d = u;
        var h = "../build/transpiled/components/base/confirm";
        window.define(h, (function() {
            var e = "undefined"
              , n = typeof t === e ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === e ? typeof module === e ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : t;
            return n && n.default || n
        }
        )),
        window.require([h])
    }
    ,
    77364: (e, t, n) => {
        "use strict";
        n.r(t),
        n.d(t, {
            default: () => v
        });
        var i, o, s = n(661533), r = n.n(s), a = n(55188), l = n.n(a), c = n(987081), u = n(128508), d = n(334254), h = n.n(d), p = n(678640), f = n(579569), _ = n(869445), m = new c.Subscription, g = {
            init: function() {
                "visible" === h().state() && _.default.send([{
                    method: "activity"
                }]),
                _.default.send([{
                    method: "get_online"
                }]),
                m.add(this.initStream().subscribe(l().bind(this.initStatus, this)))
            },
            initStream: function() {
                return _.default.subscribe("get_online").pipe(u.filter((function(e) {
                    return "get_online" === e.method && (0,
                    p.hasKeys)(e, ["body"])
                }
                )), u.map((function(e) {
                    return e.body.users
                }
                )), u.share())
            },
            initStatus: function(e) {
                (0,
                f.updateOnline)(e, !0)
            },
            refresh: function() {
                m.add(this.refreshStream().subscribe(l().bind(this.refreshStateUser, this)))
            },
            refreshSend: function() {
                return setInterval((function() {
                    _.default.send([{
                        method: "activity"
                    }])
                }
                ), 5e3)
            },
            refreshStream: function() {
                return _.default.subscribe("activity").pipe(u.filter((function(e) {
                    return "activity" === e.method && (0,
                    p.hasKeys)(e, ["body"])
                }
                )), u.map((function(e) {
                    return {
                        user_id: e.body.user_id,
                        event: "user_online" === e.body.event
                    }
                }
                )), u.share())
            },
            refreshStateUser: function(e) {
                (0,
                f.updateOnline)([e.user_id], e.event)
            }
        };
        _.default.subscribe("activity").pipe(u.filter((function(e) {
            return "activity" === (l().propertyOf(e)(["body", "channel"]) || "").replace(/[^A-Za-zА]/g, "")
        }
        ))).subscribe((function() {
            var e = !0
              , t = h().state();
            clearInterval(i),
            h().unbind(o),
            g.init(),
            g.refresh(),
            "visible" === t && !0 === e && (i = g.refreshSend()),
            o = h().change((function() {
                h().hidden() ? clearInterval(i) : !0 === e && (clearInterval(i),
                i = g.refreshSend())
            }
            )),
            r()(window).on("online", (function() {
                clearInterval(i),
                e = !0
            }
            )),
            r()(window).on("offline", (function() {
                clearInterval(i),
                e = !1
            }
            ))
        }
        ));
        const v = g;
        var y = "../build/transpiled/components/base/inbox/chats/status_chat";
        window.define(y, (function() {
            var e = "undefined"
              , n = typeof t === e ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === e ? typeof module === e ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : t;
            return n && n.default || n
        }
        )),
        window.require([y])
    }
    ,
    889378: (e, t, n) => {
        "use strict";
        n.r(t),
        n.d(t, {
            default: () => f
        });
        var i = n(661533)
          , o = n.n(i)
          , s = n(55188)
          , r = n.n(s)
          , a = n(460159)
          , l = n.n(a)
          , c = n(643095)
          , u = n(521466)
          , d = n(564638)
          , h = r().template('<div <% if (scrollerId) { %>id="<%= scrollerId %>"<% } %> class="modal-scroller custom-scroll"><div class="modal-body modal-body-loading <% if (float_animation) { %>modal-body-float-animation<% } %>"></div></div>')
          , p = r().template('<div class="default-overlay modal-overlay <% if (!default_overlay) { %> modal-overlay--filled <% } %>"><span class="modal-overlay__spinner spinner-icon spinner-icon-abs-center"></span></div>');
        n(247267);
        const f = u.default.extend({
            className: "modal",
            _classes: function() {
                return {
                    accept_button: "js-modal-accept",
                    body: "modal-body",
                    body_inner: "modal-body__inner",
                    close_button: "modal-body__close",
                    modal_error: "js-modal-error",
                    overlay: "modal-overlay",
                    scroller: "modal-scroller",
                    try_again_button: "js-modal-try-again"
                }
            },
            _selectors: function() {
                return {
                    cancel_button: ".modal-body__actions .button-cancel",
                    overlay_spinner: ".modal-overlay .modal-overlay__spinner"
                }
            },
            events: function() {
                var e = r().result(u.default.prototype, "events", {});
                return e["click ".concat(this._selector("try_again_button"))] = "onModalTryAgainClick",
                e["click ".concat(this._selector("accept_button"))] = "onModalAcceptClick",
                e["click ".concat(this._selector("close_button"))] = "onModalCloseClick",
                e["click ".concat(this._selector("cancel_button"))] = "onModalCancelClick",
                e["click ".concat(this._selector("scroller"))] = "onModalScrollerClick",
                e["mousedown ".concat(this._selector("scroller"))] = "onModalScrollerMouseDown",
                e["modal:loaded ".concat(this._selector("body"))] = "onModalLoaded",
                e["modal:centrify ".concat(this._selector("body"))] = "onModalCentrify",
                e["modal:need-page-reload ".concat(this._selector("body"))] = "onPageReloadAfterModalClose",
                e
            },
            document_events: function() {
                return r().result(u.default.prototype, "document_events", {
                    "page:changed": "onPageChanged",
                    keydown: "onModalKeydown"
                })
            },
            _setOptions: function(e) {
                return this.options = o().extend({
                    class_name: "modal-list",
                    can_centrify: !1,
                    init: r().noop,
                    destroy: r().noop,
                    tryAgain: r().noop,
                    container: document.body,
                    disable_overlay_click: !1,
                    disable_escape_keydown: !1,
                    disable_enter_keydown: !1,
                    disable_overlay: !1,
                    init_animation: !1,
                    default_overlay: !1,
                    preload_templates: [],
                    focus_element: ".js-modal-accept",
                    without_offsets_on_centify: !1,
                    onBeforeInit: null,
                    onModalPosition: null,
                    scrollerId: null
                }, e || {}),
                this.disable_overlay_click = this.options.disable_overlay_click,
                this._orig_disable_overlay_click = this.disable_overlay_click,
                this
            },
            initialize: function(e) {
                var t = [];
                u.default.prototype.initialize.call(this),
                this._setOptions(e).render(),
                APP.is_touch_device && this.options.can_centrify && r().delay(r().bind(this.onModalCentrify, this), 500),
                this.options.disable_resize || this._$window.on("resize".concat(this.ns), r().throttle(r().bind(this.onModalCentrify, this), d.WINDOW_RESIZE_THROTTLE_DELAY)),
                this.delegateEvents();
                var n = r().bind(this.options.init, this, this._elem("body"));
                return this.options.preload_templates.length && t.push(l()._preload(this.options.preload_templates)()),
                this.options.onBeforeInit && t.push(this.options.onBeforeInit()),
                t.length ? Promise.all(t).then((function() {
                    n()
                }
                )) : n(),
                this
            },
            destroy: function() {
                if (this.$overlay.hasClass("permanent-overlay") || !1 === this.options.destroy() || this._destroyed)
                    return !1;
                this._destroyed = !0,
                this.$overlay.trigger("overlay:hide", {
                    callback: r().bind(u.default.prototype.destroy, this, !0)
                }),
                this._elem("body").remove(),
                this.options.need_page_reload && this._$document.trigger("page:reload")
            },
            setNS: function() {
                this.ns = ".modal:core.".concat(r().uniqueId("modal_"))
            },
            render: function() {
                return this.$el.addClass(this.options.class_name),
                this.$el.html(h({
                    float_animation: this.options.init_animation,
                    scrollerId: this.options.scrollerId || ""
                })),
                this.$modal = this.$el,
                this.$overlay = o()(p({
                    default_overlay: this.options.default_overlay
                })),
                this.$el.append(this.$overlay),
                o()(this.options.container).append(this.$el),
                o()(".modal").length > 1 && this.$overlay.css(Modernizr.prefixed("transition"), "none"),
                this.options.disable_overlay || this.$overlay.trigger("overlay:show"),
                this.$el.find(this.options.focus_element).focus(),
                this.$el.prepareTransition(),
                this
            },
            onModalScrollerMouseDown: function(e) {
                e.target === this._elem("scroller").get(0) && (this._scroller_mousedown = !0,
                setTimeout((function() {
                    self._scroller_mousedown = !1
                }
                ), 100))
            },
            onModalAcceptClick: function() {
                this._elem("overlay_spinner").show()
            },
            onModalTryAgainClick: function() {
                this._elem("body").attr("class", this._orig_class_name_before_error_success).css("width", ""),
                this._orig_class_name_before_error_success = "",
                this._findElem("modal_error").remove(),
                this._findElem("body_inner").show(),
                this.onModalCentrify(),
                this.options.tryAgain.call(this)
            },
            onModalKeydown: function(e) {
                var t = o()(".modal:visible", document.body)
                  , n = o()(e.target);
                if (t.length && r().findIndex(t, (function(e) {
                    return e.isSameNode(this.el)
                }
                ), this) === t.length - 1)
                    switch (e.keyCode) {
                    case 13:
                        if (this.options.disable_enter_keydown)
                            return;
                        n.closest(".modal").length && n.is(":input, [contenteditable]") && !t.hasClass("js-modal-confirm") || (n.blur(),
                        e.stopImmediatePropagation(),
                        this._findElem("accept_button").trigger("click"));
                        break;
                    case 27:
                        this.disable_overlay_click || this.options.disable_escape_keydown || this.destroy()
                    }
            },
            onModalCloseClick: function(e) {
                e.stopPropagation(),
                this.destroy()
            },
            onModalCancelClick: function(e) {
                this.options.disable_cancel_click || (this.destroy(),
                e.stopPropagation())
            },
            onModalScrollerClick: function(e) {
                var t = o()(e.target);
                (t.hasClass("modal-scroller") && this._scroller_mousedown && !this.disable_overlay_click || t.closest(".button-cancel").length && !this.options.disable_cancel_click) && this.destroy()
            },
            onPageChanged: function() {
                !1 !== this.options.can_destroy && this.destroy()
            },
            onModalLoaded: function() {
                this._elem("body").show().removeClass("modal-body-loading"),
                this._elem("overlay_spinner").hide()
            },
            onModalCentrify: function() {
                var e = this._$window.width() - 65;
                if (!this.$el.is(":hidden")) {
                    this.onModalLoaded();
                    var t = this._findElem("body")
                      , n = t.get(0)
                      , i = n ? n.offsetHeight : 0
                      , o = n ? n.parentNode.offsetHeight : 0
                      , s = this.options.without_offsets_on_centify ? 0 : 130;
                    if (r().isFunction(this.options.onModalPosition))
                        this.options.onModalPosition(t);
                    else if (i < o - s) {
                        var a = n.offsetWidth;
                        t.css({
                            marginTop: Math.ceil(-1 * (o / 2 - i / 2 + i)) + parseFloat(t.css("top")) % 1
                        }).css({
                            marginLeft: Math.floor(a / 2 * -1) + parseFloat(t.css("left")) % 1
                        }).removeClass("modal-body-relative").removeClass("modal-body-relative--small-screen")
                    } else
                        t.addClass("modal-body-relative").css({
                            marginTop: "",
                            marginLeft: ""
                        }),
                        n && n.offsetWidth + 130 > e ? t.addClass("modal-body-relative--small-screen") : t.removeClass("modal-body-relative--small-screen");
                    this.options.init_animation && t.prepareTransition().removeClass("modal-body-float-animation"),
                    this.options.centrify_animation && this.centrifyAnimation()
                }
            },
            centrifyAnimation: function(e) {
                !1 === e ? this._elem("body").removeClass("modal-body-centrified") : (this._elem("body").offset(),
                this._elem("body").addClass("modal-body-centrified"))
            },
            show: function() {
                this.$el.show()
            },
            hide: function() {
                this.$el.hide()
            },
            getScroller: function() {
                return this._elem("scroller")
            },
            showError: l()._preload(["/tmpl/common/modal/error.twig"], "_showError"),
            _showError: function(e, t) {
                this._orig_class_name_before_error_success = this._elem("body").attr("class"),
                this.disable_overlay_click = this._orig_disable_overlay_click,
                t = !r().isBoolean(t) || t,
                this.centrifyAnimation(!1),
                this._elem("overlay_spinner").hide(),
                this._findElem("body_inner").hide(),
                this._elem("body").attr("class", this._class("body")).first().show().width(500).append(l()({
                    ref: "/tmpl/common/modal/error.twig"
                }).render({
                    text: e || !1,
                    no_retry: !t
                })).trigger("modal:loaded").trigger("modal:centrify"),
                (0,
                c.sentryLogErrorModal)(e)
            },
            showSuccess: l()._preload(["/tmpl/common/modal/success.twig"], "_showSuccess"),
            _showSuccess: function(e, t, n) {
                this._orig_class_name_before_error_success = this._elem("body").attr("class"),
                this.disable_overlay_click = this._orig_disable_overlay_click,
                this.centrifyAnimation(!1),
                this._elem("overlay_spinner").hide(),
                this._findElem("body_inner").hide(),
                this._elem("body").first().attr("class", this._class("body")).show().width(500).append(l()({
                    ref: "/tmpl/common/modal/success.twig"
                }).render({
                    msg: e || !1
                })).trigger("modal:loaded").trigger("modal:centrify"),
                r().delay(r().bind((function() {
                    this._elem("body").attr("class", this._orig_class_name_before_error_success),
                    this._orig_class_name_before_error_success = "",
                    this.destroy(),
                    r().isFunction(t) && t()
                }
                ), this), n || 500)
            },
            requestStart: function() {
                return this.disable_overlay_click = !0,
                this._elem("overlay_spinner").show(),
                this._elem("body").hide(),
                this
            },
            shakeError: function() {
                this.disable_overlay_click = this._orig_disable_overlay_click,
                this._elem("overlay_spinner").hide(),
                this._elem("body").one(APP.animation_event, r().bind((function(e) {
                    o()(e.currentTarget).removeClass("animated shake")
                }
                ), this)).addClass("animated shake")
            },
            onPageReloadAfterModalClose: function() {
                this.options.need_page_reload = !0
            }
        });
        var _ = "../build/transpiled/components/base/modal";
        window.define(_, (function() {
            var e = "undefined"
              , n = typeof t === e ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === e ? typeof module === e ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : t;
            return n && n.default || n
        }
        )),
        window.require([_])
    }
    ,
    77356: (e, t, n) => {
        "use strict";
        n.r(t),
        n.d(t, {
            default: () => h
        });
        var i = n(661533)
          , o = n.n(i)
          , s = n(55188)
          , r = n.n(s)
          , a = n(460159)
          , l = n.n(a)
          , c = n(521466)
          , u = n(929658)
          , d = n(577486);
        const h = c.default.extend({
            template: "/tmpl/controls/checkboxes_search/opening_list.twig",
            className: "checkboxes-search__opening-list hidden",
            events: {
                click: "_stopPropagation",
                "update:form:defaults": "updateFormDefaults"
            },
            _stopPropagation: function(e) {
                e.stopPropagation()
            },
            _selectors: function() {
                return {
                    cb_inputs: "input:checkbox",
                    cb_ch_inputs: "input:checked"
                }
            },
            initialize: function(e) {
                this.options = e || {},
                this.applyClick = r().isFunction(e.applyClick) ? e.applyClick : r().noop,
                this.cancelClick = r().isFunction(e.cancelClick) ? e.cancelClick : r().noop,
                this.parrentClose = r().isFunction(e.parrentClose) ? e.parrentClose : r().noop,
                this.callbackHide = r().isFunction(e.callbackHide) ? e.callbackHide : r().noop,
                c.default.prototype.initialize.apply(this, arguments),
                this.options.el || this.render(),
                this.initForm(),
                this.initEvent()
            },
            initEvent: function() {
                this.$el.on("click".concat(this.ns), ".js-checkboxes-search-list-apply:not(.button-input-disabled)", r().bind(this.hide, this)).on("click".concat(this.ns), ".js-checkboxes-search-list-close", r().bind(this.close, this)).on("input".concat(this.ns), ".checkboxes-search__search-input", r().bind(this.search, this)).on("click".concat(this.ns), ".js-checkboxes-search-clear-all", r().bind(this.allChangeClear, this)).on("click".concat(this.ns), ".js-checkboxes-search-check-all", r().bind(this.allChangeCheck, this))
            },
            updateFormDefaults: function() {
                this.form.model.deepCloneDefaults(),
                this.form.checkChanges()
            },
            initForm: function() {
                this.form = this._addComponent(u.default.View, {
                    el: this.$el,
                    model: u.default.Model
                }),
                this.form.listenTo(this.form.model, "has_changes", r().bind(this.triggerButton, this, !0)).listenTo(this.form.model, "has_reverted", r().bind(this.triggerButton, this, !1))
            },
            close: function(e) {
                e.stopPropagation(),
                e.preventDefault(),
                this.form && this.form.revert(),
                this.cancelClick(),
                this.hide()
            },
            triggerButton: function(e) {
                this._triggerButton || (this._triggerButton = r().throttle(r().bind((function() {
                    var t = this.$el.find("input:checkbox")
                      , n = this.$el.find("input:checked")
                      , i = this.form.model.defaults[this.options.name];
                    e = r().isString(i) && !i.length || i && i.length === t.length ? t.length !== n.length && 0 !== n.length : !r().isEqual(this.form.model.attributes, this.form.model.defaults),
                    this.$el.find(".js-checkboxes-search-list-apply").trigger("button:save:".concat(e ? "enable" : "disable"))
                }
                ), this), 400)),
                r().isFunction(this._triggerButton) && this._triggerButton()
            },
            render: function() {
                return l()._preload([this.template], r().bind((function() {
                    this.$el.html(l()({
                        ref: this.template
                    }).render(this.options))
                }
                ), this))()
            },
            hide: function(e) {
                this.parrentClose(),
                e && this.applyClick(),
                this.$el.addClass("hidden").find(".checkboxes-search__search-input").val("").trigger("input"),
                this._findElem("cb_inputs").length === this._findElem("cb_ch_inputs").length && this._findElem("cb_inputs").attr("checked", !1),
                this._findElem("cb_inputs").trigger("change"),
                this._findElem("cb_ch_inputs").trigger("change"),
                this.form && "" === this.form.model.get(this.name) && this.form.revert(),
                this.updateFormDefaults(),
                this.callbackHide()
            },
            allChange: function(e) {
                this.$el.find("input:checkbox").prop("checked", !1),
                this.$el.find("input:checkbox").prop("checked", e).trigger("change")
            },
            allChangeClear: function() {
                this.allChange(!1)
            },
            allChangeCheck: function() {
                this.allChange(!0)
            },
            search: function(e) {
                var t = o()(e.currentTarget).val();
                this.$el.find(".checkboxes-search__item-label").each((function(e, n) {
                    o()(n).toggleClass("hidden", r().isNull(o()(n).find(".element__text").text().toLowerCase().match(new d.UnsafeRegExp(t,"igm"))))
                }
                ))
            },
            destroy: function() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                    t[n] = arguments[n];
                this.$el.off(),
                this._destroyComponent(this.form),
                c.default.prototype.destroy.apply(this, t)
            }
        });
        var p = "../build/transpiled/components/fields/checkboxes_search";
        window.define(p, (function() {
            var e = "undefined"
              , n = typeof t === e ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === e ? typeof module === e ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : t;
            return n && n.default || n
        }
        )),
        window.require([p])
    }
    ,
    175396: (e, t, n) => {
        "use strict";
        n.r(t);
        var i = n(661533)
          , o = n.n(i)
          , s = n(55188)
          , r = n.n(s)
          , a = n(564638);
        function l() {
            switch (APP.data.current_entity) {
            case "events":
                return "#sidebar_events";
            case "settings-users":
                return "#user_right_aside";
            default:
                return "#sidebar"
            }
        }
        o()(document).off("click", ".aside-toggleable #sidebar_toggler, .js-aside_toggler").on("page:changed.filter", (function() {
            o()(l()).toggleClass("sidebar-expanded", !1),
            o()("#sidebar__right").toggleClass("sidebar-expanded", !1),
            o()("#sidebar_overlay, #filter_overlay").trigger("overlay:hide")
        }
        )).on("click", ".filter-sidebar", (function() {
            o()("#sidebar__right").toggleClass("sidebar-expanded"),
            o()(".sidebar__button__close").css({
                "background-image": "none"
            }),
            o()(document.body).append(o()('<div class="default-overlay" id="filter_overlay"></div>')),
            o()("#filter_overlay").trigger("overlay:show")
        }
        )).on("click", ".aside-toggleable #sidebar_toggler, .js-aside_toggler", (function() {
            var e = o()(l());
            if (e.toggleClass("sidebar-expanded"),
            e.hasClass("sidebar-expanded")) {
                var t = o()('<div class="default-overlay" id="sidebar_overlay"></div>');
                o()(document.body).append(t),
                t.trigger("overlay:show")
            } else
                o()("#sidebar_overlay").trigger("overlay:hide")
        }
        )).on("click", ".sidebar__button__close, #filter_overlay", (function() {
            o()("#filter_overlay").trigger("overlay:hide"),
            o()("#sidebar__right").toggleClass("sidebar-expanded", !1)
        }
        )).on("click", "#sidebar_overlay", (function() {
            o()("#sidebar_overlay").trigger("overlay:hide"),
            o()(l()).toggleClass("sidebar-expanded", !1)
        }
        )),
        o()(window).on("resize", r().throttle((function() {
            var e, t = null !== (e = o()(window).width()) && void 0 !== e ? e : 0, n = o()(l());
            t > 1279 && n.hasClass("sidebar-expanded") && (o()("#sidebar_overlay").trigger("overlay:hide"),
            o()(l()).toggleClass("sidebar-expanded", !1))
        }
        ), a.WINDOW_RESIZE_THROTTLE_DELAY));
        var c = "../build/transpiled/components/filter/common";
        window.define(c, (function() {
            var e = "undefined"
              , n = typeof t === e ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === e ? typeof module === e ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : t;
            return n && n.default || n
        }
        )),
        window.require([c])
    }
    ,
    929658: (e, t, n) => {
        "use strict";
        n.r(t),
        n.d(t, {
            default: () => f
        });
        var i, o = n(661533), s = n.n(o), r = n(55188), a = n.n(r), l = n(871082), c = n.n(l), u = n(510144), d = function(e) {
            return e && "object" == typeof e ? a().isString(e) ? String.prototype.slice.call(e) : a().isDate(e) ? new Date(e.valueOf()) : a().isFunction(e.clone) ? e.clone() : a().isArray(e) ? a().map(e, (function(e) {
                return d(e)
            }
            )) : a().mapObject(e, (function(e) {
                return d(e)
            }
            )) : e
        }, h = (i = a().allKeys,
        !0,
        function(e) {
            var t, n, o, s, r, a, l = arguments.length;
            if (l < 2 || null === e)
                return e;
            for (t = 1; t < l; t++)
                for (a = (o = i(n = arguments[t])).length,
                r = 0; r < a; r++)
                    void 0 !== e[s = o[r]] || (e[s] = d(n[s]));
            return e
        }
        ), p = u.default.Model.extend({
            initialize: function() {
                this.defaults = d(this.attributes)
            },
            setDefaults: function() {
                this.defaults = h(this.defaults, this.attributes)
            },
            updateDefaults: function() {
                this.defaults = s().extend(!0, {}, this.defaults, this.attributes)
            },
            set: function(e, t, n) {
                if ("statistic_select" !== e)
                    return a().isObject(e) ? a().each(e, (function(t, n) {
                        e[n] = i(t)
                    }
                    )) : t = i(t),
                    u.default.Model.prototype.set.call(this, e, t, n);
                function i(e) {
                    return a().isArray(e) ? a()(e).sort() : e
                }
            },
            toJSON: function(e) {
                var t = c().Model.prototype.toJSON.call(this)
                  , n = {};
                return e = e || !1,
                a().isObject(e) ? (a().mapObject(e, (function(e, t) {
                    var i = a().findKey(this.attributes, (function(e, n) {
                        return -1 !== n.indexOf(t)
                    }
                    ));
                    n[i] = this.get(i),
                    -1 !== t.indexOf("from") && (t = t.replace("from", "to"),
                    n[t] = this.get(t))
                }
                ), this),
                n) : t
            }
        });
        const f = {
            View: u.default.View.extend({
                _cached_form_html: null,
                destroy: function() {
                    this.$(".pipeline-select-wrapper").off("filter:statuses:update"),
                    this.remove(!1)
                },
                updateCache: function() {
                    this._cached_form_html = this.$el.html()
                },
                revert: function() {
                    this._cached_form_html && this.$el.html(this._cached_form_html),
                    this.initModelFromForm(),
                    this.model.trigger("filter:reinit"),
                    this.model.trigger("has_reverted", {
                        type: "has_reverted"
                    })
                },
                initModelFromForm: function() {
                    var e = this;
                    this._cached_form_html = this.$el.html(),
                    a().each(this.$(":input"), (function(e) {
                        this.setModelValue(s()(e))
                    }
                    ), this),
                    this.model.deepCloneDefaults(),
                    this.model.url || (this.model.url = this.$el.attr("action")),
                    this.$(".pipeline-select-wrapper").on("filter:statuses:update", (function(t, n) {
                        e.showLossReasonsInput(n.statuses),
                        e.showUnsortedCategoriesInput(n.statuses)
                    }
                    ))
                },
                setInputValue: function(e, t, n, i) {
                    var o = e.attr("type");
                    switch (i = i || {},
                    n = n || e.attr("name"),
                    o) {
                    case "checkbox":
                    case "radio":
                        e.prop("checked", t);
                        break;
                    default:
                        e.val(t)
                    }
                    i.silent || e.trigger("change").trigger("controls:change"),
                    this.setModelValue(e)
                },
                checkDeleted: function() {
                    a().each(this.model.attributes, (function(e, t) {
                        var n = this.$el.find(':input[name="'.concat(t, '"]:not(.js-form-changes-skip)'))
                          , i = [];
                        n.length ? n.is(":checkbox") && a().isArray(e) && (i = n.map((function(e, t) {
                            return t.value
                        }
                        )).toArray(),
                        this.model.attributes[t] = a().filter(e, (function(e) {
                            return a().contains(i, e)
                        }
                        ))) : delete this.model.attributes[t]
                    }
                    ), this),
                    this.checkChanges()
                },
                changeInModel: function(e, t) {
                    this.setModelValue(s()(e.currentTarget), t),
                    this.checkChanges()
                },
                setModelValue: function(e, t) {
                    var n, i, o = e.attr("name"), s = this.model.get(o);
                    if (t = t || {},
                    e.length && o && !e.hasClass("js-form-changes-skip") && !e.closest(".filter__custom_settings__item").is([".filter__custom_settings__item_unsorted-categories.hidden", ".filter__custom_settings__item_loss-reasons.hidden"].join(",")) && !e.attr("disabled")) {
                        if ("checkbox" === e[0].type) {
                            if (n = this.getInputValue(e),
                            s)
                                switch (a().isArray(s) || (s = [s]),
                                n ? s.push(n) : (i = a().contains(s, e.val()) ? e.val() : !!a().contains(s, !0) || "on",
                                s = a().without(s, i)),
                                (n = a().sortBy(a().uniq(s), (function(e) {
                                    return (e || "").toString()
                                }
                                ))).length) {
                                case 1:
                                    n = n[0];
                                    break;
                                case 0:
                                    n = ""
                                }
                        } else
                            n = this.getInputValue(e);
                        "status" === e.attr("data-field_type") && (this.showLossReasonsInput(n),
                        this.showUnsortedCategoriesInput(n)),
                        this.model.set(o, n, {
                            silent: t.base_form_silent || !1
                        })
                    }
                },
                setFormChanges: function(e, t) {
                    t && t.is_called_inside_on_change && (this.model._changing = !1),
                    this.model.set(e),
                    t && !1 !== t.is_input_update_needed && a().each(e, (function(e, t) {
                        this.setInputValue(this.$el.find('[name="'.concat(t, '"]')), e, t)
                    }
                    ), this)
                },
                showUnsortedCategoriesInput: function(e) {
                    var t = this.$el.find(".filter__custom_settings__item_unsorted-categories");
                    e = (e = a().isArray(e) ? e : [e]).map((function(e) {
                        return parseInt(e)
                    }
                    )),
                    e = a().intersection(e, Object.keys(APP.constant("unsorted_statuses")).map((function(e) {
                        return parseInt(e)
                    }
                    ))),
                    a().isEmpty(e) ? t.hasClass("hidden") || (t.hasClass("glow") && this.model.unset("filter[unsorted_category][]"),
                    t.addClass("hidden")) : t.removeClass("hidden")
                },
                showLossReasonsInput: function(e) {
                    var t = this.$el.find(".filter__custom_settings__item_loss-reasons");
                    e = a().isArray(e) ? e : [e],
                    a().contains(e, "143") ? t.removeClass("hidden") : t.hasClass("hidden") || (t.hasClass("glow") && this.model.unset("filter[loss_reason_id][]"),
                    t.addClass("hidden"))
                }
            }),
            Model: p
        };
        var _ = "../build/transpiled/components/filter/form";
        window.define(_, (function() {
            var e = "undefined"
              , n = typeof t === e ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === e ? typeof module === e ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : t;
            return n && n.default || n
        }
        )),
        window.require([_])
    }
    ,
    227532: (e, t, n) => {
        "use strict";
        n.r(t),
        n.d(t, {
            default: () => b
        });
        var i, o, s = n(661533), r = n.n(s), a = n(55188), l = n.n(a), c = n(161320), u = n.n(c), d = n(312309), h = n(886965), p = n(579569), f = (0,
        h.getLeadsWinlostStatuses)(), _ = ["filter_date_from", "filter_date_to", "filter[date][from]", "filter[date][to]"], m = /^(filter\[(cf|custom_fields)\]\[\d+\]\[)(from|to)(])$/g, g = {
            leads: function() {
                var e = []
                  , t = "";
                return (0,
                d.getQueryParam)("term") && !this._searching || (e = this.getFilterStatuses()),
                e.length && (t = this.sortFilter(e)),
                this.getDefaultFilterTagsLogic(t)
            },
            "leads-pipeline": function() {
                return g.leads.call(this)
            },
            customers: function() {
                return this.sortFilter([{
                    name: "filter[segments_logic]",
                    value: "and"
                }])
            },
            events: function() {
                return this.sortFilter([{
                    name: "filter_date_switch",
                    value: "created"
                }, {
                    name: "filter[main_user][]",
                    value: ""
                }])
            },
            dashboard: function() {
                return this.sortFilter([{
                    name: "filter_date_switch",
                    value: "created"
                }, {
                    name: "filter[main_user][]",
                    value: ""
                }])
            },
            todo: function() {
                var e = l().map(APP.constant("task_types"), (function(e) {
                    return {
                        name: "filter[task_type][]",
                        value: e.id
                    }
                }
                ));
                return this.sortFilter(l().union([{
                    name: "filter[task_type][]",
                    value: "1"
                }, {
                    name: "filter[task_type][]",
                    value: "2"
                }, {
                    name: "filter[status][]",
                    value: "uncompl"
                }, {
                    name: "filter[main_user][]",
                    value: ((0,
                    p.current)("id") || "").toString()
                }], e))
            },
            "todo-calendar": function() {
                return g.todo.call(this)
            },
            "todo-line": function() {
                return g.todo.call(this)
            },
            stats: function() {
                var e = [];
                switch (this.params._report_type) {
                case "winlost":
                    e = APP.constant("default_filter") || [];
                    break;
                case "consolidated":
                    e = this.getFilterStatuses();
                    break;
                case "goals":
                    e = (e = e.concat(r().makeArray(this.$('[name="filter[group][]"]').map((function() {
                        return {
                            name: this.name,
                            value: this.value
                        }
                    }
                    ))))).concat([{
                        name: "filter[month]",
                        value: (u()().month() + 1).toString()
                    }, {
                        name: "filter[year]",
                        value: u()().year().toString()
                    }])
                }
                return this.sortFilter(e)
            },
            "settings-users": function() {
                var e = [{
                    name: "active[]",
                    value: "Y"
                }];
                return this.params.is_all_preset_first && e.push({
                    name: "active[]",
                    value: "N"
                }),
                this.sortFilter(e)
            },
            statsCalls: function() {
                var e = [];
                return e = (e = (e = (e = e.concat(r().makeArray(this.$('[name="entity[]"]').map((function() {
                    return {
                        name: this.name,
                        value: this.value
                    }
                }
                ))))).concat(r().makeArray(this.$('[name="filter[group_id][]"]').map((function() {
                    return {
                        name: this.name,
                        value: this.value
                    }
                }
                ))))).concat(r().makeArray(this.$('[name="call_status[]"]').map((function() {
                    return {
                        name: this.name,
                        value: this.value
                    }
                }
                ))))).concat(r().makeArray(this.$('[name="call_type[]"]').map((function() {
                    return {
                        name: this.name,
                        value: this.value
                    }
                }
                )))),
                this.sortFilter(e)
            },
            files: function() {
                return this.sortFilter([{
                    name: "filter[size][unit]",
                    value: "1000000"
                }])
            },
            "files-trash": function() {
                return this.sortFilter([{
                    name: "filter[size][unit]",
                    value: "1000000"
                }])
            }
        }, v = (i = {
            filter_date_switch: ["", "created", "on"],
            "filter[date_preset]": [""],
            "filter[main_contact][date_preset]": [""],
            "filter[company][date_preset]": [""],
            "filter[next_date][date_preset]": [""],
            fake: ["", "fake"],
            "filter[segments_logic]": "and",
            "filter[size][unit]": ["1", "1000", "1000000", "1000000000"]
        },
        o = ["company", "main_contact"],
        l().each(i, (function(e, t) {
            l().each(o, (function(n) {
                i["filter[%s][%d]".replace("%s", n).replace("%d", t)] = e
            }
            ))
        }
        )),
        i["filter[date][type]"] = ["", "create", "on"],
        i["filter[tags_logic]"] = ["or"],
        i), y = {};
        const b = {
            getDefaultFilter: function() {
                var e = APP.data.current_entity
                  , t = g[e]
                  , n = l().isFunction(t) ? t.call(this) : t;
                return y[e] = l().extend({}, v, (0,
                d.QStoJSON)(n)),
                n
            },
            filterDefaultValues: function(e, t, n) {
                var i = y[APP.data.current_entity]
                  , o = (n && i || v)[e];
                return !!o && (l().isArray(o) ? l().isArray(t) ? l().isEqual(o, t) : l().contains(o, t) : o === t)
            },
            filterDefaultsDatePresetCheck: function(e) {
                var t, n, i = !1;
                return l().contains(_, e) && (t = ["filter[date_preset]", "filter[date][date_preset]"],
                i = !0),
                e.match(m) && (t = [e.replace(m, "$1date_preset$4")],
                i = !0),
                !!i && (n = l().reduce(t, (function(e, t) {
                    return e || (e = this.form.model.get(t)),
                    e
                }
                ), "", this),
                !l().isEmpty(n) && !this.filterDefaultValues(t, n))
            },
            getFilterStatuses: function() {
                return r().makeArray(this.$('[name="filter[status_id][]"], [name^="filter[pipe]"]').filter((function() {
                    return !l().contains(f, parseInt(this.value))
                }
                )).map((function() {
                    return {
                        name: this.name,
                        value: this.value
                    }
                }
                )))
            },
            sortFilter: function(e) {
                return l().chain(e).map((function(e) {
                    return "".concat(e.name, "=").concat(e.value)
                }
                )).sortBy((function(e) {
                    return e
                }
                )).value().join("&")
            },
            getDefaultFilterTagsLogic: function(e) {
                var t = this.form.model.get("filter[tags_logic]") ? "filter[tags_logic]=or" : "";
                return e && t && (t = "&".concat(t)),
                (e || "") + t
            }
        };
        var w = "../build/transpiled/components/filter/mixins/defaults";
        window.define(w, (function() {
            var e = "undefined"
              , n = typeof t === e ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === e ? typeof module === e ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : t;
            return n && n.default || n
        }
        )),
        window.require([w])
    }
    ,
    840592: (e, t, n) => {
        "use strict";
        n.r(t),
        n.d(t, {
            default: () => _
        });
        var i = n(661533)
          , o = n.n(i)
          , s = n(55188)
          , r = n.n(s)
          , a = n(678640)
          , l = n(519351)
          , c = n(805163);
        function u(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, i = new Array(t); n < t; n++)
                i[n] = e[n];
            return i
        }
        var d = o().ajax
          , h = /^\/[^/]/
          , p = APP.constant("user").sso_auth;
        o().ajax = function() {
            var e = Array.prototype.slice.call(arguments)
              , t = r().noop
              , n = r().noop
              , i = r().noop;
            return r().isObject(e[0]) && h.test(e[0].url) ? (t = e[0].success || r().noop,
            n = e[0].error || r().noop,
            i = e[0].complete || r().noop,
            e[0] = r().omit(e[0], "success", "error", "complete"),
            d.apply(this, e).done(t).fail(n).always(i)) : d.apply(this, e)
        }
        ,
        o().ajaxPromisify = function() {
            var e = this
              , t = Array.prototype.slice.call(arguments);
            return new Promise((function(n, i) {
                d.apply(e, t).then(n, i)
            }
            ))
        }
        ;
        var f = function() {
            return this._settings = {
                buffer_interval: 25,
                buffer_wait_limit: 500
            },
            this._buffer = [],
            this._current_requests = [],
            this._refreshing = !1,
            p && (this.sso_auth = new c.default),
            this
        };
        r().extend(f.prototype, {
            setup: function() {
                o().ajaxPrefilter(r().bind((function(e, t, n) {
                    if (h.test(e.url) && !0 !== e.refresh_retry) {
                        var i = o().Deferred();
                        return this._current_requests.push(e.url),
                        n.always(r().bind((function() {
                            this._current_requests.splice(r().indexOf(this._current_requests, e.url), 1)
                        }
                        ), this)),
                        n.done(i.resolve),
                        n.fail(r().bind((function() {
                            var t = Array.prototype.slice.call(arguments)
                              , o = n.responseJSON;
                            401 === n.status ? (this._addToBuffer(e, i),
                            p && !this.sso_auth.is_refresh_token_window_due_to_401_opened ? this.sso_auth.setExpireTokenOverlay(!0).then(r().bind((function() {
                                this._fireBuffer()
                            }
                            ), this)) : this._showAuthModal()) : 400 === n.status || 402 === n.status ? ((0,
                            a.hasKeys)(o, ["response", "redirect"]) && (0,
                            a.hasKeys)(APP, ["router", "navigate"]) && APP.router.navigate(o.response.redirect, {
                                trigger: !0,
                                replace: !0
                            }),
                            i.rejectWith(n, t)) : i.rejectWith(n, t)
                        }
                        ), this)),
                        i.promise(n)
                    }
                }
                ), this))
            },
            _showAuthModal: function() {
                this._refreshing || (window.app ? r().isFunction(window.app.logout) && window.app.logout() : (this._setRefreshingFlag(!0),
                new l.default({
                    success: r().bind(this._authSuccess, this)
                })))
            },
            _setRefreshingFlag: function(e) {
                this._refreshing = e
            },
            _addToBuffer: function(e, t) {
                this._buffer.push({
                    deferred: t,
                    settings: e
                })
            },
            _fireBuffer: function() {
                var e, t, n = [];
                r().each(this._buffer, (function(e) {
                    e.settings.refresh_retry = !0,
                    n.push(o().ajax(e.settings).then(e.deferred.resolve, e.deferred.reject))
                }
                )),
                this._clearBuffer(),
                (e = o()).when.apply(e, (t = n,
                function(e) {
                    if (Array.isArray(e))
                        return u(e)
                }(t) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"])
                        return Array.from(e)
                }(t) || function(e, t) {
                    if (e) {
                        if ("string" == typeof e)
                            return u(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        return "Object" === n && e.constructor && (n = e.constructor.name),
                        "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? u(e, t) : void 0
                    }
                }(t) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }())).done(r().bind((function() {
                    this._setRefreshingFlag(!1)
                }
                ), this)).fail(r().bind((function() {
                    this._setRefreshingFlag(!1)
                }
                ), this))
            },
            _clearBuffer: function() {
                this._buffer = []
            },
            _authSuccess: function() {
                var e = 0;
                this.interval = setInterval(r().bind((function() {
                    e += this._settings.buffer_interval,
                    (0 === this._current_requests.length || e >= this._settings.buffer_wait_limit) && (clearInterval(this.interval),
                    this._fireBuffer())
                }
                ), this), this._settings.buffer_interval)
            }
        });
        const _ = (new f).setup();
        var m = "../build/transpiled/core/auth/interceptor";
        window.define(m, (function() {
            var e = "undefined"
              , n = typeof t === e ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === e ? typeof module === e ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : t;
            return n && n.default || n
        }
        )),
        window.require([m])
    }
    ,
    519351: (e, t, n) => {
        "use strict";
        n.r(t),
        n.d(t, {
            default: () => r
        });
        var i = n(661533)
          , o = n.n(i)
          , s = n(521466);
        const r = s.default.extend({
            initialize: function(e) {
                s.default.prototype.initialize.apply(this, arguments),
                this.options = e,
                document.getElementById("session_end_modal") || (this._$body.css("overflow", "hidden").prepend(['<div id="session_end_modal" class="session_end_modal" style="position:fixed; top:0; height:100%; width:100%; z-index:var(--session-end-modal-z-index); left:0">', '<iframe name="session_end_frame" style="width:100%; height:100%; position:fixed; z-index:9999999;" src="/private/account/restore_session.php"></iframe>', "</div>"].join("")),
                this.setElement(o()("#session_end_modal"))),
                APP.auth_modal = this
            },
            destroy: function() {
                this._$body.css("overflow", ""),
                s.default.prototype.destroy.call(this, !0),
                delete APP.auth_modal,
                this.options.success()
            }
        });
        var a = "../build/transpiled/core/auth/modal";
        window.define(a, (function() {
            var e = "undefined"
              , n = typeof t === e ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === e ? typeof module === e ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : t;
            return n && n.default || n
        }
        )),
        window.require([a])
    }
    ,
    344269: (e, t, n) => {
        "use strict";
        n.r(t),
        n.d(t, {
            default: () => S
        });
        var i = n(661533)
          , o = n.n(i)
          , s = n(55188)
          , r = n.n(s)
          , a = n(871082)
          , l = n.n(a)
          , c = n(162262)
          , u = n.n(c)
          , d = n(312309)
          , h = n(315702)
          , p = n(988050)
          , f = n(672065)
          , _ = n(389376)
          , m = n(395044)
          , g = n(598701);
        function v(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, i = new Array(t); n < t; n++)
                i[n] = e[n];
            return i
        }
        var y = o()(document)
          , b = function() {
            return APP.data.current_view && r().isFunction(APP.data.current_view._getInstance) ? APP.data.current_view._getInstance() : APP.data.current_view
        }
          , w = l().Router.prototype._bindRoutes
          , k = function() {
            var e = (0,
            d.getQueryString)();
            return window.location.pathname + (e ? "?".concat(e) : "")
        }
          , P = !1
          , C = !1
          , x = k();
        n(391753);
        var E = l().Router.extend({
            base_entities: ["leads", "contacts", "todo", "companies", "customers"],
            all_entities: [],
            paths: [],
            routes: r().extend(f.default, {
                ":entity(/)": "rememberedEntity",
                "*notFound": "notFound"
            }),
            initialize: function() {
                o()(document).on("page:reload list:reload", r().bind((function(e, t) {
                    this.reload(t)
                }
                ), this))
            },
            _bindRoutes: function() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                    t[n] = arguments[n];
                var i = [];
                this.routes && (this.routes = r().chain(r().result(this, "routes")).reduce((function(e, t, n) {
                    return r().isString(t) ? e[n] = t : (i.push([n, t[0], t[1], t[2] || {}]),
                    this.all_entities = r().chain(this.all_entities).union([t[0]]).uniq().value()),
                    e
                }
                ), {}, this).value(),
                w.apply(this, t),
                r().reject(i, (function(e) {
                    return e[3].internal = !0,
                    this.addRoute.apply(this, function(e) {
                        if (Array.isArray(e))
                            return v(e)
                    }(t = e) || function(e) {
                        if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"])
                            return Array.from(e)
                    }(t) || function(e, t) {
                        if (e) {
                            if ("string" == typeof e)
                                return v(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            return "Object" === n && e.constructor && (n = e.constructor.name),
                            "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? v(e, t) : void 0
                        }
                    }(t) || function() {
                        throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }()),
                    !0;
                    var t
                }
                ), this))
            },
            notFound: function() {
                this.routeWrap("page404")
            },
            rememberedEntity: function(e) {
                var t = {
                    leads: "pipeline",
                    whatsapp: "whatsapp",
                    customers: APP.constant("periodicity_enabled") ? "pipeline" : "list",
                    stats: "pipeline",
                    todo: "line",
                    contacts: "list",
                    calendar: "month",
                    catalogs: ""
                }
                  , n = (0,
                p.get)({
                    leads: "LAST_PLACE_DEALS",
                    whatsapp: "LAST_PLACE_WHATSAPP",
                    customers: "LAST_PLACE_CUSTOMERS",
                    stats: "LAST_PLACE_REPORTS",
                    todo: "LAST_PLACE_TODO",
                    contacts: "LAST_PLACE_CONTACTS",
                    catalogs: "LAST_PLACE_CATALOGS",
                    month: "LAST_PLACE_CALENDAR"
                }[e]);
                "stats" === e && "events/list" === n && (e = "events",
                n = "list"),
                n && -1 === n.indexOf("undefined") && -1 === n.indexOf("null") || (n = t[e]),
                "customers" !== e || "pipeline" !== n || APP.constant("periodicity_enabled") || (n = "list"),
                n || this.notFound(),
                APP.router.navigate("/".concat(e, "/").concat(n, "/"), {
                    trigger: !0,
                    replace: !0
                })
            },
            reload: function(e) {
                var t;
                !0 === e && (APP.data.current_entity = "no_entity"),
                APP.router.navigate((0,
                d.setQueryParam)({
                    reload: (0,
                    h.randHex)()
                }), {
                    trigger: !0,
                    replace: !0
                }),
                t = (0,
                d.removeQueryParam)("reload"),
                APP.router.navigate(window.location.pathname + (t ? "?".concat(t) : ""), {
                    trigger: !1,
                    replace: !0
                })
            },
            back: function(e) {
                var t, n = APP.getBaseEntity(), i = "", o = "/_support/".concat(n, "/list/").concat(i);
                if (C && !0 !== e)
                    m.default.getPreventFlag() ? this.confirmPageChange(m.default.getTrackChanges(), (function() {
                        l().history.history.back()
                    }
                    )) : l().history.history.back();
                else if (r().contains(["leads", "companies", "whatsapp", "contacts", "todo", "mail", "customers", "unsorted", "accounts", "users", "orders", "unban_account"], APP.getBaseEntity())) {
                    switch ("companies" === n && (n = "contacts",
                    i = "companies/"),
                    APP.getBaseEntity()) {
                    case "customers":
                        t = APP.constant("periodicity_enabled") ? "/customers/pipeline/" : "/customers/list/";
                        break;
                    case "unsorted":
                    case "leads":
                        t = "/leads/";
                        break;
                    case "whatsapp":
                        t = "/whatsapp/";
                        break;
                    case "mail":
                        t = "/".concat(n, "/inbox/");
                        break;
                    case "accounts":
                    case "users":
                    case "orders":
                    case "unban_account":
                        t = o;
                        break;
                    default:
                        t = "/".concat(n, "/list/").concat(i)
                    }
                    this.navigate(t, {
                        trigger: !0
                    })
                }
            },
            addRoute: function(e, t, n, i) {
                return this.route(e, r().bind((function() {
                    var e = (0,
                    d.getQueryString)()
                      , o = Array.prototype.slice.call(arguments);
                    e && o.pop(),
                    this.routeWrap(t, r().extend({
                        handler: n,
                        args: o
                    }, i || {}))
                }
                ), this)),
                this
            },
            routeWrap: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                    querystring: ""
                };
                (0,
                _.clearWidgetsBlock)(),
                P ? (APP.first_load = !1,
                "imbox" !== P.replace("/", "") && APP.constant("load_from_server", !1)) : t.first_load = !0,
                C === l().history.fragment && (t.is_back = !0),
                C = P,
                P && (t.path_changed = !0),
                t.is_card || this.paths.unshift(l().history.fragment),
                APP.getBaseEntity() === APP.getBaseEntity(e) ? APP.data.entity_changed = !1 : (t.entity_changed = !0,
                APP.data.entity_changed = !0),
                APP.data.page_changed = APP.data.current_entity !== e,
                APP.data.current_entity = e,
                APP.data.is_card = !!t.is_card,
                APP.data.from_card = !!APP.data.card_page,
                APP.data.entity_changed ? y.triggerHandler("page:entity_changed", [r().extend({}, t)]) : y.triggerHandler("page:sub_entity_changed", [r().extend({}, t)]),
                t.internal ? (APP.data.is_card || (this._show_overlay_delay = setTimeout((function() {
                    y.trigger("page:overlay:show")
                }
                ), 100)),
                t.handler().then(r().bind((function(e) {
                    this.routeLoadedThenTrigger(t, e.default)
                }
                ), this), (function(e) {
                    console && console.error && console.error(e),
                    APP.router.navigate(x, {
                        replace: !0,
                        trigger: !1
                    }),
                    y.trigger("page:overlay:hide")
                }
                ))) : r().isFunction(t.handler) && this.routeLoadedThenTrigger(t, t.handler),
                P = l().history.fragment
            },
            routeLoadedThenTrigger: function(e, t) {
                e.PageHandler = t,
                new Promise(r().bind(this.routeCheckCardBack, this, e)).then(r().bind(this.routeHandlerInit, this), r().noop),
                x = k()
            },
            routeHandlerInit: function(e) {
                var t = b();
                APP.data.card_page && (APP.data.card_page.destroy(),
                APP.data.card_page = !1),
                t && !e.is_card && (t.destroy(),
                APP.data.current_view = !1),
                (0,
                g.restartPageLoadHandling)();
                var n = new e.PageHandler({
                    route_args: e.args,
                    route_params: e.params || {}
                });
                e.is_card ? APP.data.card_page = n : APP.data.current_view = n
            },
            routeCheckCardBack: function(e, t, n) {
                var i, s = !1;
                clearTimeout(this._show_overlay_delay),
                y.trigger("page:overlay:hide"),
                !APP.data.is_card && APP.data.card_page && APP.data.current_view && this.paths[0] === this.paths[1] ? APP.data.card_page.cardBack(r().bind((function(n) {
                    var i, r, a;
                    r = b(),
                    a = e.PageHandler,
                    s = !(null != a && "undefined" != typeof Symbol && a[Symbol.hasInstance] ? a[Symbol.hasInstance](r) : r instanceof a),
                    n || s ? (s && (APP.data.entity_changed = !0),
                    t(e)) : ("none" !== o()("#search-suggest-drop-down-menu").css("display") && (i = ["search_input_focus"]),
                    y.triggerHandler("page:changed", i))
                }
                ), this)) : APP.data.current_view && APP.data.current_view.catalog && (i = APP.router.paths[0].split("/"))[1] === APP.data.current_view.catalog.id ? APP.data.current_view.browserNavigateHandler(i[2], e.args[1]) ? t(e) : n() : t(e)
            },
            navigate: function(e, t) {
                var n = l().history.getFragment(e || "");
                return !(t = t || {}).replace || t.trigger || APP.data.is_card || (this.paths[0] = decodeURIComponent(e.substring(1))),
                t.important && l().history.fragment === n.replace(/#.*$/, "") ? this.reload() : l().Router.prototype.navigate.apply(this, arguments)
            },
            _extractParameters: function(e, t) {
                var n = e.exec(t).slice(1);
                return r().map(n, (function(e, t) {
                    return n.length,
                    e || null
                }
                ))
            }
        });
        u().mixin(E, m.default),
        APP.router = new E,
        l().history.start({
            pushState: !0
        });
        const S = APP.router;
        var A = "../build/transpiled/core/router";
        window.define(A, (function() {
            var e = "undefined"
              , n = typeof t === e ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === e ? typeof module === e ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : t;
            return n && n.default || n
        }
        )),
        window.require([A])
    }
    ,
    497178: (e, t, n) => {
        "use strict";
        n.r(t),
        n.d(t, {
            default: () => c
        });
        var i, o, s = n(661533), r = n.n(s), a = (0,
        n(312309).getQueryParam)("beautifultimer");
        function l(e) {
            var t = e / 1e3
              , n = Math.abs(e % 1e3);
            return (t = t > 0 ? Math.floor(t) : Math.round(t)) < 10 && (t = (t < 0 ? "-" : "") + "0" + Math.abs(t)),
            n < 100 && "function" == typeof String(n).padStart && (n = String(n).padStart(3, "0")),
            t + "." + n
        }
        const c = {
            fix: function(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Date.now() - i;
                return a && null !== o && i && (r()("#mybeautifultimer").parent().append("<div>" + e + ": " + l(n) + "</div>"),
                t && t.append('<span class="animated tada" style="position:fixed;top:0;z-index:1000;background:#000;color:#fff;">' + l(n) + " " + e + "</span>")),
                this
            },
            start: function() {
                return a && (r()("#mybeautifultimer").parent().remove(),
                r()(document.body).append('\n        <div style="text-align:right;background:#000;color:#fff;position:fixed;top:0;right:0;z-index:110111010;padding:5px;">\n          <span id="mybeautifultimer"></span>\n        </div>\n      '),
                i = Date.now(),
                o = setInterval((function() {
                    document.getElementById("mybeautifultimer").innerHTML = l(Date.now() - i)
                }
                ), 1),
                this.fix("СТАРТ")),
                this
            },
            stop: function() {
                return a && null !== o && (clearInterval(o),
                r()("#mybeautifultimer").html(l(Date.now() - i)),
                o = null),
                this
            }
        };
        var u = "../build/transpiled/dev/timer";
        window.define(u, (function() {
            var e = "undefined"
              , n = typeof t === e ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === e ? typeof module === e ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : t;
            return n && n.default || n
        }
        )),
        window.require([u])
    }
    ,
    724327: (e, t, n) => {
        "use strict";
        n.r(t),
        n.d(t, {
            default: () => _
        });
        var i = n(661533)
          , o = n.n(i)
          , s = n(55188)
          , r = n.n(s)
          , a = n(460159)
          , l = n.n(a)
          , c = n(809228)
          , u = n.n(c)
          , d = n(889378)
          , h = (n(904887),
        n(175396),
        n(181743),
        n(200123),
        n(241817),
        n(245522),
        n(95871),
        n(287345),
        n(172821),
        n(183081),
        n(467404),
        n(878236),
        n(286350),
        n(717414),
        n(140670),
        n(605566),
        n(734227),
        n(319779),
        n(220030),
        n(738336),
        n(262090),
        n(872522),
        n(150267),
        n(855793),
        n(874995),
        n(115799),
        n(58345),
        n(720706),
        n(662333),
        n(553099),
        n(182061),
        n(276457),
        n(321844),
        n(291516),
        n(429741),
        n(658364),
        n(177571),
        n(648090),
        n(677866),
        n(180253),
        n(794744),
        n(191554),
        n(596080),
        n(648699),
        n(134203),
        n(570420),
        n(522323),
        n(702481),
        n(972762),
        n(382666),
        n(949918),
        n(686954),
        n(342697),
        n(661533))
          , p = !1
          , f = o()(document);
        document.addEventListener("click", (function(e) {
            e.target.closest(".button-input-loading") && e.stopPropagation()
        }
        ), !0),
        f.on("controls:textarea:autosize", "textarea", (function() {
            var e = o()(this);
            e.is(":visible") && (e.autosize({
                callback: function() {
                    e.trigger("controls:textarea:resized")
                }
            }),
            e.trigger("autosize.resize"))
        }
        )),
        f.on("custom_radio_change", '.control-radio input[type="radio"]', (function() {
            var e = o()(this)
              , t = o()(this.parentNode)
              , n = this.type
              , i = o()(this).attr("name")
              , s = !!i && o()('[name="'.concat(i, '"]'));
            s && (s.not(this).prop("checked", !1).parent().removeClass("icon-".concat(n, "-checked")),
            s.filter(this).prop("checked", !0).parent().addClass("icon-".concat(n, "-checked"))),
            t.addClass("icon-".concat(n)),
            e.trigger("controls:change").change(),
            e.trigger("controls:change:visual")
        }
        )).on("click", ".control-radio__label:not(.js-react-control)", (function() {
            var e = o()(this).find(".control-radio__helper").parent().find(":input");
            e.prop("disabled") || e.trigger("custom_radio_change", [!e.prop("checked")])
        }
        )).on("controls:disable", '.control-radio input[type="radio"]', (function(e, t) {
            this.disabled = !!r().isUndefined(t) || t,
            o()(this).closest(".control-radio__label").toggleClass("control-radio__label_disabled", this.disabled).find(".control-radio__helper").toggleClass("control-radio__helper-disabled", this.disabled)
        }
        )).on("controls:disable", ".button-input", (function(e, t) {
            t = !!r().isUndefined(t) || t,
            o()(this)[t ? "addClass" : "removeClass"]("button-input-disabled")
        }
        )).on("controls:disable", ".switcher__checkbox", (function(e, t) {
            var n = o()("label[for='".concat(o()(this).attr("id"), "']"));
            t = !!r().isUndefined(t) || t,
            o()(this).prop("disabled", t),
            o()(this)[t ? "addClass" : "removeClass"]("js-disabled"),
            n[t ? "addClass" : "removeClass"]("js-disabled")
        }
        )).on("click", ".js-note-expander", (function() {
            return o()(this).parent().hide().parent().find(".note--body--content-not-sliced").show(),
            o()(this).trigger("click:note_expander"),
            !1
        }
        )),
        f.on("click.hide_controls controls:hide controls:hide:only", (function(e, t) {
            if (r().indexOf([1, 2], e.button) >= 0)
                return !0;
            var n, i;
            if ("string" != typeof t && (t = !1),
            "controls:hide:only" !== e.type && f.trigger({
                type: "controls:hide:private",
                target: (n = e.target,
                i = h,
                (null != i && "undefined" != typeof Symbol && i[Symbol.hasInstance] ? i[Symbol.hasInstance](n) : n instanceof i) ? e.target.get(0) : e.target)
            }, [t]),
            p && (!t || "btn_menu" === t)) {
                if (p.removeClass("button-input-pressed").parent().removeClass("button-input-wrapper-pressed"),
                p.attr("data-context-menu"))
                    return;
                p = !1
            }
            e.stopPropagation()
        }
        )).on("keydown", (function(e) {
            27 === e.keyCode && f.trigger("controls:hide").trigger("escape:keydown")
        }
        )),
        f.on("button:saved", ".button-input", (function(e, t, n) {
            var i, s = o()(this);
            n = n || APP.lang.button_saved,
            s.children(".button-input__saved").length || (s.trigger("button:load:stop").trigger("button:save:enable").append('<div class="button-input__saved">'.concat(n, "</div>")).addClass("button-input-saved").children(".button-input-inner").hide(),
            i = setTimeout((function() {
                clearTimeout(i),
                s.children(".button-input__saved").remove(),
                s.removeClass("button-input-saved").children(".button-input-inner").show(),
                s.trigger("button:save:disable"),
                "function" == typeof t && t()
            }
            ), 1500))
        }
        )).on("button:enable", ".button-input", (function() {
            o()(this).removeClass("button-input-disabled")
        }
        )).on("button:disable", ".button-input", (function() {
            o()(this).addClass("button-input-disabled")
        }
        )).on("button:save:enable", ".button-input", (function() {
            o()(this).removeClass("button-input-disabled").addClass("button-input_blue")
        }
        )).on("button:save:disable", ".button-input", (function() {
            o()(this).removeClass("button-input_blue").addClass("button-input-disabled")
        }
        )).on("button:save:error button:load:error", ".button-input, .js-button-input", (function() {
            var e = o()(this);
            e.trigger("button:load:stop").addClass("animated shake"),
            r().delay((function() {
                e.removeClass("animated shake")
            }
            ), 300)
        }
        )).on("button:save:start button:load:start", ".button-input:not(.button-cancel):not(.button-input-saved)", (function(e, t) {
            var n = o()(this)
              , i = o()('<div class="button-input__spinner"><span class="button-input__spinner__icon spinner-icon"></span></div>');
            "Y" !== n.attr("data-loading") && ((n.hasClass("button-input_blue") && !n.hasClass("button-input-disabled") || "white" === t) && i.children(".spinner-icon").addClass("spinner-icon-white"),
            n.addClass("button-input-loading").attr("data-loading", "Y").append(i).children(".button-input-inner").hide())
        }
        )).on("button:load:stop button:save:stop", ".button-input:not(.button-cancel):not(.button-input-saved)", (function() {
            var e = o()(this);
            e.removeClass("button-input-loading").removeAttr("data-loading").children(".button-input__spinner").remove(),
            e.children(".button-input-inner").show()
        }
        )),
        f.on("click", "[data-context-menu]", (function(e) {
            e.stopPropagation()
        }
        )).on("click button:menu:toggle", ".button-input-with-menu", (function(e, t) {
            var n = o()(this)
              , i = n.attr("data-context-menu")
              , s = i ? o()(n.attr("data-context-menu")) : n.parent().find(".button-input__context-menu")
              , a = !!n.attr("data-context-container") && o()(n.attr("data-context-container"));
            t = t || {},
            (r().isUndefined(t.visible) ? n.hasClass("button-input-pressed") : t.visible) ? (n.removeClass("button-input-pressed").parent().removeClass("button-input-wrapper-pressed"),
            i && s.hide(),
            p = !1) : (t.no_trigger || f.trigger("keyboard:hide").trigger({
                type: "controls:hide",
                target: this
            }),
            i && (a && (a.append(s),
            n.removeAttr("data-context-container")),
            s.show()),
            n.addClass("button-input-pressed").parent().addClass("button-input-wrapper-pressed"),
            p = n);
            var l = new (u())(".js-context-menu-copy");
            l.on("success", r().bind((function(e) {
                var t = o()(e.trigger)
                  , n = t.find(".button-input__context-menu__item__text")
                  , i = n.text();
                n.hasClass("button-input__context-menu__item__text-copied") || (n.text(t.data("copied")),
                n.addClass("button-input__context-menu__item__text-copied"),
                setTimeout((function() {
                    n.text(i),
                    n.removeClass("button-input__context-menu__item__text-copied"),
                    o()(document).trigger("controls:hide"),
                    l.destroy()
                }
                ), 1e3))
            }
            ), this)),
            s.visible(!n.attr("data-part-visible")) || s.addClass("button-open-left-side"),
            e.stopPropagation()
        }
        )).on("context-menu:checkable:toggle", ".button-input__context-menu__item-checkable", (function(e) {
            var t = o()(e.currentTarget);
            t.is("[data-checkable-checked]") ? t.removeAttr("data-checkable-checked") : t.attr("data-checkable-checked", "")
        }
        )).on("click", ".button-input__context-menu__item", (function(e) {
            o()(this).hasClass("js-context-menu-copy") ? e.stopPropagation() : f.trigger({
                type: "controls:hide",
                target: this
            }, ["btn_menu"])
        }
        )),
        f.on("controls:change", "#task_edit_type", (function() {
            var e = o()(this);
            "custom" === e.val() && (e.closest(".task-types-holder").addClass("task-types-holder-custom-active").find(".task-types-holder__custom__input").focus(),
            e.val(0).trigger("controls:change"))
        }
        )).on("click", ".task-types-holder__custom__cancel", (function() {
            o()(this).closest(".task-types-holder").removeClass("task-types-holder-custom-active").find(".task-types-holder__custom__input").val("")
        }
        )),
        f.on("click", ".button-input-disabled", (function() {
            return !1
        }
        )),
        f.on(APP.transition_event, ".js-animation-remove", (function(e) {
            o()(e.target).hasClass("js-animation-remove") && this.parentNode.removeChild(this)
        }
        )).on("click", ".js-list-print", (function() {
            window.print()
        }
        )).on("click", ".js-more-widgets", (function(e) {
            var t = o()(this).attr("data-widget");
            e.preventDefault(),
            new d.default({
                class_name: "modal-list more_widget_modal",
                init: l()._preload(["/tmpl/settings/widgets/more_widget_modal.twig"], (function(e) {
                    e.trigger("modal:loaded").html(l()({
                        ref: "/tmpl/settings/widgets/more_widget_modal.twig"
                    }).render({
                        has_add_rights: APP.constant("user_rights") && APP.constant("user_rights").is_admin,
                        widget: t
                    })).trigger("modal:centrify")
                }
                ))
            })
        }
        )).on("click", ".js-list-caption-link", (function() {
            o()(this).parent().find(".js-list-caption-link").removeClass("content__top__preset__caption__list__item-active"),
            o()(this).addClass("content__top__preset__caption__list__item-active")
        }
        )).on("click", ".switcher:not(.js-disabled):not(.js-react-control)", (function() {
            o()(this).toggleClass("switcher__on switcher__off")
        }
        )).on("change", ".switcher__checkbox:not(.js-disabled):not(.js-react-control)", (function() {
            o()(this).closest(".switcher_wrapper").find("label").toggleClass("switcher__on", this.checked).toggleClass("switcher__off", !this.checked)
        }
        )).on("click", ".control-toggler__item:not(.control-toggler__item-selected)", (function() {
            var e = o()(this);
            e.closest(".control-toggler").find(".control-toggler__item-selected").removeClass("control-toggler__item-selected"),
            e.addClass("control-toggler__item-selected")
        }
        )).on("animate:callback", ".js-animate", (function(e, t) {
            Modernizr.csstransitions ? (o()(this).offset(),
            o()(this).data("js-animate-callback", t).one(APP.transition_event, (function(e) {
                var t = o()(this).data("js-animate-callback");
                o()(this).data("js-animate-callback", !1),
                this === e.target && "function" == typeof t && t.call(this),
                e.stopPropagation()
            }
            ))) : "function" == typeof t && t.call(this)
        }
        ));
        const _ = o();
        var m = "../build/transpiled/interface/controls";
        window.define(m, (function() {
            var e = "undefined"
              , n = typeof t === e ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === e ? typeof module === e ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : t;
            return n && n.default || n
        }
        )),
        window.require([m])
    }
    ,
    191554: (e, t, n) => {
        "use strict";
        n.r(t),
        n.d(t, {
            default: () => o
        });
        var i = n(340958);
        const o = i.default.extend({
            controlClassName: "js-control-autosized_input",
            initialize: function() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                    t[n] = arguments[n];
                i.default.prototype.initialize.apply(this, t),
                this.$el.autosizeInput({
                    comfortZone: this.$el.data("comfort-zone")
                })
            },
            destroy: function() {
                this.$el.trigger("autosize.destroy")
            }
        });
        var s = "../build/transpiled/interface/controls/autosized_input";
        window.define(s, (function() {
            var e = "undefined"
              , n = typeof t === e ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === e ? typeof module === e ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : t;
            return n && n.default || n
        }
        )),
        window.require([s])
    }
    ,
    150267: (e, t, n) => {
        "use strict";
        n.r(t),
        n.d(t, {
            default: () => p
        });
        var i = n(55188)
          , o = n.n(i)
          , s = n(577486)
          , r = n(880774);
        function a(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(e, i.key, i)
            }
        }
        function l(e, t, n) {
            return l = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(e, t, n) {
                var i = function(e, t) {
                    for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = c(e)); )
                        ;
                    return e
                }(e, t);
                if (i) {
                    var o = Object.getOwnPropertyDescriptor(i, t);
                    return o.get ? o.get.call(n || e) : o.value
                }
            }
            ,
            l(e, t, n || e)
        }
        function c(e) {
            return c = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            ,
            c(e)
        }
        function u(e, t) {
            return u = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                e
            }
            ,
            u(e, t)
        }
        function d(e) {
            var t = function() {
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
                var n, i = c(e);
                if (t) {
                    var o = c(this).constructor;
                    n = Reflect.construct(i, arguments, o)
                } else
                    n = i.apply(this, arguments);
                return function(e, t) {
                    return !t || "object" != ((n = t) && "undefined" != typeof Symbol && n.constructor === Symbol ? "symbol" : typeof n) && "function" != typeof t ? function(e) {
                        if (void 0 === e)
                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return e
                    }(e) : t;
                    var n
                }(this, n)
            }
        }
        var h = function(e) {
            !function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && u(e, t)
            }(p, e);
            var t, n, i, h = d(p);
            function p() {
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, p),
                h.apply(this, arguments)
            }
            return t = p,
            n = [{
                key: "_classes",
                value: function() {
                    return {
                        input: "js-control-pretty-price",
                        raw: "js-control-raw-price",
                        autosized: "control-price_autosized"
                    }
                }
            }, {
                key: "events",
                value: function() {
                    return {
                        "keydown .js-control-pretty-price": "_fixCursorPosOnKeydown",
                        "input .js-control-pretty-price": "_formatOnInput",
                        "controls:change .js-control-raw-price": "_onRawChangedOutside"
                    }
                }
            }, {
                key: "initialize",
                value: function() {
                    var e;
                    l(c(p.prototype), "initialize", this).call(this, arguments),
                    this._ignore_next_cursor_setting = !0,
                    this._currency = this.$el.attr("data-currency"),
                    this._allow_zero = !o().isUndefined(this._elem("input").attr("data-allow-zero")),
                    e = this._getSymbolOffset(),
                    "y" === this._elem("input").data("autosized") && this._elem("input").autosizeInput(e.has_space ? {} : {
                        comfortZone: 0
                    }).trigger("autosize:important"),
                    this._addClass("autosized"),
                    e.symbol_first && e.has_space && this._elem("input").css("margin-left", 5)
                }
            }, {
                key: "destroy",
                value: function() {
                    this._elem("input").off(),
                    l(c(p.prototype), "destroy", this).apply(this, arguments)
                }
            }, {
                key: "_onRawChangedOutside",
                value: function() {
                    var e = this._elem("raw").val();
                    this._elem("input").val(e),
                    this._formatOnInput({
                        allow_fraction: e % 1 != 0,
                        allow_negative: !0
                    })
                }
            }, {
                key: "_fixCursorPosOnKeydown",
                value: function(e) {
                    var t = this._elem("input").get(0)
                      , n = t.value || "";
                    this._end_pos = n.length - t.selectionEnd,
                    this._onKeyDown(e)
                }
            }, {
                key: "_onKeyDown",
                value: function(e) {
                    var t = this._elem("input").get(0)
                      , n = t.value || ""
                      , i = t.selectionStart;
                    if (this._ignore_next_cursor_setting = !1,
                    " " === n[i - 1] && 8 === e.keyCode)
                        return t.value = n.slice(0, i - 2) + n.slice(i - 1),
                        this._elem("input").trigger("input"),
                        !1
                }
            }, {
                key: "_formatOnInput",
                value: function(e) {
                    var t = o().propertyOf(e)
                      , n = this._elem("input").val()
                      , i = new s.UnsafeRegExp("[^0-9" + (t("allow_fraction") ? "." : "") + (t("allow_negative") ? "-" : "") + "]+","g")
                      , a = n.replace(i, "")
                      , l = (0,
                    r.currency)(a, !0, t("allow_fraction") ? 2 : 0, this._currency).trim();
                    a.length && (this._allow_zero || 0 !== parseInt(l)) || (l = ""),
                    this._elem("raw").val(a).trigger("change"),
                    this._elem("input").val(l).trigger("autosize:important"),
                    this._setCursorPos()
                }
            }, {
                key: "_getSymbolOffset",
                value: function() {
                    var e = o().propertyOf(AMOCRM.constant("currencies_used"))([this._currency, "currency_pattern"]) || AMOCRM.system.locale.currency_pattern;
                    return {
                        has_space: e.indexOf(" ") > -1,
                        symbol_first: 0 === e.indexOf("%s")
                    }
                }
            }],
            i = [{
                key: "controlClassName",
                get: function() {
                    return "control-price"
                }
            }],
            n && a(t.prototype, n),
            i && a(t, i),
            p
        }(n(334710).default);
        h.extend(h);
        const p = h;
        var f = "../build/transpiled/interface/controls/budget/budget";
        window.define(f, (function() {
            var e = "undefined"
              , n = typeof t === e ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === e ? typeof module === e ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : t;
            return n && n.default || n
        }
        )),
        window.require([f])
    }
    ,
    570420: (e, t, n) => {
        "use strict";
        n.r(t),
        n.d(t, {
            default: () => y
        });
        var i = n(55188)
          , o = n.n(i)
          , s = n(974839)
          , r = n.n(s)
          , a = n(880774)
          , l = n(886965)
          , c = n(763176)
          , u = n(777464)
          , d = n(340958)
          , h = n(661533);
        function p(e, t, n, i, o, s, r) {
            try {
                var a = e[s](r)
                  , l = a.value
            } catch (e) {
                return void n(e)
            }
            a.done ? t(l) : Promise.resolve(l).then(i, o)
        }
        function f(e) {
            return function() {
                var t = this
                  , n = arguments;
                return new Promise((function(i, o) {
                    var s = e.apply(t, n);
                    function r(e) {
                        p(s, i, o, r, a, "next", e)
                    }
                    function a(e) {
                        p(s, i, o, r, a, "throw", e)
                    }
                    r(void 0)
                }
                ))
            }
        }
        function _(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        function m(e, t) {
            var n, i, o, s, r = {
                label: 0,
                sent: function() {
                    if (1 & o[0])
                        throw o[1];
                    return o[1]
                },
                trys: [],
                ops: []
            };
            return s = {
                next: a(0),
                throw: a(1),
                return: a(2)
            },
            "function" == typeof Symbol && (s[Symbol.iterator] = function() {
                return this
            }
            ),
            s;
            function a(s) {
                return function(a) {
                    return function(s) {
                        if (n)
                            throw new TypeError("Generator is already executing.");
                        for (; r; )
                            try {
                                if (n = 1,
                                i && (o = 2 & s[0] ? i.return : s[0] ? i.throw || ((o = i.return) && o.call(i),
                                0) : i.next) && !(o = o.call(i, s[1])).done)
                                    return o;
                                switch (i = 0,
                                o && (s = [2 & s[0], o.value]),
                                s[0]) {
                                case 0:
                                case 1:
                                    o = s;
                                    break;
                                case 4:
                                    return r.label++,
                                    {
                                        value: s[1],
                                        done: !1
                                    };
                                case 5:
                                    r.label++,
                                    i = s[1],
                                    s = [0];
                                    continue;
                                case 7:
                                    s = r.ops.pop(),
                                    r.trys.pop();
                                    continue;
                                default:
                                    if (!((o = (o = r.trys).length > 0 && o[o.length - 1]) || 6 !== s[0] && 2 !== s[0])) {
                                        r = 0;
                                        continue
                                    }
                                    if (3 === s[0] && (!o || s[1] > o[0] && s[1] < o[3])) {
                                        r.label = s[1];
                                        break
                                    }
                                    if (6 === s[0] && r.label < o[1]) {
                                        r.label = o[1],
                                        o = s;
                                        break
                                    }
                                    if (o && r.label < o[2]) {
                                        r.label = o[2],
                                        r.ops.push(s);
                                        break
                                    }
                                    o[2] && r.ops.pop(),
                                    r.trys.pop();
                                    continue
                                }
                                s = t.call(e, r)
                            } catch (e) {
                                s = [6, e],
                                i = 0
                            } finally {
                                n = o = 0
                            }
                        if (5 & s[0])
                            throw s[1];
                        return {
                            value: s[0] ? s[1] : void 0,
                            done: !0
                        }
                    }([s, a])
                }
            }
        }
        var g = "control-chained-list__suggest"
          , v = (0,
        c.wrapCacheCollection)(r().Collection.extend({
            itemRel: "elements",
            url: function(e) {
                return "/ajax/v4/catalogs/".concat(e, "/elements")
            },
            getCacheId: function(e) {
                var t = e.url
                  , n = e.data;
                return JSON.stringify({
                    url: t,
                    data: n
                })
            }
        }));
        const y = d.default.extend({
            controlClassName: "js-control-chained-list",
            _classes: function() {
                return {
                    suggest: g,
                    suggest_empty: "".concat(g, "_empty"),
                    suggest_input: "control--suggest--input",
                    suggest_item: "control--suggest--list--item",
                    suggest_list: "js-control--suggest--list",
                    chain_value: "js-control-changed-list-chain-value"
                }
            },
            _selectors: function() {
                return {
                    suggest_by_id: ".".concat(g, '[data-catalog-id="%s"]'),
                    chain_value_by_id: '.js-control-changed-list-chain-value[data-catalog-id="%s"]'
                }
            },
            events: function() {
                var e;
                return _(e = {}, "controls:change ".concat(this._selector("chain_value")), "onInputChangeOutside"),
                _(e, "focus ".concat(this._selector("suggest_input")), "onSuggestFocused"),
                _(e, "input ".concat(this._selector("suggest_input")), "onSuggestInputLoadDebounced"),
                _(e, "change ".concat(this._selector("suggest_input")), "onSuggestBlur"),
                _(e, "click ".concat(this._selector("suggest_item")), "onSuggestItemClick"),
                _(e, "suggest:loaded ".concat(this._selector("suggest_input")), "onSuggestLoaded"),
                _(e, "suggest:changed ".concat(this._selector("suggest_input")), "onSuggestChanged"),
                _(e, "chained-list:get-element-name ".concat(this._selector("chain_value")), "proxyElementNameToDataAttrs"),
                e
            },
            document_events: function() {
                return {
                    "page:changed": "onPageChangedClearCollectionCache"
                }
            },
            initialize: function() {
                var e = this;
                d.default.prototype.initialize.apply(this, arguments);
                var t = this.$("script");
                this._suggests_inited = {},
                this._cache = {},
                this._elements_collection = new v,
                this._settings = JSON.parse(t.html()),
                this.onSuggestInputLoadDebounced = o().debounce(this.onSuggestInputLoad, 700),
                this._values = o().reduce(this._settings, (function(t, n) {
                    var i = e._elem("suggest_by_id", n.catalog_id)
                      , o = e._elem("chain_value_by_id", n.catalog_id)
                      , s = parseInt(o.val());
                    return s && (t[n.catalog_id] = {
                        id: s,
                        text: i.find(e._selector("suggest_input")).val()
                    }),
                    t
                }
                ), {}),
                h(document.activeElement).hasClass(this._class("suggest_input")) && h.contains(this.el, document.activeElement) && this.onSuggestFocused({
                    currentTarget: document.activeElement
                })
            },
            onPageChangedClearCollectionCache: function() {
                this._elements_collection.clearCache({
                    namespace_full: !0
                })
            },
            onInputChangeOutside: function(e) {
                var t = h(e.currentTarget)
                  , n = parseInt(t.attr("data-catalog-id"))
                  , i = parseInt(t.val());
                this._values[n] = {},
                i ? this.syncInputValueText(n, i) : (this._elem("suggest_by_id", n).find(this._selector("suggest_input")).val(""),
                this.toggleSuggest(n, !0),
                this.setChainValue(n, ""))
            },
            onSuggestFocused: function(e) {
                var t = h(e.currentTarget)
                  , n = parseInt(t.attr("data-catalog-id"));
                if (!this._suggests_inited[n]) {
                    var i = o().findWhere(this._settings, {
                        catalog_id: n
                    });
                    this.loadSuggestData({
                        catalog_id: n,
                        field_id: i.field_id,
                        parent_element_id: parseInt(t.closest(this._selector("suggest")).attr("data-parent-element-id"))
                    }),
                    this._suggests_inited[n] = !0
                }
            },
            onSuggestInputLoad: function(e) {
                var t = this
                  , n = h(e.currentTarget)
                  , i = parseInt(n.attr("data-catalog-id"))
                  , s = n.val().trim()
                  , r = parseInt(n.parent().attr("data-parent-element-id"))
                  , a = parseInt(n.parent().attr("data-parent-catalog-id"))
                  , l = {}
                  , c = o().findWhere(this._settings, {
                    parent_catalog_id: a
                });
                if (r && c && (l.custom_fields = _({}, "".concat(c.field_id), r)),
                s.length > 2) {
                    var u = this.makeCatalogElementsRequest({
                        catalog_id: i,
                        term: s,
                        filter: l
                    });
                    u && (n.trigger("suggest:loader"),
                    u.then((function(e) {
                        t.resetItems(e),
                        n.trigger("focus")
                    }
                    ), (function(e) {
                        return t.resetItems(e)
                    }
                    )))
                }
            },
            onSuggestLoaded: function(e, t) {
                h(e.currentTarget).closest(this._selector("suggest")).find(this._selector("suggest_list")).trigger("suggest:reset", [o().map(t.result, (function(e) {
                    return {
                        id: e.id,
                        text: e.name
                    }
                }
                ))])
            },
            onSuggestItemClick: function(e) {
                this._$document.trigger({
                    type: "controls:hide",
                    target: this.el
                }),
                e.stopPropagation(),
                h(e.currentTarget).trigger("suggest:item:click")
            },
            onSuggestChanged: function(e, t) {
                var n = this
                  , i = h(e.currentTarget)
                  , s = parseInt(t.data("value-id"))
                  , r = parseInt(i.attr("data-catalog-id"));
                s > 0 && r > 0 && (this.setChainValue(r, s),
                setTimeout((function() {
                    var e = o().findWhere(n._settings, {
                        parent_catalog_id: r
                    });
                    e && i.is(":focus") && !AMOCRM.is_touch_device && n._elem("suggest_by_id", e.catalog_id).find(n._selector("suggest_input")).focus()
                }
                )))
            },
            onSuggestBlur: function(e) {
                var t = h(e.currentTarget)
                  , n = parseInt(t.attr("data-catalog-id"));
                t.val() !== o().propertyOf(this._values)([n, "text"]) && (t.val(""),
                this.toggleSuggest(n, !0),
                this.setChainValue(n, ""))
            },
            makeCatalogElementsRequest: function(e) {
                var t = this
                  , n = e.catalog_id
                  , i = e.term
                  , s = e.filter
                  , r = h.Deferred();
                return this._cache["".concat(n).concat(i)] ? r.resolve(this._cache["".concat(n).concat(i)]) : u.default.searchElements(n, i, s).then((function(e) {
                    var s = o().map(e, (function(e) {
                        var t = (0,
                        a.catalogElementName)(e.name, e.id, e.catalog_id);
                        return {
                            id: e.id,
                            element_type: AMOCRM.element_types.catalog_elements,
                            catalog_id: n,
                            name: t
                        }
                    }
                    ));
                    t._cache["".concat(n).concat(i)] = s,
                    r.resolve(s)
                }
                ), r.reject),
                r.promise()
            },
            resetItems: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []
                  , t = this._findElem("suggest_list")
                  , n = o().map(e, (function(e) {
                    return {
                        id: e.id,
                        additional_data: ['data-name="'.concat(o().escape(e.name), '"'), 'data-entity-id="'.concat(e.id, '"'), 'data-entity-type="'.concat((0,
                        l.convertElementType)(e.element_type, "string"), '"'), 'data-catalog-id="'.concat(e.catalog_id, '"')].join(" "),
                        text: e.name
                    }
                }
                ));
                t.trigger("suggest:reset", [n, ""])
            },
            toggleSuggest: function(e, t) {
                var n = this._elem("suggest_by_id", e);
                n.toggleClass("hidden", !t),
                t && (n.find(this._selector("suggest_input")).val() ? n.removeClass(this._class("suggest_empty")) : (this._elem("suggest").removeClass(this._class("suggest_empty")),
                n.addClass(this._class("suggest_empty"))))
            },
            setChainValue: function(e, t) {
                var n = o().findWhere(this._settings, {
                    parent_catalog_id: e
                });
                if (this._elem("chain_value_by_id", e).val(t).trigger("change"),
                this._values[e] = {
                    id: t,
                    text: this._elem("suggest_by_id", e).find(this._selector("suggest_input")).val()
                },
                n) {
                    var i = this._elem("suggest_by_id", n.catalog_id)
                      , s = i.find(this._selector("suggest_input"));
                    t && !s.val() ? this.toggleSuggest(n.catalog_id, !0) : t && i.attr("data-parent-element-id") === String(t) || (s.val(""),
                    this.toggleSuggest(n.catalog_id, String(t || "").length > 0),
                    this.setChainValue(n.catalog_id, "")),
                    t && this.loadSuggestData({
                        catalog_id: n.catalog_id,
                        field_id: n.field_id,
                        parent_element_id: t
                    })
                }
            },
            loadSuggestData: function(e) {
                var t = e.catalog_id
                  , n = e.field_id
                  , i = e.parent_element_id;
                return f((function() {
                    var e, o, s, r, l;
                    return m(this, (function(c) {
                        switch (c.label) {
                        case 0:
                            return e = this._elem("suggest_by_id", t),
                            o = e.find(this._selector("suggest_input")),
                            (s = e.find(this._selector("suggest_list"))).length ? (o.attr("placeholder", o.attr("data-placeholder")),
                            e.attr("data-parent-element-id", i),
                            s.trigger("suggest:reset", [[]]),
                            e.find(this._selector("suggest_input")).trigger("suggest:loader", [!0]),
                            r = {},
                            n && (r.custom_fields = _({}, "".concat(n), parseInt(i))),
                            [4, this._elements_collection.fetch({
                                url: this._elements_collection.url(t),
                                data: {
                                    limit: 500,
                                    filter: r
                                }
                            })]) : [2];
                        case 1:
                            return c.sent(),
                            l = [],
                            this._elements_collection.length ? l = this._elements_collection.map((function(e) {
                                return {
                                    id: e.get("id"),
                                    text: e.get("name")
                                }
                            }
                            )) : o.attr("placeholder", "".concat(o.attr("data-placeholder"), ": ").concat((0,
                            a.i18n)("All").toLowerCase())),
                            s.trigger("suggest:reset", [l, '<li data-value-id="<%= data.id %>" class="control--suggest--list--item <%= data.custom_class %>" <%= data.additional_data %>><span class="control--suggest--list--item-inner" title="<%= _.escape(data.title) %>"><%= data.text %></span></li>']),
                            o.trigger("suggest:loader", [!1]),
                            [2]
                        }
                    }
                    ))
                }
                )).apply(this)
            },
            syncInputValueText: function(e, t) {
                return f((function() {
                    var n, i;
                    return m(this, (function(s) {
                        switch (s.label) {
                        case 0:
                            return [4, u.default.getElementsByIds(e, [t])];
                        case 1:
                            return (n = s.sent()).length && (i = o().findWhere(this._settings, {
                                parent_catalog_id: e
                            }),
                            this._elem("suggest_by_id", e).find(this._selector("suggest_input")).val(o().propertyOf(n)([0, "name"])),
                            this.toggleSuggest(e, !0),
                            i && (this.toggleSuggest(i.catalog_id, !0),
                            this._elem("suggest_by_id", i.catalog_id).attr("data-parent-element-id", o().propertyOf(n)([0, "id"])))),
                            [2]
                        }
                    }
                    ))
                }
                )).apply(this)
            },
            proxyElementNameToDataAttrs: function(e) {
                var t = h(e.currentTarget)
                  , n = t.next(this._selector("suggest"));
                t.data("element-name", n.find(this._selector("suggest_input")).val())
            }
        });
        var b = "../build/transpiled/interface/controls/chained_list";
        window.define(b, (function() {
            var e = "undefined"
              , n = typeof t === e ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === e ? typeof module === e ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : t;
            return n && n.default || n
        }
        )),
        window.require([b])
    }
    ,
    553099: (e, t, n) => {
        "use strict";
        n.r(t),
        n.d(t, {
            default: () => l
        });
        var i = n(55188)
          , o = n.n(i)
          , s = n(460159)
          , r = n.n(s)
          , a = n(58345);
        const l = a.default.extend({
            controlClassName: "js-control-checkboxes_dropdown-huge",
            _selectors: function() {
                return o().extend({
                    inner: ".checkboxes_dropdown__list__wrapper__inner"
                }, a.default.prototype._selectors())
            },
            initialize: function() {
                this.is_rendered_on_client = !1,
                this.$fake_script = this.$el.find("script");
                try {
                    this.checkboxes_dropdown_data = JSON.parse(this.$fake_script.html())
                } catch (e) {}
                a.default.prototype.initialize.apply(this, arguments)
            },
            _updateMasterCheckboxesOnInit: function() {
                if (this.is_rendered_on_client)
                    a.default.prototype._updateMasterMinus.apply(this);
                else {
                    var e = this.checkboxes_dropdown_data.items
                      , t = o().filter(e, (function(e) {
                        return e.is_checked
                    }
                    ));
                    a.default.prototype._updateMasterMinus.apply(this, [t, e])
                }
            },
            _getCheckboxesChecked: function() {
                if (!this.is_rendered_on_client) {
                    var e = o().filter(this.checkboxes_dropdown_data.items, (function(e) {
                        return e.is_checked
                    }
                    ));
                    return o().map(e, (function(e) {
                        return o().escape(e.option)
                    }
                    ))
                }
                return a.default.prototype._getCheckboxesChecked.apply(this, arguments)
            },
            setTitle: function() {
                if (!this.is_rendered_on_client) {
                    var e = this.checkboxes_dropdown_data.items
                      , t = o().filter(e, (function(e) {
                        return e.is_checked
                    }
                    ));
                    return a.default.prototype._updateMasterMinus.apply(this, [t, e]),
                    void a.default.prototype._setTitle.apply(this, [t, e])
                }
                a.default.prototype.setTitle.apply(this, arguments)
            },
            onClickTitle: function() {
                this.is_rendered_on_client || (this.$el.find(this._selector("inner")).replaceWith(r()({
                    ref: "/tmpl/controls/checkboxes_dropdown/inner.twig"
                }).render(this.checkboxes_dropdown_data)),
                this._dropElemCache("checkboxes_list"),
                this._dropElemCache("master_checkbox"),
                this.$fake_script.remove(),
                this.is_rendered_on_client = !0),
                a.default.prototype.onClickTitle.apply(this, arguments)
            },
            getCheckedItemsForFormModel: function() {
                return o().reduce(this.checkboxes_dropdown_data.items, (function(e, t) {
                    return t.is_checked && (e[t.name] = String(t.id)),
                    e
                }
                ), {})
            }
        });
        var c = "../build/transpiled/interface/controls/checkboxes_dropdown/checkboxes_dropdown_huge";
        window.define(c, (function() {
            var e = "undefined"
              , n = typeof t === e ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === e ? typeof module === e ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : t;
            return n && n.default || n
        }
        )),
        window.require([c])
    }
    ,
    662333: (e, t, n) => {
        "use strict";
        n.r(t),
        n.d(t, {
            default: () => s
        });
        var i = n(880774)
          , o = n(58345);
        n(368439);
        const s = o.default.extend({
            controlClassName: "js-control-checkboxes_dropdown_values",
            _setTitle: function(e, t) {
                var n = this._elem("title").attr("data-title-empty")
                  , o = this._elem("title").attr("data-numeral");
                e.length && e.length !== t.length ? this._updateTitle("".concat(e.length, " ").concat((0,
                i.numeralWord)(e.length, this._elem("title").attr("data-numeral")))) : !e.length && n ? this._updateTitle(n) : this._updateTitle("".concat((0,
                i.i18n)("all"), " ").concat((0,
                i.numeralWord)("all", o) || ""))
            },
            _updateTitle: function(e) {
                var t = this._elem("title").attr("data-title-before") || ""
                  , n = e ? 'data-title-before="'.concat(t, '"') : "";
                this._elem("title").html('<div class="checkboxes_dropdown__title-item" '.concat(n, ">").concat(e, "</div>"))
            }
        });
        var r = "../build/transpiled/interface/controls/checkboxes_dropdown/values_title";
        window.define(r, (function() {
            var e = "undefined"
              , n = typeof t === e ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === e ? typeof module === e ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : t;
            return n && n.default || n
        }
        )),
        window.require([r])
    }
    ,
    276457: (e, t, n) => {
        "use strict";
        n.r(t),
        n.d(t, {
            default: () => d
        });
        var i = n(55188)
          , o = n.n(i)
          , s = n(460159)
          , r = n.n(s)
          , a = n(880774)
          , l = n(77356)
          , c = n(340958)
          , u = n(661533);
        const d = c.default.extend({
            controlClassName: "js-control-checkboxes-search",
            events: {
                "click :not(.js-filter-field-clear)": "open",
                "change input:checkbox": "updateMainInput"
            },
            template_input: "/tmpl/controls/checkboxes_search/input.twig",
            is_first_load: !0,
            _selectors: function() {
                return {
                    list: ".checkboxes-search__opening-list",
                    cb_inputs: ".checkboxes-search__opening-list input:checkbox",
                    cb_ch_inputs: ".checkboxes-search__opening-list input:checked",
                    title_wrapper: ".checkboxes-search__title-wrapper"
                }
            },
            _getOpenWindowComponent: function() {
                return l.default
            },
            initialize: function() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                    t[n] = arguments[n];
                c.default.prototype.initialize.apply(this, t),
                this.name = this.$el.data("name"),
                this.title = this.$el.attr("title"),
                this.$list = this._findElem("list"),
                this.open_window = this._addComponent(this._getOpenWindowComponent(), {
                    el: this.$list,
                    name: this.name,
                    parrentClose: o().bind(this._toggleBodyOverlay, this, !1),
                    callbackHide: o().bind(this.updateMainInput, this)
                })
            },
            destroy: function() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                    t[n] = arguments[n];
                return this.$list.off(),
                this._destroyComponent(this.open_window),
                c.default.prototype.destroy.apply(this, t)
            },
            updateMainInput: function() {
                this._updateMainInput || (this._updateMainInput = o().throttle(o().bind((function() {
                    var e = this._findElem("cb_inputs")
                      , t = this._findElem("cb_ch_inputs")
                      , n = t.length
                      , i = [];
                    n > 0 && (!this._isEmptyEqualsFilled() || n !== e.length) && o().find(t, (function(e, t) {
                        return 4 === t ? i.push((0,
                        a.i18n)("N more").replace("%s", n - 4)) : i.push(u(e).data("value")),
                        4 === t
                    }
                    )),
                    this.renderInput({
                        items: i
                    })
                }
                ), this), 400)),
                o().isFunction(this._updateMainInput) && this._updateMainInput()
            },
            renderInput: function(e) {
                e = o().extend({
                    items: [],
                    title: this.title
                }, e || {}),
                r()._preload([this.template_input])().then(o().bind((function() {
                    this._findElem("title_wrapper").replaceWith(r()({
                        ref: this.template_input
                    }).render(e))
                }
                ), this))
            },
            open: function(e) {
                var t, n;
                e.stopPropagation(),
                this._$document.trigger({
                    type: "controls:hide",
                    target: e.target
                }),
                this.$list.removeClass("hidden").find("input:checkbox"),
                this._isEmptyEqualsFilled() && 0 === this._findElem("cb_ch_inputs").length && this._findElem("cb_inputs").prop("checked", this._isCheckedElement()),
                this._toggleBodyOverlay(this.$list, o().bind(this.open_window.hide, this.open_window));
                var i = this.$el.offset()
                  , s = this._getPositionOffset();
                this.$list.css({
                    width: this.$el.width(),
                    left: i.left - s.left,
                    top: i.top - s.top
                }),
                this.$list.data("view-upper") && (t = window.innerHeight + u(document).scrollTop()) < (n = this.$list.offset().top + this.$list.innerHeight()) && this.$list.css("top", i.top - s.top + -1 * (n - t + 20))
            },
            _isEmptyEqualsFilled: function() {
                return !0
            },
            _isCheckedElement: function() {
                return !0
            },
            _getPositionOffset: function() {
                return {
                    top: 36,
                    left: 16
                }
            }
        });
        var h = "../build/transpiled/interface/controls/checkboxes_search/index";
        window.define(h, (function() {
            var e = "undefined"
              , n = typeof t === e ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === e ? typeof module === e ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : t;
            return n && n.default || n
        }
        )),
        window.require([h])
    }
    ,
    182061: (e, t, n) => {
        "use strict";
        n.r(t),
        n.d(t, {
            default: () => s
        });
        var i = n(340958)
          , o = n(661533);
        const s = i.default.extend({
            controlClassName: "js-control-checkboxes_string",
            _classes: function() {
                return {
                    checked: "checkboxes_string__item_checked",
                    choose_border: "checkboxes_string__choose_border"
                }
            },
            _selectors: function() {
                return {
                    item_container: ".checkboxes_string__item_container",
                    choose: ".checkboxes_string__choose",
                    choose_border: ".checkboxes_string__choose_border"
                }
            },
            events: {
                "click .checkboxes_string__item_container": "toggleCheckbox"
            },
            initialize: function() {
                i.default.prototype.initialize.apply(this, arguments),
                this.render()
            },
            toggleCheckbox: function(e) {
                var t = o(e.currentTarget)
                  , n = t.closest(this._selector("choose"));
                e.target.checked ? (t.removeClass(this._class("checked")),
                n.addClass(this._class("choose_border"))) : (t.addClass(this._class("checked")),
                n.removeClass(this._class("choose_border")))
            }
        });
        var r = "../build/transpiled/interface/controls/checkboxes_string";
        window.define(r, (function() {
            var e = "undefined"
              , n = typeof t === e ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === e ? typeof module === e ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : t;
            return n && n.default || n
        }
        )),
        window.require([r])
    }
    ,
    904887: (e, t, n) => {
        "use strict";
        n.r(t);
        var i = n(661533)
          , o = n.n(i)
          , s = n(55188)
          , r = n.n(s)
          , a = n(575049)
          , l = n.n(a)
          , c = n(312309)
          , u = n(497178)
          , d = n(661533)
          , h = document.documentElement
          , p = /^(https?:\/\/)?([0-9a-z\-.]{1,})(\.amocrm\.(ru|com)|\.amocrm2\.saas).*/i
          , f = /^(https?:\/\/?[0-9a-z\-.]{1,}\.amocrm\.(ru|com)|\.amocrm2\.saas)?\/\w+\/(detail)\/.*/i;
        APP.controls = {},
        APP.is_touch_device = l().tablet() && !l().windowsTablet() || l().mobile(),
        d.fn.reverse = [].reverse,
        d.fn.prepareTransition = function(e) {
            var t = o()(this);
            return r().isFunction(e) && t.length ? setTimeout((function() {
                e.call(t[0])
            }
            ), 0) : d.contains(h, this) && t.offset(),
            t
        }
        ,
        o()(document).on("page:back", (function() {
            APP.router.back()
        }
        )).on("click", ".js-card-back-button, .js-back-button", (function(e) {
            e.preventDefault(),
            e.stopPropagation(),
            APP.router.back()
        }
        )).on("click link:navigate", ".js-navigate-link", (function(e) {
            var t = o()(this).attr("href").toString().split("?");
            if (e.preventDefault(),
            e.stopPropagation(),
            u.default.start(),
            e.metaKey || e.ctrlKey) {
                var n = t[1] ? "?" + t[1] : ""
                  , i = t[0].match(f);
                i && "detail" === i[3] && (n = (0,
                c.setQueryParam)({
                    compact: "yes"
                }, {
                    only_query_string: !0,
                    query_string: t[1] || ""
                }) || "");
                var s = window.open();
                s.opener = null,
                s.location = t[0] + n
            } else
                APP.router && APP.router.navigate(t.join("?"), {
                    trigger: !0
                })
        }
        )).on("click", 'a[target="_blank"]:not(.js-navigate-link)', (function() {
            var e = o()(this).attr("href");
            if ("/" !== e[0] && !p.test(e)) {
                var t = window.open();
                return t.opener = null,
                t.location = e,
                !1
            }
        }
        )),
        o()((function() {
            o()("html").addClass("devicePixelRatio-" + window.devicePixelRatio).toggleClass("touch", APP.is_touch_device).toggleClass("no-touch", !APP.is_touch_device)
        }
        ));
        var _ = "../build/transpiled/interface/controls/common";
        window.define(_, (function() {
            var e = "undefined"
              , n = typeof t === e ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === e ? typeof module === e ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : t;
            return n && n.default || n
        }
        )),
        window.require([_])
    }
    ,
    293162: (e, t, n) => {
        "use strict";
        n.r(t),
        n.d(t, {
            default: () => i
        });
        const i = {
            "United States": "US",
            USA: "US",
            US: "US",
            Afghanistan: "AF",
            "Aland Islands": "AX",
            Albania: "AL",
            Algeria: "DZ",
            "American Samoa": "AS",
            Andorra: "AD",
            Angola: "AO",
            Anguilla: "AI",
            Antarctica: "AQ",
            "Antigua and Barbuda": "AG",
            Argentina: "AR",
            Armenia: "AM",
            Aruba: "AW",
            Australia: "AU",
            Austria: "AT",
            Azerbaijan: "AZ",
            Bahamas: "BS",
            Bahrain: "BH",
            Bangladesh: "BD",
            Barbados: "BB",
            Belarus: "BY",
            Belgium: "BE",
            Belize: "BZ",
            Benin: "BJ",
            Bermuda: "BM",
            Bhutan: "BT",
            Bolivia: "BO",
            "Bosnia and Herzegovina": "BA",
            Botswana: "BW",
            "Bouvet Island": "BV",
            Brazil: "BR",
            "British Antarctic Territory": "BQ",
            "British Indian Ocean Territory": "IO",
            "Brunei Darussalam": "BN",
            Bulgaria: "BG",
            "Burkina Faso": "BF",
            Burundi: "BI",
            Cambodia: "KH",
            Cameroon: "CM",
            Canada: "CA",
            "Canton and Enderbury Islands": "CT",
            "Cape Verde": "CV",
            "Cayman Islands": "KY",
            "Central African Republic": "CF",
            Chad: "TD",
            Chile: "CL",
            China: "CN",
            "Christmas Island": "CX",
            "Cocos [Keeling] Islands": "CC",
            Colombia: "CO",
            Comoros: "KM",
            Congo: "CG",
            "Congo, the Democratic Republic of the": "CD",
            "Cook Islands": "CK",
            "Costa Rica": "CR",
            Croatia: "HR",
            Cuba: "CU",
            Curacao: "CW",
            Cyprus: "CY",
            "Czech Republic": "CZ",
            "Cote d`Ivoire": "CI",
            Denmark: "DK",
            Djibouti: "DJ",
            Dominica: "DM",
            "Dominican Republic": "DO",
            "Dronning Maud Land": "NQ",
            "East Germany": "DD",
            Ecuador: "EC",
            Egypt: "EG",
            "El Salvador": "SV",
            "Equatorial Guinea": "GQ",
            Eritrea: "ER",
            Estonia: "EE",
            Ethiopia: "ET",
            "Falkland Islands (Malvinas)": "FK",
            "Faroe Islands": "FO",
            Fiji: "FJ",
            Finland: "FI",
            France: "FR",
            "French Guiana": "GF",
            "French Polynesia": "PF",
            "French Southern Territories": "TF",
            "French Southern and Antarctic Territories": "FQ",
            Gabon: "GA",
            Gambia: "GM",
            Georgia: "GE",
            Germany: "DE",
            Ghana: "GH",
            Gibraltar: "GI",
            Greece: "GR",
            Greenland: "GL",
            Grenada: "GD",
            Guadeloupe: "GP",
            Guam: "GU",
            Guatemala: "GT",
            Guernsey: "GG",
            Guinea: "GN",
            "Guinea-Bissau": "GW",
            Guyana: "GY",
            Haiti: "HT",
            "Heard Island and McDonald Islands": "HM",
            Honduras: "HN",
            "Hong Kong SAR China": "HK",
            Hungary: "HU",
            Iceland: "IS",
            India: "IN",
            Indonesia: "ID",
            "Iran, Islamic Republic of": "IR",
            Iraq: "IQ",
            Ireland: "IE",
            "Isle of Man": "IM",
            Israel: "IL",
            Italy: "IT",
            Jamaica: "JM",
            Japan: "JP",
            Jersey: "JE",
            "Johnston Island": "JT",
            Jordan: "JO",
            Kazakhstan: "KZ",
            Kenya: "KE",
            Kiribati: "KI",
            "Korea, Republic of": "KR",
            "Korea, Democratic People`s Republic of": "KP",
            Kuwait: "KW",
            Kyrgyzstan: "KG",
            "Lao People`s Democratic Republic": "LA",
            Latvia: "LV",
            Lebanon: "LB",
            Lesotho: "LS",
            Liberia: "LR",
            "Libyan Arab Jamahiriya": "LY",
            Liechtenstein: "LI",
            Lithuania: "LT",
            Luxembourg: "LU",
            "Macau SAR China": "MO",
            "Macedonia, The Former Yugoslav Republic Of": "MK",
            Madagascar: "MG",
            Malawi: "MW",
            Malaysia: "MY",
            Maldives: "MV",
            Mali: "ML",
            Malta: "MT",
            "Marshall Islands": "MH",
            Martinique: "MQ",
            Mauritania: "MR",
            Mauritius: "MU",
            Mayotte: "YT",
            "Metropolitan France": "FX",
            Mexico: "MX",
            "Micronesia, Federated States of": "FM",
            "Midway Islands": "MI",
            "Moldova, Republic of": "MD",
            Monaco: "MC",
            Mongolia: "MN",
            Montenegro: "ME",
            Montserrat: "MS",
            Morocco: "MA",
            Mozambique: "MZ",
            "Myanmar [Burma]": "MM",
            Namibia: "NA",
            Nauru: "NR",
            Nepal: "NP",
            Netherlands: "NL",
            "Netherlands Antilles": "AN",
            "Neutral Zone": "NT",
            "New Caledonia": "NC",
            "New Zealand": "NZ",
            Nicaragua: "NI",
            Niger: "NE",
            Nigeria: "NG",
            Niue: "NU",
            "Norfolk Island": "NF",
            "North Vietnam": "VD",
            "Northern Mariana Islands": "MP",
            Norway: "NO",
            Oman: "OM",
            "Pacific Islands Trust Territory": "PC",
            Pakistan: "PK",
            Palau: "PW",
            "Palestinian Territory, Occupied": "PS",
            Panama: "PA",
            "Panama Canal Zone": "PZ",
            "Papua New Guinea": "PG",
            Paraguay: "PY",
            "People`s Democratic Republic of Yemen": "YD",
            Peru: "PE",
            Philippines: "PH",
            "Pitcairn Islands": "PN",
            Poland: "PL",
            Portugal: "PT",
            "Puerto Rico": "PR",
            Qatar: "QA",
            Romania: "RO",
            Russia: "RU",
            Rwanda: "RW",
            Reunion: "RE",
            "Saint Barthelemy": "BL",
            "Saint Helena": "SH",
            "Saint Kitts and Nevis": "KN",
            "Saint Lucia": "LC",
            "Saint Martin": "MF",
            "Saint Pierre and Miquelon": "PM",
            "Saint Vincent and the Grenadines": "VC",
            Samoa: "WS",
            "San Marino": "SM",
            "Saudi Arabia": "SA",
            Senegal: "SN",
            Serbia: "RS",
            "Serbia and Montenegro": "CS",
            Seychelles: "SC",
            "Sierra Leone": "SL",
            Singapore: "SG",
            Slovakia: "SK",
            Slovenia: "SI",
            "Solomon Islands": "SB",
            Somalia: "SO",
            "South Africa": "ZA",
            "South Georgia and the South Sandwich Islands": "GS",
            Spain: "ES",
            "Sri Lanka": "LK",
            Sudan: "SD",
            Suriname: "SR",
            "Svalbard and Jan Mayen": "SJ",
            Swaziland: "SZ",
            Sweden: "SE",
            Switzerland: "CH",
            "Syrian Arab Republic": "SY",
            "Sao Tome and Principe": "ST",
            Taiwan: "TW",
            Tajikistan: "TJ",
            "Tanzania, United Republic of": "TZ",
            Thailand: "TH",
            "Timor-Leste": "TL",
            Togo: "TG",
            Tokelau: "TK",
            Tonga: "TO",
            "Trinidad and Tobago": "TT",
            Tunisia: "TN",
            Turkey: "TR",
            Turkmenistan: "TM",
            "Turks and Caicos Islands": "TC",
            Tuvalu: "TV",
            "United States Minor Outlying Islands": "UM",
            "U.S. Miscellaneous Pacific Islands": "PU",
            Uganda: "UG",
            Ukraine: "UA",
            "Union of Soviet Socialist Republics": "SU",
            "United Arab Emirates": "AE",
            "United Kingdom": "GB",
            "Unknown or Invalid Region": "ZZ",
            Uruguay: "UY",
            Uzbekistan: "UZ",
            Vanuatu: "VU",
            "Holy See (Vatican City State)": "VA",
            Venezuela: "VE",
            "Viet Nam": "VN",
            "Virgin Islands, British": "VG",
            "Virgin Islands, U.S.": "VI",
            "Wake Island": "WK",
            "Wallis and Futuna": "WF",
            "Western Sahara": "EH",
            Yemen: "YE",
            Zambia: "ZM",
            Zimbabwe: "ZW"
        };
        var o = "../build/transpiled/interface/controls/country_map";
        window.define(o, (function() {
            var e = "undefined"
              , n = typeof t === e ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === e ? typeof module === e ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : t;
            return n && n.default || n
        }
        )),
        window.require([o])
    }
    ,
    630616: (e, t, n) => {
        "use strict";
        n.r(t),
        n.d(t, {
            default: () => f
        });
        var i = n(55188)
          , o = n.n(i)
          , s = n(460159)
          , r = n.n(s)
          , a = n(161320)
          , l = n.n(a)
          , c = n(848655)
          , u = n(319779)
          , d = n(403474)
          , h = n(661533)
          , p = !1;
        const f = u.default.extend({
            controlClassName: "js-control-date-customers",
            _getDefaults: function() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                    t[n] = arguments[n];
                return o().extend({}, u.default.prototype._getDefaults.apply(this, t), {
                    selected: this._findElem("input").val()
                })
            },
            _preloadMonthsTemplate: function() {
                return p ? new Promise((function(e) {
                    e()
                }
                )) : (p = !0,
                r()._preload(["/tmpl/controls/select.twig"])())
            },
            _monthsTemplate: function(e) {
                var t, n = r()({
                    ref: "/tmpl/controls/select.twig"
                }), i = 0, s = [];
                (e = e || this.kalendae.getSelectedRaw()[0]) && (i = e.startOf("month").diff(l()().startOf("month"), "months")),
                i < 0 ? s = o().union([i], o().range(0, 58)) : (t = i - 30 > 0 ? i - 30 : 0,
                s = o().range(t, t + 59)),
                this._findElem("months_wrapper").remove(),
                this._findElem("input").after(o().template('<div class="'.concat(this._class("months_wrapper"), '">').concat(n.render({
                    class_name: "customers-date__months-select",
                    input_special_class: "js-form-changes-skip js-customers-date-months",
                    selected: i,
                    items: o().map(s, (function(e) {
                        return {
                            id: e,
                            option: l()().add(e, "month").format("MMMM YYYY")
                        }
                    }
                    ))
                }), "</div>")))
            },
            _getKalendaeHandler: function() {
                return d
            },
            _classes: function() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                    t[n] = arguments[n];
                return o().extend({}, u.default.prototype._classes.apply(this, t), {
                    input: "js-customers-date-date-input",
                    input_not_valid: "date_field_not-valid",
                    months_wrapper: "customers-date__months",
                    months_input: "js-customers-date-months"
                })
            },
            events: function() {
                var e = o().extend({}, o().result(u.default.prototype, "events", {}));
                return e["input ".concat(this._selector("input"))] = "_onDateInput",
                e["blur ".concat(this._selector("input"))] = "reformatOnBlur",
                e["controls:change ".concat(this._selector("months_input"))] = "_setCalendarMonthOnSelectChange",
                e["keyup ".concat(this._selector("input"))] = "_hideCalendarOnEnterKey",
                e
            },
            initialize: function() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                    t[n] = arguments[n];
                u.default.prototype.initialize.apply(this, t),
                this.container()
            },
            destroy: function() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                    t[n] = arguments[n];
                u.default.prototype.destroy.apply(this, t),
                this.$container && (this._findElem("months_wrapper").remove(),
                this.$container.remove())
            },
            container: function() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                    t[n] = arguments[n];
                var i, s = this;
                return this.$container || (u.default.prototype.container.apply(this, t),
                i = this.kalendae.draw,
                this.kalendae.draw = function() {
                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                        t[n] = arguments[n];
                    var o = i.apply(this, t);
                    return s._addTwoWeeks(),
                    o
                }
                ,
                this._preloadMonthsTemplate().then(o().bind((function() {
                    var e = this._findElem("input").val();
                    e && this.kalendae.setSelected(e),
                    this._monthsTemplate(),
                    this._addTwoWeeks()
                }
                ), this))),
                this.$container
            },
            _hideCalendarOnEnterKey: function(e) {
                13 !== e.keyCode || this._findElem("input").hasClass(this._class("input_not_valid")) || (this._findElem("input").val(this._findElem("input").val()).trigger("controls:change", [this._findElem("input").val()]),
                this.$el.trigger("control:date:selected"))
            },
            _setCalendarMonthOnSelectChange: function() {
                var e = this._findElem("months_input");
                this.updateCalendarView(l()().add(e.val(), "months")),
                this._monthsTemplate(this.kalendae.viewStartDate)
            },
            _onDateInput: function() {
                var e = this._findElem("input").val();
                this.validateSelected() && e.length > 5 && (e = l()(e, (0,
                c.format)("parse")).format((0,
                c.format)("date")),
                this.kalendae.setSelected(e)),
                this._findElem("input").trigger("controls:change", [e])
            },
            onDateClickedSingle: function(e) {
                u.default.prototype.onDateClickedSingle.apply(this, arguments),
                this._findElem("input").trigger("controls:change", [e.format(APP.system.format.date.date)]),
                this.$el.trigger("control:date:selected")
            },
            onChangeSingle: function() {
                this.kalendae && (this.validateSelected(),
                this._monthsTemplate())
            },
            updateCalendarView: function(e) {
                this.kalendae.viewStartDate = e,
                this.kalendae.draw()
            },
            validateSelected: function() {
                var e = !0
                  , t = l()(this._findElem("input").val(), (0,
                c.format)("parse"));
                return this._findElem("input").removeClass(this._class("input_not_valid")),
                (!t.isValid() || t.format("X") < 0) && (e = !1,
                this._findElem("input").addClass(this._class("input_not_valid"))),
                e
            },
            _addTwoWeeks: function() {
                var e = h(this.kalendae.container)
                  , t = {
                    prepend: o().range(1, 8, 1).reverse(),
                    append: o().range(1, 8, 1)
                };
                e.find(".k-fake-date").remove();
                var n = e.find(".k-days span")
                  , i = "YYYY-MM-DD"
                  , s = l()(n.first().attr("data-date"), i);
                s.month() === this.kalendae.viewStartDate.month() && (s.subtract(1, "month").endOf("month"),
                t.append = !1);
                var r = l()(n.last().attr("data-date"), i);
                r.month() === this.kalendae.viewStartDate.month() && (s.add(1, "month").startOf("month"),
                t.prepend = !1),
                o().each(t, (function(t, a) {
                    t && e.find(".k-days")[a](o().map(t, (function(e) {
                        var t = ("prepend" === a ? s : r).clone()["prepend" === a ? "subtract" : "add"](e, "days");
                        return n.first().clone().removeClass("k-in-month k-selected").addClass("k-out-of-month k-fake-date").attr("data-date", t.format(i)).text(t.format("D")).get(0).outerHTML
                    }
                    )).join(""))
                }
                ), this)
            }
        });
        var _ = "../build/transpiled/interface/controls/customers/date";
        window.define(_, (function() {
            var e = "undefined"
              , n = typeof t === e ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === e ? typeof module === e ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : t;
            return n && n.default || n
        }
        )),
        window.require([_])
    }
    ,
    738336: (e, t, n) => {
        "use strict";
        n.r(t),
        n.d(t, {
            default: () => h
        });
        var i = n(55188)
          , o = n.n(i)
          , s = n(661533)
          , r = n.n(s)
          , a = n(161320)
          , l = n.n(a)
          , c = n(848655)
          , u = n(880774)
          , d = n(340958);
        n(630616);
        const h = d.default.extend({
            controlClassName: "js-control-purchase",
            _classes: function() {
                return {
                    customers_date_control: "js-control-date-customers",
                    caption: "customers-date__caption",
                    value: "customers-date__caption-value",
                    title: "customers-date__caption-title",
                    focuser: "customers-date__caption-focuser",
                    not_valid: "customers-date__caption-value_not-valid",
                    date_input: "js-customers-date-date-input",
                    list: "customers-date__list",
                    purchase_button: "js-purchase-button"
                }
            },
            document_events: function() {
                return {
                    "controls:hide:private": "_hideOnClickOutside"
                }
            },
            events: function() {
                var e = {};
                return e["click ".concat(this._selector("caption"))] = "_openOnClick",
                e["keyup ".concat(this._selector("focuser"))] = "_openWhenFocused",
                e
            },
            initialize: function() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                    t[n] = arguments[n];
                d.default.prototype.initialize.apply(this, t),
                this._$body_control = this._elem("list"),
                this._$body_control.on("controls:change", this._selector("date_input"), o().bind(this._onDateInputChange, this)).on("control:date:selected", this._selector("customers_date_control"), o().bind(this._hide, this)).on("click", this._selector("purchase_button"), o().bind(this._hide, this)),
                this._onDateInputChange({}, this._elem("date_input").val()),
                this._$window.on("resize".concat(this.ns), o().bind(this._setPositions, this))
            },
            destroy: function() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                    t[n] = arguments[n];
                this._$body_control.off(),
                d.default.prototype.destroy.apply(this, t)
            },
            _onDateInputChange: function(e, t) {
                var n, i = l()(t, (0,
                c.format)("parse")), s = t && i.isBefore(l()().startOf("day")), r = (0,
                u.i18n)("Next purchase");
                i.isValid() && (t = i.format(APP.system.format.date.date)),
                o().each({
                    yesterday: -1,
                    today: 0,
                    tomorrow: 1
                }, (function(e, n) {
                    i.startOf("day").isSame(l()().startOf("day").add(e, "days")) && (t = l()().format(l()().localeData().calendar(n)))
                }
                )),
                s && (r = (0,
                u.i18n)("Did not purchase"),
                (n = Math.abs(l()().startOf("day").diff(i.startOf("day"), "days"))) < 5e3 && (t += " (".concat((0,
                u.numeralWord)(n, (0,
                u.i18n)("day,days,days,days"), !0), ")"))),
                this._elem("title").text(r),
                this._elem("value").toggleClass(this._class("not_valid"), s).text(t || "")
            },
            _openWhenFocused: function(e) {
                var t = null === e.which ? e.keyCode : e.which
                  , n = t < 32 ? null : String.fromCharCode(t);
                (-1 !== o().indexOf([13, 8], e.keyCode) || /[0-9/.]/.test(n)) && this._openOnClick(e)
            },
            _openOnClick: function(e) {
                this._$body_control.hasClass("expanded") || this._$document.trigger({
                    type: "controls:hide",
                    target: this.el
                }),
                this._$body_control.hasClass("expanded") ? this._hide() : this._show(),
                e.stopPropagation()
            },
            _hideOnClickOutside: function(e) {
                this._$body_control.hasClass("expanded") && !r().contains(this._$body_control.get(0), e.target) && this._hide()
            },
            _show: function() {
                var e;
                this._$body_control.addClass("expanded"),
                this._toggleBodyOverlay(this._$body_control, this._hide),
                this._setPositions(),
                APP.is_touch_device || (e = this._$body_control.find(this._selector("date_input"))).val(e.val()).focus()
            },
            _hide: function() {
                this._toggleBodyOverlay(!1),
                this._$body_control.removeClass("expanded");
                var e = this._findElem("date_input")
                  , t = l()(e.val(), (0,
                c.format)("parse"));
                t.isValid() && e.val(t.format(APP.system.format.date.date)),
                this.$el.find(":input").trigger("change"),
                this._findElem("focuser").focus()
            },
            _setPositions: function() {
                var e = this.$el.offset();
                this._$body_control.removeClass("h-at-top").css({
                    top: e.top,
                    left: e.left,
                    zIndex: this._maxControlBodyZIndex
                }),
                !APP.data.current_list || APP.data.is_card || this._$body_control.visible() || this._$body_control.addClass("h-at-top")
            }
        });
        var p = "../build/transpiled/interface/controls/customers/purchase";
        window.define(p, (function() {
            var e = "undefined"
              , n = typeof t === e ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === e ? typeof module === e ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : t;
            return n && n.default || n
        }
        )),
        window.require([p])
    }
    ,
    140670: (e, t, n) => {
        "use strict";
        n.r(t),
        n.d(t, {
            default: () => w
        });
        var i = n(661533)
          , o = n.n(i)
          , s = n(55188)
          , r = n.n(s)
          , a = n(161320)
          , l = n.n(a)
          , c = n(880774)
          , u = n(886965)
          , d = n(340958);
        function h(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(e, i.key, i)
            }
        }
        function p(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        function f(e, t, n) {
            return f = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(e, t, n) {
                var i = function(e, t) {
                    for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = _(e)); )
                        ;
                    return e
                }(e, t);
                if (i) {
                    var o = Object.getOwnPropertyDescriptor(i, t);
                    return o.get ? o.get.call(n || e) : o.value
                }
            }
            ,
            f(e, t, n || e)
        }
        function _(e) {
            return _ = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            ,
            _(e)
        }
        function m(e, t) {
            return m = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                e
            }
            ,
            m(e, t)
        }
        function g(e) {
            var t = function() {
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
                var n, i = _(e);
                if (t) {
                    var o = _(this).constructor;
                    n = Reflect.construct(i, arguments, o)
                } else
                    n = i.apply(this, arguments);
                return function(e, t) {
                    return !t || "object" != ((n = t) && "undefined" != typeof Symbol && n.constructor === Symbol ? "symbol" : typeof n) && "function" != typeof t ? function(e) {
                        if (void 0 === e)
                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return e
                    }(e) : t;
                    var n
                }(this, n)
            }
        }
        var v = {
            start: -1,
            end: 5
        }
          , y = {
            start: 0,
            end: 6
        }
          , b = function(e) {
            !function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && m(e, t)
            }(a, e);
            var t, n, i, s = g(a);
            function a() {
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, a),
                s.apply(this, arguments)
            }
            return t = a,
            n = [{
                key: "initialize",
                value: function() {
                    this._opened = !1,
                    this.save_overflow = this.$el.data("save-overflow"),
                    this.$el_in_body = o()(),
                    f(_(a.prototype), "initialize", this).apply(this, arguments)
                }
            }, {
                key: "destroy",
                value: function() {
                    this.save_overflow && this._findElem("main_dropdown").off(),
                    this._$document.off("controls:hide:private.".concat(this.ns)),
                    f(_(a.prototype), "destroy", this).apply(this, arguments)
                }
            }, {
                key: "events",
                value: function() {
                    var e;
                    return p(e = {
                        "click .date_filter__head": "open",
                        'change .date_filter__param__toggler input[type="radio"]': "onSwitcherChange",
                        "controls:change [class^=date_field__range_]": "onChangeRange",
                        "controls:change .date_field__preset": "fillPreset",
                        "date-filter:clear": "onRangeClear",
                        "click .date_filter__period_range__options": "onClickStopPropagation"
                    }, "click ".concat(this._selector("preset_item")), "choosePreset"),
                    p(e, "click ".concat(this._selector("past_x_days_wrapper")), "onClickStopPropagation"),
                    p(e, "input ".concat(this._selector("past_x_days_input")), "inputDaysPastXDays"),
                    p(e, "date-filter:date-change ".concat(this._selector("range_wrapper")), "onAbsoluteDateValueChange"),
                    p(e, "click ".concat(this._selector("switcher_item")), "onSwitcherClick"),
                    p(e, "focus ".concat(this._selector("main_range")), "onMainDateInputFocus"),
                    p(e, "blur ".concat(this._selector("main_range")), "onMainDateInputBlur"),
                    p(e, "controls:date:done ".concat(this._selector("main_range")), "onMainDateInputDone"),
                    p(e, "click ".concat(this._selector("custom_period_value")), "onClickStopPropagation"),
                    p(e, "input ".concat(this._selector("custom_period_value")), "inputDays"),
                    p(e, "keydown ".concat(this._selector("custom_period_value")), "inputDaysKeydown"),
                    p(e, "focus ".concat(this._selector("custom_period_value")), "inputDaysFocus"),
                    p(e, "blur ".concat(this._selector("custom_period_value")), "inputDaysBlur"),
                    e
                }
            }, {
                key: "document_events",
                value: function() {
                    return {
                        "controls:hide:private": "documentTriggerHide"
                    }
                }
            }, {
                key: "delegateEvents",
                value: function() {
                    var e = this
                      , t = this.save_overflow ? this._findElem("main_dropdown") : this.$el;
                    return this._$document.on("controls:hide:private.".concat(this.ns), r().bind(this.documentTriggerHide, this)),
                    r().each(r().result(this, "events"), (function(n, i) {
                        var o = i.match(/^(\S+)\s*(.*)$/)
                          , s = "".concat(o[1], ".delegateEvents").concat(e.cid)
                          , a = o[2];
                        t.find(a).length ? t.on(s, a, r().bind(e[n], e)) : e.$el.on(s, a, r().bind(e[n], e))
                    }
                    )),
                    this
                }
            }, {
                key: "_findElem",
                value: function(e) {
                    var t = d.default.prototype._findElem.apply(this, arguments);
                    return !t.length && this.save_overflow && this.$el_in_body.length ? this.$el_in_body.find(this._selector(e)) : t
                }
            }, {
                key: "_selectors",
                value: function() {
                    return {
                        main_dropdown: ".date_filter__dropdown",
                        main_input: ".js-date-filter-input",
                        period: ".date_filter__period",
                        custom_period_value: ".js-date_filter__period_item",
                        first_switcher_input: ".control-toggler__item.first input",
                        range_wrapper: ".date_field_wrapper",
                        main_range: ".date_field",
                        range_clear: ".date_field--clear",
                        checked_switcher_input: '.control-toggler__item input[type="radio"]:checked',
                        range_fields: "[class ^= date_field__range_]",
                        preset: ".date_field__preset",
                        preset_item_by_id: '.date_filter__period_item[data-period="%s"]',
                        dropdown_icon: ".date_filter__head__dropdown_icon",
                        past_x_days_wrapper: ".date_filter__period_item-past_x_days-wrapper",
                        past_x_days_input: ".date_filter__period_item-past_x_days-input",
                        past_x_days_period: ".past_x_days-period"
                    }
                }
            }, {
                key: "_classes",
                value: function() {
                    return {
                        selected_switcher: "control-toggler__item-selected",
                        save_overflow: "date_filter__save-overflow",
                        filter_item: "filter__custom_settings__item",
                        to_top: "date_filter__dropdown_to-top",
                        preset_item: "date_filter__period_item",
                        preset_item_selected: "date_filter__period_item_selected",
                        switcher_item: "control-toggler__item",
                        dropdown_icon_up: "date_filter__head__dropdown_icon--up"
                    }
                }
            }, {
                key: "onAbsoluteDateValueChange",
                value: function(e, t) {
                    (this._findElem("preset").length ? this._findElem("preset") : this.$el_in_body.find(this._selector("preset"))).val("").trigger("change"),
                    this.clearPresetAndDateTitle(t)
                }
            }, {
                key: "documentTriggerHide",
                value: function(e) {
                    if (this._opened) {
                        var t = o()(e.target);
                        o().contains(this.save_overflow && this.$el_in_body.length ? this.$el_in_body.get(0) : this._findElem("main_dropdown").get(0), e.target) || t.closest(".kalendae").length || this.hide()
                    }
                }
            }, {
                key: "onClickStopPropagation",
                value: function(e) {
                    e.stopPropagation()
                }
            }, {
                key: "clear",
                value: function() {
                    this._findElem("preset").val("").trigger("controls:change")
                }
            }, {
                key: "open",
                value: function(e) {
                    e.stopPropagation(),
                    this._$document.trigger({
                        type: "controls:hide",
                        target: e.currentTarget
                    }),
                    this._opened || (this._opened = !0,
                    this._findElem("main_dropdown").toggle(),
                    this._elem("custom_period_value").trigger("autosize:important"),
                    this.toggleDropdownIcon(!0),
                    this.save_overflow && this.openInBody())
                }
            }, {
                key: "onSwitcherChange",
                value: function(e) {
                    var t = o()(e.currentTarget).closest("label")
                      , n = t.text().trim() || t.attr("data-label");
                    e.currentTarget.checked ? (this._findElem("selected_switcher").removeClass(this._class("selected_switcher")),
                    t.addClass(this._class("selected_switcher")),
                    t.hasClass("first") ? this._findElem("period").removeAttr("data-switcher-text") : this._findElem("period").attr("data-switcher-text", n)) : t.hasClass("first") || this._findElem("first_switcher_input").prop("checked", !0).trigger("change")
                }
            }, {
                key: "onSwitcherClick",
                value: function(e) {
                    e.stopPropagation()
                }
            }, {
                key: "onChangeRange",
                value: function(e) {
                    var t = o()(e.currentTarget)
                      , n = t.val();
                    this._elem("main_range").trigger("controls:date").data("kalendae") ? this.selectedKalendaeOptions(t, n) : this._elem("range_wrapper").one("controls:view:init", r().bind((function() {
                        this.selectedKalendaeOptions(t, n)
                    }
                    ), this))
                }
            }, {
                key: "onMainDateInputFocus",
                value: function() {
                    this._kalendae_showed || (this.toggleKalendaeInputOverlay(!0),
                    this._kalendae_showed = !0)
                }
            }, {
                key: "onMainDateInputDone",
                value: function() {
                    this._kalendae_showed = !1,
                    this.toggleKalendaeInputOverlay(!1),
                    this.hide()
                }
            }, {
                key: "onMainDateInputBlur",
                value: function() {
                    var e = this;
                    setTimeout((function() {
                        e._kalendae_showed = !1,
                        e.toggleKalendaeInputOverlay(!1)
                    }
                    ), 200)
                }
            }, {
                key: "toggleKalendaeInputOverlay",
                value: function(e) {
                    var t = this;
                    if (e) {
                        var n = this._findElem("main_range")
                          , i = n.offset()
                          , s = n.trigger("controls:date").data("kalendae")
                          , a = s ? o()(s.container).css("z-index") : this._maxControlBodyZIndex;
                        this._$kalendae_overlays = o()(),
                        r().each(["before", "after"], (function(e) {
                            var n = o()('<div class="default-overlay date_filter__overlay default-overlay-visible" style="background: none; z-index: '.concat(a, ';"></div>'));
                            "before" === e ? n.css({
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: "auto",
                                height: i.top
                            }) : n.css({
                                top: i.top + t._findElem("range_wrapper").height(),
                                right: 0,
                                bottom: 0,
                                left: 0
                            }),
                            document.body.insertBefore(n.get(0), s ? s.container : null),
                            t._$kalendae_overlays = t._$kalendae_overlays.add(n)
                        }
                        ))
                    } else
                        this._$kalendae_overlays && (this._$kalendae_overlays.remove(),
                        this._$kalendae_overlays = null)
                }
            }, {
                key: "clearPresetAndDateTitle",
                value: function(e) {
                    this._findElem("preset_item").removeClass(this._class("preset_item_selected")),
                    this._findElem("period").text(e || this._findElem("period").attr("data-before"))
                }
            }, {
                key: "inputDaysPastXDays",
                value: function(e) {
                    var t = o()(e.currentTarget)
                      , n = Number(t.val())
                      , i = Number(t.attr("max"));
                    switch (!0) {
                    case n < 0:
                        n = 0;
                        break;
                    case n > i:
                        n = i
                    }
                    t.val(n),
                    t.trigger("autosize:important"),
                    this._findElem("range_fields").first().val(""),
                    this._findElem("range_fields").last().val(""),
                    this._findElem("preset").val("previous_days_" + n).trigger("change");
                    var s = APP.system.timezone
                      , r = n > 365 ? APP.system.format.date.date : APP.system.format.date.date_short
                      , a = [l()().tz(s).subtract(n, "days").format(r), (0,
                    c.i18n)("Today")].join(" - ");
                    this._findElem("past_x_days_period").text("(".concat(a, ")"))
                }
            }, {
                key: "inputDays",
                value: function(e) {
                    var t = o()(e.currentTarget)
                      , n = Number(t.val())
                      , i = Number(t.attr("max"));
                    switch (!0) {
                    case n < 0:
                        n = 0;
                        break;
                    case n > i:
                        n = i
                    }
                    t.val(n),
                    t.trigger("autosize:important")
                }
            }, {
                key: "inputDaysKeydown",
                value: function(e) {
                    13 === e.keyCode && o()(e.currentTarget).closest(".date_filter__period_item").trigger("click")
                }
            }, {
                key: "inputDaysFocus",
                value: function() {
                    this._days_x_focused = !0
                }
            }, {
                key: "inputDaysBlur",
                value: function() {
                    var e = this;
                    setTimeout((function() {
                        e._days_x_focused = !1
                    }
                    ), 200)
                }
            }, {
                key: "inputDaysApply",
                value: function() {
                    this._days_x_focused = !1,
                    this._elem("custom_period_value").closest(".date_filter__period_item").click()
                }
            }, {
                key: "inputDaysFill",
                value: function(e) {
                    if (0 === e)
                        this.choosePreset({
                            currentTarget: this._findElem("preset_item_by_id", "today")
                        });
                    else if (1 === e)
                        this.choosePreset({
                            currentTarget: this._findElem("preset_item_by_id", "yesterday")
                        });
                    else if (e > 1) {
                        var t = APP.system.timezone
                          , n = e > 365 ? APP.system.format.date.date : APP.system.format.date.date_short
                          , i = [l()().tz(t).subtract(e, "days").format(n), (0,
                        c.i18n)("Today")].join(" - ");
                        this._findElem("preset_item_by_id", "past_x_days").addClass(this._class("preset_item_selected")),
                        this.hide(),
                        this._findElem("range_fields").first().val(""),
                        this._findElem("range_fields").last().val(""),
                        this._findElem("preset").val("previous_days_" + e).trigger("change"),
                        this._findElem("range_fields").trigger("change");
                        var s = (0,
                        c.numeralWord)(e, (0,
                        c.i18n)("Last %s days (numeral)")).split("%s");
                        this._findElem("period").text("").prepend(o()('<span class="date_filter__period__past_x_days-wrapper">' + "<p>".concat(s[0], "</p>") + '<div class="date_filter__period_item-input-days-wrapper date_filter__period_item-past_x_days-wrapper">' + '<input class="date_filter__period_item-input-days date_filter__period_item-past_x_days-input js-date_filter__period_item js-control-autosized_input" data-comfort-zone="1" type="number" value="'.concat(e, '" max="999" />') + " </div>" + "<p>".concat(s[1], '</p> <p class="past_x_days-period">(').concat(i, ")</p>") + "</span>")),
                        this._findElem("main_input").val("")
                    }
                }
            }, {
                key: "findPresetElem",
                value: function(e) {
                    return this._findElem("preset_item_by_id", e)
                }
            }, {
                key: "fillPreset",
                value: function(e) {
                    var t = o()(e.currentTarget).val()
                      , n = parseInt(t.replace("previous_days_", ""));
                    n >= 0 ? (this._elem("custom_period_value").val(n),
                    this.inputDaysFill(n)) : t ? this.choosePreset(r().extend(e, {
                        currentTarget: this.findPresetElem(t)
                    })) : this.clearPresetAndDateTitle()
                }
            }, {
                key: "choosePreset",
                value: function(e) {
                    var t = o()(e.currentTarget)
                      , n = APP.system.timezone
                      , i = parseInt(l()().tz(n).quarter())
                      , s = APP.system.format.date.date_short
                      , r = "pt" === (0,
                    u.getLangId)() ? v : y
                      , a = t.attr("data-period") || this._findElem("preset").val()
                      , d = this._findElem("period").attr("data-before");
                    switch (this._findElem("preset_item").removeClass(this._class("preset_item_selected")),
                    a) {
                    case "tomorrow":
                        d = l()().tz(n).add("days", 1).format(s),
                        d += " - " + (0,
                        c.i18n)("Tomorrow");
                        break;
                    case "today":
                    case "day":
                    case "current_day":
                        a = "current_day",
                        d = l()().tz(n).format(s);
                        break;
                    case "yesterday":
                        a = "yesterday",
                        d = l()().tz(n).subtract(1, "day").format(s);
                        break;
                    case "week":
                    case "this_week":
                    case "current_week":
                        a = "current_week",
                        d = [l()().tz(n).weekday(r.start).format(s), l()().tz(n).weekday(r.end).format(s)].join(" - ");
                        break;
                    case "month":
                    case "this_month":
                    case "current_month":
                        a = "current_month",
                        d = [l()().tz(n).startOf("month").format(s), l()().tz(n).endOf("month").format(s)].join(" - ");
                        break;
                    case "quarter":
                    case "this_quarter":
                    case "current_quarter":
                        a = "current_quarter",
                        d = [l()().tz(n).month(3 * i - 3).startOf("month").format(s), l()().tz(n).month(3 * i - 1).endOf("month").format(s)].join(" - ");
                        break;
                    case "last_6_months":
                        d = [l()().tz(n).subtract(5, "months").startOf("month").format(s), l()().tz(n).endOf("month").format(s)].join(" - ");
                        break;
                    case "year":
                    case "current_year":
                        a = "current_year",
                        d = [l()().tz(n).startOf("year").format(s), l()().tz(n).endOf("year").format(s)].join(" - ");
                        break;
                    case "previous_week":
                        a = "previous_week",
                        d = [l()().tz(n).subtract(1, "week").weekday(r.start).format(s), l()().tz(n).subtract(1, "week").weekday(r.end).format(s)].join(" - ");
                        break;
                    case "previous_month":
                        a = "previous_month",
                        d = [l()().tz(n).subtract(1, "month").startOf("month").format(s), l()().tz(n).subtract(1, "month").endOf("month").format(s)].join(" - ");
                        break;
                    case "previous_quarter":
                        d = [l()().tz(n).subtract(1, "quarter").startOf("quarter").format(s), l()().tz(n).subtract(1, "quarter").endOf("quarter").format(s)].join(" - ");
                        break;
                    case "previous_year":
                        d = [l()().tz(n).subtract(1, "year").startOf("year").format(s), l()().tz(n).subtract(1, "year").endOf("year").format(s)].join(" - ");
                        break;
                    case "next_3_days":
                        d = [l()().tz(n).format(s), l()().tz(n).add("days", 3).format(s)].join(" - ");
                        break;
                    case "next_week":
                        d = [l()().tz(n).add("week", 1).weekday(r.start).format(s), l()().tz(n).add("week", 1).weekday(r.end).format(s)].join(" - ");
                        break;
                    case "next_month":
                        d = [l()().tz(n).add("month", 1).startOf("month").format(s), l()().tz(n).add("month", 1).endOf("month").format(s)].join(" - ");
                        break;
                    case "next_quarter":
                        d = [l()().tz(n).add("quarter", 1).startOf("quarter").format(s), l()().tz(n).add("quarter", 1).endOf("quarter").format(s)].join(" - ");
                        break;
                    case "any_time":
                    case "ignore":
                        a = "any_time",
                        d = t.find("span").attr("title"),
                        this._findElem("range_fields").val(""),
                        this._findElem("period").text(d);
                        break;
                    case "last_3_days":
                    case "past_3_days":
                        a = "last_3_days",
                        d = [l()().tz(n).subtract(2, "days").format(s), l()().tz(n).format(s)].join(" - ");
                        break;
                    case "past_x_days":
                        return void this.inputDaysFill(Number(t.find(".js-date_filter__period_item").val()))
                    }
                    this.hide(),
                    t.addClass(this._class("preset_item_selected")),
                    this._findElem("preset").val(a).trigger("change"),
                    this._findElem("range_fields").val("").trigger("change"),
                    this._findElem("period").text("".concat(t.text(), " (").concat(d, ")")),
                    this._findElem("main_input").val("")
                }
            }, {
                key: "onRangeClear",
                value: function() {
                    this._findElem("main_range").val("").trigger("controls:change"),
                    this._findElem("preset").val("").trigger("change"),
                    this._findElem("range_fields").val("").trigger("controls:change").trigger("change"),
                    this.clearPresetAndDateTitle()
                }
            }, {
                key: "openInBody",
                value: function() {
                    var e = this.$el.offset()
                      , t = this._findElem("main_dropdown")
                      , n = t.width()
                      , i = this.$el.width();
                    this.$el_in_body = t.css({
                        top: e.top + this.$el.height(),
                        left: e.left,
                        width: Math.max(n, i),
                        marginTop: ""
                    }).removeClass(this._class("to_top")).addClass(this.class_list),
                    this._toggleBodyOverlay(t, this.hide),
                    this.$el_in_body.visible() || t.css("margin-top", -this.$el.height()).addClass(this._class("to_top"))
                }
            }, {
                key: "class_list",
                get: function() {
                    return [this._class("save_overflow"), this._class("filter_item"), this._findElem("main_dropdown").data("class-to-body")].join(" ")
                }
            }, {
                key: "hide",
                value: function() {
                    if (!this._opened || this._kalendae_showed)
                        return !1;
                    this._days_x_focused ? this.inputDaysApply() : (this.save_overflow && (this.$el_in_body = o()(),
                    this._toggleBodyOverlay(!1),
                    this._findElem("main_dropdown").css({
                        top: "",
                        left: "",
                        width: ""
                    }),
                    this._findElem("main_dropdown").removeClass(this.class_list),
                    this._findElem("selected_switcher").find("input").trigger("change"),
                    this._findElem("preset").trigger("change"),
                    this._findElem("range_fields").trigger("change"),
                    this._findElem("main_range").trigger("change")),
                    this.toggleKalendaeInputOverlay(!1),
                    this.toggleDropdownIcon(!1),
                    this._findElem("main_dropdown").hide(),
                    this._opened = !1)
                }
            }, {
                key: "toggleDropdownIcon",
                value: function(e) {
                    this._elem("dropdown_icon").toggleClass(this._class("dropdown_icon_up"), e)
                }
            }, {
                key: "selectedKalendaeOptions",
                value: function(e, t) {
                    var n = this._elem("main_range").trigger("controls:date").data("kalendae");
                    n && (e.val(t),
                    t ? n.addSelected(t) : (n.setSelected(""),
                    e.val() && e.val("")),
                    n.getSelected().toString().length ? this._elem("range_clear").show() : this._elem("range_clear").hide(),
                    this._findElem("preset_item").removeClass("preset_item_selected"),
                    o()(n.input).trigger("controls:change", [n.getSelected()]),
                    this._elem("checked_switcher_input").trigger("change"))
                }
            }, {
                key: "getDateString",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : APP.system.format.date.date
                      , n = e.getSelectedRaw()
                      , i = "";
                    return r().isUndefined(n) || (1 === n.length ? i = n[0].isBefore(l()().tz(APP.system.timezone)) ? "".concat(n[0].format(t), " - ").concat((0,
                    c.i18n)("Today")) : n[0].format(t) : 2 === n.length && (i = n[0].format(t) === l()([1, 0, 1]).format(t) ? "".concat((0,
                    c.i18n)("deals to").charAt(0).toUpperCase()).concat((0,
                    c.i18n)("deals to").substr(1), " ").concat(n[1].format(t)) : e.getSelectedAsText().join(" - "))),
                    i
                }
            }, {
                key: "getKalendae",
                value: function() {
                    return this._findElem("main_input").data("kalendae")
                }
            }],
            i = [{
                key: "controlClassName",
                get: function() {
                    return "js-control-date-filter"
                }
            }],
            n && h(t.prototype, n),
            i && h(t, i),
            a
        }(d.default);
        b.extend(b);
        const w = b;
        var k = "../build/transpiled/interface/controls/date_range";
        window.define(k, (function() {
            var e = "undefined"
              , n = typeof t === e ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === e ? typeof module === e ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : t;
            return n && n.default || n
        }
        )),
        window.require([k])
    }
    ,
    605566: (e, t, n) => {
        "use strict";
        n.r(t),
        n.d(t, {
            default: () => p
        });
        var i = n(55188)
          , o = n.n(i)
          , s = n(140670)
          , r = n(661533);
        function a(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(e, i.key, i)
            }
        }
        function l(e, t, n) {
            return l = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(e, t, n) {
                var i = function(e, t) {
                    for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = c(e)); )
                        ;
                    return e
                }(e, t);
                if (i) {
                    var o = Object.getOwnPropertyDescriptor(i, t);
                    return o.get ? o.get.call(n || e) : o.value
                }
            }
            ,
            l(e, t, n || e)
        }
        function c(e) {
            return c = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            ,
            c(e)
        }
        function u(e, t) {
            return u = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                e
            }
            ,
            u(e, t)
        }
        function d(e) {
            var t = function() {
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
                var n, i = c(e);
                if (t) {
                    var o = c(this).constructor;
                    n = Reflect.construct(i, arguments, o)
                } else
                    n = i.apply(this, arguments);
                return function(e, t) {
                    return !t || "object" != ((n = t) && "undefined" != typeof Symbol && n.constructor === Symbol ? "symbol" : typeof n) && "function" != typeof t ? function(e) {
                        if (void 0 === e)
                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return e
                    }(e) : t;
                    var n
                }(this, n)
            }
        }
        var h = function(e) {
            !function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && u(e, t)
            }(h, e);
            var t, n, i, s = d(h);
            function h() {
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, h),
                s.apply(this, arguments)
            }
            return t = h,
            n = [{
                key: "events",
                value: function() {
                    var e = l(c(h.prototype), "events", this).apply(this, arguments);
                    return e["date-time-filter:date-change ".concat(this._selector("range_wrapper"))] = "onAbsoluteDateValueChange",
                    e["controls:change ".concat(this._selector("date_time_input_first"))] = "onAbsoluteDateValueChange",
                    e["controls:change ".concat(this._selector("date_time_input_second"))] = "onAbsoluteDateValueChange",
                    e
                }
            }, {
                key: "_selectors",
                value: function() {
                    return o().extend({}, l(c(h.prototype), "_selectors", this).call(this), {
                        filter_head: ".date_filter__head",
                        filter_period_control: ".date_filter__period_range__options",
                        date_time_input_first: ".date_field_with-time_range-input_first",
                        date_time_input_second: ".date_field_with-time_range-input_second",
                        date_time_input_overlay: ".filter__custom_settings__item__value-wrapper",
                        dateFilterDropdown: ".date_filter__dropdown"
                    })
                }
            }, {
                key: "_classes",
                value: function() {
                    return o().extend({}, l(c(h.prototype), "_classes", this).call(this), {
                        second_calendar_box: "date_field_with-time_range-box_second"
                    })
                }
            }, {
                key: "changeStyleTopDropdown",
                value: function(e) {
                    var t = this._findElem("dateFilterDropdown");
                    t.hasClass("date_filter__dropdown_to-top") || t.css({
                        top: e
                    })
                }
            }, {
                key: "onAbsoluteDateValueChange",
                value: function() {
                    if ((this._findElem("preset").length ? this._findElem("preset") : this.$el_in_body.find(this._selector("preset"))).val("").trigger("change"),
                    this._findElem("main_range").length) {
                        this.date_from = this._findElem("main_range")[0].value,
                        this.date_to = this._findElem("main_range")[1].value;
                        var e = this._findElem("filter_head")
                          , t = e.offset();
                        "" !== this._findElem("main_range")[0].value && "" !== this._findElem("main_range")[1].value ? (this.period = this.date_from + " - " + this.date_to,
                        this.changeStyleTopDropdown(t.top + e.outerHeight())) : "" === this._findElem("main_range")[0].value && "" !== this._findElem("main_range")[1].value ? this.period = this.date_to : "" !== this._findElem("main_range")[0].value && "" === this._findElem("main_range")[1].value ? this.period = this.date_from : this.period = this._findElem("period").attr("data-before"),
                        this.clearPresetAndDateTitle(this.period)
                    }
                }
            }, {
                key: "choosePreset",
                value: function() {
                    l(c(h.prototype), "choosePreset", this).apply(this, arguments),
                    this._findElem("period").css("white-space", "nowrap")
                }
            }, {
                key: "hide",
                value: function() {
                    return this._findElem("date_time_input_first").trigger("autosize.destroy"),
                    this._findElem("date_time_input_second").trigger("autosize.destroy"),
                    l(c(h.prototype), "hide", this).apply(this, arguments),
                    !1
                }
            }, {
                key: "toggleKalendaeInputOverlay",
                value: function(e) {
                    var t = this;
                    if (e) {
                        if (!this._findElem("main_range").length)
                            return;
                        var n = this._findElem("main_range")
                          , i = n.offset()
                          , s = n.trigger("controls:date").data("kalendae");
                        this._$kalendae_overlays = r(),
                        o().each(["before", "after"], (function(e) {
                            var n = r('<div class="default-overlay date_filter__overlay default-overlay-visible" style="background: none;"></div>');
                            "before" === e ? n.css({
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: "auto",
                                height: i.top
                            }) : n.css({
                                top: i.top + t._findElem("date_time_input_overlay").height(),
                                right: 0,
                                bottom: 0,
                                left: 0
                            }),
                            document.body.insertBefore(n.get(0), s ? s.container : null),
                            t._$kalendae_overlays = t._$kalendae_overlays.add(n)
                        }
                        ))
                    } else
                        this._$kalendae_overlays && (this._$kalendae_overlays.remove(),
                        this._$kalendae_overlays = null)
                }
            }],
            i = [{
                key: "controlClassName",
                get: function() {
                    return "js-control-date_time_filter"
                }
            }],
            n && a(t.prototype, n),
            i && a(t, i),
            h
        }(s.default);
        h.extend(h);
        const p = h;
        var f = "../build/transpiled/interface/controls/date_time_range";
        window.define(f, (function() {
            var e = "undefined"
              , n = typeof t === e ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === e ? typeof module === e ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : t;
            return n && n.default || n
        }
        )),
        window.require([f])
    }
    ,
    972762: (e, t, n) => {
        "use strict";
        n.r(t),
        n.d(t, {
            default: () => h
        });
        var i = n(661533)
          , o = n.n(i)
          , s = n(55188)
          , r = n.n(s)
          , a = n(811707)
          , l = n(340958)
          , c = {}
          , u = {};
        function d() {
            u = {},
            c = {}
        }
        o()(window).on("resize", r().debounce(d, 50)),
        o()(document).on("list:reload", r().debounce(d, 50));
        const h = l.default.extend({
            controlClassName: "js-control-file-name",
            _classes: function() {
                return {
                    size: "drive-field__size",
                    download_btn: "js-drive-field-download",
                    control_drive_field: "js-control-drive-field",
                    elements_container: "drive-field__controls",
                    file_name_parent: "js-file-name-cache-width",
                    aligned_controls: "drive-field__controls_aligned"
                }
            },
            document_events: function() {
                return {
                    "card:overlay:hide": "_hideCardHandler"
                }
            },
            events: function() {
                return {
                    "file-name:change": "_changeFileName"
                }
            },
            initialize: function() {
                l.default.prototype.initialize.apply(this, arguments);
                var e = this.$el.data();
                this.type = e.fileNameType,
                this._$window.on("resize" + this.ns, r().debounce(r().bind(this._nameWidthHandler, this), 200)),
                this._changeFileName()
            },
            _switchingChangeByType: function(e) {
                switch (e) {
                case "file-name-list":
                    this._changeFileNameList();
                    break;
                case "file-name-card":
                    this._changeFileNameDriveField(e);
                    break;
                case "files-list":
                    this._changeFilesList(e);
                    break;
                default:
                    this._defaultChangeFileName(e)
                }
            },
            _changeFileNameList: function() {
                var e = this.$el.closest(this._selector("control_drive_field")).attr("data-field-id");
                this._changeFileNameDriveField(e)
            },
            _changeFileNameDriveField: function(e) {
                this._widthCaching(e);
                var t = this._getWidthDriveField(e)
                  , n = Math.round((0,
                a.getTextWidth)(this.file_name_text)) - 1;
                this._toggleControlClass(t, n),
                t < n ? this._changeCorrectName(t) : this.$el.text(this.file_name_text)
            },
            _changeFilesList: function(e) {
                this._widthCaching(e);
                var t = c[e];
                this._changeCorrectName(t)
            },
            _defaultChangeFileName: function() {
                this.$el.text(this.file_name_text);
                var e = this.$el.width();
                e < Math.round((0,
                a.getTextWidth)(this.file_name_text)) - 3 && this._changeCorrectName(e)
            },
            _changeFileName: function() {
                this.file_name_text = this.$el.attr("title").trim(),
                this.file_name_text && this._switchingChangeByType(this.type)
            },
            _nameWidthHandler: function() {
                this.file_name_text && this._switchingChangeByType(this.type)
            },
            _hideCardHandler: function() {
                this._switchingChangeByType(this.type)
            },
            _widthCaching: function(e) {
                if (!c[e] || u[e]) {
                    var t = c[e];
                    c[e] = this.$el.closest(this._selector("file_name_parent")).width(),
                    t === c[e] ? u[e] = !1 : u[e] = !0
                }
            },
            _getWidthDriveField: function(e) {
                var t = this.$el.parent().find(this._selector("size")).width()
                  , n = this.$el.closest(this._selector("elements_container")).find(this._selector("download_btn")).width();
                return c[e] - t - n - 22
            },
            _toggleControlClass: function(e, t) {
                e < t ? this.$el.closest(this._selector("elements_container")).toggleClass(this._class("aligned_controls"), !0) : this.$el.closest(this._selector("elements_container")).toggleClass(this._class("aligned_controls"), !1)
            },
            _changeCorrectName: function(e) {
                var t = e < 15 ? 15 : e
                  , n = (0,
                a.getShortText)(this.file_name_text, t);
                this.$el.text(n)
            }
        });
        var p = "../build/transpiled/interface/controls/file_name";
        window.define(p, (function() {
            var e = "undefined"
              , n = typeof t === e ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === e ? typeof module === e ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : t;
            return n && n.default || n
        }
        )),
        window.require([p])
    }
    ,
    334710: (e, t, n) => {
        "use strict";
        n.r(t),
        n.d(t, {
            default: () => u
        });
        var i = n(55188)
          , o = n.n(i);
        function s(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(e, i.key, i)
            }
        }
        function r(e, t, n) {
            return r = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(e, t, n) {
                var i = function(e, t) {
                    for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = a(e)); )
                        ;
                    return e
                }(e, t);
                if (i) {
                    var o = Object.getOwnPropertyDescriptor(i, t);
                    return o.get ? o.get.call(n || e) : o.value
                }
            }
            ,
            r(e, t, n || e)
        }
        function a(e) {
            return a = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            ,
            a(e)
        }
        function l(e, t) {
            return l = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                e
            }
            ,
            l(e, t)
        }
        function c(e) {
            var t = function() {
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
                var n, i = a(e);
                if (t) {
                    var o = a(this).constructor;
                    n = Reflect.construct(i, arguments, o)
                } else
                    n = i.apply(this, arguments);
                return function(e, t) {
                    return !t || "object" != ((n = t) && "undefined" != typeof Symbol && n.constructor === Symbol ? "symbol" : typeof n) && "function" != typeof t ? function(e) {
                        if (void 0 === e)
                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return e
                    }(e) : t;
                    var n
                }(this, n)
            }
        }
        const u = function(e) {
            !function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && l(e, t)
            }(u, e);
            var t, n, i = c(u);
            function u() {
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, u),
                i.apply(this, arguments)
            }
            return t = u,
            n = [{
                key: "initialize",
                value: function() {
                    r(a(u.prototype), "initialize", this).call(this, arguments)
                }
            }, {
                key: "_getCursorPosAfterFormat",
                value: function(e) {
                    var t, n = this._getInputValue(), i = n.length, o = 0, s = 0;
                    if (e === this._value.length)
                        return i;
                    for (t = i - 1; t >= 0; t--)
                        if (s++,
                        t === i - 1 || "-" !== n[t] && " " !== n[t]) {
                            if (e === o)
                                break;
                            o++
                        }
                    return s - 1
                }
            }, {
                key: "_getFormattingCharsCount",
                value: function(e) {
                    var t = this._getInputValue()
                      , n = t.slice(t.length - e, t.length).match(this._getFormattingCharsRegex());
                    return n && n.length || 0
                }
            }, {
                key: "_getFormattingCharsRegex",
                value: function() {
                    throw new Error("_getFormattingCharsRegex must be overrided")
                }
            }, {
                key: "_fixCursorPosOnKeydown",
                value: function(e) {
                    var t = this._getInputEl()
                      , n = t.value
                      , i = e.keyCode;
                    this._end_pos = n.length - t.selectionEnd,
                    this._start_pos = n.length - t.selectionStart,
                    this._ignore_next_cursor_setting = !1,
                    this._proxyInputEvent(e),
                    !this._isRawValueValid() || t.disabled || t.readOnly || (e.ctrlKey || e.metaKey) && 65 === i || 67 === i || 82 === i || (i > 47 && i < 58 || 32 === i || i > 64 && i < 91 || i > 95 && i < 112 || i > 185 && i < 193 || i > 218 && i < 223 || 8 === i && n.length !== this._end_pos) && (this._end_pos -= this._getFormattingCharsCount(this._end_pos),
                    this._start_pos -= this._getFormattingCharsCount(this._start_pos),
                    this._setInputValue(this._value),
                    this._setCursorPos(this._end_pos, this._start_pos),
                    this._ignore_next_cursor_setting = !1)
                }
            }, {
                key: "_setCursorPos",
                value: function(e, t) {
                    if (!this._ignore_next_cursor_setting) {
                        var n = this._getInputEl()
                          , i = n.value;
                        if (e = i.length - (e || this._end_pos),
                        t = o().isUndefined(t) ? e : i.length - t,
                        n.createTextRange) {
                            var s = n.createTextRange();
                            t === e ? s.move("character", e) : (s.moveStart("character", t),
                            s.moveEnd("character", e)),
                            s.select()
                        } else
                            n.setSelectionRange && n.setSelectionRange(t, e)
                    }
                    this._ignore_next_cursor_setting = !0
                }
            }, {
                key: "_proxyInputEvent",
                value: function() {}
            }, {
                key: "_getInputEl",
                value: function() {
                    return this._elem("input").get(0)
                }
            }, {
                key: "_getInputValue",
                value: function() {
                    return this._elem("input").val()
                }
            }, {
                key: "_getRawValue",
                value: function() {
                    return this._elem("raw").val()
                }
            }, {
                key: "_setInputValue",
                value: function(e) {
                    this._elem("input").val(e)
                }
            }, {
                key: "_setRawValue",
                value: function(e) {
                    this._elem("raw").val(e)
                }
            }],
            n && s(t.prototype, n),
            u
        }(n(340958).default);
        var d = "../build/transpiled/interface/controls/formatters/format_control_interface";
        window.define(d, (function() {
            var e = "undefined"
              , n = typeof t === e ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === e ? typeof module === e ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : t;
            return n && n.default || n
        }
        )),
        window.require([d])
    }
    ,
    291516: (e, t, n) => {
        "use strict";
        n.r(t),
        n.d(t, {
            default: () => _
        });
        var i = n(55188)
          , o = n.n(i)
          , s = n(334710)
          , r = n(880774)
          , a = n(678640)
          , l = n(853073);
        function c(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(e, i.key, i)
            }
        }
        function u(e, t, n) {
            return u = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(e, t, n) {
                var i = function(e, t) {
                    for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = d(e)); )
                        ;
                    return e
                }(e, t);
                if (i) {
                    var o = Object.getOwnPropertyDescriptor(i, t);
                    return o.get ? o.get.call(n || e) : o.value
                }
            }
            ,
            u(e, t, n || e)
        }
        function d(e) {
            return d = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            ,
            d(e)
        }
        function h(e, t) {
            return h = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                e
            }
            ,
            h(e, t)
        }
        function p(e) {
            var t = function() {
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
                var n, i = d(e);
                if (t) {
                    var o = d(this).constructor;
                    n = Reflect.construct(i, arguments, o)
                } else
                    n = i.apply(this, arguments);
                return function(e, t) {
                    return !t || "object" != ((n = t) && "undefined" != typeof Symbol && n.constructor === Symbol ? "symbol" : typeof n) && "function" != typeof t ? function(e) {
                        if (void 0 === e)
                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return e
                    }(e) : t;
                    var n
                }(this, n)
            }
        }
        var f = function(e) {
            !function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && h(e, t)
            }(f, e);
            var t, n, i, s = p(f);
            function f() {
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, f),
                s.apply(this, arguments)
            }
            return t = f,
            n = [{
                key: "_classes",
                value: function() {
                    return {}
                }
            }, {
                key: "_selectors",
                value: function() {
                    return {
                        raw: 'input[type="hidden"]',
                        input: 'input[type="text"]',
                        is_suggest_needed: ".js-control--suggest--list .control--suggest--list--item"
                    }
                }
            }, {
                key: "events",
                value: function() {
                    var e = {
                        'click input[type="text"]': "_stopPropagationOnClick",
                        'change input[type="hidden"]': "_onRawInputOutsideChange",
                        'change input[type="text"]': "_proxyInputEvent",
                        'focus input[type="text"]': "_proxyInputEvent",
                        'blur input[type="text"]': "_proxyInputEvent"
                    };
                    return AMOCRM.is_touch_device ? o().extend(e, {
                        'focus input[type="text"]': "_setRawValueOnFocusIpad",
                        'blur input[type="text"]': "_setFormattedValueOnBlurIpad",
                        'input input[type="text"]': "_setValueOnInputIpad"
                    }) : o().extend(e, {
                        'copy input[type="text"]': "_setRawClipboardOnCopy",
                        'keydown input[type="text"]': "_fixCursorPosOnKeydown",
                        'input input[type="text"]': "_formatOnInput"
                    }),
                    e
                }
            }, {
                key: "initialize",
                value: function() {
                    u(d(f.prototype), "initialize", this).apply(this, arguments),
                    this._value = this._getRawValue() || "",
                    this._value && !this._getInputValue() && this._onRawInputOutsideChange()
                }
            }, {
                key: "_setRawValueOnFocusIpad",
                value: function(e) {
                    this._setInputValue(this._value),
                    this._proxyInputEvent(e)
                }
            }, {
                key: "_setFormattedValueOnBlurIpad",
                value: function(e) {
                    this._onRawInputOutsideChange(),
                    this._proxyInputEvent(e)
                }
            }, {
                key: "_setValueOnInputIpad",
                value: function(e) {
                    this._value = this._getInputValue(),
                    this._setRawValue(this._value),
                    this._proxyInputEvent(e)
                }
            }, {
                key: "_stopPropagationOnClick",
                value: function(e) {
                    this._findElem("is_suggest_needed").length && e.stopPropagation()
                }
            }, {
                key: "_onRawInputOutsideChange",
                value: function() {
                    var e = this._getRawValue();
                    this._value = e,
                    this._setInputValue(e),
                    this._format(e)
                }
            }, {
                key: "_setRawClipboardOnCopy",
                value: function(e) {
                    var t = this._getInputEl();
                    t.value === t.value.substring(t.selectionStart, t.selectionEnd) && (0,
                    l.copyToClipboard)(e, this._value)
                }
            }, {
                key: "_getFormattingCharsRegex",
                value: function() {
                    return /[\s-()]/g
                }
            }, {
                key: "_isRawValueValid",
                value: function() {
                    return (0,
                    a.isPhoneValid)(this._value)
                }
            }, {
                key: "_format",
                value: function(e) {
                    var t;
                    return !!this._isRawValueValid() && (e !== (t = (0,
                    r.phone)(e)) && this._setInputValue(t),
                    !0)
                }
            }, {
                key: "_formatOnInput",
                value: function() {
                    var e = this._getInputEl().value;
                    this._value = e,
                    this._format(e) && (this._end_pos = this._getCursorPosAfterFormat(this._end_pos)),
                    this._setCursorPos(this._end_pos),
                    this._elem("raw").val(this._value).trigger("input")
                }
            }, {
                key: "_proxyInputEvent",
                value: function(e) {
                    this._elem("raw").trigger(o().pick(e, "type", "keyCode", "which"))
                }
            }],
            i = [{
                key: "controlClassName",
                get: function() {
                    return "js-control-phone"
                }
            }],
            n && c(t.prototype, n),
            i && c(t, i),
            f
        }(s.default);
        f.extend(f);
        const _ = f;
        var m = "../build/transpiled/interface/controls/formatters/phone";
        window.define(m, (function() {
            var e = "undefined"
              , n = typeof t === e ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === e ? typeof module === e ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : t;
            return n && n.default || n
        }
        )),
        window.require([m])
    }
    ,
    686954: (e, t, n) => {
        "use strict";
        n.r(t),
        n.d(t, {
            default: () => c
        });
        var i = n(55188)
          , o = n.n(i)
          , s = n(161320)
          , r = n.n(s)
          , a = n(321844)
          , l = 12 === APP.system.format.time ? 125 : 85;
        const c = a.Numeric.extend({
            controlClassName: "js-control-format-time",
            check_regex: /^([0-9][0-9]?:?[0-5]?[0-9]?)\s?(AM?|PM?)?\s?-?\s?([0-9]?[0-9]?:?[0-5]?[0-9]?)?\s?(AM?|PM?)?$/,
            time_regex: /^([0-9][0-9]:?[0-5][0-9])\s?(AM?|PM?)?$/,
            events: o().extend({}, o().result(a.Numeric.prototype, "events", {}), {
                focus: "rememberValueOnFocus",
                blur: "validateValueOnBlur",
                "controls:ajust": "_ajustWidth"
            }),
            initialize: function() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                    t[n] = arguments[n];
                a.Numeric.prototype.initialize.apply(this, t),
                this._original_value = this.$el.val(),
                this._ajustWidth()
            },
            rememberValueOnFocus: function() {
                this._original_value = this.$el.val()
            },
            validateValueOnBlur: function() {
                var e, t, n = APP.system.format.date.time, i = this.$el.val() || "", o = i.split(/\s?-\s?/), s = !1, a = [];
                i && (e = o[0] && r()(o[0], n),
                t = o[1] && r()(o[1], n),
                e && e.isValid() ? a.push(e.format(n)) : s = !0,
                t && (t.isValid() && e.isBefore(t) ? a.push(t.format(n)) : s = !0),
                this.$el.val(!0 === s ? this._original_value : a.join(" - ")).trigger("input")),
                this._ajustWidth()
            },
            _prepareValue: function(e) {
                var t, n, i, o = APP.system.format.date.time, s = e;
                return e.length >= 4 && (n = (t = e.split(/\s?-\s?/))[0] && this.time_regex.test(t[0]) && r()(t[0], o),
                i = t[1] && this.time_regex.test(t[1]) && r()(t[1], o),
                n && n.isValid() && ((e = n.format(o)) !== t[0].trim() || i ? e += " - " : e = s),
                i && i.isValid() && (n && n.isValid() && n.isBefore(i) ? e += i.format(o) : e = s.trim()),
                e === this._prev_value && (e = s.trim())),
                this._ajustWidth(),
                a.Numeric.prototype._prepareValue.call(this, e.split(/\s?-\s?/).join(" - "))
            },
            _ajustWidth: function() {
                var e = this.$el.val()
                  , t = e.split(/\s?-\s?/)
                  , n = t[0] && this.time_regex.test(t[0]) && r()(t[0], APP.system.format.date.time);
                e.length ? e.length >= 4 || n && n.isValid() ? this.$el.css("width", l) : this.$el.css("width", 38) : this.$el.css("width", 64)
            }
        });
        var u = "../build/transpiled/interface/controls/formatters/time";
        window.define(u, (function() {
            var e = "undefined"
              , n = typeof t === e ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === e ? typeof module === e ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : t;
            return n && n.default || n
        }
        )),
        window.require([u])
    }
    ,
    342697: (e, t, n) => {
        "use strict";
        n.r(t),
        n.d(t, {
            default: () => b
        });
        var i = n(55188)
          , o = n.n(i)
          , s = n(340958)
          , r = n(678640)
          , a = n(577486);
        function l(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, i = new Array(t); n < t; n++)
                i[n] = e[n];
            return i
        }
        function c(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(e, i.key, i)
            }
        }
        function u(e, t, n) {
            return u = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(e, t, n) {
                var i = function(e, t) {
                    for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = d(e)); )
                        ;
                    return e
                }(e, t);
                if (i) {
                    var o = Object.getOwnPropertyDescriptor(i, t);
                    return o.get ? o.get.call(n || e) : o.value
                }
            }
            ,
            u(e, t, n || e)
        }
        function d(e) {
            return d = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            ,
            d(e)
        }
        function h(e, t) {
            return h = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                e
            }
            ,
            h(e, t)
        }
        function p(e, t) {
            return function(e) {
                if (Array.isArray(e))
                    return e
            }(e) || function(e, t) {
                var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (null != n) {
                    var i, o, s = [], r = !0, a = !1;
                    try {
                        for (n = n.call(e); !(r = (i = n.next()).done) && (s.push(i.value),
                        !t || s.length !== t); r = !0)
                            ;
                    } catch (e) {
                        a = !0,
                        o = e
                    } finally {
                        try {
                            r || null == n.return || n.return()
                        } finally {
                            if (a)
                                throw o
                        }
                    }
                    return s
                }
            }(e, t) || function(e, t) {
                if (e) {
                    if ("string" == typeof e)
                        return l(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === n && e.constructor && (n = e.constructor.name),
                    "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? l(e, t) : void 0
                }
            }(e, t) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        function f(e) {
            var t = function() {
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
                var n, i = d(e);
                if (t) {
                    var o = d(this).constructor;
                    n = Reflect.construct(i, arguments, o)
                } else
                    n = i.apply(this, arguments);
                return function(e, t) {
                    return !t || "object" != ((n = t) && "undefined" != typeof Symbol && n.constructor === Symbol ? "symbol" : typeof n) && "function" != typeof t ? function(e) {
                        if (void 0 === e)
                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return e
                    }(e) : t;
                    var n
                }(this, n)
            }
        }
        var _ = "mac" === n(889433).default.os ? 117 : 46
          , m = new a.UnsafeRegExp("^".concat(/(([0-2]?[0-3])|((0|1)?[0-9]))?/.source, ":").concat(/([0-5]?[0-9])?/.source).concat(/(AM|PM|P|A|M)?/gi.source, "$"),"i")
          , g = function(e) {
            return (0,
            r.getDigitsOnly)(e).length
        }
          , v = function(e) {
            switch (g(e)) {
            case 0:
                return "00" + e;
            case 1:
                return "0" + e;
            default:
                return e
            }
        }
          , y = function(e) {
            !function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && h(e, t)
            }(r, e);
            var t, n, i, s = f(r);
            function r() {
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, r),
                s.apply(this, arguments)
            }
            return t = r,
            n = [{
                key: "_classes",
                value: function() {
                    return {}
                }
            }, {
                key: "_selectors",
                value: function() {
                    return {}
                }
            }, {
                key: "events",
                value: function() {
                    return {
                        keydown: "handleKeyDown",
                        blur: "handleBlur",
                        input: "handleInput",
                        "controls:change": "handleInput"
                    }
                }
            }, {
                key: "initialize",
                value: function() {
                    u(d(r.prototype), "initialize", this).call(this, arguments),
                    this._value = this._getInputValue()
                }
            }, {
                key: "destroy",
                value: function() {
                    this.$el.off(),
                    u(d(r.prototype), "destroy", this).call(this, arguments)
                }
            }, {
                key: "_format",
                value: function(e) {
                    var t = function(e) {
                        return e.replace(/:/gi, "")
                    }(e)
                      , n = g(t);
                    if (n > 4)
                        this.resetValue();
                    else {
                        var i = p(e.split(":"), 2)
                          , o = i[0]
                          , s = i[1]
                          , r = void 0 === s ? "" : s
                          , a = 2
                          , l = g(o)
                          , c = g(r);
                        switch (!0) {
                        case 1 === n && 1 === l:
                        case 2 === n && 1 === l:
                        case 3 === n && 1 === l:
                        case 3 === n && 0 === l:
                            a = 1;
                            break;
                        case 0 === n:
                        case 1 === n && 1 === c:
                        case 2 === n && 2 === c:
                            a = 0
                        }
                        var u = [t.slice(0, a), t.slice(a)].join(":");
                        if (this._isTimeValid(u)) {
                            var d = this.cursorPosition - 1
                              , h = e.indexOf(":")
                              , f = d === u.indexOf(":") ? h : d;
                            this.setValue(u);
                            var _ = f + 1;
                            _ !== this.cursorPosition && this._setCursorPosition(_)
                        } else
                            this.resetValue()
                    }
                }
            }, {
                key: "resetValue",
                value: function() {
                    var e = this.cursorPosition;
                    this.setValue(this._prevValue),
                    this._setCursorPosition(e - 1)
                }
            }, {
                key: "setValue",
                value: function(e) {
                    this._value = e,
                    this._setInputValue(e)
                }
            }, {
                key: "handleInput",
                value: function() {
                    var e = this._getInputValue();
                    this._prevValue = this._value,
                    this._value = e,
                    o().isEmpty(e) || this._format(e)
                }
            }, {
                key: "handleKeyDown",
                value: function(e) {
                    var t = e.keyCode
                      , n = this._getInputValue().indexOf(":");
                    switch (!0) {
                    case 8 === t && n === this.cursorPosition - 1:
                        this._moveCursorPos(-1);
                        break;
                    case t === _ && n === this.cursorPosition:
                        this._moveCursorPos(1)
                    }
                }
            }, {
                key: "handleBlur",
                value: function() {
                    var e = this._getInputValue();
                    if (4 !== g(e)) {
                        var t = p(e.split(":"), 2)
                          , n = t[0]
                          , i = t[1]
                          , o = void 0 === i ? "" : i
                          , s = [n = v(n), o = v(o)].join(":");
                        this.setValue(s)
                    }
                }
            }, {
                key: "cursorPosition",
                get: function() {
                    return this._getInputEl().selectionStart
                }
            }, {
                key: "_moveCursorPos",
                value: function(e) {
                    var t = this.cursorPosition + e;
                    this._setCursorPosition(t)
                }
            }, {
                key: "_setCursorPosition",
                value: function(e) {
                    var t = this._getInputEl();
                    if (t.createTextRange) {
                        var n = t.createTextRange();
                        n.move("character", e),
                        n.select()
                    } else
                        t.setSelectionRange && t.setSelectionRange(e, e)
                }
            }, {
                key: "_getInputEl",
                value: function() {
                    return this.el
                }
            }, {
                key: "_getInputValue",
                value: function() {
                    return this.$el.val()
                }
            }, {
                key: "_setInputValue",
                value: function(e) {
                    this.$el.val(e)
                }
            }, {
                key: "_isTimeValid",
                value: function(e) {
                    return m.test(e)
                }
            }],
            i = [{
                key: "controlClassName",
                get: function() {
                    return "js-control-time-formatter"
                }
            }],
            n && c(t.prototype, n),
            i && c(t, i),
            r
        }(s.default);
        y.extend(y);
        const b = y;
        var w = "../build/transpiled/interface/controls/formatters/time_formatter";
        window.define(w, (function() {
            var e = "undefined"
              , n = typeof t === e ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === e ? typeof module === e ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : t;
            return n && n.default || n
        }
        )),
        window.require([w])
    }
    ,
    648699: (e, t, n) => {
        "use strict";
        n.r(t),
        n.d(t, {
            default: () => f
        });
        var i = n(55188)
          , o = n.n(i)
          , s = n(460159)
          , r = n.n(s)
          , a = n(880774)
          , l = n(811707)
          , c = n(340958)
          , u = n(661533);
        function d(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, i = new Array(t); n < t; n++)
                i[n] = e[n];
            return i
        }
        var h = !1
          , p = ["font-weight", "font-size", "font-family", "line-height", "word-break", "letter-spacing", "padding", "padding-left", "border", "border-top", "border-right", "border-bottom", "border-left", "box-sizing"];
        n(181743),
        u(document).on("mouseup", (function() {
            h = !1
        }
        ));
        const f = c.default.extend({
            controlClassName: "js-control-fullname",
            lastNamePostfix: "plus",
            _selectors: function() {
                return {
                    fullname: ".control-fullname__single",
                    placeholder: ".control-fullname__placeholder"
                }
            },
            _classes: function() {
                return {
                    autosized: "control-fullname_autosized",
                    focused: "control-fullname_focused",
                    placeholdered: "control-fullname_placeholdered",
                    separated: "control-fullname__separated",
                    separated_firstname: "control-fullname__separated_firstname",
                    separated_lastname: "control-fullname__separated_lastname",
                    separated_nomargin: "control-fullname__separated_nomargin",
                    separated_empty: "control-fullname__separated_empty"
                }
            },
            events: function() {
                var e = {
                    click: "_onMainWrapperClick"
                };
                return e["input ".concat(this._selector("fullname"))] = "_onInputUpdatePlaceholder",
                e["change ".concat(this._selector("fullname"))] = "_onInputUpdatePlaceholder",
                e["controls:change ".concat(this._selector("fullname"))] = "_onInputUpdatePlaceholder",
                e["input ".concat(this._selector("separated"))] = "_onSeparatedInputClear",
                e["mousedown ".concat(this._selector("separated"))] = "_onSeparatedInputMouseDown",
                e["keydown ".concat(this._selector("separated"))] = "_onSeparatedInputKeyDown",
                e["focus .text-input"] = "_onInputFocus",
                e["blur .text-input"] = "_onInputBlur",
                e
            },
            initialize: function() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                    t[n] = arguments[n];
                var i = this.$(":input:focus");
                c.default.prototype.initialize.apply(this, t),
                this._focused = i.length,
                this._autosized = this._hasClass("autosized"),
                this._is_fullname = this._elem("fullname").length,
                this._is_fullname ? this._initSingleFullName() : this._initSeparatedFullName(),
                this._focused && this._onInputFocus({
                    currentTarget: i.get(0)
                })
            },
            destroy: function() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                    t[n] = arguments[n];
                this._elem("fullname").trigger("autosize.destroy"),
                c.default.prototype.destroy.apply(this, t)
            },
            _onMainWrapperClick: function(e) {
                u(e.target).is(":input") || u(e.target).is(":has(:focus)") || this.$(":input:visible:first").focus()
            },
            _onInputUpdatePlaceholder: function() {
                var e = []
                  , t = this._elem("fullname").val();
                t.trim() && (e = 1 === t.trim().split(" ").length ? ['<span style="visibility: hidden">'.concat(o().escape(t), "</span>"), APP.constant("account").is_contact_name_display_order_first ? (0,
                a.i18n)("Last name") : (0,
                a.i18n)("First name")] : []),
                this._elem("placeholder").html(e.join(t.indexOf(" ") > 0 ? "" : "&nbsp;")),
                this._toggleClass("placeholdered", e.length > 0)
            },
            _onSeparatedInputClear: function(e) {
                var t, n = u(e.currentTarget), i = o().compact(this._elem("separated").map((function(e, t) {
                    return (t.value || "").trim()
                }
                )).toArray());
                n.index() > 0 && this._updateFirstInputMargin(),
                i.length || (t = u(r()({
                    ref: "/tmpl/controls/fullname/index.twig"
                }).render(this._getRenderParams())),
                n.trigger("change"),
                this.$el.replaceWith(t),
                t.find(":input").focus())
            },
            _getRenderParams: function() {
                return {
                    input_type: this.$el.attr("data-rerender-input-type"),
                    name: this.$el.attr("data-rerender-name"),
                    input_class_name: this.$el.attr("data-rerender-input-class"),
                    placeholder: this.$el.attr("data-rerender-placeholder"),
                    placeholder_color: this.$el.attr("data-rerender-placeholder-color"),
                    autosized: this.$el.attr("data-rerender-autosized")
                }
            },
            _onInputFocus: function(e) {
                this._focused = !0,
                this._addClass("focused"),
                this._updateFirstInputMargin(),
                this._autosized && u(e.currentTarget).trigger("autosize:important")
            },
            _onInputBlur: function(e) {
                var t = u(e.currentTarget)
                  , n = h;
                h = !1,
                this._is_fullname || t.toggleClass(this._class("separated_empty"), !t.val()),
                n || (this._focused = !1,
                this._removeClass("focused"),
                this._is_fullname || this._updateFirstInputMargin(),
                this._autosized && t.parent().find(":input").trigger("autosize:important"))
            },
            _onSeparatedInputMouseDown: function() {
                h = !0
            },
            _onSeparatedInputKeyDown: function(e) {
                9 !== e.keyCode || e.shiftKey || 0 !== u(e.currentTarget).index() || (h = !0)
            },
            _initSeparatedFullName: function() {
                var e, t = this;
                o().isNaN(parseInt(this.$el.attr("data-comfort-zone"))) || (e = parseInt(this.$el.attr("data-comfort-zone"))),
                this._elem("separated").autosizeInput({
                    appendValue: function() {
                        return u(this).index() > 0 && t._focused ? t.lastNamePostfix : ""
                    },
                    comfortZone: e
                })
            },
            _initSingleFullName: function() {
                var e, t = this;
                o().isNaN(parseInt(this.$el.attr("data-comfort-zone"))) || (e = parseInt(this.$el.attr("data-comfort-zone"))),
                this._elem("fullname").is("textarea") ? (this._elem("fullname").addClass("autosized").css("width", "calc(100% + ".concat(l.scrollBarWidth + 1, "px)")),
                this._elem("fullname").autosize({
                    noBoxOffset: !0
                })) : this._autosized && this._elem("fullname").autosizeInput({
                    appendValue: function() {
                        var e = o().compact(t._elem("fullname").val().split(" "));
                        return t._focused ? 1 === e.length ? " ".concat((0,
                        a.i18n)("Last name")) : t.lastNamePostfix : ""
                    },
                    comfortZone: e
                }),
                this._initPlaceholder()
            },
            _initPlaceholder: function() {
                var e, t, n = this._elem("fullname").get(0), i = window.getComputedStyle(n);
                this._elem("placeholder").css("opacity", 1).css((e = o()).pick.apply(e, (t = [i].concat(p),
                function(e) {
                    if (Array.isArray(e))
                        return d(e)
                }(t) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"])
                        return Array.from(e)
                }(t) || function(e, t) {
                    if (e) {
                        if ("string" == typeof e)
                            return d(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        return "Object" === n && e.constructor && (n = e.constructor.name),
                        "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? d(e, t) : void 0
                    }
                }(t) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()))).css("border-color", "transparent"),
                this._onInputUpdatePlaceholder()
            },
            _updateFirstInputMargin: function() {
                this.$("".concat(this._selector("separated"), ":first")).toggleClass(this._class("separated_nomargin"), !this._focused && !this.$("".concat(this._selector("separated"), ":last")).val())
            }
        });
        var _ = "../build/transpiled/interface/controls/fullname/index";
        window.define(_, (function() {
            var e = "undefined"
              , n = typeof t === e ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === e ? typeof module === e ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : t;
            return n && n.default || n
        }
        )),
        window.require([_])
    }
    ,
    340958: (e, t, n) => {
        "use strict";
        n.r(t),
        n.d(t, {
            default: () => C
        });
        var i, o = n(661533), s = n.n(o), r = n(55188), a = n.n(r), l = n(521466), c = {}, u = [], d = "__directives__", h = "", p = !0, f = {
            childList: !0,
            subtree: !0,
            attributes: !0,
            attributeFilter: ["class"]
        };
        function _(e, t) {
            return (e.matches || e.matchesSelector || e.msMatchesSelector || e.mozMatchesSelector || e.webkitMatchesSelector || e.oMatchesSelector).call(e, t)
        }
        function m(e) {
            if (e)
                return function() {
                    for (var t = arguments.length, n = new Array(t), i = 0; i < t; i++)
                        n[i] = arguments[i];
                    try {
                        e.apply(this, n)
                    } catch (e) {
                        console.error(e, {
                            arguments: n
                        }),
                        setTimeout((function() {
                            throw e
                        }
                        ), 0)
                    }
                }
        }
        function g(e, t, n) {
            var i = t[d][e.name];
            return i || (i = t[d][e.name] = {
                type: n,
                directive: e,
                scope: {}
            }),
            i
        }
        function v(e, t, n) {
            if (t[d]) {
                if (t[d][e.name])
                    return
            } else
                Object.defineProperty(t, d, {
                    value: {}
                });
            var i = g(e, t, n);
            e.onload && e.onload.call(i.scope, t)
        }
        function y(e, t) {
            var n = g(e, t);
            t[d] && t[d][e.name] && (e.onunload && e.onunload.call(n.scope, t),
            delete t[d][e.name])
        }
        function b(e) {
            var t = [];
            e && e.tagName && (t = Array.prototype.slice.call(e.querySelectorAll(h)),
            _(e, h) && t.unshift(e),
            a().each(t, (function(e) {
                !function(e) {
                    e[d] && a().each(e[d], (function(t) {
                        y(t.directive, e)
                    }
                    ))
                }(e)
            }
            )))
        }
        function w(e) {
            var t, n = [];
            e.tagName && ((t = e) === document.body || document.body.contains(t)) && h && (n = Array.prototype.slice.call(e.querySelectorAll(h)),
            _(e, h) && n.unshift(e),
            a().each(n, (function(e) {
                a().each(u, (function(t) {
                    e.classList && e.classList.contains(t.name) && v(t, e, "class")
                }
                ))
            }
            )))
        }
        function k() {
            p && (w(document.body),
            i.observe(document.body, f),
            p = !1)
        }
        s()((function() {
            i = new MutationObserver((function(e) {
                a().each(e, (function(e) {
                    var t, n, i;
                    switch (e.type) {
                    case "childList":
                        a().each(e.addedNodes, w),
                        a().each(e.removedNodes, b);
                        break;
                    case "attributes":
                        t = e.target,
                        "class" === e.attributeName && (n = (e.oldValue || "").toLowerCase().split(" "),
                        i = (t.getAttribute("class") || "").toLowerCase().split(" "),
                        a().chain(n).filter((function(e) {
                            return -1 === i.indexOf(e)
                        }
                        )).each((function(e) {
                            c[e] && y(c[e], t)
                        }
                        )),
                        a().chain(i).filter((function(e) {
                            return -1 === n.indexOf(e)
                        }
                        )).each((function(e) {
                            c[e] && v(c[e], t, "class")
                        }
                        )))
                    }
                }
                ))
            }
            )),
            k(),
            s()(document).on("controls:check-loaded", (function(e, t) {
                w(t)
            }
            ))
        }
        ));
        var P = l.default.extend({
            controlClassName: "",
            _maxControlBodyZIndex: 1e3,
            _$body_control: null,
            initialize: function() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                    t[n] = arguments[n];
                this.$el.data("view", this),
                l.default.prototype.initialize.apply(this, t)
            },
            delegateEvents: function() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                    t[n] = arguments[n];
                var i = l.default.prototype.delegateEvents.apply(this, t);
                return this.$el.trigger("controls:view:init"),
                i
            },
            destroy: function() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                    t[n] = arguments[n];
                return this.$el.trigger("controls:view:destroy"),
                l.default.prototype.destroy.apply(this, t)
            },
            _toggleBodyOverlay: function(e, t, n) {
                var i = s()('<div class="default-overlay control-body-overlay" id="control_overlay"></div>');
                if (n = n || {},
                !1 !== e)
                    return this.__overlay_hide = a().bind((function(n) {
                        var i = s()("#control_overlay");
                        if (!1 !== n && !1 === (t || a().noop).call(this))
                            return !1;
                        i.length && (s()("#control_overlay").off().trigger("overlay:hide", [{
                            instantly: !0
                        }]),
                        this.$el.append(e))
                    }
                    ), this),
                    this._$body.append(i),
                    this._$body.append(e),
                    n.class_name && i.addClass(n.class_name),
                    i.on("click", a().bind((function(e) {
                        e.stopPropagation(),
                        !1 !== this.__overlay_hide() && delete this.__overlay_hide
                    }
                    ), this)).trigger("overlay:show"),
                    this.__overlay_hide;
                a().isFunction(this.__overlay_hide) && (this.__overlay_hide(!1),
                delete this.__overlay_hide)
            }
        });
        P.extend = function(e) {
            var t, n, i, o = l.default.extend.apply(this, arguments);
            return e.controlClassName && (n = {
                load: function(e) {
                    this.view = new o({
                        el: e
                    })
                },
                unload: function() {
                    this.view.destroy()
                }
            },
            (i = (t = e.controlClassName).toLowerCase())in c || (c[i] = {
                name: i,
                originalName: t,
                onload: m(n.load),
                onunload: m(n.unload)
            },
            u.push(c[i]),
            h += "".concat(h ? "," : "", ".").concat(t),
            document.body && w(document.body))),
            o
        }
        ,
        P.pause = function() {
            i && !p && (i.disconnect(),
            p = !0)
        }
        ,
        P.resume = k,
        P.forceDirectiveLoad = function(e, t) {
            var n = c[e];
            n && v(n, t, "class")
        }
        ;
        const C = P;
        var x = "../build/transpiled/interface/controls/index";
        window.define(x, (function() {
            var e = "undefined"
              , n = typeof t === e ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === e ? typeof module === e ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : t;
            return n && n.default || n
        }
        )),
        window.require([x])
    }
    ,
    648090: (e, t, n) => {
        "use strict";
        n.r(t),
        n.d(t, {
            default: () => l
        });
        var i = n(55188)
          , o = n.n(i)
          , s = n(777464)
          , r = n(340958)
          , a = n(661533);
        const l = r.default.extend({
            controlClassName: "js-control-legal-entity",
            events: function() {
                var e = {
                    "input input": "stopPropagationOnDefaultSuggest",
                    "focus input": "_onFocused",
                    "blur input": "_onBlurred"
                };
                return e["input ".concat(this._selector("name"))] = "_onValueChanged",
                e["input ".concat(this._selector("vat"))] = "_onValueChanged",
                e["input ".concat(this._selector("kpp"))] = "_onValueChanged",
                e["input ".concat(this._selector("ogrn"))] = "_onValueChanged",
                e["input ".concat(this._selector("mfo"))] = "_onValueChanged",
                e["input ".concat(this._selector("oked"))] = "_onValueChanged",
                e["input ".concat(this._selector("director"))] = "_onValueChanged",
                e["input ".concat(this._selector("bank_account_number"))] = "_onValueChanged",
                e["input ".concat(this._selector("address"))] = "_onValueChanged",
                e["input ".concat(this._selector("real_address"))] = "_onValueChanged",
                e["suggest:changed ".concat(this._selector("name"))] = "_onItemChoosed",
                e["suggest:changed ".concat(this._selector("vat"))] = "_onItemChoosed",
                e["suggest:changed ".concat(this._selector("kpp"))] = "_onItemChoosed",
                e["suggest:changed ".concat(this._selector("ogrn"))] = "_onItemChoosed",
                e["suggest:changed ".concat(this._selector("mfo"))] = "_onItemChoosed",
                e["suggest:changed ".concat(this._selector("oked"))] = "_onItemChoosed",
                e["suggest:changed ".concat(this._selector("director"))] = "_onItemChoosed",
                e["suggest:changed ".concat(this._selector("bank_account_number"))] = "_onItemChoosed",
                e["suggest:changed ".concat(this._selector("address"))] = "_onItemChoosed",
                e["suggest:changed ".concat(this._selector("real_address"))] = "_onItemChoosed",
                o().extend({}, o().result(r.default.prototype, "events", {}), e)
            },
            _classes: function() {
                return {
                    name: "js-legal-entity-name",
                    vat: "js-legal-entity-vat",
                    kpp: "js-legal-entity-kpp",
                    ogrn: "js-legal-entity-ogrn",
                    mfo: "js-legal-entity-mfo",
                    oked: "js-legal-entity-oked",
                    director: "js-legal-entity-director",
                    bank_account_number: "js-legal-entity-bank_account_number",
                    bank_code: "js-legal-entity-bank_code",
                    type: "js-legal-entity-type",
                    address: "js-legal-entity-address",
                    real_address: "js-legal-entity-real_address"
                }
            },
            initialize: function() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                    t[n] = arguments[n];
                r.default.prototype.initialize.apply(this, t),
                this._cache = {},
                this.$("input:focus").length && this._onFocused()
            },
            destroy: function() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                    t[n] = arguments[n];
                this._cache = {},
                r.default.prototype.destroy.apply(this, t)
            },
            stopPropagationOnDefaultSuggest: function(e) {
                e.stopPropagation()
            },
            _onValueChanged: o().debounce((function(e) {
                var t = a(e.currentTarget)
                  , n = t.closest(".control--suggest").find(".js-control--suggest--list")
                  , i = t.val().trim()
                  , s = this.$el.attr("data-search-in")
                  , r = !1;
                !s && t.hasClass(this._class("name")) || (t.attr("data-val", i),
                parseInt(s) > 0 ? r = this.makeCatalogRequest({
                    catalog_id: s,
                    term: i,
                    force: !i && "focus" === e.type
                }) : i && i.length > 2 && "ru" === APP.lang_id && (r = this.makeRequest({
                    query: i,
                    query_type: t.attr("data-query-type")
                })),
                r ? r.then(o().bind((function(e) {
                    var t = o().map(e, (function(e) {
                        return {
                            id: e.inn,
                            additional_data: ['data-name="'.concat(o().escape(e.name), '"'), 'data-vat="'.concat(o().escape(e.inn), '"'), 'data-kpp="'.concat(o().escape(e.kpp), '"'), 'data-ogrn="'.concat(o().escape(e.ogrn), '"'), 'data-mfo="'.concat(o().escape(e.mfo), '"'), 'data-oked="'.concat(o().escape(e.oked), '"'), 'data-director="'.concat(o().escape(e.director), '"'), 'data-bank_account_number="'.concat(o().escape(e.bank_account_number), '"'), 'data-bank_code="'.concat(o().escape(e.bank_code), '"'), 'data-type="'.concat(o().escape(e.type), '"'), 'data-address="'.concat(o().escape(e.address), '"'), 'data-real_address="'.concat(o().escape(e.real_address), '"')].join(" "),
                            text: e.name
                        }
                    }
                    ));
                    n.trigger("suggest:reset", [t, ""])
                }
                ), this)) : n.trigger("suggest:reset", [[], ""]))
            }
            ), 500),
            _onItemChoosed: function(e, t) {
                this._elem("name").val(t.attr("data-name")).trigger("change"),
                this._elem("vat").val(t.attr("data-vat")).trigger("change"),
                this._elem("kpp").val(t.attr("data-kpp")).trigger("change"),
                this._elem("ogrn").val(t.attr("data-ogrn")).trigger("change"),
                this._elem("mfo").val(t.attr("data-mfo")).trigger("change"),
                this._elem("oked").val(t.attr("data-oked")).trigger("change"),
                this._elem("director").val(t.attr("data-director")).trigger("change"),
                this._elem("bank_account_number").val(t.attr("data-bank_account_number")).trigger("change"),
                this._elem("bank_code").val(t.attr("data-bank_code")).trigger("change"),
                this._elem("type").val(t.attr("data-type")).trigger("change"),
                this._elem("address").val(t.attr("data-address")).trigger("change"),
                this._elem("real_address").val(t.attr("data-real_address")).trigger("change")
            },
            _onFocused: function(e) {
                var t = this.$el.height();
                clearTimeout(this.blur_timeout),
                this.$el.addClass("legal-entity_focused");
                var n = this.$el.height();
                t !== n && this.$el.css("margin-bottom", "".concat(-n + t, "px")),
                this._onValueChanged(e)
            },
            _onBlurred: function(e) {
                var t = a(e.target).closest(".control--suggest").find(".js-control--suggest--list li");
                e.target.value.trim() && 1 === t.length && t.trigger("suggest:item:click-silent"),
                this.blur_timeout = setTimeout(o().bind((function() {
                    this.$el.removeClass("legal-entity_focused"),
                    this.$el.css("margin-bottom", 0)
                }
                ), this), 100)
            },
            makeCatalogRequest: function(e) {
                var t = this
                  , n = a.Deferred()
                  , i = e.catalog_id + e.term;
                return this._cache[i] ? n.resolve(this._cache[i]) : s.default.searchElements(e.catalog_id, e.term).then((function(e) {
                    var s = o().map(e, (function(e) {
                        return o().reduce(e.custom_fields, (function(e, t) {
                            var n = "";
                            switch (t.code) {
                            case "SUPPLIER_VAT_ID":
                                n = "inn";
                                break;
                            case "SUPPLIER_TAX_REGISTRATION_REASON_CODE":
                                n = "kpp";
                                break;
                            case "SUPPLIER_PRIMARY_STATE_REGISTRATION_NUMBER":
                                n = "ogrn";
                                break;
                            case "SUPPLIER_BANK_IDENTIFICATION_CODE":
                                n = "bank_code";
                                break;
                            case "SUPPLIER_LEGAL_ADDRESS":
                                n = "address"
                            }
                            return n && (e[n] = o().propertyOf(t)(["values", 0, "value"]) || ""),
                            e
                        }
                        ), {
                            name: e.name
                        })
                    }
                    ));
                    t._cache[i] = s,
                    n.resolve(t._cache[i])
                }
                ), n.reject),
                n.promise()
            },
            makeRequest: function(e) {
                var t = a.Deferred();
                return APP.widgets.legal_handlers && APP.widgets.legal_handlers.length && o().isFunction(APP.widgets.legal_handlers[0]) ? APP.widgets.legal_handlers[0](e) : (a.ajax({
                    type: "POST",
                    headers: {
                        Authorization: "Token 608b368be2b4caceef05d83b16bd85305d3d4cc8",
                        Accept: "application/json, text/javascript",
                        "Content-Type": "application/json"
                    },
                    url: "https://dadata.ru/api/v2/suggest/party",
                    dataType: "json",
                    data: JSON.stringify(e)
                }).done(o().bind((function(e) {
                    var t;
                    !o().isUndefined(e.suggestions) && e.suggestions.length && (t = o().map(e.suggestions, (function(e) {
                        var t = e.value
                          , n = e.data
                          , i = n.inn
                          , o = n.kpp
                          , s = n.ogrn
                          , r = n.address;
                        return {
                            name: t,
                            inn: i,
                            kpp: o,
                            ogrn: s,
                            type: "INDIVIDUAL" === e.type ? 1 : 2,
                            address: r.unrestricted_value || r.value
                        }
                    }
                    ))),
                    this.resolve(t)
                }
                ), t)).fail(o().bind(t.reject, t, [])),
                t.promise())
            }
        });
        var c = "../build/transpiled/interface/controls/legal_entity";
        window.define(c, (function() {
            var e = "undefined"
              , n = typeof t === e ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === e ? typeof module === e ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : t;
            return n && n.default || n
        }
        )),
        window.require([c])
    }
    ,
    180253: (e, t, n) => {
        "use strict";
        n.r(t),
        n.d(t, {
            default: () => m
        });
        var i = n(55188)
          , o = n.n(i)
          , s = n(880774)
          , r = n(886965)
          , a = n(340958)
          , l = n(777464)
          , c = n(661533);
        function u(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(e, i.key, i)
            }
        }
        function d(e, t, n) {
            return d = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(e, t, n) {
                var i = function(e, t) {
                    for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = h(e)); )
                        ;
                    return e
                }(e, t);
                if (i) {
                    var o = Object.getOwnPropertyDescriptor(i, t);
                    return o.get ? o.get.call(n || e) : o.value
                }
            }
            ,
            d(e, t, n || e)
        }
        function h(e) {
            return h = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            ,
            h(e)
        }
        function p(e, t) {
            return p = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                e
            }
            ,
            p(e, t)
        }
        function f(e) {
            var t = function() {
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
                var n, i = h(e);
                if (t) {
                    var o = h(this).constructor;
                    n = Reflect.construct(i, arguments, o)
                } else
                    n = i.apply(this, arguments);
                return function(e, t) {
                    return !t || "object" != ((n = t) && "undefined" != typeof Symbol && n.constructor === Symbol ? "symbol" : typeof n) && "function" != typeof t ? function(e) {
                        if (void 0 === e)
                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return e
                    }(e) : t;
                    var n
                }(this, n)
            }
        }
        var _ = function(e) {
            !function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && p(e, t)
            }(m, e);
            var t, n, i, _ = f(m);
            function m() {
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, m),
                _.apply(this, arguments)
            }
            return t = m,
            n = [{
                key: "events",
                value: function() {
                    var e = {
                        "input input": "stopPropagationOnDefaultSuggest"
                    };
                    return e["input " + this._selector("name")] = "_onValueChangedDebounced",
                    e["focus " + this._selector("name")] = "_onNameInputFocused",
                    e["blur " + this._selector("name")] = "_onNameInputBlurred",
                    e["suggest:changed " + this._selector("name")] = "_onItemChoosed",
                    e["linked-entity:autoselect-first " + this._selector("name")] = "_autoSelectFirstItem",
                    e["linked-entity:set-defaults " + this._selector("name")] = "_onDefaultItemsSet",
                    o().extend({}, o().result(a.default.prototype, "events", {}), e)
                }
            }, {
                key: "_classes",
                value: function() {
                    return {
                        name: "js-linked-entity-name",
                        entity_id: "js-linked-entity-id",
                        entity_type: "js-linked-entity-type",
                        catalog_id: "js-linked-entity-catalog-id",
                        select_icon: "control--suggest--down-btn",
                        suggest_list: "js-control--suggest--list"
                    }
                }
            }, {
                key: "initialize",
                value: function() {
                    d(h(m.prototype), "initialize", this).apply(this, arguments),
                    this._default_items = [],
                    this._cache = {},
                    this._onValueChangedDebounced = o().debounce(o().bind(this._onValueChanged, this), 500)
                }
            }, {
                key: "stopPropagationOnDefaultSuggest",
                value: function(e) {
                    e.stopPropagation()
                }
            }, {
                key: "_autoSelectFirstItem",
                value: function() {
                    this._elem("name").trigger("suggest:changed", [this._findElem("suggest_list").find("li:first")])
                }
            }, {
                key: "_getElementsToSet",
                value: function(e) {
                    switch (this._data.searchIn) {
                    case "companies":
                        return o().filter(e, (function(e) {
                            return parseInt(e.element_type) === APP.element_types.companies
                        }
                        ));
                    case "contacts":
                        return o().filter(e, (function(e) {
                            return parseInt(e.element_type) === APP.element_types.contacts
                        }
                        ));
                    case "contacts_and_companies":
                        return o().filter(e, (function(e) {
                            return o().includes([APP.element_types.companies, APP.element_types.contacts], parseInt(e.element_type))
                        }
                        ));
                    default:
                        return []
                    }
                }
            }, {
                key: "_onDefaultItemsSet",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : []
                      , n = arguments.length > 2 ? arguments[2] : void 0;
                    this._default_items = this._getElementsToSet(t),
                    this._default_items.length && !this._elem("select_icon").get(0) && n && (this._elem("name").after('<b class="'.concat(this._class("select_icon"), '"></b>')),
                    this._dropElemCache("select_icon")),
                    this.resetItems(this._default_items)
                }
            }, {
                key: "_onNameInputFocused",
                value: function(e) {
                    this._current_name_value = c(e.currentTarget).val(),
                    this._current_name_value && !this._elem("select_icon").get(0) || (this._default_items.length ? this.resetItems(this._default_items) : this._onValueChanged(e)),
                    this._elem("select_icon").hide()
                }
            }, {
                key: "_onNameInputBlurred",
                value: function(e) {
                    var t = e.currentTarget
                      , n = c(t).val();
                    n !== this._current_name_value && (this._elem("entity_id").val("").trigger("change"),
                    this._elem("entity_type").val("").trigger("change"),
                    this._elem("catalog_id").val("").trigger("change"),
                    this._current_name_value = n),
                    this._elem("select_icon").show()
                }
            }, {
                key: "_onValueChanged",
                value: function(e) {
                    var t = this
                      , n = c(e.currentTarget)
                      , i = n.val().trim()
                      , s = this.$el.attr("data-search-in")
                      , r = !1;
                    n.is(":focus") && (n.attr("data-val", i),
                    o().contains(["contacts_and_companies", "contacts", "companies"], s) ? r = this.makeContactsRequest({
                        entity: s,
                        term: i
                    }) : o().isNaN(parseInt(s)) || (r = this.makeCatalogElementsRequest({
                        catalog_id: s,
                        term: i
                    })),
                    r ? (n.trigger("suggest:loader"),
                    r.then((function(e) {
                        return t.resetItems(e)
                    }
                    ), (function(e) {
                        return t.resetItems(e)
                    }
                    ))) : this.resetItems(this._default_items))
                }
            }, {
                key: "_onItemChoosed",
                value: function(e, t) {
                    var n = parseInt(t.attr("data-entity-id") || 0)
                      , i = parseInt(t.attr("data-catalog-id") || 0);
                    this._elem("name").val(t.attr("data-name")).trigger("change"),
                    this._elem("entity_id").val(n || "").trigger("change"),
                    this._elem("entity_type").val(n > 0 ? t.attr("data-entity-type") : "").trigger("change"),
                    this._elem("catalog_id").val(i || "").trigger("change")
                }
            }, {
                key: "resetItems",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []
                      , t = this._findElem("suggest_list")
                      , n = o().map(e, (function(e) {
                        return {
                            id: e.id,
                            additional_data: ['data-name="'.concat(o().escape(e.name), '"'), 'data-entity-id="'.concat(e.id, '"'), 'data-entity-type="'.concat((0,
                            r.convertElementType)(e.element_type, "string"), '"'), 'data-catalog-id="'.concat(e.catalog_id, '"')].join(" "),
                            text: e.name
                        }
                    }
                    ));
                    t.trigger("suggest:reset", [n, ""])
                }
            }, {
                key: "makeContactsRequest",
                value: function(e) {
                    var t = e.entity
                      , n = e.term
                      , i = void 0 === n ? "" : n
                      , s = c.Deferred();
                    if (i.length < 3)
                        s.reject(this._default_items);
                    else {
                        var r = "?type=".concat(t);
                        "contacts_and_companies" === t && (r = "?type=contacts&contacts=all"),
                        c.ajax({
                            url: "/ajax/search/".concat(r, "&query_type=name&q=").concat(i || "")
                        }).then((function(e) {
                            var n = e.status
                              , i = e.result;
                            "ok" === n ? s.resolve(o().map(i || [], (function(e) {
                                var n = e.element_type;
                                return n || (n = "contacts" === t ? APP.element_types.contacts : APP.element_types.companies),
                                o().extend({}, e, {
                                    element_type: n
                                })
                            }
                            ))) : s.reject(i)
                        }
                        ), s.reject)
                    }
                    return s.promise()
                }
            }, {
                key: "makeCatalogElementsRequest",
                value: function(e) {
                    var t = this
                      , n = e.catalog_id
                      , i = e.term
                      , r = c.Deferred();
                    return i.length > 0 && i.length < 3 || !n ? r.reject(this._default_items) : this._cache["".concat(n).concat(i)] ? r.resolve(this._cache["".concat(n).concat(i)]) : l.default.searchElements(n, i).then((function(e) {
                        var a = o().map(e, (function(e) {
                            var t = (0,
                            s.catalogElementName)(e.name, e.id, e.catalog_id);
                            return {
                                id: e.id,
                                element_type: APP.element_types.catalog_elements,
                                catalog_id: n,
                                name: t
                            }
                        }
                        ));
                        t._cache["".concat(n).concat(i)] = a,
                        r.resolve(a)
                    }
                    ), r.reject),
                    r.promise()
                }
            }],
            i = [{
                key: "controlClassName",
                get: function() {
                    return "js-control-linked-entity"
                }
            }],
            n && u(t.prototype, n),
            i && u(t, i),
            m
        }(a.default);
        const m = _.extend(_);
        var g = "../build/transpiled/interface/controls/linked_entity";
        window.define(g, (function() {
            var e = "undefined"
              , n = typeof t === e ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === e ? typeof module === e ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : t;
            return n && n.default || n
        }
        )),
        window.require([g])
    }
    ,
    25444: (e, t, n) => {
        "use strict";
        n.r(t),
        n.d(t, {
            default: () => u
        });
        var i = n(55188)
          , o = n.n(i)
          , s = n(340958);
        function r(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(e, i.key, i)
            }
        }
        function a(e) {
            return a = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            ,
            a(e)
        }
        function l(e, t) {
            return l = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                e
            }
            ,
            l(e, t)
        }
        function c(e) {
            var t = function() {
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
                var n, i = a(e);
                if (t) {
                    var o = a(this).constructor;
                    n = Reflect.construct(i, arguments, o)
                } else
                    n = i.apply(this, arguments);
                return function(e, t) {
                    return !t || "object" != ((n = t) && "undefined" != typeof Symbol && n.constructor === Symbol ? "symbol" : typeof n) && "function" != typeof t ? function(e) {
                        if (void 0 === e)
                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return e
                    }(e) : t;
                    var n
                }(this, n)
            }
        }
        var u = function(e) {
            !function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && l(e, t)
            }(a, e);
            var t, n, i = c(a);
            function a() {
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, a),
                i.apply(this, arguments)
            }
            return t = a,
            n = [{
                key: "events",
                value: function() {
                    return o().extend({}, o().result(s.default.prototype, "events", {}), {
                        "input input": "stopPropagationOnDefaultSuggest"
                    })
                }
            }, {
                key: "_classes",
                value: function() {
                    return {
                        suggest_item: "control--suggest--list--item",
                        suggest_list: "js-control--suggest--list"
                    }
                }
            }, {
                key: "initialize",
                value: function() {
                    s.default.prototype.initialize.apply(this, arguments),
                    this._cache = {},
                    this._onValueChangedDebounced = o().debounce(o().bind(this._onValueChanged, this), 500)
                }
            }, {
                key: "destroy",
                value: function() {
                    this._cache = {},
                    s.default.prototype.destroy.apply(this, arguments)
                }
            }, {
                key: "stopPropagationOnDefaultSuggest",
                value: function(e) {
                    e.stopPropagation()
                }
            }, {
                key: "autoSelectFirstItem",
                value: function() {
                    this._elem("name").trigger("suggest:changed", [this._findElem("suggest_list").find("li:first")])
                }
            }, {
                key: "getElementsToSet",
                value: function(e) {
                    switch (this._data.searchIn) {
                    case "companies":
                        return o().filter(e, (function(e) {
                            return parseInt(e.element_type) === APP.element_types.companies
                        }
                        ));
                    case "contacts":
                        return o().filter(e, (function(e) {
                            return parseInt(e.element_type) === APP.element_types.contacts
                        }
                        ));
                    case "contacts_and_companies":
                        return o().filter(e, (function(e) {
                            return o().includes([APP.element_types.companies, APP.element_types.contacts], parseInt(e.element_type))
                        }
                        ));
                    default:
                        return []
                    }
                }
            }, {
                key: "_onValueChanged",
                value: function() {}
            }],
            n && r(t.prototype, n),
            a
        }(s.default)
          , d = "../build/transpiled/interface/controls/linked_entity_base";
        window.define(d, (function() {
            var e = "undefined"
              , n = typeof t === e ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === e ? typeof module === e ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : t;
            return n && n.default || n
        }
        )),
        window.require([d])
    }
    ,
    177571: (e, t, n) => {
        "use strict";
        n.r(t),
        n.d(t, {
            default: () => h
        });
        var i = n(55188)
          , o = n.n(i)
          , s = n(460159)
          , r = n.n(s)
          , a = n(161320)
          , l = n.n(a)
          , c = n(237262)
          , u = n(658364)
          , d = n(661533);
        const h = u.default.extend({
            controlClassName: "js-control-loss-reason-dropdown_list",
            _classes: function() {
                return o().extend({}, o().result(u.default.prototype, "_classes", {}), {
                    name: "note-lead__loss-reason"
                })
            },
            events: function() {
                return o().extend({}, o().result(u.default.prototype, "events", {}), {
                    mouseenter: "_onMouseEnter",
                    mouseleave: "_onMouseLeave",
                    "click .cell-edit-buttons__loss-reason": "_onEditButtonClick",
                    click: "",
                    'change input[type="radio"]': ""
                })
            },
            delegateEvents: function() {
                if ((0,
                c.getRights)("leads", "edit"))
                    return r()._preload(["/tmpl/list/cells_edit/buttons.twig"])().then(o().bind(u.default.prototype.delegateEvents, this))
            },
            initialize: function() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                    t[n] = arguments[n];
                u.default.prototype.initialize.apply(this, t),
                this._$window.on("resize".concat(this.ns), o().bind(this._onWindowResize, this))
            },
            destroy: function() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                    t[n] = arguments[n];
                this.$list && this.$list.remove(),
                u.default.prototype.destroy.apply(this, t)
            },
            _onEditButtonClick: function(e) {
                e.stopPropagation(),
                this._$document.trigger({
                    type: "controls:hide",
                    target: this.$el
                }),
                this._initList()
            },
            _onReasonChange: function() {
                var e = this.$el.closest(".js-list-row");
                u.default.prototype._onReasonChange.apply(this, arguments),
                d.ajax({
                    url: "/ajax/v1/leads/set",
                    type: "POST",
                    dataType: "json",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    data: JSON.stringify({
                        request: {
                            leads: {
                                update: [{
                                    id: e.attr("data-id"),
                                    last_modified: l()().unix(),
                                    loss_reason_id: this._id
                                }]
                            }
                        }
                    })
                })
            },
            _onMouseEnter: function() {
                var e = this.$el.closest(".list-row__cell-status");
                e.length && (e.addClass("list-row__cell-template-status_loss-reason-active"),
                this.$edit_button || this.$el.append(this.$edit_button = d(r()({
                    ref: "/tmpl/list/cells_edit/buttons.twig"
                }).render({
                    class_name: "cell-edit-buttons__loss-reason"
                }))),
                this._positionEditButton())
            },
            _onMouseLeave: function() {
                var e = this.$el.closest(".list-row__cell-status");
                e.length && (this.$edit_button && (this.$edit_button.remove(),
                delete this.$edit_button),
                e.removeClass("list-row__cell-template-status_loss-reason-active"))
            },
            _onWindowResize: function() {
                this.$list && this.$list.css({
                    top: this.$el.offset().top + 39,
                    left: this.$el.offset().left - this._getListHolder().offset().left + 1,
                    maxWidth: this._getListHolder().width() - (this.$el.offset().left + 32)
                })
            },
            _positionEditButton: function() {
                var e = this.$el.closest(".content-table__item__inner")
                  , t = e.width()
                  , n = e.find(".leads__status-label").outerWidth() || e.find(".note-lead__container").outerWidth();
                n + this.$el.find(".note-lead__loss-reason").width() + this.$edit_button.outerWidth() + 29 < t ? this.$edit_button.css("left", "".concat(this.$el.find(".note-lead__loss-reason").width() + 3, "px")) : this.$edit_button.css("left", "".concat(t - n - 27, "px"))
            },
            _onLoad: function() {
                this._renderList(this._getListHolder()),
                this.$el.addClass("note-lead__pipe-container_loss-reason_in-select"),
                this._onWindowResize(),
                this.$list.css({
                    top: this.$el.offset().top + 39,
                    left: this.$el.offset().left - this._getListHolder().offset().left
                }).on("change", 'input[type="radio"]', o().bind(this._onReasonChange, this))
            },
            _getListHolder: function() {
                return this._$list_holder || (this._$list_holder = d(".list__body-right")),
                this._$list_holder
            },
            _onHide: function() {
                this.$el.removeClass("note-lead__pipe-container_loss-reason_in-select"),
                this._getListHolder().find(".list-row__cell-edit-buttons").remove()
            }
        });
        var p = "../build/transpiled/interface/controls/loss_reason/in_list";
        window.define(p, (function() {
            var e = "undefined"
              , n = typeof t === e ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === e ? typeof module === e ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : t;
            return n && n.default || n
        }
        )),
        window.require([p])
    }
    ,
    658364: (e, t, n) => {
        "use strict";
        n.r(t),
        n.d(t, {
            default: () => h
        });
        var i = n(661533)
          , o = n.n(i)
          , s = n(55188)
          , r = n.n(s)
          , a = n(460159)
          , l = n.n(a)
          , c = n(880774)
          , u = n(950731)
          , d = n(340958);
        const h = d.default.extend({
            controlClassName: "js-control-loss-reason-dropdown",
            _classes: function() {
                return {
                    name: "pipeline-select-view__loss-reason-name"
                }
            },
            document_events: {
                "controls:hide:private": "_onOutsideClick"
            },
            events: {
                "click .pipeline-select-view__loss-reason-name": "_onListOpenClick",
                "controls:loss-reason:init": "_initList",
                'change input[type="radio"]': "_onReasonChange"
            },
            initialize: function() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                    t[n] = arguments[n];
                d.default.prototype.initialize.apply(this, t),
                this._reasons = null,
                this._setId(this.$el.attr("data-id") || 0, {
                    silent: !0
                })
            },
            _onListOpenClick: function(e) {
                var t = !this._opened;
                e.stopPropagation(),
                this._$document.trigger({
                    type: "controls:hide",
                    target: this.el
                }),
                t && this._initList()
            },
            _onReasonChange: function(e) {
                var t = o()(e.currentTarget).val()
                  , n = r().find(this._reasons, (function(e) {
                    return e.id === parseInt(t)
                }
                ));
                this._findElem("name").text(n ? n.name : (0,
                c.i18n)("No reason")),
                this._$document.trigger({
                    type: "controls:hide",
                    target: this.$el
                }),
                this._setId(t)
            },
            _onOutsideClick: function() {
                this.$list && this._opened && (this.$list.remove(),
                this.$list = null,
                this._onHide(),
                this._opened = !1)
            },
            _setId: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                this._id = e,
                this.$el.attr("data-id", this._id),
                t.silent || this.$('input[type="hidden"]').val(this._id).trigger("change")
            },
            _initList: function() {
                var e = this;
                e._loading || (this._opened = !0,
                this._reasons ? this._onLoad() : (e._loading = !0,
                Promise.all([u.default.getLossReasons(), l()._preload(["/tmpl/leads/loss_reason/items.twig"])()]).then((function(t) {
                    e._reasons = r().sortBy(t[0]._embedded.items, "sort"),
                    e._onLoad(),
                    e._loading = !1
                }
                ), (function() {
                    e._loading = !1
                }
                ))))
            },
            _onLoad: function() {
                var e = this.$el.closest(".pipeline-select-view").width();
                this._renderList(this.$el),
                e < 350 ? this.$list.css("max-width", e) : this.$list.css("max-width", 350)
            },
            _renderList: function(e) {
                this.$list || (this.$list = o()(l()({
                    ref: "/tmpl/leads/loss_reason/items.twig"
                }).render({
                    selected: this._id,
                    items: this._reasons,
                    is_enabled: APP.constant("loss_reason_enabled")
                })),
                this.$list.on("click", (function(e) {
                    e.stopPropagation()
                }
                )),
                e.prepend(this.$list))
            },
            _onHide: r().noop
        });
        var p = "../build/transpiled/interface/controls/loss_reason/index";
        window.define(p, (function() {
            var e = "undefined"
              , n = typeof t === e ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === e ? typeof module === e ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : t;
            return n && n.default || n
        }
        )),
        window.require([p])
    }
    ,
    321844: (e, t, n) => {
        "use strict";
        n.r(t),
        n.d(t, {
            Numeric: () => r,
            NumericFloat: () => a,
            NumericFloatNegative: () => u,
            NumericFloatPrice: () => l,
            NumericFloatQuantity: () => c,
            Percentage: () => h,
            Zip: () => d
        });
        var i = n(55188)
          , o = n.n(i)
          , s = n(150267)
          , r = s.default.extend({
            controlClassName: "js-control-allow-numeric",
            check_regex: /^[\d]+$/,
            _elem: function(e) {
                return "input" === e ? this.$el : s.default.prototype._elem.apply(this, arguments)
            },
            events: {
                keydown: "_fixCursorPosOnKeydown",
                input: "_formatOnInput"
            },
            initialize: function() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                    t[n] = arguments[n];
                s.default.prototype.initialize.apply(this, t),
                this._allow_zero = !o().isUndefined(this.$el.attr("data-allow-zero")),
                this._setPrevValue()
            },
            _setPrevValue: function() {
                this._prev_value = this.$el.val()
            },
            _getPrevValue: function() {
                return this._prev_value
            },
            _prepareValue: function(e) {
                var t = e;
                return t && !this.check_regex.test(t) ? this._getPrevValue() : (this._allow_zero && t.match(/^[0]{2,}$/) && (t = t.replace(/[0]{2,}/, "0")),
                t)
            },
            _formatOnInput: function() {
                var e = this.$el.val()
                  , t = this._prepareValue(e);
                t !== e && this.$el.val(t).trigger("change"),
                this._setPrevValue(),
                this._setCursorPos()
            }
        })
          , a = r.extend({
            controlClassName: "js-control-allow-numeric-float",
            check_regex: /^([1-9][0-9]*|0)?([.,/])?([\d]+)?$/,
            _prepareValue: function(e) {
                var t;
                return e = e.replace(/[,/]/g, "."),
                o().contains([".", "-."], e) && ((t = e.split("")).splice(-1, 0, "0"),
                e = t.join("")),
                r.prototype._prepareValue.call(this, e)
            }
        })
          , l = a.extend({
            controlClassName: "js-control-allow-numeric-float-price",
            check_regex: /^([1-9][0-9]*|0)?([.,/])?([\d]{0,2})?$/,
            _prepareValue: function(e) {
                var t = e.replace(/^0+(\d{1,})/, "$1");
                return a.prototype._prepareValue.call(this, t)
            }
        })
          , c = a.extend({
            controlClassName: "js-control-allow-numeric-float-quantity",
            check_regex: /^([1-9][0-9]*|0)?([.,/])?([\d]{0,3})?$/
        })
          , u = a.extend({
            controlClassName: "js-control-allow-numeric-negative",
            check_regex: /^-?([1-9][0-9]*|0)?([.,/])?([\d]+)?$/,
            events: function() {
                var e = r.prototype.events;
                return o().extend(e, {
                    blur: "_formatOnBlur"
                })
            },
            _formatOnBlur: function() {
                "-" === this.$el.val() && this.$el.val("-1").trigger("change")
            }
        })
          , d = r.extend({
            controlClassName: "js-control-allow-zip",
            check_regex: /^[a-zA-Z0-9]+$/
        })
          , h = r.extend({
            controlClassName: "js-control-allow-percentage",
            check_regex: /^((100)|([1-9]\d)|(\d))$/
        })
          , p = "../build/transpiled/interface/controls/numeric";
        window.define(p, (function() {
            var e = "undefined"
              , n = typeof t === e ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === e ? typeof module === e ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : t;
            return n && n.default || n
        }
        )),
        window.require([p])
    }
    ,
    677866: (e, t, n) => {
        "use strict";
        n.r(t),
        n.d(t, {
            default: () => l
        });
        var i = n(55188)
          , o = n.n(i)
          , s = n(340958)
          , r = n(293162)
          , a = n(661533);
        const l = s.default.extend({
            controlClassName: "js-control-org-legal-name",
            events: function() {
                var e = {
                    "input input": "stopPropagationOnDefaultSuggest",
                    "focus input": "_onFocused",
                    "blur input": "_onBlurred"
                };
                return e["input ".concat(this._selector("name"))] = "_onValueChanged",
                e["suggest:changed ".concat(this._selector("name"))] = "_onItemChoosed",
                o().extend({}, o().result(s.default.prototype, "events", {}), e)
            },
            _selectors: function() {
                return {
                    name: ".js-org-legal-name-name",
                    line1: ".js-org-legal-name-line1",
                    line2: ".js-org-legal-name-line2",
                    city: ".js-org-legal-name-city",
                    state: ".js-org-legal-name-state",
                    zip: ".js-org-legal-name-zip",
                    country: ".js-org-legal-name-country",
                    external_id: ".js-org-legal-name-external"
                }
            },
            initialize: function() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                    t[n] = arguments[n];
                s.default.prototype.initialize.apply(this, t),
                this.$("input:focus").length && this._onFocused()
            },
            stopPropagationOnDefaultSuggest: function(e) {
                e.stopPropagation()
            },
            _onValueChanged: o().debounce((function(e) {
                var t = a(e.currentTarget)
                  , n = t.closest(".control--suggest").find(".js-control--suggest--list")
                  , i = t.val().trim();
                this._elem("external_id").val("").trigger("change"),
                t.attr("data-val", i),
                i ? this.makeRequest({
                    query: i,
                    query_type: t.attr("data-query-type")
                }).then(o().bind((function(e) {
                    var t = [];
                    e && e.length && (t = o().map(e, (function(e) {
                        return {
                            id: e.inn,
                            additional_data: ['data-name="'.concat(o().escape(e.name), '"'), 'data-line1="'.concat(o().escape(e.line1), '"'), 'data-line2="'.concat(o().escape(e.line2), '"'), 'data-city="'.concat(o().escape(e.city), '"'), 'data-state="'.concat(o().escape(e.state), '"'), 'data-zip="'.concat(o().escape(e.zip), '"'), 'data-country="'.concat(o().escape(e.country), '"'), 'data-external="'.concat(o().escape(e.external_id), '"')].join(" "),
                            text: e.name
                        }
                    }
                    ))),
                    n.trigger("suggest:reset", [t, ""])
                }
                ), this)) : n.trigger("suggest:reset", [[], ""])
            }
            ), 500),
            _onItemChoosed: function(e, t) {
                this._elem("name").val(t.attr("data-name")).trigger("change"),
                this._elem("line1").val(t.attr("data-line1")).trigger("change"),
                this._elem("line2").val(t.attr("data-line2")).trigger("change"),
                this._elem("city").val(t.attr("data-city")).trigger("change"),
                this._elem("state").val(t.attr("data-state")).trigger("change"),
                this._elem("zip").val(t.attr("data-zip")).trigger("change"),
                this._elem("country").val(t.attr("data-country")).trigger("change"),
                this._elem("external_id").val(t.attr("data-external")).trigger("change"),
                "null" === t.attr("data-line1") && t.attr("data-line1", "..."),
                "null" === t.attr("data-line2") && t.attr("data-line2", "..."),
                "null" === t.attr("data-city") && t.attr("data-city", "..."),
                "null" === t.attr("data-state") && t.attr("data-state", "..."),
                "null" === t.attr("data-zip") && t.attr("data-zip", "..."),
                "null" === t.attr("data-country") && t.attr("data-country", "...");
                var n = a(".linked-form__field-smart_address").children(".linked-form__field__value").children(".control-address__wrapper")
                  , i = n.find('[data-field-type="address_line_1"] input')[0]
                  , o = n.find('[data-field-type="address_line_2"] input')[0]
                  , s = n.find('[data-field-type="city"] input')[0]
                  , l = n.find('[data-field-type="state"] input')[0]
                  , c = n.find('[data-field-type="zip"] input')[0]
                  , u = n.find('[data-field-type="country"]').children(".control-address__select").children(".control--select--input")[0];
                a(i).val(t.attr("data-line1")).trigger("change").trigger("controls:change:visual"),
                a(o).val(t.attr("data-line2")).trigger("change").trigger("controls:change:visual"),
                a(s).val(t.attr("data-city")).trigger("change").trigger("controls:change:visual"),
                a(l).val(t.attr("data-state")).trigger("change").trigger("controls:change:visual"),
                a(c).val(t.attr("data-zip")).trigger("change").trigger("controls:change:visual");
                var d = r.default
                  , h = "".concat(t.attr("data-country"));
                a(u).val(d[h]).trigger("change").trigger("controls:change:visual")
            },
            _onFocused: function() {
                clearTimeout(this.blur_timeout)
            },
            _onBlurred: function(e) {
                var t = a(e.target).closest(".control--suggest").find(".js-control--suggest--list li");
                e.target.value.trim() && 1 === t.length && t.trigger("suggest:item:click-silent"),
                this.blur_timeout = setTimeout(o().bind((function() {
                    this.$el.removeClass("org-legal-name_focused")
                }
                ), this), 100)
            },
            makeRequest: function(e) {
                var t = a.Deferred();
                return APP.widgets.legal_handlers && APP.widgets.legal_handlers.length && o().isFunction(APP.widgets.legal_handlers[0]) ? APP.widgets.legal_handlers[0](e) : (t.reject([]),
                t.promise())
            }
        });
        var c = "../build/transpiled/interface/controls/org_legal_name";
        window.define(c, (function() {
            var e = "undefined"
              , n = typeof t === e ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === e ? typeof module === e ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : t;
            return n && n.default || n
        }
        )),
        window.require([c])
    }
    ,
    734227: (e, t, n) => {
        "use strict";
        n.r(t);
        var i = n(661533)
          , o = n.n(i)
          , s = n(55188)
          , r = n.n(s)
          , a = n(267651)
          , l = n.n(a)
          , c = n(811707)
          , u = n(678640)
          , d = n(661533);
        function h(e, t) {
            return null != t && "undefined" != typeof Symbol && t[Symbol.hasInstance] ? !!t[Symbol.hasInstance](e) : e instanceof t
        }
        var p = o()(document)
          , f = {};
        function _() {
            var e = document.body;
            if (!parseInt(e.getAttribute("data-body-fixed")) && !APP.is_touch_device) {
                var t = f.getHolder();
                f.fixScroll(t, o()(e), !0)
            }
            e.setAttribute("data-body-fixed", ++f.overlay_stack),
            APP.is_touch_device ? (o().nonbounce("destroy"),
            o().nonbounce()) : e.style.overflow = "hidden"
        }
        function m() {
            var e = document.body;
            if (--f.overlay_stack,
            f.overlay_stack < 0 && (f.overlay_stack = 0),
            0 === f.overlay_stack)
                if (APP.is_touch_device)
                    o().nonbounce("destroy");
                else {
                    var t = f.getHolder();
                    e.style.overflow = "",
                    f.fixScroll(t, o()(e))
                }
            e.setAttribute("data-body-fixed", f.overlay_stack),
            p.trigger("overlay:unfixed")
        }
        n(59372),
        n(904887),
        f.overlay_stack = 0,
        f.getHolder = function() {
            var e = o()("#page_holder");
            return "mail" === APP.getBaseEntity() && APP.data.is_card && (e = o()("#card_holder")),
            e.is(":hidden") ? {} : e
        }
        ,
        f.show = function(e, t) {
            t && t.skip_fix || p.trigger("overlay:fix"),
            (e = h(e, d) ? e : o()(e)).prepareTransition().addClass("default-overlay-visible")
        }
        ,
        f.hide = function(e, t) {
            t = t || {},
            e = h(e, d) ? e : o()(e);
            var n = function() {
                r().isFunction(t.callback) && t.callback(),
                e.remove(),
                t && t.skip_fix || p.trigger("overlay:unfix")
            };
            t.instantly ? n() : (r().delay(n, 200),
            e.prepareTransition().addClass("default-overlay-fading"))
        }
        ,
        f.checkScroll = function(e, t) {
            return e.outerHeight() > t.outerHeight()
        }
        ,
        f.fixScroll = function(e, t, n) {
            var i = o()(".list__body-right__top")
              , s = i.length && (0,
            u.isV3Design)();
            if ("mail" === APP.getBaseEntity() && APP.data.is_card && (s = !0),
            e.length)
                if (n && f.checkScroll(e, t)) {
                    var r = o()(window).scrollTop();
                    e.css("overflow-y", "scroll").scrollTop(r),
                    s && i.css("marginRight", c.scrollBarWidth + "px")
                } else
                    e.css("overflow-y", "").scrollTop(0),
                    s && i.css("marginRight", "")
        }
        ,
        p.on("overlay:fix", _).on("overlay:unfix", m).on("touchmove", ".default-overlay", (function() {
            return !1
        }
        )).on("overlay:show", ".default-overlay", (function(e, t) {
            f.show(this, t)
        }
        )).on("overlay:hide", ".default-overlay", (function(e, t) {
            f.hide(this, t)
        }
        )),
        l().subscribe("overlay:show", (function(e, t) {
            f.show(t.el, t.params)
        }
        )),
        l().subscribe("overlay:hide", (function(e, t) {
            f.hide(t.el, t.params)
        }
        )),
        l().subscribe("overlay:fix", _),
        l().subscribe("overlay:unfix", m);
        var g = "../build/transpiled/interface/controls/overlay";
        window.define(g, (function() {
            var e = "undefined"
              , n = typeof t === e ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === e ? typeof module === e ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : t;
            return n && n.default || n
        }
        )),
        window.require([g])
    }
    ,
    382666: (e, t, n) => {
        "use strict";
        n.r(t),
        n.d(t, {
            default: () => v
        });
        var i = n(661533)
          , o = n.n(i)
          , s = n(55188)
          , r = n.n(s)
          , a = n(886965)
          , l = n(25444);
        function c(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, i = new Array(t); n < t; n++)
                i[n] = e[n];
            return i
        }
        function u(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(e, i.key, i)
            }
        }
        function d(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        function h(e, t, n) {
            return h = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(e, t, n) {
                var i = function(e, t) {
                    for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = p(e)); )
                        ;
                    return e
                }(e, t);
                if (i) {
                    var o = Object.getOwnPropertyDescriptor(i, t);
                    return o.get ? o.get.call(n || e) : o.value
                }
            }
            ,
            h(e, t, n || e)
        }
        function p(e) {
            return p = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            ,
            p(e)
        }
        function f(e, t) {
            return f = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                e
            }
            ,
            f(e, t)
        }
        function _(e) {
            return function(e) {
                if (Array.isArray(e))
                    return c(e)
            }(e) || function(e) {
                if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"])
                    return Array.from(e)
            }(e) || function(e, t) {
                if (e) {
                    if ("string" == typeof e)
                        return c(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === n && e.constructor && (n = e.constructor.name),
                    "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? c(e, t) : void 0
                }
            }(e) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        function m(e) {
            var t = function() {
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
                var n, i = p(e);
                if (t) {
                    var o = p(this).constructor;
                    n = Reflect.construct(i, arguments, o)
                } else
                    n = i.apply(this, arguments);
                return function(e, t) {
                    return !t || "object" != ((n = t) && "undefined" != typeof Symbol && n.constructor === Symbol ? "symbol" : typeof n) && "function" != typeof t ? function(e) {
                        if (void 0 === e)
                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return e
                    }(e) : t;
                    var n
                }(this, n)
            }
        }
        var g = function(e) {
            !function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && f(e, t)
            }(c, e);
            var t, n, i, s = m(c);
            function c() {
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, c),
                s.apply(this, arguments)
            }
            return t = c,
            n = [{
                key: "events",
                value: function() {
                    var e;
                    return r().extend({}, h(p(c.prototype), "events", this).call(this), (d(e = {
                        "focus input": "_onFocused",
                        "blur input": "_onBlurred"
                    }, "input ".concat(this._selector("name")), "_onValueChanged"),
                    d(e, "input ".concat(this._selector("address")), "_onValueChanged"),
                    d(e, "input ".concat(this._selector("email")), "_onValueChanged"),
                    d(e, "input ".concat(this._selector("phone")), "_onValueChanged"),
                    d(e, "input ".concat(this._selector("input")), "_onValueChanged"),
                    d(e, "suggest:changed ".concat(this._selector("name")), "_onItemChosen"),
                    d(e, "suggest:changed ".concat(this._selector("address")), "_onItemChosen"),
                    d(e, "suggest:changed ".concat(this._selector("input")), "_onItemChosen"),
                    d(e, "mousedown ".concat(this._selector("suggest_item")), "_onSuggestItemMouseDown"),
                    d(e, "payer:set-defaults ".concat(this._selector("name")), "_onDefaultItemsSet"),
                    d(e, "payer:autoselect-first ".concat(this._selector("name")), (function() {
                        l.default.prototype.autoSelectFirstItem.call(this)
                    }
                    )),
                    e))
                }
            }, {
                key: "_classes",
                value: function() {
                    return r().extend({}, h(p(c.prototype), "_classes", this).call(this), {
                        name: "js-payer-name",
                        input: "js-payer-input",
                        address: "js-payer-address",
                        phone: "js-payer-phone",
                        email: "js-payer-email",
                        vat_id: "js-payer-vat_id",
                        kpp: "js-payer-kpp",
                        tax_registration_reason_code: "js-payer-tax_registration_reason_code",
                        entity_id: "js-payer-id",
                        entity_type: "js-payer-entity-type"
                    })
                }
            }, {
                key: "initialize",
                value: function() {
                    h(p(c.prototype), "initialize", this).apply(this, arguments),
                    this._default_items = [],
                    this.$("input:focus").length && this._onFocused()
                }
            }, {
                key: "destroy",
                value: function() {
                    this._default_items = [],
                    h(p(c.prototype), "destroy", this).apply(this, arguments)
                }
            }, {
                key: "_onDefaultItemsSet",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                    this._default_items = h(p(c.prototype), "getElementsToSet", this).call(this, t),
                    this._resetItems(this._default_items)
                }
            }, {
                key: "_resetItems",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []
                      , t = this._findElem("suggest_list")
                      , n = r().map(e, (function(e) {
                        var t = e.id
                          , n = e.element_type
                          , i = e.name
                          , o = e.address
                          , s = e.company_name
                          , l = r().escape(i)
                          , c = r().escape(o)
                          , u = r().escape(s)
                          , d = ['data-entity-id="'.concat(t, '"'), 'data-entity-type="'.concat((0,
                        a.convertElementType)(n, "string"), '"')]
                          , h = ['data-name="'.concat(l, '"'), 'data-address="'.concat(c, '"')].concat(_(d));
                        switch (Number(n)) {
                        case APP.element_types.companies:
                            var p = e.legal_entity
                              , f = p.name
                              , m = p.address
                              , g = p.vat_id
                              , v = p.kpp
                              , y = p.tax_registration_reason_code;
                            h = ['data-name="'.concat(f ? r().escape(f) : l, '"'), 'data-address="'.concat(m ? r().escape(m) : c, '"'), 'data-vat_id="'.concat(r().escape(g), '"'), 'data-kpp="'.concat(r().escape(v), '"'), 'data-tax_registration_reason_code="'.concat(r().escape(y), '"')].concat(_(d));
                            break;
                        case APP.element_types.contacts:
                            var b = e.contact_info
                              , w = b.phone
                              , k = b.email;
                            h = _(h).concat(['data-phone="'.concat(r().escape(w), '"'), 'data-email="'.concat(r().escape(k), '"')])
                        }
                        return {
                            id: t,
                            additional_data: h.join(" "),
                            text: [l, u ? ', <span class="u-text-secondary">'.concat(u, "</span>") : ""].join(""),
                            raw_highlight: !0
                        }
                    }
                    ));
                    t.trigger("suggest:reset", [n, ""])
                }
            }, {
                key: "_onFocused",
                value: function(e) {
                    var t = this.$el.height();
                    clearTimeout(this.blur_timeout),
                    this.$el.addClass("payer_focused");
                    var n = this.$el.height();
                    t !== n && this.$el.css("margin-bottom", -n + t + "px"),
                    this._current_value = o()(e.currentTarget).val(),
                    this._current_value.length || this._onValueChanged(e)
                }
            }, {
                key: "_onBlurred",
                value: function(e) {
                    var t = this
                      , n = o()(e.currentTarget)
                      , i = n.attr("data-query-type")
                      , s = this._elem("entity_type").val();
                    n.val() !== this._current_value && r().contains(["contacts_and_companies", "contacts", "companies"], s) && ("name" === i && 0 === n.val().length && this._current_value.length > 0 && this._elem("input").val("").trigger("change"),
                    "contacts" === s && this._elem("input").closest(".payer__item").addClass("hidden"),
                    this._elem("entity_id").val("").trigger("change"),
                    this._elem("entity_type").val("").trigger("change")),
                    this.blur_timeout = setTimeout((function() {
                        t.$el.removeClass("payer_focused"),
                        t.$el.css("margin-bottom", 0)
                    }
                    ), 100)
                }
            }, {
                key: "_onValueChanged",
                value: function(e) {
                    var t = o()(e.currentTarget)
                      , n = t.closest(".control--suggest").find(".js-control--suggest--list")
                      , i = t.val().trim()
                      , s = this.$el.attr("data-search-in");
                    if (s || !t.hasClass(this._class("name"))) {
                        t.attr("data-val", i);
                        var a = !1;
                        r().contains(["contacts_and_companies", "contacts", "companies"], s) && t.hasClass(this._class("name")) && (a = this._makeContactsRequest({
                            entity: s,
                            term: i
                        })),
                        a ? a.then((function(e) {
                            var t = r().map(e, (function(e) {
                                var t = r().escape(e.id)
                                  , n = r().escape(e.name)
                                  , i = r().escape(e.address)
                                  , o = r().escape(e.type)
                                  , s = r().escape(e.company_name);
                                return {
                                    id: e.id,
                                    additional_data: ['data-name="'.concat(n, '"'), 'data-address="'.concat(i, '"'), 'data-entity-id="'.concat(t, '"'), 'data-entity-type="'.concat(o, '"')].join(" "),
                                    text: [n, s ? ', <span class="u-text-secondary">' + s + "</span>" : ""].join(""),
                                    raw_highlight: !0
                                }
                            }
                            ));
                            n.trigger("suggest:reset", [t, ""])
                        }
                        )) : (n.trigger("suggest:reset", [[], ""]),
                        this._elem("input").closest(".payer__item").removeClass("hidden"))
                    }
                }
            }, {
                key: "_makeContactsRequest",
                value: function(e) {
                    var t = this
                      , n = e.entity
                      , i = e.term
                      , s = void 0 === i ? "" : i
                      , a = o().Deferred();
                    if (s.length >= 3 || 0 === s.length) {
                        var l = n + "_" + s
                          , c = "?type=".concat(n);
                        "contacts_and_companies" === n && (c = "?type=contacts&contacts=all"),
                        this._cache[l] ? a.resolve(this._cache[l]) : o().ajax({
                            url: "/ajax/search/".concat(c, "&query_type=name").concat(s ? "&q=" + s : "")
                        }).then((function(e) {
                            var i = e.status
                              , o = e.result;
                            if ("ok" !== i)
                                return a.reject(o),
                                void ("companies" === n && t._elem("input").closest(".payer__item").removeClass("hidden"));
                            t._cache[l] = r().map(o || [], (function(e) {
                                return {
                                    id: e.id,
                                    type: e.element_type === APP.element_types.contacts ? "contacts" : "companies",
                                    name: e.name,
                                    address: e.address || "",
                                    company_name: e.company_name
                                }
                            }
                            )),
                            a.resolve(t._cache[l])
                        }
                        ), a.reject)
                    } else
                        a.reject([]),
                        "companies" === n && this._elem("input").closest(".payer__item").removeClass("hidden");
                    return a.promise()
                }
            }, {
                key: "_onItemChosen",
                value: function(e, t) {
                    var n = t.attr("data-entity-type");
                    this._elem("input").closest(".payer__item").toggleClass("hidden", "contacts" === n),
                    this._elem("vat_id").closest(".payer__item").toggleClass("hidden", "contacts" === n),
                    this._elem("kpp").closest(".payer__item").toggleClass("hidden", "contacts" === n),
                    this._elem("tax_registration_reason_code").closest(".payer__item").toggleClass("hidden", "contacts" === n),
                    this._elem("name").val(t.attr("data-name")).trigger("change"),
                    this._elem("address").val(t.attr("data-address")).trigger("change"),
                    this._elem("phone").val(t.attr("data-phone")).trigger("change"),
                    this._elem("email").val(t.attr("data-email")).trigger("change"),
                    this._elem("vat_id").val(t.attr("data-vat_id") || "").trigger("change"),
                    this._elem("kpp").val(t.attr("data-kpp") || "").trigger("change"),
                    this._elem("tax_registration_reason_code").val(t.attr("data-tax_registration_reason_code") || "").trigger("change"),
                    this._elem("input").val("").trigger("change"),
                    this._elem("entity_id").val(t.attr("data-entity-id")).trigger("change"),
                    this._elem("entity_type").val(n).trigger("change")
                }
            }, {
                key: "_onSuggestItemMouseDown",
                value: function(e) {
                    o()(e.currentTarget).trigger("suggest:item:click-silent")
                }
            }],
            i = [{
                key: "controlClassName",
                get: function() {
                    return "js-control-payer"
                }
            }],
            n && u(t.prototype, n),
            i && u(t, i),
            c
        }(l.default);
        const v = g.extend(g);
        var y = "../build/transpiled/interface/controls/payer";
        window.define(y, (function() {
            var e = "undefined"
              , n = typeof t === e ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === e ? typeof module === e ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : t;
            return n && n.default || n
        }
        )),
        window.require([y])
    }
    ,
    467404: (e, t, n) => {
        "use strict";
        n.r(t),
        n.d(t, {
            default: () => h
        });
        var i = n(661533)
          , o = n.n(i)
          , s = n(55188)
          , r = n.n(s)
          , a = n(162262)
          , l = n.n(a)
          , c = n(880774)
          , u = n(227532)
          , d = n(183081);
        const h = d.default.extend({
            controlClassName: "js-control-pipeline-select_multiple-default",
            document_events: function() {
                var e = {};
                return e["change ".concat(this._selector("inner"), " ").concat(this._selector("pipeline_checkbox"))] = "onCheckAllPipelineStatuses",
                e["change ".concat(this._selector("inner"), " ").concat(this._selector("status_checkbox"))] = "onStatusCheckboxChange",
                r().extend({}, r().result(d.default.prototype, "document_events", {}), e)
            },
            initialize: function() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                    t[n] = arguments[n];
                this.empty_caption = !0,
                d.default.prototype.initialize.apply(this, t),
                l().mixin(this, u.default)
            },
            updateFoldedCaption: function(e, t) {
                var n = (this._$inner || this.$el.children(this._selector("inner"))).find(this._selector("holder")).find(this._selector("pipeline_caption_text"));
                this.empty_caption = r().isUndefined(t) ? this.empty_caption : t,
                this.empty_caption && n.attr("data-folded-title", (0,
                c.i18n)("Active stages"))
            },
            onStatusCheckboxChange: function(e) {
                var t = o()(e.currentTarget).closest(this._selector("pipeline"))
                  , n = t.find(this._selector("status_checkbox"))
                  , i = t.find(this._selector("pipeline_checkbox"))
                  , s = o().makeArray(this.$('input:checked[name="filter[status_id][]"], input:checked[name^="filter[pipe]"]')).filter((function(e) {
                    return e.checked
                }
                )).map((function(e) {
                    return {
                        name: e.name,
                        value: e.value
                    }
                }
                ));
                switch (i.trigger("controls:checkbox:minus", [!1]),
                n.filter((function() {
                    return this.checked
                }
                )).length) {
                case n.length:
                    i[0].checked = !0;
                    break;
                case 0:
                    i[0].checked = !1;
                    break;
                default:
                    i.trigger("controls:checkbox:minus", [!0])
                }
                r().isEqual(s, this.getFilterStatuses()) ? this.updateFoldedCaption({}, !0) : this._updateFoldedCaption()
            }
        });
        var p = "../build/transpiled/interface/controls/pipeline_select/multiple_default";
        window.define(p, (function() {
            var e = "undefined"
              , n = typeof t === e ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === e ? typeof module === e ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : t;
            return n && n.default || n
        }
        )),
        window.require([p])
    }
    ,
    878236: (e, t, n) => {
        "use strict";
        n.r(t),
        n.d(t, {
            default: () => c
        });
        var i = n(55188)
          , o = n.n(i)
          , s = n(880774)
          , r = n(467404)
          , a = n(661533);
        n(368439);
        var l = {
            "filter[pipe][-1]": (0,
            s.i18n)("No active leads linked"),
            "filter[pipe][-2]": (0,
            s.i18n)("No leads linked")
        };
        const c = r.default.extend({
            controlClassName: "js-control-pipeline-select-without-leads",
            _selectors: function() {
                return o().extend({}, o().result(r.default.prototype, "_selectors", {}), {
                    wo_leads_checkbox: ".js-without-leads-filter-checkbox input",
                    wo_leads_holder: ".pipeline-select__without-leads-filter"
                })
            },
            document_events: function() {
                var e = o().extend({}, o().result(r.default.prototype, "document_events", {}));
                return e["change ".concat(this._selector("wo_leads_checkbox"))] = "_onWOLeadsCheckboxChange",
                e
            },
            initialize: function() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                    t[n] = arguments[n];
                this._checked_wo_leads = [],
                r.default.prototype.initialize.apply(this, t)
            },
            _onWOLeadsCheckboxChange: function(e) {
                var t = this
                  , n = a(e.currentTarget).closest(this._selector("wo_leads_holder"));
                this._checked_wo_leads = [],
                n.find(this._selector("wo_leads_checkbox")).each((function(e, n) {
                    n.checked && t._checked_wo_leads.push(l[n.name])
                }
                )),
                this._updateFoldedCaptionThrottled()
            },
            _captionCentrify: function() {
                r.default.prototype._captionCentrify.apply(this, arguments),
                this._$inner.scrollTop(this._$inner.scrollTop() + 29)
            },
            _getLeadsPseudoPipelineTitle: function(e, t) {
                var n = [e];
                return this._checked_wo_leads.length && (n = t ? o().union(this._checked_wo_leads, n) : this._checked_wo_leads),
                (0,
                s.capitalize)(n.join(", ").toLowerCase())
            },
            _getDefaultMultipleTitle: function() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                    t[n] = arguments[n];
                return this._getLeadsPseudoPipelineTitle(r.default.prototype._getDefaultMultipleTitle.apply(this, t), !1)
            },
            _getFilledMultipleTitle: function() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                    t[n] = arguments[n];
                return this._getLeadsPseudoPipelineTitle(r.default.prototype._getFilledMultipleTitle.apply(this, t), !0)
            },
            _afterHide: function() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                    t[n] = arguments[n];
                r.default.prototype._afterHide.apply(this, t),
                this._elem("wo_leads_checkbox").trigger("change")
            }
        });
        var u = "../build/transpiled/interface/controls/pipeline_select/without_leads_filter";
        window.define(u, (function() {
            var e = "undefined"
              , n = typeof t === e ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === e ? typeof module === e ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : t;
            return n && n.default || n
        }
        )),
        window.require([u])
    }
    ,
    287345: (e, t, n) => {
        "use strict";
        n.r(t),
        n.d(t, {
            default: () => c
        });
        var i = n(340958)
          , o = n(151225)
          , s = n(327626)
          , r = n(617602)
          , a = n(924001)
          , l = n(94901);
        const c = i.default.extend({
            controlClassName: "control--select",
            initialize: function() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                    t[n] = arguments[n];
                var c = !this.$el.hasClass("control--select_react")
                  , u = o.default;
                i.default.prototype.initialize.apply(this, t),
                c && (this.$el.attr("data-save-overflow") && (u = s.default),
                this.$el.hasClass("control--select-with-subtext") && (u = r.default),
                this.$el.hasClass("js-select-without-blur") && (u = a.SelectWithoutBlur),
                this.$el.hasClass("control--select-huge") && (u = l.default),
                this._addComponent(u, {
                    el: this.el
                }))
            }
        });
        var u = "../build/transpiled/interface/controls/select/index";
        window.define(u, (function() {
            var e = "undefined"
              , n = typeof t === e ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === e ? typeof module === e ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : t;
            return n && n.default || n
        }
        )),
        window.require([u])
    }
    ,
    94901: (e, t, n) => {
        "use strict";
        n.r(t),
        n.d(t, {
            default: () => a
        });
        var i = n(151225)
          , o = n(460159)
          , s = n.n(o);
        function r(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        const a = i.default.extend({
            open: function() {
                if (!this.$fake_script) {
                    this.$fake_script = this.$el.find("script");
                    try {
                        var e = JSON.parse(this.$fake_script.html());
                        this.$el.find("ul").replaceWith(s()({
                            ref: "/tmpl/controls/select/inner.twig"
                        }).render((t = function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {}
                                  , i = Object.keys(n);
                                "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                                }
                                )))),
                                i.forEach((function(t) {
                                    r(e, t, n[t])
                                }
                                ))
                            }
                            return e
                        }({}, e),
                        n = null != (n = {
                            exclude_button_input: !0
                        }) ? n : {},
                        Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : function(e, t) {
                            var n = Object.keys(e);
                            if (Object.getOwnPropertySymbols) {
                                var i = Object.getOwnPropertySymbols(e);
                                n.push.apply(n, i)
                            }
                            return n
                        }(Object(n)).forEach((function(e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                        }
                        )),
                        t))),
                        this._dropElemCache("list"),
                        this.$fake_script.remove()
                    } catch (e) {}
                }
                var t, n;
                i.default.prototype.open.apply(this, arguments)
            }
        })
    }
    ,
    617602: (e, t, n) => {
        "use strict";
        n.r(t),
        n.d(t, {
            default: () => a
        });
        var i = n(55188)
          , o = n.n(i)
          , s = n(151225)
          , r = n(661533);
        const a = s.default.extend({
            onInputChange: function(e) {
                var t, n = (this._elem("input").val() || "").toString(), i = this._elem("list").find(this._selector("item_by_value", n));
                i.length || (i = this._elem("list").find(this._selector("item_by_value", n.replace("+", " ")))),
                this._elem("list").find(this._selector("item_selected")).removeClass(this._class("item_selected")),
                i.length ? t = i : ((t = this._elem("list").find(this._selector("item_default"))).length || (t = this._elem("list").find("".concat(this._selector("item"), ":first"))),
                this._elem("input").val(t.attr("data-value"))),
                t.addClass(this._class("item_selected"));
                var s = t.attr("data-bg-color")
                  , a = this._elem("button").css("background", s || "").toggleClass("control--select--button-colored", !!s).attr("data-value", t.attr("data-value")).children();
                o().each(a, (function(e) {
                    var n = r(e);
                    n.hasClass("control--select--button-inner") && n.text(t.find(".control--select--list--item-inner").text()),
                    n.hasClass("control--select--button-inner-small") && n.text(t.attr("data-small-text"))
                }
                )),
                "controls:change:visual" !== e.type && this._elem("input").change()
            }
        })
    }
    ,
    924001: (e, t, n) => {
        "use strict";
        function i(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(e, i.key, i)
            }
        }
        function o(e, t, n) {
            return o = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(e, t, n) {
                var i = function(e, t) {
                    for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = s(e)); )
                        ;
                    return e
                }(e, t);
                if (i) {
                    var o = Object.getOwnPropertyDescriptor(i, t);
                    return o.get ? o.get.call(n || e) : o.value
                }
            }
            ,
            o(e, t, n || e)
        }
        function s(e) {
            return s = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            ,
            s(e)
        }
        function r(e, t) {
            return r = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                e
            }
            ,
            r(e, t)
        }
        function a(e) {
            var t = function() {
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
                var n, i = s(e);
                if (t) {
                    var o = s(this).constructor;
                    n = Reflect.construct(i, arguments, o)
                } else
                    n = i.apply(this, arguments);
                return function(e, t) {
                    return !t || "object" != ((n = t) && "undefined" != typeof Symbol && n.constructor === Symbol ? "symbol" : typeof n) && "function" != typeof t ? function(e) {
                        if (void 0 === e)
                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return e
                    }(e) : t;
                    var n
                }(this, n)
            }
        }
        n.r(t),
        n.d(t, {
            SelectWithoutBlur: () => l
        });
        var l = function(e) {
            !function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && r(e, t)
            }(c, e);
            var t, n, l = a(c);
            function c() {
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, c),
                l.apply(this, arguments)
            }
            return t = c,
            (n = [{
                key: "initialize",
                value: function(e) {
                    o(s(c.prototype), "initialize", this).call(this, e || {})
                }
            }, {
                key: "onButtonOpenerBlur",
                value: function(e) {
                    e.stopPropagation()
                }
            }]) && i(t.prototype, n),
            c
        }(n(151225).default)
    }
    ,
    115799: (e, t, n) => {
        "use strict";
        n.r(t),
        n.d(t, {
            default: () => r
        });
        var i = n(661533)
          , o = n.n(i)
          , s = n(340958);
        const r = s.default.extend({
            controlClassName: "control-address",
            _in_edit: null,
            _classes: function() {
                return {
                    focused: "control-address__wrapper_focused",
                    blurred: "control-address__wrapper"
                }
            },
            _selectors: function() {
                return {
                    field_with_input: ".control-address__field input",
                    field_by_type: '.control-address__field[data-field-type="%s"]'
                }
            },
            events: {
                click: "startEdit",
                "focus :input": "startEdit",
                "address:edit": "startEdit",
                'change .control-address__field[data-field-type="country"] input': "checkChosenCountry"
            },
            document_events: {
                "controls:hide:private": "onHideControls",
                "escape:keydown": "onHideControls",
                "blur .control-address__wrapper_focused": "onHideControls"
            },
            initialize: function() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                    t[n] = arguments[n];
                s.default.prototype.initialize.apply(this, t),
                this.checkChosenCountry()
            },
            onHideControls: function(e, t) {
                var n, i = o()(e.target);
                if (n = "focusout" === e.type ? e.relatedTarget ? o()(e.relatedTarget).closest(".control-address") : this.$el : i.closest(".control-address"),
                "suggest" !== t)
                    return !n.length || n.length && !n.get(0).isSameNode(this.el) ? this.stopEdit() : void 0
            },
            startEdit: function() {
                this._in_edit || (this._in_edit = !0,
                this.checkChosenCountry().changePlaceholders({
                    num: 1
                }),
                this.$el.removeClass(this._classes().blurred).addClass(this._classes().focused))
            },
            stopEdit: function() {
                this._in_edit = !1,
                this.checkChosenCountry().changePlaceholders({
                    num: 2
                }),
                this.$el.removeClass(this._classes().focused).addClass(this._classes().blurred)
            },
            changePlaceholders: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return this._findElem("field_with_input").each((function(t, n) {
                    var i = o()(n);
                    i.attr("placeholder", i.attr("data-placeholder-".concat(e.num)))
                }
                )),
                this
            },
            checkChosenCountry: function() {
                var e = this._findElem("field_by_type", "country")
                  , t = e.find(".control--select")
                  , n = e.find("input");
                return t.toggleClass("not_empty", !!n.val()),
                this
            }
        });
        var a = "../build/transpiled/interface/controls/smart_address";
        window.define(a, (function() {
            var e = "undefined"
              , n = typeof t === e ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === e ? typeof module === e ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : t;
            return n && n.default || n
        }
        )),
        window.require([a])
    }
    ,
    720706: (e, t, n) => {
        "use strict";
        n.r(t),
        n.d(t, {
            default: () => d
        });
        var i = n(55188)
          , o = n.n(i)
          , s = n(162262)
          , r = n.n(s)
          , a = n(880774)
          , l = n(58345)
          , c = n(227532)
          , u = n(661533);
        n(368439),
        n(392697);
        const d = l.default.extend({
            controlClassName: "js-control-checkboxes_dropdown-statuses",
            initialize: function() {
                r().mixin(this, c.default),
                l.default.prototype.initialize.apply(this, arguments),
                this.setTitle({})
            },
            setTitle: function() {
                var e = this._findElem("checkboxes")
                  , t = this._findElem("checkboxes_checked")
                  , n = u.makeArray(this.$('input:checked[name="filter[status_id][]"], input:checked[name^="filter[pipe]"]')).filter((function(e) {
                    return e.checked
                }
                )).map((function(e) {
                    return {
                        name: e.name,
                        value: e.value
                    }
                }
                ));
                o().isEqual(n, this.getFilterStatuses()) ? this._updateTitle([(0,
                a.i18n)("Active stages")]) : (this._updateMasterMinus(t, e),
                this._setTitle(t, e))
            }
        });
        var h = "../build/transpiled/interface/controls/statuses_select";
        window.define(h, (function() {
            var e = "undefined"
              , n = typeof t === e ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === e ? typeof module === e ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : t;
            return n && n.default || n
        }
        )),
        window.require([h])
    }
    ,
    286350: (e, t, n) => {
        "use strict";
        n.r(t),
        n.d(t, {
            default: () => k
        });
        var i, o, s, r, a = n(661533), l = n.n(a), c = n(55188), u = n.n(c), d = n(228198), h = n.n(d), p = n(880774), f = n(577486), _ = h().PhoneNumberFormat, m = h().PhoneNumberUtil.getInstance(), g = {
            cache: {}
        }, v = {}, y = l()(document), b = !1, w = /[^\d]/gi;
        g.filterData = function(e) {
            var t = []
              , n = !0
              , i = e.val
              , s = g.cache[e.cache_id]
              , r = "n" === e.$this.attr("data-enable-filter");
            return s ? (o = s,
            n = !1,
            s.expire < (new Date).getTime() && (g.cache[e.cache_id] = void 0,
            s = void 0)) : o && o.cache_type_id === e.cache_type_id && i.indexOf(o.val) >= 0 && (s = o,
            u().keys(s.result).length || (n = !1)),
            s && s.result && (t = r ? s.result : u().filter(s.result, (function(t) {
                var n = (0,
                p.stripTags)(t.name || "").replace(/ё/gi, "е").toLowerCase()
                  , o = u().compact(i.toLowerCase().split(" "))
                  , s = [];
                switch (e.type) {
                case "email":
                    return (n = t.email ? ((0,
                    p.stripTags)(u().isArray(t.email) ? t.email.join(",") : t.email) || "").toString().toLowerCase() : "").indexOf(i.toLowerCase()) >= 0;
                case "phone":
                    return (n = t.phone ? (0,
                    p.stripTags)(u().isArray(t.phone) ? t.phone.join(",") : t.phone).replace(/[^\d]/gi, "") : "").indexOf(i.toLowerCase()) >= 0;
                case "leads_concat":
                    return (s = u().filter(o, (function(e) {
                        return t.text !== t.text.replace(new f.UnsafeRegExp("(\\s|[\\>\\@\\.\\)]|^)([^a-zа-яё0-9]*)(".concat(e, ")"),"gi"), "")
                    }
                    ))).length === o.length;
                case "sku":
                    return (t = u().find(t.custom_fields, (function(e) {
                        return "SKU" === e.code
                    }
                    ))) && (n = t.values[0].value,
                    s = u().filter(o, (function(e) {
                        return e = (0,
                        p.escapeRegExp)(e),
                        n !== n.replace(new f.UnsafeRegExp("(\\s|^)*([^a-zа-яё0-9]*)(".concat(e, ")"),"gi"), "")
                    }
                    ))),
                    s.length === o.length;
                default:
                    return (s = u().filter(o, (function(e) {
                        return e = (0,
                        p.escapeRegExp)(e),
                        n !== n.replace(new f.UnsafeRegExp("(\\s|^)*([^a-zа-яё0-9]*)(".concat(e, ")"),"gi"), "")
                    }
                    ))).length === o.length
                }
            }
            ))).length && (n = !1,
            g.last_ajax && g.last_ajax.abort()),
            {
                need_ajax: n,
                result: t.slice(0, 50),
                status: "ok"
            }
        }
        ,
        g.highlight = function(e, t, n) {
            if (!e || !t)
                return t;
            var i = u().compact(e.trim().split(" "))
              , o = "";
            switch (n) {
            case "phone":
                o = e.replace(/([+*?)(=\-_&^:;%$#!{}|'"/.,@\\])/gi, ""),
                o = e.length < 50 ? o.replace(/(.)/gi, "$1[^\\d]*?").slice(0, -7) : o,
                t = t.replace(new f.UnsafeRegExp("(".concat(o.toLowerCase(), ")"),"gi"), "<b>$1</b>");
                break;
            case "email":
                o = e.replace(/(\\)/gi, ""),
                t = t.replace(new f.UnsafeRegExp("(".concat(o.toLowerCase(), ")"),"gi"), "<b>$1</b>");
                break;
            default:
                u().each(i, (function(e) {
                    e = (0,
                    p.escapeRegExp)(e),
                    t = t.replace(new f.UnsafeRegExp("(?![^<]*?>|[^&]\\w+;)(?![^<]*?>)(".concat(e.toLowerCase(), ")(?![^<]*?>)"),"gi"), "<b>$1</b>")
                }
                ))
            }
            return t
        }
        ,
        g.getSuggests = function(e) {
            var t = g.filterData({
                cache_id: g.generateCacheId(e.$this, e.val),
                cache_type_id: g.generateCacheId(e.$this),
                val: e.val,
                type: e.type,
                $this: e.$this
            });
            t.need_ajax && !t.result.length || g.processData(t, e),
            t.need_ajax && g.throttledRequest(e)
        }
        ,
        g.processData = function(e, t) {
            return (t.skip_val || g.getVal(t.$this)) && (g.hideLoader(t.$parent),
            t.$this.trigger("suggest:loaded", [e, t.$list])),
            e
        }
        ,
        g.showLoader = function(e) {
            e.length && (e.hasClass("control--suggest-loading") || e.addClass("control--suggest-loading").append('<span class="control--suggest--loader spinner-icon"></span>'))
        }
        ,
        g.hideLoader = function(e) {
            e.length && e.removeClass("control--suggest-loading").children(".control--suggest--loader").remove()
        }
        ,
        g.sendRequest = function(e) {
            var t;
            g.last_ajax && u().isUndefined(g.last_ajax.status) && g.last_ajax.abort(),
            r && (g.showLoader(e.$parent),
            e.$this.attr("data-widget") ? (t = e.$this.attr("data-widget"),
            u().isFunction(APP.widgets.list[t].callbacks.searchDataInCard) && APP.widgets.list[t].callbacks.searchDataInCard(e.val, APP.data.current_card.element_type, APP.data.current_card.id).then(u().bind((function(t) {
                g.prepareData(e, {
                    result: t || ""
                })
            }
            ), this)).catch(u().bind((function(e) {
                console.error(e)
            }
            ), this))) : g.last_ajax = l().ajax(u().extend({
                url: e.$this.attr("data-url"),
                data: e.$this.attr("data-params").toString().replace("#q#", encodeURIComponent(e.val)),
                val: e.val,
                dataType: "json"
            }, e.$this.attr("data-headers") ? {
                headers: JSON.parse(e.$this.attr("data-headers"))
            } : {})).done((function(t, n) {
                t && t.response && t.response.catalog_elements && (t = {
                    result: t.response.catalog_elements
                }),
                t && t._embedded && t._embedded.elements && (t = {
                    result: t._embedded.elements
                }),
                t || "nocontent" !== n || (t = {}),
                g.prepareData(e, t)
            }
            )).fail((function() {
                g.hideLoader(e.$parent)
            }
            )))
        }
        ,
        g.prepareData = function(e, t) {
            var n = g.generateCacheId(e.$this, e.val)
              , i = g.generateCacheId(e.$this)
              , o = g.getVal(e.$this);
            e.no_filter ? g.processData(t, e) : (g.cache[n] = u().extend(t, {
                val: e.val,
                expire: (new Date).getTime() + 3e5
            }),
            g.processData(g.filterData({
                cache_id: n,
                cache_type_id: i,
                val: o,
                type: e.type,
                $this: e.$this
            }), e))
        }
        ,
        g.generateCacheId = function(e, t) {
            return e.attr("data-url") + e.attr("data-params") + (t || "")
        }
        ,
        g.keyboardHide = function() {
            APP.is_touch_device && document.activeElement && document.activeElement.blur()
        }
        ,
        g.hideSuggest = function(e) {
            var t, n = !e;
            return !(!(e = e || r) || e.hasClass("catalog-fields__search")) && (t = e.find(".control--suggest--list-opened").length > 0,
            e.find(".control--suggest--list-opened").removeClass("control--suggest--list-opened").addClass("control--suggest--list").css("display", ""),
            e.css("z-index", "").trigger("suggest:hidden"),
            g.hideLoader(e),
            n && (r = !1),
            t)
        }
        ,
        g.getVal = function(e) {
            var t, n = l().trim(e.val()) || "";
            if ("phone" === e.attr("data-type"))
                if ((n = [0 === n.indexOf("+") ? "+" : "", n.replace(w, "")].join("")).length <= 15 && h().PhoneNumberUtil.isViablePhoneNumber(n)) {
                    var i = function(e) {
                        try {
                            return m.parseAndKeepRawInput(e)
                        } catch (t) {
                            try {
                                return m.parseAndKeepRawInput(e, APP.constant("account").country)
                            } catch (e) {
                                return null
                            }
                        }
                    }(n);
                    i && (t = i,
                    n = m.format(t, _.E164).toString().replace("+".concat(t.getCountryCode()), ""))
                } else
                    n.replace(w, "").toString();
            return n.toLowerCase().replace(/ё/gi, "е")
        }
        ,
        g.reset = function(e, t, n, i) {
            var o, s = t.closest(".control--suggest"), a = s.find(".control--suggest--input"), c = a.val(), d = "";
            u().isFunction(i) ? l().each(n, (function(e, t) {
                d += i(t)
            }
            )) : (o = u().template(i || '<li data-value-id="<%= data.id %>" company-id ="<%= data.company_id %>" data-contact-id="<%= data.contact_id %>" class="control--suggest--list--item <%= data.custom_class %>" <%= data.additional_data %>><span class="control--suggest--list--item-inner" title="<%= _.escape(data.title) %>"><%= data.highlighted_text %></span></li>'),
            l().each(n, (function(e, t) {
                var n = (t.text || "").replace(/<\/?b>/gi, "").replace(/ё/gi, "е");
                t.raw_highlight || (n = u().escape(n)),
                d += o({
                    data: u().extend({}, t, {
                        highlighted_text: g.highlight(c, n, s.find(".control--suggest--input").attr("data-type")),
                        title: (0,
                        p.stripTags)(t.title ? t.title : t.text)
                    })
                })
            }
            ))),
            t.html(d),
            d.length && (a.is(":focus") || "hidden" === a.attr("type")) ? (t.removeClass("control--suggest--list").addClass("control--suggest--list-opened"),
            s.css("z-index", parseInt(s.css("z-index")) + 2),
            g.hideLoader(s),
            r = s) : g.hideSuggest(s)
        }
        ,
        g.throttledRequest = u().throttle((function(e) {
            g.sendRequest({
                type: e.type,
                no_filter: e.no_filter,
                $this: e.$this,
                $parent: e.$parent,
                $list: e.$list,
                skip_val: e.skip_val,
                val: e.val
            })
        }
        ), 700),
        v[40] = function(e) {
            var t, n, i;
            e.$selected.length ? (e.$selected.is(":last-child") || (t = e.$selected.siblings(".".concat(e.item_class, ":visible")).andSelf().index(e.$selected)) < e.$list.find(".".concat(e.item_class, ":visible")).length - 1 && (i = e.$list.find(".".concat(e.item_class, ":visible:eq(").concat(t + 1, ")")),
            e.$selected.removeClass("".concat(e.item_class, "-selected")),
            i.hasClass("js--suggest-item--not-selectable") ? e.$selected = i.nextUntil(".".concat(e.item_class, ":visible:first:not(.js--suggest-item--not-selectable)")).addClass("".concat(e.item_class, "-selected")) : e.$selected = e.$list.find(".".concat(e.item_class, ":visible:eq(").concat(t + 1, ")")).addClass("".concat(e.item_class, "-selected"))),
            e.$selected.position().top + e.$selected.outerHeight() > e.$list.height() && (n = e.$selected.position().top - e.$list.height() + e.$selected.outerHeight() + e.$list.scrollTop())) : (i = e.$list.find(".".concat(e.item_class, ":visible:first"))).hasClass("js--suggest-item--not-selectable") ? i.next(".".concat(e.item_class, ":visible:first:not(.js--suggest-item--not-selectable)")).addClass("".concat(e.item_class, "-selected")) : i.addClass("".concat(e.item_class, "-selected")),
            e.$list.scrollTop(n)
        }
        ,
        v[38] = function(e) {
            var t, n, i = e.$list.scrollTop();
            if (!e.$selected.length)
                return !1;
            e.$selected.is(":first-child") || (t = e.$selected.siblings(".".concat(e.item_class, ":visible")).andSelf().index(e.$selected),
            n = e.$list.find(".".concat(e.item_class, ":visible:eq(").concat(t - 1, ")")),
            t > 0 && (e.$selected.removeClass("".concat(e.item_class, "-selected")),
            n.hasClass("js--suggest-item--not-selectable") && n.prev(".".concat(e.item_class, ":visible:not(.js--suggest-item--not-selectable)")).length ? e.$selected = n.prev(".".concat(e.item_class, ":visible:not(.js--suggest-item--not-selectable)")).addClass("".concat(e.item_class, "-selected")) : e.$selected = n.addClass("".concat(e.item_class, "-selected"))),
            e.$selected.position().top - e.$selected.outerHeight() < 0 && 0 !== e.$list.scrollTop() && (i += e.$selected.position().top)),
            e.$list.scrollTop(i)
        }
        ,
        v[13] = function(e) {
            if (e.$selected.length)
                return e.$selected.trigger("suggest:item:click"),
                !1
        }
        ,
        v[27] = function(e) {
            g.processData({
                result: []
            }, e)
        }
        ,
        y.on("page:changed", (function() {
            g.cache = {}
        }
        )).on("keyboard:hide", g.keyboardHide).on("controls:hide:private", (function(e) {
            r && r.get(0) !== e.target && g.hideSuggest() && g.keyboardHide()
        }
        )).on("click focus", ".control--suggest--input", (function(e) {
            var t, n, i, o = l()(this), s = o.closest(".control--suggest");
            APP.is_touch_device && "focus" !== e.type || l()(document).trigger({
                type: "controls:hide",
                target: s
            }),
            r = s,
            s.find(".control--suggest--list--item").length && !o.hasClass("js-control--suggest--input-ajax") && (s.css("z-index", parseInt(s.css("z-index")) + 1),
            (t = s.find(".control--suggest--list, .control--suggest--list-opened").removeClass("at-top control--suggest--list").addClass("control--suggest--list-opened").css("display", "")).visible() || t.addClass("at-top"),
            i = (n = t.find(".control--suggest--list--item-selected").index()) >= 0 && t.find(".control--suggest--list--item:first").outerHeight(),
            s.find(".control--suggest--list--item").each((function() {
                l()(this).show()
            }
            )),
            i && n >= 0 && t.scrollTop(i * n - 4 * i)),
            o.trigger("controls:suggest:focus"),
            e.stopPropagation()
        }
        )).on("input", ".js-control--suggest--input", (function() {
            var e = l()(this)
              , t = e.closest(".control--suggest")
              , n = t.find(".control--suggest--list--item")
              , i = t.find(".js-control--suggest--list")
              , o = g.getVal(e)
              , s = !0;
            e.is(":focus") && (i.show().removeClass("control--suggest--list").addClass("control--suggest--list-opened"),
            o ? (n.each((function() {
                var e = l()(this)
                  , n = (l().trim(e.text()) || "").toLowerCase()
                  , i = n.indexOf(o);
                0 === i || 0 === n.indexOf("0".concat(o)) || t.hasClass("js-substr-search") && -1 !== i ? (s = !1,
                e.show()) : (e.hide(),
                e.hasClass("control--suggest--list--item-selected") && e.removeClass("control--suggest--list--item-selected"))
            }
            )),
            s && i.hide()) : n.length ? n.show() : i.hide())
        }
        )).on("suggest:reset", ".js-control--suggest--list", (function(e, t, n) {
            g.reset(e, l()(this), t, n)
        }
        )).on("mousedown", ".control--suggest--list--item", (function() {
            s = !0
        }
        )).on("blur", ".js-control--suggest--input-ajax", (function() {
            var e = this
              , t = l()(this).closest(".control--suggest");
            g.hideLoader(t),
            s || setTimeout((function() {
                g.hideSuggest(t),
                l()(e).trigger("controls:suggest:blur")
            }
            ), 100)
        }
        )).on("suggest:loader", ".js-control--suggest--input, .js-control--suggest--input-ajax", (function(e, t) {
            var n = l()(e.currentTarget).closest(".control--suggest");
            !1 === t ? g.hideLoader(n) : g.showLoader(n)
        }
        )).on("input suggest:load-empty", ".js-control--suggest--input-ajax", (function(e) {
            var t = l()(this)
              , n = t.closest(".control--suggest")
              , i = n.find(".js-control--suggest--list")
              , o = g.getVal(t);
            s = !1,
            o.length >= 3 || "suggest:load-empty" === e.type ? (r = n,
            i.html("").removeClass("control--suggest--list-opened").addClass("control--suggest--list"),
            t.attr("data-val", o),
            g.getSuggests({
                type: t.attr("data-type"),
                no_filter: Boolean(t.attr("data-no-filter")) || !1,
                $this: t,
                $parent: n,
                $list: i,
                val: o,
                skip_val: "suggest:load-empty" === e.type
            })) : l()(document).trigger({
                type: "controls:hide",
                target: n
            })
        }
        )).on("click suggest:item:click suggest:item:click-silent", ".control--suggest--list--item", (function(e) {
            var t = l()(this)
              , n = t.closest(".control--suggest")
              , i = n.find(".control--suggest--input");
            if (t.hasClass("js--suggest-item--not-selectable"))
                return !1;
            e.stopPropagation(),
            n.find(".control--suggest--list--item-selected").removeClass("control--suggest--list--item-selected"),
            t.addClass("control--suggest--list--item-selected"),
            i.val(l().trim(t.text())).attr("data-value-id", t.attr("data-value-id")).trigger("controls:change").trigger("suggest:changed", [t.clone()]),
            "suggest:item:click-silent" !== e.type && i.trigger("focus"),
            t.trigger("suggest:click", [t]),
            g.hideSuggest(),
            s = !1
        }
        )),
        y.on("mousemove", ".control--suggest--list-opened", (function() {
            var e = l()(this);
            b || e.removeClass("control--suggest--list-navigate-by-key").find(".control--suggest--list--item-selected").removeClass("control--suggest--list--item-selected")
        }
        )).on("keyup", ".control--suggest--input", (function() {
            i = setTimeout((function() {
                b = !1
            }
            ), 100)
        }
        )).on("keydown", ".control--suggest--input", (function(e) {
            var t, n, o = l()(this), s = !o.hasClass("control--suggest--input"), r = s ? o.closest(".multisuggest").find(".multisuggest__suggest") : o.closest(".control--suggest").find(".control--suggest--list-opened"), a = s ? "multisuggest__suggest__item" : "control--suggest--list--item";
            if (r.length && r.is(":visible") && u().isFunction(v[e.keyCode]))
                return clearTimeout(i),
                b = !0,
                n = r.find(".".concat(a, ":hover")),
                (t = r.find(".".concat(a, "-selected"))).length || (t = n),
                r.addClass("control--suggest--list-navigate-by-key"),
                v[e.keyCode]({
                    $this: o,
                    $parent: o.closest("control--suggest"),
                    $selected: t,
                    $list: r,
                    item_class: a
                }),
                !1
        }
        ));
        const k = g;
        var P = "../build/transpiled/interface/controls/suggest";
        window.define(P, (function() {
            var e = "undefined"
              , n = typeof t === e ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === e ? typeof module === e ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : t;
            return n && n.default || n
        }
        )),
        window.require([P])
    }
    ,
    949918: (e, t, n) => {
        "use strict";
        n.r(t),
        n.d(t, {
            default: () => k
        });
        var i = n(55188)
          , o = n.n(i)
          , s = n(460159)
          , r = n.n(s)
          , a = n(880774)
          , l = n(202241)
          , c = n(287345)
          , u = n(661533);
        function d(e) {
            if (void 0 === e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }
        function h(e, t, n, i, o, s, r) {
            try {
                var a = e[s](r)
                  , l = a.value
            } catch (e) {
                return void n(e)
            }
            a.done ? t(l) : Promise.resolve(l).then(i, o)
        }
        function p(e) {
            return function() {
                var t = this
                  , n = arguments;
                return new Promise((function(i, o) {
                    var s = e.apply(t, n);
                    function r(e) {
                        h(s, i, o, r, a, "next", e)
                    }
                    function a(e) {
                        h(s, i, o, r, a, "throw", e)
                    }
                    r(void 0)
                }
                ))
            }
        }
        function f(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(e, i.key, i)
            }
        }
        function _(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        function m(e, t, n) {
            return m = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(e, t, n) {
                var i = function(e, t) {
                    for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = g(e)); )
                        ;
                    return e
                }(e, t);
                if (i) {
                    var o = Object.getOwnPropertyDescriptor(i, t);
                    return o.get ? o.get.call(n || e) : o.value
                }
            }
            ,
            m(e, t, n || e)
        }
        function g(e) {
            return g = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            ,
            g(e)
        }
        function v(e, t) {
            return v = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                e
            }
            ,
            v(e, t)
        }
        function y(e) {
            var t = function() {
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
                var n, i = g(e);
                if (t) {
                    var o = g(this).constructor;
                    n = Reflect.construct(i, arguments, o)
                } else
                    n = i.apply(this, arguments);
                return function(e, t) {
                    return !t || "object" != ((n = t) && "undefined" != typeof Symbol && n.constructor === Symbol ? "symbol" : typeof n) && "function" != typeof t ? d(e) : t;
                    var n
                }(this, n)
            }
        }
        function b(e, t) {
            var n, i, o, s, r = {
                label: 0,
                sent: function() {
                    if (1 & o[0])
                        throw o[1];
                    return o[1]
                },
                trys: [],
                ops: []
            };
            return s = {
                next: a(0),
                throw: a(1),
                return: a(2)
            },
            "function" == typeof Symbol && (s[Symbol.iterator] = function() {
                return this
            }
            ),
            s;
            function a(s) {
                return function(a) {
                    return function(s) {
                        if (n)
                            throw new TypeError("Generator is already executing.");
                        for (; r; )
                            try {
                                if (n = 1,
                                i && (o = 2 & s[0] ? i.return : s[0] ? i.throw || ((o = i.return) && o.call(i),
                                0) : i.next) && !(o = o.call(i, s[1])).done)
                                    return o;
                                switch (i = 0,
                                o && (s = [2 & s[0], o.value]),
                                s[0]) {
                                case 0:
                                case 1:
                                    o = s;
                                    break;
                                case 4:
                                    return r.label++,
                                    {
                                        value: s[1],
                                        done: !1
                                    };
                                case 5:
                                    r.label++,
                                    i = s[1],
                                    s = [0];
                                    continue;
                                case 7:
                                    s = r.ops.pop(),
                                    r.trys.pop();
                                    continue;
                                default:
                                    if (!((o = (o = r.trys).length > 0 && o[o.length - 1]) || 6 !== s[0] && 2 !== s[0])) {
                                        r = 0;
                                        continue
                                    }
                                    if (3 === s[0] && (!o || s[1] > o[0] && s[1] < o[3])) {
                                        r.label = s[1];
                                        break
                                    }
                                    if (6 === s[0] && r.label < o[1]) {
                                        r.label = o[1],
                                        o = s;
                                        break
                                    }
                                    if (o && r.label < o[2]) {
                                        r.label = o[2],
                                        r.ops.push(s);
                                        break
                                    }
                                    o[2] && r.ops.pop(),
                                    r.trys.pop();
                                    continue
                                }
                                s = t.call(e, r)
                            } catch (e) {
                                s = [6, e],
                                i = 0
                            } finally {
                                n = o = 0
                            }
                        if (5 & s[0])
                            throw s[1];
                        return {
                            value: s[0] ? s[1] : void 0,
                            done: !0
                        }
                    }([s, a])
                }
            }
        }
        var w = function(e) {
            !function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && v(e, t)
            }(c, e);
            var t, n, i, s = y(c);
            function c() {
                var e;
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, c),
                _(d(e = s.apply(this, arguments)), "_is_new_element", void 0),
                _(d(e), "_is_disabled", void 0),
                e
            }
            return t = c,
            n = [{
                key: "template",
                get: function() {
                    return "/tmpl/controls/select.twig"
                }
            }, {
                key: "events",
                value: function() {
                    var e;
                    return _(e = {}, "supplier:set-is-new-element ".concat(this._selector("special_select_input")), "_setIsNewElement"),
                    _(e, "supplier:set-is-supplier-disabled ".concat(this._selector("special_select_input")), "_setIsSelectDisabled"),
                    _(e, "controls:change ".concat(this._selector("special_select_input")), "handleSelectChange"),
                    e
                }
            }, {
                key: "_classes",
                value: function() {
                    return o().extend({}, m(g(c.prototype), "_classes", this).call(this), {
                        supplier_form: "linked-form__field-supplier",
                        list_item: "control--select--list--item",
                        list_item_selected: "control--select--list--item-selected",
                        select_button: "control--select--button",
                        select_input: "control--select--input",
                        special_select_input: "js-supplier-input"
                    })
                }
            }, {
                key: "_preload",
                value: function() {
                    return r()._preload([this.template])()
                }
            }, {
                key: "initialize",
                value: function() {
                    m(g(c.prototype), "initialize", this).apply(this, arguments),
                    this._suppliers_collection = this._addComponent(l.default),
                    this.render()
                }
            }, {
                key: "render",
                value: function() {
                    var e = this;
                    return p((function() {
                        return b(this, (function(t) {
                            switch (t.label) {
                            case 0:
                                return [4, e._preload()];
                            case 1:
                                return t.sent(),
                                e.$el.trigger("supplier:controls:view:init"),
                                e._render(),
                                [2]
                            }
                        }
                        ))
                    }
                    ))()
                }
            }, {
                key: "_render",
                value: function() {
                    this._setSuppliersSelect(APP.constant("account").suppliers.catalog_id)
                }
            }, {
                key: "destroy",
                value: function() {
                    m(g(c.prototype), "destroy", this).apply(this, arguments)
                }
            }, {
                key: "_setSuppliersSelect",
                value: function(e) {
                    var t = this;
                    return p((function() {
                        return b(this, (function(n) {
                            switch (n.label) {
                            case 0:
                                return [4, t._suppliers_collection.fetch({
                                    url: t._suppliers_collection.url(e),
                                    data: {
                                        limit: 50
                                    }
                                })];
                            case 1:
                                return n.sent(),
                                t._suppliers_collection.length && t._rerenderSuppliersSelectField(),
                                [2]
                            }
                        }
                        ))
                    }
                    ))()
                }
            }, {
                key: "handleSelectChange",
                value: function() {
                    this._setSuppliersSelect(APP.constant("account").suppliers.catalog_id)
                }
            }, {
                key: "_setIsNewElement",
                value: function(e, t) {
                    this._is_new_element = t
                }
            }, {
                key: "_setIsSelectDisabled",
                value: function(e, t) {
                    this._is_disabled = t
                }
            }, {
                key: "_rerenderSuppliersSelectField",
                value: function() {
                    var e = this._elem("select_input")
                      , t = this._suppliers_collection.map((function(e) {
                        return {
                            id: parseInt(e.get("id")),
                            option: e.get("name")
                        }
                    }
                    ))
                      , n = e.val();
                    t.unshift({
                        id: "",
                        option: (0,
                        a.i18n)("Select")
                    }),
                    e.val().length || (n = this._is_new_element ? t[1].id : "");
                    var i = u(r()({
                        ref: this.template
                    }).render({
                        name: e.attr("name"),
                        class_name: "linked-form__select",
                        items: t,
                        selected: n,
                        disabled: this._is_disabled || !1,
                        input_special_class: this._class("special_select_input")
                    }));
                    this.$el.html(i),
                    this.setElement(this.$el),
                    this._dropElemCache(),
                    this._elem("select_input").trigger("change")
                }
            }],
            i = [{
                key: "controlClassName",
                get: function() {
                    return "js-control-supplier"
                }
            }],
            n && f(t.prototype, n),
            i && f(t, i),
            c
        }(c.default);
        const k = w.extend(w);
        var P = "../build/transpiled/interface/controls/supplier";
        window.define(P, (function() {
            var e = "undefined"
              , n = typeof t === e ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === e ? typeof module === e ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : t;
            return n && n.default || n
        }
        )),
        window.require([P])
    }
    ,
    202241: (e, t, n) => {
        "use strict";
        n.r(t),
        n.d(t, {
            default: () => s
        });
        var i = n(974839)
          , o = n.n(i);
        const s = (0,
        n(763176).wrapCacheCollection)(o().Collection.extend({
            itemRel: "elements",
            url: function(e) {
                return "/ajax/v4/catalogs/".concat(e, "/elements")
            }
        }));
        var r = "../build/transpiled/interface/controls/suppliers_collection";
        window.define(r, (function() {
            var e = "undefined"
              , n = typeof t === e ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === e ? typeof module === e ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : t;
            return n && n.default || n
        }
        )),
        window.require([r])
    }
    ,
    936078: (e, t, n) => {
        "use strict";
        n.r(t),
        n.d(t, {
            default: () => d
        });
        var i = n(55188)
          , o = n.n(i)
          , s = n(161320)
          , r = n.n(s)
          , a = n(848655)
          , l = n(319779)
          , c = n(661533)
          , u = n(403474);
        const d = l.default.extend({
            controlClassName: "js-control-date-tasks-date",
            _getDefaults: function() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                    t[n] = arguments[n];
                var i = this.$el.attr("data-calendar-id")
                  , s = c("#tasks_date_calendar_".concat(i));
                return s || (s = this.$el),
                o().extend({}, l.default.prototype._getDefaults.apply(this, t), {
                    selected: this._findElem("input").val(),
                    attachTo: s.get(0)
                })
            },
            _getKalendaeHandler: function() {
                return u
            },
            _classes: function() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                    t[n] = arguments[n];
                return o().extend({}, l.default.prototype._classes.apply(this, t), {
                    date_field: "tasks-date__controls-date-input",
                    input: "tasks-date__controls-date-input",
                    input_not_valid: "date_field_not-valid"
                })
            },
            events: function() {
                var e = o().extend({}, o().result(l.default.prototype, "events", {}));
                return e["input ".concat(this._selector("input"))] = "_onDateInput",
                e["blur ".concat(this._selector("input"))] = "reformatOnBlur",
                e["keyup ".concat(this._selector("input"))] = "_hideCalendarOnEnterKey",
                e
            },
            initialize: function() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                    t[n] = arguments[n];
                l.default.prototype.initialize.apply(this, t),
                this.container()
            },
            destroy: function() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                    t[n] = arguments[n];
                l.default.prototype.destroy.apply(this, t),
                this.$container && this.$container.remove()
            },
            _hideCalendarOnEnterKey: function(e) {
                13 !== e.keyCode || this._findElem("input").hasClass(this._class("input_not_valid")) || (this._findElem("input").val(this._findElem("input").val()).trigger("controls:change", [this._findElem("input").val()]),
                this.$el.trigger("control:date:selected"))
            },
            _onDateInput: function() {
                var e = this._findElem("input").val();
                this.validateSelected() && e.length > 5 && (e = r()(e, (0,
                a.format)("parse")).format((0,
                a.format)("date")),
                this.kalendae.setSelected(e)),
                this._findElem("input").trigger("controls:change", [e])
            },
            container: function() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                    t[n] = arguments[n];
                var i, o = this;
                return this.$container || (l.default.prototype.container.apply(this, t),
                i = this.kalendae.draw,
                this.kalendae.draw = function() {
                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                        t[n] = arguments[n];
                    var s = i.apply(this, t);
                    return o._addTwoWeeks(),
                    s
                }
                ,
                this._addTwoWeeks()),
                this.$container
            },
            onChangeSingle: function() {
                this.kalendae && this._elem("date_field").trigger("controls:change", [this.kalendae.getSelected()])
            },
            validateSelected: function() {
                var e = !0
                  , t = r()(this._findElem("input").val(), (0,
                a.format)("parse"));
                return this._findElem("input").removeClass(this._class("input_not_valid")),
                (!t.isValid() || t.format("X") < 0) && (e = !1,
                this._findElem("input").addClass(this._class("input_not_valid"))),
                e
            },
            _addTwoWeeks: function() {
                var e = c(this.kalendae.container)
                  , t = {
                    append: o().range(1, 15, 1)
                };
                e.find(".k-fake-date").remove();
                var n = e.find(".k-days span")
                  , i = "YYYY-MM-DD"
                  , s = r()(n.first().attr("data-date"), i);
                s.month() === this.kalendae.viewStartDate.month() && (s.subtract(1, "month").endOf("month"),
                t.append = !1);
                var a = r()(n.last().attr("data-date"), i);
                a.month() === this.kalendae.viewStartDate.month() && (s.add(1, "month").startOf("month"),
                t.prepend = !1),
                o().each(t, (function(t, r) {
                    t && e.find(".k-days")[r](o().map(t, (function(e) {
                        var t = ("prepend" === r ? s : a).clone()["prepend" === r ? "subtract" : "add"](e, "days");
                        return n.first().clone().removeClass("k-in-month k-selected k-today").addClass("k-out-of-month k-fake-date").attr("data-date", t.format(i)).text(t.format("D")).get(0).outerHTML
                    }
                    )).join(""))
                }
                ), this),
                e.find(".k-days").children("span").each((function(e, t) {
                    var n = c(t);
                    n.toggleClass("k-before-today", r()(n.attr("data-date")).isBefore(r()().startOf("day")))
                }
                ))
            }
        });
        var h = "../build/transpiled/interface/controls/tasks_date/date";
        window.define(h, (function() {
            var e = "undefined"
              , n = typeof t === e ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === e ? typeof module === e ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : t;
            return n && n.default || n
        }
        )),
        window.require([h])
    }
    ,
    874995: (e, t, n) => {
        "use strict";
        n.r(t),
        n.d(t, {
            default: () => _
        });
        var i = n(55188)
          , o = n.n(i)
          , s = n(460159)
          , r = n.n(s)
          , a = n(161320)
          , l = n.n(a)
          , c = n(579569)
          , u = n(811707)
          , d = n(582147)
          , h = n(340958)
          , p = n(112904)
          , f = n(661533);
        n(936078);
        const _ = h.default.extend({
            controlClassName: "tasks-date",
            _classes: function() {
                return {
                    time: "tasks-date__controls-time",
                    time_input: "tasks-date__controls-time-input",
                    date: "js-control-date-tasks-date",
                    date_input: "tasks-date__controls-date-input",
                    preset: "js-tasks-date-preset",
                    wrapper: "tasks-date__wrapper",
                    wrapper_inner: "tasks-date__wrapper-inner",
                    list: "tasks-date__list",
                    caption: "tasks-date__caption",
                    caption_date: "tasks-date__caption-date",
                    caption_time: "tasks-date__caption-time"
                }
            },
            _selectors: function() {
                return {
                    timeline_scroller_wrapper: ".fc-agenda-view .fc-body > tr > .fc-widget-content"
                }
            },
            events: {
                "click .tasks-date__caption-date": "onCaptionClick",
                "click .tasks-date__caption-time": "onCaptionClick"
            },
            document_events: {
                toggleWidgetPanel: "_setPositions",
                "controls:hide:private": "onDocumentClickHide"
            },
            initialize: function() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                    t[n] = arguments[n];
                h.default.prototype.initialize.apply(this, t),
                this._cached_tasks = {},
                this._$body_control = this._elem("wrapper"),
                this._$body_control.on("click", ".tasks-date__controls, .tasks-date__wrapper-inner", o().bind((function(e) {
                    e.stopPropagation()
                }
                ), this)).on("click", o().bind((function(e) {
                    e.stopPropagation(),
                    this._$document.trigger({
                        type: "controls:hide",
                        target: this._$body_control
                    })
                }
                ), this)).on("focus", [this._selector("time_input"), this._selector("date_input")].join(","), o().bind(this.onInputFocusPlaceCursorToEnd)).on("input", this._selector("time_input"), o().bind(this.onTimeInputChange, this)).on("controls:ajust", this._selector("time_input"), o().bind(this.onTimeInputAjust, this)).on("controls:change", this._selector("date_input"), o().bind(this.onDateInputChange, this)).on("click", this._selector("preset"), o().bind(this.onDatePresetClick, this))
            },
            destroy: function() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                    t[n] = arguments[n];
                this._$body_control.off(),
                this.$overlay && this.$overlay.off(),
                h.default.prototype.destroy.apply(this, t)
            },
            onDateInputChange: function(e) {
                var t = e.currentTarget.value
                  , n = l()(t, APP.system.format.date.date)
                  , i = this._getFullCalendarEl();
                n.isSame(l()().tz(APP.system.timezone), "day") ? t = n.format(l()().localeData().calendar("today")) : n.isSame(l()().tz(APP.system.timezone).add(1, "days"), "day") ? t = n.format(l()().localeData().calendar("tomorrow")) : n.isSame(l()().tz(APP.system.timezone).subtract(1, "days"), "day") ? t = n.format(l()().localeData().calendar("yesterday")) : n.isSame(l()().add(1, "week")) ? t = APP.lang.tasks_period_next_week : n.isSame(l()().add(1, "month")) && (t = APP.lang.tasks_period_next_month),
                this._elem("caption_date").text(t),
                i && i.fullCalendar("gotoDate", n)
            },
            onInputFocusPlaceCursorToEnd: function(e) {
                (0,
                u.setCursorPosition)(e.currentTarget)
            },
            onTimeInputChange: function() {
                this.onTimeInputAjust(),
                this._updateNewEvent(),
                this._updateScrollTop()
            },
            onTimeInputAjust: function() {
                var e = this._$body_control.find(this._selector("time_input")).val();
                this._elem("caption_time").attr("data-hide-time", e ? 0 : 1).text(e),
                this._syncTimeWidth()
            },
            onDatePresetClick: function(e) {
                var t = f(e.currentTarget)
                  , n = this._$body_control.find(this._selector("date_input")).trigger("controls:date").data("kalendae")
                  , i = t.attr("data-period")
                  , s = o().contains(["after_15_minutes", "after_30_minutes", "in_an_hour"], i)
                  , r = (0,
                p.default)(i);
                e.stopPropagation(),
                (0,
                d.saveLastPreset)(i),
                n.setSelected(r),
                s && this._getFullCalendarEl().fullCalendar("select", r, r.clone().add(30, "minutes")),
                this._$body_control.find(this._selector("date_input")).val(r.format(APP.system.format.date.date)).trigger("controls:change", [n.getSelected()]),
                this.hide()
            },
            onCaptionClick: function(e) {
                var t = f(e.currentTarget);
                t.hasClass("tasks-date__caption__disabled") || (this._expanded ? this._$document.trigger({
                    type: "controls:hide",
                    target: this.el
                }) : this.show(),
                (t.hasClass(this._class("caption_date")) ? this._$body_control.find(this._selector("date_input")) : this._$body_control.find(this._selector("time_input"))).focus()),
                e.stopPropagation()
            },
            onDocumentClickHide: function(e) {
                this._$body_control.length && !f.contains(this._$body_control.get(0), e.target) && this.hide()
            },
            show: function() {
                this._$document.trigger({
                    type: "controls:hide",
                    target: this.el
                }),
                this._expanded = !0,
                this.$el.addClass("expanded"),
                this._$body_control.addClass("expanded"),
                this._setPositions(),
                this._$window.on("resize".concat(this.ns), o().bind(o().debounce(this._setPositions, 100), this)),
                this._$body_control.find(".js-tasks-date-input-bg").css("background", this._findElem("caption_date").css("background-color")),
                this._$body_control.one("controls:view:init", this._selector("time_input"), o().bind(this._syncTimeWidth, this)),
                this._syncTimeWidth(),
                n.e(48089).then(function() {
                    var e = [n(248089)];
                    o().bind(this._initTimeplanner, this).apply(null, e)
                }
                .bind(this)).catch(n.oe),
                this._toggleBodyOverlay(this._$body_control, this.hide)
            },
            hide: function() {
                var e = this._getFullCalendarEl();
                this._expanded && (e && e.fullCalendar("destroy"),
                this._toggleBodyOverlay(!1),
                this._expanded = !1,
                this.$el.removeClass("expanded"),
                this._updateInputValues(),
                this._$window.off("resize".concat(this.ns)),
                this._$body_control.removeClass("expanded").css({
                    width: "",
                    top: "",
                    left: "",
                    zIndex: ""
                }))
            },
            _getCalendarHeight: function() {
                var e = 349
                  , t = this._$body_control.get(0).getBoundingClientRect();
                return t.y < 0 && (e += t.y - 10),
                e
            },
            _setPositions: function() {
                var e = this.$el.offset().top
                  , t = this._getFullCalendarEl()
                  , n = "";
                this._$body_control.removeClass("at-top").find(this._selector("wrapper_inner")).css("margin-left", ""),
                t && t.fullCalendar("option", "contentHeight", 349);
                var i = this._$body_control.get(0).getBoundingClientRect();
                i.bottom > this._$window.height() && (this._$body_control.addClass("at-top"),
                e += this._$body_control.find(".tasks-date__controls").height()),
                i.x < 0 ? n = Math.abs(i.x) : this._$window.width() - i.right < 0 && (n = this._$window.width() - i.right - 15),
                this._$body_control.css({
                    width: this._$body_control.get(0).offsetWidth,
                    top: e,
                    left: this.$el.offset().left,
                    zIndex: this._maxControlBodyZIndex
                }).find(this._selector("wrapper_inner")).css("margin-left", n),
                t && t.fullCalendar("option", "contentHeight", this._getCalendarHeight())
            },
            _getFullCalendarEl: function() {
                return f.fn.fullCalendar ? this._$body_control.find(".js-tasks-date-timeplanner") : null
            },
            _initTimeplanner: function() {
                this._expanded && (this._$body_control.find(".js-tasks-date-timeplanner").fullCalendar({
                    header: !1,
                    defaultView: "agendaDay",
                    contentHeight: this._getCalendarHeight(),
                    handleWindowResize: !0,
                    eventStartEditable: !0,
                    allDayText: APP.lang.tasks_all_day,
                    axisFormat: 24 === APP.system.format.time ? "HH:mm" : "h:mmA",
                    selectable: !0,
                    draggable: !0,
                    forceEventDuration: !0,
                    dragRevertDuration: 100,
                    timeFormat: APP.system.format.date.time,
                    defaultTimedEventDuration: "00:30:00",
                    defaultDate: l()(this._$body_control.find(this._selector("date_input")).val(), APP.system.format.date.date),
                    scrollTime: "08:00:00",
                    events: o().bind(this._fetchTasks, this),
                    eventDrop: o().bind(this._handleTimelineEventChange, this),
                    eventResize: o().bind(this._handleTimelineEventChange, this),
                    select: o().bind(this._handleTimelineSelect, this)
                }),
                this._setPositions(),
                this._$body_control.find(this._selector("time_input")).val() && this._updateScrollTop())
            },
            _handleTimelineEventChange: function(e, t, n) {
                var i = APP.system.format.date.date
                  , o = [e.start.format(APP.system.format.date.time)]
                  , s = "";
                if (n && e.end && e.start.format(i) !== e.end.format(i))
                    return n();
                e.allDay ? o = [] : e.end && o.push(e.end.format(APP.system.format.date.time)),
                o.length && (s = o.join(" - ")),
                this._$body_control.find(this._selector("time_input")).val(s).trigger("controls:ajust")
            },
            _handleTimelineSelect: function(e, t) {
                this._handleTimelineEventChange({
                    allDay: "00:00" === e.format("HH:mm") && "00:00" === t.format("HH:mm"),
                    start: e,
                    end: t
                }),
                this._updateNewEvent(),
                this._getFullCalendarEl().fullCalendar("unselect")
            },
            _fetchTasks: function(e, t, n, i) {
                var s = e.startOf("day").format(APP.system.format.date.date)
                  , r = e.endOf("day").format(APP.system.format.date.date)
                  , a = this.$el.attr("data-responsible") || (0,
                c.get)("current").id
                  , u = s + r + a;
                this._cached_tasks[u] ? i(this._cached_tasks[u]) : f.ajax({
                    url: "/ajax/todo/calendar/day/",
                    dataType: "json",
                    data: {
                        dont_save: 1,
                        filter_date_from: s,
                        filter_date_to: r,
                        filter: {
                            main_user: [a]
                        }
                    }
                }).done(o().bind((function(e) {
                    var t = e && e.response || {}
                      , n = parseInt(this.$el.attr("data-id"));
                    this._cached_tasks[u] = o().reduce(t.items, (function(e, t) {
                        var i, o, s, r = null;
                        return parseInt(t.id) !== n && (i = t.date.split(" "),
                        o = this._validateTime(i[1]),
                        s = l()(i[0], APP.system.format.date.date),
                        o.length && s.hours(o[0].hours()).minutes(o[0].minutes()),
                        t.duration && (r = s.clone().add(t.duration, "seconds")),
                        e.push({
                            id: t.id,
                            title: this._getTaskTypeNameWithComment(t.params.type, t.params.text),
                            allDay: 23 === s.hours() && 59 === s.minutes(),
                            start: s,
                            end: r,
                            startEditable: !1,
                            expired: !1,
                            draggable: !1,
                            durationEditable: !1,
                            backgroundColor: "#f7f7f7",
                            borderColor: "#f1f1f1"
                        })),
                        e
                    }
                    ), [], this),
                    i(this._cached_tasks[u])
                }
                ), this)),
                this._updateNewEvent()
            },
            _updateInputValues: function() {
                var e = this._validateTime(this._findElem("time_input").val());
                switch (this._findElem("date_input").trigger("controls:change"),
                e.length) {
                case 2:
                    this.$('[name="duration"]').val(e[1].diff(e[0], "seconds")),
                    this.$('[name="time"]').val(e[0].format(APP.system.format.date.time));
                    break;
                case 1:
                    this.$('[name="duration"]').val(""),
                    this.$('[name="time"]').val(e[0].format(APP.system.format.date.time));
                    break;
                default:
                    this.$('[name="duration"]').val(""),
                    this.$('[name="time"]').val(l()("23:59", "HH:mm").format(APP.system.format.date.time))
                }
                this.$('[name="duration"], [name="time"]').trigger("controls:change")
            },
            _updateScrollTop: function() {
                var e, t, n = this._getFullCalendarEl();
                n && (e = n.find(".fc-scroller"),
                (t = n.fullCalendar("clientEvents", ["new"])[0]) && setTimeout((function() {
                    e.get(0) && e.scrollTop(e.get(0).scrollHeight * (t.start.hours() - .5) / 24)
                }
                )))
            },
            _updateNewEvent: function() {
                var e = this._getFullCalendarEl()
                  , t = this._$body_control.find(this._selector("date_input")).val()
                  , n = t ? l()(t, APP.system.format.date.date) : l()()
                  , i = this._validateTime(this._$body_control.find(this._selector("time_input")).val())
                  , s = null
                  , r = {};
                n.isValid() && (i.length && (n.set("hour", i[0].hours()).set("minute", i[0].minutes()),
                i[1] && (s = n.clone().set("hour", i[1].hours()).set("minute", i[1].minutes()))),
                o().extend(r, {
                    allDay: !i[0],
                    end: s || n,
                    start: n
                })),
                e && (e.fullCalendar("removeEvents", "new"),
                e.fullCalendar("renderEvent", o().extend({
                    id: "new",
                    title: this._getTaskTypeNameWithComment(this.$el.attr("data-type"), this.$el.attr("data-title"), this.$el.attr("data-type-name")),
                    expired: !1,
                    draggable: !0,
                    durationEditable: !0,
                    backgroundColor: "#e9f1ff",
                    borderColor: "#dce8ff"
                }, r))),
                this.$el.trigger("tasks-date:date-changed", [n]).trigger("tasks-date:time-changed", [i])
            },
            _syncTimeWidth: function() {
                this._findElem("caption_time").css({
                    width: this._$body_control.find(this._selector("time")).get(0).offsetWidth
                })
            },
            _validateTime: function(e) {
                var t = (e || "").split(/\s?-\s?/)
                  , n = APP.system.format.date.time
                  , i = [];
                if (!t.length)
                    return i;
                var o = t[0] && l()(t[0], n)
                  , s = t[1] && l()(t[1], n);
                return o && o.isValid() && i.push(o),
                s && s.isValid() && o.isBefore(s) && i.push(s),
                i
            },
            _getTaskTypeNameWithComment: function(e, t, n) {
                var i, s = [];
                return (i = "custom" === (e = e || 1) && o().isString(n) && !o().isEmpty(n) ? n : APP.todo_types[e] ? APP.todo_types[e] : (APP.constant("task_types")["key_".concat(e)] || {}).option) && s.push(i),
                t && s.push(r()._twig.filter("task_text", t)),
                s.join(": ")
            }
        });
        var m = "../build/transpiled/interface/controls/tasks_date/index";
        window.define(m, (function() {
            var e = "undefined"
              , n = typeof t === e ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === e ? typeof module === e ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : t;
            return n && n.default || n
        }
        )),
        window.require([m])
    }
    ,
    134203: (e, t, n) => {
        "use strict";
        n.r(t),
        n.d(t, {
            default: () => r
        });
        var i = n(55188)
          , o = n.n(i)
          , s = n(340958);
        const r = s.default.extend({
            controlClassName: "js-control-textarea-code",
            _classes: function() {
                return {
                    textarea: "control__textarea-code-area",
                    lines: "control__textarea-code-lines"
                }
            },
            events: {
                "propertychange textarea": "onChange",
                "input textarea": "onChange",
                "keydown textarea": "onKeyDown",
                "keyup textarea": "onChange",
                "change textarea": "onScroll",
                "mousewheel textarea": "onScroll"
            },
            initialize: function() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                    t[n] = arguments[n];
                s.default.prototype.initialize.apply(this, t),
                this._elem("textarea").on("scroll", o().bind(this.onScroll, this)),
                this.updateLineNumbers()
            },
            destroy: function() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                    t[n] = arguments[n];
                this._elem("textarea").off(),
                s.default.prototype.destroy.apply(this, t)
            },
            onChange: function(e) {
                (10 != +this._elem("textarea").scrollLeft || 37 !== e.keyCode && 37 !== e.which && "ArrowLeft" !== e.code && "ArrowLeft" !== e.key) && 36 !== e.keyCode && 36 !== e.which && "Home" !== e.code && "Home" !== e.key && 13 !== e.keyCode && 13 !== e.which && "Enter" !== e.code && "Enter" !== e.key && "NumpadEnter" !== e.code || this._elem("textarea").scrollLeft(0),
                this.updateLineNumbers()
            },
            onScroll: function() {
                this._elem("lines").scrollTop(this._elem("textarea").scrollTop())
            },
            onKeyDown: function(e) {
                var t, n = e.currentTarget;
                if (9 === e.keyCode)
                    return t = this.getCaretPosition() + 4,
                    n.value = "".concat(n.value.substring(0, this.getCaretPosition()), "    ").concat(n.value.substring(this.getCaretPosition(), n.value.length)),
                    this.setCaretPosition(t),
                    !1;
                8 === e.keyCode && "    " === n.value.substring(this.getCaretPosition() - 4, this.getCaretPosition()) && (t = this.getCaretPosition() - 3,
                n.value = n.value.substring(0, this.getCaretPosition() - 3) + n.value.substring(this.getCaretPosition(), n.value.length),
                this.setCaretPosition(t)),
                37 === e.keyCode && "    " === n.value.substring(this.getCaretPosition() - 4, this.getCaretPosition()) && (t = this.getCaretPosition() - 3,
                this.setCaretPosition(t)),
                39 === e.keyCode && "    " === n.value.substring(this.getCaretPosition() + 4, this.getCaretPosition()) && (t = this.getCaretPosition() + 3,
                this.setCaretPosition(t)),
                this.onChange(e)
            },
            updateLineNumbers: function() {
                var e, t, n = this._elem("textarea").val().split("\n").length, i = this._elem("lines").get(0), o = n - i.children.length;
                if (o > 0) {
                    for (e = document.createDocumentFragment(); o > 0; )
                        (t = document.createElement("span")).className = "control__textarea-code-line",
                        e.appendChild(t),
                        o--;
                    i.appendChild(e)
                }
                for (; o < 0; )
                    i.removeChild(i.firstChild),
                    o++
            },
            getCaretPosition: function() {
                return this._elem("textarea").get(0).selectionStart
            },
            setCaretPosition: function(e) {
                var t = this._elem("textarea").get(0);
                t.selectionStart = e,
                t.selectionEnd = e,
                t.focus()
            },
            hasSelection: function() {
                var e = this._elem("textarea").get(0);
                return e.selectionStart !== e.selectionEnd
            },
            getSelectedText: function() {
                return this.value.substring(this.selectionStart, this.selectionEnd)
            },
            setSelection: function(e, t) {
                var n = this._elem("textarea").get(0);
                n.selectionStart = e,
                n.selectionEnd = t,
                n.focus()
            }
        });
        var a = "../build/transpiled/interface/controls/textarea_code";
        window.define(a, (function() {
            var e = "undefined"
              , n = typeof t === e ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === e ? typeof module === e ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : t;
            return n && n.default || n
        }
        )),
        window.require([a])
    }
    ,
    855793: (e, t, n) => {
        "use strict";
        n.r(t),
        n.d(t, {
            default: () => p
        });
        var i = n(55188)
          , o = n.n(i)
          , s = n(340958);
        function r(e, t, n, i, o, s, r) {
            try {
                var a = e[s](r)
                  , l = a.value
            } catch (e) {
                return void n(e)
            }
            a.done ? t(l) : Promise.resolve(l).then(i, o)
        }
        function a(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(e, i.key, i)
            }
        }
        function l(e, t, n) {
            return l = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(e, t, n) {
                var i = function(e, t) {
                    for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = c(e)); )
                        ;
                    return e
                }(e, t);
                if (i) {
                    var o = Object.getOwnPropertyDescriptor(i, t);
                    return o.get ? o.get.call(n || e) : o.value
                }
            }
            ,
            l(e, t, n || e)
        }
        function c(e) {
            return c = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            ,
            c(e)
        }
        function u(e, t) {
            return u = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                e
            }
            ,
            u(e, t)
        }
        function d(e) {
            var t = function() {
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
                var n, i = c(e);
                if (t) {
                    var o = c(this).constructor;
                    n = Reflect.construct(i, arguments, o)
                } else
                    n = i.apply(this, arguments);
                return function(e, t) {
                    return !t || "object" != ((n = t) && "undefined" != typeof Symbol && n.constructor === Symbol ? "symbol" : typeof n) && "function" != typeof t ? function(e) {
                        if (void 0 === e)
                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return e
                    }(e) : t;
                    var n
                }(this, n)
            }
        }
        var h = function(e) {
            !function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && u(e, t)
            }(f, e);
            var t, i, h, p = d(f);
            function f() {
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, f),
                p.apply(this, arguments)
            }
            return t = f,
            i = [{
                key: "_selectors",
                value: function() {
                    return {
                        input: ".js-control-time-field-input"
                    }
                }
            }, {
                key: "events",
                value: function() {
                    var e, t, n, i = (e = {},
                    n = "_onInputTime",
                    (t = "input ".concat(this._selector("input")))in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n,
                    e);
                    return o().extend({}, o().result(s.default.prototype, "events", {}), i)
                }
            }, {
                key: "initialize",
                value: function() {
                    l(c(f.prototype), "initialize", this).apply(this, arguments),
                    this.time_format = Number(this.$el.attr("data-time-format")) || AMOCRM.system.format.time,
                    this.useMask()
                }
            }, {
                key: "useMask",
                value: function() {
                    var e, t = this;
                    return (e = function() {
                        return function(e, t) {
                            var n, i, o, s, r = {
                                label: 0,
                                sent: function() {
                                    if (1 & o[0])
                                        throw o[1];
                                    return o[1]
                                },
                                trys: [],
                                ops: []
                            };
                            return s = {
                                next: a(0),
                                throw: a(1),
                                return: a(2)
                            },
                            "function" == typeof Symbol && (s[Symbol.iterator] = function() {
                                return this
                            }
                            ),
                            s;
                            function a(s) {
                                return function(a) {
                                    return function(s) {
                                        if (n)
                                            throw new TypeError("Generator is already executing.");
                                        for (; r; )
                                            try {
                                                if (n = 1,
                                                i && (o = 2 & s[0] ? i.return : s[0] ? i.throw || ((o = i.return) && o.call(i),
                                                0) : i.next) && !(o = o.call(i, s[1])).done)
                                                    return o;
                                                switch (i = 0,
                                                o && (s = [2 & s[0], o.value]),
                                                s[0]) {
                                                case 0:
                                                case 1:
                                                    o = s;
                                                    break;
                                                case 4:
                                                    return r.label++,
                                                    {
                                                        value: s[1],
                                                        done: !1
                                                    };
                                                case 5:
                                                    r.label++,
                                                    i = s[1],
                                                    s = [0];
                                                    continue;
                                                case 7:
                                                    s = r.ops.pop(),
                                                    r.trys.pop();
                                                    continue;
                                                default:
                                                    if (!((o = (o = r.trys).length > 0 && o[o.length - 1]) || 6 !== s[0] && 2 !== s[0])) {
                                                        r = 0;
                                                        continue
                                                    }
                                                    if (3 === s[0] && (!o || s[1] > o[0] && s[1] < o[3])) {
                                                        r.label = s[1];
                                                        break
                                                    }
                                                    if (6 === s[0] && r.label < o[1]) {
                                                        r.label = o[1],
                                                        o = s;
                                                        break
                                                    }
                                                    if (o && r.label < o[2]) {
                                                        r.label = o[2],
                                                        r.ops.push(s);
                                                        break
                                                    }
                                                    o[2] && r.ops.pop(),
                                                    r.trys.pop();
                                                    continue
                                                }
                                                s = t.call(e, r)
                                            } catch (e) {
                                                s = [6, e],
                                                i = 0
                                            } finally {
                                                n = o = 0
                                            }
                                        if (5 & s[0])
                                            throw s[1];
                                        return {
                                            value: s[0] ? s[1] : void 0,
                                            done: !0
                                        }
                                    }([s, a])
                                }
                            }
                        }(this, (function(e) {
                            switch (e.label) {
                            case 0:
                                return [4, n.e(23419).then(n.t.bind(n, 23419, 23))];
                            case 1:
                                return (0,
                                e.sent().default)({
                                    regex: 12 === AMOCRM.system.format.time ? "^(([0-9]|0[0-9]|1[0-2]):[0-5][0-9])([AaPp][Mm])?$" : "^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$",
                                    positionCaretOnClick: "radixFocus",
                                    placeholder: "",
                                    showMaskOnHover: !1,
                                    showMaskOnFocus: !1,
                                    keepStatic: !0
                                }).mask(t._elem("input").get(0)),
                                [2]
                            }
                        }
                        ))
                    }
                    ,
                    function() {
                        var t = this
                          , n = arguments;
                        return new Promise((function(i, o) {
                            var s = e.apply(t, n);
                            function a(e) {
                                r(s, i, o, a, l, "next", e)
                            }
                            function l(e) {
                                r(s, i, o, a, l, "throw", e)
                            }
                            a(void 0)
                        }
                        ))
                    }
                    )()
                }
            }, {
                key: "_onInputTime",
                value: function(e) {
                    0 === e.target.value.toLocaleUpperCase().replace(/[^0-9]/g, "").length && this._elem("input").val("").trigger("change")
                }
            }, {
                key: "destroy",
                value: function() {
                    var e = this._elem("input").get(0).inputmask;
                    e && e.remove(),
                    s.default.prototype.destroy.apply(this, arguments)
                }
            }],
            h = [{
                key: "controlClassName",
                get: function() {
                    return "time-field"
                }
            }],
            i && a(t.prototype, i),
            h && a(t, h),
            f
        }(s.default);
        const p = h.extend(h);
        var f = "../build/transpiled/interface/controls/time_field";
        window.define(f, (function() {
            var e = "undefined"
              , n = typeof t === e ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === e ? typeof module === e ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : t;
            return n && n.default || n
        }
        )),
        window.require([f])
    }
    ,
    262090: (e, t, n) => {
        "use strict";
        n.r(t),
        n.d(t, {
            default: () => k
        });
        var i = n(661533)
          , o = n.n(i)
          , s = n(55188)
          , r = n.n(s)
          , a = n(340958);
        function l(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(e, i.key, i)
            }
        }
        function c(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        function u(e, t, n) {
            return u = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(e, t, n) {
                var i = function(e, t) {
                    for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = d(e)); )
                        ;
                    return e
                }(e, t);
                if (i) {
                    var o = Object.getOwnPropertyDescriptor(i, t);
                    return o.get ? o.get.call(n || e) : o.value
                }
            }
            ,
            u(e, t, n || e)
        }
        function d(e) {
            return d = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            ,
            d(e)
        }
        function h(e, t) {
            return h = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                e
            }
            ,
            h(e, t)
        }
        function p(e) {
            var t = function() {
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
                var n, i = d(e);
                if (t) {
                    var o = d(this).constructor;
                    n = Reflect.construct(i, arguments, o)
                } else
                    n = i.apply(this, arguments);
                return function(e, t) {
                    return !t || "object" != ((n = t) && "undefined" != typeof Symbol && n.constructor === Symbol ? "symbol" : typeof n) && "function" != typeof t ? function(e) {
                        if (void 0 === e)
                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return e
                    }(e) : t;
                    var n
                }(this, n)
            }
        }
        var f, _ = ".js-tip", m = !1, g = function(e) {
            e.$tip.hasClass("tips_keyboard") ? e.$key_selected.trigger("click").trigger("tip:select") : e.$tip.find(".js-tips-item:hover").trigger("click").trigger("tip:select")
        }, v = function(e, t) {
            var n = t.$items.index(t.$key_selected) + ("up" === e ? -1 : 1);
            n < 0 && (n = t.$items.length - 1),
            n > t.$items.length - 1 && (n = 0),
            t.$key_selected.removeClass("tips-item_selected-keyboard"),
            t.$items[n].classList.add("tips-item_selected-keyboard"),
            m.addClass("tips_keyboard").removeClass("tips_mouse")
        }, y = new Map, b = !1;
        y.set(38, r().bind(v, {}, "up")),
        y.set(40, r().bind(v, {}, "down")),
        y.set(13, g),
        y.set(9, g);
        var w = function(e) {
            !function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && h(e, t)
            }(g, e);
            var t, n, i, s = p(g);
            function g() {
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, g),
                s.apply(this, arguments)
            }
            return t = g,
            n = [{
                key: "document_events",
                value: function() {
                    return {
                        "tip:remove": "_remove",
                        "controls:hide:private": "_hide"
                    }
                }
            }, {
                key: "events",
                value: function() {
                    var e, t = (c(e = {}, "mousemove ".concat(_), "_mousemove"),
                    c(e, "keydown", "_keydown"),
                    c(e, "click", "_click"),
                    c(e, "tip:select .js-tips-item", "_select"),
                    e);
                    return r().extend({}, r().result(a.default.prototype, "events", {}), t)
                }
            }, {
                key: "_selectors",
                value: function() {
                    return {
                        tip: _,
                        container: ".js-tip-holder",
                        overflowed_tip_holder: '.js-overflowed-tip-holder[data-value="%s"]',
                        tip_holder: '.js-tip-holder[data-value="%s"]'
                    }
                }
            }, {
                key: "initTipShowEvent",
                value: function() {
                    b || (b = !0,
                    o()(document).on("tip:show", "".concat(_), (function(e, t) {
                        var n = o()(e.target).closest(".".concat(g.controlClassName));
                        n.get(0) ? n.data("view")._showTip(e, t) : g.prototype._showTip(e, t)
                    }
                    )))
                }
            }, {
                key: "initDocumentEvents",
                value: function() {
                    this.initTipShowEvent()
                }
            }, {
                key: "initialize",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    u(d(g.prototype), "initialize", this).apply(this, arguments);
                    var t = e.toggleBodyOverlay
                      , n = void 0 === t ? r().noop : t;
                    n && (this.toggleBodyOverlay = n),
                    this.initDocumentEvents()
                }
            }, {
                key: "_hide",
                value: function(e, t) {
                    m && ("force" !== t && (o().contains(m.get(0), e.target) || t && "tip" !== t) || (m.trigger("tip:show", [!1]).trigger("tip:hidden"),
                    m = !1))
                }
            }, {
                key: "_remove",
                value: function(e, t) {
                    if (m) {
                        var n = t.$tip;
                        n.trigger("controls:hide:private"),
                        n.get(0) && o()(document).trigger("linked:tip:remove")
                    }
                }
            }, {
                key: "_showTip",
                value: function(e, t) {
                    var n, i, s, r = o()(e.currentTarget);
                    r.is(":visible") || !1 === t ? (f && (f.append(r),
                    f = null),
                    r.hide().trigger("tip:hidden"),
                    r.find(".tips-item_selected-keyboard").removeClass("tips-item_selected-keyboard"),
                    m = !1,
                    this.toggleBodyOverlay && this.toggleBodyOverlay(!1)) : (r.show(),
                    (m = r).find(".tips-item_selected").addClass("tips-item_selected-keyboard"),
                    r.removeClass("tips-at-top"),
                    r.removeClass("tips-to-left"),
                    r.removeClass("tips-to-right"),
                    n = r.offset().left,
                    i = r.outerWidth(),
                    s = o()(window).width(),
                    n < 0 ? r.addClass("tips-to-right") : n + i > s && r.addClass("tips-to-left"),
                    r.hasClass("tips-at-bottom") || r.visible() || r.addClass("tips-at-top"),
                    r.is("[data-append-to-body]") && this.appendToBody(r)),
                    r.trigger("tip:showed")
                }
            }, {
                key: "appendToBody",
                value: function(e) {
                    var t = e.closest(this._selector("container"))
                      , n = t.offset();
                    f = e.parent(),
                    o()(document.body).append(e),
                    e.removeClass("tips-to-left").removeClass("tips-to-right").removeClass("tips-at-top").css({
                        position: "absolute",
                        top: n.top + t.height() + 5,
                        left: n.left
                    }),
                    e.visible() || e.css({
                        top: n.top - e.height() - 5
                    })
                }
            }, {
                key: "_select",
                value: function(e) {
                    var t = o()(e.currentTarget)
                      , n = t.closest(this._selector("tip"));
                    n.find(".tips-item_selected").removeClass("tips-item_selected"),
                    t.addClass("tips-item_selected").trigger("tip:selected"),
                    n.hide().trigger("tip:hidden")
                }
            }, {
                key: "_click",
                value: function(e) {
                    var t = o()(e.target)
                      , n = this.$el
                      , i = n.find(this._selector("tip"));
                    if (o()(e.target).closest(".js-tips-item").length)
                        o()(e.target).trigger("tip:select");
                    else if (e.stopPropagation(),
                    o()(document).trigger({
                        type: "controls:hide",
                        target: e.currentTarget
                    }),
                    !t.hasClass("date_field"))
                        return i.trigger("tip:show"),
                        !!n.hasClass("js-tip-holder-links") && void 0
                }
            }, {
                key: "_mousemove",
                value: function(e) {
                    var t = o()(e.currentTarget);
                    t.hasClass("tips_mouse") || t.removeClass("tips_keyboard").addClass("tips_mouse")
                }
            }, {
                key: "_keydown",
                value: function(e) {
                    var t;
                    if (m && m.is(":visible") && m.find(".tips-item_selected").length && r().isFunction(y.get(e.keyCode)))
                        return t = m.find(".js-tips-item:not(.hidden)"),
                        y.get(e.keyCode)({
                            $tip: m,
                            $items: t,
                            $key_selected: t.filter((function() {
                                return o()(this).hasClass("tips-item_selected-keyboard")
                            }
                            ))
                        }),
                        !1
                }
            }],
            i = [{
                key: "controlClassName",
                get: function() {
                    return "js-tip-holder"
                }
            }],
            n && l(t.prototype, n),
            i && l(t, i),
            g
        }(a.default);
        const k = w.extend(w);
        var P = "../build/transpiled/interface/controls/tip/index";
        window.define(P, (function() {
            var e = "undefined"
              , n = typeof t === e ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === e ? typeof module === e ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : t;
            return n && n.default || n
        }
        )),
        window.require([P])
    }
    ,
    872522: (e, t, n) => {
        "use strict";
        n.r(t),
        n.d(t, {
            default: () => m
        });
        var i = n(55188)
          , o = n.n(i)
          , s = n(262090)
          , r = n(661533);
        function a(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(e, i.key, i)
            }
        }
        function l(e, t, n) {
            return l = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(e, t, n) {
                var i = function(e, t) {
                    for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = c(e)); )
                        ;
                    return e
                }(e, t);
                if (i) {
                    var o = Object.getOwnPropertyDescriptor(i, t);
                    return o.get ? o.get.call(n || e) : o.value
                }
            }
            ,
            l(e, t, n || e)
        }
        function c(e) {
            return c = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            ,
            c(e)
        }
        function u(e, t) {
            return u = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                e
            }
            ,
            u(e, t)
        }
        function d(e) {
            var t = function() {
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
                var n, i = c(e);
                if (t) {
                    var o = c(this).constructor;
                    n = Reflect.construct(i, arguments, o)
                } else
                    n = i.apply(this, arguments);
                return function(e, t) {
                    return !t || "object" != ((n = t) && "undefined" != typeof Symbol && n.constructor === Symbol ? "symbol" : typeof n) && "function" != typeof t ? function(e) {
                        if (void 0 === e)
                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return e
                    }(e) : t;
                    var n
                }(this, n)
            }
        }
        var h, p = ".js-tip-overflowed", f = !1, _ = function(e) {
            !function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && u(e, t)
            }(m, e);
            var t, n, i, _ = d(m);
            function m() {
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, m),
                _.apply(this, arguments)
            }
            return t = m,
            n = [{
                key: "_selectors",
                value: function() {
                    return o().extend({}, l(c(m.prototype), "_selectors", this).apply(this, arguments), {
                        tip: p,
                        container: ".js-overflowed-tip-holder"
                    })
                }
            }, {
                key: "initTipShowEvent",
                value: function() {
                    f || (f = !0,
                    r(document).on("tip:show", "".concat(p), (function(e, t) {
                        var n = r(e.target).closest(".".concat(m.controlClassName));
                        n.get(0) ? (h = n.data("view"))._showTip(e, t) : h._showTip(e, t)
                    }
                    )))
                }
            }, {
                key: "initDocumentEvents",
                value: function() {
                    this.initTipShowEvent()
                }
            }, {
                key: "initialize",
                value: function() {
                    this.initDocumentEvents(),
                    this.$el.data("view", this),
                    l(c(m.prototype), "initialize", this).call(this, {
                        initDocumentEvents: this.initDocumentEvents,
                        toggleBodyOverlay: this.toggleBodyOverlay
                    })
                }
            }, {
                key: "toggleBodyOverlay",
                value: function(e, t) {
                    l(c(m.prototype), "_toggleBodyOverlay", this).call(this, e, t)
                }
            }, {
                key: "_hide",
                value: function(e) {
                    var t = e ? null : "force";
                    l(c(m.prototype), "_hide", this).call(this, e, t)
                }
            }, {
                key: "appendToBody",
                value: function(e) {
                    s.default.prototype.appendToBody.apply(this, arguments),
                    this.toggleBodyOverlay(e, this._hide)
                }
            }],
            i = [{
                key: "controlClassName",
                get: function() {
                    return "js-overflowed-tip-holder"
                }
            }],
            n && a(t.prototype, n),
            i && a(t, i),
            m
        }(s.default);
        const m = _.extend(_);
        var g = "../build/transpiled/interface/controls/tip/overflowed";
        window.define(g, (function() {
            var e = "undefined"
              , n = typeof t === e ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === e ? typeof module === e ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : t;
            return n && n.default || n
        }
        )),
        window.require([g])
    }
    ,
    429741: (e, t, n) => {
        "use strict";
        n.r(t),
        n.d(t, {
            default: () => c
        });
        var i = n(55188)
          , o = n.n(i)
          , s = n(128508)
          , r = n(579569)
          , a = n(77364)
          , l = n(340958);
        const c = l.default.extend({
            controlClassName: "control-user_state",
            _classes: function() {
                return {
                    online: "control-user_state_online"
                }
            },
            initialize: function() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                    t[n] = arguments[n];
                var i = this;
                l.default.prototype.initialize.apply(this, t),
                this.id = this.getId();
                var o = (0,
                r.get)(this.id);
                o && (o.online && this.toggleOnline(this.id, o.online),
                this.refresh_stream = a.default.refreshStream().pipe(s.filter((function(e) {
                    return e.user_id === i.id
                }
                ))).subscribe((function(e) {
                    i.toggleOnline(e.user_id, e.event)
                }
                )))
            },
            destroy: function() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                    t[n] = arguments[n];
                this.refresh_stream && this.refresh_stream.unsubscribe(),
                l.default.prototype.destroy.apply(this, t)
            },
            getId: function() {
                var e, t = parseInt(this.$el.data("id"));
                return o().isNaN(t) && (e = (0,
                r.getByAmoJoId)()[t],
                o().isUndefined(e) || (t = e ? parseInt(e.id) : 0)),
                t
            },
            toggleOnline: function(e, t) {
                this.$el.toggleClass(this._class("online"), !0 === t)
            }
        });
        var u = "../build/transpiled/interface/controls/user_state";
        window.define(u, (function() {
            var e = "undefined"
              , n = typeof t === e ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === e ? typeof module === e ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : t;
            return n && n.default || n
        }
        )),
        window.require([u])
    }
    ,
    522323: (e, t, n) => {
        "use strict";
        n.r(t),
        n.d(t, {
            default: () => y
        });
        var i = n(55188)
          , o = n.n(i)
          , s = n(460159)
          , r = n.n(s)
          , a = n(340958)
          , l = n(661533);
        function c(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, i = new Array(t); n < t; n++)
                i[n] = e[n];
            return i
        }
        function u(e, t, n, i, o, s, r) {
            try {
                var a = e[s](r)
                  , l = a.value
            } catch (e) {
                return void n(e)
            }
            a.done ? t(l) : Promise.resolve(l).then(i, o)
        }
        function d(e) {
            return function() {
                var t = this
                  , n = arguments;
                return new Promise((function(i, o) {
                    var s = e.apply(t, n);
                    function r(e) {
                        u(s, i, o, r, a, "next", e)
                    }
                    function a(e) {
                        u(s, i, o, r, a, "throw", e)
                    }
                    r(void 0)
                }
                ))
            }
        }
        function h(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(e, i.key, i)
            }
        }
        function p(e, t, n) {
            return p = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(e, t, n) {
                var i = function(e, t) {
                    for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = f(e)); )
                        ;
                    return e
                }(e, t);
                if (i) {
                    var o = Object.getOwnPropertyDescriptor(i, t);
                    return o.get ? o.get.call(n || e) : o.value
                }
            }
            ,
            p(e, t, n || e)
        }
        function f(e) {
            return f = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            ,
            f(e)
        }
        function _(e, t) {
            return _ = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                e
            }
            ,
            _(e, t)
        }
        function m(e) {
            var t = function() {
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
                var n, i = f(e);
                if (t) {
                    var o = f(this).constructor;
                    n = Reflect.construct(i, arguments, o)
                } else
                    n = i.apply(this, arguments);
                return function(e, t) {
                    return !t || "object" != ((n = t) && "undefined" != typeof Symbol && n.constructor === Symbol ? "symbol" : typeof n) && "function" != typeof t ? function(e) {
                        if (void 0 === e)
                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return e
                    }(e) : t;
                    var n
                }(this, n)
            }
        }
        function g(e, t) {
            var n, i, o, s, r = {
                label: 0,
                sent: function() {
                    if (1 & o[0])
                        throw o[1];
                    return o[1]
                },
                trys: [],
                ops: []
            };
            return s = {
                next: a(0),
                throw: a(1),
                return: a(2)
            },
            "function" == typeof Symbol && (s[Symbol.iterator] = function() {
                return this
            }
            ),
            s;
            function a(s) {
                return function(a) {
                    return function(s) {
                        if (n)
                            throw new TypeError("Generator is already executing.");
                        for (; r; )
                            try {
                                if (n = 1,
                                i && (o = 2 & s[0] ? i.return : s[0] ? i.throw || ((o = i.return) && o.call(i),
                                0) : i.next) && !(o = o.call(i, s[1])).done)
                                    return o;
                                switch (i = 0,
                                o && (s = [2 & s[0], o.value]),
                                s[0]) {
                                case 0:
                                case 1:
                                    o = s;
                                    break;
                                case 4:
                                    return r.label++,
                                    {
                                        value: s[1],
                                        done: !1
                                    };
                                case 5:
                                    r.label++,
                                    i = s[1],
                                    s = [0];
                                    continue;
                                case 7:
                                    s = r.ops.pop(),
                                    r.trys.pop();
                                    continue;
                                default:
                                    if (!((o = (o = r.trys).length > 0 && o[o.length - 1]) || 6 !== s[0] && 2 !== s[0])) {
                                        r = 0;
                                        continue
                                    }
                                    if (3 === s[0] && (!o || s[1] > o[0] && s[1] < o[3])) {
                                        r.label = s[1];
                                        break
                                    }
                                    if (6 === s[0] && r.label < o[1]) {
                                        r.label = o[1],
                                        o = s;
                                        break
                                    }
                                    if (o && r.label < o[2]) {
                                        r.label = o[2],
                                        r.ops.push(s);
                                        break
                                    }
                                    o[2] && r.ops.pop(),
                                    r.trys.pop();
                                    continue
                                }
                                s = t.call(e, r)
                            } catch (e) {
                                s = [6, e],
                                i = 0
                            } finally {
                                n = o = 0
                            }
                        if (5 & s[0])
                            throw s[1];
                        return {
                            value: s[0] ? s[1] : void 0,
                            done: !0
                        }
                    }([s, a])
                }
            }
        }
        var v = function(e) {
            !function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && _(e, t)
            }(a, e);
            var t, n, i, s = m(a);
            function a() {
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, a),
                s.apply(this, arguments)
            }
            return t = a,
            n = [{
                key: "preload",
                get: function() {
                    return [this.hoverTemplate]
                }
            }, {
                key: "hoverTemplate",
                get: function() {
                    return "/tmpl/controls/widget_creator/widget_creator_hover.twig"
                }
            }, {
                key: "events",
                value: function() {
                    return {
                        mouseenter: "onMouseEnter",
                        mouseleave: "onMouseLeave"
                    }
                }
            }, {
                key: "_classes",
                value: function() {
                    return {
                        widget_creator_active: "widget-creator--hover",
                        widget_creator_onboarding: "js-widget-creator",
                        hover_el: "js-widget-creator-hover",
                        hover_el_close: "js-widget-creator-hover-close",
                        hover_el_onboarding: "widget-creator-hover-onboarding"
                    }
                }
            }, {
                key: "_selectors",
                value: function() {
                    return {
                        widget_creator: ".js-widget-creator",
                        hover_el: ".js-widget-creator-hover",
                        hover_el_fake: ".js-widget-creator-hover-fake",
                        hover_el_close: ".js-widget-creator-hover-close",
                        hover_el_onboarding: ".widget-creator-hover-onboarding"
                    }
                }
            }, {
                key: "_preload",
                value: function() {
                    var e = this;
                    return d((function() {
                        return g(this, (function(t) {
                            switch (t.label) {
                            case 0:
                                return [4, r()._preload(e.preload)()];
                            case 1:
                                return t.sent(),
                                [2]
                            }
                        }
                        ))
                    }
                    ))()
                }
            }, {
                key: "initialize",
                value: function() {
                    p(f(a.prototype), "initialize", this).apply(this, arguments),
                    this.initHover()
                }
            }, {
                key: "destroy",
                value: function() {
                    this.$hoverEl.remove(),
                    p(f(a.prototype), "destroy", this).apply(this, arguments)
                }
            }, {
                key: "initHover",
                value: function() {
                    var e = this;
                    return d((function() {
                        return g(this, (function(t) {
                            switch (t.label) {
                            case 0:
                                return [4, e.renderWidgetCreatorHover()];
                            case 1:
                                return t.sent(),
                                e.$hoverEl.on("mouseenter", o().bind(e.onMouseEnter, e)).on("mouseleave", o().bind(e.onMouseLeave, e)).on("click", o().bind(e.onHoverClick, e)).on("click", e._selector("hover_el_close"), (function() {
                                    for (var t = arguments.length, n = new Array(t), i = 0; i < t; i++)
                                        n[i] = arguments[i];
                                    var o;
                                    e.onCloseHoverAsOnboarding.apply(e, function(e) {
                                        if (Array.isArray(e))
                                            return c(e)
                                    }(o = n) || function(e) {
                                        if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"])
                                            return Array.from(e)
                                    }(o) || function(e, t) {
                                        if (e) {
                                            if ("string" == typeof e)
                                                return c(e, t);
                                            var n = Object.prototype.toString.call(e).slice(8, -1);
                                            return "Object" === n && e.constructor && (n = e.constructor.name),
                                            "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? c(e, t) : void 0
                                        }
                                    }(o) || function() {
                                        throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                                    }())
                                }
                                )),
                                [2]
                            }
                        }
                        ))
                    }
                    ))()
                }
            }, {
                key: "renderWidgetCreatorHover",
                value: function() {
                    var e = this;
                    return d((function() {
                        var t;
                        return g(this, (function(n) {
                            switch (n.label) {
                            case 0:
                                return [4, e._preload()];
                            case 1:
                                return n.sent(),
                                t = r()({
                                    ref: e.hoverTemplate
                                }).render(),
                                e.$hoverEl = l(t),
                                e.$fakeHoverEl = e.$hoverEl.find(e._selector("hover_el_fake")),
                                e._$body.append(e.$hoverEl),
                                [2]
                            }
                        }
                        ))
                    }
                    ))()
                }
            }, {
                key: "onMouseEnter",
                value: function() {
                    this.$hoverEl && this.showHoverEl()
                }
            }, {
                key: "onMouseLeave",
                value: function() {
                    this.$hoverEl && this.hideHover()
                }
            }, {
                key: "onHoverClick",
                value: function(e) {
                    e.target === e.currentTarget && this.$el.trigger("js-widget-creator:create-widget")
                }
            }, {
                key: "showHoverElAsOnboarding",
                value: function() {
                    this.$hoverEl.addClass(this._class("hover_el_onboarding")),
                    this.showHoverEl()
                }
            }, {
                key: "onCloseHoverAsOnboarding",
                value: function() {
                    this.$hoverEl.removeClass(this._class("hover_el_onboarding")),
                    this.hideHover()
                }
            }, {
                key: "showHoverEl",
                value: function() {
                    this.$el.addClass(this._class("widget_creator_active"));
                    var e = this.el.getBoundingClientRect();
                    this.$hoverEl.css({
                        top: e.height + e.top,
                        left: e.left
                    }),
                    this.$hoverEl.show();
                    var t = this.$hoverEl[0].getBoundingClientRect();
                    this.$fakeHoverEl.css({
                        top: -(t.top - e.top),
                        width: e.width,
                        height: t.top - e.top
                    })
                }
            }, {
                key: "hideHover",
                value: function() {
                    this.isOpenedAsOnboarding() || (this.$el.removeClass(this._class("widget_creator_active")),
                    this.$hoverEl.hide())
                }
            }, {
                key: "isOpenedAsOnboarding",
                value: function() {
                    return this.$hoverEl.hasClass(this._class("hover_el_onboarding"))
                }
            }],
            i = [{
                key: "controlClassName",
                get: function() {
                    return "widget-creator"
                }
            }],
            n && h(t.prototype, n),
            i && h(t, i),
            a
        }(a.default);
        v.extend(v);
        const y = v;
        var b = "../build/transpiled/interface/controls/widget_creator";
        window.define(b, (function() {
            var e = "undefined"
              , n = typeof t === e ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === e ? typeof module === e ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : t;
            return n && n.default || n
        }
        )),
        window.require([b])
    }
    ,
    596080: (e, t, n) => {
        "use strict";
        n.r(t),
        n.d(t, {
            default: () => d
        });
        var i = n(661533)
          , o = n.n(i)
          , s = n(55188)
          , r = n.n(s)
          , a = n(340958);
        function l(e, t, n, i, o, s, r) {
            try {
                var a = e[s](r)
                  , l = a.value
            } catch (e) {
                return void n(e)
            }
            a.done ? t(l) : Promise.resolve(l).then(i, o)
        }
        function c(e) {
            return function() {
                var t = this
                  , n = arguments;
                return new Promise((function(i, o) {
                    var s = e.apply(t, n);
                    function r(e) {
                        l(s, i, o, r, a, "next", e)
                    }
                    function a(e) {
                        l(s, i, o, r, a, "throw", e)
                    }
                    r(void 0)
                }
                ))
            }
        }
        function u(e, t) {
            var n, i, o, s, r = {
                label: 0,
                sent: function() {
                    if (1 & o[0])
                        throw o[1];
                    return o[1]
                },
                trys: [],
                ops: []
            };
            return s = {
                next: a(0),
                throw: a(1),
                return: a(2)
            },
            "function" == typeof Symbol && (s[Symbol.iterator] = function() {
                return this
            }
            ),
            s;
            function a(s) {
                return function(a) {
                    return function(s) {
                        if (n)
                            throw new TypeError("Generator is already executing.");
                        for (; r; )
                            try {
                                if (n = 1,
                                i && (o = 2 & s[0] ? i.return : s[0] ? i.throw || ((o = i.return) && o.call(i),
                                0) : i.next) && !(o = o.call(i, s[1])).done)
                                    return o;
                                switch (i = 0,
                                o && (s = [2 & s[0], o.value]),
                                s[0]) {
                                case 0:
                                case 1:
                                    o = s;
                                    break;
                                case 4:
                                    return r.label++,
                                    {
                                        value: s[1],
                                        done: !1
                                    };
                                case 5:
                                    r.label++,
                                    i = s[1],
                                    s = [0];
                                    continue;
                                case 7:
                                    s = r.ops.pop(),
                                    r.trys.pop();
                                    continue;
                                default:
                                    if (!((o = (o = r.trys).length > 0 && o[o.length - 1]) || 6 !== s[0] && 2 !== s[0])) {
                                        r = 0;
                                        continue
                                    }
                                    if (3 === s[0] && (!o || s[1] > o[0] && s[1] < o[3])) {
                                        r.label = s[1];
                                        break
                                    }
                                    if (6 === s[0] && r.label < o[1]) {
                                        r.label = o[1],
                                        o = s;
                                        break
                                    }
                                    if (o && r.label < o[2]) {
                                        r.label = o[2],
                                        r.ops.push(s);
                                        break
                                    }
                                    o[2] && r.ops.pop(),
                                    r.trys.pop();
                                    continue
                                }
                                s = t.call(e, r)
                            } catch (e) {
                                s = [6, e],
                                i = 0
                            } finally {
                                n = o = 0
                            }
                        if (5 & s[0])
                            throw s[1];
                        return {
                            value: s[0] ? s[1] : void 0,
                            done: !0
                        }
                    }([s, a])
                }
            }
        }
        const d = a.default.extend({
            controlClassName: "js-control-wysiwyg",
            _classes: function() {
                return {
                    toolbar: "control-wysiwyg__toolbar",
                    editable_area: "control-wysiwyg__area"
                }
            },
            events: {
                "input .ql-editor[contenteditable]": "_updateInput",
                "paste .ql-editor[contenteditable]": "_updateInput",
                "keydown .ql-editor[contenteditable]": "alignCheck",
                "input .js-wysiwyg-input": "_initInput",
                "click .control-wysiwyg__toolbar--item": "_updateInput",
                "click .ql-custom-align .ql-picker-item": "setCustomStyle",
                "click .ql-custom-size .ql-picker-item": "setCustomStyle",
                "click .ql-custom-font .ql-picker-item": "setCustomStyle",
                "click .ql-custom-color .ql-picker-item": "setCustomStyle",
                "click .ql-custom-clean": "cleanFormatting",
                "control:input:change": "onChange"
            },
            _selectors: function() {
                return {
                    toolbar: ".control-wysiwyg__toolbar",
                    toolbar_item: ".control-wysiwyg__toolbar--item",
                    editable_area: ".control-wysiwyg__area",
                    editable_input: ".js-wysiwyg-input",
                    textarea: ".ql-editor[contenteditable]",
                    tips: ".js-tip",
                    tip_holder: ".js-tip-holder",
                    tips_item: ".js-tips-item",
                    font_size_tip_item: ".ql-custom-size .js-tips-item",
                    font_family_tip_item: ".ql-custom-font .js-tips-item",
                    ql_action: ".ql-custom-link .ql-action"
                }
            },
            initialize: function() {
                return c((function() {
                    var e, t, i, s = arguments;
                    return u(this, (function(l) {
                        switch (l.label) {
                        case 0:
                            return this._init_def = o().Deferred(),
                            [4, n.e(59810).then(n.t.bind(n, 759810, 23))];
                        case 1:
                            return e = l.sent(),
                            t = e.default,
                            a.default.prototype.initialize.apply(this, s),
                            (i = t.import("blots/block")).tagName = "DIV",
                            t.register(i, !0),
                            this.$el.find(this._selector("editable_area")).addClass("".concat(this._class("editable_area"), "_").concat(this.cid)),
                            this.$el.find(this._selector("toolbar")).addClass("".concat(this._class("toolbar"), "_").concat(this.cid)),
                            this._updateQuill(t),
                            this.quill = new t("".concat(this._selector("editable_area"), "_").concat(this.cid),{
                                modules: {
                                    toolbar: {
                                        container: "".concat(this._selector("toolbar"), "_").concat(this.cid)
                                    }
                                }
                            }),
                            this._init_def.resolve(),
                            this._initInput(),
                            this.quill.on("editor-change".concat(this.ns), r().bind(this.updateToolbarActivity, this)),
                            this._findElem("ql_action").on("click", r().bind(this.setCustomLink, this)),
                            [2]
                        }
                    }
                    ))
                }
                )).apply(this)
            },
            _initInput: function() {
                return c((function() {
                    var e;
                    return u(this, (function(t) {
                        switch (t.label) {
                        case 0:
                            return e = this._findElem("editable_input").val(),
                            [4, this._init_def];
                        case 1:
                            return t.sent(),
                            this.quill.clipboard.dangerouslyPasteHTML(e),
                            [2]
                        }
                    }
                    ))
                }
                )).apply(this)
            },
            onChange: function(e, t) {
                this._elem("editable_input").val(t),
                this._initInput()
            },
            updateToolbarActivity: function(e) {
                var t, n, i;
                if (("selection-change" !== e || arguments[1]) && ("text-change" !== e || this.quill.getSelection())) {
                    var o = this.quill.getLine(this.quill.getSelection().index)[1];
                    if (("selection-change" !== e || o || 0 === arguments[1].index) && ("text-change" !== e || o)) {
                        "text-change" === e ? t = this.quill.getSelection() : "selection-change" === e && (t = arguments[1]);
                        var s = this.quill.getFormat(t);
                        this.$el.find(this._selector("tip_holder")).removeClass("ql-active").removeAttr("style"),
                        this.$el.find(this._selector("tips_item")).removeClass("tips-item-selected"),
                        r().each(r().keys(s), r().bind((function(e) {
                            i = s[e],
                            "color" === e || "background" === e ? ((n = this.$el.find('.ql-custom-color[data-type="'.concat(e, '"]'))).find('.tips-item[data-value="'.concat(i.toUpperCase(), '"]')).addClass("tips-item-selected"),
                            n.css("stroke", s[e])) : (n = this.$el.find(".ql-custom-".concat(e))).find('.tips-item[data-value="'.concat(i, '"]')).addClass("tips-item-selected"),
                            n.addClass("ql-active")
                        }
                        ), this))
                    }
                }
            },
            setCustomStyle: function(e) {
                var t = o()(e.target).closest(this._selector("tips_item"))
                  , n = t.closest(this._selector("tip_holder"))
                  , i = t.data("value")
                  , s = n.data("type");
                i.toString() && s.toString() && (this.quill.format(s, i, "user"),
                this.closeTips(),
                n.removeClass("ql-active").find(".tips-item-selected").removeClass("tips-item-selected"),
                ("align" !== s || i) && (t.addClass("tips-item-selected"),
                t.closest(this._selector("tip_holder")).addClass("ql-active"),
                "color" !== s && "background" !== s || t.closest(this._selector("tip_holder")).css("stroke", i)))
            },
            setCustomLink: function(e) {
                var t = o()(e.target).closest(".ql-tooltip").find(".ql-tooltip-input")
                  , n = t.val();
                e.stopPropagation(),
                n && (t.val(""),
                this.quill.format("link", n),
                this._updateInput(),
                this.closeTips())
            },
            cleanFormatting: function() {
                this.quill.removeFormat(0, this.quill.getLength() + 1)
            },
            alignCheck: function(e) {
                var t = this.quill.getLine(this.quill.getSelection().index)[1]
                  , n = this.quill.getFormat();
                8 === e.keyCode && (!t && n.align && (e.preventDefault(),
                this.$el.find('.ql-custom-align .ql-picker-item[data-value="false"]').click()),
                this._updateInput()),
                46 !== e.keyCode && 13 !== e.keyCode || this._updateInput()
            },
            closeTips: function() {
                this._elem("tips").hide()
            },
            _updateQuill: function(e) {
                var t = this._getSizesArray()
                  , n = this._getFontsArray()
                  , i = e.import("attributors/style/align")
                  , o = e.import("attributors/style/size")
                  , s = e.import("attributors/style/font")
                  , r = e.import("attributors/style/color")
                  , a = e.import("formats/link")
                  , l = e.import("attributors/style/background");
                o.whitelist = t,
                s.whitelist = n,
                e.register(o, !0),
                e.register(s, !0),
                e.register(i, !0),
                e.register(r, !0),
                e.register(l, !0),
                e.register(a, !0),
                e.debug(!1)
            },
            _getSizesArray: function() {
                return r().map(this._elem("font_size_tip_item"), (function(e) {
                    return o()(e).data("value")
                }
                ))
            },
            _getFontsArray: function() {
                return r().map(this._elem("font_family_tip_item"), (function(e) {
                    return o()(e).data("value")
                }
                ))
            },
            _updateInput: r().debounce((function() {
                var e = this._elem("textarea").html();
                "<p></p>" !== e && "<p><br></p>" !== e || (e = ""),
                this._elem("editable_input").val(e).trigger("change")
            }
            ), 100)
        });
        var h = "../build/transpiled/interface/controls/wysiwyg";
        window.define(h, (function() {
            var e = "undefined"
              , n = typeof t === e ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === e ? typeof module === e ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : t;
            return n && n.default || n
        }
        )),
        window.require([h])
    }
    ,
    144966: (e, t, n) => {
        "use strict";
        n.r(t),
        n.d(t, {
            hhmmToSeconds: () => f,
            parseTimestamp: () => _,
            renderTimer: () => m,
            secondsToHHMM: () => p
        });
        var i = n(55188)
          , o = n.n(i)
          , s = n(460159)
          , r = n.n(s)
          , a = n(161320)
          , l = n.n(a)
          , c = n(661533);
        function u(e, t, n, i, o, s, r) {
            try {
                var a = e[s](r)
                  , l = a.value
            } catch (e) {
                return void n(e)
            }
            a.done ? t(l) : Promise.resolve(l).then(i, o)
        }
        var d, h, p = function(e, t) {
            if (!o().isNumber(e))
                return "00:00";
            var n = Math.abs(e)
              , i = Math.floor(n / 3600)
              , s = Math.floor(n % 3600 / 60);
            return i = i < 10 ? "0".concat(String(i)) : String(i),
            s = s < 10 ? "0".concat(String(s)) : String(s),
            t ? "".concat(e < 0 ? "-" : "").concat(i, ":").concat(s) : "".concat(i, ":").concat(s)
        }, f = function(e) {
            return !!/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/.test(e) && o().reduce(e.split(":"), (function(e, t, n) {
                return (0 === n ? 3600 * t : 60 * t) + e
            }
            ), 0)
        }, _ = function(e) {
            var t = l().unix(e).utc().format(APP.system.format.date.date);
            return {
                date: t,
                time: l().unix(e).utc().format(APP.system.format.date.time),
                full_date: "".concat(l().unix(e).utc().format("dd"), " ").concat(t)
            }
        }, m = (d = function() {
            var e, t;
            return function(e, t) {
                var n, i, o, s, r = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0])
                            throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return s = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                },
                "function" == typeof Symbol && (s[Symbol.iterator] = function() {
                    return this
                }
                ),
                s;
                function a(s) {
                    return function(a) {
                        return function(s) {
                            if (n)
                                throw new TypeError("Generator is already executing.");
                            for (; r; )
                                try {
                                    if (n = 1,
                                    i && (o = 2 & s[0] ? i.return : s[0] ? i.throw || ((o = i.return) && o.call(i),
                                    0) : i.next) && !(o = o.call(i, s[1])).done)
                                        return o;
                                    switch (i = 0,
                                    o && (s = [2 & s[0], o.value]),
                                    s[0]) {
                                    case 0:
                                    case 1:
                                        o = s;
                                        break;
                                    case 4:
                                        return r.label++,
                                        {
                                            value: s[1],
                                            done: !1
                                        };
                                    case 5:
                                        r.label++,
                                        i = s[1],
                                        s = [0];
                                        continue;
                                    case 7:
                                        s = r.ops.pop(),
                                        r.trys.pop();
                                        continue;
                                    default:
                                        if (!((o = (o = r.trys).length > 0 && o[o.length - 1]) || 6 !== s[0] && 2 !== s[0])) {
                                            r = 0;
                                            continue
                                        }
                                        if (3 === s[0] && (!o || s[1] > o[0] && s[1] < o[3])) {
                                            r.label = s[1];
                                            break
                                        }
                                        if (6 === s[0] && r.label < o[1]) {
                                            r.label = o[1],
                                            o = s;
                                            break
                                        }
                                        if (o && r.label < o[2]) {
                                            r.label = o[2],
                                            r.ops.push(s);
                                            break
                                        }
                                        o[2] && r.ops.pop(),
                                        r.trys.pop();
                                        continue
                                    }
                                    s = t.call(e, r)
                                } catch (e) {
                                    s = [6, e],
                                    i = 0
                                } finally {
                                    n = o = 0
                                }
                            if (5 & s[0])
                                throw s[1];
                            return {
                                value: s[0] ? s[1] : void 0,
                                done: !0
                            }
                        }([s, a])
                    }
                }
            }(this, (function(n) {
                switch (n.label) {
                case 0:
                    return e = "/tmpl/operday/controls/timer.twig",
                    t = c(".card-widgets__elements"),
                    [4, r()._preload([e])()];
                case 1:
                    return n.sent(),
                    t.addClass("operday-timer__holder"),
                    t.prepend(r()({
                        ref: e
                    }).render({
                        entity_id: APP.data.current_card.id,
                        entity_type: APP.data.current_entity
                    })),
                    [2]
                }
            }
            ))
        }
        ,
        h = function() {
            var e = this
              , t = arguments;
            return new Promise((function(n, i) {
                var o = d.apply(e, t);
                function s(e) {
                    u(o, n, i, s, r, "next", e)
                }
                function r(e) {
                    u(o, n, i, s, r, "throw", e)
                }
                s(void 0)
            }
            ))
        }
        ,
        function() {
            return h.apply(this, arguments)
        }
        ), g = "../build/transpiled/interface/operday/utils";
        window.define(g, (function() {
            var e = "undefined"
              , n = typeof t === e ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === e ? typeof module === e ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : t;
            return n && n.default || n
        }
        )),
        window.require([g])
    }
    ,
    944989: (e, t, n) => {
        "use strict";
        n.r(t),
        n.d(t, {
            LeadSourceModel: () => d
        });
        var i = n(55188)
          , o = n.n(i)
          , s = n(871082)
          , r = n(880774);
        function a(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(e, i.key, i)
            }
        }
        function l(e) {
            return l = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            ,
            l(e)
        }
        function c(e, t) {
            return c = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                e
            }
            ,
            c(e, t)
        }
        function u(e) {
            var t = function() {
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
                var n, i = l(e);
                if (t) {
                    var o = l(this).constructor;
                    n = Reflect.construct(i, arguments, o)
                } else
                    n = i.apply(this, arguments);
                return function(e, t) {
                    return !t || "object" != ((n = t) && "undefined" != typeof Symbol && n.constructor === Symbol ? "symbol" : typeof n) && "function" != typeof t ? function(e) {
                        if (void 0 === e)
                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return e
                    }(e) : t;
                    var n
                }(this, n)
            }
        }
        var d = function(e) {
            !function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && c(e, t)
            }(l, e);
            var t, n, i, s = u(l);
            function l() {
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, l),
                s.apply(this, arguments)
            }
            return t = l,
            i = [{
                key: "makeModelId",
                value: function(e) {
                    var t = e.origin
                      , n = e.source_id;
                    return o().compact([t, n]).join(":")
                }
            }],
            (n = [{
                key: "getId",
                value: function() {
                    return this.get("id")
                }
            }, {
                key: "getOrigin",
                value: function() {
                    return this.get("_origin")
                }
            }, {
                key: "getOriginIconUrl",
                value: function() {
                    return this.get("_origin_icon_url")
                }
            }, {
                key: "getSourceId",
                value: function() {
                    return this.get("_source_id")
                }
            }, {
                key: "getOriginName",
                value: function() {
                    return this.get("_origin_name")
                }
            }, {
                key: "getName",
                value: function() {
                    return this.get("_source_name")
                }
            }, {
                key: "getWidgetName",
                value: function() {
                    return this.get("_widget_name")
                }
            }, {
                key: "getScopeId",
                value: function() {
                    return this.get("_scope_id")
                }
            }, {
                key: "getFormattedOriginName",
                value: function(e) {
                    var t = e.with_widget_name
                      , n = this.getOriginName() || (0,
                    r.capitalize)(this.getOrigin())
                      , i = this.getWidgetName();
                    return i && t ? "".concat(n, " (").concat(i, ")") : n
                }
            }, {
                key: "getNameWithOrigin",
                value: function() {
                    var e = this.getName()
                      , t = this.getFormattedOriginName({
                        with_widget_name: !1
                    });
                    return e ? "".concat(e, " (").concat(t, ")") : t
                }
            }]) && a(t.prototype, n),
            i && a(t, i),
            l
        }(s.Model)
    }
    ,
    950731: (e, t, n) => {
        "use strict";
        n.r(t),
        n.d(t, {
            default: () => u
        });
        var i = n(55188)
          , o = n.n(i)
          , s = n(312309)
          , r = n(661533)
          , a = {}
          , l = {};
        r(document).on("page:changed", (function() {
            a = {},
            l = {}
        }
        ));
        var c = function() {};
        o().extend(c.prototype, {
            getPipelines: function(e) {
                return !0 === e || o().isEmpty(a) ? (this._pipelines_xhr || (this._pipelines_xhr = r.ajax({
                    url: "/ajax/v1/pipelines/list",
                    type: "GET",
                    dataType: "json"
                }).always(o().bind((function() {
                    this._pipelines_xhr = null
                }
                ), this)).then((function(e) {
                    var t = e.response;
                    return o().each(t.pipelines, (function(e) {
                        e.statuses = o().sortBy(e.statuses, "sort")
                    }
                    )),
                    a = t,
                    t
                }
                ))),
                this._pipelines_xhr) : r.Deferred().resolve(a)
            },
            getPipelinesWithUnsorted: function(e) {
                return !0 === e || o().isEmpty(l) ? (this._pipelines_w_unsorted_xhr || (this._pipelines_w_unsorted_xhr = r.ajax({
                    url: "/ajax/v1/pipelines/list?with_unsorted=true",
                    type: "GET",
                    dataType: "json"
                }).always(o().bind((function() {
                    this._pipelines_w_unsorted_xhr = null
                }
                ), this)).then((function(e) {
                    var t = e.response;
                    return o().each(t.pipelines, (function(e) {
                        e.statuses = o().sortBy(e.statuses, "sort")
                    }
                    )),
                    l = t,
                    t
                }
                ))),
                this._pipelines_w_unsorted_xhr) : r.Deferred().resolve(l)
            },
            getLeadsByStatus: function(e, t) {
                var n = this;
                return e = e ? e + "/" : "",
                this._lbs_fetching = this._lbs_fetching || {},
                t = t || (0,
                s.getQueryString)(),
                this._lbs_fetching[t] && 4 !== this._lbs_fetching[t].readyState || (this._lbs_fetching[t] = r.ajax({
                    url: "/ajax/leads/sum/".concat(e),
                    data: "leads_by_status=Y".concat((t.length ? "&" : "") + t),
                    type: "POST"
                }).always((function() {
                    delete n._lbs_fetching[t]
                }
                ))),
                this._lbs_fetching[t]
            },
            getLossReasons: function() {
                return r.ajax({
                    url: "/ajax/v3/loss_reasons"
                })
            },
            getLeadsCount: function(e) {
                return r.ajax({
                    url: "/ajax/leads/sum/?pipeline_id=".concat(e),
                    data: {
                        leads_count: "Y"
                    },
                    type: "POST"
                })
            },
            getStatusesWithLeads: function(e, t) {
                return r.ajax({
                    url: "/ajax/leads/sum/".concat(e),
                    data: (n = {
                        leads_by_status: "Y"
                    },
                    i = "filter[pipe][".concat(e, "][]"),
                    o = t,
                    i in n ? Object.defineProperty(n, i, {
                        value: o,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : n[i] = o,
                    n),
                    type: "POST"
                });
                var n, i, o
            },
            getTriggersCount: function(e) {
                return r.ajax({
                    url: "/ajax/leads/pipelines/".concat(e, "/triggers/count")
                })
            },
            getLeadDoubles: function(e) {
                return e ? r.ajax({
                    url: "/ajax/v4/leads/doubles/".concat(e)
                }) : Promise.reject()
            },
            getListLeadsCount: function(e, t) {
                var n = (0,
                s.getQueryString)()
                  , i = "/ajax/leads/list/".concat(e ? "pipeline/".concat(e) : "", "?only_count=Y").concat(n ? "&".concat(n) : "").concat(t ? "&SHOW_DELETED=Y" : "");
                return r.ajax({
                    url: i,
                    type: "GET"
                })
            },
            saveStatuses: function(e, t) {
                return r.ajax({
                    url: "/ajax/leads/pipelines/".concat(t, "/statuses"),
                    type: "POST",
                    dataType: "text",
                    contentType: "application/json",
                    data: JSON.stringify({
                        statuses: e
                    })
                })
            }
        });
        const u = new c;
        var d = "../build/transpiled/network/leads/api";
        window.define(d, (function() {
            var e = "undefined"
              , n = typeof t === e ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === e ? typeof module === e ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : t;
            return n && n.default || n
        }
        )),
        window.require([d])
    }
    ,
    388590: (e, t, n) => {
        "use strict";
        n.r(t),
        n.d(t, {
            default: () => o
        });
        var i = n(661533);
        const o = {
            startOperday: function(e) {
                return i.ajax({
                    url: "/ajax/v4/operday/open",
                    method: "POST",
                    dataType: "JSON",
                    data: JSON.stringify({
                        started_at: e
                    })
                })
            },
            reopenOperday: function() {
                return i.ajax({
                    url: "/ajax/v4/operday/open",
                    method: "POST",
                    dataType: "JSON",
                    data: JSON.stringify({
                        reopen: !0
                    })
                })
            },
            closeOperday: function(e) {
                return i.ajax({
                    url: "/ajax/v4/operday/close",
                    method: "POST",
                    dataType: "JSON",
                    data: JSON.stringify({
                        ended_at: e
                    })
                })
            },
            getTimer: function(e, t) {
                return i.ajax({
                    url: "/ajax/v4/operday/".concat(t, "/").concat(e, "/timer/state"),
                    method: "GET",
                    dataType: "JSON"
                })
            },
            sendTimerState: function(e) {
                var t = e.entity_type
                  , n = e.id
                  , o = e.body;
                return i.ajax({
                    url: "/ajax/v4/operday/".concat(t, "/").concat(n, "/timer/state"),
                    method: "PUT",
                    dataType: "JSON",
                    data: JSON.stringify(o)
                })
            },
            getDetailByEntity: function(e) {
                return i.ajax({
                    url: "/ajax/v4/operday/timer/".concat(e, "/detail"),
                    method: "GET",
                    dataType: "JSON"
                })
            },
            getStatsOnCard: function(e, t) {
                return i.ajax({
                    url: "/ajax/v4/operday/".concat(e, "/").concat(t, "/stats"),
                    method: "GET",
                    dataType: "JSON"
                })
            }
        };
        var s = "../build/transpiled/network/operday/api";
        window.define(s, (function() {
            var e = "undefined"
              , n = typeof t === e ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === e ? typeof module === e ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : t;
            return n && n.default || n
        }
        )),
        window.require([s])
    }
    ,
    672065: (e, t, n) => {
        "use strict";
        n.r(t),
        n.d(t, {
            default: () => l
        });
        var i = n(500034);
        function o(e, t, n, i, o, s, r) {
            try {
                var a = e[s](r)
                  , l = a.value
            } catch (e) {
                return void n(e)
            }
            a.done ? t(l) : Promise.resolve(l).then(i, o)
        }
        function s(e) {
            return function() {
                var t = this
                  , n = arguments;
                return new Promise((function(i, s) {
                    var r = e.apply(t, n);
                    function a(e) {
                        o(r, i, s, a, l, "next", e)
                    }
                    function l(e) {
                        o(r, i, s, a, l, "throw", e)
                    }
                    a(void 0)
                }
                ))
            }
        }
        var r = function() {
            return (0,
            i.isFeatureAvailable)("single_timeline") ? Promise.all([n.e(76012), n.e(20983), n.e(56740), n.e(95882), n.e(21581), n.e(79985), n.e(40182), n.e(882), n.e(58551), n.e(94482), n.e(53081), n.e(7618), n.e(98566), n.e(58008), n.e(37972), n.e(96107), n.e(54092), n.e(58267), n.e(23237), n.e(53186)]).then(n.bind(n, 463147)) : Promise.all([n.e(76012), n.e(20983), n.e(56740), n.e(95882), n.e(21581), n.e(79985), n.e(40182), n.e(882), n.e(58551), n.e(94482), n.e(53081), n.e(7618), n.e(98566), n.e(58008), n.e(37972), n.e(96107), n.e(54092), n.e(58267), n.e(23237), n.e(44369)]).then(n.bind(n, 40462))
        }
          , a = function() {
            return (0,
            i.isFeatureAvailable)("single_timeline") ? Promise.all([n.e(76012), n.e(20983), n.e(56740), n.e(85067), n.e(95882), n.e(21581), n.e(79985), n.e(40182), n.e(882), n.e(58551), n.e(94482), n.e(53081), n.e(7618), n.e(98566), n.e(58008), n.e(37972), n.e(96107), n.e(54092), n.e(68430), n.e(58267), n.e(23237), n.e(6289), n.e(66118), n.e(25500), n.e(33783)]).then(n.bind(n, 804635)) : Promise.all([n.e(76012), n.e(20983), n.e(56740), n.e(85067), n.e(95882), n.e(21581), n.e(79985), n.e(40182), n.e(882), n.e(58551), n.e(94482), n.e(53081), n.e(7618), n.e(98566), n.e(58008), n.e(37972), n.e(96107), n.e(54092), n.e(68430), n.e(58267), n.e(23237), n.e(6289), n.e(66118), n.e(25500), n.e(28874), n.e(34662)]).then(n.bind(n, 228874))
        };
        const l = {
            "dashboard(/)": ["dashboard", function() {
                return Promise.all([n.e(56740), n.e(59966), n.e(39877), n.e(39830), n.e(86967), n.e(85956), n.e(68105), n.e(96406), n.e(48008), n.e(58349), n.e(85906)]).then(n.bind(n, 388899))
            }
            ],
            "leads/list/pipeline(/)(:id)(/)(page/:page/)": ["leads", function() {
                return Promise.all([n.e(76012), n.e(20983), n.e(56740), n.e(95882), n.e(21581), n.e(79985), n.e(40182), n.e(39877), n.e(882), n.e(39830), n.e(86967), n.e(85956), n.e(59663), n.e(20022), n.e(68105), n.e(13749), n.e(3904), n.e(47631), n.e(77620), n.e(24996)]).then(n.bind(n, 403682))
            }
            ],
            "leads/list(/)(page/:page/)": ["leads", function() {
                return Promise.all([n.e(76012), n.e(20983), n.e(56740), n.e(95882), n.e(21581), n.e(79985), n.e(40182), n.e(39877), n.e(882), n.e(39830), n.e(86967), n.e(85956), n.e(59663), n.e(20022), n.e(68105), n.e(13749), n.e(3904), n.e(47631), n.e(77620), n.e(34441)]).then(n.bind(n, 687348))
            }
            ],
            "leads/trash(/)(page/:page/)": ["leads-trash", function() {
                return Promise.all([n.e(76012), n.e(20983), n.e(56740), n.e(95882), n.e(21581), n.e(79985), n.e(40182), n.e(39877), n.e(882), n.e(39830), n.e(86967), n.e(85956), n.e(59663), n.e(20022), n.e(68105), n.e(13749), n.e(3904), n.e(47631), n.e(77620), n.e(34441)]).then(n.bind(n, 687348))
            }
            ],
            "leads/pipeline(/)(:id)(/)(?*qs)": ["leads-pipeline", function() {
                return Promise.all([n.e(39877), n.e(39830), n.e(13749), n.e(3904), n.e(82494), n.e(19964)]).then(n.bind(n, 188803))
            }
            ],
            "leads/detail/:id(/)": ["leads", r, {
                is_card: !0
            }],
            "leads/add(/)": ["leads", r, {
                is_card: !0
            }],
            "imbox(/)": ["chats", function() {
                return Promise.all([n.e(85067), n.e(68430), n.e(6289), n.e(61561)]).then(n.bind(n, 165073))
            }
            ],
            "imbox/:talk_id/:user_id(/)": ["leads", function() {
                return Promise.all([n.e(85067), n.e(68430), n.e(6289), n.e(61561)]).then(n.bind(n, 165073))
            }
            ],
            "imbox/:talk_id/leads/detail/:id(/)": ["leads", a, {
                is_card: !0
            }],
            "imbox/leads/detail/:id(/)": ["leads", a, {
                is_card: !0
            }],
            "imbox/:talk_id/customers/detail/:id(/)": ["customers", function() {
                return (0,
                i.isFeatureAvailable)("single_timeline") ? Promise.all([n.e(76012), n.e(20983), n.e(56740), n.e(85067), n.e(7007), n.e(95882), n.e(21581), n.e(79985), n.e(40182), n.e(882), n.e(58551), n.e(94482), n.e(53081), n.e(7618), n.e(98566), n.e(58008), n.e(37972), n.e(96107), n.e(54092), n.e(68430), n.e(58267), n.e(23237), n.e(6289), n.e(66118), n.e(25500), n.e(25626)]).then(n.bind(n, 917185)) : Promise.all([n.e(76012), n.e(20983), n.e(56740), n.e(85067), n.e(7007), n.e(95882), n.e(21581), n.e(79985), n.e(40182), n.e(882), n.e(58551), n.e(94482), n.e(53081), n.e(7618), n.e(98566), n.e(58008), n.e(37972), n.e(96107), n.e(54092), n.e(68430), n.e(58267), n.e(23237), n.e(6289), n.e(66118), n.e(25500), n.e(28874), n.e(50810)]).then(n.bind(n, 338398))
            }
            , {
                is_card: !0
            }],
            "imbox/:talk_id/contacts/detail/:id(/)": ["contacts", a, {
                is_card: !0
            }],
            "chats(/)": ["chats", function() {
                return Promise.all([n.e(85067), n.e(68430), n.e(6289), n.e(61561)]).then(n.bind(n, 165073))
            }
            ],
            "chats/:talk_id/:user_id(/)": ["leads", function() {
                return Promise.all([n.e(85067), n.e(68430), n.e(6289), n.e(61561)]).then(n.bind(n, 165073))
            }
            ],
            "chats/:talk_id/leads/detail/:id(/)": ["leads", a, {
                is_card: !0
            }],
            "chats/leads/detail/:id(/)": ["leads", a, {
                is_card: !0
            }],
            "chats/:talk_id/customers/detail/:id(/)": ["customers", function() {
                return (0,
                i.isFeatureAvailable)("single_timeline") ? Promise.all([n.e(76012), n.e(20983), n.e(56740), n.e(85067), n.e(7007), n.e(95882), n.e(21581), n.e(79985), n.e(40182), n.e(882), n.e(58551), n.e(94482), n.e(53081), n.e(7618), n.e(98566), n.e(58008), n.e(37972), n.e(96107), n.e(54092), n.e(68430), n.e(58267), n.e(23237), n.e(6289), n.e(66118), n.e(25500), n.e(25626)]).then(n.bind(n, 917185)) : Promise.all([n.e(76012), n.e(20983), n.e(56740), n.e(85067), n.e(7007), n.e(95882), n.e(21581), n.e(79985), n.e(40182), n.e(882), n.e(58551), n.e(94482), n.e(53081), n.e(7618), n.e(98566), n.e(58008), n.e(37972), n.e(96107), n.e(54092), n.e(68430), n.e(58267), n.e(23237), n.e(6289), n.e(66118), n.e(25500), n.e(28874), n.e(50810)]).then(n.bind(n, 338398))
            }
            , {
                is_card: !0
            }],
            "chats/:talk_id/contacts/detail/:id(/)": ["contacts", a, {
                is_card: !0
            }],
            "whatsapp/features(/)": ["whatsapp", function() {
                return n.e(62365).then(n.bind(n, 962365))
            }
            ],
            "whatsapp/broadcasting(/)": ["whatsapp", function() {
                return n.e(62365).then(n.bind(n, 962365))
            }
            ],
            "whatsapp/templates-and-bots(/)": ["whatsapp", function() {
                return n.e(62365).then(n.bind(n, 962365))
            }
            ],
            "customers/list(/page/:page)(/)": ["customers", function() {
                return Promise.all([n.e(76012), n.e(20983), n.e(56740), n.e(95882), n.e(21581), n.e(79985), n.e(40182), n.e(39877), n.e(882), n.e(39830), n.e(86967), n.e(85956), n.e(59663), n.e(20022), n.e(68105), n.e(13749), n.e(3904), n.e(89837)]).then(n.bind(n, 712629))
            }
            ],
            "customers/pipeline(*plug)": ["customers-pipeline", function() {
                return Promise.all([n.e(39877), n.e(39830), n.e(13749), n.e(3904), n.e(82494), n.e(93807)]).then(n.bind(n, 773877))
            }
            ],
            "customers/trash(/)(page/:page/)": ["customers-trash", function() {
                return Promise.all([n.e(76012), n.e(20983), n.e(56740), n.e(95882), n.e(21581), n.e(79985), n.e(40182), n.e(39877), n.e(882), n.e(39830), n.e(86967), n.e(85956), n.e(59663), n.e(20022), n.e(68105), n.e(13749), n.e(3904), n.e(89837)]).then(n.bind(n, 712629))
            }
            ],
            "customers/detail/:id(/)": ["customers", r, {
                is_card: !0
            }],
            "customers/add(/)": ["customers", r, {
                is_card: !0
            }],
            "customers/segments(/)": ["customers-dp", function() {
                return Promise.all([n.e(95882), n.e(21581), n.e(58551), n.e(29020), n.e(93231), n.e(23487), n.e(74249), n.e(64082), n.e(55021), n.e(94482), n.e(24324), n.e(93702), n.e(52854), n.e(60955), n.e(90233)]).then(n.bind(n, 409675))
            }
            ],
            "contacts/list(/)(:element_type/)(page/:page/)": ["contacts", function() {
                return Promise.all([n.e(76012), n.e(20983), n.e(56740), n.e(95882), n.e(21581), n.e(79985), n.e(40182), n.e(39877), n.e(882), n.e(39830), n.e(86967), n.e(85956), n.e(59663), n.e(20022), n.e(68105), n.e(13749), n.e(3904), n.e(5901)]).then(n.bind(n, 440280))
            }
            ],
            "contacts/trash(/)(page/:page/)": ["contacts-trash", function() {
                return Promise.all([n.e(76012), n.e(20983), n.e(56740), n.e(95882), n.e(21581), n.e(79985), n.e(40182), n.e(39877), n.e(882), n.e(39830), n.e(86967), n.e(85956), n.e(59663), n.e(20022), n.e(68105), n.e(13749), n.e(3904), n.e(5901)]).then(n.bind(n, 440280))
            }
            ],
            "contacts/detail/:id(/)": ["contacts", r, {
                is_card: !0
            }],
            "contacts/add(/)": ["contacts", r, {
                is_card: !0
            }],
            "companies/detail/:id(/)": ["companies", r, {
                is_card: !0
            }],
            "companies/add(/)": ["companies", r, {
                is_card: !0
            }],
            "files/list(/)(page/:page)(/)": ["files", function() {
                return Promise.all([n.e(76012), n.e(20983), n.e(56740), n.e(95882), n.e(21581), n.e(79985), n.e(40182), n.e(39877), n.e(882), n.e(39830), n.e(86967), n.e(85956), n.e(59663), n.e(20022), n.e(68105), n.e(13749), n.e(89054), n.e(82501), n.e(700)]).then(n.bind(n, 740074))
            }
            ],
            "files/trash(/)(page/:page)(/)": ["files-trash", function() {
                return Promise.all([n.e(76012), n.e(20983), n.e(56740), n.e(95882), n.e(21581), n.e(79985), n.e(40182), n.e(39877), n.e(882), n.e(39830), n.e(86967), n.e(85956), n.e(59663), n.e(20022), n.e(68105), n.e(13749), n.e(89054), n.e(82501), n.e(700)]).then(n.bind(n, 740074))
            }
            ],
            "files/detail/:id(/)": ["files", function() {
                return Promise.all([n.e(76012), n.e(20983), n.e(56740), n.e(95882), n.e(21581), n.e(79985), n.e(40182), n.e(39877), n.e(882), n.e(39830), n.e(86967), n.e(85956), n.e(59663), n.e(20022), n.e(68105), n.e(13749), n.e(89054), n.e(82501), n.e(700)]).then(n.bind(n, 740074))
            }
            , {
                is_card: !0
            }],
            "mail/:folder(/:box)(/page/:page)(/)": ["mail", function() {
                return Promise.all([n.e(76012), n.e(20983), n.e(56740), n.e(95882), n.e(21581), n.e(79985), n.e(40182), n.e(39877), n.e(882), n.e(39830), n.e(86967), n.e(85956), n.e(59663), n.e(20022), n.e(68105), n.e(13749), n.e(74707)]).then(n.bind(n, 616663))
            }
            ],
            "mail/settings(/)": ["mail", function() {
                return Promise.all([n.e(95882), n.e(21581), n.e(92579)]).then(n.bind(n, 92579))
            }
            ],
            "mail/thread/:id(/)": ["mail", function() {
                return Promise.all([n.e(76012), n.e(20983), n.e(56740), n.e(95882), n.e(21581), n.e(79985), n.e(40182), n.e(882), n.e(58267), n.e(97823)]).then(n.bind(n, 826572))
            }
            , {
                is_card: !0
            }],
            "mail/thread/new(/)": ["mail", function() {
                return Promise.all([n.e(76012), n.e(20983), n.e(56740), n.e(95882), n.e(21581), n.e(79985), n.e(40182), n.e(882), n.e(58267), n.e(97823)]).then(n.bind(n, 826572))
            }
            , {
                is_card: !0
            }],
            "todo/list(/)(page/:page/)": ["todo", function() {
                return Promise.all([n.e(76012), n.e(20983), n.e(56740), n.e(95882), n.e(21581), n.e(79985), n.e(40182), n.e(39877), n.e(882), n.e(39830), n.e(86967), n.e(85956), n.e(59663), n.e(20022), n.e(68105), n.e(13749), n.e(3904), n.e(72489)]).then(n.bind(n, 303609))
            }
            ],
            "todo/trash(/)(page/:page/)": ["todo-trash", function() {
                return Promise.all([n.e(76012), n.e(20983), n.e(56740), n.e(95882), n.e(21581), n.e(79985), n.e(40182), n.e(39877), n.e(882), n.e(39830), n.e(86967), n.e(85956), n.e(59663), n.e(20022), n.e(68105), n.e(13749), n.e(3904), n.e(72489)]).then(n.bind(n, 303609))
            }
            ],
            "todo/line(/)": ["todo-line", function() {
                return Promise.all([n.e(76012), n.e(20983), n.e(39700), n.e(95882), n.e(21581), n.e(79985), n.e(40182), n.e(39877), n.e(882), n.e(39830), n.e(3904), n.e(6058)]).then(n.bind(n, 974183))
            }
            ],
            "todo/calendar(/)(:view)(/)": ["todo-calendar", function() {
                return Promise.all([n.e(76012), n.e(20983), n.e(95882), n.e(21581), n.e(79985), n.e(40182), n.e(39877), n.e(882), n.e(39830), n.e(3904), n.e(97767)]).then(n.bind(n, 527712))
            }
            ],
            "events/list(/)(page/:page/)": ["events", function() {
                return Promise.all([n.e(56740), n.e(39877), n.e(39830), n.e(86967), n.e(85956), n.e(68105), n.e(13749), n.e(58349), n.e(84467)]).then(n.bind(n, 111158))
            }
            ],
            "authlog/list(/)(page/:page/)": ["authlog", function() {
                return Promise.all([n.e(56740), n.e(81142), n.e(39877), n.e(39830), n.e(86967), n.e(85956), n.e(13749), n.e(56604)]).then(n.bind(n, 657450))
            }
            ],
            "stats/pipeline(/)": ["stats", function() {
                return Promise.all([n.e(39877), n.e(96406), n.e(48008), n.e(77817), n.e(20345)]).then(n.bind(n, 348189))
            }
            ],
            "stats/by_activities(/)(:id)(/)": ["stats-human", function() {
                return Promise.all([n.e(56740), n.e(39877), n.e(39830), n.e(86967), n.e(85956), n.e(68105), n.e(58349), n.e(15270)]).then(n.bind(n, 628393))
            }
            ],
            "stats/by_activities(/)": ["stats-human", function() {
                return Promise.all([n.e(56740), n.e(39877), n.e(39830), n.e(86967), n.e(85956), n.e(68105), n.e(13749), n.e(58349), n.e(26854)]).then(n.bind(n, 329932))
            }
            ],
            "stats/customers(/)": ["stats", function() {
                return Promise.all([n.e(39877), n.e(96406), n.e(48008), n.e(8729)]).then(n.bind(n, 617122))
            }
            ],
            "stats/consolidated(/)(:report/)": ["stats", function() {
                return Promise.all([n.e(39877), n.e(96406), n.e(48008), n.e(4199)]).then(n.bind(n, 539725))
            }
            ],
            "stats/calls(/)(:report/)": ["statsCalls", function() {
                return Promise.all([n.e(39877), n.e(77817), n.e(48796)]).then(n.bind(n, 848796))
            }
            ],
            "stats/operday(/)": ["statsOperday", function() {
                return Promise.all([n.e(56740), n.e(39877), n.e(39830), n.e(86967), n.e(85956), n.e(16976), n.e(15814), n.e(86864)]).then(n.bind(n, 986864))
            }
            ],
            "stats/goals(/)": ["stats", function() {
                return Promise.all([n.e(39877), n.e(13317)]).then(n.bind(n, 686592))
            }
            ],
            "stats/goals/leads_price(/)": ["stats", function() {
                return Promise.all([n.e(39877), n.e(13317)]).then(n.bind(n, 686592))
            }
            ],
            "stats/goals/leads_count(/)": ["stats", function() {
                return Promise.all([n.e(39877), n.e(13317)]).then(n.bind(n, 686592))
            }
            ],
            "stats/goals/settings(/)": ["stats", function() {
                return n.e(65596).then(n.bind(n, 165596))
            }
            ],
            "stats/widgets/(:widget_code)(/)(:subitem_code)(/)": ["widget-page", function() {
                return n.e(5506).then(n.bind(n, 705506))
            }
            , {
                params: {
                    entity: "stats"
                },
                is_card: !1
            }],
            "stats/widgets/(:widget_code)(/)": ["advanced-stats", function() {
                return n.e(48499).then(n.bind(n, 648499))
            }
            , {
                params: {
                    entity: "advanced-stats"
                },
                is_card: !1
            }],
            "settings/profile(/)": ["settings", function() {
                return Promise.all([n.e(95882), n.e(35412), n.e(33319)]).then(n.bind(n, 222562))
            }
            ],
            "settings(/)": ["settings", function() {
                return Promise.all([n.e(76012), n.e(20983), n.e(56740), n.e(95882), n.e(21581), n.e(79985), n.e(40182), n.e(39877), n.e(882), n.e(39830), n.e(86967), n.e(85956), n.e(59663), n.e(20022), n.e(68105), n.e(43898)]).then(n.bind(n, 51292))
            }
            ],
            "settings/new_version(/)": ["settings", function() {
                return n.e(32145).then(n.bind(n, 32145))
            }
            ],
            "backup(/)(:key/)": ["settings", function() {
                return Promise.all([n.e(76012), n.e(20983), n.e(56740), n.e(95882), n.e(21581), n.e(79985), n.e(40182), n.e(39877), n.e(882), n.e(39830), n.e(86967), n.e(85956), n.e(59663), n.e(20022), n.e(68105), n.e(43898)]).then(n.bind(n, 51292))
            }
            ],
            "settings/custom_fields(/)": ["settings", function() {
                return n.e(29883).then(n.bind(n, 829883))
            }
            ],
            "settings/scoring(/)": ["settings", function() {
                return n.e(32173).then(n.bind(n, 132173))
            }
            ],
            "settings/widgets(/)(:widget_code)(/)(:subitem_code)(/)": ["widget-page", function() {
                return n.e(5506).then(n.bind(n, 705506))
            }
            , {
                params: {
                    entity: "settings"
                },
                is_card: !1
            }],
            "settings/widgets(/)(:widget_code)(/)": ["advanced-settings", function() {
                return n.e(5506).then(n.bind(n, 705506))
            }
            , {
                params: {
                    entity: "advanced"
                },
                is_card: !1
            }],
            "settings/widgets(/)": ["widgetsSettings", function() {
                return (0,
                i.isFeatureAvailable)("global_marketplace") ? Promise.all([n.e(95882), n.e(92738), n.e(84732), n.e(58551), n.e(96406), n.e(48008), n.e(29131), n.e(68607), n.e(16629), n.e(82008), n.e(24234), n.e(19461), n.e(62946), n.e(38632)]).then(n.bind(n, 624234)) : Promise.all([n.e(95882), n.e(92738), n.e(84732), n.e(82008), n.e(53923)]).then(n.bind(n, 233629))
            }
            ],
            "amo-market(/)": ["widgetsSettings", function() {
                return Promise.all([n.e(95882), n.e(92738), n.e(84732), n.e(82008), n.e(53923)]).then(n.bind(n, 233629))
            }
            ],
            "amo-market/application(/)": ["widgetsSettings", function() {
                return Promise.all([n.e(76012), n.e(20983), n.e(56740), n.e(95882), n.e(21581), n.e(79985), n.e(40182), n.e(39877), n.e(882), n.e(39830), n.e(86967), n.e(85956), n.e(59663), n.e(20022), n.e(68105), n.e(96406), n.e(48008), n.e(29131), n.e(68607), n.e(16629), n.e(58546)]).then(n.bind(n, 463322))
            }
            ],
            "amo-market/sales(/)": ["widgetsSettings", function() {
                return Promise.all([n.e(76012), n.e(20983), n.e(56740), n.e(95882), n.e(21581), n.e(79985), n.e(40182), n.e(39877), n.e(882), n.e(39830), n.e(86967), n.e(85956), n.e(59663), n.e(20022), n.e(68105), n.e(14025)]).then(n.bind(n, 831397))
            }
            ],
            "settings/dev(/)(page/:page/)": ["dev", function() {
                return Promise.all([n.e(35571), n.e(37077)]).then(n.bind(n, 337077))
            }
            ],
            "settings/users(/)": ["settings-users", function() {
                return Promise.all([n.e(56740), n.e(39877), n.e(39830), n.e(86967), n.e(85956), n.e(13749), n.e(27288)]).then(n.bind(n, 762069))
            }
            ],
            "settings/pipeline/leads(/)(:id)(/)": ["leads-dp", function() {
                return Promise.all([n.e(46014), n.e(77202), n.e(95882), n.e(92738), n.e(84732), n.e(58551), n.e(29020), n.e(93231), n.e(23487), n.e(74249), n.e(64082), n.e(55021), n.e(24324), n.e(48350), n.e(72682), n.e(24256), n.e(74855), n.e(26582), n.e(92853), n.e(36189), n.e(16583), n.e(93702), n.e(52854), n.e(94533)]).then(n.bind(n, 583467))
            }
            ],
            "settings/pipeline/customers(/)(:id)(/)": ["customers-dp", function() {
                return Promise.all([n.e(46014), n.e(77202), n.e(95882), n.e(92738), n.e(84732), n.e(58551), n.e(29020), n.e(93231), n.e(23487), n.e(74249), n.e(64082), n.e(55021), n.e(24324), n.e(48350), n.e(72682), n.e(24256), n.e(74855), n.e(26582), n.e(92853), n.e(36189), n.e(16583), n.e(93702), n.e(52854), n.e(94533)]).then(n.bind(n, 583467))
            }
            ],
            "settings/communications(/)": ["settings-communications", function() {
                return Promise.all([n.e(76012), n.e(20983), n.e(56740), n.e(95882), n.e(21581), n.e(79985), n.e(40182), n.e(39877), n.e(882), n.e(39830), n.e(86967), n.e(85956), n.e(59663), n.e(20022), n.e(58551), n.e(68105), n.e(29020), n.e(93231), n.e(23487), n.e(74249), n.e(64082), n.e(55021), n.e(94482), n.e(35412), n.e(40713), n.e(51999), n.e(94349), n.e(68159), n.e(40591), n.e(72544), n.e(86965), n.e(1834), n.e(32077), n.e(76040), n.e(2587), n.e(47207), n.e(6268)]).then(n.bind(n, 285882)).then((function(e) {
                    return {
                        default: e.default.Page
                    }
                }
                ))
            }
            ],
            "settings/ai(/)": ["settings-ai", s((function() {
                return function(e, t) {
                    var n, i, o, s, r = {
                        label: 0,
                        sent: function() {
                            if (1 & o[0])
                                throw o[1];
                            return o[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return s = {
                        next: a(0),
                        throw: a(1),
                        return: a(2)
                    },
                    "function" == typeof Symbol && (s[Symbol.iterator] = function() {
                        return this
                    }
                    ),
                    s;
                    function a(s) {
                        return function(a) {
                            return function(s) {
                                if (n)
                                    throw new TypeError("Generator is already executing.");
                                for (; r; )
                                    try {
                                        if (n = 1,
                                        i && (o = 2 & s[0] ? i.return : s[0] ? i.throw || ((o = i.return) && o.call(i),
                                        0) : i.next) && !(o = o.call(i, s[1])).done)
                                            return o;
                                        switch (i = 0,
                                        o && (s = [2 & s[0], o.value]),
                                        s[0]) {
                                        case 0:
                                        case 1:
                                            o = s;
                                            break;
                                        case 4:
                                            return r.label++,
                                            {
                                                value: s[1],
                                                done: !1
                                            };
                                        case 5:
                                            r.label++,
                                            i = s[1],
                                            s = [0];
                                            continue;
                                        case 7:
                                            s = r.ops.pop(),
                                            r.trys.pop();
                                            continue;
                                        default:
                                            if (!((o = (o = r.trys).length > 0 && o[o.length - 1]) || 6 !== s[0] && 2 !== s[0])) {
                                                r = 0;
                                                continue
                                            }
                                            if (3 === s[0] && (!o || s[1] > o[0] && s[1] < o[3])) {
                                                r.label = s[1];
                                                break
                                            }
                                            if (6 === s[0] && r.label < o[1]) {
                                                r.label = o[1],
                                                o = s;
                                                break
                                            }
                                            if (o && r.label < o[2]) {
                                                r.label = o[2],
                                                r.ops.push(s);
                                                break
                                            }
                                            o[2] && r.ops.pop(),
                                            r.trys.pop();
                                            continue
                                        }
                                        s = t.call(e, r)
                                    } catch (e) {
                                        s = [6, e],
                                        i = 0
                                    } finally {
                                        n = o = 0
                                    }
                                if (5 & s[0])
                                    throw s[1];
                                return {
                                    value: s[0] ? s[1] : void 0,
                                    done: !0
                                }
                            }([s, a])
                        }
                    }
                }(this, (function(e) {
                    switch (e.label) {
                    case 0:
                        return [4, Promise.all([n.e(95882), n.e(35412), n.e(29782), n.e(35534), n.e(61802), n.e(77961), n.e(34753), n.e(99386), n.e(33990)]).then(n.bind(n, 819491))];
                    case 1:
                        return [2, {
                            default: e.sent().default
                        }]
                    }
                }
                ))
            }
            ))],
            "settings/pay(/)(orders)(/)(page/:page/)(/)": ["settings", function() {
                return Promise.all([n.e(56740), n.e(95882), n.e(39877), n.e(39830), n.e(86967), n.e(85956), n.e(68105), n.e(55108)]).then(n.bind(n, 391329))
            }
            , {
                params: {
                    orders: !0
                }
            }],
            "settings/pay(/)": ["settings", function() {
                return (0,
                i.isFeatureAvailable)("billing_global") ? Promise.all([n.e(95882), n.e(31434)]).then(n.bind(n, 331434)) : Promise.all([n.e(56740), n.e(95882), n.e(39877), n.e(39830), n.e(86967), n.e(85956), n.e(68105), n.e(55108)]).then(n.bind(n, 391329))
            }
            ],
            "help(/)": ["help", function() {
                return Promise.all([n.e(95882), n.e(92738), n.e(84732), n.e(28099), n.e(87684), n.e(3326), n.e(90903), n.e(30763)]).then(n.bind(n, 607971))
            }
            ],
            "catalogs(/)(:id)(/)(page/:page/)(/)": ["catalogs", function() {
                return Promise.all([n.e(76012), n.e(20983), n.e(56740), n.e(95882), n.e(21581), n.e(79985), n.e(40182), n.e(39877), n.e(882), n.e(39830), n.e(86967), n.e(85956), n.e(59663), n.e(20022), n.e(58551), n.e(68105), n.e(94482), n.e(13749), n.e(53081), n.e(7618), n.e(98566), n.e(58008), n.e(37972), n.e(96107), n.e(54092), n.e(3904), n.e(89054), n.e(82501), n.e(17370), n.e(1039)]).then(n.bind(n, 901620))
            }
            ],
            "catalogs/(:id)/detail/(:element_id)(/)": ["catalogs", function() {
                return Promise.all([n.e(76012), n.e(20983), n.e(56740), n.e(95882), n.e(21581), n.e(79985), n.e(40182), n.e(39877), n.e(882), n.e(39830), n.e(86967), n.e(85956), n.e(59663), n.e(20022), n.e(58551), n.e(68105), n.e(94482), n.e(13749), n.e(53081), n.e(7618), n.e(98566), n.e(58008), n.e(37972), n.e(96107), n.e(54092), n.e(3904), n.e(89054), n.e(82501), n.e(17370), n.e(1039)]).then(n.bind(n, 901620))
            }
            ],
            "amo-market/ads-manager(/)": ["widgetsSettings", function() {
                return Promise.all([n.e(56740), n.e(39877), n.e(39830), n.e(86967), n.e(85956), n.e(24487)]).then(n.bind(n, 805738))
            }
            ],
            "_support/:entity/list(/)(page/:page)(/)": ["support", function() {
                return Promise.all([n.e(28228), n.e(48672)]).then(n.bind(n, 628228))
            }
            ],
            "_support/:entity/detail/:id(/)": ["support", function() {
                return Promise.all([n.e(98551), n.e(37340), n.e(42281)]).then(n.bind(n, 637340))
            }
            ],
            "_support/unban_account(/)(page/:page)(/)": ["support", function() {
                return Promise.all([n.e(28228), n.e(48672)]).then(n.bind(n, 628228))
            }
            , {
                params: {
                    entity: "unban_account"
                }
            }],
            "_support/search_wbs(/)(page/:page)(/)": ["support", function() {
                return Promise.all([n.e(28228), n.e(48672)]).then(n.bind(n, 628228))
            }
            , {
                params: {
                    entity: "search_wbs"
                }
            }],
            "_support/accounts/detail/:id(/)(page/:page)(/)": ["support", function() {
                return Promise.all([n.e(98551), n.e(37340), n.e(65098)]).then(n.bind(n, 735900))
            }
            , {
                params: {
                    entity: "accounts"
                }
            }],
            "_support/users/detail/:id(/)(page/:page)(/)": ["support", function() {
                return n.e(87103).then(n.bind(n, 287103))
            }
            , {
                params: {
                    entity: "users"
                }
            }],
            "_support/trial_coupons/detail/:id(/)(page/:page)(/)": ["support", function() {
                return n.e(55198).then(n.bind(n, 155198))
            }
            , {
                params: {
                    entity: "trial_coupons"
                }
            }],
            "_support/trial_coupons/add(/)": ["support", function() {
                return n.e(55198).then(n.bind(n, 155198))
            }
            , {
                params: {
                    entity: "trial_coupons"
                }
            }],
            "_support/test_mail_connection(/)": ["support", function() {
                return Promise.all([n.e(98551), n.e(37340), n.e(66219)]).then(n.bind(n, 544850))
            }
            ],
            "_support/authorization(/)": ["support", function() {
                return n.e(1938).then(n.bind(n, 301938))
            }
            ],
            "_support/orders/create(/)": ["support", function() {
                return n.e(71664).then(n.bind(n, 771664))
            }
            ],
            "_support/orders/list(/)": ["support", function() {
                return Promise.all([n.e(76012), n.e(20983), n.e(95882), n.e(21581), n.e(79985), n.e(40182), n.e(882), n.e(59663), n.e(20022), n.e(28228), n.e(28240)]).then(n.bind(n, 174546))
            }
            ],
            "_support/amomail/:accountId/mailbox/:id(/)": ["support", function() {
                return Promise.all([n.e(98551), n.e(37340), n.e(93617)]).then(n.bind(n, 937685))
            }
            ],
            "_support/calls_info(/)": ["support", function() {
                return n.e(81978).then(n.bind(n, 481978))
            }
            ],
            "_support/airewriter_global(/)": ["support", function() {
                return n.e(2367).then(n.bind(n, 702367))
            }
            ],
            "_support/doubles_properties(/)": ["support", function() {
                return n.e(9654).then(n.bind(n, 909654))
            }
            ],
            "_sales/accounts(/)(:page)": ["support", function() {
                return n.e(21764).then(n.bind(n, 521764))
            }
            ],
            "_support/employee_control(/)": ["support", function() {
                return n.e(40855).then(n.bind(n, 440855))
            }
            ],
            "_support/widgets/design_exceptions(/)(page/:page)(/)(:widget_code)(/)": ["support", function() {
                return n.e(23302).then(n.bind(n, 923302))
            }
            ],
            "_support/widgets/recommended(/)(page/:page)(/)(:widget_code)(/)": ["support", function() {
                return n.e(24897).then(n.bind(n, 524897))
            }
            ],
            "_support/blocked_registration_emails(/)(page/:page)(/)": ["support", function() {
                return n.e(24229).then(n.bind(n, 324229))
            }
            ],
            "_support/chat_channels(/)": ["support", function() {
                return n.e(16434).then(n.bind(n, 716434))
            }
            ],
            "_support/integrations_banners/detail/:id(/)": ["support", function() {
                return n.e(100).then(n.bind(n, 300100))
            }
            ],
            "_support/users/statuses/monitoring": ["support", function() {
                return n.e(33772).then(n.bind(n, 533772))
            }
            ],
            "_support/widgets_moderation/detail/:client_uuid/:version_id(/)": ["support", function() {
                return Promise.all([n.e(35571), n.e(93093)]).then(n.bind(n, 593093))
            }
            ],
            "_support/partners/employees(/)": ["support", function() {
                return n.e(33270).then(n.bind(n, 533270))
            }
            ],
            "_support/first_line_algorithm(/)": ["support", function() {
                return n.e(85755).then(n.bind(n, 285755))
            }
            ],
            "_support/widgets/change_owner(/)": ["support", function() {
                return n.e(65883).then(n.bind(n, 965883))
            }
            ],
            "_support/triggers(/)": ["support", function() {
                return n.e(61755).then(n.bind(n, 61755))
            }
            ],
            "widget_page/(:widget_code)(/)(:item_code)(/)(:subitem_code)(/)": ["widget-page", function() {
                return n.e(5506).then(n.bind(n, 705506))
            }
            , {
                params: {
                    entity: "widget_page"
                },
                is_card: !1
            }],
            "_support/questionnaire_moderation/list(/)": ["support", function() {
                return Promise.all([n.e(35571), n.e(42207)]).then(n.bind(n, 542207))
            }
            ],
            "_support/questionnaire_moderation/detail/:questionnaire_uuid(/)": ["support", function() {
                return Promise.all([n.e(35571), n.e(30831)]).then(n.bind(n, 530831))
            }
            ],
            "_support/users/mfa(/)": ["support", function() {
                return n.e(33573).then(n.bind(n, 433573))
            }
            ],
            "_support/waca/waca_accounts_info(/)": ["support", function() {
                return n.e(52757).then(n.bind(n, 852757))
            }
            ],
            "_support/waca/waca_sandbox(/)": ["support", function() {
                return n.e(15430).then(n.bind(n, 415430))
            }
            ]
        }
    }
    ,
    479768: (e, t, n) => {
        "use strict";
        function i(e, t, n, i, o, s, r) {
            try {
                var a = e[s](r)
                  , l = a.value
            } catch (e) {
                return void n(e)
            }
            a.done ? t(l) : Promise.resolve(l).then(i, o)
        }
        function o(e) {
            return function() {
                var t = this
                  , n = arguments;
                return new Promise((function(o, s) {
                    var r = e.apply(t, n);
                    function a(e) {
                        i(r, o, s, a, l, "next", e)
                    }
                    function l(e) {
                        i(r, o, s, a, l, "throw", e)
                    }
                    a(void 0)
                }
                ))
            }
        }
        n.r(t),
        n.d(t, {
            default: () => s
        });
        const s = o((function() {
            return function(e, t) {
                var n, i, o, s, r = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0])
                            throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return s = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                },
                "function" == typeof Symbol && (s[Symbol.iterator] = function() {
                    return this
                }
                ),
                s;
                function a(s) {
                    return function(a) {
                        return function(s) {
                            if (n)
                                throw new TypeError("Generator is already executing.");
                            for (; r; )
                                try {
                                    if (n = 1,
                                    i && (o = 2 & s[0] ? i.return : s[0] ? i.throw || ((o = i.return) && o.call(i),
                                    0) : i.next) && !(o = o.call(i, s[1])).done)
                                        return o;
                                    switch (i = 0,
                                    o && (s = [2 & s[0], o.value]),
                                    s[0]) {
                                    case 0:
                                    case 1:
                                        o = s;
                                        break;
                                    case 4:
                                        return r.label++,
                                        {
                                            value: s[1],
                                            done: !1
                                        };
                                    case 5:
                                        r.label++,
                                        i = s[1],
                                        s = [0];
                                        continue;
                                    case 7:
                                        s = r.ops.pop(),
                                        r.trys.pop();
                                        continue;
                                    default:
                                        if (!((o = (o = r.trys).length > 0 && o[o.length - 1]) || 6 !== s[0] && 2 !== s[0])) {
                                            r = 0;
                                            continue
                                        }
                                        if (3 === s[0] && (!o || s[1] > o[0] && s[1] < o[3])) {
                                            r.label = s[1];
                                            break
                                        }
                                        if (6 === s[0] && r.label < o[1]) {
                                            r.label = o[1],
                                            o = s;
                                            break
                                        }
                                        if (o && r.label < o[2]) {
                                            r.label = o[2],
                                            r.ops.push(s);
                                            break
                                        }
                                        o[2] && r.ops.pop(),
                                        r.trys.pop();
                                        continue
                                    }
                                    s = t.call(e, r)
                                } catch (e) {
                                    s = [6, e],
                                    i = 0
                                } finally {
                                    n = o = 0
                                }
                            if (5 & s[0])
                                throw s[1];
                            return {
                                value: s[0] ? s[1] : void 0,
                                done: !0
                            }
                        }([s, a])
                    }
                }
            }(this, (function(e) {
                return [2, Promise.all([n.e(92738), n.e(84732), n.e(40672), n.e(57243), n.e(38953)]).then(n.bind(n, 857858))]
            }
            ))
        }
        ));
        var r = "../build/transpiled/tour/com/loader";
        window.define(r, (function() {
            var e = "undefined"
              , n = typeof t === e ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === e ? typeof module === e ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : t;
            return n && n.default || n
        }
        )),
        window.require([r])
    }
    ,
    811707: (e, t, n) => {
        "use strict";
        n.r(t),
        n.d(t, {
            getImboxOverlayWidth: () => p,
            getScrollBarWidth: () => h,
            getShortText: () => d,
            getTextWidth: () => u,
            replaceHtml: () => f,
            scrollBarWidth: () => _,
            setCursorPosition: () => c
        });
        var i = n(55188)
          , o = n.n(i)
          , s = n(661533)
          , r = n(661533)
          , a = document.createElement("canvas")
          , l = {}
          , c = function(e, t, n) {
            var i, o;
            if (i = e,
            (null != (o = s) && "undefined" != typeof Symbol && o[Symbol.hasInstance] ? o[Symbol.hasInstance](i) : i instanceof o) && (e = e.get(0)),
            e.setSelectionRange)
                t = t || 2 * (e.value || "").length,
                e.focus(),
                e.setSelectionRange(t, t);
            else if (e.getAttribute("contenteditable") && "false" !== e.contentEditable) {
                var r = document.createRange()
                  , a = window.getSelection();
                if (t = t || e.innerText.length,
                n)
                    r.setStart(n, t),
                    r.setEnd(n, t);
                else {
                    var l = function(e) {
                        var t, n;
                        for (n = 0; n < (e.childNodes || []).length; n++)
                            if (3 === e.childNodes[n].nodeType) {
                                t = e.childNodes[n];
                                break
                            }
                        return t || e
                    }(e);
                    r.setStart(l, t),
                    r.setEnd(l, t)
                }
                a.removeAllRanges(),
                a.addRange(r)
            }
        }
          , u = function(e, t) {
            var n = a.getContext("2d");
            return t = t || 'normal 15px "PT Sans"',
            n.font = t,
            n.measureText(e).width
        }
          , d = function(e, t) {
            var n = e.substring(0, e.length / 2)
              , i = e.substring(e.length / 2, e.length)
              , o = "".concat(n, "...").concat(i);
            if (u(o) <= t)
                return e;
            for (; u(o) > t; )
                n = n.substring(0, n.length - 1),
                i = i.substring(1, i.length),
                o = "".concat(n, "...").concat(i);
            return o
        }
          , h = function(e) {
            var t, n, i, o;
            return l[e] || ((t = document.createElement("div")).style.visibility = "hidden",
            t.style.width = "100px",
            document.body.appendChild(t),
            n = t.offsetWidth,
            t.style.overflow = "scroll",
            t.className = e || "",
            (o = document.createElement("div")).style.width = "100%",
            t.appendChild(o),
            i = o.offsetWidth,
            t.parentNode.removeChild(t),
            l[e] = n - i),
            l[e]
        }
          , p = function() {
            var e = r(window).width() - 65
              , t = o().propertyOf(APP.constant("user"))(["settings", "layout_width", "talks", "width"]) || 0
              , n = Math.round(e * (t / 100));
            return .3 * Math.max(n, 370)
        }
          , f = function(e, t) {
            var n = "string" == typeof e ? document.getElementById(e) : e
              , i = n.cloneNode(!1);
            i.innerHTML = t;
            var o = n.querySelector("#search-options")
              , s = i.querySelector("#search-options");
            return s && o && o.parentNode.classList.contains("list-top-search-options-showed") && window.location.search && (s.parentNode.querySelector("#search_clear_button").style.display = "block",
            s.parentNode.classList.add("list-top-search-options-showed"),
            s.parentNode.replaceChild(o, s)),
            n.parentNode.replaceChild(i, n),
            i
        }
          , _ = h() || 0
          , m = "../build/transpiled/utils/dom_ops";
        window.define(m, (function() {
            var e = "undefined"
              , n = typeof t === e ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === e ? typeof module === e ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : t;
            return n && n.default || n
        }
        )),
        window.require([m])
    }
    ,
    974839: function(e, t, n) {
        var i, o, s, r = n(55188);
        (function() {
            var a, l = {}.hasOwnProperty, c = function(e, t) {
                for (var n in t)
                    l.call(t, n) && (e[n] = t[n]);
                function i() {
                    this.constructor = e
                }
                return i.prototype = t.prototype,
                e.prototype = new i,
                e.__super__ = t.prototype,
                e
            };
            a = function(e, t) {
                return {
                    Model: function(e) {
                        function n(e, i) {
                            n.__super__.constructor.call(this, this.parse(t.clone(e)), i)
                        }
                        return c(n, e),
                        n.prototype.parse = function(e) {
                            return null == e && (e = {}),
                            this.links = e._links || {},
                            delete e._links,
                            this.embedded = e._embedded || {},
                            delete e._embedded,
                            e
                        }
                        ,
                        n.prototype.url = function() {
                            var e, t;
                            return (null != (e = this.links) && null != (t = e.self) ? t.href : void 0) || n.__super__.url.call(this)
                        }
                        ,
                        n.prototype.isNew = function() {
                            var e;
                            return !(null != (e = this.links) ? e.self : void 0)
                        }
                        ,
                        n
                    }(e.Model),
                    Collection: function(e) {
                        function n(e, i) {
                            t.isArray(e) || (e = this.parse(t.clone(e))),
                            n.__super__.constructor.call(this, e, i)
                        }
                        return c(n, e),
                        n.prototype.parse = function(e) {
                            return null == e && (e = {}),
                            this.links = e._links || {},
                            delete e._links,
                            this.embedded = e._embedded || {},
                            delete e._embedded,
                            this.attributes = e || {},
                            null != this.itemRel ? this.embedded[this.itemRel] : this.embedded.items
                        }
                        ,
                        n.prototype.reset = function(e, i) {
                            return null == i && (i = {}),
                            t.isArray(e) || (e = this.parse(t.clone(e))),
                            i.parse = !1,
                            n.__super__.reset.call(this, e, i)
                        }
                        ,
                        n.prototype.url = function() {
                            var e, t;
                            return null != (e = this.links) && null != (t = e.self) ? t.href : void 0
                        }
                        ,
                        n
                    }(e.Collection)
                }
            }
            ,
            (null !== n.amdD ? n.amdO : void 0) ? (o = [n(871082), n(55188)],
            void 0 === (s = "function" == typeof (i = a) ? i.apply(t, o) : i) || (e.exports = s)) : this.HAL = a(Backbone, r)
        }
        ).call(this)
    },
    241817: (e, t, n) => {
        var i, o;
        i = [n(661533)],
        void 0 === (o = function(e) {
            !function(e, t, n, i) {
                "use strict";
                var o = "intlTelInput"
                  , s = 1
                  , r = {
                    autoFormat: !0,
                    autoHideDialCode: !0,
                    defaultCountry: "",
                    ipinfoToken: "",
                    nationalMode: !1,
                    numberType: "MOBILE",
                    onlyCountries: [],
                    preferredCountries: ["us", "gb"],
                    responsiveDropdown: !1,
                    utilsScript: ""
                }
                  , a = 38
                  , l = 40
                  , c = 13
                  , u = 27
                  , d = 43
                  , h = 65
                  , p = 90
                  , f = 48
                  , _ = 57
                  , m = 32
                  , g = 8
                  , v = 46
                  , y = 17
                  , b = 91
                  , w = 224
                  , k = !1
                  , P = !0;
                function C(t, n) {
                    this.element = t,
                    this.options = e.extend({}, r, n),
                    this._defaults = r,
                    this.ns = "." + o + s++,
                    this.isGoodBrowser = Boolean(t.setSelectionRange),
                    this.hadInitialPlaceholder = Boolean(e(t).attr("placeholder")),
                    this._name = o,
                    this.init()
                }
                e(t).load((function() {
                    k = !0
                }
                )),
                C.prototype = {
                    init: function() {
                        var t = this;
                        if ("auto" == this.options.defaultCountry) {
                            this.options.defaultCountry = "";
                            var n = "//ipinfo.io";
                            this.options.ipinfoToken && (n += "?token=" + this.options.ipinfoToken),
                            e.get(n, (function(e) {
                                e && e.country && (t.options.defaultCountry = e.country.toLowerCase())
                            }
                            ), "jsonp").always((function() {
                                t._ready()
                            }
                            ))
                        } else
                            this._ready()
                    },
                    _ready: function() {
                        this.options.nationalMode && (this.options.autoHideDialCode = !1),
                        navigator.userAgent.match(/IEMobile/i) && (this.options.autoFormat = !1),
                        t.innerWidth < 500 && (this.options.responsiveDropdown = !0),
                        this._processCountryData(),
                        this._generateMarkup(),
                        this._setInitialState(),
                        this._initListeners()
                    },
                    _processCountryData: function() {
                        this._setInstanceCountryData(),
                        this._setPreferredCountries()
                    },
                    _addCountryCode: function(e, t, n) {
                        t in this.countryCodes || (this.countryCodes[t] = []);
                        var i = n || 0;
                        this.countryCodes[t][i] = e
                    },
                    _setInstanceCountryData: function() {
                        var t;
                        if (this.options.onlyCountries.length)
                            for (this.countries = [],
                            t = 0; t < x.length; t++)
                                -1 != e.inArray(x[t].iso2, this.options.onlyCountries) && this.countries.push(x[t]);
                        else
                            this.countries = x;
                        for (this.countryCodes = {},
                        t = 0; t < this.countries.length; t++) {
                            var n = this.countries[t];
                            if (this._addCountryCode(n.iso2, n.dialCode, n.priority),
                            n.areaCodes)
                                for (var i = 0; i < n.areaCodes.length; i++)
                                    this._addCountryCode(n.iso2, n.dialCode + n.areaCodes[i])
                        }
                    },
                    _setPreferredCountries: function() {
                        this.preferredCountries = [];
                        for (var e = 0; e < this.options.preferredCountries.length; e++) {
                            var t = this.options.preferredCountries[e]
                              , n = this._getCountryData(t, !1, !0);
                            n && this.preferredCountries.push(n)
                        }
                    },
                    _generateMarkup: function() {
                        this.telInput = e(this.element),
                        this.telInput.wrap(e("<div>", {
                            class: "intl-tel-input"
                        }));
                        var t = e("<div>", {
                            class: "flag-dropdown"
                        }).insertAfter(this.telInput)
                          , n = e("<div>", {
                            class: "selected-flag"
                        }).appendTo(t);
                        this.selectedFlagInner = e("<div>", {
                            class: "flag"
                        }).appendTo(n),
                        e("<div>", {
                            class: "arrow"
                        }).appendTo(this.selectedFlagInner),
                        this.countryList = e("<ul>", {
                            class: "country-list v-hide"
                        }).appendTo(t),
                        this.preferredCountries.length && (this._appendListItems(this.preferredCountries, "preferred"),
                        e("<li>", {
                            class: "divider"
                        }).appendTo(this.countryList)),
                        this._appendListItems(this.countries, ""),
                        this.dropdownHeight = this.countryList.outerHeight(),
                        this.countryList.removeClass("v-hide").addClass("hide"),
                        this.options.responsiveDropdown && this.countryList.outerWidth(this.telInput.outerWidth()),
                        this.countryListItems = this.countryList.children(".country")
                    },
                    _appendListItems: function(e, t) {
                        for (var n = "", i = 0; i < e.length; i++) {
                            var o = e[i];
                            n += "<li class='country " + t + "' data-dial-code='" + o.dialCode + "' data-country-code='" + o.iso2 + "'>",
                            n += "<div class='flag " + o.iso2 + "'></div>",
                            n += "<span class='country-name'>" + o.name + "</span>",
                            n += "<span class='dial-code'>+" + o.dialCode + "</span>",
                            n += "</li>"
                        }
                        this.countryList.append(n)
                    },
                    _setInitialState: function() {
                        var e, t = this.telInput.val();
                        this._getDialCode(t) ? this._updateFlagFromNumber(t) : (e = this.options.defaultCountry ? this._getCountryData(this.options.defaultCountry, !1, !1) : this.preferredCountries.length ? this.preferredCountries[0] : this.countries[0],
                        this._selectFlag(e.iso2),
                        t || this._updateDialCode(e.dialCode, !1)),
                        t && this._updateVal(t, !1)
                    },
                    _initListeners: function() {
                        var n = this;
                        this._initKeyListeners(),
                        (this.options.autoHideDialCode || this.options.autoFormat) && this._initFocusListeners();
                        var i = this.telInput.closest("label");
                        i.length && i.on("click" + this.ns, (function(e) {
                            n.countryList.hasClass("hide") ? n.telInput.focus() : e.preventDefault()
                        }
                        )),
                        this.selectedFlagInner.parent().on("click" + this.ns, (function(e) {
                            n.countryList.hasClass("hide") && !n.telInput.prop("disabled") && n._showDropdown()
                        }
                        )),
                        this.options.utilsScript && (k ? this.loadUtils() : e(t).load((function() {
                            n.loadUtils()
                        }
                        )))
                    },
                    _initKeyListeners: function() {
                        var e = this;
                        this.options.autoFormat && (e.telInput.on("change", (function() {
                            var t = e.telInput.val();
                            e._updateFlagFromNumber(t)
                        }
                        )),
                        this.telInput.on("keypress" + this.ns, (function(n) {
                            if (n.which >= m && !n.metaKey && t.intlTelInputUtils) {
                                n.preventDefault();
                                var i = n.which >= f && n.which <= _ || n.which == d
                                  , o = e.telInput[0]
                                  , s = e.isGoodBrowser && o.selectionStart == o.selectionEnd
                                  , r = e.telInput.attr("maxlength");
                                if ((!r || e.telInput.val().length < r) && (i || s)) {
                                    var a = i ? String.fromCharCode(n.which) : null;
                                    e._handleInputKey(a, !0)
                                }
                                i || e.telInput.trigger("invalidkey")
                            }
                        }
                        ))),
                        this.telInput.on("keyup" + this.ns, (function(n) {
                            if (n.which == c)
                                ;
                            else if (e.options.autoFormat && t.intlTelInputUtils) {
                                var i = n.which == y || n.which == b || n.which == w
                                  , o = e.telInput[0]
                                  , s = e.isGoodBrowser && o.selectionStart == o.selectionEnd
                                  , r = e.isGoodBrowser && o.selectionStart == e.telInput.val().length;
                                if ((n.which == v && !r || n.which == g || i && s) && e._handleInputKey(null, i && r),
                                !e.options.nationalMode) {
                                    var a = e.telInput.val();
                                    if ("+" != a.substr(0, 1)) {
                                        var l = e.isGoodBrowser ? o.selectionStart + 1 : 0;
                                        e.telInput.val("+" + a),
                                        e.isGoodBrowser && o.setSelectionRange(l, l)
                                    }
                                }
                            } else
                                e._updateFlagFromNumber(e.telInput.val())
                        }
                        ))
                    },
                    _handleInputKey: function(e, t) {
                        var n = this.telInput.val()
                          , i = null
                          , o = !1
                          , s = this.telInput[0];
                        if (this.isGoodBrowser) {
                            var r = s.selectionEnd
                              , a = n.length;
                            o = r == a,
                            e ? (n = n.substr(0, s.selectionStart) + e + n.substring(r, a),
                            o || (i = r + (n.length - a))) : i = s.selectionStart
                        } else
                            e && (n += e);
                        this.setNumber(n, t),
                        this.isGoodBrowser && (o && (i = this.telInput.val().length),
                        s.setSelectionRange(i, i))
                    },
                    _initFocusListeners: function() {
                        var e = this;
                        this.options.autoHideDialCode && this.telInput.on("mousedown" + this.ns, (function(t) {
                            e.telInput.is(":focus") || e.telInput.val() || (t.preventDefault(),
                            e.telInput.focus())
                        }
                        )),
                        this.telInput.on("focus" + this.ns, (function() {
                            var n = e.telInput.val();
                            e.telInput.data("focusVal", n),
                            e.options.autoHideDialCode && (n || (P ? e._updateVal("+" + e.selectedCountryData.dialCode, !0) : e._updateVal("+", !0),
                            e.telInput.one("keypress.plus" + e.ns, (function(n) {
                                if (n.which == d) {
                                    var i = e.options.autoFormat && t.intlTelInputUtils ? "+" : "";
                                    e.telInput.val(i)
                                }
                            }
                            )),
                            setTimeout((function() {
                                var t = e.telInput[0];
                                if (e.isGoodBrowser) {
                                    var n = e.telInput.val().length;
                                    t.setSelectionRange(n, n)
                                }
                            }
                            ))))
                        }
                        )),
                        this.telInput.on("blur" + this.ns, (function() {
                            if (e.options.autoHideDialCode) {
                                var n = e.telInput.val();
                                if ("+" == n.substr(0, 1)) {
                                    var i = e._getNumeric(n);
                                    i && e.selectedCountryData.dialCode != i || e.telInput.val("+" + i)
                                }
                                e.telInput.off("keypress.plus" + e.ns)
                            }
                            e.options.autoFormat && t.intlTelInputUtils && e.telInput.val() != e.telInput.data("focusVal") && e.telInput.trigger("change")
                        }
                        ))
                    },
                    _getNumeric: function(e) {
                        return e.replace(/\D/g, "")
                    },
                    _showDropdown: function() {
                        this._setDropdownPosition();
                        var e = this.countryList.children(".active");
                        this._highlightListItem(e),
                        this.countryList.removeClass("hide"),
                        this._scrollTo(e),
                        this._bindDropdownListeners(),
                        this.selectedFlagInner.children(".arrow").addClass("up")
                    },
                    _setDropdownPosition: function() {
                        var n = this.telInput.offset().top
                          , i = e(t).scrollTop()
                          , o = n + this.telInput.outerHeight() + this.dropdownHeight < i + e(t).height()
                          , s = n - this.dropdownHeight > i
                          , r = !o && s ? "-" + (this.dropdownHeight - 1) + "px" : "";
                        this.countryList.css("top", r)
                    },
                    _bindDropdownListeners: function() {
                        var t = this;
                        this.countryList.on("mouseover" + this.ns, ".country", (function(n) {
                            t._highlightListItem(e(this))
                        }
                        )),
                        this.countryList.on("click" + this.ns, ".country", (function(n) {
                            P = !0,
                            t._selectListItem(e(this))
                        }
                        ));
                        var i = !0;
                        e("html").on("click" + this.ns, (function(e) {
                            i || t._closeDropdown(),
                            i = !1
                        }
                        ));
                        var o = ""
                          , s = null;
                        e(n).on("keydown" + this.ns, (function(e) {
                            e.preventDefault(),
                            e.which == a || e.which == l ? t._handleUpDownKey(e.which) : e.which == c ? t._handleEnterKey() : e.which == u ? t._closeDropdown() : (e.which >= h && e.which <= p || e.which == m) && (s && clearTimeout(s),
                            o += String.fromCharCode(e.which),
                            t._searchForCountry(o),
                            s = setTimeout((function() {
                                o = ""
                            }
                            ), 1e3))
                        }
                        ))
                    },
                    _handleUpDownKey: function(e) {
                        var t = this.countryList.children(".highlight").first()
                          , n = e == a ? t.prev() : t.next();
                        n.length && (n.hasClass("divider") && (n = e == a ? n.prev() : n.next()),
                        this._highlightListItem(n),
                        this._scrollTo(n))
                    },
                    _handleEnterKey: function() {
                        var e = this.countryList.children(".highlight").first();
                        e.length && this._selectListItem(e)
                    },
                    _searchForCountry: function(e) {
                        for (var t = 0; t < this.countries.length; t++)
                            if (this._startsWith(this.countries[t].name, e)) {
                                var n = this.countryList.children("[data-country-code=" + this.countries[t].iso2 + "]").not(".preferred");
                                this._highlightListItem(n),
                                this._scrollTo(n, !0);
                                break
                            }
                    },
                    _startsWith: function(e, t) {
                        return e.substr(0, t.length).toUpperCase() == t
                    },
                    _updateVal: function(e, n) {
                        var i;
                        if (this.options.autoFormat && t.intlTelInputUtils) {
                            i = intlTelInputUtils.formatNumber(e, this.selectedCountryData.iso2, n);
                            var o = this.telInput.attr("maxlength");
                            o && i.length > o && (i = i.substr(0, o))
                        } else
                            i = e;
                        P = "+" != i,
                        this.telInput.val(i)
                    },
                    _updateFlagFromNumber: function(e) {
                        this.options.nationalMode && this.selectedCountryData && "1" == this.selectedCountryData.dialCode && "+" != e.substr(0, 1) && (e = "+1" + e);
                        var t = this._getDialCode(e);
                        if (t) {
                            var n = this.countryCodes[this._getNumeric(t)]
                              , i = !1;
                            if (this.selectedCountryData)
                                for (var o = 0; o < n.length; o++)
                                    n[o] == this.selectedCountryData.iso2 && (i = !0);
                            if (!i || this._isUnknownNanp(e, t))
                                for (var s = 0; s < n.length; s++)
                                    if (n[s]) {
                                        this._selectFlag(n[s]);
                                        break
                                    }
                        }
                    },
                    _isUnknownNanp: function(e, t) {
                        return "+1" == t && this._getNumeric(e).length >= 4
                    },
                    _highlightListItem: function(e) {
                        this.countryListItems.removeClass("highlight"),
                        e.addClass("highlight")
                    },
                    _getCountryData: function(e, t, n) {
                        for (var i = t ? x : this.countries, o = 0; o < i.length; o++)
                            if (i[o].iso2 == e)
                                return i[o];
                        if (n)
                            return null;
                        throw new Error("No country data for '" + e + "'")
                    },
                    _selectFlag: function(e) {
                        this.selectedCountryData = this._getCountryData(e, !1, !1),
                        this.selectedFlagInner.attr("class", "flag " + e);
                        var t = this.selectedCountryData.name + ": +" + this.selectedCountryData.dialCode;
                        this.selectedFlagInner.parent().attr("title", t),
                        this._updatePlaceholder();
                        var n = this.countryListItems.children(".flag." + e).first().parent();
                        this.countryListItems.removeClass("active"),
                        n.addClass("active")
                    },
                    _updatePlaceholder: function() {
                        if (t.intlTelInputUtils && !this.hadInitialPlaceholder) {
                            var e = this.selectedCountryData.iso2
                              , n = intlTelInputUtils.numberType[this.options.numberType || "FIXED_LINE"]
                              , i = intlTelInputUtils.getExampleNumber(e, this.options.nationalMode, n);
                            this.telInput.attr("placeholder", i)
                        }
                    },
                    _selectListItem: function(e) {
                        var t = e.attr("data-country-code");
                        this._selectFlag(t),
                        this._closeDropdown(),
                        this._updateDialCode(e.attr("data-dial-code"), !0),
                        this.telInput.trigger("change"),
                        this.telInput.focus()
                    },
                    _closeDropdown: function() {
                        this.countryList.addClass("hide"),
                        this.selectedFlagInner.children(".arrow").removeClass("up"),
                        e(n).off(this.ns),
                        e("html").off(this.ns),
                        this.countryList.off(this.ns)
                    },
                    _scrollTo: function(e, t) {
                        var n = this.countryList
                          , i = n.height()
                          , o = n.offset().top
                          , s = o + i
                          , r = e.outerHeight()
                          , a = e.offset().top
                          , l = a + r
                          , c = a - o + n.scrollTop()
                          , u = i / 2 - r / 2;
                        if (a < o)
                            t && (c -= u),
                            n.scrollTop(c);
                        else if (l > s) {
                            t && (c += u);
                            var d = i - r;
                            n.scrollTop(c - d)
                        }
                    },
                    _updateDialCode: function(t, n) {
                        var i, o = this.telInput.val();
                        if (t = "+" + t,
                        this.options.nationalMode && "+" != o.substr(0, 1))
                            i = o;
                        else if (o) {
                            var s = this._getDialCode(o);
                            i = s.length > 1 ? o.replace(s, t) : t + ("+" != o.substr(0, 1) ? e.trim(o) : "")
                        } else
                            i = !this.options.autoHideDialCode || n ? t : "";
                        this._updateVal(i, n)
                    },
                    _getDialCode: function(t) {
                        var n = "";
                        if ("+" == t.charAt(0))
                            for (var i = "", o = 0; o < t.length; o++) {
                                var s = t.charAt(o);
                                if (e.isNumeric(s) && (i += s,
                                this.countryCodes[i] && (n = t.substr(0, o + 1)),
                                4 == i.length))
                                    break
                            }
                        return n
                    },
                    destroy: function() {
                        this._closeDropdown(),
                        this.telInput.off(this.ns),
                        this.selectedFlagInner.parent().off(this.ns),
                        this.telInput.closest("label").off(this.ns),
                        this.telInput.parent().before(this.telInput).remove()
                    },
                    getCleanNumber: function() {
                        return t.intlTelInputUtils ? intlTelInputUtils.formatNumberE164(this.telInput.val(), this.selectedCountryData.iso2) : ""
                    },
                    getNumberType: function() {
                        return t.intlTelInputUtils ? intlTelInputUtils.getNumberType(this.telInput.val(), this.selectedCountryData.iso2) : -99
                    },
                    getSelectedCountryData: function() {
                        return this.selectedCountryData || {}
                    },
                    getValidationError: function() {
                        return t.intlTelInputUtils ? intlTelInputUtils.getValidationError(this.telInput.val(), this.selectedCountryData.iso2) : -99
                    },
                    isValidNumber: function() {
                        var n = e.trim(this.telInput.val())
                          , i = this.options.nationalMode ? this.selectedCountryData.iso2 : "";
                        return !(/[a-zA-Z]/.test(n) || !t.intlTelInputUtils) && intlTelInputUtils.isValidNumber(n, i)
                    },
                    loadUtils: function(n) {
                        var i = n || this.options.utilsScript;
                        !e.fn[o].loadedUtilsScript && i && (e.fn[o].loadedUtilsScript = !0,
                        i.indexOf("vendor/intl-tel-input/lib/libphonenumber/build/utils") > -1 ? t.require(["intl-tel-input-utils"], (function() {
                            e(".intl-tel-input input").intlTelInput("utilsLoaded")
                        }
                        )) : e.ajax({
                            url: i,
                            success: function() {
                                e(".intl-tel-input input").intlTelInput("utilsLoaded")
                            },
                            dataType: "script",
                            cache: !0
                        }))
                    },
                    selectCountry: function(e) {
                        this.selectedFlagInner.hasClass(e) || (this._selectFlag(e),
                        this._updateDialCode(this.selectedCountryData.dialCode, !1))
                    },
                    setNumber: function(e, t) {
                        this.options.nationalMode || "+" == e.substr(0, 1) || (e = "+" + e),
                        this._updateFlagFromNumber(e),
                        this._updateVal(e, t)
                    },
                    utilsLoaded: function() {
                        this.options.autoFormat && this.telInput.val() && this._updateVal(this.telInput.val()),
                        this._updatePlaceholder()
                    }
                },
                e.fn[o] = function(t) {
                    var n, s = arguments;
                    return t === i || "object" == typeof t ? this.each((function() {
                        e.data(this, "plugin_" + o) || e.data(this, "plugin_" + o, new C(this,t))
                    }
                    )) : "string" == typeof t && "_" !== t[0] && "init" !== t ? (this.each((function() {
                        var i, r, a = e.data(this, "plugin_" + o);
                        i = a,
                        (null != (r = C) && "undefined" != typeof Symbol && r[Symbol.hasInstance] ? r[Symbol.hasInstance](i) : i instanceof r) && "function" == typeof a[t] && (n = a[t].apply(a, Array.prototype.slice.call(s, 1))),
                        "destroy" === t && e.data(this, "plugin_" + o, null)
                    }
                    )),
                    n !== i ? n : this) : void 0
                }
                ,
                e.fn[o].getCountryData = function() {
                    return x
                }
                ,
                e.fn[o].setCountryData = function(e) {
                    x = e
                }
                ;
                for (var x = [["Afghanistan (‫افغانستان‬‎)", "af", "93"], ["Albania (Shqipëri)", "al", "355"], ["Algeria (‫الجزائر‬‎)", "dz", "213"], ["American Samoa", "as", "1684"], ["Andorra", "ad", "376"], ["Angola", "ao", "244"], ["Anguilla", "ai", "1264"], ["Antigua and Barbuda", "ag", "1268"], ["Argentina", "ar", "54"], ["Armenia (Հայաստան)", "am", "374"], ["Aruba", "aw", "297"], ["Australia", "au", "61"], ["Austria (Österreich)", "at", "43"], ["Azerbaijan (Azərbaycan)", "az", "994"], ["Bahamas", "bs", "1242"], ["Bahrain (‫البحرين‬‎)", "bh", "973"], ["Bangladesh (বাংলাদেশ)", "bd", "880"], ["Barbados", "bb", "1246"], ["Belarus (Беларусь)", "by", "375"], ["Belgium (België)", "be", "32"], ["Belize", "bz", "501"], ["Benin (Bénin)", "bj", "229"], ["Bermuda", "bm", "1441"], ["Bhutan (འབྲུག)", "bt", "975"], ["Bolivia", "bo", "591"], ["Bosnia and Herzegovina (Босна и Херцеговина)", "ba", "387"], ["Botswana", "bw", "267"], ["Brazil (Brasil)", "br", "55"], ["British Indian Ocean Territory", "io", "246"], ["British Virgin Islands", "vg", "1284"], ["Brunei", "bn", "673"], ["Bulgaria (България)", "bg", "359"], ["Burkina Faso", "bf", "226"], ["Burundi (Uburundi)", "bi", "257"], ["Cambodia (កម្ពុជា)", "kh", "855"], ["Cameroon (Cameroun)", "cm", "237"], ["Canada", "ca", "1", 1, ["204", "236", "249", "250", "289", "306", "343", "365", "387", "403", "416", "418", "431", "437", "438", "450", "506", "514", "519", "548", "579", "581", "587", "604", "613", "639", "647", "672", "705", "709", "742", "778", "780", "782", "807", "819", "825", "867", "873", "902", "905"]], ["Cape Verde (Kabu Verdi)", "cv", "238"], ["Caribbean Netherlands", "bq", "599", 1], ["Cayman Islands", "ky", "1345"], ["Central African Republic (République centrafricaine)", "cf", "236"], ["Chad (Tchad)", "td", "235"], ["Chile", "cl", "56"], ["China (中国)", "cn", "86"], ["Colombia", "co", "57"], ["Comoros (‫جزر القمر‬‎)", "km", "269"], ["Congo (DRC) (Jamhuri ya Kidemokrasia ya Kongo)", "cd", "243"], ["Congo (Republic) (Congo-Brazzaville)", "cg", "242"], ["Cook Islands", "ck", "682"], ["Costa Rica", "cr", "506"], ["Côte d’Ivoire", "ci", "225"], ["Croatia (Hrvatska)", "hr", "385"], ["Cuba", "cu", "53"], ["Curaçao", "cw", "599", 0], ["Cyprus (Κύπρος)", "cy", "357"], ["Czech Republic (Česká republika)", "cz", "420"], ["Denmark (Danmark)", "dk", "45"], ["Djibouti", "dj", "253"], ["Dominica", "dm", "1767"], ["Dominican Republic (República Dominicana)", "do", "1", 2, ["809", "829", "849"]], ["Ecuador", "ec", "593"], ["Egypt (‫مصر‬‎)", "eg", "20"], ["El Salvador", "sv", "503"], ["Equatorial Guinea (Guinea Ecuatorial)", "gq", "240"], ["Eritrea", "er", "291"], ["Estonia (Eesti)", "ee", "372"], ["Ethiopia", "et", "251"], ["Falkland Islands (Islas Malvinas)", "fk", "500"], ["Faroe Islands (Føroyar)", "fo", "298"], ["Fiji", "fj", "679"], ["Finland (Suomi)", "fi", "358"], ["France", "fr", "33"], ["French Guiana (Guyane française)", "gf", "594"], ["French Polynesia (Polynésie française)", "pf", "689"], ["Gabon", "ga", "241"], ["Gambia", "gm", "220"], ["Georgia (საქართველო)", "ge", "995"], ["Germany (Deutschland)", "de", "49"], ["Ghana (Gaana)", "gh", "233"], ["Gibraltar", "gi", "350"], ["Greece (Ελλάδα)", "gr", "30"], ["Greenland (Kalaallit Nunaat)", "gl", "299"], ["Grenada", "gd", "1473"], ["Guadeloupe", "gp", "590", 0], ["Guam", "gu", "1671"], ["Guatemala", "gt", "502"], ["Guinea (Guinée)", "gn", "224"], ["Guinea-Bissau (Guiné Bissau)", "gw", "245"], ["Guyana", "gy", "592"], ["Haiti", "ht", "509"], ["Honduras", "hn", "504"], ["Hong Kong (香港)", "hk", "852"], ["Hungary (Magyarország)", "hu", "36"], ["Iceland (Ísland)", "is", "354"], ["India (भारत)", "in", "91"], ["Indonesia", "id", "62"], ["Iran (‫ایران‬‎)", "ir", "98"], ["Iraq (‫العراق‬‎)", "iq", "964"], ["Ireland", "ie", "353"], ["Israel (‫ישראל‬‎)", "il", "972"], ["Italy (Italia)", "it", "39", 0], ["Jamaica", "jm", "1876"], ["Japan (日本)", "jp", "81"], ["Jordan (‫الأردن‬‎)", "jo", "962"], ["Kazakhstan (Казахстан)", "kz", "7", 1], ["Kenya", "ke", "254"], ["Kiribati", "ki", "686"], ["Kuwait (‫الكويت‬‎)", "kw", "965"], ["Kyrgyzstan (Кыргызстан)", "kg", "996"], ["Laos (ລາວ)", "la", "856"], ["Latvia (Latvija)", "lv", "371"], ["Lebanon (‫لبنان‬‎)", "lb", "961"], ["Lesotho", "ls", "266"], ["Liberia", "lr", "231"], ["Libya (‫ليبيا‬‎)", "ly", "218"], ["Liechtenstein", "li", "423"], ["Lithuania (Lietuva)", "lt", "370"], ["Luxembourg", "lu", "352"], ["Macau (澳門)", "mo", "853"], ["Macedonia (FYROM) (Македонија)", "mk", "389"], ["Madagascar (Madagasikara)", "mg", "261"], ["Malawi", "mw", "265"], ["Malaysia", "my", "60"], ["Maldives", "mv", "960"], ["Mali", "ml", "223"], ["Malta", "mt", "356"], ["Marshall Islands", "mh", "692"], ["Martinique", "mq", "596"], ["Mauritania (‫موريتانيا‬‎)", "mr", "222"], ["Mauritius (Moris)", "mu", "230"], ["Mexico (México)", "mx", "52"], ["Micronesia", "fm", "691"], ["Moldova (Republica Moldova)", "md", "373"], ["Monaco", "mc", "377"], ["Mongolia (Монгол)", "mn", "976"], ["Montenegro (Crna Gora)", "me", "382"], ["Montserrat", "ms", "1664"], ["Morocco (‫المغرب‬‎)", "ma", "212"], ["Mozambique (Moçambique)", "mz", "258"], ["Myanmar (Burma) (မြန်မာ)", "mm", "95"], ["Namibia (Namibië)", "na", "264"], ["Nauru", "nr", "674"], ["Nepal (नेपाल)", "np", "977"], ["Netherlands (Nederland)", "nl", "31"], ["New Caledonia (Nouvelle-Calédonie)", "nc", "687"], ["New Zealand", "nz", "64"], ["Nicaragua", "ni", "505"], ["Niger (Nijar)", "ne", "227"], ["Nigeria", "ng", "234"], ["Niue", "nu", "683"], ["Norfolk Island", "nf", "672"], ["North Korea (조선 민주주의 인민 공화국)", "kp", "850"], ["Northern Mariana Islands", "mp", "1670"], ["Norway (Norge)", "no", "47"], ["Oman (‫عُمان‬‎)", "om", "968"], ["Pakistan (‫پاکستان‬‎)", "pk", "92"], ["Palau", "pw", "680"], ["Palestine (‫فلسطين‬‎)", "ps", "970"], ["Panama (Panamá)", "pa", "507"], ["Papua New Guinea", "pg", "675"], ["Paraguay", "py", "595"], ["Peru (Perú)", "pe", "51"], ["Philippines", "ph", "63"], ["Poland (Polska)", "pl", "48"], ["Portugal", "pt", "351"], ["Puerto Rico", "pr", "1", 3, ["787", "939"]], ["Qatar (‫قطر‬‎)", "qa", "974"], ["Réunion (La Réunion)", "re", "262"], ["Romania (România)", "ro", "40"], ["Russia (Россия)", "ru", "7", 0], ["Rwanda", "rw", "250"], ["Saint Barthélemy (Saint-Barthélemy)", "bl", "590", 1], ["Saint Helena", "sh", "290"], ["Saint Kitts and Nevis", "kn", "1869"], ["Saint Lucia", "lc", "1758"], ["Saint Martin (Saint-Martin (partie française))", "mf", "590", 2], ["Saint Pierre and Miquelon (Saint-Pierre-et-Miquelon)", "pm", "508"], ["Saint Vincent and the Grenadines", "vc", "1784"], ["Samoa", "ws", "685"], ["San Marino", "sm", "378"], ["São Tomé and Príncipe (São Tomé e Príncipe)", "st", "239"], ["Saudi Arabia (‫المملكة العربية السعودية‬‎)", "sa", "966"], ["Senegal (Sénégal)", "sn", "221"], ["Serbia (Србија)", "rs", "381"], ["Seychelles", "sc", "248"], ["Sierra Leone", "sl", "232"], ["Singapore", "sg", "65"], ["Sint Maarten", "sx", "1721"], ["Slovakia (Slovensko)", "sk", "421"], ["Slovenia (Slovenija)", "si", "386"], ["Solomon Islands", "sb", "677"], ["Somalia (Soomaaliya)", "so", "252"], ["South Africa", "za", "27"], ["South Korea (대한민국)", "kr", "82"], ["South Sudan (‫جنوب السودان‬‎)", "ss", "211"], ["Spain (España)", "es", "34"], ["Sri Lanka (ශ්‍රී ලංකාව)", "lk", "94"], ["Sudan (‫السودان‬‎)", "sd", "249"], ["Suriname", "sr", "597"], ["Swaziland", "sz", "268"], ["Sweden (Sverige)", "se", "46"], ["Switzerland (Schweiz)", "ch", "41"], ["Syria (‫سوريا‬‎)", "sy", "963"], ["Taiwan (台灣)", "tw", "886"], ["Tajikistan", "tj", "992"], ["Tanzania", "tz", "255"], ["Thailand (ไทย)", "th", "66"], ["Timor-Leste", "tl", "670"], ["Togo", "tg", "228"], ["Tokelau", "tk", "690"], ["Tonga", "to", "676"], ["Trinidad and Tobago", "tt", "1868"], ["Tunisia (‫تونس‬‎)", "tn", "216"], ["Turkey (Türkiye)", "tr", "90"], ["Turkmenistan", "tm", "993"], ["Turks and Caicos Islands", "tc", "1649"], ["Tuvalu", "tv", "688"], ["U.S. Virgin Islands", "vi", "1340"], ["Uganda", "ug", "256"], ["Ukraine (Україна)", "ua", "380"], ["United Arab Emirates (‫الإمارات العربية المتحدة‬‎)", "ae", "971"], ["United Kingdom", "gb", "44"], ["United States", "us", "1", 0], ["Uruguay", "uy", "598"], ["Uzbekistan (Oʻzbekiston)", "uz", "998"], ["Vanuatu", "vu", "678"], ["Vatican City (Città del Vaticano)", "va", "39", 1], ["Venezuela", "ve", "58"], ["Vietnam (Việt Nam)", "vn", "84"], ["Wallis and Futuna", "wf", "681"], ["Yemen (‫اليمن‬‎)", "ye", "967"], ["Zambia", "zm", "260"], ["Zimbabwe", "zw", "263"]], E = 0; E < x.length; E++) {
                    var S = x[E];
                    x[E] = {
                        name: S[0],
                        iso2: S[1],
                        dialCode: S[2],
                        priority: S[3] || 0,
                        areaCodes: S[4] || null
                    }
                }
            }(e, window, document)
        }
        .apply(t, i)) || (e.exports = o);
        var s = "intl-tel-input";
        window.define(s, (function() {
            var t = "undefined"
              , n = typeof __webpack_exports__ === t ? typeof o === t ? typeof e === t ? void 0 : e.exports : o : __webpack_exports__;
            return n && n.default || n
        }
        )),
        window.require([s])
    }
    ,
    181743: (e, t, n) => {
        var i, o, s, r, a, l, c = n(661533);
        o = c || window.$,
        r = {
            className: "autosizejs",
            id: "autosizejs",
            append: "\n",
            callback: !1,
            resizeDelay: 10,
            placeholder: !0
        },
        a = ["fontFamily", "fontSize", "fontWeight", "fontStyle", "letterSpacing", "textTransform", "wordSpacing", "textIndent", "whiteSpace"],
        (l = o('<textarea tabindex="-1"/>').data("autosize", !0)[0]).style.cssText = "position:absolute; top:-999px; left:0; right:auto; bottom:auto; border:0; padding: 0; -moz-box-sizing:content-box; -webkit-box-sizing:content-box; box-sizing:content-box; word-wrap:break-word; min-height:0 !important; overflow:hidden; transition:none; -webkit-transition:none; -moz-transition:none;",
        l.style.lineHeight = "99px",
        "99px" === o(l).css("lineHeight") && a.push("lineHeight"),
        l.style.lineHeight = "",
        o.fn.autosize = function(e) {
            return this.length ? (e = o.extend({}, r, e || {}),
            l.parentNode !== document.body && o(document.body).append(l),
            this.each((function() {
                var t, n, i, r = this, c = o(r), u = 0, d = o.isFunction(e.callback), h = {
                    height: r.style.height,
                    overflow: r.style.overflow,
                    overflowY: r.style.overflowY,
                    wordWrap: r.style.wordWrap,
                    resize: r.style.resize
                }, p = c.width(), f = c.css("resize");
                function _() {
                    var e, t = window.getComputedStyle ? window.getComputedStyle(r, null) : null;
                    t ? (e = parseFloat(t.width),
                    "border-box" !== t.boxSizing && "border-box" !== t.webkitBoxSizing && "border-box" !== t.mozBoxSizing || o.each(["paddingLeft", "paddingRight", "borderLeftWidth", "borderRightWidth"], (function(n, i) {
                        e -= parseFloat(t[i])
                    }
                    ))) : e = c.width(),
                    l.style.width = Math.max(e, 0) + "px"
                }
                function m() {
                    var i, h;
                    s !== r ? function() {
                        var n = {};
                        if (s = r,
                        l.className = e.className,
                        l.id = e.id,
                        l.setAttribute("rows", r.getAttribute("rows") || 1),
                        t = parseFloat(c.css("maxHeight")),
                        o.each(a, (function(e, t) {
                            n[t] = c.css(t)
                        }
                        )),
                        o(l).css(n).attr("wrap", c.attr("wrap")),
                        _(),
                        window.chrome) {
                            var i = r.style.width;
                            r.style.width = "0px",
                            r.offsetWidth,
                            r.style.width = i
                        }
                    }() : _(),
                    !r.value && e.placeholder ? l.value = c.attr("placeholder") || "" : l.value = r.value,
                    l.value += e.append || "",
                    l.style.overflowY = r.style.overflowY,
                    h = parseFloat(r.style.height) || 0,
                    l.scrollTop = 0,
                    l.scrollTop = 9e4,
                    i = l.scrollTop,
                    t && i > t ? (r.style.overflowY = "scroll",
                    i = t) : (r.style.overflowY = "hidden",
                    i < n && (i = n)),
                    i += u,
                    Math.abs(h - i) > .01 && (r.style.height = i + "px",
                    l.className = l.className,
                    d && e.callback.call(r, r),
                    c.trigger("autosize.resized"))
                }
                function g() {
                    clearTimeout(i),
                    i = setTimeout((function() {
                        var e = c.width();
                        e !== p && (p = e,
                        m())
                    }
                    ), parseInt(e.resizeDelay, 10))
                }
                c.data("autosize") || (c.data("autosize", !0),
                e.noBoxOffset || "border-box" !== c.css("box-sizing") && "border-box" !== c.css("-moz-box-sizing") && "border-box" !== c.css("-webkit-box-sizing") || (u = c.outerHeight() - c.height()),
                n = Math.max(parseFloat(c.css("minHeight")) - u || 0, c.height()),
                c.css({
                    overflow: "hidden",
                    overflowY: "hidden",
                    wordWrap: "break-word"
                }),
                "vertical" === f ? c.css("resize", "none") : "both" === f && c.css("resize", "horizontal"),
                "onpropertychange"in r ? "oninput"in r ? c.on("input.autosize keyup.autosize", m) : c.on("propertychange.autosize", (function() {
                    "value" === event.propertyName && m()
                }
                )) : c.on("input.autosize", m),
                !1 !== e.resizeDelay && o(window).on("resize.autosize", g),
                c.on("autosize.resize", m),
                c.on("autosize.resizeIncludeStyle", (function() {
                    s = null,
                    m()
                }
                )),
                c.on("autosize.destroy", (function() {
                    s = null,
                    clearTimeout(i),
                    o(window).off("resize", g),
                    c.off("autosize").off(".autosize").css(h).removeData("autosize")
                }
                )),
                m())
            }
            ))) : this
        }
        ,
        o.fn.autosizeInput = function(e) {
            return e = o.extend({
                maxWidth: 1e3,
                minWidth: 0,
                comfortZone: 5,
                appendValue: function() {}
            }, e),
            this.filter('input:text, input[type="number"]').each((function() {
                var t = e.minWidth
                  , n = ""
                  , i = o(this)
                  , s = o("<tester/>").css({
                    position: "absolute",
                    top: -9999,
                    left: -9999,
                    width: "auto",
                    fontSize: i.css("fontSize"),
                    fontFamily: "Roboto" === i.css("fontFamily") ? "Arial" : i.css("fontFamily"),
                    fontWeight: i.css("fontWeight"),
                    fontStyle: i.css("fontStyle"),
                    letterSpacing: i.css("letterSpacing"),
                    textTransform: i.css("textTransform"),
                    whiteSpace: "pre"
                })
                  , r = function(o) {
                    var r, a, l;
                    n === (n = i.val()) && n && !1 !== o || (n ? n += e.appendValue.call(i.get(0)) || "" : n = i.attr("placeholder") || "",
                    r = n.replace(/&/g, "&amp;").replace(/\s/g, " ").replace(/</g, "&lt;").replace(/>/g, "&gt;"),
                    s.html(r),
                    ((l = (a = s.width()) + e.comfortZone >= t ? a + e.comfortZone : t) < i.width() && l >= t || l > t) && i.width(l))
                };
                s.insertAfter(i),
                o(this).on("autosize:important", r.bind(this, !1)).on("autosize", r).on("input", r).on("autosize.destroy", (function() {
                    s.remove(),
                    o(this).off("autosize:important").off("autosize", r).off("input", r)
                }
                )),
                r()
            }
            )),
            this
        }
        ,
        void 0 === (i = function() {}
        .call(t, n, t, e)) || (e.exports = i);
        var u = "vendor/jquery-plugins/jquery.autosize";
        window.define(u, (function() {
            var t = "undefined"
              , n = typeof __webpack_exports__ === t ? typeof i === t ? typeof e === t ? void 0 : e.exports : i : __webpack_exports__;
            return n && n.default || n
        }
        )),
        window.require([u])
    }
    ,
    200123: (e, t, n) => {
        var i, o, s = n(661533);
        (o = s || window.Zepto).event.special.swipe = {
            setup: function() {
                o(this).on("touchstart", o.event.special.swipe.handler)
            },
            teardown: function() {
                o(this).off("touchstart", o.event.special.swipe.handler)
            },
            handler: function(e) {
                var t, n, i = [].slice.call(arguments, 1), s = e.originalEvent.touches, r = 0, a = 0, l = this;
                function c() {
                    l.removeEventListener("touchmove", u),
                    l.removeEventListener("touchend", c),
                    t = n = null
                }
                function u(s) {
                    var u = t - s.touches[0].pageX
                      , d = n - s.touches[0].pageY
                      , h = Math.abs(u) >= 20
                      , p = Math.abs(d) >= 20;
                    return (h || p) && (c(),
                    r = h ? u > 0 ? -1 : 1 : 0,
                    a = p ? d > 0 ? 1 : -1 : 0),
                    0 !== r && o(l).hasClass("js-swipe-prevent-x") && s.preventDefault(),
                    e.type = "swipe",
                    i.unshift(e, r, a, s.touches.length),
                    (o.event.dispatch || o.event.handle).apply(l, i)
                }
                e = o.event.fix(e),
                1 == s.length && (t = s[0].pageX,
                n = s[0].pageY,
                this.addEventListener("touchmove", u, !1),
                this.addEventListener("touchend", c, !1))
            }
        },
        void 0 === (i = function() {}
        .call(t, n, t, e)) || (e.exports = i);
        var r = "vendor/jquery-plugins/jquery.swipe";
        window.define(r, (function() {
            var t = "undefined"
              , n = typeof __webpack_exports__ === t ? typeof i === t ? typeof e === t ? void 0 : e.exports : i : __webpack_exports__;
            return n && n.default || n
        }
        )),
        window.require([r])
    }
    ,
    145027: (e, t, n) => {
        var i;
        void 0 === (i = function(e) {
            var t = n(661533);
            return n(528803),
            n(462106),
            n(963880),
            n(659642),
            n(772362),
            n(517430),
            t
        }
        .call(t, n, t, e)) || (e.exports = i)
    }
    ,
    695763: (e, t, n) => {
        !function() {
            "use strict";
            var e, t, i = n(161320);
            switch (APP.lang_id) {
            case "ru":
                return function() {
                    function e(e, t, n) {
                        var i, o;
                        return "m" === n ? t ? "минута" : "минуту" : e + " " + (i = +e,
                        o = {
                            mm: "минута_минуты_минут",
                            hh: "час_часа_часов",
                            dd: "день_дня_дней",
                            MM: "месяц_месяца_месяцев",
                            yy: "год_года_лет"
                        }[n].split("_"),
                        i % 10 == 1 && i % 100 != 11 ? o[0] : i % 10 >= 2 && i % 10 <= 4 && (i % 100 < 10 || i % 100 >= 20) ? o[1] : o[2])
                    }
                    i.locale("ru", {
                        months: function(e, t) {
                            return {
                                nominative: "Январь_Февраль_Март_Апрель_Май_Июнь_Июль_Август_Сентябрь_Октябрь_Ноябрь_Декабрь".split("_"),
                                accusative: "января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря".split("_")
                            }[/D[oD]? *MMMM?/.test(t) ? "accusative" : "nominative"][e.month()]
                        },
                        monthsShort: "янв_фев_мар_апр_май_июн_июл_авг_сен_окт_ноя_дек".split("_"),
                        weekdays: function(e, t) {
                            return {
                                nominative: "Воскресенье_Понедельник_Вторник_Среда_Четверг_Пятница_Суббота".split("_"),
                                accusative: "воскресенье_понедельник_вторник_среду_четверг_пятницу_субботу".split("_")
                            }[/\[ ?[Вв] ?(?:прошлую|следующую)? ?\] ?dddd/.test(t) ? "accusative" : "nominative"][e.day()]
                        },
                        weekdaysShort: "Вск_Пнд_Втр_Срд_Чтв_Птн_Сбт".split("_"),
                        weekdaysMin: "Вс_Пн_Вт_Ср_Чт_Пт_Сб".split("_"),
                        previousMonth: "Предыдущий месяц",
                        nextMonth: "Следующий месяц",
                        longDateFormat: {
                            LT: APP.system.format.date.time,
                            L: "DD.MM.YYYY",
                            LL: "D MMMM YYYY г.",
                            LLL: "D MMMM YYYY г., LT",
                            LLLL: "dddd, D MMMM YYYY г., LT"
                        },
                        calendar: {
                            sameDay: "[Сегодня,] LT",
                            nextDay: "[Завтра,] LT",
                            lastDay: "[Вчера,] LT",
                            today: "[Сегодня]",
                            yesterday: "[Вчера]",
                            tomorrow: "[Завтра]",
                            nextWeek: APP.system.format.date.full,
                            lastWeek: APP.system.format.date.full,
                            sameElse: APP.system.format.date.full
                        },
                        relativeTime: {
                            future: "через %s",
                            past: "%s назад",
                            s: "несколько секунд",
                            m: e,
                            mm: e,
                            h: "час",
                            hh: e,
                            d: "день",
                            dd: e,
                            M: "месяц",
                            MM: e,
                            y: "год",
                            yy: e
                        },
                        ordinal: "%d.",
                        week: {
                            dow: 1,
                            doy: 7
                        }
                    })
                }();
            case "es":
                return e = "Ene._Feb._Mar._Abr._May._Jun._Jul._Ago._Sep._Oct._Nov._Dic.".split("_"),
                t = "Ene_Feb_Mar_Abr_May_Jun_Jul_Ago_Sep_Oct_Nov_Dic".split("_"),
                void i.locale("es", {
                    months: "Enero_Febrero_Marzo_Abril_Mayo_Junio_Julio_Agosto_Septiembre_Octubre_Noviembre_Diciembre".split("_"),
                    monthsShort: function(n, i) {
                        return /-MMM-/.test(i) ? t[n.month()] : e[n.month()]
                    },
                    weekdays: "Domingo_Lunes_Martes_Miércoles_Jueves_Viernes_Sábado".split("_"),
                    weekdaysShort: "Dom._Lun._Mar._Mié._Jue._Vie._Sáb.".split("_"),
                    weekdaysMin: "Do_Lu_Ma_Mi_Ju_Vi_Sá".split("_"),
                    longDateFormat: {
                        LT: APP.system.format.date.time,
                        L: "DD/MM/YYYY",
                        LL: "D [de] MMMM [del] YYYY",
                        LLL: "D [de] MMMM [del] YYYY LT",
                        LLLL: "dddd, D [de] MMMM [del] YYYY LT"
                    },
                    calendar: {
                        today: "[Hoy]",
                        yesterday: "[Ayer]",
                        tomorrow: "[Mañana]",
                        sameDay: function() {
                            return "[Hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                        },
                        nextDay: function() {
                            return "[Mañana a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                        },
                        nextWeek: APP.system.format.date.full,
                        lastDay: function() {
                            return "[Ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                        },
                        lastWeek: APP.system.format.date.full,
                        sameElse: APP.system.format.date.full
                    },
                    relativeTime: {
                        future: "en %s",
                        past: "hace %s",
                        s: "unos segundos",
                        m: "un minuto",
                        mm: "%d minutos",
                        h: "una hora",
                        hh: "%d horas",
                        d: "un día",
                        dd: "%d días",
                        M: "un mes",
                        MM: "%d meses",
                        y: "un año",
                        yy: "%d años"
                    },
                    ordinal: "%dº",
                    week: {
                        dow: 1,
                        doy: 4
                    }
                });
            case "pt":
                return function() {
                    var e = "Jan._Fev._Mar._Abr._Mai._Jun._Jul._Ago._Set._Out._Nov._Dez.".split("_")
                      , t = "Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez".split("_");
                    i.locale("pt", {
                        months: "Janeiro_Fevereiro_Março_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro".split("_"),
                        monthsShort: function(n, i) {
                            return /-MMM-/.test(i) ? t[n.month()] : e[n.month()]
                        },
                        weekdays: "Domingo_Segunda-feira_Terça-feira_Quarta-feira_Quinta-feira_Sexta-feira_Sábado".split("_"),
                        weekdaysShort: "Dom._Seg._Ter._Qua._Qui._Sex._Sáb.".split("_"),
                        weekdaysMin: "Dom_Seg_Ter_Qua_Qui_Sex_Sáb".split("_"),
                        longDateFormat: {
                            LT: APP.system.format.date.time,
                            L: "DD/MM/YYYY",
                            LL: "D [de] MMMM [de] YYYY",
                            LLL: "D [de] MMMM [de] YYYY LT",
                            LLLL: "dddd, D [de] MMMM [de] YYYY LT"
                        },
                        calendar: {
                            today: "[Hoje]",
                            tomorrow: "[Amanhã]",
                            yesterday: "[Ontem]",
                            sameDay: "[Hoje às] LT",
                            nextDay: "[Amanhã às] LT",
                            nextWeek: "dddd [às] LT",
                            lastDay: "[Ontem às] LT",
                            lastWeek: function() {
                                return 0 === this.day() || 6 === this.day() ? "[Último] dddd [às] LT" : "[Última] dddd [às] LT"
                            },
                            sameElse: "L"
                        },
                        relativeTime: {
                            future: "en %s",
                            past: "hace %s",
                            s: "unos segundos",
                            m: "un minuto",
                            mm: "%d minutos",
                            h: "una hora",
                            hh: "%d horas",
                            d: "un día",
                            dd: "%d días",
                            M: "un mes",
                            MM: "%d meses",
                            y: "un año",
                            yy: "%d años"
                        },
                        ordinal: "%dº",
                        week: {
                            dow: 1,
                            doy: 4
                        }
                    })
                }();
            case "id":
                return void i.locale("id", {
                    months: "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember".split("_"),
                    monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Agu_Sep_Okt_Nov_Des".split("_"),
                    weekdays: "Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu".split("_"),
                    weekdaysShort: "Min_Sen_Sel_Rab_Kam_Jum_Sab".split("_"),
                    weekdaysMin: "Mg_Sn_Sl_Rb_Km_Jm_Sb".split("_"),
                    longDateFormat: {
                        LT: APP.system.format.date.time,
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY [pukul] LT",
                        LLLL: "dddd, D MMMM YYYY [pukul] LT"
                    },
                    calendar: {
                        today: "[Hari ini]",
                        yesterday: "[Kemarin]",
                        tomorrow: "[Besok]",
                        sameDay: "[Hari ini,] LT",
                        lastDay: "[Kemarin,] LT",
                        nextDay: "[Besok,] LT",
                        nextWeek: APP.system.format.date.full,
                        lastWeek: APP.system.format.date.full,
                        sameElse: APP.system.format.date.full
                    },
                    relativeTime: {
                        future: "dalam %s",
                        past: "%s yang lalu",
                        s: "beberapa detik",
                        ss: "%d detik",
                        m: "semenit",
                        mm: "%d menit",
                        h: "sejam",
                        hh: "%d jam",
                        d: "sehari",
                        dd: "%d hari",
                        M: "sebulan",
                        MM: "%d bulan",
                        y: "setahun",
                        yy: "%d tahun"
                    },
                    week: {
                        dow: 1,
                        doy: 7
                    }
                });
            case "tr":
                var o = {
                    1: "'inci",
                    5: "'inci",
                    8: "'inci",
                    70: "'inci",
                    80: "'inci",
                    2: "'nci",
                    7: "'nci",
                    20: "'nci",
                    50: "'nci",
                    3: "'üncü",
                    4: "'üncü",
                    100: "'üncü",
                    6: "'ncı",
                    9: "'uncu",
                    10: "'uncu",
                    30: "'uncu",
                    60: "'ıncı",
                    90: "'ıncı"
                };
                return void i.locale("tr", {
                    months: "Ocak_Şubat_Mart_Nisan_Mayıs_Haziran_Temmuz_Ağustos_Eylül_Ekim_Kasım_Aralık".split("_"),
                    monthsShort: "Oca_Şub_Mar_Nis_May_Haz_Tem_Ağu_Eyl_Eki_Kas_Ara".split("_"),
                    weekdays: "Pazar_Pazartesi_Salı_Çarşamba_Perşembe_Cuma_Cumartesi".split("_"),
                    weekdaysShort: "Paz_Pzt_Sal_Çar_Per_Cum_Cts".split("_"),
                    weekdaysMin: "Pz_Pt_Sa_Ça_Pe_Cu_Ct".split("_"),
                    longDateFormat: {
                        LT: APP.system.format.date.time,
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY LT",
                        LLLL: "dddd, D MMMM YYYY LT"
                    },
                    calendar: {
                        today: "[Bugün]",
                        yesterday: "[Dün]",
                        tomorrow: "[Yarın]",
                        sameDay: "[Bugün,] LT",
                        lastDay: "[Dün,] LT",
                        nextDay: "[Yarın,] LT",
                        nextWeek: APP.system.format.date.full,
                        lastWeek: APP.system.format.date.full,
                        sameElse: APP.system.format.date.full
                    },
                    relativeTime: {
                        future: "%s sonra",
                        past: "%s önce",
                        s: "birkaç saniye",
                        ss: "%d saniye",
                        m: "bir dakika",
                        mm: "%d dakika",
                        h: "bir saat",
                        hh: "%d saat",
                        d: "bir gün",
                        dd: "%d gün",
                        M: "bir ay",
                        MM: "%d ay",
                        y: "bir yıl",
                        yy: "%d yıl"
                    },
                    ordinal: function(e, t) {
                        switch (t) {
                        case "d":
                        case "D":
                        case "Do":
                        case "DD":
                            return e;
                        default:
                            if (0 === e)
                                return e + "'ıncı";
                            var n = e % 10;
                            return e + (o[n] || o[e % 100 - n] || o[e >= 100 ? 100 : null])
                        }
                    },
                    week: {
                        dow: 1,
                        doy: 7
                    }
                });
            case "ch":
                return function() {
                    var e = "一月_二月_游行_四月_可能_六月_七月_八月_九月_十月_十一月_十二月".split("_")
                      , t = "一月_二月_游行_四月_可能_六月_七月_八月_九月_十月_十一月_十二月".split("_");
                    i.locale("ch", {
                        months: "一月_二月_游行_四月_可能_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
                        monthsShort: function(n, i) {
                            return /-MMM-/.test(i) ? t[n.month()] : e[n.month()]
                        },
                        weekdays: "日_一_二_三_四_五_六".split("_"),
                        weekdaysShort: "日_一_二_三_四_五_六".split("_"),
                        weekdaysMin: "日_一_二_三_四_五_六".split("_"),
                        longDateFormat: {
                            LT: APP.system.format.date.time,
                            L: "YYYY/MM/DD",
                            LL: "YYYY MMMM D",
                            LLL: "YYYY MMMM D LT",
                            LLLL: "dddd, YYYY  MMMM D LT"
                        },
                        calendar: {
                            today: "[今天]",
                            yesterday: "[昨天]",
                            tomorrow: "[明天]",
                            sameDay: "[今天,] LT",
                            nextDay: "[明天,] LT",
                            nextWeek: APP.system.format.date.full,
                            lastDay: "[昨天,] LT",
                            lastWeek: APP.system.format.date.full,
                            sameElse: APP.system.format.date.full
                        },
                        relativeTime: {
                            future: "在 %s",
                            past: "%s 前",
                            s: "几秒钟",
                            m: "分钟",
                            mm: "%d 分钟",
                            h: "小时",
                            hh: "%d 小时",
                            d: "天",
                            dd: "%d 天",
                            M: "月",
                            MM: "%d 个月",
                            y: "年",
                            yy: "%d 年份"
                        },
                        ordinal: "%d",
                        week: {
                            dow: 1,
                            doy: 4
                        }
                    })
                }();
            default:
                i.updateLocale("en", {
                    months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
                    monthsShort: "Jan_Feb_Mar_Apr_May_June_July_Aug_Sept_Oct_Nov_Dec".split("_"),
                    weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                    weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
                    weekdaysMin: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
                    previousMonth: "Previous Month",
                    nextMonth: "Next Month",
                    longDateFormat: {
                        LT: APP.system.format.date.time,
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY LT",
                        LLLL: "dddd, D MMMM YYYY LT"
                    },
                    calendar: {
                        sameDay: "[Today,] LT",
                        nextDay: "[Tomorrow,] LT",
                        lastDay: "[Yesterday,] LT",
                        today: "[Today]",
                        yesterday: "[Yesterday]",
                        tomorrow: "[Tomorrow]",
                        nextWeek: APP.system.format.date.full,
                        lastWeek: APP.system.format.date.full,
                        sameElse: APP.system.format.date.full
                    },
                    relativeTime: {
                        future: "in %s",
                        past: "%s ago",
                        s: "a few seconds",
                        m: "a minute",
                        mm: "%d minutes",
                        h: "an hour",
                        hh: "%d hours",
                        d: "a day",
                        dd: "%d days",
                        M: "a month",
                        MM: "%d months",
                        y: "a year",
                        yy: "%d years"
                    },
                    ordinal: function(e) {
                        var t = e % 10;
                        return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
                    },
                    week: {
                        dow: 0,
                        doy: 4
                    }
                })
            }
        }()
    }
    ,
    59372: (e, t, n) => {
        var i;
        !function(e) {
            "use strict";
            if (!("ontouchstart"in window))
                return !1;
            var t, n, i = [], o = {
                $these: [],
                touchstart_init: !1,
                touchmove_init: !1,
                class_name: ".custom-scroll:not(.js-nonbounce-skip)",
                event_name_space: ".custom-scroll:touch"
            }, s = function(t, n, i) {
                return !!e(i).closest(t).length
            }, r = function(e) {
                e = e.originalEvent || e,
                t = e.touches ? e.touches[0].screenY : e.screenY,
                n = e.touches ? e.touches[0].screenX : e.screenX
            }, a = function(i) {
                i.originalEvent.touches && i.originalEvent.touches.length > 1 || (~e.inArray(!0, e.map(o.$these, s, i.target)) || i.preventDefault(),
                function(i) {
                    var s = i.originalEvent.touches ? i.originalEvent.touches[0].screenY : i.originalEvent.screenY
                      , r = i.originalEvent.touches ? i.originalEvent.touches[0].screenX : i.originalEvent.screenX
                      , a = e(i.target).closest(o.class_name)[0];
                    return !(a && ("y" == a.getAttribute("data-horizontal") ? !(Math.abs(t - s) < 10) || 0 === a.scrollLeft && n <= r || a.scrollWidth - a.offsetWidth === a.scrollLeft && n >= r : 0 === a.scrollTop && t <= s || a.scrollHeight - a.offsetHeight === a.scrollTop && t >= s))
                }(i) || i.preventDefault())
            }, l = function(t) {
                o.$these.push(e(t))
            }, c = new MutationObserver((function(t) {
                t.forEach((function(t) {
                    "childList" === t.type && e.each(t.addedNodes, (function(e, t) {
                        l(t)
                    }
                    ))
                }
                ))
            }
            ));
            e.nonbounce = function(t, n) {
                var s;
                n = n || "default",
                "string" == typeof t && "destroy" === t ? (-1 !== (s = i.indexOf(n)) && i.splice(s, 1),
                i.length || (o = {
                    $these: [],
                    touchstart_init: !1,
                    touchmove_init: !1,
                    class_name: ".custom-scroll:not(.js-nonbounce-skip)",
                    event_name_space: ".custom-scroll:touch"
                },
                c.disconnect(),
                e(window).off(o.event_name_space))) : (i.push(n),
                1 === i.length && (e.extend(o, t || {}),
                e(o.class_name).each((function() {
                    l(this)
                }
                )),
                c.observe(document.body, {
                    childList: !0,
                    subtree: !0
                }),
                o.touchstart_init || (o.touchstart_init = !0,
                e(window).on("touchstart" + o.event_name_space, r)),
                o.touchmove_init || (o.touchmove_init = !0,
                e(window).on("touchmove" + o.event_name_space, a))))
            }
        }(n(661533)),
        void 0 === (i = function() {}
        .call(t, n, t, e)) || (e.exports = i);
        var o = "vendor/nonbounce";
        window.define(o, (function() {
            var t = "undefined"
              , n = typeof __webpack_exports__ === t ? typeof i === t ? typeof e === t ? void 0 : e.exports : i : __webpack_exports__;
            return n && n.default || n
        }
        )),
        window.require([o])
    }
    ,
    213882: (e, t, n) => {
        !function(e) {
            if (e.support.touch = "ontouchend"in document,
            e.support.touch && e.ui && e.ui.mouse) {
                var t, n, i, o, s, r, a = e.ui.mouse.prototype, l = a._mouseInit, c = a._mouseDestroy;
                a._touchStart = function(t) {
                    var n = this
                      , o = e(this.element);
                    if (this.is_sortable = !!o.hasClass("ui-sortable") && o.data("ui-sortable"),
                    this.is_draggable = !!o.hasClass("ui-draggable") && o.data("ui-draggable"),
                    !i) {
                        r = this.element.get(0).style[Modernizr.prefixed("transition")],
                        clearTimeout(s);
                        var a, l = e(".js-scroll-x-container"), c = d(window, l);
                        s = setTimeout((function() {
                            l.length ? (a = d(window, l),
                            Math.abs(c.y - a.y) < 3 && Math.abs(c.x - a.x) < 3 && h.call(n, t)) : h.call(n, t)
                        }
                        ), 200)
                    }
                }
                ,
                a._touchMove = function(e) {
                    if (i) {
                        var s = e.originalEvent.touches[0].screenX
                          , r = e.originalEvent.touches[0].screenY;
                        t >= s - 4 && t <= s + 4 && n >= r - 4 && n <= r + 4 ? o = !1 : (o = !0,
                        u(e, "mousemove"))
                    }
                }
                ,
                a._touchEnd = function(t) {
                    var n = !(!this.currentItem || !this.currentItem.parents("body").length) && this.currentItem;
                    clearTimeout(s),
                    i && (u(t, "mouseup"),
                    u(t, "mouseout"),
                    n || (n = this.element),
                    n && (n[0].style[Modernizr.prefixed("transition")] = r,
                    n[0].style[Modernizr.prefixed("transform")] = n[0].style[Modernizr.prefixed("transform")].replace(/,?\s?scale\(\d*.\d*\),?\s?/gi, ""),
                    r = ""),
                    o || u(t, "click"),
                    i = !1,
                    this.currentItem = e("<div/>"))
                }
                ,
                a._mouseInit = function() {
                    var t = this;
                    t.element.bind({
                        touchstart: e.proxy(t, "_touchStart"),
                        touchmove: e.proxy(t, "_touchMove"),
                        touchend: e.proxy(t, "_touchEnd")
                    }),
                    l.call(t)
                }
                ,
                a._mouseDestroy = function() {
                    var t = this;
                    t.element.unbind({
                        touchstart: e.proxy(t, "_touchStart"),
                        touchmove: e.proxy(t, "_touchMove"),
                        touchend: e.proxy(t, "_touchEnd")
                    }),
                    c.call(t)
                }
            }
            function u(e, t) {
                if (!(e.originalEvent.touches.length > 1)) {
                    e.preventDefault();
                    var n = e.originalEvent.changedTouches[0]
                      , i = document.createEvent("MouseEvents");
                    i.initMouseEvent(t, !0, !0, window, 1, n.screenX, n.screenY, n.clientX, n.clientY, !1, !1, !1, !1, 0, null),
                    e.target.dispatchEvent(i)
                }
            }
            function d(e, t) {
                return {
                    x: t.scrollLeft(),
                    y: e.pageYOffset
                }
            }
            function h(e) {
                var s;
                i = !0,
                o = !1,
                t = e.originalEvent.touches[0].screenX,
                n = e.originalEvent.touches[0].screenY,
                this.is_sortable || this.is_draggable ? (p(e),
                s = !(!this.currentItem || !this.currentItem.length) && this.currentItem,
                this.is_draggable && (s = this.element),
                this.element.addClass("ui-started"),
                s && (s.prepareTransition(),
                s[0].style[Modernizr.prefixed("transition")] = r + (r ? ", " : "") + Modernizr.prefixed("transform") + " .2s",
                s[0].style[Modernizr.prefixed("transform")] = s[0].style[Modernizr.prefixed("transform")] + (s[0].style[Modernizr.prefixed("transform")] ? ", " : "") + "scale(1.04)")) : p(e)
            }
            function p(e) {
                u(e, "mouseover"),
                u(e, "mousemove"),
                u(e, "mousedown")
            }
        }(n(661533))
    }
    ,
    679856: (e, t, n) => {
        var i;
        (function() {
            window.Modernizr = function(e, t, n) {
                function i(e) {
                    _.cssText = e
                }
                function o(e, t) {
                    return (void 0 === e ? "undefined" : (n = e) && "undefined" != typeof Symbol && n.constructor === Symbol ? "symbol" : typeof n) === t;
                    var n
                }
                function s(e, t) {
                    return !!~("" + e).indexOf(t)
                }
                function r(e, t) {
                    for (var i in e) {
                        var o = e[i];
                        if (!s(o, "-") && _[o] !== n)
                            return "pfx" != t || o
                    }
                    return !1
                }
                function a(e, t, i) {
                    for (var s in e) {
                        var r = t[e[s]];
                        if (r !== n)
                            return !1 === i ? e[s] : o(r, "function") ? r.bind(i || t) : r
                    }
                    return !1
                }
                function l(e, t, n) {
                    var i = e.charAt(0).toUpperCase() + e.slice(1)
                      , s = (e + " " + w.join(i + " ") + i).split(" ");
                    return o(t, "string") || o(t, "undefined") ? r(s, t) : a(s = (e + " " + k.join(i + " ") + i).split(" "), t, n)
                }
                var c, u, d = {}, h = t.documentElement, p = "modernizr", f = t.createElement(p), _ = f.style, m = t.createElement("input"), g = ":)", v = {}.toString, y = " -webkit- -moz- -o- -ms- ".split(" "), b = "Webkit Moz O ms", w = b.split(" "), k = b.toLowerCase().split(" "), P = "http://www.w3.org/2000/svg", C = {}, x = {}, E = {}, S = [], A = S.slice, T = function(e, n, i, o) {
                    var s, r, a, l, c = t.createElement("div"), u = t.body, d = u || t.createElement("body");
                    if (parseInt(i, 10))
                        for (; i--; )
                            (a = t.createElement("div")).id = o ? o[i] : p + (i + 1),
                            c.appendChild(a);
                    return s = ["&#173;", '<style id="s', p, '">', e, "</style>"].join(""),
                    c.id = p,
                    (u ? c : d).innerHTML += s,
                    d.appendChild(c),
                    u || (d.style.background = "",
                    d.style.overflow = "hidden",
                    l = h.style.overflow,
                    h.style.overflow = "hidden",
                    h.appendChild(d)),
                    r = n(c, e),
                    u ? c.parentNode.removeChild(c) : (d.parentNode.removeChild(d),
                    h.style.overflow = l),
                    !!r
                }, I = function() {
                    var e = {
                        select: "input",
                        change: "input",
                        submit: "form",
                        reset: "form",
                        error: "img",
                        load: "img",
                        abort: "img"
                    };
                    return function(i, s) {
                        s = s || t.createElement(e[i] || "div");
                        var r = (i = "on" + i)in s;
                        return r || (s.setAttribute || (s = t.createElement("div")),
                        s.setAttribute && s.removeAttribute && (s.setAttribute(i, ""),
                        r = o(s[i], "function"),
                        o(s[i], "undefined") || (s[i] = n),
                        s.removeAttribute(i))),
                        s = null,
                        r
                    }
                }(), D = {}.hasOwnProperty;
                for (var O in u = o(D, "undefined") || o(D.call, "undefined") ? function(e, t) {
                    return t in e && o(e.constructor.prototype[t], "undefined")
                }
                : function(e, t) {
                    return D.call(e, t)
                }
                ,
                Function.prototype.bind || (Function.prototype.bind = function(e) {
                    var t = this;
                    if ("function" != typeof t)
                        throw new TypeError;
                    var n = A.call(arguments, 1)
                      , i = function() {
                        if (this,
                        null != (a = i) && "undefined" != typeof Symbol && a[Symbol.hasInstance] ? a[Symbol.hasInstance](this) : this instanceof a) {
                            var o = function() {};
                            o.prototype = t.prototype;
                            var s = new o
                              , r = t.apply(s, n.concat(A.call(arguments)));
                            return Object(r) === r ? r : s
                        }
                        var a;
                        return t.apply(e, n.concat(A.call(arguments)))
                    };
                    return i
                }
                ),
                C.flexbox = function() {
                    return l("flexWrap")
                }
                ,
                C.flexboxlegacy = function() {
                    return l("boxDirection")
                }
                ,
                C.canvas = function() {
                    var e = t.createElement("canvas");
                    return !!e.getContext && !!e.getContext("2d")
                }
                ,
                C.canvastext = function() {
                    return !!d.canvas && !!o(t.createElement("canvas").getContext("2d").fillText, "function")
                }
                ,
                C.webgl = function() {
                    return !!e.WebGLRenderingContext
                }
                ,
                C.geolocation = function() {
                    return "geolocation"in navigator
                }
                ,
                C.postmessage = function() {
                    return !!e.postMessage
                }
                ,
                C.websqldatabase = function() {
                    return !!e.openDatabase
                }
                ,
                C.indexedDB = function() {
                    return !!l("indexedDB", e)
                }
                ,
                C.hashchange = function() {
                    return I("hashchange", e) && (t.documentMode === n || t.documentMode > 7)
                }
                ,
                C.history = function() {
                    return !!e.history && !!history.pushState
                }
                ,
                C.draganddrop = function() {
                    var e = t.createElement("div");
                    return "draggable"in e || "ondragstart"in e && "ondrop"in e
                }
                ,
                C.websockets = function() {
                    return "WebSocket"in e || "MozWebSocket"in e
                }
                ,
                C.rgba = function() {
                    return i("background-color:rgba(150,255,150,.5)"),
                    s(_.backgroundColor, "rgba")
                }
                ,
                C.hsla = function() {
                    return i("background-color:hsla(120,40%,100%,.5)"),
                    s(_.backgroundColor, "rgba") || s(_.backgroundColor, "hsla")
                }
                ,
                C.multiplebgs = function() {
                    return i("background:url(https://),url(https://),red url(https://)"),
                    /(url\s*\(.*?){3}/.test(_.background)
                }
                ,
                C.backgroundsize = function() {
                    return l("backgroundSize")
                }
                ,
                C.borderimage = function() {
                    return l("borderImage")
                }
                ,
                C.borderradius = function() {
                    return l("borderRadius")
                }
                ,
                C.boxshadow = function() {
                    return l("boxShadow")
                }
                ,
                C.textshadow = function() {
                    return "" === t.createElement("div").style.textShadow
                }
                ,
                C.opacity = function() {
                    return i(y.join("opacity:.55;") + ""),
                    /^0.55$/.test(_.opacity)
                }
                ,
                C.cssanimations = function() {
                    return l("animationName")
                }
                ,
                C.csscolumns = function() {
                    return l("columnCount")
                }
                ,
                C.cssgradients = function() {
                    var e = "background-image:";
                    return i((e + "-webkit- ".split(" ").join("gradient(linear,left top,right bottom,from(#9f9),to(white));" + e) + y.join("linear-gradient(left top,#9f9, white);" + e)).slice(0, -17)),
                    s(_.backgroundImage, "gradient")
                }
                ,
                C.cssreflections = function() {
                    return l("boxReflect")
                }
                ,
                C.csstransforms = function() {
                    return !!l("transform")
                }
                ,
                C.csstransforms3d = function() {
                    var e = !!l("perspective");
                    return e && "webkitPerspective"in h.style && T("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}", (function(t, n) {
                        e = 9 === t.offsetLeft && 3 === t.offsetHeight
                    }
                    )),
                    e
                }
                ,
                C.csstransitions = function() {
                    return l("transition")
                }
                ,
                C.fontface = function() {
                    var e;
                    return T('@font-face {font-family:"font";src:url("https://")}', (function(n, i) {
                        var o = t.getElementById("smodernizr")
                          , s = o.sheet || o.styleSheet
                          , r = s ? s.cssRules && s.cssRules[0] ? s.cssRules[0].cssText : s.cssText || "" : "";
                        e = /src/i.test(r) && 0 === r.indexOf(i.split(" ")[0])
                    }
                    )),
                    e
                }
                ,
                C.generatedcontent = function() {
                    var e;
                    return T(["#", p, "{font:0/0 a}#", p, ':after{content:"', g, '";visibility:hidden;font:3px/1 a}'].join(""), (function(t) {
                        e = t.offsetHeight >= 3
                    }
                    )),
                    e
                }
                ,
                C.video = function() {
                    var e = t.createElement("video")
                      , n = !1;
                    try {
                        (n = !!e.canPlayType) && ((n = new Boolean(n)).ogg = e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""),
                        n.h264 = e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""),
                        n.webm = e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, ""))
                    } catch (e) {}
                    return n
                }
                ,
                C.audio = function() {
                    var e = t.createElement("audio")
                      , n = !1;
                    try {
                        (n = !!e.canPlayType) && ((n = new Boolean(n)).ogg = e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
                        n.mp3 = e.canPlayType("audio/mpeg;").replace(/^no$/, ""),
                        n.wav = e.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""),
                        n.m4a = (e.canPlayType("audio/x-m4a;") || e.canPlayType("audio/aac;")).replace(/^no$/, ""))
                    } catch (e) {}
                    return n
                }
                ,
                C.localstorage = function() {
                    try {
                        return localStorage.setItem(p, p),
                        localStorage.removeItem(p),
                        !0
                    } catch (e) {
                        return !1
                    }
                }
                ,
                C.sessionstorage = function() {
                    try {
                        return sessionStorage.setItem(p, p),
                        sessionStorage.removeItem(p),
                        !0
                    } catch (e) {
                        return !1
                    }
                }
                ,
                C.webworkers = function() {
                    return !!e.Worker
                }
                ,
                C.applicationcache = function() {
                    return !!e.applicationCache
                }
                ,
                C.svg = function() {
                    return !!t.createElementNS && !!t.createElementNS(P, "svg").createSVGRect
                }
                ,
                C.inlinesvg = function() {
                    var e = t.createElement("div");
                    return e.innerHTML = "<svg/>",
                    (e.firstChild && e.firstChild.namespaceURI) == P
                }
                ,
                C.smil = function() {
                    return !!t.createElementNS && /SVGAnimate/.test(v.call(t.createElementNS(P, "animate")))
                }
                ,
                C.svgclippaths = function() {
                    return !!t.createElementNS && /SVGClipPath/.test(v.call(t.createElementNS(P, "clipPath")))
                }
                ,
                C)
                    u(C, O) && (c = O.toLowerCase(),
                    d[c] = C[O](),
                    S.push((d[c] ? "" : "no-") + c));
                return d.input || (d.input = function(n) {
                    for (var i = 0, o = n.length; i < o; i++)
                        E[n[i]] = n[i]in m;
                    return E.list && (E.list = !!t.createElement("datalist") && !!e.HTMLDataListElement),
                    E
                }("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),
                d.inputtypes = function(e) {
                    for (var i, o, s, r = 0, a = e.length; r < a; r++)
                        m.setAttribute("type", o = e[r]),
                        (i = "text" !== m.type) && (m.value = g,
                        m.style.cssText = "position:absolute;visibility:hidden;",
                        /^range$/.test(o) && m.style.WebkitAppearance !== n ? (h.appendChild(m),
                        i = (s = t.defaultView).getComputedStyle && "textfield" !== s.getComputedStyle(m, null).WebkitAppearance && 0 !== m.offsetHeight,
                        h.removeChild(m)) : /^(search|tel)$/.test(o) || (i = /^(url|email)$/.test(o) ? m.checkValidity && !1 === m.checkValidity() : m.value != g)),
                        x[e[r]] = !!i;
                    return x
                }("search tel url email datetime date month week time datetime-local number range color".split(" "))),
                d.addTest = function(e, t) {
                    if ("object" == typeof e)
                        for (var i in e)
                            u(e, i) && d.addTest(i, e[i]);
                    else {
                        if (e = e.toLowerCase(),
                        d[e] !== n)
                            return d;
                        t = "function" == typeof t ? t() : t,
                        h.className += " " + (t ? "" : "no-") + e,
                        d[e] = t
                    }
                    return d
                }
                ,
                i(""),
                f = m = null,
                function(e, t) {
                    function n() {
                        var e = f.elements;
                        return "string" == typeof e ? e.split(" ") : e
                    }
                    function i(e) {
                        var t = p[e[d]];
                        return t || (t = {},
                        h++,
                        e[d] = h,
                        p[h] = t),
                        t
                    }
                    function o(e, n, o) {
                        return n || (n = t),
                        a ? n.createElement(e) : (o || (o = i(n)),
                        (s = o.cache[e] ? o.cache[e].cloneNode() : u.test(e) ? (o.cache[e] = o.createElem(e)).cloneNode() : o.createElem(e)).canHaveChildren && !c.test(e) ? o.frag.appendChild(s) : s);
                        var s
                    }
                    function s(e) {
                        e || (e = t);
                        var s = i(e);
                        return f.shivCSS && !r && !s.hasCSS && (s.hasCSS = !!function(e, t) {
                            var n = e.createElement("p")
                              , i = e.getElementsByTagName("head")[0] || e.documentElement;
                            return n.innerHTML = "x<style>article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}</style>",
                            i.insertBefore(n.lastChild, i.firstChild)
                        }(e)),
                        a || function(e, t) {
                            t.cache || (t.cache = {},
                            t.createElem = e.createElement,
                            t.createFrag = e.createDocumentFragment,
                            t.frag = t.createFrag()),
                            e.createElement = function(n) {
                                return f.shivMethods ? o(n, e, t) : t.createElem(n)
                            }
                            ,
                            e.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + n().join().replace(/\w+/g, (function(e) {
                                return t.createElem(e),
                                t.frag.createElement(e),
                                'c("' + e + '")'
                            }
                            )) + ");return n}")(f, t.frag)
                        }(e, s),
                        e
                    }
                    var r, a, l = e.html5 || {}, c = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i, u = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i, d = "_html5shiv", h = 0, p = {};
                    !function() {
                        try {
                            var e = t.createElement("a");
                            e.innerHTML = "<xyz></xyz>",
                            r = "hidden"in e,
                            a = 1 == e.childNodes.length || function() {
                                t.createElement("a");
                                var e = t.createDocumentFragment();
                                return void 0 === e.cloneNode || void 0 === e.createDocumentFragment || void 0 === e.createElement
                            }()
                        } catch (e) {
                            r = !0,
                            a = !0
                        }
                    }();
                    var f = {
                        elements: l.elements || "abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",
                        shivCSS: !1 !== l.shivCSS,
                        supportsUnknownElements: a,
                        shivMethods: !1 !== l.shivMethods,
                        type: "default",
                        shivDocument: s,
                        createElement: o,
                        createDocumentFragment: function(e, o) {
                            if (e || (e = t),
                            a)
                                return e.createDocumentFragment();
                            for (var s = (o = o || i(e)).frag.cloneNode(), r = 0, l = n(), c = l.length; r < c; r++)
                                s.createElement(l[r]);
                            return s
                        }
                    };
                    e.html5 = f,
                    s(t)
                }(this, t),
                d._version = "2.6.2",
                d._prefixes = y,
                d._domPrefixes = k,
                d._cssomPrefixes = w,
                d.hasEvent = I,
                d.testProp = function(e) {
                    return r([e])
                }
                ,
                d.testAllProps = l,
                d.testStyles = T,
                d.prefixed = function(e, t, n) {
                    return t ? l(e, t, n) : l(e, "pfx")
                }
                ,
                h.className = h.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + " js " + S.join(" "),
                d
            }(this, this.document),
            function(e, t, n) {
                function i(e) {
                    return "[object Function]" == m.call(e)
                }
                function o(e) {
                    return "string" == typeof e
                }
                function s() {}
                function r(e) {
                    return !e || "loaded" == e || "complete" == e || "uninitialized" == e
                }
                function a() {
                    var e = g.shift();
                    v = 1,
                    e ? e.t ? f((function() {
                        ("c" == e.t ? h.injectCss : h.injectJs)(e.s, 0, e.a, e.x, e.e, 1)
                    }
                    ), 0) : (e(),
                    a()) : v = 0
                }
                function l(e, n, i, o, s, l, c) {
                    function u(t) {
                        if (!p && r(d.readyState) && (y.r = p = 1,
                        !v && a(),
                        d.onload = d.onreadystatechange = null,
                        t))
                            for (var i in "img" != e && f((function() {
                                w.removeChild(d)
                            }
                            ), 50),
                            E[n])
                                E[n].hasOwnProperty(i) && E[n][i].onload()
                    }
                    c = c || h.errorTimeout;
                    var d = t.createElement(e)
                      , p = 0
                      , m = 0
                      , y = {
                        t: i,
                        s: n,
                        e: s,
                        a: l,
                        x: c
                    };
                    1 === E[n] && (m = 1,
                    E[n] = []),
                    "object" == e ? d.data = n : (d.src = n,
                    d.type = e),
                    d.width = d.height = "0",
                    d.onerror = d.onload = d.onreadystatechange = function() {
                        u.call(this, m)
                    }
                    ,
                    g.splice(o, 0, y),
                    "img" != e && (m || 2 === E[n] ? (w.insertBefore(d, b ? null : _),
                    f(u, c)) : E[n].push(d))
                }
                function c(e, t, n, i, s) {
                    return v = 0,
                    t = t || "j",
                    o(e) ? l("c" == t ? P : k, e, t, this.i++, n, i, s) : (g.splice(this.i++, 0, e),
                    1 == g.length && a()),
                    this
                }
                function u() {
                    var e = h;
                    return e.loader = {
                        load: c,
                        i: 0
                    },
                    e
                }
                var d, h, p = t.documentElement, f = e.setTimeout, _ = t.getElementsByTagName("script")[0], m = {}.toString, g = [], v = 0, y = "MozAppearance"in p.style, b = y && !!t.createRange().compareNode, w = b ? p : _.parentNode, k = (p = e.opera && "[object Opera]" == m.call(e.opera),
                p = !!t.attachEvent && !p,
                y ? "object" : p ? "script" : "img"), P = p ? "script" : k, C = Array.isArray || function(e) {
                    return "[object Array]" == m.call(e)
                }
                , x = [], E = {}, S = {
                    timeout: function(e, t) {
                        return t.length && (e.timeout = t[0]),
                        e
                    }
                };
                h = function(e) {
                    function t(e, t, n, o, s) {
                        var r = function(e) {
                            e = e.split("!");
                            var t, n, i, o = x.length, s = e.pop(), r = e.length;
                            for (s = {
                                url: s,
                                origUrl: s,
                                prefixes: e
                            },
                            n = 0; n < r; n++)
                                i = e[n].split("="),
                                (t = S[i.shift()]) && (s = t(s, i));
                            for (n = 0; n < o; n++)
                                s = x[n](s);
                            return s
                        }(e)
                          , a = r.autoCallback;
                        r.url.split(".").pop().split("?").shift(),
                        r.bypass || (t && (t = i(t) ? t : t[e] || t[o] || t[e.split("/").pop().split("?")[0]]),
                        r.instead ? r.instead(e, t, n, o, s) : (E[r.url] ? r.noexec = !0 : E[r.url] = 1,
                        n.load(r.url, r.forceCSS || !r.forceJS && "css" == r.url.split(".").pop().split("?").shift() ? "c" : void 0, r.noexec, r.attrs, r.timeout),
                        (i(t) || i(a)) && n.load((function() {
                            u(),
                            t && t(r.origUrl, s, o),
                            a && a(r.origUrl, s, o),
                            E[r.url] = 2
                        }
                        ))))
                    }
                    function n(e, n) {
                        function r(e, s) {
                            if (e) {
                                if (o(e))
                                    s || (d = function() {
                                        var e = [].slice.call(arguments);
                                        h.apply(this, e),
                                        p()
                                    }
                                    ),
                                    t(e, d, n, 0, c);
                                else if (Object(e) === e)
                                    for (l in a = function() {
                                        var t, n = 0;
                                        for (t in e)
                                            e.hasOwnProperty(t) && n++;
                                        return n
                                    }(),
                                    e)
                                        e.hasOwnProperty(l) && (!s && !--a && (i(d) ? d = function() {
                                            var e = [].slice.call(arguments);
                                            h.apply(this, e),
                                            p()
                                        }
                                        : d[l] = function(e) {
                                            return function() {
                                                var t = [].slice.call(arguments);
                                                e && e.apply(this, t),
                                                p()
                                            }
                                        }(h[l])),
                                        t(e[l], d, n, l, c))
                            } else
                                !s && p()
                        }
                        var a, l, c = !!e.test, u = e.load || e.both, d = e.callback || s, h = d, p = e.complete || s;
                        r(c ? e.yep : e.nope, !!u),
                        u && r(u)
                    }
                    var r, a, l = this.yepnope.loader;
                    if (o(e))
                        t(e, 0, l, 0);
                    else if (C(e))
                        for (r = 0; r < e.length; r++)
                            o(a = e[r]) ? t(a, 0, l, 0) : C(a) ? h(a) : Object(a) === a && n(a, l);
                    else
                        Object(e) === e && n(e, l)
                }
                ,
                h.addPrefix = function(e, t) {
                    S[e] = t
                }
                ,
                h.addFilter = function(e) {
                    x.push(e)
                }
                ,
                h.errorTimeout = 1e4,
                null == t.readyState && t.addEventListener && (t.readyState = "loading",
                t.addEventListener("DOMContentLoaded", d = function() {
                    t.removeEventListener("DOMContentLoaded", d, 0),
                    t.readyState = "complete"
                }
                , 0)),
                e.yepnope = u(),
                e.yepnope.executeStack = a,
                e.yepnope.injectJs = function(e, n, i, o, l, c) {
                    var u, d, p = t.createElement("script");
                    for (d in o = o || h.errorTimeout,
                    p.src = e,
                    i)
                        p.setAttribute(d, i[d]);
                    n = c ? a : n || s,
                    p.onreadystatechange = p.onload = function() {
                        !u && r(p.readyState) && (u = 1,
                        n(),
                        p.onload = p.onreadystatechange = null)
                    }
                    ,
                    f((function() {
                        u || (u = 1,
                        n(1))
                    }
                    ), o),
                    l ? p.onload() : _.parentNode.insertBefore(p, _)
                }
                ,
                e.yepnope.injectCss = function(e, n, i, o, r, l) {
                    var c;
                    for (c in n = l ? a : n || s,
                    (o = t.createElement("link")).href = e,
                    o.rel = "stylesheet",
                    o.type = "text/css",
                    i)
                        o.setAttribute(c, i[c]);
                    r || (_.parentNode.insertBefore(o, _),
                    f(n, 0))
                }
            }(this, document),
            Modernizr.load = function() {
                yepnope.apply(window, [].slice.call(arguments, 0))
            }
            ,
            void 0 === (i = function() {}
            .call(t, n, t, e)) || (e.exports = i)
        }
        ).call(window);
        var o = "vendor/modernizr";
        window.define(o, (function() {
            var t = "undefined"
              , n = typeof __webpack_exports__ === t ? typeof i === t ? typeof e === t ? void 0 : e.exports : i : __webpack_exports__;
            return n && n.default || n
        }
        )),
        window.require([o])
    }
    ,
    805163: (e, t, n) => {
        "use strict";
        n.r(t),
        n.d(t, {
            default: () => p
        });
        var i = n(334254)
          , o = n.n(i)
          , s = n(661533)
          , r = n.n(s)
          , a = n(55188)
          , l = n.n(a)
          , c = n(560399);
        function u(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(e, i.key, i)
            }
        }
        function d(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        var h = 3e5
          , p = function() {
            function e() {
                !function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, e),
                d(this, "$body", void 0),
                d(this, "$sso_auth_overlay", void 0),
                d(this, "is_refresh_overlay_timer_clicked", void 0),
                d(this, "is_refresh_token_window_due_to_401_opened", void 0),
                d(this, "sso_auth_token_expiration", void 0),
                d(this, "refresh_auth_timer", void 0),
                d(this, "click_element", void 0),
                d(this, "onHandleReauth", void 0),
                d(this, "unsubscribeFromSsoRefreshTokenMessage", void 0),
                this.$body = r()("body"),
                this.$sso_auth_overlay = r()('<div style="position: absolute; width: 100%; height: 100%; padding-left: 65px; margin-left: -65px; z-index: 10000;"></div>'),
                this.is_refresh_overlay_timer_clicked = !Number(APP.constant("sso_auth_token_expiration")),
                this.is_refresh_token_window_due_to_401_opened = !1;
                var t = 1e3 * Number(APP.constant("sso_auth_token_expiration"));
                try {
                    localStorage.setItem("sso_auth_token_expiration", String(t)),
                    this.sso_auth_token_expiration = t
                } catch (e) {
                    this.sso_auth_token_expiration = t
                }
                this.handlePostMessage = l().bind(this.handlePostMessage, this),
                window.addEventListener("message", this.handlePostMessage),
                this.setExpireTokenOverlay = l().bind(this.setExpireTokenOverlay, this),
                this.updateTimestampLS = l().bind(this.updateTimestampLS, this),
                window.addEventListener("storage", this.updateTimestampLS),
                this.initVisibility(t)
            }
            var t, n;
            return t = e,
            n = [{
                key: "initVisibility",
                value: function(e) {
                    var t = this;
                    o().hidden() || this.updateRefreshAuthTimer(e),
                    o().change((function() {
                        if (o().hidden())
                            clearTimeout(t.refresh_auth_timer),
                            t.$sso_auth_overlay.remove();
                        else if (!t.is_refresh_overlay_timer_clicked)
                            try {
                                t.updateRefreshAuthTimer(Number(localStorage.getItem("sso_auth_token_expiration")))
                            } catch (e) {
                                t.updateRefreshAuthTimer(t.sso_auth_token_expiration)
                            }
                    }
                    ))
                }
            }, {
                key: "updateTimestampLS",
                value: function(e) {
                    "sso_auth_token_expiration" === e.key && (this.is_refresh_overlay_timer_clicked = !1,
                    this.is_refresh_token_window_due_to_401_opened = !1,
                    o().hidden() || (clearTimeout(this.refresh_auth_timer),
                    this.$sso_auth_overlay.remove(),
                    this.updateRefreshAuthTimer(Number(e.newValue))))
                }
            }, {
                key: "refreshSsoTokenByMessage",
                value: function(e) {
                    var t = e.data;
                    try {
                        var n = JSON.parse(t);
                        if ("SSOTokenTimestamp" !== n.message_type)
                            return;
                        if (l().isFunction(this.unsubscribeFromSsoRefreshTokenMessage) && this.unsubscribeFromSsoRefreshTokenMessage(),
                        n.success) {
                            var i, s = 1e3 * Number(n.expires_in) + Date.now();
                            this.is_refresh_token_window_due_to_401_opened && (null === (i = this.onHandleReauth) || void 0 === i || i.resolve()),
                            this.clickOnNode(this.click_element),
                            this.click_element = null;
                            try {
                                localStorage.setItem("sso_auth_token_expiration", String(s)),
                                this.sso_auth_token_expiration = s
                            } catch (e) {
                                this.sso_auth_token_expiration = s
                            }
                            this.is_refresh_overlay_timer_clicked = !1,
                            this.is_refresh_token_window_due_to_401_opened = !1,
                            o().hidden() || this.updateRefreshAuthTimer(s)
                        } else if (this.is_refresh_token_window_due_to_401_opened) {
                            var r;
                            null === (r = this.onHandleReauth) || void 0 === r || r.reject()
                        }
                    } catch (e) {}
                }
            }, {
                key: "handlePostMessage",
                value: function(e) {
                    window.location.origin === e.origin && this.refreshSsoTokenByMessage({
                        data: e.data
                    })
                }
            }, {
                key: "subscribeToSsoRefreshTokenMessage",
                value: function() {
                    var e = this;
                    window.addEventListener("message", this.handlePostMessage);
                    var t = (0,
                    c.subscribeToTabsBroadcast)("ssoMessage", (function(t) {
                        e.refreshSsoTokenByMessage({
                            data: t
                        })
                    }
                    ));
                    return function() {
                        t(),
                        window.removeEventListener("message", e.handlePostMessage)
                    }
                }
            }, {
                key: "updateRefreshAuthTimer",
                value: function(e) {
                    var t = this;
                    e - Date.now() > h ? this.refresh_auth_timer = setTimeout((function() {
                        t.setExpireTokenOverlay()
                    }
                    ), e - Date.now() - h) : this.setExpireTokenOverlay()
                }
            }, {
                key: "clickOnNode",
                value: function(e) {
                    e.click ? e.click() : this.clickOnNode(e.parentNode)
                }
            }, {
                key: "setExpireTokenOverlay",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    return this.$body.append(this.$sso_auth_overlay),
                    this.$sso_auth_overlay.on("click", l().bind(this.handleOverlayClick, this)),
                    e ? (this.is_refresh_overlay_timer_clicked = !0,
                    this.onHandleReauth = r().Deferred(),
                    this.onHandleReauth.promise()) : r().Deferred().resolve()
                }
            }, {
                key: "handleOverlayClick",
                value: function(e) {
                    var t = e.clientX
                      , n = e.clientY;
                    this.$sso_auth_overlay.remove(),
                    this.is_refresh_overlay_timer_clicked ? this.is_refresh_token_window_due_to_401_opened = !0 : this.is_refresh_overlay_timer_clicked = !0,
                    window.open("/oauth2/sso/saml/reauth/" + APP.constant("user").id) && (this.click_element = document.elementFromPoint(t, n)),
                    this.unsubscribeFromSsoRefreshTokenMessage = this.subscribeToSsoRefreshTokenMessage()
                }
            }],
            n && u(t.prototype, n),
            e
        }()
    }
    ,
    366302: (e, t, n) => {
        "use strict";
        n.r(t),
        n.d(t, {
            disallowedWidgetsRegExp: () => l
        });
        var i = n(971588)
          , o = n(577486)
          , s = ["amo_mailchimp", "mailchimp_kommo", "t57c8mssj0hf4lyfyefawyicehiykduabll1w3gt", "amo_1c_fresh", "amo_unf", "amo_tinkoffbacq", "amo_yakassa", "amo_sberbacq", "amo_alfabacq", "amo_twilio6", "mercado_libre", "linkedin_kommo", "wix_kommo", "lazada", "nuvemshop", "woocom", "shopify", "gotoconnect", "amo_rd_station", "amo_googledocsgenv2", "amo_docsgenv2_com", "paypal", "mercado_pago", "amo_dropbox", "amo_zoom", "amo_zapier", "dlzsz9jezzn3yicnojvtwddrip6anomozhrybv72", "amo_intercom", "amo_activecampaign", "amo_stripe", "amo_typeform", "lzawrqwjjathddycg8griw0lwx1bfaodscd4wfwh", "amo_jotform", "amo_ringcentral_vol2", "zenvia_voip", "nvoip", "amo_smsc", "amo_yametrika", "amo_new_moysklad", "avito_work", "amo_evotor", "amo_eskiz", "amo_lead_scraper", "amo_tranzaptorcom", "amo_asterisk", "amo_zendesk", "amo_ofd", "google_translator", "cloudtalk", "xf2tnprxxab1iax0sclmvrsbwcyazdoxywdgaj1b", "tokopedia", "api4com", "amo_aircall", i.default.WHATSAPP, i.default.WHATSAPP_WHITE, i.default.TIKTOK]
          , r = "(".concat(s.join("|"), ")")
          , a = "\\/(upl|widgets)\\/(?!(".concat(r, ")\\/).*")
          , l = new o.UnsafeRegExp("".concat("https?:\\/\\/([^.]+\\.)?([^.]+\\.)?(amocrm2?\\.(saas|ru)|kommo2?\\.com)").concat(a))
    }
    ,
    643095: (e, t, n) => {
        "use strict";
        n.r(t),
        n.d(t, {
            captureException: () => v,
            isDisallowedWidgetTraceDetected: () => _,
            sentryLogBrokenFeed: () => x,
            sentryLogErrorHandler: () => k,
            sentryLogErrorModal: () => b,
            sentryLogFailedGetAmojoToken: () => P,
            sentryLogSocketDisconnect: () => C,
            sentryLogSpaceError: () => w,
            sentryLogUserflowUpdateUserError: () => E,
            startBrowserTracingSpan: () => m
        });
        var i = n(661533)
          , o = n.n(i)
          , s = n(55188)
          , r = n.n(s)
          , a = n(189967)
          , l = n(366302);
        function c(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, i = new Array(t); n < t; n++)
                i[n] = e[n];
            return i
        }
        function u(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        function d(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {}
                  , i = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                }
                )))),
                i.forEach((function(t) {
                    u(e, t, n[t])
                }
                ))
            }
            return e
        }
        var h = []
          , p = []
          , f = {
            fatal: "fatal",
            error: "error",
            warning: "warning",
            log: "log",
            info: "info",
            debug: "debug"
        }
          , _ = function(e) {
            return l.disallowedWidgetsRegExp.test(e)
        };
        function m(e) {
            var t = e.entity;
            t && r().isFunction(window.sentryStartBrowserTracingSpan) && window.sentryStartBrowserTracingSpan({
                isPageLoad: APP.first_load,
                entity: t
            })
        }
        function g() {
            switch (!0) {
            case (0,
            a.isImboxSection)():
                return "imbox";
            case APP.isCard() && "leads" === APP.getBaseEntity():
                return "leads-card";
            case "leads-pipeline" === APP.data.current_entity:
                return "leads-pipeline";
            default:
                return "".concat(APP.getBaseEntity()).concat(APP.isCard() ? "-card" : "")
            }
        }
        function v(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
              , n = window.Sentry;
            n && navigator.onLine ? (h.length && y(),
            t.tags = r().defaults(t.tags || {}, {
                "manually-logged": !0
            }),
            n.captureException(e, t)) : h.push([e, t])
        }
        function y() {
            var e = h.slice(0);
            h = [],
            r().each(e, (function(e) {
                var t;
                v.apply(void 0, function(e) {
                    if (Array.isArray(e))
                        return c(e)
                }(t = e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"])
                        return Array.from(e)
                }(t) || function(e, t) {
                    if (e) {
                        if ("string" == typeof e)
                            return c(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        return "Object" === n && e.constructor && (n = e.constructor.name),
                        "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? c(e, t) : void 0
                    }
                }(t) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }())
            }
            ))
        }
        function b(e) {
            var t = g()
              , n = new Error("Error modal showed - ".concat(t));
            n.stack && _(n.stack) || setTimeout((function() {
                v(n, {
                    tags: {
                        "oops-error.entity": t,
                        "navigator.online": navigator.onLine,
                        "message.empty": r().isEmpty(e)
                    },
                    extra: {
                        "Error Message": e,
                        "Last Ajaxes": p
                    }
                }),
                p = []
            }
            ))
        }
        function w(e) {
            var t = e.errXHR
              , n = e.extra
              , i = void 0 === n ? {} : n;
            if (t) {
                var o = t.getResponseHeader("X-Request-Id")
                  , s = t.status
                  , r = t.responseText
                  , a = g();
                v(new Error("Space error - ".concat(a)), {
                    tags: {
                        "space-error.entity": a,
                        "navigator.online": navigator.onLine
                    },
                    extra: d({
                        "Request Id": o,
                        "Status Code": s,
                        "Response Message": r
                    }, i)
                })
            }
        }
        function k(e) {
            var t = e.errXHR
              , n = e.variant
              , i = e.extra
              , o = void 0 === i ? {} : i;
            if (t) {
                var s = t.status
                  , r = t.responseText
                  , a = t.getResponseHeader("X-Request-Id")
                  , l = g();
                v(new Error("Error handler - ".concat(l)), {
                    tags: {
                        "error-handler.entity": l,
                        "navigator.online": navigator.onLine,
                        "handle.variant": n
                    },
                    extra: d({
                        "Request Id": a,
                        "Status Code": s,
                        "Response Message": r
                    }, o)
                })
            }
        }
        function P(e) {
            var t = e.responseJSON
              , n = void 0 === t ? {} : t
              , i = e.isNetworkError
              , o = void 0 !== i && i
              , s = APP.constant("account").subdomain
              , r = (n.response || {}).error
              , a = void 0 === r ? {
                error: ""
            } : r;
            v(new Error("Failed to receive amojo token"), {
                tags: {
                    subdomain: s
                },
                extra: {
                    "Error reason": o ? "Network error" : a
                }
            })
        }
        function C() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , t = e.reason
              , n = void 0 === t ? {} : t
              , i = e.socketName
              , o = void 0 === i ? "" : i
              , s = e.code
              , r = APP.constant("account").subdomain;
            v("Socket disconnected - ".concat(o), {
                tags: {
                    subdomain: r,
                    socket: o,
                    "socket.error-code": s
                },
                extra: {
                    "Disconnected reason": JSON.stringify(n),
                    level: f.info
                }
            })
        }
        function x() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , t = g();
            v(new Error("Broken feed - ".concat(t, " ")), {
                tags: {
                    "broken-feed.entity": t
                },
                extra: {
                    Options: e
                }
            })
        }
        function E(e) {
            var t = e.responseJSON
              , n = APP.constant("account").subdomain
              , i = t.status
              , o = t.title;
            v(new Error("Userflow Update User Error"), {
                tags: {
                    subdomain: n
                },
                extra: {
                    "Response JSON": {
                        status: i,
                        title: o
                    }
                }
            })
        }
        o()(document).on("ajaxError ajaxComplete", (function(e, t, n) {
            !function(e, t) {
                var n = {
                    url: t.url,
                    requestId: e.getResponseHeader("X-Request-Id"),
                    status: e.status
                }
                  , i = e.responseText;
                r().isString(i) && i.length && r().extend(n, {
                    responseMessage: i
                }),
                p.push(n),
                p.length > 5 && p.shift()
            }(t, n)
        }
        )),
        o()(window).on("online", y)
    }
    ,
    971588: (e, t, n) => {
        "use strict";
        var i;
        n.r(t),
        n.d(t, {
            default: () => o
        }),
        function(e) {
            e.FACEBOOK = "facebook",
            e.MESSENGER = "messenger",
            e.INSTAGRAM_BUSINESS = "instagram_business",
            e.INSTAGRAM = "instagram",
            e.WHATSAPP = "amocrm_whatsapp",
            e.WHATSAPP_WHITE = "whatsapp_cloud_api",
            e.TELEGRAM = "telegram",
            e.TIKTOK = "tiktok_kommo"
        }(i || (i = {}));
        const o = i
    }
    ,
    564638: (e, t, n) => {
        "use strict";
        n.r(t),
        n.d(t, {
            WINDOW_RESIZE_THROTTLE_DELAY: () => i
        });
        var i = 10
    }
    ,
    560399: (e, t, n) => {
        "use strict";
        n.r(t),
        n.d(t, {
            subscribeToTabsBroadcast: () => i.subscribeToTabsBroadcast
        });
        var i = n(519598)
    }
    ,
    519598: (e, t, n) => {
        "use strict";
        n.r(t),
        n.d(t, {
            subscribeToTabsBroadcast: () => i.subscribeToTabsBroadcast
        });
        var i = n(764869)
    }
    ,
    764869: (e, t, n) => {
        "use strict";
        n.r(t),
        n.d(t, {
            subscribeToTabsBroadcast: () => s
        });
        var i = n(55188)
          , o = n.n(i)
          , s = function(e, t) {
            return window.BroadcastChannel && o().isFunction(window.BroadcastChannel) ? function(e, t) {
                var n = new BroadcastChannel(e);
                return n.addEventListener("message", (function(e) {
                    t(e.data)
                }
                )),
                function() {
                    n.close()
                }
            }(e, t) : function(e, t) {
                localStorage.removeItem(e);
                var n = function(n) {
                    var i;
                    n.storageArea === localStorage && n.key === e && (t(null !== (i = n.newValue) && void 0 !== i ? i : ""),
                    localStorage.removeItem(e))
                };
                return window.addEventListener("storage", n),
                function() {
                    window.removeEventListener("storage", n)
                }
            }(e, t)
        }
    }
    ,
    104737: (e, t, n) => {
        "use strict";
        n.r(t),
        n.d(t, {
            default: () => p
        });
        var i = n(661533)
          , o = n.n(i)
          , s = n(55188)
          , r = n.n(s)
          , a = n(623967)
          , l = n.n(a)
          , c = n(567952)
          , u = n.n(c);
        function d(e, t, n, i, o, s, r) {
            try {
                var a = e[s](r)
                  , l = a.value
            } catch (e) {
                return void n(e)
            }
            a.done ? t(l) : Promise.resolve(l).then(i, o)
        }
        function h(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        const p = {
            request: function(e) {
                return (t = function() {
                    var t, n, i;
                    return function(e, t) {
                        var n, i, o, s, r = {
                            label: 0,
                            sent: function() {
                                if (1 & o[0])
                                    throw o[1];
                                return o[1]
                            },
                            trys: [],
                            ops: []
                        };
                        return s = {
                            next: a(0),
                            throw: a(1),
                            return: a(2)
                        },
                        "function" == typeof Symbol && (s[Symbol.iterator] = function() {
                            return this
                        }
                        ),
                        s;
                        function a(s) {
                            return function(a) {
                                return function(s) {
                                    if (n)
                                        throw new TypeError("Generator is already executing.");
                                    for (; r; )
                                        try {
                                            if (n = 1,
                                            i && (o = 2 & s[0] ? i.return : s[0] ? i.throw || ((o = i.return) && o.call(i),
                                            0) : i.next) && !(o = o.call(i, s[1])).done)
                                                return o;
                                            switch (i = 0,
                                            o && (s = [2 & s[0], o.value]),
                                            s[0]) {
                                            case 0:
                                            case 1:
                                                o = s;
                                                break;
                                            case 4:
                                                return r.label++,
                                                {
                                                    value: s[1],
                                                    done: !1
                                                };
                                            case 5:
                                                r.label++,
                                                i = s[1],
                                                s = [0];
                                                continue;
                                            case 7:
                                                s = r.ops.pop(),
                                                r.trys.pop();
                                                continue;
                                            default:
                                                if (!((o = (o = r.trys).length > 0 && o[o.length - 1]) || 6 !== s[0] && 2 !== s[0])) {
                                                    r = 0;
                                                    continue
                                                }
                                                if (3 === s[0] && (!o || s[1] > o[0] && s[1] < o[3])) {
                                                    r.label = s[1];
                                                    break
                                                }
                                                if (6 === s[0] && r.label < o[1]) {
                                                    r.label = o[1],
                                                    o = s;
                                                    break
                                                }
                                                if (o && r.label < o[2]) {
                                                    r.label = o[2],
                                                    r.ops.push(s);
                                                    break
                                                }
                                                o[2] && r.ops.pop(),
                                                r.trys.pop();
                                                continue
                                            }
                                            s = t.call(e, r)
                                        } catch (e) {
                                            s = [6, e],
                                            i = 0
                                        } finally {
                                            n = o = 0
                                        }
                                    if (5 & s[0])
                                        throw s[1];
                                    return {
                                        value: s[0] ? s[1] : void 0,
                                        done: !0
                                    }
                                }([s, a])
                            }
                        }
                    }(this, (function(s) {
                        switch (s.label) {
                        case 0:
                            return t = function(e) {
                                var t = e.url
                                  , n = e.data
                                  , i = e.method
                                  , o = void 0 === i ? "GET" : i
                                  , s = e.contentType
                                  , a = e.processData
                                  , c = void 0 === a || a
                                  , u = e.dataType
                                  , d = e.isFormDataPayload
                                  , h = e.isFilePayload
                                  , p = e.shouldSnakeize
                                  , f = void 0 === p || p
                                  , _ = e.xhrFields
                                  , m = e.crossDomain
                                  , g = e.headers
                                  , v = e.xhr
                                  , y = e.beforeSend
                                  , b = f ? l()(n) : n
                                  , w = h ? new FormData : null;
                                return w && r().each(b, (function(e, t) {
                                    "files" === t ? r().each(e, (function(e, t) {
                                        w.append(t, e)
                                    }
                                    )) : w.append(t, e)
                                }
                                )),
                                d ? {
                                    url: t,
                                    data: h ? w : b,
                                    contentType: s,
                                    processData: c,
                                    dataType: u,
                                    xhrFields: _,
                                    crossDomain: m,
                                    xhr: v,
                                    beforeSend: y,
                                    headers: g,
                                    method: o
                                } : {
                                    url: t,
                                    contentType: s || "application/json",
                                    data: "GET" === o ? b : JSON.stringify(b),
                                    processData: c,
                                    dataType: u,
                                    xhrFields: _,
                                    crossDomain: m,
                                    xhr: v,
                                    beforeSend: y,
                                    headers: g,
                                    method: o
                                }
                            }((a = function(e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {}
                                      , i = Object.keys(n);
                                    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                                    }
                                    )))),
                                    i.forEach((function(t) {
                                        h(e, t, n[t])
                                    }
                                    ))
                                }
                                return e
                            }({}, e),
                            c = null != (c = {
                                shouldCamelizeResponse: void 0
                            }) ? c : {},
                            Object.getOwnPropertyDescriptors ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(c)) : function(e, t) {
                                var n = Object.keys(e);
                                if (Object.getOwnPropertySymbols) {
                                    var i = Object.getOwnPropertySymbols(e);
                                    n.push.apply(n, i)
                                }
                                return n
                            }(Object(c)).forEach((function(e) {
                                Object.defineProperty(a, e, Object.getOwnPropertyDescriptor(c, e))
                            }
                            )),
                            a)),
                            [4, o().ajaxPromisify(t)];
                        case 1:
                            return n = s.sent(),
                            [2, void 0 === (i = e.shouldCamelizeResponse) || i ? u()(n) : n]
                        }
                        var a, c
                    }
                    ))
                }
                ,
                function() {
                    var e = this
                      , n = arguments;
                    return new Promise((function(i, o) {
                        var s = t.apply(e, n);
                        function r(e) {
                            d(s, i, o, r, a, "next", e)
                        }
                        function a(e) {
                            d(s, i, o, r, a, "throw", e)
                        }
                        r(void 0)
                    }
                    ))
                }
                )();
                var t
            }
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
          , t = (new Error).stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {},
        e._sentryDebugIds[t] = "68459477-fce7-423d-813e-cfcded3ab208",
        e._sentryDebugIdIdentifier = "sentry-dbid-68459477-fce7-423d-813e-cfcded3ab208")
    } catch (e) {}
}();
//# sourceMappingURL=1676.888b5ebc58d225dcb360.js.map
