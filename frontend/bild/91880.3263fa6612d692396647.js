(window.webpackChunk = window.webpackChunk || []).push([[91880], {
    591880: (e, t, i) => {
        var n, s;
        n = [i(460159), i(94849), i(92474), i(295165)],
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
                    e.append('<li class="filter__list__item js-filter-preset-link '),
                    twig.attr("item"in t ? t.item : "", "id") && (e.append("filter__common_settings__item-preset "),
                    twig.attr("item"in t ? t.item : "", "can_edit") && e.append("js-filter__common_settings__item-sortable")),
                    e.append(" "),
                    twig.attr("item"in t ? t.item : "", "selected") && e.append(" filter__list__item-selected"),
                    e.append(" "),
                    twig.attr("item"in t ? t.item : "", "in_edit") && e.append("filter__list__item-edit-mode"),
                    e.append(' animated " title="'),
                    e.append(twig.filter.escape(this.env_, twig.attr("item"in t ? t.item : "", "label"), "light_escape", null, !0)),
                    e.append('" '),
                    twig.attr("item"in t ? t.item : "", "id") && (e.append('data-id="'),
                    e.append(twig.filter.escape(this.env_, twig.attr("item"in t ? t.item : "", "id"), "light_escape", null, !0)),
                    e.append('"')),
                    e.append(' id="'),
                    e.append(twig.filter.escape(this.env_, twig.attr("item"in t ? t.item : "", "element_id"), "light_escape", null, !0)),
                    e.append('" data-sort="'),
                    e.append(twig.filter.escape(this.env_, twig.attr("item"in t ? t.item : "", "sort"), "light_escape", null, !0)),
                    e.append('"><div href="'),
                    e.append(twig.filter.escape(this.env_, twig.attr("item"in t ? t.item : "", "link"), "light_escape", null, !0)),
                    e.append('" class="filter__list__item__link">'),
                    twig.attr("item"in t ? t.item : "", "id") && twig.attr("item"in t ? t.item : "", "can_edit") && e.append('<span class="filter_items__handle"><span class="icon icon-v-dots"></span></span>'),
                    twig.attr("item"in t ? t.item : "", "id") && (e.append('<span class="filter_items__user_value_placeholder">'),
                    e.append(twig.filter.escape(this.env_, twig.attr("item"in t ? t.item : "", "label"), "light_escape", null, !0)),
                    e.append("</span>")),
                    e.append('<input class="filter_items__user_value" type="text" value="'),
                    e.append(twig.filter.escape(this.env_, twig.attr("item"in t ? t.item : "", "label"), "light_escape", null, !0)),
                    e.append('" data-value="'),
                    e.append(twig.filter.escape(this.env_, twig.attr("item"in t ? t.item : "", "label"), "light_escape", null, !0)),
                    e.append('" '),
                    twig.attr("item"in t ? t.item : "", "in_edit") || e.append('readonly="readonly"'),
                    e.append(" "),
                    twig.attr("item"in t ? t.item : "", "id") && e.append('style="display:none"'),
                    e.append(' placeholder="'),
                    e.append(twig.filter.escape(this.env_, twig.attr("lang"in t ? t.lang : "", "filter_preset_placeholder"), "light_escape", null, !0)),
                    e.append('" /></div>'),
                    twig.attr("item"in t ? t.item : "", "can_edit") && e.append('<span class="filter_items__edit"><span class="filter_items__edit__btn"><span class="icon icon-pencil"></span></span>\x3c!----\x3e<span class="filter_items__edit__save"><span class="icon icon-accept-green"></span></span>\x3c!----\x3e<span class="filter_items__edit__delete"><svg class="svg-icon svg-common--trash-dims"><use xlink:href="#common--trash"></use></svg></span></span>'),
                    e.append("</li>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_filter_bookmark"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/filter/bookmark", t)
            }
            )(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e),
                    this.setBlocks({
                        filter_form: twig.bind(this.block_filter_form, this)
                    })
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(e) {
                    return !1
                }
                ,
                t.prototype.render_ = function(t, i, n) {
                    if (n = void 0 === n ? {} : n,
                    t.append('<div class="filter__holder custom-scroll" id="sidebar"><div class="filter__holder__left">'),
                    twig.attr("filter"in i ? i.filter : "", "items")) {
                        t.append('<ul class="filter__list js-filter-list" id="filter_list">'),
                        i.first_exists = !1,
                        i._parent = i;
                        var s = twig.attr("filter"in i ? i.filter : "", "items")
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
                            i.key = s,
                            i.item = n,
                            twig.attr("item"in i ? i.item : "", "bookmark") ? new (e._get("interface/filter/bookmark.twig"))(this.env_).render_(t, twig.extend({}, i, {
                                item: "item"in i ? i.item : ""
                            })) : (t.append('<li class="filter__list__item '),
                            "first_exists"in i && i.first_exists || t.append("filter__list__item-default"),
                            t.append(" "),
                            "recycle_bin" == ("key"in i ? i.key : "") && t.append("filter__common_settings__item-trash"),
                            t.append(" js-filter__common_settings__item-sortable js-filter-preset-link "),
                            twig.attr("item"in i ? i.item : "", "selected") && t.append(" filter__list__item-selected"),
                            t.append('" title="'),
                            t.append(twig.filter.escape(this.env_, twig.attr("item"in i ? i.item : "", "label"), "light_escape", null, !0)),
                            t.append('" data-sort="'),
                            t.append(twig.filter.escape(this.env_, twig.attr("item"in i ? i.item : "", "sort"), "light_escape", null, !0)),
                            t.append('"><a href="'),
                            t.append(twig.filter.escape(this.env_, twig.attr("item"in i ? i.item : "", "link"), "light_escape", null, !0)),
                            t.append('" class="js-navigate-link filter__list__item__link">'),
                            "leads_without_tasks" == ("key"in i ? i.key : "") && (t.append('<span class="icon icon-inline icon-clock-yellow filter__list__item__icon" title="'),
                            t.append(twig.filter.escape(this.env_, twig.attr("item"in i ? i.item : "", "label"), "light_escape", null, !0)),
                            t.append('"></span>')),
                            "leads_with_failed_tasks" == ("key"in i ? i.key : "") && (t.append('<span class="icon icon-inline icon-clock-red filter__list__item__icon" title="'),
                            t.append(twig.filter.escape(this.env_, twig.attr("item"in i ? i.item : "", "label"), "light_escape", null, !0)),
                            t.append('"></span>')),
                            t.append('\x3c!----\x3e<span class="filter__list__item__inner">'),
                            t.append(twig.filter.escape(this.env_, twig.attr("item"in i ? i.item : "", "label"), "light_escape", null, !0)),
                            t.append("</span></a></li>"),
                            i.first_exists = !0),
                            ++a.index0,
                            ++a.index,
                            a.first = !1,
                            a.length && (--a.revindex0,
                            --a.revindex,
                            a.last = 0 === a.revindex0)
                        }
                        ), this),
                        t.append("</ul>")
                    }
                    t.append('</div><div class="filter__holder__right">'),
                    t.append(this.renderBlock("filter_form", i, n)),
                    t.append("</div></div>")
                }
                ,
                t.prototype.block_filter_form = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    new (e._get("interface/filter/filter2.twig"))(this.env_).render_(t, twig.extend({}, i, "filter"in i ? i.filter : ""))
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_filter_complex"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/filter/complex", t)
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
                    twig.attr(twig.attr("lang"in i ? i.lang : "", "filter"), "apply", void 0, void 0, !0) ? i.apply_text = twig.attr(twig.attr("lang"in i ? i.lang : "", "filter"), "apply") : i.apply_text = twig.attr("lang"in i ? i.lang : "", "filter_apply"),
                    twig.attr(twig.attr("lang"in i ? i.lang : "", "filter"), "reset", void 0, void 0, !0) ? i.reset_text = twig.attr(twig.attr("lang"in i ? i.lang : "", "filter"), "reset") : i.reset_text = twig.attr("lang"in i ? i.lang : "", "filter_reset"),
                    t.append('<div class="filter__params_manage clearfix filter__stats" id="filter_caption"><button class="button-input filter__params_manage__apply" id="filter_apply">'),
                    t.append(twig.filter.escape(this.env_, "apply_text"in i ? i.apply_text : "", "light_escape", null, !0)),
                    t.append("</button>\x3c!----\x3e"),
                    new (e._get("interface/controls/cancel_button.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        class_name: "js-filter__params_manage__clear",
                        text: "reset_text"in i ? i.reset_text : ""
                    })),
                    t.append('</div><div class="filter__custom_settings_wrapper custom-scroll '),
                    1 == ("sidebar"in i ? i.sidebar : "") && t.append("filter__custom_settings_wrapper-expanded"),
                    t.append('"><form action="'),
                    t.append(twig.filter.escape(this.env_, twig.attr("filter"in i ? i.filter : "", "url"), "light_escape", null, !0)),
                    t.append('" method="GET" id="filter_form" class="filter__form">'),
                    new (e._get("interface/filter/common/fields_wrapper.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        has_title: !0
                    })),
                    t.append("</form></div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_filter_filter"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/filter/filter", t)
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
                    t.append('<div class="filter"><div class="filter__list__item filter__list__item-filter" id="filter_caption"><span class="caption">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "filter_title"), "light_escape", null, !0)),
                    t.append('</span><span class="filter__params_manage__clear js-filter__params_manage__clear" id="filter_clear"><span class="icon icon-search-cancel"></span></span>\x3c!----\x3e'),
                    "disable_save"in i && i.disable_save || !twig.attr("user_rights"in i ? i.user_rights : "", "is_admin") || (t.append('<span class="filter__params_manage__save" id="filter_save">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "filter_save"), "light_escape", null, !0)),
                    t.append("</span>")),
                    t.append('</div><form action="'),
                    t.append(twig.filter.escape(this.env_, twig.attr("filter"in i ? i.filter : "", "url"), "light_escape", null, !0)),
                    t.append('" method="GET" id="filter_form">'),
                    new (e._get("interface/filter/common/fields_wrapper.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        has_title: !1
                    })),
                    t.append('<div class="filter__actions"><button class="button-input filter__params_manage__apply" id="filter_apply">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "filter_apply"), "light_escape", null, !0)),
                    t.append("</button></div></form></div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_filter_filter2"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/filter/filter2", t)
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
                    t.append('<div class="filter-search__linked_entity-holder filter__custom_settings__item filter__custom_settings__item_suggest-manager" data-title="'),
                    t.append(twig.filter.escape(this.env_, "title"in i ? i.title : "", "light_escape", null, !0)),
                    t.append('" data-is-fn="refreshSelectedElements" data-search-in-id="'),
                    t.append(twig.filter.escape(this.env_, "search_in_id"in i ? i.search_in_id : "", "light_escape", null, !0)),
                    t.append('" data-input-name="'),
                    t.append(twig.filter.escape(this.env_, "input_name"in i ? i.input_name : "", "light_escape", null, !0)),
                    t.append('"><div class="filter-search__linked_entity custom-scroll">'),
                    new (e._get("interface/filter/linked_entity/select.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        items: "items"in i ? i.items : "",
                        input_name: "input_name"in i ? i.input_name : "",
                        placeholder: "title"in i ? i.title : ""
                    })),
                    0 == twig.filter.length(this.env_, "items"in i ? i.items : "") && (t.append('<input type="hidden" name="'),
                    t.append(twig.filter.escape(this.env_, "input_name"in i ? i.input_name : "", "light_escape", null, !0)),
                    t.append('">')),
                    t.append('</div><b class="js-filter-field-clear"></b></div>')
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_filter_linked_entity"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/filter/linked_entity", t)
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
                    t.append('<div class="filter-search__products-holder filter__custom_settings__item filter__custom_settings__item_suggest-manager" data-title="'),
                    t.append(twig.filter.escape(this.env_, "title"in i ? i.title : "", "light_escape", null, !0)),
                    t.append('" data-is-fn="refreshSelectedProducts" data-element-type-name="'),
                    t.append(twig.filter.escape(this.env_, "element_type_name"in i ? i.element_type_name : "", "light_escape", null, !0)),
                    t.append('" data-input-name="'),
                    t.append(twig.filter.escape(this.env_, "input_name"in i ? i.input_name : "", "light_escape", null, !0)),
                    t.append('"><div class="filter-search__products custom-scroll">'),
                    new (e._get("interface/filter/products/select.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        items: "items"in i ? i.items : "",
                        input_name: "input_name"in i ? i.input_name : "",
                        placeholder: "title"in i ? i.title : ""
                    })),
                    0 == twig.filter.length(this.env_, "items"in i ? i.items : "") && (t.append('<input type="hidden" name="'),
                    t.append(twig.filter.escape(this.env_, "input_name"in i ? i.input_name : "", "light_escape", null, !0)),
                    t.append('">')),
                    t.append('</div><b class="js-filter-field-clear"></b></div>')
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_filter_products"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/filter/products", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e),
                    this.setBlocks({
                        summary: twig.bind(this.block_summary, this),
                        filter_block: twig.bind(this.block_filter_block, this)
                    })
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(e) {
                    return !1
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    "id"in t && t.id || (t.id = "search_input"),
                    "search_placeholder"in t && t.search_placeholder || (t.search_placeholder = twig.attr("lang"in t ? t.lang : "", "top_search_input_placeholder")),
                    e.append('<div class="list-top-search '),
                    "filter"in t && t.filter && !twig.empty("filter"in t ? t.filter : "") || e.append("list-top-search-no-filter"),
                    e.append(" "),
                    "no_responsive"in t && t.no_responsive || e.append("list-top-search-responsive"),
                    e.append('" id="search_input_wrapper">'),
                    twig.empty("filter"in t ? t.filter : "") || twig.attr("filter"in t ? t.filter : "", "settings_filter") || e.append('<div class="search-options" id="search-options"><div class="list-top-search__preset" id="search_filter_preset"></div><div class="search-options-wrapper"></div></div>'),
                    e.append('<div class="list-top-search__input-wrapper"><div class="list-top-search__apply-block h-hidden"><button class="list-top-search__apply-button js-filter-apply"><span>'),
                    e.append(twig.filter.escape(this.env_, "apply_button_text"in t ? twig.filter.def("apply_button_text"in t ? t.apply_button_text : "", this.env_.filter("i18n", "Apply")) : this.env_.filter("i18n", "Apply"), "light_escape", null, !0)),
                    e.append('</span></button></div><div class="list-top-search__input-block">'),
                    "no_search"in t && t.no_search ? (e.append('<span class="list-top-search__input list-top-search__input-placeholder">'),
                    e.append(twig.filter.escape(this.env_, "search_placeholder"in t ? t.search_placeholder : "", "light_escape", null, !0)),
                    e.append("</span>")) : (e.append('<input type="text" class="list-top-search__input" id="'),
                    e.append(twig.filter.escape(this.env_, "id"in t ? t.id : "", "light_escape", null, !0)),
                    e.append('" placeholder="'),
                    e.append(twig.filter.escape(this.env_, "search_placeholder"in t ? t.search_placeholder : "", "light_escape", null, !0)),
                    e.append('" spellcheck="false" autocomplete="off">')),
                    t.id = "",
                    e.append(this.renderBlock("summary", t, i)),
                    e.append('<div class="list-top-search__info h-hidden" id="search_clear_button"><span class="list-top-search__actions-icon list-top-search__actions-icon_cancel js-search-cancel"><svg class="svg-icon svg-common--cross-close-dims"><use xlink:href="#common--cross-close"></use></svg></span><span class="list-top-search__actions-icon list-top-search__actions-icon_hide js-search-hide"><svg class="svg-icon svg-common--cross-close-dims"><use xlink:href="#common--cross-close"></use></svg></span></div><div class="list-top-search__info h-hidden" id="search_loader"><span class="spinner-icon '),
                    e.append(twig.filter.escape(this.env_, "loader_class_name"in t ? t.loader_class_name : "", "light_escape", null, !0)),
                    e.append('"></span></div></div></div><label for="'),
                    e.append(twig.filter.escape(this.env_, "id"in t ? t.id : "", "light_escape", null, !0)),
                    e.append('"><svg class="list-top-search__icon svg-icon svg-common--filter-search-dims"><use xlink:href="#common--filter-search"></use></svg></label>'),
                    e.append(this.renderBlock("filter_block", t, i)),
                    e.append("</div>")
                }
                ,
                t.prototype.block_summary = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    !("summary"in i) || !i.summary || "no_search_summary"in i && i.no_search_summary || (t.append('<div class="list-top-search__summary js-list_summary" id="list-top-search__summary">'),
                    new (e._get("interface/search_summary/" + ("entity"in i ? i.entity : "") + "/index.twig"))(this.env_).render_(t, i),
                    t.append("</div>"))
                }
                ,
                t.prototype.block_filter_block = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    "filter"in i && i.filter && new (e._get("interface/filter/in_search/main.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        show_segments: "show_segments"in i ? i.show_segments : "",
                        periodicity_enabled: "periodicity_enabled"in i ? i.periodicity_enabled : "",
                        filter: "filter"in i ? i.filter : "",
                        filter_id: "filter_id"in i ? i.filter_id : "",
                        user_rank: "user_rank"in i ? i.user_rank : ""
                    }))
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_filter_search_block"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/filter/search_block", t)
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
                    t.append('<div class="js-segments-filter filter__custom_settings__item_suggest-manager filter__custom_settings__item_suggest-manager--segments filter__custom_settings__item" data-title="'),
                    t.append(twig.filter.escape(this.env_, "field_title"in i ? i.field_title : "", "light_escape", null, !0)),
                    t.append('" data-input-name="'),
                    t.append(twig.filter.escape(this.env_, "field_name"in i ? i.field_name : "", "light_escape", null, !0)),
                    t.append('"><div class="custom-scroll js-segments-filter-items">'),
                    new (e._get("interface/filter/customers/suggest_segments/suggest_segment_items.twig"))(this.env_).render_(t, {
                        items: "items"in i ? i.items : "",
                        id: "suggest_segment",
                        modify_class: "suggest-segments_is-filter",
                        loader_hidden: !1
                    }),
                    t.append('</div><b class="js-filter-field-clear"></b></div>')
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_filter_suggest_segment"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/filter/suggest_segment", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e),
                    this.setBlocks({
                        suggest: twig.bind(this.block_suggest, this)
                    })
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(t) {
                    return e._get("interface/controls/multisuggest/wrapper.twig")
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    t.item_tmpl = "interface/filter/customers/suggest_segments/item.twig",
                    t.inner_item_tmpl = "interface/filter/customers/suggest_segments/item.twig",
                    this.getParent(t).render_(e, t, twig.extend({}, this.getBlocks(), i))
                }
                ,
                t.prototype.block_suggest = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    e.append('<div class="multisuggest__suggest-wrapper suggest-manager '),
                    e.append(twig.filter.escape(this.env_, "suggest_class_name"in t ? t.suggest_class_name : "", "light_escape", null, !0)),
                    e.append('" style="display: none" data-is-suggest="y" data-multisuggest-id="'),
                    e.append(twig.filter.escape(this.env_, "suggest_id"in t ? t.suggest_id : "", "light_escape", null, !0)),
                    e.append('"><div class="multisuggest__suggest js-multisuggest-suggest custom-scroll"></div></div>')
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_filter_suggest_segment_dropdown"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/filter/suggest_segment_dropdown", t)
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
                    "filter_ns"in i && i.filter_ns ? i.filter_input_name = ("filter_ns"in i ? i.filter_ns : "") + "[tag][]" : i.filter_input_name = "tag[]",
                    !("filter_ns"in i && i.filter_ns || "disable_tags"in i && i.disable_tags))
                        if ("tags_lib_plug"in i && i.tags_lib_plug) {
                            t.append('<div class="filter-search__tags-holder filter-search__tags-holder_plug" style="display:none;">'),
                            i._parent = i;
                            var s = "items"in i ? i.items : ""
                              , a = !1;
                            twig.forEach(s, (function(e, n) {
                                i._key = n,
                                i.tag = e,
                                this.env_.test("iterable", "items"in i ? i.items : "") && (t.append('<input type="checkbox" '),
                                twig.attr("tag"in i ? i.tag : "", "id") && (t.append('id="filter_tag_'),
                                t.append(twig.filter.escape(this.env_, twig.attr("tag"in i ? i.tag : "", "id"), "light_escape", null, !0)),
                                t.append('"')),
                                t.append(' name="'),
                                "filter_input_name"in i && i.filter_input_name ? t.append(twig.filter.escape(this.env_, "filter_input_name"in i ? i.filter_input_name : "", "light_escape", null, !0)) : t.append("tag[]"),
                                t.append('" class="filter_tags__checkbox" value="'),
                                t.append(twig.filter.escape(this.env_, twig.attr("tag"in i ? i.tag : "", "id"), "light_escape", null, !0)),
                                t.append('" checked="checked">'),
                                a = !0)
                            }
                            ), this),
                            a || (t.append('<input type="checkbox" name="'),
                            "filter_input_name"in i && i.filter_input_name ? t.append(twig.filter.escape(this.env_, "filter_input_name"in i ? i.filter_input_name : "", "light_escape", null, !0)) : t.append("tag[]"),
                            t.append('" class="filter_tags__checkbox">')),
                            t.append("</div>"),
                            "tags_logic"in i && i.tags_logic && (t.append('<input class="filter-search__tags-logic-input filter-search__tags-logic-input_plug" id="filter-search__tags-logic-input_plug" type="radio" value="'),
                            t.append(twig.filter.escape(this.env_, twig.attr("tags_logic"in i ? i.tags_logic : "", "value"), "light_escape", null, !0)),
                            t.append('" name="'),
                            t.append(twig.filter.escape(this.env_, twig.attr("tags_logic"in i ? i.tags_logic : "", "name"), "light_escape", null, !0)),
                            t.append('" checked="checked" style="display:none;">'))
                        } else
                            t.append('<div class="filter-search__tags-holder filter__custom_settings__item filter__custom_settings__item_suggest-manager" data-title="'),
                            t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "filter_common_tags"), "light_escape", null, !0)),
                            t.append('" data-is-fn="refreshSelectedTags" data-tmpl="tags" data-element-type-name="'),
                            t.append(twig.filter.escape(this.env_, "element_type_name"in i ? i.element_type_name : "", "light_escape", null, !0)),
                            t.append('" data-input-name="'),
                            t.append(twig.filter.escape(this.env_, "filter_input_name"in i ? i.filter_input_name : "", "light_escape", null, !0)),
                            t.append('"><div class="filter-search__tags custom-scroll">'),
                            new (e._get("interface/filter/tags/items.twig"))(this.env_).render_(t, twig.extend({}, i, {
                                items: "items"in i ? i.items : "",
                                input_name: "filter_input_name"in i ? i.filter_input_name : ""
                            })),
                            0 == twig.filter.length(this.env_, "items"in i ? i.items : "") && (t.append('<input type="checkbox" name="'),
                            "filter_input_name"in i && i.filter_input_name ? t.append(twig.filter.escape(this.env_, "filter_input_name"in i ? i.filter_input_name : "", "light_escape", null, !0)) : t.append("tag[]"),
                            t.append('" class="filter_tags__checkbox filter-search__checkbox-plug" style="display:none;">')),
                            t.append('</div><b class="js-filter-field-clear"></b></div>')
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_filter_tags"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/filter/tags", t)
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
                    "field_title"in i && i.field_title || (i.field_title = twig.attr("field"in i ? i.field : "", "title")),
                    i.class_name_mod = "field_type"in i ? i.field_type : "",
                    i.input_id = "filter_users_select_" + ("field_type"in i ? i.field_type : "") + "_holder",
                    "filter_ns"in i && i.filter_ns && (i.input_id = ("input_id"in i ? i.input_id : "") + "_" + ("filter_element_type_name"in i ? i.filter_element_type_name : "")),
                    t.append('<div class="filter-search__users-select-holder filter-search__users-select-holder_'),
                    t.append(twig.filter.escape(this.env_, "class_name_mod"in i ? i.class_name_mod : "", "light_escape", null, !0)),
                    t.append(" filter__custom_settings__item filter__custom_settings__item_suggest-manager "),
                    twig.filter.length(this.env_, twig.attr("field"in i ? i.field : "", "items")) && t.append("glow"),
                    t.append('" data-title="'),
                    t.append(twig.filter.escape(this.env_, "field_title"in i ? i.field_title : "", "light_escape", null, !0)),
                    t.append('" data-is-fn="usersSelectClear" data-type="'),
                    t.append(twig.filter.escape(this.env_, "field_type"in i ? i.field_type : "", "light_escape", null, !0)),
                    t.append('" data-tmpl="users" data-element-type-name="'),
                    t.append(twig.filter.escape(this.env_, "element_type_name"in i ? i.element_type_name : "", "light_escape", null, !0)),
                    t.append('" data-input-name="'),
                    t.append(twig.filter.escape(this.env_, twig.attr("field"in i ? i.field : "", "name"), "light_escape", null, !0)),
                    t.append('"><div class="custom-scroll">'),
                    new (e._get("interface/users_select/users_select_items.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        items: twig.attr("field"in i ? i.field : "", "items"),
                        class_name: "",
                        id: "input_id"in i ? i.input_id : "",
                        input_name: twig.attr("field"in i ? i.field : "", "name")
                    })),
                    t.append('</div><b class="js-filter-field-clear"></b></div>')
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_filter_users"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/filter/users", t)
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
                    t.append('<div data-name="'),
                    t.append(twig.filter.escape(this.env_, "data_name"in i ? twig.filter.def("data_name"in i ? i.data_name : "", "name"in i ? i.name : "") : "name"in i ? i.name : "", "light_escape", null, !0)),
                    t.append('" data-title="'),
                    t.append(twig.filter.escape(this.env_, "title"in i ? i.title : "", "light_escape", null, !0)),
                    t.append('" class="filter__custom_settings__item filter-control-checkboxes-search">'),
                    "is_input"in i && i.is_input ? (t.append('<div class="filter__custom_settings__item">'),
                    new (e._get("interface/controls/input.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        name: "name"in i ? i.name : "",
                        placeholder: "title"in i ? i.title : "",
                        class_name: "filter__custom_input",
                        disabled: "is_disabled"in i ? i.is_disabled : ""
                    })),
                    t.append('<b class="js-filter-field-clear"></b></div>')) : new (e._get("interface/controls/checkboxes_search/index.twig"))(this.env_).render_(t, i),
                    t.append("</div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_filter_common_dynamic_checkboxes_search"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/filter/common/dynamic_checkboxes_search", t)
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
                    i._parent = i;
                    var s = ["name", "extension", "talk_number"]
                      , a = {
                        index0: 0,
                        index: 1,
                        first: !0
                    };
                    if (twig.forEach(s, (function(n, s) {
                        i._key = s,
                        i.input = n,
                        twig.attr("filter"in i ? i.filter : "", "input"in i ? i.input : "", void 0, "array") && (new (e._get("interface/filter/common/fields_custom.twig"))(this.env_).render_(t, twig.extend({}, i, {
                            field: twig.attr("filter"in i ? i.filter : "", "input"in i ? i.input : "", void 0, "array")
                        })),
                        ++a.index0,
                        ++a.index,
                        a.first = !1)
                    }
                    ), this),
                    twig.attr("filter"in i ? i.filter : "", "talks") && (t.append('<div class="filter__custom_settings__item filter__custom_settings__item_talks">'),
                    "has_title"in i && i.has_title && (t.append('<div class="filter__custom_settings__item__label hidden">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "filer_talks_title"), "light_escape", null, !0)),
                    t.append("</div>")),
                    t.append('<div class="filter__custom_settings__item__value-wrapper">'),
                    i.dropdown = twig.filter.merge(twig.attr("filter"in i ? i.filter : "", "talks"), {
                        title_before: this.env_.filter("i18n", "Talks status") + ":",
                        title_numeral: this.env_.filter("i18n", "value,values,values"),
                        small: !0
                    }),
                    new (e._get("interface/controls/checkboxes_dropdown.twig"))(this.env_).render_(t, twig.extend({}, i, "dropdown"in i ? i.dropdown : "")),
                    t.append('<b class="js-filter-field-clear"></b></div></div>')),
                    twig.attr("filter"in i ? i.filter : "", "read_status") && (t.append('<div class="filter__custom_settings__item filter__custom_settings__item_talks"><div class="filter__custom_settings__item__value-wrapper">'),
                    i.dropdown = twig.filter.merge(twig.attr("filter"in i ? i.filter : "", "read_status"), {
                        title_before: this.env_.filter("i18n", "Talk read status") + ":",
                        title_numeral: this.env_.filter("i18n", "value,values,values"),
                        small: !0
                    }),
                    new (e._get("interface/controls/checkboxes_dropdown.twig"))(this.env_).render_(t, twig.extend({}, i, "dropdown"in i ? i.dropdown : "")),
                    t.append('<b class="js-filter-field-clear"></b></div></div>')),
                    twig.attr("filter"in i ? i.filter : "", "messages") && (t.append('<div class="filter__custom_settings__item filter__custom_settings__item_talks"><div class="filter__custom_settings__item__value-wrapper">'),
                    i.dropdown = twig.filter.merge(twig.attr("filter"in i ? i.filter : "", "messages"), {
                        title_before: this.env_.filter("i18n", "Last message from") + ":",
                        title_numeral: this.env_.filter("i18n", "value,values,values"),
                        small: !0
                    }),
                    new (e._get("interface/controls/checkboxes_dropdown.twig"))(this.env_).render_(t, twig.extend({}, i, "dropdown"in i ? i.dropdown : "")),
                    t.append('<b class="js-filter-field-clear"></b></div></div>')),
                    twig.attr("filter"in i ? i.filter : "", "active_talks") && (t.append('<div class="filter__custom_settings__item filter_active_talks" data-tmpl="text"><div class="filter__custom_settings__item__value-wrapper">'),
                    new (e._get("interface/controls/date_filter.twig"))(this.env_).render_(t, twig.extend({}, i, twig.filter.merge(twig.attr("filter"in i ? i.filter : "", "active_talks"), {
                        name_date_preset: "filter[active_talks][date_preset]"
                    }))),
                    t.append('<b class="js-filter-field-clear"></b></div></div>')),
                    twig.attr("filter"in i ? i.filter : "", "mailbox") && (t.append('<div class="filter__custom_settings__item" data-tmpl="text">'),
                    "has_title"in i && i.has_title && (t.append('<div class="filter__custom_settings__item__label hidden">'),
                    t.append(twig.filter.escape(this.env_, twig.attr(twig.attr("filter"in i ? i.filter : "", "mailbox"), "title"), "light_escape", null, !0)),
                    t.append("</div>")),
                    t.append('<div class="filter__custom_settings__item__value-wrapper">'),
                    i.select = twig.filter.merge(twig.attr("filter"in i ? i.filter : "", "mailbox", void 0, "array"), {
                        id: "",
                        class_name: "",
                        selected_before: twig.attr(twig.attr("filter"in i ? i.filter : "", "mailbox"), "title") + ": "
                    }),
                    new (e._get("interface/controls/select.twig"))(this.env_).render_(t, twig.extend({}, i, "select"in i ? i.select : "")),
                    t.append('<b class="js-filter-field-clear"></b></div></div>')),
                    twig.attr("filter"in i ? i.filter : "", "members") && new (e._get("interface/filter/common/fields_custom.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        field: twig.attr("filter"in i ? i.filter : "", "members")
                    })),
                    twig.attr("filter"in i ? i.filter : "", "thread_name") && new (e._get("interface/filter/common/fields_custom.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        field: twig.attr("filter"in i ? i.filter : "", "thread_name")
                    })),
                    twig.attr("filter"in i ? i.filter : "", "entity_name") && new (e._get("interface/filter/common/fields_custom.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        field: twig.attr("filter"in i ? i.filter : "", "entity_name")
                    })),
                    twig.attr("filter"in i ? i.filter : "", "date") && ("filter[main_contact][date][from]" == twig.attr(twig.attr("filter"in i ? i.filter : "", "date"), "from_name") ? i.name_date_preset = "filter[main_contact][date_preset]" : "filter[company][date][from]" == twig.attr(twig.attr("filter"in i ? i.filter : "", "date"), "from_name") && (i.name_date_preset = "filter[company][date_preset]"),
                    t.append('<div class="filter__custom_settings__item" data-tmpl="'),
                    twig.attr(twig.attr("filter"in i ? i.filter : "", "date"), "template") ? t.append(twig.filter.escape(this.env_, twig.attr(twig.attr("filter"in i ? i.filter : "", "date"), "template"), "light_escape", null, !0)) : t.append("text"),
                    t.append('"><div class="filter__custom_settings__item__value-wrapper">'),
                    new (e._get("interface/controls/date_filter.twig"))(this.env_).render_(t, twig.extend({}, i, twig.filter.merge(twig.attr("filter"in i ? i.filter : "", "date"), {
                        name_date_preset: twig.attr(twig.attr("filter"in i ? i.filter : "", "date"), "name_date_preset") ? twig.attr(twig.attr("filter"in i ? i.filter : "", "date"), "name_date_preset") : "name_date_preset"in i ? i.name_date_preset : ""
                    }))),
                    t.append('<b class="js-filter-field-clear"></b></div></div>')),
                    twig.attr("filter"in i ? i.filter : "", "next_date") && (t.append('<div class="filter__custom_settings__item filter_next_date" data-tmpl="text"><div class="filter__custom_settings__item__value-wrapper">'),
                    new (e._get("interface/controls/date_filter.twig"))(this.env_).render_(t, twig.extend({}, i, twig.filter.merge(twig.attr("filter"in i ? i.filter : "", "next_date"), {
                        name_date_preset: "filter[next_date][date_preset]"
                    }))),
                    t.append('<b class="js-filter-field-clear"></b></div></div>')),
                    twig.attr("filter"in i ? i.filter : "", "types") && (t.append('<div class="filter__custom_settings__item filter__custom_settings__item_task-types" data-tmpl="tags"><div class="filter__custom_settings__item__value-wrapper">'),
                    i.dropdown = twig.filter.merge(twig.attr("filter"in i ? i.filter : "", "types", void 0, "array"), {
                        class_name: "",
                        title_numeral: twig.attr("lang"in i ? i.lang : "", "filter_types_label"),
                        title: twig.attr("lang"in i ? i.lang : "", "filter_types_title"),
                        small: !0
                    }),
                    new (e._get("interface/controls/checkboxes_dropdown.twig"))(this.env_).render_(t, twig.extend({}, i, "dropdown"in i ? i.dropdown : "")),
                    t.append('<b class="js-filter-field-clear"></b></div></div>')),
                    "pipeline_id"in i && i.pipeline_id && (i.pipeline_view = !0),
                    twig.contains(["contacts"], "entity"in i ? i.entity : "") && twig.attr("filter"in i ? i.filter : "", "pipelines") ? (t.append('<div class="filter__custom_settings__item filter__custom_settings__item_statuses filter__custom_settings__item_pipelines-select" data-tmpl="statuses">'),
                    "has_title"in i && i.has_title && (t.append('<div class="filter__custom_settings__item__label hidden">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "filter_statuses_title"), "light_escape", null, !0)),
                    t.append("</div>")),
                    t.append('<div class="filter__custom_settings__item__value-wrapper">'),
                    new (e._get("interface/controls/pipeline_select/without_leads_filter.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        class_name: "filter-pipelines-multiselect",
                        inner_class_name: "filter-pipelines-multiselect__inner",
                        name: "filter[pipe]",
                        items: twig.attr(twig.attr("filter"in i ? i.filter : "", "pipelines"), "items"),
                        wo_leads_statuses: [{
                            id: -2,
                            option: this.env_.filter("i18n", "No leads linked")
                        }, {
                            id: -1,
                            option: this.env_.filter("i18n", "No active leads linked")
                        }],
                        has_pipelines: !0,
                        multiple: !0,
                        small: !0
                    })),
                    t.append('<b class="js-filter-field-clear"></b></div></div>')) : "pipeline_view"in i && i.pipeline_view || !twig.attr("filter"in i ? i.filter : "", "pipelines") ? twig.attr("filter"in i ? i.filter : "", "statuses") && (t.append(" "),
                    t.append('<div class="filter__custom_settings__item filter__custom_settings__item_statuses" data-tmpl="statuses">'),
                    "has_title"in i && i.has_title && (t.append('<div class="filter__custom_settings__item__label hidden">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "filter_statuses_title"), "light_escape", null, !0)),
                    t.append("</div>")),
                    t.append('<div class="filter__custom_settings__item__value-wrapper" data-statuses="'),
                    t.append(twig.filter.escape(this.env_, twig.attr(twig.attr(twig.attr("filter"in i ? i.filter : "", "items"), "all"), "selected"), "light_escape", null, !0)),
                    t.append('">'),
                    i.dropdown = twig.filter.merge(twig.attr("filter"in i ? i.filter : "", "statuses"), {
                        class_name: "checkboxes_dropdown__statuses",
                        title_numeral: twig.attr("lang"in i ? i.lang : "", "filter_stages_label"),
                        control_class_name: "js-control-checkboxes_dropdown-statuses",
                        title: twig.attr("lang"in i ? i.lang : "", "filter_statuses_title"),
                        additional_data: 'data-field_type="status"',
                        small: !0
                    }),
                    new (e._get("interface/controls/checkboxes_dropdown.twig"))(this.env_).render_(t, twig.extend({}, i, "dropdown"in i ? i.dropdown : "")),
                    t.append('<b class="js-filter-field-clear"></b></div></div>')) : (t.append('<div class="filter__custom_settings__item filter__custom_settings__item_statuses filter__custom_settings__item_pipelines-select" data-tmpl="statuses">'),
                    "has_title"in i && i.has_title && (t.append('<div class="filter__custom_settings__item__label hidden">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "filter_statuses_title"), "light_escape", null, !0)),
                    t.append("</div>")),
                    t.append('<div class="filter__custom_settings__item__value-wrapper">'),
                    new (e._get("interface/controls/pipeline_select/index.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        class_name: "filter-pipelines-multiselect",
                        inner_class_name: "filter-pipelines-multiselect__inner",
                        name: "filter[pipe]",
                        items: twig.attr(twig.attr("filter"in i ? i.filter : "", "pipelines"), "items"),
                        has_pipelines: !0,
                        multiple: !0,
                        small: !0
                    })),
                    t.append('<b class="js-filter-field-clear"></b></div></div>')),
                    (!("without_segments"in i) || !i.without_segments) && twig.attr("filter"in i ? i.filter : "", "segments")) {
                        if (t.append('<div class="segments-filter-in-tips filter__custom_settings__item">'),
                        twig.filter.length(this.env_, twig.attr(twig.attr("filter"in i ? i.filter : "", "segments"), "list")) > 1) {
                            if (i.logic_enums = [{
                                title: this.env_.filter("i18n", "And"),
                                value: "and",
                                id: "filter_tips[segments_logic][and]"
                            }, {
                                title: this.env_.filter("i18n", "Or"),
                                value: "or",
                                id: "filter_tips[segments_logic][or]"
                            }],
                            t.append('<h3 class="segments-filter-in-tips__header segments-filter__header">'),
                            i.logic_selected = twig.attr("logic"in i ? i.logic : "", "value"),
                            "logic_selected"in i && i.logic_selected || (i.logic_selected = "and"),
                            t.append('<div class="segments-filter__toggler">'),
                            i._parent = i,
                            s = "logic_enums"in i ? i.logic_enums : "",
                            a = {
                                index0: 0,
                                index: 1,
                                first: !0
                            },
                            twig.countable(s)) {
                                var l = twig.count(s);
                                a.revindex0 = l - 1,
                                a.revindex = l,
                                a.length = l,
                                a.last = 1 === l
                            }
                            twig.forEach(s, (function(n, s) {
                                i._key = s,
                                i.enum = n,
                                new (e._get("interface/controls/radio.twig"))(this.env_).render_(t, twig.extend({}, i, {
                                    class_name: "segments-filter__toggler-input",
                                    selected: ("logic_selected"in i ? i.logic_selected : "") == twig.attr("enum"in i ? i.enum : "", "value"),
                                    name: "filter[segments_logic]",
                                    label: twig.attr("enum"in i ? i.enum : "", "title"),
                                    value: twig.attr("enum"in i ? i.enum : "", "value"),
                                    id: twig.attr("enum"in i ? i.enum : "", "id")
                                })),
                                ++a.index0,
                                ++a.index,
                                a.first = !1,
                                a.length && (--a.revindex0,
                                --a.revindex,
                                a.last = 0 === a.revindex0)
                            }
                            ), this),
                            t.append("</div></h3>")
                        }
                        new (e._get("interface/controls/input.twig"))(this.env_).render_(t, twig.extend({}, i, {
                            class_name: "segments-filter__input js-form-changes-skip",
                            placeholder: this.env_.filter("i18n", "Segments"),
                            styled_input: !0
                        })),
                        t.append('<div class="segments-filter__list"><div class="segments-filter__items">'),
                        i._parent = i,
                        s = twig.attr(twig.attr("filter"in i ? i.filter : "", "segments"), "list"),
                        a = {
                            index0: 0,
                            index: 1,
                            first: !0
                        },
                        twig.countable(s) && (l = twig.count(s),
                        a.revindex0 = l - 1,
                        a.revindex = l,
                        a.length = l,
                        a.last = 1 === l),
                        twig.forEach(s, (function(n, s) {
                            i._key = s,
                            i.segment = n,
                            t.append('<label data-id="'),
                            t.append(twig.filter.escape(this.env_, twig.attr("segment"in i ? i.segment : "", "id"), "light_escape", null, !0)),
                            t.append('" class="segments-filter__item"><input type="checkbox" class="segments-filter__item-checkbox hidden" name="filter[segments][]" id="'),
                            t.append(twig.filter.escape(this.env_, "cbx_drop_segments_" + twig.attr("segment"in i ? i.segment : "", "id"), "light_escape", null, !0)),
                            t.append('" value="'),
                            t.append(twig.filter.escape(this.env_, twig.attr("segment"in i ? i.segment : "", "id"), "light_escape", null, !0)),
                            t.append('" '),
                            twig.contains("segments_selected"in i ? i.segments_selected : "", twig.attr("segment"in i ? i.segment : "", "id") + "") && t.append(' checked="checked" '),
                            t.append(">"),
                            new (e._get("interface/filter/customers/suggest_segments/item.twig"))(this.env_).render_(t, twig.extend({}, i, {
                                item: "segment"in i ? i.segment : "",
                                class_name: "suggest-segments__item_filter-list"
                            })),
                            t.append("</label>"),
                            ++a.index0,
                            ++a.index,
                            a.first = !1,
                            a.length && (--a.revindex0,
                            --a.revindex,
                            a.last = 0 === a.revindex0)
                        }
                        ), this),
                        t.append('</div><div class="segments-filter__item_empty" '),
                        0 != twig.filter.length(this.env_, twig.attr(twig.attr("filter"in i ? i.filter : "", "segments"), "list")) && t.append('style="display: none"'),
                        t.append(">"),
                        t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "You have no segments"), "light_escape", null, !0)),
                        t.append('</div><div class="segments-filter__item_empty-find"></div></div></div>')
                    }
                    twig.attr("filter"in i ? i.filter : "", "statuses_tasks") && (t.append(" "),
                    t.append('<div class="filter__custom_settings__item filter__custom_settings__item_statuses_tasks" data-tmpl="statuses_tasks">'),
                    "has_title"in i && i.has_title && (t.append('<div class="filter__custom_settings__item__label hidden">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "filter_statuses_title"), "light_escape", null, !0)),
                    t.append("</div>")),
                    t.append('<div class="filter__custom_settings__item__value-wrapper" data-statuses="'),
                    t.append(twig.filter.escape(this.env_, twig.attr(twig.attr(twig.attr("filter"in i ? i.filter : "", "items"), "all"), "selected"), "light_escape", null, !0)),
                    t.append('">'),
                    i.dropdown = twig.filter.merge(twig.attr("filter"in i ? i.filter : "", "statuses_tasks"), {
                        class_name: "checkboxes_dropdown__statuses",
                        title_numeral: twig.attr("lang"in i ? i.lang : "", "filter_statuses_label"),
                        title: twig.attr("lang"in i ? i.lang : "", "filter_statuses_title"),
                        additional_data: 'data-field_type="status"',
                        small: !0
                    }),
                    new (e._get("interface/controls/checkboxes_dropdown.twig"))(this.env_).render_(t, twig.extend({}, i, "dropdown"in i ? i.dropdown : "")),
                    t.append('<b class="js-filter-field-clear"></b></div></div>')),
                    twig.attr("filter"in i ? i.filter : "", "loss_reasons") && (t.append('<div class="filter__custom_settings__item filter__custom_settings__item_loss-reasons hidden">'),
                    "has_title"in i && i.has_title && (t.append('<div class="filter__custom_settings__item__label hidden">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "filer_loss_reasons_title"), "light_escape", null, !0)),
                    t.append("</div>")),
                    t.append('<div class="filter__custom_settings__item__value-wrapper">'),
                    i.dropdown = twig.filter.merge(twig.attr("filter"in i ? i.filter : "", "loss_reasons"), {
                        class_name: "checkboxes_dropdown__statuses",
                        title_numeral: twig.attr("lang"in i ? i.lang : "", "filer_loss_reasons_label"),
                        title: twig.attr("lang"in i ? i.lang : "", "filer_loss_reasons_title"),
                        small: !0
                    }),
                    new (e._get("interface/controls/checkboxes_dropdown.twig"))(this.env_).render_(t, twig.extend({}, i, "dropdown"in i ? i.dropdown : "")),
                    t.append('<b class="js-filter-field-clear"></b></div></div>')),
                    twig.attr("filter"in i ? i.filter : "", "unsorted_category") && (t.append('<div class="filter__custom_settings__item filter__custom_settings__item_unsorted-categories" data-tmpl="text">'),
                    "has_title"in i && i.has_title && (t.append('<div class="filter__custom_settings__item__label hidden">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Unsorted category"), "light_escape", null, !0)),
                    t.append("</div>")),
                    t.append('<div class="filter__custom_settings__item__value-wrapper">'),
                    i.dropdown = twig.filter.merge(twig.attr("filter"in i ? i.filter : "", "unsorted_category"), {
                        title_before: this.env_.filter("i18n", "Unsorted category") + ":",
                        title_numeral: this.env_.filter("i18n", "value,values,values"),
                        small: !0
                    }),
                    new (e._get("interface/controls/checkboxes_dropdown.twig"))(this.env_).render_(t, twig.extend({}, i, "dropdown"in i ? i.dropdown : "")),
                    t.append('<b class="js-filter-field-clear"></b></div></div>')),
                    twig.attr("filter"in i ? i.filter : "", "lead_source") && (t.append('<div class="filter__custom_settings__item filter__custom_settings__item_unsorted-lead-source" data-tmpl="text">'),
                    "has_title"in i && i.has_title && (t.append('<div class="filter__custom_settings__item__label hidden">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Source of lead"), "light_escape", null, !0)),
                    t.append("</div>")),
                    t.append('<div class="filter__custom_settings__item__value-wrapper">'),
                    i.dropdown = twig.filter.merge(twig.attr("filter"in i ? i.filter : "", "lead_source"), {
                        title_before: this.env_.filter("i18n", "Source of lead") + ":",
                        title_numeral: this.env_.filter("i18n", "value,values,values"),
                        small: !0
                    }),
                    new (e._get("interface/controls/checkboxes_dropdown.twig"))(this.env_).render_(t, twig.extend({}, i, "dropdown"in i ? i.dropdown : "")),
                    t.append('<b class="js-filter-field-clear"></b></div></div>')),
                    twig.attr("filter"in i ? i.filter : "", "custom_statuses") && (i._parent = i,
                    s = twig.attr("filter"in i ? i.filter : "", "custom_statuses"),
                    a = {
                        index0: 0,
                        index: 1,
                        first: !0
                    },
                    twig.countable(s) && (l = twig.count(s),
                    a.revindex0 = l - 1,
                    a.revindex = l,
                    a.length = l,
                    a.last = 1 === l),
                    twig.forEach(s, (function(n, s) {
                        i._key = s,
                        i.status_field = n,
                        new (e._get("interface/filter/common/fields_custom.twig"))(this.env_).render_(t, twig.extend({}, i, {
                            field: "status_field"in i ? i.status_field : ""
                        })),
                        ++a.index0,
                        ++a.index,
                        a.first = !1,
                        a.length && (--a.revindex0,
                        --a.revindex,
                        a.last = 0 === a.revindex0)
                    }
                    ), this)),
                    i._parent = i,
                    s = ["chat_source", "source"],
                    a = {
                        index0: 0,
                        index: 1,
                        first: !0
                    },
                    twig.countable(s) && (l = twig.count(s),
                    a.revindex0 = l - 1,
                    a.revindex = l,
                    a.length = l,
                    a.last = 1 === l),
                    twig.forEach(s, (function(n, s) {
                        i._key = s,
                        i.source_filter = n,
                        new (e._get("interface/filter/common/fields_custom.twig"))(this.env_).render_(t, twig.extend({}, i, {
                            field: twig.attr("filter"in i ? i.filter : "", "source_filter"in i ? i.source_filter : "", void 0, "array")
                        })),
                        ++a.index0,
                        ++a.index,
                        a.first = !1,
                        a.length && (--a.revindex0,
                        --a.revindex,
                        a.last = 0 === a.revindex0)
                    }
                    ), this),
                    twig.attr("filter"in i ? i.filter : "", "pipeline") && ("hidden" == twig.attr(twig.attr("filter"in i ? i.filter : "", "pipeline"), "type") ? (t.append('<input type="hidden" value="'),
                    t.append(twig.filter.escape(this.env_, twig.attr(twig.attr("filter"in i ? i.filter : "", "pipeline"), "selected"), "light_escape", null, !0)),
                    t.append('" name="'),
                    t.append(twig.filter.escape(this.env_, twig.attr(twig.attr("filter"in i ? i.filter : "", "pipeline"), "name", void 0, void 0, !0) ? twig.filter.def(twig.attr(twig.attr("filter"in i ? i.filter : "", "pipeline"), "name"), "filter[pipeline]") : "filter[pipeline]", "light_escape", null, !0)),
                    t.append('"/>')) : (t.append('<div class="filter__custom_settings__item">'),
                    "has_title"in i && i.has_title && (t.append('<div class="filter__custom_settings__item__label hidden">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "filter_statuses_title"), "light_escape", null, !0)),
                    t.append("</div>")),
                    new (e._get("interface/controls/select.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        name: twig.attr(twig.attr("filter"in i ? i.filter : "", "pipeline"), "name", void 0, void 0, !0) ? twig.filter.def(twig.attr(twig.attr("filter"in i ? i.filter : "", "pipeline"), "name"), "filter[pipeline]") : "filter[pipeline]",
                        items: twig.attr(twig.attr("filter"in i ? i.filter : "", "pipeline"), "items"),
                        selected: twig.attr(twig.attr("filter"in i ? i.filter : "", "pipeline"), "selected")
                    })),
                    t.append("</div>"))),
                    twig.attr("filter"in i ? i.filter : "", "is_unread") && (t.append('<div class="filter__custom_settings__item" data-tmpl="text">'),
                    "has_title"in i && i.has_title && (t.append('<div class="filter__custom_settings__item__label hidden">'),
                    t.append(twig.filter.escape(this.env_, twig.attr(twig.attr("filter"in i ? i.filter : "", "is_unread"), "text"), "light_escape", null, !0)),
                    t.append("</div>")),
                    t.append('<div class="filter__custom_settings__item__value-wrapper">'),
                    i.select = twig.filter.merge(twig.attr("filter"in i ? i.filter : "", "is_unread", void 0, "array"), {
                        id: "",
                        class_name: "",
                        selected_before: twig.attr(twig.attr("filter"in i ? i.filter : "", "is_unread"), "text") + ": "
                    }),
                    new (e._get("interface/controls/select.twig"))(this.env_).render_(t, twig.extend({}, i, "select"in i ? i.select : "")),
                    t.append('<b class="js-filter-field-clear"></b></div></div>')),
                    twig.attr("filter"in i ? i.filter : "", "from_parser") && (t.append('<div class="filter__custom_settings__item" data-tmpl="text">'),
                    "has_title"in i && i.has_title && (t.append('<div class="filter__custom_settings__item__label hidden">'),
                    t.append(twig.filter.escape(this.env_, twig.attr(twig.attr("filter"in i ? i.filter : "", "from_parser"), "text"), "light_escape", null, !0)),
                    t.append("</div>")),
                    t.append('<div class="filter__custom_settings__item__value-wrapper">'),
                    i.select = twig.filter.merge(twig.attr("filter"in i ? i.filter : "", "from_parser", void 0, "array"), {
                        id: "",
                        class_name: "",
                        selected_before: twig.attr(twig.attr("filter"in i ? i.filter : "", "from_parser"), "text") + ": "
                    }),
                    new (e._get("interface/controls/select.twig"))(this.env_).render_(t, twig.extend({}, i, "select"in i ? i.select : "")),
                    t.append('<b class="js-filter-field-clear"></b></div></div>')),
                    twig.attr("filter"in i ? i.filter : "", "has_entity") && (t.append('<div class="filter__custom_settings__item" data-tmpl="text">'),
                    "has_title"in i && i.has_title && (t.append('<div class="filter__custom_settings__item__label hidden">'),
                    t.append(twig.filter.escape(this.env_, twig.attr(twig.attr("filter"in i ? i.filter : "", "has_entity"), "text"), "light_escape", null, !0)),
                    t.append("</div>")),
                    t.append('<div class="filter__custom_settings__item__value-wrapper">'),
                    i.select = twig.filter.merge(twig.attr("filter"in i ? i.filter : "", "has_entity", void 0, "array"), {
                        id: "",
                        class_name: "",
                        selected_before: twig.attr(twig.attr("filter"in i ? i.filter : "", "has_entity"), "text") + ": "
                    }),
                    new (e._get("interface/controls/select.twig"))(this.env_).render_(t, twig.extend({}, i, "select"in i ? i.select : "")),
                    t.append('<b class="js-filter-field-clear"></b></div></div>')),
                    twig.attr("filter"in i ? i.filter : "", "has_attachments") && (t.append('<div class="filter__custom_settings__item" data-tmpl="text">'),
                    "has_title"in i && i.has_title && (t.append('<div class="filter__custom_settings__item__label hidden">'),
                    t.append(twig.filter.escape(this.env_, twig.attr(twig.attr("filter"in i ? i.filter : "", "has_attachments"), "text"), "light_escape", null, !0)),
                    t.append("</div>")),
                    t.append('<div class="filter__custom_settings__item__value-wrapper">'),
                    i.select = twig.filter.merge(twig.attr("filter"in i ? i.filter : "", "has_attachments", void 0, "array"), {
                        id: "",
                        class_name: "",
                        selected_before: twig.attr(twig.attr("filter"in i ? i.filter : "", "has_attachments"), "text") + ": "
                    }),
                    new (e._get("interface/controls/select.twig"))(this.env_).render_(t, twig.extend({}, i, "select"in i ? i.select : "")),
                    t.append('<b class="js-filter-field-clear"></b></div></div>')),
                    i.filters_by_managers = [{
                        type: "managers",
                        title: twig.attr("lang"in i ? i.lang : "", "filter_managers_title")
                    }, {
                        type: "authors",
                        title: twig.attr("lang"in i ? i.lang : "", "filter_authors_title")
                    }, {
                        type: "created_by"
                    }, {
                        type: "modified_by"
                    }, {
                        type: "inbox_messaging_responsible"
                    }, {
                        type: "inbox_messaging_subscriber"
                    }, {
                        type: "inbox_messaging_participant"
                    }, {
                        type: "last_message_author"
                    }],
                    i._parent = i,
                    s = "filters_by_managers"in i ? i.filters_by_managers : "",
                    a = {
                        index0: 0,
                        index: 1,
                        first: !0
                    },
                    twig.countable(s) && (l = twig.count(s),
                    a.revindex0 = l - 1,
                    a.revindex = l,
                    a.length = l,
                    a.last = 1 === l),
                    twig.forEach(s, (function(n, s) {
                        i._key = s,
                        i.manager_filter = n,
                        twig.attr("filter"in i ? i.filter : "", twig.attr("manager_filter"in i ? i.manager_filter : "", "type"), void 0, "array") && new (e._get("interface/filter/users.twig"))(this.env_).render_(t, twig.extend({}, i, {
                            field_type: "type"in i ? i.type : "",
                            field_title: twig.attr("manager_filter"in i ? i.manager_filter : "", "title"),
                            field: twig.attr("filter"in i ? i.filter : "", twig.attr("manager_filter"in i ? i.manager_filter : "", "type"), void 0, "array")
                        })),
                        ++a.index0,
                        ++a.index,
                        a.first = !1,
                        a.length && (--a.revindex0,
                        --a.revindex,
                        a.last = 0 === a.revindex0)
                    }
                    ), this),
                    twig.attr("filter"in i ? i.filter : "", "tasks") && (t.append('<div class="filter__custom_settings__item" data-tmpl="text">'),
                    "has_title"in i && i.has_title && (t.append('<div class="filter__custom_settings__item__label hidden">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "filter_tasks_label"), "light_escape", null, !0)),
                    t.append("</div>")),
                    t.append('<div class="filter__custom_settings__item__value-wrapper">'),
                    i.dropdown = twig.filter.merge(twig.attr("filter"in i ? i.filter : "", "tasks", void 0, "array"), {
                        title_before: twig.attr("lang"in i ? i.lang : "", "filter_tasks_label") + ":",
                        title_numeral: this.env_.filter("i18n", "value,values,values"),
                        small: !0
                    }),
                    new (e._get("interface/controls/checkboxes_dropdown.twig"))(this.env_).render_(t, twig.extend({}, i, "dropdown"in i ? i.dropdown : "")),
                    t.append('<b class="js-filter-field-clear"></b></div></div>')),
                    twig.attr("filter"in i ? i.filter : "", "filesize") && (t.append('<div class="filter__custom_settings__item" data-tmpl="text"><div class="filter__custom_settings__item__value-wrapper clearfix filter__custom_input_numeric__wrapper"><b class="js-filter-field-clear"></b>'),
                    i.from = twig.filter.merge(twig.attr(twig.attr("filter"in i ? i.filter : "", "filesize"), "from"), {
                        type: "text",
                        class_name: "filter__custom_input filter__custom_input_numeric js-control-allow-numeric-negative",
                        placeholder: twig.attr(twig.attr("filter"in i ? i.filter : "", "filesize"), "title")
                    }),
                    new (e._get("interface/controls/input.twig"))(this.env_).render_(t, twig.extend({}, i, "from"in i ? i.from : "")),
                    t.append('<span class="filter__custom_input_numeric__wrapper-delimiter">-</span>'),
                    i.to = twig.filter.merge(twig.attr(twig.attr("filter"in i ? i.filter : "", "filesize"), "to"), {
                        type: "text",
                        class_name: "filter__custom_input filter__custom_input_numeric js-control-allow-numeric-negative",
                        placeholder: ""
                    }),
                    new (e._get("interface/controls/input.twig"))(this.env_).render_(t, twig.extend({}, i, "to"in i ? i.to : "")),
                    new (e._get("interface/controls/select.twig"))(this.env_).render_(t, twig.extend({}, i, twig.attr(twig.attr("filter"in i ? i.filter : "", "filesize"), "unit"))),
                    t.append("</div></div>")),
                    i.custom_types = ["price", "next_price", "ltv", "purchases_count", "average_check", "object", "events", "value_before", "value_after", "labor_cost"],
                    i._parent = i,
                    s = "custom_types"in i ? i.custom_types : "",
                    a = {
                        index0: 0,
                        index: 1,
                        first: !0
                    },
                    twig.forEach(s, (function(n, s) {
                        i._key = s,
                        i.type = n,
                        twig.attr("filter"in i ? i.filter : "", "type"in i ? i.type : "", void 0, "array") && (new (e._get("interface/filter/common/fields_custom.twig"))(this.env_).render_(t, twig.extend({}, i, {
                            field: twig.attr("filter"in i ? i.filter : "", "type"in i ? i.type : "", void 0, "array")
                        })),
                        ++a.index0,
                        ++a.index,
                        a.first = !1)
                    }
                    ), this),
                    twig.filter.length(this.env_, twig.attr("filter"in i ? i.filter : "", "groups_cf")) ? (i._parent = i,
                    s = twig.attr("filter"in i ? i.filter : "", "groups_cf"),
                    a = {
                        index0: 0,
                        index: 1,
                        first: !0
                    },
                    twig.forEach(s, (function(n, s) {
                        if (i._key = s,
                        i.group = n,
                        twig.filter.length(this.env_, twig.attr("group"in i ? i.group : "", "fields")) > 0) {
                            i.is_statistic = "statistic" == twig.attr("group"in i ? i.group : "", "id"),
                            i.group_name = "is_statistic"in i && i.is_statistic ? this.env_.filter("i18n", "Statistics") : twig.attr("group"in i ? i.group : "", "name"),
                            "group_name"in i && i.group_name && (t.append('<h3 class="filter-search__filter__group js-cf-group" data-id="'),
                            t.append(twig.filter.escape(this.env_, twig.attr("group"in i ? i.group : "", "id"), "light_escape", null, !0)),
                            t.append('" data-foldable="1" data-folded="'),
                            t.append(twig.attr("group"in i ? i.group : "", "show") ? 1 : 0),
                            t.append('" data-element-type="'),
                            t.append(twig.filter.escape(this.env_, twig.attr("group"in i ? i.group : "", "element_type"), "light_escape", null, !0)),
                            t.append('"><span>'),
                            t.append(twig.filter.escape(this.env_, "group_name"in i ? i.group_name : "", "light_escape", null, !0)),
                            t.append("</span></h3>")),
                            t.append('<div class="filter-search__filter__group__wrapper" '),
                            twig.attr("group"in i ? i.group : "", "show") || t.append('style="display: none"'),
                            t.append(">");
                            var l = twig.attr("group"in i ? i.group : "", "fields")
                              , r = {
                                parent: a,
                                index0: 0,
                                index: 1,
                                first: !0
                            };
                            if (twig.countable(l)) {
                                var _ = twig.count(l);
                                r.revindex0 = _ - 1,
                                r.revindex = _,
                                r.length = _,
                                r.last = 1 === _
                            }
                            twig.forEach(l, (function(n, s) {
                                i._key = s,
                                i.field_id = n,
                                i.field = twig.attr(twig.attr("filter"in i ? i.filter : "", "custom_fields"), "field_id"in i ? i.field_id : "", void 0, "array"),
                                "field"in i && i.field && ("is_statistic"in i && i.is_statistic && !twig.attr("field"in i ? i.field : "", "title") && (i.field = twig.filter.merge("field"in i ? i.field : "", {
                                    hidden: !0
                                })),
                                new (e._get("interface/filter/common/fields_custom.twig"))(this.env_).render_(t, twig.extend({}, i, {
                                    field: "field"in i ? i.field : ""
                                }))),
                                ++r.index0,
                                ++r.index,
                                r.first = !1,
                                r.length && (--r.revindex0,
                                --r.revindex,
                                r.last = 0 === r.revindex0)
                            }
                            ), this),
                            "is_statistic"in i && i.is_statistic && t.append('<div class="statistic-filter filter__custom_settings__item"></div>'),
                            t.append("</div>"),
                            ++a.index0,
                            ++a.index,
                            a.first = !1
                        }
                    }
                    ), this)) : twig.filter.length(this.env_, twig.attr("filter"in i ? i.filter : "", "custom_fields")) > 0 && (i._parent = i,
                    s = twig.attr("filter"in i ? i.filter : "", "custom_fields"),
                    a = {
                        index0: 0,
                        index: 1,
                        first: !0
                    },
                    twig.countable(s) && (l = twig.count(s),
                    a.revindex0 = l - 1,
                    a.revindex = l,
                    a.length = l,
                    a.last = 1 === l),
                    twig.forEach(s, (function(n, s) {
                        i._key = s,
                        i.field = n,
                        new (e._get("interface/filter/common/fields_custom.twig"))(this.env_).render_(t, twig.extend({}, i, {
                            field: "field"in i ? i.field : ""
                        })),
                        ++a.index0,
                        ++a.index,
                        a.first = !1,
                        a.length && (--a.revindex0,
                        --a.revindex,
                        a.last = 0 === a.revindex0)
                    }
                    ), this)),
                    !twig.attr("filter"in i ? i.filter : "", "tags") || "is_trash"in i && i.is_trash || new (e._get("interface/filter/tags.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        items: twig.attr(twig.attr("filter"in i ? i.filter : "", "tags"), "list"),
                        element_type_name: "filter_element_type_name"in i ? i.filter_element_type_name : "",
                        tags_lib_plug: twig.attr(twig.attr("filter"in i ? i.filter : "", "tags"), "tags_lib"),
                        tags_logic: twig.attr(twig.attr("filter"in i ? i.filter : "", "tags"), "logic")
                    })),
                    twig.attr("filter"in i ? i.filter : "", "emotion") && new (e._get("interface/filter/common/fields_custom.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        field: twig.filter.merge(twig.attr("filter"in i ? i.filter : "", "emotion", void 0, "array"), {
                            title: this.env_.filter("i18n", "Sentiment detected"),
                            title_numeral: this.env_.filter("i18n", "value,values,values"),
                            small: !0
                        })
                    })),
                    twig.attr("filter"in i ? i.filter : "", "products") && new (e._get("interface/filter/products.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        element_type_name: "filter_element_type_name"in i ? i.filter_element_type_name : "",
                        title: this.env_.filter("i18n", "Products"),
                        input_name: twig.attr(twig.attr("filter"in i ? i.filter : "", "products"), "name"),
                        items: twig.attr(twig.attr("filter"in i ? i.filter : "", "products"), "list")
                    })),
                    i.users_settings = ["groups", "role_id", "active", "mfa"],
                    i._parent = i,
                    s = "users_settings"in i ? i.users_settings : "",
                    a = {
                        index0: 0,
                        index: 1,
                        first: !0
                    },
                    twig.forEach(s, (function(n, s) {
                        i._key = s,
                        i.type = n,
                        twig.attr("filter"in i ? i.filter : "", "type"in i ? i.type : "", void 0, "array") && (t.append('<div class="filter__custom_settings__item"><div class="filter__custom_settings__item__value-wrapper">'),
                        new (e._get("interface/controls/checkboxes_dropdown.twig"))(this.env_).render_(t, twig.extend({}, i, twig.filter.merge(twig.attr("filter"in i ? i.filter : "", "type"in i ? i.type : "", void 0, "array"), {
                            small: !0
                        }))),
                        t.append('<b class="js-filter-field-clear"></b></div></div>'),
                        ++a.index0,
                        ++a.index,
                        a.first = !1)
                    }
                    ), this),
                    twig.attr("filter"in i ? i.filter : "", "suggest_segment") && (i.field = twig.attr("filter"in i ? i.filter : "", "suggest_segment"),
                    new (e._get("interface/filter/suggest_segment.twig"))(this.env_).render_(t, {
                        field_name: twig.attr("field"in i ? i.field : "", "name"),
                        field_title: twig.attr("field"in i ? i.field : "", "title"),
                        items: twig.attr("field"in i ? i.field : "", "items")
                    }))
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_filter_common_fields"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/filter/common/fields", t)
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
                    i.field_placeholder = twig.attr("field"in i ? i.field : "", "title"),
                    i.field_title = twig.attr("field"in i ? i.field : "", "title"),
                    "has_title"in i && i.has_title && (i.field_placeholder = ""),
                    "input" == twig.attr("field"in i ? i.field : "", "template"))
                        t.append('<div class="filter__custom_settings__item '),
                        twig.attr("field"in i ? i.field : "", "hidden") && t.append("hidden"),
                        t.append('" data-tmpl="text">'),
                        "has_title"in i && i.has_title && (t.append('<div class="filter__custom_settings__item__label" title="'),
                        t.append(twig.filter.escape(this.env_, twig.attr("field"in i ? i.field : "", "title"), "light_escape", null, !0)),
                        t.append('">'),
                        t.append(twig.filter.escape(this.env_, twig.attr("field"in i ? i.field : "", "title"), "light_escape", null, !0)),
                        t.append("</div>")),
                        t.append('<div class="filter__custom_settings__item__value-wrapper">'),
                        i.class_name = "filter__custom_input",
                        twig.attr("field"in i ? i.field : "", "class_name", void 0, void 0, !0) && twig.attr("field"in i ? i.field : "", "class_name") && (i.class_name = ("class_name"in i ? i.class_name : "") + " " + twig.attr("field"in i ? i.field : "", "class_name")),
                        i.field = twig.filter.merge("field"in i ? i.field : "", {
                            type: "text",
                            class_name: "class_name"in i ? i.class_name : "",
                            placeholder: "field_placeholder"in i ? i.field_placeholder : ""
                        }),
                        new (e._get("interface/controls/input.twig"))(this.env_).render_(t, twig.extend({}, i, "field"in i ? i.field : "")),
                        t.append('<b class="js-filter-field-clear"></b></div></div>');
                    else if (twig.contains(["numeric", "monetary"], twig.attr("field"in i ? i.field : "", "template")))
                        t.append('<div class="filter__custom_settings__item '),
                        twig.attr("field"in i ? i.field : "", "hidden") && t.append("hidden"),
                        t.append('" data-tmpl="text">'),
                        "has_title"in i && i.has_title && (t.append('<div class="filter__custom_settings__item__label" title="'),
                        t.append(twig.filter.escape(this.env_, twig.attr("field"in i ? i.field : "", "title"), "light_escape", null, !0)),
                        t.append('">'),
                        t.append(twig.filter.escape(this.env_, twig.attr("field"in i ? i.field : "", "title"), "light_escape", null, !0)),
                        t.append("</div>")),
                        t.append('<div class="filter__custom_settings__item__value-wrapper clearfix filter__custom_input_numeric__wrapper"><b class="js-filter-field-clear"></b>'),
                        i.from = twig.filter.merge(twig.attr("field"in i ? i.field : "", "from"), {
                            type: "text",
                            class_name: "filter__custom_input filter__custom_input_numeric js-control-allow-numeric-negative",
                            placeholder: "field_placeholder"in i ? i.field_placeholder : ""
                        }),
                        new (e._get("interface/controls/input.twig"))(this.env_).render_(t, twig.extend({}, i, "from"in i ? i.from : "")),
                        t.append('<span class="filter__custom_input_numeric__wrapper-delimiter">-</span>'),
                        i.to = twig.filter.merge(twig.attr("field"in i ? i.field : "", "to"), {
                            type: "text",
                            class_name: "filter__custom_input filter__custom_input_numeric js-control-allow-numeric-negative",
                            placeholder: ""
                        }),
                        new (e._get("interface/controls/input.twig"))(this.env_).render_(t, twig.extend({}, i, "to"in i ? i.to : "")),
                        t.append("</div></div>");
                    else if ("select" == twig.attr("field"in i ? i.field : "", "template"))
                        t.append('<div class="filter__custom_settings__item '),
                        twig.attr("field"in i ? i.field : "", "hidden") && t.append("hidden"),
                        t.append('" data-tmpl="text">'),
                        "has_title"in i && i.has_title && (t.append('<div class="filter__custom_settings__item__label" title="'),
                        t.append(twig.filter.escape(this.env_, twig.attr("field"in i ? i.field : "", "title"), "light_escape", null, !0)),
                        t.append('">'),
                        t.append(twig.filter.escape(this.env_, twig.attr("field"in i ? i.field : "", "title"), "light_escape", null, !0)),
                        t.append("</div>")),
                        i.field = twig.filter.merge("field"in i ? i.field : "", {
                            selected_before: twig.attr("field"in i ? i.field : "", "title") + ": ",
                            button_class_name: "control--select--button--default-bg"
                        }),
                        t.append('<div class="filter__custom_settings__item__value-wrapper">'),
                        new (e._get("interface/controls/select.twig"))(this.env_).render_(t, twig.extend({}, i, "field"in i ? i.field : "")),
                        t.append('<b class="js-filter-field-clear"></b></div></div>');
                    else if ("checkboxes_dropdown" == twig.attr("field"in i ? i.field : "", "template"))
                        t.append('<div class="filter__custom_settings__item '),
                        t.append(twig.filter.escape(this.env_, twig.attr("field"in i ? i.field : "", "class_name"), "light_escape", null, !0)),
                        t.append(" "),
                        twig.attr("field"in i ? i.field : "", "hidden") && t.append("hidden"),
                        t.append('" data-field-name="'),
                        t.append(twig.filter.escape(this.env_, twig.attr("field"in i ? i.field : "", "name"), "light_escape", null, !0)),
                        t.append('" data-tmpl="tags">'),
                        "has_title"in i && i.has_title && (t.append('<div class="filter__custom_settings__item__label" title="'),
                        t.append(twig.filter.escape(this.env_, twig.attr("field"in i ? i.field : "", "title"), "light_escape", null, !0)),
                        t.append('">'),
                        t.append(twig.filter.escape(this.env_, twig.attr("field"in i ? i.field : "", "title"), "light_escape", null, !0)),
                        t.append("</div>")),
                        t.append('<div class="filter__custom_settings__item__value-wrapper">'),
                        twig.attr("field"in i ? i.field : "", "need_title_before", void 0, void 0, !0) && !twig.attr("field"in i ? i.field : "", "need_title_before") ? i.title_before = !1 : i.title_before = twig.attr("field"in i ? i.field : "", "has_custom_title") ? twig.attr("field"in i ? i.field : "", "title") : twig.attr("field"in i ? i.field : "", "title") + ":",
                        i.field = twig.filter.merge("field"in i ? i.field : "", {
                            name_is_array: twig.attr("field"in i ? i.field : "", "name_is_array", void 0, void 0, !0) ? twig.attr("field"in i ? i.field : "", "name_is_array") : "yes",
                            title_before: "title_before"in i ? i.title_before : "",
                            title: this.env_.filter("i18n", "All") + " " + this.env_.filter("numeral", twig.attr("field"in i ? i.field : "", "title_numeral"), "all"),
                            small: !0
                        }),
                        new (e._get("interface/controls/checkboxes_dropdown.twig"))(this.env_).render_(t, twig.extend({}, i, "field"in i ? i.field : "")),
                        t.append('<b class="js-filter-field-clear"></b></div></div>');
                    else if ("checkboxes_dropdown_emotion" == twig.attr("field"in i ? i.field : "", "template"))
                        t.append('<div class="filter__custom_settings__item '),
                        t.append(twig.filter.escape(this.env_, twig.attr("field"in i ? i.field : "", "class_name"), "light_escape", null, !0)),
                        t.append(" "),
                        twig.attr("field"in i ? i.field : "", "hidden") && t.append("hidden"),
                        t.append('" data-field-name="'),
                        t.append(twig.filter.escape(this.env_, twig.attr("field"in i ? i.field : "", "name"), "light_escape", null, !0)),
                        t.append('" data-tmpl="emotion">'),
                        "has_title"in i && i.has_title && (t.append('<div class="filter__custom_settings__item__label" title="'),
                        t.append(twig.filter.escape(this.env_, twig.attr("field"in i ? i.field : "", "title"), "light_escape", null, !0)),
                        t.append('">'),
                        t.append(twig.filter.escape(this.env_, twig.attr("field"in i ? i.field : "", "title"), "light_escape", null, !0)),
                        t.append("</div>")),
                        t.append('<div class="filter__custom_settings__item__value-wrapper">'),
                        i.field = twig.filter.merge("field"in i ? i.field : "", {
                            name_is_array: "yes",
                            title_before: twig.attr("field"in i ? i.field : "", "title") + ":",
                            title: this.env_.filter("i18n", "All") + " " + this.env_.filter("numeral", twig.attr("field"in i ? i.field : "", "title_numeral"), "all"),
                            small: !0,
                            list_class_name: "emotion_list"
                        }),
                        new (e._get("interface/controls/checkboxes_dropdown.twig"))(this.env_).render_(t, twig.extend({}, i, "field"in i ? i.field : "")),
                        t.append('<b class="js-filter-field-clear"></b></div></div>');
                    else if ("checkboxes_dropdown_without_titile_before" == twig.attr("field"in i ? i.field : "", "template"))
                        t.append('<div class="filter__custom_settings__item '),
                        twig.attr("field"in i ? i.field : "", "hidden") && t.append("hidden"),
                        t.append('" data-field-name="'),
                        t.append(twig.filter.escape(this.env_, twig.attr("field"in i ? i.field : "", "name"), "light_escape", null, !0)),
                        t.append('" data-tmpl="tags">'),
                        "has_title"in i && i.has_title && (t.append('<div class="filter__custom_settings__item__label" title="'),
                        t.append(twig.filter.escape(this.env_, twig.attr("field"in i ? i.field : "", "title"), "light_escape", null, !0)),
                        t.append('">'),
                        t.append(twig.filter.escape(this.env_, twig.attr("field"in i ? i.field : "", "title"), "light_escape", null, !0)),
                        t.append("</div>")),
                        t.append('<div class="filter__custom_settings__item__value-wrapper">'),
                        i.field = twig.filter.merge("field"in i ? i.field : "", {
                            title: this.env_.filter("i18n", "All") + " " + this.env_.filter("numeral", twig.attr("field"in i ? i.field : "", "title_numeral"), "all"),
                            small: !0
                        }),
                        new (e._get("interface/controls/checkboxes_dropdown.twig"))(this.env_).render_(t, twig.extend({}, i, "field"in i ? i.field : "")),
                        t.append('<b class="js-filter-field-clear"></b></div></div>');
                    else if ("date" == twig.attr("field"in i ? i.field : "", "template"))
                        t.append('<div class="filter__custom_settings__item" data-tmpl="date"><div class="filter__custom_settings__item__value-wrapper">'),
                        new (e._get("interface/controls/date_filter.twig"))(this.env_).render_(t, twig.extend({}, i, twig.filter.merge("field"in i ? i.field : "", {
                            save_overflow: !0
                        }))),
                        t.append('<b class="js-filter-field-clear"></b></div></div>');
                    else if ("date_field" == twig.attr("field"in i ? i.field : "", "template"))
                        t.append('<div class="filter__custom_settings__item '),
                        twig.attr("field"in i ? i.field : "", "hidden") && t.append("hidden"),
                        t.append('" data-tmpl="text">'),
                        "has_title"in i && i.has_title && (t.append('<div class="filter__custom_settings__item__label" title="'),
                        t.append(twig.filter.escape(this.env_, twig.attr("field"in i ? i.field : "", "title"), "light_escape", null, !0)),
                        t.append('">'),
                        t.append(twig.filter.escape(this.env_, twig.attr("field"in i ? i.field : "", "title"), "light_escape", null, !0)),
                        t.append("</div>")),
                        t.append('<div class="filter__custom_settings__item__value-wrapper">'),
                        i.params = {
                            type: "range",
                            id: "",
                            input_class: "date-filter-in-search filter__custom_input",
                            value: twig.attr("field"in i ? i.field : "", "value"),
                            placeholder: "field_placeholder"in i ? i.field_placeholder : "",
                            title_format: twig.attr("field"in i ? i.field : "", "title_format"),
                            data_format: twig.attr("field"in i ? i.field : "", "data_format"),
                            name: {
                                from: twig.attr(twig.attr("field"in i ? i.field : "", "name"), "from"),
                                to: twig.attr(twig.attr("field"in i ? i.field : "", "name"), "to")
                            }
                        },
                        new (e._get("interface/controls/date_field.twig"))(this.env_).render_(t, twig.extend({}, i, "params"in i ? i.params : "")),
                        t.append('<b class="js-filter-field-clear"></b></div></div>');
                    else if ("date_time_field" == twig.attr("field"in i ? i.field : "", "template"))
                        t.append('<div class="filter__custom_settings__item" data-tmpl="date"><div class="filter__custom_settings__item__value-wrapper">'),
                        new (e._get("interface/controls/date_filter.twig"))(this.env_).render_(t, twig.extend({}, i, twig.filter.merge("field"in i ? i.field : "", {
                            save_overflow: !0,
                            controlClassName: "js-control-date_time_filter",
                            date_type: twig.attr("field"in i ? i.field : "", "template")
                        }))),
                        t.append('<b class="js-filter-field-clear js-filter-field-clear-date-time"></b></div></div>');
                    else if ("smart_address" == twig.attr("field"in i ? i.field : "", "template")) {
                        i._parent = i;
                        var s = twig.attr("field"in i ? i.field : "", "items")
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
                            i.subtype = s,
                            i.subtype_field = n,
                            i.subtype_field = twig.filter.merge("subtype_field"in i ? i.subtype_field : "", {
                                subtype: "subtype"in i ? i.subtype : ""
                            }),
                            "zip" == ("subtype"in i ? i.subtype : "") && (i.subtype_field = twig.filter.merge("subtype_field"in i ? i.subtype_field : "", {
                                class_name: "js-control-allow-zip"
                            })),
                            new (e._get("interface/filter/common/fields_custom.twig"))(this.env_).render_(t, twig.extend({}, i, {
                                field: "subtype_field"in i ? i.subtype_field : ""
                            })),
                            ++a.index0,
                            ++a.index,
                            a.first = !1,
                            a.length && (--a.revindex0,
                            --a.revindex,
                            a.last = 0 === a.revindex0)
                        }
                        ), this)
                    } else
                        "event_values" == twig.attr("field"in i ? i.field : "", "template") ? new (e._get("interface/filter/common/dynamic_checkboxes_search.twig"))(this.env_).render_(t, twig.extend({}, i, {
                            name: twig.attr("field"in i ? i.field : "", "name"),
                            title: twig.attr("field"in i ? i.field : "", "title"),
                            is_input: !0
                        })) : "event_type" == twig.attr("field"in i ? i.field : "", "template") ? (i.items = [],
                        i._parent = i,
                        s = twig.attr("field"in i ? i.field : "", "items"),
                        twig.forEach(s, (function(e, t) {
                            i.key = t,
                            i.item = e,
                            twig.attr("item"in i ? i.item : "", "cf_id") && (i.item = twig.filter.merge("item"in i ? i.item : "", {
                                additional_data: 'data-cf-id="' + twig.attr("item"in i ? i.item : "", "cf_id") + '"',
                                class_name: "is-cf-id"
                            })),
                            i.items = twig.filter.merge("items"in i ? i.items : "", ["item"in i ? i.item : ""])
                        }
                        ), this),
                        i.field = twig.filter.merge("field"in i ? i.field : "", {
                            items: "items"in i ? i.items : ""
                        }),
                        new (e._get("interface/controls/checkboxes_search/index.twig"))(this.env_).render_(t, twig.extend({}, i, "field"in i ? i.field : ""))) : "chained_list" == twig.attr("field"in i ? i.field : "", "template") ? (t.append('<div class="filter__custom_settings__item filter__custom_settings__item_chained-list" data-name="'),
                        t.append(twig.filter.escape(this.env_, twig.attr("field"in i ? i.field : "", "name"), "light_escape", null, !0)),
                        t.append('">'),
                        new (e._get("interface/controls/chained_list.twig"))(this.env_).render_(t, twig.extend({}, i, {
                            input_class_name: "filter__custom_input",
                            value_input_class_name: "filter__custom_input_chained-list",
                            name: twig.attr("field"in i ? i.field : "", "name"),
                            lists: twig.attr("field"in i ? i.field : "", "chained_lists")
                        })),
                        t.append('<b class="js-filter-field-clear"></b></div>')) : "checkboxes_search" == twig.attr("field"in i ? i.field : "", "template") ? (t.append('<div class="filter__custom_settings__item" data-name="'),
                        t.append(twig.filter.escape(this.env_, twig.attr("field"in i ? i.field : "", "name"), "light_escape", null, !0)),
                        t.append('">'),
                        new (e._get("interface/controls/checkboxes_search/index.twig"))(this.env_).render_(t, twig.extend({}, i, "field"in i ? i.field : "")),
                        t.append("</div>")) : "linked_entity" == twig.attr("field"in i ? i.field : "", "template") && new (e._get("interface/filter/linked_entity.twig"))(this.env_).render_(t, twig.extend({}, i, {
                            items: twig.attr("field"in i ? i.field : "", "items"),
                            search_in_id: twig.attr("field"in i ? i.field : "", "search_in_id"),
                            input_name: twig.attr("field"in i ? i.field : "", "id"),
                            title: twig.attr("field"in i ? i.field : "", "title")
                        }))
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_filter_common_fields_custom"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/filter/common/fields_custom", t)
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
                    t.append('<div class="filter__custom_settings__list" id="filter_fields">'),
                    twig.attr("filter"in i ? i.filter : "", "is_render_custom_field")) {
                        i._parent = i;
                        var s = twig.attr("filter"in i ? i.filter : "", "custom_fields")
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
                            new (e._get("interface/filter/common/fields_custom.twig"))(this.env_).render_(t, twig.extend({}, i, {
                                field: "item"in i ? i.item : ""
                            })),
                            ++a.index0,
                            ++a.index,
                            a.first = !1,
                            a.length && (--a.revindex0,
                            --a.revindex,
                            a.last = 0 === a.revindex0)
                        }
                        ), this)
                    } else
                        new (e._get("interface/filter/common/fields.twig"))(this.env_).render_(t, twig.extend({}, i, {
                            without_segments: !0
                        }));
                    t.append("</div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_filter_common_fields_wrapper"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/filter/common/fields_wrapper", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e),
                    this.setBlocks({
                        filter_form: twig.bind(this.block_filter_form, this),
                        filter_right_side: twig.bind(this.block_filter_right_side, this)
                    })
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(e) {
                    return !1
                }
                ,
                t.prototype.render_ = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    this.env_.test("iterable", "filters"in i ? i.filters : "") && twig.filter.length(this.env_, "filters"in i ? i.filters : "") && (i.has_multifilters = !0),
                    t.append('<div class="js-filter-sidebar filter-search hidden '),
                    "newbie" == ("user_rank"in i ? i.user_rank : "") && t.append("filter-search__newbie"),
                    t.append(" "),
                    "has_multifilters"in i && i.has_multifilters && t.append("filter-search-multifilter"),
                    t.append('" '),
                    "skip_filter_id"in i && i.skip_filter_id || (t.append('id="'),
                    t.append(twig.filter.escape(this.env_, "filter_id"in i ? twig.filter.def("filter_id"in i ? i.filter_id : "", "sidebar") : "sidebar", "light_escape", null, !0)),
                    t.append('"')),
                    t.append('><div class="filter-search__wrapper custom-scroll"><div class="filter-search__inner"><div class="filter-search__left"><ul class="filter-search__list js-filter-list" id="filter_list">'),
                    twig.attr("filter"in i ? i.filter : "", "items") && new (e._get("interface/filter/in_search/presets.twig"))(this.env_).render_(t, i),
                    t.append('</ul></div><div class="filter-search__right"><form action="'),
                    t.append(twig.filter.escape(this.env_, twig.attr("filter"in i ? i.filter : "", "url"), "light_escape", null, !0)),
                    t.append('" method="GET" id="filter_form" class="filter__form"><div class="filter-search__form-wrapper">'),
                    t.append(this.renderBlock("filter_form", i, n)),
                    t.append("</div>"),
                    "periodicity_enabled"in i && i.periodicity_enabled || !("show_segments"in i) || !i.show_segments || (t.append('<div class="segments-filter">'),
                    new (e._get("interface/filter/in_search/segments.twig"))(this.env_).render_(t, twig.extend({}, i, twig.attr("main_filter"in i ? i.main_filter : "", "segments"))),
                    t.append("</div>")),
                    t.append(this.renderBlock("filter_right_side", i, n)),
                    t.append("</form></div></div></div>"),
                    t.append('<div id="search-suggest-drop-down-menu" class="search-results custom-scroll">'),
                    new (e._get("interface/filter/in_search/suggest/main_suggest.twig"))(this.env_).render_(t, i),
                    t.append("</div>"),
                    new (e._get("interface/common/modal/actions.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        actions__class_name: "filter__params_manage",
                        button_text: this.env_.filter("i18n", "Apply"),
                        button_id: "filter_apply",
                        button_class: "button-input_blue filter__params_manage__apply",
                        button_cancel_class: "js-search-filter-clear",
                        cancel_text: this.env_.filter("i18n", "Reset"),
                        button_disabled: !0
                    })),
                    t.append("</div>")
                }
                ,
                t.prototype.block_filter_form = function(t, i, n) {
                    if (n = void 0 === n ? {} : n,
                    "has_multifilters"in i && i.has_multifilters) {
                        i._parent = i;
                        var s = "filters"in i ? i.filters : ""
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
                            i.filter = n,
                            t.append('<div class="filter-search__entity-wrapper '),
                            1 != twig.attr(a, "index") && t.append("filter-search__entity-wrapper_contracted"),
                            t.append('" data-element-type="'),
                            t.append(twig.filter.escape(this.env_, twig.attr("filter"in i ? i.filter : "", "element_type"), "light_escape", null, !0)),
                            t.append('"><h3 class="filter-search__entity-header js-filter-search__entity-header"><span class="filter-search__entity-header-text h-text-overflow">'),
                            t.append(twig.filter.escape(this.env_, twig.attr("filter"in i ? i.filter : "", "name"), "light_escape", null, !0)),
                            t.append("</span></h3>"),
                            new (e._get("interface/filter/common/fields_wrapper.twig"))(this.env_).render_(t, twig.extend({}, i, {
                                filter: twig.attr("filter"in i ? i.filter : "", "params"),
                                filter_element_type_name: twig.attr("filter"in i ? i.filter : "", "type_name"),
                                filter_element_type: twig.attr("filter"in i ? i.filter : "", "element_type"),
                                filter_ns: twig.attr("filter"in i ? i.filter : "", "ns"),
                                has_title: !1
                            })),
                            t.append("</div>"),
                            ++a.index0,
                            ++a.index,
                            a.first = !1,
                            a.length && (--a.revindex0,
                            --a.revindex,
                            a.last = 0 === a.revindex0)
                        }
                        ), this)
                    } else
                        t.append('<div class="filter-search__entity-wrapper" '),
                        twig.attr("filter"in i ? i.filter : "", "element_type") && (t.append(' data-element-type="'),
                        t.append(twig.filter.escape(this.env_, twig.attr("filter"in i ? i.filter : "", "element_type"), "light_escape", null, !0)),
                        t.append('" ')),
                        t.append(">"),
                        new (e._get("interface/filter/common/fields_wrapper.twig"))(this.env_).render_(t, twig.extend({}, i, {
                            has_title: !1
                        })),
                        t.append("</div>")
                }
                ,
                t.prototype.block_filter_right_side = function(e, t, i) {
                    i = void 0 === i ? {} : i
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_filter_in_search_main"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/filter/in_search/main", t)
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
                    t.append('<div class="modal-create-widget__header-button"><h3 class="modal-create-widget__header"><input type="text" class="modal-create-widget__input-name" name="name" placeholder="'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Widget name"), "light_escape", null, !0)),
                    t.append('" value="'),
                    t.append(twig.filter.escape(this.env_, "name"in i ? i.name : "", "light_escape", null, !0)),
                    t.append('"/><input type="hidden" name="id" value="'),
                    t.append(twig.filter.escape(this.env_, "id"in i ? i.id : "", "light_escape", null, !0)),
                    t.append('"></h3><div class="modal-create-widget__button">'),
                    new (e._get("interface/controls/cancel_button.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        text: this.env_.filter("i18n", "Cancel")
                    })),
                    new (e._get("interface/controls/button.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        text: "id"in i && i.id ? this.env_.filter("i18n", "Apply") : this.env_.filter("i18n", "Create"),
                        class_name: "modal-create-widget__apply-btn",
                        disabled: !0
                    })),
                    t.append('</div></div><div class="modal-create-widget__types-widget '),
                    "is_timeline_allowed"in i && i.is_timeline_allowed && "is_diagram_allowed"in i && i.is_diagram_allowed && t.append("modal-create-widget__types-widget_columns"),
                    t.append('"><div class="modal-create-widget__type-wrapper"><input type="radio" class="hidden" value="1" '),
                    1 == ("type"in i ? i.type : "") && t.append('checked="checked"'),
                    t.append(' name="type" id="create-widget-number"><div class="modal-create-widget__type"><svg class="svg-icon svg-desktop--create_widget_modal--number-dims"><use xlink:href="#desktop--create_widget_modal--number"></use></svg><div class="modal-create-widget__type-name">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Number"), "light_escape", null, !0)),
                    t.append('</div><div class="modal-create-widget__type-desc">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Numeric representation of a data sample"), "light_escape", null, !0)),
                    t.append("</div></div></div>"),
                    "is_diagram_allowed"in i && i.is_diagram_allowed && (t.append('<div class="modal-create-widget__type-wrapper"><input type="radio" class="hidden" value="2" '),
                    2 == ("type"in i ? i.type : "") && t.append(' checked="checked" '),
                    t.append(' name="type" id="create-widget-diagram"><div class="modal-create-widget__type"><svg class="svg-icon svg-desktop--create_widget_modal--diagram-dims"><use xlink:href="#desktop--create_widget_modal--diagram"></use></svg><div class="modal-create-widget__type-name">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Chart"), "light_escape", null, !0)),
                    t.append('</div><div class="modal-create-widget__type-desc">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Comparison with indicator:"), "light_escape", null, !0)),
                    t.append("</div>"),
                    twig.filter.length(this.env_, "group_by_items"in i ? i.group_by_items : "") > 1 ? new (e._get("interface/controls/select.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        selected: "group_by"in i ? i.group_by : "",
                        items: "group_by_items"in i ? i.group_by_items : "",
                        name: "group_by",
                        class_name: "modal-create-widget__selected"
                    })) : (t.append('<input type="hidden" name="group_by" value="'),
                    t.append(twig.filter.escape(this.env_, twig.attr(twig.attr("group_by_items"in i ? i.group_by_items : "", 0, void 0, "array"), "id"), "light_escape", null, !0)),
                    t.append('"><span class="modal-create-widget__selected"><span class="modal-create-widget__selected_single">'),
                    t.append(twig.filter.escape(this.env_, twig.attr(twig.attr("group_by_items"in i ? i.group_by_items : "", 0, void 0, "array"), "option"), "light_escape", null, !0)),
                    t.append("</span></span>")),
                    t.append("</div></div>")),
                    "is_list_allowed"in i && i.is_list_allowed && (t.append('<div class="modal-create-widget__type-wrapper"><input type="radio" class="hidden" disabled value="3" '),
                    3 == ("type"in i ? i.type : "") && t.append(' checked="checked" '),
                    t.append(' name="type" id="create-widget-list"><div class="modal-create-widget__type"><svg class="svg-icon svg-desktop--create_widget_modal--list-dims"><use xlink:href="#desktop--create_widget_modal--list"></use></svg><div class="modal-create-widget__type-name">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "List"), "light_escape", null, !0)),
                    t.append('</div><div class="modal-create-widget__type-desc">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Table with filter results"), "light_escape", null, !0)),
                    t.append("</div></div></div>")),
                    "is_timeline_allowed"in i && i.is_timeline_allowed && (t.append('<div class="modal-create-widget__type-wrapper"><input type="radio" class="hidden" disabled value="15" '),
                    15 == ("type"in i ? i.type : "") && t.append(' checked="checked" '),
                    t.append(' name="type" id="create-widget-timeline"><div class="modal-create-widget__type"><svg class="svg-icon svg-desktop--create_widget_modal--timeline-dims"><use xlink:href="#desktop--create_widget_modal--timeline"></use></svg><div class="modal-create-widget__type-name">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Timeline"), "light_escape", null, !0)),
                    t.append('</div><div class="modal-create-widget__type-desc">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Filter data timeline"), "light_escape", null, !0)),
                    t.append("</div></div></div>")),
                    t.append("</div>"),
                    "id"in i && (t.append('<div class="modal-create-widget__delete"><svg class="svg-icon svg-common--trash-dims modal-create-widget__delete-icon"><use xlink:href="#common--trash"></use></svg><span class="modal-create-widget__delete-text">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Delete widget"), "light_escape", null, !0)),
                    t.append("</span></div>"))
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_filter_in_search_modal_create_widget"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/filter/in_search/modal_create_widget", t)
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
                    t.append('<div class="modal-create-widget_info '),
                    ("type"in i ? i.type : "") == twig.attr(twig.attr("constants"in i ? i.constants : "", "types"), "TOP_CHART") && t.append("modal-create-widget_info__top_chart"),
                    t.append('"><div class="modal-create-widget_info__header-wrapper"><h1 class="modal-create-widget_info__header">'),
                    t.append(twig.filter.escape(this.env_, "name"in i ? i.name : "", "light_escape", null, !0)),
                    t.append('</h1><div class="modal-create-widget__button">'),
                    new (e._get("interface/controls/cancel_button.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        text: this.env_.filter("i18n", "Cancel")
                    })),
                    t.append("</div></div>"),
                    ("type"in i ? i.type : "") == twig.attr(twig.attr("constants"in i ? i.constants : "", "types"), "TOP_CHART") && new (e._get("interface/filter/in_search/widgets_info/top_chart.twig"))(this.env_).render_(t, i),
                    t.append('<div class="modal-create-widget__delete modal-create-widget_info__delete"><svg class="svg-icon svg-common--trash-dims modal-create-widget__delete-icon"><use xlink:href="#common--trash"></use></svg><span class="modal-create-widget__delete-text">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Delete widget"), "light_escape", null, !0)),
                    t.append("</span></div></div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_filter_in_search_modal_info_widget"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/filter/in_search/modal_info_widget", t)
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
                    e.append('<div class="list-top-search__options list-top-search__options-showed"><div class="options-text" title="'),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("striptags", "text"in t ? t.text : ""), "light_escape", null, !0)),
                    e.append('">'),
                    e.append("text"in t ? t.text : ""),
                    e.append('</div><div class="option-delete js-filter-field-clear" data-input-name="'),
                    e.append(twig.filter.escape(this.env_, "name_input"in t ? t.name_input : "", "light_escape", null, !0)),
                    e.append('"><svg class="svg-icon svg-common--cross-close-dims"><use xlink:href="#common--cross-close"></use></svg></div></div>')
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_filter_in_search_option"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/filter/in_search/option", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e),
                    this.setBlocks({
                        upper_block: twig.bind(this.block_upper_block, this)
                    })
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(t) {
                    return e._get("interface/common/notice.twig")
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    this.getParent(t).render_(e, t, twig.extend({}, this.getBlocks(), i))
                }
                ,
                t.prototype.block_upper_block = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    e.append('<div class="notice__hover-wrapper notice__hover-wrapper_change_aggregation">'),
                    t.periodicity_disabled = !("periodicity_enabled"in t && t.periodicity_enabled),
                    t._parent = t;
                    var n = "field_map"in t ? t.field_map : "";
                    twig.forEach(n, (function(i, n) {
                        t._key = n,
                        t.field = i,
                        "next_price" == twig.attr("field"in t ? t.field : "", "code") && "periodicity_disabled"in t && t.periodicity_disabled || (e.append('<div data-aggregation="'),
                        e.append(twig.filter.escape(this.env_, twig.attr("field"in t ? t.field : "", "code"), "light_escape", null, !0)),
                        e.append('" class="button-input__context-menu__item '),
                        twig.attr("field"in t ? t.field : "", "code") == ("selected_aggregation_by"in t ? t.selected_aggregation_by : "") ? e.append("notice__text-without-decoration notice__text-without-decoration__selected") : e.append("notice__text-without-decoration"),
                        e.append('">'),
                        e.append(twig.filter.escape(this.env_, twig.attr("field"in t ? t.field : "", "lang"), "light_escape", null, !0)),
                        e.append("</div>"))
                    }
                    ), this),
                    e.append("</div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_filter_in_search_popover_change_aggregation"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/filter/in_search/popover_change_aggregation", t)
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
                    i.first_exists = !1,
                    i.PRESET_TYPE_ALL = 1,
                    i.PRESET_TYPE_EVENTS_ALL = 14,
                    i.PRESET_TYPE_TASKS_TODO_ONLY_MY = 19,
                    i._parent = i;
                    var s = twig.attr("filter"in i ? i.filter : "", "items")
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
                        i.key = s,
                        i.item = n,
                        twig.attr("item"in i ? i.item : "", "system_type") && (i.first_exists = !0),
                        twig.attr("item"in i ? i.item : "", "bookmark") ? new (e._get("interface/filter/bookmark.twig"))(this.env_).render_(t, twig.extend({}, i, {
                            item: "item"in i ? i.item : ""
                        })) : (t.append('<li class="filter__list__item '),
                        twig.attr("item"in i ? i.item : "", "system_type") && t.append("filter__list__item-system-preset"),
                        t.append(" "),
                        twig.attr("item"in i ? i.item : "", "can_edit") && t.append("filter__list__item-system-can-edit"),
                        t.append(" "),
                        !twig.contains(["PRESET_TYPE_ALL"in i ? i.PRESET_TYPE_ALL : "", "PRESET_TYPE_EVENTS_ALL"in i ? i.PRESET_TYPE_EVENTS_ALL : "", "PRESET_TYPE_TASKS_TODO_ONLY_MY"in i ? i.PRESET_TYPE_TASKS_TODO_ONLY_MY : ""], twig.attr("item"in i ? i.item : "", "system_type")) && "first_exists"in i && i.first_exists || t.append("filter__list__item-default"),
                        t.append(" "),
                        "recycle_bin" == ("key"in i ? i.key : "") && t.append("filter__common_settings__item-trash"),
                        t.append(" js-filter__common_settings__item-sortable js-filter-preset-link "),
                        twig.attr("item"in i ? i.item : "", "selected") && t.append(" filter__list__item-selected"),
                        t.append('" title="'),
                        t.append(twig.filter.escape(this.env_, twig.attr("item"in i ? i.item : "", "label"), "light_escape", null, !0)),
                        t.append('" data-id="'),
                        t.append(twig.filter.escape(this.env_, twig.attr("item"in i ? i.item : "", "id"), "light_escape", null, !0)),
                        t.append('" data-sort="'),
                        t.append(twig.filter.escape(this.env_, twig.attr("item"in i ? i.item : "", "sort"), "light_escape", null, !0)),
                        t.append('"><span class="filter_items__handle"><span class="icon icon-v-dots"></span></span>'),
                        "is_concat_url_preset"in i && i.is_concat_url_preset && (i.item = twig.filter.merge("item"in i ? i.item : "", {
                            link: twig.attr("filter"in i ? i.filter : "", "url") + "?" + twig.attr("item"in i ? i.item : "", "query")
                        })),
                        t.append('<a href="'),
                        t.append(twig.filter.escape(this.env_, twig.attr("item"in i ? i.item : "", "link"), "light_escape", null, !0)),
                        t.append('" class="js-navigate-link filter__list__item__link">'),
                        i.key_str = ("key"in i ? i.key : "") + "",
                        "leads_without_tasks" != ("key_str"in i ? i.key_str : "") && "customers_without_tasks" != ("key_str"in i ? i.key_str : "") || (t.append('<span class="icon icon-inline icon-clock-yellow filter__list__item__icon" title="'),
                        t.append(twig.filter.escape(this.env_, twig.attr("item"in i ? i.item : "", "label"), "light_escape", null, !0)),
                        t.append('"></span>')),
                        "leads_with_failed_tasks" != ("key_str"in i ? i.key_str : "") && "customers_with_failed_tasks" != ("key_str"in i ? i.key_str : "") || (t.append('<span class="icon icon-inline icon-clock-red filter__list__item__icon" title="'),
                        t.append(twig.filter.escape(this.env_, twig.attr("item"in i ? i.item : "", "label"), "light_escape", null, !0)),
                        t.append('"></span>')),
                        t.append('\x3c!----\x3e<span class="filter__list__item__inner">'),
                        t.append(twig.filter.escape(this.env_, twig.attr("item"in i ? i.item : "", "label"), "light_escape", null, !0)),
                        t.append('</span></a><span class="filter_items__edit filter_items__system-edit"><span class="filter_items__edit__btn"><span class="icon icon-pencil"></span></span>\x3c!----\x3e<span class="filter_items__edit__save"><span class="icon icon-accept-green"></span></span></span></li>'),
                        i.first_exists = !0),
                        ++a.index0,
                        ++a.index,
                        a.first = !1,
                        a.length && (--a.revindex0,
                        --a.revindex,
                        a.last = 0 === a.revindex0)
                    }
                    ), this),
                    t.append('<li class="filter__list__item filter__list__item-save js-filter-save hidden" title="'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Save"), "light_escape", null, !0)),
                    t.append('"><a href="#" class="js-navigate-link filter__list__item__link"><span class="filter__list__item__inner">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Save"), "light_escape", null, !0)),
                    t.append("</span></a></li>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_filter_in_search_presets"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/filter/in_search/presets", t)
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
                    i.logic_enums = [{
                        title: this.env_.filter("i18n", "And"),
                        value: "and",
                        id: "filter[segments_logic][and]"
                    }, {
                        title: this.env_.filter("i18n", "Or"),
                        value: "or",
                        id: "filter[segments_logic][or]"
                    }],
                    t.append('<h3 class="segments-filter__header"><span class="segments-filter__header-text">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Segments"), "light_escape", null, !0)),
                    t.append('<span class="segments-filter__header-clear js-segments-filter-header-clear"></span></span><span class="filter-search__entity-header-spacer"></span>'),
                    i.logic_selected = twig.attr("logic"in i ? i.logic : "", "value"),
                    "logic_selected"in i && i.logic_selected || (i.logic_selected = "and"),
                    t.append('<div class="segments-filter__toggler">'),
                    i._parent = i;
                    var s = "logic_enums"in i ? i.logic_enums : ""
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
                        i.enum = n,
                        new (e._get("interface/controls/radio.twig"))(this.env_).render_(t, twig.extend({}, i, {
                            class_name: "segments-filter__toggler-input",
                            selected: ("logic_selected"in i ? i.logic_selected : "") == twig.attr("enum"in i ? i.enum : "", "value"),
                            name: "filter[segments_logic]",
                            label: twig.attr("enum"in i ? i.enum : "", "title"),
                            value: twig.attr("enum"in i ? i.enum : "", "value"),
                            id: twig.attr("enum"in i ? i.enum : "", "id")
                        })),
                        ++a.index0,
                        ++a.index,
                        a.first = !1,
                        a.length && (--a.revindex0,
                        --a.revindex,
                        a.last = 0 === a.revindex0)
                    }
                    ), this),
                    t.append("</div></h3>"),
                    new (e._get("interface/controls/input.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        class_name: "segments-filter__input js-form-changes-skip",
                        placeholder: this.env_.filter("i18n", "Find segment"),
                        styled_input: !0
                    })),
                    t.append('<div class="segments-filter__list">'),
                    i._parent = i,
                    s = "list"in i ? i.list : "",
                    a = {
                        index0: 0,
                        index: 1,
                        first: !0
                    },
                    twig.countable(s) && (l = twig.count(s),
                    a.revindex0 = l - 1,
                    a.revindex = l,
                    a.length = l,
                    a.last = 1 === l),
                    twig.forEach(s, (function(n, s) {
                        i._key = s,
                        i.segment = n,
                        t.append('<label for="'),
                        t.append(twig.filter.escape(this.env_, "cbx_drop_" + twig.attr("segment"in i ? i.segment : "", "id"), "light_escape", null, !0)),
                        t.append('" data-id="'),
                        t.append(twig.filter.escape(this.env_, twig.attr("segment"in i ? i.segment : "", "id"), "light_escape", null, !0)),
                        t.append('" class="segments-filter__item"><input type="checkbox" class="segments-filter__item-checkbox hidden" name="filter[segments][]" id="'),
                        t.append(twig.filter.escape(this.env_, "cbx_drop_" + twig.attr("segment"in i ? i.segment : "", "id"), "light_escape", null, !0)),
                        t.append('" value="'),
                        t.append(twig.filter.escape(this.env_, twig.attr("segment"in i ? i.segment : "", "id"), "light_escape", null, !0)),
                        t.append('" '),
                        twig.contains("segments_selected"in i ? i.segments_selected : "", twig.attr("segment"in i ? i.segment : "", "id") + "") && t.append(' checked="checked" '),
                        t.append(">"),
                        new (e._get("interface/filter/customers/suggest_segments/item.twig"))(this.env_).render_(t, twig.extend({}, i, {
                            item: "segment"in i ? i.segment : "",
                            class_name: "suggest-segments__item_filter-list"
                        })),
                        t.append("</label>"),
                        ++a.index0,
                        ++a.index,
                        a.first = !1,
                        a.length && (--a.revindex0,
                        --a.revindex,
                        a.last = 0 === a.revindex0)
                    }
                    ), this),
                    t.append('<div class="segments-filter__item_empty" '),
                    0 != twig.filter.length(this.env_, "list"in i ? i.list : "") && t.append('style="display: none"'),
                    t.append(">"),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "You have no segments"), "light_escape", null, !0)),
                    t.append('</div><div class="segments-filter__item_empty-find"></div></div>')
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_filter_in_search_segments"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/filter/in_search/segments", t)
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
                    t.label = twig.attr("item"in t ? t.item : "", "label"),
                    "label"in t && t.label || (t.label = twig.attr("item"in t ? t.item : "", "title") ? twig.attr("item"in t ? t.item : "", "title") : twig.attr("item"in t ? t.item : "", "name")),
                    e.append('<li class="multisuggest__list-item multisuggest__suggest-item multisuggest__linked_entity_list-item js-multisuggest-item" data-title="'),
                    e.append(twig.filter.escape(this.env_, "label"in t ? t.label : "", "light_escape", null, !0)),
                    e.append('" data-id="'),
                    e.append(twig.filter.escape(this.env_, twig.attr("item"in t ? t.item : "", "id"), "light_escape", null, !0)),
                    e.append('"><span class="multisuggest__linked_entity_list-item-label">'),
                    e.append(twig.filter.escape(this.env_, "label"in t ? t.label : "", "light_escape", null, !0)),
                    e.append('&nbsp;</span><input type="checkbox" '),
                    twig.attr("item"in t ? t.item : "", "id") && (e.append('id="filter_linked_entity_'),
                    e.append(twig.filter.escape(this.env_, twig.attr("item"in t ? t.item : "", "id"), "light_escape", null, !0)),
                    e.append('"')),
                    e.append(' name="'),
                    e.append(twig.filter.escape(this.env_, "input_name"in t ? t.input_name : "", "light_escape", null, !0)),
                    e.append('" class="filter_linked_entity__checkbox" value="'),
                    e.append(twig.filter.escape(this.env_, twig.attr("item"in t ? t.item : "", "id"), "light_escape", null, !0)),
                    e.append('" checked="checked" style="display:none;" /></li>')
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_filter_linked_entity_item"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/filter/linked_entity/item", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e),
                    this.setBlocks({
                        suggest: twig.bind(this.block_suggest, this)
                    })
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(t) {
                    return e._get("interface/controls/multisuggest/wrapper.twig")
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    t.class_name = "filter-linked_entity-items",
                    t.item_tmpl = "interface/filter/linked_entity/item.twig",
                    this.getParent(t).render_(e, t, twig.extend({}, this.getBlocks(), i))
                }
                ,
                t.prototype.block_suggest = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    e.append('<div class="multisuggest__suggest-wrapper suggest-manager '),
                    e.append(twig.filter.escape(this.env_, "suggest_class_name"in t ? t.suggest_class_name : "", "light_escape", null, !0)),
                    e.append('" style="display: none" data-is-suggest="y" data-multisuggest-id="'),
                    e.append(twig.filter.escape(this.env_, "suggest_id"in t ? t.suggest_id : "", "light_escape", null, !0)),
                    e.append('"><div class="multisuggest__suggest js-multisuggest-suggest custom-scroll"></div></div>')
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_filter_linked_entity_items"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/filter/linked_entity/items", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e),
                    this.setBlocks({
                        suggest: twig.bind(this.block_suggest, this)
                    })
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(t) {
                    return e._get("interface/controls/multisuggest/wrapper.twig")
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    t.class_name = "filter-linked_entity-items",
                    t.item_tmpl = "interface/filter/linked_entity/item.twig",
                    t.inner_item_tmpl = "interface/filter/linked_entity/item.twig",
                    t.without_input = !0,
                    this.getParent(t).render_(e, t, twig.extend({}, this.getBlocks(), i))
                }
                ,
                t.prototype.block_suggest = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    e.append('<div class="multisuggest__suggest-wrapper suggest-manager '),
                    e.append(twig.filter.escape(this.env_, "suggest_class_name"in t ? t.suggest_class_name : "", "light_escape", null, !0)),
                    e.append('" style="display: none" data-is-suggest="y" data-multisuggest-id="'),
                    e.append(twig.filter.escape(this.env_, "suggest_id"in t ? t.suggest_id : "", "light_escape", null, !0)),
                    e.append('"><div class="multisuggest__suggest js-multisuggest-suggest custom-scroll"></div></div>')
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_filter_linked_entity_select"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/filter/linked_entity/select", t)
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
                    t.label = twig.attr("item"in t ? t.item : "", "label"),
                    "label"in t && t.label || (t.label = twig.attr("item"in t ? t.item : "", "title") ? twig.attr("item"in t ? t.item : "", "title") : twig.attr("item"in t ? t.item : "", "name")),
                    e.append('<li class="multisuggest__list-item multisuggest__suggest-item multisuggest__products_list-item js-multisuggest-item" data-title="'),
                    e.append(twig.filter.escape(this.env_, "label"in t ? t.label : "", "light_escape", null, !0)),
                    e.append('" data-id="'),
                    e.append(twig.filter.escape(this.env_, twig.attr("item"in t ? t.item : "", "id"), "light_escape", null, !0)),
                    e.append('" data-sku="'),
                    e.append(twig.filter.escape(this.env_, twig.attr("item"in t ? t.item : "", "sku"), "light_escape", null, !0)),
                    e.append('"><span class="multisuggest__products_list-item-label">'),
                    e.append(twig.filter.escape(this.env_, "label"in t ? t.label : "", "light_escape", null, !0)),
                    e.append("</span>"),
                    twig.attr("item"in t ? t.item : "", "sku") && (e.append('<span class="multisuggest__products_list-item-sku">&nbsp;'),
                    e.append(twig.filter.escape(this.env_, twig.attr("item"in t ? t.item : "", "sku"), "light_escape", null, !0)),
                    e.append("</span>")),
                    e.append('<input type="checkbox" '),
                    twig.attr("item"in t ? t.item : "", "id") && (e.append('id="filter_product_'),
                    e.append(twig.filter.escape(this.env_, twig.attr("item"in t ? t.item : "", "id"), "light_escape", null, !0)),
                    e.append('"')),
                    e.append(' name="'),
                    "input_name"in t && t.input_name ? e.append(twig.filter.escape(this.env_, "input_name"in t ? t.input_name : "", "light_escape", null, !0)) : e.append("filter[products][]"),
                    e.append('" class="filter_products__checkbox" value="'),
                    e.append(twig.filter.escape(this.env_, twig.attr("item"in t ? t.item : "", "id"), "light_escape", null, !0)),
                    e.append('" checked="checked" style="display:none;" /></li>')
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_filter_products_item"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/filter/products/item", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e),
                    this.setBlocks({
                        suggest: twig.bind(this.block_suggest, this)
                    })
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(t) {
                    return e._get("interface/controls/multisuggest/wrapper.twig")
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    t.class_name = "filter-products-items",
                    t.item_tmpl = "interface/filter/products/item.twig",
                    this.getParent(t).render_(e, t, twig.extend({}, this.getBlocks(), i))
                }
                ,
                t.prototype.block_suggest = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    e.append('<div class="multisuggest__suggest-wrapper suggest-manager '),
                    e.append(twig.filter.escape(this.env_, "suggest_class_name"in t ? t.suggest_class_name : "", "light_escape", null, !0)),
                    e.append('" style="display: none" data-is-suggest="y" data-multisuggest-id="'),
                    e.append(twig.filter.escape(this.env_, "suggest_id"in t ? t.suggest_id : "", "light_escape", null, !0)),
                    e.append('"><div class="multisuggest__suggest js-multisuggest-suggest custom-scroll"></div></div>')
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_filter_products_items"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/filter/products/items", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e),
                    this.setBlocks({
                        suggest: twig.bind(this.block_suggest, this)
                    })
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(t) {
                    return e._get("interface/controls/multisuggest/wrapper.twig")
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    t.class_name = "filter-products-items",
                    t.item_tmpl = "interface/filter/products/item.twig",
                    t.inner_item_tmpl = "interface/filter/products/item.twig",
                    t.without_input = !0,
                    this.getParent(t).render_(e, t, twig.extend({}, this.getBlocks(), i))
                }
                ,
                t.prototype.block_suggest = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    e.append('<div class="multisuggest__suggest-wrapper suggest-manager '),
                    e.append(twig.filter.escape(this.env_, "suggest_class_name"in t ? t.suggest_class_name : "", "light_escape", null, !0)),
                    e.append('" style="display: none" data-is-suggest="y" data-multisuggest-id="'),
                    e.append(twig.filter.escape(this.env_, "suggest_id"in t ? t.suggest_id : "", "light_escape", null, !0)),
                    e.append('"><div class="multisuggest__suggest js-multisuggest-suggest custom-scroll"></div></div>')
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_filter_products_select"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/filter/products/select", t)
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
                    t.label = twig.attr("item"in t ? t.item : "", "label"),
                    "label"in t && t.label || (t.label = twig.attr("item"in t ? t.item : "", "title") ? twig.attr("item"in t ? t.item : "", "title") : twig.attr("item"in t ? t.item : "", "name")),
                    t.tag_styles = "",
                    twig.attr("item"in t ? t.item : "", "color") && (t.tag_styles = "border-color: #" + twig.attr("item"in t ? t.item : "", "color") + "; background-color: " + this.env_.filter("hex2rgba", twig.attr("item"in t ? t.item : "", "color"), .3)),
                    e.append('<li class="multisuggest__list-item js-multisuggest-item" data-title="'),
                    e.append(twig.filter.escape(this.env_, "label"in t ? t.label : "", "light_escape", null, !0)),
                    e.append('" data-id="'),
                    e.append(twig.filter.escape(this.env_, twig.attr("item"in t ? t.item : "", "id"), "light_escape", null, !0)),
                    e.append('" '),
                    "tag_styles"in t && t.tag_styles && (e.append('data-color="'),
                    e.append(twig.filter.escape(this.env_, twig.attr("item"in t ? t.item : "", "color"), "light_escape", null, !0)),
                    e.append('" style="'),
                    e.append(twig.filter.escape(this.env_, "tag_styles"in t ? t.tag_styles : "", "light_escape", null, !0)),
                    e.append('"')),
                    e.append(">"),
                    e.append(twig.filter.escape(this.env_, "label"in t ? t.label : "", "light_escape", null, !0)),
                    e.append('<input type="checkbox" '),
                    twig.attr("item"in t ? t.item : "", "id") && (e.append('id="filter_tag_'),
                    e.append(twig.filter.escape(this.env_, twig.attr("item"in t ? t.item : "", "id"), "light_escape", null, !0)),
                    e.append('"')),
                    e.append(' name="'),
                    "input_name"in t && t.input_name ? e.append(twig.filter.escape(this.env_, "input_name"in t ? t.input_name : "", "light_escape", null, !0)) : e.append("tag[]"),
                    e.append('" class="filter_tags__checkbox" value="'),
                    e.append(twig.filter.escape(this.env_, twig.attr("item"in t ? t.item : "", "id"), "light_escape", null, !0)),
                    e.append('" checked="checked" style="display:none;" /></li>')
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_filter_tags_item"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/filter/tags/item", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e),
                    this.setBlocks({
                        suggest: twig.bind(this.block_suggest, this),
                        loader: twig.bind(this.block_loader, this)
                    })
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(t) {
                    return e._get("interface/controls/multisuggest/wrapper.twig")
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    t.class_name = "filter-tags-items",
                    t.item_tmpl = "interface/filter/tags/item.twig",
                    t.without_input = !0,
                    this.getParent(t).render_(e, t, twig.extend({}, this.getBlocks(), i))
                }
                ,
                t.prototype.block_suggest = function(e, t, i) {
                    i = void 0 === i ? {} : i
                }
                ,
                t.prototype.block_loader = function(e, t, i) {
                    i = void 0 === i ? {} : i
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_filter_tags_items"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/filter/tags/items", t)
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
                    return e._get("interface/common/fast_tags/wrapper.twig")
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    t.inner_item_tmpl = "interface/controls/multisuggest/item_with_head.twig",
                    this.getParent(t).render_(e, t, twig.extend({}, this.getBlocks(), i))
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_filter_tags_wrapper"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/filter/tags/wrapper", t)
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
                    return e._get("interface/common/tags/empty_plug.twig")
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    t.text = this.env_.filter("i18n", "You don't have connected tags"),
                    this.getParent(t).render_(e, t, twig.extend({}, this.getBlocks(), i))
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_filter_tags_lib_empty_plug"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/filter/tags_lib/empty_plug", t)
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
                    i.tags_logic_enums = [{
                        title: this.env_.filter("i18n", "And"),
                        value: "and",
                        id: twig.attr("tags_logic"in i ? i.tags_logic : "", "name") + "[and]"
                    }, {
                        title: this.env_.filter("i18n", "Or"),
                        value: "or",
                        id: twig.attr("tags_logic"in i ? i.tags_logic : "", "name") + "[or]"
                    }],
                    t.append('<h3 class="filter-search__entity-header tags-lib__header '),
                    0 == twig.attr("tags_logic"in i ? i.tags_logic : "", "disabled") && t.append("tags-lib__header_tags-logic-visible"),
                    t.append('"><span class="filter-search__entity-header-text">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Tags"), "light_escape", null, !0)),
                    t.append('<span class="tags-lib__header-deselect js-tags-lib__header-deselect"></span></span><span class="filter-search__entity-header-spacer"></span>'),
                    "manage_tags"in i && i.manage_tags && (t.append('<span class="tags-lib__link-text tags-lib__link-text_manage js-tags-lib__manage">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Manage"), "light_escape", null, !0)),
                    t.append("</span>")),
                    twig.attr("tags_logic"in i ? i.tags_logic : "", "name") && twig.attr("tags_logic"in i ? i.tags_logic : "", "value") && "has_tags"in i && i.has_tags) {
                        t.append('<div class="tags-lib__tags-logic-holder card-holder__fields">'),
                        i._parent = i;
                        var s = "tags_logic_enums"in i ? i.tags_logic_enums : ""
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
                            i.enum = n,
                            new (e._get("interface/controls/radio.twig"))(this.env_).render_(t, twig.extend({}, i, {
                                class_name: "tags-lib__tags-logic-input",
                                name: twig.attr("tags_logic"in i ? i.tags_logic : "", "name"),
                                disabled: twig.attr("tags_logic"in i ? i.tags_logic : "", "disabled"),
                                selected: twig.attr("tags_logic"in i ? i.tags_logic : "", "value") == twig.attr("enum"in i ? i.enum : "", "value"),
                                label: twig.attr("enum"in i ? i.enum : "", "title"),
                                value: twig.attr("enum"in i ? i.enum : "", "value"),
                                id: twig.attr("enum"in i ? i.enum : "", "id")
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
                    t.append("</h3>"),
                    new (e._get("interface/common/suggest/index.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        class_name: "tags-lib__suggest",
                        suggest_class_name: "tags-lib__items-suggest",
                        placeholder: this.env_.filter("i18n", "Find tags"),
                        no_scroll: !0
                    }))
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_filter_tags_lib_index"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/filter/tags_lib/index", t)
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
                    t.tag_styles = "",
                    "color"in t && t.color && (t.tag_styles = "border-color: #" + ("color"in t ? t.color : "") + "; background-color: " + this.env_.filter("hex2rgba", "color"in t ? t.color : "", .3)),
                    e.append('<div class="tags-lib__item-name js-tags-lib__item-name h-text-overflow" title="'),
                    e.append(twig.filter.escape(this.env_, "name"in t ? t.name : "", "light_escape", null, !0)),
                    e.append('" '),
                    "tag_styles"in t && t.tag_styles && (e.append('style="'),
                    e.append(twig.filter.escape(this.env_, "tag_styles"in t ? t.tag_styles : "", "light_escape", null, !0)),
                    e.append('" data-color="'),
                    e.append(twig.filter.escape(this.env_, "color"in t ? t.color : "", "light_escape", null, !0)),
                    e.append('"')),
                    e.append(">"),
                    e.append(twig.filter.escape(this.env_, "name"in t ? t.name : "", "light_escape", null, !0)),
                    e.append('<span class="tags-lib__item-icon tags-lib__item-icon-deselect"></span></div>'),
                    "selected"in t && t.selected && (e.append('<input type="checkbox" name="'),
                    "input_name"in t && t.input_name ? e.append(twig.filter.escape(this.env_, "input_name"in t ? t.input_name : "", "light_escape", null, !0)) : e.append("tag[]"),
                    e.append('" class="filter_tags__checkbox" value="'),
                    e.append(twig.filter.escape(this.env_, "id"in t ? t.id : "", "light_escape", null, !0)),
                    e.append('" checked="checked" style="display:none;">')),
                    "total"in t && (e.append('<div class="tags-lib__item-frequency">'),
                    e.append(twig.filter.escape(this.env_, "total"in t ? t.total : "", "light_escape", null, !0)),
                    e.append("</div>"))
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_filter_tags_lib_item"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/filter/tags_lib/item", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e),
                    this.setBlocks({
                        before_items: twig.bind(this.block_before_items, this),
                        suggest: twig.bind(this.block_suggest, this),
                        loader: twig.bind(this.block_loader, this)
                    })
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(t) {
                    return e._get("interface/controls/multisuggest/wrapper.twig")
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    t.item_tmpl = "interface/filter/customers/suggest_segments/item.twig",
                    t.inner_item_tmpl = "interface/filter/customers/suggest_segments/item.twig",
                    t.class_name = "suggest-segments",
                    "modify_class"in t && t.modify_class && (t.class_name = ("class_name"in t ? t.class_name : "") + " " + ("modify_class"in t ? t.modify_class : "")),
                    this.getParent(t).render_(e, t, twig.extend({}, this.getBlocks(), i))
                }
                ,
                t.prototype.block_before_items = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    new (e._get("interface/filter/customers/suggest_segments/item.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        item: {
                            name: "+" + ("placeholder_item_text"in i ? twig.filter.def("placeholder_item_text"in i ? i.placeholder_item_text : "", this.env_.filter("i18n", "Add segment")) : this.env_.filter("i18n", "Add segment"))
                        },
                        class_name: 0 == twig.filter.length(this.env_, "items"in i ? i.items : "") ? "suggest-segments__placeholder-item" : "hidden suggest-segments__placeholder-item"
                    }))
                }
                ,
                t.prototype.block_suggest = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    e.append('<div class="multisuggest__suggest-wrapper suggest-manager suggest-segments__suggest" data-is-suggest="y" data-multisuggest-id="'),
                    e.append(twig.filter.escape(this.env_, "suggest_id"in t ? t.suggest_id : "", "light_escape", null, !0)),
                    e.append('"><div class="multisuggest__suggest js-multisuggest-suggest custom-scroll"></div></div>')
                }
                ,
                t.prototype.block_loader = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    "loader_hidden"in t && t.loader_hidden || e.append(this.renderParentBlock("loader", t, i))
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_filter_customers_suggest_segments_index"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/filter/customers/suggest_segments/index", t)
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
                    t.color = twig.attr("item"in t ? t.item : "", "color"),
                    "color"in t && t.color || (t.colors = ["10599d", "2176ff", "006acc", "07a0c3", "247ba0", "177e89", "046e8f", "598381", "0c7c59", "495f41", "00a44b", "08605f", "bf2600", "06d6a0", "e14945", "79b473", "ae003f", "a2ad59", "cd0f53", "8e936d", "832161", "2e5339", "bf126f", "6f7c12", "ff5376", "dd1c1a", "bb304e", "631d76", "9d2b32", "4a001f", "b118c8", "6a0f49", "6610f2", "b38a58", "8963ba", "4b3666", "932f6d", "6b2d5c", "6461a0", "4f517d"],
                    t.color = "#" + twig.functions.random(this.env_, "colors"in t ? t.colors : "")),
                    twig.attr("item"in t ? t.item : "", "name") && (t.name = twig.attr("item"in t ? t.item : "", "name")),
                    "name"in t && t.name || (t.name = twig.attr("item"in t ? t.item : "", "title")),
                    t.style = "color: " + ("color"in t ? t.color : "") + "; border: 1px solid " + ("color"in t ? t.color : "") + ";",
                    e.append('<li class="'),
                    e.append(twig.filter.escape(this.env_, "class_name"in t ? t.class_name : "", "light_escape", null, !0)),
                    e.append(" suggest-segments__line-item "),
                    ("is_suggest_item"in t && t.is_suggest_item || "new" == twig.attr("item"in t ? t.item : "", "id")) && e.append(" js-multisuggest-item "),
                    "is_list_item"in t && t.is_list_item && e.append(" suggest-segments__list-item "),
                    e.append('" '),
                    "rest"in t && t.rest && (e.append(' data-rest="'),
                    e.append(twig.filter.escape(this.env_, "rest"in t ? t.rest : "", "light_escape", null, !0)),
                    e.append('" ')),
                    e.append(' data-with-margin="true" data-name="'),
                    e.append(twig.filter.escape(this.env_, "new" == twig.attr("item"in t ? t.item : "", "id") ? this.env_.filter("striptags", twig.attr("item"in t ? t.item : "", "name")) : this.env_.filter("striptags", "name"in t ? t.name : ""), "light_escape", null, !0)),
                    e.append('" data-count-label="'),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("numeral", this.env_.filter("i18n", "customer,customers,customers"), 10) + ": ", "light_escape", null, !0)),
                    e.append('" data-count="'),
                    e.append(twig.filter.escape(this.env_, twig.attr("item"in t ? t.item : "", "customers_count"), "light_escape", null, !0)),
                    e.append('" data-id="'),
                    e.append(twig.filter.escape(this.env_, twig.attr("item"in t ? t.item : "", "id"), "light_escape", null, !0)),
                    e.append('" data-title-origin="'),
                    e.append(twig.filter.escape(this.env_, twig.attr("item"in t ? t.item : "", "title_origin"), "light_escape", null, !0)),
                    e.append('" data-color="'),
                    e.append(twig.filter.escape(this.env_, "color"in t ? t.color : "", "light_escape", null, !0)),
                    e.append('" data-title="'),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("striptags", "name"in t ? t.name : ""), "light_escape", null, !0)),
                    e.append('"><div class="suggest-segments__item '),
                    "new" == twig.attr("item"in t ? t.item : "", "id") && e.append("suggest-segments__item_new"),
                    e.append('" style="'),
                    e.append(twig.filter.escape(this.env_, "style"in t ? t.style : "", "light_escape", null, !0)),
                    e.append('"><div class="suggest-segments__item_background" style="background: '),
                    e.append(twig.filter.escape(this.env_, "color"in t ? t.color : "", "light_escape", null, !0)),
                    e.append(';"></div>'),
                    "new" == twig.attr("item"in t ? t.item : "", "id") && e.append('<b style="font-family: Helvetica; font-size: 8px;">⏎</b>'),
                    e.append('<span class="suggest-segments__name" title="'),
                    e.append(twig.filter.escape(this.env_, twig.filter.capitalize(this.env_, twig.filter.first(this.env_, this.env_.filter("striptags", "name"in t ? t.name : ""))) + this.env_.filter("slice", this.env_, twig.filter.lower(this.env_, this.env_.filter("striptags", "name"in t ? t.name : "")), 1), "light_escape", null, !0)),
                    e.append('">'),
                    e.append(twig.filter.escape(this.env_, twig.filter.capitalize(this.env_, twig.filter.first(this.env_, this.env_.filter("striptags", "name"in t ? t.name : ""))) + this.env_.filter("slice", this.env_, twig.filter.lower(this.env_, this.env_.filter("striptags", "name"in t ? t.name : "")), 1), "light_escape", null, !0)),
                    e.append("</span></div>"),
                    "new" != twig.attr("item"in t ? t.item : "", "id") && (e.append('<span class="suggest-segments__count"><span class="suggest-segments__count-label">'),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("numeral", this.env_.filter("i18n", "customer,customers,customers"), 10), "light_escape", null, !0)),
                    e.append(":&nbsp;</span>"),
                    e.append(twig.filter.escape(this.env_, twig.attr("item"in t ? t.item : "", "customers_count"), "light_escape", null, !0)),
                    e.append("</span>")),
                    twig.attr("item"in t ? t.item : "", "input_name") && (e.append('<input type="checkbox" checked="checked" class="hidden" name="'),
                    e.append(twig.filter.escape(this.env_, twig.attr("item"in t ? t.item : "", "input_name"), "light_escape", null, !0)),
                    e.append('" id="cbx_drop_'),
                    e.append(twig.filter.escape(this.env_, twig.attr("item"in t ? t.item : "", "id"), "light_escape", null, !0)),
                    e.append('" value="'),
                    e.append(twig.filter.escape(this.env_, twig.attr("item"in t ? t.item : "", "id"), "light_escape", null, !0)),
                    e.append('">')),
                    e.append("</li>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_filter_customers_suggest_segments_item"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/filter/customers/suggest_segments/item", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e),
                    this.setBlocks({
                        suggest: twig.bind(this.block_suggest, this),
                        loader: twig.bind(this.block_loader, this)
                    })
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(t) {
                    return e._get("interface/controls/multisuggest/wrapper.twig")
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    t.item_tmpl = "interface/filter/customers/suggest_segments/item.twig",
                    t.inner_item_tmpl = "interface/filter/customers/suggest_segments/item.twig",
                    t.without_input = !0,
                    this.getParent(t).render_(e, t, twig.extend({}, this.getBlocks(), i))
                }
                ,
                t.prototype.block_suggest = function(e, t, i) {
                    i = void 0 === i ? {} : i
                }
                ,
                t.prototype.block_loader = function(e, t, i) {
                    i = void 0 === i ? {} : i
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_filter_customers_suggest_segments_suggest_segment_items"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/filter/customers/suggest_segments/suggest_segment_items", t)
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
                    e.append('<div class="search-results__row-section">'),
                    "leads_pipeline_type"in t && t.leads_pipeline_type ? (e.append('<div class="search-results__row-section__left-column">'),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "leads_pipeline_type"in t ? t.leads_pipeline_type : ""), "light_escape", null, !0)),
                    e.append("</div>")) : (e.append(" "),
                    e.append('<div class="search-results__row-section__left-column">'),
                    e.append(twig.filter.escape(this.env_, "caption"in t ? t.caption : "", "light_escape", null, !0)),
                    e.append("</div>")),
                    e.append('<div class="search-results__row-section__right-column">'),
                    t._parent = t;
                    var n = "results"in t ? t.results : ""
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
                        if (t._key = n,
                        t.result = i,
                        e.append(" "),
                        t.i = twig.attr(s, "index"),
                        e.append(" "),
                        twig.attr("result"in t ? t.result : "", "link_path") ? t.final_link_path = twig.attr("result"in t ? t.result : "", "link_path") : t.final_link_path = "link_path"in t ? t.link_path : "",
                        e.append('<a href="'),
                        e.append(twig.filter.escape(this.env_, "final_link_path"in t ? t.final_link_path : "", "light_escape", null, !0)),
                        e.append(twig.filter.escape(this.env_, twig.attr("result"in t ? t.result : "", "id"), "light_escape", null, !0)),
                        e.append('" class="js-navigate-link-search-suggest">'),
                        e.append('<div class="search-results__row-section__right-column__result js-search-suggest-result"><div class="search-results__row-section__right-column__result__nowrap-container">'),
                        "el_sequence"in t && t.el_sequence) {
                            var a = "el_sequence"in t ? t.el_sequence : ""
                              , l = {
                                parent: s,
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
                            twig.forEach(a, (function(i, n) {
                                t._key = n,
                                t.el_name = i,
                                e.append(" "),
                                t.j = twig.attr(l, "index"),
                                e.append(" "),
                                "pipeline_name" == ("el_name"in t ? t.el_name : "") ? (twig.attr(twig.attr("result"in t ? t.result : "", "status"), "color") ? t.status_color = twig.attr(twig.attr("result"in t ? t.result : "", "status"), "color") : t.status_color = "#ccc",
                                1 == ("pipelines_count"in t ? t.pipelines_count : "") || "Current Pipeline" == ("leads_pipeline_type"in t ? t.leads_pipeline_type : "") || "Current" == ("leads_pipeline_type"in t ? t.leads_pipeline_type : "") ? (e.append('<div class="lead-status-only" style="background-color:'),
                                e.append(twig.filter.escape(this.env_, "status_color"in t ? t.status_color : "", "light_escape", null, !0)),
                                e.append(';">'),
                                e.append(twig.filter.escape(this.env_, twig.attr(twig.attr("result"in t ? t.result : "", "status"), "name"), "light_escape", null, !0)),
                                e.append("</div>")) : (e.append('<div class="sales-funnel"><div class="lead-pipeline">'),
                                e.append(twig.filter.escape(this.env_, twig.attr("result"in t ? t.result : "", "el_name"in t ? t.el_name : "", void 0, "array"), "light_escape", null, !0)),
                                e.append('</div><div class="lead-status" style="background-color:'),
                                e.append(twig.filter.escape(this.env_, "status_color"in t ? t.status_color : "", "light_escape", null, !0)),
                                e.append(';">'),
                                e.append(twig.filter.escape(this.env_, twig.attr(twig.attr("result"in t ? t.result : "", "status"), "name"), "light_escape", null, !0)),
                                e.append("</div></div>"))) : "," == ("el_name"in t ? t.el_name : "") || ("origin_icon" == ("el_name"in t ? t.el_name : "") ? twig.attr("result"in t ? t.result : "", "el_name"in t ? t.el_name : "", void 0, "array") && (e.append('<span class="search-results__row-section__right-column__result__element__origin_icon"><img src="'),
                                e.append(twig.filter.escape(this.env_, twig.attr("result"in t ? t.result : "", "el_name"in t ? t.el_name : "", void 0, "array"), "light_escape", null, !0)),
                                e.append('"></span>')) : "last_message" == ("el_name"in t ? t.el_name : "") ? (e.append('<span class="search-results__row-section__right-column__result__element search-results__row-section__right-column__result__element__last_message">'),
                                twig.attr("result"in t ? t.result : "", "last_message_author_name", void 0, "array") && (e.append(twig.filter.escape(this.env_, twig.attr("result"in t ? t.result : "", "last_message_author_name", void 0, "array"), "light_escape", null, !0)),
                                e.append(" "),
                                twig.attr("result"in t ? t.result : "", "last_message_author_caption", void 0, "array") && (e.append("("),
                                e.append(twig.filter.escape(this.env_, twig.attr("result"in t ? t.result : "", "last_message_author_caption", void 0, "array"), "light_escape", null, !0)),
                                e.append(")")),
                                e.append(":")),
                                e.append(" "),
                                e.append(twig.filter.escape(this.env_, twig.attr("result"in t ? t.result : "", "el_name"in t ? t.el_name : "", void 0, "array"), "light_escape", null, !0)),
                                e.append("</span>")) : "talk_id" == ("el_name"in t ? t.el_name : "") ? (e.append('<span class="search-results__row-section__right-column__result__element">№ A'),
                                e.append(twig.filter.escape(this.env_, twig.attr("result"in t ? t.result : "", "el_name"in t ? t.el_name : "", void 0, "array"), "light_escape", null, !0)),
                                e.append("</span>")) : twig.attr("result"in t ? t.result : "", "el_name"in t ? t.el_name : "", void 0, "array") && ("contact_name" == ("el_name"in t ? t.el_name : "") ? e.append('<span class="search-results__row-section__right-column__result__element"style="color: var(--palette-text-secondary-light);">') : e.append('<span class="search-results__row-section__right-column__result__element">'),
                                e.append(twig.filter.escape(this.env_, twig.attr("result"in t ? t.result : "", "el_name"in t ? t.el_name : "", void 0, "array"), "light_escape", null, !0)),
                                t.next_two_el_name = twig.attr("el_sequence"in t ? t.el_sequence : "", Number("j"in t ? t.j : "") + Number(1), void 0, "array"),
                                "," == twig.attr("el_sequence"in t ? t.el_sequence : "", "j"in t ? t.j : "", void 0, "array") && twig.attr("result"in t ? t.result : "", "next_two_el_name"in t ? t.next_two_el_name : "", void 0, "array") && e.append(","),
                                e.append("</span>"))),
                                ++l.index0,
                                ++l.index,
                                l.first = !1,
                                l.length && (--l.revindex0,
                                --l.revindex,
                                l.last = 0 === l.revindex0)
                            }
                            ), this),
                            e.append(" ")
                        }
                        e.append("</div></div></a>"),
                        ++s.index0,
                        ++s.index,
                        s.first = !1,
                        s.length && (--s.revindex0,
                        --s.revindex,
                        s.last = 0 === s.revindex0)
                    }
                    ), this),
                    ("count_results"in t ? t.count_results : "") > 5 && (e.append('<a href="'),
                    e.append(twig.filter.escape(this.env_, "show_all_link_path"in t ? t.show_all_link_path : "", "light_escape", null, !0)),
                    e.append('" class="js-navigate-link-search-suggest"><div class="search-results__row-section__right-column__result__show-all js-search-suggest-result"><span class="show-all-link">'),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Show all"), "light_escape", null, !0)),
                    e.append(" ("),
                    e.append(twig.filter.escape(this.env_, "count_results"in t ? t.count_results : "", "light_escape", null, !0)),
                    e.append(")</span></div></a>")),
                    "is_no_results_message"in t && t.is_no_results_message && (e.append('<div class="search-results__row-section__right-column__result search-results__row-section__right-column__result__no-result">'),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "No results were found for this search."), "light_escape", null, !0)),
                    e.append("</div>")),
                    e.append("</div></div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_filter_in_search_suggest_category"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/filter/in_search/suggest/category", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e),
                    this.setBlocks({
                        leads_current_pipeline: twig.bind(this.block_leads_current_pipeline, this),
                        leads_other: twig.bind(this.block_leads_other, this),
                        contacts: twig.bind(this.block_contacts, this),
                        companies: twig.bind(this.block_companies, this),
                        customers: twig.bind(this.block_customers, this),
                        talks: twig.bind(this.block_talks, this)
                    })
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(e) {
                    return !1
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    e.append('<div id="search-suggest-drop-down-menu_container">'),
                    "message"in t && t.message ? (e.append('<div class="search-results__row-section"><div class="search-results__row-section__right-column"><div class="search-results__row-section__right-column__result no-result js-search-suggest-result">'),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Unfortunately, no results were found for this search."), "light_escape", null, !0)),
                    e.append("</div></div></div>")) : (t.show_twig_block = !1,
                    "show_twig_block"in t && t.show_twig_block && e.append(this.renderBlock("leads_current_pipeline", t, i)),
                    "show_twig_block"in t && t.show_twig_block && e.append(this.renderBlock("leads_other", t, i)),
                    "show_twig_block"in t && t.show_twig_block && e.append(this.renderBlock("contacts", t, i)),
                    "show_twig_block"in t && t.show_twig_block && e.append(this.renderBlock("companies", t, i)),
                    "show_twig_block"in t && t.show_twig_block && e.append(this.renderBlock("customers", t, i)),
                    "show_twig_block"in t && t.show_twig_block && e.append(this.renderBlock("talks", t, i)),
                    "contacts" == ("current_location_keyword"in t ? t.current_location_keyword : "") ? (e.append(this.renderBlock("contacts", t, i)),
                    e.append(this.renderBlock("leads_current_pipeline", t, i)),
                    e.append(this.renderBlock("leads_other", t, i)),
                    e.append(this.renderBlock("companies", t, i)),
                    e.append(this.renderBlock("customers", t, i))) : "companies" == ("current_location_keyword"in t ? t.current_location_keyword : "") ? (e.append(this.renderBlock("companies", t, i)),
                    e.append(this.renderBlock("leads_current_pipeline", t, i)),
                    e.append(this.renderBlock("leads_other", t, i)),
                    e.append(this.renderBlock("contacts", t, i)),
                    e.append(this.renderBlock("customers", t, i))) : "customers" == ("current_location_keyword"in t ? t.current_location_keyword : "") ? (e.append(this.renderBlock("customers", t, i)),
                    e.append(this.renderBlock("leads_current_pipeline", t, i)),
                    e.append(this.renderBlock("leads_other", t, i)),
                    e.append(this.renderBlock("contacts", t, i)),
                    e.append(this.renderBlock("companies", t, i))) : (e.append(this.renderBlock("leads_current_pipeline", t, i)),
                    e.append(this.renderBlock("leads_other", t, i)),
                    e.append(this.renderBlock("contacts", t, i)),
                    e.append(this.renderBlock("companies", t, i)),
                    e.append(this.renderBlock("customers", t, i)),
                    e.append(this.renderBlock("talks", t, i)))),
                    e.append("</div>")
                }
                ,
                t.prototype.block_leads_current_pipeline = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    i.is_no_results_message = !1,
                    !twig.attr(twig.attr("items"in i ? i.items : "", "leads"), "current_pipeline") && 0 != twig.filter.length(this.env_, twig.attr(twig.attr("items"in i ? i.items : "", "leads"), "other")) && "is_pipeline"in i && i.is_pipeline && (i.is_no_results_message = !0),
                    (twig.attr(twig.attr("items"in i ? i.items : "", "leads"), "current_pipeline") || "is_no_results_message"in i && i.is_no_results_message) && (twig.filter.length(this.env_, twig.attr(twig.attr("items"in i ? i.items : "", "leads"), "current_pipeline")) < 2 ? i.leads_pipeline_caption = "Current" : i.leads_pipeline_caption = "Current Pipeline",
                    new (e._get("interface/filter/in_search/suggest/category.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        caption: this.env_.filter("i18n", "Leads"),
                        results: twig.attr(twig.attr("items"in i ? i.items : "", "leads"), "current_pipeline"),
                        leads_pipeline_type: "leads_pipeline_caption"in i ? i.leads_pipeline_caption : "",
                        is_no_results_message: "is_no_results_message"in i ? i.is_no_results_message : "",
                        count_results: twig.attr(twig.attr("counts"in i ? i.counts : "", "leads"), "current_pipeline_count"),
                        link_path: "/leads/detail/",
                        show_all_link_path: "/leads/" + ("leads_last_place"in i ? i.leads_last_place : "") + "/?skip_filter=Y&term=" + ("term"in i ? i.term : ""),
                        el_sequence: ["name", "pipeline_name", "contact_name", ",", "company_name"]
                    })))
                }
                ,
                t.prototype.block_leads_other = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    twig.attr(twig.attr("items"in i ? i.items : "", "leads"), "other") && 0 != twig.filter.length(this.env_, twig.attr(twig.attr("items"in i ? i.items : "", "leads"), "other")) && new (e._get("interface/filter/in_search/suggest/category.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        caption: this.env_.filter("i18n", "Leads"),
                        results: twig.attr(twig.attr("items"in i ? i.items : "", "leads"), "other"),
                        leads_pipeline_type: "All leads",
                        is_no_results_message: !1,
                        count_results: twig.attr(twig.attr("counts"in i ? i.counts : "", "leads"), "total"),
                        link_path: "/leads/detail/",
                        show_all_link_path: "/leads/list/?skip_filter=Y&term=" + ("term"in i ? i.term : ""),
                        pipelines_count: "pipelines_count"in i ? i.pipelines_count : "",
                        el_sequence: ["name", "pipeline_name", "contact_name", ",", "company_name"]
                    }))
                }
                ,
                t.prototype.block_contacts = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    twig.attr("items"in i ? i.items : "", "contacts") && new (e._get("interface/filter/in_search/suggest/category.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        caption: this.env_.filter("i18n", "Contacts"),
                        results: twig.attr("items"in i ? i.items : "", "contacts"),
                        count_results: twig.attr("counts"in i ? i.counts : "", "contacts"),
                        link_path: "/contacts/detail/",
                        show_all_link_path: "/contacts/list/contacts/?skip_filter=Y&term=" + ("term"in i ? i.term : ""),
                        is_no_results_message: !1,
                        el_sequence: ["name", ",", "company_name"]
                    }))
                }
                ,
                t.prototype.block_companies = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    twig.attr("items"in i ? i.items : "", "companies") && new (e._get("interface/filter/in_search/suggest/category.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        caption: this.env_.filter("i18n", "Companies"),
                        results: twig.attr("items"in i ? i.items : "", "companies"),
                        count_results: twig.attr("counts"in i ? i.counts : "", "companies"),
                        link_path: "/companies/detail/",
                        show_all_link_path: "/contacts/list/companies/?skip_filter=Y&term=" + ("term"in i ? i.term : ""),
                        is_no_results_message: !1,
                        el_sequence: ["name", ",", "contact_name"]
                    }))
                }
                ,
                t.prototype.block_customers = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    twig.attr("items"in i ? i.items : "", "customers") && new (e._get("interface/filter/in_search/suggest/category.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        caption: this.env_.filter("i18n", "Customers"),
                        results: twig.attr("items"in i ? i.items : "", "customers"),
                        count_results: twig.attr("counts"in i ? i.counts : "", "customers"),
                        link_path: "/customers/detail/",
                        show_all_link_path: "/customers/" + ("customers_last_place"in i ? i.customers_last_place : "") + "/?skip_filter=Y&term=" + ("term"in i ? i.term : ""),
                        is_no_results_message: !1,
                        el_sequence: ["name", ",", "contact_name", ",", "company_name"]
                    }))
                }
                ,
                t.prototype.block_talks = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    twig.attr("items"in i ? i.items : "", "talks") && new (e._get("interface/filter/in_search/suggest/category.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        caption: this.env_.filter("i18n", "Talks"),
                        results: twig.attr("items"in i ? i.items : "", "talks"),
                        count_results: twig.attr("counts"in i ? i.counts : "", "talks"),
                        show_all_link_path: "/leads/list/?skip_filter=Y&term=" + ("term"in i ? i.term : ""),
                        is_no_results_message: !1,
                        el_sequence: ["talk_id", "origin_icon", "last_message"]
                    }))
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_filter_in_search_suggest_main_suggest"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/filter/in_search/suggest/main_suggest", t)
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
                    e.append('<div class="modal-create-widget_info__description">'),
                    "ru" == ("locale_id"in t ? t.locale_id : "") ? (e.append("<p>"),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "The widget shows analytics for the sales funnel. The sales funnel can be selected in the leftmost column of the widget if there are several of them in the system. When there is only one funnel, there is no choice."), "light_escape", null, !0)),
                    e.append("</p><p>"),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "The «New» block displays the number of created deals in the selected period."), "light_escape", null, !0)),
                    e.append("</p><p>"),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "The data in the widget is displayed in accordance with the selected time period on the desktop: today, yesterday, week (from Monday of the current week), month (from the first day of the current month), the period selected from the calendar."), "light_escape", null, !0)),
                    e.append("</p><p>"),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Also, the data is displayed in the widget depending on the user / users: all users, for a specific user, for a department."), "light_escape", null, !0)),
                    e.append("</p><p>"),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "The stage names in the widget correspond to the stages in the selected funnel. The numbers under the stage name show the number and sum of all transactions in the stage."), "light_escape", null, !0)),
                    e.append("</p><p>"),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Large numbers in the block show the changes for the period in the stage (how much has come, how much has gone)."), "light_escape", null, !0)),
                    e.append("</p><p>"),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "The line «Lost» displays the number and budget of transactions that have moved from a particular stage to the «Closed and not implemented» stage."), "light_escape", null, !0)),
                    e.append("</p><p>"),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "The rightmost block contains information about the number and amount of transactions that have passed to the «Successfully completed» stage."), "light_escape", null, !0)),
                    e.append("</p>")) : (e.append("<p>"),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "This widget gives a snapshot of how your sales pipeline is performing. If you have multiple pipelines, you can select the one you want to view on the left."), "light_escape", null, !0)),
                    e.append('</p><p style="font-weight:800">'),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Filtering your data"), "light_escape", null, !0)),
                    e.append("</p><p><div>"),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "There are two main ways to filter:"), "light_escape", null, !0)),
                    e.append("</div><div>"),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "By date — today, yesterday, this week, this month or a custom time period"), "light_escape", null, !0)),
                    e.append("</div><div>"),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "By user — all users, a selected user or team"), "light_escape", null, !0)),
                    e.append('</div></p><p style="font-weight:800">'),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Understanding the report"), "light_escape", null, !0)),
                    e.append("</p><p>"),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "New displays the number of incoming leads."), "light_escape", null, !0)),
                    e.append("</p><p><div>"),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Each block represents a stage and includes:"), "light_escape", null, !0)),
                    e.append("<div><div>"),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "- Top: Current number of leads in the stage & total sales value"), "light_escape", null, !0)),
                    e.append("<div><div>"),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "- Middle: Leads that have progressed to this stage"), "light_escape", null, !0)),
                    e.append("<div><div>"),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "- Bottom: Leads lost at this stage"), "light_escape", null, !0)),
                    e.append("<div></p><p>"),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "The right-most block shows closed-won and closed-lost leads."), "light_escape", null, !0)),
                    e.append("</p>")),
                    e.append("</div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_filter_in_search_widgets_info_top_chart"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/filter/in_search/widgets_info/top_chart", t)
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
        e._sentryDebugIds[t] = "789af904-39e9-491c-8679-707b6136cad5",
        e._sentryDebugIdIdentifier = "sentry-dbid-789af904-39e9-491c-8679-707b6136cad5")
    } catch (e) {}
}();
//# sourceMappingURL=91880.3263fa6612d692396647.js.map
