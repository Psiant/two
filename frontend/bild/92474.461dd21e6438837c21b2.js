(window.webpackChunk = window.webpackChunk || []).push([[92474], {
    92474: (e, t, i) => {
        var s, n;
        s = [i(460159), i(94849)],
        void 0 === (n = function(e) {
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
                    e.append('<li class="multisuggest__list-item js-multisuggest-item" data-title="'),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("striptags", twig.attr("item"in t ? t.item : "", "title")), "light_escape", null, !0)),
                    e.append('" data-group="'),
                    twig.attr("item"in t ? t.item : "", "group") ? e.append(twig.filter.escape(this.env_, twig.attr("item"in t ? t.item : "", "group"), "light_escape", null, !0)) : e.append(twig.attr("item"in t ? t.item : "", "is_group") ? "y" : ""),
                    e.append('" data-id="'),
                    e.append(twig.filter.escape(this.env_, twig.attr("item"in t ? t.item : "", "id"), "light_escape", null, !0)),
                    e.append('">'),
                    e.append('<input type="text" class="js-focuser" class="js-form-changes-skip" readonly="readonly" onkeydown="([13,8].indexOf(event.which)+1)&&this.parentNode.click()" onclick="return false"><span>'),
                    e.append(twig.filter.escape(this.env_, twig.attr("item"in t ? t.item : "", "title", void 0, void 0, !0) ? twig.filter.def(twig.attr("item"in t ? t.item : "", "title"), "...") : "...", "light_escape", null, !0)),
                    e.append('</span><input type="checkbox" checked="checked" class="hidden" name="'),
                    e.append(twig.filter.escape(this.env_, twig.attr("item"in t ? t.item : "", "input_name", void 0, void 0, !0) ? twig.filter.def(twig.attr("item"in t ? t.item : "", "input_name"), "input_name"in t ? t.input_name : "") : "input_name"in t ? t.input_name : "", "light_escape", null, !0)),
                    e.append('" id="cbx_drop_'),
                    e.append(twig.filter.escape(this.env_, twig.attr("item"in t ? t.item : "", "id"), "light_escape", null, !0)),
                    e.append('" value="'),
                    e.append(twig.filter.escape(this.env_, twig.attr("item"in t ? t.item : "", "id"), "light_escape", null, !0)),
                    e.append('"></li>')
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_users_select_item"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/users_select/item", t)
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
                    i = void 0 === i ? {} : i,
                    twig.attr("item"in t ? t.item : "", "current") ? t.name = this.env_.filter("i18n", "You") : t.name = twig.attr("item"in t ? t.item : "", "title"),
                    e.append('<li class="group-chat__multisuggest multisuggest__list-item js-multisuggest-item '),
                    twig.attr("item"in t ? t.item : "", "subscriber") && e.append("js-subscriber "),
                    e.append(" "),
                    e.append(twig.filter.escape(this.env_, twig.attr("item"in t ? t.item : "", "class_name"), "light_escape", null, !0)),
                    e.append('" data-title="'),
                    e.append(twig.filter.escape(this.env_, twig.attr("item"in t ? t.item : "", "title"), "light_escape", null, !0)),
                    e.append('" data-group="'),
                    e.append(twig.filter.escape(this.env_, twig.attr("item"in t ? t.item : "", "group"), "light_escape", null, !0)),
                    e.append('" data-id="'),
                    e.append(twig.filter.escape(this.env_, twig.attr("item"in t ? t.item : "", "id"), "light_escape", null, !0)),
                    e.append('"><span class="group-chat__multisuggest--tag" title="'),
                    e.append(twig.filter.escape(this.env_, "name"in t ? t.name : "", "light_escape", null, !0)),
                    e.append('"><span class="group-chat__multisuggest--tag-inner">'),
                    e.append(twig.filter.escape(this.env_, "name"in t ? t.name : "", "light_escape", null, !0)),
                    e.append('</span><span class="group-chat__multisuggest--tag-close js-chat_user_remove" data-group="'),
                    e.append(twig.filter.escape(this.env_, twig.attr("item"in t ? t.item : "", "group"), "light_escape", null, !0)),
                    e.append('" data-id="'),
                    e.append(twig.filter.escape(this.env_, twig.attr("item"in t ? t.item : "", "id"), "light_escape", null, !0)),
                    e.append('"></span></span></li>')
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_users_select_item_group_chat"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/users_select/item_group_chat", t)
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
                    t.item_tmpl = "interface/users_select/item.twig",
                    t.class_name = "users-select-wrapper " + ("class_name"in t ? t.class_name : ""),
                    t.list_class_name = "suggest-manager-lib__items users_select__selected_items",
                    this.getParent(t).render_(e, t, twig.extend({}, this.getBlocks(), i))
                }
                ,
                t.prototype.block_suggest = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    e.append('<div class="multisuggest__suggest-wrapper suggest-manager users-select-suggest '),
                    e.append(twig.filter.escape(this.env_, "suggest_class_name"in t ? t.suggest_class_name : "", "light_escape", null, !0)),
                    e.append('" style="display: none" data-is-suggest="y" data-multisuggest-id="'),
                    e.append(twig.filter.escape(this.env_, "suggest_id"in t ? t.suggest_id : "", "light_escape", null, !0)),
                    e.append('"><div class="multisuggest__suggest js-multisuggest-suggest custom-scroll"></div></div>')
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_users_select_users_select"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/users_select/users_select", t)
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
                    t.item_tmpl = "interface/users_select/item_group_chat.twig",
                    t.class_name = "users-select-wrapper " + ("class_name"in t ? t.class_name : ""),
                    t.list_class_name = "suggest-manager-lib__items users_select__selected_items",
                    this.getParent(t).render_(e, t, twig.extend({}, this.getBlocks(), i))
                }
                ,
                t.prototype.block_suggest = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    e.append('<div class="multisuggest__suggest-wrapper suggest-manager users-select-suggest group-chat__multisuggest-select '),
                    e.append(twig.filter.escape(this.env_, "suggest_class_name"in t ? t.suggest_class_name : "", "light_escape", null, !0)),
                    e.append('" style="display: none" data-is-suggest="y" data-multisuggest-id="'),
                    e.append(twig.filter.escape(this.env_, "suggest_id"in t ? t.suggest_id : "", "light_escape", null, !0)),
                    e.append('"><div class="multisuggest__suggest js-multisuggest-suggest custom-scroll"></div></div>')
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_users_select_users_select_group_chat"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/users_select/users_select_group_chat", t)
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
                    t.item_tmpl = "interface/users_select/item.twig",
                    t.class_name = "users_select-select_one " + ("class_name"in t ? t.class_name : ""),
                    t.list_class_name = "suggest-manager-lib__items users_select__selected_items",
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
                    return "interface_users_select_users_select_items"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/users_select/users_select_items", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e)
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(e) {
                    return !1
                }
                ,
                t.prototype.render_ = function(t, i, s) {
                    s = void 0 === s ? {} : s,
                    i._parent = i;
                    var n = ["internal", "external", "members"]
                      , a = {
                        index0: 0,
                        index: 1,
                        first: !0
                    };
                    if (twig.countable(n)) {
                        var r = twig.count(n);
                        a.revindex0 = r - 1,
                        a.revindex = r,
                        a.length = r,
                        a.last = 1 === r
                    }
                    twig.forEach(n, (function(s, n) {
                        i._key = n,
                        i.key = s,
                        twig.attr("rows"in i ? i.rows : "", "key"in i ? i.key : "", void 0, "array") && twig.attr("items"in i ? i.items : "", "key"in i ? i.key : "", void 0, "array") && (i.params = {
                            key_id: "key"in i ? i.key : "",
                            key: "key"in i ? i.key : "",
                            row: twig.attr("rows"in i ? i.rows : "", "key"in i ? i.key : "", void 0, "array")
                        },
                        t.append('<div class="users-select-row__inner '),
                        twig.attr(twig.attr("params"in i ? i.params : "", "row"), "hide_title") && t.append("users-select-row__inner_hide-title"),
                        t.append(" group-color-wrapper "),
                        twig.attr(twig.attr("params"in i ? i.params : "", "row"), "hidden") && t.append("hidden"),
                        t.append('">'),
                        new (e._get("interface/users_select/wrapper/head.twig"))(this.env_).render_(t, twig.extend({}, i, "params"in i ? i.params : "")),
                        new (e._get("interface/users_select/wrapper/body.twig"))(this.env_).render_(t, twig.extend({}, i, "params"in i ? i.params : "")),
                        t.append("</div>")),
                        ++a.index0,
                        ++a.index,
                        a.first = !1,
                        a.length && (--a.revindex0,
                        --a.revindex,
                        a.last = 0 === a.revindex0)
                    }
                    ), this),
                    t.append('<div class="users-select-row">'),
                    i._parent = i,
                    n = "rows"in i ? i.rows : "",
                    a = {
                        index0: 0,
                        index: 1,
                        first: !0
                    },
                    twig.forEach(n, (function(s, n) {
                        i.key = n,
                        i.row = s,
                        "external" != twig.attr("row"in i ? i.row : "", "id") && "members" != twig.attr("row"in i ? i.row : "", "id") && "internal" != twig.attr("row"in i ? i.row : "", "id") && (i.key_id = twig.attr("row"in i ? i.row : "", "id"),
                        "key_id"in i && i.key_id || (i.key_id = "key"in i ? i.key : ""),
                        i.params = {
                            key_id: "key_id"in i ? i.key_id : "",
                            key: "key"in i ? i.key : "",
                            row: "row"in i ? i.row : ""
                        },
                        t.append('<div class="users-select-row__inner group-color-wrapper '),
                        twig.attr("row"in i ? i.row : "", "hidden") && t.append("hidden"),
                        t.append('">'),
                        new (e._get("interface/users_select/wrapper/head.twig"))(this.env_).render_(t, twig.extend({}, i, "params"in i ? i.params : "")),
                        new (e._get("interface/users_select/wrapper/body.twig"))(this.env_).render_(t, twig.extend({}, i, "params"in i ? i.params : "")),
                        t.append("</div>"),
                        ++a.index0,
                        ++a.index,
                        a.first = !1)
                    }
                    ), this),
                    t.append("</div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_users_select_wrapper_amojo"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/users_select/wrapper/amojo", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e)
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(e) {
                    return !1
                }
                ,
                t.prototype.render_ = function(t, i, s) {
                    s = void 0 === s ? {} : s,
                    i.row_index = twig.attr("loop"in i ? i.loop : "", "index"),
                    "items_index"in i && i.items_index ? i.cur_items = twig.attr(twig.attr("items"in i ? i.items : "", "key_id"in i ? i.key_id : "", void 0, "array"), "items_index"in i ? i.items_index : "", void 0, "array") : i.cur_items = twig.attr("items"in i ? i.items : "", "key_id"in i ? i.key_id : "", void 0, "array"),
                    t.append('<div class="users-select__body" data-id="'),
                    t.append(twig.filter.escape(this.env_, "key_id"in i ? i.key_id : "", "light_escape", null, !0)),
                    t.append('">'),
                    i._parent = i;
                    var n = "cur_items"in i ? i.cur_items : ""
                      , a = {
                        index0: 0,
                        index: 1,
                        first: !0
                    };
                    if (twig.countable(n)) {
                        var r = twig.count(n);
                        a.revindex0 = r - 1,
                        a.revindex = r,
                        a.length = r,
                        a.last = 1 === r
                    }
                    twig.forEach(n, (function(s, n) {
                        i._key = n,
                        i.item = s;
                        var r = t;
                        t = new twig.StringBuffer,
                        twig.attr("item"in i ? i.item : "", "title_clarification") && (t.append('<span class="users-select__item-title-clarification">'),
                        t.append(twig.filter.escape(this.env_, twig.attr("item"in i ? i.item : "", "title_clarification"), "light_escape", null, !0)),
                        t.append("</span>")),
                        i.title_clarification_el = new twig.Markup(t.toString()),
                        t = r,
                        "support" == twig.attr("item"in i ? i.item : "", "origin") ? i.origin = "amoCRM" : i.origin = twig.filter.capitalize(this.env_, twig.attr("item"in i ? i.item : "", "origin")),
                        1 == twig.attr("item"in i ? i.item : "", "is_disabled") ? (i.is_disabled = !0,
                        i.disable_reason = twig.attr("item"in i ? i.item : "", "disable_reason")) : (i.is_disabled = twig.attr("row"in i ? i.row : "", "is_disabled"),
                        i.disable_reason = twig.attr("row"in i ? i.row : "", "disable_reason")),
                        "show_all" != twig.attr("item"in i ? i.item : "", "id") && "show_members" != twig.attr("item"in i ? i.item : "", "id") || (i.is_disabled = !1),
                        t.append('<div class="users-select__body__item '),
                        t.append(twig.attr("item"in i ? i.item : "", "is_hidden") ? "hidden" : ""),
                        t.append(" "),
                        t.append("is_disabled"in i && i.is_disabled ? "users-select__item-disabled" : ""),
                        t.append('" id="select_users__user-'),
                        t.append(twig.filter.escape(this.env_, twig.attr("item"in i ? i.item : "", "id"), "light_escape", null, !0)),
                        t.append('"><div class="multisuggest__suggest-item '),
                        t.append("is_disabled"in i && i.is_disabled ? "users-select__suggest-item-disabled" : "js-multisuggest-item"),
                        t.append(" "),
                        t.append(twig.filter.escape(this.env_, twig.attr("item"in i ? i.item : "", "active"), "light_escape", null, !0)),
                        t.append('" data-group="'),
                        t.append(twig.filter.escape(this.env_, twig.attr("item"in i ? i.item : "", "group"), "light_escape", null, !0)),
                        t.append('" data-id="'),
                        t.append(twig.filter.escape(this.env_, twig.attr("item"in i ? i.item : "", "id"), "light_escape", null, !0)),
                        t.append('">'),
                        twig.attr("item"in i ? i.item : "", "show_source") || !twig.attr("item"in i ? i.item : "", "talk_info") && !twig.attr("item"in i ? i.item : "", "talk_id") ? twig.attr("item"in i ? i.item : "", "show_source") ? (t.append('<div class="users-select__body-group"><div class="users-select__body-group-info">'),
                        twig.attr("item"in i ? i.item : "", "origin_icon") && (t.append('<img src="'),
                        t.append(twig.filter.escape(this.env_, twig.attr("item"in i ? i.item : "", "origin_icon"), "light_escape", null, !0)),
                        t.append('">')),
                        t.append('<div class="users-select__body-group-name h-text-overflow" title="'),
                        t.append(twig.filter.escape(this.env_, twig.attr("item"in i ? i.item : "", "source_name"), "light_escape", null, !0)),
                        t.append('">'),
                        t.append(twig.filter.escape(this.env_, twig.attr("item"in i ? i.item : "", "source_name"), "light_escape", null, !0)),
                        t.append('</div></div><div class="users-select__body-group-info"><svg class="svg-icon svg-controls--users-select-arrow-dims users-select__item-lead-source-arrow"><use xlink:href="#controls--users-select-arrow"></use></svg><div class="users-select__body-group-title"><span class="h-text-overflow" style="max-width: 160px; margin-right: 5px">'),
                        t.append(twig.filter.escape(this.env_, twig.attr("item"in i ? i.item : "", "title"), "light_escape", null, !0)),
                        t.append(twig.filter.escape(this.env_, "title_clarification_el"in i ? i.title_clarification_el : "", "light_escape", null, !0)),
                        t.append("</span>"),
                        new (e._get("interface/controls/status_chat.twig"))(this.env_).render_(t, twig.extend({}, i, {
                            id: twig.attr("item"in i ? i.item : "", "id")
                        })),
                        !twig.attr("item"in i ? i.item : "", "talk_id") || "is_disabled"in i && i.is_disabled || (t.append('<span class="users-select__body-talk-id" title="A'),
                        t.append(twig.filter.escape(this.env_, twig.attr("item"in i ? i.item : "", "talk_id"), "light_escape", null, !0)),
                        t.append('">A'),
                        t.append(twig.filter.escape(this.env_, twig.attr("item"in i ? i.item : "", "talk_id"), "light_escape", null, !0)),
                        t.append("</span>")),
                        t.append("</div></div></div>")) : (twig.attr("item"in i ? i.item : "", "origin_icon") && (t.append('<img src="'),
                        t.append(twig.filter.escape(this.env_, twig.attr("item"in i ? i.item : "", "origin_icon"), "light_escape", null, !0)),
                        t.append('">')),
                        t.append(twig.filter.escape(this.env_, twig.attr("item"in i ? i.item : "", "title"), "light_escape", null, !0)),
                        t.append(twig.filter.escape(this.env_, "title_clarification_el"in i ? i.title_clarification_el : "", "light_escape", null, !0)),
                        new (e._get("interface/controls/status_chat.twig"))(this.env_).render_(t, twig.extend({}, i, {
                            id: twig.attr("item"in i ? i.item : "", "id")
                        }))) : (twig.attr("item"in i ? i.item : "", "origin_icon") && (t.append('<img src="'),
                        t.append(twig.filter.escape(this.env_, twig.attr("item"in i ? i.item : "", "origin_icon"), "light_escape", null, !0)),
                        t.append('">')),
                        t.append('<span class="h-text-overflow" style="max-width: 160px; margin-right: 5px" >'),
                        t.append(twig.filter.escape(this.env_, twig.attr("item"in i ? i.item : "", "title"), "light_escape", null, !0)),
                        t.append("</span>"),
                        !twig.attr("item"in i ? i.item : "", "talk_id") && twig.attr("item"in i ? i.item : "", "talk_info") && (t.append(" ("),
                        t.append(twig.filter.escape(this.env_, twig.attr("item"in i ? i.item : "", "talk_info"), "light_escape", null, !0)),
                        t.append(")")),
                        t.append(twig.filter.escape(this.env_, "title_clarification_el"in i ? i.title_clarification_el : "", "light_escape", null, !0)),
                        new (e._get("interface/controls/status_chat.twig"))(this.env_).render_(t, twig.extend({}, i, {
                            id: twig.attr("item"in i ? i.item : "", "id")
                        })),
                        !twig.attr("item"in i ? i.item : "", "talk_id") || "is_disabled"in i && i.is_disabled || (t.append('<span class="users-select__body-talk-id" title="A'),
                        t.append(twig.filter.escape(this.env_, twig.attr("item"in i ? i.item : "", "talk_id"), "light_escape", null, !0)),
                        t.append('">A'),
                        t.append(twig.filter.escape(this.env_, twig.attr("item"in i ? i.item : "", "talk_id"), "light_escape", null, !0)),
                        t.append("</span>"))),
                        "is_disabled"in i && i.is_disabled && (t.append('<div class="users-select__suggest-item-disabled_icon"><svg class="svg-icon svg-notes--lock-dims"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#notes--lock"></use></svg>'),
                        "is_disabled"in i && i.is_disabled && "disable_reason"in i && i.disable_reason && (t.append('<div class="users-select__suggest-item-disabled-reason"><span class="users-select__suggest-item-disabled-reason-tip"></span><p class="users-select__suggest-item-disabled-reason-text">'),
                        t.append(twig.filter.escape(this.env_, "disable_reason"in i ? i.disable_reason : "", "light_escape", null, !0)),
                        t.append("</p></div>")),
                        t.append("</div>")),
                        t.append("</div></div>"),
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
                    return "interface_users_select_wrapper_body"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/users_select/wrapper/body", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
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
                    e.append('<div class="users-select__head group-color '),
                    !twig.attr("row"in t ? t.row : "", "selectable") && "select_one"in t && t.select_one || twig.attr("row"in t ? t.row : "", "all_select") || e.append(" js-multisuggest-item multisuggest__suggest-item"),
                    e.append('" data-title="'),
                    e.append(twig.filter.escape(this.env_, twig.attr("row"in t ? t.row : "", "title"), "light_escape", null, !0)),
                    e.append('" data-group="y" data-id="'),
                    e.append(twig.filter.escape(this.env_, twig.attr("row"in t ? t.row : "", "id"), "light_escape", null, !0)),
                    e.append('"><div class="users-select__head-title"><span class="users-select__head-title-text">'),
                    e.append(twig.filter.escape(this.env_, twig.attr("row"in t ? t.row : "", "title"), "light_escape", null, !0)),
                    e.append("</span>"),
                    !twig.attr("row"in t ? t.row : "", "selectable") && "select_one"in t && t.select_one || twig.attr("row"in t ? t.row : "", "all_select") || (t.head_title = twig.attr("row"in t ? t.row : "", "select_title"),
                    "head_title"in t && t.head_title || (t.head_title = twig.attr("lang"in t ? t.lang : "", "users_select_add_group")),
                    0 != twig.attr("row"in t ? t.row : "", "id") && (e.append('<div class="users-select__head-allgroup" data-id="'),
                    e.append(twig.filter.escape(this.env_, twig.attr("row"in t ? t.row : "", "id"), "light_escape", null, !0)),
                    e.append('"><span>'),
                    e.append(twig.filter.escape(this.env_, "head_title"in t ? t.head_title : "", "light_escape", null, !0)),
                    e.append("</span></div>"))),
                    e.append("</div></div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_users_select_wrapper_head"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/users_select/wrapper/head", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e)
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(e) {
                    return !1
                }
                ,
                t.prototype.render_ = function(t, i, s) {
                    s = void 0 === s ? {} : s,
                    t.append('<div class="users-select-row">'),
                    "user_bot"in i && i.user_bot && (i.rows = twig.filter.merge("rows"in i ? i.rows : "", {
                        bot: {
                            id: 0,
                            title: this.env_.filter("i18n", "Bot")
                        }
                    })),
                    i._parent = i;
                    var n = "rows"in i ? i.rows : ""
                      , a = {
                        index0: 0,
                        index: 1,
                        first: !0
                    };
                    if (twig.countable(n)) {
                        var r = twig.count(n);
                        a.revindex0 = r - 1,
                        a.revindex = r,
                        a.length = r,
                        a.last = 1 === r
                    }
                    twig.forEach(n, (function(s, n) {
                        i.key = n,
                        i.row = s,
                        i.key_id = twig.attr("row"in i ? i.row : "", "id"),
                        "key_id"in i && i.key_id || (i.key_id = "key"in i ? i.key : ""),
                        i.params = {
                            key_id: "key_id"in i ? i.key_id : "",
                            key: "key"in i ? i.key : "",
                            row: "row"in i ? i.row : "",
                            is_last: twig.attr(a, "is_last"),
                            is_first: twig.attr(a, "is_first")
                        },
                        t.append('<div class="users-select-row__inner group-color-wrapper '),
                        twig.attr("row"in i ? i.row : "", "hidden") && t.append("hidden"),
                        t.append('">'),
                        new (e._get("interface/users_select/wrapper/head.twig"))(this.env_).render_(t, twig.extend({}, i, "params"in i ? i.params : "")),
                        new (e._get("interface/users_select/wrapper/body.twig"))(this.env_).render_(t, twig.extend({}, i, "params"in i ? i.params : "")),
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
                    return "interface_users_select_wrapper_index"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/users_select/wrapper/index", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e),
                    this.setBlocks({
                        source: twig.bind(this.block_source, this)
                    })
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(t) {
                    return e._get("interface/users_select/wrapper/body.twig")
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    this.getParent(t).render_(e, t, twig.extend({}, this.getBlocks(), i))
                }
                ,
                t.prototype.block_source = function(t, i, s) {
                    s = void 0 === s ? {} : s,
                    twig.attr("item"in i ? i.item : "", "origin_icon") && (t.append('<img src="'),
                    t.append(twig.filter.escape(this.env_, twig.attr("item"in i ? i.item : "", "origin_icon"), "light_escape", null, !0)),
                    t.append('">')),
                    t.append(twig.filter.escape(this.env_, twig.attr("item"in i ? i.item : "", "title"), "light_escape", null, !0)),
                    new (e._get("interface/controls/status_chat.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        id: twig.attr("item"in i ? i.item : "", "id")
                    }))
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_users_select_wrapper_card_body"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/users_select/wrapper/card/body", t)
            }()
        }
        .apply(t, s)) || (e.exports = n)
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
        e._sentryDebugIds[t] = "c97bd70a-15e3-40e5-98ab-e745a352c188",
        e._sentryDebugIdIdentifier = "sentry-dbid-c97bd70a-15e3-40e5-98ab-e745a352c188")
    } catch (e) {}
}();
//# sourceMappingURL=92474.461dd21e6438837c21b2.js.map
