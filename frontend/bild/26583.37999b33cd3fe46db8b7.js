(window.webpackChunk = window.webpackChunk || []).push([[26583, 56108, 20565], {
    955206: (e, t, i) => {
        var n, s;
        n = [i(460159), i(898296), i(542663), i(94849), i(842355), i(295165)],
        void 0 === (s = function(e) {
            (function() {
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
                    t.not_show_chbx = !0,
                    this.getParent(t).render_(e, t, twig.extend({}, this.getBlocks(), i))
                }
                ,
                t.prototype.block_body = function(t, i, n) {
                    if (n = void 0 === n ? {} : n,
                    twig.filter.length(this.env_, "items"in i ? i.items : "")) {
                        i._parent = i;
                        var s = "items"in i ? i.items : ""
                          , l = {
                            index0: 0,
                            index: 1,
                            first: !0
                        };
                        if (twig.countable(s)) {
                            var a = twig.count(s);
                            l.revindex0 = a - 1,
                            l.revindex = a,
                            l.length = a,
                            l.last = 1 === a
                        }
                        twig.forEach(s, (function(n, s) {
                            i._key = s,
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
                        s = twig.range(1, 5),
                        l = {
                            index0: 0,
                            index: 1,
                            first: !0
                        },
                        twig.countable(s) && (a = twig.count(s),
                        l.revindex0 = a - 1,
                        l.revindex = a,
                        l.length = a,
                        l.last = 1 === a),
                        twig.forEach(s, (function(e, n) {
                            i._key = n,
                            i.i = e,
                            t.append('<div class="list-row js-list-row">');
                            var s = "fields"in i ? i.fields : ""
                              , a = {
                                parent: l,
                                index0: 0,
                                index: 1,
                                first: !0
                            };
                            twig.forEach(s, (function(e, n) {
                                i._key = n,
                                i.field = e,
                                twig.attr("field"in i ? i.field : "", "shown") && (t.append('<div class="list-row__cell js-list-row__cell list-row__cell-template-'),
                                t.append(twig.filter.escape(this.env_, twig.attr("field"in i ? i.field : "", "template"), "light_escape", null, !0)),
                                t.append(" list-row__cell-"),
                                t.append(twig.filter.escape(this.env_, twig.attr("field"in i ? i.field : "", "code"), "light_escape", null, !0)),
                                t.append('"><div class="content-table__item__inner">'),
                                1 == ("i"in i ? i.i : "") && 1 == twig.attr(a, "index") && t.append('<svg class="list-row__company-icon svg-icon svg-common--company-dims "><use xlink:href="#common--company"></use></svg>'),
                                ("i"in i ? i.i : "") <= 3 && twig.attr(a, "index") <= 2 && (i.line_class_name = twig.attr("line_class"in i ? i.line_class : "", twig.attr(a, "index"), void 0, "array"),
                                t.append("<div class='dashboard_contacts_plug__item__line "),
                                t.append(twig.filter.escape(this.env_, twig.attr("line_class"in i ? i.line_class : "", twig.attr(a, "index"), void 0, "array"), "light_escape", null, !0)),
                                t.append("' style=\"width: "),
                                t.append(twig.filter.escape(this.env_, twig.attr(twig.attr("line_width"in i ? i.line_width : "", "i"in i ? i.i : "", void 0, "array"), "line_class_name"in i ? i.line_class_name : "", void 0, "array"), "light_escape", null, !0)),
                                t.append('"></div>')),
                                t.append("</div></div>"),
                                ++a.index0,
                                ++a.index,
                                a.first = !1)
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
                t.prototype.getTemplateName = function() {
                    return "interface_authlog_inner"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/authlog/inner", t)
            }
            )(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e),
                    this.setBlocks({
                        not_in_list: twig.bind(this.block_not_in_list, this),
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
                    t.aside_toggleable = !0,
                    t.no_fixed_top = !0,
                    this.getParent(t).render_(e, t, twig.extend({}, this.getBlocks(), i))
                }
                ,
                t.prototype.block_not_in_list = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    new (e._get("interface/reports/aside.twig"))(this.env_).render_(t, i)
                }
                ,
                t.prototype.block_list_top_right = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    t.append('<div class="content__top"><div class="content__top__sidebar__toggler"><span id="sidebar_toggler" class="content__top__preset__filter_icon"><span class="icon icon-list filter-toggle-icon"></span></span></div><div class="content__top__actions">'),
                    new (e._get("interface/controls/button.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        text: twig.attr("lang"in i ? i.lang : "", "filter_results_title"),
                        inner_class_name: "button-input-more-inner",
                        icon_class_name: "filter-icon",
                        id: "filter_show_btn",
                        class_name: "button-input-inner button-input-more-inner filter-sidebar",
                        icon_right_name: "icon-arrow",
                        context_menu_array: twig.attr(twig.attr("filter"in i ? i.filter : "", "managers"), "items")
                    })),
                    t.append('</div><div class="content__top__title"><h2 class="content__top__preset__caption">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "common_list"), "light_escape", null, !0)),
                    t.append('</h2></div><a href="/settings/users/" class="js-navigate-link">'),
                    new (e._get("interface/controls/button.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        text: this.env_.filter("i18n", "Exit")
                    })),
                    t.append("</a></div>")
                }
                ,
                t.prototype.block_static = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    e.append(twig.filter.escape(this.env_, this.env_.invoke("inject_static", ["analytics.css", "settings_authlog.php"], this), "light_escape", null, !0))
                }
                ,
                t.prototype.block_list_body = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    new (e._get("interface/authlog/inner.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        fields: "fields"in i ? i.fields : "",
                        items: "items"in i ? i.items : ""
                    }))
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_authlog_list"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/authlog/list", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e),
                    this.setBlocks({
                        head: twig.bind(this.block_head, this),
                        content: twig.bind(this.block_content, this)
                    })
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(t) {
                    return e._get("interface/settings/page.twig")
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    this.getParent(t).render_(e, t, twig.extend({}, this.getBlocks(), i))
                }
                ,
                t.prototype.block_head = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    t.append('<div class="content__top"><div class="content__top__sidebar__toggler"><span id="sidebar_toggler" class="content__top__preset__filter_icon"><span class="icon icon-list filter-toggle-icon"></span></span></div><div class="content__top__actions auth-log__plug">'),
                    new (e._get("interface/controls/button.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        text: twig.attr(twig.attr("lang"in i ? i.lang : "", "page"), "filter"),
                        id: "button-filter-toggle",
                        inner_class_name: "button-input-more-inner",
                        icon_class_name: "filter-icon",
                        class_name: "button-input-inner button-input-more-inner",
                        icon_right_name: "icon-arrow",
                        context_menu_array: twig.attr(twig.attr(twig.attr(twig.attr("template"in i ? i.template : "", "filter"), "button"), "context_menu"), "items")
                    })),
                    t.append('</div><div class="content__top__title"><h2 class="content__top__preset__caption">'),
                    t.append(twig.filter.escape(this.env_, twig.attr(twig.attr("lang"in i ? i.lang : "", "page"), "title"), "light_escape", null, !0)),
                    t.append("</h2></div></div>")
                }
                ,
                t.prototype.block_content = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    new (e._get("interface/common/tooltip.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        class_name: "auth-log-tooltip",
                        text: twig.attr(twig.attr("lang"in i ? i.lang : "", "page"), "note"),
                        button: twig.attr(twig.attr("lang"in i ? i.lang : "", "page"), "upgrade"),
                        ribbon: twig.attr(twig.attr("lang"in i ? i.lang : "", "page"), "ribbon")
                    })),
                    t.append('<div class="auth-log-plug"><div class="list__table__holder"><div class="list__table " id="list_table">\x3c!-- Header --\x3e<div class="list-row list-row-head js-list-row" id="list_head">'),
                    i.header_cells_data = [{
                        style: "width:10%;",
                        lang: twig.attr(twig.attr("lang"in i ? i.lang : "", "columns"), "date")
                    }, {
                        style: "width:10%;",
                        lang: twig.attr(twig.attr("lang"in i ? i.lang : "", "columns"), "type")
                    }, {
                        style: "width:20%;",
                        lang: twig.attr(twig.attr("lang"in i ? i.lang : "", "columns"), "user")
                    }, {
                        style: "width:40%;",
                        lang: twig.attr(twig.attr("lang"in i ? i.lang : "", "columns"), "url")
                    }, {
                        style: "width:10%;",
                        lang: twig.attr(twig.attr("lang"in i ? i.lang : "", "columns"), "ip")
                    }, {
                        style: "width:10%;",
                        lang: twig.attr(twig.attr("lang"in i ? i.lang : "", "columns"), "browser")
                    }],
                    i._parent = i;
                    var s = "header_cells_data"in i ? i.header_cells_data : "";
                    twig.forEach(s, (function(e, n) {
                        i._key = n,
                        i.item = e,
                        t.append('<div class="list-row__cell js-hs-prevent js-cell-head cell-head list-row__cell-head list-row__cell-template-text" style="'),
                        t.append(twig.filter.escape(this.env_, twig.attr("item"in i ? i.item : "", "style"), "light_escape", null, !0)),
                        t.append('"><div class="cell-head__inner"><div class="content-table__item__inner cell-head__inner-content"><span class="cell-head__title">'),
                        t.append(twig.filter.escape(this.env_, twig.attr("item"in i ? i.item : "", "lang"), "light_escape", null, !0)),
                        t.append("</span></div></div></div>")
                    }
                    ), this),
                    t.append("</div>\x3c!-- Rows --\x3e"),
                    i._parent = i,
                    s = twig.range(1, 5),
                    twig.forEach(s, (function(e, n) {
                        i._key = n,
                        i.i = e,
                        t.append('<div data-id="" class="list-row js-list-row js-pager-list-item__1 js-item-id- list-cell" id="list_item_"><div class="list-row__cell js-list-row__cell list-row__cell-template-text"><div class="content-table__item__inner">'),
                        i.width = Number(50) + Number(twig.functions.random(this.env_, 30)),
                        t.append('<div class="line" style="width: '),
                        t.append(twig.filter.escape(this.env_, "width"in i ? i.width : "", "light_escape", null, !0)),
                        t.append('%;">&nbsp;</div></div></div><div class="list-row__cell js-list-row__cell list-row__cell-template-text"><div class="content-table__item__inner">'),
                        i.width = Number(50) + Number(twig.functions.random(this.env_, 30)),
                        t.append('<div class="line" style="width: '),
                        t.append(twig.filter.escape(this.env_, "width"in i ? i.width : "", "light_escape", null, !0)),
                        t.append('%;">&nbsp;</div></div></div><div class="list-row__cell js-list-row__cell list-row__cell-template-link"><div class="content-table__item__inner">'),
                        i.width = Number(20) + Number(twig.functions.random(this.env_, 70)),
                        t.append('<div class="line" style="width: '),
                        t.append(twig.filter.escape(this.env_, "width"in i ? i.width : "", "light_escape", null, !0)),
                        t.append('%;">&nbsp;</div></div></div><div class="list-row__cell js-list-row__cell list-row__cell-template-text"><div class="content-table__item__inner">'),
                        i.width = Number(20) + Number(twig.functions.random(this.env_, 70)),
                        t.append('<div class="line" style="width: '),
                        t.append(twig.filter.escape(this.env_, "width"in i ? i.width : "", "light_escape", null, !0)),
                        t.append('%;">&nbsp;</div></div></div><div class="list-row__cell js-list-row__cell list-row__cell-template-text"><div class="content-table__item__inner"><div class="line" style="width: 100%;">&nbsp;</div></div></div><div class="list-row__cell js-list-row__cell list-row__cell-template-text"><div class="content-table__item__inner"><div class="line" style="width: 90%;">&nbsp;</div></div></div></div>')
                    }
                    ), this),
                    t.append("</div></div></div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_authlog_plugs_pay"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/authlog/plugs/pay", t)
            }()
        }
        .apply(t, n)) || (e.exports = s)
    }
    ,
    981513: (e, t, i) => {
        var n, s;
        n = [i(460159), i(842355), i(94849), i(898296), i(955206)],
        void 0 === (s = function(e) {
            (function() {
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
                    new (e._get("interface/settings/aside.twig"))(this.env_).render_(t, i),
                    t.append('<div class="work-area content__settings aside-toggleable" id="work_area"><div class="content__top development-api"><div class="content__top__sidebar__toggler"><span id="sidebar_toggler" class="content__top__preset__filter_icon"><span class="icon icon-list filter-toggle-icon"></span></span></div><div class="content__top__preset"><h2 class="content__top__preset__caption"><span class="content__top__preset__caption__list__item content__top__preset__caption__list__item-active js-list-caption-link">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "title_menu_api"), "light_escape", null, !0)),
                    t.append('</span></h2></div></div><div class="content__api__section api-your-key"><div class="content__dev__note__wrapper bottom"><div class="content__dev__note bottom"><p>'),
                    t.append(twig.attr("lang"in i ? i.lang : "", "description_api")),
                    t.append("</p></div></div></div>"),
                    twig.attr("widgets"in i ? i.widgets : "", "is_plug") || twig.attr("widgets_upload"in i ? i.widgets_upload : "", "is_plug") || twig.attr("hooks"in i ? i.hooks : "", "is_plug") ? new (e._get("interface/development/plug/plug.twig"))(this.env_).render_(t, i) : new (e._get("interface/development/page/page.twig"))(this.env_).render_(t, i),
                    t.append("</div>")
                }
                ,
                t.prototype.block_static = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    e.append(twig.filter.escape(this.env_, this.env_.invoke("inject_static", ["development.php"], this), "light_escape", null, !0))
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_development_page"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/development/page", t)
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
                    i.hook_name = "hook[" + twig.attr("hook"in i ? i.hook : "", "id") + "]",
                    t.append('<div class="webhooks-edit-modal__hook-wrapper '),
                    twig.attr("hook"in i ? i.hook : "", "new") && t.append("hook-new"),
                    t.append('" data-id="'),
                    t.append(twig.filter.escape(this.env_, twig.attr("hook"in i ? i.hook : "", "id"), "light_escape", null, !0)),
                    t.append('" data-disabled="'),
                    t.append(twig.filter.escape(this.env_, twig.attr("hook"in i ? i.hook : "", "disabled"), "light_escape", null, !0)),
                    t.append('"><div class="webhooks-edit-modal__hook-input-wrapper">'),
                    twig.attr("hook"in i ? i.hook : "", "disabled") ? i.input_class = "webhooks-edit-modal__hook-destination webhooks-edit-modal__hook-destination--error" : i.input_class = "webhooks-edit-modal__hook-destination",
                    new (e._get("interface/controls/input.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        class_name: "input_class"in i ? i.input_class : "",
                        value: twig.attr("hook"in i ? i.hook : "", "destination"),
                        placeholder: this.env_.filter("i18n", "Provide web-site URL"),
                        name: ("hook_name"in i ? i.hook_name : "") + "[destination]"
                    })),
                    t.append('<p class="webhooks-edit-modal__error-notification hook-invalid">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Invalid URL"), "light_escape", null, !0)),
                    t.append("</p>"),
                    twig.attr("hook"in i ? i.hook : "", "disabled") && (t.append('<p class="webhooks-edit-modal__error-notification hook-disabled">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Webhook disabled"), "light_escape", null, !0)),
                    t.append('<a class="js-hook-disabled">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Turn on"), "light_escape", null, !0)),
                    t.append("</a></p>")),
                    t.append("</div>"),
                    new (e._get("interface/controls/checkboxes_dropdown.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        class_name: "",
                        name: "name",
                        title: twig.attr("lang"in i ? i.lang : "", "hook_actions"),
                        title_empty: twig.attr("lang"in i ? i.lang : "", "hook_actions_title"),
                        items: twig.attr("hook"in i ? i.hook : "", "actions"),
                        title_numeral: twig.attr("lang"in i ? i.lang : "", "hook_actions_numeral")
                    })),
                    new (e._get("interface/controls/delete_button.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        class_name: "js-remove-hook"
                    })),
                    t.append('<input type="hidden" name="'),
                    t.append(twig.filter.escape(this.env_, "hook_name"in i ? i.hook_name : "", "light_escape", null, !0)),
                    t.append('[sort]" value="'),
                    t.append(twig.filter.escape(this.env_, twig.attr("hook"in i ? i.hook : "", "sort"), "light_escape", null, !0)),
                    t.append('" /><input type="hidden" name="'),
                    t.append(twig.filter.escape(this.env_, "hook_name"in i ? i.hook_name : "", "light_escape", null, !0)),
                    t.append('[disabled]" value="'),
                    t.append(twig.filter.escape(this.env_, twig.attr("hook"in i ? i.hook : "", "disabled"), "light_escape", null, !0)),
                    t.append('" /><input type="hidden" name="'),
                    t.append(twig.filter.escape(this.env_, "hook_name"in i ? i.hook_name : "", "light_escape", null, !0)),
                    t.append('[new]" value="'),
                    twig.attr("hook"in i ? i.hook : "", "new") && t.append("1"),
                    t.append('" /><input type="hidden" name="'),
                    t.append(twig.filter.escape(this.env_, "hook_name"in i ? i.hook_name : "", "light_escape", null, !0)),
                    t.append('[id]" value="'),
                    t.append(twig.filter.escape(this.env_, twig.attr("hook"in i ? i.hook : "", "id"), "light_escape", null, !0)),
                    t.append('" /></div>')
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_development_hooks_item"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/development/hooks/item", t)
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
                    i.three_actions = {
                        first: {
                            id: "1",
                            is_checked: !0,
                            name: "first_item"
                        },
                        second: {
                            id: "2",
                            is_checked: !0,
                            name: "second_item"
                        },
                        third: {
                            id: "3",
                            is_checked: !0,
                            name: "third_item"
                        },
                        fourth: {
                            id: "4",
                            is_checked: !1,
                            name: "fourth_item"
                        }
                    },
                    i.one_actions = {
                        first: {
                            id: "1",
                            is_checked: !0,
                            name: "first_item"
                        },
                        second: {
                            id: "2",
                            is_checked: !1,
                            name: "second_item"
                        }
                    },
                    t.append('<form class="form_hooks clearfix"><div id="hook_items"><div class="hook_item clearfix"><div class="input-hook-destination-wrapper hook_item__fake_input hook-destination"><span class="api_settings_plug__line" style="width: 216px;"></span></div>'),
                    new (e._get("interface/controls/checkboxes_dropdown.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        class_name: "",
                        name: "name",
                        title: twig.attr("lang"in i ? i.lang : "", "hook_actions"),
                        title_empty: twig.attr("lang"in i ? i.lang : "", "hook_actions_title"),
                        items: "one_actions"in i ? i.one_actions : "",
                        title_numeral: twig.attr("lang"in i ? i.lang : "", "hook_actions_numeral")
                    })),
                    new (e._get("interface/controls/delete_button.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        class_name: "js-remove-hook"
                    })),
                    t.append('</div><div class="hook_item clearfix"><div class="input-hook-destination-wrapper hook_item__fake_input hook-destination"><span class="api_settings_plug__line" style="width: 176px;"></span></div>'),
                    new (e._get("interface/controls/checkboxes_dropdown.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        class_name: "",
                        name: "name",
                        title: twig.attr("lang"in i ? i.lang : "", "hook_actions"),
                        title_empty: twig.attr("lang"in i ? i.lang : "", "hook_actions_title"),
                        items: "three_actions"in i ? i.three_actions : "",
                        title_numeral: twig.attr("lang"in i ? i.lang : "", "hook_actions_numeral")
                    })),
                    new (e._get("interface/controls/delete_button.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        class_name: "js-remove-hook"
                    })),
                    t.append('</div><div class="hook_item clearfix"><div class="input-hook-destination-wrapper hook_item__fake_input hook-destination"><span class="api_settings_plug__line" style="width: 196px;"></span></div>'),
                    new (e._get("interface/controls/checkboxes_dropdown.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        class_name: "",
                        name: "name",
                        title: twig.attr("lang"in i ? i.lang : "", "hook_actions"),
                        title_empty: twig.attr("lang"in i ? i.lang : "", "hook_actions_title"),
                        items: "one_actions"in i ? i.one_actions : "",
                        title_numeral: twig.attr("lang"in i ? i.lang : "", "hook_actions_numeral")
                    })),
                    new (e._get("interface/controls/delete_button.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        class_name: "js-remove-hook"
                    })),
                    t.append('</div></div><span id="add-hook" class="add-new-hook">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "add_hook"), "light_escape", null, !0)),
                    t.append("</span></form>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_development_hooks_plug"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/development/hooks/plug", t)
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
                    t.append('<div class="content__api__section widgets"><h2 class="content__top__preset__caption"><span class="content__top__preset__caption__list__item content__top__preset__caption__list__item-active js-list-caption-link">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "title_widgets"), "light_escape", null, !0)),
                    t.append('</span></h2><div class="content__dev__note__wrapper bottom"><div class="content__dev__note bottom"><p>'),
                    t.append(twig.attr("lang"in i ? i.lang : "", "description_widgets")),
                    "hide_download_link"in i && i.hide_download_link || (t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "description_creation_lib"), "light_escape", null, !0)),
                    t.append(' <a href="'),
                    t.append(twig.filter.escape(this.env_, twig.attr("widgets_upload"in i ? i.widgets_upload : "", "download_lib_url"), "light_escape", null, !0)),
                    t.append('" class="load-dev-lib">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "creation_download_lib"), "light_escape", null, !0)),
                    t.append("</a>.")),
                    t.append('</p></div></div><div class="library_hooks_wrapper">'),
                    new (e._get("interface/development/widgets/page.twig"))(this.env_).render_(t, twig.extend({}, i, "widgets"in i ? i.widgets : "")),
                    t.append("</div></div>"),
                    "template_params_json"in i && i.template_params_json) {
                        i._parent = i;
                        var s = "template_params_json"in i ? i.template_params_json : "";
                        twig.forEach(s, (function(e, n) {
                            i.key = n,
                            i.json = e,
                            t.append('<input type="hidden" id="template_params_'),
                            t.append(twig.filter.escape(this.env_, "key"in i ? i.key : "", "light_escape", null, !0)),
                            t.append('" value="'),
                            t.append(twig.filter.escape(this.env_, "json"in i ? i.json : "", "light_escape", null, !0)),
                            t.append('"/>')
                        }
                        ), this)
                    }
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_development_page_page"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/development/page/page", t)
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
                    t.append('<div class="content__api__section plug"><div class="content__account__note__wrapper api_settings_plug"><div class="content__account__note api_settings_plug__descr"><span class="api_settings_plug__descr_text">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "plug_description"), "light_escape", null, !0)),
                    t.append('</span><div class="api_settings_plug__billing_button"><a href="/settings/pay/" class="js-navigate-link">'),
                    new (e._get("interface/controls/button.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        class_name: "button-input_blue",
                        text: twig.attr("lang"in i ? i.lang : "", "plug_button")
                    })),
                    t.append('</a></div><div class="api_settings_plug__limit_tape">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "plug_in_advanced"), "light_escape", null, !0)),
                    t.append('</div></div></div></div><div class="content__api__plug_wrapper"><div class="content__api__plug_overlay"></div><div class="content__api__section widgets"><h2 class="content__top__preset__caption"><span class="content__top__preset__caption__list__item content__top__preset__caption__list__item-active js-list-caption-link">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "title_widgets"), "light_escape", null, !0)),
                    t.append('</span></h2><div class="content__dev__note__wrapper bottom"><div class="content__dev__note bottom"><p>'),
                    t.append(twig.attr("lang"in i ? i.lang : "", "description_widgets")),
                    "hide_download_link"in i && i.hide_download_link || (t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "description_creation_lib"), "light_escape", null, !0)),
                    t.append(' <a href="'),
                    t.append(twig.filter.escape(this.env_, "download_lib_url"in i ? i.download_lib_url : "", "light_escape", null, !0)),
                    t.append('" class="load-dev-lib">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "creation_download_lib"), "light_escape", null, !0)),
                    t.append("</a>.")),
                    t.append('</p></div></div><div class="library_hooks_wrapper">'),
                    new (e._get("interface/development/widgets/plug.twig"))(this.env_).render_(t, twig.extend({}, i, "widgets"in i ? i.widgets : "")),
                    t.append("</div></div>"),
                    "template_params_json"in i && i.template_params_json) {
                        i._parent = i;
                        var s = "template_params_json"in i ? i.template_params_json : "";
                        twig.forEach(s, (function(e, n) {
                            i.key = n,
                            i.json = e,
                            t.append('<input type="hidden" id="template_params_'),
                            t.append(twig.filter.escape(this.env_, "key"in i ? i.key : "", "light_escape", null, !0)),
                            t.append('" value="'),
                            t.append(twig.filter.escape(this.env_, "json"in i ? i.json : "", "light_escape", null, !0)),
                            t.append('"/>')
                        }
                        ), this)
                    }
                    t.append("</div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_development_plug_plug"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/development/plug/plug", t)
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
                    t.append('<span class="modal-body__close"><span class="icon icon-modal-close"></span></span><h2 class="modal-body__caption">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "creation_title"), "light_escape", null, !0)),
                    t.append('</h2><div class="api__add_widget_description"><p>'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "creation_description"), "light_escape", null, !0)),
                    t.append('</p></div><form id="widget_creation"><input type="hidden" name="action" value="create"><div class="api__widget_key_input__wrapper">'),
                    new (e._get("interface/controls/input.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        class_name: "api__widget_key_input__wrapper",
                        name: "widget_code",
                        placeholder: twig.attr("lang"in i ? i.lang : "", "creation_input"),
                        value: "",
                        id: "widget_code"
                    })),
                    t.append('<div class="api__widget_key__error" id="widget_code_error"></div></div><div class="api__widget_key_input__footer">'),
                    new (e._get("interface/controls/button.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        type: "submit",
                        text: twig.attr("lang"in i ? i.lang : "", "creation_generate_key"),
                        name: "commit",
                        class_name: "api__add_widget_button",
                        id: "upload_key_btn"
                    })),
                    new (e._get("interface/controls/cancel_button.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        id: "cancel_upload_key_btn",
                        text: twig.attr("lang"in i ? i.lang : "", "creation_cancel")
                    })),
                    t.append("</div></form>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_development_widgets_create"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/development/widgets/create", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e),
                    this.setBlocks({
                        body: twig.bind(this.block_body, this),
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
                    t.not_show_chbx = !0,
                    this.getParent(t).render_(e, t, twig.extend({}, this.getBlocks(), i))
                }
                ,
                t.prototype.block_body = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    i.selects = {
                        selected: "private",
                        items: {
                            private: {
                                id: "private",
                                option: twig.attr("lang"in i ? i.lang : "", "status_private")
                            }
                        }
                    },
                    i.inputs = {
                        only_text: !1,
                        inputs: {
                            first: {
                                type_name: "button",
                                text: twig.attr("lang"in i ? i.lang : "", "upload_button"),
                                name: "commit"
                            }
                        }
                    },
                    i.deletes = {
                        only_text: !1,
                        inputs: {
                            first: {
                                type_name: "button",
                                text: twig.attr("lang"in i ? i.lang : "", "delete_dev"),
                                name: "delete"
                            }
                        }
                    },
                    t.append('<div data-id="1" class="list-row js-list-row js-pager-list-item__1 js-page-delimiter js-item-id-1" id="list_item_1"><div class="list-row__cell js-list-row__cell list-row__cell-template-text list-row__cell-text">'),
                    new (e._get("interface/list/cells/text_raw.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        id: "1",
                        title: "",
                        value: '<span class="api_settings_plug__line" style="width: 91px;"></span>'
                    })),
                    t.append('</div><div class="list-row__cell js-list-row__cell list-row__cell-template-text list-row__cell-text">'),
                    new (e._get("interface/list/cells/text_raw.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        id: "1",
                        title: "",
                        value: '<span class="api_settings_plug__line" style="width: 110px;"></span>'
                    })),
                    t.append('</div><div class="list-row__cell js-list-row__cell list-row__cell-template-text list-row__cell-text">'),
                    new (e._get("interface/list/cells/text_raw.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        id: "1",
                        title: "",
                        value: '<span class="api_settings_plug__line" style="width: 49px;"></span>'
                    })),
                    t.append('</div><div class="list-row__cell js-list-row__cell list-row__cell-template-text list-row__cell-text">'),
                    new (e._get("interface/list/cells/text_raw.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        id: "1",
                        title: "",
                        value: '<span class="api_settings_plug__line" style="width: 49px;"></span>'
                    })),
                    t.append("</div>"),
                    twig.attr(twig.attr(twig.attr("widgets"in i ? i.widgets : "", "items"), 0, void 0, "array"), "user") && (t.append('<div class="list-row__cell js-list-row__cell list-row__cell-template-text list-row__cell-text">'),
                    new (e._get("interface/list/cells/text_raw.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        id: "1",
                        title: "",
                        value: '<span class="api_settings_plug__line" style="width: 80px;"></span>'
                    })),
                    t.append("</div>")),
                    t.append('<div class="list-row__cell js-list-row__cell list-row__cell-template-select list-row__cell-select">'),
                    new (e._get("interface/list/cells/select.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        id: "1",
                        value: "selects"in i ? i.selects : ""
                    })),
                    t.append('</div><div class="list-row__cell js-list-row__cell list-row__cell-template-form list-row__cell-form js-form-upload-file">'),
                    new (e._get("interface/list/cells/form.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        id: "1",
                        value: "inputs"in i ? i.inputs : ""
                    })),
                    t.append('</div><div class="list-row__cell js-list-row__cell list-row__cell-template-form list-row__cell-form">'),
                    new (e._get("interface/list/cells/form.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        id: "1",
                        value: "deletes"in i ? i.deletes : ""
                    })),
                    t.append('</div><div class="list-row__cell js-list-row__cell list-row__cell-template-form list-row__cell-form">'),
                    new (e._get("interface/list/cells/form.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        id: "1",
                        value: "deletes"in i ? i.deletes : ""
                    })),
                    t.append('</div></div><div data-id="2" class="list-row js-list-row js-pager-list-item__2 js-item-id-2" id="list_item_2"><div class="list-row__cell js-list-row__cell list-row__cell-template-text list-row__cell-text">'),
                    new (e._get("interface/list/cells/text_raw.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        id: "2",
                        title: "",
                        value: '<span class="api_settings_plug__line" style="width: 72px;"></span>'
                    })),
                    t.append('</div><div class="list-row__cell js-list-row__cell list-row__cell-template-text list-row__cell-text">'),
                    new (e._get("interface/list/cells/text_raw.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        id: "2",
                        title: "",
                        value: '<span class="api_settings_plug__line" style="width: 122px;"></span>'
                    })),
                    t.append('</div><div class="list-row__cell js-list-row__cell list-row__cell-template-text list-row__cell-text">'),
                    new (e._get("interface/list/cells/text_raw.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        id: "2",
                        title: "",
                        value: '<span class="api_settings_plug__line" style="width: 49px;"></span>'
                    })),
                    t.append('</div><div class="list-row__cell js-list-row__cell list-row__cell-template-text list-row__cell-text">'),
                    new (e._get("interface/list/cells/text_raw.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        id: "2",
                        title: "",
                        value: '<span class="api_settings_plug__line" style="width: 49px;"></span>'
                    })),
                    t.append("</div>"),
                    twig.attr(twig.attr(twig.attr("widgets"in i ? i.widgets : "", "items"), 0, void 0, "array"), "user") && (t.append('<div class="list-row__cell js-list-row__cell list-row__cell-template-text list-row__cell-text">'),
                    new (e._get("interface/list/cells/text_raw.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        id: "2",
                        title: "",
                        value: '<span class="api_settings_plug__line" style="width: 72px;"></span>'
                    })),
                    t.append("</div>")),
                    t.append('<div class="list-row__cell js-list-row__cell list-row__cell-template-select list-row__cell-select">'),
                    new (e._get("interface/list/cells/select.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        id: "2",
                        title: "",
                        value: "selects"in i ? i.selects : ""
                    })),
                    t.append('</div><div class="list-row__cell js-list-row__cell list-row__cell-template-form list-row__cell-form js-form-upload-file">'),
                    new (e._get("interface/list/cells/form.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        id: "2",
                        title: "",
                        value: "inputs"in i ? i.inputs : ""
                    })),
                    t.append('</div><div class="list-row__cell js-list-row__cell list-row__cell-template-form list-row__cell-form">'),
                    new (e._get("interface/list/cells/form.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        id: "2",
                        value: "deletes"in i ? i.deletes : ""
                    })),
                    t.append('</div><div class="list-row__cell js-list-row__cell list-row__cell-template-form list-row__cell-form">'),
                    new (e._get("interface/list/cells/form.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        id: "2",
                        value: "deletes"in i ? i.deletes : ""
                    })),
                    t.append('</div></div><div data-id="3" class="list-row js-list-row js-pager-list-item__3 js-page-delimiter js-item-id-3" id="list_item_3"><div class="list-row__cell js-list-row__cell list-row__cell-template-text list-row__cell-text">'),
                    new (e._get("interface/list/cells/text_raw.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        id: "3",
                        title: "",
                        value: '<span class="api_settings_plug__line" style="width: 80px;"></span>'
                    })),
                    t.append('</div><div class="list-row__cell js-list-row__cell list-row__cell-template-text list-row__cell-text">'),
                    new (e._get("interface/list/cells/text_raw.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        id: "3",
                        title: "",
                        value: '<span class="api_settings_plug__line" style="width: 108px;"></span>'
                    })),
                    t.append('</div><div class="list-row__cell js-list-row__cell list-row__cell-template-text list-row__cell-text">'),
                    new (e._get("interface/list/cells/text_raw.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        id: "3",
                        title: "",
                        value: '<span class="api_settings_plug__line" style="width: 49px;"></span>'
                    })),
                    t.append('</div><div class="list-row__cell js-list-row__cell list-row__cell-template-text list-row__cell-text">'),
                    new (e._get("interface/list/cells/text_raw.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        id: "3",
                        title: "",
                        value: '<span class="api_settings_plug__line" style="width: 49px;"></span>'
                    })),
                    t.append("</div>"),
                    twig.attr(twig.attr(twig.attr("widgets"in i ? i.widgets : "", "items"), 0, void 0, "array"), "user") && (t.append('<div class="list-row__cell js-list-row__cell list-row__cell-template-text list-row__cell-text">'),
                    new (e._get("interface/list/cells/text_raw.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        id: "3",
                        title: "",
                        value: '<span class="api_settings_plug__line" style="width: 91px;"></span>'
                    })),
                    t.append("</div>")),
                    t.append('<div class="list-row__cell js-list-row__cell list-row__cell-template-select list-row__cell-select">'),
                    new (e._get("interface/list/cells/select.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        id: "3",
                        value: "selects"in i ? i.selects : ""
                    })),
                    t.append('</div><div class="list-row__cell js-list-row__cell list-row__cell-template-form list-row__cell-form js-form-upload-file">'),
                    new (e._get("interface/list/cells/form.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        id: "3",
                        value: "inputs"in i ? i.inputs : ""
                    })),
                    t.append('</div><div class="list-row__cell js-list-row__cell list-row__cell-template-form list-row__cell-form">'),
                    new (e._get("interface/list/cells/form.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        id: "3",
                        value: "deletes"in i ? i.deletes : ""
                    })),
                    t.append('</div><div class="list-row__cell js-list-row__cell list-row__cell-template-form list-row__cell-form">'),
                    new (e._get("interface/list/cells/form.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        id: "3",
                        value: "deletes"in i ? i.deletes : ""
                    })),
                    t.append("</div></div>")
                }
                ,
                t.prototype.block_body_no_items = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    i.selects = {
                        selected: "private",
                        items: {
                            private: {
                                id: "private",
                                option: twig.attr("lang"in i ? i.lang : "", "status_private")
                            }
                        }
                    },
                    i.inputs = {
                        only_text: !1,
                        inputs: {
                            first: {
                                type_name: "button",
                                text: twig.attr("lang"in i ? i.lang : "", "upload_button"),
                                name: "commit"
                            }
                        }
                    },
                    i.deletes = {
                        only_text: !1,
                        inputs: {
                            first: {
                                type_name: "button",
                                text: twig.attr("lang"in i ? i.lang : "", "delete_dev"),
                                name: "delete"
                            }
                        }
                    },
                    t.append('<div data-id="1" class="list-row js-list-row js-pager-list-item__1 js-page-delimiter js-item-id-1" id="list_item_1"><div class="list-row__cell js-list-row__cell list-row__cell-template-text list-row__cell-text">'),
                    new (e._get("interface/list/cells/text_raw.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        id: "1",
                        title: "",
                        value: '<span class="api_settings_plug__line" style="width: 91px;"></span>'
                    })),
                    t.append('</div><div class="list-row__cell js-list-row__cell list-row__cell-template-text list-row__cell-text">'),
                    new (e._get("interface/list/cells/text_raw.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        id: "1",
                        title: "",
                        value: '<span class="api_settings_plug__line" style="width: 110px;"></span>'
                    })),
                    t.append('</div><div class="list-row__cell js-list-row__cell list-row__cell-template-text list-row__cell-text">'),
                    new (e._get("interface/list/cells/text_raw.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        id: "1",
                        title: "",
                        value: '<span class="api_settings_plug__line" style="width: 49px;"></span>'
                    })),
                    t.append('</div><div class="list-row__cell js-list-row__cell list-row__cell-template-text list-row__cell-text">'),
                    new (e._get("interface/list/cells/text_raw.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        id: "1",
                        title: "",
                        value: '<span class="api_settings_plug__line" style="width: 49px;"></span>'
                    })),
                    t.append("</div>"),
                    twig.attr(twig.attr(twig.attr("widgets"in i ? i.widgets : "", "items"), 0, void 0, "array"), "user") && (t.append('<div class="list-row__cell js-list-row__cell list-row__cell-template-text list-row__cell-text">'),
                    new (e._get("interface/list/cells/text_raw.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        id: "1",
                        title: "",
                        value: '<span class="api_settings_plug__line" style="width: 80px;"></span>'
                    })),
                    t.append("</div>")),
                    t.append('<div class="list-row__cell js-list-row__cell list-row__cell-template-select list-row__cell-select">'),
                    new (e._get("interface/list/cells/select.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        id: "1",
                        value: "selects"in i ? i.selects : ""
                    })),
                    t.append('</div><div class="list-row__cell js-list-row__cell list-row__cell-template-form list-row__cell-form js-form-upload-file">'),
                    new (e._get("interface/list/cells/form.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        id: "1",
                        value: "inputs"in i ? i.inputs : ""
                    })),
                    t.append('</div><div class="list-row__cell js-list-row__cell list-row__cell-template-form list-row__cell-form">'),
                    new (e._get("interface/list/cells/form.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        id: "1",
                        value: "deletes"in i ? i.deletes : ""
                    })),
                    t.append('</div><div class="list-row__cell js-list-row__cell list-row__cell-template-form list-row__cell-form">'),
                    new (e._get("interface/list/cells/form.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        id: "1",
                        value: "deletes"in i ? i.deletes : ""
                    })),
                    t.append('</div></div><div data-id="2" class="list-row js-list-row js-pager-list-item__2 js-item-id-2" id="list_item_2"><div class="list-row__cell js-list-row__cell list-row__cell-template-text list-row__cell-text">'),
                    new (e._get("interface/list/cells/text_raw.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        id: "2",
                        title: "",
                        value: '<span class="api_settings_plug__line" style="width: 72px;"></span>'
                    })),
                    t.append('</div><div class="list-row__cell js-list-row__cell list-row__cell-template-text list-row__cell-text">'),
                    new (e._get("interface/list/cells/text_raw.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        id: "2",
                        title: "",
                        value: '<span class="api_settings_plug__line" style="width: 122px;"></span>'
                    })),
                    t.append('</div><div class="list-row__cell js-list-row__cell list-row__cell-template-text list-row__cell-text">'),
                    new (e._get("interface/list/cells/text_raw.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        id: "2",
                        title: "",
                        value: '<span class="api_settings_plug__line" style="width: 49px;"></span>'
                    })),
                    t.append('</div><div class="list-row__cell js-list-row__cell list-row__cell-template-text list-row__cell-text">'),
                    new (e._get("interface/list/cells/text_raw.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        id: "2",
                        title: "",
                        value: '<span class="api_settings_plug__line" style="width: 49px;"></span>'
                    })),
                    t.append("</div>"),
                    twig.attr(twig.attr(twig.attr("widgets"in i ? i.widgets : "", "items"), 0, void 0, "array"), "user") && (t.append('<div class="list-row__cell js-list-row__cell list-row__cell-template-text list-row__cell-text">'),
                    new (e._get("interface/list/cells/text_raw.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        id: "2",
                        title: "",
                        value: '<span class="api_settings_plug__line" style="width: 72px;"></span>'
                    })),
                    t.append("</div>")),
                    t.append('<div class="list-row__cell js-list-row__cell list-row__cell-template-select list-row__cell-select">'),
                    new (e._get("interface/list/cells/select.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        id: "2",
                        value: "selects"in i ? i.selects : ""
                    })),
                    t.append('</div><div class="list-row__cell js-list-row__cell list-row__cell-template-form list-row__cell-form js-form-upload-file">'),
                    new (e._get("interface/list/cells/form.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        id: "2",
                        value: "inputs"in i ? i.inputs : ""
                    })),
                    t.append('</div><div class="list-row__cell js-list-row__cell list-row__cell-template-form list-row__cell-form">'),
                    new (e._get("interface/list/cells/form.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        id: "2",
                        value: "deletes"in i ? i.deletes : ""
                    })),
                    t.append('</div><div class="list-row__cell js-list-row__cell list-row__cell-template-form list-row__cell-form">'),
                    new (e._get("interface/list/cells/form.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        id: "2",
                        value: "deletes"in i ? i.deletes : ""
                    })),
                    t.append('</div></div><div data-id="3" class="list-row js-list-row js-pager-list-item__3 js-page-delimiter js-item-id-3" id="list_item_3"><div class="list-row__cell js-list-row__cell list-row__cell-template-text list-row__cell-text">'),
                    new (e._get("interface/list/cells/text_raw.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        id: "3",
                        title: "",
                        value: '<span class="api_settings_plug__line" style="width: 80px;"></span>'
                    })),
                    t.append('</div><div class="list-row__cell js-list-row__cell list-row__cell-template-text list-row__cell-text">'),
                    new (e._get("interface/list/cells/text_raw.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        id: "3",
                        title: "",
                        value: '<span class="api_settings_plug__line" style="width: 108px;"></span>'
                    })),
                    t.append('</div><div class="list-row__cell js-list-row__cell list-row__cell-template-text list-row__cell-text">'),
                    new (e._get("interface/list/cells/text_raw.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        id: "3",
                        title: "",
                        value: '<span class="api_settings_plug__line" style="width: 49px;"></span>'
                    })),
                    t.append('</div><div class="list-row__cell js-list-row__cell list-row__cell-template-text list-row__cell-text">'),
                    new (e._get("interface/list/cells/text_raw.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        id: "3",
                        title: "",
                        value: '<span class="api_settings_plug__line" style="width: 49px;"></span>'
                    })),
                    t.append("</div>"),
                    twig.attr(twig.attr(twig.attr("widgets"in i ? i.widgets : "", "items"), 0, void 0, "array"), "user") && (t.append('<div class="list-row__cell js-list-row__cell list-row__cell-template-text list-row__cell-text">'),
                    new (e._get("interface/list/cells/text_raw.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        id: "3",
                        title: "",
                        value: '<span class="api_settings_plug__line" style="width: 91px;"></span>'
                    })),
                    t.append("</div>")),
                    t.append('<div class="list-row__cell js-list-row__cell list-row__cell-template-select list-row__cell-select">'),
                    new (e._get("interface/list/cells/select.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        id: "3",
                        value: "selects"in i ? i.selects : ""
                    })),
                    t.append('</div><div class="list-row__cell js-list-row__cell list-row__cell-template-form list-row__cell-form js-form-upload-file">'),
                    new (e._get("interface/list/cells/form.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        id: "3",
                        value: "inputs"in i ? i.inputs : ""
                    })),
                    t.append('</div><div class="list-row__cell js-list-row__cell list-row__cell-template-form list-row__cell-form">'),
                    new (e._get("interface/list/cells/form.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        id: "3",
                        value: "deletes"in i ? i.deletes : ""
                    })),
                    t.append('</div><div class="list-row__cell js-list-row__cell list-row__cell-template-form list-row__cell-form">'),
                    new (e._get("interface/list/cells/form.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        id: "3",
                        value: "deletes"in i ? i.deletes : ""
                    })),
                    t.append("</div></div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_development_widgets_items_plug"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/development/widgets/items_plug", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e),
                    this.setBlocks({
                        not_in_list: twig.bind(this.block_not_in_list, this),
                        list_top_right: twig.bind(this.block_list_top_right, this),
                        list_body: twig.bind(this.block_list_body, this),
                        list_footer: twig.bind(this.block_list_footer, this)
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
                t.prototype.block_not_in_list = function(e, t, i) {
                    i = void 0 === i ? {} : i
                }
                ,
                t.prototype.block_list_top_right = function(e, t, i) {
                    i = void 0 === i ? {} : i
                }
                ,
                t.prototype.block_list_body = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    new (e._get("interface/authlog/inner.twig"))(this.env_).render_(t, i)
                }
                ,
                t.prototype.block_list_footer = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    t.append('<div class="list__footer"><div class="widgets_creation_wrapper"></div>'),
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
                    return "interface_development_widgets_page"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/development/widgets/page", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e),
                    this.setBlocks({
                        not_in_list: twig.bind(this.block_not_in_list, this),
                        list_top_right: twig.bind(this.block_list_top_right, this),
                        list_body: twig.bind(this.block_list_body, this),
                        list_footer: twig.bind(this.block_list_footer, this)
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
                t.prototype.block_not_in_list = function(e, t, i) {
                    i = void 0 === i ? {} : i
                }
                ,
                t.prototype.block_list_top_right = function(e, t, i) {
                    i = void 0 === i ? {} : i
                }
                ,
                t.prototype.block_list_body = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    new (e._get("interface/development/widgets/items_plug.twig"))(this.env_).render_(t, i)
                }
                ,
                t.prototype.block_list_footer = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    e.append('<div class="list__footer"><div class="widgets_creation_wrapper"></div></div>')
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_development_widgets_plug"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/development/widgets/plug", t)
            }()
        }
        .apply(t, n)) || (e.exports = s)
    }
    ,
    863888: (e, t, i) => {
        var n, s;
        n = [i(460159), i(542663), i(94849)],
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
                    i.lang = twig.filter.merge("lang"in i ? i.lang : "", {
                        title: twig.attr(twig.attr("lang"in i ? i.lang : "", "filter"), "caption", void 0, void 0, !0) ? twig.filter.def(twig.attr(twig.attr("lang"in i ? i.lang : "", "filter"), "caption"), twig.attr(twig.attr("lang"in i ? i.lang : "", "filter"), "title")) : twig.attr(twig.attr("lang"in i ? i.lang : "", "filter"), "title"),
                        filter_results_title: twig.attr(twig.attr("lang"in i ? i.lang : "", "menu"), "title")
                    }),
                    twig.attr(twig.attr("template"in i ? i.template : "", "filter"), "items") ? i._filter = twig.filter.merge(twig.attr(twig.attr("template"in i ? i.template : "", "filter"), "items"), {
                        items: {
                            preset: twig.attr(twig.attr("template"in i ? i.template : "", "menu"), "items")
                        }
                    }) : i._filter = {
                        items: {
                            preset: twig.attr(twig.attr("template"in i ? i.template : "", "menu"), "items")
                        }
                    },
                    new (e._get("interface/reports/aside.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        filter: "_filter"in i ? i._filter : ""
                    }))
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_page_aside"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/page/aside", t)
            }
            )(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e),
                    this.setBlocks({
                        static: twig.bind(this.block_static, this),
                        aside: twig.bind(this.block_aside, this),
                        head: twig.bind(this.block_head, this),
                        head_button: twig.bind(this.block_head_button, this),
                        content: twig.bind(this.block_content, this)
                    })
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(e) {
                    return !1
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    twig.attr(twig.attr("template"in t ? t.template : "", "page"), "section", void 0, void 0, !0) && (t.section = twig.attr(twig.attr("template"in t ? t.template : "", "page"), "section")),
                    "page_title"in t || (t.page_title = twig.attr(twig.attr("lang"in t ? t.lang : "", "page"), "title")),
                    e.append(this.renderBlock("static", t, i)),
                    e.append(this.renderBlock("aside", t, i)),
                    e.append('<div class="work-area aside-toggleable content__'),
                    e.append(twig.filter.escape(this.env_, "section"in t ? t.section : "", "light_escape", null, !0)),
                    e.append('" id="work_area">'),
                    e.append(this.renderBlock("head", t, i)),
                    e.append(this.renderBlock("content", t, i)),
                    e.append("</div>")
                }
                ,
                t.prototype.block_static = function(e, t, i) {
                    i = void 0 === i ? {} : i
                }
                ,
                t.prototype.block_aside = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    new (e._get("interface/page/aside.twig"))(this.env_).render_(t, i)
                }
                ,
                t.prototype.block_head = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    t.append('<div class="content__top"><div class="content__top__sidebar__toggler"><span id="sidebar_toggler" class="content__top__preset__filter_icon"><span class="icon icon-list filter-toggle-icon"></span></span></div>'),
                    twig.attr(twig.attr("template"in i ? i.template : "", "filter"), "items", void 0, void 0, !0) && (t.append('<div class="content__top__actions">'),
                    new (e._get("interface/controls/button.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        text: twig.attr(twig.attr("lang"in i ? i.lang : "", "filter"), "title"),
                        id: "filter_show_btn",
                        inner_class_name: "button-input-more-inner",
                        icon_class_name: "filter-icon",
                        class_name: "button-input-inner button-input-more-inner filter-sidebar",
                        icon_right_name: "icon-arrow",
                        context_menu_array: twig.attr(twig.attr(twig.attr(twig.attr("template"in i ? i.template : "", "filter"), "button"), "context_menu"), "items")
                    })),
                    t.append("</div>")),
                    t.append('<div class="content__top__title"><h2 class="content__top__preset__caption">'),
                    t.append(twig.filter.escape(this.env_, "page_title"in i ? i.page_title : "", "light_escape", null, !0)),
                    t.append('</h2></div><div class="content__top__actions">'),
                    t.append(this.renderBlock("head_button", i, n)),
                    t.append("</div></div>")
                }
                ,
                t.prototype.block_head_button = function(e, t, i) {
                    i = void 0 === i ? {} : i
                }
                ,
                t.prototype.block_content = function(e, t, i) {
                    i = void 0 === i ? {} : i
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_page_base"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/page/base", t)
            }()
        }
        .apply(t, n)) || (e.exports = s)
    }
    ,
    656108: (e, t, i) => {
        var n, s;
        n = [i(460159), i(94849), i(295165), i(440390), i(898296), i(522814)],
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
                    "picture" == ("attachment_type"in t ? t.attachment_type : "") || "video" == ("attachment_type"in t ? t.attachment_type : "") ? "picture" == ("attachment_type"in t ? t.attachment_type : "") && ("preview_url"in t && t.preview_url || "is_uploaded"in t && t.is_uploaded) ? (e.append('<img src="'),
                    e.append(twig.filter.escape(this.env_, "preview_url"in t ? t.preview_url : "", "light_escape", null, !0)),
                    e.append('" class="'),
                    e.append(twig.filter.escape(this.env_, "class_name"in t ? t.class_name : "", "light_escape", null, !0)),
                    e.append('" />')) : "video" == ("attachment_type"in t ? t.attachment_type : "") && "preview_url"in t && t.preview_url && (e.append('<video preload="metadata" alt="'),
                    e.append(twig.filter.escape(this.env_, "name"in t ? t.name : "", "light_escape", null, !0)),
                    e.append('" src="'),
                    e.append(twig.filter.escape(this.env_, "preview_url"in t ? t.preview_url : "", "light_escape", null, !0)),
                    e.append('" class="'),
                    e.append(twig.filter.escape(this.env_, "class_name"in t ? t.class_name : "", "light_escape", null, !0)),
                    e.append('" />')) : (e.append('<div class="'),
                    e.append(twig.filter.escape(this.env_, "class_name"in t ? t.class_name : "", "light_escape", null, !0)),
                    e.append(' sb-document-attachment-preview"><svg class="sb-document-attachment-preview__icon svg-icon svg-salesbot--document-preview-icon-dims"><use xlink:href="#salesbot--document-preview-icon"></use></svg><div class="sb-document-attachment-preview__name">'),
                    e.append(twig.filter.escape(this.env_, "name"in t ? t.name : "", "light_escape", null, !0)),
                    e.append("</div></div>"))
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_salesbot_designer_attachment_preview"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/salesbot_designer/attachment_preview", t)
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
                    t.append('<div class="marketing-bot-start"><div class="marketing-bot-start__action"><svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg" class="marketing-bot-start__action-icon"><path fill-rule="evenodd" clip-rule="evenodd" d="M3 0.25C2.58579 0.25 2.25 0.585786 2.25 1V7V12.25H1C0.585786 12.25 0.25 12.5858 0.25 13C0.25 13.4142 0.585786 13.75 1 13.75L7 13.75C7.41421 13.75 7.75 13.4142 7.75 13C7.75 12.5858 7.41421 12.25 7 12.25L3.75 12.25V7.75H11C11.2766 7.75 11.5307 7.59776 11.6613 7.35389C11.7918 7.11003 11.7775 6.81412 11.624 6.58397L9.90139 4L11.624 1.41603C11.7775 1.18588 11.7918 0.889975 11.6613 0.646107C11.5307 0.402238 11.2766 0.25 11 0.25H3ZM3.75 6.25H9.59861L8.37596 4.41603C8.20801 4.1641 8.20801 3.8359 8.37596 3.58397L9.59861 1.75H3.75V6.25Z" fill="#C4C4C4"/></svg><span class="marketing-bot-start__action-text js-condition-text">'),
                    t.append(twig.filter.escape(this.env_, "condition_text"in i ? i.condition_text : "", "light_escape", null, !0)),
                    t.append('</span></div><div class="js-conditions-settings-placeholder hidden"></div>'),
                    "is_new_bot"in i && i.is_new_bot && (t.append('<div class="marketing-bot-start__apply-to-all">'),
                    new (e._get("interface/controls/checkbox.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        name: "renew_action",
                        text: this.env_.filter("i18n", "Apply trigger to current customers in segment")
                    })),
                    t.append("</div>")),
                    t.append("</div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_salesbot_designer_marketing_bot_start"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/salesbot_designer/marketing_bot_start", t)
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
                    e.append('<div class="js-match-row salesbot-designer-matching-list__row"><span class="js-lead-control"></span>&nbsp;—&nbsp;<span class="js-customer-control"></span><svg class="js-remove salesbot-designer-matching-list__remove-button svg-icon svg-salesbot--trash-dims"><use xlink:href="#salesbot--trash"></use></svg></div>')
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_salesbot_designer_matches_row"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !0
                }
                ,
                e._add("interface/salesbot_designer/matches_row", t)
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
                    t.append('<div class="modal-body__inner salesbot-designer__modal-body"><div class="salesbot-designer__header"><div class="salesbot-designer__header-caption '),
                    "single_bot_mode"in i && i.single_bot_mode ? t.append("salesbot-designer__header-caption_single-mode") : t.append("js-sb-designer-title"),
                    t.append('"><input class="salesbot-designer__header-caption-text js-sb-designer-change-name js-control-autosized_input" '),
                    "single_bot_mode"in i && i.single_bot_mode || t.append(" disabled "),
                    t.append(' value="'),
                    t.append(twig.filter.escape(this.env_, "title"in i ? i.title : "", "light_escape", null, !0)),
                    t.append('"><span class="salesbot-designer__header-caption-icon js-sb-designer-header-icon">'),
                    i.caption_icon = "single_bot_mode"in i && i.single_bot_mode ? "common--edit-pencil" : "tasks--expand",
                    t.append('<svg class="svg-icon svg-'),
                    t.append(twig.filter.escape(this.env_, "caption_icon"in i ? i.caption_icon : "", "light_escape", null, !0)),
                    t.append('-dims"><use xlink:href="#'),
                    t.append(twig.filter.escape(this.env_, "caption_icon"in i ? i.caption_icon : "", "light_escape", null, !0)),
                    t.append('"></use></svg></span></div><div class="salesbot-designer__header-interrupt_callout"></div><div class="salesbot-designer__header-actions salesbot-designer__header-actions_helpbot hidden">'),
                    new (e._get("interface/controls/cancel_button.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        class_name: "js-sb-designer-helpbot-cancel",
                        text: this.env_.filter("i18n", "Cancel")
                    })),
                    new (e._get("interface/controls/button.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        class_name: "js-sb-designer-helpbot-train",
                        text: this.env_.filter("i18n", "Update")
                    })),
                    t.append('</div><div class="salesbot-designer__header-actions js-sb-designer-header-actions hidden">'),
                    new (e._get("interface/controls/cancel_button.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        class_name: "salesbot-designer__cancel js-sb-designer-cancel",
                        text: twig.attr("buttons"in i ? i.buttons : "", "cancel_text", void 0, void 0, !0) ? twig.filter.def(twig.attr("buttons"in i ? i.buttons : "", "cancel_text"), this.env_.filter("i18n", "Cancel")) : this.env_.filter("i18n", "Cancel")
                    })),
                    new (e._get("interface/controls/button.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        class_name: "button-input-disabled js-sb-designer-save",
                        text: twig.attr("buttons"in i ? i.buttons : "", "save_text", void 0, void 0, !0) ? twig.filter.def(twig.attr("buttons"in i ? i.buttons : "", "save_text"), this.env_.filter("i18n", "Save")) : this.env_.filter("i18n", "Save")
                    })),
                    twig.attr("buttons"in i ? i.buttons : "", "disable_close") || t.append('<button class="salesbot-designer__close-action js-sb-designer-close" type="button"><svg class="svg-icon svg-common--cross-close-dims salesbot-designer__close-action-icon"><use xlink:href="#common--cross-close"></use></svg></button>'),
                    t.append('</div></div><div class="salesbot-designer__body"></div><div class="salesbot-designer__body_disabled-info" style="display: none;"><svg class="svg-icon svg-salesbot--lock-icon-dims"><use xlink:href="#salesbot--lock-icon"></use></svg>'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "The working area is locked during preview"), "light_escape", null, !0)),
                    t.append('</div><div class="salesbot-designer__body_sandbox-info" style="display: none;"><svg class="svg-icon svg-salesbot--lock-icon-dims"><use xlink:href="#salesbot--lock-icon"></use></svg><span class="js-sandbox-message-text"></span></div><div class="salesbot-designer__preview salesbot-designer__preview--hide"></div><div class="salesbot-designer-bots-gallery"><div class="salesbot-designer-bots-gallery__wrapper custom-scroll"></div></div><div class="salesbot-designer-templates-library"></div><div class="salesbot-designer__button js-sb-designer-magic-stick-container" style="display: none;"></div><div class="salesbot-designer__button salesbot-designer__button_code js-sb-designer-code-view" style="display: none;"></div><div class="salesbot-designer__button salesbot-designer__button_export js-sb-designer-export" style="display: none;"></div><div class="salesbot-designer__button js-sb-designer-preview-container" style="display: none;"></div><div class="salesbot-designer__code h-hidden"><button class="salesbot-designer__button salesbot-designer__button_code salesbot-designer__button_code-hide js-sb-designer-code"><span><svg class="svg-icon svg-salesbot--code-icon-dims"><use xlink:href="#salesbot--code-icon"></use></svg>'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Hide source"), "light_escape", null, !0)),
                    t.append("</span></button>"),
                    new (e._get("interface/controls/textarea_code.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        name: "code",
                        class_name: "salesbot-designer__code-area",
                        textarea_class_name: "salesbot-designer__code-area-input"
                    })),
                    t.append("</div></div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_salesbot_designer_modal"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/salesbot_designer/modal", t)
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
                    t.append('<div class="modal-body__inner"><span class="modal-body__close"><span class="icon icon-modal-close"></span></span><h2 class="modal-body__caption head_2">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Enter your bot name"), "light_escape", null, !0)),
                    t.append("</h2><div>"),
                    new (e._get("interface/controls/input.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        id: "",
                        name: "bot_name",
                        placeholder: "default_name"in i ? i.default_name : "",
                        value: "default_name"in i ? i.default_name : "",
                        style: {
                            width: "100%"
                        }
                    })),
                    t.append("</div>"),
                    new (e._get("interface/common/modal/actions.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        button_text: "button_text"in i ? twig.filter.def("button_text"in i ? i.button_text : "", this.env_.filter("i18n", "Create")) : this.env_.filter("i18n", "Create"),
                        no_cancel: !0
                    })),
                    t.append("</div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_salesbot_designer_name_modal"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/salesbot_designer/name_modal", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e),
                    this.setBlocks({
                        header: twig.bind(this.block_header, this),
                        details: twig.bind(this.block_details, this)
                    })
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(e) {
                    return !1
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    e.append('<div class="salesbot-designer__block-notation '),
                    e.append(twig.filter.escape(this.env_, "notation_class"in t ? t.notation_class : "", "light_escape", null, !0)),
                    e.append('"><div class="salesbot-designer__block-notation-wrapper">'),
                    e.append(this.renderBlock("header", t, i)),
                    e.append(this.renderBlock("details", t, i)),
                    e.append("</div></div>")
                }
                ,
                t.prototype.block_header = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    e.append('<div><div class="salesbot-designer__block-notation-header_messages"></div><div class="salesbot-designer__block-notation-details-header"><span class="salesbot-designer__block-notation-summary">'),
                    e.append(twig.filter.escape(this.env_, "header_summary"in t ? t.header_summary : "", "light_escape", null, !0)),
                    e.append("</span>"),
                    "is_with_arrow_hider"in t && t.is_with_arrow_hider ? e.append('<button class="js-salesbot-designer-block-notation-button salesbot-designer__block-notation-button salesbot-designer__block-notation-button-arrow salesbot-designer__block--active-notation" type="button"><svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L5 5L9 1" stroke="#363B44" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/></svg></button>') : (e.append('<button class="js-salesbot-designer-block-notation-button salesbot-designer__block-notation-button salesbot-designer__block--active-notation" type="button"><span class="salesbot-designer__block-notation-button--show">'),
                    e.append(twig.filter.escape(this.env_, "button_text_show"in t ? t.button_text_show : "", "light_escape", null, !0)),
                    e.append('</span><span class="salesbot-designer__block-notation-button--hide">'),
                    e.append(twig.filter.escape(this.env_, "button_text_hide"in t ? t.button_text_hide : "", "light_escape", null, !0)),
                    e.append("</span></button>")),
                    e.append("</div></div>")
                }
                ,
                t.prototype.block_details = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    e.append('<div class="salesbot-designer__block-notation-details hidden">'),
                    t._parent = t;
                    var n = "messages"in t ? t.messages : "";
                    twig.forEach(n, (function(i, n) {
                        t._key = n,
                        t.message = i,
                        e.append('<p class="salesbot-designer__block-notation-message">'),
                        twig.attr("message"in t ? t.message : "", "is_raw") ? e.append(twig.attr("message"in t ? t.message : "", "content")) : e.append(twig.filter.escape(this.env_, "message"in t ? t.message : "", "light_escape", null, !0)),
                        e.append("</p>")
                    }
                    ), this),
                    e.append("</div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_salesbot_designer_notation"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/salesbot_designer/notation", t)
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
                    e.append('<span class="js-sb-designer-responsible-user salesbot-designer__action-responsible">'),
                    e.append(twig.filter.escape(this.env_, twig.attr(twig.attr("items"in t ? t.items : "", 0, void 0, "array"), "name"), "light_escape", null, !0)),
                    e.append("</span>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_salesbot_designer_responsible_template"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/salesbot_designer/responsible_template", t)
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
                    e.append('<div class="sb-send-message-channel-item__option"><img src="'),
                    e.append(twig.filter.escape(this.env_, "origin_icon_url"in t ? t.origin_icon_url : "", "light_escape", null, !0)),
                    e.append('" class="sb-send-message-channel-item__icon" />'),
                    e.append(twig.filter.escape(this.env_, "name"in t ? t.name : "", "light_escape", null, !0)),
                    e.append("</div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_salesbot_designer_send_message_channel_item"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/salesbot_designer/send_message_channel_item", t)
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
                    i.title_phrase = "opt_in" == ("action_handler"in i ? i.action_handler : "") ? "header_to" : "Channels:",
                    t.append('<div class="sb-send-message-channels__container"><div class="sb-send-message-channels__label">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "title_phrase"in i ? i.title_phrase : ""), "light_escape", null, !0)),
                    t.append('</div><div class="sb-send-message-channels__dropdown-button-wrapper">'),
                    new (e._get("interface/salesbot_designer/send_message_channels_dropdown.twig"))(this.env_).render_(t, {
                        class_name: "salesbot-designer__checkboxes-dropdown",
                        list_class_name: "sb-custom-scroll",
                        create_chat_switcher_name: "create_chat_switcher_name"in i ? i.create_chat_switcher_name : "",
                        create_chat_if_not_exists: "create_chat_if_not_exists"in i ? i.create_chat_if_not_exists : "",
                        items: "source_items"in i ? i.source_items : "",
                        action_handler: "action_handler"in i ? i.action_handler : "",
                        disabled: "disabled"in i ? i.disabled : ""
                    }),
                    t.append("</div></div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_salesbot_designer_send_message_channels"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/salesbot_designer/send_message_channels", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e),
                    this.setBlocks({
                        before_list_block: twig.bind(this.block_before_list_block, this)
                    })
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(t) {
                    return e._get("interface/controls/checkboxes_dropdown/index.twig")
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    t.control_class_name = "js-salesbot-designer__checkbox-dropdown--send-message-channels",
                    t.has_custom_title = !0,
                    t.custom_title = this.env_.filter("i18n", "All (selected)"),
                    t.custom_title_empty = this.env_.filter("i18n", "None (selected)"),
                    t.list_class_name = "sb-send-message-channels-dropdown__list " + ("list_class_name"in t ? t.list_class_name : ""),
                    t.create_chat_switcher_exceptions = ["send_external_message", "opt_in", "send_comment"],
                    t.create_chat_hide_class = twig.contains("create_chat_switcher_exceptions"in t ? t.create_chat_switcher_exceptions : "", "action_handler"in t ? t.action_handler : "") ? "hidden" : "",
                    this.getParent(t).render_(e, t, twig.extend({}, this.getBlocks(), i))
                }
                ,
                t.prototype.block_before_list_block = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    t.append('<div class="sb-send-message-channels-dropdown__create-chat '),
                    t.append(twig.filter.escape(this.env_, "create_chat_hide_class"in i ? i.create_chat_hide_class : "", "light_escape", null, !0)),
                    t.append('"><div class="sb-send-message-channels-dropdown__create-chat-heading">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "If you never chatted in a channel:"), "light_escape", null, !0)),
                    t.append('</div><label class="sb-send-message-channels-dropdown__create-chat-label">'),
                    new (e._get("interface/controls/switcher.twig"))(this.env_).render_(t, {
                        name: "create_chat_switcher_name"in i ? i.create_chat_switcher_name : "",
                        checked: "create_chat_if_not_exists"in i ? i.create_chat_if_not_exists : "",
                        label_class_name: "sb-send-message-channels-dropdown__create-chat-switcher-label",
                        blue: !0,
                        id: "create-chat-switcher_" + twig.functions.random(this.env_, 99999)
                    }),
                    t.append('<div class="sb-send-message-channels-dropdown__create-chat-title">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Try to send a message"), "light_escape", null, !0)),
                    t.append("</div></label></div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_salesbot_designer_send_message_channels_dropdown"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/salesbot_designer/send_message_channels_dropdown", t)
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
                    t.append('<div class="modal-body__inner"><span class="modal-body__close"><span class="icon icon-modal-close"></span></span><h2 class="modal-body__caption head_2">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Widgets"), "light_escape", null, !0)),
                    t.append('</h2><div class="js-sb-designer-widgets-list">'),
                    new (e._get("interface/digital_pipeline/modal_templates/widgets_in_modal.twig"))(this.env_).render_(t, i),
                    t.append("</div></div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_salesbot_designer_widgets_modal"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/salesbot_designer/widgets_modal", t)
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
                    t.append('<div class="modal-body__inner salesbot-designer__helpbot-dataset-body list__body__holder list-helpbot-dataset"><span class="modal-body__close"><span class="icon icon-modal-close"></span></span><h2 class="modal-body__caption head_2">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("intent"in i ? i.intent : "", "text"), "light_escape", null, !0)),
                    t.append("</h2>"),
                    new (e._get("interface/salesbot_designer/helpbot/dataset_items.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        list_table_holder_id: "helpbot_dataset_list_holder"
                    })),
                    t.append("</div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_salesbot_designer_helpbot_dataset"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/salesbot_designer/helpbot/dataset", t)
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
                    t.list_all_checker_disabled = !0,
                    t.no_list_settings = !0,
                    t.no_resize = !0,
                    t.is_plug = !0,
                    this.getParent(t).render_(e, t, twig.extend({}, this.getBlocks(), i))
                }
                ,
                t.prototype.block_body = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    new (e._get("interface/list/item.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        disabled: !0,
                        item: {
                            id: 0,
                            class_name: "list-row_adding",
                            dataset_item: this.env_.filter("i18n", "Add a new phrase to dataset")
                        }
                    }))
                }
                ,
                t.prototype.block_body_no_items_message = function(e, t, i) {
                    i = void 0 === i ? {} : i
                }
                ,
                t.prototype.block_list_footer = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    new (e._get("interface/list/common/footer.twig"))(this.env_).render_(t, i)
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_salesbot_designer_helpbot_dataset_items"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/salesbot_designer/helpbot/dataset_items", t)
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
                    t.append('<div class="modal-body__inner salesbot-designer__helpbot-import"><div class="salesbot-designer__helpbot-import-top"><div class="salesbot-designer__helpbot-import-icon"></div><div><h2 class="modal-body__caption head_2 salesbot-designer__helpbot-import-caption">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Upload dataset"), "light_escape", null, !0)),
                    t.append('</h2><p class="salesbot-designer__helpbot-import-caption-description">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Add document with phrases you can expect from users"), "light_escape", null, !0)),
                    t.append('</p><div class="salesbot-designer__helpbot-import-radio">'),
                    new (e._get("interface/controls/radio.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        class_name: "salesbot-designer__helpbot-import-radio-button",
                        name: "replace_dataset",
                        value: "attach",
                        selected: !0,
                        label: this.env_.filter("i18n", "Add to an existing dataset")
                    })),
                    new (e._get("interface/controls/radio.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        class_name: "salesbot-designer__helpbot-import-radio-button",
                        name: "replace_dataset",
                        value: "replace",
                        label: this.env_.filter("i18n", "Replace")
                    })),
                    t.append("</div>"),
                    new (e._get("interface/controls/checkbox.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        name: "add_synonyms",
                        class_name: "salesbot-designer__helpbot-import-checkbox",
                        checked: !0,
                        text: this.env_.filter("i18n", "Enrich dataset with synonym base")
                    })),
                    t.append('<div class="salesbot-designer__helpbot-import-start-wrapper"><label for="dataset_file"><span class="button-input button-input_blue salesbot-designer__helpbot-import-start"><span class="button-input-inner"><svg class="svg-icon svg-notes--feed-attach-dims"><use xlink:href="#notes--feed-attach"></use></svg><span class="button-input-inner__text">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Upload file & Save"), "light_escape", null, !0)),
                    t.append('</span></span></span></label><input type="file" class="hidden" tabindex="-1" name="file" id="dataset_file"><a href="/example/import_example_dataset_'),
                    t.append(twig.filter.escape(this.env_, "lang_id"in i ? i.lang_id : "", "light_escape", null, !0)),
                    t.append('.xlsx" class="salesbot-designer__helpbot-import-download-template" target="_blank">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Download template"), "light_escape", null, !0)),
                    t.append("</a></div></div></div></div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_salesbot_designer_helpbot_import"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/salesbot_designer/helpbot/import", t)
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
                    t.list_all_checker_disabled = !0,
                    t.no_list_settings = !0,
                    t.is_plug = !0,
                    this.getParent(t).render_(e, t, twig.extend({}, this.getBlocks(), i))
                }
                ,
                t.prototype.block_body = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    new (e._get("interface/list/item.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        disabled: !0,
                        item: {
                            id: 0,
                            class_name: "list-row_adding",
                            intent: {
                                text: this.env_.filter("i18n", "Add a new intention"),
                                no_tags: !0
                            }
                        }
                    })),
                    new (e._get("interface/plugs/list/table_body.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        count: 2
                    }))
                }
                ,
                t.prototype.block_body_no_items_message = function(e, t, i) {
                    i = void 0 === i ? {} : i
                }
                ,
                t.prototype.block_list_footer = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    e.append('<div class="salesbot-designer__helpbot-list-footer hidden" id="list_pagination">'),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Show more"), "light_escape", null, !0)),
                    e.append("</div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_salesbot_designer_helpbot_list"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/salesbot_designer/helpbot/list", t)
            }()
        }
        .apply(t, n)) || (e.exports = s)
    }
    ,
    420565: (e, t, i) => {
        var n, s;
        n = [i(460159), i(94849)],
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
                    i.scope_id = "id"in i ? i.id : "",
                    "status_tmpl"in i && i.status_tmpl || (i.status_tmpl = "interface/controls/pipeline_select/status_item.twig"),
                    "control_class_name"in i && i.control_class_name || ("multiple"in i && i.multiple ? i.control_class_name = "js-control-pipeline-select_multiple" : i.control_class_name = "js-control-pipeline-select"),
                    t.append('<div class="filter-search__users-select-holder filter-search__users-select-holder_'),
                    t.append(twig.filter.escape(this.env_, "class_name_mod"in i ? i.class_name_mod : "", "light_escape", null, !0)),
                    t.append(' filter__custom_settings__item filter__custom_settings__item_suggest-manager" data-title="'),
                    t.append(twig.filter.escape(this.env_, "field_title"in i ? i.field_title : "", "light_escape", null, !0)),
                    t.append('" data-is-fn="usersSelectClear" data-type="'),
                    t.append(twig.filter.escape(this.env_, "field_type"in i ? i.field_type : "", "light_escape", null, !0)),
                    t.append('" data-tmpl="users" data-element-type-name="'),
                    t.append(twig.filter.escape(this.env_, "element_type_name"in i ? i.element_type_name : "", "light_escape", null, !0)),
                    t.append('" data-input-name="'),
                    t.append(twig.filter.escape(this.env_, twig.attr("field"in i ? i.field : "", "name"), "light_escape", null, !0)),
                    t.append('"><div class="custom-scroll"><div class="multisuggest '),
                    t.append(twig.filter.escape(this.env_, "class_name"in i ? i.class_name : "", "light_escape", null, !0)),
                    t.append(" sched_report__entity-filter "),
                    "cant_add"in i && i.cant_add || t.append("js-can-add"),
                    t.append(" "),
                    "render_hidden"in i && i.render_hidden && t.append("h-hidden"),
                    t.append('" data-multisuggest-id="'),
                    t.append(twig.filter.escape(this.env_, "suggest_id"in i ? i.suggest_id : "", "light_escape", null, !0)),
                    t.append('" '),
                    "id"in i && i.id && (t.append('id="'),
                    t.append(twig.filter.escape(this.env_, "id"in i ? i.id : "", "light_escape", null, !0)),
                    t.append('"')),
                    t.append('><ul class="multisuggest__list js-multisuggest-list sched_report__only-pipeline-filter_list"><li class="scheduled_report__manager_filter_label">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "by object"), "light_escape", null, !0)),
                    t.append(":</li>"),
                    i._parent = i;
                    var s = "items"in i ? i.items : "";
                    twig.forEach(s, (function(e, n) {
                        i._key = n,
                        i.item = e;
                        var s = "sel"in i ? i.sel : "";
                        twig.forEach(s, (function(e, n) {
                            i._key = n,
                            i.s = e,
                            ("s"in i ? i.s : "") == twig.attr("item"in i ? i.item : "", "id") && (t.append('<li class="multisuggest__list-item js-multisuggest-item" data-title="'),
                            t.append(twig.filter.escape(this.env_, this.env_.filter("striptags", twig.attr("item"in i ? i.item : "", "name")), "light_escape", null, !0)),
                            t.append('" data-id="'),
                            t.append(twig.filter.escape(this.env_, twig.attr("item"in i ? i.item : "", "id"), "light_escape", null, !0)),
                            t.append('"><input type="text" class="js-focuser" class="js-form-changes-skip" readonly="readonly"><span>'),
                            t.append(twig.filter.escape(this.env_, twig.attr("item"in i ? i.item : "", "name"), "light_escape", null, !0)),
                            t.append('</span><input type="checkbox" checked="checked" class="hidden" name="'),
                            t.append(twig.filter.escape(this.env_, "input_name"in i ? i.input_name : "", "light_escape", null, !0)),
                            t.append('" id="cbx_drop_'),
                            t.append(twig.filter.escape(this.env_, twig.attr("item"in i ? i.item : "", "id"), "light_escape", null, !0)),
                            t.append('" value="'),
                            t.append(twig.filter.escape(this.env_, twig.attr("item"in i ? i.item : "", "id"), "light_escape", null, !0)),
                            t.append('"></li>'))
                        }
                        ), this)
                    }
                    ), this),
                    t.append('</ul></div></div><b class="js-filter-field-clear"></b></div><div class="entity-filter-wrapper pipeline-select-wrapper_plain folded '),
                    "multiple"in i && i.multiple && t.append("multiple"),
                    t.append(" "),
                    t.append(twig.filter.escape(this.env_, "control_class_name"in i ? i.control_class_name : "", "light_escape", null, !0)),
                    t.append(" "),
                    t.append(twig.filter.escape(this.env_, "class_name"in i ? i.class_name : "", "light_escape", null, !0)),
                    t.append('"  id="'),
                    t.append(twig.filter.escape(this.env_, "id"in i ? i.id : "", "light_escape", null, !0)),
                    t.append('"  style="display:none">'),
                    i.class_name = "",
                    t.append('<div class="pipeline-select-wrapper__inner pipeline-select-wrapper__inner_plain '),
                    t.append(twig.filter.escape(this.env_, "inner_class_name"in i ? i.inner_class_name : "", "light_escape", null, !0)),
                    t.append(" "),
                    "multiple"in i && i.multiple && t.append("pipeline-select-wrapper__inner-multiple"),
                    t.append(' custom-scroll"><div class="entity_wrapper__inner__holder pipeline-select-wrapper__inner__holder"><div class="pipeline-select-wrapper__inner__container">'),
                    i._parent = i,
                    s = "items"in i ? i.items : "";
                    var l = {
                        index0: 0,
                        index: 1,
                        first: !0
                    };
                    if (twig.countable(s)) {
                        var a = twig.count(s);
                        l.revindex0 = a - 1,
                        l.revindex = a,
                        l.length = a,
                        l.last = 1 === a
                    }
                    twig.forEach(s, (function(n, s) {
                        i._key = s,
                        i.item = n,
                        i.entity_id = "entity_" + twig.attr("item"in i ? i.item : "", "id") + "_" + ("scope_id"in i ? i.scope_id : ""),
                        i.checked_entity = !1;
                        var a = "sel"in i ? i.sel : "";
                        twig.forEach(a, (function(e, t) {
                            i._key = t,
                            i.s = e,
                            ("s"in i ? i.s : "") == twig.attr("item"in i ? i.item : "", "id") && (i.checked_entity = !0)
                        }
                        ), this),
                        t.append('<input class="pipeline-select__pipeline-input js-form-changes-skip js-filter-clear-skip" type="radio" name="'),
                        t.append(twig.filter.escape(this.env_, twig.attr("selected_pipe"in i ? i.selected_pipe : "", "name"), "light_escape", null, !0)),
                        t.append('" id="'),
                        t.append(twig.filter.escape(this.env_, "entity_id"in i ? i.entity_id : "", "light_escape", null, !0)),
                        t.append('" value="'),
                        t.append(twig.filter.escape(this.env_, twig.attr("item"in i ? i.item : "", "id"), "light_escape", null, !0)),
                        t.append('"  '),
                        "multiple"in i && i.multiple && twig.attr(l, "first") && t.append(' checked="checked" '),
                        t.append(" "),
                        twig.attr("item"in i ? i.item : "", "unsorted") && t.append(' data-type="unsorted"'),
                        t.append('><div class="entity-filter pipeline-select"><label class="entity-filter_caption pipeline-select__caption" title="'),
                        t.append(twig.filter.escape(this.env_, twig.attr("item"in i ? i.item : "", "name"), "light_escape", null, !0)),
                        t.append('" for="'),
                        t.append(twig.filter.escape(this.env_, ("entity_id"in i ? i.entity_id : "") + "_checkbox", "light_escape", null, !0)),
                        t.append('">'),
                        "multiple"in i && i.multiple && new (e._get("interface/controls/checkbox.twig"))(this.env_).render_(t, {
                            id: ("entity_id"in i ? i.entity_id : "") + "_checkbox",
                            name: "",
                            checked: "checked_entity"in i ? i.checked_entity : "",
                            value: twig.attr("item"in i ? i.item : "", "id"),
                            input_class_name: "filter_entities"
                        }),
                        t.append('<span class="pipeline-select__caption__inner"><span class="pipeline-select__caption-text" data-folded-title="'),
                        t.append(twig.filter.escape(this.env_, twig.attr("item"in i ? i.item : "", "name"), "light_escape", null, !0)),
                        t.append('" title="'),
                        t.append(twig.filter.escape(this.env_, twig.attr("item"in i ? i.item : "", "name"), "light_escape", null, !0)),
                        t.append('"></span></span></label></div>'),
                        ++l.index0,
                        ++l.index,
                        l.first = !1,
                        l.length && (--l.revindex0,
                        --l.revindex,
                        l.last = 0 === l.revindex0)
                    }
                    ), this),
                    t.append("</div></div></div></div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_scheduled_report_entity_filter"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/scheduled_report/entity_filter", t)
            }
            )(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e),
                    this.setBlocks({
                        loader: twig.bind(this.block_loader, this),
                        suggest: twig.bind(this.block_suggest, this)
                    })
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(e) {
                    return !1
                }
                ,
                t.prototype.render_ = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    i.scope_id = "id"in i ? i.id : "",
                    i.items = twig.attr(twig.attr("params"in i ? i.params : "", "managers", void 0, "array"), "items"),
                    i.input_name = "filter[main_user][]" + ("scope_id"in i ? i.scope_id : ""),
                    i.id = "filter_users_select_" + ("scope_id"in i ? i.scope_id : "") + "_holder",
                    i.item_tmpl = "interface/scheduled_report/filter_manager_label.twig",
                    i.class_name = "users_select-select_one ",
                    i.list_class_name = "suggest-manager-lib__items users_select__selected_items",
                    i.field_title = "",
                    i.without_input = !0,
                    i.suggest_id = "scope_id"in i ? i.scope_id : "",
                    t.append('<div class="filter-search__users-select-holder filter-search__users-select-holder_'),
                    t.append(twig.filter.escape(this.env_, "class_name_mod"in i ? i.class_name_mod : "", "light_escape", null, !0)),
                    t.append(' filter__custom_settings__item filter__custom_settings__item_suggest-manager" data-title="'),
                    t.append(twig.filter.escape(this.env_, "field_title"in i ? i.field_title : "", "light_escape", null, !0)),
                    t.append('" data-is-fn="usersSelectClear" data-type="'),
                    t.append(twig.filter.escape(this.env_, "field_type"in i ? i.field_type : "", "light_escape", null, !0)),
                    t.append('" data-tmpl="users" data-element-type-name="'),
                    t.append(twig.filter.escape(this.env_, "element_type_name"in i ? i.element_type_name : "", "light_escape", null, !0)),
                    t.append('" data-input-name="'),
                    t.append(twig.filter.escape(this.env_, twig.attr("field"in i ? i.field : "", "name"), "light_escape", null, !0)),
                    t.append('"><div class="custom-scroll"><div class="multisuggest '),
                    t.append(twig.filter.escape(this.env_, "class_name"in i ? i.class_name : "", "light_escape", null, !0)),
                    t.append(" js-multisuggest "),
                    "cant_add"in i && i.cant_add || t.append("js-can-add"),
                    t.append(" "),
                    "render_hidden"in i && i.render_hidden && t.append("h-hidden"),
                    t.append('" data-multisuggest-id="'),
                    t.append(twig.filter.escape(this.env_, "suggest_id"in i ? i.suggest_id : "", "light_escape", null, !0)),
                    t.append('" '),
                    "id"in i && i.id && (t.append('id="'),
                    t.append(twig.filter.escape(this.env_, "id"in i ? i.id : "", "light_escape", null, !0)),
                    t.append('"')),
                    t.append('><ul class="multisuggest__list js-multisuggest-list schedule_report_filter_manager_list"><li class="scheduled_report__manager_filter_label">'),
                    t.append(twig.filter.escape(this.env_, "label"in i ? twig.filter.def("label"in i ? i.label : "", this.env_.filter("i18n", "Filter by user")) : this.env_.filter("i18n", "Filter by user"), "light_escape", null, !0)),
                    t.append(":</li>"),
                    i._parent = i;
                    var s = "items"in i ? i.items : ""
                      , l = {
                        index0: 0,
                        index: 1,
                        first: !0
                    };
                    if (twig.countable(s)) {
                        var a = twig.count(s);
                        l.revindex0 = a - 1,
                        l.revindex = a,
                        l.length = a,
                        l.last = 1 === a
                    }
                    twig.forEach(s, (function(n, s) {
                        i._key = s,
                        i.item = n,
                        new (e._get("item_tmpl"in i ? i.item_tmpl : ""))(this.env_).render_(t, twig.extend({}, i, {
                            class_name: ""
                        })),
                        ++l.index0,
                        ++l.index,
                        l.first = !1,
                        l.length && (--l.revindex0,
                        --l.revindex,
                        l.last = 0 === l.revindex0)
                    }
                    ), this),
                    "without_input"in i && i.without_input || (t.append('<li class="multisuggest__list-item multisuggest__list-item_input"><span class="js-multisuggest-hint multisuggest__hint"></span><input type="text" class="multisuggest__input js-multisuggest-input" tabindex="-1" data-can-add="'),
                    t.append("cant_add"in i && i.cant_add ? "N" : "Y"),
                    t.append('" value="" placeholder="'),
                    t.append(twig.filter.escape(this.env_, "placeholder"in i ? i.placeholder : "", "light_escape", null, !0)),
                    t.append('">'),
                    t.append(this.renderBlock("loader", i, n)),
                    t.append("</li>")),
                    t.append("</ul>"),
                    t.append(this.renderBlock("suggest", i, n)),
                    t.append('</div></div><b class="js-filter-field-clear"></b></div>')
                }
                ,
                t.prototype.block_loader = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    e.append('<span class="multisuggest__suggest-loader js-multisuggest-loader"><span class="spinner-icon"></span></span>')
                }
                ,
                t.prototype.block_suggest = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    e.append('<ul class="multisuggest__suggest '),
                    e.append(twig.filter.escape(this.env_, "suggest_class_name"in t ? t.suggest_class_name : "", "light_escape", null, !0)),
                    e.append(' js-multisuggest-suggest custom-scroll" data-is-suggest="y" data-multisuggest-id="'),
                    e.append(twig.filter.escape(this.env_, "suggest_id"in t ? t.suggest_id : "", "light_escape", null, !0)),
                    e.append('"></ul>')
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_scheduled_report_filter_manager"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/scheduled_report/filter_manager", t)
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
                    e.append('<li class="multisuggest__list-item js-multisuggest-item" data-title="'),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("striptags", twig.attr("item"in t ? t.item : "", "title")), "light_escape", null, !0)),
                    e.append('" data-group="'),
                    e.append(twig.filter.escape(this.env_, twig.attr("item"in t ? t.item : "", "group"), "light_escape", null, !0)),
                    e.append('" data-id="'),
                    e.append(twig.filter.escape(this.env_, twig.attr("item"in t ? t.item : "", "id"), "light_escape", null, !0)),
                    e.append('"><input type="text" class="js-focuser" class="js-form-changes-skip" readonly="readonly"><span>'),
                    e.append(twig.filter.escape(this.env_, twig.attr("item"in t ? t.item : "", "title"), "light_escape", null, !0)),
                    e.append('</span><input type="checkbox" checked="checked" class="hidden" name="'),
                    e.append(twig.filter.escape(this.env_, "input_name"in t ? t.input_name : "", "light_escape", null, !0)),
                    e.append('" id="cbx_drop_'),
                    e.append(twig.filter.escape(this.env_, twig.attr("item"in t ? t.item : "", "id"), "light_escape", null, !0)),
                    e.append('" value="'),
                    e.append(twig.filter.escape(this.env_, twig.attr("item"in t ? t.item : "", "id"), "light_escape", null, !0)),
                    e.append('"></li>')
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_scheduled_report_filter_manager_label"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/scheduled_report/filter_manager_label", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e),
                    this.setBlocks({
                        periodpicker_timeselect_today: twig.bind(this.block_periodpicker_timeselect_today, this),
                        periodpicker_timeselect: twig.bind(this.block_periodpicker_timeselect, this)
                    })
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(e) {
                    return !1
                }
                ,
                t.prototype.render_ = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    t.append('<div class="periodpicker"><input type="hidden" name="period" value="'),
                    t.append(twig.filter.escape(this.env_, twig.attr("selected"in i ? i.selected : "", "period"), "light_escape", null, !0)),
                    t.append('" id="periodpicker-'),
                    t.append(twig.filter.escape(this.env_, twig.attr("period"in i ? i.period : "", "code"), "light_escape", null, !0)),
                    t.append('" ><div class="periodpicker__periods-container"><div class="periodpicker__period '),
                    twig.attr("selected"in i ? i.selected : "", "period") == twig.attr(twig.attr("periods"in i ? i.periods : "", "today"), "id") && t.append("periodpicker__period_selected "),
                    t.append('" id="periodpicker-'),
                    t.append(twig.filter.escape(this.env_, twig.attr(twig.attr("periods"in i ? i.periods : "", "today"), "code"), "light_escape", null, !0)),
                    t.append('" data-value="'),
                    t.append(twig.filter.escape(this.env_, twig.attr(twig.attr("periods"in i ? i.periods : "", "today"), "id"), "light_escape", null, !0)),
                    t.append('"><span class="periodpicker__period-title">'),
                    t.append(twig.filter.escape(this.env_, twig.attr(twig.attr("periods"in i ? i.periods : "", "today"), "name"), "light_escape", null, !0)),
                    t.append('</span><span class="periodpicker__period-controls">'),
                    t.append(this.renderBlock("periodpicker_timeselect_today", i, n)),
                    t.append('</span></div><div class="periodpicker__period '),
                    twig.attr("selected"in i ? i.selected : "", "period") == twig.attr(twig.attr("periods"in i ? i.periods : "", "daily"), "id") && t.append("periodpicker__period_selected "),
                    t.append('" id="periodpicker-'),
                    t.append(twig.filter.escape(this.env_, twig.attr(twig.attr("periods"in i ? i.periods : "", "daily"), "code"), "light_escape", null, !0)),
                    t.append('" data-value="'),
                    t.append(twig.filter.escape(this.env_, twig.attr(twig.attr("periods"in i ? i.periods : "", "daily"), "id"), "light_escape", null, !0)),
                    t.append('"><span class="periodpicker__period-title">'),
                    t.append(twig.filter.escape(this.env_, twig.attr(twig.attr("periods"in i ? i.periods : "", "daily"), "name"), "light_escape", null, !0)),
                    t.append('</span><span class="periodpicker__period-controls">'),
                    t.append(this.renderBlock("periodpicker_timeselect", i, n)),
                    t.append('</span></div><div class="periodpicker__period '),
                    twig.attr("selected"in i ? i.selected : "", "period") == twig.attr(twig.attr("periods"in i ? i.periods : "", "weekly"), "id") && t.append("periodpicker__period_selected "),
                    t.append('" id="periodpicker-'),
                    t.append(twig.filter.escape(this.env_, twig.attr(twig.attr("periods"in i ? i.periods : "", "weekly"), "code"), "light_escape", null, !0)),
                    t.append('" data-value="'),
                    t.append(twig.filter.escape(this.env_, twig.attr(twig.attr("periods"in i ? i.periods : "", "weekly"), "id"), "light_escape", null, !0)),
                    t.append('"><span class="periodpicker__period-title">'),
                    t.append(twig.filter.escape(this.env_, twig.attr(twig.attr("periods"in i ? i.periods : "", "weekly"), "name"), "light_escape", null, !0)),
                    t.append('</span><span class="periodpicker__period-controls">'),
                    new (e._get("interface/controls/select.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        items: "weekdays"in i ? i.weekdays : "",
                        id: "periodpicker_weekday",
                        selected: twig.attr("selected"in i ? i.selected : "", "weekday"),
                        name: "weekday",
                        class_name: "periodpicker__weekdayselect periodpicker__weekdayselect_lang_" + ("lang_id"in i ? i.lang_id : ""),
                        input_class_name: "js-tasks-date-time-input",
                        button_class_name: "periodpicker__weekday-selector",
                        additional_data: ("additional_data"in i ? i.additional_data : "") || ""
                    })),
                    t.append(this.renderBlock("periodpicker_timeselect", i, n)),
                    t.append('</span></div><div class="periodpicker__period '),
                    twig.attr("selected"in i ? i.selected : "", "period") == twig.attr(twig.attr("periods"in i ? i.periods : "", "monthly"), "id") && t.append("periodpicker__period_selected "),
                    t.append('" id="periodpicker-'),
                    t.append(twig.filter.escape(this.env_, twig.attr(twig.attr("periods"in i ? i.periods : "", "monthly"), "code"), "light_escape", null, !0)),
                    t.append('"  data-value="'),
                    t.append(twig.filter.escape(this.env_, twig.attr(twig.attr("periods"in i ? i.periods : "", "monthly"), "id"), "light_escape", null, !0)),
                    t.append('"><span class="periodpicker__period-title">'),
                    t.append(twig.filter.escape(this.env_, twig.attr(twig.attr("periods"in i ? i.periods : "", "monthly"), "name"), "light_escape", null, !0)),
                    t.append('</span><span class="periodpicker__period-controls">'),
                    new (e._get("interface/controls/select.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        items: "monthdays"in i ? i.monthdays : "",
                        id: "periodpicker_monthday",
                        selected: twig.attr("selected"in i ? i.selected : "", "monthday"),
                        name: "monthday",
                        class_name: "periodpicker__monthdayselect",
                        input_class_name: "js-tasks-date-time-input",
                        button_class_name: "periodpicker__monthday-selector",
                        additional_data: ("additional_data"in i ? i.additional_data : "") || ""
                    })),
                    t.append(this.renderBlock("periodpicker_timeselect", i, n)),
                    t.append("</span></div></div></div>")
                }
                ,
                t.prototype.block_periodpicker_timeselect_today = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    t.append('<span class="periodpicker__period-at">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "at"), "light_escape", null, !0)),
                    t.append("</span>"),
                    new (e._get("interface/controls/time.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        selected: twig.attr("selected"in i ? i.selected : "", "time"),
                        class_name: "periodpicker__timeselect",
                        name: "time",
                        input_tmpl: "select",
                        skip_before_time: "skip_before_now"in i ? i.skip_before_now : "",
                        id: "control_email_time"
                    }))
                }
                ,
                t.prototype.block_periodpicker_timeselect = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    t.append('<span class="periodpicker__period-at">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "at"), "light_escape", null, !0)),
                    t.append("</span>"),
                    new (e._get("interface/controls/time.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        selected: twig.attr("selected"in i ? i.selected : "", "time"),
                        class_name: "periodpicker__timeselect",
                        name: "time",
                        input_tmpl: "select",
                        id: "control_email_time"
                    }))
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_scheduled_report_periodpicker"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/scheduled_report/periodpicker", t)
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
                    "status_tmpl"in i && i.status_tmpl || (i.status_tmpl = "interface/controls/pipeline_select/status_item.twig"),
                    "statuses_numeral"in i && i.statuses_numeral || (i.statuses_numeral = this.env_.filter("i18n", "stage,stages")),
                    "pipelines_numeral"in i && i.pipelines_numeral || (i.pipelines_numeral = this.env_.filter("i18n", "pipeline,pipelines")),
                    t.append('<div class="filter-search__users-select-holder filter-search__users-select-holder_'),
                    t.append(twig.filter.escape(this.env_, "class_name_mod"in i ? i.class_name_mod : "", "light_escape", null, !0)),
                    t.append(' filter__custom_settings__item filter__custom_settings__item_suggest-manager" data-title="'),
                    t.append(twig.filter.escape(this.env_, "field_title"in i ? i.field_title : "", "light_escape", null, !0)),
                    t.append('" data-is-fn="usersSelectClear" data-type="'),
                    t.append(twig.filter.escape(this.env_, "field_type"in i ? i.field_type : "", "light_escape", null, !0)),
                    t.append('" data-tmpl="users" data-element-type-name="'),
                    t.append(twig.filter.escape(this.env_, "element_type_name"in i ? i.element_type_name : "", "light_escape", null, !0)),
                    t.append('" data-input-name="'),
                    t.append(twig.filter.escape(this.env_, twig.attr("field"in i ? i.field : "", "name"), "light_escape", null, !0)),
                    t.append('"><div class="custom-scroll"><div class="multisuggest '),
                    t.append(twig.filter.escape(this.env_, "class_name"in i ? i.class_name : "", "light_escape", null, !0)),
                    t.append(" sched_report__only-pipeline-filter "),
                    "cant_add"in i && i.cant_add || t.append("js-can-add"),
                    t.append(" "),
                    "render_hidden"in i && i.render_hidden && t.append("h-hidden"),
                    t.append('" data-multisuggest-id="'),
                    t.append(twig.filter.escape(this.env_, "suggest_id"in i ? i.suggest_id : "", "light_escape", null, !0)),
                    t.append('" '),
                    "id"in i && i.id && (t.append('id="'),
                    t.append(twig.filter.escape(this.env_, "id"in i ? i.id : "", "light_escape", null, !0)),
                    t.append('"')),
                    t.append('><ul class="multisuggest__list js-multisuggest-list sched_report__only-pipeline-filter_list"><li class="scheduled_report__manager_filter_label">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "by pipeline"), "light_escape", null, !0)),
                    t.append(":</li>"),
                    i._parent = i;
                    var s = "items"in i ? i.items : "";
                    twig.forEach(s, (function(e, n) {
                        i._key = n,
                        i.pipeline = e;
                        var s = "sel"in i ? i.sel : "";
                        twig.forEach(s, (function(e, n) {
                            i._key = n,
                            i.s = e,
                            ("s"in i ? i.s : "") == twig.attr("pipeline"in i ? i.pipeline : "", "id") && (t.append('<li class="multisuggest__list-item js-multisuggest-item" data-title="'),
                            t.append(twig.filter.escape(this.env_, this.env_.filter("striptags", twig.attr("pipeline"in i ? i.pipeline : "", "name")), "light_escape", null, !0)),
                            t.append('" data-id="'),
                            t.append(twig.filter.escape(this.env_, twig.attr("pipeline"in i ? i.pipeline : "", "id"), "light_escape", null, !0)),
                            t.append('"><input type="text" class="js-focuser" class="js-form-changes-skip" readonly="readonly"><span>'),
                            t.append(twig.filter.escape(this.env_, twig.attr("pipeline"in i ? i.pipeline : "", "name"), "light_escape", null, !0)),
                            t.append('</span><input type="checkbox" checked="checked" class="hidden" name="'),
                            t.append(twig.filter.escape(this.env_, "input_name"in i ? i.input_name : "", "light_escape", null, !0)),
                            t.append('" id="cbx_drop_'),
                            t.append(twig.filter.escape(this.env_, twig.attr("item"in i ? i.item : "", "id"), "light_escape", null, !0)),
                            t.append('" value="'),
                            t.append(twig.filter.escape(this.env_, twig.attr("item"in i ? i.item : "", "id"), "light_escape", null, !0)),
                            t.append('"></li>'))
                        }
                        ), this)
                    }
                    ), this),
                    t.append('</ul></div></div><b class="js-filter-field-clear"></b></div>'),
                    "selected_pipeline_id"in i && i.selected_pipeline_id || (i.selected_pipeline_id = twig.attr("selected_pipe"in i ? i.selected_pipe : "", "id")),
                    "selected_pipeline_id"in i && i.selected_pipeline_id || !twig.attr("params"in i ? i.params : "", "form_params") || (i.selected_pipeline_id = twig.attr(twig.attr(twig.attr("params"in i ? i.params : "", "form_params"), "settings"), "lead_pipe"),
                    i.selected = twig.attr(twig.attr(twig.attr("params"in i ? i.params : "", "form_params"), "settings"), "lead_status")),
                    "selected_pipeline_id"in i && i.selected_pipeline_id || (i.selected_pipeline_id = twig.attr(twig.filter.first(this.env_, "items"in i ? i.items : ""), "id")),
                    new (e._get("interface/controls/pipeline_select/only_pipelines.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        class_name: "class_name"in i ? i.class_name : "",
                        control_class_name: "",
                        multiple: "multiple"in i ? i.multiple : "",
                        selected_pipeline_id: "selected_pipeline_id"in i ? i.selected_pipeline_id : "",
                        selected_pipe: "selected_pipe"in i ? i.selected_pipe : "",
                        items: "items"in i ? i.items : "",
                        statuses_numeral: "statuses_numeral"in i ? i.statuses_numeral : "",
                        pipelines_numeral: "pipelines_numeral"in i ? i.pipelines_numeral : ""
                    }))
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_scheduled_report_select_only_pipelines_custom_filter"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/scheduled_report/select_only_pipelines_custom_filter", t)
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
                    t.append('<div  class="user-profile__table-style_tr '),
                    twig.attr("item"in i ? i.item : "", "interface") || t.append("user-profile__disabled-row"),
                    t.append(' user-profile__table-notifications_fields js-user-profile__row-settings"><div class="user-profile__table-style_td user-profile__table-notifications_inputs"><div class="user-profile__table-notifications_container">'),
                    new (e._get("interface/controls/checkbox.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        name: "interface",
                        id: "schedule_report_master_checkbox",
                        dataValue: "interface",
                        input_class_name: "js-user-profile__checkbox_interface js-checkbox_child",
                        checked: twig.attr("item"in i ? i.item : "", "interface")
                    })),
                    t.append('<span class="user-profile__table-notifications_body">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Scheduled report"), "light_escape", null, !0)),
                    t.append('</span><input type="hidden" name="uuid" value="'),
                    t.append(twig.filter.escape(this.env_, twig.attr("item"in i ? i.item : "", "uuid"), "light_escape", null, !0)),
                    t.append('" data-row="'),
                    t.append(twig.filter.escape(this.env_, twig.attr("item"in i ? i.item : "", "name"), "light_escape", null, !0)),
                    t.append('"></div><div class="schedule_report_period_wrapper"><span class="sched_report_sending_period"></span><div class="sched_report_div_wrapper">'),
                    new (e._get("interface/controls/button.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        id: "button-input-un",
                        class_name: "button-input-un sched_report_edit_button",
                        text: this.env_.filter("i18n", "Setup")
                    })),
                    t.append('<div class="schedule_report__periodpicker-receivenow"><span class="schedule_report__periodpicker-receivenow__message">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Sending..."), "light_escape", null, !0)),
                    t.append('</span><span class="schedule_report__periodpicker-receivenow__control">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Send now"), "light_escape", null, !0)),
                    t.append('</span></div></div></div></div><div class="user-profile__table-style_td user-profile__table-notifications_inputs"><div class="user-profile__table-notifications_container">'),
                    new (e._get("interface/controls/checkbox.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        name: "email",
                        id: "schedule_report_email_edit_checkbox",
                        dataValue: "email",
                        input_class_name: "js-user-profile__checkbox_email  js-checkbox_child",
                        checked: twig.attr("item"in i ? i.item : "", "email")
                    })),
                    t.append('<input type="hidden" name="email_time" value="'),
                    t.append(twig.filter.escape(this.env_, twig.attr("item"in i ? i.item : "", "email_time"), "light_escape", null, !0)),
                    t.append('"><span class="user-profile__table-notifications_body mail-reg-report">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Email letter"), "light_escape", null, !0)),
                    t.append('</span></div><div class="user-profile__table-input-wrapper"></div></div><div class="user-profile__table-style_td user-profile__table-notifications_inputs"><div class="user-profile__table-notifications_container">'),
                    new (e._get("interface/controls/checkbox.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        name: "mobile_push",
                        id: twig.attr("item"in i ? i.item : "", "name") + "mobile_push",
                        dataValue: "mobile_push",
                        input_class_name: "js-user-profile__checkbox_mobile  js-checkbox_child",
                        checked: twig.attr("item"in i ? i.item : "", "mobile_push")
                    })),
                    t.append('</div></div><div class="user-profile__table-style_td user-profile__table-notifications_inputs"><div class="user-profile__table-notifications_container">'),
                    new (e._get("interface/controls/checkbox.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        name: "browser_push",
                        id: twig.attr("item"in i ? i.item : "", "name") + "browser_push",
                        dataValue: "browser_push",
                        input_class_name: "js-user-profile__checkbox_browser  js-checkbox_child",
                        checked: twig.attr("item"in i ? i.item : "", "browser_push")
                    })),
                    t.append('</div></div><div class="user-profile__table-style_td user-profile__table-notifications_inputs "><div class="user-profile__table-notifications_container user-profile__table-notifications_container_telegram  '),
                    twig.attr("telegram"in i ? i.telegram : "", "telegram") && t.append(" schedule_report_show_completely_flex "),
                    t.append(' "style="'),
                    0 == twig.attr("telegram"in i ? i.telegram : "", "telegram") && t.append("display:none"),
                    t.append('">'),
                    new (e._get("interface/controls/checkbox.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        name: "telegram",
                        id: twig.attr("item"in i ? i.item : "", "uuid") + "_telegram",
                        dataValue: "telegram",
                        input_class_name: "js-user-profile__checkbox_browser  js-checkbox_child",
                        checked: twig.attr("item"in i ? i.item : "", "telegram")
                    })),
                    t.append("</div></div></div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_scheduled_report_settings_profile_item"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/scheduled_report/settings_profile_item", t)
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
                    i.scope_id = "id"in i ? i.id : "",
                    "status_tmpl"in i && i.status_tmpl || (i.status_tmpl = "interface/controls/pipeline_select/status_item.twig"),
                    "control_class_name"in i && i.control_class_name || ("multiple"in i && i.multiple ? i.control_class_name = "js-control-pipeline-select_multiple" : i.control_class_name = "js-control-pipeline-select"),
                    t.append('<div class="filter-search__users-select-holder filter-search__users-select-holder_'),
                    t.append(twig.filter.escape(this.env_, "class_name_mod"in i ? i.class_name_mod : "", "light_escape", null, !0)),
                    t.append(' filter__custom_settings__item filter__custom_settings__item_suggest-manager" data-title="'),
                    t.append(twig.filter.escape(this.env_, "field_title"in i ? i.field_title : "", "light_escape", null, !0)),
                    t.append('" data-is-fn="usersSelectClear" data-type="'),
                    t.append(twig.filter.escape(this.env_, "field_type"in i ? i.field_type : "", "light_escape", null, !0)),
                    t.append('" data-tmpl="users" data-element-type-name="'),
                    t.append(twig.filter.escape(this.env_, "element_type_name"in i ? i.element_type_name : "", "light_escape", null, !0)),
                    t.append('" data-input-name="'),
                    t.append(twig.filter.escape(this.env_, twig.attr("field"in i ? i.field : "", "name"), "light_escape", null, !0)),
                    t.append('"><div class="custom-scroll"><div class="multisuggest '),
                    t.append(twig.filter.escape(this.env_, "class_name"in i ? i.class_name : "", "light_escape", null, !0)),
                    t.append(" sched_report__task_types-filter "),
                    "cant_add"in i && i.cant_add || t.append("js-can-add"),
                    t.append(" "),
                    "render_hidden"in i && i.render_hidden && t.append("h-hidden"),
                    t.append('" data-multisuggest-id="'),
                    t.append(twig.filter.escape(this.env_, "suggest_id"in i ? i.suggest_id : "", "light_escape", null, !0)),
                    t.append('" '),
                    "id"in i && i.id && (t.append('id="'),
                    t.append(twig.filter.escape(this.env_, "id"in i ? i.id : "", "light_escape", null, !0)),
                    t.append('"')),
                    t.append('><ul class="multisuggest__list js-multisuggest-list sched_report__only-pipeline-filter_list"><li class="scheduled_report__manager_filter_label">'),
                    t.append(twig.filter.escape(this.env_, "label"in i ? twig.filter.def("label"in i ? i.label : "", this.env_.filter("i18n", "by task type")) : this.env_.filter("i18n", "by task type"), "light_escape", null, !0)),
                    t.append(":</li>"),
                    i._parent = i;
                    var s = "items"in i ? i.items : "";
                    twig.forEach(s, (function(e, n) {
                        i._key = n,
                        i.item = e;
                        var s = "sel"in i ? i.sel : "";
                        twig.forEach(s, (function(e, n) {
                            i._key = n,
                            i.s = e,
                            ("s"in i ? i.s : "") == twig.attr("item"in i ? i.item : "", "id") && (t.append('<li class="multisuggest__list-item js-multisuggest-item" data-title="'),
                            t.append(twig.filter.escape(this.env_, this.env_.filter("striptags", twig.attr("item"in i ? i.item : "", "name")), "light_escape", null, !0)),
                            t.append('" data-id="'),
                            t.append(twig.filter.escape(this.env_, twig.attr("item"in i ? i.item : "", "id"), "light_escape", null, !0)),
                            t.append('"><input type="text" class="js-focuser" class="js-form-changes-skip" readonly="readonly"><span>'),
                            t.append(twig.filter.escape(this.env_, twig.attr("item"in i ? i.item : "", "name"), "light_escape", null, !0)),
                            t.append('</span><input type="checkbox" checked="checked" class="hidden" name="'),
                            t.append(twig.filter.escape(this.env_, "input_name"in i ? i.input_name : "", "light_escape", null, !0)),
                            t.append('" id="cbx_drop_'),
                            t.append(twig.filter.escape(this.env_, twig.attr("item"in i ? i.item : "", "id"), "light_escape", null, !0)),
                            t.append('" value="'),
                            t.append(twig.filter.escape(this.env_, twig.attr("item"in i ? i.item : "", "id"), "light_escape", null, !0)),
                            t.append('"></li>'))
                        }
                        ), this)
                    }
                    ), this),
                    t.append('</ul></div></div><b class="js-filter-field-clear"></b></div><div class="task_types-filter-wrapper pipeline-select-wrapper_plain folded '),
                    "multiple"in i && i.multiple && t.append("multiple"),
                    t.append(" "),
                    t.append(twig.filter.escape(this.env_, "control_class_name"in i ? i.control_class_name : "", "light_escape", null, !0)),
                    t.append(" "),
                    t.append(twig.filter.escape(this.env_, "class_name"in i ? i.class_name : "", "light_escape", null, !0)),
                    t.append('"  id="'),
                    t.append(twig.filter.escape(this.env_, "id"in i ? i.id : "", "light_escape", null, !0)),
                    t.append('"  style="display:none">'),
                    i.class_name = "",
                    t.append('<div class="pipeline-select-wrapper__inner pipeline-select-wrapper__inner_plain '),
                    t.append(twig.filter.escape(this.env_, "inner_class_name"in i ? i.inner_class_name : "", "light_escape", null, !0)),
                    t.append(" "),
                    "multiple"in i && i.multiple && t.append("pipeline-select-wrapper__inner-multiple"),
                    t.append(' custom-scroll"><div class="task_types_wrapper__inner__holder pipeline-select-wrapper__inner__holder"><div class="pipeline-select-wrapper__inner__container">'),
                    i._parent = i,
                    s = "items"in i ? i.items : "";
                    var l = {
                        index0: 0,
                        index: 1,
                        first: !0
                    };
                    if (twig.countable(s)) {
                        var a = twig.count(s);
                        l.revindex0 = a - 1,
                        l.revindex = a,
                        l.length = a,
                        l.last = 1 === a
                    }
                    twig.forEach(s, (function(n, s) {
                        i._key = s,
                        i.item = n,
                        i.entity_id = "task_types_" + twig.attr("item"in i ? i.item : "", "id") + "_" + ("scope_id"in i ? i.scope_id : ""),
                        i.checked_entity = !1;
                        var a = "sel"in i ? i.sel : "";
                        twig.forEach(a, (function(e, t) {
                            i._key = t,
                            i.s = e,
                            ("s"in i ? i.s : "") == twig.attr("item"in i ? i.item : "", "id") && (i.checked_entity = !0)
                        }
                        ), this),
                        t.append('<input class="pipeline-select__pipeline-input js-form-changes-skip js-filter-clear-skip" type="radio" name="'),
                        t.append(twig.filter.escape(this.env_, twig.attr("selected_pipe"in i ? i.selected_pipe : "", "name"), "light_escape", null, !0)),
                        t.append('" id="'),
                        t.append(twig.filter.escape(this.env_, "entity_id"in i ? i.entity_id : "", "light_escape", null, !0)),
                        t.append('" value="'),
                        t.append(twig.filter.escape(this.env_, twig.attr("item"in i ? i.item : "", "id"), "light_escape", null, !0)),
                        t.append('"  '),
                        "multiple"in i && i.multiple && twig.attr(l, "first") && t.append(' checked="checked" '),
                        t.append(" "),
                        twig.attr("item"in i ? i.item : "", "unsorted") && t.append(' data-type="unsorted"'),
                        t.append('><div class="task_types-filter pipeline-select"><label class="task_types-filter_caption pipeline-select__caption" title="'),
                        t.append(twig.filter.escape(this.env_, twig.attr("item"in i ? i.item : "", "name"), "light_escape", null, !0)),
                        t.append('" for="'),
                        t.append(twig.filter.escape(this.env_, ("entity_id"in i ? i.entity_id : "") + "_checkbox", "light_escape", null, !0)),
                        t.append('">'),
                        "multiple"in i && i.multiple && new (e._get("interface/controls/checkbox.twig"))(this.env_).render_(t, {
                            id: ("entity_id"in i ? i.entity_id : "") + "_checkbox",
                            name: "",
                            checked: "checked_entity"in i ? i.checked_entity : "",
                            value: twig.attr("item"in i ? i.item : "", "id"),
                            input_class_name: "filter_task_types"
                        }),
                        t.append('<span class="pipeline-select__caption__inner"><span class="pipeline-select__caption-text" data-folded-title="'),
                        t.append(twig.filter.escape(this.env_, twig.attr("item"in i ? i.item : "", "name"), "light_escape", null, !0)),
                        t.append('" title="'),
                        t.append(twig.filter.escape(this.env_, twig.attr("item"in i ? i.item : "", "name"), "light_escape", null, !0)),
                        t.append('"></span></span></label></div>'),
                        ++l.index0,
                        ++l.index,
                        l.first = !1,
                        l.length && (--l.revindex0,
                        --l.revindex,
                        l.last = 0 === l.revindex0)
                    }
                    ), this),
                    t.append("</div></div></div></div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_scheduled_report_task_types_filter"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/scheduled_report/task_types_filter", t)
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
                    i.index = ("type"in i ? i.type : "") - 1,
                    i._parent = i;
                    var s = "types"in i ? i.types : "";
                    twig.forEach(s, (function(e, t) {
                        i._key = t,
                        i.type = e,
                        1 == ("type"in i ? i.type : "") && (i.type2 = this.env_.filter("i18n", "amount")),
                        2 == ("type"in i ? i.type : "") && (i.type2 = this.env_.filter("i18n", "budget param")),
                        i.items = twig.filter.merge("items"in i ? i.items : "", [{
                            id: "type"in i ? i.type : "",
                            value: "type"in i ? i.type : "",
                            option: "(" + ("type2"in i ? i.type2 : "") + ")"
                        }])
                    }
                    ), this),
                    new (e._get("interface/controls/select.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        items: "items"in i ? i.items : "",
                        id: "id"in i ? i.id : "",
                        selected: twig.attr(twig.attr("items"in i ? i.items : "", "index"in i ? i.index : "", void 0, "array"), "id"),
                        name: "name"in i ? i.name : "",
                        class_name: "class_name"in i ? i.class_name : "",
                        input_class_name: "js-tasks-date-time-input",
                        button_class_name: "sched_report_button",
                        additional_data: ("additional_data"in i ? i.additional_data : "") || ""
                    }))
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_scheduled_report_modal_sched_report_card_control"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/scheduled_report/modal/sched_report_card_control", t)
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
                    i.params = {
                        managers: {
                            items: "filter_managers"in i ? i.filter_managers : ""
                        }
                    },
                    i.filter_scope = "filter"in i ? i.filter : "",
                    t.append('<div class="schedule_report__item_container '),
                    "has_filters"in i && i.has_filters && t.append("schedule_report__item_container_withfilter"),
                    t.append("\" data-cid='"),
                    t.append(twig.filter.escape(this.env_, "cid"in i ? i.cid : "", "light_escape", null, !0)),
                    t.append('\' ><div class="schedule_report__item_header"><div class="schedule_report__item_header_title"><span class=\'schedule_report__item_header_title_name\'>'),
                    t.append(twig.filter.escape(this.env_, "name"in i ? i.name : "", "light_escape", null, !0)),
                    t.append("</span>"),
                    twig.filter.length(this.env_, "types"in i ? i.types : "") > 1 && new (e._get("interface/scheduled_report/modal/sched_report_card_control.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        types: "types"in i ? i.types : "",
                        type: "type"in i ? i.type : "",
                        class_name: "user-profile__popup-email_time-field sched_report_field",
                        name: "email_time",
                        input_tmpl: "select",
                        id: "control_email_time"
                    })),
                    twig.filter.length(this.env_, "available_filters"in i ? i.available_filters : "") > 0 && (t.append("<div class='schedule_report__item_header_title_filter_add'>+<span>"),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "filter"), "light_escape", null, !0)),
                    t.append("</span></div>")),
                    t.append('</div><div class="schedule_report__item_header_delete_button"><svg class="svg-icon svg-scheduled_report--delete_item_icon-dims"><use xlink:href="#scheduled_report--delete_item_icon"></use></svg></div></div><div class="schedule_report__item_filter_container">'),
                    i._parent = i;
                    var s = "available_filters"in i ? i.available_filters : ""
                      , l = {
                        index0: 0,
                        index: 1,
                        first: !0
                    };
                    if (twig.countable(s)) {
                        var a = twig.count(s);
                        l.revindex0 = a - 1,
                        l.revindex = a,
                        l.length = a,
                        l.last = 1 === a
                    }
                    twig.forEach(s, (function(n, s) {
                        if (i._key = s,
                        i.filter = n,
                        "manager" == twig.attr("filter"in i ? i.filter : "", "type") && (t.append('<div class="schedule_report__item_filter_wrapper">'),
                        twig.attr(l, "first") ? (t.append('<div class="schedule_report__item_filter_wrapper_closest">'),
                        new (e._get("interface/scheduled_report/filter_manager.twig"))(this.env_).render_(t, i),
                        t.append("</div>")) : (t.append('<p class="schedule_report__item_filter_wrapper_description '),
                        twig.filter.length(this.env_, "filter_managers"in i ? i.filter_managers : "") > 0 && t.append(" schedule_report_hide_completely "),
                        t.append('">+ <span>'),
                        t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "by user"), "light_escape", null, !0)),
                        t.append('</span></p><div class="schedule_report__item_filter_wrapper_closest '),
                        0 == twig.filter.length(this.env_, "filter_managers"in i ? i.filter_managers : "") && t.append(" schedule_report_hide_completely "),
                        t.append('">'),
                        new (e._get("interface/scheduled_report/filter_manager.twig"))(this.env_).render_(t, twig.extend({}, i, twig.filter.merge("params"in i ? i.params : "", {
                            label: this.env_.filter("i18n", "by user")
                        }))),
                        t.append("</div>")),
                        t.append("</div>")),
                        "statuses" == twig.attr("filter"in i ? i.filter : "", "type")) {
                            if (i.selected_statuses_array = [],
                            twig.filter.length(this.env_, "selected_statuses"in i ? i.selected_statuses : "") > 0) {
                                var a = "selected_statuses"in i ? i.selected_statuses : "";
                                twig.forEach(a, (function(e, t) {
                                    i._key = t,
                                    i.sel_status = e,
                                    i.selected_statuses_array = twig.filter.merge("selected_statuses_array"in i ? i.selected_statuses_array : "", twig.createObj(twig.attr("sel_status"in i ? i.sel_status : "", "id"), twig.attr("sel_status"in i ? i.sel_status : "", "statuses")))
                                }
                                ), this)
                            }
                            i.filter_params = {
                                class_name: "filter-pipelines-multiselect",
                                inner_class_name: "filter-pipelines-multiselect__inner",
                                name: "filter[pipe]__" + ("id"in i ? i.id : ""),
                                items: "pipelines"in i ? i.pipelines : "",
                                selected_pipe: {
                                    name: "r_multiple" + ("id"in i ? i.id : "")
                                },
                                has_pipelines: !0,
                                id: "sched_report__pipeline_select__" + ("id"in i ? i.id : ""),
                                sel: "selected_statuses_array"in i ? i.selected_statuses_array : "",
                                multiple: !0
                            },
                            t.append("<div class='schedule_report__filter_separator'><div class=\"schedule_report__item_filter_wrapper\">"),
                            twig.attr(l, "first") ? (t.append('<div class="schedule_report__item_filter_wrapper_closest">'),
                            new (e._get("interface/controls/pipeline_select/index.twig"))(this.env_).render_(t, twig.extend({}, i, "filter_params"in i ? i.filter_params : "")),
                            t.append("</div>")) : (t.append('<p class="schedule_report__item_filter_wrapper_description '),
                            twig.filter.length(this.env_, "selected_statuses"in i ? i.selected_statuses : "") > 0 && t.append(" schedule_report_hide_completely "),
                            t.append('">+ <span>'),
                            t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "by stage"), "light_escape", null, !0)),
                            t.append('</span></p><div class="schedule_report__item_filter_wrapper_closest '),
                            0 == twig.filter.length(this.env_, "selected_statuses"in i ? i.selected_statuses : "") && t.append(" schedule_report_hide_completely "),
                            t.append(' ">'),
                            new (e._get("interface/controls/pipeline_select/index.twig"))(this.env_).render_(t, twig.extend({}, i, "filter_params"in i ? i.filter_params : "")),
                            t.append("</div>")),
                            t.append("</div></div>")
                        }
                        t.append("<div class='schedule_report__filter_separator'></div>"),
                        "status" == twig.attr("filter"in i ? i.filter : "", "type") && (i.filter_params = {
                            class_name: "filter-pipelines-individual_select",
                            inner_class_name: "schedule_report__filter-pipelines-multiselect__inner",
                            name: "filter[pipe]" + ("id"in i ? i.id : ""),
                            items: "pipelines"in i ? i.pipelines : "",
                            selected_pipe: {
                                name: "r_" + ("id"in i ? i.id : "")
                            },
                            selected_pipeline_id: twig.attr("filter_status"in i ? i.filter_status : "", "pipeline_id"),
                            selected: twig.attr("filter_status"in i ? i.filter_status : "", "status_id"),
                            has_pipelines: !0,
                            id: "sched_report__pipeline_select_" + ("id"in i ? i.id : ""),
                            multiple: !1
                        },
                        t.append('<div class="schedule_report__item_filter_wrapper">'),
                        twig.attr(l, "first") ? (t.append('<div class="schedule_report__item_filter_wrapper_closest">'),
                        new (e._get("interface/controls/pipeline_select/index.twig"))(this.env_).render_(t, twig.extend({}, i, "filter_params"in i ? i.filter_params : "")),
                        t.append("</div>")) : (t.append('<p class="schedule_report__item_filter_wrapper_description schedule_report_hide_completely ">+ <span>'),
                        t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "by stage"), "light_escape", null, !0)),
                        t.append('</span></p><div class="schedule_report__item_filter_wrapper_closest ">'),
                        new (e._get("interface/controls/pipeline_select/index.twig"))(this.env_).render_(t, twig.extend({}, i, "filter_params"in i ? i.filter_params : "")),
                        t.append("</div>")),
                        t.append("</div><div class='schedule_report__filter_separator'></div>")),
                        "pipelines" == twig.attr("filter"in i ? i.filter : "", "type") && (i.filter_params = {
                            class_name: "filter-pipelines-multiselect_custom",
                            inner_class_name: "sched_report__filter-pipelines-multiselect__inner_custom",
                            name: "filter[pipe]__custom_" + ("id"in i ? i.id : ""),
                            items: "pipelines"in i ? i.pipelines : "",
                            selected_pipe: {
                                name: "r_multiple_custom" + ("id"in i ? i.id : "")
                            },
                            id: "sched_report__pipeline_select__" + ("id"in i ? i.id : ""),
                            sel: twig.attr("selected_statuses"in i ? i.selected_statuses : "", "pipeline_id"),
                            multiple: !0
                        },
                        t.append('<div class="schedule_report__item_filter_wrapper">'),
                        twig.attr(l, "first") ? (t.append('<div class="schedule_report__item_filter_wrapper_closest">'),
                        new (e._get("interface/scheduled_report/select_only_pipelines_custom_filter.twig"))(this.env_).render_(t, twig.extend({}, i, "filter_params"in i ? i.filter_params : "")),
                        t.append("</div>")) : (t.append('<p class="schedule_report__item_filter_wrapper_description '),
                        twig.filter.length(this.env_, twig.attr("selected_statuses"in i ? i.selected_statuses : "", "pipeline_id")) > 0 && t.append(" schedule_report_hide_completely "),
                        t.append('">+ <span>'),
                        t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "by pipeline"), "light_escape", null, !0)),
                        t.append('</span></p><div class="schedule_report__item_filter_wrapper_closest '),
                        0 == twig.filter.length(this.env_, twig.attr("selected_statuses"in i ? i.selected_statuses : "", "pipeline_id")) && t.append(" schedule_report_hide_completely "),
                        t.append(' ">'),
                        new (e._get("interface/scheduled_report/select_only_pipelines_custom_filter.twig"))(this.env_).render_(t, twig.extend({}, i, "filter_params"in i ? i.filter_params : "")),
                        t.append("</div>")),
                        t.append("</div><div class='schedule_report__filter_separator'></div>")),
                        "entity" == twig.attr("filter"in i ? i.filter : "", "type") && (i.filter_params = {
                            class_name: "filter-entity_custom",
                            inner_class_name: "sched_report__filter-entity",
                            name: "filter[pipe]__custom_" + ("id"in i ? i.id : ""),
                            items: twig.attr("filter"in i ? i.filter : "", "enum"),
                            selected_pipe: {
                                name: "r_multiple_custom" + ("id"in i ? i.id : "")
                            },
                            id: "sched_report__entity_filter__" + ("id"in i ? i.id : ""),
                            sel: twig.attr("filter_entities"in i ? i.filter_entities : "", "entity_arr"),
                            input_name: "filter_entities",
                            multiple: !0
                        },
                        t.append('<div class="schedule_report__item_filter_wrapper">'),
                        twig.attr(l, "first") ? (t.append('<div class="schedule_report__item_filter_wrapper_closest">'),
                        new (e._get("interface/scheduled_report/entity_filter.twig"))(this.env_).render_(t, twig.extend({}, i, "filter_params"in i ? i.filter_params : "")),
                        t.append("</div>")) : (t.append('<p class="schedule_report__item_filter_wrapper_description '),
                        twig.filter.length(this.env_, twig.attr("filter_entities"in i ? i.filter_entities : "", "entity_arr")) > 0 && t.append(" schedule_report_hide_completely "),
                        t.append('">+ <span>'),
                        t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "by object"), "light_escape", null, !0)),
                        t.append('</span></p><div class="schedule_report__item_filter_wrapper_closest '),
                        0 == twig.filter.length(this.env_, twig.attr("filter_entities"in i ? i.filter_entities : "", "entity_arr")) && t.append("  schedule_report_hide_completely "),
                        t.append('">'),
                        new (e._get("interface/scheduled_report/entity_filter.twig"))(this.env_).render_(t, twig.extend({}, i, "filter_params"in i ? i.filter_params : "")),
                        t.append("</div>")),
                        t.append("</div><div class='schedule_report__filter_separator'></div>")),
                        "task_types" == twig.attr("filter"in i ? i.filter : "", "type") && (i.filter_params = {
                            class_name: "filter-task_types_custom",
                            inner_class_name: "sched_report__filter-task_types",
                            name: "filter[pipe]__custom_" + ("id"in i ? i.id : ""),
                            items: twig.attr("filter"in i ? i.filter : "", "enum"),
                            selected_pipe: {
                                name: "r_multiple_custom" + ("id"in i ? i.id : "")
                            },
                            id: "sched_report__task_types_filter__" + ("id"in i ? i.id : ""),
                            sel: twig.attr("filter_task_types"in i ? i.filter_task_types : "", "task_types_arr"),
                            input_name: "filter_task_types",
                            multiple: !0
                        },
                        t.append('<div class="schedule_report__item_filter_wrapper">'),
                        twig.attr(l, "first") ? (t.append('<div class="schedule_report__item_filter_wrapper_closest">'),
                        new (e._get("interface/scheduled_report/task_types_filter.twig"))(this.env_).render_(t, twig.extend({}, i, twig.filter.merge("filter_params"in i ? i.filter_params : "", {
                            label: this.env_.filter("i18n", "Filter by task type")
                        }))),
                        t.append("</div>")) : (t.append('<p class="schedule_report__item_filter_wrapper_description '),
                        twig.filter.length(this.env_, twig.attr("filter_task_types"in i ? i.filter_task_types : "", "task_types_arr")) > 0 && t.append(" schedule_report_hide_completely "),
                        t.append('">+ <span>'),
                        t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "by task type"), "light_escape", null, !0)),
                        t.append('</span></p><div class="schedule_report__item_filter_wrapper_closest '),
                        0 == twig.filter.length(this.env_, twig.attr("filter_task_types"in i ? i.filter_task_types : "", "task_types_arr")) && t.append("  schedule_report_hide_completely "),
                        t.append('">'),
                        new (e._get("interface/scheduled_report/task_types_filter.twig"))(this.env_).render_(t, twig.extend({}, i, "filter_params"in i ? i.filter_params : "")),
                        t.append("</div>")),
                        t.append("</div><div class='schedule_report__filter_separator'></div>")),
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
                    return "interface_scheduled_report_modal_sched_report_item"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/scheduled_report/modal/sched_report_item", t)
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
                    e.append('<span title="'),
                    e.append(twig.filter.escape(this.env_, "short_name"in t ? t.short_name : "", "light_escape", null, !0)),
                    e.append('">'),
                    e.append(twig.filter.escape(this.env_, "short_name"in t ? t.short_name : "", "light_escape", null, !0)),
                    e.append("</span>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_scheduled_report_modal_sched_report_sidebar"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/scheduled_report/modal/sched_report_sidebar", t)
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
                    t.append('<div class="modal-body__inner"><div class="schedule_report__header"><div class="schedule_report__header-title">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Scheduled report"), "light_escape", null, !0)),
                    t.append('</div><div class="schedule_report__header-buttons">'),
                    new (e._get("interface/controls/button.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        id: "reset_schedule_rep_settings",
                        class_name: "button-cancel js-settings-cf-reset",
                        name: "",
                        type: "reset",
                        text: twig.attr("lang"in i ? i.lang : "", "button_text_close")
                    })),
                    new (e._get("interface/controls/button.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        id: "save_schedule_rep_settings",
                        text: twig.attr("lang"in i ? i.lang : "", "button_save"),
                        class_name: "button-input_blue js-settings-cf-save js-button-with-loader"
                    })),
                    t.append('</div></div><div class="schedule_report__periodpicker-row"><div class="schedule_report__periodpicker-container"></div></div><div class="schedule_report_content_title">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Report structure:"), "light_escape", null, !0)),
                    t.append('</div><div class="schedule_report_accordeon_wrapper"><div class="js-fields-sortable schedule_report__items_editing_zone"><div class="schedule_report_card_plug"><div class="schedule_report_card_plug_text_wrapper"><p class="schedule_report_card_plug_text">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "No parameters are selected"), "light_escape", null, !0)),
                    t.append(". "),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Select metrics from the list on the right"), "light_escape", null, !0)),
                    t.append('.</p></div></div></div><div class="schedule_report__tab-editor-right"></div></div></div></div>')
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_scheduled_report_modal_scheduled_report_modal_template"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/scheduled_report/modal/scheduled_report_modal_template", t)
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
                    e.append('<div class="schedule_report__sidebar__wrapper"><div class="schedule_report__sidebar__header">'),
                    e.append(twig.filter.escape(this.env_, "header"in t ? t.header : "", "light_escape", null, !0)),
                    e.append('</div><div class="schedule_report__sidebar__items"></div></div>')
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_scheduled_report_modal_wrapper_sidebar_sched_report"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/scheduled_report/modal/wrapper_sidebar_sched_report", t)
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
        e._sentryDebugIds[t] = "b5214708-b51b-4847-84db-c00bd0143c69",
        e._sentryDebugIdIdentifier = "sentry-dbid-b5214708-b51b-4847-84db-c00bd0143c69")
    } catch (e) {}
}();
//# sourceMappingURL=26583.37999b33cd3fe46db8b7.js.map
