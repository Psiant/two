(window.webpackChunk = window.webpackChunk || []).push([[97834, 30887], {
    30887: (t, e, i) => {
        var n, a;
        n = [i(460159)],
        void 0 === (a = function(t) {
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
                e.prototype.render_ = function(t, e, i) {
                    if (i = void 0 === i ? {} : i,
                    "is_invoices"in e && e.is_invoices) {
                        t.append('<span class="list-top-search__summary-text"></span>'),
                        e._parent = e;
                        var n = "render_currencies"in e ? e.render_currencies : "";
                        twig.forEach(n, (function(i, n) {
                            e._key = n,
                            e.currency = i,
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
                e.prototype.render_ = function(t, e, i) {
                    i = void 0 === i ? {} : i,
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
                e.prototype.render_ = function(t, e, i) {
                    i = void 0 === i ? {} : i,
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
                e.prototype.render_ = function(t, e, i) {
                    i = void 0 === i ? {} : i,
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
                e.prototype.render_ = function(t, e, i) {
                    i = void 0 === i ? {} : i,
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
                e.prototype.render_ = function(t, e, i) {
                    i = void 0 === i ? {} : i,
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
        .apply(e, n)) || (t.exports = a)
    }
    ,
    97834: (t, e, i) => {
        var n, a;
        n = [i(460159), i(898296), i(591880), i(94849), i(295165), i(284685), i(86831), i(928617), i(30887)],
        void 0 === (a = function(t) {
            (function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var e = function(t) {
                    twig.Template.call(this, t),
                    this.setBlocks({
                        static: twig.bind(this.block_static, this),
                        list_top_right: twig.bind(this.block_list_top_right, this)
                    })
                };
                twig.inherits(e, twig.Template),
                e.prototype.getParent_ = function(e) {
                    return t._get("interface/list/list.twig")
                }
                ,
                e.prototype.render_ = function(t, e, i) {
                    i = void 0 === i ? {} : i,
                    e.body_class_name = "list__body__holder-table",
                    this.getParent(e).render_(t, e, twig.extend({}, this.getBlocks(), i))
                }
                ,
                e.prototype.block_static = function(t, e, i) {
                    i = void 0 === i ? {} : i,
                    t.append(twig.filter.escape(this.env_, this.env_.invoke("inject_static", ["todos.css", "todos_list.php"], this), "light_escape", null, !0))
                }
                ,
                e.prototype.block_list_top_right = function(e, i, n) {
                    n = void 0 === n ? {} : n,
                    e.append('<div class="list__body-right__top list__body-right__top-todo clearfix">'),
                    new (t._get("interface/todo/common/top_nav.twig"))(this.env_).render_(e, twig.extend({}, i, {
                        selected: {
                            list: !0
                        }
                    })),
                    new (t._get("interface/todo/common/top_actions.twig"))(this.env_).render_(e, twig.extend({}, i, {
                        is_list: !0,
                        user_rank: "user_rank"in i ? i.user_rank : ""
                    })),
                    new (t._get("interface/filter/search_block.twig"))(this.env_).render_(e, twig.extend({}, i, {
                        id: !1,
                        no_search: !0,
                        search_placeholder: twig.attr("lang"in i ? i.lang : "", "filter_title")
                    })),
                    e.append("</div>")
                }
                ,
                e.prototype.getTemplateName = function() {
                    return "interface_todo_list"
                }
                ,
                e.prototype.isTraitable = function() {
                    return !1
                }
                ,
                t._add("interface/todo/list", e)
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
                e.prototype.render_ = function(t, e, i) {
                    i = void 0 === i ? {} : i,
                    t.append('<div class="modal-body__inner"><span class="modal-body__close"><span class="icon icon-modal-close"></span></span><h2 class="modal-calendar-sync__header">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in e ? e.lang : "", "calendars_sync"), "light_escape", null, !0)),
                    t.append("</h2>"),
                    e._parent = e;
                    var n = "system_calendars"in e ? e.system_calendars : "";
                    twig.forEach(n, (function(i, n) {
                        e.key = n,
                        e.item = i,
                        e.is_enabled = twig.attr("item"in e ? e.item : "", "current_auth_email"),
                        t.append('<div class="modal-calendar-sync__item js-calendar-sync-item '),
                        t.append("is_enabled"in e && e.is_enabled ? "js-active" : ""),
                        t.append('" data-calendar-id="'),
                        t.append(twig.filter.escape(this.env_, "key"in e ? e.key : "", "light_escape", null, !0)),
                        t.append('" data-calendar-origin="system"><div class="modal-calendar-sync__item_icon"><svg class="svg-tasks--'),
                        t.append(twig.filter.escape(this.env_, "key"in e ? e.key : "", "light_escape", null, !0)),
                        t.append('-dims"><use xlink:href="#tasks--'),
                        t.append(twig.filter.escape(this.env_, "key"in e ? e.key : "", "light_escape", null, !0)),
                        t.append('"></use></svg></div><div class="modal-calendar-sync__item_content"><div class="modal-calendar-sync__item_controls"><div class="modal-calendar-sync__item_header">'),
                        t.append(twig.filter.escape(this.env_, twig.attr("lang"in e ? e.lang : "", "sync_" + ("key"in e ? e.key : "") + "_title", void 0, "array"), "light_escape", null, !0)),
                        t.append('</div><a class="modal-calendar-sync__item_toggler js-calendar-sync-toggler">'),
                        "google_calendar" == ("key"in e ? e.key : "") ? (t.append('<div id="google-button-container" class="js-calendar-sync-status modal-calendar-sync__custom-enable"></div><div class="modal-calendar-sync__item_toggler-status modal-calendar-sync__custom-enabled">'),
                        t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Fully on"), "light_escape", null, !0)),
                        t.append("</div>")) : "is_enabled"in e && e.is_enabled ? (t.append('<div class="modal-calendar-sync__item_toggler-status js-calendar-sync-status">'),
                        t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Fully on"), "light_escape", null, !0)),
                        t.append("</div>")) : (t.append('<div class="modal-calendar-sync__item_toggler-status js-calendar-sync-status">'),
                        t.append(twig.filter.escape(this.env_, twig.attr("lang"in e ? e.lang : "", "enable"), "light_escape", null, !0)),
                        t.append("</div>")),
                        t.append('<div class="modal-calendar-sync__item_toggler-deactivator">'),
                        t.append(twig.filter.escape(this.env_, twig.attr("lang"in e ? e.lang : "", "Deactivate"), "light_escape", null, !0)),
                        t.append('</div></a></div><div class="modal-calendar-sync__item_text-container">'),
                        twig.attr("item"in e ? e.item : "", "current_auth_email") && (t.append('<div class="modal-calendar-sync__item_auth-email">'),
                        t.append(twig.filter.escape(this.env_, twig.attr("item"in e ? e.item : "", "current_auth_email"), "light_escape", null, !0)),
                        t.append("</div>")),
                        t.append('<div class="modal-calendar-sync__item_auth-description">'),
                        t.append(twig.filter.escape(this.env_, twig.attr("lang"in e ? e.lang : "", "sync_" + ("key"in e ? e.key : "") + "_description", void 0, "array"), "light_escape", null, !0)),
                        t.append("</div></div></div></div>")
                    }
                    ), this),
                    e._parent = e,
                    n = "widget_calendars"in e ? e.widget_calendars : "",
                    twig.forEach(n, (function(i, n) {
                        e.key = n,
                        e.item = i,
                        t.append('<div class="modal-calendar-sync__item js-calendar-sync-item '),
                        t.append(twig.attr("item"in e ? e.item : "", "is_enabled") ? "js-active" : ""),
                        t.append(" "),
                        t.append(twig.attr("item"in e ? e.item : "", "is_loading") ? "js-loading" : ""),
                        t.append('" data-calendar-id="'),
                        t.append(twig.filter.escape(this.env_, "key"in e ? e.key : "", "light_escape", null, !0)),
                        t.append('" data-calendar-origin="widget"><div class="modal-calendar-sync__item_icon"><img src="'),
                        t.append(twig.filter.escape(this.env_, twig.attr("item"in e ? e.item : "", "icon"), "light_escape", null, !0)),
                        t.append('" alt=""/></div><div class="modal-calendar-sync__item_content"><div class="modal-calendar-sync__item_controls"><div class="modal-calendar-sync__item_header">'),
                        t.append(twig.filter.escape(this.env_, twig.attr("item"in e ? e.item : "", "name"), "light_escape", null, !0)),
                        t.append('</div><div class="modal-calendar-sync__item_error js-calendar-error"></div><div class="modal-calendar-sync__item_loader"><span class="spinner-icon"></span></div><a class="modal-calendar-sync__item_toggler js-calendar-sync-toggler"><div class="modal-calendar-sync__item_toggler-status js-calendar-sync-status">'),
                        t.append(twig.filter.escape(this.env_, twig.attr("item"in e ? e.item : "", "is_enabled") ? this.env_.filter("i18n", "Fully on") : twig.attr("lang"in e ? e.lang : "", "enable"), "light_escape", null, !0)),
                        t.append('</div><div class="modal-calendar-sync__item_toggler-deactivator">'),
                        t.append(twig.filter.escape(this.env_, twig.attr("lang"in e ? e.lang : "", "Deactivate"), "light_escape", null, !0)),
                        t.append("</div></a>"),
                        twig.attr("item"in e ? e.item : "", "is_setup_possible") && t.append('<button class="modal-calendar-sync__item_setup js-calendar-sync-setup"><svg class="svg-icon svg-common--gear-dims"><use xlink:href="#common--gear"></use></svg></button>'),
                        t.append('</div><div class="modal-calendar-sync__item_text-container"><div class="modal-calendar-sync__item_auth-description">'),
                        t.append(twig.filter.escape(this.env_, twig.attr("item"in e ? e.item : "", "description"), "light_escape", null, !0)),
                        t.append("</div></div></div></div>")
                    }
                    ), this),
                    t.append("</div>")
                }
                ,
                e.prototype.getTemplateName = function() {
                    return "interface_todo_calendar_modal_sync"
                }
                ,
                e.prototype.isTraitable = function() {
                    return !1
                }
                ,
                t._add("interface/todo/calendar/modal_sync", e)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var e = function(t) {
                    twig.Template.call(this, t),
                    this.setBlocks({
                        list_top_right: twig.bind(this.block_list_top_right, this),
                        static: twig.bind(this.block_static, this),
                        list_body: twig.bind(this.block_list_body, this),
                        list_footer: twig.bind(this.block_list_footer, this)
                    })
                };
                twig.inherits(e, twig.Template),
                e.prototype.getParent_ = function(e) {
                    return t._get("interface/list/list.twig")
                }
                ,
                e.prototype.render_ = function(t, e, i) {
                    i = void 0 === i ? {} : i,
                    e.list_page_holder_class_name = "list-todo-calendar_plug",
                    e.body_class_name = "list__body__holder-table",
                    this.getParent(e).render_(t, e, twig.extend({}, this.getBlocks(), i))
                }
                ,
                e.prototype.block_list_top_right = function(e, i, n) {
                    n = void 0 === n ? {} : n,
                    e.append('<div class="list__body-right__top list__body-right__top-todo clearfix">'),
                    new (t._get("interface/todo/common/top_nav.twig"))(this.env_).render_(e, twig.extend({}, i, {
                        selected: "selected_view"in i ? i.selected_view : ""
                    })),
                    new (t._get("interface/todo/common/top_actions.twig"))(this.env_).render_(e, twig.extend({}, i, {
                        user_rank: "user_rank"in i ? i.user_rank : ""
                    })),
                    new (t._get("interface/filter/search_block.twig"))(this.env_).render_(e, twig.extend({}, i, {
                        id: !1,
                        no_search: !0,
                        search_placeholder: twig.attr("lang"in i ? i.lang : "", "filter_title"),
                        no_search_summary: !0
                    })),
                    e.append("</div>")
                }
                ,
                e.prototype.block_static = function(t, e, i) {
                    i = void 0 === i ? {} : i,
                    t.append(twig.filter.escape(this.env_, this.env_.invoke("inject_static", ["todos.css", "todos_calendar.php"], this), "light_escape", null, !0))
                }
                ,
                e.prototype.block_list_body = function(e, i, n) {
                    n = void 0 === n ? {} : n,
                    e.append('<div class="current-time current-time__left" id="curTime_aside"></div><div class="current-time current-time__center" id="curTime_body"></div><div class="todo-calendar-plug" id="todo-calendar">'),
                    new (t._get("interface/todo/calendar/plugs/" + ("cap_view"in i ? i.cap_view : "") + ".twig"))(this.env_).render_(e, i),
                    e.append("</div>")
                }
                ,
                e.prototype.block_list_footer = function(e, i, n) {
                    n = void 0 === n ? {} : n,
                    e.append('<div class="list__footer" id="calendar_footer" style="display: none"><div id="calendar_summary"></div>'),
                    new (t._get("interface/controls/button.twig"))(this.env_).render_(e, twig.extend({}, i, {
                        id: "todo_calendar_today",
                        class_name: "todo-calendar__today",
                        text: twig.attr("lang"in i ? i.lang : "", "menu_todo_calendar_today")
                    })),
                    e.append("</div>")
                }
                ,
                e.prototype.getTemplateName = function() {
                    return "interface_todo_calendar_page"
                }
                ,
                e.prototype.isTraitable = function() {
                    return !1
                }
                ,
                t._add("interface/todo/calendar/page", e)
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
                e.prototype.render_ = function(e, i, n) {
                    n = void 0 === n ? {} : n,
                    e.append('<div class="list__top__actions">'),
                    i.moreactions = [],
                    i.has_items = twig.filter.length(this.env_, "items"in i ? i.items : "") || ("is_plug"in i ? i.is_plug : ""),
                    i.setup_button_class_name = "list-top-nav__button-setup__" + ("user_rank"in i ? i.user_rank : ""),
                    "is_list"in i && i.is_list && (i.moreactions = twig.filter.merge("moreactions"in i ? i.moreactions : "", {
                        print: {
                            svg_icon: "print",
                            class_name: "js-list-print",
                            text: twig.attr("lang"in i ? i.lang : "", "button_print")
                        }
                    })),
                    "is_trash"in i && i.is_trash || (i.moreactions = twig.filter.merge("moreactions"in i ? i.moreactions : "", {
                        export: {
                            svg_icon: "download",
                            class_name: "js-list-export",
                            text: twig.attr("lang"in i ? i.lang : "", "export_button")
                        }
                    })),
                    twig.attr("user_rights"in i ? i.user_rights : "", "is_admin") && (i.moreactions = twig.filter.merge("moreactions"in i ? i.moreactions : "", {
                        custom_types: {
                            svg_icon_absolute: "tasks--types-icons--0",
                            class_name: "list-top-nav__button-custom-todo-types js-modal-custom-types",
                            text: twig.attr("lang"in i ? i.lang : "", "button_todo_custom_types")
                        }
                    })),
                    i.moreactions = twig.filter.merge("moreactions"in i ? i.moreactions : "", {
                        sync: {
                            svg_icon_absolute: "card-calendar",
                            text: twig.attr("lang"in i ? i.lang : "", "sync_with_calendar"),
                            class_name: "js-todos-sync " + ("setup_button_class_name"in i ? i.setup_button_class_name : "") + "_context"
                        }
                    }),
                    "is_list"in i && i.is_list && "has_items"in i && i.has_items && (i.moreactions = twig.filter.merge("moreactions"in i ? i.moreactions : "", {
                        settings: {
                            svg_icon: "settings-key",
                            class_name: "js-list-settings",
                            text: twig.attr("lang"in i ? i.lang : "", "button_list_settings")
                        }
                    })),
                    twig.attr("user_rights"in i ? i.user_rights : "", "is_admin") && "is_line"in i && i.is_line && (i.moreactions = twig.filter.merge("moreactions"in i ? i.moreactions : "", {
                        settings: {
                            svg_icon: "settings-key",
                            class_name: "js-list-settings",
                            text: this.env_.filter("i18n", "Card view")
                        }
                    })),
                    twig.attr("user_rights"in i ? i.user_rights : "", "is_admin") && "is_line"in i && i.is_line && (i.moreactions = twig.filter.merge("moreactions"in i ? i.moreactions : "", {
                        auto_update: {
                            svg_icon_left_absolute: "controls--select-checked",
                            class_name: "context-menu__item context-menu__item-autoupdate context-menu__item_divider",
                            checkable: !0,
                            checkable_checked: "todoline_auto_update"in i ? i.todoline_auto_update : "",
                            text: this.env_.filter("i18n", "Auto update")
                        }
                    })),
                    "moreactions"in i && i.moreactions && (twig.attr("_account_features"in i ? i._account_features : "", "signed_first_line_controls") ? new (t._get("interface/common/top_actions_more_newbie.twig"))(this.env_).render_(e, twig.extend({}, i, {
                        context_menu: "moreactions"in i ? i.moreactions : "",
                        button_class_name: "button-input-more-newbie content__top__action__btn-more",
                        context_menu_class_name: "context-menu-pipeline context-menu-pipeline__newbie"
                    })) : new (t._get("interface/common/top_actions_more.twig"))(this.env_).render_(e, twig.extend({}, i, {
                        context_menu: "moreactions"in i ? i.moreactions : "",
                        button_class_name: "button-input-more content__top__action__btn-more",
                        context_menu_class_name: "context-menu-pipeline"
                    }))),
                    i.class_name = "button-input_blue",
                    "can_add"in i && i.can_add || (i.class_name = "button-input-disabled js-disabled"),
                    "google_calendar_enabled"in i && i.google_calendar_enabled && (e.append('<div class="list-top-nav__button-setup '),
                    "master" != ("user_rank"in i ? i.user_rank : "") ? e.append(twig.filter.escape(this.env_, "setup_button_class_name"in i ? i.setup_button_class_name : "", "light_escape", null, !0)) : e.append("hidden"),
                    e.append('">'),
                    new (t._get("interface/controls/button.twig"))(this.env_).render_(e, twig.extend({}, i, {
                        title: twig.attr("lang"in i ? i.lang : "", "button_sync"),
                        text: twig.attr("lang"in i ? i.lang : "", "sync_with_calendar"),
                        inner_class_name: "button-input-sync-inner",
                        class_name: "js-todos-sync",
                        context_menu: "syncactions"in i ? i.syncactions : ""
                    })),
                    e.append("</div>")),
                    new (t._get("interface/controls/button.twig"))(this.env_).render_(e, twig.extend({}, i, {
                        text: twig.attr("lang"in i ? i.lang : "", "button_add"),
                        text_short: this.env_.filter("i18n", "Task"),
                        id: "todo_add_btn",
                        plain: !0,
                        svg_class_name: "controls--button-add",
                        class_name: ("class_name"in i ? i.class_name : "") + " button-input_add button-input_add-todo content-table__name-link"
                    })),
                    e.append("</div>")
                }
                ,
                e.prototype.getTemplateName = function() {
                    return "interface_todo_common_top_actions"
                }
                ,
                e.prototype.isTraitable = function() {
                    return !1
                }
                ,
                t._add("interface/todo/common/top_actions", e)
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
                e.prototype.render_ = function(e, i, n) {
                    n = void 0 === n ? {} : n,
                    e.append('<div class="list__top__preset"><div class="list-top-nav__buttons-wrapper">'),
                    new (t._get("interface/controls/button/list_action.twig"))(this.env_).render_(e, twig.extend({}, i, {
                        link: "/todo/line/",
                        svg_class_name: "common--pipe",
                        type: "pipe",
                        js_caption: !0,
                        active: twig.attr("selected"in i ? i.selected : "", "line"),
                        title: twig.attr("lang"in i ? i.lang : "", "menu_todo_line")
                    })),
                    new (t._get("interface/controls/button/list_action.twig"))(this.env_).render_(e, twig.extend({}, i, {
                        link: "/todo/list/",
                        svg_class_name: "common--list",
                        type: "list",
                        js_caption: !0,
                        active: twig.attr("selected"in i ? i.selected : "", "list"),
                        title: twig.attr("lang"in i ? i.lang : "", "menu_todo_list")
                    })),
                    e.append("</div>"),
                    i.calendar = [{
                        selected: twig.attr("selected"in i ? i.selected : "", "day"),
                        link: "/todo/calendar/day/",
                        title: twig.attr("lang"in i ? i.lang : "", "menu_todo_calendar_day"),
                        class_name: "js-list-caption-link",
                        additional_data: 'data-calendar-view="agendaDay"'
                    }, {
                        selected: twig.attr("selected"in i ? i.selected : "", "week"),
                        link: "/todo/calendar/week/",
                        title: twig.attr("lang"in i ? i.lang : "", "menu_todo_calendar_week"),
                        class_name: "js-list-caption-link",
                        additional_data: 'data-calendar-view="agendaWeek"'
                    }, {
                        selected: twig.attr("selected"in i ? i.selected : "", "month"),
                        link: "/todo/calendar/month/",
                        title: twig.attr("lang"in i ? i.lang : "", "menu_todo_calendar_month"),
                        class_name: "js-list-caption-link",
                        additional_data: 'data-calendar-view="month"'
                    }],
                    e.append('<div class="list-top-nav__calendar">'),
                    i._parent = i;
                    var a = "calendar"in i ? i.calendar : "";
                    twig.forEach(a, (function(t, n) {
                        i._key = n,
                        i.period = t,
                        e.append('<a href="'),
                        e.append(twig.filter.escape(this.env_, twig.attr("period"in i ? i.period : "", "link"), "light_escape", null, !0)),
                        e.append('" class="list-top-nav__text-button list-top-nav__text-button_contacts '),
                        e.append(twig.filter.escape(this.env_, twig.attr("period"in i ? i.period : "", "class_name"), "light_escape", null, !0)),
                        e.append(" "),
                        twig.attr("period"in i ? i.period : "", "selected") && e.append("list-top-nav__text-button_active"),
                        e.append('" '),
                        e.append(twig.attr("period"in i ? i.period : "", "additional_data")),
                        e.append(">"),
                        e.append(twig.filter.escape(this.env_, twig.attr("period"in i ? i.period : "", "title"), "light_escape", null, !0)),
                        e.append("</a>")
                    }
                    ), this),
                    e.append("</div></div>")
                }
                ,
                e.prototype.getTemplateName = function() {
                    return "interface_todo_common_top_nav"
                }
                ,
                e.prototype.isTraitable = function() {
                    return !1
                }
                ,
                t._add("interface/todo/common/top_nav", e)
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
                e.prototype.render_ = function(e, i, n) {
                    n = void 0 === n ? {} : n,
                    e.append('<div class="card-task__result-wrapper__result-editor">'),
                    new (t._get("interface/todo/form/task_result_edit.twig"))(this.env_).render_(e, twig.extend({}, i, {
                        value: twig.attr("render_data"in i ? i.render_data : "", "result_text"),
                        editable_class_name: "control-text__result",
                        class_name: "card-task__actions",
                        input_class_name: "task_edit_result"
                    })),
                    e.append('<div class="card-task__result-wrapper__result-editor__buttons card-task__buttons">'),
                    new (t._get("interface/controls/button.twig"))(this.env_).render_(e, twig.extend({}, i, {
                        text: twig.attr("lang"in i ? i.lang : "", "note_edit"),
                        class_name: "js-task-submit feed-note__button",
                        tab_index: "-1",
                        disabled: twig.attr("render_data"in i ? i.render_data : "", "task_id"),
                        id: twig.attr("render_data"in i ? i.render_data : "", "task_id")
                    })),
                    new (t._get("interface/controls/cancel_button.twig"))(this.env_).render_(e, twig.extend({}, i, {
                        text: twig.attr("lang"in i ? i.lang : "", "button_cancel"),
                        class_name: "js-note-edit-cancel feed-note__actions__button-cancel",
                        tab_index: "-1"
                    })),
                    e.append('<div class="card-task__result-wrapper__result-editor__buttons__task-delete">'),
                    new (t._get("interface/controls/cancel_button.twig"))(this.env_).render_(e, twig.extend({}, i, {
                        text: twig.attr("lang"in i ? i.lang : "", "note_delete"),
                        class_name: "js-note-delete-btn feed-note__button_cancel feed-note__button_remove",
                        tab_index: "-1"
                    })),
                    e.append("</div></div></div>")
                }
                ,
                e.prototype.getTemplateName = function() {
                    return "interface_todo_form_completed_task"
                }
                ,
                e.prototype.isTraitable = function() {
                    return !1
                }
                ,
                t._add("interface/todo/form/completed_task", e)
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
                e.prototype.render_ = function(e, i, n) {
                    n = void 0 === n ? {} : n,
                    new (t._get("interface/todo/form/linked.twig"))(this.env_).render_(e, twig.extend({}, i, {
                        editable: !0
                    })),
                    e.append('<div class="feed-compose feed-compose_task feed-compose_task-modal">'),
                    new (t._get("interface/cards/tasks/controls/contenteditable.twig"))(this.env_).render_(e, twig.extend({}, i, {
                        class_name: "card-task__actions",
                        name: "body",
                        value: this.env_.filter("task_text", twig.attr("data"in i ? i.data : "", "text"))
                    })),
                    e.append('<div class="feed-compose__actions card-task__buttons">'),
                    i.button_text = twig.attr("lang"in i ? i.lang : "", "note_edit"),
                    "is_new"in i && i.is_new && (i.button_text = twig.attr("lang"in i ? i.lang : "", "button_set")),
                    new (t._get("interface/controls/feed_note_main_buttons.twig"))(this.env_).render_(e, twig.extend({}, i, {
                        accept_button_text: "button_text"in i ? i.button_text : "",
                        disabled: !("is_new"in i && i.is_new)
                    })),
                    "id"in i && i.id && "deletable"in i && i.deletable && (e.append('<div class="card-task__buttons_remove">'),
                    new (t._get("interface/controls/cancel_button.twig"))(this.env_).render_(e, twig.extend({}, i, {
                        text: twig.attr("lang"in i ? i.lang : "", "note_delete"),
                        class_name: "js-note-delete-btn feed-note__button_cancel feed-note__button_remove",
                        tab_index: "-1"
                    })),
                    e.append("</div>")),
                    e.append("</div></div>")
                }
                ,
                e.prototype.getTemplateName = function() {
                    return "interface_todo_form_edit"
                }
                ,
                e.prototype.isTraitable = function() {
                    return !1
                }
                ,
                t._add("interface/todo/form/edit", e)
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
                e.prototype.render_ = function(e, i, n) {
                    n = void 0 === n ? {} : n,
                    i.leads_keys = twig.filter.keys(twig.attr("extra"in i ? i.extra : "", "leads")),
                    i.customers_keys = twig.filter.keys(twig.attr("extra"in i ? i.extra : "", "customers")),
                    i.contacts_keys = twig.filter.keys(twig.attr("extra"in i ? i.extra : "", "contacts")),
                    i.companies_keys = twig.filter.keys(twig.attr("extra"in i ? i.extra : "", "companies")),
                    i.linked_name = "",
                    i.linked_id = "",
                    i.linked_type = "",
                    twig.attr("companies_keys"in i ? i.companies_keys : "", 0, void 0, "array") ? (i.linked_name = twig.attr(twig.attr(twig.attr("extra"in i ? i.extra : "", "companies"), twig.attr("companies_keys"in i ? i.companies_keys : "", 0, void 0, "array"), void 0, "array"), "name"),
                    i.linked_id = twig.attr(twig.attr(twig.attr("extra"in i ? i.extra : "", "companies"), twig.attr("companies_keys"in i ? i.companies_keys : "", 0, void 0, "array"), void 0, "array"), "id"),
                    i.linked_type = 3) : twig.attr("contacts_keys"in i ? i.contacts_keys : "", 0, void 0, "array") ? (i.linked_name = twig.attr(twig.attr(twig.attr("extra"in i ? i.extra : "", "contacts"), twig.attr("contacts_keys"in i ? i.contacts_keys : "", 0, void 0, "array"), void 0, "array"), "name"),
                    i.linked_id = twig.attr(twig.attr(twig.attr("extra"in i ? i.extra : "", "contacts"), twig.attr("contacts_keys"in i ? i.contacts_keys : "", 0, void 0, "array"), void 0, "array"), "id"),
                    i.linked_type = 1) : twig.attr("leads_keys"in i ? i.leads_keys : "", 0, void 0, "array") ? (i.linked_name = twig.attr(twig.attr(twig.attr("extra"in i ? i.extra : "", "leads"), twig.attr("leads_keys"in i ? i.leads_keys : "", 0, void 0, "array"), void 0, "array"), "name"),
                    i.linked_id = twig.attr(twig.attr(twig.attr("extra"in i ? i.extra : "", "leads"), twig.attr("leads_keys"in i ? i.leads_keys : "", 0, void 0, "array"), void 0, "array"), "id"),
                    i.linked_type = 2) : twig.attr("customers_keys"in i ? i.customers_keys : "", 0, void 0, "array") && (i.linked_name = twig.attr(twig.attr(twig.attr("extra"in i ? i.extra : "", "customers"), twig.attr("customers_keys"in i ? i.customers_keys : "", 0, void 0, "array"), void 0, "array"), "name"),
                    i.linked_id = twig.attr(twig.attr(twig.attr("extra"in i ? i.extra : "", "customers"), twig.attr("customers_keys"in i ? i.customers_keys : "", 0, void 0, "array"), void 0, "array"), "id"),
                    i.linked_type = 12),
                    (twig.filter.length(this.env_, "leads_keys"in i ? i.leads_keys : "") || twig.filter.length(this.env_, "customers_keys"in i ? i.customers_keys : "") || twig.filter.length(this.env_, "contacts_keys"in i ? i.contacts_keys : "") || twig.filter.length(this.env_, "companies_keys"in i ? i.companies_keys : "") || "editable"in i && i.editable) && (e.append('<div class="card-task__linked-for-todo '),
                    "is_completed"in i && i.is_completed && e.append("card-task__linked-for-todo__completed"),
                    e.append("  "),
                    "linked_id"in i && i.linked_id || e.append("card-task__linked-for-todo_in-edit"),
                    e.append('" data-element-type="'),
                    e.append(twig.filter.escape(this.env_, "linked_type"in i ? i.linked_type : "", "light_escape", null, !0)),
                    e.append('"><div class="card-task__linked-for-todo-inner">'),
                    twig.attr("leads_keys"in i ? i.leads_keys : "", 0, void 0, "array") && (e.append('<a href="/leads/detail/'),
                    e.append(twig.filter.escape(this.env_, twig.attr(twig.attr(twig.attr("extra"in i ? i.extra : "", "leads"), twig.attr("leads_keys"in i ? i.leads_keys : "", 0, void 0, "array"), void 0, "array"), "id"), "light_escape", null, !0)),
                    e.append('" class="card-task__linked-for-todo-lead js-navigate-link">'),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("lead_name", twig.attr(twig.attr(twig.attr("extra"in i ? i.extra : "", "leads"), twig.attr("leads_keys"in i ? i.leads_keys : "", 0, void 0, "array"), void 0, "array"), "name"), twig.attr(twig.attr(twig.attr("extra"in i ? i.extra : "", "leads"), twig.attr("leads_keys"in i ? i.leads_keys : "", 0, void 0, "array"), void 0, "array"), "id")), "light_escape", null, !0)),
                    e.append("</a>"),
                    (twig.attr(twig.attr("extra"in i ? i.extra : "", "contacts"), twig.attr("contacts_keys"in i ? i.contacts_keys : "", 0, void 0, "array"), void 0, "array") || twig.attr(twig.attr("extra"in i ? i.extra : "", "companies"), twig.attr("companies_keys"in i ? i.companies_keys : "", 0, void 0, "array"), void 0, "array")) && e.append(", ")),
                    twig.attr("customers_keys"in i ? i.customers_keys : "", 0, void 0, "array") && (e.append('<a href="/customers/detail/'),
                    e.append(twig.filter.escape(this.env_, twig.attr(twig.attr(twig.attr("extra"in i ? i.extra : "", "customers"), twig.attr("customers_keys"in i ? i.customers_keys : "", 0, void 0, "array"), void 0, "array"), "id"), "light_escape", null, !0)),
                    e.append('" class="card-task__linked-for-todo-lead js-navigate-link">'),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("customer_name", twig.attr(twig.attr(twig.attr("extra"in i ? i.extra : "", "customers"), twig.attr("customers_keys"in i ? i.customers_keys : "", 0, void 0, "array"), void 0, "array"), "name"), twig.attr(twig.attr(twig.attr("extra"in i ? i.extra : "", "customers"), twig.attr("customers_keys"in i ? i.customers_keys : "", 0, void 0, "array"), void 0, "array"), "id")), "light_escape", null, !0)),
                    e.append("</a>"),
                    (twig.attr(twig.attr("extra"in i ? i.extra : "", "contacts"), twig.attr("contacts_keys"in i ? i.contacts_keys : "", 0, void 0, "array"), void 0, "array") || twig.attr(twig.attr("extra"in i ? i.extra : "", "companies"), twig.attr("companies_keys"in i ? i.companies_keys : "", 0, void 0, "array"), void 0, "array")) && e.append(", ")),
                    twig.attr("contacts_keys"in i ? i.contacts_keys : "", 0, void 0, "array") && (e.append('<a href="/contacts/detail/'),
                    e.append(twig.filter.escape(this.env_, twig.attr(twig.attr(twig.attr("extra"in i ? i.extra : "", "contacts"), twig.attr("contacts_keys"in i ? i.contacts_keys : "", 0, void 0, "array"), void 0, "array"), "id"), "light_escape", null, !0)),
                    e.append('" class="card-task__linked-for-todo-contact js-navigate-link">'),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("contact_name", twig.attr(twig.attr(twig.attr("extra"in i ? i.extra : "", "contacts"), twig.attr("contacts_keys"in i ? i.contacts_keys : "", 0, void 0, "array"), void 0, "array"), "name")), "light_escape", null, !0)),
                    e.append("</a>"),
                    twig.attr(twig.attr("extra"in i ? i.extra : "", "companies"), twig.attr("companies_keys"in i ? i.companies_keys : "", 0, void 0, "array"), void 0, "array") && e.append(", ")),
                    twig.attr("companies_keys"in i ? i.companies_keys : "", 0, void 0, "array") && (e.append('<a href="/companies/detail/'),
                    e.append(twig.filter.escape(this.env_, twig.attr(twig.attr(twig.attr("extra"in i ? i.extra : "", "companies"), twig.attr("companies_keys"in i ? i.companies_keys : "", 0, void 0, "array"), void 0, "array"), "id"), "light_escape", null, !0)),
                    e.append('" class="card-task__linked-for-todo-company js-navigate-link">'),
                    e.append(twig.filter.escape(this.env_, twig.attr(twig.attr(twig.attr("extra"in i ? i.extra : "", "companies"), twig.attr("companies_keys"in i ? i.companies_keys : "", 0, void 0, "array"), void 0, "array"), "name"), "light_escape", null, !0)),
                    e.append("</a>")),
                    "editable"in i && i.editable && (e.append('<span class="js-unlink card-task__linked-for-todo-unlink">'),
                    e.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "card_unlink"), "light_escape", null, !0)),
                    e.append("</span>")),
                    e.append("</div>"),
                    "editable"in i && i.editable && (new (t._get("interface/controls/suggest.twig"))(this.env_).render_(e, twig.extend({}, i, {
                        id: "cart-task_change_entity",
                        input_class_name: "js-todo-form-suggest",
                        class_name: "card-task__linked-for-todo-suggest",
                        placeholder: this.env_.filter("i18n", "tasks_linked_placeholder"),
                        ajax: {
                            url: "/ajax/todo/search/",
                            params: "search_string=#q#"
                        },
                        value: "linked_name"in i ? i.linked_name : "",
                        value_id: "linked_id"in i ? i.linked_id : "",
                        additional_data: 'data-no-filter="y" data-entity="' + twig.attr("linked"in i ? i.linked : "", "entity") + '"'
                    })),
                    e.append('<input type="hidden" name="element_id" value="'),
                    e.append(twig.filter.escape(this.env_, "linked_id"in i ? i.linked_id : "", "light_escape", null, !0)),
                    e.append('">')),
                    e.append("</div>"))
                }
                ,
                e.prototype.getTemplateName = function() {
                    return "interface_todo_form_linked"
                }
                ,
                e.prototype.isTraitable = function() {
                    return !1
                }
                ,
                t._add("interface/todo/form/linked", e)
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
                e.prototype.render_ = function(t, e, i) {
                    i = void 0 === i ? {} : i,
                    twig.attr("render_data"in e ? e.render_data : "", "text") && (t.append('<span class="card-task__result-wrapper__inner__result-text">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Result") + "&nbsp;&nbsp;&#8209;&nbsp;", "light_escape", null, !0)),
                    t.append("</span>"),
                    t.append(this.env_.filter("parse_urls", twig.filter.nl2br(twig.filter.escape(this.env_, twig.attr("render_data"in e ? e.render_data : "", "text"))))))
                }
                ,
                e.prototype.getTemplateName = function() {
                    return "interface_todo_form_task_result"
                }
                ,
                e.prototype.isTraitable = function() {
                    return !1
                }
                ,
                t._add("interface/todo/form/task_result", e)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var e = function(t) {
                    twig.Template.call(this, t),
                    this.setBlocks({
                        clearer: twig.bind(this.block_clearer, this)
                    })
                };
                twig.inherits(e, twig.Template),
                e.prototype.getParent_ = function(e) {
                    return t._get("interface/controls/contenteditable.twig")
                }
                ,
                e.prototype.render_ = function(t, e, i) {
                    i = void 0 === i ? {} : i,
                    this.getParent(e).render_(t, e, twig.extend({}, this.getBlocks(), i))
                }
                ,
                e.prototype.block_clearer = function(t, e, i) {
                    i = void 0 === i ? {} : i,
                    t.append('<span class="card-task__result-wrapper__inner__result-text">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Result") + "&nbsp;&nbsp;&#8209;", "light_escape", null, !0)),
                    t.append("</span>")
                }
                ,
                e.prototype.getTemplateName = function() {
                    return "interface_todo_form_task_result_edit"
                }
                ,
                e.prototype.isTraitable = function() {
                    return !1
                }
                ,
                t._add("interface/todo/form/task_result_edit", e)
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
                e.prototype.render_ = function(e, i, n) {
                    n = void 0 === n ? {} : n,
                    i.cleaned_text = this.env_.filter("task_text", twig.filter.escape(this.env_, twig.attr("data"in i ? i.data : "", "text"))),
                    i.date_time = this.env_.filter("feed_date", this.env_.filter("task_date", "complete_till"in i ? i.complete_till : "", "date")),
                    i.time = this.env_.filter("task_date", "complete_till"in i ? i.complete_till : "", "time"),
                    ("time"in i ? i.time : "") != twig.attr("lang"in i ? i.lang : "", "tasks_all_day") && (i.date_time = ("date_time"in i ? i.date_time : "") + " " + ("time"in i ? i.time : ""));
                    var a = e;
                    (e = new twig.StringBuffer).append('<span class="card-task__inner-header"><span class="card-task__inner-header-left"><span class="card-task__date">'),
                    e.append(twig.filter.escape(this.env_, "date_time"in i ? i.date_time : "", "light_escape", null, !0)),
                    ("duration"in i ? i.duration : "") > 0 && (e.append("-"),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("task_date", Number("complete_till"in i ? i.complete_till : "") + Number("duration"in i ? i.duration : ""), "time"), "light_escape", null, !0))),
                    "expired"in i && i.expired && "expired_diff"in i && i.expired_diff && (e.append(' <b class="card-task__expired-diff">('),
                    e.append(twig.filter.escape(this.env_, "expired_diff"in i ? i.expired_diff : "", "light_escape", null, !0)),
                    e.append(" "),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("numeral", this.env_.filter("i18n", "day,days,days,days"), "expired_diff"in i ? i.expired_diff : ""), "light_escape", null, !0)),
                    e.append(")</b>")),
                    e.append("</span>"),
                    new (t._get("interface/notes/types/task_header_name_user.twig"))(this.env_).render_(e, i),
                    e.append("</span></span>"),
                    new (t._get("interface/common/tasks_type_name.twig"))(this.env_).render_(e, twig.extend({}, i, {
                        icon_class_name: "card-task__type-icon card-task__type-icon-absolute",
                        type: "type"in i ? i.type : "",
                        type_name: "type_name"in i ? i.type_name : "",
                        type_icon: "type_icon"in i ? i.type_icon : "",
                        type_color: "type_color"in i ? i.type_color : ""
                    })),
                    i.type_name_clean = new twig.Markup(e.toString()),
                    e = a,
                    i.type_name_clean = ("type_name_clean"in i ? i.type_name_clean : "") + "",
                    i.text_ar = this.env_.filter("by_paragraphs", twig.filter.trim("cleaned_text"in i ? i.cleaned_text : "")),
                    i.sliced = !1,
                    twig.filter.length(this.env_, "cleaned_text"in i ? i.cleaned_text : "") > 500 ? i.sliced = ("type_name_clean"in i ? i.type_name_clean : "") + " — " + this.env_.filter("slice", this.env_, "cleaned_text"in i ? i.cleaned_text : "", 0, 300) + "..." : twig.filter.length(this.env_, "text_ar"in i ? i.text_ar : "") > 4 && (i.sliced = this.env_.filter("by_paragraphs", [("type_name_clean"in i ? i.type_name_clean : "") + " - " + twig.attr("text_ar"in i ? i.text_ar : "", 0, void 0, "array"), twig.attr("text_ar"in i ? i.text_ar : "", 1, void 0, "array"), twig.attr("text_ar"in i ? i.text_ar : "", 2, void 0, "array"), twig.attr("text_ar"in i ? i.text_ar : "", 3, void 0, "array")], "join") + "..."),
                    "cleaned_text"in i && i.cleaned_text ? i.task_text = ("type_name_clean"in i ? i.type_name_clean : "") + " — " + ("cleaned_text"in i ? i.cleaned_text : "") : i.task_text = "type_name_clean"in i ? i.type_name_clean : "",
                    e.append('<div class="js-note '),
                    "expired"in i && i.expired && e.append("js-note-fixable"),
                    e.append(' card-task-wrapper"><div class="card-task card-task-'),
                    "expired"in i && i.expired ? (e.append("expired "),
                    "completable"in i && i.completable || e.append("incompletable")) : "is_future"in i && i.is_future && (e.append("future "),
                    "is_today"in i && i.is_today && e.append("today")),
                    e.append('">'),
                    new (t._get("interface/todo/form/linked.twig"))(this.env_).render_(e, twig.extend({}, i, {
                        editable: !1,
                        is_completed: "is_completed"in i ? i.is_completed : ""
                    })),
                    e.append('<div class="card-task__inner '),
                    "is_completed"in i && i.is_completed && e.append("card-task__inner__completed"),
                    e.append('"><div class="card-task__inner-content">'),
                    "sliced"in i && i.sliced ? (e.append('<div class="note--body--content-sliced">'),
                    e.append(this.env_.filter("parse_urls", this.env_.filter("nl2p", twig.filter.trim("sliced"in i ? i.sliced : ""), !0))),
                    e.append('<a href="#" class="js-note-expander note-expander">'),
                    e.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "expand"), "light_escape", null, !0)),
                    e.append('</a></div><div class="note--body--content-not-sliced">'),
                    e.append(this.env_.filter("parse_urls", this.env_.filter("nl2p", twig.filter.trim("task_text"in i ? i.task_text : ""), !0))),
                    e.append("</div>")) : e.append(this.env_.filter("parse_urls", this.env_.filter("nl2p", twig.filter.trim("task_text"in i ? i.task_text : ""), !0))),
                    e.append('</div></div><div class="card-task__result-wrapper '),
                    "is_completed"in i && i.is_completed && !twig.attr("result"in i ? i.result : "", "text") && e.append(" card-task__result-wrapper__hidden"),
                    e.append('">'),
                    "is_completed"in i && i.is_completed ? (e.append('<div class="card-task__result-wrapper__inner js-edit-result-completed-task"><p class="card-task__result-wrapper__inner__paragraph">'),
                    new (t._get("interface/todo/form/task_result.twig"))(this.env_).render_(e, twig.extend({}, i, {
                        render_data: "result"in i ? i.result : ""
                    })),
                    e.append("</p></div>")) : (e.append('<div class="card-task__result-wrapper__inner"><textarea name="result" placeholder="'),
                    e.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "tasks_first_add_result"), "light_escape", null, !0)),
                    e.append('" class="card-task__result-wrapper__inner__textarea js-task-result-textarea"></textarea>'),
                    new (t._get("interface/controls/button.twig"))(this.env_).render_(e, twig.extend({}, i, {
                        text: twig.attr("lang"in i ? i.lang : "", "tasks_first_complete"),
                        class_name: "button-input-disabled button-input_blue js-task-result-button card-task__button",
                        tab_index: "-1"
                    })),
                    e.append("</div>"),
                    new (t._get("interface/cards/tasks/clone.twig"))(this.env_).render_(e, i)),
                    e.append("</div></div></div>")
                }
                ,
                e.prototype.getTemplateName = function() {
                    return "interface_todo_form_view"
                }
                ,
                e.prototype.isTraitable = function() {
                    return !1
                }
                ,
                t._add("interface/todo/form/view", e)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var e = function(t) {
                    twig.Template.call(this, t),
                    this.setBlocks({
                        column: twig.bind(this.block_column, this)
                    })
                };
                twig.inherits(e, twig.Template),
                e.prototype.getParent_ = function(e) {
                    return t._get("interface/pipeline/body.twig")
                }
                ,
                e.prototype.render_ = function(t, e, i) {
                    i = void 0 === i ? {} : i,
                    e.visible_count = 0,
                    e.three_count = 0,
                    e.is_visible = !0,
                    e.one_visible_four_column = !1,
                    this.getParent(e).render_(t, e, twig.extend({}, this.getBlocks(), i))
                }
                ,
                e.prototype.block_column = function(e, i, n) {
                    n = void 0 === n ? {} : n,
                    i._parent = i;
                    var a = "rows"in i ? i.rows : ""
                      , r = {
                        index0: 0,
                        index: 1,
                        first: !0
                    };
                    if (twig.countable(a)) {
                        var s = twig.count(a);
                        r.revindex0 = s - 1,
                        r.revindex = s,
                        r.length = s,
                        r.last = 1 === s
                    }
                    twig.forEach(a, (function(n, a) {
                        i.key = a,
                        i.row = n,
                        "is_visible"in i && i.is_visible ? ((twig.attr("items"in i ? i.items : "", twig.attr("row"in i ? i.row : "", "ID"), void 0, "array") || twig.contains(["today", "tomorrow"], twig.attr("row"in i ? i.row : "", "ID"))) && (i.visible_count = Number("visible_count"in i ? i.visible_count : "") + Number(1)),
                        3 == ("visible_count"in i ? i.visible_count : "") && (i.is_visible = !1),
                        i.three_count = Number("three_count"in i ? i.three_count : "") + Number(1),
                        new (t._get("interface/pipeline/body_item.twig"))(this.env_).render_(e, twig.extend({}, i, {
                            max_index: 9
                        }))) : twig.attr("items"in i ? i.items : "", twig.attr("row"in i ? i.row : "", "ID"), void 0, "array") && (i.one_visible_four_column = !0),
                        ++r.index0,
                        ++r.index,
                        r.first = !1,
                        r.length && (--r.revindex0,
                        --r.revindex,
                        r.last = 0 === r.revindex0)
                    }
                    ), this),
                    e.append('<div class="pipeline_cell pipeline_cell-four-column '),
                    "one_visible_four_column"in i && i.one_visible_four_column || e.append(" hidden "),
                    e.append('">'),
                    i._parent = i,
                    a = "rows"in i ? i.rows : "",
                    r = {
                        index0: 0,
                        index: 1,
                        first: !0
                    },
                    twig.countable(a) && (s = twig.count(a),
                    r.revindex0 = s - 1,
                    r.revindex = s,
                    r.length = s,
                    r.last = 1 === s),
                    twig.forEach(a, (function(n, a) {
                        i.key = a,
                        i.row = n,
                        twig.attr(r, "index") > ("three_count"in i ? i.three_count : "") && new (t._get("interface/pipeline/body_item.twig"))(this.env_).render_(e, twig.extend({}, i, {
                            max_index: 2
                        })),
                        ++r.index0,
                        ++r.index,
                        r.first = !1,
                        r.length && (--r.revindex0,
                        --r.revindex,
                        r.last = 0 === r.revindex0)
                    }
                    ), this),
                    e.append("</div>")
                }
                ,
                e.prototype.getTemplateName = function() {
                    return "interface_todo_line_body"
                }
                ,
                e.prototype.isTraitable = function() {
                    return !1
                }
                ,
                t._add("interface/todo/line/body", e)
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
                e.prototype.render_ = function(t, e, i) {
                    i = void 0 === i ? {} : i,
                    t.append('<div class="pipeline_cell-head"><div id="status_id_'),
                    t.append(twig.filter.escape(this.env_, twig.attr("row"in e ? e.row : "", "ID"), "light_escape", null, !0)),
                    t.append('" class="pipeline_status__head"><div class="pipeline_status__head_inner"><div class="pipeline_status__head_title" title="'),
                    t.append(twig.filter.escape(this.env_, twig.attr("row"in e ? e.row : "", "NAME"), "light_escape", null, !0)),
                    t.append('"><span class="block-selectable">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("row"in e ? e.row : "", "NAME"), "light_escape", null, !0)),
                    t.append("</span></div>"),
                    1 == ("show_count"in e ? e.show_count : "") ? (t.append('<span class="block-counter js-fixed-header-stats" data-count="'),
                    t.append(twig.filter.escape(this.env_, twig.attr("count_by_periods"in e ? e.count_by_periods : "", twig.attr("row"in e ? e.row : "", "ID"), void 0, "array", !0) ? twig.filter.def(twig.attr("count_by_periods"in e ? e.count_by_periods : "", twig.attr("row"in e ? e.row : "", "ID"), void 0, "array"), 0) : 0, "light_escape", null, !0)),
                    t.append('">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("count_by_periods"in e ? e.count_by_periods : "", twig.attr("row"in e ? e.row : "", "ID"), void 0, "array", !0) ? twig.filter.def(twig.attr("count_by_periods"in e ? e.count_by_periods : "", twig.attr("row"in e ? e.row : "", "ID"), void 0, "array"), 0) : 0, "light_escape", null, !0)),
                    t.append(" "),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("numeral", this.env_.filter("i18n", "to-do,to-dos"), twig.attr("count_by_periods"in e ? e.count_by_periods : "", twig.attr("row"in e ? e.row : "", "ID"), void 0, "array")), "light_escape", null, !0)),
                    t.append("</span>")) : t.append('<span class="block-counter js-fixed-header-stats">&nbsp;</span>'),
                    t.append('</div><span class="pipeline_status__head_line" style="background: '),
                    t.append(twig.filter.escape(this.env_, twig.attr("row"in e ? e.row : "", "COLOR"), "light_escape", null, !0)),
                    t.append("; color: "),
                    t.append(twig.filter.escape(this.env_, twig.attr("row"in e ? e.row : "", "COLOR"), "light_escape", null, !0)),
                    t.append(';"></span></div></div>')
                }
                ,
                e.prototype.getTemplateName = function() {
                    return "interface_todo_line_header_tmpl"
                }
                ,
                e.prototype.isTraitable = function() {
                    return !1
                }
                ,
                t._add("interface/todo/line/header_tmpl", e)
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
                e.prototype.render_ = function(e, i, n) {
                    n = void 0 === n ? {} : n,
                    "can_edit"in i && i.can_edit || (i.can_edit = twig.attr("item"in i ? i.item : "", "can_edit")),
                    (!("max_index"in i) || !i.max_index || ("item_index"in i ? i.item_index : "") <= ("max_index"in i ? i.max_index : "")) && (e.append('<div class="todo-line__item '),
                    "expire" == twig.attr("row"in i ? i.row : "", "ID") && e.append("todo-line__item_expired"),
                    e.append(" "),
                    "expire" != twig.attr("row"in i ? i.row : "", "ID") && "today" != twig.attr("row"in i ? i.row : "", "ID") && e.append("todo-line__item_transparent"),
                    e.append(" "),
                    twig.attr("item"in i ? i.item : "", "complate") && e.append("todo-line__item_complete"),
                    e.append(" js-hs-prevent "),
                    !twig.attr("item"in i ? i.item : "", "complate") && twig.attr("item"in i ? i.item : "", "editable") && e.append("js-pipeline-sortable"),
                    e.append('" id="'),
                    e.append(twig.filter.escape(this.env_, twig.attr("item"in i ? i.item : "", "id"), "light_escape", null, !0)),
                    e.append('" data-id="'),
                    e.append(twig.filter.escape(this.env_, twig.filter.replace(twig.attr("item"in i ? i.item : "", "id"), {
                        id_: ""
                    }), "light_escape", null, !0)),
                    e.append('">'),
                    new (t._get("interface/todo/line/item_tmpl.twig"))(this.env_).render_(e, i),
                    e.append("</div>"),
                    ("max_index"in i ? i.max_index : "") > 0 && ("item_index"in i ? i.item_index : "") == ("max_index"in i ? i.max_index : "") && ((twig.attr("count_by_periods"in i ? i.count_by_periods : "", twig.attr("row"in i ? i.row : "", "ID"), void 0, "array", !0) ? twig.filter.def(twig.attr("count_by_periods"in i ? i.count_by_periods : "", twig.attr("row"in i ? i.row : "", "ID"), void 0, "array"), 0) : 0) > Number("item_index"in i ? i.item_index : "") + Number(1) || 0 == ("show_count"in i ? i.show_count : "")) && new (t._get("interface/todo/line/more_tmpl.twig"))(this.env_).render_(e, i))
                }
                ,
                e.prototype.getTemplateName = function() {
                    return "interface_todo_line_item_in"
                }
                ,
                e.prototype.isTraitable = function() {
                    return !1
                }
                ,
                t._add("interface/todo/line/item_in", e)
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
                e.prototype.render_ = function(t, e, i) {
                    i = void 0 === i ? {} : i,
                    this.env_.test("iterable", "value"in e ? e.value : "") ? e.val = twig.filter.join("value"in e ? e.value : "", ",") : e.val = "value"in e ? e.value : "",
                    4 == twig.attr("type"in e ? e.type : "", "entity_type") && "date" == twig.attr("type"in e ? e.type : "", "field_name") && 1 == twig.attr("item"in e ? e.item : "", "complate") ? t.append(twig.filter.escape(this.env_, this.env_.filter("task_date", twig.attr("item"in e ? e.item : "", "updated")), "light_escape", null, !0)) : 4 == twig.attr("type"in e ? e.type : "", "entity_type") && "manager" == twig.attr("type"in e ? e.type : "", "field_name") ? (twig.attr(twig.attr("item"in e ? e.item : "", "manager"), "created_by") && twig.attr(twig.attr(twig.attr("item"in e ? e.item : "", "manager"), "main_user"), "id") != twig.attr(twig.attr(twig.attr("item"in e ? e.item : "", "manager"), "created_by"), "id") && (t.append(twig.filter.escape(this.env_, twig.attr("lang"in e ? e.lang : "", "tasks_from"), "light_escape", null, !0)),
                    t.append(" "),
                    t.append(twig.filter.escape(this.env_, twig.attr(twig.attr(twig.attr("item"in e ? e.item : "", "manager"), "created_by"), "name"), "light_escape", null, !0)),
                    t.append("&nbsp;")),
                    twig.attr(twig.attr(twig.attr("item"in e ? e.item : "", "manager"), "main_user"), "name") && (t.append(twig.filter.escape(this.env_, twig.attr("lang"in e ? e.lang : "", "tasks_for"), "light_escape", null, !0)),
                    t.append(" "),
                    t.append(twig.filter.escape(this.env_, twig.attr(twig.attr(twig.attr("item"in e ? e.item : "", "manager"), "main_user"), "name"), "light_escape", null, !0))),
                    t.append(twig.filter.escape(this.env_, "after"in e ? e.after : "", "light_escape", null, !0))) : 2 == twig.attr("type"in e ? e.type : "", "entity_type") && "status_name" == twig.attr("type"in e ? e.type : "", "field_name") ? (t.append('<p class="todo-line__item-status-name" style="background:'),
                    t.append(twig.filter.escape(this.env_, twig.attr(twig.attr("item"in e ? e.item : "", "linked"), "status_color"), "light_escape", null, !0)),
                    t.append(';">'),
                    t.append(twig.filter.escape(this.env_, twig.attr(twig.attr("item"in e ? e.item : "", "linked"), "status_name"), "light_escape", null, !0)),
                    t.append("</p>"),
                    t.append(twig.filter.escape(this.env_, "after"in e ? e.after : "", "light_escape", null, !0))) : 4 == twig.attr("type"in e ? e.type : "", "entity_type") && "date" == twig.attr("type"in e ? e.type : "", "field_name") ? (t.append(twig.filter.escape(this.env_, this.env_.filter("task_date", "val"in e ? e.val : ""), "light_escape", null, !0)),
                    twig.attr("item"in e ? e.item : "", "duration") && 0 != twig.attr("item"in e ? e.item : "", "duration") || t.append(twig.filter.escape(this.env_, "after"in e ? e.after : "", "light_escape", null, !0)),
                    twig.attr("item"in e ? e.item : "", "duration") > 0 && (t.append(" - "),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("task_date", Number("val"in e ? e.val : "") + Number(twig.attr("item"in e ? e.item : "", "duration")), "time"), "light_escape", null, !0)),
                    t.append(twig.filter.escape(this.env_, "after"in e ? e.after : "", "light_escape", null, !0)))) : 4 == twig.attr("type"in e ? e.type : "", "entity_type") && "type_name" == twig.attr("type"in e ? e.type : "", "field_name") ? (t.append('<div class="todo-line__item-icon-wrapper">'),
                    1 == twig.attr("item"in e ? e.item : "", "type") ? t.append('<span class="todo-line__item-icon-inner"><svg class="svg-icon svg-tasks--types-icons--6-dims modal-body__inner__todo-types__item__iconpick__icon todo-line__item-icon todo-line__item-icon-follow-up"><use xlink:href="#tasks--types-icons--6"></use></svg></span>') : 2 == twig.attr("item"in e ? e.item : "", "type") ? t.append('<span class="todo-line__item-icon-inner"><svg class="svg-icon svg-tasks--types-icons--70-dims modal-body__inner__todo-types__item__iconpick__icon todo-line__item-icon todo-line__item-icon-case"><use xlink:href="#tasks--types-icons--70"></use></svg></span>') : (t.append('<span class="todo-line__item-icon-inner"><svg class="svg-icon svg-tasks--types-icons--'),
                    t.append(twig.filter.escape(this.env_, twig.attr("item"in e ? e.item : "", "icon_id"), "light_escape", null, !0)),
                    t.append('-dims modal-body__inner__todo-types__item__iconpick__icon todo-line__item-icon" style="fill: '),
                    t.append(twig.filter.escape(this.env_, "#" + twig.attr("item"in e ? e.item : "", "icon_color"), "light_escape", null, !0)),
                    t.append('!important;"><use xlink:href="#tasks--types-icons--'),
                    t.append(twig.filter.escape(this.env_, twig.attr("item"in e ? e.item : "", "icon_id"), "light_escape", null, !0)),
                    t.append('"></use></svg></span>')),
                    t.append('<p class="todo-line__item_paragraph">'),
                    t.append(twig.filter.escape(this.env_, "val"in e ? e.val : "", "light_escape", null, !0)),
                    t.append("</p></div>"),
                    t.append(twig.filter.escape(this.env_, "after"in e ? e.after : "", "light_escape", null, !0))) : 4 == twig.attr("type"in e ? e.type : "", "entity_type") && "text" == twig.attr("type"in e ? e.type : "", "field_name") ? (e.text_ar = this.env_.filter("by_paragraphs", twig.filter.escape(this.env_, "val"in e ? e.val : "")),
                    e.sliced = !1,
                    twig.filter.length(this.env_, "val"in e ? e.val : "") > 200 && (e.sliced = twig.filter.escape(this.env_, this.env_.filter("slice", this.env_, "val"in e ? e.val : "", "start"in e ? e.start : "", 150)) + "...",
                    e.text_ar = this.env_.filter("by_paragraphs", "sliced"in e ? e.sliced : "")),
                    twig.filter.length(this.env_, "text_ar"in e ? e.text_ar : "") > 4 && (e.sliced = this.env_.filter("by_paragraphs", [twig.attr("text_ar"in e ? e.text_ar : "", 0, void 0, "array"), twig.attr("text_ar"in e ? e.text_ar : "", 1, void 0, "array"), twig.attr("text_ar"in e ? e.text_ar : "", 2, void 0, "array"), twig.attr("text_ar"in e ? e.text_ar : "", 3, void 0, "array")], "join") + "..."),
                    "sliced"in e && e.sliced ? e.prepare_text = "sliced"in e ? e.sliced : "" : e.prepare_text = this.env_.filter("parse_urls", this.env_.filter("nl2p", twig.filter.escape(this.env_, "val"in e ? e.val : ""))),
                    t.append('<p class=" todo-line__item-break-word todo-line__item_paragraph">'),
                    t.append("prepare_text"in e ? e.prepare_text : ""),
                    t.append("</p>"),
                    t.append(twig.filter.escape(this.env_, "after"in e ? e.after : "", "light_escape", null, !0))) : (t.append(twig.filter.escape(this.env_, "val"in e ? e.val : "", "light_escape", null, !0)),
                    t.append(twig.filter.escape(this.env_, "after"in e ? e.after : "", "light_escape", null, !0)))
                }
                ,
                e.prototype.getTemplateName = function() {
                    return "interface_todo_line_item_tile_filtered"
                }
                ,
                e.prototype.isTraitable = function() {
                    return !1
                }
                ,
                t._add("interface/todo/line/item_tile_filtered", e)
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
                e.prototype.render_ = function(e, i, n) {
                    n = void 0 === n ? {} : n,
                    "can_edit"in i && i.can_edit || (i.can_edit = twig.attr("item"in i ? i.item : "", "can_edit")),
                    i.tc_p = twig.attr("tile_config"in i ? i.tile_config : "", "positions"),
                    "customers" == twig.attr(twig.attr("item"in i ? i.item : "", "linked"), "entity") || "leads" == twig.attr(twig.attr("item"in i ? i.item : "", "linked"), "entity") ? (i.tile = ["", twig.attr(twig.attr("item"in i ? i.item : "", "linked"), "mainContact"), twig.attr("item"in i ? i.item : "", "linked"), twig.attr(twig.attr("item"in i ? i.item : "", "linked"), "company"), "item"in i ? i.item : ""],
                    i.url = twig.attr(twig.attr("item"in i ? i.item : "", "linked"), "uri"),
                    i.name = twig.attr(twig.attr("item"in i ? i.item : "", "linked"), "name")) : "contacts" == twig.attr(twig.attr("item"in i ? i.item : "", "linked"), "entity") ? (i.tile = ["", twig.attr("item"in i ? i.item : "", "linked"), twig.attr(twig.attr("item"in i ? i.item : "", "linked"), "lead"), twig.attr(twig.attr("item"in i ? i.item : "", "linked"), "company"), "item"in i ? i.item : ""],
                    i.url = twig.attr(twig.attr("item"in i ? i.item : "", "linked"), "uri"),
                    i.name = twig.attr(twig.attr("item"in i ? i.item : "", "linked"), "name")) : "companies" == twig.attr(twig.attr("item"in i ? i.item : "", "linked"), "entity") && (i.tile = ["", "", "", twig.attr("item"in i ? i.item : "", "linked"), "item"in i ? i.item : ""],
                    i.url = twig.attr(twig.attr("item"in i ? i.item : "", "linked"), "uri"),
                    i.name = twig.attr(twig.attr("item"in i ? i.item : "", "linked"), "name")),
                    i.p_1 = twig.attr("tc_p"in i ? i.tc_p : "", "position_1"),
                    i.p_2 = twig.attr("tc_p"in i ? i.tc_p : "", "position_2"),
                    i.p_3 = twig.attr("tc_p"in i ? i.tc_p : "", "position_3"),
                    i.p_4 = twig.attr("tc_p"in i ? i.tc_p : "", "position_4"),
                    i.p_5 = twig.attr("tc_p"in i ? i.tc_p : "", "position_5"),
                    i.p_6 = twig.attr("tc_p"in i ? i.tc_p : "", "position_6"),
                    i.p_7 = twig.attr("tc_p"in i ? i.tc_p : "", "position_7"),
                    i.p_8 = twig.attr("tc_p"in i ? i.tc_p : "", "position_8"),
                    i.p_9 = twig.attr("tc_p"in i ? i.tc_p : "", "position_9"),
                    i.pos_1 = twig.attr("item"in i ? i.item : "", twig.attr("p_1"in i ? i.p_1 : "", "field_name"), void 0, "array") ? twig.attr("item"in i ? i.item : "", twig.attr("p_1"in i ? i.p_1 : "", "field_name"), void 0, "array") : twig.attr(twig.attr("tile"in i ? i.tile : "", twig.attr("p_1"in i ? i.p_1 : "", "entity_type"), void 0, "array"), twig.attr("p_1"in i ? i.p_1 : "", "field_name"), void 0, "array"),
                    i.pos_2 = twig.attr("item"in i ? i.item : "", twig.attr("p_2"in i ? i.p_2 : "", "field_name"), void 0, "array") ? twig.attr("item"in i ? i.item : "", twig.attr("p_2"in i ? i.p_2 : "", "field_name"), void 0, "array") : twig.attr(twig.attr("tile"in i ? i.tile : "", twig.attr("p_2"in i ? i.p_2 : "", "entity_type"), void 0, "array"), twig.attr("p_2"in i ? i.p_2 : "", "field_name"), void 0, "array"),
                    i.pos_3 = twig.attr("item"in i ? i.item : "", twig.attr("p_3"in i ? i.p_3 : "", "field_name"), void 0, "array") ? twig.attr("item"in i ? i.item : "", twig.attr("p_3"in i ? i.p_3 : "", "field_name"), void 0, "array") : twig.attr(twig.attr("tile"in i ? i.tile : "", twig.attr("p_3"in i ? i.p_3 : "", "entity_type"), void 0, "array"), twig.attr("p_3"in i ? i.p_3 : "", "field_name"), void 0, "array"),
                    i.pos_4 = twig.attr("item"in i ? i.item : "", twig.attr("p_4"in i ? i.p_4 : "", "field_name"), void 0, "array") ? twig.attr("item"in i ? i.item : "", twig.attr("p_4"in i ? i.p_4 : "", "field_name"), void 0, "array") : twig.attr(twig.attr("tile"in i ? i.tile : "", twig.attr("p_4"in i ? i.p_4 : "", "entity_type"), void 0, "array"), twig.attr("p_4"in i ? i.p_4 : "", "field_name"), void 0, "array"),
                    i.pos_5 = twig.attr("item"in i ? i.item : "", twig.attr("p_5"in i ? i.p_5 : "", "field_name"), void 0, "array") ? twig.attr("item"in i ? i.item : "", twig.attr("p_5"in i ? i.p_5 : "", "field_name"), void 0, "array") : twig.attr(twig.attr("tile"in i ? i.tile : "", twig.attr("p_5"in i ? i.p_5 : "", "entity_type"), void 0, "array"), twig.attr("p_5"in i ? i.p_5 : "", "field_name"), void 0, "array"),
                    i.pos_6 = twig.attr("item"in i ? i.item : "", twig.attr("p_6"in i ? i.p_6 : "", "field_name"), void 0, "array") ? twig.attr("item"in i ? i.item : "", twig.attr("p_6"in i ? i.p_6 : "", "field_name"), void 0, "array") : twig.attr(twig.attr("tile"in i ? i.tile : "", twig.attr("p_6"in i ? i.p_6 : "", "entity_type"), void 0, "array"), twig.attr("p_6"in i ? i.p_6 : "", "field_name"), void 0, "array"),
                    i.pos_7 = twig.attr("item"in i ? i.item : "", twig.attr("p_7"in i ? i.p_7 : "", "field_name"), void 0, "array") ? twig.attr("item"in i ? i.item : "", twig.attr("p_7"in i ? i.p_7 : "", "field_name"), void 0, "array") : twig.attr(twig.attr("tile"in i ? i.tile : "", twig.attr("p_7"in i ? i.p_7 : "", "entity_type"), void 0, "array"), twig.attr("p_7"in i ? i.p_7 : "", "field_name"), void 0, "array"),
                    i.pos_8 = twig.attr("item"in i ? i.item : "", twig.attr("p_8"in i ? i.p_8 : "", "field_name"), void 0, "array") ? twig.attr("item"in i ? i.item : "", twig.attr("p_8"in i ? i.p_8 : "", "field_name"), void 0, "array") : twig.attr(twig.attr("tile"in i ? i.tile : "", twig.attr("p_8"in i ? i.p_8 : "", "entity_type"), void 0, "array"), twig.attr("p_8"in i ? i.p_8 : "", "field_name"), void 0, "array"),
                    i.pos_9 = twig.attr("item"in i ? i.item : "", twig.attr("p_9"in i ? i.p_9 : "", "field_name"), void 0, "array") ? twig.attr("item"in i ? i.item : "", twig.attr("p_9"in i ? i.p_9 : "", "field_name"), void 0, "array") : twig.attr(twig.attr("tile"in i ? i.tile : "", twig.attr("p_9"in i ? i.p_9 : "", "entity_type"), void 0, "array"), twig.attr("p_9"in i ? i.p_9 : "", "field_name"), void 0, "array"),
                    1 == twig.attr("p_1"in i ? i.p_1 : "", "entity_type") && "name" == twig.attr("p_1"in i ? i.p_1 : "", "field_name") && (i.pos_1 = twig.attr("tile"in i ? i.tile : "", twig.attr("p_1"in i ? i.p_1 : "", "entity_type"), void 0, "array") ? this.env_.filter("contact_name", "pos_1"in i ? i.pos_1 : "") : ""),
                    1 == twig.attr("p_2"in i ? i.p_2 : "", "entity_type") && "name" == twig.attr("p_2"in i ? i.p_2 : "", "field_name") && (i.pos_2 = twig.attr("tile"in i ? i.tile : "", twig.attr("p_2"in i ? i.p_2 : "", "entity_type"), void 0, "array") ? this.env_.filter("contact_name", "pos_2"in i ? i.pos_2 : "") : ""),
                    1 == twig.attr("p_3"in i ? i.p_3 : "", "entity_type") && "name" == twig.attr("p_3"in i ? i.p_3 : "", "field_name") && (i.pos_3 = twig.attr("tile"in i ? i.tile : "", twig.attr("p_3"in i ? i.p_3 : "", "entity_type"), void 0, "array") ? this.env_.filter("contact_name", "pos_3"in i ? i.pos_3 : "") : ""),
                    1 == twig.attr("p_4"in i ? i.p_4 : "", "entity_type") && "name" == twig.attr("p_4"in i ? i.p_4 : "", "field_name") && (i.pos_4 = twig.attr("tile"in i ? i.tile : "", twig.attr("p_4"in i ? i.p_4 : "", "entity_type"), void 0, "array") ? this.env_.filter("contact_name", "pos_4"in i ? i.pos_4 : "") : ""),
                    1 == twig.attr("p_5"in i ? i.p_5 : "", "entity_type") && "name" == twig.attr("p_5"in i ? i.p_5 : "", "field_name") && (i.pos_5 = twig.attr("tile"in i ? i.tile : "", twig.attr("p_5"in i ? i.p_5 : "", "entity_type"), void 0, "array") ? this.env_.filter("contact_name", "pos_5"in i ? i.pos_5 : "") : ""),
                    1 == twig.attr("p_6"in i ? i.p_6 : "", "entity_type") && "name" == twig.attr("p_6"in i ? i.p_6 : "", "field_name") && (i.pos_6 = twig.attr("tile"in i ? i.tile : "", twig.attr("p_6"in i ? i.p_6 : "", "entity_type"), void 0, "array") ? this.env_.filter("contact_name", "pos_6"in i ? i.pos_6 : "") : ""),
                    1 == twig.attr("p_7"in i ? i.p_7 : "", "entity_type") && "name" == twig.attr("p_7"in i ? i.p_7 : "", "field_name") && (i.pos_7 = twig.attr("tile"in i ? i.tile : "", twig.attr("p_7"in i ? i.p_7 : "", "entity_type"), void 0, "array") ? this.env_.filter("contact_name", "pos_7"in i ? i.pos_7 : "") : ""),
                    1 == twig.attr("p_8"in i ? i.p_8 : "", "entity_type") && "name" == twig.attr("p_8"in i ? i.p_8 : "", "field_name") && (i.pos_8 = twig.attr("tile"in i ? i.tile : "", twig.attr("p_8"in i ? i.p_8 : "", "entity_type"), void 0, "array") ? this.env_.filter("contact_name", "pos_8"in i ? i.pos_8 : "") : ""),
                    1 == twig.attr("p_9"in i ? i.p_9 : "", "entity_type") && "name" == twig.attr("p_9"in i ? i.p_9 : "", "field_name") && (i.pos_9 = twig.attr("tile"in i ? i.tile : "", twig.attr("p_9"in i ? i.p_9 : "", "entity_type"), void 0, "array") ? this.env_.filter("contact_name", "pos_9"in i ? i.pos_9 : "") : ""),
                    i.positions = ["pos_1"in i ? i.pos_1 : "", "pos_2"in i ? i.pos_2 : "", "pos_3"in i ? i.pos_3 : "", "pos_4"in i ? i.pos_4 : "", "pos_5"in i ? i.pos_5 : "", "pos_6"in i ? i.pos_6 : "", "pos_7"in i ? i.pos_7 : "", "pos_8"in i ? i.pos_8 : "", "pos_9"in i ? i.pos_9 : ""],
                    i.lock_rendered = !1,
                    i.pos3_rendered = !1,
                    i.arr = [],
                    i._parent = i;
                    var a = "positions"in i ? i.positions : "";
                    twig.forEach(a, (function(t, e) {
                        i._key = e,
                        i.pos = t,
                        null !== ("pos"in i ? i.pos : "") && (i.arr = twig.filter.merge("arr"in i ? i.arr : "", ["pos"in i ? i.pos : ""]))
                    }
                    ), this),
                    0 == twig.filter.length(this.env_, "arr"in i ? i.arr : "") && (e.append('<div class="todo-line__item-body"><div class="todo-line__item-body-low-block"><div class="todo-line__item-body-type">'),
                    new (t._get("interface/todo/line/item_tile_filtered.twig"))(this.env_).render_(e, twig.extend({}, i, {
                        item: "item"in i ? i.item : "",
                        value: twig.attr("item"in i ? i.item : "", "type_name")
                    })),
                    e.append("</div></div></div>")),
                    (twig.attr(twig.attr("tc_p"in i ? i.tc_p : "", "position_1"), "field_name") && "pos_1"in i && i.pos_1 || twig.attr(twig.attr("tc_p"in i ? i.tc_p : "", "position_2"), "field_name") && "pos_2"in i && i.pos_2) && (e.append('<div class="todo-line__item-contacts"><div class="todo-line__item-contacts-wrapper">'),
                    twig.attr(twig.attr("tc_p"in i ? i.tc_p : "", "position_1"), "field_name") && "pos_1"in i && i.pos_1 && (e.append('<div class="todo-line__item-contacts-contact todo-line__item-contacts-contact-inner">'),
                    new (t._get("interface/todo/line/item_tile_filtered.twig"))(this.env_).render_(e, twig.extend({}, i, {
                        type: twig.attr("tc_p"in i ? i.tc_p : "", "position_1"),
                        item: "item"in i ? i.item : "",
                        value: "pos_1"in i ? i.pos_1 : ""
                    })),
                    e.append("</div>"),
                    twig.attr(twig.attr("tc_p"in i ? i.tc_p : "", "position_2"), "field_name") && "pos_2"in i && i.pos_2 && e.append('<span class="todo-line__item-separator">,&nbsp;</span>')),
                    twig.attr(twig.attr("tc_p"in i ? i.tc_p : "", "position_2"), "field_name") && "pos_2"in i && i.pos_2 && (e.append('<div class="todo-line__item-contacts-company">'),
                    new (t._get("interface/todo/line/item_tile_filtered.twig"))(this.env_).render_(e, twig.extend({}, i, {
                        type: twig.attr("tc_p"in i ? i.tc_p : "", "position_2"),
                        item: "item"in i ? i.item : "",
                        value: "pos_2"in i ? i.pos_2 : ""
                    })),
                    e.append("</div>")),
                    e.append("</div>"),
                    i.pos3_rendered = !0,
                    twig.attr(twig.attr("tc_p"in i ? i.tc_p : "", "position_3"), "field_name") && "pos_3"in i && i.pos_3 && (e.append('<div class="todo-line__item-aside-block-type todo-line__item-aside-block">'),
                    new (t._get("interface/todo/line/item_tile_filtered.twig"))(this.env_).render_(e, twig.extend({}, i, {
                        type: twig.attr("tc_p"in i ? i.tc_p : "", "position_3"),
                        item: "item"in i ? i.item : "",
                        value: "pos_3"in i ? i.pos_3 : ""
                    })),
                    e.append("</div>")),
                    e.append("</div>")),
                    twig.attr(twig.attr("tc_p"in i ? i.tc_p : "", "position_4"), "field_name") && "pos_4"in i && i.pos_4 && (e.append('<div class="todo-line__item-lead-wrapper">'),
                    1 == twig.attr(twig.attr("tc_p"in i ? i.tc_p : "", "position_4"), "entity_type") ? i.name = twig.attr(twig.attr(twig.attr("item"in i ? i.item : "", "linked"), "mainContact"), "name") : 3 == twig.attr(twig.attr("tc_p"in i ? i.tc_p : "", "position_4"), "entity_type") && (i.name = twig.attr(twig.attr(twig.attr("item"in i ? i.item : "", "linked"), "company"), "name")),
                    e.append('<a class="js-navigate-link todo-line__item-lead" title="'),
                    e.append(twig.filter.escape(this.env_, "name"in i ? i.name : "", "light_escape", null, !0)),
                    e.append('" href="'),
                    e.append(twig.filter.escape(this.env_, "url"in i ? i.url : "", "light_escape", null, !0)),
                    e.append('">'),
                    new (t._get("interface/todo/line/item_tile_filtered.twig"))(this.env_).render_(e, twig.extend({}, i, {
                        type: twig.attr("tc_p"in i ? i.tc_p : "", "position_4"),
                        item: "item"in i ? i.item : "",
                        value: "pos_4"in i ? i.pos_4 : ""
                    })),
                    e.append("</a>"),
                    "pos3_rendered"in i && i.pos3_rendered || (i.pos3_rendered = !0,
                    twig.attr(twig.attr("tc_p"in i ? i.tc_p : "", "position_3"), "field_name") && "pos_3"in i && i.pos_3 && (e.append('<div class="todo-line__item-aside-block-type todo-line__item-aside-block">'),
                    new (t._get("interface/todo/line/item_tile_filtered.twig"))(this.env_).render_(e, twig.extend({}, i, {
                        type: twig.attr("tc_p"in i ? i.tc_p : "", "position_3"),
                        item: "item"in i ? i.item : "",
                        value: "pos_3"in i ? i.pos_3 : ""
                    })),
                    e.append("</div>"))),
                    e.append("</div>")),
                    (twig.attr(twig.attr("tc_p"in i ? i.tc_p : "", "position_5"), "field_name") && "pos_5"in i && i.pos_5 || twig.attr(twig.attr("tc_p"in i ? i.tc_p : "", "position_6"), "field_name") && "pos_6"in i && i.pos_6) && (e.append('<div class="todo-line__item-data"><div class="todo-line__item-data-wrapper">'),
                    twig.attr(twig.attr("tc_p"in i ? i.tc_p : "", "position_5"), "field_name") && "pos_5"in i && i.pos_5 && (e.append('<div class="todo-line__item-data-time '),
                    "today" == twig.attr("row"in i ? i.row : "", "ID") && e.append("todo-line__item-data-time_today"),
                    e.append(" "),
                    "expire" == twig.attr("row"in i ? i.row : "", "ID") && e.append("todo-line__item-data-time_expired"),
                    e.append('">'),
                    new (t._get("interface/todo/line/item_tile_filtered.twig"))(this.env_).render_(e, twig.extend({}, i, {
                        type: twig.attr("tc_p"in i ? i.tc_p : "", "position_5"),
                        item: "item"in i ? i.item : "",
                        value: "pos_5"in i ? i.pos_5 : "",
                        after: twig.attr(twig.attr("tc_p"in i ? i.tc_p : "", "position_6"), "field_name") && "pos_6"in i && i.pos_6 ? ",&nbsp;" : ""
                    })),
                    e.append("</div>")),
                    twig.attr(twig.attr("tc_p"in i ? i.tc_p : "", "position_6"), "field_name") && "pos_6"in i && i.pos_6 && (e.append('<div class="todo-line__item-members">'),
                    new (t._get("interface/todo/line/item_tile_filtered.twig"))(this.env_).render_(e, twig.extend({}, i, {
                        type: twig.attr("tc_p"in i ? i.tc_p : "", "position_6"),
                        item: "item"in i ? i.item : "",
                        value: "pos_6"in i ? i.pos_6 : ""
                    })),
                    e.append("</div>")),
                    e.append("</div>"),
                    twig.attr(twig.attr("tc_p"in i ? i.tc_p : "", "position_7"), "field_name") && "pos_7"in i && i.pos_7 || twig.attr(twig.attr("tc_p"in i ? i.tc_p : "", "position_8"), "field_name") && "pos_8"in i && i.pos_8 || "pos9_rendered"in i && i.pos9_rendered || (i.pos9_rendered = !0,
                    twig.attr(twig.attr("tc_p"in i ? i.tc_p : "", "position_9"), "field_name") && "pos_9"in i && i.pos_9 && (e.append('<div class="todo-line__item-aside-block todo-line__item-aside-block-bottom"><div class="todo-line__item-aside-block-bottom-type">'),
                    new (t._get("interface/todo/line/item_tile_filtered.twig"))(this.env_).render_(e, twig.extend({}, i, {
                        type: twig.attr("tc_p"in i ? i.tc_p : "", "position_9"),
                        item: "item"in i ? i.item : "",
                        value: "pos_9"in i ? i.pos_9 : ""
                    })),
                    e.append("</div></div>"))),
                    e.append("</div>")),
                    (twig.attr(twig.attr("tc_p"in i ? i.tc_p : "", "position_7"), "field_name") && "pos_7"in i && i.pos_7 || twig.attr(twig.attr("tc_p"in i ? i.tc_p : "", "position_8"), "field_name") && "pos_8"in i && i.pos_8) && (e.append('<div class="todo-line__item-body"><div class="todo-line__item-body-low-block">'),
                    twig.attr(twig.attr("tc_p"in i ? i.tc_p : "", "position_7"), "field_name") && "pos_7"in i && i.pos_7 && (e.append('<div class="todo-line__item-body-type">'),
                    new (t._get("interface/todo/line/item_tile_filtered.twig"))(this.env_).render_(e, twig.extend({}, i, {
                        type: twig.attr("tc_p"in i ? i.tc_p : "", "position_7"),
                        item: "item"in i ? i.item : "",
                        value: "pos_7"in i ? i.pos_7 : "",
                        after: twig.attr(twig.attr("tc_p"in i ? i.tc_p : "", "position_8"), "field_name") && "pos_8"in i && i.pos_8 ? ":&nbsp;" : ""
                    })),
                    e.append("</div>")),
                    twig.attr(twig.attr("tc_p"in i ? i.tc_p : "", "position_8"), "field_name") && "pos_8"in i && i.pos_8 && (e.append("<p>"),
                    new (t._get("interface/todo/line/item_tile_filtered.twig"))(this.env_).render_(e, twig.extend({}, i, {
                        type: twig.attr("tc_p"in i ? i.tc_p : "", "position_8"),
                        item: "item"in i ? i.item : "",
                        value: "pos_8"in i ? i.pos_8 : ""
                    })),
                    e.append("</p>")),
                    e.append("</div>"),
                    twig.attr(twig.attr("tc_p"in i ? i.tc_p : "", "position_9"), "field_name") && "pos_9"in i && i.pos_9 && (i.pos9_rendered = !0,
                    e.append('<div class="todo-line__item-aside-block todo-line__item-aside-block-bottom"><div class="todo-line__item-aside-block-bottom-type">'),
                    new (t._get("interface/todo/line/item_tile_filtered.twig"))(this.env_).render_(e, twig.extend({}, i, {
                        type: twig.attr("tc_p"in i ? i.tc_p : "", "position_9"),
                        item: "item"in i ? i.item : "",
                        value: "pos_9"in i ? i.pos_9 : ""
                    })),
                    e.append("</div></div>")),
                    e.append("</div>")),
                    twig.attr("item"in i ? i.item : "", "complate") && twig.attr("item"in i ? i.item : "", "result") && (e.append('<div class="todo-line__item-result todo-line__item-result-complete"><div class="todo-line__item-result-caption">'),
                    e.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "task_result"), "light_escape", null, !0)),
                    e.append(" -&nbsp;</div>"),
                    e.append(this.env_.filter("parse_urls", this.env_.filter("nl2p", twig.filter.escape(this.env_, twig.attr("item"in i ? i.item : "", "result"))))),
                    e.append("</div>")),
                    new (t._get("interface/controls/checkbox.twig"))(this.env_).render_(e, twig.extend({}, i, {
                        id: "lead_" + twig.attr("item"in i ? i.item : "", "id"),
                        value: twig.attr("item"in i ? i.item : "", "id"),
                        class_name: "pipeline_leads__lead-checkbox",
                        checked: twig.attr("item"in i ? i.item : "", "is_checked")
                    }))
                }
                ,
                e.prototype.getTemplateName = function() {
                    return "interface_todo_line_item_tmpl"
                }
                ,
                e.prototype.isTraitable = function() {
                    return !1
                }
                ,
                t._add("interface/todo/line/item_tmpl", e)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var e = function(t) {
                    twig.Template.call(this, t),
                    this.setBlocks({
                        head: twig.bind(this.block_head, this),
                        body: twig.bind(this.block_body, this)
                    })
                };
                twig.inherits(e, twig.Template),
                e.prototype.getParent_ = function(e) {
                    return t._get("interface/pipeline/bidirectional_scroll_page.twig")
                }
                ,
                e.prototype.render_ = function(t, e, i) {
                    i = void 0 === i ? {} : i,
                    this.getParent(e).render_(t, e, twig.extend({}, this.getBlocks(), i))
                }
                ,
                e.prototype.block_head = function(t, e, i) {
                    i = void 0 === i ? {} : i
                }
                ,
                e.prototype.block_body = function(e, i, n) {
                    n = void 0 === n ? {} : n,
                    new (t._get("interface/todo/line/body.twig"))(this.env_).render_(e, i)
                }
                ,
                e.prototype.getTemplateName = function() {
                    return "interface_todo_line_main"
                }
                ,
                e.prototype.isTraitable = function() {
                    return !1
                }
                ,
                t._add("interface/todo/line/main", e)
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
                e.prototype.render_ = function(t, e, i) {
                    i = void 0 === i ? {} : i,
                    t.append('<div class="todo-line__load-more" data-id= "'),
                    t.append(twig.filter.escape(this.env_, twig.attr("row"in e ? e.row : "", "ID"), "light_escape", null, !0)),
                    t.append('"><span class="todo-line__load-more-label">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in e ? e.lang : "", "pipeline_leads_show_more"), "light_escape", null, !0)),
                    t.append("&nbsp;"),
                    t.append('</span><span class="todo-line__load-more-spinner spinner-icon spinner-icon-abs-center"></span></div>')
                }
                ,
                e.prototype.getTemplateName = function() {
                    return "interface_todo_line_more_tmpl"
                }
                ,
                e.prototype.isTraitable = function() {
                    return !1
                }
                ,
                t._add("interface/todo/line/more_tmpl", e)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var e = function(t) {
                    twig.Template.call(this, t),
                    this.setBlocks({
                        list_top_right: twig.bind(this.block_list_top_right, this),
                        static: twig.bind(this.block_static, this),
                        list_body: twig.bind(this.block_list_body, this),
                        list_footer: twig.bind(this.block_list_footer, this)
                    })
                };
                twig.inherits(e, twig.Template),
                e.prototype.getParent_ = function(e) {
                    return t._get("interface/list/list.twig")
                }
                ,
                e.prototype.render_ = function(t, e, i) {
                    i = void 0 === i ? {} : i,
                    this.getParent(e).render_(t, e, twig.extend({}, this.getBlocks(), i))
                }
                ,
                e.prototype.block_list_top_right = function(e, i, n) {
                    n = void 0 === n ? {} : n,
                    e.append('<div class="list__body-right__top list__body-right__top-todo clearfix">'),
                    new (t._get("interface/todo/common/top_nav.twig"))(this.env_).render_(e, twig.extend({}, i, {
                        selected: {
                            line: !0
                        }
                    })),
                    new (t._get("interface/todo/common/top_actions.twig"))(this.env_).render_(e, twig.extend({}, i, {
                        is_line: !0,
                        user_rank: "user_rank"in i ? i.user_rank : ""
                    })),
                    new (t._get("interface/todo/line/search_block.twig"))(this.env_).render_(e, twig.extend({}, i, {
                        id: !1,
                        no_search: !0,
                        search_placeholder: twig.attr("lang"in i ? i.lang : "", "filter_title")
                    })),
                    e.append("</div>")
                }
                ,
                e.prototype.block_static = function(t, e, i) {
                    i = void 0 === i ? {} : i,
                    t.append(twig.filter.escape(this.env_, this.env_.invoke("inject_static", ["pipeline.css", "todos.css", "todos_line.php"], this), "light_escape", null, !0))
                }
                ,
                e.prototype.block_list_body = function(e, i, n) {
                    n = void 0 === n ? {} : n,
                    new (t._get("interface/todo/line/main.twig"))(this.env_).render_(e, twig.extend({}, i, {
                        rows: "rows"in i ? i.rows : "",
                        class_name: "todo-line_content",
                        items: "items"in i ? i.items : "",
                        header_tmpl: "interface/todo/line/header_tmpl.twig",
                        item_tmpl: "interface/todo/line/item_in.twig",
                        more_tmpl: "interface/todo/line/more_tmpl.twig"
                    }))
                }
                ,
                e.prototype.block_list_footer = function(t, e, i) {
                    i = void 0 === i ? {} : i,
                    t.append('<div class="list__footer footer__pipeline footer__todo-line" style="border-top: 1px solid #dcdde0;"><div class="pipeline_manage" id="pipeline_manage"><div class="pipeline_manage__item pipeline_manage__item_del js-pipeline-droppable" data-status-id="delete"><span class="icon icon-trash"></span></div><div id="status_id_143" class="pipeline_manage__item after_tomorrow js-pipeline-droppable" data-status-id="after_tomorrow"><span class="pipeline_manage__item_text">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in e ? e.lang : "", "pipeline_manage__item_text_after_tomorrow"), "light_escape", null, !0)),
                    t.append('</span></div><div id="status_id_142" class="pipeline_manage__item next_week js-pipeline-droppable" data-status-id="next_week" style="'),
                    twig.filter.length(this.env_, twig.attr("items"in e ? e.items : "", "next_week")) && t.append("display: none"),
                    t.append('"><span class="pipeline_manage__item_text">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in e ? e.lang : "", "pipeline_manage__item_text_next_week"), "light_escape", null, !0)),
                    t.append('</span></div><div id="status_id_142" class="pipeline_manage__item next_month js-pipeline-droppable" data-status-id="next_month" style="'),
                    twig.filter.length(this.env_, twig.attr("items"in e ? e.items : "", "next_month")) && t.append("display: none"),
                    t.append('"><span class="pipeline_manage__item_text">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in e ? e.lang : "", "pipeline_manage__item_text_next_month"), "light_escape", null, !0)),
                    t.append('</span></div><div id="status_id_142" class="pipeline_manage__item done js-pipeline-droppable" data-status-id="done"><span class="pipeline_manage__item_text">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in e ? e.lang : "", "pipeline_manage__item_text_done"), "light_escape", null, !0)),
                    t.append("</span></div></div></div>")
                }
                ,
                e.prototype.getTemplateName = function() {
                    return "interface_todo_line_page"
                }
                ,
                e.prototype.isTraitable = function() {
                    return !1
                }
                ,
                t._add("interface/todo/line/page", e)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var e = function(t) {
                    twig.Template.call(this, t),
                    this.setBlocks({
                        summary: twig.bind(this.block_summary, this)
                    })
                };
                twig.inherits(e, twig.Template),
                e.prototype.getParent_ = function(e) {
                    return t._get("interface/filter/search_block.twig")
                }
                ,
                e.prototype.render_ = function(t, e, i) {
                    i = void 0 === i ? {} : i,
                    this.getParent(e).render_(t, e, twig.extend({}, this.getBlocks(), i))
                }
                ,
                e.prototype.block_summary = function(e, i, n) {
                    n = void 0 === n ? {} : n,
                    !("summary"in i) || !i.summary || "no_search_summary"in i && i.no_search_summary || (e.append('<div class="list-top-search__summary js-list_summary" id="list-top-search__summary">'),
                    new (t._get("interface/search_summary/todo/index.twig"))(this.env_).render_(e, i),
                    e.append("</div>"))
                }
                ,
                e.prototype.getTemplateName = function() {
                    return "interface_todo_line_search_block"
                }
                ,
                e.prototype.isTraitable = function() {
                    return !1
                }
                ,
                t._add("interface/todo/line/search_block", e)
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
                e.prototype.render_ = function(e, i, n) {
                    n = void 0 === n ? {} : n,
                    e.append('<div class="tile-settings__body"><div class="tile-settings__header_task"><div class="tile-settings__header-top"><h2 class="modal-body__caption tile-settings__caption head_2">'),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Card view"), "light_escape", null, !0)),
                    e.append('</h2><div class="modal-body__actions tile-settings__btns">'),
                    new (t._get("interface/controls/cancel_button.twig"))(this.env_).render_(e, twig.extend({}, i, {
                        text: this.env_.filter("i18n", "Cancel")
                    })),
                    new (t._get("interface/controls/button.twig"))(this.env_).render_(e, twig.extend({}, i, {
                        text: twig.attr("lang"in i ? i.lang : "", "button_save"),
                        class_name: "js-modal-accept js-button-with-loader button-input_blue"
                    })),
                    e.append('</div></div></div><div class="tile-settings__box_task"><div class="tile-settings__first-part_task"><div class="tile-settings__part_task-between"><div class="tile-settings__part_task-between-inner">'),
                    new (t._get("interface/controls/select.twig"))(this.env_).render_(e, twig.extend({}, i, {
                        name: "position_1",
                        class_name: "tile-settings__control-contact tile-settings__control-contact-task",
                        selected: twig.attr(twig.attr("fields"in i ? i.fields : "", "position_1"), "selected"),
                        items: twig.attr(twig.attr("fields"in i ? i.fields : "", "position_1"), "items")
                    })),
                    new (t._get("interface/controls/select.twig"))(this.env_).render_(e, twig.extend({}, i, {
                        name: "position_2",
                        class_name: "tile-settings__control-company tile-settings__control-company-task",
                        selected: twig.attr(twig.attr("fields"in i ? i.fields : "", "position_2"), "selected"),
                        items: twig.attr(twig.attr("fields"in i ? i.fields : "", "position_2"), "items")
                    })),
                    e.append("</div><div>"),
                    new (t._get("interface/controls/select.twig"))(this.env_).render_(e, twig.extend({}, i, {
                        name: "position_3",
                        class_name: "tile-settings__control-company tile-settings__control-aside",
                        selected: twig.attr(twig.attr("fields"in i ? i.fields : "", "position_3"), "selected"),
                        items: twig.attr(twig.attr("fields"in i ? i.fields : "", "position_3"), "items")
                    })),
                    e.append("</div></div><div>"),
                    new (t._get("interface/controls/select.twig"))(this.env_).render_(e, twig.extend({}, i, {
                        name: "position_4",
                        class_name: "tile-settings__control-deal tile-settings__control-deal-task",
                        selected: twig.attr(twig.attr("fields"in i ? i.fields : "", "position_4"), "selected"),
                        items: twig.attr(twig.attr("fields"in i ? i.fields : "", "position_4"), "items")
                    })),
                    e.append('</div></div><div class="tile-settings__second-part_task tile-settings__part_task-between"><div class="tile-settings__second-part_position-wrapper"><div class="tile-settings__second-part_position">'),
                    new (t._get("interface/controls/select.twig"))(this.env_).render_(e, twig.extend({}, i, {
                        name: "position_5",
                        class_name: "tile-settings__control-date tile-settings__control-date-task",
                        selected: twig.attr(twig.attr("fields"in i ? i.fields : "", "position_5"), "selected"),
                        items: twig.attr(twig.attr("fields"in i ? i.fields : "", "position_5"), "items")
                    })),
                    new (t._get("interface/controls/select.twig"))(this.env_).render_(e, twig.extend({}, i, {
                        name: "position_6",
                        class_name: "tile-settings__control-manager",
                        selected: twig.attr(twig.attr("fields"in i ? i.fields : "", "position_6"), "selected"),
                        items: twig.attr(twig.attr("fields"in i ? i.fields : "", "position_6"), "items")
                    })),
                    e.append('</div><div class="tile-settings__second-part_position">'),
                    new (t._get("interface/controls/select.twig"))(this.env_).render_(e, twig.extend({}, i, {
                        name: "position_7",
                        class_name: "tile-settings__control-type-name",
                        selected: twig.attr(twig.attr("fields"in i ? i.fields : "", "position_7"), "selected"),
                        items: twig.attr(twig.attr("fields"in i ? i.fields : "", "position_7"), "items")
                    })),
                    new (t._get("interface/controls/select.twig"))(this.env_).render_(e, twig.extend({}, i, {
                        name: "position_8",
                        class_name: "tile-settings__control-description",
                        selected: twig.attr(twig.attr("fields"in i ? i.fields : "", "position_8"), "selected"),
                        items: twig.attr(twig.attr("fields"in i ? i.fields : "", "position_8"), "items")
                    })),
                    e.append('</div></div><div class="tile-settings__second-part_position_result">'),
                    new (t._get("interface/controls/select.twig"))(this.env_).render_(e, twig.extend({}, i, {
                        name: "position_9",
                        class_name: "tile-settings__control-aside-bottom",
                        selected: twig.attr(twig.attr("fields"in i ? i.fields : "", "position_9"), "selected"),
                        items: twig.attr(twig.attr("fields"in i ? i.fields : "", "position_9"), "items")
                    })),
                    e.append("</div></div></div></div>")
                }
                ,
                e.prototype.getTemplateName = function() {
                    return "interface_todo_line_tile_settings"
                }
                ,
                e.prototype.isTraitable = function() {
                    return !1
                }
                ,
                t._add("interface/todo/line/tile_settings", e)
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
                e.prototype.render_ = function(e, i, n) {
                    n = void 0 === n ? {} : n,
                    e.append('<div class="fc-fake">'),
                    new (t._get("interface/todo/calendar/plugs/header.twig"))(this.env_).render_(e, i),
                    e.append('<div class="fc-fake__body fc-fake__body-long"><table><tr><td><div class="fc-fake__body__cell fc-fake__body__cell-allday"><div class="fc-fake__body__cell__todo"></div><div class="fc-fake__body__cell__todo"></div></div></td></tr>'),
                    i._parent = i;
                    var a = twig.range(1, 29)
                      , r = {
                        index0: 0,
                        index: 1,
                        first: !0
                    };
                    if (twig.countable(a)) {
                        var s = twig.count(a);
                        r.revindex0 = s - 1,
                        r.revindex = s,
                        r.length = s,
                        r.last = 1 === s
                    }
                    twig.forEach(a, (function(t, n) {
                        i._key = n,
                        i.i = t,
                        twig.contains([3, 6, 14], twig.attr(r, "index")) ? (e.append('<tr><td><div class="fc-fake__body__cell"><div class="fc-fake__body__cell__todo-small" style="width: '),
                        e.append(twig.filter.escape(this.env_, Number(30) + Number(twig.functions.random(this.env_, 50)), "light_escape", null, !0)),
                        e.append('%"></div></div></td></tr>')) : e.append('<tr><td><div class="fc-fake__body__cell"></div></td></tr>'),
                        ++r.index0,
                        ++r.index,
                        r.first = !1,
                        r.length && (--r.revindex0,
                        --r.revindex,
                        r.last = 0 === r.revindex0)
                    }
                    ), this),
                    e.append("</table></div></div>")
                }
                ,
                e.prototype.getTemplateName = function() {
                    return "interface_todo_calendar_plugs_day"
                }
                ,
                e.prototype.isTraitable = function() {
                    return !1
                }
                ,
                t._add("interface/todo/calendar/plugs/day", e)
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
                e.prototype.render_ = function(t, e, i) {
                    i = void 0 === i ? {} : i,
                    t.append('<div class="fc-toolbar" style="border-bottom: 1px solid var(--palette-border-primary); background: var(--palette-background-primary);"><div class="fc-left"><button type="button" class="fc-prev-button fc-button fc-state-default fc-corner-left fc-corner-right"><span class="fc-icon fc-icon-left-single-arrow"></span></button></div><div class="fc-right"><button type="button" class="fc-next-button fc-button fc-state-default fc-corner-left fc-corner-right"><span class="fc-icon fc-icon-right-single-arrow"></span></button></div><div class="fc-center"><h2></h2></div><div class="fc-clear"></div></div>')
                }
                ,
                e.prototype.getTemplateName = function() {
                    return "interface_todo_calendar_plugs_header"
                }
                ,
                e.prototype.isTraitable = function() {
                    return !0
                }
                ,
                t._add("interface/todo/calendar/plugs/header", e)
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
                e.prototype.render_ = function(e, i, n) {
                    n = void 0 === n ? {} : n,
                    i.plugs = [[1, 3, 4], [4, 5], [1, 3], [2, 5], [4, 5, 6]],
                    e.append('<div class="fc-fake">'),
                    new (t._get("interface/todo/calendar/plugs/header.twig"))(this.env_).render_(e, i),
                    e.append('<div class="fc-fake__body"><table>'),
                    i._parent = i;
                    var a = twig.range(0, 4)
                      , r = {
                        index0: 0,
                        index: 1,
                        first: !0
                    };
                    if (twig.countable(a)) {
                        var s = twig.count(a);
                        r.revindex0 = s - 1,
                        r.revindex = s,
                        r.length = s,
                        r.last = 1 === s
                    }
                    twig.forEach(a, (function(t, n) {
                        i._key = n,
                        i.mm = t,
                        i.plug_days = twig.attr("plugs"in i ? i.plugs : "", twig.attr(r, "index0"), void 0, "array"),
                        e.append("<tr>");
                        var a = twig.range(1, 7)
                          , s = {
                            parent: r,
                            index0: 0,
                            index: 1,
                            first: !0
                        };
                        if (twig.countable(a)) {
                            var _ = twig.count(a);
                            s.revindex0 = _ - 1,
                            s.revindex = _,
                            s.length = _,
                            s.last = 1 === _
                        }
                        twig.forEach(a, (function(t, n) {
                            i._key = n,
                            i.dd = t,
                            twig.contains("plug_days"in i ? i.plug_days : "", twig.attr(s, "index")) ? e.append('<td><div class="fc-fake__body__cell"><div class="fc-fake__body__cell__todo"></div></div></td>') : e.append('<td><div class="fc-fake__body__cell"></div></td>'),
                            ++s.index0,
                            ++s.index,
                            s.first = !1,
                            s.length && (--s.revindex0,
                            --s.revindex,
                            s.last = 0 === s.revindex0)
                        }
                        ), this),
                        e.append("</tr>"),
                        ++r.index0,
                        ++r.index,
                        r.first = !1,
                        r.length && (--r.revindex0,
                        --r.revindex,
                        r.last = 0 === r.revindex0)
                    }
                    ), this),
                    e.append("</table></div></div>")
                }
                ,
                e.prototype.getTemplateName = function() {
                    return "interface_todo_calendar_plugs_month"
                }
                ,
                e.prototype.isTraitable = function() {
                    return !1
                }
                ,
                t._add("interface/todo/calendar/plugs/month", e)
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
                e.prototype.render_ = function(e, i, n) {
                    n = void 0 === n ? {} : n,
                    e.append('<div class="fc-fake">'),
                    new (t._get("interface/todo/calendar/plugs/header.twig"))(this.env_).render_(e, i),
                    e.append('<div class="fc-fake__body fc-fake__body-long"><table><tr><td><div class="fc-fake__body__cell fc-fake__body__cell-allday"></div></td><td><div class="fc-fake__body__cell fc-fake__body__cell-allday"><div class="fc-fake__body__cell__todo"></div><div class="fc-fake__body__cell__todo"></div><div class="fc-fake__body__cell__todo"></div></div></td><td><div class="fc-fake__body__cell fc-fake__body__cell-allday"></div></td><td><div class="fc-fake__body__cell fc-fake__body__cell-allday"><div class="fc-fake__body__cell__todo"></div></div></td><td><div class="fc-fake__body__cell fc-fake__body__cell-allday"><div class="fc-fake__body__cell__todo"></div><div class="fc-fake__body__cell__todo"></div></div></td><td><div class="fc-fake__body__cell fc-fake__body__cell-allday"></div></td><td><div class="fc-fake__body__cell fc-fake__body__cell-allday"></div></td></tr>'),
                    i.plugs = {
                        3: {
                            days: [5]
                        },
                        5: {
                            days: [6]
                        },
                        6: {
                            days: [2, 5]
                        },
                        10: {
                            days: [2, 6]
                        },
                        12: {
                            days: [4]
                        },
                        13: {
                            two_lines: [1]
                        }
                    },
                    i._parent = i;
                    var a = twig.range(1, 28)
                      , r = {
                        index0: 0,
                        index: 1,
                        first: !0
                    };
                    if (twig.countable(a)) {
                        var s = twig.count(a);
                        r.revindex0 = s - 1,
                        r.revindex = s,
                        r.length = s,
                        r.last = 1 === s
                    }
                    twig.forEach(a, (function(t, n) {
                        i._key = n,
                        i.ww = t,
                        i.plug_week = twig.attr("plugs"in i ? i.plugs : "", twig.attr(r, "index"), void 0, "array"),
                        e.append("<tr>");
                        var a = twig.range(1, 7)
                          , s = {
                            parent: r,
                            index0: 0,
                            index: 1,
                            first: !0
                        };
                        if (twig.countable(a)) {
                            var _ = twig.count(a);
                            s.revindex0 = _ - 1,
                            s.revindex = _,
                            s.length = _,
                            s.last = 1 === _
                        }
                        twig.forEach(a, (function(t, n) {
                            i._key = n,
                            i.dd = t,
                            "plug_week"in i && twig.contains(twig.attr("plug_week"in i ? i.plug_week : "", "two_lines"), twig.attr(s, "index")) ? e.append('<td><div class="fc-fake__body__cell"><div class="fc-fake__body__cell__todo-small"></div><div class="fc-fake__body__cell__todo-small fc-fake__body__cell__todo-small-second"></div></div></td>') : "plug_week"in i && twig.contains(twig.attr("plug_week"in i ? i.plug_week : "", "days"), twig.attr(s, "index")) ? e.append('<td><div class="fc-fake__body__cell"><div class="fc-fake__body__cell__todo-small"></div></div></td>') : e.append('<td><div class="fc-fake__body__cell"></div></td>'),
                            ++s.index0,
                            ++s.index,
                            s.first = !1,
                            s.length && (--s.revindex0,
                            --s.revindex,
                            s.last = 0 === s.revindex0)
                        }
                        ), this),
                        e.append("</tr>"),
                        ++r.index0,
                        ++r.index,
                        r.first = !1,
                        r.length && (--r.revindex0,
                        --r.revindex,
                        r.last = 0 === r.revindex0)
                    }
                    ), this),
                    e.append("</table></div></div>")
                }
                ,
                e.prototype.getTemplateName = function() {
                    return "interface_todo_calendar_plugs_week"
                }
                ,
                e.prototype.isTraitable = function() {
                    return !1
                }
                ,
                t._add("interface/todo/calendar/plugs/week", e)
            }()
        }
        .apply(e, n)) || (t.exports = a)
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
        t._sentryDebugIds[e] = "e9cf3726-1cfe-465e-b0a5-2a6bb1840d1f",
        t._sentryDebugIdIdentifier = "sentry-dbid-e9cf3726-1cfe-465e-b0a5-2a6bb1840d1f")
    } catch (t) {}
}();
//# sourceMappingURL=97834.9f8e2c7e9d7e8d3b3209.js.map
