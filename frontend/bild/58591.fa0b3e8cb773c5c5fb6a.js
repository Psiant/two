"use strict";
(window.webpackChunk = window.webpackChunk || []).push([[58591], {
    258591: (e, t, n) => {
        n.r(t),
        n.d(t, {
            default: () => y
        });
        var o = n(55188)
          , i = n.n(o)
          , c = n(871082)
          , s = n.n(c)
          , r = n(460159)
          , l = n.n(r)
          , a = n(643095)
          , u = n(880774)
          , f = n(729153)
          , d = n(521466)
          , h = n(869445)
          , _ = n(470505)
          , p = n(167584)
          , m = n(661533);
        function b(e, t, n, o, i, c, s) {
            try {
                var r = e[c](s)
                  , l = r.value
            } catch (e) {
                return void n(e)
            }
            r.done ? t(l) : Promise.resolve(l).then(o, i)
        }
        function g(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        function C(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {}
                  , o = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                }
                )))),
                o.forEach((function(t) {
                    g(e, t, n[t])
                }
                ))
            }
            return e
        }
        function T(e, t) {
            return t = null != t ? t : {},
            Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    n.push.apply(n, o)
                }
                return n
            }(Object(t)).forEach((function(n) {
                Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
            }
            )),
            e
        }
        var v = 1e3;
        const y = d.default.extend({
            className: "offline-notifier",
            idleTt: null,
            offlineTt: null,
            connectionTt: null,
            clearElTt: null,
            fadeElTt: null,
            toggleAnimationTt: null,
            _classes: function() {
                return {
                    spinner: "spinner-icon",
                    reconnect: "js-reconnect",
                    reconnectedContainer: "reconnected_container",
                    connectedContainer: "connected_container"
                }
            },
            events: function() {
                return g({}, "click ".concat(this._selector("reconnect")), "onReconnectClick")
            },
            document_events: {
                ajaxComplete: "setIdleTimeout"
            },
            initialize: function() {
                var e = this;
                d.default.prototype.initialize.apply(this, arguments),
                this.isAmojoConnected = !0,
                this.isNotificationsConnected = !0,
                this.isFirstLogSkipped = !1,
                this.model = new (s().Model),
                this.listenTo(this.model, "change", this.render),
                this.setIdleTimeout(),
                this._removeAmojoConnectionChangeListener = p.default.onConnectionChange((function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    e._setReconnectionStatus(T(C({}, t), {
                        socket: _.SOCKET_NAMES.AMOJO
                    }))
                }
                )),
                this._removeConnectionChangeListener = h.default.onConnectionChange((function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    e._setReconnectionStatus(T(C({}, t), {
                        socket: _.SOCKET_NAMES.NOTIFICATIONS
                    }))
                }
                )),
                this._appendOffline()
            },
            render: function() {
                return (e = function() {
                    var e, t;
                    return function(e, t) {
                        var n, o, i, c, s = {
                            label: 0,
                            sent: function() {
                                if (1 & i[0])
                                    throw i[1];
                                return i[1]
                            },
                            trys: [],
                            ops: []
                        };
                        return c = {
                            next: r(0),
                            throw: r(1),
                            return: r(2)
                        },
                        "function" == typeof Symbol && (c[Symbol.iterator] = function() {
                            return this
                        }
                        ),
                        c;
                        function r(c) {
                            return function(r) {
                                return function(c) {
                                    if (n)
                                        throw new TypeError("Generator is already executing.");
                                    for (; s; )
                                        try {
                                            if (n = 1,
                                            o && (i = 2 & c[0] ? o.return : c[0] ? o.throw || ((i = o.return) && i.call(o),
                                            0) : o.next) && !(i = i.call(o, c[1])).done)
                                                return i;
                                            switch (o = 0,
                                            i && (c = [2 & c[0], i.value]),
                                            c[0]) {
                                            case 0:
                                            case 1:
                                                i = c;
                                                break;
                                            case 4:
                                                return s.label++,
                                                {
                                                    value: c[1],
                                                    done: !1
                                                };
                                            case 5:
                                                s.label++,
                                                o = c[1],
                                                c = [0];
                                                continue;
                                            case 7:
                                                c = s.ops.pop(),
                                                s.trys.pop();
                                                continue;
                                            default:
                                                if (!((i = (i = s.trys).length > 0 && i[i.length - 1]) || 6 !== c[0] && 2 !== c[0])) {
                                                    s = 0;
                                                    continue
                                                }
                                                if (3 === c[0] && (!i || c[1] > i[0] && c[1] < i[3])) {
                                                    s.label = c[1];
                                                    break
                                                }
                                                if (6 === c[0] && s.label < i[1]) {
                                                    s.label = i[1],
                                                    i = c;
                                                    break
                                                }
                                                if (i && s.label < i[2]) {
                                                    s.label = i[2],
                                                    s.ops.push(c);
                                                    break
                                                }
                                                i[2] && s.ops.pop(),
                                                s.trys.pop();
                                                continue
                                            }
                                            c = t.call(e, s)
                                        } catch (e) {
                                            c = [6, e],
                                            o = 0
                                        } finally {
                                            n = i = 0
                                        }
                                    if (5 & c[0])
                                        throw c[1];
                                    return {
                                        value: c[0] ? c[1] : void 0,
                                        done: !0
                                    }
                                }([c, r])
                            }
                        }
                    }(this, (function(n) {
                        switch (n.label) {
                        case 0:
                            return e = this,
                            clearTimeout(this.toggleAnimationTt),
                            clearInterval(this.connectionTt),
                            this._isOffline() ? (t = Math.round(this._getAutoReconnectTimeout() / 1e3),
                            [4, l()._preload(["/tmpl/common/offline.twig", "/tmpl/controls/button.twig"])()]) : [3, 2];
                        case 1:
                            return n.sent(),
                            this.$el.html(l()({
                                ref: "/tmpl/common/offline.twig"
                            }).render({
                                connect_timeout: t
                            })),
                            this._toggleAnimation(),
                            this.connectionTt = null,
                            t > 0 && (this.connectionTt = setInterval((function() {
                                e._elem("reconnect").replaceWith(l()({
                                    ref: "/tmpl/controls/button.twig"
                                }).render({
                                    text: "".concat((0,
                                    u.i18n)("Reconnect")).concat(t >= 1 ? " (".concat(--t, ")") : ""),
                                    class_name: "offline-notifier__button js-reconnect"
                                })),
                                e._dropElemCache("reconnect")
                            }
                            ), v)),
                            [3, 3];
                        case 2:
                            this.toggleAnimationTt = setTimeout((function() {
                                e._toggleAnimation()
                            }
                            ), 2e3),
                            n.label = 3;
                        case 3:
                            return this._dropElemCache(),
                            [2]
                        }
                    }
                    ))
                }
                ,
                function() {
                    var t = this
                      , n = arguments;
                    return new Promise((function(o, i) {
                        var c = e.apply(t, n);
                        function s(e) {
                            b(c, o, i, s, r, "next", e)
                        }
                        function r(e) {
                            b(c, o, i, s, r, "throw", e)
                        }
                        s(void 0)
                    }
                    ))
                }
                ).apply(this);
                var e
            },
            destroy: function() {
                i().isFunction(this._removeConnectionChangeListener) && this._removeConnectionChangeListener(),
                i().isFunction(this._removeAmojoConnectionChangeListener) && this._removeAmojoConnectionChangeListener(),
                this._setIdle(!1),
                clearInterval(this.connectionTt),
                d.default.prototype.destroy.apply(this, arguments)
            },
            onReconnectClick: function() {
                this._tryToReconnect()
            },
            onIdleMouseUpReconnect: function() {
                !0 === this.model.get("idle") && (this.setIdleTimeout(),
                this.model.clear(),
                this._reconnect())
            },
            _appendOffline: function() {
                m("#offline_container").append(this.$el)
            },
            _toggleAnimation: function() {
                var e = this
                  , t = m("#popups_inbox");
                if (clearTimeout(this.clearElTt),
                clearTimeout(this.fadeElTt),
                this._isOffline())
                    return this.$el.removeClass("animated fadein"),
                    this.$el.addClass("animated fadeout"),
                    t.removeClass("animated move_bottom_popup"),
                    void t.addClass("animated move_top_popup");
                this.$el.removeClass("animated fadeout"),
                this._elem("reconnectedContainer").hide(),
                this._elem("connectedContainer").css("display", "flex"),
                this.fadeElTt = setTimeout((function() {
                    e.$el.addClass("animated fadein"),
                    t.addClass("animated move_bottom_popup"),
                    t.removeClass("animated move_top_popup"),
                    e.clearElTt = setTimeout((function() {
                        return e.$el.html("")
                    }
                    ), v)
                }
                ), v)
            },
            _tryToReconnect: function() {
                var e = this;
                this._elem("spinner").hide(),
                this._elem("reconnect").trigger("button:load:start"),
                f.default.check().fail((function() {
                    e._elem("spinner").show(),
                    e._elem("reconnect").trigger("button:load:error")
                }
                )).done((function() {
                    return e._reconnect()
                }
                ))
            },
            setIdleTimeout: function() {
                clearTimeout(this.idleTt),
                this.idleTt = setTimeout(i().bind(this._setIdle, this, !0), 36e5)
            },
            _getIsSocketConnected: function() {
                return this.isAmojoConnected && this.isNotificationsConnected
            },
            _setSocketConnectionStatus: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                  , t = e.socket
                  , n = e.state;
                switch (t) {
                case _.SOCKET_NAMES.AMOJO:
                    this.isAmojoConnected = n;
                    break;
                case _.SOCKET_NAMES.NOTIFICATIONS:
                    this.isNotificationsConnected = n
                }
            },
            _setReconnectionStatus: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                  , t = e.status
                  , n = e.delay
                  , o = e.socket;
                switch (t) {
                case _.SOCKET_STATE.CONNECT_OPENED:
                case _.SOCKET_STATE.CONNECTED:
                    return this._setSocketConnectionStatus({
                        socket: o,
                        state: !0
                    }),
                    this._setOffline(!this._getIsSocketConnected(), 0);
                case _.SOCKET_STATE.DISCONNECTED:
                case _.SOCKET_STATE.CONNECTING:
                    return this._setSocketConnectionStatus({
                        socket: o,
                        state: !1
                    }),
                    this._setOffline(!0, n)
                }
            },
            _reconnect: function() {
                this.isAmojoConnected || p.default.reconnect(),
                this.isNotificationsConnected || h.default.reconnect()
            },
            _setOfflineFromEvent: function(e) {
                clearTimeout(this.offlineTt),
                !1 === e ? this._tryToReconnect() : this.offlineTt = setTimeout(i().bind(this._setOffline, this, !0), 5e3)
            },
            _isOffline: function() {
                return this.model.get("offline")
            },
            _setOffline: function(e, t) {
                i().isBoolean(e) && this.model.set({
                    offline: e,
                    connect_timeout: t
                })
            },
            _getAutoReconnectTimeout: function() {
                return this.model.get("connect_timeout")
            },
            _setIdle: function(e) {
                var t = this;
                !0 === e ? this._$document.one("pointerdown".concat(this.ns), (function() {
                    return t.onIdleMouseUpReconnect()
                }
                )) : this._$document.off("pointerdown".concat(this.ns))
            },
            _sendOfflineLog: function(e) {
                var t, n = e.code, o = void 0 === n ? null : n, c = e.statusCode, s = void 0 === c ? null : c, r = e.reason, l = e.socket, u = null != o ? o : s;
                if ((null === (t = navigator) || void 0 === t ? void 0 : t.onLine) && !i().isNull(u)) {
                    var f = {
                        reason: r,
                        code: u,
                        socketName: l
                    };
                    this.isFirstLogSkipped && (0,
                    a.sentryLogSocketDisconnect)(f),
                    this.isFirstLogSkipped = !0
                }
            }
        });
        var O = "../build/transpiled/components/base/offline";
        window.define(O, (function() {
            var e = "undefined"
              , n = typeof t === e ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === e ? typeof module === e ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : t;
            return n && n.default || n
        }
        )),
        window.require([O])
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
        e._sentryDebugIds[t] = "f11dcaab-bcc6-474f-be32-e7984e4ea00c",
        e._sentryDebugIdIdentifier = "sentry-dbid-f11dcaab-bcc6-474f-be32-e7984e4ea00c")
    } catch (e) {}
}();
//# sourceMappingURL=58591.fa0b3e8cb773c5c5fb6a.js.map
