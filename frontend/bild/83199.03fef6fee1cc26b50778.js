"use strict";
(window.webpackChunk = window.webpackChunk || []).push([[83199], {
    228930: (t, e, i) => {
        i.r(e),
        i.d(e, {
            default: () => _
        });
        var n = i(55188)
          , o = i.n(n)
          , s = i(661533)
          , a = i.n(s)
          , h = i(500034)
          , l = i(189967)
          , r = i(168430)
          , d = i(391753)
          , c = i(117209);
        const _ = r.default.extend({
            _classes: function() {
                return o().extend({}, o().result(r.default.prototype, "_classes", {}), {
                    hidden_inbox: "inbox-holder_hidden"
                })
            },
            document_events: function() {
                var t = {};
                return t["click ".concat(this._selector("inbox_toggle_button"))] = "toggle",
                t["click ".concat(this._selector("navigation"))] = "onNavigationClick",
                o().extend({}, o().result(r.default.prototype, "document_events", {}), t)
            },
            initialize: function() {
                for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
                    e[i] = arguments[i];
                r.default.prototype.initialize.apply(this, e),
                this.$el.length && (this.listenTo(c.default, "add", this._onInternalFileNotificationAdd),
                this.listenTo(c.default, "remove", this._onInternalFileNotificationRemove),
                this.listenTo(this.notifications, "reset", this._onNotificationsResetRestoreInternalFileNotifications)),
                this._overlay_ns = ".inbox_overlay",
                this._checkHash()
            },
            _onInternalFileNotificationAdd: function(t) {
                this.notifications.add(t, {
                    merge: !0
                }),
                this.refreshCounter()
            },
            _onInternalFileNotificationRemove: function(t) {
                this.notifications.remove(t),
                this.refreshCounter()
            },
            _onNotificationsResetRestoreInternalFileNotifications: function() {
                var t = this;
                c.default.each((function(e) {
                    t.notifications.add(e, {
                        merge: !0
                    })
                }
                )),
                this.refreshCounter()
            },
            onNavigationClick: function(t) {
                t.ctrlKey || t.metaKey || this.hide()
            },
            _checkHash: function() {
                var t = window.location.hash.split(":");
                if (0 !== t.length && "#inbox" === t[0])
                    switch (!0) {
                    case 3 === t.length && "chat_direct" === t[1]:
                        this.openDirectChat(t[2]);
                        break;
                    case 3 === t.length && "chat_group" === t[1]:
                    default:
                        this.toggle()
                    }
            },
            requestPushPermission: function() {
                for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
                    e[i] = arguments[i];
                APP.constant("main_tour").show || r.default.prototype.requestPushPermission.apply(this, e)
            },
            refreshCounter: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this._last_resp;
                if (t)
                    return this._last_resp = o().clone(t),
                    o().contains(["badge_no_chat_brief", "badge_no_external_chat_brief", "badge_brief"], this.badge_id) && /^\d+$/.test(t[this.badge_id]) && (t[this.badge_id] = (parseInt(t[this.badge_id]) + c.default.length).toString()),
                    r.default.prototype.refreshCounter.call(this, t)
            },
            showNotification: function() {
                for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
                    e[i] = arguments[i];
                if (!this._is_opened)
                    return r.default.prototype.showNotification.apply(this, e)
            },
            toggle: function() {
                this._is_opened ? this.hide() : this.show()
            },
            show: function() {
                var t = a().Deferred();
                return this._is_opened ? (APP.is_touch_device && this._fixBodyPosition(),
                t.resolve()) : (d.default.isHoverMenuVisible() && d.default.closeHoverMenu(),
                this._toggleClass("active", "inbox", !0),
                this._toggleClass("hidden_inbox", this.$el, !1),
                this._toggleClass("hide_animation", "inbox", !1),
                this._toggleClass("show_animation", "inbox", !0),
                this.$el.show(),
                this.showOverlay(),
                this.$el.one("animationend", o().bind((function() {
                    this.showLoading(),
                    this.afterFirstLoad().then(o().bind((function() {
                        APP.is_touch_device && this._fixBodyPosition()
                    }
                    ), this)).then(o().bind((function() {
                        this._onShow(),
                        this.hideLoading(),
                        t.resolve()
                    }
                    ), this)),
                    this.onVirtualizedResize()
                }
                ), this))),
                this._is_opened = !0,
                r.default.prototype.show.apply(this),
                t.promise()
            },
            hide: function() {
                this.destroyQuickActionMenu(),
                this.closeDirectChat().then(o().bind((function() {
                    this._$document.off(this._overlay_ns),
                    this._onHide(),
                    this._toggleClass("active", "inbox", !1),
                    this._toggleClass("hidden_inbox", this.$el, !0),
                    this.$el.hide(),
                    this._toggleClass("hide_animation", "inbox", !0),
                    this._toggleClass("show_animation", "inbox", !1),
                    this.hideOverlay(),
                    r.default.prototype.hide.apply(this),
                    APP.is_touch_device && this._releaseBodyPosition()
                }
                ), this)),
                this._is_opened = !1
            },
            _onShow: function() {
                this.inbox_fully_opened = !0,
                this.autoloadContent(),
                this.readable_ids.length > 0 && this.read({
                    id: this.readable_ids
                }),
                this.onVirtualizedResize()
            },
            _onHide: function() {
                this.inbox_fully_opened = !1,
                this.loader && this.loader.destroy()
            },
            showOverlay: function() {
                this._$body.append(this.$overlay = a()('<div class="default-overlay notifications-overlay" id="notification_overlay"></div>')),
                this.$overlay.trigger("overlay:show"),
                this._$document.one("click".concat(this._overlay_ns), "#notification_overlay", o().bind(this.hide, this)).one("page:changed".concat(this._overlay_ns), o().bind(this.hide, this))
            },
            hideOverlay: function() {
                this.$overlay && this.$overlay.length && this.$overlay.trigger("overlay:hide")
            },
            _fixBodyPosition: function() {
                this._$body.css({
                    position: "fixed"
                })
            },
            _releaseBodyPosition: function() {
                this._$body.css({
                    position: ""
                })
            },
            openChat: function(t) {
                var e = t.id;
                return this._isChatAlreadyOpened(e) ? a().Deferred().resolve() : this.show().then(o().bind((function() {
                    o().delay(o().bind((function() {
                        r.default.prototype.openChat.apply(this, [t])
                    }
                    ), this), 100)
                }
                ), this))
            },
            disableNotificationEntryCheck: function(t) {
                var e = o().propertyOf(t.get("linked_entity"))("type");
                return (!(0,
                l.isChatsInboxEnabled)() || "chat" !== e) && r.default.prototype.disableNotificationEntryCheck.apply(this, arguments)
            },
            excludeTypeEntryCheck: function(t) {
                var e = APP.constant("account").is_chats_inbox_enabled
                  , i = o().propertyOf(t.get("entity"))("type")
                  , n = o().propertyOf(t.get("linked_entity"))("type");
                return e ? e && !(0,
                h.isFeatureAvailable)("global_inbox") ? o().includes(["chat"], n) : o().includes(["chat_group", "chat_direct"], i) || o().includes(["chat", "entity_chat"], n) : r.default.prototype.excludeTypeEntryCheck.apply(this, arguments)
            }
        });
        var f = "../build/transpiled/components/base/inbox/inbox";
        window.define(f, (function() {
            var t = "undefined"
              , i = typeof e === t ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === t ? typeof module === t ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : e;
            return i && i.default || i
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
        var t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}
          , e = (new Error).stack;
        e && (t._sentryDebugIds = t._sentryDebugIds || {},
        t._sentryDebugIds[e] = "5b4eaf13-9398-489b-9b07-f68fc87aeb34",
        t._sentryDebugIdIdentifier = "sentry-dbid-5b4eaf13-9398-489b-9b07-f68fc87aeb34")
    } catch (t) {}
}();
//# sourceMappingURL=83199.03fef6fee1cc26b50778.js.map
