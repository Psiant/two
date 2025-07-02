(window.webpackChunk = window.webpackChunk || []).push([[30887], {
    30887: (t, e, a) => {
        var i, n;
        i = [a(460159)],
        void 0 === (n = function(t) {
            (function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var e = function(t) {
                    twig.Template.call(this, t)
                };
                twig.inherits(e, twig.Template),
                e.prototype.getParent_ = function(t) {
                    return !1
                }
                ,
                e.prototype.render_ = function(t, e, a) {
                    if (a = void 0 === a ? {} : a,
                    "is_invoices"in e && e.is_invoices) {
                        t.append('<span class="list-top-search__summary-text"></span>'),
                        e._parent = e;
                        var i = "render_currencies"in e ? e.render_currencies : "";
                        twig.forEach(i, (function(a, i) {
                            e._key = i,
                            e.currency = a,
                            t.append('<span class="list-top-search__summary-item"><span class="js-count" data-count="'),
                            t.append(twig.filter.escape(this.env_, twig.attr("currency"in e ? e.currency : "", "total"), "light_escape", null, !0)),
                            t.append('">'),
                            t.append(twig.filter.escape(this.env_, twig.attr("currency"in e ? e.currency : "", "total"), "light_escape", null, !0)),
                            t.append(':</span><span class="h-text_overflow" data-price="'),
                            t.append(twig.filter.escape(this.env_, twig.attr("currency"in e ? e.currency : "", "sum"), "light_escape", null, !0)),
                            t.append('">'),
                            t.append(twig.filter.escape(this.env_, this.env_.filter("price", twig.attr("currency"in e ? e.currency : "", "sum"), [!1, twig.attr("currency"in e ? e.currency : "", "precision"), !1, twig.attr("currency"in e ? e.currency : "", "currency")]), "light_escape", null, !0)),
                            t.append("</span></span>")
                        }
                        ), this),
                        t.append('<span class="list-top-search__summary-count"><span class="list-top-search__summary-text">'),
                        t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "more invoices"), "light_escape", null, !0)),
                        t.append('</span><span class="h-text_overflow" data-count="0"></span></span>')
                    } else
                        t.append('<span class="list-top-search__summary-text">'),
                        t.append(twig.filter.escape(this.env_, "total"in e ? e.total : "", "light_escape", null, !0)),
                        t.append(" "),
                        t.append(twig.filter.escape(this.env_, this.env_.filter("numeral", this.env_.filter("i18n", "element,elements,elements"), "total"in e ? e.total : ""), "light_escape", null, !0)),
                        t.append("</span>")
                }
                ,
                e.prototype.getTemplateName = function() {
                    return "interface_search_summary_catalogs_index"
                }
                ,
                e.prototype.isTraitable = function() {
                    return !1
                }
                ,
                t._add("interface/search_summary/catalogs/index", e)
            }
            )(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var e = function(t) {
                    twig.Template.call(this, t)
                };
                twig.inherits(e, twig.Template),
                e.prototype.getParent_ = function(t) {
                    return !1
                }
                ,
                e.prototype.render_ = function(t, e, a) {
                    a = void 0 === a ? {} : a,
                    twig.attr("pagination"in e ? e.pagination : "", "only_rows") || ("companies" == ("selected_element_type"in e ? e.selected_element_type : "") ? e.text_caption = this.env_.filter("i18n", "company,companies,companies") : "contacts" == ("selected_element_type"in e ? e.selected_element_type : "") ? e.text_caption = this.env_.filter("i18n", "contact,contacts,contacts") : e.text_caption = this.env_.filter("i18n", "element,elements,elements"),
                    t.append('<span class="list-top-search__summary-text">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("summary"in e ? e.summary : "", "persons_count"), "light_escape", null, !0)),
                    t.append(" "),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("numeral", "text_caption"in e ? e.text_caption : "", twig.attr("summary"in e ? e.summary : "", "persons_count")), "light_escape", null, !0)),
                    t.append("</span>"))
                }
                ,
                e.prototype.getTemplateName = function() {
                    return "interface_search_summary_contacts_index"
                }
                ,
                e.prototype.isTraitable = function() {
                    return !1
                }
                ,
                t._add("interface/search_summary/contacts/index", e)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var e = function(t) {
                    twig.Template.call(this, t)
                };
                twig.inherits(e, twig.Template),
                e.prototype.getParent_ = function(t) {
                    return !1
                }
                ,
                e.prototype.render_ = function(t, e, a) {
                    a = void 0 === a ? {} : a,
                    e.disable_summary = twig.attr("amo_chats_state"in e ? e.amo_chats_state : "", "is_full_enabled"),
                    twig.attr("summary"in e ? e.summary : "", "total") && (e.count = twig.attr(twig.attr("summary"in e ? e.summary : "", "total"), "count"),
                    e.aggregation = twig.attr(twig.attr("summary"in e ? e.summary : "", "total"), "aggregation")),
                    "next_price" == twig.attr("aggregation"in e ? e.aggregation : "", "aggregation_by") ? e.aggregation_label = this.env_.filter("i18n", "Expected") : "average_check" == twig.attr("aggregation"in e ? e.aggregation : "", "aggregation_by") ? e.aggregation_label = this.env_.filter("i18n", "Avg check") : "purchases_count" == twig.attr("aggregation"in e ? e.aggregation : "", "aggregation_by") ? e.aggregation_label = this.env_.filter("i18n", "Count") : "ltv" == twig.attr("aggregation"in e ? e.aggregation : "", "aggregation_by") && (e.aggregation_label = this.env_.filter("i18n", "Amount")),
                    t.append('<span class="list-top-search__summary-text js-count" data-count="'),
                    t.append(twig.filter.escape(this.env_, "count"in e ? e.count : "", "light_escape", null, !0)),
                    t.append('">\x3c!----\x3e'),
                    t.append(twig.filter.escape(this.env_, "count"in e ? e.count : "", "light_escape", null, !0)),
                    t.append(" "),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("numeral", this.env_.filter("i18n", "customer,customers,customers"), "count"in e ? e.count : ""), "light_escape", null, !0)),
                    "disable_summary"in e && e.disable_summary || t.append(":"),
                    t.append("</span>"),
                    "disable_summary"in e && e.disable_summary || (t.append('<span class="list-top-search__summary-count h-text_overflow js-price" data-price="'),
                    t.append(twig.filter.escape(this.env_, twig.attr("aggregation"in e ? e.aggregation : "", "value"), "light_escape", null, !0)),
                    t.append('">\x3c!----\x3e'),
                    t.append(twig.filter.escape(this.env_, "aggregation_label"in e ? e.aggregation_label : "", "light_escape", null, !0)),
                    t.append(" "),
                    t.append(twig.filter.escape(this.env_, twig.attr("aggregation"in e ? e.aggregation : "", "is_currency") ? this.env_.filter("price", twig.attr("aggregation"in e ? e.aggregation : "", "value")) : twig.attr("aggregation"in e ? e.aggregation : "", "value"), "light_escape", null, !0)),
                    t.append("</span>"))
                }
                ,
                e.prototype.getTemplateName = function() {
                    return "interface_search_summary_customers_index"
                }
                ,
                e.prototype.isTraitable = function() {
                    return !1
                }
                ,
                t._add("interface/search_summary/customers/index", e)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var e = function(t) {
                    twig.Template.call(this, t)
                };
                twig.inherits(e, twig.Template),
                e.prototype.getParent_ = function(t) {
                    return !1
                }
                ,
                e.prototype.render_ = function(t, e, a) {
                    a = void 0 === a ? {} : a,
                    twig.attr("summary"in e ? e.summary : "", "count", void 0, void 0, !0) && (t.append('<span class="list-top-search__summary-text">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("summary"in e ? e.summary : "", "count"), "light_escape", null, !0)),
                    t.append(" "),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("numeral", this.env_.filter("i18n", "file,files"), twig.attr("summary"in e ? e.summary : "", "count")), "light_escape", null, !0)),
                    t.append(': </span>\x3c!----\x3e<span class="list-top-search__summary-count h-text-overflow">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("format_file_size", twig.attr("summary"in e ? e.summary : "", "used")), "light_escape", null, !0)),
                    !twig.attr("summary"in e ? e.summary : "", "is_filter") && twig.attr("summary"in e ? e.summary : "", "limit") && twig.attr("summary"in e ? e.summary : "", "limit") >= 0 && (t.append("/"),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("format_file_size", twig.attr("summary"in e ? e.summary : "", "limit")), "light_escape", null, !0))),
                    t.append("</span>"))
                }
                ,
                e.prototype.getTemplateName = function() {
                    return "interface_search_summary_files_index"
                }
                ,
                e.prototype.isTraitable = function() {
                    return !1
                }
                ,
                t._add("interface/search_summary/files/index", e)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var e = function(t) {
                    twig.Template.call(this, t)
                };
                twig.inherits(e, twig.Template),
                e.prototype.getParent_ = function(t) {
                    return !1
                }
                ,
                e.prototype.render_ = function(t, e, a) {
                    a = void 0 === a ? {} : a,
                    twig.attr("pagination"in e ? e.pagination : "", "only_rows") || (t.append('<span class="list-top-search__summary-text">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("summary"in e ? e.summary : "", "count"), "light_escape", null, !0)),
                    t.append(" "),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("numeral", twig.attr("lang"in e ? e.lang : "", "summary_leads"), twig.attr("summary"in e ? e.summary : "", "count")), "light_escape", null, !0)),
                    t.append(': </span>\x3c!----\x3e<span class="list-top-search__summary-count h-text-overflow">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("price", twig.attr("summary"in e ? e.summary : "", "budget")), "light_escape", null, !0)),
                    t.append("</span>"))
                }
                ,
                e.prototype.getTemplateName = function() {
                    return "interface_search_summary_leads_index"
                }
                ,
                e.prototype.isTraitable = function() {
                    return !1
                }
                ,
                t._add("interface/search_summary/leads/index", e)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var e = function(t) {
                    twig.Template.call(this, t)
                };
                twig.inherits(e, twig.Template),
                e.prototype.getParent_ = function(t) {
                    return !1
                }
                ,
                e.prototype.render_ = function(t, e, a) {
                    a = void 0 === a ? {} : a,
                    twig.attr("pagination"in e ? e.pagination : "", "only_rows") || (e.text_caption = this.env_.filter("i18n", "to-do,to-dos"),
                    t.append('<span class="list-top-search__summary-text">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("summary"in e ? e.summary : "", "summary_todos"), "light_escape", null, !0)),
                    t.append(" "),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("numeral", "text_caption"in e ? e.text_caption : "", twig.attr("summary"in e ? e.summary : "", "summary_todos")), "light_escape", null, !0)),
                    t.append("</span>"))
                }
                ,
                e.prototype.getTemplateName = function() {
                    return "interface_search_summary_todo_index"
                }
                ,
                e.prototype.isTraitable = function() {
                    return !1
                }
                ,
                t._add("interface/search_summary/todo/index", e)
            }()
        }
        .apply(e, i)) || (t.exports = n)
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
        t._sentryDebugIds[e] = "c00572ac-9403-4569-989c-4680a32517b5",
        t._sentryDebugIdIdentifier = "sentry-dbid-c00572ac-9403-4569-989c-4680a32517b5")
    } catch (t) {}
}();
//# sourceMappingURL=30887.7d57c2a1e895e8af1a7e.js.map
