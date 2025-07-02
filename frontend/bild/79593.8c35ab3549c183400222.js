(window.webpackChunk = window.webpackChunk || []).push([[79593], {
    979593: (e, t, i) => {
        var n, a;
        n = [i(460159), i(898296), i(702348), i(591880), i(94849), i(522814), i(295165), i(440390), i(86831), i(863888)],
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
                t.prototype.render_ = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    t.append('<div class="aside aside-toggleable" id="sidebar"><div class="aside__top"><h2 class="aside__head">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "title"), "light_escape", null, !0)),
                    t.append('</h2><span id="sidebar_toggler" class="content__top__preset__filter_icon"><span class="icon icon-list filter-toggle-icon"></span></span></div><div class="aside__inner"><div class="filter__common_settings custom-scroll"><div class="filter__common_settings__list_wrapper" id="filter_presets_holder"><ul class="filter__list">'),
                    i._parent = i;
                    var a = "menu"in i ? i.menu : ""
                      , s = {
                        index0: 0,
                        index: 1,
                        first: !0
                    };
                    if (twig.countable(a)) {
                        var r = twig.count(a);
                        s.revindex0 = r - 1,
                        s.revindex = r,
                        s.length = r,
                        s.last = 1 === r
                    }
                    twig.forEach(a, (function(n, a) {
                        if (i._key = a,
                        i.item = n,
                        new (e._get("interface/mail/aside_item.twig"))(this.env_).render_(t, twig.extend({}, i, "item"in i ? i.item : "")),
                        twig.attr("item"in i ? i.item : "", "children")) {
                            var r = twig.attr("item"in i ? i.item : "", "children")
                              , l = {
                                parent: s,
                                index0: 0,
                                index: 1,
                                first: !0
                            };
                            if (twig.countable(r)) {
                                var o = twig.count(r);
                                l.revindex0 = o - 1,
                                l.revindex = o,
                                l.length = o,
                                l.last = 1 === o
                            }
                            twig.forEach(r, (function(n, a) {
                                i._key = a,
                                i.child = n,
                                i.child = twig.filter.merge({
                                    class_name: "menu__subitem"
                                }, "child"in i ? i.child : ""),
                                new (e._get("interface/mail/aside_item.twig"))(this.env_).render_(t, twig.extend({}, i, "child"in i ? i.child : "")),
                                ++l.index0,
                                ++l.index,
                                l.first = !1,
                                l.length && (--l.revindex0,
                                --l.revindex,
                                l.last = 0 === l.revindex0)
                            }
                            ), this)
                        }
                        ++s.index0,
                        ++s.index,
                        s.first = !1,
                        s.length && (--s.revindex0,
                        --s.revindex,
                        s.last = 0 === s.revindex0)
                    }
                    ), this),
                    t.append("</ul></div></div></div></div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_mail_aside"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/mail/aside", t)
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
                    e.append('<li class="filter__list__item '),
                    "selected"in t && t.selected && e.append("filter__list__item-selected filter__list__item-default"),
                    e.append(" js-filter-preset-link "),
                    "is_child"in t && t.is_child ? e.append("menu__subitem") : e.append("menu__item"),
                    e.append(" "),
                    "private"in t && t.private ? e.append("menu__subitem_personal") : e.append("menu__item__centered"),
                    e.append('" title="'),
                    e.append(twig.filter.escape(this.env_, "label"in t ? t.label : "", "light_escape", null, !0)),
                    e.append('"><div class="menu-item__inner" '),
                    "is_child"in t && t.is_child && (e.append('id="item_'),
                    e.append(twig.filter.escape(this.env_, "id"in t ? t.id : "", "light_escape", null, !0)),
                    e.append('"')),
                    e.append(">"),
                    "is_child"in t && t.is_child && e.append('<div class="menu-item__icon icon icon-mail-box"></div>'),
                    e.append('<a href="'),
                    e.append(twig.filter.escape(this.env_, "link"in t ? t.link : "", "light_escape", null, !0)),
                    e.append('" class="js-navigate-link navigate-link-nodecor"><span>'),
                    e.append(twig.filter.escape(this.env_, "label"in t ? t.label : "", "light_escape", null, !0)),
                    e.append("</span></a>"),
                    "private"in t && t.private && (e.append('<div class="menu-item__subtext js-menu-item-status">'),
                    e.append(twig.filter.escape(this.env_, twig.attr("lang"in t ? t.lang : "", "mail_privacy_mailbox_type_personal"), "light_escape", null, !0)),
                    e.append("</div>")),
                    e.append('</div><div class="menu-item__counter'),
                    "counter"in t && t.counter || e.append(" menu-item__counter_empty"),
                    e.append('">'),
                    "counter"in t && t.counter && (e.append("<span>"),
                    e.append(twig.filter.escape(this.env_, "counter"in t ? t.counter : "", "light_escape", null, !0)),
                    e.append("</span>")),
                    e.append("</div></li>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_mail_aside_item"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/mail/aside_item", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e),
                    this.setBlocks({
                        body: twig.bind(this.block_body, this),
                        body_no_items_message: twig.bind(this.block_body_no_items_message, this)
                    })
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(t) {
                    return e._get("interface/list/inner.twig")
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
                      , s = {
                        index0: 0,
                        index: 1,
                        first: !0
                    };
                    if (twig.countable(a)) {
                        var r = twig.count(a);
                        s.revindex0 = r - 1,
                        s.revindex = r,
                        s.length = r,
                        s.last = 1 === r
                    }
                    twig.forEach(a, (function(n, a) {
                        i._key = a,
                        i.item = n,
                        new (e._get("interface/list/item.twig"))(this.env_).render_(t, twig.extend({}, i, {
                            is_first: twig.attr(s, "first"),
                            is_last: twig.attr(s, "last"),
                            page: "page"in i ? i.page : "",
                            item: "item"in i ? i.item : "",
                            fields: "fields"in i ? i.fields : ""
                        })),
                        ++s.index0,
                        ++s.index,
                        s.first = !1,
                        s.length && (--s.revindex0,
                        --s.revindex,
                        s.last = 0 === s.revindex0)
                    }
                    ), this)
                }
                ,
                t.prototype.block_body_no_items_message = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    e.append('<div class="list__no-items" style="'),
                    "width"in t && t.width && (e.append("min-width: "),
                    e.append(twig.filter.escape(this.env_, "width"in t ? t.width : "", "light_escape", null, !0)),
                    e.append("px;")),
                    e.append(" "),
                    twig.filter.length(this.env_, "items"in t ? t.items : "") && e.append("display: none;"),
                    e.append('"><p style="color:#f37575;margin-bottom:5px;">'),
                    e.append(twig.filter.escape(this.env_, twig.attr("lang"in t ? t.lang : "", "list_no_threads"), "light_escape", null, !0)),
                    e.append(".</p></div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_mail_inner"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/mail/inner", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e),
                    this.setBlocks({
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
                    t.body_class_name = "mail_list list__body__holder-table",
                    t.no_reset_link = !0,
                    this.getParent(t).render_(e, t, twig.extend({}, this.getBlocks(), i))
                }
                ,
                t.prototype.block_list_top_right = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    t.append('<div class="list__body-right__top"><div class="list__top__preset js-list-top-nav__text-button_submenu" data-entity="mail"><div class="list-top-nav__text-button list-top-nav__text-button_funnel h-text-overflow" title="'),
                    t.append(twig.filter.escape(this.env_, "subtitle"in i ? i.subtitle : "", "light_escape", null, !0)),
                    t.append('">'),
                    t.append(twig.filter.escape(this.env_, "subtitle"in i ? i.subtitle : "", "light_escape", null, !0)),
                    t.append('</div><span class="mail_list__sidebar-toggler"></span></div>'),
                    new (e._get("interface/mail/search_block.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        search_placeholder: this.env_.filter("i18n", "Search and filter")
                    })),
                    t.append('<div class="list__top__actions"><a href="/mail/settings/" data-href="/mail/settings/" class="list-top-nav__button-setup js-navigate-link"><span class="button-input button-input_add"><span class="button-input-inner__text">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "settings"), "light_escape", null, !0)),
                    t.append('</span></span></a><a href="/mail/thread/new/" data-href="/mail/thread/new/" class="button-input button-input_add button-input_add-lead content-table__name-link button-input_blue '),
                    twig.filter.length(this.env_, "mailboxes"in i ? i.mailboxes : "") ? t.append("js-new-message") : t.append("button-input-disabled"),
                    t.append('" data-id="new"><span class="button-input-inner__text">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Compose"), "light_escape", null, !0)),
                    t.append("</span></a></div></div>")
                }
                ,
                t.prototype.block_list_body = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    new (e._get("interface/mail_inner/inner.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        fields: "fields"in i ? i.fields : "",
                        items: "items"in i ? i.items : ""
                    }))
                }
                ,
                t.prototype.block_list_footer = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    twig.filter.length(this.env_, "items"in i ? i.items : "") ? new (e._get("interface/list/common/footer.twig"))(this.env_).render_(t, i) : t.append('<div class="list__footer list__footer_after-no-items"></div>')
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_mail_list"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/mail/list", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
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
                    t.append('<div class="dp-sources"><div class="mailbox-title dp-sources__caption dp-sources__caption_sources">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Connected boxes"), "light_escape", null, !0)),
                    t.append('</div><div class="mailbox-list" id="mailbox-list">'),
                    t.append('</div><button class="dp-sources__button-add dp-source__loader js-add-mailbox"><div class="dp-sources__button-add-plus-wrapper"><span class="dp-sources__button-add-plus"></span></div><span class="dp-sources__button-add-text">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Add email"), "light_escape", null, !0)),
                    t.append('</span></button><div class="dp-sources__scoring"><div class="bcc-settings__container"><div class="dp-sources__caption dp-sources__caption_scoring">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Built-in smart email addresses"), "light_escape", null, !0)),
                    t.append('</div><div class="bcc-settings__description dp-sources__sources-text dp-sources__sources-text_scoring">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "In addition to full 2-way email integration, you have the option to use special amoCRM mailboxes to recieve email correspondence from clients in amoCRM. When you communicate with a client, just CC or BCC these email addresses, and the message will be visible in lead and contact cards"), "light_escape", null, !0)),
                    t.append('.<br><span class="bcc-settings__restrictions__link js-show-restrictions dp-sources__scoring-settings-button">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Why wasn’t my message attached?"), "light_escape", null, !0)),
                    t.append('</span></div><div class="bcc-settings__restrictions">'),
                    t.append(this.env_.filter("i18n", "mailbox_instruction")),
                    t.append('<span class="bcc-settings__restrictions__link js-hide-restrictions dp-sources__scoring-settings-button">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Show less"), "light_escape", null, !0)),
                    t.append('</span></div><dl class="bcc-settings__mailbox-list">'),
                    i._parent = i;
                    var a = "bcc_mailboxes"in i ? i.bcc_mailboxes : ""
                      , s = {
                        index0: 0,
                        index: 1,
                        first: !0
                    };
                    if (twig.countable(a)) {
                        var r = twig.count(a);
                        s.revindex0 = r - 1,
                        s.revindex = r,
                        s.length = r,
                        s.last = 1 === r
                    }
                    twig.forEach(a, (function(n, a) {
                        i._key = a,
                        i.item = n,
                        new (e._get("interface/mail/settings/bcc_mailbox_item.twig"))(this.env_).render_(t, twig.extend({}, i, "item"in i ? i.item : "")),
                        ++s.index0,
                        ++s.index,
                        s.first = !1,
                        s.length && (--s.revindex0,
                        --s.revindex,
                        s.last = 0 === s.revindex0)
                    }
                    ), this),
                    t.append('</dl></div></div></div><div class="mail-templates">'),
                    "is_admin"in i && i.is_admin && t.append('<div class="safety_settings__section_new"><div class="mail-templates__container" id="mail-templates__container"></div></div><div class="safety_settings__section_new"><div class="mail-ext-addresses__container" id="mail-ext-addresses__container"></div></div>'),
                    t.append('<div><div class="mail-signatures__container" id="mail-signatures__container"></div></div></div>')
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_mail_mail_more"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/mail/mail_more", t)
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
                t.prototype.block_summary = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    !("summary"in t) || !t.summary || "no_search_summary"in t && t.no_search_summary || e.append('<div class="list-top-search__summary" id="list-top-search__summary"></div>')
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_mail_search_block"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/mail/search_block", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e),
                    this.setBlocks({
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
                    t.list_page_holder_class_name = "list-mail-settings",
                    this.getParent(t).render_(e, t, twig.extend({}, this.getBlocks(), i))
                }
                ,
                t.prototype.block_list_top_right = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    e.append('<div class="list__body-right__top digital-pipeline__body-right__top"><div class="list__top__actions list__top__actions_plain digital-pipeline__top-actions"><div class="right-button"><a href="/mail/inbox/" data-href="/mail/inbox/" class="list-top-nav__button-setup js-navigate-link"><span class="button-input button-input_add"><span class="button-input-inner__text">'),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Back"), "light_escape", null, !0)),
                    e.append("</span></span></a></div></div></div>")
                }
                ,
                t.prototype.block_list_body = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    new (e._get("interface/mail/mail_more.twig"))(this.env_).render_(t, i)
                }
                ,
                t.prototype.block_list_footer = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    e.append('<div class="digital-pipeline__hider"></div>')
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_mail_settings_inner"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/mail/settings_inner", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
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
                    t.main_class_name = "users-select__body__item",
                    "head" == ("type"in t ? t.type : "") && (t.main_class_name = "users-select__head-title users-select__head-title_linking_up"),
                    e.append('<div class="'),
                    e.append(twig.filter.escape(this.env_, "main_class_name"in t ? t.main_class_name : "", "light_escape", null, !0)),
                    e.append(' pipeline-unsorted__linking_up_modal__suggest_item" data-type="'),
                    e.append(twig.filter.escape(this.env_, "type"in t ? t.type : "", "light_escape", null, !0)),
                    e.append('">'),
                    "head" == ("type"in t ? t.type : "") ? (e.append("<span>"),
                    e.append(twig.filter.escape(this.env_, "name"in t ? t.name : "", "light_escape", null, !0)),
                    e.append("</span>")) : (e.append('<div class="multisuggest__suggest-item pipeline-unsorted__linking_up_modal__suggest_linked"><span class="multisuggest__suggest-item-info">'),
                    e.append(twig.filter.escape(this.env_, "name"in t ? t.name : "", "light_escape", null, !0)),
                    e.append("</span>"),
                    this.env_.filter("contact_name", "contact_name"in t ? t.contact_name : "") && (e.append(',&nbsp;<span class="multisuggest__suggest-item-info" style="color:#999">'),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("contact_name", "contact_name"in t ? t.contact_name : ""), "light_escape", null, !0)),
                    e.append("</span>")),
                    "company_name"in t && t.company_name && (e.append(',&nbsp;<span class="multisuggest__suggest-item-info" style="color:#999">'),
                    e.append(twig.filter.escape(this.env_, "company_name"in t ? t.company_name : "", "light_escape", null, !0)),
                    e.append("</span>")),
                    e.append("</div>")),
                    e.append("</div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_mail_suggest"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/mail/suggest", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
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
                    "count"in t && t.count && (e.append('<div class="list__footer__total list__footer__total-threads" id="list_summary" data-template="leads">'),
                    e.append(twig.filter.escape(this.env_, "count"in t ? t.count : "", "light_escape", null, !0)),
                    e.append(" "),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("numeral", twig.attr("lang"in t ? t.lang : "", "summary_entities"), "count"in t ? t.count : ""), "light_escape", null, !0)),
                    e.append("</div>"))
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_mail_common_summary"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/mail/common/summary", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
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
                    t.append('<div class="filter__holder custom-scroll" id="sidebar">'),
                    "filter"in i && i.filter) {
                        t.append('<ul class="filter__list js-filter-list" id="filter_list">'),
                        i.first_exists = !1,
                        i._parent = i;
                        var a = "filter"in i ? i.filter : ""
                          , s = {
                            index0: 0,
                            index: 1,
                            first: !0
                        };
                        if (twig.countable(a)) {
                            var r = twig.count(a);
                            s.revindex0 = r - 1,
                            s.revindex = r,
                            s.length = r,
                            s.last = 1 === r
                        }
                        twig.forEach(a, (function(n, a) {
                            if (i.key = a,
                            i.item = n,
                            new (e._get("interface/mail/aside_item.twig"))(this.env_).render_(t, twig.extend({}, i, "item"in i ? i.item : "")),
                            twig.attr("item"in i ? i.item : "", "children")) {
                                var r = twig.attr("item"in i ? i.item : "", "children")
                                  , l = {
                                    parent: s,
                                    index0: 0,
                                    index: 1,
                                    first: !0
                                };
                                if (twig.countable(r)) {
                                    var o = twig.count(r);
                                    l.revindex0 = o - 1,
                                    l.revindex = o,
                                    l.length = o,
                                    l.last = 1 === o
                                }
                                twig.forEach(r, (function(n, a) {
                                    i._key = a,
                                    i.child = n,
                                    new (e._get("interface/mail/aside_item.twig"))(this.env_).render_(t, twig.extend({}, i, "child"in i ? i.child : "")),
                                    ++l.index0,
                                    ++l.index,
                                    l.first = !1,
                                    l.length && (--l.revindex0,
                                    --l.revindex,
                                    l.last = 0 === l.revindex0)
                                }
                                ), this)
                            }
                            i.first_exists = !0,
                            ++s.index0,
                            ++s.index,
                            s.first = !1,
                            s.length && (--s.revindex0,
                            --s.revindex,
                            s.last = 0 === s.revindex0)
                        }
                        ), this),
                        t.append("</ul>")
                    }
                    t.append("</div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_mail_filter_complex"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/mail/filter/complex", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
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
                    e.append('<div class="list-row__cell list-row__cell-plug js-list-row__cell list-row__cell-template-'),
                    e.append(twig.filter.escape(this.env_, twig.attr("field"in t ? t.field : "", "template"), "light_escape", null, !0)),
                    e.append(" list-row__cell-"),
                    e.append(twig.filter.escape(this.env_, twig.attr("field"in t ? t.field : "", "code"), "light_escape", null, !0)),
                    e.append('" '),
                    twig.attr("field"in t ? t.field : "", "hide") && e.append('style=" display: none "'),
                    e.append('><div class="content-table__item__inner  item__no-after " style="width: 100%; padding: 10px 0 10px 10px;"><div class="subject-cell__text" style="width: 100%"><div class=\'dashboard_contacts_plug__item__line\' style="height: 10px; width:90%; background: var(--palette-animation-plug-background-gradient-default)"></div></div></div></div>')
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_mail_plug_cell"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/mail/plug/cell", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
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
                    "not_show_chbx"in i && i.not_show_chbx || new (e._get("interface/mail/plug/id.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        id: twig.attr("item"in i ? i.item : "", "id")
                    })),
                    i._parent = i;
                    var a = "fields"in i ? i.fields : ""
                      , s = {
                        index0: 0,
                        index: 1,
                        first: !0
                    };
                    twig.forEach(a, (function(n, a) {
                        i._key = a,
                        i.field = n,
                        twig.attr("field"in i ? i.field : "", "shown") && (new (e._get("interface/mail/plug/cell.twig"))(this.env_).render_(t, twig.extend({}, i, {
                            item: "item"in i ? i.item : "",
                            field: "field"in i ? i.field : "",
                            is_blue: 2 == twig.attr(s, "index")
                        })),
                        ++s.index0,
                        ++s.index,
                        s.first = !1)
                    }
                    ), this)
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_mail_plug_cells"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/mail/plug/cells", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
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
                      , s = {
                        index0: 0,
                        index: 1,
                        first: !0
                    };
                    twig.forEach(a, (function(e, n) {
                        i._key = n,
                        i.field = e,
                        twig.attr("field"in i ? i.field : "", "shown") && (0 == twig.attr(s, "index0") && (i.highlight_id_cell = twig.attr("field"in i ? i.field : "", "filtered")),
                        t.append(" "),
                        ++s.index0,
                        ++s.index,
                        s.first = !1)
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
                    return "interface_mail_plug_id"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/mail/plug/id", t)
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
                t.prototype.block_body = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    i._parent = i;
                    var a = twig.range(0, "fake_items_count"in i ? i.fake_items_count : "")
                      , s = {
                        index0: 0,
                        index: 1,
                        first: !0
                    };
                    if (twig.countable(a)) {
                        var r = twig.count(a);
                        s.revindex0 = r - 1,
                        s.revindex = r,
                        s.length = r,
                        s.last = 1 === r
                    }
                    twig.forEach(a, (function(n, a) {
                        i._key = a,
                        i.i = n,
                        new (e._get("interface/mail/plug/item.twig"))(this.env_).render_(t, twig.extend({}, i, {
                            is_first: twig.attr(s, "first"),
                            is_last: twig.attr(s, "last"),
                            fields: "fields"in i ? i.fields : "",
                            index: twig.attr(s, "index0")
                        })),
                        ++s.index0,
                        ++s.index,
                        s.first = !1,
                        s.length && (--s.revindex0,
                        --s.revindex,
                        s.last = 0 === s.revindex0)
                    }
                    ), this)
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_mail_plug_inner"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/mail/plug/inner", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
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
                    new (e._get("interface/mail/plug/cells.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        fields: "fields"in i ? i.fields : "",
                        not_show_chbx: 0
                    })),
                    t.append("</div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_mail_plug_item"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/mail/plug/item", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e),
                    this.setBlocks({
                        static: twig.bind(this.block_static, this),
                        list_top_right: twig.bind(this.block_list_top_right, this),
                        list_body: twig.bind(this.block_list_body, this),
                        list_footer: twig.bind(this.block_list_footer, this)
                    })
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(t) {
                    return e._get("interface/mail/list.twig")
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    t.body_class_name = "mail_list",
                    t.no_resize = !0,
                    t.no_reset_link = !0,
                    this.getParent(t).render_(e, t, twig.extend({}, this.getBlocks(), i))
                }
                ,
                t.prototype.block_static = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    e.append(twig.filter.escape(this.env_, this.env_.invoke("inject_static", ["mail_page.php"], this), "light_escape", null, !0))
                }
                ,
                t.prototype.block_list_top_right = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    e.append('<div class="list__body-right__top"><div class="list__top__inner clearfix '),
                    ("rights_entity_count"in t ? t.rights_entity_count : "") >= 2 && e.append("list__top-two-entities"),
                    e.append('"><div class="list__top__preset"><h2 class="content__top__preset__caption">'),
                    "is_plug"in t && t.is_plug ? e.append("<div class='dashboard_contacts_plug__item__line' style=\"width: 136px; height: 7px; margin-top: -5px;\"></div>") : (e.append('<span class="content__top__preset__caption__list__item js-list-caption-link content__top__preset__caption__list__item-active">'),
                    e.append(twig.filter.escape(this.env_, twig.attr("lang"in t ? t.lang : "", "subtitle"), "light_escape", null, !0)),
                    e.append("</span>")),
                    e.append("</h2></div></div></div>")
                }
                ,
                t.prototype.block_list_body = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    new (e._get("interface/mail/plug/inner.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        fields: "fields"in i ? i.fields : "",
                        items: "items"in i ? i.items : ""
                    }))
                }
                ,
                t.prototype.block_list_footer = function(e, t, i) {
                    i = void 0 === i ? {} : i
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_mail_plug_list"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/mail/plug/list", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
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
                    e.append('<div class="modal-body__inner mail-thread__modal-body-inner"><span class="modal-body__close"><span class="icon icon-modal-close"></span></span><h2 class="mail-thread__modal-title modal-body__caption head_2">'),
                    e.append(twig.filter.escape(this.env_, twig.filter.capitalize(this.env_, "title"in t ? t.title : ""), "light_escape", null, !0)),
                    e.append('<span class="mail-thread__modal-title-counter"></span></h2><div class="add-contact-view__subview-container"></div></div>')
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_mail_modal_add_contacts"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/mail/modal/add_contacts", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
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
                    e.append('<div class="mail-action__template-attach-item '),
                    "failed"in t && t.failed && e.append("mail-action__template-attach-item_failed"),
                    e.append(' js-attach-item" data-id="'),
                    e.append(twig.filter.escape(this.env_, "id"in t ? t.id : "", "light_escape", null, !0)),
                    e.append('"><span class="mail-action__template-attach-item-file h-text-overflow">'),
                    e.append(twig.filter.escape(this.env_, "filename"in t ? t.filename : "", "light_escape", null, !0)),
                    "loading"in t && t.loading ? e.append('<span class="mail-action__template-attach-item-spinner"><span class="spinner-icon"></span></span>') : e.append('<span class="mail-action__template-attach-item-remove js-attach-remove">×</span>'),
                    e.append("</span></div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_mail_modal_attachment"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/mail/modal/attachment", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
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
                    "text"in i && i.text || (i.text = twig.attr("lang"in i ? i.lang : "", "modal_error_caption")),
                    t.append('<div class="modal-body__inner modal-body__inner-error js-modal-error"><span class="modal-body__close"><span class="icon icon-modal-close"></span></span><h2 class="modal-body__caption head_2 modal-body__caption-error">'),
                    t.append(twig.filter.escape(this.env_, "text"in i ? i.text : "", "light_escape", null, !0)),
                    t.append("</h2>"),
                    "no_retry"in i && i.no_retry || new (e._get("interface/controls/button.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        text: twig.attr("lang"in i ? i.lang : "", "modal_error_btn"),
                        class_name: "js-modal-try-again js-modal-accept"
                    })),
                    t.append("</div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_mail_modal_connection_error"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/mail/modal/connection_error", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
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
                    i.button_text = ("button_text_start"in i ? i.button_text_start : "") + " " + ("count"in i ? i.count : "") + " " + this.env_.filter("numeral", "button_text_end"in i ? i.button_text_end : "", "count"in i ? i.count : ""),
                    t.append('<div class="contacts-list__body">'),
                    t.append('<div class="contacts-list__checkbox-wrapper">'),
                    new (e._get("interface/controls/checkbox.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        id: "contact-list__checkbox-all",
                        class: "js-contact-checkbox",
                        text: ("all_contacts"in i ? i.all_contacts : "") + " (" + ("count"in i ? i.count : "") + ")"
                    })),
                    t.append("</div>"),
                    i._parent = i;
                    var a = "items"in i ? i.items : ""
                      , s = {
                        index0: 0,
                        index: 1,
                        first: !0
                    };
                    if (twig.countable(a)) {
                        var r = twig.count(a);
                        s.revindex0 = r - 1,
                        s.revindex = r,
                        s.length = r,
                        s.last = 1 === r
                    }
                    twig.forEach(a, (function(n, a) {
                        i._key = a,
                        i.item = n,
                        twig.attr("item"in i ? i.item : "", "email") ? i.email = "&lt;" + twig.attr("item"in i ? i.item : "", "email") + "&gt;" : i.email = "",
                        i.name = twig.attr("item"in i ? i.item : "", "name", void 0, void 0, !0) ? twig.filter.def(twig.attr("item"in i ? i.item : "", "name"), twig.attr("item"in i ? i.item : "", "email")) : twig.attr("item"in i ? i.item : "", "email"),
                        t.append('<div class="contacts-list__checkbox-wrapper">'),
                        new (e._get("interface/controls/checkbox.twig"))(this.env_).render_(t, twig.extend({}, i, {
                            id: "contact-list__checkbox-" + twig.attr("item"in i ? i.item : "", "address_id"),
                            class_name: "js-contact-checkbox",
                            text: "name"in i ? i.name : "",
                            note_text: "email"in i ? i.email : "",
                            value: twig.attr("item"in i ? i.item : "", "address_id"),
                            checked: twig.attr("item"in i ? i.item : "", "checked")
                        })),
                        t.append("</div>"),
                        ++s.index0,
                        ++s.index,
                        s.first = !1,
                        s.length && (--s.revindex0,
                        --s.revindex,
                        s.last = 0 === s.revindex0)
                    }
                    ), this),
                    t.append('</div><div class="contacts-list__footer">'),
                    new (e._get("interface/controls/button.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        text: "button_text"in i ? i.button_text : "",
                        id: "add-contacts-create-button",
                        class_name: "",
                        disabled: !0
                    })),
                    t.append("</div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_mail_modal_contacts_list_view"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/mail/modal/contacts_list_view", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
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
                    e.append('<div id="mail-ext-addresses__main-wrapper" class="mail-ext-addresses__main-wrapper"><div class="safety_settings__section_head_new"><div class="safety_settings__section_head_new_title">'),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "List of exceptions"), "light_escape", null, !0)),
                    e.append('</div></div><div class="safety_settings__section_new_text"><p>'),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "All mail from addresses on this list will not be automatically included when merged and grouped into a chain"), "light_escape", null, !0)),
                    e.append('</p></div><div class="mail-ext-addresses__input" id="mail-ext-addresses__input"></div></div>')
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_mail_modal_ext_addresses"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/mail/modal/ext_addresses", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
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
                    t.step = twig.attr("lang"in t ? t.lang : "", "mailbox_settings_two_step_image_title"),
                    e.append("<div><p>"),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "mailbox_gmail_instruction_text1"), "light_escape", null, !0)),
                    e.append('</p><h2 class="gmail-modal-instruction__heading-2">'),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "mailbox_gmail_instruction_text2"), "light_escape", null, !0)),
                    e.append('</h2><img src="'),
                    e.append(twig.filter.escape(this.env_, "images_tmp"in t ? t.images_tmp : "", "light_escape", null, !0)),
                    e.append('1.png" alt="'),
                    e.append(twig.filter.escape(this.env_, "step"in t ? t.step : "", "light_escape", null, !0)),
                    e.append(' 1" title="'),
                    e.append(twig.filter.escape(this.env_, "step"in t ? t.step : "", "light_escape", null, !0)),
                    e.append(' 1"><p>'),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "mailbox_gmail_instruction_text3"), "light_escape", null, !0)),
                    e.append('</p><img src="'),
                    e.append(twig.filter.escape(this.env_, "images_tmp"in t ? t.images_tmp : "", "light_escape", null, !0)),
                    e.append('2.png" alt="'),
                    e.append(twig.filter.escape(this.env_, "step"in t ? t.step : "", "light_escape", null, !0)),
                    e.append(' 2" title="'),
                    e.append(twig.filter.escape(this.env_, "step"in t ? t.step : "", "light_escape", null, !0)),
                    e.append(' 2"><p>'),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "mailbox_gmail_instruction_text4"), "light_escape", null, !0)),
                    e.append('</p><img src="'),
                    e.append(twig.filter.escape(this.env_, "images_tmp"in t ? t.images_tmp : "", "light_escape", null, !0)),
                    e.append('3.png" alt="'),
                    e.append(twig.filter.escape(this.env_, "step"in t ? t.step : "", "light_escape", null, !0)),
                    e.append(' 3" title="'),
                    e.append(twig.filter.escape(this.env_, "step"in t ? t.step : "", "light_escape", null, !0)),
                    e.append(' 3"><h2 class="gmail-modal-instruction__heading-2">'),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "mailbox_gmail_instruction_text5"), "light_escape", null, !0)),
                    e.append('</h2><img src="'),
                    e.append(twig.filter.escape(this.env_, "images_tmp"in t ? t.images_tmp : "", "light_escape", null, !0)),
                    e.append('4.png" alt="'),
                    e.append(twig.filter.escape(this.env_, "step"in t ? t.step : "", "light_escape", null, !0)),
                    e.append(' 4" title="'),
                    e.append(twig.filter.escape(this.env_, "step"in t ? t.step : "", "light_escape", null, !0)),
                    e.append(' 4"><p>'),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "mailbox_gmail_instruction_text6"), "light_escape", null, !0)),
                    e.append('</p><img src="'),
                    e.append(twig.filter.escape(this.env_, "images_tmp"in t ? t.images_tmp : "", "light_escape", null, !0)),
                    e.append('5.png" alt="'),
                    e.append(twig.filter.escape(this.env_, "step"in t ? t.step : "", "light_escape", null, !0)),
                    e.append(' 5" title="'),
                    e.append(twig.filter.escape(this.env_, "step"in t ? t.step : "", "light_escape", null, !0)),
                    e.append(' 5"><p>'),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "mailbox_gmail_instruction_text7"), "light_escape", null, !0)),
                    e.append('</p><img src="'),
                    e.append(twig.filter.escape(this.env_, "images_tmp"in t ? t.images_tmp : "", "light_escape", null, !0)),
                    e.append('6.png" alt="'),
                    e.append(twig.filter.escape(this.env_, "step"in t ? t.step : "", "light_escape", null, !0)),
                    e.append(' 6" title="'),
                    e.append(twig.filter.escape(this.env_, "step"in t ? t.step : "", "light_escape", null, !0)),
                    e.append(' 6"><p>'),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "mailbox_gmail_instruction_text8"), "light_escape", null, !0)),
                    e.append('</p><h2 class="gmail-modal-instruction__heading-2">'),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "mailbox_gmail_instruction_text9"), "light_escape", null, !0)),
                    e.append("</h2><p>"),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "mailbox_gmail_instruction_text10"), "light_escape", null, !0)),
                    e.append('</p><img src="'),
                    e.append(twig.filter.escape(this.env_, "images_tmp"in t ? t.images_tmp : "", "light_escape", null, !0)),
                    e.append('7.png" alt="'),
                    e.append(twig.filter.escape(this.env_, "step"in t ? t.step : "", "light_escape", null, !0)),
                    e.append(' 7" title="'),
                    e.append(twig.filter.escape(this.env_, "step"in t ? t.step : "", "light_escape", null, !0)),
                    e.append(' 7"><p>'),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "mailbox_gmail_instruction_text11"), "light_escape", null, !0)),
                    e.append('</p><img src="'),
                    e.append(twig.filter.escape(this.env_, "images_tmp"in t ? t.images_tmp : "", "light_escape", null, !0)),
                    e.append('8.png" alt="'),
                    e.append(twig.filter.escape(this.env_, "step"in t ? t.step : "", "light_escape", null, !0)),
                    e.append(' 8" title="'),
                    e.append(twig.filter.escape(this.env_, "step"in t ? t.step : "", "light_escape", null, !0)),
                    e.append(' 8"><img src="'),
                    e.append(twig.filter.escape(this.env_, "images_tmp"in t ? t.images_tmp : "", "light_escape", null, !0)),
                    e.append('9.png" alt="'),
                    e.append(twig.filter.escape(this.env_, "step"in t ? t.step : "", "light_escape", null, !0)),
                    e.append(' 9" title="'),
                    e.append(twig.filter.escape(this.env_, "step"in t ? t.step : "", "light_escape", null, !0)),
                    e.append(' 9"><p>'),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "mailbox_gmail_instruction_text12"), "light_escape", null, !0)),
                    e.append('</p><img src="'),
                    e.append(twig.filter.escape(this.env_, "images_tmp"in t ? t.images_tmp : "", "light_escape", null, !0)),
                    e.append('10.png" alt="'),
                    e.append(twig.filter.escape(this.env_, "step"in t ? t.step : "", "light_escape", null, !0)),
                    e.append(' 10" title="'),
                    e.append(twig.filter.escape(this.env_, "step"in t ? t.step : "", "light_escape", null, !0)),
                    e.append(' 10"><p>'),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "mailbox_gmail_instruction_text13"), "light_escape", null, !0)),
                    e.append('</p><img src="'),
                    e.append(twig.filter.escape(this.env_, "images_tmp"in t ? t.images_tmp : "", "light_escape", null, !0)),
                    e.append('11.png" alt="'),
                    e.append(twig.filter.escape(this.env_, "step"in t ? t.step : "", "light_escape", null, !0)),
                    e.append(' 11" title="'),
                    e.append(twig.filter.escape(this.env_, "step"in t ? t.step : "", "light_escape", null, !0)),
                    e.append(' 11"></div>')
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_mail_modal_gmail_instruction"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/mail/modal/gmail_instruction", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
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
                    t.append('<h2 class="mailbox-domain-modal__title">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Connecting"), "light_escape", null, !0)),
                    t.append(" "),
                    t.append(twig.filter.escape(this.env_, "domain"in i ? i.domain : "", "light_escape", null, !0)),
                    t.append("</h2>"),
                    "show_limit_message"in i && i.show_limit_message && (t.append('<p class="mailbox-domain-modal__desc">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "The volume of emails you send via amoCRM exceeds the limit for unconnected domains. To remove this restriction and continue sending messages, you must connect the domain."), "light_escape", null, !0)),
                    t.append("</p>")),
                    t.append('<p class="mailbox-domain-modal__desc">'),
                    t.append(this.env_.filter("i18n", "SPF, DKIM are the methods used to authenticate the sender. AmoCRM does not require the addition this records. If you plug in the domain, you can send more letters, via amoCRM. Also, for sent letters, the reputation of your domain will be taken into account, which reduces the probability of getting letters in spam.")),
                    t.append('</p><p class="mailbox-domain-modal__desc">'),
                    t.append(this.env_.filter("i18n", "DKIM (Domain Keys Identified Mail) is a digital signature used by email services to identify and classify legitimate e-mail. When sending a message, amoCRM will add a digital signature associated with your corporate domain. The signature is automatically checked on the recipient's side.")),
                    t.append('</p><p class="mailbox-domain-modal__desc">'),
                    t.append(this.env_.filter("i18n", "SPF (Sender Policy Framework) allows you to limit the list of servers from which you can send messages on behalf of your domain.")),
                    t.append('</p><p class="mailbox-domain-modal__desc">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "You can add SPF and DKIM records to the control panel on the site of the company that provides you with DNS hosting services or contact your domain administrator."), "light_escape", null, !0)),
                    t.append('</p><p class="mailbox-domain-modal__desc">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "In order to allow amoCRM to send emails on behalf of your domain, you need to add the following DNS records:"), "light_escape", null, !0)),
                    t.append("</p>"),
                    i._parent = i;
                    var a = "dns_records"in i ? i.dns_records : "";
                    twig.forEach(a, (function(e, n) {
                        i._key = n,
                        i.dns_record = e,
                        t.append('<div class="ddr"><div class="ddr__domain-type-wrapper"><div class="ddr__type"><span class="ddr__type__name">'),
                        t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Type"), "light_escape", null, !0)),
                        t.append(': </span><span class="ddr__type__value">'),
                        t.append(twig.filter.escape(this.env_, twig.attr("dns_record"in i ? i.dns_record : "", "type"), "light_escape", null, !0)),
                        t.append('</span></div><div class="ddr__domain"><span class="ddr__domain__name">'),
                        t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Domain"), "light_escape", null, !0)),
                        t.append(': </span><span class="ddr__domain__value">'),
                        t.append(twig.filter.escape(this.env_, twig.attr("dns_record"in i ? i.dns_record : "", "domain"), "light_escape", null, !0)),
                        t.append('</span></div><span class="ddr__domain-copy js-copy-value"title="'),
                        t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Copy"), "light_escape", null, !0)),
                        t.append('"data-copied="'),
                        t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Copied"), "light_escape", null, !0)),
                        t.append('"data-clipboard-text="'),
                        t.append(twig.filter.escape(this.env_, twig.attr("dns_record"in i ? i.dns_record : "", "domain"), "light_escape", null, !0)),
                        t.append('"><svg class="svg-icon svg-common--copy-dims"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#common--copy"></use></svg></span></div><div class="ddr__content"><p class="ddr__content__name">'),
                        t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Value"), "light_escape", null, !0)),
                        t.append('</p><p class="ddr__content__value" title="'),
                        t.append(twig.filter.escape(this.env_, twig.attr("dns_record"in i ? i.dns_record : "", "value"), "light_escape", null, !0)),
                        t.append('"> '),
                        t.append(twig.filter.escape(this.env_, twig.attr("dns_record"in i ? i.dns_record : "", "value"), "light_escape", null, !0)),
                        t.append('</p><div class="ddr__content__buttons"><span class="copy-dns-record js-copy-value"title="'),
                        t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Copy"), "light_escape", null, !0)),
                        t.append('"data-copied="'),
                        t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Copied"), "light_escape", null, !0)),
                        t.append('"data-clipboard-text="'),
                        t.append(twig.filter.escape(this.env_, twig.attr("dns_record"in i ? i.dns_record : "", "value"), "light_escape", null, !0)),
                        t.append('"><svg class="svg-icon svg-common--copy-dims"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#common--copy"></use></svg></span></div></div></div>')
                    }
                    ), this),
                    t.append('<p class="mailbox-domain-modal__desc">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Please note that the publication of DNS records may take up to 48 hours."), "light_escape", null, !0)),
                    t.append('</p><div class="domain-check">'),
                    new (e._get("interface/controls/button.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        id: "domain-button__check",
                        class_name: "button-input_blue",
                        text: this.env_.filter("i18n", "Check")
                    })),
                    t.append('<div class="domain-check__result"></div></div><span class="modal-body__close"><span class="icon icon-modal-close"></span></span>')
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_mail_modal_mail_domain_modal"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/mail/modal/mail_domain_modal", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
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
                    t.append('<div class="mail-suggest '),
                    t.append(twig.filter.escape(this.env_, "class_name"in i ? i.class_name : "", "light_escape", null, !0)),
                    t.append('" data-type="'),
                    t.append(twig.filter.escape(this.env_, "data_type"in i ? i.data_type : "", "light_escape", null, !0)),
                    t.append('"><ul class="multiple-suggest__list clearfix">'),
                    "label_flag"in i && i.label_flag && (t.append('<li class="multiple-suggest__list-li-label"><span class="multiple-suggest__list-li-label-text">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "cc:"), "light_escape", null, !0)),
                    t.append("</span></li>")),
                    "mailboxes"in i && i.mailboxes) {
                        i._parent = i;
                        var a = "mailboxes"in i ? i.mailboxes : ""
                          , s = {
                            index0: 0,
                            index: 1,
                            first: !0
                        };
                        if (twig.countable(a)) {
                            var r = twig.count(a);
                            s.revindex0 = r - 1,
                            s.revindex = r,
                            s.length = r,
                            s.last = 1 === r
                        }
                        twig.forEach(a, (function(n, a) {
                            i._key = a,
                            i.m = n,
                            new (e._get("interface/mail/modal/mailbox_suggest_item.twig"))(this.env_).render_(t, twig.extend({}, i, "m"in i ? i.m : "")),
                            ++s.index0,
                            ++s.index,
                            s.first = !1,
                            s.length && (--s.revindex0,
                            --s.revindex,
                            s.last = 0 === s.revindex0)
                        }
                        ), this)
                    }
                    t.append('<li class="mail-suggest__list__item multiple-suggest__list__input">'),
                    new (e._get("interface/controls/suggest.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        placeholder: "placeholder"in i ? i.placeholder : "",
                        input_class_name: "input_class_name"in i ? i.input_class_name : "",
                        type: "email",
                        styled_input: !0
                    })),
                    t.append('</li><div class="validation-tip js-error-tooltip">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "Incorrect email address", void 0, "array"), "light_escape", null, !0)),
                    t.append('</div></ul><ul class="multiple-suggest__suggest custom-scroll"></ul></div>')
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_mail_modal_mailbox_suggest"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/mail/modal/mailbox_suggest", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
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
                    t.text = "",
                    "name"in t && t.name && (t.text = ("name"in t ? t.name : "") + " "),
                    t.text = ("text"in t ? t.text : "") + ("email"in t ? t.email : ""),
                    "name"in t && t.name && (t.text = Number("text"in t ? t.text : "") + Number(")")),
                    e.append('<li class="mail-suggest__list__item multiple-suggest__list-item '),
                    "invalid"in t && t.invalid && e.append("mail-suggest__list__item_invalid"),
                    e.append('" data-id="'),
                    e.append(twig.filter.escape(this.env_, "id"in t ? t.id : "", "light_escape", null, !0)),
                    e.append('" tabindex="0"><span class="tag" title="'),
                    e.append(twig.filter.escape(this.env_, "email"in t ? t.email : "", "light_escape", null, !0)),
                    e.append('">'),
                    e.append(twig.filter.escape(this.env_, "name"in t && t.name ? "name"in t ? t.name : "" : "email"in t ? t.email : "", "light_escape", null, !0)),
                    e.append('</span><svg class="tag_close" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px"><path style="line-height:normal;text-indent:0;text-align:start;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000;text-transform:none;block-progression:tb;isolation:auto;mix-blend-mode:normal" d="M 4.9902344 3.9902344 A 1.0001 1.0001 0 0 0 4.2929688 5.7070312 L 10.585938 12 L 4.2929688 18.292969 A 1.0001 1.0001 0 1 0 5.7070312 19.707031 L 12 13.414062 L 18.292969 19.707031 A 1.0001 1.0001 0 1 0 19.707031 18.292969 L 13.414062 12 L 19.707031 5.7070312 A 1.0001 1.0001 0 0 0 18.980469 3.9902344 A 1.0001 1.0001 0 0 0 18.292969 4.2929688 L 12 10.585938 L 5.7070312 4.2929688 A 1.0001 1.0001 0 0 0 4.9902344 3.9902344 z" font-weight="400" font-family="sans-serif" white-space="normal" overflow="visible"/></svg></li>')
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_mail_modal_mailbox_suggest_item"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/mail/modal/mailbox_suggest_item", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
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
                    t.append('<div class="modal-body__inner">'),
                    t.append('<div class="mail-action__header"><div class="template-top-name__name-wrapper"><div class="template-top-name__input-wrapper js-card-name clearfix"><div class="template-top-name__input-wrapper_inner">'),
                    "add" == ("mode"in i ? i.mode : "") ? i.placeholder = twig.attr("lang"in i ? i.lang : "", "mail_template_name_new") : (i.placeholder = twig.attr("lang"in i ? i.lang : "", "mail_template_name"),
                    i.template_name = twig.attr("params"in i ? i.params : "", "name")),
                    t.append('<input name="name" class="template-top-name__input" id="template-name" type="text" placeholder="'),
                    t.append(twig.filter.escape(this.env_, "placeholder"in i ? i.placeholder : "", "light_escape", null, !0)),
                    t.append('" value="'),
                    t.append(twig.filter.escape(this.env_, "template_name"in i ? i.template_name : "", "light_escape", null, !0)),
                    t.append('" maxlength="250" autocomplete="off"></div></div></div><div class="mail-action__top-controls">'),
                    new (e._get("interface/controls/cancel_button.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        text: twig.attr("lang"in i ? i.lang : "", "button_text_close")
                    })),
                    new (e._get("interface/controls/button.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        text: twig.attr("lang"in i ? i.lang : "", "button_save"),
                        class_name: "js-modal-accept js-button-with-loader"
                    })),
                    t.append("</div></div>"),
                    t.append('<div class="mail-action__settings">'),
                    "edit" == ("mode"in i ? i.mode : "") ? i.template_subject = twig.attr("params"in i ? i.params : "", "subject") : i.template_subject = "",
                    new (e._get("interface/controls/input.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        placeholder: twig.attr("lang"in i ? i.lang : "", "mail_template_caption_subject"),
                        style: {
                            width: "100%"
                        },
                        name: "subject",
                        id: "template-subject",
                        value: "template_subject"in i ? i.template_subject : ""
                    })),
                    t.append("</div>"),
                    t.append('<div class="mail-action__template-content" data-dnd-before="'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "notes_dnd_title_before"), "light_escape", null, !0)),
                    t.append('" data-dnd-after="'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "notes_dnd_title_after"), "light_escape", null, !0)),
                    t.append('"><textarea id="template-content" class="mail-action__template-message" name="content"></textarea><div class="mail-action__template-attachments"><div class="mail-action__template-attachments-inner js-attachments">'),
                    i._parent = i;
                    var a = twig.attr("params"in i ? i.params : "", "attachments")
                      , s = {
                        index0: 0,
                        index: 1,
                        first: !0
                    };
                    if (twig.countable(a)) {
                        var r = twig.count(a);
                        s.revindex0 = r - 1,
                        s.revindex = r,
                        s.length = r,
                        s.last = 1 === r
                    }
                    twig.forEach(a, (function(n, a) {
                        i._key = a,
                        i.attach = n,
                        new (e._get("interface/mail/modal/attachment.twig"))(this.env_).render_(t, twig.extend({}, i, {
                            id: twig.attr("attach"in i ? i.attach : "", "id"),
                            filename: twig.attr("attach"in i ? i.attach : "", "name")
                        })),
                        ++s.index0,
                        ++s.index,
                        s.first = !1,
                        s.length && (--s.revindex0,
                        --s.revindex,
                        s.last = 0 === s.revindex0)
                    }
                    ), this),
                    t.append('</div><div class="mail-action__template-attachments-new"><label for="mail-attach-filenew" class="mail-action__template-attachments-label"><svg class="svg-icon svg-notes--feed-attach-dims"><use xlink:href="#notes--feed-attach"></use></svg>'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "note_attach_files"), "light_escape", null, !0)),
                    t.append('</label><input type="file" id="mail-attach-filenew" class="js-form-changes-skip hidden" multiple tabindex="-1" name="files" /></div></div></div>'),
                    t.append('<div class="mail-action__settings_footer">'),
                    new (e._get("interface/mail/modal/markers.twig"))(this.env_).render_(t, twig.extend({}, i, "markers"in i ? i.markers : "")),
                    t.append('<div class="mail-action__remove-controls">'),
                    new (e._get("interface/controls/button.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        text: twig.attr("lang"in i ? i.lang : "", "mail_template_action_remove"),
                        class_name: "js-template-remove",
                        id: "js-template-remove",
                        icon_class_name: "icon-delete-trash"
                    })),
                    t.append('</div></div><div class="mail-action__settings_content-html">'),
                    new (e._get("interface/controls/checkbox.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        id: "template-content-html",
                        name: "content_html",
                        checked: twig.attr("params"in i ? i.params : "", "content_html"),
                        text: twig.attr("lang"in i ? i.lang : "", "write_mail_html_on")
                    })),
                    t.append("</div></div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_mail_modal_manage_templates"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/mail/modal/manage_templates", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
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
                    e.append('<div class="mail-action__tags-holder">'),
                    t._parent = t;
                    var n = "markers"in t ? t.markers : "";
                    twig.forEach(n, (function(i, n) {
                        t._key = n,
                        t.m = i,
                        e.append('<p><span class="mail-action__tag">'),
                        e.append(twig.filter.escape(this.env_, twig.attr("m"in t ? t.m : "", "code"), "light_escape", null, !0)),
                        e.append("</span></p>")
                    }
                    ), this),
                    e.append('</div><div class="mail-action__tags-holder">'),
                    t._parent = t,
                    n = "markers"in t ? t.markers : "",
                    twig.forEach(n, (function(i, n) {
                        t._key = n,
                        t.m = i,
                        e.append('<p class="mail-action__tag-descr">- '),
                        e.append(twig.filter.escape(this.env_, twig.attr("lang"in t ? t.lang : "", "mail_template_marker_" + twig.attr("m"in t ? t.m : "", "name"), void 0, "array"), "light_escape", null, !0)),
                        e.append("</p>")
                    }
                    ), this),
                    e.append("</div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_mail_modal_markers"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/mail/modal/markers", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
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
                    t.step = twig.attr("lang"in t ? t.lang : "", "mailbox_settings_two_step_image_title"),
                    e.append("<div><p>"),
                    e.append(twig.filter.escape(this.env_, twig.attr("lang"in t ? t.lang : "", "mailbox_rambler_instruction_text"), "light_escape", null, !0)),
                    e.append('</p><p><img src="/frontend/images/interface/mail_instructions/rambler_instruction_1.png" alt="'),
                    e.append(twig.filter.escape(this.env_, "step"in t ? t.step : "", "light_escape", null, !0)),
                    e.append(' 1" title="'),
                    e.append(twig.filter.escape(this.env_, "step"in t ? t.step : "", "light_escape", null, !0)),
                    e.append(' 1"></p><p><img src="/frontend/images/interface/mail_instructions/rambler_instruction_2.png" alt="'),
                    e.append(twig.filter.escape(this.env_, "step"in t ? t.step : "", "light_escape", null, !0)),
                    e.append(' 2" title="'),
                    e.append(twig.filter.escape(this.env_, "step"in t ? t.step : "", "light_escape", null, !0)),
                    e.append(' 2"></p></div>')
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_mail_modal_rambler_instruction"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/mail/modal/rambler_instruction", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
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
                    i.content = "",
                    twig.attr("signature"in i ? i.signature : "", "content") && (i.content = twig.attr("signature"in i ? i.signature : "", "content")),
                    "button_text"in i && i.button_text ? i.button_text = "button_text"in i ? i.button_text : "" : i.button_text = this.env_.filter("i18n", "Save"),
                    t.append('<div class="mail-signatures__field">'),
                    new (e._get("interface/controls/wysiwyg.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        wrapper_class_name: "mail-signatures__field-area",
                        value: "content"in i ? i.content : ""
                    })),
                    t.append('<div class="mail-signatures__field--select" '),
                    "is_admin"in i && i.is_admin || t.append(' style="display: none" '),
                    t.append('><span class="mail-signatures__field--select_caption">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "User"), "light_escape", null, !0)),
                    t.append(":"),
                    "select_disabled"in i && i.select_disabled && (t.append("&nbsp;"),
                    t.append(twig.filter.escape(this.env_, "selected_manager_name"in i ? i.selected_manager_name : "", "light_escape", null, !0))),
                    t.append("</span>"),
                    "select_disabled"in i && i.select_disabled || new (e._get("interface/controls/select.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        items: "managers"in i ? i.managers : "",
                        selected: twig.attr("signature"in i ? i.signature : "", "user_id"),
                        disabled: "select_disabled"in i ? i.select_disabled : ""
                    })),
                    t.append('</div></div><div class="mail-signatures__controls">'),
                    new (e._get("interface/controls/button.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        id: "save_signature",
                        class_name: "button-input_blue button-input-disabled js-button-with-loader mail-signatures__controls_save",
                        text: "button_text"in i ? i.button_text : "",
                        context_menu: 0,
                        additional_data: 'data-is-update="' + ("is_update"in i ? i.is_update : "") + '"'
                    })),
                    twig.attr("signature"in i ? i.signature : "", "id") && new (e._get("interface/controls/delete_button.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        id: "del_signature",
                        class_name: "mail-signatures__controls_delete js-delete-signature",
                        text: twig.filter.capitalize(this.env_, this.env_.filter("i18n", "delete"))
                    })),
                    t.append("</div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_mail_modal_signature_form"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/mail/modal/signature_form", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
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
                    e.append('<div class="mail-signatures__item '),
                    "is_admin"in t && t.is_admin || e.append("mail-signatures__item_active"),
                    e.append('" id="signature-item_'),
                    e.append(twig.filter.escape(this.env_, twig.attr("item"in t ? t.item : "", "id"), "light_escape", null, !0)),
                    e.append('" data-user-id="'),
                    e.append(twig.filter.escape(this.env_, twig.attr("item"in t ? t.item : "", "user_id"), "light_escape", null, !0)),
                    e.append('" data-id="'),
                    e.append(twig.filter.escape(this.env_, twig.attr("item"in t ? t.item : "", "id"), "light_escape", null, !0)),
                    e.append('">'),
                    e.append(twig.filter.escape(this.env_, twig.attr(twig.attr("item"in t ? t.item : "", "manager"), "title"), "light_escape", null, !0)),
                    e.append("</div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_mail_modal_signature_item"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/mail/modal/signature_item", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
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
                    t.append('<div id="mail-signatures__main-wrapper" class="mail-signatures__main-wrapper"><div class="safety_settings__section_head_new"><div class="safety_settings__section_head_new_title">'),
                    "is_admin"in i && i.is_admin ? t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Signatures"), "light_escape", null, !0)) : t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Signature"), "light_escape", null, !0)),
                    t.append('</div></div><div class="safety_settings__section_new_text"><p>'),
                    "is_admin"in i && i.is_admin ? t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Create several signatures for your business: for customers and for partners"), "light_escape", null, !0)) : t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Create signature for business: for customers and for partners"), "light_escape", null, !0)),
                    t.append('</p></div><div class="mail-signatures__list" id="mail-signatures__list"><div class="mail-signatures_items" id="mail-signatures__items" '),
                    "is_admin"in i && i.is_admin || t.append(' style="display: none" '),
                    t.append('><button class="mail-signatures__item mail-signatures__item_new mail-signatures__item_active js-add-signature" id="js-add-signature"><div class="dp-sources__button-add-plus-wrapper"><span class="dp-sources__button-add-plus"></span></div>'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "new signature"), "light_escape", null, !0)),
                    t.append("</button>"),
                    i._parent = i;
                    var a = "items"in i ? i.items : ""
                      , s = {
                        index0: 0,
                        index: 1,
                        first: !0
                    };
                    if (twig.countable(a)) {
                        var r = twig.count(a);
                        s.revindex0 = r - 1,
                        s.revindex = r,
                        s.length = r,
                        s.last = 1 === r
                    }
                    twig.forEach(a, (function(n, a) {
                        i._key = a,
                        i.item = n,
                        new (e._get("interface/mail/modal/signature_item.twig"))(this.env_).render_(t, twig.extend({}, i, "item"in i ? i.item : "")),
                        ++s.index0,
                        ++s.index,
                        s.first = !1,
                        s.length && (--s.revindex0,
                        --s.revindex,
                        s.last = 0 === s.revindex0)
                    }
                    ), this),
                    t.append('</div><div class="mail-signatures_work-area" id="mail-signatures_work-area">'),
                    new (e._get("interface/mail/modal/signature_form.twig"))(this.env_).render_(t, i),
                    t.append("</div></div></div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_mail_modal_signatures"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/mail/modal/signatures", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
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
                    e.append('<span class="template-item__handle"><span class="icon icon-v-dots"></span></span><div class="template-item__inner"><div class="template-item__body clearfix"><div class="template-item__body-inner"><div class="template-item__name">'),
                    e.append(twig.filter.escape(this.env_, "name"in t ? t.name : "", "light_escape", null, !0)),
                    e.append('</div></div><div class="template-item__body-edit"><span class="icon icon-inline icon-pencil"></span></div></div></div>')
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_mail_modal_template_item"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/mail/modal/template_item", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
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
                    i.sortable = !0,
                    t.append('<div class="template-item__wrapper '),
                    "sortable"in i && i.sortable && t.append("sortable"),
                    t.append(' clearfix" id="template-item_'),
                    t.append(twig.filter.escape(this.env_, "id"in i ? i.id : "", "light_escape", null, !0)),
                    t.append('">'),
                    new (e._get("interface/mail/modal/template_item.twig"))(this.env_).render_(t, twig.extend({}, i, "field"in i ? i.field : "")),
                    t.append("</div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_mail_modal_template_wrapper"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/mail/modal/template_wrapper", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
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
                    t.append('<div id="mail-templates__main-wrapper" class="mail-templates__main-wrapper"><div class="safety_settings__section_head_new"><div class="safety_settings__section_head_new_title">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Email templates"), "light_escape", null, !0)),
                    t.append('</div></div><div class="safety_settings__section_new_text"><p>'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "You can create email templates in advance and use them when sending to the client. After you add the templates will be available when you send a message"), "light_escape", null, !0)),
                    t.append('</p></div><div class="mail-templates__templates-holder" id="mail-templates__templates-holder"><div class="template-item sortable">'),
                    i._parent = i;
                    var a = "items"in i ? i.items : ""
                      , s = {
                        index0: 0,
                        index: 1,
                        first: !0
                    };
                    if (twig.countable(a)) {
                        var r = twig.count(a);
                        s.revindex0 = r - 1,
                        s.revindex = r,
                        s.length = r,
                        s.last = 1 === r
                    }
                    twig.forEach(a, (function(n, a) {
                        i._key = a,
                        i.item = n,
                        new (e._get("interface/mail/modal/template_wrapper.twig"))(this.env_).render_(t, twig.extend({}, i, "item"in i ? i.item : "")),
                        ++s.index0,
                        ++s.index,
                        s.first = !1,
                        s.length && (--s.revindex0,
                        --s.revindex,
                        s.last = 0 === s.revindex0)
                    }
                    ), this),
                    t.append('</div></div><button class="dp-sources__button-add dp-source__loader js-add-new-source" id="mail-templates__add-template"><div class="dp-sources__button-add-plus-wrapper"><span class="dp-sources__button-add-plus"></span></div><span class="dp-sources__button-add-text">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Add a template"), "light_escape", null, !0)),
                    t.append("</span></button></div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_mail_modal_templates_list"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/mail/modal/templates_list", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
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
                    t.append('<div class="modal-body__inner">'),
                    t.append('<div class="mail-action__header"><h2 class="mail-action__caption head_2">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "write_mail_compose"), "light_escape", null, !0)),
                    t.append('</h2><div class="mail-action__top-controls">'),
                    new (e._get("interface/controls/cancel_button.twig"))(this.env_).render_(t, i),
                    new (e._get("interface/controls/button.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        text: twig.attr("lang"in i ? i.lang : "", "write_mail_send"),
                        class_name: "js-modal-accept js-button-with-loader button-input_blue"
                    })),
                    t.append('</div></div><div class="mail-action__settings-container">'),
                    t.append('<div class="mail-action__settings-item"><p class="mail-action__settings-descr">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "mail_template_caption"), "light_escape", null, !0)),
                    t.append('</p><div class="mail-action__settings-input">'),
                    new (e._get("interface/controls/select.twig"))(this.env_).render_(t, twig.extend({}, i, "templates"in i ? i.templates : "")),
                    t.append("</div></div>"),
                    t.append('<div class="mail-action__settings-item"><p class="mail-action__settings-descr">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "mail_template_caption_from"), "light_escape", null, !0)),
                    t.append('</p><div class="mail-action__settings-input">'),
                    new (e._get("interface/controls/select.twig"))(this.env_).render_(t, twig.extend({}, i, "mailboxes"in i ? i.mailboxes : "")),
                    1 != twig.attr(twig.attr("mailboxes"in i ? i.mailboxes : "", "items"), "length") || twig.attr(twig.attr(twig.attr("mailboxes"in i ? i.mailboxes : "", "items"), 0, void 0, "array"), "id") || (t.append('<div class="mailbox-form__nomailbox-error">'),
                    t.append(twig.attr("lang"in i ? i.lang : "", "write_mail_no_mailbox")),
                    t.append("</div>")),
                    t.append('<div class="mailbox-form__error-select">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "write_mail_smtp_not_set"), "light_escape", null, !0)),
                    t.append("</div></div></div>"),
                    t.append('<div class="mail-action__settings-item mail-action__settings-item_recipients"><p class="mail-action__settings-descr">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "mail_template_caption_to"), "light_escape", null, !0)),
                    t.append('</p><div class="mail-action__settings-input"></div></div>'),
                    "reply"in i && i.reply && (t.append('<div class="mail-action__settings-item mail-action__settings-item_ccopy"><p class="mail-action__settings-descr">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "write_mail_cc"), "light_escape", null, !0)),
                    t.append('</p><div class="mail-action__settings-input"></div></div>')),
                    t.append("</div>"),
                    t.append('<div class="mail-action__settings">'),
                    new (e._get("interface/controls/input.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        placeholder: twig.attr("lang"in i ? i.lang : "", "mail_template_caption_subject"),
                        style: {
                            width: "100%"
                        },
                        name: "subject",
                        id: "template-subject",
                        value: "value"in i ? i.value : ""
                    })),
                    t.append("</div>"),
                    t.append('<textarea name="content" id="template-content" class="mail-action__template-content"></textarea>'),
                    t.append('<div class="mail-action__settings_footer">'),
                    new (e._get("interface/mail/modal/markers.twig"))(this.env_).render_(t, twig.extend({}, i, "markers"in i ? i.markers : "")),
                    t.append('</div><div class="mail-action__settings_content-html">'),
                    new (e._get("interface/controls/checkbox.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        id: "template-content-html",
                        name: "content_html",
                        text: twig.attr("lang"in i ? i.lang : "", "write_mail_html_on")
                    })),
                    t.append("</div></div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_mail_modal_write_mail"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/mail/modal/write_mail", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
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
                    "rerender"in i && i.rerender || t.append("<div>"),
                    t.append('<div class="mailbox__modal-header connect"><span class="mailbox__modal-title">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Connect the mailbox"), "light_escape", null, !0)),
                    t.append('</span><div class="mailbox__modal-buttons">'),
                    new (e._get("interface/controls/button.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        id: "mailbox-button__cancel",
                        class_name: "button-cancel",
                        name: "",
                        type: "reset",
                        text: twig.attr("lang"in i ? i.lang : "", "mail_setup_cancel_caption")
                    })),
                    new (e._get("interface/controls/button.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        id: "mailbox-button__save",
                        class_name: "button-input-disabled js-mailbox__next-step",
                        text: twig.attr("lang"in i ? i.lang : "", "mail_box_settings_change_auth_confirm")
                    })),
                    t.append('</div></div><div class="mailbox-form mailbox__modal_auth-field"><div class="mailbox__modal-description"><p class="mailbox__modal-text">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Connect a corporate shared box that receives applications from customers, or the personal box of one of your employees."), "light_escape", null, !0)),
                    t.append('</p></div><div class="mailbox__modal-form mailbox__modal-form_new"><div class="mailbox-form__error"></div><div class="mailbox__modal-form--input_wrapper">'),
                    new (e._get("interface/controls/input.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        id: "mailbox-email",
                        placeholder: "example@server.com",
                        name: "email",
                        autocomplete: "false",
                        value: "email"in i ? twig.filter.def("email"in i ? i.email : "", "") : ""
                    })),
                    t.append('<div class="mailbox-form__error-input"></div></div><div class="mailbox-form__email-inner-block mailbox__modal-form--button_wrapper"><div class="mailbox__modal-form--button_wrapper__icon-new"><svg class="svg-icon svg-mail--'),
                    t.append(twig.filter.escape(this.env_, "provider"in i ? twig.filter.def("provider"in i ? i.provider : "", "default") : "default", "light_escape", null, !0)),
                    t.append('_mail-dims"><use xlink:href="#mail--'),
                    t.append(twig.filter.escape(this.env_, "provider"in i ? twig.filter.def("provider"in i ? i.provider : "", "default") : "default", "light_escape", null, !0)),
                    t.append('_mail"></use></svg></div></div></div><div class="mailbox__modal-description mailbox__modal-description_bottom"><div class="mailbox__modal-text">'),
                    t.append(this.env_.filter("i18n", "mailbox_added_description")),
                    t.append('</div><p class="mailbox__modal-text mailbox__modal-text_troubles">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "mailbox_settings_two_step_auth_tipclick1"), "light_escape", null, !0)),
                    t.append(' <span class="js-mailbox__two-step-setup mail-settings-mail__descr_link">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "mailbox_settings_two_step_auth_tipclick2"), "light_escape", null, !0)),
                    t.append("</span></p></div></div>"),
                    "rerender"in i && i.rerender || t.append("</div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_mail_settings_add_mailbox"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/mail/settings/add_mailbox", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
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
                    e.append('<div class="bcc-settings__mailbox"><dt class="bcc-settings__mailbox_title"><span class="bcc-settings__mailbox_title--text">'),
                    e.append(twig.filter.escape(this.env_, twig.attr("item"in t ? t.item : "", "email"), "light_escape", null, !0)),
                    e.append('</span><span class="bcc-settings__mailbox_title--copy js-copy-value" title="'),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Copy"), "light_escape", null, !0)),
                    e.append('" data-copied="'),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Copied"), "light_escape", null, !0)),
                    e.append('" data-clipboard-text="'),
                    e.append(twig.filter.escape(this.env_, twig.attr("item"in t ? t.item : "", "email"), "light_escape", null, !0)),
                    e.append('"><svg class="svg-icon svg-common--copy-dims"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#common--copy"></use></svg></span></dt><dd class="bcc-settings__mailbox_description">'),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("i18n", twig.attr("item"in t ? t.item : "", "description")), "light_escape", null, !0)),
                    e.append("</dd></div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_mail_settings_bcc_mailbox_item"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/mail/settings/bcc_mailbox_item", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
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
                    t.append('<div class="modal-body__inner"><span class="modal-body__close"><span class="icon icon-modal-close"></span></span><div class="instruction">'),
                    "connection_group_error" == ("error_group"in i ? i.error_group : "") ? new (e._get("interface/mail/settings/parts/error_instruction/error_groups/connection_group_error.twig"))(this.env_).render_(t, i) : "timeout_group_error" == ("error_group"in i ? i.error_group : "") ? new (e._get("interface/mail/settings/parts/error_instruction/error_groups/timeout_group_error.twig"))(this.env_).render_(t, i) : "auth_group_error" == ("error_group"in i ? i.error_group : "") ? new (e._get("interface/mail/settings/parts/error_instruction/error_groups/auth_group_error.twig"))(this.env_).render_(t, i) : "oauth_group_error" == ("error_group"in i ? i.error_group : "") && new (e._get("interface/mail/settings/parts/error_instruction/error_groups/oauth_group_error.twig"))(this.env_).render_(t, i),
                    t.append("</div></div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_mail_settings_error_instruction_modal"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/mail/settings/error_instruction_modal", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
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
                    e.append('  <div class="mailbox-title dp-sources__caption dp-sources__caption_sources">'),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Connected boxes"), "light_escape", null, !0)),
                    e.append('</div><div class="mailbox-list" id="mailbox-list">'),
                    e.append("</div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_mail_settings_mailbox"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/mail/settings/mailbox", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
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
                    i.is_has_access = !1,
                    (!("private"in i) || !i.private || "private"in i && i.private && "is_owner"in i && i.is_owner || "access"in i && i.access) && (i.is_has_access = !0),
                    t.append('<div class="mailbox__modal-container'),
                    "active"in i && i.active || t.append(" mailbox__modal-container_inactive"),
                    t.append('"><div class="mailbox__modal-header"><div class="icon-and-title"><div class="mailbox__modal-form--button_wrapper__icon-new'),
                    "convertation"in i && i.convertation && t.append(" mailbox__modal-form--button_wrapper__icon-new_convertation"),
                    t.append('"><svg class="svg-icon svg-mail--'),
                    t.append(twig.filter.escape(this.env_, twig.attr("provider"in i ? i.provider : "", "code", void 0, void 0, !0) ? twig.filter.def(twig.attr("provider"in i ? i.provider : "", "code"), "default") : "default", "light_escape", null, !0)),
                    t.append('_mail-dims"><use xlink:href="#mail--'),
                    t.append(twig.filter.escape(this.env_, twig.attr("provider"in i ? i.provider : "", "code", void 0, void 0, !0) ? twig.filter.def(twig.attr("provider"in i ? i.provider : "", "code"), "default") : "default", "light_escape", null, !0)),
                    t.append('_mail"></use></svg></div><span class="mailbox__modal-title">'),
                    t.append(twig.filter.escape(this.env_, "email"in i ? i.email : "", "light_escape", null, !0)),
                    t.append("</span>"),
                    "parser"in i && i.parser || !(!("private"in i) || !i.private || "is_owner"in i && i.is_owner || "is_admin"in i && i.is_admin && "access"in i && i.access) || (t.append('<div class="mailbox-activation__toggler-wrapper">'),
                    new (e._get("interface/controls/switcher.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        id: "mailbox-toggler__activate",
                        class_name: "mailbox-toggler__activate js-form-changes-skip",
                        name: "activation",
                        checked: "active"in i ? i.active : "",
                        disabled: !("is_has_access"in i && i.is_has_access)
                    })),
                    t.append("</div>")),
                    t.append('</div><div class="mailbox__modal-buttons">'),
                    "parser"in i && i.parser ? t.append('<span class="mailbox__modal_close modal-body__close"><svg class="svg-icon svg-common--close-not-painted-dims"><use xlink:href="#common--close-not-painted"></use></svg></span>') : (new (e._get("interface/controls/button.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        id: "mailbox-button__cancel",
                        class_name: "button-cancel",
                        name: "",
                        type: "reset",
                        text: twig.attr("lang"in i ? i.lang : "", "mail_setup_cancel_caption")
                    })),
                    "is_has_access"in i && i.is_has_access && new (e._get("interface/controls/button.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        id: "mailbox-button__save",
                        class_name: "button-input_blue",
                        text: twig.attr("lang"in i ? i.lang : "", "mail_setup_save_caption")
                    }))),
                    t.append("</div></div>"),
                    "convertation"in i && i.convertation && (t.append('<div class="mailbox__modal-info convertation"><svg class="svg-icon svg-mail--convertation-dims"><use xlink:href="#mail--convertation"></use></svg>'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "Convertation"), "light_escape", null, !0)),
                    t.append(':&ensp;<span class="mailbox__modal-info__main">'),
                    t.append(twig.filter.escape(this.env_, "convertation"in i ? i.convertation : "", "light_escape", null, !0)),
                    t.append("%</span>&emsp;"),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "The last update"), "light_escape", null, !0)),
                    t.append(':&ensp;<span class="mailbox__modal-info__main">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("feed_date", "last_sync"in i ? i.last_sync : ""), "light_escape", null, !0)),
                    t.append("</span></div>")),
                    new (e._get("interface/common/error_notice.twig"))(this.env_).render_(t, {
                        text: "error_description"in i ? i.error_description : ""
                    }),
                    t.append('<div  class="mailbox-form">'),
                    "parser"in i && i.parser || (!("private"in i) || !i.private || "is_owner"in i && i.is_owner || "is_admin"in i && i.is_admin && "access"in i && i.access) && new (e._get("interface/controls/pipeline_toggler.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        class_name: "mailbox__toggler cubestats-toggler_lined-style",
                        pipelines: [{
                            title: twig.attr("lang"in i ? i.lang : "", "mailbox_change_password"),
                            class_name: "mailbox__toggler-item",
                            additional_data: 'data-option="mailbox-options_main"',
                            selected: !0
                        }, {
                            title: twig.attr("lang"in i ? i.lang : "", "settings"),
                            class_name: "mailbox__toggler-item",
                            additional_data: 'data-option="mailbox-options_additional"'
                        }],
                        not_scrollable: !0,
                        compact: !0,
                        item_class_name: ""
                    })),
                    "parser"in i && i.parser || (t.append('<div class="mailbox-form__error"></div><div class="mailbox-options_main mailbox__modal-options_main mailbox__modal-options mailbox-options">'),
                    !("private"in i) || !i.private || "is_owner"in i && i.is_owner || "is_admin"in i && i.is_admin && "access"in i && i.access ? (i.encryption = [{
                        id: "plain",
                        option: twig.attr("lang"in i ? i.lang : "", "mail_setup_without_encrypting")
                    }, {
                        id: "ssl",
                        option: "SSL"
                    }, {
                        id: "starttls",
                        option: "STARTTLS"
                    }, {
                        id: "tls",
                        option: "TLS"
                    }],
                    t.append('<div class="mailbox-form__container"><div class="mailbox__description">'),
                    t.append(twig.attr("langs"in i ? i.langs : "", "description")),
                    t.append('</div><form class="mailbox-form__table">'),
                    t.append('<div class="mailbox-form__row mailbox-form__row-imap_login mailbox-form__row-login"><div class="mailbox-form__cell mailbox-form__cell-title">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "mail_setup_login_field_caption"), "light_escape", null, !0)),
                    t.append('</div><div class="mailbox-form__cell  mailbox-form__login-input">'),
                    new (e._get("interface/controls/input.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        id: "mailbox-imap-login",
                        placeholder: twig.attr("lang"in i ? i.lang : "", "mail_setup_login_placeholder"),
                        name: "imap_login",
                        autocomplete: "false"
                    })),
                    t.append('<div class="mailbox-form__error-input"></div></div></div>'),
                    t.append('<div class="mailbox-form__row mailbox-form__row-password"><div class="mailbox-form__cell mailbox-form__cell-title">'),
                    "email"in i && i.email ? t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "mail_setup_new_password_field_caption"), "light_escape", null, !0)) : t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "mail_setup_password_field_caption"), "light_escape", null, !0)),
                    t.append('</div><div class="mailbox-form__cell">'),
                    t.append('<input style="display:none" class="js-form-changes-skip" type="text" name="imap_login"><input style="display:none" class="js-form-changes-skip" type="password" name="imap_password">'),
                    new (e._get("interface/controls/input.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        id: "mailbox-imap-password",
                        class_name: "auth_input password_input",
                        name: "imap_password",
                        type: "password",
                        placeholder: twig.attr("langs"in i ? i.langs : "", "password"),
                        autocomplete: "false"
                    })),
                    t.append('<div class="mailbox-form__error-input"></div><div class="mailbox__show-login mail-settings-mail__descr_link" data-login="smtp">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "mail_setup_show_additional_auth_fields"), "light_escape", null, !0)),
                    t.append("</div></div></div>"),
                    "email"in i && i.email && new (e._get("interface/mail/settings/parts/smtp_auth.twig"))(this.env_).render_(t, i),
                    t.append("</form></div>")) : (t.append('<div class="mailbox-form__row  mailbox-form__row-assign_user  mailbox-form__row-assign_user-no-caption"><div class="mailbox-form__cell " id="mailbox-user-assign-container">'),
                    t.append("</div></div>"),
                    new (e._get("interface/mail/settings/parts/group_messages_options.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        show_sync: !0
                    })),
                    new (e._get("interface/mail/settings/parts/options.twig"))(this.env_).render_(t, i)),
                    t.append("</div>")),
                    "parser"in i && i.parser || !(!("private"in i) || !i.private || "is_owner"in i && i.is_owner || "is_admin"in i && i.is_admin && "access"in i && i.access) || (t.append(" "),
                    new (e._get("interface/mail/settings/parts/additional_settings.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        show_group_options: !0,
                        mode: "edit"
                    }))),
                    ("parser"in i && i.parser || "connection" == ("state"in i ? i.state : "")) && new (e._get("interface/controls/button.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        id: "mailbox-button__remove",
                        class_name: "mailbox__buttons__disconnect button-cancel",
                        svg_class_name: "common--trash",
                        name: "",
                        text: twig.attr("lang"in i ? i.lang : "", "mail_box_settings_remove_button")
                    })),
                    t.append("</div></div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_mail_settings_mailbox_edit_form"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/mail/settings/mailbox_edit_form", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
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
                    i.is_has_access = !1,
                    (!("private"in i) || !i.private || "private"in i && i.private && "is_owner"in i && i.is_owner || "access"in i && i.access) && (i.is_has_access = !0),
                    t.append('<div class="mailbox__modal-container'),
                    "active"in i && i.active || t.append(" mailbox__modal-container_inactive"),
                    t.append('"><div class="mailbox__modal-header"><div class="icon-and-title"><div class="mailbox__modal-form--button_wrapper__icon-new'),
                    "convertation"in i && i.convertation && t.append(" mailbox__modal-form--button_wrapper__icon-new_convertation"),
                    t.append('"><svg class="svg-icon svg-mail--'),
                    t.append(twig.filter.escape(this.env_, twig.attr("provider"in i ? i.provider : "", "code", void 0, void 0, !0) ? twig.filter.def(twig.attr("provider"in i ? i.provider : "", "code"), "default") : "default", "light_escape", null, !0)),
                    t.append('_mail-dims"><use xlink:href="#mail--'),
                    t.append(twig.filter.escape(this.env_, twig.attr("provider"in i ? i.provider : "", "code", void 0, void 0, !0) ? twig.filter.def(twig.attr("provider"in i ? i.provider : "", "code"), "default") : "default", "light_escape", null, !0)),
                    t.append('_mail"></use></svg></div><span class="mailbox__modal-title">'),
                    t.append(twig.filter.escape(this.env_, "email"in i ? i.email : "", "light_escape", null, !0)),
                    t.append("</span>"),
                    (!("private"in i) || !i.private || "is_owner"in i && i.is_owner || "is_admin"in i && i.is_admin) && (t.append('<div class="mailbox-activation__toggler-wrapper">'),
                    new (e._get("interface/controls/switcher.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        id: "mailbox-toggler__activate",
                        class_name: "mailbox-toggler__activate js-form-changes-skip",
                        name: "activation",
                        checked: "active"in i ? i.active : "",
                        disabled: !("is_has_access"in i && i.is_has_access)
                    })),
                    t.append("</div>")),
                    t.append('</div><div class="mailbox__modal-buttons">'),
                    new (e._get("interface/controls/button.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        id: "mailbox-button__cancel",
                        class_name: "button-cancel",
                        name: "",
                        type: "reset",
                        text: twig.attr("lang"in i ? i.lang : "", "mail_setup_cancel_caption")
                    })),
                    "is_has_access"in i && i.is_has_access && new (e._get("interface/controls/button.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        id: "mailbox-button__save",
                        class_name: "button-input_blue",
                        text: twig.attr("lang"in i ? i.lang : "", "mail_setup_save_caption")
                    })),
                    t.append("</div></div>"),
                    "convertation"in i && i.convertation && (t.append('<div class="mailbox__modal-info convertation"><svg class="svg-icon svg-mail--convertation-dims"><use xlink:href="#mail--convertation"></use></svg>'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "Convertation"), "light_escape", null, !0)),
                    t.append(':&ensp;<span class="mailbox__modal-info__main">'),
                    t.append(twig.filter.escape(this.env_, "convertation"in i ? i.convertation : "", "light_escape", null, !0)),
                    t.append("%</span>&emsp;"),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "The last update"), "light_escape", null, !0)),
                    t.append(':&ensp;<span class="mailbox__modal-info__main">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("feed_date", "last_sync"in i ? i.last_sync : ""), "light_escape", null, !0)),
                    t.append("</span></div>")),
                    "error_description"in i && i.error_description && new (e._get("interface/common/error_notice.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        text: "error_description"in i ? i.error_description : ""
                    })),
                    t.append('<div class="mailbox__modal-options mailbox__modal-options_main">'),
                    t.append('<div class="mailbox-form"><div class="mailbox-form__error"></div><div class="mailbox-form__row  mailbox-form__row-assign_user  mailbox-form__row-assign_user-no-caption"><div class="mailbox-form__cell " id="mailbox-user-assign-container">'),
                    t.append("</div></div>"),
                    new (e._get("interface/mail/settings/parts/group_messages_options.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        show_sync: !0
                    })),
                    new (e._get("interface/mail/settings/parts/options.twig"))(this.env_).render_(t, i),
                    "parser"in i && i.parser || !twig.contains("authtype_switch"in i ? i.authtype_switch : "", "password") || (t.append('<div class="mailbox-form__row mailbox-form__row-change_auth"><div class="mailbox-form__cell"><a href="#" class=" std-link mailbox-change_auth">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "mailbox_settings_switch_to_login"), "light_escape", null, !0)),
                    t.append("</a></div></div>")),
                    t.append("</div></div></div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_mail_settings_mailbox_edit_oauthform"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/mail/settings/mailbox_edit_oauthform", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
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
                    i.encryption = [{
                        id: "plain",
                        option: twig.attr("lang"in i ? i.lang : "", "mail_setup_without_encrypting")
                    }, {
                        id: "ssl",
                        option: "SSL"
                    }, {
                        id: "starttls",
                        option: "STARTTLS"
                    }, {
                        id: "tls",
                        option: "TLS"
                    }],
                    i.is_has_access = !1,
                    (!("private"in i) || !i.private || "private"in i && i.private && "is_owner"in i && i.is_owner || "access"in i && i.access) && (i.is_has_access = !0),
                    t.append('<div class="mailbox__modal-header"><div class="icon-and-title"><div class="mailbox__modal-form--button_wrapper__icon-new"><svg class="svg-icon svg-mail--'),
                    t.append(twig.filter.escape(this.env_, "provider"in i ? twig.filter.def("provider"in i ? i.provider : "", "default") : "default", "light_escape", null, !0)),
                    t.append('_mail-dims"><use xlink:href="#mail--'),
                    t.append(twig.filter.escape(this.env_, "provider"in i ? twig.filter.def("provider"in i ? i.provider : "", "default") : "default", "light_escape", null, !0)),
                    t.append('_mail"></use></svg></div><div class="mailbox__modal-form--input_wrapper">'),
                    new (e._get("interface/controls/input.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        id: "mailbox-email",
                        class_name: "mailbox-input__second-step mailbox__modal-title",
                        placeholder: "example@server.com",
                        name: "email",
                        autocomplete: "false",
                        value: "email"in i ? twig.filter.def("email"in i ? i.email : "", "") : ""
                    })),
                    t.append("</div></div>"),
                    t.append('<div class="mailbox__modal-buttons">'),
                    new (e._get("interface/controls/button.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        id: "mailbox-button__cancel",
                        class_name: "button-cancel",
                        name: "",
                        type: "reset",
                        text: twig.attr("lang"in i ? i.lang : "", "mail_setup_cancel_caption")
                    })),
                    "is_has_access"in i && i.is_has_access && new (e._get("interface/controls/button.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        id: "mailbox-button__save",
                        class_name: "button-input_blue",
                        text: twig.attr("lang"in i ? i.lang : "", "mail_setup_save_caption")
                    })),
                    t.append('</div></div><div class="mailbox__modal-description"><div class="mailbox__modal-text">'),
                    t.append(this.env_.filter("i18n", "mailbox_added_description")),
                    t.append('</div><p class="mailbox__modal-text mailbox__modal-text_troubles">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "mailbox_settings_two_step_auth_tipclick1"), "light_escape", null, !0)),
                    t.append(' <span class="js-mailbox__two-step-setup mail-settings-mail__descr_link">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "mailbox_settings_two_step_auth_tipclick2"), "light_escape", null, !0)),
                    t.append('</span></p></div><div class="mailbox__modal-form mailbox__modal-form_custom"><div class="mailbox-form__container">'),
                    t.append('<div class="mailbox-options_main mailbox-options"><div class="mailbox-form"><div class="mailbox-form__error_exists mailbox-form__error"></div>'),
                    t.append('<div class="mailbox-form__row mailbox-form__row-imap_login mailbox-form__row-login"><div class="mailbox-form__cell mailbox-form__cell-title">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "mail_setup_login_field_caption"), "light_escape", null, !0)),
                    t.append('</div><div class="mailbox-form__cell mailbox-form__login-input">'),
                    new (e._get("interface/controls/input.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        id: "mailbox-imap-login",
                        placeholder: twig.attr("lang"in i ? i.lang : "", "mail_setup_login_placeholder"),
                        name: "imap_login",
                        autocomplete: "false"
                    })),
                    t.append('<div class="mailbox-form__error-input"></div></div><input name="imap_login" type="hidden" value="'),
                    t.append(twig.filter.escape(this.env_, "imap_login"in i ? i.imap_login : "", "light_escape", null, !0)),
                    t.append('"></div>'),
                    t.append('<div class="mailbox-form__row mailbox-form__row-imap_password"><div class="mailbox-form__cell mailbox-form__cell-title">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "mail_setup_password_field_caption"), "light_escape", null, !0)),
                    t.append('</div><div class="mailbox-form__cell">'),
                    t.append('<input style="display:none" class="js-form-changes-skip" type="text" name="imap_login"><input style="display:none" class="js-form-changes-skip" type="password" name="imap_password">'),
                    new (e._get("interface/controls/input.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        id: "mailbox-imap-password",
                        class_name: "auth_input password_input",
                        name: "imap_password",
                        type: "password",
                        placeholder: twig.attr("lang"in i ? i.lang : "", "mail_setup_password_email_password"),
                        autocomplete: "false"
                    })),
                    t.append('<div class="mailbox-form__error-input"></div><div class="mailbox__show-login mailbox__show-imap-login mail-settings-mail__descr_link" data-login-type="imap">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "mail_setup_show_login"), "light_escape", null, !0)),
                    t.append("</div>"),
                    t.append("</div></div></div></div>"),
                    new (e._get("interface/mail/settings/parts/additional_settings.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        mode: "add"
                    })),
                    t.append('<div class="mailbox-options_common mailbox-options"><div class="mailbox-form"><form class="mailbox-form__table"><div class="mailbox-form__row  mailbox-form__row-assign_user"><div class="mailbox-form__cell " id="mailbox-user-assign-container">'),
                    t.append("</div></div></form>"),
                    new (e._get("interface/mail/settings/parts/group_messages_options.twig"))(this.env_).render_(t, i),
                    new (e._get("interface/mail/settings/parts/options.twig"))(this.env_).render_(t, i),
                    t.append('<div class="mailbox-form__row mailbox-form__row-checkbox mailbox-form__row-create_contacts"><div class="mailbox-form__cell">'),
                    new (e._get("interface/controls/checkbox.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        class_name: "mailbox-create_contacts",
                        id: "mailbox-create-contacts",
                        name: "create_contacts",
                        text: twig.attr("lang"in i ? i.lang : "", "mail_setup_create_contacts_description"),
                        checked: !1
                    })),
                    t.append("</div></div></div></div></div></div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_mail_settings_mailbox_form"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/mail/settings/mailbox_form", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
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
                    i.is_has_access = !1,
                    (!("private"in i) || !i.private || "private"in i && i.private && "is_owner"in i && i.is_owner || "access"in i && i.access) && (i.is_has_access = !0),
                    t.append('<div class="mailbox__modal-container'),
                    "active"in i && i.active || t.append(" mailbox__modal-container_inactive"),
                    t.append('"><div class="mailbox__modal-header"><div class="icon-and-title"><div class="mailbox__modal-form--button_wrapper__icon-new'),
                    "convertation"in i && i.convertation && t.append(" mailbox__modal-form--button_wrapper__icon-new_convertation"),
                    t.append('"><svg class="svg-icon svg-mail--'),
                    t.append(twig.filter.escape(this.env_, twig.attr("provider"in i ? i.provider : "", "code", void 0, void 0, !0) ? twig.filter.def(twig.attr("provider"in i ? i.provider : "", "code"), "default") : "default", "light_escape", null, !0)),
                    t.append('_mail-dims"><use xlink:href="#mail--'),
                    t.append(twig.filter.escape(this.env_, twig.attr("provider"in i ? i.provider : "", "code", void 0, void 0, !0) ? twig.filter.def(twig.attr("provider"in i ? i.provider : "", "code"), "default") : "default", "light_escape", null, !0)),
                    t.append('_mail"></use></svg></div><span class="mailbox__modal-title">'),
                    t.append(twig.filter.escape(this.env_, "email"in i ? i.email : "", "light_escape", null, !0)),
                    t.append("</span>"),
                    (!("private"in i) || !i.private || "is_owner"in i && i.is_owner || "is_admin"in i && i.is_admin) && (t.append('<div class="mailbox-activation__toggler-wrapper">'),
                    new (e._get("interface/controls/switcher.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        id: "mailbox-toggler__activate",
                        class_name: "mailbox-toggler__activate js-form-changes-skip",
                        name: "active",
                        checked: "active"in i ? i.active : "",
                        disabled: !("is_has_access"in i && i.is_has_access || "active"in i && i.active)
                    })),
                    t.append("</div>")),
                    t.append("</div>"),
                    t.append('<div class="mailbox__modal-buttons mailbox__buttons '),
                    !("private"in i) || !i.private || "is_owner"in i && i.is_owner || "is_admin"in i && i.is_admin && "access"in i && i.access || t.append("mailbox__buttons__inaccessible"),
                    t.append('">'),
                    new (e._get("interface/controls/button.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        id: "mailbox-button__cancel",
                        class_name: "mailbox__buttons__cancel button-cancel",
                        name: "",
                        type: "reset",
                        text: twig.attr("lang"in i ? i.lang : "", "mail_setup_cancel_caption")
                    })),
                    new (e._get("interface/controls/button.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        id: "mailbox-button__save",
                        class_name: "button-input_blue",
                        disabled: !0,
                        text: twig.attr("lang"in i ? i.lang : "", "mail_setup_save_caption")
                    })),
                    t.append("</div></div>"),
                    "convertation"in i && i.convertation && (t.append('<div class="mailbox__modal-info convertation"><svg class="svg-icon svg-mail--convertation-dims"><use xlink:href="#mail--convertation"></use></svg>'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "Convertation"), "light_escape", null, !0)),
                    t.append(':&ensp;<span class="mailbox__modal-info__main">'),
                    t.append(twig.filter.escape(this.env_, "convertation"in i ? i.convertation : "", "light_escape", null, !0)),
                    t.append("%</span>&emsp;"),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "The last update"), "light_escape", null, !0)),
                    t.append(':&ensp;<span class="mailbox__modal-info__main">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("feed_date", "last_sync"in i ? i.last_sync : ""), "light_escape", null, !0)),
                    t.append("</span></div>")),
                    new (e._get("interface/common/error_notice.twig"))(this.env_).render_(t, {
                        text: "error_description"in i ? i.error_description : ""
                    }),
                    t.append('<div class="mailbox-form"><div class="mailbox-form__error"></div>'),
                    "parser"in i && i.parser || !(!("private"in i) || !i.private || "is_owner"in i && i.is_owner || "is_admin"in i && i.is_admin && "access"in i && i.access) || (t.append('<div class="mailbox-options_main mailbox-options">'),
                    t.append('<div class="mailbox-form__container"><div class="mailbox__description">'),
                    t.append(twig.attr("langs"in i ? i.langs : "", "description")),
                    t.append('</div><form class="mailbox-form__table">'),
                    t.append('<div class="mailbox-form__row mailbox-form__row-imap_login mailbox-form__row-login"><div class="mailbox-form__cell mailbox-form__cell-title">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "mail_setup_login_field_caption"), "light_escape", null, !0)),
                    t.append('</div><div class="mailbox-form__cell mailbox-form__login-input">'),
                    new (e._get("interface/controls/input.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        id: "mailbox-imap-login",
                        placeholder: twig.attr("lang"in i ? i.lang : "", "mail_setup_login_placeholder"),
                        name: "imap_login",
                        autocomplete: "false"
                    })),
                    t.append('<div class="mailbox-form__error-input"></div></div><input name="imap_login" type="hidden" value="'),
                    t.append(twig.filter.escape(this.env_, "imap_login"in i ? i.imap_login : "", "light_escape", null, !0)),
                    t.append('"></div>'),
                    t.append('<div class="mailbox-form__row mailbox-form__row-password"><div class="mailbox-form__cell mailbox-form__cell-title">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "mail_setup_password_field_caption"), "light_escape", null, !0)),
                    t.append('</div><div class="mailbox-form__cell">'),
                    t.append('<input style="display:none" class="js-form-changes-skip" type="text" name="imap_login"><input style="display:none" class="js-form-changes-skip" type="password" name="imap_password">'),
                    new (e._get("interface/controls/input.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        id: "mailbox-imap-password",
                        class_name: "auth_input password_input",
                        name: "imap_password",
                        type: "password",
                        placeholder: twig.attr("langs"in i ? i.langs : "", "password"),
                        autocomplete: "false"
                    })),
                    t.append('<div class="mailbox-form__error-input"></div><div class="mailbox__show-login mail-settings-mail__descr_link" data-login="smtp">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "mail_setup_show_additional_auth_fields"), "light_escape", null, !0)),
                    t.append("</div></div></div>"),
                    new (e._get("interface/mail/settings/parts/smtp_auth.twig"))(this.env_).render_(t, i),
                    t.append("</form></div>"),
                    "parser"in i && i.parser || !twig.contains("authtype_switch"in i ? i.authtype_switch : "", "oauth") || (t.append('<div class="mailbox-form__row mailbox-form__row-change_auth"><div class=""><a href="#" class="std-link mailbox-change_auth mailbox-change_auth-login">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "mailbox_settings_switch_to_oauth"), "light_escape", null, !0)),
                    t.append("</a></div></div>")),
                    t.append("</div>")),
                    (!("private"in i) || !i.private || "is_owner"in i && i.is_owner || "is_admin"in i && i.is_admin) && (t.append('<div class="mailbox-form__row  mailbox-form__row-assign_user  mailbox-form__row-assign_user-no-caption"><div class="mailbox-form__cell " id="mailbox-user-assign-container">'),
                    t.append("</div></div>")),
                    (!("private"in i) || !i.private || "is_owner"in i && i.is_owner || "is_admin"in i && i.is_admin) && new (e._get("interface/controls/button.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        id: "mailbox-button__remove",
                        class_name: "mailbox__buttons__disconnect button-cancel",
                        svg_class_name: "common--trash",
                        name: "",
                        type: "reset",
                        text: twig.attr("lang"in i ? i.lang : "", "mail_box_settings_remove_button")
                    })),
                    t.append("</div></div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_mail_settings_mailbox_form_disabled"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/mail/settings/mailbox_form_disabled", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e),
                    this.setBlocks({
                        classes: twig.bind(this.block_classes, this),
                        logo: twig.bind(this.block_logo, this),
                        caption: twig.bind(this.block_caption, this),
                        name_edit: twig.bind(this.block_name_edit, this),
                        controls: twig.bind(this.block_controls, this),
                        subtitle: twig.bind(this.block_subtitle, this)
                    })
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(t) {
                    return e._get("interface/digital_pipeline/lead_sources_templates/base_source.twig")
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    t.class = "js-edit-mailbox mailbox__container_contracted mailbox__container_contracted--" + ("current_status"in t ? t.current_status : ""),
                    t.is_loading = !1,
                    twig.empty("error"in t ? t.error : "") || (t.class = ("class"in t ? t.class : "") + " mailbox__container_contracted--error"),
                    "private"in t && t.private ? t.subtitle = this.env_.filter("i18n", "Personal mailbox") : t.subtitle = this.env_.filter("i18n", "Shared mailbox"),
                    "connection" != ("current_status"in t ? t.current_status : "") && "sync" != ("current_status"in t ? t.current_status : "") && "convertation" != ("current_status"in t ? t.current_status : "") && "import" != ("current_status"in t ? t.current_status : "") || (t.is_loading = !0,
                    t.subtitle = this.env_.filter("i18n", twig.filter.capitalize(this.env_, "current_status"in t ? t.current_status : "")) + "..."),
                    twig.empty("error"in t ? t.error : "") || (t.subtitle = this.env_.filter("i18n", twig.attr("error"in t ? t.error : "", "description"))),
                    "locked" == ("current_status"in t ? t.current_status : "") && (t.subtitle = this.env_.filter("i18n", "Blocked")),
                    "provider"in t && t.provider && twig.attr("provider"in t ? t.provider : "", "code") ? t.icon_name = twig.attr("provider"in t ? t.provider : "", "code") : "parser"in t && t.parser ? t.icon_name = "parser" : t.icon_name = "default",
                    this.getParent(t).render_(e, t, twig.extend({}, this.getBlocks(), i))
                }
                ,
                t.prototype.block_classes = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    e.append(twig.filter.escape(this.env_, "class"in t ? t.class : "", "light_escape", null, !0))
                }
                ,
                t.prototype.block_logo = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    e.append('<svg class="svg-icon svg-mail--'),
                    e.append(twig.filter.escape(this.env_, "icon_name"in t ? twig.filter.def("icon_name"in t ? t.icon_name : "", "default") : "default", "light_escape", null, !0)),
                    e.append('_mail-dims"><use xlink:href="#mail--'),
                    e.append(twig.filter.escape(this.env_, "icon_name"in t ? twig.filter.def("icon_name"in t ? t.icon_name : "", "default") : "default", "light_escape", null, !0)),
                    e.append('_mail"></use></svg>')
                }
                ,
                t.prototype.block_caption = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    e.append('<h4 class="dp-source__caption">'),
                    e.append(twig.filter.escape(this.env_, "email"in t ? t.email : "", "light_escape", null, !0)),
                    e.append("</h4>")
                }
                ,
                t.prototype.block_name_edit = function(e, t, i) {
                    i = void 0 === i ? {} : i
                }
                ,
                t.prototype.block_controls = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    "is_loading"in t && t.is_loading && e.append('<span class="spinner-icon"></span>')
                }
                ,
                t.prototype.block_subtitle = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    e.append('<p class="dp-source__subtitle">'),
                    e.append(twig.filter.escape(this.env_, "subtitle"in t ? t.subtitle : "", "light_escape", null, !0)),
                    e.append("</p>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_mail_settings_mailbox_item"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/mail/settings/mailbox_item", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
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
                    i.is_has_access = !1,
                    (!("private"in i) || !i.private || "private"in i && i.private && "is_owner"in i && i.is_owner || "access"in i && i.access) && (i.is_has_access = !0),
                    t.append('<div class="mailbox__modal-header"><div class="icon-and-title"><div class="mailbox__modal-form--button_wrapper__icon-new"><svg class="svg-icon svg-mail--'),
                    t.append(twig.filter.escape(this.env_, "provider"in i ? twig.filter.def("provider"in i ? i.provider : "", "default") : "default", "light_escape", null, !0)),
                    t.append('_mail-dims"><use xlink:href="#mail--'),
                    t.append(twig.filter.escape(this.env_, "provider"in i ? twig.filter.def("provider"in i ? i.provider : "", "default") : "default", "light_escape", null, !0)),
                    t.append('_mail"></use></svg></div><span id="mailbox-email" class="mailbox__modal-title">'),
                    t.append(twig.filter.escape(this.env_, "email"in i ? i.email : "", "light_escape", null, !0)),
                    t.append("</span></div>"),
                    t.append('<div class="mailbox__modal-buttons">'),
                    new (e._get("interface/controls/button.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        id: "mailbox-button__cancel",
                        class_name: "button-cancel",
                        name: "",
                        type: "reset",
                        text: twig.attr("lang"in i ? i.lang : "", "mail_setup_cancel_caption")
                    })),
                    "is_has_access"in i && i.is_has_access && new (e._get("interface/controls/button.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        id: "mailbox-button__save",
                        class_name: "button-input_blue",
                        text: twig.attr("lang"in i ? i.lang : "", "mail_setup_save_caption")
                    })),
                    t.append('</div></div><div class="mailbox__modal-description"><div class="mailbox__modal-text">'),
                    t.append(this.env_.filter("i18n", "mailbox_added_description")),
                    t.append('</div><p class="mailbox__modal-text mailbox__modal-text_troubles">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "mailbox_settings_two_step_auth_tipclick1"), "light_escape", null, !0)),
                    t.append(' <span class="js-mailbox__two-step-setup mail-settings-mail__descr_link">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "mailbox_settings_two_step_auth_tipclick2"), "light_escape", null, !0)),
                    t.append('</span></p></div><div class="mailbox__oauth form-block"><div class="mailbox-form__container"><div class="mailbox-options_common mailbox-options"><div class="mailbox-form"><div class="mailbox-form__error_exists mailbox-form__error"></div><div class="mailbox-form__row  mailbox-form__row-assign_user"><div class="mailbox-form__cell " id="mailbox-user-assign-container">'),
                    t.append("</div></div>"),
                    new (e._get("interface/mail/settings/parts/group_messages_options.twig"))(this.env_).render_(t, i),
                    new (e._get("interface/mail/settings/parts/options.twig"))(this.env_).render_(t, i),
                    t.append('<div class="mailbox-form__row mailbox-form__row-checkbox mailbox-form__row-create_contacts"><div class="mailbox-form__cell">'),
                    new (e._get("interface/controls/checkbox.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        class_name: "mailbox-create_contacts",
                        id: "mailbox-create-contacts",
                        name: "create_contacts",
                        text: this.env_.filter("i18n", "mail_setup_create_contacts_description"),
                        checked: !1
                    })),
                    t.append("</div></div></div></div></div></div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_mail_settings_mailbox_oauthform"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/mail/settings/mailbox_oauthform", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
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
                    i.is_has_access = !1,
                    (!("private"in i) || !i.private || "private"in i && i.private && "is_owner"in i && i.is_owner || "access"in i && i.access) && (i.is_has_access = !0),
                    t.append('<div class="mailbox__modal-container'),
                    "active"in i && i.active || t.append(" mailbox__modal-container_inactive"),
                    t.append('"><div class="mailbox__modal-header"><div class="icon-and-title"><div class="mailbox__modal-form--button_wrapper__icon-new'),
                    "convertation"in i && i.convertation && t.append(" mailbox__modal-form--button_wrapper__icon-new_convertation"),
                    t.append('"><svg class="svg-icon svg-mail--'),
                    t.append(twig.filter.escape(this.env_, twig.attr("provider"in i ? i.provider : "", "code", void 0, void 0, !0) ? twig.filter.def(twig.attr("provider"in i ? i.provider : "", "code"), "default") : "default", "light_escape", null, !0)),
                    t.append('_mail-dims"><use xlink:href="#mail--'),
                    t.append(twig.filter.escape(this.env_, twig.attr("provider"in i ? i.provider : "", "code", void 0, void 0, !0) ? twig.filter.def(twig.attr("provider"in i ? i.provider : "", "code"), "default") : "default", "light_escape", null, !0)),
                    t.append('_mail"></use></svg></div><span class="mailbox__modal-title">'),
                    t.append(twig.filter.escape(this.env_, "email"in i ? i.email : "", "light_escape", null, !0)),
                    t.append("</span>"),
                    (!("private"in i) || !i.private || "is_owner"in i && i.is_owner || "is_admin"in i && i.is_admin) && (t.append('<div class="mailbox-activation__toggler-wrapper">'),
                    new (e._get("interface/controls/switcher.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        id: "mailbox-toggler__activate",
                        class_name: "mailbox-toggler__activate js-form-changes-skip",
                        name: "active",
                        checked: "active"in i ? i.active : "",
                        disabled: !("is_has_access"in i && i.is_has_access)
                    })),
                    t.append("</div>")),
                    t.append("</div>"),
                    t.append('<div class="mailbox__modal-buttons mailbox__buttons '),
                    !("private"in i) || !i.private || "is_owner"in i && i.is_owner || "is_admin"in i && i.is_admin && "access"in i && i.access || t.append("mailbox__buttons__inaccessible"),
                    t.append('">'),
                    new (e._get("interface/controls/button.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        id: "mailbox-button__cancel",
                        class_name: "mailbox__buttons__cancel button-cancel",
                        name: "",
                        type: "reset",
                        text: twig.attr("lang"in i ? i.lang : "", "mail_setup_cancel_caption")
                    })),
                    new (e._get("interface/controls/button.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        id: "mailbox-button__save",
                        class_name: "button-input_blue",
                        disabled: !0,
                        text: twig.attr("lang"in i ? i.lang : "", "mail_setup_save_caption")
                    })),
                    t.append("</div></div>"),
                    "convertation"in i && i.convertation && (t.append('<div class="mailbox__modal-info convertation"><svg class="svg-icon svg-mail--convertation-dims"><use xlink:href="#mail--convertation"></use></svg>'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "Convertation"), "light_escape", null, !0)),
                    t.append(':&ensp;<span class="mailbox__modal-info__main">'),
                    t.append(twig.filter.escape(this.env_, "convertation"in i ? i.convertation : "", "light_escape", null, !0)),
                    t.append("%</span>&emsp;"),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "The last update"), "light_escape", null, !0)),
                    t.append(':&ensp;<span class="mailbox__modal-info__main">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("feed_date", "last_sync"in i ? i.last_sync : ""), "light_escape", null, !0)),
                    t.append("</span></div>")),
                    "error_description"in i && i.error_description && new (e._get("interface/common/error_notice.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        text: "error_description"in i ? i.error_description : ""
                    })),
                    t.append('<div class="mailbox-form"><div class="mailbox-form__error"></div><div class="mailbox-options_main mailbox-options">'),
                    "parser"in i && i.parser || !twig.contains("authtype_switch"in i ? i.authtype_switch : "", "password") || (t.append('<div class="mailbox-form__row mailbox-form__row-change_auth"><div class="mailbox-form__cell"><a href="#" class="std-link mailbox-change_auth mailbox-change_auth-login">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "mailbox_settings_switch_to_login"), "light_escape", null, !0)),
                    t.append("</a></div></div>")),
                    t.append("</div>"),
                    (!("private"in i) || !i.private || "is_owner"in i && i.is_owner || "is_admin"in i && i.is_admin) && (t.append('<div class="mailbox-form__row  mailbox-form__row-assign_user  mailbox-form__row-assign_user-no-caption"><div class="mailbox-form__cell " id="mailbox-user-assign-container">'),
                    t.append("</div></div>")),
                    (!("private"in i) || !i.private || "is_owner"in i && i.is_owner || "is_admin"in i && i.is_admin) && new (e._get("interface/controls/button.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        id: "mailbox-button__remove",
                        class_name: "mailbox__buttons__disconnect button-cancel",
                        svg_class_name: "common--trash",
                        name: "",
                        type: "reset",
                        text: twig.attr("lang"in i ? i.lang : "", "mail_box_settings_remove_button")
                    })),
                    t.append("</div></div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_mail_settings_mailbox_oauthform_disabled"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/mail/settings/mailbox_oauthform_disabled", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
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
                    t.append('<div class="mailbox-privacy '),
                    "editable"in i && i.editable || "enable_share_access"in i && i.enable_share_access || t.append("mailbox-privacy_locked"),
                    t.append('"><div class="mailbox-privacy__holder mailbox-privacy__row">'),
                    i.selected_personal = !("is_admin"in i && i.is_admin) || ("selected_user_id"in i ? i.selected_user_id : ""),
                    i.self_mailbox = ("selected_user_id"in i ? i.selected_user_id : "") == twig.attr("current_user"in i ? i.current_user : "", "id");
                    var a = t;
                    (t = new twig.StringBuffer).append('<div id="pagination" class="mailbox-privacy__pagination"><div class="mailbox-privacy__toggler-wrapper mailbox-privacy__cell">'),
                    i.items = [],
                    i.class_name = "mailbox-privacy__toggler-item",
                    i.items = twig.filter.merge([{
                        selected: "selected_personal"in i ? i.selected_personal : "",
                        title: twig.attr("lang"in i ? i.lang : "", "mail_privacy_mailbox_type_personal"),
                        class_name: "mailbox-privacy__toggler-item",
                        additional_data: 'data-option="personal"'
                    }], "items"in i ? i.items : ""),
                    i.items = twig.filter.merge([{
                        selected: !("selected_personal"in i && i.selected_personal),
                        class_name: "mailbox-privacy__toggler-item",
                        title: twig.attr("lang"in i ? i.lang : "", "mail_privacy_mailbox_type_shared"),
                        additional_data: 'data-option="shared"'
                    }], "items"in i ? i.items : ""),
                    t.append('<div class="mailbox-privacy__inner-wrapper">'),
                    new (e._get("interface/controls/toggler.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        class_name: "mailbox-privacy__toggler",
                        items: "items"in i ? i.items : ""
                    })),
                    t.append('<div class="mailbox-privacy__users-select"><input id="user_id" name="user_id" type="hidden"><div class="mailbox-form__user-input">'),
                    new (e._get("interface/mail/settings/parts/mail_users_select.twig"))(this.env_).render_(t, i),
                    t.append("</div></div></div></div></div>"),
                    i.privacy_toggler = new twig.Markup(t.toString()),
                    a = t = a,
                    t = new twig.StringBuffer,
                    i.mailbox_id = "mailbox_id"in i && i.mailbox_id ? "mailbox_id"in i ? i.mailbox_id : "" : "add",
                    t.append('<div class="mailbox-access__toggler-wrapper mailbox-access__cell" '),
                    "selected_personal"in i && i.selected_personal || t.append('style="display: none;'),
                    t.append('"><span class="control-checkbox__text element__text">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Shared with administrator"), "light_escape", null, !0)),
                    t.append("</span>"),
                    new (e._get("interface/controls/switcher.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        id: "mailbox-access__toggler-" + ("mailbox_id"in i ? i.mailbox_id : ""),
                        class_name: "mailbox-access__toggler js-form-changes-skip",
                        name: "access",
                        checked: "admin_access"in i ? i.admin_access : "",
                        disabled: !("enable_share_access"in i && i.enable_share_access)
                    })),
                    t.append("</div>"),
                    i.access_toggler = new twig.Markup(t.toString()),
                    a = t = a,
                    (t = new twig.StringBuffer).append('<div class="mailbox-privacy__cell"><span class="mailbox-privacy__personal"title="'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "mail_privacy_mailbox_type_personal"), "light_escape", null, !0)),
                    t.append('">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "mail_privacy_mailbox_type_personal"), "light_escape", null, !0)),
                    t.append("</span></div>"),
                    i.privacy_info = new twig.Markup(t.toString()),
                    a = t = a,
                    (t = new twig.StringBuffer).append('<div class="mailbox-access__cell"><span class="mailbox-privacy__shared">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Shared with administrator"), "light_escape", null, !0)),
                    t.append('<svg class="svg-icon svg-mail--unlocked-dims mailbox-privacy__shared-icon"><use xlink:href="#mail--unlocked"></use></svg></span></div>'),
                    i.access_info = new twig.Markup(t.toString()),
                    t = a,
                    "selected_personal"in i && i.selected_personal && "admin_access"in i && i.admin_access ? i.caption = this.env_.filter("i18n", "Visible only to the selected user and administrator(s)") : "selected_personal"in i && i.selected_personal ? i.caption = this.env_.filter("i18n", "Visible only to the selected user") : i.caption = this.env_.filter("i18n", "Visible to all users who have access"),
                    i.mailbox_actions_class = "mailbox-privacy__actions",
                    "is_admin"in i && i.is_admin || (i.mailbox_actions_class = ("mailbox_actions_class"in i ? i.mailbox_actions_class : "") + " mailbox-privacy__actions_only-access"),
                    "add" == ("mode"in i ? i.mode : "") ? (t.append('<div class="'),
                    t.append(twig.filter.escape(this.env_, "mailbox_actions_class"in i ? i.mailbox_actions_class : "", "light_escape", null, !0)),
                    t.append('">'),
                    "is_admin"in i && i.is_admin && t.append("privacy_toggler"in i ? i.privacy_toggler : ""),
                    t.append("access_toggler"in i ? i.access_toggler : ""),
                    t.append('</div><div class="mailbox-privacy__description mailbox-privacy__cell"><div class="mailbox-privacy__caption mailbox__modal-description">'),
                    t.append(twig.filter.escape(this.env_, "caption"in i ? i.caption : "", "light_escape", null, !0)),
                    t.append("</div></div>")) : "edit" == ("mode"in i ? i.mode : "") && ("is_admin"in i && i.is_admin ? (t.append('<div class="'),
                    t.append(twig.filter.escape(this.env_, "mailbox_actions_class"in i ? i.mailbox_actions_class : "", "light_escape", null, !0)),
                    t.append('">'),
                    t.append("privacy_toggler"in i ? i.privacy_toggler : ""),
                    !("admin_access"in i) || !i.admin_access || "self_mailbox"in i && i.self_mailbox ? t.append("access_toggler"in i ? i.access_toggler : "") : t.append("access_info"in i ? i.access_info : ""),
                    t.append('</div><div class="mailbox-privacy__description mailbox-privacy__cell"><div class="mailbox-privacy__caption mailbox__modal-description">'),
                    t.append(twig.filter.escape(this.env_, "caption"in i ? i.caption : "", "light_escape", null, !0)),
                    t.append("</div></div>"),
                    "blocked"in i && i.blocked || (i.add_dp_link = "/settings/pipeline/leads/?open_mail_source=true",
                    t.append('<div class="mailbox__modal-description">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "The ability to create leads from email threads is available in"), "light_escape", null, !0)),
                    t.append('<a class="mail-settings-mail__descr_link js-navigate-link" href="'),
                    t.append(twig.filter.escape(this.env_, "add_dp_link"in i ? i.add_dp_link : "", "light_escape", null, !0)),
                    t.append('">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Digital Pipeline"), "light_escape", null, !0)),
                    t.append("</a>.</div>"))) : "admin_access"in i && i.admin_access ? (t.append('<div class="'),
                    t.append(twig.filter.escape(this.env_, "mailbox_actions_class"in i ? i.mailbox_actions_class : "", "light_escape", null, !0)),
                    t.append('"><div class="mailbox-privacy__info">'),
                    t.append("privacy_info"in i ? i.privacy_info : ""),
                    t.append("access_info"in i ? i.access_info : ""),
                    t.append("</div></div>")) : (t.append('<div class="'),
                    t.append(twig.filter.escape(this.env_, "mailbox_actions_class"in i ? i.mailbox_actions_class : "", "light_escape", null, !0)),
                    t.append('"><div class="mailbox-privacy__info">'),
                    t.append("access_toggler"in i ? i.access_toggler : ""),
                    t.append("</div></div>"))),
                    t.append("</div></div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_mail_settings_user_assign"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/mail/settings/user_assign", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e),
                    this.setBlocks({
                        header_403: twig.bind(this.block_header_403, this)
                    })
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(t) {
                    return e._get("interface/common/403page.twig")
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    this.getParent(t).render_(e, t, twig.extend({}, this.getBlocks(), i))
                }
                ,
                t.prototype.block_header_403 = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    "in_modal"in i && i.in_modal || new (e._get("interface/mail/thread/header.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        show_spinner: !1
                    }))
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_mail_thread_403page"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/mail/thread/403page", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e),
                    this.setBlocks({
                        header_404: twig.bind(this.block_header_404, this)
                    })
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(t) {
                    return e._get("interface/common/404page.twig")
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    this.getParent(t).render_(e, t, twig.extend({}, this.getBlocks(), i))
                }
                ,
                t.prototype.block_header_404 = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    "in_modal"in i && i.in_modal || new (e._get("interface/mail/thread/header.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        show_spinner: !1
                    }))
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_mail_thread_404page"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/mail/thread/404page", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
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
                    twig.attr("item"in t ? t.item : "", "attachments") && twig.filter.length(this.env_, twig.attr("item"in t ? t.item : "", "attachments")) > 0) {
                        e.append('<div class="thread_letter__attachments">'),
                        t._parent = t;
                        var n = twig.attr("item"in t ? t.item : "", "attachments");
                        twig.forEach(n, (function(i, n) {
                            t._key = n,
                            t.attach = i,
                            e.append('<div class="thread_letter__attachment-container '),
                            twig.attr("attach"in t ? t.attach : "", "download_blocked") && e.append("thread_letter__attachment-container_blocked"),
                            e.append('"><a href="'),
                            e.append(twig.filter.escape(this.env_, twig.attr("attach"in t ? t.attach : "", "url", void 0, void 0, !0) ? twig.filter.def(twig.attr("attach"in t ? t.attach : "", "url"), "#") : "#", "light_escape", null, !0)),
                            e.append('" data-id="'),
                            e.append(twig.filter.escape(this.env_, twig.attr("attach"in t ? t.attach : "", "id"), "light_escape", null, !0)),
                            e.append('" data-state="'),
                            e.append(twig.filter.escape(this.env_, twig.attr("attach"in t ? t.attach : "", "state"), "light_escape", null, !0)),
                            e.append('" target="_blank" class="thread_letter__attachment '),
                            twig.attr("attach"in t ? t.attach : "", "download_blocked") && e.append("thread_letter__attachment_blocked"),
                            e.append('"><span class="icon icon-attachment thread_letter__attachment-icon"></span><span class="thread_letter__attachment-info"><span class="thread_letter__attachment-name">'),
                            e.append(twig.filter.escape(this.env_, twig.attr("attach"in t ? t.attach : "", "name"), "light_escape", null, !0)),
                            e.append('</span><span class="thread_letter__attachment-size">'),
                            e.append(twig.filter.escape(this.env_, twig.attr("attach"in t ? t.attach : "", "display_size"), "light_escape", null, !0)),
                            e.append('</span></span></a><div class="thread_letter__attachment-loader"><span class="spinner-icon"></span></div></div>')
                        }
                        ), this),
                        e.append("</div>")
                    }
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_mail_thread_attachments"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/mail/thread/attachments", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
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
                    "in_modal"in i && i.in_modal && t.append('<span class="modal-body__close"><span class="icon icon-modal-close"></span></span>'),
                    new (e._get("interface/mail/thread/header.twig"))(this.env_).render_(t, i),
                    new (e._get("interface/mail/thread/thread.twig"))(this.env_).render_(t, i)
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_mail_thread_card"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/mail/thread/card", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
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
                    twig.attr("actions"in i ? i.actions : "", "add_lead") && (t.append('<div class="mail_thread__create-more mail_thread__action mail_thread__action_create-entity">'),
                    new (e._get("interface/controls/button.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        class_name: "mail_thread__create mail_thread__create_lead js-mail_thread__create_lead button-input_blue",
                        text: this.env_.filter("i18n", "mail_letter_create_lead"),
                        additional_data: "data-entity='lead'"
                    })),
                    t.append("</div>"))
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_mail_thread_common_create_control"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/mail/thread/common_create_control", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
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
                    "name"in i && i.name || (i.name = ""),
                    twig.attr("template"in i ? i.template : "", "in_modal") || "show_spinner"in i && i.show_spinner && t.append('<span class="spinner-icon spinner-icon-abs-center"></span>'),
                    t.append('<div class="mail-thread-card-top"><div class="mail-thread-card-top__title">'),
                    !twig.attr("template"in i ? i.template : "", "in_modal") && "first_load"in i && i.first_load && t.append('<div class="mail-thread-card-top__back js-card-back-button"><span class="icon icon-arrow-left-big"></span></div>'),
                    t.append('<h2 class="mail-thread-card-top__title-caption" id="thread_name" title="'),
                    t.append(twig.filter.escape(this.env_, "name"in i ? i.name : "", "light_escape", null, !0)),
                    t.append('">'),
                    t.append(twig.filter.escape(this.env_, "name"in i ? i.name : "", "light_escape", null, !0)),
                    t.append("</h2></div>"),
                    twig.attr("template"in i ? i.template : "", "in_modal") || ("entity"in i && i.entity ? (t.append('<div class="mail_thread__linked_lead">'),
                    i.entity_name = twig.attr("entity"in i ? i.entity : "", "name"),
                    "lead" == twig.attr("entity"in i ? i.entity : "", "type") ? i.entity_name = this.env_.filter("lead_name", twig.attr("entity"in i ? i.entity : "", "name"), twig.attr("entity"in i ? i.entity : "", "id")) : "customer" == twig.attr("entity"in i ? i.entity : "", "type") ? i.entity_name = this.env_.filter("customer_name", twig.attr("entity"in i ? i.entity : "", "name"), twig.attr("entity"in i ? i.entity : "", "id")) : "contact" == twig.attr("entity"in i ? i.entity : "", "type") && (i.entity_name = this.env_.filter("contact_name", twig.attr("entity"in i ? i.entity : "", "name"))),
                    twig.attr(twig.attr("entity"in i ? i.entity : "", "actions"), "view") ? (t.append('<a href="'),
                    t.append(twig.filter.escape(this.env_, twig.attr("entity"in i ? i.entity : "", "url"), "light_escape", null, !0)),
                    t.append('" class="mail_thread__lead_link js-navigate-link" title="'),
                    t.append(twig.filter.escape(this.env_, "entity_name"in i ? i.entity_name : "", "light_escape", null, !0)),
                    t.append('">'),
                    t.append(twig.filter.escape(this.env_, "entity_name"in i ? i.entity_name : "", "light_escape", null, !0)),
                    t.append("</a>")) : (t.append('<span class="mail_thread__lead_text" title="'),
                    t.append(twig.filter.escape(this.env_, "entity_name"in i ? i.entity_name : "", "light_escape", null, !0)),
                    t.append('">'),
                    t.append(twig.filter.escape(this.env_, "entity_name"in i ? i.entity_name : "", "light_escape", null, !0)),
                    t.append("</span>")),
                    twig.attr("status_info"in i ? i.status_info : "", "id") && (twig.attr("status_info"in i ? i.status_info : "", "pipeline_name") ? (t.append('<div class="note-lead__container note-lead__pipe-container" style="margin-left: 0;"><div class="note-lead__pipe"><span class="node-lead__pipe-text" style="font-size: 13px;">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("status_info"in i ? i.status_info : "", "pipeline_name"), "light_escape", null, !0)),
                    t.append('</span></div><div class="note-lead__status" style="background-color: '),
                    t.append(twig.filter.escape(this.env_, twig.attr("status_info"in i ? i.status_info : "", "color"), "light_escape", null, !0)),
                    t.append('" title="'),
                    t.append(twig.filter.escape(this.env_, twig.attr("status_info"in i ? i.status_info : "", "name"), "light_escape", null, !0)),
                    t.append('"><span class="note-lead__status-text">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("status_info"in i ? i.status_info : "", "name"), "light_escape", null, !0)),
                    t.append("</span></div></div>")) : (t.append('<div class="feed-note__pipeline-status" style="background-color: '),
                    t.append(twig.filter.escape(this.env_, twig.attr("status_info"in i ? i.status_info : "", "color"), "light_escape", null, !0)),
                    t.append('" title="'),
                    t.append(twig.filter.escape(this.env_, twig.attr("status_info"in i ? i.status_info : "", "name"), "light_escape", null, !0)),
                    t.append('">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("status_info"in i ? i.status_info : "", "name"), "light_escape", null, !0)),
                    t.append("</div>"))),
                    twig.attr(twig.attr("entity"in i ? i.entity : "", "actions"), "view") && new (e._get("interface/mail/thread/more_button.twig"))(this.env_).render_(t, i),
                    t.append("</div>")) : twig.filter.length(this.env_, "actions"in i ? i.actions : "") && (t.append('<div class="mail_thread__actions mail_thread__action_create-common block-selection-prepended">'),
                    (twig.attr("actions"in i ? i.actions : "", "add_customer") || twig.attr("actions"in i ? i.actions : "", "add_contact")) && new (e._get("interface/mail/thread/more_button.twig"))(this.env_).render_(t, i),
                    twig.attr("actions"in i ? i.actions : "", "link") && (t.append('<div id="link-button-action" class="mail_thread__action">'),
                    new (e._get("interface/controls/button.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        class_name: "mail_thread__link_lead js-mail_thread__link_lead",
                        text: this.env_.filter("i18n", "mail_letter_link_lead"),
                        additional_data: "data-entity='lead'"
                    })),
                    t.append('</div><div id="suggest-action" class="mail_thread__action hidden-block">'),
                    new (e._get("interface/controls/suggest.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        items: "leads"in i ? i.leads : "",
                        wrapper_id: "thread-lead-suggest",
                        list_separated: !0,
                        suggest_icon: "chain",
                        closable: !0,
                        placeholder: this.env_.filter("i18n", "top_search_input_placeholder"),
                        name: "suggest_leads_mail"
                    })),
                    t.append("</div>")),
                    twig.attr("actions"in i ? i.actions : "", "add_lead") && new (e._get("interface/controls/button.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        class_name: "button-input_blue mail_thread__create js-mail_thread__create_lead",
                        text: this.env_.filter("i18n", "mail_letter_create_lead"),
                        additional_data: "data-entity='lead'"
                    })),
                    t.append("</div>"))),
                    t.append("</div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_mail_thread_header"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/mail/thread/header", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
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
                    "in_modal"in i && i.in_modal ? i.max_letters_count = 3 : i.max_letters_count = 7,
                    t.append('<div class="thread_letter__holder'),
                    twig.attr("item"in i ? i.item : "", "sent") && t.append(" sent_letter"),
                    twig.attr("item"in i ? i.item : "", "unread") && t.append(" unread"),
                    t.append('" id="thread_letter_'),
                    t.append(twig.filter.escape(this.env_, twig.attr("item"in i ? i.item : "", "id"), "light_escape", null, !0)),
                    t.append('"><div class="thread_letter__status" title="'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "mail_letter_unread"), "light_escape", null, !0)),
                    t.append('"></div><div class="thread_letter__contacts thread-letter__contacts_contracted"><div class="thread_letter__contacts__from thread-letter__contacts-from_full" '),
                    twig.filter.length(this.env_, twig.attr("item"in i ? i.item : "", "to")) < 2 && t.append(' style="display:inline-block" '),
                    t.append('><div style="float: left;"></div><div><div style="width: 100%;">'),
                    twig.attr("item"in i ? i.item : "", "attachment") && twig.filter.length(this.env_, twig.attr("item"in i ? i.item : "", "attachment")) > 0 && (t.append('<div style="float: right; "><div class="thread-letter__attached-files-counter"><span class="icon icon-attachment-icon icon-inline thread-letter__attached-files-icon"></span><span class="thread-letter__attached-files-count">'),
                    t.append(twig.filter.escape(this.env_, twig.filter.length(this.env_, twig.attr("item"in i ? i.item : "", "attachment")), "light_escape", null, !0)),
                    t.append("&nbsp;"),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("numeral", twig.attr("lang"in i ? i.lang : "", "mail_letter_file"), twig.filter.length(this.env_, twig.attr("item"in i ? i.item : "", "attachment"))), "light_escape", null, !0)),
                    t.append("</span></div></div>")),
                    t.append('<div style="float: right;">'),
                    twig.filter.length(this.env_, twig.attr("item"in i ? i.item : "", "to")) > 1 && (t.append('<div class="thread-letter__action-more js-letter-hide-all-contacts" style="cursor: pointer;"><span class="thread-letter__action-more_show-hide">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "mail_letter_action_hide"), "light_escape", null, !0)),
                    t.append("</span></div>")),
                    t.append('</div><div style="overflow:hidden;"><div style="float: right; width: 100%;"><div class="thread-letter__contacts-from-inner_full">'),
                    i._parent = i;
                    var a = twig.attr("item"in i ? i.item : "", "from")
                      , s = {
                        index0: 0,
                        index: 1,
                        first: !0
                    };
                    if (twig.countable(a)) {
                        var r = twig.count(a);
                        s.revindex0 = r - 1,
                        s.revindex = r,
                        s.length = r,
                        s.last = 1 === r
                    }
                    twig.forEach(a, (function(e, n) {
                        i._key = n,
                        i.contact = e,
                        i.name = twig.attr("contact"in i ? i.contact : "", "name", void 0, void 0, !0) ? twig.filter.def(twig.attr("contact"in i ? i.contact : "", "name"), twig.attr("contact"in i ? i.contact : "", "email")) : twig.attr("contact"in i ? i.contact : "", "email"),
                        twig.attr(twig.attr("contact"in i ? i.contact : "", "actions"), "add") ? (t.append('<span class="thread_letter__contact thread_letter__contact_text js-thread-letter-email" data-entity="contact"><b>'),
                        t.append(twig.filter.escape(this.env_, "name"in i ? i.name : "", "light_escape", null, !0)),
                        twig.attr("contact"in i ? i.contact : "", "name") && (t.append(" <span>&lt;"),
                        t.append(twig.filter.escape(this.env_, twig.attr("contact"in i ? i.contact : "", "email"), "light_escape", null, !0)),
                        t.append("&gt;</span>")),
                        t.append("</b></span>"),
                        twig.attr(s, "index0") < ("limit"in i ? i.limit : "") && t.append("<span>, </span>")) : twig.attr(twig.attr("contact"in i ? i.contact : "", "actions"), "view") ? (twig.attr("contact"in i ? i.contact : "", "url") ? (t.append('<a href="'),
                        t.append(twig.filter.escape(this.env_, twig.attr("contact"in i ? i.contact : "", "url"), "light_escape", null, !0)),
                        t.append('" class="thread_letter__contact thread_letter__contact_link js-navigate-link"><b>'),
                        t.append(twig.filter.escape(this.env_, "name"in i ? i.name : "", "light_escape", null, !0)),
                        twig.attr("contact"in i ? i.contact : "", "name") && (t.append(" <span>&lt;"),
                        t.append(twig.filter.escape(this.env_, twig.attr("contact"in i ? i.contact : "", "email"), "light_escape", null, !0)),
                        t.append("&gt;</span>")),
                        t.append("</b></a>")) : (t.append('<span class="thread_letter__contact thread_letter__contact_text js-thread-letter-email-blocked"><b>'),
                        t.append(twig.filter.escape(this.env_, "name"in i ? i.name : "", "light_escape", null, !0)),
                        twig.attr("contact"in i ? i.contact : "", "name") && (t.append(" <span>&lt;"),
                        t.append(twig.filter.escape(this.env_, twig.attr("contact"in i ? i.contact : "", "email"), "light_escape", null, !0)),
                        t.append("&gt;</span>")),
                        t.append("</b></span>")),
                        twig.attr(s, "index0") < ("limit"in i ? i.limit : "") && t.append("<span>, </span>")) : (t.append('<span class="thread_letter__contact thread_letter__contact_user"><b>'),
                        t.append(twig.filter.escape(this.env_, "name"in i ? i.name : "", "light_escape", null, !0)),
                        twig.attr("contact"in i ? i.contact : "", "name") && (t.append(" <span>&lt;"),
                        t.append(twig.filter.escape(this.env_, twig.attr("contact"in i ? i.contact : "", "email"), "light_escape", null, !0)),
                        t.append("&gt;</span>")),
                        t.append("</b></span>"),
                        !twig.attr(s, "index0") < ("limit"in i ? i.limit : "") && t.append("<span>, </span>")),
                        ++s.index0,
                        ++s.index,
                        s.first = !1,
                        s.length && (--s.revindex0,
                        --s.revindex,
                        s.last = 0 === s.revindex0)
                    }
                    ), this),
                    t.append('</div></div></div></div></div></div><div class="thread_letter__contacts__to thread-letter__contacts-to_short" '),
                    twig.filter.length(this.env_, twig.attr("item"in i ? i.item : "", "to")) < 2 && t.append('style="display:none"'),
                    t.append(' ><div style="float: left;"></div><div><div style="margin-right: 105px;">'),
                    twig.attr("item"in i ? i.item : "", "attachment") && twig.filter.length(this.env_, twig.attr("item"in i ? i.item : "", "attachment")) > 0 && (t.append('<div style="float: right; "><div class="thread-letter__attached-files-counter"><span class="icon icon-attachment-icon icon-inline thread-letter__attached-files-icon"></span><span class="thread-letter__attached-files-count">'),
                    t.append(twig.filter.escape(this.env_, twig.filter.length(this.env_, twig.attr("item"in i ? i.item : "", "attachment")), "light_escape", null, !0)),
                    t.append("&nbsp;"),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("numeral", twig.attr("lang"in i ? i.lang : "", "mail_letter_file"), twig.filter.length(this.env_, twig.attr("item"in i ? i.item : "", "attachment"))), "light_escape", null, !0)),
                    t.append("</span></div></div>")),
                    t.append('<div style="float: right;">'),
                    twig.filter.length(this.env_, twig.attr("item"in i ? i.item : "", "to")) > 1 && (t.append('<div class="thread-letter__action-more"><div class="js-letter-show-all-contacts" style="display: inline-block; cursor: pointer;"><span class="thread-letter__action-more_show-hide">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "mail_letter_action_more"), "light_escape", null, !0)),
                    t.append("</span></div></div>")),
                    t.append('</div><div class="thread-letter_contacts-text"><div style="float: right; width: 100%;"><div class="thread-letter__contacts-from-inner_short" style="display: inline; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;"><div class="thread_letter__contacts__from thread-letter__contacts-from_short">'),
                    i._parent = i,
                    a = twig.attr("item"in i ? i.item : "", "from"),
                    s = {
                        index0: 0,
                        index: 1,
                        first: !0
                    },
                    twig.countable(a) && (r = twig.count(a),
                    s.revindex0 = r - 1,
                    s.revindex = r,
                    s.length = r,
                    s.last = 1 === r),
                    twig.forEach(a, (function(e, n) {
                        i._key = n,
                        i.contact = e,
                        i.name = twig.attr("contact"in i ? i.contact : "", "name") || twig.attr("contact"in i ? i.contact : "", "email"),
                        twig.attr(twig.attr("contact"in i ? i.contact : "", "actions"), "add") ? (t.append('<span class="thread_letter__contact thread_letter__contact_text js-thread-letter-email" data-entity="contact"><b>'),
                        t.append(twig.filter.escape(this.env_, "name"in i ? i.name : "", "light_escape", null, !0)),
                        t.append("</b></span>"),
                        !twig.attr(s, "index0") < ("limit"in i ? i.limit : "") && t.append("<span>, </span>")) : twig.attr(twig.attr("contact"in i ? i.contact : "", "actions"), "view") ? (twig.attr("contact"in i ? i.contact : "", "url") ? (t.append('<a href="'),
                        t.append(twig.filter.escape(this.env_, twig.attr("contact"in i ? i.contact : "", "url"), "light_escape", null, !0)),
                        t.append('" class="thread_letter__contact thread_letter__contact_link js-navigate-link"><b>'),
                        t.append(twig.filter.escape(this.env_, "name"in i ? i.name : "", "light_escape", null, !0)),
                        t.append("</b></a>")) : (t.append('<span class="thread_letter__contact thread_letter__contact_text js-thread-letter-email-blocked"><b>'),
                        t.append(twig.filter.escape(this.env_, "name"in i ? i.name : "", "light_escape", null, !0)),
                        t.append("</b></span>")),
                        !twig.attr(s, "index0") < ("limit"in i ? i.limit : "") && t.append("<span>, </span>")) : (t.append('<span class="thread_letter__contact thread_letter__contact_user"><b>'),
                        t.append(twig.filter.escape(this.env_, "name"in i ? i.name : "", "light_escape", null, !0)),
                        t.append("</b></span>"),
                        !twig.attr(s, "index0") < ("limit"in i ? i.limit : "") && t.append("<span>, </span>")),
                        ++s.index0,
                        ++s.index,
                        s.first = !1,
                        s.length && (--s.revindex0,
                        --s.revindex,
                        s.last = 0 === s.revindex0)
                    }
                    ), this),
                    t.append('</div><span class="thread_letter__contacts__to_word"> '),
                    t.append(twig.filter.escape(this.env_, " " + twig.attr("lang"in i ? i.lang : "", "mail_letter_to"), "light_escape", null, !0)),
                    t.append("</span>"),
                    i.limit = twig.filter.length(this.env_, twig.attr("item"in i ? i.item : "", "to")) - 1,
                    i._parent = i,
                    a = twig.range(0, "limit"in i ? i.limit : ""),
                    s = {
                        index0: 0,
                        index: 1,
                        first: !0
                    },
                    twig.countable(a) && (r = twig.count(a),
                    s.revindex0 = r - 1,
                    s.revindex = r,
                    s.length = r,
                    s.last = 1 === r),
                    twig.forEach(a, (function(e, n) {
                        i._key = n,
                        i.i = e,
                        i.contact = twig.attr(twig.attr("item"in i ? i.item : "", "to"), "i"in i ? i.i : "", void 0, "array"),
                        i.name = twig.attr("contact"in i ? i.contact : "", "name") || twig.attr("contact"in i ? i.contact : "", "email"),
                        twig.attr(twig.attr("contact"in i ? i.contact : "", "actions"), "add") ? (t.append('<span class="thread_letter__contact thread_letter__contact_text js-thread-letter-email'),
                        twig.attr(s, "first") && t.append(" thread-letter__contact-user-first"),
                        t.append('" data-entity="contact">'),
                        t.append(twig.filter.escape(this.env_, "name"in i ? i.name : "", "light_escape", null, !0)),
                        t.append("</span>"),
                        twig.attr(s, "last") || t.append("<span>, </span>")) : twig.attr(twig.attr("contact"in i ? i.contact : "", "actions"), "view") ? (t.append('<span class="thread_letter__contact">'),
                        twig.attr("contact"in i ? i.contact : "", "url") ? (t.append('<a href="'),
                        t.append(twig.filter.escape(this.env_, twig.attr("contact"in i ? i.contact : "", "url"), "light_escape", null, !0)),
                        t.append('" class="thread_letter__contact_link js-navigate-link'),
                        twig.attr(s, "first") && t.append(" thread-letter__contact-user-first"),
                        t.append('">'),
                        t.append(twig.filter.escape(this.env_, "name"in i ? i.name : "", "light_escape", null, !0)),
                        t.append("</a>")) : (t.append('<span class="thread_letter__contact thread_letter__contact_text js-thread-letter-email-blocked'),
                        twig.attr(s, "first") && t.append(" thread-letter__contact-user-first"),
                        t.append('">'),
                        t.append(twig.filter.escape(this.env_, "name"in i ? i.name : "", "light_escape", null, !0)),
                        t.append("</span>")),
                        t.append("</span>"),
                        twig.attr(s, "last") || t.append("<span>, </span>")) : (t.append('<span class="thread_letter__contact thread_letter__contact_user'),
                        twig.attr(s, "first") && t.append(" thread-letter__contact-user-first"),
                        t.append('">'),
                        t.append(twig.filter.escape(this.env_, "name"in i ? i.name : "", "light_escape", null, !0)),
                        t.append("</span>"),
                        twig.attr(s, "last") || t.append("<span>, </span>")),
                        ++s.index0,
                        ++s.index,
                        s.first = !1,
                        s.length && (--s.revindex0,
                        --s.revindex,
                        s.last = 0 === s.revindex0)
                    }
                    ), this),
                    t.append('</div></div></div></div></div></div><div class="thread_letter__contacts__to thread-letter__contacts-to_line" style="margin-right: 100px;"><div class="thread_letter__contacts__from thread-letter__contacts-from_short">'),
                    i._parent = i,
                    a = twig.attr("item"in i ? i.item : "", "from"),
                    s = {
                        index0: 0,
                        index: 1,
                        first: !0
                    },
                    twig.countable(a) && (r = twig.count(a),
                    s.revindex0 = r - 1,
                    s.revindex = r,
                    s.length = r,
                    s.last = 1 === r),
                    twig.forEach(a, (function(e, n) {
                        i._key = n,
                        i.contact = e,
                        i.name = twig.attr("contact"in i ? i.contact : "", "name") || twig.attr("contact"in i ? i.contact : "", "email"),
                        twig.attr(twig.attr("contact"in i ? i.contact : "", "actions"), "add") ? (t.append('<span class="thread_letter__contact thread_letter__contact_text js-thread-letter-email" data-entity="contact"><b>'),
                        t.append(twig.filter.escape(this.env_, "name"in i ? i.name : "", "light_escape", null, !0)),
                        t.append("</b></span>"),
                        !twig.attr(s, "index0") < ("limit"in i ? i.limit : "") && t.append("<span>, </span>")) : twig.attr(twig.attr("contact"in i ? i.contact : "", "actions"), "view") ? (twig.attr("contact"in i ? i.contact : "", "url") ? (t.append('<a href="'),
                        t.append(twig.filter.escape(this.env_, twig.attr("contact"in i ? i.contact : "", "url"), "light_escape", null, !0)),
                        t.append('" class="thread_letter__contact thread_letter__contact_link js-navigate-link"><b>'),
                        t.append(twig.filter.escape(this.env_, "name"in i ? i.name : "", "light_escape", null, !0)),
                        t.append("</b></a>")) : (t.append('<span class="thread_letter__contact thread_letter__contact_text js-thread-letter-email-blocked"><b>'),
                        t.append(twig.filter.escape(this.env_, "name"in i ? i.name : "", "light_escape", null, !0)),
                        t.append("</b></span>")),
                        !twig.attr(s, "index0") < ("limit"in i ? i.limit : "") && t.append("<span>, </span>")) : (t.append('<span class="thread_letter__contact thread_letter__contact_user"><b>'),
                        t.append(twig.filter.escape(this.env_, "name"in i ? i.name : "", "light_escape", null, !0)),
                        t.append("</b></span>"),
                        !twig.attr(s, "index0") < ("limit"in i ? i.limit : "") && t.append("<span>, </span>")),
                        ++s.index0,
                        ++s.index,
                        s.first = !1,
                        s.length && (--s.revindex0,
                        --s.revindex,
                        s.last = 0 === s.revindex0)
                    }
                    ), this),
                    t.append('</div><span class="thread_letter__contacts__to_word"> '),
                    t.append(twig.filter.escape(this.env_, " " + twig.attr("lang"in i ? i.lang : "", "mail_letter_to"), "light_escape", null, !0)),
                    t.append("</span>"),
                    i._parent = i,
                    a = twig.attr("item"in i ? i.item : "", "to"),
                    s = {
                        index0: 0,
                        index: 1,
                        first: !0
                    },
                    twig.countable(a) && (r = twig.count(a),
                    s.revindex0 = r - 1,
                    s.revindex = r,
                    s.length = r,
                    s.last = 1 === r),
                    twig.forEach(a, (function(e, n) {
                        i._key = n,
                        i.contact = e,
                        i.name = twig.attr("contact"in i ? i.contact : "", "name") || twig.attr("contact"in i ? i.contact : "", "email"),
                        twig.attr(twig.attr("contact"in i ? i.contact : "", "actions"), "add") ? (t.append('<span class="thread_letter__contact thread_letter__contact_text js-thread-letter-email'),
                        twig.attr(s, "first") && t.append(" thread-letter__contact-user-first"),
                        t.append('" data-entity="contact">'),
                        t.append(twig.filter.escape(this.env_, "name"in i ? i.name : "", "light_escape", null, !0)),
                        t.append("</span>"),
                        twig.attr(s, "last") || t.append("<span>, </span>")) : twig.attr(twig.attr("contact"in i ? i.contact : "", "actions"), "view") ? (t.append('<span class="thread_letter__contact">'),
                        twig.attr("contact"in i ? i.contact : "", "url") ? (t.append('<a href="'),
                        t.append(twig.filter.escape(this.env_, twig.attr("contact"in i ? i.contact : "", "url"), "light_escape", null, !0)),
                        t.append('" class="thread_letter__contact_link js-navigate-link'),
                        twig.attr(s, "first") && t.append(" thread-letter__contact-user-first"),
                        t.append('">'),
                        t.append(twig.filter.escape(this.env_, "name"in i ? i.name : "", "light_escape", null, !0)),
                        t.append("</a>")) : (t.append('}<span class="thread_letter__contact_text js-thread-letter-email-blocked'),
                        twig.attr(s, "first") && t.append(" thread-letter__contact-user-first"),
                        t.append('">'),
                        t.append(twig.filter.escape(this.env_, "name"in i ? i.name : "", "light_escape", null, !0)),
                        t.append("</span>")),
                        t.append("</span>"),
                        twig.attr(s, "last") || t.append("<span>, </span>")) : (t.append('<span class="thread_letter__contact thread_letter__contact_user'),
                        twig.attr(s, "first") && t.append(" thread-letter__contact-user-first"),
                        t.append('">'),
                        t.append(twig.filter.escape(this.env_, "name"in i ? i.name : "", "light_escape", null, !0)),
                        t.append("</span>"),
                        twig.attr(s, "last") || t.append("<span>, </span>")),
                        ++s.index0,
                        ++s.index,
                        s.first = !1,
                        s.length && (--s.revindex0,
                        --s.revindex,
                        s.last = 0 === s.revindex0)
                    }
                    ), this),
                    twig.attr("item"in i ? i.item : "", "attachment") && twig.filter.length(this.env_, twig.attr("item"in i ? i.item : "", "attachment")) > 0 && (t.append('<div style="float: right; "><div class="thread-letter__attached-files-counter"><span class="icon icon-attachment-icon icon-inline thread-letter__attached-files-icon"></span><span class="thread-letter__attached-files-count">'),
                    t.append(twig.filter.escape(this.env_, twig.filter.length(this.env_, twig.attr("item"in i ? i.item : "", "attachment")), "light_escape", null, !0)),
                    t.append("&nbsp;"),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("numeral", twig.attr("lang"in i ? i.lang : "", "mail_letter_file"), twig.filter.length(this.env_, twig.attr("item"in i ? i.item : "", "attachment"))), "light_escape", null, !0)),
                    t.append("</span></div></div>")),
                    t.append('<div class="thread-letter__action-more js-letter-show-all-contacts" style="cursor: pointer;"><span class="thread-letter__action-more_show-hide">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "mail_letter_action_more"), "light_escape", null, !0)),
                    t.append('</span></div></div><div class="thread-letter__contacts-table js-letter-contacts-table" '),
                    twig.filter.length(this.env_, twig.attr("item"in i ? i.item : "", "to")) < 2 ? t.append(' style="display:table" ') : t.append(' style="display: none;" '),
                    t.append('><div class="thread-letter__contacts-row" style="display: table-row;"><div class="thread-letter__contacts-cell" style="display: table-cell; padding-right: 7px; vertical-align: top; font-size: 13px;"><span class="thread_letter__contacts__to_word"> '),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "mail_list_field_to") + ": ", "light_escape", null, !0)),
                    t.append('</span></div><div class="thread-letter__contacts-cell" style="display: table-cell; vertical-align: top;">'),
                    new (e._get("interface/mail/thread/letter_contacts.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        name: "contacts__to",
                        class_name: "thread-letter__contacts-to_full",
                        max_count: "max_letters_count"in i ? i.max_letters_count : "",
                        items: twig.attr("item"in i ? i.item : "", "to"),
                        special_first: !0,
                        expanding_action: "js-letter-show-all-contacts-to",
                        highlight_first: !0
                    })),
                    new (e._get("interface/mail/thread/letter_contacts.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        name: "contacts__to",
                        class_name: "thread-letter__contacts-to_all",
                        items: twig.attr("item"in i ? i.item : "", "to"),
                        highlight_first: !0
                    })),
                    t.append("</div></div>"),
                    twig.filter.length(this.env_, twig.attr("item"in i ? i.item : "", "cc")) > 0 && (t.append('<div class="thread-letter__contacts-row" style="display: table-row;"><div class="thread-letter__contacts-cell" style="display: table-cell; padding-right: 7px; vertical-align: top; font-size: 13px; padding-top:4px;"><span class="thread_letter__contacts__to_word"> '),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "mail_letter_copy") + ": ", "light_escape", null, !0)),
                    t.append('</span></div><div class="thread-letter__contacts-cell" style="display: table-cell; vertical-align: top; padding-top:4px;">'),
                    new (e._get("interface/mail/thread/letter_contacts.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        name: "copy",
                        class_name: "thread-letter__copy_full",
                        max_count: "max_letters_count"in i ? i.max_letters_count : "",
                        items: twig.attr("item"in i ? i.item : "", "cc"),
                        expanding_action: "js-letter-show-all-copies"
                    })),
                    new (e._get("interface/mail/thread/letter_contacts.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        name: "copy",
                        class_name: "thread-letter__copy_all",
                        items: twig.attr("item"in i ? i.item : "", "cc")
                    })),
                    t.append("</div></div>")),
                    t.append('</div></div><div id="list_multiple_actions" class="thread_letter__actions"><span class="thread_letter__actions__time">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("date", twig.attr("item"in i ? i.item : "", "date")), "light_escape", null, !0)),
                    t.append('</span></div><div class="thread_letter__message"><div class="js-hs-scroller custom-scroll js-nonbounce-skip thread_letter__message_inner"><div class="js-scroll-container thread_letter__message_container"><div class="anti_reset">'),
                    t.append(twig.attr("item"in i ? i.item : "", "content")),
                    t.append("</div></div></div></div>"),
                    new (e._get("interface/mail/thread/attachments.twig"))(this.env_).render_(t, i),
                    t.append("</div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_mail_thread_letter"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/mail/thread/letter", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
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
                    e.append('<div class="thread_letter__'),
                    e.append(twig.filter.escape(this.env_, "name"in t ? t.name : "", "light_escape", null, !0)),
                    "class_name"in t && t.class_name && (e.append(" "),
                    e.append(twig.filter.escape(this.env_, "class_name"in t ? t.class_name : "", "light_escape", null, !0))),
                    e.append('" '),
                    twig.filter.length(this.env_, "items"in t ? t.items : "") < 2 && ("thread-letter__contacts-to_full" == ("class_name"in t ? t.class_name : "") || "thread-letter__copy_full" == ("class_name"in t ? t.class_name : "")) && e.append(' style="display:table" '),
                    e.append(">"),
                    t.max_count = "max_count"in t ? t.max_count : "",
                    "max_count"in t && t.max_count && twig.filter.length(this.env_, "items"in t ? t.items : "") >= ("max_count"in t ? t.max_count : "") ? t.limit = ("max_count"in t ? t.max_count : "") - 1 : t.limit = twig.filter.length(this.env_, "items"in t ? t.items : "") - 1,
                    t._parent = t;
                    var n = twig.range(0, "limit"in t ? t.limit : "")
                      , a = {
                        index0: 0,
                        index: 1,
                        first: !0
                    };
                    if (twig.countable(n)) {
                        var s = twig.count(n);
                        a.revindex0 = s - 1,
                        a.revindex = s,
                        a.length = s,
                        a.last = 1 === s
                    }
                    twig.forEach(n, (function(i, n) {
                        t._key = n,
                        t.i = i,
                        t.item = twig.attr("items"in t ? t.items : "", "i"in t ? t.i : "", void 0, "array"),
                        twig.attr("item"in t ? t.item : "", "name") ? t.contact = twig.attr("item"in t ? t.item : "", "name") + " <" + twig.attr("item"in t ? t.item : "", "email") + ">" : t.contact = twig.attr("item"in t ? t.item : "", "email"),
                        twig.attr(twig.attr("item"in t ? t.item : "", "actions"), "add") ? (e.append('<span class="thread_letter__contact thread_letter__contact_text js-thread-letter-email'),
                        "highlight_first"in t && t.highlight_first && twig.attr(a, "first") && e.append(" thread-letter__contact-user-first"),
                        e.append('" data-entity="contact">'),
                        e.append(twig.filter.escape(this.env_, "contact"in t ? t.contact : "", "light_escape", null, !0)),
                        e.append("</span>"),
                        twig.attr(a, "index0") < ("limit"in t ? t.limit : "") && e.append(", ")) : twig.attr(twig.attr("item"in t ? t.item : "", "actions"), "view") ? (e.append('<span class="thread_letter__contact">'),
                        twig.attr("item"in t ? t.item : "", "url") ? (e.append('<a href="'),
                        e.append(twig.filter.escape(this.env_, twig.attr("item"in t ? t.item : "", "url"), "light_escape", null, !0)),
                        e.append('" class="thread_letter__contact_link js-navigate-link'),
                        "highlight_first"in t && t.highlight_first && twig.attr(a, "first") && e.append(" thread-letter__contact-user-first"),
                        e.append('">'),
                        e.append(twig.filter.escape(this.env_, "contact"in t ? t.contact : "", "light_escape", null, !0)),
                        e.append("</a>")) : (e.append('<span class="thread_letter__contact_text js-thread-letter-email-blocked'),
                        "highlight_first"in t && t.highlight_first && twig.attr(a, "first") && e.append(" thread-letter__contact-user-first"),
                        e.append('">'),
                        e.append(twig.filter.escape(this.env_, "contact"in t ? t.contact : "", "light_escape", null, !0)),
                        e.append("</span>")),
                        e.append("</span>"),
                        twig.attr(a, "index0") < ("limit"in t ? t.limit : "") && e.append(", ")) : (e.append('<span class="thread_letter__contact thread_letter__contact_user'),
                        "highlight_first"in t && t.highlight_first && twig.attr(a, "first") && e.append(" thread-letter__contact-user-first"),
                        e.append('">'),
                        e.append(twig.filter.escape(this.env_, "contact"in t ? t.contact : "", "light_escape", null, !0)),
                        e.append("</span>"),
                        twig.attr(a, "index0") < ("limit"in t ? t.limit : "") && e.append(", ")),
                        ++a.index0,
                        ++a.index,
                        a.first = !1,
                        a.length && (--a.revindex0,
                        --a.revindex,
                        a.last = 0 === a.revindex0)
                    }
                    ), this),
                    "max_count"in t && t.max_count && twig.filter.length(this.env_, "items"in t ? t.items : "") > ("max_count"in t ? t.max_count : "") && (t.other_items_num = twig.filter.length(this.env_, "items"in t ? t.items : "") - ("max_count"in t ? t.max_count : ""),
                    e.append('<span class="thread_letter__contacts_more'),
                    "expanding_action"in t && t.expanding_action && (e.append(" "),
                    e.append(twig.filter.escape(this.env_, "expanding_action"in t ? t.expanding_action : "", "light_escape", null, !0))),
                    e.append('">'),
                    e.append(twig.filter.escape(this.env_, twig.attr("lang"in t ? t.lang : "", "mail_letter_contacts_and_other"), "light_escape", null, !0)),
                    e.append(" "),
                    e.append(twig.filter.escape(this.env_, "other_items_num"in t ? t.other_items_num : "", "light_escape", null, !0)),
                    e.append("</span>")),
                    e.append("</div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_mail_thread_letter_contacts"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/mail/thread/letter_contacts", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e),
                    this.setBlocks({
                        icon: twig.bind(this.block_icon, this),
                        header: twig.bind(this.block_header, this),
                        header_action: twig.bind(this.block_header_action, this),
                        body: twig.bind(this.block_body, this),
                        footer: twig.bind(this.block_footer, this)
                    })
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(t) {
                    return e._get("interface/notes/defaults/note.twig")
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    t.wrapper_class_name = "feed-note-wrapper-mail_message js-feed-note",
                    t.additional_data = "id='thread_letter_" + twig.attr("item"in t ? t.item : "", "id") + "'",
                    t.has_actions = !!twig.attr(twig.attr("data"in t ? t.data : "", "params"), "private", void 0, void 0, !0) && twig.filter.def(twig.attr(twig.attr("data"in t ? t.data : "", "params"), "private"), !1) && twig.attr(twig.attr("data"in t ? t.data : "", "params"), "is_owner"),
                    t.avatar_name = twig.attr(twig.attr(twig.attr("item"in t ? t.item : "", "from"), 0, void 0, "array"), "name"),
                    t.name_from = twig.attr(twig.attr(twig.attr("item"in t ? t.item : "", "from"), 0, void 0, "array"), "name") || twig.attr(twig.attr(twig.attr("item"in t ? t.item : "", "from"), 0, void 0, "array"), "email"),
                    t.name_to = twig.attr(twig.attr(twig.attr("item"in t ? t.item : "", "to"), 0, void 0, "array"), "name") || twig.attr(twig.attr(twig.attr("item"in t ? t.item : "", "to"), 0, void 0, "array"), "email"),
                    t.is_incoming = !twig.attr("item"in t ? t.item : "", "sent"),
                    t.is_external = !0,
                    t.note_body_class_name = "note--body-mail",
                    "has_actions"in t && t.has_actions && (t.note_body_class_name = ("note_body_class_name"in t ? t.note_body_class_name : "") + " note--body-mail-has-actions"),
                    t.note_class_name = "",
                    twig.attr(twig.attr("data"in t ? t.data : "", "params"), "private", void 0, void 0, !0) && twig.filter.def(twig.attr(twig.attr("data"in t ? t.data : "", "params"), "private"), !1) && (t.note_class_name = "feed-note-private-no-rights"),
                    this.getParent(t).render_(e, t, twig.extend({}, this.getBlocks(), i))
                }
                ,
                t.prototype.block_icon = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    e.append('<div class="feed-note__icon-inner"><svg class="svg-icon svg-common--mail-dims"><use xlink:href="#common--mail"></use></svg><span class="feed-note__icon-direction feed-note__icon-direction_'),
                    "is_incoming"in t && t.is_incoming ? e.append("in") : e.append("out"),
                    e.append('"><svg class="svg-icon svg-notes--feed-arrow-dims"><use xlink:href="#notes--feed-arrow"></use></svg></span></div>')
                }
                ,
                t.prototype.block_header = function(t, i, n) {
                    if (n = void 0 === n ? {} : n,
                    t.append(twig.filter.escape(this.env_, this.env_.filter("feed_date", twig.attr("item"in i ? i.item : "", "date"), "", !0), "light_escape", null, !0)),
                    t.append("&nbsp;"),
                    "is_incoming"in i && i.is_incoming ? t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Incoming email") + " ", "light_escape", null, !0)) : t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Outgoing email") + " ", "light_escape", null, !0)),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "from"), "light_escape", null, !0)),
                    t.append(":&nbsp;"),
                    new (e._get("interface/notes/defaults/amojo_user.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        id: "user_id_from"in i ? i.user_id_from : "",
                        name: "name_from"in i ? i.name_from : ""
                    })),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "mail_letter_to"), "light_escape", null, !0)),
                    t.append(":&nbsp;"),
                    new (e._get("interface/notes/defaults/amojo_user.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        id: "user_id_to"in i ? i.user_id_to : "",
                        name: "name_to"in i ? i.name_to : ""
                    })),
                    "is_incoming"in i && i.is_incoming && (t.append("<span>&nbsp;("),
                    t.append(twig.filter.escape(this.env_, twig.attr(twig.attr(twig.attr("item"in i ? i.item : "", "to"), 0, void 0, "array"), "email"), "light_escape", null, !0)),
                    t.append(")</span>")),
                    twig.filter.length(this.env_, twig.attr("item"in i ? i.item : "", "cc")) > 0) {
                        t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "write_mail_cc"), "light_escape", null, !0)),
                        i._parent = i;
                        var a = twig.attr("item"in i ? i.item : "", "cc")
                          , s = {
                            index0: 0,
                            index: 1,
                            first: !0
                        };
                        if (twig.countable(a)) {
                            var r = twig.count(a);
                            s.revindex0 = r - 1,
                            s.revindex = r,
                            s.length = r,
                            s.last = 1 === r
                        }
                        twig.forEach(a, (function(n, a) {
                            i._key = a,
                            i.cc = n,
                            t.append("&nbsp;"),
                            new (e._get("interface/notes/defaults/amojo_user.twig"))(this.env_).render_(t, twig.extend({}, i, {
                                name: twig.attr("cc"in i ? i.cc : "", "email")
                            })),
                            ++s.index0,
                            ++s.index,
                            s.first = !1,
                            s.length && (--s.revindex0,
                            --s.revindex,
                            s.last = 0 === s.revindex0)
                        }
                        ), this)
                    }
                }
                ,
                t.prototype.block_header_action = function(e, t, i) {
                    if (i = void 0 === i ? {} : i,
                    "has_actions"in t && t.has_actions) {
                        e.append('<div class="feed-note__share js-note-mail-share"'),
                        t._parent = t;
                        var n = twig.filter.def(twig.filter.merge(twig.attr(twig.attr("data"in t ? t.data : "", "params"), "link_data"), {
                            note_id: "id"in t ? t.id : "",
                            element_type: "element_type"in t ? t.element_type : ""
                        }), []);
                        twig.forEach(n, (function(i, n) {
                            t.attr = n,
                            t.val = i,
                            e.append(" data-"),
                            e.append(twig.filter.escape(this.env_, "attr"in t ? t.attr : "", "light_escape", null, !0)),
                            e.append('="'),
                            e.append(twig.filter.escape(this.env_, "val"in t ? t.val : "", "light_escape", null, !0)),
                            e.append('" ')
                        }
                        ), this),
                        e.append(' ><span class="feed-note__share-icon icon icon-open-lock"></span> '),
                        e.append(twig.filter.escape(this.env_, twig.attr("lang"in t ? t.lang : "", "mail_share_access"), "light_escape", null, !0)),
                        e.append("</div>")
                    }
                }
                ,
                t.prototype.block_body = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    e.append('<div class="feed-note__mail-content">'),
                    twig.attr(twig.attr("data"in t ? t.data : "", "params"), "show_more") ? e.append(twig.attr("item"in t ? t.item : "", "content")) : !twig.attr(twig.attr("data"in t ? t.data : "", "params"), "is_owner") && twig.attr(twig.attr("data"in t ? t.data : "", "params"), "private", void 0, void 0, !0) && twig.filter.def(twig.attr(twig.attr("data"in t ? t.data : "", "params"), "private"), !1) ? e.append(twig.filter.escape(this.env_, twig.attr("lang"in t ? t.lang : "", "no_rights_to_private_message"), "light_escape", null, !0)) : (e.append("<span class='feed-note__mail-content-title'>"),
                    e.append(twig.filter.escape(this.env_, twig.attr("item"in t ? t.item : "", "subject"), "light_escape", null, !0)),
                    e.append('</span><div class="feed-note__mail-content-summary"><span class="feed-note__mail-content-summary_text--preview">'),
                    e.append(twig.filter.escape(this.env_, twig.attr("item"in t ? t.item : "", "preview"), "light_escape", null, !0)),
                    e.append('</span><div class="feed-note__mail-content-summary_text"><div class="feed-note__mail-content-summary_msg">'),
                    twig.attr("item"in t ? t.item : "", "content") ? (e.append(twig.attr("item"in t ? t.item : "", "content")),
                    e.append("<br>")) : e.append("<br><br>"),
                    e.append("</div></div>"),
                    "is_incoming"in t && t.is_incoming || twig.attr("item"in t ? t.item : "", "opened_at") && twig.filter.length(this.env_, twig.attr("item"in t ? t.item : "", "opened_at")) && (e.append('<div class="feed-note__mail-content-delivery feed-note__mail-content-delivery-delivered">'),
                    e.append(twig.filter.escape(this.env_, twig.attr("lang"in t ? t.lang : "", "mail_delivery_status_delivered"), "light_escape", null, !0)),
                    e.append("&nbsp;"),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("feed_date", twig.attr("item"in t ? t.item : "", "opened_at"), "", !0), "light_escape", null, !0)),
                    e.append("</div>")),
                    e.append("</div>")),
                    e.append("</div>")
                }
                ,
                t.prototype.block_footer = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    new (e._get("interface/mail/thread/attachments.twig"))(this.env_).render_(t, i)
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_mail_thread_message"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/mail/thread/message", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
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
                    i.added_menu = [],
                    i.context_menu_class_name = "",
                    "entity"in i && i.entity ? i.added_menu = "more_items"in i ? i.more_items : "" : (i.context_menu_class_name = "button-input__context-menu--cleared",
                    twig.attr("actions"in i ? i.actions : "", "add_contact") && (i.added_menu = twig.filter.merge("added_menu"in i ? i.added_menu : "", [{
                        class_name: "js-mail_thread__create_contact",
                        text: twig.attr("lang"in i ? i.lang : "", "mail_letter_create_contact"),
                        icon: "add-user",
                        additional_data: "data-entity='contact'"
                    }])),
                    twig.attr("actions"in i ? i.actions : "", "add_customer") && (i.added_menu = twig.filter.merge("added_menu"in i ? i.added_menu : "", [{
                        class_name: "js-mail_thread__create_customer",
                        text: twig.attr("lang"in i ? i.lang : "", "mail_letter_create_customer"),
                        icon: "add-lead",
                        additional_data: "data-entity='customer'"
                    }]))),
                    new (e._get("interface/controls/button.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        inner_class_name: "button-input-more-inner",
                        class_name: " button-input-more mail_thread__create-more",
                        context_menu_class_name: "context_menu_class_name"in i ? i.context_menu_class_name : "",
                        svg_class_name: "controls--button-more",
                        context_menu: "added_menu"in i ? i.added_menu : ""
                    }))
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_mail_thread_more_button"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/mail/thread/more_button", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e),
                    this.setBlocks({
                        reply_block: twig.bind(this.block_reply_block, this)
                    })
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(e) {
                    return !1
                }
                ,
                t.prototype.render_ = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    t.append('<div class="notes-wrapper reached-end" id="'),
                    t.append(twig.filter.escape(this.env_, "scroller_id"in i ? i.scroller_id : "", "light_escape", null, !0)),
                    t.append('"><div class="notes-wrapper__scroller custom-scroll"><div class="notes-wrapper__scroller-inner"><div class="notes-wrapper__notes js-notes">'),
                    i._parent = i;
                    var a = "items"in i ? i.items : ""
                      , s = {
                        index0: 0,
                        index: 1,
                        first: !0
                    };
                    if (twig.countable(a)) {
                        var r = twig.count(a);
                        s.revindex0 = r - 1,
                        s.revindex = r,
                        s.length = r,
                        s.last = 1 === r
                    }
                    twig.forEach(a, (function(n, a) {
                        i._key = a,
                        i.item = n,
                        new (e._get("interface/mail/thread/message.twig"))(this.env_).render_(t, twig.extend({}, i, {
                            item: "item"in i ? i.item : ""
                        })),
                        ++s.index0,
                        ++s.index,
                        s.first = !1,
                        s.length && (--s.revindex0,
                        --s.revindex,
                        s.last = 0 === s.revindex0)
                    }
                    ), this),
                    t.append('</div><div class="notes-wrapper__typing"></div><div class="notes-wrapper__filter-and-chat-users js-notes-filter-and-chat-users">'),
                    "is_preload"in i && i.is_preload || (t.append('<div class="notes-wrapper__filter-and-chat-users-inner"><div class="notes-wrapper__chat-users-wrapper"><a href="#" id="show-chat-list" style="display: none">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "participants"), "light_escape", null, !0)),
                    t.append(': <span id="show-chat-list-length"></span></a></div></div>')),
                    t.append('</div><div class="notes-wrapper__tasks empty"><div class="js-future-tasks-fixable notes-wrapper__tasks-inner-wrapper notes-wrapper__tasks-inner custom-scroll js-tasks"></div></div></div></div>'),
                    t.append(this.renderBlock("reply_block", i, n)),
                    t.append("</div>")
                }
                ,
                t.prototype.block_reply_block = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    "is_preload"in t && t.is_preload || (e.append('<div class="feed-compose minimized"><input type="hidden" class="js-changes-skip" name="feed-compose-switcher" value="email"><div class="feed-compose__inner"></div>'),
                    (twig.attr("_account_features"in t ? t._account_features : "", "airewriter") || twig.attr("_account_features"in t ? t._account_features : "", "kommo_ai_trial_started") && !twig.attr("_account_features"in t ? t._account_features : "", "kommo_ai_trial_ended")) && e.append('<div class="js-feed-ai-helpers feed-ai-helpers"></div><div class="js-feed-loader feed-compose__loader hidden"><div class="default-overlay"></div><span class="spinner-icon spinner-icon-abs-center"></span></div>'),
                    e.append("</div>"),
                    e.append('<div class="notes-wrapper__compose-bottom"></div><div class="notes-wrapper__unseen-count js-unseen-count" data-text="'),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Unread messages"), "light_escape", null, !0)),
                    e.append('"></div>'))
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_mail_thread_notes_wrapper"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/mail/thread/notes_wrapper", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e),
                    this.setBlocks({
                        aside: twig.bind(this.block_aside, this),
                        head: twig.bind(this.block_head, this),
                        static: twig.bind(this.block_static, this),
                        content: twig.bind(this.block_content, this)
                    })
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(t) {
                    return e._get("interface/page/base.twig")
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    this.getParent(t).render_(e, t, twig.extend({}, this.getBlocks(), i))
                }
                ,
                t.prototype.block_aside = function(e, t, i) {
                    i = void 0 === i ? {} : i
                }
                ,
                t.prototype.block_head = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    new (e._get("interface/mail/thread/header.twig"))(this.env_).render_(t, i)
                }
                ,
                t.prototype.block_static = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    e.append(twig.filter.escape(this.env_, this.env_.invoke("inject_static", ["mail_thread.php"], this), "light_escape", null, !0))
                }
                ,
                t.prototype.block_content = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    new (e._get("interface/mail/thread/thread.twig"))(this.env_).render_(t, i)
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_mail_thread_page"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/mail/thread/page", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
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
                    "in_modal"in i && i.in_modal) {
                        t.append('<div class="mail_thread__wrapper"><div class="mail_thread__actions block-selection-prepended">'),
                        "entity"in i && i.entity ? (t.append('<div class="mail_thread__linked_lead"><div class="mail_thread__linked_lead__lead-chain"><span class="tips-icon icon icon-inline icon-chain"></span></div><div class="mail_thread__linked_lead__lead-name">'),
                        i.entity_name = twig.attr("entity"in i ? i.entity : "", "name"),
                        "lead" == twig.attr("entity"in i ? i.entity : "", "type") ? i.entity_name = this.env_.filter("lead_name", "entity_name"in i ? i.entity_name : "", twig.attr("entity"in i ? i.entity : "", "id")) : "customer" == twig.attr("entity"in i ? i.entity : "", "type") ? i.entity_name = this.env_.filter("customer_name", "entity_name"in i ? i.entity_name : "", twig.attr("entity"in i ? i.entity : "", "id")) : "contact" == twig.attr("entity"in i ? i.entity : "", "type") && (i.entity_name = this.env_.filter("contact_name", "entity_name"in i ? i.entity_name : "")),
                        twig.attr(twig.attr("entity"in i ? i.entity : "", "actions"), "view") ? (t.append('<span class="mail_thread__linked_lead_type">'),
                        t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "mail_entity_" + twig.attr("entity"in i ? i.entity : "", "type")), "light_escape", null, !0)),
                        t.append(':&nbsp;</span><a href="'),
                        t.append(twig.filter.escape(this.env_, twig.attr("entity"in i ? i.entity : "", "url"), "light_escape", null, !0)),
                        t.append('" class="mail_thread__lead_link js-navigate-link">'),
                        t.append(twig.filter.escape(this.env_, "entity_name"in i ? i.entity_name : "", "light_escape", null, !0)),
                        t.append("</a>")) : (t.append('<span class="mail_thread__lead_text">'),
                        t.append(twig.filter.escape(this.env_, "entity_name"in i ? i.entity_name : "", "light_escape", null, !0)),
                        t.append("</span>")),
                        t.append("</div>"),
                        twig.attr(twig.attr("entity"in i ? i.entity : "", "actions"), "view") && (t.append('<div class="thread__lead-more-button"><span class="linked-form__field__more js-tip-holder"><span class="icon icon-inline icon-dots"></span>'),
                        new (e._get("interface/common/tip.twig"))(this.env_).render_(t, twig.extend({}, i, {
                            class_name: "linked-form__field__more__tip tips-at-bottom",
                            items: "more_items"in i ? i.more_items : "",
                            is_custom_tip_holder: !0
                        })),
                        t.append("</span></div>")),
                        t.append('</div><div class="mail_thread__action_buttons"><div class="mail_thread__action mail_thread__action_reply">'),
                        new (e._get("interface/controls/button.twig"))(this.env_).render_(t, twig.extend({}, i, {
                            class_name: "mail_thread__write_mail js-mail_thread__write_mail",
                            text: this.env_.filter("i18n", "multiple_reply_label"),
                            context_menu: !1
                        })),
                        t.append("</div></div>")) : (twig.attr("actions"in i ? i.actions : "", "add_lead") || twig.attr("actions"in i ? i.actions : "", "add_customer") || twig.attr("actions"in i ? i.actions : "", "add_contact")) && (t.append('<div class="mail_thread__action_buttons">'),
                        new (e._get("interface/mail/thread/common_create_control.twig"))(this.env_).render_(t, i),
                        twig.attr("actions"in i ? i.actions : "", "link") && (t.append('<div id="link-button-action" class="mail_thread__action">'),
                        new (e._get("interface/controls/button.twig"))(this.env_).render_(t, twig.extend({}, i, {
                            class_name: "mail_thread__link_lead js-mail_thread__link_lead",
                            text: this.env_.filter("i18n", "mail_letter_link_lead"),
                            additional_data: "data-entity='lead'"
                        })),
                        t.append('</div><div id="suggest-action" class="mail_thread__action hidden-block">'),
                        new (e._get("interface/controls/suggest.twig"))(this.env_).render_(t, twig.extend({}, i, {
                            items: "leads"in i ? i.leads : "",
                            wrapper_id: "thread-lead-suggest",
                            list_separated: !0,
                            suggest_icon: "chain",
                            closable: !0,
                            placeholder: this.env_.filter("i18n", "top_search_input_placeholder"),
                            name: "suggest_leads_mail"
                        })),
                        t.append("</div>")),
                        (twig.attr("actions"in i ? i.actions : "", "add_customer") || twig.attr("actions"in i ? i.actions : "", "add_contact")) && new (e._get("interface/mail/thread/more_button.twig"))(this.env_).render_(t, i),
                        t.append('<div class="mail_thread__action mail_thread__action_reply">'),
                        new (e._get("interface/controls/button.twig"))(this.env_).render_(t, twig.extend({}, i, {
                            class_name: "mail_thread__write_mail js-mail_thread__write_mail",
                            text: this.env_.filter("i18n", "multiple_reply_label")
                        })),
                        t.append("</div></div>")),
                        t.append('</div><div class="mail_thread__list" id="mail_thread_list">'),
                        i._parent = i;
                        var a = "items"in i ? i.items : ""
                          , s = {
                            index0: 0,
                            index: 1,
                            first: !0
                        };
                        if (twig.countable(a)) {
                            var r = twig.count(a);
                            s.revindex0 = r - 1,
                            s.revindex = r,
                            s.length = r,
                            s.last = 1 === r
                        }
                        twig.forEach(a, (function(n, a) {
                            i._key = a,
                            i.item = n,
                            new (e._get("interface/mail/thread/letter.twig"))(this.env_).render_(t, twig.extend({}, i, {
                                item: "item"in i ? i.item : "",
                                attachments_blocked: "attachments_blocked"in i ? i.attachments_blocked : ""
                            })),
                            ++s.index0,
                            ++s.index,
                            s.first = !1,
                            s.length && (--s.revindex0,
                            --s.revindex,
                            s.last = 0 === s.revindex0)
                        }
                        ), this),
                        t.append("</div></div>")
                    } else
                        new (e._get("interface/mail/thread/notes_wrapper.twig"))(this.env_).render_(t, twig.extend({}, i, {
                            is_add_mode: !0,
                            is_preload: !1
                        }))
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_mail_thread_thread"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/mail/thread/thread", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
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
                    t.title_width = ["85%", "65%", "75%"],
                    t.subtitle_width = ["75%", "65%", "65%"],
                    e.append('<div class="bcc-settings__mailbox bcc-settings__mailbox_plug"><dt class="bcc-settings__mailbox_title" style="width: '),
                    e.append(twig.filter.escape(this.env_, twig.attr("title_width"in t ? t.title_width : "", "i"in t ? t.i : "", void 0, "array"), "light_escape", null, !0)),
                    e.append('"><span class="bcc-settings__mailbox_title--text"></span></span></dt><dd class="bcc-settings__mailbox_description" style="width: '),
                    e.append(twig.filter.escape(this.env_, twig.attr("subtitle_width"in t ? t.subtitle_width : "", "i"in t ? t.i : "", void 0, "array"), "light_escape", null, !0)),
                    e.append('"></dd></div>')
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_mail_plug_settings_bcc_mailbox_item"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/mail/plug/settings/bcc_mailbox_item", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
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
                    t.append('<div id="mail-ext-addresses__main-wrapper" class="mail-ext-addresses__main-wrapper"><div class="safety_settings__section_head_new"><div class="safety_settings__section_head_new_title">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "List of exceptions"), "light_escape", null, !0)),
                    t.append('</div></div><div class="safety_settings__section_new_text"><p>'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "All mail from addresses on this list will not be automatically included when merged and grouped into a chain"), "light_escape", null, !0)),
                    t.append('</p></div><div class="mail-ext-addresses__input" id="mail-ext-addresses__input">'),
                    new (e._get("interface/mail/modal/mailbox_suggest.twig"))(this.env_).render_(t, i),
                    t.append("</div></div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_mail_plug_settings_ext_addresses"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/mail/plug/settings/ext_addresses", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
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
                    t.append('<div class="dp-sources"><div class="mailbox-title dp-sources__caption dp-sources__caption_sources">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Connected boxes"), "light_escape", null, !0)),
                    t.append('</div><div class="mailbox-list" id="mailbox-list">'),
                    i._parent = i;
                    var a = twig.range(0, 2)
                      , s = {
                        index0: 0,
                        index: 1,
                        first: !0
                    };
                    if (twig.countable(a)) {
                        var r = twig.count(a);
                        s.revindex0 = r - 1,
                        s.revindex = r,
                        s.length = r,
                        s.last = 1 === r
                    }
                    twig.forEach(a, (function(n, a) {
                        i._key = a,
                        i.i = n,
                        new (e._get("interface/mail/plug/settings/mailbox_item.twig"))(this.env_).render_(t, i),
                        ++s.index0,
                        ++s.index,
                        s.first = !1,
                        s.length && (--s.revindex0,
                        --s.revindex,
                        s.last = 0 === s.revindex0)
                    }
                    ), this),
                    t.append('</div><button class="dp-sources__button-add dp-source__loader js-add-mailbox"><div class="dp-sources__button-add-plus-wrapper"><span class="dp-sources__button-add-plus"></span></div><span class="dp-sources__button-add-text">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Add email"), "light_escape", null, !0)),
                    t.append('</span></button><div class="dp-sources__scoring"><div class="bcc-settings__container"><div class="dp-sources__caption dp-sources__caption_scoring">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Built-in smart email addresses"), "light_escape", null, !0)),
                    t.append('</div><div class="bcc-settings__description dp-sources__sources-text dp-sources__sources-text_scoring">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "In addition to full 2-way email integration, you have the option to use special amoCRM mailboxes to recieve email correspondence from clients in amoCRM. When you communicate with a client, just CC or BCC these email addresses, and the message will be visible in lead and contact cards"), "light_escape", null, !0)),
                    t.append('.<br><span class="bcc-settings__restrictions__link js-show-restrictions dp-sources__scoring-settings-button">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Why wasn’t my message attached?"), "light_escape", null, !0)),
                    t.append('</span></div><div class="bcc-settings__restrictions">'),
                    t.append(this.env_.filter("i18n", "mailbox_instruction")),
                    t.append('<span class="bcc-settings__restrictions__link js-hide-restrictions dp-sources__scoring-settings-button">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Show less"), "light_escape", null, !0)),
                    t.append('</span></div><dl class="bcc-settings__mailbox-list">'),
                    i._parent = i,
                    a = twig.range(0, 2),
                    s = {
                        index0: 0,
                        index: 1,
                        first: !0
                    },
                    twig.countable(a) && (r = twig.count(a),
                    s.revindex0 = r - 1,
                    s.revindex = r,
                    s.length = r,
                    s.last = 1 === r),
                    twig.forEach(a, (function(n, a) {
                        i._key = a,
                        i.i = n,
                        new (e._get("interface/mail/plug/settings/bcc_mailbox_item.twig"))(this.env_).render_(t, i),
                        ++s.index0,
                        ++s.index,
                        s.first = !1,
                        s.length && (--s.revindex0,
                        --s.revindex,
                        s.last = 0 === s.revindex0)
                    }
                    ), this),
                    t.append('</dl></div></div></div><div class="mail-templates"><div class="safety_settings__section_new"><div class="mail-templates__container" id="mail-templates__container">'),
                    new (e._get("interface/mail/plug/settings/templates_list.twig"))(this.env_).render_(t, i),
                    t.append('</div></div><div class="safety_settings__section_new"><div class="mail-ext-addresses__container" id="mail-ext-addresses__container">'),
                    new (e._get("interface/mail/plug/settings/ext_addresses.twig"))(this.env_).render_(t, i),
                    t.append('</div></div><div class="safety_settings__section_new"><div class="mail-signatures__container" id="mail-signatures__container">'),
                    new (e._get("interface/mail/plug/settings/signatures.twig"))(this.env_).render_(t, i),
                    t.append("</div></div></div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_mail_plug_settings_mail_more"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/mail/plug/settings/mail_more", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e),
                    this.setBlocks({
                        classes: twig.bind(this.block_classes, this),
                        logo: twig.bind(this.block_logo, this),
                        caption: twig.bind(this.block_caption, this),
                        subtitle: twig.bind(this.block_subtitle, this)
                    })
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(t) {
                    return e._get("interface/digital_pipeline/lead_sources_templates/base_source.twig")
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    t.class = "mailbox__plug",
                    t.title_widths = ["85%", "55%", "75%"],
                    t.subtitle_widths = ["45%", "75%", "70%"],
                    t.icons = ["gmail", "mailru", "yandex"],
                    this.getParent(t).render_(e, t, twig.extend({}, this.getBlocks(), i))
                }
                ,
                t.prototype.block_classes = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    e.append(twig.filter.escape(this.env_, "class"in t ? t.class : "", "light_escape", null, !0))
                }
                ,
                t.prototype.block_logo = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    e.append('<span class="icon icon-mail-'),
                    e.append(twig.filter.escape(this.env_, twig.attr("icons"in t ? t.icons : "", "i"in t ? t.i : "", void 0, "array"), "light_escape", null, !0)),
                    e.append('-large"></span>')
                }
                ,
                t.prototype.block_caption = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    e.append('<h4 class="dp-source__caption" style="width: '),
                    e.append(twig.filter.escape(this.env_, twig.attr("title_widths"in t ? t.title_widths : "", "i"in t ? t.i : "", void 0, "array"), "light_escape", null, !0)),
                    e.append('"></h4>')
                }
                ,
                t.prototype.block_subtitle = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    e.append('<p class="dp-source__subtitle" style="width: '),
                    e.append(twig.filter.escape(this.env_, twig.attr("subtitle_widths"in t ? t.subtitle_widths : "", "i"in t ? t.i : "", void 0, "array"), "light_escape", null, !0)),
                    e.append('"></p>')
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_mail_plug_settings_mailbox_item"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/mail/plug/settings/mailbox_item", t)
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
                    return e._get("interface/list/list.twig")
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    t.list_page_holder_class_name = "list-mail-settings",
                    this.getParent(t).render_(e, t, twig.extend({}, this.getBlocks(), i))
                }
                ,
                t.prototype.block_list_top_right = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    t.append('<div class="list__body-right__top digital-pipeline__body-right__top"><div class="list__top__actions list__top__actions_plain digital-pipeline__top-actions"><div class="right-button">'),
                    new (e._get("interface/controls/button.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        text: this.env_.filter("i18n", "Back"),
                        class_name: "js-back-button"
                    })),
                    t.append("</div></div></div>")
                }
                ,
                t.prototype.block_static = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    e.append(twig.filter.escape(this.env_, this.env_.invoke("inject_static", ["cards.css", "digital_pipeline.css", "settings.css", "mail.css", "mail_settings.php"], this), "light_escape", null, !0))
                }
                ,
                t.prototype.block_list_body = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    new (e._get("interface/mail/plug/settings/mail_more.twig"))(this.env_).render_(t, i)
                }
                ,
                t.prototype.block_list_footer = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    e.append('<div class="digital-pipeline__hider"></div>')
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_mail_plug_settings_settings_inner"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/mail/plug/settings/settings_inner", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
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
                    t.widths = ["35%", "65%", "50%", "60%"],
                    e.append('<div class="mail-signatures__item" id="signature-item_'),
                    e.append(twig.filter.escape(this.env_, twig.attr("item"in t ? t.item : "", "id"), "light_escape", null, !0)),
                    e.append('" data-user-id="'),
                    e.append(twig.filter.escape(this.env_, twig.attr("item"in t ? t.item : "", "user_id"), "light_escape", null, !0)),
                    e.append('" data-id="'),
                    e.append(twig.filter.escape(this.env_, twig.attr("item"in t ? t.item : "", "id"), "light_escape", null, !0)),
                    e.append('"><div class="mail-signatures__item--text_plug" style="width: '),
                    e.append(twig.filter.escape(this.env_, twig.attr("widths"in t ? t.widths : "", "i"in t ? t.i : "", void 0, "array"), "light_escape", null, !0)),
                    e.append('"></div></div>')
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_mail_plug_settings_signature_item"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/mail/plug/settings/signature_item", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
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
                    t.append('<div id="mail-signatures__main-wrapper" class="mail-signatures__main-wrapper"><div class="safety_settings__section_head_new"><div class="safety_settings__section_head_new_title">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Signatures"), "light_escape", null, !0)),
                    t.append('</div></div><div class="safety_settings__section_new_text"><p>'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Create several signatures for your business: for customers and for partners"), "light_escape", null, !0)),
                    t.append('</p></div><div class="mail-signatures__list" id="mail-signatures__list"><div class="mail-signatures_items" id="mail-signatures__items"><div class="mail-signatures__item mail-signatures__item_new mail-signatures__item_active js-add-signature" id="js-add-signature"><div class="dp-sources__button-add-plus-wrapper"><span class="dp-sources__button-add-plus"></span></div>'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Signatures"), "light_escape", null, !0)),
                    t.append("</div>"),
                    i._parent = i;
                    var a = twig.range(0, 3)
                      , s = {
                        index0: 0,
                        index: 1,
                        first: !0
                    };
                    if (twig.countable(a)) {
                        var r = twig.count(a);
                        s.revindex0 = r - 1,
                        s.revindex = r,
                        s.length = r,
                        s.last = 1 === r
                    }
                    twig.forEach(a, (function(n, a) {
                        i._key = a,
                        i.i = n,
                        new (e._get("interface/mail/plug/settings/signature_item.twig"))(this.env_).render_(t, i),
                        ++s.index0,
                        ++s.index,
                        s.first = !1,
                        s.length && (--s.revindex0,
                        --s.revindex,
                        s.last = 0 === s.revindex0)
                    }
                    ), this),
                    t.append('</div><div class="mail-signatures_work-area" id="mail-signatures_work-area">'),
                    new (e._get("interface/mail/modal/signature_form.twig"))(this.env_).render_(t, i),
                    t.append("</div></div></div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_mail_plug_settings_signatures"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/mail/plug/settings/signatures", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
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
                    t.widths = ["90%", "75%"],
                    e.append('<span class="template-item__handle"><span class="icon icon-v-dots"></span></span><div class="template-item__inner" style="width: '),
                    e.append(twig.filter.escape(this.env_, twig.attr("widths"in t ? t.widths : "", "i"in t ? t.i : "", void 0, "array"), "light_escape", null, !0)),
                    e.append('"><div class="template-item__body clearfix"><div class="template-item__body-inner"><div class="template-item__name">'),
                    e.append(twig.filter.escape(this.env_, "name"in t ? t.name : "", "light_escape", null, !0)),
                    e.append('</div></div><div class="template-item__body-edit"><span class="icon icon-inline icon-pencil"></span></div></div></div>')
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_mail_plug_settings_template_item"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/mail/plug/settings/template_item", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
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
                    t.append('<div class="template-item__wrapper template-item_plug sortable clearfix">'),
                    new (e._get("interface/mail/plug/settings/template_item.twig"))(this.env_).render_(t, i),
                    t.append("</div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_mail_plug_settings_template_wrapper"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/mail/plug/settings/template_wrapper", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
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
                    t.append('<div id="mail-templates__main-wrapper" class="mail-templates__main-wrapper"><div class="safety_settings__section_head_new"><div class="safety_settings__section_head_new_title">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Email templates"), "light_escape", null, !0)),
                    t.append('</div></div><div class="safety_settings__section_new_text"><p>'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "You can create email templates in advance and use them when sending to the client. After you add the templates will be available when you send a message"), "light_escape", null, !0)),
                    t.append('</p></div><div class="mail-templates__templates-holder" id="mail-templates__templates-holder"><div class="template-item sortable">'),
                    i._parent = i;
                    var a = twig.range(0, 1)
                      , s = {
                        index0: 0,
                        index: 1,
                        first: !0
                    };
                    if (twig.countable(a)) {
                        var r = twig.count(a);
                        s.revindex0 = r - 1,
                        s.revindex = r,
                        s.length = r,
                        s.last = 1 === r
                    }
                    twig.forEach(a, (function(n, a) {
                        i._key = a,
                        i.i = n,
                        new (e._get("interface/mail/plug/settings/template_wrapper.twig"))(this.env_).render_(t, i),
                        ++s.index0,
                        ++s.index,
                        s.first = !1,
                        s.length && (--s.revindex0,
                        --s.revindex,
                        s.last = 0 === s.revindex0)
                    }
                    ), this),
                    t.append('</div></div><button class="dp-sources__button-add dp-source__loader js-add-new-source" id="mail-templates__add-template"><div class="dp-sources__button-add-plus-wrapper"><span class="dp-sources__button-add-plus"></span></div><span class="dp-sources__button-add-text">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Add a template"), "light_escape", null, !0)),
                    t.append("</span></button></div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_mail_plug_settings_templates_list"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/mail/plug/settings/templates_list", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
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
                    t.append('<div class=" mailbox-options mailbox__modal-options mailbox-options_additional mailbox-options_hidden" id="mailbox-options_server">'),
                    "email"in i && i.email && "add" != ("mode"in i ? i.mode : "") && (t.append('<div class="mailbox__description">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "mailbox_server_change"), "light_escape", null, !0)),
                    t.append("</div>")),
                    t.append('<div class="mailbox-form__container"><form class="mailbox-form__table">'),
                    t.append('<div class="mailbox-form__row mailbox-form__row-imap_server"><div class="mailbox-form__cell mailbox-form__cell-title">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "mail_setup_imap_server_field_caption"), "light_escape", null, !0)),
                    t.append('</div><div class="mailbox-form__cell">'),
                    new (e._get("interface/controls/input.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        id: "mailbox-imap-server",
                        name: "imap_server",
                        placeholder: "imap.server.com",
                        value: "imap_server"in i ? i.imap_server : ""
                    })),
                    t.append('<div class="mailbox-form__error-input"></div></div></div><div class="mailbox-form__row mailbox-form__row-imap_port"><div class="mailbox-form__cell mailbox-form__cell-title">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "mail_setup_port_field_caption"), "light_escape", null, !0)),
                    t.append('</div><div class="mailbox-form__cell mailbox-form__cell-port">'),
                    new (e._get("interface/controls/input.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        id: "mailbox-imap-port",
                        name: "imap_port",
                        max_length: 5,
                        placeholder: "993",
                        value: "imap_port"in i ? i.imap_port : "",
                        class_name: "js-control-allow-numeric"
                    })),
                    t.append('<div class="mailbox-form__error-input"></div></div><div class="mailbox-form__cell mailbox-form__cell-encoding">'),
                    new (e._get("interface/controls/select.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        items: "encryption"in i ? i.encryption : "",
                        name: "imap_enc",
                        id: "mailbox-imap-enc",
                        selected: "imap_enc"in i ? i.imap_enc : ""
                    })),
                    t.append("</div></div>"),
                    t.append('<div class="mailbox-form__row mailbox-form__row-smtp_server"><div class="mailbox-form__cell mailbox-form__cell-title">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "mail_setup_smtp_server_field_caption"), "light_escape", null, !0)),
                    t.append('</div><div class="mailbox-form__cell">'),
                    new (e._get("interface/controls/input.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        id: "mailbox-smtp-server",
                        name: "smtp_server",
                        placeholder: "smtp.server.com",
                        value: "smtp_server"in i ? i.smtp_server : ""
                    })),
                    t.append('<div class="mailbox-form__error-input"></div>'),
                    "email"in i && i.email || (t.append('<div class="mailbox__show-login mailbox__show-smtp-login mail-settings-mail__descr_link" data-login-type="smtp">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "mail_setup_show_smtp_login"), "light_escape", null, !0)),
                    t.append("</div>")),
                    t.append("</div></div>"),
                    "edit" != ("mode"in i ? i.mode : "") && new (e._get("interface/mail/settings/parts/smtp_auth.twig"))(this.env_).render_(t, i),
                    t.append('<div class="mailbox-form__row mailbox-form__row-smtp_port"><div class="mailbox-form__cell mailbox-form__cell-title">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "mail_setup_port_field_caption"), "light_escape", null, !0)),
                    t.append('</div><div class="mailbox-form__cell mailbox-form__cell-port">'),
                    new (e._get("interface/controls/input.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        id: "mailbox-smtp-port",
                        name: "smtp_port",
                        max_length: 5,
                        placeholder: "465",
                        value: "smtp_port"in i ? i.smtp_port : "",
                        class_name: "js-control-allow-numeric"
                    })),
                    t.append('<div class="mailbox-form__error-input"></div></div><div class="mailbox-form__cell mailbox-form__cell-encoding">'),
                    new (e._get("interface/controls/select.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        items: "encryption"in i ? i.encryption : "",
                        name: "smtp_enc",
                        id: "mailbox-smtp-enc",
                        selected: "smtp_enc"in i ? i.smtp_enc : ""
                    })),
                    t.append("</div></div></form></div>"),
                    "add" != ("mode"in i ? i.mode : "") && (t.append('<div class="mailbox__description mailbox__description_access-settings">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Change access settings"), "light_escape", null, !0)),
                    t.append('</div><div class="mailbox-form__row  mailbox-form__row-assign_user mailbox-form__row-assign_user-no-caption"><div class="mailbox-form__cell " id="mailbox-user-assign-container">'),
                    t.append("</div></div>")),
                    "show_group_options"in i && i.show_group_options && (new (e._get("interface/mail/settings/parts/group_messages_options.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        show_sync: ("email"in i ? i.email : "") && "add" != ("mode"in i ? i.mode : "")
                    })),
                    new (e._get("interface/mail/settings/parts/options.twig"))(this.env_).render_(t, i)),
                    !twig.contains(["connection"], "state"in i ? i.state : "") && twig.contains("authtype_switch"in i ? i.authtype_switch : "", "oauth") && (t.append('<div class="mailbox-form__row mailbox-form__row-change_auth"><div class=""><a href="#" class="std-link mailbox-change_auth">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "mailbox_settings_switch_to_oauth"), "light_escape", null, !0)),
                    t.append("</a></div></div>")),
                    t.append("</div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_mail_settings_parts_additional_settings"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/mail/settings/parts/additional_settings", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
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
                    e.append('<div class="mailbox-form__cell mailbox-form__cell_domain-status"><a href="#" class="domain-status js-amosend-plug-domain '),
                    "confirmed"in t && t.confirmed && e.append("domain-status_active"),
                    e.append('">'),
                    e.append(twig.filter.escape(this.env_, "confirmed"in t && t.confirmed ? this.env_.filter("i18n", "Domain is connected") : this.env_.filter("i18n", "Domain not connected"), "light_escape", null, !0)),
                    e.append("</a></div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_mail_settings_parts_domain_status"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/mail/settings/parts/domain_status", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
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
                    i.is_disabled = !0,
                    (!("private"in i) || !i.private || "private"in i && i.private && "is_owner"in i && i.is_owner || "access"in i && i.access) && (i.is_disabled = !1),
                    t.append('<div class="mailbox-form__row mailbox-form__row-checkbox mailbox-form__row-group_messages"><div class="mailbox-form__cell">'),
                    new (e._get("interface/controls/checkbox.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        class_name: "mailbox-group_messages",
                        id: "mailbox-group-messages",
                        name: "group_messages",
                        text: twig.attr("lang"in i ? i.lang : "", "mail_group_messages"),
                        checked: "group_messages"in i ? i.group_messages : "",
                        disabled: "is_disabled"in i ? i.is_disabled : ""
                    })),
                    t.append("</div></div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_mail_settings_parts_group_messages_options"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/mail/settings/parts/group_messages_options", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
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
                    e.append('<div class="users_select-select_one mail_user-users_select_holder" id="mail_user-users_select_holder"><div class="mail_user-users_select" id="mail_user-users_select"><span class="mail_user-users_select_title h-text-overflow">'),
                    e.append(twig.filter.escape(this.env_, twig.attr("user"in t ? t.user : "", "name"), "light_escape", null, !0)),
                    e.append("</span></div></div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_mail_settings_parts_mail_users_select"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/mail/settings/parts/mail_users_select", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
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
                    "id"in i && i.id) {
                        if (i.allow_change_mailer = !("allow_change_mailer"in i) || ("allow_change_mailer"in i ? i.allow_change_mailer : ""),
                        i.is_disabled = !0,
                        (!("private"in i) || !i.private || "private"in i && i.private && "is_owner"in i && i.is_owner || "access"in i && i.access) && (i.is_disabled = !1),
                        t.append('<div class="mailbox-form__row mailbox-form__row-checkbox mailbox-form__row-amosend"><div class="mailbox-form__cell mailbox-form__cell_domain">'),
                        i.mailbox_amosend_class = "mailbox-amosend",
                        "allow_change_mailer"in i && i.allow_change_mailer || (i.mailbox_amosend_class = ("checkbox_class"in i ? i.checkbox_class : "") + " mailbox-amosend_disabled"),
                        new (e._get("interface/controls/checkbox.twig"))(this.env_).render_(t, twig.extend({}, i, {
                            class_name: "mailbox_amosend_class"in i ? i.mailbox_amosend_class : "",
                            id: "mailbox-amosend",
                            name: "amosend",
                            text: this.env_.filter("i18n", "Send messages via amoCRM"),
                            checked: "amosend"in i ? i.amosend : "",
                            disabled: !("allow_change_mailer"in i && i.allow_change_mailer) || ("is_disabled"in i ? i.is_disabled : "")
                        })),
                        "domain"in i && i.domain && !twig.attr("domain"in i ? i.domain : "", "new") && new (e._get("interface/mail/settings/parts/domain_status.twig"))(this.env_).render_(t, twig.extend({}, i, {
                            confirmed: twig.attr("domain"in i ? i.domain : "", "confirmed")
                        })),
                        t.append("</div></div>"),
                        i.mailbox_from_row_class = "mailbox-form__row mailbox-form__row-amosend-info",
                        twig.attr("domain"in i ? i.domain : "", "new")) {
                            "sent_quota_exhausted"in i && i.sent_quota_exhausted && (i.mailbox_from_row_class = ("mailbox_from_row_class"in i ? i.mailbox_from_row_class : "") + " mailbox-form__row-amosend-info_error"),
                            t.append('<div class="'),
                            t.append(twig.filter.escape(this.env_, "mailbox_from_row_class"in i ? i.mailbox_from_row_class : "", "light_escape", null, !0)),
                            t.append('">');
                            var a = t;
                            (t = new twig.StringBuffer).append('<a href="#" class="amosend-plug-domain js-amosend-plug-domain">'),
                            t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Connect the domain"), "light_escape", null, !0)),
                            t.append("</a>"),
                            i.domain_plug_button = new twig.Markup(t.toString()),
                            t = a,
                            "sent_quota_exhausted"in i && i.sent_quota_exhausted ? t.append(twig.filter.replace(this.env_.filter("i18n", "The limit of emails sent is reached. #PLUG_BUTTON#, to increase the limit"), {
                                "#PLUG_BUTTON#": "domain_plug_button"in i ? i.domain_plug_button : ""
                            })) : t.append(twig.filter.replace(this.env_.filter("i18n", "#PLUG_BUTTON#, so that outgoing letters are signed with its digital signature"), {
                                "#PLUG_BUTTON#": "domain_plug_button"in i ? i.domain_plug_button : ""
                            })),
                            t.append("</div>")
                        }
                        "domain"in i && i.domain && twig.attr("domain"in i ? i.domain : "", "new") || !("sent_quota_exhausted"in i) || !i.sent_quota_exhausted || (i.mailbox_from_row_class = ("mailbox_from_row_class"in i ? i.mailbox_from_row_class : "") + " mailbox-form__row-amosend-info_error",
                        t.append('<div class="'),
                        t.append(twig.filter.escape(this.env_, "mailbox_from_row_class"in i ? i.mailbox_from_row_class : "", "light_escape", null, !0)),
                        t.append('">'),
                        t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Limit of emails sent via amoCRM has been reached"), "light_escape", null, !0)),
                        t.append("</div>")),
                        "allow_change_mailer"in i && i.allow_change_mailer || (t.append('<div class="'),
                        t.append(twig.filter.escape(this.env_, "mailbox_from_row_class"in i ? i.mailbox_from_row_class : "", "light_escape", null, !0)),
                        t.append('">'),
                        t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "The provider limited sending emails for third-party services"), "light_escape", null, !0)),
                        t.append("</div>"))
                    }
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_mail_settings_parts_options"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/mail/settings/parts/options", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
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
                    t.append('<div class="mailbox-form__row mailbox-form__row-smtp_login"><div class="mailbox-form__cell mailbox-form__cell-title">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "mail_setup_smtp_login_field_caption"), "light_escape", null, !0)),
                    t.append('</div><div class="mailbox-form__cell mailbox-form__login-input">'),
                    new (e._get("interface/controls/input.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        id: "mailbox-smtp-login",
                        class_name: "auth_input",
                        placeholder: twig.attr("lang"in i ? i.lang : "", "mail_setup_smtp_login_placeholder"),
                        name: "smtp_login",
                        autocomplete: "false"
                    })),
                    t.append('<div class="mailbox-form__error-input"></div></div></div>'),
                    t.append('<div class="mailbox-form__row mailbox-form__row-smtp_login "><div class="mailbox-form__cell mailbox-form__cell-title">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "mail_setup_smtp_password_field_caption"), "light_escape", null, !0)),
                    t.append('</div><div class="mailbox-form__cell mailbox-form__login-input">'),
                    new (e._get("interface/controls/input.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        id: "mailbox-smtp-password",
                        class_name: "auth_input",
                        placeholder: twig.attr("lang"in i ? i.lang : "", "mail_setup_smtp_password_placeholder"),
                        name: "smtp_password",
                        type: "password",
                        autocomplete: "false"
                    })),
                    t.append('<div class="mailbox-form__error-input"></div></div></div>')
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_mail_settings_parts_smtp_auth"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/mail/settings/parts/smtp_auth", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
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
                    e.append('<div class="instruction__reason"><h3 class="instruction__reason-title">'),
                    e.append(twig.filter.escape(this.env_, "title"in t ? t.title : "", "light_escape", null, !0)),
                    e.append('</h3><p class="instruction__reason-desc">'),
                    e.append("description"in t ? t.description : ""),
                    e.append("</p></div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_mail_settings_parts_error_instruction_instruction_reason"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/mail/settings/parts/error_instruction/instruction_reason", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
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
                    t.append('<div class="instruction__reason"><h3 class="instruction__reason-title">'),
                    t.append(twig.filter.escape(this.env_, "title"in i ? i.title : "", "light_escape", null, !0)),
                    t.append('</h3><div class="instruction__reason-desc">'),
                    new (e._get("interface/mail/settings/parts/error_instruction/instruction_reason_sublist.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        title: "Gmail",
                        items: [this.env_.filter("i18n", "Choose or click the gear icon on the top right."), this.env_.filter("i18n", "Choose Settings > Forwarding and POP/IMAP."), this.env_.filter("i18n", "Select Enable IMAP, and then choose Save Changes.")]
                    })),
                    new (e._get("interface/mail/settings/parts/error_instruction/instruction_reason_sublist.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        title: "Yandex",
                        items: [this.env_.filter("i18n", "Go to All settings > Email clients."), this.env_.filter("i18n", "Check the box for using a mail client to retrieve Yandex mail."), this.env_.filter("i18n", "Save the changes.")]
                    })),
                    new (e._get("interface/mail/settings/parts/error_instruction/instruction_reason_sublist.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        title: "Zoho",
                        items: [this.env_.filter("i18n", "Go to Settings."), this.env_.filter("i18n", "Navigate to Mail Accounts and click the primary email address from the list of Mail accounts."), this.env_.filter("i18n", "Under the IMAP section, click Launch folder settings."), this.env_.filter("i18n", "Select the folders you want to view in the IMAP clients."), this.env_.filter("i18n", "Check the box for IMAP Access."), this.env_.filter("i18n", "Scroll down and click Save.")]
                    })),
                    new (e._get("interface/mail/settings/parts/error_instruction/instruction_reason_sublist.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        title: "Office 365",
                        items: [this.env_.filter("i18n", "Select Settings  > Mail > Sync email."), this.env_.filter("i18n", "Under POP and IMAP, select Yes under Let devices and apps use POP."), this.env_.filter("i18n", "Select Save.")]
                    })),
                    "is_kommo"in i && i.is_kommo || new (e._get("interface/mail/settings/parts/error_instruction/instruction_reason_sublist.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        title: "Mail.ru",
                        items: [this.env_.filter("i18n", "Go to Security > External Services."), this.env_.filter("i18n", "Enable the switch to access mail via IMAP, POP, SMTP.")]
                    })),
                    t.append("</div></div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_mail_settings_parts_error_instruction_instruction_reason_list"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/mail/settings/parts/error_instruction/instruction_reason_list", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
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
                    e.append('<div class="instruction__reason-list-wrapper"><h4 class="instruction__reason-list-title">'),
                    e.append(twig.filter.escape(this.env_, "title"in t ? t.title : "", "light_escape", null, !0)),
                    e.append('</h4><ol class="instruction__reason-list">'),
                    t._parent = t;
                    var n = "items"in t ? t.items : "";
                    twig.forEach(n, (function(i, n) {
                        t._key = n,
                        t.item = i,
                        e.append('<li class="instruction__reason-list__item">'),
                        e.append(twig.filter.escape(this.env_, "item"in t ? t.item : "", "light_escape", null, !0)),
                        e.append("</li>")
                    }
                    ), this),
                    e.append("</ol></div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_mail_settings_parts_error_instruction_instruction_reason_sublist"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/mail/settings/parts/error_instruction/instruction_reason_sublist", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
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
                    t.append('<h2 class="modal-body__caption head_2 instruction__title">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "This error could have occurred for the following reasons"), "light_escape", null, !0)),
                    t.append("</h2>"),
                    new (e._get("interface/mail/settings/parts/error_instruction/instruction_reason.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        title: this.env_.filter("i18n", "If you changed the password to your mailbox and forgot to update it in {{brand_name.without_article}}."),
                        description: this.env_.filter("i18n", "Simply update the password in the mailbox settings.")
                    })),
                    new (e._get("interface/mail/settings/parts/error_instruction/instruction_reason.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        title: this.env_.filter("i18n", "If you are sure that you have not changed your password, your system administrator may have changed your login/password."),
                        description: this.env_.filter("i18n", "Find out your new login and password then try logging in again.")
                    })),
                    new (e._get("interface/mail/settings/parts/error_instruction/instruction_reason.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        title: this.env_.filter("i18n", "For authorization you use a password for external devices and you have deleted the application password or it has become invalid."),
                        description: this.env_.filter("i18n", "Create a new application password in your mail account and update the password in your mailbox settings.")
                    })),
                    new (e._get("interface/mail/settings/parts/error_instruction/instruction_reason_list.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        title: this.env_.filter("i18n", "You have disabled the ability to connect to third-party services via protocols in your mailbox.")
                    }))
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_mail_settings_parts_error_instruction_error_groups_auth_group_error"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/mail/settings/parts/error_instruction/error_groups/auth_group_error", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
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
                    t.append('<h2 class="modal-body__caption head_2 instruction__title">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Copy and send the instructions below to your system administrator"), "light_escape", null, !0)),
                    t.append("</h2>"),
                    new (e._get("interface/mail/settings/parts/error_instruction/instruction_reason.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        title: this.env_.filter("i18n", "If the mailbox was connected via trusted TLS/SSL and the certificate on the mail server side has expired."),
                        description: this.env_.filter("i18n", "You need to check that the certificate is valid. If the certificate has expired, please renew it.")
                    })),
                    new (e._get("interface/mail/settings/parts/error_instruction/instruction_reason.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        title: this.env_.filter("i18n", "Using an untrusted certificate (including self-signed) when connecting via TLS/SSL."),
                        description: this.env_.filter("i18n", "{{brand_name.without_article}} allows you to connect mail with these types of certificates, but for security reasons, it is not recommended. Check the correct operation of the mail server via TLS/SSL. We also recommend switching to using trusted TLS/SSL certificates, even free certificates, such as those from https://letsencrypt.org/, which are the best alternative to self-signed certificates.")
                    })),
                    new (e._get("interface/mail/settings/parts/error_instruction/instruction_reason.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        title: this.env_.filter("i18n", "When specifying an incorrect server. If the settings for the imap server indicate a server that is POP3, SMTP or an incorrect connection port."),
                        description: this.env_.filter("i18n", "In this case, check that the mailbox connection settings are correct.")
                    })),
                    new (e._get("interface/mail/settings/parts/error_instruction/instruction_reason.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        title: this.env_.filter("i18n", "The mail server may be unavailable due to maintenance work, a server failure/fall or the mail server may be experiencing network unavailability issues."),
                        description: this.env_.filter("i18n", "For large email providers, unavailability is rare but cannot be ruled out.")
                    }))
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_mail_settings_parts_error_instruction_error_groups_connection_group_error"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/mail/settings/parts/error_instruction/error_groups/connection_group_error", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
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
                    t.append('<h2 class="modal-body__caption head_2 instruction__title">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "This error could have occurred for the following reasons"), "light_escape", null, !0)),
                    t.append("</h2>"),
                    new (e._get("interface/mail/settings/parts/error_instruction/instruction_reason_list.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        title: this.env_.filter("i18n", "You have disabled the ability to connect to third-party services via protocols in your mailbox.")
                    })),
                    new (e._get("interface/mail/settings/parts/error_instruction/instruction_reason.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        title: this.env_.filter("i18n", "The mail server administrator could be prohibiting connection via the imap protocol for the mailbox."),
                        description: this.env_.filter("i18n", "Contact your mail server administrator and ask them to allow connection via the imap protocol.")
                    }))
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_mail_settings_parts_error_instruction_error_groups_oauth_group_error"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/mail/settings/parts/error_instruction/error_groups/oauth_group_error", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
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
                    t.append('<h2 class="modal-body__caption head_2 instruction__title">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Copy and send the instructions below to your system administrator"), "light_escape", null, !0)),
                    t.append("</h2>"),
                    new (e._get("interface/mail/settings/parts/error_instruction/instruction_reason.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        title: this.env_.filter("i18n", "This type of error can occur when the mail server cannot process the request within the allocated time. This may be due to a high load or hardware problems."),
                        description: this.env_.filter("i18n", "Check the possible reasons for long responses. If you are using mail as a service, contact the service provider’s technical support.")
                    })),
                    new (e._get("interface/mail/settings/parts/error_instruction/instruction_reason.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        title: this.env_.filter("i18n", "Sometimes this issue will be due to incorrect settings. For example, trying to connect using TLS/SSL when a port that is not intended for TLS/SSL connections was set."),
                        description: this.env_.filter("i18n", "In this case, check that the mailbox connection settings are correct and that the port and connection type are specified correctly (TLS/SSL/STARTTLS).")
                    })),
                    new (e._get("interface/mail/settings/parts/error_instruction/instruction_reason.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        title: this.env_.filter("i18n", "The mail server is not responding to requests due to the filtering of traffic between the mail provider and {{brand_name.without_article}} on the part of the mail provider or Internet/hosting provider."),
                        description: this.env_.filter("i18n", "In this case, check with your mail provider about the presence of such filtering.")
                    })),
                    new (e._get("interface/mail/settings/parts/error_instruction/instruction_reason.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        title: this.env_.filter("i18n", "This issue can occur if the system administrator of your mail server restricts connections to the mail server according to a white list of IP addresses."),
                        description: this.env_.filter("i18n", "Reconfigure the security policies. Use TLS/SSL and other methods of active DDoS protection to work without restrictions on the list of IP addresses.")
                    }))
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_mail_settings_parts_error_instruction_error_groups_timeout_group_error"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/mail/settings/parts/error_instruction/error_groups/timeout_group_error", t)
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
        e._sentryDebugIds[t] = "e2cc4fa2-aa35-4286-a068-9ea7fb0191b3",
        e._sentryDebugIdIdentifier = "sentry-dbid-e2cc4fa2-aa35-4286-a068-9ea7fb0191b3")
    } catch (e) {}
}();
//# sourceMappingURL=79593.8c35ab3549c183400222.js.map
