(window.webpackChunk = window.webpackChunk || []).push([[66905, 92220], {
    692220: (e, t, i) => {
        var n, a;
        n = [i(460159), i(94849)],
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
                    t.append("<div class='project_info'><div class='project_info-body'><span class='project_info-body-logo'></span><span class='project_info-body-copyright'>"),
                    t.append(this.env_.filter("i18n", "MENU_COPYRIGHT_SIGN")),
                    t.append(" "),
                    t.append(twig.filter.escape(this.env_, "year"in i ? i.year : "", "light_escape", null, !0)),
                    t.append(" "),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "MENU_COPYRIGHT"), "light_escape", null, !0)),
                    t.append(" | <a href='"),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "MENU_TERMS_URL"), "light_escape", null, !0)),
                    t.append("' target='_blank'>"),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "MENU_AGREEMENT"), "light_escape", null, !0)),
                    t.append("</a></span><span class='project_info-body-support'><a href='/settings/support/' class=\"js-support\">"),
                    new (e._get("interface/controls/button.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        class_name: "plug-users_groups-body-button",
                        text: this.env_.filter("i18n", "MENU_CONTACT_SUPPORT")
                    })),
                    t.append("</a></span></div></div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_account_copyright"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/account/copyright", t)
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
                    t.append('<span class="modal-body__close"><span class="icon icon-modal-close"></span></span><h2 class="modal-body__caption head_2">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "support_page_title"), "light_escape", null, !0)),
                    t.append('</h2><div class="support-report-window"><h2>'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "support_description_header"), "light_escape", null, !0)),
                    t.append("</h2><p>"),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "support_description"), "light_escape", null, !0)),
                    t.append('</p><form id="support-report-form" action="/private/ajax/settings/support-form.php" method="post" class=\'support_form\'><input type="hidden" name="set_default" value="Y" /><input type="hidden" name="lang" value="'),
                    t.append(twig.filter.escape(this.env_, "lang_id"in i ? i.lang_id : "", "light_escape", null, !0)),
                    t.append("\" /><table><tr><td class='support_input_caption'>"),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "support_caption"), "light_escape", null, !0)),
                    t.append(" *</td><td>"),
                    new (e._get("interface/controls/input.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        id: "support-caption",
                        type: "text",
                        class_name: "",
                        name: "TITLE",
                        placeholder: twig.attr("lang"in i ? i.lang : "", "support_caption_placeholder"),
                        maxlength: "26"
                    })),
                    t.append("<div class='support_error'>"),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "support_caption_error"), "light_escape", null, !0)),
                    t.append("</div></td></tr><tr><td class='support_input_caption'>"),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "support_message"), "light_escape", null, !0)),
                    t.append(" *</td><td>"),
                    new (e._get("interface/controls/textarea.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        id: "support-message",
                        type: "text",
                        class_name: "",
                        name: "MESSAGE",
                        placeholder: twig.attr("lang"in i ? i.lang : "", "support_message_placeholder")
                    })),
                    t.append("<div class='support_error'>"),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "support_message_error"), "light_escape", null, !0)),
                    t.append("</div></td></tr><tr><td></td><td><div id='btn_file_attach' class='button-input button-input-enabled support_attach'><span>"),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "support_attachment"), "light_escape", null, !0)),
                    t.append("</span>"),
                    new (e._get("interface/controls/input.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        type: "file",
                        id: "file_attach",
                        class: "support_attach_hidden",
                        name: "FILE_O"
                    })),
                    t.append('<input type="hidden" name="files_counter" id="files_counter" value="0" /></div><div id="support_attached_file" class=\'support_file\'></div></td></tr><tr><td class=\'support_input_caption\'>'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "support_email"), "light_escape", null, !0)),
                    t.append(" *</td><td>"),
                    new (e._get("interface/controls/input.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        id: "support-email",
                        class_name: "",
                        name: "EMAIL_FROM",
                        placeholder: twig.attr("lang"in i ? i.lang : "", "support_email_placeholder")
                    })),
                    t.append("<div class='support_error'>"),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "support_email_error"), "light_escape", null, !0)),
                    t.append("</div></td></tr>"),
                    "ru" != ("lang_id"in i ? i.lang_id : "") && (t.append("<tr><td class='support_input_caption'>"),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "support_phone"), "light_escape", null, !0)),
                    t.append("</td><td>"),
                    new (e._get("interface/controls/input.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        id: "support-phone",
                        class_name: "",
                        name: "PHONE_FROM",
                        placeholder: twig.attr("lang"in i ? i.lang : "", "support_phone_placeholder")
                    })),
                    t.append("<div class='support_phone_error'>"),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "support_phone_error"), "light_escape", null, !0)),
                    t.append("</div></td></tr>")),
                    t.append('</table><div class="content__account__note content__account__section_head bottom errors" style="display: none"><p class="warning"></p></div><div>'),
                    new (e._get("interface/controls/button.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        type: "submit",
                        name: "save",
                        id: "btn-support-form",
                        class_name: "button-input-enabled support_submit",
                        text: twig.attr("lang"in i ? i.lang : "", "support_submit")
                    })),
                    t.append('<input type="hidden" value="Y" name="apply" /></div><div id="support-success-window" class="support_success"></div><div id="support-error-window" class="support_modal_error"></div></form></div><div class = "support-system-information">'),
                    new (e._get("interface/account/systemInfo.twig"))(this.env_).render_(t, i),
                    t.append("</div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_account_support"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/account/support", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
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
                    t.append('<form id="support-system-info" method="post" action="/private/ajax/settings/support.php"><dl><dt>'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "support_user_ip"), "light_escape", null, !0)),
                    t.append('</dt><dd id="support_ip-address"></dd><dt>'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "support_user_browser"), "light_escape", null, !0)),
                    t.append('</dt><dd id="support_browser"></dd><dt>'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "support_user_screen"), "light_escape", null, !0)),
                    t.append('</dt><dd id="support_resolution"></dd><dt>'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "support_user_email"), "light_escape", null, !0)),
                    t.append('</dt><dd id="support_email"></dd><dt>'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "support_user_subdomain"), "light_escape", null, !0)),
                    t.append('</dt><dd id="support_subdomain"></dd></dl>'),
                    t.append('<dl id="support_key_holder" class="support_keyholder"><dt>'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "support_key"), "light_escape", null, !0)),
                    t.append('</dt><dd id="support_key"></dd><dt>'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "support_expire_date"), "light_escape", null, !0)),
                    t.append('</dt><dd id="support_expire"></dd></dl>'),
                    new (e._get("interface/controls/button.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        type: "submit",
                        id: "btn-support-key",
                        class_name: "button-input-enabled support_getkey",
                        text: twig.attr("lang"in i ? i.lang : "", "support_get_key")
                    })),
                    t.append("</form>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_account_systemInfo"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/account/systemInfo", t)
            }()
        }
        .apply(t, n)) || (e.exports = a)
    }
    ,
    866905: (e, t, i) => {
        var n, a;
        n = [i(460159), i(295165), i(692220)],
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
                    i.selected_item = [],
                    i.has_archive = !1,
                    i._parent = i;
                    var a = "items"in i ? i.items : "";
                    twig.forEach(a, (function(e, t) {
                        i._key = t,
                        i.item = e,
                        1 == twig.attr("item"in i ? i.item : "", "selected") && (i.selected_item = "item"in i ? i.item : ""),
                        1 == twig.attr("item"in i ? i.item : "", "is_archive") && (i.has_archive = !0)
                    }
                    ), this),
                    "has_footer_add"in i || (i.has_footer_add = twig.attr("user_rights"in i ? i.user_rights : "", "is_admin")),
                    "is_archive_tab"in i || (i.is_archive_tab = 1 == twig.attr("selected_item"in i ? i.selected_item : "", "is_archive")),
                    "title"in i && i.title || ("emails" == ("type"in i ? i.type : "") ? i.title = this.env_.filter("i18n", "Emails") : "catalogs" == ("type"in i ? i.type : "") ? i.title = this.env_.filter("i18n", "Lists") : i.title = this.env_.filter("i18n", "Leads")),
                    "archive_title"in i && i.archive_title || "leads" == ("type"in i ? i.type : "") && (i.archive_title = this.env_.filter("i18n", "Archived pipelines")),
                    "is_archive_tab"in i && i.is_archive_tab ? new (e._get("interface/left_menu/hover_menu/archive/aside.twig"))(this.env_).render_(t, i) : "leads" == ("type"in i ? i.type : "") ? new (e._get("interface/left_menu/hover_menu/" + ("type"in i ? i.type : "") + "/aside.twig"))(this.env_).render_(t, i) : (t.append('<div class="aside aside-toggleable aside-hover '),
                    "type"in i && i.type && (t.append("aside-hover-"),
                    t.append(twig.filter.escape(this.env_, "type"in i ? i.type : "", "light_escape", null, !0))),
                    t.append('" id="aside-hover"><div class="aside__top"><h2 class="aside__head">'),
                    t.append(twig.filter.escape(this.env_, "title"in i ? i.title : "", "light_escape", null, !0)),
                    t.append("</h2>"),
                    "emails" == ("type"in i ? i.type : "") && t.append('<span class="aside__top__toggler"></span>'),
                    t.append('</div><div class="aside__inner '),
                    "has_footer_add"in i && i.has_footer_add && t.append("aside__inner_has-footer-add"),
                    t.append('" '),
                    "has_footer_add"in i && i.has_footer_add && t.append('data-footer-counter="1"'),
                    t.append('><div class="aside__common-settings custom-scroll"><div class="aside__common-settings__list_wrapper" id="aside__list-wrapper"><ul class="aside__list">'),
                    new (e._get("interface/left_menu/hover_menu/" + ("type"in i ? i.type : "") + "/index.twig"))(this.env_).render_(t, i),
                    t.append("</ul></div></div></div>"),
                    "has_footer_add"in i && i.has_footer_add && (t.append('<div class="aside__footer aside__footer-add"><div class="aside__footer-inner js-aside__footer-add">'),
                    new (e._get("interface/left_menu/hover_menu/" + ("type"in i ? i.type : "") + "/footer_add.twig"))(this.env_).render_(t, i),
                    t.append("</div></div>")),
                    t.append("</div>"))
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_left_menu_aside"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/left_menu/aside", t)
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
                    "url"in i && i.url || (i.is_not_uploaded = !0),
                    "is_not_uploaded"in i && i.is_not_uploaded && (t.append('<div class="js-left-avatar-overlay n-avatar__overlay '),
                    twig.attr("_account_features"in i ? i._account_features : "", "onboarding_kommo_icon") && t.append("n-avatar__overlay-kommo"),
                    t.append('">'),
                    twig.attr("_account_features"in i ? i._account_features : "", "onboarding_kommo_icon") ? t.append('<svg class="svg-icon svg-common--profile-kommo-dims"><use xlink:href="#common--profile-kommo"></use></svg>') : t.append('<svg class="svg-icon svg-common--profile-dims"><use xlink:href="#common--profile"></use></svg>'),
                    t.append("<span>"),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Account"), "light_escape", null, !0)),
                    t.append("</span></div>")),
                    new (e._get("interface/common/avatar.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        id: "id"in i ? i.id : "",
                        url: "url"in i ? i.url : "",
                        class: "js-left-avatar"
                    }))
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_left_menu_avatar"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/left_menu/avatar", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
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
                    t.append('<div class="left-menu" id="left_menu"><div class=\'nav__top__wrapper\'>'),
                    "is_authorized"in i && i.is_authorized && twig.filter.length(this.env_, "accounts"in i ? i.accounts : "") > 1 || "is_operday_tracking_available"in i && i.is_operday_tracking_available) {
                        t.append('<div class="nav__top__userbar_useraccounts"><ul class="nav__top__userbar_useraccounts__list custom-scroll">'),
                        i._parent = i;
                        var a = "accounts"in i ? i.accounts : "";
                        twig.forEach(a, (function(e, n) {
                            i._key = n,
                            i.account = e,
                            t.append('<li class="nav__top__userbar_useraccounts__item '),
                            t.append(("current_account_id"in i ? i.current_account_id : "") == twig.attr("account"in i ? i.account : "", "ID") ? "nav__top__userbar_useraccounts__item--current" : ""),
                            t.append('">'),
                            ("current_account_id"in i ? i.current_account_id : "") == twig.attr("account"in i ? i.account : "", "ID") ? (t.append('<span class="nav__top__userbar_useraccounts__item_inner">'),
                            t.append(twig.filter.escape(this.env_, twig.attr("account"in i ? i.account : "", "NAME"), "light_escape", null, !0)),
                            t.append("</span>")) : (t.append('<a class="nav__top__userbar_useraccounts__item_link nav__top__userbar_useraccounts__item_inner js-system-link" tabindex="-1" href="'),
                            t.append(twig.filter.escape(this.env_, twig.attr("base"in i ? i.base : "", "PROTOCOL") + "://" + twig.attr("account"in i ? i.account : "", "PROPERTY_ACCOUNT_SUBDOMAIN_VALUE") + "." + twig.attr("base"in i ? i.base : "", "HOST"), "light_escape", null, !0)),
                            t.append('">'),
                            t.append(twig.filter.escape(this.env_, twig.attr("account"in i ? i.account : "", "NAME"), "light_escape", null, !0)),
                            t.append('<span class="icon icon-arrow-right"></span></a>')),
                            t.append("</li>")
                        }
                        ), this),
                        t.append("</ul></div>")
                    }
                    new (e._get("interface/account/copyright.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        year: "now_year"in i ? i.now_year : ""
                    })),
                    t.append('</div><div class="left-menu__themes-switcher js-themes-switcher" id="themes-switcher"></div>'),
                    "is_operday_tracking_available"in i && i.is_operday_tracking_available && t.append('<div class="nav__top__operday-holder operday__holder"></div>'),
                    t.append('<div class="default-overlay left-menu-overlay" id="left-menu-overlay"></div><div class="nav__top"><div class="nav__top__userpic__holder"><div class="js-avatar-wrapper nav__top__userpic__wrapper">'),
                    new (e._get("interface/left_menu/avatar.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        url: twig.attr("user"in i ? i.user : "", "photo"),
                        id: twig.attr("user"in i ? i.user : "", "id")
                    })),
                    t.append('</div></div><div class="nav__top__userbar"><div class="nav__top__userbar__userinfo js-manage-profile"><div class="nav__top__userbar__userinfo__username">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("user"in i ? i.user : "", "name"), "light_escape", null, !0)),
                    t.append('</div><span class="nav__top__userbar__profile__text nav__top__userbar__grey-link">'),
                    twig.attr("_account_features"in i ? i._account_features : "", "is_customization_for_global") ? t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "MENU_CLIENT_GLOBAL"), "light_escape", null, !0)) : t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "MENU_CLIENT"), "light_escape", null, !0)),
                    t.append('<span class="nav__top__userbar__profile__account-id js-account-id">'),
                    t.append(twig.filter.escape(this.env_, "current_account_id"in i ? i.current_account_id : "", "light_escape", null, !0)),
                    t.append('<span class="nav__top__userbar__profile__account-id-copy js-copy-account-id" data-copied="'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Copied"), "light_escape", null, !0)),
                    t.append('" data-clipboard-text="'),
                    t.append(twig.filter.escape(this.env_, "current_account_id"in i ? i.current_account_id : "", "light_escape", null, !0)),
                    t.append('"><svg class="svg-icon svg-common--copy-dims"><use xlink:href="#common--copy"></use></svg></span></span></span></div><a class="nav__top__userbar__profile js-manage-profile" href="/settings/profile/"><span class="nav__top__userbar-icon"><span class="icon icon-pencil2 h-abs-position-center"></span></span><span class="nav__top__userbar__profile__text nav__top__userbar__grey-link">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "MENU_PROFILE"), "light_escape", null, !0)),
                    t.append('</span></a><div class="nav__top__userbar__logout js-logout"><span class="nav__top__userbar-icon"><span class="icon icon-off h-abs-position-center"></span></span><a href="/?logout=yes" class="nav__top__userbar__logout__text nav__top__userbar__grey-link js-system-link">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "CRM_MAIN_LOGOUT"), "light_escape", null, !0)),
                    t.append("</a></div></div></div>"),
                    !twig.attr("user"in i ? i.user : "", "is_free") && "menu"in i && i.menu && (t.append('<div class="nav__menu-scroller" data-entity="selected" id="nav_menu_up"></div><div class="nav__menu-scroll-hide"><div class="nav__menu-wrapper">'),
                    new (e._get("interface/left_menu/items.twig"))(this.env_).render_(t, i),
                    t.append('</div></div><div class="nav__menu-scroller nav__menu-scroller-down" data-entity="selected" id="nav_menu_down"></div>')),
                    t.append('<div class="nav__notifications"><span class="nav__notifications__icon '),
                    "is_chats_inbox_enabled"in i && i.is_chats_inbox_enabled ? t.append("icon-notifications-bell") : t.append("icon-notifications"),
                    t.append('"><div class=\'nav__notifications__flashlight\'><div></div><div></div></div><span class="inbox-counter hidden"></span></span></div>'),
                    "is_operday_tracking_available"in i && i.is_operday_tracking_available && t.append('<div class="nav__top__operday-blocker js-operday-menu-blocker"></div>'),
                    t.append('</div><div class="left-menu-fake"></div>')
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_left_menu_index"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/left_menu/index", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
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
                    e.append('<div class="nav__menu" id="nav_menu">'),
                    t._parent = t;
                    var n = "menu"in t ? t.menu : "";
                    twig.forEach(n, (function(i, n) {
                        t.key = n,
                        t.item = i,
                        twig.attr("item"in t ? t.item : "", "is_hidden") || (twig.attr("item"in t ? t.item : "", "is_default") || (t.item = twig.filter.merge("item"in t ? t.item : "", {
                            class_name: "nav__menu__item__icon-integration"
                        })),
                        e.append('<div class="nav__menu__item '),
                        twig.attr("item"in t ? t.item : "", "selected") && e.append(" nav__menu__item-selected "),
                        e.append(" "),
                        e.append(twig.filter.escape(this.env_, twig.attr("item"in t ? t.item : "", "class_name"), "light_escape", null, !0)),
                        e.append('" '),
                        twig.attr("item"in t ? t.item : "", "is_default") || (e.append(' data-widget-code="'),
                        e.append(twig.filter.escape(this.env_, twig.attr("item"in t ? t.item : "", "widget_code"), "light_escape", null, !0)),
                        e.append('" data-widget-item="'),
                        e.append(twig.filter.escape(this.env_, "key"in t ? t.key : "", "light_escape", null, !0)),
                        e.append('" ')),
                        e.append(' data-entity="'),
                        e.append(twig.filter.escape(this.env_, twig.attr("item"in t ? t.item : "", "entity"), "light_escape", null, !0)),
                        e.append('"><a class="nav__menu__item__link" href="'),
                        e.append(twig.filter.escape(this.env_, twig.attr("item"in t ? t.item : "", "url"), "light_escape", null, !0)),
                        e.append('"><div class="nav__menu__item__icon '),
                        twig.attr("item"in t ? t.item : "", "is_default") && (e.append(" icon-"),
                        e.append(twig.filter.escape(this.env_, twig.attr("item"in t ? t.item : "", "icon"), "light_escape", null, !0)),
                        e.append(" ")),
                        e.append('">'),
                        twig.attr("item"in t ? t.item : "", "is_default") || (e.append('<img class="nav__menu__item__icon-integration__img" src="'),
                        e.append(twig.filter.escape(this.env_, twig.attr("item"in t ? t.item : "", "icon"), "light_escape", null, !0)),
                        e.append('" alt="'),
                        e.append(twig.filter.escape(this.env_, twig.attr("item"in t ? t.item : "", "title"), "light_escape", null, !0)),
                        e.append('">')),
                        e.append('<span class="js-notifications_counter nav__notifications__counter" '),
                        twig.attr("item"in t ? t.item : "", "count_notify") || e.append(' style="display: none" '),
                        e.append(">"),
                        e.append(twig.filter.escape(this.env_, twig.attr("item"in t ? t.item : "", "count_notify"), "light_escape", null, !0)),
                        e.append("</span>"),
                        twig.attr("item"in t ? t.item : "", "selected") && e.append('<div class="nav__top__userpic__loader stopped" id="page_change_progress"><span class="spinner-icon"></span></div>'),
                        e.append('</div><div class="nav__menu__item__title">'),
                        e.append(twig.filter.escape(this.env_, twig.attr("item"in t ? t.item : "", "title"), "light_escape", null, !0)),
                        e.append("</div></a></div>"))
                    }
                    ), this),
                    e.append("</div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_left_menu_items"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/left_menu/items", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
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
                    e.append('<span class="aside__list-item-text h-text-overflow">'),
                    e.append(twig.filter.escape(this.env_, twig.attr("footer"in t ? t.footer : "", "placeholder"), "light_escape", null, !0)),
                    e.append('</span><span class="aside__button aside__button_action '),
                    e.append(twig.filter.escape(this.env_, twig.attr("footer"in t ? t.footer : "", "class_name"), "light_escape", null, !0)),
                    e.append('" title="'),
                    e.append(twig.filter.escape(this.env_, twig.attr("footer"in t ? t.footer : "", "placeholder"), "light_escape", null, !0)),
                    e.append('"><svg class="svg-icon svg-controls--button-add-dims"><use xlink:href="#controls--button-add"></use></svg></span>')
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_left_menu_hover_menu_footer_add"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/left_menu/hover_menu/footer_add", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
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
                    e.append('<input type="text" name="new_item" class="aside__list-item-input h-text-overflow" placeholder="'),
                    e.append(twig.filter.escape(this.env_, twig.attr("footer"in t ? t.footer : "", "placeholder"), "light_escape", null, !0)),
                    e.append('"><span class="aside__action-buttons"><span class="aside__action-button aside__action-button_loader"><span class="spinner-icon spinner-icon-abs-center"></span></span><span class="aside__action-button js-aside__action-button" data-action="add"><span class="icon icon-accept-green h-abs-position-center"></span></span></span>')
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_left_menu_hover_menu_footer_in_edit"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/left_menu/hover_menu/footer_in_edit", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
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
                    !("sortable"in t) || !t.sortable || "is_archive_tab"in t && t.is_archive_tab || e.append('<span class="aside__list-item_item-handle"><span class="icon icon-v-dots"></span></span>'),
                    e.append('<input type="text" name="'),
                    e.append(twig.filter.escape(this.env_, twig.attr("item"in t ? t.item : "", "id"), "light_escape", null, !0)),
                    e.append('" class="aside__list-item-input h-text-overflow" '),
                    "is_archive_tab"in t && t.is_archive_tab && e.append('readonly="readonly"'),
                    e.append(' placeholder="'),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Enter name"), "light_escape", null, !0)),
                    e.append('" '),
                    twig.attr("item"in t ? t.item : "", "name") && (e.append('value="'),
                    e.append(twig.filter.escape(this.env_, twig.attr("item"in t ? t.item : "", "name"), "light_escape", null, !0)),
                    e.append('"')),
                    e.append('><span class="aside__action-buttons"><span class="aside__action-button aside__action-button_loader"><span class="spinner-icon spinner-icon-abs-center"></span></span>'),
                    t.buttons = [{
                        action: "save",
                        icon: "common--accept-changes"
                    }],
                    1 == ("is_cloneable"in t ? t.is_cloneable : "") && (t.buttons = twig.filter.merge([{
                        action: "clone",
                        icon: "common--copy"
                    }], "buttons"in t ? t.buttons : "")),
                    t.can_be_deleted = !twig.attr("item"in t ? t.item : "", "can_be_deleted", void 0, void 0, !0) || twig.attr("item"in t ? t.item : "", "can_be_deleted"),
                    !twig.attr("item"in t ? t.item : "", "sdk_widget_code") && !twig.attr("item"in t ? t.item : "", "is_main") && "can_be_deleted"in t && t.can_be_deleted && (t.buttons = twig.filter.merge([{
                        action: "remove",
                        icon: "common--trash"
                    }], "buttons"in t ? t.buttons : "")),
                    twig.attr("item"in t ? t.item : "", "sdk_widget_code") || !twig.attr("item"in t ? t.item : "", "is_archive", void 0, void 0, !0) || twig.attr("item"in t ? t.item : "", "is_main") || (t.buttons = twig.filter.merge([{
                        action: "archivation",
                        icon: twig.attr("item"in t ? t.item : "", "is_archive") ? "common--unarchive" : "common--archive"
                    }], "buttons"in t ? t.buttons : "")),
                    t._parent = t;
                    var n = "buttons"in t ? t.buttons : "";
                    twig.forEach(n, (function(i, n) {
                        t._key = n,
                        t.button = i,
                        e.append('<span class="aside__action-button js-aside__action-button" data-action="'),
                        e.append(twig.filter.escape(this.env_, twig.attr("button"in t ? t.button : "", "action"), "light_escape", null, !0)),
                        e.append('"><svg class="svg-icon svg-'),
                        e.append(twig.filter.escape(this.env_, twig.attr("button"in t ? t.button : "", "icon"), "light_escape", null, !0)),
                        e.append('-dims"><use xlink:href="#'),
                        e.append(twig.filter.escape(this.env_, twig.attr("button"in t ? t.button : "", "icon"), "light_escape", null, !0)),
                        e.append('"></use></svg></span>')
                    }
                    ), this),
                    e.append("</span>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_left_menu_hover_menu_item_in_edit"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/left_menu/hover_menu/item_in_edit", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
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
                    t.append('<div class="aside aside-toggleable aside-hover aside-archive '),
                    "type"in i && i.type && (t.append("aside-hover-"),
                    t.append(twig.filter.escape(this.env_, "type"in i ? i.type : "", "light_escape", null, !0))),
                    t.append('" id="aside-hover"><div class="aside__top aside__top_archive js-aside-close-archive"><svg class="svg-icon svg-common--arrow-down-dims"><use xlink:href="#common--arrow-down"></use></svg><h2 class="aside__head">'),
                    t.append(twig.filter.escape(this.env_, "archive_title"in i ? i.archive_title : "", "light_escape", null, !0)),
                    t.append('</h2></div><div class="aside__inner"><div class="aside__common-settings custom-scroll"><div class="aside__common-settings__list_wrapper" id="aside__list-wrapper"><ul class="aside__list">'),
                    new (e._get("interface/left_menu/hover_menu/" + ("type"in i ? i.type : "") + "/index.twig"))(this.env_).render_(t, i),
                    t.append("</ul></div></div></div></div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_left_menu_hover_menu_archive_aside"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/left_menu/hover_menu/archive/aside", t)
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
                    return e._get("interface/left_menu/hover_menu/footer_add.twig")
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    t.footer = {
                        placeholder: this.env_.filter("i18n", "Add list")
                    },
                    this.getParent(t).render_(e, t, twig.extend({}, this.getBlocks(), i))
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_left_menu_hover_menu_catalogs_footer_add"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/left_menu/hover_menu/catalogs/footer_add", t)
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
                    return e._get("interface/left_menu/hover_menu/footer_in_edit.twig")
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    t.footer = {
                        placeholder: twig.attr("lang"in t ? t.lang : "", "filter_preset_placeholder")
                    },
                    this.getParent(t).render_(e, t, twig.extend({}, this.getBlocks(), i))
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_left_menu_hover_menu_catalogs_footer_in_edit"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/left_menu/hover_menu/catalogs/footer_in_edit", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
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
                    twig.filter.length(this.env_, "items"in i ? i.items : "")) {
                        i._parent = i;
                        var a = "items"in i ? i.items : ""
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
                            i.item = n,
                            "files" == twig.attr("item"in i ? i.item : "", "entity") ? (t.append('<li class="aside__list-item '),
                            twig.attr("item"in i ? i.item : "", "selected") && t.append("aside__list-item_selected"),
                            t.append('"><a href="/files/list/" class="aside__list-item-link navigate-link-nodecor h-text-overflow js-navigate-link js-list-contacts-caption-link">'),
                            t.append(twig.filter.escape(this.env_, twig.attr("item"in i ? i.item : "", "name"), "light_escape", null, !0)),
                            t.append("</a></li>")) : twig.attr("item"in i ? i.item : "", "entity") ? (t.append('<li class="aside__list-item '),
                            (twig.attr("item"in i ? i.item : "", "selected") || "all" == twig.attr("item"in i ? i.item : "", "entity") && "list_view"in i && i.list_view) && t.append("aside__list-item_selected"),
                            t.append('"><a href="/contacts/list/'),
                            "all" != twig.attr("item"in i ? i.item : "", "entity") && (t.append(twig.filter.escape(this.env_, twig.attr("item"in i ? i.item : "", "entity"), "light_escape", null, !0)),
                            t.append("/")),
                            t.append('" class="aside__list-item-link navigate-link-nodecor h-text-overflow js-navigate-link js-list-contacts-caption-link">'),
                            t.append(twig.filter.escape(this.env_, twig.attr("item"in i ? i.item : "", "name"), "light_escape", null, !0)),
                            t.append("</a></li>")) : new (e._get("interface/left_menu/hover_menu/catalogs/item.twig"))(this.env_).render_(t, twig.extend({}, i, "item"in i ? i.item : "")),
                            ++r.index0,
                            ++r.index,
                            r.first = !1,
                            r.length && (--r.revindex0,
                            --r.revindex,
                            r.last = 0 === r.revindex0)
                        }
                        ), this)
                    }
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_left_menu_hover_menu_catalogs_index"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/left_menu/hover_menu/catalogs/index", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
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
                    e.append('<li class="aside__list-item aside__list-item_editable'),
                    twig.attr("item"in t ? t.item : "", "selected") && e.append(" aside__list-item_selected"),
                    e.append(' js-animate js-item-animate" data-id="'),
                    e.append(twig.filter.escape(this.env_, twig.attr("item"in t ? t.item : "", "id"), "light_escape", null, !0)),
                    e.append('"><a href="/catalogs/'),
                    e.append(twig.filter.escape(this.env_, twig.attr("item"in t ? t.item : "", "id"), "light_escape", null, !0)),
                    e.append('" class="aside__list-item-link js-navigate-link navigate-link-nodecor h-text-overflow">'),
                    e.append(twig.filter.escape(this.env_, twig.attr("item"in t ? t.item : "", "name"), "light_escape", null, !0)),
                    e.append("</a>"),
                    twig.attr("user_rights"in t ? t.user_rights : "", "is_admin") && (twig.attr("item"in t ? t.item : "", "can_be_deleted") || twig.attr("item"in t ? t.item : "", "can_be_edited")) && e.append('<span class="aside__button-icon js-aside__action-button" data-action="edit"><svg class="svg-icon svg-common--edit-pencil-dims"><use xlink:href="#common--edit-pencil"></use></svg></span>'),
                    e.append("</li>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_left_menu_hover_menu_catalogs_item"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/left_menu/hover_menu/catalogs/item", t)
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
                    return e._get("interface/left_menu/hover_menu/item_in_edit.twig")
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    this.getParent(t).render_(e, t, twig.extend({}, this.getBlocks(), i))
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_left_menu_hover_menu_catalogs_item_in_edit"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/left_menu/hover_menu/catalogs/item_in_edit", t)
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
                    return e._get("interface/left_menu/hover_menu/footer_add.twig")
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    t.footer = {
                        placeholder: this.env_.filter("i18n", "Connect email")
                    },
                    this.getParent(t).render_(e, t, twig.extend({}, this.getBlocks(), i))
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_left_menu_hover_menu_emails_footer_add"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/left_menu/hover_menu/emails/footer_add", t)
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
                    return e._get("interface/left_menu/hover_menu/footer_in_edit.twig")
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    t.footer = {
                        placeholder: this.env_.filter("i18n", "New pipeline name")
                    },
                    this.getParent(t).render_(e, t, twig.extend({}, this.getBlocks(), i))
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_left_menu_hover_menu_emails_footer_in_edit"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/left_menu/hover_menu/emails/footer_in_edit", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
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
                    i.counter = 0,
                    "items"in i && i.items) {
                        i._parent = i;
                        var a = "items"in i ? i.items : "";
                        twig.forEach(a, (function(e, t) {
                            i._key = t,
                            i.item = e,
                            i.counter = Number("counter"in i ? i.counter : "") + Number(twig.attr(twig.attr(twig.attr("item"in i ? i.item : "", "counters"), "income"), "unread"))
                        }
                        ), this)
                    }
                    if (t.append('<li class="aside__list-item '),
                    twig.attr("item"in i ? i.item : "", "selected") && t.append("aside__list-item_selected"),
                    t.append('" title="'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Inbox"), "light_escape", null, !0)),
                    t.append('"><a href="/mail/inbox/" class="aside__list_link aside__list-item-link js-navigate-link"></a><div class="aside__list-inner"><span class="aside__list-item-link navigate-link-nodecor h-text-overflow"><span>'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Inbox"), "light_escape", null, !0)),
                    t.append("</span></span></div>"),
                    "counter"in i && i.counter && (t.append('<div class="menu-item__counter"><span>'),
                    t.append(twig.filter.escape(this.env_, "counter"in i ? i.counter : "", "light_escape", null, !0)),
                    t.append("</span></div>")),
                    t.append("</li>"),
                    "items"in i && i.items) {
                        i._parent = i,
                        a = "items"in i ? i.items : "";
                        var r = {
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
                            i.item = n,
                            new (e._get("interface/left_menu/hover_menu/emails/item.twig"))(this.env_).render_(t, twig.extend({}, i, {
                                item: "item"in i ? i.item : "",
                                multiple: !0,
                                isLast: twig.attr(r, "last"),
                                isFirst: twig.attr(r, "first")
                            })),
                            ++r.index0,
                            ++r.index,
                            r.first = !1,
                            r.length && (--r.revindex0,
                            --r.revindex,
                            r.last = 0 === r.revindex0)
                        }
                        ), this)
                    }
                    t.append('<li class="aside__list-item '),
                    twig.attr("item"in i ? i.item : "", "selected") && t.append("aside__list-item_selected"),
                    t.append('" title="'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Sent"), "light_escape", null, !0)),
                    t.append('"><a href="/mail/sent/" class="aside__list_link aside__list-item-link js-navigate-link"></a><div class="aside__list-inner"><span class="aside__list-item-link navigate-link-nodecor h-text-overflow"><span>'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Sent"), "light_escape", null, !0)),
                    t.append('</span></span></div></li><li class="aside__list-item '),
                    twig.attr("item"in i ? i.item : "", "selected") && t.append("aside__list-item_selected"),
                    t.append('" title="'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Deleted"), "light_escape", null, !0)),
                    t.append('"><a href="/mail/deleted/" class="aside__list_link aside__list-item-link js-navigate-link"></a><div class="aside__list-inner"><span class="aside__list-item-link navigate-link-nodecor h-text-overflow"><span>'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Deleted"), "light_escape", null, !0)),
                    t.append("</span></span></div></li>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_left_menu_hover_menu_emails_index"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/left_menu/hover_menu/emails/index", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
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
                    t.url = "mail/inbox/" + twig.attr("item"in t ? t.item : "", "id") + "/",
                    e.append('<li class="aside__list-item aside__list-subitem '),
                    "isFirst"in t && t.isFirst && e.append("aside__list-subitem_first"),
                    e.append(" "),
                    "isLast"in t && t.isLast && e.append("aside__list-subitem_last"),
                    e.append(" "),
                    twig.attr("item"in t ? t.item : "", "selected") && e.append("aside__list-item_selected"),
                    e.append('" data-id="'),
                    e.append(twig.filter.escape(this.env_, twig.attr("item"in t ? t.item : "", "id"), "light_escape", null, !0)),
                    e.append('"><a href="'),
                    e.append(twig.filter.escape(this.env_, "url"in t ? t.url : "", "light_escape", null, !0)),
                    e.append('" class="aside__list_link aside__list-item-link js-navigate-link"></a><div class="aside__list-inner"><div class="menu-item__icon icon icon-mail-box icon-mail-'),
                    twig.attr(twig.attr("item"in t ? t.item : "", "provider"), "code") ? e.append(twig.filter.escape(this.env_, twig.attr(twig.attr("item"in t ? t.item : "", "provider"), "code"), "light_escape", null, !0)) : e.append("box"),
                    e.append('"></div><span class="aside__list-item-link navigate-link-nodecor h-text-overflow"><span>'),
                    e.append(twig.filter.escape(this.env_, twig.attr("item"in t ? t.item : "", "email"), "light_escape", null, !0)),
                    e.append("</span></span>"),
                    twig.attr("item"in t ? t.item : "", "private") && (e.append('<div class="menu-item__subtext js-menu-item-status">'),
                    e.append(twig.filter.escape(this.env_, twig.attr("lang"in t ? t.lang : "", "mail_privacy_mailbox_type_personal"), "light_escape", null, !0)),
                    e.append("</div>")),
                    e.append("</div>"),
                    twig.attr(twig.attr(twig.attr("item"in t ? t.item : "", "counters"), "income"), "unread") > 0 && (e.append('<div class="menu-item__counter'),
                    twig.attr(twig.attr(twig.attr("item"in t ? t.item : "", "counters"), "income"), "unread") || e.append(" menu-item__counter_empty"),
                    e.append('"><span>'),
                    e.append(twig.filter.escape(this.env_, twig.attr(twig.attr(twig.attr("item"in t ? t.item : "", "counters"), "income"), "unread"), "light_escape", null, !0)),
                    e.append("</span></div>")),
                    e.append("</li>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_left_menu_hover_menu_emails_item"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/left_menu/hover_menu/emails/item", t)
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
                    return e._get("interface/left_menu/hover_menu/item_in_edit.twig")
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    this.getParent(t).render_(e, t, twig.extend({}, this.getBlocks(), i))
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_left_menu_hover_menu_emails_item_in_edit"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/left_menu/hover_menu/emails/item_in_edit", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
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
                    i.has_show_all = "leads-dp" != ("entity"in i ? i.entity : "") || !("from_top_click"in i && i.from_top_click),
                    i.footer_counter = 0,
                    "has_show_all"in i && i.has_show_all && (i.footer_counter = Number("footer_counter"in i ? i.footer_counter : "") + Number(1)),
                    "has_archive"in i && i.has_archive && (i.footer_counter = Number("footer_counter"in i ? i.footer_counter : "") + Number(1)),
                    t.append('<div class="aside aside-toggleable aside-hover '),
                    "type"in i && i.type && (t.append("aside-hover-"),
                    t.append(twig.filter.escape(this.env_, "type"in i ? i.type : "", "light_escape", null, !0))),
                    t.append('" id="aside-hover"><div class="aside__top"><h2 class="aside__head">'),
                    t.append(twig.filter.escape(this.env_, "title"in i ? i.title : "", "light_escape", null, !0)),
                    t.append('</h2></div><div class="aside__inner '),
                    "has_footer_add"in i && i.has_footer_add && t.append("aside__inner_has-footer-add"),
                    t.append('" data-footer-counter="'),
                    t.append(twig.filter.escape(this.env_, "footer_counter"in i ? i.footer_counter : "", "light_escape", null, !0)),
                    t.append('"><div class="aside__common-settings custom-scroll"><div class="aside__common-settings__list_wrapper" id="aside__list-wrapper"><ul class="aside__list">'),
                    new (e._get("interface/left_menu/hover_menu/" + ("type"in i ? i.type : "") + "/index.twig"))(this.env_).render_(t, i),
                    t.append('</ul></div></div></div><div class="aside__footer">'),
                    "has_show_all"in i && i.has_show_all && (t.append('<a href="/leads/list/" class="aside__footer-inner aside__footer-inner_show-all '),
                    "list_view"in i && i.list_view && t.append("aside__footer-inner_show-all_selected"),
                    t.append(' aside__list-item-link js-navigate-link navigate-link-nodecor"><div class="aside__list-item-text h-text-overflow">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "All leads"), "light_escape", null, !0)),
                    t.append('</div><svg class="svg-icon svg-common--list-sm-dims"><use xlink:href="#common--list-sm"></use></svg></a>')),
                    t.append('<div class="aside__footer-inner aside__footer-inner_archive js-aside-open-archive '),
                    "has_archive"in i && i.has_archive || t.append("hidden"),
                    t.append('"><span class="aside__list-item-text h-text-overflow">'),
                    t.append(twig.filter.escape(this.env_, "archive_title"in i ? i.archive_title : "", "light_escape", null, !0)),
                    t.append('</span><div class="aside__footer-inner_archive__icon"><svg class="svg-icon svg-common--arrow-down-dims"><use xlink:href="#common--arrow-down"></use></svg></div></div></div></div>')
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_left_menu_hover_menu_leads_aside"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/left_menu/hover_menu/leads/aside", t)
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
                    return e._get("interface/left_menu/hover_menu/footer_add.twig")
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    t.footer = {
                        placeholder: this.env_.filter("i18n", "Add pipeline")
                    },
                    this.getParent(t).render_(e, t, twig.extend({}, this.getBlocks(), i))
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_left_menu_hover_menu_leads_footer_add"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/left_menu/hover_menu/leads/footer_add", t)
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
                    return e._get("interface/left_menu/hover_menu/footer_in_edit.twig")
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    t.footer = {
                        placeholder: this.env_.filter("i18n", "New pipeline name")
                    },
                    this.getParent(t).render_(e, t, twig.extend({}, this.getBlocks(), i))
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_left_menu_hover_menu_leads_footer_in_edit"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/left_menu/hover_menu/leads/footer_in_edit", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
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
                    "list_view"in i && i.list_view ? i.base_url = "/leads/" : "leads" == ("entity"in i ? i.entity : "") && "is_card"in i && i.is_card && "from_list"in i && i.from_list ? i.base_url = "/leads/list/" : "leads" != ("entity"in i ? i.entity : "") || "is_card"in i && i.is_card ? i.base_url = "/leads/" : i.base_url = "/leads/list/",
                    i.active_pipelines = [],
                    i.archived_pipelines = [],
                    i._parent = i;
                    var a = "items"in i ? i.items : "";
                    if (twig.forEach(a, (function(e, t) {
                        i._key = t,
                        i.item = e,
                        twig.attr("item"in i ? i.item : "", "is_archive") ? i.archived_pipelines = twig.filter.merge("archived_pipelines"in i ? i.archived_pipelines : "", ["item"in i ? i.item : ""]) : i.active_pipelines = twig.filter.merge("active_pipelines"in i ? i.active_pipelines : "", ["item"in i ? i.item : ""])
                    }
                    ), this),
                    "is_archive_tab"in i && i.is_archive_tab) {
                        t.append(" "),
                        i._parent = i,
                        a = "archived_pipelines"in i ? i.archived_pipelines : "";
                        var r = {
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
                            i.pipeline = n,
                            new (e._get("interface/left_menu/hover_menu/leads/item.twig"))(this.env_).render_(t, twig.extend({}, i, {
                                item: "pipeline"in i ? i.pipeline : ""
                            })),
                            ++r.index0,
                            ++r.index,
                            r.first = !1,
                            r.length && (--r.revindex0,
                            --r.revindex,
                            r.last = 0 === r.revindex0)
                        }
                        ), this)
                    } else
                        "active_pipelines"in i && i.active_pipelines && twig.filter.length(this.env_, "active_pipelines"in i ? i.active_pipelines : "") > 1 ? (i._parent = i,
                        a = "active_pipelines"in i ? i.active_pipelines : "",
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
                            i._key = a,
                            i.pipeline = n,
                            new (e._get("interface/left_menu/hover_menu/leads/item.twig"))(this.env_).render_(t, twig.extend({}, i, {
                                item: "pipeline"in i ? i.pipeline : "",
                                multiple: !0
                            })),
                            ++r.index0,
                            ++r.index,
                            r.first = !1,
                            r.length && (--r.revindex0,
                            --r.revindex,
                            r.last = 0 === r.revindex0)
                        }
                        ), this)) : "active_pipelines"in i && i.active_pipelines && 1 == twig.filter.length(this.env_, "active_pipelines"in i ? i.active_pipelines : "") && (i.the_only_pipeline = twig.attr("active_pipelines"in i ? i.active_pipelines : "", 0, void 0, "array"),
                        twig.attr("the_only_pipeline"in i ? i.the_only_pipeline : "", "name", void 0, void 0, !0) && !twig.empty(twig.attr("the_only_pipeline"in i ? i.the_only_pipeline : "", "name")) || (i.the_only_pipeline = twig.filter.merge("the_only_pipeline"in i ? i.the_only_pipeline : "", {
                            name: this.env_.filter("i18n", "Pipeline")
                        })),
                        new (e._get("interface/left_menu/hover_menu/leads/item.twig"))(this.env_).render_(t, twig.extend({}, i, {
                            item: "the_only_pipeline"in i ? i.the_only_pipeline : ""
                        }))),
                        "has_footer_add"in i && i.has_footer_add && (t.append('<li class="aside__list-item aside__list-item-add"><div class="aside__footer-inner js-aside__footer-add">'),
                        new (e._get("interface/left_menu/hover_menu/leads/footer_add.twig"))(this.env_).render_(t, i),
                        t.append("</div></li>"))
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_left_menu_hover_menu_leads_index"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/left_menu/hover_menu/leads/index", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
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
                    "leads-dp" == ("entity"in t ? t.entity : "") ? "multiple"in t && t.multiple || "is_archive_tab"in t && t.is_archive_tab ? t.url = "/settings/pipeline/leads/" + twig.attr("item"in t ? t.item : "", "id") : t.url = "/settings/pipeline/leads/" : "multiple"in t && t.multiple || "is_archive_tab"in t && t.is_archive_tab ? t.url = ("base_url"in t ? t.base_url : "") + "pipeline/" + twig.attr("item"in t ? t.item : "", "id") : t.url = ("base_url"in t ? t.base_url : "") + "pipeline/",
                    e.append('<li class="aside__list-item '),
                    twig.attr("item"in t ? t.item : "", "selected") && e.append("aside__list-item_selected"),
                    e.append(" "),
                    "leads-dp" == ("entity"in t ? t.entity : "") && e.append("js-animate js-item-animate aside__list-item_editable"),
                    e.append('" data-id="'),
                    e.append(twig.filter.escape(this.env_, twig.attr("item"in t ? t.item : "", "id"), "light_escape", null, !0)),
                    e.append('"><a href="'),
                    e.append(twig.filter.escape(this.env_, "url"in t ? t.url : "", "light_escape", null, !0)),
                    e.append('" class="aside__list-item-link js-navigate-link navigate-link-nodecor h-text-overflow">'),
                    e.append(twig.filter.escape(this.env_, twig.attr("item"in t ? t.item : "", "name"), "light_escape", null, !0)),
                    e.append("</a>"),
                    "leads-dp" == ("entity"in t ? t.entity : "") && (e.append('<span class="aside__button-icon js-aside__action-button" data-action="edit"><svg class="svg-icon svg-common--edit-pencil-dims"><use xlink:href="#common--edit-pencil"></use></svg></span><input type="hidden" value="'),
                    e.append(twig.filter.escape(this.env_, twig.attr("item"in t ? t.item : "", "sort"), "light_escape", null, !0)),
                    e.append('" data-pipe-id="'),
                    e.append(twig.filter.escape(this.env_, twig.attr("item"in t ? t.item : "", "id"), "light_escape", null, !0)),
                    e.append('" class="status__sort" name="sort">')),
                    e.append("</li>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_left_menu_hover_menu_leads_item"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/left_menu/hover_menu/leads/item", t)
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
                    return e._get("interface/left_menu/hover_menu/item_in_edit.twig")
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    this.getParent(t).render_(e, t, twig.extend({}, this.getBlocks(), i))
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_left_menu_hover_menu_leads_item_in_edit"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/left_menu/hover_menu/leads/item_in_edit", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
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
                    e.append('<a href="#" class="aside__list-item-link js-navigate-link navigate-link-nodecor h-text-overflow aside__list-item-link_salesbot-bottom" data-id="helpbot">'),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "AI power-up"), "light_escape", null, !0)),
                    e.append("</a>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_left_menu_hover_menu_salesbot_footer_add"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/left_menu/hover_menu/salesbot/footer_add", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
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
                        i.item = n,
                        new (e._get("interface/left_menu/hover_menu/salesbot/item.twig"))(this.env_).render_(t, twig.extend({}, i, {
                            item: "item"in i ? i.item : "",
                            multiple: !0
                        })),
                        t.append(" "),
                        ++r.index0,
                        ++r.index,
                        r.first = !1,
                        r.length && (--r.revindex0,
                        --r.revindex,
                        r.last = 0 === r.revindex0)
                    }
                    ), this)
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_left_menu_hover_menu_salesbot_index"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/left_menu/hover_menu/salesbot/index", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
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
                    e.append('<li class="aside__list-item '),
                    twig.attr("item"in t ? t.item : "", "selected") && e.append("aside__list-item_selected"),
                    e.append(' js-animate js-item-animate aside__list-item_editable" data-id="'),
                    e.append(twig.filter.escape(this.env_, twig.attr("item"in t ? t.item : "", "id"), "light_escape", null, !0)),
                    e.append('"><a href="#" data-id='),
                    e.append(twig.filter.escape(this.env_, twig.attr("item"in t ? t.item : "", "id"), "light_escape", null, !0)),
                    e.append(' class="aside__list-item-link js-navigate-link navigate-link-nodecor h-text-overflow">'),
                    twig.attr("item"in t ? t.item : "", "name") ? e.append(twig.filter.escape(this.env_, twig.attr("item"in t ? t.item : "", "name"), "light_escape", null, !0)) : e.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Salesbot") + " #" + twig.attr("item"in t ? t.item : "", "id"), "light_escape", null, !0)),
                    e.append("</a>"),
                    twig.attr("item"in t ? t.item : "", "readonly") || e.append('<span class="aside__button-icon js-aside__action-button" data-action="edit"><svg class="svg-icon svg-common--edit-pencil-dims"><use xlink:href="#common--edit-pencil"></use></svg></span>'),
                    e.append('<input type="hidden" value="'),
                    e.append(twig.filter.escape(this.env_, twig.attr("item"in t ? t.item : "", "sort"), "light_escape", null, !0)),
                    e.append('" data-pipe-id="'),
                    e.append(twig.filter.escape(this.env_, twig.attr("item"in t ? t.item : "", "id"), "light_escape", null, !0)),
                    e.append('" class="status__sort" name="sort"></li>')
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_left_menu_hover_menu_salesbot_item"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/left_menu/hover_menu/salesbot/item", t)
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
                    return e._get("interface/left_menu/hover_menu/item_in_edit.twig")
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    this.getParent(t).render_(e, t, twig.extend({}, this.getBlocks(), i))
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_left_menu_hover_menu_salesbot_item_in_edit"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/left_menu/hover_menu/salesbot/item_in_edit", t)
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
        e._sentryDebugIds[t] = "a35be570-1a6c-459c-9125-28ab7a6c21ff",
        e._sentryDebugIdIdentifier = "sentry-dbid-a35be570-1a6c-459c-9125-28ab7a6c21ff")
    } catch (e) {}
}();
//# sourceMappingURL=66905.ca040e49f217a7843a7d.js.map
