"use strict";
(window.webpackChunk = window.webpackChunk || []).push([[35815], {
    935815: (t, e, n) => {
        n.r(e),
        n.d(e, {
            default: () => v
        });
        var i = n(55188)
          , o = n.n(i)
          , c = n(460159)
          , r = n.n(c)
          , u = n(880774)
          , a = n(340958)
          , s = n(661533);
        function l(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var n = 0, i = new Array(e); n < e; n++)
                i[n] = t[n];
            return i
        }
        function f(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(t, i.key, i)
            }
        }
        function d(t, e, n) {
            return e in t ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = n,
            t
        }
        function _(t, e, n) {
            return _ = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(t, e, n) {
                var i = function(t, e) {
                    for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = y(t)); )
                        ;
                    return t
                }(t, e);
                if (i) {
                    var o = Object.getOwnPropertyDescriptor(i, e);
                    return o.get ? o.get.call(n || t) : o.value
                }
            }
            ,
            _(t, e, n || t)
        }
        function y(t) {
            return y = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            }
            ,
            y(t)
        }
        function p(t, e) {
            return p = Object.setPrototypeOf || function(t, e) {
                return t.__proto__ = e,
                t
            }
            ,
            p(t, e)
        }
        function h(t) {
            return function(t) {
                if (Array.isArray(t))
                    return l(t)
            }(t) || function(t) {
                if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"])
                    return Array.from(t)
            }(t) || function(t, e) {
                if (t) {
                    if ("string" == typeof t)
                        return l(t, e);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    return "Object" === n && t.constructor && (n = t.constructor.name),
                    "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? l(t, e) : void 0
                }
            }(t) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        function b(t) {
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
                var n, i = y(t);
                if (e) {
                    var o = y(this).constructor;
                    n = Reflect.construct(i, arguments, o)
                } else
                    n = i.apply(this, arguments);
                return function(t, e) {
                    return !e || "object" != ((n = e) && "undefined" != typeof Symbol && n.constructor === Symbol ? "symbol" : typeof n) && "function" != typeof e ? function(t) {
                        if (void 0 === t)
                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return t
                    }(t) : e;
                    var n
                }(this, n)
            }
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
                e && p(t, e)
            }(c, t);
            var e, n, i = b(c);
            function c() {
                return function(t, e) {
                    if (!(t instanceof e))
                        throw new TypeError("Cannot call a class as a function")
                }(this, c),
                i.apply(this, arguments)
            }
            return e = c,
            n = [{
                key: "_classes",
                value: function() {
                    return {
                        overlay: "notification-quick-action__overlay",
                        menu: "notification-quick-action__menu",
                        menu_item: "button-input__context-menu__item"
                    }
                }
            }, {
                key: "events",
                value: function() {
                    return {
                        click: "activateQuickActionMenu"
                    }
                }
            }, {
                key: "document_events",
                value: function() {
                    var t;
                    return d(t = {}, "mousewheel ".concat(this._selector("overlay")), "destroy"),
                    d(t, "DOMMouseScroll ".concat(this._selector("overlay")), "destroy"),
                    d(t, "click ".concat(this._selector("menu"), " ").concat(this._selector("menu_item")), "onQuickActionClick"),
                    t
                }
            }, {
                key: "initialize",
                value: function(t) {
                    var e = t.onButtonClick
                      , n = t.onGetQuickActionButtons;
                    this.is_active = !1,
                    this.onButtonClick = o().isFunction(e) ? e : o().noop,
                    this.onGetQuickActionButtons = n,
                    _(y(c.prototype), "initialize", this).apply(this, arguments),
                    this.updateVisibleState(),
                    this.listenTo(this.model, "change", this.updateVisibleState)
                }
            }, {
                key: "destroy",
                value: function() {
                    this.$quick_action_menu && (this._toggleBodyOverlay(!1),
                    this.$quick_action_menu.remove(),
                    this.$quick_action_menu = null),
                    _(y(c.prototype), "destroy", this).apply(this, arguments)
                }
            }, {
                key: "updateVisibleState",
                value: function() {
                    var t = Boolean(this.getQuickActionButtons().length);
                    t ? (this.model.set({
                        is_quick_action_enabled: t
                    }, {
                        silent: !0
                    }),
                    this.$el.show()) : (this.model.set({
                        is_quick_action_enabled: t
                    }, {
                        silent: !0
                    }),
                    this.$el.hide())
                }
            }, {
                key: "activateQuickActionMenu",
                value: function(t) {
                    this.is_active = !0,
                    t.stopPropagation(),
                    t.preventDefault(),
                    this.renderQuickActionMenu(),
                    this._toggleBodyOverlay(this.$quick_action_menu, o().bind((function() {
                        this.destroy()
                    }
                    ), this), {
                        class_name: this._class("overlay")
                    })
                }
            }, {
                key: "getQuickActionButtons",
                value: function() {
                    var t = !APP.constant("account").is_chats_inbox_enabled || !o().contains(["chat_direct"], o().propertyOf(this.model.get("click"))("type"));
                    return o().isFunction(this.onGetQuickActionButtons) ? this.onGetQuickActionButtons() : o().compact([{
                        icon: "inbox--double-tick",
                        text: (0,
                        u.i18n)("Inbox read"),
                        callback: {
                            type: "read",
                            data: {
                                ids: [this.model.get("notification_id")]
                            }
                        }
                    }].concat(h(o().reduce(this.model.get("buttons"), (function(t, e) {
                        var n = e.icon
                          , i = e.title
                          , c = e.event;
                        return !c || o().isEmpty(c) ? t : h(t).concat([{
                            icon: "inbox--".concat(n),
                            text: i,
                            event: c
                        }])
                    }
                    ), [])), [t && {
                        icon: "common--trash",
                        text: (0,
                        u.i18n)("Remove"),
                        callback: {
                            type: "delete",
                            data: {
                                ids: [this.model.get("notification_id")]
                            }
                        }
                    }])).slice(this.model.get("is_read") ? 1 : 0)
                }
            }, {
                key: "renderQuickActionMenu",
                value: function() {
                    this.quick_action_buttons = this.getQuickActionButtons();
                    var t = {
                        context_menu_class_name: this._class("menu"),
                        context_menu: o().map(this.quick_action_buttons, (function(t, e) {
                            var n = t.icon
                              , i = t.text
                              , o = t.type
                              , c = t.event
                              , r = void 0 === c ? null : c;
                            return {
                                svg_icon_absolute: n,
                                class_name: "js-quick-action-".concat(o),
                                id: e,
                                text: i,
                                event: r
                            }
                        }
                        ))
                    };
                    this.$quick_action_menu = s(r()({
                        ref: "/tmpl/controls/button/context_menu.twig"
                    }).render(t)).appendTo("body"),
                    this.locateQuickActionMenu()
                }
            }, {
                key: "onQuickActionClick",
                value: function(t) {
                    var e = t.currentTarget;
                    this.quick_action_buttons || (this.quick_action_buttons = this.getQuickActionButtons());
                    var n = this.quick_action_buttons[e.id]
                      , i = n.event
                      , o = n.callback;
                    i ? this._$document.trigger(i.name, i.data) : o && this.onButtonClick(o.type, o.data),
                    this.destroy()
                }
            }, {
                key: "locateQuickActionMenu",
                value: function() {
                    var t = this.$el[0].getBoundingClientRect()
                      , e = t.y
                      , n = t.x
                      , i = window.innerHeight - this.$quick_action_menu.height() - 15;
                    this.$quick_action_menu.css({
                        top: e + 2 < i ? e + 2 : i,
                        left: n + 1
                    })
                }
            }],
            n && f(e.prototype, n),
            c
        }(a.default)
          , m = "../build/transpiled/components/base/inbox/notification_quick_action";
        window.define(m, (function() {
            var t = "undefined"
              , n = typeof e === t ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === t ? typeof module === t ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : e;
            return n && n.default || n
        }
        )),
        window.require([m])
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
        t._sentryDebugIds[e] = "f8891ca5-5cfb-49a6-8c32-5bf4277c182c",
        t._sentryDebugIdIdentifier = "sentry-dbid-f8891ca5-5cfb-49a6-8c32-5bf4277c182c")
    } catch (t) {}
}();
//# sourceMappingURL=35815.2b41aa92192c13ff04ed.js.map
