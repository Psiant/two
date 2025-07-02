(window.webpackChunk = window.webpackChunk || []).push([[95812, 25530], {
    602601: (e, t, i) => {
        var n, s;
        n = [i(460159), i(284685), i(325530), i(898296), i(295165), i(591880), i(94849), i(522814)],
        void 0 === (s = function(e) {
            (function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e),
                    this.setBlocks({
                        main_fields: twig.bind(this.block_main_fields, this),
                        linked: twig.bind(this.block_linked, this),
                        fields_footer: twig.bind(this.block_fields_footer, this)
                    })
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(t) {
                    return e._get("interface/cards/base.twig")
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    t.main_entity_def = "lead",
                    t.default_tab_selected = this.env_.filter("is_tab_selected", "tabs_groups"in t ? t.tabs_groups : "", "leads"),
                    this.getParent(t).render_(e, t, twig.extend({}, this.getBlocks(), i))
                }
                ,
                t.prototype.block_main_fields = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    new (e._get("interface/cards/forms/entity_form_fields.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        template_type: "main_entity",
                        budget: twig.attr("main"in i ? i.main : "", "PRICE", void 0, "array"),
                        budget_raw: twig.attr("main"in i ? i.main : "", "RAW_PRICE", void 0, "array"),
                        budget_placeholder: twig.attr("main"in i ? i.main : "", "PRICE_PLACEHOLDER", void 0, "array") ? twig.attr("main"in i ? i.main : "", "PRICE_PLACEHOLDER", void 0, "array") : 0,
                        budget_name: "lead[PRICE]",
                        main_entity_def: "main_entity_def"in i ? i.main_entity_def : "",
                        currency_short_name: "currency_short_name"in i ? i.currency_short_name : "",
                        form_action: "/ajax/leads/detail/",
                        form_id: "edit_card",
                        main: "main"in i ? i.main : "",
                        element: "element"in i ? i.element : "",
                        custom_fields: "custom_field"in i ? i.custom_field : "",
                        groups: "groups_cf"in i ? i.groups_cf : "",
                        default_tab_selected: "default_tab_selected"in i ? i.default_tab_selected : "",
                        lang: "lang"in i ? i.lang : ""
                    }))
                }
                ,
                t.prototype.block_linked = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    new (e._get("interface/cards/linked.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        main_entity_def: "main_entity_def"in i ? i.main_entity_def : "",
                        form_action_contact: "/private/ajax/contacts/add_person/?ACTION=ADD_PERSON&template=twig&from_lead=Y",
                        form_action_company: "/private/ajax/companies/add_person/?ACTION=ADD_PERSON&template=twig&from_lead=Y",
                        default_tab_selected: "default_tab_selected"in i ? i.default_tab_selected : ""
                    }))
                }
                ,
                t.prototype.block_fields_footer = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    "is_unsorted"in i && i.is_unsorted && "grant_edit"in i && i.grant_edit && new (e._get("interface/unsorted/card_actions.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        category: "unsorted_category"in i ? i.unsorted_category : ""
                    }))
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_leads_card"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/leads/card", t)
            }
            )(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e),
                    this.setBlocks({
                        js_constants: twig.bind(this.block_js_constants, this),
                        meter_fcp_card: twig.bind(this.block_meter_fcp_card, this),
                        static: twig.bind(this.block_static, this)
                    })
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(t) {
                    return e._get("interface/leads/card.twig")
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    this.getParent(t).render_(e, t, twig.extend({}, this.getBlocks(), i))
                }
                ,
                t.prototype.block_js_constants = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    t.append(this.renderParentBlock("js_constants", i, n)),
                    new (e._get("interface/leads/constants_js.twig"))(this.env_).render_(t, i)
                }
                ,
                t.prototype.block_meter_fcp_card = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    e.append("<script>setTimeout(() => {APP.metrics.set({type: '"),
                    e.append(twig.filter.escape(this.env_, "metric_type"in t ? t.metric_type : "", "light_escape", null, !0)),
                    e.append("',name: 'cardFcp',value: Math.ceil(APP.metrics.getTimeFromStart()),})})<\/script>")
                }
                ,
                t.prototype.block_static = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    twig.attr("_account_features"in t ? t._account_features : "", "single_timeline") ? e.append(twig.filter.escape(this.env_, this.env_.invoke("inject_static", ["cards_feedx_card.php"], this), "light_escape", null, !0)) : e.append(twig.filter.escape(this.env_, this.env_.invoke("inject_static", ["cards_feed_card.php"], this), "light_escape", null, !0))
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_leads_card_with_constants"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/leads/card_with_constants", t)
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
                    e.append('<script type="text/javascript">'),
                    t._parent = t;
                    var n = "constants"in t ? t.constants : "";
                    twig.forEach(n, (function(i, n) {
                        t.name = n,
                        t.value_js = i,
                        "user_rights" == ("name"in t ? t.name : "") || "amocrm_drive" == ("name"in t ? t.name : "") ? (e.append("AMOCRM.constant('"),
                        e.append(twig.filter.escape(this.env_, "name"in t ? t.name : "", "light_escape", null, !0)),
                        e.append("', AMOCRM.extend("),
                        e.append("value_js"in t ? t.value_js : ""),
                        e.append(", AMOCRM.constant('"),
                        e.append(twig.filter.escape(this.env_, "name"in t ? t.name : "", "light_escape", null, !0)),
                        e.append("') || {}));")) : (e.append("AMOCRM.constant('"),
                        e.append(twig.filter.escape(this.env_, "name"in t ? t.name : "", "light_escape", null, !0)),
                        e.append("', "),
                        e.append("value_js"in t ? t.value_js : ""),
                        e.append(" );"))
                    }
                    ), this),
                    twig.empty("langs"in t ? t.langs : "") || (e.append("AMOCRM.addLang("),
                    e.append("langs"in t ? t.langs : ""),
                    e.append(");")),
                    e.append("<\/script>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_leads_constants_js"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/leads/constants_js", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e),
                    this.setBlocks({
                        additional_block: twig.bind(this.block_additional_block, this),
                        body: twig.bind(this.block_body, this),
                        body_no_items_message: twig.bind(this.block_body_no_items_message, this),
                        list_tabs: twig.bind(this.block_list_tabs, this)
                    })
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(t) {
                    return e._get("interface/list/table.twig")
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    t.no_deals_without_tasks = twig.attr(twig.attr(twig.attr("filter"in t ? t.filter : "", "items"), "without_tasks"), "selected") && !twig.filter.length(this.env_, "items"in t ? t.items : ""),
                    this.getParent(t).render_(e, t, twig.extend({}, this.getBlocks(), i))
                }
                ,
                t.prototype.block_additional_block = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    "no_deals_without_tasks"in i && i.no_deals_without_tasks && new (e._get("interface/leads/plug/well_done.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        url: twig.attr("filter"in i ? i.filter : "", "url")
                    }))
                }
                ,
                t.prototype.block_body = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    i.visible_fields = [],
                    i._parent = i;
                    var s = "fields"in i ? i.fields : "";
                    twig.forEach(s, (function(e, t) {
                        i._key = t,
                        i.field = e,
                        twig.attr("field"in i ? i.field : "", "shown") && (i.visible_fields = twig.filter.merge("visible_fields"in i ? i.visible_fields : "", ["field"in i ? i.field : ""]))
                    }
                    ), this),
                    i._parent = i,
                    s = "items"in i ? i.items : "";
                    var a = {
                        index0: 0,
                        index: 1,
                        first: !0
                    };
                    if (twig.countable(s)) {
                        var l = twig.count(s);
                        a.revindex0 = l - 1,
                        a.revindex = l,
                        a.length = l,
                        a.last = 1 === l
                    }
                    twig.forEach(s, (function(n, s) {
                        i._key = s,
                        i.lead = n,
                        new (e._get("interface/leads/list_item.twig"))(this.env_).render_(t, twig.extend({}, i, {
                            is_first: twig.attr(a, "first"),
                            is_last: twig.attr(a, "last"),
                            page: "page"in i ? i.page : "",
                            item: "lead"in i ? i.lead : "",
                            fields: "fields"in i ? i.fields : "",
                            visible_fields: "visible_fields"in i ? i.visible_fields : ""
                        })),
                        ++a.index0,
                        ++a.index,
                        a.first = !1,
                        a.length && (--a.revindex0,
                        --a.revindex,
                        a.last = 0 === a.revindex0)
                    }
                    ), this)
                }
                ,
                t.prototype.block_body_no_items_message = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    "no_deals_without_tasks"in i && i.no_deals_without_tasks ? new (e._get("interface/leads/plug/fake_list.twig"))(this.env_).render_(t, i) : twig.filter.length(this.env_, "items"in i ? i.items : "") || new (e._get("interface/list/no_items_message.twig"))(this.env_).render_(t, i)
                }
                ,
                t.prototype.block_list_tabs = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    !twig.attr("unsorted"in i ? i.unsorted : "", "denied") && twig.attr("unsorted"in i ? i.unsorted : "", "show") && new (e._get("interface/list/common/tabs.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        active_tabs: {
                            leads: !0
                        },
                        url: twig.attr("filter"in i ? i.filter : "", "url")
                    }))
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_leads_inner"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/leads/inner", t)
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
                        list_body: twig.bind(this.block_list_body, this)
                    })
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(t) {
                    return e._get("interface/list/list.twig")
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
                    t.body_class_name = "list__body__holder-table",
                    !twig.attr("unsorted"in t ? t.unsorted : "", "denied") && twig.attr("unsorted"in t ? t.unsorted : "", "show") && (t.body_class_name = "list__body__holder-table list__body__holder_has-unsorted"),
                    this.getParent(t).render_(e, t, twig.extend({}, this.getBlocks(), i))
                }
                ,
                t.prototype.block_list_top_right = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    t.append('<div class="list__body-right__top">'),
                    new (e._get("interface/common/leads/top_nav.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        selected: {
                            list: !0
                        },
                        user_rank: "user_rank"in i ? i.user_rank : ""
                    })),
                    new (e._get("interface/common/leads/top_actions.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        is_list: !0,
                        user_rank: "user_rank"in i ? i.user_rank : ""
                    })),
                    new (e._get("interface/filter/search_block.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        id: !1,
                        search_placeholder: twig.attr("lang"in i ? i.lang : "", "list_search_in_filter"),
                        user_rank: "user_rank"in i ? i.user_rank : ""
                    })),
                    "use_per_account"in i && i.use_per_account && t.append("..."),
                    t.append("</div>")
                }
                ,
                t.prototype.block_static = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    e.append(twig.filter.escape(this.env_, this.env_.invoke("inject_static", ["leads_list.php"], this), "light_escape", null, !0))
                }
                ,
                t.prototype.block_list_body = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    new (e._get("interface/leads/inner.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        fields: "fields"in i ? i.fields : "",
                        items: "items"in i ? i.items : ""
                    }))
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_leads_list"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/leads/list", t)
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
                    twig.attr("item"in i ? i.item : "", "is_unsorted") ? new (e._get("interface/leads/unsorted_list_item.twig"))(this.env_).render_(t, i) : new (e._get("interface/list/item.twig"))(this.env_).render_(t, i)
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_leads_list_item"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/leads/list_item", t)
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
                    t.append('<div data-id="'),
                    t.append(twig.filter.escape(this.env_, twig.attr("item"in i ? i.item : "", "id"), "light_escape", null, !0)),
                    t.append('" class="list-row list-row_unsorted js-list-row js-pager-list-item__'),
                    "page"in i && i.page ? t.append(twig.filter.escape(this.env_, "page"in i ? i.page : "", "light_escape", null, !0)) : t.append("1"),
                    t.append(" "),
                    ("is_first"in i && i.is_first || "is_last"in i && i.is_last) && t.append(" js-page-delimiter"),
                    t.append(" js-item-id-"),
                    t.append(twig.filter.escape(this.env_, twig.attr("item"in i ? i.item : "", "id"), "light_escape", null, !0)),
                    t.append(" "),
                    t.append(twig.filter.escape(this.env_, twig.attr("item"in i ? i.item : "", "class_name"), "light_escape", null, !0)),
                    t.append(" "),
                    "has_markers"in i && i.has_markers && t.append("list-row_marked"),
                    "is_sortable"in i && i.is_sortable && t.append(" js-pipeline-sortable"),
                    t.append('" '),
                    ("is_first"in i && i.is_first || "is_last"in i && i.is_last) && (t.append('data-page="'),
                    "page"in i && i.page ? t.append(twig.filter.escape(this.env_, "page"in i ? i.page : "", "light_escape", null, !0)) : t.append("1"),
                    t.append('"')),
                    t.append(' id="list_item_'),
                    t.append(twig.filter.escape(this.env_, twig.attr("item"in i ? i.item : "", "id"), "light_escape", null, !0)),
                    t.append('"'),
                    twig.attr("item"in i ? i.item : "", "additional_data")) {
                        i._parent = i;
                        var s = twig.attr("item"in i ? i.item : "", "additional_data");
                        twig.forEach(s, (function(e, n) {
                            i._key = n,
                            i.addition_data = e,
                            t.append(" data-"),
                            t.append(twig.filter.escape(this.env_, twig.attr("addition_data"in i ? i.addition_data : "", "key"), "light_escape", null, !0)),
                            t.append('="'),
                            t.append(twig.filter.escape(this.env_, twig.attr("addition_data"in i ? i.addition_data : "", "value"), "light_escape", null, !0)),
                            t.append('"')
                        }
                        ), this)
                    }
                    t.append(">"),
                    new (e._get("interface/list/cells/id.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        id: twig.attr("item"in i ? i.item : "", "id"),
                        marked_id: twig.attr("item"in i ? i.item : "", "marked_id"),
                        has_unread: twig.attr("item"in i ? i.item : "", "has_unread"),
                        is_sortable: "is_sortable"in i ? i.is_sortable : ""
                    })),
                    i._parent = i,
                    s = "visible_fields"in i ? i.visible_fields : "";
                    var a = {
                        index0: 0,
                        index: 1,
                        first: !0
                    };
                    if (twig.countable(s)) {
                        var l = twig.count(s);
                        a.revindex0 = l - 1,
                        a.revindex = l,
                        a.length = l,
                        a.last = 1 === l
                    }
                    twig.forEach(s, (function(n, s) {
                        i._key = s,
                        i.field = n,
                        i.field_template = "",
                        twig.attr(a, "last") ? i.field_template = "unsorted_actions" : twig.contains(["main_contact", "contact_company_name"], twig.attr("field"in i ? i.field : "", "code")) ? i.field_template = "unsorted_contact" : "name" == twig.attr("field"in i ? i.field : "", "template") && (i.field_template = "unsorted_name"),
                        "field_template"in i && i.field_template && (i.field = twig.filter.merge("field"in i ? i.field : "", {
                            template: "field_template"in i ? i.field_template : ""
                        })),
                        new (e._get("interface/list/cell.twig"))(this.env_).render_(t, twig.extend({}, i, {
                            item: "item"in i ? i.item : "",
                            field: "field"in i ? i.field : "",
                            is_blue: 2 == twig.attr(a, "index"),
                            is_unsorted: !0
                        })),
                        ++a.index0,
                        ++a.index,
                        a.first = !1,
                        a.length && (--a.revindex0,
                        --a.revindex,
                        a.last = 0 === a.revindex0)
                    }
                    ), this),
                    t.append("</div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_leads_unsorted_list_item"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/leads/unsorted_list_item", t)
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
                    e.append('<div class="lead-closed-status js-closed-status-msg"><div class="lead-closed-status__inner js-note-fixable"><div class="lead-closed-status__msg"><div class="lead-closed-status__msg-wrap"><span class="lead-closed-status__msg-head"><svg class="svg-icon svg-leads--'),
                    e.append(twig.filter.escape(this.env_, "icon"in t ? t.icon : "", "light_escape", null, !0)),
                    e.append("-dims lead-closed-status__icon lead-closed-status__icon_"),
                    e.append(twig.filter.escape(this.env_, "icon"in t ? t.icon : "", "light_escape", null, !0)),
                    e.append('"><use xlink:href="#leads--'),
                    e.append(twig.filter.escape(this.env_, "icon"in t ? t.icon : "", "light_escape", null, !0)),
                    e.append('"></use></svg>'),
                    e.append(twig.filter.escape(this.env_, "msg"in t ? t.msg : "", "light_escape", null, !0)),
                    e.append(" "),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("date", "date"in t ? t.date : "", "date"), "light_escape", null, !0)),
                    "person"in t && t.person && (e.append(", "),
                    e.append(twig.filter.escape(this.env_, "person"in t ? t.person : "", "light_escape", null, !0))),
                    "reason"in t && t.reason && (e.append("; "),
                    e.append(twig.filter.escape(this.env_, "reason"in t ? t.reason : "", "light_escape", null, !0))),
                    e.append("</span></div></div></div></div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_leads_cards_closed_status_msg"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/leads/cards/closed_status_msg", t)
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
                    t.append('<div class="content__account__note__wrapper cf_description cf-section__limits-descr" id="cf_limit_'),
                    t.append(twig.filter.escape(this.env_, "name"in i ? i.name : "", "light_escape", null, !0)),
                    t.append('" style="'),
                    (-1 == twig.attr(twig.attr("params"in i ? i.params : "", "tariff"), "cf_max_count") || twig.attr(twig.attr("params"in i ? i.params : "", "tariff"), "cf_max_count") > twig.attr(twig.attr(twig.attr("params"in i ? i.params : "", "tariff"), "cf_current_count"), "name"in i ? i.name : "", void 0, "array")) && t.append("display: none"),
                    t.append('"><div class="content__account__note cf_description"><p class="warning">'),
                    t.append(twig.filter.escape(this.env_, twig.filter.replace(twig.attr(twig.attr("lang"in i ? i.lang : "", "cf"), "tariff_limit_reached"), {
                        "#TARIFF#": twig.attr("tariff"in i ? i.tariff : "", "name")
                    }), "light_escape", null, !0)),
                    t.append("</p></div></div>"),
                    new (e._get("interface/cards/custom_fields/section.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        name: "leads",
                        groups: twig.attr(twig.attr("params"in i ? i.params : "", "groups"), "leads"),
                        fields: twig.attr(twig.attr("params"in i ? i.params : "", "fields"), "leads"),
                        cf_types: twig.attr("params"in i ? i.params : "", "fields_types"),
                        statuses: twig.attr("params"in i ? i.params : "", "statuses"),
                        has_pipelines: twig.attr("params"in i ? i.params : "", "has_pipelines"),
                        pipelines: twig.attr("params"in i ? i.params : "", "pipelines"),
                        is_main_entity: !0
                    })),
                    t.append('<div class="card-cf__linked js-card-fields__linked-block" '),
                    "default" != ("selected_tab"in i ? i.selected_tab : "") && t.append('style="display: none"'),
                    t.append('><div class="card-cf__linked-item"><span class="card-cf__linked-icon card-cf__linked-icon_contacts"><svg class="svg-icon svg-common--contacts-dims"><use xlink:href="#common--contacts"></use></svg></span>'),
                    t.append(twig.filter.escape(this.env_, twig.attr(twig.attr("lang"in i ? i.lang : "", "cf"), "in_modal_caption_contacts"), "light_escape", null, !0)),
                    t.append("</div>"),
                    new (e._get("interface/cards/custom_fields/section.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        name: "contacts",
                        groups: twig.attr(twig.attr("params"in i ? i.params : "", "groups"), "contacts"),
                        fields: twig.attr(twig.attr("params"in i ? i.params : "", "fields"), "contacts"),
                        cf_types: twig.attr("params"in i ? i.params : "", "fields_types"),
                        statuses: twig.attr("params"in i ? i.params : "", "statuses"),
                        has_pipelines: twig.attr("params"in i ? i.params : "", "has_pipelines"),
                        pipelines: twig.attr("params"in i ? i.params : "", "pipelines"),
                        is_main_entity: !1,
                        section_sortable: !1
                    })),
                    t.append('<div class="card-cf__linked-item"><span class="card-cf__linked-icon"><span class="icon icon-inline icon-company-userpic"></span></span>'),
                    t.append(twig.filter.escape(this.env_, twig.attr(twig.attr("lang"in i ? i.lang : "", "cf"), "in_modal_caption_companies"), "light_escape", null, !0)),
                    t.append("</div>"),
                    new (e._get("interface/cards/custom_fields/section.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        name: "companies",
                        groups: twig.attr(twig.attr("params"in i ? i.params : "", "groups"), "companies"),
                        fields: twig.attr(twig.attr("params"in i ? i.params : "", "fields"), "companies"),
                        cf_types: twig.attr("params"in i ? i.params : "", "fields_types"),
                        statuses: twig.attr("params"in i ? i.params : "", "statuses"),
                        has_pipelines: twig.attr("params"in i ? i.params : "", "has_pipelines"),
                        pipelines: twig.attr("params"in i ? i.params : "", "pipelines"),
                        is_main_entity: !1,
                        section_sortable: !1
                    })),
                    t.append("</div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_leads_cards_custom_fields"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/leads/cards/custom_fields", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e),
                    this.setBlocks({
                        name: twig.bind(this.block_name, this),
                        status: twig.bind(this.block_status, this)
                    })
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(t) {
                    return e._get("interface/cards/form_top.twig")
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    t.tags_name = "lead[tags]",
                    this.getParent(t).render_(e, t, twig.extend({}, this.getBlocks(), i))
                }
                ,
                t.prototype.block_name = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    new (e._get("interface/cards/name.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        name_suggest_entity: "deals",
                        input_name: "lead[NAME]"
                    }))
                }
                ,
                t.prototype.block_status = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    t.append('<div class="linked-form__field linked-form__field_status linked-form__field_status-lead"><div class="linked-form__field__value js-cf-readonly">'),
                    new (e._get("interface/cards/leads/controls/status.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        name: "lead[STATUS]",
                        id: "lead_status_input",
                        class_name: "card-cf-lead-status-select",
                        selected: twig.attr("main"in i ? i.main : "", "STATUS", void 0, "array"),
                        has_pipelines: "has_pipelines"in i ? i.has_pipelines : "",
                        selected_pipe: {
                            input: {
                                name: "lead[PIPELINE]",
                                id: "lead[PIPELINE_ID]"
                            },
                            id: twig.attr("main"in i ? i.main : "", "PIPELINE_ID", void 0, "array"),
                            name: "lead[PIPELINE_ID]"
                        },
                        editable: ("grant_edit"in i ? i.grant_edit : "") || ("is_add"in i ? i.is_add : ""),
                        statuses: "statuses"in i ? i.statuses : "",
                        items: "statuses"in i ? i.statuses : "",
                        select_class_name: "form-top-card-statuses-select js-select-without-blur",
                        pipeline_select_class_name: "form-top-card-pipeline-select",
                        pipeline_select_inner_class_name: "form-top-card-pipeline-select__inner"
                    })),
                    t.append("</div></div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_leads_cards_form_top"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/leads/cards/form_top", t)
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
                    e.append('<div class="too-much-linked-entities"><div class="too-much-linked-entities__inner js-note-fixable"><div class="too-much-linked-entities__msg"><div class="too-much-linked-entities__msg-wrap"><span class="too-much-linked-entities__msg-head"><svg class="svg-icon svg-common--warning-stroked-dims too-much-linked-entities__icon"><use xlink:href="#common--warning-stroked"></use></svg>'),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "This card is connected to too many other records, so the feed cannot display all events"), "light_escape", null, !0)),
                    e.append("</span></div></div></div></div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_leads_cards_too_much_linked_entities"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/leads/cards/too_much_linked_entities", t)
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
                    t.append('<div class="list__top__actions">'),
                    i.is_pipeline_templates_available = twig.attr(twig.attr(twig.attr("js_params"in i ? i.js_params : "", "constants"), "leads_list_template_params"), "is_pipeline_templates_available"),
                    i.current_id = "",
                    i.has_items = twig.filter.length(this.env_, "items"in i ? i.items : "") || ("is_plug"in i ? i.is_plug : ""),
                    "pipelines"in i && i.pipelines) {
                        i._parent = i;
                        var s = "pipelines"in i ? i.pipelines : "";
                        twig.forEach(s, (function(e, t) {
                            i._key = t,
                            i.item = e,
                            twig.attr("item"in i ? i.item : "", "selected") && (i.current_id = twig.attr("item"in i ? i.item : "", "id"))
                        }
                        ), this)
                    }
                    "current_id"in i && i.current_id || !("pipeline_id"in i) || !i.pipeline_id || (i.current_id = "pipeline_id"in i ? i.pipeline_id : ""),
                    "is_plug"in i && i.is_plug || (i.context_menu = [],
                    i.donload_item = {
                        svg_icon: "download",
                        text: twig.attr("lang"in i ? i.lang : "", "unsorted_export_title"),
                        class_name: "js-list-export"
                    },
                    i.upload_item = {
                        svg_icon: "upload",
                        text: twig.attr("lang"in i ? i.lang : "", "unsorted_import_excel_title"),
                        class_name: "js-list-import"
                    },
                    i.lead_tile = {
                        svg_icon: twig.attr("_account_features"in i ? i._account_features : "", "is_customization_for_global") ? "edit-card-layout" : "settings-key",
                        text: twig.attr("_account_features"in i ? i._account_features : "", "is_customization_for_global") ? this.env_.filter("i18n", "Edit card layout") : this.env_.filter("i18n", "Card view"),
                        class_name: "js-lead_tile"
                    },
                    i.broadcast = {
                        svg_icon: "broadcasting",
                        text: this.env_.filter("i18n", "New broadcast"),
                        class_name: "js-broadcasting-create"
                    },
                    i.edit_pipeline = {
                        svg_icon: "edit-pipeline",
                        text: this.env_.filter("i18n", "Edit pipeline"),
                        class_name: "js-edit-pipeline context-menu__item_divider"
                    },
                    i.multiactions = {
                        svg_icon: "multiactions",
                        text: twig.attr("_account_features"in i ? i._account_features : "", "is_customization_for_global") ? this.env_.filter("i18n", "Select multiple") : this.env_.filter("i18n", "Multiple actions"),
                        class_name: "js-multiactions"
                    },
                    i.list_print = {
                        svg_icon: "print",
                        text: twig.attr("lang"in i ? i.lang : "", "button_print"),
                        class_name: "js-list-print"
                    },
                    i.settings_key = {
                        svg_icon: "settings-key",
                        text: twig.attr("lang"in i ? i.lang : "", "button_list_settings"),
                        class_name: "js-list-settings"
                    },
                    i.setup_button_class_name = "list-top-nav__button-setup__" + ("user_rank"in i ? i.user_rank : ""),
                    twig.attr("user_rights"in i ? i.user_rights : "", "is_admin") && (i.context_menu = twig.filter.merge("context_menu"in i ? i.context_menu : "", [{
                        svg_icon: "settings",
                        text: twig.attr("_account_features"in i ? i._account_features : "", "is_customization_for_global") ? twig.attr("lang"in i ? i.lang : "", "button_setup_pipeline_glob") : twig.attr("lang"in i ? i.lang : "", "button_setup_pipeline"),
                        class_name: ("master" != ("user_rank"in i ? i.user_rank : "") ? "setup_button_class_name"in i ? i.setup_button_class_name : "" : "list-top-nav__button-setup") + "_context",
                        href: "/settings/pipeline/leads" + ("current_id"in i && i.current_id ? "/" + ("current_id"in i ? i.current_id : "") : "")
                    }])),
                    (twig.attr("_account_features"in i ? i._account_features : "", "is_customization_for_global") || twig.attr("_account_features"in i ? i._account_features : "", "broadcasting")) && (i.context_menu = twig.filter.merge("context_menu"in i ? i.context_menu : "", ["broadcast"in i ? i.broadcast : ""])),
                    twig.attr("_account_features"in i ? i._account_features : "", "is_customization_for_global") ? "list_type"in i && i.list_type || !twig.attr("_account_features"in i ? i._account_features : "", "pipeline_template_settings") || "is_list"in i && i.is_list || (i.context_menu = twig.filter.merge("context_menu"in i ? i.context_menu : "", ["edit_pipeline"in i ? i.edit_pipeline : ""])) : ((twig.attr(twig.attr("user_rights"in i ? i.user_rights : "", "leads"), "add") || twig.attr(twig.attr("user_rights"in i ? i.user_rights : "", "contacts"), "add") || twig.attr(twig.attr("user_rights"in i ? i.user_rights : "", "contacts"), "add_company")) && (i.context_menu = twig.filter.merge("context_menu"in i ? i.context_menu : "", ["upload_item"in i ? i.upload_item : ""])),
                    twig.attr(twig.attr("user_rights"in i ? i.user_rights : "", "leads"), "export") && (i.context_menu = twig.filter.merge("context_menu"in i ? i.context_menu : "", ["donload_item"in i ? i.donload_item : ""]))),
                    "is_list"in i && i.is_list && ("list_type"in i && i.list_type || !twig.attr("_account_features"in i ? i._account_features : "", "pipeline_template_settings") || !("is_pipeline_templates_available"in i) || !i.is_pipeline_templates_available || (i.context_menu = twig.filter.merge("context_menu"in i ? i.context_menu : "", ["edit_pipeline"in i ? i.edit_pipeline : ""])),
                    i.context_menu = twig.filter.merge("context_menu"in i ? i.context_menu : "", ["list_print"in i ? i.list_print : ""]),
                    "is_unsorted"in i && i.is_unsorted || !("has_items"in i) || !i.has_items || (i.context_menu = twig.filter.merge("context_menu"in i ? i.context_menu : "", ["settings_key"in i ? i.settings_key : ""]))),
                    twig.attr("user_rights"in i ? i.user_rights : "", "is_admin") && ("show_cbh"in i && i.show_cbh && (i.context_menu = twig.filter.merge("context_menu"in i ? i.context_menu : "", [{
                        svg_icon: "cbh",
                        text: twig.attr("lang"in i ? i.lang : "", "unsorted_cbh_title"),
                        class_name: "js-cbh-install"
                    }])),
                    "is_list"in i && i.is_list || (i.context_menu = twig.filter.merge("context_menu"in i ? i.context_menu : "", ["lead_tile"in i ? i.lead_tile : ""]))),
                    twig.attr("_account_features"in i ? i._account_features : "", "is_customization_for_global") && ((twig.attr(twig.attr("user_rights"in i ? i.user_rights : "", "leads"), "add") || twig.attr(twig.attr("user_rights"in i ? i.user_rights : "", "contacts"), "add") || twig.attr(twig.attr("user_rights"in i ? i.user_rights : "", "contacts"), "add_company")) && (i.context_menu = twig.filter.merge("context_menu"in i ? i.context_menu : "", ["upload_item"in i ? i.upload_item : ""])),
                    twig.attr(twig.attr("user_rights"in i ? i.user_rights : "", "leads"), "export") && (i.context_menu = twig.filter.merge("context_menu"in i ? i.context_menu : "", ["donload_item"in i ? i.donload_item : ""]))),
                    twig.attr(twig.attr("user_rights"in i ? i.user_rights : "", "leads"), "duplicate_search") && (i.context_menu = twig.filter.merge("context_menu"in i ? i.context_menu : "", [{
                        svg_icon: "merge",
                        text: twig.attr("lang"in i ? i.lang : "", "duplicate_search"),
                        class_name: "js-duplicate-search"
                    }])),
                    "is_list"in i && i.is_list || (i.context_menu = twig.filter.merge("context_menu"in i ? i.context_menu : "", ["multiactions"in i ? i.multiactions : ""]),
                    i.unread_item_control = {
                        type: "switcher",
                        switcher_wrapper_class: "switcher_unread controls-switcher-blue",
                        name: "unread_first"
                    },
                    twig.attr(twig.attr("sorting"in i ? i.sorting : "", "settings"), "unread_first") && (i.unread_item_control = twig.filter.merge("unread_item_control"in i ? i.unread_item_control : "", {
                        checked: "checked"
                    })),
                    i.context_menu = twig.filter.merge("context_menu"in i ? i.context_menu : "", [{
                        text: this.env_.filter("i18n", "Sort"),
                        class_name: "context-menu__item_header"
                    }]),
                    i._parent = i,
                    s = twig.attr("sorting"in i ? i.sorting : "", "variants"),
                    twig.forEach(s, (function(e, t) {
                        i._key = t,
                        i.item = e,
                        twig.attr("item"in i ? i.item : "", "id") == twig.attr(twig.attr("sorting"in i ? i.sorting : "", "settings"), "by") ? (i.class_name = "context-menu__item js-sort__item context-menu__item_active",
                        i.data_attr = "data-sort-type=" + twig.attr(twig.attr("sorting"in i ? i.sorting : "", "settings"), "type") + " data-sort-by=" + twig.attr("item"in i ? i.item : "", "id")) : (i.class_name = "context-menu__item js-sort__item",
                        i.data_attr = "data-sort-type=desc data-sort-by=" + twig.attr("item"in i ? i.item : "", "id")),
                        i.context_menu = twig.filter.merge("context_menu"in i ? i.context_menu : "", [{
                            text: twig.attr("item"in i ? i.item : "", "name"),
                            class_name: "class_name"in i ? i.class_name : "",
                            svg_icon_left: "sort-arrow",
                            icon_left_class: "svg-icon__context",
                            additional_data: "data_attr"in i ? i.data_attr : ""
                        }])
                    }
                    ), this),
                    twig.attr("user_rights"in i ? i.user_rights : "", "is_admin") && (i.context_menu = twig.filter.merge("context_menu"in i ? i.context_menu : "", [{
                        text: this.env_.filter("i18n", "Auto update"),
                        class_name: "context-menu__item context-menu__item-autoupdate context-menu__item_divider",
                        checkable: !0,
                        checkable_checked: "pipeline_auto_update"in i ? i.pipeline_auto_update : "",
                        svg_icon_left_absolute: "controls--select-checked"
                    }]))),
                    "context_menu"in i && i.context_menu && (twig.attr("_account_features"in i ? i._account_features : "", "signed_first_line_controls") ? new (e._get("interface/common/top_actions_more_newbie.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        context_menu: "context_menu"in i ? i.context_menu : "",
                        button_class_name: "button-input-more-newbie",
                        context_menu_class_name: "context-menu-pipeline context-menu-pipeline__newbie " + (twig.attr("user_rights"in i ? i.user_rights : "", "is_admin") ? "" : "context-menu__correct-position")
                    })) : new (e._get("interface/common/top_actions_more.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        context_menu: "context_menu"in i ? i.context_menu : "",
                        button_class_name: "button-input-more",
                        context_menu_class_name: "context-menu-pipeline " + (twig.attr("user_rights"in i ? i.user_rights : "", "is_admin") ? "" : "context-menu__correct-position")
                    }))),
                    twig.attr("user_rights"in i ? i.user_rights : "", "is_admin") && ("current_id"in i && i.current_id ? i.dp_link = "/settings/pipeline/leads/" + ("current_id"in i ? i.current_id : "") : i.dp_link = "/settings/pipeline/leads",
                    t.append('<a href="'),
                    t.append(twig.filter.escape(this.env_, "dp_link"in i ? i.dp_link : "", "light_escape", null, !0)),
                    t.append('" data-href="'),
                    t.append(twig.filter.escape(this.env_, "dp_link"in i ? i.dp_link : "", "light_escape", null, !0)),
                    t.append('" class="js-navigate-link list-top-nav__button-setup '),
                    "master" != ("user_rank"in i ? i.user_rank : "") ? t.append(twig.filter.escape(this.env_, "setup_button_class_name"in i ? i.setup_button_class_name : "", "light_escape", null, !0)) : t.append(""),
                    t.append('"><span class="button-input button-input_add">'),
                    twig.attr("_account_features"in i ? i._account_features : "", "is_customization_for_global") && t.append('<svg class="svg-icon svg-common--flash-pipeline-dims" style=\'margin-bottom: -4px;\'><use xlink:href="#common--flash-pipeline"></use></svg>'),
                    t.append('<span class="button-input-inner__text button-input-inner__text_short-settings">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("_account_features"in i ? i._account_features : "", "is_customization_for_global") ? twig.attr("lang"in i ? i.lang : "", "button_setup_glob") : twig.attr("lang"in i ? i.lang : "", "button_setup"), "light_escape", null, !0)),
                    t.append('</span><span class="button-input-inner__text">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("_account_features"in i ? i._account_features : "", "is_customization_for_global") ? twig.attr("lang"in i ? i.lang : "", "button_setup_pipeline_glob") : twig.attr("lang"in i ? i.lang : "", "button_setup_pipeline"), "light_escape", null, !0)),
                    t.append("</span></span></a>"))),
                    t.append('<a href="'),
                    twig.attr(twig.attr("user_rights"in i ? i.user_rights : "", "leads"), "add") && t.append("/leads/add/"),
                    "current_id"in i && i.current_id && t.append(twig.filter.escape(this.env_, "?pipeline_id=" + ("current_id"in i ? i.current_id : ""), "light_escape", null, !0)),
                    t.append('" data-href="/leads/add/" class="button-input button-input_add button-input_add-lead content-table__name-link'),
                    twig.attr(twig.attr("user_rights"in i ? i.user_rights : "", "leads"), "add") ? t.append(" button-input_blue js-navigate-link") : t.append(" js-disabled button-input-disabled"),
                    t.append('"><svg class="svg-icon svg-controls--button-add-dims"><use xlink:href="#controls--button-add"></use></svg><span class="button-input-inner__text button-input-inner__text_short '),
                    "newbie" == ("user_rank"in i ? i.user_rank : "") && t.append("button-input-inner__text_short__newbie"),
                    t.append('">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "leads_add_new_lead_short"), "light_escape", null, !0)),
                    t.append('</span><span class="button-input-inner__text">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "leads_add_new_lead"), "light_escape", null, !0)),
                    t.append("</span></a></div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_leads_common_top_actions"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/leads/common/top_actions", t)
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
                    t.append('<div class="list__top__preset">'),
                    "pipelines"in i && i.pipelines) {
                        i._parent = i;
                        var s = "pipelines"in i ? i.pipelines : ""
                          , a = {
                            index0: 0,
                            index: 1,
                            first: !0
                        };
                        if (twig.countable(s)) {
                            var l = twig.count(s);
                            a.revindex0 = l - 1,
                            a.revindex = l,
                            a.length = l,
                            a.last = 1 === l
                        }
                        twig.forEach(s, (function(n, s) {
                            i._key = s,
                            i.item = n,
                            twig.attr("item"in i ? i.item : "", "selected") && (i.pipeline_link = "/leads/pipeline/" + twig.attr("item"in i ? i.item : "", "id"),
                            i.list_link = "/leads/list/pipeline/" + twig.attr("item"in i ? i.item : "", "id"),
                            twig.attr("_account_features"in i ? i._account_features : "", "simplified_first_line") ? new (e._get("interface/common/top_nav_submenu_button_newbie.twig"))(this.env_).render_(t, twig.extend({}, i, {
                                item_title: twig.attr("item"in i ? i.item : "", "title"),
                                data_entity: "leads"
                            })) : new (e._get("interface/common/top_nav_submenu_button.twig"))(this.env_).render_(t, twig.extend({}, i, {
                                item_title: twig.attr("item"in i ? i.item : "", "title"),
                                data_entity: "leads"
                            })),
                            twig.attr("_account_features"in i ? i._account_features : "", "signed_first_line_controls") ? new (e._get("interface/common/top_nav_view_newbie.twig"))(this.env_).render_(t, twig.extend({}, i, {
                                selected: "selected"in i ? i.selected : "",
                                user_rank: "user_rank"in i ? i.user_rank : "",
                                data_entity: "leads",
                                pipeline_link: "pipeline_link"in i ? i.pipeline_link : "",
                                list_link: "list_link"in i ? i.list_link : ""
                            })) : new (e._get("interface/common/top_nav_view.twig"))(this.env_).render_(t, twig.extend({}, i, {
                                selected: "selected"in i ? i.selected : "",
                                pipeline_link: "pipeline_link"in i ? i.pipeline_link : "",
                                list_link: "list_link"in i ? i.list_link : ""
                            }))),
                            ++a.index0,
                            ++a.index,
                            a.first = !1,
                            a.length && (--a.revindex0,
                            --a.revindex,
                            a.last = 0 === a.revindex0)
                        }
                        ), this),
                        "/leads/list/" != twig.attr("filter"in i ? i.filter : "", "url") && "/leads/trash/" != twig.attr("filter"in i ? i.filter : "", "url") || (i.plug_title = twig.attr("lang"in i ? i.lang : "", "list_all_leads"),
                        new (e._get("interface/common/top_nav_submenu_button.twig"))(this.env_).render_(t, twig.extend({}, i, {
                            item_title: "plug_title"in i ? i.plug_title : "",
                            data_entity: "leads"
                        })),
                        new (e._get("interface/controls/button/list_action.twig"))(this.env_).render_(t, twig.extend({}, i, {
                            link: "/leads/list/",
                            type: "list",
                            active: !0,
                            js_caption: !0,
                            title: twig.attr("lang"in i ? i.lang : "", "menu_list"),
                            svg_class_name: "common--list"
                        })))
                    } else
                        i.pipeline_link = "/leads/pipeline/",
                        i.list_link = "/leads/list/pipeline/",
                        twig.attr("_account_features"in i ? i._account_features : "", "simplified_first_line") ? new (e._get("interface/common/top_nav_submenu_button_newbie.twig"))(this.env_).render_(t, twig.extend({}, i, {
                            item_title: twig.attr("lang"in i ? i.lang : "", "menu_title"),
                            data_entity: "leads"
                        })) : new (e._get("interface/common/top_nav_submenu_button.twig"))(this.env_).render_(t, twig.extend({}, i, {
                            item_title: twig.attr("lang"in i ? i.lang : "", "menu_title"),
                            data_entity: "leads"
                        })),
                        twig.attr("_account_features"in i ? i._account_features : "", "signed_first_line_controls") ? new (e._get("interface/common/top_nav_view_newbie.twig"))(this.env_).render_(t, twig.extend({}, i, {
                            selected: "selected"in i ? i.selected : "",
                            user_rank: "user_rank"in i ? i.user_rank : "",
                            data_entity: "leads",
                            pipeline_link: "pipeline_link"in i ? i.pipeline_link : "",
                            list_link: "list_link"in i ? i.list_link : ""
                        })) : new (e._get("interface/common/top_nav_view.twig"))(this.env_).render_(t, twig.extend({}, i, {
                            selected: "selected"in i ? i.selected : "",
                            pipeline_link: "pipeline_link"in i ? i.pipeline_link : "",
                            list_link: "list_link"in i ? i.list_link : ""
                        }));
                    t.append("</div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_leads_common_top_nav"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/leads/common/top_nav", t)
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
                    t.append('<div class="wrap-loss-reason-select '),
                    t.append(twig.filter.escape(this.env_, "class_name"in i ? i.class_name : "", "light_escape", null, !0)),
                    t.append('"><div class="loss-reason__item-block-0 loss-reason__item-block">'),
                    new (e._get("interface/controls/radio.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        class_name: "loss-reason__item-label",
                        name: "name"in i ? i.name : "",
                        prefix: "loss_reason_0_" + twig.functions.random(this.env_, 1e3),
                        selected: 0 == ("selected"in i ? i.selected : ""),
                        label: this.env_.filter("i18n", "No reason"),
                        value: 0
                    })),
                    t.append("</div>"),
                    i._parent = i;
                    var s = "items"in i ? i.items : ""
                      , a = {
                        index0: 0,
                        index: 1,
                        first: !0
                    };
                    if (twig.countable(s)) {
                        var l = twig.count(s);
                        a.revindex0 = l - 1,
                        a.revindex = l,
                        a.length = l,
                        a.last = 1 === l
                    }
                    twig.forEach(s, (function(n, s) {
                        i._key = s,
                        i.item = n,
                        t.append('<div class="loss-reason__item-block-'),
                        t.append(twig.filter.escape(this.env_, twig.attr("item"in i ? i.item : "", "id"), "light_escape", null, !0)),
                        t.append(' loss-reason__item-block">'),
                        new (e._get("interface/controls/radio.twig"))(this.env_).render_(t, twig.extend({}, i, {
                            class_name: "loss-reason__item-label",
                            name: "name"in i ? i.name : "",
                            prefix: "loss_reason_" + twig.attr("item"in i ? i.item : "", "id") + "_" + twig.functions.random(this.env_, 1e3),
                            selected: ("selected"in i ? i.selected : "") == twig.attr("item"in i ? i.item : "", "id"),
                            label: twig.attr("item"in i ? i.item : "", "name"),
                            value: twig.attr("item"in i ? i.item : "", "id")
                        })),
                        t.append("</div>"),
                        ++a.index0,
                        ++a.index,
                        a.first = !1,
                        a.length && (--a.revindex0,
                        --a.revindex,
                        a.last = 0 === a.revindex0)
                    }
                    ), this),
                    t.append("</div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_leads_loss_reason_items"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/leads/loss_reason/items", t)
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
                    t.append('<div class="modal-loss-reason__header"><div class="modal-loss-reason__header-title"><span>'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Reason for closing the lead"), "light_escape", null, !0)),
                    t.append('</span></div><div class="modal-body__actions_loss-reason">'),
                    new (e._get("interface/controls/cancel_button.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        text: twig.attr("lang"in i ? i.lang : "", "button_cancel")
                    })),
                    new (e._get("interface/controls/button.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        text: twig.attr("lang"in i ? i.lang : "", "button_save"),
                        class_name: "js-modal-accept js-button-with-loader modal-body__actions__save button-input_blue"
                    })),
                    t.append("</div></div>"),
                    new (e._get("interface/leads/loss_reason/items.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        name: "lead[LOSS_REASON_ID]",
                        class_name: "modal-loss-reason__items",
                        default_value: twig.attr("default"in i ? i.default : "", "name"),
                        default_dataValue: twig.attr("default"in i ? i.default : "", "id")
                    }))
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_leads_loss_reason_modal"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/leads/loss_reason/modal", t)
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
                    e.append('<div class="js-scroll-container list__table '),
                    "has_items"in t && t.has_items || e.append("list__table-no-items"),
                    e.append(' js-list-plug" '),
                    "width"in t && t.width && (e.append('style="min-width: '),
                    e.append(twig.filter.escape(this.env_, "width"in t ? t.width : "", "light_escape", null, !0)),
                    e.append('px"')),
                    e.append(">"),
                    t._parent = t;
                    var n = twig.range(1, 9)
                      , s = {
                        index0: 0,
                        index: 1,
                        first: !0
                    };
                    if (twig.countable(n)) {
                        var a = twig.count(n);
                        s.revindex0 = a - 1,
                        s.revindex = a,
                        s.length = a,
                        s.last = 1 === a
                    }
                    twig.forEach(n, (function(i, n) {
                        t._key = n,
                        t.i = i,
                        t.line_number = twig.attr(s, "index"),
                        e.append('<div class="list-row js-list-row">');
                        var a = "fields"in t ? t.fields : ""
                          , l = {
                            parent: s,
                            index0: 0,
                            index: 1,
                            first: !0
                        };
                        twig.forEach(a, (function(i, n) {
                            t._key = n,
                            t.field = i,
                            twig.attr("field"in t ? t.field : "", "shown") && (e.append('<div class="list-row__cell js-list-row__cell list-row__cell-template-'),
                            e.append(twig.filter.escape(this.env_, twig.attr("field"in t ? t.field : "", "template"), "light_escape", null, !0)),
                            e.append(" list-row__cell-"),
                            e.append(twig.filter.escape(this.env_, twig.attr("field"in t ? t.field : "", "code"), "light_escape", null, !0)),
                            e.append('"><div class="content-table__item__inner">'),
                            ("line_number"in t ? t.line_number : "") < 5 && (e.append("<div class='plug__item__line "),
                            1 == twig.attr(l, "index") ? e.append("blue_line") : e.append("grey_line"),
                            e.append("' style=\"width: "),
                            e.append(twig.filter.escape(this.env_, twig.functions.random(this.env_, twig.range(40, 90)), "light_escape", null, !0)),
                            e.append('%;"></div>')),
                            e.append("</div></div>"),
                            ++l.index0,
                            ++l.index,
                            l.first = !1)
                        }
                        ), this),
                        e.append("</div>"),
                        ++s.index0,
                        ++s.index,
                        s.first = !1,
                        s.length && (--s.revindex0,
                        --s.revindex,
                        s.last = 0 === s.revindex0)
                    }
                    ), this),
                    e.append("</div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_leads_plug_fake_list"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/leads/plug/fake_list", t)
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
                    return "interface_leads_plug_well_done"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/leads/plug/well_done", t)
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
                    return e._get("interface/plugs/list/table.twig")
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    this.getParent(t).render_(e, t, twig.extend({}, this.getBlocks(), i))
                }
                ,
                t.prototype.block_body = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    t._parent = t;
                    var n = twig.range(0, 4);
                    twig.forEach(n, (function(i, n) {
                        t._key = n,
                        t.i = i,
                        e.append('<div data-id="1" class="list-row js-list-row js-pager-list-item__'),
                        e.append(twig.filter.escape(this.env_, "i"in t ? t.i : "", "light_escape", null, !0)),
                        e.append(" js-page-delimiter js-item-id-"),
                        e.append(twig.filter.escape(this.env_, "i"in t ? t.i : "", "light_escape", null, !0)),
                        e.append('" data-page="1" id="list_item_'),
                        e.append(twig.filter.escape(this.env_, "i"in t ? t.i : "", "light_escape", null, !0)),
                        e.append('"><div class="list-row__cell js-list-row__cell list-row__cell-template-id list-row__cell-id"><div class="content-table__item__inner" style="overflow:visible"><label class="control-checkbox "><div class="control-checkbox__body"><input type="checkbox" class="" name="" id="lead_'),
                        e.append(twig.filter.escape(this.env_, "i"in t ? t.i : "", "light_escape", null, !0)),
                        e.append('" value="'),
                        e.append(twig.filter.escape(this.env_, "i"in t ? t.i : "", "light_escape", null, !0)),
                        e.append('" data-value="'),
                        e.append(twig.filter.escape(this.env_, "i"in t ? t.i : "", "light_escape", null, !0)),
                        e.append('" disabled><span class="control-checkbox__helper"></span></div></label></div></div>');
                        var s = "fields"in t ? t.fields : "";
                        twig.forEach(s, (function(i, n) {
                            t._key = n,
                            t.field = i,
                            twig.attr("field"in t ? t.field : "", "shown") && (e.append('<div class="list-row__cell js-list-row__cell list-row__cell-template-name list-row__cell-name"><div class="content-table__item__inner content-table__item__inner-template-name "><div class="list-row__template-name__name"><div class="text_pref dashboard_contacts_plug__item__line" style="width: '),
                            e.append(twig.filter.escape(this.env_, 120 - 20 * ("i"in t ? t.i : ""), "light_escape", null, !0)),
                            e.append('%"></div></div></div></div>'))
                        }
                        ), this),
                        e.append("</div>")
                    }
                    ), this)
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_leads_skeleton_inner"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/leads/skeleton/inner", t)
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
                        list_body: twig.bind(this.block_list_body, this)
                    })
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(t) {
                    return e._get("interface/list/list.twig")
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    this.getParent(t).render_(e, t, twig.extend({}, this.getBlocks(), i))
                }
                ,
                t.prototype.block_list_top_right = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    e.append('<div class="list__body-right__top"><div class="dashboard_contacts_plug__item__line" style="height: 36px; width: 100%; border-radius: 3px; margin: 0 30px;"></div></div>')
                }
                ,
                t.prototype.block_static = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    e.append(twig.filter.escape(this.env_, this.env_.invoke("inject_static", ["dashboard.css", "leads_list.php"], this), "light_escape", null, !0))
                }
                ,
                t.prototype.block_list_body = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    new (e._get("interface/leads/skeleton/inner.twig"))(this.env_).render_(t, i)
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_leads_skeleton_list"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/leads/skeleton/list", t)
            }()
        }
        .apply(t, n)) || (e.exports = s)
    }
    ,
    522814: (e, t, i) => {
        var n, s;
        n = [i(460159), i(94849), i(385078), i(295165), i(898296), i(602601), i(97834)],
        void 0 === (s = function(e) {
            (function() {
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
                    t.append('<div class="safety_settings__white_ip__plug__billing_button"><a href="/settings/pay/" class="js-navigate-link">'),
                    new (e._get("interface/controls/button.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        class_name: "button-input_blue",
                        text: twig.attr("_account_features"in i ? i._account_features : "", "is_customization_for_global") ? this.env_.filter("i18n", "Upgrade to advanced plan") : this.env_.filter("i18n", "Upgrade to enterprise plan")
                    })),
                    t.append('</a></div><div class="communications__nps-plug communications__typical-questions-plug"><div class="safety_settings__section_new_text"><p>'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "You can customize the message and script when closing a conversation in the NPS bot"), "light_escape", null, !0)),
                    t.append('</p></div><div class="communications__nps">'),
                    new (e._get("interface/controls/button.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        class_name: "outlined",
                        blue: !0,
                        disabled: !twig.attr("nps"in i ? i.nps : "", "available"),
                        text: this.env_.filter("i18n", "Edit NPS bot")
                    })),
                    t.append('<a class="notice__text js-drop-bot hidden communications__nps_reset" href="#">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Restore default settings"), "light_escape", null, !0)),
                    t.append('</a><input type="hidden" name="bot_id" value="'),
                    t.append(twig.filter.escape(this.env_, twig.attr("nps"in i ? i.nps : "", "bot_id"), "light_escape", null, !0)),
                    t.append('" /></div></div><div class="safety_settings_plug__limit_tape-wrapper"><div class="safety_settings_plug__limit_tape">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("_account_features"in i ? i._account_features : "", "is_customization_for_global") ? this.env_.filter("i18n", "advanced") : this.env_.filter("i18n", "enterprise"), "light_escape", null, !0)),
                    t.append("</div></div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_plugs_communications_nps"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/plugs/communications/nps", t)
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
                t.prototype.render_ = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    t.append('<div class="safety_settings__section_new monitoring-settings__section js-helpbot-block '),
                    twig.attr("helpbot"in i ? i.helpbot : "", "enabled") || t.append("communications__disabled-block"),
                    t.append(' safety_settings__section_new__plug"><div class="safety_settings__section_head_new"><div class="safety_settings__section_head_new_title">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "AI power-up"), "light_escape", null, !0)),
                    t.append('</div></div><div class="safety_settings__section_new_text"><p>'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Detect a client’s intentions based on the keywords they use, and automatically send a chat template or run a salesbot"), "light_escape", null, !0)),
                    t.append(". <br>"),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "The keyword dataset is automatically updated every hour, or you can manually update it any time"), "light_escape", null, !0)),
                    t.append('.</p></div><div class="safety_settings__white_ip__plug__billing_button"><a href="/settings/pay/" class="js-navigate-link">'),
                    new (e._get("interface/controls/button.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        class_name: "button-input_blue",
                        text: this.env_.filter("i18n", "Upgrade to enterprise plan")
                    })),
                    t.append('</a></div><div class="communications__typical-questions communications__typical-questions-plug"><div class="communications__helpbot list-helpbot list__body__holder communications__helpbot-plug" id="helpbot_list_holder"><div class="communications__helpbot-divider"></div><div class="list__table__holder js-hs-scroller custom-scroll hs-wrapper_no-hand"><div class="js-scroll-container list__table " id="list_table"><div class="list_head list-row list-row-head js-list-row js-list-row-head " id="list_head"><div class="list-row__cell js-hs-prevent list-row__cell-head cell-head list-row__cell-template-id list-row__cell-id"><div class="cell-head__inner"><label class="control-checkbox"><div class="control-checkbox__body"><input type="checkbox" class="" name="" id="list_all_checker" value="" data-value=""><span class="control-checkbox__helper "></span></div></label></div></div><div class="list_head__intent list-row__cell js-hs-prevent js-resizable-cell list-row__cell-head cell-head js-cell-head js-cell-head_sortable list-row__cell-template-intent list-row__cell-intent ui-resizable"data-field-template="intent" data-field-code="intent"><div class="cell-head__inner"><div class="cell-head__inner-content"><span class="cell-head__dots icon icon-v-dots"></span><span class="cell-head__title">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Intention"), "light_escape", null, !0)),
                    t.append('</span><span class="cell-head__icon"><span class="cell-head__icon-sortable cell-head__icon-sortable_desc"></span><span class="cell-head__icon-close js-cell-head__icon-close"><svg class="svg-icon svg-common--cross-close-dims"><use xlink:href="#common--cross-close"></use></svg></span></span></div><div class="cell-head__resize-ghost"></div></div><div class="ui-resizable-handle ui-resizable-e"></div></div><div class="list_head__dataset list-row__cell js-hs-prevent js-resizable-cell list-row__cell-head cell-head js-cell-head  list-row__cell-template-text list-row__cell-dataset  ui-resizable" data-field-template="text" data-field-code="dataset"><div class="cell-head__inner"><div class="cell-head__inner-content"><span class="cell-head__dots icon icon-v-dots"></span><span class="cell-head__title">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Keyword dataset"), "light_escape", null, !0)),
                    t.append('</span></div><div class="cell-head__resize-ghost"></div></div><div class="ui-resizable-handle ui-resizable-e"></div></div><div class="list_head__action list-row__cell js-hs-prevent js-resizable-cell list-row__cell-head cell-head js-cell-head list-row__cell-template-text list-row__cell-action  ui-resizable" data-field-template="text" data-field-code="action"><div class="cell-head__inner"><div class="cell-head__inner-content"><span class="cell-head__dots icon icon-v-dots"></span><span class="cell-head__title">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Action"), "light_escape", null, !0)),
                    t.append('</span></div><div class="cell-head__resize-ghost"></div></div><div class="ui-resizable-handle ui-resizable-e"></div></div><div class="list_head__threshold list-row__cell js-hs-prevent js-resizable-cell list-row__cell-head cell-head js-cell-head  list-row__cell-template-text list-row__cell-helpbot_probability  ui-resizable" data-field-template="text" data-field-code="helpbot_probability"><div class="cell-head__inner"><div class="cell-head__inner-content"><span class="cell-head__dots icon icon-v-dots"></span><span class="cell-head__title">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Threshold"), "light_escape", null, !0)),
                    t.append('</span></div><div class="cell-head__resize-ghost"></div></div><div class="ui-resizable-handle ui-resizable-e"></div></div><div class="list_head__launches list-row__cell js-hs-prevent js-resizable-cell list-row__cell-head cell-head js-cell-head js-cell-head_sortable list-row__cell-template-text list-row__cell-helpbot_stats  ui-resizable" data-field-template="text" data-field-code="helpbot_stats"><div class="cell-head__inner"><div class="cell-head__inner-content"><span class="cell-head__dots icon icon-v-dots"></span><span class="cell-head__title">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Times launched"), "light_escape", null, !0)),
                    t.append('</span><span class="cell-head__icon"><span class="cell-head__icon-sortable cell-head__icon-sortable_desc"></span><span class="cell-head__icon-close js-cell-head__icon-close"><svg class="svg-icon svg-common--cross-close-dims"><use xlink:href="#common--cross-close"></use></svg></span></span></div><div class="cell-head__resize-ghost"></div></div><div class="ui-resizable-handle ui-resizable-e"></div></div></div><div data-id="0" class="list-row js-list-row js-pager-list-item__1  js-item-id-0 list-row_adding" id="list_item_0"><div class="list-row__cell js-list-row__cell list-row__cell-template-id list-row__cell-id"><div class="list-row_adding_checkbox content-table__item__inner"><label class="control-checkbox"><div class="control-checkbox__body"><input type="checkbox" class="" name="" id="lead_0" disabled="" value="0" data-value=""><span class="control-checkbox__helper "></span></div></label></div></div><div class="list-row__cell js-list-row__cell list-row__cell-template-intent list-row__cell-intent"data-field-code="intent" data-field-id="intent"><div class="content-table__item__inner content-table__item__inner-template-namecontent-table__item__inner-template-name_intent">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Add a new intention"), "light_escape", null, !0)),
                    t.append('</div></div><div class="list-row__cell js-list-row__cell list-row__cell-template-text list-row__cell-dataset" data-field-code="dataset" data-field-id="dataset"><div class="content-table__item__inner" title=""><span class="block-selectable">&nbsp;</span></div></div><div class="list-row__cell js-list-row__cell list-row__cell-template-text list-row__cell-action" data-field-code="action" data-field-id="action"><div class="content-table__item__inner" title=""><span class="block-selectable">&nbsp;</span></div></div><div class="list-row__cell js-list-row__cell list-row__cell-template-text list-row__cell-helpbot_probability" data-field-code="helpbot_probability" data-field-id="helpbot_probability"><div class="content-table__item__inner" title=""><span class="block-selectable">&nbsp;</span></div></div><div class="list-row__cell js-list-row__cell list-row__cell-template-text list-row__cell-helpbot_stats" data-field-code="helpbot_stats" data-field-id="helpbot_stats"><div class="content-table__item__inner" title=""><span class="block-selectable">&nbsp;</span></div></div></div><div class="list-row js-list-row" id="list_item_50" data-id="50"><div class="list-row__cell js-list-row__cell list-row__cell-template-id list-row__cell-id"><div class="list-row__checkbox content-table__item__inner"><label class="control-checkbox"><div class="control-checkbox__body"><input type="checkbox" class="" name="" id="lead_50" value="50" data-value="50"><span class="control-checkbox__helper "></span></div></label></div></div><div class="list-row__cell js-list-row__cell list-row__cell-template-intent list-row__cell-intent" data-field-code="intent" data-field-id="intent"><div class="content-table__item__inner content-table__item__inner-template-name content-table__item__inner-template-name_intent"><a href="#" class="js-navigate-link list-row__template-name__table-wrapper__name-link" title="Intent 1">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Intention"), "light_escape", null, !0)),
                    t.append(' 1</a></div></div><div class="list-row__cell js-list-row__cell list-row__cell-template-dataset list-row__cell-dataset" data-field-code="dataset" data-field-id="dataset"><div class="content-table__item__inner"><svg class="svg-icon svg-notes--feed-attach-dims"><use xlink:href="#notes--feed-attach"></use></svg><a href="#" class="js-navigate-link">intent_1.csv</a></div></div><div class="list-row__cell js-list-row__cell list-row__cell-template-action list-row__cell-action" data-field-code="action" data-field-id="action"><div class="content-table__item__inner"><span class="block-selectable list-row__cell-action_run_bot">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Run Salesbot"), "light_escape", null, !0)),
                    t.append(':&nbsp;</span><span class="block-selectable">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Intention"), "light_escape", null, !0)),
                    t.append(' 1</span></div></div><div class="list-row__cell js-list-row__cell list-row__cell-template-percent list-row__cell-helpbot_probability" data-field-code="helpbot_probability" data-field-id="helpbot_probability"><div class="content-table__item__inner" title="0%"><span class="block-selectable">0%</span></div></div><div class="list-row__cell js-list-row__cell list-row__cell-template-text list-row__cell-helpbot_stats" data-field-code="helpbot_stats" data-field-id="helpbot_stats"><div class="content-table__item__inner" title=""><span class="block-selectable">0</span></div></div></div><div class="list-row js-list-row" id="list_item_49" data-id="49"><div class="list-row__cell js-list-row__cell list-row__cell-template-id list-row__cell-id"><div class="list-row__checkbox content-table__item__inner"><label class="control-checkbox "><div class="control-checkbox__body"><input type="checkbox" class="" name="" id="lead_49" value="49" data-value="49"><span class="control-checkbox__helper "></span></div></label></div></div><div class="list-row__cell js-list-row__cell list-row__cell-template-intent list-row__cell-intent" data-field-code="intent" data-field-id="intent"><div class="content-table__item__inner content-table__item__inner-template-name content-table__item__inner-template-name_intent"><a href="#" class="js-navigate-link list-row__template-name__table-wrapper__name-link" title="Intent 2">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Intention"), "light_escape", null, !0)),
                    t.append(' 2</a></div></div><div class="list-row__cell js-list-row__cell list-row__cell-template-dataset list-row__cell-dataset" data-field-code="dataset" data-field-id="dataset"><div class="content-table__item__inner"><svg class="svg-icon svg-notes--feed-attach-dims"><use xlink:href="#notes--feed-attach"></use></svg><a href="#" class="js-navigate-link">intent_2.csv</a></div></div><div class="list-row__cell js-list-row__cell list-row__cell-template-action list-row__cell-action" data-field-code="action" data-field-id="action"><div class="content-table__item__inner"><span class="block-selectable list-row__cell-action_run_bot">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Run Salesbot"), "light_escape", null, !0)),
                    t.append(':&nbsp;</span><span class="block-selectable">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Intention"), "light_escape", null, !0)),
                    t.append(' 2</span></div></div><div class="list-row__cell js-list-row__cell list-row__cell-template-percent list-row__cell-helpbot_probability" data-field-code="helpbot_probability" data-field-id="helpbot_probability"><div class="content-table__item__inner" title="0%"><span class="block-selectable">0%</span></div></div><div class="list-row__cell js-list-row__cell list-row__cell-template-text list-row__cell-helpbot_stats" data-field-code="helpbot_stats" data-field-id="helpbot_stats"><div class="content-table__item__inner" title="0"><span class="block-selectable">0</span></div></div></div><div class="list-row js-list-row" id="list_item_48" data-id="48"><div class="list-row__cell js-list-row__cell list-row__cell-template-id list-row__cell-id"><div class="list-row__checkbox content-table__item__inner"><label class="control-checkbox"><div class="control-checkbox__body"><input type="checkbox" class="" name="" id="lead_48" value="48" data-value="48"><span class="control-checkbox__helper "></span></div></label></div></div><div class="list-row__cell js-list-row__cell list-row__cell-template-intent list-row__cell-intent" data-field-code="intent" data-field-id="intent"><div class="content-table__item__inner content-table__item__inner-template-name content-table__item__inner-template-name_intent"><a href="#" class="js-navigate-link list-row__template-name__table-wrapper__name-link" title="Intent 3">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Intention"), "light_escape", null, !0)),
                    t.append(' 3</a></div></div><div class="list-row__cell js-list-row__cell list-row__cell-template-dataset list-row__cell-dataset" data-field-code="dataset" data-field-id="dataset"><div class="content-table__item__inner"><svg class="svg-icon svg-notes--feed-attach-dims"><use xlink:href="#notes--feed-attach"></use></svg><a href="#" class="js-navigate-link">intent_3.csv</a></div></div><div class="list-row__cell js-list-row__cell list-row__cell-template-action list-row__cell-action"data-field-code="action" data-field-id="action"><div class="content-table__item__inner"><span class="block-selectable list-row__cell-action_reply">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Chat template"), "light_escape", null, !0)),
                    t.append(':&nbsp;</span><span class="block-selectable">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Intention"), "light_escape", null, !0)),
                    t.append(' 3</span></div></div><div class="list-row__cell js-list-row__cell list-row__cell-template-percent list-row__cell-helpbot_probability" data-field-code="helpbot_probability" data-field-id="helpbot_probability"><div class="content-table__item__inner" title="0%"><span class="block-selectable">0%</span></div></div><div class="list-row__cell js-list-row__cell list-row__cell-template-text list-row__cell-helpbot_stats" data-field-code="helpbot_stats" data-field-id="helpbot_stats"><div class="content-table__item__inner" title="0"><span class="block-selectable">0</span></div></div></div><div class="list-row js-list-row is-inactive" id="list_item_47" data-id="47"><div class="list-row__cell js-list-row__cell list-row__cell-template-id list-row__cell-id"><div class="list-row__checkbox content-table__item__inner"><label class="control-checkbox"><div class="control-checkbox__body"><input type="checkbox" class="" name="" id="lead_47" value="47" data-value="47"><span class="control-checkbox__helper "></span></div></label></div></div><div class="list-row__cell js-list-row__cell list-row__cell-template-intent list-row__cell-intent"data-field-code="intent" data-field-id="intent"><div class="content-table__item__inner content-table__item__inner-template-name content-table__item__inner-template-name_intent"><a href="#" class="js-navigate-link list-row__template-name__table-wrapper__name-link"title="Phrases to ignore">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Phrases to ignore"), "light_escape", null, !0)),
                    t.append('</a></div></div><div class="list-row__cell js-list-row__cell list-row__cell-template-dataset list-row__cell-dataset"data-field-code="dataset" data-field-id="dataset"><div class="content-table__item__inner"><svg class="svg-icon svg-notes--feed-attach-dims"><use xlink:href="#notes--feed-attach"></use></svg><a href="#" class="js-navigate-link communications__typical-questions-plug-tranparent">Phrases_to_ignore.csv</a></div></div><div class="list-row__cell js-list-row__cell list-row__cell-template-action list-row__cell-action  "data-field-code="action" data-field-id="action"><div class="content-table__item__inner"></div></div><div class="list-row__cell js-list-row__cell list-row__cell-template-percent list-row__cell-helpbot_probability  "data-field-code="helpbot_probability" data-field-id="helpbot_probability"><div class="content-table__item__inner" title="100%"><span class="block-selectable">100%</span></div></div><div class="list-row__cell js-list-row__cell list-row__cell-template-text list-row__cell-helpbot_stats  "data-field-code="helpbot_stats" data-field-id="helpbot_stats"><div class="content-table__item__inner" title=""><span class="block-selectable">&nbsp;</span></div></div></div></div></div><div class="hs__pane hs__pane_hidden"><div class="hs__bar ui-draggable ui-draggable-handle"></div></div></div></div><div class="safety_settings_plug__limit_tape-wrapper"><div class="safety_settings_plug__limit_tape">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "enterprise"), "light_escape", null, !0)),
                    t.append("</div></div></div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_plugs_communications_questions"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/plugs/communications/questions", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e),
                    this.setBlocks({
                        list_body: twig.bind(this.block_list_body, this),
                        list_footer: twig.bind(this.block_list_footer, this)
                    })
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(t) {
                    return e._get("interface/contacts/list.twig")
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    t.is_plug = !0,
                    this.getParent(t).render_(e, t, twig.extend({}, this.getBlocks(), i))
                }
                ,
                t.prototype.block_list_body = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    new (e._get("interface/plugs/list/inner.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        fields: "fields"in i ? i.fields : "",
                        items: [],
                        no_list_settings: !0
                    }))
                }
                ,
                t.prototype.block_list_footer = function(e, t, i) {
                    i = void 0 === i ? {} : i
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_plugs_contacts_list"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/plugs/contacts/list", t)
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
                    t.append('<p class="broadcasting-wizard__description">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Choose salesbot"), "light_escape", null, !0)),
                    t.append("</p>"),
                    new (e._get("interface/common/tooltip.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        class_name: "broadcasting-wizard__tooltip",
                        text: this.env_.filter("i18n", "Broadcasting is only available on Advanced and Enterprise plans."),
                        button: this.env_.filter("i18n", "Upgrade to advanced plan"),
                        ribbon: this.env_.filter("i18n", "advanced")
                    })),
                    t.append('<div class="broadcasting-wizard__body-wrapper"><div class="broadcasting-wizard__body"><div class="broadcasting-wizard__body-salesbot digital-pipeline__edit-bubble_chat-message"><div class="digital-pipeline__salesbots form-group"><div class="digital-pipeline__salesbots-title form-group__title">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Salesbot"), "light_escape", null, !0)),
                    t.append('<a href="#edit-salesbot" class="digital-pipeline__salesbots-manage-link">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Manage bot"), "light_escape", null, !0)),
                    t.append('</a></div><div class="digital-pipeline__salesbots-actions">'),
                    new (e._get("interface/controls/select.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        items: [{
                            id: 0,
                            option: this.env_.filter("i18n", "No bot selected")
                        }],
                        disabled: !0,
                        class_name: "digital-pipeline__salesbots-list-disabled"
                    })),
                    t.append('<span class="digital-pipeline__salesbots-or">'),
                    t.append(twig.filter.escape(this.env_, twig.filter.lower(this.env_, this.env_.filter("i18n", "Or")), "light_escape", null, !0)),
                    t.append('</span><button type="button" class="digital-pipeline__salesbots-create form-group__control digital-pipeline__salesbots-create--disabled" disabled><span class="digital-pipeline__salesbots-create-inner"><span class="modal-dp-item__button-add-plus"></span><span class="digital-pipeline__salesbots-create-inner-text">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Create a new bot"), "light_escape", null, !0)),
                    t.append('</span></span></button></div><div class="digital-pipeline__edit-description form-group__description">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Create a new bot or select from an existing one"), "light_escape", null, !0)),
                    t.append('</div></div></div></div></div><div class="broadcasting-wizard__actions">'),
                    new (e._get("interface/controls/cancel_button.twig"))(this.env_).render_(t, {
                        class_name: "js-broadcasting-wizard-prev",
                        text: this.env_.filter("i18n", "Cancel")
                    }),
                    new (e._get("interface/controls/button.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        class_name: "js-broadcasting-wizard-next",
                        text: this.env_.filter("i18n", "Next"),
                        disabled: !0
                    })),
                    t.append("</div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_plugs_leads_broadcasting_wizard_plug"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/plugs/leads/broadcasting_wizard_plug", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e)
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(t) {
                    return e._get("interface/plugs/list/list.twig")
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    this.getParent(t).render_(e, t, twig.extend({}, this.getBlocks(), i))
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_plugs_leads_list"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/plugs/leads/list", t)
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
                    t.append('<div class="list-row__cell list-row__cell-plug js-list-row__cell list-row__cell-template-'),
                    t.append(twig.filter.escape(this.env_, twig.attr("field"in i ? i.field : "", "template"), "light_escape", null, !0)),
                    t.append(" list-row__cell-"),
                    t.append(twig.filter.escape(this.env_, twig.attr("field"in i ? i.field : "", "code"), "light_escape", null, !0)),
                    t.append('" '),
                    twig.attr("field"in i ? i.field : "", "hide") && t.append('style=" display: none "'),
                    t.append(">"),
                    new (e._get("interface/list/cells/plug.twig"))(this.env_).render_(t, {
                        line_class_name: "line_class_name"in i ? i.line_class_name : "",
                        is_blue: "is_blues"in i ? i.is_blues : ""
                    }),
                    t.append("</div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_plugs_list_cell"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/plugs/list/cell", t)
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
                    "not_show_chbx"in i && i.not_show_chbx || new (e._get("interface/list/cells/id.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        id: twig.attr("item"in i ? i.item : "", "id")
                    })),
                    i._parent = i;
                    var s = "fields"in i ? i.fields : ""
                      , a = {
                        index0: 0,
                        index: 1,
                        first: !0
                    };
                    twig.forEach(s, (function(n, s) {
                        i._key = s,
                        i.field = n,
                        twig.attr("field"in i ? i.field : "", "shown") && (new (e._get("interface/plugs/list/cell.twig"))(this.env_).render_(t, twig.extend({}, i, {
                            item: "item"in i ? i.item : "",
                            field: "field"in i ? i.field : "",
                            is_blue: 2 == twig.attr(a, "index")
                        })),
                        ++a.index0,
                        ++a.index,
                        a.first = !1)
                    }
                    ), this)
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_plugs_list_cells"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/plugs/list/cells", t)
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
                    e.append('<div class="js-list-columns-group list__col-group" id="list_col_group">'),
                    "not_show_chbx"in t && t.not_show_chbx || (e.append('<div class="js-list-column-code-id list-column-code-id js-list-column list__col-group__column" data-field-code="id" '),
                    "has_markers"in t && t.has_markers && e.append('style="width: 25px"'),
                    e.append("></div>")),
                    t._parent = t;
                    var n = "fields"in t ? t.fields : "";
                    twig.forEach(n, (function(i, n) {
                        t._key = n,
                        t.field = i,
                        twig.attr("field"in t ? t.field : "", "shown") && (t.width = twig.attr("field"in t ? t.field : "", "width"),
                        e.append('<div class="js-list-column-code-'),
                        e.append(twig.filter.escape(this.env_, twig.attr("field"in t ? t.field : "", "code"), "light_escape", null, !0)),
                        e.append(' js-list-column list__col-group__column" style="'),
                        "width"in t && t.width && (e.append("width:"),
                        e.append(twig.filter.escape(this.env_, "width"in t ? t.width : "", "light_escape", null, !0)),
                        e.append("%; "),
                        twig.attr("field"in t ? t.field : "", "hide") && e.append(" display: none ")),
                        e.append('" data-field-code="'),
                        e.append(twig.filter.escape(this.env_, twig.attr("field"in t ? t.field : "", "code"), "light_escape", null, !0)),
                        e.append('"></div>'))
                    }
                    ), this),
                    e.append("</div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_plugs_list_col_group"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/plugs/list/col_group", t)
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
                    t.append('<div class="list-row list-row-head js-list-row '),
                    "has_markers"in i && i.has_markers && t.append(" list-row-head_marked "),
                    t.append('" id="list_head">'),
                    "not_show_chbx"in i && i.not_show_chbx || (t.append('<div class="list-row__cell js-hs-prevent list-row__cell-head cell-head list-row__cell-template-id list-row__cell-id"><div class="cell-head__inner">'),
                    new (e._get("interface/controls/checkbox.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        class_name: "",
                        id: "list_all_checker"
                    })),
                    t.append("</div></div>")),
                    i._parent = i;
                    var s = "fields"in i ? i.fields : ""
                      , a = {
                        index0: 0,
                        index: 1,
                        first: !0
                    };
                    twig.forEach(s, (function(n, s) {
                        i._key = s,
                        i.field = n,
                        twig.attr("field"in i ? i.field : "", "shown") && (new (e._get("interface/list/header_cell.twig"))(this.env_).render_(t, twig.extend({}, i, {
                            field: "field"in i ? i.field : "",
                            no_resize: "no_resize"in i ? i.no_resize : ""
                        })),
                        ++a.index0,
                        ++a.index,
                        a.first = !1)
                    }
                    ), this),
                    t.append("</div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_plugs_list_header"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/plugs/list/header", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e),
                    this.setBlocks({
                        body: twig.bind(this.block_body, this),
                        body_no_items_message: twig.bind(this.block_body_no_items_message, this),
                        body_no_items: twig.bind(this.block_body_no_items, this)
                    })
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(t) {
                    return e._get("interface/list/table.twig")
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    this.getParent(t).render_(e, t, twig.extend({}, this.getBlocks(), i))
                }
                ,
                t.prototype.block_body = function(e, t, i) {
                    i = void 0 === i ? {} : i
                }
                ,
                t.prototype.block_body_no_items_message = function(e, t, i) {
                    i = void 0 === i ? {} : i
                }
                ,
                t.prototype.block_body_no_items = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    new (e._get("interface/plugs/list/table_body.twig"))(this.env_).render_(t, i)
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_plugs_list_inner"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/plugs/list/inner", t)
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
                    t.append('<div class="list-row js-list-row js-pager-list-item__1 '),
                    ("is_first"in i && i.is_first || "is_last"in i && i.is_last) && t.append(" js-page-delimiter"),
                    t.append(" js-item-id-"),
                    t.append(twig.filter.escape(this.env_, "index"in i ? i.index : "", "light_escape", null, !0)),
                    t.append('">'),
                    new (e._get("interface/plugs/list/cells.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        fields: "fields"in i ? i.fields : "",
                        not_show_chbx: 0
                    })),
                    t.append("</div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_plugs_list_item"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/plugs/list/item", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e),
                    this.setBlocks({
                        list_body: twig.bind(this.block_list_body, this),
                        list_footer: twig.bind(this.block_list_footer, this)
                    })
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(t) {
                    return e._get("interface/leads/list.twig")
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    t.is_plug = !0,
                    this.getParent(t).render_(e, t, twig.extend({}, this.getBlocks(), i))
                }
                ,
                t.prototype.block_list_body = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    new (e._get("interface/plugs/list/inner.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        fields: "fields"in i ? i.fields : "",
                        items: [],
                        no_list_settings: !0
                    }))
                }
                ,
                t.prototype.block_list_footer = function(e, t, i) {
                    i = void 0 === i ? {} : i
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_plugs_list_list"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/plugs/list/list", t)
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
                t.prototype.getParent_ = function(e) {
                    return !1
                }
                ,
                t.prototype.render_ = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    i.has_items = 1,
                    t.append('<div class="list__table__holder js-hs-scroller custom-scroll '),
                    "is_plug"in i && i.is_plug && t.append("mail-preload-plug"),
                    t.append('"><div class="js-scroll-container list__table '),
                    "has_items"in i && i.has_items || t.append("list__table-no-items"),
                    t.append('" id="list_table" '),
                    "width"in i && i.width && (t.append('style="min-width: '),
                    t.append(twig.filter.escape(this.env_, "width"in i ? i.width : "", "light_escape", null, !0)),
                    t.append('px"')),
                    t.append(">"),
                    new (e._get("interface/plugs/list/col_group.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        fields: "fields"in i ? i.fields : "",
                        not_show_cbx: "not_show_cbx"in i ? i.not_show_cbx : ""
                    })),
                    new (e._get("interface/plugs/list/header.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        fields: "fields"in i ? i.fields : "",
                        not_show_cbx: "not_show_cbx"in i ? i.not_show_cbx : ""
                    })),
                    t.append(this.renderBlock("body", i, n)),
                    t.append("</div></div>")
                }
                ,
                t.prototype.block_body = function(e, t, i) {
                    i = void 0 === i ? {} : i
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_plugs_list_table"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/plugs/list/table", t)
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
                    i.line_class = {
                        1: "blue_line",
                        2: "grey_line"
                    },
                    "plug_cell"in i && i.plug_cell || (i.plug_cell = "list"),
                    "count"in i && i.count || (i.count = 20),
                    i.start_index = "without_checkbox_column"in i && i.without_checkbox_column && 1 != ("count"in i ? i.count : "") ? 0 : 1,
                    i._parent = i;
                    var s = twig.range("start_index"in i ? i.start_index : "", "count"in i ? i.count : "")
                      , a = {
                        index0: 0,
                        index: 1,
                        first: !0
                    };
                    if (twig.countable(s)) {
                        var l = twig.count(s);
                        a.revindex0 = l - 1,
                        a.revindex = l,
                        a.length = l,
                        a.last = 1 === l
                    }
                    twig.forEach(s, (function(n, s) {
                        i._key = s,
                        i.i = n,
                        t.append('<div class="list-row js-list-row list-row-plug">'),
                        "without_checkbox_column"in i && i.without_checkbox_column || new (e._get("interface/list/cells/id.twig"))(this.env_).render_(t, twig.extend({}, i, {
                            disabled: !0
                        }));
                        var l = "fields"in i ? i.fields : ""
                          , _ = {
                            parent: a,
                            index0: 0,
                            index: 1,
                            first: !0
                        };
                        twig.forEach(l, (function(n, s) {
                            i._key = s,
                            i.field = n,
                            twig.attr("field"in i ? i.field : "", "shown") && (new (e._get("interface/plugs/" + ("plug_cell"in i ? i.plug_cell : "") + "/cell.twig"))(this.env_).render_(t, i),
                            ++_.index0,
                            ++_.index,
                            _.first = !1)
                        }
                        ), this),
                        t.append("</div>"),
                        ++a.index0,
                        ++a.index,
                        a.first = !1,
                        a.length && (--a.revindex0,
                        --a.revindex,
                        a.last = 0 === a.revindex0)
                    }
                    ), this)
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_plugs_list_table_body"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/plugs/list/table_body", t)
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
                    e.append('<div class="list-row__cell-plug" style="width: '),
                    e.append(twig.filter.escape(this.env_, Number(twig.functions.random(this.env_, 50)) + Number(50), "light_escape", null, !0)),
                    e.append('%"></div>')
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_plugs_todo_cell"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/plugs/todo/cell", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e),
                    this.setBlocks({
                        list_body: twig.bind(this.block_list_body, this),
                        list_footer: twig.bind(this.block_list_footer, this)
                    })
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(t) {
                    return e._get("interface/todo/list.twig")
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    t.plug_cell = "todo",
                    t.is_plug = !0,
                    this.getParent(t).render_(e, t, twig.extend({}, this.getBlocks(), i))
                }
                ,
                t.prototype.block_list_body = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    new (e._get("interface/plugs/list/inner.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        fields: "fields"in i ? i.fields : "",
                        items: [],
                        no_list_settings: !0
                    }))
                }
                ,
                t.prototype.block_list_footer = function(e, t, i) {
                    i = void 0 === i ? {} : i
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_plugs_todo_list"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/plugs/todo/list", t)
            }()
        }
        .apply(t, n)) || (e.exports = s)
    }
    ,
    325530: (e, t, i) => {
        var n, s;
        n = [i(460159), i(284685)],
        void 0 === (s = function(e) {
            (function() {
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
                    e.append('<div class="unsorted-actions-card"><div class="unsorted-actions-card-wrapper"><div class="unsorted-actions-card__action" id="card_unsorted_accept"><svg class="svg-icon svg-leads--unsorted-accept-dims" style="fill: #00b400"><use xlink:href="#leads--unsorted-accept"></use></svg><span class="unsorted-actions-card__action-text">'),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Accept"), "light_escape", null, !0)),
                    e.append("</span></div>"),
                    "chats" != ("category"in t ? t.category : "") && "sip" != ("category"in t ? t.category : "") || (e.append('<div class="unsorted-actions-card__delimiter"></div><div class="unsorted-actions-card__action" id="card_unsorted_link"><svg class="svg-icon svg-common--linking-chain-dims"><use xlink:href="#common--linking-chain"></use></svg><span class="unsorted-actions-card__action-text">'),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Link"), "light_escape", null, !0)),
                    e.append("</span></div>")),
                    e.append('<div class="unsorted-actions-card__delimiter"></div><div class="unsorted-actions-card__action" id="card_unsorted_decline"><svg class="svg-icon svg-common--trash-dims"><use xlink:href="#common--trash"></use></svg><span class="unsorted-actions-card__action-text">'),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Decline"), "light_escape", null, !0)),
                    e.append("</span></div></div></div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_unsorted_card_actions"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/unsorted/card_actions", t)
            }
            )(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e),
                    this.setBlocks({
                        form_top: twig.bind(this.block_form_top, this)
                    })
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(t) {
                    return e._get("interface/cards/plug.twig")
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    this.getParent(t).render_(e, t, twig.extend({}, this.getBlocks(), i))
                }
                ,
                t.prototype.block_form_top = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    new (e._get("interface/unsorted/plugs/form_top.twig"))(this.env_).render_(t, i)
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_unsorted_plug"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/unsorted/plug", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e),
                    this.setBlocks({
                        name: twig.bind(this.block_name, this)
                    })
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(t) {
                    return e._get("interface/cards/form_top.twig")
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    this.getParent(t).render_(e, t, twig.extend({}, this.getBlocks(), i))
                }
                ,
                t.prototype.block_name = function(e, t, i) {
                    i = void 0 === i ? {} : i
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_unsorted_plugs_form_top"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/unsorted/plugs/form_top", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e),
                    this.setBlocks({
                        view_mode: twig.bind(this.block_view_mode, this)
                    })
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(t) {
                    return e._get("interface/cards/leads/controls/status.twig")
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    this.getParent(t).render_(e, t, twig.extend({}, this.getBlocks(), i))
                }
                ,
                t.prototype.block_view_mode = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    t.append('<div class="pipeline-select-view__inner" id="card_status_view_mode">'),
                    new (e._get("interface/unsorted/cards/controls/view_mode.twig"))(this.env_).render_(t, i),
                    t.append("</div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_unsorted_cards_controls_status"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/unsorted/cards/controls/status", t)
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
                    "selected_pipeline_id"in t && t.selected_pipeline_id || (t.selected_pipeline_id = twig.attr(twig.filter.first(this.env_, "statuses"in t ? t.statuses : ""), "id")),
                    twig.filter.length(this.env_, "statuses"in t ? t.statuses : "") > 1 && (e.append('<div class="pipeline-select-view__pipeline">'),
                    e.append(twig.filter.escape(this.env_, twig.attr(twig.attr("statuses"in t ? t.statuses : "", "selected_pipeline_id"in t ? t.selected_pipeline_id : "", void 0, "array"), "name"), "light_escape", null, !0)),
                    e.append("</div>")),
                    e.append('<div class="pipeline-select-view__status"><span>'),
                    e.append(twig.filter.escape(this.env_, twig.attr("lang"in t ? t.lang : "", "unsorted"), "light_escape", null, !0)),
                    e.append('</span></div><div class="pipeline-select-view__colors"><div class="pipeline-select-view__colors-block"></div></div>')
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_unsorted_cards_controls_view_mode"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/unsorted/cards/controls/view_mode", t)
            }()
        }
        .apply(t, n)) || (e.exports = s)
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
        e._sentryDebugIds[t] = "94c9c200-d921-426c-bc2d-5ea770ecfab2",
        e._sentryDebugIdIdentifier = "sentry-dbid-94c9c200-d921-426c-bc2d-5ea770ecfab2")
    } catch (e) {}
}();
//# sourceMappingURL=95812.af40a77369a3e195c441.js.map
