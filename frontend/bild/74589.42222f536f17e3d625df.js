"use strict";
(window.webpackChunk = window.webpackChunk || []).push([[74589], {
    58544: (e, t, n) => {
        n.r(t),
        n.d(t, {
            default: () => r
        });
        const r = {
            "operday-timer": "operday-timer",
            "operday-timer__holder": "operday-timer__holder",
            "operday-timer__input": "operday-timer__input",
            "operday-timer__input--white": "operday-timer__input--white",
            "operday-timer__text": "operday-timer__text",
            "operday-timer__seconds-wrapper": "operday-timer__seconds-wrapper",
            "operday-timer__control-element": "operday-timer__control-element",
            "svg-analytics--play-dims": "svg-analytics--play-dims",
            "svg-analytics--pause-dims": "svg-analytics--pause-dims",
            "operday-timer__control-element--play": "operday-timer__control-element--play",
            "operday-timer__control-element--pause": "operday-timer__control-element--pause",
            "operday-timer__colon": "operday-timer__colon",
            "operday-timer__suggest": "operday-timer__suggest",
            blinking: "blinking",
            "operday-timer__suggest--active-blinker": "operday-timer__suggest--active-blinker",
            "operday-timer__content": "operday-timer__content",
            "operday-timer__plug": "operday-timer__plug",
            "control--suggest--down-btn": "control--suggest--down-btn",
            "control--suggest--list-opened": "control--suggest--list-opened",
            "control--suggest--list--item": "control--suggest--list--item",
            "card-widgets": "card-widgets",
            "js-widgets-active": "js-widgets-active",
            "operday-timer__show": "operday-timer__show"
        }
    }
    ,
    507182: (e, t, n) => {
        n.r(t),
        n.d(t, {
            default: () => l
        });
        var r = n(987081);
        function i(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r)
            }
        }
        function o(e, t, n) {
            return o = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(e, t, n) {
                var r = function(e, t) {
                    for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = a(e)); )
                        ;
                    return e
                }(e, t);
                if (r) {
                    var i = Object.getOwnPropertyDescriptor(r, t);
                    return i.get ? i.get.call(n || e) : i.value
                }
            }
            ,
            o(e, t, n || e)
        }
        function a(e) {
            return a = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            ,
            a(e)
        }
        function s(e, t) {
            return s = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                e
            }
            ,
            s(e, t)
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
                var n, r = a(e);
                if (t) {
                    var i = a(this).constructor;
                    n = Reflect.construct(r, arguments, i)
                } else
                    n = r.apply(this, arguments);
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
                t && s(e, t)
            }(l, e);
            var t, n, u = c(l);
            function l() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                    t[n] = arguments[n];
                var r;
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, l),
                (r = u.call(this, t))._queuedValues = [],
                r
            }
            return t = l,
            (n = [{
                key: "next",
                value: function(e) {
                    this.closed || this.observers.length ? o(a(l.prototype), "next", this).call(this, e) : this._queuedValues.push(e)
                }
            }, {
                key: "_subscribe",
                value: function(e) {
                    var t = this
                      , n = r.Subject.prototype._subscribe.call(this, e);
                    return this._queuedValues.length && (this._queuedValues.forEach((function(e) {
                        o(a(l.prototype), "next", t).call(t, e)
                    }
                    )),
                    this._queuedValues.splice(0)),
                    n
                }
            }]) && i(t.prototype, n),
            l
        }(r.Subject);
        u.constructor = u;
        const l = u;
        var d = "../build/transpiled/common/rx/queueing_subject";
        window.define(d, (function() {
            var e = "undefined"
              , n = typeof t === e ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === e ? typeof module === e ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : t;
            return n && n.default || n
        }
        )),
        window.require([d])
    }
    ,
    910587: (e, t, n) => {
        n.r(t),
        n.d(t, {
            default: () => u
        });
        var r = n(55188)
          , i = n.n(r)
          , o = n(987081)
          , a = n(470505);
        function s(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        var c = function(e, t) {
            return new WebSocket(e,t)
        };
        function u(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : []
              , r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : c
              , u = new o.BehaviorSubject({
                state: 0,
                code: a.CONNECTION_CODES.DEFAULT
            })
              , l = new o.Observable((function(o) {
                var c = r(e, n)
                  , l = null
                  , d = !1
                  , f = 0
                  , p = function(e) {
                    var t, n;
                    f++,
                    u.next((t = function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {}
                              , r = Object.keys(n);
                            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable
                            }
                            )))),
                            r.forEach((function(t) {
                                s(e, t, n[t])
                            }
                            ))
                        }
                        return e
                    }({}, e),
                    n = null != (n = {
                        id: f
                    }) ? n : {},
                    Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : function(e, t) {
                        var n = Object.keys(e);
                        if (Object.getOwnPropertySymbols) {
                            var r = Object.getOwnPropertySymbols(e);
                            n.push.apply(n, r)
                        }
                        return n
                    }(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }
                    )),
                    t))
                }
                  , _ = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                      , t = e.code
                      , n = e.reason;
                    p({
                        state: 0,
                        code: t,
                        reason: void 0 === n ? "" : n
                    }),
                    d && (d = !1)
                };
                c.onopen = function() {
                    d = !0,
                    p({
                        state: 1,
                        code: a.CONNECTION_CODES.DEFAULT
                    }),
                    t && (l = t.subscribe((function(e) {
                        c.send(e)
                    }
                    )))
                }
                ,
                c.onmessage = function(e) {
                    o.next(e.data)
                }
                ,
                c.onerror = function(e) {
                    o.error(e),
                    _({
                        code: a.CONNECTION_CODES.DEFAULT
                    })
                }
                ,
                c.onclose = function(e) {
                    _({
                        code: e.code,
                        reason: e.reason
                    }),
                    e.wasClean ? o.complete() : o.error(new Error(e.reason))
                }
                ;
                var h = function() {
                    i().contains([c.CLOSED, c.CLOSING], c.readyState) || (_({
                        code: a.CONNECTION_CODES.OFFLINE
                    }),
                    c.close())
                };
                return window.addEventListener("offline", h),
                function() {
                    l && l.unsubscribe(),
                    window.removeEventListener("offline", h),
                    c && c.close()
                }
            }
            ));
            return {
                messages: l,
                connectionStatus: u
            }
        }
        var l = "../build/transpiled/common/rx/websockets";
        window.define(l, (function() {
            var e = "undefined"
              , n = typeof t === e ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === e ? typeof module === e ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : t;
            return n && n.default || n
        }
        )),
        window.require([l])
    }
    ,
    117209: (e, t, n) => {
        n.r(t),
        n.d(t, {
            default: () => a
        });
        var r = n(871082)
          , i = n.n(r)
          , o = n(832777);
        const a = new (i().Collection)([],{
            model: o.Model
        })
    }
    ,
    832777: (e, t, n) => {
        n.r(t),
        n.d(t, {
            Collection: () => g,
            Model: () => v
        });
        var r = n(55188)
          , i = n.n(r)
          , o = n(871082)
          , a = n.n(o)
          , s = n(678640)
          , c = n(579569)
          , u = n(189967)
          , l = n(500034)
          , d = n(661533)
          , f = (0,
        c.get)("all")
          , p = !i().isUndefined(window.safari);
        function _(e) {
            return f && f[e] && f[e].amo_profile_id || ""
        }
        var h = i().once((function() {
            var e = (0,
            s.isDev)() ? "https://web.dev.amo.tm" : "https://web.amo.tm"
              , t = i().propertyOf(APP.constant("account"));
            if (!t(["amo_messenger", "direct_migrated"]))
                return i().constant("");
            var n, r = t(["amo_messenger", "amo_id"]), o = t(["id"]), a = (0,
            c.current)("id"), u = _(a), l = (n = a,
            f && f[n] && f[n].title || ""), d = [u, r, o, encodeURIComponent(l)];
            if (d.length !== i().compact(d).length)
                return i().constant("");
            var p = btoa(d.join("_"));
            return i().bind((function(t) {
                var n = i().propertyOf(t)
                  , r = n(["id"])
                  , o = ""
                  , a = "";
                switch (n(["click", "type"])) {
                case "chat_direct":
                    o = "direct",
                    a = _(r);
                    break;
                case "chat_group":
                    o = "channel",
                    a = r;
                    break;
                default:
                    return ""
                }
                return a ? [e, "/", o, "/", a, p ? "?".concat("p", "=").concat(p) : ""].join("") : ""
            }
            ), this)
        }
        ))
          , y = a().Model.extend({
            view: null,
            allowed_tags: ["a"],
            constructor: function(e) {
                var t, n, r, o = ["lead", "customer", "contact", "company", "tasks"], s = this;
                if (e.notification_id || (e.notification_id = e.id),
                e.body) {
                    if (i().each(e.body.actions, (function(t, n) {
                        i().each(t, (function(t, r, a) {
                            if ("click" === n) {
                                if (Object.keys(a).length > 1 && -1 === i().indexOf(o, r))
                                    return;
                                e[n] = {
                                    type: r,
                                    value: t
                                },
                                i().extend(e, this.parseAttributes(e.body.actions[n], n))
                            } else
                                i().isUndefined(e.buttons) && (e.buttons = []),
                                e.buttons[r] || e.buttons.push(i().extend(t, this.parseAttributes(e.body.actions[n][r])))
                        }
                        ), this)
                    }
                    ), this),
                    e.body.icon)
                        switch (!0) {
                        case !i().isUndefined(e.body.icon.profile):
                            n = (0,
                            c.get)("all")[e.body.icon.profile],
                            e.body.icon.user_id = n ? n.id : "",
                            e.body.icon.avatar_id = n ? n.id : "",
                            e.body.icon.value = n ? n.avatar : "";
                            break;
                        case !i().isUndefined(e.body.icon.bot):
                            n = APP.constant("amojo_bots")[e.body.icon.bot],
                            e.body.icon.value = n ? n.avatar : "/frontend/images/interface/inbox/mesage_bot_avatar.png";
                            break;
                        case !i().isUndefined(e.body.icon.robot):
                            t = "error" === e.body.icon.robot ? "error_" : "",
                            e.body.icon.value = "/frontend/images/interface/inbox/".concat(t, "mesage_bot_avatar.png");
                            break;
                        case !i().isUndefined(e.body.icon.url):
                            e.body.icon.value = e.body.icon.url;
                            break;
                        case !i().isUndefined(e.body.icon.call):
                            e.body.icon.value = "/frontend/images/interface/inbox/notifications_call.svg";
                            break;
                        case !i().isUndefined(e.body.icon.auto):
                            e.body.icon.avatar_id = parseInt(e.id, 16)
                        }
                    e.body.rows && (r = e.body.rows,
                    this.getStyleMessage(r),
                    e.body.__old_type && r.length && i().each(r, (function(e) {
                        e.text = i().map(d.parseHTML(e.text), (function(e) {
                            return !e.tagName || i().contains(s.allowed_tags, e.tagName.toLowerCase()) ? e.outerHTML || e.textContent : ""
                        }
                        )).join("")
                    }
                    ))),
                    !e.id && e.external_id && (e.id = e.external_id),
                    this.getIconSub(e.body),
                    this._getShowMoreButton(e.body)
                }
                e.amo_link = h()(e),
                e.is_native_link = Boolean(e.amo_link && p),
                a().Model.apply(this, arguments)
            },
            _getShowMoreButton: function(e) {
                var t = e.rows
                  , n = ""
                  , r = {
                    h3: 57
                };
                i().each(t, (function(o, a) {
                    if (n += o.text,
                    a === t.length - 1 && r[o.class_height]) {
                        var s = d('<div style="width: 239px; opacity:0; position:absolute">'.concat(i().escape(n), "</div>")).get(0);
                        if (s) {
                            document.body.appendChild(s);
                            var c = s.offsetHeight;
                            e.showMoreButton = c > r.h3,
                            s.parentNode === document.body && document.body.removeChild(s)
                        }
                    }
                }
                ))
            },
            parseAttributes: function(e, t) {
                var n, r = {};
                if ((0,
                l.isFeatureAvailable)("global_inbox") && (0,
                u.isChatsInboxEnabled)() && !e.task)
                    switch (!0) {
                    case Boolean(e.lead) && Boolean(e.talk_id):
                        r.web_link = "/chats/".concat(e.talk_id, "/leads/detail/").concat(e.lead);
                        break;
                    case Boolean(e.lead):
                        r.web_link = "/chats/mentions/leads/detail/".concat(e.lead);
                        break;
                    case Boolean(e.contact) && Boolean(e.talk_id):
                        r.web_link = "/chats/".concat(e.talk_id, "/contacts/detail/").concat(e.contact);
                        break;
                    case Boolean(e.customer) && Boolean(e.talk_id):
                        r.web_link = "/chats/".concat(e.talk_id, "/customers/detail/").concat(e.customer);
                        break;
                    case Boolean(e.customer):
                        r.web_link = "/chats/mentions/customers/detail/".concat(e.customer);
                        break;
                    case Boolean(e.chat_direct):
                        n = (0,
                        c.get)("all")[e.chat_direct],
                        (r = t ? {
                            click: {
                                type: "chat_direct"
                            }
                        } : {
                            type: "chat_direct"
                        }).login = n ? n.login : "",
                        r.id = r.user_id = e.chat_direct.toString(),
                        r.web_link = "/chats/mentions/".concat(e.chat_direct);
                        break;
                    case Boolean(e.chat_group):
                        (r = t ? {
                            click: {
                                type: "chat_group"
                            }
                        } : {
                            type: "chat_group"
                        }).id = e.chat_group,
                        r.web_link = "/chats/mentions/".concat(e.chat_group);
                        break;
                    case Boolean(e.url):
                        r.web_link = e.url,
                        r.absolute_link = (0,
                        s.isValidUrl)(e.url);
                        break;
                    case Boolean(e.chat_bot):
                        (r = t ? {
                            click: {
                                type: "chat_direct"
                            }
                        } : {
                            type: "chat_direct"
                        }).id = r.user_id = e.chat_bot.toString(),
                        r.is_bot = !0;
                        break;
                    case Boolean(e.event):
                        var o = e.event;
                        "amo:js:action" === o.name && (r.custom_action_hash = i().first(i().values(o.data)))
                    }
                else
                    switch (!0) {
                    case !i().isUndefined(e.event):
                        r = t ? {
                            click: {
                                type: "event"
                            }
                        } : {
                            type: "event"
                        };
                        break;
                    case !i().isUndefined(e.company):
                        r.web_link = "/companies/detail/".concat(e.company);
                        break;
                    case !i().isUndefined(e.customer):
                        r.web_link = "/customers/detail/".concat(e.customer);
                        break;
                    case !i().isUndefined(e.contact):
                        r.web_link = "/contacts/detail/".concat(e.contact);
                        break;
                    case !i().isUndefined(e.lead):
                        r.web_link = "/leads/detail/".concat(e.lead);
                        break;
                    case !i().isUndefined(e.unsorted):
                        r.web_link = "/unsorted/detail/".concat(e.unsorted);
                        break;
                    case !i().isUndefined(e.task):
                    case !i().isUndefined(e.tasks):
                        r.web_link = "/todo/line/";
                        break;
                    case !i().isUndefined(e.url):
                        r.web_link = e.url,
                        r.absolute_link = (0,
                        s.isValidUrl)(e.url);
                        break;
                    case !i().isUndefined(e.chat_bot):
                        (r = t ? {
                            click: {
                                type: "chat_direct"
                            }
                        } : {
                            type: "chat_direct"
                        }).id = r.user_id = e.chat_bot.toString(),
                        r.is_bot = !0;
                        break;
                    case !i().isUndefined(e.chat_direct):
                        n = (0,
                        c.get)("all")[e.chat_direct],
                        (r = t ? {
                            click: {
                                type: "chat_direct"
                            }
                        } : {
                            type: "chat_direct"
                        }).login = n ? n.login : "",
                        r.id = r.user_id = e.chat_direct.toString();
                        break;
                    case !i().isUndefined(e.chat_group):
                        (r = t ? {
                            click: {
                                type: "chat_group"
                            }
                        } : {
                            type: "chat_group"
                        }).id = e.chat_group
                    }
                return r
            },
            getIconSub: function(e) {
                var t = !!e.icon && e.icon.sub;
                t && APP.constant("amojo_origins")[t] && (e.icon_origin = APP.constant("amojo_origins")[t].icon || !1)
            },
            getStyleMessage: function(e) {
                i().chain(e).sortBy((function(e) {
                    return e.text.length
                }
                )).reverse().each((function(t, n) {
                    switch (e.length) {
                    case 1:
                        t.class_height = "h3";
                        break;
                    case 2:
                        t.class_height = 0 === n ? "h2" : "h1";
                        break;
                    case 3:
                        e[n].class_height = 2 === n ? "h2" : "h1"
                    }
                }
                ))
            }
        })
          , m = a().Collection.extend({
            model: y,
            initialize: function() {
                this.listenTo(this, "change:selected", this.onChangeSelected),
                a().Collection.prototype.initialize.apply(this, arguments)
            },
            preselect: function(e) {
                var t, n = this.findWhere({
                    preselected: !0
                });
                switch (n ? n.set("preselected", !1) : n = this.findWhere({
                    selected: !0
                }),
                t = this.indexOf(n) + e,
                !0) {
                case -1 === t:
                case -2 === t:
                    t = 0;
                    break;
                case t === this.length:
                    t = this.length - 1
                }
                this.at(t).set("preselected", !0)
            },
            select: function() {
                var e = this.findWhere({
                    preselected: !0
                });
                e && e.set({
                    preselected: !1,
                    selected: !0
                })
            },
            setOrder: function(e) {
                this.order_by = e
            },
            sort: function(e) {
                var t, n = this.findWhere({
                    selected: !0
                }), r = this.indexOf(n);
                return e = e = {},
                this.models = this.sortBy(this.comparator, this),
                n && (t = i().indexOf(this.models, n)) !== r && (this.models.splice(t, 1),
                this.models.splice(r, 0, n)),
                e.silent || this.trigger("sort", this, e),
                this
            },
            comparator: function(e) {
                var t = 1
                  , n = e.get("click") ? e.get("click").type : "";
                if (this.order_by) {
                    var r = this.order_by.unread_first;
                    switch (!0) {
                    case !i().isUndefined(r):
                        t = "true" === r && e.get("is_read") ? 1 : 2;
                        break;
                    case !i().isUndefined(this.order_by.starred_first):
                        t = e.get("label") ? 2 : 1
                    }
                }
                return i().contains(["payment_expired", "payment_overflow", "payment_pay"], n) && (t = 3),
                -e.get("updated_at") * t
            },
            onChangeSelected: function(e) {
                if (e.get("selected")) {
                    var t = i().find(this.without(e), (function(e) {
                        return e.get("selected")
                    }
                    ))
                      , n = this.findWhere({
                        preselected: !0
                    });
                    t && t.set("selected", !1),
                    n && n.set("preselected", !1),
                    this.sort()
                }
            }
        })
          , g = m
          , v = y
          , b = "../build/transpiled/components/base/inbox/notification_collection";
        window.define(b, (function() {
            var e = "undefined"
              , n = typeof t === e ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === e ? typeof module === e ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : t;
            return n && n.default || n
        }
        )),
        window.require([b])
    }
    ,
    655222: (e, t, n) => {
        n.r(t),
        n.d(t, {
            default: () => p
        });
        var r = n(55188)
          , i = n.n(r)
          , o = n(987081)
          , a = n(128508)
          , s = (n(643095),
        n(470505))
          , c = n(315702);
        function u(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        var l = 1
          , d = []
          , f = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            !function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {}
                      , r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }
                    )))),
                    r.forEach((function(t) {
                        u(e, t, n[t])
                    }
                    ))
                }
            }({
                socketName: s.SOCKET_NAMES.AMOJO
            }, e)
        };
        function p(e, t) {
            var n, r, u, p, _ = function() {
                d.length ? i().each(d, (function(e) {
                    return e.closeHard()
                }
                )) : m.next()
            }, h = !1, y = 0, m = new o.Subject, g = m.pipe(a.switchMap((function() {
                return o.timer(0)
            }
            ))), v = i().extend({}, {
                connect: o.of(e),
                onConnectionChange: i().noop
            }, t) || {}, b = (p = [],
            n || (n = new o.Observable((function(e) {
                v.connect().subscribe((function(t) {
                    var n = t.url
                      , o = i().once((function() {
                        return v.onConnectionChange({
                            status: s.SOCKET_STATE.DISCONNECTED,
                            delay: 0
                        })
                    }
                    ));
                    (r = new WebSocket(n)).onmessage = function(t) {
                        e.next(t)
                    }
                    ,
                    r.onerror = function(t) {
                        e.error(t)
                    }
                    ,
                    r.onclose = function(t) {
                        var n;
                        if (i().contains(d, t.target)) {
                            var a = t.code;
                            if (o(),
                            d = i().without(d, t.target),
                            r = null,
                            u = a === s.CONNECTION_CODES.UNAUTHORIZED,
                            !h && (null === (n = window.navigator) || void 0 === n ? void 0 : n.onLine) && a !== s.CONNECTION_CODES.NORMAL_CLOSURE && f({
                                code: a,
                                reason: t.reason
                            }),
                            h || !t.wasClean || a !== s.CONNECTION_CODES.NORMAL_CLOSURE)
                                return e.error(t);
                            e.complete()
                        }
                    }
                    ,
                    r.onopen = function() {
                        y = 0,
                        p.length && (i().each(p, r.send, r),
                        p = []),
                        v.onConnectionChange({
                            status: s.SOCKET_STATE.CONNECTED,
                            delay: 0
                        })
                    }
                    ,
                    r.closeHard = function() {
                        o(),
                        r.readyState === WebSocket.CLOSED ? e.error({
                            force: !0
                        }) : (r.close(),
                        h = !0)
                    }
                    ,
                    d.push(r)
                }
                ), e.error.bind(e))
            }
            )).pipe(a.retryWhen((function(e) {
                return e.pipe(a.switchMap((function(e) {
                    if (402 === e.status)
                        throw new Error("Payment required");
                    if (!u) {
                        (y > 7 || e.force) && (y = 0);
                        var t = (0,
                        c.exponentialDelay)(y, {
                            with_jitter: !0
                        });
                        return y++,
                        v.onConnectionChange({
                            status: s.SOCKET_STATE.CONNECTING,
                            delay: t,
                            reason: e.reason || "",
                            statusCode: e.code
                        }),
                        o.race(g, o.timer(t))
                    }
                    return o.from([])
                }
                )))
            }
            )), a.shareReplay())),
            {
                socket: n,
                send: function(e) {
                    e = arguments.length > 1 && void 0 !== arguments[1] && !arguments[1] ? e : JSON.stringify(e),
                    r && r.send && r.readyState === l ? r.send(e) : p.push(e)
                }
            });
            return window.addEventListener("online", _),
            {
                socket: b.socket,
                send: b.send,
                reconnect: _
            }
        }
        var _ = "../build/transpiled/components/base/sockets/socket2v";
        window.define(_, (function() {
            var e = "undefined"
              , n = typeof t === e ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === e ? typeof module === e ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : t;
            return n && n.default || n
        }
        )),
        window.require([_])
    }
    ,
    597792: (e, t, n) => {
        n.r(t),
        n.d(t, {
            default: () => d
        });
        var r = n(661533)
          , i = n.n(r)
          , o = n(55188)
          , a = n.n(o)
          , s = n(988050)
          , c = n(521466)
          , u = ["companies", "contacts", "leads", "customers"]
          , l = ["leads", "contacts", "customers"];
        const d = new (c.default.extend({
            _state: null,
            $card: i()(),
            _classes: function() {
                return {
                    active: "js-widgets-active",
                    card: "content__card-holder-widgets",
                    zindex: "with_overlay"
                }
            },
            _selectors: function() {
                return {
                    top: ".card-widgets__top",
                    body: "#nano-card-widgets",
                    cap: ".js-card-widgets-cap",
                    caption: ".card-widgets__widget__caption"
                }
            },
            events: {
                "click .js-widget-caption-block": "onWidgetCaptionClick"
            },
            document_events: {
                "widgets_body:change_state": "onWidgetsBodyChangeSize",
                openWidgetPanel: "onOpenWidgetPanel",
                "click #card_widgets_overlay": "closePanel"
            },
            _events_card: {
                "click .card-widgets__top": "onWidgetsBlockTopClick",
                "click .card-widgets__elements": "onWidgetsElementClick"
            },
            _getStateCode: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : APP.getBaseEntity();
                return "".concat(e, "_crd_wdgt")
            },
            resetStates: function() {
                this.setState(0),
                a().each(u, (function(e) {
                    this.keepState(0, e)
                }
                ), this)
            },
            keepState: function(e, t) {
                (this._isCard() || t) && (t = t || APP.getBaseEntity(),
                (0,
                s.set)({
                    name: this._getStateCode(t),
                    value: e
                }))
            },
            setState: function(e) {
                return this._state = e,
                this._state
            },
            getCurrentState: function() {
                return a().isNull(this._state) && (this.setState(parseInt((0,
                s.get)(this._getStateCode()) || 0)),
                APP.is_widgets_maximized && this.setState(1),
                APP.notSmall || 1 !== this._state || this.setState(0)),
                this._state
            },
            _isCard: function() {
                var e = APP.getWidgetsArea() || "";
                return e.indexOf("_card") > 0 && a().indexOf(u, e.replace("_card", "")) >= 0
            },
            destroy: function() {
                this.setState(null),
                this.undelegateEvents(),
                APP.data.is_card || this._checkRightColumnWidgets(!0),
                this.$card.removeClass(this._class("active")),
                this.$el.hide()
            },
            init: function() {
                var e = a().extend({}, this.events);
                "widgets_block" !== this.$el.attr("id") && (this.setElement(i()("#widgets_block")),
                this.$card = i()("#card_holder")),
                this._isCard() ? (a().extend(e, this._events_card),
                this._$document.on("widgets:card-maximized", a().bind(this.onWindowWidgetsResize, this)).on("widgets:card-minimized", a().bind(this.onWindowWidgetsResize, this)),
                this.$el.hasClass(this._class("active")) && a().delay(a().bind(this.toggleWidget, this, this.$(".card-widgets__widget:first"), !0), 500)) : this.$el.removeClass(this._class("active")),
                this.delegateEvents(e),
                this.checkBlockAction()
            },
            onWidgetsBodyChangeSize: function(e, t) {
                this.toggleWidget(t.$el, t.state)
            },
            onOpenWidgetPanel: function() {
                this.openPanel(null)
            },
            onWidgetsBlockTopClick: function(e) {
                var t = this.getCurrentState();
                !APP.is_widgets_maximized && this._isCard() && (t ? this.closePanel() : this.openPanel(),
                APP.notSmall && this.keepState(t ? 0 : 1),
                e.stopPropagation())
            },
            onWidgetsElementClick: function(e) {
                var t = i()(e.currentTarget)
                  , n = i()(e.target)
                  , r = t.closest(".card-widgets__widget");
                this.$card.hasClass(this._class("active")) || (r.length > 0 ? (this.openPanel(t.closest(".card-widgets__widget")),
                e.stopPropagation()) : n.closest(".js-operday-timer").length || this.openPanel())
            },
            onWindowWidgetsResize: function() {
                APP.notSmall ? (this.hideOverlay(),
                this.openPanel()) : (this.resetStates(),
                this.closePanel())
            },
            onWidgetCaptionClick: function(e) {
                var t, n;
                this.$el.hasClass(this._class("active")) && (n = "open",
                (t = i()(e.target).closest(".card-widgets__widget")).find(".card-widgets__widget__body").hasClass("js-body-hide") && (n = "close"),
                this["".concat(n, "Widget")](t),
                e.stopPropagation())
            },
            checkBlockAction: function() {
                this._checkRightColumnWidgets(),
                this._isCard() ? (1 === this.getCurrentState() ? this.$card.add(i()("#card_fake")).add(this.$el).addClass(this._class("active")) : this.$card.add(i()("#card_fake")).add(this.$el).removeClass(this._class("active")),
                this.$el.show(),
                this._findElem("top").show(),
                this._findElem("body").removeClass("in_list"),
                this._$document.trigger("widgets-in-card:show")) : (this.hideOverlay(),
                this.$el.hide())
            },
            _checkRightColumnWidgets: function(e) {
                var t = this.getCardWidgetsCount();
                APP.first_load || (parseInt(t) > 0 || e ? (this.$card.removeClass("js-widgets-hidden"),
                this.toggleCap(!1)) : (this.$card.addClass("js-widgets-hidden"),
                this.toggleCap(!0)))
            },
            getCardWidgetsCount: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : APP.getBaseEntity()
                  , t = APP.widgets.system.displayed_count_by_area || {};
                return (t["".concat(e, "_card")] || 0) + (t.everywhere || 0)
            },
            toggleCap: function(e) {
                e ? (this.$el.removeClass("_with-scroll"),
                this._findElem("cap").removeClass("_with-widgets")) : (this.$el.addClass("_with-scroll"),
                this._findElem("cap").addClass("_with-widgets"))
            },
            toggleWidget: function(e, t) {
                t ? this.openWidget(e) : this.closeWidget(e)
            },
            openWidget: function(e) {
                e.find(".card-widgets__widget__caption__arrow").addClass("widgets__widget__caption__arrow_top").removeClass("widgets__widget__caption__arrow_bottom"),
                e.find(".card-widgets__widget__body").show().addClass("js-body-hide")
            },
            closeWidget: function(e) {
                e.find(".card-widgets__widget__caption__arrow").removeClass("widgets__widget__caption__arrow_top").addClass("widgets__widget__caption__arrow_bottom"),
                e.find(".card-widgets__widget__body").hide().removeClass("js-body-hide")
            },
            openPanel: function(e) {
                var t = this._findElem("caption");
                this.$card.addClass([this._class("card"), this._class("active")].join(" ")),
                this.$el.addClass(this._class("active")),
                t.find(".card-widgets__widget__caption__arrow, .card-widgets__widget__caption__logo").show(),
                e || (e = this.$el.find(".card-widgets__widget:first")),
                this.openWidget(e),
                t.find(".card-widgets__widget__caption__logo_min").hide(),
                this.setState(1),
                this.overlayStateTrigger(),
                this._$document.trigger("toggleWidgetPanel")
            },
            closePanel: function() {
                if (!a().includes(l, APP.getWidgetsArea())) {
                    var e = this._findElem("caption");
                    this.$el.removeClass([this._class("zindex"), this._class("active")].join(" ")),
                    this.$card.removeClass(this._class("active")),
                    e.find(".card-widgets__widget__caption__arrow, .card-widgets__widget__caption__logo").hide(),
                    this.toggleWidget(this.$el.find(".card-widgets__widget"), !1),
                    e.find(".card-widgets__widget__caption__logo_min").show(),
                    this.setState(0),
                    this.overlayStateTrigger(),
                    this._$document.trigger("toggleWidgetPanel")
                }
            },
            overlayStateTrigger: function() {
                var e = this.getCurrentState();
                APP.notSmall || (e ? (this.$el.addClass(this._class("zindex")),
                this.showOverlay()) : (this.$el.removeClass(this._class("zindex")),
                this.hideOverlay()))
            },
            showOverlay: function() {
                var e = i()("#card_widgets_overlay");
                e.length || (e = i()('<div class="default-overlay" id="card_widgets_overlay" style="z-index:105"></div>'),
                this._$body.append(e)),
                e.trigger("overlay:show", {
                    instantly: !0
                })
            },
            hideOverlay: function() {
                i()("#card_widgets_overlay").trigger("overlay:hide", {
                    instantly: !0
                })
            }
        }, {
            el: i()("#widgets_block")
        }));
        var f = "../build/transpiled/components/widgets/block_actions";
        window.define(f, (function() {
            var e = "undefined"
              , n = typeof t === e ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === e ? typeof module === e ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : t;
            return n && n.default || n
        }
        )),
        window.require([f])
    }
    ,
    729153: (e, t, n) => {
        n.r(t),
        n.d(t, {
            default: () => h
        });
        var r = n(661533)
          , i = n.n(r)
          , o = n(55188)
          , a = n.n(o)
          , s = n(315702)
          , c = n(208928)
          , u = n(513934)
          , l = APP.constant("version")
          , d = APP.constant("version_backend")
          , f = a().propertyOf(window)(["performance", "timing", "responseEnd"]) || 0
          , p = null;
        function _(e, t) {
            var n = Date.now() - f
              , r = i().Deferred();
            return n < (t = a().isNumber(t) ? t : 6e4) ? e().then(r.resolve, r.reject) : (f = Date.now(),
            p || (p = i().ajax({
                url: "/private/ping.php"
            }).always((function() {
                p = null
            }
            ))),
            p.done((function() {
                e().then(r.resolve, r.reject)
            }
            )).fail(r.reject)),
            r.promise()
        }
        "production" === APP.environment && i()(document).ajaxComplete((function(e, t, n) {
            var r = APP.constant("server")
              , o = t.getResponseHeader("X-Core-Version")
              , f = t.getResponseHeader("X-Core-Server")
              , p = t.getResponseHeader("X-Core-Version-Backend")
              , _ = t.getResponseHeader("X-Generation-Time")
              , h = t.getResponseHeader("X-Generation-Time-System")
              , y = t.getResponseHeader("X-Core-Session-Token")
              , m = t.getResponseHeader("X-Core-Widgets-Cache-Version")
              , g = {}
              , v = 0
              , b = t === APP.page_xhr
              , w = (0,
            c.getCallingStatus)()
              , E = a().isNull(o) || l === o
              , C = a().isNull(p) || d === p;
            f && f !== r && APP.constant("server", f),
            y && y !== APP.constant("session_token") && APP.constant("session_token", y),
            (_ || h) && (v = _ || h,
            i()(document).find(".generation-time").append("<br>".concat(v, " - ").concat(n.url))),
            E && C || w || (C && b || !C) && (window.location.href = document.URL),
            a().isEmpty(m) || (g[APP.getWidgetsArea()] = m,
            a().extend(APP.constant("widgets_cache_version"), g),
            s.storeWithExpiration.remove(u.default.getCacheCode()))
        }
        ));
        const h = {
            check: function() {
                var e = i().Deferred();
                return e.resolve(),
                _(e.promise, 0)
            },
            checkAuth: _
        };
        var y = "../build/transpiled/core/updater";
        window.define(y, (function() {
            var e = "undefined"
              , n = typeof t === e ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === e ? typeof module === e ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : t;
            return n && n.default || n
        }
        )),
        window.require([y])
    }
    ,
    714255: (e, t, n) => {
        n.r(t),
        n.d(t, {
            default: () => o
        });
        var r = APP.constant("user");
        function i(e, t, n, r) {
            this.expiredAt = n || 0,
            this.refreshToken = t,
            this.token = e,
            this.user = r
        }
        i.fromJSON = function(e) {
            var t;
            try {
                t = JSON.parse(e)
            } catch (e) {
                t = {}
            }
            return new i(t.token,t.refreshToken,t.expiredAt,t.user)
        }
        ,
        i.prototype = {
            expiredAt: 0,
            token: "",
            refreshToken: "",
            user: 0,
            expired: function() {
                return 1e3 * this.expiredAt < (new Date).getTime()
            },
            expiresInDays: function() {
                return (1e3 * this.expiredAt - (new Date).getTime()) / 864e5
            },
            getReasonInvalid: function() {
                return {
                    isExpired: this.expired(),
                    availableAccess: this.token.length > 0,
                    availableRefresh: this.refreshToken.length > 0,
                    user: this.user,
                    isValidUser: this.user.toString() === r.id.toString()
                }
            },
            valid: function() {
                return this.expiredAt > 0 && !this.expired() && this.token.length > 0 && this.refreshToken.length > 0 && this.user.toString() === r.id.toString()
            },
            toString: function() {
                return JSON.stringify(this)
            }
        };
        const o = i;
        var a = "../build/transpiled/interface/amojo/access_token";
        window.define(a, (function() {
            var e = "undefined"
              , n = typeof t === e ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === e ? typeof module === e ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : t;
            return n && n.default || n
        }
        )),
        window.require([a])
    }
    ,
    987280: (e, t, n) => {
        n.r(t),
        n.d(t, {
            CHAT_DIRECT: () => k,
            CHAT_EXTERNAL: () => E,
            CHAT_EXTERNAL_INT: () => O,
            CHAT_GROUP: () => S,
            CHAT_GROUP_TYPE: () => P,
            CHAT_INTERNAL: () => w,
            CHAT_INTERNAL_INT: () => T,
            CHAT_WRITE_FIRST: () => C,
            addUsersToChat: () => Z,
            connectBot: () => Y,
            createChat: () => V,
            deleteFile: () => I,
            disableChannel: () => le,
            downloadFile: () => L,
            fetchMessages: () => J,
            fetchMessagesById: () => G,
            getChat: () => ne,
            getChatsStat: () => z,
            getFile: () => M,
            getGroupChats: () => re,
            getLinks: () => X,
            getSalesbots: () => ce,
            getTemplates: () => ae,
            initChannel: () => ue,
            readChat: () => K,
            removeUsersFromChat: () => Q,
            rtmStart: () => ee,
            sendFile: () => W,
            sendMessage: () => H,
            sendMessagev1: () => q,
            sendReaction: () => $,
            sendTyping: () => B,
            transcribeMessage: () => te,
            updateAutoClose: () => N,
            updateGroupChat: () => ie,
            uploadFile: () => R,
            uploadMessageFile: () => U,
            withToken: () => D
        });
        var r = n(661533)
          , i = n.n(r)
          , o = n(55188)
          , a = n.n(o)
          , s = n(987081)
          , c = n(128508)
          , u = n(623967)
          , l = n.n(u)
          , d = n(579569)
          , f = n(880774)
          , p = n(369889)
          , _ = n(299976);
        function h(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        function y(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {}
                  , r = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                }
                )))),
                r.forEach((function(t) {
                    h(e, t, n[t])
                }
                ))
            }
            return e
        }
        function m(e, t) {
            if (null == e)
                return {};
            var n, r, i = function(e, t) {
                if (null == e)
                    return {};
                var n, r, i = {}, o = Object.keys(e);
                for (r = 0; r < o.length; r++)
                    n = o[r],
                    t.indexOf(n) >= 0 || (i[n] = e[n]);
                return i
            }(e, t);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                for (r = 0; r < o.length; r++)
                    n = o[r],
                    t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
            }
            return i
        }
        var g = APP.constant("account") || {}
          , v = g.amojo_server
          , b = g.amojo_ws_server
          , w = "internal"
          , E = "external"
          , C = "write_first"
          , T = 2
          , O = 1
          , k = "direct"
          , S = "group"
          , P = 4
          , A = 15e3
          , j = {
            sendMessage: function(e) {
                return "".concat(v, "/chats/").concat(g.amojo_id, "/").concat(e, "/messages?stand=").concat(g.stand)
            },
            sendMessagev1: function(e) {
                return "".concat(v, "/v1/chats/").concat(g.amojo_id, "/").concat(e, "/messages?with_video=true&stand=").concat(g.stand)
            },
            sendPhoto: function(e) {
                return "".concat(v, "/v2/").concat(e, "/sendPhoto?stand=").concat(g.stand)
            },
            sendVideo: function(e) {
                return "".concat(v, "/v2/").concat(e, "/sendVideo?stand=").concat(g.stand)
            },
            sendDocument: function(e) {
                return "".concat(v, "/v2/").concat(e, "/sendDocument?stand=").concat(g.stand)
            },
            sendMessageWithFiles: function(e) {
                return "".concat(v, "/v2/").concat(e, "/sendMessage?stand=").concat(g.stand)
            },
            sendReaction: function(e) {
                return "".concat(v, "/v2/messages/").concat(e, "/react")
            },
            sendTyping: function() {
                return "".concat(v, "/v2/typing?stand=").concat(g.stand)
            },
            fetchMessages: function(e) {
                return "".concat(v, "/chats/").concat(g.amojo_id, "/").concat(e, "/messages?stand=").concat(g.stand)
            },
            fetchMessagesMultiple: function() {
                return "".concat(v, "/messages/").concat(g.amojo_id, "/merge?stand=").concat(g.stand)
            },
            fetchMessagesById: function() {
                return "".concat(v, "/v2/messages")
            },
            uploadFile: function() {
                return "".concat(v, "/v2/attachment/?with_video=true&stand=").concat(g.stand)
            },
            getFile: function(e) {
                return "".concat(v, "/v2/attachment/").concat(e, "?stand=").concat(g.stand)
            },
            deleteFile: function() {
                return "".concat(v, "/v2/attachment/?stand=").concat(g.stand)
            },
            createChat: function() {
                return "/ajax/v1/chats/create"
            },
            readChat: function() {
                return "".concat(v, "/v2/read?stand=").concat(g.stand)
            },
            connectBot: function() {
                return "/ajax/v1/chats/bots/connect"
            },
            manageUsersInChat: function() {
                return "/ajax/v1/chats/users"
            },
            rtmStart: function() {
                return "".concat(b, "/rtm.start/").concat(g.amojo_id, "?stand=").concat(g.stand)
            },
            getChat: function(e) {
                return "/ajax/v1/chats/list?fields=users&short=y&filter[chat_id]=".concat(e)
            },
            getGroupChats: function(e, t) {
                return "/ajax/v1/chats/group_list?fields=".concat((t || []).join(","))
            },
            getChatsStat: function() {
                return "".concat(v, "/v2/stat/chats?stand=").concat(g.stand)
            },
            updateChat: function() {
                return "/ajax/v1/chats/update/"
            },
            initChannel: function() {
                return "/ajax/v1/chats/bots/channel_init"
            },
            disableChannel: function() {
                return "/ajax/v1/chats/bots/channel_disable"
            },
            getTemplates: function() {
                return "/ajax/v4/chats/templates?with=favorite"
            },
            getSalesbots: function() {
                return "/api/v4/bots?with=favorite"
            },
            updateAutoClose: function(e) {
                return "/ajax/v2/talks/".concat(e)
            },
            transcribeMessage: function(e) {
                return "".concat(v, "/v2/messages/").concat(e, "/transcribe?stand=").concat(g.stand, "&lang=").concat(APP.lang_id)
            },
            downloadFile: function(e) {
                return "".concat(v, "/v2/files/").concat(e, "/load")
            }
        };
        function x() {
            var e = (0,
            d.current)().id
              , t = (0,
            d.get)(e)
              , n = window.location.origin.replace(/\w+(?=\.)/, "images") + (t.avatar || (0,
            f.getDefaultAvatar)(e));
            return {
                persona_name: t.title,
                persona_avatar: n
            }
        }
        function N(e, t) {
            var n = {
                auto_close: t
            };
            return i().ajax({
                method: "POST",
                url: j.updateAutoClose(e),
                data: JSON.stringify(n),
                dataType: "json",
                contentType: "application/json"
            })
        }
        function D(e) {
            return p.default.inject(e)
        }
        function I(e) {
            var t = new FormData;
            return t.append("file_id", e),
            D((function(e) {
                return s.from(i().ajaxPromisify({
                    url: j.deleteFile(),
                    data: t,
                    headers: {
                        "X-Auth-Token": e.token
                    },
                    type: "DELETE",
                    processData: !1,
                    contentType: !1
                }))
            }
            ))
        }
        function R(e) {
            var t = new FormData;
            return t.append("attachment", e.file),
            D((function(e) {
                return s.from(i().ajaxPromisify({
                    url: j.uploadFile(),
                    headers: {
                        "X-Auth-Token": e.token
                    },
                    type: "POST",
                    data: t,
                    processData: !1,
                    contentType: !1
                }))
            }
            ))
        }
        function M(e) {
            return D((function(t) {
                return s.from(i().ajaxPromisify({
                    url: j.getFile(e.id),
                    headers: {
                        "X-Auth-Token": t.token
                    },
                    type: "GET",
                    processData: !1,
                    contentType: !1
                }))
            }
            ))
        }
        function L(e, t) {
            return D((function(n) {
                return s.from(i().ajaxPromisify({
                    url: j.downloadFile(e),
                    headers: {
                        "X-Auth-Token": n.token
                    },
                    error: function() {
                        t()
                    },
                    type: "POST"
                }))
            }
            ))
        }
        function F(e, t, n, r) {
            return new _.default(n).send(t, r, e).pipe(c.last(), c.map((function(n) {
                return a().extend({}, n, {
                    file_type: e,
                    file_name: t.name,
                    file_index: t.file_index
                })
            }
            )))
        }
        function W(e) {
            var t = a().extend({
                recipient_id: e.recipient_id,
                group_id: e.group_id,
                tag: e.tag,
                text: e.text,
                crm_dialog_id: e.crm_dialog_id,
                crm_contact_id: e.crm_contact_id,
                crm_account_id: e.crm_account_id,
                crm_entity: e.crm_entity || {},
                attachments: e.attachments,
                template: e.template,
                reply_markup: e.reply_markup,
                reply_to: e.reply_to,
                forwards: e.forwards
            }, x());
            return D((function(n) {
                return s.from(i().ajaxPromisify({
                    url: j.sendMessageWithFiles(e.chat_id),
                    data: JSON.stringify(t),
                    headers: {
                        "X-Auth-Token": n.token
                    },
                    type: "POST",
                    dataType: "json",
                    contentType: "application/json"
                }))
            }
            ))
        }
        function U(e, t) {
            return D((function(n) {
                switch (!0) {
                case /^image\/(png|jpeg|bmp|webp)$/.test(e.mimeType):
                    return F("picture", e, n, t);
                case /^video\/(mp4)$/.test(e.mimeType):
                    return F("video", e, n, t);
                case /^audio\/(ogg)$/.test(e.mimeType):
                    return F("voice", e, n, t);
                default:
                    return F("file", e, n, t)
                }
            }
            ))
        }
        function B(e, t) {
            return D((function(n) {
                var r = n.token
                  , o = JSON.stringify(l()({
                    chats: [{
                        chatId: e,
                        dialogId: t
                    }]
                }));
                return s.from(i().ajaxPromisify({
                    url: j.sendTyping(),
                    headers: {
                        "X-Auth-Token": r
                    },
                    data: o,
                    contentType: "application/json",
                    type: "POST"
                })).pipe(c.switchMap((function() {
                    return s.of(!0)
                }
                )))
            }
            ))
        }
        function K(e, t) {
            return D((function(n) {
                return s.from(i().ajaxPromisify({
                    url: j.readChat(),
                    headers: {
                        "X-Auth-Token": n.token
                    },
                    data: {
                        chat_id: e,
                        group_id: [t],
                        timestamp: Date.now()
                    },
                    type: "POST"
                })).pipe(c.switchMap((function() {
                    return s.of(!0)
                }
                )))
            }
            ))
        }
        function z(e) {
            return a().isArray(e) || (e = [e]),
            D((function(t) {
                return s.from(i().ajaxPromisify({
                    url: j.getChatsStat(),
                    data: {
                        chat_id: e
                    },
                    headers: {
                        "X-Auth-Token": t.token
                    },
                    type: "GET",
                    dataType: "json"
                })).pipe(c.map((function(e) {
                    return a().map(e.chats, (function(e, t) {
                        return {
                            id: t,
                            count: e.total,
                            users: a().values(e.users)
                        }
                    }
                    ))
                }
                )))
            }
            ))
        }
        function $(e, t) {
            var n = {
                emoji: t = t || ""
            };
            return D((function(t) {
                return s.from(i().ajaxPromisify({
                    url: j.sendReaction(e),
                    type: "POST",
                    data: JSON.stringify(n),
                    headers: {
                        "X-Auth-Token": t.token
                    },
                    contentType: "application/json"
                }))
            }
            ))
        }
        function q(e) {
            var t = a().extend({
                silent: !1,
                priority: "low",
                crm_entity: {}
            }, x(), a().pick(e, "crm_entity", "text", "recipient_id", "group_id", "file_id", "tag", "crm_dialog_id", "crm_contact_id", "crm_account_id", "skip_link_shortener", "reply_markup", "template", "reply_to", "forwards"));
            return D((function(n) {
                return s.from(i().ajaxPromisify({
                    url: j.sendMessagev1(e.chat_id),
                    data: JSON.stringify(t),
                    headers: {
                        "X-Auth-Token": n.token
                    },
                    type: "POST",
                    dataType: "json",
                    contentType: "application/json"
                }))
            }
            ))
        }
        function H(e) {
            var t = a().extend({
                text: e.message,
                recipient_id: e.recipient_id,
                group_id: e.group_id,
                callback_data: e.callback_data,
                crm_entity: e.crm_entity || {}
            }, a().pick(e, "crm_contact_id", "crm_account_id", "reply_to"));
            return D((function(n) {
                return s.from(i().ajaxPromisify({
                    url: j.sendMessage(e.chat_id),
                    data: t,
                    headers: {
                        "X-Auth-Token": n.token
                    },
                    type: "POST",
                    dataType: "json"
                }))
            }
            ))
        }
        function J(e, t, n) {
            return D((function(r) {
                return s.from(i().ajaxPromisify({
                    url: j.fetchMessages(e),
                    data: {
                        offset: t,
                        limit: n
                    },
                    headers: {
                        "X-Auth-Token": r.token
                    },
                    type: "GET",
                    dataType: "json"
                })).pipe(c.map((function(e) {
                    return a().isUndefined(e) ? [] : e
                }
                )))
            }
            ))
        }
        function G(e) {
            return D((function(t) {
                return s.from(i().ajaxPromisify({
                    url: j.fetchMessagesById(),
                    data: {
                        id: e
                    },
                    headers: {
                        "X-Auth-Token": t.token
                    },
                    type: "GET",
                    dataType: "json"
                })).pipe(c.map((function(e) {
                    return a().isUndefined(e) ? [] : e
                }
                )))
            }
            ))
        }
        function X() {
            return j
        }
        function V(e, t, n, r, o, a, c, u) {
            switch (e) {
            case C:
                return function(e, t, n, r) {
                    return s.from(i().ajaxPromisify({
                        url: j.createChat(),
                        type: "POST",
                        data: {
                            request: {
                                chats: {
                                    create: {
                                        type: "external",
                                        entity_id: e,
                                        entity_type: t,
                                        phone: n,
                                        source: r
                                    }
                                }
                            }
                        },
                        dataType: "json"
                    }))
                }(t, n, c, u);
            case w:
                return function(e, t, n) {
                    return s.from(i().ajaxPromisify({
                        url: j.createChat(),
                        type: "POST",
                        data: {
                            request: {
                                chats: {
                                    create: {
                                        type: "internal",
                                        entity_id: e,
                                        entity_type: t,
                                        users: n || []
                                    }
                                }
                            }
                        },
                        dataType: "json"
                    }))
                }(t, n, r);
            case k:
                return function(e) {
                    return s.from(i().ajaxPromisify({
                        url: j.createChat(),
                        type: "POST",
                        data: {
                            request: {
                                chats: {
                                    create: {
                                        type: "direct",
                                        users: e || []
                                    }
                                }
                            }
                        },
                        dataType: "json"
                    }))
                }(r = arguments[1]);
            case S:
                return function(e, t, n) {
                    return s.from(i().ajaxPromisify({
                        url: j.createChat(),
                        type: "POST",
                        data: {
                            request: {
                                chats: {
                                    create: {
                                        type: "group",
                                        users: t || [],
                                        groups: n || [],
                                        title: e
                                    }
                                }
                            }
                        },
                        dataType: "json"
                    }))
                }(o, r, a);
            default:
                return s.throwError(new Error("Unsupported chat type ".concat(e)))
            }
        }
        function Y(e) {
            return s.from(i().ajaxPromisify({
                url: j.connectBot(),
                type: "POST",
                data: {
                    request: {
                        chats: {
                            bots: {
                                connect: {
                                    bot_id: e
                                }
                            }
                        }
                    }
                },
                dataType: "json"
            }))
        }
        function Z(e, t) {
            return s.of(t).pipe(c.map((function(t) {
                var n = {};
                return n[e] = {
                    users: t
                },
                n
            }
            )), c.switchMap((function(e) {
                return s.from(i().ajaxPromisify({
                    url: j.manageUsersInChat(),
                    type: "POST",
                    data: {
                        request: {
                            chats: {
                                users: {
                                    add: e
                                }
                            }
                        }
                    },
                    dataType: "json"
                }))
            }
            )))
        }
        function Q(e, t) {
            return s.of(t).pipe(c.map((function(t) {
                var n = {};
                return n[e] = {
                    users: t
                },
                n
            }
            )), c.switchMap((function(e) {
                return s.from(i().ajaxPromisify({
                    url: j.manageUsersInChat(),
                    type: "POST",
                    data: {
                        request: {
                            chats: {
                                users: {
                                    remove: e
                                }
                            }
                        }
                    },
                    dataType: "json"
                }))
            }
            )))
        }
        function ee() {
            return D((function(e) {
                return s.from(i().ajaxPromisify({
                    url: j.rtmStart(),
                    headers: {
                        "X-Auth-Token": e.token
                    },
                    type: "POST",
                    dataType: "json",
                    timeout: A
                }))
            }
            ))
        }
        function te(e) {
            return D((function(t) {
                return s.from(i().ajaxPromisify({
                    url: j.transcribeMessage(e),
                    headers: {
                        "X-Auth-Token": t.token
                    },
                    type: "POST",
                    dataType: "json"
                }))
            }
            ))
        }
        function ne(e) {
            return s.from(i().ajaxPromisify({
                url: j.getChat(e),
                type: "GET",
                dataType: "json"
            }))
        }
        function re(e, t) {
            return s.from(i().ajaxPromisify({
                url: j.getGroupChats(e, t),
                type: "GET",
                dataType: "json"
            }))
        }
        function ie(e, t) {
            return s.from(i().ajaxPromisify({
                url: j.updateChat(),
                type: "POST",
                data: {
                    request: {
                        chats: {
                            update: {
                                type: "group",
                                chat_id: e,
                                title: t
                            }
                        }
                    }
                },
                dataType: "json"
            }))
        }
        var oe = null;
        function ae() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , t = e.url
              , n = void 0 === t ? "" : t
              , r = m(e, ["url"]);
            return oe || (oe = i().ajaxPromisify(y({
                url: n || j.getTemplates(),
                type: "GET",
                dataType: "json"
            }, r)).finally((function(e) {
                return oe = null,
                e
            }
            ))),
            s.from(oe)
        }
        var se = null;
        function ce() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , t = e.url
              , n = void 0 === t ? "" : t
              , r = m(e, ["url"]);
            return se || (se = i().ajaxPromisify(y({
                url: n || j.getSalesbots(),
                type: "GET",
                dataType: "json"
            }, r)).finally((function(e) {
                return se = null,
                e
            }
            ))),
            s.from(se)
        }
        function ue(e, t) {
            var n = {
                request: {
                    channel_init: {
                        channel_name: e
                    }
                }
            };
            return t = t || {},
            i().ajax(a().extend({
                method: "POST",
                url: j.initChannel(),
                data: JSON.stringify(n),
                dataType: "json",
                contentType: "application/json"
            }, t))
        }
        function le(e, t) {
            var n = {
                request: {
                    channel_disable: {
                        channel_name: e
                    }
                }
            };
            return t = t || {},
            i().ajax(a().extend({
                method: "POST",
                url: j.disableChannel(),
                data: JSON.stringify(n),
                dataType: "json",
                contentType: "application/json"
            }, t))
        }
        var de = "../build/transpiled/interface/amojo/api";
        window.define(de, (function() {
            var e = "undefined"
              , n = typeof t === e ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === e ? typeof module === e ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : t;
            return n && n.default || n
        }
        )),
        window.require([de])
    }
    ,
    167584: (e, t, n) => {
        n.r(t),
        n.d(t, {
            default: () => v
        });
        var r, i = n(55188), o = n.n(i), a = n(987081), s = n(128508), c = n(334254), u = n.n(c), l = n(987280), d = n(655222), f = n(470505), p = n(661533), _ = APP.constant("account") || {}, h = new a.Subject, y = [], m = [], g = !1;
        const v = function() {
            var e, t;
            if (!_.amojo_enabled)
                return {
                    subscribe: o().noop,
                    unsubscribe: o().noop,
                    socket: a.empty()
                };
            function n() {
                return r.send("ping", !1),
                setInterval((function() {
                    r.send("ping", !1)
                }
                ), 25e3)
            }
            return (r = (0,
            d.default)(null, {
                connect: function() {
                    var i;
                    return r.send({
                        action: "SET_LANG",
                        data: {
                            lang: APP.lang_id
                        }
                    }),
                    i = !0,
                    clearInterval(e),
                    u().unbind(t),
                    "visible" === u().state() && i && (e = n()),
                    t = u().change((function() {
                        u().hidden() ? clearInterval(e) : i && (clearInterval(e),
                        e = n())
                    }
                    )),
                    p(window).on("online", (function() {
                        clearInterval(e),
                        i = !0
                    }
                    )),
                    p(window).on("offline", (function() {
                        clearInterval(e),
                        i = !1
                    }
                    )),
                    y.length && o().each(o().chunk(y, 5), (function(e) {
                        r.send({
                            action: "CHAT_ENTER",
                            data: e
                        })
                    }
                    )),
                    (0,
                    l.rtmStart)().pipe(s.map((function(e) {
                        var t, n, r;
                        return _.is_need_proxy ? ((t = document.createElement("a")).href = e.url,
                        (n = t.host.split("."))[0] += "-ua",
                        t.host = n.join("."),
                        r = t.href) : r = e.url,
                        {
                            url: r
                        }
                    }
                    )))
                },
                onConnectionChange: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                      , t = e.status;
                    g ? o().each(m, (function(t) {
                        return t(e)
                    }
                    )) : t === f.SOCKET_STATE.CONNECTED && (g = !0)
                }
            })).socket.subscribe(h),
            o().extend(r, {
                subscribe: function(e) {
                    e = o().filter(o().isArray(e) ? e : [e], (function(e) {
                        return !o().findWhere(y, {
                            chat_id: e.chat_id
                        }) && (y.push(e),
                        !0)
                    }
                    )),
                    o().each(e, (function(e) {
                        r.send({
                            action: "CHAT_ENTER",
                            data: [e]
                        })
                    }
                    ))
                },
                unsubscribe: function(e) {
                    e = o().filter(o().isArray(e) ? e : [e], (function(e) {
                        return !!o().findWhere(y, {
                            chat_id: e.chat_id
                        })
                    }
                    )),
                    y = o().filter(y, (function(t) {
                        return !o().findWhere(e, {
                            chat_id: t.chat_id
                        })
                    }
                    )),
                    o().each(e, (function(e) {
                        r.send({
                            action: "CHAT_LEAVE",
                            data: [e]
                        })
                    }
                    ))
                },
                socket: h,
                onConnectionChange: function(e) {
                    return m.push(e),
                    function() {
                        m = o().without(m, e)
                    }
                }
            })
        }();
        var b = "../build/transpiled/interface/amojo/rtm";
        window.define(b, (function() {
            var e = "undefined"
              , n = typeof t === e ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === e ? typeof module === e ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : t;
            return n && n.default || n
        }
        )),
        window.require([b])
    }
    ,
    407042: (e, t, n) => {
        n.r(t),
        n.d(t, {
            default: () => r
        });
        const r = {
            SALESBOT_CACHE_CODE: "amojo_salesbots",
            SALESBOT_NEXT_PAGE_LINK: "amojo_bot_next_page_link",
            SALESBOT_CACHE_LIFETIME: 36e5
        };
        var i = "../build/transpiled/interface/amojo/salesbots_constants";
        window.define(i, (function() {
            var e = "undefined"
              , n = typeof t === e ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === e ? typeof module === e ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : t;
            return n && n.default || n
        }
        )),
        window.require([i])
    }
    ,
    369889: (e, t, n) => {
        n.r(t),
        n.d(t, {
            default: () => P
        });
        var r = n(55188)
          , i = n.n(r)
          , o = n(987081)
          , a = n(128508)
          , s = n(579569)
          , c = n(315702)
          , u = n(643095)
          , l = n(414656)
          , d = n(714255)
          , f = n(661533);
        function p(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++)
                r[n] = e[n];
            return r
        }
        var _ = 400
          , h = 401
          , y = 500
          , m = 0
          , g = APP.constant("account")
          , v = (0,
        s.current)()
          , b = (0,
        s.get)()
          , w = (0,
        s.get)("free")
          , E = ("".concat(g.amojo_server, "/session/refresh_token?stand=").concat(g.stand),
        "/ajax/v1/chats/session")
          , C = null
          , T = !1
          , O = !1;
        function k() {
            l.default.set(null),
            C = null
        }
        function S(e) {
            var t = 0;
            return o.zip(o.range(1, 3), e).pipe(a.switchMap((function(e) {
                var n, r, s = (r = 2,
                function(e) {
                    if (Array.isArray(e))
                        return e
                }(n = e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, i, o = [], a = !0, s = !1;
                        try {
                            for (n = n.call(e); !(a = (r = n.next()).done) && (o.push(r.value),
                            !t || o.length !== t); a = !0)
                                ;
                        } catch (e) {
                            s = !0,
                            i = e
                        } finally {
                            try {
                                a || null == n.return || n.return()
                            } finally {
                                if (s)
                                    throw i
                            }
                        }
                        return o
                    }
                }(n, r) || function(e, t) {
                    if (e) {
                        if ("string" == typeof e)
                            return p(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        return "Object" === n && e.constructor && (n = e.constructor.name),
                        "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? p(e, t) : void 0
                    }
                }(n, r) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()), u = s[0], l = s[1];
                if (t++,
                3 === u)
                    return o.throwError(l);
                if (l.status >= y)
                    return g.amojo_enabled = 0,
                    t = 5,
                    o.of(l.status).pipe((0,
                    c.exponentialDelay)(t, {
                        with_jitter: !0
                    }), a.mapTo(l));
                if (l.status >= _ && l.status < y && l.status !== h)
                    return o.throwError(l);
                if (i().isUndefined(l.responseJSON) && i().isUndefined(l.responseText) && 0 === l.readyState) {
                    var d = (0,
                    c.exponentialDelay)(t, {
                        with_jitter: !0
                    });
                    return o.of(l.status).pipe(a.delay(d), a.mapTo(l))
                }
                return T || k(),
                o.of(l.status)
            }
            )))
        }
        const P = {
            inject: function(e) {
                return o.defer((function() {
                    var e;
                    if (null === C) {
                        if ((e = l.default.get()) && e.valid())
                            return o.of(e);
                        T = !0,
                        C = o.defer((function() {
                            return o.from(f.ajaxPromisify({
                                url: E,
                                data: {
                                    request: {
                                        chats: {
                                            session: {
                                                action: "create"
                                            }
                                        }
                                    }
                                },
                                method: "POST"
                            }).finally((function(e) {
                                return T = !1,
                                e
                            }
                            ))).pipe(a.map((function(e) {
                                var t = e.response.chats.session;
                                !function(e) {
                                    g.amojo_enabled = 1,
                                    !g.amojo_id && e.account && e.account.id && (g.amojo_id = e.account.id),
                                    !v.amojo_id && e.user && e.user.id && (v.amojo_id = e.user.id),
                                    v.amojo_id && i().each([b, w], (function(e) {
                                        e[v.id] && !e[v.id].amojo_id && (e[v.id].amojo_id = v.amojo_id)
                                    }
                                    ))
                                }(t);
                                var n = new d.default(t.access_token,t.refresh_token,t.expired_at,v.id);
                                return l.default.set(n),
                                n
                            }
                            )), a.catchError((function(e) {
                                return O || function(e) {
                                    O = !0;
                                    var t = e.responseJSON
                                      , n = void 0 === t ? {} : t
                                      , r = e.status;
                                    (0,
                                    u.sentryLogFailedGetAmojoToken)({
                                        responseJSON: n,
                                        isNetworkError: r === m
                                    })
                                }(e),
                                k(),
                                o.throwError(e)
                            }
                            )))
                        }
                        )).pipe(a.share({
                            connector: function() {
                                return new o.AsyncSubject
                            },
                            resetOnError: !1,
                            resetOnComplete: !1,
                            resetOnRefCountZero: !1
                        }))
                    }
                    return C
                }
                )).pipe(a.switchMap(e), a.retryWhen(S))
            }
        };
        var A = "../build/transpiled/interface/amojo/token_manager";
        window.define(A, (function() {
            var e = "undefined"
              , n = typeof t === e ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === e ? typeof module === e ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : t;
            return n && n.default || n
        }
        )),
        window.require([A])
    }
    ,
    414656: (e, t, n) => {
        n.r(t),
        n.d(t, {
            default: () => s
        });
        var r = n(988050)
          , i = n(714255)
          , o = "amojo_token";
        function a() {
            var e = "test";
            try {
                return localStorage.setItem(e, e),
                localStorage.removeItem(e),
                !0
            } catch (e) {
                return !1
            }
        }
        const s = {
            get: function() {
                var e;
                return a() && (e = localStorage.getItem(o)),
                e || (e = (0,
                r.get)(o)),
                e ? i.default.fromJSON(e) : null
            },
            set: function(e) {
                a() ? e ? localStorage.setItem("amojo_token", e) : localStorage.removeItem("amojo_token") : (0,
                r.set)({
                    name: "amojo_token",
                    value: e,
                    expiredays: e.expiresInDays()
                })
            }
        };
        var c = "../build/transpiled/interface/amojo/token_storage";
        window.define(c, (function() {
            var e = "undefined"
              , n = typeof t === e ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === e ? typeof module === e ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : t;
            return n && n.default || n
        }
        )),
        window.require([c])
    }
    ,
    299976: (e, t, n) => {
        n.r(t),
        n.d(t, {
            default: () => p
        });
        var r = n(55188)
          , i = n.n(r)
          , o = n(987081)
          , a = n(128508)
          , s = n(500034)
          , c = n(847837)
          , u = n(661533)
          , l = APP.constant("account") || {}
          , d = l.amojo_server
          , f = function(e) {
            this.file_id = this.guid(),
            this.token = e
        };
        i().extend(f.prototype, {
            agents: [],
            totalParts: 0,
            agentStream$: new o.Subject,
            partsStream$: new o.Subject,
            uploadSource$: null,
            send: function(e, t) {
                return new o.Observable(i().bind((function(n) {
                    var r;
                    return (0,
                    s.isFeatureAvailable)("amocrm_drive") ? ((r = c.default.uploadFile(e.orig_file, {
                        with_preview: !0,
                        billable: t.billable,
                        processing: t.processing
                    })).then((function(e) {
                        if (!e)
                            return n.error();
                        n.next({
                            external_file_id: e.uuid,
                            external_file_vers_id: e.version_uuid,
                            type: "load",
                            progress: 100
                        }),
                        n.complete()
                    }
                    ), i().bind(n.error, n)),
                    function() {
                        r.abort()
                    }
                    ) : (r = this.fileToStream(e.bytes).pipe(a.map(i().bind(this.sendPart(e), this)), a.concatAll()).subscribe(i().bind((function(e) {
                        var t = {
                            file_id: this.file_id,
                            type: "process",
                            progress: (e.num + 1) / e.total * 100
                        };
                        e.num + 1 === e.total ? (t.type = "load",
                        n.next(t),
                        n.complete()) : n.next(t)
                    }
                    ), this), i().bind(n.error, n)),
                    function() {
                        r.unsubscribe()
                    }
                    )
                }
                ), this))
            },
            fileToStream: function(e) {
                var t, n = 524288, r = Math.ceil(e.byteLength / n);
                return e.byteLength % n == 0 && r++,
                new o.Observable((function(i) {
                    for (t = 0; t < r; t++)
                        i.next({
                            num: t,
                            bytes: new Uint8Array(e.slice(n * t, (t + 1) * n)),
                            total: r
                        });
                    i.complete()
                }
                ))
            },
            sendPart: function(e) {
                return function(t) {
                    return o.defer(i().bind((function() {
                        return o.from(u.ajaxPromisify({
                            url: "".concat(d, "/v2/upload/saveFilePart?part=").concat(t.num, "&file_id=").concat(this.file_id, "&stand=").concat(l.stand),
                            headers: {
                                "X-Auth-Token": this.token.token,
                                "Content-Disposition": "attachment; filename*=\"UTF-8''".concat(encodeURIComponent(e.name), '"')
                            },
                            type: "PUT",
                            contentType: e.mimeType,
                            data: t.bytes,
                            processData: !1
                        })).pipe(a.map((function() {
                            return {
                                num: t.num,
                                total: t.total
                            }
                        }
                        )))
                    }
                    ), this))
                }
            },
            guid: function() {
                function e() {
                    return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
                }
                return "".concat(e() + e(), "-").concat(e(), "-").concat(e(), "-").concat(e(), "-").concat(e()).concat(e()).concat(e())
            }
        });
        const p = f;
        var _ = "../build/transpiled/interface/amojo/uploader";
        window.define(_, (function() {
            var e = "undefined"
              , n = typeof t === e ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === e ? typeof module === e ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : t;
            return n && n.default || n
        }
        )),
        window.require([_])
    }
    ,
    513934: (e, t, n) => {
        n.r(t),
        n.d(t, {
            default: () => u
        });
        var r = n(55188)
          , i = n.n(r)
          , o = n(661586)
          , a = n.n(o)
          , s = n(886965)
          , c = n(237262);
        const u = {
            getCacheCode: function() {
                var e = "".concat((0,
                s.getVersion)(), "_linked_types_cache_").concat(APP.lang_id, "_").concat((0,
                c.userID)())
                  , t = (0,
                c.getRights)("catalog_rights") || {}
                  , n = i().map(t, (function(e, t) {
                    var n = +(e.view !== c.RIGHTS_DENIED);
                    return "".concat(t, ":").concat(n)
                }
                ));
                return n.length && (e += "_".concat(a()(n.join("_")))),
                e
            },
            linked_types_cache_lifetime: 36e5
        };
        var l = "../build/transpiled/interface/card/linked/constants";
        window.define(l, (function() {
            var e = "undefined"
              , n = typeof t === e ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === e ? typeof module === e ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : t;
            return n && n.default || n
        }
        )),
        window.require([l])
    }
    ,
    150293: (e, t, n) => {
        n.r(t);
        var r = n(55188)
          , i = n.n(r)
          , o = n(460159)
          , a = n.n(o)
          , s = n(871082)
          , c = n(334254)
          , u = n.n(c)
          , l = n(128508)
          , d = n(987081)
          , f = n(869445)
          , p = n(167584)
          , _ = n(340958)
          , h = n(886965)
          , y = n(579569)
          , m = n(388590)
          , g = n(144966)
          , v = (n(58544),
        n(661533));
        function b(e, t, n, r, i, o, a) {
            try {
                var s = e[o](a)
                  , c = s.value
            } catch (e) {
                return void n(e)
            }
            s.done ? t(c) : Promise.resolve(c).then(r, i)
        }
        function w(e) {
            return function() {
                var t = this
                  , n = arguments;
                return new Promise((function(r, i) {
                    var o = e.apply(t, n);
                    function a(e) {
                        b(o, r, i, a, s, "next", e)
                    }
                    function s(e) {
                        b(o, r, i, a, s, "throw", e)
                    }
                    a(void 0)
                }
                ))
            }
        }
        function E(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function C(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r)
            }
        }
        function T(e, t, n) {
            return t && C(e.prototype, t),
            n && C(e, n),
            e
        }
        function O(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        function k(e, t, n) {
            return k = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(e, t, n) {
                var r = function(e, t) {
                    for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = S(e)); )
                        ;
                    return e
                }(e, t);
                if (r) {
                    var i = Object.getOwnPropertyDescriptor(r, t);
                    return i.get ? i.get.call(n || e) : i.value
                }
            }
            ,
            k(e, t, n || e)
        }
        function S(e) {
            return S = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            ,
            S(e)
        }
        function P(e, t) {
            if ("function" != typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && x(e, t)
        }
        function A(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {}
                  , r = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                }
                )))),
                r.forEach((function(t) {
                    O(e, t, n[t])
                }
                ))
            }
            return e
        }
        function j(e, t) {
            return t = null != t ? t : {},
            Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    n.push.apply(n, r)
                }
                return n
            }(Object(t)).forEach((function(n) {
                Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
            }
            )),
            e
        }
        function x(e, t) {
            return x = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                e
            }
            ,
            x(e, t)
        }
        function N(e) {
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
                var n, r = S(e);
                if (t) {
                    var i = S(this).constructor;
                    n = Reflect.construct(r, arguments, i)
                } else
                    n = r.apply(this, arguments);
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
        function D(e, t) {
            var n, r, i, o, a = {
                label: 0,
                sent: function() {
                    if (1 & i[0])
                        throw i[1];
                    return i[1]
                },
                trys: [],
                ops: []
            };
            return o = {
                next: s(0),
                throw: s(1),
                return: s(2)
            },
            "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                return this
            }
            ),
            o;
            function s(o) {
                return function(s) {
                    return function(o) {
                        if (n)
                            throw new TypeError("Generator is already executing.");
                        for (; a; )
                            try {
                                if (n = 1,
                                r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r),
                                0) : r.next) && !(i = i.call(r, o[1])).done)
                                    return i;
                                switch (r = 0,
                                i && (o = [2 & o[0], i.value]),
                                o[0]) {
                                case 0:
                                case 1:
                                    i = o;
                                    break;
                                case 4:
                                    return a.label++,
                                    {
                                        value: o[1],
                                        done: !1
                                    };
                                case 5:
                                    a.label++,
                                    r = o[1],
                                    o = [0];
                                    continue;
                                case 7:
                                    o = a.ops.pop(),
                                    a.trys.pop();
                                    continue;
                                default:
                                    if (!((i = (i = a.trys).length > 0 && i[i.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                                        a = 0;
                                        continue
                                    }
                                    if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                        a.label = o[1];
                                        break
                                    }
                                    if (6 === o[0] && a.label < i[1]) {
                                        a.label = i[1],
                                        i = o;
                                        break
                                    }
                                    if (i && a.label < i[2]) {
                                        a.label = i[2],
                                        a.ops.push(o);
                                        break
                                    }
                                    i[2] && a.ops.pop(),
                                    a.trys.pop();
                                    continue
                                }
                                o = t.call(e, a)
                            } catch (e) {
                                o = [6, e],
                                r = 0
                            } finally {
                                n = i = 0
                            }
                        if (5 & o[0])
                            throw o[1];
                        return {
                            value: o[0] ? o[1] : void 0,
                            done: !0
                        }
                    }([o, s])
                }
            }
        }
        var I = (0,
        y.current)("amojo_id")
          , R = (0,
        y.current)("id")
          , M = {
            TASK: 1,
            NOTE: 4,
            MAIL: 7,
            CALL_IN: 10,
            CALL_OUT: 11
        }
          , L = function(e) {
            P(n, e);
            var t = N(n);
            function n() {
                return E(this, n),
                t.apply(this, arguments)
            }
            return T(n, [{
                key: "time_delta",
                get: function() {
                    return this.get("time_delta")
                }
            }, {
                key: "spent_time",
                get: function() {
                    return this.get("spent_time")
                }
            }, {
                key: "addTime",
                value: function(e) {
                    this.set("spent_time", this.spent_time + e)
                }
            }, {
                key: "resetTimeDelta",
                value: function() {
                    this.set("time_delta", 0)
                }
            }, {
                key: "addTimeToDelta",
                value: function(e) {
                    this.set("time_delta", this.time_delta + e)
                }
            }, {
                key: "isAutoEventPossible",
                value: function() {
                    return "pause" === this.get("timer_status") && "auto" === this.get("last_edit_method_status")
                }
            }]),
            n
        }(s.Model)
          , F = function(e) {
            P(n, e);
            var t = N(n);
            function n() {
                return E(this, n),
                t.apply(this, arguments)
            }
            return T(n, [{
                key: "template",
                get: function() {
                    return "/tmpl/operday/controls/content.twig"
                }
            }, {
                key: "_classes",
                value: function() {
                    return {
                        play: "operday-timer__control-element--play",
                        pause: "operday-timer__control-element--pause",
                        white: "operday-timer__input--white",
                        show: "operday-timer__show",
                        blinker_active: "operday-timer__suggest--active-blinker",
                        holder: "operday-timer__holder"
                    }
                }
            }, {
                key: "_selectors",
                value: function() {
                    return {
                        input: ".js-operday-timer-input",
                        seconds: ".js-operday-timer-seconds",
                        seconds_wrapper: ".js-operday-timer-seconds-wrapper",
                        control_element: ".js-operday-timer-control-element",
                        suggest: ".js-operday-timer-suggest",
                        content: ".js-operday-timer-content"
                    }
                }
            }, {
                key: "events",
                value: function() {
                    var e;
                    return O(e = {}, "click ".concat(this._selector("control_element")), "_toggleTimerStatus"),
                    O(e, "click ".concat(this._selector("input")), "_onFocusInput"),
                    O(e, "change ".concat(this._selector("input")), "_onManuallyChangeSpentTime"),
                    O(e, "suggest:changed  ".concat(this._selector("suggest")), "_onManuallyChangeSpentTime"),
                    e
                }
            }, {
                key: "initialize",
                value: function() {
                    k(S(n.prototype), "initialize", this).apply(this, arguments),
                    this.entity_type = this.$el.data("entity-type"),
                    this.entity_id = this.$el.data("entity-id"),
                    this.model = new L,
                    this.$holder = this.$el.parent(),
                    this.rxSubscriptions = new d.Subscription,
                    this.model.resetTimeDelta(),
                    this.listenTo(this.model, "change:spent_time", this._onChangeSpentTime),
                    this.listenTo(this.model, "change:timer_status", this._onChangeTimerStatus),
                    this.listenTo(this.model, "change:last_edit_method_status", this._onChangeLastEditMethodStatus),
                    this.listenTo(this.model, "change:time_delta", this._onChangeTimeDelta),
                    this.init()
                }
            }, {
                key: "destroy",
                value: function() {
                    var e = this.model.time_delta;
                    e > 0 && m.default.sendTimerState(this._prepareTimerConditionData("delta", e)),
                    this._stopTimer(),
                    this.rxSubscriptions.unsubscribe(),
                    this.$holder.removeClass(this._class("holder")),
                    k(S(n.prototype), "destroy", this).apply(this, arguments)
                }
            }, {
                key: "init",
                value: function() {
                    var e = this;
                    return w((function() {
                        var t;
                        return D(this, (function(n) {
                            switch (n.label) {
                            case 0:
                                return [4, m.default.getTimer(e.entity_id, e.entity_type)];
                            case 1:
                                return t = n.sent(),
                                [4, a()._preload(e.template)()];
                            case 2:
                                return n.sent(),
                                e._elem("content").html(a()({
                                    ref: e.template
                                }).render({
                                    selected: (0,
                                    g.secondsToHHMM)(t.spent_time)
                                })),
                                e._socketSubscribe(),
                                e.timer_id = t.id,
                                e.model.set("spent_time", t.spent_time),
                                e.model.set("timer_status", t.timer_status),
                                e.model.set("last_edit_method_status", t.status),
                                [2]
                            }
                        }
                        ))
                    }
                    ))()
                }
            }, {
                key: "_onFocusInput",
                value: function() {
                    this._elem("seconds_wrapper").removeClass(this._class("show")),
                    this._elem("suggest").removeClass(this._class("blinker_active")),
                    "play" === this.model.get("timer_status") && this._toggleTimerStatus()
                }
            }, {
                key: "_onManuallyChangeSpentTime",
                value: function(e) {
                    var t = v(e.target).val()
                      , n = (0,
                    g.hhmmToSeconds)(t);
                    this.model.set("spent_time", n),
                    this.model.set("last_edit_method_status", "manual"),
                    m.default.sendTimerState(this._prepareTimerConditionData("manual", n))
                }
            }, {
                key: "_calculateSeconds",
                value: function(e) {
                    var t = String(e % 60);
                    return 1 === t.length ? "0".concat(t) : t
                }
            }, {
                key: "_onChangeLastEditMethodStatus",
                value: function() {
                    switch (this.model.get("last_edit_method_status")) {
                    case "auto":
                        this._elem("input").removeClass(this._class("white")),
                        this._elem("seconds_wrapper").addClass(this._class("show"));
                        break;
                    case "manual":
                        this._elem("input").addClass(this._class("white")),
                        this._elem("seconds_wrapper").removeClass(this._class("show"))
                    }
                }
            }, {
                key: "_onChangeTimerStatus",
                value: function() {
                    "play" === this.model.get("timer_status") ? (this._startTimer(),
                    this._elem("control_element").addClass(this._class("play")).removeClass(this._class("pause")),
                    this._elem("seconds_wrapper").addClass(this._class("show")),
                    this._elem("suggest").addClass(this._class("blinker_active")),
                    this.model.set("last_edit_method_status", "auto")) : (this._stopTimer(),
                    this._elem("suggest").removeClass(this._class("blinker_active")),
                    this._elem("control_element").addClass(this._class("pause")).removeClass(this._class("play")))
                }
            }, {
                key: "_onChangeSpentTime",
                value: function() {
                    var e = this;
                    return w((function() {
                        var t;
                        return D(this, (function(n) {
                            return t = e.model.get("spent_time"),
                            e._elem("seconds").html(e._calculateSeconds(t)),
                            e._elem("input").val((0,
                            g.secondsToHHMM)(t)),
                            [2]
                        }
                        ))
                    }
                    ))()
                }
            }, {
                key: "_onChangeTimeDelta",
                value: function() {
                    var e = this;
                    return w((function() {
                        return D(this, (function(t) {
                            switch (t.label) {
                            case 0:
                                if (!(e.model.time_delta >= 60))
                                    return [3, 4];
                                t.label = 1;
                            case 1:
                                return t.trys.push([1, 3, , 4]),
                                [4, m.default.sendTimerState(e._prepareTimerConditionData("delta", e.model.time_delta))];
                            case 2:
                                return t.sent(),
                                e.model.resetTimeDelta(),
                                [3, 4];
                            case 3:
                                return t.sent(),
                                e._toggleTimerStatus(),
                                [3, 4];
                            case 4:
                                return [2]
                            }
                        }
                        ))
                    }
                    ))()
                }
            }, {
                key: "_toggleTimerStatus",
                value: function() {
                    var e = this.model.get("timer_status")
                      , t = this.model.time_delta;
                    switch (e) {
                    case "play":
                        this.model.set("timer_status", "pause"),
                        t > 0 && (m.default.sendTimerState(this._prepareTimerConditionData("pause", t)),
                        this.model.resetTimeDelta());
                        break;
                    case "pause":
                        this.model.set("timer_status", "play"),
                        m.default.sendTimerState(this._prepareTimerConditionData("play"))
                    }
                }
            }, {
                key: "_startTimer",
                value: function() {
                    var e = this;
                    this.timer_interval_id = u().every(1e3, (function() {
                        e.model.addTime(1),
                        e.model.addTimeToDelta(1)
                    }
                    ))
                }
            }, {
                key: "_stopTimer",
                value: function() {
                    u().stop(this.timer_interval_id)
                }
            }, {
                key: "_socketSubscribe",
                value: function() {
                    var e = (0,
                    h.convertElementType)(this.entity_type, "single")
                      , t = "".concat(e, ":card:").concat(this.entity_id)
                      , n = f.default.subscribe([t]).pipe(l.filter((function(e) {
                        if ("message" !== e.method)
                            return !1;
                        var t = i().values(M)
                          , n = i().propertyOf(e)(["body", "payload"]);
                        if (!i().contains(t, n.type))
                            return !1;
                        switch (n.type) {
                        case M.TASK:
                            if (!n.status || n.responsible_user_id !== R)
                                return !1;
                            break;
                        case M.NOTE:
                            if (!n.author_name || n.created_by !== R)
                                return !1;
                            break;
                        case M.MAIL:
                        case M.CALL_IN:
                        case M.CALL_OUT:
                            if (n.created_by !== R)
                                return !1;
                            break;
                        default:
                            return !1
                        }
                        return !0
                    }
                    )), l.map((function(e) {
                        var t = i().propertyOf(e)(["body", "payload"])
                          , n = i().propertyOf(t)(["data", "params"]);
                        switch (t.type) {
                        case M.TASK:
                            return t.duration || 60;
                        case M.NOTE:
                        case M.MAIL:
                            return 60;
                        case M.CALL_OUT:
                        case M.CALL_IN:
                            return n.duration;
                        default:
                            return 0
                        }
                    }
                    )))
                      , r = p.default.socket.pipe(l.map((function(e) {
                        var t = e.data;
                        try {
                            return JSON.parse(t)
                        } catch (e) {
                            return t
                        }
                    }
                    )), l.filter((function(e) {
                        var t = i().propertyOf(e)(["data", "message", "author", "id"]);
                        return "message_created" === e.type && t === I
                    }
                    )), l.map((function() {
                        return 60
                    }
                    )));
                    this.rxSubscriptions.add(n.subscribe(i().bind(this._handleSocketEvent, this))),
                    this.rxSubscriptions.add(r.subscribe(i().bind(this._handleSocketEvent, this)))
                }
            }, {
                key: "_handleSocketEvent",
                value: function(e) {
                    this.model.isAutoEventPossible() && this.model.addTime(e)
                }
            }, {
                key: "_prepareTimerConditionData",
                value: function(e, t) {
                    var n = {
                        entity_type: this.entity_type,
                        id: this.entity_id
                    };
                    switch (e) {
                    case "delta":
                        return j(A({}, n), {
                            body: {
                                timer_id: this.timer_id,
                                delta_time: t
                            }
                        });
                    case "play":
                        return j(A({}, n), {
                            body: {
                                timer_id: this.timer_id,
                                timer_status: "play"
                            }
                        });
                    case "pause":
                        return j(A({}, n), {
                            body: {
                                timer_id: this.timer_id,
                                timer_status: "pause",
                                delta_time: t
                            }
                        });
                    case "manual":
                        return j(A({}, n), {
                            body: {
                                timer_id: this.timer_id,
                                manual_time: t
                            }
                        });
                    default:
                        return {}
                    }
                }
            }], [{
                key: "controlClassName",
                get: function() {
                    return "js-operday-timer"
                }
            }]),
            n
        }(_.default);
        F.extend(F);
        var W = "../build/transpiled/interface/operday/controls/timer";
        window.define(W, (function() {
            var e = "undefined"
              , n = typeof t === e ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === e ? typeof module === e ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : t;
            return n && n.default || n
        }
        )),
        window.require([W])
    }
    ,
    763176: (e, t, n) => {
        n.r(t),
        n.d(t, {
            wrapCacheCollection: () => a
        });
        var r = n(55188)
          , i = n.n(r);
        function o(e) {
            return i().each(e, (function(t, n) {
                i().isArray(t) ? e[n] = e[n].sort() : i().isObject(t) && (e[n] = o(e[n]))
            }
            )),
            e
        }
        function a(e) {
            var t = {}
              , n = {};
            return e.extend({
                __cache_wrapper_cache_id: null,
                getCacheId: function() {
                    return (e.prototype.getCacheId ? e.prototype.getCacheId.apply(this, arguments) : null) || this.__cache_wrapper_cache_id || i().result(this, "url", "")
                },
                getCache: function(n) {
                    return (e.prototype.getCache ? e.prototype.getCache.apply(this, arguments) : null) || t[this.collection_namespace][n]
                },
                setCache: function(n, r) {
                    return e.prototype.setCache && e.prototype.setCache.apply(this, arguments),
                    t[this.collection_namespace][n] = r,
                    r
                },
                clearCache: function(n) {
                    e.prototype.clearCache && e.prototype.clearCache.apply(this, arguments);
                    var r = this.getCacheId(n);
                    return (n = n || {}).namespace_full ? t[this.collection_namespace] = {} : i().propertyOf(t)([this.collection_namespace, r]) && delete t[this.collection_namespace][r],
                    this
                },
                _getConfig: function(e) {
                    var t = {};
                    try {
                        t = JSON.parse(JSON.stringify(e))
                    } catch (e) {
                        console.error(e)
                    }
                    try {
                        return JSON.stringify(o(t))
                    } catch (e) {
                        return console.error(e),
                        "{}"
                    }
                },
                initialize: function(n, r) {
                    r = r || {},
                    this.collection_namespace = this._getConfig(r),
                    t[this.collection_namespace] || (t[this.collection_namespace] = {}),
                    e.prototype.initialize.apply(this, arguments)
                },
                sync: function(t, r, o) {
                    var a = this;
                    if ("read" === t) {
                        o && o.data && !this.__cache_wrapper_cache_id && (this.__cache_wrapper_cache_id = i().result(this, "url", "") + JSON.stringify(o.data));
                        var s = this.getCacheId(o);
                        return n[s] || (n[s] = new Promise((function(n, c) {
                            var u = a.getCache(s);
                            u ? n(i().clone(u)) : e.prototype.sync.call(a, t, r, i().extend({}, o, {
                                success: function(e) {
                                    a.setCache(s, e),
                                    n(i().clone(e))
                                },
                                error: function(e) {
                                    c(e)
                                }
                            }))
                        }
                        ))),
                        n[s].then((function(e) {
                            return n[s] = null,
                            o.success(i().clone(e)),
                            e
                        }
                        ), (function(e) {
                            throw n[s] = null,
                            o.error(e),
                            e
                        }
                        ))
                    }
                    return e.prototype.sync.apply(this, arguments)
                },
                fetch: function(t) {
                    return (t = t || {}).clear_cache && this.clearCache(),
                    e.prototype.fetch.apply(this, arguments)
                }
            }, {
                clearAllCache: function() {
                    i().each(t, (function(e, n) {
                        t[n] = {}
                    }
                    ))
                }
            })
        }
        var s = "../build/transpiled/network/cache_wrapper";
        window.define(s, (function() {
            var e = "undefined"
              , n = typeof t === e ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === e ? typeof module === e ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : t;
            return n && n.default || n
        }
        )),
        window.require([s])
    }
    ,
    847837: (e, t, n) => {
        n.r(t),
        n.d(t, {
            default: () => g,
            getCorrectDataForDrive: () => h
        });
        var r = n(55188)
          , i = n.n(r)
          , o = n(161320)
          , a = n.n(o)
          , s = n(216249)
          , c = n(940918);
        function u(e, t, n, r, i, o, a) {
            try {
                var s = e[o](a)
                  , c = s.value
            } catch (e) {
                return void n(e)
            }
            s.done ? t(c) : Promise.resolve(c).then(r, i)
        }
        function l(e) {
            return function() {
                var t = this
                  , n = arguments;
                return new Promise((function(r, i) {
                    var o = e.apply(t, n);
                    function a(e) {
                        u(o, r, i, a, s, "next", e)
                    }
                    function s(e) {
                        u(o, r, i, a, s, "throw", e)
                    }
                    a(void 0)
                }
                ))
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
        function f(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {}
                  , r = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                }
                )))),
                r.forEach((function(t) {
                    d(e, t, n[t])
                }
                ))
            }
            return e
        }
        function p(e, t) {
            var n, r, i, o, a = {
                label: 0,
                sent: function() {
                    if (1 & i[0])
                        throw i[1];
                    return i[1]
                },
                trys: [],
                ops: []
            };
            return o = {
                next: s(0),
                throw: s(1),
                return: s(2)
            },
            "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                return this
            }
            ),
            o;
            function s(o) {
                return function(s) {
                    return function(o) {
                        if (n)
                            throw new TypeError("Generator is already executing.");
                        for (; a; )
                            try {
                                if (n = 1,
                                r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r),
                                0) : r.next) && !(i = i.call(r, o[1])).done)
                                    return i;
                                switch (r = 0,
                                i && (o = [2 & o[0], i.value]),
                                o[0]) {
                                case 0:
                                case 1:
                                    i = o;
                                    break;
                                case 4:
                                    return a.label++,
                                    {
                                        value: o[1],
                                        done: !1
                                    };
                                case 5:
                                    a.label++,
                                    r = o[1],
                                    o = [0];
                                    continue;
                                case 7:
                                    o = a.ops.pop(),
                                    a.trys.pop();
                                    continue;
                                default:
                                    if (!((i = (i = a.trys).length > 0 && i[i.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                                        a = 0;
                                        continue
                                    }
                                    if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                        a.label = o[1];
                                        break
                                    }
                                    if (6 === o[0] && a.label < i[1]) {
                                        a.label = i[1],
                                        i = o;
                                        break
                                    }
                                    if (i && a.label < i[2]) {
                                        a.label = i[2],
                                        a.ops.push(o);
                                        break
                                    }
                                    i[2] && a.ops.pop(),
                                    a.trys.pop();
                                    continue
                                }
                                o = t.call(e, a)
                            } catch (e) {
                                o = [6, e],
                                r = 0
                            } finally {
                                n = i = 0
                            }
                        if (5 & o[0])
                            throw o[1];
                        return {
                            value: o[0] ? o[1] : void 0,
                            done: !0
                        }
                    }([o, s])
                }
            }
        }
        function _(e) {
            return a()(e, AMOCRM.system.format.date.date)
        }
        function h(e) {
            var t = JSON.parse(JSON.stringify(e));
            if (i().isObject(null == t ? void 0 : t.filter)) {
                var n = t.filter;
                if (i().isObject(n.created_by) && (n.created_by = i().map(i().values(n.created_by), (function(e) {
                    return Number(e)
                }
                ))),
                i().isObject(n.updated_by) && (n.updated_by = i().map(i().values(n.updated_by), (function(e) {
                    return Number(e)
                }
                ))),
                i().property(["date", "from"])(n) && i().property(["date", "to"])(n)) {
                    var r = _(n.date.from).unix()
                      , o = _(n.date.to).add(1, "days").unix();
                    n.date = {
                        from: r,
                        to: o
                    }
                }
                if (i().has(n, "order_by"))
                    switch (!0) {
                    case "filesize" === n.order_by:
                        n.order_by = "size";
                        break;
                    case "date" === n.order_by:
                        n.order_by = "created_at";
                        break;
                    case "date_modified" === n.order_by:
                        n.order_by = "updated_at"
                    }
                return i().isObject(n.extensions) && (n.extensions = i().values(n.extensions),
                n.extensions[0] = "No type" === n.extensions[0] ? "" : n.extensions[0]),
                i().property(["source_id"])(n) && (n.source_id = Number(n.source_id)),
                i().property(["size"])(n) && (i().property(["size", "unit"])(n) && (n.size.unit = Number(n.size.unit)),
                i().property(["size", "from"])(n) && (n.size.from = Number(n.size.from)),
                i().property(["size", "to"])(n) && (n.size.to = Number(n.size.to))),
                t
            }
            return e
        }
        function y(e, t, n) {
            var r, o = (0,
            s.createRequestSender)(e, t, n), a = (r = l((function() {
                var e = arguments;
                return p(this, (function(t) {
                    return [2, o({
                        url: "/v1.0/files",
                        data: e.length > 0 && void 0 !== e[0] ? e[0] : {}
                    })]
                }
                ))
            }
            )),
            function() {
                return r.apply(this, arguments)
            }
            ), c = function() {
                var e = l((function() {
                    var e = arguments;
                    return p(this, (function(t) {
                        return [2, o({
                            url: "/v1.0/files/count",
                            data: e.length > 0 && void 0 !== e[0] ? e[0] : {}
                        })]
                    }
                    ))
                }
                ));
                return function() {
                    return e.apply(this, arguments)
                }
            }(), u = function() {
                var e = l((function(e, t) {
                    var n;
                    return p(this, (function(r) {
                        return n = {
                            processing_params: {
                                audio: {
                                    transcode_to: t,
                                    channels: 1
                                }
                            }
                        },
                        [2, o({
                            url: "/v1.0/files/".concat(e, "/convert"),
                            type: "POST",
                            data: JSON.stringify(n)
                        })]
                    }
                    ))
                }
                ));
                return function(t, n) {
                    return e.apply(this, arguments)
                }
            }(), d = function() {
                var e = l((function(e) {
                    return p(this, (function(t) {
                        return [2, o({
                            url: "/v1.0/files/".concat(e)
                        })]
                    }
                    ))
                }
                ));
                return function(t) {
                    return e.apply(this, arguments)
                }
            }(), f = function() {
                var e = l((function(e) {
                    return p(this, (function(t) {
                        return [2, o({
                            url: "/v1.0/files/".concat(e, "/versions")
                        }).then((function(e) {
                            return i().propertyOf(e)(["_embedded", "versions"]) || []
                        }
                        ))]
                    }
                    ))
                }
                ));
                return function(t) {
                    return e.apply(this, arguments)
                }
            }(), _ = function() {
                var e = l((function(e, t) {
                    return p(this, (function(n) {
                        return [2, o({
                            url: "/v1.0/files/".concat(e),
                            type: "PATCH",
                            data: JSON.stringify({
                                version_uuid: t
                            })
                        })]
                    }
                    ))
                }
                ));
                return function(t, n) {
                    return e.apply(this, arguments)
                }
            }(), h = function() {
                var e = l((function() {
                    var e = arguments;
                    return p(this, (function(t) {
                        return [2, o({
                            url: "/v1.0/files/stats",
                            data: e.length > 0 && void 0 !== e[0] ? e[0] : {}
                        })]
                    }
                    ))
                }
                ));
                return function() {
                    return e.apply(this, arguments)
                }
            }(), y = function() {
                var e = l((function() {
                    return p(this, (function(e) {
                        return [2, o({
                            url: "/v1.0/files/extensions",
                            type: "GET"
                        })]
                    }
                    ))
                }
                ));
                return function() {
                    return e.apply(this, arguments)
                }
            }(), m = function() {
                var e = l((function() {
                    var e = arguments;
                    return p(this, (function(t) {
                        return [2, o({
                            url: "/v1.0/files/multiaction",
                            type: e.length > 1 && void 0 !== e[1] ? e[1] : "POST",
                            contentType: "application/json",
                            data: e.length > 0 && void 0 !== e[0] ? e[0] : {}
                        })]
                    }
                    ))
                }
                ));
                return function() {
                    return e.apply(this, arguments)
                }
            }(), g = function() {
                var e = l((function() {
                    return p(this, (function(e) {
                        return [2, o({
                            url: "/v1.0/cleaning_rules",
                            type: "GET"
                        })]
                    }
                    ))
                }
                ));
                return function() {
                    return e.apply(this, arguments)
                }
            }(), v = function() {
                var e = l((function(e) {
                    return p(this, (function(t) {
                        return [2, o({
                            url: "/v1.0/cleaning_rules/".concat(e),
                            type: "GET"
                        })]
                    }
                    ))
                }
                ));
                return function(t) {
                    return e.apply(this, arguments)
                }
            }(), b = function() {
                var e = l((function() {
                    var e, t = arguments;
                    return p(this, (function(n) {
                        return e = t.length > 0 && void 0 !== t[0] ? t[0] : {},
                        [2, o({
                            url: "/v1.0/cleaning_rules",
                            type: "POST",
                            contentType: "application/json",
                            data: JSON.stringify(e)
                        })]
                    }
                    ))
                }
                ));
                return function() {
                    return e.apply(this, arguments)
                }
            }();
            return {
                updateFile: function(e, t) {
                    return o({
                        url: "/v1.0/files/".concat(e),
                        type: "PATCH",
                        data: JSON.stringify(t)
                    })
                },
                deleteFile: function(e) {
                    return o({
                        url: "/v1.0/files/".concat(e),
                        type: "DELETE"
                    })
                },
                deleteFiles: function(e) {
                    return o({
                        url: "/v1.0/files",
                        type: "DELETE",
                        contentType: "application/json",
                        dataType: "text",
                        data: JSON.stringify(i().map(e, (function(e) {
                            return {
                                uuid: e
                            }
                        }
                        )))
                    })
                },
                restoreFiles: function(e) {
                    return o({
                        url: "/v1.0/files/restore",
                        type: "POST",
                        contentType: "application/json",
                        data: JSON.stringify(i().map(e, (function(e) {
                            return {
                                uuid: e
                            }
                        }
                        )))
                    })
                },
                getFilesList: a,
                getFilesCount: c,
                convertFile: u,
                getMetadata: d,
                getVersions: f,
                switchFileVersion: _,
                getUsedStats: h,
                getFilesExtensions: y,
                multiactionDelete: m,
                getFilesCleaningRulesList: g,
                getFilesCleaningRule: v,
                addFilesCleaningRule: b,
                updateFilesCleaningRule: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return o({
                        url: "/v1.0/cleaning_rules/".concat(e),
                        type: "PUT",
                        data: JSON.stringify(t)
                    })
                },
                deleteFilesCleaningRule: function(e) {
                    return o({
                        url: "/v1.0/cleaning_rules/".concat(e),
                        type: "DELETE"
                    })
                },
                deleteFilesCleaningRules: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                    return o({
                        url: "/v1.0/cleaning_rules",
                        type: "DELETE",
                        data: JSON.stringify(e)
                    })
                }
            }
        }
        var m = f({
            getUploadingByClientId: c.getUploadingByClientId,
            uploadFile: c.uploadFile,
            checkCleaningRules: c.checkCleaningRules
        }, y());
        const g = f({
            setContext: function(e, t, n) {
                return f({}, m, y(e, t, n))
            }
        }, m);
        var v = "../build/transpiled/network/files/drive";
        window.define(v, (function() {
            var e = "undefined"
              , n = typeof t === e ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === e ? typeof module === e ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : t;
            return n && n.default || n
        }
        )),
        window.require([v])
    }
    ,
    216249: (e, t, n) => {
        n.r(t),
        n.d(t, {
            createRequestSender: () => y
        });
        var r = n(55188)
          , i = n.n(r)
          , o = n(886965)
          , a = n(661533);
        function s(e, t, n, r, i, o, a) {
            try {
                var s = e[o](a)
                  , c = s.value
            } catch (e) {
                return void n(e)
            }
            s.done ? t(c) : Promise.resolve(c).then(r, i)
        }
        function c(e) {
            return function() {
                var t = this
                  , n = arguments;
                return new Promise((function(r, i) {
                    var o = e.apply(t, n);
                    function a(e) {
                        s(o, r, i, a, c, "next", e)
                    }
                    function c(e) {
                        s(o, r, i, a, c, "throw", e)
                    }
                    a(void 0)
                }
                ))
            }
        }
        function u(e, t) {
            var n, r, i, o, a = {
                label: 0,
                sent: function() {
                    if (1 & i[0])
                        throw i[1];
                    return i[1]
                },
                trys: [],
                ops: []
            };
            return o = {
                next: s(0),
                throw: s(1),
                return: s(2)
            },
            "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                return this
            }
            ),
            o;
            function s(o) {
                return function(s) {
                    return function(o) {
                        if (n)
                            throw new TypeError("Generator is already executing.");
                        for (; a; )
                            try {
                                if (n = 1,
                                r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r),
                                0) : r.next) && !(i = i.call(r, o[1])).done)
                                    return i;
                                switch (r = 0,
                                i && (o = [2 & o[0], i.value]),
                                o[0]) {
                                case 0:
                                case 1:
                                    i = o;
                                    break;
                                case 4:
                                    return a.label++,
                                    {
                                        value: o[1],
                                        done: !1
                                    };
                                case 5:
                                    a.label++,
                                    r = o[1],
                                    o = [0];
                                    continue;
                                case 7:
                                    o = a.ops.pop(),
                                    a.trys.pop();
                                    continue;
                                default:
                                    if (!((i = (i = a.trys).length > 0 && i[i.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                                        a = 0;
                                        continue
                                    }
                                    if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                        a.label = o[1];
                                        break
                                    }
                                    if (6 === o[0] && a.label < i[1]) {
                                        a.label = i[1],
                                        i = o;
                                        break
                                    }
                                    if (i && a.label < i[2]) {
                                        a.label = i[2],
                                        a.ops.push(o);
                                        break
                                    }
                                    i[2] && a.ops.pop(),
                                    a.trys.pop();
                                    continue
                                }
                                o = t.call(e, a)
                            } catch (e) {
                                o = [6, e],
                                r = 0
                            } finally {
                                n = i = 0
                            }
                        if (5 & o[0])
                            throw o[1];
                        return {
                            value: o[0] ? o[1] : void 0,
                            done: !0
                        }
                    }([o, s])
                }
            }
        }
        var l, d = APP.constant("amocrm_drive").url, f = new Map, p = {}, _ = (l = c((function(e) {
            return u(this, (function(t) {
                return p[e] || (p[e] = a.ajax({
                    url: "/ajax/v4/files/issue_token",
                    type: "POST",
                    data: e
                }).always((function() {
                    delete p[e]
                }
                ))),
                [2, p[e]]
            }
            ))
        }
        )),
        function(e) {
            return l.apply(this, arguments)
        }
        ), h = function() {
            var e = c((function() {
                var e, t, n, r, a, s, c, l, d = arguments;
                return u(this, (function(u) {
                    switch (u.label) {
                    case 0:
                        return t = d.length > 1 && void 0 !== d[1] ? d[1] : null,
                        n = d.length > 2 && void 0 !== d[2] ? d[2] : null,
                        r = d.length > 3 && void 0 !== d[3] && d[3],
                        a = (e = d.length > 0 && void 0 !== d[0] ? d[0] : null) && t ? {
                            entity_id: e,
                            entity_type: i().find(AMOCRM.element_types, (function(e) {
                                return e === t
                            }
                            )) ? (0,
                            o.convertElementType)(t, "string") : t
                        } : "",
                        n && (a.parent = {
                            entity_id: n,
                            entity_type: "leads"
                        }),
                        s = JSON.stringify(a),
                        (c = !1 === r && f.get(s)) ? [2, c] : [4, _(s)];
                    case 1:
                        return l = u.sent().token,
                        f.set(s, l),
                        [2, l]
                    }
                }
                ))
            }
            ));
            return function() {
                return e.apply(this, arguments)
            }
        }(), y = function(e, t, n) {
            var r = function() {
                var r = c((function(r) {
                    var i, o, s, c;
                    return u(this, (function(u) {
                        switch (u.label) {
                        case 0:
                            i = function(e) {
                                return a.ajax(a.extend(!0, {}, r, {
                                    url: "".concat(d).concat(r.url),
                                    xhrFields: {
                                        withCredentials: !0
                                    },
                                    crossDomain: !0,
                                    headers: {
                                        "X-Auth-Token": e
                                    }
                                }))
                            }
                            ,
                            u.label = 1;
                        case 1:
                            return u.trys.push([1, 4, , 7]),
                            [4, h(e, t, n)];
                        case 2:
                            return o = u.sent(),
                            [4, i(o)];
                        case 3:
                            return [2, u.sent()];
                        case 4:
                            return 403 !== (s = u.sent()).status ? [3, 6] : [4, h(e, t, n, !0)];
                        case 5:
                            return c = u.sent(),
                            [2, i(c)];
                        case 6:
                            throw s;
                        case 7:
                            return [2]
                        }
                    }
                    ))
                }
                ));
                return function(e) {
                    return r.apply(this, arguments)
                }
            }();
            return r
        }
    }
    ,
    940918: (e, t, n) => {
        n.r(t),
        n.d(t, {
            checkCleaningRules: () => C,
            getUploadingByClientId: () => E,
            uploadFile: () => w
        });
        var r = n(55188)
          , i = n.n(r)
          , o = n(880774)
          , a = n(598701)
          , s = n(117209)
          , c = n(77305)
          , u = n(216249)
          , l = n(661533);
        function d(e, t, n, r, i, o, a) {
            try {
                var s = e[o](a)
                  , c = s.value
            } catch (e) {
                return void n(e)
            }
            s.done ? t(c) : Promise.resolve(c).then(r, i)
        }
        function f(e) {
            return function() {
                var t = this
                  , n = arguments;
                return new Promise((function(r, i) {
                    var o = e.apply(t, n);
                    function a(e) {
                        d(o, r, i, a, s, "next", e)
                    }
                    function s(e) {
                        d(o, r, i, a, s, "throw", e)
                    }
                    a(void 0)
                }
                ))
            }
        }
        function p(e, t) {
            var n, r, i, o, a = {
                label: 0,
                sent: function() {
                    if (1 & i[0])
                        throw i[1];
                    return i[1]
                },
                trys: [],
                ops: []
            };
            return o = {
                next: s(0),
                throw: s(1),
                return: s(2)
            },
            "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                return this
            }
            ),
            o;
            function s(o) {
                return function(s) {
                    return function(o) {
                        if (n)
                            throw new TypeError("Generator is already executing.");
                        for (; a; )
                            try {
                                if (n = 1,
                                r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r),
                                0) : r.next) && !(i = i.call(r, o[1])).done)
                                    return i;
                                switch (r = 0,
                                i && (o = [2 & o[0], i.value]),
                                o[0]) {
                                case 0:
                                case 1:
                                    i = o;
                                    break;
                                case 4:
                                    return a.label++,
                                    {
                                        value: o[1],
                                        done: !1
                                    };
                                case 5:
                                    a.label++,
                                    r = o[1],
                                    o = [0];
                                    continue;
                                case 7:
                                    o = a.ops.pop(),
                                    a.trys.pop();
                                    continue;
                                default:
                                    if (!((i = (i = a.trys).length > 0 && i[i.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                                        a = 0;
                                        continue
                                    }
                                    if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                        a.label = o[1];
                                        break
                                    }
                                    if (6 === o[0] && a.label < i[1]) {
                                        a.label = i[1],
                                        i = o;
                                        break
                                    }
                                    if (i && a.label < i[2]) {
                                        a.label = i[2],
                                        a.ops.push(o);
                                        break
                                    }
                                    i[2] && a.ops.pop(),
                                    a.trys.pop();
                                    continue
                                }
                                o = t.call(e, a)
                            } catch (e) {
                                o = [6, e],
                                r = 0
                            } finally {
                                n = i = 0
                            }
                        if (5 & o[0])
                            throw o[1];
                        return {
                            value: o[0] ? o[1] : void 0,
                            done: !0
                        }
                    }([o, s])
                }
            }
        }
        File.prototype.arrayBuffer = File.prototype.arrayBuffer || function() {
            var e = this;
            return new Promise((function(t) {
                var n = new FileReader;
                n.onload = function() {
                    t(n.result)
                }
                ,
                n.readAsArrayBuffer(e)
            }
            ))
        }
        ;
        var _ = {}
          , h = "file_uploading"
          , y = (0,
        u.createRequestSender)();
        (0,
        a.onPageFullyLoaded)((function() {
            APP.router.registerPreventConfig({
                onlyBeforeUnload: !0
            }, h)
        }
        ));
        var m, g = (m = f((function(e, t) {
            var n, r = arguments;
            return p(this, (function(o) {
                return n = r.length > 2 && void 0 !== r[2] ? r[2] : {},
                [2, y({
                    url: "/v1.0/sessions",
                    type: "POST",
                    data: JSON.stringify(i().extend(n, {
                        file_name: e,
                        file_size: t
                    }))
                })]
            }
            ))
        }
        )),
        function(e, t) {
            return m.apply(this, arguments)
        }
        ), v = function() {
            var e = f((function() {
                var e, t = arguments;
                return p(this, (function(n) {
                    return e = t.length > 0 && void 0 !== t[0] ? t[0] : {},
                    [2, y({
                        url: "/v1.0/cleaning_rules/check",
                        type: "POST",
                        contentType: "application/json",
                        data: JSON.stringify(e)
                    })]
                }
                ))
            }
            ));
            return function() {
                return e.apply(this, arguments)
            }
        }(), b = function() {
            var e = f((function(e) {
                var t, n, r, o, a, s, c, u = arguments;
                return p(this, (function(d) {
                    switch (d.label) {
                    case 0:
                        if (t = u.length > 1 && void 0 !== u[1] ? u[1] : 0,
                        n = u.length > 2 && void 0 !== u[2] ? u[2] : {},
                        e.isAborted())
                            return [2, !1];
                        o = function() {
                            return l.ajax({
                                url: e.url,
                                type: "POST",
                                data: e.file_buffer.slice(e.part_size * t, (t + 1) * e.part_size),
                                processData: !1
                            })
                        }
                        ,
                        d.label = 1;
                    case 1:
                        return d.trys.push([1, 3, , 8]),
                        [4, o()];
                    case 2:
                        return r = d.sent(),
                        [3, 8];
                    case 3:
                        return 404 !== (a = d.sent()).status || n.session ? [3, 5] : [4, g(e.name, e.size)];
                    case 4:
                        return s = d.sent(),
                        n.session = !0,
                        [2, b(i().extend(e, {
                            url: s.upload_url,
                            part_size: s.max_part_size
                        }), 0, n)];
                    case 5:
                        return 500 === a.status && n.resends < 5 ? (n.resends += 1,
                        [4, (f = 1e3 * n.resends,
                        new Promise((function(e) {
                            return setTimeout(e, f)
                        }
                        )))]) : [3, 7];
                    case 6:
                        return d.sent(),
                        [2, o()];
                    case 7:
                        throw Error("file upload failed");
                    case 8:
                        return c = (t + 1) / Math.ceil(e.file_buffer.byteLength / e.part_size) * 100,
                        e.isAborted() || e.onProgress(c),
                        r.next_url ? [4, b(i().extend({}, e, {
                            url: r.next_url
                        }), ++t, n)] : [3, 10];
                    case 9:
                        r = d.sent(),
                        d.label = 10;
                    case 10:
                        return [2, r]
                    }
                    var f
                }
                ))
            }
            ));
            return function(t) {
                return e.apply(this, arguments)
            }
        }(), w = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
              , n = []
              , r = !1
              , o = function() {
                var o = f((function() {
                    var o, a;
                    return p(this, (function(s) {
                        switch (s.label) {
                        case 0:
                            if (!e)
                                throw new Error("no file to upload");
                            return [4, g(e.name, e.size, i().pick(t, "file_uuid", "only_auth", "with_preview", "billable", "processing"))];
                        case 1:
                            return o = s.sent(),
                            [4, e.arrayBuffer()];
                        case 2:
                            return a = s.sent(),
                            [2, b({
                                url: o.upload_url,
                                file_name: e.name,
                                file_size: e.size,
                                file_buffer: a,
                                part_size: o.max_part_size,
                                isAborted: function() {
                                    return r
                                },
                                onProgress: function(e) {
                                    i().each(n, (function(t) {
                                        return t(e)
                                    }
                                    ))
                                }
                            })]
                        }
                    }
                    ))
                }
                ));
                return function() {
                    return o.apply(this, arguments)
                }
            }()
              , a = o();
            return a.abort = function() {
                r = !0
            }
            ,
            a.progress = function(e) {
                i().isFunction(e) && n.push(e)
            }
            ,
            a.finally((function() {
                n = []
            }
            )),
            function(e, t, n) {
                _[e] || (_[e] = []);
                var r = i().uniqueId("file-")
                  , o = new (0,
                s.default.model)({
                    file: t,
                    id: r,
                    type: "files-notification",
                    extension: t.name.slice(t.name.lastIndexOf(".") + 1),
                    updated_at: new Date,
                    progress: 0
                });
                s.default.add(o.trigger("file-add"));
                var a = {
                    file: t,
                    notification: o,
                    uploading: n
                };
                _[e].push(a),
                n.progress((function(e) {
                    o.set("progress", Math.round(e))
                }
                )),
                n.finally((function() {
                    !function(e, t) {
                        _[e] = i().filter(_[e], (function(e) {
                            var n = e.uploading === t;
                            return n && e.notification.collection.remove(e.notification),
                            !n
                        }
                        )),
                        APP.router.preventPageChange(i().flatten(_).length > 0, h)
                    }(e, n)
                }
                )),
                APP.router.preventPageChange(!0, h)
            }(t.client_id || "", e, a),
            a
        }, E = function(e) {
            return i().map(_[e], (function(e) {
                return {
                    file: e.file,
                    progress: e.notification.get("progress"),
                    uploading: e.uploading
                }
            }
            ))
        }, C = function() {
            var e = f((function(e) {
                var t, n, r, a, s;
                return p(this, (function(u) {
                    switch (u.label) {
                    case 0:
                        return t = i().map(e, (function(e) {
                            return {
                                filename: e.name,
                                size: e.size,
                                source_id: e.source_id,
                                created_by: e.created_by
                            }
                        }
                        )),
                        [4, v(t)];
                    case 1:
                        return n = u.sent(),
                        r = [],
                        i().each(n, (function(t, n) {
                            t.fits_rule && r.push({
                                text: e[n].name
                            })
                        }
                        )),
                        r.length > 5 && r.splice(5, r.length, {
                            text: "..."
                        }),
                        r.length ? (a = r.concat([{
                            text: "The media will be deleted immediately, as it matches the deletion rule set by the account administrator. You can restore media from the Deleted folder in the Media list within 30 days."
                        }, {
                            text: "Are you sure you want to upload this media?"
                        }]),
                        s = new c.default({
                            class_name: "",
                            text: "".concat((0,
                            o.i18n)("Upload media"), ":"),
                            decline_text: (0,
                            o.i18n)("button_cancel"),
                            accept_text: (0,
                            o.i18n)("Confirm"),
                            message: a,
                            no_close: !0,
                            accept: function() {
                                this.destroy()
                            }
                        }),
                        [2, new Promise((function(e) {
                            s.destroy = function() {
                                this.modal.destroy(),
                                e(s.accepted)
                            }
                        }
                        ))]) : [2, !0]
                    }
                }
                ))
            }
            ));
            return function(t) {
                return e.apply(this, arguments)
            }
        }()
    }
    ,
    733513: (e, t, n) => {
        n.r(t),
        n.d(t, {
            ChatSourceModel: () => p,
            SOURCE_TYPES: () => d
        });
        var r = n(55188)
          , i = n.n(r)
          , o = n(871082)
          , a = n(880774);
        function s(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r)
            }
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
        function l(e) {
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
                var n, r = c(e);
                if (t) {
                    var i = c(this).constructor;
                    n = Reflect.construct(r, arguments, i)
                } else
                    n = r.apply(this, arguments);
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
        var d = {
            CHAT: 2,
            WIDGET: 5,
            ONLINECHAT: 12,
            INTEGRATION: 16
        }
          , f = [d.CHAT, d.WIDGET, d.ONLINECHAT]
          , p = function(e) {
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
            }(c, e);
            var t, n, r, o = l(c);
            function c() {
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, c),
                o.apply(this, arguments)
            }
            return t = c,
            r = [{
                key: "fromResponse",
                value: function(e) {
                    if (!e)
                        throw new Error("The response_chat_source can't be empty.");
                    var t = e.id;
                    if (!t)
                        throw new Error("The response_chat_source must have source_id.");
                    var n = e.origin;
                    if (!n)
                        throw new Error("The response_chat_source must have origin.");
                    if (!i().contains(f, e.type))
                        throw new Error("The response_chat_source is not available for chatting.");
                    return new c({
                        id: t,
                        _origin: n,
                        _origin_name: e.origin_title || "",
                        _source_name: e.name || "",
                        _origin_icon_url: e.origin_icon || "",
                        _is_disabled: Boolean(e.disabled),
                        _has_whatsapp_modal_location: Boolean(e.has_whatsapp_modal_location),
                        _supports_delivery_notification: Boolean(e.supports_delivery_notification),
                        _is_supports_list_message: Boolean(e.is_supports_list_message),
                        _is_waba: Boolean(e.is_waba)
                    })
                }
            }],
            (n = [{
                key: "getId",
                value: function() {
                    return this.get("id")
                }
            }, {
                key: "getOriginIconUrl",
                value: function() {
                    return this.get("_origin_icon_url")
                }
            }, {
                key: "getOriginName",
                value: function() {
                    return this.get("_origin_name")
                }
            }, {
                key: "getOrigin",
                value: function() {
                    return this.get("_origin")
                }
            }, {
                key: "getSourceName",
                value: function() {
                    return this.get("_source_name")
                }
            }, {
                key: "getName",
                value: function() {
                    return this.getSourceName() || this.getOriginName()
                }
            }, {
                key: "getFormattedOriginName",
                value: function() {
                    return this.getOriginName() || (0,
                    a.capitalize)(this.getOrigin())
                }
            }, {
                key: "getNameWithOrigin",
                value: function() {
                    var e = this.getSourceName()
                      , t = this.getFormattedOriginName();
                    return e ? "".concat(e, " (").concat(t, ")") : t
                }
            }, {
                key: "checkIsDisabled",
                value: function() {
                    return this.get("_is_disabled")
                }
            }, {
                key: "checkIsInstagramOriginConnected",
                value: function() {
                    return this.getOrigin().includes("instagram_business")
                }
            }, {
                key: "checkIsFromFacebookIntegration",
                value: function() {
                    return "facebook" === this.getOrigin()
                }
            }, {
                key: "checkIsFromWhatsAppIntegration",
                value: function() {
                    return this.get("_has_whatsapp_modal_location")
                }
            }, {
                key: "checkIsMessengersConnected",
                value: function() {
                    var e = this.getOrigin();
                    return "instagram_business" === e || "telegram" === e || "waba" === e
                }
            }, {
                key: "checkIsWaba",
                value: function() {
                    return this.get("_is_waba")
                }
            }, {
                key: "checkIsSupportsDeliveryNotification",
                value: function() {
                    return this.get("_supports_delivery_notification")
                }
            }, {
                key: "checkIsFromTrialWhatsAppIntegration",
                value: function() {
                    return "amochats.whatsapp" === this.getOrigin() && !this.get("_is_waba")
                }
            }, {
                key: "checkIsFromWhatsAppLiteIntegration",
                value: function() {
                    return "com.amocrm.amocrmwa" === this.getOrigin()
                }
            }, {
                key: "checkIsSupportsListMessage",
                value: function() {
                    return this.get("_is_supports_list_message")
                }
            }, {
                key: "checkIsFromWhatsAppCloudApiIntegration",
                value: function() {
                    return "waba" === this.getOrigin()
                }
            }]) && s(t.prototype, n),
            r && s(t, r),
            c
        }(o.Model)
    }
    ,
    99453: (e, t, n) => {
        n.r(t),
        n.d(t, {
            ChatSourcesCollection: () => h
        });
        var r = n(974839)
          , i = n.n(r)
          , o = n(55188)
          , a = n.n(o)
          , s = n(763176)
          , c = n(733513);
        function u(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r)
            }
        }
        function l(e, t, n) {
            return l = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(e, t, n) {
                var r = function(e, t) {
                    for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = d(e)); )
                        ;
                    return e
                }(e, t);
                if (r) {
                    var i = Object.getOwnPropertyDescriptor(r, t);
                    return i.get ? i.get.call(n || e) : i.value
                }
            }
            ,
            l(e, t, n || e)
        }
        function d(e) {
            return d = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            ,
            d(e)
        }
        function f(e, t) {
            return f = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                e
            }
            ,
            f(e, t)
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
                var n, r = d(e);
                if (t) {
                    var i = d(this).constructor;
                    n = Reflect.construct(r, arguments, i)
                } else
                    n = r.apply(this, arguments);
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
                t && f(e, t)
            }(i, e);
            var t, n, r = p(i);
            function i() {
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, i),
                r.apply(this, arguments)
            }
            return t = i,
            (n = [{
                key: "model",
                get: function() {
                    return c.ChatSourceModel
                }
            }, {
                key: "initialize",
                value: function() {
                    this.itemRel = "sources"
                }
            }, {
                key: "parse",
                value: function(e) {
                    var t = l(d(i.prototype), "parse", this).call(this, e);
                    if (!t)
                        return [];
                    var n = [];
                    return a().each(t, (function(e) {
                        var t;
                        try {
                            t = c.ChatSourceModel.fromResponse(e)
                        } catch (t) {
                            return void console.debug(t, e)
                        }
                        n.push(t)
                    }
                    )),
                    n
                }
            }, {
                key: "url",
                value: function() {
                    return "/ajax/v4/sources?only=chats&with=supports_delivery_notification,is_widget_disabled"
                }
            }, {
                key: "checkHasSourcesWithMessageButtonsLimit",
                value: function() {
                    return this.some((function(e) {
                        return e.checkIsFromFacebookIntegration() || e.checkIsFromWhatsAppIntegration()
                    }
                    ))
                }
            }, {
                key: "checkTrialWhatsAppIsConnected",
                value: function() {
                    return this.some((function(e) {
                        return e.checkIsFromTrialWhatsAppIntegration()
                    }
                    ))
                }
            }, {
                key: "checkWhatsAppLiteIsConnected",
                value: function() {
                    return this.some((function(e) {
                        return e.checkIsFromWhatsAppLiteIntegration()
                    }
                    ))
                }
            }, {
                key: "checkInstagramConnected",
                value: function() {
                    return this.some((function(e) {
                        return e.checkIsInstagramOriginConnected()
                    }
                    ))
                }
            }, {
                key: "checkFacebookConnected",
                value: function() {
                    return this.some((function(e) {
                        return e.checkIsFromFacebookIntegration()
                    }
                    ))
                }
            }, {
                key: "checkIsMessengersConnected",
                value: function() {
                    return this.some((function(e) {
                        return e.checkIsMessengersConnected()
                    }
                    ))
                }
            }, {
                key: "checkIsSupportsListMessage",
                value: function() {
                    return this.some((function(e) {
                        return e.checkIsSupportsListMessage() && !e.checkIsDisabled()
                    }
                    ))
                }
            }]) && u(t.prototype, n),
            i
        }(i().Collection)
          , h = (0,
        s.wrapCacheCollection)(_)
          , y = "../build/transpiled/network/lead_sources/chat_sources_collection";
        window.define(y, (function() {
            var e = "undefined"
              , n = typeof t === e ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === e ? typeof module === e ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : t;
            return n && n.default || n
        }
        )),
        window.require([y])
    }
    ,
    962438: (e, t, n) => {
        n.r(t),
        n.d(t, {
            WriteFirstLeadSourcesCollection: () => m
        });
        var r = n(974839)
          , i = n.n(r)
          , o = n(55188)
          , a = n.n(o)
          , s = n(315702)
          , c = n(763176)
          , u = n(944989);
        function l(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r)
            }
        }
        function d(e, t, n) {
            return d = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(e, t, n) {
                var r = function(e, t) {
                    for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = f(e)); )
                        ;
                    return e
                }(e, t);
                if (r) {
                    var i = Object.getOwnPropertyDescriptor(r, t);
                    return i.get ? i.get.call(n || e) : i.value
                }
            }
            ,
            d(e, t, n || e)
        }
        function f(e) {
            return f = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            ,
            f(e)
        }
        function p(e, t) {
            return p = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                e
            }
            ,
            p(e, t)
        }
        function _(e) {
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
                var n, r = f(e);
                if (t) {
                    var i = f(this).constructor;
                    n = Reflect.construct(r, arguments, i)
                } else
                    n = r.apply(this, arguments);
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
        var h = "amocrm_write_first_lead_sources"
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
                t && p(e, t)
            }(i, e);
            var t, n, r = _(i);
            function i() {
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, i),
                r.apply(this, arguments)
            }
            return t = i,
            (n = [{
                key: "model",
                get: function() {
                    return u.LeadSourceModel
                }
            }, {
                key: "initialize",
                value: function() {
                    this.itemRel = "sources"
                }
            }, {
                key: "parse",
                value: function(e) {
                    var t = d(f(i.prototype), "parse", this).call(this, e);
                    if (!t)
                        return [];
                    var n = [];
                    return a().each(t, (function(e) {
                        var t;
                        try {
                            t = function(e) {
                                if (!e)
                                    throw new Error("The response_lead_source can't be empty.");
                                var t = e.origin;
                                if (!t)
                                    throw new Error("The response_lead_source must have origin.");
                                var n = e.scope_id;
                                if (!n)
                                    throw new Error("The response_lead_source must have scope_id.");
                                var r = e.source_id;
                                return {
                                    id: u.LeadSourceModel.makeModelId({
                                        source_id: r,
                                        origin: t
                                    }),
                                    _origin: t,
                                    _scope_id: n,
                                    _source_id: r || null,
                                    _origin_name: e.origin_title || "",
                                    _widget_name: e.widget_name || "",
                                    _source_name: e.source_name || "",
                                    _origin_icon_url: e.icon || ""
                                }
                            }(e)
                        } catch (t) {
                            return void console.debug(t, e)
                        }
                        n.push(t)
                    }
                    )),
                    n
                }
            }, {
                key: "url",
                value: function() {
                    return "/ajax/v1/chats/origin/sources?filter[write_first]=1"
                }
            }, {
                key: "setCache",
                value: function(e, t) {
                    return s.storeWithExpiration.set(h, t || {}, 36e5),
                    t
                }
            }, {
                key: "getCache",
                value: function() {
                    return s.storeWithExpiration.get(h)
                }
            }, {
                key: "getIdsGroupedByOrigin",
                value: function() {
                    var e = {};
                    return this.each((function(t) {
                        var n = t.getId()
                          , r = t.getOrigin();
                        e[r] || (e[r] = []),
                        e[r].push(n)
                    }
                    )),
                    e
                }
            }]) && l(t.prototype, n),
            i
        }(i().Collection)
          , m = (0,
        c.wrapCacheCollection)(y).extend({}, {
            clearAllCache: function() {
                s.storeWithExpiration.remove(h)
            }
        })
          , g = "../build/transpiled/network/lead_sources/write_first_lead_sources_collection";
        window.define(g, (function() {
            var e = "undefined"
              , n = typeof t === e ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === e ? typeof module === e ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : t;
            return n && n.default || n
        }
        )),
        window.require([g])
    }
    ,
    470505: (e, t, n) => {
        n.r(t),
        n.d(t, {
            CONNECTION_CODES: () => r,
            SOCKET_NAMES: () => o,
            SOCKET_STATE: () => i
        });
        var r = {
            DEFAULT: 0,
            NORMAL_CLOSURE: 1e3,
            INTERNAL_ERROR: 1011,
            UNAUTHORIZED: 3401,
            OFFLINE: 4e3
        }
          , i = {
            CONNECTED: "connected",
            CONNECTING: "connecting",
            DISCONNECTED: "disconnected",
            CONNECT_OPENED: "connect_opened"
        }
          , o = {
            NOTIFICATIONS: "notifications",
            AMOJO: "amojo"
        }
          , a = "../build/transpiled/network/socket/constant";
        window.define(a, (function() {
            var e = "undefined"
              , n = typeof t === e ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === e ? typeof module === e ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : t;
            return n && n.default || n
        }
        )),
        window.require([a])
    }
    ,
    869445: (e, t, n) => {
        n.r(t),
        n.d(t, {
            default: () => L
        });
        var r = n(55188)
          , i = n.n(r)
          , o = n(987081)
          , a = n(128508)
          , s = n(315702)
          , c = n(643095)
          , u = n(910587)
          , l = n(507182)
          , d = n(729153)
          , f = n(913781)
          , p = n(470505);
        function _(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        var h = APP.constant("notifications").url_ws_2
          , y = new l.default
          , m = (0,
        u.default)(h, y)
          , g = new o.Subject
          , v = new o.Subject
          , b = m.messages.pipe(a.map((function(e) {
            return JSON.parse(e)
        }
        )))
          , w = [p.CONNECTION_CODES.DEFAULT, p.CONNECTION_CODES.NORMAL_CLOSURE]
          , E = !1
          , C = []
          , T = !1
          , O = null
          , k = null
          , S = 0
          , P = 0
          , A = null
          , j = null
          , x = !1
          , N = 0
          , D = {};
        function I() {
            P = 0,
            S = 0,
            T ? i().each(C, (function(e) {
                return e({
                    status: p.SOCKET_STATE.CONNECTED
                })
            }
            )) : T = !0
        }
        function R() {
            x = !1,
            M()
        }
        function M() {
            O && O.unsubscribe(),
            k && k.unsubscribe(),
            k = b.subscribe((function(e) {
                g.next(e)
            }
            ), (function(e) {
                var t = m.connectionStatus.getValue();
                e.target && e.target.readyState !== WebSocket.OPEN && 0 === t.state && i().contains(w, t.code) && v.next({
                    state: 0,
                    code: p.CONNECTION_CODES.INTERNAL_ERROR
                })
            }
            )),
            O = o.merge(m.connectionStatus, v).subscribe((function(e) {
                if (!i().isEqual(D, e))
                    if (D = e,
                    (0,
                    f.clearTimer)(A),
                    (0,
                    f.clearTimer)(j),
                    window.removeEventListener("online", R),
                    0 === e.state) {
                        var t, n = (0,
                        s.exponentialDelay)(P, {
                            with_jitter: !0
                        });
                        switch (i().each(C, (function(t) {
                            return t({
                                status: i().contains(w, e.code) ? p.SOCKET_STATE.DISCONNECTED : p.SOCKET_STATE.CONNECTING,
                                delay: n,
                                statusCode: e.code,
                                reason: e.reason
                            })
                        }
                        )),
                        e.code) {
                        case p.CONNECTION_CODES.DEFAULT:
                        case p.CONNECTION_CODES.NORMAL_CLOSURE:
                            break;
                        case p.CONNECTION_CODES.UNAUTHORIZED:
                            0 === S && (S++,
                            d.default.check().done((function() {
                                M()
                            }
                            )));
                            break;
                        default:
                            A = (0,
                            f.setTimer)(M, n),
                            window.addEventListener("online", R),
                            P < 5 ? P++ : P = 0
                        }
                        (null === (t = window.navigator) || void 0 === t ? void 0 : t.onLine) && !i().contains(w, e.code) && function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                              , t = function(e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {}
                                      , r = Object.keys(n);
                                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                                    }
                                    )))),
                                    r.forEach((function(t) {
                                        _(e, t, n[t])
                                    }
                                    ))
                                }
                                return e
                            }({
                                socketName: p.SOCKET_NAMES.NOTIFICATIONS
                            }, e);
                            E && (0,
                            c.sentryLogSocketDisconnect)(t)
                        }({
                            code: e.code,
                            reason: e.reason
                        })
                    } else
                        i().each(C, (function(e) {
                            return e({
                                status: p.SOCKET_STATE.CONNECT_OPENED
                            })
                        }
                        )),
                        j = (0,
                        f.setTimer)(I, 2e3)
            }
            ))
        }
        const L = {
            subscribe: function(e) {
                return e = i().isArray(e) ? e : [e],
                new o.Observable((function(t) {
                    m.connectionStatus.getValue().state || !1 !== x || (M(),
                    x = !0);
                    var n = g.pipe(a.filter((function(t) {
                        return i().isUndefined(t.channel) ? t : i().filter(e, (function(e) {
                            return t.body.channel === e
                        }
                        )).length
                    }
                    )), a.tap({
                        next: i().bind(t.next, t)
                    })).subscribe(i().noop());
                    return function() {
                        n.unsubscribe()
                    }
                }
                ))
            },
            status: m.connectionStatus,
            onConnectionChange: function(e) {
                return C.push(e),
                function() {
                    C = i().without(C, e)
                }
            },
            reconnect: R,
            send: function(e) {
                e = i().isArray(e) ? e : [e],
                y.next(JSON.stringify(i().map(e, (function(e) {
                    return i().extend({
                        uid: (++N).toString()
                    }, e)
                }
                ))))
            }
        };
        var F = "../build/transpiled/network/socket/index";
        window.define(F, (function() {
            var e = "undefined"
              , n = typeof t === e ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === e ? typeof module === e ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : t;
            return n && n.default || n
        }
        )),
        window.require([F])
    }
    ,
    913781: (e, t, n) => {
        n.r(t),
        n.d(t, {
            clearTimer: () => c,
            is_supported: () => u,
            setTimer: () => s
        });
        var r = /^function\s*\w*\s*\([\w\s,]*\)\s*{([\w\W]*?)}$/
          , i = {}
          , o = 0
          , a = null;
        try {
            (a = new Worker(function(e) {
                var t = r.exec(function() {
                    var e = {};
                    self.onmessage = function(t) {
                        var n = t.data && t.data.toString().split("|");
                        if (n)
                            return 1 === n.length ? (clearTimeout(e[n[0]]),
                            void delete e[n[0]]) : void (e[n[0]] = setTimeout((function() {
                                self.postMessage(n[0]),
                                delete e[n[0]]
                            }
                            ), n[1]))
                    }
                }
                .toString());
                if (null === t)
                    throw new TypeError("Invalid function is given.");
                try {
                    return (window.URL || window.webkitURL).createObjectURL(new Blob([t[1]],{
                        type: "text/javascript"
                    }))
                } catch (e) {
                    return console.error(e),
                    ""
                }
            }())).onmessage = function(e) {
                i[e.data] && (i[e.data](),
                delete i[e.data])
            }
        } catch (e) {
            console.error("Web worker is not available"),
            console.error(e)
        }
        var s = function(e, t) {
            return a ? (i[o += 1] = e,
            a.postMessage([o, t].join("|")),
            o) : setTimeout(e, t)
        }
          , c = function(e) {
            a ? i[e] && (a.postMessage(e),
            delete i[e]) : clearTimeout(e)
        }
          , u = window.Worker
          , l = "../build/transpiled/network/socket/worker";
        window.define(l, (function() {
            var e = "undefined"
              , n = typeof t === e ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === e ? typeof module === e ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : t;
            return n && n.default || n
        }
        )),
        window.require([l])
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
        e._sentryDebugIds[t] = "d71ce4a4-3a83-4994-ada4-3b787f0fcdcb",
        e._sentryDebugIdIdentifier = "sentry-dbid-d71ce4a4-3a83-4994-ada4-3b787f0fcdcb")
    } catch (e) {}
}();
//# sourceMappingURL=74589.42222f536f17e3d625df.js.map
