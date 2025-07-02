/*! For license information please see 76846.2651956106b3531a6f4f.js.LICENSE.txt */
(window.webpackChunk = window.webpackChunk || []).push([[76846], {
    698302: function(e, t) {
        !function(n, r) {
            var a = {
                version: "0.3.2",
                settings: {
                    currency: {
                        symbol: "$",
                        format: "%s%v",
                        decimal: ".",
                        thousand: ",",
                        precision: 2,
                        grouping: 3
                    },
                    number: {
                        precision: 0,
                        grouping: 3,
                        thousand: ",",
                        decimal: "."
                    }
                }
            }
              , i = Array.prototype.map
              , o = Array.isArray
              , s = Object.prototype.toString;
            function c(e) {
                return !!("" === e || e && e.charCodeAt && e.substr)
            }
            function u(e) {
                return o ? o(e) : "[object Array]" === s.call(e)
            }
            function l(e) {
                return "[object Object]" === s.call(e)
            }
            function d(e, t) {
                var n;
                for (n in e = e || {},
                t = t || {})
                    t.hasOwnProperty(n) && null == e[n] && (e[n] = t[n]);
                return e
            }
            function p(e, t, n) {
                var r, a, o = [];
                if (!e)
                    return o;
                if (i && e.map === i)
                    return e.map(t, n);
                for (r = 0,
                a = e.length; r < a; r++)
                    o[r] = t.call(n, e[r], r, e);
                return o
            }
            function f(e, t) {
                return e = Math.round(Math.abs(e)),
                isNaN(e) ? t : e
            }
            function m(e) {
                var t = a.settings.currency.format;
                return "function" == typeof e && (e = e()),
                c(e) && e.match("%v") ? {
                    pos: e,
                    neg: e.replace("-", "").replace("%v", "-%v"),
                    zero: e
                } : e && e.pos && e.pos.match("%v") ? e : c(t) ? a.settings.currency.format = {
                    pos: t,
                    neg: t.replace("%v", "-%v"),
                    zero: t
                } : t
            }
            var g = a.unformat = a.parse = function(e, t) {
                if (u(e))
                    return p(e, (function(e) {
                        return g(e, t)
                    }
                    ));
                if ("number" == typeof (e = e || 0))
                    return e;
                t = t || ".";
                var n = new RegExp("[^0-9-" + t + "]",["g"])
                  , r = parseFloat(("" + e).replace(/\((.*)\)/, "-$1").replace(n, "").replace(t, "."));
                return isNaN(r) ? 0 : r
            }
              , _ = a.toFixed = function(e, t) {
                t = f(t, a.settings.number.precision);
                var n = Math.pow(10, t);
                return (Math.round(a.unformat(e) * n) / n).toFixed(t)
            }
              , h = a.formatNumber = function(e, t, n, r) {
                if (u(e))
                    return p(e, (function(e) {
                        return h(e, t, n, r)
                    }
                    ));
                e = g(e);
                var i = d(l(t) ? t : {
                    precision: t,
                    thousand: n,
                    decimal: r
                }, a.settings.number)
                  , o = f(i.precision)
                  , s = e < 0 ? "-" : ""
                  , c = parseInt(_(Math.abs(e || 0), o), 10) + ""
                  , m = c.length > 3 ? c.length % 3 : 0;
                return s + (m ? c.substr(0, m) + i.thousand : "") + c.substr(m).replace(/(\d{3})(?=\d)/g, "$1" + i.thousand) + (o ? i.decimal + _(Math.abs(e), o).split(".")[1] : "")
            }
              , y = a.formatMoney = function(e, t, n, r, i, o) {
                if (u(e))
                    return p(e, (function(e) {
                        return y(e, t, n, r, i, o)
                    }
                    ));
                e = g(e);
                var s = d(l(t) ? t : {
                    symbol: t,
                    precision: n,
                    thousand: r,
                    decimal: i,
                    format: o
                }, a.settings.currency)
                  , c = m(s.format);
                return (e > 0 ? c.pos : e < 0 ? c.neg : c.zero).replace("%s", s.symbol).replace("%v", h(Math.abs(e), f(s.precision), s.thousand, s.decimal))
            }
            ;
            a.formatColumn = function(e, t, n, r, i, o) {
                if (!e)
                    return [];
                var s = d(l(t) ? t : {
                    symbol: t,
                    precision: n,
                    thousand: r,
                    decimal: i,
                    format: o
                }, a.settings.currency)
                  , _ = m(s.format)
                  , y = _.pos.indexOf("%s") < _.pos.indexOf("%v")
                  , b = 0
                  , v = p(e, (function(e, t) {
                    if (u(e))
                        return a.formatColumn(e, s);
                    var n = ((e = g(e)) > 0 ? _.pos : e < 0 ? _.neg : _.zero).replace("%s", s.symbol).replace("%v", h(Math.abs(e), f(s.precision), s.thousand, s.decimal));
                    return n.length > b && (b = n.length),
                    n
                }
                ));
                return p(v, (function(e, t) {
                    return c(e) && e.length < b ? y ? e.replace(s.symbol, s.symbol + new Array(b - e.length + 1).join(" ")) : new Array(b - e.length + 1).join(" ") + e : e
                }
                ))
            }
            ,
            e.exports && (t = e.exports = a),
            t.accounting = a
        }();
        var n = "accounting";
        window.define(n, (function() {
            var t = "undefined"
              , n = typeof __webpack_exports__ === t ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === t ? typeof e === t ? void 0 : e.exports : __WEBPACK_AMD_DEFINE_RESULT__ : __webpack_exports__;
            return n && n.default || n
        }
        )),
        window.require([n])
    },
    445752: (e, t, n) => {
        var r = n(178461)
          , a = n(621614);
        function i(e) {
            return null == e
        }
        function o(e) {
            (e = function(e) {
                var t = {};
                for (var n in e)
                    t[n] = e[n];
                return t
            }(e || {})).whiteList = e.whiteList || r.whiteList,
            e.onAttr = e.onAttr || r.onAttr,
            e.onIgnoreAttr = e.onIgnoreAttr || r.onIgnoreAttr,
            e.safeAttrValue = e.safeAttrValue || r.safeAttrValue,
            this.options = e
        }
        n(705088),
        o.prototype.process = function(e) {
            if (!(e = (e = e || "").toString()))
                return "";
            var t = this.options
              , n = t.whiteList
              , r = t.onAttr
              , o = t.onIgnoreAttr
              , s = t.safeAttrValue;
            return a(e, (function(e, t, a, c, u) {
                var l = n[a]
                  , d = !1;
                if (!0 === l ? d = l : "function" == typeof l ? d = l(c) : l instanceof RegExp && (d = l.test(c)),
                !0 !== d && (d = !1),
                c = s(a, c)) {
                    var p, f = {
                        position: t,
                        sourcePosition: e,
                        source: u,
                        isWhite: d
                    };
                    return d ? i(p = r(a, c, f)) ? a + ":" + c : p : i(p = o(a, c, f)) ? void 0 : p
                }
            }
            ))
        }
        ,
        e.exports = o
    }
    ,
    178461: (e, t) => {
        function n() {
            return {
                "align-content": !1,
                "align-items": !1,
                "align-self": !1,
                "alignment-adjust": !1,
                "alignment-baseline": !1,
                all: !1,
                "anchor-point": !1,
                animation: !1,
                "animation-delay": !1,
                "animation-direction": !1,
                "animation-duration": !1,
                "animation-fill-mode": !1,
                "animation-iteration-count": !1,
                "animation-name": !1,
                "animation-play-state": !1,
                "animation-timing-function": !1,
                azimuth: !1,
                "backface-visibility": !1,
                background: !0,
                "background-attachment": !0,
                "background-clip": !0,
                "background-color": !0,
                "background-image": !0,
                "background-origin": !0,
                "background-position": !0,
                "background-repeat": !0,
                "background-size": !0,
                "baseline-shift": !1,
                binding: !1,
                bleed: !1,
                "bookmark-label": !1,
                "bookmark-level": !1,
                "bookmark-state": !1,
                border: !0,
                "border-bottom": !0,
                "border-bottom-color": !0,
                "border-bottom-left-radius": !0,
                "border-bottom-right-radius": !0,
                "border-bottom-style": !0,
                "border-bottom-width": !0,
                "border-collapse": !0,
                "border-color": !0,
                "border-image": !0,
                "border-image-outset": !0,
                "border-image-repeat": !0,
                "border-image-slice": !0,
                "border-image-source": !0,
                "border-image-width": !0,
                "border-left": !0,
                "border-left-color": !0,
                "border-left-style": !0,
                "border-left-width": !0,
                "border-radius": !0,
                "border-right": !0,
                "border-right-color": !0,
                "border-right-style": !0,
                "border-right-width": !0,
                "border-spacing": !0,
                "border-style": !0,
                "border-top": !0,
                "border-top-color": !0,
                "border-top-left-radius": !0,
                "border-top-right-radius": !0,
                "border-top-style": !0,
                "border-top-width": !0,
                "border-width": !0,
                bottom: !1,
                "box-decoration-break": !0,
                "box-shadow": !0,
                "box-sizing": !0,
                "box-snap": !0,
                "box-suppress": !0,
                "break-after": !0,
                "break-before": !0,
                "break-inside": !0,
                "caption-side": !1,
                chains: !1,
                clear: !0,
                clip: !1,
                "clip-path": !1,
                "clip-rule": !1,
                color: !0,
                "color-interpolation-filters": !0,
                "column-count": !1,
                "column-fill": !1,
                "column-gap": !1,
                "column-rule": !1,
                "column-rule-color": !1,
                "column-rule-style": !1,
                "column-rule-width": !1,
                "column-span": !1,
                "column-width": !1,
                columns: !1,
                contain: !1,
                content: !1,
                "counter-increment": !1,
                "counter-reset": !1,
                "counter-set": !1,
                crop: !1,
                cue: !1,
                "cue-after": !1,
                "cue-before": !1,
                cursor: !1,
                direction: !1,
                display: !0,
                "display-inside": !0,
                "display-list": !0,
                "display-outside": !0,
                "dominant-baseline": !1,
                elevation: !1,
                "empty-cells": !1,
                filter: !1,
                flex: !1,
                "flex-basis": !1,
                "flex-direction": !1,
                "flex-flow": !1,
                "flex-grow": !1,
                "flex-shrink": !1,
                "flex-wrap": !1,
                float: !1,
                "float-offset": !1,
                "flood-color": !1,
                "flood-opacity": !1,
                "flow-from": !1,
                "flow-into": !1,
                font: !0,
                "font-family": !0,
                "font-feature-settings": !0,
                "font-kerning": !0,
                "font-language-override": !0,
                "font-size": !0,
                "font-size-adjust": !0,
                "font-stretch": !0,
                "font-style": !0,
                "font-synthesis": !0,
                "font-variant": !0,
                "font-variant-alternates": !0,
                "font-variant-caps": !0,
                "font-variant-east-asian": !0,
                "font-variant-ligatures": !0,
                "font-variant-numeric": !0,
                "font-variant-position": !0,
                "font-weight": !0,
                grid: !1,
                "grid-area": !1,
                "grid-auto-columns": !1,
                "grid-auto-flow": !1,
                "grid-auto-rows": !1,
                "grid-column": !1,
                "grid-column-end": !1,
                "grid-column-start": !1,
                "grid-row": !1,
                "grid-row-end": !1,
                "grid-row-start": !1,
                "grid-template": !1,
                "grid-template-areas": !1,
                "grid-template-columns": !1,
                "grid-template-rows": !1,
                "hanging-punctuation": !1,
                height: !0,
                hyphens: !1,
                icon: !1,
                "image-orientation": !1,
                "image-resolution": !1,
                "ime-mode": !1,
                "initial-letters": !1,
                "inline-box-align": !1,
                "justify-content": !1,
                "justify-items": !1,
                "justify-self": !1,
                left: !1,
                "letter-spacing": !0,
                "lighting-color": !0,
                "line-box-contain": !1,
                "line-break": !1,
                "line-grid": !1,
                "line-height": !1,
                "line-snap": !1,
                "line-stacking": !1,
                "line-stacking-ruby": !1,
                "line-stacking-shift": !1,
                "line-stacking-strategy": !1,
                "list-style": !0,
                "list-style-image": !0,
                "list-style-position": !0,
                "list-style-type": !0,
                margin: !0,
                "margin-bottom": !0,
                "margin-left": !0,
                "margin-right": !0,
                "margin-top": !0,
                "marker-offset": !1,
                "marker-side": !1,
                marks: !1,
                mask: !1,
                "mask-box": !1,
                "mask-box-outset": !1,
                "mask-box-repeat": !1,
                "mask-box-slice": !1,
                "mask-box-source": !1,
                "mask-box-width": !1,
                "mask-clip": !1,
                "mask-image": !1,
                "mask-origin": !1,
                "mask-position": !1,
                "mask-repeat": !1,
                "mask-size": !1,
                "mask-source-type": !1,
                "mask-type": !1,
                "max-height": !0,
                "max-lines": !1,
                "max-width": !0,
                "min-height": !0,
                "min-width": !0,
                "move-to": !1,
                "nav-down": !1,
                "nav-index": !1,
                "nav-left": !1,
                "nav-right": !1,
                "nav-up": !1,
                "object-fit": !1,
                "object-position": !1,
                opacity: !1,
                order: !1,
                orphans: !1,
                outline: !1,
                "outline-color": !1,
                "outline-offset": !1,
                "outline-style": !1,
                "outline-width": !1,
                overflow: !1,
                "overflow-wrap": !1,
                "overflow-x": !1,
                "overflow-y": !1,
                padding: !0,
                "padding-bottom": !0,
                "padding-left": !0,
                "padding-right": !0,
                "padding-top": !0,
                page: !1,
                "page-break-after": !1,
                "page-break-before": !1,
                "page-break-inside": !1,
                "page-policy": !1,
                pause: !1,
                "pause-after": !1,
                "pause-before": !1,
                perspective: !1,
                "perspective-origin": !1,
                pitch: !1,
                "pitch-range": !1,
                "play-during": !1,
                position: !1,
                "presentation-level": !1,
                quotes: !1,
                "region-fragment": !1,
                resize: !1,
                rest: !1,
                "rest-after": !1,
                "rest-before": !1,
                richness: !1,
                right: !1,
                rotation: !1,
                "rotation-point": !1,
                "ruby-align": !1,
                "ruby-merge": !1,
                "ruby-position": !1,
                "shape-image-threshold": !1,
                "shape-outside": !1,
                "shape-margin": !1,
                size: !1,
                speak: !1,
                "speak-as": !1,
                "speak-header": !1,
                "speak-numeral": !1,
                "speak-punctuation": !1,
                "speech-rate": !1,
                stress: !1,
                "string-set": !1,
                "tab-size": !1,
                "table-layout": !1,
                "text-align": !0,
                "text-align-last": !0,
                "text-combine-upright": !0,
                "text-decoration": !0,
                "text-decoration-color": !0,
                "text-decoration-line": !0,
                "text-decoration-skip": !0,
                "text-decoration-style": !0,
                "text-emphasis": !0,
                "text-emphasis-color": !0,
                "text-emphasis-position": !0,
                "text-emphasis-style": !0,
                "text-height": !0,
                "text-indent": !0,
                "text-justify": !0,
                "text-orientation": !0,
                "text-overflow": !0,
                "text-shadow": !0,
                "text-space-collapse": !0,
                "text-transform": !0,
                "text-underline-position": !0,
                "text-wrap": !0,
                top: !1,
                transform: !1,
                "transform-origin": !1,
                "transform-style": !1,
                transition: !1,
                "transition-delay": !1,
                "transition-duration": !1,
                "transition-property": !1,
                "transition-timing-function": !1,
                "unicode-bidi": !1,
                "vertical-align": !1,
                visibility: !1,
                "voice-balance": !1,
                "voice-duration": !1,
                "voice-family": !1,
                "voice-pitch": !1,
                "voice-range": !1,
                "voice-rate": !1,
                "voice-stress": !1,
                "voice-volume": !1,
                volume: !1,
                "white-space": !1,
                widows: !1,
                width: !0,
                "will-change": !1,
                "word-break": !0,
                "word-spacing": !0,
                "word-wrap": !0,
                "wrap-flow": !1,
                "wrap-through": !1,
                "writing-mode": !1,
                "z-index": !1
            }
        }
        var r = /javascript\s*\:/gim;
        t.whiteList = {
            "align-content": !1,
            "align-items": !1,
            "align-self": !1,
            "alignment-adjust": !1,
            "alignment-baseline": !1,
            all: !1,
            "anchor-point": !1,
            animation: !1,
            "animation-delay": !1,
            "animation-direction": !1,
            "animation-duration": !1,
            "animation-fill-mode": !1,
            "animation-iteration-count": !1,
            "animation-name": !1,
            "animation-play-state": !1,
            "animation-timing-function": !1,
            azimuth: !1,
            "backface-visibility": !1,
            background: !0,
            "background-attachment": !0,
            "background-clip": !0,
            "background-color": !0,
            "background-image": !0,
            "background-origin": !0,
            "background-position": !0,
            "background-repeat": !0,
            "background-size": !0,
            "baseline-shift": !1,
            binding: !1,
            bleed: !1,
            "bookmark-label": !1,
            "bookmark-level": !1,
            "bookmark-state": !1,
            border: !0,
            "border-bottom": !0,
            "border-bottom-color": !0,
            "border-bottom-left-radius": !0,
            "border-bottom-right-radius": !0,
            "border-bottom-style": !0,
            "border-bottom-width": !0,
            "border-collapse": !0,
            "border-color": !0,
            "border-image": !0,
            "border-image-outset": !0,
            "border-image-repeat": !0,
            "border-image-slice": !0,
            "border-image-source": !0,
            "border-image-width": !0,
            "border-left": !0,
            "border-left-color": !0,
            "border-left-style": !0,
            "border-left-width": !0,
            "border-radius": !0,
            "border-right": !0,
            "border-right-color": !0,
            "border-right-style": !0,
            "border-right-width": !0,
            "border-spacing": !0,
            "border-style": !0,
            "border-top": !0,
            "border-top-color": !0,
            "border-top-left-radius": !0,
            "border-top-right-radius": !0,
            "border-top-style": !0,
            "border-top-width": !0,
            "border-width": !0,
            bottom: !1,
            "box-decoration-break": !0,
            "box-shadow": !0,
            "box-sizing": !0,
            "box-snap": !0,
            "box-suppress": !0,
            "break-after": !0,
            "break-before": !0,
            "break-inside": !0,
            "caption-side": !1,
            chains: !1,
            clear: !0,
            clip: !1,
            "clip-path": !1,
            "clip-rule": !1,
            color: !0,
            "color-interpolation-filters": !0,
            "column-count": !1,
            "column-fill": !1,
            "column-gap": !1,
            "column-rule": !1,
            "column-rule-color": !1,
            "column-rule-style": !1,
            "column-rule-width": !1,
            "column-span": !1,
            "column-width": !1,
            columns: !1,
            contain: !1,
            content: !1,
            "counter-increment": !1,
            "counter-reset": !1,
            "counter-set": !1,
            crop: !1,
            cue: !1,
            "cue-after": !1,
            "cue-before": !1,
            cursor: !1,
            direction: !1,
            display: !0,
            "display-inside": !0,
            "display-list": !0,
            "display-outside": !0,
            "dominant-baseline": !1,
            elevation: !1,
            "empty-cells": !1,
            filter: !1,
            flex: !1,
            "flex-basis": !1,
            "flex-direction": !1,
            "flex-flow": !1,
            "flex-grow": !1,
            "flex-shrink": !1,
            "flex-wrap": !1,
            float: !1,
            "float-offset": !1,
            "flood-color": !1,
            "flood-opacity": !1,
            "flow-from": !1,
            "flow-into": !1,
            font: !0,
            "font-family": !0,
            "font-feature-settings": !0,
            "font-kerning": !0,
            "font-language-override": !0,
            "font-size": !0,
            "font-size-adjust": !0,
            "font-stretch": !0,
            "font-style": !0,
            "font-synthesis": !0,
            "font-variant": !0,
            "font-variant-alternates": !0,
            "font-variant-caps": !0,
            "font-variant-east-asian": !0,
            "font-variant-ligatures": !0,
            "font-variant-numeric": !0,
            "font-variant-position": !0,
            "font-weight": !0,
            grid: !1,
            "grid-area": !1,
            "grid-auto-columns": !1,
            "grid-auto-flow": !1,
            "grid-auto-rows": !1,
            "grid-column": !1,
            "grid-column-end": !1,
            "grid-column-start": !1,
            "grid-row": !1,
            "grid-row-end": !1,
            "grid-row-start": !1,
            "grid-template": !1,
            "grid-template-areas": !1,
            "grid-template-columns": !1,
            "grid-template-rows": !1,
            "hanging-punctuation": !1,
            height: !0,
            hyphens: !1,
            icon: !1,
            "image-orientation": !1,
            "image-resolution": !1,
            "ime-mode": !1,
            "initial-letters": !1,
            "inline-box-align": !1,
            "justify-content": !1,
            "justify-items": !1,
            "justify-self": !1,
            left: !1,
            "letter-spacing": !0,
            "lighting-color": !0,
            "line-box-contain": !1,
            "line-break": !1,
            "line-grid": !1,
            "line-height": !1,
            "line-snap": !1,
            "line-stacking": !1,
            "line-stacking-ruby": !1,
            "line-stacking-shift": !1,
            "line-stacking-strategy": !1,
            "list-style": !0,
            "list-style-image": !0,
            "list-style-position": !0,
            "list-style-type": !0,
            margin: !0,
            "margin-bottom": !0,
            "margin-left": !0,
            "margin-right": !0,
            "margin-top": !0,
            "marker-offset": !1,
            "marker-side": !1,
            marks: !1,
            mask: !1,
            "mask-box": !1,
            "mask-box-outset": !1,
            "mask-box-repeat": !1,
            "mask-box-slice": !1,
            "mask-box-source": !1,
            "mask-box-width": !1,
            "mask-clip": !1,
            "mask-image": !1,
            "mask-origin": !1,
            "mask-position": !1,
            "mask-repeat": !1,
            "mask-size": !1,
            "mask-source-type": !1,
            "mask-type": !1,
            "max-height": !0,
            "max-lines": !1,
            "max-width": !0,
            "min-height": !0,
            "min-width": !0,
            "move-to": !1,
            "nav-down": !1,
            "nav-index": !1,
            "nav-left": !1,
            "nav-right": !1,
            "nav-up": !1,
            "object-fit": !1,
            "object-position": !1,
            opacity: !1,
            order: !1,
            orphans: !1,
            outline: !1,
            "outline-color": !1,
            "outline-offset": !1,
            "outline-style": !1,
            "outline-width": !1,
            overflow: !1,
            "overflow-wrap": !1,
            "overflow-x": !1,
            "overflow-y": !1,
            padding: !0,
            "padding-bottom": !0,
            "padding-left": !0,
            "padding-right": !0,
            "padding-top": !0,
            page: !1,
            "page-break-after": !1,
            "page-break-before": !1,
            "page-break-inside": !1,
            "page-policy": !1,
            pause: !1,
            "pause-after": !1,
            "pause-before": !1,
            perspective: !1,
            "perspective-origin": !1,
            pitch: !1,
            "pitch-range": !1,
            "play-during": !1,
            position: !1,
            "presentation-level": !1,
            quotes: !1,
            "region-fragment": !1,
            resize: !1,
            rest: !1,
            "rest-after": !1,
            "rest-before": !1,
            richness: !1,
            right: !1,
            rotation: !1,
            "rotation-point": !1,
            "ruby-align": !1,
            "ruby-merge": !1,
            "ruby-position": !1,
            "shape-image-threshold": !1,
            "shape-outside": !1,
            "shape-margin": !1,
            size: !1,
            speak: !1,
            "speak-as": !1,
            "speak-header": !1,
            "speak-numeral": !1,
            "speak-punctuation": !1,
            "speech-rate": !1,
            stress: !1,
            "string-set": !1,
            "tab-size": !1,
            "table-layout": !1,
            "text-align": !0,
            "text-align-last": !0,
            "text-combine-upright": !0,
            "text-decoration": !0,
            "text-decoration-color": !0,
            "text-decoration-line": !0,
            "text-decoration-skip": !0,
            "text-decoration-style": !0,
            "text-emphasis": !0,
            "text-emphasis-color": !0,
            "text-emphasis-position": !0,
            "text-emphasis-style": !0,
            "text-height": !0,
            "text-indent": !0,
            "text-justify": !0,
            "text-orientation": !0,
            "text-overflow": !0,
            "text-shadow": !0,
            "text-space-collapse": !0,
            "text-transform": !0,
            "text-underline-position": !0,
            "text-wrap": !0,
            top: !1,
            transform: !1,
            "transform-origin": !1,
            "transform-style": !1,
            transition: !1,
            "transition-delay": !1,
            "transition-duration": !1,
            "transition-property": !1,
            "transition-timing-function": !1,
            "unicode-bidi": !1,
            "vertical-align": !1,
            visibility: !1,
            "voice-balance": !1,
            "voice-duration": !1,
            "voice-family": !1,
            "voice-pitch": !1,
            "voice-range": !1,
            "voice-rate": !1,
            "voice-stress": !1,
            "voice-volume": !1,
            volume: !1,
            "white-space": !1,
            widows: !1,
            width: !0,
            "will-change": !1,
            "word-break": !0,
            "word-spacing": !0,
            "word-wrap": !0,
            "wrap-flow": !1,
            "wrap-through": !1,
            "writing-mode": !1,
            "z-index": !1
        },
        t.getDefaultWhiteList = n,
        t.onAttr = function(e, t, n) {}
        ,
        t.onIgnoreAttr = function(e, t, n) {}
        ,
        t.safeAttrValue = function(e, t) {
            return r.test(t) ? "" : t
        }
    }
    ,
    878114: (e, t, n) => {
        var r = n(178461)
          , a = n(445752);
        for (var i in (t = e.exports = function(e, t) {
            return new a(t).process(e)
        }
        ).FilterCSS = a,
        r)
            t[i] = r[i];
        "undefined" != typeof window && (window.filterCSS = e.exports)
    }
    ,
    621614: (e, t, n) => {
        var r = n(705088);
        e.exports = function(e, t) {
            ";" !== (e = r.trimRight(e))[e.length - 1] && (e += ";");
            var n = e.length
              , a = !1
              , i = 0
              , o = 0
              , s = "";
            function c() {
                if (!a) {
                    var n = r.trim(e.slice(i, o))
                      , c = n.indexOf(":");
                    if (-1 !== c) {
                        var u = r.trim(n.slice(0, c))
                          , l = r.trim(n.slice(c + 1));
                        if (u) {
                            var d = t(i, s.length, u, l, n);
                            d && (s += d + "; ")
                        }
                    }
                }
                i = o + 1
            }
            for (; o < n; o++) {
                var u = e[o];
                if ("/" === u && "*" === e[o + 1]) {
                    var l = e.indexOf("*/", o + 2);
                    if (-1 === l)
                        break;
                    i = (o = l + 1) + 1,
                    a = !1
                } else
                    "(" === u ? a = !0 : ")" === u ? a = !1 : ";" === u ? a || c() : "\n" === u && c()
            }
            return r.trim(s)
        }
    }
    ,
    705088: e => {
        e.exports = {
            indexOf: function(e, t) {
                var n, r;
                if (Array.prototype.indexOf)
                    return e.indexOf(t);
                for (n = 0,
                r = e.length; n < r; n++)
                    if (e[n] === t)
                        return n;
                return -1
            },
            forEach: function(e, t, n) {
                var r, a;
                if (Array.prototype.forEach)
                    return e.forEach(t, n);
                for (r = 0,
                a = e.length; r < a; r++)
                    t.call(n, e[r], r, e)
            },
            trim: function(e) {
                return String.prototype.trim ? e.trim() : e.replace(/(^\s*)|(\s*$)/g, "")
            },
            trimRight: function(e) {
                return String.prototype.trimRight ? e.trimRight() : e.replace(/(\s*$)/g, "")
            }
        }
    }
    ,
    988050: (e, t, n) => {
        "use strict";
        n.r(t),
        n.d(t, {
            get: () => a,
            set: () => r
        });
        var r = function(e) {
            if (void 0 === e.name || void 0 === e.value)
                return !1;
            "object" == typeof e.value && (e.value = JSON.stringify(e.value));
            var t, n = e.expiredays || 7, r = e.path || "/", a = e.domain || "", i = e.secure || !1;
            if (!1 !== i && (i = !0),
            e.session)
                t = "";
            else if (n) {
                var o = new Date;
                o.setDate(o.getDate() + n),
                t = o.toGMTString()
            }
            document.cookie = "".concat(e.name, "=").concat(escape(e.value)).concat(t ? "; expires=".concat(t) : "").concat(r ? "; path=".concat(r) : "").concat(a ? "; domain=".concat(a) : "").concat(i ? "; secure" : "")
        }
          , a = function(e) {
            var t = " ".concat(document.cookie)
              , n = " ".concat(e, "=")
              , r = null
              , a = 0
              , i = 0;
            return t.length > 0 && -1 !== (a = t.indexOf(n)) && (a += n.length,
            -1 === (i = t.indexOf(";", a)) && (i = t.length),
            r = unescape(t.substring(a, i))),
            r
        }
          , i = "../build/transpiled/common/cookie";
        window.define(i, (function() {
            var e = "undefined"
              , n = typeof t === e ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === e ? typeof module === e ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : t;
            return n && n.default || n
        }
        )),
        window.require([i])
    }
    ,
    275649: (e, t, n) => {
        "use strict";
        n.r(t),
        n.d(t, {
            get: () => s,
            getSupportBotId: () => c
        });
        var r = n(55188)
          , a = n.n(r)
          , i = n(886965)
          , o = APP.constant("amojo_bots");
        function s() {
            var e = {};
            return a().each(o, (function(t) {
                e[t.id] = {
                    id: t.id,
                    amojo_id: t.id,
                    name: t.name,
                    active: !0,
                    code: t.code,
                    avatar: t.avatar,
                    option: t.name,
                    title: t.name,
                    bot: !0,
                    group: "bots",
                    is_direct: t.direct,
                    is_integration_bot: t.is_integration_bot,
                    is_available_for_chatting: t.is_available_for_chatting
                }
            }
            )),
            e
        }
        function c() {
            var e = a().find(s(), (function(e) {
                return !(0,
                i.isCustomers)() && "amo.support" === e.code
            }
            ));
            return a().propertyOf(e)(["id"])
        }
        var u = "../build/transpiled/interface/amojo/bots";
        window.define(u, (function() {
            var e = "undefined"
              , n = typeof t === e ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === e ? typeof module === e ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : t;
            return n && n.default || n
        }
        )),
        window.require([u])
    }
    ,
    237262: (e, t, n) => {
        "use strict";
        n.r(t),
        n.d(t, {
            RIGHTS_DENIED: () => f,
            RIGHTS_FULL: () => l,
            RIGHTS_GROUP: () => d,
            RIGHTS_LINKED: () => m,
            RIGHTS_MAIN: () => p,
            canCatalog: () => A,
            canDeleteCard: () => P,
            canEditCard: () => w,
            canImport: () => S,
            canTask: () => k,
            canViewLead: () => I,
            getContactsMergedRights: () => E,
            getRights: () => _,
            groupMatesIDs: () => b,
            hasRestrictedFieldAccess: () => x,
            isAdmin: () => h,
            isFromCard: () => v,
            refreshCache: () => g,
            userID: () => y
        });
        var r = n(55188)
          , a = n.n(r)
          , i = n(886965)
          , o = n(579569)
          , s = n(866633)
          , c = null;
        function u(e, t) {
            var n = c;
            return null === n || a().isUndefined(e) || (n = a().has(n, e) ? n[e] : null,
            t && (n = a().has(n, t) ? n[t] : null)),
            n
        }
        var l = "A"
          , d = "G"
          , p = "M"
          , f = "D"
          , m = "L"
          , g = function() {
            var e, t = APP.constant("user_rights");
            if (t) {
                e = ["add", "add_company", "has_multi", "view_company", "merge", "view", "edit", "add_task", "change_status", "change_field", "reassign", "delete", "manage_tags", "import", "export", "can_save", "copy"],
                (c = c || {}).contacts = a().extend({}, c.contacts, t.contacts, t.contacts.CONTACT || {}),
                c.contacts = a().pick(c.contacts, e),
                e = ["add_company", "has_multi", "view_company", "merge", "view", "edit", "add_task", "change_status", "change_field", "reassign", "delete", "manage_tags", "add", "import", "export", "can_save", "copy"],
                c.companies = a().extend({}, c.companies, t.companies, t.contacts.COMPANY || {}),
                c.companies = a().pick(c.companies, e),
                a().each({
                    leads: ["view", "edit", "change_status", "change_field", "reassign", "add_task", "delete", "manage_tags", "add", "import", "export", "has_multi", "merge", "can_save", "can_delete"],
                    todo: ["delete", "open", "close", "reassign", "change_task_date", "change_task_type_in_list"],
                    tasks: ["edit", "delete"],
                    unsorted: ["accept", "decline", "denied"],
                    customers: ["view", "export", "edit", "add", "delete", "reassign", "has_multi", "add_task", "change_field", "manage_tags"],
                    tags: ["add"],
                    files: ["view", "delete"],
                    mail: ["add_contacts", "add_customers", "add_leads", "delete_thread", "mailing", "multi_read", "resend", "reply", "restore_thread"],
                    "contacts-trash": ["restore"],
                    "leads-trash": ["restore"],
                    "todo-trash": ["restore"],
                    "files-trash": ["restore"],
                    users: ["change_group", "change_role", "deactivate", "activate", "delete", "email_confirm"],
                    helpbot: ["delete", "activate", "deactivate"],
                    helpbot_dataset: ["delete"],
                    reply_templates: ["delete"],
                    broadcasting_scheduled: ["delete", "copy"],
                    broadcasting_in_progress: ["stop"],
                    broadcasting_draft: ["delete"],
                    broadcasting_completed: ["delete", "copy"],
                    bots_list: ["delete", "copy", "deactivate_bot", "activate_bot", "stop_bot", "reset_bot", "export_bot"],
                    onlinechats_list: ["delete"],
                    bots_list_marketing: ["delete", "copy", "deactivate_bot", "activate_bot", "stop_bot", "reset_bot", "export_bot"],
                    operday_report: ["delete"],
                    cleaning_rules_list: ["delete"],
                    restricted_fields: ["leads", "customers", "contacts", "companies"]
                }, (function(e, n) {
                    c[n] = a().extend({}, c[n], t[n]),
                    c[n] = a().pick(c[n], e)
                }
                )),
                c.is_admin = !!t.is_admin,
                c.is_free_user = !!t.is_free_user,
                c.mail_admin = !!t.mail_admin,
                c.duplicate_search = !!t.duplicate_search,
                c.base_rights = t.base_rights || {},
                c.status_rights = t.status_rights || {},
                c.catalog_rights = t.catalog_rights || {},
                c.catalogs = t.catalogs || {},
                c.oper_day_user_tracking = t.oper_day_user_tracking,
                c.oper_day_reports_view_access = t.oper_day_reports_view_access;
                var n = APP.constant("user");
                e = ["id", "group_mates_ids"],
                c.user = a().extend({}, c.user, a().pick(n, e)),
                c.user.id = parseInt(c.user.id)
            }
        }
          , _ = function(e, t, n) {
            var r;
            return c && !0 !== n || g(),
            null === (r = u(e, t)) && (g(),
            r = u(e, t)),
            r
        }
          , h = function() {
            return !!_("is_admin")
        }
          , y = function() {
            return _("user", "id")
        }
          , b = function() {
            return _("user", "group_mates_ids")
        }
          , v = function() {
            return APP.data.current_card && APP.data.current_card.id > 0 && APP.data.current_card.element_type > 0
        }
          , w = function() {
            return _(APP.data.current_entity, "can_save", !0) || "customers" === APP.data.current_entity && APP.constant("grant_edit")
        }
          , P = function() {
            return _(APP.data.current_entity, "can_delete", !0) || "customers" === APP.data.current_entity && APP.constant("grant_delete")
        }
          , A = function(e, t, n) {
            var r, i, o;
            return APP.constant("account").pay_type !== s.PayType.PAYMENT_TYPE_BLOCK && (h() ? o = !0 : (n = !!a().isUndefined(n) && v(),
            r = (_("catalog_rights")[t] || {})[e] || f,
            i = n ? [l, m] : [l],
            o = -1 !== a().indexOf(i, r),
            n && r === m && ("edit" === e ? o = o && w() : "delete" === e && (o = o && P()))),
            o)
        }
          , x = function(e, t, n) {
            var r = _("restricted_fields", t) || [];
            return n = n || "edit",
            !!r[e] && !1 === a().propertyOf(r)([e, n])
        }
          , k = function(e, t, n) {
            var r, s, c, u, f, m, g = t.element_type || APP.element_types.todo, y = (0,
            i.convertElementType)(g, "string"), b = null, v = !1, w = (0,
            o.current)().id;
            if (n = n || {},
            "todos" === y && (y = "tasks"),
            h())
                v = !0;
            else
                switch (s = g === APP.element_types.todo ? Number(t.responsible_user_id) : Number(n.responsible_user_id),
                g === APP.element_types.leads && (r = _("status_rights"),
                f = n.pipeline_id || 0,
                m = n.status_id || 0,
                b = a().propertyOf(r)([f, m]) || null),
                null === b && (b = _("base_rights", y)),
                b[e]) {
                case l:
                    v = !0;
                    break;
                case p:
                    v = w && w === s;
                    break;
                case d:
                    c = (0,
                    o.get)(!0)[w] || {},
                    u = (0,
                    o.get)(!0)[s] || {},
                    v = !a().isEmpty(c) && !a().isEmpty(u) && c.group === u.group
                }
            return v
        }
          , E = function() {
            var e = {};
            g();
            var t = _("contacts")
              , n = _("companies");
            return a().each(a().keys(t), (function(r) {
                e[r] = t[r] && n[r]
            }
            )),
            e
        }
          , S = function() {
            return _("leads", "import") || _("contacts", "import") || _("company", "import")
        }
          , I = function(e, t) {
            if (h())
                return !0;
            var n = _("status_rights");
            if (0 === t) {
                var r = a().keys(n);
                t = parseInt(a().first(r))
            }
            var i = a().propertyOf(n)([t, e, "view"]);
            return i === l || a().isUndefined(i)
        }
          , N = "../build/transpiled/utils/account/rights";
        window.define(N, (function() {
            var e = "undefined"
              , n = typeof t === e ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === e ? typeof module === e ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : t;
            return n && n.default || n
        }
        )),
        window.require([N])
    }
    ,
    886965: (e, t, n) => {
        "use strict";
        n.r(t),
        n.d(t, {
            checkIsInvoicesFeatureEnabled: () => M,
            checkIsProductsFeatureEnabled: () => R,
            convertElementType: () => N,
            getContactFullName: () => U,
            getEntityByTypeId: () => S,
            getEntityLangIdWithCase: () => I,
            getLangId: () => D,
            getLeadsWinlostStatuses: () => k,
            getMatchingEntity: () => w,
            getProductsCatalogId: () => j,
            getSuppliersCatalogId: () => L,
            getVersion: () => O,
            isCustomers: () => z,
            isExpired: () => W,
            isHelpbotEnabled: () => C,
            isLostStatus: () => A,
            isPartner: () => F,
            isPartnersHelpAvailable: () => K,
            isTrial: () => B,
            isTrialExpired: () => Y,
            isUnsortedStatus: () => x,
            isWonLostStatus: () => E,
            isWonStatus: () => P,
            parseLinkedType: () => T
        });
        var r = n(55188)
          , a = n.n(r)
          , i = n(866633)
          , o = n(880774)
          , s = n(500034);
        function c(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        var u = {
            win: 142,
            lost: 143
        }
          , l = APP.element_types.leads
          , d = APP.element_types.contacts
          , p = APP.element_types.companies
          , f = APP.element_types.customers
          , m = APP.element_types.transactions
          , g = APP.element_types.catalogs
          , _ = APP.element_types.tags
          , h = APP.element_types.unsorted
          , y = APP.element_types.todo
          , b = APP.element_types.catalog_elements
          , v = [{
            int: l,
            string: "leads",
            single: "lead"
        }, {
            int: d,
            string: "contacts",
            single: "contact"
        }, {
            int: p,
            string: "companies",
            single: "company"
        }, {
            int: f,
            string: "customers",
            single: "customer"
        }, {
            int: m,
            string: "transactions",
            single: "transaction"
        }, {
            int: g,
            string: "catalogs",
            single: "catalog"
        }, {
            int: _,
            string: "tags",
            single: "tag"
        }, {
            int: h,
            string: "unsorted",
            single: "unsorted"
        }, {
            int: y,
            string: "todos",
            single: "todo"
        }, {
            int: b,
            string: "catalog_elements",
            single: "catalog_element"
        }]
          , w = function(e) {
            var t;
            return e = e || APP.data.current_entity,
            a().each({
                contacts: ["companies"]
            }, (function(n, r) {
                a().contains(n, e) && (t = r)
            }
            )),
            t || e
        }
          , P = function(e) {
            return u.win === parseInt(e)
        }
          , A = function(e) {
            return u.lost === parseInt(e)
        }
          , x = function(e) {
            return APP.constant("unsorted_statuses")[e]
        }
          , k = function(e) {
            return a().isUndefined(e) ? a().values(u) : u[e]
        }
          , E = function(e) {
            return a().contains(k(), +e)
        }
          , S = function(e) {
            return a().invert(APP.element_types)[e]
        }
          , I = function(e) {
            var t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "nominative";
            return (c(t = {}, l, {
                nominative: "Lead",
                dative: "lead (dative)",
                dativeWithPreposition: "lead (dative with preposition)",
                causative: "lead (causative)",
                causativeWithPreposition: "lead (causative with preposition)",
                locative: "lead (locative)"
            }),
            c(t, d, {
                nominative: "Contact",
                dative: "contact (dative)",
                dativeWithPreposition: "contact (dative with preposition)",
                causative: "contact (causative)",
                causativeWithPreposition: "contact (causative with preposition)",
                locative: "contact (locative)"
            }),
            c(t, f, {
                nominative: "Customer",
                dative: "customer (dative)",
                dativeWithPreposition: "customer (dative with preposition)",
                causative: "customer (causative)",
                causativeWithPreposition: "customer (causative with preposition)",
                locative: "customer (locative)"
            }),
            c(t, p, {
                nominative: "Company",
                dative: "company (dative)",
                dativeWithPreposition: "company (dative with preposition)",
                causative: "company (causative)",
                causativeWithPreposition: "company (causative with preposition)",
                locative: "company (locative)"
            }),
            t)[e][n]
        }
          , N = function(e, t) {
            var n = {
                int: !1,
                string: !1,
                single: !1
            };
            if (a().isUndefined(n[t]))
                return !1;
            var r = Number(e) > APP.constant("catalog_min_id") ? APP.element_types.catalogs : e;
            return v.forEach((function(e) {
                var t = a().find(e, (function(e) {
                    return e == r
                }
                ));
                a().isUndefined(t) || (n = e)
            }
            )),
            n[t]
        }
          , T = function(e) {
            if (!e)
                throw new Error("Invalid type given: ".concat(JSON.stringify([e])));
            if (!e.id)
                throw new Error("Type id must be defined");
            if (e.type || (e.type = N(e.id, "string") || "catalog_elements"),
            a().isUndefined(e.name))
                throw new Error("Type name must be defined");
            return a().pick(e, ["id", "type", "catalog_type", "name"])
        }
          , D = function() {
            return APP.lang_id
        }
          , C = function() {
            return APP.constant("account").helpbot_enabled
        }
          , M = function() {
            var e = APP.constant("account");
            return Boolean(e && e.invoices && e.invoices.enabled)
        }
          , L = function() {
            var e = APP.constant("account");
            return e && e.suppliers && e.suppliers.catalog_id || null
        }
          , j = function() {
            var e = APP.constant("account");
            return e && e.products && e.products.catalog_id || null
        }
          , R = function() {
            var e = APP.constant("account");
            return e && e.products && e.products.enabled || !1
        }
          , O = function() {
            return APP.constant("account").version
        }
          , U = function(e) {
            var t = APP.constant("account").is_contact_name_display_order_first ? a().compact([e["contact[FIRST_NAME]"], e["contact[LAST_NAME]"]]).join(" ") : a().compact([e["contact[LAST_NAME]"], e["contact[FIRST_NAME]"]]).join(" ");
            return t || (t = e["contact[NAME]"]),
            (0,
            o.contactName)(t)
        }
          , z = function() {
            return "customers" === APP.constant("account").subdomain || "customersus" === APP.constant("account").subdomain
        }
          , F = function() {
            return "Partner" === APP.constant("account").tariffName
        }
          , B = function() {
            return APP.constant("account").pay_type === i.PayType.PAYMENT_TYPE_TRIAL
        }
          , W = function() {
            return APP.constant("account").pay_type === i.PayType.PAYMENT_TYPE_BLOCK
        }
          , Y = function() {
            return W && APP.constant("account").tariffName === (0,
            o.i18n)("REPORT_ACCOUNT_INFO_TRIAL")
        }
          , K = function() {
            return (0,
            s.isFeatureAvailable)(s.Features.PARTNERS_HELP_AVAILABLE)
        }
          , V = "../build/transpiled/utils/account/system";
        window.define(V, (function() {
            var e = "undefined"
              , n = typeof t === e ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === e ? typeof module === e ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : t;
            return n && n.default || n
        }
        )),
        window.require([V])
    }
    ,
    579569: (e, t, n) => {
        "use strict";
        n.r(t),
        n.d(t, {
            add: () => I,
            addGroup: () => M,
            changeUserGroup: () => L,
            current: () => S,
            deleteGroup: () => C,
            fetch: () => O,
            first: () => R,
            get: () => P,
            getByAmoJoId: () => E,
            getGroupName: () => N,
            getLangTranslation: () => w,
            getUserName: () => T,
            isUserOnline: () => B,
            remove: () => k,
            saveGroupChange: () => j,
            set: () => x,
            updateAmoJoHash: () => A,
            updateGroupName: () => D,
            updateOnline: () => F
        });
        var r = n(55188)
          , a = n.n(r)
          , i = n(661533)
          , o = n.n(i)
          , s = n(987081)
          , c = n(128508)
          , u = n(880774)
          , l = n(678640)
          , d = n(598701)
          , p = n(275649)
          , f = new s.Subject
          , m = new s.ReplaySubject(1)
          , g = o().extend(!0, {}, APP.constant("managers") || {})
          , _ = o().extend(!0, {}, APP.constant("free_users") || {})
          , h = o().extend(!0, {}, APP.constant("user") || {})
          , y = o().extend(!0, {}, APP.constant("groups") || {})
          , b = {}
          , v = {
            en: "English",
            es: "Spanish",
            pt: "Portuguese",
            id: "Indonesian",
            tr: "Turkish",
            ru: "Russian"
        }
          , w = function(e) {
            return e ? v[e] : v[APP.lang_id]
        };
        function P(e) {
            var t, n = {}, r = {}, i = parseInt(e);
            if (i > 0)
                return (t = g[i] || _[i]) ? a().extend({}, t) : t;
            switch (a().each(g, (function(e, t) {
                e.active ? n[t] = e : r[t] = e
            }
            )),
            !0) {
            case !0 === e:
            case "all" === e:
                return o().extend(!0, {}, n, _);
            case "free" === e:
                return o().extend(!0, {}, _);
            case "inactive" === e:
                return o().extend(!0, {}, r);
            case "everyone" === e:
                return o().extend(!0, {}, g, _);
            case "groups" === e:
                return o().extend(!0, {}, y);
            case "clean_groups" === e:
                return a().reduce(P("groups"), (function(e, t, n) {
                    var r = parseInt(n.replace("group_", ""));
                    return ("group_free_users" === n || r >= 0) && e.push({
                        id: "group_free_users" === n ? "free_users" : r,
                        option: a().escape(t)
                    }),
                    e
                }
                ), []);
            default:
                return o().extend(!0, {}, n)
            }
        }
        function A() {
            b = a().chain(P(!0)).reduce((function(e, t) {
                return t.amojo_id && (e[t.amojo_id] = t),
                e
            }
            ), {}).value(),
            a().extend(b, a().reduce((0,
            p.get)(), (function(e, t) {
                return ("amojo_bot_default" === t.code || t.is_integration_bot) && (e[t.amojo_id] = t),
                e
            }
            ), {}))
        }
        function x(e) {
            return a().extend(g, e),
            APP.constant("managers", g),
            A(),
            P()
        }
        function k(e) {
            e = a().map(e, (function(e) {
                return +e
            }
            ));
            var t = {
                paid: a().chain(g).keys().map((function(e) {
                    return +e
                }
                )).intersection(e).value(),
                free: a().chain(_).keys().map((function(e) {
                    return +e
                }
                )).intersection(e).value()
            };
            return a().isEmpty(t.paid) || (g = a().omit(g, t.paid),
            APP.constant("managers", g)),
            a().isEmpty(t.free) || (_ = a().omit(_, t.free),
            APP.constant("free_users", _)),
            A(),
            a().extend({}, g, _)
        }
        function E() {
            return a().extend({}, b)
        }
        function S(e, t) {
            var n = h;
            return a().isUndefined(e) || (t ? (n[e] = t,
            APP.constant("user")[e] = t) : n = n[e]),
            n
        }
        function I(e) {
            var t = {}
              , n = g
              , r = "managers";
            "Y" !== e.is_free && "Y" !== e.free_user || (n = _,
            r = "free_users"),
            t[e.id] = a().clone(e),
            n[e.id] && (t[e.id].online = n[e.id].online),
            a().extend(n, t),
            APP.constant(r, n),
            A()
        }
        function N(e) {
            return "group_free_users" === e ? (0,
            u.i18n)("Free users") : (e = (a().isNumber(e) ? e : e || "").toString().replace(/[^0-9]+/g, ""),
            P("groups")["group_".concat(e)] || (0,
            u.i18n)("Group deleted"))
        }
        function T(e) {
            var t = P(e) || {};
            return 0 === parseInt(e) ? (0,
            u.i18n)("Bot") : t.title || (0,
            u.i18n)("User deleted")
        }
        function D(e, t) {
            var n = "group_".concat(e)
              , r = {};
            P("groups")[n] && t && (r[n] = t,
            a().extend(y, r))
        }
        function C(e) {
            P("groups")["group_".concat(e)] && (y = a().omit(y, "group_".concat(e)))
        }
        function M(e) {
            var t = {};
            a().isObject(e) && e.id && e.name && (t["group_".concat(e.id)] = e.name,
            a().extend(y, t))
        }
        function L(e, t) {
            var n = P("everyone")[e];
            "Y" === n.free_user && k([e]),
            a().extend(n, {
                group: "group_".concat(t),
                free_user: "N"
            }),
            I(n)
        }
        function j(e) {
            return new Promise((function(t, n) {
                e.group_new === e.group_old || "free" === e.group_new ? t() : o().ajax({
                    url: "/ajax/v1/users/set",
                    headers: {
                        "X-Session-Token": APP.constant("session_token")
                    },
                    type: "POST",
                    dataType: "json",
                    data: {
                        request: {
                            users: {
                                change_group: {
                                    group_id: e.group_new,
                                    id: [e.userID]
                                }
                            }
                        }
                    }
                }).done((function(r) {
                    var i = e.userID
                      , o = P("everyone")[i];
                    (0,
                    l.hasKeys)(r, ["response", "users", "set", "change_group", i, "result"]) ? ("Y" === o.free_user && k([i]),
                    a().extend(o, {
                        active: !0
                    }),
                    I(o),
                    L(i, e.group_new),
                    t()) : n()
                }
                )).fail(n)
            }
            ))
        }
        function R() {
            return a().values(P())[0]
        }
        function O() {
            return m.asObservable()
        }
        function U(e) {
            return e
        }
        function z() {
            return s.from(o().ajaxPromisify({
                url: "/ajax/get_managers_with_group/",
                type: "POST",
                data: {
                    free_users: "Y"
                },
                dataType: "json"
            }).then((function(e) {
                return y = e.groups,
                e
            }
            )))
        }
        function F(e, t) {
            var n;
            a().each(e, (function(e) {
                n = g[e] || _[e],
                a().isUndefined(n) || (n.online = t,
                b[n.amojo_id] && (b[n.amojo_id].online = t))
            }
            ))
        }
        function B(e) {
            return !!(g[e] || {}).online || !!(_[e] || {}).online
        }
        (0,
        d.onPageFullyLoaded)((function() {
            s.merge(f, s.fromEvent(o()(document), "loaded_users:null")).pipe(c.startWith(!0), c.switchMap(z), c.map(U)).subscribe(m)
        }
        )),
        A();
        var W = "../build/transpiled/utils/account/users";
        window.define(W, (function() {
            var e = "undefined"
              , n = typeof t === e ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === e ? typeof module === e ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : t;
            return n && n.default || n
        }
        )),
        window.require([W])
    }
    ,
    880774: (e, t, n) => {
        "use strict";
        n.r(t),
        n.d(t, {
            capitalize: () => ne,
            catalogElementName: () => Z,
            chainedListValue: () => Q,
            changeKeysCase: () => B,
            cleanXSSContent: () => C,
            contactName: () => J,
            convertToSnake: () => ce,
            currency: () => O,
            customerName: () => X,
            escapeRegExp: () => E,
            escapeString: () => S,
            escapeTags: () => k,
            formatBillingCurrency: () => U,
            formatDate: () => w,
            formatFileSize: () => v,
            getDefaultAvatar: () => ae,
            getElementUrl: () => L,
            getEntityLang: () => H,
            getEscapedEntity: () => I,
            getMoment: () => ee,
            getNumberTypeUnsorted: () => re,
            hex2rgb: () => V,
            hex2rgba: () => G,
            i18n: () => Y,
            is12HourFormat: () => P,
            isDarkColor: () => $,
            leadName: () => q,
            mergeChatsMessages: () => se,
            numeralWord: () => M,
            parseNum: () => D,
            phone: () => b,
            plugPrice: () => z,
            prettyNumber: () => j,
            reductNumericValue: () => F,
            removeAllSymbols: () => ie,
            replaceAll: () => R,
            replaceLangPlaceholders: () => W,
            sprintf: () => oe,
            stripTags: () => N,
            time: () => x,
            toTitleCase: () => K,
            transliterate: () => h,
            transliterateFileName: () => y,
            trim: () => T,
            twigFilterDate: () => A,
            unescapeHTML: () => te
        });
        var r = n(55188)
          , a = n.n(r)
          , i = n(161320)
          , o = n.n(i)
          , s = n(698302)
          , c = n.n(s)
          , u = n(971719)
          , l = n(228198)
          , d = n.n(l)
          , p = n(577486)
          , f = n(678640)
          , m = n(534571)
          , g = n(661533)
          , _ = new (d().AsYouTypeFormatter)(APP.constant("account").country)
          , h = m.default
          , y = function(e, t) {
            return h(e).replace(/\s/gi, "_").replace(/[^\w\s]/gi, "").toLowerCase() + (t ? ".".concat(t) : "")
        }
          , b = function(e) {
            var t, n, r = e;
            if ((0,
            f.isPhoneValid)(e))
                for (t = e.replace(/[\s-]/g, ""),
                _.clear(),
                n = 0; n < t.length; n++)
                    r = _.inputDigit(t[n]);
            return r
        }
          , v = function(e) {
            var t;
            if (e = parseInt(e),
            a().isNaN(e))
                return "";
            if (t = "ru" === APP.lang_id ? [" Байт", " КБ", " МБ", " ГБ", " ТБ", " ПБ"] : [" Bytes", " KB", " MB", " GB", " TB", " PB"],
            0 === e)
                return e + t[0];
            var n = parseInt(Math.floor(Math.log(e) / Math.log(1024)));
            return e /= Math.pow(1024, n),
            (n > 1 ? Math.round(100 * e) / 100 : Math.round(e)) + (t[n] ? t[n] : "")
        }
          , w = function(e, t, n, r) {
            var a, i, s = [], c = o().utc(), u = "".concat(APP.system.format.date.date, " ").concat(APP.system.format.date.time);
            return e ? "today" === e || "tomorrow" === e ? (r || c.set("hour", 23).set("minute", 59),
            c.add("tomorrow" === e ? 1 : 0, "days"),
            a = o()().tz(APP.system.timezone).set("year", c.get("year")).set("month", c.get("month")).set("date", c.get("date")).set("hour", c.get("hour")).set("minute", c.get("minute")),
            "timestamp" === t ? a : a.format(u)) : (i = "now" === e ? o()() : parseFloat(e).toString() === e.toString() ? o().unix(e).tz(APP.system.timezone) : o()(e, u),
            "time" !== t && (i.isSame(new Date, "day") && !0 !== n ? s.push(i.format(o()().localeData().calendar("today"))) : i.isSame(o()().add(1, "days"), "day") && !0 !== n ? s.push(i.format(o()().localeData().calendar("tomorrow"))) : i.isSame(o()().subtract(1, "days"), "day") && !0 !== n ? s.push(i.format(o()().localeData().calendar("yesterday"))) : s.push(i.format(APP.system.format.date.date))),
            "date" !== t && ("23:59" === i.format("HH:mm") && !0 !== n ? s.push(APP.lang.tasks_all_day.toString()) : s.push(i.format(APP.system.format.date.time))),
            s.join(" ")) : ""
        }
          , P = function() {
            return 12 === APP.system.format.time
        }
          , A = function(e, t) {
            var n, r;
            if (!e)
                return "";
            if ("now" === e ? n = o()() : "tomorrow" === e ? n = o()().add(1, "days") : (n = "string" == typeof e && parseInt(e).toString() !== e ? o()(e, "".concat(APP.system.format.date.date, " ").concat(APP.system.format.date.time)) : o().utc(e, "X").tz(APP.system.timezone)).isValid() || (n = "short" === t ? o()(e, APP.system.format.date.date) : "full_date_dash" === t ? o()(e, "YYYY-MM-DD HH:mm:ss") : "date_dash" === t ? o()(e, "YYYY-MM-DD") : o()(e, "DD.MM.YYYY HH:mm:ss")),
            t) {
                if (r = APP.system.format.date,
                a().contains(["full_date", "full_date_dash"], t) && (t = "full"),
                "date_dash" === t && (t = "date"),
                "timestamp" === t)
                    return n.format("X");
                if ("date_short" === t && n.format("YYYY") !== o()().format("YYYY") && (t = "short"),
                "short" === t)
                    return n.format(r.date);
                if (r[t])
                    return n.format(r[t])
            }
            return n.calendar()
        }
          , x = function(e, t) {
            if (t = t || 0,
            !e)
                return "";
            var n, r = Math.floor(e / 60);
            return e < 60 ? (r = "00",
            n = parseInt(e)) : (r = parseInt(r),
            n = parseInt(e - 60 * r),
            r < 10 ? r = "0".concat(r) : r > 100 && 1 !== t && (r = x(r, 1))),
            r + (n < 10 ? ":0" : ":") + n
        }
          , k = function(e) {
            return (e || "").toString().replace(/[<]/gi, "&lt;").replace(/[>]/gi, "&gt;")
        }
          , E = function(e) {
            return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
        }
          , S = function(e) {
            return e.replace(/[&<>"']/g, (function(e) {
                return e.startsWith("&") ? e : (t = {
                    "&": "&amp;",
                    "<": "&lt;",
                    ">": "&gt;",
                    '"': "&quot;",
                    "'": "&apos;"
                },
                e.replace(/[&<>"']/g, (function(e) {
                    return t[e]
                }
                )));
                var t
            }
            ))
        }
          , I = function(e) {
            switch (!0) {
            case a().isString(e):
                return (0,
                f.isStringUnescaped)(e) ? S(e) : e;
            case a().isArray(e):
                return a().map(e, I);
            case a().isObject(e):
                return a().mapObject(e, I);
            default:
                return e
            }
        }
          , N = function(e) {
            return (e || "").toString().replace(/<\/?[^>]+>/gi, "")
        }
          , T = function(e) {
            return (e || "").toString().replace(/^\s+|\s+$/g, "")
        }
          , D = function(e) {
            var t = parseFloat(a().isString(e) ? e.replace(",", ".") : e);
            return isNaN(t) ? 0 : t
        }
          , C = function(e) {
            var t = {
                onIgnoreTagAttr: function(e, t, n) {
                    if ("style" === t)
                        return t + '="' + (0,
                        u.escapeAttrValue)(n) + '"'
                }
            };
            return (0,
            u.filterXSS)(e, t)
        }
          , M = function(e, t, n) {
            var r, i, o;
            if (!t)
                return "";
            var s = t.toString().split(",");
            if ("ru" === APP.lang_id)
                switch (o = (i = Math.abs(e) % 100) % 10,
                !0) {
                case "all" === e:
                    r = s[3];
                    break;
                case i > 10 && i < 20:
                    r = s[2];
                    break;
                case o > 1 && o < 5:
                    r = s[1];
                    break;
                case 1 === o:
                    r = s[0];
                    break;
                default:
                    r = s[2]
                }
            else
                switch (!0) {
                case "all" === e:
                    r = a().isEmpty(s[2]) ? s[1] : s[2];
                    break;
                case 1 !== e:
                    r = s[1];
                    break;
                default:
                    r = s[0]
                }
            return !0 === n && (r = "".concat(e, " ").concat(r)),
            r
        }
          , L = function(e, t) {
            return "/".concat(a().invert(APP.element_types)[e], "/detail/").concat(t)
        }
          , j = function(e) {
            var t, n, r = "", i = !1, o = (e = null === e || a().isUndefined(e) ? 0 : "".concat(e)).length;
            if (!o)
                return e;
            for ((t = o % 3) && (i = !0),
            n = 1; n <= o; n++)
                r += e[n - 1],
                n < o && (i ? t === n && (r += " ",
                i = !1) : n % 3 - t == 0 && (r += " "));
            return r
        }
          , R = function(e, t, n) {
            return (n || "").replace(new p.UnsafeRegExp(e,"g"), t)
        }
          , O = function(e, t, n, r, i) {
            var o, s, u, l = "", d = APP.lang.currency_class.reductions, p = 0, f = a().propertyOf(APP.constant("currencies_used"));
            n = n || 0,
            a().isString(r) && f(r) && (r = f(r)),
            u = a().extend({}, a().pick(APP.system.locale, "currency_symbol", "currency_pattern", "mon_thousands_sep", "mon_decimal_point"), r || {});
            var m = !a().isUndefined(r) && a().isString(r) ? r : u.currency_symbol;
            if (t = !a().isUndefined(t) && t ? "" : m,
            (i = i ? parseInt(i) : 0) >= 3) {
                switch (o = "".concat(parseInt(e)).length,
                !0) {
                case o > i + 6:
                    p = 9,
                    l = " ".concat(d.billions);
                    break;
                case o > i + 3:
                    p = 6,
                    l = " ".concat(d.millions);
                    break;
                case o > i:
                    p = 3,
                    l = " ".concat(d.thousands)
                }
                p > 0 && (e /= Math.pow(10, p))
            }
            return e = parseFloat(e),
            e = Math.round(e * Math.pow(10, n)) / Math.pow(10, n),
            s = u.currency_pattern,
            l && (s = s.replace("%v", "%v".concat(l))),
            c().formatMoney(e, {
                symbol: t,
                precision: a().isUndefined(n) ? 0 : n,
                thousand: u.mon_thousands_sep,
                decimal: u.mon_decimal_point,
                format: {
                    pos: s,
                    neg: "-".concat(s),
                    zero: s
                }
            })
        }
          , U = function(e, t) {
            var n = "%v %s"
              , r = a().propertyOf(APP.constant("currencies_used"));
            a().isString(t) && r(t) && (t = r(t));
            var i = a().extend({}, a().pick(APP.system.locale, "currency_symbol", "currency_pattern", "mon_thousands_sep", "mon_decimal_point"), t || {})
              , o = !a().isUndefined(t) && a().isString(t) ? t : i.currency_symbol;
            return e = parseFloat(e),
            c().formatMoney(e, {
                symbol: o,
                precision: 0,
                thousand: " ",
                decimal: ".",
                format: {
                    pos: n,
                    neg: "-".concat(n),
                    zero: n
                }
            })
        }
          , z = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 3
              , t = "".concat(O(new Array(++e).join("1")));
            return R("1", "0", t)
        }
          , F = function() {
            var e, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n = t.value || 0, r = t.max_value || 99999999, a = APP.lang.currency_class.reductions, i = "", o = "", s = [], c = 0, u = APP.system.locale.currency_symbol;
            if (n) {
                if (e = o = j(n),
                s = o.split(" "),
                n > r && (((c = +(n / Math.pow(1e3, s.length - 1)).toFixed(1)) == +s[0] || t.round_value) && (c = c.toFixed()),
                e = c,
                !t.is_plain_number))
                    switch (s.length) {
                    case 2:
                        i = a.thousands;
                        break;
                    case 3:
                        i = a.millions;
                        break;
                    case 4:
                        i = a.billions;
                        break;
                    default:
                        e = o
                    }
                i && (e += " ".concat(i))
            } else
                e = "0";
            return t.is_currency && (e += " ".concat(u)),
            e
        }
          , B = function(e, t) {
            var n = {};
            return a().each(e, (function(e, r) {
                var i = "upper" === t ? r.toString().toUpperCase() : r.toString().toLowerCase();
                a().isObject(e) ? n[i] = B(e, t) : a().isArray(e) ? n[i] = a().map(e, (function(e) {
                    B(e, t)
                }
                )) : n[i] = e
            }
            )),
            n
        }
          , W = function(e) {
            return e.replace(/{{.+?}}/g, (function(e) {
                var t = e.includes("brand_name") ? APP.constant("global_brand_name") : APP.constant("entity_names");
                return a().isUndefined(t[e]) ? e : t[e]
            }
            ))
        }
          , Y = function(e) {
            var t = e;
            return a().isString(e) && (e = APP.lang[e] || e).indexOf("{{") > -1 && (e = W(e),
            APP.lang[t] = e),
            e
        }
          , K = function(e) {
            return (e || "").replace(/(\w)(\w*)/g, (function(e, t, n) {
                return t.toUpperCase() + (null === n ? "" : n)
            }
            ))
        }
          , V = function(e) {
            return [(e = String(e).lastIndexOf("#") > -1 ? e.replace(/#/, "0x") : "0x".concat(e)) >> 16, (65280 & e) >> 8, 255 & e]
        }
          , G = function(e, t) {
            var n = V(e);
            return "rgba(".concat(n[0], ", ").concat(n[1], ", ").concat(n[2], ", ").concat(t, ")")
        }
          , $ = function(e, t, n) {
            var r;
            return n = n || .5,
            "transparent" !== e && (a().isEmpty(t) && (t = V(e)),
            r = 299 * t[0] + 587 * t[1] + 114 * t[2],
            (r /= 255e3) < n)
        }
          , H = function(e) {
            switch (parseInt(e)) {
            case 2:
                return Y("Lead");
            case 1:
                return Y("Contact");
            case 3:
                return Y("Company");
            case 12:
                return Y("Customer");
            case 10:
                return Y("List");
            case 24:
                return Y("Talk");
            case 4:
                return Y("Task")
            }
            return e
        }
          , q = function(e, t) {
            return e || Y("Lead #") + t
        }
          , X = function(e, t) {
            return e || Y("Customer #") + t
        }
          , J = function(e) {
            return e || "..."
        }
          , Z = function(e, t, n) {
            var r = a().propertyOf(APP.constant("account"))(["invoices", "catalog_id"]);
            return parseInt(n) === parseInt(r) ? e || "".concat(Y("Invoice"), " #").concat(t) : e
        }
          , Q = function(e) {
            return e = a().sortBy(e, "position"),
            a().pluck(e, "name").join(" / ")
        }
          , ee = function(e) {
            var t, n;
            return "string" == typeof e && parseInt(e) != e ? (n = e.match(/^\d{4}-\d{2}-\d{2}/) ? "YYYY-MM-DD HH:mm:ss" : "".concat(APP.system.format.date.date, " ").concat(APP.system.format.date.time),
            t = o()(e, n)) : t = o().unix(e),
            t
        }
          , te = function(e) {
            return g("<div/>").html(e).text()
        }
          , ne = function(e) {
            return e ? e.charAt(0).toUpperCase() + e.substr(1) : ""
        }
          , re = function(e) {
            return {
                sip: 1,
                mail: 2,
                forms: 3,
                chats: 4
            }[e]
        }
          , ae = function(e) {
            var t = parseInt(e) || 0;
            return "/frontend/images/interface/avatars/".concat(Math.abs(t % 10) + 1, ".jpeg")
        }
          , ie = function(e) {
            return (e || "").replace(/[^a-zA-Z0-9 ]/g, "")
        }
          , oe = function(e) {
            for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
                n[r - 1] = arguments[r];
            return e.replace(/%s/g, (function() {
                return n.shift()
            }
            ))
        }
          , se = function(e) {
            var t, n = 0;
            return a().each(a().values(e), (function(e, r, i) {
                var o = e.date - n;
                return e.text = a().isArray(e.text) ? e.text : [e.text],
                n = e.date,
                e.text = a().map(e.text, (function(e) {
                    return {
                        type: "text",
                        text: e
                    }
                }
                )),
                e.links ? e.links.links ? e.links = [e.links] : e.links = a().values(e.links) : e.links = [],
                e.data = e.links.concat(e.text),
                o >= 60 ? (e.prepend_date = !0,
                void (t = r)) : t && i[t] && i[t].manager == e.manager && o <= 10 ? (Array.prototype.push.apply(i[t].text, e.text),
                Array.prototype.push.apply(i[t].links, e.links),
                Array.prototype.push.apply(i[t].data, e.data),
                void (e.hide = !0)) : void (t = r)
            }
            ))
        }
          , ce = function(e) {
            if ("object" != typeof e || null === e)
                return e;
            var t = Array.isArray(e) ? [] : {};
            for (var n in e)
                Object.prototype.hasOwnProperty.call(e, n) && (t[n.replace(/[A-Z]/g, (function(e) {
                    return "_".concat(e.toLowerCase())
                }
                ))] = "object" == typeof e[n] ? ce(e[n]) : e[n]);
            return t
        }
          , ue = "../build/transpiled/utils/format/index";
        window.define(ue, (function() {
            var e = "undefined"
              , n = typeof t === e ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === e ? typeof module === e ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : t;
            return n && n.default || n
        }
        )),
        window.require([ue])
    }
    ,
    534571: (e, t, n) => {
        "use strict";
        n.r(t),
        n.d(t, {
            default: () => a
        });
        var r = {
            translit: {
                а: "a",
                б: "b",
                в: "v",
                г: "g",
                д: "d",
                е: "e",
                ё: "e",
                ж: "zh",
                з: "z",
                и: "i",
                й: "i",
                к: "k",
                л: "l",
                м: "m",
                н: "n",
                о: "o",
                п: "p",
                р: "r",
                с: "s",
                т: "t",
                у: "u",
                ф: "f",
                х: "kh",
                ц: "tc",
                ч: "ch",
                ш: "sh",
                щ: "shch",
                ъ: "",
                ы: "y",
                ь: "",
                э: "e",
                ю: "iu",
                я: "ia"
            },
            punto: {
                й: "q",
                ц: "w",
                у: "e",
                к: "r",
                е: "t",
                н: "y",
                г: "u",
                ш: "i",
                щ: "o",
                з: "p",
                х: "[",
                ъ: "]",
                ф: "a",
                ы: "s",
                в: "d",
                а: "f",
                п: "g",
                р: "h",
                о: "j",
                л: "k",
                д: "l",
                ж: ";",
                э: "'",
                я: "z",
                ч: "x",
                с: "c",
                м: "v",
                и: "b",
                т: "n",
                ь: "m",
                б: ",",
                ю: "."
            }
        };
        function a(e, t) {
            return (t = r[t]) || (t = r.translit),
            (e || "").replace(/([а-яё])/gi, (function(e) {
                var n = e.toLowerCase()
                  , r = t[n];
                return void 0 === r ? e : n === e ? r : r.substring(0, 1).toUpperCase() + r.substring(1)
            }
            ))
        }
        var i = "../build/transpiled/utils/format/transliterate";
        window.define(i, (function() {
            var e = "undefined"
              , n = typeof t === e ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === e ? typeof module === e ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : t;
            return n && n.default || n
        }
        )),
        window.require([i])
    }
    ,
    678640: (e, t, n) => {
        "use strict";
        n.r(t),
        n.d(t, {
            EMAIL_REGEX: () => d,
            IS_DIGITS_REGEX: () => b,
            PROTOCOL_REGEX: () => p,
            cleanResponse: () => F,
            endsWith: () => S,
            getDigitsOnly: () => $,
            getWidgetCallbacks: () => V,
            hasKeys: () => U,
            isBase64: () => K,
            isCharacterEventKeyPress: () => z,
            isDev: () => W,
            isDigit: () => A,
            isKommoPasswordValid: () => D,
            isNegativeNumber: () => R,
            isOnlyLatinCharNum: () => L,
            isOnlyLetters: () => j,
            isPhoneValid: () => T,
            isRuPasswordValid: () => C,
            isStringUnescaped: () => O,
            isV3Design: () => Y,
            isValidEmail: () => I,
            isValidEmailForSending: () => N,
            isValidIdpCertificate: () => M,
            isValidPinfl: () => G,
            isValidSimpleUrl: () => k,
            isValidUrl: () => x,
            isValidUrlProtocol: () => E,
            replaceBoolean: () => B
        });
        var r, a, i = n(55188), o = n.n(i), s = n(544621), c = n.n(s), u = n(661533), l = void 0, d = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,15}(?:\.[a-z]{2,15})?)$/i, p = /^(?:(?:https?|ftp):\/\/)(.+)?$/i, f = /^((https?|ftp):\/\/)?(([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3})|(([\w\d-_.]+)\.([\w\d]{2,}))|(localhost))([?#/].*)?$/, m = /\w+(?=\.(?:amocrm2\.saas|kommo2\.com))/, g = /^([\w-+]+(?:\.[\w-]+)*)(\.)?@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,11}(?:\.[a-z]{2,11})?)$/i, _ = RegExp("^(?=.*[\\p{Ll}])(?=.*[\\p{Lu}])(?=.*\\d)(?=.*[\\W_]).{8,}$", "u"), h = /^-----BEGIN CERTIFICATE-----[\s\S]*-----END CERTIFICATE-----$/, y = /^[a-zA-Z0-9!@#$%^&*()_+=[\]{}|\\;',./?:\-`~<>]+$/, b = /\d/g, v = RegExp("[\\p{L}]", "u"), w = [7, 3, 1, 7, 3, 1, 7, 3, 1, 7, 3, 1, 7], P = /^-\d+(\.\d+)?$/, A = function(e) {
            return /^\d+$/.test(e)
        }, x = function(e) {
            return c()({
                exact: !0
            }).test(e)
        }, k = function(e) {
            return f.test(e)
        }, E = function(e) {
            return p.test(e)
        }, S = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ""
              , t = arguments.length > 1 ? arguments[1] : void 0;
            return -1 !== e.indexOf(t, e.length - t.length)
        }, I = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
            return d.test(e.toString().trim())
        }, N = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
            return g.test(e.toString().trim())
        }, T = function(e) {
            return /^\+?[\d]+$/.test(e)
        }, D = function(e) {
            return _.test(e)
        }, C = function(e) {
            return e.length >= 6
        }, M = function(e) {
            return h.test(e)
        }, L = function(e) {
            return y.test(e)
        }, j = function(e) {
            return v.test(e)
        }, R = function(e) {
            return P.test(e)
        }, O = function(e) {
            var t = e.match(/(&[a-z]+;|<[^>]+>)/g);
            return !!t && o().some(t, (function(e) {
                return !(e.startsWith("&") || "<" === e || ">" === e)
            }
            ))
        }, U = function(e, t) {
            var n = !0
              , r = o().clone(e);
            return o().each(t, (function(e) {
                (n = n && o().has(r, e)) && (r = o().clone(r[e]))
            }
            )),
            n
        }, z = function(e) {
            return "number" == typeof e.which && e.which > 0 && !e.ctrlKey && !e.metaKey && !e.altKey && 8 !== e.which
        }, F = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return e.responseJSON && (e = e.responseJSON),
            e.response && (e = e.response),
            e
        }, B = function(e) {
            return o().isBoolean(e) ? e ? "Y" : "N" : o().isArray(e) ? o().map(e, (function(e) {
                return B(e)
            }
            ), l) : o().isObject(e) ? o().mapObject(e, (function(e) {
                return B(e)
            }
            ), l) : e
        }, W = function() {
            var e = o().first(window.location.origin.match(m));
            return "dev" === APP.environment || "main6" === e
        }, Y = (r = ["leads", "customers", "contacts", "dashboard", "todo", "catalogs", "mail", "widgetsSettings", "files", "events", "settings"],
        a = ["settings-users", "settings-communications"],
        function() {
            return o().include(r, APP.getBaseEntity()) || o().include(a, APP.data.current_entity)
        }
        ), K = function(e) {
            return !!e.match(/^\s*data:([a-z]+\/[a-z]+(;[a-z-]+=[a-z-]+)?)?(;base64)?,[a-z0-9!$&',()*+,;=\-._~:@/?%\s]*\s*$/i)
        }, V = function(e) {
            if (APP.widgets.list && APP.widgets.list[e] && APP.widgets.list[e].callbacks)
                return APP.widgets.list[e].callbacks
        }, G = function(e) {
            var t = u.trim(e);
            return 14 === t.length && !o().isNaN(Number(t)) && o().reduce(w, (function(e, n, r) {
                return e + n * Number(t[r])
            }
            ), 0) % 10 === parseInt(t.charAt(13))
        }, $ = function(e) {
            return e.match(b) || []
        }, H = "../build/transpiled/utils/tester";
        window.define(H, (function() {
            var e = "undefined"
              , n = typeof t === e ? typeof __WEBPACK_AMD_DEFINE_RESULT__ === e ? typeof module === e ? void 0 : module.exports : __WEBPACK_AMD_DEFINE_RESULT__ : t;
            return n && n.default || n
        }
        )),
        window.require([H])
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
        e._sentryDebugIds[t] = "8e6fa0aa-a11d-4e86-a320-bb9b97dcb039",
        e._sentryDebugIdIdentifier = "sentry-dbid-8e6fa0aa-a11d-4e86-a320-bb9b97dcb039")
    } catch (e) {}
}();
//# sourceMappingURL=76846.2651956106b3531a6f4f.js.map
