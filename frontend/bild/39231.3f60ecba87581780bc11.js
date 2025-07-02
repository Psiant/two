(window.webpackChunk = window.webpackChunk || []).push([[39231], {
    809228: e => {
        e.exports = function e(t, n, r) {
            function o(a, s) {
                if (!n[a]) {
                    if (!t[a]) {
                        if (i)
                            return i(a, !0);
                        var l = new Error("Cannot find module '" + a + "'");
                        throw l.code = "MODULE_NOT_FOUND",
                        l
                    }
                    var c = n[a] = {
                        exports: {}
                    };
                    t[a][0].call(c.exports, (function(e) {
                        return o(t[a][1][e] || e)
                    }
                    ), c, c.exports, e, t, n, r)
                }
                return n[a].exports
            }
            for (var i = void 0, a = 0; a < r.length; a++)
                o(r[a]);
            return o
        }({
            1: [function(e, t, n) {
                var r = e("matches-selector");
                t.exports = function(e, t, n) {
                    for (var o = n ? e : e.parentNode; o && o !== document; ) {
                        if (r(o, t))
                            return o;
                        o = o.parentNode
                    }
                }
            }
            , {
                "matches-selector": 5
            }],
            2: [function(e, t, n) {
                var r = e("closest");
                function o(e, t, n, o) {
                    return function(n) {
                        n.delegateTarget = r(n.target, t, !0),
                        n.delegateTarget && o.call(e, n)
                    }
                }
                t.exports = function(e, t, n, r, i) {
                    var a = o.apply(this, arguments);
                    return e.addEventListener(n, a, i),
                    {
                        destroy: function() {
                            e.removeEventListener(n, a, i)
                        }
                    }
                }
            }
            , {
                closest: 1
            }],
            3: [function(e, t, n) {
                n.node = function(e) {
                    return void 0 !== e && e instanceof HTMLElement && 1 === e.nodeType
                }
                ,
                n.nodeList = function(e) {
                    var t = Object.prototype.toString.call(e);
                    return void 0 !== e && ("[object NodeList]" === t || "[object HTMLCollection]" === t) && "length"in e && (0 === e.length || n.node(e[0]))
                }
                ,
                n.string = function(e) {
                    return "string" == typeof e || e instanceof String
                }
                ,
                n.fn = function(e) {
                    return "[object Function]" === Object.prototype.toString.call(e)
                }
            }
            , {}],
            4: [function(e, t, n) {
                var r = e("./is")
                  , o = e("delegate");
                t.exports = function(e, t, n) {
                    if (!e && !t && !n)
                        throw new Error("Missing required arguments");
                    if (!r.string(t))
                        throw new TypeError("Second argument must be a String");
                    if (!r.fn(n))
                        throw new TypeError("Third argument must be a Function");
                    if (r.node(e))
                        return function(e, t, n) {
                            return e.addEventListener(t, n),
                            {
                                destroy: function() {
                                    e.removeEventListener(t, n)
                                }
                            }
                        }(e, t, n);
                    if (r.nodeList(e))
                        return function(e, t, n) {
                            return Array.prototype.forEach.call(e, (function(e) {
                                e.addEventListener(t, n)
                            }
                            )),
                            {
                                destroy: function() {
                                    Array.prototype.forEach.call(e, (function(e) {
                                        e.removeEventListener(t, n)
                                    }
                                    ))
                                }
                            }
                        }(e, t, n);
                    if (r.string(e))
                        return function(e, t, n) {
                            return o(document.body, e, t, n)
                        }(e, t, n);
                    throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")
                }
            }
            , {
                "./is": 3,
                delegate: 2
            }],
            5: [function(e, t, n) {
                var r = Element.prototype
                  , o = r.matchesSelector || r.webkitMatchesSelector || r.mozMatchesSelector || r.msMatchesSelector || r.oMatchesSelector;
                t.exports = function(e, t) {
                    if (o)
                        return o.call(e, t);
                    for (var n = e.parentNode.querySelectorAll(t), r = 0; r < n.length; ++r)
                        if (n[r] == e)
                            return !0;
                    return !1
                }
            }
            , {}],
            6: [function(e, t, n) {
                t.exports = function(e) {
                    var t;
                    if ("INPUT" === e.nodeName || "TEXTAREA" === e.nodeName)
                        e.focus(),
                        e.setSelectionRange(0, e.value.length),
                        t = e.value;
                    else {
                        e.hasAttribute("contenteditable") && e.focus();
                        var n = window.getSelection()
                          , r = document.createRange();
                        r.selectNodeContents(e),
                        n.removeAllRanges(),
                        n.addRange(r),
                        t = n.toString()
                    }
                    return t
                }
            }
            , {}],
            7: [function(e, t, n) {
                function r() {}
                r.prototype = {
                    on: function(e, t, n) {
                        var r = this.e || (this.e = {});
                        return (r[e] || (r[e] = [])).push({
                            fn: t,
                            ctx: n
                        }),
                        this
                    },
                    once: function(e, t, n) {
                        var r = this;
                        function o() {
                            r.off(e, o),
                            t.apply(n, arguments)
                        }
                        return o._ = t,
                        this.on(e, o, n)
                    },
                    emit: function(e) {
                        for (var t = [].slice.call(arguments, 1), n = ((this.e || (this.e = {}))[e] || []).slice(), r = 0, o = n.length; r < o; r++)
                            n[r].fn.apply(n[r].ctx, t);
                        return this
                    },
                    off: function(e, t) {
                        var n = this.e || (this.e = {})
                          , r = n[e]
                          , o = [];
                        if (r && t)
                            for (var i = 0, a = r.length; i < a; i++)
                                r[i].fn !== t && r[i].fn._ !== t && o.push(r[i]);
                        return o.length ? n[e] = o : delete n[e],
                        this
                    }
                },
                t.exports = r
            }
            , {}],
            8: [function(e, t, n) {
                !function(r, o) {
                    if (void 0 !== n)
                        o(t, e("select"));
                    else {
                        var i = {
                            exports: {}
                        };
                        o(i, r.select),
                        r.clipboardAction = i.exports
                    }
                }(this, (function(e, t) {
                    "use strict";
                    var n, r = (n = t) && n.__esModule ? n : {
                        default: n
                    };
                    var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e
                    }
                    : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
                    }
                    ;
                    var i = function() {
                        function e(e, t) {
                            for (var n = 0; n < t.length; n++) {
                                var r = t[n];
                                r.enumerable = r.enumerable || !1,
                                r.configurable = !0,
                                "value"in r && (r.writable = !0),
                                Object.defineProperty(e, r.key, r)
                            }
                        }
                        return function(t, n, r) {
                            return n && e(t.prototype, n),
                            r && e(t, r),
                            t
                        }
                    }()
                      , a = function() {
                        function e(t) {
                            (function(e, t) {
                                if (!(e instanceof t))
                                    throw new TypeError("Cannot call a class as a function")
                            }
                            )(this, e),
                            this.resolveOptions(t),
                            this.initSelection()
                        }
                        return e.prototype.resolveOptions = function() {
                            var e = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0];
                            this.action = e.action,
                            this.emitter = e.emitter,
                            this.target = e.target,
                            this.text = e.text,
                            this.trigger = e.trigger,
                            this.selectedText = ""
                        }
                        ,
                        e.prototype.initSelection = function() {
                            this.text ? this.selectFake() : this.target && this.selectTarget()
                        }
                        ,
                        e.prototype.selectFake = function() {
                            var e = this
                              , t = "rtl" == document.documentElement.getAttribute("dir");
                            this.removeFake(),
                            this.fakeHandler = document.body.addEventListener("click", (function() {
                                return e.removeFake()
                            }
                            )),
                            this.fakeElem = document.createElement("textarea"),
                            this.fakeElem.style.fontSize = "12pt",
                            this.fakeElem.style.border = "0",
                            this.fakeElem.style.padding = "0",
                            this.fakeElem.style.margin = "0",
                            this.fakeElem.style.position = "fixed",
                            this.fakeElem.style[t ? "right" : "left"] = "-9999px",
                            this.fakeElem.style.top = (window.pageYOffset || document.documentElement.scrollTop) + "px",
                            this.fakeElem.setAttribute("readonly", ""),
                            this.fakeElem.value = this.text,
                            document.body.appendChild(this.fakeElem),
                            this.selectedText = (0,
                            r.default)(this.fakeElem),
                            this.copyText()
                        }
                        ,
                        e.prototype.removeFake = function() {
                            this.fakeHandler && (document.body.removeEventListener("click"),
                            this.fakeHandler = null),
                            this.fakeElem && (document.body.removeChild(this.fakeElem),
                            this.fakeElem = null)
                        }
                        ,
                        e.prototype.selectTarget = function() {
                            this.selectedText = (0,
                            r.default)(this.target),
                            this.copyText()
                        }
                        ,
                        e.prototype.copyText = function() {
                            var e = void 0;
                            try {
                                e = document.execCommand(this.action)
                            } catch (t) {
                                e = !1
                            }
                            this.handleResult(e)
                        }
                        ,
                        e.prototype.handleResult = function(e) {
                            e ? this.emitter.emit("success", {
                                action: this.action,
                                text: this.selectedText,
                                trigger: this.trigger,
                                clearSelection: this.clearSelection.bind(this)
                            }) : this.emitter.emit("error", {
                                action: this.action,
                                trigger: this.trigger,
                                clearSelection: this.clearSelection.bind(this)
                            })
                        }
                        ,
                        e.prototype.clearSelection = function() {
                            this.target && this.target.blur(),
                            window.getSelection().removeAllRanges()
                        }
                        ,
                        e.prototype.destroy = function() {
                            this.removeFake()
                        }
                        ,
                        i(e, [{
                            key: "action",
                            set: function() {
                                var e = arguments.length <= 0 || void 0 === arguments[0] ? "copy" : arguments[0];
                                if (this._action = e,
                                "copy" !== this._action && "cut" !== this._action)
                                    throw new Error('Invalid "action" value, use either "copy" or "cut"')
                            },
                            get: function() {
                                return this._action
                            }
                        }, {
                            key: "target",
                            set: function(e) {
                                if (void 0 !== e) {
                                    if (!e || "object" !== (void 0 === e ? "undefined" : o(e)) || 1 !== e.nodeType)
                                        throw new Error('Invalid "target" value, use a valid Element');
                                    if ("copy" === this.action && e.hasAttribute("disabled"))
                                        throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
                                    if ("cut" === this.action && (e.hasAttribute("readonly") || e.hasAttribute("disabled")))
                                        throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');
                                    this._target = e
                                }
                            },
                            get: function() {
                                return this._target
                            }
                        }]),
                        e
                    }();
                    e.exports = a
                }
                ))
            }
            , {
                select: 6
            }],
            9: [function(e, t, n) {
                !function(r, o) {
                    if (void 0 !== n)
                        o(t, e("./clipboard-action"), e("tiny-emitter"), e("good-listener"));
                    else {
                        var i = {
                            exports: {}
                        };
                        o(i, r.clipboardAction, r.tinyEmitter, r.goodListener),
                        r.clipboard = i.exports
                    }
                }(this, (function(e, t, n, r) {
                    "use strict";
                    var o = s(t)
                      , i = s(n)
                      , a = s(r);
                    function s(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    }
                    var l = function(e) {
                        function t(n, r) {
                            !function(e, t) {
                                if (!(e instanceof t))
                                    throw new TypeError("Cannot call a class as a function")
                            }(this, t);
                            var o = function(e, t) {
                                if (!e)
                                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                return !t || "object" != typeof t && "function" != typeof t ? e : t
                            }(this, e.call(this));
                            return o.resolveOptions(r),
                            o.listenClick(n),
                            o
                        }
                        return function(e, t) {
                            if ("function" != typeof t && null !== t)
                                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                            e.prototype = Object.create(t && t.prototype, {
                                constructor: {
                                    value: e,
                                    enumerable: !1,
                                    writable: !0,
                                    configurable: !0
                                }
                            }),
                            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                        }(t, e),
                        t.prototype.resolveOptions = function() {
                            var e = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0];
                            this.action = "function" == typeof e.action ? e.action : this.defaultAction,
                            this.target = "function" == typeof e.target ? e.target : this.defaultTarget,
                            this.text = "function" == typeof e.text ? e.text : this.defaultText
                        }
                        ,
                        t.prototype.listenClick = function(e) {
                            var t = this;
                            this.listener = (0,
                            a.default)(e, "click", (function(e) {
                                return t.onClick(e)
                            }
                            ))
                        }
                        ,
                        t.prototype.onClick = function(e) {
                            var t = e.delegateTarget || e.currentTarget;
                            this.clipboardAction && (this.clipboardAction = null),
                            this.clipboardAction = new o.default({
                                action: this.action(t),
                                target: this.target(t),
                                text: this.text(t),
                                trigger: t,
                                emitter: this
                            })
                        }
                        ,
                        t.prototype.defaultAction = function(e) {
                            return c("action", e)
                        }
                        ,
                        t.prototype.defaultTarget = function(e) {
                            var t = c("target", e);
                            if (t)
                                return document.querySelector(t)
                        }
                        ,
                        t.prototype.defaultText = function(e) {
                            return c("text", e)
                        }
                        ,
                        t.prototype.destroy = function() {
                            this.listener.destroy(),
                            this.clipboardAction && (this.clipboardAction.destroy(),
                            this.clipboardAction = null)
                        }
                        ,
                        t
                    }(i.default);
                    function c(e, t) {
                        var n = "data-clipboard-" + e;
                        if (t.hasAttribute(n))
                            return t.getAttribute(n)
                    }
                    e.exports = l
                }
                ))
            }
            , {
                "./clipboard-action": 8,
                "good-listener": 4,
                "tiny-emitter": 7
            }]
        }, {}, [9])(9);
        var t = "clipboard";
        window.define(t, (function() {
            var t = "undefined"
              , n = typeof __webpack_exports__ === t ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === t ? typeof e === t ? void 0 : e.exports : __WEBPACK_AMD_DEFINE_RESULT__ : __webpack_exports__;
            return n && n.default || n
        }
        )),
        window.require([t])
    }
    ,
    562584: (e, t, n) => {
        "use strict";
        n.r(t),
        n.d(t, {
            default: () => r
        });
        const r = {
            wrapper: "a1be419f4",
            content: "a68a8ba28",
            "arrow--top": "a3e6dcc0e",
            "arrow--bottom": "a6bb1cf07",
            "arrow--right": "a5a68fc80",
            "arrow--left": "a38565be3",
            picture: "a7084cb71",
            image: "a5fe3cee4",
            title: "a5eb0dcea",
            text: "a55a2b8cc",
            buttons: "bd51a418",
            "close-button": "a3459a3d8"
        }
    }
    ,
    94217: (e, t, n) => {
        "use strict";
        n.r(t),
        n.d(t, {
            default: () => l
        });
        var r, o = n(55188), i = n.n(o), a = n(857098), s = function() {
            (r = new a.default("/api/v1.1")).loadBackendVersion()
        };
        i().extend(s.prototype, {
            linkLead: function(e, t) {
                var n = r.makeUrl("/account_id/mail/leads/link")
                  , o = {
                    lead_id: t,
                    thread_id: e
                };
                return r.request("POST", n, o)
            },
            unlinkLead: function(e) {
                var t = r.makeUrl("/account_id/mail/leads/unlink")
                  , n = {
                    thread_id: e
                };
                return r.request("POST", t, n)
            },
            getAddressesWithoutContact: function(e) {
                var t = r.makeUrl("/account_id/mail/address")
                  , n = {
                    thread_ids: e,
                    type: "without_contact"
                };
                return r.request("GET", t, n)
            },
            linkAddress: function(e, t) {
                var n = r.makeUrl("/account_id/mail/address/link")
                  , o = {
                    id: t,
                    address_id: e
                };
                return r.request("POST", n, o)
            },
            listThreads: function(e, t, n, o) {
                var i = r.makeUrl("/account_id/mail/list")
                  , a = {
                    page: t || 1,
                    folder: e,
                    mailbox_id: n
                };
                return r.request("GET", i, a, {}, o || {})
            },
            restoreThreads: function(e) {
                var t = r.makeUrl("/account_id/mail/threads/restore")
                  , n = {
                    threads: e
                };
                return r.request("POST", t, n)
            },
            deleteThreads: function(e) {
                var t = r.makeUrl("/account_id/mail/threads/delete")
                  , n = i().extend({}, {
                    threads: e
                });
                return r.request("POST", t, n)
            },
            createEntitiesFromThreads: function(e, t, n) {
                var o = r.makeUrl("/account_id/mail/".concat(t))
                  , a = i().extend({}, n, {
                    threads: e
                });
                return r.request("POST", o, a)
            },
            deleteMailbox: function(e) {
                var t = r.makeUrl("/account_id/mail/mailboxes/".concat(e, "/delete"));
                return r.request("POST", t)
            },
            enableMailbox: function(e, t) {
                var n = r.makeUrl("/account_id/mail/mailboxes/".concat(e, "/connect"));
                return r.request("POST", n, t)
            },
            disableMailbox: function(e) {
                var t = r.makeUrl("/account_id/mail/mailboxes/".concat(e, "/disconnect"));
                return r.request("POST", t)
            },
            syncMailbox: function(e) {
                var t = r.makeUrl("/account_id/mail/mailboxes/".concat(e, "/sync"));
                return r.request("POST", t)
            },
            addMailbox: function(e) {
                var t = r.makeUrl("/account_id/mail/mailboxes");
                return r.request("POST", t, e)
            },
            saveMailbox: function(e, t, n) {
                var o = r.makeUrl("/account_id/mail/mailboxes/".concat(e, "?save=").concat(n));
                return r.request("POST", o, t)
            },
            getMailbox: function(e) {
                var t = r.makeUrl("/account_id/mail/mailboxes/".concat(e));
                return r.request("GET", t)
            },
            getMailboxes: function(e) {
                var t = r.makeUrl("/account_id/mail/mailboxes");
                return r.request("GET", t, e)
            },
            getMailboxStatus: function(e) {
                var t = r.makeUrl("/account_id/mail/mailboxes/status")
                  , n = {
                    id: e
                };
                return r.request("GET", t, n)
            },
            getCounters: function() {
                var e = r.makeUrl("/account_id/mail/mailboxes/counters");
                return r.request("GET", e)
            },
            getThread: function(e, t, n) {
                var o = r.makeUrl("/account_id/mail/threads/".concat(e));
                return r.request("GET", o, t || {}, {}, n)
            },
            getMessage: function(e) {
                var t = r.makeUrl("/account_id/mail/messages/".concat(e));
                return r.request("GET", t)
            },
            readThread: function(e, t) {
                var n = r.makeUrl("/account_id/mail/threads/view")
                  , o = {
                    threads: e
                };
                return r.request("POST", n, o, {}, t)
            },
            shareThread: function(e, t) {
                var n = r.makeUrl("/account_id/mail/threads/share")
                  , o = i().extend(t, {
                    threads: e
                });
                return r.request("POST", n, o)
            },
            findSettings: function(e) {
                var t = r.makeUrl("/account_id/mail/settings")
                  , n = {
                    email: e
                };
                return r.request("GET", t, n)
            },
            getThreadReplyData: function(e) {
                var t = r.makeUrl("/account_id/mail/threads/".concat(e, "/reply"));
                return r.request("GET", t)
            },
            composeReply: function(e, t) {
                var n = e ? "threads/".concat(e, "/reply") : "reply"
                  , o = r.makeUrl("/account_id/mail/".concat(n));
                return r.request("POST", o, t)
            },
            composeMailing: function(e) {
                var t = r.makeUrl("/account_id/mail/compose");
                return r.request("POST", t, e)
            },
            getRecipients: function(e) {
                var t = r.makeUrl("/account_id/mail/threads/recipients");
                return r.request("GET", t, e)
            },
            getMailTemplates: function(e) {
                var t = r.makeUrl("/account_id/mail/templates");
                return r.request("GETJSON", t, e)
            },
            createMailTemplate: function(e) {
                var t = r.makeUrl("/account_id/mail/templates");
                return r.request("POST", t, e)
            },
            updateMailTemplate: function(e) {
                var t = r.makeUrl("/account_id/mail/templates/".concat(e.id));
                return r.request("POST", t, e)
            },
            removeMailTemplate: function(e) {
                var t = r.makeUrl("/account_id/mail/templates/".concat(e.id, "/delete"));
                return r.request("POST", t, e)
            },
            updateMailTemplatesSort: function(e) {
                var t = r.makeUrl("/account_id/mail/templates/sort");
                return r.request("POST", t, e)
            }
        });
        const l = new s;
        var c = "../build/transpiled/components/mail/api";
        window.define(c, (function() {
            var e = "undefined"
              , n = typeof t === e ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === e ? typeof module === e ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : t;
            return n && n.default || n
        }
        )),
        window.require([c])
    }
    ,
    857098: (e, t, n) => {
        "use strict";
        n.r(t),
        n.d(t, {
            default: () => d
        });
        var r = n(55188)
          , o = n.n(r)
          , i = n(661533)
          , a = n.n(i)
          , s = n(988050)
          , l = n(729153);
        function c(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++)
                r[n] = e[n];
            return r
        }
        var u = function(e, t) {
            this.base_path = e,
            this.headers = o().extend({
                "X-Requested-With": "XMLHttpRequest"
            }, t || {})
        };
        o().extend(u.prototype, {
            loadBackendVersion: function() {
                var e;
                (e = (0,
                s.get)("amomail_backend")) && (e = JSON.parse(e),
                o().isString(e.backend) && (this.headers["X-App-Api-Backend"] = e.backend),
                this.headers["X-App-Version"] = e.version)
            },
            setBackendVersion: function(e, t) {
                if (o().isUndefined(e) && o().isUndefined(t) || o().isUndefined(t) && "current" === e)
                    return (0,
                    s.set)({
                        name: "amomail_backend",
                        value: "{}",
                        expiredays: -1
                    }),
                    delete this.headers["X-App-Api-Backend"],
                    void delete this.headers["X-App-Version"];
                e = e || "current",
                this.headers["X-App-Version"] = e;
                var n = {
                    backend: null,
                    version: e
                };
                o().isString(t) && (this.headers["X-App-Api-Backend"] = t,
                n.backend = t),
                (0,
                s.set)({
                    name: "amomail_backend",
                    expiredays: 1,
                    value: JSON.stringify(n)
                })
            },
            getParams: function() {
                var e = APP.constant("amomail") || {};
                return {
                    enabled: e.enabled,
                    account_id: APP.constant("account").id,
                    base_url: e.server_base + this.base_path,
                    auth_token: e.auth_token || ""
                }
            },
            getAjaxDefaults: function(e) {
                var t = {
                    xhrFields: {
                        withCredentials: !0
                    },
                    contentType: "application/json; charset=UTF-8"
                };
                return t.headers = o().extend({}, this.headers, e || {}),
                t
            },
            resolveOnCache: function(e, t) {
                var n = a().Deferred()
                  , r = o().bind((function() {
                    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
                        t[r] = arguments[r];
                    n.resolve.apply(this, t)
                }
                ), this)
                  , i = o().bind((function() {
                    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
                        t[r] = arguments[r];
                    n.reject(this, t)
                }
                ), this);
                return e.done((function(e, n, o) {
                    304 === o.status ? t().done(r).fail(i) : r.apply(this, arguments)
                }
                )).fail(i),
                n.promise()
            },
            makeRequest: function() {
                var e = Array.prototype.slice.call(arguments);
                return o().bind((function() {
                    return this.request.apply(this, function(e) {
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
                    }());
                    var t
                }
                ), this)
            },
            checkAccount: function() {
                var e = this.getParams()
                  , t = APP.constant("amomail");
                if (e.enabled || !APP.constant("amomail")) {
                    var n = a().Deferred();
                    return n.resolve(),
                    n.promise()
                }
                var r = "".concat(t.server_base, "/api/v2/register")
                  , i = APP.constant("account")
                  , s = {
                    account_id: i.id,
                    domain: i.subdomain
                }
                  , l = o().extend(this.getAjaxDefaults(), {
                    url: r,
                    data: JSON.stringify(s),
                    type: "POST",
                    dataType: "json"
                })
                  , c = a().ajax(l);
                return c.done((function() {
                    t.enabled = !0
                }
                )),
                c
            },
            makeUrl: function(e, t) {
                var n = this.getParams();
                return t = t || {},
                n.account_id && (t.account_id = n.account_id),
                o().each(t, (function(t, n) {
                    e = e.replace(n, t)
                }
                )),
                n.base_url + e
            },
            _request: function(e, t, n, r, i) {
                var s = a().Deferred();
                r = r || {},
                n = n || {},
                "GET" !== e && (n = JSON.stringify(n),
                "GETJSON" === e ? r["X-Http-Method-Override"] = "GET" : "POST" !== e && (r["X-Http-Method-Override"] = e),
                e = "POST");
                var c = o().extend(this.getAjaxDefaults(r), {
                    url: t,
                    data: n,
                    type: e,
                    dataType: "json"
                }, i || {});
                return a().ajax(c).done((function() {
                    s.resolve.apply(null, arguments)
                }
                )).fail((function(e) {
                    401 === e.status ? l.default.checkAuth((function() {
                        return a().ajax(c)
                    }
                    ), 0).done((function() {
                        s.resolve.apply(null, arguments)
                    }
                    )).fail((function() {
                        s.reject.apply(null, arguments)
                    }
                    )) : s.reject.apply(null, arguments)
                }
                )),
                s.promise()
            },
            requestRaw: function(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
                  , r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}
                  , i = arguments.length > 4 ? arguments[4] : void 0
                  , s = o().extend({
                    url: t,
                    data: n,
                    type: e,
                    headers: r,
                    dataType: "json"
                }, i || {});
                return a().ajax(s)
            },
            request: function(e, t, n, r, i) {
                var a = this;
                return this.checkAccount().always((function() {
                    a.request = a._request
                }
                )).then(o().bind(a._request, this, e, t, n, r, i))
            }
        });
        const d = u;
        var h = "../build/transpiled/components/mail/base_api";
        window.define(h, (function() {
            var e = "undefined"
              , n = typeof t === e ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === e ? typeof module === e ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : t;
            return n && n.default || n
        }
        )),
        window.require([h])
    }
    ,
    729153: (e, t, n) => {
        "use strict";
        n.r(t),
        n.d(t, {
            default: () => p
        });
        var r = n(661533)
          , o = n.n(r)
          , i = n(55188)
          , a = n.n(i)
          , s = n(315702)
          , l = n(208928)
          , c = n(513934)
          , u = APP.constant("version")
          , d = APP.constant("version_backend")
          , h = a().propertyOf(window)(["performance", "timing", "responseEnd"]) || 0
          , _ = null;
        function f(e, t) {
            var n = Date.now() - h
              , r = o().Deferred();
            return n < (t = a().isNumber(t) ? t : 6e4) ? e().then(r.resolve, r.reject) : (h = Date.now(),
            _ || (_ = o().ajax({
                url: "/private/ping.php"
            }).always((function() {
                _ = null
            }
            ))),
            _.done((function() {
                e().then(r.resolve, r.reject)
            }
            )).fail(r.reject)),
            r.promise()
        }
        "production" === APP.environment && o()(document).ajaxComplete((function(e, t, n) {
            var r = APP.constant("server")
              , i = t.getResponseHeader("X-Core-Version")
              , h = t.getResponseHeader("X-Core-Server")
              , _ = t.getResponseHeader("X-Core-Version-Backend")
              , f = t.getResponseHeader("X-Generation-Time")
              , p = t.getResponseHeader("X-Generation-Time-System")
              , m = t.getResponseHeader("X-Core-Session-Token")
              , v = t.getResponseHeader("X-Core-Widgets-Cache-Version")
              , g = {}
              , y = 0
              , b = t === APP.page_xhr
              , w = (0,
            l.getCallingStatus)()
              , k = a().isNull(i) || u === i
              , C = a().isNull(_) || d === _;
            h && h !== r && APP.constant("server", h),
            m && m !== APP.constant("session_token") && APP.constant("session_token", m),
            (f || p) && (y = f || p,
            o()(document).find(".generation-time").append("<br>".concat(y, " - ").concat(n.url))),
            k && C || w || (C && b || !C) && (window.location.href = document.URL),
            a().isEmpty(v) || (g[APP.getWidgetsArea()] = v,
            a().extend(APP.constant("widgets_cache_version"), g),
            s.storeWithExpiration.remove(c.default.getCacheCode()))
        }
        ));
        const p = {
            check: function() {
                var e = o().Deferred();
                return e.resolve(),
                f(e.promise, 0)
            },
            checkAuth: f
        };
        var m = "../build/transpiled/core/updater";
        window.define(m, (function() {
            var e = "undefined"
              , n = typeof t === e ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === e ? typeof module === e ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : t;
            return n && n.default || n
        }
        )),
        window.require([m])
    }
    ,
    513934: (e, t, n) => {
        "use strict";
        n.r(t),
        n.d(t, {
            default: () => c
        });
        var r = n(55188)
          , o = n.n(r)
          , i = n(661586)
          , a = n.n(i)
          , s = n(886965)
          , l = n(237262);
        const c = {
            getCacheCode: function() {
                var e = "".concat((0,
                s.getVersion)(), "_linked_types_cache_").concat(APP.lang_id, "_").concat((0,
                l.userID)())
                  , t = (0,
                l.getRights)("catalog_rights") || {}
                  , n = o().map(t, (function(e, t) {
                    var n = +(e.view !== l.RIGHTS_DENIED);
                    return "".concat(t, ":").concat(n)
                }
                ));
                return n.length && (e += "_".concat(a()(n.join("_")))),
                e
            },
            linked_types_cache_lifetime: 36e5
        };
        var u = "../build/transpiled/interface/card/linked/constants";
        window.define(u, (function() {
            var e = "undefined"
              , n = typeof t === e ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === e ? typeof module === e ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : t;
            return n && n.default || n
        }
        )),
        window.require([u])
    }
    ,
    391753: (e, t, n) => {
        "use strict";
        n.r(t),
        n.d(t, {
            default: () => A
        });
        var r = n(661533)
          , o = n.n(r)
          , i = n(55188)
          , a = n.n(i)
          , s = n(460159)
          , l = n.n(s)
          , c = n(809228)
          , u = n.n(c)
          , d = n(267651)
          , h = n.n(d)
          , _ = n(880774)
          , f = n(500034)
          , p = n(804129)
          , m = n(189967)
          , v = n(886965)
          , g = n(237262)
          , y = n(369409)
          , b = n(521466)
          , w = n(745277)
          , k = n(846257)
          , C = n(988050);
        function S(e, t, n, r, o, i, a) {
            try {
                var s = e[i](a)
                  , l = s.value
            } catch (e) {
                return void n(e)
            }
            s.done ? t(l) : Promise.resolve(l).then(r, o)
        }
        var P = ["leads", "catalogs"]
          , E = "/settings/profile/";
        const A = new (b.default.extend({
            el: o()(document),
            entities: {
                leads: "leads",
                whatsapp: "whatsapp",
                catalogs: "catalogs",
                contacts: "catalogs",
                companies: "contacts",
                events: "stats",
                statsCalls: "stats",
                statsOperday: "stats",
                "todo-line": "todo",
                authlog: "settings",
                widgetsSettings: "amo-market",
                dev: "settings",
                mail: "mail",
                help: "help-center"
            },
            _matching_entities: {
                leads: ["leads"],
                whatsapp: ["whatsapp"],
                catalogs: ["companies", "contacts", "files", "catalogs"],
                settings: ["authlog", "dev", "widgetsSettings", "advanced"],
                stats: ["statsCalls", "events", "statsOperday", "advanced"],
                mail: ["mail"],
                "amo-market": ["widgetsSettings"]
            },
            _partially_matchable: ["chats"],
            _classes: function() {
                return {
                    nav_top: "nav__top",
                    nav_top_wrapper: "nav__top__wrapper",
                    operday_holder: "nav__top__operday-holder",
                    item: "nav__menu__item",
                    item_selected: "nav__menu__item-selected",
                    copy: "js-copy-account-id",
                    support_body: "project_info-body-support",
                    logo: "project_info-body-logo",
                    themes_switcher: "js-themes-switcher",
                    help_center_helper: "help-center-helper"
                }
            },
            _selectors: function() {
                return {
                    left_menu: "#left_menu",
                    links: ".nav__menu__item__link",
                    loader: "#page_change_progress",
                    nav_menu_up: "#nav_menu_up",
                    nav_menu_down: "#nav_menu_down",
                    nav_menu: "#nav_menu",
                    nav_menu_wrapper: ".nav__menu-wrapper",
                    nav_item_by_entity: '.nav__menu__item[data-entity="%s"]',
                    widget_naw_item: '.nav__menu__item[data-widget-code="%(widget_code)s"][data-widget-item="%(widget_item)s"]',
                    overlay: "#left-menu-overlay:not(.hover-overlay)",
                    current_account: ".nav__top__userbar_useraccounts__item--current",
                    menu_blocker: ".js-operday-menu-blocker",
                    avatar: ".js-avatar-wrapper .js-left-avatar",
                    avatar_overlay: ".js-left-avatar-overlay"
                }
            },
            document_events: function() {
                return {
                    "menu:start-hover": "startHoverMenu",
                    "menu:stop-hover": "stopHoverMenu"
                }
            },
            initialize: function() {
                for (var e, t, n = this, r = arguments.length, o = new Array(r), i = 0; i < r; i++)
                    o[i] = arguments[i];
                b.default.prototype.initialize.apply(this, o),
                e = this._elem("item_selected");
                var s = this._getCompleteMatchUrlItem();
                a().isUndefined(s) || (e.removeClass(this._class("item_selected")),
                (e = s).addClass(this._class("item_selected"))),
                "Kommo" === APP.constant("current_brand") && this._elem("logo").addClass("logo-kommo"),
                this.themes_switcher_mounted = !1,
                this.$_selected_item = e.length ? e : void 0,
                this.smooth_scroll_interval = null,
                this.toggle_menu_blocked = !1,
                this.initEvents(),
                (0,
                f.isFeatureAvailable)("new_com_onboarding") && !(0,
                f.isFeatureAvailable)("userflow") && (this._elem("left_menu").append('<div class="help-center-helper"></div>'),
                this.$help_center_helper = this._elem("help_center_helper"),
                this.help_center_menu_button = this._elem("nav_item_by_entity", "help").get(0),
                this._$document.on("help_center_helper:show", (function() {
                    n._elem("nav_menu_wrapper").on("scroll", a().bind((function() {
                        this.handleHelperPositionChange(this.help_center_menu_button, this.$help_center_helper)
                    }
                    ), n)),
                    n.initHelpCenterHelper(),
                    n.help_center_helper_available = !0
                }
                ))),
                this._addComponent(u(), ".js-copy-account-id").on("success", a().bind((function() {
                    this._elem("copy").addClass("js-copied"),
                    a().delay(a().bind((function() {
                        this._elem("copy").removeClass("js-copied")
                    }
                    ), this), 800)
                }
                ), this)).on("error", a().bind((function() {
                    this._elem("copy").addClass("animated shake"),
                    a().delay(a().bind((function() {
                        this._elem("copy").removeClass("animated shake")
                    }
                    ), this), 200)
                }
                ), this)),
                (0,
                f.isFeatureAvailable)("operday") && (0,
                g.getRights)("oper_day_user_tracking") && (this.operday = this._addComponent(w.default, {
                    $holder: this._elem("operday_holder"),
                    start_time: Math.floor(Date.now() / 1e3),
                    onShowMenuAndBlock: a().bind(this.handleShowMenuAndBlock, this),
                    onUnblockMenu: a().bind(this.handleUnblockMenu, this),
                    onBlockMenu: a().bind(this.handleBlockMenu, this),
                    onCloseMenu: a().bind(this.handleCloseMenu, this)
                })),
                (0,
                p.isAmoChatsFullEnabled)() || (t = h().subscribe("hover_menu:show", a().bind((function(e, n) {
                    this.initHoverMenu((function() {
                        h().unsubscribe(t),
                        h().publish("hover_menu:show", n)
                    }
                    ))
                }
                ), this))),
                this._$document.on("avatar:change", (function(e, t) {
                    n.changeAvatarSrc(t)
                }
                )),
                this._$document.on("avatar:reset", (function() {
                    n.resetAvatar()
                }
                ))
            },
            _common_events: {
                "menu:loader:change": "onLoaderChange",
                "page:change:start": "onPageChangeStart",
                "page:change:stop": "onPageChangeStop",
                "page:entity_changed": "onEntityChanged",
                "page:construct": "onPageConstruct",
                "menu:icon:restore": "onEntityChanged",
                "menu:item:deleted": "onItemDelete",
                "click .js-support": "onSupportClick",
                "click .js-manage-profile": "onManageProfileClick",
                "click .js-account-id": "onAccountIdClick",
                "click .js-logout": "onLogoutClick",
                "click .nav__top": "onNavTopClick",
                "click .user-select-overlay": "onNavTopClick",
                "click .account_selection": "onAccountSelectionClick",
                "click .nav__menu__item": "onMenuClick"
            },
            _touch_events: {
                "scroll .nav__menu-wrapper": "onTouchScroll"
            },
            _desktop_events: {
                "menu:scroll .nav__menu-wrapper": "onMenuScroll",
                "menu:scroll:revert": "onMenuScrollRevert",
                "mousewheel .nav__menu-wrapper": "onWheelScroll",
                "mouseleave #left_menu": "onMouseLeave",
                "mouseenter #nav_menu_down": "onMouseEnter",
                "mouseenter #nav_menu_up": "onMouseEnter",
                "mouseenter #left_menu": "onMouseEnterInitHoverMenu"
            },
            _templates: ["/tmpl/left_menu/aside.twig"],
            initEvents: function() {
                var e = APP.is_touch_device ? this._touch_events : this._desktop_events;
                this.events = a().extend(this._common_events, e),
                APP.router && this.listenTo(APP.router, "route", a().bind(this.onRouteChanged, this)),
                this.delegateEvents()
            },
            initHelpCenterHelper: function() {
                var e = this;
                Promise.all([n.e(31542), n.e(12710)]).then(n.bind(n, 112710)).then((function(t) {
                    var n = t.default;
                    if (e._addComponent(n, {
                        el: e._elem("help_center_helper"),
                        onHelperPositionChange: a().bind((function() {
                            this.handleHelperPositionChange(this.help_center_menu_button, this.$help_center_helper)
                        }
                        ), e),
                        onDestroy: a().bind(e.handleHelpCenterHelperDestroy, e),
                        isHelpCenterMenuButton: Boolean(e.help_center_menu_button)
                    }),
                    e.help_center_menu_button && "help" !== APP.data.current_entity) {
                        var r = e.help_center_menu_button.getBoundingClientRect().top
                          , o = e._elem("nav_menu_wrapper").height();
                        e.onMenuScroll({
                            currentTarget: e._elem("nav_menu_wrapper")
                        }, r - o + k.MENU_TIP_PADDING)
                    } else
                        e.setHelperBottomOffset(e.$help_center_helper)
                }
                ))
            },
            resetAvatar: function() {
                this._elem("avatar_overlay").show();
                var e = this._elem("avatar").css("background-image").replace(/"[^,]*"/, '"' + (0,
                y.getCDNPath)("/frontend/images/interface/avatars/") + (APP.constant("account").id % 10 + 1) + '.jpeg"');
                this._elem("avatar").css("background-image", e)
            },
            changeAvatarSrc: function(e) {
                var t = this._elem("avatar").css("background-image")
                  , n = e.withCDN ? (0,
                y.getCDNPath)(e.src) : e.src
                  , r = t.replace(/"[^,]*"/, '"' + n + '"');
                this._elem("avatar_overlay").hide(),
                this._elem("avatar").css("background-image", r)
            },
            handleHelpCenterHelperDestroy: function() {
                this._elem("nav_menu_wrapper").off("scroll", a().bind((function() {
                    this.handleHelperPositionChange(this.help_center_menu_button, this.$help_center_helper)
                }
                ), this)),
                this.help_center_helper_available = !1
            },
            getItem: function(e) {
                return a().isEmpty(e.widget_code) || a().isEmpty(e.widget_item) ? a().isEmpty(e.entity) ? [] : this._elem("nav_item_by_entity", e.entity) : this._findElem("widget_naw_item", {
                    widget_code: e.widget_code,
                    widget_item: e.widget_item
                })
            },
            addMenuItem: function(e) {
                var t = {};
                t.item = {
                    label: e.item_label,
                    description: e.item_description,
                    link: e.item_code,
                    selected: !1
                },
                t.item_name = e.item_name;
                var n = l()({
                    ref: "/tmpl/settings/menu_item.twig"
                }).render(t);
                o()("#sidebar").find(".filter__list").append(n)
            },
            handleHelperPositionChange: function(e, t) {
                if (e) {
                    var n, r = e.getBoundingClientRect(), o = t.height();
                    n = r.top + r.height - o + 9,
                    r.height + r.top < this._$window.height() && (t.css("top", "".concat(n, "px")),
                    t.css("bottom", "unset"))
                } else
                    this.setHelperBottomOffset(t)
            },
            removeMenuItem: function(e) {
                o()("#".concat(e)).remove()
            },
            updateItemCounter: function(e) {
                var t = this.getItem(e);
                return t.length ? (e.count <= 0 ? t.find(".js-notifications_counter").hide() : t.find(".js-notifications_counter").html(e.count).show(),
                this) : this
            },
            onPageConstruct: function() {
                var e = this
                  , t = window.location.hash.substring(1)
                  , n = APP.constant("is_kommo");
                if ("support" === t && n) {
                    this._$body.addClass("page-loading");
                    var r = function() {
                        a().isUndefined(APP.inbox) ? setTimeout(r, 500) : (e._$body.removeClass("page-loading"),
                        (0,
                        m.openSupportChat)(),
                        history.replaceState(null, null, " "))
                    };
                    r()
                }
            },
            onAccountSelectionClick: function(e) {
                this._elem("nav_top").removeClass("expanded"),
                o()(e.currentTarget).hide().removeClass("account_selection"),
                this._elem("nav_top_wrapper").removeClass("expanded")
            },
            onNavTopClick: function() {
                if (this.isNotificationsExpanded() || this.toggle_menu_blocked)
                    return !1;
                this.toggleLeftMenu()
            },
            toggleLeftMenu: function() {
                this.hover_menu && this.hover_menu.isHoverMenuVisible() && this.closeHoverMenu(),
                this.toggleSubmenus();
                var e = this._elem("nav_top").hasClass("expanded");
                this.toggleOverlay(e).toggleClass("user-select-overlay", e),
                this.toggleSupportButton(),
                e && (this._elem("current_account").length && this._elem("current_account").get(0).scrollIntoView(!0),
                this.operday && this.operday.onRerenderWorkspace())
            },
            onLogoutClick: function(e) {
                window.location.href = o()(e.currentTarget).find("a").attr("href")
            },
            onAccountIdClick: function(e) {
                e.stopPropagation()
            },
            onManageProfileClick: function(e) {
                if (e.stopPropagation(),
                this.toggle_menu_blocked)
                    return !1;
                if (e.metaKey || e.ctrlKey) {
                    var t = window.open();
                    t.opener = null,
                    t.location = E
                } else
                    APP.router.navigate(E, {
                        trigger: !0
                    }),
                    this.toggleSubmenus(!1),
                    this.toggleOverlay(!1);
                return !1
            },
            onSupportClick: function(e) {
                if (e.preventDefault(),
                this.toggle_menu_blocked) {
                    if ((0,
                    v.isCustomers)())
                        return;
                    (0,
                    m.openSupportChat)(!0)
                } else
                    (0,
                    m.openSupportChat)();
                this.toggleSubmenus(!1),
                this.toggleOverlay(!1)
            },
            handleShowMenuAndBlock: function() {
                this.onNavTopClick(),
                this.handleBlockMenu()
            },
            handleCloseMenu: function() {
                this.onNavTopClick()
            },
            handleUnblockMenu: function() {
                this.toggle_menu_blocked = !1,
                this._elem("menu_blocker").hide()
            },
            handleBlockMenu: function() {
                this.toggle_menu_blocked = !0,
                this._elem("menu_blocker").show()
            },
            isNotificationsExpanded: function() {
                return this.$notifications || (this.$notifications = o()("#sidebar-notifications")),
                this.$notifications.hasClass("aside-expanded")
            },
            toggleSubmenus: function(e) {
                this._elem("nav_top").toggleClass("expanded", e),
                this._elem("nav_top_wrapper").toggleClass("expanded", e),
                this._elem("left_menu").toggleClass("h-elevated", e),
                this._elem("operday_holder").toggleClass("expanded", e),
                this.themes_switcher_mounted ? this._elem("themes_switcher").toggleClass("expanded", e) : this.initThemesSwitcher(e)
            },
            initThemesSwitcher: function() {
                var e = this
                  , t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]
                  , r = this;
                t && Promise.all([n.e(31542), n.e(81905)]).then(n.bind(n, 881905)).then((function(n) {
                    var o = n.default;
                    r._addComponent(o, {
                        el: r._elem("themes_switcher")
                    }),
                    e.themes_switcher_mounted = !0,
                    e._elem("themes_switcher").toggleClass("expanded", t)
                }
                ))
            },
            toggleSupportButton: function() {
                APP.constant("account").amojo_enabled || this._elem("support_body").addClass("".concat(this._class("support_body"), "_disabled")).find(".button-input-inner__text").text((0,
                _.i18n)("The service is not available at the moment"))
            },
            toggleOverlay: function(e) {
                return e ? this._$document.trigger("overlay:fix") : this._findElem("overlay").hasClass("default-overlay-visible") && this._$document.trigger("overlay:unfix"),
                this._findElem("overlay").removeClass("user-select-overlay").toggleClass("default-overlay-visible", e),
                this._elem("overlay")
            },
            setHelperBottomOffset: function(e) {
                e.css("bottom", 0),
                e.css("top", "unset")
            },
            initHoverMenu: function() {
                var e = this
                  , t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a().noop;
                if (this.pending_hover_initialization)
                    return this.pending_hover_initialization;
                this.pending_hover_initialization = new Promise((function(r) {
                    e.hover_menu || (0,
                    p.isAmoChatsFullEnabled)() || Promise.all([n.e(68592), n.e(95882), n.e(17331)]).then(n.bind(n, 917331)).then((function(t) {
                        var n = t.default;
                        return e.hover_menu = new n({
                            isNotificationsExpanded: a().bind(e.isNotificationsExpanded, e)
                        }),
                        e.hover_menu.init({
                            requestAt: e._initHoverMenuRequestAt
                        })
                    }
                    )).then((function() {
                        APP.is_touch_device || (e.onMenuScrollInit(),
                        e._$window.on("resize", a().debounce(a().bind(e.onMenuScrollInit, e), 200))),
                        t(),
                        r()
                    }
                    ))
                }
                ))
            },
            onPageChangeStart: function() {
                this._elem("loader").closest(this._selector("item")).hasClass(this._class("item_selected")) && this._elem("loader").removeClass("stopped")
            },
            onPageChangeStop: function() {
                this._elem("loader").addClass("stopped")
            },
            getItemInfo: function(e) {
                if (e || (e = this._getSelected()),
                !this._getSelected())
                    return {
                        is_sub_item: !1,
                        main_entity: "",
                        id: ""
                    };
                var t = this._getSelected().data("entity").split("_");
                return {
                    is_sub_item: P.includes(t[0]) && !a().isUndefined(t[1]),
                    main_entity: t[0],
                    id: t.slice(1).join("_") || ""
                }
            },
            onLoaderChange: function() {
                var e = this._elem("loader").show()
                  , t = this.getItemInfo(this._getSelected())
                  , n = APP.getBaseEntity();
                this.entities[n] && (n = this.entities[n]),
                t.is_sub_item && (n = "".concat(t.main_entity, "_").concat(t.id)),
                this._elem("nav_item_by_entity", n).find(".nav__menu__item__icon").append(e)
            },
            onTouchScroll: function(e) {
                var t = o()(e.currentTarget).scrollTop() > 0;
                this._elem("nav_menu_up").toggleClass("nav__menu-scroller-showed", t),
                this._elem("nav_menu_down").toggleClass("nav__menu-scroller-showed", !t)
            },
            _linearToPower: function(e, t, n, r) {
                var o = (n[1] - n[0]) / (Math.pow(t[0], r) + Math.pow(t[1], r))
                  , i = n[1] - Math.pow(t[1], r) * o;
                return o * Math.pow(e, r) + i
            },
            _stopSmoothScrollInterval: function() {
                clearInterval(this.smooth_scroll_interval),
                this.smooth_scroll_interval = null
            },
            _reinitSmoothScrollInterval: function(e, t, n) {
                var r = Math.floor(this._linearToPower(e, [0, 100], [25, 1], .5))
                  , o = this._elem("nav_menu_wrapper");
                this._stopSmoothScrollInterval(),
                this.smooth_scroll_interval = setInterval(a().bind((function() {
                    this._scrollNotEnd(n) ? o.scrollTop(o.scrollTop() + t) : this.onMouseEnter(n)
                }
                ), this), r)
            },
            offSmoothScroll: function() {
                this._stopSmoothScrollInterval(),
                this._elem("nav_menu_up").off(".smooth_scroll"),
                this._elem("nav_menu_down").off(".smooth_scroll")
            },
            startSmoothScroll: function(e) {
                var t = o()(e.currentTarget)
                  , n = t.height()
                  , r = "nav_menu_up" === t.attr("id") ? -3 : 3
                  , i = 100 / n * ("nav_menu_up" === t.attr("id") ? n - e.offsetY : e.offsetY);
                this._reinitSmoothScrollInterval(i, r, e)
            },
            _scrollNotEnd: function(e) {
                var t = o()(e.currentTarget)
                  , n = this._elem("nav_menu_wrapper")
                  , r = n[0].scrollHeight
                  , i = n[0].scrollTop
                  , a = n[0].offsetHeight
                  , s = t.attr("id");
                return i > 0 && "nav_menu_up" === s || i + a < r && "nav_menu_down" === s
            },
            onMouseEnterInitHoverMenu: function(e) {
                var t = performance.now();
                this.initHoverMenu((function() {
                    o()(e.target).trigger("mouseenter", [{
                        requestAt: t
                    }])
                }
                ))
            },
            onMouseEnter: function(e) {
                var t, n = o()(e.currentTarget), r = this._elem("nav_menu_wrapper"), i = this._elem("nav_menu").outerHeight(!0), s = r.height();
                if (this.offSmoothScroll(),
                this._scrollNotEnd(e))
                    return n.on("mousemove.smooth_scroll", a().bind(this.startSmoothScroll, this)),
                    n.on("mouseleave.smooth_scroll", a().bind(this.offSmoothScroll, this)),
                    this._elem("nav_menu_up").addClass("nav__menu-scroller-showed"),
                    void this._elem("nav_menu_down").addClass("nav__menu-scroller-showed");
                t = "nav_menu_down" === n.attr("id") ? i - s : 0,
                i > s && (r.trigger("menu:scroll", [t]),
                e.stopPropagation())
            },
            onMouseLeave: function() {
                this._$document.trigger("menu:scroll:revert")
            },
            onMenuScrollRevert: function() {
                var e = this._elem("nav_menu")
                  , t = this._elem("nav_menu_wrapper")
                  , n = e.children(".nav__menu__item-selected")
                  , r = Math.floor(t.height() / 72)
                  , i = n.length ? n[0].offsetTop - 72 * Math.floor(r / 2) : 0;
                APP.is_touch_device || a().delay((function() {
                    o()("#sidebar").hasClass("aside-expanded") || t.trigger("menu:scroll", [i])
                }
                ), 150)
            },
            onMenuScrollInit: function() {
                var e = this._elem("nav_menu_wrapper").get(0)
                  , t = this._elem("nav_menu_wrapper").scrollTop()
                  , n = t > 0
                  , r = e && e.scrollHeight > e.offsetHeight && e.scrollHeight !== e.offsetHeight + t;
                this._elem("nav_menu_up").toggleClass("nav__menu-scroller-showed", n),
                this._elem("nav_menu_down").toggleClass("nav__menu-scroller-showed", r),
                r && this._$document.trigger("menu:scroll:revert")
            },
            onMenuScroll: function(e, t) {
                var n = o()(e.currentTarget)
                  , r = n[0].scrollHeight > n[0].offsetHeight
                  , i = t > 0 && r
                  , a = t + n.height() < n.children(".nav__menu").outerHeight(!0) && r;
                n.animate({
                    scrollTop: t
                }, 100),
                this._elem("nav_menu_up").toggleClass("nav__menu-scroller-showed", i),
                this._elem("nav_menu_down").toggleClass("nav__menu-scroller-showed", a)
            },
            onWheelScroll: function(e) {
                var t = this._elem("nav_menu_wrapper").get(0)
                  , n = this._elem("nav_menu_wrapper").scrollTop() - e.deltaY;
                this.help_center_helper_available && this.handleHelperPositionChange(this.help_center_menu_button, this.$help_center_helper),
                this._elem("nav_menu_up").toggleClass("nav__menu-scroller-showed", n > 0),
                this._elem("nav_menu_down").toggleClass("nav__menu-scroller-showed", t.scrollHeight > t.offsetHeight && t.scrollHeight > t.offsetHeight + n)
            },
            onMenuClick: function(e) {
                var t = this
                  , n = o()(e.currentTarget)
                  , r = n.data("entity");
                if (this.toggle_menu_blocked)
                    return !1;
                e.stopPropagation(),
                e.ctrlKey || e.metaKey || (e.preventDefault(),
                APP.is_touch_device ? this.initHoverMenu().then((function() {
                    t.hover_menu.checkTouchClick(e, r).done((function() {
                        t._onMenuClick(n)
                    }
                    ))
                }
                )) : this._onMenuClick(n))
            },
            _onMenuClick: function(e) {
                return (t = function() {
                    var t, n;
                    return function(e, t) {
                        var n, r, o, i, a = {
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
                            next: s(0),
                            throw: s(1),
                            return: s(2)
                        },
                        "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                            return this
                        }
                        ),
                        i;
                        function s(i) {
                            return function(s) {
                                return function(i) {
                                    if (n)
                                        throw new TypeError("Generator is already executing.");
                                    for (; a; )
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
                                                return a.label++,
                                                {
                                                    value: i[1],
                                                    done: !1
                                                };
                                            case 5:
                                                a.label++,
                                                r = i[1],
                                                i = [0];
                                                continue;
                                            case 7:
                                                i = a.ops.pop(),
                                                a.trys.pop();
                                                continue;
                                            default:
                                                if (!((o = (o = a.trys).length > 0 && o[o.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                                                    a = 0;
                                                    continue
                                                }
                                                if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                                    a.label = i[1];
                                                    break
                                                }
                                                if (6 === i[0] && a.label < o[1]) {
                                                    a.label = o[1],
                                                    o = i;
                                                    break
                                                }
                                                if (o && a.label < o[2]) {
                                                    a.label = o[2],
                                                    a.ops.push(i);
                                                    break
                                                }
                                                o[2] && a.ops.pop(),
                                                a.trys.pop();
                                                continue
                                            }
                                            i = t.call(e, a)
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
                                }([i, s])
                            }
                        }
                    }(this, (function(r) {
                        return this.toggleSubmenus(!1),
                        this.toggleOverlay(!1),
                        e.hasClass("nav__menu__item-selected") || this._$document.trigger("page:change:start"),
                        this._elem("left_menu").find(".nav__menu__item").removeClass("nav__menu__item-selected"),
                        e.addClass("nav__menu__item-selected"),
                        this.$_selected_item = e,
                        t = e.children("a").attr("href"),
                        n = this._isStrictPipelineRoute(t) ? this._transformLeadsRoute(t) : t,
                        APP.router.navigate(n, {
                            trigger: !0
                        }),
                        [2]
                    }
                    ))
                }
                ,
                function() {
                    var e = this
                      , n = arguments;
                    return new Promise((function(r, o) {
                        var i = t.apply(e, n);
                        function a(e) {
                            S(i, r, o, a, s, "next", e)
                        }
                        function s(e) {
                            S(i, r, o, a, s, "throw", e)
                        }
                        a(void 0)
                    }
                    ))
                }
                ).apply(this);
                var t
            },
            _isStrictPipelineRoute: function(e) {
                return e.startsWith("/leads/pipeline")
            },
            _transformLeadsRoute: function(e) {
                var t;
                if (!(null === (t = (0,
                C.get)("LAST_PLACE_DEALS")) || void 0 === t ? void 0 : t.startsWith("list")))
                    return e;
                var n = e.split("/");
                return n.splice(2, 0, "list"),
                n.join("/")
            },
            onItemDelete: function(e, t, n) {
                var r;
                switch (t) {
                case "leads":
                case "catalogs":
                    (r = this._elem("nav_item_by_entity", "".concat(t, "_").concat(n.id))).hasClass(this._class("item_selected")) && (this.$_selected_item = this._elem("nav_item_by_entity", t),
                    this.$_selected_item.addClass(this._class("item_selected"))),
                    r.remove(),
                    this._dropElemCache()
                }
            },
            _getCompleteMatchUrlItem: function() {
                var e, t, n = this;
                return this._elem("links").each((function() {
                    var r = o()(this)
                      , i = r.attr("href")
                      , s = r.parent().attr("data-entity");
                    window.location.pathname === r.attr("href") ? e = r.closest(".nav__menu__item") : i && a().contains(n._partially_matchable, s) && window.location.pathname.split("/")[1] === i.split("/")[1] && (t = r.closest(".nav__menu__item"))
                }
                )),
                e || t
            },
            _getSubEntityId: function(e) {
                var t, n = window.location.pathname;
                switch (e) {
                case "leads":
                    if ("/" === n[n.length - 1] && (n = n.slice(0, -1)),
                    t = n.split("/").slice(-1)[0],
                    isNaN(Number(t)))
                        return "";
                    break;
                case "catalogs":
                    if (location.pathname.split("/")[1])
                        switch (n.split("/").slice(-2, -1)[0]) {
                        case "list":
                            t = "contacts_and_companies";
                            break;
                        case "companies":
                            t = "companies";
                            break;
                        case "contacts":
                            t = "contacts";
                            break;
                        case "catalogs":
                            if (t = n.split("/").slice(-1)[0],
                            isNaN(Number(t)))
                                return "";
                            break;
                        default:
                            return ""
                        }
                    break;
                default:
                    return ""
                }
                return t
            },
            _getSelected: function() {
                if (this.$_selected_item && this.$_selected_item.length)
                    return this.$_selected_item
            },
            _isNeedChange: function() {
                var e = this._getSelected()
                  , t = APP.getBaseEntity()
                  , n = this._matching_entities
                  , r = this._getCompleteMatchUrlItem();
                if (!a().isUndefined(r) && r !== e)
                    return !0;
                if (!e)
                    return !1;
                var o = e.attr("data-entity").split("_")[0];
                return t === o && this._getSelected() && this.$_selected_item.addClass("nav__menu__item-selected"),
                this._getSelected() && this.$_selected_item.addClass("nav__menu__item-selected"),
                !(t === o || Object.prototype.hasOwnProperty.call(n, o) && a().contains(n[o], t))
            },
            _isChangeCandidate: function(e) {
                var t, n, r, o = e.attr("data-entity"), i = this._matching_entities, s = this._getCompleteMatchUrlItem(), l = APP.getBaseEntity();
                if (!a().propertyOf(s)(0)) {
                    if (o === l || Object.prototype.hasOwnProperty.call(i, o) && a().contains(i[o], l))
                        return !0;
                    if (t = o.split("_")[0],
                    n = o.split("_").slice(1).join("_"),
                    P.includes(t))
                        return "" !== (r = this._getSubEntityId(t)) && Object.prototype.hasOwnProperty.call(i, t) && a().contains(i[t], l) && r === n
                }
                return a().propertyOf(s)(0) === a().propertyOf(e)(0)
            },
            onRouteChanged: function(e) {
                this._isNeedChange() ? this.onEntityChanged(e) : this._$document.trigger("menu:loader:change")
            },
            onEntityChanged: function() {
                var e = APP.getBaseEntity()
                  , t = this._isNeedChange()
                  , n = this;
                this._elem("left_menu").find(".nav__menu__item").removeClass("js-new-selected").each((function() {
                    var r = o()(this);
                    if (r.hasClass("nav__menu__item-selected") && !r.hasClass("js-new-selected") && (t || "widget" === e && r.data("widget-code") !== APP.getWidgetsArea().split(":")[1] && r.data("widget-item") !== APP.getWidgetsArea().split(":")[2] && r.hasClass("nav__menu__item__icon-integration")) && r.removeClass("nav__menu__item-selected"),
                    !r.hasClass("nav__menu__item-selected") && (t && n._isChangeCandidate(r) || "widget" === e && r.data("widget-code") === APP.getWidgetsArea().split(":")[1] && r.data("widget-item") === APP.getWidgetsArea().split(":")[2] && r.hasClass("nav__menu__item__icon-integration"))) {
                        if (!n._getSelected())
                            return;
                        n._getSelected().removeClass("nav__menu__item-selected").removeClass("js-new-selected"),
                        r.addClass("nav__menu__item-selected").addClass("js-new-selected"),
                        n.$_selected_item = r
                    }
                }
                )),
                this._$document.trigger("menu:loader:change"),
                t && this.onMouseLeave()
            },
            stopHoverMenu: function() {
                this.hover_menu && this.hover_menu.prependHoverMenu(false)
            },
            startHoverMenu: function() {
                this.hover_menu && this.hover_menu.prependHoverMenu(true)
            },
            isHoverMenuVisible: function() {
                if (this.hover_menu)
                    return this.hover_menu.isHoverMenuVisible()
            },
            closeHoverMenu: function() {
                if (this.hover_menu)
                    return this.hover_menu.closeHoverMenu()
            }
        }))
    }
    ,
    873719: (e, t, n) => {
        "use strict";
        n.r(t),
        n.d(t, {
            default: () => _
        });
        var r = n(661533)
          , o = n.n(r)
          , i = n(55188)
          , a = n.n(i)
          , s = n(598701)
          , l = n(94217)
          , c = n(391753)
          , u = o()(document);
        function d() {
            APP.constant("amomail").enabled && l.default.getCounters().done((function(e) {
                c.default.updateItemCounter({
                    entity: "mail",
                    count: e.unreadCount
                }),
                APP.constant("amomail").mailboxes.active = e.active,
                APP.constant("amomail").mailboxes.smtp_supports = e.smtpSupports
            }
            ))
        }
        var h = a().throttle(d, 1e4, {
            trailing: !1
        });
        u.on("mail:update:counter", (function() {
            d()
        }
        )).on("page:changed", (function() {
            s.onPageFullyLoaded(h)
        }
        )).on("mailbox:view:settings", (function(e, t) {
            location.href.includes("/mail/settings") && !APP.data.is_card ? (o()(window).scrollTop(0),
            APP.data.current_view.showMailSettings(e, t)) : (t = a().isUndefined() ? "general" : t,
            APP.router.navigate("/mail/settings/?mailbox-setup=".concat(t), {
                trigger: !0
            }))
        }
        )),
        s.onPageFullyLoaded(h);
        const _ = {};
        var f = "../build/transpiled/interface/mail/common";
        window.define(f, (function() {
            var e = "undefined"
              , n = typeof t === e ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === e ? typeof module === e ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : t;
            return n && n.default || n
        }
        )),
        window.require([f])
    }
    ,
    745277: (e, t, n) => {
        "use strict";
        n.r(t),
        n.d(t, {
            default: () => b
        });
        var r = n(55188)
          , o = n.n(r)
          , i = n(161320)
          , a = n.n(i)
          , s = n(521466)
          , l = n(661533);
        function c(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++)
                r[n] = e[n];
            return r
        }
        function u(e, t, n, r, o, i, a) {
            try {
                var s = e[i](a)
                  , l = s.value
            } catch (e) {
                return void n(e)
            }
            s.done ? t(l) : Promise.resolve(l).then(r, o)
        }
        function d(e) {
            return function() {
                var t = this
                  , n = arguments;
                return new Promise((function(r, o) {
                    var i = e.apply(t, n);
                    function a(e) {
                        u(i, r, o, a, s, "next", e)
                    }
                    function s(e) {
                        u(i, r, o, a, s, "throw", e)
                    }
                    a(void 0)
                }
                ))
            }
        }
        function h(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r)
            }
        }
        function _(e, t, n) {
            return _ = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(e, t, n) {
                var r = function(e, t) {
                    for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = f(e)); )
                        ;
                    return e
                }(e, t);
                if (r) {
                    var o = Object.getOwnPropertyDescriptor(r, t);
                    return o.get ? o.get.call(n || e) : o.value
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
        function p(e, t) {
            return p = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                e
            }
            ,
            p(e, t)
        }
        function m(e, t) {
            return function(e) {
                if (Array.isArray(e))
                    return e
            }(e) || function(e, t) {
                var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (null != n) {
                    var r, o, i = [], a = !0, s = !1;
                    try {
                        for (n = n.call(e); !(a = (r = n.next()).done) && (i.push(r.value),
                        !t || i.length !== t); a = !0)
                            ;
                    } catch (e) {
                        s = !0,
                        o = e
                    } finally {
                        try {
                            a || null == n.return || n.return()
                        } finally {
                            if (s)
                                throw o
                        }
                    }
                    return i
                }
            }(e, t) || v(e, t) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        function v(e, t) {
            if (e) {
                if ("string" == typeof e)
                    return c(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                return "Object" === n && e.constructor && (n = e.constructor.name),
                "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? c(e, t) : void 0
            }
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
                var n, r = f(e);
                if (t) {
                    var o = f(this).constructor;
                    n = Reflect.construct(r, arguments, o)
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
        function y(e, t) {
            var n, r, o, i, a = {
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
                next: s(0),
                throw: s(1),
                return: s(2)
            },
            "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                return this
            }
            ),
            i;
            function s(i) {
                return function(s) {
                    return function(i) {
                        if (n)
                            throw new TypeError("Generator is already executing.");
                        for (; a; )
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
                                    return a.label++,
                                    {
                                        value: i[1],
                                        done: !1
                                    };
                                case 5:
                                    a.label++,
                                    r = i[1],
                                    i = [0];
                                    continue;
                                case 7:
                                    i = a.ops.pop(),
                                    a.trys.pop();
                                    continue;
                                default:
                                    if (!((o = (o = a.trys).length > 0 && o[o.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                                        a = 0;
                                        continue
                                    }
                                    if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                        a.label = i[1];
                                        break
                                    }
                                    if (6 === i[0] && a.label < o[1]) {
                                        a.label = o[1],
                                        o = i;
                                        break
                                    }
                                    if (o && a.label < o[2]) {
                                        a.label = o[2],
                                        a.ops.push(i);
                                        break
                                    }
                                    o[2] && a.ops.pop(),
                                    a.trys.pop();
                                    continue
                                }
                                i = t.call(e, a)
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
                    }([i, s])
                }
            }
        }
        const b = function(e) {
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
            }(s, e);
            var t, r, i = g(s);
            function s() {
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, s),
                i.apply(this, arguments)
            }
            return t = s,
            r = [{
                key: "initialize",
                value: function() {
                    var e = this
                      , t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                      , n = this
                      , r = arguments;
                    return d((function() {
                        var i;
                        return y(this, (function(a) {
                            return (i = _(f(s.prototype), "initialize", e)).call.apply(i, [n].concat(function(e) {
                                if (Array.isArray(e))
                                    return c(e)
                            }(u = r) || function(e) {
                                if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"])
                                    return Array.from(e)
                            }(u) || v(u) || function() {
                                throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                            }())),
                            n.onShowMenuAndBlock = t.onShowMenuAndBlock,
                            n.onCloseMenu = t.onCloseMenu,
                            n.onUnblockMenu = t.onUnblockMenu,
                            n.onBlockMenu = t.onBlockMenu,
                            n.$holder = t.$holder,
                            n.$el = l('<div class="operday"></div>'),
                            n.$document = l(document),
                            n.onAjaxCompleteWithThis = o().bind(n.onAjaxComplete, n),
                            n.render(),
                            n.$document.on("ajaxComplete", n.onAjaxCompleteWithThis),
                            [2];
                            var u
                        }
                        ))
                    }
                    ))()
                }
            }, {
                key: "document_events",
                value: function() {
                    return {
                        "operday:rerender": "onRerenderWorkspace"
                    }
                }
            }, {
                key: "onAjaxComplete",
                value: function(e, t) {
                    var n = this
                      , r = t.getResponseHeader("X-Oper-Day-State")
                      , i = t.getResponseHeader("X-Oper-Day-Expires-In");
                    r && (o().isNull(i) || (this._expires_in = i),
                    this.ensureViews((function(e) {
                        var t = m(e, 2)
                          , i = t[0]
                          , a = t[1];
                        switch (!0) {
                        case "closed" === r && (!n._state || "open" === n._state):
                            n.current_view && n._destroyComponent(n.current_view),
                            n.onShowMenuAndBlock(),
                            n._state = "closed",
                            n.current_view = n.renderStartOperday(i);
                            break;
                        case "open" === r && n._expires_in <= 0 && "expired" !== n._state:
                            n.current_view && n._destroyComponent(n.current_view),
                            n.onShowMenuAndBlock(),
                            n.current_view = n.renderWorkspace(a, !0),
                            n._state = "expired";
                            break;
                        case "open" === r && !o().contains(["open", "expired"], n._state):
                            n.current_view && n._destroyComponent(n.current_view),
                            n.current_view = n.renderWorkspace(a),
                            n._state = "open"
                        }
                    }
                    )))
                }
            }, {
                key: "onRerenderWorkspace",
                value: function() {
                    this.current_view && o().isFunction(this.current_view.reRender) && this.current_view.reRender()
                }
            }, {
                key: "handleChangeView",
                value: function(e) {
                    var t = this;
                    this.ensureViews((function(n) {
                        var r = m(n, 2)
                          , o = r[0]
                          , i = r[1];
                        switch (t.current_view && t._destroyComponent(t.current_view),
                        e) {
                        case "start":
                            t.onBlockMenu(),
                            t._state = "closed",
                            t.current_view = t.renderStartOperday(o);
                            break;
                        case "workspace":
                            t.onUnblockMenu(),
                            t._state = "open",
                            t.current_view = t.renderWorkspace(i, !0)
                        }
                    }
                    ))
                }
            }, {
                key: "render",
                value: function() {
                    this.$holder.html(this.$el)
                }
            }, {
                key: "renderStartOperday",
                value: function(e) {
                    return this._addComponent(e, {
                        $holder: this.$el,
                        start_time: a()().startOf("minute").unix(),
                        onChangeView: o().bind(this.handleChangeView, this),
                        is_last_day_expired: this._expires_in <= 0
                    })
                }
            }, {
                key: "renderWorkspace",
                value: function(e, t) {
                    return this._addComponent(e, {
                        $holder: this.$el,
                        onChangeView: o().bind(this.handleChangeView, this),
                        onDestroy: o().bind(this.onCloseMenu, this),
                        need_fetch: t
                    })
                }
            }, {
                key: "ensureViews",
                value: function(e) {
                    return d((function() {
                        var t, r, o, i, a;
                        return y(this, (function(s) {
                            switch (s.label) {
                            case 0:
                                return [4, Promise.all([n.e(65642).then(n.bind(n, 565642)), Promise.all([n.e(56740), n.e(68592), n.e(39877), n.e(39830), n.e(86967), n.e(85956), n.e(42019), n.e(16976), n.e(15814), n.e(5604)]).then(n.bind(n, 333885))])];
                            case 1:
                                return t = m.apply(void 0, [s.sent(), 2]),
                                r = t[0],
                                o = r.default,
                                i = t[1],
                                a = i.default,
                                e([o, a]),
                                [2]
                            }
                        }
                        ))
                    }
                    ))()
                }
            }],
            r && h(t.prototype, r),
            s
        }(s.default);
        var w = "../build/transpiled/interface/operday/operday";
        window.define(w, (function() {
            var e = "undefined"
              , n = typeof t === e ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === e ? typeof module === e ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : t;
            return n && n.default || n
        }
        )),
        window.require([w])
    }
    ,
    208928: (e, t, n) => {
        "use strict";
        n.r(t),
        n.d(t, {
            getCallingStatus: () => d,
            runMerge: () => _,
            setCallingStatus: () => u,
            showUserStatus: () => h
        });
        var r = n(55188)
          , o = n.n(r)
          , i = n(579569);
        function a(e, t, n, r, o, i, a) {
            try {
                var s = e[i](a)
                  , l = s.value
            } catch (e) {
                return void n(e)
            }
            s.done ? t(l) : Promise.resolve(l).then(r, o)
        }
        var s, l, c = !1, u = function(e) {
            return "calling_status - " + (c = e)
        }, d = function() {
            return c
        }, h = function(e) {
            var t = {}
              , n = (0,
            i.get)();
            switch (!0) {
            case "online" === e:
                t = [],
                o().each(n, (function(e) {
                    !0 === e.online && t.push(e.id)
                }
                ));
                break;
            case !o().isNaN(parseInt(e)) && !o().isUndefined((0,
            i.get)(e)):
                t = (0,
                i.get)(e).online || !1;
                break;
            default:
                o().each(n, (function(e, n) {
                    t[n] = {},
                    t[n].id = e.id,
                    t[n].online = e.online || !1
                }
                ))
            }
            return t
        }, _ = (s = function(e) {
            return function(e, t) {
                var n, r, o, i, a = {
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
                    next: s(0),
                    throw: s(1),
                    return: s(2)
                },
                "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }
                ),
                i;
                function s(i) {
                    return function(s) {
                        return function(i) {
                            if (n)
                                throw new TypeError("Generator is already executing.");
                            for (; a; )
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
                                        return a.label++,
                                        {
                                            value: i[1],
                                            done: !1
                                        };
                                    case 5:
                                        a.label++,
                                        r = i[1],
                                        i = [0];
                                        continue;
                                    case 7:
                                        i = a.ops.pop(),
                                        a.trys.pop();
                                        continue;
                                    default:
                                        if (!((o = (o = a.trys).length > 0 && o[o.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                                            a = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                            a.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && a.label < o[1]) {
                                            a.label = o[1],
                                            o = i;
                                            break
                                        }
                                        if (o && a.label < o[2]) {
                                            a.label = o[2],
                                            a.ops.push(i);
                                            break
                                        }
                                        o[2] && a.ops.pop(),
                                        a.trys.pop();
                                        continue
                                    }
                                    i = t.call(e, a)
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
                        }([i, s])
                    }
                }
            }(this, (function(t) {
                switch (t.label) {
                case 0:
                    return [4, Promise.all([n.e(68592), n.e(11347), n.e(75822)]).then(n.bind(n, 511347))];
                case 1:
                    return [2, new (0,
                    t.sent().default)(e)]
                }
            }
            ))
        }
        ,
        l = function() {
            var e = this
              , t = arguments;
            return new Promise((function(n, r) {
                var o = s.apply(e, t);
                function i(e) {
                    a(o, n, r, i, l, "next", e)
                }
                function l(e) {
                    a(o, n, r, i, l, "throw", e)
                }
                i(void 0)
            }
            ))
        }
        ,
        function(e) {
            return l.apply(this, arguments)
        }
        ), f = "../build/transpiled/sdk/index";
        window.define(f, (function() {
            var e = "undefined"
              , n = typeof t === e ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === e ? typeof module === e ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : t;
            return n && n.default || n
        }
        )),
        window.require([f])
    }
    ,
    55766: (e, t, n) => {
        "use strict";
        var r;
        n.r(t),
        n.d(t, {
            ArrowPosition: () => r
        }),
        function(e) {
            e.TOP = "top",
            e.BOTTOM = "bottom",
            e.LEFT = "left",
            e.RIGHT = "right"
        }(r || (r = {}))
    }
    ,
    975725: (e, t, n) => {
        "use strict";
        n.r(t),
        n.d(t, {
            HelpModal: () => g
        });
        var r = n(827378)
          , o = n(292554)
          , i = n.n(o)
          , a = n(55188)
          , s = n.n(a)
          , l = n(529062)
          , c = n(916569)
          , u = n(701106)
          , d = n(880774)
          , h = n(55766)
          , _ = n(943233)
          , f = n(562584)
          , p = n(827378);
        function m(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++)
                r[n] = e[n];
            return r
        }
        var v = i().bind(f.default)
          , g = function(e) {
            var t, n, o, i = e.className, a = void 0 === i ? "" : i, f = e.contentClass, g = void 0 === f ? "" : f, y = e.hasActionButton, b = void 0 !== y && y, w = e.hideCloseButton, k = void 0 !== w && w, C = e.title, S = e.description, P = e.imgUrl, E = void 0 === P ? "" : P, A = e.srcSet, T = void 0 === A ? "" : A, x = e.buttonCloseText, M = void 0 === x ? (0,
            d.i18n)("Okay, got it") : x, O = e.buttonActionText, j = void 0 === O ? "" : O, I = e.arrowPosition, N = void 0 === I ? h.ArrowPosition.TOP : I, U = e.onCloseRequest, D = void 0 === U ? s().noop : U, R = e.onActionRequest, H = void 0 === R ? s().noop : R, B = e.onAfterRender, q = void 0 === B ? s().noop : B, L = e.isClosedByOutsideClick, $ = void 0 !== L && L, F = (n = (0,
            r.useState)(!0),
            o = 2,
            function(e) {
                if (Array.isArray(e))
                    return e
            }(n) || function(e, t) {
                var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (null != n) {
                    var r, o, i = [], a = !0, s = !1;
                    try {
                        for (n = n.call(e); !(a = (r = n.next()).done) && (i.push(r.value),
                        !t || i.length !== t); a = !0)
                            ;
                    } catch (e) {
                        s = !0,
                        o = e
                    } finally {
                        try {
                            a || null == n.return || n.return()
                        } finally {
                            if (s)
                                throw o
                        }
                    }
                    return i
                }
            }(n, o) || function(e, t) {
                if (e) {
                    if ("string" == typeof e)
                        return m(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === n && e.constructor && (n = e.constructor.name),
                    "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? m(e, t) : void 0
                }
            }(n, o) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()), W = F[0], G = F[1], V = (0,
            r.useRef)(null), K = function() {
                G(!1),
                D()
            };
            (0,
            r.useEffect)((function() {
                var e = function(e) {
                    var t;
                    $ && (V.current && !V.current.contains(e.target) && K(),
                    (null === (t = e.target) || void 0 === t ? void 0 : t.isContentEditable) && K())
                };
                return document.addEventListener("mousedown", e),
                function() {
                    document.removeEventListener("mousedown", e)
                }
            }
            ), [$, D]),
            (0,
            r.useEffect)((function() {
                q()
            }
            ), []);
            var X = function() {
                K()
            }
              , z = function() {
                H(),
                K()
            };
            switch (!0) {
            case b && !k:
                t = p.createElement("div", {
                    className: v("buttons")
                }, p.createElement(l.Button, {
                    theme: l.ButtonPrimaryTheme,
                    onClick: z
                }, j), p.createElement(l.Button, {
                    theme: l.ButtonSecondaryTheme,
                    onClick: X
                }, M));
                break;
            case b && k:
                t = p.createElement(l.Button, {
                    theme: l.ButtonPrimaryTheme,
                    onClick: z
                }, j);
                break;
            case !b && !k:
                t = p.createElement(l.Button, {
                    className: v("close-button"),
                    theme: l.ButtonSecondaryTheme,
                    onClick: X
                }, M);
                break;
            default:
                t = p.createElement(l.Button, {
                    theme: l.ButtonSecondaryTheme,
                    onClick: X
                }, M)
            }
            return W ? p.createElement("div", {
                className: "".concat(v("wrapper"), " ").concat(v(a))
            }, p.createElement("div", {
                ref: V,
                className: v("content", "arrow--".concat(N), g)
            }, (E || T) && p.createElement("picture", {
                className: v("picture")
            }, p.createElement("img", {
                className: v("image"),
                src: E,
                srcSet: T,
                alt: "image"
            })), p.createElement(u.default, {
                className: v("title"),
                size: "l",
                type: "h2"
            }, C), p.createElement(c.Text, {
                theme: _.TextTheme,
                className: v("text"),
                size: "l"
            }, S), t)) : null
        }
    }
    ,
    846257: (e, t, n) => {
        "use strict";
        n.r(t),
        n.d(t, {
            HelpModal: () => r.HelpModal,
            MENU_TIP_PADDING: () => o.MENU_TIP_PADDING
        });
        var r = n(975725)
          , o = n(161101)
    }
    ,
    161101: (e, t, n) => {
        "use strict";
        n.r(t),
        n.d(t, {
            MENU_TIP_PADDING: () => r
        });
        var r = 20
    }
    ,
    943233: (e, t, n) => {
        "use strict";
        n.r(t),
        n.d(t, {
            TextTheme: () => s
        });
        var r = n(916569);
        function o(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        var i, a, s = (i = function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {}
                  , r = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                }
                )))),
                r.forEach((function(t) {
                    o(e, t, n[t])
                }
                ))
            }
            return e
        }({}, r.TextPrimaryTheme),
        a = null != (a = {
            "--crm-ui-kit-text-color": "#ffffff"
        }) ? a : {},
        Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(a)) : function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n.push.apply(n, r)
            }
            return n
        }(Object(a)).forEach((function(e) {
            Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(a, e))
        }
        )),
        i)
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
        e._sentryDebugIds[t] = "c0243666-875c-4228-a006-6177a8387f9b",
        e._sentryDebugIdIdentifier = "sentry-dbid-c0243666-875c-4228-a006-6177a8387f9b")
    } catch (e) {}
}();
//# sourceMappingURL=39231.3f60ecba87581780bc11.js.map
