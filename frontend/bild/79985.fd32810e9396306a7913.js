"use strict";
(window.webpackChunk = window.webpackChunk || []).push([[79985], {
    856718: (e, t, n) => {
        n.r(t),
        n.d(t, {
            AmoJoMediator: () => b
        });
        var i, r, o, a = n(55188), s = n.n(a), u = n(661533), l = n.n(u), c = n(973571), d = n(7208), p = {
            add: [],
            remove: [],
            update: []
        }, _ = "amojo_chats", f = (i = null,
        r = function(e) {
            var t = (0,
            e.getChats)()
              , n = {};
            s().each(t, (function(e) {
                var t = c.Chat.getId(e);
                if (t) {
                    var i = c.Chat.getExternalContact(e);
                    if (i) {
                        var r = d.ExternalContact.getOrigin(i);
                        n[r] || (n[r] = []),
                        n[r].push(t)
                    }
                }
            }
            ));
            var i = new Set;
            return s().each(n, (function(e, t) {
                e.length <= 1 || function(e) {
                    return !s().contains(["amo.intercom", "amo.support"], e)
                }(t) && s().each(e, (function(e) {
                    i.add(e)
                }
                ))
            }
            )),
            i
        }
        ,
        {
            checkWithShown: function(e) {
                var t = e.getChats
                  , n = e.chat_id;
                return i || (i = r({
                    getChats: t
                })),
                i.has(n)
            },
            onChatsChange: function() {
                i = null
            }
        }), h = (o = null,
        {
            checkWithShown: function(e) {
                var t = e.getChats
                  , n = e.chat_id;
                return o || (o = function(e) {
                    var t = (0,
                    e.getChats)()
                      , n = s().reduce(t, (function(e, t) {
                        var n = c.Chat.getId(t);
                        if (!n)
                            return e;
                        var i = c.Chat.getExternalContact(t);
                        if (!i)
                            return e;
                        var r = d.ExternalContact.getLinkedEntityId(i)
                          , o = d.ExternalContact.getSourceId(i)
                          , a = d.ExternalContact.getOrigin(i);
                        return e[r] || (e[r] = {}),
                        e[r][a] || (e[r][a] = {}),
                        e[r][a][o] || (e[r][a][o] = []),
                        e[r][a][o].push(n),
                        e
                    }
                    ), {})
                      , i = new Set;
                    return s().each(n, (function(e) {
                        s().each(e, (function(e) {
                            s().each(e, (function(e) {
                                e.length <= 1 || s().each(e, (function(e) {
                                    var n = t[e]
                                      , r = c.Chat.getExternalContact(n);
                                    d.ExternalContact.getOriginalProfilePhone(r) && i.add(e)
                                }
                                ))
                            }
                            ))
                        }
                        ))
                    }
                    )),
                    i
                }({
                    getChats: t
                })),
                o.has(n)
            },
            onChatsChange: function() {
                o = null
            }
        }), m = null, y = APP.constant;
        APP.constant = function(e, t) {
            return e === _ && t && (m = null),
            y.apply(void 0, arguments)
        }
        ;
        var b = {
            get: function(e) {
                var t = APP.constant(_) || {};
                switch (e) {
                case "group":
                    return s().pick(t, (function(e) {
                        return "group" === e.entity_type
                    }
                    ));
                case "direct":
                    return s().pick(t, (function(e) {
                        return "direct" === e.entity_type
                    }
                    ));
                case "all":
                    return t;
                default:
                    return m || (m = s().pick(t, (function(e) {
                        return "group" !== e.entity_type && "direct" !== e.entity_type
                    }
                    ))),
                    m
                }
            },
            set: function(e) {
                return APP.constant(_, e),
                f.onChatsChange(),
                h.onChatsChange(),
                !0
            },
            extend: function(e, t) {
                var n = this
                  , i = s().keys(this.get("all"))
                  , r = s().keys(e)
                  , o = s().difference(r, i)
                  , a = t ? e : s().pick(e, o);
                return this.set(s().extend({}, this.get("all"), a)),
                t ? s().each(e, (function(e, t) {
                    s().contains(o, t) ? n.trigger("add", [e]) : n.trigger("update", [e])
                }
                )) : s().each(o, (function(t) {
                    n.trigger("add", [e[t]])
                }
                )),
                !0
            },
            isFullChat: function(e) {
                var t = this.get()[e] || {};
                return !s().isUndefined(t.contacts) && !s().isUndefined(t.users)
            },
            on: function(e, t) {
                p[e].push(t)
            },
            off: function(e, t) {
                var n = s().indexOf(p[e], t);
                p[e].splice(n, 1)
            },
            trigger: function(e, t) {
                s().each(p[e], (function(e) {
                    e.apply(null, t)
                }
                ))
            },
            addChat: function(e) {
                e && c.Chat.getId(e) && (e = [e]),
                s().each(e, (function(e) {
                    e && c.Chat.getId(e) && this._addChat(e)
                }
                ), this)
            },
            _addChat: function(e) {
                var t = this.get("all");
                return t[c.Chat.getId(e)] = e,
                this.set(t),
                this.trigger("add", [e]),
                t
            },
            getChatByAmojoUserId: function(e) {
                var t = this.get("all");
                return s().find(t, (function(t) {
                    var n = c.Chat.getExternalContact(t);
                    return !!n && d.ExternalContact.getAmojoUserId(n) === e
                }
                ))
            },
            updateChat: function(e, t) {
                var n = this.get("all")
                  , i = l().extend({}, n[e] || {}, t);
                return n[e] = i,
                this.set(n),
                this.trigger("update", [e]),
                i
            },
            removeChat: function(e) {
                var t = s().omit(this.get("all"), e);
                return this.set(t),
                this.trigger("remove", [e]),
                t
            },
            isExternalChat: function(e) {
                var t = this.get()[e];
                return !!t && c.Chat.checkIsExternalChat(t)
            },
            checkWithOriginalProfilePhoneShown: function(e) {
                var t = this;
                return h.checkWithShown({
                    chat_id: e,
                    getChats: function() {
                        return t.get("all")
                    }
                })
            },
            checkWithLeadSourceNameShown: function(e) {
                var t = this;
                return f.checkWithShown({
                    chat_id: e,
                    getChats: function() {
                        return t.get("all")
                    }
                })
            },
            getChatById: function(e) {
                return this.get("all")[e] || null
            },
            findFirstChatByOrigin: function(e) {
                var t = e.origin
                  , n = e.linked_entity_id
                  , i = this.get("all");
                return s().find(i, (function(e) {
                    var i = c.Chat.getExternalContact(e);
                    return !!i && d.ExternalContact.getLinkedEntityId(i) === n && d.ExternalContact.getOrigin(i) === t
                }
                ))
            }
        }
          , g = "../build/transpiled/interface/amojo/mediator";
        window.define(g, (function() {
            var e = "undefined"
              , n = typeof t === e ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === e ? typeof module === e ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : t;
            return n && n.default || n
        }
        )),
        window.require([g])
    }
    ,
    973571: (e, t, n) => {
        n.r(t),
        n.d(t, {
            Chat: () => o
        });
        var i = n(55188)
          , r = n.n(i)
          , o = {
            getId: function(e) {
                return e.chat_id
            },
            getExternalContact: function(e) {
                return r().values(e && e.contacts)[0] || null
            },
            checkIsInternalChat: function(e) {
                var t = e.entity_type
                  , n = [APP.element_types.leads, APP.element_types.customers, APP.element_types.unsorted];
                return r().contains(n, parseInt(t))
            },
            checkIsExternalChat: function(e) {
                return e.entity_type === APP.element_types.contacts
            }
        }
          , a = "../build/transpiled/interface/card/chat_entities/chat";
        window.define(a, (function() {
            var e = "undefined"
              , n = typeof t === e ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === e ? typeof module === e ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : t;
            return n && n.default || n
        }
        )),
        window.require([a])
    }
    ,
    7208: (e, t, n) => {
        n.r(t),
        n.d(t, {
            ExternalContact: () => o
        });
        var i = n(880774)
          , r = APP.constant("amojo_origins")
          , o = {
            getFullName: function(e) {
                return e.name || ""
            },
            getOrigin: function(e) {
                return e.origin
            },
            getLinkedEntityId: function(e) {
                return Number(e.id)
            },
            getOriginalProfilePhone: function(e) {
                return e.original_profile_phone || ""
            },
            getSourceId: function(e) {
                return e.source_id || null
            },
            getOriginIconUrl: function(e) {
                return e.origin_icon || r[e.origin] || ""
            },
            getOriginName: function(e, t) {
                var n = e.origin_title || "";
                return "secondary" === t && n ? this.buildSecondaryName(n) : n
            },
            getLeadSourceName: function(e, t) {
                var n = e.source_name || "";
                return "secondary" === t && n ? this.buildSecondaryName(n) : n
            },
            getAmojoUserId: function(e) {
                return e.amojo_id || ""
            },
            getIntercomTalkId: function(e) {
                return e.talk_id || ""
            },
            buildSecondaryName: function(e) {
                return (0,
                i.i18n)("%s comments").replace("%s", e)
            }
        }
          , a = "../build/transpiled/interface/card/chat_entities/external_contact";
        window.define(a, (function() {
            var e = "undefined"
              , n = typeof t === e ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === e ? typeof module === e ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : t;
            return n && n.default || n
        }
        )),
        window.require([a])
    }
    ,
    740495: (e, t, n) => {
        n.r(t),
        n.d(t, {
            default: () => y
        });
        var i = n(55188)
          , r = n.n(i)
          , o = n(827378)
          , a = n.n(o)
          , s = n(937634)
          , u = n(460159)
          , l = n.n(u)
          , c = n(521466)
          , d = n(353256);
        function p(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(e, i.key, i)
            }
        }
        function _(e, t, n) {
            return _ = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(e, t, n) {
                var i = function(e, t) {
                    for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = f(e)); )
                        ;
                    return e
                }(e, t);
                if (i) {
                    var r = Object.getOwnPropertyDescriptor(i, t);
                    return r.get ? r.get.call(n || e) : r.value
                }
            }
            ,
            _(e, t, n || e)
        }
        function f(e) {
            return f = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            ,
            f(e)
        }
        function h(e, t) {
            return h = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                e
            }
            ,
            h(e, t)
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
                    var r = f(this).constructor;
                    n = Reflect.construct(i, arguments, r)
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
        const y = function(e) {
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
            }(o, e);
            var t, n, i = m(o);
            function o() {
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, o),
                i.apply(this, arguments)
            }
            return t = o,
            n = [{
                key: "initialize",
                value: function(e) {
                    var t = this;
                    _(f(o.prototype), "initialize", this).apply(this, arguments);
                    var n = e.getText
                      , i = e.setText
                      , a = e.onLoad;
                    this.getText = n,
                    this.setText = i,
                    this.onLoad = a,
                    this.unmountControl = r().noop,
                    l()._preload(["langs/ai"])().then((function() {
                        return t.unmountControl = t.mountControl()
                    }
                    ))
                }
            }, {
                key: "destroy",
                value: function() {
                    this.unmountControl(),
                    _(f(o.prototype), "destroy", this).call(this, !0)
                }
            }, {
                key: "mountControl",
                value: function() {
                    var e = a().createElement(d.AiRewriter, {
                        getText: r().bind(this.getText, this),
                        setText: r().bind(this.setText, this),
                        onLoad: r().bind(this.onLoad, this),
                        offset: {
                            bottom: 41,
                            right: -17
                        }
                    })
                      , t = s.createRoot(this.el);
                    return t.render(e),
                    function() {
                        t.unmount()
                    }
                }
            }],
            n && p(t.prototype, n),
            o
        }(c.default);
        var b = "../build/transpiled/interface/controls/ai_rewriter/ai_rewriter";
        window.define(b, (function() {
            var e = "undefined"
              , n = typeof t === e ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === e ? typeof module === e ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : t;
            return n && n.default || n
        }
        )),
        window.require([b])
    }
    ,
    681309: (e, t, n) => {
        n.r(t),
        n.d(t, {
            default: () => h
        });
        var i = n(55188)
          , r = n.n(i)
          , o = n(460159)
          , a = n.n(o)
          , s = n(661533)
          , u = n.n(s)
          , l = n(880774)
          , c = n(133178);
        function d(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(e, i.key, i)
            }
        }
        var p = "/tmpl/controls/emoji/bubble_init.twig"
          , _ = new c.IndexedDBCache("emoji")
          , f = 0;
        const h = new (function() {
            function e() {
                var t = this;
                !function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, e),
                this.$buble = u()(""),
                this.$latest = u()(""),
                this.$supported = u()(""),
                this.tmpl_promise = a()._preload([p])(),
                Promise.all([this.tmpl_promise, _.load()]).then((function() {
                    t.$buble = u()(a()({
                        ref: p
                    }).render()),
                    t.$latest = t.getLatest(20)
                }
                ))
            }
            var t, n;
            return t = e,
            n = [{
                key: "addConsumer",
                value: function() {
                    f += 1,
                    this.updateDOM(),
                    this.updateSupported(),
                    this.updateLatest()
                }
            }, {
                key: "removeConsumer",
                value: function() {
                    f = f - 1 < 0 ? 0 : f - 1,
                    this.updateDOM()
                }
            }, {
                key: "$buble",
                get: function() {
                    return this.$_buble
                },
                set: function(e) {
                    this.$_buble = e
                }
            }, {
                key: "ready",
                value: function() {
                    return this.tmpl_promise
                }
            }, {
                key: "setPosition",
                value: function(e) {
                    this.$buble.addClass("control-emoji-buble-wrapper_".concat(e)),
                    this.$buble.removeClass("control-emoji-buble-wrapper_".concat("up" === e ? "down" : "up"))
                }
            }, {
                key: "getSymbolsFromCache",
                value: function(e) {
                    return _.get(e) || []
                }
            }, {
                key: "getSupportedReactions",
                value: function(e) {
                    return u()(a()({
                        ref: p
                    }).render({
                        only_supported: !0,
                        emoji_groups: {
                            emoji_supported: {
                                name: (0,
                                l.i18n)("Emojis"),
                                symbols: e.slice(0, e.length)
                            }
                        }
                    }))
                }
            }, {
                key: "getEmojisBetween",
                value: function(e, t) {
                    for (var n = e.codePointAt(0), i = t.codePointAt(0), r = [], o = n; o <= i; o++)
                        r.push(String.fromCodePoint(o));
                    return r
                }
            }, {
                key: "getLatest",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null
                      , n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    return t = t || this.getSymbolsFromCache(n),
                    r().isEmpty(t) ? u()("") : u()(a()({
                        ref: p
                    }).render({
                        only_latest: !0,
                        emoji_groups: {
                            emoji_latest: {
                                name: (0,
                                l.i18n)("Recently used"),
                                symbols: t.slice(0, e)
                            }
                        }
                    }))
                }
            }, {
                key: "onSelect",
                value: function(e) {
                    e.preventDefault(),
                    e.stopPropagation();
                    var t = u()(e.currentTarget).data("reaction");
                    r().isFunction(this.onEmojiSelect) && this.onEmojiSelect(t)
                }
            }, {
                key: "attach",
                value: function(e) {
                    this.onEmojiSelect = e.onEmojiSelect,
                    this.onBubbleHide = e.onBubbleHide
                }
            }, {
                key: "show",
                value: function() {
                    this.$buble.addClass("control-emoji-buble-wrapper_visible")
                }
            }, {
                key: "_hide",
                value: function() {
                    this.hideCancel(),
                    this.$buble.removeClass("control-emoji-buble-wrapper_visible")
                }
            }, {
                key: "hidePrepare",
                value: function() {
                    var e = this;
                    this.hide_timeout = setTimeout((function() {
                        r().isFunction(e.onBubbleHide) && e.onBubbleHide(),
                        e._hide()
                    }
                    ), 250)
                }
            }, {
                key: "hideCancel",
                value: function() {
                    clearInterval(this.hide_timeout)
                }
            }, {
                key: "updateSupported",
                value: function() {
                    this.$supported.length && (this.$buble.find("#emoji_supported").remove(),
                    this.$buble.find(".control-emoji-buble").prepend(this.$supported))
                }
            }, {
                key: "updateLatest",
                value: function() {
                    this.$latest.length && (this.$buble.find("#emoji_latest").remove(),
                    this.$buble.find(".control-emoji-buble").prepend(this.$latest))
                }
            }, {
                key: "updateDOM",
                value: function() {
                    if (0 === f)
                        return this.$buble.off(),
                        void this.$buble.remove();
                    0 === this.$buble.parents("body").length && (u()(document.body).append(this.$buble),
                    this.$buble.on("mouseenter.buble", r().bind(this.hideCancel, this)),
                    this.$buble.on("mouseleave.buble", r().bind(this.hidePrepare, this)),
                    this.$buble.on("click.buble", ".control-emoji-buble-group__symbol", r().bind(this.onSelect, this)))
                }
            }, {
                key: "push",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
                      , n = this.getSymbolsFromCache(t)
                      , i = n.indexOf(e);
                    i > -1 && n.splice(i, 1),
                    n.unshift(e),
                    _.set({
                        key: t,
                        val: n
                    }),
                    this.$latest = this.getLatest(20, n),
                    this.updateLatest()
                }
            }],
            n && d(t.prototype, n),
            e
        }());
        var m = "../build/transpiled/interface/controls/emoji/emoji_content";
        window.define(m, (function() {
            var e = "undefined"
              , n = typeof t === e ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === e ? typeof module === e ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : t;
            return n && n.default || n
        }
        )),
        window.require([m])
    }
    ,
    227437: (e, t, n) => {
        n.r(t),
        n.d(t, {
            default: () => v
        });
        var i = n(55188)
          , r = n.n(i)
          , o = n(460159)
          , a = n.n(o)
          , s = n(521466)
          , u = n(987280)
          , l = n(681309)
          , c = n(775193)
          , d = n(661533);
        function p(e, t, n, i, r, o, a) {
            try {
                var s = e[o](a)
                  , u = s.value
            } catch (e) {
                return void n(e)
            }
            s.done ? t(u) : Promise.resolve(u).then(i, r)
        }
        function _(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(e, i.key, i)
            }
        }
        function f(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        function h(e) {
            return h = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            ,
            h(e)
        }
        function m(e, t) {
            return m = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                e
            }
            ,
            m(e, t)
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
                var n, i = h(e);
                if (t) {
                    var r = h(this).constructor;
                    n = Reflect.construct(i, arguments, r)
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
        var b = ["👍", "👎", "❤️", "🤔", "😂"]
          , g = null
          , v = function(e) {
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
            }(o, e);
            var t, n, i = y(o);
            function o() {
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, o),
                i.apply(this, arguments)
            }
            return t = o,
            n = [{
                key: "template",
                get: function() {
                    return "/tmpl/controls/emoji/reactions.twig"
                }
            }, {
                key: "reactions_height",
                get: function() {
                    return this.params.supported_reactions.all ? 220 : 26
                }
            }, {
                key: "events",
                value: function() {
                    var e;
                    return f(e = {}, "click ".concat(this._selector("symbol")), "handleReactionSendClick"),
                    f(e, "click ".concat(this._selector("increase_button")), "handleIncreaseButtonClick"),
                    f(e, "mouseleave", "handleReactionAndBubleMouseLeave"),
                    f(e, "mouseover", "handleTipMenuMouseOver"),
                    f(e, "reaction:show", "handleReactionRequestShow"),
                    f(e, "bubble:hide", "onBubbleHide"),
                    e
                }
            }, {
                key: "_selectors",
                value: function() {
                    return {
                        symbol: ".emoji-reactions__symbol",
                        wrapper: ".feed-context-menu__wrapper",
                        reaction_wrapper: ".emoji-reactions__content",
                        increase_button: ".js-emoji-increase"
                    }
                }
            }, {
                key: "_classes",
                value: function() {
                    return {
                        buble_wrapper: "control-emoji-reactions-buble-wrapper",
                        increased: "feed-context-menu__wrapper-increased",
                        single_control: "emoji-reactions__single",
                        scroll_control: "emoji-reactions__scroll",
                        scroll_control_wrapper: "emoji-reactions__content-scroll"
                    }
                }
            }, {
                key: "onBubbleHide",
                value: function() {
                    this._removeClass("buble_wrapper", l.default.$buble),
                    l.default._hide()
                }
            }, {
                key: "handleReactionAndBubleMouseLeave",
                value: function(e) {
                    var t = this;
                    d(null == e ? void 0 : e.relatedTarget).closest(this._selector("buble_wrapper")).length || d(null == e ? void 0 : e.relatedTarget).closest(this._selector("wrapper")).length || (this.hide_tip_menu_timeout = r().delay((function() {
                        clearTimeout(t.hide_tip_menu_timeout),
                        t.onBubbleHide(),
                        t.tipMenuHide()
                    }
                    ), 250))
                }
            }, {
                key: "handleTipMenuMouseOver",
                value: function() {
                    l.default.hideCancel(),
                    clearTimeout(this.hide_tip_menu_timeout)
                }
            }, {
                key: "handleReactionSendClick",
                value: function(e) {
                    var t = d(e.currentTarget).data("reaction");
                    this.sendReaction(t)
                }
            }, {
                key: "sendReaction",
                value: function(e) {
                    r().isUndefined(e) || (l.default.push(e, this.params.supported_reactions_origin),
                    this.onBubbleHide(),
                    this.tipMenuHide(),
                    (0,
                    u.sendReaction)(this.message_id, e).subscribe())
                }
            }, {
                key: "handleIncreaseButtonClick",
                value: function(e) {
                    e.stopPropagation && e.stopPropagation(),
                    this.showBubble()
                }
            }, {
                key: "setPositions",
                value: function(e, t) {
                    var n = document.body.getBoundingClientRect()
                      , i = e.getBoundingClientRect();
                    t.css("height", "");
                    var r = {
                        top: this.render_type === c.TIP_RENDER_TYPE.up ? i.top - 220 + this.$control.height() + 22 : i.bottom - n.top - this.$control.height() - 20,
                        left: i.x,
                        height: 220
                    };
                    for (var o in r)
                        t.css(o, r[o])
                }
            }, {
                key: "showBubble",
                value: function() {
                    var e, t = this;
                    return (e = function() {
                        return function(e, t) {
                            var n, i, r, o, a = {
                                label: 0,
                                sent: function() {
                                    if (1 & r[0])
                                        throw r[1];
                                    return r[1]
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
                                                i && (r = 2 & o[0] ? i.return : o[0] ? i.throw || ((r = i.return) && r.call(i),
                                                0) : i.next) && !(r = r.call(i, o[1])).done)
                                                    return r;
                                                switch (i = 0,
                                                r && (o = [2 & o[0], r.value]),
                                                o[0]) {
                                                case 0:
                                                case 1:
                                                    r = o;
                                                    break;
                                                case 4:
                                                    return a.label++,
                                                    {
                                                        value: o[1],
                                                        done: !1
                                                    };
                                                case 5:
                                                    a.label++,
                                                    i = o[1],
                                                    o = [0];
                                                    continue;
                                                case 7:
                                                    o = a.ops.pop(),
                                                    a.trys.pop();
                                                    continue;
                                                default:
                                                    if (!((r = (r = a.trys).length > 0 && r[r.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                                                        a = 0;
                                                        continue
                                                    }
                                                    if (3 === o[0] && (!r || o[1] > r[0] && o[1] < r[3])) {
                                                        a.label = o[1];
                                                        break
                                                    }
                                                    if (6 === o[0] && a.label < r[1]) {
                                                        a.label = r[1],
                                                        r = o;
                                                        break
                                                    }
                                                    if (r && a.label < r[2]) {
                                                        a.label = r[2],
                                                        a.ops.push(o);
                                                        break
                                                    }
                                                    r[2] && a.ops.pop(),
                                                    a.trys.pop();
                                                    continue
                                                }
                                                o = t.call(e, a)
                                            } catch (e) {
                                                o = [6, e],
                                                i = 0
                                            } finally {
                                                n = r = 0
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
                        }(this, (function(e) {
                            switch (e.label) {
                            case 0:
                                return [4, t.ready_promise];
                            case 1:
                                return e.sent(),
                                t.setPositions(t.el, l.default.$buble),
                                t._addClass("increased"),
                                t._addClass("buble_wrapper", l.default.$buble),
                                l.default.show(),
                                t.$control.remove(),
                                t.blockScroll(),
                                l.default.attach({
                                    onEmojiSelect: r().bind(t.sendReaction, t)
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
                        return new Promise((function(i, r) {
                            var o = e.apply(t, n);
                            function a(e) {
                                p(o, i, r, a, s, "next", e)
                            }
                            function s(e) {
                                p(o, i, r, a, s, "throw", e)
                            }
                            a(void 0)
                        }
                        ))
                    }
                    )()
                }
            }, {
                key: "initialize",
                value: function() {
                    var e, t, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    if (this.message_id = n.message_id,
                    r().isUndefined(n.tipMenuHide))
                        throw new Error("method to hide cannot be undefiend");
                    this.tipMenuHide = n.tipMenuHide,
                    this.blockScroll = n.blockScroll || r().noop;
                    var i = {
                        type: "",
                        reactions: b,
                        supported_reactions: n.supported_reactions,
                        is_scroll: !1,
                        is_increasing: !1,
                        supported_reactions_origin: n.origin
                    };
                    switch (!0) {
                    case i.supported_reactions.all:
                        i.type = "all",
                        i.is_increasing = !0;
                        break;
                    case Boolean((null === (e = i.supported_reactions.list) || void 0 === e ? void 0 : e.length) || (null === (t = i.supported_reactions.ranges) || void 0 === t ? void 0 : t.length)):
                        var o = i.supported_reactions.list || [];
                        switch (i.type = "list",
                        i.reactions = r().reduce(i.supported_reactions.ranges, (function(e, t) {
                            return e.concat(l.default.getEmojisBetween(t.from, t.to))
                        }
                        ), o),
                        !0) {
                        case 1 === i.reactions.length:
                            i.wrapper_class_name = this._class("single_control");
                            break;
                        case i.reactions.length > 1 && i.reactions.length < 7:
                            break;
                        case i.reactions.length >= 7 && i.reactions.length <= 15:
                            i.wrapper_class_name = this._class("scroll_control_wrapper"),
                            i.class_name = this._class("scroll_control"),
                            i.is_scroll = !0;
                            break;
                        case i.reactions.length > 15:
                            i.is_increasing = !0,
                            i.reactions = r().first(i.reactions, 5);
                            break;
                        default:
                            return
                        }
                        break;
                    default:
                        return
                    }
                    this.params = i
                }
            }, {
                key: "handleBubleMouseEnter",
                value: function() {
                    clearTimeout(this.hide_tip_menu_timeout)
                }
            }, {
                key: "handleReactionRequestShow",
                value: function(e) {
                    var t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c.TIP_RENDER_TYPE.down;
                    this.$control = d(a()({
                        ref: this.template
                    }).render(this.params)),
                    g !== this.params.supported_reactions_origin && (l.default.$latest = l.default.getLatest(20, null, this.params.supported_reactions_origin),
                    l.default.updateLatest(),
                    g = this.params.supported_reactions_origin),
                    (null === (t = this.params.supported_reactions) || void 0 === t ? void 0 : t.list) ? (l.default.$supported = l.default.getSupportedReactions(this.params.supported_reactions.list),
                    l.default.$buble.find(".control-emoji-buble").children().not("#emoji_latest, #emoji_supported").hide()) : (l.default.$buble.find(".control-emoji-buble").children().show(),
                    l.default.$buble.find("#emoji_supported").hide()),
                    n === c.TIP_RENDER_TYPE.down ? this.$el.append(this.$control) : this.$el.prepend(this.$control),
                    this.render_type = n,
                    this.params.is_increasing && (l.default.addConsumer(),
                    this.$buble = l.default.$buble,
                    this.$buble.on("mouseenter.buble", r().bind(this.handleBubleMouseEnter, this)),
                    this.$buble.on("mouseleave.buble", r().bind(this.handleReactionAndBubleMouseLeave, this)),
                    this.$buble.on("click.buble", (function(e) {
                        return e.stopPropagation()
                    }
                    )),
                    this.ready_promise = l.default.ready())
                }
            }],
            n && _(t.prototype, n),
            o
        }(s.default)
          , E = "../build/transpiled/interface/controls/emoji/emoji_reactions";
        window.define(E, (function() {
            var e = "undefined"
              , n = typeof t === e ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === e ? typeof module === e ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : t;
            return n && n.default || n
        }
        )),
        window.require([E])
    }
    ,
    669402: (e, t, n) => {
        n.r(t),
        n.d(t, {
            default: () => b
        });
        var i = n(661533)
          , r = n.n(i)
          , o = n(55188)
          , a = n.n(o)
          , s = (n(693671),
        n(397850));
        function u(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, i = new Array(t); n < t; n++)
                i[n] = e[n];
            return i
        }
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
        function d(e, t, n) {
            return d = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(e, t, n) {
                var i = function(e, t) {
                    for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = p(e)); )
                        ;
                    return e
                }(e, t);
                if (i) {
                    var r = Object.getOwnPropertyDescriptor(i, t);
                    return r.get ? r.get.call(n || e) : r.value
                }
            }
            ,
            d(e, t, n || e)
        }
        function p(e) {
            return p = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            ,
            p(e)
        }
        function _(e, t) {
            return _ = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                e
            }
            ,
            _(e, t)
        }
        function f(e) {
            return function(e) {
                if (Array.isArray(e))
                    return u(e)
            }(e) || function(e) {
                if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"])
                    return Array.from(e)
            }(e) || function(e, t) {
                if (e) {
                    if ("string" == typeof e)
                        return u(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === n && e.constructor && (n = e.constructor.name),
                    "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? u(e, t) : void 0
                }
            }(e) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
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
                var n, i = p(e);
                if (t) {
                    var r = p(this).constructor;
                    n = Reflect.construct(i, arguments, r)
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
        function m(e) {
            for (var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = "", i = 0; i < e.length; i += 1)
                "BR" === e[i].nodeName && i !== e.length - 1 && i > 0 ? n += "\n" : "DIV" === e[i].nodeName ? (n += "\n",
                n += m(e[i].childNodes)) : n += e[i].textContent;
            return t.no_nbsp && (n = n.replace(/\u00a0/g, " ")),
            n
        }
        var y = function(e) {
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
            }(o, e);
            var t, n, i = h(o);
            function o() {
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, o),
                i.apply(this, arguments)
            }
            return t = o,
            n = [{
                key: "_classes",
                value: function() {
                    return {
                        list: "fields-mention-list"
                    }
                }
            }, {
                key: "_selectors",
                value: function() {
                    return {
                        input: this.$input.selector,
                        contenteditable: this.$contenteditable.selector
                    }
                }
            }, {
                key: "document_events",
                get: function() {
                    var e;
                    return c(e = {
                        "fields_mention:update-value": "onInputUpdateOutside"
                    }, "blur ".concat(this._selector("contenteditable")), "onContentEditableBlur"),
                    c(e, "input ".concat(this._selector("contenteditable")), "onContentEditableInputThrottled"),
                    c(e, "shown.atwho ".concat(this._selector("contenteditable")), "onShowAddContainerClass"),
                    e
                }
            }, {
                key: "initialize",
                value: function(e) {
                    var t = '<span data-id="${id}">[${option}]</span>';
                    this.$contenteditable = e.contenteditable,
                    this.$input = e.input,
                    this._mentions = this.prepareMentions(e.mentions || (0,
                    s.getFieldsParams)()),
                    this._without_input_value_update = e.without_input_value_update || !1,
                    this._should_put_value = e.should_put_value,
                    this._start_with_space = !1 !== e.start_with_space,
                    this.updateContentEditableOutside(),
                    this.onContentEditableInputThrottled = a().throttle(this.onContentEditableInput, 500),
                    this._should_put_value && (t = t.replace("[${option}]", "${id}")),
                    this.$contenteditable.atwho({
                        at: "[",
                        data: this._mentions,
                        displayTpl: "<li>${option}</li>",
                        insertTpl: t,
                        searchKey: "option",
                        limit: 100,
                        maxLen: 20,
                        startWithSpace: this._start_with_space
                    }),
                    this._atwho = this.$contenteditable.data("atwho"),
                    d(p(o.prototype), "initialize", this).call(this, arguments)
                }
            }, {
                key: "prepareMentions",
                value: function(e) {
                    var t = [APP.element_types.leads, APP.element_types.customers, APP.element_types.contacts, APP.element_types.companies]
                      , n = a().max(t)
                      , i = a().sortBy(e, (function(e) {
                        var i = e.element_type
                          , r = e.sort
                          , o = a().isUndefined(i) ? t.length : t.indexOf(i)
                          , s = a().isUndefined(r) ? Number.MAX_SAFE_INTEGER : r;
                        return i > n || !a().isNumber(i) ? [t.length + 1, s] : [o, s]
                    }
                    ))
                      , r = a().groupBy(i, (function(e) {
                        return a().isUndefined(e.element_type) && a().isUndefined(e.sort) ? "no_element_type_no_sort" : "with_element_type_or_sort"
                    }
                    ));
                    return f(r.with_element_type_or_sort || []).concat(f(r.no_element_type_no_sort || [])) || []
                }
            }, {
                key: "destroy",
                value: function() {
                    this._atwho && this._atwho.$inputor.atwho("destroy"),
                    d(p(o.prototype), "destroy", this).call(this, arguments)
                }
            }, {
                key: "onShowAddContainerClass",
                value: function(e, t) {
                    t.$el.find(".atwho-view").addClass(this._class("list")).find("ul").addClass("custom-scroll")
                }
            }, {
                key: "onInputUpdateOutside",
                value: function() {
                    this.updateContentEditableOutside(),
                    this.$input.trigger("change")
                }
            }, {
                key: "onContentEditableInput",
                value: function() {
                    this.$contenteditable.trigger("autosize:resized"),
                    this.$input.val(this.getRawValue()).trigger("change")
                }
            }, {
                key: "onContentEditableBlur",
                value: function() {
                    this._without_input_value_update || this.$input.val(this.getRawValue()).trigger("change")
                }
            }, {
                key: "getFormattedValue",
                value: function() {
                    return m(this.$contenteditable.get(0).childNodes)
                }
            }, {
                key: "getRawValue",
                value: function() {
                    var e = this.$contenteditable.clone();
                    return e.find(".atwho-inserted").each((function(e, t) {
                        var n = r()(t).find("span[data-id]");
                        n && n.replaceWith(n.attr("data-id"))
                    }
                    )),
                    m(e.get(0).childNodes, {
                        no_nbsp: !0
                    }).trim()
                }
            }, {
                key: "getFieldTemplateById",
                value: function(e) {
                    var t = a().findWhere(this._mentions, {
                        id: e
                    });
                    return t ? ['<span class="atwho-inserted" data-atwho-at-query="[" contenteditable="false">', '<span data-id="'.concat(t.id, '">').concat(a().escape(this._should_put_value ? t.id : "[".concat(t.option, "]")), "</span>"), "</span>"].join("") : ""
                }
            }, {
                key: "updateContentEditableOutside",
                value: function() {
                    var e = this
                      , t = (a().escape(this.$input.val()) || "").replace(/[\n]/g, "<br>").replace(/{{[a-zA-Z0-9._-]+}}/gm, (function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                        return e.getFieldTemplateById(t.trim()) || t
                    }
                    ))
                      , n = this.getFormattedValue();
                    this.$contenteditable.is(":focus") || t === n || (this.$contenteditable.html(t + "&nbsp;"),
                    this.$contenteditable.trigger("autosize:resized"))
                }
            }],
            n && l(t.prototype, n),
            o
        }(n(521466).default);
        y.extend(y);
        const b = y;
        var g = "../build/transpiled/interface/controls/fields_mention";
        window.define(g, (function() {
            var e = "undefined"
              , n = typeof t === e ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === e ? typeof module === e ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : t;
            return n && n.default || n
        }
        )),
        window.require([g])
    }
    ,
    560258: (e, t, n) => {
        n.r(t),
        n.d(t, {
            default: () => A
        });
        var i = n(661533)
          , r = n.n(i)
          , o = n(55188)
          , a = n.n(o)
          , s = n(460159)
          , u = n.n(s)
          , l = n(128508)
          , c = n(987081)
          , d = n(880774)
          , p = n(889378)
          , _ = n(77305)
          , f = n(167584)
          , h = n(340958)
          , m = n(702481)
          , y = n(987280)
          , b = n(193727)
          , g = n(137233);
        function v(e, t, n, i, r, o, a) {
            try {
                var s = e[o](a)
                  , u = s.value
            } catch (e) {
                return void n(e)
            }
            s.done ? t(u) : Promise.resolve(u).then(i, r)
        }
        function E(e) {
            return function() {
                var t = this
                  , n = arguments;
                return new Promise((function(i, r) {
                    var o = e.apply(t, n);
                    function a(e) {
                        v(o, i, r, a, s, "next", e)
                    }
                    function s(e) {
                        v(o, i, r, a, s, "throw", e)
                    }
                    a(void 0)
                }
                ))
            }
        }
        function w(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        function T(e, t) {
            var n, i, r, o, a = {
                label: 0,
                sent: function() {
                    if (1 & r[0])
                        throw r[1];
                    return r[1]
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
                                i && (r = 2 & o[0] ? i.return : o[0] ? i.throw || ((r = i.return) && r.call(i),
                                0) : i.next) && !(r = r.call(i, o[1])).done)
                                    return r;
                                switch (i = 0,
                                r && (o = [2 & o[0], r.value]),
                                o[0]) {
                                case 0:
                                case 1:
                                    r = o;
                                    break;
                                case 4:
                                    return a.label++,
                                    {
                                        value: o[1],
                                        done: !1
                                    };
                                case 5:
                                    a.label++,
                                    i = o[1],
                                    o = [0];
                                    continue;
                                case 7:
                                    o = a.ops.pop(),
                                    a.trys.pop();
                                    continue;
                                default:
                                    if (!((r = (r = a.trys).length > 0 && r[r.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                                        a = 0;
                                        continue
                                    }
                                    if (3 === o[0] && (!r || o[1] > r[0] && o[1] < r[3])) {
                                        a.label = o[1];
                                        break
                                    }
                                    if (6 === o[0] && a.label < r[1]) {
                                        a.label = r[1],
                                        r = o;
                                        break
                                    }
                                    if (r && a.label < r[2]) {
                                        a.label = r[2],
                                        a.ops.push(o);
                                        break
                                    }
                                    r[2] && a.ops.pop(),
                                    a.trys.pop();
                                    continue
                                }
                                o = t.call(e, a)
                            } catch (e) {
                                o = [6, e],
                                i = 0
                            } finally {
                                n = r = 0
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
        const A = h.default.extend({
            controlClassName: "feed-note__joined-attach",
            initialize: function() {
                return E((function() {
                    var e = arguments;
                    return T(this, (function(t) {
                        return h.default.prototype.initialize.apply(this, e),
                        this.file_id = this.$el.data("file-id"),
                        this.rx_subscriptions = new c.Subscription,
                        "progress" === this._elem("preload_panel").data("loading-status") && (this._elem("preload_img").addClass(this._class("loading_file")),
                        this._socketFileLoading()),
                        this.compressImage(),
                        [2]
                    }
                    ))
                }
                )).apply(this)
            },
            _classes: function() {
                return {
                    disabled: "feed-note__joined-attach__link_disabled",
                    preview: "feed-note__media-preview__file",
                    download_link: "feed-note__joined-attach__link",
                    preload_link: "preload-file__item-download-text",
                    preload_panel: "preload-file__item-download",
                    preload_img: "preload-file__item-img",
                    preload_btn: "svg-common--download-files-dims",
                    image_resizer: "js-image-resizer",
                    lost_text: "preload-file__item-lost-text",
                    progress_title: "preload-progress-bar__title",
                    progress_bar: "preload-progress-bar__block",
                    loading_file: "preload-file__item-img-loading"
                }
            },
            events: function() {
                var e;
                return w(e = {}, "click ".concat(this._selector("preview")), "fileDownload"),
                w(e, "click ".concat(this._selector("download_link")), "fileDownload"),
                w(e, "click ".concat(this._selector("preload_link")), "preloadFile"),
                w(e, "click ".concat(this._selector("preload_btn")), "preloadFile"),
                w(e, "click ".concat(this._selector("lost_text")), "openDescrLostFile"),
                e
            },
            status_codes: {
                STATUS_NOT_STARTED: "ready",
                STATUS_IN_PROGRESS: "progress",
                STATUS_DONE: "finished",
                STATUS_FAILED: "failed",
                STATUS_LOST: "lost"
            },
            preloadFile: function() {
                return E((function() {
                    return T(this, (function(e) {
                        return this._elem("preload_img").addClass(this._class("loading_file")),
                        this._elem("preload_panel").html(u()({
                            ref: "/tmpl/notes/types/amojo/progress_bar.twig"
                        }).render()),
                        this._socketFileLoading(),
                        this._makeRequest(this.file_id),
                        [2]
                    }
                    ))
                }
                )).apply(this)
            },
            compressImage: function() {
                var e;
                this._elem("image_resizer").each((e = E((function(e, t) {
                    var n, i, o, s, u;
                    return T(this, (function(e) {
                        return n = r()(t),
                        i = n.find(".feed-note__media-preview__picture"),
                        o = i.get(0),
                        (s = new Image).className = "feed-note__media-preview__picture",
                        u = function() {
                            if (!a().contains(b.EXT_FOR_COMPRESSION, (0,
                            g.getFileExtension)(o.src)) || o.naturalWidth < 440 || o.naturalHeight < 440)
                                return n.find(".spinner-icon").remove(),
                                void (o.style.opacity = 1);
                            setTimeout(E((function() {
                                var e;
                                return T(this, (function(t) {
                                    switch (t.label) {
                                    case 0:
                                        return [4, (0,
                                        b.compressImage)({
                                            originalImage: o,
                                            imagePreviewWidth: 110,
                                            imagePreviewHeight: 110
                                        })];
                                    case 1:
                                        return e = t.sent(),
                                        s.src = URL.createObjectURL(e),
                                        n.prepend(s),
                                        n.find(".spinner-icon").remove(),
                                        [2]
                                    }
                                }
                                ))
                            }
                            )))
                        }
                        ,
                        o.complete ? u() : o.onload = function() {
                            u()
                        }
                        ,
                        [2]
                    }
                    ))
                }
                )),
                function(t, n) {
                    return e.apply(this, arguments)
                }
                ))
            },
            checkStatus: function(e) {
                switch (e.processed_count > 0 && (this.need_reload = !0),
                e.status) {
                case this.status_codes.STATUS_DONE:
                    this.rx_subscriptions.unsubscribe(),
                    this.rerender(e);
                    break;
                case this.status_codes.STATUS_IN_PROGRESS:
                    this.rerender(e);
                    break;
                case this.status_codes.STATUS_FAILED:
                    this.rx_subscriptions.unsubscribe(),
                    this.errorUpload();
                    break;
                case this.status_codes.STATUS_LOST:
                    this.rx_subscriptions.unsubscribe(),
                    this.renderLostFile();
                    break;
                default:
                    this.errorUpload()
                }
            },
            openDescrLostFile: function() {
                new _.default({
                    text: (0,
                    d.i18n)("File not found"),
                    message: [{
                        text: "Automatically downloading files is disabled"
                    }],
                    no_actions: !0
                })
            },
            rerender: function(e) {
                var t = this._getRenderData(e).numerator;
                this._findElem("progress_bar").width(t + "%"),
                this._findElem("progress_title").text(t + "%")
            },
            renderLostFile: function() {
                this._elem("preload_panel").html(u()({
                    ref: "/tmpl/notes/types/amojo/lost_file.twig"
                }).render())
            },
            errorUpload: function() {
                this._elem("preload_img").removeClass(this._class("loading_file")),
                this._elem("preload_panel").html(u()({
                    ref: "/tmpl/notes/types/amojo/fail_file.twig"
                }).render())
            },
            _getRenderData: function(e) {
                return a().extend({
                    numerator: this._getPercentage(e)
                }, e)
            },
            _getPercentage: function(e) {
                var t;
                return e.status === this.status_codes.STATUS_DONE ? t = 100 : (t = Math.round(e.progress / e.total * 100),
                t = a().isNaN(t) ? 0 : t),
                t
            },
            _makeRequest: function(e) {
                (0,
                y.downloadFile)(e, a().bind(this.errorUpload, this)).subscribe(a().noop(), a().bind(this.errorUpload, this))
            },
            _socketFileLoading: function() {
                var e = this
                  , t = f.default.socket.pipe(l.map((function(e) {
                    var t = e.data;
                    try {
                        return JSON.parse(t)
                    } catch (e) {
                        return t
                    }
                }
                )), l.filter((function(e) {
                    return "file_loading_updated" === e.type
                }
                )), l.filter((function(t) {
                    return t.data.file_id === e.file_id
                }
                )), l.map((function(e) {
                    return e.data
                }
                )))
                  , n = f.default.socket.pipe(l.map((function(e) {
                    var t = e.data;
                    try {
                        return JSON.parse(t)
                    } catch (e) {
                        return t
                    }
                }
                )), l.filter((function(e) {
                    return "message_updated" === e.type
                }
                )));
                this.rx_subscriptions.add(t.subscribe(a().bind(this.checkStatus, this))),
                this.rx_subscriptions.add(n.subscribe(a().bind(this.deleteSubscriptions, this)))
            },
            deleteSubscriptions: function() {
                this.rx_subscriptions.unsubscribe()
            },
            fileDownload: function(e) {
                return E((function() {
                    var t, n, i;
                    return T(this, (function(o) {
                        switch (o.label) {
                        case 0:
                            e.preventDefault(),
                            e.stopPropagation(),
                            (t = r()(e.currentTarget)).addClass(this._class("disabled")),
                            o.label = 1;
                        case 1:
                            return o.trys.push([1, 3, , 4]),
                            [4, fetch(t.attr("href"), {
                                redirect: "manual"
                            })];
                        case 2:
                            return 404 === (n = o.sent()).status ? (new p.default).showError((0,
                            d.i18n)("File not found or deleted"), !1) : 401 === n.status ? (new p.default).showError((0,
                            d.i18n)("Start by refreshing the page — this often helps."), !1) : (0,
                            m.downloadFile)(t.attr("href")),
                            [3, 4];
                        case 3:
                            return i = o.sent(),
                            console.error("Fetch error: ", i),
                            [3, 4];
                        case 4:
                            return t.removeClass(this._class("disabled")),
                            [2]
                        }
                    }
                    ))
                }
                )).apply(this)
            }
        });
        var k = "../build/transpiled/interface/notes/controls/file_download";
        window.define(k, (function() {
            var e = "undefined"
              , n = typeof t === e ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === e ? typeof module === e ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : t;
            return n && n.default || n
        }
        )),
        window.require([k])
    }
    ,
    278904: (e, t, n) => {
        n.r(t),
        n.d(t, {
            default: () => r
        });
        var i = n(929658);
        const r = i.default.View.extend({
            revert: function() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                    t[n] = arguments[n];
                return this._cached_form_html = null,
                i.default.View.prototype.revert.apply(this, t)
            },
            getInputValue: function(e) {
                var t = i.default.View.prototype.getInputValue.apply(this, arguments)
                  , n = this.model.get(e.attr("name"));
                return "radio" === e.attr("type") && n && !t ? n : t
            }
        });
        var o = "../build/transpiled/interface/notes/form";
        window.define(o, (function() {
            var e = "undefined"
              , n = typeof t === e ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === e ? typeof module === e ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : t;
            return n && n.default || n
        }
        )),
        window.require([o])
    }
    ,
    46225: (e, t, n) => {
        n.r(t),
        n.d(t, {
            default: () => A
        });
        var i = n(55188)
          , r = n.n(i)
          , o = n(661533)
          , a = n.n(o)
          , s = n(871082)
          , u = n.n(s)
          , l = n(974839)
          , c = n.n(l)
          , d = n(162262)
          , p = n.n(d)
          , _ = n(161320)
          , f = n.n(_)
          , h = n(315702)
          , m = n(500034)
          , y = n(23456)
          , b = n(83646)
          , g = n(946754)
          , v = n(828235)
          , E = n(701893)
          , w = n(105655)
          , T = r().invert(w.default);
        const A = c().Model.extend({
            constructor: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return !e._date_create && e.date_create && e.msec_created_at && (e._date_create = e.date_create,
                e.date_create = e.msec_created_at),
                c().Model.apply(this, arguments)
            },
            initialize: function(e) {
                var t = this.get("type");
                switch (r().isString(t) && this.set("type", T[t]),
                this.get("object_type") || this.set("object_type", this._getObjectType()),
                !0) {
                case "tasks" === this.get("object_type").code:
                    p().mixin(this, b.default);
                    break;
                case this.get("type") === APP.note_types.task_result:
                    p().mixin(this, g.default);
                    break;
                case this.get("element_type") === APP.element_types.catalog_elements:
                    p().mixin(this, E.default);
                    break;
                default:
                    p().mixin(this, v.default)
                }
                (this.get("is_add") || this.get("is_new")) && this.set(r().extend(this._generateEmpty(), r().pick(e, "data", "type", "object_type")))
            },
            get: function(e) {
                return "type" === e && this.get("note_type") ? this.get("note_type") : "object_type" === e && this.get("note_type") ? this._getObjectType() : "_date_create" === e && r().isUndefined(this.attributes._date_create) ? this.get("date_create") : "can_be_retrieved_by_url" === e && r().result(this.collection, "_has_url_copying_feature", !1) ? "tasks" !== (this.get("object_type") || {}).code || !this.isFutureTask() : c().Model.prototype.get.apply(this, arguments)
            },
            toJSON: function() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                    t[n] = arguments[n];
                var i = c().Model.prototype.toJSON.apply(this, t);
                return this.get("note_type") ? r().extend({}, i, {
                    type: this.get("type"),
                    object_type: this.get("object_type")
                }) : i
            },
            parse: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return !r().isEmpty(this.links) && r().isEmpty(e.links) ? e : c().Model.prototype.parse.apply(this, arguments)
            },
            _getObjectType: function() {
                return this.get("chat_id") ? {
                    code: "chats",
                    id: "wtf?!"
                } : {
                    code: "notes",
                    id: AMOCRM.element_types.notes
                }
            },
            _generateEmpty: function() {
                return {}
            },
            _getSyncData: function() {
                return {}
            },
            isFutureTask: function() {
                return "tasks" === this.get("object_type").code && !this.get("status") && this.get("complete_till") > f()().tz(APP.system.timezone).unix()
            },
            isNew: function() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                    t[n] = arguments[n];
                return u().Model.prototype.isNew.apply(this, t)
            },
            _updateModel: r().noop,
            sync: function(e, t, n) {
                return this._pending || (this._pending = !0,
                this._loading = new Promise(r().bind((function(t, i) {
                    var o = APP.data.current_card ? {
                        parent_element_id: APP.data.current_card.id,
                        parent_element_type: APP.data.current_card.element_type
                    } : null;
                    this.trigger("request", this),
                    this.get("element_id") ? a().ajax({
                        url: "/private/notes/edit2.php".concat(o ? "?".concat(a().param(o)) : ""),
                        data: this._getSyncData(e),
                        dataType: "json",
                        type: "POST"
                    }).always(r().bind((function() {
                        this._pending = !1
                    }
                    ), this)).done(r().bind((function(e) {
                        if ("ok" === e.status ? (this._updateModel(e),
                        n.success && n.success(),
                        t({
                            status: 1
                        })) : i({
                            status: 0,
                            response: e
                        }),
                        (0,
                        m.isFeatureAvailable)("is_customization_for_global")) {
                            var r = "task-event-sent"
                              , o = "other";
                            if (h.storeWithExpiration.get(r))
                                return;
                            "leads" === APP.data.current_entity && (o = "Lead card");
                            var a = f()().add(1, "days").startOf("day").diff(f()());
                            (0,
                            y.kommoLogAmplitude)("taskSet", {
                                "Task source": o
                            }),
                            h.storeWithExpiration.set(r, "Y", a)
                        }
                    }
                    ), this)).fail((function() {
                        i({
                            status: 0
                        })
                    }
                    )) : (this._pending = !1,
                    this.get("id") || this.set("id", "".concat((0,
                    h.randHex)(), "-").concat((0,
                    h.randHex)())),
                    n.success && n.success(),
                    t())
                }
                ), this))),
                this._loading
            }
        });
        var k = "../build/transpiled/interface/notes/model";
        window.define(k, (function() {
            var e = "undefined"
              , n = typeof t === e ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === e ? typeof module === e ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : t;
            return n && n.default || n
        }
        )),
        window.require([k])
    }
    ,
    701893: (e, t, n) => {
        n.r(t),
        n.d(t, {
            default: () => a
        });
        var i = n(55188)
          , r = n.n(i)
          , o = n(828235);
        const a = r().extend({}, o.default, {
            _getSyncData: function(e) {
                var t = o.default._getSyncData.apply(this, arguments);
                if ("create" === e) {
                    var n = r().propertyOf(this.collection)(["element_info", "catalog_id"]) || 0;
                    t.CATALOG_ID = this.get("catalog_id") || n
                }
                return t
            }
        });
        var s = "../build/transpiled/interface/notes/models/mixins/catalog_element_note";
        window.define(s, (function() {
            var e = "undefined"
              , n = typeof t === e ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === e ? typeof module === e ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : t;
            return n && n.default || n
        }
        )),
        window.require([s])
    }
    ,
    828235: (e, t, n) => {
        n.r(t),
        n.d(t, {
            default: () => u
        });
        var i = n(55188)
          , r = n.n(i)
          , o = n(161320)
          , a = n.n(o)
          , s = n(661533);
        const u = {
            _tempTemplate: r().template('<% if (data && data.text) { %><div id="note_temp_<%= id %>"><input type="hidden" value="<%= date_create %>" name="comments[<%= id %>][DATE_CREATE]" ><input type="hidden" value="<%= created_by %>" name="comments[<%= id %>][CREATED_BY]" ><textarea class="hidden" name="comments[<%= id %>][body]"><%= data.text %></textarea><input type="hidden" value="<%= data.params.link %>" name="comments[<%= id %>][ATTACHEMENT]" ></div><% } %>'),
            _updateModel: function(e) {
                e.note && e.note.id && (this.set("id", e.note.id),
                this.id = e.note.id)
            },
            _getSyncData: function(e) {
                var t = r().propertyOf(this.get("data"))("params") || {}
                  , n = this.get("note_id") || this.get("id");
                switch (e) {
                case "create":
                    return r().extend({
                        DATE_CREATE: this.get("date_create"),
                        ACTION: "ADD_NOTE",
                        BODY: this.get("data").text,
                        ELEMENT_ID: this.get("element_id"),
                        ELEMENT_TYPE: this.get("element_type")
                    }, t.drive ? t.drive : {
                        ATTACH: t.link
                    }, this.get("msec_created_at") > 0 ? {
                        msec_created_at: this.get("msec_created_at")
                    } : {});
                case "update":
                    return {
                        ID: parseInt(n),
                        ACTION: "EDIT_NOTE",
                        BODY: this.get("data").text
                    };
                case "delete":
                    return {
                        ID: parseInt(n),
                        ACTION: "NOTE_DELETE"
                    }
                }
            },
            pin: function() {
                var e = this.get("note_id") || this.get("id");
                return s.ajax({
                    url: "/ajax/v3/notes/".concat(e),
                    type: "patch",
                    contentType: "application/json; charset=utf-8",
                    data: JSON.stringify({
                        pinned: this.get("pinned")
                    })
                })
            },
            _generateEmpty: function() {
                return {
                    type: APP.note_types.common,
                    editable: !0,
                    deletable: !1,
                    date_create: a()().unix(),
                    data: {
                        text: "",
                        params: {}
                    },
                    created_by: (APP.constant("user") || {}).id,
                    object_type: {
                        code: "notes",
                        id: 5
                    }
                }
            }
        };
        var l = "../build/transpiled/interface/notes/models/mixins/note";
        window.define(l, (function() {
            var e = "undefined"
              , n = typeof t === e ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === e ? typeof module === e ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : t;
            return n && n.default || n
        }
        )),
        window.require([l])
    }
    ,
    83646: (e, t, n) => {
        n.r(t),
        n.d(t, {
            default: () => o
        });
        var i = n(55188)
          , r = n.n(i);
        const o = {
            _tempTemplate: r().template('<div id="note_temp_<%= id %>"><input type="hidden" value="" name="comments[<%= id %>][DATE_CREATE]"><input type="hidden" value="<%= created_by %>" name="comments[<%= id %>][CREATED_BY]"><textarea class="hidden" name="comments[<%= id %>][body]"><%= data.text %></textarea><input type="hidden" value="<%= responsible_user %>" name="comments[<%= id %>][MAIN_USER]" /><input type="hidden" value="<%= type %>" name="comments[<%= id %>][TASK_TYPE]" /><input type="hidden" value="<%= complete_till %>" name="comments[<%= id %>][END_DATE]" /><input type="hidden" value="<%= duration %>" name="comments[<%= id %>][DURATION]" /></div>'),
            _updateModel: function(e) {
                e.task && (e.task.id && this.set("id", e.task.id),
                e.task.date && this.set("complete_till", e.task.date),
                e.task.result_id && this.set("result_id", e.task.result_id))
            },
            _getSyncData: function(e) {
                switch (e) {
                case "create":
                    return {
                        ACTION: "ADD_TASK",
                        BODY: this.get("data").text,
                        MAIN_USER: this.get("responsible_user_id"),
                        TASK_TYPE: this.get("type"),
                        END_DATE: this.get("complete_till"),
                        DISABLE_WEBHOOKS: "N",
                        ELEMENT_ID: this.get("element_id"),
                        ELEMENT_TYPE: this.get("element_type"),
                        DURATION: this.get("duration")
                    };
                case "update":
                    return {
                        ID: parseInt(this.get("id")),
                        ACTION: "EDIT_TASK",
                        BODY: this.get("data").text,
                        MAIN_USER: this.get("responsible_user_id"),
                        TASK_TYPE: this.get("type"),
                        END_DATE: this.get("complete_till"),
                        MAIN_USER_CHANGED: this.get("responsible_user_id"),
                        ELEMENT_ID: this.get("element_id"),
                        ELEMENT_TYPE: this.get("element_type"),
                        DURATION: this.get("duration")
                    };
                case "delete":
                    return {
                        ID: parseInt(this.get("id")),
                        ACTION: "TASK_DELETE",
                        ELEMENT_ID: this.get("element_id"),
                        ELEMENT_TYPE: this.get("element_type")
                    };
                case "complete":
                    return {
                        ID: parseInt(this.get("id")),
                        ACTION: "COMPLETE_TASK",
                        result: this.get("result_text"),
                        ELEMENT_ID: this.get("element_id"),
                        ELEMENT_TYPE: this.get("element_type")
                    }
                }
            },
            _generateEmpty: function() {
                var e = APP.constant("user") || {};
                return {
                    type: 1,
                    editable: !0,
                    deletable: !1,
                    data: {
                        text: APP.lang.tasks_follow_up,
                        params: {}
                    },
                    responsible_user_id: e.id,
                    created_by: e.id,
                    object_type: {
                        code: "tasks",
                        id: 4
                    }
                }
            },
            _getResult: function() {
                return this.get("result_note") && this.get("result_note").get("data") ? this.get("result_note") : this.get("status") && this.collection ? this.collection.getOriginCollection(this).tasks_results.findWhere({
                    element_id: this.id
                }) : void 0
            },
            complete: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return this.sync("complete", this, {
                    success: r().bind((function() {
                        e.silent || this.trigger("sync", this)
                    }
                    ), this)
                })
            },
            _setModelResult: function(e) {
                var t = this._getResult()
                  , n = "update"
                  , i = {
                    element_id: this.id,
                    is_new: !0,
                    object_type: {
                        id: 5,
                        code: "notes"
                    },
                    type: APP.note_types.task_result
                }
                  , o = this.get("result_id")
                  , a = r().propertyOf(this.get("result"))("data");
                return t || (o && (i.id = o),
                t = this.collection.getOriginCollection(this).tasks_results.add(i),
                n = "create"),
                t.set("data", r().extend(t.get("data"), {
                    text: e
                })),
                a && (a.text = e,
                this.set("result", r().extend(this.get("result"), a))),
                {
                    model: t,
                    action: n
                }
            },
            result: function(e) {
                var t = this._setModelResult(e);
                return t.model.sync(t.action, this, {
                    success: r().bind((function() {
                        this.trigger("sync", this)
                    }
                    ), this)
                })
            },
            resultNotSync: function(e) {
                this._setModelResult(e),
                this.trigger("sync", this)
            }
        };
        var a = "../build/transpiled/interface/notes/models/mixins/task";
        window.define(a, (function() {
            var e = "undefined"
              , n = typeof t === e ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === e ? typeof module === e ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : t;
            return n && n.default || n
        }
        )),
        window.require([a])
    }
    ,
    946754: (e, t, n) => {
        n.r(t),
        n.d(t, {
            default: () => o
        });
        var i = n(161320)
          , r = n.n(i);
        const o = {
            _updateModel: function(e) {
                e.note && e.note.id && this.set("id", e.note.id)
            },
            _getSyncData: function(e) {
                switch (e) {
                case "create":
                    return {
                        ACTION: "ADD_NOTE",
                        NOTE_TYPE: this.get("type"),
                        BODY: this.get("data").text,
                        ELEMENT_ID: this.get("element_id"),
                        ELEMENT_TYPE: 4
                    };
                case "update":
                    return {
                        ID: parseInt(this.get("id")),
                        ACTION: "EDIT_NOTE",
                        NOTE_TYPE: this.get("type"),
                        BODY: this.get("data").text,
                        ELEMENT_TYPE: 4
                    }
                }
            },
            _generateEmpty: function() {
                var e = APP.constant("user") || {};
                return {
                    created_by: e.id,
                    data: {
                        text: "",
                        params: {}
                    },
                    date_create: r()().unix(),
                    deletable: !0,
                    editable: !0,
                    element_type: 4,
                    responsible_user_id: e.id,
                    type: 13,
                    object_type: {
                        code: "notes",
                        id: 5
                    }
                }
            }
        };
        var a = "../build/transpiled/interface/notes/models/mixins/task_result";
        window.define(a, (function() {
            var e = "undefined"
              , n = typeof t === e ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === e ? typeof module === e ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : t;
            return n && n.default || n
        }
        )),
        window.require([a])
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
        e._sentryDebugIds[t] = "fa232c91-3985-4e3c-a6a9-e25b02f10009",
        e._sentryDebugIdIdentifier = "sentry-dbid-fa232c91-3985-4e3c-a6a9-e25b02f10009")
    } catch (e) {}
}();
//# sourceMappingURL=79985.fd32810e9396306a7913.js.map
