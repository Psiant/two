/*! For license information please see 68430.6133f3916aeb9f4cafda.js.LICENSE.txt */
(window.webpackChunk = window.webpackChunk || []).push([[68430], {
    398457: t => {
        function e(t) {
            if (!t)
                throw new Error("missing options");
            if (!t.handler)
                throw new Error("missing handler parameter");
            this.scrollElement = t.scrollElement || window,
            this.conditions = t.conditions || {},
            this.handler = t.handler,
            this.values = {},
            this.tracked = {},
            this.success = !1,
            this.throttleVal = t.throttle || 100,
            this.processing = !1,
            this.stopped = !1,
            this._parse(),
            "pageYOffset"in this.scrollElement ? (this._addBottom(),
            this._addTop()) : (this._addBottomEl(),
            this._addTopEl(),
            this._addScrollLeft()),
            this._addWidth(),
            this._onScroll()
        }
        e.prototype.addCondition = function(t, e) {
            this.conditions[t] = e,
            this._parse()
        }
        ,
        e.prototype.removeCondition = function(t) {
            delete this.conditions[t],
            this._parse()
        }
        ,
        e.prototype.addTracker = function(t, e) {
            this.tracked[t] = {
                cb: e,
                name: t
            }
        }
        ,
        e.prototype._addBottom = function() {
            this.addTracker("bottom", (function(t) {
                return Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight) - (t.pageYOffset + t.innerHeight)
            }
            ))
        }
        ,
        e.prototype._addTop = function() {
            this.addTracker("top", (function(t) {
                return t.pageYOffset
            }
            ))
        }
        ,
        e.prototype._addBottomEl = function() {
            this.addTracker("bottom", (function(t) {
                return Math.max(t.scrollHeight, t.offsetHeight) - (t.scrollTop + t.offsetHeight)
            }
            ))
        }
        ,
        e.prototype._addTopEl = function() {
            this.addTracker("top", (function(t) {
                return t.scrollTop
            }
            ))
        }
        ,
        e.prototype._addScrollLeft = function() {
            this.addTracker("scrollLeft", (function(t) {
                return t.scrollLeft
            }
            ))
        }
        ,
        e.prototype._addWidth = function() {
            this.addTracker("width", (function(t) {
                return t.innerWidth
            }
            ))
        }
        ,
        e.prototype._parse = function() {
            for (var t in this._parsed = {},
            this._wantedTrackers = [],
            this._parsedMax = {},
            this._parsedMin = {},
            this.conditions)
                if (this.conditions.hasOwnProperty(t))
                    switch (t.substr(0, 4)) {
                    case "min-":
                        this._wantedTrackers.push(t.substr(4, t.length)),
                        this._parsedMin[t.substr(4, t.length)] = this.conditions[t];
                        break;
                    case "max-":
                        this._wantedTrackers.push(t.substr(4, t.length)),
                        this._parsedMax[t.substr(4, t.length)] = this.conditions[t];
                        break;
                    default:
                        this._wantedTrackers.push(t),
                        this._parsed[t] = this.conditions[t]
                    }
        }
        ,
        e.prototype._check = function() {
            var t = [];
            for (var e in this.values)
                this._parsed.hasOwnProperty(e) && t.push(this._parsed[e] == this.values[e]),
                this._parsedMin.hasOwnProperty(e) && t.push(this._parsedMin[e] <= this.values[e]),
                this._parsedMax.hasOwnProperty(e) && t.push(this._parsedMax[e] >= this.values[e]);
            if (t.length && -1 == t.indexOf(!1)) {
                this.processing = !0;
                var i = this._done.bind(this);
                window.requestAnimationFrame(this.handler.bind(this, this.values, i))
            }
        }
        ,
        e.prototype._done = function() {
            this.processing = !1
        }
        ,
        e.prototype._onScroll = function() {
            this._onScrollHandler = this._throttledHandler(),
            this.scrollElement.addEventListener("scroll", this._onScrollHandler, !1)
        }
        ,
        e.prototype._throttledHandler = function() {
            var t = this;
            return this.throttle((function(e) {
                if (t._wantedTrackers.length && !t.processing) {
                    for (var i = 0; i < t._wantedTrackers.length; i++)
                        t.tracked[t._wantedTrackers[i]] && (t.values[t._wantedTrackers[i]] = t.tracked[t._wantedTrackers[i]].cb(t.scrollElement || window));
                    window.requestAnimationFrame(t._check.bind(t))
                }
            }
            ), this.throttleVal)
        }
        ,
        e.prototype.stop = function() {
            this.stopped || (this.scrollElement.removeEventListener("scroll", this._onScrollHandler, !1),
            this.stopped = !0)
        }
        ,
        e.prototype.resume = function() {
            this.stopped && this._onScroll(),
            this.stopped = !1
        }
        ,
        e.prototype.throttle = function(t, e) {
            var i, n = !0;
            return function() {
                var o = this
                  , a = arguments;
                if (n)
                    return t.apply(o, a),
                    void (n = !1);
                i || (i = !0,
                setTimeout((function() {
                    t.apply(o, a),
                    i = !1
                }
                ), e))
            }
        }
        ,
        t.exports && (t.exports = e);
        var i = "steady";
        window.define(i, (function() {
            var e = "undefined"
              , i = typeof __webpack_exports__ === e ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === e ? typeof t === e ? void 0 : t.exports : __WEBPACK_AMD_DEFINE_RESULT__ : __webpack_exports__;
            return i && i.default || i
        }
        )),
        window.require([i])
    }
    ,
    300432: (t, e, i) => {
        "use strict";
        i.r(e),
        i.d(e, {
            default: () => l
        });
        var n = i(55188)
          , o = i.n(n)
          , a = i(398457)
          , r = i.n(a)
          , s = []
          , c = function() {
            for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
                e[i] = arguments[i];
            return r().apply(this, e)
        };
        (c.prototype = Object.create(r().prototype)).throttle = o().throttle;
        var d = function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            this.steady_loader = new c({
                scrollElement: t.element || window,
                conditions: t.conditions || {
                    "max-bottom": 100
                },
                throttle: t.throttle || 100,
                handler: function(e, i) {
                    var n = t.onLoadMore();
                    n && n.then ? n.then(i) : i()
                }
            }),
            s.push(this.steady_loader)
        };
        d.prototype.destroy = function() {
            var t = o().indexOf(s, this.steady_loader);
            this.steady_loader && this.steady_loader.stop(),
            s.splice(t, 1)
        }
        ;
        const l = d;
        var u = "../build/transpiled/components/base/autoload";
        window.define(u, (function() {
            var t = "undefined"
              , i = typeof e === t ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === t ? typeof module === t ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : e;
            return i && i.default || i
        }
        )),
        window.require([u])
    }
    ,
    286369: (t, e, i) => {
        "use strict";
        i.r(e),
        i.d(e, {
            get: () => N,
            listen: () => C,
            set: () => O,
            update: () => A
        });
        var n = i(55188)
          , o = i.n(n)
          , a = i(987081)
          , r = i(128508)
          , s = i(579569)
          , c = i(237262)
          , d = i(507182)
          , l = i(729153)
          , u = i(869445)
          , f = i(598701)
          , h = i(661533);
        function _(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var i = 0, n = new Array(e); i < e; i++)
                n[i] = t[i];
            return n
        }
        function p(t, e, i, n, o, a, r) {
            try {
                var s = t[a](r)
                  , c = s.value
            } catch (t) {
                return void i(t)
            }
            s.done ? e(c) : Promise.resolve(c).then(n, o)
        }
        function m(t, e) {
            return function(t) {
                if (Array.isArray(t))
                    return t
            }(t) || function(t, e) {
                var i = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                if (null != i) {
                    var n, o, a = [], r = !0, s = !1;
                    try {
                        for (i = i.call(t); !(r = (n = i.next()).done) && (a.push(n.value),
                        !e || a.length !== e); r = !0)
                            ;
                    } catch (t) {
                        s = !0,
                        o = t
                    } finally {
                        try {
                            r || null == i.return || i.return()
                        } finally {
                            if (s)
                                throw o
                        }
                    }
                    return a
                }
            }(t, e) || function(t, e) {
                if (t) {
                    if ("string" == typeof t)
                        return _(t, e);
                    var i = Object.prototype.toString.call(t).slice(8, -1);
                    return "Object" === i && t.constructor && (i = t.constructor.name),
                    "Map" === i || "Set" === i ? Array.from(i) : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? _(t, e) : void 0
                }
            }(t, e) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        var b, v = {
            badge: 0,
            badge_brief: "0",
            badge_no_chats: 0,
            badge_no_chat_brief: "0",
            badge_no_external_chat: 0,
            badge_no_external_chat_brief: "0",
            badge_inbox: 0,
            badge_team_union: 0,
            badge_team_union_brief: "0"
        }, g = [119, 126], y = [125], w = APP.constant("account").id, E = (0,
        s.current)("id"), x = "inbox:talks:".concat(w), k = "notifications:".concat(w, ":").concat(E), S = APP.constant("account").is_chats_inbox_enabled, T = new d.default;
        function A() {
            if (!b) {
                var t = (e = function() {
                    var t, e, i;
                    return function(t, e) {
                        var i, n, o, a, r = {
                            label: 0,
                            sent: function() {
                                if (1 & o[0])
                                    throw o[1];
                                return o[1]
                            },
                            trys: [],
                            ops: []
                        };
                        return a = {
                            next: s(0),
                            throw: s(1),
                            return: s(2)
                        },
                        "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                            return this
                        }
                        ),
                        a;
                        function s(a) {
                            return function(s) {
                                return function(a) {
                                    if (i)
                                        throw new TypeError("Generator is already executing.");
                                    for (; r; )
                                        try {
                                            if (i = 1,
                                            n && (o = 2 & a[0] ? n.return : a[0] ? n.throw || ((o = n.return) && o.call(n),
                                            0) : n.next) && !(o = o.call(n, a[1])).done)
                                                return o;
                                            switch (n = 0,
                                            o && (a = [2 & a[0], o.value]),
                                            a[0]) {
                                            case 0:
                                            case 1:
                                                o = a;
                                                break;
                                            case 4:
                                                return r.label++,
                                                {
                                                    value: a[1],
                                                    done: !1
                                                };
                                            case 5:
                                                r.label++,
                                                n = a[1],
                                                a = [0];
                                                continue;
                                            case 7:
                                                a = r.ops.pop(),
                                                r.trys.pop();
                                                continue;
                                            default:
                                                if (!((o = (o = r.trys).length > 0 && o[o.length - 1]) || 6 !== a[0] && 2 !== a[0])) {
                                                    r = 0;
                                                    continue
                                                }
                                                if (3 === a[0] && (!o || a[1] > o[0] && a[1] < o[3])) {
                                                    r.label = a[1];
                                                    break
                                                }
                                                if (6 === a[0] && r.label < o[1]) {
                                                    r.label = o[1],
                                                    o = a;
                                                    break
                                                }
                                                if (o && r.label < o[2]) {
                                                    r.label = o[2],
                                                    r.ops.push(a);
                                                    break
                                                }
                                                o[2] && r.ops.pop(),
                                                r.trys.pop();
                                                continue
                                            }
                                            a = e.call(t, r)
                                        } catch (t) {
                                            a = [6, t],
                                            n = 0
                                        } finally {
                                            i = o = 0
                                        }
                                    if (5 & a[0])
                                        throw a[1];
                                    return {
                                        value: a[0] ? a[1] : void 0,
                                        done: !0
                                    }
                                }([a, s])
                            }
                        }
                    }(this, (function(n) {
                        switch (n.label) {
                        case 0:
                            return n.trys.push([0, 2, 3, 4]),
                            [4, l.default.checkAuth((function() {
                                return Promise.all(o().compact([h.ajax({
                                    url: "/v3/inbox/badge",
                                    dataType: "json"
                                }), S && !(0,
                                c.getRights)("is_free_user") && h.ajax({
                                    url: "/ajax/v4/inbox/badge",
                                    dataType: "json"
                                })]))
                            }
                            ))];
                        case 1:
                            return t = m.apply(void 0, [n.sent(), 2]),
                            e = t[0],
                            i = t[1],
                            T.next(e),
                            i && T.next({
                                badge_inbox: i.count
                            }),
                            [3, 4];
                        case 2:
                            return n.sent(),
                            [3, 4];
                        case 3:
                            return b = null,
                            [7];
                        case 4:
                            return [2]
                        }
                    }
                    ))
                }
                ,
                i = function() {
                    var t = this
                      , i = arguments;
                    return new Promise((function(n, o) {
                        var a = e.apply(t, i);
                        function r(t) {
                            p(a, n, o, r, s, "next", t)
                        }
                        function s(t) {
                            p(a, n, o, r, s, "throw", t)
                        }
                        r(void 0)
                    }
                    ))
                }
                ,
                function() {
                    return i.apply(this, arguments)
                }
                );
                b = t()
            }
            var e, i;
            return b
        }
        function C(t) {
            return new a.Observable((function(e) {
                var i = o().isArray(t) ? t : [t]
                  , n = T.pipe(r.map((function(t) {
                    return o().extend(v, o().pick(t, i)),
                    o().pick(v, i)
                }
                )), r.tap({
                    next: o().bind(e.next, e)
                })).subscribe(o().noop);
                return T.next(v),
                function() {
                    return n.unsubscribe()
                }
            }
            ))
        }
        function N(t) {
            var e = o().clone(v);
            return t ? e[t] || 0 : e
        }
        function O(t) {
            o().extend(v, o().pick(t, o().keys(v)));
            var e = o().pick(v, o().keys(t));
            return o().isEmpty(e) || T.next(e),
            !o().isEmpty(e)
        }
        u.default.subscribe([k]).pipe(r.filter((function(t) {
            return o().propertyOf(t)(["body", "channel"]) === k
        }
        )), r.map((function(t) {
            return o().propertyOf(t)(["body", "payload"]) || {}
        }
        ))).subscribe(T),
        S && (u.default.status.subscribe((function(t) {
            t.state === WebSocket.OPEN && u.default.send([{
                method: "subscribe",
                params: {
                    channel: x
                }
            }])
        }
        )),
        u.default.subscribe([x]).pipe(r.filter((function(t) {
            return o().propertyOf(t)(["body", "channel"]) === x && o().contains(o().union(g, y), o().propertyOf(t)(["body", "payload", "type"]))
        }
        )), r.map((function(t) {
            var e, i, n, a = 119 !== o().propertyOf(t)(["body", "payload", "type"]) || 119 === o().propertyOf(t)(["body", "payload", "type"]) && !1 === o().propertyOf(t)(["body", "payload", "model", "is_read"]), r = o().contains(g, o().propertyOf(t)(["body", "payload", "type"])) ? 1 : -1, s = "badge_inbox";
            return O((n = N(s) + (a ? r : 0),
            (i = s)in (e = {}) ? Object.defineProperty(e, i, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[i] = n,
            e)),
            !0
        }
        ))).subscribe(T)),
        (0,
        f.onPageFullyLoaded)(A)
    }
    ,
    168430: (t, e, i) => {
        "use strict";
        i.r(e),
        i.d(e, {
            default: () => st
        });
        var n = i(162262)
          , o = i.n(n)
          , a = i(661533)
          , r = i.n(a)
          , s = i(161320)
          , c = i.n(s)
          , d = i(267651)
          , l = i.n(d)
          , u = i(987081)
          , f = i(128508)
          , h = i(460159)
          , _ = i.n(h)
          , p = i(55188)
          , m = i.n(p)
          , b = i(334254)
          , v = i.n(b)
          , g = i(598701)
          , y = i(500034)
          , w = i(579569)
          , E = i(880774)
          , x = i(678640)
          , k = i(300432)
          , S = i(77305)
          , T = i(696884)
          , A = i(832777)
          , C = i(158197)
          , N = i(518321)
          , O = i(454764)
          , P = i(267589)
          , I = i(510475)
          , M = i(729153)
          , R = i(521466)
          , D = i(335745)
          , L = i(987280)
          , F = i(275649)
          , U = i(391753)
          , j = i(211614)
          , B = i(470505)
          , z = i(869445)
          , W = i(582147)
          , H = i(886965)
          , V = i(115484)
          , q = i(286369)
          , K = i(463183);
        function X(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var i = 0, n = new Array(e); i < e; i++)
                n[i] = t[i];
            return n
        }
        function G(t, e, i, n, o, a, r) {
            try {
                var s = t[a](r)
                  , c = s.value
            } catch (t) {
                return void i(t)
            }
            s.done ? e(c) : Promise.resolve(c).then(n, o)
        }
        function Y(t) {
            return function() {
                var e = this
                  , i = arguments;
                return new Promise((function(n, o) {
                    var a = t.apply(e, i);
                    function r(t) {
                        G(a, n, o, r, s, "next", t)
                    }
                    function s(t) {
                        G(a, n, o, r, s, "throw", t)
                    }
                    r(void 0)
                }
                ))
            }
        }
        function J(t, e, i) {
            return e in t ? Object.defineProperty(t, e, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = i,
            t
        }
        function $(t, e) {
            return function(t) {
                if (Array.isArray(t))
                    return t
            }(t) || function(t, e) {
                var i = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                if (null != i) {
                    var n, o, a = [], r = !0, s = !1;
                    try {
                        for (i = i.call(t); !(r = (n = i.next()).done) && (a.push(n.value),
                        !e || a.length !== e); r = !0)
                            ;
                    } catch (t) {
                        s = !0,
                        o = t
                    } finally {
                        try {
                            r || null == i.return || i.return()
                        } finally {
                            if (s)
                                throw o
                        }
                    }
                    return a
                }
            }(t, e) || function(t, e) {
                if (t) {
                    if ("string" == typeof t)
                        return X(t, e);
                    var i = Object.prototype.toString.call(t).slice(8, -1);
                    return "Object" === i && t.constructor && (i = t.constructor.name),
                    "Map" === i || "Set" === i ? Array.from(i) : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? X(t, e) : void 0
                }
            }(t, e) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        function Z(t, e) {
            var i, n, o, a, r = {
                label: 0,
                sent: function() {
                    if (1 & o[0])
                        throw o[1];
                    return o[1]
                },
                trys: [],
                ops: []
            };
            return a = {
                next: s(0),
                throw: s(1),
                return: s(2)
            },
            "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                return this
            }
            ),
            a;
            function s(a) {
                return function(s) {
                    return function(a) {
                        if (i)
                            throw new TypeError("Generator is already executing.");
                        for (; r; )
                            try {
                                if (i = 1,
                                n && (o = 2 & a[0] ? n.return : a[0] ? n.throw || ((o = n.return) && o.call(n),
                                0) : n.next) && !(o = o.call(n, a[1])).done)
                                    return o;
                                switch (n = 0,
                                o && (a = [2 & a[0], o.value]),
                                a[0]) {
                                case 0:
                                case 1:
                                    o = a;
                                    break;
                                case 4:
                                    return r.label++,
                                    {
                                        value: a[1],
                                        done: !1
                                    };
                                case 5:
                                    r.label++,
                                    n = a[1],
                                    a = [0];
                                    continue;
                                case 7:
                                    a = r.ops.pop(),
                                    r.trys.pop();
                                    continue;
                                default:
                                    if (!((o = (o = r.trys).length > 0 && o[o.length - 1]) || 6 !== a[0] && 2 !== a[0])) {
                                        r = 0;
                                        continue
                                    }
                                    if (3 === a[0] && (!o || a[1] > o[0] && a[1] < o[3])) {
                                        r.label = a[1];
                                        break
                                    }
                                    if (6 === a[0] && r.label < o[1]) {
                                        r.label = o[1],
                                        o = a;
                                        break
                                    }
                                    if (o && r.label < o[2]) {
                                        r.label = o[2],
                                        r.ops.push(a);
                                        break
                                    }
                                    o[2] && r.ops.pop(),
                                    r.trys.pop();
                                    continue
                                }
                                a = e.call(t, r)
                            } catch (t) {
                                a = [6, t],
                                n = 0
                            } finally {
                                i = o = 0
                            }
                        if (5 & a[0])
                            throw a[1];
                        return {
                            value: a[0] ? a[1] : void 0,
                            done: !0
                        }
                    }([a, s])
                }
            }
        }
        i.e(22589).then(i.bind(i, 579594)),
        i.e(56083).then(i.bind(i, 956083));
        var Q, tt = APP.constant("account").is_chats_inbox_enabled, et = !1, it = null, nt = tt ? "?filter[exclude][external_chats]=true" : "", ot = (0,
        y.isFeatureAvailable)("global_inbox") ? "badge_no_chat_brief" : "badge_no_external_chat_brief", at = "/v3/inbox/list".concat(tt && (0,
        y.isFeatureAvailable)("global_inbox") ? "?filter[exclude][chats]=true" : nt), rt = R.default.extend({
            el: "#notification-wrapper",
            data: [],
            error: null,
            badge_id: tt ? ot : "badge_brief",
            sound_id: "amo_inbox_sound",
            api: {
                list: at,
                read: "/v3/inbox/read",
                task: "/ajax/todo/multiple/close/"
            },
            collection: A.Collection,
            current_state: T.default.STATE_UNINITIALIZED,
            current_mode: T.default.MODE_NORMAL,
            no_content: !1,
            no_content_text: (0,
            E.i18n)("No notifications found"),
            filters: [],
            opened_direct_chat: null,
            push_hide_timers: {},
            directChatOpening: !1,
            inbox_fully_opened: !1,
            readable_ids: [],
            readers: {},
            presets: null,
            _selectors: function() {
                return {
                    inbox: "#notification-aside",
                    inbox_container: "#inbox-container",
                    search_container: ".search-container",
                    inbox__spiner: ".inbox__spiner",
                    aside_inner: ".aside__inner",
                    direct_chat_container: ".inbox-direct-chat-container",
                    inbox_toggle_button: ".nav__notifications",
                    toast_container: "#popups_inbox",
                    navigation: ".js-navigate-link",
                    unread_item: ".notification__item__unread",
                    cancel_search: ".aside-clear-button",
                    search_input: "input.js-input-search",
                    chat_create_cross: ".add_icon-userpic_is-add",
                    button_scroll: ".button-scroll",
                    sound_toggler: ".js-inbox-mute",
                    notification_emotion: '.js-notification_emotion[data-id="%s"]'
                }
            },
            _classes: function() {
                return {
                    item: "notification__item",
                    active: "inbox-expanded",
                    enable_animation: "animated",
                    hide_animation: "slide-out",
                    show_animation: "slide-in",
                    loading: "loading-full",
                    direct_chat_enabled: "direct-chat__opened",
                    chat_create_active: "active"
                }
            },
            events: {
                "click .js-inbox-multiactions": "openMultiaction",
                "click .js-create_group_chat:not(.chat_create-button--disabled)": "createGroupChat",
                "click .notification__item:not(.notification__item-plug)": "onSelectItemClick",
                "click .notification-inner__button_show-more": "onShowMoreClick",
                "click .js-notification-favorites": "chooseFavorite",
                "mouseenter .notification__item:not(.notification__item-plug)": "onNotificationMouseEnter",
                "mouseleave .notification__item:not(.notification__item-plug)": "onNotificationMouseLeave"
            },
            document_events: {
                "amo:task:complete": "completeTask"
            },
            addReader: function(t, e) {
                return this.readers[e] = t,
                e
            },
            chooseFavorite: function(t) {
                var e = r()(t.currentTarget).closest(".notification-inner").data("id")
                  , i = this.notifications.get(e)
                  , n = !i.get(this.getLabelParamName());
                t.stopPropagation(),
                t.preventDefault(),
                i && (i.set(this.getLabelParamName(), n),
                r().ajax({
                    url: "/v3/inbox/notifications/".concat(i.get("notification_id"), "/label"),
                    type: n ? "POST" : "DELETE"
                }))
            },
            onNotificationMouseEnter: function(t) {
                var e = this.notifications.get(t.currentTarget.dataset.id);
                this.destroyQuickActionMenu(),
                e && this.initQuickActionMenu({
                    el: r()(t.currentTarget).find(".js-notification-quick-action"),
                    model: e
                })
            },
            onNotificationMouseLeave: function() {
                this.notification_quick_action && !this.notification_quick_action.is_active && this.destroyQuickActionMenu()
            },
            removeReader: function(t) {
                delete this.readers[t]
            },
            initialize: function(t) {
                var e = this.source || N.default;
                this.options = t || {},
                this.apply_deferred = r().Deferred(),
                this.filter_deferred = r().Deferred(),
                R.default.prototype.initialize.apply(this, arguments),
                this.$el.length && (this._managers = (0,
                w.get)(),
                this.source_loader = new e(T.default.PAGE_COUNT,this.api.list),
                this.notifications = this._addComponent(this.collection, {
                    order_by: this.getInitialSortOrder().unread_first ? "read_state" : ""
                }),
                this.listenTo(this.notifications, "change:selected", this.onItemSelected),
                this.unmountNotFoundNotificationHandler = this.initNotFoundNotificationHandler(),
                this.socket = new u.Subscription,
                this.initSound(),
                this.initAllPromises())
            },
            destroy: function() {
                for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
                    e[i] = arguments[i];
                return this.badge && this.badge.unsubscribe(),
                this.socket && this.socket.unsubscribe(),
                this.unmountNotFoundNotificationHandler && this.unmountNotFoundNotificationHandler(),
                R.default.prototype.destroy.apply(this, e)
            },
            initAllPromises: function() {
                return this.promise_all_init = Promise.all([this.requestBadge().then(m().bind(this.requestPresets, this)), this.requestPushPermission(), this.connect(), this.initSource()]),
                this.promise_all_init
            },
            initMultiaction: function() {
                return Y((function() {
                    var t, e;
                    return Z(this, (function(n) {
                        switch (n.label) {
                        case 0:
                            return this.multiaction ? [2] : [4, i.e(72033).then(i.bind(i, 372033))];
                        case 1:
                            return t = n.sent(),
                            e = t.default,
                            this.multiaction = this._addComponent(e, {
                                el: this._elem("aside_inner").get(0),
                                notifications: this.notifications,
                                closeChat: m().bind(this.closeDirectChat, this),
                                onButtonClick: m().bind(this.processMultiaction, this)
                            }),
                            [2]
                        }
                    }
                    ))
                }
                )).apply(this)
            },
            addUsersInBuffer: function(t) {
                this.source_loader.addUsersBuffer(t) && this.getAddModelDirect(t)
            },
            multiactionClose: function() {
                this.multiaction && this.multiaction.close()
            },
            canMultiactionsBeShown: function() {
                return !(1 === this.notifications.length && "fake" === this.notifications.first().get("id"))
            },
            openMultiaction: function() {
                this.multiaction && this.canMultiactionsBeShown() && this.multiaction.show((0,
                x.hasKeys)(this.search, ["filter"]) && this.search.filter.super_change)
            },
            addNotification: function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                this.filterEntryCheck(t) ? this.notifications.add(t, e) : this.rejectExistingModelOnAdd(t)
            },
            getInitialSortOrder: function() {
                return (0,
                C.getInitialSortOrder)()
            },
            initNotFoundNotificationHandler: function() {
                var t = this
                  , e = function() {
                    t.canNotFoundNotificationBeShown() ? t.addNotFoundNotification() : t.canNotFoundNotificationBeRemoved() && t.removeNotFoundNotification()
                };
                return this.notifications.on("add remove", e),
                function() {
                    t.notifications.off("add remove", e)
                }
            },
            rejectExistingModelOnAdd: function(t) {
                var e = t.id
                  , i = [];
                return this.notifications.get(e) ? (this.notifications.remove(e),
                i = [e]) : i
            },
            excludeTypeEntryCheck: function(t) {
                return m().contains(this.options.exclude_click_types, m().propertyOf(t.get("click"))(["type"]))
            },
            filterEntryCheck: function(t) {
                var e = this.getFilterSource()
                  , i = m().reduce(this.getFilterOptions(), (function(t, i, n) {
                    if (m().isEmpty(i))
                        return t;
                    switch (n) {
                    case "provider[]":
                        t.sources = {},
                        !m().isEmpty(i) && m().isString(i) && (i = [i]),
                        i = m().filter(m().toArray(i), (function(i) {
                            return !m().contains(m().pluck(e, "id"), i) || (t.sources.chat_source = [i].concat(t.sources.chat_source || []),
                            !1)
                        }
                        ), this),
                        m().isArray(t.sources.provider) ? t.sources.provider = t.sources.provider.concat(m().isArray(i) ? i : [i]) : t.sources.provider = m().isArray(i) ? i : [i];
                        break;
                    case "updated_at_to":
                        t.updated_at || (t.updated_at = {}),
                        t.updated_at.to = i;
                        break;
                    case "updated_at_from":
                        t.updated_at || (t.updated_at = {}),
                        t.updated_at.from = i;
                        break;
                    case "label[]":
                    case "is_read[]":
                        t.statuses = t.statuses || {},
                        t.statuses[n.replace("[]", "")] = m().isArray(i) ? i : [i];
                        break;
                    default:
                        t[n] = m().isArray(i) ? i : [i]
                    }
                    return t
                }
                ), {}, this)
                  , n = !0;
                return n = m().every(i, (function(e, i) {
                    var n = i.replace("[]", "");
                    switch (i) {
                    case "filter[date_preset]":
                        return this.checkPresetNotification(t.get("updated_at"), e[0]);
                    case "updated_at":
                        return this.checkTimeNotification(t.get(n), e);
                    case "sources":
                    case "statuses":
                        return m().some(e, (function(e, i) {
                            return !m().isUndefined(t.get(i)) && t.get(i).toString() && -1 !== e.indexOf(t.get(i).toString())
                        }
                        ));
                    default:
                        return !m().isUndefined(t.get(n)) && t.get(n).toString() && -1 !== e.indexOf(t.get(n).toString())
                    }
                }
                ), this),
                this.excludeTypeEntryCheck(t) && (n = !1),
                n
            },
            checkPresetNotification: function(t, e) {
                var i = (0,
                I.default)(e);
                return t >= parseInt(i.from) && t <= parseInt(i.to)
            },
            checkTimeNotification: function(t, e) {
                var i = c()(e.from, APP.system.format.date.date).format("X")
                  , n = c()(e.to, APP.system.format.date.date).set({
                    hours: 23,
                    minutes: 59,
                    second: 59
                }).format("X");
                return t >= i && t <= n
            },
            canNotFoundNotificationBeShown: function() {
                return 0 === this.notifications.length
            },
            canNotFoundNotificationBeRemoved: function() {
                return !(1 === this.notifications.length && "fake" === this.notifications.at(0).get("id"))
            },
            initSource: function() {
                this.source_loader.init(m().bind((function(t, e) {
                    var i = this.notifications.model;
                    t.error && (this.current_state = T.default.STATE_SHOW_ERROR,
                    this.showError(),
                    this.hideLoading(),
                    e.resolve()),
                    t.items && m().each(t.items, m().bind((function(t) {
                        var e = new i(t);
                        this.excludeTypeEntryCheck(e) || this.createNotificationModel(t)
                    }
                    ), this)),
                    this.canNotFoundNotificationBeShown() && this.addNotFoundNotification(),
                    this.readable_ids.length > 0 && this.read({
                        id: this.readable_ids
                    }),
                    this.notifications.sort(),
                    this.current_state = T.default.STATE_SHOW_CONTENT,
                    this.hideLoading(),
                    e.resolve()
                }
                ), this))
            },
            addNotFoundNotification: function() {
                this.notifications.add({
                    id: "fake",
                    type: "user_not_found"
                })
            },
            removeNotFoundNotification: function() {
                this.notifications.remove("fake")
            },
            scrollToTop: m().noop,
            onVirtualizedListScroll: function() {},
            onSelectItemClick: function(t) {
                var e, i = r()(t.currentTarget), n = i.attr("data-custom-action-hash"), o = Boolean(null === (e = this.multiaction) || void 0 === e ? void 0 : e.is_show);
                if (n)
                    this.fulfillItemCustomAction(n);
                else if (o && (t.stopPropagation(),
                t.preventDefault()),
                !(t.metaKey || t.ctrlKey || o)) {
                    var a = this.notifications.get(i.attr("data-id"));
                    (null == a ? void 0 : a.get("click")) && a.set("selected", !0)
                }
            },
            onShowMoreClick: function(t) {
                var e = this.notifications.get(r()(t.currentTarget).closest(this._selector("item")).attr("data-id"));
                t.stopPropagation(),
                t.preventDefault(),
                e && e.set("opened", !e.get("opened"))
            },
            onItemSelected: function(t) {
                if (t.get("selected")) {
                    var e = m().propertyOf(APP.constant("account"))(["amo_messenger", "direct_migrated"])
                      , i = t.get("click").type;
                    if (t.get("is_native_link"))
                        t.set("selected", !1);
                    else {
                        if (e) {
                            if (t.get("amo_link"))
                                return this._redirectToAmo({
                                    id: t.get("id"),
                                    amo_link: t.get("amo_link")
                                }),
                                void t.set("selected", !1);
                            if (m().contains(["chat_group_create"], i))
                                return void t.set("selected", !1)
                        }
                        switch (!0) {
                        case "chat_group" === i:
                        case "chat_group_create" === i:
                        case "chat_direct" === i:
                            this.openChat(t.toJSON());
                            break;
                        case !m().isUndefined(t.get("web_link")):
                            t.set("selected", !1)
                        }
                    }
                }
            },
            _redirectToAmo: function(t) {
                var e = t.amo_link;
                P.amo_window.open(e)
            },
            onWindowKeyDown: function(t) {
                this.directChatOpening || (t === T.default.ENTER && this.notifications.select(),
                t === T.default.ARROW_DOWN && this.notifications.preselect(1),
                t === T.default.ARROW_UP && this.notifications.preselect(-1),
                m().contains([T.default.ENTER, T.default.ARROW_DOWN, T.default.ARROW_UP], t) && this.hide())
            },
            hide: function() {
                var t = m().propertyOf(this)(["search", "filter"]);
                t && m().isFunction(t.hide) && t.hide(),
                this.current_mode === T.default.MODE_ONLY_SUPPORT && (this.current_mode = T.default.MODE_NORMAL,
                U.default.toggleLeftMenu(),
                this.search && this.search.enableSearch(),
                this.resetFilter()),
                this.multiactionClose()
            },
            initSearch: function(t) {
                return Y((function() {
                    var e, n;
                    return Z(this, (function(o) {
                        switch (o.label) {
                        case 0:
                            return this.search ? [2] : [4, Promise.all([i.e(10456), i.e(44962)]).then(i.bind(i, 44962))];
                        case 1:
                            return e = o.sent(),
                            n = e.default,
                            this.search = this._addComponent(n, m().extend({
                                el: this.el.querySelector(".search-container-wrapper"),
                                getPresets: m().bind(this.requestPresets, this),
                                onCloseChat: m().bind((function() {
                                    this.opened_direct_chat && "create_group" === this.opened_direct_chat.id && this.opened_direct_chat.trigger("onClosed")
                                }
                                ), this),
                                onFilterItems: m().bind((function(t) {
                                    this.data = [],
                                    this.showLoading(),
                                    this.multiactionClose(),
                                    this.loadData(t)
                                }
                                ), this),
                                onTermIsValid: m().bind((function() {
                                    this.loader && this._destroyComponent(this.loader)
                                }
                                ), this),
                                onTermIsInvalid: m().bind((function() {
                                    this.autoloadContent()
                                }
                                ), this),
                                startClickDown: m().bind(this.onWindowKeyDown, this),
                                onFilterToggle: m().bind((function(t) {
                                    this.$el.toggleClass("inbox-filter_open", t)
                                }
                                ), this)
                            }, t || {})),
                            [2]
                        }
                    }
                    ))
                }
                )).apply(this)
            },
            getFilterOptions: function() {
                if (this.search)
                    return this.search.getFilterOptions()
            },
            getFilterSource: function() {
                if (this.search)
                    return this.search.getFilterSource()
            },
            fulfillItemCustomAction: function(t) {
                return Y((function() {
                    var e, n, o, a, r, s, c, d, u, f, h, _, p, m;
                    return Z(this, (function(b) {
                        switch (b.label) {
                        case 0:
                            return [4, Promise.all([i.e(93204).then(i.bind(i, 893204)), i.e(82994).then(i.bind(i, 382994)), i.e(69494).then(i.bind(i, 369494)), i.e(71629).then(i.bind(i, 671629)), i.e(61954).then(i.bind(i, 361954)), i.e(78939).then(i.bind(i, 178939))])];
                        case 1:
                            switch (e = $.apply(void 0, [b.sent(), 6]),
                            n = e[0],
                            o = n.default,
                            a = e[1],
                            r = a.default,
                            s = e[2],
                            c = s.default,
                            d = e[3],
                            u = d.default,
                            f = e[4],
                            h = f.default,
                            _ = e[5],
                            p = _.default,
                            m = (0,
                            H.isExpired)(),
                            t) {
                            case r:
                                l().publish(o, !0),
                                this.hide();
                                break;
                            case u:
                                l().publish(c, !0),
                                this.hide();
                                break;
                            case h:
                                if (m) {
                                    APP.router.navigate("/settings/pay/", {
                                        trigger: !0
                                    });
                                    break
                                }
                                l().publish(p, !0),
                                this.hide()
                            }
                            return [2]
                        }
                    }
                    ))
                }
                )).apply(this)
            },
            firstApply: function() {
                var t = m().min(this.presets, "sort").payload
                  , e = {};
                this.current_mode === T.default.MODE_ONLY_SUPPORT ? e.provider = [(0,
                F.getSupportBotId)()] : m().each(t, m().bind(this.firstApplyMutator, this, e)),
                this.apply({
                    is_first: !0,
                    first_preset_data: e
                })
            },
            firstApplyMutator: function(t, e, i) {
                switch (i) {
                case "is_read[]":
                    if (m().isArray(e))
                        return;
                    break;
                case "filter[date_preset]":
                    return void (m().isEmpty(e) || (t.updated_at || (t.updated_at = {}),
                    t.updated_at = (0,
                    I.default)(e)));
                case "updated_at_from":
                case "updated_at_to":
                    return void (m().isEmpty(e) || (t.updated_at || (t.updated_at = {}),
                    "updated_at_from" === i ? t.updated_at.from = c()(e, APP.system.format.date.date).format("X") : t.updated_at.to = c()(e, APP.system.format.date.date).set({
                        hours: 23,
                        minutes: 59,
                        second: 59
                    }).format("X")))
                }
                m().isEmpty(e) || (t[i.replace("[]", "")] = e)
            },
            show: function() {
                return Y((function() {
                    return Z(this, (function(t) {
                        switch (t.label) {
                        case 0:
                            return [4, Promise.all([this.initSearch(), this.initMultiaction()])];
                        case 1:
                            return t.sent(),
                            this.firstApply(),
                            this.search ? [4, this.search.initFilter()] : [3, 3];
                        case 2:
                            t.sent(),
                            t.label = 3;
                        case 3:
                            return this.filter_deferred.resolve(),
                            [2]
                        }
                    }
                    ))
                }
                )).apply(this)
            },
            initSound: function() {
                return Y((function() {
                    var t, e;
                    return Z(this, (function(n) {
                        switch (n.label) {
                        case 0:
                            return this.sound ? [2] : [4, i.e(13754).then(i.bind(i, 213754))];
                        case 1:
                            return t = n.sent(),
                            e = t.default,
                            this.sound = this._addComponent(e, {
                                el: this._elem("sound_toggler").get(0),
                                storage_id: this.sound_id
                            }),
                            [2]
                        }
                    }
                    ))
                }
                )).apply(this)
            },
            onSocketReconnectSynchronize: function() {
                if ((arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).status === B.SOCKET_STATE.CONNECTED) {
                    var t = this._elem("search_input").val()
                      , e = this.notifications.findWhere({
                        selected: !0
                    });
                    e && this.reconnectOpenedChat(e),
                    t ? this.search.filter.filterItems(t) : this.resetFilter(),
                    q.update()
                }
            },
            resetFilter: function() {
                var t;
                this.data = [],
                this.showLoading(),
                (null === (t = this.search) || void 0 === t ? void 0 : t.filter) && this.loadData({
                    reset: !0
                })
            },
            reconnectOpenedChat: function(t) {
                return Y((function() {
                    var e;
                    return Z(this, (function(i) {
                        switch (i.label) {
                        case 0:
                            return [4, this._getChatView(t.attributes)];
                        case 1:
                            return e = i.sent(),
                            this.opened_direct_chat = this._addComponent(e, this._getChatViewParams(t.attributes)),
                            this.opened_direct_chat.render(),
                            [2]
                        }
                    }
                    ))
                }
                )).apply(this)
            },
            completeTask: function(t, e) {
                return Y((function() {
                    return Z(this, (function(n) {
                        switch (n.label) {
                        case 0:
                            t.preventDefault(),
                            n.label = 1;
                        case 1:
                            return n.trys.push([1, 5, , 6]),
                            [4, (0,
                            W.completeTask)(e)];
                        case 2:
                            return "success" !== n.sent().status ? [3, 4] : [4, i.e(42532).then(i.bind(i, 942532))];
                        case 3:
                            new (0,
                            n.sent().default)({
                                id: e.id,
                                noreload: !0
                            }),
                            n.label = 4;
                        case 4:
                            return [3, 6];
                        case 5:
                            return n.sent(),
                            [3, 6];
                        case 6:
                            return [2]
                        }
                    }
                    ))
                }
                ))()
            },
            processNotificationFetch: function(t, e) {
                return j.default.fetchAction(t, e).then(m().bind((function(t) {
                    t._embedded && t._embedded.clear && this.resetFilter()
                }
                ), this))
            },
            processNotificationDelete: function(t) {
                var e = m().reduce(t.ids, (function(t, e) {
                    var i = this.getModelByNotificationId(e);
                    return "chat_direct" === (i.get("entity") && i.get("entity").type) ? t.concat(i.get("id")) : t
                }
                ), [], this);
                this.processNotificationFetch("delete", t).then(m().bind((function() {
                    m().each(e, (function(t) {
                        this.addUsersInBuffer(t)
                    }
                    ), this)
                }
                ), this))
            },
            processMultiaction: function(t, e) {
                "read" === t ? this.readNotification(e) : "delete" === t && this.deleteNotification(e)
            },
            readNotification: function(t) {
                (this.notifications.findWhere({
                    notification_id: m().propertyOf(t)(["ids", 0])
                }) || t.choose_all) && this.processNotificationFetch("read", t)
            },
            deleteNotification: function(t) {
                (this.notifications.findWhere({
                    notification_id: m().propertyOf(t)(["ids", 0])
                }) || t.choose_all) && (this.confirm_modal = this._addComponent(S.default, {
                    class_name: "modal-list",
                    decline_text: (0,
                    E.i18n)("No"),
                    accept_text: (0,
                    E.i18n)("Yes"),
                    button_class: "button-input_blue",
                    text: (0,
                    E.i18n)("Are you sure you want to delete?").replace(" #PLACEHOLDER#", ""),
                    accept: m().bind((function() {
                        this.processNotificationDelete(t),
                        this.confirm_modal.destroy()
                    }
                    ), this)
                }))
            },
            connect: function() {
                var t = z.default.subscribe(["notifications:".concat(APP.constant("account").id, ":").concat(APP.constant("user").id)]).pipe(f.filter((function(t) {
                    return (0,
                    x.hasKeys)(t, ["body", "payload"])
                }
                )), f.map((function(t) {
                    return t.body.payload
                }
                )), f.tap({
                    next: m().bind((function(t) {
                        this.refreshCounter(t)
                    }
                    ), this)
                }), f.share())
                  , e = t.pipe(f.filter((function(t) {
                    return "update" === t.action
                }
                )), f.map((function(t) {
                    return t.notifications
                }
                )))
                  , i = t.pipe(f.filter((function(t) {
                    return "read" === t.action
                }
                )), f.map((function(t) {
                    return t.ids
                }
                )))
                  , n = t.pipe(f.filter(m().bind((function(t) {
                    return t.action === this.getLabelParamName()
                }
                ), this)), f.map((function(t) {
                    return {
                        ids: t.ids,
                        label: t.label
                    }
                }
                )))
                  , o = t.pipe(f.filter((function(t) {
                    return "delete" === t.action
                }
                )), f.map((function(t) {
                    return t.ids
                }
                )));
                this.socket.add(e.subscribe(m().bind(this.onMessageReceived, this))),
                this.socket.add(i.subscribe(m().bind(this.onMessageRead, this))),
                this.socket.add(n.subscribe(m().bind(this.onMessageLabel, this))),
                this.socket.add(o.subscribe(m().bind(this.onMessageRemove, this))),
                z.default.onConnectionChange(m().bind(this.onSocketReconnectSynchronize, this))
            },
            read: function(t) {
                var e = this
                  , i = (0,
                w.current)("id")
                  , n = m().propertyOf((0,
                w.get)(i))("group")
                  , o = n ? Number(n.split("_")[1]) : null;
                return !m().isNull(this.readable_ids) && this.readable_ids.length > 0 && (this.readable_ids = []),
                u.from(M.default.checkAuth((function() {
                    var i = r().Deferred()
                      , n = [r().ajax({
                        type: "POST",
                        url: e.api.read,
                        contentType: "application/json",
                        data: JSON.stringify(m().omit(t, "chat_ids"))
                    })];
                    return t.chat_ids && t.chat_ids.length && n.push((0,
                    L.readChat)(t.chat_ids, o).toPromise()),
                    Promise.all(n).then((function(t) {
                        i.resolve(t[0])
                    }
                    )),
                    i
                }
                ))).pipe(f.filter((function(t) {
                    return (0,
                    x.hasKeys)(t, ["_embedded", "ids"])
                }
                )), f.map(m().bind((function(t) {
                    return this.reAskNotification(t._embedded.ids),
                    t._embedded.ids
                }
                ), this)))
            },
            getModelByNotificationId: function(t) {
                return this.notifications.find((function(e) {
                    return e.get("notification_id") === t
                }
                ))
            },
            onMessageRead: function(t) {
                var e = []
                  , i = [];
                return m().each(t, (function(t) {
                    var n = this.getModelByNotificationId(t);
                    n ? (n.set("is_read", !0, {
                        sort: !1
                    }),
                    n.set("first_unanswered_message_at", null, {
                        sort: !1
                    }),
                    this.filterEntryCheck(n) || (this.notifications.remove(n.id),
                    i.push(t))) : e.push(t)
                }
                ), this),
                e.length && this.reAskNotification(e),
                this.notifications.sort(),
                i
            },
            onMessageLabel: function(t) {
                var e = t.ids
                  , i = t.label
                  , n = [];
                m().each(e, (function(t) {
                    var e = this.getModelByNotificationId(t);
                    e ? (e.set(this.getLabelParamName(), i, {
                        sort: !1
                    }),
                    this.filterEntryCheck(e) || this.notifications.remove(e.id)) : n.push(t)
                }
                ), this),
                n.length && this.reAskNotification(n),
                this.notifications.sort()
            },
            reAskNotification: function(t) {
                return r().ajax({
                    url: this.api.list,
                    data: {
                        filter: {
                            id: t
                        }
                    }
                }).then(m().bind((function(t) {
                    m().propertyOf(t)(["_embedded", "items"]) && m().each(t._embedded.items, m().bind((function(t) {
                        var e;
                        "chat_direct" === m().propertyOf(t)(["entity", "type"]) ? (e = this.notifications.get(t.id),
                        this.notifications.remove(e ? t.id : t.entity.id)) : this.notifications.remove(t.id),
                        this.createNotificationModel(t),
                        this.notifications.sort()
                    }
                    ), this))
                }
                ), this))
            },
            onMessageRemove: function(t) {
                var e = this;
                return m().reduce(t, (function(t, i) {
                    var n = e.getModelByNotificationId(i);
                    return n ? (e.notifications.remove(n.get("id")),
                    t.concat(i)) : t
                }
                ), [])
            },
            onMessageReceived: function(t) {
                var e;
                m().each(t, m().bind((function(t) {
                    var i = new (0,
                    this.notifications.model)(t);
                    !1 === (t = i.toJSON()).is_read && (this.readTypes(t),
                    this.readable_ids.length > 0 && this.inbox_fully_opened && this.read({
                        id: this.readable_ids
                    }),
                    e = m().reduce(this.readers, (function(e, i) {
                        return m().extend(e, i(t))
                    }
                    ), {}),
                    m().isEmpty(e) || this.read(e)),
                    this.current_state !== T.default.STATE_SHOW_CONTENT || this.search.filter_is_active || this.addNotification(i, {
                        merge: !0
                    }),
                    t.silent || this.disableNotificationEntryCheck(i) || this.showNotification(t),
                    this._checkChatCreated(t)
                }
                ), this))
            },
            disableNotificationEntryCheck: function(t) {
                return this.excludeTypeEntryCheck(t)
            },
            showNotification: function(t) {
                return Y((function() {
                    return Z(this, (function(e) {
                        switch (e.label) {
                        case 0:
                            return [4, this.initSound()];
                        case 1:
                            return e.sent(),
                            this.sound.playSoundMessage(),
                            v().hidden() ? this.showPushNotification(t) : this.didNotifyAllowed(t) && this.showInternalNotification(t),
                            [2]
                        }
                    }
                    ))
                }
                )).apply(this)
            },
            showInternalNotification: m().debounce((Q = Y((function(t) {
                var e, n, o, a, s, c;
                return Z(this, (function(d) {
                    switch (d.label) {
                    case 0:
                        e = this.notifications.model,
                        n = new e(t),
                        (t = n.toJSON()).notification = !0,
                        d.label = 1;
                    case 1:
                        return d.trys.push([1, 3, , 4]),
                        [4, Promise.all([i.e(79041).then(i.bind(i, 479041)), _()._preload(["/tmpl/inbox/message.twig"])()])];
                    case 2:
                        return o = $.apply(void 0, [d.sent(), 1]),
                        a = o[0],
                        (s = a.default).subscribe((function() {
                            V.default.execCallbacks(t)
                        }
                        )),
                        s.create(_()({
                            ref: "/tmpl/inbox/message.twig"
                        }).render(t), function(t) {
                            for (var e = 1; e < arguments.length; e++) {
                                var i = null != arguments[e] ? arguments[e] : {}
                                  , n = Object.keys(i);
                                "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(i).filter((function(t) {
                                    return Object.getOwnPropertyDescriptor(i, t).enumerable
                                }
                                )))),
                                n.forEach((function(e) {
                                    J(t, e, i[e])
                                }
                                ))
                            }
                            return t
                        }({
                            containerId: this._selector("toast_container"),
                            toastClass: "popup-inbox",
                            closeHtml: '<img class="popup-inbox__close" src="/frontend/images/interface/inbox/close_notification.svg">',
                            closeButton: !0,
                            onclick: m().bind((function(t) {
                                this.addNotification(n, {
                                    merge: !0
                                }),
                                t.currentTarget = r()(t.currentTarget).children(this._selector("item")).get(0),
                                this.onSelectItemClick(t, {
                                    trigger: !0
                                })
                            }
                            ), this)
                        }, t.toast_options)),
                        [3, 4];
                    case 3:
                        throw c = d.sent(),
                        new Error(c);
                    case 4:
                        return [2]
                    }
                }
                ))
            }
            )),
            function(t) {
                return Q.apply(this, arguments)
            }
            ), 100),
            _isPushSupported: function() {
                return "Notification"in window
            },
            _isPushAllowed: function() {
                return "granted" === it
            },
            requestPushPermission: function() {
                !et && this._isPushSupported() && Notification && Notification.requestPermission && (Notification.requestPermission(m().bind((function(t) {
                    it = t,
                    this._$document.trigger("notification:request:permission", t)
                }
                ), this)),
                et = !0)
            },
            showPushNotification: function(t) {
                var e, i = "";
                if (this._isPushSupported() && this._isPushAllowed()) {
                    var n;
                    t.body && (t.body.preview ? i = t.body.preview : m().each(t.body.rows, (function(t) {
                        i += t.text
                    }
                    )));
                    var o = null !== (n = null === (e = t.click) || void 0 === e ? void 0 : e.value) && void 0 !== n ? n : "".concat(t.notification_id, ": ").concat(t.created_at)
                      , a = new Notification((0,
                    E.stripTags)(t.body.title),{
                        lang: APP.lang_id,
                        body: (0,
                        E.stripTags)(i),
                        icon: (0,
                        x.hasKeys)(t, ["body", "icon", "value"]) ? t.body.icon.value : "",
                        tag: o
                    });
                    a.onclick = m().bind((function() {
                        this.focusWindow(),
                        this.onPushNotificationClick(t),
                        a.close()
                    }
                    ), this),
                    a.onshow = m().bind((function() {
                        this.push_hide_timers[o] && clearTimeout(this.push_hide_timers[o]),
                        this.push_hide_timers[o] = m().delay((function() {
                            a.close()
                        }
                        ), 1e4)
                    }
                    ), this),
                    a.onerror = m().noop,
                    a.onclose = m().bind((function() {
                        this.push_hide_timers[o] && clearTimeout(this.push_hide_timers[o])
                    }
                    ), this)
                }
            },
            onPushNotificationClick: function(t) {
                var e, i = (t.click || {}).type;
                if (!t.is_native_link)
                    if (t.amo_link)
                        this._redirectToAmo({
                            id: t.id,
                            amo_link: t.amo_link
                        });
                    else
                        switch (i) {
                        case "chat_direct":
                        case "chat_group":
                            this.openChat(t),
                            this.scrollToTop();
                            break;
                        default:
                            t.web_link && (this.focusWindow(),
                            "/" === t.web_link[0] || /^(https?:\/\/)?([0-9a-z\-.]{1,})(\.amocrm\.(ru|com)|\.amocrm2\.saas).*/i.test(t.web_link) ? APP.router.navigate(t.web_link, {
                                trigger: !0
                            }) : ((e = window.open()).opener = null,
                            e.location = t.web_link))
                        }
            },
            focusWindow: function() {
                window.focus()
            },
            afterFirstLoad: function() {
                return this.apply_deferred
            },
            afterFilterInit: function() {
                return this.filter_deferred
            },
            apply: function(t) {
                var e = r().Deferred()
                  , i = this;
                switch (this.no_content && this.loadData({
                    reset: !0
                }).then((function() {
                    for (var t = arguments.length, n = new Array(t), o = 0; o < t; o++)
                        n[o] = arguments[o];
                    e.resolve.apply(null, n),
                    i.apply_deferred.resolve.apply(null, n)
                }
                )),
                this.current_state) {
                case T.default.STATE_ONLY_SUPPORT:
                case T.default.STATE_UNINITIALIZED:
                case T.default.STATE_SHOW_ERROR:
                    this.loadData({
                        reset: !0,
                        is_init: t.is_first,
                        init_data: t.first_preset_data
                    }).then((function() {
                        e.resolve(),
                        i.apply_deferred.resolve()
                    }
                    ));
                    break;
                default:
                    e.resolve(),
                    this.apply_deferred.resolve()
                }
                return e
            },
            showError: m().noop,
            showContent: function(t) {
                this.current_state = T.default.STATE_SHOW_CONTENT,
                t.length > 0 && m().each(t, (function(t) {
                    this.addNotification(t)
                }
                ), this)
            },
            loadData: function(t) {
                var e = this;
                return new Promise((function(i, n) {
                    _()._preload(["/tmpl/inbox/direct_chat/item.twig", "stylesheets/_chunks/cards.css"])().then((function() {
                        e._loadData(t).then(i, n)
                    }
                    ))
                }
                ))
            },
            _loadData: function(t) {
                var e = this
                  , i = r().Deferred();
                return t = t || {},
                this.search && (t = m().extend(t, this.search.fetch_options),
                this.notifications.setOrder(this.search.order),
                t.is_init ? t.filter = t.init_data : t.filter = this.search.filter.getFilterState(),
                t.order = this.search.order),
                !t.reset && (this.current_state === T.default.STATE_SHOW_LOADING || this.source_loader.isFinished() && m().isEmpty(t.filter) && !t.from_create) ? i.resolve() : (t.onFetchResponse || (t.onFetchResponse = function(t) {
                    e.refreshCounter(t)
                }
                ),
                this.current_state = T.default.STATE_SHOW_LOADING,
                t.reset && (this.showLoading(),
                this.notifications.reset()),
                this.source_loader.onNewOption(t, m().bind((function(t) {
                    this.no_content = t
                }
                ), this), i),
                this.opened_direct_chat && t.from_create && this.opened_direct_chat.trigger("chatsFetched"),
                i.promise())
            },
            readTypes: function(t) {
                !1 !== t.is_read || t.body.actions && t.body.actions.click && !t.body.actions.read_on_show || this.readable_ids.push(t.notification_id)
            },
            createNotificationModel: function(t) {
                var e = new (0,
                this.notifications.model)(t);
                this.readTypes(e.attributes),
                this.opened_direct_chat && this.opened_direct_chat.model && e.id.toString() === this.opened_direct_chat.model.id.toString() && (e.set({
                    selected: !0
                }, {
                    silent: !0
                }),
                this.opened_direct_chat.model = e),
                e.get("entity") && parseInt(m().propertyOf(e.get("entity"))("id")) === (0,
                w.current)("id") || this.addNotification(e, {
                    sort: !1
                })
            },
            autoloadContent: function() {
                this.loader = this._addComponent(k.default, {
                    element: this._findElem("inbox_container").get(0),
                    throttle: 300,
                    conditions: {
                        "max-bottom": 1168
                    },
                    onLoadMore: m().bind(this.loadData, this)
                })
            },
            requestBadge: function() {
                var t = this;
                return this.badge = q.listen(this.badge_id).subscribe((function(e) {
                    t.refreshCounter(e)
                }
                )),
                r().Deferred().resolve()
            },
            getCounterEl: function() {
                return r()(".inbox-counter")
            },
            refreshCounter: function(t) {
                var e = t[this.badge_id]
                  , i = this.getCounterEl();
                m().isUndefined(e) || (parseInt(e) > 0 ? i.text(e).removeClass("hidden") : i.text(0).addClass("hidden"))
            },
            requestPresets: function() {
                var t = r().Deferred();
                return null === this.presets ? (0,
                g.onPageFullyLoaded)(m().bind((function() {
                    r().ajax("/v3/inbox/filter/presets").done(m().bind((function(e) {
                        var i = e || {};
                        return this.presets = i.presets || [],
                        t.resolve(this.presets),
                        this.presets
                    }
                    ), this)).fail(t.reject)
                }
                ), this)) : t.resolve(this.presets),
                t.promise()
            },
            showLoading: function() {
                this._toggleClass("loading", "search_container", !0),
                this._toggleClass("loading", "inbox__spiner", !0),
                APP.first_load && (0,
                D.logPerformanceMetric)({
                    type: (0,
                    D.getRealCardPageType)(),
                    name: "chatFcp"
                })
            },
            hideLoading: function() {
                this._toggleClass("loading", "search_container", !1),
                this._toggleClass("loading", "inbox__spiner", !1),
                this.trigger("inbox:loaded:fully"),
                APP.first_load && (0,
                D.logPerformanceMetric)({
                    type: (0,
                    D.getRealCardPageType)(),
                    name: "chatTti"
                })
            },
            addNotifyFilter: function(t) {
                var e = this;
                return this.filters.push(t),
                {
                    remove: function() {
                        var i = m().indexOf(e.filters, t);
                        i > -1 && e.filters.splice(i, 1)
                    }
                }
            },
            didNotifyAllowed: function(t) {
                var e = !0;
                return this.filters.forEach((function(i) {
                    i(t) || (e = !1)
                }
                )),
                e
            },
            _isChatAlreadyOpened: function(t) {
                return null !== this.opened_direct_chat && this.opened_direct_chat.getId() === t.toString()
            },
            _getChatView: function(t) {
                return Y((function() {
                    return Z(this, (function(e) {
                        switch (e.label) {
                        case 0:
                            switch (m().propertyOf(t)(["click", "type"])) {
                            case "chat_group":
                                return [3, 1];
                            case "chat_group_create":
                                return [3, 3];
                            case "chat_direct":
                                return [3, 5]
                            }
                            return [3, 5];
                        case 1:
                            return [4, Promise.all([i.e(95882), i.e(21581), i.e(79985), i.e(40182), i.e(61887), i.e(67642), i.e(27146)]).then(i.bind(i, 76551))];
                        case 2:
                            return [2, e.sent().default];
                        case 3:
                            return [4, Promise.all([i.e(95882), i.e(21581), i.e(79985), i.e(40182), i.e(61887), i.e(67642), i.e(97633)]).then(i.bind(i, 11138))];
                        case 4:
                            return [2, e.sent().default];
                        case 5:
                            return [4, Promise.all([i.e(95882), i.e(21581), i.e(79985), i.e(40182), i.e(61887), i.e(67642), i.e(28099), i.e(97160)]).then(i.bind(i, 877399))];
                        case 6:
                            return [2, e.sent().default];
                        case 7:
                            return [2]
                        }
                    }
                    ))
                }
                ))()
            },
            _getChatViewParams: function(t) {
                return {
                    id: t.id,
                    model: t.notification_id ? this.getModelByNotificationId(t.notification_id) : this.notifications.get(t.id),
                    $container: this._getDirectChatContainer()
                }
            },
            _getDirectChatContainer: function() {
                return this._elem("direct_chat_container")
            },
            _toggleDirectChatOpenedState: function(t) {
                this._toggleClass("direct_chat_enabled", this.$el, t)
            },
            _checkChatCreated: function(t) {
                (0,
                x.hasKeys)(t, ["click", "type"]) && t.click.type === T.default.TYPE_GROUP && null !== this.opened_direct_chat && this.opened_direct_chat.trigger("chatCreated", t)
            },
            openChat: function(t) {
                return Y((function() {
                    var e, i, n, o, a;
                    return Z(this, (function(r) {
                        switch (r.label) {
                        case 0:
                            return this.multiactionClose(),
                            this._isChatAlreadyOpened(t.id) ? [2, Promise.reject()] : (this.directChatOpening = !0,
                            [4, this._getChatView(t)]);
                        case 1:
                            return i = r.sent(),
                            n = this._addComponent(i, this._getChatViewParams(t)),
                            o = this.closeDirectChat({
                                is_before_opening: !0
                            }).then(m().bind((function() {
                                return this.opened_direct_chat = n,
                                this.opened_direct_chat.on("onClosed", m().bind(this.closeDirectChat, this)),
                                t.click && "chat_group_create" === t.click.type && (this.opened_direct_chat.on("openChat", m().bind(this.openChat, this)),
                                this.opened_direct_chat.on("fetchData", m().bind(this.loadData, this))),
                                this.directChatOpening = !1,
                                Promise.resolve()
                            }
                            ), this)),
                            this._toggleDirectChatOpenedState(!0),
                            e = t.notification_id ? this.getModelByNotificationId(t.notification_id) : this.notifications.get(t.id),
                            a = n.render().then(m().bind((function() {
                                return n.showAnimation(),
                                n.$el.show(),
                                e && e.set({
                                    selected: !0
                                }),
                                Promise.resolve()
                            }
                            ), this)),
                            [2, Promise.all([a, o])]
                        }
                    }
                    ))
                }
                )).apply(this)
            },
            closeDirectChat: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                  , e = r().Deferred();
                return m().isNull(this.opened_direct_chat) || m().isUndefined(this.opened_direct_chat) || (this.opened_direct_chat.trigger("closeDirectChat"),
                this._toggleDirectChatOpenedState(!1, t),
                this._toggleClass("chat_create_active", this._elem("chat_create_cross"), !1),
                this.opened_direct_chat.model && this.opened_direct_chat.model.set({
                    selected: !1
                }),
                this._destroyComponent(this.opened_direct_chat),
                this._getDirectChatContainer().empty(),
                this.opened_direct_chat = null),
                e.resolve(),
                e.promise()
            },
            destroyQuickActionMenu: function() {
                this.notification_quick_action && (this._destroyComponent(this.notification_quick_action),
                this.notification_quick_action = null)
            },
            initQuickActionMenu: function(t) {
                return Y((function() {
                    var e, n;
                    return Z(this, (function(o) {
                        switch (o.label) {
                        case 0:
                            return [4, i.e(35815).then(i.bind(i, 935815))];
                        case 1:
                            return e = o.sent(),
                            n = e.default,
                            this.notification_quick_action = this._addComponent(n, m().extend({
                                onButtonClick: m().bind(this.processMultiaction, this)
                            }, t)),
                            [2]
                        }
                    }
                    ))
                }
                )).apply(this)
            },
            createGroupChat: function() {
                this.openChat({
                    click: {
                        type: "chat_group_create"
                    },
                    id: "create_group",
                    entity: {
                        id: "create_group"
                    }
                })
            },
            getAddModelDirect: function(t) {
                var e, i, n, o = this.notifications.model, a = O.default.getRecipient(t);
                return !!a && (a.is_bot ? (i = {
                    bot: a.id,
                    sub: "chat_direct"
                },
                n = {
                    chat_bot: a.id
                }) : (i = {
                    profile: a.id,
                    sub: "chat_direct"
                },
                n = {
                    chat_direct: a.id
                }),
                e = new o({
                    id: a.id,
                    body: {
                        title: a.title,
                        icon: i,
                        actions: {
                            click: n
                        }
                    },
                    last_message: {
                        id: 0
                    },
                    is_read: !0,
                    is_bot: !0 === a.is_bot,
                    entity: {
                        type: "chat_direct",
                        id: a.id
                    },
                    created_at: 0,
                    updated_at: 0
                }),
                this.addNotification(e, {
                    merge: !0
                }),
                e)
            },
            openDirectChat: function(t) {
                var e = this.notifications.get(t);
                this.current_state !== T.default.STATE_UNINITIALIZED && this.current_state !== T.default.STATE_ONLY_SUPPORT ? (e || (e = this.getAddModelDirect(t)),
                this.openChat(e.attributes)) : this.show().then(m().bind((function() {
                    this.openDirectChat(t)
                }
                ), this))
            },
            showOnlySupport: function(t) {
                this.inbox_fully_opened && this.hide(),
                this.current_mode = T.default.MODE_ONLY_SUPPORT,
                this.current_state = T.default.STATE_ONLY_SUPPORT,
                this.search && this.search.disableSearch(),
                this.openDirectChat(t)
            },
            getLabelParamName: function() {
                return "label"
            }
        });
        o().mixin(rt, K.default);
        const st = rt;
        var ct = "../build/transpiled/components/base/inbox/base";
        window.define(ct, (function() {
            var t = "undefined"
              , i = typeof e === t ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === t ? typeof module === t ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : e;
            return i && i.default || i
        }
        )),
        window.require([ct])
    }
    ,
    696884: (t, e, i) => {
        "use strict";
        i.r(e),
        i.d(e, {
            default: () => o
        });
        var n = ["845275ac-22e4-4778-9e9a-3b5d06e9e914", "45e0ff46-eef9-463f-a725-8b97dfd1cca0", "27850382-d297-47ab-a74c-544ee8cc895d", "7da05ed4-4a9d-48a9-a92f-efc81aff9e31", "eed2daac-a9fe-4b47-ab9f-d0ca5c0f17a6", "7691f5d1-d4f7-4466-9ac3-8a316b1557ae", "66396ad3-95f7-477d-bd4e-a596a94087c5", "966d8f59-55bc-4961-be32-f319c176a295", "49ae13e7-b75a-4fc0-9f39-c5c2812dcb34", "da877054-c483-4da2-91f7-2e5aeacbaedf", "b83b697f-1f6c-4726-b36b-a57b6593173b", "be2d1c42-351b-40d0-97b7-5d2e1314b079", "f6cb24c9-8d27-4a96-9720-9efd6af539c1", "de4475bb-73ad-4fe6-a2df-3d2b7cb7cb84"];
        (0,
        i(500034).isFeatureAvailable)("global_inbox") && n.push("3c9022fd-ac7d-48f4-ad24-7b5121417aa3");
        const o = {
            STATE_UNINITIALIZED: -1,
            STATE_SHOW_CONTENT: 1,
            STATE_SHOW_LOADING: 2,
            STATE_SHOW_ERROR: 3,
            STATE_ONLY_SUPPORT: 4,
            MODE_NORMAL: 1,
            MODE_ONLY_SUPPORT: 2,
            EVENT_READ: "read",
            EVENT_DELETE: "delete",
            EVENT_NEW: "new",
            LOCAL_STORAGE_KEY: "_amojo_direct",
            PAGE_COUNT: 50,
            ENTER: 13,
            ESC_KEY: 27,
            ENTER_KEY: 13,
            ARROW_DOWN: 40,
            ARROW_UP: 38,
            LEFT_MENU_WIDTH: 65,
            TYPE_DIRECT: "chat_direct",
            TYPE_GROUP: "chat_group",
            SYSTEM_CREATE_GROUP: "group_chat_create",
            AMO_CHATS_GROUP_TYPE: 18,
            FIXED_CORE_PROVIDERS: n,
            EMOTION_FILTER_NAME: "emotion",
            EMOTIONS: {
                NEUTRAL: "NEUTRAL",
                NEGATIVE: "NEGATIVE",
                POSITIVE: "POSITIVE"
            }
        };
        var a = "../build/transpiled/components/base/inbox/constants";
        window.define(a, (function() {
            var t = "undefined"
              , i = typeof e === t ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === t ? typeof module === t ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : e;
            return i && i.default || i
        }
        )),
        window.require([a])
    }
    ,
    463183: (t, e, i) => {
        "use strict";
        i.r(e),
        i.d(e, {
            default: () => O
        });
        var n = i(55188)
          , o = i.n(n)
          , a = i(949137)
          , r = i.n(a)
          , s = i(460159)
          , c = i.n(s)
          , d = i(880774)
          , l = i(579569)
          , u = i(500034)
          , f = i(960537)
          , h = i(293945)
          , _ = i(263770)
          , p = i(303391)
          , m = i(422700)
          , b = i(276650)
          , v = i(696884)
          , g = i(564638)
          , y = i(661533)
          , w = {}
          , E = []
          , x = {}
          , k = []
          , S = {}
          , T = []
          , A = function() {
            return r().apply(this, arguments)
        };
        (A.prototype = Object.create(r().prototype)).getRowOffset = function() {
            var t;
            try {
                t = r().prototype.getRowOffset.apply(this, arguments)
            } catch (e) {
                t = 0
            }
            return t
        }
        ,
        A.prototype.destroy = function(t) {
            this.container.removeEventListener("scroll", this.handleScroll),
            t && (this.container.innerHTML = ""),
            S = {},
            T = []
        }
        ;
        var C = function(t) {
            var e = this.notifications.at(t);
            return e && this._items_heights_cached[e.id] ? this._items_heights_cached[e.id] : 64
        }
          , N = function(t) {
            var e = this.notifications.at(t)
              , i = document.createElement("DIV");
            if (!e || !e.id)
                return i;
            var n, a, r = e.toJSON();
            r.label = e.get(this.getLabelParamName()),
            (0,
            u.isFeatureAvailable)(u.Features.EMOTION_DETECTOR_AVAILABLE) && (0,
            u.isFeatureAvailable)(u.Features.IS_EMOTION_DETECTOR_ENABLED) && (r.is_emotion_detector_enabled = !0,
            r.emotionDisplay = r.emotion === v.default.EMOTIONS.NEUTRAL ? (null === (n = S[e.id]) || void 0 === n ? void 0 : n.toLowerCase()) || v.default.EMOTIONS.NEGATIVE : null === (a = r.emotion) || void 0 === a ? void 0 : a.toLowerCase());
            var s, g, T, A, C, N = 0, O = "";
            switch (!0) {
            case !e:
            case !e.id:
                return i;
            case "amochats_connect_sources" === e.id:
                i.innerHTML = (0,
                b.default)();
                break;
            case "fake" === e.id && "user_not_found" === e.get("type"):
                i.innerHTML = (0,
                _.default)(this.no_content_text);
                break;
            case "go-to-add-channel" === e.id:
                i.innerHTML = (0,
                p.default)({
                    id: e.id,
                    title: (0,
                    d.i18n)("Add channels"),
                    text: (0,
                    d.i18n)("Capture leads from WhatsApp & more!")
                });
                break;
            case "go-to-invite-a-user" === e.id:
                i.innerHTML = (0,
                p.default)({
                    id: e.id,
                    title: (0,
                    d.i18n)("Invite team members (Conversation)"),
                    text: (0,
                    d.i18n)("Collaborate & sell together")
                });
                break;
            case "files-notification" === e.get("type"):
                i.innerHTML = (0,
                m.default)(e.attributes);
                break;
            default:
                N = r.id;
                try {
                    s = w[N].data === JSON.stringify(r)
                } catch (t) {
                    s = !1
                }
                if (o().isUndefined(w[N]) || !s) {
                    var P = {
                        data: r,
                        twig: c(),
                        user_online: (0,
                        l.isUserOnline)(e.id)
                    };
                    g = this.is_chats_notification_item_enabled ? (0,
                    h.createChatsNotificationItemTemplate)(P) : (0,
                    f.createNotificationItemTemplate)(P),
                    A = (T = y(g)).find(".notification-inner__avatar");
                    var I = c()._twig.filter("avatar", r.body.icon.avatar_id);
                    O = r.body.icon.value || I,
                    o().isUndefined(x[O]) && ((C = new Image).onerror = function() {
                        this.onerror = null,
                        this.src = I,
                        w[N].html = T[0].outerHTML
                    }
                    ,
                    C.src = O,
                    x[O] = C,
                    k.push(O)),
                    A.append(x[O]),
                    o().isUndefined(w[N]) && E.push(N),
                    w[N] = {},
                    w[N].html = T[0].outerHTML,
                    w[N].data = JSON.stringify(r)
                }
                (0,
                u.isFeatureAvailable)(u.Features.IS_EMOTION_DETECTOR_ENABLED) && (w[N].html = this._addEmotionStateClass(w[N].html, e)),
                i.innerHTML = w[N].html
            }
            return E.length >= 200 && (delete w[E[0]],
            E.shift()),
            k.length >= 200 && (delete x[k[0]],
            k.shift()),
            i.children[0]
        };
        const O = {
            initialize: function() {
                if (this.$el.length) {
                    this.$el.on("click" + this.ns, ".button-scroll", o().bind(this.clickButtonScroll, this));
                    var t = this._elem("inbox_container").get(0);
                    this._items_heights_cached = {},
                    this.checkVisibilityOpenChat = o().throttle(o().bind(this._checkVisibilityOpenChat, this), 1e3),
                    this.updateListView = o().throttle(o().bind(this._updateListView, this), 100, {
                        leading: !1
                    }),
                    this.listView = this._addComponent(A, t, {
                        height: t.offsetHeight,
                        rowCount: this.notifications.length,
                        overscanCount: 3,
                        rowHeight: o().bind(C, this),
                        renderRow: o().bind(N, this),
                        onScroll: o().bind(this.onVirtualizedScroll, this),
                        onRowsRendered: o().bind(this.onRowsRendered, this)
                    }),
                    this.listenTo(this.notifications, "add", this.onInboxListModify),
                    this.listenTo(this.notifications, "remove", this.onInboxListModify),
                    this.listenTo(this.notifications, "sort", this.onInboxListModify),
                    this.listenTo(this.notifications, "change", this.onInboxListModify),
                    this.listenTo(this.notifications, "reset", this.updateListView),
                    this.listenTo(this.notifications, "change", this.onChangeUpdateItemHeight),
                    this.listenTo(this.notifications, "change:selected", this.checkVisibilityOpenChat),
                    this.listenTo(this.notifications, "change:preselected", o().bind(this.scrollToActiveItem, this, {
                        preselected: !0
                    })),
                    this._$window.on("resize" + this.ns, o().throttle(o().bind(this.onVirtualizedResize, this), g.WINDOW_RESIZE_THROTTLE_DELAY))
                }
            },
            onVirtualizedResize: function() {
                this.listView && this._elem("inbox_container").is(":visible") && this.listView.resize(this._elem("inbox_container").get(0).offsetHeight)
            },
            onVirtualizedScroll: function() {
                this.onVirtualizedListScroll.apply(this, arguments),
                this.checkVisibilityOpenChat()
            },
            clickButtonScroll: function() {
                this.scrollToActiveItem({
                    selected: !0
                }),
                this.checkVisibilityOpenChat()
            },
            _checkVisibilityOpenChat: function() {
                var t = this.notifications.indexOf(this.notifications.findWhere({
                    selected: !0
                }))
                  , e = !1
                  , i = this.listView._sizeAndPositionManager.getVisibleRange({
                    containerSize: this.listView.state.height,
                    offset: this.listView.state.offset,
                    overscanCount: 0
                })
                  , n = t > i.stop;
                t > -1 && (e = !0,
                i.start <= t && i.stop >= t && (e = !1)),
                this._findElem("button_scroll").toggleClass("button-scroll_to-bottom", n).toggle(e)
            },
            _updateListView: function() {
                this.listView.setRowCount(this.notifications.length)
            },
            _addEmotionStateClass: function(t, e) {
                var i = y(t)
                  , n = i.find(".js-notification_emotion");
                if (n) {
                    var o = e.get("id")
                      , a = e.get("emotion")
                      , r = a === v.default.EMOTIONS.NEUTRAL;
                    switch (!0) {
                    case !r && Boolean(S[o]):
                        n.addClass("shown"),
                        n.removeClass("emotion-appear");
                        break;
                    case !r && Boolean(!S[o]):
                        if (n.addClass("emotion-appear"),
                        S[o] = a,
                        T.push(o),
                        T.length > 200) {
                            var s = T.shift();
                            delete S[s]
                        }
                        break;
                    case r && Boolean(S[o]):
                        n.addClass("emotion-disappear"),
                        delete S[o]
                    }
                    return i[0].outerHTML
                }
            },
            onInboxListModify: function(t) {
                var e = this.notifications.indexOf(t);
                (!this._visible_start || !this._visible_stop || -1 === e || e >= this._visible_start && e <= this._visible_stop) && this.updateListView()
            },
            onChangeUpdateItemHeight: function(t) {
                o().isEmpty(o().omit(t.changed, "selected", "preselected")) || this.updateItemMeasuredHeight(t)
            },
            updateItemMeasuredHeight: function(t) {
                var e = !1
                  , i = document.getElementById("inbox-notification-" + t.id);
                return i && i.offsetHeight && (this._items_heights_cached[t.id] = i.offsetHeight,
                e = !0),
                e
            },
            onRowsRendered: function(t) {
                this._visible_stop = t.stopIndex,
                this._visible_start = t.startIndex,
                this.setItemsHeights(t)
            },
            setItemsHeights: o().debounce((function(t) {
                for (var e, i = !1, n = t.startIndex; n <= t.stopIndex; n++) {
                    var o = this.notifications.at(n);
                    o && !this._items_heights_cached[o.id] && (e = this.updateItemMeasuredHeight(o),
                    i || (i = e))
                }
                i && this.updateListView()
            }
            ), 300),
            scrollToActiveItem: function(t) {
                var e = this.notifications.findWhere(t || {
                    preselected: !0
                });
                e && this.listView.scrollToIndex(this.notifications.indexOf(e), "center")
            },
            scrollToTop: function() {
                this.listView.scrollToIndex(0)
            }
        }
    }
    ,
    276650: (t, e, i) => {
        "use strict";
        i.r(e),
        i.d(e, {
            default: () => o
        });
        var n = i(880774);
        const o = function() {
            return '\n    <div class="amochats-connect-sources connect-sources" id="inbox-notification-amochats_connect_sources">\n      <div class="connect-sources__inner">\n        <div class="connect-sources__image"></div>\n\n        <div class="connect-sources__text">\n          '.concat((0,
            n.i18n)("Connect your channels and pages in social networks as sources and chats from customers will get into imBox in the form of talks"), '\n        </div>\n\n        <div class="connect-sources__list-wrapper">\n          <ul class="connect-sources__list">\n            <li class="connect-sources__item">\n              <button class="connect-sources__btn js-connect-sources-add-base" data-name="telegram" type="button">\n                <svg class="svg-icon svg-inbox--social--telegram-dims">\n                  <use xlink:href="#inbox--social--telegram"></use>\n                </svg>\n                <span>').concat((0,
            n.i18n)("Connect"), ' Telegram</span>\n              </button>\n            </li>\n            <li class="connect-sources__item">\n              <button class="connect-sources__btn js-connect-sources-add-base" data-name="vk" type="button">\n                <svg class="svg-icon svg-inbox--social--vk-dims">\n                  <use xlink:href="#inbox--social--vk"></use>\n                </svg>\n                <span>').concat((0,
            n.i18n)("Connect"), ' Vkontakte</span>\n              </button>\n            </li>\n            <li class="connect-sources__item">\n              <button class="connect-sources__btn js-connect-sources-add-widget" data-code="amochats_whatsapp" type="button">\n                <svg class="svg-icon svg-inbox--social--whatsapp-dims">\n                  <use xlink:href="#inbox--social--whatsapp"></use>\n                </svg>\n                <span>').concat((0,
            n.i18n)("Connect"), ' WhatsApp</span>\n              </button>\n            </li>\n            <li class="connect-sources__item">\n              <button class="connect-sources__btn connect-sources__btn--viber js-connect-sources-add-base" data-name="viber" type="button">\n                <svg class="svg-icon svg-inbox--social--viber-dims">\n                  <use xlink:href="#inbox--social--viber"></use>\n                </svg>\n                <span>').concat((0,
            n.i18n)("Connect"), " Viber</span>\n              </button>\n            </li>\n          </ul>\n        </div>\n      </div>\n    </div>\n  ")
        };
        var a = "../build/transpiled/components/base/inbox/notification_templates/amochats_connect_sources";
        window.define(a, (function() {
            var t = "undefined"
              , i = typeof e === t ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === t ? typeof module === t ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : e;
            return i && i.default || i
        }
        )),
        window.require([a])
    }
    ,
    293945: (t, e, i) => {
        "use strict";
        i.r(e),
        i.d(e, {
            createChatsNotificationItemTemplate: () => a
        });
        var n = i(55188)
          , o = i.n(n);
        function a(t) {
            var e = o().template('data-id="<%= data.id %>" id="inbox-notification-<%= data.id %>" class="notification notification--talk notification__item <%= data.label ? "notification__item_favirites" : "" %> <%= !data.provider && !data.body.is_talk ? "notification__item_not-multiaction" : "" %> <%= data.checked ? "notification_checked" : "" %> <% if (!data.preselected && !data.is_read) { print("notification__item__unread"); } %> notification-inner <% if (data.preselected) { print("notification-inner_preselected"); } else if (data.selected) { print("notification-inner_selected"); } %>"')(t)
              , i = o().template('\n    <% if (data.web_link) { %><a href="<%= data.web_link %>" class="<% if (data.absolute_link) { %>notification-inner__link<% } else { %>notification-inner__navigate-link js-navigate-link<% } %>" <% if (data.absolute_link) { %>target="_blank"<% } %>><% } %>\n\n    <div class="notification-chat__non-select">\n      <div class="<% if (data.body.icon.robot) { %>notification-chat__container-img_bot<% } else { %>notification-chat__container-img<% } %>">\n        <div class="n-avatar notification-inner__avatar <%= data.body.icon.border ? "notification-inner__avatar__border__blue" : "" %>" <% if (!_.isEmpty(data.id)) { %>id="<%= data.id %>"<% } %>></div>\n\n        <% if (data.body.icon.sub == "chat_group") { %>\n          <% var icon_class_name = "group_chat" %>\n        <% } else if (data.body.icon.sub == "error" || data.body.icon.sub == "chat_direct") { %>\n          <% var icon_class_name = false %>\n        <% } else if (data.body.icon.sub == "chat") { %>\n          <% var icon_class_name = "chats" %>\n        <% } else { %>\n          <% var icon_class_name = data.body.icon.sub %>\n        <% } %>\n\n        <% if (icon_class_name) { %>\n          <div class="notification-chat__container-icon">\n            <% if (icon_class_name == "mail") { %>\n              <img class="notification-mail__icon" src="/frontend/images/interface/inbox/icon_notification_mail.png">\n            <% } else if (data.body.icon_origin) { %>\n              <img class="notification-<%= data.body.icon_origin %>__icon" src="<%= data.body.icon_origin %>">\n            <% } else { %>\n              <svg class="svg-icon svg-common--chats-dims"><use xlink:href="#common--<%= icon_class_name %>"></use></svg>\n            <% } %>\n          </div>\n        <% } %>\n      </div>\n    </div>\n\n    <div class="notification-inner__container_text <% if (!data.body.last_message_at && !data.updated_at) { %>notification-inner__container_text--center<% } %>">\n\n    <div class="notification-inner__info_message">\n      <div class="notification-inner__info">\n        <span class="notification-inner__title_message_talk-id <% if (data.status === \'closed\') { %>notification-inner__title_message_talk-id_closed<% } %>" title="A<%= data.id %>">A<%= data.id %></span>\n\n\n        <% if (data.provider || data.body.is_talk) { %>\n          <label class="notification-chat__checkbox control-checkbox">\n            <input type="checkbox" class="js-item-checkbox" name="notify_selected" id="cbx_drop_<%= data.id %>" value="<%= data.id %>" <%= data.checked ? "checked" : "" %>>\n            <span class="control-checkbox__helper"></span>\n          </label>\n\n          <div class="notification-inner__controllers">\n            <svg class="svg-icon js-notification-favorites notification-inner__favorites <% if (data.label) { %>notification-inner__favorites_selected <% } %>svg-inbox--outline-star-dims"><use xlink:href="#inbox--outline-star"></use></svg>\n            <svg class="svg-icon js-notification-quick-action notification-inner__quick-action svg-controls--button-more-dims" style="<%= data.is_quick_action_enabled ? \'\' : \'display: none;\' %>"><use xlink:href="#controls--button-more"></use></svg>\n          </div>\n        <% } %>\n\n        <span class="notification-inner__data_message"><%= twig._twig.filter("feed_date", data.body.last_message_at || data.updated_at) %></span>\n      </div>\n    </div>\n\n    <div class="notification-inner__info_message">\n      <h2 class="notification-inner__title_message">\n        <span class="notification-inner__title_message_title"><%= data.body.__old_type ? data.body.title : _.escape(data.body.title) %></span>\n      </h2>\n    </div>\n\n      <% if (data.body.subtitle) { %>\n        <div class="notification-inner__info_message">\n          <h3 class="notification-inner__title_message"><%= data.body.subtitle %></h3>\n        </div>\n      <% } %>\n\n      <div class="notification-inner__info_message">\n        <div class="notification-inner__info">\n          <span class="notification-inner__from__message <% if (data.opened) { %>notification-inner__from__message-fully-opened<% } %>">\n            <% _.each(data.body.rows, function(line, index) {%>\n              <span class="<%= line.style %> notification-inner__from__message_height-<%= line.class_height %>">\n                <%= data.body.__old_type ? line.text : _.escape(line.text) %>\n\n                <% if (!data.notification && index === data.body.rows.length -1 && _.contains(["h2", "h3"], line.class_height) && !data.disable_more_content_button) { %>\n                  <div class="notification-inner__button_show-more-container" <% if (line.text.length > 100) { %>style="display: block"<% } %>>\n                    <div class="notification-inner__button_show-more">\n                      &#8226;&#8226;&#8226;\n                    </div>\n                  </div>\n                <% } %>\n              </span>\n            <% }); %>\n          </span>\n        </div>\n      </div>\n\n    </div>\n\n    <% if (data.web_link) { %></a><% } %>\n  ')(t);
            return t.data.is_native_link ? '\n      <a href="'.concat(t.data.amo_link, '" ').concat(e, ">\n        ").concat(i, "\n      </a>\n    ") : "\n    <div ".concat(e, ">\n      ").concat(i, "\n    </div>\n  ")
        }
        var r = "../build/transpiled/components/base/inbox/notification_templates/chats_item_template";
        window.define(r, (function() {
            var t = "undefined"
              , i = typeof e === t ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === t ? typeof module === t ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : e;
            return i && i.default || i
        }
        )),
        window.require([r])
    }
    ,
    422700: (t, e, i) => {
        "use strict";
        i.r(e),
        i.d(e, {
            default: () => c
        });
        var n = i(460159)
          , o = i.n(n)
          , a = i(55188)
          , r = i.n(a)
          , s = i(880774);
        const c = function(t) {
            var e, i = t.id, n = t.file, a = t.extension, c = t.updated_at, d = t.entityType, l = t.entityId, u = t.progress, f = t.status;
            return e = 100 === u ? "100%" : "error" === f ? '<span style="color: #F37575;">'.concat(u, "</span>") : "".concat((0,
            s.i18n)("Uploading"), " ").concat(u, "%"),
            '\n  <div data-id="'.concat(i, '" class="notification__item notification-inner " id="files-notification-').concat(i, '" style="background: var(--palette-notification-unread-background);">\n    <a href="/').concat(d, "/detail/").concat(l, '?tab_id=files" class="notification-inner__navigate-link js-navigate-link">\n      <div class="notification-chat__non-select">\n        <div class="notification-chat__container-img ').concat(100 === u || "error" === f ? "" : "tab-file__item-img-loading", '">\n          ').concat(function(t) {
                return '\n    <svg\n      width="36"\n      height="40"\n      viewBox="0 0 36 40"\n      fill="none"\n      xmlns="http://www.w3.org/2000/svg"\n    >\n    <path\n      fill-rule="evenodd"\n      clip-rule="evenodd"\n      d="M26.2097 1H7C5.89543 1 5 1.89543 5 3V37C5 38.1046 5.89543 39 7 39H33C34.1046 39 35 38.1046 35 37L35 9.5H29.7097C27.7767 9.5 26.2097 7.933 26.2097 6L26.2097 1ZM36 9L36 37C36 38.6569 34.6569 40 33 40H7C5.34315 40 4 38.6569 4 37V3C4 1.34315 5.34315 0 7 0H26.7097L36 9ZM34.0467 8.5L27.2097 1.87667L27.2097 6C27.2097 7.38071 28.329 8.5 29.7097 8.5H34.0467Z"\n      fill="#979797"\n    />\n    />\n      <rect y="25" width="26" height="12" rx="3" fill="#979797" />\n      <text\n        fill="white"\n        xml:space="preserve"\n        font-size="9.5"\n        font-weight="bold"\n        letter-spacing="0.01em"\n        font-family="PT Sans"\n      >\n        <tspan x="3.3" y="34.7">'.concat(t, "</tspan>\n      </text>\n    </svg>\n  ")
            }(a.toUpperCase()), '\n        </div>\n      </div>\n      <div class="notification-inner__container_text ">\n          <div class="notification-inner__info_message">\n            <h2 class="notification-inner__title_message">\n              <span class="notification-inner__title_message_title">').concat(r().escape(n.name), '</span>\n            </h2>\n            <span class="notification-inner__data_message">').concat(o()._twig.filter("feed_date", c), '</span>\n          </div>\n        <span class="notification-inner__from__message ">\n          <span class="default notification-inner__from__message_height-h3">\n            ').concat(e, "\n          </span>\n        </span>\n      </div>\n    </a>\n  </div>\n  ")
        };
        var d = "../build/transpiled/components/base/inbox/notification_templates/file_template";
        window.define(d, (function() {
            var t = "undefined"
              , i = typeof e === t ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === t ? typeof module === t ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : e;
            return i && i.default || i
        }
        )),
        window.require([d])
    }
    ,
    303391: (t, e, i) => {
        "use strict";
        i.r(e),
        i.d(e, {
            default: () => n
        });
        const n = function(t) {
            var e = t.id
              , i = t.title
              , n = t.text;
            return '\n    <div class="'.concat(["notification-item-go-to-button", "notification-item--".concat(e), "notification__item"].join(" "), '"\n    >\n      <svg class="svg-icon svg-inbox--plus-in-circle-dashed-dims">\n        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#inbox--plus-in-circle-dashed"></use>\n      </svg>\n\n      <div class="notification-item-go-to-button__content">\n        <span class="notification-item-go-to-button__title">\n          ').concat(i, '\n        </span>\n\n        <span class="notification-item-go-to-button__text">\n          ').concat(n, "\n        </span>\n      </div>\n    </div>\n  ")
        };
        var o = "../build/transpiled/components/base/inbox/notification_templates/go_to_add_notification";
        window.define(o, (function() {
            var t = "undefined"
              , i = typeof e === t ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === t ? typeof module === t ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : e;
            return i && i.default || i
        }
        )),
        window.require([o])
    }
    ,
    960537: (t, e, i) => {
        "use strict";
        i.r(e),
        i.d(e, {
            createNotificationItemTemplate: () => a
        });
        var n = i(55188)
          , o = i.n(n);
        function a(t) {
            var e = o().template('data-id="<%= data.id %>" id="inbox-notification-<%= data.id %>" <% if (data.custom_action_hash) { %>data-custom-action-hash="<%= data.custom_action_hash %>"<% } %> class="notification__item <%= data.label ? "notification__item_favirites" : "" %> <%= !data.provider && !data.body.is_talk ? "notification__item_not-multiaction" : "" %> <%= data.checked ? "notification_checked" : "" %> <% if (!data.preselected && !data.is_read) { print("notification__item__unread"); } %> notification-inner <% if (data.preselected) { print("notification-inner_preselected"); } else if (data.selected) { print("notification-inner_selected"); } %>"')(t)
              , i = o().template('\n    <% if (data.web_link) { %><a href="<%= data.web_link %>" class="<% if (data.absolute_link) { %>notification-inner__link<% } else { %>notification-inner__navigate-link js-navigate-link<% } %>" <% if (data.absolute_link) { %>target="_blank"<% } %>><% } %>\n\n    <% if (data.provider || data.body.is_talk) { %>\n      <label class="notification-chat__checkbox control-checkbox">\n        <input type="checkbox" class="js-item-checkbox" name="notify_selected" id="cbx_drop_<%= data.id %>" value="<%= data.id %>" <%= data.checked ? "checked" : "" %>>\n        <span class="control-checkbox__helper"></span>\n      </label>\n\n      <div class="notification-inner__controllers">\n        <svg class="svg-icon js-notification-quick-action notification-inner__quick-action svg-controls--button-more-dims" style="<%= data.is_quick_action_enabled ? \'\' : \'display: none;\' %>"><use xlink:href="#controls--button-more"></use></svg>\n        <svg class="svg-icon js-notification-favorites notification-inner__favorites <% if (data.label) { %>notification-inner__favorites_selected <% } %>svg-inbox--outline-star-dims"><use xlink:href="#inbox--outline-star"></use></svg>\n      </div>\n    <% } %>\n\n    <div class="notification-chat__non-select">\n      <div class="<% if (data.body.icon.robot) { %>notification-chat__container-img_bot<% } else { %>notification-chat__container-img<% } %>">\n        <div class="n-avatar notification-inner__avatar" <% if (!_.isEmpty(data.id)) { %>id="<%= data.id %>"<% } %>></div>\n\n        <% if (data.body.icon.sub == "chat_group") { %>\n          <% var icon_class_name = "group_chat" %>\n        <% } else if (data.body.icon.sub == "error" || data.body.icon.sub == "chat_direct") { %>\n          <% var icon_class_name = false %>\n        <% } else if (data.body.icon.sub == "chat") { %>\n          <% var icon_class_name = "chats" %>\n        <% } else { %>\n          <% var icon_class_name = data.body.icon.sub %>\n        <% } %>\n\n        <% if (icon_class_name) { %>\n          <div class="notification-chat__container-icon">\n            <% if (icon_class_name == "mail") { %>\n              <img class="notification-mail__icon" src="/frontend/images/interface/inbox/icon_notification_mail.png">\n            <% } else if (data.body.icon_origin) { %>\n              <img class="notification-<%= data.body.icon_origin %>__icon" src="<%= data.body.icon_origin %>">\n            <% } else { %>\n              <svg class="svg-icon svg-common--chats-dims"><use xlink:href="#common--<%= icon_class_name %>"></use></svg>\n            <% } %>\n          </div>\n        <% } %>\n      </div>\n    </div>\n\n    <div class="notification-inner__container_text <% if (!data.body.last_message_at && !data.updated_at) { %>notification-inner__container_text--center<% } %>">\n      <% if (data.body.title) { %>\n        <div class="notification-inner__info_message">\n          <h2 class="notification-inner__title_message">\n            <span class="notification-inner__title_message_title"><%= data.body.__old_type ? data.body.title : _.escape(data.body.title) %></span>\n            <% if (data.body.is_talk) { %><span class="notification-inner__title_message_talk-id" title="A<%= data.id %>">A<%= data.id %></span><% } %>\n            <span data-id="<%= data.id ? data.id : "" %>" class="control-user_state <%= user_online ? "control-user_state_online" : "" %>" ></span>\n\n            <% if (data.is_emotion_detector_enabled && data.emotion) { %>\n              <div class="notification-inner__emotion js-notification_emotion" data-id="<%= data.id ? data.id : "" %>">\n                <svg class="notification-inner__emotion__svg">\n                  <use xlink:href="#common--<%= data.emotionDisplay %>"></use>\n                </svg>\n              </div>\n            <% } %>\n          </h2>\n          <span class="notification-inner__data_message"><%= twig._twig.filter("feed_date", data.body.last_message_at || data.updated_at) %></span>\n        </div>\n      <% } %>\n\n      <% if (data.body.subtitle) { %>\n        <div class="notification-inner__info_message">\n          <h3 class="notification-inner__title_message"><%= data.body.subtitle %></h3>\n        </div>\n      <% } %>\n\n      <span class="notification-inner__from__message <% if (data.opened) { %>notification-inner__from__message-fully-opened<% } %>">\n        <% _.each(data.body.rows, function(line, index) {%>\n          <span class="<%= line.style %> notification-inner__from__message_height-<%= line.class_height %>">\n            <%= data.body.__old_type ? line.text : _.escape(line.text) %>\n\n            <% if (!data.notification && index === data.body.rows.length -1 && _.contains(["h2", "h3"], line.class_height) && !data.disable_more_content_button) { %>\n              <div class="notification-inner__button_show-more-container" <% if (data.body.showMoreButton) { %>style="display: block"<% } %>>\n                <div class="notification-inner__button_show-more">\n                  &#8226;&#8226;&#8226;\n                </div>\n              </div>\n            <% } %>\n          </span>\n        <% }); %>\n      </span>\n    </div>\n\n    <% if (data.web_link) { %></a><% } %>\n  ')(t);
            return t.data.is_native_link ? '\n      <a href="'.concat(t.data.amo_link, '" ').concat(e, ">\n        ").concat(i, "\n      </a>\n    ") : "\n    <div ".concat(e, ">\n      ").concat(i, "\n    </div>\n  ")
        }
        var r = "../build/transpiled/components/base/inbox/notification_templates/item_template";
        window.define(r, (function() {
            var t = "undefined"
              , i = typeof e === t ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === t ? typeof module === t ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : e;
            return i && i.default || i
        }
        )),
        window.require([r])
    }
    ,
    263770: (t, e, i) => {
        "use strict";
        i.r(e),
        i.d(e, {
            default: () => n
        });
        const n = function(t) {
            return '\n    <div class="notification__item notification__user-not-found">\n      <div class="notification__user-not-found-inner">\n        <div class="notification__user-not-found-text">\n          '.concat(t, "\n        </div>\n      </div>\n    </div>\n  ")
        };
        var o = "../build/transpiled/components/base/inbox/notification_templates/user_not_found";
        window.define(o, (function() {
            var t = "undefined"
              , i = typeof e === t ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === t ? typeof module === t ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : e;
            return i && i.default || i
        }
        )),
        window.require([o])
    }
    ,
    158197: (t, e, i) => {
        "use strict";
        i.r(e),
        i.d(e, {
            default: () => v,
            getInitialSortOrder: () => g
        });
        var n = i(661533)
          , o = i.n(n)
          , a = i(55188)
          , r = i.n(a)
          , s = i(521466);
        function c(t, e) {
            for (var i = 0; i < e.length; i++) {
                var n = e[i];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(t, n.key, n)
            }
        }
        function d(t, e, i) {
            return e in t ? Object.defineProperty(t, e, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = i,
            t
        }
        function l(t, e, i) {
            return l = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(t, e, i) {
                var n = function(t, e) {
                    for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = u(t)); )
                        ;
                    return t
                }(t, e);
                if (n) {
                    var o = Object.getOwnPropertyDescriptor(n, e);
                    return o.get ? o.get.call(i || t) : o.value
                }
            }
            ,
            l(t, e, i || t)
        }
        function u(t) {
            return u = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            }
            ,
            u(t)
        }
        function f(t, e) {
            return f = Object.setPrototypeOf || function(t, e) {
                return t.__proto__ = e,
                t
            }
            ,
            f(t, e)
        }
        function h(t) {
            var e = function() {
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
                } catch (t) {
                    return !1
                }
            }();
            return function() {
                var i, n = u(t);
                if (e) {
                    var o = u(this).constructor;
                    i = Reflect.construct(n, arguments, o)
                } else
                    i = n.apply(this, arguments);
                return function(t, e) {
                    return !e || "object" != ((i = e) && "undefined" != typeof Symbol && i.constructor === Symbol ? "symbol" : typeof i) && "function" != typeof e ? function(t) {
                        if (void 0 === t)
                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return t
                    }(t) : e;
                    var i
                }(this, i)
            }
        }
        var _ = "amo_inbox_order"
          , p = {
            sort_by: "unread_first",
            sort_type: "false"
        }
          , m = {
            sort_by: "unread_first",
            sort_type: "true"
        };
        function b() {
            return "com" === APP.constant("account").top_level_domain ? p : m
        }
        var v = function(t) {
            !function(t, e) {
                if ("function" != typeof e && null !== e)
                    throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }),
                e && f(t, e)
            }(a, t);
            var e, i, n = h(a);
            function a() {
                return function(t, e) {
                    if (!(t instanceof e))
                        throw new TypeError("Cannot call a class as a function")
                }(this, a),
                n.apply(this, arguments)
            }
            return e = a,
            i = [{
                key: "_classes",
                value: function() {
                    return {
                        sort_buttons: "js-read-sort",
                        selected_sort_option: "search-more__item_active"
                    }
                }
            }, {
                key: "_selectors",
                value: function() {
                    return {
                        selected_sort_by: '.js-read-sort[data-sort-by="%s"][data-sort-type="%s"]'
                    }
                }
            }, {
                key: "initialize",
                value: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    l(u(a.prototype), "initialize", this).apply(this, arguments);
                    var e = t.onSelect
                      , i = void 0 === e ? r().noop : e
                      , n = JSON.parse(localStorage.getItem(_));
                    this.onSelect = i,
                    this.order = r().isNull(n) || r().isUndefined(n) ? this._getDefaultSort() : n,
                    r().isBoolean(this.order) && (this.order = this.order ? m : p),
                    this._prepareSort()
                }
            }, {
                key: "events",
                value: function() {
                    return {
                        "click .js-read-sort": "onOrderChange",
                        "click .search-more__item-header": "onSearchMoreItemHeaderClick"
                    }
                }
            }, {
                key: "changeStateSort",
                value: function(t) {
                    var e = o()(t.currentTarget);
                    e.hasClass(this._class("selected_sort_option")) || (this._elem("sort_buttons").removeClass(this._class("selected_sort_option")),
                    e.addClass(this._class("selected_sort_option")),
                    this.order = {
                        sort_by: e.attr("data-sort-by"),
                        sort_type: e.attr("data-sort-type")
                    },
                    localStorage.setItem(_, JSON.stringify(this.order)))
                }
            }, {
                key: "onOrderChange",
                value: function(t) {
                    this.changeStateSort(t),
                    this.onSelect(this.getQueryObject())
                }
            }, {
                key: "_prepareSort",
                value: function() {
                    this._findElem("selected_sort_by", this.order.sort_by, this.order.sort_type).addClass(this._class("selected_sort_option"))
                }
            }, {
                key: "_getDefaultSort",
                value: function() {
                    return b()
                }
            }, {
                key: "getQueryObject",
                value: function() {
                    return d({}, this.order.sort_by, this.order.sort_type)
                }
            }, {
                key: "onSearchMoreItemHeaderClick",
                value: function(t) {
                    t.stopPropagation()
                }
            }],
            i && c(e.prototype, i),
            a
        }(s.default);
        function g() {
            var t;
            try {
                if (!(t = JSON.parse(localStorage.getItem(_))) || !r().isObject(t))
                    throw new Error("No sort in LS")
            } catch (e) {
                t = b()
            }
            return d({}, t.sort_by, t.sort_type)
        }
        var y = "../build/transpiled/components/base/inbox/read_sort";
        window.define(y, (function() {
            var t = "undefined"
              , i = typeof e === t ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === t ? typeof module === t ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : e;
            return i && i.default || i
        }
        )),
        window.require([y])
    }
    ,
    518321: (t, e, i) => {
        "use strict";
        i.r(e),
        i.d(e, {
            default: () => v
        });
        var n = i(55188)
          , o = i.n(n)
          , a = i(987081)
          , r = i(128508)
          , s = i(579569)
          , c = i(886965)
          , d = i(804129)
          , l = i(987280)
          , u = i(275649)
          , f = i(454764)
          , h = i(661533)
          , _ = (0,
        s.current)()
          , p = APP.constant("account").amojo_rights
          , m = ""
          , b = {
            list: "/v3/inbox/list",
            default_list: "/v3/inbox/list"
        };
        function v(t, e) {
            var i, n, v = function(t, e) {
                return !e || (w = o().omit(w, t),
                !1)
            }, g = function(t) {
                var e;
                if (e = (t = t || {}).fetch_local ? (0,
                s.get)(!0) : w,
                t.is_filter)
                    return a.from([]);
                var i = a.concat(a.from(p.can_direct ? o().values(e) : []), a.from(o().values((0,
                u.get)())).pipe(r.filter((function(t) {
                    return (0,
                    d.isAmoChatsFullEnabled)() ? "amo.support" === t.code : t.is_direct && ("amo.support" !== t.code || !(0,
                    c.isCustomers)())
                }
                )))).pipe(r.filter((function(e) {
                    switch (!0) {
                    case t.fetch_local:
                        return t.fetch_local;
                    case e.id === _.id:
                        return v(e.id, !0);
                    default:
                        return !0
                    }
                }
                )), r.map((function(t) {
                    var e, i;
                    return t.bot ? (e = {
                        url: t.avatar
                    },
                    i = {
                        chat_bot: t.id
                    }) : (e = {
                        profile: t.id
                    },
                    i = {
                        chat_direct: t.id
                    }),
                    {
                        entity: {
                            type: "chat_direct",
                            id: t.id
                        },
                        preview: "text",
                        id: t.id.toString(),
                        login: t.login,
                        created_at: 0,
                        updated_at: 0,
                        is_bot: !0 === t.bot,
                        is_read: !0,
                        body: {
                            icon: e,
                            title: t.title,
                            actions: {
                                click: i
                            }
                        }
                    }
                }
                )));
                return n ? a.concat(i, k.pipe(r.filter((function(t) {
                    return !o().isNull(t.entity_id)
                }
                )), r.map((function(t) {
                    return {
                        entity: {
                            id: t.entity_id.toString(),
                            type: "chat_group"
                        },
                        is_read: !0,
                        web_link: null,
                        id: parseInt(t.entity_id),
                        created_at: 0,
                        updated_at: 0,
                        body: {
                            title: t.title,
                            icon: {
                                profile: t.chat_id.toString(),
                                sub: "chat_group"
                            },
                            actions: {
                                click: {
                                    chat_group: t.chat_id.toString()
                                }
                            }
                        }
                    }
                }
                )))).pipe(r.map((function(e) {
                    return o().isFunction(t.rate) ? t.rate(e) : e
                }
                )), r.filter((function(t) {
                    return t._sorting_rate > 0
                }
                )), r.toArray(), r.map((function(t) {
                    return o().sortBy(t, (function(t) {
                        return -t._sorting_rate
                    }
                    ))
                }
                )), r.flatMap((function(t) {
                    return a.from(t)
                }
                ))) : i
            }, y = !0, w = (0,
            s.get)(!0), E = {}, x = e ? {
                list: e,
                default_list: e
            } : o().clone(b), k = a.defer((function() {
                return (0,
                l.getGroupChats)(l.CHAT_GROUP_TYPE)
            }
            )).pipe(r.map((function(t) {
                return t ? t.response.chats.group_list : null
            }
            )), r.shareReplay(1), r.flatMap((function(t) {
                return a.from(o().values(t))
            }
            )));
            return {
                init: function(e) {
                    var c;
                    (i = new a.Subject).pipe(r.switchMap((function(e) {
                        return c = e.deferred,
                        function(e, i) {
                            var c;
                            n = (e = e || {}).term && e.term.length > 0;
                            var d = {
                                is_filter: !o().isEmpty(e.filter)
                            };
                            return n && o().extend(d, e, {
                                fetch_local: !0
                            }),
                            e.reset && (y = !0,
                            w = (0,
                            s.get)(!0)),
                            c = n ? g(d) : a.concat(function(e, i) {
                                return a.defer((function() {
                                    var n;
                                    return y ? ((x.list === x.default_list || e.reset) && (E = {
                                        limit: t,
                                        order: e.order,
                                        filter: e.filter
                                    },
                                    p.can_direct || (E.filter || (E.filter = {}),
                                    E.filter.exclude = {
                                        entity_type: ["chat_direct"]
                                    })),
                                    n = h.ajaxPromisify({
                                        url: e.reset ? x.default_list : x.list,
                                        data: E
                                    }),
                                    a.from(n).pipe(r.map((function(t) {
                                        return o().isUndefined(t) ? (y = !1,
                                        []) : (o().isFunction(e.onFetchResponse) && e.onFetchResponse(t),
                                        x.list = t._links.next ? t._links.next.href : t._links.self.href,
                                        m || (m = t._links.next ? t._links.next.href : t._links.self.href),
                                        t._embedded.items)
                                    }
                                    )), r.flatMap((function(e) {
                                        return e.length < t && (y = !1),
                                        a.from(e)
                                    }
                                    )), r.tap({
                                        next: function() {
                                            o().isFunction(i) && i(!1)
                                        },
                                        error: function() {
                                            return o().isFunction(i) && i(!0),
                                            a.from([])
                                        }
                                    }))) : Promise.reject()
                                }
                                ))
                            }(e, i).pipe(r.filter((function(t) {
                                return !t.click || !t.click.type || "chat_direct" !== t.click.type || !!f.default.getRecipient(t.click.values)
                            }
                            ))), g(d)).pipe(r.take(t), r.tap({
                                next: function(t) {
                                    v(t.id, t.entity && "chat_direct" === t.entity.type)
                                }
                            })),
                            a.onErrorResumeNext(c).pipe(r.toArray())
                        }(e.options, e.noContent)
                    }
                    )), r.catchError((function(t) {
                        e({
                            error: t
                        }, c)
                    }
                    ))).subscribe((function(t) {
                        e({
                            items: t
                        }, c)
                    }
                    ))
                },
                onNewOption: function(t, e, n) {
                    i.next({
                        options: t,
                        noContent: e,
                        deferred: n
                    })
                },
                isFinished: function() {
                    return !y && 0 === o().keys(w).length
                },
                addUsersBuffer: function(t) {
                    if (0 === o().keys(w).length)
                        return !0;
                    var e = (0,
                    s.get)(t);
                    return e && !o().isEqual(e, (0,
                    s.get)()) && (w[t] = (0,
                    s.get)(t)),
                    !1
                }
            }
        }
        var g = "../build/transpiled/components/base/inbox/sources";
        window.define(g, (function() {
            var t = "undefined"
              , i = typeof e === t ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === t ? typeof module === t ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : e;
            return i && i.default || i
        }
        )),
        window.require([g])
    }
    ,
    454764: (t, e, i) => {
        "use strict";
        i.r(e),
        i.d(e, {
            default: () => a
        });
        var n = i(579569)
          , o = APP.constant("amojo_bots");
        const a = {
            getRecipient: function(t) {
                var e, i = (0,
                n.get)(!0);
                return 1 == (parseInt(t).toString() === t.toString()) ? i[t] : {
                    id: (e = o[t]).id,
                    amojo_id: e.id,
                    title: e.name,
                    avatar: e.avatar,
                    is_bot: !0
                }
            }
        };
        var r = "../build/transpiled/components/base/inbox/users";
        window.define(r, (function() {
            var t = "undefined"
              , i = typeof e === t ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === t ? typeof module === t ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : e;
            return i && i.default || i
        }
        )),
        window.require([r])
    }
    ,
    267589: (t, e, i) => {
        "use strict";
        i.r(e),
        i.d(e, {
            amo_window: () => o
        });
        var n = "persistentOpen"
          , o = function() {
            var t = null
              , e = null;
            function i(e) {
                t = window.open(e.href)
            }
            function o(i) {
                if (i.source === t)
                    switch (i.data && i.data.method) {
                    case "".concat(n).concat(".").concat("resolved"):
                        if (!e)
                            break;
                        clearTimeout(e),
                        e = null,
                        t && t.focus()
                    }
            }
            return window.addEventListener("message", o),
            {
                open: function(o) {
                    if (!e) {
                        var a;
                        try {
                            a = new URL(o)
                        } catch (t) {
                            return void console.error("Can't parse provided url: ".concat(o))
                        }
                        t && !t.closed ? function(o) {
                            t.postMessage({
                                method: n,
                                payload: {
                                    linkDetails: "".concat(o.pathname).concat(o.search)
                                }
                            }, o.origin);
                            var a = setTimeout((function() {
                                i(o),
                                e = null
                            }
                            ), 600);
                            e = a
                        }(a) : i(a)
                    }
                },
                destroy: function() {
                    window.removeEventListener("message", o),
                    t = null,
                    clearTimeout(e),
                    e = null
                }
            }
        }()
          , a = "../build/transpiled/components/base/inbox/utils/persistent_window";
        window.define(a, (function() {
            var t = "undefined"
              , i = typeof e === t ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === t ? typeof module === t ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : e;
            return i && i.default || i
        }
        )),
        window.require([a])
    }
    ,
    510475: (t, e, i) => {
        "use strict";
        i.r(e),
        i.d(e, {
            default: () => a
        });
        var n = i(161320)
          , o = i.n(n);
        function a() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ""
              , e = o()().tz(APP.system.timezone).set({
                hours: 0,
                minutes: 0,
                second: 0
            })
              , i = o()().tz(APP.system.timezone).set({
                hours: 23,
                minutes: 59,
                second: 59
            })
              , n = parseInt(o()().tz(APP.system.timezone).quarter())
              , a = parseInt(t.replace("previous_days_", ""));
            if (a > 0)
                return {
                    from: e.subtract(a, "day").format("X"),
                    to: i.format("X")
                };
            switch (t) {
            case "today":
            case "current_day":
                return {
                    from: e.format("X"),
                    to: i.format("X")
                };
            case "yesterday":
                return {
                    from: e.subtract(1, "day").format("X"),
                    to: i.subtract(1, "day").format("X")
                };
            case "current_week":
            case "week":
                return {
                    from: e.weekday(0).format("X"),
                    to: i.weekday(6).format("X")
                };
            case "previous_week":
                return {
                    from: e.subtract(1, "week").weekday(0).format("X"),
                    to: i.subtract(1, "week").weekday(6).format("X")
                };
            case "current_month":
            case "month":
                return {
                    from: e.startOf("month").format("X"),
                    to: i.endOf("month").format("X")
                };
            case "previous_month":
                return {
                    from: e.subtract(1, "month").startOf("month").format("X"),
                    to: i.subtract(1, "month").endOf("month").format("X")
                };
            case "current_quarter":
            case "quarter":
                return {
                    from: e.startOf("month").month(3 * n - 3).format("X"),
                    to: i.month(3 * n - 1).endOf("month").format("X")
                };
            case "current_year":
                return {
                    from: e.startOf("year").format("X"),
                    to: i.endOf("year").format("X")
                }
            }
        }
        var r = "../build/transpiled/components/base/inbox/utils/preset_to_timestamp";
        window.define(r, (function() {
            var t = "undefined"
              , i = typeof e === t ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === t ? typeof module === t ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : e;
            return i && i.default || i
        }
        )),
        window.require([r])
    }
    ,
    211614: (t, e, i) => {
        "use strict";
        i.r(e),
        i.d(e, {
            default: () => l
        });
        var n = i(729153);
        function o(t, e, i, n, o, a, r) {
            try {
                var s = t[a](r)
                  , c = s.value
            } catch (t) {
                return void i(t)
            }
            s.done ? e(c) : Promise.resolve(c).then(n, o)
        }
        function a(t, e, i) {
            return e in t ? Object.defineProperty(t, e, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = i,
            t
        }
        function r(t) {
            for (var e = 1; e < arguments.length; e++) {
                var i = null != arguments[e] ? arguments[e] : {}
                  , n = Object.keys(i);
                "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(i).filter((function(t) {
                    return Object.getOwnPropertyDescriptor(i, t).enumerable
                }
                )))),
                n.forEach((function(e) {
                    a(t, e, i[e])
                }
                ))
            }
            return t
        }
        var s, c, d = (s = function(t, e) {
            var i, n, o, a = arguments;
            return function(t, e) {
                var i, n, o, a, r = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0])
                            throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return a = {
                    next: s(0),
                    throw: s(1),
                    return: s(2)
                },
                "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                    return this
                }
                ),
                a;
                function s(a) {
                    return function(s) {
                        return function(a) {
                            if (i)
                                throw new TypeError("Generator is already executing.");
                            for (; r; )
                                try {
                                    if (i = 1,
                                    n && (o = 2 & a[0] ? n.return : a[0] ? n.throw || ((o = n.return) && o.call(n),
                                    0) : n.next) && !(o = o.call(n, a[1])).done)
                                        return o;
                                    switch (n = 0,
                                    o && (a = [2 & a[0], o.value]),
                                    a[0]) {
                                    case 0:
                                    case 1:
                                        o = a;
                                        break;
                                    case 4:
                                        return r.label++,
                                        {
                                            value: a[1],
                                            done: !1
                                        };
                                    case 5:
                                        r.label++,
                                        n = a[1],
                                        a = [0];
                                        continue;
                                    case 7:
                                        a = r.ops.pop(),
                                        r.trys.pop();
                                        continue;
                                    default:
                                        if (!((o = (o = r.trys).length > 0 && o[o.length - 1]) || 6 !== a[0] && 2 !== a[0])) {
                                            r = 0;
                                            continue
                                        }
                                        if (3 === a[0] && (!o || a[1] > o[0] && a[1] < o[3])) {
                                            r.label = a[1];
                                            break
                                        }
                                        if (6 === a[0] && r.label < o[1]) {
                                            r.label = o[1],
                                            o = a;
                                            break
                                        }
                                        if (o && r.label < o[2]) {
                                            r.label = o[2],
                                            r.ops.push(a);
                                            break
                                        }
                                        o[2] && r.ops.pop(),
                                        r.trys.pop();
                                        continue
                                    }
                                    a = e.call(t, r)
                                } catch (t) {
                                    a = [6, t],
                                    n = 0
                                } finally {
                                    i = o = 0
                                }
                            if (5 & a[0])
                                throw a[1];
                            return {
                                value: a[0] ? a[1] : void 0,
                                done: !0
                            }
                        }([a, s])
                    }
                }
            }(this, (function(s) {
                switch (s.label) {
                case 0:
                    return i = a.length > 2 && void 0 !== a[2] ? a[2] : {},
                    n = {
                        headers: {
                            "Content-Type": "application/json;charset=utf-8",
                            headers: {
                                "X-Requested-With": "XMLHttpRequest"
                            }
                        },
                        method: "POST",
                        body: JSON.stringify(r({
                            id: e.ids,
                            all: e.choose_all || !1
                        }, i))
                    },
                    [4, fetch("/v3/inbox/".concat(t), n)];
                case 1:
                    return (o = s.sent()).ok && 200 === o.status ? [2, o.json()] : [2, {
                        status: o.status
                    }]
                }
            }
            ))
        }
        ,
        c = function() {
            var t = this
              , e = arguments;
            return new Promise((function(i, n) {
                var a = s.apply(t, e);
                function r(t) {
                    o(a, i, n, r, c, "next", t)
                }
                function c(t) {
                    o(a, i, n, r, c, "throw", t)
                }
                r(void 0)
            }
            ))
        }
        ,
        function(t, e) {
            return c.apply(this, arguments)
        }
        );
        const l = {
            fetchAction: function(t, e) {
                var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                return n.default.check().fail((function() {
                    return {
                        status: 401
                    }
                }
                )).done((function() {
                    return d(t, e, i)
                }
                ))
            }
        };
        var u = "../build/transpiled/network/inbox/api";
        window.define(u, (function() {
            var t = "undefined"
              , i = typeof e === t ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === t ? typeof module === t ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : e;
            return i && i.default || i
        }
        )),
        window.require([u])
    }
    ,
    115484: (t, e, i) => {
        "use strict";
        i.r(e),
        i.d(e, {
            default: () => a
        });
        var n = {}
          , o = function(t, e) {
            if ("Y" === APP.widgets.list[t].init_once)
                return n[t] = e
        };
        APP.addNotificationCallback = o;
        const a = {
            addCallback: o,
            execCallbacks: function(t) {
                for (var e in n)
                    n[e](t)
            }
        };
        var r = "../build/transpiled/widgets/notification_subscriber";
        window.define(r, (function() {
            var t = "undefined"
              , i = typeof e === t ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === t ? typeof module === t ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : e;
            return i && i.default || i
        }
        )),
        window.require([r])
    }
    ,
    949137: function(t) {
        var e;
        e = function() {
            return function(t) {
                var e = {};
                function i(n) {
                    if (e[n])
                        return e[n].exports;
                    var o = e[n] = {
                        i: n,
                        l: !1,
                        exports: {}
                    };
                    return t[n].call(o.exports, o, o.exports, i),
                    o.l = !0,
                    o.exports
                }
                return i.m = t,
                i.c = e,
                i.i = function(t) {
                    return t
                }
                ,
                i.d = function(t, e, n) {
                    i.o(t, e) || Object.defineProperty(t, e, {
                        configurable: !1,
                        enumerable: !0,
                        get: n
                    })
                }
                ,
                i.n = function(t) {
                    var e = t && t.__esModule ? function() {
                        return t.default
                    }
                    : function() {
                        return t
                    }
                    ;
                    return i.d(e, "a", e),
                    e
                }
                ,
                i.o = function(t, e) {
                    return Object.prototype.hasOwnProperty.call(t, e)
                }
                ,
                i.p = "",
                i(i.s = 5)
            }([function(t, e, i) {
                "use strict";
                var n = i(4)
                  , o = i.n(n)
                  , a = i(3);
                i.d(e, "a", (function() {
                    return r
                }
                ));
                var r = function() {
                    function t(e, i) {
                        var n = this;
                        !function(t, e) {
                            if (!(t instanceof e))
                                throw new TypeError("Cannot call a class as a function")
                        }(this, t),
                        this.getRowHeight = function(t) {
                            var e = t.index
                              , i = n.options.rowHeight;
                            return "function" == typeof i ? i(e) : Array.isArray(i) ? i[e] : i
                        }
                        ,
                        this.container = e,
                        this.options = i,
                        this.state = {},
                        this._initializeSizeAndPositionManager(i.rowCount),
                        this.render = this.render.bind(this),
                        this.handleScroll = this.handleScroll.bind(this),
                        this.componentDidMount()
                    }
                    return t.prototype.componentDidMount = function() {
                        var t = this
                          , e = this.options
                          , i = e.onMount
                          , n = e.initialScrollTop
                          , o = e.initialIndex
                          , a = e.height
                          , r = n || null != o && this.getRowOffset(o) || 0
                          , s = this.inner = document.createElement("div")
                          , c = this.content = document.createElement("div");
                        s.setAttribute("style", "position:relative; overflow:hidden; width:100%; min-height:100%; will-change: transform;"),
                        c.setAttribute("style", "position:absolute; top:0; left:0; height:100%; width:100%; overflow:visible;"),
                        s.appendChild(c),
                        this.container.appendChild(s),
                        this.setState({
                            offset: r,
                            height: a
                        }, (function() {
                            r && (t.container.scrollTop = r),
                            t.container.addEventListener("scroll", t.handleScroll),
                            "function" == typeof i && i()
                        }
                        ))
                    }
                    ,
                    t.prototype._initializeSizeAndPositionManager = function(t) {
                        this._sizeAndPositionManager = new a.a({
                            itemCount: t,
                            itemSizeGetter: this.getRowHeight,
                            estimatedItemSize: this.options.estimatedRowHeight || 100
                        })
                    }
                    ,
                    t.prototype.setState = function() {
                        var t = this
                          , e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                          , i = arguments[1];
                        this.state = Object.assign(this.state, e),
                        requestAnimationFrame((function() {
                            t.render(),
                            "function" == typeof i && i()
                        }
                        ))
                    }
                    ,
                    t.prototype.resize = function(t, e) {
                        this.setState({
                            height: t
                        }, e)
                    }
                    ,
                    t.prototype.handleScroll = function(t) {
                        var e = this.options.onScroll
                          , i = this.container.scrollTop;
                        this.setState({
                            offset: i
                        }),
                        "function" == typeof e && e(i, t)
                    }
                    ,
                    t.prototype.getRowOffset = function(t) {
                        return this._sizeAndPositionManager.getSizeAndPositionForIndex(t).offset
                    }
                    ,
                    t.prototype.scrollToIndex = function(t, e) {
                        var i = this.state.height
                          , n = this._sizeAndPositionManager.getUpdatedOffsetForIndex({
                            align: e,
                            containerSize: i,
                            targetIndex: t
                        });
                        this.container.scrollTop = n
                    }
                    ,
                    t.prototype.setRowCount = function(t) {
                        this._initializeSizeAndPositionManager(t),
                        this.render()
                    }
                    ,
                    t.prototype.onRowsRendered = function(t) {
                        var e = this.options.onRowsRendered;
                        "function" == typeof e && e(t)
                    }
                    ,
                    t.prototype.destroy = function() {
                        this.container.removeEventListener("scroll", this.handleScroll),
                        this.container.innerHTML = ""
                    }
                    ,
                    t.prototype.render = function() {
                        for (var t = this.options, e = t.overscanCount, i = t.renderRow, n = this.state, a = n.height, r = n.offset, s = void 0 === r ? 0 : r, c = this._sizeAndPositionManager.getVisibleRange({
                            containerSize: a,
                            offset: s,
                            overscanCount: e
                        }), d = c.start, l = c.stop, u = document.createDocumentFragment(), f = d; f <= l; f++)
                            u.appendChild(i(f));
                        this.inner.style.height = this._sizeAndPositionManager.getTotalSize() + "px",
                        this.content.style.top = this.getRowOffset(d) + "px",
                        o()(this.content, u, {
                            childrenOnly: !0,
                            getNodeKey: function(t) {
                                return t.nodeIndex
                            }
                        }),
                        this.onRowsRendered({
                            startIndex: d,
                            stopIndex: l
                        })
                    }
                    ,
                    t
                }()
            }
            , function(t, e, i) {
                "use strict";
                Object.defineProperty(e, "__esModule", {
                    value: !0
                });
                var n = i(0);
                i.d(e, "default", (function() {
                    return n.a
                }
                ));
                var o = i(2);
                i.d(e, "InfiniteVirtualList", (function() {
                    return o.a
                }
                ))
            }
            , function(t, e, i) {
                "use strict";
                var n = i(0);
                i.d(e, "a", (function() {
                    return o
                }
                ));
                var o = function(t) {
                    function e() {
                        return function(t, e) {
                            if (!(t instanceof e))
                                throw new TypeError("Cannot call a class as a function")
                        }(this, e),
                        function(t, e) {
                            if (!t)
                                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return !e || "object" != typeof e && "function" != typeof e ? t : e
                        }(this, t.apply(this, arguments))
                    }
                    return function(t, e) {
                        if ("function" != typeof e && null !== e)
                            throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                        t.prototype = Object.create(e && e.prototype, {
                            constructor: {
                                value: t,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }),
                        e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                    }(e, t),
                    e.prototype.onRowsRendered = function(t) {
                        var e = this
                          , i = t.startIndex
                          , n = t.stopIndex
                          , o = this.options
                          , a = o.isRowLoaded
                          , r = o.loadMoreRows
                          , s = o.minimumBatchSize
                          , c = void 0 === s ? 10 : s
                          , d = o.rowCount
                          , l = void 0 === d ? 0 : d
                          , u = o.threshold
                          , f = void 0 === u ? 15 : u
                          , h = function(t) {
                            for (var e = t.isRowLoaded, i = t.minimumBatchSize, n = t.rowCount, o = t.stopIndex, a = [], r = null, s = null, c = t.startIndex; c <= o; c++)
                                e(c) ? null !== s && (a.push({
                                    startIndex: r,
                                    stopIndex: s
                                }),
                                r = s = null) : (s = c,
                                null === r && (r = c));
                            if (null !== s) {
                                for (var d = Math.min(Math.max(s, r + i - 1), n - 1), l = s + 1; l <= d && !e({
                                    index: l
                                }); l++)
                                    s = l;
                                a.push({
                                    startIndex: r,
                                    stopIndex: s
                                })
                            }
                            if (a.length)
                                for (var u = a[0]; u.stopIndex - u.startIndex + 1 < i && u.startIndex > 0; ) {
                                    var f = u.startIndex - 1;
                                    if (e({
                                        index: f
                                    }))
                                        break;
                                    u.startIndex = f
                                }
                            return a
                        }({
                            isRowLoaded: a,
                            minimumBatchSize: c,
                            rowCount: l,
                            startIndex: Math.max(0, i - f),
                            stopIndex: Math.min(l - 1, n + f)
                        });
                        h.forEach((function(t) {
                            var o = r(t);
                            o && o.then((function() {
                                var o;
                                !((o = {
                                    lastRenderedStartIndex: i,
                                    lastRenderedStopIndex: n,
                                    startIndex: t.startIndex,
                                    stopIndex: t.stopIndex
                                }).startIndex > o.lastRenderedStopIndex || o.stopIndex < o.lastRenderedStartIndex) && e.render()
                            }
                            ))
                        }
                        ))
                    }
                    ,
                    e
                }(n.a)
            }
            , function(t, e, i) {
                "use strict";
                i.d(e, "a", (function() {
                    return n
                }
                ));
                var n = function() {
                    function t(e) {
                        var i = e.itemCount
                          , n = e.itemSizeGetter
                          , o = e.estimatedItemSize;
                        !function(t, e) {
                            if (!(t instanceof e))
                                throw new TypeError("Cannot call a class as a function")
                        }(this, t),
                        this._itemSizeGetter = n,
                        this._itemCount = i,
                        this._estimatedItemSize = o,
                        this._itemSizeAndPositionData = {},
                        this._lastMeasuredIndex = -1
                    }
                    return t.prototype.getLastMeasuredIndex = function() {
                        return this._lastMeasuredIndex
                    }
                    ,
                    t.prototype.getSizeAndPositionForIndex = function(t) {
                        if (t < 0 || t >= this._itemCount)
                            throw Error("Requested index " + t + " is outside of range 0.." + this._itemCount);
                        if (t > this._lastMeasuredIndex) {
                            for (var e = this.getSizeAndPositionOfLastMeasuredItem(), i = e.offset + e.size, n = this._lastMeasuredIndex + 1; n <= t; n++) {
                                var o = this._itemSizeGetter({
                                    index: n
                                });
                                if (null == o || isNaN(o))
                                    throw Error("Invalid size returned for index " + n + " of value " + o);
                                this._itemSizeAndPositionData[n] = {
                                    offset: i,
                                    size: o
                                },
                                i += o
                            }
                            this._lastMeasuredIndex = t
                        }
                        return this._itemSizeAndPositionData[t]
                    }
                    ,
                    t.prototype.getSizeAndPositionOfLastMeasuredItem = function() {
                        return this._lastMeasuredIndex >= 0 ? this._itemSizeAndPositionData[this._lastMeasuredIndex] : {
                            offset: 0,
                            size: 0
                        }
                    }
                    ,
                    t.prototype.getTotalSize = function() {
                        var t = this.getSizeAndPositionOfLastMeasuredItem();
                        return t.offset + t.size + (this._itemCount - this._lastMeasuredIndex - 1) * this._estimatedItemSize
                    }
                    ,
                    t.prototype.getUpdatedOffsetForIndex = function(t) {
                        var e = t.align
                          , i = void 0 === e ? "start" : e
                          , n = t.containerSize
                          , o = t.targetIndex;
                        if (n <= 0)
                            return 0;
                        var a = this.getSizeAndPositionForIndex(o)
                          , r = a.offset
                          , s = r - n + a.size
                          , c = void 0;
                        switch (i) {
                        case "end":
                            c = s;
                            break;
                        case "center":
                            c = r - (n - a.size) / 2;
                            break;
                        default:
                            c = r
                        }
                        var d = this.getTotalSize();
                        return Math.max(0, Math.min(d - n, c))
                    }
                    ,
                    t.prototype.getVisibleRange = function(t) {
                        var e = t.containerSize
                          , i = t.offset
                          , n = t.overscanCount;
                        if (0 === this.getTotalSize())
                            return {};
                        var o = i + e
                          , a = this._findNearestItem(i)
                          , r = a
                          , s = this.getSizeAndPositionForIndex(a);
                        for (i = s.offset + s.size; i < o && r < this._itemCount - 1; )
                            r++,
                            i += this.getSizeAndPositionForIndex(r).size;
                        return n && (a = Math.max(0, a - n),
                        r = Math.min(r + n, this._itemCount)),
                        {
                            start: a,
                            stop: r
                        }
                    }
                    ,
                    t.prototype.resetItem = function(t) {
                        this._lastMeasuredIndex = Math.min(this._lastMeasuredIndex, t - 1)
                    }
                    ,
                    t.prototype._binarySearch = function(t) {
                        for (var e = t.low, i = t.high, n = t.offset, o = void 0, a = void 0; e <= i; ) {
                            if (o = e + Math.floor((i - e) / 2),
                            (a = this.getSizeAndPositionForIndex(o).offset) === n)
                                return o;
                            a < n ? e = o + 1 : a > n && (i = o - 1)
                        }
                        if (e > 0)
                            return e - 1
                    }
                    ,
                    t.prototype._exponentialSearch = function(t) {
                        for (var e = t.index, i = t.offset, n = 1; e < this._itemCount && this.getSizeAndPositionForIndex(e).offset < i; )
                            e += n,
                            n *= 2;
                        return this._binarySearch({
                            high: Math.min(e, this._itemCount - 1),
                            low: Math.floor(e / 2),
                            offset: i
                        })
                    }
                    ,
                    t.prototype._findNearestItem = function(t) {
                        if (isNaN(t))
                            throw Error("Invalid offset " + t + " specified");
                        t = Math.max(0, t);
                        var e = this.getSizeAndPositionOfLastMeasuredItem()
                          , i = Math.max(0, this._lastMeasuredIndex);
                        return e.offset >= t ? this._binarySearch({
                            high: i,
                            low: 0,
                            offset: t
                        }) : this._exponentialSearch({
                            index: i,
                            offset: t
                        })
                    }
                    ,
                    t
                }()
            }
            , function(t, e, i) {
                "use strict";
                var n, o = "undefined" == typeof document ? void 0 : document, a = o ? o.body || o.createElement("div") : {}, r = a.hasAttributeNS ? function(t, e, i) {
                    return t.hasAttributeNS(e, i)
                }
                : a.hasAttribute ? function(t, e, i) {
                    return t.hasAttribute(i)
                }
                : function(t, e, i) {
                    return null != t.getAttributeNode(e, i)
                }
                ;
                function s(t, e) {
                    var i = t.nodeName
                      , n = e.nodeName;
                    return i === n || !!(e.actualize && i.charCodeAt(0) < 91 && n.charCodeAt(0) > 90) && i === n.toUpperCase()
                }
                function c(t, e, i) {
                    t[i] !== e[i] && (t[i] = e[i],
                    t[i] ? t.setAttribute(i, "") : t.removeAttribute(i, ""))
                }
                var d = {
                    OPTION: function(t, e) {
                        c(t, e, "selected")
                    },
                    INPUT: function(t, e) {
                        c(t, e, "checked"),
                        c(t, e, "disabled"),
                        t.value !== e.value && (t.value = e.value),
                        r(e, null, "value") || t.removeAttribute("value")
                    },
                    TEXTAREA: function(t, e) {
                        var i = e.value;
                        if (t.value !== i && (t.value = i),
                        t.firstChild) {
                            if ("" === i && t.firstChild.nodeValue === t.placeholder)
                                return;
                            t.firstChild.nodeValue = i
                        }
                    },
                    SELECT: function(t, e) {
                        if (!r(e, null, "multiple")) {
                            for (var i = 0, n = e.firstChild; n; ) {
                                var o = n.nodeName;
                                if (o && "OPTION" === o.toUpperCase()) {
                                    if (r(n, null, "selected"))
                                        break;
                                    i++
                                }
                                n = n.nextSibling
                            }
                            t.selectedIndex = i
                        }
                    }
                };
                function l() {}
                function u(t) {
                    return t.id
                }
                var f = function(t, e, i) {
                    if (i || (i = {}),
                    "string" == typeof e)
                        if ("#document" === t.nodeName || "HTML" === t.nodeName) {
                            var a = e;
                            (e = o.createElement("html")).innerHTML = a
                        } else
                            c = e,
                            !n && o.createRange && (n = o.createRange()).selectNode(o.body),
                            n && n.createContextualFragment ? f = n.createContextualFragment(c) : (f = o.createElement("body")).innerHTML = c,
                            e = f.childNodes[0];
                    var c, f, h, _ = i.getNodeKey || u, p = i.onBeforeNodeAdded || l, m = i.onNodeAdded || l, b = i.onBeforeElUpdated || l, v = i.onElUpdated || l, g = i.onBeforeNodeDiscarded || l, y = i.onNodeDiscarded || l, w = i.onBeforeElChildrenUpdated || l, E = !0 === i.childrenOnly, x = {};
                    function k(t) {
                        h ? h.push(t) : h = [t]
                    }
                    function S(t, e) {
                        if (1 === t.nodeType)
                            for (var i = t.firstChild; i; ) {
                                var n = void 0;
                                e && (n = _(i)) ? k(n) : (y(i),
                                i.firstChild && S(i, e)),
                                i = i.nextSibling
                            }
                    }
                    function T(t, e, i) {
                        !1 !== g(t) && (e && e.removeChild(t),
                        y(t),
                        S(t, i))
                    }
                    function A(t) {
                        m(t);
                        for (var e = t.firstChild; e; ) {
                            var i = e.nextSibling
                              , n = _(e);
                            if (n) {
                                var o = x[n];
                                o && s(e, o) && (e.parentNode.replaceChild(o, e),
                                C(o, e))
                            }
                            A(e),
                            e = i
                        }
                    }
                    function C(i, n, a) {
                        var c, l = _(n);
                        if (l && delete x[l],
                        !e.isSameNode || !e.isSameNode(t)) {
                            if (!a) {
                                if (!1 === b(i, n))
                                    return;
                                if (function(t, e) {
                                    var i, n, o, a, s, c = e.attributes;
                                    for (i = c.length - 1; i >= 0; --i)
                                        o = (n = c[i]).name,
                                        a = n.namespaceURI,
                                        s = n.value,
                                        a ? (o = n.localName || o,
                                        t.getAttributeNS(a, o) !== s && t.setAttributeNS(a, o, s)) : t.getAttribute(o) !== s && t.setAttribute(o, s);
                                    for (i = (c = t.attributes).length - 1; i >= 0; --i)
                                        !1 !== (n = c[i]).specified && (o = n.name,
                                        (a = n.namespaceURI) ? (o = n.localName || o,
                                        r(e, a, o) || t.removeAttributeNS(a, o)) : r(e, null, o) || t.removeAttribute(o))
                                }(i, n),
                                v(i),
                                !1 === w(i, n))
                                    return
                            }
                            if ("TEXTAREA" !== i.nodeName) {
                                var u, f, h, m, g = n.firstChild, y = i.firstChild;
                                t: for (; g; ) {
                                    for (h = g.nextSibling,
                                    u = _(g); y; ) {
                                        if (f = y.nextSibling,
                                        g.isSameNode && g.isSameNode(y)) {
                                            g = h,
                                            y = f;
                                            continue t
                                        }
                                        c = _(y);
                                        var E = y.nodeType
                                          , S = void 0;
                                        if (E === g.nodeType && (1 === E ? (u ? u !== c && ((m = x[u]) ? y.nextSibling === m ? S = !1 : (i.insertBefore(m, y),
                                        f = y.nextSibling,
                                        c ? k(c) : T(y, i, !0),
                                        y = m) : S = !1) : c && (S = !1),
                                        (S = !1 !== S && s(y, g)) && C(y, g)) : 3 !== E && 8 != E || (S = !0,
                                        y.nodeValue = g.nodeValue)),
                                        S) {
                                            g = h,
                                            y = f;
                                            continue t
                                        }
                                        c ? k(c) : T(y, i, !0),
                                        y = f
                                    }
                                    if (u && (m = x[u]) && s(m, g))
                                        i.appendChild(m),
                                        C(m, g);
                                    else {
                                        var N = p(g);
                                        !1 !== N && (N && (g = N),
                                        g.actualize && (g = g.actualize(i.ownerDocument || o)),
                                        i.appendChild(g),
                                        A(g))
                                    }
                                    g = h,
                                    y = f
                                }
                                for (; y; )
                                    f = y.nextSibling,
                                    (c = _(y)) ? k(c) : T(y, i, !0),
                                    y = f
                            }
                            var O = d[i.nodeName];
                            O && O(i, n)
                        }
                    }
                    !function t(e) {
                        if (1 === e.nodeType)
                            for (var i = e.firstChild; i; ) {
                                var n = _(i);
                                n && (x[n] = i),
                                t(i),
                                i = i.nextSibling
                            }
                    }(t);
                    var N, O, P = t, I = P.nodeType, M = e.nodeType;
                    if (!E)
                        if (1 === I)
                            1 === M ? s(t, e) || (y(t),
                            P = function(t, e) {
                                for (var i = t.firstChild; i; ) {
                                    var n = i.nextSibling;
                                    e.appendChild(i),
                                    i = n
                                }
                                return e
                            }(t, (N = e.nodeName,
                            (O = e.namespaceURI) && "http://www.w3.org/1999/xhtml" !== O ? o.createElementNS(O, N) : o.createElement(N)))) : P = e;
                        else if (3 === I || 8 === I) {
                            if (M === I)
                                return P.nodeValue = e.nodeValue,
                                P;
                            P = e
                        }
                    if (P === e)
                        y(t);
                    else if (C(P, e, E),
                    h)
                        for (var R = 0, D = h.length; R < D; R++) {
                            var L = x[h[R]];
                            L && T(L, L.parentNode, !1)
                        }
                    return !E && P !== t && t.parentNode && (P.actualize && (P = P.actualize(t.ownerDocument || o)),
                    t.parentNode.replaceChild(P, t)),
                    P
                };
                t.exports = f
            }
            , function(t, e, i) {
                t.exports = i(1)
            }
            ])
        }
        ,
        t.exports = e();
        var i = "virtualized-list";
        window.define(i, (function() {
            var e = "undefined"
              , i = typeof __webpack_exports__ === e ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === e ? typeof t === e ? void 0 : t.exports : __WEBPACK_AMD_DEFINE_RESULT__ : __webpack_exports__;
            return i && i.default || i
        }
        )),
        window.require([i])
    }
}]);
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
    id: "build_2025_07_01_16_55_40_release"
},
function() {
    try {
        var t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}
          , e = (new Error).stack;
        e && (t._sentryDebugIds = t._sentryDebugIds || {},
        t._sentryDebugIds[e] = "d938640f-26c0-4c8a-a211-48c5b7c5b90e",
        t._sentryDebugIdIdentifier = "sentry-dbid-d938640f-26c0-4c8a-a211-48c5b7c5b90e")
    } catch (t) {}
}();
//# sourceMappingURL=68430.6133f3916aeb9f4cafda.js.map
