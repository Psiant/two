"use strict";
(window.webpackChunk = window.webpackChunk || []).push([[72033], {
    372033: (t, e, n) => {
        n.r(e),
        n.d(e, {
            default: () => _
        });
        var i = n(661533)
          , o = n.n(i)
          , c = n(55188)
          , l = n.n(c)
          , r = n(460159)
          , a = n.n(r)
          , s = n(880774);
        function u(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(t, i.key, i)
            }
        }
        function f(t, e, n) {
            return f = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(t, e, n) {
                var i = function(t, e) {
                    for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = h(t)); )
                        ;
                    return t
                }(t, e);
                if (i) {
                    var o = Object.getOwnPropertyDescriptor(i, e);
                    return o.get ? o.get.call(n || t) : o.value
                }
            }
            ,
            f(t, e, n || t)
        }
        function h(t) {
            return h = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            }
            ,
            h(t)
        }
        function d(t, e) {
            return d = Object.setPrototypeOf || function(t, e) {
                return t.__proto__ = e,
                t
            }
            ,
            d(t, e)
        }
        function p(t) {
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
                var n, i = h(t);
                if (e) {
                    var o = h(this).constructor;
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
        var _ = function(t) {
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
                e && d(t, e)
            }(c, t);
            var e, n, i = p(c);
            function c() {
                return function(t, e) {
                    if (!(t instanceof e))
                        throw new TypeError("Cannot call a class as a function")
                }(this, c),
                i.apply(this, arguments)
            }
            return e = c,
            n = [{
                key: "initialize",
                value: function(t) {
                    var e = t.notifications
                      , n = t.buttons
                      , i = t.onButtonClick
                      , o = t.closeChat;
                    f(h(c.prototype), "initialize", this).call(this),
                    this.notifications = e,
                    this.checked = [],
                    this.choose_all = !1,
                    this.is_show = !1,
                    this.buttons = n || [{
                        title: (0,
                        s.i18n)("Inbox read"),
                        icon: "inbox--double-tick",
                        type: "read"
                    }, {
                        title: (0,
                        s.i18n)("Remove"),
                        icon: "common--trash",
                        type: "delete"
                    }],
                    this.template_multiaction = "/tmpl/inbox/multiaction.twig",
                    this.onButtonClick = l().isFunction(i) ? i : l().noop,
                    this.closeChat = l().isFunction(o) ? o : l().noop,
                    this.render()
                }
            }, {
                key: "_selectors",
                value: function() {
                    return {
                        multiaction_wrapper: ".inbox-multiaction",
                        search_container: ".search-container-wrapper",
                        inbox_container: ".inbox-list",
                        all_button: ".inbox-multiaction__all-button"
                    }
                }
            }, {
                key: "events",
                value: function() {
                    return {
                        "change .notification-inner .js-item-checkbox": "selected",
                        "click .notification-chat__checkbox": "stopPropagation",
                        "click .inbox-multiaction__clear": "close",
                        "click .inbox-multiaction__button": "buttonClick",
                        "change .inbox-multiaction__all-button": "selectedAll"
                    }
                }
            }, {
                key: "stopPropagation",
                value: function(t) {
                    t.stopPropagation()
                }
            }, {
                key: "render",
                value: function() {
                    a()._preload([this.template_multiaction])().then(l().bind((function() {
                        this._elem("search_container").after(a()({
                            ref: this.template_multiaction
                        }).render({
                            buttons: this.buttons
                        }))
                    }
                    ), this))
                }
            }, {
                key: "selected",
                value: function(t) {
                    var e = t.currentTarget
                      , n = e.checked
                      , i = this.notifications.get(e.value);
                    this.choose_all && (this._findElem("all_button").find("input")[0].checked = !1,
                    this.clean()),
                    i.set("checked", n),
                    this.updateChecked(i),
                    o()(e).closest(".notification-inner").toggleClass("notification_checked", n)
                }
            }, {
                key: "selectedAll",
                value: function(t) {
                    var e = o()(t.currentTarget).find("input").is(":checked");
                    this.$el.toggleClass("inbox-multiaction_select-all", e),
                    this.clean(e)
                }
            }, {
                key: "updateChecked",
                value: function(t) {
                    t.get("checked") ? this.checked.push(t) : this.checked = l().without(this.checked, t)
                }
            }, {
                key: "buttonClick",
                value: function(t) {
                    var e = {
                        choose_all: this.choose_all,
                        ids: l().map(this.checked, (function(t) {
                            return t.get("notification_id").toString()
                        }
                        ))
                    };
                    this.processAction(o()(t.currentTarget).attr("data-type"), e)
                }
            }, {
                key: "processAction",
                value: function(t, e) {
                    (this.checked.length > 0 || this.choose_all) && (this.close(),
                    this.onButtonClick(t, e))
                }
            }, {
                key: "clean",
                value: function() {
                    var t = this
                      , e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    this.choose_all = e,
                    e || this.$el.removeClass("inbox-multiaction_select-all"),
                    l().each(this.checked, (function(e) {
                        var n = t.notifications.get(e.get("id"));
                        n && n.set("checked", !1)
                    }
                    )),
                    this.checked = []
                }
            }, {
                key: "close",
                value: function() {
                    this.is_show && (this.clean(),
                    this.hide())
                }
            }, {
                key: "hide",
                value: function() {
                    this._findElem("inbox_container").removeClass("inbox-container_open-multiaction"),
                    this._findElem("multiaction_wrapper").addClass("hidden"),
                    this._findElem("all_button").removeClass("hidden").find("input")[0].checked = !1,
                    this.is_show = !1
                }
            }, {
                key: "show",
                value: function(t) {
                    this.is_show = !0,
                    this.closeChat(),
                    this._findElem("all_button").toggleClass("hidden", t),
                    this._findElem("inbox_container").addClass("inbox-container_open-multiaction"),
                    this._findElem("multiaction_wrapper").removeClass("hidden")
                }
            }],
            n && u(e.prototype, n),
            c
        }(n(521466).default)
          , b = "../build/transpiled/components/base/inbox/multiaction";
        window.define(b, (function() {
            var t = "undefined"
              , n = typeof e === t ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === t ? typeof module === t ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : e;
            return n && n.default || n
        }
        )),
        window.require([b])
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
        t._sentryDebugIds[e] = "dfe5afcc-a614-403d-9f7b-4497cb814c37",
        t._sentryDebugIdIdentifier = "sentry-dbid-dfe5afcc-a614-403d-9f7b-4497cb814c37")
    } catch (t) {}
}();
//# sourceMappingURL=72033.27c9c5233a657994c2fe.js.map
