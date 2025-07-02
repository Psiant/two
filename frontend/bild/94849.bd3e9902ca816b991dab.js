(window.webpackChunk = window.webpackChunk || []).push([[94849], {
    94849: (e, t, i) => {
        var n, a;
        n = [i(460159), i(295165)],
        void 0 === (a = function(e) {
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
                    e.append('<button class="add-button-control '),
                    "add_button_style"in t && t.add_button_style && (e.append("add-button-control-style_"),
                    e.append(twig.filter.escape(this.env_, "add_button_style"in t ? t.add_button_style : "", "light_escape", null, !0))),
                    e.append(" "),
                    e.append(twig.filter.escape(this.env_, "class_name"in t ? t.class_name : "", "light_escape", null, !0)),
                    e.append('" type="button"><div class="add-button-control__plus"></div><div class="add-button-control__text">'),
                    e.append(twig.filter.escape(this.env_, "text"in t ? t.text : "", "light_escape", null, !0)),
                    e.append("</div></button>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_controls_add_button"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/controls/add_button", t)
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
                    i.visual_class_name = "js-control-pretty-price js-form-changes-skip " + ("class_name"in i ? i.class_name : ""),
                    i.visual_value = twig.filter.trim(this.env_.filter("price", "value"in i ? i.value : "", [!0, ("value"in i ? i.value : "") != this.env_.filter("round", "value"in i ? i.value : "") ? 2 : 0, !1, "currency"in i ? i.currency : ""])),
                    "keep_zero"in i && i.keep_zero || 0 != ("value"in i ? i.value : "") || (i.visual_value = ""),
                    "additional_data"in i || (i.additional_data = ""),
                    "autosized"in i && 1 != ("autosized"in i ? i.autosized : "") || (i.additional_data = ("additional_data"in i ? i.additional_data : "") + ' data-autosized="y"'),
                    "allow_zero"in i && i.allow_zero && (i.additional_data = ("additional_data"in i ? i.additional_data : "") + ' data-allow-zero="y"'),
                    "short"in i && i.short ? i.additional_data = ("additional_data"in i ? i.additional_data : "") + ' data-format-short="1"' : (i.currency_symbol_helper = this.env_.filter("price", "1", [!1, 0, !1, "currency"in i ? i.currency : ""]),
                    i.currency_symbol_first = 0 == this.env_.filter("number_format", this.env_, this.env_.filter("slice", this.env_, "currency_symbol_helper"in i ? i.currency_symbol_helper : "", 0, 1), 0),
                    i.currency_symbol_extracted = twig.filter.trim(twig.filter.replace("currency_symbol_helper"in i ? i.currency_symbol_helper : "", {
                        1: ""
                    }))),
                    i.additional_currency_data = "currency"in i ? 'data-currency="' + ("currency"in i ? i.currency : "") + '"' : "",
                    t.append('<div class="control-price '),
                    t.append(twig.filter.escape(this.env_, "wrapper_class_name"in i ? i.wrapper_class_name : "", "light_escape", null, !0)),
                    t.append('" '),
                    t.append("additional_currency_data"in i ? i.additional_currency_data : ""),
                    t.append(">"),
                    "short"in i && i.short || !("currency_symbol_first"in i) || !i.currency_symbol_first ? t.append("") : t.append(twig.filter.escape(this.env_, "currency_symbol_extracted"in i ? twig.filter.def("currency_symbol_extracted"in i ? i.currency_symbol_extracted : "", "") : "", "light_escape", null, !0)),
                    new (e._get("interface/controls/input.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        class_name: "visual_class_name"in i ? i.visual_class_name : "",
                        name: "",
                        value: "visual_value"in i ? i.visual_value : "",
                        additional_data: "additional_data"in i ? i.additional_data : ""
                    })),
                    t.append('<span class="currency-symbol">'),
                    "short"in i && i.short || "currency_symbol_first"in i && i.currency_symbol_first ? t.append("") : t.append(twig.filter.escape(this.env_, "currency_symbol_extracted"in i ? twig.filter.def("currency_symbol_extracted"in i ? i.currency_symbol_extracted : "", "") : "", "light_escape", null, !0)),
                    t.append("</span>"),
                    new (e._get("interface/controls/input.twig"))(this.env_).render_(t, {
                        class_name: "js-control-raw-price",
                        type: "hidden",
                        name: "name"in i ? i.name : "",
                        value: ("keep_zero"in i && i.keep_zero || 0 != ("value"in i ? i.value : "")) && "value"in i ? i.value : ""
                    }),
                    t.append("</div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_controls_budget"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/controls/budget", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e),
                    this.setBlocks({
                        button_content: twig.bind(this.block_button_content, this)
                    })
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(e) {
                    return !1
                }
                ,
                t.prototype.render_ = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    "type"in i && i.type || (i.type = "button"),
                    "context_menu"in i && i.context_menu && (t.append('<div class="button-input-wrapper '),
                    t.append(twig.filter.escape(this.env_, "class_name"in i ? i.class_name : "", "light_escape", null, !0)),
                    t.append('">')),
                    t.append('<button type="'),
                    t.append(twig.filter.escape(this.env_, "type"in i ? i.type : "", "light_escape", null, !0)),
                    t.append('" '),
                    t.append("additional_data"in i ? i.additional_data : ""),
                    t.append(' class="button-input '),
                    "blue"in i && i.blue && t.append("button-input_blue"),
                    t.append(" "),
                    "context_menu"in i && i.context_menu && t.append("button-input-with-menu"),
                    t.append(" "),
                    "disabled"in i && i.disabled && t.append("button-input-disabled"),
                    t.append(" "),
                    "context_menu"in i && i.context_menu ? t.append(twig.filter.escape(this.env_, "button_input_class_name"in i ? i.button_input_class_name : "", "light_escape", null, !0)) : t.append(twig.filter.escape(this.env_, "class_name"in i ? i.class_name : "", "light_escape", null, !0)),
                    t.append('" tabindex="'),
                    t.append(twig.filter.escape(this.env_, "tab_index"in i ? i.tab_index : "", "light_escape", null, !0)),
                    t.append('" '),
                    "id"in i && i.id && (t.append('id="'),
                    t.append(twig.filter.escape(this.env_, "id"in i ? i.id : "", "light_escape", null, !0)),
                    t.append('"')),
                    t.append(" "),
                    "title"in i && i.title && (t.append('title="'),
                    t.append(twig.filter.escape(this.env_, twig.filter.capitalize(this.env_, "title"in i ? i.title : ""), "light_escape", null, !0)),
                    t.append('"')),
                    t.append(">"),
                    t.append(this.renderBlock("button_content", i, n)),
                    t.append("</button>"),
                    "context_menu"in i && i.context_menu && (1 != ("context_menu"in i ? i.context_menu : "") && new (e._get("interface/controls/button/context_menu.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        context_menu_class_name: "context_menu_class_name"in i ? i.context_menu_class_name : "",
                        context_menu: "context_menu"in i ? i.context_menu : ""
                    })),
                    t.append("</div>"))
                }
                ,
                t.prototype.block_button_content = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    "plain"in t && t.plain || (e.append('<span class="button-input-inner '),
                    e.append(twig.filter.escape(this.env_, "inner_class_name"in t ? t.inner_class_name : "", "light_escape", null, !0)),
                    e.append('">')),
                    "icon_class_name"in t && t.icon_class_name && (e.append('<span class="icon icon-inline '),
                    e.append(twig.filter.escape(this.env_, "icon_class_name"in t ? t.icon_class_name : "", "light_escape", null, !0)),
                    e.append('"></span>')),
                    "svg_class_name"in t && t.svg_class_name && (e.append('<svg class="svg-icon svg-'),
                    e.append(twig.filter.escape(this.env_, "svg_class_name"in t ? t.svg_class_name : "", "light_escape", null, !0)),
                    e.append('-dims"><use xlink:href="#'),
                    e.append(twig.filter.escape(this.env_, "svg_class_name"in t ? t.svg_class_name : "", "light_escape", null, !0)),
                    e.append('"></use></svg>')),
                    "text_short"in t && t.text_short && (e.append('<span class="button-input-inner__text button-input-inner__text_short">'),
                    e.append(twig.filter.escape(this.env_, "text_short"in t ? t.text_short : "", "light_escape", null, !0)),
                    e.append("</span>")),
                    "text"in t && t.text && (e.append('<span class="button-input-inner__text">'),
                    "should_be_raw"in t && t.should_be_raw ? e.append("text"in t ? t.text : "") : e.append(twig.filter.escape(this.env_, "text"in t ? t.text : "", "light_escape", null, !0)),
                    "text_bold"in t && t.text_bold && (e.append(" <b>"),
                    e.append(twig.filter.escape(this.env_, "text_bold"in t ? t.text_bold : "", "light_escape", null, !0)),
                    e.append("</b>")),
                    e.append("</span>")),
                    "icon_right_name"in t && t.icon_right_name && (e.append('<span class="'),
                    e.append(twig.filter.escape(this.env_, "icon_right_name"in t ? t.icon_right_name : "", "light_escape", null, !0)),
                    e.append(' icon-right"></span>')),
                    "plain"in t && t.plain || e.append("</span>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_controls_button"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/controls/button", t)
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
                    "text"in t || (t.text = this.env_.filter("i18n", "button_cancel")),
                    e.append('<button type="button" '),
                    e.append("additional_data"in t ? t.additional_data : ""),
                    e.append(' class="button-input button-cancel '),
                    e.append(twig.filter.escape(this.env_, "class_name"in t ? t.class_name : "", "light_escape", null, !0)),
                    e.append('" tabindex="'),
                    e.append(twig.filter.escape(this.env_, "tab_index"in t ? t.tab_index : "", "light_escape", null, !0)),
                    e.append('" '),
                    "id"in t && t.id && (e.append('id="'),
                    e.append(twig.filter.escape(this.env_, "id"in t ? t.id : "", "light_escape", null, !0)),
                    e.append('"')),
                    e.append(' style="'),
                    "hidden"in t && t.hidden && e.append("display: none;"),
                    e.append('"><span>'),
                    e.append(twig.filter.escape(this.env_, "text"in t ? t.text : "", "light_escape", null, !0)),
                    e.append("</span></button>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_controls_cancel_button"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/controls/cancel_button", t)
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
                    t.append('<div class="control-chained-list js-control-chained-list '),
                    t.append(twig.filter.escape(this.env_, "class_name"in i ? i.class_name : "", "light_escape", null, !0)),
                    t.append('">'),
                    i.last_list_has_value = !0,
                    i.lastListCatalogId = !1,
                    i._parent = i;
                    var a = "lists"in i ? i.lists : ""
                      , l = {
                        index0: 0,
                        index: 1,
                        first: !0
                    };
                    if (twig.countable(a)) {
                        var s = twig.count(a);
                        l.revindex0 = s - 1,
                        l.revindex = s,
                        l.length = s,
                        l.last = 1 === s
                    }
                    twig.forEach(a, (function(n, a) {
                        i._key = a,
                        i.list = n,
                        i.hidden = !(twig.attr("values"in i ? i.values : "", twig.attr("list"in i ? i.list : "", "catalog_id"), void 0, "array") || "last_list_has_value"in i && i.last_list_has_value),
                        i.suggest_class_name = "control-chained-list__suggest" + ("hidden"in i && i.hidden ? " hidden" : ""),
                        "hidden"in i && i.hidden || twig.attr(twig.attr("values"in i ? i.values : "", twig.attr("list"in i ? i.list : "", "catalog_id"), void 0, "array"), "value") || (i.suggest_class_name = ("suggest_class_name"in i ? i.suggest_class_name : "") + " control-chained-list__suggest_empty"),
                        twig.attr(l, "first") && (i.suggest_class_name = ("suggest_class_name"in i ? i.suggest_class_name : "") + " control-chained-list__suggest_first"),
                        twig.attr(l, "last") && (i.suggest_class_name = ("suggest_class_name"in i ? i.suggest_class_name : "") + " control-chained-list__suggest_last"),
                        t.append('<input type="hidden" name="'),
                        t.append(twig.filter.escape(this.env_, ("name"in i ? i.name : "") + "[" + twig.attr("list"in i ? i.list : "", "catalog_id") + "]", "light_escape", null, !0)),
                        t.append('" value="'),
                        t.append(twig.filter.escape(this.env_, twig.attr(twig.attr("values"in i ? i.values : "", twig.attr("list"in i ? i.list : "", "catalog_id"), void 0, "array"), "value"), "light_escape", null, !0)),
                        t.append('" class="js-control-changed-list-chain-value '),
                        t.append(twig.filter.escape(this.env_, "value_input_class_name"in i ? twig.filter.def("value_input_class_name"in i ? i.value_input_class_name : "", "") : "", "light_escape", null, !0)),
                        t.append(' " data-catalog-id="'),
                        t.append(twig.filter.escape(this.env_, twig.attr("list"in i ? i.list : "", "catalog_id"), "light_escape", null, !0)),
                        t.append('">'),
                        new (e._get("interface/controls/suggest.twig"))(this.env_).render_(t, {
                            class_name: "suggest_class_name"in i ? i.suggest_class_name : "",
                            input_class_name: ("input_class_name"in i ? twig.filter.def("input_class_name"in i ? i.input_class_name : "", "") : "") + " js-form-changes-skip text-input-visible-placeholder",
                            placeholder: twig.attr("list"in i ? i.list : "", "title"),
                            additional_data: 'data-catalog-id="' + twig.attr("list"in i ? i.list : "", "catalog_id") + '" data-parent-element-id="' + (("last_list_has_value"in i ? i.last_list_has_value : "") > 0 && "last_list_has_value"in i ? i.last_list_has_value : "") + '" data-parent-catalog-id="' + ("lastListCatalogId"in i && i.lastListCatalogId && "lastListCatalogId"in i ? i.lastListCatalogId : "") + '" data-placeholder="' + twig.attr("list"in i ? i.list : "", "title") + '"',
                            value: twig.attr(twig.attr("values"in i ? i.values : "", twig.attr("list"in i ? i.list : "", "catalog_id"), void 0, "array"), "name"),
                            disabled: "disabled"in i ? i.disabled : ""
                        }),
                        i.last_list_has_value = twig.attr(twig.attr("values"in i ? i.values : "", twig.attr("list"in i ? i.list : "", "catalog_id"), void 0, "array"), "value"),
                        i.lastListCatalogId = twig.attr("list"in i ? i.list : "", "catalog_id"),
                        ++l.index0,
                        ++l.index,
                        l.first = !1,
                        l.length && (--l.revindex0,
                        --l.revindex,
                        l.last = 0 === l.revindex0)
                    }
                    ), this),
                    t.append('<script type="application/json">'),
                    t.append(twig.filter.json_encode("lists"in i ? i.lists : "")),
                    t.append("<\/script></div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_controls_chained_list"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/controls/chained_list", t)
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
                    e.append('<label class="control-checkbox '),
                    e.append(twig.filter.escape(this.env_, "class_name"in t ? t.class_name : "", "light_escape", null, !0)),
                    e.append(" "),
                    "small"in t && t.small && e.append("control-checkbox_small"),
                    e.append(" "),
                    "checked"in t && t.checked && e.append("is-checked"),
                    e.append('">'),
                    "yes" == ("name_is_array"in t ? t.name_is_array : "") ? t.arr = "[]" : t.arr = "",
                    e.append('<div class="control-checkbox__body"><input type="checkbox" class="'),
                    e.append(twig.filter.escape(this.env_, "input_class_name"in t ? t.input_class_name : "", "light_escape", null, !0)),
                    e.append('" name="'),
                    e.append(twig.filter.escape(this.env_, ("name"in t ? t.name : "") + ("arr"in t ? t.arr : ""), "light_escape", null, !0)),
                    e.append('" '),
                    "id"in t && t.id && (e.append('id="'),
                    e.append(twig.filter.escape(this.env_, "id"in t ? t.id : "", "light_escape", null, !0)),
                    e.append('"')),
                    "checked"in t && t.checked && e.append(' checked="checked"'),
                    "disabled"in t && t.disabled && e.append(" disabled"),
                    "readonly"in t && t.readonly && e.append(' onclick="return false;" readonly'),
                    e.append(' value="'),
                    e.append(twig.filter.escape(this.env_, "value"in t ? t.value : "", "light_escape", null, !0)),
                    e.append('" '),
                    "fieldId"in t && t.fieldId && (e.append(' data-field-id="'),
                    e.append(twig.filter.escape(this.env_, "fieldId"in t ? t.fieldId : "", "light_escape", null, !0)),
                    e.append('" ')),
                    e.append(' data-value="'),
                    e.append(twig.filter.escape(this.env_, "dataValue"in t ? twig.filter.def("dataValue"in t ? t.dataValue : "", "value"in t ? t.value : "") : "value"in t ? t.value : "", "light_escape", null, !0)),
                    e.append('" '),
                    e.append("additional_data"in t ? t.additional_data : ""),
                    e.append('/><span class="control-checkbox__helper '),
                    "checked_minus"in t && t.checked_minus && e.append("control-checkbox__helper_minus"),
                    e.append('"></span></div>'),
                    twig.filter.length(this.env_, "text"in t ? t.text : "") ? (e.append('<div class="control-checkbox__text element__text '),
                    e.append(twig.filter.escape(this.env_, "text_class_name"in t ? t.text_class_name : "", "light_escape", null, !0)),
                    e.append('" title="'),
                    e.append(twig.filter.escape(this.env_, "should_be_raw"in t && t.should_be_raw ? this.env_.filter("striptags", "text"in t ? t.text : "") : "text"in t ? t.text : "", "light_escape", null, !0)),
                    e.append('">'),
                    "note_text"in t && t.note_text ? (e.append('<span class="control-checkbox__main-text">'),
                    "should_be_raw"in t && t.should_be_raw ? e.append("text"in t ? t.text : "") : e.append(twig.filter.escape(this.env_, "text"in t ? t.text : "", "light_escape", null, !0)),
                    e.append('</span> <span class="control-checkbox__note-text">'),
                    e.append(twig.filter.escape(this.env_, "note_text"in t ? t.note_text : "", "light_escape", null, !0)),
                    e.append("</span>")) : "should_be_raw"in t && t.should_be_raw ? e.append("text"in t ? t.text : "") : e.append(twig.filter.escape(this.env_, "text"in t ? t.text : "", "light_escape", null, !0)),
                    e.append("</div>")) : "note_text"in t && t.note_text ? (e.append('<div class="control-checkbox__text element__text '),
                    e.append(twig.filter.escape(this.env_, "text_class_name"in t ? t.text_class_name : "", "light_escape", null, !0)),
                    e.append('" title="'),
                    e.append(twig.filter.escape(this.env_, "note_text"in t ? t.note_text : "", "light_escape", null, !0)),
                    e.append('"><span class="control-checkbox__note-text">'),
                    e.append(twig.filter.escape(this.env_, "note_text"in t ? t.note_text : "", "light_escape", null, !0)),
                    e.append("</span></div>")) : "text_custom"in t && t.text_custom && (e.append('<div class="control-checkbox__text element__text '),
                    e.append(twig.filter.escape(this.env_, "text_class_name"in t ? t.text_class_name : "", "light_escape", null, !0)),
                    e.append('">'),
                    e.append(twig.filter.escape(this.env_, "text_custom"in t ? t.text_custom : "", "light_escape", null, !0)),
                    e.append("</div>")),
                    e.append("</label>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_controls_checkbox"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/controls/checkbox", t)
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
                    new (e._get("interface/controls/checkboxes_dropdown/index.twig"))(this.env_).render_(t, i)
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_controls_checkboxes_dropdown"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/controls/checkboxes_dropdown", t)
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
                    t.append('<div class="'),
                    t.append(twig.filter.escape(this.env_, "class_name"in i ? i.class_name : "", "light_escape", null, !0)),
                    t.append('"><div class="checkboxes_dropdown__title_wrapper">'),
                    new (e._get("interface/controls/checkbox.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        class_name: "checkboxes_dropdown__checkbox_master icon-checkbox js-master-checkbox-wrapper",
                        input_class_name: "input_class_name"in i ? i.input_class_name : "",
                        checked: "checked"in i ? i.checked : "",
                        name: "name"in i ? i.name : "",
                        value: "value"in i ? i.value : "",
                        text: "text"in i ? i.text : ""
                    })),
                    t.append("</div></div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_controls_checkboxes_dropdown_single"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/controls/checkboxes_dropdown_single", t)
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
                    t.append('<div class="checkboxes_string '),
                    t.append(twig.filter.escape(this.env_, "class_name"in i ? i.class_name : "", "light_escape", null, !0)),
                    t.append(' js-control-checkboxes_string">'),
                    i._parent = i;
                    var a = "items"in i ? i.items : ""
                      , l = {
                        index0: 0,
                        index: 1,
                        first: !0
                    };
                    if (twig.countable(a)) {
                        var s = twig.count(a);
                        l.revindex0 = s - 1,
                        l.revindex = s,
                        l.length = s,
                        l.last = 1 === s
                    }
                    twig.forEach(a, (function(n, a) {
                        i._key = a,
                        i.item = n,
                        i.random_val = this.env_.filter("random_string", "40"),
                        t.append('<div class="checkboxes_string__choose"><div class="checkboxes_string__item_container checkboxes_string__item_checked">'),
                        new (e._get("interface/controls/checkbox.twig"))(this.env_).render_(t, twig.extend({}, i, {
                            name: twig.attr("item"in i ? i.item : "", "name"),
                            id: "random_val"in i ? i.random_val : "",
                            class_name: "class_name_cbx"in i ? i.class_name_cbx : "",
                            value: twig.attr("item"in i ? i.item : "", "id"),
                            text: twig.attr("item"in i ? i.item : "", "name")
                        })),
                        t.append("</div></div>"),
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
                    return "interface_controls_checkboxes_string"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/controls/checkboxes_string", t)
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
                    t.append('<button class="control-wysiwyg__toolbar--item js-tip-holder ql-custom-color ql-picker ql-icon-picker" type="button" data-type="'),
                    t.append(twig.filter.escape(this.env_, "type"in i ? i.type : "", "light_escape", null, !0)),
                    t.append('"><span class="ql-picker-label" tabindex="0" role="button" aria-expanded="false" aria-controls="ql-picker-options-4" title="'),
                    t.append(twig.filter.escape(this.env_, "title"in i ? i.title : "", "light_escape", null, !0)),
                    t.append('"><svg class="svg-icon svg-controls--editor-'),
                    t.append(twig.filter.escape(this.env_, "type"in i ? i.type : "", "light_escape", null, !0)),
                    t.append('-dims"><use xlink:href="#controls--editor-'),
                    t.append(twig.filter.escape(this.env_, "type"in i ? i.type : "", "light_escape", null, !0)),
                    t.append('"></use></svg></span>'),
                    new (e._get("interface/common/colorpicker_tip.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        class_name: "ql-picker-options",
                        is_custom_tip_holder: !0
                    })),
                    t.append("</button>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_controls_color_picker"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/controls/color_picker", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e),
                    this.setBlocks({
                        clearer: twig.bind(this.block_clearer, this),
                        before_text: twig.bind(this.block_before_text, this)
                    })
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(e) {
                    return !1
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    t.controls_class_name = "controls_class_name"in t && t.controls_class_name ? "controls_class_name"in t ? t.controls_class_name : "" : "js-control-contenteditable",
                    e.append('<div class="'),
                    e.append(twig.filter.escape(this.env_, "controls_class_name"in t ? t.controls_class_name : "", "light_escape", null, !0)),
                    e.append(" control-contenteditable "),
                    e.append(twig.filter.escape(this.env_, "class_name"in t ? t.class_name : "", "light_escape", null, !0)),
                    e.append('"><div class="js-control-contenteditable-clearer control-contenteditable__clearer">'),
                    e.append(this.renderBlock("clearer", t, i)),
                    e.append("</div>"),
                    e.append(this.renderBlock("before_text", t, i)),
                    e.append('<div class="feed-control__voice-container"><div class="feed-control__voice-wave"></div><canvas class="feed-control__voice-wave-canvas hidden" width=\'0\' height=\'0\'></canvas><span class="feed-control__voice-timer"></span></div><input type="hidden" class="js-control-contenteditable-input '),
                    e.append(twig.filter.escape(this.env_, "input_class_name"in t ? t.input_class_name : "", "light_escape", null, !0)),
                    e.append('" name="'),
                    e.append(twig.filter.escape(this.env_, "name"in t ? t.name : "", "light_escape", null, !0)),
                    e.append('" value="'),
                    e.append(twig.filter.escape(this.env_, "value"in t ? t.value : "", "light_escape", null, !0)),
                    e.append('"><div '),
                    "editable_id"in t && t.editable_id && (e.append('id="'),
                    e.append(twig.filter.escape(this.env_, "editable_id"in t ? t.editable_id : "", "light_escape", null, !0)),
                    e.append('"')),
                    e.append(' class="control-contenteditable__area '),
                    "no_hint_transform"in t && t.no_hint_transform && e.append("control-contenteditable__area_no-hint-transform"),
                    e.append(" "),
                    e.append(twig.filter.escape(this.env_, "editable_class_name"in t ? t.editable_class_name : "", "light_escape", null, !0)),
                    e.append('" contenteditable="'),
                    e.append(twig.filter.escape(this.env_, !("disabled"in t && t.disabled), "light_escape", null, !0)),
                    e.append('" data-hint="'),
                    e.append(twig.filter.escape(this.env_, "placeholder"in t ? t.placeholder : "", "light_escape", null, !0)),
                    e.append('" '),
                    e.append("additional_data"in t ? t.additional_data : ""),
                    e.append(">"),
                    e.append(twig.filter.escape(this.env_, "value"in t ? t.value : "", "light_escape", null, !0)),
                    e.append("</div></div>")
                }
                ,
                t.prototype.block_clearer = function(e, t, i) {
                    i = void 0 === i ? {} : i
                }
                ,
                t.prototype.block_before_text = function(e, t, i) {
                    i = void 0 === i ? {} : i
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_controls_contenteditable"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/controls/contenteditable", t)
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
                    e.append('<span class="date_field_wrapper '),
                    "control_class_name"in t && t.control_class_name ? e.append(twig.filter.escape(this.env_, "control_class_name"in t ? t.control_class_name : "", "light_escape", null, !0)) : e.append("js-control-date"),
                    e.append(" "),
                    e.append(twig.filter.escape(this.env_, "class_name"in t ? t.class_name : "", "light_escape", null, !0)),
                    e.append('" data-kalendae-classname="'),
                    e.append(twig.filter.escape(this.env_, "kalendae_class"in t ? t.kalendae_class : "", "light_escape", null, !0)),
                    e.append('">'),
                    "range" == ("type"in t ? t.type : "") && (t.value_splitted = this.env_.filter("split", this.env_, "value"in t ? t.value : "", " - "),
                    1 == twig.filter.length(this.env_, "value_splitted"in t ? t.value_splitted : "") && (t.value_splitted = this.env_.filter("split", this.env_, twig.attr("value_splitted"in t ? t.value_splitted : "", 0, void 0, "array"), "-")),
                    e.append('<input type="hidden" class="date_field__range_0" name="'),
                    e.append(twig.filter.escape(this.env_, twig.attr("name"in t ? t.name : "", "from"), "light_escape", null, !0)),
                    e.append('" value="'),
                    e.append(twig.filter.escape(this.env_, twig.attr("value_splitted"in t ? t.value_splitted : "", 0, void 0, "array"), "light_escape", null, !0)),
                    e.append('" /><input type="hidden" class="date_field__range_1" name="'),
                    e.append(twig.filter.escape(this.env_, twig.attr("name"in t ? t.name : "", "to"), "light_escape", null, !0)),
                    e.append('" value="'),
                    e.append(twig.filter.escape(this.env_, twig.attr("value_splitted"in t ? t.value_splitted : "", 1, void 0, "array"), "light_escape", null, !0)),
                    e.append('" />')),
                    t.max_length = "max_length"in t ? twig.filter.def("max_length"in t ? t.max_length : "", 10) : 10,
                    e.append('<input class="date_field '),
                    e.append(twig.filter.escape(this.env_, "input_class"in t ? t.input_class : "", "light_escape", null, !0)),
                    e.append(" "),
                    "value"in t && t.value || e.append("empty"),
                    e.append(" "),
                    "range" == ("type"in t ? t.type : "") && e.append("range"),
                    e.append('" '),
                    "id"in t && t.id && (e.append('id="'),
                    e.append(twig.filter.escape(this.env_, "id"in t ? t.id : "", "light_escape", null, !0)),
                    e.append('"')),
                    e.append(' type="text" '),
                    "range" != ("type"in t ? t.type : "") && (e.append('maxlength="'),
                    e.append(twig.filter.escape(this.env_, "max_length"in t ? t.max_length : "", "light_escape", null, !0)),
                    e.append('"')),
                    e.append(" "),
                    "single" == ("type"in t ? t.type : "") && (e.append('name="'),
                    e.append(twig.filter.escape(this.env_, "name"in t ? t.name : "", "light_escape", null, !0)),
                    e.append('"')),
                    e.append(" "),
                    "title_format"in t && t.title_format && (e.append('data-title-format="'),
                    e.append(twig.filter.escape(this.env_, "title_format"in t ? t.title_format : "", "light_escape", null, !0)),
                    e.append('"')),
                    e.append(" "),
                    "hide_disabled"in t && t.hide_disabled && e.append("data-hide-disabled"),
                    e.append(" "),
                    "blackout"in t && t.blackout && (e.append(' data-blackout="'),
                    e.append(twig.filter.escape(this.env_, "blackout"in t ? t.blackout : "", "light_escape", null, !0)),
                    e.append('" ')),
                    e.append(" "),
                    "direction"in t && t.direction && (e.append('data-direction="'),
                    e.append(twig.filter.escape(this.env_, "direction"in t ? t.direction : "", "light_escape", null, !0)),
                    e.append('"')),
                    e.append(" "),
                    "data_format"in t && t.data_format && (e.append('data-format="'),
                    e.append(twig.filter.escape(this.env_, "data_format"in t ? t.data_format : "", "light_escape", null, !0)),
                    e.append('"')),
                    e.append(' value="'),
                    e.append(twig.filter.escape(this.env_, "value"in t ? t.value : "", "light_escape", null, !0)),
                    e.append('" placeholder="'),
                    e.append(twig.filter.escape(this.env_, "placeholder"in t ? t.placeholder : "", "light_escape", null, !0)),
                    e.append('" '),
                    "disabled"in t && t.disabled && e.append('disabled="disabled"'),
                    e.append(" "),
                    "comfort_zone"in t && t.comfort_zone && (e.append(' data-comfort-zone = "'),
                    e.append(twig.filter.escape(this.env_, "comfort_zone"in t ? t.comfort_zone : "", "light_escape", null, !0)),
                    e.append('" ')),
                    e.append(" "),
                    "withoutAutocomplete"in t && t.withoutAutocomplete && e.append('autocomplete="off" '),
                    e.append("/>"),
                    "show_icon"in t && t.show_icon && e.append('<span class="date_field-js tasks-date__caption__icon"></span>'),
                    "readonly"in t && t.readonly || e.append('<div class="date_field_wrapper--calendar"><svg class="svg-card-calendar-dims"><use xlink:href="#card-calendar"></use></svg></div>'),
                    e.append("</span>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_controls_date_field"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/controls/date_field", t)
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
                    t.append('<div class="date_filter '),
                    t.append(twig.filter.escape(this.env_, "controlClassName"in i ? twig.filter.def("controlClassName"in i ? i.controlClassName : "", "js-control-date-filter") : "js-control-date-filter", "light_escape", null, !0)),
                    t.append(' custom_select" '),
                    "save_overflow"in i && i.save_overflow && t.append('data-save-overflow="true"'),
                    t.append('><div class="date_filter__head"><div class="date_filter__head__icon"><svg class="svg-card-calendar-dims"><use xlink:href="#card-calendar"></use></svg></div>'),
                    "title"in i && i.title ? i.date_title = "title"in i ? i.title : "" : twig.attr("lang"in i ? i.lang : "", "filter_date_title") ? i.date_title = twig.attr("lang"in i ? i.lang : "", "filter_date_title") : i.date_title = this.env_.filter("i18n", "Any time"),
                    t.append('<span class="date_filter__period custom_select__selected '),
                    "date_time_field" == ("date_type"in i ? i.date_type : "") && t.append("date_time_filter__period"),
                    t.append('" data-before="'),
                    t.append(twig.filter.escape(this.env_, "date_title"in i ? i.date_title : "", "light_escape", null, !0)),
                    t.append('">'),
                    t.append(twig.filter.escape(this.env_, "date_title"in i ? i.date_title : "", "light_escape", null, !0)),
                    t.append('</span><span class="date_filter__head__dropdown_icon"></span></div><div class="date_filter__dropdown '),
                    t.append(twig.filter.escape(this.env_, "dropdown_class_name"in i ? i.dropdown_class_name : "", "light_escape", null, !0)),
                    t.append('">'),
                    "switcher"in i && (t.append('<div class="date_filter__param '),
                    t.append(twig.filter.length(this.env_, "switcher"in i ? i.switcher : "") > 1 ? "" : "hidden"),
                    t.append('">'),
                    new (e._get("interface/controls/toggler.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        items: "switcher"in i ? i.switcher : "",
                        class_name: "date_filter__param__toggler " + (twig.filter.length(this.env_, "switcher"in i ? i.switcher : "") > 1 ? "" : "hidden")
                    })),
                    t.append("</div>")),
                    t.append('<div><div class="date_filter__period_range__options"><div class="date_filter__period_range__controls '),
                    "date_time_field" == ("date_type"in i ? i.date_type : "") && t.append("date_time_filter__period_range"),
                    t.append('">'),
                    i.from_name = "from_name"in i ? i.from_name : "",
                    i.to_name = "to_name"in i ? i.to_name : "",
                    i.input_class = "js-date-filter-input ",
                    1 != ("sidebar"in i ? i.sidebar : "") && (i.input_class = ("input_class"in i ? i.input_class : "") + "date-filter-in-search "),
                    "date_input_class"in i && i.date_input_class && (i.input_class = ("input_class"in i ? i.input_class : "") + ("date_input_class"in i ? i.date_input_class : "")),
                    "from_name"in i && i.from_name || (i.from_name = "filter_date_from"),
                    "to_name"in i && i.to_name || (i.to_name = "filter_date_to"),
                    t.append('<input type="hidden" class="date_field__preset" name="'),
                    "name_date_preset"in i && i.name_date_preset ? t.append(twig.filter.escape(this.env_, "name_date_preset"in i ? i.name_date_preset : "", "light_escape", null, !0)) : t.append("filter[date_preset]"),
                    t.append('" value="'),
                    t.append(twig.filter.escape(this.env_, "date_preset"in i ? i.date_preset : "", "light_escape", null, !0)),
                    t.append('" />'),
                    "date_time_field" == ("date_type"in i ? i.date_type : "") ? (t.append('<div class="filter__custom_settings__item__value-wrapper clearfix filter__custom_input_date-time-field__wrapper ">'),
                    new (e._get("interface/controls/date_time_field.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        type: "range",
                        class_name: "",
                        input_class: "input_class"in i ? i.input_class : "",
                        name: {
                            from: "from_name"in i ? i.from_name : "",
                            to: "to_name"in i ? i.to_name : ""
                        }
                    })),
                    t.append("</div>")) : new (e._get("interface/controls/date_field.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        input_class: "input_class"in i ? i.input_class : "",
                        type: "range",
                        class_name: "date_filter__period_range__controls_field",
                        name: {
                            from: "from_name"in i ? i.from_name : "",
                            to: "to_name"in i ? i.to_name : ""
                        }
                    })),
                    t.append("</div></div>"),
                    "items"in i && i.items) {
                        t.append('<ul class="date_filter__period_list '),
                        1 == twig.filter.length(this.env_, "switcher"in i ? i.switcher : "") && t.append(" without_button "),
                        t.append('"><li class="date_filter__period_item custom_select__item" data-period="" style="display:none;"><span data-value="" class="custom_select__title">'),
                        t.append(twig.filter.escape(this.env_, "date_title"in i ? i.date_title : "", "light_escape", null, !0)),
                        t.append("</span></li>"),
                        i.custom_period_div = new twig.Markup('<div class="date_filter__period_item-input-days-wrapper"><input class="date_filter__period_item-input-days js-date_filter__period_item js-control-autosized_input" data-comfort-zone="0" type="number" value="30" max="999" /></div>'),
                        i._parent = i;
                        var a = "items"in i ? i.items : "";
                        twig.forEach(a, (function(e, n) {
                            i._key = n,
                            i.item = e,
                            t.append('<li class="date_filter__period_item custom_select__item custom_select__item-'),
                            t.append(twig.filter.escape(this.env_, twig.attr("item"in i ? i.item : "", "id"), "light_escape", null, !0)),
                            t.append('" data-period="'),
                            t.append(twig.filter.escape(this.env_, twig.attr("item"in i ? i.item : "", "id"), "light_escape", null, !0)),
                            t.append('"><span data-value="'),
                            t.append(twig.filter.escape(this.env_, twig.attr("item"in i ? i.item : "", "id"), "light_escape", null, !0)),
                            t.append('" class="custom_select__title" '),
                            twig.contains(["past_x_days", "next_x_days"], twig.attr("item"in i ? i.item : "", "id")) || (t.append('title="'),
                            t.append(twig.filter.escape(this.env_, twig.attr("item"in i ? i.item : "", "label"), "light_escape", null, !0))),
                            t.append('">'),
                            twig.contains(["past_x_days", "next_x_days"], twig.attr("item"in i ? i.item : "", "id")) ? t.append(twig.filter.replace(twig.attr("item"in i ? i.item : "", "label"), {
                                "%s": "custom_period_div"in i ? i.custom_period_div : ""
                            })) : t.append(twig.filter.escape(this.env_, twig.attr("item"in i ? i.item : "", "label"), "light_escape", null, !0)),
                            t.append("</span></li>")
                        }
                        ), this),
                        t.append("</ul>")
                    }
                    t.append("</div></div></div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_controls_date_filter"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/controls/date_filter", t)
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
                    this.env_.invoke("is_12_hour_format", "value"in i ? i.value : "") ? i.max_length = 18 : (i.input_class = ("input_class"in i ? twig.filter.def("input_class"in i ? i.input_class : "", "") : "") + " military date_field_with-time",
                    i.max_length = 16),
                    i.control_class_name = "control_class_name"in i ? "control_class_name"in i ? i.control_class_name : "" : "js-control-date-time",
                    "range" == ("type"in i ? i.type : "") ? (t.append('<div class="date_field_with-time_range js-date-time-range-control '),
                    t.append(twig.filter.escape(this.env_, "class_name"in i ? i.class_name : "", "light_escape", null, !0)),
                    t.append('">'),
                    i.value_splitted = this.env_.filter("split", this.env_, "value"in i ? i.value : "", " - "),
                    1 == twig.filter.length(this.env_, "value_splitted"in i ? i.value_splitted : "") && (i.value_splitted = this.env_.filter("split", this.env_, twig.attr("value_splitted"in i ? i.value_splitted : "", 0, void 0, "array"), "-")),
                    "readonly"in i && i.readonly || t.append('<span class="date_field_wrapper--calendar date_time_field_wrapper--calendar-with-time "><svg class="svg-card-calendar-dims"><use xlink:href="#card-calendar"></use></svg></span>'),
                    t.append('<span class = "date_field_with-time_range-box">'),
                    i.control_class_name = "control_class_name"in i ? "control_class_name"in i ? i.control_class_name : "" : "js-control-date-time",
                    new (e._get("interface/controls/date_time_field.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        class_name: "date_field_with-time_range-box_first",
                        type: "single",
                        readonly: !0,
                        input_class: "date_field_with-time_range-input_first js-control-autosized_input",
                        control_class_name: "js-control-date-time-in-range",
                        name: twig.attr("name"in i ? i.name : "", "from"),
                        value: twig.attr("value_splitted"in i ? i.value_splitted : "", 0, void 0, "array"),
                        comfort_zone: 1
                    })),
                    t.append('<span class="date_field_with-time_range-hyphen js-filter-date-time-hyphen hidden">-</span>'),
                    new (e._get("interface/controls/date_time_field.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        class_name: "date_field_with-time_range-box_second",
                        type: "single",
                        readonly: !0,
                        input_class: "date_field_with-time_range-input_second js-control-autosized_input",
                        control_class_name: "js-control-date-time-in-range",
                        name: twig.attr("name"in i ? i.name : "", "to"),
                        placeholder: "",
                        value: twig.attr("value_splitted"in i ? i.value_splitted : "", 1, void 0, "array"),
                        comfort_zone: 1
                    })),
                    t.append("</span></div>")) : new (e._get("interface/controls/date_field.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        type: "type"in i ? i.type : "",
                        value: "value"in i ? i.value : "",
                        name: "name"in i ? i.name : "",
                        placeholder: "placeholder"in i ? i.placeholder : "",
                        input_class: "input_class"in i ? i.input_class : "",
                        readonly: "readonly"in i ? i.readonly : "",
                        disabled: "disabled"in i ? i.disabled : "",
                        control_class_name: "control_class_name"in i ? i.control_class_name : "",
                        max_length: "max_length"in i ? i.max_length : "",
                        comfort_zone: "comfort_zone"in i ? i.comfort_zone : ""
                    }))
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_controls_date_time_field"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/controls/date_time_field", t)
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
                    i.choosed_item_text = "",
                    i.delimeter = " ",
                    i.deadline_within = "",
                    i.deadline_value = "0",
                    t.append(" "),
                    twig.attr("trigger_params"in i ? i.trigger_params : "", "days_later") && "0" != twig.attr("trigger_params"in i ? i.trigger_params : "", "days_later") && "1" != twig.attr("trigger_params"in i ? i.trigger_params : "", "days_later") && "3" != twig.attr("trigger_params"in i ? i.trigger_params : "", "days_later") && "true" != twig.attr("trigger_params"in i ? i.trigger_params : "", "week_later") && 1 != twig.attr("trigger_params"in i ? i.trigger_params : "", "week_later") && "true" != twig.attr("trigger_params"in i ? i.trigger_params : "", "today") && 1 != twig.attr("trigger_params"in i ? i.trigger_params : "", "today") || twig.attr("trigger_params"in i ? i.trigger_params : "", "hours_later") || twig.attr("trigger_params"in i ? i.trigger_params : "", "minutes_later"))
                        i.days_later = "",
                        i.hours_later = "",
                        i.minutes_later = "",
                        i.deadline_value = "custom",
                        i.choosed_item_text = twig.attr(twig.attr(twig.attr("lang"in i ? i.lang : "", "triggers"), "during"), "task_in") + " ",
                        twig.attr("trigger_params"in i ? i.trigger_params : "", "days_later") && 0 != twig.attr("trigger_params"in i ? i.trigger_params : "", "days_later") && (i.deadline_within = twig.attr("trigger_params"in i ? i.trigger_params : "", "days_later") + "d",
                        twig.attr("trigger_params"in i ? i.trigger_params : "", "hours_later") && 0 != twig.attr("trigger_params"in i ? i.trigger_params : "", "hours_later") && twig.attr("trigger_params"in i ? i.trigger_params : "", "min_later") && 0 != twig.attr("trigger_params"in i ? i.trigger_params : "", "min_later") ? i.delimeter = ", " : (twig.attr("trigger_params"in i ? i.trigger_params : "", "hours_later") && 0 != twig.attr("trigger_params"in i ? i.trigger_params : "", "hours_later") || twig.attr("trigger_params"in i ? i.trigger_params : "", "min_later") && 0 != twig.attr("trigger_params"in i ? i.trigger_params : "", "min_later")) && (i.deadline_within = ("deadline_within"in i ? i.deadline_within : "") + "_",
                        i.delimeter = " " + twig.attr(twig.attr(twig.attr("lang"in i ? i.lang : "", "triggers"), "during"), "task_and") + " "),
                        i.days_later = twig.attr("trigger_params"in i ? i.trigger_params : "", "days_later"),
                        i.choosed_item_text = ("choosed_item_text"in i ? i.choosed_item_text : "") + twig.attr("trigger_params"in i ? i.trigger_params : "", "days_later") + " " + this.env_.filter("numeral", twig.attr(twig.attr(twig.attr("lang"in i ? i.lang : "", "triggers"), "during"), "task_days"), twig.attr("trigger_params"in i ? i.trigger_params : "", "days_later")) + ("delimeter"in i ? i.delimeter : "")),
                        twig.attr("trigger_params"in i ? i.trigger_params : "", "hours_later") && 0 != twig.attr("trigger_params"in i ? i.trigger_params : "", "hours_later") && (i.deadline_within = ("deadline_within"in i ? i.deadline_within : "") + twig.attr("trigger_params"in i ? i.trigger_params : "", "hours_later") + "h",
                        twig.attr("trigger_params"in i ? i.trigger_params : "", "min_later") && 0 != twig.attr("trigger_params"in i ? i.trigger_params : "", "min_later") ? (i.deadline_within = ("deadline_within"in i ? i.deadline_within : "") + "_",
                        i.delimeter = " " + twig.attr(twig.attr(twig.attr("lang"in i ? i.lang : "", "triggers"), "during"), "task_and") + " ") : i.delimeter = "",
                        i.hours_later = twig.attr("trigger_params"in i ? i.trigger_params : "", "hours_later"),
                        i.choosed_item_text = ("choosed_item_text"in i ? i.choosed_item_text : "") + twig.attr("trigger_params"in i ? i.trigger_params : "", "hours_later") + " " + this.env_.filter("numeral", twig.attr(twig.attr(twig.attr("lang"in i ? i.lang : "", "triggers"), "during"), "task_hours"), twig.attr("trigger_params"in i ? i.trigger_params : "", "hours_later")) + ("delimeter"in i ? i.delimeter : "")),
                        twig.attr("trigger_params"in i ? i.trigger_params : "", "min_later") && 0 != twig.attr("trigger_params"in i ? i.trigger_params : "", "min_later") && (i.deadline_within = twig.attr("trigger_params"in i ? i.trigger_params : "", "min_later") + "m",
                        i.minutes_later = twig.attr("trigger_params"in i ? i.trigger_params : "", "min_later"),
                        i.choosed_item_text = ("choosed_item_text"in i ? i.choosed_item_text : "") + twig.attr("trigger_params"in i ? i.trigger_params : "", "min_later") + " " + this.env_.filter("numeral", twig.attr(twig.attr(twig.attr("lang"in i ? i.lang : "", "triggers"), "during"), "task_minutes"), twig.attr("trigger_params"in i ? i.trigger_params : "", "min_later")));
                    else {
                        twig.attr("trigger_params"in i ? i.trigger_params : "", "week_later") ? (i.deadline_value = "week",
                        i.choosed_item = "week") : twig.attr("trigger_params"in i ? i.trigger_params : "", "today") ? (i.deadline_value = "today",
                        i.choosed_item = "today") : (twig.attr("trigger_params"in i ? i.trigger_params : "", "days_later") ? i.deadline_value = twig.attr("trigger_params"in i ? i.trigger_params : "", "days_later") : i.deadline_value = 0,
                        i.choosed_item = twig.attr("trigger_params"in i ? i.trigger_params : "", "days_later")),
                        i._parent = i;
                        var a = "items"in i ? i.items : "";
                        twig.forEach(a, (function(e, t) {
                            i._key = t,
                            i.item = e,
                            twig.attr("item"in i ? i.item : "", "value") == ("choosed_item"in i ? i.choosed_item : "") && (i.choosed_item_text = twig.attr("item"in i ? i.item : "", "task_option"))
                        }
                        ), this)
                    }
                    if (!("choosed_item_text"in i) || !i.choosed_item_text || " " == ("choosed_item_text"in i ? i.choosed_item_text : "")) {
                        i._parent = i,
                        a = "items"in i ? i.items : "";
                        var l = {
                            index0: 0,
                            index: 1,
                            first: !0
                        };
                        if (twig.countable(a)) {
                            var s = twig.count(a);
                            l.revindex0 = s - 1,
                            l.revindex = s,
                            l.length = s,
                            l.last = 1 === s
                        }
                        twig.forEach(a, (function(e, t) {
                            i._key = t,
                            i.item = e,
                            twig.attr(l, "first") && (i.choosed_item_text = twig.attr("item"in i ? i.item : "", "option")),
                            ++l.index0,
                            ++l.index,
                            l.first = !1,
                            l.length && (--l.revindex0,
                            --l.revindex,
                            l.last = 0 === l.revindex0)
                        }
                        ), this)
                    }
                    i.max_lenght_hours = "2",
                    i.max_lenght_minutes = "2",
                    "close_delay"in i && i.close_delay && (i.max_lenght_hours = "5",
                    i.max_lenght_minutes = "2",
                    i.choosed_item = "close_delay"in i ? i.close_delay : "",
                    i.choosed_item_text = "",
                    i._parent = i,
                    a = "items"in i ? i.items : "",
                    twig.forEach(a, (function(e, t) {
                        i._key = t,
                        i.item = e,
                        ("choosed_item"in i ? i.choosed_item : "") == twig.attr("item"in i ? i.item : "", "value") && (i.choosed_item_text = twig.attr("item"in i ? i.item : "", "option"))
                    }
                    ), this),
                    "" == ("choosed_item_text"in i ? i.choosed_item_text : "") && (i.hours_later = this.env_.filter("round", ("choosed_item"in i ? i.choosed_item : "") / 3600, 0, "floor"),
                    i.minutes_later = this.env_.filter("round", ("choosed_item"in i ? i.choosed_item : "") / 60 % 60, 0, "floor"),
                    0 == ("hours_later"in i ? i.hours_later : "") && (i.hours_later = ""),
                    0 == ("minutes_later"in i ? i.minutes_later : "") && (i.minutes_later = ""),
                    ("hours_later"in i ? i.hours_later : "") > 0 && (("hours_later"in i ? i.hours_later : "") % 10 == 1 && ("hours_later"in i ? i.hours_later : "") % 100 != 11 ? i.hourse_format = twig.filter.lower(this.env_, this.env_.filter("numeral", twig.attr(twig.attr(twig.attr("lang"in i ? i.lang : "", "triggers"), "during"), "task_hours"), 1)) : ("hours_later"in i ? i.hours_later : "") % 10 >= 2 && ("hours_later"in i ? i.hours_later : "") % 10 <= 4 ? i.hourse_format = twig.filter.lower(this.env_, this.env_.filter("numeral", twig.attr(twig.attr(twig.attr("lang"in i ? i.lang : "", "triggers"), "during"), "task_hours"), 3)) : i.hourse_format = twig.filter.lower(this.env_, this.env_.filter("numeral", twig.attr(twig.attr(twig.attr("lang"in i ? i.lang : "", "triggers"), "during"), "task_hours"), 15)),
                    i.choosed_item_text = ("hours_later"in i ? i.hours_later : "") + " " + ("hourse_format"in i ? i.hourse_format : "")),
                    ("minutes_later"in i ? i.minutes_later : "") > 0 && (("minutes_later"in i ? i.minutes_later : "") % 10 == 1 && 11 != ("minutes_later"in i ? i.minutes_later : "") ? i.minutes_format = twig.filter.lower(this.env_, this.env_.filter("numeral", twig.attr(twig.attr(twig.attr("lang"in i ? i.lang : "", "triggers"), "during"), "task_minutes"), 1)) : ("minutes_later"in i ? i.minutes_later : "") % 10 >= 2 && ("minutes_later"in i ? i.minutes_later : "") % 10 <= 4 ? i.minutes_format = twig.filter.lower(this.env_, this.env_.filter("numeral", twig.attr(twig.attr(twig.attr("lang"in i ? i.lang : "", "triggers"), "during"), "task_minutes"), 3)) : i.minutes_format = twig.filter.lower(this.env_, this.env_.filter("numeral", twig.attr(twig.attr(twig.attr("lang"in i ? i.lang : "", "triggers"), "during"), "task_minutes"), 15)),
                    ("hours_later"in i ? i.hours_later : "") > 0 && ("minutes_later"in i ? i.minutes_later : "") > 0 ? i.choosed_item_text = ("hours_later"in i ? i.hours_later : "") + " " + ("hourse_format"in i ? i.hourse_format : "") + " " + twig.filter.lower(this.env_, this.env_.filter("i18n", "and")) + " " + ("minutes_later"in i ? i.minutes_later : "") + " " + ("minutes_format"in i ? i.minutes_format : "") : i.choosed_item_text = ("minutes_later"in i ? i.minutes_later : "") + " " + ("minutes_format"in i ? i.minutes_format : "")))),
                    t.append('<div class="control--deadline_select deadline_select" id="dl_select_'),
                    t.append(twig.filter.escape(this.env_, twig.attr("trigger_params"in i ? i.trigger_params : "", "id"), "light_escape", null, !0)),
                    t.append('"><div class="deadline_select__caption"><span class="deadline_select__caption-calendar icon icon-inline icon-calendar-2"></span><span class="tasks-date__caption__text">'),
                    t.append(twig.filter.escape(this.env_, twig.attr(twig.attr("lang"in i ? i.lang : "", "triggers"), "with_deadline"), "light_escape", null, !0)),
                    t.append(': </span><span class="js-deadline-additional-caption">'),
                    t.append(twig.filter.escape(this.env_, twig.filter.capitalize(this.env_, "choosed_item_text"in i ? i.choosed_item_text : ""), "light_escape", null, !0)),
                    t.append('</span><b class="tasks-date__caption__icon"></b></div><div class="deadline_select__list">'),
                    i._parent = i,
                    a = "items"in i ? i.items : "",
                    twig.forEach(a, (function(e, n) {
                        i._key = n,
                        i.item = e,
                        t.append('<div class="deadline_select__list__item js-deadline_select-item '),
                        ("choosed_item"in i ? i.choosed_item : "") == twig.attr("item"in i ? i.item : "", "value") && t.append("selected"),
                        t.append('" data-deadline="'),
                        t.append(twig.filter.escape(this.env_, twig.attr("item"in i ? i.item : "", "value"), "light_escape", null, !0)),
                        t.append('">'),
                        t.append(twig.filter.escape(this.env_, twig.attr("item"in i ? i.item : "", "option"), "light_escape", null, !0)),
                        t.append("</div>")
                    }
                    ), this),
                    t.append('<div class="deadline_select__list__item deadline_select__list__item-custom clearfix" data-deadline="custom"><span class="deadline_select__header">'),
                    t.append(twig.filter.escape(this.env_, twig.attr(twig.attr(twig.attr("lang"in i ? i.lang : "", "triggers"), "during"), "text"), "light_escape", null, !0)),
                    t.append(':</span><div class="deadline_select__input">'),
                    new (e._get("interface/controls/input.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        class_name: "js-deadline-input js-control-allow-numeric",
                        name: "deadline-days",
                        max_length: "3",
                        value: "days_later"in i ? i.days_later : ""
                    })),
                    t.append('<span class="deadline_select__input_descr">'),
                    t.append(twig.filter.escape(this.env_, twig.attr(twig.attr(twig.attr("lang"in i ? i.lang : "", "triggers"), "during"), "days"), "light_escape", null, !0)),
                    t.append('</span></div><div class="deadline_select__input">'),
                    new (e._get("interface/controls/input.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        class_name: "js-deadline-input js-deadline-input-hours js-control-allow-numeric",
                        name: "deadline-hours",
                        max_length: "max_lenght_hours"in i ? i.max_lenght_hours : "",
                        value: "hours_later"in i ? i.hours_later : ""
                    })),
                    t.append('<span class="deadline_select__input_descr">'),
                    t.append(twig.filter.escape(this.env_, twig.attr(twig.attr(twig.attr("lang"in i ? i.lang : "", "triggers"), "during"), "hours"), "light_escape", null, !0)),
                    t.append('</span></div><div class="deadline_select__input">'),
                    new (e._get("interface/controls/input.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        class_name: "js-deadline-input js-deadline-input-minutes js-control-allow-numeric",
                        name: "deadline-minutes",
                        max_length: "max_lenght_minutes"in i ? i.max_lenght_minutes : "",
                        value: "minutes_later"in i ? i.minutes_later : ""
                    })),
                    t.append('<span class="deadline_select__input_descr">'),
                    t.append(twig.filter.escape(this.env_, twig.attr(twig.attr(twig.attr("lang"in i ? i.lang : "", "triggers"), "during"), "minutes"), "light_escape", null, !0)),
                    t.append("</span></div>"),
                    new (e._get("interface/controls/button.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        text: twig.attr(twig.attr(twig.attr("lang"in i ? i.lang : "", "page"), "buttons"), "ok"),
                        class_name: "js-deadline_select-custom_item deadline_select__btn"
                    })),
                    t.append("</div></div>"),
                    new (e._get("interface/controls/input.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        name: "within-deadline",
                        type: "hidden",
                        additional_data: "data-deadline-within=" + ("deadline_within"in i ? i.deadline_within : ""),
                        value: "close_delay"in i ? twig.filter.def("close_delay"in i ? i.close_delay : "", "deadline_value"in i ? i.deadline_value : "") : "deadline_value"in i ? i.deadline_value : ""
                    })),
                    t.append("</div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_controls_deadline_select"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/controls/deadline_select", t)
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
                    e.append("<span "),
                    "id"in t && t.id && (e.append('id="'),
                    e.append(twig.filter.escape(this.env_, "id"in t ? t.id : "", "light_escape", null, !0)),
                    e.append('"')),
                    e.append(' class="button-delete '),
                    e.append(twig.filter.escape(this.env_, "class_name"in t ? t.class_name : "", "light_escape", null, !0)),
                    e.append('"><span class="icon icon-delete-trash"></span>'),
                    e.append(twig.filter.escape(this.env_, "text"in t ? t.text : "", "light_escape", null, !0)),
                    e.append("</span>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_controls_delete_button"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/controls/delete_button", t)
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
                    "is_deleted"in i && i.is_deleted && (i.file_id = null,
                    i.file_name = null,
                    i.file_size = null),
                    t.append('<div class="drive-field '),
                    t.append(twig.filter.escape(this.env_, "control_class_name"in i ? twig.filter.def("control_class_name"in i ? i.control_class_name : "", "js-control-drive-field") : "js-control-drive-field", "light_escape", null, !0)),
                    t.append(" "),
                    "file_id"in i && i.file_id || t.append("empty"),
                    t.append(' js-file-name-cache-width" data-field-id="'),
                    t.append(twig.filter.escape(this.env_, "field_id"in i ? i.field_id : "", "light_escape", null, !0)),
                    t.append('" data-uuid="'),
                    t.append(twig.filter.escape(this.env_, "file_id"in i ? i.file_id : "", "light_escape", null, !0)),
                    t.append('" data-element-id="'),
                    t.append(twig.filter.escape(this.env_, "element_id"in i ? i.element_id : "", "light_escape", null, !0)),
                    t.append('" data-element-type="'),
                    t.append(twig.filter.escape(this.env_, "element_type"in i ? i.element_type : "", "light_escape", null, !0)),
                    t.append('" data-lead-element-id="'),
                    t.append(twig.filter.escape(this.env_, "lead_element_id"in i ? i.lead_element_id : "", "light_escape", null, !0)),
                    t.append('" '),
                    t.append("additional_data"in i ? i.additional_data : ""),
                    t.append('><div class="drive-field__controls"><div class="drive-field__name"><div class="drive-field__name-inner js-drive-field-name js-control-file-name" title="'),
                    t.append(twig.filter.escape(this.env_, "file_name"in i ? i.file_name : "", "light_escape", null, !0)),
                    t.append('" data-upload-text="'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Upload"), "light_escape", null, !0)),
                    t.append('" data-file-name-type="'),
                    t.append(twig.filter.escape(this.env_, "file_name_type"in i ? i.file_name_type : "", "light_escape", null, !0)),
                    t.append('">'),
                    "file_id"in i && i.file_id && t.append(twig.filter.escape(this.env_, "file_name"in i ? twig.filter.def("file_name"in i ? i.file_name : "", this.env_.filter("i18n", "Deleted file")) : this.env_.filter("i18n", "Deleted file"), "light_escape", null, !0)),
                    t.append('</div><span class="drive-field__size">'),
                    "file_id"in i && i.file_id && ("file_size"in i ? i.file_size : "") > 0 && (t.append("("),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("format_file_size", "file_size"in i ? i.file_size : ""), "light_escape", null, !0)),
                    t.append(")")),
                    t.append("</span></div>"),
                    "disabled"in i && i.disabled || "disable_download"in i && i.disable_download || new (e._get("interface/controls/button.twig"))(this.env_).render_(t, {
                        class_name: "drive-field__download-btn js-drive-field-download",
                        svg_class_name: "common--download-files",
                        text: this.env_.filter("i18n", "download"),
                        tab_index: "-1",
                        inner_class_name: "drive-field__download-btn-inner"
                    }),
                    t.append('<input type="hidden" '),
                    "input_class_name"in i && i.input_class_name && (t.append('class="'),
                    t.append(twig.filter.escape(this.env_, "input_class_name"in i ? i.input_class_name : "", "light_escape", null, !0)),
                    t.append('"')),
                    t.append(' name="'),
                    t.append(twig.filter.escape(this.env_, "name"in i ? i.name : "", "light_escape", null, !0)),
                    t.append('" value="'),
                    t.append(twig.filter.escape(this.env_, "file_id"in i ? i.file_id : "", "light_escape", null, !0)),
                    t.append('" '),
                    "disabled"in i && i.disabled && t.append('disabled="disabled"'),
                    t.append("></div>"),
                    i.unq_id = twig.functions.random(this.env_),
                    new (e._get("interface/controls/file.twig"))(this.env_).render_(t, {
                        id: "drive-field-" + ("unq_id"in i ? i.unq_id : ""),
                        class: "hidden js-drive-field-file js-form-changes-skip",
                        accept: "accept"in i ? i.accept : ""
                    }),
                    new (e._get("interface/common/tip.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        class_name: "drive-field__main-menu js-drive-field-main-menu",
                        items: [{
                            svg_icon: "controls--substitute",
                            class_name: "drive-field__substitute js-drive-field-substitute",
                            text: '<label class="drive-field__substitute-label" for="drive-field-' + ("unq_id"in i ? i.unq_id : "") + '">' + this.env_.filter("i18n", "Replace") + "</label>",
                            should_be_raw: !0
                        }, {
                            svg_icon: "common--download-files",
                            class_name: "js-drive-field-download",
                            text: this.env_.filter("i18n", "download")
                        }, {
                            svg_icon: "controls--file-versions",
                            class_name: "js-drive-field-versions",
                            text: this.env_.filter("i18n", "Versions")
                        }, {
                            svg_icon: "common--trash",
                            class_name: "js-drive-field-delete " + ("element_id"in i && i.element_id && "element_type"in i && i.element_type ? "" : "hidden"),
                            text: this.env_.filter("i18n", "Delete")
                        }]
                    })),
                    t.append("</div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_controls_drive_field"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/controls/drive_field", t)
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
                    new (e._get("interface/controls/button.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        text: "accept_button_text"in i ? i.accept_button_text : "",
                        class_name: "js-task-submit feed-note__button",
                        tab_index: "-1",
                        disabled: "disabled"in i ? i.disabled : ""
                    })),
                    new (e._get("interface/controls/cancel_button.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        text: twig.attr("lang"in i ? i.lang : "", "button_cancel"),
                        class_name: "js-task-edit-cancel feed-note__button_cancel",
                        tab_index: "-1"
                    }))
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_controls_feed_note_main_buttons"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/controls/feed_note_main_buttons", t)
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
                    e.append('<input type="file" name="'),
                    e.append(twig.filter.escape(this.env_, "name"in t ? t.name : "", "light_escape", null, !0)),
                    e.append('" class="'),
                    e.append(twig.filter.escape(this.env_, "class"in t ? t.class : "", "light_escape", null, !0)),
                    e.append('" '),
                    "id"in t && t.id && (e.append('id="'),
                    e.append(twig.filter.escape(this.env_, "id"in t ? t.id : "", "light_escape", null, !0)),
                    e.append('"')),
                    e.append(' size="'),
                    e.append(twig.filter.escape(this.env_, "size"in t ? t.size : "", "light_escape", null, !0)),
                    e.append('" style="'),
                    e.append(twig.filter.escape(this.env_, "style"in t ? t.style : "", "light_escape", null, !0)),
                    e.append('" accept="'),
                    e.append(twig.filter.escape(this.env_, "accept"in t ? t.accept : "", "light_escape", null, !0)),
                    e.append('" '),
                    "disabled"in t && t.disabled && e.append("disabled"),
                    e.append("> "),
                    e.append(twig.filter.escape(this.env_, "text"in t ? t.text : "", "light_escape", null, !0))
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_controls_file"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/controls/file", t)
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
                    e.append('<input name="'),
                    e.append(twig.filter.escape(this.env_, "name"in t ? t.name : "", "light_escape", null, !0)),
                    e.append('" '),
                    "data_id"in t && "data_id"in t && t.data_id && (e.append('data-id="'),
                    e.append(twig.filter.escape(this.env_, "data_id"in t ? t.data_id : "", "light_escape", null, !0)),
                    e.append('"')),
                    e.append(" "),
                    "sort"in t && "sort"in t && t.sort && (e.append('data-sort="'),
                    e.append(twig.filter.escape(this.env_, "sort"in t ? t.sort : "", "light_escape", null, !0)),
                    e.append('"')),
                    e.append(' class="'),
                    e.append(twig.filter.escape(this.env_, "class_name"in t ? t.class_name : "", "light_escape", null, !0)),
                    e.append(" "),
                    "styled_input"in t && t.styled_input || e.append("text-input"),
                    e.append('" '),
                    "id"in t && t.id && (e.append('id="'),
                    e.append(twig.filter.escape(this.env_, "id"in t ? t.id : "", "light_escape", null, !0)),
                    e.append('"')),
                    e.append(' type="'),
                    "type"in t && t.type ? e.append(twig.filter.escape(this.env_, "type"in t ? t.type : "", "light_escape", null, !0)) : e.append("text"),
                    e.append('" value="'),
                    null === ("value"in t ? t.value : "") ? e.append("") : e.append(twig.filter.escape(this.env_, "value"in t ? t.value : "", "light_escape", null, !0)),
                    e.append('" '),
                    e.append(' placeholder="'),
                    e.append(twig.filter.escape(this.env_, "placeholder"in t ? t.placeholder : "", "light_escape", null, !0)),
                    e.append('" '),
                    "style"in t && "style"in t && t.style) {
                        e.append('style="'),
                        t._parent = t;
                        var n = "style"in t ? t.style : "";
                        twig.forEach(n, (function(i, n) {
                            t.prop = n,
                            t.value = i,
                            e.append(twig.filter.escape(this.env_, "prop"in t ? t.prop : "", "light_escape", null, !0)),
                            e.append(":"),
                            e.append(twig.filter.escape(this.env_, "value"in t ? t.value : "", "light_escape", null, !0)),
                            e.append(";")
                        }
                        ), this),
                        e.append('"')
                    }
                    e.append(" "),
                    "max_length"in t && "max_length"in t && t.max_length && (e.append('maxlength="'),
                    e.append(twig.filter.escape(this.env_, "max_length"in t ? t.max_length : "", "light_escape", null, !0)),
                    e.append('"')),
                    e.append(" "),
                    "min_length"in t && "min_length"in t && t.min_length && (e.append('minlength="'),
                    e.append(twig.filter.escape(this.env_, "min_length"in t ? t.min_length : "", "light_escape", null, !0)),
                    e.append('"')),
                    e.append(" "),
                    "required"in t && "required"in t && t.required && (e.append('required="'),
                    e.append(twig.filter.escape(this.env_, "required"in t ? t.required : "", "light_escape", null, !0)),
                    e.append('"')),
                    e.append(" "),
                    "disabled"in t && t.disabled && e.append('disabled="disabled"'),
                    e.append(" "),
                    "autofocus"in t && t.autofocus && e.append('autofocus="autofocus"'),
                    e.append(" "),
                    "readonly"in t && t.readonly && e.append('readonly="readonly"'),
                    e.append(" "),
                    e.append("additional_data"in t ? t.additional_data : ""),
                    e.append(' autocomplete="off" '),
                    "autosize_width"in t && t.autosize_width && (e.append('size="'),
                    e.append(twig.filter.escape(this.env_, twig.functions.max(twig.filter.length(this.env_, "value"in t ? t.value : ""), "min_size"in t ? t.min_size : ""), "light_escape", null, !0)),
                    e.append('"')),
                    e.append(" "),
                    "form"in t && t.form && (e.append('form="'),
                    e.append(twig.filter.escape(this.env_, "form"in t ? t.form : "", "light_escape", null, !0)),
                    e.append('"')),
                    e.append(" />")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_controls_input"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/controls/input", t)
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
                    i.name_input_name = ("name"in i ? i.name : "") + "[name]",
                    i.tax_registration_reason_code_name = ("name"in i ? i.name : "") + "[tax_registration_reason_code]",
                    i.entity_type_name = ("name"in i ? i.name : "") + "[entity_type]",
                    i.vat_id_name = ("name"in i ? i.name : "") + "[vat_id]",
                    i.address_name = ("name"in i ? i.name : "") + "[address]",
                    i.kpp_name = ("name"in i ? i.name : "") + "[kpp]",
                    i.bank_code_name = ("name"in i ? i.name : "") + "[bank_code]",
                    i.external_name = ("name"in i ? i.name : "") + "[external_id]",
                    i.unp = ("name"in i ? i.name : "") + "[unp]",
                    i.bin = ("name"in i ? i.name : "") + "[bin]",
                    i.egrpou = ("name"in i ? i.name : "") + "[egrpou]",
                    i.mfo = ("name"in i ? i.name : "") + "[mfo]",
                    i.bank_account_number = ("name"in i ? i.name : "") + "[bank_account_number]",
                    i.oked = ("name"in i ? i.name : "") + "[oked]",
                    i.director = ("name"in i ? i.name : "") + "[director]",
                    i.real_address = ("name"in i ? i.name : "") + "[real_address]",
                    i.value = twig.attr(twig.attr(twig.attr(twig.attr("element"in i ? i.element : "", "cf"), twig.attr("cf"in i ? i.cf : "", "ID"), void 0, "array"), "VALUE"), "key"in i ? i.key : "", void 0, "array"),
                    t.append('<div class="legal-entity js-control-legal-entity '),
                    t.append(twig.filter.escape(this.env_, "class_name"in i ? i.class_name : "", "light_escape", null, !0)),
                    t.append('" data-search-in="'),
                    t.append(twig.filter.escape(this.env_, twig.attr(twig.attr("cf"in i ? i.cf : "", "SETTINGS"), "search_in", void 0, void 0, !0) ? twig.filter.def(twig.attr(twig.attr("cf"in i ? i.cf : "", "SETTINGS"), "search_in"), "") : "", "light_escape", null, !0)),
                    t.append('"><div class="legal-entity__item legal-entity__item_name">'),
                    new (e._get("interface/controls/suggest.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        class_name: "legal-entity__suggest legal-entity__suggest_name",
                        additional_data: 'spellcheck="false" data-query-type="name"',
                        input_class_name: "linked-form__cf js-legal-entity-name " + ("input_class_name"in i ? i.input_class_name : ""),
                        items: [],
                        value: twig.attr("value"in i ? i.value : "", "name", void 0, void 0, !0) ? twig.filter.def(twig.attr("value"in i ? i.value : "", "name"), "") : "",
                        input_type: "text",
                        name: "name_input_name"in i ? i.name_input_name : "",
                        ajax: [],
                        placeholder: "placeholder"in i ? i.placeholder : "",
                        disabled: "disabled"in i ? i.disabled : ""
                    })),
                    t.append('</div><div class="legal-entity__item legal-entity__item_labeled"><span class="legal-entity__item-label">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "ITIN"), "light_escape", null, !0)),
                    t.append(" </span>"),
                    new (e._get("interface/controls/suggest.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        class_name: "legal-entity__suggest legal-entity__suggest_vat",
                        additional_data: 'spellcheck="false" data-query-type="vat-id"',
                        input_class_name: "linked-form__cf js-legal-entity-vat legal-entity__item-mini-input js-control-allow-numeric",
                        items: [],
                        value: twig.attr("value"in i ? i.value : "", "vat_id", void 0, void 0, !0) ? twig.filter.def(twig.attr("value"in i ? i.value : "", "vat_id"), "") : "",
                        input_type: "text",
                        name: "vat_id_name"in i ? i.vat_id_name : "",
                        styled_input: !0,
                        ajax: [],
                        placeholder: "inn_placeholder"in i && i.inn_placeholder ? "inn_placeholder"in i ? i.inn_placeholder : "" : "placeholder"in i ? i.placeholder : ""
                    })),
                    t.append('</div><div class="legal-entity__item legal-entity__item_labeled"><span class="legal-entity__item-label">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "IEC"), "light_escape", null, !0)),
                    t.append(" </span>"),
                    new (e._get("interface/controls/suggest.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        class_name: "legal-entity__suggest legal-entity__suggest_kpp",
                        additional_data: 'spellcheck="false" data-query-type="kpp"',
                        input_class_name: "linked-form__cf js-legal-entity-kpp legal-entity__item-mini-input js-control-allow-numeric",
                        items: [],
                        value: twig.attr("value"in i ? i.value : "", "kpp", void 0, void 0, !0) ? twig.filter.def(twig.attr("value"in i ? i.value : "", "kpp"), "") : "",
                        input_type: "text",
                        name: "kpp_name"in i ? i.kpp_name : "",
                        styled_input: !0,
                        ajax: [],
                        placeholder: "kpp_placeholder"in i && i.kpp_placeholder ? "kpp_placeholder"in i ? i.kpp_placeholder : "" : "placeholder"in i ? i.placeholder : ""
                    })),
                    t.append('</div><div class="legal-entity__item legal-entity__item_labeled"><span class="legal-entity__item-label">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Registration #"), "light_escape", null, !0)),
                    t.append(" </span>"),
                    new (e._get("interface/controls/suggest.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        class_name: "legal-entity__suggest legal-entity__suggest_ogrn",
                        additional_data: 'spellcheck="false" data-query-type="tax_registration_reason_code"',
                        input_class_name: "linked-form__cf js-legal-entity-ogrn legal-entity__item-mini-input js-control-allow-numeric",
                        items: [],
                        value: twig.attr("value"in i ? i.value : "", "tax_registration_reason_code", void 0, void 0, !0) ? twig.filter.def(twig.attr("value"in i ? i.value : "", "tax_registration_reason_code"), "") : "",
                        input_type: "text",
                        name: "tax_registration_reason_code_name"in i ? i.tax_registration_reason_code_name : "",
                        styled_input: !0,
                        ajax: [],
                        placeholder: "ogrn_placeholder"in i && i.ogrn_placeholder ? "ogrn_placeholder"in i ? i.ogrn_placeholder : "" : "placeholder"in i ? i.placeholder : ""
                    })),
                    t.append('</div><div class="legal-entity__item legal-entity__item_labeled"><span class="legal-entity__item-label">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Bank code"), "light_escape", null, !0)),
                    t.append(" </span>"),
                    new (e._get("interface/controls/suggest.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        class_name: "legal-entity__suggest legal-entity__suggest_bank_code",
                        additional_data: 'spellcheck="false" data-query-type="bank_code"',
                        input_class_name: "linked-form__cf js-legal-entity-bank_code legal-entity__item-mini-input js-control-allow-numeric",
                        items: [],
                        value: twig.attr("value"in i ? i.value : "", "bank_code", void 0, void 0, !0) ? twig.filter.def(twig.attr("value"in i ? i.value : "", "bank_code"), "") : "",
                        input_type: "text",
                        name: "bank_code_name"in i ? i.bank_code_name : "",
                        styled_input: !0,
                        ajax: [],
                        placeholder: "bank_code_placeholder"in i && i.bank_code_placeholder ? "bank_code_placeholder"in i ? i.bank_code_placeholder : "" : "placeholder"in i ? i.placeholder : ""
                    })),
                    t.append("</div>"),
                    twig.attr("value"in i ? i.value : "", "bin") ? (t.append('<div class="legal-entity__item legal-entity__item_labeled"><span class="legal-entity__item-label">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "БИН"), "light_escape", null, !0)),
                    t.append(" </span>"),
                    new (e._get("interface/controls/suggest.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        class_name: "legal-entity__suggest legal-entity__suggest_bin",
                        additional_data: 'spellcheck="false"',
                        input_class_name: "linked-form__cf legal-entity__item-mini-input",
                        items: [],
                        value: twig.attr("value"in i ? i.value : "", "bin", void 0, void 0, !0) ? twig.filter.def(twig.attr("value"in i ? i.value : "", "bin"), "") : "",
                        input_type: "text",
                        name: "bin"in i ? i.bin : "",
                        styled_input: !0,
                        ajax: [],
                        placeholder: "bin_placeholder"in i && i.bin_placeholder ? "bin_placeholder"in i ? i.bin_placeholder : "" : "placeholder"in i ? i.placeholder : ""
                    })),
                    t.append("</div>")) : (t.append('<input type="hidden" class="js-legal-entity-bin" name="'),
                    t.append(twig.filter.escape(this.env_, "bin"in i ? i.bin : "", "light_escape", null, !0)),
                    t.append('" value="'),
                    t.append(twig.filter.escape(this.env_, twig.attr("value"in i ? i.value : "", "bin", void 0, void 0, !0) ? twig.filter.def(twig.attr("value"in i ? i.value : "", "bin"), "") : "", "light_escape", null, !0)),
                    t.append('" disabled="'),
                    t.append(twig.filter.escape(this.env_, "disabled"in i ? i.disabled : "", "light_escape", null, !0)),
                    t.append('">')),
                    twig.attr("value"in i ? i.value : "", "unp") ? (t.append('<div class="legal-entity__item legal-entity__item_labeled"><span class="legal-entity__item-label">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "УНП"), "light_escape", null, !0)),
                    t.append(" </span>"),
                    new (e._get("interface/controls/suggest.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        class_name: "legal-entity__suggest legal-entity__suggest_unp",
                        additional_data: 'spellcheck="false"',
                        input_class_name: "linked-form__cf legal-entity__item-mini-input",
                        items: [],
                        value: twig.attr("value"in i ? i.value : "", "unp", void 0, void 0, !0) ? twig.filter.def(twig.attr("value"in i ? i.value : "", "unp"), "") : "",
                        input_type: "text",
                        name: "unp"in i ? i.unp : "",
                        styled_input: !0,
                        ajax: [],
                        placeholder: "unp_placeholder"in i && i.unp_placeholder ? "unp_placeholder"in i ? i.unp_placeholder : "" : "placeholder"in i ? i.placeholder : ""
                    })),
                    t.append("</div>")) : (t.append('<input type="hidden" class="js-legal-entity-unp" name="'),
                    t.append(twig.filter.escape(this.env_, "unp"in i ? i.unp : "", "light_escape", null, !0)),
                    t.append('" value="'),
                    t.append(twig.filter.escape(this.env_, twig.attr("value"in i ? i.value : "", "unp", void 0, void 0, !0) ? twig.filter.def(twig.attr("value"in i ? i.value : "", "unp"), "") : "", "light_escape", null, !0)),
                    t.append('" disabled="'),
                    t.append(twig.filter.escape(this.env_, "disabled"in i ? i.disabled : "", "light_escape", null, !0)),
                    t.append('">')),
                    twig.attr("value"in i ? i.value : "", "egrpou") ? (t.append('<div class="legal-entity__item legal-entity__item_labeled"><span class="legal-entity__item-label">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "ЕГРПОУ"), "light_escape", null, !0)),
                    t.append(" </span>"),
                    new (e._get("interface/controls/suggest.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        class_name: "legal-entity__suggest legal-entity__suggest_egrpou",
                        additional_data: 'spellcheck="false"',
                        input_class_name: "linked-form__cf legal-entity__item-mini-input",
                        items: [],
                        value: twig.attr("value"in i ? i.value : "", "egrpou", void 0, void 0, !0) ? twig.filter.def(twig.attr("value"in i ? i.value : "", "egrpou"), "") : "",
                        input_type: "text",
                        name: "egrpou"in i ? i.egrpou : "",
                        styled_input: !0,
                        ajax: [],
                        placeholder: "egrpou_placeholder"in i && i.egrpou_placeholder ? "egrpou_placeholder"in i ? i.egrpou_placeholder : "" : "placeholder"in i ? i.placeholder : ""
                    })),
                    t.append("</div>")) : (t.append('<input type="hidden" class="js-legal-entity-egrpou" name="'),
                    t.append(twig.filter.escape(this.env_, "egrpou"in i ? i.egrpou : "", "light_escape", null, !0)),
                    t.append('" value="'),
                    t.append(twig.filter.escape(this.env_, twig.attr("value"in i ? i.value : "", "egrpou", void 0, void 0, !0) ? twig.filter.def(twig.attr("value"in i ? i.value : "", "egrpou"), "") : "", "light_escape", null, !0)),
                    t.append('" disabled="'),
                    t.append(twig.filter.escape(this.env_, "disabled"in i ? i.disabled : "", "light_escape", null, !0)),
                    t.append('">')),
                    twig.attr("value"in i ? i.value : "", "mfo") ? (t.append('<div class="legal-entity__item legal-entity__item_labeled"><span class="legal-entity__item-label">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "MFO"), "light_escape", null, !0)),
                    t.append("</span>"),
                    new (e._get("interface/controls/suggest.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        class_name: "legal-entity__suggest legal-entity__suggest_mfo",
                        additional_data: 'spellcheck="false"',
                        input_class_name: "linked-form__cf legal-entity__item-mini-input",
                        items: [],
                        value: twig.attr("value"in i ? i.value : "", "mfo", void 0, void 0, !0) ? twig.filter.def(twig.attr("value"in i ? i.value : "", "mfo"), "") : "",
                        input_type: "text",
                        name: "mfo"in i ? i.mfo : "",
                        styled_input: !0,
                        ajax: [],
                        placeholder: "mfo_placeholder"in i && i.mfo_placeholder ? "mfo_placeholder"in i ? i.mfo_placeholder : "" : "placeholder"in i ? i.placeholder : ""
                    })),
                    t.append("</div>")) : (t.append('<input type="hidden" class="js-legal-entity-mfo" name="'),
                    t.append(twig.filter.escape(this.env_, "mfo"in i ? i.mfo : "", "light_escape", null, !0)),
                    t.append('" value="'),
                    t.append(twig.filter.escape(this.env_, twig.attr("value"in i ? i.value : "", "mfo", void 0, void 0, !0) ? twig.filter.def(twig.attr("value"in i ? i.value : "", "mfo"), "") : "", "light_escape", null, !0)),
                    t.append('" disabled="'),
                    t.append(twig.filter.escape(this.env_, "disabled"in i ? i.disabled : "", "light_escape", null, !0)),
                    t.append('">')),
                    twig.attr("value"in i ? i.value : "", "bank_account_number") ? (t.append('<div class="legal-entity__item legal-entity__item_labeled"><span class="legal-entity__item-label">Р/C</span>'),
                    new (e._get("interface/controls/suggest.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        class_name: "legal-entity__suggest legal-entity__suggest_bank_account_number",
                        additional_data: 'spellcheck="false"',
                        input_class_name: "linked-form__cf legal-entity__item-mini-input",
                        items: [],
                        value: twig.attr("value"in i ? i.value : "", "bank_account_number", void 0, void 0, !0) ? twig.filter.def(twig.attr("value"in i ? i.value : "", "bank_account_number"), "") : "",
                        input_type: "text",
                        name: "bank_account_number"in i ? i.bank_account_number : "",
                        styled_input: !0,
                        ajax: [],
                        placeholder: "bank_account_number_placeholder"in i && i.bank_account_number_placeholder ? "bank_account_number_placeholder"in i ? i.bank_account_number_placeholder : "" : "placeholder"in i ? i.placeholder : ""
                    })),
                    t.append("</div>")) : (t.append('<input type="hidden" class="js-legal-entity-bank_account_number" name="'),
                    t.append(twig.filter.escape(this.env_, "bank_account_number"in i ? i.bank_account_number : "", "light_escape", null, !0)),
                    t.append('" value="'),
                    t.append(twig.filter.escape(this.env_, twig.attr("value"in i ? i.value : "", "bank_account_number", void 0, void 0, !0) ? twig.filter.def(twig.attr("value"in i ? i.value : "", "bank_account_number"), "") : "", "light_escape", null, !0)),
                    t.append('" disabled="'),
                    t.append(twig.filter.escape(this.env_, "disabled"in i ? i.disabled : "", "light_escape", null, !0)),
                    t.append('">')),
                    twig.attr("value"in i ? i.value : "", "oked") ? (t.append('<div class="legal-entity__item legal-entity__item_labeled"><span class="legal-entity__item-label">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "oked"), "light_escape", null, !0)),
                    t.append("</span>"),
                    new (e._get("interface/controls/suggest.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        class_name: "legal-entity__suggest legal-entity__suggest_oked",
                        additional_data: 'spellcheck="false"',
                        input_class_name: "linked-form__cf legal-entity__item-mini-input",
                        items: [],
                        value: twig.attr("value"in i ? i.value : "", "oked", void 0, void 0, !0) ? twig.filter.def(twig.attr("value"in i ? i.value : "", "oked"), "") : "",
                        input_type: "text",
                        name: "oked"in i ? i.oked : "",
                        styled_input: !0,
                        ajax: [],
                        placeholder: "oked_placeholder"in i && i.oked_placeholder ? "oked_placeholder"in i ? i.oked_placeholder : "" : "placeholder"in i ? i.placeholder : ""
                    })),
                    t.append("</div>")) : (t.append('<input type="hidden" class="js-legal-entity-oked" name="'),
                    t.append(twig.filter.escape(this.env_, "oked"in i ? i.oked : "", "light_escape", null, !0)),
                    t.append('" value="'),
                    t.append(twig.filter.escape(this.env_, twig.attr("value"in i ? i.value : "", "oked", void 0, void 0, !0) ? twig.filter.def(twig.attr("value"in i ? i.value : "", "oked"), "") : "", "light_escape", null, !0)),
                    t.append('" disabled="'),
                    t.append(twig.filter.escape(this.env_, "disabled"in i ? i.disabled : "", "light_escape", null, !0)),
                    t.append('">')),
                    twig.attr("value"in i ? i.value : "", "director") ? (t.append('<div class="legal-entity__item legal-entity__item_labeled"><span class="legal-entity__item-label">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Director"), "light_escape", null, !0)),
                    t.append("</span>"),
                    new (e._get("interface/controls/suggest.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        class_name: "legal-entity__suggest legal-entity__suggest_director",
                        additional_data: 'spellcheck="false"',
                        input_class_name: "linked-form__cf legal-entity__item-mini-input",
                        items: [],
                        value: twig.attr("value"in i ? i.value : "", "director", void 0, void 0, !0) ? twig.filter.def(twig.attr("value"in i ? i.value : "", "director"), "") : "",
                        input_type: "text",
                        name: "director"in i ? i.director : "",
                        styled_input: !0,
                        ajax: [],
                        placeholder: "director_placeholder"in i && i.director_placeholder ? "director_placeholder"in i ? i.director_placeholder : "" : "placeholder"in i ? i.placeholder : ""
                    })),
                    t.append("</div>")) : (t.append('<input type="hidden" class="js-legal-entity-director" name="'),
                    t.append(twig.filter.escape(this.env_, "director"in i ? i.director : "", "light_escape", null, !0)),
                    t.append('" value="'),
                    t.append(twig.filter.escape(this.env_, twig.attr("value"in i ? i.value : "", "director", void 0, void 0, !0) ? twig.filter.def(twig.attr("value"in i ? i.value : "", "director"), "") : "", "light_escape", null, !0)),
                    t.append('" disabled="'),
                    t.append(twig.filter.escape(this.env_, "disabled"in i ? i.disabled : "", "light_escape", null, !0)),
                    t.append('">')),
                    t.append('<div class="legal-entity__item legal-entity__item_labeled legal-entity__item_labeled-last"><span class="legal-entity__item-label">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "CF_NAME_ADDRESS"), "light_escape", null, !0)),
                    t.append(" </span>"),
                    new (e._get("interface/controls/suggest.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        class_name: "legal-entity__suggest legal-entity__suggest_address",
                        additional_data: 'spellcheck="false" data-query-type="address"',
                        input_class_name: "linked-form__cf js-legal-entity-address legal-entity__item-mini-input",
                        items: [],
                        value: twig.attr("value"in i ? i.value : "", "address", void 0, void 0, !0) ? twig.filter.def(twig.attr("value"in i ? i.value : "", "address"), "") : "",
                        input_type: "text",
                        name: "address_name"in i ? i.address_name : "",
                        styled_input: !0,
                        ajax: [],
                        placeholder: "address_placeholder"in i && i.address_placeholder ? "address_placeholder"in i ? i.address_placeholder : "" : "placeholder"in i ? i.placeholder : ""
                    })),
                    t.append('</div><div class="legal-entity__item legal-entity__item_labeled"><span class="legal-entity__item-label">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Real address"), "light_escape", null, !0)),
                    t.append(" </span>"),
                    new (e._get("interface/controls/suggest.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        class_name: "legal-entity__suggest legal-entity__suggest_address",
                        additional_data: 'spellcheck="false"',
                        input_class_name: "linked-form__cf js-legal-entity-real_address legal-entity__item-mini-input",
                        items: [],
                        value: twig.attr("value"in i ? i.value : "", "real_address", void 0, void 0, !0) ? twig.filter.def(twig.attr("value"in i ? i.value : "", "real_address"), "") : "",
                        input_type: "text",
                        name: "real_address"in i ? i.real_address : "",
                        styled_input: !0,
                        ajax: [],
                        placeholder: "real_address_placeholder"in i && i.real_address_placeholder ? "real_address_placeholder"in i ? i.real_address_placeholder : "" : "placeholder"in i ? i.placeholder : ""
                    })),
                    t.append('</div><input type="hidden" class="js-legal-entity-type" name="'),
                    t.append(twig.filter.escape(this.env_, "entity_type_name"in i ? i.entity_type_name : "", "light_escape", null, !0)),
                    t.append('" value="'),
                    t.append(twig.filter.escape(this.env_, twig.attr("value"in i ? i.value : "", "entity_type", void 0, void 0, !0) ? twig.filter.def(twig.attr("value"in i ? i.value : "", "entity_type"), "") : "", "light_escape", null, !0)),
                    t.append('" disabled="'),
                    t.append(twig.filter.escape(this.env_, "disabled"in i ? i.disabled : "", "light_escape", null, !0)),
                    t.append('"><input type="hidden" class="js-legal-entity-external" name="'),
                    t.append(twig.filter.escape(this.env_, "external_name"in i ? i.external_name : "", "light_escape", null, !0)),
                    t.append('" value="'),
                    t.append(twig.filter.escape(this.env_, twig.attr("value"in i ? i.value : "", "external_uid", void 0, void 0, !0) ? twig.filter.def(twig.attr("value"in i ? i.value : "", "external_uid"), "") : "", "light_escape", null, !0)),
                    t.append('" disabled="'),
                    t.append(twig.filter.escape(this.env_, "disabled"in i ? i.disabled : "", "light_escape", null, !0)),
                    t.append('"></div>')
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_controls_legal_entity"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/controls/legal_entity", t)
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
                    e.append('<div class="line-toggler '),
                    e.append(twig.filter.escape(this.env_, "class_name"in t ? t.class_name : "", "light_escape", null, !0)),
                    e.append('">'),
                    t._parent = t;
                    var n = "items"in t ? t.items : "";
                    twig.forEach(n, (function(i, n) {
                        t._key = n,
                        t.item = i,
                        e.append('<label class="line-toggler__item '),
                        e.append(twig.filter.escape(this.env_, twig.attr("item"in t ? t.item : "", "class_name"), "light_escape", null, !0)),
                        e.append('"><input type="radio" class="hidden" name="'),
                        e.append(twig.filter.escape(this.env_, "name"in t ? t.name : "", "light_escape", null, !0)),
                        e.append('" data-id="'),
                        e.append(twig.filter.escape(this.env_, twig.attr("item"in t ? t.item : "", "id"), "light_escape", null, !0)),
                        e.append('" '),
                        twig.attr("item"in t ? t.item : "", "disabled") && e.append('disabled="disabled"'),
                        e.append(" "),
                        twig.attr("item"in t ? t.item : "", "selected") && e.append('checked="checked"'),
                        e.append(' value="'),
                        e.append(twig.filter.escape(this.env_, twig.attr("item"in t ? t.item : "", "value"), "light_escape", null, !0)),
                        e.append('"><span class="line-toggler__item-inner">'),
                        e.append(twig.filter.escape(this.env_, twig.attr("item"in t ? t.item : "", "text"), "light_escape", null, !0)),
                        e.append("</span></label>")
                    }
                    ), this),
                    e.append("</div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_controls_line_toggler"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/controls/line_toggler", t)
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
                    e.append('<select name="'),
                    e.append(twig.filter.escape(this.env_, "name"in t ? t.name : "", "light_escape", null, !0)),
                    e.append('" multiple>'),
                    t._parent = t;
                    var n = "values"in t ? t.values : "";
                    twig.forEach(n, (function(i, n) {
                        t._key = n,
                        t.v = i,
                        e.append('<option value="'),
                        e.append(twig.filter.escape(this.env_, twig.attr("v"in t ? t.v : "", "id"), "light_escape", null, !0)),
                        e.append('" '),
                        "selected"in t && t.selected && twig.attr("v"in t ? t.v : "", "id") == ("selected"in t ? t.selected : "") && e.append("selected"),
                        e.append(">"),
                        e.append(twig.filter.escape(this.env_, twig.attr("v"in t ? t.v : "", "value"), "light_escape", null, !0)),
                        e.append("</option>")
                    }
                    ), this),
                    e.append("</select>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_controls_multiselect"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/controls/multiselect", t)
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
                    i.value = twig.attr(twig.attr(twig.attr(twig.attr("element"in i ? i.element : "", "cf"), twig.attr("cf"in i ? i.cf : "", "ID"), void 0, "array"), "VALUE"), "key"in i ? i.key : "", void 0, "array"),
                    i.is_contact = twig.attr("value"in i ? i.value : "", "entity_id") > 0 && "contacts" == twig.attr("value"in i ? i.value : "", "entity_type"),
                    t.append('<div class="payer js-control-payer '),
                    t.append(twig.filter.escape(this.env_, "class_name"in i ? i.class_name : "", "light_escape", null, !0)),
                    t.append('" data-search-in="'),
                    t.append(twig.filter.escape(this.env_, twig.attr(twig.attr("cf"in i ? i.cf : "", "SETTINGS"), "search_in", void 0, void 0, !0) ? twig.filter.def(twig.attr(twig.attr("cf"in i ? i.cf : "", "SETTINGS"), "search_in"), "") : "", "light_escape", null, !0)),
                    t.append('"><div class="payer__item payer__item_name">'),
                    new (e._get("interface/controls/suggest.twig"))(this.env_).render_(t, {
                        class_name: "payer__suggest payer__suggest_name",
                        additional_data: 'spellcheck="false" data-query-type="name"',
                        input_class_name: "linked-form__cf js-payer-name " + ("input_class_name"in i ? i.input_class_name : ""),
                        items: [],
                        value: twig.attr("value"in i ? i.value : "", "name", void 0, void 0, !0) ? twig.filter.def(twig.attr("value"in i ? i.value : "", "name"), "") : "",
                        input_type: "text",
                        name: ("name"in i ? i.name : "") + "[name]",
                        ajax: [],
                        placeholder: this.env_.filter("i18n", "Full name / Company name"),
                        disabled: "disabled"in i ? i.disabled : ""
                    }),
                    t.append('</div><div class="payer__item payer__item_labeled '),
                    "is_contact"in i && i.is_contact && t.append("hidden"),
                    t.append('"><span class="payer__item-label">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "ITIN"), "light_escape", null, !0)),
                    t.append("</span>"),
                    new (e._get("interface/controls/suggest.twig"))(this.env_).render_(t, {
                        class_name: "payer__suggest payer__suggest_vat-id",
                        additional_data: 'spellcheck="false"',
                        input_class_name: "linked-form__cf js-payer-vat_id payer__item-mini-input js-control-allow-numeric",
                        items: [],
                        value: twig.attr("value"in i ? i.value : "", "vat_id", void 0, void 0, !0) ? twig.filter.def(twig.attr("value"in i ? i.value : "", "vat_id"), "") : "",
                        input_type: "text",
                        name: ("name"in i ? i.name : "") + "[vat_id]",
                        styled_input: !0,
                        ajax: [],
                        disabled: "disabled"in i ? i.disabled : ""
                    }),
                    t.append('</div><div class="payer__item payer__item_labeled '),
                    "is_contact"in i && i.is_contact && t.append("hidden"),
                    t.append('"><span class="payer__item-label">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "IEC"), "light_escape", null, !0)),
                    t.append("</span>"),
                    new (e._get("interface/controls/suggest.twig"))(this.env_).render_(t, {
                        class_name: "payer__suggest payer__suggest_kpp",
                        additional_data: 'spellcheck="false"',
                        input_class_name: "linked-form__cf js-payer-kpp payer__item-mini-input js-control-allow-numeric",
                        items: [],
                        value: twig.attr("value"in i ? i.value : "", "kpp", void 0, void 0, !0) ? twig.filter.def(twig.attr("value"in i ? i.value : "", "kpp"), "") : "",
                        input_type: "text",
                        name: ("name"in i ? i.name : "") + "[kpp]",
                        styled_input: !0,
                        ajax: [],
                        disabled: "disabled"in i ? i.disabled : ""
                    }),
                    t.append('</div><div class="payer__item payer__item_labeled '),
                    "is_contact"in i && i.is_contact && t.append("hidden"),
                    t.append('"><span class="payer__item-label">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Registration #"), "light_escape", null, !0)),
                    t.append("</span>"),
                    new (e._get("interface/controls/suggest.twig"))(this.env_).render_(t, {
                        class_name: "payer__suggest payer__suggest_tax-registration-reason-code",
                        additional_data: 'spellcheck="false"',
                        input_class_name: "linked-form__cf js-payer-tax_registration_reason_code payer__item-mini-input js-control-allow-numeric",
                        items: [],
                        value: twig.attr("value"in i ? i.value : "", "tax_registration_reason_code", void 0, void 0, !0) ? twig.filter.def(twig.attr("value"in i ? i.value : "", "tax_registration_reason_code"), "") : "",
                        input_type: "text",
                        name: ("name"in i ? i.name : "") + "[tax_registration_reason_code]",
                        styled_input: !0,
                        ajax: [],
                        disabled: "disabled"in i ? i.disabled : ""
                    }),
                    t.append("</div>"),
                    twig.attr("value"in i ? i.value : "", "bank_code") && (t.append('<div class="payer__item payer__item_labeled"><span class="payer__item-label">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Bank code"), "light_escape", null, !0)),
                    t.append("</span>"),
                    new (e._get("interface/controls/suggest.twig"))(this.env_).render_(t, {
                        class_name: "payer__suggest payer__suggest_bank-code",
                        additional_data: 'spellcheck="false"',
                        input_class_name: "linked-form__cf js-payer-input payer__item-mini-input",
                        items: [],
                        value: twig.attr("value"in i ? i.value : "", "bank_code", void 0, void 0, !0) ? twig.filter.def(twig.attr("value"in i ? i.value : "", "bank_code"), "") : "",
                        input_type: "text",
                        name: ("name"in i ? i.name : "") + "[bank_code]",
                        styled_input: !0,
                        ajax: [],
                        disabled: "disabled"in i ? i.disabled : ""
                    }),
                    t.append("</div>")),
                    twig.attr("value"in i ? i.value : "", "unp") && (t.append('<div class="payer__item payer__item_labeled"><span class="payer__item-label">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "УНП"), "light_escape", null, !0)),
                    t.append("</span>"),
                    new (e._get("interface/controls/suggest.twig"))(this.env_).render_(t, {
                        class_name: "payer__suggest payer__suggest_unp",
                        additional_data: 'spellcheck="false"',
                        input_class_name: "linked-form__cf js-payer-input payer__item-mini-input",
                        items: [],
                        value: twig.attr("value"in i ? i.value : "", "unp", void 0, void 0, !0) ? twig.filter.def(twig.attr("value"in i ? i.value : "", "unp"), "") : "",
                        input_type: "text",
                        name: ("name"in i ? i.name : "") + "[unp]",
                        styled_input: !0,
                        ajax: [],
                        disabled: "disabled"in i ? i.disabled : ""
                    }),
                    t.append("</div>")),
                    twig.attr("value"in i ? i.value : "", "bin") && (t.append('<div class="payer__item payer__item_labeled"><span class="payer__item-label">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "БИН"), "light_escape", null, !0)),
                    t.append("</span>"),
                    new (e._get("interface/controls/suggest.twig"))(this.env_).render_(t, {
                        class_name: "payer__suggest payer__suggest_bin",
                        additional_data: 'spellcheck="false"',
                        input_class_name: "linked-form__cf js-payer-input payer__item-mini-input",
                        items: [],
                        value: twig.attr("value"in i ? i.value : "", "bin", void 0, void 0, !0) ? twig.filter.def(twig.attr("value"in i ? i.value : "", "bin"), "") : "",
                        input_type: "text",
                        name: ("name"in i ? i.name : "") + "[bin]",
                        styled_input: !0,
                        ajax: [],
                        disabled: "disabled"in i ? i.disabled : ""
                    }),
                    t.append("</div>")),
                    twig.attr("value"in i ? i.value : "", "egrpou") && (t.append('<div class="payer__item payer__item_labeled"><span class="payer__item-label">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "ЕГРПОУ"), "light_escape", null, !0)),
                    t.append("</span>"),
                    new (e._get("interface/controls/suggest.twig"))(this.env_).render_(t, {
                        class_name: "payer__suggest payer__suggest_egrpou",
                        additional_data: 'spellcheck="false"',
                        input_class_name: "linked-form__cf js-payer-input payer__item-mini-input",
                        items: [],
                        value: twig.attr("value"in i ? i.value : "", "egrpou", void 0, void 0, !0) ? twig.filter.def(twig.attr("value"in i ? i.value : "", "egrpou"), "") : "",
                        input_type: "text",
                        name: ("name"in i ? i.name : "") + "[egrpou]",
                        styled_input: !0,
                        ajax: [],
                        disabled: "disabled"in i ? i.disabled : ""
                    }),
                    t.append("</div>")),
                    twig.attr("value"in i ? i.value : "", "mfo") && (t.append('<div class="payer__item payer__item_labeled"><span class="payer__item-label">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "MFO"), "light_escape", null, !0)),
                    t.append("</span>"),
                    new (e._get("interface/controls/suggest.twig"))(this.env_).render_(t, {
                        class_name: "payer__suggest payer__suggest_mfo",
                        additional_data: 'spellcheck="false"',
                        input_class_name: "linked-form__cf js-payer-input payer__item-mini-input",
                        items: [],
                        value: twig.attr("value"in i ? i.value : "", "mfo", void 0, void 0, !0) ? twig.filter.def(twig.attr("value"in i ? i.value : "", "mfo"), "") : "",
                        input_type: "text",
                        name: ("name"in i ? i.name : "") + "[mfo]",
                        styled_input: !0,
                        ajax: [],
                        disabled: "disabled"in i ? i.disabled : ""
                    }),
                    t.append("</div>")),
                    twig.attr("value"in i ? i.value : "", "bank_account_number") && (t.append('<div class="payer__item payer__item_labeled"><span class="payer__item-label">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Р/С"), "light_escape", null, !0)),
                    t.append("</span>"),
                    new (e._get("interface/controls/suggest.twig"))(this.env_).render_(t, {
                        class_name: "payer__suggest payer__suggest_bank-account-number",
                        additional_data: 'spellcheck="false"',
                        input_class_name: "linked-form__cf js-payer-input payer__item-mini-input",
                        items: [],
                        value: twig.attr("value"in i ? i.value : "", "bank_account_number", void 0, void 0, !0) ? twig.filter.def(twig.attr("value"in i ? i.value : "", "bank_account_number"), "") : "",
                        input_type: "text",
                        name: ("name"in i ? i.name : "") + "[bank_account_number]",
                        styled_input: !0,
                        ajax: [],
                        disabled: "disabled"in i ? i.disabled : ""
                    }),
                    t.append("</div>")),
                    twig.attr("value"in i ? i.value : "", "oked") && (t.append('<div class="payer__item payer__item_labeled"><span class="payer__item-label">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "oked"), "light_escape", null, !0)),
                    t.append("</span>"),
                    new (e._get("interface/controls/suggest.twig"))(this.env_).render_(t, {
                        class_name: "payer__suggest payer__suggest_oked",
                        additional_data: 'spellcheck="false"',
                        input_class_name: "linked-form__cf js-payer-input payer__item-mini-input",
                        items: [],
                        value: twig.attr("value"in i ? i.value : "", "oked", void 0, void 0, !0) ? twig.filter.def(twig.attr("value"in i ? i.value : "", "oked"), "") : "",
                        input_type: "text",
                        name: ("name"in i ? i.name : "") + "[oked]",
                        styled_input: !0,
                        ajax: [],
                        disabled: "disabled"in i ? i.disabled : ""
                    }),
                    t.append("</div>")),
                    twig.attr("value"in i ? i.value : "", "director") && (t.append('<div class="payer__item payer__item_labeled"><span class="payer__item-label">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Director"), "light_escape", null, !0)),
                    t.append("</span>"),
                    new (e._get("interface/controls/suggest.twig"))(this.env_).render_(t, {
                        class_name: "payer__suggest payer__suggest_director",
                        additional_data: 'spellcheck="false"',
                        input_class_name: "linked-form__cf js-payer-input payer__item-mini-input",
                        items: [],
                        value: twig.attr("value"in i ? i.value : "", "director", void 0, void 0, !0) ? twig.filter.def(twig.attr("value"in i ? i.value : "", "director"), "") : "",
                        input_type: "text",
                        name: ("name"in i ? i.name : "") + "[director]",
                        styled_input: !0,
                        ajax: [],
                        disabled: "disabled"in i ? i.disabled : ""
                    }),
                    t.append("</div>")),
                    t.append('<div class="payer__item payer__item_labeled"><span class="payer__item-label">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "CF_NAME_ADDRESS"), "light_escape", null, !0)),
                    t.append("</span>"),
                    new (e._get("interface/controls/suggest.twig"))(this.env_).render_(t, {
                        class_name: "payer__suggest payer__suggest_address",
                        additional_data: 'spellcheck="false"',
                        input_class_name: "linked-form__cf js-payer-address payer__item-mini-input",
                        items: [],
                        value: twig.attr("value"in i ? i.value : "", "address", void 0, void 0, !0) ? twig.filter.def(twig.attr("value"in i ? i.value : "", "address"), "") : "",
                        input_type: "text",
                        name: ("name"in i ? i.name : "") + "[address]",
                        styled_input: !0,
                        ajax: [],
                        disabled: "disabled"in i ? i.disabled : ""
                    }),
                    t.append('</div><div class="payer__item payer__item_labeled"><span class="payer__item-label">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "phone_placeholder"), "light_escape", null, !0)),
                    t.append("</span>"),
                    new (e._get("interface/controls/suggest.twig"))(this.env_).render_(t, {
                        class_name: "payer__suggest",
                        additional_data: 'spellcheck="false"',
                        input_class_name: "linked-form__cf js-payer-phone payer__item-mini-input",
                        items: [],
                        value: twig.attr("value"in i ? i.value : "", "phone", void 0, void 0, !0) ? twig.filter.def(twig.attr("value"in i ? i.value : "", "phone"), "") : "",
                        input_type: "text",
                        name: ("name"in i ? i.name : "") + "[phone]",
                        styled_input: !0,
                        ajax: [],
                        disabled: "disabled"in i ? i.disabled : ""
                    }),
                    t.append('</div><div class="payer__item payer__item_labeled"><span class="payer__item-label">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "email_placeholder"), "light_escape", null, !0)),
                    t.append("</span>"),
                    new (e._get("interface/controls/suggest.twig"))(this.env_).render_(t, {
                        class_name: "payer__suggest",
                        additional_data: 'spellcheck="false"',
                        input_class_name: "linked-form__cf js-payer-email payer__item-mini-input",
                        items: [],
                        value: twig.attr("value"in i ? i.value : "", "email", void 0, void 0, !0) ? twig.filter.def(twig.attr("value"in i ? i.value : "", "email"), "") : "",
                        input_type: "text",
                        name: ("name"in i ? i.name : "") + "[email]",
                        styled_input: !0,
                        ajax: [],
                        disabled: "disabled"in i ? i.disabled : ""
                    }),
                    t.append("</div>"),
                    (twig.attr("value"in i ? i.value : "", "type", void 0, void 0, !0) && "legal" == twig.attr("value"in i ? i.value : "", "type") || twig.attr("value"in i ? i.value : "", "entity_type", void 0, void 0, !0) && "companies" == twig.attr("value"in i ? i.value : "", "entity_type")) && (t.append('<div class="payer__item payer__item_labeled"><span class="payer__item-label">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Real address"), "light_escape", null, !0)),
                    t.append("</span>"),
                    new (e._get("interface/controls/suggest.twig"))(this.env_).render_(t, {
                        class_name: "payer__suggest payer__suggest_real-address",
                        additional_data: 'spellcheck="false"',
                        input_class_name: "linked-form__cf js-payer-input payer__item-mini-input",
                        items: [],
                        value: twig.attr("value"in i ? i.value : "", "real_address", void 0, void 0, !0) ? twig.filter.def(twig.attr("value"in i ? i.value : "", "real_address"), "") : "",
                        input_type: "text",
                        name: ("name"in i ? i.name : "") + "[real_address]",
                        styled_input: !0,
                        ajax: [],
                        disabled: "disabled"in i ? i.disabled : ""
                    }),
                    t.append("</div>")),
                    t.append('<input type="hidden" class="js-payer-id" name="'),
                    t.append(twig.filter.escape(this.env_, ("name"in i ? i.name : "") + "[entity_id]", "light_escape", null, !0)),
                    t.append('" value="'),
                    t.append(twig.filter.escape(this.env_, twig.attr("value"in i ? i.value : "", "entity_id"), "light_escape", null, !0)),
                    t.append('"><input type="hidden" class="js-payer-entity-type" name="'),
                    t.append(twig.filter.escape(this.env_, ("name"in i ? i.name : "") + "[entity_type]", "light_escape", null, !0)),
                    t.append('" value="'),
                    t.append(twig.filter.escape(this.env_, twig.attr("value"in i ? i.value : "", "entity_type"), "light_escape", null, !0)),
                    t.append('"><input type="hidden" class="js-payer-type" name="'),
                    t.append(twig.filter.escape(this.env_, ("name"in i ? i.name : "") + "[type]", "light_escape", null, !0)),
                    t.append('" value="'),
                    t.append(twig.filter.escape(this.env_, twig.attr("value"in i ? i.value : "", "type"), "light_escape", null, !0)),
                    t.append('"></div>')
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_controls_payer"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/controls/payer", t)
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
                    t.append('<div class="js-control-phone control-phone">'),
                    new (e._get("interface/controls/input.twig"))(this.env_).render_(t, {
                        value: this.env_.filter("phone", "value"in i ? i.value : ""),
                        name: "",
                        class_name: "control-phone__formatted js-form-changes-skip " + ("input_class_name"in i ? i.input_class_name : ""),
                        placeholder: "placeholder"in i ? i.placeholder : "",
                        max_length: "max_length"in i ? i.max_length : ""
                    }),
                    i.ajax_params = [],
                    "ajax"in i && (i.ajax_params = {
                        ajax: "ajax"in i ? i.ajax : ""
                    }),
                    new (e._get("interface/controls/suggest.twig"))(this.env_).render_(t, twig.extend({}, i, twig.filter.merge({
                        value: "value"in i ? i.value : "",
                        name: "name"in i ? i.name : "",
                        type: "type"in i ? i.type : "",
                        additional_data: "additional_data"in i ? i.additional_data : "",
                        class_name: "control-phone__suggest",
                        input_class_name: "input_class_name"in i ? i.input_class_name : "",
                        input_type: "hidden"
                    }, "ajax_params"in i ? i.ajax_params : ""))),
                    t.append("</div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_controls_phone"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/controls/phone", t)
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
                    e.append('<div class="cubestats-toggler pipeline_toggler'),
                    "class_name"in t && t.class_name && (e.append(" "),
                    e.append(twig.filter.escape(this.env_, "class_name"in t ? t.class_name : "", "light_escape", null, !0))),
                    "compact"in t && t.compact && e.append(" toggler-view_compact"),
                    e.append('"'),
                    "additional_data"in t && t.additional_data && (e.append(" "),
                    e.append("additional_data"in t ? t.additional_data : "")),
                    e.append('><div id="dashborad_pipe_toggler" class="cubestats-toggler__wrapper">'),
                    t._parent = t;
                    var n = "pipelines"in t ? t.pipelines : "";
                    twig.forEach(n, (function(i, n) {
                        t._key = n,
                        t.pipe = i,
                        twig.attr("pipe"in t ? t.pipe : "", "link") ? (e.append('<a class="cubestats-toggler__item'),
                        twig.attr("pipe"in t ? t.pipe : "", "selected") && e.append(" active"),
                        "item_class_name"in t && t.item_class_name && (e.append(" "),
                        e.append(twig.filter.escape(this.env_, "item_class_name"in t ? t.item_class_name : "", "light_escape", null, !0))),
                        e.append('" href="'),
                        e.append(twig.filter.escape(this.env_, twig.attr("pipe"in t ? t.pipe : "", "link"), "light_escape", null, !0)),
                        e.append('" data-id="'),
                        e.append(twig.filter.escape(this.env_, twig.attr("pipe"in t ? t.pipe : "", "id"), "light_escape", null, !0)),
                        e.append('">'),
                        e.append(twig.filter.escape(this.env_, twig.attr("pipe"in t ? t.pipe : "", "title"), "light_escape", null, !0)),
                        e.append("</a>")) : (e.append('<span class="cubestats-toggler__item'),
                        twig.attr("pipe"in t ? t.pipe : "", "selected") && e.append(" active"),
                        "item_class_name"in t && t.item_class_name && (e.append(" "),
                        e.append(twig.filter.escape(this.env_, "item_class_name"in t ? t.item_class_name : "", "light_escape", null, !0))),
                        e.append('"'),
                        twig.attr("pipe"in t ? t.pipe : "", "additional_data") && (e.append(" "),
                        e.append(twig.attr("pipe"in t ? t.pipe : "", "additional_data"))),
                        e.append(' data-id="'),
                        e.append(twig.filter.escape(this.env_, twig.attr("pipe"in t ? t.pipe : "", "id"), "light_escape", null, !0)),
                        e.append('">'),
                        e.append(twig.filter.escape(this.env_, twig.attr("pipe"in t ? t.pipe : "", "title"), "light_escape", null, !0)),
                        e.append("</span>"))
                    }
                    ), this),
                    e.append('<div id="dashborad_date_toggler-active"></div></div></div>')
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_controls_pipeline_toggler"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/controls/pipeline_toggler", t)
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
                    "prefix"in t || (t.prefix = "id"in t ? t.id : ""),
                    e.append('<label for="'),
                    e.append(twig.filter.escape(this.env_, "prefix"in t ? t.prefix : "", "light_escape", null, !0)),
                    e.append('" class="control-radio__label '),
                    e.append(twig.filter.escape(this.env_, "class_name"in t ? t.class_name : "", "light_escape", null, !0)),
                    e.append(" "),
                    "disabled"in t && t.disabled && e.append("control-radio__label_disabled"),
                    e.append('" '),
                    "noTitle"in t && t.noTitle || (e.append(' title="'),
                    e.append(twig.filter.escape(this.env_, "label"in t ? t.label : "", "light_escape", null, !0)),
                    e.append('" ')),
                    e.append(" "),
                    e.append("additional_data"in t ? t.additional_data : ""),
                    e.append(" "),
                    "color"in t && t.color && e.append(' style="overflow: visible;" '),
                    e.append('><div class="control-radio '),
                    e.append("selected"in t && t.selected ? "icon-radio-checked" : ""),
                    e.append('"><input type="radio" class="'),
                    e.append(twig.filter.escape(this.env_, "input_class_name"in t ? t.input_class_name : "", "light_escape", null, !0)),
                    e.append('" name="'),
                    e.append(twig.filter.escape(this.env_, "name"in t ? t.name : "", "light_escape", null, !0)),
                    e.append('" '),
                    "prefix"in t && t.prefix && (e.append('id="'),
                    e.append(twig.filter.escape(this.env_, "prefix"in t ? t.prefix : "", "light_escape", null, !0)),
                    e.append('"')),
                    e.append(' value="'),
                    e.append(twig.filter.escape(this.env_, "value"in t ? t.value : "", "light_escape", null, !0)),
                    e.append('" '),
                    e.append("selected"in t && t.selected ? "checked" : ""),
                    e.append(" "),
                    "disabled"in t && t.disabled && e.append(" disabled"),
                    e.append(" "),
                    "fieldId"in t && t.fieldId && (e.append(' data-field-id="'),
                    e.append(twig.filter.escape(this.env_, "fieldId"in t ? t.fieldId : "", "light_escape", null, !0)),
                    e.append('" ')),
                    e.append(' data-value="'),
                    e.append(twig.filter.escape(this.env_, ("dataValue"in t ? t.dataValue : "") || ("value"in t ? t.value : ""), "light_escape", null, !0)),
                    e.append('" '),
                    "color"in t && t.color && (e.append(' data-color="'),
                    e.append(twig.filter.escape(this.env_, "color"in t ? t.color : "", "light_escape", null, !0)),
                    e.append('" ')),
                    e.append('><div class="control-radio__helper '),
                    "disabled"in t && t.disabled && e.append(" control-radio__helper-disabled "),
                    e.append('"></div></div>\x3c!----\x3e<span class="control-radio-label-text element__text '),
                    e.append(twig.filter.escape(this.env_, "text_class_name"in t ? t.text_class_name : "", "light_escape", null, !0)),
                    e.append('" '),
                    "color"in t && t.color && (e.append(' style="background: '),
                    e.append(twig.filter.escape(this.env_, "color"in t ? t.color : "", "light_escape", null, !0)),
                    e.append('; padding: 2px 6px; border-radius: 3px;" ')),
                    e.append(">"),
                    "should_be_raw"in t && t.should_be_raw ? e.append("label"in t ? t.label : "") : e.append(twig.filter.escape(this.env_, "label"in t ? t.label : "", "light_escape", null, !0)),
                    e.append("</span></label>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_controls_radio"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/controls/radio", t)
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
                    i.responsive_class_name = "class_name"in i ? i.class_name : "",
                    "expand_icon"in i && i.expand_icon || (i.expand_icon = "arrow-down-expand"),
                    "contract_icon"in i && i.contract_icon || (i.contract_icon = ("contract_icon"in i ? i.contract_icon : "") || "arrow-up-contract"),
                    twig.filter.length(this.env_, "items"in i ? i.items : "") > 0 && (i.item_list = "items"in i ? i.items : ""),
                    t.append('<div class="responsive_toggler '),
                    t.append(twig.filter.escape(this.env_, "responsive_toggler_modify"in i ? i.responsive_toggler_modify : "", "light_escape", null, !0)),
                    t.append('">'),
                    new (e._get("interface/controls/toggler.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        class_name: ("responsive_class_name"in i ? i.responsive_class_name : "") + " funnel",
                        items: "item_list"in i ? i.item_list : "",
                        item_class_name: "item_class_name"in i ? i.item_class_name : ""
                    })),
                    t.append("</div>"),
                    "expandable"in i && i.expandable && (t.append('<span class="control-toggler__button'),
                    "button_class_name"in i && i.button_class_name && (t.append(" "),
                    t.append(twig.filter.escape(this.env_, "button_class_name"in i ? i.button_class_name : "", "light_escape", null, !0))),
                    t.append('" name="" title="'),
                    t.append(twig.filter.escape(this.env_, twig.attr(twig.attr("items"in i ? i.items : "", 0, void 0, "array"), "name"), "light_escape", null, !0)),
                    t.append('" style="display: none;"><span class="control-toggler__button-name">'),
                    t.append(twig.filter.escape(this.env_, twig.attr(twig.attr("items"in i ? i.items : "", 0, void 0, "array"), "name"), "light_escape", null, !0)),
                    t.append('</span><span class="icon icon-'),
                    t.append(twig.filter.escape(this.env_, "expand_icon"in i ? i.expand_icon : "", "light_escape", null, !0)),
                    t.append('"></span><span class="icon icon-'),
                    t.append(twig.filter.escape(this.env_, "contract_icon"in i ? i.contract_icon : "", "light_escape", null, !0)),
                    t.append('"></span>'),
                    "no_arrow"in i && i.no_arrow || t.append("<b></b>"),
                    t.append("</span>"))
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_controls_responsive_toggler"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/controls/responsive_toggler", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e),
                    this.setBlocks({
                        before_list: twig.bind(this.block_before_list, this),
                        inner: twig.bind(this.block_inner, this)
                    })
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(e) {
                    return !1
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    if (i = void 0 === i ? {} : i,
                    "selected"in t && t.selected) {
                        t.selected_temp = "selected"in t ? t.selected : "",
                        t.selected = !1,
                        t.selected_isset = !1,
                        t._parent = t;
                        var n = "items"in t ? t.items : "";
                        twig.forEach(n, (function(e, i) {
                            t._key = i,
                            t.v = e,
                            t.value = twig.attr("v"in t ? t.v : "", "id"),
                            twig.attr("v"in t ? t.v : "", "id", void 0, void 0, !0) || (t.value = twig.attr("v"in t ? t.v : "", "option")),
                            ("value"in t ? t.value : "") == ("selected_temp"in t ? t.selected_temp : "") && (t.selected = "selected_temp"in t ? t.selected_temp : "",
                            t.selected_isset = !0)
                        }
                        ), this)
                    }
                    "control_class_name"in t && t.control_class_name || (t.control_class_name = "control--select"),
                    e.append('<div class="'),
                    e.append(twig.filter.escape(this.env_, "control_class_name"in t ? t.control_class_name : "", "light_escape", null, !0)),
                    e.append(" "),
                    e.append(twig.filter.escape(this.env_, "class_name"in t ? t.class_name : "", "light_escape", null, !0)),
                    e.append(" "),
                    "theme"in t && t.theme && (e.append("control--select--"),
                    e.append(twig.filter.escape(this.env_, "theme"in t ? t.theme : "", "light_escape", null, !0))),
                    e.append('" '),
                    "save_overflow"in t && t.save_overflow && e.append(' data-save-overflow="true" '),
                    e.append(" "),
                    e.append("additional_data"in t ? t.additional_data : ""),
                    e.append(">"),
                    e.append(this.renderBlock("before_list", t, i)),
                    e.append(this.renderBlock("inner", t, i)),
                    e.append("</div>")
                }
                ,
                t.prototype.block_before_list = function(e, t, i) {
                    i = void 0 === i ? {} : i
                }
                ,
                t.prototype.block_inner = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    new (e._get("interface/controls/select/inner.twig"))(this.env_).render_(t, i)
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_controls_select"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/controls/select", t)
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
                    "selected"in t && t.selected) {
                        t.selected_temp = "selected"in t ? t.selected : "",
                        t.selected = !1,
                        t.selected_isset = !1,
                        t._parent = t;
                        var n = "items"in t ? t.items : "";
                        twig.forEach(n, (function(e, i) {
                            t._key = i,
                            t.v = e,
                            t.value = twig.attr("v"in t ? t.v : "", "id"),
                            twig.attr("v"in t ? t.v : "", "id", void 0, void 0, !0) || (t.value = twig.attr("v"in t ? t.v : "", "option")),
                            ("value"in t ? t.value : "") == ("selected_temp"in t ? t.selected_temp : "") && (t.selected = "selected_temp"in t ? t.selected_temp : "",
                            t.selected_isset = !0)
                        }
                        ), this)
                    }
                    "control_class_name"in t && t.control_class_name || (t.control_class_name = "control--select control--select-with-subtext"),
                    e.append('<div class="'),
                    e.append(twig.filter.escape(this.env_, "control_class_name"in t ? t.control_class_name : "", "light_escape", null, !0)),
                    e.append(" "),
                    e.append(twig.filter.escape(this.env_, "class_name"in t ? t.class_name : "", "light_escape", null, !0)),
                    e.append('"><ul class="custom-scroll control--select--list">'),
                    t.selected_value = "selected"in t ? t.selected : "",
                    t.selected_option = "",
                    t.selected_small_text = "",
                    t._parent = t,
                    n = "items"in t ? t.items : "";
                    var a = {
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
                        t.v = i,
                        t.option = twig.attr("v"in t ? t.v : "", "option"),
                        t.is_selected = !1,
                        t.value = twig.attr("v"in t ? t.v : "", "id"),
                        twig.attr("v"in t ? t.v : "", "id", void 0, void 0, !0) || (t.value = "option"in t ? t.option : ""),
                        (0 != ("selected_value"in t ? t.selected_value : "") && ("value"in t ? t.value : "") == ("selected"in t ? t.selected : "") || 0 == ("selected_value"in t ? t.selected_value : "") && twig.attr(a, "first")) && (t.selected_value = "value"in t ? t.value : "",
                        t.selected_option = "option"in t ? t.option : "",
                        t.is_selected = !0,
                        t.selected_small_text = twig.attr("v"in t ? t.v : "", "small_text")),
                        e.append('<li data-value="'),
                        e.append(twig.filter.escape(this.env_, "value"in t ? t.value : "", "light_escape", null, !0)),
                        e.append('" '),
                        twig.attr("v"in t ? t.v : "", "disabled") && e.append('data-disabled="disabled"'),
                        e.append(' class="control--select--list--item '),
                        "is_selected"in t && t.is_selected && e.append("control--select--list--item-selected"),
                        e.append(" "),
                        "default"in t && twig.attr("v"in t ? t.v : "", "id") == ("default"in t ? t.default : "") && e.append("control--select--list--item-default"),
                        e.append(" control--select--list--item-small-text "),
                        e.append(twig.filter.escape(this.env_, twig.attr("v"in t ? t.v : "", "class_name"), "light_escape", null, !0)),
                        e.append('" data-small-text="'),
                        e.append(twig.filter.escape(this.env_, twig.attr("v"in t ? t.v : "", "small_text"), "light_escape", null, !0)),
                        e.append('" style="'),
                        twig.attr("v"in t ? t.v : "", "bg_color") && (e.append("background-color:"),
                        e.append(twig.filter.escape(this.env_, twig.attr("v"in t ? t.v : "", "bg_color"), "light_escape", null, !0)),
                        e.append(";")),
                        twig.attr("v"in t ? t.v : "", "text_color") && (e.append("color:"),
                        e.append(twig.filter.escape(this.env_, twig.attr("v"in t ? t.v : "", "text_color"), "light_escape", null, !0)),
                        e.append(";")),
                        e.append('"><span class="control--select--list--item-inner" '),
                        "no_titles"in t && t.no_titles || (e.append('title="'),
                        e.append(twig.filter.escape(this.env_, this.env_.filter("striptags", "option"in t ? t.option : ""), "light_escape", null, !0)),
                        e.append('"')),
                        e.append(">"),
                        e.append(twig.filter.escape(this.env_, "option"in t ? t.option : "", "light_escape", null, !0)),
                        e.append('</span><span class="control--select--list--item-inner-small">'),
                        e.append(twig.filter.escape(this.env_, twig.attr("v"in t ? t.v : "", "small_text"), "light_escape", null, !0)),
                        e.append("</span></li>"),
                        ++a.index0,
                        ++a.index,
                        a.first = !1,
                        a.length && (--a.revindex0,
                        --a.revindex,
                        a.last = 0 === a.revindex0)
                    }
                    ), this),
                    e.append('</ul><button class="control--select--button '),
                    e.append(twig.filter.escape(this.env_, "button_class_name"in t ? t.button_class_name : "", "light_escape", null, !0)),
                    e.append(' control--select--button-small-text" tabindex="'),
                    e.append(twig.filter.escape(this.env_, "tab_index"in t ? t.tab_index : "", "light_escape", null, !0)),
                    e.append('" type="button" data-value="'),
                    e.append(twig.filter.escape(this.env_, "selected_value"in t ? t.selected_value : "", "light_escape", null, !0)),
                    e.append('" '),
                    "disabled"in t && t.disabled && e.append('disabled="Y"'),
                    e.append(" "),
                    "selected_before"in t && t.selected_before && (e.append('data-before="'),
                    e.append(twig.filter.escape(this.env_, "selected_before"in t ? t.selected_before : "", "light_escape", null, !0)),
                    e.append('"')),
                    e.append(" "),
                    "selected_after"in t && t.selected_after && (e.append('data-after="'),
                    e.append(twig.filter.escape(this.env_, "selected_after"in t ? t.selected_after : "", "light_escape", null, !0)),
                    e.append('"')),
                    e.append('><span class="control--select--button-inner">'),
                    e.append(twig.filter.escape(this.env_, "selected_option"in t ? t.selected_option : "", "light_escape", null, !0)),
                    e.append('</span><span class="control--select--button-inner-small">'),
                    e.append(twig.filter.escape(this.env_, "selected_small_text"in t ? t.selected_small_text : "", "light_escape", null, !0)),
                    e.append('</span></button><input type="hidden" class="control--select--input '),
                    e.append(twig.filter.escape(this.env_, "input_special_class"in t ? t.input_special_class : "", "light_escape", null, !0)),
                    e.append('" '),
                    "id"in t && t.id && (e.append('id="'),
                    e.append(twig.filter.escape(this.env_, "id"in t ? t.id : "", "light_escape", null, !0)),
                    e.append('"')),
                    e.append(' name="'),
                    e.append(twig.filter.escape(this.env_, "name"in t ? t.name : "", "light_escape", null, !0)),
                    e.append('" value="'),
                    e.append(twig.filter.escape(this.env_, "selected_value"in t ? t.selected_value : "", "light_escape", null, !0)),
                    e.append('" data-prev-value="'),
                    e.append(twig.filter.escape(this.env_, "selected_value"in t ? t.selected_value : "", "light_escape", null, !0)),
                    e.append('"></div>')
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_controls_select_with_subtext"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/controls/select_with_subtext", t)
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
                    i.input_subtypes = ["address_line_1", "address_line_2", "city", "state", "zip"],
                    "items"in i) {
                        t.append('<div class="control-address control-address__wrapper">'),
                        i._parent = i;
                        var a = "items"in i ? i.items : ""
                          , l = {
                            index0: 0,
                            index: 1,
                            first: !0
                        };
                        if (twig.countable(a)) {
                            var s = twig.count(a);
                            l.revindex0 = s - 1,
                            l.revindex = s,
                            l.length = s,
                            l.last = 1 === s
                        }
                        twig.forEach(a, (function(n, a) {
                            i.key = a,
                            i.item = n,
                            twig.contains("input_subtypes"in i ? i.input_subtypes : "", twig.attr("item"in i ? i.item : "", "subtype_name")) && (i.item_value = twig.attr("item"in i ? i.item : "", "value"),
                            "null" == ("item_value"in i ? i.item_value : "") && (i.item_value = ""),
                            t.append('<div class="control-address__field" data-field-type="'),
                            t.append(twig.filter.escape(this.env_, twig.attr("item"in i ? i.item : "", "subtype_name"), "light_escape", null, !0)),
                            t.append('">'),
                            new (e._get("interface/controls/input.twig"))(this.env_).render_(t, twig.extend({}, i, twig.filter.merge("item"in i ? i.item : "", {
                                value: "item_value"in i ? i.item_value : ""
                            }))),
                            t.append("</div>")),
                            "country" == twig.attr("item"in i ? i.item : "", "subtype_name") && (t.append('<div class="control-address__field" data-field-type="'),
                            t.append(twig.filter.escape(this.env_, twig.attr("item"in i ? i.item : "", "subtype_name"), "light_escape", null, !0)),
                            t.append('">'),
                            i.sb = twig.attr("lang"in i ? i.lang : "", "country_placeholder"),
                            i.cn = twig.attr("item"in i ? i.item : "", "class_name") + " control-address__select",
                            twig.attr("item"in i ? i.item : "", "selected_before") && (i.sb = twig.attr("item"in i ? i.item : "", "selected_before")),
                            new (e._get("interface/controls/select.twig"))(this.env_).render_(t, twig.extend({}, i, twig.filter.merge("item"in i ? i.item : "", {
                                selected_before: "sb"in i ? i.sb : "",
                                class_name: "cn"in i ? i.cn : ""
                            }))),
                            t.append("</div>")),
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
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_controls_smart_address"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/controls/smart_address", t)
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
                    e.append('<span data-id="'),
                    "id"in t && t.id && e.append(twig.filter.escape(this.env_, "id"in t ? t.id : "", "light_escape", null, !0)),
                    e.append('" class="control-user_state '),
                    "is_online"in t && t.is_online && e.append("control-user_state_online"),
                    e.append('" ></span>')
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_controls_status_chat"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/controls/status_chat", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e),
                    this.setBlocks({
                        input: twig.bind(this.block_input, this)
                    })
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(e) {
                    return !1
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    e.append('<div class="control-wrapper control--suggest '),
                    e.append(twig.filter.escape(this.env_, "class_name"in t ? t.class_name : "", "light_escape", null, !0)),
                    "list_separated"in t && t.list_separated && e.append(" control-suggest_separated"),
                    e.append(" "),
                    "substrSearch"in t && t.substrSearch && e.append(" js-substr-search"),
                    e.append('"'),
                    "wrapper_id"in t && t.wrapper_id && (e.append(' id="'),
                    e.append(twig.filter.escape(this.env_, "wrapper_id"in t ? t.wrapper_id : "", "light_escape", null, !0)),
                    e.append('"')),
                    e.append(" "),
                    e.append("additional_data"in t ? t.additional_data : ""),
                    e.append(" >"),
                    "suggest_icon"in t && t.suggest_icon && (e.append('<span class="control--suggest--icon icon icon-'),
                    e.append(twig.filter.escape(this.env_, "suggest_icon"in t ? t.suggest_icon : "", "light_escape", null, !0)),
                    e.append('"></span>')),
                    "value_id"in t || (t.value_id = ""),
                    t.value_title = "",
                    e.append('<ul class="control--suggest--list js-control--suggest--list custom-scroll '),
                    e.append(twig.filter.escape(this.env_, "list_class_name"in t ? t.list_class_name : "", "light_escape", null, !0)),
                    e.append('">'),
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
                        t.v = i,
                        e.append('<li data-value-id="'),
                        twig.attr("v"in t ? t.v : "", "id") ? e.append(twig.filter.escape(this.env_, twig.attr("v"in t ? t.v : "", "id"), "light_escape", null, !0)) : e.append(twig.filter.escape(this.env_, twig.attr("v"in t ? t.v : "", "value"), "light_escape", null, !0)),
                        e.append('" class="control--suggest--list--item '),
                        "selected"in t && t.selected && twig.attr("v"in t ? t.v : "", "id") == ("selected"in t ? t.selected : "") || "selected"in t && t.selected && twig.attr("v"in t ? t.v : "", "value") == ("selected"in t ? t.selected : "") ? (t.value_id = twig.attr("v"in t ? t.v : "", "id"),
                        t.value_title = twig.attr("v"in t ? t.v : "", "value"),
                        e.append("control--suggest--list--item-selected")) : "selected"in t && t.selected || 0 != twig.attr(a, "index0") || (t.value_id = twig.attr("v"in t ? t.v : "", "id"),
                        e.append("control--suggest--list--item-selected")),
                        e.append(" "),
                        e.append(twig.filter.escape(this.env_, twig.attr("v"in t ? t.v : "", "custom_class"), "light_escape", null, !0)),
                        e.append('"><span class="control--suggest--list--item-inner" title="'),
                        e.append(twig.filter.escape(this.env_, twig.attr("v"in t ? t.v : "", "value"), "light_escape", null, !0)),
                        e.append('">'),
                        e.append(twig.filter.escape(this.env_, twig.attr("v"in t ? t.v : "", "value"), "light_escape", null, !0)),
                        e.append("</span></li>"),
                        ++a.index0,
                        ++a.index,
                        a.first = !1,
                        a.length && (--a.revindex0,
                        --a.revindex,
                        a.last = 0 === a.revindex0)
                    }
                    ), this),
                    e.append("</ul>"),
                    "selected"in t && t.selected || !twig.filter.length(this.env_, "value"in t ? t.value : "") || "selected_should_be_empty"in t && t.selected_should_be_empty || (t.selected = "value"in t ? t.value : ""),
                    e.append(this.renderBlock("input", t, i)),
                    !("ajax"in t) && twig.filter.length(this.env_, "items"in t ? t.items : "") && e.append('<b class="control--suggest--down-btn"></b>'),
                    "closable"in t && t.closable && e.append('<span id="search_clear_button" class="date_field--clear"><span class="icon icon-inline icon-search-cancel"></span><span class="icon icon-inline js-search-hide icon-close"></span></span>'),
                    e.append("</div>")
                }
                ,
                t.prototype.block_input = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    e.append('<input data-enable-filter="'),
                    e.append("disable_filter"in t && t.disable_filter ? "n" : "y"),
                    e.append('" autocomplete="off" name="'),
                    e.append(twig.filter.escape(this.env_, "name"in t ? t.name : "", "light_escape", null, !0)),
                    e.append('" class="'),
                    "styled_input"in t && t.styled_input || e.append("text-input"),
                    e.append(" control--suggest--input "),
                    "ajax"in t ? e.append("js-control--suggest--input-ajax") : e.append("js-control--suggest--input control--suggest--input-inline"),
                    e.append(" "),
                    e.append(twig.filter.escape(this.env_, "input_class_name"in t ? t.input_class_name : "", "light_escape", null, !0)),
                    e.append('" '),
                    "id"in t && t.id && (e.append('id="'),
                    e.append(twig.filter.escape(this.env_, "id"in t ? t.id : "", "light_escape", null, !0)),
                    e.append('"')),
                    e.append(' type="'),
                    "input_type"in t && t.input_type ? e.append(twig.filter.escape(this.env_, "input_type"in t ? t.input_type : "", "light_escape", null, !0)) : e.append("text"),
                    e.append('" placeholder="'),
                    e.append(twig.filter.escape(this.env_, "placeholder"in t ? t.placeholder : "", "light_escape", null, !0)),
                    e.append('" value="'),
                    e.append(twig.filter.escape(this.env_, "value_title"in t ? twig.filter.def("value_title"in t ? t.value_title : "", "selected"in t ? t.selected : "") : "selected"in t ? t.selected : "", "light_escape", null, !0)),
                    e.append('" data-value-id="'),
                    e.append(twig.filter.escape(this.env_, "value_id"in t ? t.value_id : "", "light_escape", null, !0)),
                    e.append('" data-type="'),
                    e.append(twig.filter.escape(this.env_, "type"in t ? t.type : "", "light_escape", null, !0)),
                    e.append('" '),
                    "ajax"in t && (e.append('data-url="'),
                    e.append(twig.filter.escape(this.env_, twig.attr("ajax"in t ? t.ajax : "", "url"), "light_escape", null, !0)),
                    e.append('" data-params="'),
                    e.append(twig.filter.escape(this.env_, twig.attr("ajax"in t ? t.ajax : "", "params"), "light_escape", null, !0)),
                    e.append('" data-headers="'),
                    e.append(twig.filter.escape(this.env_, twig.attr("ajax"in t ? t.ajax : "", "headers"), "light_escape", null, !0)),
                    e.append('"')),
                    e.append(" "),
                    "disabled"in t && t.disabled && e.append('disabled="disabled"'),
                    e.append(" "),
                    e.append("additional_data"in t ? t.additional_data : ""),
                    e.append(" />")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_controls_suggest"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/controls/suggest", t)
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
                    i.entity_id = twig.attr(twig.attr(twig.attr(twig.attr(twig.attr(twig.attr("element"in i ? i.element : "", "cf"), twig.attr("cf"in i ? i.cf : "", "ID"), void 0, "array"), "VALUE"), "key"in i ? i.key : "", void 0, "array"), "value"), "entity_id"),
                    i.items = [{
                        id: "entity_id"in i ? i.entity_id : "",
                        option: this.env_.filter("i18n", "Select")
                    }],
                    t.append('<div class="js-control-supplier">'),
                    new (e._get("interface/controls/select.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        class_name: "linked-form__select",
                        items: "items"in i ? i.items : "",
                        selected: "entity_id"in i ? i.entity_id : "",
                        value: twig.attr("value"in i ? i.value : "", "entity_id", void 0, void 0, !0) ? twig.filter.def(twig.attr("value"in i ? i.value : "", "entity_id"), "") : "",
                        name: "name"in i ? i.name : "",
                        input_special_class: "js-supplier-input"
                    })),
                    t.append("</div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_controls_supplier"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/controls/supplier", t)
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
                    e.append('<div class="switcher_wrapper'),
                    "switcher_wrapper_class"in t && t.switcher_wrapper_class && (e.append(" "),
                    e.append(twig.filter.escape(this.env_, "switcher_wrapper_class"in t ? t.switcher_wrapper_class : "", "light_escape", null, !0))),
                    "blue"in t && t.blue && e.append(" controls-switcher-blue"),
                    e.append('">'),
                    t.label_class_name = "label_class_name"in t ? ("label_class_name"in t ? t.label_class_name : "") + " switcher" : "switcher",
                    t.checkbox_class_name = "switcher__checkbox",
                    "disabled"in t && t.disabled && (t.label_class_name = ("label_class_name"in t ? t.label_class_name : "") + " js-disabled",
                    t.checkbox_class_name = ("checkbox_class_name"in t ? t.checkbox_class_name : "") + " js-disabled"),
                    "checked"in t && t.checked ? t.label_class_name = ("label_class_name"in t ? t.label_class_name : "") + " switcher__on" : t.label_class_name = ("label_class_name"in t ? t.label_class_name : "") + " switcher__off",
                    "class_name"in t && t.class_name && (t.checkbox_class_name = ("checkbox_class_name"in t ? t.checkbox_class_name : "") + " " + ("class_name"in t ? t.class_name : "")),
                    "custom_class_name"in t && t.custom_class_name && (t.label_class_name = ("label_class_name"in t ? t.label_class_name : "") + " " + ("custom_class_name"in t ? t.custom_class_name : "")),
                    "id"in t && t.id || (t.id = "switcher_" + twig.functions.random(this.env_, 1e4)),
                    e.append('<label for="'),
                    e.append(twig.filter.escape(this.env_, "id"in t ? t.id : "", "light_escape", null, !0)),
                    e.append('" class="'),
                    e.append(twig.filter.escape(this.env_, "label_class_name"in t ? t.label_class_name : "", "light_escape", null, !0)),
                    e.append('" id=""></label><input type="checkbox" value="'),
                    "value"in t && t.value ? e.append(twig.filter.escape(this.env_, "value"in t ? t.value : "", "light_escape", null, !0)) : e.append("Y"),
                    e.append('" name="'),
                    e.append(twig.filter.escape(this.env_, "name"in t ? t.name : "", "light_escape", null, !0)),
                    e.append('" id="'),
                    e.append(twig.filter.escape(this.env_, "id"in t ? t.id : "", "light_escape", null, !0)),
                    e.append('" class="'),
                    e.append(twig.filter.escape(this.env_, "checkbox_class_name"in t ? t.checkbox_class_name : "", "light_escape", null, !0)),
                    e.append('" '),
                    "checked"in t && t.checked && e.append("checked"),
                    e.append(" "),
                    "disabled"in t && t.disabled && e.append('disabled="disabled"'),
                    e.append("></div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_controls_switcher"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/controls/switcher", t)
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
                    "items"in t && t.items && (t.tags_count = twig.filter.length(this.env_, "items"in t ? t.items : "")),
                    t.no_edit = "can_edit"in t && 0 == ("can_edit"in t ? t.can_edit : ""),
                    e.append('<div class="pipeline_leads__tags-inner" data-rest="'),
                    e.append(twig.filter.escape(this.env_, "tags_count"in t ? t.tags_count : "", "light_escape", null, !0)),
                    e.append('" '),
                    twig.contains(["left", "right"], "align"in t ? t.align : "") && (e.append('style="text-align: '),
                    e.append(twig.filter.escape(this.env_, "align"in t ? t.align : "", "light_escape", null, !0)),
                    e.append(';"')),
                    e.append(">"),
                    "tags_count"in t && t.tags_count) {
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
                            twig.attr("tag"in t ? t.tag : "", "label") ? t.tag_name = twig.attr("tag"in t ? t.tag : "", "label") : t.tag_name = twig.attr("tag"in t ? t.tag : "", "name"),
                            t.tag_styles = "",
                            twig.attr("tag"in t ? t.tag : "", "color") && (t.tag_styles = "border-color: #" + twig.attr("tag"in t ? t.tag : "", "color") + "; background-image: linear-gradient(0deg, " + this.env_.filter("hex2rgba", twig.attr("tag"in t ? t.tag : "", "color"), .3) + ", " + this.env_.filter("hex2rgba", twig.attr("tag"in t ? t.tag : "", "color"), .3) + ");"),
                            e.append('<span class="pipeline_leads__tag" data-id="'),
                            e.append(twig.filter.escape(this.env_, twig.attr("tag"in t ? t.tag : "", "id"), "light_escape", null, !0)),
                            e.append('" '),
                            "tag_styles"in t && t.tag_styles && (e.append('style="'),
                            e.append(twig.filter.escape(this.env_, "tag_styles"in t ? t.tag_styles : "", "light_escape", null, !0)),
                            e.append('" data-color="'),
                            e.append(twig.filter.escape(this.env_, twig.attr("tag"in t ? t.tag : "", "color"), "light_escape", null, !0)),
                            e.append('"')),
                            e.append(' data-rest="'),
                            e.append(twig.filter.escape(this.env_, ("tags_count"in t ? t.tags_count : "") - twig.attr(a, "index"), "light_escape", null, !0)),
                            e.append('">'),
                            e.append(twig.filter.escape(this.env_, twig.filter.escape(this.env_, "tag_name"in t ? t.tag_name : ""), "light_escape", null, !0)),
                            e.append("</span>"),
                            ++a.index0,
                            ++a.index,
                            a.first = !1,
                            a.length && (--a.revindex0,
                            --a.revindex,
                            a.last = 0 === a.revindex0)
                        }
                        ), this)
                    } else
                        "no_edit"in t && t.no_edit || (e.append('<span class="pipeline_leads__tag pipeline_leads__tag-add" '),
                        "add_tag_text"in t && t.add_tag_text && (e.append(' title="'),
                        e.append(twig.filter.escape(this.env_, "add_tag_text"in t ? t.add_tag_text : "", "light_escape", null, !0)),
                        e.append('" ')),
                        e.append(">"),
                        e.append(twig.filter.escape(this.env_, "add_tag_text"in t ? t.add_tag_text : "", "light_escape", null, !0)),
                        e.append("</span>"));
                    e.append("</div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_controls_tags"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/controls/tags", t)
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
                    e.append("<textarea "),
                    "id"in t && t.id && (e.append('id="'),
                    e.append(twig.filter.escape(this.env_, "id"in t ? t.id : "", "light_escape", null, !0)),
                    e.append('"')),
                    e.append(' class="text-input text-input-textarea '),
                    e.append(twig.filter.escape(this.env_, "class_name"in t ? t.class_name : "", "light_escape", null, !0)),
                    e.append('" tabindex="'),
                    e.append(twig.filter.escape(this.env_, "tab_index"in t ? t.tab_index : "", "light_escape", null, !0)),
                    e.append('" name="'),
                    e.append(twig.filter.escape(this.env_, "name"in t ? t.name : "", "light_escape", null, !0)),
                    e.append('" placeholder="'),
                    e.append(twig.filter.escape(this.env_, "placeholder"in t ? t.placeholder : "", "light_escape", null, !0)),
                    e.append('" '),
                    "style"in t && t.style) {
                        e.append('style="'),
                        t._parent = t;
                        var n = "style"in t ? t.style : "";
                        twig.forEach(n, (function(i, n) {
                            t.prop = n,
                            t.v = i,
                            e.append(twig.filter.escape(this.env_, "prop"in t ? t.prop : "", "light_escape", null, !0)),
                            e.append(":"),
                            e.append(twig.filter.escape(this.env_, "v"in t ? t.v : "", "light_escape", null, !0)),
                            e.append(";")
                        }
                        ), this),
                        e.append('"')
                    }
                    e.append(" "),
                    "disabled"in t && t.disabled && e.append('disabled="disabled"'),
                    e.append(" "),
                    "readonly"in t && t.readonly && e.append('readonly="readonly" '),
                    "form"in t && t.form && (e.append('form="'),
                    e.append(twig.filter.escape(this.env_, "form"in t ? t.form : "", "light_escape", null, !0)),
                    e.append('" ')),
                    "maxlength"in t && t.maxlength && (e.append('maxlength="'),
                    e.append(twig.filter.escape(this.env_, "maxlength"in t ? t.maxlength : "", "light_escape", null, !0)),
                    e.append('"')),
                    e.append(" "),
                    e.append("additional_data"in t ? t.additional_data : ""),
                    e.append(">"),
                    twig.filter.length(this.env_, "value"in t ? t.value : "") && e.append(twig.filter.escape(this.env_, "value"in t ? t.value : "", "light_escape", null, !0)),
                    e.append("</textarea>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_controls_textarea"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/controls/textarea", t)
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
                    e.append('<div class="control__textarea-code js-control-textarea-code '),
                    e.append(twig.filter.escape(this.env_, "class_name"in t ? t.class_name : "", "light_escape", null, !0)),
                    e.append('"><div class="control__textarea-code-lines '),
                    e.append(twig.filter.escape(this.env_, "lines_class_name"in t ? t.lines_class_name : "", "light_escape", null, !0)),
                    e.append('"></div><textarea class="control__textarea-code-area '),
                    e.append(twig.filter.escape(this.env_, "textarea_class_name"in t ? t.textarea_class_name : "", "light_escape", null, !0)),
                    e.append('" name="'),
                    e.append(twig.filter.escape(this.env_, "name"in t ? t.name : "", "light_escape", null, !0)),
                    e.append('" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false">'),
                    e.append(twig.filter.escape(this.env_, "value"in t ? t.value : "", "light_escape", null, !0)),
                    e.append("</textarea></div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_controls_textarea_code"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/controls/textarea_code", t)
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
                    i.times_items = [{
                        value: "00:00",
                        time: 0
                    }, {
                        value: "00:30",
                        time: 30
                    }, {
                        value: "01:00",
                        time: 100
                    }, {
                        value: "01:30",
                        time: 130
                    }, {
                        value: "02:00",
                        time: 200
                    }, {
                        value: "02:30",
                        time: 230
                    }, {
                        value: "03:00",
                        time: 300
                    }, {
                        value: "03:30",
                        time: 330
                    }, {
                        value: "04:00",
                        time: 400
                    }, {
                        value: "04:30",
                        time: 430
                    }, {
                        value: "05:00",
                        time: 500
                    }, {
                        value: "05:30",
                        time: 530
                    }, {
                        value: "06:00",
                        time: 600
                    }, {
                        value: "06:30",
                        time: 630
                    }, {
                        value: "07:00",
                        time: 700
                    }, {
                        value: "07:30",
                        time: 730
                    }, {
                        value: "08:00",
                        time: 800
                    }, {
                        value: "08:30",
                        time: 830
                    }, {
                        value: "09:00",
                        time: 900
                    }, {
                        value: "09:30",
                        time: 930
                    }, {
                        value: "10:00",
                        time: 1e3
                    }, {
                        value: "10:30",
                        time: 1030
                    }, {
                        value: "11:00",
                        time: 1100
                    }, {
                        value: "11:30",
                        time: 1130
                    }, {
                        value: "12:00",
                        time: 1200
                    }, {
                        value: "12:30",
                        time: 1230
                    }, {
                        value: "13:00",
                        time: 1300
                    }, {
                        value: "13:30",
                        time: 1330
                    }, {
                        value: "14:00",
                        time: 1400
                    }, {
                        value: "14:30",
                        time: 1430
                    }, {
                        value: "15:00",
                        time: 1500
                    }, {
                        value: "15:30",
                        time: 1530
                    }, {
                        value: "16:00",
                        time: 1600
                    }, {
                        value: "16:30",
                        time: 1630
                    }, {
                        value: "17:00",
                        time: 1700
                    }, {
                        value: "17:30",
                        time: 1730
                    }, {
                        value: "18:00",
                        time: 1800
                    }, {
                        value: "18:30",
                        time: 1830
                    }, {
                        value: "19:00",
                        time: 1900
                    }, {
                        value: "19:30",
                        time: 1930
                    }, {
                        value: "20:00",
                        time: 2e3
                    }, {
                        value: "20:30",
                        time: 2030
                    }, {
                        value: "21:00",
                        time: 2100
                    }, {
                        value: "21:30",
                        time: 2130
                    }, {
                        value: "22:00",
                        time: 2200
                    }, {
                        value: "22:30",
                        time: 2230
                    }, {
                        value: "23:00",
                        time: 2300
                    }, {
                        value: "23:30",
                        time: 2330
                    }],
                    12 == ("_time_format"in i ? i._time_format : "") && (i.times_items = [{
                        value: "12:00AM",
                        time: 0
                    }, {
                        value: "12:30AM",
                        time: 30
                    }, {
                        value: "1:00AM",
                        time: 100
                    }, {
                        value: "1:30AM",
                        time: 130
                    }, {
                        value: "2:00AM",
                        time: 200
                    }, {
                        value: "2:30AM",
                        time: 230
                    }, {
                        value: "3:00AM",
                        time: 300
                    }, {
                        value: "3:30AM",
                        time: 330
                    }, {
                        value: "4:00AM",
                        time: 400
                    }, {
                        value: "4:30AM",
                        time: 430
                    }, {
                        value: "5:00AM",
                        time: 500
                    }, {
                        value: "5:30AM",
                        time: 530
                    }, {
                        value: "6:00AM",
                        time: 600
                    }, {
                        value: "6:30AM",
                        time: 630
                    }, {
                        value: "7:00AM",
                        time: 700
                    }, {
                        value: "7:30AM",
                        time: 730
                    }, {
                        value: "8:00AM",
                        time: 800
                    }, {
                        value: "8:30AM",
                        time: 830
                    }, {
                        value: "9:00AM",
                        time: 900
                    }, {
                        value: "9:30AM",
                        time: 930
                    }, {
                        value: "10:00AM",
                        time: 1e3
                    }, {
                        value: "10:30AM",
                        time: 1030
                    }, {
                        value: "11:00AM",
                        time: 1100
                    }, {
                        value: "11:30AM",
                        time: 1130
                    }, {
                        value: "12:00PM",
                        time: 1200
                    }, {
                        value: "12:30PM",
                        time: 1230
                    }, {
                        value: "1:00PM",
                        time: 1300
                    }, {
                        value: "1:30PM",
                        time: 1330
                    }, {
                        value: "2:00PM",
                        time: 1400
                    }, {
                        value: "2:30PM",
                        time: 1430
                    }, {
                        value: "3:00PM",
                        time: 1500
                    }, {
                        value: "3:30PM",
                        time: 1530
                    }, {
                        value: "4:00PM",
                        time: 1600
                    }, {
                        value: "4:30PM",
                        time: 1630
                    }, {
                        value: "5:00PM",
                        time: 1700
                    }, {
                        value: "5:30PM",
                        time: 1730
                    }, {
                        value: "6:00PM",
                        time: 1800
                    }, {
                        value: "6:30PM",
                        time: 1830
                    }, {
                        value: "7:00PM",
                        time: 1900
                    }, {
                        value: "7:30PM",
                        time: 1930
                    }, {
                        value: "8:00PM",
                        time: 2e3
                    }, {
                        value: "8:30PM",
                        time: 2030
                    }, {
                        value: "9:00PM",
                        time: 2100
                    }, {
                        value: "9:30PM",
                        time: 2130
                    }, {
                        value: "10:00PM",
                        time: 2200
                    }, {
                        value: "10:30PM",
                        time: 2230
                    }, {
                        value: "11:00PM",
                        time: 2300
                    }, {
                        value: "11:30PM",
                        time: 2330
                    }]),
                    "time_intervals"in i && (i.times_items = [{
                        value: "00:00",
                        time: 0
                    }, {
                        value: "00:15",
                        time: 15
                    }, {
                        value: "00:30",
                        time: 30
                    }, {
                        value: "00:45",
                        time: 45
                    }, {
                        value: "01:00",
                        time: 100
                    }, {
                        value: "01:15",
                        time: 115
                    }, {
                        value: "01:30",
                        time: 130
                    }, {
                        value: "01:45",
                        time: 145
                    }, {
                        value: "02:00",
                        time: 200
                    }, {
                        value: "02:15",
                        time: 215
                    }, {
                        value: "02:30",
                        time: 230
                    }, {
                        value: "02:45",
                        time: 245
                    }, {
                        value: "03:00",
                        time: 300
                    }, {
                        value: "03:15",
                        time: 315
                    }, {
                        value: "03:30",
                        time: 330
                    }, {
                        value: "03:45",
                        time: 345
                    }, {
                        value: "04:00",
                        time: 400
                    }, {
                        value: "04:15",
                        time: 415
                    }, {
                        value: "04:30",
                        time: 430
                    }, {
                        value: "04:45",
                        time: 445
                    }, {
                        value: "05:00",
                        time: 500
                    }]),
                    i.items = [],
                    i._parent = i;
                    var a = "times_items"in i ? i.times_items : "";
                    twig.forEach(a, (function(e, t) {
                        i._key = t,
                        i.times_item = e,
                        i.keep_item = !0,
                        "skip_before_time"in i && twig.attr("times_item"in i ? i.times_item : "", "time") < ("skip_before_time"in i ? i.skip_before_time : "") && (i.keep_item = !1),
                        "keep_item"in i && i.keep_item && (i.items = twig.filter.merge("items"in i ? i.items : "", [{
                            value: twig.attr("times_item"in i ? i.times_item : "", "value"),
                            option: twig.attr("times_item"in i ? i.times_item : "", "value")
                        }]))
                    }
                    ), this),
                    "selected"in i && i.selected || "selected_should_be_empty"in i && i.selected_should_be_empty || ("date"in i && i.date || (i.date = this.env_.filter("task_date", "today", "timestamp", !0, !0)),
                    i.selected = this.env_.filter("task_date", "date"in i ? i.date : "", "time", !0)),
                    "time"in i && i.time && (i.selected = twig.attr(twig.attr("items"in i ? i.items : "", "time"in i ? i.time : "", void 0, "array"), "value")),
                    "name"in i && i.name || (i.name = "time"),
                    "id"in i && i.id || (i.id = "task_edit_time"),
                    new (e._get("interface/controls/" + ("input_tmpl"in i ? i.input_tmpl : "") + ".twig"))(this.env_).render_(t, twig.extend({}, i, {
                        items: "items"in i ? i.items : "",
                        id: "id"in i ? i.id : "",
                        selected: "selected"in i ? i.selected : "",
                        name: "name"in i ? i.name : "",
                        class_name: "class_name"in i ? i.class_name : "",
                        input_class_name: "js-control-time-formatter " + ("input_class_name"in i ? i.input_class_name : ""),
                        additional_data: ("additional_data"in i ? i.additional_data : "") || "",
                        selected_should_be_empty: "selected_should_be_empty"in i ? i.selected_should_be_empty : ""
                    }))
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_controls_time"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/controls/time", t)
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
                    "time_format"in i && i.time_format || (i.time_format = "_time_format"in i ? i._time_format : ""),
                    i.max_length = 12 == ("time_format"in i ? i.time_format : "") ? 7 : 6,
                    "selected_time"in i && i.selected_time ? "now" == ("selected_time"in i ? i.selected_time : "") && (i.selected_time = twig.attr(this.env_.filter("split", this.env_, this.env_.filter("task_date", "today", "time", !0, !0), " "), 1, void 0, "array")) : i.selected_time = "",
                    "placeholder_time"in i && i.placeholder_time ? "now" == ("placeholder_time"in i ? i.placeholder_time : "") && (i.placeholder_time = twig.attr(this.env_.filter("split", this.env_, this.env_.filter("task_date", "today", "time", !0, !0), " "), 1, void 0, "array")) : i.placeholder_time = "",
                    t.append('<div class="time-field '),
                    t.append(twig.filter.escape(this.env_, "class_name"in i ? i.class_name : "", "light_escape", null, !0)),
                    t.append('" data-time-format="'),
                    t.append(twig.filter.escape(this.env_, "time_format"in i ? i.time_format : "", "light_escape", null, !0)),
                    t.append('">'),
                    new (e._get("interface/controls/input.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        class_name: "text-input-visible-placeholder time-field-input js-control-time-field-input " + ("input_class_name"in i ? i.input_class_name : ""),
                        name: "name"in i ? i.name : "",
                        type: "text",
                        disabled: "disabled"in i ? i.disabled : "",
                        placeholder: "placeholder_time"in i ? i.placeholder_time : "",
                        value: "selected_time"in i ? i.selected_time : "",
                        max_length: "max_length"in i ? i.max_length : ""
                    })),
                    t.append("</div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_controls_time_field"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/controls/time_field", t)
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
                    e.append('<div class="control-toggler'),
                    "need_expand_icon"in t && t.need_expand_icon && e.append(" need-expand-icon"),
                    e.append(" "),
                    e.append(twig.filter.escape(this.env_, "class_name"in t ? t.class_name : "", "light_escape", null, !0)),
                    e.append('" '),
                    e.append("additional_data"in t ? t.additional_data : ""),
                    e.append(">"),
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
                        t.item = i,
                        twig.attr("item"in t ? t.item : "", "link") ? (e.append('<a href="'),
                        e.append(twig.filter.escape(this.env_, twig.attr("item"in t ? t.item : "", "link"), "light_escape", null, !0)),
                        e.append('" class="control-toggler__item '),
                        twig.attr("item"in t ? t.item : "", "selected") && e.append("control-toggler__item-selected"),
                        e.append(" "),
                        e.append(twig.filter.escape(this.env_, twig.attr("item"in t ? t.item : "", "class_name"), "light_escape", null, !0)),
                        e.append(" "),
                        e.append(twig.filter.escape(this.env_, "item_class_name"in t ? t.item_class_name : "", "light_escape", null, !0)),
                        e.append('" '),
                        e.append(twig.attr("item"in t ? t.item : "", "additional_data")),
                        e.append(' title="'),
                        e.append(twig.filter.escape(this.env_, twig.attr("item"in t ? t.item : "", "title"), "light_escape", null, !0)),
                        e.append('"'),
                        twig.attr("item"in t ? t.item : "", "value") ? (e.append(' value="'),
                        e.append(twig.filter.escape(this.env_, twig.attr("item"in t ? t.item : "", "value"), "light_escape", null, !0)),
                        e.append('"')) : (e.append(' value="'),
                        e.append(twig.filter.escape(this.env_, twig.attr("item"in t ? t.item : "", "id"), "light_escape", null, !0)),
                        e.append('"')),
                        e.append(' data-id="'),
                        e.append(twig.filter.escape(this.env_, twig.attr("item"in t ? t.item : "", "id"), "light_escape", null, !0)),
                        e.append('">'),
                        twig.attr("item"in t ? t.item : "", "icon") && (e.append('<span class="icon icon-heading icon-'),
                        e.append(twig.filter.escape(this.env_, twig.attr("item"in t ? t.item : "", "icon"), "light_escape", null, !0)),
                        e.append('"></span>')),
                        e.append("<span>"),
                        e.append(twig.filter.escape(this.env_, twig.attr("item"in t ? t.item : "", "title"), "light_escape", null, !0)),
                        e.append("</span>"),
                        "need_expand_icon"in t && t.need_expand_icon && e.append('<span class="icon icon-arrow-down-expand"></span>'),
                        "no_arrow"in t && t.no_arrow || e.append("<b></b>"),
                        e.append("</a>")) : twig.attr("item"in t ? t.item : "", "value", void 0, void 0, !0) && twig.attr("item"in t ? t.item : "", "name") ? (e.append('<label for="'),
                        e.append(twig.filter.escape(this.env_, twig.attr("item"in t ? t.item : "", "name"), "light_escape", null, !0)),
                        e.append("_"),
                        e.append(twig.filter.escape(this.env_, twig.attr("item"in t ? t.item : "", "value"), "light_escape", null, !0)),
                        e.append('" class="control-toggler__item '),
                        twig.attr("item"in t ? t.item : "", "selected") && e.append("control-toggler__item-selected"),
                        e.append(" "),
                        twig.attr(a, "first") && e.append("first"),
                        e.append(" "),
                        e.append(twig.filter.escape(this.env_, twig.attr("item"in t ? t.item : "", "class_name"), "light_escape", null, !0)),
                        e.append(" "),
                        e.append(twig.filter.escape(this.env_, "item_class_name"in t ? t.item_class_name : "", "light_escape", null, !0)),
                        e.append('" '),
                        e.append(twig.attr("item"in t ? t.item : "", "additional_data")),
                        e.append(' data-id="'),
                        e.append(twig.filter.escape(this.env_, twig.attr("item"in t ? t.item : "", "id"), "light_escape", null, !0)),
                        e.append('" data-label="'),
                        e.append(twig.filter.escape(this.env_, twig.attr("item"in t ? t.item : "", "label"), "light_escape", null, !0)),
                        e.append('">'),
                        twig.attr("item"in t ? t.item : "", "icon") && (e.append('<span class="icon icon-heading icon-'),
                        e.append(twig.filter.escape(this.env_, twig.attr("item"in t ? t.item : "", "icon"), "light_escape", null, !0)),
                        e.append('"></span>')),
                        e.append('<input type="radio" class="hidden '),
                        e.append(twig.filter.escape(this.env_, twig.attr("item"in t ? t.item : "", "class_name"), "light_escape", null, !0)),
                        e.append('" id="'),
                        e.append(twig.filter.escape(this.env_, twig.attr("item"in t ? t.item : "", "name"), "light_escape", null, !0)),
                        e.append("_"),
                        e.append(twig.filter.escape(this.env_, twig.attr("item"in t ? t.item : "", "value"), "light_escape", null, !0)),
                        e.append('" '),
                        twig.attr("item"in t ? t.item : "", "selected") && e.append('checked="checked"'),
                        e.append(' name="'),
                        e.append(twig.filter.escape(this.env_, twig.attr("item"in t ? t.item : "", "name"), "light_escape", null, !0)),
                        e.append('" value="'),
                        e.append(twig.filter.escape(this.env_, twig.attr("item"in t ? t.item : "", "value"), "light_escape", null, !0)),
                        e.append('">'),
                        "need_expand_icon"in t && t.need_expand_icon && e.append('<span class="icon icon-arrow-down-expand"></span>'),
                        "no_arrow"in t && t.no_arrow || e.append("<b></b>"),
                        e.append("</label>")) : (e.append('<span class="'),
                        twig.attr("item"in t ? t.item : "", "selected") && e.append("control-toggler__item-selected"),
                        twig.attr("item"in t ? t.item : "", "icon") && !twig.attr("item"in t ? t.item : "", "title") && e.append(" control-toggler__item_icon-only"),
                        e.append(" control-toggler__item "),
                        e.append(twig.filter.escape(this.env_, twig.attr("item"in t ? t.item : "", "class_name"), "light_escape", null, !0)),
                        e.append(" "),
                        e.append(twig.filter.escape(this.env_, "item_class_name"in t ? t.item_class_name : "", "light_escape", null, !0)),
                        e.append('" name="'),
                        e.append(twig.filter.escape(this.env_, twig.attr("item"in t ? t.item : "", "name"), "light_escape", null, !0)),
                        e.append('" '),
                        e.append(twig.attr("item"in t ? t.item : "", "additional_data")),
                        e.append(' title="'),
                        e.append(twig.filter.escape(this.env_, twig.attr("item"in t ? t.item : "", "title"), "light_escape", null, !0)),
                        e.append('" data-id="'),
                        e.append(twig.filter.escape(this.env_, twig.attr("item"in t ? t.item : "", "id"), "light_escape", null, !0)),
                        e.append('">'),
                        twig.attr("item"in t ? t.item : "", "icon") && (e.append('<span class="icon icon-heading icon-'),
                        e.append(twig.filter.escape(this.env_, twig.attr("item"in t ? t.item : "", "icon"), "light_escape", null, !0)),
                        e.append('"></span>')),
                        twig.attr("item"in t ? t.item : "", "icon_hover") && (e.append('<span class="icon icon-heading icon-heading-hover icon-'),
                        e.append(twig.filter.escape(this.env_, twig.attr("item"in t ? t.item : "", "icon_hover"), "light_escape", null, !0)),
                        e.append('"></span>')),
                        e.append(twig.filter.escape(this.env_, twig.attr("item"in t ? t.item : "", "title"), "light_escape", null, !0)),
                        "no_arrow"in t && t.no_arrow || e.append("<b></b>"),
                        e.append("</span>")),
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
                    return "interface_controls_toggler"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/controls/toggler", t)
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
                    "loader" == ("type"in i ? i.type : "") ? t.append('<span class="spinner-icon spinner-icon-updater"></span>') : "button" == ("type"in i ? i.type : "") && new (e._get("interface/controls/button.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        text: "button_text"in i ? i.button_text : "",
                        class_name: "class_name"in i ? i.class_name : ""
                    })),
                    "link_download"in i && i.link_download && (t.append('<span class="update-notifier_or">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Or"), "light_escape", null, !0)),
                    t.append("</span>&nbsp;"),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "use"), "light_escape", null, !0)),
                    t.append('&nbsp;<a class="js-link-update">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "direct link"), "light_escape", null, !0)),
                    t.append("</a>")),
                    t.append('<img class="js-button-update_close chat-inbox__close" src="/frontend/images/interface/inbox/close_notification.svg">')
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_controls_updater"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/controls/updater", t)
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
                    var a = "items"in i ? i.items : ""
                      , l = {
                        index0: 0,
                        index: 1,
                        first: !0
                    };
                    if (twig.countable(a)) {
                        var s = twig.count(a);
                        l.revindex0 = s - 1,
                        l.revindex = s,
                        l.length = s,
                        l.last = 1 === s
                    }
                    twig.forEach(a, (function(n, a) {
                        i.key = a,
                        i.field = n,
                        t.append('<div class="widget_settings_block__input_field"><div class=\'widget_settings_block_'),
                        t.append(twig.filter.escape(this.env_, "elem"in i ? i.elem : "", "light_escape", null, !0)),
                        t.append("'><div class='widget_settings_block_"),
                        t.append(twig.filter.escape(this.env_, "elem"in i ? i.elem : "", "light_escape", null, !0)),
                        t.append("__title_field widget_settings_block__title_field'>"),
                        t.append(twig.filter.escape(this.env_, twig.attr("field"in i ? i.field : "", "username"), "light_escape", null, !0)),
                        t.append("</div>"),
                        "users_lp" == ("type"in i ? i.type : "") ? (new (e._get("interface/controls/input.twig"))(this.env_).render_(t, twig.extend({}, i, {
                            placeholder: twig.attr("lang"in i ? i.lang : "", "sip_user"),
                            class_name: ("class_name"in i ? i.class_name : "") + " widget_settings_block__controls__" + ("elem"in i ? i.elem : ""),
                            value: twig.attr(twig.attr("value"in i ? i.value : "", "key"in i ? i.key : "", void 0, "array"), "login"),
                            name: twig.attr("field"in i ? i.field : "", "name") + "[login]",
                            id: "login_" + twig.attr("field"in i ? i.field : "", "id"),
                            type: twig.attr("field"in i ? i.field : "", "type")
                        })),
                        new (e._get("interface/controls/input.twig"))(this.env_).render_(t, twig.extend({}, i, {
                            placeholder: twig.attr("lang"in i ? i.lang : "", "password"),
                            class_name: ("class_name"in i ? i.class_name : "") + " widget_settings_block__controls__" + ("elem"in i ? i.elem : ""),
                            value: twig.attr(twig.attr("value"in i ? i.value : "", "key"in i ? i.key : "", void 0, "array"), "password"),
                            name: twig.attr("field"in i ? i.field : "", "name") + "[password]",
                            id: "password_" + twig.attr("field"in i ? i.field : "", "id"),
                            type: "password"
                        }))) : "users" == ("type"in i ? i.type : "") && new (e._get("interface/controls/input.twig"))(this.env_).render_(t, twig.extend({}, i, {
                            class_name: ("class_name"in i ? i.class_name : "") + "widget_settings_block__controls__" + ("elem"in i ? i.elem : ""),
                            value: twig.attr("value"in i ? i.value : "", "key"in i ? i.key : "", void 0, "array"),
                            name: twig.attr("field"in i ? i.field : "", "name"),
                            id: twig.attr("field"in i ? i.field : "", "id"),
                            type: "type"in i ? i.type : "",
                            placeholder: twig.attr("field"in i ? i.field : "", "title")
                        })),
                        t.append("</div></div>"),
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
                    return "interface_controls_users"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/controls/users", t)
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
                    t.append('<div class="js-control-wysiwyg control-wysiwyg '),
                    t.append(twig.filter.escape(this.env_, "wrapper_class_name"in i ? i.wrapper_class_name : "", "light_escape", null, !0)),
                    t.append('">'),
                    new (e._get("interface/controls/wysiwyg/toolbar.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        is_extended: "is_extended"in i ? i.is_extended : ""
                    })),
                    t.append('<input type="hidden" class="js-wysiwyg-input '),
                    t.append(twig.filter.escape(this.env_, "input_class_name"in i ? i.input_class_name : "", "light_escape", null, !0)),
                    t.append('" name="'),
                    t.append(twig.filter.escape(this.env_, "name"in i ? i.name : "", "light_escape", null, !0)),
                    t.append('" value="'),
                    t.append(twig.filter.escape(this.env_, twig.filter.escape(this.env_, "value"in i ? i.value : ""), "light_escape", null, !0)),
                    t.append('"><div class="control-wysiwyg__area h-text-overflow custom-scroll '),
                    t.append(twig.filter.escape(this.env_, "control_class_name"in i ? i.control_class_name : "", "light_escape", null, !0)),
                    t.append('"></div></div>')
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_controls_wysiwyg"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/controls/wysiwyg", t)
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
                    e.append('<div class="js-feed-airewriter control-airewriter feed-compose__actions-airewriter hidden"></div>')
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_controls_airewriter_index"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !0
                }
                ,
                e._add("interface/controls/airewriter/index", t)
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
                    i.reminder = {
                        never: {
                            option: twig.attr("lang"in i ? i.lang : "", "cf_birthday_remind_never"),
                            id: "0"
                        },
                        day: {
                            option: twig.attr("lang"in i ? i.lang : "", "cf_birthday_remind_event_day"),
                            id: "1"
                        },
                        week: {
                            option: twig.attr("lang"in i ? i.lang : "", "cf_birthday_remind_week_before"),
                            id: "2"
                        },
                        month: {
                            option: twig.attr("lang"in i ? i.lang : "", "cf_birthday_remind_month_before"),
                            id: "3"
                        }
                    },
                    i.selected_value = 0,
                    twig.attr("description"in i ? i.description : "", "remind") && (i.selected_value = twig.attr("description"in i ? i.description : "", "remind")),
                    t.append('<div class="birthday_settings__wrapper absolute_settings" data-parent-id=""><div class="birthday_settings__task_settings"><div class="birthday_settings__task_settings__title">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "cf_birthday_create_task"), "light_escape", null, !0)),
                    t.append(":</div>"),
                    new (e._get("interface/controls/select.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        items: "reminder"in i ? i.reminder : "",
                        disabled: !1,
                        selected: "selected_value"in i ? i.selected_value : "",
                        name: "description[remind]"
                    })),
                    t.append('</div><div class="birthday_settings__description">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "cf_birthday_settings_desc"), "light_escape", null, !0)),
                    t.append("</div></div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_controls_birthday_birthday_settings"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/controls/birthday/birthday_settings", t)
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
                    t.append('<ul class="button-input__context-menu '),
                    t.append(twig.filter.escape(this.env_, "context_menu_class_name"in i ? i.context_menu_class_name : "", "light_escape", null, !0)),
                    t.append('">'),
                    i._parent = i;
                    var a = "context_menu"in i ? i.context_menu : ""
                      , l = {
                        index0: 0,
                        index: 1,
                        first: !0
                    };
                    if (twig.countable(a)) {
                        var s = twig.count(a);
                        l.revindex0 = s - 1,
                        l.revindex = s,
                        l.length = s,
                        l.last = 1 === s
                    }
                    twig.forEach(a, (function(n, a) {
                        i._key = a,
                        i.item = n,
                        t.append('<li class="button-input__context-menu__item '),
                        twig.attr("item"in i ? i.item : "", "checkable") && t.append("button-input__context-menu__item-checkable"),
                        t.append(" element__"),
                        t.append(twig.filter.escape(this.env_, twig.attr("item"in i ? i.item : "", "icon"), "light_escape", null, !0)),
                        t.append(" "),
                        t.append(twig.filter.escape(this.env_, twig.attr("item"in i ? i.item : "", "class_name"), "light_escape", null, !0)),
                        twig.attr("item"in i ? i.item : "", "copy") && t.append(" js-context-menu-copy"),
                        t.append('" '),
                        (twig.attr("item"in i ? i.item : "", "id") || 0 == twig.attr("item"in i ? i.item : "", "id")) && (t.append('id="'),
                        t.append(twig.filter.escape(this.env_, twig.attr("item"in i ? i.item : "", "id"), "light_escape", null, !0)),
                        t.append('"')),
                        t.append(" "),
                        twig.attr("item"in i ? i.item : "", "copy") && (t.append('data-copied="'),
                        t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Copied"), "light_escape", null, !0)),
                        t.append('!" data-clipboard-text="'),
                        t.append(twig.filter.escape(this.env_, twig.attr("item"in i ? i.item : "", "copy"), "light_escape", null, !0)),
                        t.append('"')),
                        t.append(twig.attr("item"in i ? i.item : "", "additional_data")),
                        t.append(" "),
                        twig.attr("item"in i ? i.item : "", "checkable_checked") && t.append("data-checkable-checked"),
                        t.append(">"),
                        twig.attr("item"in i ? i.item : "", "href") ? (t.append('<a href="'),
                        t.append(twig.filter.escape(this.env_, twig.attr("item"in i ? i.item : "", "href"), "light_escape", null, !0)),
                        t.append('" class="'),
                        twig.attr("item"in i ? i.item : "", "_blank") || twig.attr("item"in i ? i.item : "", "disable_navigate") || t.append("js-navigate-link"),
                        t.append(' button-input__context-menu__item__link button-input__context-menu__item__inner" '),
                        twig.attr("item"in i ? i.item : "", "_blank") && t.append(' target="_blank" '),
                        t.append(" "),
                        t.append(twig.filter.escape(this.env_, twig.attr("item"in i ? i.item : "", "link_additional_data"), "light_escape", null, !0)),
                        t.append(" >"),
                        new (e._get("interface/controls/button/context_menu_inner.twig"))(this.env_).render_(t, twig.extend({}, i, {
                            item: "item"in i ? i.item : ""
                        })),
                        t.append("</a>")) : (t.append('<div class="button-input__context-menu__item__inner">'),
                        i.custom_inner_template = twig.attr("item"in i ? i.item : "", "custom_inner_template"),
                        twig.empty("custom_inner_template"in i ? i.custom_inner_template : "") ? new (e._get("interface/controls/button/context_menu_inner.twig"))(this.env_).render_(t, twig.extend({}, i, {
                            item: "item"in i ? i.item : ""
                        })) : new (e._get("custom_inner_template"in i ? i.custom_inner_template : ""))(this.env_).render_(t, twig.extend({}, i, {
                            item: "item"in i ? i.item : ""
                        })),
                        t.append("</div>")),
                        t.append("</li>"),
                        ++l.index0,
                        ++l.index,
                        l.first = !1,
                        l.length && (--l.revindex0,
                        --l.revindex,
                        l.last = 0 === l.revindex0)
                    }
                    ), this),
                    t.append("</ul>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_controls_button_context_menu"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/controls/button/context_menu", t)
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
                    i.has_left_icon = twig.attr("item"in i ? i.item : "", "icon") || twig.attr("item"in i ? i.item : "", "svg_icon_absolute") || twig.attr("item"in i ? i.item : "", "svg_icon"),
                    "has_left_icon"in i && i.has_left_icon && (t.append('<span class="button-input__context-menu__item__icon-container">'),
                    twig.attr("item"in i ? i.item : "", "icon") && (t.append('<span class="button-input__context-menu__item__icon icon icon-inline icon-'),
                    t.append(twig.filter.escape(this.env_, twig.attr("item"in i ? i.item : "", "icon"), "light_escape", null, !0)),
                    t.append(" "),
                    t.append(twig.filter.escape(this.env_, twig.attr("item"in i ? i.item : "", "icon_class"), "light_escape", null, !0)),
                    t.append('"></span>')),
                    i.svg_icon = twig.attr("item"in i ? i.item : "", "svg_icon_absolute"),
                    twig.attr("item"in i ? i.item : "", "svg_icon") && (i.svg_icon = "common--" + twig.attr("item"in i ? i.item : "", "svg_icon")),
                    "svg_icon"in i && i.svg_icon && (t.append('<svg class="button-input__context-menu__item__icon svg-icon svg-'),
                    t.append(twig.filter.escape(this.env_, "svg_icon"in i ? i.svg_icon : "", "light_escape", null, !0)),
                    t.append("-dims "),
                    t.append(twig.filter.escape(this.env_, twig.attr("item"in i ? i.item : "", "icon_class"), "light_escape", null, !0)),
                    t.append('"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#'),
                    t.append(twig.filter.escape(this.env_, "svg_icon"in i ? i.svg_icon : "", "light_escape", null, !0)),
                    t.append('"></use></svg>')),
                    t.append("</span>")),
                    t.append('<span class="button-input__context-menu__item__text '),
                    t.append(twig.filter.escape(this.env_, twig.attr("item"in i ? i.item : "", "span_class"), "light_escape", null, !0)),
                    t.append('">'),
                    twig.attr("item"in i ? i.item : "", "localization") ? t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", twig.attr("item"in i ? i.item : "", "localization"), void 0, "array"), "light_escape", null, !0)) : twig.attr("item"in i ? i.item : "", "control") ? (t.append('<span class="button-input__context-menu__item__text_inner">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("item"in i ? i.item : "", "text"), "light_escape", null, !0)),
                    t.append("</span>"),
                    new (e._get("interface/controls/" + twig.attr(twig.attr("item"in i ? i.item : "", "control"), "type") + ".twig"))(this.env_).render_(t, twig.extend({}, i, twig.attr("item"in i ? i.item : "", "control")))) : t.append(twig.filter.escape(this.env_, twig.attr("item"in i ? i.item : "", "text"), "light_escape", null, !0)),
                    t.append("</span>"),
                    i.svg_left_icon = twig.attr("item"in i ? i.item : "", "svg_icon_left_absolute"),
                    twig.attr("item"in i ? i.item : "", "svg_icon_left") && (i.svg_left_icon = "common--" + twig.attr("item"in i ? i.item : "", "svg_icon_left")),
                    "svg_left_icon"in i && i.svg_left_icon && (t.append('<svg class="button-input__context-menu__item__icon svg-icon svg-'),
                    t.append(twig.filter.escape(this.env_, "svg_left_icon"in i ? i.svg_left_icon : "", "light_escape", null, !0)),
                    t.append("-dims "),
                    t.append(twig.filter.escape(this.env_, twig.attr("item"in i ? i.item : "", "icon_left_class"), "light_escape", null, !0)),
                    t.append('"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#'),
                    t.append(twig.filter.escape(this.env_, "svg_left_icon"in i ? i.svg_left_icon : "", "light_escape", null, !0)),
                    t.append('"></use></svg>'))
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_controls_button_context_menu_inner"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/controls/button/context_menu_inner", t)
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
                    "link"in t && t.link) {
                        if (e.append('<a href="'),
                        e.append(twig.filter.escape(this.env_, "link"in t ? t.link : "", "light_escape", null, !0)),
                        e.append('" class="list-top-nav__icon-button '),
                        e.append(twig.filter.escape(this.env_, "class_name"in t ? t.class_name : "", "light_escape", null, !0)),
                        e.append(" "),
                        this.env_.test("iterable", "type"in t ? t.type : "")) {
                            t._parent = t;
                            var n = "type"in t ? t.type : "";
                            twig.forEach(n, (function(i, n) {
                                t._key = n,
                                t.t = i,
                                e.append("list-top-nav__icon-button_"),
                                e.append(twig.filter.escape(this.env_, "t"in t ? t.t : "", "light_escape", null, !0)),
                                e.append(" ")
                            }
                            ), this)
                        } else
                            e.append("list-top-nav__icon-button_"),
                            e.append(twig.filter.escape(this.env_, "type"in t ? t.type : "", "light_escape", null, !0));
                        e.append(" "),
                        "active"in t && t.active && e.append("list-top-nav__icon-button_active"),
                        e.append(" "),
                        "user_rank"in t && t.user_rank && "leads" == ("data_entity"in t ? t.data_entity : "") && (e.append("list-top-nav__icon-button_"),
                        e.append(twig.filter.escape(this.env_, "user_rank"in t ? t.user_rank : "", "light_escape", null, !0))),
                        e.append(" "),
                        "js_caption"in t && t.js_caption && e.append("js-list-caption-link"),
                        e.append('" '),
                        "id"in t && t.id && (e.append('id="'),
                        e.append(twig.filter.escape(this.env_, "id"in t ? t.id : "", "light_escape", null, !0)),
                        e.append('"')),
                        e.append(' title="'),
                        e.append(twig.filter.escape(this.env_, "title"in t ? t.title : "", "light_escape", null, !0)),
                        e.append('" '),
                        e.append("additional_data"in t ? t.additional_data : ""),
                        e.append('><svg class="svg-icon svg-'),
                        e.append(twig.filter.escape(this.env_, "svg_class_name"in t ? t.svg_class_name : "", "light_escape", null, !0)),
                        e.append('-dims"><use xlink:href="#'),
                        e.append(twig.filter.escape(this.env_, "svg_class_name"in t ? t.svg_class_name : "", "light_escape", null, !0)),
                        e.append('"></use></svg></a>')
                    } else
                        e.append('<div class="list-top-nav__icon-button '),
                        e.append(twig.filter.escape(this.env_, "class_name"in t ? t.class_name : "", "light_escape", null, !0)),
                        e.append(" "),
                        this.env_.test("iterable", "type"in t ? t.type : "") ? (t._parent = t,
                        n = "type"in t ? t.type : "",
                        twig.forEach(n, (function(i, n) {
                            t._key = n,
                            t.t = i,
                            e.append("list-top-nav__icon-button_"),
                            e.append(twig.filter.escape(this.env_, "t"in t ? t.t : "", "light_escape", null, !0)),
                            e.append(" ")
                        }
                        ), this)) : (e.append("list-top-nav__icon-button_"),
                        e.append(twig.filter.escape(this.env_, "type"in t ? t.type : "", "light_escape", null, !0))),
                        e.append(" "),
                        "active"in t && t.active && e.append("list-top-nav__icon-button_active"),
                        e.append(" "),
                        "user_rank"in t && t.user_rank && "leads" == ("data_entity"in t ? t.data_entity : "") && (e.append("list-top-nav__icon-button_"),
                        e.append(twig.filter.escape(this.env_, "user_rank"in t ? t.user_rank : "", "light_escape", null, !0))),
                        e.append(" "),
                        "js_caption"in t && t.js_caption && e.append("js-list-caption-link"),
                        e.append('" '),
                        "id"in t && t.id && (e.append('id="'),
                        e.append(twig.filter.escape(this.env_, "id"in t ? t.id : "", "light_escape", null, !0)),
                        e.append('"')),
                        e.append(' title="'),
                        e.append(twig.filter.escape(this.env_, "title"in t ? t.title : "", "light_escape", null, !0)),
                        e.append('" '),
                        e.append("additional_data"in t ? t.additional_data : ""),
                        e.append('><svg class="svg-icon svg-'),
                        e.append(twig.filter.escape(this.env_, "svg_class_name"in t ? t.svg_class_name : "", "light_escape", null, !0)),
                        e.append('-dims"><use xlink:href="#'),
                        e.append(twig.filter.escape(this.env_, "svg_class_name"in t ? t.svg_class_name : "", "light_escape", null, !0)),
                        e.append('"></use></svg></div>')
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_controls_button_list_action"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/controls/button/list_action", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e),
                    this.setBlocks({
                        before_list_block: twig.bind(this.block_before_list_block, this),
                        inner: twig.bind(this.block_inner, this)
                    })
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(t) {
                    return e._get("interface/controls/checkboxes_dropdown/index.twig")
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    this.getParent(t).render_(e, t, twig.extend({}, this.getBlocks(), i))
                }
                ,
                t.prototype.block_before_list_block = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    t.data = {
                        name: "name"in t ? t.name : "",
                        items: "items"in t ? t.items : "",
                        name_is_array: "name_is_array"in t ? t.name_is_array : "",
                        small: "small"in t ? t.small : "",
                        disabled: "disabled"in t ? t.disabled : ""
                    },
                    e.append('<script type="application/json">'),
                    e.append(twig.filter.json_encode("data"in t ? t.data : "")),
                    e.append("<\/script>")
                }
                ,
                t.prototype.block_inner = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    new (e._get("interface/controls/checkboxes_dropdown/inner.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        only_checked: !0
                    }))
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_controls_checkboxes_dropdown_checkboxes_dropdown_huge"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/controls/checkboxes_dropdown/checkboxes_dropdown_huge", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e),
                    this.setBlocks({
                        before_list_block: twig.bind(this.block_before_list_block, this),
                        inner: twig.bind(this.block_inner, this),
                        title: twig.bind(this.block_title, this)
                    })
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(e) {
                    return !1
                }
                ,
                t.prototype.render_ = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    i.checked_values_length = 0,
                    t.append('<div class="checkboxes_dropdown '),
                    t.append(twig.filter.escape(this.env_, "class_name"in i ? i.class_name : "", "light_escape", null, !0)),
                    t.append(" "),
                    "control_class_name"in i && i.control_class_name ? t.append(twig.filter.escape(this.env_, "control_class_name"in i ? i.control_class_name : "", "light_escape", null, !0)) : t.append("js-control-checkboxes_dropdown"),
                    t.append('" '),
                    "disable_to_top_mode"in i && i.disable_to_top_mode && t.append('data-disable-to-top-mode="Y"'),
                    t.append('><div class="checkboxes_dropdown__list custom-scroll '),
                    t.append(twig.filter.escape(this.env_, "list_class_name"in i ? i.list_class_name : "", "light_escape", null, !0)),
                    t.append('">'),
                    t.append(this.renderBlock("before_list_block", i, n)),
                    i.checked_values_length = twig.filter.length(this.env_, "items"in i ? i.items : ""),
                    t.append(this.renderBlock("inner", i, n)),
                    t.append('</div><div class="checkboxes_dropdown__title_wrapper '),
                    ("readonly"in i && i.readonly || "disabled"in i && i.disabled) && t.append("js-checkboxes_dropdown_disabled"),
                    t.append('">'),
                    new (e._get("interface/controls/checkbox.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        class_name: "checkboxes_dropdown__checkbox_master icon-checkbox js-master-checkbox-wrapper",
                        input_class_name: "js-form-changes-skip js-master-checkbox",
                        checked: ("checked_values_length"in i ? i.checked_values_length : "") > 0,
                        checked_minus: ("checked_values_length"in i ? i.checked_values_length : "") > 0 && ("checked_values_length"in i ? i.checked_values_length : "") != twig.filter.length(this.env_, "items"in i ? i.items : ""),
                        name: "",
                        name_is_array: !1,
                        value: "",
                        text: "",
                        small: "small"in i ? i.small : "",
                        disabled: "disabled"in i ? i.disabled : ""
                    })),
                    t.append('<span class="checkboxes_dropdown__title-selected"><span class="checkboxes_dropdown__title" '),
                    "has_custom_title"in i && i.has_custom_title && (t.append('data-custom-title="'),
                    t.append(twig.filter.escape(this.env_, "has_custom_title"in i ? i.has_custom_title : "", "light_escape", null, !0)),
                    t.append('"')),
                    t.append(' data-numeral="'),
                    t.append(twig.filter.escape(this.env_, "has_custom_title"in i && i.has_custom_title ? "custom_title"in i ? i.custom_title : "" : "title_numeral"in i ? i.title_numeral : "", "light_escape", null, !0)),
                    t.append('" data-title-empty="'),
                    t.append(twig.filter.escape(this.env_, "has_custom_title"in i && i.has_custom_title ? "custom_title_empty"in i ? i.custom_title_empty : "" : "title_empty"in i ? i.title_empty : "", "light_escape", null, !0)),
                    t.append('">'),
                    t.append(this.renderBlock("title", i, n)),
                    t.append('</span></span><span class="checkboxes_dropdown_icon icon-v-ico-2"></span></div></div>')
                }
                ,
                t.prototype.block_before_list_block = function(e, t, i) {
                    i = void 0 === i ? {} : i
                }
                ,
                t.prototype.block_inner = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    new (e._get("interface/controls/checkboxes_dropdown/inner.twig"))(this.env_).render_(t, i)
                }
                ,
                t.prototype.block_title = function(e, t, i) {
                    if (i = void 0 === i ? {} : i,
                    "checked_values_length"in t && t.checked_values_length && ("checked_values_length"in t ? t.checked_values_length : "") != twig.filter.length(this.env_, "items"in t ? t.items : "")) {
                        t.is_first = !0,
                        t._parent = t;
                        var n = "items"in t ? t.items : "";
                        twig.forEach(n, (function(i, n) {
                            t._key = n,
                            t.item = i,
                            twig.attr("item"in t ? t.item : "", "is_checked") && (e.append('<div class="checkboxes_dropdown__title-item" '),
                            "is_first"in t && t.is_first && "title_before"in t && t.title_before && (e.append('data-title-before="'),
                            e.append(twig.filter.escape(this.env_, "title_before"in t ? t.title_before : "", "light_escape", null, !0)),
                            e.append('"')),
                            e.append(">"),
                            e.append(twig.filter.escape(this.env_, twig.attr("item"in t ? t.item : "", "option"), "light_escape", null, !0)),
                            e.append("</div>"),
                            t.is_first = !1)
                        }
                        ), this)
                    } else
                        e.append('<div class="checkboxes_dropdown__title-item" '),
                        "title_before"in t && t.title_before && (e.append('data-title-before="'),
                        e.append(twig.filter.escape(this.env_, "title_before"in t ? t.title_before : "", "light_escape", null, !0)),
                        e.append('"')),
                        e.append(">"),
                        "has_custom_title"in t && t.has_custom_title ? e.append(twig.filter.escape(this.env_, "custom_title"in t ? t.custom_title : "", "light_escape", null, !0)) : "checked_values_length"in t && t.checked_values_length ? e.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "All") + " " + this.env_.filter("numeral", "title_numeral"in t ? t.title_numeral : "", "all"), "light_escape", null, !0)) : e.append(twig.filter.escape(this.env_, "title_empty"in t && t.title_empty ? "title_empty"in t ? t.title_empty : "" : this.env_.filter("i18n", "All") + " " + this.env_.filter("numeral", "title_numeral"in t ? t.title_numeral : "", "all"), "light_escape", null, !0)),
                        e.append("</div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_controls_checkboxes_dropdown_index"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/controls/checkboxes_dropdown/index", t)
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
                    t.append('<div class="checkboxes_dropdown__list__wrapper__inner"><div class="checkboxes_dropdown__item" >'),
                    new (e._get("interface/controls/checkbox.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        name: "",
                        name_is_array: !1,
                        id: "cbx_drop_master_" + twig.functions.random(this.env_, 1e3),
                        class_name: "checkboxes_dropdown__label js-master-checkbox-wrapper",
                        input_class_name: "js-form-changes-skip js-master-checkbox",
                        text_class_name: "js-select-all-text checkboxes_dropdown__label_title checkboxes_dropdown__label_title-not_active",
                        value: "",
                        small: "small"in i ? i.small : "",
                        disabled: "disabled"in i ? i.disabled : "",
                        text: this.env_.filter("i18n", "Select all")
                    })),
                    t.append("</div>"),
                    i.cb_name = "name"in i ? i.name : "",
                    !("only_checked"in i) || !i.only_checked) {
                        i._parent = i;
                        var a = "items"in i ? i.items : ""
                          , l = {
                            index0: 0,
                            index: 1,
                            first: !0
                        };
                        if (twig.countable(a)) {
                            var s = twig.count(a);
                            l.revindex0 = s - 1,
                            l.revindex = s,
                            l.length = s,
                            l.last = 1 === s
                        }
                        twig.forEach(a, (function(n, a) {
                            i._key = a,
                            i.item = n,
                            i.text = twig.attr("item"in i ? i.item : "", "option"),
                            twig.attr("item"in i ? i.item : "", "name") && (i.cb_name = twig.attr("item"in i ? i.item : "", "name")),
                            t.append('<div class="checkboxes_dropdown__item '),
                            "N" == twig.attr("item"in i ? i.item : "", "active") && t.append(" checkboxes_dropdown__label_title-not_active"),
                            t.append(" "),
                            twig.attr("item"in i ? i.item : "", "divider_before") && t.append(" checkboxes_dropdown__label_title_divider_before"),
                            t.append(" "),
                            twig.attr("item"in i ? i.item : "", "divider_after") && t.append("checkboxes_dropdown__label_title_divider_after"),
                            t.append('" '),
                            twig.attr("item"in i ? i.item : "", "divider_before") && (t.append('data-title-before="'),
                            t.append(twig.filter.escape(this.env_, twig.attr(twig.attr("item"in i ? i.item : "", "divider_before"), "title"), "light_escape", null, !0)),
                            t.append('"')),
                            t.append(" "),
                            twig.attr("item"in i ? i.item : "", "divider_after") && (t.append(' data-title-after="'),
                            t.append(twig.filter.escape(this.env_, twig.attr(twig.attr("item"in i ? i.item : "", "divider_after"), "title"), "light_escape", null, !0)),
                            t.append('"')),
                            t.append(' style="'),
                            twig.attr("item"in i ? i.item : "", "bg_color") && (t.append("background-color: "),
                            t.append(twig.filter.escape(this.env_, twig.attr("item"in i ? i.item : "", "bg_color"), "light_escape", null, !0))),
                            t.append('">'),
                            twig.attr("item"in i ? i.item : "", "prefix") || (i.item = twig.filter.merge("item"in i ? i.item : "", {
                                prefix: twig.attr("item"in i ? i.item : "", "id") + twig.functions.random(this.env_, 99999)
                            })),
                            i.text_class_name = "checkboxes_dropdown__label_title",
                            ("N" == twig.attr("item"in i ? i.item : "", "active") || twig.attr("item"in i ? i.item : "", "readonly")) && (i.text_class_name = ("text_class_name"in i ? i.text_class_name : "") + " checkboxes_dropdown__label_title-not_active"),
                            new (e._get("interface/controls/checkbox.twig"))(this.env_).render_(t, twig.extend({}, i, {
                                name: "cb_name"in i ? i.cb_name : "",
                                id: "cbx_drop_" + twig.attr("item"in i ? i.item : "", "prefix"),
                                class_name: "checkboxes_dropdown__label",
                                input_class_name: "js-item-checkbox",
                                text_class_name: "text_class_name"in i ? i.text_class_name : "",
                                checked: twig.attr("item"in i ? i.item : "", "is_checked"),
                                value: twig.attr("item"in i ? i.item : "", "id"),
                                should_be_raw: twig.attr("item"in i ? i.item : "", "should_be_raw"),
                                name_is_array: "name_is_array"in i ? i.name_is_array : "",
                                text: "text"in i ? i.text : "",
                                small: "small"in i ? i.small : "",
                                disabled: "disabled"in i ? i.disabled : "",
                                readonly: twig.attr("item"in i ? i.item : "", "readonly")
                            })),
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
                    t.append("</div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_controls_checkboxes_dropdown_inner"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/controls/checkboxes_dropdown/inner", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e),
                    this.setBlocks({
                        title: twig.bind(this.block_title, this)
                    })
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(t) {
                    return e._get("interface/controls/checkboxes_dropdown/index.twig")
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    t.control_class_name = "js-control-checkboxes_dropdown_values",
                    this.getParent(t).render_(e, t, twig.extend({}, this.getBlocks(), i))
                }
                ,
                t.prototype.block_title = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    e.append(twig.filter.escape(this.env_, "title"in t ? t.title : "", "light_escape", null, !0))
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_controls_checkboxes_dropdown_values_title"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/controls/checkboxes_dropdown/values_title", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e),
                    this.setBlocks({
                        input: twig.bind(this.block_input, this)
                    })
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(t) {
                    return e._get("interface/controls/checkboxes_search/index.twig")
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    this.getParent(t).render_(e, t, twig.extend({}, this.getBlocks(), i))
                }
                ,
                t.prototype.block_input = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    new (e._get("interface/controls/checkboxes_search/input_conditions.twig"))(this.env_).render_(t, {
                        title: "title"in i ? i.title : "",
                        items: "items"in i ? i.items : "",
                        view_upper_bottom_line: "view_upper_bottom_line"in i ? i.view_upper_bottom_line : ""
                    })
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_controls_checkboxes_search_action_conditions"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/controls/checkboxes_search/action_conditions", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e),
                    this.setBlocks({
                        input: twig.bind(this.block_input, this)
                    })
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(e) {
                    return !1
                }
                ,
                t.prototype.render_ = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    t.append('<div class="filter__custom_settings__item checkboxes-search '),
                    t.append(twig.filter.escape(this.env_, "control_class_name"in i ? twig.filter.def("control_class_name"in i ? i.control_class_name : "", "js-control-checkboxes-search") : "js-control-checkboxes-search", "light_escape", null, !0)),
                    t.append('" data-name="'),
                    t.append(twig.filter.escape(this.env_, "name"in i ? i.name : "", "light_escape", null, !0)),
                    t.append('" data-field-name="'),
                    t.append(twig.filter.escape(this.env_, "name"in i ? i.name : "", "light_escape", null, !0)),
                    t.append('" title="'),
                    t.append(twig.filter.escape(this.env_, "title"in i ? i.title : "", "light_escape", null, !0)),
                    t.append('">'),
                    t.append(this.renderBlock("input", i, n)),
                    t.append('<div class="checkboxes-search__opening-list hidden" '),
                    "view_upper_bottom_line"in i && i.view_upper_bottom_line && t.append('data-view-upper="true"'),
                    t.append(">"),
                    new (e._get("interface/controls/checkboxes_search/opening_list.twig"))(this.env_).render_(t, i),
                    t.append('</div><b class="js-filter-field-clear"></b></div>')
                }
                ,
                t.prototype.block_input = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    new (e._get("interface/controls/checkboxes_search/input.twig"))(this.env_).render_(t, {
                        title: "title"in i ? i.title : ""
                    })
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_controls_checkboxes_search_index"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/controls/checkboxes_search/index", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e),
                    this.setBlocks({
                        items: twig.bind(this.block_items, this)
                    })
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(e) {
                    return !1
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    e.append('<div class="checkboxes-search__title-wrapper"><span class="checkboxes-search__title-selected"><span class="checkboxes-search__title" data-numeral="'),
                    e.append(twig.filter.escape(this.env_, "title"in t ? t.title : "", "light_escape", null, !0)),
                    e.append('" data-title-empty="'),
                    e.append(twig.filter.escape(this.env_, "title_empty"in t ? t.title_empty : "", "light_escape", null, !0)),
                    e.append('"><div class="checkboxes-search__title-item" '),
                    e.append("additional_data"in t ? t.additional_data : ""),
                    e.append(">"),
                    e.append(twig.filter.escape(this.env_, "title"in t ? t.title : "", "light_escape", null, !0)),
                    "items"in t && twig.filter.length(this.env_, "items"in t ? t.items : "") > 0 && e.append(":"),
                    e.append("</div>"),
                    "items"in t && twig.filter.length(this.env_, "items"in t ? t.items : "") > 0 && e.append(this.renderBlock("items", t, i)),
                    e.append('</span></span><span class="checkboxes-search__icon icon-v-ico-2"></span></div>')
                }
                ,
                t.prototype.block_items = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    t._parent = t;
                    var n = "items"in t ? t.items : "";
                    twig.forEach(n, (function(i, n) {
                        t._key = n,
                        t.item = i,
                        e.append('<div class="checkboxes-search__title-item">'),
                        e.append(twig.filter.escape(this.env_, "item"in t ? t.item : "", "light_escape", null, !0)),
                        e.append("</div>")
                    }
                    ), this)
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_controls_checkboxes_search_input"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/controls/checkboxes_search/input", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e),
                    this.setBlocks({
                        items: twig.bind(this.block_items, this)
                    })
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(t) {
                    return e._get("interface/controls/checkboxes_search/input.twig")
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    t.additional_data = 'data-groups-operator="' + this.env_.filter("i18n", "And") + ' "',
                    this.getParent(t).render_(e, t, twig.extend({}, this.getBlocks(), i))
                }
                ,
                t.prototype.block_items = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    t._parent = t;
                    var n = "items"in t ? t.items : "";
                    twig.forEach(n, (function(i, n) {
                        t._key = n,
                        t.item = i,
                        twig.attr("item"in t ? t.item : "", "checked") && (e.append('<div class="checkboxes-search__title-item">'),
                        e.append(twig.filter.escape(this.env_, twig.attr("item"in t ? t.item : "", "option"), "light_escape", null, !0)),
                        e.append("</div>"))
                    }
                    ), this)
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_controls_checkboxes_search_input_conditions"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/controls/checkboxes_search/input_conditions", t)
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
                    var a = "items"in i ? i.items : "";
                    twig.forEach(a, (function(n, a) {
                        if (i.key = a,
                        i.item = n,
                        "is_slash"in i && i.is_slash) {
                            var l = t;
                            (t = new twig.StringBuffer).append('<div class="checkboxes-search__slash-container">'),
                            twig.attr("item"in i ? i.item : "", "first_option") && (t.append('<span class="checkboxes-search__slash-first-name">'),
                            t.append(twig.filter.escape(this.env_, twig.attr("item"in i ? i.item : "", "first_option"), "light_escape", null, !0)),
                            t.append("</span>&nbsp;/&nbsp;")),
                            t.append('<span class="checkboxes-search__slash-name">'),
                            t.append(twig.filter.escape(this.env_, twig.attr("item"in i ? i.item : "", "two_option"), "light_escape", null, !0)),
                            t.append("</span></div>"),
                            i.text_custom = new twig.Markup(t.toString()),
                            t = l
                        }
                        twig.attr("item"in i ? i.item : "", "value", void 0, void 0, !0) ? i.items_value = twig.attr("item"in i ? i.item : "", "value") : i.items_value = twig.attr("item"in i ? i.item : "", "id"),
                        "is_slash"in i && i.is_slash ? new (e._get("interface/controls/checkbox.twig"))(this.env_).render_(t, {
                            name: "name"in i ? i.name : "",
                            checked: twig.attr("item"in i ? i.item : "", "checked"),
                            small: !0,
                            class_name: "checkboxes-search__item-label " + twig.attr("item"in i ? i.item : "", "class_name"),
                            text_custom: "text_custom"in i ? i.text_custom : "",
                            value: "items_value"in i ? i.items_value : "",
                            id: twig.attr("item"in i ? i.item : "", "id"),
                            dataValue: twig.attr("item"in i ? i.item : "", "first_option") + " / " + twig.attr("item"in i ? i.item : "", "two_option")
                        }) : new (e._get("interface/controls/checkbox.twig"))(this.env_).render_(t, {
                            name: "name"in i ? i.name : "",
                            checked: twig.attr("item"in i ? i.item : "", "checked"),
                            small: !0,
                            class_name: "checkboxes-search__item-label " + twig.attr("item"in i ? i.item : "", "class_name"),
                            text: twig.attr("item"in i ? i.item : "", "option"),
                            value: "items_value"in i ? i.items_value : "",
                            id: twig.attr("item"in i ? i.item : "", "id"),
                            dataValue: twig.attr("item"in i ? i.item : "", "option"),
                            additional_data: twig.attr("item"in i ? i.item : "", "additional_data")
                        })
                    }
                    ), this)
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_controls_checkboxes_search_items"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/controls/checkboxes_search/items", t)
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
                    new (e._get("interface/controls/checkboxes_search/searching_list.twig"))(this.env_).render_(t, i),
                    t.append('<div class="checkboxes-search__buttons-wrapper"><div class="button-input js-button-with-loader js-checkboxes-search-list-apply checkboxes-search__button button-input-disabled" tabindex="1"><span class="button-input-inner__text">'),
                    t.append(twig.filter.escape(this.env_, "save_button_text"in i ? twig.filter.def("save_button_text"in i ? i.save_button_text : "", twig.filter.upper(this.env_, this.env_.filter("i18n", "cf_birthday_ok"))) : twig.filter.upper(this.env_, this.env_.filter("i18n", "cf_birthday_ok")), "light_escape", null, !0)),
                    t.append("</span></div>"),
                    new (e._get("interface/controls/cancel_button.twig"))(this.env_).render_(t, {
                        lang: "lang"in i ? i.lang : "",
                        text: this.env_.filter("i18n", "button_cancel"),
                        tab_index: 2,
                        class_name: "js-checkboxes-search-list-close checkboxes-search__button-close"
                    }),
                    t.append("</div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_controls_checkboxes_search_opening_list"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/controls/checkboxes_search/opening_list", t)
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
                    t.append('<div class="checkboxes-search__content-scroll checkboxes-search__visible-scroll"><div class="checkboxes-search__links-wrapper"><span class="checkboxes-search__link js-checkboxes-search-check-all">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Select all"), "light_escape", null, !0)),
                    t.append('</span><span class="checkboxes-search__link js-checkboxes-search-clear-all">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Clear"), "light_escape", null, !0)),
                    t.append("</span></div>"),
                    new (e._get("interface/controls/input.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        type: "text",
                        class_name: "js-form-changes-skip checkboxes-search__search-input",
                        placeholder: this.env_.filter("i18n", "Search"),
                        name: ""
                    })),
                    t.append('<div class="checkboxes-search__section-common custom-scroll">'),
                    "items"in i && i.items && new (e._get("interface/controls/checkboxes_search/items.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        items: "items"in i ? i.items : "",
                        name: "name"in i ? i.name : ""
                    })),
                    t.append("</div></div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_controls_checkboxes_search_searching_list"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/controls/checkboxes_search/searching_list", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e),
                    this.setBlocks({
                        selected_date: twig.bind(this.block_selected_date, this),
                        make_purchase_button: twig.bind(this.block_make_purchase_button, this)
                    })
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(e) {
                    return !1
                }
                ,
                t.prototype.render_ = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    t.append('<div class="customers-date '),
                    "disabled"in i && i.disabled || t.append("js-control-purchase"),
                    t.append(" "),
                    t.append(twig.filter.escape(this.env_, "wrapper_class"in i ? i.wrapper_class : "", "light_escape", null, !0)),
                    t.append('">'),
                    t.append(this.renderBlock("selected_date", i, n)),
                    t.append('<div class="customers-date__list '),
                    t.append(twig.filter.escape(this.env_, "list_class_name"in i ? i.list_class_name : "", "light_escape", null, !0)),
                    "show_purchase_button"in i && i.show_purchase_button && t.append(" customers-date__list_with-button"),
                    t.append('">'),
                    new (e._get("interface/controls/date_field.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        type: "single",
                        control_class_name: "js-control-date-customers",
                        id: "task_edit_date",
                        input_class: "js-customers-date-date-input",
                        name: "next_date_name"in i && i.next_date_name ? "next_date_name"in i ? i.next_date_name : "" : "customers[next_date]",
                        value: "next_date"in i ? i.next_date : "",
                        show_icon: 1,
                        placeholder: this.env_.filter("i18n", "Specify date")
                    })),
                    t.append(this.renderBlock("make_purchase_button", i, n)),
                    t.append("</div></div>")
                }
                ,
                t.prototype.block_selected_date = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    e.append('<div class="customers-date__caption">'),
                    "show_icon_date"in t && t.show_icon_date && e.append('<div class="date_field_wrapper--calendar"><svg class="svg-card-calendar-dims"><use xlink:href="#card-calendar"></use></svg></div>'),
                    e.append('<span class="customers-date__caption-title">'),
                    "is_after"in t && t.is_after || "is_lost"in t && t.is_lost ? e.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Did not purchase"), "light_escape", null, !0)) : e.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Next purchase"), "light_escape", null, !0)),
                    e.append('</span><input type="text" class="customers-date__caption-focuser js-form-changes-skip"><span class="customers-date__caption-value '),
                    "is_after"in t && t.is_after && e.append("customers-date__caption-value_not-valid"),
                    e.append('" data-placeholder="'),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Specify date"), "light_escape", null, !0)),
                    e.append('">'),
                    e.append(twig.filter.escape(this.env_, "next_date"in t ? t.next_date : "", "light_escape", null, !0)),
                    e.append("</span></div>")
                }
                ,
                t.prototype.block_make_purchase_button = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    t.append('<div class="'),
                    "show_purchase_button"in i && i.show_purchase_button || t.append("hidden"),
                    t.append(' customers-date__purchase-wrapper js-purchase_button_wrapper">'),
                    new (e._get("interface/controls/button.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        class_name: "js-purchase-button customers-date__purchase-button",
                        text: this.env_.filter("i18n", "Bought"),
                        context_menu: !1
                    })),
                    t.append("</div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_controls_customers_select_with_data"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/controls/customers/select_with_data", t)
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
                    i.is_lost = "closed" == twig.attr("interval"in i ? i.interval : "", "type"),
                    t.append('<div class="customers-select-wrapper customers-select-wrapper_with-progress '),
                    t.append(twig.filter.escape(this.env_, "class_name"in i ? i.class_name : "", "light_escape", null, !0)),
                    t.append('" '),
                    "id"in i && i.id && (t.append('id="'),
                    t.append(twig.filter.escape(this.env_, "id"in i ? i.id : "", "light_escape", null, !0)),
                    t.append('"')),
                    t.append('><div class="customers-select-wrapper__selected">'),
                    new (e._get("interface/controls/customers/select_with_data.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        disabled: !("editable"in i && i.editable),
                        next_date: "next_date"in i ? i.next_date : "",
                        is_add: "is_add"in i ? i.is_add : "",
                        is_lost: "is_lost"in i ? i.is_lost : "",
                        is_after: ("next_date_timestamp"in i ? i.next_date_timestamp : "") < this.env_.filter("task_date", "today", "timestamp"),
                        list_class_name: "customers-date__list_in-card"
                    })),
                    t.append('<div class="customers-select_block"><div class="customers-select-wrapper__selected-status-name">'),
                    t.append(twig.filter.escape(this.env_, "interval_name"in i ? i.interval_name : "", "light_escape", null, !0)),
                    t.append('</div></div></div><div class="customers-select-wrapper__selected-status-color">'),
                    i.active_color = !("is_add"in i) || !i.is_add,
                    i._parent = i;
                    var a = "intervals"in i ? i.intervals : "";
                    twig.forEach(a, (function(e, n) {
                        i._key = n,
                        i.step = e,
                        i.color = "is_lost"in i && i.is_lost ? twig.attr("interval"in i ? i.interval : "", "color") : twig.attr("step"in i ? i.step : "", "color"),
                        t.append('<div class="customers-select-wrapper__color-block '),
                        "class_name"in i && i.class_name && t.append(twig.filter.escape(this.env_, "class_name"in i ? i.class_name : "", "light_escape", null, !0)),
                        t.append('" '),
                        "active_color"in i && i.active_color && (t.append('style="background:'),
                        t.append(twig.filter.escape(this.env_, "color"in i ? i.color : "", "light_escape", null, !0)),
                        t.append('"')),
                        t.append("></div>"),
                        "is_lost"in i && i.is_lost || twig.attr("interval"in i ? i.interval : "", "id") != twig.attr("step"in i ? i.step : "", "id") || (i.active_color = !1)
                    }
                    ), this),
                    t.append("</div></div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_controls_customers_select_with_progress"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/controls/customers/select_with_progress", t)
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
                    "only_latest"in t && t.only_latest) {
                        t._parent = t;
                        var n = "emoji_groups"in t ? t.emoji_groups : "";
                        twig.forEach(n, (function(i, n) {
                            t.key = n,
                            t.group = i,
                            e.append('<div class="control-emoji-buble-group" id="'),
                            e.append(twig.filter.escape(this.env_, "key"in t ? t.key : "", "light_escape", null, !0)),
                            e.append('"><span class="control-emoji-buble-group__name">'),
                            e.append(twig.filter.escape(this.env_, twig.attr("group"in t ? t.group : "", "name"), "light_escape", null, !0)),
                            e.append('</span><div class="control-emoji-buble-group__content">');
                            var a = twig.attr("group"in t ? t.group : "", "symbols");
                            twig.forEach(a, (function(i, n) {
                                t._key = n,
                                t.symbol = i,
                                e.append('<span data-reaction= "'),
                                e.append(twig.filter.escape(this.env_, "symbol"in t ? t.symbol : "", "light_escape", null, !0)),
                                e.append('" class="control-emoji-buble-group__symbol"><span>'),
                                e.append(twig.filter.escape(this.env_, "symbol"in t ? t.symbol : "", "light_escape", null, !0)),
                                e.append("</span></span>")
                            }
                            ), this),
                            e.append("</div></div>")
                        }
                        ), this)
                    } else
                        "only_supported"in t && t.only_supported ? (t._parent = t,
                        n = "emoji_groups"in t ? t.emoji_groups : "",
                        twig.forEach(n, (function(i, n) {
                            t.key = n,
                            t.group = i,
                            e.append('<div class="control-emoji-buble-group" id="'),
                            e.append(twig.filter.escape(this.env_, "key"in t ? t.key : "", "light_escape", null, !0)),
                            e.append('"><span class="control-emoji-buble-group__name">'),
                            e.append(twig.filter.escape(this.env_, twig.attr("group"in t ? t.group : "", "name"), "light_escape", null, !0)),
                            e.append('</span><div class="control-emoji-buble-group__content">');
                            var a = twig.attr("group"in t ? t.group : "", "symbols");
                            twig.forEach(a, (function(i, n) {
                                t._key = n,
                                t.symbol = i,
                                e.append('<span data-reaction= "'),
                                e.append(twig.filter.escape(this.env_, "symbol"in t ? t.symbol : "", "light_escape", null, !0)),
                                e.append('" class="control-emoji-buble-group__symbol"><span>'),
                                e.append(twig.filter.escape(this.env_, "symbol"in t ? t.symbol : "", "light_escape", null, !0)),
                                e.append("</span></span>")
                            }
                            ), this),
                            e.append("</div></div>")
                        }
                        ), this)) : (t.emoji_groups = {
                            emoji_emotions: {
                                name: this.env_.filter("i18n", "Emotions"),
                                symbols: ["😀", "😁", "😂", "🤣", "😃", "😄", "😅", "😆", "😉", "😊", "😋", "😎", "😍", "😘", "🥰", "😗", "😙", "😚", "🙂", "🤗", "🤔", "😐", "😑", "😶", "🙄", "😏", "😣", "😥", "😮", "🤐", "😯", "😪", "😫", "😴", "😌", "🤓", "😛", "😜", "😝", "🤤", "😒", "😓", "😔", "😕", "🙃", "🤑", "😲", "🙁", "😖", "😞", "😟", "😤", "😢", "😭", "😦", "😧", "😨", "😩", "😬", "😰", "😱", "😳", "😵", "🫡", "😡", "😠", "😇", "🤠", "🤡", "🤥", "😷", "🤒", "🤕", "🤢", "🤧", "😈", "👿", "👹", "👺", "💀", "👻", "👽", "👾", "🤖", "💩", "😺", "😸", "😹", "😻", "😼", "😽", "🙀", "😿", "😾", "🙈", "🙉", "🙊"]
                            },
                            emoji_gestures: {
                                name: this.env_.filter("i18n", "Gestures"),
                                symbols: ["💪", "💪🏻", "💪🏼", "💪🏽", "💪🏾", "💪🏿", "🤳", "🤳🏻", "🤳🏼", "🤳🏽", "🤳🏾", "🤳🏿", "👈", "👈🏻", "👈🏼", "👈🏽", "👈🏾", "👈🏿", "👉", "👉🏻", "👉🏼", "👉🏽", "👉🏾", "👉🏿", "☝", "☝🏻", "☝🏼", "☝🏽", "☝🏾", "☝🏿", "👆", "👆🏻", "👆🏼", "👆🏽", "👆🏾", "👆🏿", "🖕", "🖕🏻", "🖕🏼", "🖕🏽", "🖕🏾", "🖕🏿", "👇", "👇🏻", "👇🏼", "👇🏽", "👇🏾", "👇🏿", "✌", "✌🏻", "✌🏼", "✌🏽", "✌🏾", "✌🏿", "🤞", "🤞🏻", "🤞🏼", "🤞🏽", "🤞🏾", "🤞🏿", "🖖", "🖖🏻", "🖖🏼", "🖖🏽", "🖖🏾", "🖖🏿", "🤘", "🤘🏻", "🤘🏼", "🤘🏽", "🤘🏾", "🤘🏿", "🤙", "🤙🏻", "🤙🏼", "🤙🏽", "🤙🏾", "🤙🏿", "🖐", "🖐🏻", "🖐🏼", "🖐🏽", "🖐🏾", "🖐🏿", "✋", "✋🏻", "✋🏼", "✋🏽", "✋🏾", "✋🏿", "👌", "👌🏻", "👌🏼", "👌🏽", "👌🏾", "👌🏿", "👍", "👍🏻", "👍🏼", "👍🏽", "👍🏾", "👍🏿", "👎", "👎🏻", "👎🏼", "👎🏽", "👎🏾", "👎🏿", "✊", "✊🏻", "✊🏼", "✊🏽", "✊🏾", "✊🏿", "👊", "👊🏻", "👊🏼", "👊🏽", "👊🏾", "👊🏿", "🤛", "🤛🏻", "🤛🏼", "🤛🏽", "🤛🏾", "🤛🏿", "🤜", "🤜🏻", "🤜🏼", "🤜🏽", "🤜🏾", "🤜🏿", "🤚", "🤚🏻", "🤚🏼", "🤚🏽", "🤚🏾", "🤚🏿", "👋", "👋🏻", "👋🏼", "👋🏽", "👋🏾", "👋🏿", "👏", "👏🏻", "👏🏼", "👏🏽", "👏🏾", "👏🏿", "✍", "✍🏻", "✍🏼", "✍🏽", "✍🏾", "✍🏿", "👐", "👐🏻", "👐🏼", "👐🏽", "👐🏾", "👐🏿", "🙌", "🙌🏻", "🙌🏼", "🙌🏽", "🙌🏾", "🙌🏿", "🙏", "🙏🏻", "🙏🏼", "🙏🏽", "🙏🏾", "🙏🏿", "🤝", "🤝🏻", "🤝🏼", "🤝🏽", "🤝🏾", "🤝🏿", "💅", "💅🏻", "💅🏼", "💅🏽", "💅🏾", "💅🏿", "👂", "👂🏻", "👂🏼", "👂🏽", "👂🏾", "👂🏿", "👃", "👃🏻", "👃🏼", "👃🏽", "👃🏾", "👃🏿", "👣", "👀", "👁", "👁‍🗨", "👅"]
                            },
                            emoji_peoples: {
                                name: this.env_.filter("i18n", "People"),
                                symbols: ["👦", "👦🏻", "👦🏼", "👦🏽", "👦🏾", "👦🏿", "👧", "👧🏻", "👧🏼", "👧🏽", "👧🏾", "👧🏿", "👨", "👨🏻", "👨🏼", "👨🏽", "👨🏾", "👨🏿", "👩", "👩🏻", "👩🏼", "👩🏽", "👩🏾", "👩🏿", "👴", "👴🏻", "👴🏼", "👴🏽", "👴🏾", "👴🏿", "👵", "👵🏻", "👵🏼", "👵🏽", "👵🏾", "👵🏿", "👶", "👶🏻", "👶🏼", "👶🏽", "👶🏾", "👶🏿", "👼", "👼🏻", "👼🏼", "👼🏽", "👼🏾", "👼🏿", "👮", "👮🏻", "👮🏼", "👮🏽", "👮🏾", "👮🏿", "🕵", "🕵🏻", "🕵🏼", "🕵🏽", "🕵🏾", "🕵🏿", "💂", "💂🏻", "💂🏼", "💂🏽", "💂🏾", "💂🏿", "👷", "👷🏻", "👷🏼", "👷🏽", "👷🏾", "👷🏿", "👳", "👳🏻", "👳🏼", "👳🏽", "👳🏾", "👳🏿", "👱", "👱🏻", "👱🏼", "👱🏽", "👱🏾", "👱🏿", "🎅", "🎅🏻", "🎅🏼", "🎅🏽", "🎅🏾", "🎅🏿", "🤶", "🤶🏻", "🤶🏼", "🤶🏽", "🤶🏾", "🤶🏿", "👸", "👸🏻", "👸🏼", "👸🏽", "👸🏾", "👸🏿", "🤴", "🤴🏻", "🤴🏼", "🤴🏽", "🤴🏾", "🤴🏿", "👰", "👰🏻", "👰🏼", "👰🏽", "👰🏾", "👰🏿", "🤵", "🤵🏻", "🤵🏼", "🤵🏽", "🤵🏾", "🤵🏿", "🤰", "🤰🏻", "🤰🏼", "🤰🏽", "🤰🏾", "🤰🏿", "👲", "👲🏻", "👲🏼", "👲🏽", "👲🏾", "👲🏿", "🙍", "🙍🏻", "🙍🏼", "🙍🏽", "🙍🏾", "🙍🏿", "🙎", "🙎🏻", "🙎🏼", "🙎🏽", "🙎🏾", "🙎🏿", "🙅", "🙅🏻", "🙅🏼", "🙅🏽", "🙅🏾", "🙅🏿", "🙆", "🙆🏻", "🙆🏼", "🙆🏽", "🙆🏾", "🙆🏿", "💁", "💁🏻", "💁🏼", "💁🏽", "💁🏾", "💁🏿", "🙋", "🙋🏻", "🙋🏼", "🙋🏽", "🙋🏾", "🙋🏿", "🙇", "🙇🏻", "🙇🏼", "🙇🏽", "🙇🏾", "🙇🏿", "🤦", "🤦🏻", "🤦🏼", "🤦🏽", "🤦🏾", "🤦🏿", "🤷", "🤷🏻", "🤷🏼", "🤷🏽", "🤷🏾", "🤷🏿", "💆", "💆🏻", "💆🏼", "💆🏽", "💆🏾", "💆🏿", "💇", "💇🏻", "💇🏼", "💇🏽", "💇🏾", "💇🏿"]
                            },
                            emoji_animals: {
                                name: this.env_.filter("i18n", "Animals and plants"),
                                symbols: ["🐵", "🐒", "🦍", "🐶", "🐕", "🐩", "🐺", "🦊", "🐱", "🐈", "🦁", "🐯", "🐅", "🐆", "🐴", "🐎", "🦌", "🦄", "🐮", "🐂", "🐃", "🐄", "🐷", "🐖", "🐗", "🐽", "🐏", "🐑", "🐐", "🐪", "🐫", "🐘", "🦏", "🐭", "🐁", "🐀", "🐹", "🐰", "🐇", "🐿", "🦇", "🐻", "🐨", "🐼", "🐾", "🦃", "🐔", "🐓", "🐣", "🐤", "🐥", "🐦", "🐧", "🕊", "🦅", "🦆", "🦉", "🐸", "🐊", "🐢", "🦎", "🐍", "🐲", "🐉", "🐳", "🐋", "🐬", "🐟", "🐠", "🐡", "🦈", "🐙", "🐚", "🦀", "🦐", "🦑", "🦋", "🐌", "🐛", "🐜", "🐝", "🐞", "🕷", "🕸", "🦂", "💐", "🌸", "💮", "🏵", "🌹", "🥀", "🌺", "🌻", "🌼", "🌷", "🌱", "🌲", "🌳", "🌴", "🌵", "🌾", "🌿", "☘", "🍀", "🍁", "🍂"]
                            },
                            emoji_activities: {
                                name: this.env_.filter("i18n", "Sports and activities"),
                                symbols: ["🚶", "🚶🏻", "🚶🏼", "🚶🏽", "🚶🏾", "🚶🏿", "🏃", "🏃🏻", "🏃🏼", "🏃🏽", "🏃🏾", "🏃🏿", "💃", "💃🏻", "💃🏼", "💃🏽", "💃🏾", "💃🏿", "🕺", "🕺🏻", "🕺🏼", "🕺🏽", "🕺🏾", "🕺🏿", "👯", "🕴", "🗣", "👤", "👥", "🤺", "🏇", "⛷", "🏂", "🏌", "🏄", "🏄🏻", "🏄🏼", "🏄🏽", "🏄🏾", "🏄🏿", "🚣", "🚣🏻", "🚣🏼", "🚣🏽", "🚣🏾", "🚣🏿", "🏊", "🏊🏻", "🏊🏼", "🏊🏽", "🏊🏾", "🏊🏿", "⛹", "⛹🏻", "⛹🏼", "⛹🏽", "⛹🏾", "⛹🏿", "🏋", "🏋🏻", "🏋🏼", "🏋🏽", "🏋🏾", "🏋🏿", "🚴", "🚴🏻", "🚴🏼", "🚴🏽", "🚴🏾", "🚴🏿", "🚵", "🚵🏻", "🚵🏼", "🚵🏽", "🚵🏾", "🚵🏿", "🏎", "🏍", "🤸", "🤸🏻", "🤸🏼", "🤸🏽", "🤸🏾", "🤸🏿", "🤼", "🤼🏻", "🤼🏼", "🤼🏽", "🤼🏾", "🤼🏿", "🤽", "🤽🏻", "🤽🏼", "🤽🏽", "🤽🏾", "🤽🏿", "🤾", "🤾🏻", "🤾🏼", "🤾🏽", "🤾🏾", "🤾🏿", "🤹", "🤹🏻", "🤹🏼", "🤹🏽", "🤹🏾", "🤹🏿"]
                            },
                            emoji_simbols: {
                                name: this.env_.filter("i18n", "Symbols"),
                                symbols: ["👄", "💋", "💘", "❤", "❤️", "💓", "💔", "💕", "💖", "💗", "💙", "💚", "💛", "💜", "🖤", "💝", "💞", "💟", "❣", "💌", "💤", "💢", "💣", "💥", "💦", "💨", "💫", "💬", "🗨", "🗯", "💭"]
                            },
                            emoji_food: {
                                name: this.env_.filter("i18n", "Food and drink"),
                                symbols: ["🍃", "🍇", "🍈", "🍉", "🍊", "🍋", "🍌", "🍍", "🍎", "🍏", "🍐", "🍑", "🍒", "🍓", "🥝", "🍅", "🥑", "🍆", "🥔", "🥕", "🌽", "🌶", "🥒", "🍄", "🥜", "🌰", "🍞", "🥐", "🥖", "🥞", "🧀", "🍖", "🍗", "🥓", "🍔", "🍟", "🍕", "🌭", "🌮", "🌯", "🥙", "🥚", "🍳", "🥘", "🍲", "🥗", "🍿", "🍱", "🍘", "🍙", "🍚", "🍛", "🍜", "🍝", "🍠", "🍢", "🍣", "🍤", "🍥", "🍡", "🍦", "🍧", "🍨", "🍩", "🍪", "🎂", "🍰", "🍫", "🍬", "🍭", "🍮", "🍯", "🍼", "🥛", "☕", "🍵", "🍶", "🍾", "🍷", "🍸", "🍹", "🍺", "🍻", "🥂", "🥃", "🍽", "🍴", "🥄", "🔪", "🏺"]
                            },
                            emoji_garments: {
                                name: this.env_.filter("i18n", "Garments"),
                                symbols: ["👓", "🕶", "👔", "👕", "👖", "👗", "👘", "👙", "👚", "👛", "👜", "👝", "🛍", "🎒", "👞", "👟", "👠", "👡", "👢", "👑", "👒", "🎩", "🎓", "⛑", "📿", "💄", "💍", "💎"]
                            },
                            emoji_travels: {
                                name: this.env_.filter("i18n", "Travel and transport"),
                                symbols: ["🌍", "🌎", "🌏", "🌐", "🗺", "🗾", "🏔", "⛰", "🌋", "🗻", "🏕", "🏖", "🏜", "🏝", "🏞", "🏟", "🏛", "🏗", "🏘", "🏙", "🏚", "🏠", "🏡", "🏢", "🏣", "🏤", "🏥", "🏦", "🏨", "🏩", "🏪", "🏫", "🏬", "🏭", "🏯", "🏰", "💒", "🗼", "🗽", "⛪", "🕌", "🕍", "⛩", "🕋", "⛲", "⛺", "🌁", "🌃", "🌄", "🌅", "🌆", "🌇", "🌉", "🌌", "🎠", "🎡", "🎢", "💈", "🎪", "🎭", "🖼", "🎨", "🎰", "🚂", "🚃", "🚄", "🚅", "🚆", "🚇", "🚈", "🚉", "🚊", "🚝", "🚞", "🚋", "🚌", "🚍", "🚎", "🚐", "🚑", "🚒", "🚓", "🚔", "🚕", "🚖", "🚗", "🚘", "🚙", "🚚", "🚛", "🚜", "🚲", "🛴", "🛵", "🚏", "🛣", "🛤", "⛽", "🚨", "🚥", "🚦", "🚧", "🛑", "⛵", "🛶", "🚤", "🛳", "⛴", "🛥", "🚢", "🛩", "🛫", "🛬", "💺", "🚁", "🚟", "🚠", "🚡", "🚀", "🛰", "🛎", "🚪", "🛌", "🛏", "🛋", "🚽", "🚿", "🛀", "🛀🏻", "🛀🏼", "🛀🏽", "🛀🏾", "🛀🏿", "🛁", "⌛", "⏳", "⌚", "⏰", "⏱", "⏲", "🕰", "🕛", "🕧", "🕐", "🕜", "🕑", "🕝", "🕒", "🕞", "🕓", "🕟", "🕔", "🕠", "🕕", "🕡", "🕖", "🕢", "🕗", "🕣", "🕘", "🕤", "🕙", "🕥", "🕚", "🕦", "🌑", "🌒", "🌓", "🌔", "🌕", "🌖", "🌗", "🌘", "🌙", "🌚", "🌛", "🌜", "🌡", "🌝", "🌞", "⭐", "🌟", "🌠", "☁", "⛅", "⛈", "🌤", "🌥", "🌦", "🌧", "🌨", "🌩", "🌪", "🌫", "🌬", "🌀", "🌈", "🌂", "☂", "☔", "⛱", "⛄", "🔥", "💧", "🌊"]
                            },
                            emoji_items: {
                                name: this.env_.filter("i18n", "Items(emoji)"),
                                symbols: ["🎃", "🎄", "🎆", "🎇", "✨", "🎈", "🎉", "🎊", "🎋", "🎍", "🎎", "🎏", "🎐", "🎑", "🎀", "🎁", "🎗", "🎟", "🎫", "🎖", "🏆", "🏅", "🥇", "🥈", "🥉", "⚽", "⚾", "🏀", "🏐", "🏈", "🏉", "🎾", "🎱", "🎳", "🏏", "🏑", "🏒", "🏓", "🏸", "🥊", "🥋", "🥅", "🎯", "⛳", "⛸", "🎣", "🎽", "🎿", "🎮", "🕹", "🎲", "🃏", "🀄", "🎴", "🔇", "🔈", "🔉", "🔊", "📢", "📣", "📯", "🔔", "🔕", "🎼", "🎵", "🎶", "🎙", "🎚", "🎛", "🎤", "🎧", "📻", "🎷", "🎸", "🎹", "🎺", "🎻", "🥁", "📱", "📲", "📞", "📟", "📠", "🔋", "🔌", "💻", "🖥", "🖨", "⌨", "🖱", "🖲", "💽", "💾", "💿", "📀", "🎥", "🎞", "📽", "🎬", "📺", "📷", "📸", "📹", "📼", "🔍", "🔎", "🔬", "🔭", "📡", "🕯", "💡", "🔦", "🏮", "📔", "📕", "📖", "📗", "📘", "📙", "📚", "📓", "📒", "📃", "📜", "📄", "📰", "🗞", "📑", "🔖", "🏷", "💰", "💴", "💵", "💶", "💷", "💸", "💳", "💹", "📧", "📨", "📩", "📤", "📥", "📦", "📫", "📪", "📬", "📭", "📮", "🗳", "🖋", "🖊", "🖌", "🖍", "📝", "💼", "📁", "📂", "🗂", "📅", "📆", "🗒", "🗓", "📇", "📈", "📉", "📊", "📋", "📌", "📍", "📎", "🖇", "📏", "📐", "🗃", "🗄", "🗑", "🔒", "🔓", "🔏", "🔐", "🔑", "🗝", "🔨", "⛏", "🛠", "🗡", "🔫", "🏹", "🛡", "🔧", "🔩", "🗜", "🔗", "⛓", "💉", "💊", "🚬", "⚰", "⚱", "🗿", "🛢", "🔮", "🛒", "🏧"]
                            },
                            emoji_signs: {
                                name: this.env_.filter("i18n", "Signs"),
                                symbols: ["🚮", "🚰", "🚹", "🚺", "🚻", "🚼", "🚾", "🛂", "🛃", "🛄", "🛅", "🚸", "⛔", "🚫", "🚳", "🚭", "🚯", "🚱", "🚷", "📵", "🔞", "🔃", "🔄", "🛐", "🕉", "🕎", "🔯", "⛎", "🔀", "🔁", "🔂", "▶", "⏩", "⏭", "⏯", "◀", "⏪", "⏮", "🔼", "⏫", "🔽", "⏬", "⏸", "⏹", "⏺", "⏏", "🎦", "🔅", "🔆", "📶", "📳", "📴", "📛", "🔰", "🔱", "⭕", "✅", "❌", "❎", "❓", "❔", "❕", "❗", "#️⃣", "*️⃣", "0️⃣", "1️⃣", "2️⃣", "3️⃣", "4️⃣", "5️⃣", "6️⃣", "7️⃣", "8️⃣", "9️⃣", "🔟", "💯", "🔠", "🔡", "🔢", "🔣", "🔤", "🅰", "🆎", "🅱", "🆑", "🆒", "🆓", "ℹ", "🆔", "🆕", "🆖", "🆗", "🅿", "🆘", "🆙", "🆚", "🈁", "🈶", "🈯", "🉐", "🈹", "🈚", "🈲", "🉑", "🈸", "🈴", "🈳", "🈺", "🈵", "⬛", "⬜", "🔶", "🔷", "🔸", "🔹", "🔺", "🔻", "💠", "🔘", "🔲", "🔳", "⚪", "⚫", "🔴", "🔵", "🏁", "🚩", "🎌", "🏴"]
                            }
                        },
                        e.append('<div class="control-emoji-buble-wrapper control-emoji-buble-wrapper_up '),
                        "bubble_wrapper_class"in t && e.append(twig.filter.escape(this.env_, "bubble_wrapper_class"in t ? t.bubble_wrapper_class : "", "light_escape", null, !0)),
                        e.append('"><div class="control-emoji-buble-scroll-hide"><div class="control-emoji-buble">'),
                        t._parent = t,
                        n = "emoji_groups"in t ? t.emoji_groups : "",
                        twig.forEach(n, (function(i, n) {
                            t.key = n,
                            t.group = i,
                            e.append('<div class="control-emoji-buble-group" id="'),
                            e.append(twig.filter.escape(this.env_, "key"in t ? t.key : "", "light_escape", null, !0)),
                            e.append('"><span class="control-emoji-buble-group__name">'),
                            e.append(twig.filter.escape(this.env_, twig.attr("group"in t ? t.group : "", "name"), "light_escape", null, !0)),
                            e.append('</span><div class="control-emoji-buble-group__content">');
                            var a = twig.attr("group"in t ? t.group : "", "symbols");
                            twig.forEach(a, (function(i, n) {
                                t._key = n,
                                t.symbol = i,
                                e.append('<span data-reaction="'),
                                e.append(twig.filter.escape(this.env_, "symbol"in t ? t.symbol : "", "light_escape", null, !0)),
                                e.append('" class="control-emoji-buble-group__symbol"><span>'),
                                e.append(twig.filter.escape(this.env_, "symbol"in t ? t.symbol : "", "light_escape", null, !0)),
                                e.append("</span></span>")
                            }
                            ), this),
                            e.append("</div></div>")
                        }
                        ), this),
                        e.append("</div></div></div>"))
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_controls_emoji_bubble_init"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/controls/emoji/bubble_init", t)
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
                    e.append('<div class="control-emoji '),
                    "class_name"in t && e.append(twig.filter.escape(this.env_, "class_name"in t ? t.class_name : "", "light_escape", null, !0)),
                    e.append('"><input class="control-emoji__input js-control-emoji__input" type="checkbox"><div class="control-emoji__icon"><svg class="svg-icon svg-common--smile-dims"><use xlink:href="#common--smile"></use></svg></div></div>')
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_controls_emoji_index"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/controls/emoji/index", t)
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
                    e.append('<div class="emoji-reactions__content '),
                    "wrapper_class_name"in t && e.append(twig.filter.escape(this.env_, "wrapper_class_name"in t ? t.wrapper_class_name : "", "light_escape", null, !0)),
                    e.append('">'),
                    "is_scroll"in t && t.is_scroll && e.append('<span class="emoji-reactions__fog emoji-reactions__fog-left"></span><span class="emoji-reactions__fog emoji-reactions__fog-right"></span>'),
                    e.append("<span "),
                    "class_name"in t && (e.append('class="'),
                    e.append(twig.filter.escape(this.env_, "class_name"in t ? t.class_name : "", "light_escape", null, !0)),
                    e.append('"')),
                    e.append(">"),
                    t._parent = t;
                    var n = "reactions"in t ? t.reactions : "";
                    twig.forEach(n, (function(i, n) {
                        t._key = n,
                        t.reaction = i,
                        e.append('<span class="emoji-reactions__wrapper"><span data-reaction="'),
                        e.append(twig.filter.escape(this.env_, "reaction"in t ? t.reaction : "", "light_escape", null, !0)),
                        e.append('" class="emoji-reactions__symbol">'),
                        e.append(twig.filter.escape(this.env_, "reaction"in t ? t.reaction : "", "light_escape", null, !0)),
                        e.append("</span></span>")
                    }
                    ), this),
                    "is_increasing"in t && t.is_increasing && e.append('<span class="emoji-reactions__wrapper emoji-reactions__wrapper-arrow js-emoji-increase"><svg class="emoji-reactions__increasing-arrow"><use xlink:href="#common--arrow-left-rounded"></use></svg></span>'),
                    e.append("</div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_controls_emoji_reactions"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/controls/emoji/reactions", t)
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
                    e.append('<div class="control-emotions feed-amojo__actions-emotions"><input class="control-emotions__input feed-amojo__actions-emotions-input" type="checkbox">'),
                    twig.attr("_account_features"in t ? t._account_features : "", "gif_control") ? e.append('<div class="feed-amojo__actions-emotions-icon"><svg class="svg-icon svg-common--sticker-dims"><use xlink:href="#common--sticker"></use></svg></div>') : e.append('<div class="feed-amojo__actions-emoji-icon"><svg class="svg-icon svg-common--smile-dims"><use xlink:href="#common--smile"></use></svg></div>'),
                    e.append("</div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_controls_emotions_index"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/controls/emotions/index", t)
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
                    twig.attr("first_name"in i ? i.first_name : "", "value") || twig.attr("last_name"in i ? i.last_name : "", "value") ? new (e._get("interface/controls/fullname/separated.twig"))(this.env_).render_(t, i) : new (e._get("interface/controls/fullname/single.twig"))(this.env_).render_(t, i)
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_controls_fullname_index"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/controls/fullname/index", t)
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
                    "word_width"in t && t.word_width || (t.word_width = 8),
                    t.inputs = [{
                        name: twig.attr("first_name"in t ? t.first_name : "", "name"),
                        value: twig.attr("first_name"in t ? t.first_name : "", "value"),
                        placeholder: this.env_.filter("i18n", "First name"),
                        is_first_name: !0
                    }, {
                        name: twig.attr("last_name"in t ? t.last_name : "", "name"),
                        value: twig.attr("last_name"in t ? t.last_name : "", "value"),
                        placeholder: this.env_.filter("i18n", "Last name")
                    }],
                    this.env_.invoke("is_contact_name_display_order_first", "") || (t.inputs = twig.filter.reverse(this.env_, "inputs"in t ? t.inputs : "")),
                    e.append('<div class="control-fullname control-fullname_autosized  '),
                    e.append("is_spaceless"in t && t.is_spaceless ? "js-control-fullname-spaceless" : "js-control-fullname"),
                    e.append(" "),
                    e.append(twig.filter.escape(this.env_, "class_name"in t ? t.class_name : "", "light_escape", null, !0)),
                    e.append('" '),
                    "comfort_zone"in t && (e.append(' data-comfort-zone="'),
                    e.append(twig.filter.escape(this.env_, "comfort_zone"in t ? t.comfort_zone : "", "light_escape", null, !0)),
                    e.append('" ')),
                    e.append(' data-rerender-name="'),
                    e.append(twig.filter.escape(this.env_, "name"in t ? t.name : "", "light_escape", null, !0)),
                    e.append('" data-rerender-input-class="'),
                    e.append(twig.filter.escape(this.env_, "input_class_name"in t ? t.input_class_name : "", "light_escape", null, !0)),
                    e.append('" data-rerender-input-type="'),
                    e.append(twig.filter.escape(this.env_, "input_type"in t ? t.input_type : "", "light_escape", null, !0)),
                    e.append('" data-rerender-placeholder="'),
                    e.append(twig.filter.escape(this.env_, "placeholder"in t ? t.placeholder : "", "light_escape", null, !0)),
                    e.append('" data-rerender-placeholder-color="'),
                    e.append(twig.filter.escape(this.env_, "placeholder_color"in t ? t.placeholder_color : "", "light_escape", null, !0)),
                    e.append('" data-rerender-autosized="'),
                    e.append("autosized"in t && t.autosized ? "true" : "false"),
                    e.append('">'),
                    t._parent = t;
                    var n = "inputs"in t ? t.inputs : "";
                    twig.forEach(n, (function(i, n) {
                        t.i = n,
                        t.item = i,
                        e.append('<input type="text" class="text-input control-fullname__separated '),
                        twig.attr("item"in t ? t.item : "", "value") || e.append("control-fullname__separated_empty"),
                        e.append(" "),
                        twig.attr("item"in t ? t.item : "", "is_first_name") ? e.append("control-fullname__separated_firstname") : e.append("control-fullname__separated_lastname"),
                        e.append(" "),
                        twig.attr(twig.attr("inputs"in t ? t.inputs : "", Number("i"in t ? t.i : "") + Number(1), void 0, "array"), "value") || e.append("control-fullname__separated_nomargin"),
                        e.append(" "),
                        e.append(twig.filter.escape(this.env_, "input_class_name"in t ? t.input_class_name : "", "light_escape", null, !0)),
                        e.append('" value="'),
                        e.append(twig.filter.escape(this.env_, twig.attr("item"in t ? t.item : "", "value"), "light_escape", null, !0)),
                        e.append('" name="'),
                        e.append(twig.filter.escape(this.env_, twig.attr("item"in t ? t.item : "", "name"), "light_escape", null, !0)),
                        e.append('" placeholder="'),
                        e.append(twig.filter.escape(this.env_, twig.attr("item"in t ? t.item : "", "placeholder"), "light_escape", null, !0)),
                        e.append('" '),
                        twig.attr("item"in t ? t.item : "", "value") && (e.append(' style="width: '),
                        e.append(twig.filter.escape(this.env_, twig.filter.length(this.env_, twig.filter.join(this.env_.filter("split", this.env_, twig.attr("item"in t ? t.item : "", "value"), " "), "")) * ("word_width"in t ? t.word_width : ""), "light_escape", null, !0)),
                        e.append('px" ')),
                        e.append(">")
                    }
                    ), this),
                    e.append("</div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_controls_fullname_separated"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/controls/fullname/separated", t)
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
                    e.append('<div class="control-fullname control-fullname_'),
                    e.append(twig.filter.escape(this.env_, "input_type"in t ? twig.filter.def("input_type"in t ? t.input_type : "", "input") : "input", "light_escape", null, !0)),
                    e.append(" "),
                    "autosized"in t && t.autosized && e.append("control-fullname_autosized"),
                    e.append("  "),
                    e.append("is_spaceless"in t && t.is_spaceless ? "js-control-fullname-spaceless" : "js-control-fullname"),
                    e.append(" "),
                    e.append(twig.filter.escape(this.env_, "class_name"in t ? t.class_name : "", "light_escape", null, !0)),
                    e.append('" '),
                    "comfort_zone"in t && (e.append('data-comfort-zone="'),
                    e.append(twig.filter.escape(this.env_, "comfort_zone"in t ? t.comfort_zone : "", "light_escape", null, !0)),
                    e.append('"')),
                    e.append(' data-rerender-name="'),
                    e.append(twig.filter.escape(this.env_, "name"in t ? t.name : "", "light_escape", null, !0)),
                    e.append('" data-rerender-input-class="'),
                    e.append(twig.filter.escape(this.env_, "input_class_name"in t ? t.input_class_name : "", "light_escape", null, !0)),
                    e.append('" data-rerender-input-type="'),
                    e.append(twig.filter.escape(this.env_, "input_type"in t ? t.input_type : "", "light_escape", null, !0)),
                    e.append('" data-rerender-placeholder="'),
                    e.append(twig.filter.escape(this.env_, "placeholder"in t ? t.placeholder : "", "light_escape", null, !0)),
                    e.append('" data-rerender-placeholder-color="'),
                    e.append(twig.filter.escape(this.env_, "placeholder_color"in t ? t.placeholder_color : "", "light_escape", null, !0)),
                    e.append('" data-rerender-autosized="'),
                    e.append("autosized"in t && t.autosized ? "true" : "false"),
                    e.append('">'),
                    "textarea" == ("input_type"in t ? t.input_type : "") ? (e.append('<textarea class="text-input text-input-visible-placeholder control-fullname__single '),
                    e.append(twig.filter.escape(this.env_, "input_class_name"in t ? t.input_class_name : "", "light_escape", null, !0)),
                    e.append('" '),
                    "id"in t && t.id && (e.append('id="'),
                    e.append(twig.filter.escape(this.env_, "id"in t ? t.id : "", "light_escape", null, !0)),
                    e.append('"')),
                    e.append(' name="'),
                    e.append(twig.filter.escape(this.env_, "name"in t ? t.name : "", "light_escape", null, !0)),
                    e.append('" placeholder="'),
                    e.append(twig.filter.escape(this.env_, "placeholder"in t ? t.placeholder : "", "light_escape", null, !0)),
                    e.append('" '),
                    "disabled"in t && t.disabled && (e.append('disabled="'),
                    e.append(twig.filter.escape(this.env_, "disabled"in t ? t.disabled : "", "light_escape", null, !0)),
                    e.append('"')),
                    e.append(" "),
                    e.append("additional_data"in t ? t.additional_data : ""),
                    e.append(">"),
                    e.append(twig.filter.escape(this.env_, "value"in t ? t.value : "", "light_escape", null, !0)),
                    e.append("</textarea>")) : (e.append('<input type="'),
                    "input_type"in t && t.input_type ? e.append(twig.filter.escape(this.env_, "input_type"in t ? t.input_type : "", "light_escape", null, !0)) : e.append("text"),
                    e.append('" class="text-input text-input-visible-placeholder control-fullname__single '),
                    e.append(twig.filter.escape(this.env_, "input_class_name"in t ? t.input_class_name : "", "light_escape", null, !0)),
                    e.append('" value="'),
                    e.append(twig.filter.escape(this.env_, "value"in t ? t.value : "", "light_escape", null, !0)),
                    e.append('" '),
                    "id"in t && t.id && (e.append('id="'),
                    e.append(twig.filter.escape(this.env_, "id"in t ? t.id : "", "light_escape", null, !0)),
                    e.append('"')),
                    e.append(' name="'),
                    e.append(twig.filter.escape(this.env_, "name"in t ? t.name : "", "light_escape", null, !0)),
                    e.append('" placeholder="'),
                    e.append(twig.filter.escape(this.env_, "placeholder"in t ? t.placeholder : "", "light_escape", null, !0)),
                    e.append('" '),
                    "disabled"in t && t.disabled && (e.append('disabled="'),
                    e.append(twig.filter.escape(this.env_, "disabled"in t ? t.disabled : "", "light_escape", null, !0)),
                    e.append('"')),
                    e.append(" "),
                    e.append("additional_data"in t ? t.additional_data : ""),
                    e.append(">")),
                    e.append('<span class="control-fullname__placeholder" '),
                    "placeholder_color"in t && t.placeholder_color && (e.append('style="color: '),
                    e.append(twig.filter.escape(this.env_, "placeholder_color"in t ? t.placeholder_color : "", "light_escape", null, !0)),
                    e.append('"')),
                    e.append(">"),
                    e.append(twig.filter.escape(this.env_, "value"in t && t.value ? "value"in t ? t.value : "" : "placeholder"in t ? t.placeholder : "", "light_escape", null, !0)),
                    e.append("</span></div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_controls_fullname_single"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/controls/fullname/single", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e),
                    this.setBlocks({
                        input: twig.bind(this.block_input, this)
                    })
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(t) {
                    return e._get("interface/controls/suggest.twig")
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    t.input_class_name = ("input_class_name"in t ? t.input_class_name : "") + " control--suggest--input" + ("ajax"in t ? " js-control--suggest--input-ajax" : " js-control--suggest--input control--suggest--input-inline"),
                    t.additional_data = ("additional_data"in t ? t.additional_data : "") + ' data-value-id="' + ("value_id"in t ? t.value_id : "") + '" data-type="' + ("type"in t ? t.type : "") + '"',
                    "ajax"in t && (t.additional_data = ("additional_data"in t ? t.additional_data : "") + ' data-url="' + twig.attr("ajax"in t ? t.ajax : "", "url") + '" data-params="' + twig.attr("ajax"in t ? t.ajax : "", "params") + '"'),
                    this.getParent(t).render_(e, t, twig.extend({}, this.getBlocks(), i))
                }
                ,
                t.prototype.block_input = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    new (e._get("interface/controls/fullname/single.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        input_class_name: "input_class_name"in i ? i.input_class_name : "",
                        value: "value_title"in i ? twig.filter.def("value_title"in i ? i.value_title : "", "selected"in i ? i.selected : "") : "selected"in i ? i.selected : "",
                        additional_data: "additional_data"in i ? i.additional_data : ""
                    }))
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_controls_fullname_suggest"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/controls/fullname/suggest", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e),
                    this.setBlocks({
                        children: twig.bind(this.block_children, this)
                    })
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(e) {
                    return !1
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    t.default_name = twig.attr("item"in t ? t.item : "", "label") ? twig.attr("item"in t ? t.item : "", "label") : twig.attr("item"in t ? t.item : "", "name"),
                    t.name = "new" == twig.attr("item"in t ? t.item : "", "id") ? twig.attr("item"in t ? t.item : "", "title") : twig.filter.escape(this.env_, twig.attr("item"in t ? t.item : "", "title", void 0, void 0, !0) ? twig.filter.def(twig.attr("item"in t ? t.item : "", "title"), "default_name"in t ? t.default_name : "") : "default_name"in t ? t.default_name : ""),
                    t.title = "new" == twig.attr("item"in t ? t.item : "", "id") ? this.env_.filter("striptags", twig.attr("item"in t ? t.item : "", "title")) : "name"in t ? t.name : "",
                    t.tag_styles = "",
                    twig.attr("item"in t ? t.item : "", "color") && (t.tag_styles = "border-color: #" + twig.attr("item"in t ? t.item : "", "color") + "; background-color: " + this.env_.filter("hex2rgba", twig.attr("item"in t ? t.item : "", "color"), .3)),
                    "name"in t && t.name || (t.name = twig.attr("item"in t ? t.item : "", "label") ? twig.attr("item"in t ? t.item : "", "label") : twig.attr("item"in t ? t.item : "", "name")),
                    "class_name"in t && t.class_name || (t.class_name = "multisuggest__list-item"),
                    e.append('<li class="'),
                    e.append(twig.filter.escape(this.env_, "class_name"in t ? t.class_name : "", "light_escape", null, !0)),
                    e.append(" "),
                    twig.attr("item"in t ? t.item : "", "class_name") ? e.append(twig.filter.escape(this.env_, twig.attr("item"in t ? t.item : "", "class_name"), "light_escape", null, !0)) : e.append("js-multisuggest-item"),
                    e.append('" '),
                    twig.attr("item"in t ? t.item : "", "is_group") && e.append(' data-group="y" '),
                    e.append(" "),
                    twig.attr("item"in t ? t.item : "", "is_filter_by_id") && e.append(' data-filter="id" '),
                    e.append(' data-id="'),
                    e.append(twig.filter.escape(this.env_, twig.attr("item"in t ? t.item : "", "id"), "light_escape", null, !0)),
                    e.append('"  data-lol-id="'),
                    e.append(twig.filter.escape(this.env_, twig.attr("item"in t ? t.item : "", "id"), "light_escape", null, !0)),
                    e.append('"  '),
                    "tag_styles"in t && t.tag_styles && (e.append('style="'),
                    e.append(twig.filter.escape(this.env_, "tag_styles"in t ? t.tag_styles : "", "light_escape", null, !0)),
                    e.append('" data-color="'),
                    e.append(twig.filter.escape(this.env_, twig.attr("item"in t ? t.item : "", "color"), "light_escape", null, !0)),
                    e.append('"')),
                    e.append(" "),
                    twig.attr("item"in t ? t.item : "", "group_id") && (e.append('data-group-id="'),
                    e.append(twig.filter.escape(this.env_, twig.attr("item"in t ? t.item : "", "group_id"), "light_escape", null, !0)),
                    e.append('"')),
                    e.append(">"),
                    e.append(this.renderBlock("children", t, i)),
                    e.append("</li>")
                }
                ,
                t.prototype.block_children = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    e.append('<span class="tag" '),
                    "tag_styles"in t && t.tag_styles && (e.append('data-color="'),
                    e.append(twig.filter.escape(this.env_, twig.attr("item"in t ? t.item : "", "color"), "light_escape", null, !0)),
                    e.append('" style="'),
                    e.append(twig.filter.escape(this.env_, "tag_styles"in t ? t.tag_styles : "", "light_escape", null, !0)),
                    e.append('"')),
                    e.append(' title="'),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("striptags", "title"in t ? t.title : ""), "light_escape", null, !0)),
                    e.append('">'),
                    e.append("name"in t ? t.name : ""),
                    e.append("</span>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_controls_multisuggest_item"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/controls/multisuggest/item", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e),
                    this.setBlocks({
                        children: twig.bind(this.block_children, this)
                    })
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(t) {
                    return e._get("interface/controls/multisuggest/item.twig")
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    t.is_head_item = "head" == twig.attr("item"in t ? t.item : "", "type"),
                    "is_head_item"in t && t.is_head_item && (t.class_name = ("class_name"in t ? t.class_name : "") + " users-select__head-title users-select__head-title_linking_up"),
                    this.getParent(t).render_(e, t, twig.extend({}, this.getBlocks(), i))
                }
                ,
                t.prototype.block_children = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    "is_head_item"in t && t.is_head_item ? (e.append("<span>"),
                    e.append(twig.filter.escape(this.env_, "name"in t ? t.name : "", "light_escape", null, !0)),
                    e.append("</span>")) : e.append(this.renderParentBlock("children", t, i))
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_controls_multisuggest_item_with_head"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/controls/multisuggest/item_with_head", t)
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
                    t.name = (twig.attr("item"in t ? t.item : "", "id"),
                    twig.attr("item"in t ? t.item : "", "title")),
                    t.title = "new" == twig.attr("item"in t ? t.item : "", "id") ? this.env_.filter("striptags", twig.attr("item"in t ? t.item : "", "title")) : "name"in t ? t.name : "",
                    "name"in t && t.name || (t.name = twig.attr("item"in t ? t.item : "", "label") ? twig.attr("item"in t ? t.item : "", "label") : twig.attr("item"in t ? t.item : "", "name")),
                    "title"in t && t.title || (t.title = twig.attr("item"in t ? t.item : "", "label") ? twig.attr("item"in t ? t.item : "", "label") : twig.attr("item"in t ? t.item : "", "name")),
                    t.class_name = ("class_name"in t ? t.class_name : "") + " multisuggest__list-item",
                    t.tags_count = twig.filter.length(this.env_, "items"in t ? t.items : ""),
                    "title"in t && t.title && (t.is_colored = twig.attr("item"in t ? t.item : "", "color"),
                    "is_colored"in t && t.is_colored && (t.tag_background = "background-color: " + this.env_.filter("hex2rgba", twig.attr("item"in t ? t.item : "", "color"), .3),
                    t.tag_border = "border-color: #" + twig.attr("item"in t ? t.item : "", "color"),
                    t.class_name = ("class_name"in t ? t.class_name : "") + " multisuggest__list-item_colored"),
                    e.append('<li class="'),
                    e.append(twig.filter.escape(this.env_, "class_name"in t ? t.class_name : "", "light_escape", null, !0)),
                    e.append(" "),
                    twig.attr("item"in t ? t.item : "", "is_fake") ? e.append("js-multisuggest-fake") : e.append("js-multisuggest-item"),
                    e.append('" data-id="'),
                    e.append(twig.filter.escape(this.env_, twig.attr("item"in t ? t.item : "", "id"), "light_escape", null, !0)),
                    e.append('" '),
                    twig.attr("item"in t ? t.item : "", "is_deleted") && e.append('data-status="deleted"'),
                    e.append(' data-rest="'),
                    e.append(twig.filter.escape(this.env_, "rest"in t ? t.rest : "", "light_escape", null, !0)),
                    e.append('" '),
                    "is_colored"in t && t.is_colored && (e.append('data-color="'),
                    e.append(twig.filter.escape(this.env_, twig.attr("item"in t ? t.item : "", "color"), "light_escape", null, !0)),
                    e.append('" style="'),
                    e.append(twig.filter.escape(this.env_, "tag_border"in t ? t.tag_border : "", "light_escape", null, !0)),
                    e.append('"')),
                    e.append(">"),
                    twig.attr("item"in t ? t.item : "", "is_last") && e.append('<input type="text" class="js-focuser js-form-changes-skip" readonly="readonly" onkeydown="([13,8].indexOf(event.which)+1)&&this.parentNode.click()" onclick="return false">'),
                    twig.attr("item"in t ? t.item : "", "is_deleted") && e.append('<svg class="svg-icon svg-common--warning-dims digital-pipeline__error-icon"><use xlink:href="#common--warning"></use></svg>'),
                    "is_colored"in t && t.is_colored && (e.append('<span class="multisuggest__list-item_background" style="'),
                    e.append(twig.filter.escape(this.env_, "tag_background"in t ? t.tag_background : "", "light_escape", null, !0)),
                    e.append('"></span>')),
                    e.append('<span class="tag" title="'),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("striptags", "title"in t ? t.title : ""), "light_escape", null, !0)),
                    e.append('">'),
                    e.append(twig.filter.escape(this.env_, "name"in t ? t.name : "", "light_escape", null, !0)),
                    e.append("</span></li>"))
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_controls_multisuggest_item_with_more"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/controls/multisuggest/item_with_more", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e),
                    this.setBlocks({
                        before_items: twig.bind(this.block_before_items, this),
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
                    i.suggest_id = twig.functions.random(this.env_, 1e4),
                    "item_tmpl"in i && i.item_tmpl || (i.item_tmpl = "interface/controls/multisuggest/item.twig"),
                    t.append('<div class="multisuggest '),
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
                    t.append(' data-new-item-msg="'),
                    t.append(twig.filter.escape(this.env_, "new_item_msg"in i ? i.new_item_msg : "", "light_escape", null, !0)),
                    t.append('" '),
                    "inner_item_tmpl"in i && i.inner_item_tmpl && (t.append('data-inner-items-tmpl="'),
                    t.append(twig.filter.escape(this.env_, "inner_item_tmpl"in i ? i.inner_item_tmpl : "", "light_escape", null, !0)),
                    t.append('"')),
                    t.append('><ul class="multisuggest__list js-multisuggest-list" data-rest="'),
                    t.append(twig.filter.escape(this.env_, twig.filter.length(this.env_, "items"in i ? i.items : ""), "light_escape", null, !0)),
                    t.append('">'),
                    t.append(this.renderBlock("before_items", i, n)),
                    i._parent = i;
                    var a = "items"in i ? i.items : ""
                      , l = {
                        index0: 0,
                        index: 1,
                        first: !0
                    };
                    if (twig.countable(a)) {
                        var s = twig.count(a);
                        l.revindex0 = s - 1,
                        l.revindex = s,
                        l.length = s,
                        l.last = 1 === s
                    }
                    twig.forEach(a, (function(n, a) {
                        i._key = a,
                        i.item = n,
                        new (e._get("item_tmpl"in i ? i.item_tmpl : ""))(this.env_).render_(t, twig.extend({}, i, {
                            class_name: "",
                            rest: twig.filter.length(this.env_, "items"in i ? i.items : "") - twig.attr(l, "index")
                        })),
                        ++l.index0,
                        ++l.index,
                        l.first = !1,
                        l.length && (--l.revindex0,
                        --l.revindex,
                        l.last = 0 === l.revindex0)
                    }
                    ), this),
                    "without_input"in i && i.without_input || (t.append('<li class="multisuggest__list-item multisuggest__list-item_input"><span class="js-multisuggest-hint multisuggest__hint"></span><input '),
                    "label_name"in i && i.label_name && (t.append('id="'),
                    t.append(twig.filter.escape(this.env_, "label_name"in i ? i.label_name : "", "light_escape", null, !0)),
                    t.append('"')),
                    t.append(' type="text" class="multisuggest__input js-multisuggest-input" tabindex="-1" data-can-add="'),
                    t.append("cant_add"in i && i.cant_add ? "N" : "Y"),
                    t.append('" value="" placeholder="'),
                    t.append(twig.filter.escape(this.env_, "placeholder"in i ? i.placeholder : "", "light_escape", null, !0)),
                    t.append('">'),
                    "label_name"in i && i.label_name && (t.append('<label class="multisuggest__add-domain-label" for="'),
                    t.append(twig.filter.escape(this.env_, "label_name"in i ? i.label_name : "", "light_escape", null, !0)),
                    t.append('"></label>')),
                    t.append(this.renderBlock("loader", i, n)),
                    t.append("</li>")),
                    t.append("</ul>"),
                    t.append(this.renderBlock("suggest", i, n)),
                    t.append("</div>")
                }
                ,
                t.prototype.block_before_items = function(e, t, i) {
                    i = void 0 === i ? {} : i
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
                    return "interface_controls_multisuggest_wrapper"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/controls/multisuggest/wrapper", t)
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
                    "has_pipelines"in i && i.has_pipelines ? new (e._get("interface/controls/pipeline_select/select.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        class_name: ("class_name"in i ? i.class_name : "") + " " + ("pipeline_select_class_name"in i ? i.pipeline_select_class_name : ""),
                        inner_class_name: ("inner_class_name"in i ? i.inner_class_name : "") + " " + ("pipeline_select_inner_class_name"in i ? i.pipeline_select_inner_class_name : "")
                    })) : new (e._get("interface/controls/select.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        control_class_name: "",
                        class_name: ("class_name"in i ? i.class_name : "") + " " + ("select_class_name"in i ? i.select_class_name : "")
                    }))
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_controls_pipeline_select_index"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/controls/pipeline_select/index", t)
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
                    t.append('<div class="pipeline-select-wrapper pipeline-only-select-wrapper pipeline-select-wrapper_plain folded '),
                    "multiple"in i && i.multiple && t.append("multiple"),
                    t.append(" "),
                    t.append(twig.filter.escape(this.env_, "class_name"in i ? i.class_name : "", "light_escape", null, !0)),
                    t.append(" "),
                    "control_class_name"in i ? t.append(twig.filter.escape(this.env_, "control_class_name"in i ? i.control_class_name : "", "light_escape", null, !0)) : t.append("js-control-pipelines-only-select"),
                    t.append('"  id="'),
                    t.append(twig.filter.escape(this.env_, "id"in i ? i.id : "", "light_escape", null, !0)),
                    t.append('">'),
                    i.class_name = "",
                    t.append('<div class="pipeline-select-wrapper__inner pipeline-select-wrapper__inner_plain '),
                    t.append(twig.filter.escape(this.env_, "inner_class_name"in i ? i.inner_class_name : "", "light_escape", null, !0)),
                    t.append(" "),
                    "multiple"in i && i.multiple && t.append("pipeline-select-wrapper__inner-multiple"),
                    t.append(' custom-scroll"><div class="pipeline-select-wrapper__inner__holder"><div class="pipeline-select-wrapper__inner__container">'),
                    "multiple"in i && i.multiple || (t.append('<input class="pipeline-select__pipeline-selected" type="hidden" name="'),
                    t.append(twig.filter.escape(this.env_, twig.attr("selected_pipe"in i ? i.selected_pipe : "", "name"), "light_escape", null, !0)),
                    t.append('" value="'),
                    t.append(twig.filter.escape(this.env_, "selected_pipeline_id"in i ? i.selected_pipeline_id : "", "light_escape", null, !0)),
                    t.append('">')),
                    i._parent = i;
                    var a = "items"in i ? i.items : ""
                      , l = {
                        index0: 0,
                        index: 1,
                        first: !0
                    };
                    if (twig.countable(a)) {
                        var s = twig.count(a);
                        l.revindex0 = s - 1,
                        l.revindex = s,
                        l.length = s,
                        l.last = 1 === s
                    }
                    twig.forEach(a, (function(n, a) {
                        i._key = a,
                        i.pipeline = n,
                        i.pipe_id = "pipeline_" + twig.attr("pipeline"in i ? i.pipeline : "", "id") + "_" + ("id"in i ? i.id : ""),
                        i.checked_pipeline = !1;
                        var s = "sel"in i ? i.sel : "";
                        twig.forEach(s, (function(e, t) {
                            i._key = t,
                            i.s = e,
                            ("s"in i ? i.s : "") == twig.attr("pipeline"in i ? i.pipeline : "", "id") && (i.checked_pipeline = !0)
                        }
                        ), this),
                        t.append('<input class="pipeline-select__pipeline-input js-form-changes-skip js-filter-clear-skip" type="radio" name="'),
                        t.append(twig.filter.escape(this.env_, twig.attr("selected_pipe"in i ? i.selected_pipe : "", "name"), "light_escape", null, !0)),
                        t.append('" id="'),
                        t.append(twig.filter.escape(this.env_, "pipe_id"in i ? i.pipe_id : "", "light_escape", null, !0)),
                        t.append('" value="'),
                        t.append(twig.filter.escape(this.env_, twig.attr("pipeline"in i ? i.pipeline : "", "id"), "light_escape", null, !0)),
                        t.append('" '),
                        "multiple"in i && i.multiple || ("selected_pipeline_id"in i ? i.selected_pipeline_id : "") != twig.attr("pipeline"in i ? i.pipeline : "", "id") ? "multiple"in i && i.multiple && twig.attr(l, "first") && t.append(' checked="checked" ') : t.append(' checked="checked" '),
                        t.append(" "),
                        twig.attr("pipeline"in i ? i.pipeline : "", "unsorted") && t.append(' data-type="unsorted"'),
                        t.append('><div class="pipeline-select"><label class="pipeline-select__caption" title="'),
                        t.append(twig.filter.escape(this.env_, twig.attr("pipeline"in i ? i.pipeline : "", "name"), "light_escape", null, !0)),
                        t.append('" for="'),
                        t.append(twig.filter.escape(this.env_, ("pipe_id"in i ? i.pipe_id : "") + "_checkbox", "light_escape", null, !0)),
                        t.append('">'),
                        "multiple"in i && i.multiple && new (e._get("interface/controls/checkbox.twig"))(this.env_).render_(t, {
                            id: ("pipe_id"in i ? i.pipe_id : "") + "_checkbox",
                            name: "",
                            checked: "checked_pipeline"in i ? i.checked_pipeline : "",
                            value: twig.attr("pipeline"in i ? i.pipeline : "", "id"),
                            input_class_name: "select_only_checkbox"
                        }),
                        t.append('<span class="pipeline-select__caption__inner"><span class="pipeline-select__caption-text" '),
                        "multiple"in i && i.multiple && (t.append('data-statuses-numeral="'),
                        t.append(twig.filter.escape(this.env_, "statuses_numeral"in i ? i.statuses_numeral : "", "light_escape", null, !0)),
                        t.append('" data-pipelines-numeral="'),
                        t.append(twig.filter.escape(this.env_, "pipelines_numeral"in i ? i.pipelines_numeral : "", "light_escape", null, !0)),
                        t.append('"')),
                        t.append(' data-folded-title="'),
                        t.append(twig.filter.escape(this.env_, twig.attr("pipeline"in i ? i.pipeline : "", "name"), "light_escape", null, !0)),
                        t.append('" title="'),
                        t.append(twig.filter.escape(this.env_, twig.attr("pipeline"in i ? i.pipeline : "", "name"), "light_escape", null, !0)),
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
                    return "interface_controls_pipeline_select_only_pipelines"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/controls/pipeline_select/only_pipelines", t)
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
                    e.append('<div class="notice notice-status-description" id="status-description-notice"><div class="notice__hover-wrapper notice-status-description__hover-wrapper"><div class="notice-status-description__content"><span class="notice__text notice-status-description__text"></span><button class="notice-status-description__btn notice-status-description__btn--unwrap">'),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Status description notice text unwrap"), "light_escape", null, !0)),
                    e.append('</button><button class="notice-status-description__btn notice-status-description__btn--wrap">'),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Status description notice text wrap"), "light_escape", null, !0)),
                    e.append("</button></div></div></div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_controls_pipeline_select_pipeline_status_description_notice"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/controls/pipeline_select/pipeline_status_description_notice", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e),
                    this.setBlocks({
                        top_list: twig.bind(this.block_top_list, this)
                    })
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(e) {
                    return !1
                }
                ,
                t.prototype.render_ = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    "status_tmpl"in i && i.status_tmpl || (i.status_tmpl = "interface/controls/pipeline_select/status_item.twig"),
                    "control_class_name"in i && i.control_class_name || ("multiple"in i && i.multiple ? i.control_class_name = "js-control-pipeline-select_multiple-default" : i.control_class_name = "js-control-pipeline-select"),
                    "statuses_numeral"in i && i.statuses_numeral || (i.statuses_numeral = this.env_.filter("i18n", "stage,stages")),
                    "pipelines_numeral"in i && i.pipelines_numeral || (i.pipelines_numeral = this.env_.filter("i18n", "pipeline,pipelines")),
                    "selected_pipeline_id"in i && i.selected_pipeline_id || (i.selected_pipeline_id = twig.attr("selected_pipe"in i ? i.selected_pipe : "", "id")),
                    "selected_pipeline_id"in i && i.selected_pipeline_id || !twig.attr("params"in i ? i.params : "", "form_params") || (i.selected_pipeline_id = twig.attr(twig.attr(twig.attr("params"in i ? i.params : "", "form_params"), "settings"), "lead_pipe"),
                    i.selected = twig.attr(twig.attr(twig.attr("params"in i ? i.params : "", "form_params"), "settings"), "lead_status")),
                    i.active_pipelines = [],
                    i._parent = i;
                    var a = "items"in i ? i.items : "";
                    twig.forEach(a, (function(e, t) {
                        i._key = t,
                        i.pipeline = e,
                        1 == !twig.attr("pipeline"in i ? i.pipeline : "", "is_archive") ? i.active_pipelines = twig.filter.merge("active_pipelines"in i ? i.active_pipelines : "", ["pipeline"in i ? i.pipeline : ""]) : twig.attr("pipeline"in i ? i.pipeline : "", "id") == twig.attr("selected_pipe"in i ? i.selected_pipe : "", "id") && (i.selected_pipeline_id = twig.attr(twig.filter.first(this.env_, "active_pipelines"in i ? i.active_pipelines : ""), "id"))
                    }
                    ), this),
                    "selected_pipeline_id"in i && i.selected_pipeline_id || (i.selected_pipeline_id = twig.attr(twig.filter.first(this.env_, "active_pipelines"in i ? i.active_pipelines : ""), "id")),
                    t.append('<div class="pipeline-select-wrapper pipeline-select-wrapper_plain folded '),
                    "multiple"in i && i.multiple && t.append("multiple"),
                    t.append(" "),
                    t.append(twig.filter.escape(this.env_, "control_class_name"in i ? i.control_class_name : "", "light_escape", null, !0)),
                    t.append(" "),
                    t.append(twig.filter.escape(this.env_, "class_name"in i ? i.class_name : "", "light_escape", null, !0)),
                    t.append('" '),
                    "id"in i && i.id && (t.append('id="'),
                    t.append(twig.filter.escape(this.env_, "id"in i ? i.id : "", "light_escape", null, !0)),
                    t.append('"')),
                    t.append(">"),
                    i.class_name = "",
                    t.append('<div class="pipeline-select-wrapper__inner pipeline-select-wrapper__inner_plain '),
                    t.append(twig.filter.escape(this.env_, "inner_class_name"in i ? i.inner_class_name : "", "light_escape", null, !0)),
                    t.append(" "),
                    "multiple"in i && i.multiple && t.append("pipeline-select-wrapper__inner-multiple"),
                    t.append(' custom-scroll"><div class="pipeline-select-wrapper__inner__holder"><div class="pipeline-select-wrapper__inner__container">'),
                    t.append(this.renderBlock("top_list", i, n)),
                    "multiple"in i && i.multiple || (t.append('<input class="pipeline-select__pipeline-selected" type="hidden"  name="'),
                    t.append(twig.filter.escape(this.env_, twig.attr("selected_pipe"in i ? i.selected_pipe : "", "name"), "light_escape", null, !0)),
                    t.append('" value="'),
                    t.append(twig.filter.escape(this.env_, "selected_pipeline_id"in i ? i.selected_pipeline_id : "", "light_escape", null, !0)),
                    t.append('">')),
                    i._parent = i,
                    a = "active_pipelines"in i ? i.active_pipelines : "";
                    var l = {
                        index0: 0,
                        index: 1,
                        first: !0
                    };
                    if (twig.countable(a)) {
                        var s = twig.count(a);
                        l.revindex0 = s - 1,
                        l.revindex = s,
                        l.length = s,
                        l.last = 1 === s
                    }
                    twig.forEach(a, (function(n, a) {
                        if (i._key = a,
                        i.pipeline = n,
                        i.pipe_id = "pipeline_" + twig.attr("pipeline"in i ? i.pipeline : "", "id") + "_" + twig.functions.random(this.env_),
                        i.data_custom = twig.attr("pipeline"in i ? i.pipeline : "", "is_custom") ? "y" : "n",
                        i.no_selected = !1,
                        i.checked_pipeline = !1,
                        twig.filter.length(this.env_, twig.attr("sel"in i ? i.sel : "", twig.attr("pipeline"in i ? i.pipeline : "", "id"), void 0, "array")) > 0 && (i.checked_m = twig.filter.length(this.env_, twig.attr("sel"in i ? i.sel : "", twig.attr("pipeline"in i ? i.pipeline : "", "id"), void 0, "array")) != twig.filter.length(this.env_, twig.attr("pipeline"in i ? i.pipeline : "", "statuses")),
                        i.checked_pipeline = !0),
                        t.append('<input class="pipeline-select__pipeline-input js-form-changes-skip js-filter-clear-skip" type="radio" name="'),
                        t.append(twig.filter.escape(this.env_, twig.attr("selected_pipe"in i ? i.selected_pipe : "", "name", void 0, void 0, !0) ? twig.filter.def(twig.attr("selected_pipe"in i ? i.selected_pipe : "", "name"), "") : "", "light_escape", null, !0)),
                        t.append('" '),
                        "pipe_id"in i && i.pipe_id && (t.append('id="'),
                        t.append(twig.filter.escape(this.env_, "pipe_id"in i ? i.pipe_id : "", "light_escape", null, !0)),
                        t.append('"')),
                        t.append(' value="'),
                        t.append(twig.filter.escape(this.env_, twig.attr("pipeline"in i ? i.pipeline : "", "id"), "light_escape", null, !0)),
                        t.append('" '),
                        "multiple"in i && i.multiple || ("selected_pipeline_id"in i ? i.selected_pipeline_id : "") != twig.attr("pipeline"in i ? i.pipeline : "", "id") ? "multiple"in i && i.multiple && twig.attr(l, "first") && t.append('checked="checked"') : t.append('checked="checked"'),
                        t.append(" "),
                        twig.attr("pipeline"in i ? i.pipeline : "", "unsorted") && t.append('data-type="unsorted"'),
                        t.append(' data-is-custom="'),
                        t.append(twig.filter.escape(this.env_, "data_custom"in i ? i.data_custom : "", "light_escape", null, !0)),
                        t.append('"><div class="pipeline-select pipeline-select__button-create-new-field"><label class="pipeline-select__caption" title="'),
                        t.append(twig.filter.escape(this.env_, twig.attr("pipeline"in i ? i.pipeline : "", "name"), "light_escape", null, !0)),
                        t.append('" for="'),
                        t.append(twig.filter.escape(this.env_, "pipe_id"in i ? i.pipe_id : "", "light_escape", null, !0)),
                        t.append('">'),
                        "multiple"in i && i.multiple && new (e._get("interface/controls/checkbox.twig"))(this.env_).render_(t, {
                            id: ("pipe_id"in i ? i.pipe_id : "") + "_checkbox",
                            name: "",
                            checked: "checked_pipeline"in i ? i.checked_pipeline : "",
                            input_class_name: "pipeline_checkbox_input_class_name"in i ? i.pipeline_checkbox_input_class_name : "",
                            checked_minus: "checked_m"in i ? i.checked_m : "",
                            small: "small"in i ? i.small : "",
                            value: twig.attr("pipeline"in i ? i.pipeline : "", "id")
                        }),
                        t.append('<span class="pipeline-select__caption__inner"><span class="pipeline-select__caption-text" '),
                        "multiple"in i && i.multiple && (t.append('data-statuses-numeral="'),
                        t.append(twig.filter.escape(this.env_, "statuses_numeral"in i ? i.statuses_numeral : "", "light_escape", null, !0)),
                        t.append('" data-pipelines-numeral="'),
                        t.append(twig.filter.escape(this.env_, "pipelines_numeral"in i ? i.pipelines_numeral : "", "light_escape", null, !0)),
                        t.append('"')),
                        t.append(' data-folded-title="'),
                        t.append(twig.filter.escape(this.env_, twig.attr("pipeline"in i ? i.pipeline : "", "name"), "light_escape", null, !0)),
                        t.append('" title="'),
                        t.append(twig.filter.escape(this.env_, twig.attr("pipeline"in i ? i.pipeline : "", "name"), "light_escape", null, !0)),
                        t.append('"></span></span></label>'),
                        twig.attr("pipeline"in i ? i.pipeline : "", "unsorted", void 0, void 0, !0) || 1 == twig.attr("pipeline"in i ? i.pipeline : "", "is_custom"))
                            i.item_id = "pipeline_" + twig.attr("pipeline"in i ? i.pipeline : "", "id") + "_" + twig.functions.random(this.env_),
                            i.is_selected_item = ("selected_pipeline_id"in i ? i.selected_pipeline_id : "") == twig.attr("pipeline"in i ? i.pipeline : "", "id"),
                            t.append('<input class="pipeline-select__dropdown__item__input" type="radio" name="'),
                            t.append(twig.filter.escape(this.env_, "name"in i ? i.name : "", "light_escape", null, !0)),
                            t.append('" '),
                            "item_id"in i && i.item_id && (t.append('id="'),
                            t.append(twig.filter.escape(this.env_, "item_id"in i ? i.item_id : "", "light_escape", null, !0)),
                            t.append('"')),
                            t.append(' value="'),
                            t.append(twig.filter.escape(this.env_, twig.attr("pipeline"in i ? i.pipeline : "", "id"), "light_escape", null, !0)),
                            t.append('" '),
                            "is_selected_item"in i && i.is_selected_item && t.append('checked="checked"'),
                            t.append(">");
                        else {
                            t.append('<ul class="pipeline-select__dropdown">'),
                            "selected"in i && i.selected || twig.attr("pipeline"in i ? i.pipeline : "", "id") != ("selected_pipeline_id"in i ? i.selected_pipeline_id : "") || (i.selected = twig.attr(twig.filter.first(this.env_, twig.attr("pipeline"in i ? i.pipeline : "", "statuses")), "id"),
                            i.no_selected = !0);
                            var s = twig.attr("pipeline"in i ? i.pipeline : "", "statuses")
                              , p = {
                                parent: l,
                                index0: 0,
                                index: 1,
                                first: !0
                            };
                            if (twig.countable(s)) {
                                var r = twig.count(s);
                                p.revindex0 = r - 1,
                                p.revindex = r,
                                p.length = r,
                                p.last = 1 === r
                            }
                            twig.forEach(s, (function(n, a) {
                                i._key = a,
                                i.status = n,
                                "show_unsorted"in i && i.show_unsorted || 1 != twig.attr("status"in i ? i.status : "", "type") || 1 != ("no_selected"in i ? i.no_selected : "") || (i.pipeline_statuses_key = twig.attr(twig.filter.keys(twig.attr("pipeline"in i ? i.pipeline : "", "statuses")), 1, void 0, "array"),
                                i.selected = twig.attr(twig.attr(twig.attr("pipeline"in i ? i.pipeline : "", "statuses"), "pipeline_statuses_key"in i ? i.pipeline_statuses_key : "", void 0, "array"), "id")),
                                ("show_unsorted"in i && i.show_unsorted || 1 != twig.attr("status"in i ? i.status : "", "type")) && new (e._get("status_tmpl"in i ? i.status_tmpl : ""))(this.env_).render_(t, twig.extend({}, i, {
                                    status: "status"in i ? i.status : "",
                                    pipeline: "pipeline"in i ? i.pipeline : ""
                                })),
                                ++p.index0,
                                ++p.index,
                                p.first = !1,
                                p.length && (--p.revindex0,
                                --p.revindex,
                                p.last = 0 === p.revindex0)
                            }
                            ), this),
                            t.append("</ul>")
                        }
                        t.append("</div>"),
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
                t.prototype.block_top_list = function(e, t, i) {
                    i = void 0 === i ? {} : i
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_controls_pipeline_select_select"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/controls/pipeline_select/select", t)
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
                    i.item_id = "pipeline_" + twig.attr("pipeline"in i ? i.pipeline : "", "id") + "_" + twig.attr("status"in i ? i.status : "", "id") + "_" + twig.functions.random(this.env_),
                    i.is_selected_item = ("selected_pipeline_id"in i ? i.selected_pipeline_id : "") == twig.attr("pipeline"in i ? i.pipeline : "", "id") && ("selected"in i ? i.selected : "") == "" + twig.attr("status"in i ? i.status : "", "id"),
                    t.append('<li class="pipeline-select__dropdown__item'),
                    !("is_selected_item"in i) || !i.is_selected_item || "multiple"in i && i.multiple || t.append(" pipeline-select__dropdown__item_selected"),
                    t.append('" style="background-color: '),
                    t.append(twig.filter.escape(this.env_, twig.attr("status"in i ? i.status : "", "color"), "light_escape", null, !0)),
                    t.append(';" for="'),
                    t.append(twig.filter.escape(this.env_, "item_id"in i ? i.item_id : "", "light_escape", null, !0)),
                    t.append('">'),
                    "multiple"in i && i.multiple) {
                        if (i.checked = !1,
                        twig.filter.length(this.env_, twig.attr("sel"in i ? i.sel : "", twig.attr("pipeline"in i ? i.pipeline : "", "id"), void 0, "array")) > 0) {
                            i._parent = i;
                            var a = twig.attr("sel"in i ? i.sel : "", twig.attr("pipeline"in i ? i.pipeline : "", "id"), void 0, "array");
                            twig.forEach(a, (function(e, t) {
                                i._key = t,
                                i.st = e,
                                ("st"in i ? i.st : "") == twig.attr("status"in i ? i.status : "", "id") && (i.checked = !0)
                            }
                            ), this)
                        }
                        new (e._get("interface/controls/checkbox.twig"))(this.env_).render_(t, twig.extend({}, i, {
                            name: ("name"in i ? i.name : "") + "[" + twig.attr("pipeline"in i ? i.pipeline : "", "id") + "][]",
                            additional_data: 'data-pipeline-id="' + twig.attr("pipeline"in i ? i.pipeline : "", "id") + '"',
                            id: "item_id"in i ? i.item_id : "",
                            value: twig.attr("status"in i ? i.status : "", "id"),
                            class_name: "pipeline-select__dropdown__item__label",
                            text: twig.attr("status"in i ? i.status : "", "name"),
                            checked: "checked"in i ? i.checked : "",
                            small: "small"in i ? i.small : "",
                            disabled: !1
                        }))
                    } else
                        t.append('<input class="pipeline-select__dropdown__item__input" type="radio" name="'),
                        t.append(twig.filter.escape(this.env_, "name"in i ? i.name : "", "light_escape", null, !0)),
                        t.append('" '),
                        "item_id"in i && i.item_id && (t.append('id="'),
                        t.append(twig.filter.escape(this.env_, "item_id"in i ? i.item_id : "", "light_escape", null, !0)),
                        t.append('"')),
                        t.append(' value="'),
                        t.append(twig.filter.escape(this.env_, twig.attr("status"in i ? i.status : "", "id"), "light_escape", null, !0)),
                        t.append('" '),
                        "is_selected_item"in i && i.is_selected_item && "unsorted" != ("entity_type"in i ? i.entity_type : "") && t.append('checked="checked"'),
                        t.append('><label class="pipeline-select__dropdown__item__label" for="'),
                        t.append(twig.filter.escape(this.env_, "item_id"in i ? i.item_id : "", "light_escape", null, !0)),
                        t.append('"><span class="pipeline-select__item-text-wrapper"><span class="pipeline-select__item-text">'),
                        t.append(twig.filter.escape(this.env_, twig.attr("status"in i ? i.status : "", "name"), "light_escape", null, !0)),
                        t.append("</span></span></label>");
                    t.append("</li>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_controls_pipeline_select_status_item"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/controls/pipeline_select/status_item", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e),
                    this.setBlocks({
                        top_list: twig.bind(this.block_top_list, this)
                    })
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(t) {
                    return e._get("interface/controls/pipeline_select/select.twig")
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    t.control_class_name = "js-control-pipeline-select-without-leads",
                    this.getParent(t).render_(e, t, twig.extend({}, this.getBlocks(), i))
                }
                ,
                t.prototype.block_top_list = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    t.append('<div class="pipeline-select pipeline-select__button-create-new-field"><div class="pipeline-select__without-leads-filter">'),
                    i._parent = i;
                    var a = "wo_leads_statuses"in i ? i.wo_leads_statuses : "";
                    twig.forEach(a, (function(n, a) {
                        i.status_id = a,
                        i.status = n,
                        new (e._get("interface/controls/checkbox.twig"))(this.env_).render_(t, {
                            id: ("status_id"in i ? i.status_id : "") + "_checkbox",
                            class_name: "pipeline-select__without-leads-filter-item js-without-leads-filter-checkbox",
                            name: "filter[pipe][" + twig.attr("status"in i ? i.status : "", "id") + "]",
                            text: twig.attr("status"in i ? i.status : "", "option"),
                            small: !0,
                            checked: !1,
                            value: "y"
                        })
                    }
                    ), this),
                    t.append("</div></div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_controls_pipeline_select_without_leads_filter"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/controls/pipeline_select/without_leads_filter", t)
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
                    e.append('<ul class="custom-scroll control--select--list '),
                    e.append("dropdown_auto_width"in t && t.dropdown_auto_width ? "control--select--list--auto-width" : ""),
                    e.append(" "),
                    e.append(twig.filter.escape(this.env_, "dropdown_class_name"in t ? t.dropdown_class_name : "", "light_escape", null, !0)),
                    e.append('">'),
                    t.selected_value = "selected"in t ? t.selected : "",
                    t.selected_option = "",
                    t.selected_raw = !1,
                    t.selected_bg_color = "",
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
                        t.v = i,
                        t.option = twig.attr("v"in t ? t.v : "", "option"),
                        t.is_selected = !1,
                        t.value = twig.attr("v"in t ? t.v : "", "id"),
                        twig.attr("v"in t ? t.v : "", "id", void 0, void 0, !0) || (t.value = "option"in t ? t.option : ""),
                        "selected_value"in t && t.selected_value && ("value"in t ? t.value : "") == ("selected"in t ? t.selected : "") ? (t.selected_value = "value"in t ? t.value : "",
                        t.selected_option = "option"in t ? t.option : "",
                        t.selected_raw = twig.attr("v"in t ? t.v : "", "should_be_raw"),
                        t.is_selected = !0,
                        twig.attr("v"in t ? t.v : "", "bg_color") && (t.selected_bg_color = twig.attr("v"in t ? t.v : "", "bg_color"))) : "selected_value"in t && t.selected_value || !twig.attr(a, "first") || (t.selected_value = "value"in t ? t.value : "",
                        t.selected_option = "option"in t ? t.option : "",
                        t.selected_raw = twig.attr("v"in t ? t.v : "", "should_be_raw"),
                        t.is_selected = !0,
                        twig.attr("v"in t ? t.v : "", "bg_color") && (t.selected_bg_color = twig.attr("v"in t ? t.v : "", "bg_color"))),
                        "exclude_list"in t && t.exclude_list || (e.append('<li data-value="'),
                        e.append(twig.filter.escape(this.env_, "value"in t ? t.value : "", "light_escape", null, !0)),
                        e.append('" '),
                        twig.attr("v"in t ? t.v : "", "disabled") && e.append(' data-disabled="disabled" '),
                        e.append(' data-color="" class="control--select--list--item '),
                        "is_selected"in t && t.is_selected && e.append("control--select--list--item-selected"),
                        e.append(" "),
                        "default"in t && twig.attr("v"in t ? t.v : "", "id") == ("default"in t ? t.default : "") && e.append("control--select--list--item-default"),
                        e.append(" "),
                        twig.attr("v"in t ? t.v : "", "bg_color") && e.append("control--select--list--item-colored"),
                        e.append(" "),
                        e.append(twig.filter.escape(this.env_, twig.attr("v"in t ? t.v : "", "class_name"), "light_escape", null, !0)),
                        e.append('" '),
                        twig.attr("v"in t ? t.v : "", "bg_color") && (e.append(' data-bg-color="'),
                        e.append(twig.filter.escape(this.env_, twig.attr("v"in t ? t.v : "", "bg_color"), "light_escape", null, !0)),
                        e.append('" ')),
                        e.append(' style="'),
                        twig.attr("v"in t ? t.v : "", "bg_color") && (e.append("background-color:"),
                        e.append(twig.filter.escape(this.env_, twig.attr("v"in t ? t.v : "", "bg_color"), "light_escape", null, !0)),
                        e.append(";")),
                        twig.attr("v"in t ? t.v : "", "text_color") && (e.append("color:"),
                        e.append(twig.filter.escape(this.env_, twig.attr("v"in t ? t.v : "", "text_color"), "light_escape", null, !0)),
                        e.append(";")),
                        e.append('" '),
                        e.append(twig.attr("v"in t ? t.v : "", "additional_data")),
                        e.append('><span class="control--select--list--item-inner" '),
                        "no_titles"in t && t.no_titles || (e.append(' title="'),
                        e.append(twig.filter.escape(this.env_, this.env_.filter("striptags", "option"in t ? t.option : ""), "light_escape", null, !0)),
                        e.append('" ')),
                        e.append(">"),
                        twig.attr("v"in t ? t.v : "", "should_be_raw") ? e.append("option"in t ? t.option : "") : e.append(twig.filter.escape(this.env_, "option"in t ? t.option : "", "light_escape", null, !0)),
                        e.append("</span></li>")),
                        ++a.index0,
                        ++a.index,
                        a.first = !1,
                        a.length && (--a.revindex0,
                        --a.revindex,
                        a.last = 0 === a.revindex0)
                    }
                    ), this),
                    e.append("</ul>"),
                    "exclude_button_input"in t && t.exclude_button_input || (e.append('<button class="control--select--button '),
                    e.append(twig.filter.escape(this.env_, "button_class_name"in t ? t.button_class_name : "", "light_escape", null, !0)),
                    e.append(" "),
                    "skip_before_empty_data_value"in t && t.skip_before_empty_data_value && e.append("control--select--button-skip-before-empty-data-value"),
                    e.append(" "),
                    "selected_bg_color"in t && t.selected_bg_color && e.append("control--select--button-colored"),
                    e.append(" "),
                    "referral_form"in t && e.append("pipeline-select__button-create-new-field"),
                    e.append('" tabindex="'),
                    e.append(twig.filter.escape(this.env_, "tab_index"in t ? t.tab_index : "", "light_escape", null, !0)),
                    e.append('" type="button" data-value="'),
                    e.append(twig.filter.escape(this.env_, "selected_value"in t ? t.selected_value : "", "light_escape", null, !0)),
                    e.append('" '),
                    "disabled"in t && t.disabled && e.append(' disabled="Y" '),
                    e.append(" "),
                    "selected_before"in t && (e.append(' data-before="'),
                    e.append(twig.filter.escape(this.env_, "selected_before"in t ? t.selected_before : "", "light_escape", null, !0)),
                    e.append('" ')),
                    e.append(" "),
                    "selected_after"in t && (e.append(' data-after="'),
                    e.append(twig.filter.escape(this.env_, "selected_after"in t ? t.selected_after : "", "light_escape", null, !0)),
                    e.append('" ')),
                    e.append(" "),
                    "selected_bg_color"in t && t.selected_bg_color && (e.append(' style="background: '),
                    e.append(twig.filter.escape(this.env_, "selected_bg_color"in t ? t.selected_bg_color : "", "light_escape", null, !0)),
                    e.append('" ')),
                    e.append(">"),
                    "prefix"in t && t.prefix && (e.append('<span class="control--select--button-prefix">'),
                    e.append(twig.filter.escape(this.env_, "prefix"in t ? t.prefix : "", "light_escape", null, !0)),
                    e.append(": </span>")),
                    e.append('<span class="control--select--button-inner">'),
                    "selected_raw"in t && t.selected_raw ? e.append("selected_option"in t ? t.selected_option : "") : e.append(twig.filter.escape(this.env_, "selected_option"in t ? t.selected_option : "", "light_escape", null, !0)),
                    e.append('</span></button><input type="hidden" class="control--select--input '),
                    e.append(twig.filter.escape(this.env_, "input_special_class"in t ? t.input_special_class : "", "light_escape", null, !0)),
                    e.append('" '),
                    "id"in t && t.id && (e.append('id="'),
                    e.append(twig.filter.escape(this.env_, "id"in t ? t.id : "", "light_escape", null, !0)),
                    e.append('"')),
                    e.append(' name="'),
                    e.append(twig.filter.escape(this.env_, "name"in t ? t.name : "", "light_escape", null, !0)),
                    e.append('" value="'),
                    e.append(twig.filter.escape(this.env_, "selected_value"in t ? t.selected_value : "", "light_escape", null, !0)),
                    e.append('" data-prev-value="'),
                    e.append(twig.filter.escape(this.env_, "selected_value"in t ? t.selected_value : "", "light_escape", null, !0)),
                    e.append('" '),
                    "form"in t && t.form && (e.append(' form="'),
                    e.append(twig.filter.escape(this.env_, "form"in t ? t.form : "", "light_escape", null, !0)),
                    e.append('" ')),
                    e.append(">"))
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_controls_select_inner"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/controls/select/inner", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e),
                    this.setBlocks({
                        before_list: twig.bind(this.block_before_list, this),
                        inner: twig.bind(this.block_inner, this)
                    })
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(t) {
                    return e._get("interface/controls/select.twig")
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    this.getParent(t).render_(e, t, twig.extend({}, this.getBlocks(), i))
                }
                ,
                t.prototype.block_before_list = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    t.data = {
                        items: "items"in t ? t.items : "",
                        dropdown_auto_width: "dropdown_auto_width"in t ? t.dropdown_auto_width : "",
                        dropdown_class_name: "dropdown_class_name"in t ? t.dropdown_class_name : "",
                        selected: "selected"in t ? t.selected : "",
                        no_titles: "no_titles"in t ? t.no_titles : "",
                        default: "default"in t ? t.default : ""
                    },
                    e.append('<script type="application/json">'),
                    e.append(twig.filter.json_encode("data"in t ? t.data : "")),
                    e.append("<\/script>")
                }
                ,
                t.prototype.block_inner = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    new (e._get("interface/controls/select/inner.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        exclude_list: !0
                    }))
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_controls_select_select_huge"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/controls/select/select_huge", t)
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
                    (e = new twig.StringBuffer).append(twig.filter.escape(this.env_, 1 == ("element_type"in t ? t.element_type : "") ? this.env_.filter("contact_name", "name"in t ? t.name : "") : "name"in t ? t.name : "", "light_escape", null, !0)),
                    "company_name"in t && t.company_name && (e.append(',&nbsp;<span style="color:#999">'),
                    e.append(twig.filter.escape(this.env_, "company_name"in t ? t.company_name : "", "light_escape", null, !0)),
                    e.append("</span>")),
                    ("phone"in t && t.phone || "email"in t && t.email) && (e.append('<div class="control--suggest--list--item-additional">'),
                    "phone"in t && t.phone && e.append(twig.filter.escape(this.env_, "phone"in t ? t.phone : "", "light_escape", null, !0)),
                    "phone"in t && t.phone && "email"in t && t.email && e.append(",&nbsp;"),
                    "email"in t && t.email && e.append(twig.filter.escape(this.env_, "email"in t ? t.email : "", "light_escape", null, !0)),
                    e.append("</div>")),
                    n.append(twig.spaceless(e.toString())),
                    e = n
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_controls_suggest_dropdown"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/controls/suggest/dropdown", t)
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
                    t.append('<div class="task-types-holder">'),
                    i.items = [{
                        id: 1,
                        option: '<span class="task_type_select__icon icon icon-inline icon-follow-up"></span>' + twig.attr("lang"in i ? i.lang : "", "tasks_follow_up"),
                        should_be_raw: !0
                    }, {
                        id: 2,
                        option: '<span class="task_type_select__icon icon icon-inline icon-case-red"></span>' + twig.attr("lang"in i ? i.lang : "", "tasks_meeting"),
                        should_be_raw: !0
                    }],
                    i._parent = i;
                    var a = "task_types"in i ? i.task_types : "";
                    twig.forEach(a, (function(e, t) {
                        i._key = t,
                        i.custom_task_type = e,
                        i.icon_id = this.env_.filter("default_task_type_icon", twig.attr("custom_task_type"in i ? i.custom_task_type : "", "icon_id")),
                        i.color = this.env_.filter("default_task_type_color", twig.attr("custom_task_type"in i ? i.custom_task_type : "", "color")),
                        i.items = twig.filter.merge("items"in i ? i.items : "", [{
                            id: twig.attr("custom_task_type"in i ? i.custom_task_type : "", "id"),
                            option: '<span class="task_type_select__icon"><svg class="svg-icon svg-tasks--types-icons--' + ("icon_id"in i ? i.icon_id : "") + '-dims" style="fill: ' + ("color"in i ? i.color : "") + '"><use xlink:href="#tasks--types-icons--' + ("icon_id"in i ? i.icon_id : "") + '"></use></svg></span>' + twig.attr("custom_task_type"in i ? i.custom_task_type : "", "option"),
                            should_be_raw: !0
                        }])
                    }
                    ), this),
                    i.items = twig.filter.merge("items"in i ? i.items : "", [{
                        id: "custom",
                        class_name: "js-task-type-custom",
                        option: '<span class="task_type_select__icon"><svg class="svg-icon svg-tasks--types-icons--0-dims"><use xlink:href="#tasks--types-icons--0"></use></svg></span>' + twig.attr("lang"in i ? i.lang : "", "tasks_custom"),
                        should_be_raw: !0
                    }]),
                    new (e._get("interface/controls/select.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        bg_color: "bg_color"in i ? i.bg_color : "",
                        id: "task_edit_type",
                        selected: "selected"in i ? i.selected : "",
                        class_name: "task_type_select js-task-type-select " + ("class_name"in i ? i.class_name : ""),
                        items: "items"in i ? i.items : "",
                        disabled: "disabled"in i ? i.disabled : ""
                    })),
                    t.append('<div class="task-types-holder__custom"><svg class="task-types-holder__custom__icon svg-icon svg-tasks--types-icons--0-dims"><use xlink:href="#tasks--types-icons--0"></use></svg>'),
                    new (e._get("interface/controls/input.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        id: "task_type_custom",
                        name: "task_type_name",
                        placeholder: twig.attr("lang"in i ? i.lang : "", "tasks_custom_placeholder"),
                        class_name: "task-types-holder__custom__input",
                        max_length: "16"
                    })),
                    t.append('<span class="task-types-holder__custom__cancel"><span class="icon icon-clear"></span></span><span class="spinner-icon task-types-holder__custom__loader"></span></div></div>')
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_controls_task_types_task_types"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/controls/task_types/task_types", t)
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
                    e.append('<div style="display: none;" class="widget-creator-hover js-widget-creator-hover">'),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Create dashboard widget"), "light_escape", null, !0)),
                    e.append('<div class="widget-creator-hover__fake js-widget-creator-hover-fake"></div><div class="widget-creator-hover__close js-widget-creator-hover-close"><svg class="svg-icon svg-common--cross-close-dims widget-creator-hover__close-icon"><use xlink:href="#common--cross-close"></use></svg></div></div>')
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_controls_widget_creator_widget_creator_hover"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/controls/widget_creator/widget_creator_hover", t)
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
                        class_name: "ql-picker-item",
                        value: "false",
                        text: this.env_.filter("i18n", "Left alignment"),
                        svg_icon: "controls--editor-align-left"
                    }, {
                        class_name: "ql-picker-item",
                        value: "center",
                        text: this.env_.filter("i18n", "Center alignment"),
                        svg_icon: "controls--editor-align-center"
                    }, {
                        class_name: "ql-picker-item",
                        value: "right",
                        text: this.env_.filter("i18n", "Right alignment"),
                        svg_icon: "controls--editor-align-right"
                    }],
                    t.append('<button class="control-wysiwyg__toolbar--item js-tip-holder ql-custom-align ql-picker ql-align-picker" data-type="align"><span class="ql-picker-label" tabindex="0" role="button" aria-expanded="false" aria-controls="ql-picker-options-4" title="'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Alignment"), "light_escape", null, !0)),
                    t.append('"><svg class="svg-icon svg-controls--editor-alignment-dims"><use xlink:href="#controls--editor-alignment"></use></svg></span>'),
                    new (e._get("interface/common/tip.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        class_name: "ql-picker-options",
                        items: "items"in i ? i.items : "",
                        is_custom_tip_holder: !0
                    })),
                    t.append("</button>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_controls_wysiwyg_align_item"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/controls/wysiwyg/align_item", t)
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
                    i.font_families = {
                        "Andale Mono": "andale mono",
                        Arial: "arial",
                        "Arial Black": "arial black",
                        "Book Antiqua": "book antiqua",
                        "Comic Sans MS": "comic sans ms",
                        "Courier New": "Courier New",
                        Helvetica: "helvetica",
                        Impact: "impact",
                        Symbol: "symbol",
                        Tahoma: "tahoma,geneva",
                        Terminal: "terminal",
                        "Times New Roman": "times new roman",
                        "Trebuchet ms": "trebuchet ms",
                        Verdana: "verdana"
                    },
                    i.items = [],
                    i._parent = i;
                    var a = "font_families"in i ? i.font_families : "";
                    twig.forEach(a, (function(e, t) {
                        i.key = t,
                        i.item = e,
                        i.items = twig.filter.merge("items"in i ? i.items : "", [{
                            class_name: "ql-picker-item",
                            value: "item"in i ? i.item : "",
                            text: "key"in i ? i.key : "",
                            additional_data: 'style="font-family:' + ("item"in i ? i.item : "") + '"'
                        }])
                    }
                    ), this),
                    t.append('<button class="control-wysiwyg__toolbar--item js-tip-holder ql-custom-font ql-picker ql-icon-picker" type="button" data-type="font"><span class="ql-picker-label" tabindex="0" role="button" aria-expanded="false" aria-controls="ql-picker-options-4" title="'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Font family"), "light_escape", null, !0)),
                    t.append('"><svg class="svg-icon svg-controls--editor-font-dims"><use xlink:href="#controls--editor-font"></use></svg></span>'),
                    new (e._get("interface/common/tip.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        class_name: "ql-picker-options",
                        items: "items"in i ? i.items : "",
                        is_custom_tip_holder: !0
                    })),
                    t.append("</button>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_controls_wysiwyg_font_family"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/controls/wysiwyg/font_family", t)
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
                    i.font_sizes = [8, 9, 10, 11, 12, 14, 16, 18, 20, 22, 24, 26, 28, 36, 48, 72],
                    i.items = [],
                    i._parent = i;
                    var a = "font_sizes"in i ? i.font_sizes : "";
                    twig.forEach(a, (function(e, t) {
                        i._key = t,
                        i.item = e,
                        i.items = twig.filter.merge("items"in i ? i.items : "", [{
                            class_name: "ql-picker-item",
                            value: ("item"in i ? i.item : "") + "px",
                            text: "item"in i ? i.item : ""
                        }])
                    }
                    ), this),
                    t.append('<button class="control-wysiwyg__toolbar--item js-tip-holder ql-custom-size ql-picker ql-icon-picker" type="button" data-type="size"><span class="ql-picker-label" tabindex="0" role="button" aria-expanded="false" aria-controls="ql-picker-options-4" title="'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Font size"), "light_escape", null, !0)),
                    t.append('"><svg class="svg-icon svg-controls--editor-size-dims"><use xlink:href="#controls--editor-size"></use></svg></span>'),
                    new (e._get("interface/common/tip.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        class_name: "ql-picker-options",
                        items: "items"in i ? i.items : "",
                        is_custom_tip_holder: !0
                    })),
                    t.append("</button>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_controls_wysiwyg_font_size"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/controls/wysiwyg/font_size", t)
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
                    t.append('<button class="control-wysiwyg__toolbar--item js-tip-holder ql-custom-link" data-type="link"><span class="ql-picker-label" tabindex="0" role="button" aria-expanded="false" title="'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Link"), "light_escape", null, !0)),
                    t.append('"><svg class="svg-icon svg-notes--feed-linked-dims"><use xlink:href="#notes--feed-linked"></use></svg></span>'),
                    new (e._get("interface/controls/wysiwyg/tip.twig"))(this.env_).render_(t, {
                        is_custom_tip_holder: !0
                    }),
                    t.append("</button>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_controls_wysiwyg_link"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/controls/wysiwyg/link", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e),
                    this.setBlocks({
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
                t.prototype.block_body_block = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    t.append('<div class="ql-tooltip">'),
                    new (e._get("interface/controls/input.twig"))(this.env_).render_(t, {
                        class_name: "ql-tooltip-input",
                        type: "text",
                        placeholder: this.env_.filter("i18n", "Enter the link")
                    }),
                    t.append('<a class="ql-action">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Save"), "light_escape", null, !0)),
                    t.append("</a></div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_controls_wysiwyg_tip"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/controls/wysiwyg/tip", t)
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
                    i.svg_prefix = "en",
                    "ru" == ("lang_id"in i ? i.lang_id : "") && (i.svg_prefix = "ru"),
                    t.append('<div class="control-wysiwyg__toolbar '),
                    t.append(twig.filter.escape(this.env_, "toolbar_class_name"in i ? i.toolbar_class_name : "", "light_escape", null, !0)),
                    t.append(" "),
                    "is_extended"in i && i.is_extended && t.append("control-wysiwyg__toolbar_extended"),
                    t.append('"><div class="control-wysiwyg__toolbar_column"><button class="control-wysiwyg__toolbar--item ql-bold" type="button" title="'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Bold"), "light_escape", null, !0)),
                    t.append('"><svg class="svg-icon svg-controls--editor-semibold-'),
                    t.append(twig.filter.escape(this.env_, "svg_prefix"in i ? i.svg_prefix : "", "light_escape", null, !0)),
                    t.append('-dims"><use xlink:href="#controls--editor-semibold-'),
                    t.append(twig.filter.escape(this.env_, "svg_prefix"in i ? i.svg_prefix : "", "light_escape", null, !0)),
                    t.append('"></use></svg></button><button class="control-wysiwyg__toolbar--item ql-italic" title="'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Italic"), "light_escape", null, !0)),
                    t.append('"><svg class="svg-icon svg-controls--editor-italic-'),
                    t.append(twig.filter.escape(this.env_, "svg_prefix"in i ? i.svg_prefix : "", "light_escape", null, !0)),
                    t.append('-dims"><use xlink:href="#controls--editor-italic-'),
                    t.append(twig.filter.escape(this.env_, "svg_prefix"in i ? i.svg_prefix : "", "light_escape", null, !0)),
                    t.append('"></use></svg></button><button class="control-wysiwyg__toolbar--item ql-underline" title="'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Underline"), "light_escape", null, !0)),
                    t.append('"><svg class="svg-icon svg-controls--editor-underline-'),
                    t.append(twig.filter.escape(this.env_, "svg_prefix"in i ? i.svg_prefix : "", "light_escape", null, !0)),
                    t.append('-dims"><use xlink:href="#controls--editor-underline-'),
                    t.append(twig.filter.escape(this.env_, "svg_prefix"in i ? i.svg_prefix : "", "light_escape", null, !0)),
                    t.append('"></use></svg></button>'),
                    new (e._get("interface/controls/color_picker.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        type: "color",
                        title: this.env_.filter("i18n", "Text color")
                    })),
                    new (e._get("interface/controls/color_picker.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        type: "background",
                        title: this.env_.filter("i18n", "Font background color")
                    })),
                    twig.contains("exclude_features"in i ? i.exclude_features : "", "font_family") || new (e._get("interface/controls/wysiwyg/font_family.twig"))(this.env_).render_(t, i),
                    new (e._get("interface/controls/wysiwyg/font_size.twig"))(this.env_).render_(t, i),
                    new (e._get("interface/controls/wysiwyg/align_item.twig"))(this.env_).render_(t, i),
                    "is_extended"in i && i.is_extended && (t.append('<button class="control-wysiwyg__toolbar--item ql-list" value="ordered" title="'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Ordered list"), "light_escape", null, !0)),
                    t.append('"><svg class="svg-icon svg-controls--editor-numbered-list-dims"><use xlink:href="#controls--editor-numbered-list"></use></svg></button><button class="control-wysiwyg__toolbar--item ql-list" value="bullet" title="'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Unordered list"), "light_escape", null, !0)),
                    t.append('"><svg class="svg-icon svg-controls--editor-bulleted-list-dims"><use xlink:href="#controls--editor-bulleted-list"></use></svg></button>'),
                    new (e._get("interface/controls/wysiwyg/link.twig"))(this.env_).render_(t, {}),
                    twig.contains("exclude_features"in i ? i.exclude_features : "", "attach_file") || (t.append('<label for="mail-attach-filenew" class="feed-compose_mail__attach control-wysiwyg__toolbar--item ql-custom-attach" title="'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Add file"), "light_escape", null, !0)),
                    t.append('"><svg class="svg-icon svg-notes--feed-attach-dims"><use xlink:href="#notes--feed-attach"></use></svg>'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "note_attach_files"), "light_escape", null, !0)),
                    t.append('<input type="file" id="mail-attach-filenew" class="js-form-changes-skip hidden" multiple tabindex="-1" name="files" /></label>'))),
                    t.append('</div><button class="control-wysiwyg__toolbar--item ql-custom-clean" type="button" title="'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Clean formatting"), "light_escape", null, !0)),
                    t.append('">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Clean formatting"), "light_escape", null, !0)),
                    t.append("</button></div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_controls_wysiwyg_toolbar"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/controls/wysiwyg/toolbar", t)
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
        e._sentryDebugIds[t] = "c3fad532-b47a-4601-91e7-5ce756010aad",
        e._sentryDebugIdIdentifier = "sentry-dbid-c3fad532-b47a-4601-91e7-5ce756010aad")
    } catch (e) {}
}();
//# sourceMappingURL=94849.bd3e9902ca816b991dab.js.map
