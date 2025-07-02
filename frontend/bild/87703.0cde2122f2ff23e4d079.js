(window.webpackChunk = window.webpackChunk || []).push([[87703, 28617], {
    387703: (e, t, i) => {
        var n, a;
        n = [i(460159), i(928617), i(94849), i(295165), i(591880)],
        void 0 === (a = function(e) {
            (function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e),
                    this.setBlocks({
                        column: twig.bind(this.block_column, this)
                    })
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(t) {
                    return e._get("interface/pipeline/body.twig")
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    twig.attr(twig.attr("user_rights"in t ? t.user_rights : "", "leads"), "add") && (t.quick_add_tmpl = "interface/leads_pipeline/quick_add/index.twig"),
                    this.getParent(t).render_(e, t, twig.extend({}, this.getBlocks(), i))
                }
                ,
                t.prototype.block_column = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    i.has_items = twig.filter.length(this.env_, "items"in i ? i.items : "") || twig.filter.length(this.env_, "rows"in i ? i.rows : "") > ("leads_pack_volume"in i ? i.leads_pack_volume : ""),
                    "has_items"in i && i.has_items || (twig.attr(twig.attr(twig.attr("filter"in i ? i.filter : "", "items"), "without_tasks"), "selected") ? new (e._get("interface/leads_pipeline/no_items_tmpl.twig"))(this.env_).render_(t, i) : "show_tour"in i && i.show_tour || (i.no_results = !0)),
                    i.num_row_quick_add = 0,
                    i.no_items_flag = !1,
                    i._parent = i;
                    var a = "rows"in i ? i.rows : ""
                      , p = {
                        index0: 0,
                        index: 1,
                        first: !0
                    };
                    if (twig.countable(a)) {
                        var r = twig.count(a);
                        p.revindex0 = r - 1,
                        p.revindex = r,
                        p.length = r,
                        p.last = 1 === r
                    }
                    twig.forEach(a, (function(n, a) {
                        if (i.key = a,
                        i.row = n,
                        i.is_unsorted = "unsorted" == twig.attr("row"in i ? i.row : "", "ID") || 1 == twig.attr("row"in i ? i.row : "", "type"),
                        i.key_id = twig.attr("row"in i ? i.row : "", "ID"),
                        "key_id"in i && i.key_id || (i.key_id = "key"in i ? i.key : ""),
                        i.show_tour = twig.attr(twig.attr(p, "parent"), "show_tour"),
                        i.row_index = twig.attr(p, "index"),
                        "items_index"in i && i.items_index ? i.cur_items = twig.attr(twig.attr("items"in i ? i.items : "", "key_id"in i ? i.key_id : "", void 0, "array"), "items_index"in i ? i.items_index : "", void 0, "array") : i.cur_items = twig.attr("items"in i ? i.items : "", "key_id"in i ? i.key_id : "", void 0, "array"),
                        "unsorted" != twig.attr("row"in i ? i.row : "", "ID") && 1 != twig.attr("row"in i ? i.row : "", "type") || (i.num_row_quick_add = Number("num_row_quick_add"in i ? i.num_row_quick_add : "") + Number(1)),
                        i.quick_add_condition = twig.attr(p, "index0") == ("num_row_quick_add"in i ? i.num_row_quick_add : "") && ("quick_add_tmpl"in i ? i.quick_add_tmpl : ""),
                        i.draw_pipeline_cell = !0,
                        "draw_pipeline_cell"in i && i.draw_pipeline_cell) {
                            if (t.append('<div class="pipeline_status pipeline_cell '),
                            !("quick_add_condition"in i) || !i.quick_add_condition || "use_filter"in i && i.use_filter || t.append(" pipeline_cell-quick_add "),
                            t.append(" pipeline_cell-"),
                            t.append(twig.filter.escape(this.env_, twig.attr("row"in i ? i.row : "", "ID"), "light_escape", null, !0)),
                            t.append(" "),
                            "has_items"in i && i.has_items || t.append("pipeline_cell-without-padding"),
                            t.append(" "),
                            "has_unsorted"in i && i.has_unsorted || !("is_unsorted"in i) || !i.is_unsorted || 0 != twig.filter.length(this.env_, "cur_items"in i ? i.cur_items : "") || t.append(" h-hidden "),
                            t.append(" "),
                            "is_unsorted"in i && i.is_unsorted && t.append(" pipeline_cell-unsorted "),
                            t.append(' " '),
                            "unsorted" != ("key_id"in i ? i.key_id : "") || twig.attr("unsorted"in i ? i.unsorted : "", "show") || t.append('style="display: none"'),
                            t.append('><div class="pipeline_cell-head pipeline_cell-head-'),
                            t.append(twig.filter.escape(this.env_, twig.attr("row"in i ? i.row : "", "ID"), "light_escape", null, !0)),
                            t.append(" pipeline_cell-head-group-"),
                            t.append(twig.filter.escape(this.env_, "key_id"in i ? i.key_id : "", "light_escape", null, !0)),
                            t.append(" "),
                            "is_unsorted"in i && i.is_unsorted && t.append(" pipeline_cell-head-unsorted "),
                            t.append('">'),
                            new (e._get("interface/leads_pipeline/header_item.twig"))(this.env_).render_(t, twig.extend({}, i, {
                                key: "key"in i ? i.key : "",
                                row: "row"in i ? i.row : "",
                                is_last: twig.attr(p, "is_last"),
                                is_first: twig.attr(p, "is_first")
                            })),
                            t.append("</div>"),
                            "has_items"in i && i.has_items || "unsorted" == ("key_id"in i ? i.key_id : "") || "no_items_flag"in i && i.no_items_flag || "show_tour"in i && i.show_tour || !("use_filter"in i) || !i.use_filter || (new (e._get("interface/leads_pipeline/no_items_filter_tmpl.twig"))(this.env_).render_(t, twig.extend({}, i, {
                                pipeline_no_results: twig.attr("lang"in i ? i.lang : "", "pipeline_no_results"),
                                filter_url: twig.attr("filter"in i ? i.filter : "", "url"),
                                pipeline_reset_filter: twig.attr("lang"in i ? i.lang : "", "pipeline_reset_filter")
                            })),
                            i.no_items_flag = !0,
                            i.red_message_no_search_result = !0),
                            !("red_message_no_search_result"in i) || !i.red_message_no_search_result) {
                                if (t.append('<div id="pipeline_items__list_'),
                                t.append(twig.filter.escape(this.env_, "key_id"in i ? i.key_id : "", "light_escape", null, !0)),
                                t.append('" class="pipeline_items__list js-pipeline-row '),
                                twig.attr("row"in i ? i.row : "", "disable_drop") && t.append("js-pipeline-no-drop"),
                                t.append('"  data-id="'),
                                t.append(twig.filter.escape(this.env_, "key_id"in i ? i.key_id : "", "light_escape", null, !0)),
                                t.append('">'),
                                !("quick_add_condition"in i) || !i.quick_add_condition || "use_filter"in i && i.use_filter || new (e._get("quick_add_tmpl"in i ? i.quick_add_tmpl : ""))(this.env_).render_(t, twig.extend({}, i, {
                                    form_wrapper_class: "pipeline-item__quick-add"
                                })),
                                "unsorted" != twig.attr("row"in i ? i.row : "", "ID")) {
                                    var r = "cur_items"in i ? i.cur_items : ""
                                      , l = {
                                        parent: p,
                                        index0: 0,
                                        index: 1,
                                        first: !0
                                    };
                                    if (twig.countable(r)) {
                                        var _ = twig.count(r);
                                        l.revindex0 = _ - 1,
                                        l.revindex = _,
                                        l.length = _,
                                        l.last = 1 === _
                                    }
                                    twig.forEach(r, (function(n, a) {
                                        i._key = a,
                                        i.item = n,
                                        new (e._get("interface/leads_pipeline/item_controller.twig"))(this.env_).render_(t, i),
                                        ++l.index0,
                                        ++l.index,
                                        l.first = !1,
                                        l.length && (--l.revindex0,
                                        --l.revindex,
                                        l.last = 0 === l.revindex0)
                                    }
                                    ), this)
                                }
                                t.append("</div>")
                            }
                            t.append("</div>")
                        }
                        ++p.index0,
                        ++p.index,
                        p.first = !1,
                        p.length && (--p.revindex0,
                        --p.revindex,
                        p.last = 0 === p.revindex0)
                    }
                    ), this)
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_leads_pipeline_body"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/leads_pipeline/body", t)
            }
            )(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e)
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(e) {
                    return !1
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i;
                    var n = e;
                    (e = new twig.StringBuffer).append('<div class="block-selectable">'),
                    1 == ("status_type"in t ? t.status_type : "") ? (e.append('<span class="pipeline_status__head_info__count pipeline-unsorted__all pipeline-unsorted__filter-item_current" id="unsorted_all">'),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Requests"), "light_escape", null, !0)),
                    e.append(": "),
                    e.append(twig.filter.escape(this.env_, "count_num"in t ? t.count_num : "", "light_escape", null, !0)),
                    e.append("</span>")) : (e.append('<span class="pipeline_status__head_info__count">'),
                    "count"in t && t.count ? e.append(twig.filter.escape(this.env_, "count"in t ? t.count : "", "light_escape", null, !0)) : e.append("&nbsp;"),
                    e.append('</span><span class="pipeline_status__head_info__sum">'),
                    "sum"in t && t.sum ? e.append(twig.filter.escape(this.env_, "sum"in t ? t.sum : "", "light_escape", null, !0)) : e.append("&nbsp;"),
                    e.append("</span>")),
                    e.append("</div>"),
                    n.append(twig.spaceless(e.toString())),
                    e = n
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_leads_pipeline_header_info"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/leads_pipeline/header_info", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e)
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(e) {
                    return !1
                }
                ,
                t.prototype.render_ = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    i.statusDescription = twig.attr(twig.attr(twig.attr(twig.attr("statuses_descriptions"in i ? i.statuses_descriptions : "", twig.attr("row"in i ? i.row : "", "ID"), void 0, "array"), "descriptions", void 0, "array"), 0, void 0, "array"), "description", void 0, "array"),
                    t.append('<div class="pipeline_status__head-wrapper"><div id="status_id_'),
                    t.append(twig.filter.escape(this.env_, twig.attr("row"in i ? i.row : "", "ID"), "light_escape", null, !0)),
                    t.append('"class="pipeline_status__head '),
                    1 == twig.attr("row"in i ? i.row : "", "type") && t.append(" pipeline_status__head-unsorted "),
                    t.append('"data-id="'),
                    t.append(twig.filter.escape(this.env_, twig.attr("row"in i ? i.row : "", "ID"), "light_escape", null, !0)),
                    t.append('"><div class="pipeline_status__head_title" title="'),
                    t.append(twig.filter.escape(this.env_, twig.attr("row"in i ? i.row : "", "NAME"), "light_escape", null, !0)),
                    t.append('"><span class="block-selectable">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("row"in i ? i.row : "", "NAME"), "light_escape", null, !0)),
                    t.append('</span></div><div class="pipeline_status__head_info js-fixed-header-stats">'),
                    new (e._get("interface/leads_pipeline/header_info.twig"))(this.env_).render_(t, i),
                    t.append('</div><span class="pipeline_status__head_line" style="background: '),
                    t.append(twig.filter.escape(this.env_, twig.attr("row"in i ? i.row : "", "COLOR"), "light_escape", null, !0)),
                    t.append("; color: "),
                    t.append(twig.filter.escape(this.env_, twig.attr("row"in i ? i.row : "", "COLOR"), "light_escape", null, !0)),
                    t.append(';"></span></div></div>'),
                    "statusDescription"in i && i.statusDescription && (t.append('<div class="pipeline_status__description js-fixed-header-stats" data-status-id="'),
                    t.append(twig.filter.escape(this.env_, twig.attr("row"in i ? i.row : "", "ID"), "light_escape", null, !0)),
                    t.append('"><span class="pipeline_status__description_text">'),
                    t.append(twig.filter.nl2br(twig.filter.escape(this.env_, twig.attr(twig.attr(twig.attr(twig.attr("statuses_descriptions"in i ? i.statuses_descriptions : "", twig.attr("row"in i ? i.row : "", "ID"), void 0, "array"), "descriptions", void 0, "array"), 0, void 0, "array"), "description", void 0, "array")))),
                    t.append("</span></div>")),
                    "unsorted" != twig.attr("row"in i ? i.row : "", "ID") && 1 != twig.attr("row"in i ? i.row : "", "type") && new (e._get("interface/controls/checkbox.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        id: "status_chckbx_" + twig.attr("row"in i ? i.row : "", "ID"),
                        value: twig.attr("row"in i ? i.row : "", "ID"),
                        class_name: "pipeline_status__head-checkbox"
                    }))
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_leads_pipeline_header_item"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/leads_pipeline/header_item", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e),
                    this.setBlocks({
                        list_top_right: twig.bind(this.block_list_top_right, this),
                        static: twig.bind(this.block_static, this),
                        list_body: twig.bind(this.block_list_body, this),
                        list_footer: twig.bind(this.block_list_footer, this)
                    })
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(t) {
                    return e._get("interface/common/list/list.twig")
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    if (i = void 0 === i ? {} : i,
                    this.env_.test("iterable", "filters"in t ? t.filters : "") && twig.filter.length(this.env_, "filters"in t ? t.filters : "") && (t.entity_filter = twig.filter.first(this.env_, "filters"in t ? t.filters : ""),
                    t.filter = twig.attr("entity_filter"in t ? t.entity_filter : "", "params")),
                    t.current_id = "",
                    t.current_pipe = "",
                    "pipelines"in t && t.pipelines) {
                        t._parent = t;
                        var n = "pipelines"in t ? t.pipelines : "";
                        twig.forEach(n, (function(e, i) {
                            t._key = i,
                            t.item = e,
                            (twig.attr("item"in t ? t.item : "", "selected") || twig.attr("item"in t ? t.item : "", "id") == ("pipeline_id"in t ? t.pipeline_id : "")) && (t.current_id = twig.attr("item"in t ? t.item : "", "id"),
                            t.current_pipe = "item"in t ? t.item : "")
                        }
                        ), this)
                    }
                    t.list_type = twig.attr("current_pipe"in t ? t.current_pipe : "", "is_archive") ? "archived" : "",
                    this.getParent(t).render_(e, t, twig.extend({}, this.getBlocks(), i))
                }
                ,
                t.prototype.block_list_top_right = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    t.append('<div class="list__body-right__top">'),
                    new (e._get("interface/common/leads/top_nav.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        selected: {
                            pipe: !0
                        },
                        user_rank: "user_rank"in i ? i.user_rank : ""
                    })),
                    new (e._get("interface/leads_pipeline/search_block.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        id: !1,
                        search_placeholder: twig.attr("lang"in i ? i.lang : "", "list_search_in_filter"),
                        user_rank: "user_rank"in i ? i.user_rank : ""
                    })),
                    new (e._get("interface/common/leads/top_actions.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        pipelines: twig.attr("filter"in i ? i.filter : "", "pipelines"),
                        list_type: "list_type"in i ? i.list_type : "",
                        user_rank: "user_rank"in i ? i.user_rank : "",
                        is_kommo: "is_kommo"in i ? i.is_kommo : "",
                        is_admin: "is_admin"in i ? i.is_admin : ""
                    })),
                    "use_per_account"in i && i.use_per_account && t.append("..."),
                    t.append("</div>")
                }
                ,
                t.prototype.block_static = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    e.append(twig.filter.escape(this.env_, this.env_.invoke("inject_static", ["leads_pipeline.php"], this), "light_escape", null, !0))
                }
                ,
                t.prototype.block_list_body = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    new (e._get("interface/leads_pipeline/inner.twig"))(this.env_).render_(t, i)
                }
                ,
                t.prototype.block_list_footer = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    new (e._get("interface/leads_pipeline/more_tmpl.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        id: "leads_pipeline_load_more",
                        class_name: "leads-pipeline__autoload-load-more",
                        shown: !0
                    })),
                    t.append('<div class="list__footer footer__pipeline"><div class="pipeline_manage" id="pipeline_manage">'),
                    twig.attr(twig.attr("user_rights"in i ? i.user_rights : "", "leads"), "delete") && t.append('<div class="pipeline_manage__item pipeline_manage__item_del js-pipeline-droppable" data-status-id="delete"><span class="icon icon-trash"></span></div>'),
                    t.append('<div id="status_id_143" class="pipeline_manage__item pipeline_manage__item_lost js-pipeline-droppable" data-status-id="143"><span class="pipeline_manage__item_text">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "pipeline_manage__item_text_lost"), "light_escape", null, !0)),
                    t.append('</span></div><div id="status_id_142" class="pipeline_manage__item pipeline_manage__item_won js-pipeline-droppable" data-status-id="142"><span class="pipeline_manage__item_text">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "pipeline_manage__item_text_won"), "light_escape", null, !0)),
                    t.append("</span></div></div></div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_leads_pipeline_index"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/leads_pipeline/index", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e),
                    this.setBlocks({
                        inner: twig.bind(this.block_inner, this)
                    })
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(e) {
                    return !1
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    e.append(this.renderBlock("inner", t, i))
                }
                ,
                t.prototype.block_inner = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    t.append('<div class="pipeline__stats pipeline-leads__stats" id="pipeline__stats"></div>'),
                    new (e._get("interface/leads_pipeline/main.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        rows: "leads_info_by_status"in i ? i.leads_info_by_status : "",
                        items: "items"in i ? i.items : ""
                    }))
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_leads_pipeline_inner"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !0
                }
                ,
                e._add("interface/leads_pipeline/inner", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e)
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(e) {
                    return !1
                }
                ,
                t.prototype.render_ = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    "can_edit"in i && i.can_edit || (i.can_edit = twig.attr("item"in i ? i.item : "", "can_edit")),
                    t.append('<div id="pipeline_item_'),
                    t.append(twig.filter.escape(this.env_, twig.attr("item"in i ? i.item : "", "id"), "light_escape", null, !0)),
                    t.append('" class="pipeline_leads__item pipeline_leads__item_flex js-hs-prevent '),
                    "can_edit"in i && i.can_edit && t.append("js-pipeline-sortable pipeline_leads__item-sortable"),
                    t.append('" data-id="'),
                    t.append(twig.filter.escape(this.env_, twig.attr("item"in i ? i.item : "", "id"), "light_escape", null, !0)),
                    t.append('">'),
                    new (e._get("interface/leads_pipeline/item_inner.twig"))(this.env_).render_(t, i),
                    t.append("</div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_leads_pipeline_item"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/leads_pipeline/item", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e)
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(e) {
                    return !1
                }
                ,
                t.prototype.render_ = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    1 == twig.attr("row"in i ? i.row : "", "type") && twig.attr("item"in i ? i.item : "", "category") ? (t.append('<div class="pipeline_leads__item js-hs-prevent pipeline-unsorted__item js-unsorted-item js-pipeline-sortable" id="pipeline_item_'),
                    t.append(twig.filter.escape(this.env_, twig.attr("item"in i ? i.item : "", "id"), "light_escape", null, !0)),
                    t.append('" data-id="'),
                    t.append(twig.filter.escape(this.env_, twig.attr("item"in i ? i.item : "", "id"), "light_escape", null, !0)),
                    t.append('">'),
                    new (e._get("interface/leads_pipeline/unsorted/item.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        source_data: twig.attr("item"in i ? i.item : "", "source_data"),
                        main_contact: twig.attr("item"in i ? i.item : "", "main_contact"),
                        category: twig.attr("item"in i ? i.item : "", "category"),
                        date_create: twig.attr("item"in i ? i.item : "", "date_create")
                    })),
                    t.append("</div>")) : new (e._get("interface/leads_pipeline/item.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        row: "row"in i ? i.row : "",
                        item: "item"in i ? i.item : "",
                        row_index: "row_index"in i ? i.row_index : ""
                    }))
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_leads_pipeline_item_controller"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/leads_pipeline/item_controller", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e)
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(e) {
                    return !1
                }
                ,
                t.prototype.render_ = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    i.tc_p = twig.attr("tile_config"in i ? i.tile_config : "", "positions"),
                    i.tile = {
                        1: twig.attr("item"in i ? i.item : "", "main_contact"),
                        2: "item"in i ? i.item : "",
                        3: twig.attr("item"in i ? i.item : "", "company_name")
                    },
                    i.cf_hide_for_stage = twig.attr("pipeline_card_hidden_fields"in i ? i.pipeline_card_hidden_fields : "", twig.attr("item"in i ? i.item : "", "status"), void 0, "array"),
                    i.p_1 = twig.contains("cf_hide_for_stage"in i ? i.cf_hide_for_stage : "", twig.attr(twig.attr("tc_p"in i ? i.tc_p : "", "position_1"), "field_name")) ? [] : twig.attr("tc_p"in i ? i.tc_p : "", "position_1"),
                    i.p_2 = twig.contains("cf_hide_for_stage"in i ? i.cf_hide_for_stage : "", twig.attr(twig.attr("tc_p"in i ? i.tc_p : "", "position_2"), "field_name")) ? [] : twig.attr("tc_p"in i ? i.tc_p : "", "position_2"),
                    i.p_3 = twig.contains("cf_hide_for_stage"in i ? i.cf_hide_for_stage : "", twig.attr(twig.attr("tc_p"in i ? i.tc_p : "", "position_3"), "field_name")) ? [] : twig.attr("tc_p"in i ? i.tc_p : "", "position_3"),
                    i.p_4 = twig.contains("cf_hide_for_stage"in i ? i.cf_hide_for_stage : "", twig.attr(twig.attr("tc_p"in i ? i.tc_p : "", "position_4"), "field_name")) ? [] : twig.attr("tc_p"in i ? i.tc_p : "", "position_4"),
                    i.p_5 = twig.contains("cf_hide_for_stage"in i ? i.cf_hide_for_stage : "", twig.attr(twig.attr("tc_p"in i ? i.tc_p : "", "position_5"), "field_name")) ? [] : twig.attr("tc_p"in i ? i.tc_p : "", "position_5"),
                    i.p_6 = twig.contains("cf_hide_for_stage"in i ? i.cf_hide_for_stage : "", twig.attr(twig.attr("tc_p"in i ? i.tc_p : "", "position_6"), "field_name")) ? [] : twig.attr("tc_p"in i ? i.tc_p : "", "position_6"),
                    i.p_7 = twig.contains("cf_hide_for_stage"in i ? i.cf_hide_for_stage : "", twig.attr(twig.attr("tc_p"in i ? i.tc_p : "", "position_7"), "field_name")) ? [] : twig.attr("tc_p"in i ? i.tc_p : "", "position_7"),
                    i.pos_1 = twig.attr(twig.attr(twig.attr("item"in i ? i.item : "", "cf"), twig.attr("p_1"in i ? i.p_1 : "", "entity_type"), void 0, "array"), "cf" + twig.attr("p_1"in i ? i.p_1 : "", "field_name"), void 0, "array", !0) ? twig.filter.def(twig.attr(twig.attr(twig.attr("item"in i ? i.item : "", "cf"), twig.attr("p_1"in i ? i.p_1 : "", "entity_type"), void 0, "array"), "cf" + twig.attr("p_1"in i ? i.p_1 : "", "field_name"), void 0, "array"), twig.attr(twig.attr("tile"in i ? i.tile : "", twig.attr("p_1"in i ? i.p_1 : "", "entity_type"), void 0, "array"), twig.attr("p_1"in i ? i.p_1 : "", "field_name"), void 0, "array")) : twig.attr(twig.attr("tile"in i ? i.tile : "", twig.attr("p_1"in i ? i.p_1 : "", "entity_type"), void 0, "array"), twig.attr("p_1"in i ? i.p_1 : "", "field_name"), void 0, "array"),
                    i.pos_2 = twig.attr(twig.attr(twig.attr("item"in i ? i.item : "", "cf"), twig.attr("p_2"in i ? i.p_2 : "", "entity_type"), void 0, "array"), "cf" + twig.attr("p_2"in i ? i.p_2 : "", "field_name"), void 0, "array", !0) ? twig.filter.def(twig.attr(twig.attr(twig.attr("item"in i ? i.item : "", "cf"), twig.attr("p_2"in i ? i.p_2 : "", "entity_type"), void 0, "array"), "cf" + twig.attr("p_2"in i ? i.p_2 : "", "field_name"), void 0, "array"), twig.attr(twig.attr("tile"in i ? i.tile : "", twig.attr("p_2"in i ? i.p_2 : "", "entity_type"), void 0, "array"), twig.attr("p_2"in i ? i.p_2 : "", "field_name"), void 0, "array")) : twig.attr(twig.attr("tile"in i ? i.tile : "", twig.attr("p_2"in i ? i.p_2 : "", "entity_type"), void 0, "array"), twig.attr("p_2"in i ? i.p_2 : "", "field_name"), void 0, "array"),
                    i.pos_3 = twig.attr(twig.attr(twig.attr("item"in i ? i.item : "", "cf"), twig.attr("p_3"in i ? i.p_3 : "", "entity_type"), void 0, "array"), "cf" + twig.attr("p_3"in i ? i.p_3 : "", "field_name"), void 0, "array", !0) ? twig.filter.def(twig.attr(twig.attr(twig.attr("item"in i ? i.item : "", "cf"), twig.attr("p_3"in i ? i.p_3 : "", "entity_type"), void 0, "array"), "cf" + twig.attr("p_3"in i ? i.p_3 : "", "field_name"), void 0, "array"), twig.attr(twig.attr("tile"in i ? i.tile : "", twig.attr("p_3"in i ? i.p_3 : "", "entity_type"), void 0, "array"), twig.attr("p_3"in i ? i.p_3 : "", "field_name"), void 0, "array")) : twig.attr(twig.attr("tile"in i ? i.tile : "", twig.attr("p_3"in i ? i.p_3 : "", "entity_type"), void 0, "array"), twig.attr("p_3"in i ? i.p_3 : "", "field_name"), void 0, "array"),
                    i.pos_4 = twig.attr(twig.attr(twig.attr("item"in i ? i.item : "", "cf"), twig.attr("p_4"in i ? i.p_4 : "", "entity_type"), void 0, "array"), "cf" + twig.attr("p_4"in i ? i.p_4 : "", "field_name"), void 0, "array", !0) ? twig.filter.def(twig.attr(twig.attr(twig.attr("item"in i ? i.item : "", "cf"), twig.attr("p_4"in i ? i.p_4 : "", "entity_type"), void 0, "array"), "cf" + twig.attr("p_4"in i ? i.p_4 : "", "field_name"), void 0, "array"), twig.attr(twig.attr("tile"in i ? i.tile : "", twig.attr("p_4"in i ? i.p_4 : "", "entity_type"), void 0, "array"), twig.attr("p_4"in i ? i.p_4 : "", "field_name"), void 0, "array")) : twig.attr(twig.attr("tile"in i ? i.tile : "", twig.attr("p_4"in i ? i.p_4 : "", "entity_type"), void 0, "array"), twig.attr("p_4"in i ? i.p_4 : "", "field_name"), void 0, "array"),
                    i.pos_5 = twig.attr(twig.attr(twig.attr("item"in i ? i.item : "", "cf"), twig.attr("p_5"in i ? i.p_5 : "", "entity_type"), void 0, "array"), "cf" + twig.attr("p_5"in i ? i.p_5 : "", "field_name"), void 0, "array", !0) ? twig.filter.def(twig.attr(twig.attr(twig.attr("item"in i ? i.item : "", "cf"), twig.attr("p_5"in i ? i.p_5 : "", "entity_type"), void 0, "array"), "cf" + twig.attr("p_5"in i ? i.p_5 : "", "field_name"), void 0, "array"), twig.attr(twig.attr("tile"in i ? i.tile : "", twig.attr("p_5"in i ? i.p_5 : "", "entity_type"), void 0, "array"), twig.attr("p_5"in i ? i.p_5 : "", "field_name"), void 0, "array")) : twig.attr(twig.attr("tile"in i ? i.tile : "", twig.attr("p_5"in i ? i.p_5 : "", "entity_type"), void 0, "array"), twig.attr("p_5"in i ? i.p_5 : "", "field_name"), void 0, "array"),
                    i.pos_6 = twig.attr(twig.attr(twig.attr("item"in i ? i.item : "", "cf"), twig.attr("p_6"in i ? i.p_6 : "", "entity_type"), void 0, "array"), "cf" + twig.attr("p_6"in i ? i.p_6 : "", "field_name"), void 0, "array", !0) ? twig.filter.def(twig.attr(twig.attr(twig.attr("item"in i ? i.item : "", "cf"), twig.attr("p_6"in i ? i.p_6 : "", "entity_type"), void 0, "array"), "cf" + twig.attr("p_6"in i ? i.p_6 : "", "field_name"), void 0, "array"), twig.attr(twig.attr("tile"in i ? i.tile : "", twig.attr("p_6"in i ? i.p_6 : "", "entity_type"), void 0, "array"), twig.attr("p_6"in i ? i.p_6 : "", "field_name"), void 0, "array")) : twig.attr(twig.attr("tile"in i ? i.tile : "", twig.attr("p_6"in i ? i.p_6 : "", "entity_type"), void 0, "array"), twig.attr("p_6"in i ? i.p_6 : "", "field_name"), void 0, "array"),
                    i.pos_7 = twig.attr(twig.attr(twig.attr("item"in i ? i.item : "", "cf"), twig.attr("p_7"in i ? i.p_7 : "", "entity_type"), void 0, "array"), "cf" + twig.attr("p_7"in i ? i.p_7 : "", "field_name"), void 0, "array", !0) ? twig.filter.def(twig.attr(twig.attr(twig.attr("item"in i ? i.item : "", "cf"), twig.attr("p_7"in i ? i.p_7 : "", "entity_type"), void 0, "array"), "cf" + twig.attr("p_7"in i ? i.p_7 : "", "field_name"), void 0, "array"), twig.attr(twig.attr("tile"in i ? i.tile : "", twig.attr("p_7"in i ? i.p_7 : "", "entity_type"), void 0, "array"), twig.attr("p_7"in i ? i.p_7 : "", "field_name"), void 0, "array")) : twig.attr(twig.attr("tile"in i ? i.tile : "", twig.attr("p_7"in i ? i.p_7 : "", "entity_type"), void 0, "array"), twig.attr("p_7"in i ? i.p_7 : "", "field_name"), void 0, "array"),
                    1 == twig.attr("p_1"in i ? i.p_1 : "", "entity_type") && "name" == twig.attr("p_1"in i ? i.p_1 : "", "field_name") && (i.pos_1 = twig.attr("tile"in i ? i.tile : "", twig.attr("p_1"in i ? i.p_1 : "", "entity_type"), void 0, "array") ? this.env_.filter("contact_name", "pos_1"in i ? i.pos_1 : "") : ""),
                    1 == twig.attr("p_2"in i ? i.p_2 : "", "entity_type") && "name" == twig.attr("p_2"in i ? i.p_2 : "", "field_name") && (i.pos_2 = twig.attr("tile"in i ? i.tile : "", twig.attr("p_2"in i ? i.p_2 : "", "entity_type"), void 0, "array") ? this.env_.filter("contact_name", "pos_2"in i ? i.pos_2 : "") : ""),
                    1 == twig.attr("p_3"in i ? i.p_3 : "", "entity_type") && "name" == twig.attr("p_3"in i ? i.p_3 : "", "field_name") && (i.pos_3 = twig.attr("tile"in i ? i.tile : "", twig.attr("p_3"in i ? i.p_3 : "", "entity_type"), void 0, "array") ? this.env_.filter("contact_name", "pos_3"in i ? i.pos_3 : "") : ""),
                    1 == twig.attr("p_4"in i ? i.p_4 : "", "entity_type") && "name" == twig.attr("p_4"in i ? i.p_4 : "", "field_name") && (i.pos_4 = twig.attr("tile"in i ? i.tile : "", twig.attr("p_4"in i ? i.p_4 : "", "entity_type"), void 0, "array") ? this.env_.filter("contact_name", "pos_4"in i ? i.pos_4 : "") : ""),
                    1 == twig.attr("p_5"in i ? i.p_5 : "", "entity_type") && "name" == twig.attr("p_5"in i ? i.p_5 : "", "field_name") && (i.pos_5 = twig.attr("tile"in i ? i.tile : "", twig.attr("p_5"in i ? i.p_5 : "", "entity_type"), void 0, "array") ? this.env_.filter("contact_name", "pos_5"in i ? i.pos_5 : "") : ""),
                    1 == twig.attr("p_6"in i ? i.p_6 : "", "entity_type") && "name" == twig.attr("p_6"in i ? i.p_6 : "", "field_name") && (i.pos_6 = twig.attr("tile"in i ? i.tile : "", twig.attr("p_6"in i ? i.p_6 : "", "entity_type"), void 0, "array") ? this.env_.filter("contact_name", "pos_6"in i ? i.pos_6 : "") : ""),
                    1 == twig.attr("p_7"in i ? i.p_7 : "", "entity_type") && "name" == twig.attr("p_7"in i ? i.p_7 : "", "field_name") && (i.pos_7 = twig.attr("tile"in i ? i.tile : "", twig.attr("p_7"in i ? i.p_7 : "", "entity_type"), void 0, "array") ? this.env_.filter("contact_name", "pos_7"in i ? i.pos_7 : "") : ""),
                    i.lock_rendered = !1,
                    i.pos3_rendered = !1,
                    twig.attr("tile_config"in i ? i.tile_config : "", "show_avatar") && (t.append('<div class="pipeline_leads__avatar"><span style="background-image: url('),
                    t.append(twig.filter.escape(this.env_, twig.attr(twig.attr("item"in i ? i.item : "", "main_contact"), "profile_avatar"), "light_escape", null, !0)),
                    t.append(')"></span></div>')),
                    t.append('<div class="pipeline_leads__info'),
                    twig.attr("tile_config"in i ? i.tile_config : "", "show_avatar") && t.append(" pipeline_leads__info_narrow"),
                    t.append('" id="lead_'),
                    t.append(twig.filter.escape(this.env_, twig.attr("item"in i ? i.item : "", "id"), "light_escape", null, !0)),
                    t.append('">'),
                    (twig.attr(twig.attr("tc_p"in i ? i.tc_p : "", "position_1"), "field_name") && "pos_1"in i && i.pos_1 || twig.attr(twig.attr("tc_p"in i ? i.tc_p : "", "position_2"), "field_name") && "pos_2"in i && i.pos_2) && (t.append('<div class="pipeline_leads__top-block"><div class="pipeline_leads__linked-entities">'),
                    i.lock_rendered = !0,
                    "can_edit"in i && i.can_edit || t.append('<svg class="svg-icon pipeline_leads__item_mover_lock svg-leads--lock-dims"><use xlink:href="#leads--lock"></use></svg>'),
                    twig.attr(twig.attr("tc_p"in i ? i.tc_p : "", "position_1"), "field_name") && "pos_1"in i && i.pos_1 && new (e._get("interface/leads_pipeline/item_tile_filtered.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        type: twig.attr("tc_p"in i ? i.tc_p : "", "position_1"),
                        item: "item"in i ? i.item : "",
                        value: "pos_1"in i ? i.pos_1 : "",
                        after: twig.attr(twig.attr("tc_p"in i ? i.tc_p : "", "position_2"), "field_name") && "pos_2"in i && i.pos_2 ? ", " : ""
                    })),
                    twig.attr(twig.attr("tc_p"in i ? i.tc_p : "", "position_2"), "field_name") && "pos_2"in i && i.pos_2 && (t.append('<span class="pipeline_leads__linked-entities_company">'),
                    new (e._get("interface/leads_pipeline/item_tile_filtered.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        type: twig.attr("tc_p"in i ? i.tc_p : "", "position_2"),
                        item: "item"in i ? i.item : "",
                        value: "pos_2"in i ? i.pos_2 : ""
                    })),
                    t.append("</span>")),
                    t.append("</div>"),
                    i.pos3_rendered = !0,
                    twig.attr(twig.attr("tc_p"in i ? i.tc_p : "", "position_3"), "field_name") && "pos_3"in i && i.pos_3 && (t.append('<div class="pipeline_leads__top-date">'),
                    new (e._get("interface/leads_pipeline/item_tile_filtered.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        type: twig.attr("tc_p"in i ? i.tc_p : "", "position_3"),
                        item: "item"in i ? i.item : "",
                        value: "pos_3"in i ? i.pos_3 : ""
                    })),
                    t.append("</div>")),
                    t.append("</div>")),
                    twig.attr(twig.attr("tc_p"in i ? i.tc_p : "", "position_4"), "field_name") && "pos_4"in i && i.pos_4 && (t.append('<div class="pipeline_leads__row">'),
                    "lock_rendered"in i && i.lock_rendered || (i.lock_rendered = !0,
                    "can_edit"in i && i.can_edit || t.append('<svg class="svg-icon pipeline_leads__item_mover_lock svg-leads--lock-dims"><use xlink:href="#leads--lock"></use></svg>')),
                    t.append('<div class="pipeline_leads__field h-text-overflow">'),
                    new (e._get("interface/leads_pipeline/item_tile_filtered.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        type: twig.attr("tc_p"in i ? i.tc_p : "", "position_4"),
                        item: "item"in i ? i.item : "",
                        value: "pos_4"in i ? i.pos_4 : ""
                    })),
                    t.append("</div>"),
                    "pos3_rendered"in i && i.pos3_rendered || (i.pos3_rendered = !0,
                    twig.attr(twig.attr("tc_p"in i ? i.tc_p : "", "position_3"), "field_name") && "pos_3"in i && i.pos_3 && (t.append('<div class="pipeline_leads__top-date">'),
                    new (e._get("interface/leads_pipeline/item_tile_filtered.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        type: twig.attr("tc_p"in i ? i.tc_p : "", "position_3"),
                        item: "item"in i ? i.item : "",
                        value: "pos_3"in i ? i.pos_3 : ""
                    })),
                    t.append("</div>"))),
                    t.append("</div>")),
                    t.append('<div class="pipeline_leads__lead-title">'),
                    "lock_rendered"in i && i.lock_rendered || (i.lock_rendered = !0,
                    "can_edit"in i && i.can_edit || t.append('<svg class="svg-icon pipeline_leads__item_mover_lock svg-leads--lock-dims"><use xlink:href="#leads--lock"></use></svg>')),
                    t.append('<a class="pipeline_leads__title-text h-text-overflow js-navigate-link" title="'),
                    t.append(twig.filter.escape(this.env_, twig.attr(twig.attr("item"in i ? i.item : "", "name"), "text"), "light_escape", null, !0)),
                    t.append('" href="'),
                    t.append(twig.filter.escape(this.env_, twig.attr(twig.attr("item"in i ? i.item : "", "name"), "url"), "light_escape", null, !0)),
                    t.append('">'),
                    twig.attr(twig.attr("tc_p"in i ? i.tc_p : "", "position_5"), "field_name") && "pos_5"in i && i.pos_5 ? (i.type = twig.attr("tc_p"in i ? i.tc_p : "", "position_5"),
                    i.value = "pos_5"in i ? i.pos_5 : "") : (i.type = "",
                    i.value = this.env_.filter("i18n", "No value")),
                    new (e._get("interface/leads_pipeline/item_tile_filtered.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        type: "type"in i ? i.type : "",
                        item: "item"in i ? i.item : "",
                        value: "value"in i ? i.value : ""
                    })),
                    t.append("</a>"),
                    "pos3_rendered"in i && i.pos3_rendered || (i.pos3_rendered = !0,
                    twig.attr(twig.attr("tc_p"in i ? i.tc_p : "", "position_3"), "field_name") && "pos_3"in i && i.pos_3 && (t.append('<div class="pipeline_leads__top-date">'),
                    new (e._get("interface/leads_pipeline/item_tile_filtered.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        type: twig.attr("tc_p"in i ? i.tc_p : "", "position_3"),
                        item: "item"in i ? i.item : "",
                        value: "pos_3"in i ? i.pos_3 : ""
                    })),
                    t.append("</div>"))),
                    t.append("</div>"),
                    (twig.attr(twig.attr("tc_p"in i ? i.tc_p : "", "position_6"), "field_name") && "pos_6"in i && i.pos_6 || !("pos3_rendered"in i) || !i.pos3_rendered) && (t.append('<div class="pipeline_leads__row">'),
                    "lock_rendered"in i && i.lock_rendered || "can_edit"in i && i.can_edit || t.append('<svg class="svg-icon pipeline_leads__item_mover_lock svg-leads--lock-dims"><use xlink:href="#leads--lock"></use></svg>'),
                    t.append('<div class="pipeline_leads__field h-text-overflow">'),
                    new (e._get("interface/leads_pipeline/item_tile_filtered.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        type: twig.attr("tc_p"in i ? i.tc_p : "", "position_6"),
                        item: "item"in i ? i.item : "",
                        value: "pos_6"in i ? i.pos_6 : ""
                    })),
                    t.append("</div>"),
                    "pos3_rendered"in i && i.pos3_rendered || (i.pos3_rendered = !0,
                    twig.attr(twig.attr("tc_p"in i ? i.tc_p : "", "position_3"), "field_name") && "pos_3"in i && i.pos_3 && (t.append('<div class="pipeline_leads__top-date">'),
                    new (e._get("interface/leads_pipeline/item_tile_filtered.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        type: twig.attr("tc_p"in i ? i.tc_p : "", "position_3"),
                        item: "item"in i ? i.item : "",
                        value: "pos_3"in i ? i.pos_3 : ""
                    })),
                    t.append("</div>"))),
                    t.append("</div>")),
                    t.append('<div class="pipeline_leads__middle-block '),
                    twig.filter.length(this.env_, twig.attr(twig.attr("item"in i ? i.item : "", "tags"), "items")) > 0 && t.append("pipeline_leads__middle-block_has-tags"),
                    t.append('">'),
                    twig.attr(twig.attr("tc_p"in i ? i.tc_p : "", "position_7"), "field_name") && "pos_7"in i && i.pos_7 && (t.append('<span class="pipeline_leads__note pipeline_leads__grey h-text-overflow">'),
                    new (e._get("interface/leads_pipeline/item_tile_filtered.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        type: twig.attr("tc_p"in i ? i.tc_p : "", "position_7"),
                        item: "item"in i ? i.item : "",
                        value: "pos_7"in i ? i.pos_7 : ""
                    })),
                    t.append("</span>")),
                    t.append('<div class="pipeline_leads__tags '),
                    "can_edit"in i && i.can_edit || t.append("pipeline_leads__tags_no-edit"),
                    t.append('">'),
                    new (e._get("interface/controls/tags.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        items: twig.attr(twig.attr("item"in i ? i.item : "", "tags"), "items"),
                        can_edit: "can_edit"in i ? i.can_edit : ""
                    })),
                    142 != twig.attr("item"in i ? i.item : "", "status") && 143 != twig.attr("item"in i ? i.item : "", "status") && twig.attr("item"in i ? i.item : "", "lead_mark") && (t.append('<span class="pipeline_leads__task-days pipeline_leads__task-days_'),
                    t.append(twig.filter.escape(this.env_, twig.attr("item"in i ? i.item : "", "lead_mark"), "light_escape", null, !0)),
                    t.append('">'),
                    "yellow" == twig.attr("item"in i ? i.item : "", "lead_mark") ? t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "no_tasks"), "light_escape", null, !0)) : "green" == twig.attr("item"in i ? i.item : "", "lead_mark") ? t.append(twig.filter.escape(this.env_, this.env_.filter("task_date", "now", "date"), "light_escape", null, !0)) : "red" == twig.attr("item"in i ? i.item : "", "lead_mark") && twig.attr("item"in i ? i.item : "", "lead_mark_days") && (t.append(twig.filter.escape(this.env_, twig.attr("item"in i ? i.item : "", "lead_mark_days"), "light_escape", null, !0)),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "todo_marker_days"), "light_escape", null, !0))),
                    t.append("</span>")),
                    t.append("</div>"),
                    143 == twig.attr("item"in i ? i.item : "", "status") && twig.attr("item"in i ? i.item : "", "loss_reason", void 0, void 0, !0) && (i.loss_reason_name = twig.attr(twig.attr("item"in i ? i.item : "", "loss_reason"), "name"),
                    "loss_reason_name"in i && i.loss_reason_name || (twig.attr(twig.attr("item"in i ? i.item : "", "loss_reason"), "id") ? i.loss_reason_name = twig.attr("lang"in i ? i.lang : "", "loss_reason_deleted") : i.loss_reason_name = this.env_.filter("i18n", "No reason")),
                    t.append('<span class="pipeline_leads__loss-reason js-loss-reason-open-modal" title="'),
                    t.append(twig.filter.escape(this.env_, "loss_reason_name"in i ? i.loss_reason_name : "", "light_escape", null, !0)),
                    t.append('" data-id="'),
                    t.append(twig.filter.escape(this.env_, twig.attr(twig.attr("item"in i ? i.item : "", "loss_reason"), "id"), "light_escape", null, !0)),
                    t.append('">'),
                    t.append(twig.filter.escape(this.env_, "loss_reason_name"in i ? i.loss_reason_name : "", "light_escape", null, !0)),
                    t.append("</span>")),
                    t.append('<div class="pipeline_leads__tasks">'),
                    142 != twig.attr("item"in i ? i.item : "", "status") && 143 != twig.attr("item"in i ? i.item : "", "status") && twig.attr("item"in i ? i.item : "", "lead_mark") && ("yellow" == twig.attr("item"in i ? i.item : "", "lead_mark") ? i.mark_title = twig.attr("lang"in i ? i.lang : "", "no_todo_assigned_circle") : "green" == twig.attr("item"in i ? i.item : "", "lead_mark") ? i.mark_title = twig.attr("lang"in i ? i.lang : "", "todo_today") : "red" == twig.attr("item"in i ? i.item : "", "lead_mark") && (i.mark_title = twig.attr("lang"in i ? i.lang : "", "todo_expired_circle")),
                    t.append('<span class="pipeline_leads__task-icon pipeline_leads__task-icon_'),
                    t.append(twig.filter.escape(this.env_, twig.attr("item"in i ? i.item : "", "lead_mark"), "light_escape", null, !0)),
                    t.append('" title="'),
                    t.append(twig.filter.escape(this.env_, "mark_title"in i ? i.mark_title : "", "light_escape", null, !0)),
                    t.append('"></span>')),
                    t.append("</div></div>"),
                    twig.attr("item"in i ? i.item : "", "last_message") && twig.attr("tile_config"in i ? i.tile_config : "", "show_last_message") && new (e._get("interface/pipeline/chat_message.twig"))(this.env_).render_(t, twig.extend({}, i, twig.filter.merge(twig.attr("item"in i ? i.item : "", "last_message"), {
                        has_tags: twig.filter.length(this.env_, twig.attr(twig.attr("item"in i ? i.item : "", "tags"), "items")) > 0
                    }))),
                    new (e._get("interface/controls/checkbox.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        id: "lead_" + twig.attr("item"in i ? i.item : "", "id"),
                        value: twig.attr("item"in i ? i.item : "", "id"),
                        class_name: "pipeline_leads__lead-checkbox",
                        checked: twig.attr("item"in i ? i.item : "", "is_checked")
                    })),
                    t.append("</div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_leads_pipeline_item_inner"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/leads_pipeline/item_inner", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e)
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(e) {
                    return !1
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    this.env_.test("iterable", "value"in t ? t.value : "") && !twig.contains(["chained_list"], twig.attr("type"in t ? t.type : "", "format")) ? t.val = twig.filter.join("value"in t ? t.value : "", ",") : t.val = "value"in t ? t.value : "",
                    2 == twig.attr("type"in t ? t.type : "", "entity_type") && "name" == twig.attr("type"in t ? t.type : "", "field_name") ? (e.append(twig.filter.escape(this.env_, this.env_.filter("lead_name", twig.attr(twig.attr("item"in t ? t.item : "", "name"), "text"), twig.attr("item"in t ? t.item : "", "id")), "light_escape", null, !0)),
                    e.append(twig.filter.escape(this.env_, "after"in t ? t.after : "", "light_escape", null, !0))) : "date" == twig.attr("type"in t ? t.type : "", "format") ? (e.append(twig.filter.escape(this.env_, this.env_.filter("date", "val"in t ? t.val : "", "short"), "light_escape", null, !0)),
                    e.append(twig.filter.escape(this.env_, "after"in t ? t.after : "", "light_escape", null, !0))) : "date_time" == twig.attr("type"in t ? t.type : "", "format") ? (e.append(twig.filter.escape(this.env_, this.env_.filter("date", "val"in t ? t.val : "", "full_date"), "light_escape", null, !0)),
                    e.append(twig.filter.escape(this.env_, "after"in t ? t.after : "", "light_escape", null, !0))) : "time" == twig.attr("type"in t ? t.type : "", "format") ? (e.append(twig.filter.escape(this.env_, this.env_.filter("time", "val"in t ? t.val : "", !1), "light_escape", null, !0)),
                    e.append(twig.filter.escape(this.env_, "after"in t ? t.after : "", "light_escape", null, !0))) : "pipeline_date" == twig.attr("type"in t ? t.type : "", "format") ? (e.append(twig.filter.escape(this.env_, this.env_.filter("pipeline_date", "val"in t ? t.val : ""), "light_escape", null, !0)),
                    e.append(twig.filter.escape(this.env_, "after"in t ? t.after : "", "light_escape", null, !0))) : "phone" == twig.attr("type"in t ? t.type : "", "format") ? (e.append(twig.filter.escape(this.env_, this.env_.filter("phone", "val"in t ? t.val : ""), "light_escape", null, !0)),
                    e.append(twig.filter.escape(this.env_, "after"in t ? t.after : "", "light_escape", null, !0))) : "price" == twig.attr("type"in t ? t.type : "", "format") ? (e.append(twig.filter.escape(this.env_, this.env_.filter("price", "val"in t ? t.val : ""), "light_escape", null, !0)),
                    e.append(twig.filter.escape(this.env_, "after"in t ? t.after : "", "light_escape", null, !0))) : "monetary" == twig.attr("type"in t ? t.type : "", "format") ? (e.append(twig.filter.escape(this.env_, this.env_.filter("price", "val"in t ? t.val : "", [!1, 0, !1, twig.attr(twig.attr("type"in t ? t.type : "", "cf_settings"), "currency")]), "light_escape", null, !0)),
                    e.append(twig.filter.escape(this.env_, "after"in t ? t.after : "", "light_escape", null, !0))) : "chained_list" == twig.attr("type"in t ? t.type : "", "format") ? e.append(twig.filter.escape(this.env_, this.env_.filter("chained_list_value", "val"in t ? t.val : ""), "light_escape", null, !0)) : (e.append(twig.filter.escape(this.env_, "val"in t ? t.val : "", "light_escape", null, !0)),
                    e.append(twig.filter.escape(this.env_, "after"in t ? t.after : "", "light_escape", null, !0)))
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_leads_pipeline_item_tile_filtered"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/leads_pipeline/item_tile_filtered", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e)
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(e) {
                    return !1
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    e.append('<div class="pipeline_leads__load_more-error" data-id="'),
                    e.append(twig.filter.escape(this.env_, "status_id"in t ? t.status_id : "", "light_escape", null, !0)),
                    e.append('">'),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Failed to load"), "light_escape", null, !0)),
                    "with_retry"in t && t.with_retry && (e.append(', <span class="pipeline_leads__load_more-error-retry js-load-more-in-status-error">'),
                    e.append(twig.filter.escape(this.env_, twig.filter.lower(this.env_, this.env_.filter("i18n", "Try again")), "light_escape", null, !0)),
                    e.append("</span>")),
                    e.append("</div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_leads_pipeline_load_more_error"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/leads_pipeline/load_more_error", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e),
                    this.setBlocks({
                        body: twig.bind(this.block_body, this)
                    })
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(t) {
                    return e._get("interface/pipeline/bidirectional_scroll_page.twig")
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    this.getParent(t).render_(e, t, twig.extend({}, this.getBlocks(), i))
                }
                ,
                t.prototype.block_body = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    new (e._get("interface/leads_pipeline/body.twig"))(this.env_).render_(t, i)
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_leads_pipeline_main"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/leads_pipeline/main", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e)
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(e) {
                    return !1
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    e.append('<div class="pipeline_leads__load_more js-pipeline-load-more '),
                    e.append(twig.filter.escape(this.env_, "class_name"in t ? t.class_name : "", "light_escape", null, !0)),
                    e.append('" id="'),
                    e.append(twig.filter.escape(this.env_, "id"in t ? t.id : "", "light_escape", null, !0)),
                    e.append('" '),
                    "shown"in t && t.shown || e.append('style="display:none;"'),
                    e.append('><span class="pipeline_leads__load_more__label">'),
                    e.append(twig.filter.escape(this.env_, twig.attr("lang"in t ? t.lang : "", "pipeline_leads_show_more"), "light_escape", null, !0)),
                    e.append('</span><span class="pipeline_leads__load_more__spinner spinner-icon spinner-icon-abs-center"></span></div>')
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_leads_pipeline_more_tmpl"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/leads_pipeline/more_tmpl", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e)
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(e) {
                    return !1
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    e.append('<div class="pipeline__no-items"><p>'),
                    e.append(twig.filter.escape(this.env_, "pipeline_no_results"in t ? t.pipeline_no_results : "", "light_escape", null, !0)),
                    e.append(' <a href="'),
                    e.append(twig.filter.escape(this.env_, "filter_url"in t ? t.filter_url : "", "light_escape", null, !0)),
                    e.append('?skip_filter=Y" class="js-navigate-link" title="">'),
                    e.append(twig.filter.escape(this.env_, "pipeline_reset_filter"in t ? t.pipeline_reset_filter : "", "light_escape", null, !0)),
                    e.append("</a></p></div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_leads_pipeline_no_items_filter_tmpl"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/leads_pipeline/no_items_filter_tmpl", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e)
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(e) {
                    return !1
                }
                ,
                t.prototype.render_ = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    new (e._get("interface/leads_pipeline/plug/well_done.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        url: twig.attr("filter"in i ? i.filter : "", "url")
                    })),
                    new (e._get("interface/leads_pipeline/plug/fake_pipeline.twig"))(this.env_).render_(t, i)
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_leads_pipeline_no_items_tmpl"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/leads_pipeline/no_items_tmpl", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e),
                    this.setBlocks({
                        summary: twig.bind(this.block_summary, this)
                    })
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(t) {
                    return e._get("interface/filter/search_block.twig")
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    this.getParent(t).render_(e, t, twig.extend({}, this.getBlocks(), i))
                }
                ,
                t.prototype.block_summary = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    !("summary"in i) || !i.summary || "no_search_summary"in i && i.no_search_summary || (t.append('<div class="list-top-search__summary" id="list-top-search__summary">'),
                    twig.filter.length(this.env_, twig.attr("current_pipe"in i ? i.current_pipe : "", "statuses")) > 15 && new (e._get("interface/leads_pipeline/search_block_summary.twig"))(this.env_).render_(t, i),
                    t.append("</div>"))
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_leads_pipeline_search_block"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/leads_pipeline/search_block", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e)
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(e) {
                    return !1
                }
                ,
                t.prototype.render_ = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    "₽" == ("currency"in i ? i.currency : "") ? i.width_for_sum = "73px" : i.width_for_sum = "54px",
                    "%v %s" == ("currency_pattern"in i ? i.currency_pattern : "") ? i.is_currency_symbol_in_the_end = !0 : i.is_currency_symbol_in_the_end = !1,
                    new (e._get("interface/leads_pipeline/plug/fake_pipeline_info.twig"))(this.env_).render_(t, {
                        width_for_sum: "width_for_sum"in i ? i.width_for_sum : "",
                        is_currency_symbol_in_the_end: "is_currency_symbol_in_the_end"in i ? i.is_currency_symbol_in_the_end : "",
                        word_leads: twig.attr("lang"in i ? i.lang : "", "leads_2") + ":",
                        currency_symbol: "currency"in i ? i.currency : ""
                    })
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_leads_pipeline_search_block_summary"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/leads_pipeline/search_block_summary", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e)
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(e) {
                    return !1
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    e.append('<div class="pipeline-leads__stats-inner">'),
                    t._parent = t;
                    var n = "stats"in t ? t.stats : "";
                    twig.forEach(n, (function(i, n) {
                        t._key = n,
                        t.stat = i,
                        twig.contains(["due", "without_task", "overdue"], twig.attr("stat"in t ? t.stat : "", "type")) && (e.append('<div class="pipeline-leads__stats-item pipeline-leads__stats-item_'),
                        e.append(twig.filter.escape(this.env_, twig.attr("stat"in t ? t.stat : "", "type"), "light_escape", null, !0)),
                        e.append('"><div class="pipeline-leads__stats-text">'),
                        e.append(twig.filter.escape(this.env_, twig.attr("lang"in t ? t.lang : "", "pipeline_stats_" + twig.attr("stat"in t ? t.stat : "", "type"), void 0, "array"), "light_escape", null, !0)),
                        e.append(':</div><span class="pipeline-leads__stats-count pipeline-leads__stats-count_'),
                        e.append(twig.filter.escape(this.env_, twig.attr("stat"in t ? t.stat : "", "type"), "light_escape", null, !0)),
                        e.append(" "),
                        twig.attr("stat"in t ? t.stat : "", "value", void 0, void 0, !0) && 0 == twig.attr("stat"in t ? t.stat : "", "value") && e.append("pipeline-leads__stats-count_empty"),
                        e.append('" data-type="'),
                        e.append(twig.filter.escape(this.env_, twig.attr("stat"in t ? t.stat : "", "type"), "light_escape", null, !0)),
                        e.append('">'),
                        e.append(twig.filter.escape(this.env_, this.env_.filter("count", twig.attr("stat"in t ? t.stat : "", "value")), "light_escape", null, !0)),
                        e.append("</span></div>"))
                    }
                    ), this),
                    e.append('<div class="pipeline-leads__stats-item pipeline-leads__stats-item_new"><div class="pipeline-leads__stats-text">'),
                    e.append(twig.filter.escape(this.env_, twig.attr("lang"in t ? t.lang : "", "pipeline_stats_new"), "light_escape", null, !0)),
                    e.append(":</div>"),
                    t._parent = t,
                    n = "stats"in t ? t.stats : "";
                    var a = {
                        index0: 0,
                        index: 1,
                        first: !0
                    };
                    twig.forEach(n, (function(i, n) {
                        t._key = n,
                        t.stat = i,
                        twig.contains(["new_today", "new_yesterday"], twig.attr("stat"in t ? t.stat : "", "type")) && (e.append('<span class="pipeline-leads__stats-count pipeline-leads__stats-count_'),
                        e.append(twig.filter.escape(this.env_, twig.attr("stat"in t ? t.stat : "", "type"), "light_escape", null, !0)),
                        e.append(" "),
                        twig.attr("stat"in t ? t.stat : "", "value", void 0, void 0, !0) && 0 == twig.attr("stat"in t ? t.stat : "", "value") && e.append("pipeline-leads__stats-count_empty"),
                        e.append('" data-type="'),
                        e.append(twig.filter.escape(this.env_, twig.attr("stat"in t ? t.stat : "", "type"), "light_escape", null, !0)),
                        e.append('">'),
                        e.append(twig.filter.escape(this.env_, this.env_.filter("count", twig.attr("stat"in t ? t.stat : "", "value")), "light_escape", null, !0)),
                        e.append("</span>"),
                        1 == twig.attr(a, "index") && e.append('<span class="pipeline-leads__stats-count pipeline-leads__stats-count_divider">&nbsp;/&nbsp;</span>'),
                        ++a.index0,
                        ++a.index,
                        a.first = !1)
                    }
                    ), this),
                    e.append('</div></div><div class="pipeline-leads__stats-total"><div class="pipeline-leads__stats-text">'),
                    e.append(twig.filter.escape(this.env_, twig.attr("lang"in t ? t.lang : "", "pipeline_stats_prospect"), "light_escape", null, !0)),
                    e.append("</div>"),
                    0 == twig.attr("prospects"in t ? t.prospects : "", "sum") ? (e.append('<span class="pipeline-leads__stats-count pipeline-leads__stats-count_no-data">'),
                    e.append(twig.filter.escape(this.env_, twig.attr("lang"in t ? t.lang : "", "no_data"), "light_escape", null, !0)),
                    e.append("</span>")) : (e.append('<span class="pipeline-leads__stats-count pipeline-leads__stats-count_leads">'),
                    e.append(twig.filter.escape(this.env_, twig.attr("prospects"in t ? t.prospects : "", "leads"), "light_escape", null, !0)),
                    e.append(" "),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("numeral", twig.attr("lang"in t ? t.lang : "", "summary_leads"), twig.attr("prospects"in t ? t.prospects : "", "leads")), "light_escape", null, !0)),
                    e.append(':</span><a href="/stats/?deals_type=closed&pipeline_id='),
                    e.append(twig.filter.escape(this.env_, "pipeline_id"in t ? t.pipeline_id : "", "light_escape", null, !0)),
                    e.append('" class="pipeline-leads__stats-count js-navigate-link">'),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("price", twig.attr("prospects"in t ? t.prospects : "", "sum")), "light_escape", null, !0)),
                    e.append("</a>")),
                    e.append("</div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_leads_pipeline_stats"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/leads_pipeline/stats", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e)
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(e) {
                    return !1
                }
                ,
                t.prototype.render_ = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    t.append('<div class="tile-settings__body"><div class="tile-settings__header"><div class="tile-settings__header-top"><h2 class="modal-body__caption tile-settings__caption head_2">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Card view"), "light_escape", null, !0)),
                    t.append('</h2><div class="modal-body__actions tile-settings__btns">'),
                    new (e._get("interface/controls/cancel_button.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        text: this.env_.filter("i18n", "Cancel")
                    })),
                    new (e._get("interface/controls/button.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        text: twig.attr("lang"in i ? i.lang : "", "button_save"),
                        class_name: "js-modal-accept js-button-with-loader button-input_blue"
                    })),
                    t.append('</div></div></div><div class="tile-settings__checkboxes"><div class="tile-settings__checkbox">'),
                    new (e._get("interface/controls/checkbox.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        id: "apply_for_all",
                        value: !0,
                        checked: "apply_for_all"in i ? i.apply_for_all : "",
                        small: !0,
                        text: twig.attr("lang"in i ? i.lang : "", "Apply for all pipelines", void 0, "array")
                    })),
                    t.append('</div><div class="tile-settings__checkbox">'),
                    new (e._get("interface/controls/checkbox.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        id: "show_avatar",
                        value: !0,
                        checked: "show_avatar"in i ? i.show_avatar : "",
                        small: !0,
                        text: twig.attr("lang"in i ? i.lang : "", "Display contacts avatar", void 0, "array")
                    })),
                    t.append('</div><div class="tile-settings__checkbox">'),
                    new (e._get("interface/controls/checkbox.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        id: "show_last_message",
                        value: !0,
                        checked: "show_last_message"in i ? i.show_last_message : "",
                        small: !0,
                        text: twig.attr("lang"in i ? i.lang : "", "Display last message from contact", void 0, "array")
                    })),
                    t.append('</div></div><div class="tile-settings__box"><div class="tile-settings__avatar"'),
                    "show_avatar"in i && i.show_avatar || t.append(' style="display: none;"'),
                    t.append(">"),
                    new (e._get("interface/common/avatar.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        url: "/frontend/images/interface/i/userpic_demo.png",
                        class: "tile-settings__avatar-photo"
                    })),
                    t.append('</div><div class="tile-settings__info"><div class="tile-settings__first-part"><div>'),
                    new (e._get("interface/controls/select.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        name: "position_1",
                        class_name: "tile-settings__control-contact control--select-pos1",
                        selected: twig.attr(twig.attr("fields"in i ? i.fields : "", "position_1"), "selected"),
                        items: twig.attr(twig.attr("fields"in i ? i.fields : "", "position_1"), "items")
                    })),
                    new (e._get("interface/controls/select.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        name: "position_2",
                        class_name: "tile-settings__control-company",
                        selected: twig.attr(twig.attr("fields"in i ? i.fields : "", "position_2"), "selected"),
                        items: twig.attr(twig.attr("fields"in i ? i.fields : "", "position_2"), "items")
                    })),
                    new (e._get("interface/controls/select.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        name: "position_3",
                        class_name: "tile-settings__control-date",
                        selected: twig.attr(twig.attr("fields"in i ? i.fields : "", "position_3"), "selected"),
                        items: twig.attr(twig.attr("fields"in i ? i.fields : "", "position_3"), "items")
                    })),
                    t.append("</div><div>"),
                    new (e._get("interface/controls/select.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        name: "position_4",
                        class_name: "tile-settings__control-select",
                        selected: twig.attr(twig.attr("fields"in i ? i.fields : "", "position_4"), "selected"),
                        items: twig.attr(twig.attr("fields"in i ? i.fields : "", "position_4"), "items")
                    })),
                    t.append("</div><div>"),
                    new (e._get("interface/controls/select.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        name: "position_5",
                        class_name: "tile-settings__control-deal control--select-pos5",
                        selected: twig.attr(twig.attr("fields"in i ? i.fields : "", "position_5"), "selected"),
                        items: twig.attr(twig.attr("fields"in i ? i.fields : "", "position_5"), "items")
                    })),
                    t.append("</div></div>"),
                    new (e._get("interface/controls/select.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        name: "position_6",
                        class_name: "tile-settings__control-select control--select-pos6",
                        selected: twig.attr(twig.attr("fields"in i ? i.fields : "", "position_6"), "selected"),
                        items: twig.attr(twig.attr("fields"in i ? i.fields : "", "position_6"), "items")
                    })),
                    t.append('<div class="tile-settings__footer">'),
                    new (e._get("interface/controls/select.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        name: "position_7",
                        class_name: "tile-settings__control-budget",
                        selected: twig.attr(twig.attr("fields"in i ? i.fields : "", "position_7"), "selected"),
                        items: twig.attr(twig.attr("fields"in i ? i.fields : "", "position_7"), "items")
                    })),
                    t.append('<span class="tile-settings__footer-task">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Task"), "light_escape", null, !0)),
                    t.append('</span></div><div class="tile-settings__last-message"'),
                    "show_last_message"in i && i.show_last_message || t.append(' style="display: none;"'),
                    t.append(">"),
                    new (e._get("interface/pipeline/chat_message.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        from: {
                            icon: "/frontend/images/interface/i/userpic_demo.png"
                        },
                        message: twig.attr("lang"in i ? i.lang : "", "Last message from contact", void 0, "array")
                    })),
                    t.append("</div></div></div></div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_leads_pipeline_tile_settings"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/leads_pipeline/tile_settings", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e)
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(e) {
                    return !1
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    e.append('<div class="pipeline_items__list_plug">'),
                    t._parent = t;
                    var n = "leads"in t ? t.leads : "";
                    twig.forEach(n, (function(i, n) {
                        t._key = n,
                        t.i = i,
                        e.append('<div class="pipeline_leads__plug"><div class="pipeline_leads__item_data" style="margin-bottom: 4px;"><span class="plug__item__line pipeline_leads__plug__link pipeline_leads__plug__animation" style="width: 150px; margin-right: 80px;"></span><span class="plug__item__line pipeline_leads__plug__item pipeline_leads__plug__animation" style="width: 70px;"></span></div><div class="pipeline_leads__item_contacts"><div class="pipeline_leads__linked-entities"><span class="plug__item__line pipeline_leads__plug__item pipeline_leads__plug__animation" style="width: 100px; margin-right: 140px;"></span><div class="plug__item__line pipeline_leads__plug__item pipeline_leads__plug__animation" style="width: 60px;"></div></div></div></div>')
                    }
                    ), this),
                    e.append("</div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_leads_pipeline_plug_fake_leads_in_status"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/leads_pipeline/plug/fake_leads_in_status", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e)
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(e) {
                    return !1
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    e.append('<div class="pipeline_wrapper pipeline_row">'),
                    t._parent = t;
                    var n = "rows"in t ? t.rows : ""
                      , a = {
                        index0: 0,
                        index: 1,
                        first: !0
                    };
                    if (twig.countable(n)) {
                        var p = twig.count(n);
                        a.revindex0 = p - 1,
                        a.revindex = p,
                        a.length = p,
                        a.last = 1 === p
                    }
                    twig.forEach(n, (function(i, n) {
                        t.key = n,
                        t.row = i,
                        e.append('<div class="pipeline_status pipeline_cell"><div class="pipeline_items__list js-pipeline-row" data-id="'),
                        e.append(twig.filter.escape(this.env_, twig.attr("row"in t ? t.row : "", "ID"), "light_escape", null, !0)),
                        e.append('">'),
                        t.lines_count = {
                            1: 4,
                            2: 2,
                            3: 1,
                            4: 3
                        },
                        t.step = twig.attr(a, "index");
                        var p = twig.range(1, twig.attr("lines_count"in t ? t.lines_count : "", "step"in t ? t.step : "", void 0, "array"));
                        twig.forEach(p, (function(i, n) {
                            t._key = n,
                            t.i = i,
                            e.append('<div class="pipeline_leads__item"><div class="pipeline_leads__item_data"><div class="plug__item__line leads_plug_item blue_line" style="width: 60%;"></div></div><div class="pipeline_leads__item_contacts"><div class="pipeline_leads__linked-entities"><div class="plug__item__line leads_plug_item" style="width: 90px;"></div><div class="plug__item__line leads_plug_item" style="width: 90px;"></div></div></div></div>')
                        }
                        ), this),
                        e.append("</div></div>"),
                        ++a.index0,
                        ++a.index,
                        a.first = !1,
                        a.length && (--a.revindex0,
                        --a.revindex,
                        a.last = 0 === a.revindex0)
                    }
                    ), this),
                    e.append("</div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_leads_pipeline_plug_fake_pipeline"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/leads_pipeline/plug/fake_pipeline", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e)
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(e) {
                    return !1
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i;
                    var n = e;
                    (e = new twig.StringBuffer).append('<div class="pipeline-plug-wrapper">'),
                    "is_currency_symbol_in_the_end"in t && t.is_currency_symbol_in_the_end ? (e.append('<span class="pipeline-plug-wrapper-info pipeline_info_plug_leads"><span class="pipeline_info_plug__animation pipeline_info_plug_leads"></span><span class="pipeline_info_plug  pipeline_info_plug_leads"></span></span><p class="pipeline_plug_text pipeline_plug_text_left"> '),
                    e.append(twig.filter.escape(this.env_, "word_leads"in t ? t.word_leads : "", "light_escape", null, !0)),
                    e.append(' </p><span class="pipeline-plug-wrapper-info" style="width: '),
                    e.append(twig.filter.escape(this.env_, "width_for_sum"in t ? t.width_for_sum : "", "light_escape", null, !0)),
                    e.append(';"><span class="pipeline_info_plug__animation pipeline_info_plug_right" style="width: '),
                    e.append(twig.filter.escape(this.env_, "width_for_sum"in t ? t.width_for_sum : "", "light_escape", null, !0)),
                    e.append(';"></span><span class="pipeline_info_plug  pipeline_info_plug_right" style="width: '),
                    e.append(twig.filter.escape(this.env_, "width_for_sum"in t ? t.width_for_sum : "", "light_escape", null, !0)),
                    e.append(';"></span></span><p class="pipeline_plug_text pipeline_plug_text_right"> '),
                    e.append(twig.filter.escape(this.env_, "currency_symbol"in t ? t.currency_symbol : "", "light_escape", null, !0)),
                    e.append(" </p>")) : (e.append('<span class="pipeline-plug-wrapper-info pipeline_info_plug_leads"><span class="pipeline_info_plug__animation pipeline_info_plug_leads"></span><span class="pipeline_info_plug  pipeline_info_plug_leads"></span></span><p class="pipeline_plug_text pipeline_plug_text_left"> '),
                    e.append(twig.filter.escape(this.env_, "word_leads"in t ? t.word_leads : "", "light_escape", null, !0)),
                    e.append(' </p><p class="pipeline_plug_text pipeline_plug_text_right"> '),
                    e.append(twig.filter.escape(this.env_, "currency_symbol"in t ? t.currency_symbol : "", "light_escape", null, !0)),
                    e.append(' </p><span class="pipeline-plug-wrapper-info" style="width: '),
                    e.append(twig.filter.escape(this.env_, "width_for_sum"in t ? t.width_for_sum : "", "light_escape", null, !0)),
                    e.append(';"><span class="pipeline_info_plug__animation pipeline_info_plug_right" style="width: '),
                    e.append(twig.filter.escape(this.env_, "width_for_sum"in t ? t.width_for_sum : "", "light_escape", null, !0)),
                    e.append(';"></span><span class="pipeline_info_plug  pipeline_info_plug_right" style=" width: '),
                    e.append(twig.filter.escape(this.env_, "width_for_sum"in t ? t.width_for_sum : "", "light_escape", null, !0)),
                    e.append(';"></span></span>')),
                    e.append("</div>"),
                    n.append(twig.spaceless(e.toString())),
                    e = n
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_leads_pipeline_plug_fake_pipeline_info"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/leads_pipeline/plug/fake_pipeline_info", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e)
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(e) {
                    return !1
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    e.append('<div class="page__list_plug__wrapper"><div class="page__list_plug__content"><div class="page__list_plug__logo"></div><span class="page__list_plug__caption">'),
                    e.append(twig.filter.escape(this.env_, twig.attr("lang"in t ? t.lang : "", "plug_well_done_caption"), "light_escape", null, !0)),
                    e.append('</span><span class="page__list_plug__text">'),
                    e.append(twig.filter.escape(this.env_, twig.attr("lang"in t ? t.lang : "", "plug_well_done_text"), "light_escape", null, !0)),
                    e.append('</span><span class="page__list_plug__link"><a href="'),
                    e.append(twig.filter.escape(this.env_, "url"in t ? t.url : "", "light_escape", null, !0)),
                    e.append('" class="js-navigate-link">'),
                    e.append(twig.filter.escape(this.env_, twig.attr("lang"in t ? t.lang : "", "plug_well_done_link"), "light_escape", null, !0)),
                    e.append("</a></span></div></div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_leads_pipeline_plug_well_done"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/leads_pipeline/plug/well_done", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e)
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(e) {
                    return !1
                }
                ,
                t.prototype.render_ = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    i.inputs = [{
                        type: "name",
                        id: "quick_lead_contact_search",
                        name: "linked",
                        lang: twig.attr("lang"in i ? i.lang : "", "pipeline_quick_add_lead_contact")
                    }, {
                        type: "phone",
                        id: "quick_add_lead_phone",
                        name: "contact_phone",
                        lang: twig.attr("lang"in i ? i.lang : "", "pipeline_quick_add_lead_phone"),
                        tmpl: "interface/controls/phone.twig"
                    }, {
                        type: "email",
                        id: "quick_add_lead_email",
                        name: "contact_email",
                        lang: twig.attr("lang"in i ? i.lang : "", "pipeline_quick_add_lead_email")
                    }],
                    t.append('<div class="linked-form__add-entity-inner">'),
                    i._parent = i;
                    var a = "inputs"in i ? i.inputs : ""
                      , p = {
                        index0: 0,
                        index: 1,
                        first: !0
                    };
                    if (twig.countable(a)) {
                        var r = twig.count(a);
                        p.revindex0 = r - 1,
                        p.revindex = r,
                        p.length = r,
                        p.last = 1 === r
                    }
                    twig.forEach(a, (function(n, a) {
                        i._key = a,
                        i.input = n,
                        i.template = twig.attr("input"in i ? i.input : "", "tmpl") ? twig.attr("input"in i ? i.input : "", "tmpl") : "interface/controls/suggest.twig",
                        t.append('<div class="linked-form__field linked-form__field-text">'),
                        new (e._get("template"in i ? i.template : ""))(this.env_).render_(t, twig.extend({}, i, {
                            id: twig.attr("input"in i ? i.input : "", "id"),
                            class_name: "linked-form__cf linked-form__cf_quick-lead-" + twig.attr("input"in i ? i.input : "", "type"),
                            input_class_name: "linked-form__ajax-input text-input-visible-placeholder",
                            placeholder: twig.attr("input"in i ? i.input : "", "lang"),
                            ajax: {
                                url: "/ajax/search/",
                                params: "type=contacts&query_type=name&contacts=all&q=#q#"
                            },
                            type: twig.attr("input"in i ? i.input : "", "type"),
                            items: [],
                            selected: "",
                            name: twig.attr("input"in i ? i.input : "", "name")
                        })),
                        t.append("</div>"),
                        ++p.index0,
                        ++p.index,
                        p.first = !1,
                        p.length && (--p.revindex0,
                        --p.revindex,
                        p.last = 0 === p.revindex0)
                    }
                    ), this),
                    t.append("</div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_leads_pipeline_quick_add_add_entity"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/leads_pipeline/quick_add/add_entity", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e)
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(e) {
                    return !1
                }
                ,
                t.prototype.render_ = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    i.inputs = [{
                        type: "name",
                        id: "quick_lead_contact_search",
                        name: "linked",
                        lang: twig.attr("lang"in i ? i.lang : "", "pipeline_quick_add_lead_contact")
                    }, {
                        type: "phone",
                        id: "quick_add_lead_phone",
                        name: "contact_phone",
                        lang: twig.attr("lang"in i ? i.lang : "", "pipeline_quick_add_lead_phone")
                    }, {
                        type: "email",
                        id: "quick_add_lead_email",
                        name: "contact_email",
                        lang: twig.attr("lang"in i ? i.lang : "", "pipeline_quick_add_lead_email")
                    }],
                    t.append('<div class="linked-form__add-entity-inner">'),
                    i._parent = i;
                    var a = "inputs"in i ? i.inputs : ""
                      , p = {
                        index0: 0,
                        index: 1,
                        first: !0
                    };
                    if (twig.countable(a)) {
                        var r = twig.count(a);
                        p.revindex0 = r - 1,
                        p.revindex = r,
                        p.length = r,
                        p.last = 1 === r
                    }
                    twig.forEach(a, (function(n, a) {
                        i._key = a,
                        i.input = n,
                        t.append('<div class="linked-form__field linked-form__field-text">'),
                        new (e._get("interface/controls/input.twig"))(this.env_).render_(t, twig.extend({}, i, {
                            id: twig.attr("input"in i ? i.input : "", "id"),
                            class_name: "text-input-visible-placeholder",
                            placeholder: twig.attr("input"in i ? i.input : "", "lang"),
                            name: twig.attr("input"in i ? i.input : "", "name")
                        })),
                        t.append("</div>"),
                        ++p.index0,
                        ++p.index,
                        p.first = !1,
                        p.length && (--p.revindex0,
                        --p.revindex,
                        p.last = 0 === p.revindex0)
                    }
                    ), this),
                    t.append("</div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_leads_pipeline_quick_add_add_entity_in_tour"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/leads_pipeline/quick_add/add_entity_in_tour", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e)
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(e) {
                    return !1
                }
                ,
                t.prototype.render_ = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    t.append('<div class="pipeline_leads__quick_add_form_inner"><div class="linked-form__field">'),
                    new (e._get("interface/controls/input.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        type: "text",
                        name: "name",
                        class_name: "linked-form__cf linked-form__cf_quick-lead-name text-input-visible-placeholder",
                        placeholder: twig.attr("lang"in i ? i.lang : "", "pipeline_quick_add_lead_name"),
                        id: "quick_add_lead_name"
                    })),
                    t.append('</div><input type="hidden" id="quick_add_lead_pipeline_id" name="pipeline_id" value="'),
                    t.append(twig.filter.escape(this.env_, "pipeline_id"in i ? i.pipeline_id : "", "light_escape", null, !0)),
                    t.append('"><div class="linked-form__field linked-form__field-text">'),
                    new (e._get("interface/controls/input.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        placeholder: "0 " + ("currency"in i ? i.currency : ""),
                        class_name: "js-control-allow-numeric linked-form__cf linked-form__cf_lead-budget text-input-visible-placeholder",
                        name: "price",
                        id: "quick_add_lead_budget",
                        max_length: 17
                    })),
                    t.append("</div>"),
                    twig.attr("quick_add_form"in i ? i.quick_add_form : "", "show_linked_entity_form") && (t.append('<div class="linked-form__add-entity" id="linked-form__add-entity">'),
                    new (e._get("interface/leads_pipeline/quick_add/add_entity.twig"))(this.env_).render_(t, i),
                    t.append("</div>")),
                    t.append('<div class="linked-form__field-buttons">'),
                    new (e._get("interface/controls/button.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        text: this.env_.filter("i18n", "Add"),
                        class_name: "button-input_blue",
                        id: "quick_add_form_btn"
                    })),
                    new (e._get("interface/controls/cancel_button.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        text: twig.attr("lang"in i ? i.lang : "", "button_cancel"),
                        class_name: "cancel_class"in i ? i.cancel_class : ""
                    })),
                    t.append("</div></div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_leads_pipeline_quick_add_form"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/leads_pipeline/quick_add/form", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e)
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(e) {
                    return !1
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    e.append('<div class="pipeline_leads__quick_add__wrapper clearfix"><div class="pipeline_leads__quick_add_button '),
                    e.append(twig.filter.escape(this.env_, "add_class"in t ? t.add_class : "", "light_escape", null, !0)),
                    e.append('">'),
                    e.append(twig.filter.escape(this.env_, twig.attr("lang"in t ? t.lang : "", "pipeline_quick_add_lead"), "light_escape", null, !0)),
                    e.append('</div><div class="pipeline_leads__quick_add_form '),
                    e.append(twig.filter.escape(this.env_, "form_wrapper_class"in t ? t.form_wrapper_class : "", "light_escape", null, !0)),
                    e.append('"></div></div>')
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_leads_pipeline_quick_add_index"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/leads_pipeline/quick_add/index", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e),
                    this.setBlocks({
                        unlink: twig.bind(this.block_unlink, this)
                    })
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(e) {
                    return !1
                }
                ,
                t.prototype.render_ = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    t.append('<div class="linked-form__add-entity-inner linked-form__add-entity-inner_linked"><div class="linked-form__field linked-form__field_plug"><span class="linked-form__text-plug linked-form__text-plug_entity h-text-overflow">'),
                    t.append(twig.filter.escape(this.env_, "entity_name"in i ? i.entity_name : "", "light_escape", null, !0)),
                    t.append("</span>"),
                    t.append(this.renderBlock("unlink", i, n)),
                    new (e._get("interface/controls/input.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        type: "text",
                        id: "quick_lead_contact_search",
                        class_name: "h-hidden",
                        placeholder: twig.attr("lang"in i ? i.lang : "", "pipeline_quick_add_lead_contact"),
                        name: "linked",
                        disabled: !0,
                        value: "entity_name"in i ? i.entity_name : ""
                    })),
                    t.append('</div><div class="linked-form__field linked-form__field_plug '),
                    twig.attr("custom_fields"in i ? i.custom_fields : "", "phone") || t.append("h-hidden"),
                    t.append('"><span class="linked-form__text-plug linked-form__text-plug_text h-text-overflow">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("custom_fields"in i ? i.custom_fields : "", "phone"), "light_escape", null, !0)),
                    t.append("</span>"),
                    new (e._get("interface/controls/input.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        type: "text",
                        name: "contact_phone",
                        class_name: "linked-form__cf linked-form__cf_quick-lead-phone h-hidden",
                        placeholder: twig.attr("lang"in i ? i.lang : "", "pipeline_quick_add_lead_phone"),
                        id: "quick_add_lead_phone",
                        disabled: !0,
                        value: twig.attr("custom_fields"in i ? i.custom_fields : "", "phone")
                    })),
                    t.append('</div><div class="linked-form__field linked-form__field_plug '),
                    twig.attr("custom_fields"in i ? i.custom_fields : "", "email") || t.append("h-hidden"),
                    t.append('"><span class="linked-form__text-plug linked-form__text-plug_text h-text-overflow">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("custom_fields"in i ? i.custom_fields : "", "email"), "light_escape", null, !0)),
                    t.append("</span>"),
                    new (e._get("interface/controls/input.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        type: "text",
                        name: "contact_email",
                        class_name: "linked-form__cf linked-form__cf_quick-lead-email h-hidden",
                        placeholder: twig.attr("lang"in i ? i.lang : "", "pipeline_quick_add_lead_email"),
                        id: "quick_add_lead_email",
                        disabled: !0,
                        value: twig.attr("custom_fields"in i ? i.custom_fields : "", "email")
                    })),
                    t.append("</div></div>")
                }
                ,
                t.prototype.block_unlink = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    e.append('<div class="js-linked-form__unlink"><svg class="svg-icon svg-common--close-circled-dims"><use xlink:href="#common--close-circled"></use></svg></div>')
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_leads_pipeline_quick_add_linked_entity"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/leads_pipeline/quick_add/linked_entity", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e)
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(e) {
                    return !1
                }
                ,
                t.prototype.render_ = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    t.append('<div class="quick-add-setting-form"><div class="quick-add-setting-form__fields"><div class="quick-add-setting-form__fields-hide hidden"></div></div><div class="linked-form__field-buttons quick-add-setting-form__buttons">'),
                    new (e._get("interface/controls/button.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        text: this.env_.filter("i18n", "Save"),
                        class_name: "button-input quick-add-setting-form__save-btn button-input-disabled"
                    })),
                    new (e._get("interface/controls/cancel_button.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        text: twig.attr("lang"in i ? i.lang : "", "quick_lead_setting_form_button_cancel"),
                        class_name: "quick-add-setting-form__cancel-btn"
                    })),
                    t.append("</div></div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_leads_pipeline_quick_add_setting_form"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/leads_pipeline/quick_add/setting_form", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e)
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(e) {
                    return !1
                }
                ,
                t.prototype.render_ = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    t.append('<div class="quick-add-setting-form__item js-animate js-item-animate" data-id="'),
                    t.append(twig.filter.escape(this.env_, twig.attr("input_field"in i ? i.input_field : "", "id"), "light_escape", null, !0)),
                    t.append('" id="'),
                    t.append(twig.filter.escape(this.env_, ("type"in i ? i.type : "") + "" + twig.attr("input_field"in i ? i.input_field : "", "type") + "_input-" + twig.attr("input_field"in i ? i.input_field : "", "name"), "light_escape", null, !0)),
                    t.append('"><span class="quick-add-setting-form__item-handle ui-sortable-handle"><span class="icon icon-v-dots"></span></span>'),
                    new (e._get("interface/controls/select.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        selected_before: twig.attr("input_field"in i ? i.input_field : "", "selected_before"),
                        name: ("type"in i ? i.type : "") + "" + twig.attr("input_field"in i ? i.input_field : "", "type") + "_input-" + twig.attr("input_field"in i ? i.input_field : "", "name"),
                        selected: twig.attr("input_field"in i ? i.input_field : "", "selected"),
                        items: twig.attr("input_field"in i ? i.input_field : "", "items"),
                        class_name: "quick-add-setting-form__select js-custom-type-item"
                    })),
                    t.append('<input type="hidden" class="quick-add-setting-form__item-id" name="task_types_id-'),
                    t.append(twig.filter.escape(this.env_, twig.attr("input_field"in i ? i.input_field : "", "name"), "light_escape", null, !0)),
                    t.append('" value="'),
                    t.append(twig.filter.escape(this.env_, twig.attr("input_field"in i ? i.input_field : "", "id"), "light_escape", null, !0)),
                    t.append('"><input type="hidden" class="quick-add-setting-form__item-sort" name="'),
                    t.append(twig.filter.escape(this.env_, "type"in i ? i.type : "", "light_escape", null, !0)),
                    t.append(twig.filter.escape(this.env_, twig.attr("input_field"in i ? i.input_field : "", "type"), "light_escape", null, !0)),
                    t.append("_sort-"),
                    t.append(twig.filter.escape(this.env_, twig.attr("input_field"in i ? i.input_field : "", "name"), "light_escape", null, !0)),
                    t.append('" value="'),
                    t.append(twig.filter.escape(this.env_, twig.attr("input_field"in i ? i.input_field : "", "sort"), "light_escape", null, !0)),
                    t.append('"></div><div class=".quick-add-setting-form__data-count" data-count="'),
                    t.append(twig.filter.escape(this.env_, twig.filter.length(this.env_, "input_field"in i ? i.input_field : ""), "light_escape", null, !0)),
                    t.append('"></div>')
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_leads_pipeline_quick_add_setting_form_input"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/leads_pipeline/quick_add/setting_form_input", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e)
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(e) {
                    return !1
                }
                ,
                t.prototype.render_ = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    t.append('<div class="quick-add-setting-form__field quick-add-setting-form__field-'),
                    t.append(twig.filter.escape(this.env_, "name"in i ? i.name : "", "light_escape", null, !0)),
                    t.append('"><div class="quick-add-setting-form__title quick-add-setting-form__title-'),
                    t.append(twig.filter.escape(this.env_, "name"in i ? i.name : "", "light_escape", null, !0)),
                    t.append('">'),
                    t.append(twig.filter.escape(this.env_, "title"in i ? i.title : "", "light_escape", null, !0)),
                    t.append("</div>"),
                    i._parent = i;
                    var a = "input_fields"in i ? i.input_fields : ""
                      , p = {
                        index0: 0,
                        index: 1,
                        first: !0
                    };
                    if (twig.countable(a)) {
                        var r = twig.count(a);
                        p.revindex0 = r - 1,
                        p.revindex = r,
                        p.length = r,
                        p.last = 1 === r
                    }
                    twig.forEach(a, (function(n, a) {
                        i.key = a,
                        i.input_field = n,
                        new (e._get("interface/leads_pipeline/quick_add/setting_form_input.twig"))(this.env_).render_(t, twig.extend({}, i, {
                            input_field: "input_field"in i ? i.input_field : "",
                            name: "name"in i ? i.name : ""
                        })),
                        ++p.index0,
                        ++p.index,
                        p.first = !1,
                        p.length && (--p.revindex0,
                        --p.revindex,
                        p.last = 0 === p.revindex0)
                    }
                    ), this),
                    t.append('<button class="quick-add-setting-form__add-btn quick-add-setting-form__item" id="'),
                    t.append(twig.filter.escape(this.env_, "name"in i ? i.name : "", "light_escape", null, !0)),
                    t.append('"><svg class="quick-add-setting-form__add-btn-icon svg-icon svg-cards--cf-plus-dims"><use xlink:href="#cards--cf-plus"></use></svg><span class="quick-add-setting-form__add-btn-title">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "add_field"), "light_escape", null, !0)),
                    t.append("</span></button></div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_leads_pipeline_quick_add_setting_form_item"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/leads_pipeline/quick_add/setting_form_item", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e)
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(e) {
                    return !1
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    e.append('<ul id="pipeline_unsorted_filter" class="pipeline-unsorted__filter '),
                    "total"in t && t.total && e.append("js-clickable"),
                    e.append(" "),
                    "hide_filter"in t && t.hide_filter && e.append("h-hidden"),
                    e.append('">'),
                    t._parent = t;
                    var n = "summary"in t ? t.summary : "";
                    twig.forEach(n, (function(i, n) {
                        t.type = n,
                        t.count = i,
                        e.append('<li class="pipeline-unsorted__filter-item '),
                        ("category"in t ? t.category : "") == ("type"in t ? t.type : "") && e.append("pipeline-unsorted__filter-item_current"),
                        e.append(" "),
                        ("category"in t ? t.category : "") == ("type"in t ? t.type : "") && e.append("pipeline-unsorted__filter-item_active"),
                        e.append(" "),
                        twig.attr("hide"in t ? t.hide : "", "type"in t ? t.type : "", void 0, "array") && e.append("pipeline-unsorted__filter-item_hidden"),
                        e.append(" "),
                        "count"in t && t.count || e.append("pipeline-unsorted__filter-item_empty"),
                        e.append('" data-type="'),
                        e.append(twig.filter.escape(this.env_, "type"in t ? t.type : "", "light_escape", null, !0)),
                        e.append('"><svg class="pipeline-unsorted__filter-item-icon svg-leads--unsorted-'),
                        e.append(twig.filter.escape(this.env_, "type"in t ? t.type : "", "light_escape", null, !0)),
                        e.append('-dims"><use xlink:href="#leads--unsorted-'),
                        e.append(twig.filter.escape(this.env_, "type"in t ? t.type : "", "light_escape", null, !0)),
                        e.append('"></use></svg><span class="pipeline-unsorted__filter-item-count">'),
                        e.append(twig.filter.escape(this.env_, "count"in t ? t.count : "", "light_escape", null, !0)),
                        e.append("</span></li>")
                    }
                    ), this),
                    e.append("</ul>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_leads_pipeline_unsorted_filter"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/leads_pipeline/unsorted/filter", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e)
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(e) {
                    return !1
                }
                ,
                t.prototype.render_ = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    "category"in i && i.category && (t.append('<div class="pipeline-unsorted__item-data pipeline-unsorted__item-data_'),
                    t.append(twig.filter.escape(this.env_, "category"in i ? i.category : "", "light_escape", null, !0)),
                    t.append('">'),
                    new (e._get("interface/leads_pipeline/unsorted/types/" + ("category"in i ? i.category : "") + ".twig"))(this.env_).render_(t, i),
                    t.append("</div>"),
                    ("chats" == ("category"in i ? i.category : "") && twig.attr("source_data"in i ? i.source_data : "", "origin") && "amojo" == twig.attr(twig.attr("source_data"in i ? i.source_data : "", "origin"), "provider") || "sip" == ("category"in i ? i.category : "")) && (i.chain_class = "pipeline-unsorted__item-with-chain"),
                    t.append('<div class="pipeline-unsorted__item-actions '),
                    t.append(twig.filter.escape(this.env_, "chain_class"in i ? i.chain_class : "", "light_escape", null, !0)),
                    t.append('"><span class="pipeline-unsorted__item-action pipeline-unsorted__item-action_decline"><svg class="svg-icon pipeline-unsorted__item-action-icon svg-common--trash-dims"><use xlink:href="#common--trash"></use></svg></span>'),
                    "chain_class"in i && i.chain_class && t.append('<span class="pipeline-unsorted__item-action pipeline-unsorted__item-action_link"><svg class="svg-icon pipeline-unsorted__item-action-icon svg-common--linking-chain-dims"><use xlink:href="#common--linking-chain"></use></svg></span>'),
                    t.append('<span class="pipeline-unsorted__item-action pipeline-unsorted__item-action_accept"><svg class="svg-icon pipeline-unsorted__item-action-icon svg-leads--unsorted-accept-dims"><use xlink:href="#leads--unsorted-accept"></use></svg></span></div>'))
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_leads_pipeline_unsorted_item"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/leads_pipeline/unsorted/item", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e)
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(e) {
                    return !1
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    twig.attr("source_data"in t ? t.source_data : "", "service") ? (e.append('<div class="pipeline-unsorted__item-service-icon"><a '),
                    twig.attr("source_data"in t ? t.source_data : "", "profile_link") && (e.append('href="'),
                    e.append(twig.filter.escape(this.env_, twig.attr("source_data"in t ? t.source_data : "", "profile_link"), "light_escape", null, !0)),
                    e.append('" target="_blank" ')),
                    e.append(' ><img class="h-abs-position-center" src="'),
                    e.append(twig.filter.escape(this.env_, twig.attr("source_data"in t ? t.source_data : "", "service_icon"), "light_escape", null, !0)),
                    e.append('" /></a></div>')) : e.append('<div class="pipeline-unsorted__item-service-icon pipeline-unsorted__item-service-icon_chats"><svg class="svg-icon svg-common--chats-dims h-abs-position-center"><use xlink:href="#common--chats"></use></svg></div>')
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_leads_pipeline_unsorted_service_icon"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/leads_pipeline/unsorted/service_icon", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e)
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(e) {
                    return !1
                }
                ,
                t.prototype.render_ = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    t.append('<div class="pipeline_leads__quick_add_form_inner">'),
                    i._parent = i;
                    var a = "entities"in i ? i.entities : ""
                      , p = {
                        index0: 0,
                        index: 1,
                        first: !0
                    };
                    if (twig.countable(a)) {
                        var r = twig.count(a);
                        p.revindex0 = r - 1,
                        p.revindex = r,
                        p.length = r,
                        p.last = 1 === r
                    }
                    twig.forEach(a, (function(n, a) {
                        i._key = a,
                        i.entity = n,
                        new (e._get("interface/leads_pipeline/quick_add/pipeline_form/quick_add_entity.twig"))(this.env_).render_(t, twig.extend({}, i, {
                            entity: "entity"in i ? i.entity : "",
                            types_comparator: "types_comparator"in i ? i.types_comparator : ""
                        })),
                        ++p.index0,
                        ++p.index,
                        p.first = !1,
                        p.length && (--p.revindex0,
                        --p.revindex,
                        p.last = 0 === p.revindex0)
                    }
                    ), this),
                    t.append('<input type="hidden" id="quick_add_lead_pipeline_id" name="pipeline_id" value="'),
                    t.append(twig.filter.escape(this.env_, "pipeline_id"in i ? i.pipeline_id : "", "light_escape", null, !0)),
                    t.append('"><div class="linked-form__field-buttons">'),
                    new (e._get("interface/controls/button.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        text: this.env_.filter("i18n", "Add"),
                        class_name: "button-input_blue",
                        id: "quick_add_form_button"
                    })),
                    new (e._get("interface/controls/cancel_button.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        text: twig.attr("lang"in i ? i.lang : "", "button_cancel"),
                        class_name: "cancel_class"in i ? i.cancel_class : ""
                    })),
                    t.append('<button class="linked-form__quick-add-setup js-quick-add-setup '),
                    "button_disabled"in i && i.button_disabled && t.append("hidden"),
                    t.append('" type="button"><div class="linked-form__quick-add-setup-text">'),
                    t.append(twig.filter.escape(this.env_, twig.filter.capitalize(this.env_, this.env_.filter("i18n", "settings")), "light_escape", null, !0)),
                    t.append('</div><svg class="linked-form__quick-add-setup-icon svg-icon svg-common--gear-dims"><use xlink:href="#common--gear"></use></svg></button></div></div>')
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_leads_pipeline_quick_add_pipeline_form_form"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/leads_pipeline/quick_add/pipeline_form/form", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e)
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(e) {
                    return !1
                }
                ,
                t.prototype.render_ = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    t.append('<div class="linked-form__add-entity-inner linked-form__add-entity-inner_linked"><div class="linked-form__field linked-form__field_plug"><span class="linked-form__text-plug linked-form__text-plug_entity h-text-overflow">'),
                    t.append(twig.filter.escape(this.env_, "entity_name"in i ? i.entity_name : "", "light_escape", null, !0)),
                    t.append('</span><div class="pipeline-item__quick-add__unlink" data-element-type="'),
                    t.append(twig.filter.escape(this.env_, "element_type"in i ? i.element_type : "", "light_escape", null, !0)),
                    t.append('"><svg class="svg-icon svg-common--close-circled-dims"><use xlink:href="#common--close-circled"></use></svg></div>'),
                    new (e._get("interface/controls/input.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        type: "text",
                        id: "quick_lead_contact_search",
                        class_name: "h-hidden",
                        placeholder: twig.attr("lang"in i ? i.lang : "", "pipeline_quick_add_lead_contact"),
                        name: ("element_name"in i ? i.element_name : "") + "_linked",
                        disabled: !0,
                        value: "entity_name"in i ? i.entity_name : ""
                    })),
                    t.append("</div>"),
                    i._parent = i;
                    var a = "custom_fields"in i ? i.custom_fields : "";
                    twig.forEach(a, (function(e, n) {
                        i._key = n,
                        i.field = e,
                        t.append('<div class="linked-form__field linked-form__field_plug"><span class="linked-form__text-plug linked-form__text-plug_text">'),
                        "tags" != twig.attr("field"in i ? i.field : "", "id") && (t.append('<span class="linked-form__text-plug linked-form__text-plug_text linked-form__text-plug-name">'),
                        t.append(twig.filter.escape(this.env_, twig.attr("field"in i ? i.field : "", "name") + ":  ", "light_escape", null, !0)),
                        t.append("</span>")),
                        t.append('<ul class="linked-form__value-list linked-form__value-list-'),
                        t.append(twig.filter.escape(this.env_, twig.attr("field"in i ? i.field : "", "id"), "light_escape", null, !0)),
                        t.append('">');
                        var a = twig.attr("field"in i ? i.field : "", "value_list");
                        twig.forEach(a, (function(e, n) {
                            i._key = n,
                            i.value = e,
                            t.append('<li class="linked-form__value-item linked-form__value-list-'),
                            t.append(twig.filter.escape(this.env_, twig.attr("field"in i ? i.field : "", "id"), "light_escape", null, !0)),
                            t.append('-item"><span class="linked-form__text-plug linked-form__text-plug_text linked-form__text-plug-value">'),
                            t.append(twig.filter.escape(this.env_, "value"in i ? i.value : "", "light_escape", null, !0)),
                            t.append("</span></li>")
                        }
                        ), this),
                        t.append("</ul></span></div>")
                    }
                    ), this),
                    t.append("</div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_leads_pipeline_quick_add_pipeline_form_linked_entity"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/leads_pipeline/quick_add/pipeline_form/linked_entity", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e)
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(e) {
                    return !1
                }
                ,
                t.prototype.render_ = function(t, i, n) {
                    if (n = void 0 === n ? {} : n,
                    i.entity_names = {
                        1: this.env_.filter("i18n", "Contact"),
                        2: this.env_.filter("i18n", "Lead"),
                        3: this.env_.filter("i18n", "Company")
                    },
                    i.fields = twig.attr("entity"in i ? i.entity : "", "input_fields"),
                    0 != twig.filter.length(this.env_, "fields"in i ? i.fields : ""))
                        if ("deals" == twig.attr("entity"in i ? i.entity : "", "name")) {
                            i._parent = i;
                            var a = "fields"in i ? i.fields : ""
                              , p = {
                                index0: 0,
                                index: 1,
                                first: !0
                            };
                            if (twig.countable(a)) {
                                var r = twig.count(a);
                                p.revindex0 = r - 1,
                                p.revindex = r,
                                p.length = r,
                                p.last = 1 === r
                            }
                            twig.forEach(a, (function(n, a) {
                                i._key = a,
                                i.field = n,
                                i.field_type = twig.attr("types_comparator"in i ? i.types_comparator : "", twig.attr("field"in i ? i.field : "", "TYPE_ID"), void 0, "array") ? twig.attr("types_comparator"in i ? i.types_comparator : "", twig.attr("field"in i ? i.field : "", "TYPE_ID"), void 0, "array") : twig.attr("field"in i ? i.field : "", "value"),
                                t.append('<div class="'),
                                twig.contains(["select", "radiobutton", "checkbox", "multiselect"], twig.attr("types_comparator"in i ? i.types_comparator : "", twig.attr("field"in i ? i.field : "", "TYPE_ID"), void 0, "array")) || t.append("pipeline-item__quick-add-field"),
                                t.append(" pipeline-item__quick-add-field-"),
                                t.append(twig.filter.escape(this.env_, twig.attr("entity"in i ? i.entity : "", "type"), "light_escape", null, !0)),
                                t.append(" pipeline-item__quick-add-field-"),
                                t.append(twig.filter.escape(this.env_, twig.attr("entity"in i ? i.entity : "", "type"), "light_escape", null, !0)),
                                t.append("-"),
                                t.append(twig.filter.escape(this.env_, "field_type"in i ? i.field_type : "", "light_escape", null, !0)),
                                t.append('"><div class="pipeline-item__quick-add-item pipeline-item__quick-add-item-'),
                                t.append(twig.filter.escape(this.env_, "field_type"in i ? i.field_type : "", "light_escape", null, !0)),
                                t.append('" id="'),
                                t.append(twig.filter.escape(this.env_, twig.attr("entity"in i ? i.entity : "", "type"), "light_escape", null, !0)),
                                t.append("_"),
                                t.append(twig.filter.escape(this.env_, twig.attr("field"in i ? i.field : "", "ID"), "light_escape", null, !0)),
                                t.append('" data-code="'),
                                t.append(twig.filter.escape(this.env_, twig.attr("field"in i ? i.field : "", "CODE"), "light_escape", null, !0)),
                                t.append('">'),
                                new (e._get("interface/leads_pipeline/quick_add/pipeline_form/quick_add_field.twig"))(this.env_).render_(t, twig.extend({}, i, {
                                    field: "field"in i ? i.field : "",
                                    types_comparator: "types_comparator"in i ? i.types_comparator : "",
                                    entity_name: twig.attr("entity"in i ? i.entity : "", "name"),
                                    entity_type: twig.attr("entity"in i ? i.entity : "", "type")
                                })),
                                t.append("</div></div>"),
                                ++p.index0,
                                ++p.index,
                                p.first = !1,
                                p.length && (--p.revindex0,
                                --p.revindex,
                                p.last = 0 === p.revindex0)
                            }
                            ), this)
                        } else
                            t.append('<div class="pipeline-item__quick-add-field pipeline-item__quick-add-field-'),
                            t.append(twig.filter.escape(this.env_, twig.attr("entity"in i ? i.entity : "", "type"), "light_escape", null, !0)),
                            t.append('">'),
                            i._parent = i,
                            a = "fields"in i ? i.fields : "",
                            p = {
                                index0: 0,
                                index: 1,
                                first: !0
                            },
                            twig.countable(a) && (r = twig.count(a),
                            p.revindex0 = r - 1,
                            p.revindex = r,
                            p.length = r,
                            p.last = 1 === r),
                            twig.forEach(a, (function(n, a) {
                                i._key = a,
                                i.field = n,
                                i.item_type = twig.filter.length(this.env_, "fields"in i ? i.fields : "") > 1 ? "pipeline-item__quick-add-item-cc_type" : "",
                                i.field_type = twig.attr("types_comparator"in i ? i.types_comparator : "", twig.attr("field"in i ? i.field : "", "TYPE_ID"), void 0, "array") ? twig.attr("types_comparator"in i ? i.types_comparator : "", twig.attr("field"in i ? i.field : "", "TYPE_ID"), void 0, "array") : twig.attr("field"in i ? i.field : "", "value"),
                                t.append('<div class="pipeline-item__quick-add-item '),
                                t.append(twig.filter.escape(this.env_, "item_type"in i ? i.item_type : "", "light_escape", null, !0)),
                                t.append(" pipeline-item__quick-add-item-"),
                                t.append(twig.filter.escape(this.env_, "field_type"in i ? i.field_type : "", "light_escape", null, !0)),
                                t.append('" id="'),
                                t.append(twig.filter.escape(this.env_, twig.attr("entity"in i ? i.entity : "", "type"), "light_escape", null, !0)),
                                t.append("_"),
                                t.append(twig.filter.escape(this.env_, twig.attr("field"in i ? i.field : "", "ID"), "light_escape", null, !0)),
                                t.append('" data-code="'),
                                t.append(twig.filter.escape(this.env_, twig.attr("field"in i ? i.field : "", "CODE"), "light_escape", null, !0)),
                                t.append('">'),
                                new (e._get("interface/leads_pipeline/quick_add/pipeline_form/quick_add_field.twig"))(this.env_).render_(t, twig.extend({}, i, {
                                    field: "field"in i ? i.field : "",
                                    types_comparator: "types_comparator"in i ? i.types_comparator : "",
                                    name: twig.attr("entity_names"in i ? i.entity_names : "", twig.attr("entity"in i ? i.entity : "", "type"), void 0, "array"),
                                    entity_name: twig.attr("entity"in i ? i.entity : "", "name"),
                                    entity_type: twig.attr("entity"in i ? i.entity : "", "type")
                                })),
                                t.append("</div>"),
                                ++p.index0,
                                ++p.index,
                                p.first = !1,
                                p.length && (--p.revindex0,
                                --p.revindex,
                                p.last = 0 === p.revindex0)
                            }
                            ), this),
                            t.append("</div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_leads_pipeline_quick_add_pipeline_form_quick_add_entity"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/leads_pipeline/quick_add/pipeline_form/quick_add_entity", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e)
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(e) {
                    return !1
                }
                ,
                t.prototype.render_ = function(t, i, n) {
                    if (n = void 0 === n ? {} : n,
                    "name"in i && i.name && (i.pref_name = ("name"in i ? i.name : "") + ": "),
                    i.sub_type_ph = {
                        address_line_1: this.env_.filter("i18n", "cf_subtype_address_line_1"),
                        address_line_2: this.env_.filter("i18n", "cf_subtype_address_line_2"),
                        city: this.env_.filter("i18n", "cf_subtype_city"),
                        state: this.env_.filter("i18n", "cf_subtype_state"),
                        zip: this.env_.filter("i18n", "cf_subtype_zip"),
                        country: this.env_.filter("i18n", "cf_subtype_country")
                    },
                    twig.contains(["name", "PHONE", "EMAIL"], twig.attr("field"in i ? i.field : "", "CODE")))
                        twig.contains(["contacts", "company"], "entity_name"in i ? i.entity_name : "") ? (i.ajax_name = "company" == ("entity_name"in i ? i.entity_name : "") ? "companies" : "entity_name"in i ? i.entity_name : "",
                        "name" == twig.attr("field"in i ? i.field : "", "CODE") && "contacts" == ("entity_name"in i ? i.entity_name : "") ? i.template = "interface/controls/fullname/suggest.twig" : "PHONE" == twig.attr("field"in i ? i.field : "", "CODE") ? i.template = "interface/controls/phone.twig" : i.template = "interface/controls/suggest.twig",
                        "name" == twig.attr("field"in i ? i.field : "", "CODE") && "contacts" == ("entity_name"in i ? i.entity_name : "") ? i.placeholder = this.env_.filter("i18n", "First name") : i.placeholder = twig.attr("field"in i ? i.field : "", "NAME"),
                        new (e._get("template"in i ? i.template : ""))(this.env_).render_(t, twig.extend({}, i, {
                            id: ("entity_type"in i ? i.entity_type : "") + "_" + twig.attr("field"in i ? i.field : "", "ID"),
                            input_class_name: "quick_add__ajax-input text-input-visible-placeholder js-control-text",
                            placeholder: ("pref_name"in i ? i.pref_name : "") + ("placeholder"in i ? i.placeholder : ""),
                            ajax: {
                                url: "/ajax/search/",
                                params: "type=" + ("ajax_name"in i ? i.ajax_name : "") + "&query_type=name&" + ("ajax_name"in i ? i.ajax_name : "") + "=all&q=#q#"
                            },
                            type: twig.filter.lower(this.env_, twig.attr("field"in i ? i.field : "", "CODE")),
                            items: [],
                            selected: "",
                            name: ("entity_type"in i ? i.entity_type : "") + "_" + twig.attr("field"in i ? i.field : "", "ID")
                        }))) : new (e._get("interface/controls/input.twig"))(this.env_).render_(t, twig.extend({}, i, {
                            type: twig.attr("types_comparator"in i ? i.types_comparator : "", twig.attr("field"in i ? i.field : "", "TYPE_ID"), void 0, "array"),
                            name: ("entity_type"in i ? i.entity_type : "") + "_" + twig.attr("field"in i ? i.field : "", "ID"),
                            class_name: "linked-form__cf linked-form__cf_quick-lead-name text-input-visible-placeholder",
                            placeholder: ("pref_name"in i ? i.pref_name : "") + twig.attr("field"in i ? i.field : "", "NAME"),
                            id: twig.attr("field"in i ? i.field : "", "ID")
                        }));
                    else if ("tags" == twig.attr("field"in i ? i.field : "", "ID"))
                        t.append('<div id="'),
                        t.append(twig.filter.escape(this.env_, "entity_type"in i ? i.entity_type : "", "light_escape", null, !0)),
                        t.append('_qa_action_add_tags" class="pipeline-item__quick-add-tags amoforms_card-top-name__add-tags-label form-group__control digital-pipeline__trigger-form-settings-form-tags">'),
                        new (e._get("interface/common/fast_tags/fast_tags.twig"))(this.env_).render_(t, twig.extend({}, i, {
                            can_add: !0,
                            items: "selected_tags"in i ? i.selected_tags : ""
                        })),
                        t.append("</div>");
                    else if (twig.contains(["select", "radiobutton", "checkbox"], twig.attr("types_comparator"in i ? i.types_comparator : "", twig.attr("field"in i ? i.field : "", "TYPE_ID"), void 0, "array")))
                        new (e._get("interface/leads_pipeline/quick_add/pipeline_form/fields/select.twig"))(this.env_).render_(t, twig.extend({}, i, {
                            cf: "field"in i ? i.field : "",
                            name: ("entity_type"in i ? i.entity_type : "") + "_" + twig.attr("field"in i ? i.field : "", "ID"),
                            type: twig.attr("field"in i ? i.field : "", "type"),
                            placeholder: "checkbox" == twig.attr("types_comparator"in i ? i.types_comparator : "", twig.attr("field"in i ? i.field : "", "TYPE_ID"), void 0, "array") ? this.env_.filter("i18n", "Ignore") : this.env_.filter("i18n", "Select"),
                            selected_before: ("pref_name"in i ? i.pref_name : "") + twig.attr("field"in i ? i.field : "", "NAME")
                        }));
                    else if (twig.contains(["legal_entity"], twig.attr("types_comparator"in i ? i.types_comparator : "", twig.attr("field"in i ? i.field : "", "TYPE_ID"), void 0, "array")))
                        new (e._get("interface/controls/legal_entity.twig"))(this.env_).render_(t, twig.extend({}, i, {
                            cf: "field"in i ? i.field : "",
                            name: ("entity_type"in i ? i.entity_type : "") + "_" + twig.attr("field"in i ? i.field : "", "ID"),
                            placeholder: ("pref_name"in i ? i.pref_name : "") + twig.attr("field"in i ? i.field : "", "NAME"),
                            is_add: "is_add"in i ? i.is_add : "",
                            type: "type"in i ? i.type : "",
                            class_name: "quick_add__legal_entity text-input-visible-placeholder",
                            input_class_name: "text-input-visible-placeholder",
                            kpp_placeholder: " ",
                            inn_placeholder: " "
                        }));
                    else if ("multiselect" == twig.attr("types_comparator"in i ? i.types_comparator : "", twig.attr("field"in i ? i.field : "", "TYPE_ID"), void 0, "array"))
                        new (e._get("interface/leads_pipeline/quick_add/pipeline_form/fields/multiselect.twig"))(this.env_).render_(t, twig.extend({}, i, {
                            cf: "field"in i ? i.field : "",
                            name: ("entity_type"in i ? i.entity_type : "") + "_" + twig.attr("field"in i ? i.field : "", "ID") + "_",
                            pref_name: "pref_name"in i ? i.pref_name : "",
                            element: "element"in i ? i.element : "",
                            title_before: ("pref_name"in i ? i.pref_name : "") + twig.attr("field"in i ? i.field : "", "NAME") + ": "
                        }));
                    else if ("textarea" == twig.attr("types_comparator"in i ? i.types_comparator : "", twig.attr("field"in i ? i.field : "", "TYPE_ID"), void 0, "array"))
                        new (e._get("interface/controls/textarea.twig"))(this.env_).render_(t, twig.extend({}, i, {
                            value: "value"in i ? i.value : "",
                            name: ("entity_type"in i ? i.entity_type : "") + "_" + twig.attr("field"in i ? i.field : "", "ID"),
                            placeholder: ("pref_name"in i ? i.pref_name : "") + twig.attr("field"in i ? i.field : "", "NAME"),
                            class_name: "quick_add__textarea text-input-visible-placeholder",
                            additional_data: 'spellcheck="false"'
                        }));
                    else if (twig.contains(["date", "date_time", "birthday"], twig.attr("types_comparator"in i ? i.types_comparator : "", twig.attr("field"in i ? i.field : "", "TYPE_ID"), void 0, "array")))
                        i.data_format = "",
                        i.date_format = "date",
                        i.date_template = "date_time" == twig.attr("types_comparator"in i ? i.types_comparator : "", twig.attr("field"in i ? i.field : "", "TYPE_ID"), void 0, "array") ? "date_time_field" : "date_field",
                        i.value = "",
                        new (e._get("interface/controls/" + ("date_template"in i ? i.date_template : "") + ".twig"))(this.env_).render_(t, twig.extend({}, i, {
                            type: "single",
                            name: ("entity_type"in i ? i.entity_type : "") + "_" + twig.attr("field"in i ? i.field : "", "ID"),
                            placeholder: twig.attr("field"in i ? i.field : "", "NAME"),
                            input_class: "text-input-visible-placeholder quick_add_control_date " + twig.attr("types_comparator"in i ? i.types_comparator : "", twig.attr("field"in i ? i.field : "", "TYPE_ID"), void 0, "array"),
                            data_format: "data_format"in i ? i.data_format : "",
                            readonly: "readonly"in i ? i.readonly : "",
                            value: "value"in i ? i.value : ""
                        }));
                    else if (twig.contains(["text", "numeric"], twig.attr("types_comparator"in i ? i.types_comparator : "", twig.attr("field"in i ? i.field : "", "TYPE_ID"), void 0, "array")))
                        i.ph_name = twig.attr("field"in i ? i.field : "", "NAME"),
                        "price" == twig.attr("field"in i ? i.field : "", "ID") && (i.ph_name = this.env_.filter("price", "0")),
                        "numeric" == twig.attr("types_comparator"in i ? i.types_comparator : "", twig.attr("field"in i ? i.field : "", "TYPE_ID"), void 0, "array") ? i.class_name = "linked-form__cf linked-form__cf_quick-lead-name js-control-allow-numeric-float text-input text-input-visible-placeholder" : "text" == twig.attr("types_comparator"in i ? i.types_comparator : "", twig.attr("field"in i ? i.field : "", "TYPE_ID"), void 0, "array") && (i.class_name = "linked-form__cf linked-form__cf_quick-lead-name text-input-visible-placeholder"),
                        new (e._get("interface/controls/input.twig"))(this.env_).render_(t, twig.extend({}, i, {
                            type: twig.attr("types_comparator"in i ? i.types_comparator : "", twig.attr("field"in i ? i.field : "", "TYPE_ID"), void 0, "array"),
                            name: ("entity_type"in i ? i.entity_type : "") + "_" + twig.attr("field"in i ? i.field : "", "ID"),
                            class_name: "class_name"in i ? i.class_name : "",
                            placeholder: ("pref_name"in i ? i.pref_name : "") + ("ph_name"in i ? i.ph_name : ""),
                            id: twig.attr("field"in i ? i.field : "", "ID")
                        }));
                    else if ("smart_address" == twig.attr("types_comparator"in i ? i.types_comparator : "", twig.attr("field"in i ? i.field : "", "TYPE_ID"), void 0, "array")) {
                        i._parent = i;
                        var a = twig.attr("field"in i ? i.field : "", "sub_types")
                          , p = {
                            index0: 0,
                            index: 1,
                            first: !0
                        };
                        if (twig.countable(a)) {
                            var r = twig.count(a);
                            p.revindex0 = r - 1,
                            p.revindex = r,
                            p.length = r,
                            p.last = 1 === r
                        }
                        twig.forEach(a, (function(n, a) {
                            i._key = a,
                            i.sub_type = n,
                            t.append('<div class="pipeline-item__quick-add-smart-address-item">'),
                            i.class_name = "zip" == ("sub_type"in i ? i.sub_type : "") ? "text-input-visible-placeholder js-control-allow-zip" : "text-input-visible-placeholder",
                            "country" == ("sub_type"in i ? i.sub_type : "") ? new (e._get("interface/controls/select.twig"))(this.env_).render_(t, twig.extend({}, i, {
                                name: ("entity_type"in i ? i.entity_type : "") + "_" + twig.attr("field"in i ? i.field : "", "ID") + "_" + ("sub_type"in i ? i.sub_type : ""),
                                selected: twig.attr(twig.attr(twig.attr("field"in i ? i.field : "", "field_items"), 0, void 0, "array"), "id"in i ? i.id : "", void 0, "array"),
                                selected_before: "pref_name"in i ? i.pref_name : "",
                                items: twig.attr("field"in i ? i.field : "", "field_items"),
                                class_name: "select-form__select",
                                type: "smart_address"
                            })) : new (e._get("interface/controls/input.twig"))(this.env_).render_(t, twig.extend({}, i, {
                                type: "smart_address",
                                name: ("entity_type"in i ? i.entity_type : "") + "_" + twig.attr("field"in i ? i.field : "", "ID") + "_" + ("sub_type"in i ? i.sub_type : ""),
                                class_name: "class_name"in i ? i.class_name : "",
                                placeholder: ("pref_name"in i ? i.pref_name : "") + twig.attr("sub_type_ph"in i ? i.sub_type_ph : "", "sub_type"in i ? i.sub_type : "", void 0, "array"),
                                id: twig.attr("field"in i ? i.field : "", "ID")
                            })),
                            t.append("</div>"),
                            ++p.index0,
                            ++p.index,
                            p.first = !1,
                            p.length && (--p.revindex0,
                            --p.revindex,
                            p.last = 0 === p.revindex0)
                        }
                        ), this)
                    } else
                        "monetary" == twig.attr("types_comparator"in i ? i.types_comparator : "", twig.attr("field"in i ? i.field : "", "TYPE_ID"), void 0, "array") ? new (e._get("interface/controls/budget.twig"))(this.env_).render_(t, {
                            type: twig.attr("types_comparator"in i ? i.types_comparator : "", twig.attr("field"in i ? i.field : "", "TYPE_ID"), void 0, "array"),
                            name: ("entity_type"in i ? i.entity_type : "") + "_" + twig.attr("field"in i ? i.field : "", "ID"),
                            short: !0,
                            currency: twig.attr(twig.attr("field"in i ? i.field : "", "SETTINGS"), "currency"),
                            placeholder: this.env_.filter("price", "0", [!1, 0, !1, twig.attr(twig.attr("field"in i ? i.field : "", "SETTINGS"), "currency")])
                        }) : "chained_list" == twig.attr("types_comparator"in i ? i.types_comparator : "", twig.attr("field"in i ? i.field : "", "TYPE_ID"), void 0, "array") ? new (e._get("interface/controls/chained_list.twig"))(this.env_).render_(t, {
                            name: ("entity_type"in i ? i.entity_type : "") + "_" + twig.attr("field"in i ? i.field : "", "ID"),
                            lists: twig.attr(twig.attr("field"in i ? i.field : "", "SETTINGS"), "chained_lists")
                        }) : "file" == twig.attr("types_comparator"in i ? i.types_comparator : "", twig.attr("field"in i ? i.field : "", "TYPE_ID"), void 0, "array") ? new (e._get("interface/controls/drive_field.twig"))(this.env_).render_(t, {
                            name: ("entity_type"in i ? i.entity_type : "") + "_" + twig.attr("field"in i ? i.field : "", "ID"),
                            field_id: twig.attr("field"in i ? i.field : "", "ID"),
                            disable_download: !0
                        }) : new (e._get("interface/controls/input.twig"))(this.env_).render_(t, twig.extend({}, i, {
                            type: twig.attr("types_comparator"in i ? i.types_comparator : "", twig.attr("field"in i ? i.field : "", "TYPE_ID"), void 0, "array"),
                            name: ("entity_type"in i ? i.entity_type : "") + "_" + twig.attr("field"in i ? i.field : "", "ID"),
                            class_name: "linked-form__cf linked-form__cf_quick-lead-name text-input-visible-placeholder",
                            placeholder: ("pref_name"in i ? i.pref_name : "") + twig.attr("field"in i ? i.field : "", "NAME"),
                            id: twig.attr("field"in i ? i.field : "", "ID")
                        }))
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_leads_pipeline_quick_add_pipeline_form_quick_add_field"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/leads_pipeline/quick_add/pipeline_form/quick_add_field", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e),
                    this.setBlocks({
                        data: twig.bind(this.block_data, this)
                    })
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(e) {
                    return !1
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    e.append(this.renderBlock("data", t, i))
                }
                ,
                t.prototype.block_data = function(t, i, n) {
                    if (n = void 0 === n ? {} : n,
                    twig.attr(twig.attr("source_data"in i ? i.source_data : "", "client"), "picture") ? (t.append('<div class="pipeline-unsorted__item-avatar avatar_'),
                    t.append(twig.filter.escape(this.env_, twig.filter.lower(this.env_, twig.attr("source_data"in i ? i.source_data : "", "site")), "light_escape", null, !0)),
                    t.append('" title="'),
                    t.append(twig.filter.escape(this.env_, twig.attr("source_data"in i ? i.source_data : "", "name"), "light_escape", null, !0)),
                    t.append('" style="background-image: url('),
                    t.append(twig.filter.escape(this.env_, twig.attr(twig.attr("source_data"in i ? i.source_data : "", "client"), "picture"), "light_escape", null, !0)),
                    t.append(')">'),
                    new (e._get("interface/leads_pipeline/unsorted/service_icon.twig"))(this.env_).render_(t, i),
                    t.append("</div>")) : (t.append('<div class="pipeline-unsorted__item-avatar" style="background-image: '),
                    t.append(twig.filter.escape(this.env_, "url('" + this.env_.filter("avatar", twig.attr("main_contact"in i ? i.main_contact : "", "id")) + "')", "light_escape", null, !0)),
                    t.append(';" title="'),
                    t.append(twig.filter.escape(this.env_, twig.attr("source_data"in i ? i.source_data : "", "name"), "light_escape", null, !0)),
                    t.append('">'),
                    new (e._get("interface/leads_pipeline/unsorted/service_icon.twig"))(this.env_).render_(t, i),
                    t.append("</div>")),
                    t.append('<div class="pipeline-unsorted__item-main"><div class="pipeline-unsorted__item-head"><div class="pipeline-unsorted__item-from">'),
                    twig.attr("source_data"in i ? i.source_data : "", "origin") && "amojo" == twig.attr(twig.attr("source_data"in i ? i.source_data : "", "origin"), "provider"))
                        twig.attr("source_data"in i ? i.source_data : "", "source_name") ? t.append(twig.filter.escape(this.env_, twig.filter.lower(this.env_, twig.attr("lang"in i ? i.lang : "", "from")) + ": " + this.env_.filter("i18n", twig.attr("source_data"in i ? i.source_data : "", "source_name")), "light_escape", null, !0)) : twig.attr("source_data"in i ? i.source_data : "", "site") && t.append(twig.filter.escape(this.env_, twig.filter.lower(this.env_, twig.attr("lang"in i ? i.lang : "", "from")) + ": " + this.env_.filter("i18n", twig.attr("source_data"in i ? i.source_data : "", "site")), "light_escape", null, !0));
                    else {
                        i.operator = "",
                        i._parent = i;
                        var a = "managers"in i ? i.managers : "";
                        twig.forEach(a, (function(e, t) {
                            i._key = t,
                            i.manager = e,
                            twig.attr("manager"in i ? i.manager : "", "login", void 0, "array") == twig.attr("source_data"in i ? i.source_data : "", "to") && (i.operator = twig.attr("manager"in i ? i.manager : "", "title", void 0, "array"))
                        }
                        ), this),
                        t.append('<span class="pipeline-unsorted__item-cred h-text-overflow">'),
                        twig.attr("source_data"in i ? i.source_data : "", "site") && t.append(twig.filter.escape(this.env_, twig.filter.lower(this.env_, twig.attr("lang"in i ? i.lang : "", "from")) + ": " + this.env_.filter("i18n", twig.attr("source_data"in i ? i.source_data : "", "site")), "light_escape", null, !0)),
                        t.append('</span><span class="pipeline-unsorted__item-cred h-text-overflow">'),
                        t.append(twig.filter.escape(this.env_, twig.filter.lower(this.env_, twig.attr("lang"in i ? i.lang : "", "to")), "light_escape", null, !0)),
                        t.append(": "),
                        "" != ("operator"in i ? i.operator : "") ? t.append(twig.filter.escape(this.env_, "operator"in i ? i.operator : "", "light_escape", null, !0)) : t.append(twig.filter.escape(this.env_, twig.attr("source_data"in i ? i.source_data : "", "to"), "light_escape", null, !0)),
                        t.append("</span>")
                    }
                    t.append('</div><div class="pipeline-unsorted__item-date">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("feed_date", "date_create"in i ? i.date_create : ""), "light_escape", null, !0)),
                    t.append("</div></div>"),
                    i.unsorted_name = twig.attr("source_data"in i ? i.source_data : "", "name"),
                    twig.attr("source_data"in i ? i.source_data : "", "origin") && "amojo" == twig.attr(twig.attr("source_data"in i ? i.source_data : "", "origin"), "provider") ? (i.link = twig.attr("source_data"in i ? i.source_data : "", "link") ? twig.attr("source_data"in i ? i.source_data : "", "link") : "/unsorted/detail/" + ("uid"in i ? i.uid : ""),
                    t.append('<a href="'),
                    t.append(twig.filter.escape(this.env_, "link"in i ? i.link : "", "light_escape", null, !0)),
                    t.append('" class="pipeline-unsorted__item-title js-navigate-link h-text-overflow" title="'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("contact_name", "unsorted_name"in i ? i.unsorted_name : ""), "light_escape", null, !0)),
                    t.append('" id="unsorted_'),
                    t.append(twig.filter.escape(this.env_, "uid"in i ? i.uid : "", "light_escape", null, !0)),
                    t.append('">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("contact_name", "unsorted_name"in i ? i.unsorted_name : ""), "light_escape", null, !0)),
                    t.append("</a>")) : (t.append('<span class="pipeline-unsorted__item-title h-text-overflow">'),
                    t.append(twig.filter.escape(this.env_, "unsorted_name"in i ? i.unsorted_name : "", "light_escape", null, !0)),
                    t.append(" "),
                    t.append(twig.filter.escape(this.env_, "(" + twig.attr("source_data"in i ? i.source_data : "", "from") + ")", "light_escape", null, !0)),
                    t.append("</span>")),
                    t.append('<span class="pipeline-unsorted__item-comment h-text-overflow">'),
                    i.first_message_shown = 0,
                    i._parent = i,
                    a = twig.attr("source_data"in i ? i.source_data : "", "data");
                    var p = {
                        index0: 0,
                        index: 1,
                        first: !0
                    };
                    twig.forEach(a, (function(n, a) {
                        if (i._key = a,
                        i.message = n,
                        !("first_message_shown"in i) || !i.first_message_shown) {
                            var r = twig.attr("message"in i ? i.message : "", "data")
                              , l = {
                                parent: p,
                                index0: 0,
                                index: 1,
                                first: !0
                            };
                            twig.forEach(r, (function(n, a) {
                                i._key = a,
                                i.data = n,
                                "first_message_shown"in i && i.first_message_shown || !twig.filter.length(this.env_, twig.attr("data"in i ? i.data : "", "text")) || (i.first_message_shown = 1,
                                new (e._get("interface/pipeline/chat_message.twig"))(this.env_).render_(t, twig.extend({}, i, {
                                    from: {
                                        id: twig.attr("main_contact"in i ? i.main_contact : "", "id"),
                                        icon: twig.attr(twig.attr("source_data"in i ? i.source_data : "", "client"), "picture")
                                    },
                                    message: twig.attr("data"in i ? i.data : "", "text")
                                })),
                                ++l.index0,
                                ++l.index,
                                l.first = !1)
                            }
                            ), this),
                            ++p.index0,
                            ++p.index,
                            p.first = !1
                        }
                    }
                    ), this),
                    t.append("</span></div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_leads_pipeline_unsorted_types_chats"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !0
                }
                ,
                e._add("interface/leads_pipeline/unsorted/types/chats", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e),
                    this.setBlocks({
                        data: twig.bind(this.block_data, this)
                    })
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(e) {
                    return !1
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    e.append('<div class="pipeline-unsorted__item-head"><div class="pipeline-unsorted__item-from">'),
                    e.append(twig.filter.escape(this.env_, twig.attr("source_data"in t ? t.source_data : "", "from"), "light_escape", null, !0)),
                    e.append('</div><div class="pipeline-unsorted__item-date">'),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("feed_date", "date_create"in t ? t.date_create : ""), "light_escape", null, !0)),
                    e.append("</div></div>"),
                    e.append(this.renderBlock("data", t, i))
                }
                ,
                t.prototype.block_data = function(e, t, i) {
                    if (i = void 0 === i ? {} : i,
                    twig.filter.length(this.env_, twig.attr("source_data"in t ? t.source_data : "", "data"))) {
                        t.counter = 0,
                        t._parent = t;
                        var n = twig.attr("source_data"in t ? t.source_data : "", "data");
                        twig.forEach(n, (function(i, n) {
                            if (t._key = n,
                            t.field = i,
                            ("counter"in t ? t.counter : "") < 6 && "responsible_user_id_3" != twig.attr("field"in t ? t.field : "", "id") && "responsible_user_id_1" != twig.attr("field"in t ? t.field : "", "id")) {
                                if (t.counter = Number("counter"in t ? t.counter : "") + Number(1),
                                e.append('<div class="pipeline-unsorted-forms__item"><div class="pipeline-unsorted-forms__left" title="'),
                                e.append(twig.filter.escape(this.env_, twig.attr("field"in t ? t.field : "", "name"), "light_escape", null, !0)),
                                e.append('">'),
                                e.append(twig.filter.escape(this.env_, twig.attr("field"in t ? t.field : "", "name"), "light_escape", null, !0)),
                                e.append("</div>"),
                                this.env_.test("iterable", twig.attr("field"in t ? t.field : "", "value"))) {
                                    t.value_counter = 0;
                                    var a = twig.attr("field"in t ? t.field : "", "value");
                                    twig.forEach(a, (function(i, n) {
                                        t._key = n,
                                        t.enum = i,
                                        0 == ("value_counter"in t ? t.value_counter : "") && (e.append(" "),
                                        t.value_counter = Number("value_counter"in t ? t.value_counter : "") + Number(1),
                                        "files" == twig.attr("field"in t ? t.field : "", "type") ? (e.append('<div class="pipeline-unsorted-forms__right pipeline-unsorted__form-item_file_link h-text-overflow"><span class="icon icon-note-attach icon-inline"></span><a href="'),
                                        e.append(twig.filter.escape(this.env_, twig.attr("enum"in t ? t.enum : "", "url"), "light_escape", null, !0)),
                                        e.append('" title="'),
                                        e.append(twig.filter.escape(this.env_, twig.attr("enum"in t ? t.enum : "", "name"), "light_escape", null, !0)),
                                        e.append('">'),
                                        e.append(twig.filter.escape(this.env_, twig.filter.length(this.env_, twig.attr("enum"in t ? t.enum : "", "name")) > 17 ? this.env_.filter("slice", this.env_, twig.attr("enum"in t ? t.enum : "", "name"), 0, 17) + "..." : twig.attr("enum"in t ? t.enum : "", "name"), "light_escape", null, !0)),
                                        e.append("</a></div>")) : (e.append('<div><div class="pipeline-unsorted-forms__right h-text-overflow" title="'),
                                        e.append(twig.filter.escape(this.env_, "enum"in t ? t.enum : "", "light_escape", null, !0)),
                                        e.append('">'),
                                        e.append(twig.filter.escape(this.env_, "enum"in t ? t.enum : "", "light_escape", null, !0)),
                                        e.append("</div></div>")))
                                    }
                                    ), this)
                                } else
                                    t.date_format = "",
                                    twig.contains(["date", "birthday"], twig.attr("field"in t ? t.field : "", "type")) ? t.date_format = "short" : "date_time" == twig.attr("field"in t ? t.field : "", "type") && (t.date_format = "full_date"),
                                    "date_format"in t && t.date_format ? (e.append('<div class="pipeline-unsorted-forms__right h-text-overflow" title="'),
                                    e.append(twig.filter.escape(this.env_, this.env_.filter("date", twig.attr("field"in t ? t.field : "", "value"), "date_format"in t ? t.date_format : ""), "light_escape", null, !0)),
                                    e.append('">'),
                                    e.append(twig.filter.escape(this.env_, this.env_.filter("date", twig.attr("field"in t ? t.field : "", "value"), "date_format"in t ? t.date_format : ""), "light_escape", null, !0)),
                                    e.append("</div>")) : (e.append('<div class="pipeline-unsorted-forms__right h-text-overflow" title="'),
                                    e.append(twig.filter.escape(this.env_, twig.attr("field"in t ? t.field : "", "value"), "light_escape", null, !0)),
                                    e.append('">'),
                                    e.append(twig.filter.escape(this.env_, this.env_.filter("slice", this.env_, twig.attr("field"in t ? t.field : "", "value"), 0, 40), "light_escape", null, !0)),
                                    twig.filter.length(this.env_, twig.attr("field"in t ? t.field : "", "value")) > 40 && e.append("..."),
                                    e.append("</div>"));
                                e.append("</div>")
                            }
                        }
                        ), this),
                        twig.attr("source_data"in t ? t.source_data : "", "duplicated") && (e.append('<div class="pipeline-unsorted-forms__item pipeline-unsorted-duplicate js-unsorted--merge"><span class="leads__status-label">'),
                        e.append(twig.filter.escape(this.env_, twig.attr("lang"in t ? t.lang : "", "unsorted_duplicated"), "light_escape", null, !0)),
                        e.append("</span></div>"))
                    } else
                        e.append('<div class="pipeline-unsorted-forms__item">'),
                        e.append(twig.filter.escape(this.env_, twig.attr("lang"in t ? t.lang : "", "no_data"), "light_escape", null, !0)),
                        e.append("</div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_leads_pipeline_unsorted_types_forms"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/leads_pipeline/unsorted/types/forms", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e),
                    this.setBlocks({
                        data: twig.bind(this.block_data, this)
                    })
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(e) {
                    return !1
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    twig.attr(twig.attr("source_data"in t ? t.source_data : "", "from"), "name") ? t.name = twig.attr(twig.attr("source_data"in t ? t.source_data : "", "from"), "name") : t.name = twig.attr(twig.attr("source_data"in t ? t.source_data : "", "from"), "email"),
                    twig.attr("source_data"in t ? t.source_data : "", "source") && (t.source = twig.attr("source_data"in t ? t.source_data : "", "source")),
                    e.append(this.renderBlock("data", t, i))
                }
                ,
                t.prototype.block_data = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    e.append('<div class="pipeline-unsorted__item-avatar"><svg class="svg-icon svg-common--mail-dims h-abs-position-center"><use xlink:href="#common--mail"></use></svg></div><div class="pipeline-unsorted__item-main"><div class="pipeline-unsorted__item-head"><div class="pipeline-unsorted__item-from"><span class="pipeline-unsorted__item-cred h-text-overflow">'),
                    e.append(twig.filter.escape(this.env_, twig.filter.lower(this.env_, twig.attr("lang"in t ? t.lang : "", "from")) + ": " + ("name"in t ? t.name : ""), "light_escape", null, !0)),
                    e.append('</span><span class="pipeline-unsorted__item-cred h-text-overflow">'),
                    e.append(twig.filter.escape(this.env_, twig.filter.lower(this.env_, twig.attr("lang"in t ? t.lang : "", "to")) + ": " + ("source"in t ? t.source : ""), "light_escape", null, !0)),
                    e.append('</span></div><div class="pipeline-unsorted__item-date">'),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("feed_date", "date_create"in t ? t.date_create : ""), "light_escape", null, !0)),
                    e.append('</div></div><span class="pipeline-unsorted__item-title h-text-overflow">'),
                    e.append(twig.filter.escape(this.env_, twig.attr("source_data"in t ? t.source_data : "", "subject"), "light_escape", null, !0)),
                    e.append("</span>"),
                    twig.attr("source_data"in t ? t.source_data : "", "content_summary") && (e.append('<span class="pipeline-unsorted__item-comment h-text-overflow">'),
                    e.append(twig.filter.escape(this.env_, twig.filter.trim(twig.attr("source_data"in t ? t.source_data : "", "content_summary")), "light_escape", null, !0)),
                    e.append("</span>")),
                    e.append("</div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_leads_pipeline_unsorted_types_mail"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/leads_pipeline/unsorted/types/mail", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e),
                    this.setBlocks({
                        data: twig.bind(this.block_data, this)
                    })
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(e) {
                    return !1
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    t.is_cbh = "CallBackHunter" == twig.attr("source_data"in t ? t.source_data : "", "service"),
                    e.append(this.renderBlock("data", t, i))
                }
                ,
                t.prototype.block_data = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    "is_cbh"in t && t.is_cbh ? e.append('<svg class="pipeline-unsorted__item-avatar pipeline-unsorted__item-avatar_cbh svg-icon svg-digital_pipeline--cbh--logo-dims"><use xlink:href="#digital_pipeline--cbh--logo"></use></svg>') : (e.append('<a href="'),
                    e.append(twig.filter.escape(this.env_, twig.attr("source_data"in t ? t.source_data : "", "link"), "light_escape", null, !0)),
                    e.append('" class="pipeline-unsorted__item-avatar pipeline-unsorted-sip__controls-play js-call-play"><svg class="pipeline-unsorted-sip__controls-icon pipeline-unsorted-sip__controls-icon_play svg-icon svg-controls--button-play-filled-dims h-abs-position-center"><use xlink:href="#controls--button-play-filled"></use></svg><svg class="pipeline-unsorted-sip__controls-icon pipeline-unsorted-sip__controls-icon_stop svg-icon svg-controls--button-stop-dims h-abs-position-center"><use xlink:href="#controls--button-stop"></use></svg></a>')),
                    e.append('<div class="pipeline-unsorted__item-main"><div class="pipeline-unsorted__item-head"><div class="pipeline-unsorted__item-from h-text-overflow">'),
                    "is_cbh"in t && t.is_cbh ? e.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Сallback"), "light_escape", null, !0)) : (t.manager = twig.attr("managers"in t ? t.managers : "", twig.attr("source_data"in t ? t.source_data : "", "to"), void 0, "array"),
                    e.append(twig.filter.escape(this.env_, twig.filter.lower(this.env_, twig.attr("lang"in t ? t.lang : "", "to")), "light_escape", null, !0)),
                    e.append(": "),
                    "manager"in t && t.manager ? e.append(twig.filter.escape(this.env_, twig.attr("manager"in t ? t.manager : "", "title"), "light_escape", null, !0)) : e.append(twig.filter.escape(this.env_, twig.attr("source_data"in t ? t.source_data : "", "to"), "light_escape", null, !0))),
                    e.append('</div><div class="pipeline-unsorted__item-date">'),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("feed_date", "date_create"in t ? t.date_create : ""), "light_escape", null, !0)),
                    e.append('</div></div><div class="pipeline-unsorted__item-title h-text-overflow pipeline-unsorted-sip__title">'),
                    "is_cbh"in t && t.is_cbh || (e.append(twig.filter.escape(this.env_, twig.attr("lang"in t ? t.lang : "", "call_from"), "light_escape", null, !0)),
                    e.append(" ")),
                    e.append(twig.filter.escape(this.env_, twig.attr("source_data"in t ? t.source_data : "", "from"), "light_escape", null, !0)),
                    e.append("</div>"),
                    "is_cbh"in t && t.is_cbh || (e.append('<span class="pipeline-unsorted__item-comment">'),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("time", twig.attr("source_data"in t ? t.source_data : "", "duration")), "light_escape", null, !0)),
                    twig.attr("source_data"in t ? t.source_data : "", "link") && (e.append('<a href="'),
                    e.append(twig.filter.escape(this.env_, twig.attr("source_data"in t ? t.source_data : "", "link"), "light_escape", null, !0)),
                    e.append('" download="" class="pipeline-unsorted-sip__download" target="_blank">'),
                    e.append(twig.filter.escape(this.env_, twig.attr("lang"in t ? t.lang : "", "unsorted_btn_download"), "light_escape", null, !0)),
                    e.append("</a>")),
                    e.append("</span>")),
                    e.append("</div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_leads_pipeline_unsorted_types_sip"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/leads_pipeline/unsorted/types/sip", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e)
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(e) {
                    return !1
                }
                ,
                t.prototype.render_ = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    i.items = [],
                    i._parent = i;
                    var a = twig.attr("cf"in i ? i.cf : "", "ENUMS");
                    twig.forEach(a, (function(e, t) {
                        i._key = t,
                        i.item = e,
                        i.items = twig.filter.merge("items"in i ? i.items : "", [{
                            id: twig.attr("item"in i ? i.item : "", "ID"),
                            prefix: "cf_" + twig.attr("cf"in i ? i.cf : "", "ID") + "_" + twig.attr("item"in i ? i.item : "", "ID") + "_" + ("form_index"in i ? i.form_index : ""),
                            name: ("name"in i ? i.name : "") + "[" + twig.attr("item"in i ? i.item : "", "ID") + "]",
                            option: twig.attr("item"in i ? i.item : "", "VALUE"),
                            is_checked: twig.contains(twig.attr(twig.attr(twig.attr("element"in i ? i.element : "", "cf"), twig.attr("cf"in i ? i.cf : "", "ID"), void 0, "array"), "VALUE_ENUM_ID", void 0, "array"), twig.attr("item"in i ? i.item : "", "ID"))
                        }])
                    }
                    ), this),
                    new (e._get("interface/controls/checkboxes_dropdown.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        name: "name"in i ? i.name : "",
                        items: "items"in i ? i.items : "",
                        class_name: "class_name"in i ? i.class_name : "",
                        title_empty: this.env_.filter("i18n", "Select"),
                        title_before: "title_before"in i ? i.title_before : ""
                    }))
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_leads_pipeline_quick_add_pipeline_form_fields_multiselect"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/leads_pipeline/quick_add/pipeline_form/fields/multiselect", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e)
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(e) {
                    return !1
                }
                ,
                t.prototype.render_ = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    i.items = [{
                        id: "",
                        option: "placeholder"in i ? i.placeholder : ""
                    }],
                    i._parent = i;
                    var a = twig.attr("cf"in i ? i.cf : "", "ENUMS");
                    twig.forEach(a, (function(e, t) {
                        i._key = t,
                        i.item = e,
                        i.items = twig.filter.merge("items"in i ? i.items : "", [{
                            id: twig.attr("item"in i ? i.item : "", "ID"),
                            option: twig.attr("item"in i ? i.item : "", "VALUE")
                        }])
                    }
                    ), this),
                    i.selected = !1,
                    twig.attr(twig.attr("element"in i ? i.element : "", "cf"), twig.attr("cf"in i ? i.cf : "", "ID"), void 0, "array") && (i.selected = twig.attr(twig.attr(twig.attr("element"in i ? i.element : "", "cf"), twig.attr("cf"in i ? i.cf : "", "ID"), void 0, "array"), "VALUE_ENUM_ID")),
                    new (e._get("interface/controls/select.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        name: "name"in i ? i.name : "",
                        selected: "selected"in i ? i.selected : "",
                        items: "items"in i ? i.items : "",
                        class_name: "linked-form__select",
                        readonly: "readonly"in i ? i.readonly : "",
                        disabled: "disabled"in i ? i.disabled : "",
                        selected_before: ("selected_before"in i ? i.selected_before : "") + ": "
                    }))
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_leads_pipeline_quick_add_pipeline_form_fields_select"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/leads_pipeline/quick_add/pipeline_form/fields/select", t)
            }()
        }
        .apply(t, n)) || (e.exports = a)
    }
    ,
    928617: (e, t, i) => {
        var n, a;
        n = [i(460159), i(295165)],
        void 0 === (a = function(e) {
            (function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e),
                    this.setBlocks({
                        static: twig.bind(this.block_static, this),
                        plug_users_groups: twig.bind(this.block_plug_users_groups, this),
                        head: twig.bind(this.block_head, this),
                        body: twig.bind(this.block_body, this)
                    })
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(e) {
                    return !1
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    e.append(this.renderBlock("static", t, i)),
                    e.append('<div class="pipeline-scroller js-scroll-x-container js-hs-scroller block-selection-prepended '),
                    e.append(twig.filter.escape(this.env_, "class_name"in t ? t.class_name : "", "light_escape", null, !0)),
                    e.append('" id="pipeline_holder">'),
                    e.append(this.renderBlock("plug_users_groups", t, i)),
                    e.append(this.renderBlock("head", t, i)),
                    e.append('<div class="pipeline__body">'),
                    e.append(this.renderBlock("body", t, i)),
                    e.append("</div></div>")
                }
                ,
                t.prototype.block_static = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    e.append(twig.filter.escape(this.env_, this.env_.invoke("inject_static", ["pipeline.css"], this), "light_escape", null, !0))
                }
                ,
                t.prototype.block_plug_users_groups = function(e, t, i) {
                    i = void 0 === i ? {} : i
                }
                ,
                t.prototype.block_head = function(e, t, i) {
                    i = void 0 === i ? {} : i
                }
                ,
                t.prototype.block_body = function(e, t, i) {
                    i = void 0 === i ? {} : i
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_pipeline_bidirectional_scroll_page"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/pipeline/bidirectional_scroll_page", t)
            }
            )(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e),
                    this.setBlocks({
                        column: twig.bind(this.block_column, this)
                    })
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(e) {
                    return !1
                }
                ,
                t.prototype.render_ = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    i.has_items = twig.filter.length(this.env_, "items"in i ? i.items : ""),
                    "has_items"in i && i.has_items || (twig.attr(twig.attr(twig.attr("filter"in i ? i.filter : "", "items"), "without_tasks"), "selected") && "no_items_tmpl"in i && i.no_items_tmpl ? new (e._get("no_items_tmpl"in i ? i.no_items_tmpl : ""))(this.env_).render_(t, i) : "pipeline" != ("entity"in i ? i.entity : "") && "todo" != ("entity"in i ? i.entity : "") || "show_tour"in i && i.show_tour || (i.no_results = !0)),
                    t.append('<div class="pipeline_wrapper pipeline_row'),
                    "no_results"in i && i.no_results && t.append(" no_filter_results"),
                    t.append('">'),
                    t.append(this.renderBlock("column", i, n)),
                    t.append("</div>")
                }
                ,
                t.prototype.block_column = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    i._parent = i;
                    var a = "rows"in i ? i.rows : ""
                      , p = {
                        index0: 0,
                        index: 1,
                        first: !0
                    };
                    if (twig.countable(a)) {
                        var r = twig.count(a);
                        p.revindex0 = r - 1,
                        p.revindex = r,
                        p.length = r,
                        p.last = 1 === r
                    }
                    twig.forEach(a, (function(n, a) {
                        i.key = a,
                        i.row = n,
                        i.key_id = twig.attr("row"in i ? i.row : "", "ID"),
                        "key_id"in i && i.key_id || (i.key_id = "key"in i ? i.key : ""),
                        i.show_tour = twig.attr(twig.attr(p, "parent"), "show_tour"),
                        i.row_index = twig.attr(p, "index"),
                        "items_index"in i && i.items_index ? i.cur_items = twig.attr(twig.attr("items"in i ? i.items : "", "key_id"in i ? i.key_id : "", void 0, "array"), "items_index"in i ? i.items_index : "", void 0, "array") : i.cur_items = twig.attr("items"in i ? i.items : "", "key_id"in i ? i.key_id : "", void 0, "array"),
                        "has_items"in i && i.has_items || !(twig.attr(p, "index") <= 2) || "pipeline" != ("entity"in i ? i.entity : "") && "todo" != ("entity"in i ? i.entity : "") || "show_tour"in i && i.show_tour || !("use_filter"in i) || !i.use_filter || (t.append('<div class="pipeline__no-items"><p>'),
                        "pipeline" == ("entity"in i ? i.entity : "") ? (t.append(" "),
                        t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "pipeline_no_results"), "light_escape", null, !0)),
                        t.append(" ")) : "todo" == ("entity"in i ? i.entity : "") && (t.append(" "),
                        t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "pipeline_no_results_todo"), "light_escape", null, !0)),
                        t.append(" ")),
                        t.append(' <a href="'),
                        t.append(twig.filter.escape(this.env_, twig.attr("filter"in i ? i.filter : "", "url"), "light_escape", null, !0)),
                        t.append('?skip_filter=Y" class="js-navigate-link" title="">'),
                        t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "pipeline_reset_filter"), "light_escape", null, !0)),
                        t.append("</a></p></div>")),
                        t.append('<div class="pipeline_status pipeline_cell pipeline_cell-'),
                        t.append(twig.filter.escape(this.env_, twig.attr("row"in i ? i.row : "", "ID"), "light_escape", null, !0)),
                        t.append(" pipeline_cell-group-"),
                        t.append(twig.filter.escape(this.env_, "key_id"in i ? i.key_id : "", "light_escape", null, !0)),
                        t.append('"><div class="pipeline_items__list js-pipeline-row '),
                        twig.attr("row"in i ? i.row : "", "disable_drop") && t.append("js-pipeline-no-drop"),
                        t.append('" data-id="'),
                        t.append(twig.filter.escape(this.env_, "key_id"in i ? i.key_id : "", "light_escape", null, !0)),
                        t.append('">'),
                        i.quick_add_condition = 1 == twig.attr(p, "index") && ("quick_add_tmpl"in i ? i.quick_add_tmpl : ""),
                        !("quick_add_condition"in i) || !i.quick_add_condition || "use_filter"in i && i.use_filter || !twig.attr(twig.attr("user_rights"in i ? i.user_rights : "", "leads"), "add") || new (e._get("quick_add_tmpl"in i ? i.quick_add_tmpl : ""))(this.env_).render_(t, twig.extend({}, i, {
                            class_name: "quick_add_class_name"in i ? i.quick_add_class_name : ""
                        }));
                        var r = "cur_items"in i ? i.cur_items : ""
                          , l = {
                            parent: p,
                            index0: 0,
                            index: 1,
                            first: !0
                        };
                        if (twig.countable(r)) {
                            var _ = twig.count(r);
                            l.revindex0 = _ - 1,
                            l.revindex = _,
                            l.length = _,
                            l.last = 1 === _
                        }
                        twig.forEach(r, (function(n, a) {
                            i._key = a,
                            i.item = n,
                            new (e._get("item_tmpl"in i ? i.item_tmpl : ""))(this.env_).render_(t, twig.extend({}, i, {
                                row: "row"in i ? i.row : "",
                                item: "item"in i ? i.item : "",
                                row_index: "row_index"in i ? i.row_index : ""
                            })),
                            ++l.index0,
                            ++l.index,
                            l.first = !1,
                            l.length && (--l.revindex0,
                            --l.revindex,
                            l.last = 0 === l.revindex0)
                        }
                        ), this),
                        "more_tmpl"in i && i.more_tmpl && new (e._get("more_tmpl"in i ? i.more_tmpl : ""))(this.env_).render_(t, twig.extend({}, i, {
                            row: "row"in i ? i.row : "",
                            items: "cur_items"in i ? i.cur_items : ""
                        })),
                        t.append("</div></div>"),
                        ++p.index0,
                        ++p.index,
                        p.first = !1,
                        p.length && (--p.revindex0,
                        --p.revindex,
                        p.last = 0 === p.revindex0)
                    }
                    ), this)
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_pipeline_body"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/pipeline/body", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e)
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(e) {
                    return !1
                }
                ,
                t.prototype.render_ = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    i.key_id = twig.attr("row"in i ? i.row : "", "ID"),
                    "key_id"in i && i.key_id || (i.key_id = "key"in i ? i.key : ""),
                    i.show_tour = twig.attr(twig.attr("loop"in i ? i.loop : "", "parent"), "show_tour"),
                    i.row_index = twig.attr("loop"in i ? i.loop : "", "index"),
                    "items_index"in i && i.items_index ? i.cur_items = twig.attr(twig.attr("items"in i ? i.items : "", "key_id"in i ? i.key_id : "", void 0, "array"), "items_index"in i ? i.items_index : "", void 0, "array") : i.cur_items = twig.attr("items"in i ? i.items : "", "key_id"in i ? i.key_id : "", void 0, "array"),
                    "has_items"in i && i.has_items || !(twig.attr("loop"in i ? i.loop : "", "index") <= 2) || "pipeline" != ("entity"in i ? i.entity : "") && "todo" != ("entity"in i ? i.entity : "") || "show_tour"in i && i.show_tour || !("use_filter"in i) || !i.use_filter || (t.append('<div class="pipeline__no-items"><p>'),
                    "pipeline" == ("entity"in i ? i.entity : "") ? (t.append(" "),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "pipeline_no_results"), "light_escape", null, !0)),
                    t.append(" ")) : "todo" == ("entity"in i ? i.entity : "") && (t.append(" "),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "pipeline_no_results_todo"), "light_escape", null, !0)),
                    t.append(" ")),
                    t.append(' <a href="'),
                    t.append(twig.filter.escape(this.env_, twig.attr("filter"in i ? i.filter : "", "url"), "light_escape", null, !0)),
                    t.append('?skip_filter=Y" class="js-navigate-link" title="">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "pipeline_reset_filter"), "light_escape", null, !0)),
                    t.append("</a></p></div>")),
                    t.append('<div class="pipeline_status pipeline_cell pipeline_cell-'),
                    t.append(twig.filter.escape(this.env_, twig.attr("row"in i ? i.row : "", "ID"), "light_escape", null, !0)),
                    t.append(" pipeline_cell-group-"),
                    t.append(twig.filter.escape(this.env_, "key_id"in i ? i.key_id : "", "light_escape", null, !0)),
                    t.append(" "),
                    "aside"in i && i.aside && t.append("pipeline_cell-aside-item"),
                    t.append(" "),
                    twig.contains(["today", "tomorrow"], "key_id"in i ? i.key_id : "") || 0 != twig.filter.length(this.env_, "cur_items"in i ? i.cur_items : "") || t.append(" hidden "),
                    t.append(" "),
                    t.append(twig.filter.escape(this.env_, "class_name"in i ? i.class_name : "", "light_escape", null, !0)),
                    t.append('">'),
                    new (e._get("header_tmpl"in i ? i.header_tmpl : ""))(this.env_).render_(t, twig.extend({}, i, {
                        key: "key"in i ? i.key : "",
                        row: "row"in i ? i.row : "",
                        is_last: twig.attr("loop"in i ? i.loop : "", "is_last"),
                        is_first: twig.attr("loop"in i ? i.loop : "", "is_first")
                    })),
                    t.append('<div class="pipeline_items__list js-pipeline-row '),
                    twig.attr("row"in i ? i.row : "", "disable_drop") && t.append("js-pipeline-no-drop"),
                    t.append('" data-id="'),
                    t.append(twig.filter.escape(this.env_, "key_id"in i ? i.key_id : "", "light_escape", null, !0)),
                    t.append('">'),
                    i.quick_add_condition = 1 == twig.attr("loop"in i ? i.loop : "", "index") && ("quick_add_tmpl"in i ? i.quick_add_tmpl : ""),
                    !("quick_add_condition"in i) || !i.quick_add_condition || "use_filter"in i && i.use_filter || !twig.attr(twig.attr("user_rights"in i ? i.user_rights : "", "leads"), "add") || new (e._get("quick_add_tmpl"in i ? i.quick_add_tmpl : ""))(this.env_).render_(t, twig.extend({}, i, {
                        class_name: "quick_add_class_name"in i ? i.quick_add_class_name : ""
                    })),
                    i._parent = i;
                    var a = "cur_items"in i ? i.cur_items : ""
                      , p = {
                        index0: 0,
                        index: 1,
                        first: !0
                    };
                    if (twig.countable(a)) {
                        var r = twig.count(a);
                        p.revindex0 = r - 1,
                        p.revindex = r,
                        p.length = r,
                        p.last = 1 === r
                    }
                    twig.forEach(a, (function(n, a) {
                        i._key = a,
                        i.item = n,
                        new (e._get("item_tmpl"in i ? i.item_tmpl : ""))(this.env_).render_(t, twig.extend({}, i, {
                            row: "row"in i ? i.row : "",
                            item: "item"in i ? i.item : "",
                            row_index: "row_index"in i ? i.row_index : "",
                            item_index: twig.attr(p, "index0")
                        })),
                        ++p.index0,
                        ++p.index,
                        p.first = !1,
                        p.length && (--p.revindex0,
                        --p.revindex,
                        p.last = 0 === p.revindex0)
                    }
                    ), this),
                    t.append("</div></div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_pipeline_body_item"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/pipeline/body_item", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e)
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(e) {
                    return !1
                }
                ,
                t.prototype.render_ = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    t.append('<div class="pipeline_leads__linked-entities pipeline_leads__linked-entities_last-message '),
                    "has_tags"in i && i.has_tags && t.append("pipeline_leads__linked-entities_last-message__has_tags"),
                    t.append('"><svg class="pipeline_leads__linked-entities_last-message__tail svg-icon svg-digital_pipeline--chat_tail-dims"><use xlink:href="#digital_pipeline--chat_tail"></use></svg>'),
                    new (e._get("interface/common/avatar.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        id: twig.attr("from"in i ? i.from : "", "id"),
                        url: twig.attr("from"in i ? i.from : "", "icon")
                    })),
                    t.append('<div class="pipeline_leads__linked-entities_last-message__text">'),
                    t.append(twig.filter.escape(this.env_, "message"in i ? i.message : "", "light_escape", null, !0)),
                    t.append("</div></div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_pipeline_chat_message"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/pipeline/chat_message", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e)
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(e) {
                    return !1
                }
                ,
                t.prototype.render_ = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    t.append('<div class="pipeline_row pipeline_row-head'),
                    "select_one"in i && i.select_one && t.append(" pipeline_row-head_select-one"),
                    t.append('" id="pipeline_head">'),
                    i._parent = i;
                    var a = "rows"in i ? i.rows : ""
                      , p = {
                        index0: 0,
                        index: 1,
                        first: !0
                    };
                    if (twig.countable(a)) {
                        var r = twig.count(a);
                        p.revindex0 = r - 1,
                        p.revindex = r,
                        p.length = r,
                        p.last = 1 === r
                    }
                    twig.forEach(a, (function(n, a) {
                        i.key = a,
                        i.row = n,
                        i.key_id = twig.attr("row"in i ? i.row : "", "ID"),
                        "key_id"in i && i.key_id || (i.key_id = "key"in i ? i.key : ""),
                        t.append('<div class="pipeline_cell pipeline_cell-head pipeline_cell-head-'),
                        t.append(twig.filter.escape(this.env_, twig.attr("row"in i ? i.row : "", "ID"), "light_escape", null, !0)),
                        t.append(" pipeline_cell-head-group-"),
                        t.append(twig.filter.escape(this.env_, "key_id"in i ? i.key_id : "", "light_escape", null, !0)),
                        t.append(" "),
                        t.append(twig.filter.escape(this.env_, "head_cell_class_name"in i ? i.head_cell_class_name : "", "light_escape", null, !0)),
                        t.append('">'),
                        new (e._get("header_tmpl"in i ? i.header_tmpl : ""))(this.env_).render_(t, twig.extend({}, i, {
                            key: "key"in i ? i.key : "",
                            row: "row"in i ? i.row : "",
                            is_last: twig.attr(p, "is_last"),
                            is_first: twig.attr(p, "is_first")
                        })),
                        t.append("</div>"),
                        ++p.index0,
                        ++p.index,
                        p.first = !1,
                        p.length && (--p.revindex0,
                        --p.revindex,
                        p.last = 0 === p.revindex0)
                    }
                    ), this),
                    t.append("</div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_pipeline_head"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/pipeline/head", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e),
                    this.setBlocks({
                        head: twig.bind(this.block_head, this),
                        body: twig.bind(this.block_body, this)
                    })
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(t) {
                    return e._get("interface/pipeline/bidirectional_scroll_page.twig")
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    this.getParent(t).render_(e, t, twig.extend({}, this.getBlocks(), i))
                }
                ,
                t.prototype.block_head = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    new (e._get("interface/pipeline/head.twig"))(this.env_).render_(t, i)
                }
                ,
                t.prototype.block_body = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    new (e._get("interface/pipeline/body.twig"))(this.env_).render_(t, i)
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_pipeline_main"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/pipeline/main", t)
            }()
        }
        .apply(t, n)) || (e.exports = a)
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
        e._sentryDebugIds[t] = "81ff2711-3038-4b88-aa43-3a30c81da21e",
        e._sentryDebugIdIdentifier = "sentry-dbid-81ff2711-3038-4b88-aa43-3a30c81da21e")
    } catch (e) {}
}();
//# sourceMappingURL=87703.0cde2122f2ff23e4d079.js.map
