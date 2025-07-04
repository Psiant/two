!function(e) {
    "function" == typeof define && define.amd ? define(e) : e()
}((function() {
    "use strict";
    var e, t, n, r, i;
    let o;
    !function(e) {
        e.CONNECT = "connect",
        e.DISCONNECT = "disconnect",
        e.ACCOUNTS_CHANGED = "accountsChanged",
        e.CHAIN_CHANGED = "chainChanged"
    }(e || (e = {})),
    function(e) {
        e.ACCOUNTS_CHANGED = "walletAccountsChanged",
        e.CHAIN_CHANGED = "walletChainChanged",
        e.JSON_RPC_RESPONSE = "walletJsonRpcResponse",
        e.CONTENT_SCRIPT_READY = "walletContentScriptReady"
    }(t || (t = {})),
    function(e) {
        e.USER_REJECTED_REQUEST = "User Rejected Request",
        e.UNAUTHORIZED = "Unauthorized",
        e.UNSUPPORTED_METHOD = "Unsupported Method",
        e.DISCONNECTED = "Disconnected",
        e.CHAIN_DISCONNECTED = "Chain Disconnected"
    }(n || (n = {})),
    function(e) {
        e.JSON_RPC = "json-rpc"
    }(r || (r = {})),
    function(e) {
        e.ACCOUNT_CHANGED = "account_changed"
    }(i || (i = {}));
    const s = new Uint8Array(16);
    function a() {
        if (!o && (o = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto),
        !o))
            throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
        return o(s)
    }
    const c = [];
    for (let e = 0; e < 256; ++e)
        c.push((e + 256).toString(16).slice(1));
    var u = {
        randomUUID: "undefined" != typeof crypto && crypto.randomUUID && crypto.randomUUID.bind(crypto)
    };
    function d(e, t, n) {
        if (u.randomUUID && !e)
            return u.randomUUID();
        const r = (e = e || {}).random || (e.rng || a)();
        return r[6] = 15 & r[6] | 64,
        r[8] = 63 & r[8] | 128,
        function(e, t=0) {
            return c[e[t + 0]] + c[e[t + 1]] + c[e[t + 2]] + c[e[t + 3]] + "-" + c[e[t + 4]] + c[e[t + 5]] + "-" + c[e[t + 6]] + c[e[t + 7]] + "-" + c[e[t + 8]] + c[e[t + 9]] + "-" + c[e[t + 10]] + c[e[t + 11]] + c[e[t + 12]] + c[e[t + 13]] + c[e[t + 14]] + c[e[t + 15]]
        }(r)
    }
    const f = () => d()
      , l = e => {
        const t = e.data;
        if (!t)
            return null;
        let n = t;
        if ("string" == typeof n)
            try {
                if (n = JSON.parse(t),
                null === n)
                    return null
            } catch (e) {
                return null
            }
        return n?.isWalletEvent ? n : null
    }
      , h = e => "number" == typeof e ? `0x${e.toString(16)}` : e;
    const p = e => new Promise((t => setTimeout(t, e)));
    function m(e) {
        return Boolean(e) && "object" == typeof e && !Array.isArray(e)
    }
    var v;
    function y() {}
    function g() {
        g.init.call(this)
    }
    function C(e) {
        return void 0 === e._maxListeners ? g.defaultMaxListeners : e._maxListeners
    }
    function w(e, t, n, r) {
        var i, o, s, a;
        if ("function" != typeof n)
            throw new TypeError('"listener" argument must be a function');
        if ((o = e._events) ? (o.newListener && (e.emit("newListener", t, n.listener ? n.listener : n),
        o = e._events),
        s = o[t]) : (o = e._events = new y,
        e._eventsCount = 0),
        s) {
            if ("function" == typeof s ? s = o[t] = r ? [n, s] : [s, n] : r ? s.unshift(n) : s.push(n),
            !s.warned && (i = C(e)) && i > 0 && s.length > i) {
                s.warned = !0;
                var c = new Error("Possible EventEmitter memory leak detected. " + s.length + " " + t + " listeners added. Use emitter.setMaxListeners() to increase limit");
                c.name = "MaxListenersExceededWarning",
                c.emitter = e,
                c.type = t,
                c.count = s.length,
                a = c,
                "function" == typeof console.warn ? console.warn(a) : console.log(a)
            }
        } else
            s = o[t] = n,
            ++e._eventsCount;
        return e
    }
    function E(e, t, n) {
        var r = !1;
        function i() {
            e.removeListener(t, i),
            r || (r = !0,
            n.apply(e, arguments))
        }
        return i.listener = n,
        i
    }
    function b(e) {
        var t = this._events;
        if (t) {
            var n = t[e];
            if ("function" == typeof n)
                return 1;
            if (n)
                return n.length
        }
        return 0
    }
    function N(e, t) {
        for (var n = new Array(t); t--; )
            n[t] = e[t];
        return n
    }
    y.prototype = Object.create(null),
    g.EventEmitter = g,
    g.usingDomains = !1,
    g.prototype.domain = void 0,
    g.prototype._events = void 0,
    g.prototype._maxListeners = void 0,
    g.defaultMaxListeners = 10,
    g.init = function() {
        this.domain = null,
        g.usingDomains && (!v.active || this instanceof v.Domain || (this.domain = v.active)),
        this._events && this._events !== Object.getPrototypeOf(this)._events || (this._events = new y,
        this._eventsCount = 0),
        this._maxListeners = this._maxListeners || void 0
    }
    ,
    g.prototype.setMaxListeners = function(e) {
        if ("number" != typeof e || e < 0 || isNaN(e))
            throw new TypeError('"n" argument must be a positive number');
        return this._maxListeners = e,
        this
    }
    ,
    g.prototype.getMaxListeners = function() {
        return C(this)
    }
    ,
    g.prototype.emit = function(e) {
        var t, n, r, i, o, s, a, c = "error" === e;
        if (s = this._events)
            c = c && null == s.error;
        else if (!c)
            return !1;
        if (a = this.domain,
        c) {
            if (t = arguments[1],
            !a) {
                if (t instanceof Error)
                    throw t;
                var u = new Error('Uncaught, unspecified "error" event. (' + t + ")");
                throw u.context = t,
                u
            }
            return t || (t = new Error('Uncaught, unspecified "error" event')),
            t.domainEmitter = this,
            t.domain = a,
            t.domainThrown = !1,
            a.emit("error", t),
            !1
        }
        if (!(n = s[e]))
            return !1;
        var d = "function" == typeof n;
        switch (r = arguments.length) {
        case 1:
            !function(e, t, n) {
                if (t)
                    e.call(n);
                else
                    for (var r = e.length, i = N(e, r), o = 0; o < r; ++o)
                        i[o].call(n)
            }(n, d, this);
            break;
        case 2:
            !function(e, t, n, r) {
                if (t)
                    e.call(n, r);
                else
                    for (var i = e.length, o = N(e, i), s = 0; s < i; ++s)
                        o[s].call(n, r)
            }(n, d, this, arguments[1]);
            break;
        case 3:
            !function(e, t, n, r, i) {
                if (t)
                    e.call(n, r, i);
                else
                    for (var o = e.length, s = N(e, o), a = 0; a < o; ++a)
                        s[a].call(n, r, i)
            }(n, d, this, arguments[1], arguments[2]);
            break;
        case 4:
            !function(e, t, n, r, i, o) {
                if (t)
                    e.call(n, r, i, o);
                else
                    for (var s = e.length, a = N(e, s), c = 0; c < s; ++c)
                        a[c].call(n, r, i, o)
            }(n, d, this, arguments[1], arguments[2], arguments[3]);
            break;
        default:
            for (i = new Array(r - 1),
            o = 1; o < r; o++)
                i[o - 1] = arguments[o];
            !function(e, t, n, r) {
                if (t)
                    e.apply(n, r);
                else
                    for (var i = e.length, o = N(e, i), s = 0; s < i; ++s)
                        o[s].apply(n, r)
            }(n, d, this, i)
        }
        return !0
    }
    ,
    g.prototype.addListener = function(e, t) {
        return w(this, e, t, !1)
    }
    ,
    g.prototype.on = g.prototype.addListener,
    g.prototype.prependListener = function(e, t) {
        return w(this, e, t, !0)
    }
    ,
    g.prototype.once = function(e, t) {
        if ("function" != typeof t)
            throw new TypeError('"listener" argument must be a function');
        return this.on(e, E(this, e, t)),
        this
    }
    ,
    g.prototype.prependOnceListener = function(e, t) {
        if ("function" != typeof t)
            throw new TypeError('"listener" argument must be a function');
        return this.prependListener(e, E(this, e, t)),
        this
    }
    ,
    g.prototype.removeListener = function(e, t) {
        var n, r, i, o, s;
        if ("function" != typeof t)
            throw new TypeError('"listener" argument must be a function');
        if (!(r = this._events))
            return this;
        if (!(n = r[e]))
            return this;
        if (n === t || n.listener && n.listener === t)
            0 == --this._eventsCount ? this._events = new y : (delete r[e],
            r.removeListener && this.emit("removeListener", e, n.listener || t));
        else if ("function" != typeof n) {
            for (i = -1,
            o = n.length; o-- > 0; )
                if (n[o] === t || n[o].listener && n[o].listener === t) {
                    s = n[o].listener,
                    i = o;
                    break
                }
            if (i < 0)
                return this;
            if (1 === n.length) {
                if (n[0] = void 0,
                0 == --this._eventsCount)
                    return this._events = new y,
                    this;
                delete r[e]
            } else
                !function(e, t) {
                    for (var n = t, r = n + 1, i = e.length; r < i; n += 1,
                    r += 1)
                        e[n] = e[r];
                    e.pop()
                }(n, i);
            r.removeListener && this.emit("removeListener", e, s || t)
        }
        return this
    }
    ,
    g.prototype.off = function(e, t) {
        return this.removeListener(e, t)
    }
    ,
    g.prototype.removeAllListeners = function(e) {
        var t, n;
        if (!(n = this._events))
            return this;
        if (!n.removeListener)
            return 0 === arguments.length ? (this._events = new y,
            this._eventsCount = 0) : n[e] && (0 == --this._eventsCount ? this._events = new y : delete n[e]),
            this;
        if (0 === arguments.length) {
            for (var r, i = Object.keys(n), o = 0; o < i.length; ++o)
                "removeListener" !== (r = i[o]) && this.removeAllListeners(r);
            return this.removeAllListeners("removeListener"),
            this._events = new y,
            this._eventsCount = 0,
            this
        }
        if ("function" == typeof (t = n[e]))
            this.removeListener(e, t);
        else if (t)
            do {
                this.removeListener(e, t[t.length - 1])
            } while (t[0]);
        return this
    }
    ,
    g.prototype.listeners = function(e) {
        var t, n = this._events;
        return n && (t = n[e]) ? "function" == typeof t ? [t.listener || t] : function(e) {
            for (var t = new Array(e.length), n = 0; n < t.length; ++n)
                t[n] = e[n].listener || e[n];
            return t
        }(t) : []
    }
    ,
    g.listenerCount = function(e, t) {
        return "function" == typeof e.listenerCount ? e.listenerCount(t) : b.call(e, t)
    }
    ,
    g.prototype.listenerCount = b,
    g.prototype.eventNames = function() {
        return this._eventsCount > 0 ? Reflect.ownKeys(this._events) : []
    }
    ;
    class _ extends TypeError {
        constructor(e, t) {
            let n;
            const {message: r, explanation: i, ...o} = e
              , {path: s} = e
              , a = 0 === s.length ? r : `At path: ${s.join(".")} -- ${r}`;
            super(i ?? a),
            null != i && (this.cause = a),
            Object.assign(this, o),
            this.name = this.constructor.name,
            this.failures = () => n ?? (n = [e, ...t()])
        }
    }
    function A(e) {
        return "object" == typeof e && null !== e
    }
    function O(e) {
        return "symbol" == typeof e ? e.toString() : "string" == typeof e ? JSON.stringify(e) : `${e}`
    }
    function S(e, t, n, r) {
        if (!0 === e)
            return;
        !1 === e ? e = {} : "string" == typeof e && (e = {
            message: e
        });
        const {path: i, branch: o} = t
          , {type: s} = n
          , {refinement: a, message: c=`Expected a value of type \`${s}\`${a ? ` with refinement \`${a}\`` : ""}, but received: \`${O(r)}\``} = e;
        return {
            value: r,
            type: s,
            refinement: a,
            key: i[i.length - 1],
            path: i,
            branch: o,
            ...e,
            message: c
        }
    }
    function *R(e, t, n, r) {
        (function(e) {
            return A(e) && "function" == typeof e[Symbol.iterator]
        }
        )(e) || (e = [e]);
        for (const i of e) {
            const e = S(i, t, n, r);
            e && (yield e)
        }
    }
    function *L(e, t, n={}) {
        const {path: r=[], branch: i=[e], coerce: o=!1, mask: s=!1} = n
          , a = {
            path: r,
            branch: i
        };
        if (o && (e = t.coercer(e, a),
        s && "type" !== t.type && A(t.schema) && A(e) && !Array.isArray(e)))
            for (const n in e)
                void 0 === t.schema[n] && delete e[n];
        let c = "valid";
        for (const r of t.validator(e, a))
            r.explanation = n.message,
            c = "not_valid",
            yield[r, void 0];
        for (let[u,d,f] of t.entries(e, a)) {
            const t = L(d, f, {
                path: void 0 === u ? r : [...r, u],
                branch: void 0 === u ? i : [...i, d],
                coerce: o,
                mask: s,
                message: n.message
            });
            for (const n of t)
                n[0] ? (c = null === n[0].refinement || void 0 === n[0].refinement ? "not_valid" : "not_refined",
                yield[n[0], void 0]) : o && (d = n[1],
                void 0 === u ? e = d : e instanceof Map ? e.set(u, d) : e instanceof Set ? e.add(d) : A(e) && (void 0 !== d || u in e) && (e[u] = d))
        }
        if ("not_valid" !== c)
            for (const r of t.refiner(e, a))
                r.explanation = n.message,
                c = "not_refined",
                yield[r, void 0];
        "valid" === c && (yield[void 0, e])
    }
    class j {
        constructor(e) {
            const {type: t, schema: n, validator: r, refiner: i, coercer: o=e => e, entries: s=function*() {}
            } = e;
            this.type = t,
            this.schema = n,
            this.entries = s,
            this.coercer = o,
            this.validator = r ? (e, t) => R(r(e, t), t, this, e) : () => [],
            this.refiner = i ? (e, t) => R(i(e, t), t, this, e) : () => []
        }
        assert(e, t) {
            return P(e, this, t)
        }
        create(e, t) {
            return x(e, this, t)
        }
        is(e) {
            return I(e, this)
        }
        mask(e, t) {
            return function(e, t, n) {
                const r = T(e, t, {
                    coerce: !0,
                    mask: !0,
                    message: n
                });
                if (r[0])
                    throw r[0];
                return r[1]
            }(e, this, t)
        }
        validate(e, t={}) {
            return T(e, this, t)
        }
    }
    function P(e, t, n) {
        const r = T(e, t, {
            message: n
        });
        if (r[0])
            throw r[0]
    }
    function x(e, t, n) {
        const r = T(e, t, {
            coerce: !0,
            message: n
        });
        if (r[0])
            throw r[0];
        return r[1]
    }
    function I(e, t) {
        return !T(e, t)[0]
    }
    function T(e, t, n={}) {
        const r = L(e, t, n)
          , i = function(e) {
            const {done: t, value: n} = e.next();
            return t ? void 0 : n
        }(r);
        if (i[0]) {
            return [new _(i[0],(function*() {
                for (const e of r)
                    e[0] && (yield e[0])
            }
            )), void 0]
        }
        return [void 0, i[1]]
    }
    function D(e, t) {
        return new j({
            type: e,
            schema: null,
            validator: t
        })
    }
    function U(e) {
        const t = e ? Object.keys(e) : []
          , n = D("never", ( () => !1));
        return new j({
            type: "object",
            schema: e ?? null,
            *entries(r) {
                if (e && A(r)) {
                    const i = new Set(Object.keys(r));
                    for (const n of t)
                        i.delete(n),
                        yield[n, r[n], e[n]];
                    for (const e of i)
                        yield[e, r[e], n]
                }
            },
            validator: e => A(e) || `Expected an object, but received: ${O(e)}`,
            coercer: e => A(e) ? {
                ...e
            } : e
        })
    }
    function $(e) {
        return new j({
            ...e,
            validator: (t, n) => void 0 === t || e.validator(t, n),
            refiner: (t, n) => void 0 === t || e.refiner(t, n)
        })
    }
    function k() {
        return D("string", (e => "string" == typeof e || `Expected a string, but received: ${O(e)}`))
    }
    function J(e) {
        const t = e.map((e => e.type)).join(" | ");
        return new j({
            type: "union",
            schema: null,
            coercer(t) {
                for (const n of e) {
                    const [e,r] = n.validate(t, {
                        coerce: !0
                    });
                    if (!e)
                        return r
                }
                return t
            },
            validator(n, r) {
                const i = [];
                for (const t of e) {
                    const [...e] = L(n, t, r)
                      , [o] = e;
                    if (!o?.[0])
                        return [];
                    for (const [t] of e)
                        t && i.push(t)
                }
                return [`Expected the value to satisfy a union of \`${t}\`, but received: ${O(n)}`, ...i]
            }
        })
    }
    function q(e) {
        return Boolean(e) && "object" == typeof e && !Array.isArray(e)
    }
    const H = (e, t) => Object.hasOwnProperty.call(e, t);
    var M;
    function G(e) {
        return function(e) {
            return function(e) {
                return "object" == typeof e && null !== e && "message"in e
            }(e) && "string" == typeof e.message ? e.message : null == e ? "" : String(e)
        }(e).replace(/\.$/u, "")
    }
    function z(e, t) {
        return n = e,
        Boolean("string" == typeof n?.prototype?.constructor?.name) ? new e({
            message: t
        }) : e({
            message: t
        });
        var n
    }
    !function(e) {
        e[e.Null = 4] = "Null",
        e[e.Comma = 1] = "Comma",
        e[e.Wrapper = 1] = "Wrapper",
        e[e.True = 4] = "True",
        e[e.False = 5] = "False",
        e[e.Quote = 1] = "Quote",
        e[e.Colon = 1] = "Colon",
        e[e.Date = 24] = "Date"
    }(M = M || (M = {}));
    class F extends Error {
        constructor(e) {
            super(e.message),
            this.code = "ERR_ASSERTION"
        }
    }
    const V = e => U(e);
    function W({path: e, branch: t}) {
        const n = e[e.length - 1];
        return H(t[t.length - 2], n)
    }
    function B(e) {
        return new j({
            ...e,
            type: `optional ${e.type}`,
            validator: (t, n) => !W(n) || e.validator(t, n),
            refiner: (t, n) => !W(n) || e.refiner(t, n)
        })
    }
    function Z(e) {
        if (null === e || "boolean" == typeof e || "string" == typeof e)
            return !0;
        if ("number" == typeof e && Number.isFinite(e))
            return !0;
        if ("object" == typeof e) {
            let t = !0;
            if (Array.isArray(e)) {
                for (let n = 0; n < e.length; n++)
                    if (!Z(e[n])) {
                        t = !1;
                        break
                    }
                return t
            }
            const n = Object.entries(e);
            for (let e = 0; e < n.length; e++)
                if ("string" != typeof n[e][0] || !Z(n[e][1])) {
                    t = !1;
                    break
                }
            return t
        }
        return !1
    }
    const Q = D("JSON", (e => Z(e)))
      , X = (Y = Q,
    K = D("any", ( () => !0)),
    ee = e => (function(e, t, n="Assertion failed", r=F) {
        try {
            P(e, t)
        } catch (e) {
            throw z(r, `${n}: ${G(e)}.`)
        }
    }(e, Q),
    JSON.parse(JSON.stringify(e, ( (e, t) => {
        if ("__proto__" !== e && "constructor" !== e)
            return t
    }
    )))),
    new j({
        ...Y,
        coercer: (e, t) => I(e, K) ? Y.coercer(ee(e, t), t) : Y.coercer(e, t)
    }));
    var Y, K, ee;
    function te(e) {
        try {
            return function(e) {
                x(e, X)
            }(e),
            !0
        } catch {
            return !1
        }
    }
    const ne = function(e) {
        const t = O(e);
        return new j({
            type: "literal",
            schema: e,
            validator: n => n === e || `Expected the literal \`${t}\`, but received: ${O(n)}`
        })
    }("2.0")
      , re = function(e) {
        return new j({
            ...e,
            validator: (t, n) => null === t || e.validator(t, n),
            refiner: (t, n) => null === t || e.refiner(t, n)
        })
    }(J([D("number", (e => "number" == typeof e && !isNaN(e) || `Expected a number, but received: ${O(e)}`)), k()]))
      , ie = V({
        code: D("integer", (e => "number" == typeof e && !isNaN(e) && Number.isInteger(e) || `Expected an integer, but received: ${O(e)}`)),
        message: k(),
        data: B(X),
        stack: B(k())
    })
      , oe = J([(ae = k(),
    ce = X,
    new j({
        type: "record",
        schema: null,
        *entries(e) {
            if (A(e))
                for (const t in e) {
                    const n = e[t];
                    yield[t, t, ae],
                    yield[t, n, ce]
                }
        },
        validator: e => A(e) || `Expected an object, but received: ${O(e)}`
    })), (se = X,
    new j({
        type: "array",
        schema: se,
        *entries(e) {
            if (se && Array.isArray(e))
                for (const [t,n] of e.entries())
                    yield[t, n, se]
        },
        coercer: e => Array.isArray(e) ? e.slice() : e,
        validator: e => Array.isArray(e) || `Expected an array value, but received: ${O(e)}`
    }))]);
    var se, ae, ce;
    V({
        id: re,
        jsonrpc: ne,
        method: k(),
        params: B(oe)
    }),
    V({
        jsonrpc: ne,
        method: k(),
        params: B(oe)
    }),
    U({
        id: re,
        jsonrpc: ne,
        result: $(D("unknown", ( () => !0))),
        error: $(ie)
    });
    function ue(e) {
        return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
    }
    var de, fe;
    J([V({
        id: re,
        jsonrpc: ne,
        result: X
    }), V({
        id: re,
        jsonrpc: ne,
        error: ie
    })]);
    var le = ue(function() {
        if (fe)
            return de;
        fe = 1,
        de = o,
        o.default = o,
        o.stable = u,
        o.stableStringify = u;
        var e = "[...]"
          , t = "[Circular]"
          , n = []
          , r = [];
        function i() {
            return {
                depthLimit: Number.MAX_SAFE_INTEGER,
                edgesLimit: Number.MAX_SAFE_INTEGER
            }
        }
        function o(e, t, o, s) {
            var c;
            void 0 === s && (s = i()),
            a(e, "", 0, [], void 0, 0, s);
            try {
                c = 0 === r.length ? JSON.stringify(e, t, o) : JSON.stringify(e, f(t), o)
            } catch (e) {
                return JSON.stringify("[unable to serialize, circular reference is too complex to analyze]")
            } finally {
                for (; 0 !== n.length; ) {
                    var u = n.pop();
                    4 === u.length ? Object.defineProperty(u[0], u[1], u[3]) : u[0][u[1]] = u[2]
                }
            }
            return c
        }
        function s(e, t, i, o) {
            var s = Object.getOwnPropertyDescriptor(o, i);
            void 0 !== s.get ? s.configurable ? (Object.defineProperty(o, i, {
                value: e
            }),
            n.push([o, i, t, s])) : r.push([t, i, e]) : (o[i] = e,
            n.push([o, i, t]))
        }
        function a(n, r, i, o, c, u, d) {
            var f;
            if (u += 1,
            "object" == typeof n && null !== n) {
                for (f = 0; f < o.length; f++)
                    if (o[f] === n)
                        return void s(t, n, r, c);
                if (void 0 !== d.depthLimit && u > d.depthLimit)
                    return void s(e, n, r, c);
                if (void 0 !== d.edgesLimit && i + 1 > d.edgesLimit)
                    return void s(e, n, r, c);
                if (o.push(n),
                Array.isArray(n))
                    for (f = 0; f < n.length; f++)
                        a(n[f], f, f, o, n, u, d);
                else {
                    var l = Object.keys(n);
                    for (f = 0; f < l.length; f++) {
                        var h = l[f];
                        a(n[h], h, f, o, n, u, d)
                    }
                }
                o.pop()
            }
        }
        function c(e, t) {
            return e < t ? -1 : e > t ? 1 : 0
        }
        function u(e, t, o, s) {
            void 0 === s && (s = i());
            var a, c = d(e, "", 0, [], void 0, 0, s) || e;
            try {
                a = 0 === r.length ? JSON.stringify(c, t, o) : JSON.stringify(c, f(t), o)
            } catch (e) {
                return JSON.stringify("[unable to serialize, circular reference is too complex to analyze]")
            } finally {
                for (; 0 !== n.length; ) {
                    var u = n.pop();
                    4 === u.length ? Object.defineProperty(u[0], u[1], u[3]) : u[0][u[1]] = u[2]
                }
            }
            return a
        }
        function d(r, i, o, a, u, f, l) {
            var h;
            if (f += 1,
            "object" == typeof r && null !== r) {
                for (h = 0; h < a.length; h++)
                    if (a[h] === r)
                        return void s(t, r, i, u);
                try {
                    if ("function" == typeof r.toJSON)
                        return
                } catch (e) {
                    return
                }
                if (void 0 !== l.depthLimit && f > l.depthLimit)
                    return void s(e, r, i, u);
                if (void 0 !== l.edgesLimit && o + 1 > l.edgesLimit)
                    return void s(e, r, i, u);
                if (a.push(r),
                Array.isArray(r))
                    for (h = 0; h < r.length; h++)
                        d(r[h], h, h, a, r, f, l);
                else {
                    var p = {}
                      , m = Object.keys(r).sort(c);
                    for (h = 0; h < m.length; h++) {
                        var v = m[h];
                        d(r[v], v, h, a, r, f, l),
                        p[v] = r[v]
                    }
                    if (void 0 === u)
                        return p;
                    n.push([u, i, r]),
                    u[i] = p
                }
                a.pop()
            }
        }
        function f(e) {
            return e = void 0 !== e ? e : function(e, t) {
                return t
            }
            ,
            function(t, n) {
                if (r.length > 0)
                    for (var i = 0; i < r.length; i++) {
                        var o = r[i];
                        if (o[1] === t && o[0] === n) {
                            n = o[2],
                            r.splice(i, 1);
                            break
                        }
                    }
                return e.call(this, t, n)
            }
        }
        return de
    }());
    const he = {
        invalidInput: -32e3,
        resourceNotFound: -32001,
        resourceUnavailable: -32002,
        transactionRejected: -32003,
        methodNotSupported: -32004,
        limitExceeded: -32005,
        parse: -32700,
        invalidRequest: -32600,
        methodNotFound: -32601,
        invalidParams: -32602,
        internal: -32603
    }
      , pe = {
        "-32700": {
            standard: "JSON RPC 2.0",
            message: "Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text."
        },
        "-32600": {
            standard: "JSON RPC 2.0",
            message: "The JSON sent is not a valid Request object."
        },
        "-32601": {
            standard: "JSON RPC 2.0",
            message: "The method does not exist / is not available."
        },
        "-32602": {
            standard: "JSON RPC 2.0",
            message: "Invalid method parameter(s)."
        },
        "-32603": {
            standard: "JSON RPC 2.0",
            message: "Internal JSON-RPC error."
        },
        "-32000": {
            standard: "EIP-1474",
            message: "Invalid input."
        },
        "-32001": {
            standard: "EIP-1474",
            message: "Resource not found."
        },
        "-32002": {
            standard: "EIP-1474",
            message: "Resource unavailable."
        },
        "-32003": {
            standard: "EIP-1474",
            message: "Transaction rejected."
        },
        "-32004": {
            standard: "EIP-1474",
            message: "Method not supported."
        },
        "-32005": {
            standard: "EIP-1474",
            message: "Request limit exceeded."
        },
        4001: {
            standard: "EIP-1193",
            message: "User rejected the request."
        },
        4100: {
            standard: "EIP-1193",
            message: "The requested account and/or method has not been authorized by the user."
        },
        4200: {
            standard: "EIP-1193",
            message: "The requested method is not supported by this Ethereum provider."
        },
        4900: {
            standard: "EIP-1193",
            message: "The provider is disconnected from all chains."
        },
        4901: {
            standard: "EIP-1193",
            message: "The provider is disconnected from the specified chain."
        }
    }
      , me = he.internal;
    ye(me);
    const ve = "Unspecified server error.";
    function ye(e, t="Unspecified error message. This is a bug, please report it.") {
        if (function(e) {
            return Number.isInteger(e)
        }(e)) {
            const t = e.toString();
            if (H(pe, t))
                return pe[t].message;
            if (function(e) {
                return e >= -32099 && e <= -32e3
            }(e))
                return ve
        }
        return t
    }
    function ge(e) {
        return Object.getOwnPropertyNames(e).reduce(( (t, n) => {
            const r = e[n];
            return te(r) && (t[n] = r),
            t
        }
        ), {})
    }
    const Ce = (we = le,
    we?.__esModule ? we.default : we);
    var we;
    class Ee extends Error {
        constructor(e, t, n) {
            if (!Number.isInteger(e))
                throw new Error('"code" must be an integer.');
            if (!t || "string" != typeof t)
                throw new Error('"message" must be a non-empty string.');
            !function(e) {
                return q(e) && H(e, "cause") && q(e.cause)
            }(n) ? super(t) : (super(t, {
                cause: n.cause
            }),
            H(this, "cause") || Object.assign(this, {
                cause: n.cause
            })),
            void 0 !== n && (this.data = n),
            this.code = e
        }
        serialize() {
            const e = {
                code: this.code,
                message: this.message
            };
            var t;
            return void 0 !== this.data && (e.data = this.data,
            function(e) {
                if ("object" != typeof e || null === e)
                    return !1;
                try {
                    let t = e;
                    for (; null !== Object.getPrototypeOf(t); )
                        t = Object.getPrototypeOf(t);
                    return Object.getPrototypeOf(e) === t
                } catch (e) {
                    return !1
                }
            }(this.data) && (e.data.cause = (t = this.data.cause,
            Array.isArray(t) ? t.map((e => te(e) ? e : q(e) ? ge(e) : null)) : q(t) ? ge(t) : te(t) ? t : null))),
            this.stack && (e.stack = this.stack),
            e
        }
        toString() {
            return Ce(this.serialize(), be, 2)
        }
    }
    function be(e, t) {
        if ("[Circular]" !== t)
            return t
    }
    const Ne = e => _e(he.invalidRequest, e);
    function _e(e, t) {
        const [n,r] = function(e) {
            if (e) {
                if ("string" == typeof e)
                    return [e];
                if ("object" == typeof e && !Array.isArray(e)) {
                    const {message: t, data: n} = e;
                    if (t && "string" != typeof t)
                        throw new Error("Must specify string message.");
                    return [t ?? void 0, n]
                }
            }
            return []
        }(t);
        return new Ee(e,n ?? ye(e),r)
    }
    class Ae extends g {
        isConnected;
        isReady = !1;
        shouldWaitForReady = !1;
        _roninEvent;
        isRonin = !0;
        constructor(e, t=!1) {
            super(),
            this.isConnected = !0,
            this._roninEvent = e,
            this.shouldWaitForReady = t,
            this.request = this.request.bind(this),
            this.sendAsync = this.sendAsync.bind(this),
            this.disconnect = this.disconnect.bind(this),
            this.enable = this.enable.bind(this),
            this.handleConnect = this.handleConnect.bind(this),
            this.handleDisconnect = this.handleDisconnect.bind(this),
            this.handleChainChanged = this.handleChainChanged.bind(this),
            this.handleAccountsChanged = this.handleAccountsChanged.bind(this),
            this.initInpageEventListener()
        }
        initInpageEventListener() {
            window.addEventListener("message", (e => {
                const n = l(e);
                n && n.type === t.ACCOUNTS_CHANGED && this.handleAccountsChanged(n.data)
            }
            ));
            window.addEventListener("message", (e => {
                const n = l(e);
                n && n.type === t.CHAIN_CHANGED && this.handleChainChanged(n.data)
            }
            ));
            const e = n => {
                const r = l(n);
                r && r.type === t.CONTENT_SCRIPT_READY && (this.isReady = !0,
                window.removeEventListener("message", e))
            }
            ;
            window.addEventListener("message", e)
        }
        dispatchEvent(e) {
            const t = new CustomEvent(r.JSON_RPC,{
                detail: {
                    payload: e
                }
            });
            window.dispatchEvent(t)
        }
        async waitForReady() {
            if (!this.shouldWaitForReady)
                return;
            let e = 0;
            for (; !this.isReady && e < 2e3; )
                await p(50),
                e += 50;
            this.isReady = !0
        }
        async sendAsync(e, t) {
            const n = async e => {
                e.id = e.id || f();
                try {
                    const t = await this.request(e);
                    return {
                        id: e.id,
                        jsonrpc: "2.0",
                        result: t
                    }
                } catch (t) {
                    const n = t;
                    return {
                        id: e.id,
                        jsonrpc: "2.0",
                        result: null,
                        error: {
                            code: n.code,
                            message: n.message,
                            name: n.name
                        }
                    }
                }
            }
            ;
            if (Array.isArray(e)) {
                t(null, await Promise.all(e.map(n)))
            } else {
                const r = await n(e);
                t(r.error ?? null, r)
            }
        }
        request(e) {
            return new Promise((async (n, r) => {
                const {method: i} = e;
                if (!i || !i.length || "string" != typeof i)
                    return void r((o = Ne(),
                    o.stack = void 0,
                    o));
                var o;
                await this.waitForReady();
                const s = f();
                this.dispatchEvent({
                    ...e,
                    id: s,
                    jsonrpc: "2.0"
                });
                const a = e => {
                    const i = l(e);
                    if (!i)
                        return;
                    const {type: o, data: c} = i;
                    o === t.JSON_RPC_RESPONSE && c.id === s && (c.error ? r(c.error) : (window.removeEventListener("message", a),
                    n(c.result)))
                }
                ;
                window.addEventListener("message", a)
            }
            ))
        }
        handleConnect(t) {
            this.isConnected || (this.isConnected = !0,
            this.emit(e.CONNECT, {
                chainId: h(t)
            }))
        }
        handleDisconnect() {
            this.isConnected && (this.isConnected = !1,
            this.emit(e.DISCONNECT))
        }
        handleAccountsChanged(t) {
            this.emit(e.ACCOUNTS_CHANGED, t),
            this._roninEvent.dispatchEvent(new Event(i.ACCOUNT_CHANGED))
        }
        handleChainChanged(t) {
            this.handleConnect(t),
            this.emit(e.CHAIN_CHANGED, h(t))
        }
        disconnect() {
            return this.request({
                method: "wallet_disconnectSession"
            })
        }
        enable() {
            return this.request({
                method: "eth_requestAccounts"
            })
        }
    }
    var Oe;
    !function(e) {
        e.Announce = "eip6963:announceProvider",
        e.Request = "eip6963:requestProvider"
    }(Oe || (Oe = {}));
    const Se = /(?:^[a-f0-9]{8}-[a-f0-9]{4}-4[a-f0-9]{3}-[a-f0-9]{4}-[a-f0-9]{12}$)|(?:^0{8}-0{4}-0{4}-0{4}-0{12}$)/u
      , Re = /(?=^.{4,253}$)(^((?!-)[a-zA-Z0-9-]{0,62}[a-zA-Z0-9]\.)+[a-zA-Z]{2,63}$)/u;
    function Le(e) {
        throw new Error(`${e} See https://eips.ethereum.org/EIPS/eip-6963 for requirements.`)
    }
    if (function() {
        const {doctype: e} = window.document;
        return !e || "html" === e.name
    }() && function() {
        const e = [/\.xml$/u, /\.pdf$/u]
          , t = window.location.pathname;
        for (let n = 0; n < e.length; n++)
            if (e[n].test(t))
                return !1;
        return !0
    }() && function() {
        const e = document.documentElement.nodeName;
        return !e || "html" === e.toLowerCase()
    }() && !function() {
        const e = ["execution.consensys.io", "execution.metamask.io", "uscourts.gov", "dropbox.com", "webbyawards.com", "adyen.com", "gravityforms.com", "harbourair.com", "ani.gamer.com.tw", "blueskybooking.com", "sharefile.com", "battle.net"]
          , t = ["cdn.shopify.com/s/javascripts/tricorder/xtld-read-only-frame.html"]
          , {hostname: n, pathname: r} = window.location
          , i = e => e.endsWith("/") ? e.slice(0, -1) : e;
        return e.some((e => e === n || n.endsWith(`.${e}`))) || t.some((e => i(e) === i(n + r)))
    }()) {
        const e = new EventTarget
          , t = new Ae(e,!0);
        !function(e) {
            (function(e) {
                if (!m(e) || !m(e.info) || !m(e.provider))
                    return !1;
                const {info: t} = e;
                return "string" == typeof t.uuid && Se.test(t.uuid) && "string" == typeof t.name && Boolean(t.name) && "string" == typeof t.icon && t.icon.startsWith("data:image") && "string" == typeof t.rdns && Re.test(t.rdns)
            }
            )(e) || Le("Invalid EIP-6963 ProviderDetail object.");
            const {info: t, provider: n} = e
              , r = () => {
                window.dispatchEvent(new CustomEvent(Oe.Announce,{
                    detail: Object.freeze({
                        info: {
                            ...t
                        },
                        provider: n
                    })
                }))
            }
            ;
            window.addEventListener(Oe.Request, (e => {
                (function(e) {
                    return e instanceof Event && e.type === Oe.Request
                }
                )(e) || Le(`Invalid EIP-6963 RequestProviderEvent object received from ${Oe.Request} event.`),
                r()
            }
            )),
            r()
        }({
            info: {
                uuid: f(),
                name: "Ronin Wallet",
                icon: "data:image/svg+xml, %3Csvg width='100' height='100' viewBox='0 0 100 100' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100' height='100' fill='url(%23paint0_linear_8136_55227)'/%3E%3Cpath d='M75.9844 37.9617V21.3206C75.9844 19.1138 75.1081 16.9975 73.5483 15.437C71.9884 13.8766 69.8728 13 67.6669 13H32.3175C30.1116 13 27.996 13.8766 26.4361 15.437C24.8763 16.9975 24 19.1138 24 21.3206V69.6059C24.0008 70.8523 24.2815 72.0827 24.8213 73.206C25.3612 74.3293 26.1464 75.317 27.1191 76.096L39.9904 86.4343C40.1432 86.5583 40.328 86.6364 40.5234 86.6595C40.7188 86.6826 40.9167 86.6497 41.0942 86.5648C41.2717 86.4798 41.4214 86.3462 41.526 86.1795C41.6306 86.0128 41.6858 85.8199 41.6851 85.623V51.4827C41.6851 51.2068 41.7946 50.9423 41.9896 50.7472C42.1846 50.5522 42.449 50.4426 42.7248 50.4426H52.082C53.7364 50.4426 55.3231 51.1001 56.493 52.2704C57.6629 53.4407 58.3201 55.028 58.3201 56.683V85.623C58.3202 85.8189 58.3756 86.0108 58.48 86.1766C58.5843 86.3424 58.7334 86.4753 58.9099 86.56C59.0864 86.6448 59.2833 86.678 59.4779 86.6557C59.6724 86.6335 59.8567 86.5567 60.0096 86.4343L72.8809 76.096C73.8536 75.317 74.6388 74.3293 75.1787 73.206C75.7185 72.0827 75.9992 70.8523 76 69.6059V54.6029C76 52.3961 75.1237 50.2798 73.5639 48.7194C72.004 47.1589 69.8884 46.2823 67.6825 46.2823C69.8857 46.2782 71.9973 45.3997 73.5538 43.8398C75.1102 42.2798 75.9844 40.1658 75.9844 37.9617V37.9617ZM52.0716 42.122H42.7144C42.4386 42.122 42.1742 42.0124 41.9792 41.8174C41.7842 41.6223 41.6747 41.3578 41.6747 41.0819V22.3606C41.6747 22.0848 41.7842 21.8203 41.9792 21.6252C42.1742 21.4302 42.4386 21.3206 42.7144 21.3206H57.27C57.5458 21.3206 57.8102 21.4302 58.0052 21.6252C58.2002 21.8203 58.3097 22.0848 58.3097 22.3606V35.8816C58.3097 37.5367 57.6525 39.1239 56.4826 40.2942C55.3127 41.4646 53.726 42.122 52.0716 42.122V42.122Z' fill='white'/%3E%3Cdefs%3E%3ClinearGradient id='paint0_linear_8136_55227' x1='-3' y1='103' x2='104' y2='5.65126e-08' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%230606B7'/%3E%3Cstop offset='0.625' stop-color='%23137CCA'/%3E%3Cstop offset='1' stop-color='%2318A5D1'/%3E%3Cstop offset='1' stop-color='%2320A8D0'/%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E%0A",
                rdns: "com.roninchain.wallet"
            },
            provider: t
        }),
        window.ronin = {
            provider: t,
            roninEvent: e
        }
    }
}
));
//# sourceMappingURL=extension.umd.js.map
