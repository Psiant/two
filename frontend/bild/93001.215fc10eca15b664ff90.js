"use strict";
(window.webpackChunk = window.webpackChunk || []).push([[93001], {
    793001: (e, t, n) => {
        n.r(t),
        n.d(t, {
            default: () => w
        });
        var r = n(267651)
          , o = n.n(r)
          , i = n(55188)
          , u = n.n(i)
          , l = n(521466)
          , a = n(500034)
          , c = n(340348)
          , s = n(82693)
          , f = n(661533);
        function d(e) {
            if (void 0 === e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }
        function p(e, t, n, r, o, i, u) {
            try {
                var l = e[i](u)
                  , a = l.value
            } catch (e) {
                return void n(e)
            }
            l.done ? t(a) : Promise.resolve(a).then(r, o)
        }
        function y(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r)
            }
        }
        function b(e, t, n) {
            return b = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(e, t, n) {
                var r = function(e, t) {
                    for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = v(e)); )
                        ;
                    return e
                }(e, t);
                if (r) {
                    var o = Object.getOwnPropertyDescriptor(r, t);
                    return o.get ? o.get.call(n || e) : o.value
                }
            }
            ,
            b(e, t, n || e)
        }
        function v(e) {
            return v = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            ,
            v(e)
        }
        function _(e, t) {
            return _ = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                e
            }
            ,
            _(e, t)
        }
        function h(e) {
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
                var n, r = v(e);
                if (t) {
                    var o = v(this).constructor;
                    n = Reflect.construct(r, arguments, o)
                } else
                    n = r.apply(this, arguments);
                return function(e, t) {
                    return !t || "object" != ((n = t) && "undefined" != typeof Symbol && n.constructor === Symbol ? "symbol" : typeof n) && "function" != typeof t ? d(e) : t;
                    var n
                }(this, n)
            }
        }
        const w = function(e) {
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
            }(l, e);
            var t, r, i = h(l);
            function l() {
                var e, t, n, r;
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, l),
                t = d(e = i.apply(this, arguments)),
                n = "$el",
                r = f("#aside"),
                n in t ? Object.defineProperty(t, n, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[n] = r,
                e
            }
            return t = l,
            r = [{
                key: "initialize",
                value: function() {
                    b(v(l.prototype), "initialize", this).apply(this, arguments),
                    this.removeListeners = this.addListeners(),
                    this.render()
                }
            }, {
                key: "destroy",
                value: function() {
                    this.$el.remove(),
                    this.removeListeners(),
                    b(v(l.prototype), "destroy", this).apply(this, arguments)
                }
            }, {
                key: "render",
                value: function() {
                    (0,
                    a.isFeatureAvailable)("ai_copilot_available") && this.initCopilot()
                }
            }, {
                key: "initCopilot",
                value: function() {
                    var e, t = this;
                    return (e = function() {
                        var e, r;
                        return function(e, t) {
                            var n, r, o, i, u = {
                                label: 0,
                                sent: function() {
                                    if (1 & o[0])
                                        throw o[1];
                                    return o[1]
                                },
                                trys: [],
                                ops: []
                            };
                            return i = {
                                next: l(0),
                                throw: l(1),
                                return: l(2)
                            },
                            "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                                return this
                            }
                            ),
                            i;
                            function l(i) {
                                return function(l) {
                                    return function(i) {
                                        if (n)
                                            throw new TypeError("Generator is already executing.");
                                        for (; u; )
                                            try {
                                                if (n = 1,
                                                r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r),
                                                0) : r.next) && !(o = o.call(r, i[1])).done)
                                                    return o;
                                                switch (r = 0,
                                                o && (i = [2 & i[0], o.value]),
                                                i[0]) {
                                                case 0:
                                                case 1:
                                                    o = i;
                                                    break;
                                                case 4:
                                                    return u.label++,
                                                    {
                                                        value: i[1],
                                                        done: !1
                                                    };
                                                case 5:
                                                    u.label++,
                                                    r = i[1],
                                                    i = [0];
                                                    continue;
                                                case 7:
                                                    i = u.ops.pop(),
                                                    u.trys.pop();
                                                    continue;
                                                default:
                                                    if (!((o = (o = u.trys).length > 0 && o[o.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                                                        u = 0;
                                                        continue
                                                    }
                                                    if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                                        u.label = i[1];
                                                        break
                                                    }
                                                    if (6 === i[0] && u.label < o[1]) {
                                                        u.label = o[1],
                                                        o = i;
                                                        break
                                                    }
                                                    if (o && u.label < o[2]) {
                                                        u.label = o[2],
                                                        u.ops.push(i);
                                                        break
                                                    }
                                                    o[2] && u.ops.pop(),
                                                    u.trys.pop();
                                                    continue
                                                }
                                                i = t.call(e, u)
                                            } catch (e) {
                                                i = [6, e],
                                                r = 0
                                            } finally {
                                                n = o = 0
                                            }
                                        if (5 & i[0])
                                            throw i[1];
                                        return {
                                            value: i[0] ? i[1] : void 0,
                                            done: !0
                                        }
                                    }([i, l])
                                }
                            }
                        }(this, (function(o) {
                            switch (o.label) {
                            case 0:
                                return [4, Promise.all([n.e(29782), n.e(35534), n.e(61802), n.e(77961), n.e(34753), n.e(99386), n.e(74486)]).then(n.bind(n, 951731))];
                            case 1:
                                return e = o.sent(),
                                r = e.default,
                                t.aiCopilot = t._addComponent(r, {
                                    onDestroy: function() {
                                        return t._handleCopilotDestroy()
                                    }
                                }),
                                [2]
                            }
                        }
                        ))
                    }
                    ,
                    function() {
                        var t = this
                          , n = arguments;
                        return new Promise((function(r, o) {
                            var i = e.apply(t, n);
                            function u(e) {
                                p(i, r, o, u, l, "next", e)
                            }
                            function l(e) {
                                p(i, r, o, u, l, "throw", e)
                            }
                            u(void 0)
                        }
                        ))
                    }
                    )()
                }
            }, {
                key: "removeGlobalProperties",
                value: function() {
                    this.$el.removeClass("active"),
                    this._$page.removeClass("minimized"),
                    document.documentElement.style.setProperty("--aside-width", "0px")
                }
            }, {
                key: "addListeners",
                value: function() {
                    var e = (0,
                    a.isFeatureAvailable)("ai_copilot_available") ? this._addCopilotListeners() : u().noop;
                    return function() {
                        e()
                    }
                }
            }, {
                key: "_addCopilotListeners",
                value: function() {
                    var e = this
                      , t = o().subscribe(s.INIT_AI_COPILOT_PUBSUB_EVENT, (function() {
                        return e._handleInitCopilotEvent()
                    }
                    ))
                      , n = o().subscribe(c.DESTROY_AI_COPILOT_PUBSUB_EVENT, (function() {
                        return e._handleDestroyCopilotEvent()
                    }
                    ));
                    return function() {
                        o().unsubscribe(t),
                        o().unsubscribe(n)
                    }
                }
            }, {
                key: "_handleCopilotDestroy",
                value: function() {
                    this.removeGlobalProperties()
                }
            }, {
                key: "_handleInitCopilotEvent",
                value: function() {
                    this.initCopilot()
                }
            }, {
                key: "_handleDestroyCopilotEvent",
                value: function() {
                    var e;
                    null === (e = this.aiCopilot) || void 0 === e || e.destroy()
                }
            }],
            r && y(t.prototype, r),
            l
        }(l.default);
        var E = "../build/transpiled/interface/aside/aside";
        window.define(E, (function() {
            var e = "undefined"
              , n = typeof t === e ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === e ? typeof module === e ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : t;
            return n && n.default || n
        }
        )),
        window.require([E])
    }
    ,
    340348: (e, t, n) => {
        n.r(t),
        n.d(t, {
            DESTROY_AI_COPILOT_PUBSUB_EVENT: () => r
        });
        var r = "ai:copilot:destroy"
    }
    ,
    82693: (e, t, n) => {
        n.r(t),
        n.d(t, {
            INIT_AI_COPILOT_PUBSUB_EVENT: () => r
        });
        var r = "ai:copilot:init"
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
        e._sentryDebugIds[t] = "63f656e5-9107-49ac-bd16-edf2953d520e",
        e._sentryDebugIdIdentifier = "sentry-dbid-63f656e5-9107-49ac-bd16-edf2953d520e")
    } catch (e) {}
}();
//# sourceMappingURL=93001.215fc10eca15b664ff90.js.map
