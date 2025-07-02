"use strict";
(window.webpackChunk = window.webpackChunk || []).push([[37881], {
    337881: (e, t, n) => {
        n.r(t),
        n.d(t, {
            default: () => u
        });
        var o = n(661533)
          , a = n.n(o)
          , i = n(55188)
          , d = n.n(i)
          , r = n(161320)
          , l = n.n(r)
          , c = n(810427)
          , s = n.n(c)
          , f = n(577486);
        const u = s().extend({
            account: APP.constant("account"),
            user: APP.constant("user"),
            show_message: function(e) {
                var t = {
                    body: {
                        icon: {
                            robot: "info",
                            value: "/frontend/images/interface/inbox/mesage_bot_avatar.png"
                        },
                        title: e.header,
                        rows: [{
                            style: "default",
                            text: e.text || e.message
                        }]
                    },
                    updated_at: e.date || Math.ceil(+new Date / 1e3)
                };
                e.icon && (t.body.icon = {
                    value: e.icon
                }),
                APP.inbox.showNotification(t)
            },
            show_message_error: function(e) {
                var t = {
                    body: {
                        icon: {
                            robot: "error",
                            value: "/frontend/images/interface/inbox/error_mesage_bot_avatar.png"
                        },
                        title: e.header,
                        rows: [{
                            style: "default",
                            text: e.text
                        }]
                    },
                    updated_at: e.date || Math.ceil(+new Date / 1e3)
                };
                e.link && (t.body.actions = {
                    click: {
                        url: e.link
                    }
                }),
                APP.inbox.showNotification(t)
            },
            show_notification: function(e) {
                var t = {
                    body: {
                        icon: {
                            robot: "info",
                            value: "/frontend/images/interface/inbox/mesage_bot_avatar.png"
                        },
                        title: e.text.header,
                        rows: [{
                            style: "default",
                            text: e.text.text
                        }]
                    },
                    updated_at: e.date || Math.ceil(+new Date / 1e3)
                };
                switch (e.type) {
                case "call":
                    t.body.icon = {
                        call: !0,
                        value: "/frontend/images/interface/inbox/notifications_call.svg"
                    };
                    break;
                case "error":
                    t.body.icon = {
                        robot: "error",
                        value: "/frontend/images/interface/inbox/mesage_bot_avatar.png"
                    }
                }
                APP.inbox.showNotification(t)
            },
            add: function(e, t) {
                void 0 === t && (t = {}),
                a().post("/ajax/v1/inbox/add/", {
                    request: e
                }).done((function() {
                    "function" == typeof t.done && t.done()
                }
                )).fail((function() {
                    "function" == typeof t.fail && t.fail()
                }
                )).always((function() {
                    "function" == typeof t.always && t.always()
                }
                ))
            },
            add_error: function(e, t) {
                void 0 === e.date && (e.date = Math.ceil(+new Date / 1e3));
                var n = {
                    date: e.date,
                    type: "error",
                    message: e.text,
                    header: e.header,
                    link: e.link || null
                };
                this.add(n, t)
            },
            add_call: function(e, t) {
                var n = e.text
                  , o = new f.UnsafeRegExp("(.*href=.*[?&]phone=)(.*?)([&'\"].*)","g").exec(e.text);
                o && (n = o[1] + encodeURIComponent(o[2]) + o[3]),
                e.header = e.header || "",
                void 0 === e.date && (e.date = Math.ceil(+new Date / 1e3)),
                e.from = e.from || "",
                d().isUndefined(e.duration) || (e.duration *= 1e3,
                e.duration = l().utc(e.duration).format("mm:ss") || ""),
                e.link = e.link || "",
                e.to = e.to || "",
                d().isUndefined(e.element) ? e.element = {
                    id: "",
                    type: "",
                    name: ""
                } : (e.element.id = e.element.id || "",
                e.element.type = e.element.type || "",
                e.element.name = e.element.name || ""),
                e.click_link = e.click_link || "",
                e.phone && (e.title = e.phone,
                delete e.phone);
                var a = {
                    header: e.header,
                    to: e.to,
                    from: e.from,
                    duration: e.duration,
                    link: e.link,
                    user: APP.constant("user").id,
                    date: e.date,
                    type: "call",
                    message: n,
                    element: e.element,
                    click_link: e.click_link
                };
                void 0 !== e.id && (a.id = e.id),
                this.add(a, t)
            },
            togglePanelNotification: d().noop,
            checkHasScroll: d().noop,
            check_notifications_popups: d().noop,
            check_popups_height: d().noop,
            refresh: d().noop,
            receive: d().noop
        });
        var _ = "../build/transpiled/components/base/notifications";
        window.define(_, (function() {
            var e = "undefined"
              , n = typeof t === e ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === e ? typeof module === e ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : t;
            return n && n.default || n
        }
        )),
        window.require([_])
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
        e._sentryDebugIds[t] = "98bb963c-ddb7-4110-9f9d-47d4166dfc51",
        e._sentryDebugIdIdentifier = "sentry-dbid-98bb963c-ddb7-4110-9f9d-47d4166dfc51")
    } catch (e) {}
}();
//# sourceMappingURL=37881.940d2a4b9f3f89701ac0.js.map
