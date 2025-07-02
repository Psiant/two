(window.webpackChunk = window.webpackChunk || []).push([[2348, 19519], {
    702348: (e, t, i) => {
        var n, d;
        n = [i(460159), i(898296)],
        void 0 === (d = function(e) {
            !function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e),
                    this.setBlocks({
                        body: twig.bind(this.block_body, this),
                        body_no_items_message: twig.bind(this.block_body_no_items_message, this)
                    })
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(t) {
                    return e._get("interface/list/inner.twig")
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    this.getParent(t).render_(e, t, twig.extend({}, this.getBlocks(), i))
                }
                ,
                t.prototype.block_body = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    i._parent = i;
                    var d = "items"in i ? i.items : ""
                      , s = {
                        index0: 0,
                        index: 1,
                        first: !0
                    };
                    if (twig.countable(d)) {
                        var o = twig.count(d);
                        s.revindex0 = o - 1,
                        s.revindex = o,
                        s.length = o,
                        s.last = 1 === o
                    }
                    twig.forEach(d, (function(n, d) {
                        i._key = d,
                        i.item = n,
                        new (e._get("interface/list/item.twig"))(this.env_).render_(t, twig.extend({}, i, {
                            is_first: twig.attr(s, "first"),
                            is_last: twig.attr(s, "last"),
                            page: "page"in i ? i.page : "",
                            item: "item"in i ? i.item : "",
                            fields: "fields"in i ? i.fields : ""
                        })),
                        ++s.index0,
                        ++s.index,
                        s.first = !1,
                        s.length && (--s.revindex0,
                        --s.revindex,
                        s.last = 0 === s.revindex0)
                    }
                    ), this)
                }
                ,
                t.prototype.block_body_no_items_message = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    e.append('<div class="list__no-items" style="'),
                    "width"in t && t.width && (e.append("min-width: "),
                    e.append(twig.filter.escape(this.env_, "width"in t ? t.width : "", "light_escape", null, !0)),
                    e.append("px;")),
                    e.append(" "),
                    twig.filter.length(this.env_, "items"in t ? t.items : "") && e.append("display: none;"),
                    e.append('"><p style="color:#f37575;margin-bottom:5px;">'),
                    e.append(twig.filter.escape(this.env_, twig.attr("lang"in t ? t.lang : "", "list_no_threads"), "light_escape", null, !0)),
                    e.append(".</p></div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_mail_inner_inner"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/mail_inner/inner", t)
            }()
        }
        .apply(t, n)) || (e.exports = d)
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
        e._sentryDebugIds[t] = "85e95d34-514c-4dd1-a2f5-93d18198275a",
        e._sentryDebugIdIdentifier = "sentry-dbid-85e95d34-514c-4dd1-a2f5-93d18198275a")
    } catch (e) {}
}();
//# sourceMappingURL=2348.ff1d29cc973c4acd2229.js.map
