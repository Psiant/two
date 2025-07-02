(window.webpackChunk = window.webpackChunk || []).push([[46377, 37634], {
    809228: e => {
        e.exports = function e(t, n, o) {
            function r(a, s) {
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
                        return r(t[a][1][e] || e)
                    }
                    ), c, c.exports, e, t, n, o)
                }
                return n[a].exports
            }
            for (var i = void 0, a = 0; a < o.length; a++)
                r(o[a]);
            return r
        }({
            1: [function(e, t, n) {
                var o = e("matches-selector");
                t.exports = function(e, t, n) {
                    for (var r = n ? e : e.parentNode; r && r !== document; ) {
                        if (o(r, t))
                            return r;
                        r = r.parentNode
                    }
                }
            }
            , {
                "matches-selector": 5
            }],
            2: [function(e, t, n) {
                var o = e("closest");
                function r(e, t, n, r) {
                    return function(n) {
                        n.delegateTarget = o(n.target, t, !0),
                        n.delegateTarget && r.call(e, n)
                    }
                }
                t.exports = function(e, t, n, o, i) {
                    var a = r.apply(this, arguments);
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
                var o = e("./is")
                  , r = e("delegate");
                t.exports = function(e, t, n) {
                    if (!e && !t && !n)
                        throw new Error("Missing required arguments");
                    if (!o.string(t))
                        throw new TypeError("Second argument must be a String");
                    if (!o.fn(n))
                        throw new TypeError("Third argument must be a Function");
                    if (o.node(e))
                        return function(e, t, n) {
                            return e.addEventListener(t, n),
                            {
                                destroy: function() {
                                    e.removeEventListener(t, n)
                                }
                            }
                        }(e, t, n);
                    if (o.nodeList(e))
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
                    if (o.string(e))
                        return function(e, t, n) {
                            return r(document.body, e, t, n)
                        }(e, t, n);
                    throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")
                }
            }
            , {
                "./is": 3,
                delegate: 2
            }],
            5: [function(e, t, n) {
                var o = Element.prototype
                  , r = o.matchesSelector || o.webkitMatchesSelector || o.mozMatchesSelector || o.msMatchesSelector || o.oMatchesSelector;
                t.exports = function(e, t) {
                    if (r)
                        return r.call(e, t);
                    for (var n = e.parentNode.querySelectorAll(t), o = 0; o < n.length; ++o)
                        if (n[o] == e)
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
                          , o = document.createRange();
                        o.selectNodeContents(e),
                        n.removeAllRanges(),
                        n.addRange(o),
                        t = n.toString()
                    }
                    return t
                }
            }
            , {}],
            7: [function(e, t, n) {
                function o() {}
                o.prototype = {
                    on: function(e, t, n) {
                        var o = this.e || (this.e = {});
                        return (o[e] || (o[e] = [])).push({
                            fn: t,
                            ctx: n
                        }),
                        this
                    },
                    once: function(e, t, n) {
                        var o = this;
                        function r() {
                            o.off(e, r),
                            t.apply(n, arguments)
                        }
                        return r._ = t,
                        this.on(e, r, n)
                    },
                    emit: function(e) {
                        for (var t = [].slice.call(arguments, 1), n = ((this.e || (this.e = {}))[e] || []).slice(), o = 0, r = n.length; o < r; o++)
                            n[o].fn.apply(n[o].ctx, t);
                        return this
                    },
                    off: function(e, t) {
                        var n = this.e || (this.e = {})
                          , o = n[e]
                          , r = [];
                        if (o && t)
                            for (var i = 0, a = o.length; i < a; i++)
                                o[i].fn !== t && o[i].fn._ !== t && r.push(o[i]);
                        return r.length ? n[e] = r : delete n[e],
                        this
                    }
                },
                t.exports = o
            }
            , {}],
            8: [function(e, t, n) {
                !function(o, r) {
                    if (void 0 !== n)
                        r(t, e("select"));
                    else {
                        var i = {
                            exports: {}
                        };
                        r(i, o.select),
                        o.clipboardAction = i.exports
                    }
                }(this, (function(e, t) {
                    "use strict";
                    var n, o = (n = t) && n.__esModule ? n : {
                        default: n
                    };
                    var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e
                    }
                    : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
                    }
                    ;
                    var i = function() {
                        function e(e, t) {
                            for (var n = 0; n < t.length; n++) {
                                var o = t[n];
                                o.enumerable = o.enumerable || !1,
                                o.configurable = !0,
                                "value"in o && (o.writable = !0),
                                Object.defineProperty(e, o.key, o)
                            }
                        }
                        return function(t, n, o) {
                            return n && e(t.prototype, n),
                            o && e(t, o),
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
                            o.default)(this.fakeElem),
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
                            o.default)(this.target),
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
                                    if (!e || "object" !== (void 0 === e ? "undefined" : r(e)) || 1 !== e.nodeType)
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
                !function(o, r) {
                    if (void 0 !== n)
                        r(t, e("./clipboard-action"), e("tiny-emitter"), e("good-listener"));
                    else {
                        var i = {
                            exports: {}
                        };
                        r(i, o.clipboardAction, o.tinyEmitter, o.goodListener),
                        o.clipboard = i.exports
                    }
                }(this, (function(e, t, n, o) {
                    "use strict";
                    var r = s(t)
                      , i = s(n)
                      , a = s(o);
                    function s(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    }
                    var l = function(e) {
                        function t(n, o) {
                            !function(e, t) {
                                if (!(e instanceof t))
                                    throw new TypeError("Cannot call a class as a function")
                            }(this, t);
                            var r = function(e, t) {
                                if (!e)
                                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                return !t || "object" != typeof t && "function" != typeof t ? e : t
                            }(this, e.call(this));
                            return r.resolveOptions(o),
                            r.listenClick(n),
                            r
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
                            this.clipboardAction = new r.default({
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
    597052: (e, t, n) => {
        "use strict";
        n.r(t),
        n.d(t, {
            default: () => o
        });
        const o = {
            button: "a116d0ed7",
            icon: "a782bc95e",
            "content-wrapper": "a432e158c",
            contents: "eac22502",
            state: "e43c5768"
        }
    }
    ,
    562584: (e, t, n) => {
        "use strict";
        n.r(t),
        n.d(t, {
            default: () => o
        });
        const o = {
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
    937634: (e, t, n) => {
        "use strict";
        var o = n(331542);
        t.createRoot = o.createRoot,
        t.hydrateRoot = o.hydrateRoot
    }
    ,
    312309: (e, t, n) => {
        "use strict";
        n.r(t),
        n.d(t, {
            QStoJSON: () => d,
            getParam: () => _,
            getQueryParam: () => p,
            getQueryString: () => h,
            removeQueryParam: () => m,
            setParam: () => f,
            setQueryParam: () => g
        });
        var o = n(661533)
          , r = n.n(o)
          , i = n(55188)
          , a = n.n(i)
          , s = n(577486);
        function l(e, t) {
            return null != t && "undefined" != typeof Symbol && t[Symbol.hasInstance] ? !!t[Symbol.hasInstance](e) : e instanceof t
        }
        function c(e) {
            return e.indexOf("?") >= 0 ? e.split("?")[1] : e
        }
        function u(e) {
            try {
                e = decodeURIComponent(e.toString().replace(/\+/gi, " "))
            } catch (t) {
                e = ""
            }
            return e.toString()
        }
        function d(e) {
            var t, n, o = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return "string" == typeof e ? o ? function(e, t) {
                var n, o = {}, i = c(e);
                return a().isObject(t) || (t = {
                    to_arrays: !1
                }),
                i ? (r().each(i.split("&"), (function(e, r) {
                    var i;
                    r = r.split("=");
                    try {
                        r[0] = decodeURIComponent(r[0])
                    } catch (e) {
                        return console.error(e),
                        o
                    }
                    if (void 0 !== o[r[0]])
                        l(o[r[0]], Array) ? o[r[0]].push(u(r[1] || "")) : (n = o[r[0]].toString(),
                        o[r[0]] = [n, u(r[1] || "")]);
                    else if (r[0].indexOf("[", 1) > 0) {
                        (i = r[0].split("["))[i.length] = u(r[1]);
                        var a = 0
                          , s = function(e, n) {
                            if (a < n.length - 1)
                                if (n[a] = n[a].replace("]", ""),
                                "" === n[a])
                                    Object.keys(e).length ? e[Object.keys(e).length] = n[n.length - 1] : e[0] = n[n.length - 1];
                                else {
                                    e[n[a]] = e[n[a]] || (t.to_arrays && "]" === n[a + 1] ? [] : {});
                                    var o = e[n[a]];
                                    ++a == n.length - 1 ? e[n[a - 1]] = n[a] : s(o, n)
                                }
                        };
                        s(o, i)
                    } else
                        o[r[0]] = function(e) {
                            try {
                                e = decodeURIComponent(e.toString().replace(/\+/gi, " "))
                            } catch (t) {
                                e = ""
                            }
                            try {
                                return JSON.parse(e)
                            } catch (t) {
                                return e.toString()
                            }
                        }(r[1] || "")
                }
                )),
                o) : o
            }(e, o) : function(e) {
                var t, n = {}, o = c(e);
                if (!o)
                    return n;
                try {
                    r().each(o.split("&"), (function(e, o) {
                        (o = o.split("="))[0] = decodeURIComponent(o[0]),
                        void 0 === n[o[0]] ? n[o[0]] = u(o[1] || "") : l(n[o[0]], Array) ? n[o[0]].push(u(o[1] || "")) : (t = n[o[0]].toString(),
                        n[o[0]] = [t, u(o[1] || "")])
                    }
                    ))
                } catch (e) {
                    return console.error(e),
                    {}
                }
                return n
            }(e) : (t = e,
            n = [],
            a().each(t, (function(e, t) {
                "object" == typeof e ? a().each(e, (function(e, o) {
                    n.push("".concat(t, "[").concat(isNaN(o, 10) ? o : "", "]=").concat(encodeURIComponent(e)))
                }
                )) : n.push("".concat(t, "=").concat(encodeURIComponent(e)))
            }
            )),
            n.join("&"))
        }
        function h() {
            var e = window.location.href.replace(/.*\?/, "").toString();
            return e === window.location.href && (e = ""),
            e || ""
        }
        function _(e) {
            var t, n = window.location.pathname || "", o = new s.UnsafeRegExp("".concat(e.toString(), "/([^\\/]+)"),"i");
            return !(!n.length || !(t = n.match(o)) || 2 !== t.length) && 0 | (t[1] || 1)
        }
        function f(e, t) {
            var n = window.location.pathname
              , o = h();
            return t = t || {},
            a().each(e, (function(e, t) {
                _(t) ? n = n.replace(new s.UnsafeRegExp("(".concat(t, ")/([^/]?)+(/)?(.*)")), e && e.toString().length ? "$1/".concat(e, "/$4") : "$4") : e && e.toString().length && ("/" !== n.charAt(n.length - 1) && (n += "/"),
                n += "".concat(t, "/").concat(e, "/"))
            }
            )),
            n + (!0 !== t.only_path && o.length ? "?".concat(o) : "")
        }
        function m(e, t) {
            var n, o = (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}).shouldDecodeValues, r = void 0 === o || o, i = ((a().isUndefined(t) ? h() : t.replace(/^\?/, "")).replace(/\+/g, " ") || "").split(/[&;]/g);
            a().isArray(e) || (e = [e]);
            try {
                a().each(e, (function(e, t) {
                    for (n = "".concat(decodeURIComponent(e), "="),
                    t = i.length; t-- > 0; )
                        -1 !== (r ? decodeURIComponent(i[t]) : i[t]).lastIndexOf(n, 0) && i.splice(t, 1)
                }
                ))
            } catch (e) {
                console.error(e)
            }
            return t && 0 === t.indexOf("?") ? "?".concat(i.join("&")) : i.join("&")
        }
        function p(e) {
            var t = "?".concat(h().replace(/\[/g, "%5B").replace(/\]/g, "%5D"));
            e = e.replace(/\[/g, "%5B").replace(/\]/g, "%5D");
            var n, o = "[\\?&]".concat(e, "=([^&#]*)"), r = new s.UnsafeRegExp(o).exec(t);
            if (a().isNull(r))
                return !1;
            n = "phone" === e ? r[1] : r[1].replace(/\+/g, " ");
            try {
                n = decodeURIComponent(n)
            } catch (e) {
                return console.error(e),
                !1
            }
            return n
        }
        function g(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
              , n = window.location.pathname
              , o = a().isString(t.query_string) ? t.query_string : h();
            return 0 !== o.indexOf("?") && (o = "?".concat(o)),
            a().each(e, (function(e, t) {
                var n = "";
                if ("?" !== o && (n = -1 === o.indexOf("?") ? "?" : "&"),
                o = m(t, o),
                "object" == typeof e)
                    o = "".concat(o + n + t, "=").concat(e.join("&".concat(t, "=")));
                else {
                    e = encodeURIComponent(e);
                    var r = new s.UnsafeRegExp("([?|&])".concat(t.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&"), "=.*?(&|$)"),"ig")
                      , i = o.match(r);
                    if (i)
                        if (e)
                            o = o.replace(r, "$1".concat(t, "=").concat(e, "$2"));
                        else {
                            var a = i[0]
                              , l = a[0]
                              , c = "";
                            "&" === a[a.length - 1] && (c = l),
                            o = o.replace(r, c)
                        }
                    else
                        o += e ? "".concat(n + t, "=").concat(e) : ""
                }
            }
            )),
            0 !== o.indexOf("?") && (o = "?".concat(o)),
            !1 === t.question_mark && (o = o.replace(/^\?/, "")),
            (!0 === t.only_query_string ? "" : n) + ("?" === o ? "" : o.replace(/^\?&=?/, "?"))
        }
        var v = "../build/transpiled/common/urlparams";
        window.define(v, (function() {
            var e = "undefined"
              , n = typeof t === e ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === e ? typeof module === e ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : t;
            return n && n.default || n
        }
        )),
        window.require([v])
    }
    ,
    889378: (e, t, n) => {
        "use strict";
        n.r(t),
        n.d(t, {
            default: () => f
        });
        var o = n(661533)
          , r = n.n(o)
          , i = n(55188)
          , a = n.n(i)
          , s = n(460159)
          , l = n.n(s)
          , c = n(643095)
          , u = n(521466)
          , d = n(564638)
          , h = a().template('<div <% if (scrollerId) { %>id="<%= scrollerId %>"<% } %> class="modal-scroller custom-scroll"><div class="modal-body modal-body-loading <% if (float_animation) { %>modal-body-float-animation<% } %>"></div></div>')
          , _ = a().template('<div class="default-overlay modal-overlay <% if (!default_overlay) { %> modal-overlay--filled <% } %>"><span class="modal-overlay__spinner spinner-icon spinner-icon-abs-center"></span></div>');
        n(247267);
        const f = u.default.extend({
            className: "modal",
            _classes: function() {
                return {
                    accept_button: "js-modal-accept",
                    body: "modal-body",
                    body_inner: "modal-body__inner",
                    close_button: "modal-body__close",
                    modal_error: "js-modal-error",
                    overlay: "modal-overlay",
                    scroller: "modal-scroller",
                    try_again_button: "js-modal-try-again"
                }
            },
            _selectors: function() {
                return {
                    cancel_button: ".modal-body__actions .button-cancel",
                    overlay_spinner: ".modal-overlay .modal-overlay__spinner"
                }
            },
            events: function() {
                var e = a().result(u.default.prototype, "events", {});
                return e["click ".concat(this._selector("try_again_button"))] = "onModalTryAgainClick",
                e["click ".concat(this._selector("accept_button"))] = "onModalAcceptClick",
                e["click ".concat(this._selector("close_button"))] = "onModalCloseClick",
                e["click ".concat(this._selector("cancel_button"))] = "onModalCancelClick",
                e["click ".concat(this._selector("scroller"))] = "onModalScrollerClick",
                e["mousedown ".concat(this._selector("scroller"))] = "onModalScrollerMouseDown",
                e["modal:loaded ".concat(this._selector("body"))] = "onModalLoaded",
                e["modal:centrify ".concat(this._selector("body"))] = "onModalCentrify",
                e["modal:need-page-reload ".concat(this._selector("body"))] = "onPageReloadAfterModalClose",
                e
            },
            document_events: function() {
                return a().result(u.default.prototype, "document_events", {
                    "page:changed": "onPageChanged",
                    keydown: "onModalKeydown"
                })
            },
            _setOptions: function(e) {
                return this.options = r().extend({
                    class_name: "modal-list",
                    can_centrify: !1,
                    init: a().noop,
                    destroy: a().noop,
                    tryAgain: a().noop,
                    container: document.body,
                    disable_overlay_click: !1,
                    disable_escape_keydown: !1,
                    disable_enter_keydown: !1,
                    disable_overlay: !1,
                    init_animation: !1,
                    default_overlay: !1,
                    preload_templates: [],
                    focus_element: ".js-modal-accept",
                    without_offsets_on_centify: !1,
                    onBeforeInit: null,
                    onModalPosition: null,
                    scrollerId: null
                }, e || {}),
                this.disable_overlay_click = this.options.disable_overlay_click,
                this._orig_disable_overlay_click = this.disable_overlay_click,
                this
            },
            initialize: function(e) {
                var t = [];
                u.default.prototype.initialize.call(this),
                this._setOptions(e).render(),
                APP.is_touch_device && this.options.can_centrify && a().delay(a().bind(this.onModalCentrify, this), 500),
                this.options.disable_resize || this._$window.on("resize".concat(this.ns), a().throttle(a().bind(this.onModalCentrify, this), d.WINDOW_RESIZE_THROTTLE_DELAY)),
                this.delegateEvents();
                var n = a().bind(this.options.init, this, this._elem("body"));
                return this.options.preload_templates.length && t.push(l()._preload(this.options.preload_templates)()),
                this.options.onBeforeInit && t.push(this.options.onBeforeInit()),
                t.length ? Promise.all(t).then((function() {
                    n()
                }
                )) : n(),
                this
            },
            destroy: function() {
                if (this.$overlay.hasClass("permanent-overlay") || !1 === this.options.destroy() || this._destroyed)
                    return !1;
                this._destroyed = !0,
                this.$overlay.trigger("overlay:hide", {
                    callback: a().bind(u.default.prototype.destroy, this, !0)
                }),
                this._elem("body").remove(),
                this.options.need_page_reload && this._$document.trigger("page:reload")
            },
            setNS: function() {
                this.ns = ".modal:core.".concat(a().uniqueId("modal_"))
            },
            render: function() {
                return this.$el.addClass(this.options.class_name),
                this.$el.html(h({
                    float_animation: this.options.init_animation,
                    scrollerId: this.options.scrollerId || ""
                })),
                this.$modal = this.$el,
                this.$overlay = r()(_({
                    default_overlay: this.options.default_overlay
                })),
                this.$el.append(this.$overlay),
                r()(this.options.container).append(this.$el),
                r()(".modal").length > 1 && this.$overlay.css(Modernizr.prefixed("transition"), "none"),
                this.options.disable_overlay || this.$overlay.trigger("overlay:show"),
                this.$el.find(this.options.focus_element).focus(),
                this.$el.prepareTransition(),
                this
            },
            onModalScrollerMouseDown: function(e) {
                e.target === this._elem("scroller").get(0) && (this._scroller_mousedown = !0,
                setTimeout((function() {
                    self._scroller_mousedown = !1
                }
                ), 100))
            },
            onModalAcceptClick: function() {
                this._elem("overlay_spinner").show()
            },
            onModalTryAgainClick: function() {
                this._elem("body").attr("class", this._orig_class_name_before_error_success).css("width", ""),
                this._orig_class_name_before_error_success = "",
                this._findElem("modal_error").remove(),
                this._findElem("body_inner").show(),
                this.onModalCentrify(),
                this.options.tryAgain.call(this)
            },
            onModalKeydown: function(e) {
                var t = r()(".modal:visible", document.body)
                  , n = r()(e.target);
                if (t.length && a().findIndex(t, (function(e) {
                    return e.isSameNode(this.el)
                }
                ), this) === t.length - 1)
                    switch (e.keyCode) {
                    case 13:
                        if (this.options.disable_enter_keydown)
                            return;
                        n.closest(".modal").length && n.is(":input, [contenteditable]") && !t.hasClass("js-modal-confirm") || (n.blur(),
                        e.stopImmediatePropagation(),
                        this._findElem("accept_button").trigger("click"));
                        break;
                    case 27:
                        this.disable_overlay_click || this.options.disable_escape_keydown || this.destroy()
                    }
            },
            onModalCloseClick: function(e) {
                e.stopPropagation(),
                this.destroy()
            },
            onModalCancelClick: function(e) {
                this.options.disable_cancel_click || (this.destroy(),
                e.stopPropagation())
            },
            onModalScrollerClick: function(e) {
                var t = r()(e.target);
                (t.hasClass("modal-scroller") && this._scroller_mousedown && !this.disable_overlay_click || t.closest(".button-cancel").length && !this.options.disable_cancel_click) && this.destroy()
            },
            onPageChanged: function() {
                !1 !== this.options.can_destroy && this.destroy()
            },
            onModalLoaded: function() {
                this._elem("body").show().removeClass("modal-body-loading"),
                this._elem("overlay_spinner").hide()
            },
            onModalCentrify: function() {
                var e = this._$window.width() - 65;
                if (!this.$el.is(":hidden")) {
                    this.onModalLoaded();
                    var t = this._findElem("body")
                      , n = t.get(0)
                      , o = n ? n.offsetHeight : 0
                      , r = n ? n.parentNode.offsetHeight : 0
                      , i = this.options.without_offsets_on_centify ? 0 : 130;
                    if (a().isFunction(this.options.onModalPosition))
                        this.options.onModalPosition(t);
                    else if (o < r - i) {
                        var s = n.offsetWidth;
                        t.css({
                            marginTop: Math.ceil(-1 * (r / 2 - o / 2 + o)) + parseFloat(t.css("top")) % 1
                        }).css({
                            marginLeft: Math.floor(s / 2 * -1) + parseFloat(t.css("left")) % 1
                        }).removeClass("modal-body-relative").removeClass("modal-body-relative--small-screen")
                    } else
                        t.addClass("modal-body-relative").css({
                            marginTop: "",
                            marginLeft: ""
                        }),
                        n && n.offsetWidth + 130 > e ? t.addClass("modal-body-relative--small-screen") : t.removeClass("modal-body-relative--small-screen");
                    this.options.init_animation && t.prepareTransition().removeClass("modal-body-float-animation"),
                    this.options.centrify_animation && this.centrifyAnimation()
                }
            },
            centrifyAnimation: function(e) {
                !1 === e ? this._elem("body").removeClass("modal-body-centrified") : (this._elem("body").offset(),
                this._elem("body").addClass("modal-body-centrified"))
            },
            show: function() {
                this.$el.show()
            },
            hide: function() {
                this.$el.hide()
            },
            getScroller: function() {
                return this._elem("scroller")
            },
            showError: l()._preload(["/tmpl/common/modal/error.twig"], "_showError"),
            _showError: function(e, t) {
                this._orig_class_name_before_error_success = this._elem("body").attr("class"),
                this.disable_overlay_click = this._orig_disable_overlay_click,
                t = !a().isBoolean(t) || t,
                this.centrifyAnimation(!1),
                this._elem("overlay_spinner").hide(),
                this._findElem("body_inner").hide(),
                this._elem("body").attr("class", this._class("body")).first().show().width(500).append(l()({
                    ref: "/tmpl/common/modal/error.twig"
                }).render({
                    text: e || !1,
                    no_retry: !t
                })).trigger("modal:loaded").trigger("modal:centrify"),
                (0,
                c.sentryLogErrorModal)(e)
            },
            showSuccess: l()._preload(["/tmpl/common/modal/success.twig"], "_showSuccess"),
            _showSuccess: function(e, t, n) {
                this._orig_class_name_before_error_success = this._elem("body").attr("class"),
                this.disable_overlay_click = this._orig_disable_overlay_click,
                this.centrifyAnimation(!1),
                this._elem("overlay_spinner").hide(),
                this._findElem("body_inner").hide(),
                this._elem("body").first().attr("class", this._class("body")).show().width(500).append(l()({
                    ref: "/tmpl/common/modal/success.twig"
                }).render({
                    msg: e || !1
                })).trigger("modal:loaded").trigger("modal:centrify"),
                a().delay(a().bind((function() {
                    this._elem("body").attr("class", this._orig_class_name_before_error_success),
                    this._orig_class_name_before_error_success = "",
                    this.destroy(),
                    a().isFunction(t) && t()
                }
                ), this), n || 500)
            },
            requestStart: function() {
                return this.disable_overlay_click = !0,
                this._elem("overlay_spinner").show(),
                this._elem("body").hide(),
                this
            },
            shakeError: function() {
                this.disable_overlay_click = this._orig_disable_overlay_click,
                this._elem("overlay_spinner").hide(),
                this._elem("body").one(APP.animation_event, a().bind((function(e) {
                    r()(e.currentTarget).removeClass("animated shake")
                }
                ), this)).addClass("animated shake")
            },
            onPageReloadAfterModalClose: function() {
                this.options.need_page_reload = !0
            }
        });
        var m = "../build/transpiled/components/base/modal";
        window.define(m, (function() {
            var e = "undefined"
              , n = typeof t === e ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === e ? typeof module === e ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : t;
            return n && n.default || n
        }
        )),
        window.require([m])
    }
    ,
    179013: (e, t, n) => {
        "use strict";
        n.r(t),
        n.d(t, {
            default: () => g
        });
        var o = n(661533)
          , r = n.n(o)
          , i = n(55188)
          , a = n.n(i)
          , s = n(460159)
          , l = n.n(s)
          , c = n(880774)
          , u = n(937634)
          , d = n(521466)
          , h = n(889378)
          , _ = n(339095)
          , f = n(827378)
          , m = "/ajax/sync/calendars/"
          , p = ["google_calendar"];
        const g = d.default.extend({
            events: {
                "click .js-calendar-sync-toggler": "_onStateToggle",
                "click .js-calendar-sync-setup": "_onCalendarWidgetSetup"
            },
            _classes: function() {
                return {
                    calendar_status: "js-calendar-sync-status",
                    calendar_status_custom_enable: "js-calendar-sync-status-custom-enable",
                    calendar_status_custom_enabled: "js-calendar-sync-status-custom-enabled",
                    calendar_item: "js-calendar-sync-item",
                    calendar_error: "js-calendar-error"
                }
            },
            _selectors: function() {
                return {
                    googleButtonContainer: "#google-button-container"
                }
            },
            initialize: function() {
                d.default.prototype.initialize.apply(this, arguments)
            },
            _requestSystemCalendars: function() {
                return r().ajax({
                    url: "".concat(m, "info/?source=v3"),
                    type: "GET",
                    dataType: "json"
                })
            },
            showModal: function() {
                this.modal = new h.default({
                    class_name: "modal-list modal-calendar-sync",
                    preload_templates: ["/tmpl/todo/calendar/modal_sync.twig"],
                    init: a().bind((function(e) {
                        this._requestSystemCalendars().done(a().bind((function(t) {
                            this.system_calendars = t._embedded,
                            this.widget_calendars = this._getWidgetCalendars(),
                            this.setElement(e),
                            e.trigger("modal:loaded").html(l()({
                                ref: "/tmpl/todo/calendar/modal_sync.twig"
                            }).render({
                                system_calendars: this.system_calendars,
                                widget_calendars: this._prepareWidgetsRender(this.widget_calendars),
                                lang: APP.lang
                            })).trigger("modal:centrify"),
                            this._initGoogleButton()
                        }
                        ), this))
                    }
                    ), this)
                })
            },
            _initGoogleButton: function() {
                var e = this._findElem("googleButtonContainer")[0];
                if (e) {
                    this.googleButtonRoot = u.createRoot(e);
                    var t = f.createElement(_.default, {
                        buttonContent: (0,
                        c.i18n)("Continue with Google")
                    });
                    this.googleButtonRoot.render(t)
                }
            },
            destroy: function() {
                this.googleButtonRoot && (this.googleButtonRoot.unmount(),
                this.googleButtonRoot = null),
                d.default.prototype.destroy.apply(this, arguments)
            },
            _getWidgetCalendars: function() {
                var e = APP.widgets.list;
                return a().reduce(a().keys(e), (function(t, n) {
                    var o = e[n]
                      , r = o.callbacks && o.callbacks.calendarSync;
                    return r && (t[n] = r()),
                    t
                }
                ), {})
            },
            _onSuccessWidgetLoading: function(e, t) {
                var n = this.$el.find('[data-calendar-id="'.concat(e, '"]'));
                t ? this._setEnabledStatus(n) : this._setDisabledStatus(n),
                n.removeClass("js-loading")
            },
            _onFailedWidgetLoading: function(e, t) {
                var n = this.$el.find('[data-calendar-id="'.concat(e, '"]'))
                  , o = n.find(this._selector("calendar_error"));
                n.addClass("js-error"),
                o.text(t || APP.lang.error)
            },
            _prepareWidgetsRender: function(e) {
                var t = this;
                return a().reduce(a().keys(e), (function(n, o) {
                    var r = e[o]
                      , i = APP.widgets.list[o].params
                      , s = a().isFunction(r.onSetup)
                      , l = !a().isBoolean(r.enabled)
                      , c = !l && r.enabled;
                    return l && r.enabled.then((function(e) {
                        t._onSuccessWidgetLoading(o, e)
                    }
                    ), (function(e) {
                        t._onFailedWidgetLoading(o, e)
                    }
                    )),
                    n[o] = a().extend({
                        is_setup_possible: s,
                        is_loading: l,
                        is_enabled: c,
                        icon: "".concat(i.path, "/images/logo_small.png?v=").concat(i.version)
                    }, a().pick(r, "name", "description")),
                    n
                }
                ), {})
            },
            _showErrorModal: function(e) {
                this._error_modal || (this._error_modal = this._addComponent(h.default, {
                    destroy: a().bind((function() {
                        delete this._error_modal
                    }
                    ), this)
                }).showError(e, !1))
            },
            _enableCalendar: function(e) {
                var t = e.data("calendar-id");
                switch (e.data("calendar-origin")) {
                case "system":
                    return window.open(this.system_calendars[t]._links.href),
                    r().Deferred().resolve().promise();
                case "widget":
                    return this.widget_calendars[t].onEnable();
                default:
                    throw new Error("Unknown calendar origin.")
                }
            },
            _disableCalendar: function(e) {
                var t = e.data("calendar-id");
                switch (e.data("calendar-origin")) {
                case "system":
                    return r().ajax({
                        url: "".concat(m, "disable/"),
                        type: "POST",
                        data: {
                            calendar_type: t,
                            current_auth_email: this.system_calendars[t].current_auth_email
                        },
                        dataType: "json"
                    });
                case "widget":
                    return this.widget_calendars[t].onDisable();
                default:
                    throw new Error("Unknown calendar origin.")
                }
            },
            _setEnabledStatus: function(e) {
                var t = e.attr("data-calendar-id")
                  , n = a().includes(p, t)
                  , o = e.find(this._selector("calendar_status"));
                n || o.html(APP.lang["Fully on"]),
                e.addClass("js-active")
            },
            _setDisabledStatus: function(e) {
                var t = e.attr("data-calendar-id")
                  , n = a().includes(p, t)
                  , o = e.find(this._selector("calendar_status"));
                n || o.html(APP.lang.enable),
                e.removeClass("js-active")
            },
            _onStateToggle: function(e) {
                var t = this
                  , n = r()(e.currentTarget).closest(this._selector("calendar_item"));
                n.hasClass("js-active") ? this._disableCalendar(n).then((function() {
                    t._setDisabledStatus(n)
                }
                ), (function(e) {
                    t._showErrorModal(e)
                }
                )) : this._enableCalendar(n).then((function() {
                    t._setEnabledStatus(n)
                }
                ), (function(e) {
                    t._showErrorModal(e)
                }
                ))
            },
            _onCalendarWidgetSetup: function(e) {
                var t = r()(e.currentTarget).closest(this._selector("calendar_item")).data("calendar-id");
                this.widget_calendars[t].onSetup()
            }
        });
        var v = "../build/transpiled/components/base/todo_sync";
        window.define(v, (function() {
            var e = "undefined"
              , n = typeof t === e ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === e ? typeof module === e ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : t;
            return n && n.default || n
        }
        )),
        window.require([v])
    }
    ,
    391753: (e, t, n) => {
        "use strict";
        n.r(t),
        n.d(t, {
            default: () => A
        });
        var o = n(661533)
          , r = n.n(o)
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
          , m = n(804129)
          , p = n(189967)
          , g = n(886965)
          , v = n(237262)
          , y = n(369409)
          , b = n(521466)
          , w = n(745277)
          , C = n(846257)
          , k = n(988050);
        function E(e, t, n, o, r, i, a) {
            try {
                var s = e[i](a)
                  , l = s.value
            } catch (e) {
                return void n(e)
            }
            s.done ? t(l) : Promise.resolve(l).then(o, r)
        }
        var S = ["leads", "catalogs"]
          , P = "/settings/profile/";
        const A = new (b.default.extend({
            el: r()(document),
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
                for (var e, t, n = this, o = arguments.length, r = new Array(o), i = 0; i < o; i++)
                    r[i] = arguments[i];
                b.default.prototype.initialize.apply(this, r),
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
                v.getRights)("oper_day_user_tracking") && (this.operday = this._addComponent(w.default, {
                    $holder: this._elem("operday_holder"),
                    start_time: Math.floor(Date.now() / 1e3),
                    onShowMenuAndBlock: a().bind(this.handleShowMenuAndBlock, this),
                    onUnblockMenu: a().bind(this.handleUnblockMenu, this),
                    onBlockMenu: a().bind(this.handleBlockMenu, this),
                    onCloseMenu: a().bind(this.handleCloseMenu, this)
                })),
                (0,
                m.isAmoChatsFullEnabled)() || (t = h().subscribe("hover_menu:show", a().bind((function(e, n) {
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
                        var o = e.help_center_menu_button.getBoundingClientRect().top
                          , r = e._elem("nav_menu_wrapper").height();
                        e.onMenuScroll({
                            currentTarget: e._elem("nav_menu_wrapper")
                        }, o - r + C.MENU_TIP_PADDING)
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
                  , o = t.replace(/"[^,]*"/, '"' + n + '"');
                this._elem("avatar_overlay").hide(),
                this._elem("avatar").css("background-image", o)
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
                r()("#sidebar").find(".filter__list").append(n)
            },
            handleHelperPositionChange: function(e, t) {
                if (e) {
                    var n, o = e.getBoundingClientRect(), r = t.height();
                    n = o.top + o.height - r + 9,
                    o.height + o.top < this._$window.height() && (t.css("top", "".concat(n, "px")),
                    t.css("bottom", "unset"))
                } else
                    this.setHelperBottomOffset(t)
            },
            removeMenuItem: function(e) {
                r()("#".concat(e)).remove()
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
                    var o = function() {
                        a().isUndefined(APP.inbox) ? setTimeout(o, 500) : (e._$body.removeClass("page-loading"),
                        (0,
                        p.openSupportChat)(),
                        history.replaceState(null, null, " "))
                    };
                    o()
                }
            },
            onAccountSelectionClick: function(e) {
                this._elem("nav_top").removeClass("expanded"),
                r()(e.currentTarget).hide().removeClass("account_selection"),
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
                window.location.href = r()(e.currentTarget).find("a").attr("href")
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
                    t.location = P
                } else
                    APP.router.navigate(P, {
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
                    g.isCustomers)())
                        return;
                    (0,
                    p.openSupportChat)(!0)
                } else
                    (0,
                    p.openSupportChat)();
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
                return this.$notifications || (this.$notifications = r()("#sidebar-notifications")),
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
                  , o = this;
                t && Promise.all([n.e(31542), n.e(81905)]).then(n.bind(n, 881905)).then((function(n) {
                    var r = n.default;
                    o._addComponent(r, {
                        el: o._elem("themes_switcher")
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
                this.pending_hover_initialization = new Promise((function(o) {
                    e.hover_menu || (0,
                    m.isAmoChatsFullEnabled)() || Promise.all([n.e(68592), n.e(95882), n.e(17331)]).then(n.bind(n, 917331)).then((function(t) {
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
                        o()
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
                    is_sub_item: S.includes(t[0]) && !a().isUndefined(t[1]),
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
                var t = r()(e.currentTarget).scrollTop() > 0;
                this._elem("nav_menu_up").toggleClass("nav__menu-scroller-showed", t),
                this._elem("nav_menu_down").toggleClass("nav__menu-scroller-showed", !t)
            },
            _linearToPower: function(e, t, n, o) {
                var r = (n[1] - n[0]) / (Math.pow(t[0], o) + Math.pow(t[1], o))
                  , i = n[1] - Math.pow(t[1], o) * r;
                return r * Math.pow(e, o) + i
            },
            _stopSmoothScrollInterval: function() {
                clearInterval(this.smooth_scroll_interval),
                this.smooth_scroll_interval = null
            },
            _reinitSmoothScrollInterval: function(e, t, n) {
                var o = Math.floor(this._linearToPower(e, [0, 100], [25, 1], .5))
                  , r = this._elem("nav_menu_wrapper");
                this._stopSmoothScrollInterval(),
                this.smooth_scroll_interval = setInterval(a().bind((function() {
                    this._scrollNotEnd(n) ? r.scrollTop(r.scrollTop() + t) : this.onMouseEnter(n)
                }
                ), this), o)
            },
            offSmoothScroll: function() {
                this._stopSmoothScrollInterval(),
                this._elem("nav_menu_up").off(".smooth_scroll"),
                this._elem("nav_menu_down").off(".smooth_scroll")
            },
            startSmoothScroll: function(e) {
                var t = r()(e.currentTarget)
                  , n = t.height()
                  , o = "nav_menu_up" === t.attr("id") ? -3 : 3
                  , i = 100 / n * ("nav_menu_up" === t.attr("id") ? n - e.offsetY : e.offsetY);
                this._reinitSmoothScrollInterval(i, o, e)
            },
            _scrollNotEnd: function(e) {
                var t = r()(e.currentTarget)
                  , n = this._elem("nav_menu_wrapper")
                  , o = n[0].scrollHeight
                  , i = n[0].scrollTop
                  , a = n[0].offsetHeight
                  , s = t.attr("id");
                return i > 0 && "nav_menu_up" === s || i + a < o && "nav_menu_down" === s
            },
            onMouseEnterInitHoverMenu: function(e) {
                var t = performance.now();
                this.initHoverMenu((function() {
                    r()(e.target).trigger("mouseenter", [{
                        requestAt: t
                    }])
                }
                ))
            },
            onMouseEnter: function(e) {
                var t, n = r()(e.currentTarget), o = this._elem("nav_menu_wrapper"), i = this._elem("nav_menu").outerHeight(!0), s = o.height();
                if (this.offSmoothScroll(),
                this._scrollNotEnd(e))
                    return n.on("mousemove.smooth_scroll", a().bind(this.startSmoothScroll, this)),
                    n.on("mouseleave.smooth_scroll", a().bind(this.offSmoothScroll, this)),
                    this._elem("nav_menu_up").addClass("nav__menu-scroller-showed"),
                    void this._elem("nav_menu_down").addClass("nav__menu-scroller-showed");
                t = "nav_menu_down" === n.attr("id") ? i - s : 0,
                i > s && (o.trigger("menu:scroll", [t]),
                e.stopPropagation())
            },
            onMouseLeave: function() {
                this._$document.trigger("menu:scroll:revert")
            },
            onMenuScrollRevert: function() {
                var e = this._elem("nav_menu")
                  , t = this._elem("nav_menu_wrapper")
                  , n = e.children(".nav__menu__item-selected")
                  , o = Math.floor(t.height() / 72)
                  , i = n.length ? n[0].offsetTop - 72 * Math.floor(o / 2) : 0;
                APP.is_touch_device || a().delay((function() {
                    r()("#sidebar").hasClass("aside-expanded") || t.trigger("menu:scroll", [i])
                }
                ), 150)
            },
            onMenuScrollInit: function() {
                var e = this._elem("nav_menu_wrapper").get(0)
                  , t = this._elem("nav_menu_wrapper").scrollTop()
                  , n = t > 0
                  , o = e && e.scrollHeight > e.offsetHeight && e.scrollHeight !== e.offsetHeight + t;
                this._elem("nav_menu_up").toggleClass("nav__menu-scroller-showed", n),
                this._elem("nav_menu_down").toggleClass("nav__menu-scroller-showed", o),
                o && this._$document.trigger("menu:scroll:revert")
            },
            onMenuScroll: function(e, t) {
                var n = r()(e.currentTarget)
                  , o = n[0].scrollHeight > n[0].offsetHeight
                  , i = t > 0 && o
                  , a = t + n.height() < n.children(".nav__menu").outerHeight(!0) && o;
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
                  , n = r()(e.currentTarget)
                  , o = n.data("entity");
                if (this.toggle_menu_blocked)
                    return !1;
                e.stopPropagation(),
                e.ctrlKey || e.metaKey || (e.preventDefault(),
                APP.is_touch_device ? this.initHoverMenu().then((function() {
                    t.hover_menu.checkTouchClick(e, o).done((function() {
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
                        var n, o, r, i, a = {
                            label: 0,
                            sent: function() {
                                if (1 & r[0])
                                    throw r[1];
                                return r[1]
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
                                            o && (r = 2 & i[0] ? o.return : i[0] ? o.throw || ((r = o.return) && r.call(o),
                                            0) : o.next) && !(r = r.call(o, i[1])).done)
                                                return r;
                                            switch (o = 0,
                                            r && (i = [2 & i[0], r.value]),
                                            i[0]) {
                                            case 0:
                                            case 1:
                                                r = i;
                                                break;
                                            case 4:
                                                return a.label++,
                                                {
                                                    value: i[1],
                                                    done: !1
                                                };
                                            case 5:
                                                a.label++,
                                                o = i[1],
                                                i = [0];
                                                continue;
                                            case 7:
                                                i = a.ops.pop(),
                                                a.trys.pop();
                                                continue;
                                            default:
                                                if (!((r = (r = a.trys).length > 0 && r[r.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                                                    a = 0;
                                                    continue
                                                }
                                                if (3 === i[0] && (!r || i[1] > r[0] && i[1] < r[3])) {
                                                    a.label = i[1];
                                                    break
                                                }
                                                if (6 === i[0] && a.label < r[1]) {
                                                    a.label = r[1],
                                                    r = i;
                                                    break
                                                }
                                                if (r && a.label < r[2]) {
                                                    a.label = r[2],
                                                    a.ops.push(i);
                                                    break
                                                }
                                                r[2] && a.ops.pop(),
                                                a.trys.pop();
                                                continue
                                            }
                                            i = t.call(e, a)
                                        } catch (e) {
                                            i = [6, e],
                                            o = 0
                                        } finally {
                                            n = r = 0
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
                    }(this, (function(o) {
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
                    return new Promise((function(o, r) {
                        var i = t.apply(e, n);
                        function a(e) {
                            E(i, o, r, a, s, "next", e)
                        }
                        function s(e) {
                            E(i, o, r, a, s, "throw", e)
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
                k.get)("LAST_PLACE_DEALS")) || void 0 === t ? void 0 : t.startsWith("list")))
                    return e;
                var n = e.split("/");
                return n.splice(2, 0, "list"),
                n.join("/")
            },
            onItemDelete: function(e, t, n) {
                var o;
                switch (t) {
                case "leads":
                case "catalogs":
                    (o = this._elem("nav_item_by_entity", "".concat(t, "_").concat(n.id))).hasClass(this._class("item_selected")) && (this.$_selected_item = this._elem("nav_item_by_entity", t),
                    this.$_selected_item.addClass(this._class("item_selected"))),
                    o.remove(),
                    this._dropElemCache()
                }
            },
            _getCompleteMatchUrlItem: function() {
                var e, t, n = this;
                return this._elem("links").each((function() {
                    var o = r()(this)
                      , i = o.attr("href")
                      , s = o.parent().attr("data-entity");
                    window.location.pathname === o.attr("href") ? e = o.closest(".nav__menu__item") : i && a().contains(n._partially_matchable, s) && window.location.pathname.split("/")[1] === i.split("/")[1] && (t = o.closest(".nav__menu__item"))
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
                  , o = this._getCompleteMatchUrlItem();
                if (!a().isUndefined(o) && o !== e)
                    return !0;
                if (!e)
                    return !1;
                var r = e.attr("data-entity").split("_")[0];
                return t === r && this._getSelected() && this.$_selected_item.addClass("nav__menu__item-selected"),
                this._getSelected() && this.$_selected_item.addClass("nav__menu__item-selected"),
                !(t === r || Object.prototype.hasOwnProperty.call(n, r) && a().contains(n[r], t))
            },
            _isChangeCandidate: function(e) {
                var t, n, o, r = e.attr("data-entity"), i = this._matching_entities, s = this._getCompleteMatchUrlItem(), l = APP.getBaseEntity();
                if (!a().propertyOf(s)(0)) {
                    if (r === l || Object.prototype.hasOwnProperty.call(i, r) && a().contains(i[r], l))
                        return !0;
                    if (t = r.split("_")[0],
                    n = r.split("_").slice(1).join("_"),
                    S.includes(t))
                        return "" !== (o = this._getSubEntityId(t)) && Object.prototype.hasOwnProperty.call(i, t) && a().contains(i[t], l) && o === n
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
                    var o = r()(this);
                    if (o.hasClass("nav__menu__item-selected") && !o.hasClass("js-new-selected") && (t || "widget" === e && o.data("widget-code") !== APP.getWidgetsArea().split(":")[1] && o.data("widget-item") !== APP.getWidgetsArea().split(":")[2] && o.hasClass("nav__menu__item__icon-integration")) && o.removeClass("nav__menu__item-selected"),
                    !o.hasClass("nav__menu__item-selected") && (t && n._isChangeCandidate(o) || "widget" === e && o.data("widget-code") === APP.getWidgetsArea().split(":")[1] && o.data("widget-item") === APP.getWidgetsArea().split(":")[2] && o.hasClass("nav__menu__item__icon-integration"))) {
                        if (!n._getSelected())
                            return;
                        n._getSelected().removeClass("nav__menu__item-selected").removeClass("js-new-selected"),
                        o.addClass("nav__menu__item-selected").addClass("js-new-selected"),
                        n.$_selected_item = o
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
    745277: (e, t, n) => {
        "use strict";
        n.r(t),
        n.d(t, {
            default: () => b
        });
        var o = n(55188)
          , r = n.n(o)
          , i = n(161320)
          , a = n.n(i)
          , s = n(521466)
          , l = n(661533);
        function c(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, o = new Array(t); n < t; n++)
                o[n] = e[n];
            return o
        }
        function u(e, t, n, o, r, i, a) {
            try {
                var s = e[i](a)
                  , l = s.value
            } catch (e) {
                return void n(e)
            }
            s.done ? t(l) : Promise.resolve(l).then(o, r)
        }
        function d(e) {
            return function() {
                var t = this
                  , n = arguments;
                return new Promise((function(o, r) {
                    var i = e.apply(t, n);
                    function a(e) {
                        u(i, o, r, a, s, "next", e)
                    }
                    function s(e) {
                        u(i, o, r, a, s, "throw", e)
                    }
                    a(void 0)
                }
                ))
            }
        }
        function h(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1,
                o.configurable = !0,
                "value"in o && (o.writable = !0),
                Object.defineProperty(e, o.key, o)
            }
        }
        function _(e, t, n) {
            return _ = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(e, t, n) {
                var o = function(e, t) {
                    for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = f(e)); )
                        ;
                    return e
                }(e, t);
                if (o) {
                    var r = Object.getOwnPropertyDescriptor(o, t);
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
        function m(e, t) {
            return m = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                e
            }
            ,
            m(e, t)
        }
        function p(e, t) {
            return function(e) {
                if (Array.isArray(e))
                    return e
            }(e) || function(e, t) {
                var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (null != n) {
                    var o, r, i = [], a = !0, s = !1;
                    try {
                        for (n = n.call(e); !(a = (o = n.next()).done) && (i.push(o.value),
                        !t || i.length !== t); a = !0)
                            ;
                    } catch (e) {
                        s = !0,
                        r = e
                    } finally {
                        try {
                            a || null == n.return || n.return()
                        } finally {
                            if (s)
                                throw r
                        }
                    }
                    return i
                }
            }(e, t) || g(e, t) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        function g(e, t) {
            if (e) {
                if ("string" == typeof e)
                    return c(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                return "Object" === n && e.constructor && (n = e.constructor.name),
                "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? c(e, t) : void 0
            }
        }
        function v(e) {
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
                var n, o = f(e);
                if (t) {
                    var r = f(this).constructor;
                    n = Reflect.construct(o, arguments, r)
                } else
                    n = o.apply(this, arguments);
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
            var n, o, r, i, a = {
                label: 0,
                sent: function() {
                    if (1 & r[0])
                        throw r[1];
                    return r[1]
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
                                o && (r = 2 & i[0] ? o.return : i[0] ? o.throw || ((r = o.return) && r.call(o),
                                0) : o.next) && !(r = r.call(o, i[1])).done)
                                    return r;
                                switch (o = 0,
                                r && (i = [2 & i[0], r.value]),
                                i[0]) {
                                case 0:
                                case 1:
                                    r = i;
                                    break;
                                case 4:
                                    return a.label++,
                                    {
                                        value: i[1],
                                        done: !1
                                    };
                                case 5:
                                    a.label++,
                                    o = i[1],
                                    i = [0];
                                    continue;
                                case 7:
                                    i = a.ops.pop(),
                                    a.trys.pop();
                                    continue;
                                default:
                                    if (!((r = (r = a.trys).length > 0 && r[r.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                                        a = 0;
                                        continue
                                    }
                                    if (3 === i[0] && (!r || i[1] > r[0] && i[1] < r[3])) {
                                        a.label = i[1];
                                        break
                                    }
                                    if (6 === i[0] && a.label < r[1]) {
                                        a.label = r[1],
                                        r = i;
                                        break
                                    }
                                    if (r && a.label < r[2]) {
                                        a.label = r[2],
                                        a.ops.push(i);
                                        break
                                    }
                                    r[2] && a.ops.pop(),
                                    a.trys.pop();
                                    continue
                                }
                                i = t.call(e, a)
                            } catch (e) {
                                i = [6, e],
                                o = 0
                            } finally {
                                n = r = 0
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
                t && m(e, t)
            }(s, e);
            var t, o, i = v(s);
            function s() {
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, s),
                i.apply(this, arguments)
            }
            return t = s,
            o = [{
                key: "initialize",
                value: function() {
                    var e = this
                      , t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                      , n = this
                      , o = arguments;
                    return d((function() {
                        var i;
                        return y(this, (function(a) {
                            return (i = _(f(s.prototype), "initialize", e)).call.apply(i, [n].concat(function(e) {
                                if (Array.isArray(e))
                                    return c(e)
                            }(u = o) || function(e) {
                                if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"])
                                    return Array.from(e)
                            }(u) || g(u) || function() {
                                throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                            }())),
                            n.onShowMenuAndBlock = t.onShowMenuAndBlock,
                            n.onCloseMenu = t.onCloseMenu,
                            n.onUnblockMenu = t.onUnblockMenu,
                            n.onBlockMenu = t.onBlockMenu,
                            n.$holder = t.$holder,
                            n.$el = l('<div class="operday"></div>'),
                            n.$document = l(document),
                            n.onAjaxCompleteWithThis = r().bind(n.onAjaxComplete, n),
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
                      , o = t.getResponseHeader("X-Oper-Day-State")
                      , i = t.getResponseHeader("X-Oper-Day-Expires-In");
                    o && (r().isNull(i) || (this._expires_in = i),
                    this.ensureViews((function(e) {
                        var t = p(e, 2)
                          , i = t[0]
                          , a = t[1];
                        switch (!0) {
                        case "closed" === o && (!n._state || "open" === n._state):
                            n.current_view && n._destroyComponent(n.current_view),
                            n.onShowMenuAndBlock(),
                            n._state = "closed",
                            n.current_view = n.renderStartOperday(i);
                            break;
                        case "open" === o && n._expires_in <= 0 && "expired" !== n._state:
                            n.current_view && n._destroyComponent(n.current_view),
                            n.onShowMenuAndBlock(),
                            n.current_view = n.renderWorkspace(a, !0),
                            n._state = "expired";
                            break;
                        case "open" === o && !r().contains(["open", "expired"], n._state):
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
                    this.current_view && r().isFunction(this.current_view.reRender) && this.current_view.reRender()
                }
            }, {
                key: "handleChangeView",
                value: function(e) {
                    var t = this;
                    this.ensureViews((function(n) {
                        var o = p(n, 2)
                          , r = o[0]
                          , i = o[1];
                        switch (t.current_view && t._destroyComponent(t.current_view),
                        e) {
                        case "start":
                            t.onBlockMenu(),
                            t._state = "closed",
                            t.current_view = t.renderStartOperday(r);
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
                        onChangeView: r().bind(this.handleChangeView, this),
                        is_last_day_expired: this._expires_in <= 0
                    })
                }
            }, {
                key: "renderWorkspace",
                value: function(e, t) {
                    return this._addComponent(e, {
                        $holder: this.$el,
                        onChangeView: r().bind(this.handleChangeView, this),
                        onDestroy: r().bind(this.onCloseMenu, this),
                        need_fetch: t
                    })
                }
            }, {
                key: "ensureViews",
                value: function(e) {
                    return d((function() {
                        var t, o, r, i, a;
                        return y(this, (function(s) {
                            switch (s.label) {
                            case 0:
                                return [4, Promise.all([n.e(65642).then(n.bind(n, 565642)), Promise.all([n.e(56740), n.e(68592), n.e(39877), n.e(39830), n.e(86967), n.e(85956), n.e(42019), n.e(16976), n.e(15814), n.e(5604)]).then(n.bind(n, 333885))])];
                            case 1:
                                return t = p.apply(void 0, [s.sent(), 2]),
                                o = t[0],
                                r = o.default,
                                i = t[1],
                                a = i.default,
                                e([r, a]),
                                [2]
                            }
                        }
                        ))
                    }
                    ))()
                }
            }],
            o && h(t.prototype, o),
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
    980528: (e, t, n) => {
        "use strict";
        n.r(t),
        n.d(t, {
            default: () => h
        });
        var o = n(661533)
          , r = n.n(o)
          , i = n(55188)
          , a = n.n(i)
          , s = n(312309)
          , l = n(988050)
          , c = n(179013)
          , u = n(391753);
        r()(document).ajaxComplete((function(e, t) {
            t.getResponseHeader("X-Core-Server") && t.getResponseHeader("X-Core-Tasks") && u.default.updateItemCounter({
                entity: "todo",
                count: t.getResponseHeader("X-Core-Tasks")
            })
        }
        ));
        var d = function(e) {
            this.view = e,
            this.sync = new c.default,
            e.$el.on("click".concat(this.ns), ".js-list-caption-link", (function() {
                var t = r()(this)
                  , n = (0,
                s.getQueryString)()
                  , o = t.attr("data-calendar-view")
                  , i = (o || "").replace("agenda", "").toLowerCase();
                return e.$el.find(".list__top__preset .list-top-nav__text-button_active").not(this).removeClass("list-top-nav__text-button_active"),
                t.addClass("list-top-nav__text-button_active"),
                e.$calendar && e.$calendar.length && o ? (e.search.filter.setUrl("/todo/calendar/".concat(i, "/")),
                e.search.filter.$(".filter__list__item a").each((function() {
                    r()(this).attr("href", r()(this).attr("href").replace(/\/todo\/calendar\/(\w+)\//, "/todo/calendar/".concat(i, "/")))
                }
                )),
                (0,
                l.set)({
                    name: "LAST_PLACE_TODO",
                    value: "calendar/".concat(i)
                }),
                APP.router.navigate(t.attr("href") + (n ? "?".concat(n) : ""), {
                    trigger: !1,
                    replace: !1
                }),
                e.$calendar.fullCalendar("changeView", o)) : APP.router.navigate(t.attr("href") + (n ? "?".concat(n) : ""), {
                    trigger: !0
                }),
                !1
            }
            )).on("click".concat(this.ns), ".js-modal-custom-types", (function() {
                n.e(41616).then(n.bind(n, 541616)).then((function(e) {
                    new (0,
                    e.default)
                }
                ))
            }
            )).on("click".concat(this.ns), ".js-todos-sync:not(.js-disabled)", a().bind((function() {
                this.sync.showModal()
            }
            ), this)),
            "#sync_calendars" === window.location.hash && this.sync.showModal()
        };
        d.prototype.ns = ".todos:page:common",
        d.prototype.destroy = function() {
            this.view && this.view.$el.off(this.ns),
            this.sync && this.sync.destroy()
        }
        ;
        const h = d;
        var _ = "../build/transpiled/interface/todos/common";
        window.define(_, (function() {
            var e = "undefined"
              , n = typeof t === e ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === e ? typeof module === e ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : t;
            return n && n.default || n
        }
        )),
        window.require([_])
    }
    ,
    366302: (e, t, n) => {
        "use strict";
        n.r(t),
        n.d(t, {
            disallowedWidgetsRegExp: () => l
        });
        var o = n(971588)
          , r = n(577486)
          , i = ["amo_mailchimp", "mailchimp_kommo", "t57c8mssj0hf4lyfyefawyicehiykduabll1w3gt", "amo_1c_fresh", "amo_unf", "amo_tinkoffbacq", "amo_yakassa", "amo_sberbacq", "amo_alfabacq", "amo_twilio6", "mercado_libre", "linkedin_kommo", "wix_kommo", "lazada", "nuvemshop", "woocom", "shopify", "gotoconnect", "amo_rd_station", "amo_googledocsgenv2", "amo_docsgenv2_com", "paypal", "mercado_pago", "amo_dropbox", "amo_zoom", "amo_zapier", "dlzsz9jezzn3yicnojvtwddrip6anomozhrybv72", "amo_intercom", "amo_activecampaign", "amo_stripe", "amo_typeform", "lzawrqwjjathddycg8griw0lwx1bfaodscd4wfwh", "amo_jotform", "amo_ringcentral_vol2", "zenvia_voip", "nvoip", "amo_smsc", "amo_yametrika", "amo_new_moysklad", "avito_work", "amo_evotor", "amo_eskiz", "amo_lead_scraper", "amo_tranzaptorcom", "amo_asterisk", "amo_zendesk", "amo_ofd", "google_translator", "cloudtalk", "xf2tnprxxab1iax0sclmvrsbwcyazdoxywdgaj1b", "tokopedia", "api4com", "amo_aircall", o.default.WHATSAPP, o.default.WHATSAPP_WHITE, o.default.TIKTOK]
          , a = "(".concat(i.join("|"), ")")
          , s = "\\/(upl|widgets)\\/(?!(".concat(a, ")\\/).*")
          , l = new r.UnsafeRegExp("".concat("https?:\\/\\/([^.]+\\.)?([^.]+\\.)?(amocrm2?\\.(saas|ru)|kommo2?\\.com)").concat(s))
    }
    ,
    643095: (e, t, n) => {
        "use strict";
        n.r(t),
        n.d(t, {
            captureException: () => v,
            isDisallowedWidgetTraceDetected: () => m,
            sentryLogBrokenFeed: () => S,
            sentryLogErrorHandler: () => C,
            sentryLogErrorModal: () => b,
            sentryLogFailedGetAmojoToken: () => k,
            sentryLogSocketDisconnect: () => E,
            sentryLogSpaceError: () => w,
            sentryLogUserflowUpdateUserError: () => P,
            startBrowserTracingSpan: () => p
        });
        var o = n(661533)
          , r = n.n(o)
          , i = n(55188)
          , a = n.n(i)
          , s = n(189967)
          , l = n(366302);
        function c(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, o = new Array(t); n < t; n++)
                o[n] = e[n];
            return o
        }
        function u(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        function d(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {}
                  , o = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                }
                )))),
                o.forEach((function(t) {
                    u(e, t, n[t])
                }
                ))
            }
            return e
        }
        var h = []
          , _ = []
          , f = {
            fatal: "fatal",
            error: "error",
            warning: "warning",
            log: "log",
            info: "info",
            debug: "debug"
        }
          , m = function(e) {
            return l.disallowedWidgetsRegExp.test(e)
        };
        function p(e) {
            var t = e.entity;
            t && a().isFunction(window.sentryStartBrowserTracingSpan) && window.sentryStartBrowserTracingSpan({
                isPageLoad: APP.first_load,
                entity: t
            })
        }
        function g() {
            switch (!0) {
            case (0,
            s.isImboxSection)():
                return "imbox";
            case APP.isCard() && "leads" === APP.getBaseEntity():
                return "leads-card";
            case "leads-pipeline" === APP.data.current_entity:
                return "leads-pipeline";
            default:
                return "".concat(APP.getBaseEntity()).concat(APP.isCard() ? "-card" : "")
            }
        }
        function v(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
              , n = window.Sentry;
            n && navigator.onLine ? (h.length && y(),
            t.tags = a().defaults(t.tags || {}, {
                "manually-logged": !0
            }),
            n.captureException(e, t)) : h.push([e, t])
        }
        function y() {
            var e = h.slice(0);
            h = [],
            a().each(e, (function(e) {
                var t;
                v.apply(void 0, function(e) {
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
                }())
            }
            ))
        }
        function b(e) {
            var t = g()
              , n = new Error("Error modal showed - ".concat(t));
            n.stack && m(n.stack) || setTimeout((function() {
                v(n, {
                    tags: {
                        "oops-error.entity": t,
                        "navigator.online": navigator.onLine,
                        "message.empty": a().isEmpty(e)
                    },
                    extra: {
                        "Error Message": e,
                        "Last Ajaxes": _
                    }
                }),
                _ = []
            }
            ))
        }
        function w(e) {
            var t = e.errXHR
              , n = e.extra
              , o = void 0 === n ? {} : n;
            if (t) {
                var r = t.getResponseHeader("X-Request-Id")
                  , i = t.status
                  , a = t.responseText
                  , s = g();
                v(new Error("Space error - ".concat(s)), {
                    tags: {
                        "space-error.entity": s,
                        "navigator.online": navigator.onLine
                    },
                    extra: d({
                        "Request Id": r,
                        "Status Code": i,
                        "Response Message": a
                    }, o)
                })
            }
        }
        function C(e) {
            var t = e.errXHR
              , n = e.variant
              , o = e.extra
              , r = void 0 === o ? {} : o;
            if (t) {
                var i = t.status
                  , a = t.responseText
                  , s = t.getResponseHeader("X-Request-Id")
                  , l = g();
                v(new Error("Error handler - ".concat(l)), {
                    tags: {
                        "error-handler.entity": l,
                        "navigator.online": navigator.onLine,
                        "handle.variant": n
                    },
                    extra: d({
                        "Request Id": s,
                        "Status Code": i,
                        "Response Message": a
                    }, r)
                })
            }
        }
        function k(e) {
            var t = e.responseJSON
              , n = void 0 === t ? {} : t
              , o = e.isNetworkError
              , r = void 0 !== o && o
              , i = APP.constant("account").subdomain
              , a = (n.response || {}).error
              , s = void 0 === a ? {
                error: ""
            } : a;
            v(new Error("Failed to receive amojo token"), {
                tags: {
                    subdomain: i
                },
                extra: {
                    "Error reason": r ? "Network error" : s
                }
            })
        }
        function E() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , t = e.reason
              , n = void 0 === t ? {} : t
              , o = e.socketName
              , r = void 0 === o ? "" : o
              , i = e.code
              , a = APP.constant("account").subdomain;
            v("Socket disconnected - ".concat(r), {
                tags: {
                    subdomain: a,
                    socket: r,
                    "socket.error-code": i
                },
                extra: {
                    "Disconnected reason": JSON.stringify(n),
                    level: f.info
                }
            })
        }
        function S() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , t = g();
            v(new Error("Broken feed - ".concat(t, " ")), {
                tags: {
                    "broken-feed.entity": t
                },
                extra: {
                    Options: e
                }
            })
        }
        function P(e) {
            var t = e.responseJSON
              , n = APP.constant("account").subdomain
              , o = t.status
              , r = t.title;
            v(new Error("Userflow Update User Error"), {
                tags: {
                    subdomain: n
                },
                extra: {
                    "Response JSON": {
                        status: o,
                        title: r
                    }
                }
            })
        }
        r()(document).on("ajaxError ajaxComplete", (function(e, t, n) {
            !function(e, t) {
                var n = {
                    url: t.url,
                    requestId: e.getResponseHeader("X-Request-Id"),
                    status: e.status
                }
                  , o = e.responseText;
                a().isString(o) && o.length && a().extend(n, {
                    responseMessage: o
                }),
                _.push(n),
                _.length > 5 && _.shift()
            }(t, n)
        }
        )),
        r()(window).on("online", y)
    }
    ,
    339095: (e, t, n) => {
        "use strict";
        n.r(t),
        n.d(t, {
            default: () => h
        });
        var o = n(55188)
          , r = n.n(o)
          , i = n(292554)
          , a = n.n(i)
          , s = n(491967)
          , l = n(880774)
          , c = n(597052)
          , u = n(827378)
          , d = a().bind(c.default);
        const h = function(e) {
            var t = e.onClick
              , n = void 0 === t ? r().noop : t
              , o = e.buttonContent
              , i = void 0 === o ? (0,
            l.i18n)("Sign in with Google") : o;
            return u.createElement("button", {
                onClick: n,
                className: d("button")
            }, u.createElement("div", {
                className: d("state")
            }), u.createElement("div", {
                className: d("content-wrapper")
            }, u.createElement(s.default, {
                type: "svg",
                name: "common--google-sm",
                className: d("icon")
            }), u.createElement("span", {
                className: d("contents")
            }, i)))
        }
    }
    ,
    971588: (e, t, n) => {
        "use strict";
        var o;
        n.r(t),
        n.d(t, {
            default: () => r
        }),
        function(e) {
            e.FACEBOOK = "facebook",
            e.MESSENGER = "messenger",
            e.INSTAGRAM_BUSINESS = "instagram_business",
            e.INSTAGRAM = "instagram",
            e.WHATSAPP = "amocrm_whatsapp",
            e.WHATSAPP_WHITE = "whatsapp_cloud_api",
            e.TELEGRAM = "telegram",
            e.TIKTOK = "tiktok_kommo"
        }(o || (o = {}));
        const r = o
    }
    ,
    564638: (e, t, n) => {
        "use strict";
        n.r(t),
        n.d(t, {
            WINDOW_RESIZE_THROTTLE_DELAY: () => o
        });
        var o = 10
    }
    ,
    55766: (e, t, n) => {
        "use strict";
        var o;
        n.r(t),
        n.d(t, {
            ArrowPosition: () => o
        }),
        function(e) {
            e.TOP = "top",
            e.BOTTOM = "bottom",
            e.LEFT = "left",
            e.RIGHT = "right"
        }(o || (o = {}))
    }
    ,
    975725: (e, t, n) => {
        "use strict";
        n.r(t),
        n.d(t, {
            HelpModal: () => v
        });
        var o = n(827378)
          , r = n(292554)
          , i = n.n(r)
          , a = n(55188)
          , s = n.n(a)
          , l = n(529062)
          , c = n(916569)
          , u = n(701106)
          , d = n(880774)
          , h = n(55766)
          , _ = n(943233)
          , f = n(562584)
          , m = n(827378);
        function p(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, o = new Array(t); n < t; n++)
                o[n] = e[n];
            return o
        }
        var g = i().bind(f.default)
          , v = function(e) {
            var t, n, r, i = e.className, a = void 0 === i ? "" : i, f = e.contentClass, v = void 0 === f ? "" : f, y = e.hasActionButton, b = void 0 !== y && y, w = e.hideCloseButton, C = void 0 !== w && w, k = e.title, E = e.description, S = e.imgUrl, P = void 0 === S ? "" : S, A = e.srcSet, x = void 0 === A ? "" : A, M = e.buttonCloseText, T = void 0 === M ? (0,
            d.i18n)("Okay, got it") : M, j = e.buttonActionText, O = void 0 === j ? "" : j, I = e.arrowPosition, R = void 0 === I ? h.ArrowPosition.TOP : I, N = e.onCloseRequest, $ = void 0 === N ? s().noop : N, H = e.onActionRequest, B = void 0 === H ? s().noop : H, L = e.onAfterRender, D = void 0 === L ? s().noop : L, U = e.isClosedByOutsideClick, W = void 0 !== U && U, F = (n = (0,
            o.useState)(!0),
            r = 2,
            function(e) {
                if (Array.isArray(e))
                    return e
            }(n) || function(e, t) {
                var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (null != n) {
                    var o, r, i = [], a = !0, s = !1;
                    try {
                        for (n = n.call(e); !(a = (o = n.next()).done) && (i.push(o.value),
                        !t || i.length !== t); a = !0)
                            ;
                    } catch (e) {
                        s = !0,
                        r = e
                    } finally {
                        try {
                            a || null == n.return || n.return()
                        } finally {
                            if (s)
                                throw r
                        }
                    }
                    return i
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
            }()), z = F[0], q = F[1], K = (0,
            o.useRef)(null), G = function() {
                q(!1),
                $()
            };
            (0,
            o.useEffect)((function() {
                var e = function(e) {
                    var t;
                    W && (K.current && !K.current.contains(e.target) && G(),
                    (null === (t = e.target) || void 0 === t ? void 0 : t.isContentEditable) && G())
                };
                return document.addEventListener("mousedown", e),
                function() {
                    document.removeEventListener("mousedown", e)
                }
            }
            ), [W, $]),
            (0,
            o.useEffect)((function() {
                D()
            }
            ), []);
            var V = function() {
                G()
            }
              , X = function() {
                B(),
                G()
            };
            switch (!0) {
            case b && !C:
                t = m.createElement("div", {
                    className: g("buttons")
                }, m.createElement(l.Button, {
                    theme: l.ButtonPrimaryTheme,
                    onClick: X
                }, O), m.createElement(l.Button, {
                    theme: l.ButtonSecondaryTheme,
                    onClick: V
                }, T));
                break;
            case b && C:
                t = m.createElement(l.Button, {
                    theme: l.ButtonPrimaryTheme,
                    onClick: X
                }, O);
                break;
            case !b && !C:
                t = m.createElement(l.Button, {
                    className: g("close-button"),
                    theme: l.ButtonSecondaryTheme,
                    onClick: V
                }, T);
                break;
            default:
                t = m.createElement(l.Button, {
                    theme: l.ButtonSecondaryTheme,
                    onClick: V
                }, T)
            }
            return z ? m.createElement("div", {
                className: "".concat(g("wrapper"), " ").concat(g(a))
            }, m.createElement("div", {
                ref: K,
                className: g("content", "arrow--".concat(R), v)
            }, (P || x) && m.createElement("picture", {
                className: g("picture")
            }, m.createElement("img", {
                className: g("image"),
                src: P,
                srcSet: x,
                alt: "image"
            })), m.createElement(u.default, {
                className: g("title"),
                size: "l",
                type: "h2"
            }, k), m.createElement(c.Text, {
                theme: _.TextTheme,
                className: g("text"),
                size: "l"
            }, E), t)) : null
        }
    }
    ,
    846257: (e, t, n) => {
        "use strict";
        n.r(t),
        n.d(t, {
            HelpModal: () => o.HelpModal,
            MENU_TIP_PADDING: () => r.MENU_TIP_PADDING
        });
        var o = n(975725)
          , r = n(161101)
    }
    ,
    161101: (e, t, n) => {
        "use strict";
        n.r(t),
        n.d(t, {
            MENU_TIP_PADDING: () => o
        });
        var o = 20
    }
    ,
    943233: (e, t, n) => {
        "use strict";
        n.r(t),
        n.d(t, {
            TextTheme: () => s
        });
        var o = n(916569);
        function r(e, t, n) {
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
                  , o = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                }
                )))),
                o.forEach((function(t) {
                    r(e, t, n[t])
                }
                ))
            }
            return e
        }({}, o.TextPrimaryTheme),
        a = null != (a = {
            "--crm-ui-kit-text-color": "#ffffff"
        }) ? a : {},
        Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(a)) : function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                n.push.apply(n, o)
            }
            return n
        }(Object(a)).forEach((function(e) {
            Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(a, e))
        }
        )),
        i)
    }
    ,
    491967: (e, t, n) => {
        "use strict";
        n.r(t),
        n.d(t, {
            default: () => a
        });
        var o = n(60042)
          , r = n.n(o)
          , i = n(827378);
        const a = function(e) {
            var t = e.name
              , n = e.className
              , o = void 0 === n ? "" : n;
            return "png" === e.type ? i.createElement("span", {
                className: r()("icon", t, o, {
                    "icon-inline": e.isInline
                })
            }) : i.createElement("svg", {
                className: "svg-icon svg-".concat(t, "-dims ").concat(o)
            }, i.createElement("use", {
                xlinkHref: "#".concat(t)
            }))
        }
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
        e._sentryDebugIds[t] = "4ff40ca9-2bb5-4128-bedd-5a5362064515",
        e._sentryDebugIdIdentifier = "sentry-dbid-4ff40ca9-2bb5-4128-bedd-5a5362064515")
    } catch (e) {}
}();
//# sourceMappingURL=46377.daf2144e03ca9d763f14.js.map
