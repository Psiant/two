(window.webpackChunk = window.webpackChunk || []).push([[98296], {
    898296: (e, t, i) => {
        var n, a;
        n = [i(460159), i(94849), i(295165), i(591880), i(92474)],
        void 0 === (a = function(e) {
            (function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e),
                    this.setBlocks({
                        body: twig.bind(this.block_body, this),
                        body_no_items: twig.bind(this.block_body_no_items, this),
                        list_footer: twig.bind(this.block_list_footer, this)
                    })
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(t) {
                    return e._get("interface/list/table.twig")
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    t.not_show_chbx = !0,
                    this.getParent(t).render_(e, t, twig.extend({}, this.getBlocks(), i))
                }
                ,
                t.prototype.block_body = function(t, i, n) {
                    if (n = void 0 === n ? {} : n,
                    twig.filter.length(this.env_, "items"in i ? i.items : "")) {
                        i._parent = i;
                        var a = "items"in i ? i.items : ""
                          , l = {
                            index0: 0,
                            index: 1,
                            first: !0
                        };
                        if (twig.countable(a)) {
                            var r = twig.count(a);
                            l.revindex0 = r - 1,
                            l.revindex = r,
                            l.length = r,
                            l.last = 1 === r
                        }
                        twig.forEach(a, (function(n, a) {
                            i._key = a,
                            i.event = n,
                            new (e._get("interface/list/item.twig"))(this.env_).render_(t, twig.extend({}, i, {
                                is_first: twig.attr(l, "first"),
                                is_last: twig.attr(l, "last"),
                                page: "page"in i ? i.page : "",
                                item: "event"in i ? i.event : "",
                                fields: "fields"in i ? i.fields : "",
                                not_show_chbx: !0
                            })),
                            ++l.index0,
                            ++l.index,
                            l.first = !1,
                            l.length && (--l.revindex0,
                            --l.revindex,
                            l.last = 0 === l.revindex0)
                        }
                        ), this)
                    } else
                        i._parent = i,
                        a = twig.range(1, 5),
                        l = {
                            index0: 0,
                            index: 1,
                            first: !0
                        },
                        twig.countable(a) && (r = twig.count(a),
                        l.revindex0 = r - 1,
                        l.revindex = r,
                        l.length = r,
                        l.last = 1 === r),
                        twig.forEach(a, (function(e, n) {
                            i._key = n,
                            i.i = e,
                            t.append('<div class="list-row js-list-row">');
                            var a = "fields"in i ? i.fields : ""
                              , r = {
                                parent: l,
                                index0: 0,
                                index: 1,
                                first: !0
                            };
                            twig.forEach(a, (function(e, n) {
                                i._key = n,
                                i.field = e,
                                twig.attr("field"in i ? i.field : "", "shown") && (t.append('<div class="list-row__cell js-list-row__cell list-row__cell-template-'),
                                t.append(twig.filter.escape(this.env_, twig.attr("field"in i ? i.field : "", "template"), "light_escape", null, !0)),
                                t.append(" list-row__cell-"),
                                t.append(twig.filter.escape(this.env_, twig.attr("field"in i ? i.field : "", "code"), "light_escape", null, !0)),
                                t.append('"><div class="content-table__item__inner">'),
                                1 == ("i"in i ? i.i : "") && 1 == twig.attr(r, "index") && t.append('<svg class="list-row__company-icon svg-icon svg-common--company-dims "><use xlink:href="#common--company"></use></svg>'),
                                ("i"in i ? i.i : "") <= 3 && twig.attr(r, "index") <= 2 && (i.line_class_name = twig.attr("line_class"in i ? i.line_class : "", twig.attr(r, "index"), void 0, "array"),
                                t.append("<div class='dashboard_contacts_plug__item__line "),
                                t.append(twig.filter.escape(this.env_, twig.attr("line_class"in i ? i.line_class : "", twig.attr(r, "index"), void 0, "array"), "light_escape", null, !0)),
                                t.append("' style=\"width: "),
                                t.append(twig.filter.escape(this.env_, twig.attr(twig.attr("line_width"in i ? i.line_width : "", "i"in i ? i.i : "", void 0, "array"), "line_class_name"in i ? i.line_class_name : "", void 0, "array"), "light_escape", null, !0)),
                                t.append('"></div>')),
                                t.append("</div></div>"),
                                ++r.index0,
                                ++r.index,
                                r.first = !1)
                            }
                            ), this),
                            t.append("</div>"),
                            ++l.index0,
                            ++l.index,
                            l.first = !1,
                            l.length && (--l.revindex0,
                            --l.revindex,
                            l.last = 0 === l.revindex0)
                        }
                        ), this)
                }
                ,
                t.prototype.block_body_no_items = function(e, t, i) {
                    i = void 0 === i ? {} : i
                }
                ,
                t.prototype.block_list_footer = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    t.append('<div class="list__footer">'),
                    twig.attr("pagination"in i ? i.pagination : "", "total") > 1 && (t.append('<div class="list__footer__items-pagination" id="list_pagination" data-max-page="'),
                    t.append(twig.filter.escape(this.env_, twig.attr("pagination"in i ? i.pagination : "", "total"), "light_escape", null, !0)),
                    t.append('">'),
                    new (e._get("interface/list/common/pagination.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        page: twig.attr("pagination"in i ? i.pagination : "", "current"),
                        max_page: twig.attr("pagination"in i ? i.pagination : "", "total")
                    })),
                    t.append("</div>"),
                    "summary"in i && i.summary && twig.attr("summary"in i ? i.summary : "", "template") && new (e._get("interface/" + twig.attr("summary"in i ? i.summary : "", "template") + "/common/summary.twig"))(this.env_).render_(t, twig.extend({}, i, "summary"in i ? i.summary : ""))),
                    t.append("</div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_list_base"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/list/base", t)
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
                    "is_trash"in i && i.is_trash || !twig.attr("item"in i ? i.item : "", "element_type", void 0, void 0, !0) || !twig.attr("field"in i ? i.field : "", "element_type", void 0, void 0, !0) || (twig.attr("item"in i ? i.item : "", "element_type") == twig.attr("field"in i ? i.field : "", "element_type") && (1 == twig.attr("field"in i ? i.field : "", "element_type") && twig.attr(twig.attr(twig.attr("item"in i ? i.item : "", "rights"), "contacts"), "edit") || 2 == twig.attr("field"in i ? i.field : "", "element_type") && twig.attr(twig.attr(twig.attr("item"in i ? i.item : "", "rights"), "leads"), "edit") || 3 == twig.attr("field"in i ? i.field : "", "element_type") && twig.attr(twig.attr(twig.attr("item"in i ? i.item : "", "rights"), "companies"), "edit") || 12 == twig.attr("field"in i ? i.field : "", "element_type") && twig.attr(twig.attr(twig.attr("item"in i ? i.item : "", "rights"), "customers"), "edit") || 10 == twig.attr("field"in i ? i.field : "", "element_type") && twig.attr(twig.attr(twig.attr("item"in i ? i.item : "", "rights"), "catalogs"), "edit")) && (i.can_edit = !0),
                    2 == twig.attr("item"in i ? i.item : "", "element_type") && 1 == twig.attr("field"in i ? i.field : "", "element_type") && twig.attr(twig.attr("item"in i ? i.item : "", "_linked"), "main_contact") && twig.attr(twig.attr(twig.attr("item"in i ? i.item : "", "rights"), "contacts"), "edit") && (i.can_edit = !0)),
                    i.value = twig.attr("item"in i ? i.item : "", twig.attr("field"in i ? i.field : "", "code"), void 0, "array"),
                    "email" == twig.attr("field"in i ? i.field : "", "code") && twig.attr("item"in i ? i.item : "", "with_inactive_text") && (i.value = twig.filter.merge("value"in i ? i.value : "", {
                        name: twig.attr("value"in i ? i.value : "", "name") + " (" + twig.filter.lower(this.env_, this.env_.filter("i18n", "Not confirmed")) + ")"
                    })),
                    "from" != twig.attr("field"in i ? i.field : "", "code") && "to" != twig.attr("field"in i ? i.field : "", "code") || (i.value = twig.attr(twig.attr("item"in i ? i.item : "", "last_message"), twig.attr("field"in i ? i.field : "", "code"), void 0, "array")),
                    i.cell_template = twig.attr("item"in i ? i.item : "", "is_delete_line") ? "delete" : twig.attr("field"in i ? i.field : "", "template"),
                    t.append('<div class="list-row__cell js-list-row__cell list-row__cell-template-'),
                    t.append(twig.filter.escape(this.env_, "cell_template"in i ? i.cell_template : "", "light_escape", null, !0)),
                    t.append(" list-row__cell-"),
                    t.append(twig.filter.escape(this.env_, twig.attr("field"in i ? i.field : "", "code"), "light_escape", null, !0)),
                    t.append(" "),
                    twig.attr("field"in i ? i.field : "", "disabled") && "can_edit"in i && i.can_edit,
                    t.append(" "),
                    twig.attr("field"in i ? i.field : "", "filtered") && t.append("list-row__cell_filtered"),
                    t.append('" data-field-code="'),
                    t.append(twig.filter.escape(this.env_, twig.attr("field"in i ? i.field : "", "code"), "light_escape", null, !0)),
                    t.append('" data-field-id="'),
                    t.append(twig.filter.escape(this.env_, twig.attr("field"in i ? i.field : "", "id"), "light_escape", null, !0)),
                    t.append('" '),
                    twig.attr("field"in i ? i.field : "", "hide") && t.append('style=" display: none "'),
                    t.append(">"),
                    new (e._get("interface/list/cells/" + ("cell_template"in i ? i.cell_template : "") + ".twig"))(this.env_).render_(t, twig.extend({}, i, {
                        id: twig.attr("item"in i ? i.item : "", "id"),
                        value: "value"in i ? i.value : "",
                        format: twig.attr("field"in i ? i.field : "", "format"),
                        code: twig.attr("field"in i ? i.field : "", "default_code"),
                        params: twig.attr("field"in i ? i.field : "", "template_params"),
                        item: "item"in i ? i.item : "",
                        is_trash: "is_trash"in i ? i.is_trash : "",
                        is_unsorted: "is_unsorted"in i ? i.is_unsorted : ""
                    })),
                    t.append("</div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_list_cell"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/list/cell", t)
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
                        id: twig.attr("item"in i ? i.item : "", "id"),
                        marked_id: twig.attr("item"in i ? i.item : "", "marked_id"),
                        has_unread: twig.attr("item"in i ? i.item : "", "has_unread"),
                        is_sortable: "is_sortable"in i ? i.is_sortable : ""
                    })),
                    i._parent = i;
                    var a = "fields"in i ? i.fields : ""
                      , l = {
                        index0: 0,
                        index: 1,
                        first: !0
                    };
                    twig.forEach(a, (function(n, a) {
                        i._key = a,
                        i.field = n,
                        twig.attr("field"in i ? i.field : "", "shown") && (new (e._get("interface/list/cell.twig"))(this.env_).render_(t, twig.extend({}, i, {
                            item: "item"in i ? i.item : "",
                            field: "field"in i ? i.field : "",
                            is_blue: 2 == twig.attr(l, "index")
                        })),
                        ++l.index0,
                        ++l.index,
                        l.first = !1)
                    }
                    ), this)
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_list_cells"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/list/cells", t)
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
                    "not_show_chbx"in t && t.not_show_chbx || e.append('<div class="js-list-column-code-id list-column-code-id js-list-column list__col-group__column" data-field-code="id"></div>'),
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
                        e.append(twig.filter.escape(this.env_, this.env_.filter("number_format", this.env_, "width"in t ? t.width : "", 4, "."), "light_escape", null, !0)),
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
                    return "interface_list_col_group"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/list/col_group", t)
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
                    t.append('<div class="list-row list-row-head js-list-row js-list-row-head '),
                    "has_markers"in i && i.has_markers && t.append(" list-row-head_marked "),
                    t.append('" id="'),
                    "list_header_id"in i && i.list_header_id ? t.append(twig.filter.escape(this.env_, "list_header_id"in i ? i.list_header_id : "", "light_escape", null, !0)) : t.append("list_head"),
                    t.append('">'),
                    "not_show_chbx"in i && i.not_show_chbx || ("list_all_checker_id"in i && i.list_all_checker_id || (i.list_all_checker_id = "list_all_checker"),
                    "has_items"in i && i.has_items || (i.list_all_checker_disabled = !0),
                    t.append('<div class="list-row__cell js-hs-prevent list-row__cell-head cell-head list-row__cell-template-id list-row__cell-id"><div class="cell-head__inner">'),
                    new (e._get("interface/controls/checkbox.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        class_name: "",
                        id: "list_all_checker_id"in i ? i.list_all_checker_id : "",
                        disabled: "list_all_checker_disabled"in i ? i.list_all_checker_disabled : ""
                    })),
                    t.append("</div></div>")),
                    i._parent = i;
                    var a = "fields"in i ? i.fields : ""
                      , l = {
                        index0: 0,
                        index: 1,
                        first: !0
                    };
                    twig.forEach(a, (function(n, a) {
                        i._key = a,
                        i.field = n,
                        twig.attr("field"in i ? i.field : "", "shown") && (new (e._get("interface/list/header_cell.twig"))(this.env_).render_(t, twig.extend({}, i, {
                            field: "field"in i ? i.field : "",
                            no_resize: "no_resize"in i ? i.no_resize : ""
                        })),
                        ++l.index0,
                        ++l.index,
                        l.first = !1)
                    }
                    ), this),
                    t.append("</div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_list_header"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/list/header", t)
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
                    i.need_tips = !1,
                    i.sortable_entities = ["contacts", "companies", "leads", "customers", "todo", "catalogs"],
                    i.filterable_entities = ["files", "events", "dashboard_superlog", "user_rights", "stats-human", "catalogs"],
                    i.filterable_fields = ["creator", "created_by", "editor", "main_contact"],
                    twig.contains("sortable_entities"in i ? i.sortable_entities : "", "entity"in i ? i.entity : "") || twig.contains("filterable_entities"in i ? i.filterable_entities : "", "entity"in i ? i.entity : "") ? (twig.attr("field"in i ? i.field : "", "filterable") || twig.attr("field"in i ? i.field : "", "sortable") || twig.attr("field"in i ? i.field : "", "custom_field") || twig.contains("filterable_fields"in i ? i.filterable_fields : "", twig.attr("field"in i ? i.field : "", "code"))) && (i.need_tips = !0,
                    "all" != ("selected_element_type"in i ? i.selected_element_type : "") || twig.attr("field"in i ? i.field : "", "sortable") || (i.need_tips = !1),
                    "contacts" != ("selected_element_type"in i ? i.selected_element_type : "") && "companies" != ("selected_element_type"in i ? i.selected_element_type : "") || "smart_address" != twig.attr("field"in i ? i.field : "", "type_code") || twig.attr("field"in i ? i.field : "", "element_type") == this.env_.filter("element_type", "selected_element_type"in i ? i.selected_element_type : "", "int") || twig.attr("field"in i ? i.field : "", "sortable") || (i.need_tips = !1)) : i.need_tips = twig.attr("field"in i ? i.field : "", "sortable"),
                    t.append('<div class="list-row__cell js-hs-prevent '),
                    "no_resize"in i && i.no_resize || t.append("js-resizable-cell"),
                    t.append(" list-row__cell-head cell-head js-cell-head "),
                    "need_tips"in i && i.need_tips && t.append("js-cell-head_sortable"),
                    t.append(" list-row__cell-template-"),
                    t.append(twig.filter.escape(this.env_, twig.attr("field"in i ? i.field : "", "template"), "light_escape", null, !0)),
                    t.append(" list-row__cell-"),
                    t.append(twig.filter.escape(this.env_, twig.attr("field"in i ? i.field : "", "code"), "light_escape", null, !0)),
                    t.append(" "),
                    twig.attr("field"in i ? i.field : "", "sorted") && t.append("cell-head_sorted"),
                    t.append('" data-field-template="'),
                    t.append(twig.filter.escape(this.env_, twig.attr("field"in i ? i.field : "", "template"), "light_escape", null, !0)),
                    t.append('" data-field-name="'),
                    t.append(twig.filter.escape(this.env_, twig.attr("field"in i ? i.field : "", "name"), "light_escape", null, !0)),
                    t.append('" data-field-code="'),
                    t.append(twig.filter.escape(this.env_, twig.attr("field"in i ? i.field : "", "code"), "light_escape", null, !0)),
                    t.append('" style="'),
                    twig.attr("field"in i ? i.field : "", "hide") && t.append(" display: none "),
                    t.append('" '),
                    twig.attr("field"in i ? i.field : "", "sorted") && (t.append('data-current-sort="'),
                    t.append(twig.filter.escape(this.env_, twig.attr("field"in i ? i.field : "", "sorted"), "light_escape", null, !0)),
                    t.append('"')),
                    t.append('><div class="cell-head__inner"><div class="cell-head__inner-content"><span class="cell-head__dots icon icon-v-dots"></span>'),
                    twig.attr("field"in i ? i.field : "", "unsorted_title") && new (e._get("interface/list/header_cells/unsorted_categories.twig"))(this.env_).render_(t, i),
                    twig.attr("field"in i ? i.field : "", "unsorted_title") || (t.append('<span class="cell-head__title">'),
                    twig.attr("field"in i ? i.field : "", "html") ? t.append(twig.attr("field"in i ? i.field : "", "html")) : ("monetary" == twig.attr("field"in i ? i.field : "", "template") && (i.currency_symbol_helper = this.env_.filter("price", "1", [!1, 0, !1, twig.attr(twig.attr("field"in i ? i.field : "", "template_params"), "currency")]),
                    i.currency = twig.filter.trim(twig.filter.replace("currency_symbol_helper"in i ? i.currency_symbol_helper : "", {
                        1: ""
                    }))),
                    t.append(twig.filter.escape(this.env_, twig.attr("field"in i ? i.field : "", "title"), "light_escape", null, !0)),
                    t.append("\x3c!----\x3e"),
                    ("budget" == twig.attr("field"in i ? i.field : "", "code") || twig.contains(["monetary", "budget", "price"], twig.attr("field"in i ? i.field : "", "template"))) && "currency"in i && i.currency && (t.append(", "),
                    t.append(twig.filter.escape(this.env_, "currency"in i ? i.currency : "", "light_escape", null, !0)))),
                    t.append("</span>")),
                    "need_tips"in i && i.need_tips && (t.append('<span class="cell-head__icon"><span class="cell-head__icon-sortable cell-head__icon-sortable_'),
                    "ASC" == twig.attr("field"in i ? i.field : "", "sorted") ? t.append("asc") : t.append("desc"),
                    t.append('"></span><span class="cell-head__icon-close js-cell-head__icon-close"><svg class="svg-icon svg-common--cross-close-dims"><use xlink:href="#common--cross-close"></use></svg></span></span>')),
                    t.append("</div>"),
                    "no_resize"in i && i.no_resize || t.append('<div class="cell-head__resize-ghost"></div>'),
                    t.append("</div>"),
                    twig.attr("field"in i ? i.field : "", "is_column_disabled") && (t.append('<div class="cell-head__column-disabled" style="height: '),
                    t.append(twig.filter.escape(this.env_, "disabled_overlay_height"in i ? i.disabled_overlay_height : "", "light_escape", null, !0)),
                    t.append('px"></div>')),
                    t.append("</div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_list_header_cell"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/list/header_cell", t)
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
                    return e._get("interface/list/table.twig")
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
                    var a = "items"in i ? i.items : ""
                      , l = {
                        index0: 0,
                        index: 1,
                        first: !0
                    };
                    if (twig.countable(a)) {
                        var r = twig.count(a);
                        l.revindex0 = r - 1,
                        l.revindex = r,
                        l.length = r,
                        l.last = 1 === r
                    }
                    twig.forEach(a, (function(n, a) {
                        i._key = a,
                        i.item = n,
                        new (e._get("interface/list/item.twig"))(this.env_).render_(t, twig.extend({}, i, {
                            is_first: twig.attr(l, "first"),
                            is_last: twig.attr(l, "last"),
                            page: "page"in i ? i.page : "",
                            item: "item"in i ? i.item : "",
                            fields: "fields"in i ? i.fields : ""
                        })),
                        ++l.index0,
                        ++l.index,
                        l.first = !1,
                        l.length && (--l.revindex0,
                        --l.revindex,
                        l.last = 0 === l.revindex0)
                    }
                    ), this)
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_list_inner"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/list/inner", t)
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
                    t.append('" '),
                    twig.attr("item"in i ? i.item : "", "url") && (t.append('data-url="'),
                    t.append(twig.filter.escape(this.env_, twig.attr("item"in i ? i.item : "", "url"), "light_escape", null, !0)),
                    t.append('" ')),
                    t.append(' class="list-row js-list-row js-pager-list-item__'),
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
                    t.append(" "),
                    twig.attr("item"in i ? i.item : "", "id") && (t.append('id="list_item_'),
                    t.append(twig.filter.escape(this.env_, twig.attr("item"in i ? i.item : "", "id"), "light_escape", null, !0)),
                    t.append('"')),
                    twig.attr("item"in i ? i.item : "", "additional_data")) {
                        i._parent = i;
                        var a = twig.attr("item"in i ? i.item : "", "additional_data");
                        twig.forEach(a, (function(e, n) {
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
                    new (e._get("interface/list/cells.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        page: "page"in i ? i.page : "",
                        fields: "fields"in i ? i.fields : "",
                        item: "item"in i ? i.item : "",
                        not_show_chbx: "not_show_chbx"in i ? i.not_show_chbx : "",
                        is_sortable: "is_sortable"in i ? i.is_sortable : ""
                    })),
                    t.append("</div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_list_item"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/list/item", t)
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
                    return e._get("interface/common/list/list.twig")
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    this.getParent(t).render_(e, t, twig.extend({}, this.getBlocks(), i))
                }
                ,
                t.prototype.block_list_body = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    new (e._get("interface/list/inner.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        fields: "fields"in i ? i.fields : "",
                        items: "items"in i ? i.items : ""
                    }))
                }
                ,
                t.prototype.block_list_footer = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    "multi_page"in i && i.multi_page && new (e._get("interface/list/common/footer.twig"))(this.env_).render_(t, i)
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_list_list"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/list/list", t)
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
                    "installed"in i && i.installed ? (i.widget_active = twig.attr("settings"in i ? i.settings : "", "active"),
                    i.save_records = twig.attr("settings"in i ? i.settings : "", "save_records"),
                    i.sync_chats = twig.attr("settings"in i ? i.settings : "", "sync_chats"),
                    i.cbh_id = twig.attr("settings"in i ? i.settings : "", "cbh_id"),
                    i.cbh_key = twig.attr("settings"in i ? i.settings : "", "cbh_key")) : (i.widget_active = !0,
                    i.save_records = !0,
                    i.sync_chats = !0),
                    t.append('<div class="cbh-install-modal_modal-body"><div class="cbh-install-modal_title">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("wlang"in i ? i.wlang : "", "widget.name", void 0, "array"), "light_escape", null, !0)),
                    t.append('</div><div class="cbh-install-modal_descr"><div class="cbh-install-modal_logo"><img src="/widgets/amo_callbackhunter/images/logo.png"></div>'),
                    t.append(twig.filter.escape(this.env_, twig.attr("wlang"in i ? i.wlang : "", "widget.description", void 0, "array"), "light_escape", null, !0)),
                    t.append('</div><div class="cbh-install-modal_tracker-code" hidden></div><div class="cbh-install-modal_is-installed" '),
                    t.append("installed"in i && i.installed ? "hidden" : ""),
                    t.append('><div class="cbh-install-modal_install-help">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("wlang"in i ? i.wlang : "", "registration.install_descr", void 0, "array"), "light_escape", null, !0)),
                    t.append('</div><div class="cbh-install-modal_input-fields_item"><div class="cbh-install-modal_input-fields_input">'),
                    new (e._get("interface/controls/radio.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        name: "check-install",
                        value: 0,
                        label: twig.attr("wlang"in i ? i.wlang : "", "registration.not_installed", void 0, "array")
                    })),
                    t.append('</div></div><div class="cbh-install-modal_registration" hidden><div class="cbh-install-modal_response" id="cbh-response_1" hidden></div><div class="cbh-install-modal_input-fields_item"><div class="cbh-install-modal_input-fields_label">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("wlang"in i ? i.wlang : "", "registration.site", void 0, "array"), "light_escape", null, !0)),
                    t.append('</div><div class="cbh-install-modal_input-fields_input">'),
                    new (e._get("interface/controls/input.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        name: "cbh_site",
                        class: "text-input"
                    })),
                    t.append('</div></div><div class="cbh-install-modal_input-fields_item"><div class="cbh-install-modal_input-fields_label">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("wlang"in i ? i.wlang : "", "registration.name", void 0, "array"), "light_escape", null, !0)),
                    t.append('</div><div class="cbh-install-modal_input-fields_input">'),
                    new (e._get("interface/controls/input.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        name: "cbh_name",
                        class: "text-input",
                        value: twig.attr("udata"in i ? i.udata : "", "name")
                    })),
                    t.append('</div></div><div class="cbh-install-modal_input-fields_item"><div class="cbh-install-modal_input-fields_label">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("wlang"in i ? i.wlang : "", "registration.phone", void 0, "array"), "light_escape", null, !0)),
                    t.append('</div><div class="cbh-install-modal_input-fields_input">'),
                    new (e._get("interface/controls/input.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        name: "cbh_phone",
                        class: "text-input",
                        value: twig.attr("udata"in i ? i.udata : "", "personal_mobile")
                    })),
                    t.append('</div></div><div class="cbh-install-modal_input-fields_item"><div class="cbh-install-modal_input-fields_label">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("wlang"in i ? i.wlang : "", "registration.email", void 0, "array"), "light_escape", null, !0)),
                    t.append('</div><div class="cbh-install-modal_input-fields_input">'),
                    new (e._get("interface/controls/input.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        name: "cbh_email",
                        class: "text-input",
                        value: twig.attr("udata"in i ? i.udata : "", "login")
                    })),
                    t.append('</div></div><div class="cbh-install-modal_input-fields_item"><div class="cbh-install-modal_input-fields_label">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("wlang"in i ? i.wlang : "", "registration.password", void 0, "array"), "light_escape", null, !0)),
                    t.append('</div><div class="cbh-install-modal_input-fields_input">'),
                    new (e._get("interface/controls/input.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        name: "cbh_pass",
                        class: "text-input"
                    })),
                    t.append('</div></div></div><div class="cbh-install-modal_input-fields_item"><div class="cbh-install-modal_input-fields_input">'),
                    new (e._get("interface/controls/radio.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        name: "check-install",
                        value: 1,
                        label: twig.attr("wlang"in i ? i.wlang : "", "registration.installed", void 0, "array")
                    })),
                    t.append('</div></div></div><div class="cbh-install-modal_input-fields" '),
                    t.append("installed"in i && i.installed ? "" : "hidden"),
                    t.append('><div class="cbh-install-modal_response" id="cbh-response_2" hidden></div>'),
                    "" != ("cbh_id"in i ? i.cbh_id : "") && "" != ("cbh_key"in i ? i.cbh_key : "") || (t.append('<div class="cbh-install-modal_api-img">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("wlang"in i ? i.wlang : "", "registration.api_help", void 0, "array"), "light_escape", null, !0)),
                    t.append('<img src="/widgets/amo_callbackhunter/images/api.png"></div>')),
                    t.append('<div class="cbh-install-modal_input-fields_item"><div class="cbh-install-modal_input-fields_label">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("wlang"in i ? i.wlang : "", "settings.cbh_id", void 0, "array"), "light_escape", null, !0)),
                    t.append('</div><div class="cbh-install-modal_input-fields_input">'),
                    new (e._get("interface/controls/input.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        name: "cbh_id",
                        class: "text-input",
                        value: "cbh_id"in i ? i.cbh_id : ""
                    })),
                    t.append('</div></div><div class="cbh-install-modal_input-fields_item"><div class="cbh-install-modal_input-fields_label">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("wlang"in i ? i.wlang : "", "settings.cbh_key", void 0, "array"), "light_escape", null, !0)),
                    t.append('</div><div class="cbh-install-modal_input-fields_input">'),
                    new (e._get("interface/controls/input.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        name: "cbh_key",
                        class: "text-input",
                        value: "cbh_key"in i ? i.cbh_key : ""
                    })),
                    t.append('</div></div><div class="cbh-install-modal_input-fields_item"><div class="cbh-install-modal_input-fields_label">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("wlang"in i ? i.wlang : "", "settings.save_records", void 0, "array"), "light_escape", null, !0)),
                    t.append('</div><div class="cbh-install-modal_input-fields_input">'),
                    new (e._get("interface/controls/switcher.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        name: "save_records",
                        checked: "save_records"in i ? i.save_records : ""
                    })),
                    t.append('</div></div><div class="cbh-install-modal_input-fields_item"><div class="cbh-install-modal_input-fields_label">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("wlang"in i ? i.wlang : "", "settings.sync_chats", void 0, "array"), "light_escape", null, !0)),
                    t.append('</div><div class="cbh-install-modal_input-fields_input">'),
                    new (e._get("interface/controls/switcher.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        name: "sync_chats",
                        checked: "sync_chats"in i ? i.sync_chats : ""
                    })),
                    t.append('</div></div><div class="cbh-install-modal_input-fields_item" '),
                    t.append("installed"in i && i.installed ? "" : "hidden"),
                    t.append('><div class="cbh-install-modal_input-fields_label">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "cbh_install_active_input"), "light_escape", null, !0)),
                    t.append('</div><div class="cbh-install-modal_input-fields_input">'),
                    new (e._get("interface/controls/switcher.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        name: "widget_active",
                        checked: "widget_active"in i ? i.widget_active : ""
                    })),
                    t.append('</div></div></div><div class="cbh-install-modal_buttons" '),
                    t.append("installed"in i && i.installed ? "" : "hidden"),
                    t.append(">"),
                    new (e._get("interface/controls/button.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        text: twig.attr("lang"in i ? i.lang : "", "save"),
                        class_name: "button-input_blue js-cbh-install-save"
                    })),
                    new (e._get("interface/controls/button.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        text: twig.attr("lang"in i ? i.lang : "", "cancel"),
                        class_name: "button-cancel"
                    })),
                    t.append("</div></div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_list_more_cbh_modal"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/list/more_cbh_modal", t)
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
                    e.append('<div class="list__no-items" style="'),
                    "width"in t && t.width && (e.append("min-width: "),
                    e.append(twig.filter.escape(this.env_, "width"in t ? t.width : "", "light_escape", null, !0)),
                    e.append("px;")),
                    e.append(" "),
                    "has_items"in t && t.has_items && e.append("display: none;"),
                    e.append('">'),
                    t.element_type = "",
                    "contacts" != ("selected_element_type"in t ? t.selected_element_type : "") && "companies" != ("selected_element_type"in t ? t.selected_element_type : "") || (t.element_type = ("selected_element_type"in t ? t.selected_element_type : "") + "/"),
                    t.is_unavailable_events = !("is_enabled_events"in t && t.is_enabled_events || "events" != ("entity"in t ? t.entity : "") && "dashboard_superlog" != ("entity"in t ? t.entity : "")),
                    "statsCalls" == ("entity"in t ? t.entity : "") ? t.link = "/stats/calls/" : "user_rights" == ("entity"in t ? t.entity : "") ? t.link = "/settings/users/" : "widgets_design_exceptions" == ("entity"in t ? t.entity : "") ? t.link = "/_support/widgets/design_exceptions/" : "dashboard_superlog" == ("entity"in t ? t.entity : "") ? t.link = "/dashboard/?skip_filter=Y" : t.link = "/" + ("entity"in t ? t.entity : "") + "/list/" + ("element_type"in t ? t.element_type : "") + "?skip_filter=Y",
                    1 == ("is_unavailable_events"in t ? t.is_unavailable_events : "") ? t.empty_message = this.env_.filter("i18n", "Due to inactivity, the events list is unavailable. Once your subscription is paid, it will reactivate in around 1 day") : twig.attr("lang"in t ? t.lang : "", "list_no_" + ("entity"in t ? t.entity : "") + "_results1", void 0, "array") ? t.empty_message = twig.attr("lang"in t ? t.lang : "", "list_no_" + ("entity"in t ? t.entity : "") + "_results1", void 0, "array") : t.empty_message = this.env_.filter("i18n", "Sorry, no elements found"),
                    1 == ("is_unavailable_events"in t ? t.is_unavailable_events : "") ? t.no_reset_link = 1 : twig.attr("lang"in t ? t.lang : "", "list_reset_filter") ? t.link_message = twig.attr("lang"in t ? t.lang : "", "list_reset_filter") : t.link_message = this.env_.filter("i18n", "Show all"),
                    e.append('<p style="color:#f37575;margin-bottom:5px;">'),
                    e.append(twig.filter.escape(this.env_, "empty_message"in t ? t.empty_message : "", "light_escape", null, !0)),
                    e.append(".&nbsp;"),
                    "no_reset_link"in t && t.no_reset_link || (e.append('<a href="'),
                    e.append(twig.filter.escape(this.env_, "link"in t ? t.link : "", "light_escape", null, !0)),
                    e.append('" class="js-list-reset '),
                    "not_navigate"in t && t.not_navigate || e.append("js-navigate-link"),
                    e.append('">'),
                    e.append(twig.filter.escape(this.env_, "link_message"in t ? t.link_message : "", "light_escape", null, !0)),
                    e.append("</a>")),
                    e.append("</p></div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_list_no_items_message"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/list/no_items_message", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e),
                    this.setBlocks({
                        additional_block: twig.bind(this.block_additional_block, this),
                        list_tabs: twig.bind(this.block_list_tabs, this),
                        body: twig.bind(this.block_body, this),
                        body_no_items: twig.bind(this.block_body_no_items, this),
                        body_no_items_message: twig.bind(this.block_body_no_items_message, this),
                        list_footer: twig.bind(this.block_list_footer, this)
                    })
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(e) {
                    return !1
                }
                ,
                t.prototype.render_ = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    "no_list_settings"in i && i.no_list_settings || new (e._get("interface/list/column_settings/wrapper.twig"))(this.env_).render_(t, i),
                    i.has_items = twig.filter.length(this.env_, "items"in i ? i.items : "") || ("is_plug"in i ? i.is_plug : "") || ("no_empty_message"in i ? i.no_empty_message : ""),
                    t.append(this.renderBlock("additional_block", i, n)),
                    t.append('<div class="list__table__holder js-hs-scroller custom-scroll '),
                    t.append(twig.filter.escape(this.env_, "list_table_holder_class_name"in i ? i.list_table_holder_class_name : "", "light_escape", null, !0)),
                    t.append(" "),
                    "is_plug"in i && i.is_plug && "mail" == ("entity"in i ? i.entity : "") && t.append("mail-preload-plug"),
                    t.append('" '),
                    "list_table_holder_id"in i && i.list_table_holder_id && (t.append('id="'),
                    t.append(twig.filter.escape(this.env_, "list_table_holder_id"in i ? i.list_table_holder_id : "", "light_escape", null, !0)),
                    t.append('"')),
                    t.append(">"),
                    t.append(this.renderBlock("list_tabs", i, n)),
                    t.append('<div class="js-scroll-container list__table '),
                    t.append(twig.filter.escape(this.env_, "list_table_class_name"in i ? i.list_table_class_name : "", "light_escape", null, !0)),
                    t.append(" "),
                    "has_items"in i && i.has_items || t.append("list__table-no-items"),
                    t.append('" id="'),
                    "list_table_id"in i && i.list_table_id ? t.append(twig.filter.escape(this.env_, "list_table_id"in i ? i.list_table_id : "", "light_escape", null, !0)) : t.append("list_table"),
                    t.append('" '),
                    "width"in i && i.width && (t.append('style="min-width: '),
                    t.append(twig.filter.escape(this.env_, "width"in i ? i.width : "", "light_escape", null, !0)),
                    t.append('px"')),
                    t.append(">"),
                    "has_items"in i && i.has_items ? (new (e._get("interface/list/col_group.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        fields: "fields"in i ? i.fields : "",
                        not_show_cbx: "not_show_chbx"in i ? i.not_show_chbx : "",
                        has_markers: "has_markers"in i ? i.has_markers : ""
                    })),
                    new (e._get("interface/list/header.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        fields: "fields"in i ? i.fields : "",
                        not_show_chbx: "not_show_chbx"in i ? i.not_show_chbx : "",
                        has_markers: "has_markers"in i ? i.has_markers : ""
                    })),
                    t.append(this.renderBlock("body", i, n))) : (new (e._get("interface/list/header.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        fields: "fields"in i ? i.fields : "",
                        not_show_chbx: "not_show_chbx"in i ? i.not_show_chbx : "",
                        no_resize: !0
                    })),
                    t.append(this.renderBlock("body_no_items", i, n))),
                    t.append("</div>"),
                    t.append(this.renderBlock("body_no_items_message", i, n)),
                    t.append("</div>"),
                    t.append(this.renderBlock("list_footer", i, n))
                }
                ,
                t.prototype.block_additional_block = function(e, t, i) {
                    i = void 0 === i ? {} : i
                }
                ,
                t.prototype.block_list_tabs = function(e, t, i) {
                    i = void 0 === i ? {} : i
                }
                ,
                t.prototype.block_body = function(e, t, i) {
                    i = void 0 === i ? {} : i
                }
                ,
                t.prototype.block_body_no_items = function(e, t, i) {
                    i = void 0 === i ? {} : i
                }
                ,
                t.prototype.block_body_no_items_message = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    new (e._get("interface/list/no_items_message.twig"))(this.env_).render_(t, i)
                }
                ,
                t.prototype.block_list_footer = function(e, t, i) {
                    i = void 0 === i ? {} : i
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_list_table"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/list/table", t)
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
                    t.append('<div class="cell-edit__buttons">'),
                    "linked_new" == twig.attr("field"in i ? i.field : "", "template") && (i.text = this.env_.filter("i18n", "Create")),
                    new (e._get("interface/common/modal/actions.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        button_class: "js-cell-edit__button-save button-input-disabled",
                        button_cancel_class: "js-cell-edit__button-cancel",
                        button_text: "text"in i ? i.text : ""
                    })),
                    t.append("</div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_list_cells_edit_action_buttons"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/list/cells_edit/action_buttons", t)
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
                    "class_name_span"in t && t.class_name_span || !("class_name"in t) || !t.class_name ? (t.class_name = "class_name"in t ? twig.filter.def("class_name"in t ? t.class_name : "", "list-row__cell-edit-buttons") : "list-row__cell-edit-buttons",
                    t.class_name_span = "class_name_span"in t ? twig.filter.def("class_name_span"in t ? t.class_name_span : "", "js-list-row__cell-edit") : "js-list-row__cell-edit") : t.class_name_span = "js-list-row__cell-edit_loss-reason",
                    e.append('<div class="'),
                    e.append(twig.filter.escape(this.env_, "class_name"in t ? t.class_name : "", "light_escape", null, !0)),
                    e.append('"><span class="'),
                    e.append(twig.filter.escape(this.env_, "class_name_span"in t ? t.class_name_span : "", "light_escape", null, !0)),
                    e.append(' list-row__cell-edit-button" title="'),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Edit"), "light_escape", null, !0)),
                    e.append('"><svg class="svg-icon list-row__cell-edit-icon '),
                    e.append(twig.filter.escape(this.env_, "svg_icon_class_name"in t ? twig.filter.def("svg_icon_class_name"in t ? t.svg_icon_class_name : "", "list-row__cell-edit-icon_pencil") : "list-row__cell-edit-icon_pencil", "light_escape", null, !0)),
                    e.append(" svg-"),
                    e.append(twig.filter.escape(this.env_, "svg_icon"in t ? twig.filter.def("svg_icon"in t ? t.svg_icon : "", "common--edit-pencil") : "common--edit-pencil", "light_escape", null, !0)),
                    e.append('-dims"><use xlink:href="#'),
                    e.append(twig.filter.escape(this.env_, "svg_icon"in t ? twig.filter.def("svg_icon"in t ? t.svg_icon : "", "common--edit-pencil") : "common--edit-pencil", "light_escape", null, !0)),
                    e.append('"></use></svg></span>'),
                    "date_of_nearest_task" == ("field_code"in t ? t.field_code : "") && twig.attr("value"in t ? t.value : "", "date") && (e.append('<span class="js-list-row__cell-close-task list-row__cell-edit-button" title="'),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Close task"), "light_escape", null, !0)),
                    e.append('"><span class="list-row__cell-edit-icon list-row__cell-edit-icon_close-task"></span></span>')),
                    e.append("</div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_list_cells_edit_buttons"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/list/cells_edit/buttons", t)
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
                    t.append('<div class="cell-edit__inner"><div class="cell-edit__form '),
                    "reset_styles"in i && i.reset_styles || t.append("card-holder__fields"),
                    t.append(' custom-scroll">'),
                    twig.attr("field"in i ? i.field : "", "multiple") ? new (e._get("interface/list/cells_edit/multiple/items.twig"))(this.env_).render_(t, i) : new (e._get("interface/list/cells_edit/item.twig"))(this.env_).render_(t, i),
                    t.append("</div>"),
                    twig.attr("field"in i ? i.field : "", "multiple") || new (e._get("interface/list/cells_edit/action_buttons.twig"))(this.env_).render_(t, i),
                    t.append("</div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_list_cells_edit_index"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/list/cells_edit/index", t)
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
                    t.append('<div class="linked-form__field linked-form__field-'),
                    t.append(twig.filter.escape(this.env_, twig.attr("field"in i ? i.field : "", "template"), "light_escape", null, !0)),
                    t.append('"><div class="linked-form__field__value '),
                    "name" == twig.attr("field"in i ? i.field : "", "template") && t.append("linked-form__field__value_name"),
                    t.append('">'),
                    "smart_address" != twig.attr("field"in i ? i.field : "", "template") || twig.attr("field"in i ? i.field : "", "sub_code") ? new (e._get("interface/list/cells_edit/fields/" + twig.attr("field"in i ? i.field : "", "template") + ".twig"))(this.env_).render_(t, twig.extend({}, i, "values"in i ? i.values : "")) : new (e._get("interface/list/cells_edit/fields/smart_address.twig"))(this.env_).render_(t, i),
                    t.append("</div></div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_list_cells_edit_item"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/list/cells_edit/item", t)
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
                    e.append('<div class="column_settings__columns_item" data-field-template="'),
                    e.append(twig.filter.escape(this.env_, twig.attr("field"in t ? t.field : "", "template"), "light_escape", null, !0)),
                    e.append('" data-field-code="'),
                    e.append(twig.filter.escape(this.env_, twig.attr("field"in t ? t.field : "", "code"), "light_escape", null, !0)),
                    e.append('"><div class="column_settings__columns_item__inner"><span class="column_settings__columns_item__icon icon icon-v-dots"></span><span class="column_settings__columns_item__title">'),
                    e.append(twig.filter.escape(this.env_, twig.attr("field"in t ? t.field : "", "title"), "light_escape", null, !0)),
                    e.append("</span></div></div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_list_column_settings_item"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/list/column_settings/item", t)
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
                    t.append('<div id="column_settings" class="column_settings"><div class="column_settings__head head_2">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Available columns"), "light_escape", null, !0)),
                    t.append('</div><div class="column_settings__scroll-holder"><div class="column_settings__columns_list clearfix custom-scroll" id="list_column_settings_holder">'),
                    i._parent = i;
                    var a = "fields"in i ? i.fields : ""
                      , l = {
                        index0: 0,
                        index: 1,
                        first: !0
                    };
                    if (twig.countable(a)) {
                        var r = twig.count(a);
                        l.revindex0 = r - 1,
                        l.revindex = r,
                        l.length = r,
                        l.last = 1 === r
                    }
                    twig.forEach(a, (function(n, a) {
                        i._key = a,
                        i.field = n,
                        i.without_visible_flag = !twig.attr("field"in i ? i.field : "", "is_visible", void 0, void 0, !0),
                        !twig.attr("field"in i ? i.field : "", "shown") && ("without_visible_flag"in i && i.without_visible_flag || "items" != twig.attr("field"in i ? i.field : "", "default_code")) && new (e._get("interface/list/column_settings/item.twig"))(this.env_).render_(t, twig.extend({}, i, "field"in i ? i.field : "")),
                        ++l.index0,
                        ++l.index,
                        l.first = !1,
                        l.length && (--l.revindex0,
                        --l.revindex,
                        l.last = 0 === l.revindex0)
                    }
                    ), this),
                    t.append('</div><div class="scroller__track_v" style="bottom:20px;top:20px;"><div class="scroller__bar scroller__bar_v"></div></div></div><div class="column_settings__done_wrapper">'),
                    twig.attr("lang"in i ? i.lang : "", "column_settings_done") ? i.done_text = twig.attr("lang"in i ? i.lang : "", "column_settings_done") : i.done_text = this.env_.filter("i18n", "Done"),
                    twig.attr("lang"in i ? i.lang : "", "column_settings_cancel") ? i.cancel_text = twig.attr("lang"in i ? i.lang : "", "column_settings_cancel") : i.cancel_text = this.env_.filter("i18n", "Cancel"),
                    new (e._get("interface/controls/button.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        text: "done_text"in i ? i.done_text : "",
                        id: "column_settings__submit",
                        tab_index: "-1",
                        class_name: "button-done-input",
                        disabled: !0
                    })),
                    new (e._get("interface/controls/cancel_button.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        id: "columns_settings_cancel_btn",
                        text: "cancel_text"in i ? i.cancel_text : "",
                        class_name: "column_settings__done_wrapper__cancel"
                    })),
                    twig.attr("user_rights"in i ? i.user_rights : "", "is_admin") && (t.append('\x3c!----\x3e<div class="column_settings__done_wrapper__for-all">'),
                    new (e._get("interface/controls/checkbox.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        id: "columns_settings_for_all",
                        class_name: "column_settings__done_wrapper__for-all__checkbox",
                        text: twig.attr("lang"in i ? i.lang : "", "column_settings_for_all")
                    })),
                    t.append("</div>")),
                    t.append('<div class="column_settings__delete_item"><span class="icon icon-trash"></span></div></div></div>')
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_list_column_settings_wrapper"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/list/column_settings/wrapper", t)
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
                    t.tags_count = twig.filter.length(this.env_, "items"in t ? t.items : ""),
                    t._parent = t;
                    var n = "items"in t ? t.items : ""
                      , a = {
                        index0: 0,
                        index: 1,
                        first: !0
                    };
                    if (twig.countable(n)) {
                        var l = twig.count(n);
                        a.revindex0 = l - 1,
                        a.revindex = l,
                        a.length = l,
                        a.last = 1 === l
                    }
                    twig.forEach(n, (function(i, n) {
                        t._key = n,
                        t.tag = i,
                        e.append('<span data-id="'),
                        e.append(twig.filter.escape(this.env_, twig.attr("tag"in t ? t.tag : "", "id"), "light_escape", null, !0)),
                        e.append('" data-rest="'),
                        e.append(twig.filter.escape(this.env_, ("tags_count"in t ? t.tags_count : "") - twig.attr(a, "index"), "light_escape", null, !0)),
                        e.append('" class="js-tag list-row__template-name__table-wrapper__tags__inner__tag"><span>'),
                        e.append(twig.filter.escape(this.env_, twig.attr("tag"in t ? t.tag : "", "label"), "light_escape", null, !0)),
                        e.append("</span></span>"),
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
                    return "interface_list_common_fast_tags"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/list/common/fast_tags", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e),
                    this.setBlocks({
                        static: twig.bind(this.block_static, this)
                    })
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(e) {
                    return !1
                }
                ,
                t.prototype.render_ = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    t.append(this.renderBlock("static", i, n)),
                    t.append('<div id="list__footer" class="list__footer"><div class="list__footer__items-pagination" id="list_pagination"'),
                    twig.attr("pagination"in i ? i.pagination : "", "only_rows") ? (t.append(' data-has-next-page="'),
                    t.append(twig.filter.escape(this.env_, twig.attr("pagination"in i ? i.pagination : "", "has_next_page"), "light_escape", null, !0)),
                    t.append('" ')) : (t.append(' data-max-page="'),
                    t.append(twig.filter.escape(this.env_, twig.attr("pagination"in i ? i.pagination : "", "total"), "light_escape", null, !0)),
                    t.append('" ')),
                    t.append(">"),
                    new (e._get("interface/list/common/pagination.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        page: twig.attr("pagination"in i ? i.pagination : "", "current"),
                        max_page: twig.attr("pagination"in i ? i.pagination : "", "total"),
                        has_next_page: twig.attr("pagination"in i ? i.pagination : "", "has_next_page"),
                        only_rows: twig.attr("pagination"in i ? i.pagination : "", "only_rows")
                    })),
                    t.append("</div></div>")
                }
                ,
                t.prototype.block_static = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    e.append(twig.filter.escape(this.env_, this.env_.invoke("inject_static", ["reports_events.php"], this), "light_escape", null, !0))
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_list_common_footer"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/list/common/footer", t)
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
                    i.max_links_count = 7,
                    ("page"in i ? i.page : "") > 4 && ("page"in i ? i.page : "") < ("max_page"in i ? i.max_page : "") - 3 ? (i.start_page = ("page"in i ? i.page : "") - 2,
                    i.end_page = Number("page"in i ? i.page : "") + Number(2)) : ("page"in i ? i.page : "") > ("max_page"in i ? i.max_page : "") - 5 ? (i.start_page = ("max_page"in i ? i.max_page : "") - 4,
                    i.end_page = "max_page"in i ? i.max_page : "") : (i.start_page = 1,
                    i.end_page = 5),
                    ("start_page"in i ? i.start_page : "") < 1 && (i.start_page = 1),
                    (("max_page"in i ? i.max_page : "") > 1 || "only_rows"in i && i.only_rows) && (t.append('<div class="pagination-buttons">'),
                    new (e._get("interface/controls/button/list_action.twig"))(this.env_).render_(t, {
                        class_name: "js-pagination-prev",
                        type: "pagination",
                        svg_class_name: "common--bold-arrow"
                    }),
                    new (e._get("interface/controls/button/list_action.twig"))(this.env_).render_(t, {
                        class_name: "js-pagination-next",
                        type: "pagination",
                        svg_class_name: "common--bold-arrow"
                    }),
                    new (e._get("interface/controls/button.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        class_name: "js-pagination-prev pagination-buttons__btn",
                        icon_class_name: "icon-page-prev"
                    })),
                    new (e._get("interface/controls/button.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        class_name: "js-pagination-next pagination-buttons__btn",
                        icon_class_name: "icon-page-next"
                    })),
                    t.append("</div>")),
                    t.append('<div class="pagination-pages">'),
                    ("start_page"in i ? i.start_page : "") > 1 && (t.append('<div class="pagination-link__wrapper"><a href="#" class="pagination-link js-pagination-link" data-page="1">1</a></div>'),
                    ("max_page"in i ? i.max_page : "") >= ("max_links_count"in i ? i.max_links_count : "") && ("start_page"in i ? i.start_page : "") > 2 && t.append('<div class="pagination-link__wrapper"><span class="pagination-ellipsis">...</span></div>')),
                    ("max_page"in i ? i.max_page : "") > 1) {
                        i._parent = i;
                        var a = twig.range("start_page"in i ? i.start_page : "", "end_page"in i ? i.end_page : "");
                        twig.forEach(a, (function(e, n) {
                            i._key = n,
                            i.p = e,
                            t.append('<div class="pagination-link__wrapper '),
                            ("p"in i ? i.p : "") == ("page"in i ? i.page : "") && t.append("pagination-link__wrapper-active"),
                            t.append('"><a href="#" class="pagination-link js-pagination-link" data-page="'),
                            t.append(twig.filter.escape(this.env_, "p"in i ? i.p : "", "light_escape", null, !0)),
                            t.append('">'),
                            t.append(twig.filter.escape(this.env_, "p"in i ? i.p : "", "light_escape", null, !0)),
                            t.append("</a></div>")
                        }
                        ), this)
                    }
                    ("end_page"in i ? i.end_page : "") < ("max_page"in i ? i.max_page : "") && (("max_page"in i ? i.max_page : "") >= ("max_links_count"in i ? i.max_links_count : "") && ("end_page"in i ? i.end_page : "") < ("max_page"in i ? i.max_page : "") - 1 && t.append('<div class="pagination-link__wrapper"><span class="pagination-ellipsis">...</span></div>'),
                    t.append('<div class="pagination-link__wrapper"><a href="#" class="pagination-link js-pagination-link" data-page="'),
                    t.append(twig.filter.escape(this.env_, "max_page"in i ? i.max_page : "", "light_escape", null, !0)),
                    t.append('">'),
                    t.append(twig.filter.escape(this.env_, "max_page"in i ? i.max_page : "", "light_escape", null, !0)),
                    t.append("</a></div>")),
                    t.append("</div>"),
                    (("max_page"in i ? i.max_page : "") > 1 || "only_rows"in i && i.only_rows) && t.append('<div class="pagination__descr"><div class="pagination__descr__item pagination__descr__item-mac">← Alt →</div><div class="pagination__descr__item pagination__descr__item-win">← Ctrl →</div></div>'),
                    twig.attr("pagination"in i ? i.pagination : "", "available_rows_count") && twig.attr("pagination"in i ? i.pagination : "", "selected_rows_count_value") && (i.items = [],
                    i._parent = i,
                    a = twig.attr("pagination"in i ? i.pagination : "", "available_rows_count"),
                    twig.forEach(a, (function(e, t) {
                        i._key = t,
                        i.row_count = e,
                        i.items = twig.filter.merge("items"in i ? i.items : "", [{
                            id: "row_count"in i ? i.row_count : "",
                            option: "row_count"in i ? i.row_count : "",
                            value: "row_count"in i ? i.row_count : ""
                        }])
                    }
                    ), this),
                    t.append('<div class="pagination__rows"><div class="pagination__rows-label"><p>'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Show rows"), "light_escape", null, !0)),
                    t.append('</p></div><div class="pagination__rows-select">'),
                    new (e._get("interface/controls/select.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        selected: twig.attr("pagination"in i ? i.pagination : "", "selected_rows_count_value"),
                        items: "items"in i ? i.items : "",
                        input_special_class: "js-pagination-rows-input"
                    })),
                    t.append("</div></div>"))
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_list_common_pagination"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/list/common/pagination", t)
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
                    e.append('<ul class="list__tabs '),
                    "hidden"in t && t.hidden && e.append("h-hidden"),
                    e.append('" id="list__tabs"><li class="list__tab-item"><a href="'),
                    e.append(twig.filter.escape(this.env_, "url"in t ? t.url : "", "light_escape", null, !0)),
                    e.append('" class="list__tab-link js-navigate-link navigate-link-nodecor '),
                    twig.attr("active_tabs"in t ? t.active_tabs : "", "leads") && e.append("list__tab-link_active"),
                    e.append('" data-list-type="leads">'),
                    "is_plug"in t && t.is_plug ? (e.append('<span class="plug__item__line" style="width: '),
                    e.append(twig.filter.escape(this.env_, Number(70) + Number(twig.functions.random(this.env_, 30)), "light_escape", null, !0)),
                    e.append('px"></span>')) : e.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "All leads"), "light_escape", null, !0)),
                    e.append('</a></li><li class="list__tab-item"><a href="'),
                    e.append(twig.filter.escape(this.env_, "url"in t ? t.url : "", "light_escape", null, !0)),
                    e.append('unsorted/" class="list__tab-link js-navigate-link navigate-link-nodecor '),
                    twig.attr("active_tabs"in t ? t.active_tabs : "", "unsorted") && e.append("list__tab-link_active"),
                    e.append('" data-list-type="unsorted">'),
                    "is_plug"in t && t.is_plug ? (e.append('<span class="plug__item__line" style="width: '),
                    e.append(twig.filter.escape(this.env_, Number(70) + Number(twig.functions.random(this.env_, 30)), "light_escape", null, !0)),
                    e.append('px"></span>')) : e.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Unsorted"), "light_escape", null, !0)),
                    e.append('<span class="list__tab-counter h-hidden" id="list__tab-counter_unsorted"></span></a></li></ul>')
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_list_common_tabs"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/list/common/tabs", t)
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
                    e.append('<ul class="unsorted-list__filter" id="unsorted-list__filter"></ul>')
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_list_header_cells_unsorted_categories"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !0
                }
                ,
                e._add("interface/list/header_cells/unsorted_categories", t)
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
                    e.append('<li class="unsorted-list__filter-item unsorted-list__filter-item_total '),
                    "show_all"in t && t.show_all && e.append("unsorted-list__filter-item_active"),
                    e.append('" data-category="total"><span class="unsorted-list__category-title">'),
                    e.append(twig.filter.escape(this.env_, twig.attr("lang"in t ? t.lang : "", "Requests"), "light_escape", null, !0)),
                    e.append(':&nbsp;</span><span class="unsorted-list__category-count">'),
                    e.append(twig.filter.escape(this.env_, "total"in t ? t.total : "", "light_escape", null, !0)),
                    e.append("</span></li>"),
                    t._parent = t;
                    var n = "categories"in t ? t.categories : "";
                    twig.forEach(n, (function(i, n) {
                        t._key = n,
                        t.cat = i,
                        e.append('<li class="unsorted-list__filter-item unsorted-list__filter-item_'),
                        e.append(twig.filter.escape(this.env_, twig.attr("cat"in t ? t.cat : "", "name"), "light_escape", null, !0)),
                        e.append(" "),
                        !twig.attr("cat"in t ? t.cat : "", "active") || "show_all"in t && t.show_all || e.append("unsorted-list__filter-item_active"),
                        e.append(" "),
                        0 == twig.attr("cat"in t ? t.cat : "", "count") && e.append("unsorted-list__filter-item_empty"),
                        e.append('" data-category="'),
                        e.append(twig.filter.escape(this.env_, twig.attr("cat"in t ? t.cat : "", "name"), "light_escape", null, !0)),
                        e.append('"><span class="unsorted-list__category-title">'),
                        e.append(twig.filter.escape(this.env_, twig.attr("cat"in t ? t.cat : "", "lang"), "light_escape", null, !0)),
                        e.append(':&nbsp;</span><span class="unsorted-list__category-count">'),
                        e.append(twig.filter.escape(this.env_, twig.attr("cat"in t ? t.cat : "", "count"), "light_escape", null, !0)),
                        e.append("</span></li>")
                    }
                    ), this)
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_list_header_cells_unsorted_filter"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/list/header_cells/unsorted_filter", t)
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
                    if (i = void 0 === i ? {} : i,
                    "count"in t && t.count) {
                        t._parent = t;
                        var n = twig.range(1, "count"in t ? t.count : "");
                        twig.forEach(n, (function(i, n) {
                            t._key = n,
                            t.i = i,
                            e.append('<div class="operday__list-cell__part-name"><div class="grey_line" style="width: '),
                            e.append(twig.filter.escape(this.env_, Number(10) + Number(twig.functions.random(this.env_, 25)), "light_escape", null, !0)),
                            e.append('%"></div></div>')
                        }
                        ), this)
                    } else
                        t._parent = t,
                        n = "parts"in t ? t.parts : "",
                        twig.forEach(n, (function(i, n) {
                            t._key = n,
                            t.part = i,
                            e.append('<div class="operday__list-cell__part-name">'),
                            e.append(twig.filter.escape(this.env_, this.env_.filter("i18n", twig.attr("part"in t ? t.part : "", "name")), "light_escape", null, !0)),
                            e.append(" "),
                            twig.attr("part"in t ? t.part : "", "count") && (e.append("("),
                            e.append(twig.filter.escape(this.env_, twig.attr("part"in t ? t.part : "", "count"), "light_escape", null, !0)),
                            e.append(")")),
                            e.append("</div>")
                        }
                        ), this)
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_list_operday_entity_detail_name"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/list/operday/entity_detail_name", t)
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
                    if (i = void 0 === i ? {} : i,
                    "count"in t && t.count) {
                        t._parent = t;
                        var n = twig.range(1, "count"in t ? t.count : "");
                        twig.forEach(n, (function(i, n) {
                            t._key = n,
                            t.i = i,
                            e.append('<div class="operday__list-cell__part-value"><div class="grey_line" style="width: 80%"></div></div>')
                        }
                        ), this)
                    } else
                        t._parent = t,
                        n = "parts"in t ? t.parts : "",
                        twig.forEach(n, (function(i, n) {
                            t._key = n,
                            t.part = i,
                            e.append('<div class="operday__list-cell__part-value">'),
                            e.append(twig.filter.escape(this.env_, "part"in t ? t.part : "", "light_escape", null, !0)),
                            e.append("</div>")
                        }
                        ), this)
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_list_operday_entity_detail_value"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/list/operday/entity_detail_value", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e),
                    this.setBlocks({
                        top_block: twig.bind(this.block_top_block, this),
                        body_block: twig.bind(this.block_body_block, this)
                    })
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(t) {
                    return e._get("interface/common/tip.twig")
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    this.getParent(t).render_(e, t, twig.extend({}, this.getBlocks(), i))
                }
                ,
                t.prototype.block_top_block = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    t.append('<div class="checkboxes-search__opening-list checkboxes-search__list-tips filter__custom_settings__item">'),
                    new (e._get("interface/controls/checkboxes_search/opening_list.twig"))(this.env_).render_(t, i),
                    t.append("</div>")
                }
                ,
                t.prototype.block_body_block = function(e, t, i) {
                    i = void 0 === i ? {} : i
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_list_tips_events"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/list/tips/events", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e),
                    this.setBlocks({
                        bottom_block: twig.bind(this.block_bottom_block, this)
                    })
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(t) {
                    return e._get("interface/list/tips/sort.twig")
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    this.getParent(t).render_(e, t, twig.extend({}, this.getBlocks(), i))
                }
                ,
                t.prototype.block_bottom_block = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    e.append('<div class="tips-item tips-item_field-switcher">'),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Filter"), "light_escape", null, !0)),
                    e.append("</div>"),
                    t._parent = t;
                    var n = twig.attr(twig.attr("field"in t ? t.field : "", "template_data"), "fields");
                    twig.forEach(n, (function(i, n) {
                        t.group_key = n,
                        t.group_fields = i,
                        "group_key"in t && t.group_key && (e.append('<div class="tips-item tips-item_divider">'),
                        e.append(twig.filter.escape(this.env_, this.env_.filter("i18n", twig.filter.capitalize(this.env_, "group_key"in t ? t.group_key : "")), "light_escape", null, !0)),
                        e.append("</div>"));
                        var a = "group_fields"in t ? t.group_fields : "";
                        twig.forEach(a, (function(i, n) {
                            t._key = n,
                            t.item = i,
                            e.append('<div class="tips-item js-tips-item '),
                            twig.attr("item"in t ? t.item : "", "id") == twig.attr(twig.attr("field"in t ? t.field : "", "params"), "code") && e.append("tips-item_selected"),
                            e.append('" data-id="'),
                            e.append(twig.filter.escape(this.env_, twig.attr("item"in t ? t.item : "", "id"), "light_escape", null, !0)),
                            e.append('">'),
                            e.append(twig.filter.escape(this.env_, twig.filter.capitalize(this.env_, twig.attr("item"in t ? t.item : "", "title")), "light_escape", null, !0)),
                            e.append("</div>")
                        }
                        ), this)
                    }
                    ), this)
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_list_tips_field_switcher"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/list/tips/field_switcher", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e),
                    this.setBlocks({
                        bottom_block: twig.bind(this.block_bottom_block, this)
                    })
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(t) {
                    return e._get("interface/list/tips/sort.twig")
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    this.getParent(t).render_(e, t, twig.extend({}, this.getBlocks(), i))
                }
                ,
                t.prototype.block_bottom_block = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    "field"in i && i.field && (t.append('<div class="list-sort-dialog__actions"><div class="tips-item tips-item_filter">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Filter"), "light_escape", null, !0)),
                    t.append("</div>"),
                    twig.attr(twig.attr("field"in i ? i.field : "", "params"), "custom_field") ? new (e._get("interface/filter/common/fields_custom.twig"))(this.env_).render_(t, {
                        field: twig.attr("field"in i ? i.field : "", "template_data")
                    }) : new (e._get("interface/filter/common/fields.twig"))(this.env_).render_(t, {
                        filter: twig.attr("field"in i ? i.field : "", "template_data"),
                        lang: "lang"in i ? i.lang : ""
                    }),
                    new (e._get("interface/common/modal/actions.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        button_class: "js-list-sort-dialog__button-apply button-input-disabled",
                        button_text: this.env_.filter("i18n", "Apply"),
                        button_cancel_class: "js-list-sort-dialog__button-cancel"
                    })),
                    t.append("</div>"))
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_list_tips_filter"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/list/tips/filter", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e),
                    this.setBlocks({
                        top_block: twig.bind(this.block_top_block, this)
                    })
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(t) {
                    return e._get("interface/common/tip.twig")
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    this.getParent(t).render_(e, t, twig.extend({}, this.getBlocks(), i))
                }
                ,
                t.prototype.block_top_block = function(e, t, i) {
                    i = void 0 === i ? {} : i
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_list_tips_invoice_tip"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/list/tips/invoice_tip", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e),
                    this.setBlocks({
                        top_block: twig.bind(this.block_top_block, this)
                    })
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(t) {
                    return e._get("interface/common/tip.twig")
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    this.getParent(t).render_(e, t, twig.extend({}, this.getBlocks(), i))
                }
                ,
                t.prototype.block_top_block = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    twig.attr("items"in t ? t.items : "", "length") && (e.append('<div class="tips-item tips-item_sort">'),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Sorting"), "light_escape", null, !0)),
                    e.append("</div>"))
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_list_tips_sort"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/list/tips/sort", t)
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
                    e.append('<div class="content-table__item__inner">'),
                    "value"in t && t.value && twig.attr("value"in t ? t.value : "", "text") && (e.append('<span class="block-selectable" style="color: '),
                    e.append(2 == twig.attr("value"in t ? t.value : "", "type") ? "#24BC8C" : "#e6ae00"),
                    e.append('">'),
                    2 == twig.attr("value"in t ? t.value : "", "type") ? e.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Run Salesbot"), "light_escape", null, !0)) : e.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Chat template"), "light_escape", null, !0)),
                    e.append(':&nbsp;</span><span class="block-selectable">'),
                    e.append(twig.filter.escape(this.env_, twig.attr("value"in t ? t.value : "", "text"), "light_escape", null, !0)),
                    e.append("</span>")),
                    e.append("</div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_list_cells_action"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/list/cells/action", t)
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
                    i.PUBLISH_READY_STATUS = 3,
                    (!("value"in i) || !i.value) && twig.attr("item"in i ? i.item : "", "id") && twig.attr("item"in i ? i.item : "", "ad_request_status") == ("PUBLISH_READY_STATUS"in i ? i.PUBLISH_READY_STATUS : "")) {
                        var a = t;
                        t = new twig.StringBuffer,
                        new (e._get("interface/controls/button.twig"))(this.env_).render_(t, twig.extend({}, i, {
                            class_name: "list-row__template-name__right-button js-ad-request-row-publish-btn list-row__template-name__name-ad-request-button",
                            svg_class_name: "common--publish-ads-manager",
                            text: twig.filter.trim(this.env_.filter("i18n", "Publish")),
                            title: twig.filter.trim(this.env_.filter("i18n", "Publish"))
                        })),
                        i.value = new twig.Markup(t.toString()),
                        t = a,
                        i.should_be_raw = !0
                    }
                    new (e._get("interface/list/cells/text.twig"))(this.env_).render_(t, i)
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_list_cells_ad_placement_dates"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/list/cells/ad_placement_dates", t)
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
                    t.currency = twig.attr("field"in t ? t.field : "", "currency", void 0, void 0, !0) ? twig.filter.def(twig.attr("field"in t ? t.field : "", "currency"), null) : null,
                    t.is_short = !1,
                    this.env_.test("iterable", "value"in t ? t.value : "") ? (t.currency = twig.attr("value"in t ? t.value : "", "currency_code"),
                    t.value = twig.attr("value"in t ? t.value : "", "value"),
                    t.is_short = "" == ("currency"in t ? t.currency : "")) : "value"in t && "value"in t && t.value || !(twig.attr("item"in t ? t.item : "", "id") > 0) || (t.value = 0),
                    e.append('<div class="content-table__item__inner"><span class="block-selectable">'),
                    ("value"in t ? t.value : "") + "" != "" && e.append(twig.filter.escape(this.env_, this.env_.filter("format_billing_price", "value"in t ? t.value : "", "currency"in t ? t.currency : ""), "light_escape", null, !0)),
                    e.append("</span></div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_list_cells_billing_price"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/list/cells/billing_price", t)
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
                    e.append('<div class="content-table__item__inner">'),
                    "value"in t && "value"in t && t.value && twig.attr("value"in t ? t.value : "", "name") ? twig.attr("value"in t ? t.value : "", "url") ? (e.append('<a href="'),
                    e.append(twig.filter.escape(this.env_, twig.attr("value"in t ? t.value : "", "url"), "light_escape", null, !0)),
                    e.append('" title="'),
                    e.append(twig.filter.escape(this.env_, twig.attr("value"in t ? t.value : "", "name"), "light_escape", null, !0)),
                    e.append('" target="_blank">'),
                    e.append(twig.filter.escape(this.env_, twig.attr("value"in t ? t.value : "", "name"), "light_escape", null, !0)),
                    e.append("</a>")) : (e.append('<span class="block-selectable">'),
                    e.append(twig.filter.escape(this.env_, twig.attr("value"in t ? t.value : "", "name"), "light_escape", null, !0)),
                    e.append("</span>")) : e.append('<span class="block-selectable">&nbsp;</span>'),
                    e.append("</div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_list_cells_blank_link"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/list/cells/blank_link", t)
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
                    t.append('<div class="content-table__item__inner content-table__item__inner-bots_name">'),
                    0 == twig.attr("item"in i ? i.item : "", "id") ? (t.append('<span style="display: flex;"><span class="std-link">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("value"in i ? i.value : "", "create"), "light_escape", null, !0)),
                    t.append("</span>"),
                    !twig.attr("_account_features"in i ? i._account_features : "", "is_customization_for_global") && twig.attr("value"in i ? i.value : "", "bot") && (t.append("<span>&nbsp;"),
                    t.append(twig.filter.escape(this.env_, twig.attr("value"in i ? i.value : "", "bot"), "light_escape", null, !0)),
                    t.append("</span>")),
                    t.append("<span>&nbsp;"),
                    t.append(twig.filter.escape(this.env_, twig.filter.lower(this.env_, this.env_.filter("i18n", "Or")), "light_escape", null, !0)),
                    t.append('&nbsp;</span><label class="js-import-bot" style="display: flex;"><span class="std-link">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "import (verb)"), "light_escape", null, !0)),
                    t.append("</span><span>"),
                    twig.attr("_account_features"in i ? i._account_features : "", "is_customization_for_global") && (t.append('<span class="std-link std-link-nodecor">&nbsp;'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "a new bot"), "light_escape", null, !0)),
                    t.append("</span>")),
                    t.append("</span>"),
                    new (e._get("interface/controls/input.twig"))(this.env_).render_(t, {
                        class_name: "hidden js-import-bot-input",
                        additional_data: 'data-type="BOT_TYPE_REGULAR" accept=".json"',
                        type: "file"
                    }),
                    t.append("</label></span>")) : (t.append('<a href="#" class="js-navigate-link list-row__bots-name__table-wrapper__bots_name-link" title="'),
                    t.append(twig.filter.escape(this.env_, "value"in i ? i.value : "", "light_escape", null, !0)),
                    t.append('">'),
                    t.append(twig.filter.escape(this.env_, "value"in i ? i.value : "", "light_escape", null, !0)),
                    t.append("</a>")),
                    t.append("</div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_list_cells_bots_name"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/list/cells/bots_name", t)
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
                    null === ("value"in i ? i.value : ""))
                        new (e._get("interface/list/cells/plug.twig"))(this.env_).render_(t, []);
                    else {
                        if (t.append('<div class="content-table__item__inner" title="'),
                        this.env_.test("iterable", "value"in i ? i.value : "") ? t.append("") : t.append(twig.filter.escape(this.env_, "value"in i ? i.value : "", "light_escape", null, !0)),
                        t.append('">'),
                        this.env_.test("iterable", "value"in i ? i.value : "")) {
                            if (t.append('<div class="list-row__cell-template-bots_triggers-items"><div class="list-row__cell-template-bots_triggers-items-inner">'),
                            i.items_count = twig.filter.length(this.env_, "value"in i ? i.value : ""),
                            "items_count"in i && i.items_count) {
                                t.append('<span class="list-row__cell-template-bots_triggers-items-item-more js-bots-triggers-item-more">+'),
                                t.append(twig.filter.escape(this.env_, "items_count"in i ? i.items_count : "", "light_escape", null, !0)),
                                t.append("</span>"),
                                i._parent = i;
                                var a = "value"in i ? i.value : ""
                                  , l = {
                                    index0: 0,
                                    index: 1,
                                    first: !0
                                };
                                if (twig.countable(a)) {
                                    var r = twig.count(a);
                                    l.revindex0 = r - 1,
                                    l.revindex = r,
                                    l.length = r,
                                    l.last = 1 === r
                                }
                                twig.forEach(a, (function(e, n) {
                                    i._key = n,
                                    i.tag = e,
                                    twig.attr("tag"in i ? i.tag : "", "label") ? i.tag_name = twig.attr("tag"in i ? i.tag : "", "label") : i.tag_name = twig.attr("tag"in i ? i.tag : "", "name"),
                                    t.append('<span class="list-row__cell-template-bots_triggers-items-item js-bots-triggers-item '),
                                    t.append(twig.attr("tag"in i ? i.tag : "", "errors") ? "list-row__cell-template-bots_triggers-items--with-error" : ""),
                                    t.append(" "),
                                    t.append(twig.attr("tag"in i ? i.tag : "", "isSandbox") ? "list-row__cell-template-bots_triggers-items--is-sandbox" : ""),
                                    t.append('" data-id="'),
                                    t.append(twig.filter.escape(this.env_, twig.attr("tag"in i ? i.tag : "", "id"), "light_escape", null, !0)),
                                    t.append('">'),
                                    twig.attr("tag"in i ? i.tag : "", "errors") && t.append('<svg class="svg-icon svg-common--warning-dims digital-pipeline__error-icon"><use xlink:href="#common--warning"></use></svg>'),
                                    t.append(twig.filter.escape(this.env_, "tag_name"in i ? i.tag_name : "", "light_escape", null, !0)),
                                    t.append('<span class="list-row__cell-template-bots_triggers-items-item-more js-bots-triggers-item-more">+'),
                                    t.append(twig.filter.escape(this.env_, ("items_count"in i ? i.items_count : "") - twig.attr(l, "index"), "light_escape", null, !0)),
                                    t.append("</span></span>"),
                                    ++l.index0,
                                    ++l.index,
                                    l.first = !1,
                                    l.length && (--l.revindex0,
                                    --l.revindex,
                                    l.last = 0 === l.revindex0)
                                }
                                ), this)
                            }
                            t.append("</div></div>")
                        }
                        t.append("</div>")
                    }
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_list_cells_bots_triggers"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/list/cells/bots_triggers", t)
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
                    e.append('<div class="content-table__item__inner">'),
                    "value"in t && "value"in t && t.value || (t.value = 0),
                    e.append('<span class="block-selectable">'),
                    twig.attr("item"in t ? t.item : "", "currency_code") ? e.append(twig.filter.escape(this.env_, this.env_.filter("price", "value"in t ? t.value : "", [!1, 0, !1, twig.attr("item"in t ? t.item : "", "currency_code")]), "light_escape", null, !0)) : e.append(twig.filter.escape(this.env_, this.env_.filter("price", "value"in t ? t.value : "", [1]), "light_escape", null, !0)),
                    e.append("</span></div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_list_cells_budget"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/list/cells/budget", t)
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
                    e.append('<div class="content-table__item__inner" style="display: flex; '),
                    twig.attr("value"in t ? t.value : "", "sum", void 0, void 0, !0) && e.append("justify-content: flex-end;"),
                    e.append('">'),
                    twig.attr("value"in t ? t.value : "", "total") && (e.append("<span>"),
                    e.append(twig.filter.escape(this.env_, twig.attr("value"in t ? t.value : "", "total"), "light_escape", null, !0)),
                    e.append("</span>")),
                    twig.attr("value"in t ? t.value : "", "sum", void 0, void 0, !0) && (t.sum = twig.attr("value"in t ? t.value : "", "sum"),
                    "sum"in t && t.sum || (t.sum = 0),
                    e.append("&nbsp;<span>("),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("price", "sum"in t ? t.sum : ""), "light_escape", null, !0)),
                    e.append(")</span>")),
                    e.append("</div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_list_cells_by_activities"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/list/cells/by_activities", t)
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
                    e.append('<div class="content-table__item__inner item__call_event">'),
                    "value"in t && "value"in t && t.value ? (e.append('<span class="icon icon-inline call_analytics_icon icon-call-type-'),
                    e.append(twig.filter.escape(this.env_, twig.attr("value"in t ? t.value : "", "type"), "light_escape", null, !0)),
                    e.append(' js-call-type" data-event="'),
                    e.append(twig.filter.escape(this.env_, twig.attr("value"in t ? t.value : "", "type"), "light_escape", null, !0)),
                    e.append('"></span>'),
                    "outbound" == twig.attr("value"in t ? t.value : "", "type") ? (twig.attr("value"in t ? t.value : "", "user_login", void 0, void 0, !0) && (e.append('<span class="call_analytics_text call_users call_from"data-event="main_user_id" data-id="'),
                    e.append(twig.filter.escape(this.env_, twig.attr("value"in t ? t.value : "", "main_user_id"), "light_escape", null, !0)),
                    e.append('">'),
                    e.append(twig.filter.escape(this.env_, twig.attr("value"in t ? t.value : "", "user_login"), "light_escape", null, !0)),
                    e.append("</span>")),
                    twig.attr(twig.attr("value"in t ? t.value : "", "element"), "name", void 0, void 0, !0) && (e.append('<span class="call_analytics_text from_to_to"> '),
                    e.append(twig.filter.escape(this.env_, twig.attr("lang"in t ? t.lang : "", "to"), "light_escape", null, !0)),
                    e.append(' </span><span class="call_analytics_text call_users call_to" data-event="element_id"><a href="'),
                    e.append(twig.filter.escape(this.env_, twig.attr(twig.attr("value"in t ? t.value : "", "element"), "link"), "light_escape", null, !0)),
                    e.append('" class="js-navigate-link">'),
                    2 == twig.attr(twig.attr("value"in t ? t.value : "", "element"), "type") ? e.append(twig.filter.escape(this.env_, this.env_.filter("lead_name", twig.attr(twig.attr("value"in t ? t.value : "", "element"), "name"), twig.attr(twig.attr("value"in t ? t.value : "", "element"), "id")), "light_escape", null, !0)) : 12 == twig.attr(twig.attr("value"in t ? t.value : "", "element"), "type") ? e.append(twig.filter.escape(this.env_, this.env_.filter("customer_name", twig.attr(twig.attr("value"in t ? t.value : "", "element"), "name"), twig.attr(twig.attr("value"in t ? t.value : "", "element"), "id")), "light_escape", null, !0)) : 1 == twig.attr(twig.attr("value"in t ? t.value : "", "element"), "type") ? e.append(twig.filter.escape(this.env_, this.env_.filter("contact_name", twig.attr(twig.attr("value"in t ? t.value : "", "element"), "name")), "light_escape", null, !0)) : e.append(twig.filter.escape(this.env_, twig.attr(twig.attr("value"in t ? t.value : "", "element"), "name"), "light_escape", null, !0)),
                    e.append("</a></span>"))) : (twig.attr(twig.attr("value"in t ? t.value : "", "element"), "name", void 0, void 0, !0) && (e.append('<span class="call_analytics_text call_users call_to" data-event="element_id"><a href="'),
                    e.append(twig.filter.escape(this.env_, twig.attr(twig.attr("value"in t ? t.value : "", "element"), "link"), "light_escape", null, !0)),
                    e.append('" class="js-navigate-link">'),
                    2 == twig.attr(twig.attr("value"in t ? t.value : "", "element"), "type") ? e.append(twig.filter.escape(this.env_, this.env_.filter("lead_name", twig.attr(twig.attr("value"in t ? t.value : "", "element"), "name"), twig.attr(twig.attr("value"in t ? t.value : "", "element"), "id")), "light_escape", null, !0)) : 12 == twig.attr(twig.attr("value"in t ? t.value : "", "element"), "type") ? e.append(twig.filter.escape(this.env_, this.env_.filter("customer_name", twig.attr(twig.attr("value"in t ? t.value : "", "element"), "name"), twig.attr(twig.attr("value"in t ? t.value : "", "element"), "id")), "light_escape", null, !0)) : 1 == twig.attr(twig.attr("value"in t ? t.value : "", "element"), "type") ? e.append(twig.filter.escape(this.env_, this.env_.filter("contact_name", twig.attr(twig.attr("value"in t ? t.value : "", "element"), "name")), "light_escape", null, !0)) : e.append(twig.filter.escape(this.env_, twig.attr(twig.attr("value"in t ? t.value : "", "element"), "name"), "light_escape", null, !0)),
                    e.append('</a></span><span class="call_analytics_text from_to_to"> '),
                    e.append(twig.filter.escape(this.env_, twig.attr("lang"in t ? t.lang : "", "to"), "light_escape", null, !0)),
                    e.append(" </span>")),
                    twig.attr("value"in t ? t.value : "", "user_login", void 0, void 0, !0) && (e.append('<span class="call_analytics_text call_users call_from"data-event="main_user_id" data-id="'),
                    e.append(twig.filter.escape(this.env_, twig.attr("value"in t ? t.value : "", "main_user_id"), "light_escape", null, !0)),
                    e.append('">'),
                    e.append(twig.filter.escape(this.env_, twig.attr("value"in t ? t.value : "", "user_login"), "light_escape", null, !0)),
                    e.append("</span>")))) : e.append("&nbsp;"),
                    e.append("</div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_list_cells_call_event"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/list/cells/call_event", t)
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
                    e.append('<div class="content-table__item__inner item__call_result">'),
                    "value"in t && "value"in t && t.value ? (twig.attr("value"in t ? t.value : "", "status") && (e.append('<div class="call_analytics_text call_analytics_text_result" data-result="result"><span class="icon icon-inline call_analytics_icon call_result_status icon-call-result-'),
                    e.append(twig.filter.escape(this.env_, twig.attr(twig.attr("value"in t ? t.value : "", "status"), "icon"), "light_escape", null, !0)),
                    e.append('"></span><span class="call_analytics_text call_result_status">'),
                    e.append(twig.filter.escape(this.env_, twig.attr(twig.attr("value"in t ? t.value : "", "status"), "text"), "light_escape", null, !0)),
                    e.append('</span><span class="call_analytics_text call_result_text">'),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("striptags", twig.attr("value"in t ? t.value : "", "result")), "light_escape", null, !0)),
                    e.append('</span></div><div class="item_hidden_overlay"></div>')),
                    e.append('<div class="call_analytics_text call_analytics_record">'),
                    twig.attr("value"in t ? t.value : "", "link") && (e.append('<a href="'),
                    e.append(twig.filter.escape(this.env_, twig.attr("value"in t ? t.value : "", "link"), "light_escape", null, !0)),
                    e.append('" class="call_analytics_icon js-call-play icon--play call_analytics_text" data-prepare="'),
                    e.append(twig.filter.escape(this.env_, twig.attr("value"in t ? t.value : "", "src"), "light_escape", null, !0)),
                    e.append('"><span class="icon icon-inline js-icon-play icon-call-link-listen"></span><span class="icon icon-inline js-icon-stop icon-call-link-stop"></span><span class="spinner-icon player-loading"></span></a><a href="'),
                    e.append(twig.filter.escape(this.env_, twig.attr("value"in t ? t.value : "", "link"), "light_escape", null, !0)),
                    e.append('" download="" class="call_analytics_icon call_analytics_text" target="_blank"><span class="icon icon-inline icon-call-link-download"></span></a>')),
                    e.append('<span class="call_analytics_text call_duration" data-result="duration">'),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("time", twig.attr("value"in t ? t.value : "", "duration")), "light_escape", null, !0)),
                    e.append("</span></div>")) : e.append("&nbsp;"),
                    e.append("</div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_list_cells_call_result"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/list/cells/call_result", t)
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
                    e.append('<div class="content-table__item__inner" title="'),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("chained_list_value", "value"in t ? t.value : ""), "light_escape", null, !0)),
                    e.append('"><span class="block-selectable">'),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("chained_list_value", "value"in t ? t.value : ""), "light_escape", null, !0)),
                    e.append("</span></div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_list_cells_chained_list"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/list/cells/chained_list", t)
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
                    t.append('<div class="chat-detail"><div class="unsorted__external-pointer"><div class="unsorted__internal-pointer"></div></div><div class="chat-detail__wrapper custom-scroll"><div class="chat-detail__scroller"><div class="unsorted__chat-detail__title clearfix"><span class="unsorted__chat-detail__title__text text-overflow-point"><span class="block-selectable">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("detail"in i ? i.detail : "", "user_name") || ("user_name"in i ? i.user_name : ""), "light_escape", null, !0)),
                    t.append("</span></span>"),
                    (twig.attr("detail"in i ? i.detail : "", "manager_name") || "manager_name"in i && i.manager_name) && (t.append('<span class="unsorted__chat-detail__title__manager text-overflow-point"><span class="block-selectable">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("detail"in i ? i.detail : "", "manager_name") || ("manager_name"in i ? i.manager_name : ""), "light_escape", null, !0)),
                    t.append("</span></span>")),
                    t.append("</div>"),
                    new (e._get("interface/common/chats/messages.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        messages: twig.attr("detail"in i ? i.detail : "", "data")
                    })),
                    t.append("</div></div></div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_list_cells_chat_detail"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/list/cells/chat_detail", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e),
                    this.setBlocks({
                        additional_control: twig.bind(this.block_additional_control, this)
                    })
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(e) {
                    return !1
                }
                ,
                t.prototype.render_ = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    i.disabled = !0,
                    "enable_checkboxes"in i && i.enable_checkboxes && twig.attr("field"in i ? i.field : "", "disabled", void 0, void 0, !0) && !twig.attr("field"in i ? i.field : "", "disabled") && "can_edit"in i && i.can_edit && (i.disabled = !1),
                    i.is_simplified_checkbox = !this.env_.test("iterable", "value"in i ? i.value : ""),
                    t.append('<div class="content-table__item__inner '),
                    t.append("is_simplified_checkbox"in i && i.is_simplified_checkbox ? "content-table__item__inner_simplified-checkbox" : ""),
                    t.append('">'),
                    "is_simplified_checkbox"in i && i.is_simplified_checkbox ? new (e._get("interface/controls/checkbox.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        checked: "value"in i ? i.value : "",
                        disabled: "disabled"in i ? i.disabled : ""
                    })) : new (e._get("interface/controls/checkbox.twig"))(this.env_).render_(t, {
                        text: twig.attr("value"in i ? i.value : "", "text"),
                        checked: twig.attr("value"in i ? i.value : "", "checked"),
                        text: twig.attr("value"in i ? i.value : "", "text"),
                        checked: twig.attr("value"in i ? i.value : "", "checked"),
                        value: twig.attr("value"in i ? i.value : "", "value"),
                        name: twig.attr("value"in i ? i.value : "", "name"),
                        input_class_name: twig.attr("value"in i ? i.value : "", "input_class_name"),
                        class_name: twig.attr("value"in i ? i.value : "", "class_name"),
                        disabled: ("disabled"in i ? i.disabled : "") || twig.attr("value"in i ? i.value : "", "disabled")
                    }),
                    t.append(this.renderBlock("additional_control", i, n)),
                    t.append("</div>")
                }
                ,
                t.prototype.block_additional_control = function(e, t, i) {
                    i = void 0 === i ? {} : i
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_list_cells_checkbox"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/list/cells/checkbox", t)
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
                    if (i = void 0 === i ? {} : i,
                    "statuses"in t && t.statuses || (t.statuses = twig.attr(twig.attr("filter"in t ? t.filter : "", "statuses", void 0, "array"), "items", void 0, "array")),
                    "value"in t && t.value) {
                        e.append('<div class="content-table__item__inner">'),
                        t._parent = t;
                        var n = "value"in t ? t.value : "";
                        twig.forEach(n, (function(i, n) {
                            t._key = n,
                            t.deal = i,
                            e.append('<a href="/leads/detail/'),
                            e.append(twig.filter.escape(this.env_, twig.attr("deal"in t ? t.deal : "", "deal_id"), "light_escape", null, !0)),
                            e.append('" class="leads-status-link js-navigate-link"><span class="leads__status-label" style="background-color: '),
                            e.append(twig.filter.escape(this.env_, twig.attr("deal"in t ? t.deal : "", "bg_color"), "light_escape", null, !0)),
                            e.append('">'),
                            e.append(twig.filter.escape(this.env_, this.env_.filter("lead_name", twig.attr("deal"in t ? t.deal : "", "option"), twig.attr("deal"in t ? t.deal : "", "deal_id")), "light_escape", null, !0)),
                            e.append("</span></a>")
                        }
                        ), this),
                        e.append("</div>")
                    }
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_list_cells_contacts_status"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/list/cells/contacts_status", t)
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
                    if (i = void 0 === i ? {} : i,
                    e.append('<div class="content-table__item__inner">'),
                    "value"in t && t.value) {
                        t._parent = t;
                        var n = "value"in t ? t.value : "";
                        twig.forEach(n, (function(i, n) {
                            t._key = n,
                            t.v = i,
                            "phone" == ("code"in t ? t.code : "") ? (e.append('<a title="'),
                            e.append(twig.filter.escape(this.env_, this.env_.filter("phone", "v"in t ? t.v : ""), "light_escape", null, !0)),
                            e.append('" href="tel:'),
                            e.append(twig.filter.escape(this.env_, "v"in t ? t.v : "", "light_escape", null, !0)),
                            e.append('" class="black_link field-show-data-actions js-show-data-actions" data-value="'),
                            e.append(twig.filter.escape(this.env_, "v"in t ? t.v : "", "light_escape", null, !0)),
                            e.append('" data-action-code="phone">'),
                            e.append(twig.filter.escape(this.env_, this.env_.filter("phone", "v"in t ? t.v : ""), "light_escape", null, !0)),
                            e.append("</a>")) : "email" == ("code"in t ? t.code : "") ? (e.append('<a title="'),
                            e.append(twig.filter.escape(this.env_, "v"in t ? t.v : "", "light_escape", null, !0)),
                            e.append('" href="mailto:'),
                            e.append(twig.filter.escape(this.env_, "v"in t ? t.v : "", "light_escape", null, !0)),
                            e.append("?cc="),
                            e.append(twig.filter.escape(this.env_, twig.attr("params"in t ? t.params : "", "subdomain"), "light_escape", null, !0)),
                            e.append(twig.filter.escape(this.env_, twig.attr("params"in t ? t.params : "", "crm_mail"), "light_escape", null, !0)),
                            e.append('" class="black_link field-show-data-actions js-show-data-actions" data-value="'),
                            e.append(twig.filter.escape(this.env_, "v"in t ? t.v : "", "light_escape", null, !0)),
                            e.append('" data-action-code="email">'),
                            e.append(twig.filter.escape(this.env_, "v"in t ? t.v : "", "light_escape", null, !0)),
                            e.append("</a>")) : "im" == ("code"in t ? t.code : "") ? (e.append('<span class="content-table_item-value">'),
                            e.append(twig.filter.escape(this.env_, "v"in t ? t.v : "", "light_escape", null, !0)),
                            e.append("</span>")) : (e.append('<a href="#" class="field-show-data-actions js-show-data-actions" data-value="'),
                            e.append(twig.filter.escape(this.env_, "v"in t ? t.v : "", "light_escape", null, !0)),
                            e.append('" data-action-code="'),
                            e.append(twig.filter.escape(this.env_, twig.filter.lower(this.env_, "code"in t ? t.code : ""), "light_escape", null, !0)),
                            e.append('">'),
                            e.append(twig.filter.escape(this.env_, "v"in t ? t.v : "", "light_escape", null, !0)),
                            e.append("</a>"))
                        }
                        ), this)
                    } else
                        e.append("&nbsp;");
                    e.append('<div class="content-table__item__inner__actions_variants"></div></div>')
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_list_cells_custom"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/list/cells/custom", t)
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
                    e.append('<div class="content-table__item__inner">'),
                    "value"in t && t.value && (e.append('<svg class="svg-icon svg-notes--feed-attach-dims"><use xlink:href="#notes--feed-attach"></use></svg><a href="#" class="js-navigate-link">'),
                    e.append(twig.filter.escape(this.env_, "value"in t ? t.value : "", "light_escape", null, !0)),
                    e.append("</a>")),
                    e.append("</div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_list_cells_dataset"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/list/cells/dataset", t)
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
                    e.append('<div class="content-table__item__inner"><span class="block-selectable">'),
                    "value"in t && t.value ? "format"in t && t.format ? e.append(twig.filter.escape(this.env_, this.env_.filter("date", "value"in t ? t.value : "", "format"in t ? t.format : ""), "light_escape", null, !0)) : e.append(twig.filter.escape(this.env_, "value"in t ? t.value : "", "light_escape", null, !0)) : e.append("&nbsp;"),
                    e.append("</span></div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_list_cells_date"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/list/cells/date", t)
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
                    i.format = "format"in i ? twig.filter.def("format"in i ? i.format : "", "full") : "full",
                    new (e._get("interface/list/cells/date.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        value: "value"in i ? i.value : "",
                        format: "format"in i ? i.format : ""
                    }))
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_list_cells_date_time"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/list/cells/date_time", t)
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
                    e.append('<div class="content-table__item__inner">'),
                    twig.attr("field"in t ? t.field : "", "deletable") && (e.append('<div class="cells-templates_delete '),
                    e.append(twig.filter.escape(this.env_, twig.attr("item"in t ? t.item : "", "delete_action_class_name"), "light_escape", null, !0)),
                    e.append('"><svg class="cells-templates_delete__icon svg-icon svg-common--trash-dims"><use xlink:href="#common--trash"></use></svg><div class="cells-templates_delete__text">'),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Remove"), "light_escape", null, !0)),
                    e.append("</div></div>")),
                    e.append("</div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_list_cells_delete"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/list/cells/delete", t)
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
                    e.append('<div class="email-detail" id="thread_'),
                    e.append(twig.filter.escape(this.env_, twig.attr("source_data"in t ? t.source_data : "", "thread_id"), "light_escape", null, !0)),
                    e.append('">'),
                    e.append('<div class="unsorted__external-pointer"><div class="unsorted__internal-pointer"></div></div><div class="email-detail__title"><div class="email-detail__title__name-date-container"><span class="email-detail__title__name">'),
                    twig.attr(twig.attr("source_data"in t ? t.source_data : "", "from"), "name") ? e.append(twig.filter.escape(this.env_, twig.attr(twig.attr("source_data"in t ? t.source_data : "", "from"), "name"), "light_escape", null, !0)) : e.append(twig.filter.escape(this.env_, twig.attr(twig.attr("source_data"in t ? t.source_data : "", "from"), "email"), "light_escape", null, !0)),
                    e.append('</span><span class="email-detail__title__date">'),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("date", twig.attr("source_data"in t ? t.source_data : "", "date"), "full"), "light_escape", null, !0)),
                    e.append('</span></div><span class="email-detail__title__subject">'),
                    e.append(twig.filter.escape(this.env_, twig.attr("source_data"in t ? t.source_data : "", "subject"), "light_escape", null, !0)),
                    e.append('</span></div><div class="email-detail__body anti_reset">'),
                    e.append(twig.filter.escape(this.env_, twig.attr("source_data"in t ? t.source_data : "", "content"), "light_escape", null, !0)),
                    e.append("</div></div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_list_cells_email_detail"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/list/cells/email_detail", t)
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
                    i.named_tags = [],
                    i._parent = i;
                    var a = "tags"in i ? i.tags : "";
                    twig.forEach(a, (function(e, t) {
                        i._key = t,
                        i.tag = e,
                        i.named_tags = twig.filter.merge("named_tags"in i ? i.named_tags : "", twig.createObj(twig.attr("tag"in i ? i.tag : "", "name"), "tag"in i ? i.tag : ""))
                    }
                    ), this),
                    t.append('<div class="content-table__item__inner '),
                    "value"in i && i.value && twig.attr("value"in i ? i.value : "", "status_id") && t.append("content-table__item__inner_event-lead-status"),
                    t.append(" "),
                    "value"in i && i.value && "event_call" == twig.attr("value"in i ? i.value : "", "template") && t.append("event-call"),
                    t.append('">'),
                    "value"in i && i.value && ("event_call" == twig.attr("value"in i ? i.value : "", "template") ? new (e._get("interface/list/cells/event_call.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        value: twig.attr("value"in i ? i.value : "", "params")
                    })) : (t.append('<div class="icon icon-'),
                    t.append(twig.filter.escape(this.env_, twig.attr("value"in i ? i.value : "", "icon"), "light_escape", null, !0)),
                    t.append(' note-icon event-field-note-icon"></div><div class="event-field-value" '),
                    twig.attr("value"in i ? i.value : "", "task_result") && t.append('style="text-decoration: line-through;"'),
                    t.append(">"),
                    twig.attr("value"in i ? i.value : "", "status_id") || t.append(twig.filter.escape(this.env_, twig.attr("value"in i ? i.value : "", "name"), "light_escape", null, !0)),
                    twig.attr("value"in i ? i.value : "", "status_id") && (twig.attr("value"in i ? i.value : "", "color") || twig.attr("value"in i ? i.value : "", "name") ? i.lead_status_data = "value"in i ? i.value : "" : i.lead_status_data = twig.attr("value"in i ? i.value : "", "new"),
                    twig.attr("value"in i ? i.value : "", "pipeline") ? (t.append('<div class="note-lead__container note-lead__pipe-container"><div class="note-lead__pipe"><span class="node-lead__pipe-text">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lead_status_data"in i ? i.lead_status_data : "", "pipeline"), "light_escape", null, !0)),
                    t.append('</span></div><div class="note-lead__status" style="background-color: '),
                    t.append(twig.filter.escape(this.env_, twig.attr("lead_status_data"in i ? i.lead_status_data : "", "color"), "light_escape", null, !0)),
                    t.append('" title="'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lead_status_data"in i ? i.lead_status_data : "", "name"), "light_escape", null, !0)),
                    t.append('"><span class="note-lead__status-text">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lead_status_data"in i ? i.lead_status_data : "", "name"), "light_escape", null, !0)),
                    t.append("</span></div></div>")) : (t.append('<div class="note-lead__status" style="background-color: '),
                    t.append(twig.filter.escape(this.env_, twig.attr("lead_status_data"in i ? i.lead_status_data : "", "color"), "light_escape", null, !0)),
                    t.append('" title="'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lead_status_data"in i ? i.lead_status_data : "", "name"), "light_escape", null, !0)),
                    t.append('"><span class="note-lead__status-text">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lead_status_data"in i ? i.lead_status_data : "", "name"), "light_escape", null, !0)),
                    t.append("</span></div>")),
                    143 == twig.attr("lead_status_data"in i ? i.lead_status_data : "", "status_id") && twig.attr("lead_status_data"in i ? i.lead_status_data : "", "loss_reason_id", void 0, void 0, !0) && (t.append('<div class="note-lead__loss-reason"><span class="note-lead__loss-reason-text">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lead_status_data"in i ? i.lead_status_data : "", "loss_reason_name", void 0, void 0, !0) ? twig.filter.def(twig.attr("lead_status_data"in i ? i.lead_status_data : "", "loss_reason_name"), this.env_.filter("i18n", "No reason")) : this.env_.filter("i18n", "No reason"), "light_escape", null, !0)),
                    t.append("</span></div>"))),
                    twig.attr("value"in i ? i.value : "", "customer_status") && (i.customer_status_data = twig.attr("value"in i ? i.value : "", "customer_status"),
                    t.append('<div class="note-lead__status" style="background-color: '),
                    t.append(twig.filter.escape(this.env_, twig.attr("customer_status_data"in i ? i.customer_status_data : "", "color"), "light_escape", null, !0)),
                    t.append('" title="'),
                    t.append(twig.filter.escape(this.env_, twig.attr("customer_status_data"in i ? i.customer_status_data : "", "name"), "light_escape", null, !0)),
                    t.append('"><span class="note-lead__status-text">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("customer_status_data"in i ? i.customer_status_data : "", "name"), "light_escape", null, !0)),
                    t.append("</span></div>")),
                    twig.attr("value"in i ? i.value : "", "tags") && (i.tags_with_colors = twig.attr("value"in i ? i.value : "", "tags"),
                    t.append('<span class="block-selectable">'),
                    i._parent = i,
                    a = twig.attr("value"in i ? i.value : "", "tags"),
                    twig.forEach(a, (function(e, n) {
                        i._key = n,
                        i.tag = e,
                        i.tag_color = twig.attr(twig.attr("named_tags"in i ? i.named_tags : "", "tag"in i ? i.tag : "", void 0, "array"), "color"),
                        i.tag_styles = "",
                        "tag_color"in i && i.tag_color && (i.tag_styles = "border-color: #" + ("tag_color"in i ? i.tag_color : "") + "; background-color: " + this.env_.filter("hex2rgba", "tag_color"in i ? i.tag_color : "", .3)),
                        t.append('<span class="event-tag" '),
                        "tag_styles"in i && i.tag_styles && (t.append('data-color="'),
                        t.append(twig.filter.escape(this.env_, "tag_color"in i ? i.tag_color : "", "light_escape", null, !0)),
                        t.append('" style="'),
                        t.append(twig.filter.escape(this.env_, "tag_styles"in i ? i.tag_styles : "", "light_escape", null, !0)),
                        t.append('"')),
                        t.append(">"),
                        t.append(twig.filter.escape(this.env_, "tag"in i ? i.tag : "", "light_escape", null, !0)),
                        t.append("</span>")
                    }
                    ), this),
                    t.append("</span>")),
                    t.append("</div>"),
                    twig.attr("value"in i ? i.value : "", "timestamp") && (t.append('<div class="event-field-value">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("task_date", twig.attr("value"in i ? i.value : "", "timestamp")), "light_escape", null, !0)),
                    t.append("</div>")),
                    twig.attr("value"in i ? i.value : "", "segments") && (t.append('<div class="event-field-value">'),
                    new (e._get("interface/filter/customers/suggest_segments/item.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        item: twig.attr(twig.attr("value"in i ? i.value : "", "segments"), 0, void 0, "array"),
                        class_name: "suggest-segments__item_superlog"
                    })),
                    t.append("</div>")),
                    t.append('<div class="event-field-value">'),
                    twig.attr("value"in i ? i.value : "", "plug") ? (t.append('<div class="dashboard_contacts_plug__item__line grey_line" style="width: '),
                    t.append(twig.filter.escape(this.env_, Number(30) + Number(twig.functions.random(this.env_, 70)), "light_escape", null, !0)),
                    t.append('%"></div>')) : twig.attr("value"in i ? i.value : "", "link") ? (t.append('<a target="_blank" class="'),
                    t.append(twig.filter.escape(this.env_, twig.filter.join(twig.attr("value"in i ? i.value : "", "link_classes", void 0, void 0, !0) ? twig.filter.def(twig.attr("value"in i ? i.value : "", "link_classes"), []) : [], " "), "light_escape", null, !0)),
                    t.append('" href="'),
                    t.append(twig.filter.escape(this.env_, twig.attr("value"in i ? i.value : "", "link"), "light_escape", null, !0)),
                    t.append('">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("value"in i ? i.value : "", "text"), "light_escape", null, !0)),
                    t.append("</a>")) : ("voice" == twig.attr("value"in i ? i.value : "", "type") ? i.media_text = this.env_.filter("i18n", "Voice message") : i.media_text = this.env_.filter("i18n", "File"),
                    t.append('<span class="block-selectable">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("value"in i ? i.value : "", "text"), "light_escape", null, !0)),
                    t.append(" "),
                    twig.attr("value"in i ? i.value : "", "media") && (t.append('<a href="'),
                    t.append(twig.filter.escape(this.env_, twig.attr("value"in i ? i.value : "", "media"), "light_escape", null, !0)),
                    t.append('">'),
                    t.append(twig.filter.escape(this.env_, "media_text"in i ? i.media_text : "", "light_escape", null, !0)),
                    t.append("</a> ")),
                    t.append("</span>")),
                    t.append("</div>"))),
                    t.append("</div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_list_cells_event"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/list/cells/event", t)
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
                    "value"in t && "value"in t && t.value ? (e.append('<div class="item_hidden_overlay"></div><div class="event_call_record"><span class="event_call_text call_duration" data-result="duration">'),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("time", twig.attr("value"in t ? t.value : "", "duration")), "light_escape", null, !0)),
                    e.append("</span>"),
                    twig.attr("value"in t ? t.value : "", "link") && (e.append('<a href="'),
                    e.append(twig.filter.escape(this.env_, twig.attr("value"in t ? t.value : "", "link"), "light_escape", null, !0)),
                    e.append('" class="event_call_icon js-call-play icon--play event_call_text" data-prepare="'),
                    e.append(twig.filter.escape(this.env_, twig.attr("value"in t ? t.value : "", "src"), "light_escape", null, !0)),
                    e.append('"><span class="icon icon-inline js-icon-play icon-call-link-listen"></span><span class="icon icon-inline js-icon-stop icon-call-link-stop"></span><span class="spinner-icon player-loading"></span></a><a href="'),
                    e.append(twig.filter.escape(this.env_, twig.attr("value"in t ? t.value : "", "link"), "light_escape", null, !0)),
                    e.append('" download="" class="event_call_icon event_call_text" target="_blank"><span class="icon icon-inline icon-call-link-download"></span></a>')),
                    e.append("</div>"),
                    twig.attr("value"in t ? t.value : "", "status") && (e.append('<div class="event_call_header"><div class="event_call_text event_call_text_result" data-result="result">'),
                    twig.attr("value"in t ? t.value : "", "hide_icon") || (e.append('<span class="icon icon-inline event_call_icon icon-call-type-'),
                    e.append(twig.filter.escape(this.env_, twig.attr("value"in t ? t.value : "", "type"), "light_escape", null, !0)),
                    e.append(' js-call-type" data-event="'),
                    e.append(twig.filter.escape(this.env_, twig.attr("value"in t ? t.value : "", "type"), "light_escape", null, !0)),
                    e.append('"></span>')),
                    "outbound" == twig.attr("value"in t ? t.value : "", "type") ? (twig.attr("value"in t ? t.value : "", "user_login", void 0, void 0, !0) && (e.append('<span class="event_call_text call_users call_from"data-event="main_user_id" data-id="'),
                    e.append(twig.filter.escape(this.env_, twig.attr("value"in t ? t.value : "", "main_user_id"), "light_escape", null, !0)),
                    e.append('">'),
                    e.append(twig.filter.escape(this.env_, twig.attr("value"in t ? t.value : "", "user_login"), "light_escape", null, !0)),
                    e.append("</span>")),
                    twig.attr(twig.attr("value"in t ? t.value : "", "element"), "name", void 0, void 0, !0) && (e.append('<span class="event_call_text from_to_to "> '),
                    e.append(twig.filter.escape(this.env_, twig.attr("lang"in t ? t.lang : "", "to"), "light_escape", null, !0)),
                    e.append(" "),
                    e.append(twig.filter.escape(this.env_, twig.attr(twig.attr("value"in t ? t.value : "", "element"), "name"), "light_escape", null, !0)),
                    e.append(" </span>"))) : (twig.attr(twig.attr("value"in t ? t.value : "", "element"), "name", void 0, void 0, !0) && (e.append("<span><b>"),
                    e.append(twig.filter.escape(this.env_, twig.attr(twig.attr("value"in t ? t.value : "", "element"), "name"), "light_escape", null, !0)),
                    e.append('</b></span><span class="event_call_text from_to_to"> '),
                    e.append(twig.filter.escape(this.env_, twig.attr("lang"in t ? t.lang : "", "to"), "light_escape", null, !0)),
                    e.append(" </span>")),
                    twig.attr("value"in t ? t.value : "", "user_login", void 0, void 0, !0) && (e.append('<span class="event_call_text call_users call_to" data-event="main_user_id" data-id="'),
                    e.append(twig.filter.escape(this.env_, twig.attr("value"in t ? t.value : "", "main_user_id"), "light_escape", null, !0)),
                    e.append('">'),
                    e.append(twig.filter.escape(this.env_, twig.attr("value"in t ? t.value : "", "user_login"), "light_escape", null, !0)),
                    e.append("</span>"))),
                    e.append('</div><div><span class="event_call_text call_result_text">'),
                    e.append(twig.filter.escape(this.env_, twig.attr("value"in t ? t.value : "", "result"), "light_escape", null, !0)),
                    e.append("</span></div></div>"))) : e.append("&nbsp;")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_list_cells_event_call"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/list/cells/event_call", t)
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
                    e.append('<div class="content-table__item__inner">'),
                    "value"in t && (twig.attr("value"in t ? t.value : "", "url", void 0, void 0, !0) ? (e.append('<a class="list-row__template-name__table-wrapper__name-link js-navigate-link" href="'),
                    e.append(twig.filter.escape(this.env_, twig.attr("value"in t ? t.value : "", "url"), "light_escape", null, !0)),
                    e.append('" title="'),
                    e.append(twig.filter.escape(this.env_, twig.attr("value"in t ? t.value : "", "name"), "light_escape", null, !0)),
                    e.append('">'),
                    e.append(twig.filter.escape(this.env_, twig.attr("value"in t ? t.value : "", "name"), "light_escape", null, !0)),
                    e.append("</a>")) : e.append(twig.filter.escape(this.env_, twig.attr("value"in t ? t.value : "", "name"), "light_escape", null, !0))),
                    e.append("</div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_list_cells_event_object"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/list/cells/event_object", t)
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
                    t.append('<div class="content-table__item__inner content-table__item__inner-template-file">'),
                    this.env_.test("iterable", "value"in i ? i.value : "") && twig.attr("value"in i ? i.value : "", 0, void 0, "array") ? t.append(twig.filter.escape(this.env_, twig.attr("value"in i ? i.value : "", 0, void 0, "array"), "light_escape", null, !0)) : (i.rights_map = {
                        lead: "leads",
                        contact: "contacts",
                        company: "companies",
                        catalogs: "catalogs"
                    },
                    i.entity_right = twig.attr("rights_map"in i ? i.rights_map : "", twig.attr("item"in i ? i.item : "", "entity"), void 0, "array"),
                    i.can_edit = twig.attr(twig.attr(twig.attr("item"in i ? i.item : "", "rights"), "entity_right"in i ? i.entity_right : "", void 0, "array"), "edit"),
                    i.disabled = !("can_edit"in i && i.can_edit),
                    10 == twig.attr("item"in i ? i.item : "", "element_type") ? i.element_type = twig.attr("item"in i ? i.item : "", "catalog_id") : i.element_type = twig.attr("item"in i ? i.item : "", "element_type"),
                    new (e._get("interface/controls/drive_field.twig"))(this.env_).render_(t, {
                        name: twig.attr("field"in i ? i.field : "", "name"),
                        file_id: twig.attr("value"in i ? i.value : "", "file_uuid"),
                        file_name: twig.attr("value"in i ? i.value : "", "file_name"),
                        file_size: twig.attr("value"in i ? i.value : "", "file_size"),
                        field_id: twig.attr("field"in i ? i.field : "", "id"),
                        element_id: twig.attr("item"in i ? i.item : "", "id"),
                        disabled: "disabled"in i ? i.disabled : "",
                        element_type: "element_type"in i ? i.element_type : "",
                        file_name_type: "file-name-list",
                        is_deleted: twig.attr("value"in i ? i.value : "", "is_deleted")
                    })),
                    t.append("</div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_list_cells_file"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/list/cells/file", t)
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
                    e.append('<div class="content-table__item__inner content-table__item__inner-template-file_cleaning_rule_name"><a href="#" class="js-navigate-link list-row__template-name__table-wrapper__file_cleaning_rule_name-link" title="'),
                    e.append(twig.filter.escape(this.env_, "value"in t ? t.value : "", "light_escape", null, !0)),
                    e.append('">'),
                    e.append(twig.filter.escape(this.env_, "value"in t ? t.value : "", "light_escape", null, !0)),
                    e.append("</a></div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_list_cells_file_cleaning_rules_name"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/list/cells/file_cleaning_rules_name", t)
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
                    e.append('<div class="content-table__item__inner content-table__item__inner-template-file-linked-entities js-file-linked-entities" data-uuid="'),
                    e.append(twig.filter.escape(this.env_, twig.attr("item"in t ? t.item : "", "id"), "light_escape", null, !0)),
                    e.append('"><div class="text_pref dashboard_contacts_plug__item__line" style="width: '),
                    e.append(twig.filter.escape(this.env_, 100 - twig.functions.random(this.env_, 10, 70), "light_escape", null, !0)),
                    e.append('%"></div></div>')
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_list_cells_file_linked_entities"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/list/cells/file_linked_entities", t)
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
                    twig.attr("value"in i ? i.value : "", "only_text"))
                        t.append(twig.filter.escape(this.env_, twig.attr("value"in i ? i.value : "", "text"), "light_escape", null, !0));
                    else {
                        if (t.append("<form"),
                        twig.attr("value"in i ? i.value : "", "enctype") && (t.append(' enctype="'),
                        t.append(twig.filter.escape(this.env_, twig.attr("value"in i ? i.value : "", "enctype"), "light_escape", null, !0)),
                        t.append('"')),
                        twig.attr("value"in i ? i.value : "", "action") && (t.append(' action="'),
                        t.append(twig.filter.escape(this.env_, twig.attr("value"in i ? i.value : "", "action"), "light_escape", null, !0)),
                        t.append('"')),
                        twig.attr("value"in i ? i.value : "", "method") && (t.append(' method="'),
                        t.append(twig.filter.escape(this.env_, twig.attr("value"in i ? i.value : "", "method"), "light_escape", null, !0)),
                        t.append('"')),
                        twig.attr("value"in i ? i.value : "", "target") && (t.append(' target="'),
                        t.append(twig.filter.escape(this.env_, twig.attr("value"in i ? i.value : "", "target"), "light_escape", null, !0)),
                        t.append('"')),
                        twig.attr("value"in i ? i.value : "", "class") && (t.append(' class="'),
                        t.append(twig.filter.escape(this.env_, twig.attr("value"in i ? i.value : "", "class"), "light_escape", null, !0)),
                        t.append('" ')),
                        twig.attr("value"in i ? i.value : "", "id") && (t.append('id="'),
                        t.append(twig.filter.escape(this.env_, twig.attr("value"in i ? i.value : "", "id"), "light_escape", null, !0)),
                        t.append('"')),
                        t.append(">"),
                        twig.attr("value"in i ? i.value : "", "inputs")) {
                            i._parent = i;
                            var a = twig.attr("value"in i ? i.value : "", "inputs")
                              , l = {
                                index0: 0,
                                index: 1,
                                first: !0
                            };
                            if (twig.countable(a)) {
                                var r = twig.count(a);
                                l.revindex0 = r - 1,
                                l.revindex = r,
                                l.length = r,
                                l.last = 1 === r
                            }
                            twig.forEach(a, (function(n, a) {
                                i._key = a,
                                i.input = n,
                                twig.attr("input"in i ? i.input : "", "label") && (t.append('<label for="'),
                                t.append(twig.filter.escape(this.env_, twig.attr("input"in i ? i.input : "", "id"), "light_escape", null, !0)),
                                t.append('">'),
                                t.append(twig.filter.escape(this.env_, twig.attr(twig.attr("input"in i ? i.input : "", "label"), "text"), "light_escape", null, !0)),
                                t.append("</label>")),
                                twig.contains(["file", "button", "select"], twig.attr("input"in i ? i.input : "", "type_name")) ? new (e._get("interface/controls/" + twig.attr("input"in i ? i.input : "", "type_name") + ".twig"))(this.env_).render_(t, twig.extend({}, i, "input"in i ? i.input : "")) : (t.append("<input"),
                                twig.attr("input"in i ? i.input : "", "type_name") && (t.append(' type="'),
                                t.append(twig.filter.escape(this.env_, twig.attr("input"in i ? i.input : "", "type_name"), "light_escape", null, !0)),
                                t.append('"')),
                                twig.attr("input"in i ? i.input : "", "id") && (t.append(' id="'),
                                t.append(twig.filter.escape(this.env_, twig.attr("input"in i ? i.input : "", "id"), "light_escape", null, !0)),
                                t.append('"')),
                                twig.attr("input"in i ? i.input : "", "class") && (t.append(' class="'),
                                t.append(twig.filter.escape(this.env_, twig.attr("input"in i ? i.input : "", "class"), "light_escape", null, !0)),
                                t.append('"')),
                                twig.attr("input"in i ? i.input : "", "value") && (t.append(' value="'),
                                t.append(twig.filter.escape(this.env_, twig.attr("input"in i ? i.input : "", "value"), "light_escape", null, !0)),
                                t.append('"')),
                                twig.attr("input"in i ? i.input : "", "name") && (t.append(' name="'),
                                t.append(twig.filter.escape(this.env_, twig.attr("input"in i ? i.input : "", "name"), "light_escape", null, !0)),
                                t.append('"')),
                                twig.attr("input"in i ? i.input : "", "size") && (t.append(' size="'),
                                t.append(twig.filter.escape(this.env_, twig.attr("input"in i ? i.input : "", "size"), "light_escape", null, !0)),
                                t.append('"')),
                                t.append(">")),
                                ++l.index0,
                                ++l.index,
                                l.first = !1,
                                l.length && (--l.revindex0,
                                --l.revindex,
                                l.last = 0 === l.revindex0)
                            }
                            ), this)
                        }
                        t.append("</form>"),
                        twig.attr("value"in i ? i.value : "", "after") && t.append(twig.filter.escape(this.env_, twig.attr("value"in i ? i.value : "", "after"), "light_escape", null, !0))
                    }
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_list_cells_form"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/list/cells/form", t)
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
                    e.append('<div class="form-detail"><div class="unsorted__external-pointer"><div class="unsorted__internal-pointer"></div></div><div class="unsorted__form-detail__title clearfix"><span class="unsorted__form-detail__title__text text-overflow-point">'),
                    e.append(twig.filter.escape(this.env_, twig.attr("detail"in t ? t.detail : "", "from"), "light_escape", null, !0)),
                    e.append('</span><span class="unsorted__form-detail__title__date text-overflow-point">'),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("date", "date_create"in t ? t.date_create : "", "format"in t ? t.format : ""), "light_escape", null, !0)),
                    e.append('</span></div><div class="unsorted__form-detail__body">'),
                    t._parent = t;
                    var n = twig.attr("detail"in t ? t.detail : "", "data");
                    twig.forEach(n, (function(i, n) {
                        if (t._key = n,
                        t.field = i,
                        "text" == twig.attr("field"in t ? t.field : "", "type"))
                            "" != twig.attr("field"in t ? t.field : "", "value") && (e.append('<div class="unsorted__form-detail__body__row"><div class="unsorted__form-detail__body__label">'),
                            e.append(twig.filter.escape(this.env_, twig.attr("field"in t ? t.field : "", "name"), "light_escape", null, !0)),
                            e.append('</div><div class="unsorted__form-detail__body__value text-overflow-point">'),
                            e.append(twig.filter.escape(this.env_, twig.attr("field"in t ? t.field : "", "value"), "light_escape", null, !0)),
                            e.append("</div></div>"));
                        else if ("files" == twig.attr("field"in t ? t.field : "", "type")) {
                            e.append('<div class="unsorted__form-detail__body__row"><div class="unsorted__form-detail__body__label">'),
                            e.append(twig.filter.escape(this.env_, twig.attr("field"in t ? t.field : "", "name"), "light_escape", null, !0)),
                            e.append('</div><div class="unsorted__form-detail__body__value unsorted__form-detail__body__value--link">');
                            var a = twig.attr("field"in t ? t.field : "", "value");
                            twig.forEach(a, (function(i, n) {
                                t._key = n,
                                t.fields = i,
                                e.append('<div><span class="icon icon-note-attach icon-inline"></span><a href="'),
                                e.append(twig.filter.escape(this.env_, twig.attr("fields"in t ? t.fields : "", "url"), "light_escape", null, !0)),
                                e.append('">'),
                                e.append(twig.filter.escape(this.env_, twig.attr("fields"in t ? t.fields : "", "name"), "light_escape", null, !0)),
                                e.append("</a></div>")
                            }
                            ), this),
                            e.append("</div></div>")
                        } else
                            e.append('<div class="unsorted__form-detail__body__row"><div class="unsorted__form-detail__body__label">'),
                            e.append(twig.filter.escape(this.env_, twig.attr("field"in t ? t.field : "", "name"), "light_escape", null, !0)),
                            e.append("</div>"),
                            this.env_.test("iterable", twig.attr("field"in t ? t.field : "", "value")) ? (a = twig.attr("field"in t ? t.field : "", "value"),
                            twig.forEach(a, (function(i, n) {
                                if (t._key = n,
                                t.enum_value = i,
                                this.env_.test("iterable", "enum_value"in t ? t.enum_value : "")) {
                                    var a = "enum_value"in t ? t.enum_value : "";
                                    twig.forEach(a, (function(i, n) {
                                        t._key = n,
                                        t.sub_enum = i,
                                        e.append('<div><div class="unsorted__form-detail__body__value text-overflow-point">'),
                                        e.append(twig.filter.escape(this.env_, twig.attr("sub_enum"in t ? t.sub_enum : "", "value"), "light_escape", null, !0)),
                                        e.append("</div></div>")
                                    }
                                    ), this)
                                } else
                                    e.append('<div><div class="unsorted__form-detail__body__value text-overflow-point">'),
                                    e.append(twig.filter.escape(this.env_, "enum_value"in t ? t.enum_value : "", "light_escape", null, !0)),
                                    e.append("</div></div>")
                            }
                            ), this)) : (e.append('<div class="unsorted__form-detail__body__value text-overflow-point">'),
                            e.append(twig.filter.escape(this.env_, twig.attr("field"in t ? t.field : "", "value"), "light_escape", null, !0)),
                            e.append("</div>")),
                            e.append("</div>")
                    }
                    ), this),
                    e.append("</div></div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_list_cells_form_detail"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/list/cells/form_detail", t)
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
                    e.append('<div class="content-table__item__inner">'),
                    t._parent = t;
                    var n = "value"in t ? t.value : "";
                    twig.forEach(n, (function(i, n) {
                        t._key = n,
                        t.v = i,
                        t.text = twig.attr("v"in t ? t.v : "", "name") || twig.attr("v"in t ? t.v : "", "email"),
                        "v"in t && "v"in t && t.v ? twig.attr("v"in t ? t.v : "", "url") ? (e.append('<a href="'),
                        e.append(twig.filter.escape(this.env_, twig.attr("v"in t ? t.v : "", "url"), "light_escape", null, !0)),
                        e.append('" class="from-cell__name js-navigate-link" title="'),
                        e.append(twig.filter.escape(this.env_, "text"in t ? t.text : "", "light_escape", null, !0)),
                        e.append('">'),
                        e.append(twig.filter.escape(this.env_, "text"in t ? t.text : "", "light_escape", null, !0)),
                        e.append("</a>")) : (e.append('<span class="from-cell__name" title="'),
                        e.append(twig.filter.escape(this.env_, "text"in t ? t.text : "", "light_escape", null, !0)),
                        e.append('">'),
                        e.append(twig.filter.escape(this.env_, "text"in t ? t.text : "", "light_escape", null, !0)),
                        e.append("</span>")) : e.append("&nbsp;")
                    }
                    ), this),
                    twig.attr("item"in t ? t.item : "", "delivery") && twig.attr(twig.attr("item"in t ? t.item : "", "delivery"), "failed") && (e.append('<span class="thread-cell__status thread-cell__status_failed">'),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "send failed"), "light_escape", null, !0)),
                    e.append("</span>")),
                    twig.attr(twig.attr("item"in t ? t.item : "", "actions"), "multi_read") && e.append('<span class="list-item__marker list-item__marker_readed"><svg class="svg-icon svg-mail--mark_readed-dims"><use xlink:href="#mail--mark_readed"></use></svg></span>'),
                    e.append("</div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_list_cells_from"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/list/cells/from", t)
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
                    e.append('<div class="content-table__item__inner">'),
                    null !== ("value"in t ? t.value : "") && (e.append('<span class="icon'),
                    "value"in t && t.value ? e.append(" icon-clock-yellow") : e.append(" icon-clock-red"),
                    e.append('" title="'),
                    "value"in t && t.value ? e.append(twig.filter.escape(this.env_, twig.attr("lang"in t ? t.lang : "", "no_todo_assigned_circle"), "light_escape", null, !0)) : e.append(twig.filter.escape(this.env_, twig.attr("lang"in t ? t.lang : "", "todo_expired_circle"), "light_escape", null, !0)),
                    e.append('"></span>')),
                    e.append("</div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_list_cells_has_tasks"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/list/cells/has_tasks", t)
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
                    t.append(" "),
                    i._parent = i;
                    var a = "fields"in i ? i.fields : ""
                      , l = {
                        index0: 0,
                        index: 1,
                        first: !0
                    };
                    twig.forEach(a, (function(e, n) {
                        i._key = n,
                        i.field = e,
                        twig.attr("field"in i ? i.field : "", "shown") && (0 == twig.attr(l, "index0") && (i.highlight_id_cell = twig.attr("field"in i ? i.field : "", "filtered")),
                        t.append(" "),
                        ++l.index0,
                        ++l.index,
                        l.first = !1)
                    }
                    ), this),
                    t.append('<div class="list-row__cell js-list-row__cell list-row__cell-template-id list-row__cell-id '),
                    t.append(twig.filter.escape(this.env_, "id_cell_class_name"in i ? i.id_cell_class_name : "", "light_escape", null, !0)),
                    t.append(" "),
                    "highlight_id_cell"in i && i.highlight_id_cell && t.append("list-row__cell_filtered"),
                    t.append('">'),
                    "is_sortable"in i && i.is_sortable && t.append('<span class="pipeline_users__item_mover"><span class="icon icon-v-dots"></span></span>'),
                    t.append('<div class="content-table__item__inner" style="overflow:visible">'),
                    new (e._get("interface/controls/checkbox.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        id: "lead_" + ("id"in i ? i.id : ""),
                        value: "id"in i ? i.id : "",
                        class_name: "",
                        disabled: "disabled"in i ? i.disabled : ""
                    })),
                    t.append("</div></div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_list_cells_id"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/list/cells/id", t)
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
                    "value"in i && "value"in i && i.value && new (e._get("interface/controls/input.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        name: twig.attr("value"in i ? i.value : "", "name"),
                        data_id: twig.attr("value"in i ? i.value : "", "data_id"),
                        sort: twig.attr("value"in i ? i.value : "", "sort"),
                        class_name: twig.attr("value"in i ? i.value : "", "class_name"),
                        styled_input: twig.attr("value"in i ? i.value : "", "styled_input"),
                        id: twig.attr("value"in i ? i.value : "", "id"),
                        type: twig.attr("value"in i ? i.value : "", "type"),
                        value: twig.attr("value"in i ? i.value : "", "value"),
                        placeholder: twig.attr("value"in i ? i.value : "", "placeholder"),
                        style: twig.attr("value"in i ? i.value : "", "style"),
                        max_length: twig.attr("value"in i ? i.value : "", "max_length"),
                        min_length: twig.attr("value"in i ? i.value : "", "min_length"),
                        required: twig.attr("value"in i ? i.value : "", "required"),
                        disabled: twig.attr("value"in i ? i.value : "", "disabled"),
                        autofocus: twig.attr("value"in i ? i.value : "", "autofocus"),
                        readonly: twig.attr("value"in i ? i.value : "", "readonly"),
                        autosize_width: twig.attr("value"in i ? i.value : "", "autosize_width")
                    }))
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_list_cells_input"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/list/cells/input", t)
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
                    e.append('<div class="content-table__item__inner content-table__item__inner-template-name content-table__item__inner-template-name_intent">'),
                    "value"in t && "value"in t && t.value && (t.name = twig.attr("value"in t ? t.value : "", "text"),
                    twig.attr("value"in t ? t.value : "", "url") ? (e.append('<a href="'),
                    e.append(twig.filter.escape(this.env_, twig.attr("value"in t ? t.value : "", "url"), "light_escape", null, !0)),
                    e.append('"class="js-navigate-link list-row__template-name__table-wrapper__name-link" title="'),
                    e.append(twig.filter.escape(this.env_, "name"in t ? t.name : "", "light_escape", null, !0)),
                    e.append('">'),
                    e.append(twig.filter.escape(this.env_, "name"in t ? t.name : "", "light_escape", null, !0)),
                    e.append("</a>")) : e.append(twig.filter.escape(this.env_, "name"in t ? t.name : "", "light_escape", null, !0))),
                    e.append("</div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_list_cells_intent"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/list/cells/intent", t)
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
                    twig.attr("item"in i ? i.item : "", "id") ? twig.contains(["unit_price", "sum"], twig.attr("field"in i ? i.field : "", "id")) ? (i.value = this.env_.filter("price", "value"in i ? i.value : "", [!1, 2, !1, "currency_code"in i ? i.currency_code : ""]),
                    new (e._get("interface/list/cells/text.twig"))(this.env_).render_(t, i)) : "vat" == twig.attr("field"in i ? i.field : "", "id") ? new (e._get("interface/list/cells/invoice_vat.twig"))(this.env_).render_(t, i) : "sku" == twig.attr("field"in i ? i.field : "", "id") ? new (e._get("interface/list/cells/invoice_sku.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        disabled: !twig.attr("item"in i ? i.item : "", "is_editable")
                    })) : ("discount" == twig.attr("field"in i ? i.field : "", "id") && (i.value = "amount" == twig.attr(twig.attr("item"in i ? i.item : "", "discount"), "type") ? this.env_.filter("price", twig.attr(twig.attr("item"in i ? i.item : "", "discount"), "value"), [!1, 2, !1, "currency_code"in i ? i.currency_code : ""]) : twig.attr(twig.attr("item"in i ? i.item : "", "discount"), "value") + "%"),
                    new (e._get("interface/list/cells/text.twig"))(this.env_).render_(t, i)) : twig.contains(["sku", "description"], twig.attr("field"in i ? i.field : "", "id")) && twig.attr("item"in i ? i.item : "", "can_view_products") && "catalog_id"in i && i.catalog_id ? (i.search_params = "catalog_id=" + ("catalog_id"in i ? i.catalog_id : "") + "&term=#q#",
                    twig.attr("item"in i ? i.item : "", "parent_card_type") > 0 && twig.attr("item"in i ? i.item : "", "parent_card_id") > 0 && (i.search_params = ("search_params"in i ? i.search_params : "") + "&parent_element_type=" + twig.attr("item"in i ? i.item : "", "parent_card_type") + "&parent_element_id=" + twig.attr("item"in i ? i.item : "", "parent_card_id")),
                    new (e._get("interface/controls/suggest.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        name: twig.attr("value"in i ? i.value : "", "name"),
                        input_class_name: twig.attr("value"in i ? i.value : "", "class_name"),
                        value: twig.attr("value"in i ? i.value : "", "value"),
                        placeholder: twig.attr("value"in i ? i.value : "", "placeholder"),
                        type: twig.attr("value"in i ? i.value : "", "name"),
                        ajax: {
                            url: "/ajax/v1/catalog_elements/list/",
                            params: "search_params"in i ? i.search_params : ""
                        }
                    }))) : "discount" == twig.attr("field"in i ? i.field : "", "id") ? (t.append('<div class="list-row__cell-discount-inner">'),
                    new (e._get("interface/list/cells/input.twig"))(this.env_).render_(t, i),
                    new (e._get("interface/controls/select.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        input_special_class: "js-invoice-new-row-discount-type",
                        items: [{
                            id: "amount",
                            option: "discount_amount"in i ? i.discount_amount : ""
                        }, {
                            option: "%"
                        }]
                    })),
                    t.append("</div>")) : new (e._get("interface/list/cells/input.twig"))(this.env_).render_(t, i)
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_list_cells_invoice_cell"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/list/cells/invoice_cell", t)
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
                    e.append('<div class="content-table__item__inner" title="'),
                    "title"in t ? e.append(twig.filter.escape(this.env_, "title"in t ? t.title : "", "light_escape", null, !0)) : "value"in t && "value"in t && t.value && e.append(twig.filter.escape(this.env_, this.env_.filter("striptags", "value"in t ? t.value : ""), "light_escape", null, !0)),
                    e.append('"><span class="block-selectable">'),
                    "value"in t && ("value"in t && t.value || "0" === ("value"in t ? t.value : "")) ? e.append(twig.filter.escape(this.env_, "value"in t ? t.value : "", "light_escape", null, !0)) : e.append("&nbsp;"),
                    e.append("</span>"),
                    "disabled"in t && t.disabled || e.append('<div class="list-row__cell-edit-buttons list-row__cell-edit-buttons_sku-delete js-cell-action-invoice-row-delete"><span class="list-row__cell-edit-button"><svg class="svg-icon svg-common--trash-dims "><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#common--trash"></use></svg></span></div>'),
                    e.append("</div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_list_cells_invoice_sku"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/list/cells/invoice_sku", t)
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
                    "value"in t && t.value || (t.value = {
                        name: this.env_.filter("i18n", "Status removed"),
                        color: ""
                    }),
                    e.append('<div class="content-table__item__inner"><span class="leads__status-label" style="background-color: '),
                    e.append(twig.filter.escape(this.env_, twig.attr("value"in t ? t.value : "", "color"), "light_escape", null, !0)),
                    e.append('"><span class="block-selectable">'),
                    e.append(twig.filter.escape(this.env_, twig.attr("value"in t ? t.value : "", "name"), "light_escape", null, !0)),
                    e.append("</span></span></div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_list_cells_invoice_status"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/list/cells/invoice_status", t)
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
                    e.append('<div class="content-table__item__inner" title="'),
                    e.append(twig.filter.escape(this.env_, "value"in t ? twig.filter.def("value"in t ? t.value : "", "0") : "0", "light_escape", null, !0)),
                    e.append('%"><span class="block-selectable">'),
                    twig.attr("item"in t ? t.item : "", "vat_type") ? (e.append(twig.filter.escape(this.env_, "value"in t ? twig.filter.def("value"in t ? t.value : "", "0") : "0", "light_escape", null, !0)),
                    e.append("%")) : e.append("&nbsp;"),
                    e.append("</span></div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_list_cells_invoice_vat"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/list/cells/invoice_vat", t)
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
                    e.append('<div class="content-table__item__inner">'),
                    "value"in t && "value"in t && t.value || (t.value = 0),
                    e.append('<span class="block-selectable">'),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("time", "value"in t ? t.value : "", !1), "light_escape", null, !0)),
                    e.append("</span></div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_list_cells_labor_cost"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/list/cells/labor_cost", t)
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
                    new (e._get("interface/list/cells/text.twig"))(this.env_).render_(t, i)
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_list_cells_legal_entity"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/list/cells/legal_entity", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e),
                    this.setBlocks({
                        link_in_app: twig.bind(this.block_link_in_app, this)
                    })
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(e) {
                    return !1
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    e.append('<div class="content-table__item__inner">'),
                    "value"in t && "value"in t && t.value && twig.attr("value"in t ? t.value : "", "name") ? twig.attr("value"in t ? t.value : "", "url") ? (e.append('<a href="'),
                    e.append(twig.filter.escape(this.env_, twig.attr("value"in t ? t.value : "", "url"), "light_escape", null, !0)),
                    e.append('" title="'),
                    e.append(twig.filter.escape(this.env_, twig.attr("value"in t ? t.value : "", "name"), "light_escape", null, !0)),
                    e.append('" class="'),
                    e.append(this.renderBlock("link_in_app", t, i)),
                    e.append(" "),
                    twig.attr("value"in t ? t.value : "", "class", void 0, void 0, !0) && (e.append(" "),
                    e.append(twig.filter.escape(this.env_, twig.attr("value"in t ? t.value : "", "class"), "light_escape", null, !0))),
                    e.append('"'),
                    twig.attr("value"in t ? t.value : "", "additional_data") && (e.append(" "),
                    e.append(twig.attr("value"in t ? t.value : "", "additional_data"))),
                    e.append(">"),
                    e.append(twig.filter.escape(this.env_, twig.attr("value"in t ? t.value : "", "name"), "light_escape", null, !0)),
                    e.append("</a>")) : (e.append('<span class="block-selectable">'),
                    e.append(twig.filter.escape(this.env_, twig.attr("value"in t ? t.value : "", "name"), "light_escape", null, !0)),
                    e.append("</span>")) : e.append('<span class="block-selectable">&nbsp;</span>'),
                    e.append("</div>")
                }
                ,
                t.prototype.block_link_in_app = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    e.append("js-navigate-link")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_list_cells_link"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/list/cells/link", t)
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
                    new (e._get("interface/list/cells/link.twig"))(this.env_).render_(t, i)
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_list_cells_linked_entity"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/list/cells/linked_entity", t)
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
                    "value"in t && "value"in t && t.value && (twig.empty(twig.attr("value"in t ? t.value : "", "text")) && (t.value = twig.filter.merge("value"in t ? t.value : "", {
                        text: "#" + twig.attr("value"in t ? t.value : "", "id")
                    })),
                    twig.attr("value"in t ? t.value : "", "type") && (t.type = this.env_.filter("i18n", "mail_entity_" + twig.attr("value"in t ? t.value : "", "type")),
                    t.title = ("type"in t ? t.type : "") + " " + twig.attr("value"in t ? t.value : "", "text"))),
                    e.append('<div class="content-table__item__inner">'),
                    "value"in t && "value"in t && t.value ? (twig.attr("value"in t ? t.value : "", "type") && (e.append('<span class="content-table__item__inner-entity" title="'),
                    e.append(twig.filter.escape(this.env_, "title"in t ? t.title : "", "light_escape", null, !0)),
                    e.append('">'),
                    e.append(twig.filter.escape(this.env_, "type"in t ? t.type : "", "light_escape", null, !0)),
                    e.append(":&nbsp;</span>")),
                    twig.attr("value"in t ? t.value : "", "url") ? (e.append('<a href="'),
                    e.append(twig.filter.escape(this.env_, twig.attr("value"in t ? t.value : "", "url"), "light_escape", null, !0)),
                    e.append('" class="js-navigate-link" title="'),
                    e.append(twig.filter.escape(this.env_, "title"in t ? t.title : "", "light_escape", null, !0)),
                    e.append('">'),
                    e.append(twig.filter.escape(this.env_, twig.attr("value"in t ? t.value : "", "text"), "light_escape", null, !0)),
                    e.append("</a>")) : (e.append('<span title="'),
                    e.append(twig.filter.escape(this.env_, "title"in t ? t.title : "", "light_escape", null, !0)),
                    e.append('">'),
                    e.append(twig.filter.escape(this.env_, twig.attr("value"in t ? t.value : "", "text"), "light_escape", null, !0)),
                    e.append("</span>"))) : e.append("&nbsp;"),
                    e.append("</div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_list_cells_linked_to"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/list/cells/linked_to", t)
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
                    e.append('<div class="content-table__item__inner"><span class="spinner"></span></div>')
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_list_cells_loader"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !0
                }
                ,
                e._add("interface/list/cells/loader", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e),
                    this.setBlocks({
                        link_in_app: twig.bind(this.block_link_in_app, this)
                    })
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(e) {
                    return !1
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    e.append('<div class="content-table__item__inner">'),
                    t.name = this.env_.filter("contact_name", twig.attr("value"in t ? t.value : "", "name")),
                    "value"in t && "value"in t && t.value && "name"in t && t.name ? twig.attr("value"in t ? t.value : "", "url") ? (e.append('<a href="'),
                    e.append(twig.filter.escape(this.env_, twig.attr("value"in t ? t.value : "", "url"), "light_escape", null, !0)),
                    e.append('" title="'),
                    e.append(twig.filter.escape(this.env_, "name"in t ? t.name : "", "light_escape", null, !0)),
                    e.append('" class="'),
                    e.append(this.renderBlock("link_in_app", t, i)),
                    e.append(" "),
                    twig.attr("value"in t ? t.value : "", "class", void 0, void 0, !0) && (e.append(" "),
                    e.append(twig.filter.escape(this.env_, twig.attr("value"in t ? t.value : "", "class"), "light_escape", null, !0))),
                    e.append('"'),
                    twig.attr("value"in t ? t.value : "", "additional_data") && (e.append(" "),
                    e.append(twig.attr("value"in t ? t.value : "", "additional_data"))),
                    e.append(">"),
                    e.append(twig.filter.escape(this.env_, "name"in t ? t.name : "", "light_escape", null, !0)),
                    e.append("</a>")) : (e.append('<span class="block-selectable">'),
                    e.append(twig.filter.escape(this.env_, "name"in t ? t.name : "", "light_escape", null, !0)),
                    e.append("</span>")) : e.append('<span class="block-selectable">&nbsp;</span>'),
                    e.append("</div>")
                }
                ,
                t.prototype.block_link_in_app = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    e.append("js-navigate-link")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_list_cells_main_contact"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/list/cells/main_contact", t)
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
                    e.append('<div class="content-table__item__inner"><div class="list-item__marker '),
                    "marker"in t && t.marker && e.append(" list-item__marker_unread "),
                    e.append('"></div></div>')
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_list_cells_marker"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/list/cells/marker", t)
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
                    e.append('<span class="'),
                    e.append(twig.filter.escape(this.env_, "class"in t ? t.class : "", "light_escape", null, !0)),
                    e.append('"><svg class="svg-icon svg-common--security-dims"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#common--security"></use></svg></span>')
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_list_cells_mfa_activated"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/list/cells/mfa_activated", t)
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
                    e.append('<div class="content-table__item__inner">'),
                    "value"in t && "value"in t && t.value || (t.value = 0),
                    e.append('<span class="block-selectable">'),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("price", "value"in t ? t.value : "", [!0, 0, !1, twig.attr(twig.attr("field"in t ? t.field : "", "template_params"), "currency")]), "light_escape", null, !0)),
                    e.append("</span></div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_list_cells_monetary"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/list/cells/monetary", t)
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
                    e.append('<div class="content-table__item__inner"><span class="block-selectable">'),
                    "value"in t && "value"in t && t.value ? e.append(twig.filter.escape(this.env_, twig.filter.join("value"in t ? t.value : "", ", "), "light_escape", null, !0)) : e.append("&nbsp;"),
                    e.append("</span></div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_list_cells_multiselect"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/list/cells/multiselect", t)
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
                    i.manage_tags = twig.attr("user_rights"in i ? i.user_rights : "", "entity"in i ? i.entity : "", void 0, "array") && twig.attr(twig.attr("user_rights"in i ? i.user_rights : "", "entity"in i ? i.entity : "", void 0, "array"), "manage_tags"),
                    twig.attr("user_rights"in i ? i.user_rights : "", "is_admin") && "catalogs" != ("entity"in i ? i.entity : "") && (i.manage_tags = !0),
                    t.append('<div class="content-table__item__inner content-table__item__inner-template-name '),
                    twig.attr("item"in i ? i.item : "", "tags") && twig.filter.length(this.env_, twig.attr(twig.attr("item"in i ? i.item : "", "tags"), "items")) && t.append("has-tags"),
                    t.append('"><div class="list-row__template-name__name '),
                    twig.attr("value"in i ? i.value : "", "no_tags") && t.append("list-row__template-name__name_no-tags"),
                    t.append('">'),
                    3 == twig.attr("item"in i ? i.item : "", "element_type") && t.append('<svg class="list-row__company-icon svg-icon svg-common--company-dims "><use xlink:href="#common--company"></use></svg>'),
                    twig.attr("item"in i ? i.item : "", "todo_marker") && (t.append('<div class="list-row__tasks"><span class="pipeline_leads__task-icon pipeline_leads__task-icon_'),
                    twig.attr(twig.attr("item"in i ? i.item : "", "todo_marker"), "value") ? t.append("yellow") : t.append("red"),
                    t.append('" title="'),
                    twig.attr(twig.attr("item"in i ? i.item : "", "todo_marker"), "value") ? t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "no_todo_assigned_circle"), "light_escape", null, !0)) : t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "todo_expired_circle"), "light_escape", null, !0)),
                    t.append('"></span>'),
                    twig.attr(twig.attr("item"in i ? i.item : "", "todo_marker"), "days") && (t.append('<span class="pipeline_leads__task-days pipeline_leads__task-days_red">'),
                    t.append(twig.filter.escape(this.env_, twig.attr(twig.attr("item"in i ? i.item : "", "todo_marker"), "days"), "light_escape", null, !0)),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "todo_marker_days"), "light_escape", null, !0)),
                    t.append("</span>")),
                    t.append("</div>")),
                    "value"in i && "value"in i && i.value && (i.name = twig.attr("value"in i ? i.value : "", "text"),
                    2 == twig.attr("item"in i ? i.item : "", "element_type") ? i.name = this.env_.filter("lead_name", "name"in i ? i.name : "", twig.attr("item"in i ? i.item : "", "id")) : 12 == twig.attr("item"in i ? i.item : "", "element_type") ? i.name = this.env_.filter("customer_name", "name"in i ? i.name : "", twig.attr("item"in i ? i.item : "", "id")) : 1 == twig.attr("item"in i ? i.item : "", "element_type") ? i.name = this.env_.filter("contact_name", "name"in i ? i.name : "") : 10 == twig.attr("item"in i ? i.item : "", "element_type") ? i.name = this.env_.filter("catalog_element_name", "name"in i ? i.name : "", twig.attr("item"in i ? i.item : "", "id"), twig.attr("item"in i ? i.item : "", "catalog_id")) : 25 == twig.attr("item"in i ? i.item : "", "element_type") && (i.name = twig.attr("value"in i ? i.value : "", "text") + (twig.attr(twig.attr("item"in i ? i.item : "", "metadata"), "extension") ? "." + twig.attr(twig.attr("item"in i ? i.item : "", "metadata"), "extension") : "")),
                    twig.attr("value"in i ? i.value : "", "url") ? 25 == twig.attr("item"in i ? i.item : "", "element_type") ? (t.append('<a href="'),
                    t.append(twig.filter.escape(this.env_, twig.attr("value"in i ? i.value : "", "url"), "light_escape", null, !0)),
                    t.append('" class="js-navigate-link list-row__template-name__table-wrapper__name-link js-control-file-name js-file-name-cache-width" title="'),
                    t.append(twig.filter.escape(this.env_, "name"in i ? i.name : "", "light_escape", null, !0)),
                    t.append('" data-file-name-type="files-list">'),
                    t.append(twig.filter.escape(this.env_, "name"in i ? i.name : "", "light_escape", null, !0)),
                    t.append("</a>")) : (t.append('<a href="'),
                    t.append(twig.filter.escape(this.env_, twig.attr("value"in i ? i.value : "", "url"), "light_escape", null, !0)),
                    t.append('" class="js-navigate-link list-row__template-name__table-wrapper__name-link" title="'),
                    t.append(twig.filter.escape(this.env_, twig.attr("value"in i ? i.value : "", "text"), "light_escape", null, !0)),
                    t.append('">'),
                    t.append(twig.filter.escape(this.env_, "name"in i ? i.name : "", "light_escape", null, !0)),
                    t.append("</a>")) : (t.append('<span class="list-row__template-name__table-wrapper__name-text" title="'),
                    t.append(twig.filter.escape(this.env_, twig.attr("value"in i ? i.value : "", "text"), "light_escape", null, !0)),
                    t.append('">'),
                    t.append(twig.filter.escape(this.env_, "name"in i ? i.name : "", "light_escape", null, !0)),
                    t.append("</span>"))),
                    t.append("</div>"),
                    twig.attr("value"in i ? i.value : "", "no_tags") || "disable_tags"in i && i.disable_tags || (t.append('<div class="list-row__template-name__tags js-list-tag">'),
                    new (e._get("interface/controls/tags.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        align: twig.attr(twig.attr("item"in i ? i.item : "", "tags"), "align"),
                        items: twig.attr(twig.attr("item"in i ? i.item : "", "tags"), "items")
                    })),
                    t.append("</div>")),
                    t.append("</div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_list_cells_name"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/list/cells/name", t)
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
                    e.append('<div class="content-table__item__inner '),
                    twig.attr("value"in t ? t.value : "", "failed") && e.append("content-table__item__inner_failed"),
                    e.append('">'),
                    twig.attr("value"in t ? t.value : "", "date") ? e.append(twig.filter.escape(this.env_, this.env_.filter("task_date", twig.attr("value"in t ? t.value : "", "date")), "light_escape", null, !0)) : e.append("&nbsp;"),
                    e.append("</div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_list_cells_nearest_task"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/list/cells/nearest_task", t)
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
                    e.append('<div class="content-table__item__inner '),
                    twig.attr("value"in t ? t.value : "", "failed") && e.append("content-table__item__inner_failed"),
                    e.append('"><span class="block-selectable">'),
                    twig.attr("value"in t ? t.value : "", "failed") && twig.attr("value"in t ? t.value : "", "date") ? (e.append("<span>"),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Did not purchase"), "light_escape", null, !0)),
                    e.append(":&nbsp;</span>"),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("date", twig.attr("value"in t ? t.value : "", "date"), "date"), "light_escape", null, !0))) : twig.attr("value"in t ? t.value : "", "failed") ? (e.append("<span>"),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Did not purchase"), "light_escape", null, !0)),
                    e.append("</span>")) : twig.attr("value"in t ? t.value : "", "date") ? e.append(twig.filter.escape(this.env_, this.env_.filter("date", twig.attr("value"in t ? t.value : "", "date"), "date"), "light_escape", null, !0)) : e.append("&nbsp;"),
                    e.append("</span></div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_list_cells_next_date"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/list/cells/next_date", t)
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
                    n = void 0 === n ? {} : n;
                    var a = t;
                    t = new twig.StringBuffer,
                    new (e._get("interface/common/onlinechat_embed_code.twig"))(this.env_).render_(t, {
                        id: twig.attr("value"in i ? i.value : "", "id"),
                        hash: twig.attr("value"in i ? i.value : "", "hash"),
                        locale: "lang_id"in i ? i.lang_id : "",
                        gso_host: "gso_host"in i ? i.gso_host : ""
                    }),
                    i.embed_code = new twig.Markup(t.toString()),
                    (t = a).append('<div class="content-table__item__inner"><span class="list-row__cell-template-onlinechat_embed-setup js-onlinechat-embed-setup">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Setup"), "light_escape", null, !0)),
                    t.append("</span>"),
                    twig.attr("value"in i ? i.value : "", "id") && twig.attr("value"in i ? i.value : "", "hash") && (t.append('<span class="list-row__cell-template-onlinechat_embed-copy js-onlinechat-embed-copy" data-copied="'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Copied"), "light_escape", null, !0)),
                    t.append('" data-clipboard-text="'),
                    t.append(twig.filter.escape(this.env_, twig.filter.escape(this.env_, "embed_code"in i ? i.embed_code : ""), "light_escape", null, !0)),
                    t.append('"><svg class="svg-icon svg-common--copy-dims"><use xlink:href="#common--copy"></use></svg></span>')),
                    t.append("</div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_list_cells_onlinechat_embed"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/list/cells/onlinechat_embed", t)
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
                    if (i = void 0 === i ? {} : i,
                    e.append('<div class="content-table__item__inner" title="'),
                    this.env_.test("iterable", "value"in t ? t.value : "") ? e.append("") : e.append(twig.filter.escape(this.env_, "value"in t ? t.value : "", "light_escape", null, !0)),
                    e.append('"><div class="list-row__cell-template-onlinechat_source-items"><div class="list-row__cell-template-onlinechat_source-items-inner">'),
                    t.items_count = twig.filter.length(this.env_, "value"in t ? t.value : ""),
                    "items_count"in t && t.items_count) {
                        e.append('<span class="list-row__cell-template-onlinechat_source-items-item-more js-onlinechat-sources-item-more">+'),
                        e.append(twig.filter.escape(this.env_, "items_count"in t ? t.items_count : "", "light_escape", null, !0)),
                        e.append("</span>"),
                        t._parent = t;
                        var n = "value"in t ? t.value : ""
                          , a = {
                            index0: 0,
                            index: 1,
                            first: !0
                        };
                        if (twig.countable(n)) {
                            var l = twig.count(n);
                            a.revindex0 = l - 1,
                            a.revindex = l,
                            a.length = l,
                            a.last = 1 === l
                        }
                        twig.forEach(n, (function(i, n) {
                            t._key = n,
                            t.source = i,
                            e.append('<span class="list-row__cell-template-onlinechat_source-items-item js-onlinechat-sources-item" data-id="'),
                            e.append(twig.filter.escape(this.env_, twig.attr("source"in t ? t.source : "", "id"), "light_escape", null, !0)),
                            e.append('" data-pipeline-id='),
                            e.append(twig.filter.escape(this.env_, twig.attr("item"in t ? t.item : "", "pipeline_id"), "light_escape", null, !0)),
                            e.append(">"),
                            e.append(twig.filter.escape(this.env_, twig.attr("source"in t ? t.source : "", "name"), "light_escape", null, !0)),
                            e.append('<span class="list-row__cell-template-onlinechat_source-items-item-more js-onlinechat-sources-item-more">+'),
                            e.append(twig.filter.escape(this.env_, ("items_count"in t ? t.items_count : "") - twig.attr(a, "index"), "light_escape", null, !0)),
                            e.append("</span></span>"),
                            ++a.index0,
                            ++a.index,
                            a.first = !1,
                            a.length && (--a.revindex0,
                            --a.revindex,
                            a.last = 0 === a.revindex0)
                        }
                        ), this)
                    }
                    e.append("</div></div></div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_list_cells_onlinechat_sources"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/list/cells/onlinechat_sources", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e),
                    this.setBlocks({
                        link_in_app: twig.bind(this.block_link_in_app, this)
                    })
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(e) {
                    return !1
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    e.append('<div class="content-table__item__inner">'),
                    "value"in t && "value"in t && t.value ? (t.data = twig.attr("item"in t ? t.item : "", "data"),
                    "data"in t && t.data && twig.attr("data"in t ? t.data : "", "url") ? (e.append('<a href="'),
                    e.append(twig.filter.escape(this.env_, twig.attr("data"in t ? t.data : "", "url"), "light_escape", null, !0)),
                    e.append('" title="'),
                    e.append(twig.filter.escape(this.env_, "value"in t ? t.value : "", "light_escape", null, !0)),
                    e.append('" class="'),
                    e.append(this.renderBlock("link_in_app", t, i)),
                    e.append(" "),
                    twig.attr("data"in t ? t.data : "", "class", void 0, void 0, !0) && (e.append(" "),
                    e.append(twig.filter.escape(this.env_, twig.attr("data"in t ? t.data : "", "class"), "light_escape", null, !0))),
                    e.append('">'),
                    e.append(twig.filter.escape(this.env_, "value"in t ? t.value : "", "light_escape", null, !0)),
                    e.append("</a>")) : (e.append('<span class="block-selectable">'),
                    e.append(twig.filter.escape(this.env_, "value"in t ? t.value : "", "light_escape", null, !0)),
                    e.append("</span>"))) : e.append('<span class="block-selectable">&nbsp;</span>'),
                    e.append("</div>")
                }
                ,
                t.prototype.block_link_in_app = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    e.append("js-navigate-link")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_list_cells_order_id"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/list/cells/order_id", t)
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
                    e.append('<div class="content-table__item__inner '),
                    "item"in t && t.item && e.append(" item__no-after "),
                    e.append('"><div class="subject-cell__text">'),
                    "value"in t && (e.append('<span class="js-message-template parsing_subject-cell__link" title="'),
                    e.append(twig.filter.escape(this.env_, "value"in t ? t.value : "", "light_escape", null, !0)),
                    e.append('">'),
                    e.append(twig.filter.escape(this.env_, "value"in t ? t.value : "", "light_escape", null, !0)),
                    e.append("</span>")),
                    e.append("</div></div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_list_cells_parsing_subject"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/list/cells/parsing_subject", t)
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
                    new (e._get("interface/list/cells/text.twig"))(this.env_).render_(t, i)
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_list_cells_payer"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/list/cells/payer", t)
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
                    i.id = twig.attr("value"in i ? i.value : "", "id"),
                    i.url = twig.attr("value"in i ? i.value : "", "url"),
                    i.name = twig.attr("value"in i ? i.value : "", "name"),
                    i.payment_status = twig.attr("value"in i ? i.value : "", "name"),
                    i.pay_button = twig.attr("value"in i ? i.value : "", "pay_button"),
                    i.paid_links = twig.attr("value"in i ? i.value : "", "paid_links"),
                    i.status = twig.attr("value"in i ? i.value : "", "status"),
                    i.pay_system = twig.attr("item"in i ? i.item : "", "pay_system"),
                    t.append('<div class="content-table__item__inner content-table__item__inner-payment-name"><div class="content-table__item__inner-payment-name__wrapper">'),
                    "url"in i && i.url ? (t.append('<a href="'),
                    t.append(twig.filter.escape(this.env_, "url"in i ? i.url : "", "light_escape", null, !0)),
                    t.append('" class="js-navigate-link content-table__item__inner-payment-name__url" title="'),
                    t.append(twig.filter.escape(this.env_, "name"in i ? i.name : "", "light_escape", null, !0)),
                    t.append('">'),
                    t.append(twig.filter.escape(this.env_, "name"in i ? i.name : "", "light_escape", null, !0)),
                    t.append("</a>")) : (t.append('<span class="content-table__item__inner-payment-name__text" title="'),
                    t.append(twig.filter.escape(this.env_, "name"in i ? i.name : "", "light_escape", null, !0)),
                    t.append('">'),
                    t.append(twig.filter.escape(this.env_, "name"in i ? i.name : "", "light_escape", null, !0)),
                    t.append("</span>")),
                    "offline_bank_account_uzs" != ("pay_system"in i ? i.pay_system : "") ? ("pending" == ("status"in i ? i.status : "") && new (e._get("interface/controls/button.twig"))(this.env_).render_(t, {
                        class_name: "js-pay-order content-table__item__inner-payment-name__button",
                        svg_class_name: twig.attr("pay_button"in i ? i.pay_button : "", "svg_class_name"),
                        text: twig.attr("pay_button"in i ? i.pay_button : "", "lang"),
                        additional_data: 'data-id="' + ("id"in i ? i.id : "") + '" data-href="' + twig.attr("pay_button"in i ? i.pay_button : "", "link") + '"'
                    }),
                    twig.attr(twig.attr("paid_links"in i ? i.paid_links : "", "receipt"), "link") && new (e._get("interface/controls/button.twig"))(this.env_).render_(t, {
                        class_name: "js-recipient-order content-table__item__inner-payment-name__button",
                        svg_class_name: "files_icons--file-pdf",
                        text: twig.attr(twig.attr("paid_links"in i ? i.paid_links : "", "receipt"), "lang"),
                        additional_data: 'data-href="' + twig.attr(twig.attr("paid_links"in i ? i.paid_links : "", "receipt"), "link") + '"'
                    }),
                    twig.attr(twig.attr("paid_links"in i ? i.paid_links : "", "invoice"), "link") && new (e._get("interface/controls/button.twig"))(this.env_).render_(t, {
                        class_name: "js-invoice-order content-table__item__inner-payment-name__button",
                        svg_class_name: "files_icons--file-pdf",
                        text: twig.attr(twig.attr("paid_links"in i ? i.paid_links : "", "invoice"), "lang"),
                        additional_data: 'data-href="' + twig.attr(twig.attr("paid_links"in i ? i.paid_links : "", "invoice"), "link") + '"'
                    })) : "paid" == ("status"in i ? i.status : "") && (new (e._get("interface/controls/button.twig"))(this.env_).render_(t, {
                        class_name: "js-pay-order content-table__item__inner-payment-name__button",
                        svg_class_name: twig.attr("pay_button"in i ? i.pay_button : "", "svg_class_name"),
                        text: twig.attr("pay_button"in i ? i.pay_button : "", "acceptance_certificate_lang"),
                        additional_data: 'data-id="' + ("id"in i ? i.id : "") + '" data-href="' + twig.attr("pay_button"in i ? i.pay_button : "", "link") + '" data-document="acceptance_certificate"'
                    }),
                    new (e._get("interface/controls/button.twig"))(this.env_).render_(t, {
                        class_name: "js-pay-order content-table__item__inner-payment-name__button",
                        svg_class_name: twig.attr("pay_button"in i ? i.pay_button : "", "svg_class_name"),
                        text: twig.attr("pay_button"in i ? i.pay_button : "", "invoice_facture_lang"),
                        additional_data: 'data-id="' + ("id"in i ? i.id : "") + '" data-href="' + twig.attr("pay_button"in i ? i.pay_button : "", "link") + '" data-document="invoice_facture"'
                    })),
                    t.append("</div></div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_list_cells_payment_name"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/list/cells/payment_name", t)
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
                    t.status = twig.attr("value"in t ? t.value : "", "status"),
                    e.append('<div class="content-table__item__inner content-table__item__inner-payment-status content-table__item__inner-payment-status--'),
                    e.append(twig.filter.escape(this.env_, "status"in t ? t.status : "", "light_escape", null, !0)),
                    e.append('"><div class="content-table__item__inner-payment-status__wrapper"><div class="content-table__item__inner-payment-status__item"><div class="content-table__item__inner-payment-status__text">'),
                    "pending" == ("status"in t ? t.status : "") ? e.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "pending"), "light_escape", null, !0)) : "paid" == ("status"in t ? t.status : "") ? (t.paid_at = twig.attr("value"in t ? t.value : "", "paid_at"),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "paid"), "light_escape", null, !0)),
                    e.append(" "),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("date", "paid_at"in t ? t.paid_at : "", "short"), "light_escape", null, !0))) : "canceled" == ("status"in t ? t.status : "") && (t.canceled_at = twig.attr("value"in t ? t.value : "", "canceled_at"),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Canceled"), "light_escape", null, !0)),
                    e.append(" "),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("date", "canceled_at"in t ? t.canceled_at : "", "short"), "light_escape", null, !0))),
                    e.append("</div></div></div></div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_list_cells_payment_status"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/list/cells/payment_status", t)
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
                    e.append('<div class="content-table__item__inner" title="'),
                    "value"in t && t.value && (e.append(twig.filter.escape(this.env_, "value"in t ? t.value : "", "light_escape", null, !0)),
                    e.append("%")),
                    e.append('"><span class="block-selectable">'),
                    "value"in t && t.value ? (e.append(twig.filter.escape(this.env_, "value"in t ? t.value : "", "light_escape", null, !0)),
                    e.append("%")) : e.append("&nbsp;"),
                    e.append("</span></div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_list_cells_percent"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/list/cells/percent", t)
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
                    "line_class_name"in t && t.line_class_name || ("is_blue"in t && t.is_blue ? t.line_class_name = "blue_line" : t.line_class_name = "grey_line"),
                    e.append('<div class="content-table__item__inner  item__no-after "><div class="subject-cell__text"><div class=\'dashboard_contacts_plug__item__line '),
                    e.append(twig.filter.escape(this.env_, "line_class_name"in t ? t.line_class_name : "", "light_escape", null, !0)),
                    e.append("' style=\"width: "),
                    e.append(twig.filter.escape(this.env_, Number(30) + Number(twig.functions.random(this.env_, 70)), "light_escape", null, !0)),
                    e.append('%"></div></div></div>')
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_list_cells_plug"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/list/cells/plug", t)
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
                    t.currency = twig.attr("field"in t ? t.field : "", "currency", void 0, void 0, !0) ? twig.filter.def(twig.attr("field"in t ? t.field : "", "currency"), null) : null,
                    t.is_short = !1,
                    this.env_.test("iterable", "value"in t ? t.value : "") ? (t.currency = twig.attr("value"in t ? t.value : "", "currency_code"),
                    t.value = twig.attr("value"in t ? t.value : "", "value"),
                    t.is_short = "" == ("currency"in t ? t.currency : "")) : "value"in t && "value"in t && t.value || !(twig.attr("item"in t ? t.item : "", "id") > 0) || (t.value = 0),
                    e.append('<div class="content-table__item__inner"><span class="block-selectable">'),
                    ("value"in t ? t.value : "") + "" != "" && e.append(twig.filter.escape(this.env_, this.env_.filter("price", "value"in t ? t.value : "", ["is_short"in t ? t.is_short : "", 0, !1, "currency"in t ? t.currency : ""]), "light_escape", null, !0)),
                    e.append("</span></div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_list_cells_price"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/list/cells/price", t)
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
                    e.append('<div class="content-table__item__inner content-table__unsorted-actions">'),
                    "value"in t && "value"in t && t.value ? (e.append('<span class="content-table__unsorted-text">'),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("relative_date", "value"in t ? t.value : "", "date"), "light_escape", null, !0)),
                    e.append("</span>"),
                    twig.attr(twig.attr(twig.attr("item"in t ? t.item : "", "source"), "detail"), "service", void 0, void 0, !0) && twig.attr(twig.attr(twig.attr("item"in t ? t.item : "", "source"), "detail"), "service") && e.append('<span class="content-table__unsorted-action content-table__unsorted-action_link js-cell-action-link"><svg class="svg-icon svg-common--linking-chain-dims"><use xlink:href="#common--linking-chain"></use></svg></span>'),
                    e.append('<span class="content-table__unsorted-action content-table__unsorted-action_decline js-cell-action-decline"><svg class="svg-icon svg-common--trash-dims "><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#common--trash"></use></svg></span><span class="content-table__unsorted-action content-table__unsorted-action_accept js-cell-action-accept"><svg class="svg-icon svg-leads--unsorted-accept-dims"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#leads--unsorted-accept"></use></svg></span>')) : e.append("&nbsp;"),
                    e.append("</div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_list_cells_relative_date_with_actions"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/list/cells/relative_date_with_actions", t)
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
                    e.append('<div class="content-table__item__inner content-table__item__inner-template-reply_name"><a href="#" class="js-navigate-link list-row__template-name__table-wrapper__reply_name-link" title="'),
                    e.append(twig.filter.escape(this.env_, "value"in t ? t.value : "", "light_escape", null, !0)),
                    e.append('">'),
                    e.append(twig.filter.escape(this.env_, "value"in t ? t.value : "", "light_escape", null, !0)),
                    e.append("</a></div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_list_cells_reply_name"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/list/cells/reply_name", t)
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
                    e.append('<div class="content-table__item__inner content-table__item__inner-template-reply_status" data-code="'),
                    e.append(twig.filter.escape(this.env_, twig.attr("value"in t ? t.value : "", "code"), "light_escape", null, !0)),
                    e.append('" title="'),
                    e.append(twig.filter.escape(this.env_, twig.attr("value"in t ? t.value : "", "text"), "light_escape", null, !0)),
                    e.append('"><span>'),
                    e.append(twig.filter.escape(this.env_, twig.attr("value"in t ? t.value : "", "text"), "light_escape", null, !0)),
                    e.append("</span></div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_list_cells_reply_status"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/list/cells/reply_status", t)
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
                    if (i = void 0 === i ? {} : i,
                    t.visible = {
                        add: "Add",
                        view: "View",
                        edit: "Edit",
                        delete: "Delete",
                        export: "Export"
                    },
                    t.admin = twig.attr("value"in t ? t.value : "", "admin") && twig.attr("value"in t ? t.value : "", "active"),
                    "admin"in t && t.admin ? t.class_name = "content-table__item__inner-template-admin" : twig.attr("value"in t ? t.value : "", "role") && (t.class_name = "content-table__item__inner-template-role"),
                    e.append('<div class="content-table__item__inner '),
                    "class_name"in t && t.class_name ? (e.append(" "),
                    e.append(twig.filter.escape(this.env_, "class_name"in t ? t.class_name : "", "light_escape", null, !0)),
                    e.append(" ")) : e.append(" content-table__item__inner-template-rights"),
                    e.append('">'),
                    !twig.attr("value"in t ? t.value : "", "free_user"))
                        if ("admin"in t && t.admin)
                            "leads" == ("params"in t ? t.params : "") && e.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Administrator"), "light_escape", null, !0));
                        else if (twig.attr("value"in t ? t.value : "", "role"))
                            "leads" == ("params"in t ? t.params : "") && (e.append('<span class="rights_role__name_wrapper">'),
                            e.append(twig.filter.escape(this.env_, twig.attr("value"in t ? t.value : "", "role"), "light_escape", null, !0)),
                            e.append("</span>")),
                            "statuses" == ("params"in t ? t.params : "") && twig.attr("item"in t ? t.item : "", "user_has_status_rights") && (e.append('<li data-type="edit" class="G" title="'),
                            e.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "DEALS_STATUS"), "light_escape", null, !0)),
                            e.append('"></li>'));
                        else if ("statuses" == ("params"in t ? t.params : "") && twig.attr("item"in t ? t.item : "", "user_has_status_rights"))
                            e.append('<li data-type="edit" class="G" title="'),
                            e.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "DEALS_STATUS"), "light_escape", null, !0)),
                            e.append('"></li>');
                        else {
                            t._parent = t;
                            var n = "visible"in t ? t.visible : "";
                            twig.forEach(n, (function(i, n) {
                                t.key = n,
                                t.item = i,
                                twig.attr("value"in t ? t.value : "", "is_underscore_concat") ? twig.attr("value"in t ? t.value : "", ("params"in t ? t.params : "") + "_" + ("key"in t ? t.key : ""), void 0, "array", !0) && (e.append('<li data-type="'),
                                e.append(twig.filter.escape(this.env_, "key"in t ? t.key : "", "light_escape", null, !0)),
                                e.append('" class="'),
                                e.append(twig.filter.escape(this.env_, twig.attr("value"in t ? t.value : "", ("params"in t ? t.params : "") + "_" + ("key"in t ? t.key : ""), void 0, "array"), "light_escape", null, !0)),
                                e.append('" title="'),
                                e.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "item"in t ? t.item : ""), "light_escape", null, !0)),
                                e.append('"></li>')) : twig.attr(twig.attr("value"in t ? t.value : "", "params"in t ? t.params : "", void 0, "array"), "key"in t ? t.key : "", void 0, "array", !0) && (e.append('<li data-type="'),
                                e.append(twig.filter.escape(this.env_, "key"in t ? t.key : "", "light_escape", null, !0)),
                                e.append('" class="'),
                                e.append(twig.filter.escape(this.env_, twig.attr(twig.attr("value"in t ? t.value : "", "params"in t ? t.params : "", void 0, "array"), "key"in t ? t.key : "", void 0, "array"), "light_escape", null, !0)),
                                e.append('" title="'),
                                e.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "item"in t ? t.item : ""), "light_escape", null, !0)),
                                e.append('"></li>'))
                            }
                            ), this)
                        }
                    e.append("</div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_list_cells_rights"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/list/cells/rights", t)
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
                    i.segment_count = twig.filter.length(this.env_, "value"in i ? i.value : ""),
                    t.append('<div class="suggest-segments__item-table-wrapper js-list-segments"><div class="suggest-segments__item-table-container">'),
                    i._parent = i;
                    var a = "value"in i ? i.value : ""
                      , l = {
                        index0: 0,
                        index: 1,
                        first: !0
                    };
                    if (twig.countable(a)) {
                        var r = twig.count(a);
                        l.revindex0 = r - 1,
                        l.revindex = r,
                        l.length = r,
                        l.last = 1 === r
                    }
                    twig.forEach(a, (function(n, a) {
                        i._key = a,
                        i.segment = n,
                        new (e._get("interface/filter/customers/suggest_segments/item.twig"))(this.env_).render_(t, twig.extend({}, i, {
                            item: "segment"in i ? i.segment : "",
                            class_name: "suggest-segments__item_table-list",
                            rest: ("segment_count"in i ? i.segment_count : "") - twig.attr(l, "index")
                        })),
                        ++l.index0,
                        ++l.index,
                        l.first = !1,
                        l.length && (--l.revindex0,
                        --l.revindex,
                        l.last = 0 === l.revindex0)
                    }
                    ), this),
                    t.append("</div></div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_list_cells_segments"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/list/cells/segments", t)
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
                    new (e._get("interface/controls/select.twig"))(this.env_).render_(t, twig.extend({}, i, "value"in i ? i.value : ""))
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_list_cells_select"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/list/cells/select", t)
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
                    e.append('<div class="content-table__item__inner smart_address">'),
                    t.need_delimiter = !1,
                    "value"in t && "value"in t && t.value ? (t._parent = t,
                    twig.forEach(["address_line_1", "address_line_2", "city", "state", "zip", "country"], (function(i, n) {
                        t._key = n,
                        t.field = i,
                        e.append("\x3c!----\x3e"),
                        twig.attr("value"in t ? t.value : "", "field"in t ? t.field : "", void 0, "array", !0) && twig.attr("value"in t ? t.value : "", "field"in t ? t.field : "", void 0, "array") && (e.append('<span class="block-selectable">\x3c!----\x3e'),
                        "need_delimiter"in t && t.need_delimiter && (e.append("\x3c!----\x3e"),
                        e.append("\x3c!----\x3e"),
                        "zip" != ("field"in t ? t.field : "") && e.append(","),
                        e.append("\x3c!----\x3e&nbsp;\x3c!----\x3e")),
                        e.append("\x3c!----\x3e"),
                        e.append(twig.filter.escape(this.env_, twig.attr("value"in t ? t.value : "", "field"in t ? t.field : "", void 0, "array"), "light_escape", null, !0)),
                        e.append("\x3c!----\x3e"),
                        t.need_delimiter = !0,
                        e.append("\x3c!----\x3e</span>")),
                        e.append("\x3c!----\x3e")
                    }
                    ), this)) : e.append("&nbsp;"),
                    e.append("</div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_list_cells_smart_address"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/list/cells/smart_address", t)
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
                    e.append('<div class="content-table__item__inner">'),
                    twig.attr("item"in t ? t.item : "", "formated_date", void 0, void 0, !0) && "value"in t && t.value && (e.append("<span>"),
                    e.append(twig.filter.escape(this.env_, twig.attr("item"in t ? t.item : "", "formated_date"), "light_escape", null, !0)),
                    e.append("</span>")),
                    e.append("</div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_list_cells_smart_date"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/list/cells/smart_date", t)
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
                    e.append('<div class="content-table__item__inner operday-analytic__list-cell__name '),
                    twig.attr("value"in t ? t.value : "", "group") && e.append(" operday-analytic__list-cell__name--group "),
                    e.append('">'),
                    e.append(twig.filter.escape(this.env_, twig.attr("value"in t ? t.value : "", "text"), "light_escape", null, !0)),
                    e.append("</div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_list_cells_stats_operday_name"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/list/cells/stats_operday_name", t)
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
                    e.append('<div class="content-table__item__inner operday-analytic__list-cell__total '),
                    twig.attr("value"in t ? t.value : "", "group") && e.append(" operday-analytic__list-cell__total--group "),
                    e.append('">'),
                    e.append(twig.filter.escape(this.env_, twig.attr("value"in t ? t.value : "", "value") || "—", "light_escape", null, !0)),
                    e.append("</div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_list_cells_stats_operday_total"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/list/cells/stats_operday_total", t)
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
                    "value"in t && t.value && ("statuses"in t && t.statuses || (t.statuses = twig.attr(twig.attr("filter"in t ? t.filter : "", "statuses"), "items")),
                    t.status_name = twig.attr(twig.attr("statuses"in t ? t.statuses : "", "value"in t ? t.value : "", void 0, "array"), "option"),
                    t.status_color = twig.attr(twig.attr("statuses"in t ? t.statuses : "", "value"in t ? t.value : "", void 0, "array"), "bg_color"),
                    "status_name"in t && t.status_name || (t.status_name = twig.attr(twig.attr("statuses"in t ? t.statuses : "", "id_" + ("value"in t ? t.value : ""), void 0, "array"), "option"),
                    t.status_color = twig.attr(twig.attr("statuses"in t ? t.statuses : "", "id_" + ("value"in t ? t.value : ""), void 0, "array"), "bg_color")),
                    twig.attr("filter"in t ? t.filter : "", "pipelines") && twig.attr(twig.attr("filter"in t ? t.filter : "", "pipelines"), "items") && twig.filter.length(this.env_, twig.attr(twig.attr("filter"in t ? t.filter : "", "pipelines"), "items")) >= 1 && twig.filter.length(this.env_, twig.attr(twig.attr(twig.attr("filter"in t ? t.filter : "", "pipelines"), "items"), "id_" + twig.attr("item"in t ? t.item : "", "pipeline_id"), void 0, "array")) >= 1 && (t.pipeline_name = twig.attr(twig.attr(twig.attr(twig.attr("filter"in t ? t.filter : "", "pipelines"), "items"), "id_" + twig.attr("item"in t ? t.item : "", "pipeline_id"), void 0, "array"), "title"),
                    t.status_name = twig.attr(twig.attr(twig.attr(twig.attr(twig.attr(twig.attr("filter"in t ? t.filter : "", "pipelines"), "items"), "id_" + twig.attr("item"in t ? t.item : "", "pipeline_id"), void 0, "array"), "statuses"), "id_" + ("value"in t ? t.value : ""), void 0, "array"), "name"),
                    t.status_color = twig.attr(twig.attr(twig.attr(twig.attr(twig.attr(twig.attr("filter"in t ? t.filter : "", "pipelines"), "items"), "id_" + twig.attr("item"in t ? t.item : "", "pipeline_id"), void 0, "array"), "statuses"), "id_" + ("value"in t ? t.value : ""), void 0, "array"), "color")),
                    "status_name"in t && t.status_name || (t.status_name = twig.attr("lang"in t ? t.lang : "", "removed_status_label")),
                    "status_name"in t && t.status_name && (e.append('<div class="content-table__item__inner">'),
                    twig.attr("filter"in t ? t.filter : "", "pipelines") && twig.attr(twig.attr("filter"in t ? t.filter : "", "pipelines"), "items") && twig.filter.length(this.env_, twig.attr(twig.attr("filter"in t ? t.filter : "", "pipelines"), "items")) > 1 ? (e.append('<div class="note-lead__container note-lead__pipe-container" style="margin-left: 0"><div class="note-lead__pipe"><span class="node-lead__pipe-text block-selectable" style="font-size: 13px;">'),
                    e.append(twig.filter.escape(this.env_, "pipeline_name"in t ? t.pipeline_name : "", "light_escape", null, !0)),
                    e.append('</span></div><div class="note-lead__status" style="background-color: '),
                    e.append(twig.filter.escape(this.env_, "status_color"in t ? t.status_color : "", "light_escape", null, !0)),
                    e.append('" title="'),
                    e.append(twig.filter.escape(this.env_, "status_name"in t ? t.status_name : "", "light_escape", null, !0)),
                    e.append('"><span class="note-lead__status-text block-selectable">'),
                    e.append(twig.filter.escape(this.env_, "status_name"in t ? t.status_name : "", "light_escape", null, !0)),
                    e.append("</span></div></div>")) : (e.append('<span class="leads__status-label" style="background-color: '),
                    e.append(twig.filter.escape(this.env_, "status_color"in t ? t.status_color : "", "light_escape", null, !0)),
                    e.append('"><span class="block-selectable '),
                    "is_unsorted"in t && t.is_unsorted && e.append("list-row_unsorted__status"),
                    e.append('">'),
                    e.append(twig.filter.escape(this.env_, "status_name"in t ? t.status_name : "", "light_escape", null, !0)),
                    e.append("</span></span>")),
                    143 == ("value"in t ? t.value : "") && twig.attr("item"in t ? t.item : "", "loss_reason", void 0, void 0, !0) && (e.append('<div class="note-lead__pipe-container_loss-reason js-control-loss-reason-dropdown_list" data-id="'),
                    e.append(twig.filter.escape(this.env_, twig.attr(twig.attr("item"in t ? t.item : "", "loss_reason"), "id", void 0, void 0, !0) ? twig.filter.def(twig.attr(twig.attr("item"in t ? t.item : "", "loss_reason"), "id"), 0) : 0, "light_escape", null, !0)),
                    e.append('"><span class="note-lead__loss-reason">'),
                    e.append(twig.filter.escape(this.env_, twig.attr(twig.attr("item"in t ? t.item : "", "loss_reason"), "name") ? twig.filter.trim(twig.attr(twig.attr("item"in t ? t.item : "", "loss_reason"), "name")) : this.env_.filter("i18n", "No reason"), "light_escape", null, !0)),
                    e.append("</span></div>")),
                    e.append("</div>")))
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_list_cells_status"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/list/cells/status", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e),
                    this.setBlocks({
                        additional_control: twig.bind(this.block_additional_control, this)
                    })
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(t) {
                    return e._get("interface/list/cells/checkbox.twig")
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    this.getParent(t).render_(e, t, twig.extend({}, this.getBlocks(), i))
                }
                ,
                t.prototype.block_additional_control = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    twig.attr("item"in t ? t.item : "", "has_sub_tree") && "role_all_users" == twig.attr("field"in t ? t.field : "", "code") && (e.append('<div class="left-menu-settings__expand"><span class="left-menu-settings__expand-text">'),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Show all"), "light_escape", null, !0)),
                    e.append('</span><div class="left-menu-settings__expand-arrow-container"><div class="left-menu-settings__expand-arrow"></div></div></div>')),
                    e.append(" ")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_list_cells_subtree_checkbox"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/list/cells/subtree_checkbox", t)
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
                    new (e._get("interface/list/cells/text.twig"))(this.env_).render_(t, i)
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_list_cells_supplier"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/list/cells/supplier", t)
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
                    e.append('<div class="content-table__item__inner">'),
                    "value"in t && "value"in t && t.value && (e.append('<span class="block-selectable">'),
                    twig.attr("value"in t ? t.value : "", "date") ? e.append(twig.filter.escape(this.env_, twig.attr("value"in t ? t.value : "", "date"), "light_escape", null, !0)) : e.append("&nbsp;"),
                    e.append("</span>")),
                    e.append("</div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_list_cells_task_date"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/list/cells/task_date", t)
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
                    e.append('<div class="content-table__item__inner">'),
                    "value"in t && "value"in t && t.value && (e.append('<span class="block-selectable">'),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("task_text", twig.attr("value"in t ? t.value : "", "text")), "light_escape", null, !0)),
                    e.append("</span>")),
                    e.append("</div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_list_cells_task_name"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/list/cells/task_name", t)
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
                    e.append('<div class="content-table__item__inner">'),
                    "value"in t && "value"in t && t.value && (t.title = twig.attr("value"in t ? t.value : "", "name"),
                    "leads" == twig.attr("value"in t ? t.value : "", "entity") ? t.title = this.env_.filter("lead_name", "title"in t ? t.title : "", twig.attr("value"in t ? t.value : "", "id")) : "customers" == twig.attr("value"in t ? t.value : "", "entity") ? t.title = this.env_.filter("customer_name", "title"in t ? t.title : "", twig.attr("value"in t ? t.value : "", "id")) : "contacts" == twig.attr("value"in t ? t.value : "", "entity") && (t.title = this.env_.filter("contact_name", "title"in t ? t.title : "")),
                    e.append('<a class="js-navigate-link" href="'),
                    e.append(twig.filter.escape(this.env_, twig.attr("value"in t ? t.value : "", "url"), "light_escape", null, !0)),
                    e.append('" title="'),
                    e.append(twig.filter.escape(this.env_, "title"in t ? t.title : "", "light_escape", null, !0)),
                    e.append('">'),
                    e.append(twig.filter.escape(this.env_, "title"in t ? t.title : "", "light_escape", null, !0)),
                    e.append("</a>")),
                    e.append("</div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_list_cells_task_object"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/list/cells/task_object", t)
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
                    e.append('<div class="content-table__item__inner">'),
                    "value"in t && "value"in t && t.value && (e.append('<span class="list-row__cell-template-task_name__result block-selectable">'),
                    e.append(twig.filter.escape(this.env_, twig.attr("value"in t ? t.value : "", "text"), "light_escape", null, !0)),
                    e.append("</span>")),
                    e.append("</div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_list_cells_task_result"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/list/cells/task_result", t)
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
                    t.append('<div class="content-table__item__inner h-flex h-flex-ai-center">'),
                    "value"in i && "value"in i && i.value && (t.append('<span class="block-selectable">'),
                    new (e._get("interface/common/tasks_type_name.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        type: twig.attr("value"in i ? i.value : "", "type"),
                        type_name: twig.attr("value"in i ? i.value : "", "type_name"),
                        type_icon: twig.attr("value"in i ? i.value : "", "type_icon"),
                        type_color: twig.attr("value"in i ? i.value : "", "type_color")
                    })),
                    t.append("</span>")),
                    t.append("</div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_list_cells_task_type"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/list/cells/task_type", t)
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
                    e.append('<div class="content-table__item__inner">'),
                    "value"in t && "value"in t && t.value && (e.append('<span class="block-selectable">'),
                    e.append(twig.filter.escape(this.env_, twig.attr("value"in t ? t.value : "", "name"), "light_escape", null, !0)),
                    e.append("</span>")),
                    e.append("</div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_list_cells_task_user"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/list/cells/task_user", t)
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
                    e.append('<div class="content-table__item__inner" title="'),
                    "title"in t ? e.append(twig.filter.escape(this.env_, "title"in t ? t.title : "", "light_escape", null, !0)) : "value"in t && "value"in t && t.value && e.append(twig.filter.escape(this.env_, this.env_.filter("striptags", "value"in t ? t.value : ""), "light_escape", null, !0)),
                    e.append('"><span class="block-selectable">'),
                    "value"in t && ("value"in t && t.value || "0" === ("value"in t ? t.value : "")) ? "should_be_raw"in t && t.should_be_raw ? e.append("value"in t ? t.value : "") : e.append(twig.filter.escape(this.env_, "value"in t ? t.value : "", "light_escape", null, !0)) : e.append("&nbsp;"),
                    e.append("</span></div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_list_cells_text"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/list/cells/text", t)
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
                    t.append('<div class="content-table__item__inner text-overflow-point">'),
                    new (e._get("interface/list/cells/text_pref_val.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        value: twig.attr("item"in i ? i.item : "", twig.attr("field"in i ? i.field : "", "code"), void 0, "array")
                    })),
                    t.append("</div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_list_cells_text_pref"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/list/cells/text_pref", t)
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
                    "value"in t && "value"in t && t.value ? (twig.attr("value"in t ? t.value : "", "prefix") && (e.append('<span class="text_pref">'),
                    e.append(twig.filter.escape(this.env_, twig.attr("value"in t ? t.value : "", "prefix"), "light_escape", null, !0)),
                    e.append("&nbsp;</span>")),
                    e.append(twig.filter.escape(this.env_, twig.attr("value"in t ? t.value : "", "text"), "light_escape", null, !0))) : e.append("&nbsp;")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_list_cells_text_pref_val"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/list/cells/text_pref_val", t)
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
                    e.append('<div class="content-table__item__inner"><span class="block-selectable">'),
                    "value"in t && "value"in t && t.value ? e.append("value"in t ? t.value : "") : e.append("&nbsp;"),
                    e.append("</span></div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_list_cells_text_raw"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/list/cells/text_raw", t)
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
                    t.has_additions = twig.attr(twig.attr("item"in t ? t.item : "", "counters"), "messages") > 1 || twig.attr("item"in t ? t.item : "", "has_attachments"),
                    e.append('<div class="content-table__item__inner '),
                    "item"in t && t.item && e.append(" item__no-after "),
                    e.append('"><div class="list-row__cell-holder">'),
                    twig.attr(twig.attr(twig.attr("item"in t ? t.item : "", "rights"), "mail"), "edit") && !twig.attr("item"in t ? t.item : "", "entity") && "deleted" != twig.attr("item"in t ? t.item : "", "folder") && e.append('<div class="list-row__cell-add-button js-list-row__cell-add-lead" data-field-code="link-lead"><span class="list-row__cell-add-button__link-lead">...</span></div>'),
                    t.entity_name = twig.attr(twig.attr("item"in t ? t.item : "", "entity"), "name"),
                    "lead" == twig.attr(twig.attr("item"in t ? t.item : "", "entity"), "type") ? t.entity_name = this.env_.filter("lead_name", "entity_name"in t ? t.entity_name : "", twig.attr(twig.attr("item"in t ? t.item : "", "entity"), "id")) : "customer" == twig.attr(twig.attr("item"in t ? t.item : "", "entity"), "type") ? t.entity_name = this.env_.filter("customer_name", "entity_name"in t ? t.entity_name : "", twig.attr(twig.attr("item"in t ? t.item : "", "entity"), "id")) : "contact" == twig.attr(twig.attr("item"in t ? t.item : "", "entity"), "type") && (t.entity_name = this.env_.filter("contact_name", "entity_name"in t ? t.entity_name : "")),
                    twig.attr("item"in t ? t.item : "", "entity") && "entity_name"in t && t.entity_name && (e.append('<a href="'),
                    e.append(twig.filter.escape(this.env_, twig.attr(twig.attr("item"in t ? t.item : "", "entity"), "url"), "light_escape", null, !0)),
                    e.append('" class="thread-cell__linkedto h-text-overflow js-navigate-link" title="'),
                    e.append(twig.filter.escape(this.env_, "entity_name"in t ? t.entity_name : "", "light_escape", null, !0)),
                    e.append('" style="background-color: '),
                    e.append(twig.filter.escape(this.env_, twig.attr(twig.attr("item"in t ? t.item : "", "entity"), "status_color"), "light_escape", null, !0)),
                    e.append('"><span>'),
                    e.append(twig.filter.escape(this.env_, "entity_name"in t ? t.entity_name : "", "light_escape", null, !0)),
                    e.append("</span></a>")),
                    twig.attr("item"in t ? t.item : "", "private") && e.append('<span class="thread-cell__marker list-item__private-icon icon icon-inline icon-lock-grey"></span>'),
                    e.append('</div><a href="/mail/thread/'),
                    e.append(twig.filter.escape(this.env_, "id"in t ? t.id : "", "light_escape", null, !0)),
                    e.append('" class="thread-cell__text js-navigate-link">'),
                    twig.attr("item"in t ? t.item : "", "name") && (e.append('<span class="list-row__template-name__table-wrapper__name-link thread-cell__link" title="'),
                    e.append(twig.filter.escape(this.env_, twig.attr("item"in t ? t.item : "", "name"), "light_escape", null, !0)),
                    e.append('">'),
                    e.append(twig.filter.escape(this.env_, twig.attr("item"in t ? t.item : "", "name"), "light_escape", null, !0)),
                    e.append("</span>")),
                    twig.attr(twig.attr("item"in t ? t.item : "", "last_message"), "text") && (e.append('<span class="thread-cell__message">'),
                    e.append(twig.filter.escape(this.env_, twig.attr(twig.attr("item"in t ? t.item : "", "last_message"), "text"), "light_escape", null, !0)),
                    e.append("</span>")),
                    e.append('</a></div><div class="thread-cell__additions" '),
                    "has_additions"in t && t.has_additions || e.append('style="height: 100%; padding: 0;"'),
                    e.append(">"),
                    twig.attr(twig.attr("item"in t ? t.item : "", "counters"), "messages") > 1 && (e.append('<div class="thread-cell__counter">'),
                    e.append(twig.filter.escape(this.env_, twig.attr(twig.attr("item"in t ? t.item : "", "counters"), "messages"), "light_escape", null, !0)),
                    e.append("</div>")),
                    twig.attr("item"in t ? t.item : "", "has_attachments") && (e.append('<span class="thread-cell__attach icon icon-attachment-icon" '),
                    twig.attr(twig.attr("item"in t ? t.item : "", "counters"), "messages") > 1 && e.append('style="margin-right: 7px;"'),
                    e.append("></span>")),
                    e.append("</div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_list_cells_thread"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/list/cells/thread", t)
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
                    e.append('<div class="content-table__item__inner">'),
                    t._parent = t;
                    var n = "value"in t ? t.value : "";
                    twig.forEach(n, (function(i, n) {
                        t._key = n,
                        t.v = i,
                        t.text = twig.attr("v"in t ? t.v : "", "name") || twig.attr("v"in t ? t.v : "", "email"),
                        "v"in t && "v"in t && t.v ? twig.attr("v"in t ? t.v : "", "url") ? (e.append('<a href="'),
                        e.append(twig.filter.escape(this.env_, twig.attr("v"in t ? t.v : "", "url"), "light_escape", null, !0)),
                        e.append('" class="from-cell__name js-navigate-link" title="'),
                        e.append(twig.filter.escape(this.env_, "text"in t ? t.text : "", "light_escape", null, !0)),
                        e.append('">'),
                        e.append(twig.filter.escape(this.env_, "text"in t ? t.text : "", "light_escape", null, !0)),
                        e.append("</a>")) : (e.append('<span class="from-cell__name" title="'),
                        e.append(twig.filter.escape(this.env_, "text"in t ? t.text : "", "light_escape", null, !0)),
                        e.append('">'),
                        e.append(twig.filter.escape(this.env_, "text"in t ? t.text : "", "light_escape", null, !0)),
                        e.append("</span>")) : e.append("&nbsp;")
                    }
                    ), this),
                    twig.attr("item"in t ? t.item : "", "delivery") && twig.attr(twig.attr("item"in t ? t.item : "", "delivery"), "failed") && (e.append('<span class="thread-cell__status thread-cell__status_failed">'),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "send failed"), "light_escape", null, !0)),
                    e.append("</span>")),
                    e.append("</div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_list_cells_to"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/list/cells/to", t)
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
                    e.append('<div class="content-table__item__inner" title="'),
                    "title"in t ? e.append(twig.filter.escape(this.env_, "title"in t ? t.title : "", "light_escape", null, !0)) : "value"in t && "value"in t && t.value && e.append(twig.filter.escape(this.env_, this.env_.filter("striptags", "value"in t ? t.value : ""), "light_escape", null, !0)),
                    e.append('"><span class="block-selectable">'),
                    "value"in t && ("value"in t && t.value || "0" === ("value"in t ? t.value : "")) ? "should_be_raw"in t && t.should_be_raw ? e.append("value"in t ? t.value : "") : e.append(twig.filter.escape(this.env_, "value"in t ? t.value : "", "light_escape", null, !0)) : e.append("&nbsp;"),
                    e.append("</span></div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_list_cells_tracking_data"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/list/cells/tracking_data", t)
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
                    e.append('<div class="content-table__item__inner content-table__unsorted-actions">'),
                    "is_trash"in t && t.is_trash || (e.append('<span class="content-table__unsorted-action content-table__unsorted-action_decline js-cell-action-decline"><svg class="svg-icon svg-common--trash-dims "><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#common--trash"></use></svg></span>'),
                    "chats" == twig.attr("item"in t ? t.item : "", "unsorted_category") && e.append('<span class="content-table__unsorted-action content-table__unsorted-action_link js-cell-action-link"><svg class="svg-icon svg-common--linking-chain-dims"><use xlink:href="#common--linking-chain"></use></svg></span>'),
                    e.append('<span class="content-table__unsorted-action content-table__unsorted-action_accept js-cell-action-accept"><svg class="svg-icon svg-leads--unsorted-accept-dims"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#leads--unsorted-accept"></use></svg></span>')),
                    e.append("</div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_list_cells_unsorted_actions"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/list/cells/unsorted_actions", t)
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
                    e.append('<div class="content-table__item__inner" title="'),
                    "value"in t && "value"in t && t.value && e.append(twig.filter.escape(this.env_, "value"in t ? t.value : "", "light_escape", null, !0)),
                    e.append('"><span class="block-selectable">'),
                    "value"in t && "value"in t && t.value ? e.append(twig.filter.escape(this.env_, this.env_.filter("contact_name", twig.attr("value"in t ? t.value : "", "name")), "light_escape", null, !0)) : e.append("&nbsp;"),
                    e.append("</span></div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_list_cells_unsorted_contact"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/list/cells/unsorted_contact", t)
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
                    "sip" == twig.attr("item"in i ? i.item : "", "category") ? (t.append('<div class="content-table__item__inner content-table__unsorted-call-result">'),
                    "value"in i && "value"in i && i.value ? (t.append('<div class="call_analytics_text call_analytics_text_result" data-result="result">'),
                    new (e._get("interface/list/cells/text_pref_val.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        value: "text"in i ? i.text : ""
                    })),
                    t.append('</div><div class="content-table__unsorted-actions content-table__unsorted-actions_sip">'),
                    twig.attr("value"in i ? i.value : "", "duration") && (t.append('<span class="content-table__unsorted-text" data-result="duration">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("time", twig.attr("value"in i ? i.value : "", "duration")), "light_escape", null, !0)),
                    t.append("</span>")),
                    twig.attr("value"in i ? i.value : "", "link") && (t.append('<a href="'),
                    t.append(twig.filter.escape(this.env_, twig.attr("value"in i ? i.value : "", "link"), "light_escape", null, !0)),
                    t.append('" class="js-call-play icon--play content-table__unsorted-action"><svg class="svg-icon svg-controls--button-play-sm-dims js-icon-play"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#controls--button-play-sm"></use></svg><svg class="svg-icon svg-controls--button-stop-sm-dims js-icon-stop"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#controls--button-stop-sm"></use></svg></a><a href="'),
                    t.append(twig.filter.escape(this.env_, twig.attr("value"in i ? i.value : "", "link"), "light_escape", null, !0)),
                    t.append('" download="" class="content-table__unsorted-action" target="_blank"><svg class="svg-icon svg-controls--button-download-sm-dims"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#controls--button-download-sm"></use></svg></a>')),
                    t.append("</div>")) : t.append("&nbsp;"),
                    t.append("</div>")) : t.append('<div class="unsorted_detail__dote icon-hand js-show-detail"><span class="unsorted-dote--grey"></span><span class="unsorted-dote"></span></div>')
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_list_cells_unsorted_detail"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/list/cells/unsorted_detail", t)
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
                    "sip" == twig.attr("item"in i ? i.item : "", "category") ? (t.append('<div class="unsorted-forms__player">'),
                    new (e._get("interface/list/cells/unsorted_detail.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        value: twig.attr(twig.attr("item"in i ? i.item : "", twig.attr("field"in i ? i.field : "", "code"), void 0, "array"), "detail"),
                        text: twig.attr(twig.attr("item"in i ? i.item : "", twig.attr("field"in i ? i.field : "", "code"), void 0, "array"), "text_pref"),
                        item: "item"in i ? i.item : ""
                    })),
                    t.append("</div>")) : (t.append('<div class="content-table__item__inner"><div class="unsorted-forms__item clearfix"><div class="unsorted-forms__item__left unsorted-forms__item__left--'),
                    t.append(twig.filter.escape(this.env_, twig.attr("item"in i ? i.item : "", "category"), "light_escape", null, !0)),
                    t.append(' text-overflow-point">'),
                    twig.attr("item"in i ? i.item : "", "url", void 0, void 0, !0) && (t.append('<a class="list-row__template-name__table-wrapper__name-link js-navigate-link" href="'),
                    t.append(twig.filter.escape(this.env_, twig.attr("item"in i ? i.item : "", "url"), "light_escape", null, !0)),
                    t.append('">')),
                    new (e._get("interface/list/cells/text_pref_val.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        id: twig.attr("item"in i ? i.item : "", "id"),
                        value: twig.attr(twig.attr("item"in i ? i.item : "", twig.attr("field"in i ? i.field : "", "code"), void 0, "array"), "text_pref"),
                        format: twig.attr("field"in i ? i.field : "", "format"),
                        code: twig.attr("field"in i ? i.field : "", "default_code"),
                        params: twig.attr("field"in i ? i.field : "", "template_params"),
                        item: "item"in i ? i.item : ""
                    })),
                    twig.attr("item"in i ? i.item : "", "url", void 0, void 0, !0) && t.append("</a>"),
                    t.append('</div><div class="unsorted-forms__item__right unsorted-forms__item__right--'),
                    t.append(twig.filter.escape(this.env_, twig.attr("item"in i ? i.item : "", "category"), "light_escape", null, !0)),
                    t.append('">'),
                    new (e._get("interface/list/cells/unsorted_detail.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        id: twig.attr("item"in i ? i.item : "", "id"),
                        value: twig.attr(twig.attr("item"in i ? i.item : "", twig.attr("field"in i ? i.field : "", "code"), void 0, "array"), "detail"),
                        format: twig.attr("field"in i ? i.field : "", "format"),
                        code: twig.attr("field"in i ? i.field : "", "default_code"),
                        params: twig.attr("field"in i ? i.field : "", "template_params"),
                        item: "item"in i ? i.item : ""
                    })),
                    t.append("</div></div></div>"))
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_list_cells_unsorted_forms"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/list/cells/unsorted_forms", t)
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
                    t.append('<div class="content-table__item__inner content-table__item__inner-template-name '),
                    twig.attr("item"in i ? i.item : "", "tags") && twig.filter.length(this.env_, twig.attr(twig.attr("item"in i ? i.item : "", "tags"), "items")) && t.append("has-tags"),
                    t.append('"><div class="list-row__template-name__name">'),
                    "value"in i && "value"in i && i.value && (i.name = twig.attr("value"in i ? i.value : "", "text"),
                    2 == twig.attr("item"in i ? i.item : "", "element_type") && (i.name = this.env_.filter("lead_name", "name"in i ? i.name : "", twig.attr("item"in i ? i.item : "", "id"))),
                    twig.attr("value"in i ? i.value : "", "url") ? (t.append('<a href="'),
                    t.append(twig.filter.escape(this.env_, twig.attr("value"in i ? i.value : "", "url"), "light_escape", null, !0)),
                    t.append('" class="js-navigate-link list-row__template-name__table-wrapper__name-link" title="'),
                    t.append(twig.filter.escape(this.env_, twig.attr("value"in i ? i.value : "", "text"), "light_escape", null, !0)),
                    t.append('">'),
                    t.append(twig.filter.escape(this.env_, "name"in i ? i.name : "", "light_escape", null, !0)),
                    t.append("</a>")) : (t.append('<span class="list-row__template-name__table-wrapper__name-text" title="'),
                    t.append(twig.filter.escape(this.env_, twig.attr("value"in i ? i.value : "", "text"), "light_escape", null, !0)),
                    t.append('">'),
                    t.append(twig.filter.escape(this.env_, "name"in i ? i.name : "", "light_escape", null, !0)),
                    t.append("</span>"))),
                    t.append("</div>"),
                    new (e._get("interface/list/cells/unsorted_type.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        type: twig.attr("item"in i ? i.item : "", "unsorted_category")
                    })),
                    t.append("</div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_list_cells_unsorted_name"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/list/cells/unsorted_name", t)
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
                    twig.empty("type"in t ? t.type : "") || (e.append('<div class="list-row__template-name__unsorted-type"><svg class="svg-icon svg-leads--unsorted_'),
                    e.append(twig.filter.escape(this.env_, "type"in t ? t.type : "", "light_escape", null, !0)),
                    e.append('-dims list-row__template-name__unsorted-type-icon"><use xlink:href="#leads--unsorted_'),
                    e.append(twig.filter.escape(this.env_, "type"in t ? t.type : "", "light_escape", null, !0)),
                    e.append('"></use></svg><span class="list-row__template-name__unsorted-type-name">'),
                    t.type_name = "unsorted " + ("type"in t ? t.type : ""),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "type_name"in t ? t.type_name : ""), "light_escape", null, !0)),
                    e.append("</span></div>"))
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_list_cells_unsorted_type"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/list/cells/unsorted_type", t)
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
                    t.append('<div class="content-table__item__inner"><span class="block-selectable">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("value"in i ? i.value : "", "name"), "light_escape", null, !0)),
                    t.append("</span>"),
                    twig.attr("item"in i ? i.item : "", "isMfaEnabled") && (t.append('<div class="list-row__template-user_email__mfa">'),
                    new (e._get("interface/controls/button.twig"))(this.env_).render_(t, {
                        class_name: "js-list-mfa list-row__template-user_email__mfa-icon",
                        svg_class_name: "common--security",
                        plain: !0
                    }),
                    t.append("</div>")),
                    t.append("</div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_list_cells_user_email"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/list/cells/user_email", t)
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
                    e.append('<div class="content-table__item__inner operday-analytic__list-cell__weekday '),
                    twig.attr("value"in t ? t.value : "", "operday_id", void 0, void 0, !0) && e.append("operday-analytic__list-cell__weekday--clickable js-weekday-cell"),
                    e.append(" "),
                    "expired" == twig.attr("value"in t ? t.value : "", "status") ? e.append("operday-analytic__list-cell__weekday--expired") : 1 == twig.attr("value"in t ? t.value : "", "fresh_update") && e.append(" operday-analytic__list-cell__weekday--fresh"),
                    e.append('" data-id="'),
                    e.append(twig.filter.escape(this.env_, twig.attr("value"in t ? t.value : "", "operday_id"), "light_escape", null, !0)),
                    e.append('" data-spent-time="'),
                    e.append(twig.filter.escape(this.env_, twig.attr("value"in t ? t.value : "", "spent_time"), "light_escape", null, !0)),
                    e.append('" data-break="'),
                    e.append(twig.filter.escape(this.env_, twig.attr("value"in t ? t.value : "", "break_time"), "light_escape", null, !0)),
                    e.append('" data-name="'),
                    e.append(twig.filter.escape(this.env_, twig.attr("value"in t ? t.value : "", "name"), "light_escape", null, !0)),
                    e.append('"><span '),
                    "expired" == twig.attr("value"in t ? t.value : "", "status") && e.append('style="margin-right: 4px;"'),
                    e.append(" >"),
                    "00:00" != twig.attr("value"in t ? t.value : "", "time") || twig.attr("value"in t ? t.value : "", "operday_id", void 0, void 0, !0) ? e.append(twig.filter.escape(this.env_, twig.attr("value"in t ? t.value : "", "time"), "light_escape", null, !0)) : e.append("—"),
                    e.append("</span>"),
                    "expired" == twig.attr("value"in t ? t.value : "", "status") && e.append('<svg class="svg-icon svg-analytics--overdue-timer-dims"><use xlink:href="#analytics--overdue-timer"></use></svg>'),
                    e.append("</div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_list_cells_weekday"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/list/cells/weekday", t)
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
                    new (e._get("interface/controls/checkboxes_dropdown.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        items: twig.attr("item"in i ? i.item : "", "categories"),
                        title_empty: this.env_.filter("i18n", "Not filled"),
                        class_name: "js-category-select"
                    }))
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_list_cells_widget_category_multiselect"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/list/cells/widget_category_multiselect", t)
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
                    new (e._get("interface/controls/checkboxes_dropdown.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        items: twig.attr("item"in i ? i.item : "", "collections"),
                        title_empty: this.env_.filter("i18n", "Not filled"),
                        class_name: "js-collection-select"
                    }))
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_list_cells_widget_collection_multiselect"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/list/cells/widget_collection_multiselect", t)
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
                    t.append('<div class="content-table__item__inner content-table__item__inner-template-name operday__list-cell__name-wrapper js-row-expander" data-id="'),
                    t.append(twig.filter.escape(this.env_, "id"in i ? i.id : "", "light_escape", null, !0)),
                    t.append('"><div class="list-row__template-name__name operday__list-cell__name-inner-wrapper">'),
                    "value"in i && "value"in i && i.value && (i.name = twig.attr("value"in i ? i.value : "", "text"),
                    i.contact_name = twig.attr("value"in i ? i.value : "", "contact_name"),
                    i.company_name = twig.attr("value"in i ? i.value : "", "company_name"),
                    i.id = twig.attr("value"in i ? i.value : "", "id"),
                    i.entity_id = twig.attr("value"in i ? i.value : "", "entity_id"),
                    t.append("<"),
                    twig.attr("value"in i ? i.value : "", "url") ? (t.append('a href="'),
                    t.append(twig.filter.escape(this.env_, twig.attr("value"in i ? i.value : "", "url"), "light_escape", null, !0)),
                    t.append('"')) : t.append("span"),
                    t.append(' class="'),
                    twig.attr("value"in i ? i.value : "", "url") && t.append("js-navigate-link"),
                    t.append(' list-row__template-name__table-wrapper__name-text operday__list-cell__name" data-id="'),
                    t.append(twig.filter.escape(this.env_, "id"in i ? i.id : "", "light_escape", null, !0)),
                    t.append('" title="'),
                    t.append(twig.filter.escape(this.env_, "name"in i ? i.name : "", "light_escape", null, !0)),
                    t.append('">'),
                    "name"in i && i.name && (t.append('<span class="operday__cell__entity-name">'),
                    t.append(twig.filter.escape(this.env_, "name"in i ? i.name : "", "light_escape", null, !0)),
                    t.append("</span> ")),
                    "contact_name"in i && i.contact_name && (t.append('<span class="operday__cell__contact-name">'),
                    t.append(twig.filter.escape(this.env_, "contact_name"in i ? i.contact_name : "", "light_escape", null, !0)),
                    "company_name"in i && i.company_name && t.append(","),
                    t.append("</span> ")),
                    "company_name"in i && i.company_name && (t.append('<span class="operday__cell__tiny">'),
                    t.append(twig.filter.escape(this.env_, "company_name"in i ? i.company_name : "", "light_escape", null, !0)),
                    t.append("</span>")),
                    t.append("</"),
                    twig.attr("value"in i ? i.value : "", "url") ? t.append("a") : t.append("span"),
                    t.append(">")),
                    t.append('</div><div class="operday__list-cell__parts-name js-parts-name" data-id="'),
                    t.append(twig.filter.escape(this.env_, "id"in i ? i.id : "", "light_escape", null, !0)),
                    t.append('">'),
                    new (e._get("interface/list/operday/entity_detail_name.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        count: 6
                    })),
                    t.append("</div></div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_list_cells_workspace_entity_name"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/list/cells/workspace_entity_name", t)
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
                    i.additional_class = twig.attr("value"in i ? i.value : "", "was_time_edited_by_user") ? "" : "operday__time-spent--grey",
                    t.append('<div class="content-table__item__inner-template-name operday__time-spent__cell operday__table__time-suggest">'),
                    "value"in i && "value"in i && i.value && (twig.attr("value"in i ? i.value : "", "is_heads_report") ? (t.append('<span class="operday__spent-time__not-editable '),
                    twig.attr("value"in i ? i.value : "", "was_time_edited_by_user") || t.append("operday__time-spent__cell--grey"),
                    t.append('">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("value"in i ? i.value : "", "time"), "light_escape", null, !0)),
                    t.append("</span>")) : new (e._get("interface/controls/time.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        name: "spent_time",
                        input_tmpl: "suggest",
                        input_class_name: "operday__time-spent__input js-spent-time-input " + ("additional_class"in i ? i.additional_class : ""),
                        class_name: "js-spent-time-suggest operday__time-spent__suggest",
                        time_intervals: !0,
                        selected: "00:00" != twig.attr("value"in i ? i.value : "", "time") ? twig.attr("value"in i ? i.value : "", "time") : "",
                        selected_should_be_empty: !0,
                        additional_data: 'data-id="' + twig.attr("value"in i ? i.value : "", "id") + '"',
                        id: twig.attr("value"in i ? i.value : "", "id")
                    }))),
                    t.append('<div class="operday__list-cell__parts-value js-parts-value" data-id="'),
                    t.append(twig.filter.escape(this.env_, "id"in i ? i.id : "", "light_escape", null, !0)),
                    t.append('">'),
                    new (e._get("interface/list/operday/entity_detail_value.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        count: 6
                    })),
                    t.append("</div></div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_list_cells_workspace_spent_time"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/list/cells/workspace_spent_time", t)
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
                    t.append('<div class="linked-form__field linked-form__field-'),
                    t.append(twig.filter.escape(this.env_, twig.attr("field"in i ? i.field : "", "template"), "light_escape", null, !0)),
                    t.append(" "),
                    twig.attr("item"in i ? i.item : "", "hidden") && t.append("h-hidden"),
                    t.append('"><div class="linked-form__field__label linked-form__field__label-multiple">'),
                    twig.attr("item"in i ? i.item : "", "disabled_select") && (i.sel_disabled = "Y"),
                    new (e._get("interface/controls/select.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        items: twig.attr("field"in i ? i.field : "", "enums"),
                        selected: twig.attr("item"in i ? i.item : "", "enum"),
                        name: twig.attr("item"in i ? i.item : "", "enum_name"),
                        class_name: "linked-form__select",
                        disabled: "sel_disabled"in i ? i.sel_disabled : ""
                    })),
                    t.append('</div><div class="linked-form__field__value">'),
                    null === twig.attr("item"in i ? i.item : "", "value") && (i.item = twig.filter.merge("item"in i ? i.item : "", {
                        value: ""
                    })),
                    i.tmpl = "interface/list/cells_edit/fields/" + twig.attr("field"in i ? i.field : "", "template") + ".twig",
                    "phone" == twig.attr("field"in i ? i.field : "", "pei_type") && (i.tmpl = "interface/list/cells_edit/fields/phone.twig"),
                    new (e._get("tmpl"in i ? i.tmpl : ""))(this.env_).render_(t, twig.extend({}, i, {
                        field: "field"in i ? i.field : "",
                        item: "item"in i ? i.item : "",
                        element: "element"in i ? i.element : "",
                        name: twig.attr("item"in i ? i.item : "", "name"),
                        type: twig.attr("field"in i ? i.field : "", "template"),
                        placeholder: twig.attr("item"in i ? i.item : "", "placeholder")
                    })),
                    t.append("</div></div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_list_cells_edit_multiple_item"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/list/cells_edit/multiple/item", t)
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
                    t.append('<div class="linked-form__multiple-container">'),
                    i._parent = i;
                    var a = twig.attr("values"in i ? i.values : "", "values")
                      , l = !1
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
                        i._key = a,
                        i.val = n,
                        new (e._get("interface/list/cells_edit/multiple/item.twig"))(this.env_).render_(t, twig.extend({}, i, {
                            item: "val"in i ? i.val : "",
                            field: "field"in i ? i.field : ""
                        })),
                        l = !0,
                        ++r.index0,
                        ++r.index,
                        r.first = !1,
                        r.length && (--r.revindex0,
                        --r.revindex,
                        r.last = 0 === r.revindex0)
                    }
                    ), this),
                    l || new (e._get("interface/list/cells_edit/multiple/item.twig"))(this.env_).render_(t, i),
                    t.append('<div class="linked-form__field linked-form__field-buttons"><div class="linked-form__field__label linked-form__field__label-multiple"></div><div class="linked-form__field__value">'),
                    i.MAX_MULTIPLE_FIELD_VALUES = 500,
                    t.append('<div class="linked-form__field-add-multiple js-cell-edit__field-add-multiple" '),
                    twig.attr("values"in i ? i.values : "", "values") && twig.attr(twig.attr("values"in i ? i.values : "", "values"), "count") < ("MAX_MULTIPLE_FIELD_VALUES"in i ? i.MAX_MULTIPLE_FIELD_VALUES : "") && t.append('style="display: block"'),
                    t.append('><div class="linked-form__field__value"></div></div>'),
                    new (e._get("interface/list/cells_edit/action_buttons.twig"))(this.env_).render_(t, i),
                    t.append("</div></div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_list_cells_edit_multiple_items"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/list/cells_edit/multiple/items", t)
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
                    return e._get("interface/list/cells_edit/fields/textarea.twig")
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    this.getParent(t).render_(e, t, twig.extend({}, this.getBlocks(), i))
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_list_cells_edit_fields_address"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/list/cells_edit/fields/address", t)
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
                    new (e._get("interface/controls/budget.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        class_name: "linked-form__cf",
                        wrapper_class_name: "control-price_cell-edit",
                        short: !0,
                        allow_zero: !0,
                        autosized: !1,
                        max_length: 22
                    }))
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_list_cells_edit_fields_budget"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/list/cells_edit/fields/budget", t)
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
                    new (e._get("interface/controls/chained_list.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        name: twig.attr("field"in i ? i.field : "", "name"),
                        input_class_name: "linked-form__cf",
                        lists: twig.attr(twig.attr("field"in i ? i.field : "", "settings"), "chained_lists"),
                        values: "value"in i ? i.value : ""
                    }))
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_list_cells_edit_fields_chained_list"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/list/cells_edit/fields/chained_list", t)
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
                    new (e._get("interface/controls/checkbox.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        text: "",
                        value: 1,
                        checked: twig.contains([this.env_.filter("i18n", "Yes"), "1"], "value"in i ? i.value : "")
                    }))
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_list_cells_edit_fields_checkbox"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/list/cells_edit/fields/checkbox", t)
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
                    new (e._get("interface/controls/date_field.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        input_class: "linked-form__cf linked-form__cf_empty-visible",
                        type: "single"
                    }))
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_list_cells_edit_fields_date"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/list/cells_edit/fields/date", t)
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
                    new (e._get("interface/controls/date_time_field.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        input_class: "linked-form__cf linked-form__cf_empty-visible",
                        type: "single"
                    }))
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_list_cells_edit_fields_date_time"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/list/cells_edit/fields/date_time", t)
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
                    new (e._get("interface/controls/drive_field.twig"))(this.env_).render_(t, {
                        name: twig.attr("field"in i ? i.field : "", "name"),
                        file_id: twig.attr("value"in i ? i.value : "", "file_uuid"),
                        file_name: twig.attr("value"in i ? i.value : "", "file_name"),
                        file_size: twig.attr("value"in i ? i.value : "", "file_size"),
                        field_id: twig.attr("field"in i ? i.field : "", "id"),
                        element_id: twig.attr("element"in i ? i.element : "", "id"),
                        element_type: twig.attr("element"in i ? i.element : "", "element_type"),
                        file_name_type: "file-name-list",
                        is_deleted: twig.attr("value"in i ? i.value : "", "is_deleted")
                    })
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_list_cells_edit_fields_file"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/list/cells_edit/fields/file", t)
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
                    "unit_price" == twig.attr("field"in i ? i.field : "", "id") ? new (e._get("interface/controls/input.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        class_name: "linked-form__cf js-control-allow-numeric-float-price"
                    })) : "quantity" == twig.attr("field"in i ? i.field : "", "id") ? (new (e._get("interface/controls/input.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        class_name: "linked-form__cf js-control-allow-numeric-float-quantity"
                    })),
                    t.append("&nbsp;"),
                    t.append(twig.filter.escape(this.env_, "unit_type"in i ? i.unit_type : "", "light_escape", null, !0))) : "vat" == twig.attr("field"in i ? i.field : "", "id") ? (new (e._get("interface/list/cells_edit/fields/numeric.twig"))(this.env_).render_(t, i),
                    t.append("%")) : "discount" == twig.attr("field"in i ? i.field : "", "id") ? (new (e._get("interface/controls/input.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        value: twig.attr("value"in i ? i.value : "", "value", void 0, void 0, !0) ? twig.filter.def(twig.attr("value"in i ? i.value : "", "value"), "") : "",
                        class_name: "linked-form__cf js-control-allow-numeric-float-price"
                    })),
                    "%" != twig.attr("value"in i ? i.value : "", "type") && t.append("&nbsp;"),
                    new (e._get("interface/controls/select.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        name: "discount_type",
                        items: [{
                            id: "amount",
                            option: "discount_amount"in i ? i.discount_amount : ""
                        }, {
                            id: "percentage",
                            option: "%"
                        }],
                        selected: twig.attr("value"in i ? i.value : "", "type")
                    }))) : new (e._get("interface/list/cells_edit/fields/text.twig"))(this.env_).render_(t, i)
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_list_cells_edit_fields_invoice_cell"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/list/cells_edit/fields/invoice_cell", t)
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
                    new (e._get("interface/controls/legal_entity.twig"))(this.env_).render_(t, i)
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_list_cells_edit_fields_legal_entity"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/list/cells_edit/fields/legal_entity", t)
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
                    new (e._get("interface/controls/input.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        class_name: "linked-form__cf",
                        additional_data: 'spellcheck="false"',
                        type: "text"
                    })),
                    "unlink_allowed"in i && i.unlink_allowed && (t.append('<div class="cell-edit__input-icon cell-edit__input-icon_unlink js-cell-edit__input-icon_unlink" title="'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Detach"), "light_escape", null, !0)),
                    t.append('"><span class="icon icon-unlink"></span></div>'))
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_list_cells_edit_fields_linked"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/list/cells_edit/fields/linked", t)
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
                    i.additional_data = "",
                    "thread" == twig.attr("field"in i ? i.field : "", "default_code") ? (i.additional_data = 'data-no-filter="true"',
                    i.ajax = {
                        url: "/ajax/v1/elements/list",
                        params: "term=#q#"
                    }) : i.ajax = {
                        url: "/ajax/search/",
                        params: "type=" + ("entity"in i ? i.entity : "") + "&query_type=name&q=#q#"
                    },
                    new (e._get("interface/controls/suggest.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        class_name: "cell-edit__suggest cell-edit__suggest-linked",
                        additional_data: 'spellcheck="false" ' + ("additional_data"in i ? i.additional_data : ""),
                        input_class_name: "linked-form__cf linked-form__ajax-input text-input-visible-placeholder",
                        ajax: "ajax"in i ? i.ajax : "",
                        items: [],
                        selected: "",
                        type: "name"
                    }))
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_list_cells_edit_fields_linked_new"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/list/cells_edit/fields/linked_new", t)
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
                    new (e._get("interface/users_select/users_select_items.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        items: "value"in i ? i.value : "",
                        class_name: "card-fields__fields-block__users-select",
                        id: "lead_main_user-users_select_holder",
                        input_name: "name"in i ? i.name : ""
                    }))
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_list_cells_edit_fields_manager"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/list/cells_edit/fields/manager", t)
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
                    new (e._get("interface/list/cells_edit/fields/budget.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        currency: twig.attr(twig.attr("field"in i ? i.field : "", "settings"), "currency"),
                        short: !0
                    }))
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_list_cells_edit_fields_monetary"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/list/cells_edit/fields/monetary", t)
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
                    i.checked = 0,
                    "selected"in i && i.selected && (i.checked = twig.filter.length(this.env_, "selected"in i ? i.selected : "")),
                    i.items = [],
                    i._parent = i;
                    var a = "enums"in i ? i.enums : "";
                    twig.forEach(a, (function(e, t) {
                        i._key = t,
                        i.item = e,
                        i.items = twig.filter.merge("items"in i ? i.items : "", [{
                            id: twig.attr("item"in i ? i.item : "", "id"),
                            prefix: twig.attr("item"in i ? i.item : "", "prefix"),
                            name: twig.attr("item"in i ? i.item : "", "name"),
                            option: twig.attr("item"in i ? i.item : "", "value"),
                            is_checked: twig.contains("selected"in i ? i.selected : "", twig.attr("item"in i ? i.item : "", "id"))
                        }])
                    }
                    ), this),
                    ("checked"in i ? i.checked : "") > 0 ? ("checked"in i ? i.checked : "") == twig.filter.length(this.env_, "items"in i ? i.items : "") ? i.title = twig.attr("lang"in i ? i.lang : "", "linked_all") + " " + this.env_.filter("numeral", twig.attr("lang"in i ? i.lang : "", "cf_values_numeral"), "all") : i.title = ("checked"in i ? i.checked : "") + " " + this.env_.filter("numeral", twig.attr("lang"in i ? i.lang : "", "cf_values_numeral"), "checked"in i ? i.checked : "") : i.title = "placeholder"in i ? i.placeholder : "",
                    ("checked"in i ? i.checked : "") > 0 && (i.class_name = "is_checked_dropdown"),
                    new (e._get("interface/controls/checkboxes_dropdown.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        name: "name"in i ? i.name : "",
                        title: "title"in i ? i.title : "",
                        title_numeral: twig.attr("lang"in i ? i.lang : "", "cf_values_numeral"),
                        title_empty: "placeholder"in i ? i.placeholder : "",
                        items: "items"in i ? i.items : "",
                        class_name: "class_name"in i ? i.class_name : ""
                    }))
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_list_cells_edit_fields_multiselect"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/list/cells_edit/fields/multiselect", t)
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
                    1 == twig.attr("element"in i ? i.element : "", "element_type") ? new (e._get("interface/controls/fullname/index.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        input_class_name: "linked-form__cf",
                        additional_data: 'spellcheck="false"',
                        placeholder: this.env_.filter("i18n", "Full Name"),
                        first_name: {
                            name: "first_name",
                            value: "first_name"in i ? twig.filter.def("first_name"in i ? i.first_name : "", "value"in i ? i.value : "") : "value"in i ? i.value : ""
                        },
                        last_name: {
                            name: "last_name",
                            value: "last_name"in i ? i.last_name : ""
                        },
                        comfort_zone: 0
                    })) : (2 == twig.attr("element"in i ? i.element : "", "element_type") ? i.placeholder = this.env_.filter("lead_name", "", twig.attr("element"in i ? i.element : "", "id")) : 12 == twig.attr(twig.attr("element"in i ? i.element : "", "element"), "type") && (i.placeholder = this.env_.filter("customer_name", "", twig.attr("element"in i ? i.element : "", "id"))),
                    new (e._get("interface/list/cells_edit/fields/text.twig"))(this.env_).render_(t, i))
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_list_cells_edit_fields_name"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/list/cells_edit/fields/name", t)
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
                    new (e._get("interface/controls/customers/select_with_data.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        next_date: "value"in i ? i.value : "",
                        is_after: "failed"in i ? i.failed : "",
                        show_purchase_button: !0,
                        next_date_name: "name"in i ? i.name : "",
                        wrapper_class: "customers-date_in-list",
                        list_class_name: "customers-date__list_in-list"
                    }))
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_list_cells_edit_fields_next_date"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/list/cells_edit/fields/next_date", t)
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
                    new (e._get("interface/controls/input.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        class_name: "linked-form__cf js-control-allow-numeric-float",
                        additional_data: 'data-allow-zero="y"'
                    }))
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_list_cells_edit_fields_numeric"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/list/cells_edit/fields/numeric", t)
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
                    new (e._get("interface/controls/input.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        value: twig.attr("item"in i ? i.item : "", "value"),
                        name: "name"in i ? i.name : "",
                        placeholder: "placeholder"in i ? i.placeholder : "",
                        class_name: "linked-form__cf",
                        type: "text"
                    }))
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_list_cells_edit_fields_pei"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/list/cells_edit/fields/pei", t)
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
                    new (e._get("interface/controls/phone.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        value: twig.attr("item"in i ? i.item : "", "value"),
                        input_class_name: "linked-form__cf linked-form__cf_phone"
                    }))
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_list_cells_edit_fields_phone"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/list/cells_edit/fields/phone", t)
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
                    return e._get("interface/list/cells_edit/fields/budget.twig")
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    this.getParent(t).render_(e, t, twig.extend({}, this.getBlocks(), i))
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_list_cells_edit_fields_price"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/list/cells_edit/fields/price", t)
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
                    t.append('<div class="linked-form__field__value-container custom-scroll">'),
                    i._parent = i;
                    var a = "enums"in i ? i.enums : ""
                      , l = {
                        index0: 0,
                        index: 1,
                        first: !0
                    };
                    if (twig.countable(a)) {
                        var r = twig.count(a);
                        l.revindex0 = r - 1,
                        l.revindex = r,
                        l.length = r,
                        l.last = 1 === r
                    }
                    twig.forEach(a, (function(n, a) {
                        i._key = a,
                        i.variant = n,
                        new (e._get("interface/controls/radio.twig"))(this.env_).render_(t, twig.extend({}, i, {
                            name: "name"in i ? i.name : "",
                            selected: ("selected"in i ? i.selected : "") == twig.attr("variant"in i ? i.variant : "", "id"),
                            prefix: twig.attr("variant"in i ? i.variant : "", "prefix"),
                            label: twig.attr("variant"in i ? i.variant : "", "value"),
                            value: twig.attr("variant"in i ? i.variant : "", "id")
                        })),
                        ++l.index0,
                        ++l.index,
                        l.first = !1,
                        l.length && (--l.revindex0,
                        --l.revindex,
                        l.last = 0 === l.revindex0)
                    }
                    ), this),
                    t.append("</div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_list_cells_edit_fields_radio"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/list/cells_edit/fields/radio", t)
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
                    i.items = "enums_no_empty"in i && i.enums_no_empty ? [] : [{
                        id: "",
                        option: "placeholder"in i ? i.placeholder : ""
                    }],
                    i._parent = i;
                    var a = "enums"in i ? i.enums : "";
                    twig.forEach(a, (function(e, t) {
                        i._key = t,
                        i.item = e,
                        i.items = twig.filter.merge("items"in i ? i.items : "", [{
                            id: twig.attr("item"in i ? i.item : "", "id"),
                            option: twig.attr("item"in i ? i.item : "", "value"),
                            bg_color: twig.attr(twig.attr("item"in i ? i.item : "", "settings"), "color"),
                            disabled: twig.attr("item"in i ? i.item : "", "disabled"),
                            text_color: twig.attr("item"in i ? i.item : "", "text_color")
                        }])
                    }
                    ), this),
                    new (e._get("interface/controls/select.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        name: "name"in i ? i.name : "",
                        selected: "selected"in i ? i.selected : "",
                        items: "items"in i ? i.items : "",
                        class_name: "linked-form__select"
                    }))
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_list_cells_edit_fields_select"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/list/cells_edit/fields/select", t)
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
                    i.options = [{
                        value: "",
                        option: "...",
                        id: ""
                    }],
                    i._parent = i;
                    var a = twig.attr(twig.attr("field"in i ? i.field : "", "variants"), "country");
                    twig.forEach(a, (function(e, t) {
                        i.key = t,
                        i.value = e,
                        i.options = twig.filter.merge("options"in i ? i.options : "", [{
                            id: twig.filter.upper(this.env_, "key"in i ? i.key : ""),
                            option: "value"in i ? i.value : ""
                        }])
                    }
                    ), this),
                    i._parent = i,
                    a = twig.attr("values"in i ? i.values : "", "values"),
                    twig.forEach(a, (function(e, t) {
                        i._key = t,
                        i.item = e,
                        "country" == twig.attr("item"in i ? i.item : "", "enum") ? i.item = {
                            subtype_name: twig.attr("item"in i ? i.item : "", "enum"),
                            name: twig.attr("item"in i ? i.item : "", "name"),
                            selected: twig.attr("item"in i ? i.item : "", "value"),
                            items: "options"in i ? i.options : ""
                        } : i.item = {
                            subtype_name: twig.attr("item"in i ? i.item : "", "enum"),
                            name: twig.attr("item"in i ? i.item : "", "name"),
                            value: twig.attr("item"in i ? i.item : "", "value"),
                            placeholder: twig.attr("item"in i ? i.item : "", "placeholder"),
                            additional_data: "data-placeholder-1='" + twig.attr("lang"in i ? i.lang : "", twig.attr("item"in i ? i.item : "", "enum") + "_placeholder", void 0, "array") + "' data-placeholder-2='...'",
                            class_name: "linked-form__cf"
                        },
                        "zip" == twig.attr("item"in i ? i.item : "", "subtype_name") && (i.item = twig.filter.merge("item"in i ? i.item : "", {
                            class_name: twig.attr("item"in i ? i.item : "", "class_name") + " js-control-allow-zip"
                        })),
                        i.items = twig.filter.merge("items"in i ? i.items : "", ["item"in i ? i.item : ""])
                    }
                    ), this),
                    new (e._get("interface/controls/smart_address.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        items: "items"in i ? i.items : "",
                        wrapper_class_name: "wrapper_class_name"in i ? i.wrapper_class_name : ""
                    }))
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_list_cells_edit_fields_smart_address"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/list/cells_edit/fields/smart_address", t)
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
                    new (e._get("interface/controls/pipeline_select/index.twig"))(this.env_).render_(t, twig.extend({}, i, "statuses"in i ? i.statuses : ""))
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_list_cells_edit_fields_status"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/list/cells_edit/fields/status", t)
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
                    new (e._get("interface/common/tasks_date.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        id: "id"in i ? i.id : "",
                        type: "type"in i ? i.type : "",
                        main_user: "responsible_user"in i ? i.responsible_user : "",
                        text: "text"in i ? i.text : "",
                        class_name: "",
                        date: "complete_till"in i ? i.complete_till : "",
                        duration: "duration"in i ? i.duration : ""
                    }))
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_list_cells_edit_fields_task_date"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/list/cells_edit/fields/task_date", t)
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
                    new (e._get("interface/controls/input.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        class_name: "linked-form__cf",
                        additional_data: 'spellcheck="false"',
                        type: "text"
                    }))
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_list_cells_edit_fields_text"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/list/cells_edit/fields/text", t)
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
                    new (e._get("interface/controls/textarea.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        class_name: "linked-form__cf",
                        additional_data: 'spellcheck="false"'
                    }))
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_list_cells_edit_fields_textarea"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/list/cells_edit/fields/textarea", t)
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
                    new (e._get("interface/controls/input.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        class_name: "linked-form__cf",
                        additional_data: 'spellcheck="false"',
                        text: "url"
                    }))
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_list_cells_edit_fields_url"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/list/cells_edit/fields/url", t)
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
                    new (e._get("interface/controls/input.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        class_name: "linked-form__cf js-control-allow-zip"
                    }))
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_list_cells_edit_fields_zip"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/list/cells_edit/fields/zip", t)
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
        e._sentryDebugIds[t] = "4d62b6a9-7f38-48c5-bce4-866a555e808d",
        e._sentryDebugIdIdentifier = "sentry-dbid-4d62b6a9-7f38-48c5-bce4-866a555e808d")
    } catch (e) {}
}();
//# sourceMappingURL=98296.e93abe95a380959c9b74.js.map
