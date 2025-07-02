(window.webpackChunk = window.webpackChunk || []).push([[75620], {
    560885: (e, t, r) => {
        "use strict";
        r.r(t),
        r.d(t, {
            BaseInput: () => s
        });
        var i = r(824246)
          , n = r(827378)
          , a = r(22538);
        r(208649);
        const s = (0,
        n.forwardRef)(( (e, t) => {
            const {className: r="", isDisabled: n, isReadonly: s, isPlaceholderVisibleOnFocus: _=!1, ...o} = e;
            return (0,
            i.jsx)("input", {
                ref: t,
                className: (0,
                a.c)("_input_x5289_1", {
                    _placeholder_visible_x5289_23: _
                }, r),
                disabled: n,
                readOnly: s,
                ...o
            })
        }
        ));
        s.displayName = "BaseInput"
    }
    ,
    131100: (e, t, r) => {
        "use strict";
        r.r(t),
        r.d(t, {
            Input: () => l
        });
        var i = r(824246)
          , n = r(827378)
          , a = r(22538)
          , s = r(55436)
          , _ = r(445857)
          , o = r(901926)
          , c = r(560885)
          , u = r(23465);
        r(696614);
        const l = (0,
        n.forwardRef)(( (e, t) => {
            const {className: r="", isInvalid: n=!1, isDisabled: l, invalidDescription: d, invalidDescriptionPlacement: f="bottom", after: p, theme: g, ...h} = e
              , E = (0,
            s.useThemeClassName)(g);
            return (0,
            i.jsx)("div", {
                className: (0,
                a.c)("_wrapper_1jjpd_1", E, r),
                children: (0,
                i.jsxs)("div", {
                    className: (0,
                    a.c)("_input_wrapper_1jjpd_23", {
                        _invalid_description_right_1jjpd_85: "right" === f
                    }),
                    children: [(0,
                    i.jsxs)("div", {
                        className: (0,
                        a.c)("_input_container_1jjpd_28", {
                            _invalid_1jjpd_55: n,
                            _disabled_1jjpd_72: l
                        }),
                        children: [(0,
                        i.jsx)(c.BaseInput, {
                            className: (0,
                            a.c)({
                                _has_after_1jjpd_51: !!p
                            }),
                            isDisabled: l,
                            ref: t,
                            ...h
                        }), (0,
                        _.isValidRenderValue)(p) && (0,
                        i.jsx)("div", {
                            className: (0,
                            a.c)("_after_1jjpd_44"),
                            children: p
                        })]
                    }), n && !!d && (0,
                    i.jsx)(o.Text, {
                        size: "m",
                        theme: u.InputInvalidTextTheme,
                        className: (0,
                        a.c)("_invalid_description_1jjpd_81"),
                        children: d
                    })]
                })
            })
        }
        ));
        l.displayName = "Input"
    }
    ,
    23465: (e, t, r) => {
        "use strict";
        r.r(t),
        r.d(t, {
            InputDarkTheme: () => s,
            InputInvalidTextTheme: () => _,
            InputLightTheme: () => a
        });
        var i = r(799591);
        const n = {
            "--crm-ui-kit-input-disabled-color": "var(--crm-ui-kit-palette-text-primary)",
            "--crm-ui-kit-input-color": "var(--crm-ui-kit-palette-text-primary)",
            "--crm-ui-kit-input-error-color": "var(--crm-ui-kit-palette-text-primary)",
            "--crm-ui-kit-input-placeholder-color": "var(--crm-ui-kit-palette-placeholder-primary)",
            "--crm-ui-kit-input-error-placeholder-color": "var(--crm-ui-kit-palette-placeholder-primary)",
            "--crm-ui-kit-input-error-description-color": "var(--crm-ui-kit-color-error)",
            "--crm-ui-kit-input-background-color": "var(--crm-ui-kit-palette-background-primary)",
            "--crm-ui-kit-input-font-size": "var(--crm-ui-kit-base-font-size)",
            "--crm-ui-kit-input-border-width": "1px",
            "--crm-ui-kit-input-line-height": "19.42px",
            "--crm-ui-kit-input-disabled-opacity": "0.6",
            "--crm-ui-kit-input-disabled-background-color": "transparent",
            "--crm-ui-kit-input-error-placement-right-width": "250px",
            "--crm-ui-kit-input-after-min-width": "36px",
            "--crm-ui-kit-input-error-description-offset-placement-bottom": "5px",
            "--crm-ui-kit-input-error-description-offset-placement-right": "10px",
            "--crm-ui-kit-input-border-radius": "3px",
            "--crm-ui-kit-input-padding-right": "9px",
            "--crm-ui-kit-input-padding-left": "9px",
            "--crm-ui-kit-input-height": "34px",
            "--crm-ui-kit-input-width": "100%"
        }
          , a = {
            ...n,
            "--crm-ui-kit-input-border-top": "var(--crm-ui-kit-input-border-width) solid var(--crm-ui-kit-palette-border-default)",
            "--crm-ui-kit-input-border-bottom": "var(--crm-ui-kit-input-border-width) solid var(--crm-ui-kit-palette-border-default)",
            "--crm-ui-kit-input-border-left": "var(--crm-ui-kit-input-border-width) solid var(--crm-ui-kit-palette-border-default)",
            "--crm-ui-kit-input-border-right": "var(--crm-ui-kit-input-border-width) solid var(--crm-ui-kit-palette-border-default)",
            "--crm-ui-kit-input-error-border-top": "var(--crm-ui-kit-input-border-width) solid var(--crm-ui-kit-palette-border-error)",
            "--crm-ui-kit-input-error-border-bottom": "var(--crm-ui-kit-input-border-width) solid var(--crm-ui-kit-palette-border-error)",
            "--crm-ui-kit-input-error-border-left": "var(--crm-ui-kit-input-border-width) solid var(--crm-ui-kit-palette-border-error)",
            "--crm-ui-kit-input-error-border-right": "var(--crm-ui-kit-input-border-width) solid var(--crm-ui-kit-palette-border-error)",
            "--crm-ui-kit-input-disabled-border-top": "var(--crm-ui-kit-input-border-width) solid var(--crm-ui-kit-palette-border-primary)",
            "--crm-ui-kit-input-disabled-border-bottom": "var(--crm-ui-kit-input-border-width) solid var(--crm-ui-kit-palette-border-primary)",
            "--crm-ui-kit-input-disabled-border-left": "var(--crm-ui-kit-input-border-width) solid var(--crm-ui-kit-palette-border-primary)",
            "--crm-ui-kit-input-disabled-border-right": "var(--crm-ui-kit-input-border-width) solid var(--crm-ui-kit-palette-border-primary)"
        }
          , s = {
            ...n,
            "--crm-ui-kit-input-border-top": "var(--crm-ui-kit-input-border-width) solid var(--crm-ui-kit-palette-border-primary)",
            "--crm-ui-kit-input-border-bottom": "var(--crm-ui-kit-input-border-width) solid var(--crm-ui-kit-palette-border-primary)",
            "--crm-ui-kit-input-border-left": "var(--crm-ui-kit-input-border-width) solid var(--crm-ui-kit-palette-border-primary)",
            "--crm-ui-kit-input-border-right": "var(--crm-ui-kit-input-border-width) solid var(--crm-ui-kit-palette-border-primary)",
            "--crm-ui-kit-input-error-border-top": "var(--crm-ui-kit-input-border-width) solid var(--crm-ui-kit-palette-border-error)",
            "--crm-ui-kit-input-error-border-bottom": "var(--crm-ui-kit-input-border-width) solid var(--crm-ui-kit-palette-border-error)",
            "--crm-ui-kit-input-error-border-left": "var(--crm-ui-kit-input-border-width) solid var(--crm-ui-kit-palette-border-error)",
            "--crm-ui-kit-input-error-border-right": "var(--crm-ui-kit-input-border-width) solid var(--crm-ui-kit-palette-border-error)",
            "--crm-ui-kit-input-disabled-border-top": "var(--crm-ui-kit-input-border-width) solid var(--crm-ui-kit-palette-border-primary)",
            "--crm-ui-kit-input-disabled-border-bottom": "var(--crm-ui-kit-input-border-width) solid var(--crm-ui-kit-palette-border-primary)",
            "--crm-ui-kit-input-disabled-border-left": "var(--crm-ui-kit-input-border-width) solid var(--crm-ui-kit-palette-border-primary)",
            "--crm-ui-kit-input-disabled-border-right": "var(--crm-ui-kit-input-border-width) solid var(--crm-ui-kit-palette-border-primary)"
        }
          , _ = {
            ...i.TextPrimaryTheme,
            "--crm-ui-kit-text-color": "var(--crm-ui-kit-input-error-description-color)"
        }
    }
    ,
    596004: (e, t, r) => {
        "use strict";
        r.r(t),
        r.d(t, {
            Input: () => i.Input,
            InputDarkTheme: () => n.InputDarkTheme,
            InputLightTheme: () => n.InputLightTheme
        });
        var i = r(131100)
          , n = r(23465)
    }
    ,
    330728: (e, t, r) => {
        "use strict";
        r.r(t),
        r.d(t, {
            Link: () => _
        });
        var i = r(824246)
          , n = r(827378)
          , a = r(22538)
          , s = r(55436);
        r(328367);
        const _ = (0,
        n.forwardRef)(( (e, t) => {
            const {className: r="", theme: n, children: _, ...o} = e
              , c = (0,
            s.useThemeClassName)(n);
            return (0,
            i.jsx)("a", {
                ref: t,
                className: (0,
                a.c)("_link_knf7l_1", c, r),
                ...o,
                children: _
            })
        }
        ));
        _.displayName = "Link"
    }
    ,
    383247: (e, t, r) => {
        "use strict";
        r.r(t),
        r.d(t, {
            LinkPrimaryTheme: () => i
        });
        const i = {
            "--crm-ui-kit-link-color": "var(--crm-ui-kit-palette-link-primary)",
            "--crm-ui-kit-link-hover-color": "var(--crm-ui-kit-palette-link-hover-primary)",
            "--crm-ui-kit-link-text-decoration": "underline",
            "--crm-ui-kit-link-focus-visible-outline-color": "var(--crm-ui-kit-palette-focus-visible-color)",
            "--crm-ui-kit-link-focus-visible-outline-width": "var(--crm-ui-kit-palette-focus-visible-outline-width)",
            "--crm-ui-kit-link-focus-visible-outline-style": "var(--crm-ui-kit-palette-focus-visible-outline-style)",
            "--crm-ui-kit-link-focus-visible-outline-offset": "var(--crm-ui-kit-palette-focus-visible-outline-offset)",
            "--crm-ui-kit-link-focus-visible-border-radius": "var(--crm-ui-kit-palette-focus-visible-border-radius)"
        }
    }
    ,
    352467: (e, t, r) => {
        "use strict";
        r.r(t),
        r.d(t, {
            Link: () => i.Link,
            LinkPrimaryTheme: () => n.LinkPrimaryTheme
        });
        var i = r(330728)
          , n = r(383247)
    }
    ,
    815150: (e, t, r) => {
        "use strict";
        r.r(t),
        r.d(t, {
            SpinnerPrimaryTheme: () => i
        });
        const i = {
            "--crm-ui-kit-spinner-border-color": "var(--crm-ui-kit-color-bright-blue)",
            "--crm-ui-kit-spinner-border-width": "2px",
            "--crm-ui-kit-spinner-circle-size": "16px",
            "--crm-ui-kit-spinner-border-style": "solid"
        }
    }
    ,
    730860: (e, t, r) => {
        "use strict";
        r.r(t),
        r.d(t, {
            Spinner: () => i.Spinner,
            SpinnerPrimaryTheme: () => n.SpinnerPrimaryTheme
        });
        var i = r(260391)
          , n = r(815150)
    }
    ,
    445857: (e, t, r) => {
        "use strict";
        r.r(t),
        r.d(t, {
            isTouchableDevice: () => s,
            isValidRenderValue: () => _,
            mergeRefs: () => a
        });
        var i = r(827378)
          , n = r.n(i);
        function a(...e) {
            const t = e.filter(Boolean);
            return t.length <= 1 ? t[0] || null : function(e) {
                for (const r of t)
                    "function" == typeof r ? r(e) : r && (r.current = e)
            }
        }
        const s = () => "ontouchstart"in window
          , _ = e => n().isValidElement(e) || "string" == typeof e || "number" == typeof e
    }
    ,
    432467: (e, t, r) => {
        "use strict";
        r.r(t),
        r.d(t, {
            CustomScrollClassName: () => i
        }),
        r(356961);
        const i = "_custom_scroll_6bijz_1"
    }
    ,
    795440: () => {
        ( () => {
            "use strict";
            var e = {
                701: e => {
                    let t = 0;
                    e.exports = {
                        incr: () => ++t,
                        decr: () => --t,
                        curr: () => t
                    }
                }
                ,
                941: e => {
                    e.exports = (e, t, r="") => {
                        const i = /url\(['"]?#([\w:.-]+)['"]?\)/g
                          , n = /#([\w:.-]+)/g;
                        return t.match(i) && (t = t.replace(i, (function(t, r) {
                            return e[r] ? `url(#${e[r]})` : t
                        }
                        ))),
                        ["href", "xlink:href"].includes(r) && t.match(n) && (t = t.replace(n, (function(t, r) {
                            return e[r] ? `#${e[r]}` : t
                        }
                        ))),
                        t
                    }
                }
                ,
                905: e => {
                    e.exports = (e, t, r) => {
                        const i = new RegExp("([^\r\n,{}]+)(,(?=[^}]*{)|s*{)","g");
                        return e.replace(i, (function(e, i, n) {
                            if (i.match(/^\s*(@media|@.*keyframes|to|from|@font-face|1?[0-9]?[0-9])/))
                                return i + n;
                            const a = i.match(/#(\w+)/);
                            return a && r[a[1]] && (i = i.replace(a[0], `#${r[a[1]]}`)),
                            (i = i.replace(/^(\s*)/, "$1" + t + " ")) + n
                        }
                        ))
                    }
                }
                ,
                678: (e, t, r) => {
                    function i(e) {
                        return new Promise(( (t, r) => {
                            e.oncomplete = e.onsuccess = () => t(e.result),
                            e.onabort = e.onerror = () => r(e.error)
                        }
                        ))
                    }
                    function n(e, t) {
                        const r = indexedDB.open(e);
                        r.onupgradeneeded = () => r.result.createObjectStore(t);
                        const n = i(r);
                        return (e, r) => n.then((i => r(i.transaction(t, e).objectStore(t))))
                    }
                    let a;
                    function s() {
                        return a || (a = n("keyval-store", "keyval")),
                        a
                    }
                    function _(e, t=s()) {
                        return t("readonly", (t => i(t.get(e))))
                    }
                    function o(e, t, r=s()) {
                        return r("readwrite", (r => (r.put(t, e),
                        i(r.transaction))))
                    }
                    function c(e, t=s()) {
                        return t("readwrite", (t => (e.forEach((e => t.put(e[1], e[0]))),
                        i(t.transaction))))
                    }
                    function u(e, t=s()) {
                        return t("readonly", (t => Promise.all(e.map((e => i(t.get(e)))))))
                    }
                    function l(e, t, r=s()) {
                        return r("readwrite", (r => new Promise(( (n, a) => {
                            r.get(e).onsuccess = function() {
                                try {
                                    r.put(t(this.result), e),
                                    n(i(r.transaction))
                                } catch (e) {
                                    a(e)
                                }
                            }
                        }
                        ))))
                    }
                    function d(e, t=s()) {
                        return t("readwrite", (t => (t.delete(e),
                        i(t.transaction))))
                    }
                    function f(e, t=s()) {
                        return t("readwrite", (t => (e.forEach((e => t.delete(e))),
                        i(t.transaction))))
                    }
                    function p(e=s()) {
                        return e("readwrite", (e => (e.clear(),
                        i(e.transaction))))
                    }
                    function g(e, t) {
                        return e.openCursor().onsuccess = function() {
                            this.result && (t(this.result),
                            this.result.continue())
                        }
                        ,
                        i(e.transaction)
                    }
                    function h(e=s()) {
                        return e("readonly", (e => {
                            if (e.getAllKeys)
                                return i(e.getAllKeys());
                            const t = [];
                            return g(e, (e => t.push(e.key))).then(( () => t))
                        }
                        ))
                    }
                    function E(e=s()) {
                        return e("readonly", (e => {
                            if (e.getAll)
                                return i(e.getAll());
                            const t = [];
                            return g(e, (e => t.push(e.value))).then(( () => t))
                        }
                        ))
                    }
                    function b(e=s()) {
                        return e("readonly", (t => {
                            if (t.getAll && t.getAllKeys)
                                return Promise.all([i(t.getAllKeys()), i(t.getAll())]).then(( ([e,t]) => e.map(( (e, r) => [e, t[r]]))));
                            const r = [];
                            return e("readonly", (e => g(e, (e => r.push([e.key, e.value]))).then(( () => r))))
                        }
                        ))
                    }
                    r.r(t),
                    r.d(t, {
                        clear: () => p,
                        createStore: () => n,
                        del: () => d,
                        delMany: () => f,
                        entries: () => b,
                        get: () => _,
                        getMany: () => u,
                        keys: () => h,
                        promisifyRequest: () => i,
                        set: () => o,
                        setMany: () => c,
                        update: () => l,
                        values: () => E
                    })
                }
            }
              , t = {};
            function r(i) {
                var n = t[i];
                if (void 0 !== n)
                    return n.exports;
                var a = t[i] = {
                    exports: {}
                };
                return e[i](a, a.exports, r),
                a.exports
            }
            r.d = (e, t) => {
                for (var i in t)
                    r.o(t, i) && !r.o(e, i) && Object.defineProperty(e, i, {
                        enumerable: !0,
                        get: t[i]
                    })
            }
            ,
            r.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t),
            r.r = e => {
                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                    value: "Module"
                }),
                Object.defineProperty(e, "__esModule", {
                    value: !0
                })
            }
            ,
            ( () => {
                const {get: e, set: t, del: i, entries: n} = r(678)
                  , a = r(905)
                  , s = r(941)
                  , _ = r(701)
                  , o = []
                  , c = {}
                  , u = (e, t, r) => {
                    const {enableJs: i, disableUniqueIds: n, disableCssScoping: u, spriteIconId: l} = t
                      , d = !!l
                      , f = (new DOMParser).parseFromString(r, "text/html")
                      , p = d ? f.getElementById(l) : f.querySelector("svg")
                      , g = ( () => {
                        if (o.length)
                            return o;
                        for (const e in document.body)
                            e.startsWith("on") && o.push(e);
                        return o.push("onbegin", "onend", "onrepeat"),
                        o.push("onfocusin", "onfocusout", "onbounce", "onfinish", "onshow"),
                        o
                    }
                    )()
                      , h = c[e.getAttribute("data-id")] || new Set
                      , E = e.getAttribute("data-id") || `svg-loader_${_.incr()}`
                      , b = {};
                    if (n || Array.from(p.querySelectorAll("[id]")).forEach((e => {
                        const t = e.getAttribute("id")
                          , r = `${t}_${_.incr()}`;
                        e.setAttribute("id", r),
                        b[t] = r
                    }
                    )),
                    Array.from(p.querySelectorAll("*")).concat(p).forEach((t => {
                        if ("script" === t.tagName) {
                            if (t.remove(),
                            !i)
                                return;
                            {
                                const r = document.createElement("script");
                                r.appendChild(t.childNodes[0]),
                                e.appendChild(r)
                            }
                        }
                        const r = [];
                        for (let e = 0; e < t.attributes.length; e++) {
                            const {name: n, value: a} = t.attributes[e]
                              , _ = s(b, a, n);
                            a !== _ && t.setAttribute(n, _),
                            !g.includes(n.toLowerCase()) || i ? ["href", "xlink:href", "values"].includes(n) && a.startsWith("javascript") && !i && r.push(n) : r.push(n)
                        }
                        if (r.forEach((e => t.removeAttribute(e))),
                        "style" === t.tagName && !u) {
                            let e = a(t.innerHTML, `[data-id="${E}"]`, b);
                            e = s(b, e),
                            e !== t.innerHTML && (t.innerHTML = e)
                        }
                    }
                    )),
                    e.innerHTML = l ? p.outerHTML : p.innerHTML,
                    !d)
                        for (let t = 0; t < p.attributes.length; t++) {
                            const {name: r, value: i} = p.attributes[t];
                            e.getAttribute(r) && !h.has(r) || (h.add(r),
                            e.setAttribute(r, i))
                        }
                    c[E] = h,
                    e.setAttribute("data-id", E);
                    const m = new CustomEvent("iconload",{
                        bubbles: !0
                    });
                    if (e.dispatchEvent(m),
                    e.getAttribute("oniconload")) {
                        e.setAttribute("onauxclick", e.getAttribute("oniconload"));
                        const t = new CustomEvent("auxclick",{
                            bubbles: !1,
                            view: window
                        });
                        e.dispatchEvent(t),
                        e.removeAttribute("onauxclick")
                    }
                }
                  , l = {}
                  , d = {}
                  , f = async r => {
                    const n = new URL(r.getAttribute("data-src"),globalThis.location)
                      , a = n.toString().replace(n.hash, "")
                      , s = n.hash.replace("#", "")
                      , _ = r.getAttribute("data-cache")
                      , o = "enabled" === r.getAttribute("data-js")
                      , c = "disabled" === r.getAttribute("data-unique-ids")
                      , p = "disabled" === r.getAttribute("data-css-scoping")
                      , g = await (async t => {
                        let r;
                        try {
                            r = await e(`loader_${t}`)
                        } catch (e) {}
                        if (!r)
                            try {
                                r = localStorage.getItem(`loader_${t}`)
                            } catch (e) {}
                        if (r)
                            return r = JSON.parse(r),
                            Date.now() < r.expiry ? r.data : void i(`loader_${t}`)
                    }
                    )(a)
                      , h = "disabled" !== _
                      , E = u.bind(self, r, {
                        enableJs: o,
                        disableUniqueIds: c,
                        disableCssScoping: p,
                        spriteIconId: s
                    });
                    if (d[a] || h && g) {
                        const e = d[a] || g;
                        E(e)
                    } else {
                        if (l[a])
                            return void setTimeout(( () => f(r)), 20);
                        l[a] = !0,
                        fetch(a).then((e => {
                            if (!e.ok)
                                throw Error(`Request for '${a}' returned ${e.status} (${e.statusText})`);
                            return e.text()
                        }
                        )).then((e => {
                            const r = e.toLowerCase().trim();
                            if (!(r.startsWith("<svg") || r.startsWith("<?xml") || r.startsWith("<!doctype")))
                                throw Error(`Resource '${a}' returned an invalid SVG file`);
                            h && (async (e, r, i) => {
                                const n = parseInt(i, 10)
                                  , a = JSON.stringify({
                                    data: r,
                                    expiry: Date.now() + (Number.isNaN(n) ? 2592e6 : 1e3 * n)
                                });
                                try {
                                    await t(`loader_${e}`, a)
                                } catch (t) {
                                    try {
                                        localStorage.setItem(`loader_${e}`, a)
                                    } catch (e) {
                                        console.warn("Failed to set cache: ", e)
                                    }
                                }
                            }
                            )(a, e, _),
                            d[a] = e,
                            E(e)
                        }
                        )).catch((e => {
                            console.error(e)
                        }
                        )).finally(( () => {
                            delete l[a]
                        }
                        ))
                    }
                }
                ;
                let p;
                globalThis.IntersectionObserver && (p = new IntersectionObserver((e => {
                    e.forEach((e => {
                        e.isIntersecting && (f(e.target),
                        p.unobserve(e.target))
                    }
                    ))
                }
                ),{
                    rootMargin: "1200px"
                }));
                const g = [];
                function h() {
                    Array.from(document.querySelectorAll("svg[data-src]:not([data-id])")).forEach((e => {
                        -1 === g.indexOf(e) && (g.push(e),
                        "lazy" === e.getAttribute("data-loading") ? p.observe(e) : f(e))
                    }
                    ))
                }
                let E = !1;
                if (globalThis.addEventListener) {
                    const b = setInterval(( () => {
                        h()
                    }
                    ), 100);
                    function m() {
                        clearInterval(b),
                        h(),
                        E || (E = !0,
                        new MutationObserver((e => {
                            e.some((e => Array.from(e.addedNodes).some((e => e.nodeType === Node.ELEMENT_NODE && (e.getAttribute("data-src") && !e.getAttribute("data-id") || e.querySelector("svg[data-src]:not([data-id])")))))) && h(),
                            e.forEach((e => {
                                "attributes" === e.type && f(e.target)
                            }
                            ))
                        }
                        )).observe(document.documentElement, {
                            attributeFilter: ["data-src"],
                            attributes: !0,
                            childList: !0,
                            subtree: !0
                        }))
                    }
                    "interactive" === document.readyState ? m() : globalThis.addEventListener("DOMContentLoaded", ( () => {
                        m()
                    }
                    ))
                }
                globalThis.SVGLoader = {},
                globalThis.SVGLoader.destroyCache = async () => {
                    try {
                        const e = await n();
                        for (const t of e)
                            t[0].startsWith("loader_") && await i(t[0])
                    } catch (e) {}
                    Object.keys(localStorage).forEach((e => {
                        e.startsWith("loader_") && localStorage.removeItem(e)
                    }
                    ))
                }
            }
            )()
        }
        )()
    }
    ,
    356961: (e, t, r) => {
        "use strict";
        r.r(t)
    }
    ,
    208649: (e, t, r) => {
        "use strict";
        r.r(t)
    }
    ,
    696614: (e, t, r) => {
        "use strict";
        r.r(t)
    }
    ,
    328367: (e, t, r) => {
        "use strict";
        r.r(t)
    }
    ,
    67425: e => {
        "use strict";
        function t(e) {
            if ("string" != typeof e)
                throw new TypeError("Path must be a string. Received " + JSON.stringify(e))
        }
        function r(e, t) {
            for (var r, i = "", n = 0, a = -1, s = 0, _ = 0; _ <= e.length; ++_) {
                if (_ < e.length)
                    r = e.charCodeAt(_);
                else {
                    if (47 === r)
                        break;
                    r = 47
                }
                if (47 === r) {
                    if (a === _ - 1 || 1 === s)
                        ;
                    else if (a !== _ - 1 && 2 === s) {
                        if (i.length < 2 || 2 !== n || 46 !== i.charCodeAt(i.length - 1) || 46 !== i.charCodeAt(i.length - 2))
                            if (i.length > 2) {
                                var o = i.lastIndexOf("/");
                                if (o !== i.length - 1) {
                                    -1 === o ? (i = "",
                                    n = 0) : n = (i = i.slice(0, o)).length - 1 - i.lastIndexOf("/"),
                                    a = _,
                                    s = 0;
                                    continue
                                }
                            } else if (2 === i.length || 1 === i.length) {
                                i = "",
                                n = 0,
                                a = _,
                                s = 0;
                                continue
                            }
                        t && (i.length > 0 ? i += "/.." : i = "..",
                        n = 2)
                    } else
                        i.length > 0 ? i += "/" + e.slice(a + 1, _) : i = e.slice(a + 1, _),
                        n = _ - a - 1;
                    a = _,
                    s = 0
                } else
                    46 === r && -1 !== s ? ++s : s = -1
            }
            return i
        }
        var i = {
            resolve: function() {
                for (var e, i = "", n = !1, a = arguments.length - 1; a >= -1 && !n; a--) {
                    var s;
                    a >= 0 ? s = arguments[a] : (void 0 === e && (e = process.cwd()),
                    s = e),
                    t(s),
                    0 !== s.length && (i = s + "/" + i,
                    n = 47 === s.charCodeAt(0))
                }
                return i = r(i, !n),
                n ? i.length > 0 ? "/" + i : "/" : i.length > 0 ? i : "."
            },
            normalize: function(e) {
                if (t(e),
                0 === e.length)
                    return ".";
                var i = 47 === e.charCodeAt(0)
                  , n = 47 === e.charCodeAt(e.length - 1);
                return 0 !== (e = r(e, !i)).length || i || (e = "."),
                e.length > 0 && n && (e += "/"),
                i ? "/" + e : e
            },
            isAbsolute: function(e) {
                return t(e),
                e.length > 0 && 47 === e.charCodeAt(0)
            },
            join: function() {
                if (0 === arguments.length)
                    return ".";
                for (var e, r = 0; r < arguments.length; ++r) {
                    var n = arguments[r];
                    t(n),
                    n.length > 0 && (void 0 === e ? e = n : e += "/" + n)
                }
                return void 0 === e ? "." : i.normalize(e)
            },
            relative: function(e, r) {
                if (t(e),
                t(r),
                e === r)
                    return "";
                if ((e = i.resolve(e)) === (r = i.resolve(r)))
                    return "";
                for (var n = 1; n < e.length && 47 === e.charCodeAt(n); ++n)
                    ;
                for (var a = e.length, s = a - n, _ = 1; _ < r.length && 47 === r.charCodeAt(_); ++_)
                    ;
                for (var o = r.length - _, c = s < o ? s : o, u = -1, l = 0; l <= c; ++l) {
                    if (l === c) {
                        if (o > c) {
                            if (47 === r.charCodeAt(_ + l))
                                return r.slice(_ + l + 1);
                            if (0 === l)
                                return r.slice(_ + l)
                        } else
                            s > c && (47 === e.charCodeAt(n + l) ? u = l : 0 === l && (u = 0));
                        break
                    }
                    var d = e.charCodeAt(n + l);
                    if (d !== r.charCodeAt(_ + l))
                        break;
                    47 === d && (u = l)
                }
                var f = "";
                for (l = n + u + 1; l <= a; ++l)
                    l !== a && 47 !== e.charCodeAt(l) || (0 === f.length ? f += ".." : f += "/..");
                return f.length > 0 ? f + r.slice(_ + u) : (_ += u,
                47 === r.charCodeAt(_) && ++_,
                r.slice(_))
            },
            _makeLong: function(e) {
                return e
            },
            dirname: function(e) {
                if (t(e),
                0 === e.length)
                    return ".";
                for (var r = e.charCodeAt(0), i = 47 === r, n = -1, a = !0, s = e.length - 1; s >= 1; --s)
                    if (47 === (r = e.charCodeAt(s))) {
                        if (!a) {
                            n = s;
                            break
                        }
                    } else
                        a = !1;
                return -1 === n ? i ? "/" : "." : i && 1 === n ? "//" : e.slice(0, n)
            },
            basename: function(e, r) {
                if (void 0 !== r && "string" != typeof r)
                    throw new TypeError('"ext" argument must be a string');
                t(e);
                var i, n = 0, a = -1, s = !0;
                if (void 0 !== r && r.length > 0 && r.length <= e.length) {
                    if (r.length === e.length && r === e)
                        return "";
                    var _ = r.length - 1
                      , o = -1;
                    for (i = e.length - 1; i >= 0; --i) {
                        var c = e.charCodeAt(i);
                        if (47 === c) {
                            if (!s) {
                                n = i + 1;
                                break
                            }
                        } else
                            -1 === o && (s = !1,
                            o = i + 1),
                            _ >= 0 && (c === r.charCodeAt(_) ? -1 == --_ && (a = i) : (_ = -1,
                            a = o))
                    }
                    return n === a ? a = o : -1 === a && (a = e.length),
                    e.slice(n, a)
                }
                for (i = e.length - 1; i >= 0; --i)
                    if (47 === e.charCodeAt(i)) {
                        if (!s) {
                            n = i + 1;
                            break
                        }
                    } else
                        -1 === a && (s = !1,
                        a = i + 1);
                return -1 === a ? "" : e.slice(n, a)
            },
            extname: function(e) {
                t(e);
                for (var r = -1, i = 0, n = -1, a = !0, s = 0, _ = e.length - 1; _ >= 0; --_) {
                    var o = e.charCodeAt(_);
                    if (47 !== o)
                        -1 === n && (a = !1,
                        n = _ + 1),
                        46 === o ? -1 === r ? r = _ : 1 !== s && (s = 1) : -1 !== r && (s = -1);
                    else if (!a) {
                        i = _ + 1;
                        break
                    }
                }
                return -1 === r || -1 === n || 0 === s || 1 === s && r === n - 1 && r === i + 1 ? "" : e.slice(r, n)
            },
            format: function(e) {
                if (null === e || "object" != typeof e)
                    throw new TypeError('The "pathObject" argument must be of type Object. Received type ' + typeof e);
                return function(e, t) {
                    var r = t.dir || t.root
                      , i = t.base || (t.name || "") + (t.ext || "");
                    return r ? r === t.root ? r + i : r + "/" + i : i
                }(0, e)
            },
            parse: function(e) {
                t(e);
                var r = {
                    root: "",
                    dir: "",
                    base: "",
                    ext: "",
                    name: ""
                };
                if (0 === e.length)
                    return r;
                var i, n = e.charCodeAt(0), a = 47 === n;
                a ? (r.root = "/",
                i = 1) : i = 0;
                for (var s = -1, _ = 0, o = -1, c = !0, u = e.length - 1, l = 0; u >= i; --u)
                    if (47 !== (n = e.charCodeAt(u)))
                        -1 === o && (c = !1,
                        o = u + 1),
                        46 === n ? -1 === s ? s = u : 1 !== l && (l = 1) : -1 !== s && (l = -1);
                    else if (!c) {
                        _ = u + 1;
                        break
                    }
                return -1 === s || -1 === o || 0 === l || 1 === l && s === o - 1 && s === _ + 1 ? -1 !== o && (r.base = r.name = 0 === _ && a ? e.slice(1, o) : e.slice(_, o)) : (0 === _ && a ? (r.name = e.slice(1, s),
                r.base = e.slice(1, o)) : (r.name = e.slice(_, s),
                r.base = e.slice(_, o)),
                r.ext = e.slice(s, o)),
                _ > 0 ? r.dir = e.slice(0, _ - 1) : a && (r.dir = "/"),
                r
            },
            sep: "/",
            delimiter: ":",
            win32: null,
            posix: null
        };
        i.posix = i,
        e.exports = i
    }
    ,
    208928: (e, t, r) => {
        "use strict";
        r.r(t),
        r.d(t, {
            getCallingStatus: () => l,
            runMerge: () => f,
            setCallingStatus: () => u,
            showUserStatus: () => d
        });
        var i = r(55188)
          , n = r.n(i)
          , a = r(579569);
        function s(e, t, r, i, n, a, s) {
            try {
                var _ = e[a](s)
                  , o = _.value
            } catch (e) {
                return void r(e)
            }
            _.done ? t(o) : Promise.resolve(o).then(i, n)
        }
        var _, o, c = !1, u = function(e) {
            return "calling_status - " + (c = e)
        }, l = function() {
            return c
        }, d = function(e) {
            var t = {}
              , r = (0,
            a.get)();
            switch (!0) {
            case "online" === e:
                t = [],
                n().each(r, (function(e) {
                    !0 === e.online && t.push(e.id)
                }
                ));
                break;
            case !n().isNaN(parseInt(e)) && !n().isUndefined((0,
            a.get)(e)):
                t = (0,
                a.get)(e).online || !1;
                break;
            default:
                n().each(r, (function(e, r) {
                    t[r] = {},
                    t[r].id = e.id,
                    t[r].online = e.online || !1
                }
                ))
            }
            return t
        }, f = (_ = function(e) {
            return function(e, t) {
                var r, i, n, a, s = {
                    label: 0,
                    sent: function() {
                        if (1 & n[0])
                            throw n[1];
                        return n[1]
                    },
                    trys: [],
                    ops: []
                };
                return a = {
                    next: _(0),
                    throw: _(1),
                    return: _(2)
                },
                "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                    return this
                }
                ),
                a;
                function _(a) {
                    return function(_) {
                        return function(a) {
                            if (r)
                                throw new TypeError("Generator is already executing.");
                            for (; s; )
                                try {
                                    if (r = 1,
                                    i && (n = 2 & a[0] ? i.return : a[0] ? i.throw || ((n = i.return) && n.call(i),
                                    0) : i.next) && !(n = n.call(i, a[1])).done)
                                        return n;
                                    switch (i = 0,
                                    n && (a = [2 & a[0], n.value]),
                                    a[0]) {
                                    case 0:
                                    case 1:
                                        n = a;
                                        break;
                                    case 4:
                                        return s.label++,
                                        {
                                            value: a[1],
                                            done: !1
                                        };
                                    case 5:
                                        s.label++,
                                        i = a[1],
                                        a = [0];
                                        continue;
                                    case 7:
                                        a = s.ops.pop(),
                                        s.trys.pop();
                                        continue;
                                    default:
                                        if (!((n = (n = s.trys).length > 0 && n[n.length - 1]) || 6 !== a[0] && 2 !== a[0])) {
                                            s = 0;
                                            continue
                                        }
                                        if (3 === a[0] && (!n || a[1] > n[0] && a[1] < n[3])) {
                                            s.label = a[1];
                                            break
                                        }
                                        if (6 === a[0] && s.label < n[1]) {
                                            s.label = n[1],
                                            n = a;
                                            break
                                        }
                                        if (n && s.label < n[2]) {
                                            s.label = n[2],
                                            s.ops.push(a);
                                            break
                                        }
                                        n[2] && s.ops.pop(),
                                        s.trys.pop();
                                        continue
                                    }
                                    a = t.call(e, s)
                                } catch (e) {
                                    a = [6, e],
                                    i = 0
                                } finally {
                                    r = n = 0
                                }
                            if (5 & a[0])
                                throw a[1];
                            return {
                                value: a[0] ? a[1] : void 0,
                                done: !0
                            }
                        }([a, _])
                    }
                }
            }(this, (function(t) {
                switch (t.label) {
                case 0:
                    return [4, Promise.all([r.e(68592), r.e(11347), r.e(75822)]).then(r.bind(r, 511347))];
                case 1:
                    return [2, new (0,
                    t.sent().default)(e)]
                }
            }
            ))
        }
        ,
        o = function() {
            var e = this
              , t = arguments;
            return new Promise((function(r, i) {
                var n = _.apply(e, t);
                function a(e) {
                    s(n, r, i, a, o, "next", e)
                }
                function o(e) {
                    s(n, r, i, a, o, "throw", e)
                }
                a(void 0)
            }
            ))
        }
        ,
        function(e) {
            return o.apply(this, arguments)
        }
        ), p = "../build/transpiled/sdk/index";
        window.define(p, (function() {
            var e = "undefined"
              , r = typeof t === e ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === e ? typeof module === e ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : t;
            return r && r.default || r
        }
        )),
        window.require([p])
    }
    ,
    133178: (e, t, r) => {
        "use strict";
        r.r(t),
        r.d(t, {
            IndexedDBCache: () => u
        });
        var i = r(55188)
          , n = r.n(i);
        function a(e, t, r, i, n, a, s) {
            try {
                var _ = e[a](s)
                  , o = _.value
            } catch (e) {
                return void r(e)
            }
            _.done ? t(o) : Promise.resolve(o).then(i, n)
        }
        function s(e) {
            return function() {
                var t = this
                  , r = arguments;
                return new Promise((function(i, n) {
                    var s = e.apply(t, r);
                    function _(e) {
                        a(s, i, n, _, o, "next", e)
                    }
                    function o(e) {
                        a(s, i, n, _, o, "throw", e)
                    }
                    _(void 0)
                }
                ))
            }
        }
        function _(e, t) {
            for (var r = 0; r < t.length; r++) {
                var i = t[r];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(e, i.key, i)
            }
        }
        function o(e, t, r) {
            return t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r,
            e
        }
        function c(e, t) {
            var r, i, n, a, s = {
                label: 0,
                sent: function() {
                    if (1 & n[0])
                        throw n[1];
                    return n[1]
                },
                trys: [],
                ops: []
            };
            return a = {
                next: _(0),
                throw: _(1),
                return: _(2)
            },
            "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                return this
            }
            ),
            a;
            function _(a) {
                return function(_) {
                    return function(a) {
                        if (r)
                            throw new TypeError("Generator is already executing.");
                        for (; s; )
                            try {
                                if (r = 1,
                                i && (n = 2 & a[0] ? i.return : a[0] ? i.throw || ((n = i.return) && n.call(i),
                                0) : i.next) && !(n = n.call(i, a[1])).done)
                                    return n;
                                switch (i = 0,
                                n && (a = [2 & a[0], n.value]),
                                a[0]) {
                                case 0:
                                case 1:
                                    n = a;
                                    break;
                                case 4:
                                    return s.label++,
                                    {
                                        value: a[1],
                                        done: !1
                                    };
                                case 5:
                                    s.label++,
                                    i = a[1],
                                    a = [0];
                                    continue;
                                case 7:
                                    a = s.ops.pop(),
                                    s.trys.pop();
                                    continue;
                                default:
                                    if (!((n = (n = s.trys).length > 0 && n[n.length - 1]) || 6 !== a[0] && 2 !== a[0])) {
                                        s = 0;
                                        continue
                                    }
                                    if (3 === a[0] && (!n || a[1] > n[0] && a[1] < n[3])) {
                                        s.label = a[1];
                                        break
                                    }
                                    if (6 === a[0] && s.label < n[1]) {
                                        s.label = n[1],
                                        n = a;
                                        break
                                    }
                                    if (n && s.label < n[2]) {
                                        s.label = n[2],
                                        s.ops.push(a);
                                        break
                                    }
                                    n[2] && s.ops.pop(),
                                    s.trys.pop();
                                    continue
                                }
                                a = t.call(e, s)
                            } catch (e) {
                                a = [6, e],
                                i = 0
                            } finally {
                                r = n = 0
                            }
                        if (5 & a[0])
                            throw a[1];
                        return {
                            value: a[0] ? a[1] : void 0,
                            done: !0
                        }
                    }([a, _])
                }
            }
        }
        var u = function() {
            function e(t) {
                !function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, e),
                this.current_store = t,
                this.db_name = "store_cache",
                this.stores = {
                    dashboardWidgets: "dashboard_widgets",
                    integrationWidgets: "integration_widgets",
                    richLinks: "rich_links",
                    emoji: "emoji"
                },
                this.store_names = Object.values(this.stores),
                this.db_version = 4,
                this.stores_max_size = o({}, this.stores.richLinks, 1e3),
                this.stores_records_ttl = o({}, this.stores.richLinks, 6048e5),
                this.is_idb = Boolean(window.indexedDB),
                this.cache = {},
                this._save = n().bind(this._save, this),
                this.load = n().bind(this.load, this),
                this.remove = n().bind(this._remove, this),
                this.set = n().bind(this.set, this)
            }
            var t, r;
            return t = e,
            r = [{
                key: "createDbRequest",
                value: function() {
                    return indexedDB.open(this.db_name, this.db_version)
                }
            }, {
                key: "_save",
                value: function(e) {
                    var t = this
                      , r = {}
                      , i = function(e) {
                        return {
                            val: e.val,
                            exp: e.exp,
                            time: Date.now()
                        }
                    };
                    return new Promise((function(a, s) {
                        if (t.is_idb) {
                            var _ = t.createDbRequest();
                            _.onerror = function(e) {
                                s(new Error(e.target.errorCode))
                            }
                            ,
                            _.onupgradeneeded = function(e) {
                                var r = e.target.result;
                                n().map(t.store_names, (function(e) {
                                    r.objectStoreNames.contains(e) || r.createObjectStore(e)
                                }
                                ))
                            }
                            ,
                            _.onsuccess = function(_) {
                                try {
                                    var o = _.target.result.transaction([t.current_store], "readwrite")
                                      , c = o.objectStore(t.current_store);
                                    n().forEach(e, (function(e) {
                                        var t = e.key
                                          , n = i(e)
                                          , a = c.put(n, t);
                                        a.onerror = function(e) {
                                            s(Error(e.target.errorCode))
                                        }
                                        ,
                                        a.onsuccess = function() {
                                            r[t] = n
                                        }
                                    }
                                    )),
                                    o.oncomplete = function() {
                                        n().forEach(r, (function(e, r) {
                                            t.cache[r] = e
                                        }
                                        )),
                                        t._clearOverflowItems().then(),
                                        a(r)
                                    }
                                } catch (e) {
                                    s(e)
                                }
                            }
                        } else
                            n().forEach(e, (function(e) {
                                var n = i(e);
                                t.cache[e.key] = n,
                                r[e.key] = n
                            }
                            )),
                            a(r)
                    }
                    ))
                }
            }, {
                key: "load",
                value: function() {
                    var e = this;
                    return s((function() {
                        var t;
                        return c(this, (function(r) {
                            switch (r.label) {
                            case 0:
                                return t = e,
                                n().isEmpty(e.cache) ? [4, new Promise((function(r, i) {
                                    var a, _ = e.createDbRequest();
                                    _.onerror = function(n) {
                                        if ("VersionError" === n.currentTarget.error.name) {
                                            var a = indexedDB.deleteDatabase(e.db_name);
                                            return a.onsuccess = s((function() {
                                                var e;
                                                return c(this, (function(n) {
                                                    switch (n.label) {
                                                    case 0:
                                                        return n.trys.push([0, 2, , 3]),
                                                        [4, t.load()];
                                                    case 1:
                                                        return n.sent(),
                                                        r(t.cache),
                                                        [3, 3];
                                                    case 2:
                                                        return e = n.sent(),
                                                        i(e),
                                                        [3, 3];
                                                    case 3:
                                                        return [2]
                                                    }
                                                }
                                                ))
                                            }
                                            )),
                                            void (a.onerror = function(e) {
                                                t.is_idb = !1,
                                                i(new Error(e.target.errorCode))
                                            }
                                            )
                                        }
                                        t.is_idb = !1,
                                        i(new Error(n.target.errorCode))
                                    }
                                    ,
                                    _.onupgradeneeded = (a = s((function(r) {
                                        var a, s;
                                        return c(this, (function(_) {
                                            switch (_.label) {
                                            case 0:
                                                a = r.target.result,
                                                n().map(e.store_names, (function(e) {
                                                    n().contains(a.objectStoreNames, e) || a.createObjectStore(e)
                                                }
                                                )),
                                                n().map(a.objectStoreNames, (function(e) {
                                                    n().contains(t.store_names, e) || a.deleteObjectStore(e)
                                                }
                                                )),
                                                _.label = 1;
                                            case 1:
                                                return _.trys.push([1, 3, , 4]),
                                                [4, e.load()];
                                            case 2:
                                                return [2, _.sent()];
                                            case 3:
                                                return s = _.sent(),
                                                i(s),
                                                [3, 4];
                                            case 4:
                                                return [2]
                                            }
                                        }
                                        ))
                                    }
                                    )),
                                    function(e) {
                                        return a.apply(this, arguments)
                                    }
                                    ),
                                    _.onsuccess = function(t) {
                                        try {
                                            var n = t.target.result.transaction([e.current_store], "readonly").objectStore(e.current_store).openCursor()
                                              , a = {};
                                            n.onerror = function(e) {
                                                i(new Error(e.target.errorCode))
                                            }
                                            ,
                                            n.onsuccess = function() {
                                                var e = n.result;
                                                if (!e)
                                                    return r(a);
                                                var t = e.key
                                                  , i = e.value;
                                                a[t] = i,
                                                e.continue()
                                            }
                                        } catch (e) {
                                            i(e)
                                        }
                                    }
                                }
                                ))] : [2, e.cache];
                            case 1:
                                return e.cache = r.sent(),
                                [2, e.cache]
                            }
                        }
                        ))
                    }
                    ))()
                }
            }, {
                key: "get",
                value: function(e) {
                    var t = this.cache[e]
                      , r = this.stores_records_ttl[this.current_store];
                    return !!t && !(r && Date.now() - t.time > r) && t.val
                }
            }, {
                key: "get_created_at",
                value: function(e) {
                    return !!this.cache[e] && this.cache[e].time
                }
            }, {
                key: "set",
                value: function(e) {
                    var t = Array.isArray(e) ? e : [e];
                    return this._save(t).catch((function(e) {
                        return Error(e)
                    }
                    ))
                }
            }, {
                key: "clearObjectStore",
                value: function() {
                    var e = this;
                    return s((function() {
                        return c(this, (function(t) {
                            return [2, new Promise((function(t, r) {
                                if (e.is_idb) {
                                    var i = e.createDbRequest();
                                    i.onerror = function(e) {
                                        r(new Error(e.target.errorCode))
                                    }
                                    ,
                                    i.onsuccess = function(i) {
                                        try {
                                            var n = i.target.result.transaction([e.current_store], "readwrite")
                                              , a = n.objectStore(e.current_store);
                                            e.cache = {},
                                            a.clear(),
                                            t(n.complete)
                                        } catch (e) {
                                            r(e)
                                        }
                                    }
                                } else
                                    e.cache = {},
                                    Promise.resolve()
                            }
                            ))]
                        }
                        ))
                    }
                    ))()
                }
            }, {
                key: "_clearOverflowItems",
                value: function() {
                    var e = this;
                    return new Promise((function(t, r) {
                        var i = e.stores_max_size[e.current_store]
                          , n = Object.keys(e.cache);
                        (!i || i >= n.length) && t();
                        var a = n.slice(0, n.length - i);
                        e._remove(a).then(t).catch(r)
                    }
                    ))
                }
            }, {
                key: "_remove",
                value: function(e) {
                    var t = this
                      , r = Array.isArray(e) ? e : [e];
                    return new Promise((function(e, i) {
                        if (t.is_idb) {
                            var a = t.createDbRequest();
                            a.onerror = function(e) {
                                i(new Error(e.target.errorCode))
                            }
                            ,
                            a.onsuccess = function(i) {
                                var a = i.target.result.transaction([t.current_store], "readwrite")
                                  , s = a.objectStore(t.current_store);
                                n().forEach(r, (function(e) {
                                    s.delete(e)
                                }
                                )),
                                a.oncomplete = function() {
                                    n().forEach(r, (function(e) {
                                        delete t.cache[e]
                                    }
                                    )),
                                    e()
                                }
                            }
                        } else
                            n().forEach(r, (function(e) {
                                delete t.cache[e]
                            }
                            )),
                            e()
                    }
                    ))
                }
            }, {
                key: "reloadIndexedDB",
                value: function() {
                    this.is_idb && (indexedDB.deleteDatabase(this.db_name),
                    this.load())
                }
            }],
            r && _(t.prototype, r),
            e
        }()
          , l = "../build/transpiled/utils/indexeddb_cache";
        window.define(l, (function() {
            var e = "undefined"
              , r = typeof t === e ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === e ? typeof module === e ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : t;
            return r && r.default || r
        }
        )),
        window.require([l])
    }
    ,
    174079: (e, t, r) => {
        "use strict";
        r.r(t),
        r.d(t, {
            default: () => i
        });
        const i = {
            areas: ["leads.pipeline", "leads.list", "customers.pipeline", "customers.list", "catalogs.list", "todo.calendar", "todo.list", "settings.widgets", "widget.advanced_settings", "widget.advanced_stats", "widget.widget_page", "companies.list", "contacts.list", "leads.card", "contacts.card", "companies.card", "customers.card", "stats.winlose", "stats.consolidate", "stats.activity", "stats.goals", "stats.events", "stats.calls", "stats.customers", "settings.users", "settings.general", "dp.settings", "dp.chats", "catalogs.sdk"],
            locations: {
                everywhere: 0,
                "leads.list": 1,
                "leads.pipeline": 2,
                "leads.card": 3,
                "companies.card": 4,
                "companies.list": 5,
                "contacts.card": 6,
                "contacts.list": 7,
                "customers.card": 8,
                "customers.list": 9,
                "customers.pipeline": 10,
                "settings.widgets": 11,
                "settings.general": 12,
                "settings.users": 13,
                "stats.winlose": 14,
                "stats.consolidate": 15,
                "stats.activity": 17,
                "stats.events": 17,
                "stats.calls": 18,
                "stats.goals": 19,
                "todo.calendar": 20,
                "todo.list": 21,
                "catalogs.list": 22,
                "catalogs.sdk": 23,
                "dp.chats": 24,
                "dp.settings": 25
            },
            field_types: {
                text: 1,
                password: 2,
                users: 3,
                users_lp: 4,
                hidden: 5
            }
        };
        var n = "../build/transpiled/widgets/constants";
        window.define(n, (function() {
            var e = "undefined"
              , r = typeof t === e ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === e ? typeof module === e ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : t;
            return r && r.default || r
        }
        )),
        window.require([n])
    }
    ,
    389376: (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
            clearWidgetsBlock: () => clearWidgetsBlock,
            default: () => __WEBPACK_DEFAULT_EXPORT__
        });
        var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(661533), jquery__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__), underscore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(55188), underscore__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(underscore__WEBPACK_IMPORTED_MODULE_1__), store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(629821), store__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(store__WEBPACK_IMPORTED_MODULE_2__), lib_common_cookie__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(988050), lib_utils_generator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(315702), lib_utils_tester__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(678640), lib_utils_account_rights__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(237262), lib_utils_account_users__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(579569), _shared_lib_regexp__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(577486), lib_components_widgets_block_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(597792), lib_widgets_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(174079), lib_interface_card_linked_constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(513934), lib_utils_indexeddb_cache__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(133178), lib_network_lead_sources_chat_sources_collection__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(99453), lib_network_lead_sources_write_first_lead_sources_collection__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(962438), lib_interface_operday_utils__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(144966), _initialize_queue_manager__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(258491), returnTrueFn = function() {
            return !0
        }, fakeWidgetOnError = function(e) {
            APP.widgets.list[e] || "widgetsSettings" !== APP.getBaseEntity() || (APP.widgets.list[e] = {
                render: returnTrueFn,
                bind_actions: returnTrueFn,
                init: returnTrueFn,
                settings: returnTrueFn,
                onSave: returnTrueFn
            })
        }, widgets_cache_lifetime = 18e5, nav_ns, RIGHT_PANEL_WIDGETS = [], indexeddb_cache = new lib_utils_indexeddb_cache__WEBPACK_IMPORTED_MODULE_11__.IndexedDBCache("integration_widgets"), widgets;
        __webpack_require__(333193),
        __webpack_require__(105244),
        __webpack_require__(150293),
        APP.widgets = APP.widgets || {},
        APP.widgets.list = APP.widgets.list || {},
        APP.widgets.areas = APP.constant("widgets_areas"),
        APP.widgets.system = APP.widgets.system || {},
        APP.widgets.system.displayed_count_by_area = APP.constant("displayed_count_by_area") || {},
        APP.widgets.cf_actions = APP.widgets.cf_actions || {},
        APP.widgets.loaded = !1,
        APP.widgets.current = APP.widgets.current || {},
        APP.widgets.registerToRightPanel = function(e) {
            return RIGHT_PANEL_WIDGETS.push(e),
            underscore__WEBPACK_IMPORTED_MODULE_1___default().sortBy(RIGHT_PANEL_WIDGETS.slice())
        }
        ,
        APP.widgets.clear_cache = function() {
            underscore__WEBPACK_IMPORTED_MODULE_1___default().each(lib_widgets_constants__WEBPACK_IMPORTED_MODULE_9__.default.areas, (function(e) {
                e = "widgets_".concat(e),
                underscore__WEBPACK_IMPORTED_MODULE_1___default().contains(["widgets_widget.widget_page", "widgets_widget.advanced_settings"], e) && underscore__WEBPACK_IMPORTED_MODULE_1___default().each(Object.keys(localStorage), (function(t) {
                    new _shared_lib_regexp__WEBPACK_IMPORTED_MODULE_7__.UnsafeRegExp("".concat(e, ":(.*)")).test(t) && store__WEBPACK_IMPORTED_MODULE_2___default().get(t) && store__WEBPACK_IMPORTED_MODULE_2___default().remove(t)
                }
                )),
                store__WEBPACK_IMPORTED_MODULE_2___default().get(e) && store__WEBPACK_IMPORTED_MODULE_2___default().remove(e)
            }
            )),
            indexeddb_cache.clearObjectStore(),
            lib_network_lead_sources_write_first_lead_sources_collection__WEBPACK_IMPORTED_MODULE_13__.WriteFirstLeadSourcesCollection.clearAllCache(),
            lib_network_lead_sources_chat_sources_collection__WEBPACK_IMPORTED_MODULE_12__.ChatSourcesCollection.clearAllCache(),
            lib_utils_generator__WEBPACK_IMPORTED_MODULE_3__.storeWithExpiration.remove(lib_interface_card_linked_constants__WEBPACK_IMPORTED_MODULE_10__.default.getCacheCode())
        }
        ;
        var Widgets = function() {
            var e = (0,
            lib_utils_account_rights__WEBPACK_IMPORTED_MODULE_5__.isAdmin)()
              , t = (0,
            lib_utils_account_rights__WEBPACK_IMPORTED_MODULE_5__.getRights)("is_free_user") || (APP.constant("support_auth_button") || e) && APP.constant("widgets_off") || e && APP.constant("safe_mode");
            this.destroyAll().done(underscore__WEBPACK_IMPORTED_MODULE_1___default().bind((function() {
                var e = APP.getWidgetsArea() || !1;
                t || (jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).off("widget:installed").off("widget:removed"),
                this.get_scripts(e, underscore__WEBPACK_IMPORTED_MODULE_1___default().bind(this.initialize, this)))
            }
            ), this))
        };
        function _getData(e, t, r, i) {
            var n, a = {}, s = this.getWidgetsCacheId(e);
            switch (t) {
            case "widget.advanced_settings":
            case "widget.advanced_stats":
            case "widget.widget_page":
                n = "widgets_widget.".concat(e.replace("-", "_"));
                break;
            default:
                n = "widgets_".concat(t)
            }
            indexeddb_cache.load().catch((function() {}
            )).then((function() {
                var _ = indexeddb_cache.get(n);
                underscore__WEBPACK_IMPORTED_MODULE_1___default().has(_, "cache_id") && underscore__WEBPACK_IMPORTED_MODULE_1___default().isEqual(_.cache_id, s) || (APP.widgets.clear_cache(),
                _ = null),
                _ ? i(underscore__WEBPACK_IMPORTED_MODULE_1___default().omit(_, "cache_id")) : store__WEBPACK_IMPORTED_MODULE_2___default().get(n) ? (_ = store__WEBPACK_IMPORTED_MODULE_2___default().get(n),
                indexeddb_cache.set({
                    key: n,
                    val: _.val,
                    exp: widgets_cache_lifetime
                }),
                i(underscore__WEBPACK_IMPORTED_MODULE_1___default().omit(_, "cache_id")),
                store__WEBPACK_IMPORTED_MODULE_2___default().remove(n)) : jquery__WEBPACK_IMPORTED_MODULE_0___default().ajax({
                    url: "/ajax/widgets/list",
                    method: "POST",
                    dataType: "json",
                    data: {
                        area: "widget.widget_page" === t ? "widget-page" : e
                    }
                }).then((function(e) {
                    a = r(e)
                }
                )).then(underscore__WEBPACK_IMPORTED_MODULE_1___default().bind((function() {
                    a.cache_id = s,
                    indexeddb_cache.set({
                        key: n,
                        val: a,
                        exp: widgets_cache_lifetime
                    }),
                    i(underscore__WEBPACK_IMPORTED_MODULE_1___default().omit(a, "cache_id"))
                }
                ), this))
            }
            ))
        }
        function initInSpecificArea(e, t, r, i) {
            var n = this
              , a = jquery__WEBPACK_IMPORTED_MODULE_0___default().Deferred();
            return e = underscore__WEBPACK_IMPORTED_MODULE_1___default().compact([e, t]).join(":"),
            i || (i = {}),
            _getData.call(this, e, e, (function(e) {
                var r = {};
                return t ? r[t] = e.widgets[t] : r = e.widgets,
                r
            }
            ), (function(e) {
                var t = underscore__WEBPACK_IMPORTED_MODULE_1___default().keys(e);
                if (underscore__WEBPACK_IMPORTED_MODULE_1___default().isEmpty(e))
                    return a.reject();
                var s = []
                  , _ = []
                  , o = {
                    disable_repeated_render: i.disable_repeated_render,
                    disable_repeated_advanced_settings: i.disable_repeated_advanced_settings,
                    disable_repeated_menu_page_init: i.disable_repeated_menu_page_init
                };
                n.initialize(e, (function(e, r) {
                    if (s.push(r),
                    e && _.push(r),
                    _.length === t.length)
                        return a.reject();
                    s.length === t.length && a.resolve(underscore__WEBPACK_IMPORTED_MODULE_1___default().pick(APP.widgets.list, s))
                }
                ), r, o)
            }
            )),
            a.promise()
        }
        APP.widgets.notificationsPhone = function(e) {
            var t = jquery__WEBPACK_IMPORTED_MODULE_0___default()("#left_menu .nav__notifications");
            (e = e || {}).click && e.ns && (t.find(".calls-list-toggler").length || (jquery__WEBPACK_IMPORTED_MODULE_0___default()("#left_menu .nav__notifications").append('<div class="calls-list-toggler"><div class="calls-list-toggler__wrapper"></div><div class="calls-list-toggler__icon"><span class="nav__notifications__counter nav__notifications-call-list__counter js-notifications_call_list_counter" style="display:none;">0</span></div></div>').prepareTransition().addClass("nav__notifications-call-list"),
            t.addClass("calls-list-active")),
            nav_ns && jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).off(nav_ns),
            jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on("click".concat(e.ns), ".calls-list-toggler__wrapper, .calls-list-toggler__icon", (function(t) {
                e.click.call(this),
                t.stopPropagation()
            }
            )),
            nav_ns = e.ns)
        }
        ,
        APP.widgets.destroyNotificationsPhone = function(e) {
            var t = jquery__WEBPACK_IMPORTED_MODULE_0___default()("#left_menu .nav__notifications");
            t.find(".calls-list-toggler").length && (t.prepareTransition().removeClass("nav__notifications-call-list").find(".calls-list-toggler").remove(),
            jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).off("click".concat(e.ns)),
            t.removeClass("calls-list-active")),
            nav_ns && jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).off(nav_ns)
        }
        ,
        Widgets.prototype.init_by_click = function(e, t) {
            var r = APP.getWidgetsArea()
              , i = jquery__WEBPACK_IMPORTED_MODULE_0___default().Deferred();
            return this.get_data(r, underscore__WEBPACK_IMPORTED_MODULE_1___default().bind((function(r) {
                var n = r.widgets[e]
                  , a = {};
                a[e] = n,
                n ? this.initialize(a, (function(t) {
                    if (t)
                        return "initialize_request_is_already_in_progress" === t.code ? APP.widgets.list[e] ? void i.resolve() : void _initialize_queue_manager__WEBPACK_IMPORTED_MODULE_15__.default.onSuccessFinish({
                            queue_request: {
                                identifier: e
                            },
                            callback: function() {
                                i.resolve()
                            }
                        }) : i.reject();
                    i.resolve()
                }
                ), t) : i.reject()
            }
            ), this)),
            i.promise()
        }
        ,
        Widgets.prototype.initialize = function(scripts, callback, status, options) {
            var self = this
              , scr_length = underscore__WEBPACK_IMPORTED_MODULE_1___default().keys(scripts).length
              , initialize_requests = {}
              , counter = 0;
            if (this._destroyed || window.location.pathname.indexOf("/settings/pay") > -1)
                return !1;
            options || (options = {}),
            this.__scripts = scripts,
            "object" == typeof scripts && (scr_length && (underscore__WEBPACK_IMPORTED_MODULE_1___default().each(scripts, (function(e, t) {
                var r = {
                    identifier: t
                };
                initialize_requests[t] = r;
                try {
                    _initialize_queue_manager__WEBPACK_IMPORTED_MODULE_15__.default.add(r)
                } catch (e) {
                    callback({
                        error: "initialize request is not actual anymore",
                        code: "initialize_request_is_already_in_progress"
                    }, t),
                    (0,
                    lib_utils_tester__WEBPACK_IMPORTED_MODULE_4__.isDev)() && console.error(e)
                }
            }
            )),
            __webpack_require__.e(26841).then(__webpack_require__.bind(__webpack_require__, 626841)).then((function(e) {
                var t = e.default;
                underscore__WEBPACK_IMPORTED_MODULE_1___default().each(scripts, (function(e, r) {
                    var i = e.settings || {}
                      , n = e.installed_version || "0"
                      , a = initialize_requests[r]
                      , s = [];
                    if ("operday" === r && APP.data.current_card && !APP.data.current_card.new_card)
                        return (0,
                        lib_interface_operday_utils__WEBPACK_IMPORTED_MODULE_14__.renderTimer)(),
                        ++counter === scr_length && (APP.widgets.loaded = !0,
                        jquery__WEBPACK_IMPORTED_MODULE_0___default()("#list_table").trigger("list:checkbox")),
                        void (underscore__WEBPACK_IMPORTED_MODULE_1___default().isFunction(callback) && callback(null, r));
                    if (!e.src)
                        return underscore__WEBPACK_IMPORTED_MODULE_1___default().isFunction(callback) && callback({
                            error: "wrong widget params (no src)"
                        }, r),
                        void _initialize_queue_manager__WEBPACK_IMPORTED_MODULE_15__.default.finish({
                            queue_request: a,
                            is_success_finish: !1
                        });
                    if (APP.widgets.list[r]) {
                        if (!_initialize_queue_manager__WEBPACK_IMPORTED_MODULE_15__.default.isQueueRequestActual(a))
                            return void (underscore__WEBPACK_IMPORTED_MODULE_1___default().isFunction(callback) && callback({
                                error: "initialize request is not actual anymore",
                                code: "initialize_request_is_already_in_progress"
                            }, r));
                        _initialize_queue_manager__WEBPACK_IMPORTED_MODULE_15__.default.finish({
                            queue_request: a
                        }),
                        options.disable_repeated_render || APP.widgets.list[r].callbacks.render(),
                        underscore__WEBPACK_IMPORTED_MODULE_1___default().isFunction(callback) && callback(null, r),
                        !options.disable_repeated_advanced_settings && underscore__WEBPACK_IMPORTED_MODULE_1___default().isFunction(APP.widgets.list[r].callbacks.advancedSettings) && "widget.advanced_settings" === APP.getV3WidgetsArea() && APP.widgets.list[r].callbacks.advancedSettings(),
                        underscore__WEBPACK_IMPORTED_MODULE_1___default().isFunction(APP.widgets.list[r].callbacks.advancedStats) && "widget.advanced_stats" === APP.getV3WidgetsArea() && APP.widgets.list[r].callbacks.advancedStats(),
                        !options.disable_repeated_menu_page_init && underscore__WEBPACK_IMPORTED_MODULE_1___default().isFunction(APP.widgets.list[r].callbacks.initMenuPage) && "widget.widget_page" === APP.getV3WidgetsArea() && APP.widgets.list[r].callbacks.initMenuPage(Widgets.prototype.getInitParamsMenu())
                    } else
                        s.push("optional!".concat(e.src, "?v=").concat(n)),
                        e.lang && s.push("json!".concat(e.lang, "?v=").concat(n)),
                        s.push("".concat(APP.static_domain, "/frontend/build/templates.js?").concat(APP.constant("version"))),
                        window.require(s, (function() {
                            for (var s = arguments.length, _ = new Array(s), o = 0; o < s; o++)
                                _[o] = arguments[o];
                            var c, u, l, d = _[0], f = _[1] || {};
                            if (_initialize_queue_manager__WEBPACK_IMPORTED_MODULE_15__.default.isQueueRequestActual(a))
                                try {
                                    underscore__WEBPACK_IMPORTED_MODULE_1___default().isFunction(d) && ((new t).extend(d),
                                    APP.widgets.list[r] = new d,
                                    c = jquery__WEBPACK_IMPORTED_MODULE_0___default().extend(APP.widgets.list[r], {
                                        ns: ".widget:".concat(r),
                                        init_once: e.init_once
                                    }),
                                    underscore__WEBPACK_IMPORTED_MODULE_1___default().isObject(c.callbacks) && (underscore__WEBPACK_IMPORTED_MODULE_1___default().isObject(f) && (underscore__WEBPACK_IMPORTED_MODULE_1___default().isEmpty(e.name) || (f.widget.name = e.name),
                                    underscore__WEBPACK_IMPORTED_MODULE_1___default().isEmpty(e.description) || (f.widget.description = e.description),
                                    c.set_lang(f)),
                                    underscore__WEBPACK_IMPORTED_MODULE_1___default().isString(i) && i.length > 0 && (i = jquery__WEBPACK_IMPORTED_MODULE_0___default().parseJSON(i)),
                                    (i = i || {}).id = e.id,
                                    i.status = status,
                                    i.widget_code = r,
                                    i.path = e.path,
                                    i.id = e.id,
                                    i.version = n,
                                    i.oauth_client_uuid = e.oauth_client_uuid,
                                    i.widget_active = "Y" === e.active ? "Y" : "N",
                                    i.images_path = e.images_path || "".concat(i.path, "/images"),
                                    i.status = e.status,
                                    i.support = e.support,
                                    c.set_settings(i),
                                    underscore__WEBPACK_IMPORTED_MODULE_1___default().isFunction(c.callbacks.init) && underscore__WEBPACK_IMPORTED_MODULE_1___default().isFunction(c.callbacks.bind_actions) && underscore__WEBPACK_IMPORTED_MODULE_1___default().isFunction(c.callbacks.render) ? ((u = jquery__WEBPACK_IMPORTED_MODULE_0___default().Deferred(),
                                    l = c.callbacks.render(),
                                    l && (underscore__WEBPACK_IMPORTED_MODULE_1___default().isFunction(l.then) ? l.then(u.resolve, u.reject) : u.resolve()),
                                    u.promise()).done((function() {
                                        jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).trigger("widget:".concat(i.widget_code, ":loaded")),
                                        c.callbacks.init()
                                    }
                                    )),
                                    c.callbacks.bind_actions(),
                                    underscore__WEBPACK_IMPORTED_MODULE_1___default().isFunction(c.callbacks.advancedSettings) && "widget.advanced_settings" === APP.getV3WidgetsArea() && c.callbacks.advancedSettings(),
                                    underscore__WEBPACK_IMPORTED_MODULE_1___default().isFunction(c.callbacks.advancedStats) && "widget.advanced_stats" === APP.getV3WidgetsArea() && c.callbacks.advancedStats(),
                                    underscore__WEBPACK_IMPORTED_MODULE_1___default().isFunction(c.callbacks.initMenuPage) && "widget.widget_page" === APP.getV3WidgetsArea() && c.callbacks.initMenuPage(Widgets.prototype.getInitParamsMenu())) : delete APP.widgets.list[r])),
                                    ++counter === scr_length && (APP.widgets.loaded = !0,
                                    jquery__WEBPACK_IMPORTED_MODULE_0___default()("#list_table").trigger("list:checkbox")),
                                    _initialize_queue_manager__WEBPACK_IMPORTED_MODULE_15__.default.finish({
                                        queue_request: a
                                    })
                                } catch (e) {
                                    _initialize_queue_manager__WEBPACK_IMPORTED_MODULE_15__.default.finish({
                                        queue_request: a,
                                        is_success_finish: !1
                                    }),
                                    console.error(e)
                                } finally {
                                    fakeWidgetOnError(r),
                                    underscore__WEBPACK_IMPORTED_MODULE_1___default().isFunction(callback) && callback(null, r)
                                }
                            else
                                underscore__WEBPACK_IMPORTED_MODULE_1___default().isFunction(callback) && callback({
                                    error: "initialize request is not actual anymore",
                                    code: "initialize_request_is_already_in_progress"
                                }, r)
                        }
                        ), (function(e) {
                            fakeWidgetOnError(r),
                            underscore__WEBPACK_IMPORTED_MODULE_1___default().isFunction(callback) && callback(e, r)
                        }
                        ))
                }
                ))
            }
            ))),
            jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).off("widget:removed").off("widget:installed").on("widget:installed", (function(e, widget_code, settings) {
                var ps = {};
                "object" == typeof self.__scripts[widget_code] && (ps[widget_code] = self.__scripts[widget_code],
                ps[widget_code].active = "Y",
                settings = settings || "",
                ps[widget_code].settings = "'".concat(settings, "'"),
                ps[widget_code].settings = eval(ps[widget_code].settings),
                self.__scripts[widget_code] = ps[widget_code],
                self.initialize(ps))
            }
            )).on("widget:removed", (function(e, t, r, i) {
                var n;
                i = i || !1,
                "object" == typeof APP.widgets.list[t] && ((n = APP.widgets.list[t]).callbacks.destroy = n.callbacks.destroy || returnTrueFn,
                jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).off(APP.click_event + n.ns),
                n.callbacks.destroy(),
                i && delete APP.widgets.list[t])
            }
            )))
        }
        ,
        Widgets.prototype.getInitParamsMenu = function() {
            var e = window.location.pathname.split("/");
            return "widget_page" === e[1] ? {
                location: e[1],
                item_code: e[3],
                subitem_code: e[4]
            } : {
                location: e[1],
                subitem_code: e[4]
            }
        }
        ,
        Widgets.prototype.destroySingle = function(e, t) {
            var r = RIGHT_PANEL_WIDGETS.indexOf(t);
            e.callbacks && underscore__WEBPACK_IMPORTED_MODULE_1___default().isFunction(e.callbacks.destroy) && e.callbacks.destroy(),
            e.ns && jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).off(e.ns),
            jquery__WEBPACK_IMPORTED_MODULE_0___default()("#widgets_block").find(".card-widgets__widget-".concat(t)).remove(),
            r > -1 && RIGHT_PANEL_WIDGETS.splice(1, r),
            delete APP.widgets.list[t]
        }
        ,
        Widgets.prototype.destroy = function() {
            this._destroyed = !0
        }
        ,
        Widgets.prototype.destroyAll = function() {
            var e = jquery__WEBPACK_IMPORTED_MODULE_0___default().Deferred()
              , t = 0
              , r = underscore__WEBPACK_IMPORTED_MODULE_1___default().keys(APP.widgets.list).length;
            return lib_components_widgets_block_actions__WEBPACK_IMPORTED_MODULE_8__.default.destroy(),
            _initialize_queue_manager__WEBPACK_IMPORTED_MODULE_15__.default.finishAll(),
            underscore__WEBPACK_IMPORTED_MODULE_1___default().each(APP.widgets.list, (function(i, n) {
                ("Y" !== i.init_once || i.params && "Y" !== i.params.widget_active) && this.destroySingle(i, n),
                ++t === r && e.resolve()
            }
            ), this),
            RIGHT_PANEL_WIDGETS = [],
            underscore__WEBPACK_IMPORTED_MODULE_1___default().isEmpty(APP.widgets.list) && e.resolve(),
            e.promise()
        }
        ,
        Widgets.prototype.__scripts = {},
        Widgets.prototype.init_scripts = function(e, t) {
            var r = {};
            e = e || {},
            APP.widgets.system = e.system || {},
            APP.widgets.system = underscore__WEBPACK_IMPORTED_MODULE_1___default().extend(APP.widgets.system, {
                amouser: APP.constant("user").login,
                amohash: APP.constant("user").api_key
            }),
            e.length && (e.system.displayed_count_by_area = e.system.displayed_count_by_area || []),
            lib_components_widgets_block_actions__WEBPACK_IMPORTED_MODULE_8__.default.init(),
            underscore__WEBPACK_IMPORTED_MODULE_1___default().isFunction(t) && (r = this.get_active_scripts(e.widgets),
            t.call(this, r || []))
        }
        ,
        Widgets.prototype.get_scripts = function(e, t) {
            this.get_data(e, underscore__WEBPACK_IMPORTED_MODULE_1___default().bind((function(e) {
                this.init_scripts(e, t)
            }
            ), this))
        }
        ,
        Widgets.prototype.getWidgetsCacheId = function(e) {
            return {
                user_id: (0,
                lib_utils_account_users__WEBPACK_IMPORTED_MODULE_6__.current)("id"),
                fversion: 1,
                version: APP.constant("widgets_cache_version")[e] || ""
            }
        }
        ,
        Widgets.prototype.init_in_dp = function(e, t) {
            return e ? initInSpecificArea.call(this, "widgetsSettings", e, t) : jquery__WEBPACK_IMPORTED_MODULE_0___default().Deferred().reject()
        }
        ,
        Widgets.prototype.init_in_salesbot_designer = function(e) {
            var t = {
                disable_repeated_render: e.disable_repeated_render,
                disable_repeated_menu_page_init: e.disable_repeated_menu_page_init
            };
            return initInSpecificArea.call(this, "salesbot_designer", e.widget_name, e.status, t)
        }
        ,
        Widgets.prototype.init_in_crm_plugin = function(e) {
            return initInSpecificArea.call(this, "crm_plugin", e.widget_name, e.status)
        }
        ,
        Widgets.prototype.init_in_crm_template = function(e, t) {
            return e ? initInSpecificArea.call(this, "crm_template", e, t) : jquery__WEBPACK_IMPORTED_MODULE_0___default().Deferred().reject()
        }
        ,
        Widgets.prototype.init_in_catalog_card = function() {
            return initInSpecificArea.call(this, "catalog_card", null, status)
        }
        ,
        Widgets.prototype.init_in_widget_modal = function(e, t) {
            return initInSpecificArea.call(this, "widgetsSettings", e, t)
        }
        ,
        Widgets.prototype.init_in_chats = function(e) {
            return initInSpecificArea.call(this, "widgetsSettings", e)
        }
        ,
        Widgets.prototype.get_data = function(e, t) {
            var r = APP.getV3WidgetsArea();
            return _getData.call(this, e, r, (function(e) {
                return (e = underscore__WEBPACK_IMPORTED_MODULE_1___default().isArray(e) && !e.length ? {} : e).system = e.system || {
                    display_count: 0,
                    displayed_count_by_area: {}
                },
                (0,
                lib_common_cookie__WEBPACK_IMPORTED_MODULE_16__.set)({
                    name: "displayed_widgets_count_".concat(r.replace(".", "_").replace("_list", "")),
                    value: e.system.displayed_count || 0
                }),
                e
            }
            ), t)
        }
        ,
        Widgets.prototype.build_new_integration_data = function(e) {
            var t = e._links.script.href.replace("/script.js", "");
            return {
                active: "Y",
                category_id: "2",
                init_once: 1 === e.preload ? "Y" : "N",
                installed_version: e.version_time,
                lang: e._links.lang.href,
                path: t,
                settings: e.settings && e.settings.values ? e.settings.values : {},
                src: e._links.script.href,
                templates_path: "".concat(t, "/twig"),
                images_path: "".concat(t, "/img")
            }
        }
        ,
        Widgets.prototype.get_active_scripts = function(e) {
            var t = {};
            return underscore__WEBPACK_IMPORTED_MODULE_1___default().each(e, (function(e, r) {
                "2" === e.category_id || "/settings/pay/" !== window.location.pathname ? "Y" === e.active && (t[r] = e) : underscore__WEBPACK_IMPORTED_MODULE_1___default().isEmpty(APP.widgets.list[r]) || this.destroySingle(APP.widgets.list[r], r)
            }
            ), !0),
            t
        }
        ,
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on("widgets:load", (function() {
            widgets && widgets.destroy(),
            widgets = new Widgets
        }
        ));
        var clearWidgetsBlock = function() {
            jquery__WEBPACK_IMPORTED_MODULE_0___default()("#widgets_block").find(" .card-widgets__widget, .js-operday-timer").remove()
        };
        const __WEBPACK_DEFAULT_EXPORT__ = Widgets;
        var m = "../build/transpiled/widgets/index";
        window.define(m, (function() {
            var e = "undefined"
              , t = typeof __webpack_exports__ === e ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === e ? typeof module === e ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : __webpack_exports__;
            return t && t.default || t
        }
        )),
        window.require([m])
    }
    ,
    258491: (e, t, r) => {
        "use strict";
        r.r(t),
        r.d(t, {
            default: () => _
        });
        var i = r(55188)
          , n = r.n(i)
          , a = {}
          , s = {};
        const _ = {
            finish: function(e) {
                var t = e.queue_request
                  , r = e.is_finish_successful
                  , i = void 0 === r || r
                  , _ = t.identifier;
                return a[_] === t && (i && s[_] && (n().each(s[_], (function(e) {
                    e()
                }
                )),
                delete s[_]),
                delete a[_])
            },
            onSuccessFinish: function(e) {
                var t = e.queue_request
                  , r = e.callback
                  , i = t.identifier;
                s[i] ? s[i].push(r) : s[i] = [r]
            },
            finishAll: function() {
                var e = this;
                n().each(a, (function(t) {
                    e.finish({
                        queue_request: t,
                        is_finish_successful: !1
                    })
                }
                ))
            },
            isQueueRequestActual: function(e) {
                var t = e.identifier;
                return e === a[t]
            },
            add: function(e) {
                var t = e.identifier
                  , r = a[t];
                if (r) {
                    var i = JSON.stringify(r);
                    throw new Error("".concat(i, " is already inside the initialize queue."))
                }
                return a[t] = e,
                e
            }
        }
    }
    ,
    925773: (e, t, r) => {
        "use strict";
        function i() {
            return i = Object.assign ? Object.assign.bind() : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var i in r)
                        Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i])
                }
                return e
            }
            ,
            i.apply(this, arguments)
        }
        r.r(t),
        r.d(t, {
            default: () => i
        })
    }
    ,
    193219: (e, t, r) => {
        "use strict";
        r.r(t),
        r.d(t, {
            default: () => n
        });
        var i = r(706983);
        function n(e, t) {
            e.prototype = Object.create(t.prototype),
            e.prototype.constructor = e,
            (0,
            i.default)(e, t)
        }
    }
    ,
    706983: (e, t, r) => {
        "use strict";
        function i(e, t) {
            return i = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                return e.__proto__ = t,
                e
            }
            ,
            i(e, t)
        }
        r.r(t),
        r.d(t, {
            default: () => i
        })
    }
    ,
    724329: (e, t, r) => {
        "use strict";
        r.r(t),
        r.d(t, {
            useConst: () => n,
            useDebounce: () => a,
            useDeepCompareEffect: () => E,
            useDidUpdateEffect: () => s,
            useIsComponentMounted: () => _,
            useKeyboardListNavigation: () => f,
            useOnOutsideClick: () => h
        });
        var i = r(827378)
          , n = e => {
            const t = (0,
            i.useRef)();
            return t.current || (t.current = {
                value: e()
            }),
            t.current.value
        }
          , a = (e, t) => {
            const [r,n] = (0,
            i.useState)(e);
            return (0,
            i.useEffect)(( () => {
                const r = setTimeout(( () => {
                    n(e)
                }
                ), t);
                return () => {
                    clearTimeout(r)
                }
            }
            ), [e, t]),
            r
        }
          , s = (e, t) => {
            const r = (0,
            i.useRef)(!1);
            (0,
            i.useEffect)(( () => {
                if (r.current)
                    return e();
                r.current = !0
            }
            ), t)
        }
          , _ = () => {
            const e = (0,
            i.useRef)(!0);
            return (0,
            i.useEffect)(( () => () => {
                e.current = !1
            }
            ), []),
            () => e.current
        }
          , o = "ArrowUp"
          , c = "ArrowDown"
          , u = "Enter"
          , l = "Space"
          , d = [o, c, u, l]
          , f = e => {
            const {itemsLength: t, onSelect: r, onToggle: n, onHoveredIndexChange: a=( () => {}
            ), isOpened: s=!1, hoveredIndex: _=0, listRef: f} = e
              , [p,g] = (0,
            i.useState)(_);
            (0,
            i.useEffect)(( () => {
                g(_)
            }
            ), [_]);
            const h = e => {
                g(e),
                a(e)
            }
              , E = (0,
            i.useCallback)((e => {
                if (!f || !f.current)
                    return;
                const t = f.current
                  , r = t.querySelector(`li:nth-child(${e + 1})`);
                if (!r)
                    return;
                const i = t.getBoundingClientRect().top
                  , n = r.getBoundingClientRect().top
                  , a = t.scrollTop + (n - i) - t.offsetHeight / 2 + r.offsetHeight / 2;
                t.scrollTop = a,
                h(e)
            }
            ), [])
              , b = (0,
            i.useCallback)((e => {
                switch (d.includes(e.code) && e.preventDefault(),
                e.code) {
                case "Escape":
                    s && n(!1);
                    break;
                case o:
                    s && E(p > 0 ? p - 1 : t - 1);
                    break;
                case c:
                    s && E(p < t - 1 ? p + 1 : 0);
                    break;
                case u:
                case l:
                    s && p >= 0 && p < t ? r(p) : n(!0)
                }
            }
            ), [p, s, t, r, n]);
            return (0,
            i.useEffect)(( () => {
                s && (h(p),
                E(p))
            }
            ), [s]),
            {
                currentHoveredIndex: p,
                updateHoveredIndex: h,
                updateListPosition: E,
                onKeyDown: b
            }
        }
          , p = (e, t) => {
            if (e === t)
                return !0;
            if (null == e || null == t)
                return !1;
            if ("object" == typeof e && "object" == typeof t) {
                const r = Object.keys(e)
                  , i = Object.keys(t);
                if (r.length !== i.length)
                    return !1;
                for (const n of r)
                    if (!i.includes(n) || !p(e[n], t[n]))
                        return !1;
                return !0
            }
            return !1
        }
          , g = {};
        document.addEventListener("click", (e => {
            for (const t in g) {
                const r = g[t];
                for (let t = r.length - 1; t > -1; t--) {
                    const {ref: i, handler: n} = r[t]
                      , a = i.current;
                    if (a) {
                        if (a.contains(e.target))
                            break;
                        n(e);
                        break
                    }
                }
            }
        }
        ));
        var h = e => {
            const {handler: t, ref: r, context: n="global"} = e;
            (0,
            i.useEffect)(( () => {
                g[n] || (g[n] = []);
                const e = {
                    handler: t,
                    ref: r
                };
                return setTimeout(( () => {
                    var t;
                    null == (t = g[n]) || t.push(e)
                }
                )),
                () => {
                    var t, r;
                    g[n] = (t = g[n],
                    r = e,
                    t.filter((e => e !== r)))
                }
            }
            ), [t, r, n])
        }
          , E = (e, t) => {
            const r = (0,
            i.useRef)();
            (0,
            i.useEffect)(( () => {
                if (!p(r.current, t))
                    return r.current = t,
                    e()
            }
            ), t)
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
        e._sentryDebugIds[t] = "49a3043e-b3ce-4e95-8703-7e4095ff0ff6",
        e._sentryDebugIdIdentifier = "sentry-dbid-49a3043e-b3ce-4e95-8703-7e4095ff0ff6")
    } catch (e) {}
}();
//# sourceMappingURL=75620.907dc87499035442ff59.js.map
