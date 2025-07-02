/*! For license information please see 17331.d14bdbb075afedab4ca6.js.LICENSE.txt */
(window.webpackChunk = window.webpackChunk || []).push([[17331], {
    259913: function(e) {
        e.exports = function() {
            "use strict";
            var e = Object.assign || function(e) {
                for (var t, n = 1, i = arguments.length; n < i; n++)
                    for (var o in t = arguments[n])
                        Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e
            }
              , t = [["firefox", /Firefox\/([0-9\.]+)(?:\s|$)/], ["opera", /Opera\/([0-9\.]+)(?:\s|$)/], ["opera", /OPR\/([0-9\.]+)(:?\s|$)$/], ["edge", /Edge\/([0-9\._]+)/], ["ie", /Trident\/7\.0.*rv\:([0-9\.]+)\).*Gecko$/], ["ie", /MSIE\s([0-9\.]+);.*Trident\/[4-7].0/], ["ie", /MSIE\s(7\.0)/], ["safari", /Version\/([0-9\._]+).*Safari/], ["chrome", /(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/], ["bb10", /BB10;\sTouch.*Version\/([0-9\.]+)/], ["android", /Android\s([0-9\.]+)/], ["ios", /Version\/([0-9\._]+).*Mobile.*Safari.*/], ["yandexbrowser", /YaBrowser\/([0-9\._]+)/], ["crios", /CriOS\/([0-9\.]+)(:?\s|$)/]]
              , n = ["Windows Phone", "Android", "CentOS", {
                name: "Chrome OS",
                pattern: "CrOS"
            }, "Debian", "Fedora", "FreeBSD", "Gentoo", "Haiku", "Kubuntu", "Linux Mint", "OpenBSD", "Red Hat", "SuSE", "Ubuntu", "Xubuntu", "Cygwin", "Symbian OS", "hpwOS", "webOS ", "webOS", "Tablet OS", "Tizen", "Linux", "Mac OS X", "Macintosh", "Mac", "Windows 98;", "Windows "]
              , i = {
                "10.0": "10",
                6.4: "10 Technical Preview",
                6.3: "8.1",
                6.2: "8",
                6.1: "Server 2008 R2 / 7",
                "6.0": "Server 2008 / Vista",
                5.2: "Server 2003 / XP 64-bit",
                5.1: "XP",
                5.01: "2000 SP1",
                "5.0": "2000",
                "4.0": "NT",
                "4.90": "ME"
            }
              , o = new RegExp(["(android|bb\\d+|meego).+mobile|avantgo|bada\\/|blackberry|blazer|", "compal|elaine|fennec|hiptop|iemobile|ip(hone|od|ad)|iris|kindle|lge |maemo|", "midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)", "\\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\\.(browser|link)|vodafone|", "wap|windows ce|xda|xiino"].join(""),"i")
              , a = new RegExp(["1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\\-)|", "ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\\-m|r |s )|", "avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\\-(n|u)|c55\\/|capi|ccwa|cdm\\-|", "cell|chtm|cldc|cmd\\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\\-s|devi|dica|dmob|do(c|p)o|", "ds(12|\\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\\-|_)|", "g1 u|g560|gene|gf\\-5|g\\-mo|go(\\.w|od)|gr(ad|un)|haie|hcit|hd\\-(m|p|t)|hei\\-|", "hi(pt|ta)|hp( i|ip)|hs\\-c|ht(c(\\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\\-(20|go|ma)|", "i230|iac( |\\-|\\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|", "kddi|keji|kgt( |\\/)|klon|kpt |kwc\\-|kyo(c|k)|le(no|xi)|lg( g|\\/(k|l|u)|50|54|\\-[a-w])", "|libw|lynx|m1\\-w|m3ga|m50\\/|ma(te|ui|xo)|mc(01|21|ca)|m\\-cr|me(rc|ri)|mi(o8|oa|ts)|", "mmef|mo(01|02|bi|de|do|t(\\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|", "n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|", "op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\\-2|", "po(ck|rt|se)|prox|psio|pt\\-g|qa\\-a|qc(07|12|21|32|60|\\-[2-7]|i\\-)|qtek|r380|r600|", "raks|rim9|ro(ve|zo)|s55\\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\\-|oo|p\\-)|sdk\\/|", "se(c(\\-|0|1)|47|mc|nd|ri)|sgh\\-|shar|sie(\\-|m)|k\\-0|sl(45|id)|sm(al|ar|b3|it|t5)|", "so(ft|ny)|sp(01|h\\-|v\\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\\-|tdg\\-|", "tel(i|m)|tim\\-|t\\-mo|to(pl|sh)|ts(70|m\\-|m3|m5)|tx\\-9|up(\\.b|g1|si)|utst|v400|v750|", "veri|vi(rg|te)|vk(40|5[0-3]|\\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|", "w3c(\\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\\-|your|zeto|zte\\-"].join(""),"i")
              , r = function() {
                function r(e, t, n) {
                    this.navigator = t,
                    this.process = n,
                    this.userAgent = e || (this.navigator ? t.userAgent || t.vendor : "")
                }
                return r.prototype.detect = function() {
                    if (this.process && !this.userAgent) {
                        var t = this.process.version.slice(1).split(".").slice(0, 3)
                          , n = Array.prototype.slice.call(t, 1).join("") || "0";
                        return {
                            name: "node",
                            version: t.join("."),
                            versionNumber: parseFloat(t[0] + "." + n),
                            mobile: !1,
                            os: this.process.platform
                        }
                    }
                    return this.userAgent || this.handleMissingError(),
                    e({}, this.checkBrowser(), this.checkMobile(), this.checkOs())
                }
                ,
                r.prototype.checkBrowser = function() {
                    var e = this;
                    return t.filter((function(t) {
                        return t[1].test(e.userAgent)
                    }
                    )).map((function(t) {
                        var n = t[1].exec(e.userAgent)
                          , i = n && n[1].split(/[._]/).slice(0, 3)
                          , o = Array.prototype.slice.call(i, 1).join("") || "0";
                        return i && i.length < 3 && Array.prototype.push.apply(i, 1 === i.length ? [0, 0] : [0]),
                        {
                            name: String(t[0]),
                            version: i.join("."),
                            versionNumber: Number(i[0] + "." + o)
                        }
                    }
                    )).shift()
                }
                ,
                r.prototype.checkMobile = function() {
                    var e = this.userAgent.substr(0, 4);
                    return {
                        mobile: o.test(this.userAgent) || a.test(e)
                    }
                }
                ,
                r.prototype.checkOs = function() {
                    var e = this;
                    return n.map((function(t) {
                        var n = t.name || t
                          , i = e.getOsPattern(t);
                        return {
                            name: n,
                            pattern: i,
                            value: RegExp("\\b" + i.replace(/([ -])(?!$)/g, "$1?") + "(?:x?[\\d._]+|[ \\w.]*)", "i").exec(e.userAgent)
                        }
                    }
                    )).filter((function(e) {
                        return e.value
                    }
                    )).map((function(e) {
                        var t, n = e.value[0] || "";
                        return e.pattern && e.name && /^Win/i.test(n) && !/^Windows Phone /i.test(n) && (t = i[n.replace(/[^\d.]/g, "")]) && (n = "Windows " + t),
                        e.pattern && e.name && (n = n.replace(RegExp(e.pattern, "i"), e.name)),
                        n = n.replace(/ ce$/i, " CE").replace(/\bhpw/i, "web").replace(/\bMacintosh\b/, "Mac OS").replace(/_PowerPC\b/i, " OS").replace(/\b(OS X) [^ \d]+/i, "$1").replace(/\bMac (OS X)\b/, "$1").replace(/\/(\d)/, " $1").replace(/_/g, ".").replace(/(?: BePC|[ .]*fc[ \d.]+)$/i, "").replace(/\bx86\.64\b/gi, "x86_64").replace(/\b(Windows Phone) OS\b/, "$1").replace(/\b(Chrome OS \w+) [\d.]+\b/, "$1").split(" on ")[0].trim(),
                        {
                            os: n = /^(?:webOS|i(?:OS|P))/.test(n) ? n : n.charAt(0).toUpperCase() + n.slice(1)
                        }
                    }
                    )).shift()
                }
                ,
                r.prototype.getOsPattern = function(e) {
                    var t = e;
                    return ("string" == typeof e ? e : void 0) || t.pattern || t.name
                }
                ,
                r.prototype.handleMissingError = function() {
                    throw new Error("Please give user-agent.\n> browser(navigator.userAgent or res.headers['user-agent']).")
                }
                ,
                r
            }();
            function s(e, t) {
                return e(t = {
                    exports: {}
                }, t.exports),
                t.exports
            }
            var l = s((function(e) {
                var t = e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
                "number" == typeof __g && (__g = t)
            }
            ))
              , c = s((function(e) {
                var t = e.exports = {
                    version: "2.5.7"
                };
                "number" == typeof __e && (__e = t)
            }
            ))
              , d = (c.version,
            function(e) {
                return "object" == typeof e ? null !== e : "function" == typeof e
            }
            )
              , u = function(e) {
                if (!d(e))
                    throw TypeError(e + " is not an object!");
                return e
            }
              , _ = function(e) {
                try {
                    return !!e()
                } catch (e) {
                    return !0
                }
            }
              , h = !_((function() {
                return 7 != Object.defineProperty({}, "a", {
                    get: function() {
                        return 7
                    }
                }).a
            }
            ))
              , p = l.document
              , f = d(p) && d(p.createElement)
              , m = !h && !_((function() {
                return 7 != Object.defineProperty((e = "div",
                f ? p.createElement(e) : {}), "a", {
                    get: function() {
                        return 7
                    }
                }).a;
                var e
            }
            ))
              , v = Object.defineProperty
              , g = {
                f: h ? Object.defineProperty : function(e, t, n) {
                    if (u(e),
                    t = function(e, t) {
                        if (!d(e))
                            return e;
                        var n, i;
                        if (t && "function" == typeof (n = e.toString) && !d(i = n.call(e)))
                            return i;
                        if ("function" == typeof (n = e.valueOf) && !d(i = n.call(e)))
                            return i;
                        if (!t && "function" == typeof (n = e.toString) && !d(i = n.call(e)))
                            return i;
                        throw TypeError("Can't convert object to primitive value")
                    }(t, !0),
                    u(n),
                    m)
                        try {
                            return v(e, t, n)
                        } catch (e) {}
                    if ("get"in n || "set"in n)
                        throw TypeError("Accessors not supported!");
                    return "value"in n && (e[t] = n.value),
                    e
                }
            }
              , y = h ? function(e, t, n) {
                return g.f(e, t, function(e, t) {
                    return {
                        enumerable: !(1 & e),
                        configurable: !(2 & e),
                        writable: !(4 & e),
                        value: t
                    }
                }(1, n))
            }
            : function(e, t, n) {
                return e[t] = n,
                e
            }
              , b = {}.hasOwnProperty
              , w = function(e, t) {
                return b.call(e, t)
            }
              , E = 0
              , A = Math.random()
              , k = function(e) {
                return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++E + A).toString(36))
            }
              , x = s((function(e) {
                var t = k("src")
                  , n = "toString"
                  , i = Function[n]
                  , o = ("" + i).split(n);
                c.inspectSource = function(e) {
                    return i.call(e)
                }
                ,
                (e.exports = function(e, n, i, a) {
                    var r = "function" == typeof i;
                    r && (w(i, "name") || y(i, "name", n)),
                    e[n] !== i && (r && (w(i, t) || y(i, t, e[n] ? "" + e[n] : o.join(String(n)))),
                    e === l ? e[n] = i : a ? e[n] ? e[n] = i : y(e, n, i) : (delete e[n],
                    y(e, n, i)))
                }
                )(Function.prototype, n, (function() {
                    return "function" == typeof this && this[t] || i.call(this)
                }
                ))
            }
            ))
              , P = function(e, t, n) {
                if (function(e) {
                    if ("function" != typeof e)
                        throw TypeError(e + " is not a function!")
                }(e),
                void 0 === t)
                    return e;
                switch (n) {
                case 1:
                    return function(n) {
                        return e.call(t, n)
                    }
                    ;
                case 2:
                    return function(n, i) {
                        return e.call(t, n, i)
                    }
                    ;
                case 3:
                    return function(n, i, o) {
                        return e.call(t, n, i, o)
                    }
                }
                return function() {
                    return e.apply(t, arguments)
                }
            }
              , S = "prototype"
              , C = function(e, t, n) {
                var i, o, a, r, s = e & C.F, d = e & C.G, u = e & C.S, _ = e & C.P, h = e & C.B, p = d ? l : u ? l[t] || (l[t] = {}) : (l[t] || {})[S], f = d ? c : c[t] || (c[t] = {}), m = f[S] || (f[S] = {});
                for (i in d && (n = t),
                n)
                    a = ((o = !s && p && void 0 !== p[i]) ? p : n)[i],
                    r = h && o ? P(a, l) : _ && "function" == typeof a ? P(Function.call, a) : a,
                    p && x(p, i, a, e & C.U),
                    f[i] != a && y(f, i, r),
                    _ && m[i] != a && (m[i] = a)
            };
            l.core = c,
            C.F = 1,
            C.G = 2,
            C.S = 4,
            C.P = 8,
            C.B = 16,
            C.W = 32,
            C.U = 64,
            C.R = 128;
            var T = C
              , M = {}.toString
              , D = function(e) {
                return M.call(e).slice(8, -1)
            }
              , O = Object("z").propertyIsEnumerable(0) ? Object : function(e) {
                return "String" == D(e) ? e.split("") : Object(e)
            }
              , I = function(e) {
                if (null == e)
                    throw TypeError("Can't call method on  " + e);
                return e
            }
              , R = Math.ceil
              , U = Math.floor
              , j = Math.min
              , L = function(e) {
                return e > 0 ? j(function(e) {
                    return isNaN(e = +e) ? 0 : (e > 0 ? U : R)(e)
                }(e), 9007199254740991) : 0
            }
              , q = Array.isArray || function(e) {
                return "Array" == D(e)
            }
              , N = s((function(e) {
                var t = "__core-js_shared__"
                  , n = l[t] || (l[t] = {});
                (e.exports = function(e, t) {
                    return n[e] || (n[e] = void 0 !== t ? t : {})
                }
                )("versions", []).push({
                    version: c.version,
                    mode: "global",
                    copyright: "© 2018 Denis Pushkarev (zloirock.ru)"
                })
            }
            ))
              , F = s((function(e) {
                var t = N("wks")
                  , n = l.Symbol
                  , i = "function" == typeof n;
                (e.exports = function(e) {
                    return t[e] || (t[e] = i && n[e] || (i ? n : k)("Symbol." + e))
                }
                ).store = t
            }
            ))
              , B = F("species")
              , H = function(e, t) {
                return new (function(e) {
                    var t;
                    return q(e) && ("function" != typeof (t = e.constructor) || t !== Array && !q(t.prototype) || (t = void 0),
                    d(t) && null === (t = t[B]) && (t = void 0)),
                    void 0 === t ? Array : t
                }(e))(t)
            }
              , W = function(e, t) {
                var n = 1 == e
                  , i = 2 == e
                  , o = 3 == e
                  , a = 4 == e
                  , r = 6 == e
                  , s = 5 == e || r
                  , l = t || H;
                return function(t, c, d) {
                    for (var u, _, h = Object(I(t)), p = O(h), f = P(c, d, 3), m = L(p.length), v = 0, g = n ? l(t, m) : i ? l(t, 0) : void 0; m > v; v++)
                        if ((s || v in p) && (_ = f(u = p[v], v, h),
                        e))
                            if (n)
                                g[v] = _;
                            else if (_)
                                switch (e) {
                                case 3:
                                    return !0;
                                case 5:
                                    return u;
                                case 6:
                                    return v;
                                case 2:
                                    g.push(u)
                                }
                            else if (a)
                                return !1;
                    return r ? -1 : o || a ? a : g
                }
            }
              , $ = function(e, t) {
                return !!e && _((function() {
                    t ? e.call(null, (function() {}
                    ), 1) : e.call(null)
                }
                ))
            }
              , K = W(2);
            T(T.P + T.F * !$([].filter, !0), "Array", {
                filter: function(e) {
                    return K(this, e, arguments[1])
                }
            }),
            c.Array.filter;
            var G = W(1);
            T(T.P + T.F * !$([].map, !0), "Array", {
                map: function(e) {
                    return G(this, e, arguments[1])
                }
            }),
            c.Array.map;
            var X = "\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"
              , V = "[" + X + "]"
              , z = RegExp("^" + V + V + "*")
              , J = RegExp(V + V + "*$")
              , Y = function(e, t, n) {
                var i = {}
                  , o = _((function() {
                    return !!X[e]() || "​" != "​"[e]()
                }
                ))
                  , a = i[e] = o ? t(Q) : X[e];
                n && (i[n] = a),
                T(T.P + T.F * o, "String", i)
            }
              , Q = Y.trim = function(e, t) {
                return e = String(I(e)),
                1 & t && (e = e.replace(z, "")),
                2 & t && (e = e.replace(J, "")),
                e
            }
            ;
            Y("trim", (function(e) {
                return function() {
                    return e(this, 3)
                }
            }
            )),
            c.String.trim;
            var Z = "undefined" != typeof window ? window.navigator : void 0
              , ee = "undefined" != typeof process ? process : void 0;
            return function(e) {
                return new r(e,Z,ee).detect()
            }
        }();
        var t = "browser-detect";
        window.define(t, (function() {
            var t = "undefined"
              , n = typeof __webpack_exports__ === t ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === t ? typeof e === t ? void 0 : e.exports : __WEBPACK_AMD_DEFINE_RESULT__ : __webpack_exports__;
            return n && n.default || n
        }
        )),
        window.require([t])
    },
    130860: (e, t, n) => {
        var i;
        function o() {
            "use strict";
            var e, t, n, i = window.crypto || window.msCrypto;
            if (!e && i && i.getRandomValues)
                try {
                    var o = new Uint8Array(16);
                    n = e = function() {
                        return i.getRandomValues(o),
                        o
                    }
                    ,
                    e()
                } catch (e) {}
            if (!e) {
                var a = new Array(16);
                t = e = function() {
                    for (var e, t = 0; t < 16; t++)
                        0 == (3 & t) && (e = 4294967296 * Math.random()),
                        a[t] = e >>> ((3 & t) << 3) & 255;
                    return a
                }
                ,
                "undefined" != typeof console && console.warn && console.warn("[SECURITY] node-uuid: crypto not usable, falling back to insecure Math.random()")
            }
            for (var r = "function" == typeof Buffer ? Buffer : Array, s = [], l = {}, c = 0; c < 256; c++)
                s[c] = (c + 256).toString(16).substr(1),
                l[s[c]] = c;
            function d(e, t) {
                var n = t || 0
                  , i = s;
                return i[e[n++]] + i[e[n++]] + i[e[n++]] + i[e[n++]] + "-" + i[e[n++]] + i[e[n++]] + "-" + i[e[n++]] + i[e[n++]] + "-" + i[e[n++]] + i[e[n++]] + "-" + i[e[n++]] + i[e[n++]] + i[e[n++]] + i[e[n++]] + i[e[n++]] + i[e[n++]]
            }
            var u = e()
              , _ = [1 | u[0], u[1], u[2], u[3], u[4], u[5]]
              , h = 16383 & (u[6] << 8 | u[7])
              , p = 0
              , f = 0;
            function m(t, n, i) {
                var o = n && i || 0;
                "string" == typeof t && (n = "binary" === t ? new r(16) : null,
                t = null);
                var a = (t = t || {}).random || (t.rng || e)();
                if (a[6] = 15 & a[6] | 64,
                a[8] = 63 & a[8] | 128,
                n)
                    for (var s = 0; s < 16; s++)
                        n[o + s] = a[s];
                return n || d(a)
            }
            var v = m;
            return v.v1 = function(e, t, n) {
                var i = t && n || 0
                  , o = t || []
                  , a = null != (e = e || {}).clockseq ? e.clockseq : h
                  , r = null != e.msecs ? e.msecs : (new Date).getTime()
                  , s = null != e.nsecs ? e.nsecs : f + 1
                  , l = r - p + (s - f) / 1e4;
                if (l < 0 && null == e.clockseq && (a = a + 1 & 16383),
                (l < 0 || r > p) && null == e.nsecs && (s = 0),
                s >= 1e4)
                    throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
                p = r,
                f = s,
                h = a;
                var c = (1e4 * (268435455 & (r += 122192928e5)) + s) % 4294967296;
                o[i++] = c >>> 24 & 255,
                o[i++] = c >>> 16 & 255,
                o[i++] = c >>> 8 & 255,
                o[i++] = 255 & c;
                var u = r / 4294967296 * 1e4 & 268435455;
                o[i++] = u >>> 8 & 255,
                o[i++] = 255 & u,
                o[i++] = u >>> 24 & 15 | 16,
                o[i++] = u >>> 16 & 255,
                o[i++] = a >>> 8 | 128,
                o[i++] = 255 & a;
                for (var m = e.node || _, v = 0; v < 6; v++)
                    o[i + v] = m[v];
                return t || d(o)
            }
            ,
            v.v4 = m,
            v.parse = function(e, t, n) {
                var i = t && n || 0
                  , o = 0;
                for (t = t || [],
                e.toLowerCase().replace(/[0-9a-f]{2}/g, (function(e) {
                    o < 16 && (t[i + o++] = l[e])
                }
                )); o < 16; )
                    t[i + o++] = 0;
                return t
            }
            ,
            v.unparse = d,
            v.BufferClass = r,
            v._rng = e,
            v._mathRNG = t,
            v._whatwgRNG = n,
            v
        }
        e.exports ? e.exports = new o : void 0 === (i = function() {
            return new o
        }
        .call(t, n, t, e)) || (e.exports = i);
        var a = "js-uuid";
        window.define(a, (function() {
            var t = "undefined"
              , n = typeof __webpack_exports__ === t ? typeof i === t ? typeof e === t ? void 0 : e.exports : i : __webpack_exports__;
            return n && n.default || n
        }
        )),
        window.require([a])
    }
    ,
    889433: (e, t, n) => {
        "use strict";
        n.r(t),
        n.d(t, {
            default: () => _
        });
        var i = n(661533)
          , o = n.n(i)
          , a = n(55188)
          , r = n.n(a)
          , s = n(259913)
          , l = n.n(s)
          , c = [{
            string: navigator.platform,
            sub_string: "Win",
            identity: "windows"
        }, {
            string: navigator.platform,
            sub_string: "Mac",
            identity: "mac"
        }, {
            string: navigator.userAgent,
            sub_string: "iPhone",
            identity: "iphone/ipod"
        }, {
            string: navigator.platform,
            sub_string: "Linux",
            identity: "linux"
        }]
          , d = function() {
            var e = l()();
            return this.os = this._getOS(),
            this.browser = this._getBrowser(e.name),
            this.version = e.versionNumber,
            this
        };
        r().extend(d.prototype, {
            _getBrowser: function(e) {
                switch (e) {
                case "ios":
                    return "safari";
                case "ie":
                    return "explorer";
                default:
                    return e || ""
                }
            },
            _getOS: function() {
                return function(e) {
                    for (var t = 0; t < e.length; t++) {
                        var n = e[t].string
                          , i = e[t].prop;
                        if (n) {
                            if (-1 !== n.indexOf(e[t].sub_string))
                                return e[t].identity
                        } else if (i)
                            return e[t].identity
                    }
                }(c) || ""
            }
        });
        var u = new d;
        o()((function() {
            o()("html").addClass("".concat(u.browser.toString(), " ").concat(u.os.toString()))
        }
        ));
        const _ = u;
        var h = "../build/transpiled/common/browserdetect";
        window.define(h, (function() {
            var e = "undefined"
              , n = typeof t === e ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === e ? typeof module === e ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : t;
            return n && n.default || n
        }
        )),
        window.require([h])
    }
    ,
    312309: (e, t, n) => {
        "use strict";
        n.r(t),
        n.d(t, {
            QStoJSON: () => u,
            getParam: () => h,
            getQueryParam: () => m,
            getQueryString: () => _,
            removeQueryParam: () => f,
            setParam: () => p,
            setQueryParam: () => v
        });
        var i = n(661533)
          , o = n.n(i)
          , a = n(55188)
          , r = n.n(a)
          , s = n(577486);
        function l(e, t) {
            return null != t && "undefined" != typeof Symbol && t[Symbol.hasInstance] ? !!t[Symbol.hasInstance](e) : e instanceof t
        }
        function c(e) {
            return e.indexOf("?") >= 0 ? e.split("?")[1] : e
        }
        function d(e) {
            try {
                e = decodeURIComponent(e.toString().replace(/\+/gi, " "))
            } catch (t) {
                e = ""
            }
            return e.toString()
        }
        function u(e) {
            var t, n, i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return "string" == typeof e ? i ? function(e, t) {
                var n, i = {}, a = c(e);
                return r().isObject(t) || (t = {
                    to_arrays: !1
                }),
                a ? (o().each(a.split("&"), (function(e, o) {
                    var a;
                    o = o.split("=");
                    try {
                        o[0] = decodeURIComponent(o[0])
                    } catch (e) {
                        return console.error(e),
                        i
                    }
                    if (void 0 !== i[o[0]])
                        l(i[o[0]], Array) ? i[o[0]].push(d(o[1] || "")) : (n = i[o[0]].toString(),
                        i[o[0]] = [n, d(o[1] || "")]);
                    else if (o[0].indexOf("[", 1) > 0) {
                        (a = o[0].split("["))[a.length] = d(o[1]);
                        var r = 0
                          , s = function(e, n) {
                            if (r < n.length - 1)
                                if (n[r] = n[r].replace("]", ""),
                                "" === n[r])
                                    Object.keys(e).length ? e[Object.keys(e).length] = n[n.length - 1] : e[0] = n[n.length - 1];
                                else {
                                    e[n[r]] = e[n[r]] || (t.to_arrays && "]" === n[r + 1] ? [] : {});
                                    var i = e[n[r]];
                                    ++r == n.length - 1 ? e[n[r - 1]] = n[r] : s(i, n)
                                }
                        };
                        s(i, a)
                    } else
                        i[o[0]] = function(e) {
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
                        }(o[1] || "")
                }
                )),
                i) : i
            }(e, i) : function(e) {
                var t, n = {}, i = c(e);
                if (!i)
                    return n;
                try {
                    o().each(i.split("&"), (function(e, i) {
                        (i = i.split("="))[0] = decodeURIComponent(i[0]),
                        void 0 === n[i[0]] ? n[i[0]] = d(i[1] || "") : l(n[i[0]], Array) ? n[i[0]].push(d(i[1] || "")) : (t = n[i[0]].toString(),
                        n[i[0]] = [t, d(i[1] || "")])
                    }
                    ))
                } catch (e) {
                    return console.error(e),
                    {}
                }
                return n
            }(e) : (t = e,
            n = [],
            r().each(t, (function(e, t) {
                "object" == typeof e ? r().each(e, (function(e, i) {
                    n.push("".concat(t, "[").concat(isNaN(i, 10) ? i : "", "]=").concat(encodeURIComponent(e)))
                }
                )) : n.push("".concat(t, "=").concat(encodeURIComponent(e)))
            }
            )),
            n.join("&"))
        }
        function _() {
            var e = window.location.href.replace(/.*\?/, "").toString();
            return e === window.location.href && (e = ""),
            e || ""
        }
        function h(e) {
            var t, n = window.location.pathname || "", i = new s.UnsafeRegExp("".concat(e.toString(), "/([^\\/]+)"),"i");
            return !(!n.length || !(t = n.match(i)) || 2 !== t.length) && 0 | (t[1] || 1)
        }
        function p(e, t) {
            var n = window.location.pathname
              , i = _();
            return t = t || {},
            r().each(e, (function(e, t) {
                h(t) ? n = n.replace(new s.UnsafeRegExp("(".concat(t, ")/([^/]?)+(/)?(.*)")), e && e.toString().length ? "$1/".concat(e, "/$4") : "$4") : e && e.toString().length && ("/" !== n.charAt(n.length - 1) && (n += "/"),
                n += "".concat(t, "/").concat(e, "/"))
            }
            )),
            n + (!0 !== t.only_path && i.length ? "?".concat(i) : "")
        }
        function f(e, t) {
            var n, i = (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}).shouldDecodeValues, o = void 0 === i || i, a = ((r().isUndefined(t) ? _() : t.replace(/^\?/, "")).replace(/\+/g, " ") || "").split(/[&;]/g);
            r().isArray(e) || (e = [e]);
            try {
                r().each(e, (function(e, t) {
                    for (n = "".concat(decodeURIComponent(e), "="),
                    t = a.length; t-- > 0; )
                        -1 !== (o ? decodeURIComponent(a[t]) : a[t]).lastIndexOf(n, 0) && a.splice(t, 1)
                }
                ))
            } catch (e) {
                console.error(e)
            }
            return t && 0 === t.indexOf("?") ? "?".concat(a.join("&")) : a.join("&")
        }
        function m(e) {
            var t = "?".concat(_().replace(/\[/g, "%5B").replace(/\]/g, "%5D"));
            e = e.replace(/\[/g, "%5B").replace(/\]/g, "%5D");
            var n, i = "[\\?&]".concat(e, "=([^&#]*)"), o = new s.UnsafeRegExp(i).exec(t);
            if (r().isNull(o))
                return !1;
            n = "phone" === e ? o[1] : o[1].replace(/\+/g, " ");
            try {
                n = decodeURIComponent(n)
            } catch (e) {
                return console.error(e),
                !1
            }
            return n
        }
        function v(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
              , n = window.location.pathname
              , i = r().isString(t.query_string) ? t.query_string : _();
            return 0 !== i.indexOf("?") && (i = "?".concat(i)),
            r().each(e, (function(e, t) {
                var n = "";
                if ("?" !== i && (n = -1 === i.indexOf("?") ? "?" : "&"),
                i = f(t, i),
                "object" == typeof e)
                    i = "".concat(i + n + t, "=").concat(e.join("&".concat(t, "=")));
                else {
                    e = encodeURIComponent(e);
                    var o = new s.UnsafeRegExp("([?|&])".concat(t.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&"), "=.*?(&|$)"),"ig")
                      , a = i.match(o);
                    if (a)
                        if (e)
                            i = i.replace(o, "$1".concat(t, "=").concat(e, "$2"));
                        else {
                            var r = a[0]
                              , l = r[0]
                              , c = "";
                            "&" === r[r.length - 1] && (c = l),
                            i = i.replace(o, c)
                        }
                    else
                        i += e ? "".concat(n + t, "=").concat(e) : ""
                }
            }
            )),
            0 !== i.indexOf("?") && (i = "?".concat(i)),
            !1 === t.question_mark && (i = i.replace(/^\?/, "")),
            (!0 === t.only_query_string ? "" : n) + ("?" === i ? "" : i.replace(/^\?&=?/, "?"))
        }
        var g = "../build/transpiled/common/urlparams";
        window.define(g, (function() {
            var e = "undefined"
              , n = typeof t === e ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === e ? typeof module === e ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : t;
            return n && n.default || n
        }
        )),
        window.require([g])
    }
    ,
    77305: (e, t, n) => {
        "use strict";
        n.r(t),
        n.d(t, {
            default: () => u
        });
        var i = n(661533)
          , o = n.n(i)
          , a = n(55188)
          , r = n.n(a)
          , s = n(460159)
          , l = n.n(s)
          , c = n(889378)
          , d = function(e) {
            var t = this;
            this.options = r().extend({}, e),
            this.modal = new c.default({
                can_centrify: !0,
                class_name: "".concat(r().isUndefined(this.options.class_name) ? "modal-list" : this.options.class_name, " js-modal-confirm"),
                disable_overlay_click: this.options.disable_overlay_click,
                init: l()._preload([t.options.template || "/tmpl/common/modal/confirm.twig"], (function(e) {
                    t.$modal_body = e,
                    e.trigger("modal:loaded").html(l()({
                        ref: t.options.template || "/tmpl/common/modal/confirm.twig"
                    }).render(o().extend({
                        decline_text: t.options.decline_text,
                        accept_text: t.options.accept_text,
                        button_class: t.options.button_class,
                        no_cancel: t.options.no_cancel
                    }, t.options, r().result(t.options, "getRenderParams", {})))).trigger("modal:centrify"),
                    r().isFunction(t.options.init) && t.options.init.call(t),
                    e.on("click", (function(e) {
                        o()(e.target).is(".button-input") || e.stopPropagation()
                    }
                    )).on("click", ".button-cancel", (function(e) {
                        e.stopPropagation(),
                        t.accepted = !1,
                        t.destroy()
                    }
                    )).on("click", ".modal-body__close", (function(e) {
                        e.stopPropagation(),
                        t.destroy()
                    }
                    )).on("click", ".js-modal-accept", (function(e) {
                        t.accepted = !0,
                        "function" == typeof t.options.accept ? (t.options.accept.call(t),
                        t.options.close_on_accept && t.destroy()) : t.destroy(),
                        e.stopPropagation()
                    }
                    ))
                }
                )),
                destroy: function() {
                    return !(t.xhr && 4 !== t.xhr.readyState || (t.modal.$modal.find(".modal-body").off(),
                    "function" == typeof t.options.destroy && t.options.destroy.call(t),
                    0))
                },
                onBeforeInit: t.options.onBeforeInit,
                tryAgain: t.options.tryAgain
            }),
            this.modal.$el.on("click", ".modal-scroller", r().bind((function(e) {
                e.stopPropagation()
            }
            )))
        };
        d.prototype.requestStart = function() {
            return this.modal ? this.modal.requestStart() : this.$modal_body.hide(),
            this
        }
        ,
        d.prototype.requestSuccess = function(e, t) {
            this.$modal_body.show(),
            this.modal.showSuccess(e, t)
        }
        ,
        d.prototype.requestFail = function(e, t) {
            this.$modal_body.show(),
            this.modal.showError(e, t)
        }
        ,
        d.prototype.destroy = function() {
            this._destroyed || this.modal.destroy(),
            this._destroyed = !0
        }
        ;
        const u = d;
        var _ = "../build/transpiled/components/base/confirm";
        window.define(_, (function() {
            var e = "undefined"
              , n = typeof t === e ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === e ? typeof module === e ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : t;
            return n && n.default || n
        }
        )),
        window.require([_])
    }
    ,
    510144: (e, t, n) => {
        "use strict";
        n.r(t),
        n.d(t, {
            default: () => _
        });
        var i = n(661533)
          , o = n.n(i)
          , a = n(55188)
          , r = n.n(a)
          , s = n(871082)
          , l = n.n(s)
          , c = n(521466);
        function d(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, i = new Array(t); n < t; n++)
                i[n] = e[n];
            return i
        }
        var u = l().Model.extend({
            initialize: function() {
                this.defaults = r().clone(this.attributes)
            },
            setDefaults: function() {
                this.defaults = r().defaults(this.defaults, this.attributes)
            },
            updateDefaults: function(e) {
                this.defaults = r().extend(this.defaults, e || this.attributes)
            },
            deepCloneDefaults: function() {
                this.defaults = JSON.parse(JSON.stringify(this.attributes))
            },
            hasChanges: function(e) {
                return e && !r().isUndefined(this.attributes[e]) ? this.attributes[e] !== this.defaults[e] : !r().isEqual(this.attributes, this.defaults)
            },
            set: function(e, t) {
                return l().Model.prototype.set.apply(this, arguments),
                r().isEmpty(e) || (r().isObject(e) ? r().each(e, (function(e, t) {
                    this._setChanges(t, e)
                }
                ), this) : this._setChanges(e, t)),
                this
            },
            _setChanges: function(e, t) {
                r().isUndefined(this.defaults) || (this.defaults[e] === t ? delete this.changed[e] : this.changed[e] = t)
            }
        });
        const _ = {
            View: c.default.extend({
                silent: !1,
                events: {
                    "input :input": "changeInModel",
                    "change :input": "changeInModel",
                    "controls:change :input": "changeInModel",
                    "change:with-default :input": "updateDefaultsAndChangeInModel"
                },
                initialize: function(e) {
                    var t = {
                        _onSave: r().noop,
                        onSaveError: r().noop,
                        onSaveForm: r().noop,
                        flat: !0,
                        new_attrs_dissalowed: !1
                    }
                      , n = e && e.model || u;
                    c.default.prototype.initialize.apply(this, arguments),
                    this.options = o().extend({}, t, e),
                    this.model = new n,
                    this.initModelFromForm(e)
                },
                save: function(e) {
                    var t, n, i = this, a = o().extend({
                        success: r().noop,
                        error: r().noop
                    }, e || {}), s = [r().extend({
                        success: r().bind((function(e) {
                            this.updateDefaults(),
                            r().isFunction(i.options._onSave) && i.options._onSave.call(this, e),
                            r().isFunction(i.options.onSaveForm) && i.options.onSaveForm.call(this, e),
                            a.success.apply(this, arguments),
                            i.checkChanges()
                        }
                        ), this.model),
                        error: function(e) {
                            r().isFunction(i.options._onError) && i.options._onError.call(this, e),
                            r().isFunction(i.options.onSaveError) && i.options.onSaveError.call(this, e),
                            a.error.apply(this, arguments)
                        }
                    }, r().omit(e, "success", "error"))];
                    return this.model.save === l().Model.prototype.save && s.unshift(this.model.toJSON()),
                    (t = this.model).save.apply(t, function(e) {
                        if (Array.isArray(e))
                            return d(e)
                    }(n = s) || function(e) {
                        if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"])
                            return Array.from(e)
                    }(n) || function(e, t) {
                        if (e) {
                            if ("string" == typeof e)
                                return d(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            return "Object" === n && e.constructor && (n = e.constructor.name),
                            "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? d(e, t) : void 0
                        }
                    }(n) || function() {
                        throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }())
                },
                revert: function(e) {
                    var t, n = this.model.attributes, i = !1;
                    r().isArray(e) && (i = !0,
                    n = r().pick(n, (function(t, n) {
                        return r().contains(e, n)
                    }
                    ))),
                    r().each(n, (function(e, n) {
                        e !== this.model.defaults[n] && (t = this.$el.find(':input[name="'.concat(n, '"]:not(.js-form-changes-skip)')),
                        this.setInputValue(t, this.model.defaults[n], n),
                        t.trigger("control:select:reset"))
                    }
                    ), this),
                    i ? (r().extend(this.model.attributes, r().pick(this.model.defaults, (function(t, n) {
                        return r().contains(e, n)
                    }
                    ))),
                    this.checkChanges()) : (this.model.attributes = r().clone(this.model.defaults),
                    this.model.trigger("has_reverted", {
                        type: "has_reverted"
                    }))
                },
                checkDeleted: function() {
                    r().each(this.model.attributes, (function(e, t) {
                        this.$el.find(':input[name="'.concat(t, '"]:not(.js-form-changes-skip)')).length || delete this.model.attributes[t]
                    }
                    ), this),
                    this.checkChanges()
                },
                initModelFromForm: function(e) {
                    this._initModelFromForm(e),
                    this.model.setDefaults(),
                    this.setUrl()
                },
                updateModelFromForm: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    this._initModelFromForm({
                        update: !0,
                        handle_skip_class_ignore: e.handle_skip_class_ignore || !1,
                        with_existing_attr_reassign: e.with_existing_attr_reassign || !1
                    }),
                    this.checkChanges()
                },
                setTrackingInputs: function(e) {
                    this._initModelFromForm({
                        $elem: e
                    }),
                    this.model.setDefaults()
                },
                _initModelFromForm: function(e) {
                    var t = !1;
                    t = (e = e || {}).with_existing_attr_reassign || this.options.with_existing_attr_reassign || t,
                    r().each((e.$elem || this.$el).find(":input"), (function(n) {
                        var i = o()(n)
                          , a = this.model.get(i.attr("name"));
                        if ((r().isUndefined(a) || "" === a || t) && (!i.hasClass("js-form-changes-skip") || e.update)) {
                            if (i.hasClass("js-form-changes-skip") && e.handle_skip_class_ignore)
                                return;
                            this.setModelValue(i)
                        }
                    }
                    ), this),
                    r().each((e.$elem || this.$el).find(".js-control-checkboxes_dropdown-huge"), (function(e) {
                        var t = o()(e).data("view");
                        t ? this.setModelValueForCheckboxesDropdownHuge(t) : o()(e).on("controls:view:init", r().bind((function() {
                            t = o()(e).data("view"),
                            this.setModelValueForCheckboxesDropdownHuge(t)
                        }
                        ), this))
                    }
                    ), this)
                },
                setUrl: function(e) {
                    this.model.url = e || this.$el.attr("action")
                },
                hasChanges: function(e) {
                    return this.model.hasChanges(e)
                },
                setInputValue: function(e, t, n) {
                    var i = e.attr("type");
                    switch (n = n || e.attr("name"),
                    i) {
                    case "checkbox":
                        e.prop("checked", t);
                        break;
                    case "radio":
                        "" === t ? (e.closest('[name="'.concat(n, '"]')),
                        e.prop("checked", !1)) : (e = e.closest('[name="'.concat(n, '"][value="').concat(t, '"]'))).prop("checked", !0);
                        break;
                    default:
                        e.val(t)
                    }
                    e.trigger("change").trigger("controls:change").trigger("autosize").trigger("controls:textarea:autosize"),
                    this.model.set(n, t)
                },
                getInputValue: function(e) {
                    var t = "";
                    switch (e.attr("type")) {
                    case "checkbox":
                    case "radio":
                        t = e.prop("checked") ? e.val() || "on" : "";
                        break;
                    default:
                        t = e.val()
                    }
                    return t
                },
                setModelValue: function(e, t) {
                    var n, i = e.attr("name"), o = this.model.get(i);
                    if (t = t || {},
                    1 == ("checkbox" === e[0].type && !1 === this.options.flat)) {
                        if (n = this.getInputValue(e),
                        o)
                            switch (r().isArray(o) || (o = [o]),
                            n ? o.push(n) : o = r().without(o, e.val()),
                            (n = r().sortBy(r().uniq(o), (function(e) {
                                return (e || "").toString()
                            }
                            ))).length) {
                            case 1:
                                n = n[0];
                                break;
                            case 0:
                                n = ""
                            }
                    } else
                        n = this.getInputValue(e);
                    t.update_default && (this.model.defaults[i] = n),
                    this.model.set(i, n, {
                        silent: t.base_form_silent || !1
                    })
                },
                setModelValueForCheckboxesDropdownHuge: function(e) {
                    var t = e.getCheckedItemsForFormModel();
                    r().extend(this.model.defaults, t),
                    this.model.set(t, {
                        silent: !0
                    })
                },
                toggleSilence: function(e) {
                    this.silent = r().isBoolean(e) ? e : !this.silent
                },
                updateDefaultsAndChangeInModel: function(e) {
                    this.changeInModel(e, {
                        update_default: !0
                    })
                },
                changeInModel: function(e, t) {
                    var n = o()(e.currentTarget);
                    if (t = t || {},
                    !this.silent && !n.hasClass("js-form-changes-skip")) {
                        if (!0 === this.options.new_attrs_dissalowed && r().isUndefined(r().propertyOf(this)(["model", "defaults", n.attr("name")])))
                            return;
                        this.setModelValue(n, t),
                        this.checkChanges()
                    }
                },
                checkChanges: function() {
                    var e = this.hasChanges()
                      , t = "has_changes";
                    return e || (t = "has_reverted"),
                    this.model.trigger(t, {
                        type: t
                    }),
                    e
                }
            }),
            Model: u
        };
        var h = "../build/transpiled/components/base/form";
        window.define(h, (function() {
            var e = "undefined"
              , n = typeof t === e ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === e ? typeof module === e ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : t;
            return n && n.default || n
        }
        )),
        window.require([h])
    }
    ,
    889378: (e, t, n) => {
        "use strict";
        n.r(t),
        n.d(t, {
            default: () => p
        });
        var i = n(661533)
          , o = n.n(i)
          , a = n(55188)
          , r = n.n(a)
          , s = n(460159)
          , l = n.n(s)
          , c = n(643095)
          , d = n(521466)
          , u = n(564638)
          , _ = r().template('<div <% if (scrollerId) { %>id="<%= scrollerId %>"<% } %> class="modal-scroller custom-scroll"><div class="modal-body modal-body-loading <% if (float_animation) { %>modal-body-float-animation<% } %>"></div></div>')
          , h = r().template('<div class="default-overlay modal-overlay <% if (!default_overlay) { %> modal-overlay--filled <% } %>"><span class="modal-overlay__spinner spinner-icon spinner-icon-abs-center"></span></div>');
        n(247267);
        const p = d.default.extend({
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
                var e = r().result(d.default.prototype, "events", {});
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
                return r().result(d.default.prototype, "document_events", {
                    "page:changed": "onPageChanged",
                    keydown: "onModalKeydown"
                })
            },
            _setOptions: function(e) {
                return this.options = o().extend({
                    class_name: "modal-list",
                    can_centrify: !1,
                    init: r().noop,
                    destroy: r().noop,
                    tryAgain: r().noop,
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
                d.default.prototype.initialize.call(this),
                this._setOptions(e).render(),
                APP.is_touch_device && this.options.can_centrify && r().delay(r().bind(this.onModalCentrify, this), 500),
                this.options.disable_resize || this._$window.on("resize".concat(this.ns), r().throttle(r().bind(this.onModalCentrify, this), u.WINDOW_RESIZE_THROTTLE_DELAY)),
                this.delegateEvents();
                var n = r().bind(this.options.init, this, this._elem("body"));
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
                    callback: r().bind(d.default.prototype.destroy, this, !0)
                }),
                this._elem("body").remove(),
                this.options.need_page_reload && this._$document.trigger("page:reload")
            },
            setNS: function() {
                this.ns = ".modal:core.".concat(r().uniqueId("modal_"))
            },
            render: function() {
                return this.$el.addClass(this.options.class_name),
                this.$el.html(_({
                    float_animation: this.options.init_animation,
                    scrollerId: this.options.scrollerId || ""
                })),
                this.$modal = this.$el,
                this.$overlay = o()(h({
                    default_overlay: this.options.default_overlay
                })),
                this.$el.append(this.$overlay),
                o()(this.options.container).append(this.$el),
                o()(".modal").length > 1 && this.$overlay.css(Modernizr.prefixed("transition"), "none"),
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
                var t = o()(".modal:visible", document.body)
                  , n = o()(e.target);
                if (t.length && r().findIndex(t, (function(e) {
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
                var t = o()(e.target);
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
                      , i = n ? n.offsetHeight : 0
                      , o = n ? n.parentNode.offsetHeight : 0
                      , a = this.options.without_offsets_on_centify ? 0 : 130;
                    if (r().isFunction(this.options.onModalPosition))
                        this.options.onModalPosition(t);
                    else if (i < o - a) {
                        var s = n.offsetWidth;
                        t.css({
                            marginTop: Math.ceil(-1 * (o / 2 - i / 2 + i)) + parseFloat(t.css("top")) % 1
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
                t = !r().isBoolean(t) || t,
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
                r().delay(r().bind((function() {
                    this._elem("body").attr("class", this._orig_class_name_before_error_success),
                    this._orig_class_name_before_error_success = "",
                    this.destroy(),
                    r().isFunction(t) && t()
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
                this._elem("body").one(APP.animation_event, r().bind((function(e) {
                    o()(e.currentTarget).removeClass("animated shake")
                }
                ), this)).addClass("animated shake")
            },
            onPageReloadAfterModalClose: function() {
                this.options.need_page_reload = !0
            }
        });
        var f = "../build/transpiled/components/base/modal";
        window.define(f, (function() {
            var e = "undefined"
              , n = typeof t === e ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === e ? typeof module === e ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : t;
            return n && n.default || n
        }
        )),
        window.require([f])
    }
    ,
    259056: (e, t, n) => {
        "use strict";
        n.r(t),
        n.d(t, {
            default: () => p
        });
        var i = n(55188)
          , o = n.n(i)
          , a = n(880774)
          , r = n(678640)
          , s = n(315702)
          , l = n(521466)
          , c = n(77305)
          , d = n(407042)
          , u = n(364899)
          , _ = n(661533)
          , h = "/ajax/v2/salesbot/";
        const p = l.default.extend({
            initialize: function(e) {
                var t = (0,
                a.i18n)("Are you sure you want to delete?")
                  , n = this._getEntityData(e)
                  , i = this;
                l.default.prototype.initialize.apply(this, arguments),
                this._addComponent(c.default, {
                    class_name: "modal-list",
                    text: t.replace("#PLACEHOLDER#", o().escape(n.placeholder)),
                    accept: function() {
                        n.url === h && s.storeWithExpiration.remove(d.default.SALESBOT_CACHE_CODE);
                        var t = n.selected;
                        (0,
                        u.sendBotDeleteConfirmLog)(t),
                        this.requestStart(),
                        i._preDeleteCallbacks(e),
                        _.ajax({
                            url: n.url,
                            type: n.request_type || "DELETE",
                            contentType: "application/json",
                            data: JSON.stringify(n.selected),
                            dataType: "json"
                        }).always(o().bind((function(t) {
                            t = (0,
                            r.cleanResponse)(t),
                            (t = i._getResponseData(t)) ? o().isFunction(e.complete) ? (e.complete(),
                            this.requestSuccess()) : (e.collection.reset(),
                            e.collection.trigger("list:reload", o().bind(this.requestSuccess, this))) : this.requestFail(APP.lang.modal_error_caption)
                        }
                        ), this))
                    }
                })
            },
            _preDeleteCallbacks: o().noop,
            _getResponseData: function(e) {
                return e.deleted
            },
            _getEntityData: function(e) {
                var t, n, i, o = e.collection.map((function(e) {
                    return e.get("id")
                }
                ));
                switch (e.entity) {
                case "salesbot":
                    n = (0,
                    a.numeralWord)(2, (0,
                    a.i18n)("selected salesbot,selected salesbots")),
                    i = e.collection.at(0).get("name"),
                    t = h;
                    break;
                case "helpbot_dataset":
                    n = (0,
                    a.numeralWord)(2, (0,
                    a.i18n)("selected phrase,selected phrases")),
                    i = e.collection.at(0).get("dataset_item"),
                    t = "/ajax/v2/training_phrases/";
                    break;
                default:
                    n = (0,
                    a.numeralWord)(2, (0,
                    a.i18n)("selected intent,selected intents")),
                    i = e.collection.at(0).get("intent").text,
                    t = "/private/ajax/v2/json/helpbot/"
                }
                return {
                    url: t,
                    placeholder: 1 === o.length ? i : n,
                    selected: o
                }
            }
        });
        var f = "../build/transpiled/components/lists/actions/helpbot/delete";
        window.define(f, (function() {
            var e = "undefined"
              , n = typeof t === e ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === e ? typeof module === e ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : t;
            return n && n.default || n
        }
        )),
        window.require([f])
    }
    ,
    364899: (e, t, n) => {
        "use strict";
        n.r(t),
        n.d(t, {
            sendBotDeleteConfirmLog: () => o
        });
        var i = (0,
        n(934763).default)({
            tags: ["bot_delete_confirm"]
        })
          , o = function(e) {
            "production" === APP.environment && i({
                deletedBotsIds: e
            })
        }
    }
    ,
    392517: (e, t, n) => {
        "use strict";
        n.r(t),
        n.d(t, {
            default: () => p
        });
        var i, o = n(55188), a = n.n(o), r = n(395882), s = n.n(r), l = n(130860), c = n.n(l), d = n(857098), u = n(115129), _ = n(661533), h = function() {
            (i = new d.default("/api/v2")).loadBackendVersion(),
            this.eTags = {},
            this.setBackendVersion = a().bind(i.setBackendVersion, i)
        };
        a().extend(h.prototype, {
            registerAccount: function(e, t) {
                var n = i.makeUrl("/register")
                  , o = {
                    account_id: +e,
                    domain: t
                };
                return i.request("POST", n, o)
            },
            sendMessage: function(e, t, n, o, r, s, l, c, d) {
                var u = i.makeUrl("/account_id/messages/send")
                  , _ = {
                    subject: n,
                    attachments: s || {},
                    content_type: r || "text",
                    content: o,
                    template_fields: l || {}
                };
                return a().isNull(d) || (_.entity_id = +c,
                _.entity_type = d),
                a().isObject(e) ? _.from = e : _.from = {
                    mailbox_id: +e
                },
                _ = a().extend(_, t),
                i.request("POST", u, _)
            },
            getComposeDataForEntity: function(e, t) {
                var n = i.makeUrl("/account_id/type/entity_id/compose", {
                    entity_id: e,
                    type: t
                });
                return i.request("GET", n)
            },
            createEntitiesFromThreads: function(e, t, n, o) {
                var a = i.makeUrl("/account_id/type/create", {
                    type: t
                })
                  , r = {
                    thread_id: e,
                    fields: n,
                    name: o
                };
                return i.request("POST", a, r)
            },
            linkEntityToThread: function(e, t, n) {
                var o = i.makeUrl("/account_id/threads/thread_id/link", {
                    thread_id: e
                })
                  , a = {
                    entity_type: t,
                    entity_id: n
                };
                return i.request("POST", o, a)
            },
            listThreads: function(e, t, n, o, r) {
                var s, l = {
                    fields: e,
                    type: t,
                    page: n || 1
                };
                return s = o ? i.makeUrl("/account_id/mailboxes/mailbox_id/threads", {
                    mailbox_id: o
                }) : i.makeUrl("/account_id/threads"),
                l = a().extend({}, l, r),
                i.request("GET", s, l, null, {
                    cache: !1
                })
            },
            getThread: function(e, t) {
                var n = i.makeUrl("/account_id/threads/thread_id", {
                    thread_id: e
                });
                return i.request("GET", n, null, null, t)
            },
            shareThreads: function(e) {
                var t = i.makeUrl("/account_id/threads/share");
                return i.request("POST", t, e || [])
            },
            getExternalAddresses: function() {
                var e = i.makeUrl("/account_id/whitelist/external");
                return i.request("GET", e)
            },
            updateExternalAddresses: function(e) {
                var t = i.makeUrl("/account_id/whitelist/external")
                  , n = a().isEmpty(e) ? "DELETE" : "POST";
                return i.request(n, t, e || [])
            },
            shareThread: function(e, t, n) {
                t = a().isObject(t) ? t : {};
                var o = i.makeUrl("/account_id/threads/thread_id/share", {
                    thread_id: e
                })
                  , r = a().extend(t, {
                    note: n
                });
                return i.request("POST", o, r)
            },
            resendThreads: function(e) {
                var t = i.makeUrl("/account_id/threads/resend");
                return i.request("POST", t, e || [])
            },
            getMessages: function(e, t, n, o) {
                var a = i.makeUrl("/account_id/threads/thread_id/messages", {
                    thread_id: e
                });
                return i.request("GET", a, {
                    page: t,
                    limit: n,
                    opened_at: !0
                }, null, o)
            },
            resendMessage: function(e, t) {
                var n = i.makeUrl("/account_id/threads/thread_id/messages/message_id/resend", {
                    thread_id: e,
                    message_id: t
                });
                return i.request("POST", n)
            },
            resendThread: function(e) {
                var t = i.makeUrl("/account_id/threads/thread_id/resend", {
                    thread_id: e
                });
                return i.request("POST", t)
            },
            unlinkThread: function(e) {
                var t = i.makeUrl("/account_id/threads/thread_id/unlink", {
                    thread_id: e
                });
                return i.request("POST", t)
            },
            linkThread: function(e, t, n) {
                var o = i.makeUrl("/account_id/threads/thread_id/link", {
                    thread_id: e
                })
                  , a = {
                    entity_type: t,
                    entity_id: n
                };
                return i.request("POST", o, a)
            },
            requestOAuthConnect: function(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
                  , o = i.makeUrl("/account_id/mailboxes/oauth")
                  , r = a().extend({
                    provider: e,
                    back_url: t
                }, n);
                return i.request("GETJSON", o, r)
            },
            completeOAuthConnect: function(e, t, n, o, a) {
                var r = {
                    name: e,
                    token: t
                };
                o && (r.user_id = o,
                r.access = a ? u.default.MAILBOX_ACCESS_ADMIN : u.default.MAILBOX_ACCESS_OWNER),
                n && (r.settings = n);
                var s = i.makeUrl("/account_id/mailboxes/oauth");
                return i.request("POST", s, r)
            },
            requestOAuthMailboxConnect: function(e, t) {
                var n = i.makeUrl("/account_id/mailboxes/mailbox_id/oauth", {
                    mailbox_id: e
                })
                  , o = {
                    back_url: t
                };
                return i.request("GETJSON", n, o)
            },
            enableOAuthMailbox: function(e, t) {
                return this.enableMailbox(e, {
                    token: t
                })
            },
            getUploadSandbox: function() {
                var e = i.makeUrl("/account_id/upload");
                return i.request("GET", e)
            },
            createParserTemplate: function(e, t, n) {
                var o = i.makeUrl("/account_id/mailboxes/mailbox_id/message_template", {
                    mailbox_id: e
                })
                  , a = {
                    content: t,
                    content_markers: n
                };
                return i.request("POST", o, a)
            },
            updateParserTemplate: function(e, t, n, o) {
                var a = i.makeUrl("/account_id/mailboxes/mailbox_id/message_template", {
                    mailbox_id: e
                })
                  , r = {
                    content: t,
                    content_markers: n,
                    fields_info: o || {}
                };
                return i.request("POST", a, r)
            },
            getParserTemplate: function(e) {
                var t = i.makeUrl("/account_id/mailboxes/mailbox_id/message_template", {
                    mailbox_id: e
                });
                return i.request("GET", t)
            },
            fetchAttachment: function(e) {
                var t = i.makeUrl("/account_id/attachments/".concat(e));
                return i.request("POST", t)
            },
            getAttachment: function(e) {
                var t = i.makeUrl("/account_id/attachments/".concat(e));
                return i.request("GET", t)
            },
            uploadFiles: function(e, t) {
                var n = _.Deferred()
                  , o = {
                    "X-Upload-Version": 2,
                    "X-Upload-Token": t.token,
                    "X-Upload-Key": t.key
                };
                return s().upload({
                    cache: !0,
                    url: t.url,
                    headers: o,
                    complete: function(e, a) {
                        !1 === e ? i.requestRaw("GET", t.url, {}, o).done((function(e) {
                            n.resolve(e)
                        }
                        )).fail((function(e) {
                            n.reject(e.responseJSON || {
                                error_code: "complete_failed"
                            }, e)
                        }
                        )) : n.reject({
                            error_code: "upload_failed",
                            message: e
                        }, a)
                    },
                    fileupload: function(e, t, i) {
                        var o;
                        (o = n).notify.apply(o, arguments)
                    },
                    fileprogress: function(e, t, i, o) {
                        n.notify(e, i, t, o)
                    },
                    filecomplete: function(e, t, i, o) {
                        n.notify(e, t, i, o)
                    },
                    prepare: function(e, t) {
                        t.headers["X-Upload-Id"] = c()().toString(),
                        e.uuid = t.headers["X-Upload-Id"]
                    },
                    files: e,
                    chunkSize: +s().MB,
                    chunkUploadRetry: 3
                }),
                n
            },
            getTemplates: function(e) {
                var t = i.makeUrl("/account_id/templates")
                  , n = {};
                return a().isUndefined(e) || (n.type = e),
                i.resolveOnCache(i.request("GET", t, n, this.applyEtag("templates")), i.makeRequest("GET", t, n))
            },
            touchTemplates: function() {
                var e = i.makeUrl("/account_id/templates");
                return i.request("HEAD", e, null, this.applyEtag("templates"))
            },
            addTemplate: function(e, t) {
                var n = i.makeUrl("/account_id/templates")
                  , o = {
                    name: e,
                    fields: t || {}
                };
                return i.request("POST", n, o).done(this.storeEtagOnDone("templates"))
            },
            updateTemplate: function(e, t) {
                var n = i.makeUrl("/account_id/templates/".concat(e));
                return i.request("PATCH", n, t).done(this.storeEtagOnDone("templates"))
            },
            getTemplate: function(e) {
                var t = i.makeUrl("/account_id/templates/".concat(e));
                return i.resolveOnCache(i.request("GET", t, null, this.applyEtag("templates")), i.makeRequest("GET", t))
            },
            removeTemplate: function(e) {
                var t = i.makeUrl("/account_id/templates/".concat(e));
                return i.request("DELETE", t).done(this.storeEtagOnDone("templates"))
            },
            sortTemplate: function(e, t) {
                return this.updateTemplate(e, {
                    sort: {
                        after: t
                    }
                }).done(this.storeEtagOnDone("templates"))
            },
            getTemplateMarkers: function() {
                var e = _.Deferred();
                return e.resolve([{
                    name: "contact_name",
                    code: "{{contact.name}}"
                }, {
                    name: "profile_name",
                    code: "{{profile.name}}"
                }, {
                    name: "profile_phone",
                    code: "{{profile.phone}}"
                }]),
                e.promise()
            },
            getMailboxes: function(e) {
                var t = i.makeUrl("/account_id/mailboxes");
                return i.request("GET", t, {
                    mode: e
                })
            },
            getMailbox: function(e) {
                var t = i.makeUrl("/account_id/mailboxes/".concat(e));
                return i.request("GET", t)
            },
            getMailboxStatus: function(e) {
                var t = i.makeUrl("/account_id/mailboxes/mailbox_id/status", {
                    mailbox_id: e
                });
                return i.request("GET", t)
            },
            getMailboxesStatus: function(e) {
                var t = i.makeUrl("/account_id/mailboxes/status");
                return i.request("GET", t, {
                    id: e || []
                })
            },
            enableMailbox: function(e, t) {
                var n = i.makeUrl("/account_id/mailboxes/mailbox_id", {
                    mailbox_id: e
                })
                  , o = a().extend({
                    active: !0
                }, t || {});
                return i.request("PATCH", n, o)
            },
            cancelConnection: function(e) {
                var t = i.makeUrl("/account_id/mailboxes/mailbox_id/cancel", {
                    mailbox_id: e
                });
                return i.request("POST", t)
            },
            addMailbox: function(e, t, n, o) {
                var a = i.makeUrl("/account_id/mailboxes");
                return (t = t || {}).email = e,
                n && (t.user_id = +n,
                t.access = o ? u.default.MAILBOX_ACCESS_ADMIN : u.default.MAILBOX_ACCESS_OWNER),
                i.request("POST", a, t)
            },
            createMailbox: function(e) {
                var t = i.makeUrl("/account_id/mailboxes/create")
                  , n = {
                    type: e
                };
                return i.request("POST", t, n)
            },
            getMailboxSetupSettings: function(e) {
                var t = i.makeUrl("/account_id/mailbox_setup/mailbox_id", {
                    mailbox_id: e
                });
                return i.request("GET", t)
            },
            getMailboxConfirmMessage: function(e) {
                var t = i.makeUrl("/account_id/mailbox_setup/mailbox_id/confirm_message", {
                    mailbox_id: e
                });
                return i.request("GET", t)
            },
            getTemplateMessage: function(e) {
                var t = i.makeUrl("/account_id/threads/thread_id/messages/parser_message_template", {
                    thread_id: e
                });
                return i.request("GET", t)
            },
            updateMailbox: function(e, t) {
                var n = i.makeUrl("/account_id/mailboxes/mailbox_id", {
                    mailbox_id: e
                });
                return t = t || {},
                i.request("PATCH", n, t)
            },
            updateMailboxSetup: function(e, t, n) {
                var o = i.makeUrl("/account_id/mailbox_setup/mailbox_id", {
                    mailbox_id: e
                })
                  , a = {
                    status: t,
                    state: n
                };
                return i.request("PATCH", o, a)
            },
            changeMailboxAuth: function(e, t) {
                var n = i.makeUrl("/account_id/mailboxes/mailbox_id", {
                    mailbox_id: e
                })
                  , o = {
                    auth: t
                };
                return i.request("PATCH", n, o)
            },
            getDomain: function(e) {
                var t = i.makeUrl("/account_id/domains/domain_id", {
                    domain_id: e
                });
                return i.request("GET", t)
            },
            getDomainStatus: function(e, t) {
                var n = i.makeUrl("/account_id/domains/domain_id/status/uuid", {
                    domain_id: e,
                    uuid: t
                });
                return i.request("GET", n)
            },
            checkDomain: function(e) {
                var t = i.makeUrl("/account_id/domains/domain_id/check", {
                    domain_id: e
                });
                return i.request("POST", t)
            },
            changeMailboxOwner: function(e, t, n) {
                var o = i.makeUrl("/account_id/mailboxes/mailbox_id", {
                    mailbox_id: e
                });
                if (a().isUndefined(t))
                    throw new Error("Logic error user_id must be set");
                var r = {
                    user_id: t
                };
                return t && (r.access = n ? u.default.MAILBOX_ACCESS_ADMIN : u.default.MAILBOX_ACCESS_OWNER),
                i.request("PATCH", o, r)
            },
            disableMailbox: function(e) {
                var t = i.makeUrl("/account_id/mailboxes/mailbox_id", {
                    mailbox_id: e
                });
                return i.request("PATCH", t, {
                    active: !1
                })
            },
            deleteMailbox: function(e) {
                var t = i.makeUrl("/account_id/mailboxes/mailbox_id", {
                    mailbox_id: e
                });
                return i.request("DELETE", t)
            },
            readThread: function(e) {
                var t = i.makeUrl("/account_id/threads/read")
                  , n = {
                    threads: e
                };
                return i.request("POST", t, n)
            },
            unreadThread: function(e) {
                var t = i.makeUrl("/account_id/threads/unread")
                  , n = {
                    threads: e
                };
                return i.request("POST", t, n)
            },
            getUserSignature: function(e) {
                var t = i.makeUrl("/account_id/signatures")
                  , n = {
                    user_id: e
                };
                return i.resolveOnCache(i.request("GET", t, n, this.applyEtag("signatures")), i.makeRequest("GET", t, n))
            },
            getSignatures: function() {
                var e = i.makeUrl("/account_id/signatures");
                return i.resolveOnCache(i.request("GET", e, null, this.applyEtag("signature")), i.makeRequest("GET", e))
            },
            touchSignatures: function() {
                var e = i.makeUrl("/account_id/signatures");
                return i.request("HEAD", e, null, this.applyEtag("signature"))
            },
            addSignature: function(e, t) {
                var n = i.makeUrl("/account_id/signatures")
                  , o = {
                    user_id: e,
                    content: t
                };
                return i.request("POST", n, o).done(this.storeEtagOnDone("signature"))
            },
            updateSignature: function(e, t, n) {
                var o = i.makeUrl("/account_id/signatures/signature_id", {
                    signature_id: e
                })
                  , a = {
                    content: n,
                    user_id: t
                };
                return i.request("PATCH", o, a).done(this.storeEtagOnDone("signature"))
            },
            deleteSignature: function(e) {
                var t = i.makeUrl("/account_id/signatures/signature_id", {
                    signature_id: e
                });
                return i.request("DELETE", t).done(this.storeEtagOnDone("signature"))
            },
            applyEtag: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                return this.eTags[e] && (t["If-None-Match"] = this.eTags[e],
                delete this.eTags[e]),
                t
            },
            storeEtagOnDone: function(e) {
                return a().bind((function(t, n, i) {
                    var o = i.getResponseHeader("ETag");
                    a().isEmpty(o) || (this.eTags[e] = o)
                }
                ), this)
            }
        });
        const p = new h;
        var f = "../build/transpiled/components/mail/api_v2";
        window.define(f, (function() {
            var e = "undefined"
              , n = typeof t === e ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === e ? typeof module === e ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : t;
            return n && n.default || n
        }
        )),
        window.require([f])
    }
    ,
    857098: (e, t, n) => {
        "use strict";
        n.r(t),
        n.d(t, {
            default: () => u
        });
        var i = n(55188)
          , o = n.n(i)
          , a = n(661533)
          , r = n.n(a)
          , s = n(988050)
          , l = n(729153);
        function c(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, i = new Array(t); n < t; n++)
                i[n] = e[n];
            return i
        }
        var d = function(e, t) {
            this.base_path = e,
            this.headers = o().extend({
                "X-Requested-With": "XMLHttpRequest"
            }, t || {})
        };
        o().extend(d.prototype, {
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
                var n = r().Deferred()
                  , i = o().bind((function() {
                    for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
                        t[i] = arguments[i];
                    n.resolve.apply(this, t)
                }
                ), this)
                  , a = o().bind((function() {
                    for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
                        t[i] = arguments[i];
                    n.reject(this, t)
                }
                ), this);
                return e.done((function(e, n, o) {
                    304 === o.status ? t().done(i).fail(a) : i.apply(this, arguments)
                }
                )).fail(a),
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
                    var n = r().Deferred();
                    return n.resolve(),
                    n.promise()
                }
                var i = "".concat(t.server_base, "/api/v2/register")
                  , a = APP.constant("account")
                  , s = {
                    account_id: a.id,
                    domain: a.subdomain
                }
                  , l = o().extend(this.getAjaxDefaults(), {
                    url: i,
                    data: JSON.stringify(s),
                    type: "POST",
                    dataType: "json"
                })
                  , c = r().ajax(l);
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
            _request: function(e, t, n, i, a) {
                var s = r().Deferred();
                i = i || {},
                n = n || {},
                "GET" !== e && (n = JSON.stringify(n),
                "GETJSON" === e ? i["X-Http-Method-Override"] = "GET" : "POST" !== e && (i["X-Http-Method-Override"] = e),
                e = "POST");
                var c = o().extend(this.getAjaxDefaults(i), {
                    url: t,
                    data: n,
                    type: e,
                    dataType: "json"
                }, a || {});
                return r().ajax(c).done((function() {
                    s.resolve.apply(null, arguments)
                }
                )).fail((function(e) {
                    401 === e.status ? l.default.checkAuth((function() {
                        return r().ajax(c)
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
                  , i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}
                  , a = arguments.length > 4 ? arguments[4] : void 0
                  , s = o().extend({
                    url: t,
                    data: n,
                    type: e,
                    headers: i,
                    dataType: "json"
                }, a || {});
                return r().ajax(s)
            },
            request: function(e, t, n, i, a) {
                var r = this;
                return this.checkAccount().always((function() {
                    r.request = r._request
                }
                )).then(o().bind(r._request, this, e, t, n, i, a))
            }
        });
        const u = d;
        var _ = "../build/transpiled/components/mail/base_api";
        window.define(_, (function() {
            var e = "undefined"
              , n = typeof t === e ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === e ? typeof module === e ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : t;
            return n && n.default || n
        }
        )),
        window.require([_])
    }
    ,
    115129: (e, t, n) => {
        "use strict";
        n.r(t),
        n.d(t, {
            MAILBOX_AUTH_TYPES: () => h,
            MAILBOX_ERRORS: () => _,
            MAILBOX_ERROR_GROUPS_CODES: () => m,
            MAILBOX_GENERAL_ERRORS: () => d,
            MAILBOX_GENERAL_ERROR_CODES: () => u,
            MAILBOX_GROUPS_ERROR: () => f,
            MAILBOX_STATES: () => i,
            MAILBOX_STATE_CODES: () => o,
            MAILBOX_STATUSES: () => a,
            MAILBOX_STATUS_CODES: () => r,
            MAILBOX_TYPES: () => s,
            MAILBOX_TYPE_CODES: () => l,
            MAILBOX_VALIDATION_ERRORS: () => c,
            default: () => p
        });
        var i = {
            complete: "complete",
            locked: "locked",
            connection: "connection",
            convertation: "convertation"
        }
          , o = [i.complete, i.locked, i.connection, i.convertation]
          , a = {
            connection: "connection",
            import: "import",
            sync: "sync",
            locked: "locked",
            disabled: "disabled",
            complete: "complete"
        }
          , r = [a.connection, a.import, a.sync, a.locked, a.disabled, a.complete]
          , s = {
            internal: "internal",
            shared: "shared",
            private: "private",
            parser: "parser"
        }
          , l = [s.internal, s.shared, s.private, s.parser]
          , c = {
            temporary_locked: "temporary_locked"
        }
          , d = {
            locked: "locked",
            reauth_required: "reauthorization_required",
            oauth_conn_error: "oauth_connection_error",
            conn_error: "connection_error",
            list_folders: "list_folders",
            no_sent_folders: "no_sent_folder"
        }
          , u = [d.locked, d.reauth_required, d.oauth_conn_error, d.conn_error, d.list_folders, d.no_sent_folders]
          , _ = {
            auth_invalid_credentials: "auth.invalid_credentials",
            auth_token_refresh: "auth.token_refresh",
            imap_auth_error: "imap.auth.error",
            imap_conn_error: "imap.conn.error",
            imap_conn_timeout: "imap.conn.timeout",
            imap_conn_wrong_proto: "imap.conn.wrong_proto",
            imap_conn_tls_invalid_cert: "imap.conn.tls_invalid_cert",
            smtp_auth_error: "smtp.auth.error",
            smtp_conn_error: "smtp.conn.error",
            smtp_conn_timeout: "smtp.conn.timeout",
            smtp_conn_wrong_proto: "smtp.conn.wrong_proto",
            smtp_conn_tls_invalid_cert: "smtp.conn.tls_invalid_cert"
        }
          , h = {
            login: "login",
            oauth: "oauth"
        };
        const p = {
            MAILER_AMO: "amo",
            MAILER_PROVIDER: "provider",
            MAILBOX_ACCESS_OWNER: 0,
            MAILBOX_ACCESS_ADMIN: 1
        };
        var f = {
            connection_group_error: "connection_group_error",
            timeout_group_error: "timeout_group_error",
            auth_group_error: "auth_group_error",
            oauth_group_error: "oauth_group_error"
        }
          , m = [f.connection_group_error, f.timeout_group_error, f.auth_group_error, f.oauth_group_error]
          , v = "../build/transpiled/components/mail/constants";
        window.define(v, (function() {
            var e = "undefined"
              , n = typeof t === e ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === e ? typeof module === e ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : t;
            return n && n.default || n
        }
        )),
        window.require([v])
    }
    ,
    234158: (e, t, n) => {
        "use strict";
        n.r(t),
        n.d(t, {
            default: () => h
        });
        var i = n(661533)
          , o = n.n(i)
          , a = n(55188)
          , r = n.n(a)
          , s = n(460159)
          , l = n.n(s)
          , c = n(880774)
          , d = n(678640)
          , u = n(521466)
          , _ = n(889378);
        const h = u.default.extend({
            _url: function() {
                throw new Error("Must be overridden")
            },
            $el: null,
            _xhr: null,
            _destroy_from_modal: !1,
            _ajax_params: null,
            _callbacks: {
                afterDestroy: r().noop,
                destroy: r().noop,
                complete: r().noop,
                failed: r().noop
            },
            initialize: function(e) {
                this.options = r().extend({}, e),
                u.default.prototype.initialize.apply(this, arguments),
                this.setParams(e),
                this.initModal()
            },
            destroy: function() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                    t[n] = arguments[n];
                this._destroy_from_modal || this.modal && r().isFunction(this.modal.destroy) && !1 !== this.modal.destroy() && delete this.modal,
                u.default.prototype.destroy.apply(this, t),
                this._callbacks.afterDestroy.apply(this, t)
            },
            tryAgain: r().noop,
            initModal: function() {
                return this.modal = new _.default({
                    class_name: "modal-list ".concat(this._class("modal")),
                    preload_templates: r().result(this, "preload", []),
                    init: r().bind(this._initModal, this),
                    tryAgain: r().bind(this.tryAgain, this),
                    destroy: r().bind((function() {
                        return this._xhr && !r().isUndefined(this._xhr.status) && this._xhr.abort(),
                        !1 !== this._callbacks.destroy.call(this) && (this._destroy_from_modal = !0,
                        this.destroy(),
                        !0)
                    }
                    ), this)
                }),
                this
            },
            _initModal: function(e) {
                this.setElement(e).render().center().preventClicks()
            },
            save: function(e) {
                this._elem("save_btn").trigger("button:load:start"),
                this._xhr || (this._xhr = this._makeRequest(e).always(r().bind(this.actionComplete, this)))
            },
            _makeRequest: function(e) {
                var t = this.getDataForRequest(e);
                return o().ajax(r().extend({
                    url: r().result(this, "_url"),
                    data: t,
                    type: "POST",
                    dataType: "json"
                }, this._ajax_params || {}))
            },
            actionComplete: function(e) {
                if (e = (0,
                d.cleanResponse)(e),
                this._elem("save_btn").trigger("button:load:stop"),
                !this.isValidResponse(e))
                    throw this._xhr = null,
                    this._callbacks.failed.call(this, e),
                    this.destroy(),
                    new Error("Invalid response: ".concat(JSON.stringify(e)));
                this._xhr = null,
                this._callbacks.complete.call(this, e),
                this.destroy()
            },
            setParams: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return r().each(this._callbacks, (function(t, n) {
                    this._callbacks[n] = this.wrapCallback(n, e[n])
                }
                ), this),
                e.url && (this._url = e.url),
                this
            },
            wrapCallback: function(e, t) {
                return r().isFunction(t) || (t = r().noop),
                t
            },
            getDataForRequest: function() {
                throw new Error("Must be implemented by subclass!")
            },
            isValidResponse: function(e) {
                return !!e
            },
            _classes: function() {
                return {
                    modal: "action_modal",
                    actions: "modal-body__actions",
                    save_btn: "modal-body__actions__save"
                }
            },
            center: function() {
                return this.$el.trigger("modal:loaded").trigger("modal:centrify"),
                document.activeElement && document.activeElement.blur(),
                this
            },
            events: function() {
                var e = {};
                return e["click ".concat(this._selector("save_btn"), ":not(.button-input-disabled)")] = "clickSaveBtn",
                e
            },
            preventClicks: function() {
                return this.modal.$modal.on("click".concat(this.ns), (function(e) {
                    e.stopPropagation()
                }
                )),
                this
            },
            clickSaveBtn: function() {
                this.save()
            },
            _template: "/tmpl/common/modal/delete.twig",
            preload: function() {
                return [this._template]
            },
            render: function() {
                var e = l()({
                    ref: this._template
                });
                return this.$el.trigger("modal:loaded"),
                this.$el.html(e.render(this.getTemplateParams())),
                this
            },
            getTemplateParams: function() {
                return {
                    caption: (0,
                    c.i18n)("Caption text"),
                    message: [{
                        text: (0,
                        c.i18n)("This is forever! Seriously, think!")
                    }],
                    accept_text: (0,
                    c.i18n)("Confirm")
                }
            }
        });
        var p = "../build/transpiled/components/modals/action";
        window.define(p, (function() {
            var e = "undefined"
              , n = typeof t === e ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === e ? typeof module === e ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : t;
            return n && n.default || n
        }
        )),
        window.require([p])
    }
    ,
    202800: (e, t, n) => {
        "use strict";
        n.r(t),
        n.d(t, {
            default: () => r
        });
        var i = n(55188)
          , o = n.n(i)
          , a = n(234158);
        const r = a.default.extend({
            _classes: function() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                    t[n] = arguments[n];
                return o().extend(a.default.prototype._classes.apply(this, t), {
                    modal: "confirm_catalog_delete"
                })
            },
            _template: "/tmpl/common/modal/delete.twig"
        });
        var s = "../build/transpiled/components/modals/delete";
        window.define(s, (function() {
            var e = "undefined"
              , n = typeof t === e ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === e ? typeof module === e ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : t;
            return n && n.default || n
        }
        )),
        window.require([s])
    }
    ,
    729153: (e, t, n) => {
        "use strict";
        n.r(t),
        n.d(t, {
            default: () => f
        });
        var i = n(661533)
          , o = n.n(i)
          , a = n(55188)
          , r = n.n(a)
          , s = n(315702)
          , l = n(208928)
          , c = n(513934)
          , d = APP.constant("version")
          , u = APP.constant("version_backend")
          , _ = r().propertyOf(window)(["performance", "timing", "responseEnd"]) || 0
          , h = null;
        function p(e, t) {
            var n = Date.now() - _
              , i = o().Deferred();
            return n < (t = r().isNumber(t) ? t : 6e4) ? e().then(i.resolve, i.reject) : (_ = Date.now(),
            h || (h = o().ajax({
                url: "/private/ping.php"
            }).always((function() {
                h = null
            }
            ))),
            h.done((function() {
                e().then(i.resolve, i.reject)
            }
            )).fail(i.reject)),
            i.promise()
        }
        "production" === APP.environment && o()(document).ajaxComplete((function(e, t, n) {
            var i = APP.constant("server")
              , a = t.getResponseHeader("X-Core-Version")
              , _ = t.getResponseHeader("X-Core-Server")
              , h = t.getResponseHeader("X-Core-Version-Backend")
              , p = t.getResponseHeader("X-Generation-Time")
              , f = t.getResponseHeader("X-Generation-Time-System")
              , m = t.getResponseHeader("X-Core-Session-Token")
              , v = t.getResponseHeader("X-Core-Widgets-Cache-Version")
              , g = {}
              , y = 0
              , b = t === APP.page_xhr
              , w = (0,
            l.getCallingStatus)()
              , E = r().isNull(a) || d === a
              , A = r().isNull(h) || u === h;
            _ && _ !== i && APP.constant("server", _),
            m && m !== APP.constant("session_token") && APP.constant("session_token", m),
            (p || f) && (y = p || f,
            o()(document).find(".generation-time").append("<br>".concat(y, " - ").concat(n.url))),
            E && A || w || (A && b || !A) && (window.location.href = document.URL),
            r().isEmpty(v) || (g[APP.getWidgetsArea()] = v,
            r().extend(APP.constant("widgets_cache_version"), g),
            s.storeWithExpiration.remove(c.default.getCacheCode()))
        }
        ));
        const f = {
            check: function() {
                var e = o().Deferred();
                return e.resolve(),
                p(e.promise, 0)
            },
            checkAuth: p
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
    934763: (e, t, n) => {
        "use strict";
        n.r(t),
        n.d(t, {
            default: () => u
        });
        var i = n(55188)
          , o = n.n(i)
          , a = n(661533)
          , r = n.n(a)
          , s = n(889433)
          , l = {
            token: "283c2980-b2ea-49fb-a03d-0125a8e35450",
            common_tags: ["core"]
        }
          , c = {
            meta: {
                account_id: APP.constant("account").id,
                user_id: APP.constant("user").id,
                top_level_domain: APP.constant("account").top_level_domain,
                account_language: APP.constant("account").language,
                country: APP.constant("geoip_country") || "",
                user_language: APP.lang_id,
                browser: {
                    name: s.default.browser,
                    version: String(s.default.version)
                },
                os: s.default.os
            }
        }
          , d = function(e, t) {
            return r().ajax({
                url: "https://logs-01.loggly.com/inputs/".concat(l.token),
                headers: {
                    "X-LOGGLY-TAG": t.join(",")
                },
                data: JSON.stringify(e),
                type: "POST",
                contentType: "application/json"
            })
        };
        function u(e) {
            var t = l.common_tags.concat(e.tags || []);
            return function(e, n) {
                var i = e ? {
                    additional_info: e
                } : {}
                  , a = o().extend({}, c, i, {
                    referer: window.location.href
                })
                  , r = t.concat(n || []);
                d(a, r)
            }
        }
        var _ = "../build/transpiled/dev/loggly";
        window.define(_, (function() {
            var e = "undefined"
              , n = typeof t === e ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === e ? typeof module === e ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : t;
            return n && n.default || n
        }
        )),
        window.require([_])
    }
    ,
    407042: (e, t, n) => {
        "use strict";
        n.r(t),
        n.d(t, {
            default: () => i
        });
        const i = {
            SALESBOT_CACHE_CODE: "amojo_salesbots",
            SALESBOT_NEXT_PAGE_LINK: "amojo_bot_next_page_link",
            SALESBOT_CACHE_LIFETIME: 36e5
        };
        var o = "../build/transpiled/interface/amojo/salesbots_constants";
        window.define(o, (function() {
            var e = "undefined"
              , n = typeof t === e ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === e ? typeof module === e ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : t;
            return n && n.default || n
        }
        )),
        window.require([o])
    }
    ,
    513934: (e, t, n) => {
        "use strict";
        n.r(t),
        n.d(t, {
            default: () => c
        });
        var i = n(55188)
          , o = n.n(i)
          , a = n(661586)
          , r = n.n(a)
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
                return n.length && (e += "_".concat(r()(n.join("_")))),
                e
            },
            linked_types_cache_lifetime: 36e5
        };
        var d = "../build/transpiled/interface/card/linked/constants";
        window.define(d, (function() {
            var e = "undefined"
              , n = typeof t === e ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === e ? typeof module === e ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : t;
            return n && n.default || n
        }
        )),
        window.require([d])
    }
    ,
    228370: (e, t, n) => {
        "use strict";
        n.r(t),
        n.d(t, {
            default: () => a
        });
        var i = n(202800)
          , o = n(880774);
        const a = i.default.extend({
            _catalog_id: 0,
            _catalog_name: "",
            _url: "/ajax/v1/catalogs/set/",
            setParams: function(e) {
                var t = i.default.prototype.setParams.apply(this, arguments);
                if (this._catalog_id = e.catalog_id,
                this._catalog_name = e.catalog_name,
                !this._catalog_id)
                    throw new Error("Catalog id not defined in params: ".concat(JSON.stringify(e)));
                return t
            },
            getDataForRequest: function() {
                return {
                    request: {
                        catalogs: {
                            delete: this._catalog_id
                        }
                    }
                }
            },
            isValidResponse: function(e) {
                return e && e.catalogs && e.catalogs.delete
            },
            getTemplateParams: function() {
                return {
                    lang: APP.lang,
                    caption: (0,
                    o.i18n)("Delete list"),
                    message: [{
                        text: (0,
                        o.i18n)("Are you sure you want to delete «%s»?").replace("%s", this._catalog_name)
                    }, {
                        text: (0,
                        o.i18n)("All data associated with «%s», will be deleted. Removed data recovery is impossible.").replace("%s", this._catalog_name)
                    }],
                    accept_text: (0,
                    o.i18n)("Confirm")
                }
            }
        });
        var r = "../build/transpiled/interface/catalogs/catalogs/delete_modal";
        window.define(r, (function() {
            var e = "undefined"
              , n = typeof t === e ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === e ? typeof module === e ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : t;
            return n && n.default || n
        }
        )),
        window.require([r])
    }
    ,
    630280: (e, t, n) => {
        "use strict";
        n.r(t),
        n.d(t, {
            default: () => l
        });
        var i = n(55188)
          , o = n.n(i)
          , a = n(880774)
          , r = n(202800)
          , s = n(661533);
        const l = r.default.extend({
            _pipeline_id: 0,
            _pipeline_name: "",
            _url: "/ajax/v1/pipelines/delete",
            _template: "/tmpl/common/modal/delete_lead.twig",
            events: function() {
                return o().extend({}, o().result(r.default.prototype, "events", {}), {
                    "change .delete-modal-body-checkbox": "handleCheckboxChange"
                })
            },
            _classes: function() {
                return o().extend({}, o().result(r.default.prototype, "_classes", {}), {
                    save_btn: "modal-body__actions__save"
                })
            },
            setParams: function(e) {
                var t = r.default.prototype.setParams.apply(this, arguments);
                return this._pipeline_id = e.pipeline_id,
                this._pipeline_name = e.pipeline_name,
                t
            },
            getDataForRequest: function() {
                return {
                    "request[id]": this._pipeline_id
                }
            },
            isValidResponse: function(e) {
                return e && e[this._pipeline_id]
            },
            handleCheckboxChange: function(e) {
                var t = s(e.target).prop("checked");
                this._elem("save_btn").trigger(t ? "button:enable" : "button:disable")
            },
            getTemplateParams: function() {
                return {
                    caption: (0,
                    a.i18n)("Are you sure you want to delete the pipeline «%s»?").replace("%s", this._pipeline_name),
                    accept_text: (0,
                    a.i18n)("Confirm"),
                    checkbox_text: (0,
                    a.i18n)("When you delete this pipeline, all of your pipeline stages, sources and automations will be deleted and cannot be restoredpipeline, all of your pipeline stages, sources and automations will be deleted and cannot be restored")
                }
            }
        });
        var c = "../build/transpiled/interface/leads/delete_modal";
        window.define(c, (function() {
            var e = "undefined"
              , n = typeof t === e ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === e ? typeof module === e ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : t;
            return n && n.default || n
        }
        )),
        window.require([c])
    }
    ,
    15579: (e, t, n) => {
        "use strict";
        n.r(t),
        n.d(t, {
            default: () => w
        });
        var i = n(661533)
          , o = n.n(i)
          , a = n(55188)
          , r = n.n(a)
          , s = n(871082)
          , l = n.n(s)
          , c = n(460159)
          , d = n.n(c)
          , u = n(880774)
          , _ = n(237262)
          , h = n(804129)
          , p = n(521466)
          , f = n(889378)
          , m = n(510144)
          , v = {
            Catalogs: n(228370).default,
            Leads: n(630280).default,
            Salesbot: n(259056).default
        }
          , g = "hover_menu"
          , y = !0
          , b = !1;
        const w = p.default.extend({
            _endpoints: {},
            _changes: {},
            _selectors: function() {
                return {
                    aside_wrapper: "#aside__list-wrapper",
                    aside_footer: ".aside__footer",
                    aside_inner: ".aside__inner",
                    list_holder: ".aside__common-settings",
                    footer_add: ".js-aside__footer-add",
                    list_item: ".aside__list-item",
                    list_item_selected: ".aside__list-item_selected",
                    list_item_by_id: '.aside__list-item[data-id="%s"]',
                    action_button: '.js-aside__action-button[data-action="%s"]',
                    archivation_open: ".js-aside-open-archive"
                }
            },
            _classes: function() {
                return {
                    add_error_note: "aside__footer-add_error-note",
                    aside_save_blocked: "aside-save-blocked"
                }
            },
            events: {
                "click .js-aside__footer-add": "onAddClick",
                "click .js-aside__action-button": "onActionClick",
                "keydown .aside__list-item-input": "onItemKeydown",
                "input .aside__list-item-input": "onItemInput",
                "click .aside__top:not(.js-aside-close-archive)": "closeHoverMenu",
                "click .js-navigate-link": "onLinkNavigateClick",
                "click .js-aside-open-archive": "onArchiveTabOpen",
                "click .js-aside-close-archive": "onArchiveTabClose"
            },
            initialize: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return this.options = e,
                this.data_handler = e.handler,
                r().each(e.callbacks, (function(e, t) {
                    this[t] = r().isFunction(e) ? e : r().noop
                }
                ), this),
                p.default.prototype.initialize.apply(this, arguments),
                this.listenTo(this.collection, "item:change", this.actionUpdate),
                this
            },
            render: function(e) {
                var t, n;
                t = e.items,
                (null != (n = l().Collection) && "undefined" != typeof Symbol && n[Symbol.hasInstance] ? n[Symbol.hasInstance](t) : t instanceof n) && (e.items = e.items.toJSON()),
                this._template_params = e || {};
                var i = o()(d()({
                    ref: this.getTemplate().aside_view
                }).render(r().extend(e, {
                    user_rights: (0,
                    _.getRights)(),
                    entity: APP.data.current_entity,
                    is_card: APP.data.is_card,
                    from_list: APP.data.current_list && APP.data.current_list.length,
                    from_top_click: e.from_top_nav_click
                })));
                return this.setElement(i),
                this._$document.trigger("aside_menu:open"),
                this.$el
            },
            destroy: function(e) {
                if (!e && this.hasActiveStatus())
                    return APP.router.confirmPageChange(this._confirmModalConfig, r().noop),
                    !1;
                this._changes.item_id && "cloned_item" === this._changes.item_id && this.collection.remove("cloned_item"),
                this._changes.has_changes && this.stopChangeTracking(),
                APP.router.removePreventConfig(g),
                this._$document.trigger("aside_menu:close"),
                p.default.prototype.destroy.call(this)
            },
            stopChangeTracking: function() {
                this._setChanges({
                    form: !1,
                    sorting: !1
                }),
                this._$document.off("click".concat(this.ns)),
                delete this._changes.item_id,
                delete this._changes.has_errors,
                this.form && (this.destroyForm(),
                delete this.form)
            },
            prepareView: function(e) {
                this._scrollIntoView(),
                this._checkListHasScroll(),
                r().isFunction(e) && e(),
                this.onPrepareView(),
                this.initPagePreventer()
            },
            onPrepareView: r().noop,
            getTemplate: function() {
                var e = "/tmpl/left_menu/hover_menu/".concat(this.data_handler.type, "/");
                return {
                    aside_view: "/tmpl/left_menu/aside.twig",
                    in_edit: "".concat(e, "item_in_edit.twig"),
                    item: "".concat(e, "item.twig"),
                    footer: "".concat(e, "footer_add.twig"),
                    footer_edit: "".concat(e, "footer_in_edit.twig")
                }
            },
            initPagePreventer: function() {
                var e = this;
                this._confirmModalConfig = {
                    message: (0,
                    u.i18n)("You didn't save any changes."),
                    accept_text: (0,
                    u.i18n)("Save"),
                    decline_text: (0,
                    u.i18n)("Exit without save"),
                    init: r().bind(this.elevateDownHoverMenu, this),
                    accept: r().bind((function(e) {
                        var t = this._changes.item_id;
                        "new_item" === this._changes.item_id ? this.actionAdd({
                            no_redirect: !0,
                            no_destroy: !0,
                            callback: e
                        }) : (this.collection.get(t).set({
                            name: r().escape(this.form.model.get(t))
                        }, {
                            silent: !0
                        }),
                        this.actionUpdate(this.collection.get(t), e))
                    }
                    ), this),
                    decline: r().bind((function(t) {
                        r().isFunction(t) && (APP.router.preventPageChange(!1, g),
                        t()),
                        e.destroyForm(),
                        e.closeHoverMenu()
                    }
                    ), this)
                },
                r().isObject(APP.router) && APP.router.registerPreventConfig(this._confirmModalConfig, g)
            },
            _scrollIntoView: function() {
                var e, t, n, i, o = this._findElem("list_item_selected");
                o.length && !o.visible() && (t = (e = this._elem("list_holder"))[0].getBoundingClientRect(),
                i = (n = o[0].getBoundingClientRect()).top - t.height - t.top + 2 * n.height,
                e.scrollTop(i))
            },
            _checkListHasScroll: function() {
                var e = this._elem("list_holder")
                  , t = this._elem("aside_wrapper")
                  , n = e.outerHeight()
                  , i = t.outerHeight()
                  , o = e.outerWidth()
                  , a = t.outerWidth()
                  , r = this._elem("aside_footer")
                  , s = o - a
                  , l = i > n ? "".concat(s, "px") : 0;
                s && r.css("paddingRight", l)
            },
            hasActiveStatus: function() {
                return this._changes.has_changes || this._changes.sorting
            },
            onActionClick: function(e) {
                var t = o()(e.currentTarget).data("action");
                switch (e.stopPropagation(),
                t) {
                case "add":
                    this.checkChangesAndAdd();
                    break;
                case "clone":
                    this.onCloneClick(e);
                    break;
                case "save":
                    this.checkChangesAndUpdate(e);
                    break;
                case "edit":
                    this.onAsideEditClick(e);
                    break;
                case "archivation":
                    this.onArchivationClick(e);
                    break;
                case "remove":
                    this.onDeleteClick(e)
                }
            },
            onAddClick: function(e) {
                var t = o()(e.currentTarget);
                this._changes.item_id && this.rerenderInputs(),
                t.addClass("aside__footer-inner_in-edit").html(d()({
                    ref: this.getTemplate().footer_edit
                }).render()).find(".aside__list-item-input").focus(),
                this.initForm(t)
            },
            onAsideEditClick: function(e) {
                var t = o()(e.currentTarget).closest(".aside__list-item")
                  , n = t.data("id")
                  , i = this.collection.get(n).toJSON();
                this.revertInputs(),
                t.addClass("aside__list-item_in-edit").append(d()({
                    ref: this.getTemplate().in_edit
                }).render({
                    item: i,
                    sortable: "leads" === this._template_params.type,
                    is_cloneable: this.isItemCloneable(),
                    is_archive_tab: i.is_archive
                })).find(".aside__list-item-input").val(t.find(".aside__list-item-input").val()).focus(),
                this.initForm(t)
            },
            onCloneClick: function() {
                throw new Error("Must be implemented by subclass!")
            },
            showDeleteAndArchiveError: function() {
                var e = new f.default;
                e.$el.css("z-index", "1001"),
                e.showError((0,
                u.i18n)("Your main pipeline cannot be deleted or archived. To set a different main pipeline, drag it to the top of your pipeline list while in renaming mode."), !1)
            },
            onArchivationClick: function(e) {
                var t = o()(e.currentTarget).closest(".aside__list-item").data("id")
                  , n = this.collection.get(t).toJSON();
                n.is_main ? this.showDeleteAndArchiveError() : this.actionArchivation(n)
            },
            onDeleteClick: function(e) {
                var t = o()(e.currentTarget).closest(".aside__list-item").data("id")
                  , n = this.collection.get(t).toJSON();
                n.is_main ? this.showDeleteAndArchiveError() : this.actionDelete(n)
            },
            onItemKeydown: function(e) {
                switch (e.stopPropagation(),
                e.keyCode) {
                case 13:
                    "new_item" === this._changes.item_id ? this.checkChangesAndAdd() : this.checkChangesAndUpdate(e);
                    break;
                case 27:
                    this.revertInputs()
                }
            },
            onItemInput: function(e) {
                var t = !o()(e.currentTarget).val().length;
                this.toggleInputError(t),
                this._changes.has_errors = t
            },
            onInputBlur: function(e) {
                var t = o()(e.target);
                this.save_blocked || t.closest(".aside__common-settings__list_wrapper").length || t.closest(".aside__footer").length || t.closest("#nav_menu").length || t.closest(".nav__notifications").length || t.closest(".nav__top").length || (this.hasActiveStatus() ? this._findElem("action_button", "save").trigger("click") : this.revertInputs())
            },
            onLinkNavigateClick: function(e) {
                this.hasActiveStatus() && (e.stopPropagation(),
                e.preventDefault())
            },
            onArchiveTabOpen: function() {
                this.rerenderHoverMenu(r().extend(this._template_params, {
                    items: this.collection,
                    is_archive_tab: !0
                }))
            },
            onArchiveTabClose: function(e) {
                e.stopPropagation(),
                this.rerenderHoverMenu(r().extend(this._template_params, {
                    items: this.collection,
                    is_archive_tab: !1
                }))
            },
            initForm: function(e) {
                this.form = this._addComponent(m.default.View, {
                    el: e
                }),
                this._changes = {},
                r().contains(r().keys(this.form.model.toJSON()), "cloned_item") ? this._changes.item_id = "cloned_item" : this._changes.item_id = r().first(r().keys(this.form.model.toJSON())),
                this.form.model.on("has_changes", r().bind(this._setChanges, this, {
                    form: !0
                })).on("has_reverted", r().bind(this._setChanges, this, {
                    form: !1
                })),
                this._$document.on("click".concat(this.ns), "#left_menu", r().bind(this.onInputBlur, this))
            },
            destroyForm: function() {
                this._$document.off("click".concat(this.ns)),
                this._destroyComponent(this.form),
                this._setChanges({
                    form: !1
                })
            },
            _setChanges: function(e) {
                var t = e.form;
                this._changes.has_changes = t,
                r().isUndefined(e.sorting) || (this._changes.sorting = e.sorting),
                APP.router.preventPageChange(t, g)
            },
            checkChangesAndAdd: function() {
                this.hasActiveStatus() ? this.actionAdd() : this.toggleInputError(y)
            },
            checkChangesAndUpdate: function(e) {
                var t = o()(e.currentTarget).closest(".aside__list-item_in-edit").data("id")
                  , n = this.collection.get(t);
                "cloned_item" === t && this.actionAdd({
                    type: "clone"
                }),
                this._changes.has_errors || (this.hasActiveStatus() ? (n.set({
                    name: r().escape(this.form.model.get(this._changes.item_id)),
                    sort: parseInt(this.form.model.get("sort"))
                }),
                n.trigger("item:change", n)) : this.rerenderInputs(t))
            },
            revertInputs: function() {
                this._changes.item_id && ("cloned_item" === this._changes.item_id ? (this.collection.remove("cloned_item"),
                this._findElem("list_item_by_id", "cloned_item").remove()) : this.rerenderInputs())
            },
            rerenderInputs: function(e) {
                "new_item" === (e = +e >= 0 ? e : this._changes.item_id) ? this._findElem("footer_add").html(d()({
                    ref: this.getTemplate().footer
                }).render({})).removeClass("aside__footer-inner_in-edit") : this._findElem("list_item_by_id", e).replaceWith(d()({
                    ref: this.getTemplate().item
                }).render(r().extend(this._template_params, {
                    item: this.collection.get(e).toJSON(),
                    user_rights: (0,
                    _.getRights)()
                }))),
                this.stopChangeTracking()
            },
            toggleInputError: function(e) {
                var t = this._changes.item_id;
                "new_item" === t ? this._toggleClass("add_error_note", "footer_add", e) : this._findElem("list_item_by_id", t).toggleClass("aside__footer-add_error-note", e)
            },
            toggleActionLoader: function(e, t) {
                (t ? this._findElem("list_item_by_id", t) : this._findElem("footer_add")).find(".aside__action-button_loader").toggleClass("aside__action-button_loading", e),
                this._toggleClass("aside_save_blocked", e)
            },
            actionUpdate: function(e, t) {
                var n = e.get("id")
                  , i = r().keys(e.changed);
                if (!this.save_blocked && !r().isEqual(["selected"], i)) {
                    if (this.save_blocked = !0,
                    this.toggleActionLoader(y, n),
                    !this._endpoints.update)
                        throw new Error("No update endpoint specified!");
                    return this._makeRequest("update", e).always(r().bind((function() {
                        this.save_blocked = !1,
                        this.toggleActionLoader(b, n)
                    }
                    ), this)).done(r().bind((function(i) {
                        var o = e.toJSON();
                        this.isValidUpdateResponse(i, o) && (this.onUpdateSuccess(i, o),
                        delete o.selected,
                        this.updateHoverMenuListData(this.data_handler.type, o),
                        this.rerenderInputs(n),
                        r().isFunction(t) && t())
                    }
                    ), this)).fail(r().bind((function() {
                        this.showErrorModal()
                    }
                    ), this))
                }
            },
            _makeRequest: function(e, t) {
                switch (e) {
                case "add":
                    return o().ajax({
                        url: this._endpoints.add,
                        type: "POST",
                        dataType: "json",
                        data: this.prepareAddData({
                            def_data: this.data_handler.default_data,
                            name: this.form.model.get(this._changes.item_id),
                            sort: this.collection.length + 1
                        })
                    });
                case "update":
                    return o().ajax({
                        url: this._endpoints.update,
                        type: "POST",
                        dataType: "json",
                        data: this.prepareUpdateData(this.collection.models, t)
                    });
                case "archivation":
                    return o().ajax({
                        url: this._endpoints.getArhivationEndpoint(t.id),
                        method: "PATCH",
                        dataType: "json",
                        contentType: "application/hal+json",
                        data: JSON.stringify(this.prepareArchivationData(t))
                    });
                default:
                    return o().Deferred().resolve()
                }
            },
            prepareUpdateData: function() {
                throw new Error("Must be implemented by subclass!")
            },
            prepareArchivationData: function() {
                throw new Error("Must be implemented by subclass!")
            },
            isValidUpdateResponse: function(e) {
                return !!e
            },
            onUpdateSuccess: function() {
                throw new Error("Must be implemented by subclass!")
            },
            isItemCloneable: function() {
                return !((0,
                h.isAmoChatsFullEnabled)() && r().propertyOf(this)(["collection", "attributes", "_total_items"]) > 1) && "salesbot" === this._template_params.type
            },
            actionAdd: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                if (!this.save_blocked)
                    return this.save_blocked = !0,
                    this.toggleActionLoader(y),
                    this._makeRequest(e.type || "add").always(r().bind((function() {
                        this.save_blocked = !1,
                        this.toggleActionLoader(b)
                    }
                    ), this)).done(r().bind((function(t) {
                        var n = this.onAddSuccess(t);
                        r().isFunction(e.callback) && e.callback(),
                        this.stopChangeTracking(),
                        e.no_destroy || this.closeHoverMenu(),
                        e.no_redirect || this.navigateTo(n)
                    }
                    ), this)).fail(r().bind((function() {
                        this.showErrorModal()
                    }
                    ), this))
            },
            prepareAddData: function() {
                throw new Error("Must be implemented by subclass!")
            },
            onAddSuccess: function() {
                throw new Error("Must be implemented by subclass!")
            },
            actionDelete: function(e) {
                var t = this.data_handler.type;
                "cloned_item" !== e.id ? (this.elevateDownHoverMenu(),
                new (v[(0,
                u.toTitleCase)(t)])(r().extend(this._deleteModalParams(e) || {}, {
                    url: this.url,
                    complete: r().bind((function() {
                        this._$document.trigger("menu:item:deleted", [t, e]),
                        this.stopChangeTracking(),
                        this.closeHoverMenu(),
                        this.onDeleteSuccess(e),
                        this.fetchHoverMenuListData(t)
                    }
                    ), this)
                }))) : this.onDeleteSuccess(e)
            },
            actionArchivation: function(e) {
                var t = e.id
                  , n = this.data_handler.type
                  , i = e.is_archive;
                if (!this.save_blocked)
                    return this.save_blocked = !0,
                    this.toggleActionLoader(y, t),
                    this._makeRequest("archivation", e).always(r().bind((function() {
                        this.save_blocked = !1,
                        this.toggleActionLoader(b, t)
                    }
                    ), this)).done(r().bind((function(o) {
                        var a = this.collection.get(t)
                          , s = o && o.is_archive;
                        r().isUndefined(s) || i === s ? this.showErrorModal() : (this._$document.trigger("menu:item:deleted", [n, e]),
                        this._elem("archivation_open").length && this._elem("archivation_open").is(":hidden") && (this._elem("archivation_open").removeClass("hidden"),
                        this._elem("aside_inner").attr({
                            "data-footer-counter": +this._elem("aside_inner").attr("data-footer-counter") + 1
                        })),
                        a.set({
                            is_archive: s
                        }, {
                            silent: !0
                        }),
                        this._findElem("list_item_by_id", t).remove(),
                        a.get("selected") && APP.router.reload())
                    }
                    ), this)).fail(r().bind((function() {
                        this.showErrorModal()
                    }
                    ), this))
            },
            _deleteModalParams: function() {
                throw new Error("Must be implemented by subclass!")
            },
            onDeleteSuccess: function() {
                throw new Error("Must be implemented by subclass!")
            },
            showErrorModal: function(e) {
                return this.elevateDownHoverMenu(),
                new f.default({
                    destroy: r().bind((function() {
                        this.elevateUpHoverMenu(),
                        r().isFunction(e) && e()
                    }
                    ), this)
                }).showError(null, !1)
            }
        })
    }
    ,
    175226: (e, t, n) => {
        "use strict";
        n.r(t),
        n.d(t, {
            default: () => c
        });
        var i = n(55188)
          , o = n.n(i)
          , a = n(880774)
          , r = n(678640)
          , s = n(315702)
          , l = n(513934);
        const c = n(15579).default.extend({
            _endpoints: {
                update: "/ajax/v1/catalogs/set",
                add: "/ajax/v1/catalogs/set"
            },
            prepareAddData: function(e) {
                var t = e.def_data
                  , n = e.name;
                return t.request.catalogs.add[0] = {
                    name: n.length ? n : (0,
                    a.i18n)("Products"),
                    demo_data: !0
                },
                t
            },
            onAddSuccess: function(e) {
                var t = {
                    id: e.response.catalogs.add.catalogs[0].name,
                    newCatalog: o().toArray(e.response.catalogs.add.catalogs)[0]
                }
                  , n = [];
                return n[t.newCatalog.id] = t.newCatalog.id,
                s.storeWithExpiration.remove(l.default.getCacheCode()),
                APP.extend(n, APP.constant("catalogs")),
                this.fetchHoverMenuListData(this.data_handler.type),
                t
            },
            prepareUpdateData: function(e, t) {
                var n = t.get("id")
                  , i = (0,
                a.unescapeHTML)(t.get("name"))
                  , o = {
                    request: {
                        catalogs: {
                            update: {}
                        }
                    }
                };
                return o.request.catalogs.update[n] = {
                    id: n,
                    name: i.length ? i : (0,
                    a.i18n)("Products")
                },
                o
            },
            isValidUpdateResponse: function(e, t) {
                return (0,
                r.hasKeys)(e, ["response", "catalogs", "update", "catalogs", t.id]) && !o().isEmpty(e.response.catalogs.update.catalogs[t.id])
            },
            onUpdateSuccess: function(e, t) {
                var n = e.response.catalogs.update.catalogs[t.id];
                s.storeWithExpiration.remove(l.default.getCacheCode()),
                this._$document.trigger("catalogs:name:changed", [n.id, n.name])
            },
            onDeleteSuccess: function(e) {
                delete APP.constant("catalogs")[e.id],
                s.storeWithExpiration.remove(l.default.getCacheCode()),
                "catalogs" === APP.data.current_entity && +APP.data.current_view.catalog.id == +e.id && APP.router.navigate("/catalogs/", {
                    trigger: !0,
                    replace: !0
                })
            },
            _deleteModalParams: function(e) {
                return {
                    catalog_id: e.id,
                    catalog_name: e.name
                }
            },
            navigateTo: function(e) {
                var t = e.newCatalog && e.newCatalog.id || e.id;
                APP.router.navigate("/catalogs/" + t, {
                    trigger: !0,
                    replace: !0
                })
            }
        });
        var d = "../build/transpiled/interface/left_menu/hover_menu/catalogs";
        window.define(d, (function() {
            var e = "undefined"
              , n = typeof t === e ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === e ? typeof module === e ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : t;
            return n && n.default || n
        }
        )),
        window.require([d])
    }
    ,
    717990: (e, t, n) => {
        "use strict";
        n.r(t),
        n.d(t, {
            default: () => f
        });
        var i = n(661533)
          , o = n.n(i)
          , a = n(55188)
          , r = n.n(a)
          , s = n(871082)
          , l = n.n(s)
          , c = n(880774)
          , d = n(237262)
          , u = n(675608)
          , _ = n(500034)
          , h = {
            contacts: 2,
            companies: 3,
            all: 4,
            files: 5
        }
          , p = function() {
            p.prototype.type = "catalogs"
        };
        r().extend(p.prototype, {
            default_data: {
                request: {
                    catalogs: {
                        add: {
                            0: {
                                id: !1,
                                sort: 99999
                            }
                        }
                    }
                }
            },
            getDefaultList: function() {
                return this.default_list = {},
                ((0,
                d.getRights)("contacts", "view") || (0,
                d.getRights)("contacts", "add")) && (this.default_list[h.contacts] = {
                    name: APP.lang.contacts_head_title,
                    sort: 9999,
                    entity: "contacts",
                    id: "contacts"
                }),
                ((0,
                d.getRights)("companies", "view") || (0,
                d.getRights)("companies", "add")) && (this.default_list[h.companies] = {
                    name: APP.lang.companies_head_title,
                    sort: 9998,
                    entity: "companies",
                    id: "companies"
                }),
                ((0,
                d.getRights)("companies", "add") || (0,
                d.getRights)("companies", "view")) && ((0,
                d.getRights)("contacts", "view") || (0,
                d.getRights)("contacts", "add")) && (this.default_list[h.all] = {
                    name: (0,
                    c.i18n)("Contacts and Companies"),
                    sort: 9997,
                    entity: "all"
                }),
                (0,
                _.isFeatureAvailable)("amocrm_drive") && (0,
                d.getRights)("files", "view") && (this.default_list[h.files] = {
                    name: (0,
                    c.i18n)("Files"),
                    sort: 9996,
                    entity: "files",
                    id: "files"
                }),
                this.default_list
            },
            getRenderData: function(e) {
                var t, n = o().Deferred(), i = o().Deferred();
                return (0,
                u.fetch)(e).then(i.resolve, i.reject),
                i.always(r().bind((function() {
                    (t = new (l().Collection)(r().toArray(p.prototype.getDefaultList()))).comparator = function(e) {
                        return -e.get("sort")
                    }
                    ,
                    this._items[p.prototype.type] = t
                }
                ), this)).done(r().bind((function(e) {
                    r().each(e, (function(e) {
                        e.name = r().escape(e.name)
                    }
                    )),
                    t.add(r().toArray(e)),
                    this._items[p.prototype.type] = t,
                    t.sort(),
                    APP.constant("catalogs", r().mapObject(e, "id"))
                }
                ), this)).fail((function() {
                    r().delay((function() {
                        APP.notifications.show_message_error({
                            text: (0,
                            c.i18n)("Lists are temporarily unavailable"),
                            timeout: 5e3
                        })
                    }
                    ), 5e3)
                }
                )).then(r().bind((function() {
                    n.resolve(t)
                }
                ), this)),
                n.promise()
            },
            getActiveData: function(e) {
                var t, n, i, o, a = !0, s = 0, l = e.findWhere({
                    selected: !0
                });
                switch (l && l.set("selected", !1),
                r().each(e.toJSON(), (function(e) {
                    e.entity || s++
                }
                )),
                s >= 10 && (a = !1),
                APP.data.current_entity) {
                case "catalogs":
                    t = APP.data && APP.data.current_view && +APP.data.current_view.catalog.id,
                    i = e.findWhere({
                        id: t
                    });
                    break;
                case "contacts":
                    o = APP.data.element_type || "all",
                    t = h[o],
                    i = e.findWhere({
                        entity: o
                    });
                    break;
                case "files":
                    t = h[o = "files"],
                    i = e.findWhere({
                        entity: o
                    })
                }
                return APP.data.current_view && APP.data.current_view.catalog || "" !== APP.data.element_type || "contacts" !== APP.data.current_entity || (n = !0),
                t && i && i.set("selected", !0),
                {
                    type: "catalogs",
                    items: e,
                    footer: a,
                    list_view: n
                }
            }
        });
        const f = {
            catalogs: new p
        };
        var m = "../build/transpiled/interface/left_menu/hover_menu/data_handlers/catalogs";
        window.define(m, (function() {
            var e = "undefined"
              , n = typeof t === e ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === e ? typeof module === e ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : t;
            return n && n.default || n
        }
        )),
        window.require([m])
    }
    ,
    84909: (e, t, n) => {
        "use strict";
        n.r(t),
        n.d(t, {
            default: () => d
        });
        var i = n(661533)
          , o = n.n(i)
          , a = n(55188)
          , r = n.n(a)
          , s = n(598701)
          , l = n(186361)
          , c = function() {
            c.prototype.type = "emails",
            c.prototype.collection = l.default,
            s.onPageFullyLoaded((function() {
                c.prototype.collection.fetch()
            }
            ))
        };
        r().extend(c.prototype, {
            event: {
                "click .js-navigate-link": "route"
            },
            route: function() {
                o()(this).find(".js-navigate-link").trigger({
                    type: "link:navigate",
                    ctrlKey: !0
                })
            },
            getRenderData: function(e) {
                var t = o().Deferred();
                return e ? c.prototype.collection.fetch().done((function() {
                    return t.resolve(c.prototype.collection)
                }
                )) : t.resolve(c.prototype.collection),
                t.promise()
            },
            getActiveData: function(e) {
                return {
                    type: "emails",
                    items: e,
                    list_view: !0
                }
            }
        });
        const d = {
            mail: new c
        };
        var u = "../build/transpiled/interface/left_menu/hover_menu/data_handlers/emails";
        window.define(u, (function() {
            var e = "undefined"
              , n = typeof t === e ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === e ? typeof module === e ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : t;
            return n && n.default || n
        }
        )),
        window.require([u])
    }
    ,
    304234: (e, t, n) => {
        "use strict";
        n.r(t),
        n.d(t, {
            default: () => _
        });
        var i = n(661533)
          , o = n.n(i)
          , a = n(55188)
          , r = n.n(a)
          , s = n(871082)
          , l = n.n(s)
          , c = n(317464)
          , d = n(952510);
        n(368439);
        var u = function() {
            u.prototype.type = "leads"
        };
        r().extend(u.prototype, {
            default_data: {
                id: "new_pipe",
                leads: 0,
                request: {
                    pipelines: {
                        add: {
                            new_pipe: {
                                sort: "",
                                is_main: "",
                                statuses: {
                                    142: {
                                        name: APP.lang.pipelines_statuses_closed_won
                                    },
                                    143: {
                                        name: APP.lang.pipelines_statuses_closed_lost
                                    },
                                    new_1: {
                                        color: "#99ccff",
                                        name: APP.lang.pipelines_statuses_first_contact,
                                        pipeline_id: "new_pipe",
                                        sort: 10
                                    },
                                    new_2: {
                                        color: "#ffff99",
                                        name: APP.lang.pipelines_statuses_conversations,
                                        pipeline_id: "new_pipe",
                                        sort: 20
                                    },
                                    new_3: {
                                        color: "#ffcc66",
                                        name: APP.lang.pipelines_statuses_taking_decision,
                                        pipeline_id: "new_pipe",
                                        sort: 30
                                    }
                                }
                            }
                        }
                    }
                }
            },
            initSortablePipeline: function() {
                this.aside_view.$el.sortable({
                    items: ".aside__list-item.js-animate:not(.new)",
                    handle: ".aside__list-item_item-handle",
                    axis: "y",
                    containment: this.aside_view.$el.find(".aside__list"),
                    sortAnimate: !APP.is_touch_device,
                    update: r().bind((function(e, t) {
                        var n = !1
                          , i = this.aside_view.options.collection.get(t.item.attr("data-id"))
                          , o = this.aside_view.form.model.defaults.sort;
                        d.default.reSort.call(this, this.aside_view.options.collection, t),
                        this.aside_view.options.collection.sort(),
                        parseInt(o) !== parseInt(i.get("sort")) && (n = !0),
                        this.aside_view._setChanges({
                            sorting: n
                        })
                    }
                    ), this),
                    tolerance: "pointer"
                })
            },
            getRenderData: function(e) {
                var t, n, i = o().Deferred(), a = this._items[u.prototype.type];
                return r().isEmpty(a) || e ? (t = a,
                (null != (n = l().Collection) && "undefined" != typeof Symbol && n[Symbol.hasInstance] ? n[Symbol.hasInstance](t) : t instanceof n) || ((a = new c.default).comparator = function(e) {
                    return e.get("sort")
                }
                ,
                this._items[u.prototype.type] = a),
                a.fetch({
                    clear_cache: e
                }).then((function() {
                    i.resolve(a)
                }
                ))) : i.resolve(a),
                i.promise()
            },
            getActiveData: function(e) {
                var t, n, i = e.findWhere({
                    selected: !0
                });
                switch (i && i.set("selected", !1),
                APP.data.current_entity) {
                case "leads-pipeline":
                    0 === (t = APP.data && APP.data.current_view && +APP.data.current_view.pipeline_id) && (t = r().findWhere(e.toJSON(), {
                        is_main: !0
                    }).value);
                    break;
                case "leads":
                    APP.data.is_card || (t = APP.data && APP.data.current_view && +APP.data.current_view.pipeline_id) || (n = !0);
                    break;
                case "leads-dp":
                    t = APP.data && APP.data.current_view && APP.data.current_view.pipeline && +APP.data.current_view.pipeline.id
                }
                return t && e.get(t) && e.get(t).set("selected", !0),
                {
                    type: "leads",
                    items: e,
                    list_view: n
                }
            }
        });
        const _ = {
            leads: new u
        };
        var h = "../build/transpiled/interface/left_menu/hover_menu/data_handlers/leads";
        window.define(h, (function() {
            var e = "undefined"
              , n = typeof t === e ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === e ? typeof module === e ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : t;
            return n && n.default || n
        }
        )),
        window.require([h])
    }
    ,
    582402: (e, t, n) => {
        "use strict";
        n.r(t),
        n.d(t, {
            default: () => a
        });
        var i = n(55188)
          , o = n.n(i);
        const a = n(15579).default.extend({
            onPrepareView: o().noop,
            onLinkNavigateClick: function(e) {
                this.hasActiveStatus() && (e.stopPropagation(),
                e.preventDefault())
            },
            onAddClick: function() {
                APP.router.navigate("/mail/settings/?mailbox-setup=general", {
                    trigger: !0,
                    replace: !0
                }),
                this.closeHoverMenu()
            }
        });
        var r = "../build/transpiled/interface/left_menu/hover_menu/emails";
        window.define(r, (function() {
            var e = "undefined"
              , n = typeof t === e ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === e ? typeof module === e ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : t;
            return n && n.default || n
        }
        )),
        window.require([r])
    }
    ,
    952510: (e, t, n) => {
        "use strict";
        n.r(t),
        n.d(t, {
            default: () => r
        });
        var i = n(55188)
          , o = n.n(i)
          , a = n(661533);
        const r = {
            reSort: function(e) {
                this.$(".status__sort").each(o().bind((function(t, n) {
                    var i, o;
                    e && (i = a(n).data("pipe-id"),
                    (o = e.get(i)).set("is_main", 0 === t, {
                        silent: !0
                    }),
                    o.set("sort", t + 1, {
                        silent: !0
                    })),
                    a(n).val(++t).change()
                }
                ), this))
            }
        };
        var s = "../build/transpiled/interface/left_menu/hover_menu/helpers/sort";
        window.define(s, (function() {
            var e = "undefined"
              , n = typeof t === e ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === e ? typeof module === e ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : t;
            return n && n.default || n
        }
        )),
        window.require([s])
    }
    ,
    917331: (e, t, n) => {
        "use strict";
        n.r(t),
        n.d(t, {
            default: () => v
        });
        var i = n(661533)
          , o = n.n(i)
          , a = n(55188)
          , r = n.n(a)
          , s = n(460159)
          , l = n.n(s)
          , c = n(267651)
          , d = n.n(c)
          , u = n(880774)
          , _ = n(521466);
        function h(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        var p = {
            Leads: n(304234).default,
            Catalogs: n(717990).default,
            Mail: n(84909).default
        }
          , f = {
            Leads: n(509209).default,
            Catalogs: n(175226).default,
            Mail: n(582402).default
        }
          , m = {
            empty_list: /^v[\d]{0,2}demo$/gm.exec(APP.constant("account").subdomain) ? 1e7 : 2500,
            quick_hover: 120,
            left_menu_hover: 250
        };
        const v = _.default.extend({
            el: o()(document),
            _data_handlers: {},
            _items: {},
            _hover_entities: [],
            hover_entity: null,
            hover_entity_change: null,
            aside_view: null,
            clicked_menu_opened: null,
            stop_hover: null,
            options: null,
            destroy_blocked: null,
            mouseenter_tmid: null,
            mouseleave_tmid: null,
            expand_tmid: null,
            _templates: ["/tmpl/left_menu/aside.twig", "/tmpl/left_menu/hover_menu/leads/index.twig", "/tmpl/left_menu/hover_menu/leads/item.twig", "/tmpl/left_menu/hover_menu/leads/item_in_edit.twig", "/tmpl/left_menu/hover_menu/leads/footer_add.twig", "/tmpl/left_menu/hover_menu/leads/footer_in_edit.twig", "/tmpl/left_menu/hover_menu/catalogs/index.twig", "/tmpl/left_menu/hover_menu/catalogs/item.twig", "/tmpl/left_menu/hover_menu/catalogs/item_in_edit.twig", "/tmpl/left_menu/hover_menu/catalogs/footer_add.twig", "/tmpl/left_menu/hover_menu/catalogs/footer_in_edit.twig", "/tmpl/left_menu/hover_menu/emails/index.twig", "/tmpl/left_menu/hover_menu/emails/item.twig", "/tmpl/left_menu/hover_menu/emails/item_in_edit.twig", "/tmpl/left_menu/hover_menu/emails/footer_add.twig", "/tmpl/left_menu/hover_menu/emails/footer_in_edit.twig"],
            _selectors: function() {
                return {
                    left_menu: "#left_menu",
                    hover_menu: "#aside-hover",
                    inbox: "#notification-wrapper",
                    inbox_messaging: "#inbox_messaging",
                    overlay: "#left-menu-overlay",
                    navMenuItemHovered: ".nav__menu__item:hover"
                }
            },
            _classes: function() {
                return {
                    nav_top: "nav__top",
                    sort: "status__sort",
                    nav_top_wrapper: "nav__top__wrapper",
                    inbox_hidden: "inbox-holder_hidden",
                    overlay_visible: "default-overlay-visible",
                    hover_overlay: "hover-overlay",
                    expanded: "expanded",
                    elevated: "h-elevated",
                    hidden: "h-hidden",
                    aside_expanded: "aside-expanded",
                    navMenuItem: "nav__menu__item"
                }
            },
            document_events: {
                "hover_menu:update": "onUpdateRenderData"
            },
            events: function() {
                var e, t = APP.is_touch_device ? "touchstart" : "mouseenter", n = APP.is_touch_device ? "touchend" : "mouseleave";
                return h(e = {}, "".concat(t, " ").concat(this._selector("navMenuItem")), "onMenuItemHover"),
                h(e, "".concat(n, " ").concat(this._selector("navMenuItem")), "onMenuItemHover"),
                e
            },
            initialize: function(e) {
                this.options = e || {},
                r().isFunction(e.isNotificationsExpanded) && (this.isNotificationsExpanded = e.isNotificationsExpanded),
                r().each(p, (function(e) {
                    r().extend(this._data_handlers || {}, e)
                }
                ), this),
                this._hover_entities = r().map(this._data_handlers, (function(e, t) {
                    return t
                }
                ))
            },
            init: function() {
                return l()._preload(this._templates)().then(r().bind((function() {
                    _.default.prototype.initialize.call(this),
                    r().each(this._data_handlers, (function(e) {
                        r().isFunction(e.getRenderData) && (this._items[e] = {})
                    }
                    ), this),
                    this._$document.on("pipeline:removed pipeline:saved", r().bind((function() {
                        this._getDataHandler("leads").getRenderData.call(this, !0)
                    }
                    ), this)).on("mailbox:deleted mailbox:disabled mailbox:assigned", r().bind((function() {
                        this._getDataHandler("mail").getRenderData.call(this, !0)
                    }
                    ), this)),
                    d().subscribe("hover_menu:show", r().bind((function(e, t) {
                        this.expandHoverMenuOnClick(t)
                    }
                    ), this))
                }
                ), this))
            },
            onUpdateRenderData: function(e, t) {
                this.fetchHoverMenuListData(t)
            },
            onMenuItemHover: function(e) {
                var t, n, i, a = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).requestAt, s = void 0 === a ? performance.now() : a, l = o()(e.currentTarget).data("entity"), c = !1;
                if (!(!r().contains(this._hover_entities, l) || this._isSidebarExpanded() || this.clicked_menu_opened || this.stop_hover || this.aside_view && this.aside_view.hasActiveStatus()))
                    switch (this._isHoverMenuExpanded() && this.hover_entity && l !== this.hover_entity ? (n = this._hasClass("aside_expanded", "hover_menu"),
                    c = this._hasClass("overlay_visible", "overlay"),
                    this.destroyHoverMenu(true, c),
                    this.hover_entity_change = n) : APP.is_touch_device && (i = !0),
                    e.type) {
                    case "mouseenter":
                    case "touchstart":
                        clearTimeout(this.mouseenter_tmid),
                        clearTimeout(this.mouseleave_tmid),
                        t = this._getDataHandler(this.hover_entity = l),
                        this._isHoverMenuExpanded() || t.getRenderData.call(this).done(r().bind((function(e) {
                            var o = 1 === e.length
                              , a = n || i && !o ? 0 : o ? m.empty_list : m.quick_hover;
                            if (s && (a -= performance.now() - s) < 0) {
                                if (!this._findElem("navMenuItemHovered").get(0))
                                    return;
                                a = 0
                            }
                            var l = function() {
                                this.renderHoverMenu(r().extend(t.getActiveData(e), {
                                    keep_overlay: c,
                                    prepend_render: o,
                                    hover_entity_change: n,
                                    force_render: n || o || APP.is_touch_device
                                }))
                            };
                            a && (l = r().wrap(l, r().bind((function(e) {
                                this.mouseenter_tmid = setTimeout(r().bind((function() {
                                    e.call(this)
                                }
                                ), this), a)
                            }
                            ), this))),
                            l.call(this)
                        }
                        ), this));
                        break;
                    case "mouseleave":
                    case "touchend":
                        clearTimeout(this.mouseenter_tmid)
                    }
            },
            expandHoverMenuOnClick: function(e) {
                if (r().contains(this._hover_entities, e)) {
                    var t = this._getDataHandler(this.hover_entity = e);
                    t.getRenderData.call(this).done(r().bind((function(e) {
                        this.clicked_menu_opened = !0,
                        this.renderHoverMenu(r().extend(t.getActiveData(e), {
                            force_render: !0,
                            from_top_nav_click: this.clicked_menu_opened
                        }))
                    }
                    ), this))
                }
            },
            checkTouchClick: function(e, t) {
                var n = o().Deferred()
                  , i = this._getDataHandler(t);
                return r().contains(this._hover_entities, t) && i && !this._isSidebarExpanded() && r().isFunction(i.getRenderData) ? i.getRenderData.call(this).done(r().bind((function() {
                    this._isHoverMenuExpanded() && this.destroy_blocked ? n.reject() : n.resolve()
                }
                ), this)) : n.resolve(),
                n.promise()
            },
            bindHideEvents: function(e) {
                APP.is_touch_device ? (this.destroy_blocked = !0,
                r().delay(r().bind((function() {
                    this.destroy_blocked = !1
                }
                ), this), e ? 1e3 : 300)) : (this._$document.on("mouseleave".concat(this.ns), '.nav__menu__item[data-entity="'.concat(this.hover_entity, '"]'), r().bind(this.onHoverMenuMouseleave, this)).on("mouseleave".concat(this.ns), "#aside-hover", r().bind(this.onHoverMenuMouseleave, this)).on("mouseenter".concat(this.ns), "#aside-hover", r().bind((function() {
                    clearTimeout(this.mouseleave_tmid)
                }
                ), this)),
                this.clicked_menu_opened || this._$document.on("mouseenter".concat(this.ns), "#aside-hover", r().bind((function() {
                    this.expand_tmid = setTimeout(r().bind(this.expandHoverMenu, this), m.quick_hover)
                }
                ), this))),
                this._$document.on("click".concat(this.ns), "#aside-hover .aside__list-item-link", r().bind(this.destroyHoverMenu, this)).on("click".concat(this.ns), ".nav__menu__item", r().bind((function() {
                    this.aside_view.hasActiveStatus() || this.closeHoverMenu()
                }
                ), this)).on("click".concat(this.ns), "#left-menu-overlay", r().bind(this.onOverlayClick, this)).on("click".concat(this.ns), ".digital-pipeline__lead-sources", r().bind(this.onOverlayClick, this))
            },
            onOverlayClick: function(e) {
                e.stopPropagation(),
                this.destroyHoverMenu(this.clicked_menu_opened && !this.aside_view.hasActiveStatus())
            },
            onHoverMenuMouseleave: function(e) {
                var t = o()(e.relatedTarget)
                  , n = t.data("entity")
                  , i = t.closest(".nav__menu__item")
                  , a = i.length ? i.data("entity") : "";
                if (this.aside_view.hasActiveStatus() || this.clicked_menu_opened)
                    return !1;
                if (clearTimeout(this.expand_tmid),
                r().contains(this._hover_entities, n || a))
                    return !1;
                if (t.closest("#nav_menu").length)
                    this.mouseleave_tmid = setTimeout(r().bind((function() {
                        this.destroyHoverMenu()
                    }
                    ), this), m.left_menu_hover);
                else {
                    if (t.hasClass("modal-overlay"))
                        return !1;
                    t.closest("#aside-hover").length || this.destroyHoverMenu()
                }
            },
            renderHoverMenu: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                if (this.hover_entity) {
                    var t = r().bind((function() {
                        this.aside_view.prepareView(r().bind((function() {
                            this.bindHideEvents(e.prepend_render && !e.hover_entity_change)
                        }
                        ), this))
                    }
                    ), this);
                    this.aside_view = new (f[(0,
                    u.toTitleCase)(this.hover_entity)])({
                        handler: this._getDataHandler(),
                        collection: e.items,
                        callbacks: {
                            elevateDownHoverMenu: r().bind(this.elevateDownHoverMenu, this),
                            elevateUpHoverMenu: r().bind(this.elevateUpHoverMenu, this),
                            closeHoverMenu: r().bind(this.closeHoverMenu, this),
                            fetchHoverMenuListData: r().bind(this.fetchHoverMenuListData, this),
                            updateHoverMenuListData: r().bind(this.updateHoverMenuListData, this),
                            rerenderHoverMenu: r().bind(this.rerenderHoverMenu, this)
                        }
                    }),
                    this._dropElemCache("hover_menu"),
                    this.elevateUpHoverMenu().append(this.aside_view.render(e)),
                    e.force_render ? this.expandHoverMenu(r().extend(e, {
                        callback: t
                    })) : r().delay(r().bind((function() {
                        this.hover_menu_animated = !1,
                        t(),
                        this.expandHoverMenu()
                    }
                    ), this), 10)
                }
            },
            expandHoverMenu: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                clearTimeout(this.expand_tmid),
                this._hasClass("aside_expanded", "hover_menu") || (r().isFunction(e.callback) && e.callback(),
                this._elem("hover_menu").addClass("aside-expanded".concat(e.force_render ? " h-no-transition" : "")),
                e.keep_overlay || this._toggleOverlay({
                    toggle: !0
                }),
                "leads" === this.hover_entity && this._getDataHandler("leads").initSortablePipeline.call(this))
            },
            destroyHoverMenu: function(e, t) {
                var n = r().bind((function() {
                    this.hover_menu_animated = !1,
                    this._elem("hover_menu").remove(),
                    this._dropElemCache("hover_menu")
                }
                ), this);
                this.destroy_blocked || (e = e || APP.is_touch_device,
                clearTimeout(this.mouseleave_tmid),
                !1 !== this.aside_view.destroy(e) && (e || this.hover_menu_animated ? n() : (this._elem("hover_menu").removeClass("aside-expanded h-no-transition"),
                this.hover_menu_animated = !0,
                this._elem("hover_menu").on(APP.transition_event, n)),
                this.hover_entity = null,
                this.clicked_menu_opened = !1,
                this.hover_entity_change = !1,
                this.elevateDownHoverMenu(),
                t || this._toggleOverlay({
                    toggle: !1
                }),
                this._$document.off(this.ns)))
            },
            rerenderHoverMenu: function(e) {
                var t = this.clicked_menu_opened
                  , n = this._hasClass("overlay_visible", "overlay")
                  , i = e && e.type;
                r().contains(this._hover_entities, i) && (this.destroyHoverMenu(!0, n),
                this.clicked_menu_opened = t,
                this.hover_entity = i,
                this.renderHoverMenu(r().extend(e, {
                    force_render: !0,
                    from_top_nav_click: this.clicked_menu_opened
                })),
                n && this._$document.trigger("overlay:unfix"))
            },
            _getDataHandler: function(e) {
                return this._data_handlers[e || this.hover_entity]
            },
            _isSidebarExpanded: function() {
                var e = this._findElem("inbox_messaging");
                return this._hasClass("expanded", "nav_top") || this._hasClass("expanded", "nav_top_wrapper") || !this._hasClass("inbox_hidden", "inbox") || e.length && !e.hasClass(this._class("inbox_hidden")) || this.isNotificationsExpanded()
            },
            _isHoverMenuExpanded: function() {
                return this._elem("hover_menu") && this._hasClass("aside_expanded", "hover_menu")
            },
            _toggleElevation: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return this._toggleClass("elevated", "left_menu", e.toggle),
                this._elem("left_menu")
            },
            _toggleOverlay: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return r().isBoolean(e.toggle) && (e.toggle ? this._$document.trigger("overlay:fix") : this._hasClass("overlay_visible", "overlay") && this._$document.trigger("overlay:unfix")),
                this._toggleClass("overlay_visible", "overlay", e.toggle),
                this._toggleClass("hover_overlay", "overlay", e.toggle),
                this._elem("overlay")
            },
            isHoverMenuVisible: function() {
                return this._isHoverMenuExpanded()
            },
            elevateDownHoverMenu: function() {
                return this._toggleElevation({
                    toggle: !1
                })
            },
            elevateUpHoverMenu: function() {
                return this._toggleElevation({
                    toggle: !0
                })
            },
            closeHoverMenu: function() {
                this.destroyHoverMenu(true)
            },
            prependHoverMenu: function(e) {
                this.stop_hover = !e
            },
            fetchHoverMenuListData: function(e) {
                this._getDataHandler(e).getRenderData.call(this, true)
            },
            updateHoverMenuListData: function(e, t) {
                this._items[e][t.id] = t
            }
        })
    }
    ,
    509209: (e, t, n) => {
        "use strict";
        n.r(t),
        n.d(t, {
            default: () => _
        });
        var i = n(661533)
          , o = n.n(i)
          , a = n(55188)
          , r = n.n(a)
          , s = n(880774)
          , l = n(678640)
          , c = n(15579)
          , d = n(77305)
          , u = n(950731);
        const _ = c.default.extend({
            _endpoints: {
                update: "/ajax/v1/pipelines/set",
                add: "/ajax/v1/pipelines/set",
                getArhivationEndpoint: function(e) {
                    return "/ajax/leads/pipelines/".concat(e)
                }
            },
            onPrepareView: function() {
                var e, t, n, i = this._template_params;
                "leads-dp" === i.entity && (e = o()(".list__top__preset").outerWidth(),
                i.from_top_click ? (t = o()(".list__top__preset").offset().left - e,
                n = 0) : (t = parseFloat(this.$el.css("left")),
                n = this.$el.outerWidth() - e),
                this.$el.css({
                    width: e,
                    left: t + n
                }))
            },
            prepareAddData: function(e) {
                var t = e.def_data
                  , n = e.name;
                return t.request.pipelines.add.new_pipe.name = n.length ? n : APP.lang.pipelines_statuses_new_pipeline,
                e.sort && (t.request.pipelines.add.new_pipe.sort = e.sort),
                t
            },
            prepareArchivationData: function(e) {
                return {
                    is_archive: !e.is_archive
                }
            },
            onAddSuccess: function(e) {
                var t = {
                    id: "new_pipe",
                    newPipeline: r().toArray(e.response.pipelines.add.pipelines)[0]
                };
                return this._$document.trigger("pipeline:saved", [t]),
                t
            },
            prepareUpdateData: function(e) {
                var t = {
                    request: {
                        pipelines: {
                            update: {}
                        }
                    }
                };
                return r().each(e, (function(e) {
                    var n = e.get("id");
                    t.request.pipelines.update[n] = {
                        id: n,
                        sort: e.get("sort"),
                        name: (0,
                        s.unescapeHTML)(e.get("name")),
                        is_main: e.get("is_main") ? "on" : ""
                    }
                }
                ), this),
                t
            },
            isValidUpdateResponse: function(e, t) {
                return (0,
                l.hasKeys)(e, ["response", "pipelines", "update", t.id]) && !0 === e.response.pipelines.update[t.id]
            },
            onUpdateSuccess: function(e, t) {
                this._$document.trigger("pipelines:name:changed", t)
            },
            actionDelete: function(e) {
                u.default.getLeadsCount(e.id).done(r().bind((function(t) {
                    t.leads_by_pipe > 0 ? new d.default({
                        class_name: "modal-list",
                        accept_text: (0,
                        s.i18n)("OK"),
                        text: (0,
                        s.i18n)("Pipeline has leads"),
                        no_cancel: !0,
                        init: r().bind(this.elevateDownHoverMenu, this),
                        destroy: r().bind((function() {
                            this.rerenderInputs(e.id),
                            this.elevateUpHoverMenu()
                        }
                        ), this)
                    }) : c.default.prototype.actionDelete.call(this, e)
                }
                ), this))
            },
            onDeleteSuccess: function(e) {
                "leads-dp" === APP.data.current_entity && +APP.data.current_view.pipeline.id == +e.id && APP.router.navigate("/settings/pipeline/leads/", {
                    trigger: !0,
                    replace: !0
                })
            },
            _deleteModalParams: function(e) {
                return {
                    pipeline_id: e.id,
                    pipeline_name: e.name
                }
            },
            navigateTo: function(e) {
                var t, n = e.newPipeline && e.newPipeline.id || e.id, i = APP.data.current_entity, o = "/leads/";
                t = "leads-dp" === i ? "/settings/pipeline/leads/" : APP.data.is_card || "leads" !== i ? "".concat(o, "pipeline/") : "".concat(o, "list/pipeline/"),
                APP.router.navigate(t + n, {
                    trigger: !0,
                    replace: !0
                })
            },
            actionUpdate: function() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                    t[n] = arguments[n];
                var i = this
                  , o = c.default.prototype.actionUpdate.apply(this, t);
                o && r().isFunction(o.then) && o.then((function() {
                    var e = i.collection.findWhere({
                        is_main: !0
                    })
                      , t = e && e.get("id");
                    t && APP.constant("main_pipeline", t)
                }
                ))
            }
        });
        var h = "../build/transpiled/interface/left_menu/hover_menu/leads";
        window.define(h, (function() {
            var e = "undefined"
              , n = typeof t === e ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === e ? typeof module === e ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : t;
            return n && n.default || n
        }
        )),
        window.require([h])
    }
    ,
    763176: (e, t, n) => {
        "use strict";
        n.r(t),
        n.d(t, {
            wrapCacheCollection: () => r
        });
        var i = n(55188)
          , o = n.n(i);
        function a(e) {
            return o().each(e, (function(t, n) {
                o().isArray(t) ? e[n] = e[n].sort() : o().isObject(t) && (e[n] = a(e[n]))
            }
            )),
            e
        }
        function r(e) {
            var t = {}
              , n = {};
            return e.extend({
                __cache_wrapper_cache_id: null,
                getCacheId: function() {
                    return (e.prototype.getCacheId ? e.prototype.getCacheId.apply(this, arguments) : null) || this.__cache_wrapper_cache_id || o().result(this, "url", "")
                },
                getCache: function(n) {
                    return (e.prototype.getCache ? e.prototype.getCache.apply(this, arguments) : null) || t[this.collection_namespace][n]
                },
                setCache: function(n, i) {
                    return e.prototype.setCache && e.prototype.setCache.apply(this, arguments),
                    t[this.collection_namespace][n] = i,
                    i
                },
                clearCache: function(n) {
                    e.prototype.clearCache && e.prototype.clearCache.apply(this, arguments);
                    var i = this.getCacheId(n);
                    return (n = n || {}).namespace_full ? t[this.collection_namespace] = {} : o().propertyOf(t)([this.collection_namespace, i]) && delete t[this.collection_namespace][i],
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
                        return JSON.stringify(a(t))
                    } catch (e) {
                        return console.error(e),
                        "{}"
                    }
                },
                initialize: function(n, i) {
                    i = i || {},
                    this.collection_namespace = this._getConfig(i),
                    t[this.collection_namespace] || (t[this.collection_namespace] = {}),
                    e.prototype.initialize.apply(this, arguments)
                },
                sync: function(t, i, a) {
                    var r = this;
                    if ("read" === t) {
                        a && a.data && !this.__cache_wrapper_cache_id && (this.__cache_wrapper_cache_id = o().result(this, "url", "") + JSON.stringify(a.data));
                        var s = this.getCacheId(a);
                        return n[s] || (n[s] = new Promise((function(n, l) {
                            var c = r.getCache(s);
                            c ? n(o().clone(c)) : e.prototype.sync.call(r, t, i, o().extend({}, a, {
                                success: function(e) {
                                    r.setCache(s, e),
                                    n(o().clone(e))
                                },
                                error: function(e) {
                                    l(e)
                                }
                            }))
                        }
                        ))),
                        n[s].then((function(e) {
                            return n[s] = null,
                            a.success(o().clone(e)),
                            e
                        }
                        ), (function(e) {
                            throw n[s] = null,
                            a.error(e),
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
                    o().each(t, (function(e, n) {
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
    675608: (e, t, n) => {
        "use strict";
        n.r(t),
        n.d(t, {
            fetch: () => u
        });
        var i = n(661533)
          , o = n.n(i)
          , a = n(55188)
          , r = n.n(a);
        function s(e, t, n, i, o, a, r) {
            try {
                var s = e[a](r)
                  , l = s.value
            } catch (e) {
                return void n(e)
            }
            s.done ? t(l) : Promise.resolve(l).then(i, o)
        }
        var l, c, d = null, u = (l = function(e) {
            var t;
            return function(e, t) {
                var n, i, o, a, r = {
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
                            if (n)
                                throw new TypeError("Generator is already executing.");
                            for (; r; )
                                try {
                                    if (n = 1,
                                    i && (o = 2 & a[0] ? i.return : a[0] ? i.throw || ((o = i.return) && o.call(i),
                                    0) : i.next) && !(o = o.call(i, a[1])).done)
                                        return o;
                                    switch (i = 0,
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
                                        i = a[1],
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
                                    a = t.call(e, r)
                                } catch (e) {
                                    a = [6, e],
                                    i = 0
                                } finally {
                                    n = o = 0
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
                    return null === d || e ? [4, o().ajax({
                        url: "/ajax/v1/catalogs/list",
                        type: "GET",
                        dataType: "json"
                    })] : [2, d];
                case 1:
                    return t = n.sent(),
                    r().propertyOf(t)(["response", "catalogs"]) && (d = t.response.catalogs),
                    [2, d || []]
                }
            }
            ))
        }
        ,
        c = function() {
            var e = this
              , t = arguments;
            return new Promise((function(n, i) {
                var o = l.apply(e, t);
                function a(e) {
                    s(o, n, i, a, r, "next", e)
                }
                function r(e) {
                    s(o, n, i, a, r, "throw", e)
                }
                a(void 0)
            }
            ))
        }
        ,
        function(e) {
            return c.apply(this, arguments)
        }
        ), _ = "../build/transpiled/network/catalogs/api";
        window.define(_, (function() {
            var e = "undefined"
              , n = typeof t === e ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === e ? typeof module === e ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : t;
            return n && n.default || n
        }
        )),
        window.require([_])
    }
    ,
    950731: (e, t, n) => {
        "use strict";
        n.r(t),
        n.d(t, {
            default: () => d
        });
        var i = n(55188)
          , o = n.n(i)
          , a = n(312309)
          , r = n(661533)
          , s = {}
          , l = {};
        r(document).on("page:changed", (function() {
            s = {},
            l = {}
        }
        ));
        var c = function() {};
        o().extend(c.prototype, {
            getPipelines: function(e) {
                return !0 === e || o().isEmpty(s) ? (this._pipelines_xhr || (this._pipelines_xhr = r.ajax({
                    url: "/ajax/v1/pipelines/list",
                    type: "GET",
                    dataType: "json"
                }).always(o().bind((function() {
                    this._pipelines_xhr = null
                }
                ), this)).then((function(e) {
                    var t = e.response;
                    return o().each(t.pipelines, (function(e) {
                        e.statuses = o().sortBy(e.statuses, "sort")
                    }
                    )),
                    s = t,
                    t
                }
                ))),
                this._pipelines_xhr) : r.Deferred().resolve(s)
            },
            getPipelinesWithUnsorted: function(e) {
                return !0 === e || o().isEmpty(l) ? (this._pipelines_w_unsorted_xhr || (this._pipelines_w_unsorted_xhr = r.ajax({
                    url: "/ajax/v1/pipelines/list?with_unsorted=true",
                    type: "GET",
                    dataType: "json"
                }).always(o().bind((function() {
                    this._pipelines_w_unsorted_xhr = null
                }
                ), this)).then((function(e) {
                    var t = e.response;
                    return o().each(t.pipelines, (function(e) {
                        e.statuses = o().sortBy(e.statuses, "sort")
                    }
                    )),
                    l = t,
                    t
                }
                ))),
                this._pipelines_w_unsorted_xhr) : r.Deferred().resolve(l)
            },
            getLeadsByStatus: function(e, t) {
                var n = this;
                return e = e ? e + "/" : "",
                this._lbs_fetching = this._lbs_fetching || {},
                t = t || (0,
                a.getQueryString)(),
                this._lbs_fetching[t] && 4 !== this._lbs_fetching[t].readyState || (this._lbs_fetching[t] = r.ajax({
                    url: "/ajax/leads/sum/".concat(e),
                    data: "leads_by_status=Y".concat((t.length ? "&" : "") + t),
                    type: "POST"
                }).always((function() {
                    delete n._lbs_fetching[t]
                }
                ))),
                this._lbs_fetching[t]
            },
            getLossReasons: function() {
                return r.ajax({
                    url: "/ajax/v3/loss_reasons"
                })
            },
            getLeadsCount: function(e) {
                return r.ajax({
                    url: "/ajax/leads/sum/?pipeline_id=".concat(e),
                    data: {
                        leads_count: "Y"
                    },
                    type: "POST"
                })
            },
            getStatusesWithLeads: function(e, t) {
                return r.ajax({
                    url: "/ajax/leads/sum/".concat(e),
                    data: (n = {
                        leads_by_status: "Y"
                    },
                    i = "filter[pipe][".concat(e, "][]"),
                    o = t,
                    i in n ? Object.defineProperty(n, i, {
                        value: o,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : n[i] = o,
                    n),
                    type: "POST"
                });
                var n, i, o
            },
            getTriggersCount: function(e) {
                return r.ajax({
                    url: "/ajax/leads/pipelines/".concat(e, "/triggers/count")
                })
            },
            getLeadDoubles: function(e) {
                return e ? r.ajax({
                    url: "/ajax/v4/leads/doubles/".concat(e)
                }) : Promise.reject()
            },
            getListLeadsCount: function(e, t) {
                var n = (0,
                a.getQueryString)()
                  , i = "/ajax/leads/list/".concat(e ? "pipeline/".concat(e) : "", "?only_count=Y").concat(n ? "&".concat(n) : "").concat(t ? "&SHOW_DELETED=Y" : "");
                return r.ajax({
                    url: i,
                    type: "GET"
                })
            },
            saveStatuses: function(e, t) {
                return r.ajax({
                    url: "/ajax/leads/pipelines/".concat(t, "/statuses"),
                    type: "POST",
                    dataType: "text",
                    contentType: "application/json",
                    data: JSON.stringify({
                        statuses: e
                    })
                })
            }
        });
        const d = new c;
        var u = "../build/transpiled/network/leads/api";
        window.define(u, (function() {
            var e = "undefined"
              , n = typeof t === e ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === e ? typeof module === e ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : t;
            return n && n.default || n
        }
        )),
        window.require([u])
    }
    ,
    317464: (e, t, n) => {
        "use strict";
        n.r(t),
        n.d(t, {
            default: () => c
        });
        var i = n(55188)
          , o = n.n(i)
          , a = n(871082)
          , r = n.n(a)
          , s = n(763176)
          , l = n(950731);
        const c = (0,
        s.wrapCacheCollection)(r().Collection.extend({
            sync: function(e, t, n) {
                return "read" === e ? l.default.getPipelines(!0).then(n.success || o().noop, n.error || o().noop) : r().Collection.prototype.sync.apply(this, arguments)
            },
            parse: function(e) {
                return e ? o().map(e.pipelines, (function(e) {
                    return e.statuses = o().sortBy(e.statuses, "sort"),
                    e
                }
                )) : []
            }
        }));
        var d = "../build/transpiled/network/leads/pipelines_collection";
        window.define(d, (function() {
            var e = "undefined"
              , n = typeof t === e ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === e ? typeof module === e ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : t;
            return n && n.default || n
        }
        )),
        window.require([d])
    }
    ,
    186361: (e, t, n) => {
        "use strict";
        n.r(t),
        n.d(t, {
            default: () => c
        });
        var i = n(55188)
          , o = n.n(i)
          , a = n(871082)
          , r = n.n(a)
          , s = n(392517)
          , l = n(661533);
        const c = new (r().Collection.extend({
            fetch: function() {
                var e = l.Deferred();
                return s.default.getMailboxes("list").done(o().bind((function(t) {
                    this.reset(t),
                    e.resolve(t)
                }
                ), this)).fail((function(t, n, i) {
                    var o = {
                        req_obj: t,
                        msg: n,
                        error: i
                    };
                    e.reject(o)
                }
                )),
                e.promise()
            }
        }));
        var d = "../build/transpiled/network/mail/mailboxes_collection";
        window.define(d, (function() {
            var e = "undefined"
              , n = typeof t === e ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === e ? typeof module === e ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : t;
            return n && n.default || n
        }
        )),
        window.require([d])
    }
    ,
    208928: (e, t, n) => {
        "use strict";
        n.r(t),
        n.d(t, {
            getCallingStatus: () => u,
            runMerge: () => h,
            setCallingStatus: () => d,
            showUserStatus: () => _
        });
        var i = n(55188)
          , o = n.n(i)
          , a = n(579569);
        function r(e, t, n, i, o, a, r) {
            try {
                var s = e[a](r)
                  , l = s.value
            } catch (e) {
                return void n(e)
            }
            s.done ? t(l) : Promise.resolve(l).then(i, o)
        }
        var s, l, c = !1, d = function(e) {
            return "calling_status - " + (c = e)
        }, u = function() {
            return c
        }, _ = function(e) {
            var t = {}
              , n = (0,
            a.get)();
            switch (!0) {
            case "online" === e:
                t = [],
                o().each(n, (function(e) {
                    !0 === e.online && t.push(e.id)
                }
                ));
                break;
            case !o().isNaN(parseInt(e)) && !o().isUndefined((0,
            a.get)(e)):
                t = (0,
                a.get)(e).online || !1;
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
        }, h = (s = function(e) {
            return function(e, t) {
                var n, i, o, a, r = {
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
                            if (n)
                                throw new TypeError("Generator is already executing.");
                            for (; r; )
                                try {
                                    if (n = 1,
                                    i && (o = 2 & a[0] ? i.return : a[0] ? i.throw || ((o = i.return) && o.call(i),
                                    0) : i.next) && !(o = o.call(i, a[1])).done)
                                        return o;
                                    switch (i = 0,
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
                                        i = a[1],
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
                                    a = t.call(e, r)
                                } catch (e) {
                                    a = [6, e],
                                    i = 0
                                } finally {
                                    n = o = 0
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
            return new Promise((function(n, i) {
                var o = s.apply(e, t);
                function a(e) {
                    r(o, n, i, a, l, "next", e)
                }
                function l(e) {
                    r(o, n, i, a, l, "throw", e)
                }
                a(void 0)
            }
            ))
        }
        ,
        function(e) {
            return l.apply(this, arguments)
        }
        ), p = "../build/transpiled/sdk/index";
        window.define(p, (function() {
            var e = "undefined"
              , n = typeof t === e ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === e ? typeof module === e ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : t;
            return n && n.default || n
        }
        )),
        window.require([p])
    }
    ,
    366302: (e, t, n) => {
        "use strict";
        n.r(t),
        n.d(t, {
            disallowedWidgetsRegExp: () => l
        });
        var i = n(971588)
          , o = n(577486)
          , a = ["amo_mailchimp", "mailchimp_kommo", "t57c8mssj0hf4lyfyefawyicehiykduabll1w3gt", "amo_1c_fresh", "amo_unf", "amo_tinkoffbacq", "amo_yakassa", "amo_sberbacq", "amo_alfabacq", "amo_twilio6", "mercado_libre", "linkedin_kommo", "wix_kommo", "lazada", "nuvemshop", "woocom", "shopify", "gotoconnect", "amo_rd_station", "amo_googledocsgenv2", "amo_docsgenv2_com", "paypal", "mercado_pago", "amo_dropbox", "amo_zoom", "amo_zapier", "dlzsz9jezzn3yicnojvtwddrip6anomozhrybv72", "amo_intercom", "amo_activecampaign", "amo_stripe", "amo_typeform", "lzawrqwjjathddycg8griw0lwx1bfaodscd4wfwh", "amo_jotform", "amo_ringcentral_vol2", "zenvia_voip", "nvoip", "amo_smsc", "amo_yametrika", "amo_new_moysklad", "avito_work", "amo_evotor", "amo_eskiz", "amo_lead_scraper", "amo_tranzaptorcom", "amo_asterisk", "amo_zendesk", "amo_ofd", "google_translator", "cloudtalk", "xf2tnprxxab1iax0sclmvrsbwcyazdoxywdgaj1b", "tokopedia", "api4com", "amo_aircall", i.default.WHATSAPP, i.default.WHATSAPP_WHITE, i.default.TIKTOK]
          , r = "(".concat(a.join("|"), ")")
          , s = "\\/(upl|widgets)\\/(?!(".concat(r, ")\\/).*")
          , l = new o.UnsafeRegExp("".concat("https?:\\/\\/([^.]+\\.)?([^.]+\\.)?(amocrm2?\\.(saas|ru)|kommo2?\\.com)").concat(s))
    }
    ,
    643095: (e, t, n) => {
        "use strict";
        n.r(t),
        n.d(t, {
            captureException: () => g,
            isDisallowedWidgetTraceDetected: () => f,
            sentryLogBrokenFeed: () => x,
            sentryLogErrorHandler: () => E,
            sentryLogErrorModal: () => b,
            sentryLogFailedGetAmojoToken: () => A,
            sentryLogSocketDisconnect: () => k,
            sentryLogSpaceError: () => w,
            sentryLogUserflowUpdateUserError: () => P,
            startBrowserTracingSpan: () => m
        });
        var i = n(661533)
          , o = n.n(i)
          , a = n(55188)
          , r = n.n(a)
          , s = n(189967)
          , l = n(366302);
        function c(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, i = new Array(t); n < t; n++)
                i[n] = e[n];
            return i
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
        function u(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {}
                  , i = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                }
                )))),
                i.forEach((function(t) {
                    d(e, t, n[t])
                }
                ))
            }
            return e
        }
        var _ = []
          , h = []
          , p = {
            fatal: "fatal",
            error: "error",
            warning: "warning",
            log: "log",
            info: "info",
            debug: "debug"
        }
          , f = function(e) {
            return l.disallowedWidgetsRegExp.test(e)
        };
        function m(e) {
            var t = e.entity;
            t && r().isFunction(window.sentryStartBrowserTracingSpan) && window.sentryStartBrowserTracingSpan({
                isPageLoad: APP.first_load,
                entity: t
            })
        }
        function v() {
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
        function g(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
              , n = window.Sentry;
            n && navigator.onLine ? (_.length && y(),
            t.tags = r().defaults(t.tags || {}, {
                "manually-logged": !0
            }),
            n.captureException(e, t)) : _.push([e, t])
        }
        function y() {
            var e = _.slice(0);
            _ = [],
            r().each(e, (function(e) {
                var t;
                g.apply(void 0, function(e) {
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
            var t = v()
              , n = new Error("Error modal showed - ".concat(t));
            n.stack && f(n.stack) || setTimeout((function() {
                g(n, {
                    tags: {
                        "oops-error.entity": t,
                        "navigator.online": navigator.onLine,
                        "message.empty": r().isEmpty(e)
                    },
                    extra: {
                        "Error Message": e,
                        "Last Ajaxes": h
                    }
                }),
                h = []
            }
            ))
        }
        function w(e) {
            var t = e.errXHR
              , n = e.extra
              , i = void 0 === n ? {} : n;
            if (t) {
                var o = t.getResponseHeader("X-Request-Id")
                  , a = t.status
                  , r = t.responseText
                  , s = v();
                g(new Error("Space error - ".concat(s)), {
                    tags: {
                        "space-error.entity": s,
                        "navigator.online": navigator.onLine
                    },
                    extra: u({
                        "Request Id": o,
                        "Status Code": a,
                        "Response Message": r
                    }, i)
                })
            }
        }
        function E(e) {
            var t = e.errXHR
              , n = e.variant
              , i = e.extra
              , o = void 0 === i ? {} : i;
            if (t) {
                var a = t.status
                  , r = t.responseText
                  , s = t.getResponseHeader("X-Request-Id")
                  , l = v();
                g(new Error("Error handler - ".concat(l)), {
                    tags: {
                        "error-handler.entity": l,
                        "navigator.online": navigator.onLine,
                        "handle.variant": n
                    },
                    extra: u({
                        "Request Id": s,
                        "Status Code": a,
                        "Response Message": r
                    }, o)
                })
            }
        }
        function A(e) {
            var t = e.responseJSON
              , n = void 0 === t ? {} : t
              , i = e.isNetworkError
              , o = void 0 !== i && i
              , a = APP.constant("account").subdomain
              , r = (n.response || {}).error
              , s = void 0 === r ? {
                error: ""
            } : r;
            g(new Error("Failed to receive amojo token"), {
                tags: {
                    subdomain: a
                },
                extra: {
                    "Error reason": o ? "Network error" : s
                }
            })
        }
        function k() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , t = e.reason
              , n = void 0 === t ? {} : t
              , i = e.socketName
              , o = void 0 === i ? "" : i
              , a = e.code
              , r = APP.constant("account").subdomain;
            g("Socket disconnected - ".concat(o), {
                tags: {
                    subdomain: r,
                    socket: o,
                    "socket.error-code": a
                },
                extra: {
                    "Disconnected reason": JSON.stringify(n),
                    level: p.info
                }
            })
        }
        function x() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , t = v();
            g(new Error("Broken feed - ".concat(t, " ")), {
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
              , i = t.status
              , o = t.title;
            g(new Error("Userflow Update User Error"), {
                tags: {
                    subdomain: n
                },
                extra: {
                    "Response JSON": {
                        status: i,
                        title: o
                    }
                }
            })
        }
        o()(document).on("ajaxError ajaxComplete", (function(e, t, n) {
            !function(e, t) {
                var n = {
                    url: t.url,
                    requestId: e.getResponseHeader("X-Request-Id"),
                    status: e.status
                }
                  , i = e.responseText;
                r().isString(i) && i.length && r().extend(n, {
                    responseMessage: i
                }),
                h.push(n),
                h.length > 5 && h.shift()
            }(t, n)
        }
        )),
        o()(window).on("online", y)
    }
    ,
    971588: (e, t, n) => {
        "use strict";
        var i;
        n.r(t),
        n.d(t, {
            default: () => o
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
        }(i || (i = {}));
        const o = i
    }
    ,
    564638: (e, t, n) => {
        "use strict";
        n.r(t),
        n.d(t, {
            WINDOW_RESIZE_THROTTLE_DELAY: () => i
        });
        var i = 10
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
        e._sentryDebugIds[t] = "73434579-08b2-4742-8409-ac78f288d094",
        e._sentryDebugIdIdentifier = "sentry-dbid-73434579-08b2-4742-8409-ac78f288d094")
    } catch (e) {}
}();
//# sourceMappingURL=17331.d14bdbb075afedab4ca6.js.map
