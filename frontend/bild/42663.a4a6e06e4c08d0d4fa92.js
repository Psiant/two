(window.webpackChunk = window.webpackChunk || []).push([[42663], {
    542663: (t, e, i) => {
        var a, s;
        a = [i(460159), i(591880), i(94849), i(863888), i(898296), i(295165), i(955206), i(522814)],
        void 0 === (s = function(t) {
            (function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var e = function(t) {
                    twig.Template.call(this, t),
                    this.setBlocks({
                        id: twig.bind(this.block_id, this),
                        sidebar_right: twig.bind(this.block_sidebar_right, this)
                    })
                };
                twig.inherits(e, twig.Template),
                e.prototype.getParent_ = function(t) {
                    return !1
                }
                ,
                e.prototype.render_ = function(t, e, i) {
                    i = void 0 === i ? {} : i,
                    t.append('<div class="aside aside-toggleable analytics-sidebar" id="'),
                    t.append(this.renderBlock("id", e, i)),
                    t.append('"><div class="aside__top"><h2 class="aside__head">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in e ? e.lang : "", "title"), "light_escape", null, !0)),
                    t.append('</h2><span id="sidebar_toggler" class="sidebar_toggler content__top__preset__filter_icon"><span class="icon icon-list filter-toggle-icon"></span></span></div><div class="aside__inner"><div class="filter__common_settings custom-scroll"><div class="filter__common_settings__list_wrapper" id="filter_presets_holder"><ul class="filter__list">'),
                    e._parent = e;
                    var a = twig.attr(twig.attr("filter"in e ? e.filter : "", "items"), "preset");
                    twig.forEach(a, (function(i, a) {
                        e._key = a,
                        e.item = i,
                        t.append('<li class="aside__list-item '),
                        twig.attr("item"in e ? e.item : "", "selected") && t.append("aside__list-item_selected"),
                        t.append(' js-filter-preset-link" title="'),
                        t.append(twig.filter.escape(this.env_, twig.attr("item"in e ? e.item : "", "label"), "light_escape", null, !0)),
                        t.append('"><a href="'),
                        t.append(twig.filter.escape(this.env_, twig.attr("item"in e ? e.item : "", "link"), "light_escape", null, !0)),
                        t.append('" class="aside__list-item-link navigate-link-nodecor h-text-overflow js-navigate-link">'),
                        t.append(twig.filter.escape(this.env_, twig.attr("item"in e ? e.item : "", "label"), "light_escape", null, !0)),
                        t.append("</a></li>")
                    }
                    ), this),
                    t.append("</ul></div></div></div>"),
                    t.append(this.renderBlock("sidebar_right", e, i)),
                    t.append("</div>")
                }
                ,
                e.prototype.block_id = function(t, e, i) {
                    i = void 0 === i ? {} : i,
                    t.append("sidebar")
                }
                ,
                e.prototype.block_sidebar_right = function(e, i, a) {
                    a = void 0 === a ? {} : a,
                    e.append('<div class="sidebar sidebar-white analytics-sidebar aside-toggleable" id="sidebar__right"><div class="sidebar__inner"><h2 class="sidebar__head aside__head">'),
                    e.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "filter_results_title"), "light_escape", null, !0)),
                    e.append('</h2><span class="sidebar__button__close"><span class="sidebar__button__icon"></span></span>'),
                    new (t._get("interface/filter/filter.twig"))(this.env_).render_(e, twig.extend({}, i, {
                        filter: "filter"in i ? i.filter : "",
                        sidebar: 1
                    })),
                    e.append("</div></div>")
                }
                ,
                e.prototype.getTemplateName = function() {
                    return "interface_reports_aside"
                }
                ,
                e.prototype.isTraitable = function() {
                    return !1
                }
                ,
                t._add("interface/reports/aside", e)
            }
            )(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var e = function(t) {
                    twig.Template.call(this, t),
                    this.setBlocks({
                        static: twig.bind(this.block_static, this),
                        content_sidebar: twig.bind(this.block_content_sidebar, this),
                        content_top: twig.bind(this.block_content_top, this),
                        content_middle: twig.bind(this.block_content_middle, this),
                        content_bottom: twig.bind(this.block_content_bottom, this)
                    })
                };
                twig.inherits(e, twig.Template),
                e.prototype.getParent_ = function(t) {
                    return !1
                }
                ,
                e.prototype.render_ = function(t, e, i) {
                    i = void 0 === i ? {} : i,
                    t.append(this.renderBlock("static", e, i));
                    var a = t;
                    (t = new twig.StringBuffer).append(this.renderBlock("content_sidebar", e, i)),
                    e.is_plug_show = 0 == twig.filter.length(this.env_, twig.attr("reports"in e ? e.reports : "", "by_humans")),
                    t.append('<div class="content analytics aside-toggleable" id="content_holder"><div class="content_inner"><div class="content__analytics report__calls" id="report_calls">'),
                    t.append(this.renderBlock("content_top", e, i)),
                    t.append(this.renderBlock("content_middle", e, i)),
                    t.append(this.renderBlock("content_bottom", e, i)),
                    t.append("</div></div></div>"),
                    a.append(twig.spaceless(t.toString())),
                    t = a
                }
                ,
                e.prototype.block_static = function(t, e, i) {
                    i = void 0 === i ? {} : i,
                    t.append(twig.filter.escape(this.env_, this.env_.invoke("inject_static", ["reports_calls.php"], this), "light_escape", null, !0))
                }
                ,
                e.prototype.block_content_sidebar = function(e, i, a) {
                    a = void 0 === a ? {} : a,
                    new (t._get("interface/reports/aside.twig"))(this.env_).render_(e, i)
                }
                ,
                e.prototype.block_content_top = function(e, i, a) {
                    a = void 0 === a ? {} : a,
                    new (t._get("interface/reports/top.twig"))(this.env_).render_(e, twig.extend({}, i, {
                        title: twig.attr("lang"in i ? i.lang : "", "report_title")
                    }))
                }
                ,
                e.prototype.block_content_middle = function(e, i, a) {
                    if (a = void 0 === a ? {} : a,
                    e.append('<div class="calls_analytics__graph_wrapper"><div class="content__account__note__wrapper"><div class="content__account__note"><p>'),
                    e.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "graph_note"), "light_escape", null, !0)),
                    e.append('</p></div></div><div class="calls_analytics__graph_header"><div class="calls_analytics__graph_multiselect filter__custom_settings__item" id="groups_select">'),
                    new (t._get("interface/controls/checkboxes_dropdown/values_title.twig"))(this.env_).render_(e, twig.extend({}, i, {
                        items: "groups_items"in i ? i.groups_items : "",
                        class_name: "",
                        title_numeral: twig.attr("lang"in i ? i.lang : "", "groups_numeral"),
                        title: twig.attr("lang"in i ? i.lang : "", "groups_title"),
                        small: !0
                    })),
                    e.append('</div><div class="calls_analytics__graph_toggler">'),
                    new (t._get("interface/controls/toggler.twig"))(this.env_).render_(e, twig.extend({}, i, {
                        class_name: "call_analytics_toggler js-graph-toggler",
                        items: [{
                            selected: !0,
                            title: twig.attr("lang"in i ? i.lang : "", "graph_by_count"),
                            class_name: "js-call_graph-sort",
                            additional_data: 'data-sel="by_count"'
                        }, {
                            selected: !1,
                            class_name: "js-call_graph-sort",
                            title: twig.attr("lang"in i ? i.lang : "", "graph_by_duration"),
                            additional_data: 'data-sel="by_duration"'
                        }]
                    })),
                    e.append('</div></div><div class="calls_analytics__graph"><div class="calls_analytics__wrapper table_header"><div class="calls_analytics_row"><div class="calls_analytics__user table_header"></div><div class="calls_analytics__calls_graph table_header">'),
                    e.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "call_type_inbound"), "light_escape", null, !0)),
                    e.append("/"),
                    e.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "call_type_outbound"), "light_escape", null, !0)),
                    e.append("</div></div></div>"),
                    "is_plug_show"in i && i.is_plug_show)
                        new (t._get("interface/reports/plug.twig"))(this.env_).render_(e, i);
                    else {
                        i._parent = i;
                        var s = twig.attr("reports"in i ? i.reports : "", "by_humans");
                        twig.forEach(s, (function(t, a) {
                            i.user_id = a,
                            i.user_report = t,
                            e.append('<div class="calls_analytics__wrapper js-user-wrapper '),
                            twig.attr(twig.attr("user_report"in i ? i.user_report : "", "info"), "visible") || e.append("not-visible "),
                            e.append("user_id-"),
                            e.append(twig.filter.escape(this.env_, "user_id"in i ? i.user_id : "", "light_escape", null, !0)),
                            e.append('" data-id="'),
                            e.append(twig.filter.escape(this.env_, "user_id"in i ? i.user_id : "", "light_escape", null, !0)),
                            e.append('"><div class="calls_analytics_row"><div class="calls_analytics__user"><span class="calls_analytics__user__name">'),
                            e.append(twig.filter.escape(this.env_, twig.attr(twig.attr("user_report"in i ? i.user_report : "", "info"), "login"), "light_escape", null, !0)),
                            e.append('</span><div class="calls_analytics__user__calls_duration"><span class="js-total_calls-text" data-by_duration="'),
                            e.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "all_count"), "light_escape", null, !0)),
                            e.append('" data-by_count="'),
                            e.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "all_duration"), "light_escape", null, !0)),
                            e.append('">'),
                            e.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "all_duration"), "light_escape", null, !0)),
                            e.append(' </span><span class="calls_analytics__user__calls_duration_time js-call-value js-all-calls-duration js-total_duration" data-by_count="'),
                            e.append(twig.filter.escape(this.env_, twig.attr(twig.attr("user_report"in i ? i.user_report : "", "total"), "calls_time"), "light_escape", null, !0)),
                            e.append('" data-by_duration="'),
                            e.append(twig.filter.escape(this.env_, twig.attr(twig.attr("user_report"in i ? i.user_report : "", "total"), "calls_count"), "light_escape", null, !0)),
                            e.append('">'),
                            e.append(twig.filter.escape(this.env_, this.env_.filter("time", twig.attr(twig.attr("user_report"in i ? i.user_report : "", "total"), "calls_time")), "light_escape", null, !0)),
                            e.append('</span></div></div><div class="calls_analytics__calls_graph"><div class="calls_analytics__calls_graph__incoming calls_amount"><span class="calls_analytics__calls_graph__incoming__amount js-inbound calls_amount_value js-call-value js-incoming-calls-amount" data-by_count="'),
                            e.append(twig.filter.escape(this.env_, twig.attr(twig.attr("user_report"in i ? i.user_report : "", "inbound"), "calls_count"), "light_escape", null, !0)),
                            e.append('" data-by_duration="'),
                            e.append(twig.filter.escape(this.env_, twig.attr(twig.attr("user_report"in i ? i.user_report : "", "inbound"), "calls_time"), "light_escape", null, !0)),
                            e.append('">'),
                            e.append(twig.filter.escape(this.env_, twig.attr(twig.attr("user_report"in i ? i.user_report : "", "inbound"), "calls_count"), "light_escape", null, !0)),
                            e.append('</span></div>\x3c!----\x3e<div class="calls_analytics__calls_graph__outgoing calls_amount"><span class="calls_analytics__calls_graph__outgoing__amount js-outbound calls_amount_value js-call-value js-outgoing-calls-amount" data-by_count="'),
                            e.append(twig.filter.escape(this.env_, twig.attr(twig.attr("user_report"in i ? i.user_report : "", "outbound"), "calls_count"), "light_escape", null, !0)),
                            e.append('" data-by_duration="'),
                            e.append(twig.filter.escape(this.env_, twig.attr(twig.attr("user_report"in i ? i.user_report : "", "outbound"), "calls_time"), "light_escape", null, !0)),
                            e.append('">'),
                            e.append(twig.filter.escape(this.env_, twig.attr(twig.attr("user_report"in i ? i.user_report : "", "outbound"), "calls_count"), "light_escape", null, !0)),
                            e.append('</span></div>\x3c!----\x3e<div class="calls_analytics__calls_graph__all js-call-value js-total js-all-calls-amount" data-by_count="'),
                            e.append(twig.filter.escape(this.env_, twig.attr(twig.attr("user_report"in i ? i.user_report : "", "total"), "calls_count"), "light_escape", null, !0)),
                            e.append('" data-by_duration="'),
                            e.append(twig.filter.escape(this.env_, twig.attr(twig.attr("user_report"in i ? i.user_report : "", "total"), "calls_time"), "light_escape", null, !0)),
                            e.append('">'),
                            e.append(twig.filter.escape(this.env_, twig.attr(twig.attr("user_report"in i ? i.user_report : "", "total"), "calls_count"), "light_escape", null, !0)),
                            e.append("</div></div></div></div>")
                        }
                        ), this)
                    }
                    e.append("<div "),
                    "is_plug_show"in i && i.is_plug_show && e.append('style="opacity: 0.2"'),
                    e.append('><div class="calls_analytics__wrapper average_graph"><div class="calls_analytics_row"><div class="calls_analytics__user"><span class="calls_analytics__user__name">'),
                    e.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "average_value"), "light_escape", null, !0)),
                    e.append('</span></div><div class="calls_analytics__calls_graph"><div class="calls_analytics__calls_graph__incoming calls_amount"><span class="calls_analytics__calls_graph__incoming__amount js-inbound calls_amount_value js-call-value js-incoming-calls-amount" data-by_count="'),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("round", twig.attr(twig.attr(twig.attr("reports"in i ? i.reports : "", "average"), "inbound"), "calls_count")), "light_escape", null, !0)),
                    e.append('" data-by_duration="'),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("round", twig.attr(twig.attr(twig.attr("reports"in i ? i.reports : "", "average"), "inbound"), "calls_time")), "light_escape", null, !0)),
                    e.append('">'),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("round", twig.attr(twig.attr(twig.attr("reports"in i ? i.reports : "", "average"), "inbound"), "calls_count")), "light_escape", null, !0)),
                    e.append('</span></div>\x3c!----\x3e<div class="calls_analytics__calls_graph__outgoing calls_amount"><span class="calls_analytics__calls_graph__outgoing__amount js-outbound calls_amount_value js-call-value js-outgoing-calls-amount" data-by_count="'),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("round", twig.attr(twig.attr(twig.attr("reports"in i ? i.reports : "", "average"), "outbound"), "calls_count")), "light_escape", null, !0)),
                    e.append('" data-by_duration="'),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("round", twig.attr(twig.attr(twig.attr("reports"in i ? i.reports : "", "average"), "outbound"), "calls_time")), "light_escape", null, !0)),
                    e.append('">'),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("round", twig.attr(twig.attr(twig.attr("reports"in i ? i.reports : "", "average"), "outbound"), "calls_count")), "light_escape", null, !0)),
                    e.append('</span></div>\x3c!----\x3e<div class="calls_analytics__calls_graph__all js-call-value js-total js-all-calls-amount" data-by_count="'),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("round", twig.attr(twig.attr(twig.attr("reports"in i ? i.reports : "", "average"), "total"), "calls_count")), "light_escape", null, !0)),
                    e.append('" data-by_duration="'),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("round", twig.attr(twig.attr(twig.attr("reports"in i ? i.reports : "", "average"), "total"), "calls_time")), "light_escape", null, !0)),
                    e.append('">'),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("round", twig.attr(twig.attr(twig.attr("reports"in i ? i.reports : "", "average"), "total"), "calls_count")), "light_escape", null, !0)),
                    e.append('</div></div></div></div><div class="calls_analytics__wrapper in_total"><div class="calls_analytics_row"><div class="calls_analytics__user"><span class="calls_analytics__user__name">'),
                    e.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "total"), "light_escape", null, !0)),
                    e.append('</span></div><div class="calls_analytics__calls_graph"><div class="calls_analytics__calls_graph__incoming calls_amount"><span class="calls_analytics__calls_graph__incoming__amount js-inbound calls_amount_value js-call-value js-incoming-calls-amount" data-by_count="'),
                    e.append(twig.filter.escape(this.env_, twig.attr(twig.attr(twig.attr("reports"in i ? i.reports : "", "total"), "inbound"), "calls_count"), "light_escape", null, !0)),
                    e.append('" data-by_duration="'),
                    e.append(twig.filter.escape(this.env_, twig.attr(twig.attr(twig.attr("reports"in i ? i.reports : "", "total"), "inbound"), "calls_time"), "light_escape", null, !0)),
                    e.append('">'),
                    e.append(twig.filter.escape(this.env_, twig.attr(twig.attr(twig.attr("reports"in i ? i.reports : "", "total"), "inbound"), "calls_count"), "light_escape", null, !0)),
                    e.append('</span></div>\x3c!----\x3e<div class="calls_analytics__calls_graph__outgoing calls_amount"><span class="calls_analytics__calls_graph__outgoing__amount js-outbound calls_amount_value js-call-value js-outgoing-calls-amount" data-by_count="'),
                    e.append(twig.filter.escape(this.env_, twig.attr(twig.attr(twig.attr("reports"in i ? i.reports : "", "total"), "outbound"), "calls_count"), "light_escape", null, !0)),
                    e.append('" data-by_duration="'),
                    e.append(twig.filter.escape(this.env_, twig.attr(twig.attr(twig.attr("reports"in i ? i.reports : "", "total"), "outbound"), "calls_time"), "light_escape", null, !0)),
                    e.append('">'),
                    e.append(twig.filter.escape(this.env_, twig.attr(twig.attr(twig.attr("reports"in i ? i.reports : "", "total"), "outbound"), "calls_count"), "light_escape", null, !0)),
                    e.append('</span></div>\x3c!----\x3e<div class="calls_analytics__calls_graph__all js-call-value js-total js-all-calls-amount" data-by_count="'),
                    e.append(twig.filter.escape(this.env_, twig.attr(twig.attr(twig.attr("reports"in i ? i.reports : "", "total"), "total"), "calls_count"), "light_escape", null, !0)),
                    e.append('" data-by_duration="'),
                    e.append(twig.filter.escape(this.env_, twig.attr(twig.attr(twig.attr("reports"in i ? i.reports : "", "total"), "total"), "calls_time"), "light_escape", null, !0)),
                    e.append('">'),
                    e.append(twig.filter.escape(this.env_, twig.attr(twig.attr(twig.attr("reports"in i ? i.reports : "", "total"), "total"), "calls_count"), "light_escape", null, !0)),
                    e.append("</div></div></div></div></div></div></div>")
                }
                ,
                e.prototype.block_content_bottom = function(e, i, a) {
                    a = void 0 === a ? {} : a,
                    e.append('<div class="calls_analytics__list_wrapper"><div class="calls_analytics__list_header">'),
                    e.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "calls_list"), "light_escape", null, !0)),
                    e.append('<div class="calls_analytics__list_toggler">'),
                    new (t._get("interface/controls/toggler.twig"))(this.env_).render_(e, twig.extend({}, i, {
                        class_name: "call_analytics_toggler",
                        items: [{
                            selected: "all" == ("notes_current"in i ? i.notes_current : ""),
                            title: twig.attr("lang"in i ? i.lang : "", "all"),
                            class_name: "js-call_list-sort",
                            additional_data: 'data-sel="all"'
                        }, {
                            selected: "inbound" == ("notes_current"in i ? i.notes_current : ""),
                            class_name: "js-call_list-sort",
                            title: twig.attr("lang"in i ? i.lang : "", "call_sort_inbounds"),
                            additional_data: 'data-sel="inbound"'
                        }, {
                            selected: "outbound" == ("notes_current"in i ? i.notes_current : ""),
                            class_name: "js-call_list-sort",
                            title: twig.attr("lang"in i ? i.lang : "", "call_sort_outbounds"),
                            additional_data: 'data-sel="outbound"'
                        }]
                    })),
                    e.append('</div></div><div id="js-calls-list" class="call_analytics-notes-wrapper">'),
                    new (t._get("interface/reports/calls/list.twig"))(this.env_).render_(e, i),
                    e.append("</div></div>")
                }
                ,
                e.prototype.getTemplateName = function() {
                    return "interface_reports_calls"
                }
                ,
                e.prototype.isTraitable = function() {
                    return !1
                }
                ,
                t._add("interface/reports/calls", e)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var e = function(t) {
                    twig.Template.call(this, t),
                    this.setBlocks({
                        aside: twig.bind(this.block_aside, this)
                    })
                };
                twig.inherits(e, twig.Template),
                e.prototype.getParent_ = function(e) {
                    return t._get("interface/page/base.twig")
                }
                ,
                e.prototype.render_ = function(t, e, i) {
                    i = void 0 === i ? {} : i,
                    this.getParent(e).render_(t, e, twig.extend({}, this.getBlocks(), i))
                }
                ,
                e.prototype.block_aside = function(e, i, a) {
                    a = void 0 === a ? {} : a,
                    new (t._get("interface/reports/aside.twig"))(this.env_).render_(e, i)
                }
                ,
                e.prototype.getTemplateName = function() {
                    return "interface_reports_page"
                }
                ,
                e.prototype.isTraitable = function() {
                    return !1
                }
                ,
                t._add("interface/reports/page", e)
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
                    t.append('<div class="js-analytic-plug plug-analysis '),
                    t.append(twig.filter.escape(this.env_, "class_name"in e ? e.class_name : "", "light_escape", null, !0)),
                    t.append('"><div class="plug-analysis-body">'),
                    "is_load"in e && e.is_load ? t.append('<span class="spinner-icon spinner-icon-abs-center"></span>') : (t.append('<svg class="plug-analysis-icon"><use xlink:href="#analytics--data-storage"></use></svg><div class="plug-analysis-body-text">'),
                    "is_too_much_data"in e && e.is_too_much_data ? (t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Too much data to display."), "light_escape", null, !0)),
                    t.append(" "),
                    "is_filter_help"in e && e.is_filter_help && t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Please use filters to refine your request."), "light_escape", null, !0))) : t.append(twig.filter.escape(this.env_, twig.attr("lang"in e ? e.lang : "", "access_denied_message"), "light_escape", null, !0)),
                    t.append("</div>")),
                    t.append("</div></div>")
                }
                ,
                e.prototype.getTemplateName = function() {
                    return "interface_reports_plug"
                }
                ,
                e.prototype.isTraitable = function() {
                    return !1
                }
                ,
                t._add("interface/reports/plug", e)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var e = function(t) {
                    twig.Template.call(this, t),
                    this.setBlocks({
                        additional_actions: twig.bind(this.block_additional_actions, this)
                    })
                };
                twig.inherits(e, twig.Template),
                e.prototype.getParent_ = function(t) {
                    return !1
                }
                ,
                e.prototype.render_ = function(e, i, a) {
                    a = void 0 === a ? {} : a,
                    e.append('<div class="lt-analytics__top '),
                    e.append(twig.filter.escape(this.env_, "class_name"in i ? i.class_name : "", "light_escape", null, !0)),
                    e.append('"><div class="lt-analytics__top-controls"><div class="content__top__sidebar__toggler"><span id="sidebar_toggler" class="content__top__preset__filter_icon"><span class="icon icon-list filter-toggle-icon"></span></span></div>'),
                    "no_filter"in i && i.no_filter || (e.append('<div class="content__top__actions">'),
                    new (t._get("interface/controls/button.twig"))(this.env_).render_(e, twig.extend({}, i, {
                        text: this.env_.filter("i18n", "Filter"),
                        id: "filter_show_btn",
                        inner_class_name: "button-input-more-inner",
                        icon_class_name: "filter-icon",
                        class_name: "button-input-inner button-input-more-inner filter-sidebar",
                        icon_right_name: "icon-arrow"
                    })),
                    e.append("</div>")),
                    e.append('</div><h2 class="lt-analytics__heading">'),
                    e.append(twig.filter.escape(this.env_, "title"in i ? i.title : "", "light_escape", null, !0)),
                    e.append("&nbsp;</h2>"),
                    e.append(this.renderBlock("additional_actions", i, a)),
                    e.append("</div>")
                }
                ,
                e.prototype.block_additional_actions = function(e, i, a) {
                    if (a = void 0 === a ? {} : a,
                    twig.attr("current_period"in i ? i.current_period : "", "name")) {
                        e.append('<span class="js-tip-holder r-by-activities__top-tip js-top-filter-period" data-name-from="'),
                        e.append(twig.filter.escape(this.env_, twig.attr(twig.attr("current_period"in i ? i.current_period : "", "inputs_name"), "from"), "light_escape", null, !0)),
                        e.append('" data-name-to="'),
                        e.append(twig.filter.escape(this.env_, twig.attr(twig.attr("current_period"in i ? i.current_period : "", "inputs_name"), "to"), "light_escape", null, !0)),
                        e.append('"><span class="r-by-activities__top-tip-selected r-by-activities__header-text filter__value js-tip-value">'),
                        e.append(twig.filter.escape(this.env_, twig.attr("current_period"in i ? i.current_period : "", "name"), "light_escape", null, !0)),
                        e.append("</span>"),
                        i.filter_date_items = [],
                        i._parent = i;
                        var s = twig.attr(twig.attr("filter"in i ? i.filter : "", "date"), "items");
                        twig.forEach(s, (function(t, e) {
                            i._key = e,
                            i.item = t,
                            twig.contains(["past_x_days", "next_x_days"], twig.attr("item"in i ? i.item : "", "id")) || (i.filter_date_items = twig.filter.merge("filter_date_items"in i ? i.filter_date_items : "", ["item"in i ? i.item : ""]))
                        }
                        ), this),
                        new (t._get("interface/reports/by_activities/tip.twig"))(this.env_).render_(e, twig.extend({}, i, {
                            class_name: "activities__filter r-by-activities__top-tips",
                            name: "selected",
                            selected: twig.attr("current_period"in i ? i.current_period : "", "id"),
                            selected_dates: twig.attr("current_period"in i ? i.current_period : "", "selected_dates"),
                            items: "filter_date_items"in i ? i.filter_date_items : "",
                            is_custom_tip_holder: !0
                        })),
                        e.append("</span>")
                    }
                }
                ,
                e.prototype.getTemplateName = function() {
                    return "interface_reports_top"
                }
                ,
                e.prototype.isTraitable = function() {
                    return !1
                }
                ,
                t._add("interface/reports/top", e)
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
                    if (i = void 0 === i ? {} : i,
                    t.append('<div class="unsorted_analytics-title">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Unsorted"), "light_escape", null, !0)),
                    t.append('</div><div class="unsorted_analytics"><div class="unsorted_analytics_left"><div class="timeline_info"><span class="time_value">'),
                    "avg_time"in e && e.avg_time ? t.append(twig.filter.escape(this.env_, "avg_time"in e ? e.avg_time : "", "light_escape", null, !0)) : t.append("&nbsp;"),
                    t.append("</span> "),
                    "time_metric"in e && e.time_metric ? t.append(twig.filter.escape(this.env_, "time_metric"in e ? e.time_metric : "", "light_escape", null, !0)) : t.append("&nbsp;"),
                    t.append('</div><div class="timeline"><div class="timeline_bg"></div><div class="timeline_current"></div></div><div class="sub_text">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in e ? e.lang : "", "leads_list__unsorted_stats_time"), "light_escape", null, !0)),
                    t.append('</div></div><div class="unsorted_analytics_right"><div class="l-content"><ul class="list__row"><li class="item__row incoming"><div class="item row"><div class="progress"><div class="container_4_banner">'),
                    "category"in e && e.category) {
                        e._parent = e;
                        var a = "category"in e ? e.category : "";
                        twig.forEach(a, (function(i, a) {
                            e.category_name = a,
                            e.current_category = i,
                            twig.attr("current_category"in e ? e.current_category : "", "total") > 0 && (t.append('<div class="progress-bar progress-bar-'),
                            t.append(twig.filter.escape(this.env_, "category_name"in e ? e.category_name : "", "light_escape", null, !0)),
                            t.append('" ><div class="progress-bar-element-info">'),
                            t.append(twig.filter.escape(this.env_, twig.attr("current_category"in e ? e.current_category : "", "total"), "light_escape", null, !0)),
                            t.append('</div><div class="progress-bar-element-title">'),
                            t.append(twig.filter.escape(this.env_, twig.attr("lang"in e ? e.lang : "", "category_name"in e ? e.category_name : "", void 0, "array"), "light_escape", null, !0)),
                            t.append("</div></div>"))
                        }
                        ), this)
                    } else
                        t.append('<div class="progress-bar progress-bar-sip" ><div class="progress-bar-element-info"><div class="emulation-number-middle">&nbsp;</div></div><div class="progress-bar-element-title"><div class="emulation-number-middle">&nbsp;</div></div></div>');
                    t.append('</div><div class="percent">'),
                    "total"in e && e.total ? t.append(twig.filter.escape(this.env_, "total"in e ? e.total : "", "light_escape", null, !0)) : t.append("&nbsp;"),
                    t.append('</div></div><div class="progress_info"><span class="subtitle">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in e ? e.lang : "", "incoming_requests"), "light_escape", null, !0)),
                    t.append('</span></div></div></li><li class="item__row moved_to_lead"><div class="item row"><div class="progress"><div class="container_4_banner"><div class="progress-bar progress-bar-good-sorted"></div><div class="percent">'),
                    t.append(twig.filter.escape(this.env_, "accepted"in e ? e.accepted : "", "light_escape", null, !0)),
                    t.append('</div></div></div><div class="progress_info"><span class="subtitle">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in e ? e.lang : "", "converted_into_leads"), "light_escape", null, !0)),
                    t.append("</span></div></div></li></ul></div></div></div>")
                }
                ,
                e.prototype.getTemplateName = function() {
                    return "interface_reports_unsorted_statistics"
                }
                ,
                e.prototype.isTraitable = function() {
                    return !1
                }
                ,
                t._add("interface/reports/unsorted_statistics", e)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var e = function(t) {
                    twig.Template.call(this, t),
                    this.setBlocks({
                        additional_actions: twig.bind(this.block_additional_actions, this)
                    })
                };
                twig.inherits(e, twig.Template),
                e.prototype.getParent_ = function(e) {
                    return t._get("interface/reports/top.twig")
                }
                ,
                e.prototype.render_ = function(t, e, i) {
                    i = void 0 === i ? {} : i,
                    this.getParent(e).render_(t, e, twig.extend({}, this.getBlocks(), i))
                }
                ,
                e.prototype.block_additional_actions = function(e, i, a) {
                    if (a = void 0 === a ? {} : a,
                    e.append('<div class="r-by-activities__top-actions"><span class="r-by-activities__top-tip">'),
                    new (t._get("interface/reports/by_activities/selected_user.twig"))(this.env_).render_(e, twig.extend({}, i, {
                        items: ["current_user"in i ? i.current_user : ""]
                    })),
                    e.append("</span>"),
                    twig.attr("current_period"in i ? i.current_period : "", "name")) {
                        e.append('&nbsp;&nbsp;<span class="js-tip-holder r-by-activities__top-tip js-top-filter-period"><span class="r-by-activities__top-tip-selected r-by-activities__header-text filter__value js-tip-value">'),
                        e.append(twig.filter.escape(this.env_, twig.attr("current_period"in i ? i.current_period : "", "name"), "light_escape", null, !0)),
                        e.append("</span>"),
                        i.filter_date_items = [],
                        i._parent = i;
                        var s = twig.attr(twig.attr("filter"in i ? i.filter : "", "date"), "items");
                        twig.forEach(s, (function(t, e) {
                            i._key = e,
                            i.item = t,
                            twig.contains(["past_x_days", "next_x_days"], twig.attr("item"in i ? i.item : "", "id")) || (i.filter_date_items = twig.filter.merge("filter_date_items"in i ? i.filter_date_items : "", ["item"in i ? i.item : ""]))
                        }
                        ), this),
                        new (t._get("interface/reports/by_activities/tip.twig"))(this.env_).render_(e, twig.extend({}, i, {
                            class_name: "r-by-activities__top-tips",
                            name: "selected",
                            selected: twig.attr("current_period"in i ? i.current_period : "", "id"),
                            selected_dates: twig.attr("current_period"in i ? i.current_period : "", "selected_dates"),
                            items: "filter_date_items"in i ? i.filter_date_items : "",
                            is_custom_tip_holder: !0
                        })),
                        e.append("</span>")
                    }
                    "all" != twig.attr("current_user"in i ? i.current_user : "", "id") && (e.append('<a href="/stats/by_activities/" class="js-navigate-link r-by-activities__top-reset">'),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Show all"), "light_escape", null, !0)),
                    e.append("</a>")),
                    e.append("</div>")
                }
                ,
                e.prototype.getTemplateName = function() {
                    return "interface_reports_by_activities_header"
                }
                ,
                e.prototype.isTraitable = function() {
                    return !1
                }
                ,
                t._add("interface/reports/by_activities/header", e)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var e = function(t) {
                    twig.Template.call(this, t),
                    this.setBlocks({
                        body: twig.bind(this.block_body, this)
                    })
                };
                twig.inherits(e, twig.Template),
                e.prototype.getParent_ = function(e) {
                    return t._get("interface/list/table.twig")
                }
                ,
                e.prototype.render_ = function(t, e, i) {
                    i = void 0 === i ? {} : i,
                    e.not_show_chbx = !0,
                    e.no_list_settings = !0,
                    this.getParent(e).render_(t, e, twig.extend({}, this.getBlocks(), i))
                }
                ,
                e.prototype.block_body = function(e, i, a) {
                    a = void 0 === a ? {} : a,
                    i._parent = i;
                    var s = "items"in i ? i.items : ""
                      , n = {
                        index0: 0,
                        index: 1,
                        first: !0
                    };
                    if (twig.countable(s)) {
                        var l = twig.count(s);
                        n.revindex0 = l - 1,
                        n.revindex = l,
                        n.length = l,
                        n.last = 1 === l
                    }
                    twig.forEach(s, (function(a, s) {
                        i._key = s,
                        i.user = a,
                        new (t._get("interface/list/item.twig"))(this.env_).render_(e, twig.extend({}, i, {
                            is_first: twig.attr(n, "first"),
                            is_last: twig.attr(n, "last"),
                            page: "page"in i ? i.page : "",
                            item: "user"in i ? i.user : "",
                            fields: "fields"in i ? i.fields : "",
                            not_show_chbx: !0
                        })),
                        ++n.index0,
                        ++n.index,
                        n.first = !1,
                        n.length && (--n.revindex0,
                        --n.revindex,
                        n.last = 0 === n.revindex0)
                    }
                    ), this)
                }
                ,
                e.prototype.getTemplateName = function() {
                    return "interface_reports_by_activities_inner"
                }
                ,
                e.prototype.isTraitable = function() {
                    return !1
                }
                ,
                t._add("interface/reports/by_activities/inner", e)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var e = function(t) {
                    twig.Template.call(this, t),
                    this.setBlocks({
                        not_in_list: twig.bind(this.block_not_in_list, this),
                        list_top_right: twig.bind(this.block_list_top_right, this),
                        static: twig.bind(this.block_static, this),
                        list_body: twig.bind(this.block_list_body, this)
                    })
                };
                twig.inherits(e, twig.Template),
                e.prototype.getParent_ = function(e) {
                    return t._get("interface/list/list.twig")
                }
                ,
                e.prototype.render_ = function(t, e, i) {
                    i = void 0 === i ? {} : i,
                    e.not_show_chbx = !0,
                    e.aside_toggleable = !0,
                    e.no_fixed_top = !0,
                    this.getParent(e).render_(t, e, twig.extend({}, this.getBlocks(), i))
                }
                ,
                e.prototype.block_not_in_list = function(e, i, a) {
                    a = void 0 === a ? {} : a,
                    new (t._get("interface/reports/aside.twig"))(this.env_).render_(e, i)
                }
                ,
                e.prototype.block_list_top_right = function(e, i, a) {
                    a = void 0 === a ? {} : a,
                    new (t._get("interface/reports/by_activities/header.twig"))(this.env_).render_(e, twig.extend({}, i, {
                        class_name: "r-by-activities__header",
                        title: twig.attr("lang"in i ? i.lang : "", "analytics_by_activities_caption"),
                        no_filter: !0
                    }))
                }
                ,
                e.prototype.block_static = function(t, e, i) {
                    i = void 0 === i ? {} : i,
                    t.append(twig.filter.escape(this.env_, this.env_.invoke("inject_static", ["analytics.css", "reports_by_activities_list.php"], this), "light_escape", null, !0))
                }
                ,
                e.prototype.block_list_body = function(e, i, a) {
                    a = void 0 === a ? {} : a,
                    new (t._get("interface/reports/by_activities/inner.twig"))(this.env_).render_(e, twig.extend({}, i, {
                        fields: "fields"in i ? i.fields : "",
                        items: "items"in i ? i.items : ""
                    }))
                }
                ,
                e.prototype.getTemplateName = function() {
                    return "interface_reports_by_activities_list"
                }
                ,
                e.prototype.isTraitable = function() {
                    return !1
                }
                ,
                t._add("interface/reports/by_activities/list", e)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var e = function(t) {
                    twig.Template.call(this, t),
                    this.setBlocks({
                        aside: twig.bind(this.block_aside, this),
                        head: twig.bind(this.block_head, this),
                        static: twig.bind(this.block_static, this),
                        content: twig.bind(this.block_content, this)
                    })
                };
                twig.inherits(e, twig.Template),
                e.prototype.getParent_ = function(e) {
                    return t._get("interface/page/base.twig")
                }
                ,
                e.prototype.render_ = function(t, e, i) {
                    i = void 0 === i ? {} : i,
                    e.section = "by-activities",
                    this.getParent(e).render_(t, e, twig.extend({}, this.getBlocks(), i))
                }
                ,
                e.prototype.block_aside = function(e, i, a) {
                    a = void 0 === a ? {} : a,
                    new (t._get("interface/reports/aside.twig"))(this.env_).render_(e, i)
                }
                ,
                e.prototype.block_head = function(e, i, a) {
                    a = void 0 === a ? {} : a,
                    new (t._get("interface/reports/by_activities/header.twig"))(this.env_).render_(e, twig.extend({}, i, {
                        title: twig.attr("lang"in i ? i.lang : "", "analytics_by_activities_caption"),
                        no_filter: !0
                    }))
                }
                ,
                e.prototype.block_static = function(t, e, i) {
                    i = void 0 === i ? {} : i,
                    t.append(twig.filter.escape(this.env_, this.env_.invoke("inject_static", ["analytics.css", "reports_by_activities_detail.php"], this), "light_escape", null, !0))
                }
                ,
                e.prototype.block_content = function(t, e, i) {
                    i = void 0 === i ? {} : i,
                    t.append('<div class="r-by-activities__list js-list"></div><div class="r-by-activities__row"><div class="r-by-activities__column r-by-activities__column_left"><div class="r-by-activities__cell r-by-activities__cell_first r-by-activities__progress-wrapper r-by-activities__progress-wrapper_leads"><h3 class="r-by-activities__title">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in e ? e.lang : "", "rsf_leads"), "light_escape", null, !0)),
                    t.append('</h3><div class="default-overlay" id="leads-loader"><span class="spinner-icon spinner-icon-abs-center"></span></div></div>'),
                    "is_retail_functions_enabled"in e && e.is_retail_functions_enabled && (t.append('<div class="r-by-activities__cell r-by-activities__cell_first r-by-activities__progress-wrapper"><h3 class="r-by-activities__title">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Customers"), "light_escape", null, !0)),
                    t.append('</h3><div class="default-overlay" id="customers-loader"><span class="spinner-icon spinner-icon-abs-center"></span></div></div>')),
                    t.append('<div class="r-by-activities__cell" style="margin-bottom: 0"><div class="tasks-overlay" id="tasks-loader"><span class="spinner-icon spinner-icon-abs-center"></span><div class="r-by-activities__todos" style="opacity: 0.2"><div class="r-by-activities__todos-item r-by-activities__todos-item-1 column column__1"><span class="r-by-activities__todos-item-progress"></span><span class="r-by-activities__todos-item-header"><span class="icon icon-inline icon-follow-up"></span><span class="r-by-activities__todos-item-content-title title">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in e ? e.lang : "", "tasks_follow_up"), "light_escape", null, !0)),
                    t.append('</span></span><div class="r-by-activities__todos-item-content"><div class="r-by-activities__todos-item-content-total js-resize-txt"><svg><text x="0" y="99%" alignment-baseline="baseline">'),
                    t.append(0),
                    t.append('</text></svg></div><div class="r-by-activities__todos-item-content-items items"><div class="r-by-activities__todos-item-content-items-item item">0 '),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("numeral", twig.attr("lang"in e ? e.lang : "", "rsf_tasks_new"), 0), "light_escape", null, !0)),
                    t.append('</div><div class="r-by-activities__todos-item-content-items-item item">0 '),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("numeral", twig.attr("lang"in e ? e.lang : "", "rsf_tasks_expired"), 0), "light_escape", null, !0)),
                    t.append('</div><div class="r-by-activities__todos-item-content-items-item item">0 '),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("numeral", twig.attr("lang"in e ? e.lang : "", "rsf_tasks_closed"), 0), "light_escape", null, !0)),
                    t.append('</div></div></div></div><div class="r-by-activities__todos-item r-by-activities__todos-item-2 column column__2"><span class="r-by-activities__todos-item-progress"></span><span class="r-by-activities__todos-item-header"><span class="icon icon-inline icon-case-red"></span><span class="r-by-activities__todos-item-content-title title">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in e ? e.lang : "", "tasks_meeting"), "light_escape", null, !0)),
                    t.append('</span></span><div class="r-by-activities__todos-item-content"><div class="r-by-activities__todos-item-content-total js-resize-txt"><svg><text x="0" y="99%" alignment-baseline="baseline">'),
                    t.append(0),
                    t.append('</text></svg></div><div class="r-by-activities__todos-item-content-items items"><div class="r-by-activities__todos-item-content-items-item item">0 '),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("numeral", twig.attr("lang"in e ? e.lang : "", "rsf_tasks_new"), 0), "light_escape", null, !0)),
                    t.append('</div><div class="r-by-activities__todos-item-content-items-item item">0 '),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("numeral", twig.attr("lang"in e ? e.lang : "", "rsf_tasks_expired"), 0), "light_escape", null, !0)),
                    t.append('</div><div class="r-by-activities__todos-item-content-items-item item">0 '),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("numeral", twig.attr("lang"in e ? e.lang : "", "rsf_tasks_closed"), 0), "light_escape", null, !0)),
                    t.append('</div></div></div></div></div></div></div></div><div class="r-by-activities__column r-by-activities__column_right"><div class="r-by-activities__cell r-by-activities__cell_first r-by-activities__pie-wrapper"><h3 class="r-by-activities__title">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in e ? e.lang : "", "rsf_contacts"), "light_escape", null, !0)),
                    t.append('</h3><div class="default-overlay" id="contacts-loader"><span class="spinner-icon spinner-icon-abs-center"></span></div></div><div class="r-by-activities__cell" style="margin-bottom: 0; height: auto; min-height: 492px;"><h3 class="r-by-activities__title">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in e ? e.lang : "", "rsf_events"), "light_escape", null, !0)),
                    t.append('</h3><div class="default-overlay" id="notes-loader"><span class="spinner-icon spinner-icon-abs-center"></span></div></div></div></div>')
                }
                ,
                e.prototype.getTemplateName = function() {
                    return "interface_reports_by_activities_page"
                }
                ,
                e.prototype.isTraitable = function() {
                    return !1
                }
                ,
                t._add("interface/reports/by_activities/page", e)
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
                    t.append('<div class="js-top-filter-managers"><div class="js-multisuggest-list">'),
                    e._parent = e;
                    var a = "items"in e ? e.items : "";
                    twig.forEach(a, (function(i, a) {
                        e._key = a,
                        e.current_user = i,
                        t.append('<span class="r-by-activities__top-tip-selected js-multisuggest-item r-by-activities__header-text filter__value" data-id="'),
                        t.append(twig.filter.escape(this.env_, twig.attr("current_user"in e ? e.current_user : "", "id"), "light_escape", null, !0)),
                        t.append('" data-group="" data-title="'),
                        t.append(twig.filter.escape(this.env_, twig.attr("current_user"in e ? e.current_user : "", "name"), "light_escape", null, !0)),
                        t.append('">'),
                        t.append(twig.filter.escape(this.env_, twig.attr("current_user"in e ? e.current_user : "", "name"), "light_escape", null, !0)),
                        "all" != twig.attr("current_user"in e ? e.current_user : "", "id") && t.append('<span class="r-by-activities__top-user-reset"><svg class="svg-icon svg-common--close-not-painted-dims"><use xlink:href="#common--close-not-painted"></use></svg></span>'),
                        t.append("</span>")
                    }
                    ), this),
                    t.append("</div></div>")
                }
                ,
                e.prototype.getTemplateName = function() {
                    return "interface_reports_by_activities_selected_user"
                }
                ,
                e.prototype.isTraitable = function() {
                    return !1
                }
                ,
                t._add("interface/reports/by_activities/selected_user", e)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var e = function(t) {
                    twig.Template.call(this, t),
                    this.setBlocks({
                        bottom_block: twig.bind(this.block_bottom_block, this)
                    })
                };
                twig.inherits(e, twig.Template),
                e.prototype.getParent_ = function(e) {
                    return t._get("interface/common/tip.twig")
                }
                ,
                e.prototype.render_ = function(t, e, i) {
                    i = void 0 === i ? {} : i,
                    this.getParent(e).render_(t, e, twig.extend({}, this.getBlocks(), i))
                }
                ,
                e.prototype.block_bottom_block = function(e, i, a) {
                    a = void 0 === a ? {} : a,
                    e.append('<div class="tips-item tips-item__calendar">'),
                    new (t._get("interface/controls/date_field.twig"))(this.env_).render_(e, twig.extend({}, i, {
                        value: "selected_dates"in i ? i.selected_dates : "",
                        type: "range",
                        class_name: "date_filter__period_range__controls_field",
                        name: {
                            from: "from",
                            to: "to"
                        }
                    })),
                    e.append("</div>")
                }
                ,
                e.prototype.getTemplateName = function() {
                    return "interface_reports_by_activities_tip"
                }
                ,
                e.prototype.isTraitable = function() {
                    return !1
                }
                ,
                t._add("interface/reports/by_activities/tip", e)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var e = function(t) {
                    twig.Template.call(this, t),
                    this.setBlocks({
                        not_in_list: twig.bind(this.block_not_in_list, this),
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
                e.prototype.block_not_in_list = function(t, e, i) {
                    i = void 0 === i ? {} : i
                }
                ,
                e.prototype.block_list_top_right = function(t, e, i) {
                    i = void 0 === i ? {} : i
                }
                ,
                e.prototype.block_static = function(t, e, i) {
                    i = void 0 === i ? {} : i,
                    t.append(twig.filter.escape(this.env_, this.env_.invoke("inject_static", ["analytics.css"], this), "light_escape", null, !0))
                }
                ,
                e.prototype.block_list_body = function(e, i, a) {
                    a = void 0 === a ? {} : a,
                    new (t._get("interface/authlog/inner.twig"))(this.env_).render_(e, i)
                }
                ,
                e.prototype.block_list_footer = function(t, e, i) {
                    i = void 0 === i ? {} : i,
                    t.append('<div class="pipeline_leads__load_more js-pipeline-load-more leads-pipeline__autoload-load-more leads-pipeline__autoload-load-more-shown" id="list_more_btn"><span class="pipeline_leads__load_more__spinner spinner-icon spinner-icon-abs-center"></span></div>')
                }
                ,
                e.prototype.getTemplateName = function() {
                    return "interface_reports_calls_list"
                }
                ,
                e.prototype.isTraitable = function() {
                    return !1
                }
                ,
                t._add("interface/reports/calls/list", e)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var e = function(t) {
                    twig.Template.call(this, t),
                    this.setBlocks({
                        aside: twig.bind(this.block_aside, this),
                        head: twig.bind(this.block_head, this),
                        static: twig.bind(this.block_static, this),
                        content: twig.bind(this.block_content, this)
                    })
                };
                twig.inherits(e, twig.Template),
                e.prototype.getParent_ = function(e) {
                    return t._get("interface/page/base.twig")
                }
                ,
                e.prototype.render_ = function(t, e, i) {
                    i = void 0 === i ? {} : i,
                    e.section = "consolidated",
                    e.is_customers_enabled = ("is_customers_enabled"in e ? e.is_customers_enabled : "") && "N" == ("access_denied_paid"in e ? e.access_denied_paid : ""),
                    this.getParent(e).render_(t, e, twig.extend({}, this.getBlocks(), i))
                }
                ,
                e.prototype.block_aside = function(e, i, a) {
                    a = void 0 === a ? {} : a,
                    new (t._get("interface/reports/aside.twig"))(this.env_).render_(e, i)
                }
                ,
                e.prototype.block_head = function(e, i, a) {
                    a = void 0 === a ? {} : a,
                    new (t._get("interface/reports/top.twig"))(this.env_).render_(e, twig.extend({}, i, {
                        title: twig.attr("lang"in i ? i.lang : "", "consolidated_title")
                    }))
                }
                ,
                e.prototype.block_static = function(t, e, i) {
                    i = void 0 === i ? {} : i,
                    t.append(twig.filter.escape(this.env_, this.env_.invoke("inject_static", ["analytics.css", "dashboard.css", "reports_consolidated.php"], this), "light_escape", null, !0))
                }
                ,
                e.prototype.block_content = function(e, i, a) {
                    a = void 0 === a ? {} : a,
                    e.append('<div class="r-consolidated">'),
                    "Y" == ("access_denied_paid"in i ? i.access_denied_paid : "") && (e.append('<input type="hidden" id="plug-detector">'),
                    new (t._get("interface/common/tooltip.twig"))(this.env_).render_(e, twig.extend({}, i, {
                        class_name: "analytics-consolidated__plug-tooltip",
                        text: twig.attr("lang"in i ? i.lang : "", "tooltip_text"),
                        button: twig.attr("lang"in i ? i.lang : "", "tooltip_button"),
                        ribbon: twig.attr("lang"in i ? i.lang : "", "tooltip_ribbon"),
                        direction: "top",
                        width: 600
                    }))),
                    e.append('<div class="lt-analytics__row">'),
                    new (t._get("interface/reports/consolidated/tiles/leads_line.twig"))(this.env_).render_(e, twig.extend({}, i, {
                        not_enough_data: "Y" == ("access_denied_paid"in i ? i.access_denied_paid : ""),
                        is_loading: "plug"in i ? i.plug : ""
                    })),
                    e.append('</div><div class="lt-analytics__row"><div class="dashboard-tile__item dashboard-tile__item_flat dashboard-tile__item_analytics dashboard-tile__item_transparent r-consolidated__pie-chart" id="pie-chart-wrapper">'),
                    new (t._get("interface/reports/consolidated/tiles/leads_pie.twig"))(this.env_).render_(e, twig.extend({}, i, {
                        not_enough_data: "Y" == ("access_denied_paid"in i ? i.access_denied_paid : "")
                    })),
                    e.append('</div></div><div class="lt-analytics__row"><div class="lt-analytics__column lt-analytics__column_grow" '),
                    "is_customers_enabled"in i && i.is_customers_enabled || e.append('style="margin-right: 0"'),
                    e.append(">"),
                    "is_customers_enabled"in i && i.is_customers_enabled && (e.append('<div class="lt-analytics__row"><div class="dashboard-tile__item dashboard-tile__item_white dashboard-tile__item_analytics dashboard-tile__item_flat lt-analytics__purchases js-customers-purchases">'),
                    new (t._get("interface/reports/consolidated/tiles/purchases.twig"))(this.env_).render_(e, twig.extend({}, i, {
                        is_loading: "plug"in i ? i.plug : ""
                    })),
                    e.append("</div></div>")),
                    e.append('<div class="js-consolidated-contacts" style="position:relative; flex-grow: 1; flex-shrink: 0; background: #fff;">'),
                    new (t._get("interface/reports/consolidated/tiles/contacts.twig"))(this.env_).render_(e, twig.extend({}, i, {
                        not_enough_data: "Y" == ("access_denied_paid"in i ? i.access_denied_paid : ""),
                        is_loading: "plug"in i ? i.plug : ""
                    })),
                    e.append("</div></div>"),
                    "is_customers_enabled"in i && i.is_customers_enabled && (e.append('<div class="dashboard-tile__item dashboard-tile__item_white dashboard-tile__item_analytics dashboard-tile__item_flat lt-analytics__purchases-by-managers js-customers-by-managers">'),
                    new (t._get("interface/reports/consolidated/tiles/managers_purchases.twig"))(this.env_).render_(e, twig.extend({}, i, {
                        is_loading: "plug"in i ? i.plug : ""
                    })),
                    e.append("</div>")),
                    e.append('</div><div class="lt-analytics__row" style="min-height: 400px; background: #fff; margin-bottom: 0"><div class="js-consolidated-todos" style="width: 100%">'),
                    new (t._get("interface/reports/consolidated/tiles/todos.twig"))(this.env_).render_(e, twig.extend({}, i, {
                        not_enough_data: "Y" == ("access_denied_paid"in i ? i.access_denied_paid : ""),
                        is_loading: "plug"in i ? i.plug : ""
                    })),
                    e.append("</div></div></div>")
                }
                ,
                e.prototype.getTemplateName = function() {
                    return "interface_reports_consolidated_index"
                }
                ,
                e.prototype.isTraitable = function() {
                    return !1
                }
                ,
                t._add("interface/reports/consolidated/index", e)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var e = function(t) {
                    twig.Template.call(this, t),
                    this.setBlocks({
                        head: twig.bind(this.block_head, this),
                        static: twig.bind(this.block_static, this),
                        content: twig.bind(this.block_content, this)
                    })
                };
                twig.inherits(e, twig.Template),
                e.prototype.getParent_ = function(e) {
                    return t._get("interface/page/base.twig")
                }
                ,
                e.prototype.render_ = function(t, e, i) {
                    i = void 0 === i ? {} : i,
                    this.getParent(e).render_(t, e, twig.extend({}, this.getBlocks(), i))
                }
                ,
                e.prototype.block_head = function(e, i, a) {
                    a = void 0 === a ? {} : a,
                    new (t._get("interface/reports/top.twig"))(this.env_).render_(e, twig.extend({}, i, {
                        title: twig.attr("lang"in i ? i.lang : "", "report_title"),
                        no_filter: !0
                    }))
                }
                ,
                e.prototype.block_static = function(t, e, i) {
                    i = void 0 === i ? {} : i,
                    t.append(twig.filter.escape(this.env_, this.env_.invoke("inject_static", ["analytics.css", "dashboard.css", "reports_customers.php"], this), "light_escape", null, !0))
                }
                ,
                e.prototype.block_content = function(e, i, a) {
                    a = void 0 === a ? {} : a,
                    e.append('<div class="l-analytics__consolidated lt-analytics_customers"><div class="lt-analytics__row">'),
                    new (t._get("interface/reports/customers/tiles/pipeline.twig"))(this.env_).render_(e, twig.extend({}, i, twig.attr(twig.attr("template"in i ? i.template : "", "data"), "customers_report"))),
                    e.append('</div><div class="lt-analytics__row" style="margin-bottom: 0"><div class="lt-analytics__column lt-analytics__column_grow">'),
                    new (t._get("interface/reports/customers/tiles/purchases.twig"))(this.env_).render_(e, twig.extend({}, i, {
                        has_plug: "Y" == twig.attr(twig.attr(twig.attr("template"in i ? i.template : "", "data"), "purchases"), "plug") || ("has_plug"in i ? i.has_plug : ""),
                        periods: twig.attr(twig.attr("template"in i ? i.template : "", "data"), "purchases")
                    })),
                    e.append("</div>"),
                    new (t._get("interface/reports/customers/tiles/managers_purchases.twig"))(this.env_).render_(e, twig.extend({}, i, twig.attr(twig.attr("template"in i ? i.template : "", "data"), "purchases_by_managers"))),
                    e.append("</div></div>")
                }
                ,
                e.prototype.getTemplateName = function() {
                    return "interface_reports_customers_page"
                }
                ,
                e.prototype.isTraitable = function() {
                    return !1
                }
                ,
                t._add("interface/reports/customers/page", e)
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
                    twig.attr(twig.attr(twig.attr("template"in e ? e.template : "", "data"), "current_period"), "show") ? twig.attr(twig.attr(twig.attr("template"in e ? e.template : "", "data"), "current_period"), "days_from_start") > 0 ? e.now_width = this.env_.filter("round", twig.attr(twig.attr(twig.attr("template"in e ? e.template : "", "data"), "current_period"), "days_from_start") / twig.attr(twig.attr(twig.attr("template"in e ? e.template : "", "data"), "current_period"), "days_total") * 100) : e.now_width = 0 : e.now_width = 100,
                    e._parent = e;
                    var a = "groups"in e ? e.groups : ""
                      , s = {
                        index0: 0,
                        index: 1,
                        first: !0
                    };
                    if (twig.countable(a)) {
                        var n = twig.count(a);
                        s.revindex0 = n - 1,
                        s.revindex = n,
                        s.length = n,
                        s.last = 1 === n
                    }
                    twig.forEach(a, (function(i, a) {
                        if (e.group_id = a,
                        e.group = i,
                        twig.attr("group"in e ? e.group : "", "users")) {
                            t.append('<div class="goals_report__statistics__group '),
                            twig.attr(s, "last") && t.append("last_group"),
                            t.append('">'),
                            "total" != ("group_id"in e ? e.group_id : "") && (t.append('<div class="goals__header_separator"><div class="goals_report_group_header"><label class="goals_report__statistics__group_header">'),
                            t.append(twig.filter.escape(this.env_, twig.attr("group"in e ? e.group : "", "name"), "light_escape", null, !0)),
                            t.append('</label><span class="goals_report__fake_header">'),
                            t.append(twig.filter.escape(this.env_, twig.attr("group"in e ? e.group : "", "name"), "light_escape", null, !0)),
                            t.append('</span></div><div class="goals_report__statistics__line"></div><span class="goals_report__statistics__goal_sum leads_price">'),
                            twig.attr(twig.attr("group"in e ? e.group : "", "goals"), "leads_price") > 0 && t.append(twig.filter.escape(this.env_, this.env_.filter("price", twig.attr(twig.attr("group"in e ? e.group : "", "goals"), "leads_price")), "light_escape", null, !0)),
                            t.append('</span><span class="goals_report__statistics__goal_sum leads_count">'),
                            twig.attr(twig.attr("group"in e ? e.group : "", "goals"), "leads_count") > 0 && t.append(twig.filter.escape(this.env_, twig.attr(twig.attr("group"in e ? e.group : "", "goals"), "leads_count"), "light_escape", null, !0)),
                            t.append("</span></div>"));
                            var n = twig.attr("group"in e ? e.group : "", "users");
                            twig.forEach(n, (function(i, a) {
                                e._key = a,
                                e.user_id = i,
                                e.user = twig.attr("users"in e ? e.users : "", "user_" + ("user_id"in e ? e.user_id : ""), void 0, "array"),
                                twig.attr(twig.attr("user"in e ? e.user : "", "goals"), "leads_count") ? (e.width_leads_count = this.env_.filter("round", twig.attr(twig.attr("user"in e ? e.user : "", "result"), "leads_count") / twig.attr(twig.attr("user"in e ? e.user : "", "goals"), "leads_count") * 100),
                                ("width_leads_count"in e ? e.width_leads_count : "") > 100 ? e.width_leads_count = 125 : (("width_leads_count"in e ? e.width_leads_count : "") < 1 || twig.attr(twig.attr("user"in e ? e.user : "", "result"), "leads_count") < 1) && (e.width_leads_count = 1),
                                ("width_leads_count"in e ? e.width_leads_count : "") >= ("now_width"in e ? e.now_width : "") ? e.status_leads_count = "good_result" : e.status_leads_count = "bad_result") : (e.width_leads_count = 0,
                                e.status_leads_count = "no_goals"),
                                twig.attr(twig.attr("user"in e ? e.user : "", "goals"), "leads_price") ? (e.width_leads_price = this.env_.filter("round", twig.attr(twig.attr("user"in e ? e.user : "", "result"), "leads_price") / twig.attr(twig.attr("user"in e ? e.user : "", "goals"), "leads_price") * 100),
                                ("width_leads_price"in e ? e.width_leads_price : "") > 100 ? e.width_leads_price = 125 : (("width_leads_price"in e ? e.width_leads_price : "") < 1 || twig.attr(twig.attr("user"in e ? e.user : "", "result"), "leads_price") < 1) && (e.width_leads_price = 1),
                                ("width_leads_price"in e ? e.width_leads_price : "") >= ("now_width"in e ? e.now_width : "") ? e.status_leads_price = "good_result" : e.status_leads_price = "bad_result") : (e.width_leads_price = 0,
                                e.status_leads_price = "no_goals"),
                                e.user_goals_controls = {
                                    width: {
                                        leads_price: "width_leads_price"in e ? e.width_leads_price : "",
                                        leads_count: "width_leads_count"in e ? e.width_leads_count : ""
                                    },
                                    statuses: {
                                        leads_price: "status_leads_price"in e ? e.status_leads_price : "",
                                        leads_count: "status_leads_count"in e ? e.status_leads_count : ""
                                    }
                                },
                                e.status = twig.attr(twig.attr("user_goals_controls"in e ? e.user_goals_controls : "", "statuses"), "current_goal_type"in e ? e.current_goal_type : "", void 0, "array"),
                                e.width = twig.attr(twig.attr("user_goals_controls"in e ? e.user_goals_controls : "", "width"), "current_goal_type"in e ? e.current_goal_type : "", void 0, "array"),
                                t.append('<div class="goals_report__statistics_item '),
                                "total" == ("user_id"in e ? e.user_id : "") ? t.append("total_goals") : t.append("user_goals"),
                                t.append(" "),
                                t.append(twig.filter.escape(this.env_, "status"in e ? e.status : "", "light_escape", null, !0)),
                                t.append('"data-status-leads_price="'),
                                t.append(twig.filter.escape(this.env_, twig.attr(twig.attr("user_goals_controls"in e ? e.user_goals_controls : "", "statuses"), "leads_price"), "light_escape", null, !0)),
                                t.append('"data-status-leads_count="'),
                                t.append(twig.filter.escape(this.env_, twig.attr(twig.attr("user_goals_controls"in e ? e.user_goals_controls : "", "statuses"), "leads_count"), "light_escape", null, !0)),
                                t.append('"data-user_id="'),
                                t.append(twig.filter.escape(this.env_, "user_id"in e ? e.user_id : "", "light_escape", null, !0)),
                                t.append('"><label class="goals_report__statistics__label">'),
                                t.append(twig.filter.escape(this.env_, twig.attr("user"in e ? e.user : "", "name"), "light_escape", null, !0)),
                                t.append('</label><div class="goals_report__statistics__line"><div class="goals_report__statistics__fill_line"data-width-leads_price="'),
                                t.append(twig.filter.escape(this.env_, twig.attr(twig.attr("user_goals_controls"in e ? e.user_goals_controls : "", "width"), "leads_price"), "light_escape", null, !0)),
                                t.append('"data-width-leads_count="'),
                                t.append(twig.filter.escape(this.env_, twig.attr(twig.attr("user_goals_controls"in e ? e.user_goals_controls : "", "width"), "leads_count"), "light_escape", null, !0)),
                                t.append('"><span class="goals_report__statistics__sum leads_price">'),
                                twig.attr(twig.attr("user"in e ? e.user : "", "goals"), "leads_price") ? twig.attr(twig.attr("user"in e ? e.user : "", "result"), "leads_price") > 0 ? t.append(twig.filter.escape(this.env_, this.env_.filter("price", twig.attr(twig.attr("user"in e ? e.user : "", "result"), "leads_price")), "light_escape", null, !0)) : t.append(twig.filter.escape(this.env_, this.env_.filter("price", 0), "light_escape", null, !0)) : t.append(twig.filter.escape(this.env_, twig.attr(twig.attr("lang"in e ? e.lang : "", "calculations"), "goal_not_set"), "light_escape", null, !0)),
                                t.append('</span><span class="goals_report__statistics__sum leads_count">'),
                                twig.attr(twig.attr("user"in e ? e.user : "", "goals"), "leads_count") ? twig.attr(twig.attr("user"in e ? e.user : "", "result"), "leads_count") > 0 ? t.append(twig.filter.escape(this.env_, twig.attr(twig.attr("user"in e ? e.user : "", "result"), "leads_count"), "light_escape", null, !0)) : t.append(0) : t.append(twig.filter.escape(this.env_, twig.attr(twig.attr("lang"in e ? e.lang : "", "calculations"), "goal_not_set"), "light_escape", null, !0)),
                                t.append("</span>"),
                                "total" != ("user_id"in e ? e.user_id : "") && (t.append('<span class="goals_report__statistics__goal_sum leads_price" style="opacity: 0;">'),
                                twig.attr(twig.attr("user"in e ? e.user : "", "goals"), "leads_price") > 0 && t.append(twig.filter.escape(this.env_, this.env_.filter("price", twig.attr(twig.attr("user"in e ? e.user : "", "goals"), "leads_price")), "light_escape", null, !0)),
                                t.append('</span><span class="goals_report__statistics__goal_sum leads_count" style="opacity: 0;">'),
                                twig.attr(twig.attr("user"in e ? e.user : "", "goals"), "leads_count") > 0 && t.append(twig.filter.escape(this.env_, twig.attr(twig.attr("user"in e ? e.user : "", "goals"), "leads_count"), "light_escape", null, !0)),
                                t.append("</span>")),
                                t.append('<div class="goals_report__statistics__fade_line"></div></div>'),
                                "total" != ("user_id"in e ? e.user_id : "") && (t.append('<div class="goals_report__statistics__right_goals"><span class="goals_report__statistics__goal_sum leads_price">'),
                                twig.attr(twig.attr("user"in e ? e.user : "", "goals"), "leads_price") > 0 && t.append(twig.filter.escape(this.env_, this.env_.filter("price", twig.attr(twig.attr("user"in e ? e.user : "", "goals"), "leads_price")), "light_escape", null, !0)),
                                t.append('</span><span class="goals_report__statistics__goal_sum leads_count">'),
                                twig.attr(twig.attr("user"in e ? e.user : "", "goals"), "leads_count") > 0 && t.append(twig.filter.escape(this.env_, twig.attr(twig.attr("user"in e ? e.user : "", "goals"), "leads_count"), "light_escape", null, !0)),
                                t.append("</span></div>")),
                                t.append("</div>"),
                                "total" == ("user_id"in e ? e.user_id : "") && (t.append('<div class="goals_report__statistics__goal"><span class="goals_report__statistics__goal_text">'),
                                t.append(twig.filter.escape(this.env_, twig.attr(twig.attr("lang"in e ? e.lang : "", "calculations"), "goal"), "light_escape", null, !0)),
                                t.append('</span><span class="goals_report__statistics__goal_sum leads_price">'),
                                twig.attr(twig.attr("user"in e ? e.user : "", "goals"), "leads_price") > 0 && t.append(twig.filter.escape(this.env_, this.env_.filter("price", twig.attr(twig.attr("user"in e ? e.user : "", "goals"), "leads_price")), "light_escape", null, !0)),
                                t.append('</span><span class="goals_report__statistics__goal_sum leads_count">'),
                                twig.attr(twig.attr("user"in e ? e.user : "", "goals"), "leads_count") > 0 && t.append(twig.filter.escape(this.env_, twig.attr(twig.attr("user"in e ? e.user : "", "goals"), "leads_count"), "light_escape", null, !0)),
                                t.append("</span></div>")),
                                t.append("</div>")
                            }
                            ), this),
                            t.append("</div>")
                        }
                        ++s.index0,
                        ++s.index,
                        s.first = !1,
                        s.length && (--s.revindex0,
                        --s.revindex,
                        s.last = 0 === s.revindex0)
                    }
                    ), this),
                    twig.attr(twig.attr(twig.attr("template"in e ? e.template : "", "data"), "current_period"), "show") && (t.append('<div class="goals_report__statistics__flag_wrapper"><div class="goals_report__statistics__flag" style="left: '),
                    t.append(twig.filter.escape(this.env_, "now_width"in e ? e.now_width : "", "light_escape", null, !0)),
                    t.append('%;"><div class="goals_report__statistics__flag__info"><span class="goals_report__statistics__flag__today">'),
                    t.append(twig.filter.escape(this.env_, twig.attr(twig.attr(twig.attr("template"in e ? e.template : "", "data"), "current_period"), "date"), "light_escape", null, !0)),
                    t.append('</span><div class="goals_report__statistics__flag__days"><span class="goals_report__statistics__flag__days_now">'),
                    t.append(twig.filter.escape(this.env_, twig.attr(twig.attr(twig.attr("template"in e ? e.template : "", "data"), "current_period"), "days_from_start"), "light_escape", null, !0)),
                    t.append("</span> "),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("numeral", twig.attr(twig.attr("lang"in e ? e.lang : "", "numeral"), "days"), twig.attr(twig.attr(twig.attr("template"in e ? e.template : "", "data"), "current_period"), "days_from_start")), "light_escape", null, !0)),
                    t.append("\x3c!----\x3e "),
                    t.append(twig.filter.escape(this.env_, twig.attr(twig.attr("lang"in e ? e.lang : "", "calculations"), "of"), "light_escape", null, !0)),
                    t.append(' \x3c!----\x3e<span class="goals_report__statistics__flag__days_total">'),
                    t.append(twig.filter.escape(this.env_, twig.attr(twig.attr(twig.attr("template"in e ? e.template : "", "data"), "current_period"), "days_total"), "light_escape", null, !0)),
                    t.append("</span></div></div></div></div>"))
                }
                ,
                e.prototype.getTemplateName = function() {
                    return "interface_reports_goals_groups"
                }
                ,
                e.prototype.isTraitable = function() {
                    return !1
                }
                ,
                t._add("interface/reports/goals/groups", e)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var e = function(t) {
                    twig.Template.call(this, t),
                    this.setBlocks({
                        aside: twig.bind(this.block_aside, this),
                        head_button: twig.bind(this.block_head_button, this),
                        static: twig.bind(this.block_static, this),
                        content: twig.bind(this.block_content, this)
                    })
                };
                twig.inherits(e, twig.Template),
                e.prototype.getParent_ = function(e) {
                    return t._get("interface/reports/page.twig")
                }
                ,
                e.prototype.render_ = function(t, e, i) {
                    i = void 0 === i ? {} : i,
                    this.getParent(e).render_(t, e, twig.extend({}, this.getBlocks(), i))
                }
                ,
                e.prototype.block_aside = function(e, i, a) {
                    a = void 0 === a ? {} : a,
                    new (t._get("interface/page/aside.twig"))(this.env_).render_(e, i)
                }
                ,
                e.prototype.block_head_button = function(e, i, a) {
                    a = void 0 === a ? {} : a,
                    twig.attr(twig.attr("template"in i ? i.template : "", "page"), "show_settings_link") && (e.append('<div class="goals_report__settings_button"><a class="js-navigate-link" href="/stats/goals/settings/">'),
                    new (t._get("interface/controls/button.twig"))(this.env_).render_(e, twig.extend({}, i, {
                        class_name: "js-goals-settings",
                        text: twig.attr(twig.attr("lang"in i ? i.lang : "", "page"), "set_goals"),
                        svg_class_name: "common--gear"
                    })),
                    e.append("</a></div>"))
                }
                ,
                e.prototype.block_static = function(t, e, i) {
                    i = void 0 === i ? {} : i,
                    t.append(twig.filter.escape(this.env_, this.env_.invoke("inject_static", ["analytics.css", "reports_goals.php"], this), "light_escape", null, !0))
                }
                ,
                e.prototype.block_content = function(e, i, a) {
                    a = void 0 === a ? {} : a;
                    var s = e;
                    (e = new twig.StringBuffer).append('<div class="goals_report__wrapper" id="goals_report_wrapper"><div class="goals_report__revenue__wrapper content__account__note__wrapper"><div class="content__account__note">'),
                    e.append(twig.filter.escape(this.env_, twig.attr(twig.attr("lang"in i ? i.lang : "", "page"), "description"), "light_escape", null, !0)),
                    e.append('</div></div><div class="goals_report__filter">'),
                    twig.attr(twig.attr("template"in i ? i.template : "", "controls"), "groups", void 0, void 0, !0) && (e.append('<div class="goals_report__filter__users filter__custom_settings__item">'),
                    new (t._get("interface/controls/checkboxes_dropdown/values_title.twig"))(this.env_).render_(e, twig.extend({}, i, twig.attr(twig.attr("template"in i ? i.template : "", "controls"), "groups"))),
                    e.append("</div>")),
                    twig.attr(twig.attr("template"in i ? i.template : "", "controls"), "toggler_types", void 0, void 0, !0) && (e.append('<div class="goals_report__filter__sort">'),
                    new (t._get("interface/controls/toggler.twig"))(this.env_).render_(e, twig.extend({}, i, twig.attr(twig.attr("template"in i ? i.template : "", "controls"), "toggler_types"))),
                    e.append("</div>")),
                    e.append('</div><div class="goals_report__statistics type_'),
                    e.append(twig.filter.escape(this.env_, "current_goal_type"in i ? i.current_goal_type : "", "light_escape", null, !0)),
                    e.append('" id="users_wrapper">'),
                    new (t._get("interface/reports/goals/groups.twig"))(this.env_).render_(e, i),
                    e.append("</div></div>"),
                    s.append(twig.spaceless(e.toString())),
                    e = s
                }
                ,
                e.prototype.getTemplateName = function() {
                    return "interface_reports_goals_index"
                }
                ,
                e.prototype.isTraitable = function() {
                    return !1
                }
                ,
                t._add("interface/reports/goals/index", e)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var e = function(t) {
                    twig.Template.call(this, t),
                    this.setBlocks({
                        additional_actions: twig.bind(this.block_additional_actions, this)
                    })
                };
                twig.inherits(e, twig.Template),
                e.prototype.getParent_ = function(e) {
                    return t._get("interface/reports/top.twig")
                }
                ,
                e.prototype.render_ = function(t, e, i) {
                    i = void 0 === i ? {} : i,
                    e.title = this.env_.filter("i18n", "Manager's working day"),
                    e.no_filter = !0,
                    this.getParent(e).render_(t, e, twig.extend({}, this.getBlocks(), i))
                }
                ,
                e.prototype.block_additional_actions = function(t, e, i) {
                    i = void 0 === i ? {} : i
                }
                ,
                e.prototype.getTemplateName = function() {
                    return "interface_reports_operday_header"
                }
                ,
                e.prototype.isTraitable = function() {
                    return !1
                }
                ,
                t._add("interface/reports/operday/header", e)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var e = function(t) {
                    twig.Template.call(this, t),
                    this.setBlocks({
                        body: twig.bind(this.block_body, this)
                    })
                };
                twig.inherits(e, twig.Template),
                e.prototype.getParent_ = function(e) {
                    return t._get("interface/reports/operday/table.twig")
                }
                ,
                e.prototype.render_ = function(t, e, i) {
                    i = void 0 === i ? {} : i,
                    e.is_plug = !0,
                    e.list_table_holder_class_name = "operday-analytic__table-holder",
                    e.list_table_id = "operday-analytic-table",
                    e.list_table_class_name = "operday-analytic__table",
                    this.getParent(e).render_(t, e, twig.extend({}, this.getBlocks(), i))
                }
                ,
                e.prototype.block_body = function(e, i, a) {
                    a = void 0 === a ? {} : a,
                    new (t._get("interface/plugs/list/table_body.twig"))(this.env_).render_(e, twig.extend({}, i, {
                        count: 5,
                        without_checkbox_column: !0
                    }))
                }
                ,
                e.prototype.getTemplateName = function() {
                    return "interface_reports_operday_list"
                }
                ,
                e.prototype.isTraitable = function() {
                    return !1
                }
                ,
                t._add("interface/reports/operday/list", e)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var e = function(t) {
                    twig.Template.call(this, t),
                    this.setBlocks({
                        aside: twig.bind(this.block_aside, this),
                        head: twig.bind(this.block_head, this),
                        static: twig.bind(this.block_static, this),
                        content: twig.bind(this.block_content, this)
                    })
                };
                twig.inherits(e, twig.Template),
                e.prototype.getParent_ = function(e) {
                    return t._get("interface/page/base.twig")
                }
                ,
                e.prototype.render_ = function(t, e, i) {
                    i = void 0 === i ? {} : i,
                    e.section = "operday",
                    e.width = Number(Number(Number(182) + Number(71)) + Number(85)) + Number(95 * (twig.filter.length(this.env_, "fields"in e ? e.fields : "") - 3)),
                    e.filter = {
                        items: {
                            preset: "left_menu"in e ? e.left_menu : ""
                        }
                    },
                    this.getParent(e).render_(t, e, twig.extend({}, this.getBlocks(), i))
                }
                ,
                e.prototype.block_aside = function(e, i, a) {
                    a = void 0 === a ? {} : a,
                    new (t._get("interface/reports/aside.twig"))(this.env_).render_(e, i)
                }
                ,
                e.prototype.block_head = function(e, i, a) {
                    a = void 0 === a ? {} : a,
                    new (t._get("interface/reports/operday/header.twig"))(this.env_).render_(e, i)
                }
                ,
                e.prototype.block_static = function(t, e, i) {
                    i = void 0 === i ? {} : i,
                    t.append(twig.filter.escape(this.env_, this.env_.invoke("inject_static", ["analytics.css", "reports_operday_operday.php"], this), "light_escape", null, !0))
                }
                ,
                e.prototype.block_content = function(e, i, a) {
                    a = void 0 === a ? {} : a,
                    e.append('<div class="operday-analytic__date-filter"><div class="operday-analytic__filter-text">'),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Select a period"), "light_escape", null, !0)),
                    e.append("</div>"),
                    new (t._get("interface/controls/date_filter.twig"))(this.env_).render_(e, twig.extend({}, i, {
                        items: "filters"in i ? i.filters : "",
                        dropdown_class_name: "operday-analytic__filter-dropdown",
                        title: " ",
                        name_date_preset: "date_preset"
                    })),
                    e.append("</div>"),
                    new (t._get("interface/reports/operday/list.twig"))(this.env_).render_(e, twig.extend({}, i, {
                        fields: "fields"in i ? i.fields : "",
                        width: "width"in i ? i.width : ""
                    }))
                }
                ,
                e.prototype.getTemplateName = function() {
                    return "interface_reports_operday_page"
                }
                ,
                e.prototype.isTraitable = function() {
                    return !1
                }
                ,
                t._add("interface/reports/operday/page", e)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var e = function(t) {
                    twig.Template.call(this, t),
                    this.setBlocks({
                        list_tabs: twig.bind(this.block_list_tabs, this),
                        body: twig.bind(this.block_body, this),
                        body_no_items: twig.bind(this.block_body_no_items, this),
                        body_no_items_message: twig.bind(this.block_body_no_items_message, this),
                        list_footer: twig.bind(this.block_list_footer, this)
                    })
                };
                twig.inherits(e, twig.Template),
                e.prototype.getParent_ = function(t) {
                    return !1
                }
                ,
                e.prototype.render_ = function(e, i, a) {
                    a = void 0 === a ? {} : a,
                    i.has_items = twig.filter.length(this.env_, "items"in i ? i.items : "") || ("is_plug"in i ? i.is_plug : ""),
                    e.append('<div class="operday-analytic__scroll-wrapper"><div class="list__table__holder js-hs-scroller custom-scroll '),
                    e.append(twig.filter.escape(this.env_, "list_table_holder_class_name"in i ? i.list_table_holder_class_name : "", "light_escape", null, !0)),
                    e.append('" '),
                    "list_table_holder_id"in i && i.list_table_holder_id && (e.append('id="'),
                    e.append(twig.filter.escape(this.env_, "list_table_holder_id"in i ? i.list_table_holder_id : "", "light_escape", null, !0)),
                    e.append('"')),
                    e.append(">"),
                    e.append(this.renderBlock("list_tabs", i, a)),
                    e.append('<div class="js-scroll-container list__table '),
                    e.append(twig.filter.escape(this.env_, "list_table_class_name"in i ? i.list_table_class_name : "", "light_escape", null, !0)),
                    e.append(" "),
                    "has_items"in i && i.has_items || e.append("list__table-no-items"),
                    e.append('" id="'),
                    "list_table_id"in i && i.list_table_id ? e.append(twig.filter.escape(this.env_, "list_table_id"in i ? i.list_table_id : "", "light_escape", null, !0)) : e.append("list_table"),
                    e.append('" '),
                    "width"in i && i.width && (e.append('style="min-width: '),
                    e.append(twig.filter.escape(this.env_, "width"in i ? i.width : "", "light_escape", null, !0)),
                    e.append('px"')),
                    e.append(">"),
                    "has_items"in i && i.has_items ? (new (t._get("interface/list/col_group.twig"))(this.env_).render_(e, twig.extend({}, i, {
                        fields: "fields"in i ? i.fields : "",
                        not_show_chbx: !0
                    })),
                    new (t._get("interface/list/header.twig"))(this.env_).render_(e, twig.extend({}, i, {
                        fields: "fields"in i ? i.fields : "",
                        not_show_chbx: !0
                    })),
                    e.append(this.renderBlock("body", i, a))) : (new (t._get("interface/list/header.twig"))(this.env_).render_(e, twig.extend({}, i, {
                        fields: "fields"in i ? i.fields : "",
                        not_show_chbx: !0,
                        has_markers: "has_markers"in i ? i.has_markers : ""
                    })),
                    e.append(this.renderBlock("body_no_items", i, a))),
                    e.append("</div>"),
                    e.append(this.renderBlock("body_no_items_message", i, a)),
                    e.append("</div></div>"),
                    e.append(this.renderBlock("list_footer", i, a))
                }
                ,
                e.prototype.block_list_tabs = function(t, e, i) {
                    i = void 0 === i ? {} : i
                }
                ,
                e.prototype.block_body = function(t, e, i) {
                    i = void 0 === i ? {} : i
                }
                ,
                e.prototype.block_body_no_items = function(t, e, i) {
                    i = void 0 === i ? {} : i
                }
                ,
                e.prototype.block_body_no_items_message = function(e, i, a) {
                    a = void 0 === a ? {} : a,
                    new (t._get("interface/list/no_items_message.twig"))(this.env_).render_(e, i)
                }
                ,
                e.prototype.block_list_footer = function(t, e, i) {
                    i = void 0 === i ? {} : i,
                    t.append('<div class="operday-analytic__load-more__spinner"><span class="spinner-icon js-load-more-spinner hidden"></span></div>')
                }
                ,
                e.prototype.getTemplateName = function() {
                    return "interface_reports_operday_table"
                }
                ,
                e.prototype.isTraitable = function() {
                    return !1
                }
                ,
                t._add("interface/reports/operday/table", e)
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
                    t.append('<div id="conversion-chart" class="js-hs-scroller custom-scroll top-chart top-chart_hidden"><input type="hidden" id="filter_period" value="'),
                    t.append(twig.filter.escape(this.env_, twig.attr("filter"in e ? e.filter : "", "period"), "light_escape", null, !0)),
                    t.append('"/><input type="hidden" id="filter_date_from" value="'),
                    t.append(twig.filter.escape(this.env_, twig.attr("filter"in e ? e.filter : "", "date_from"), "light_escape", null, !0)),
                    t.append('"/><input type="hidden" id="filter_date_to" value="'),
                    t.append(twig.filter.escape(this.env_, twig.attr("filter"in e ? e.filter : "", "date_to"), "light_escape", null, !0)),
                    t.append('"/><div class="conversion-chart__body"><div class="conversion-chart__body-inner"><div class="conversion-chart__row"><div class="conversion-chart__unsorted"><div class="conversion-chart__unsorted-inner"><div class="conversion-chart__unsorted-info"><div class="conversion-chart__unsorted-info-text">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "new"), "light_escape", null, !0)),
                    t.append('</div><div class="conversion-chart__unsorted-count">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("count", twig.attr(twig.attr("params"in e ? e.params : "", "new"), "leads_count")), "light_escape", null, !0)),
                    t.append('</div></div><div class="conversion-chart__unsorted-separator conversion-chart__separator conversion-chart__separator_hidden"><div class="separator__bottom-side"><div class="separator__bottom-side-text_1">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "within stage"), "light_escape", null, !0)),
                    t.append('</div><div class="separator__bottom-side-text_2">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "entered stage"), "light_escape", null, !0)),
                    t.append('</div><div class="separator__bottom-side-text_3">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "leads lost"), "light_escape", null, !0)),
                    t.append('</div></div></div></div></div><div class="conversion-chart__statuses-wrapper conversion-chart__custom-statuses-wrapper"><div class="conversion-chart__statuses conversion-chart__custom-statuses">'),
                    e.first_transfer = !0,
                    e.not_show_unsorted = !("show_unsorted"in e && e.show_unsorted),
                    e._parent = e;
                    var a = twig.attr(twig.attr("params"in e ? e.params : "", "statuses"), "custom")
                      , s = {
                        index0: 0,
                        index: 1,
                        first: !0
                    };
                    if (twig.countable(a)) {
                        var n = twig.count(a);
                        s.revindex0 = n - 1,
                        s.revindex = n,
                        s.length = n,
                        s.last = 1 === n
                    }
                    twig.forEach(a, (function(i, a) {
                        e._key = a,
                        e.status = i,
                        t.append('<div class="conversion-chart__status-wrapper'),
                        twig.attr(s, "last") && t.append(" conversion-chart__status-wrapper_prelast"),
                        t.append('"><div class="conversion-chart__custom-status conversion-chart__status" data-id="'),
                        t.append(twig.filter.escape(this.env_, twig.attr("status"in e ? e.status : "", "id"), "light_escape", null, !0)),
                        t.append('"><div class="conversion-chart__status-color" style=\'background-color: '),
                        t.append(twig.filter.escape(this.env_, twig.attr("status"in e ? e.status : "", "color"), "light_escape", null, !0)),
                        t.append(';\'></div><div class="conversion-chart__status-inner"><div class="conversion-chart__status-title">'),
                        t.append(twig.filter.escape(this.env_, twig.attr("status"in e ? e.status : "", "title"), "light_escape", null, !0)),
                        t.append('</div><div class="conversion-chart__status-leads-count conversion-chart__status-leads-count_only"><a href="'),
                        t.append(twig.filter.escape(this.env_, twig.attr("status"in e ? e.status : "", "leads_link"), "light_escape", null, !0)),
                        t.append('" class="js-navigate-link">'),
                        t.append(twig.filter.escape(this.env_, this.env_.filter("count", twig.attr("status"in e ? e.status : "", "leads_count")), "light_escape", null, !0)),
                        t.append(" "),
                        t.append(twig.filter.escape(this.env_, this.env_.filter("numeral", twig.attr("lang"in e ? e.lang : "", "dashboard_leads_numeral"), twig.attr("status"in e ? e.status : "", "leads_count")), "light_escape", null, !0)),
                        t.append('</a></div><div class="conversion-chart__status-budget"><a href="'),
                        t.append(twig.filter.escape(this.env_, twig.attr("status"in e ? e.status : "", "leads_link"), "light_escape", null, !0)),
                        t.append('" class="js-navigate-link">'),
                        t.append(twig.filter.escape(this.env_, this.env_.filter("price", twig.attr("status"in e ? e.status : "", "price")), "light_escape", null, !0)),
                        t.append("</a></div></div></div>"),
                        e.failed_count = twig.attr("status"in e ? e.status : "", "failed_count") || 0,
                        e.failed_price = twig.attr("status"in e ? e.status : "", "failed_price") || 0,
                        e.failed_link = twig.attr("status"in e ? e.status : "", "failed_link"),
                        t.append('<div class="conversion-chart__status-lost-leads status-lost-leads"><div class="status-lost-leads__text">'),
                        "failed_link"in e && e.failed_link && (t.append('<a href="'),
                        t.append(twig.filter.escape(this.env_, "failed_link"in e ? e.failed_link : "", "light_escape", null, !0)),
                        t.append('" class="js-navigate-link">')),
                        t.append(twig.filter.escape(this.env_, this.env_.filter("count", "failed_count"in e ? e.failed_count : ""), "light_escape", null, !0)),
                        t.append(" "),
                        t.append(twig.filter.escape(this.env_, this.env_.filter("numeral", twig.attr("lang"in e ? e.lang : "", "dashboard_leads_numeral"), "failed_count"in e ? e.failed_count : ""), "light_escape", null, !0)),
                        t.append(", "),
                        t.append(twig.filter.escape(this.env_, this.env_.filter("price", "failed_price"in e ? e.failed_price : ""), "light_escape", null, !0)),
                        "failed_link"in e && e.failed_link && t.append("</a>"),
                        t.append("</div>"),
                        twig.attr(s, "last") && t.append('<div class="status-lost-leads__triangle"></div>'),
                        t.append("</div></div>"),
                        ++s.index0,
                        ++s.index,
                        s.first = !1,
                        s.length && (--s.revindex0,
                        --s.revindex,
                        s.last = 0 === s.revindex0)
                    }
                    ), this),
                    e.win = twig.attr(twig.attr(twig.attr("params"in e ? e.params : "", "statuses"), "system"), "win"),
                    e.lost = twig.attr(twig.attr(twig.attr("params"in e ? e.params : "", "statuses"), "system"), "lost"),
                    t.append('<div class="conversion-chart__status-wrapper conversion-chart__status-wrapper_last"><div class="conversion-chart__custom-status conversion-chart__status conversion-chart__status_last"><div class="conversion-chart__status-color" style=\'background-color: '),
                    t.append(twig.filter.escape(this.env_, twig.attr("win"in e ? e.win : "", "color"), "light_escape", null, !0)),
                    t.append(';\'></div><div class="conversion-chart__status-inner"><div class="conversion-chart__status-title">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("win"in e ? e.win : "", "title"), "light_escape", null, !0)),
                    t.append('</div></div></div><div class="conversion-chart__system-status conversion-chart__status"><div class="conversion-chart__status-inner"><div class="conversion-chart__status-title">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lost"in e ? e.lost : "", "title"), "light_escape", null, !0)),
                    t.append('</div><div class="conversion-chart__stats-summary"><a href="'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lost"in e ? e.lost : "", "leads_link"), "light_escape", null, !0)),
                    t.append('" class="js-navigate-link">'),
                    t.append('</a></div></div></div></div><div id="conversion-chart-transfers" class="conversion-chart__transfers">'),
                    e._parent = e,
                    a = twig.attr(twig.attr("params"in e ? e.params : "", "statuses"), "custom"),
                    s = {
                        index0: 0,
                        index: 1,
                        first: !0
                    },
                    twig.countable(a) && (n = twig.count(a),
                    s.revindex0 = n - 1,
                    s.revindex = n,
                    s.length = n,
                    s.last = 1 === n),
                    twig.forEach(a, (function(i, a) {
                        e._key = a,
                        e.status = i,
                        t.append('<div class="conversion-chart__transfer-wrapper"><div class="conversion-chart__leads-transfer leads-transfer leads-transfer_hidden'),
                        twig.attr(s, "first") && t.append(" leads-transfer_first"),
                        twig.attr(s, "first") && "show_unsorted"in e && e.show_unsorted && !twig.attr("params"in e ? e.params : "", "plug") && t.append(" leads-transfer_preload"),
                        t.append('"><div class="leads-transfer__body"><div class="leads-transfer__tail"></div><div class="leads-transfer__inner'),
                        "show_unsorted"in e && e.show_unsorted && twig.attr(s, "first") && t.append(" leads-transfer__inner_hidden"),
                        t.append('"><div class="leads-transfer__count"><a href="'),
                        t.append(twig.filter.escape(this.env_, twig.attr("status"in e ? e.status : "", "transfer_link"), "light_escape", null, !0)),
                        t.append('" class="js-navigate-link"><span class="leads-transfer__count-value">'),
                        t.append(twig.filter.escape(this.env_, this.env_.filter("count", twig.attr("status"in e ? e.status : "", "transfer_count")), "light_escape", null, !0)),
                        t.append("</span> "),
                        t.append(twig.filter.escape(this.env_, this.env_.filter("numeral", twig.attr("lang"in e ? e.lang : "", "dashboard_leads_numeral"), twig.attr("status"in e ? e.status : "", "transfer_count")), "light_escape", null, !0)),
                        t.append('</a></div><div class="leads-transfer__percentage"><a href="'),
                        t.append(twig.filter.escape(this.env_, twig.attr("status"in e ? e.status : "", "transfer_link"), "light_escape", null, !0)),
                        t.append('" class="js-navigate-link"><span class="leads-transfer__percentage-value">'),
                        t.append(twig.filter.escape(this.env_, this.env_.filter("price", twig.attr("status"in e ? e.status : "", "transfer_price")), "light_escape", null, !0)),
                        t.append('</span></a></div></div><div class="leads-transfer__nose"></div></div></div></div>'),
                        ++s.index0,
                        ++s.index,
                        s.first = !1,
                        s.length && (--s.revindex0,
                        --s.revindex,
                        s.last = 0 === s.revindex0)
                    }
                    ), this),
                    t.append('<div class="conversion-chart__transfer-wrapper conversion-chart__transfer-wrapper_last"><div class="conversion-chart__leads-transfer leads-transfer leads-transfer_hidden"><div class="leads-transfer__body"><div class="leads-transfer__tail"></div><div class="leads-transfer__inner"><div class="leads-transfer__count"><a href="'),
                    t.append(twig.filter.escape(this.env_, twig.attr(twig.attr("params"in e ? e.params : "", "last"), "transfer_link"), "light_escape", null, !0)),
                    t.append('" class="js-navigate-link"><span class="leads-transfer__count-value">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("count", twig.attr(twig.attr("params"in e ? e.params : "", "last"), "transfer_count")), "light_escape", null, !0)),
                    t.append("</span> "),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("numeral", twig.attr("lang"in e ? e.lang : "", "dashboard_leads_numeral"), twig.attr(twig.attr("params"in e ? e.params : "", "last"), "transfer_count")), "light_escape", null, !0)),
                    t.append('</a></div><div class="leads-transfer__percentage"><a href="'),
                    t.append(twig.filter.escape(this.env_, twig.attr(twig.attr("params"in e ? e.params : "", "last"), "transfer_link"), "light_escape", null, !0)),
                    t.append('" class="js-navigate-link"><span class="leads-transfer__percentage-value">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("price", twig.attr(twig.attr("params"in e ? e.params : "", "last"), "transfer_price")), "light_escape", null, !0)),
                    t.append('</span></a></div></div><div class="leads-transfer__nose"></div></div></div></div></div></div></div></div></div></div></div>')
                }
                ,
                e.prototype.getTemplateName = function() {
                    return "interface_reports_pipeline_conversion"
                }
                ,
                e.prototype.isTraitable = function() {
                    return !1
                }
                ,
                t._add("interface/reports/pipeline/conversion", e)
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
                e.prototype.render_ = function(e, i, a) {
                    if (a = void 0 === a ? {} : a,
                    e.append('<div class="l-analytics l-duration row">'),
                    i.is_plug_show = ("access_denied_top"in i ? i.access_denied_top : "") || ("access_denied"in i ? i.access_denied : "") && !("access_denied_paid"in i && i.access_denied_paid),
                    "is_plug_show"in i && i.is_plug_show && new (t._get("interface/reports/plug.twig"))(this.env_).render_(e, i),
                    e.append('<div class="pipeline__first clearfix'),
                    "access_denied"in i && i.access_denied && "access_denied_paid"in i && i.access_denied_paid && e.append(" analytics-pipeline__plug "),
                    e.append('" '),
                    "is_plug_show"in i && i.is_plug_show && e.append('style="opacity: 0.2"'),
                    e.append('><div class="settings-analytics__title_stattistics-lead-complete">'),
                    new (t._get("interface/controls/line_toggler.twig"))(this.env_).render_(e, twig.extend({}, i, "leads_type_switcher"in i ? i.leads_type_switcher : "")),
                    e.append("</div>"),
                    new (t._get("interface/controls/line_toggler.twig"))(this.env_).render_(e, twig.extend({}, i, "sorting_funnel_all"in i ? i.sorting_funnel_all : "")),
                    e.append('<div class="l-left column">'),
                    "access_denied_top_left"in i && i.access_denied_top_left && (e.append("<div class='plug-analysis' id='plug-analysis'><div class='plug-analysis-body'><div class='icon plug-analysis-body-icon'></div><div class='plug-analysis-body-text'>"),
                    e.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "access_denied_message"), "light_escape", null, !0)),
                    e.append("</div></div></div>")),
                    e.append('<div class="l-content pipeline__rows '),
                    "access_denied_top_left"in i && i.access_denied_top_left && e.append("pipeline__rows-has-plug"),
                    e.append('"><ul class="list__row">'),
                    i.local_access_denied = !!("access_denied_top_left"in i && i.access_denied_top_left || "access_denied_top"in i && i.access_denied_top || "access_denied"in i && i.access_denied || "access_denied_all"in i && i.access_denied_all),
                    "access_denied"in i && i.access_denied && "access_denied_paid"in i && i.access_denied_paid)
                        e.append('<li class="item__row"><div class="item" style="border-top: 5px solid rgb(153, 204, 255);"><div class="title">0'),
                        e.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "avg_days"), "light_escape", null, !0)),
                        e.append('</div></div></li><li class="item__row"><div class="item" style="border-top: 5px solid rgb(255, 255, 153);"><div class="title">0'),
                        e.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "avg_days"), "light_escape", null, !0)),
                        e.append('</div></div></li><li class="item__row"><div class="item" style="border-top: 5px solid rgb(255, 204, 102);"><div class="title">00'),
                        e.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "avg_days"), "light_escape", null, !0)),
                        e.append('</div></div></li><li class="item__row"><div class="item" style="border-top: 5px solid rgb(255, 204, 204);"><div class="title">00'),
                        e.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "avg_days"), "light_escape", null, !0)),
                        e.append('</div></div></li><li class="item__row"><div class="item" style="border-top: 5px solid rgb(152, 203, 255);"><div class="title" style="left:5px">0'),
                        e.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "avg_days"), "light_escape", null, !0)),
                        e.append("</div></div></li>");
                    else {
                        i._parent = i;
                        var s = "status_duration"in i ? i.status_duration : ""
                          , n = {
                            index0: 0,
                            index: 1,
                            first: !0
                        };
                        if (twig.countable(s)) {
                            var l = twig.count(s);
                            n.revindex0 = l - 1,
                            n.revindex = l,
                            n.length = l,
                            n.last = 1 === l
                        }
                        twig.forEach(s, (function(t, a) {
                            i._key = a,
                            i.duration = t,
                            twig.attr("duration"in i ? i.duration : "", "string_value") ? (e.append('<li class="item__row '),
                            0 != twig.attr(n, "revindex") && 1 != twig.attr(n, "revindex") || e.append("item__row__last"),
                            e.append('"><div class="item" style="border-top: 5px solid '),
                            e.append(twig.filter.escape(this.env_, twig.attr("duration"in i ? i.duration : "", "color"), "light_escape", null, !0)),
                            e.append(';"><div class="title" '),
                            0 == twig.attr("duration"in i ? i.duration : "", "value") && e.append(' style="left:5px" '),
                            e.append(">"),
                            e.append(twig.filter.escape(this.env_, twig.attr("duration"in i ? i.duration : "", "string_value"), "light_escape", null, !0)),
                            e.append("</div></div></li>")) : "local_access_denied"in i && i.local_access_denied && !twig.attr(n, "last") && (e.append('<li class="item__row"><div class="item" style="border-top: 5px solid transparent;"><div class="title">'),
                            e.append(1),
                            e.append("</div></div></li>")),
                            ++n.index0,
                            ++n.index,
                            n.first = !1,
                            n.length && (--n.revindex0,
                            --n.revindex,
                            n.last = 0 === n.revindex0)
                        }
                        ), this)
                    }
                    "local_access_denied"in i && i.local_access_denied || e.append('<li class="item__row item__row__last"><div class="item" style="border-top: 5px solid transparent;"></div></li>'),
                    e.append('</ul></div><div class="item__total" '),
                    "access_denied"in i && i.access_denied && e.append(' style="bottom: -61px;" '),
                    e.append(">"),
                    "access_denied"in i && i.access_denied ? (e.append('<span class="title"><span class="total__days" id="avg_days_total" data-num="100">00'),
                    e.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "avg_days"), "light_escape", null, !0)),
                    e.append("</span></span>")) : (e.append('<span class="title"><span class="total__days" id="avg_days_total" data-num="'),
                    e.append(twig.filter.escape(this.env_, "status_duration_sum"in i ? i.status_duration_sum : "", "light_escape", null, !0)),
                    e.append('">'),
                    e.append(twig.filter.escape(this.env_, "status_duration_sum"in i ? i.status_duration_sum : "", "light_escape", null, !0)),
                    e.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "avg_days"), "light_escape", null, !0)),
                    e.append("</span></span>")),
                    e.append('<span class="subtitle">'),
                    e.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "avg_title"), "light_escape", null, !0)),
                    e.append('</span></div></div><div class="l-right column '),
                    "access_denied_top_left"in i && i.access_denied_top_left && e.append(" on_top "),
                    e.append('">'),
                    "access_denied_top_right"in i && i.access_denied_top_right && (e.append("<div class='plug-analysis' id='plug-analysis'><div class='plug-analysis-body'><div class='icon plug-analysis-body-icon'></div><div class='plug-analysis-body-text'>"),
                    e.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "access_denied_message"), "light_escape", null, !0)),
                    e.append("</div></div></div>")),
                    e.append('<div class="l-content calculation__rows"><ul class="list__row">'),
                    "access_denied"in i && i.access_denied && "access_denied_paid"in i && i.access_denied_paid ? (e.append('<li class="item__row"><div class="item row"><div class="l-half column graph"><span class="percent__graph" style="background-color: rgb(153, 204, 255); color:rgb(153, 204, 255); width:80%;"><span class="percent">000</span><span class="decoration" style="border-color: transparent rgb(153, 204, 255) transparent transparent;"></span></span></div><div class="l-half column"><div class="l-inner"><span class="subtitle"><div class="funnel-plug-line" style="width: 53px;">&nbsp;</div></span><span class="subvalue"><a href="#" class="js-navigate-link">00</a>&nbsp;'),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("numeral", twig.attr("lang"in i ? i.lang : "", "entity"), 5), "light_escape", null, !0)),
                    e.append("&nbsp;"),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("plug_price", 8), "light_escape", null, !0)),
                    e.append('</span></div></div></div></li><li class="item__row"><div class="item row"><div class="l-half column graph"><span class="percent__graph" style="background-color: rgb(255, 255, 153);color:rgb(255, 255, 153);width:78%;"><span class="percent">00</span><span class="decoration" style="border-color: transparent rgb(255, 255, 153) transparent transparent;"></span></span></div><div class="l-half column"><div class="l-inner"><span class="subtitle"><div class="funnel-plug-line" style="width: 114px;">&nbsp;</div></span><span class="subvalue"><a href="#" class="js-navigate-link">00</a>&nbsp;'),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("numeral", twig.attr("lang"in i ? i.lang : "", "entity"), 5), "light_escape", null, !0)),
                    e.append("&nbsp;"),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("plug_price", 8), "light_escape", null, !0)),
                    e.append('</span></div></div></div></li><li class="item__row"><div class="item row"><div class="l-half column graph"><span class="percent__graph" style="background-color: rgb(255, 204, 102);color:rgb(255, 204, 102);width:60.8%;"><span class="percent">00</span><span class="decoration" style="border-color: transparent rgb(255, 204, 102) transparent transparent;"></span></span></div><div class="l-half column"><div class="l-inner"><span class="subtitle"><div class="funnel-plug-line" style="width: 169px;">&nbsp;</div></span><span class="subvalue"><a href="#" class="js-navigate-link">00</a>&nbsp;'),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("numeral", twig.attr("lang"in i ? i.lang : "", "entity"), 2), "light_escape", null, !0)),
                    e.append("&nbsp;"),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("plug_price", 7), "light_escape", null, !0)),
                    e.append('</span></div></div></div></li><li class="item__row"><div class="item row"><div class="l-half column graph"><span class="percent__graph" style="background-color: rgb(255, 204, 204);color:rgb(255, 204, 204);width:53%;"><span class="percent">00</span><span class="decoration" style="border-color: transparent rgb(255, 204, 204) transparent transparent;"></span></span></div><div class="l-half column"><div class="l-inner"><span class="subtitle"><div class="funnel-plug-line" style="width: 153px;">&nbsp;</div></span><span class="subvalue"><a href="#" class="js-navigate-link">00</a>&nbsp;'),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("numeral", twig.attr("lang"in i ? i.lang : "", "entity"), 5), "light_escape", null, !0)),
                    e.append("&nbsp;"),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("plug_price", 7), "light_escape", null, !0)),
                    e.append('</span></div></div></div></li><li class="item__row"><div class="item row"><div class="l-half column graph"><span class="percent__graph" style="background-color: #97caff;color:#97caff;width:42%;"><span class="percent">00</span><span class="decoration" style="border-color: transparent #97caff transparent transparent;"></span></span></div><div class="l-half column"><div class="l-inner"><span class="subtitle"><div class="funnel-plug-line" style="width: 29px;">&nbsp;</div></span><span class="subvalue"><a href="#" class="js-navigate-link">00</a>&nbsp;'),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("numeral", twig.attr("lang"in i ? i.lang : "", "entity"), 5), "light_escape", null, !0)),
                    e.append("&nbsp;"),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("plug_price", 7), "light_escape", null, !0)),
                    e.append('</span></div></div></div></li><li class="item__row"><div class="item row"><div class="l-half column graph"><span class="percent__graph" style="background-color: rgb(204, 255, 102);color:rgb(204, 255, 102);width:42%;"><span class="percent">00</span><span class="decoration" style="border-color: transparent rgb(204, 255, 102) transparent transparent;"></span></span></div><div class="l-half column"><div class="l-inner"><span class="subtitle"><div class="funnel-plug-line" style="width: 145px;">&nbsp;</div></span><span class="subvalue"><a href="#" class="js-navigate-link">00</a>&nbsp;'),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("numeral", twig.attr("lang"in i ? i.lang : "", "entity"), 5), "light_escape", null, !0)),
                    e.append("&nbsp;"),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("plug_price", 7), "light_escape", null, !0)),
                    e.append('</span></div></div></div></li><li class="item__row item__row__last"><div class="item row"><div class="l-half column graph"><span class="percent__graph" style="background-color: rgb(213, 216, 219);color:rgb(213, 216, 219);width:38.5%;"><span class="percent">00</span><span class="decoration" style="border-color: transparent rgb(213, 216, 219) transparent transparent;"></span></span></div><div class="l-half column"><div class="l-inner"><span class="subvalue"><a href="#" class="js-navigate-link">00</a>&nbsp;'),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("numeral", twig.attr("lang"in i ? i.lang : "", "entity"), 5), "light_escape", null, !0)),
                    e.append("&nbsp;"),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("plug_price", 7), "light_escape", null, !0)),
                    e.append("</span></div></div></div></li>")) : (i._parent = i,
                    s = "closed_leads"in i ? i.closed_leads : "",
                    twig.forEach(s, (function(t, a) {
                        i.lead_id = a,
                        i.lead = t,
                        i.percent = "leads_count" == ("report_type"in i ? i.report_type : "") ? twig.attr(twig.attr("lead"in i ? i.lead : "", "count"), "percent") : twig.attr(twig.attr("lead"in i ? i.lead : "", "price"), "percent"),
                        e.append('<li class="item__row '),
                        "id_143" == ("lead_id"in i ? i.lead_id : "") && e.append(" item__row__last "),
                        e.append('"><div class="item row"><div class="l-half column graph"><span class="percent__graph" style="background-color: '),
                        e.append(twig.filter.escape(this.env_, twig.attr("lead"in i ? i.lead : "", "color"), "light_escape", null, !0)),
                        e.append(";color:"),
                        e.append(twig.filter.escape(this.env_, twig.attr("lead"in i ? i.lead : "", "color"), "light_escape", null, !0)),
                        e.append(';width:0;"><span class="percent">'),
                        0 != ("percent"in i ? i.percent : "") ? e.append(twig.filter.escape(this.env_, "percent"in i ? i.percent : "", "light_escape", null, !0)) : e.append(0),
                        e.append('%</span><span class="decoration" style="border-color: transparent '),
                        e.append(twig.filter.escape(this.env_, twig.attr("lead"in i ? i.lead : "", "color"), "light_escape", null, !0)),
                        e.append(' transparent transparent;"></span></span></div><div class="l-half column"><div class="l-inner"><span class="subtitle">'),
                        e.append(twig.filter.escape(this.env_, twig.attr("lead"in i ? i.lead : "", "name"), "light_escape", null, !0)),
                        e.append('</span><span class="subvalue"><a href="'),
                        e.append(twig.filter.escape(this.env_, twig.attr(twig.attr("lead"in i ? i.lead : "", "count"), "link"), "light_escape", null, !0)),
                        e.append('" class="js-navigate-link">'),
                        twig.attr(twig.attr("lead"in i ? i.lead : "", "count"), "count") ? e.append(twig.filter.escape(this.env_, twig.attr(twig.attr("lead"in i ? i.lead : "", "count"), "count"), "light_escape", null, !0)) : e.append(0),
                        e.append("</a>"),
                        e.append(twig.filter.escape(this.env_, this.env_.filter("numeral", twig.attr("lang"in i ? i.lang : "", "entity"), twig.attr(twig.attr("lead"in i ? i.lead : "", "count"), "count")), "light_escape", null, !0)),
                        e.append(" "),
                        e.append(twig.filter.escape(this.env_, twig.attr(twig.attr("lead"in i ? i.lead : "", "price"), "value_format"), "light_escape", null, !0)),
                        e.append("</span></div></div></div></li>")
                    }
                    ), this)),
                    "active" != ("deals_type"in i ? i.deals_type : "") || "access_denied_top_right"in i && i.access_denied_top_right || "access_denied_top"in i && i.access_denied_top || "access_denied"in i && i.access_denied || "access_denied_all"in i && i.access_denied_all || e.append('<li class="item__row item__row__last"><div class="item row"></div></li><li class="item__row item__row__last"><div class="item row"></div></li>'),
                    e.append("</ul></div></div></div></div>")
                }
                ,
                e.prototype.getTemplateName = function() {
                    return "interface_reports_pipeline_duration"
                }
                ,
                e.prototype.isTraitable = function() {
                    return !1
                }
                ,
                t._add("interface/reports/pipeline/duration", e)
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
                e.prototype.render_ = function(e, i, a) {
                    a = void 0 === a ? {} : a,
                    e.append('<div class="l-analytics l-duration row"><div class="pipeline__first clearfix" style="min-height: 300px;"><div class="settings-analytics__title_stattistics-lead-complete">'),
                    new (t._get("interface/controls/line_toggler.twig"))(this.env_).render_(e, twig.extend({}, i, "leads_type_switcher"in i ? i.leads_type_switcher : "")),
                    e.append("</div>"),
                    new (t._get("interface/controls/line_toggler.twig"))(this.env_).render_(e, twig.extend({}, i, "sorting_funnel_all"in i ? i.sorting_funnel_all : "")),
                    e.append('<span class="spinner-icon spinner-icon-abs-center" style="z-index: 99999"></span></div></div>')
                }
                ,
                e.prototype.getTemplateName = function() {
                    return "interface_reports_pipeline_duration_loader"
                }
                ,
                e.prototype.isTraitable = function() {
                    return !1
                }
                ,
                t._add("interface/reports/pipeline/duration_loader", e)
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
                e.prototype.render_ = function(e, i, a) {
                    a = void 0 === a ? {} : a,
                    i.is_plug_show = ("access_denied"in i ? i.access_denied : "") || ("access_denied_bottom"in i ? i.access_denied_bottom : ""),
                    "is_plug_show"in i && i.is_plug_show && new (t._get("interface/reports/plug.twig"))(this.env_).render_(e, i),
                    e.append('<div class="l-analytics row analytics__pipeline__circle" '),
                    "is_plug_show"in i && i.is_plug_show && e.append('style="opacity: 0.2"'),
                    e.append('><div class="l-left column"><ul class="analytics__pipeline__circle__data hidden">'),
                    i.circle_color = "#CCFF66",
                    e.append('<li class="value" data-bgcolor="'),
                    e.append(twig.filter.escape(this.env_, "circle_color"in i ? i.circle_color : "", "light_escape", null, !0)),
                    e.append('">100</li></ul><div class="l-content"><div class="l-inner"><div class="l-analytics__pipeline__pie" id="l-analytics__pipeline__pie"><canvas id="pie_chart" width="240" height="240"></canvas><span class="big__circle"><span class="text"><span class="string_text">'),
                    e.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "total_sales"), "light_escape", null, !0)),
                    e.append('</span><span class="string_text">'),
                    e.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "sales_period_in"), "light_escape", null, !0)),
                    e.append(" "),
                    e.append(twig.filter.escape(this.env_, "status_duration_sum"in i ? i.status_duration_sum : "", "light_escape", null, !0)),
                    e.append(" "),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("numeral", twig.attr("lang"in i ? i.lang : "", "sales_period_days"), "status_duration_sum"in i ? i.status_duration_sum : ""), "light_escape", null, !0)),
                    e.append('</span></span><span class="total">'),
                    e.append(twig.filter.escape(this.env_, "prospective_all"in i ? i.prospective_all : "", "light_escape", null, !0)),
                    e.append('</span><span class="summ">'),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("price", "prospective_all_sum"in i ? i.prospective_all_sum : ""), "light_escape", null, !0)),
                    e.append('</span></span></div></div></div></div><div class="l-right column"><div class="l-content"><div class="l-inner"><h2 class="subcaption">'),
                    e.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "prospective"), "light_escape", null, !0)),
                    e.append('</h2></div></div></div><div class="b-table__4"><ul class="row"><li class="column active_now"><span class="l-header"><span class="title"><span class="title_part">'),
                    e.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "now"), "light_escape", null, !0)),
                    e.append('&nbsp;</span><span class="title_part">'),
                    e.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "active_deals"), "light_escape", null, !0)),
                    e.append(':&nbsp;</span><span class="title_part">'),
                    e.append(twig.filter.escape(this.env_, "all_open_leads"in i ? i.all_open_leads : "", "light_escape", null, !0)),
                    e.append(" "),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("numeral", twig.attr("lang"in i ? i.lang : "", "entity"), "all_open_leads"in i ? i.all_open_leads : ""), "light_escape", null, !0)),
                    e.append('</span><br><span class="title_part">'),
                    e.append(twig.filter.escape(this.env_, "all_open_leads_sum"in i ? i.all_open_leads_sum : "", "light_escape", null, !0)),
                    e.append('</span></span></span><div class="l-content"><span class="l-lift static-lift x-border__"></span></div></li>'),
                    i._parent = i;
                    var s = "prospective"in i ? i.prospective : ""
                      , n = {
                        index0: 0,
                        index: 1,
                        first: !0
                    };
                    if (twig.countable(s)) {
                        var l = twig.count(s);
                        n.revindex0 = l - 1,
                        n.revindex = l,
                        n.length = l,
                        n.last = 1 === l
                    }
                    twig.forEach(s, (function(t, a) {
                        i._key = a,
                        i.block = t,
                        e.append('<li class="column"><span class="l-header"><span class="title">'),
                        1 == twig.attr(n, "index") ? e.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "prospective_in"), "light_escape", null, !0)) : e.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "prospective_in_short"), "light_escape", null, !0)),
                        e.append(" "),
                        e.append(twig.filter.escape(this.env_, twig.attr("block"in i ? i.block : "", "period"), "light_escape", null, !0)),
                        e.append(" "),
                        e.append(twig.filter.escape(this.env_, this.env_.filter("numeral", twig.attr("lang"in i ? i.lang : "", "prospective_period"), twig.attr("block"in i ? i.block : "", "period")), "light_escape", null, !0)),
                        e.append('</span></span><div class="l-content"><span class="l-lift x-border__'),
                        e.append(twig.filter.escape(this.env_, twig.attr(n, "index"), "light_escape", null, !0)),
                        e.append('"><span class="l-items_counter"><span class="title big">'),
                        e.append(twig.filter.escape(this.env_, twig.attr("block"in i ? i.block : "", "leads"), "light_escape", null, !0)),
                        e.append(" "),
                        e.append(twig.filter.escape(this.env_, this.env_.filter("numeral", twig.attr("lang"in i ? i.lang : "", "entity"), twig.attr("block"in i ? i.block : "", "leads")), "light_escape", null, !0)),
                        e.append('</span></span><span class="l-items_price"><span class="title" title="'),
                        e.append(twig.filter.escape(this.env_, this.env_.filter("price", twig.attr("block"in i ? i.block : "", "price")), "light_escape", null, !0)),
                        e.append('">'),
                        e.append(twig.filter.escape(this.env_, this.env_.filter("price", twig.attr("block"in i ? i.block : "", "price")), "light_escape", null, !0)),
                        e.append("</span></span></span></div></li>"),
                        ++n.index0,
                        ++n.index,
                        n.first = !1,
                        n.length && (--n.revindex0,
                        --n.revindex,
                        n.last = 0 === n.revindex0)
                    }
                    ), this),
                    e.append("</ul></div></div>")
                }
                ,
                e.prototype.getTemplateName = function() {
                    return "interface_reports_pipeline_forecast"
                }
                ,
                e.prototype.isTraitable = function() {
                    return !1
                }
                ,
                t._add("interface/reports/pipeline/forecast", e)
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
                e.prototype.render_ = function(e, i, a) {
                    a = void 0 === a ? {} : a,
                    e.append('<div class="l-analytics row analytics__pipeline__circle">'),
                    new (t._get("interface/reports/plug.twig"))(this.env_).render_(e, twig.extend({}, i, {
                        is_load: !0
                    })),
                    e.append('<div class="l-analytics__forecast-wrapper" style="opacity: 0.2"><div class="l-left column"><ul class="analytics__pipeline__circle__data hidden">'),
                    i.circle_color = "#CCFF66",
                    e.append(" "),
                    e.append('<li class="value" data-bgcolor="'),
                    e.append(twig.filter.escape(this.env_, "circle_color"in i ? i.circle_color : "", "light_escape", null, !0)),
                    e.append('">100</li></ul><div class="l-content funnel-title__plug"><div class="l-inner"><div class="l-analytics__pipeline__pie" id="l-analytics__pipeline__pie"><canvas id="pie_chart" width="240" height="240"></canvas><span class="big__circle plug__circle"><span class="text"><span class="string_text">'),
                    e.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "total_sales"), "light_escape", null, !0)),
                    e.append('</span></span><span class="total">0</span><span class="summ">'),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("plug_price", 1), "light_escape", null, !0)),
                    e.append('</span></span></div></div></div></div><div class="l-right column funnel__plug" style="position: static;"><div class="l-content"><div class="l-inner"><h2 class="subcaption">'),
                    e.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "prospective"), "light_escape", null, !0)),
                    e.append('</h2></div></div></div><div class="b-table__4"><ul class="row"><li class="column active_now"><span class="l-header"><span class="title">'),
                    e.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "active_now"), "light_escape", null, !0)),
                    e.append('</span></span><div class="l-content"><span class="l-lift static-lift x-border__"><span class="l-items_price"><span class="title">'),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("plug_price", 1), "light_escape", null, !0)),
                    e.append('</span></span><span class="l-items_counter"><span class="title big">0 '),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("numeral", twig.attr("lang"in i ? i.lang : "", "entity"), 0), "light_escape", null, !0)),
                    e.append('</span></span></span></div></li><li class="column"><span class="l-header"><span class="title">5 '),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("numeral", twig.attr("lang"in i ? i.lang : "", "prospective_period"), 5), "light_escape", null, !0)),
                    e.append('</span></span><div class="l-content"><span class="l-lift x-border__1"><span class="l-items_price"><span class="title">'),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("plug_price", 1), "light_escape", null, !0)),
                    e.append('</span></span><span class="l-items_counter"><span class="title big">0 '),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("numeral", twig.attr("lang"in i ? i.lang : "", "entity"), 0), "light_escape", null, !0)),
                    e.append('</span></span></span></div></li><li class="column"><span class="l-header"><span class="title">10 '),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("numeral", twig.attr("lang"in i ? i.lang : "", "prospective_period"), 10), "light_escape", null, !0)),
                    e.append('</span></span><div class="l-content"><span class="l-lift x-border__2"><span class="l-items_price"><span class="title">'),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("plug_price", 1), "light_escape", null, !0)),
                    e.append('</span></span><span class="l-items_counter"><span class="title big">0 '),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("numeral", twig.attr("lang"in i ? i.lang : "", "entity"), 0), "light_escape", null, !0)),
                    e.append('</span></span></span></div></li><li class="column"><span class="l-header"><span class="title">15 '),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("numeral", twig.attr("lang"in i ? i.lang : "", "prospective_period"), 15), "light_escape", null, !0)),
                    e.append('</span></span><div class="l-content"><span class="l-lift x-border__"><span class="l-items_price"><span class="title">'),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("plug_price", 1), "light_escape", null, !0)),
                    e.append('</span></span><span class="l-items_counter"><span class="title big">0 '),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("numeral", twig.attr("lang"in i ? i.lang : "", "entity"), 0), "light_escape", null, !0)),
                    e.append("</span></span></span></div></li></ul></div></div></div>")
                }
                ,
                e.prototype.getTemplateName = function() {
                    return "interface_reports_pipeline_forecast_loader"
                }
                ,
                e.prototype.isTraitable = function() {
                    return !1
                }
                ,
                t._add("interface/reports/pipeline/forecast_loader", e)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var e = function(t) {
                    twig.Template.call(this, t),
                    this.setBlocks({
                        aside: twig.bind(this.block_aside, this),
                        head: twig.bind(this.block_head, this),
                        static: twig.bind(this.block_static, this),
                        content: twig.bind(this.block_content, this)
                    })
                };
                twig.inherits(e, twig.Template),
                e.prototype.getParent_ = function(e) {
                    return t._get("interface/page/base.twig")
                }
                ,
                e.prototype.render_ = function(t, e, i) {
                    i = void 0 === i ? {} : i,
                    e.section = "pipeline analytics__pipeline",
                    this.getParent(e).render_(t, e, twig.extend({}, this.getBlocks(), i))
                }
                ,
                e.prototype.block_aside = function(e, i, a) {
                    a = void 0 === a ? {} : a,
                    new (t._get("interface/reports/aside.twig"))(this.env_).render_(e, i)
                }
                ,
                e.prototype.block_head = function(e, i, a) {
                    a = void 0 === a ? {} : a,
                    new (t._get("interface/reports/top.twig"))(this.env_).render_(e, twig.extend({}, i, {
                        title: twig.attr("lang"in i ? i.lang : "", "common_list")
                    }))
                }
                ,
                e.prototype.block_static = function(t, e, i) {
                    i = void 0 === i ? {} : i,
                    t.append(twig.filter.escape(this.env_, this.env_.invoke("inject_static", ["analytics.css", "dashboard.css", "reports_winlost.php"], this), "light_escape", null, !0))
                }
                ,
                e.prototype.block_content = function(e, i, a) {
                    a = void 0 === a ? {} : a,
                    "access_denied"in i && i.access_denied && "access_denied_paid"in i && i.access_denied_paid && (e.append('<input type="hidden" id="plug-detector">'),
                    new (t._get("interface/common/tooltip.twig"))(this.env_).render_(e, twig.extend({}, i, {
                        class_name: "analytics-funnel__plug-tooltip",
                        text: twig.attr("lang"in i ? i.lang : "", "full_plug_text"),
                        button: twig.attr("lang"in i ? i.lang : "", "full_plug_button"),
                        ribbon: twig.attr("lang"in i ? i.lang : "", "full_plug_ribbon"),
                        direction: "top",
                        width: 630
                    }))),
                    e.append('<div class="js-conversion-chart-wrapper analytics-conversion dashboard-theme__amo_analytics"><div class="dashboard-analytics-title">'),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("numeral", this.env_.filter("i18n", "leads"), 2), "light_escape", null, !0)),
                    e.append("</div>"),
                    e.append('<div id="top-chart" class="top-chart block-selection-prepended">'),
                    new (t._get("interface/reports/pipeline/sausage_chart.twig"))(this.env_).render_(e, twig.extend({}, i, {
                        params: "dashboard_widgets"in i ? i.dashboard_widgets : "",
                        filter: []
                    })),
                    e.append("</div></div>"),
                    new (t._get("interface/reports/pipeline/duration_loader.twig"))(this.env_).render_(e, i),
                    "unsorted_show"in i && i.unsorted_show && (e.append('<div class="unsorted_analytics_block">'),
                    new (t._get("interface/reports/unsorted_statistics.twig"))(this.env_).render_(e, i),
                    e.append("</div>")),
                    "access_denied"in i && i.access_denied && "access_denied_paid"in i && i.access_denied_paid ? new (t._get("interface/reports/pipeline/plugs/pay.twig"))(this.env_).render_(e, twig.extend({}, i, {
                        hide_billing: !0
                    })) : "access_denied_forecast"in i && i.access_denied_forecast ? new (t._get("interface/reports/pipeline/plugs/pay.twig"))(this.env_).render_(e, i) : new (t._get("interface/reports/pipeline/forecast_loader.twig"))(this.env_).render_(e, i)
                }
                ,
                e.prototype.getTemplateName = function() {
                    return "interface_reports_pipeline_page"
                }
                ,
                e.prototype.isTraitable = function() {
                    return !1
                }
                ,
                t._add("interface/reports/pipeline/page", e)
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
                e.prototype.render_ = function(e, i, a) {
                    a = void 0 === a ? {} : a,
                    i.type = "conversion",
                    e.append('<div class="top-chart__wrapper top-chart__conversion-wrapper" style="position: relative;">'),
                    new (t._get("interface/reports/pipeline/conversion.twig"))(this.env_).render_(e, twig.extend({}, i, {
                        params: twig.attr("params"in i ? i.params : "", "top_chart"),
                        filter: "filter"in i ? i.filter : ""
                    })),
                    e.append('<div class="default-overlay" id="chart-loader"><span class="spinner-icon spinner-icon-abs-center"></span></div></div>')
                }
                ,
                e.prototype.getTemplateName = function() {
                    return "interface_reports_pipeline_sausage_chart"
                }
                ,
                e.prototype.isTraitable = function() {
                    return !1
                }
                ,
                t._add("interface/reports/pipeline/sausage_chart", e)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var e = function(t) {
                    twig.Template.call(this, t),
                    this.setBlocks({
                        head: twig.bind(this.block_head, this),
                        content: twig.bind(this.block_content, this)
                    })
                };
                twig.inherits(e, twig.Template),
                e.prototype.getParent_ = function(e) {
                    return t._get("interface/page/base.twig")
                }
                ,
                e.prototype.render_ = function(t, e, i) {
                    i = void 0 === i ? {} : i,
                    this.getParent(e).render_(t, e, twig.extend({}, this.getBlocks(), i))
                }
                ,
                e.prototype.block_head = function(e, i, a) {
                    a = void 0 === a ? {} : a,
                    e.append('<div class="content__top filter-button__by-activities-plug"><div class="content__top__sidebar__toggler"><span id="sidebar_toggler" class="content__top__preset__filter_icon"><span class="icon icon-list filter-toggle-icon"></span></span></div><div class="content__top__actions by-activities__plug">'),
                    new (t._get("interface/controls/button.twig"))(this.env_).render_(e, twig.extend({}, i, {
                        text: twig.attr(twig.attr("lang"in i ? i.lang : "", "page"), "filter"),
                        id: "button-filter-toggle",
                        inner_class_name: "button-input-more-inner",
                        icon_class_name: "filter-icon",
                        class_name: "button-input-inner button-input-more-inner",
                        icon_right_name: "icon-arrow",
                        context_menu_array: twig.attr(twig.attr(twig.attr(twig.attr("template"in i ? i.template : "", "filter"), "button"), "context_menu"), "items")
                    })),
                    e.append('</div><div class="content__top__title"><h2 class="content__top__preset__caption preset-caption-plug">'),
                    e.append(twig.filter.escape(this.env_, twig.attr(twig.attr("lang"in i ? i.lang : "", "page"), "title"), "light_escape", null, !0)),
                    e.append('<span class="r-by-activities__header-item r-by-activities__top-tip-selected">'),
                    e.append(twig.filter.escape(this.env_, twig.attr(twig.attr("lang"in i ? i.lang : "", "page"), "person"), "light_escape", null, !0)),
                    e.append('<span class="r-by-activities__top-user-reset"><svg class="svg-icon"><use xlink:href="#common--close-not-painted"></use></svg></span></span><span class="r-by-activities__header-item r-by-activities__top-tip-selected">'),
                    e.append(twig.filter.escape(this.env_, twig.attr(twig.attr("lang"in i ? i.lang : "", "page"), "period"), "light_escape", null, !0)),
                    e.append("</span></h2></div></div>")
                }
                ,
                e.prototype.block_content = function(e, i, a) {
                    a = void 0 === a ? {} : a,
                    new (t._get("interface/common/tooltip.twig"))(this.env_).render_(e, twig.extend({}, i, {
                        class_name: "by-activities-tooltip",
                        text: twig.attr(twig.attr("lang"in i ? i.lang : "", "page"), "note"),
                        button: twig.attr(twig.attr("lang"in i ? i.lang : "", "page"), "upgrade"),
                        ribbon: twig.attr(twig.attr("lang"in i ? i.lang : "", "page"), "ribbon")
                    })),
                    e.append('<div class="l-analytics row row-top__plug r-by-activities-row-plug"><div class="r-by-activities-col-plug r-by-activities-col-plug_expand r-by-activities-col-plug_bordered r-by-activities-bordered-left_none"><h3 class="r-by-activities__title r-by-activities-bordered-left">'),
                    e.append(twig.filter.escape(this.env_, twig.attr(twig.attr("lang"in i ? i.lang : "", "leads"), "title"), "light_escape", null, !0)),
                    e.append('</h3><div class="b-table__1 r-by-activities-col-plug__table"><ul class="row"><li class="column"><span class="l-header"><span class="title">'),
                    e.append(twig.filter.escape(this.env_, twig.attr(twig.attr(twig.attr("lang"in i ? i.lang : "", "leads"), "labels"), "total"), "light_escape", null, !0)),
                    e.append('</span></span><div class="l-content l-lift-wrapper"><span class="l-lift x-border__1 l-lift_bottom"><span class="l-items_counter l-items_counter-plug"><span class="title big">0</span></span><span class="l-items_price"><span class="title">'),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("plug_price", 1), "light_escape", null, !0)),
                    e.append('</span></span></span></div></li><li class="column"><span class="l-header"><span class="title">'),
                    e.append(twig.filter.escape(this.env_, twig.attr(twig.attr(twig.attr("lang"in i ? i.lang : "", "leads"), "labels"), "new"), "light_escape", null, !0)),
                    e.append('</span></span><div class="l-content l-lift-wrapper"><span class="l-lift x-border__2 l-lift_bottom"><span class="l-items_counter l-items_counter-plug"><span class="title big">0</span></span><span class="l-items_price"><span class="title">'),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("plug_price", 1), "light_escape", null, !0)),
                    e.append('</span></span></span></div></li><li class="column"><span class="l-header"><span class="title">'),
                    e.append(twig.filter.escape(this.env_, twig.attr(twig.attr(twig.attr("lang"in i ? i.lang : "", "leads"), "labels"), "lost"), "light_escape", null, !0)),
                    e.append('</span></span><div class="l-content l-lift-wrapper"><span class="l-lift x-border__3 l-lift_bottom"><span class="l-items_counter l-items_counter-plug"><span class="title big">0</span></span><span class="l-items_price"><span class="title">'),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("plug_price", 1), "light_escape", null, !0)),
                    e.append('</span></span></span></div></li><li class="column"><span class="l-header"><span class="title">'),
                    e.append(twig.filter.escape(this.env_, twig.attr(twig.attr(twig.attr("lang"in i ? i.lang : "", "leads"), "labels"), "success"), "light_escape", null, !0)),
                    e.append('</span></span><div class="l-content l-lift-wrapper"><span class="l-lift x-border__4 l-lift_bottom"><span class="l-items_counter l-items_counter-plug"><span class="title big">0</span></span><span class="l-items_price"><span class="title">'),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("plug_price", 1), "light_escape", null, !0)),
                    e.append('</span></span></span></div></li></ul></div></div><div class="r-by-activities-col-plug r-by-activities-col-plug_coloured"><h3 class="r-by-activities__title">'),
                    e.append(twig.filter.escape(this.env_, twig.attr(twig.attr("lang"in i ? i.lang : "", "contacts"), "title"), "light_escape", null, !0)),
                    e.append('</h3><div class="r-by-activities__pie l-analytics__pie r-by-activities-col-plug__diagram" id="l-analytics__pie"><div class="r-by-activities__pie-circle-blue l-analytics__blue-circle loaded" id="main_circles"></div><span class="r-by-activities__pie-big-digit"><span class="r-by-activities__pie-big-digit-value">0</span><span>'),
                    e.append(twig.filter.escape(this.env_, twig.attr(twig.attr(twig.attr("lang"in i ? i.lang : "", "contacts"), "labels"), "total"), "light_escape", null, !0)),
                    e.append('</span></span><span class="r-by-activities__pie-small-digit small-diagram__digit"><span class="r-by-activities__pie-small-digit-value">0</span><span>'),
                    e.append(twig.filter.escape(this.env_, twig.attr(twig.attr(twig.attr("lang"in i ? i.lang : "", "contacts"), "labels"), "new"), "light_escape", null, !0)),
                    e.append('</span></span></div></div></div><div class="l-analytics row row-bottom__plug r-by-activities-row-plug"><div class="r-by-activities-col-plug r-by-activities-col-plug_expand r-by-activities-col-plug_coloured track-line-plug"><div class="b-table__2"><input class="total__tasks" type="text" hidden="hidden" value="'),
                    e.append(twig.filter.escape(this.env_, "tasks_count"in i ? i.tasks_count : "", "light_escape", null, !0)),
                    e.append('"/><ul class="row"><li class="r-by-activities__todos-item r-by-activities__todos-item-1"><span class="r-by-activities__todos-item-progress"></span><span class="r-by-activities__todos-item-header"><span class="icon icon-inline icon-follow-up"></span><span class="r-by-activities__todos-item-content-title title">'),
                    e.append(twig.filter.escape(this.env_, twig.attr(twig.attr(twig.attr("lang"in i ? i.lang : "", "tasks"), "labels"), "follow_up"), "light_escape", null, !0)),
                    e.append('</span></span><div class="r-by-activities__todos-item-content"><span class="r-by-activities__todos-item-content-total js-resize-txt">0</span><ul class="r-by-activities__todos-item-content-items items"><li class="r-by-activities__todos-item-content-items-item item">0 '),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("numeral", twig.attr(twig.attr(twig.attr("lang"in i ? i.lang : "", "tasks"), "labels"), "new"), 0), "light_escape", null, !0)),
                    e.append('</li><li class="r-by-activities__todos-item-content-items-item item">0 '),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("numeral", twig.attr(twig.attr(twig.attr("lang"in i ? i.lang : "", "tasks"), "labels"), "expired"), 0), "light_escape", null, !0)),
                    e.append('</li><li class="r-by-activities__todos-item-content-items-item item">0 '),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("numeral", twig.attr(twig.attr(twig.attr("lang"in i ? i.lang : "", "tasks"), "labels"), "success"), 0), "light_escape", null, !0)),
                    e.append('</li></ul></div></li><li class="r-by-activities__todos-item r-by-activities__todos-item-2"><span class="r-by-activities__todos-item-progress"></span><span class="r-by-activities__todos-item-header"><span class="icon icon-inline icon-case-red"></span><span class="r-by-activities__todos-item-content-title title">'),
                    e.append(twig.filter.escape(this.env_, twig.attr(twig.attr(twig.attr("lang"in i ? i.lang : "", "tasks"), "labels"), "meeting"), "light_escape", null, !0)),
                    e.append('</span></span><div class="r-by-activities__todos-item-content"><span class="r-by-activities__todos-item-content-total js-resize-txt">0</span><ul class="r-by-activities__todos-item-content-items items"><li class="r-by-activities__todos-item-content-items-item item">0 '),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("numeral", twig.attr(twig.attr(twig.attr("lang"in i ? i.lang : "", "tasks"), "labels"), "new"), 0), "light_escape", null, !0)),
                    e.append('</li><li class="r-by-activities__todos-item-content-items-item item">0 '),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("numeral", twig.attr(twig.attr(twig.attr("lang"in i ? i.lang : "", "tasks"), "labels"), "expired"), 0), "light_escape", null, !0)),
                    e.append('</li><li class="r-by-activities__todos-item-content-items-item item">0 '),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("numeral", twig.attr(twig.attr(twig.attr("lang"in i ? i.lang : "", "tasks"), "labels"), "success"), 0), "light_escape", null, !0)),
                    e.append('</li></ul></div></li><li class="r-by-activities__todos-item r-by-activities__todos-item-3"><span class="r-by-activities__todos-item-progress"></span><span class="r-by-activities__todos-item-header"><svg class="svg-icon svg-tasks--types-icons--0-dims" style="fill: '),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("default_task_type_color", ""), "light_escape", null, !0)),
                    e.append('"><use xlink:href="#tasks--types-icons--0"></use></svg><span class="r-by-activities__todos-item-content-title title">'),
                    e.append(twig.filter.escape(this.env_, twig.attr(twig.attr(twig.attr("lang"in i ? i.lang : "", "tasks"), "labels"), "commercial"), "light_escape", null, !0)),
                    e.append('</span></span><div class="r-by-activities__todos-item-content"><span class="r-by-activities__todos-item-content-total js-resize-txt">0</span><ul class="r-by-activities__todos-item-content-items items"><li class="r-by-activities__todos-item-content-items-item item">0 '),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("numeral", twig.attr(twig.attr(twig.attr("lang"in i ? i.lang : "", "tasks"), "labels"), "new"), 0), "light_escape", null, !0)),
                    e.append('</li><li class="r-by-activities__todos-item-content-items-item item">0 '),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("numeral", twig.attr(twig.attr(twig.attr("lang"in i ? i.lang : "", "tasks"), "labels"), "expired"), 0), "light_escape", null, !0)),
                    e.append('</li><li class="r-by-activities__todos-item-content-items-item item">0 '),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("numeral", twig.attr(twig.attr(twig.attr("lang"in i ? i.lang : "", "tasks"), "labels"), "success"), 0), "light_escape", null, !0)),
                    e.append('</li></ul></div></li><li class="r-by-activities__todos-item r-by-activities__todos-item-4"><span class="r-by-activities__todos-item-progress"></span><span class="r-by-activities__todos-item-header"><svg class="svg-icon svg-tasks--types-icons--0-dims" style="fill: '),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("default_task_type_color", ""), "light_escape", null, !0)),
                    e.append('"><use xlink:href="#tasks--types-icons--0"></use></svg><span class="r-by-activities__todos-item-content-title title">'),
                    e.append(twig.filter.escape(this.env_, twig.attr(twig.attr(twig.attr("lang"in i ? i.lang : "", "tasks"), "labels"), "call"), "light_escape", null, !0)),
                    e.append('</span></span><div class="r-by-activities__todos-item-content"><span class="r-by-activities__todos-item-content-total js-resize-txt">0</span><ul class="r-by-activities__todos-item-content-items items"><li class="r-by-activities__todos-item-content-items-item item">0 '),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("numeral", twig.attr(twig.attr(twig.attr("lang"in i ? i.lang : "", "tasks"), "labels"), "new"), 0), "light_escape", null, !0)),
                    e.append('</li><li class="r-by-activities__todos-item-content-items-item item">0 '),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("numeral", twig.attr(twig.attr(twig.attr("lang"in i ? i.lang : "", "tasks"), "labels"), "expired"), 0), "light_escape", null, !0)),
                    e.append('</li><li class="r-by-activities__todos-item-content-items-item item">0 '),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("numeral", twig.attr(twig.attr(twig.attr("lang"in i ? i.lang : "", "tasks"), "labels"), "success"), 0), "light_escape", null, !0)),
                    e.append('</li></ul></div></li><li class="r-by-activities__todos-item r-by-activities__todos-item-5 r-by-activities-bordered-bottom_none"><span class="r-by-activities__todos-item-progress"></span><span class="r-by-activities__todos-item-header"><svg class="svg-icon svg-tasks--types-icons--0-dims" style="fill: '),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("default_task_type_color", ""), "light_escape", null, !0)),
                    e.append('"><use xlink:href="#tasks--types-icons--0"></use></svg><span class="r-by-activities__todos-item-content-title title">'),
                    e.append(twig.filter.escape(this.env_, twig.attr(twig.attr(twig.attr("lang"in i ? i.lang : "", "tasks"), "labels"), "congratulations"), "light_escape", null, !0)),
                    e.append('</span></span><div class="r-by-activities__todos-item-content"><span class="r-by-activities__todos-item-content-total js-resize-txt">0</span><ul class="r-by-activities__todos-item-content-items items"><li class="r-by-activities__todos-item-content-items-item item">0 '),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("numeral", twig.attr(twig.attr(twig.attr("lang"in i ? i.lang : "", "tasks"), "labels"), "new"), 0), "light_escape", null, !0)),
                    e.append('</li><li class="r-by-activities__todos-item-content-items-item item">0 '),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("numeral", twig.attr(twig.attr(twig.attr("lang"in i ? i.lang : "", "tasks"), "labels"), "expired"), 0), "light_escape", null, !0)),
                    e.append('</li><li class="r-by-activities__todos-item-content-items-item item">0 '),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("numeral", twig.attr(twig.attr(twig.attr("lang"in i ? i.lang : "", "tasks"), "labels"), "success"), 0), "light_escape", null, !0)),
                    e.append('</li></ul></div></li></ul></div></div><div class="r-by-activities-col-plug r-by-activities-col-plug_coloured"><div class="b-table__4"><h3 class="r-by-activities__title">'),
                    e.append(twig.filter.escape(this.env_, twig.attr(twig.attr("lang"in i ? i.lang : "", "events"), "title"), "light_escape", null, !0)),
                    e.append('</h3><ul class="r-by-activities__events-list"><li class="r-by-activities__events-list-item"><span class="r-by-activities__events-list-item-title">'),
                    e.append(twig.filter.escape(this.env_, twig.attr(twig.attr(twig.attr("lang"in i ? i.lang : "", "events"), "labels"), "email"), "light_escape", null, !0)),
                    e.append('</span><span class="r-by-activities__events-list-item-value">0</span></li><li class="r-by-activities__events-list-item"><span class="r-by-activities__events-list-item-title">'),
                    e.append(twig.filter.escape(this.env_, twig.attr(twig.attr(twig.attr("lang"in i ? i.lang : "", "events"), "labels"), "companies"), "light_escape", null, !0)),
                    e.append('</span><span class="r-by-activities__events-list-item-value">0</span></li><li class="r-by-activities__events-list-item"><span class="r-by-activities__events-list-item-title">'),
                    e.append(twig.filter.escape(this.env_, twig.attr(twig.attr(twig.attr("lang"in i ? i.lang : "", "events"), "labels"), "tasks"), "light_escape", null, !0)),
                    e.append('</span><span class="r-by-activities__events-list-item-value">0</span></li><li class="r-by-activities__events-list-item"><span class="r-by-activities__events-list-item-title">'),
                    e.append(twig.filter.escape(this.env_, twig.attr(twig.attr(twig.attr("lang"in i ? i.lang : "", "events"), "labels"), "files"), "light_escape", null, !0)),
                    e.append('</span><span class="r-by-activities__events-list-item-value">0</span></li><li class="r-by-activities__events-list-item"><span class="r-by-activities__events-list-item-title">'),
                    e.append(twig.filter.escape(this.env_, twig.attr(twig.attr(twig.attr("lang"in i ? i.lang : "", "events"), "labels"), "notes"), "light_escape", null, !0)),
                    e.append('</span><span class="r-by-activities__events-list-item-value">0</span></li><li class="r-by-activities__events-list-item"><span class="r-by-activities__events-list-item-title">'),
                    e.append(twig.filter.escape(this.env_, twig.attr(twig.attr(twig.attr("lang"in i ? i.lang : "", "events"), "labels"), "contacts"), "light_escape", null, !0)),
                    e.append('</span><span class="r-by-activities__events-list-item-value">0</span></li><li class="r-by-activities__events-list-item"><span class="r-by-activities__events-list-item-title">'),
                    e.append(twig.filter.escape(this.env_, twig.attr(twig.attr(twig.attr("lang"in i ? i.lang : "", "events"), "labels"), "leads"), "light_escape", null, !0)),
                    e.append('</span><span class="r-by-activities__events-list-item-value">0</span></li><li class="r-by-activities__events-list-item"><span class="r-by-activities__events-list-item-title">'),
                    e.append(twig.filter.escape(this.env_, twig.attr(twig.attr(twig.attr("lang"in i ? i.lang : "", "events"), "labels"), "leadsCount"), "light_escape", null, !0)),
                    e.append('</span><span class="r-by-activities__events-list-item-value">0</span></li></ul></div></div></div>')
                }
                ,
                e.prototype.getTemplateName = function() {
                    return "interface_reports_by_activities_plugs_pay"
                }
                ,
                e.prototype.isTraitable = function() {
                    return !1
                }
                ,
                t._add("interface/reports/by_activities/plugs/pay", e)
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
                    t.append('<div class="r-by-activities__pie l-analytics__pie" id="l-analytics__pie"><div class="r-by-activities__pie-circle-blue l-analytics__blue-circle" id="main_circles"><span class="r-by-activities__pie-big-digit">'),
                    twig.attr(twig.attr("contacts"in e ? e.contacts : "", "total"), "size") ? (t.append('<span class="r-by-activities__pie-big-digit-value"><a href="'),
                    t.append(twig.filter.escape(this.env_, twig.attr(twig.attr("contacts"in e ? e.contacts : "", "total"), "link"), "light_escape", null, !0)),
                    t.append('" class="r-by-activities__link js-navigate-link">'),
                    t.append(twig.filter.escape(this.env_, twig.attr(twig.attr("contacts"in e ? e.contacts : "", "total"), "size"), "light_escape", null, !0)),
                    t.append("</a></span>")) : t.append('<span class="r-by-activities__pie-big-digit-value">0</span>'),
                    t.append("<span>"),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in e ? e.lang : "", "rsf_contacts_total"), "light_escape", null, !0)),
                    t.append('</span></span><span class="r-by-activities__pie-small-digit">'),
                    twig.attr(twig.attr("contacts"in e ? e.contacts : "", "new"), "size") ? (t.append('<span class="r-by-activities__pie-small-digit-value"><a href="'),
                    t.append(twig.filter.escape(this.env_, twig.attr(twig.attr("contacts"in e ? e.contacts : "", "new"), "link"), "light_escape", null, !0)),
                    t.append('" class="r-by-activities__link js-navigate-link">'),
                    t.append(twig.filter.escape(this.env_, twig.attr(twig.attr("contacts"in e ? e.contacts : "", "new"), "size"), "light_escape", null, !0)),
                    t.append("</a></span>")) : t.append('<span class="r-by-activities__pie-small-digit-value">0</span>'),
                    t.append("<span>"),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in e ? e.lang : "", "rsf_contacts_new"), "light_escape", null, !0)),
                    t.append("</span></span></div></div>")
                }
                ,
                e.prototype.getTemplateName = function() {
                    return "interface_reports_by_activities_page_sections_contacts"
                }
                ,
                e.prototype.isTraitable = function() {
                    return !1
                }
                ,
                t._add("interface/reports/by_activities/page_sections/contacts", e)
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
                    t.append('<div class="r-by-activities__progress js-graph-progress">'),
                    e._parent = e;
                    var a = twig.attr("customers"in e ? e.customers : "", "statuses")
                      , s = {
                        index0: 0,
                        index: 1,
                        first: !0
                    };
                    if (twig.countable(a)) {
                        var n = twig.count(a);
                        s.revindex0 = n - 1,
                        s.revindex = n,
                        s.length = n,
                        s.last = 1 === n
                    }
                    twig.forEach(a, (function(i, a) {
                        e.key = a,
                        e.customer = i,
                        t.append('<div class="r-by-activities__progress-column"><span class="r-by-activities__progress-column-header">'),
                        t.append(twig.filter.escape(this.env_, twig.attr("customer"in e ? e.customer : "", "title"), "light_escape", null, !0)),
                        t.append('</span><div class="r-by-activities__progress-content"><span class="js-graph-progress-lift r-by-activities__progress-lift r-by-activities__progress-lift_border-'),
                        t.append(twig.filter.escape(this.env_, twig.attr(s, "index"), "light_escape", null, !0)),
                        t.append('"><span class="r-by-activities__progress-lift-counter"><span class="r-by-activities__progress-lift-counter-value js-graph-progress-big">'),
                        twig.attr("customer"in e ? e.customer : "", "size") ? t.append(twig.filter.escape(this.env_, twig.attr("customer"in e ? e.customer : "", "size"), "light_escape", null, !0)) : t.append("0"),
                        t.append('</span></span><span class="r-by-activities__progress-lift-price">'),
                        t.append(twig.filter.escape(this.env_, this.env_.filter("price", twig.attr("customer"in e ? e.customer : "", "price")), "light_escape", null, !0)),
                        t.append("</span></span></div></div>"),
                        ++s.index0,
                        ++s.index,
                        s.first = !1,
                        s.length && (--s.revindex0,
                        --s.revindex,
                        s.last = 0 === s.revindex0)
                    }
                    ), this),
                    t.append("</div>")
                }
                ,
                e.prototype.getTemplateName = function() {
                    return "interface_reports_by_activities_page_sections_customers"
                }
                ,
                e.prototype.isTraitable = function() {
                    return !1
                }
                ,
                t._add("interface/reports/by_activities/page_sections/customers", e)
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
                    t.append('<div class="r-by-activities__progress js-graph-progress">'),
                    e._parent = e;
                    var a = twig.attr("leads"in e ? e.leads : "", "statuses")
                      , s = {
                        index0: 0,
                        index: 1,
                        first: !0
                    };
                    if (twig.countable(a)) {
                        var n = twig.count(a);
                        s.revindex0 = n - 1,
                        s.revindex = n,
                        s.length = n,
                        s.last = 1 === n
                    }
                    twig.forEach(a, (function(i, a) {
                        e.key = a,
                        e.lead = i,
                        t.append('<div class="r-by-activities__progress-column"><span class="r-by-activities__progress-column-header">'),
                        t.append(twig.filter.escape(this.env_, twig.attr("lead"in e ? e.lead : "", "title"), "light_escape", null, !0)),
                        t.append('</span><div class="r-by-activities__progress-content"><span class="js-graph-progress-lift r-by-activities__progress-lift r-by-activities__progress-lift_border-'),
                        t.append(twig.filter.escape(this.env_, twig.attr(s, "index"), "light_escape", null, !0)),
                        t.append('"><span class="r-by-activities__progress-lift-counter"><span class="r-by-activities__progress-lift-counter-value js-graph-progress-big">'),
                        twig.attr("lead"in e ? e.lead : "", "size") ? (twig.attr("lead"in e ? e.lead : "", "link") ? (t.append('<a href="'),
                        t.append(twig.filter.escape(this.env_, twig.attr("lead"in e ? e.lead : "", "link"), "light_escape", null, !0)),
                        t.append('" class="r-by-activities__link js-navigate-link">'),
                        t.append(twig.filter.escape(this.env_, twig.attr("lead"in e ? e.lead : "", "size"), "light_escape", null, !0)),
                        t.append("</a>")) : t.append(twig.filter.escape(this.env_, twig.attr("lead"in e ? e.lead : "", "size"), "light_escape", null, !0)),
                        "success" == ("key"in e ? e.key : "") && (t.append('<span class="r-by-activities__progress-lift-counter-value-conversion">'),
                        t.append(twig.filter.escape(this.env_, twig.attr("leads"in e ? e.leads : "", "conversion_count_percent"), "light_escape", null, !0)),
                        t.append("%</span>"))) : t.append("0"),
                        t.append('</span></span><span class="r-by-activities__progress-lift-price">'),
                        t.append(twig.filter.escape(this.env_, this.env_.filter("price", twig.attr("lead"in e ? e.lead : "", "price")), "light_escape", null, !0)),
                        t.append("</span></span></div></div>"),
                        ++s.index0,
                        ++s.index,
                        s.first = !1,
                        s.length && (--s.revindex0,
                        --s.revindex,
                        s.last = 0 === s.revindex0)
                    }
                    ), this),
                    t.append("</div>")
                }
                ,
                e.prototype.getTemplateName = function() {
                    return "interface_reports_by_activities_page_sections_leads"
                }
                ,
                e.prototype.isTraitable = function() {
                    return !1
                }
                ,
                t._add("interface/reports/by_activities/page_sections/leads", e)
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
                    t.append('<ul class="r-by-activities__events-list">'),
                    e._parent = e;
                    var a = twig.attr("notes"in e ? e.notes : "", "new");
                    twig.forEach(a, (function(i, a) {
                        e.key = a,
                        e.item = i,
                        t.append('<li class="r-by-activities__events-list-item"><span class="r-by-activities__events-list-item-title">'),
                        t.append(twig.filter.escape(this.env_, twig.attr(twig.attr("notes"in e ? e.notes : "", "types"), "key"in e ? e.key : "", void 0, "array"), "light_escape", null, !0)),
                        t.append('</span><span class="r-by-activities__events-list-item-value">'),
                        "key_7" == ("key"in e ? e.key : "") ? t.append(twig.filter.escape(this.env_, twig.attr("item"in e ? e.item : "", "size"), "light_escape", null, !0)) : twig.attr("item"in e ? e.item : "", "size") ? (t.append('<a href="'),
                        t.append(twig.filter.escape(this.env_, twig.attr("item"in e ? e.item : "", "link"), "light_escape", null, !0)),
                        t.append('" class="r-by-activities__link js-navigate-link">'),
                        t.append(twig.filter.escape(this.env_, twig.attr("item"in e ? e.item : "", "size"), "light_escape", null, !0)),
                        t.append("</a>")) : t.append("0"),
                        t.append("</span></li>")
                    }
                    ), this),
                    t.append("</ul>")
                }
                ,
                e.prototype.getTemplateName = function() {
                    return "interface_reports_by_activities_page_sections_notes"
                }
                ,
                e.prototype.isTraitable = function() {
                    return !1
                }
                ,
                t._add("interface/reports/by_activities/page_sections/notes", e)
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
                    t.append('<input class="total__tasks" type="text" hidden="hidden" value="'),
                    t.append(twig.filter.escape(this.env_, twig.attr("tasks"in e ? e.tasks : "", "count"), "light_escape", null, !0)),
                    t.append('"/><div class="r-by-activities__todos">'),
                    e._parent = e;
                    var a = twig.attr("tasks"in e ? e.tasks : "", "types")
                      , s = {
                        index0: 0,
                        index: 1,
                        first: !0
                    };
                    if (twig.countable(a)) {
                        var n = twig.count(a);
                        s.revindex0 = n - 1,
                        s.revindex = n,
                        s.length = n,
                        s.last = 1 === n
                    }
                    twig.forEach(a, (function(i, a) {
                        e.key = a,
                        e.type = i,
                        t.append('<div class="r-by-activities__todos-item r-by-activities__todos-item-'),
                        t.append(twig.filter.escape(this.env_, twig.attr(s, "index"), "light_escape", null, !0)),
                        t.append(" column column__"),
                        t.append(twig.filter.escape(this.env_, twig.attr(s, "index"), "light_escape", null, !0)),
                        t.append('"><span class="r-by-activities__todos-item-progress" '),
                        twig.contains(["meeting", "follow_up"], "key"in e ? e.key : "") || (t.append('style="background-color: '),
                        t.append(twig.filter.escape(this.env_, this.env_.filter("default_task_type_color", twig.attr("type"in e ? e.type : "", "color")), "light_escape", null, !0)),
                        t.append('"')),
                        t.append('></span><span class="r-by-activities__todos-item-header">'),
                        twig.contains(["meeting", "follow_up"], "key"in e ? e.key : "") ? (t.append('<span class="icon icon-inline '),
                        "meeting" == ("key"in e ? e.key : "") ? t.append("icon-case-red") : t.append("icon-follow-up"),
                        t.append('"></span>')) : (t.append('<svg class="svg-icon svg-tasks--types-icons--'),
                        t.append(twig.filter.escape(this.env_, this.env_.filter("default_task_type_icon", twig.attr("type"in e ? e.type : "", "icon_id")), "light_escape", null, !0)),
                        t.append('-dims" style="fill: '),
                        t.append(twig.filter.escape(this.env_, this.env_.filter("default_task_type_color", twig.attr("type"in e ? e.type : "", "color")), "light_escape", null, !0)),
                        t.append('"><use xlink:href="#tasks--types-icons--'),
                        t.append(twig.filter.escape(this.env_, this.env_.filter("default_task_type_icon", twig.attr("type"in e ? e.type : "", "icon_id")), "light_escape", null, !0)),
                        t.append('"></use></svg>')),
                        t.append('<span class="r-by-activities__todos-item-content-title title">'),
                        t.append(twig.filter.escape(this.env_, twig.attr("type"in e ? e.type : "", "title"), "light_escape", null, !0)),
                        t.append('</span></span><div class="r-by-activities__todos-item-content"><div class="r-by-activities__todos-item-content-total js-resize-txt">'),
                        twig.attr("type"in e ? e.type : "", "count") ? (t.append('<a href="'),
                        t.append(twig.filter.escape(this.env_, twig.attr("type"in e ? e.type : "", "link"), "light_escape", null, !0)),
                        t.append('" class="js-navigate-link"><svg><text x="0" y="99%" alignment-baseline="baseline">'),
                        t.append(twig.filter.escape(this.env_, twig.attr("type"in e ? e.type : "", "count"), "light_escape", null, !0)),
                        t.append("</text></svg></a>")) : (t.append('<svg><text x="0" y="99%" alignment-baseline="baseline">'),
                        t.append(twig.filter.escape(this.env_, twig.attr("type"in e ? e.type : "", "count"), "light_escape", null, !0)),
                        t.append("</text></svg>")),
                        t.append('</div><div class="r-by-activities__todos-item-content-items items"><div class="r-by-activities__todos-item-content-items-item item">'),
                        twig.attr("type"in e ? e.type : "", "new", void 0, void 0, !0) && twig.attr(twig.attr("type"in e ? e.type : "", "new"), "size") ? (t.append('<a href="'),
                        t.append(twig.filter.escape(this.env_, twig.attr(twig.attr("type"in e ? e.type : "", "new"), "link"), "light_escape", null, !0)),
                        t.append('" class="r-by-activities__todos-item-content-items-item-link js-navigate-link">'),
                        t.append(twig.filter.escape(this.env_, twig.attr(twig.attr("type"in e ? e.type : "", "new"), "size"), "light_escape", null, !0)),
                        t.append(" "),
                        t.append(twig.filter.escape(this.env_, this.env_.filter("numeral", twig.attr("lang"in e ? e.lang : "", "rsf_tasks_new"), twig.attr(twig.attr("type"in e ? e.type : "", "new"), "size")), "light_escape", null, !0)),
                        t.append("</a>")) : (t.append("0 "),
                        t.append(twig.filter.escape(this.env_, this.env_.filter("numeral", twig.attr("lang"in e ? e.lang : "", "rsf_tasks_new"), 0), "light_escape", null, !0))),
                        t.append('</div><div class="r-by-activities__todos-item-content-items-item item">'),
                        twig.attr("type"in e ? e.type : "", "expired", void 0, void 0, !0) && twig.attr(twig.attr("type"in e ? e.type : "", "expired"), "size") ? e.count = twig.attr(twig.attr("type"in e ? e.type : "", "expired"), "size") : e.count = 0,
                        t.append(twig.filter.escape(this.env_, "count"in e ? e.count : "", "light_escape", null, !0)),
                        t.append(" "),
                        t.append(twig.filter.escape(this.env_, this.env_.filter("numeral", twig.attr("lang"in e ? e.lang : "", "rsf_tasks_expired"), "count"in e ? e.count : ""), "light_escape", null, !0)),
                        t.append('</div><div class="r-by-activities__todos-item-content-items-item item">'),
                        twig.attr("type"in e ? e.type : "", "closed", void 0, void 0, !0) && twig.attr(twig.attr("type"in e ? e.type : "", "closed"), "size") ? (t.append('<a href="'),
                        t.append(twig.filter.escape(this.env_, twig.attr(twig.attr("type"in e ? e.type : "", "closed"), "link"), "light_escape", null, !0)),
                        t.append('" class="r-by-activities__todos-item-content-items-item-link js-navigate-link">'),
                        t.append(twig.filter.escape(this.env_, twig.attr(twig.attr("type"in e ? e.type : "", "closed"), "size"), "light_escape", null, !0)),
                        t.append(" "),
                        t.append(twig.filter.escape(this.env_, this.env_.filter("numeral", twig.attr("lang"in e ? e.lang : "", "rsf_tasks_closed"), twig.attr(twig.attr("type"in e ? e.type : "", "closed"), "size")), "light_escape", null, !0)),
                        t.append("</a>")) : (t.append("0 "),
                        t.append(twig.filter.escape(this.env_, this.env_.filter("numeral", twig.attr("lang"in e ? e.lang : "", "rsf_tasks_closed"), 0), "light_escape", null, !0))),
                        t.append("</div></div></div></div>"),
                        ++s.index0,
                        ++s.index,
                        s.first = !1,
                        s.length && (--s.revindex0,
                        --s.revindex,
                        s.last = 0 === s.revindex0)
                    }
                    ), this),
                    t.append("</div>")
                }
                ,
                e.prototype.getTemplateName = function() {
                    return "interface_reports_by_activities_page_sections_tasks"
                }
                ,
                e.prototype.isTraitable = function() {
                    return !1
                }
                ,
                t._add("interface/reports/by_activities/page_sections/tasks", e)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var e = function(t) {
                    twig.Template.call(this, t),
                    this.setBlocks({
                        head: twig.bind(this.block_head, this),
                        content: twig.bind(this.block_content, this),
                        content_middle: twig.bind(this.block_content_middle, this)
                    })
                };
                twig.inherits(e, twig.Template),
                e.prototype.getParent_ = function(e) {
                    return t._get("interface/page/base.twig")
                }
                ,
                e.prototype.render_ = function(t, e, i) {
                    i = void 0 === i ? {} : i,
                    this.getParent(e).render_(t, e, twig.extend({}, this.getBlocks(), i))
                }
                ,
                e.prototype.block_head = function(e, i, a) {
                    a = void 0 === a ? {} : a,
                    e.append('<div class="content__top"><div class="content__top__sidebar__toggler"><span id="sidebar_toggler" class="content__top__preset__filter_icon"><span class="icon icon-list filter-toggle-icon"></span></span></div><div class="calls_analytics__filter filter-button__calls-plug"><div class="content__top__actions">'),
                    new (t._get("interface/controls/button.twig"))(this.env_).render_(e, twig.extend({}, i, {
                        text: twig.attr(twig.attr("lang"in i ? i.lang : "", "page"), "filter"),
                        id: "button-filter-toggle",
                        inner_class_name: "button-input-more-inner",
                        icon_class_name: "filter-icon",
                        class_name: "button-input-inner button-input-more-inner",
                        icon_right_name: "icon-arrow",
                        context_menu_array: twig.attr(twig.attr(twig.attr(twig.attr("template"in i ? i.template : "", "filter"), "button"), "context_menu"), "items")
                    })),
                    e.append('</div><div class="content__top__title"><h2 class="content__top__preset__caption">'),
                    e.append(twig.filter.escape(this.env_, twig.attr(twig.attr("lang"in i ? i.lang : "", "page"), "title"), "light_escape", null, !0)),
                    e.append("</h2></div></div></div>")
                }
                ,
                e.prototype.block_content = function(t, e, i) {
                    i = void 0 === i ? {} : i,
                    t.append(this.renderBlock("content_middle", e, i))
                }
                ,
                e.prototype.block_content_middle = function(e, i, a) {
                    a = void 0 === a ? {} : a,
                    e.append('<div class="calls_analytics__graph_wrapper calls_analytics__graph_wrapper_plug">'),
                    new (t._get("interface/common/tooltip.twig"))(this.env_).render_(e, twig.extend({}, i, {
                        class_name: "calls-tooltip",
                        text: twig.attr(twig.attr("lang"in i ? i.lang : "", "page"), "note"),
                        button: twig.attr(twig.attr("lang"in i ? i.lang : "", "page"), "upgrade"),
                        ribbon: twig.attr(twig.attr("lang"in i ? i.lang : "", "page"), "advancedPlan")
                    })),
                    e.append('<div class="calls_analytics__graph_header"><div class="calls_analytics__graph_multiselect filter__custom_settings__item">'),
                    new (t._get("interface/controls/checkboxes_dropdown.twig"))(this.env_).render_(e, twig.extend({}, i, {
                        items: [],
                        class_name: "",
                        title: twig.attr(twig.attr("lang"in i ? i.lang : "", "page"), "allGroups")
                    })),
                    e.append('</div><div class="calls_analytics__graph_toggler"><div class="fake-control-toggler call_analytics_toggler"><span class="control-toggler__item-selected control-toggler__item">'),
                    e.append(twig.filter.escape(this.env_, twig.attr(twig.attr("lang"in i ? i.lang : "", "page"), "byCount"), "light_escape", null, !0)),
                    e.append('<b></b></span><span class="control-toggler__item">'),
                    e.append(twig.filter.escape(this.env_, twig.attr(twig.attr("lang"in i ? i.lang : "", "page"), "byDuration"), "light_escape", null, !0)),
                    e.append('</span></div></div></div><div class="calls_analytics__graph"><div class="calls_analytics__wrapper table_header"><div class="calls_analytics_row"><div class="calls_analytics__user table_header"></div><div class="calls_analytics__calls_graph table_header">'),
                    e.append(twig.filter.escape(this.env_, twig.attr(twig.attr("lang"in i ? i.lang : "", "page"), "inbound"), "light_escape", null, !0)),
                    e.append("/"),
                    e.append(twig.filter.escape(this.env_, twig.attr(twig.attr("lang"in i ? i.lang : "", "page"), "outbound"), "light_escape", null, !0)),
                    e.append('</div></div></div><div class="calls_analytics__wrapper js-user-wrapper"><div class="calls_analytics_row"><div class="calls_analytics__user"><span class="calls_analytics__user__name">'),
                    e.append(twig.filter.escape(this.env_, twig.attr(twig.attr(twig.attr("lang"in i ? i.lang : "", "fake"), "users"), 0, void 0, "array"), "light_escape", null, !0)),
                    e.append('</span><div class="calls_analytics__user__calls_duration"><spam class="js-total_calls-text">'),
                    e.append(twig.filter.escape(this.env_, twig.attr(twig.attr("lang"in i ? i.lang : "", "page"), "duration"), "light_escape", null, !0)),
                    e.append('</spam><span class="calls_analytics__user__calls_duration_time js-call-value js-all-calls-duration js-total_duration"> 00:00</span></div></div><div class="calls_analytics__calls_graph"><div class="calls_analytics__calls_graph__incoming calls_amount" style="width: 91px;"><span class="calls_analytics__calls_graph__incoming__amount js-inbound calls_amount_value js-call-value js-incoming-calls-amount">0</span></div>\x3c!----\x3e<div class="calls_analytics__calls_graph__outgoing calls_amount" style="width: 122px;"><span class="calls_analytics__calls_graph__outgoing__amount js-outbound calls_amount_value js-call-value js-outgoing-calls-amount">0</span></div>\x3c!----\x3e<div class="calls_analytics__calls_graph__all js-call-value js-total js-all-calls-amount">0</div></div></div></div><div class="calls_analytics__wrapper js-user-wrapper"><div class="calls_analytics_row"><div class="calls_analytics__user"><span class="calls_analytics__user__name">'),
                    e.append(twig.filter.escape(this.env_, twig.attr(twig.attr(twig.attr("lang"in i ? i.lang : "", "fake"), "users"), 1, void 0, "array"), "light_escape", null, !0)),
                    e.append('</span><div class="calls_analytics__user__calls_duration"><span class="js-total_calls-text">'),
                    e.append(twig.filter.escape(this.env_, twig.attr(twig.attr("lang"in i ? i.lang : "", "page"), "duration"), "light_escape", null, !0)),
                    e.append('</span><span class="calls_analytics__user__calls_duration_time js-call-value js-all-calls-duration js-total_duration"> 00:00</span></div></div><div class="calls_analytics__calls_graph"><div class="calls_analytics__calls_graph__incoming calls_amount" style="width: 91px;"><span class="calls_analytics__calls_graph__incoming__amount js-inbound calls_amount_value js-call-value js-incoming-calls-amount">0</span></div>\x3c!----\x3e<div class="calls_analytics__calls_graph__outgoing calls_amount" style="width: 102px;"><span class="calls_analytics__calls_graph__outgoing__amount js-outbound calls_amount_value js-call-value js-outgoing-calls-amount">0</span></div>\x3c!----\x3e<div class="calls_analytics__calls_graph__all js-call-value js-total js-all-calls-amount">0</div></div></div></div><div class="calls_analytics__wrapper js-user-wrapper"><div class="calls_analytics_row"><div class="calls_analytics__user"><span class="calls_analytics__user__name">'),
                    e.append(twig.filter.escape(this.env_, twig.attr(twig.attr(twig.attr("lang"in i ? i.lang : "", "fake"), "users"), 2, void 0, "array"), "light_escape", null, !0)),
                    e.append('</span><div class="calls_analytics__user__calls_duration"><spam class="js-total_calls-text">'),
                    e.append(twig.filter.escape(this.env_, twig.attr(twig.attr("lang"in i ? i.lang : "", "page"), "duration"), "light_escape", null, !0)),
                    e.append('</spam><span class="calls_analytics__user__calls_duration_time js-call-value js-all-calls-duration js-total_duration"> 00:00</span></div></div><div class="calls_analytics__calls_graph"><div class="calls_analytics__calls_graph__incoming calls_amount" style="width: 162px;"><span class="calls_analytics__calls_graph__incoming__amount js-inbound calls_amount_value js-call-value js-incoming-calls-amount">0</span></div>\x3c!----\x3e<div class="calls_analytics__calls_graph__outgoing calls_amount" style="width: 91px;"><span class="calls_analytics__calls_graph__outgoing__amount js-outbound calls_amount_value js-call-value js-outgoing-calls-amount">0</span></div>\x3c!----\x3e<div class="calls_analytics__calls_graph__all js-call-value js-total js-all-calls-amount">0</div></div></div></div><div class="calls_analytics__wrapper js-user-wrapper"><div class="calls_analytics_row"><div class="calls_analytics__user"><span class="calls_analytics__user__name">'),
                    e.append(twig.filter.escape(this.env_, twig.attr(twig.attr(twig.attr("lang"in i ? i.lang : "", "fake"), "users"), 3, void 0, "array"), "light_escape", null, !0)),
                    e.append('</span><div class="calls_analytics__user__calls_duration"><spam class="js-total_calls-text">'),
                    e.append(twig.filter.escape(this.env_, twig.attr(twig.attr("lang"in i ? i.lang : "", "page"), "duration"), "light_escape", null, !0)),
                    e.append('</spam><span class="calls_analytics__user__calls_duration_time js-call-value js-all-calls-duration js-total_duration"> 00:00</span></div></div><div class="calls_analytics__calls_graph"><div class="calls_analytics__calls_graph__incoming calls_amount" style="width:223px;"><span class="calls_analytics__calls_graph__incoming__amount js-inbound calls_amount_value js-call-value js-incoming-calls-amount">0</span></div>\x3c!----\x3e<div class="calls_analytics__calls_graph__outgoing calls_amount" style="width: 213px;"><span class="calls_analytics__calls_graph__outgoing__amount js-outbound calls_amount_value js-call-value js-outgoing-calls-amount">0</span></div>\x3c!----\x3e<div class="calls_analytics__calls_graph__all js-call-value js-total js-all-calls-amount">0</div></div></div></div><div class="calls_analytics__wrapper js-user-wrapper"><div class="calls_analytics_row"><div class="calls_analytics__user"><span class="calls_analytics__user__name">'),
                    e.append(twig.filter.escape(this.env_, twig.attr(twig.attr(twig.attr("lang"in i ? i.lang : "", "fake"), "users"), 4, void 0, "array"), "light_escape", null, !0)),
                    e.append('</span><div class="calls_analytics__user__calls_duration"><spam class="js-total_calls-text">'),
                    e.append(twig.filter.escape(this.env_, twig.attr(twig.attr("lang"in i ? i.lang : "", "page"), "duration"), "light_escape", null, !0)),
                    e.append('</spam><span class="calls_analytics__user__calls_duration_time js-call-value js-all-calls-duration js-total_duration"> 00:00</span></div></div><div class="calls_analytics__calls_graph"><div class="calls_analytics__calls_graph__incoming calls_amount" style="width: 162px;"><span class="calls_analytics__calls_graph__incoming__amount js-inbound calls_amount_value js-call-value js-incoming-calls-amount">0</span></div>\x3c!----\x3e<div class="calls_analytics__calls_graph__outgoing calls_amount" style="width: 172px;"><span class="calls_analytics__calls_graph__outgoing__amount js-outbound calls_amount_value js-call-value js-outgoing-calls-amount">0</span></div>\x3c!----\x3e<div class="calls_analytics__calls_graph__all js-call-value js-total js-all-calls-amount">0</div></div></div></div></div></div>')
                }
                ,
                e.prototype.getTemplateName = function() {
                    return "interface_reports_calls_plugs_pay"
                }
                ,
                e.prototype.isTraitable = function() {
                    return !1
                }
                ,
                t._add("interface/reports/calls/plugs/pay", e)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var e = function(t) {
                    twig.Template.call(this, t),
                    this.setBlocks({
                        static: twig.bind(this.block_static, this),
                        aside: twig.bind(this.block_aside, this),
                        head_button: twig.bind(this.block_head_button, this),
                        content: twig.bind(this.block_content, this),
                        page_description: twig.bind(this.block_page_description, this),
                        button_to_pay: twig.bind(this.block_button_to_pay, this)
                    })
                };
                twig.inherits(e, twig.Template),
                e.prototype.getParent_ = function(e) {
                    return t._get("interface/reports/page.twig")
                }
                ,
                e.prototype.render_ = function(t, e, i) {
                    i = void 0 === i ? {} : i,
                    this.getParent(e).render_(t, e, twig.extend({}, this.getBlocks(), i))
                }
                ,
                e.prototype.block_static = function(t, e, i) {
                    i = void 0 === i ? {} : i,
                    t.append(twig.filter.escape(this.env_, this.env_.invoke("inject_static", ["reports_goals.php"], this), "light_escape", null, !0))
                }
                ,
                e.prototype.block_aside = function(e, i, a) {
                    a = void 0 === a ? {} : a,
                    new (t._get("interface/page/aside.twig"))(this.env_).render_(e, i)
                }
                ,
                e.prototype.block_head_button = function(e, i, a) {
                    a = void 0 === a ? {} : a,
                    e.append('<div class="goals_report__settings_button"><a class="js-navigate-link" href="/stats/goals/settings/">'),
                    new (t._get("interface/controls/button.twig"))(this.env_).render_(e, twig.extend({}, i, {
                        class_name: "js-goals-settings",
                        text: twig.attr(twig.attr("lang"in i ? i.lang : "", "page"), "set_goals"),
                        icon_class_name: "icon-gear icon-inline"
                    })),
                    e.append("</a></div>")
                }
                ,
                e.prototype.block_content = function(e, i, a) {
                    a = void 0 === a ? {} : a;
                    var s = e;
                    (e = new twig.StringBuffer).append('<div class="goals_report__wrapper goals_report_plug '),
                    "pay" == twig.attr("template"in i ? i.template : "", "plug_type") && e.append("goals_report_plug_pay"),
                    e.append('" id="goals_report_wrapper"><div class="goals_report__revenue__wrapper content__account__note__wrapper"><div class="content__account__note">'),
                    e.append(this.renderBlock("page_description", i, a)),
                    e.append(this.renderBlock("button_to_pay", i, a)),
                    e.append('</div></div><div class="goals_report__overlay_wrapper"><div class="goals_report__overlay_plug"></div><div class="goals_report__filter">'),
                    twig.attr(twig.attr("template"in i ? i.template : "", "controls"), "groups", void 0, void 0, !0) && (e.append('<div class="goals_report__filter__users filter__custom_settings__item">'),
                    new (t._get("interface/controls/checkboxes_dropdown.twig"))(this.env_).render_(e, twig.extend({}, i, twig.attr(twig.attr("template"in i ? i.template : "", "controls"), "groups"))),
                    e.append("</div>")),
                    twig.attr(twig.attr("template"in i ? i.template : "", "controls"), "toggler_types", void 0, void 0, !0) && (e.append('<div class="goals_report__filter__sort">'),
                    new (t._get("interface/controls/toggler.twig"))(this.env_).render_(e, twig.extend({}, i, twig.attr(twig.attr("template"in i ? i.template : "", "controls"), "toggler_types"))),
                    e.append("</div>")),
                    e.append('</div><div class="goals_report__statistics type_leads_price" id="users_wrapper"><div class="goals_report__statistics__group"><div class="goals_report__statistics_item total_goals good_result"><label class="goals_report__statistics__label">'),
                    e.append(twig.filter.escape(this.env_, twig.attr(twig.attr("lang"in i ? i.lang : "", "calculations"), "total"), "light_escape", null, !0)),
                    e.append('</label><div class="goals_report__statistics__line"><div class="goals_report__statistics__fill_line" style="width: 75%"><div class="goals_report__statistics__sum leads_price"><span class="goals_report_plug__fake_line" style="width: 65px;"></span></div></div></div><div class="goals_report__statistics__goal"><div class="goals_report__statistics__goal_text"><span class="goals_report_plug__fake_line" style="width: 24px;"></span></div><div class="goals_report__statistics__goal_sum leads_price"><span class="goals_report_plug__fake_line" style="width: 96px;"></span></div></div></div></div><div class="goals_report__statistics__group last_group"><div class="goals__header_separator"><div class="goals_report_group_header"><label class="goals_report__statistics__group_header">'),
                    e.append(twig.filter.escape(this.env_, twig.attr(twig.attr(twig.attr("lang"in i ? i.lang : "", "fake"), "groups"), 0, void 0, "array"), "light_escape", null, !0)),
                    e.append('</label><span class="goals_report__fake_header">'),
                    e.append(twig.filter.escape(this.env_, twig.attr(twig.attr(twig.attr("lang"in i ? i.lang : "", "fake"), "groups"), 0, void 0, "array"), "light_escape", null, !0)),
                    e.append('</span></div><div class="goals_report__statistics__line"></div><div class="goals_report__statistics__goal_sum leads_price"><span class="goals_report_plug__fake_line" style="width: 125px;"></span></div></div><div class="goals_report__statistics_item user_goals good_result"><label class="goals_report__statistics__label">'),
                    e.append(twig.filter.escape(this.env_, twig.attr(twig.attr(twig.attr("lang"in i ? i.lang : "", "fake"), "users"), 0, void 0, "array"), "light_escape", null, !0)),
                    e.append('</label><div class="goals_report__statistics__line"><div class="goals_report__statistics__fill_line" style="width: 41%"><div class="goals_report__statistics__sum leads_price"><span class="goals_report_plug__fake_line" style="width: 125px;"></span></div></div><div class="goals_report__statistics__right_goals"><span class="goals_report__statistics__goal_sum leads_price"><span class="goals_report_plug__fake_line" style="width: 65px;"></span></span></div></div></div><div class="goals_report__statistics_item user_goals good_result" data-status-leads_price="'),
                    e.append(twig.filter.escape(this.env_, twig.attr(twig.attr("user_goals_controls"in i ? i.user_goals_controls : "", "statuses"), "leads_price"), "light_escape", null, !0)),
                    e.append('"><label class="goals_report__statistics__label">'),
                    e.append(twig.filter.escape(this.env_, twig.attr(twig.attr(twig.attr("lang"in i ? i.lang : "", "fake"), "users"), 1, void 0, "array"), "light_escape", null, !0)),
                    e.append('</label><div class="goals_report__statistics__line"><div class="goals_report__statistics__fill_line" style="width: 115%"><div class="goals_report__statistics__sum leads_price"><span class="goals_report_plug__fake_line" style="width: 135px;"></span></div><div class="goals_report__statistics__goal_sum leads_price"><span class="goals_report_plug__fake_line" style="width: 98px;"></span></div></div></div></div><div class="goals_report__statistics_item user_goals bad_result"><label class="goals_report__statistics__label">'),
                    e.append(twig.filter.escape(this.env_, twig.attr(twig.attr(twig.attr("lang"in i ? i.lang : "", "fake"), "users"), 2, void 0, "array"), "light_escape", null, !0)),
                    e.append('</label><div class="goals_report__statistics__line"><div class="goals_report__statistics__fill_line" style="width: 19%"><div class="goals_report__statistics__sum leads_price"><span class="goals_report_plug__fake_line" style="width: 75px;"></span></div></div><div class="goals_report__statistics__right_goals"><span class="goals_report__statistics__goal_sum leads_price"><span class="goals_report_plug__fake_line" style="width: 65px;"></span></span></div></div></div><div class="goals_report__statistics_item user_goals good_result"><label class="goals_report__statistics__label">'),
                    e.append(twig.filter.escape(this.env_, twig.attr(twig.attr(twig.attr("lang"in i ? i.lang : "", "fake"), "users"), 3, void 0, "array"), "light_escape", null, !0)),
                    e.append('</label><div class="goals_report__statistics__line"><div class="goals_report__statistics__fill_line" style="width: 94%"><div class="goals_report__statistics__sum leads_price"><span class="goals_report_plug__fake_line" style="width: 65px;"></span></div><div class="goals_report__statistics__goal_sum leads_price"><span class="goals_report_plug__fake_line" style="width: 45px;"></span></div></div></div></div></div><div class="goals_report__statistics__flag_wrapper"><div class="goals_report__statistics__flag" style="left: 37.5%;"><div class="goals_report__statistics__flag__info"><div class="goals_report__statistics__flag__today"><span class="goals_report_plug__fake_line" style="width: 64px;"></span></div><div class="goals_report__statistics__flag__days"><div class="goals_report__statistics__flag__days_now"><span class="goals_report_plug__fake_line" style="width: 76px;"></span></div></div></div></div></div></div></div></div>'),
                    s.append(twig.spaceless(e.toString())),
                    e = s
                }
                ,
                e.prototype.block_page_description = function(t, e, i) {
                    i = void 0 === i ? {} : i,
                    t.append(twig.filter.escape(this.env_, twig.attr(twig.attr("lang"in e ? e.lang : "", "page"), "description"), "light_escape", null, !0))
                }
                ,
                e.prototype.block_button_to_pay = function(e, i, a) {
                    a = void 0 === a ? {} : a,
                    e.append('<div class="goals_plug__pay_button"><a href="/settings/pay/" class="js-navigate-link">'),
                    new (t._get("interface/controls/button.twig"))(this.env_).render_(e, twig.extend({}, i, {
                        class_name: "button-input_blue goals_report__limit_button",
                        text: twig.attr(twig.attr(twig.attr("lang"in i ? i.lang : "", "page"), "limit"), "button_text")
                    })),
                    e.append('</a></div><div class="goals_plug__limit_tape">'),
                    e.append(twig.filter.escape(this.env_, twig.attr(twig.attr(twig.attr("lang"in i ? i.lang : "", "page"), "limit"), "ribbon_text"), "light_escape", null, !0)),
                    e.append("</div>")
                }
                ,
                e.prototype.getTemplateName = function() {
                    return "interface_reports_goals_plugs_base"
                }
                ,
                e.prototype.isTraitable = function() {
                    return !1
                }
                ,
                t._add("interface/reports/goals/plugs/base", e)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var e = function(t) {
                    twig.Template.call(this, t),
                    this.setBlocks({
                        button_to_pay: twig.bind(this.block_button_to_pay, this)
                    })
                };
                twig.inherits(e, twig.Template),
                e.prototype.getParent_ = function(e) {
                    return t._get("interface/reports/goals/plugs/base.twig")
                }
                ,
                e.prototype.render_ = function(t, e, i) {
                    i = void 0 === i ? {} : i,
                    this.getParent(e).render_(t, e, twig.extend({}, this.getBlocks(), i))
                }
                ,
                e.prototype.block_button_to_pay = function(t, e, i) {
                    i = void 0 === i ? {} : i
                }
                ,
                e.prototype.getTemplateName = function() {
                    return "interface_reports_goals_plugs_empty"
                }
                ,
                e.prototype.isTraitable = function() {
                    return !1
                }
                ,
                t._add("interface/reports/goals/plugs/empty", e)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var e = function(t) {
                    twig.Template.call(this, t),
                    this.setBlocks({
                        head_button: twig.bind(this.block_head_button, this),
                        page_description: twig.bind(this.block_page_description, this)
                    })
                };
                twig.inherits(e, twig.Template),
                e.prototype.getParent_ = function(e) {
                    return t._get("interface/reports/goals/plugs/base.twig")
                }
                ,
                e.prototype.render_ = function(t, e, i) {
                    i = void 0 === i ? {} : i,
                    this.getParent(e).render_(t, e, twig.extend({}, this.getBlocks(), i))
                }
                ,
                e.prototype.block_head_button = function(e, i, a) {
                    a = void 0 === a ? {} : a,
                    e.append('<div class="goals_report__settings_button"><div class="goals_report__overlay_plug"></div><a class="js-navigate-link" href="/stats/goals/settings/">'),
                    new (t._get("interface/controls/button.twig"))(this.env_).render_(e, twig.extend({}, i, {
                        class_name: "js-goals-settings",
                        text: twig.attr(twig.attr("lang"in i ? i.lang : "", "page"), "set_goals"),
                        icon_class_name: "icon-gear icon-inline"
                    })),
                    e.append("</a></div>")
                }
                ,
                e.prototype.block_page_description = function(t, e, i) {
                    i = void 0 === i ? {} : i,
                    t.append('<div class="goals_plug__description_text">'),
                    t.append(twig.filter.escape(this.env_, twig.attr(twig.attr(twig.attr("lang"in e ? e.lang : "", "page"), "limit"), "description"), "light_escape", null, !0)),
                    t.append("</div>")
                }
                ,
                e.prototype.getTemplateName = function() {
                    return "interface_reports_goals_plugs_pay"
                }
                ,
                e.prototype.isTraitable = function() {
                    return !1
                }
                ,
                t._add("interface/reports/goals/plugs/pay", e)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var e = function(t) {
                    twig.Template.call(this, t),
                    this.setBlocks({
                        head_button: twig.bind(this.block_head_button, this),
                        button_to_pay: twig.bind(this.block_button_to_pay, this)
                    })
                };
                twig.inherits(e, twig.Template),
                e.prototype.getParent_ = function(e) {
                    return t._get("interface/reports/goals/plugs/base.twig")
                }
                ,
                e.prototype.render_ = function(t, e, i) {
                    i = void 0 === i ? {} : i,
                    this.getParent(e).render_(t, e, twig.extend({}, this.getBlocks(), i))
                }
                ,
                e.prototype.block_head_button = function(e, i, a) {
                    a = void 0 === a ? {} : a,
                    e.append('<div class="goals_report__settings_button"><div class="goals_report__overlay_plug"></div><a class="js-navigate-link" href="/stats/goals/settings/">'),
                    new (t._get("interface/controls/button.twig"))(this.env_).render_(e, twig.extend({}, i, {
                        class_name: "js-goals-settings",
                        text: twig.attr(twig.attr("lang"in i ? i.lang : "", "page"), "set_goals"),
                        icon_class_name: "icon-gear icon-inline"
                    })),
                    e.append("</a></div>")
                }
                ,
                e.prototype.block_button_to_pay = function(t, e, i) {
                    i = void 0 === i ? {} : i
                }
                ,
                e.prototype.getTemplateName = function() {
                    return "interface_reports_goals_plugs_rights"
                }
                ,
                e.prototype.isTraitable = function() {
                    return !1
                }
                ,
                t._add("interface/reports/goals/plugs/rights", e)
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
                e.prototype.render_ = function(e, i, a) {
                    a = void 0 === a ? {} : a,
                    e.append('<div class="dashboard-tile__item dashboard-tile__item_white dashboard-tile__item_analytics dashboard-tile__item_flat lt-analytics__purchases-by-managers r-consolidated__contacts-tile"><h4 class="dashboard-tile__item-title"><span class="dashboard-tile__item-title-txt">'),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Contacts"), "light_escape", null, !0)),
                    e.append('</span></h4><div class="js-chart-content lt-analytics__purchases-by-managers-wrapper r-consolidated__contacts-tile-wrapper" '),
                    "not_enough_data"in i && i.not_enough_data && e.append('style="opacity: 0.2"'),
                    e.append('><div class="column analytics__consolidated__pie">'),
                    ("total"in i && i.total || "is_loading"in i && i.is_loading) && (e.append('<canvas class="js-pie_chart" width="250" height="250"></canvas><span class="js-pie-value-wrapper lt-analytics__purchases-by-managers-circle big__circle">'),
                    "is_loading"in i && i.is_loading ? (e.append('<div class="lt-analytics__contacts-plug-total card-plug__animation" style="width: '),
                    e.append(twig.filter.escape(this.env_, Number(120) + Number(twig.functions.random(this.env_, 60)), "light_escape", null, !0)),
                    e.append('px;"></div>')) : (e.append('<div class="js-pie-value-count lt-analytics__purchases-by-managers-circle-big-sum">'),
                    e.append(twig.filter.escape(this.env_, "total"in i ? i.total : "", "light_escape", null, !0)),
                    e.append("</div>")),
                    e.append('<div class="lt-analytics__purchases-by-managers-circle-avg-caption">'),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "All contacts"), "light_escape", null, !0)),
                    e.append("</div></span>")),
                    e.append('<div class="r-consolidated__contacts-tile-percents" '),
                    "is_loading"in i && i.is_loading && e.append('style="margin-top: 11px;"'),
                    e.append(">"),
                    i.percents = "percents"in i && i.percents ? "percents"in i ? i.percents : "" : twig.range(1, 2),
                    i._parent = i;
                    var s = "percents"in i ? i.percents : "";
                    twig.forEach(s, (function(t, a) {
                        i._key = a,
                        i.item = t,
                        e.append('<div class="lt-analytics__purchases-by-managers-item js-item"><div class="lt-analytics__purchases-by-managers-item-count">'),
                        "is_loading"in i && i.is_loading ? e.append('<div class="lt-analytics__contacts-plug-percent card-plug__animation"></div>') : (e.append('<span class="lt-analytics__purchases-by-managers-item-percent js-item-percent">'),
                        e.append(twig.filter.escape(this.env_, twig.attr("item"in i ? i.item : "", "percent"), "light_escape", null, !0)),
                        e.append("%</span>")),
                        e.append('</div><div class="lt-analytics__purchases-by-managers-item-data"><div class="lt-analytics__purchases-by-managers-item-bg js-item-bg" style="background-color: #daddde"></div><div class="lt-analytics__purchases-by-managers-item-title">'),
                        "is_loading"in i && i.is_loading ? (e.append('<div class="lt-analytics__contacts-plug-count card-plug__animation" style="width: '),
                        e.append(twig.filter.escape(this.env_, Number(60) + Number(twig.functions.random(this.env_, 20)), "light_escape", null, !0)),
                        e.append('px;"></div>')) : (e.append(twig.filter.escape(this.env_, twig.filter.capitalize(this.env_, twig.attr("item"in i ? i.item : "", "title")), "light_escape", null, !0)),
                        e.append(":")),
                        e.append('</div><div class="lt-analytics__purchases-by-managers-item-subtitle">'),
                        "is_loading"in i && i.is_loading ? (e.append('<div class="lt-analytics__contacts-plug-count card-plug__animation" style="width: '),
                        e.append(twig.filter.escape(this.env_, Number(40) + Number(twig.functions.random(this.env_, 20)), "light_escape", null, !0)),
                        e.append('px;"></div>')) : (e.append('<a href="'),
                        e.append(twig.filter.escape(this.env_, twig.attr("item"in i ? i.item : "", "link"), "light_escape", null, !0)),
                        e.append('" class="js-navigate-link">'),
                        e.append(twig.filter.escape(this.env_, twig.attr("item"in i ? i.item : "", "count"), "light_escape", null, !0)),
                        e.append("</a>")),
                        e.append("</div></div></div>")
                    }
                    ), this),
                    e.append('</div></div><div class="column lt-analytics__purchases-by-managers-items analytics__consolidated__data">'),
                    i.percentage = 0,
                    i.i = 0,
                    i.items = "items"in i && i.items ? "items"in i ? i.items : "" : twig.range(1, 6),
                    ("total"in i && i.total || "is_loading"in i && i.is_loading) && (e.append('<div class="r-consolidated__contacts-tile-caption">'),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Contacts by managers"), "light_escape", null, !0)),
                    e.append("</div>")),
                    i._parent = i,
                    s = "items"in i ? i.items : "",
                    twig.forEach(s, (function(t, a) {
                        i._key = a,
                        i.item = t,
                        "item"in i && i.item && (i.i = Number("i"in i ? i.i : "") + Number(1),
                        e.append('<div class="lt-analytics__purchases-by-managers-item js-item '),
                        ("i"in i ? i.i : "") > 6 && (e.append("hidden"),
                        i.percentage = Number("percentage"in i ? i.percentage : "") + Number(twig.attr("item"in i ? i.item : "", "percentage"))),
                        e.append('"><div class="lt-analytics__purchases-by-managers-item-count">'),
                        "is_loading"in i && i.is_loading ? (e.append('<div class="lt-analytics__contacts-plug-item-percent card-plug__animation" style="width: '),
                        e.append(twig.filter.escape(this.env_, Number(40) + Number(twig.functions.random(this.env_, 20)), "light_escape", null, !0)),
                        e.append('px;"></div>')) : (e.append('<span class="lt-analytics__purchases-by-managers-item-percent"><a href="'),
                        e.append(twig.filter.escape(this.env_, twig.attr("item"in i ? i.item : "", "link"), "light_escape", null, !0)),
                        e.append('" class="js-navigate-link">'),
                        e.append(twig.filter.escape(this.env_, twig.attr("item"in i ? i.item : "", "percentage"), "light_escape", null, !0)),
                        e.append("%</a></span>")),
                        e.append('</div><div class="lt-analytics__purchases-by-managers-item-data"><div class="lt-analytics__purchases-by-managers-item-bg" style="background-color: '),
                        twig.attr("lead"in i ? i.lead : "", "color") ? e.append(twig.filter.escape(this.env_, twig.attr("lead"in i ? i.lead : "", "color"), "light_escape", null, !0)) : e.append("#daddde"),
                        e.append('"></div>'),
                        "is_loading"in i && i.is_loading ? (e.append('<div class="lt-analytics__contacts-plug-item-title card-plug__animation" style="width: '),
                        e.append(twig.filter.escape(this.env_, Number(100) + Number(twig.functions.random(this.env_, 50)), "light_escape", null, !0)),
                        e.append('px;"></div><div class="lt-analytics__contacts-plug-item-subtitle card-plug__animation" style="width: '),
                        e.append(twig.filter.escape(this.env_, Number(70) + Number(twig.functions.random(this.env_, 30)), "light_escape", null, !0)),
                        e.append('px;"></div>')) : (e.append('<div class="lt-analytics__purchases-by-managers-item-title"><a href="'),
                        e.append(twig.filter.escape(this.env_, twig.attr("item"in i ? i.item : "", "link"), "light_escape", null, !0)),
                        e.append('" class="js-navigate-link">'),
                        e.append(twig.filter.escape(this.env_, twig.attr("item"in i ? i.item : "", "title"), "light_escape", null, !0)),
                        e.append('</a></div><div class="lt-analytics__purchases-by-managers-item-subtitle"><a href="'),
                        e.append(twig.filter.escape(this.env_, twig.attr("item"in i ? i.item : "", "link"), "light_escape", null, !0)),
                        e.append('" class="js-navigate-link">'),
                        e.append(twig.filter.escape(this.env_, twig.attr("item"in i ? i.item : "", "count"), "light_escape", null, !0)),
                        e.append(" "),
                        e.append(twig.filter.escape(this.env_, this.env_.filter("numeral", this.env_.filter("i18n", "entity_lang"in i ? i.entity_lang : ""), twig.attr("item"in i ? i.item : "", "count")), "light_escape", null, !0)),
                        e.append(" "),
                        twig.attr("item"in i ? i.item : "", "sum") && e.append(twig.filter.escape(this.env_, this.env_.filter("price", twig.attr("item"in i ? i.item : "", "sum")), "light_escape", null, !0)),
                        e.append("</a></div>")),
                        e.append("</div></div>"))
                    }
                    ), this),
                    ("percentage"in i ? i.percentage : "") > 0 && (e.append('<div class="lt-analytics__purchases-by-managers-item js-item"><div class="lt-analytics__purchases-by-managers-item-count"><span class="lt-analytics__purchases-by-managers-item-percent">'),
                    e.append(twig.filter.escape(this.env_, "percentage"in i ? i.percentage : "", "light_escape", null, !0)),
                    e.append('%</span></div><div class="lt-analytics__purchases-by-managers-item-data"><div class="lt-analytics__purchases-by-managers-item-bg" style="background-color: #daddde"></div><div class="lt-analytics__purchases-by-managers-item-title"><span class="js-show-parent-all">'),
                    e.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "Rest"), "light_escape", null, !0)),
                    e.append("</span></div></div></div>")),
                    e.append("</div></div>"),
                    "not_enough_data"in i && i.not_enough_data && new (t._get("interface/reports/plug.twig"))(this.env_).render_(e, i),
                    e.append("</div>")
                }
                ,
                e.prototype.getTemplateName = function() {
                    return "interface_reports_consolidated_tiles_contacts"
                }
                ,
                e.prototype.isTraitable = function() {
                    return !1
                }
                ,
                t._add("interface/reports/consolidated/tiles/contacts", e)
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
                e.prototype.render_ = function(e, i, a) {
                    a = void 0 === a ? {} : a,
                    e.append('<div class="dashboard-tile__item dashboard-tile__item_analytics dashboard-tile__item_flat dashboard-tile__item_transparent r-consolidated__line-chart-wrapper" id="statistics__graph"><h4 class="dashboard-tile__item-title"><span class="dashboard-tile__item-title-txt">'),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Leads"), "light_escape", null, !0)),
                    e.append('</span></h4><div class="r-consolidated__line-chart-toggler">'),
                    new (t._get("interface/controls/line_toggler.twig"))(this.env_).render_(e, twig.extend({}, i, {
                        name: "leads_chart_period",
                        items: [{
                            text: twig.attr("lang"in i ? i.lang : "", "report_day"),
                            value: "week"
                        }, {
                            text: twig.attr("lang"in i ? i.lang : "", "report_week"),
                            value: "month3",
                            selected: !0
                        }, {
                            text: twig.attr("lang"in i ? i.lang : "", "report_month"),
                            value: "year"
                        }]
                    })),
                    e.append('</div><div class="r-consolidated__line-chart js-chart-container" style="opacity: 0.2">'),
                    new (t._get("interface/reports/consolidated/tiles/leads_line_inner.twig"))(this.env_).render_(e, i),
                    e.append("</div>"),
                    ("not_enough_data"in i && i.not_enough_data || "is_loading"in i && i.is_loading) && (i.params = {
                        is_load: !("not_enough_data"in i) || !i.not_enough_data,
                        class_name: "not_enough_data"in i && i.not_enough_data ? "js-not-enough-data-plug not-enough-data-plug" : "js-spinner-plug"
                    },
                    new (t._get("interface/reports/plug.twig"))(this.env_).render_(e, twig.extend({}, i, "params"in i ? i.params : ""))),
                    e.append("</div>")
                }
                ,
                e.prototype.getTemplateName = function() {
                    return "interface_reports_consolidated_tiles_leads_line"
                }
                ,
                e.prototype.isTraitable = function() {
                    return !1
                }
                ,
                t._add("interface/reports/consolidated/tiles/leads_line", e)
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
                    t.append('<canvas id="line_chart" height="345"></canvas><div class="statistics__graph__data hidden"><ul class="statistics__graph__new">'),
                    e._parent = e;
                    var a = twig.attr("new_leads"in e ? e.new_leads : "", "data");
                    twig.forEach(a, (function(i, a) {
                        e.key = a,
                        e.data = i,
                        t.append('<li class="value" data-item="'),
                        t.append(twig.filter.escape(this.env_, twig.attr(twig.attr("new_leads"in e ? e.new_leads : "", "sum"), "key"in e ? e.key : "", void 0, "array"), "light_escape", null, !0)),
                        t.append('">'),
                        t.append(twig.filter.escape(this.env_, "data"in e ? e.data : "", "light_escape", null, !0)),
                        t.append("</li>")
                    }
                    ), this),
                    t.append('</ul><ul class="statistics__graph__won">'),
                    e._parent = e,
                    a = twig.attr("won_leads"in e ? e.won_leads : "", "data"),
                    twig.forEach(a, (function(i, a) {
                        e.key = a,
                        e.data = i,
                        t.append('<li class="value" data-item="'),
                        t.append(twig.filter.escape(this.env_, twig.attr(twig.attr("won_leads"in e ? e.won_leads : "", "sum"), "key"in e ? e.key : "", void 0, "array"), "light_escape", null, !0)),
                        t.append('">'),
                        t.append(twig.filter.escape(this.env_, "data"in e ? e.data : "", "light_escape", null, !0)),
                        t.append("</li>")
                    }
                    ), this),
                    t.append('</ul><ul class="statistics__graph__dates">'),
                    e._parent = e,
                    a = twig.attr("new_leads"in e ? e.new_leads : "", "labels"),
                    twig.forEach(a, (function(i, a) {
                        e._key = a,
                        e.label = i,
                        t.append('<li class="value" data-item="'),
                        t.append(twig.filter.escape(this.env_, twig.attr(twig.attr("new_leads"in e ? e.new_leads : "", "sum"), "key"in e ? e.key : "", void 0, "array"), "light_escape", null, !0)),
                        t.append('">'),
                        t.append(twig.filter.escape(this.env_, "label"in e ? e.label : "", "light_escape", null, !0)),
                        t.append("</li>")
                    }
                    ), this),
                    t.append("</ul></div>")
                }
                ,
                e.prototype.getTemplateName = function() {
                    return "interface_reports_consolidated_tiles_leads_line_inner"
                }
                ,
                e.prototype.isTraitable = function() {
                    return !1
                }
                ,
                t._add("interface/reports/consolidated/tiles/leads_line_inner", e)
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
                e.prototype.render_ = function(e, i, a) {
                    a = void 0 === a ? {} : a,
                    e.append('<h4 class="dashboard-tile__item-title"><span class="dashboard-tile__item-title-txt">'),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Leads"), "light_escape", null, !0)),
                    e.append("</span></h4>"),
                    new (t._get("interface/reports/consolidated/tiles/leads_pie/pie.twig"))(this.env_).render_(e, twig.extend({}, i, {
                        params: "chart"in i ? i.chart : "",
                        budget: twig.attr(twig.attr("chart"in i ? i.chart : "", "total"), "budget_str"),
                        pie_size: 277,
                        is_visible: !0,
                        is_loading: ("plug"in i ? i.plug : "") && !("not_enough_data"in i && i.not_enough_data),
                        not_enough_data: "not_enough_data"in i ? i.not_enough_data : ""
                    })),
                    "not_enough_data"in i && i.not_enough_data && new (t._get("interface/reports/plug.twig"))(this.env_).render_(e, twig.extend({}, i, {
                        class_name: "js-not-enough-data-plug"
                    }))
                }
                ,
                e.prototype.getTemplateName = function() {
                    return "interface_reports_consolidated_tiles_leads_pie"
                }
                ,
                e.prototype.isTraitable = function() {
                    return !1
                }
                ,
                t._add("interface/reports/consolidated/tiles/leads_pie", e)
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
                e.prototype.render_ = function(e, i, a) {
                    a = void 0 === a ? {} : a,
                    e.append('<h4 class="dashboard-tile__item-title"><span class="dashboard-tile__item-title-txt">'),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Purchases by each user"), "light_escape", null, !0)),
                    e.append('</span></h4><div class="js-chart-content lt-analytics__purchases-by-managers-wrapper" '),
                    "not_enough_data"in i && i.not_enough_data && e.append('style="opacity: 0.2"'),
                    e.append('><div class="column analytics__consolidated__pie"><canvas class="js-pie_chart" width="277" height="277"></canvas><span class="js-pie-purchases-wrapper lt-analytics__purchases-by-managers-circle big__circle"><div class="lt-analytics__purchases-by-managers-circle-big-caption">'),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Total customers"), "light_escape", null, !0)),
                    e.append("</div>"),
                    "is_loading"in i && i.is_loading ? (e.append('<div class="lt-analytics__purchases-by-managers-plug-total card-plug__animation" style="width: '),
                    e.append(twig.filter.escape(this.env_, Number(150) + Number(twig.functions.random(this.env_, 50)), "light_escape", null, !0)),
                    e.append('px;"></div>')) : (e.append('<div class="js-pie-purchases-count lt-analytics__purchases-by-managers-circle-big-sum">'),
                    e.append(twig.filter.escape(this.env_, "total_customers"in i ? i.total_customers : "", "light_escape", null, !0)),
                    e.append("</div>")),
                    e.append('<div class="lt-analytics__purchases-by-managers-circle-avg-caption">'),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Average purchase amount"), "light_escape", null, !0)),
                    e.append("</div>"),
                    "is_loading"in i && i.is_loading ? (e.append('<div class="lt-analytics__purchases-by-managers-plug-average card-plug__animation" style="width: '),
                    e.append(twig.filter.escape(this.env_, Number(60) + Number(twig.functions.random(this.env_, 30)), "light_escape", null, !0)),
                    e.append('px;"></div>')) : (e.append('<div class="lt-analytics__purchases-by-managers-circle-avg-sum">'),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("price", "avg_purchase_sum"in i ? i.avg_purchase_sum : ""), "light_escape", null, !0)),
                    e.append("</div>")),
                    e.append('</span></div><div class="column lt-analytics__purchases-by-managers-items analytics__consolidated__data">'),
                    i.percentage = 0,
                    i.i = 0,
                    i.by_users = "by_users"in i && i.by_users ? "by_users"in i ? i.by_users : "" : twig.range(1, 5),
                    i._parent = i;
                    var s = "by_users"in i ? i.by_users : "";
                    twig.forEach(s, (function(t, a) {
                        i._key = a,
                        i.item = t,
                        "item"in i && i.item && (i.i = Number("i"in i ? i.i : "") + Number(1),
                        e.append('<div class="lt-analytics__purchases-by-managers-item '),
                        ("i"in i ? i.i : "") > 6 && (e.append("hidden"),
                        i.percentage = Number("percentage"in i ? i.percentage : "") + Number(twig.attr("item"in i ? i.item : "", "percentage"))),
                        e.append('"><div class="lt-analytics__purchases-by-managers-item-count">'),
                        "is_loading"in i && i.is_loading ? e.append('<div class="lt-analytics__purchases-by-managers-plug-percent card-plug__animation"></div>') : (e.append('<span class="lt-analytics__purchases-by-managers-item-percent">'),
                        e.append(twig.filter.escape(this.env_, twig.attr("item"in i ? i.item : "", "percentage"), "light_escape", null, !0)),
                        e.append("%</span>")),
                        e.append('</div><div class="lt-analytics__purchases-by-managers-item-data"><div class="lt-analytics__purchases-by-managers-item-bg" style="background-color: '),
                        twig.attr("lead"in i ? i.lead : "", "color") ? e.append(twig.filter.escape(this.env_, twig.attr("lead"in i ? i.lead : "", "color"), "light_escape", null, !0)) : e.append("#daddde"),
                        e.append('"></div>'),
                        "is_loading"in i && i.is_loading ? (e.append('<div class="lt-analytics__purchases-by-managers-plug-title card-plug__animation" style="width: '),
                        e.append(twig.filter.escape(this.env_, Number(100) + Number(twig.functions.random(this.env_, 50)), "light_escape", null, !0)),
                        e.append('px;"></div><div class="lt-analytics__purchases-by-managers-plug-subtitle card-plug__animation" style="width: '),
                        e.append(twig.filter.escape(this.env_, Number(130) + Number(twig.functions.random(this.env_, 50)), "light_escape", null, !0)),
                        e.append('px;"></div>')) : (e.append('<div class="lt-analytics__purchases-by-managers-item-title">'),
                        e.append(twig.filter.escape(this.env_, twig.attr("item"in i ? i.item : "", "user_name"), "light_escape", null, !0)),
                        e.append('</div><div class="lt-analytics__purchases-by-managers-item-subtitle">'),
                        e.append(twig.filter.escape(this.env_, twig.attr("item"in i ? i.item : "", "count"), "light_escape", null, !0)),
                        e.append(" "),
                        e.append(twig.filter.escape(this.env_, this.env_.filter("numeral", this.env_.filter("i18n", "purchase,purchases,purchases"), twig.attr("item"in i ? i.item : "", "count")), "light_escape", null, !0)),
                        e.append(" "),
                        e.append(twig.filter.escape(this.env_, this.env_.filter("price", twig.attr("item"in i ? i.item : "", "sum")), "light_escape", null, !0)),
                        e.append("</div>")),
                        e.append("</div></div>"))
                    }
                    ), this),
                    ("percentage"in i ? i.percentage : "") > 0 && (e.append('<div class="lt-analytics__purchases-by-managers-item"><div class="lt-analytics__purchases-by-managers-item-count"><span class="lt-analytics__purchases-by-managers-item-percent">'),
                    e.append(twig.filter.escape(this.env_, "percentage"in i ? i.percentage : "", "light_escape", null, !0)),
                    e.append('%</span></div><div class="lt-analytics__purchases-by-managers-item-data"><div class="lt-analytics__purchases-by-managers-item-bg" style="background-color: #daddde"></div><div class="lt-analytics__purchases-by-managers-item-title"><span class="js-show-parent-all">'),
                    e.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "Rest"), "light_escape", null, !0)),
                    e.append(" "),
                    e.append(twig.filter.escape(this.env_, twig.filter.lower(this.env_, this.env_.filter("i18n", "Managers")), "light_escape", null, !0)),
                    e.append("</span></div></div></div>")),
                    e.append("</div></div>"),
                    "not_enough_data"in i && i.not_enough_data && new (t._get("interface/reports/plug.twig"))(this.env_).render_(e, i)
                }
                ,
                e.prototype.getTemplateName = function() {
                    return "interface_reports_consolidated_tiles_managers_purchases"
                }
                ,
                e.prototype.isTraitable = function() {
                    return !1
                }
                ,
                t._add("interface/reports/consolidated/tiles/managers_purchases", e)
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
                e.prototype.render_ = function(e, i, a) {
                    a = void 0 === a ? {} : a,
                    e.append('<h4 class="dashboard-tile__item-title"><span class="dashboard-tile__item-title-txt">'),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Purchases"), "light_escape", null, !0)),
                    e.append('</span></h4><div class="lt-analytics__purchases-table" '),
                    "not_enough_data"in i && i.not_enough_data && e.append('style="opacity: 0.2"'),
                    e.append(">"),
                    i.periods = "periods"in i && i.periods ? "periods"in i ? i.periods : "" : {
                        next_date: "",
                        today: "",
                        "": ""
                    },
                    i._parent = i;
                    var s = "periods"in i ? i.periods : ""
                      , n = {
                        index0: 0,
                        index: 1,
                        first: !0
                    };
                    if (twig.countable(s)) {
                        var l = twig.count(s);
                        n.revindex0 = l - 1,
                        n.revindex = l,
                        n.length = l,
                        n.last = 1 === l
                    }
                    twig.forEach(s, (function(t, a) {
                        i.key = a,
                        i.period = t,
                        e.append('<div class="lt-analytics__purchases-item"><span class="lt-analytics__purchases-header">'),
                        "next_date" == ("key"in i ? i.key : "") ? (e.append(twig.filter.escape(this.env_, twig.filter.capitalize(this.env_, twig.attr("lang"in i ? i.lang : "", "Within")), "light_escape", null, !0)),
                        e.append(" "),
                        e.append(twig.filter.escape(this.env_, twig.attr("period"in i ? i.period : "", "days"), "light_escape", null, !0)),
                        e.append(" "),
                        e.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "marker_days"), "light_escape", null, !0))) : "today" == ("key"in i ? i.key : "") ? e.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Expected Today"), "light_escape", null, !0)) : e.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Did not purchase"), "light_escape", null, !0)),
                        e.append('</span><div class="lt-analytics__purchases-content"><span class="l-lift x-border__'),
                        e.append(twig.filter.escape(this.env_, twig.attr(n, "index"), "light_escape", null, !0)),
                        e.append('">'),
                        "is_loading"in i && i.is_loading ? (e.append('<div class="lt-analytics__purchases-plug-count card-plug__animation" style="width: '),
                        e.append(twig.filter.escape(this.env_, Number(60) + Number(twig.functions.random(this.env_, 30)), "light_escape", null, !0)),
                        e.append('px;"></div><div class="lt-analytics__purchases-plug-amount card-plug__animation" style="width: '),
                        e.append(twig.filter.escape(this.env_, Number(70) + Number(twig.functions.random(this.env_, 30)), "light_escape", null, !0)),
                        e.append('px;"></div>')) : (e.append('<span class="l-items_counter"><span class="title big">'),
                        e.append(twig.filter.escape(this.env_, twig.attr("period"in i ? i.period : "", "count"), "light_escape", null, !0)),
                        e.append('</span></span><span class="l-items_price"><span class="title">'),
                        e.append(twig.filter.escape(this.env_, this.env_.filter("price", twig.attr("period"in i ? i.period : "", "next_price")), "light_escape", null, !0)),
                        e.append("</span></span>")),
                        e.append("</span></div></div>"),
                        ++n.index0,
                        ++n.index,
                        n.first = !1,
                        n.length && (--n.revindex0,
                        --n.revindex,
                        n.last = 0 === n.revindex0)
                    }
                    ), this),
                    e.append("</div>"),
                    "not_enough_data"in i && i.not_enough_data && new (t._get("interface/reports/plug.twig"))(this.env_).render_(e, i)
                }
                ,
                e.prototype.getTemplateName = function() {
                    return "interface_reports_consolidated_tiles_purchases"
                }
                ,
                e.prototype.isTraitable = function() {
                    return !1
                }
                ,
                t._add("interface/reports/consolidated/tiles/purchases", e)
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
                e.prototype.render_ = function(e, i, a) {
                    a = void 0 === a ? {} : a,
                    e.append('<div class="dashboard-tile__item dashboard-tile__item_white dashboard-tile__item_analytics dashboard-tile__item_flat lt-analytics__purchases-by-managers r-consolidated__todos-tile"><h4 class="dashboard-tile__item-title"><span class="dashboard-tile__item-title-txt">'),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Tasks"), "light_escape", null, !0)),
                    e.append('</span></h4><div class="js-chart-content lt-analytics__purchases-by-managers-wrapper r-consolidated__contacts-tile-wrapper" '),
                    "not_enough_data"in i && i.not_enough_data && e.append('style="opacity: 0.2"'),
                    e.append('><div class="column analytics__consolidated__pie">'),
                    ("total"in i && i.total || "is_loading"in i && i.is_loading) && (e.append('<canvas class="js-pie_chart" width="250" height="250"></canvas><span class="js-pie-value-wrapper lt-analytics__purchases-by-managers-circle big__circle">'),
                    "is_loading"in i && i.is_loading ? (e.append('<div class="lt-analytics__tasks-plug-total card-plug__animation" style="width: '),
                    e.append(twig.filter.escape(this.env_, Number(150) + Number(twig.functions.random(this.env_, 50)), "light_escape", null, !0)),
                    e.append('px;"></div>')) : (e.append('<div class="js-pie-value-count lt-analytics__purchases-by-managers-circle-big-sum">'),
                    e.append(twig.filter.escape(this.env_, "total"in i ? i.total : "", "light_escape", null, !0)),
                    e.append("</div>")),
                    e.append('<div class="lt-analytics__purchases-by-managers-circle-avg-caption">'),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "All todos"), "light_escape", null, !0)),
                    e.append("</div></span>")),
                    e.append('</div><div class="lt-analytics__purchases-by-managers-items analytics__consolidated__data">'),
                    i.percentage = 0,
                    i.i = 0,
                    i.by_types = "by_types"in i && i.by_types ? "by_types"in i ? i.by_types : "" : twig.range(1, 5),
                    ("total"in i && i.total || "is_loading"in i && i.is_loading) && (e.append('<div class="r-consolidated__contacts-tile-caption">'),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Todos by types"), "light_escape", null, !0)),
                    e.append("</div>")),
                    i._parent = i;
                    var s = "by_types"in i ? i.by_types : "";
                    twig.forEach(s, (function(t, a) {
                        i._key = a,
                        i.item = t,
                        "item"in i && i.item && (i.i = Number("i"in i ? i.i : "") + Number(1),
                        e.append('<div class="lt-analytics__purchases-by-managers-item js-item '),
                        ("i"in i ? i.i : "") > 6 && (e.append("hidden"),
                        i.percentage = Number("percentage"in i ? i.percentage : "") + Number(twig.attr("item"in i ? i.item : "", "percentage"))),
                        e.append('"><div class="lt-analytics__purchases-by-managers-item-count">'),
                        "is_loading"in i && i.is_loading ? (e.append('<div class="lt-analytics__tasks-plug-item-percent card-plug__animation" style="width: '),
                        e.append(twig.filter.escape(this.env_, Number(40) + Number(twig.functions.random(this.env_, 20)), "light_escape", null, !0)),
                        e.append('px;"></div>')) : (e.append('<span class="lt-analytics__purchases-by-managers-item-percent js-item-percent"><a href="'),
                        e.append(twig.filter.escape(this.env_, twig.attr("item"in i ? i.item : "", "link"), "light_escape", null, !0)),
                        e.append('" class="js-navigate-link">'),
                        e.append(twig.filter.escape(this.env_, twig.attr("item"in i ? i.item : "", "percentage"), "light_escape", null, !0)),
                        e.append("%</a></span>")),
                        e.append('</div><div class="lt-analytics__purchases-by-managers-item-data"><div class="lt-analytics__purchases-by-managers-item-bg js-item-bg" style="background-color: #daddde"></div>'),
                        "is_loading"in i && i.is_loading ? (e.append('<div class="lt-analytics__tasks-plug-item-title card-plug__animation" style="width: '),
                        e.append(twig.filter.escape(this.env_, Number(100) + Number(twig.functions.random(this.env_, 50)), "light_escape", null, !0)),
                        e.append('px;"></div><div class="lt-analytics__tasks-plug-item-subtitle card-plug__animation" style="width: '),
                        e.append(twig.filter.escape(this.env_, Number(70) + Number(twig.functions.random(this.env_, 30)), "light_escape", null, !0)),
                        e.append('px;"></div>')) : (e.append('<div class="lt-analytics__purchases-by-managers-item-title"><a href="'),
                        e.append(twig.filter.escape(this.env_, twig.attr("item"in i ? i.item : "", "link"), "light_escape", null, !0)),
                        e.append('" class="js-navigate-link">'),
                        e.append(twig.filter.escape(this.env_, twig.attr("item"in i ? i.item : "", "title"), "light_escape", null, !0)),
                        e.append('</a></div><div class="lt-analytics__purchases-by-managers-item-subtitle"><a href="'),
                        e.append(twig.filter.escape(this.env_, twig.attr("item"in i ? i.item : "", "link"), "light_escape", null, !0)),
                        e.append('" class="js-navigate-link">'),
                        e.append(twig.filter.escape(this.env_, twig.attr("item"in i ? i.item : "", "count"), "light_escape", null, !0)),
                        e.append("</a></div>")),
                        e.append("</div></div>"))
                    }
                    ), this),
                    ("percentage"in i ? i.percentage : "") > 0 && (e.append('<div class="lt-analytics__purchases-by-managers-item js-item"><div class="lt-analytics__purchases-by-managers-item-count"><span class="lt-analytics__purchases-by-managers-item-percent">'),
                    e.append(twig.filter.escape(this.env_, "percentage"in i ? i.percentage : "", "light_escape", null, !0)),
                    e.append('%</span></div><div class="lt-analytics__purchases-by-managers-item-data"><div class="lt-analytics__purchases-by-managers-item-bg" style="background-color: #daddde"></div><div class="lt-analytics__purchases-by-managers-item-title"><span class="js-show-parent-all">'),
                    e.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "Rest"), "light_escape", null, !0)),
                    e.append("</span></div></div></div>")),
                    e.append('</div><div class="lt-analytics__purchases-by-managers-items analytics__consolidated__data">'),
                    i.percentage = 0,
                    i.i = 0,
                    i.by_managers = "by_managers"in i && i.by_managers ? "by_managers"in i ? i.by_managers : "" : twig.range(1, 6),
                    ("total"in i && i.total || "is_loading"in i && i.is_loading) && (e.append('<div class="r-consolidated__contacts-tile-caption">'),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Todos by managers"), "light_escape", null, !0)),
                    e.append("</div>")),
                    i._parent = i,
                    s = "by_managers"in i ? i.by_managers : "",
                    twig.forEach(s, (function(t, a) {
                        i._key = a,
                        i.item = t,
                        "item"in i && i.item && (i.i = Number("i"in i ? i.i : "") + Number(1),
                        e.append('<div class="lt-analytics__purchases-by-managers-item js-item '),
                        ("i"in i ? i.i : "") > 6 && (e.append("hidden"),
                        i.percentage = Number("percentage"in i ? i.percentage : "") + Number(twig.attr("item"in i ? i.item : "", "percentage"))),
                        e.append('"><div class="lt-analytics__purchases-by-managers-item-count">'),
                        "is_loading"in i && i.is_loading ? (e.append('<div class="lt-analytics__tasks-plug-item-percent card-plug__animation" style="width: '),
                        e.append(twig.filter.escape(this.env_, Number(40) + Number(twig.functions.random(this.env_, 20)), "light_escape", null, !0)),
                        e.append('px;"></div>')) : (e.append('<span class="lt-analytics__purchases-by-managers-item-percent"><a href="'),
                        e.append(twig.filter.escape(this.env_, twig.attr("item"in i ? i.item : "", "link"), "light_escape", null, !0)),
                        e.append('" class="js-navigate-link">'),
                        e.append(twig.filter.escape(this.env_, twig.attr("item"in i ? i.item : "", "percentage"), "light_escape", null, !0)),
                        e.append("%</a></span>")),
                        e.append('</div><div class="lt-analytics__purchases-by-managers-item-data"><div class="lt-analytics__purchases-by-managers-item-bg" style="background-color: #daddde"></div>'),
                        "is_loading"in i && i.is_loading ? (e.append('<div class="lt-analytics__tasks-plug-item-title card-plug__animation" style="width: '),
                        e.append(twig.filter.escape(this.env_, Number(100) + Number(twig.functions.random(this.env_, 50)), "light_escape", null, !0)),
                        e.append('px;"></div><div class="lt-analytics__tasks-plug-item-subtitle card-plug__animation" style="width: '),
                        e.append(twig.filter.escape(this.env_, Number(70) + Number(twig.functions.random(this.env_, 30)), "light_escape", null, !0)),
                        e.append('px;"></div>')) : (e.append('<div class="lt-analytics__purchases-by-managers-item-title"><a href="'),
                        e.append(twig.filter.escape(this.env_, twig.attr("item"in i ? i.item : "", "link"), "light_escape", null, !0)),
                        e.append('" class="js-navigate-link">'),
                        e.append(twig.filter.escape(this.env_, twig.attr("item"in i ? i.item : "", "title"), "light_escape", null, !0)),
                        e.append('</a></div><div class="lt-analytics__purchases-by-managers-item-subtitle"><a href="'),
                        e.append(twig.filter.escape(this.env_, twig.attr("item"in i ? i.item : "", "link"), "light_escape", null, !0)),
                        e.append('" class="js-navigate-link">'),
                        e.append(twig.filter.escape(this.env_, twig.attr("item"in i ? i.item : "", "count"), "light_escape", null, !0)),
                        e.append(" "),
                        e.append(twig.filter.escape(this.env_, this.env_.filter("numeral", this.env_.filter("i18n", "entity_lang"in i ? i.entity_lang : ""), twig.attr("item"in i ? i.item : "", "count")), "light_escape", null, !0)),
                        e.append(" "),
                        twig.attr("item"in i ? i.item : "", "sum") && e.append(twig.filter.escape(this.env_, this.env_.filter("price", twig.attr("item"in i ? i.item : "", "sum")), "light_escape", null, !0)),
                        e.append("</a></div>")),
                        e.append("</div></div>"))
                    }
                    ), this),
                    ("percentage"in i ? i.percentage : "") > 0 && (e.append('<div class="lt-analytics__purchases-by-managers-item js-item"><div class="lt-analytics__purchases-by-managers-item-count"><span class="lt-analytics__purchases-by-managers-item-percent">'),
                    e.append(twig.filter.escape(this.env_, "percentage"in i ? i.percentage : "", "light_escape", null, !0)),
                    e.append('%</span></div><div class="lt-analytics__purchases-by-managers-item-data"><div class="lt-analytics__purchases-by-managers-item-bg" style="background-color: #daddde"></div><div class="lt-analytics__purchases-by-managers-item-title"><span class="js-show-parent-all">'),
                    e.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "Rest"), "light_escape", null, !0)),
                    e.append("</span></div></div></div>")),
                    e.append("</div></div>"),
                    "not_enough_data"in i && i.not_enough_data && new (t._get("interface/reports/plug.twig"))(this.env_).render_(e, i),
                    e.append("</div>")
                }
                ,
                e.prototype.getTemplateName = function() {
                    return "interface_reports_consolidated_tiles_todos"
                }
                ,
                e.prototype.isTraitable = function() {
                    return !1
                }
                ,
                t._add("interface/reports/consolidated/tiles/todos", e)
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
                e.prototype.render_ = function(e, i, a) {
                    a = void 0 === a ? {} : a,
                    e.append('<div class="dashboard-tile__item dashboard-tile__item_white dashboard-tile__item_analytics dashboard-tile__item_flat lt-analytics__purchases-by-managers"><h4 class="dashboard-tile__item-title"><span class="dashboard-tile__item-title-txt">'),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Purchases by each user"), "light_escape", null, !0)),
                    e.append('</span></h4><div class="lt-analytics__purchases-by-managers-wrapper js-customers-by-managers" '),
                    "no_data"in i && i.no_data && e.append('style="opacity: 0.2"'),
                    e.append('><div class="column analytics__consolidated__pie"><canvas class="js-pie_chart" width="277" height="277"></canvas><span class="lt-analytics__purchases-by-managers-circle big__circle"><div class="lt-analytics__purchases-by-managers-circle-big-caption">'),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Total customers"), "light_escape", null, !0)),
                    e.append('</div><div class="lt-analytics__purchases-by-managers-circle-big-sum">'),
                    e.append(twig.filter.escape(this.env_, "total_customers"in i ? i.total_customers : "", "light_escape", null, !0)),
                    e.append('</div><div class="lt-analytics__purchases-by-managers-circle-avg-caption">'),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Average purchase amount"), "light_escape", null, !0)),
                    e.append('</div><div class="lt-analytics__purchases-by-managers-circle-avg-sum">'),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("price", "avg_purchase_sum"in i ? i.avg_purchase_sum : ""), "light_escape", null, !0)),
                    e.append('</div></span></div><div class="column lt-analytics__purchases-by-managers-items analytics__consolidated__data">'),
                    i.percentage = 0,
                    i.i = 0,
                    i._parent = i;
                    var s = "by_users"in i ? i.by_users : "";
                    twig.forEach(s, (function(t, a) {
                        i._key = a,
                        i.item = t,
                        "item"in i && i.item && (i.i = Number("i"in i ? i.i : "") + Number(1),
                        e.append('<div class="lt-analytics__purchases-by-managers-item '),
                        ("i"in i ? i.i : "") > 6 && (e.append("hidden"),
                        i.percentage = Number("percentage"in i ? i.percentage : "") + Number(twig.attr("item"in i ? i.item : "", "percentage"))),
                        e.append('"><div class="lt-analytics__purchases-by-managers-item-count"><span class="lt-analytics__purchases-by-managers-item-percent">'),
                        e.append(twig.filter.escape(this.env_, twig.attr("item"in i ? i.item : "", "percentage"), "light_escape", null, !0)),
                        e.append('%</span></div><div class="lt-analytics__purchases-by-managers-item-data"><div class="lt-analytics__purchases-by-managers-item-bg" style="background-color: '),
                        twig.attr("lead"in i ? i.lead : "", "color") ? e.append(twig.filter.escape(this.env_, twig.attr("lead"in i ? i.lead : "", "color"), "light_escape", null, !0)) : e.append("#daddde"),
                        e.append('"></div><div class="lt-analytics__purchases-by-managers-item-title">'),
                        e.append(twig.filter.escape(this.env_, twig.attr("item"in i ? i.item : "", "user_name"), "light_escape", null, !0)),
                        e.append('</div><div class="lt-analytics__purchases-by-managers-item-subtitle">'),
                        e.append(twig.filter.escape(this.env_, twig.attr("item"in i ? i.item : "", "count"), "light_escape", null, !0)),
                        e.append(" "),
                        e.append(twig.filter.escape(this.env_, this.env_.filter("numeral", this.env_.filter("i18n", "purchase,purchases,purchases"), twig.attr("item"in i ? i.item : "", "count")), "light_escape", null, !0)),
                        e.append(" "),
                        e.append(twig.filter.escape(this.env_, this.env_.filter("price", twig.attr("item"in i ? i.item : "", "sum")), "light_escape", null, !0)),
                        e.append("</div></div></div>"))
                    }
                    ), this),
                    ("percentage"in i ? i.percentage : "") > 0 && (e.append('<div class="lt-analytics__purchases-by-managers-item"><div class="lt-analytics__purchases-by-managers-item-count"><span class="lt-analytics__purchases-by-managers-item-percent">'),
                    e.append(twig.filter.escape(this.env_, "percentage"in i ? i.percentage : "", "light_escape", null, !0)),
                    e.append('%</span></div><div class="lt-analytics__purchases-by-managers-item-data"><div class="lt-analytics__purchases-by-managers-item-bg" style="background-color: #daddde"></div><div class="lt-analytics__purchases-by-managers-item-title"><span class="js-show-parent-all">'),
                    e.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "Rest"), "light_escape", null, !0)),
                    e.append(" "),
                    e.append(twig.filter.escape(this.env_, twig.filter.lower(this.env_, this.env_.filter("i18n", "Managers")), "light_escape", null, !0)),
                    e.append("</span></div></div></div>")),
                    e.append("</div></div>"),
                    "no_data"in i && i.no_data && new (t._get("interface/reports/plug.twig"))(this.env_).render_(e, i),
                    e.append("</div>")
                }
                ,
                e.prototype.getTemplateName = function() {
                    return "interface_reports_customers_tiles_managers_purchases"
                }
                ,
                e.prototype.isTraitable = function() {
                    return !1
                }
                ,
                t._add("interface/reports/customers/tiles/managers_purchases", e)
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
                e.prototype.render_ = function(e, i, a) {
                    a = void 0 === a ? {} : a,
                    i.all_count = twig.filter.length(this.env_, "count"in i ? i.count : ""),
                    e.append('<div class="dashboard-tile__item dashboard-tile__item_analytics dashboard-tile__item_white dashboard-tile__item_flat lt-analytics__customers-pipeline"><h4 class="dashboard-tile__item-title"><span class="dashboard-tile__item-title-txt">'),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Customers"), "light_escape", null, !0)),
                    e.append('</span></h4><div class="lt-analytics__customers-pipeline-wrapper" '),
                    "count"in i && i.count || e.append('style="opacity: 0.2" '),
                    e.append('><div class="lt-analytics__customers-pipeline-row"><div class="lt-analytics__customers-pipeline-left">'),
                    i._parent = i;
                    var s = "count"in i ? i.count : ""
                      , n = {
                        index0: 0,
                        index: 1,
                        first: !0
                    };
                    if (twig.countable(s)) {
                        var l = twig.count(s);
                        n.revindex0 = l - 1,
                        n.revindex = l,
                        n.length = l,
                        n.last = 1 === l
                    }
                    twig.forEach(s, (function(t, a) {
                        i.key = a,
                        i.duration = t,
                        e.append('<div class="lt-analytics__customers-pipeline-item lt-analytics__customers-pipeline-item_left '),
                        ("key"in i ? i.key : "") > 6 && e.append("hidden"),
                        e.append('"><div class="lt-analytics__customers-pipeline-item-inner lt-analytics__customers-pipeline-item-inner_left '),
                        (6 == ("key"in i ? i.key : "") || twig.attr(n, "last")) && e.append("lt-analytics__customers-pipeline-item-inner_left-last"),
                        e.append('"><div class="lt-analytics__customers-pipeline-item-title" '),
                        0 == twig.attr("duration"in i ? i.duration : "", "avg_period") && e.append('style="left:5px"'),
                        e.append(">"),
                        e.append(twig.filter.escape(this.env_, this.env_.filter("round", twig.attr("duration"in i ? i.duration : "", "avg_period")), "light_escape", null, !0)),
                        e.append(" "),
                        e.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "marker_days"), "light_escape", null, !0)),
                        e.append("</div></div></div>"),
                        ++n.index0,
                        ++n.index,
                        n.first = !1,
                        n.length && (--n.revindex0,
                        --n.revindex,
                        n.last = 0 === n.revindex0)
                    }
                    ), this),
                    e.append('</div><div class="lt-analytics__customers-pipeline-right">'),
                    i.other_percentage = 0,
                    i._parent = i,
                    s = "count"in i ? i.count : "",
                    n = {
                        index0: 0,
                        index: 1,
                        first: !0
                    },
                    twig.countable(s) && (l = twig.count(s),
                    n.revindex0 = l - 1,
                    n.revindex = l,
                    n.length = l,
                    n.last = 1 === l),
                    twig.forEach(s, (function(t, a) {
                        i.key = a,
                        i.purchases = t,
                        twig.attr(n, "last") || (i.percent = twig.attr("purchases"in i ? i.purchases : "", "percentage"),
                        e.append('<div class="lt-analytics__customers-pipeline-item '),
                        ("key"in i ? i.key : "") > 6 && (e.append("hidden"),
                        i.other_percentage = Number("other_percentage"in i ? i.other_percentage : "") + Number("percent"in i ? i.percent : "")),
                        e.append('"><div class="lt-analytics__customers-pipeline-item-inner_right"><div class="lt-analytics__customers-pipeline-item-half lt-analytics__customers-pipeline-item-half_first"><span class="percent__graph" style="width: 0;"><span class="percent">'),
                        0 != ("percent"in i ? i.percent : "") ? e.append(twig.filter.escape(this.env_, "percent"in i ? i.percent : "", "light_escape", null, !0)) : e.append(0),
                        e.append('%</span><span class="decoration"></span></span></div><div class="lt-analytics__customers-pipeline-item-half lt-analytics__customers-pipeline-item-half_last"><div class="subtitle">'),
                        e.append(twig.filter.escape(this.env_, twig.attr("purchases"in i ? i.purchases : "", "transactions_count"), "light_escape", null, !0)),
                        e.append(" "),
                        e.append(twig.filter.escape(this.env_, this.env_.filter("numeral", this.env_.filter("i18n", "purchase,purchases,purchases"), twig.attr("purchases"in i ? i.purchases : "", "transactions_count")), "light_escape", null, !0)),
                        e.append('</div><div class="subvalue">'),
                        twig.attr("purchases"in i ? i.purchases : "", "customers_count") ? e.append(twig.filter.escape(this.env_, twig.attr("purchases"in i ? i.purchases : "", "customers_count"), "light_escape", null, !0)) : e.append(0),
                        e.append(" "),
                        e.append(twig.filter.escape(this.env_, this.env_.filter("numeral", this.env_.filter("i18n", "customer,customers,customers"), twig.attr("purchases"in i ? i.purchases : "", "customers_count")), "light_escape", null, !0)),
                        e.append(" "),
                        e.append(twig.filter.escape(this.env_, this.env_.filter("price", twig.attr("purchases"in i ? i.purchases : "", "sum")), "light_escape", null, !0)),
                        e.append("</div></div></div></div>")),
                        ++n.index0,
                        ++n.index,
                        n.first = !1,
                        n.length && (--n.revindex0,
                        --n.revindex,
                        n.last = 0 === n.revindex0)
                    }
                    ), this),
                    ("other_percentage"in i ? i.other_percentage : "") > 0 && ("all_count"in i ? i.all_count : "") > 6 && (e.append('<div class="lt-analytics__customers-pipeline-item lt-analytics__customers-pipeline-item_no-border"><div class="lt-analytics__customers-pipeline-item-inner_right"><div class="lt-analytics__customers-pipeline-item-half lt-analytics__customers-pipeline-item-half_first"><span class="percent__graph is-other" style="width: 0;"><span class="percent">'),
                    e.append(twig.filter.escape(this.env_, "other_percentage"in i ? i.other_percentage : "", "light_escape", null, !0)),
                    e.append('%</span></span></div><div class="lt-analytics__customers-pipeline-item-half lt-analytics__customers-pipeline-item-half_last" style="margin-bottom: 6px"><div class="subvalue"><span class="js-show-all-purchases">'),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Show all"), "light_escape", null, !0)),
                    e.append("</span></div></div></div></div>")),
                    e.append('</div></div><div class="lt-analytics__customers-pipeline-row lt-analytics__customers-pipeline-avg-stats"><div class="lt-analytics__customers-pipeline-ltv"><div class="lt-analytics__customers-pipeline-avg-stats-num">'),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("price", "ltv"in i ? i.ltv : ""), "light_escape", null, !0)),
                    e.append('</div><div class="lt-analytics__customers-pipeline-avg-stats-title">'),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Lifetime value"), "light_escape", null, !0)),
                    e.append('</div></div><div class="lt-analytics__customers-pipeline-avg-active">'),
                    ("average_activity_time"in i ? i.average_activity_time : "") > 0 && (e.append('<div class="lt-analytics__customers-pipeline-avg-stats-num">'),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("period", "average_activity_time"in i ? i.average_activity_time : ""), "light_escape", null, !0)),
                    e.append('</div><div class="lt-analytics__customers-pipeline-avg-stats-title">'),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Average activity time"), "light_escape", null, !0)),
                    e.append("</div>")),
                    e.append('</div><div class="lt-analytics__customers-pipeline-other-pipeline">'),
                    i._parent = i,
                    s = this.env_.filter("slice", this.env_, twig.filter.keys("count"in i ? i.count : ""), twig.filter.length(this.env_, "count"in i ? i.count : "") - 1, 1),
                    twig.forEach(s, (function(t, a) {
                        i._key = a,
                        i.key = t,
                        i.purchases = twig.attr("count"in i ? i.count : "", "key"in i ? i.key : "", void 0, "array"),
                        e.append('<div class="lt-analytics__customers-pipeline-item lt-analytics__customers-pipeline-item_last lt-analytics__customers-pipeline-item_no-border"><div class="lt-analytics__customers-pipeline-item-inner_right"><div class="lt-analytics__customers-pipeline-item-half lt-analytics__customers-pipeline-item-half_first"><span class="percent__graph" style="width: 0;"><span class="percent">'),
                        e.append(twig.filter.escape(this.env_, twig.attr("purchases"in i ? i.purchases : "", "percentage"), "light_escape", null, !0)),
                        e.append('%</span><span class="decoration"></span></span></div><div class="lt-analytics__customers-pipeline-item-half lt-analytics__customers-pipeline-item-half_last"><div class="subtitle">'),
                        e.append(twig.filter.escape(this.env_, twig.attr("purchases"in i ? i.purchases : "", "transactions_count"), "light_escape", null, !0)),
                        e.append(" "),
                        e.append(twig.filter.escape(this.env_, this.env_.filter("numeral", this.env_.filter("i18n", "purchase,purchases,purchases"), twig.attr("purchases"in i ? i.purchases : "", "transactions_count")), "light_escape", null, !0)),
                        e.append('</div><div class="subvalue">'),
                        twig.attr("purchases"in i ? i.purchases : "", "customers_count") ? e.append(twig.filter.escape(this.env_, twig.attr("purchases"in i ? i.purchases : "", "customers_count"), "light_escape", null, !0)) : e.append(0),
                        e.append(" "),
                        e.append(twig.filter.escape(this.env_, this.env_.filter("numeral", this.env_.filter("i18n", "customer,customers,customers"), twig.attr("purchases"in i ? i.purchases : "", "customers_count")), "light_escape", null, !0)),
                        e.append(" "),
                        e.append(twig.filter.escape(this.env_, this.env_.filter("price", twig.attr("purchases"in i ? i.purchases : "", "sum")), "light_escape", null, !0)),
                        e.append("</div></div></div></div>")
                    }
                    ), this),
                    e.append("</div></div></div>"),
                    "count"in i && i.count || new (t._get("interface/reports/plug.twig"))(this.env_).render_(e, i),
                    e.append("</div>")
                }
                ,
                e.prototype.getTemplateName = function() {
                    return "interface_reports_customers_tiles_pipeline"
                }
                ,
                e.prototype.isTraitable = function() {
                    return !1
                }
                ,
                t._add("interface/reports/customers/tiles/pipeline", e)
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
                e.prototype.render_ = function(e, i, a) {
                    a = void 0 === a ? {} : a,
                    e.append('<div class="dashboard-tile__item dashboard-tile__item_white dashboard-tile__item_analytics dashboard-tile__item_flat lt-analytics__purchases js-customers-purchases"><h4 class="dashboard-tile__item-title"><span class="dashboard-tile__item-title-txt">'),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Purchases"), "light_escape", null, !0)),
                    e.append('</span></h4><div class="lt-analytics__purchases-table" '),
                    "has_plug"in i && i.has_plug && e.append('style="opacity: 0.2"'),
                    e.append(">"),
                    i._parent = i;
                    var s = "periods"in i ? i.periods : ""
                      , n = {
                        index0: 0,
                        index: 1,
                        first: !0
                    };
                    if (twig.countable(s)) {
                        var l = twig.count(s);
                        n.revindex0 = l - 1,
                        n.revindex = l,
                        n.length = l,
                        n.last = 1 === l
                    }
                    twig.forEach(s, (function(t, a) {
                        i.key = a,
                        i.period = t,
                        e.append('<div class="lt-analytics__purchases-item"><span class="lt-analytics__purchases-header">'),
                        "next_date" == ("key"in i ? i.key : "") ? (e.append(twig.filter.escape(this.env_, twig.filter.capitalize(this.env_, twig.attr("lang"in i ? i.lang : "", "Within")), "light_escape", null, !0)),
                        e.append(" "),
                        e.append(twig.filter.escape(this.env_, twig.attr("period"in i ? i.period : "", "days"), "light_escape", null, !0)),
                        e.append(" "),
                        e.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "marker_days"), "light_escape", null, !0))) : "today" == ("key"in i ? i.key : "") ? e.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Expected Today"), "light_escape", null, !0)) : e.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Did not purchase"), "light_escape", null, !0)),
                        e.append('</span><div class="lt-analytics__purchases-content"><span class="l-lift x-border__'),
                        e.append(twig.filter.escape(this.env_, twig.attr(n, "index"), "light_escape", null, !0)),
                        e.append('"><span class="l-items_counter"><span class="title big">'),
                        e.append(twig.filter.escape(this.env_, twig.attr("period"in i ? i.period : "", "count"), "light_escape", null, !0)),
                        e.append('</span></span><span class="l-items_price"><span class="title">'),
                        e.append(twig.filter.escape(this.env_, this.env_.filter("price", twig.attr("period"in i ? i.period : "", "next_price")), "light_escape", null, !0)),
                        e.append("</span></span></span></div></div>"),
                        ++n.index0,
                        ++n.index,
                        n.first = !1,
                        n.length && (--n.revindex0,
                        --n.revindex,
                        n.last = 0 === n.revindex0)
                    }
                    ), this),
                    e.append("</div>"),
                    "has_plug"in i && i.has_plug && new (t._get("interface/reports/plug.twig"))(this.env_).render_(e, i),
                    e.append("</div>")
                }
                ,
                e.prototype.getTemplateName = function() {
                    return "interface_reports_customers_tiles_purchases"
                }
                ,
                e.prototype.isTraitable = function() {
                    return !1
                }
                ,
                t._add("interface/reports/customers/tiles/purchases", e)
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
                    t.append('<div class="l-analytics row analytics__pipeline__circle'),
                    "access_denied"in e && e.access_denied && t.append(" analytics-pipeline__plug "),
                    t.append('"><div class="l-left column"><ul class="analytics__pipeline__circle__data hidden">'),
                    e.circle_color = "#CCFF66",
                    t.append(" "),
                    t.append('<li class="value" data-bgcolor="'),
                    t.append(twig.filter.escape(this.env_, "circle_color"in e ? e.circle_color : "", "light_escape", null, !0)),
                    t.append('">100</li></ul><div class="l-content funnel-title__plug"><div class="l-inner"><div class="l-analytics__pipeline__pie" id="l-analytics__pipeline__pie"><canvas id="pie_chart" width="293" height="293"></canvas><span class="big__circle plug__circle"><span class="text"><span class="string_text">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in e ? e.lang : "", "total_sales"), "light_escape", null, !0)),
                    t.append('</span></span><span class="total">000</span><span class="summ">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("plug_price", 3), "light_escape", null, !0)),
                    t.append('</span></span></div></div></div></div><div class="l-right column"><div class="l-content"><div class="l-inner"><h2 class="subcaption">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in e ? e.lang : "", "prospective"), "light_escape", null, !0)),
                    t.append('</h2><div class="notes-tip__wrapper in_bottom"><div class="notes-tip in_bottom"><div class="notes-tip__inner"><div class="notes-tip__text">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in e ? e.lang : "", "text_desc"), "light_escape", null, !0)),
                    t.append('</div></div></div></div></div></div></div><div class="b-table__4"><ul class="row"><li class="column active_now"><span class="l-header"><span class="title">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in e ? e.lang : "", "active_now"), "light_escape", null, !0)),
                    t.append('</span></span><div class="l-content"><span class="l-lift static-lift x-border__"><span class="l-items_price"><span class="title">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("plug_price", 3), "light_escape", null, !0)),
                    t.append('</span></span><span class="l-items_counter"><span class="title big">0 '),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("numeral", twig.attr("lang"in e ? e.lang : "", "entity"), 0), "light_escape", null, !0)),
                    t.append('</span></span></span></div></li><li class="column"><span class="l-header"><span class="title">5 '),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("numeral", twig.attr("lang"in e ? e.lang : "", "prospective_period"), 5), "light_escape", null, !0)),
                    t.append('</span></span><div class="l-content"><span class="l-lift x-border__1" style="top: -30px;"><span class="l-items_price"><span class="title">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("plug_price", 3), "light_escape", null, !0)),
                    t.append('</span></span><span class="l-items_counter"><span class="title big">0 '),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("numeral", twig.attr("lang"in e ? e.lang : "", "entity"), 0), "light_escape", null, !0)),
                    t.append('</span></span></span></div></li><li class="column"><span class="l-header"><span class="title">10 '),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("numeral", twig.attr("lang"in e ? e.lang : "", "prospective_period"), 10), "light_escape", null, !0)),
                    t.append('</span></span><div class="l-content"><span class="l-lift x-border__2" style="top: -60px;"><span class="l-items_price"><span class="title">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("plug_price", 3), "light_escape", null, !0)),
                    t.append('</span></span><span class="l-items_counter"><span class="title big">00 '),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("numeral", twig.attr("lang"in e ? e.lang : "", "entity"), 0), "light_escape", null, !0)),
                    t.append('</span></span></span></div></li><li class="column"><span class="l-header"><span class="title">15 '),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("numeral", twig.attr("lang"in e ? e.lang : "", "prospective_period"), 15), "light_escape", null, !0)),
                    t.append('</span></span><div class="l-content"><span class="l-lift x-border__" style="top: -90px;"><span class="l-items_price"><span class="title">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("plug_price", 3), "light_escape", null, !0)),
                    t.append('</span></span><span class="l-items_counter"><span class="title big">00 '),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("numeral", twig.attr("lang"in e ? e.lang : "", "entity"), 0), "light_escape", null, !0)),
                    t.append("</span></span></span></div></li></ul></div></div>")
                }
                ,
                e.prototype.getTemplateName = function() {
                    return "interface_reports_pipeline_plugs_no_rights"
                }
                ,
                e.prototype.isTraitable = function() {
                    return !1
                }
                ,
                t._add("interface/reports/pipeline/plugs/no_rights", e)
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
                e.prototype.render_ = function(e, i, a) {
                    a = void 0 === a ? {} : a,
                    e.append('<div class="l-analytics row analytics__pipeline__circle '),
                    e.append('"><div class="l-left column"><ul class="analytics__pipeline__circle__data hidden">'),
                    i.circle_color = "#CCFF66",
                    e.append(" "),
                    e.append('<li class="value" data-bgcolor="'),
                    e.append(twig.filter.escape(this.env_, "circle_color"in i ? i.circle_color : "", "light_escape", null, !0)),
                    e.append('">100</li></ul><div class="l-content funnel-title__plug"><div class="l-inner"><div class="l-analytics__pipeline__pie" id="l-analytics__pipeline__pie"><canvas id="pie_chart" width="240" height="240"></canvas><span class="big__circle plug__circle"><span class="text"><span class="string_text">'),
                    e.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "total_sales"), "light_escape", null, !0)),
                    e.append('</span></span><span class="total">0</span><span class="summ">'),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("plug_price", 1), "light_escape", null, !0)),
                    e.append('</span></span></div></div></div></div><div class="l-right column funnel__plug" style="position: static;"><div class="l-content"><div class="l-inner"><h2 class="subcaption">'),
                    e.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "prospective"), "light_escape", null, !0)),
                    e.append("</h2>"),
                    "hide_billing"in i && i.hide_billing || new (t._get("interface/common/tooltip.twig"))(this.env_).render_(e, twig.extend({}, i, {
                        class_name: "funnel-tooltip",
                        text: twig.attr("lang"in i ? i.lang : "", "note"),
                        button: twig.attr("lang"in i ? i.lang : "", "button_upgrade"),
                        ribbon: twig.attr("lang"in i ? i.lang : "", "ribbon")
                    })),
                    e.append('</div></div></div><div class="b-table__4"><ul class="row"><li class="column active_now"><span class="l-header"><span class="title">'),
                    e.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "active_now"), "light_escape", null, !0)),
                    e.append('</span></span><div class="l-content"><span class="l-lift static-lift x-border__"><span class="l-items_price"><span class="title">'),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("plug_price", 1), "light_escape", null, !0)),
                    e.append('</span></span><span class="l-items_counter"><span class="title big">0 '),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("numeral", twig.attr("lang"in i ? i.lang : "", "entity"), 0), "light_escape", null, !0)),
                    e.append('</span></span></span></div></li><li class="column"><span class="l-header"><span class="title">5 '),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("numeral", twig.attr("lang"in i ? i.lang : "", "prospective_period"), 5), "light_escape", null, !0)),
                    e.append('</span></span><div class="l-content"><span class="l-lift x-border__1"><span class="l-items_price"><span class="title">'),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("plug_price", 1), "light_escape", null, !0)),
                    e.append('</span></span><span class="l-items_counter"><span class="title big">0 '),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("numeral", twig.attr("lang"in i ? i.lang : "", "entity"), 0), "light_escape", null, !0)),
                    e.append('</span></span></span></div></li><li class="column"><span class="l-header"><span class="title">10 '),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("numeral", twig.attr("lang"in i ? i.lang : "", "prospective_period"), 10), "light_escape", null, !0)),
                    e.append('</span></span><div class="l-content"><span class="l-lift x-border__2"><span class="l-items_price"><span class="title">'),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("plug_price", 1), "light_escape", null, !0)),
                    e.append('</span></span><span class="l-items_counter"><span class="title big">0 '),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("numeral", twig.attr("lang"in i ? i.lang : "", "entity"), 0), "light_escape", null, !0)),
                    e.append('</span></span></span></div></li><li class="column"><span class="l-header"><span class="title">15 '),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("numeral", twig.attr("lang"in i ? i.lang : "", "prospective_period"), 15), "light_escape", null, !0)),
                    e.append('</span></span><div class="l-content"><span class="l-lift x-border__"><span class="l-items_price"><span class="title">'),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("plug_price", 1), "light_escape", null, !0)),
                    e.append('</span></span><span class="l-items_counter"><span class="title big">0 '),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("numeral", twig.attr("lang"in i ? i.lang : "", "entity"), 0), "light_escape", null, !0)),
                    e.append("</span></span></span></div></li></ul></div></div>")
                }
                ,
                e.prototype.getTemplateName = function() {
                    return "interface_reports_pipeline_plugs_pay"
                }
                ,
                e.prototype.isTraitable = function() {
                    return !1
                }
                ,
                t._add("interface/reports/pipeline/plugs/pay", e)
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
                e.prototype.render_ = function(e, i, a) {
                    a = void 0 === a ? {} : a,
                    i.type = twig.attr("params"in i ? i.params : "", "type"),
                    i.access = twig.attr("params"in i ? i.params : "", "access"),
                    i.access_paid = twig.attr("params"in i ? i.params : "", "access_paid"),
                    e.append('<div class="top-chart__plug">'),
                    0 == ("access"in i ? i.access : "") || 0 == ("access_paid"in i ? i.access_paid : "") ? (e.append('<div class="top-chart__plug-text top-chart__plug-text_hidden top-chart-plug__tooltip-wrapper">'),
                    new (t._get("interface/common/tooltip.twig"))(this.env_).render_(e, twig.extend({}, i, {
                        class_name: "by-activities-tooltip top-chart-plug__tooltip",
                        text: twig.attr("lang"in i ? i.lang : "", "tooltip_note"),
                        button: twig.attr("lang"in i ? i.lang : "", "tooltip_button_upgrade"),
                        ribbon: twig.attr("lang"in i ? i.lang : "", "tooltip_ribbon")
                    })),
                    e.append("</div>")) : (e.append('<div class="top-chart__plug-text top-chart__plug-text_hidden">'),
                    e.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "dashboard_" + ("type"in i ? i.type : "") + "_plug_text_not_enough_data", void 0, "array"), "light_escape", null, !0)),
                    e.append("</div>")),
                    e.append("</div>")
                }
                ,
                e.prototype.getTemplateName = function() {
                    return "interface_reports_pipeline_plugs_sausage_chart"
                }
                ,
                e.prototype.isTraitable = function() {
                    return !1
                }
                ,
                t._add("interface/reports/pipeline/plugs/sausage_chart", e)
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
                e.prototype.render_ = function(e, i, a) {
                    a = void 0 === a ? {} : a,
                    i.managers_colors = ["#1c69b4", "#2478c5", "#2B87D8", "#3396e7", "#3da6f1", "#66c2f9"],
                    i.other_managers_color = twig.attr(twig.attr("params"in i ? i.params : "", "managers"), "more") ? "#a5d9fb" : "transparent",
                    i.other_statuses_color = twig.attr(twig.attr("params"in i ? i.params : "", "statuses"), "more") ? "#f3a581" : "transparent",
                    "is_loading"in i && i.is_loading || (i.budget = twig.attr(twig.attr("params"in i ? i.params : "", "total"), "budget_str") ? twig.attr(twig.attr("params"in i ? i.params : "", "total"), "budget_str") : this.env_.filter("price", twig.attr(twig.attr("params"in i ? i.params : "", "total"), "price")),
                    i.leads_count = twig.attr(twig.attr("params"in i ? i.params : "", "total"), "leads_count_str") ? twig.attr(twig.attr("params"in i ? i.params : "", "total"), "leads_count_str") : this.env_.filter("count", twig.attr(twig.attr("params"in i ? i.params : "", "total"), "leads_count"))),
                    "is_loading"in i && i.is_loading ? (i.statuses = twig.range(1, 5),
                    i.managers = twig.range(1, 5),
                    i.item_template = "interface/reports/consolidated/tiles/leads_pie/pie_item_plug.twig") : (i.statuses = twig.attr(twig.attr("params"in i ? i.params : "", "statuses"), "top"),
                    i.managers = twig.attr(twig.attr("params"in i ? i.params : "", "managers"), "top"),
                    i.item_template = "interface/reports/consolidated/tiles/leads_pie/pie_item.twig"),
                    e.append('<div id="pie-chart" class="js-chart-content js-hs-scroller custom-scroll top-chart '),
                    "is_visible"in i && i.is_visible || e.append("top-chart_hidden"),
                    e.append('" '),
                    "not_enough_data"in i && i.not_enough_data && e.append('style="opacity: 0.2"'),
                    e.append('><div class="pie-chart__columns"><div class="pie-chart__column pie-chart__statuses-column"><div class="pie-chart__column-body pie-chart__statuses-column-body"><div class="pie-chart__column-title">'),
                    e.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "dashboard_pie_chart_pipeline_statuses"), "light_escape", null, !0)),
                    e.append('</div><div class="pie-chart__column-inner">'),
                    i.type = "status",
                    i._parent = i;
                    var s = "statuses"in i ? i.statuses : ""
                      , n = {
                        index0: 0,
                        index: 1,
                        first: !0
                    };
                    if (twig.countable(s)) {
                        var l = twig.count(s);
                        n.revindex0 = l - 1,
                        n.revindex = l,
                        n.length = l,
                        n.last = 1 === l
                    }
                    twig.forEach(s, (function(a, s) {
                        i._key = s,
                        i.status = a,
                        new (t._get("item_template"in i ? i.item_template : ""))(this.env_).render_(e, twig.extend({}, i, {
                            item: "status"in i ? i.status : "",
                            color: twig.attr("status"in i ? i.status : "", "color", void 0, void 0, !0) ? twig.filter.def(twig.attr("status"in i ? i.status : "", "color"), "#ccc") : "#ccc",
                            title: twig.attr("status"in i ? i.status : "", "title", void 0, void 0, !0) ? twig.filter.def(twig.attr("status"in i ? i.status : "", "title"), twig.attr("lang"in i ? i.lang : "", "dashboard_stats_removed_status")) : twig.attr("lang"in i ? i.lang : "", "dashboard_stats_removed_status"),
                            leads_text: twig.attr("lang"in i ? i.lang : "", "dashboard_leads_numeral")
                        })),
                        ++n.index0,
                        ++n.index,
                        n.first = !1,
                        n.length && (--n.revindex0,
                        --n.revindex,
                        n.last = 0 === n.revindex0)
                    }
                    ), this),
                    "is_loading"in i && i.is_loading || twig.empty(twig.attr(twig.attr("params"in i ? i.params : "", "statuses"), "more")) || (i._parent = i,
                    s = twig.attr(twig.attr("params"in i ? i.params : "", "statuses"), "more"),
                    n = {
                        index0: 0,
                        index: 1,
                        first: !0
                    },
                    twig.countable(s) && (l = twig.count(s),
                    n.revindex0 = l - 1,
                    n.revindex = l,
                    n.length = l,
                    n.last = 1 === l),
                    twig.forEach(s, (function(a, s) {
                        i._key = s,
                        i.status_more = a,
                        new (t._get("item_template"in i ? i.item_template : ""))(this.env_).render_(e, twig.extend({}, i, {
                            item: "status_more"in i ? i.status_more : "",
                            title: twig.attr("status_more"in i ? i.status_more : "", "title", void 0, void 0, !0) ? twig.filter.def(twig.attr("status_more"in i ? i.status_more : "", "title"), twig.attr("lang"in i ? i.lang : "", "dashboard_stats_removed_status")) : twig.attr("lang"in i ? i.lang : "", "dashboard_stats_removed_status"),
                            leads_text: twig.attr("lang"in i ? i.lang : "", "dashboard_leads_numeral"),
                            class_name: "hidden"
                        })),
                        ++n.index0,
                        ++n.index,
                        n.first = !1,
                        n.length && (--n.revindex0,
                        --n.revindex,
                        n.last = 0 === n.revindex0)
                    }
                    ), this)),
                    "is_loading"in i && i.is_loading || !twig.attr(twig.attr("params"in i ? i.params : "", "statuses"), "others") || !twig.attr(twig.attr(twig.attr("params"in i ? i.params : "", "statuses"), "others"), "leads_count") || new (t._get("item_template"in i ? i.item_template : ""))(this.env_).render_(e, twig.extend({}, i, {
                        item: twig.attr(twig.attr("params"in i ? i.params : "", "statuses"), "others"),
                        title: twig.attr("lang"in i ? i.lang : "", "dashboard_stats_all_statuses"),
                        color: "other_statuses_color"in i ? i.other_statuses_color : "",
                        link: "",
                        class_name: "pie-chart__row-others " + (twig.empty(twig.attr(twig.attr("params"in i ? i.params : "", "statuses"), "more")) ? "" : "pie-chart__row-others_clickable")
                    })),
                    e.append('</div></div></div><div class="pie-chart__column pie-chart__pie-column"><div class="pie-chart__left"><canvas id="left-pie-chart" class="left-pie-chart" width="'),
                    "pie_size"in i && i.pie_size ? e.append(twig.filter.escape(this.env_, "pie_size"in i ? i.pie_size : "", "light_escape", null, !0)) : e.append(310),
                    e.append('" height="'),
                    "pie_size"in i && i.pie_size ? e.append(twig.filter.escape(this.env_, "pie_size"in i ? i.pie_size : "", "light_escape", null, !0)) : e.append(310),
                    e.append('"></canvas></div><div class="pie-chart__summary pie-chart__summary_hidden"><div class="pie-chart__budget"><div class="pie-chart__budget-title">'),
                    e.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "dashboard_pie_chart_leads_budget"), "light_escape", null, !0)),
                    e.append('</div><div class="pie-chart__budget-value">'),
                    "is_loading"in i && i.is_loading ? (e.append('<div class="pie-chart__plug-budget card-plug__animation" style="width: '),
                    e.append(twig.filter.escape(this.env_, Number(60) + Number(twig.functions.random(this.env_, 25)), "light_escape", null, !0)),
                    e.append('px;"></div>')) : (e.append('<span title="'),
                    e.append(twig.filter.escape(this.env_, "budget"in i ? i.budget : "", "light_escape", null, !0)),
                    e.append('">'),
                    e.append(twig.filter.escape(this.env_, "budget"in i ? i.budget : "", "light_escape", null, !0)),
                    e.append("</span>")),
                    e.append('</div></div><div class="js-chart-leads pie-chart__leads"><div class="pie-chart__leads-title">'),
                    e.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "dashboard_pie_chart_active_leads"), "light_escape", null, !0)),
                    e.append('</div><div class="pie-chart__leads-value">'),
                    "is_loading"in i && i.is_loading ? (e.append('<div class="pie-chart__plug-leads-value card-plug__animation" style="width: '),
                    e.append(twig.filter.escape(this.env_, Number(80) + Number(twig.functions.random(this.env_, 50)), "light_escape", null, !0)),
                    e.append('px;"></div>')) : (e.append('<span class="js-chart-leads-value-count">'),
                    e.append(twig.filter.escape(this.env_, "leads_count"in i ? i.leads_count : "", "light_escape", null, !0)),
                    e.append("</span>")),
                    e.append('</div></div></div><div class="pie-chart__right"><canvas id="right-pie-chart" class="right-pie-chart" width="'),
                    "pie_size"in i && i.pie_size ? e.append(twig.filter.escape(this.env_, "pie_size"in i ? i.pie_size : "", "light_escape", null, !0)) : e.append(310),
                    e.append('" height="'),
                    "pie_size"in i && i.pie_size ? e.append(twig.filter.escape(this.env_, "pie_size"in i ? i.pie_size : "", "light_escape", null, !0)) : e.append(310),
                    e.append('"></canvas></div></div><div class="pie-chart__column pie-chart__managers-column"><div class="pie-chart__column-body pie-chart__managers-column-body"><div class="pie-chart__column-title">'),
                    e.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "dashboard_pie_chart_leads_per_user"), "light_escape", null, !0)),
                    e.append('</div><div class="pie-chart__column-inner">'),
                    i.type = "manager",
                    i._parent = i,
                    s = "managers"in i ? i.managers : "",
                    n = {
                        index0: 0,
                        index: 1,
                        first: !0
                    },
                    twig.countable(s) && (l = twig.count(s),
                    n.revindex0 = l - 1,
                    n.revindex = l,
                    n.length = l,
                    n.last = 1 === l),
                    twig.forEach(s, (function(a, s) {
                        i._key = s,
                        i.manager = a,
                        new (t._get("item_template"in i ? i.item_template : ""))(this.env_).render_(e, twig.extend({}, i, {
                            item: "manager"in i ? i.manager : "",
                            title: twig.attr("manager"in i ? i.manager : "", "name"),
                            leads_text: twig.attr("lang"in i ? i.lang : "", "dashboard_leads_numeral"),
                            color: "is_loading"in i && i.is_loading ? "#ccc" : twig.attr("managers_colors"in i ? i.managers_colors : "", twig.attr(n, "index0"), void 0, "array")
                        })),
                        ++n.index0,
                        ++n.index,
                        n.first = !1,
                        n.length && (--n.revindex0,
                        --n.revindex,
                        n.last = 0 === n.revindex0)
                    }
                    ), this),
                    "is_loading"in i && i.is_loading || twig.empty(twig.attr(twig.attr("params"in i ? i.params : "", "managers"), "more")) || (i._parent = i,
                    s = twig.attr(twig.attr("params"in i ? i.params : "", "managers"), "more"),
                    n = {
                        index0: 0,
                        index: 1,
                        first: !0
                    },
                    twig.countable(s) && (l = twig.count(s),
                    n.revindex0 = l - 1,
                    n.revindex = l,
                    n.length = l,
                    n.last = 1 === l),
                    twig.forEach(s, (function(a, s) {
                        i._key = s,
                        i.manager_more = a,
                        new (t._get("item_template"in i ? i.item_template : ""))(this.env_).render_(e, twig.extend({}, i, {
                            item: "manager_more"in i ? i.manager_more : "",
                            title: twig.attr("manager_more"in i ? i.manager_more : "", "name"),
                            leads_text: twig.attr("lang"in i ? i.lang : "", "dashboard_leads_numeral"),
                            color: "other_managers_color"in i ? i.other_managers_color : "",
                            class_name: "hidden"
                        })),
                        ++n.index0,
                        ++n.index,
                        n.first = !1,
                        n.length && (--n.revindex0,
                        --n.revindex,
                        n.last = 0 === n.revindex0)
                    }
                    ), this)),
                    "is_loading"in i && i.is_loading || twig.empty(twig.attr(twig.attr("params"in i ? i.params : "", "managers"), "others")) || new (t._get("item_template"in i ? i.item_template : ""))(this.env_).render_(e, twig.extend({}, i, {
                        item: twig.attr(twig.attr("params"in i ? i.params : "", "managers"), "others"),
                        title: twig.attr("lang"in i ? i.lang : "", "dashboard_stats_all_managers"),
                        color: "other_managers_color"in i ? i.other_managers_color : "",
                        class_name: "pie-chart__row-others " + (twig.empty(twig.attr(twig.attr("params"in i ? i.params : "", "managers"), "more")) ? "" : "pie-chart__row-others_clickable")
                    })),
                    e.append("</div></div></div></div></div>")
                }
                ,
                e.prototype.getTemplateName = function() {
                    return "interface_reports_consolidated_tiles_leads_pie_pie"
                }
                ,
                e.prototype.isTraitable = function() {
                    return !1
                }
                ,
                t._add("interface/reports/consolidated/tiles/leads_pie/pie", e)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var e = function(t) {
                    twig.Template.call(this, t),
                    this.setBlocks({
                        percentage: twig.bind(this.block_percentage, this),
                        title: twig.bind(this.block_title, this),
                        summary: twig.bind(this.block_summary, this)
                    })
                };
                twig.inherits(e, twig.Template),
                e.prototype.getParent_ = function(t) {
                    return !1
                }
                ,
                e.prototype.render_ = function(t, e, i) {
                    i = void 0 === i ? {} : i,
                    e.item = "item"in e && e.item ? "item"in e ? e.item : "" : [],
                    e.title = "title"in e && e.title ? "title"in e ? e.title : "" : twig.attr("item"in e ? e.item : "", "title") ? twig.attr("item"in e ? e.item : "", "title") : "",
                    e.link = twig.attr("item"in e ? e.item : "", "leads_link") ? twig.attr("item"in e ? e.item : "", "leads_link") : "",
                    e.color = "color"in e && e.color ? "color"in e ? e.color : "" : twig.attr("item"in e ? e.item : "", "color") ? twig.attr("item"in e ? e.item : "", "color") : "",
                    e.percentage = twig.attr("item"in e ? e.item : "", "leads_percentage") ? twig.attr("item"in e ? e.item : "", "leads_percentage") : 0,
                    e.count = twig.attr("item"in e ? e.item : "", "leads_count") ? twig.attr("item"in e ? e.item : "", "leads_count") : 0,
                    e.price = twig.attr("item"in e ? e.item : "", "price") ? twig.attr("item"in e ? e.item : "", "price") : 0,
                    e.leads_text = "leads_text"in e && e.leads_text ? "leads_text"in e ? e.leads_text : "" : twig.attr("lang"in e ? e.lang : "", "dashboard_leads_numeral"),
                    t.append('<div class="pie-chart__column-row pie-chart__row pie-chart__row_hidden'),
                    "class_name"in e && e.class_name && (t.append(" "),
                    t.append(twig.filter.escape(this.env_, "class_name"in e ? e.class_name : "", "light_escape", null, !0))),
                    t.append('" title="'),
                    t.append(twig.filter.escape(this.env_, "title"in e ? e.title : "", "light_escape", null, !0)),
                    t.append('"><div class="row__percent">'),
                    t.append(this.renderBlock("percentage", e, i)),
                    t.append('</div><div class="row__summary row-summary"><div class="row-summary__marker" style="background-color: '),
                    t.append(twig.filter.escape(this.env_, "color"in e ? e.color : "", "light_escape", null, !0)),
                    t.append('"></div><div class="row-summary__data row-summary-data"><div class="row-summary-data__first-line">'),
                    t.append(this.renderBlock("title", e, i)),
                    t.append('</div><div class="row-summary-data__second-line">'),
                    t.append(this.renderBlock("summary", e, i)),
                    t.append("</div></div></div></div>")
                }
                ,
                e.prototype.block_percentage = function(t, e, i) {
                    i = void 0 === i ? {} : i,
                    "link"in e && e.link && (t.append('<a href="'),
                    t.append(twig.filter.escape(this.env_, "link"in e ? e.link : "", "light_escape", null, !0)),
                    t.append('" class="black_link js-navigate-link">')),
                    t.append('<span class="row__percent-value" data-bgcolor="'),
                    t.append(twig.filter.escape(this.env_, "color"in e ? e.color : "", "light_escape", null, !0)),
                    t.append('">'),
                    t.append(twig.filter.escape(this.env_, "percentage"in e ? e.percentage : "", "light_escape", null, !0)),
                    t.append("%</span>"),
                    "link"in e && e.link && t.append("</a>")
                }
                ,
                e.prototype.block_title = function(t, e, i) {
                    i = void 0 === i ? {} : i,
                    t.append(twig.filter.escape(this.env_, "title"in e ? e.title : "", "light_escape", null, !0))
                }
                ,
                e.prototype.block_summary = function(t, e, i) {
                    i = void 0 === i ? {} : i,
                    "link"in e && e.link ? (t.append('<a href="'),
                    t.append(twig.filter.escape(this.env_, "link"in e ? e.link : "", "light_escape", null, !0)),
                    t.append('" class="black_link js-navigate-link">'),
                    t.append(twig.filter.escape(this.env_, "count"in e ? e.count : "", "light_escape", null, !0)),
                    t.append("&nbsp;"),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("numeral", "leads_text"in e ? e.leads_text : "", "count"in e ? e.count : ""), "light_escape", null, !0)),
                    t.append(", "),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("price", "price"in e ? e.price : ""), "light_escape", null, !0)),
                    t.append("</a>")) : (t.append(twig.filter.escape(this.env_, "count"in e ? e.count : "", "light_escape", null, !0)),
                    t.append("&nbsp;"),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("numeral", "leads_text"in e ? e.leads_text : "", "count"in e ? e.count : ""), "light_escape", null, !0)),
                    t.append(", "),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("price", "price"in e ? e.price : ""), "light_escape", null, !0)))
                }
                ,
                e.prototype.getTemplateName = function() {
                    return "interface_reports_consolidated_tiles_leads_pie_pie_item"
                }
                ,
                e.prototype.isTraitable = function() {
                    return !1
                }
                ,
                t._add("interface/reports/consolidated/tiles/leads_pie/pie_item", e)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var e = function(t) {
                    twig.Template.call(this, t),
                    this.setBlocks({
                        percentage: twig.bind(this.block_percentage, this),
                        title: twig.bind(this.block_title, this),
                        summary: twig.bind(this.block_summary, this)
                    })
                };
                twig.inherits(e, twig.Template),
                e.prototype.getParent_ = function(e) {
                    return t._get("interface/reports/consolidated/tiles/leads_pie/pie_item.twig")
                }
                ,
                e.prototype.render_ = function(t, e, i) {
                    i = void 0 === i ? {} : i,
                    this.getParent(e).render_(t, e, twig.extend({}, this.getBlocks(), i))
                }
                ,
                e.prototype.block_percentage = function(t, e, i) {
                    i = void 0 === i ? {} : i,
                    t.append('<div class="pie-chart__plug-percent card-plug__animation" style="width: 50px;"></div>')
                }
                ,
                e.prototype.block_title = function(t, e, i) {
                    i = void 0 === i ? {} : i,
                    t.append('<div class="pie-chart__plug-title card-plug__animation" style="width: '),
                    t.append(twig.filter.escape(this.env_, Number(80) + Number(twig.functions.random(this.env_, 30)), "light_escape", null, !0)),
                    t.append('px;"></div>')
                }
                ,
                e.prototype.block_summary = function(t, e, i) {
                    i = void 0 === i ? {} : i,
                    t.append('<div class="pie-chart__plug-summary card-plug__animation" style="width: '),
                    t.append(twig.filter.escape(this.env_, Number(80) + Number(twig.functions.random(this.env_, 30)), "light_escape", null, !0)),
                    t.append('px;"></div>')
                }
                ,
                e.prototype.getTemplateName = function() {
                    return "interface_reports_consolidated_tiles_leads_pie_pie_item_plug"
                }
                ,
                e.prototype.isTraitable = function() {
                    return !1
                }
                ,
                t._add("interface/reports/consolidated/tiles/leads_pie/pie_item_plug", e)
            }()
        }
        .apply(e, a)) || (t.exports = s)
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
        t._sentryDebugIds[e] = "53c354d0-ada7-48c3-9ff5-672c4637c8ac",
        t._sentryDebugIdIdentifier = "sentry-dbid-53c354d0-ada7-48c3-9ff5-672c4637c8ac")
    } catch (t) {}
}();
//# sourceMappingURL=42663.a4a6e06e4c08d0d4fa92.js.map
