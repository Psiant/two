(window.webpackChunk = window.webpackChunk || []).push([[65779], {
    665779: (e, t, i) => {
        var n, a;
        n = [i(460159), i(295165), i(94849), i(86831), i(92474)],
        void 0 === (a = function(e) {
            (function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e),
                    this.setBlocks({
                        aside_top: twig.bind(this.block_aside_top, this),
                        search: twig.bind(this.block_search, this),
                        list: twig.bind(this.block_list, this),
                        button_scroll: twig.bind(this.block_button_scroll, this),
                        aside_bottom: twig.bind(this.block_aside_bottom, this),
                        chat: twig.bind(this.block_chat, this)
                    })
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(e) {
                    return !1
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    e.append('<div class="inbox-holder '),
                    "is_visible"in t && t.is_visible || e.append("inbox-holder_hidden"),
                    e.append(" "),
                    e.append(twig.filter.escape(this.env_, "wrapper_class_name"in t ? t.wrapper_class_name : "", "light_escape", null, !0)),
                    e.append('" id="'),
                    e.append(twig.filter.escape(this.env_, "id"in t ? twig.filter.def("id"in t ? t.id : "", "notification-wrapper") : "notification-wrapper", "light_escape", null, !0)),
                    e.append('" '),
                    "is_visible"in t && t.is_visible || e.append(' style="display: none;" '),
                    e.append('><div class="inbox-wrapper"><div class="aside aside-inbox '),
                    e.append(twig.filter.escape(this.env_, "class_name"in t ? t.class_name : "", "light_escape", null, !0)),
                    e.append('" id="'),
                    e.append(twig.filter.escape(this.env_, "aside_id"in t ? twig.filter.def("aside_id"in t ? t.aside_id : "", "notification-aside") : "notification-aside", "light_escape", null, !0)),
                    e.append('">'),
                    e.append(this.renderBlock("aside_top", t, i)),
                    e.append('<div class="'),
                    e.append(twig.filter.escape(this.env_, "aside_inner_class_name"in t ? twig.filter.def("aside_inner_class_name"in t ? t.aside_inner_class_name : "", "aside__inner") : "aside__inner", "light_escape", null, !0)),
                    e.append('">'),
                    e.append(this.renderBlock("search", t, i)),
                    e.append(this.renderBlock("list", t, i)),
                    e.append(this.renderBlock("button_scroll", t, i)),
                    e.append("</div>"),
                    e.append(this.renderBlock("aside_bottom", t, i)),
                    e.append('</div><div class="notification__item notification-inner loading"><span class="spinner-icon"></span></div></div>'),
                    e.append(this.renderBlock("chat", t, i)),
                    e.append("</div>")
                }
                ,
                t.prototype.block_aside_top = function(e, t, i) {
                    i = void 0 === i ? {} : i
                }
                ,
                t.prototype.block_search = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    i.search_params = {
                        create_group_chat_disabled: "create_group_chat_disabled"in i ? i.create_group_chat_disabled : ""
                    },
                    "is_chats_inbox_enabled"in i && i.is_chats_inbox_enabled && twig.attr("_account_features"in i ? i._account_features : "", "global_inbox") && (i.search_params = {
                        create_group_chat_disabled: "is_chats_inbox_enabled"in i ? i.is_chats_inbox_enabled : "",
                        search_placeholder: this.env_.filter("i18n", "Filter"),
                        search_disabled: !0,
                        search_icon: "common--filter-inbox"
                    }),
                    twig.attr("amo_chats_state"in i ? i.amo_chats_state : "", "is_full_enabled") && (i.search_params = twig.filter.merge("search_params"in i ? i.search_params : "", {
                        create_group_chat_disabled: !0
                    })),
                    new (e._get("interface/inbox/filter/search_line.twig"))(this.env_).render_(t, twig.filter.merge("search_params"in i ? i.search_params : "", {
                        params: "params"in i ? i.params : ""
                    }))
                }
                ,
                t.prototype.block_list = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    t.append('<div id="'),
                    t.append(twig.filter.escape(this.env_, "inbox_id"in i ? twig.filter.def("inbox_id"in i ? i.inbox_id : "", "inbox-container") : "inbox-container", "light_escape", null, !0)),
                    t.append('" class="inbox-list custom-scroll"><span class="inbox__spiner">'),
                    new (e._get("interface/inbox/plugs/message.twig"))(this.env_).render_(t, []),
                    t.append("</span></div>")
                }
                ,
                t.prototype.block_button_scroll = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    e.append('<div class="button-scroll"></div>')
                }
                ,
                t.prototype.block_aside_bottom = function(e, t, i) {
                    i = void 0 === i ? {} : i
                }
                ,
                t.prototype.block_chat = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    e.append('<div class="inbox-direct-chat-container"></div>')
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_inbox_aside"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/inbox/aside", t)
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
                    n = void 0 === n ? {} : n;
                    var a = t;
                    (t = new twig.StringBuffer).append('data-id="'),
                    t.append(twig.filter.escape(this.env_, "id"in i ? i.id : "", "light_escape", null, !0)),
                    t.append('" id="inbox-notification-'),
                    t.append(twig.filter.escape(this.env_, "id"in i ? i.id : "", "light_escape", null, !0)),
                    t.append('" '),
                    "custom_action_hash"in i && i.custom_action_hash && (t.append(' data-custom-action-hash="'),
                    t.append(twig.filter.escape(this.env_, "custom_action_hash"in i ? i.custom_action_hash : "", "light_escape", null, !0)),
                    t.append('" ')),
                    t.append(' class="notification__item '),
                    "preselected"in i && i.preselected || "is_read"in i && i.is_read || t.append(" notification__item__unread"),
                    t.append(" notification-inner"),
                    "preselected"in i && i.preselected ? t.append(" notification-inner_preselected") : "selected"in i && i.selected && t.append(" notification-inner_selected"),
                    t.append('"'),
                    i.wrapper_params = new twig.Markup(t.toString()),
                    a = t = a,
                    t = new twig.StringBuffer,
                    "web_link"in i && i.web_link && (t.append(' <a href="'),
                    t.append(twig.filter.escape(this.env_, "web_link"in i ? i.web_link : "", "light_escape", null, !0)),
                    t.append('" class="'),
                    "absolute_link"in i && i.absolute_link ? t.append("notification-inner__link") : t.append("js-navigate-link"),
                    t.append('" '),
                    "absolute_link"in i && i.absolute_link && t.append('target="_blank"'),
                    t.append("> ")),
                    t.append('<div class="notification-chat__non-select"><div class="'),
                    twig.attr(twig.attr("body"in i ? i.body : "", "icon"), "robot") ? t.append("notification-chat__container-img_bot") : t.append("notification-chat__container-img"),
                    t.append('">'),
                    twig.attr(twig.attr("body"in i ? i.body : "", "icon"), "value") && (i.avatar_url = twig.attr(twig.attr("body"in i ? i.body : "", "icon"), "value")),
                    new (e._get("interface/common/avatar.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        class: "notification-inner__avatar",
                        url: "avatar_url"in i ? i.avatar_url : "",
                        id: twig.attr(twig.attr("body"in i ? i.body : "", "icon"), "avatar_id")
                    })),
                    "chat_group" == twig.attr(twig.attr("body"in i ? i.body : "", "icon"), "sub") ? i.icon_class_name = "group_chat" : "error" == twig.attr(twig.attr("body"in i ? i.body : "", "icon"), "sub") ? i.icon_class_name = !1 : "chat" == twig.attr(twig.attr("body"in i ? i.body : "", "icon"), "sub") ? i.icon_class_name = "chats" : i.icon_class_name = twig.attr(twig.attr("body"in i ? i.body : "", "icon"), "sub"),
                    "icon_class_name"in i && i.icon_class_name && (t.append('<div class="notification-chat__container-icon">'),
                    "mail" == ("icon_class_name"in i ? i.icon_class_name : "") ? t.append('<img class="notification-mail__icon" src="/frontend/images/interface/inbox/icon_notification_mail.png">') : twig.attr("body"in i ? i.body : "", "icon_origin") ? (t.append('<img class="notification-'),
                    t.append(twig.filter.escape(this.env_, twig.attr("body"in i ? i.body : "", "icon_origin"), "light_escape", null, !0)),
                    t.append('__icon" src="'),
                    t.append(twig.filter.escape(this.env_, twig.attr("body"in i ? i.body : "", "icon_origin"), "light_escape", null, !0)),
                    t.append('">')) : (t.append('<svg class="svg-icon svg-common--chats-dims"><use xlink:href="#common--'),
                    t.append(twig.filter.escape(this.env_, "icon_class_name"in i ? i.icon_class_name : "", "light_escape", null, !0)),
                    t.append('"></use></svg>')),
                    t.append("</div>")),
                    t.append('</div></div><div class="notification-inner__container_text">'),
                    twig.attr("body"in i ? i.body : "", "title") && (twig.attr("body"in i ? i.body : "", "__old_type"),
                    i.title = twig.attr("body"in i ? i.body : "", "title"),
                    t.append('<div class="notification-inner__info_message"><h2 class="notification-inner__title_message"><span class="notification-inner__title_message_title">'),
                    t.append(twig.filter.escape(this.env_, "title"in i ? i.title : "", "light_escape", null, !0)),
                    t.append("</span>"),
                    new (e._get("interface/controls/status_chat.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        id: "id"in i ? i.id : ""
                    })),
                    t.append('</h2><span class="notification-inner__data_message">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("feed_date", "updated_at"in i ? i.updated_at : ""), "light_escape", null, !0)),
                    t.append("</span></div>")),
                    twig.attr("body"in i ? i.body : "", "subtitle") && (twig.attr("body"in i ? i.body : "", "__old_type"),
                    i.subtitle = twig.attr("body"in i ? i.body : "", "subtitle"),
                    t.append('<div class="notification-inner__info_message"><h3 class="notification-inner__title_message">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("body"in i ? i.body : "", "subtitle"), "light_escape", null, !0)),
                    t.append("</h3></div>")),
                    t.append('<span class="notification-inner__from__message '),
                    "opened"in i && i.opened && t.append("notification-inner__from__message-fully-opened"),
                    t.append(" "),
                    "fully_visible"in i && i.fully_visible && t.append("notification-inner__from__message-fully-visible"),
                    t.append('">'),
                    i.message = twig.attr("body"in i ? i.body : "", "rows"),
                    i._parent = i;
                    var s = "message"in i ? i.message : ""
                      , o = {
                        index0: 0,
                        index: 1,
                        first: !0
                    };
                    if (twig.countable(s)) {
                        var r = twig.count(s);
                        o.revindex0 = r - 1,
                        o.revindex = r,
                        o.length = r,
                        o.last = 1 === r
                    }
                    twig.forEach(s, (function(e, n) {
                        i._key = n,
                        i.line = e,
                        i.line_text = twig.attr("line"in i ? i.line : "", "text"),
                        t.append('<span class="'),
                        t.append(twig.filter.escape(this.env_, twig.attr("line"in i ? i.line : "", "style"), "light_escape", null, !0)),
                        t.append(" notification-inner__from__message_height-"),
                        t.append(twig.filter.escape(this.env_, twig.attr("line"in i ? i.line : "", "class_height"), "light_escape", null, !0)),
                        t.append('">'),
                        twig.attr("body"in i ? i.body : "", "__old_type") ? t.append("line_text"in i ? i.line_text : "") : t.append(twig.filter.escape(this.env_, "line_text"in i ? i.line_text : "", "light_escape", null, !0)),
                        "notification"in i && i.notification || !twig.attr(o, "last") || !twig.contains(["h2", "h3"], twig.attr("line"in i ? i.line : "", "class_height")) || (t.append('<div class="notification-inner__button_show-more-container" '),
                        twig.filter.length(this.env_, "line_text"in i ? i.line_text : "") > 100 && t.append('style="display: block"'),
                        t.append('><div class="notification-inner__button_show-more">&#8226;&#8226;&#8226;</div></div>')),
                        t.append("</span>"),
                        ++o.index0,
                        ++o.index,
                        o.first = !1,
                        o.length && (--o.revindex0,
                        --o.revindex,
                        o.last = 0 === o.revindex0)
                    }
                    ), this),
                    t.append("</span></div>"),
                    "web_link"in i && i.web_link && t.append(" </a> "),
                    i.inner_component = new twig.Markup(t.toString()),
                    t = a,
                    "is_native_link"in i && i.is_native_link ? (t.append('<a href="'),
                    t.append(twig.filter.escape(this.env_, "amo_link"in i ? i.amo_link : "", "light_escape", null, !0)),
                    t.append('" '),
                    t.append(twig.filter.escape(this.env_, "wrapper_params"in i ? i.wrapper_params : "", "light_escape", null, !0)),
                    t.append(">"),
                    t.append(twig.filter.escape(this.env_, "inner_component"in i ? i.inner_component : "", "light_escape", null, !0)),
                    t.append("</a>")) : (t.append("<div "),
                    t.append(twig.filter.escape(this.env_, "wrapper_params"in i ? i.wrapper_params : "", "light_escape", null, !0)),
                    t.append(">"),
                    t.append(twig.filter.escape(this.env_, "inner_component"in i ? i.inner_component : "", "light_escape", null, !0)),
                    t.append("</div>"))
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_inbox_message"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/inbox/message", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
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
                    t.append('<div class="inbox-multiaction hidden">'),
                    i._parent = i;
                    var a = "buttons"in i ? i.buttons : "";
                    twig.forEach(a, (function(e, n) {
                        i._key = n,
                        i.button = e,
                        t.append('<div class="inbox-multiaction__button" data-type="'),
                        t.append(twig.filter.escape(this.env_, twig.attr("button"in i ? i.button : "", "type"), "light_escape", null, !0)),
                        t.append('"><svg class="svg-icon svg-'),
                        t.append(twig.filter.escape(this.env_, twig.attr("button"in i ? i.button : "", "icon"), "light_escape", null, !0)),
                        t.append('-dims"><use xlink:href="#'),
                        t.append(twig.filter.escape(this.env_, twig.attr("button"in i ? i.button : "", "icon"), "light_escape", null, !0)),
                        t.append('"></use></svg>'),
                        t.append(twig.filter.escape(this.env_, twig.attr("button"in i ? i.button : "", "title"), "light_escape", null, !0)),
                        t.append("</div>")
                    }
                    ), this),
                    t.append('<div class="inbox-multiaction__clear-and-all"><span class="inbox-multiaction__clear"><svg class="svg-icon svg-common--cross-close-dims"><use xlink:href="#common--cross-close"></use></svg></span>'),
                    new (e._get("interface/controls/checkbox.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        class_name: "inbox-multiaction__all-button"
                    })),
                    t.append("</div></div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_inbox_multiaction"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/inbox/multiaction", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
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
                    e.append('<div id="offline_container"></div>')
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_inbox_offline_container"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !0
                }
                ,
                e._add("interface/inbox/offline_container", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
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
                    e.append('<div id="popups_wrapper"></div><div id="popups_inbox"><div class="popup-inbox"></div></div>')
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_inbox_popups_wrapper"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !0
                }
                ,
                e._add("interface/inbox/popups_wrapper", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e),
                    this.setBlocks({
                        chat_compose: twig.bind(this.block_chat_compose, this)
                    })
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(e) {
                    return !1
                }
                ,
                t.prototype.render_ = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    t.append('<div class="js-note feed-compose_amojo">'),
                    "amojo_disabled"in i && i.amojo_disabled ? (t.append('<div class="amojo-disabled-plug">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Sorry, the service is not available at the moment"), "light_escape", null, !0)),
                    t.append("</div>")) : (t.append(this.renderBlock("chat_compose", i, n)),
                    t.append('<div class="feed-amojo__actions"><div class="feed-amojo__actions-inner">'),
                    new (e._get("interface/controls/button.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        text: twig.attr("lang"in i ? i.lang : "", "send_message"),
                        class_name: "js-note-submit feed-note__button",
                        tab_index: "-1",
                        disabled: !0
                    })),
                    new (e._get("interface/controls/cancel_button.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        text: twig.attr("lang"in i ? i.lang : "", "button_cancel"),
                        class_name: "js-note-edit-cancel feed-note__button_cancel",
                        tab_index: "-1"
                    })),
                    t.append('</div><label for="note-edit-attach-filenew" class="feed-amojo__actions-attach"><svg class="svg-icon svg-notes--feed-attach-dims"><use xlink:href="#notes--feed-attach"></use></svg></label><input type="file" id="note-edit-attach-filenew" class="js-form-changes-skip hidden" tabindex="-1" name="UserFile" /></div>')),
                    t.append("</div>")
                }
                ,
                t.prototype.block_chat_compose = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    "disableReplyTo"in i && i.disableReplyTo || (t.append('<div class="feed-compose__header"><div class="feed-compose-user__to">'),
                    t.append(twig.filter.escape(this.env_, twig.filter.capitalize(this.env_, twig.attr("lang"in i ? i.lang : "", "mail_letter_to")), "light_escape", null, !0)),
                    t.append(':&nbsp;</div><div class="feed-compose-user-wrapper" id="feed_compose_user">'),
                    new (e._get("interface/notes/feed_user.twig"))(this.env_).render_(t, twig.extend({}, i, "user"in i ? i.user : "")),
                    t.append("</div></div>")),
                    t.append('<div class="feed-compose__message"><div class="feed-compose__quotation js-quotation"></div><textarea name="message" placeholder="'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "chat_placeholder"), "light_escape", null, !0)),
                    t.append('"class="feed-compose__message-area custom-scroll">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("data"in i ? i.data : "", "text", void 0, void 0, !0) ? twig.filter.def(twig.attr("data"in i ? i.data : "", "text"), "") : "", "light_escape", null, !0)),
                    t.append("</textarea></div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_inbox_direct_chat_compose"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/inbox/direct_chat/compose", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
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
                    t.append('<div class="chat-inbox__content-inner js-notes" id="chat-inbox_scroll_holder"><div class="js-feed-spinner">'),
                    new (e._get("interface/inbox/plugs/chat.twig"))(this.env_).render_(t, i),
                    t.append('</div></div><div class="chat-inbox__content-inner-typing"></div>')
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_inbox_direct_chat_content"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/inbox/direct_chat/content", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
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
                    e.append('<div class="feed-note-wrapper feed-note-wrapper-separator" data-ts="'),
                    e.append(twig.filter.escape(this.env_, "created_at"in t ? t.created_at : "", "light_escape", null, !0)),
                    e.append('"><div class="separator__wrapper" data-ts="'),
                    e.append(twig.filter.escape(this.env_, "created_at"in t ? t.created_at : "", "light_escape", null, !0)),
                    e.append('"><div class="separator__inner"><div class="separator__inner-text">'),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("feed_date", "created_at"in t ? t.created_at : "", "date"), "light_escape", null, !0)),
                    e.append("</div></div></div></div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_inbox_direct_chat_date_separator"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/inbox/direct_chat/date_separator", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
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
                    t.append('<header class="chat-inbox__header">'),
                    new (e._get("interface/common/avatar.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        class: "notification-inner__avatar",
                        url: "avatar"in i ? i.avatar : "",
                        id: "is_bot"in i && i.is_bot ? null : "id"in i ? i.id : ""
                    })),
                    t.append('<div class="container-header-icon"><span class="chat-inbox__header__name-user">'),
                    t.append(twig.filter.escape(this.env_, "title"in i ? i.title : "", "light_escape", null, !0)),
                    t.append("</span>"),
                    new (e._get("interface/controls/status_chat.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        id: "id"in i ? i.id : ""
                    })),
                    t.append('</div><img class="chat-inbox__close" src="/frontend/images/interface/inbox/close_notification.svg"><button type="button" class="js-button-with-loader js-hc-sidebar-button button-input button-input_blue button-input_top-right" tabindex="0"><span class="button-input-inner"><span class="button-input-inner__text">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Quick answers"), "light_escape", null, !0)),
                    t.append('</span></span></button><div class="js-hc-container"></div></header>')
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_inbox_direct_chat_header"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/inbox/direct_chat/header", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
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
                    e.append('<header class="chat-inbox__header chat-inbox__header--lead"><div class="container-header-icon container-header-icon--lead"><span class="chat-inbox__header__name-user chat-inbox__header__name-user--title">'),
                    e.append(twig.filter.escape(this.env_, "title"in t ? t.title : "", "light_escape", null, !0)),
                    e.append('</span><span class="chat-inbox__header__name-user chat-inbox__header__name-user--id">'),
                    "id"in t && t.id && "unsorted" != ("entity"in t ? t.entity : "") && (e.append("#"),
                    e.append(twig.filter.escape(this.env_, "id"in t ? t.id : "", "light_escape", null, !0))),
                    e.append("</span></div>"),
                    !("href"in t) || !t.href || "header_link_disable"in t && t.header_link_disable || (e.append('<a href="'),
                    e.append(twig.filter.escape(this.env_, "href"in t ? t.href : "", "light_escape", null, !0)),
                    e.append('" class="chat-inbox__link-to-web" target="_blank">'),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Open in web"), "light_escape", null, !0)),
                    e.append("</a>")),
                    e.append("</header>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_inbox_direct_chat_header_lead"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/inbox/direct_chat/header_lead", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
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
                    i.compact_date = !0,
                    t.append('<div class="feed-note-wrapper feed-note-wrapper_hidden feed-note-wrapper-amojo'),
                    "compact"in i && i.compact && t.append(" feed-note-wrapper_compact"),
                    "first_for_day"in i && i.first_for_day && t.append(" feed-note-wrapper_first-for-day"),
                    t.append('">'),
                    i.is_nps_bot = !1,
                    twig.attr(twig.attr(twig.attr("message_attributes"in i ? i.message_attributes : "", "support"), "bot"), "is_nps", void 0, void 0, !0) && (i.is_nps_bot = twig.attr(twig.attr(twig.attr("message_attributes"in i ? i.message_attributes : "", "support"), "bot"), "is_nps")),
                    "is_nps_bot"in i && i.is_nps_bot ? new (e._get("interface/inbox/direct_chat/nps_item_content.twig"))(this.env_).render_(t, i) : new (e._get("interface/inbox/direct_chat/item_content.twig"))(this.env_).render_(t, i),
                    t.append("</div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_inbox_direct_chat_item"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/inbox/direct_chat/item", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e),
                    this.setBlocks({
                        header: twig.bind(this.block_header, this),
                        body: twig.bind(this.block_body, this)
                    })
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(t) {
                    return e._get("interface/notes/types/amojo/internal.twig")
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    this.getParent(t).render_(e, t, twig.extend({}, this.getBlocks(), i))
                }
                ,
                t.prototype.block_header = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    new (e._get("interface/notes/defaults/header.twig"))(this.env_).render_(t, i)
                }
                ,
                t.prototype.block_body = function(e, t, i) {
                    if (i = void 0 === i ? {} : i,
                    e.append(this.renderParentBlock("body", t, i)),
                    "reply_markup"in t) {
                        e.append('<div class="inline-keyboard js-inline-keyboard">'),
                        t._parent = t;
                        var n = twig.attr("reply_markup"in t ? t.reply_markup : "", "buttons");
                        twig.forEach(n, (function(i, n) {
                            t._key = n,
                            t.row = i,
                            e.append('<div class="inline-keyboard__row">');
                            var a = "row"in t ? t.row : "";
                            twig.forEach(a, (function(i, n) {
                                t._key = n,
                                t.button = i,
                                e.append('<div class="inline-keyboard__button" data-value="'),
                                e.append(twig.filter.escape(this.env_, twig.attr("button"in t ? t.button : "", "callback_data"), "light_escape", null, !0)),
                                e.append('">'),
                                e.append(twig.filter.escape(this.env_, twig.attr("button"in t ? t.button : "", "text"), "light_escape", null, !0)),
                                e.append("</div>")
                            }
                            ), this),
                            e.append("</div>")
                        }
                        ), this),
                        e.append("</div>")
                    }
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_inbox_direct_chat_item_content"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/inbox/direct_chat/item_content", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e),
                    this.setBlocks({
                        header: twig.bind(this.block_header, this),
                        body: twig.bind(this.block_body, this)
                    })
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(t) {
                    return e._get("interface/notes/types/amojo/internal.twig")
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    t.terrible = twig.attr("_account_features"in t ? t._account_features : "", "is_customization_for_global") ? this.env_.filter("i18n", "Very poor (support chat - kommo)") : this.env_.filter("i18n", "Terrible"),
                    t.excellent = twig.attr("_account_features"in t ? t._account_features : "", "is_customization_for_global") ? this.env_.filter("i18n", "Excellent (support chat - kommo)") : this.env_.filter("i18n", "Perfect"),
                    this.getParent(t).render_(e, t, twig.extend({}, this.getBlocks(), i))
                }
                ,
                t.prototype.block_header = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    new (e._get("interface/notes/defaults/header.twig"))(this.env_).render_(t, i)
                }
                ,
                t.prototype.block_body = function(e, t, i) {
                    if (i = void 0 === i ? {} : i,
                    e.append(this.renderParentBlock("body", t, i)),
                    "reply_markup"in t) {
                        e.append('<div class="inline-keyboard js-inline-keyboard">'),
                        t._parent = t;
                        var n = twig.attr("reply_markup"in t ? t.reply_markup : "", "buttons");
                        twig.forEach(n, (function(i, n) {
                            t._key = n,
                            t.row = i,
                            e.append('<div class="inline-keyboard__row inline-keyboard__row--horizontal">');
                            var a = "row"in t ? t.row : "";
                            twig.forEach(a, (function(i, n) {
                                t._key = n,
                                t.button = i,
                                e.append('<div class="inline-keyboard__button" data-value="'),
                                e.append(twig.filter.escape(this.env_, twig.attr("button"in t ? t.button : "", "callback_data"), "light_escape", null, !0)),
                                e.append('">'),
                                e.append(twig.filter.escape(this.env_, twig.attr("button"in t ? t.button : "", "text"), "light_escape", null, !0)),
                                e.append("</div>")
                            }
                            ), this),
                            e.append('</div><div class="inline-keyboard__row inline-keyboard__row--horizontal-caption"><div>'),
                            e.append(twig.filter.escape(this.env_, "terrible"in t ? t.terrible : "", "light_escape", null, !0)),
                            e.append("</div><div>"),
                            e.append(twig.filter.escape(this.env_, "excellent"in t ? t.excellent : "", "light_escape", null, !0)),
                            e.append("</div></div>")
                        }
                        ), this),
                        e.append("</div>")
                    }
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_inbox_direct_chat_nps_item_content"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/inbox/direct_chat/nps_item_content", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
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
                    e.append('<div class="chat-inbox__reply"><div class="feed-compose"><div class="feed-compose__inner minimized"></div></div></div>')
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_inbox_direct_chat_reply"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !0
                }
                ,
                e._add("interface/inbox/direct_chat/reply", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
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
                    t.append('<div class="chat-inbox" id="chat-wrapper">'),
                    new (e._get("interface/inbox/direct_chat/header.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        url: "avatar"in i ? i.avatar : "",
                        id: "id"in i ? i.id : ""
                    })),
                    "amojo_disabled"in i && i.amojo_disabled ? (t.append('<div class="amojo-disabled-plug">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Sorry, the service is not available at the moment"), "light_escape", null, !0)),
                    t.append("</div>")) : (t.append('<div class="chat-inbox__content custom-scroll">'),
                    "no_content"in i && i.no_content || new (e._get("interface/inbox/direct_chat/content.twig"))(this.env_).render_(t, i),
                    t.append("</div>"),
                    "no_reply"in i && i.no_reply || new (e._get("interface/inbox/direct_chat/reply.twig"))(this.env_).render_(t, i)),
                    t.append("</div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_inbox_direct_chat_wrapper"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/inbox/direct_chat/wrapper", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
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
                    t.append('<div class="chat-inbox" id="chat-wrapper">'),
                    new (e._get("interface/inbox/direct_chat/header_lead.twig"))(this.env_).render_(t, i),
                    "amojo_disabled"in i && i.amojo_disabled ? (t.append('<div class="amojo-disabled-plug">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Sorry, the service is not available at the moment"), "light_escape", null, !0)),
                    t.append("</div>")) : (t.append('<div class="chat-inbox__content custom-scroll '),
                    t.append(twig.filter.escape(this.env_, "class_name"in i ? i.class_name : "", "light_escape", null, !0)),
                    t.append('"></div>')),
                    t.append("</div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_inbox_direct_chat_wrapper_lead"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/inbox/direct_chat/wrapper_lead", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e),
                    this.setBlocks({
                        before: twig.bind(this.block_before, this),
                        chat_create: twig.bind(this.block_chat_create, this)
                    })
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(e) {
                    return !1
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    e.append('<div class="search-container-wrapper '),
                    e.append(twig.filter.escape(this.env_, "class_name"in t ? t.class_name : "", "light_escape", null, !0)),
                    e.append('">'),
                    e.append(this.renderBlock("before", t, i)),
                    e.append('<form class="search-container" onsubmit="return false"><div class="search-options" id="search-options"><div class="list-top-search__preset" id="search_filter_preset"></div><div class="search-options-wrapper"><div class="search-options-wrapper__list"></div></div></div><div class="button__filter '),
                    "search_disabled"in t && t.search_disabled && e.append("button__filter_wo-search"),
                    e.append('"><input type="text" class="search-container__input js-inbox-search" autocomplete="off" '),
                    "search_disabled"in t && t.search_disabled && e.append('disabled="disabled"'),
                    e.append(' placeholder="'),
                    e.append(twig.filter.escape(this.env_, "search_placeholder"in t ? twig.filter.def("search_placeholder"in t ? t.search_placeholder : "", this.env_.filter("i18n", "Search notifications")) : this.env_.filter("i18n", "Search notifications"), "light_escape", null, !0)),
                    e.append('" />'),
                    "search_icon"in t && t.search_icon || (t.search_icon = "common--filter-search"),
                    e.append('<svg class="aside-top-search__icon svg-icon svg-'),
                    e.append(twig.filter.escape(this.env_, "search_icon"in t ? t.search_icon : "", "light_escape", null, !0)),
                    e.append('-dims"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#'),
                    e.append(twig.filter.escape(this.env_, "search_icon"in t ? t.search_icon : "", "light_escape", null, !0)),
                    e.append('"></use></svg></div><span class="js-search-inbox-clear aside-clear-button hidden"><span class="icon icon-inline icon-search-cancel"></span></span>'),
                    t.context_menu = [],
                    twig.attr("unread_sort"in t ? t.unread_sort : "", "type") ? t.data_sort = twig.attr("unread_sort"in t ? t.unread_sort : "", "type") : t.data_sort = "desc",
                    twig.attr(twig.attr("params"in t ? t.params : "", "amo_messenger"), "direct_migrated") || "create_group_chat_disabled"in t && t.create_group_chat_disabled || !twig.attr(twig.attr("params"in t ? t.params : "", "rights"), "can_group_chat_create") || (t.context_menu = twig.filter.merge("context_menu"in t ? t.context_menu : "", [{
                        svg_icon: "plus-in-circle",
                        class_name: "js-create_group_chat",
                        text: this.env_.filter("i18n", "Create a group chat")
                    }])),
                    t.context_menu = twig.filter.merge("context_menu"in t ? t.context_menu : "", [{
                        svg_icon: "mute",
                        class_name: "js-inbox-mute",
                        text: this.env_.filter("i18n", "Turn on sound")
                    }]),
                    "multiactions_disabled"in t && t.multiactions_disabled || (t.context_menu = twig.filter.merge("context_menu"in t ? t.context_menu : "", [{
                        svg_icon: "multiactions",
                        class_name: "js-inbox-multiactions",
                        text: this.env_.filter("i18n", "Multiple actions")
                    }])),
                    twig.attr("amo_chats_state"in t ? t.amo_chats_state : "", "is_full_enabled") && (t.sources = [{
                        text: this.env_.filter("i18n", "Customer sources"),
                        class_name: "connect-source-item connect-source-item-header",
                        custom_inner_template: "interface/common/context_menu_inner_sources.twig"
                    }, {
                        is_connect_btn: !0,
                        text: this.env_.filter("i18n", "Connect") + " Telegram",
                        class_name: "connect-source-item",
                        btn_class_name: "js-connect-sources-add-base",
                        bg_color: "#2CA8DD",
                        svg_icon: "telegram-circled",
                        icon_left_class: "svg-icon__context",
                        additional_btn_data: 'data-name="telegram"',
                        custom_inner_template: "interface/common/context_menu_inner_sources.twig"
                    }, {
                        is_connect_btn: !0,
                        text: this.env_.filter("i18n", "Connect") + " Vkontakte",
                        class_name: "connect-source-item",
                        btn_class_name: "js-connect-sources-add-base",
                        bg_color: "#0077FF",
                        svg_icon: "vk-circled",
                        icon_left_class: "svg-icon__context",
                        additional_btn_data: 'data-name="vk"',
                        custom_inner_template: "interface/common/context_menu_inner_sources.twig"
                    }, {
                        is_connect_btn: !0,
                        text: this.env_.filter("i18n", "Connect") + " Whatsapp",
                        class_name: "connect-source-item",
                        btn_class_name: "js-connect-sources-add-widget",
                        bg_color: "#4ECB5B",
                        svg_icon: "whatsapp-circled",
                        icon_left_class: "svg-icon__context",
                        additional_btn_data: 'data-code="amochats_whatsapp"',
                        custom_inner_template: "interface/common/context_menu_inner_sources.twig"
                    }, {
                        is_connect_btn: !0,
                        text: this.env_.filter("i18n", "Connect") + " Viber",
                        class_name: "connect-source-item connect-source-item--last",
                        btn_class_name: "js-connect-sources-add-base",
                        bg_color: "#784FBF",
                        svg_icon: "viber-circled",
                        icon_left_class: "svg-icon__context",
                        additional_btn_data: 'data-name="viber"',
                        custom_inner_template: "interface/common/context_menu_inner_sources.twig"
                    }],
                    t.context_menu = twig.filter.merge("context_menu"in t ? t.context_menu : "", "sources"in t ? t.sources : "")),
                    t.context_menu = twig.filter.merge("context_menu"in t ? t.context_menu : "", [{
                        class_name: "search-more__item-header",
                        text: this.env_.filter("i18n", "Sort")
                    }]),
                    t.context_menu = twig.filter.merge("context_menu"in t ? t.context_menu : "", "sort_options"in t ? twig.filter.def("sort_options"in t ? t.sort_options : "", [{
                        text: this.env_.filter("i18n", "Newest"),
                        class_name: "js-read-sort js_toggle_sort",
                        svg_icon_left: "sort-check",
                        icon_left_class: "svg-icon__context",
                        additional_data: 'data-sort-by="unread_first" data-sort-type="false"'
                    }, {
                        text: this.env_.filter("i18n", "Unread first"),
                        class_name: "js-read-sort js_toggle_sort",
                        svg_icon_left: "sort-check",
                        icon_left_class: "svg-icon__context",
                        additional_data: 'data-sort-by="unread_first" data-sort-type="true"'
                    }, {
                        text: this.env_.filter("i18n", "Starred"),
                        class_name: "js-read-sort js_toggle_sort",
                        svg_icon_left: "sort-check",
                        icon_left_class: "svg-icon__context",
                        additional_data: 'data-sort-by="starred_first" data-sort-type="true"'
                    }]) : [{
                        text: this.env_.filter("i18n", "Newest"),
                        class_name: "js-read-sort js_toggle_sort",
                        svg_icon_left: "sort-check",
                        icon_left_class: "svg-icon__context",
                        additional_data: 'data-sort-by="unread_first" data-sort-type="false"'
                    }, {
                        text: this.env_.filter("i18n", "Unread first"),
                        class_name: "js-read-sort js_toggle_sort",
                        svg_icon_left: "sort-check",
                        icon_left_class: "svg-icon__context",
                        additional_data: 'data-sort-by="unread_first" data-sort-type="true"'
                    }, {
                        text: this.env_.filter("i18n", "Starred"),
                        class_name: "js-read-sort js_toggle_sort",
                        svg_icon_left: "sort-check",
                        icon_left_class: "svg-icon__context",
                        additional_data: 'data-sort-by="starred_first" data-sort-type="true"'
                    }]),
                    e.append('<div class="counter-container">'),
                    "widget_creator_enabled"in t && t.widget_creator_enabled && e.append('<div class="widget-creator inbox-messaging__widget-creator"></div>'),
                    e.append("</div>"),
                    e.append(this.renderBlock("chat_create", t, i)),
                    e.append('</form><div class="inbox-filter__container"></div><div class="inbox-filter__overlay"></div></div>')
                }
                ,
                t.prototype.block_before = function(e, t, i) {
                    i = void 0 === i ? {} : i
                }
                ,
                t.prototype.block_chat_create = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    t.append('<div class="search-more">'),
                    new (e._get("interface/controls/button.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        title: this.env_.filter("i18n", "button_more"),
                        inner_class_name: "search-more__inner-icon",
                        svg_class_name: "controls--button-more",
                        context_menu: "context_menu"in i ? i.context_menu : "",
                        class_name: "search-more__button-wrapper",
                        button_input_class_name: "search-more__button"
                    })),
                    t.append("</div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_inbox_filter_search_line"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/inbox/filter/search_line", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e),
                    this.setBlocks({
                        chat_compose: twig.bind(this.block_chat_compose, this)
                    })
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(t) {
                    return e._get("interface/inbox/direct_chat/compose.twig")
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    this.getParent(t).render_(e, t, twig.extend({}, this.getBlocks(), i))
                }
                ,
                t.prototype.block_chat_compose = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    new (e._get("interface/inbox/group_chat/contenteditable.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        class_name: "feed-compose__message-wrapper custom-scroll",
                        editable_class_name: "feed-compose__message",
                        name: "text",
                        value: twig.attr("data"in i ? i.data : "", "text", void 0, void 0, !0) ? twig.filter.def(twig.attr("data"in i ? i.data : "", "text"), "") : "",
                        placeholder: this.env_.filter("i18n", "Type here")
                    }))
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_inbox_group_chat_compose"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/inbox/group_chat/compose", t)
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
                t.prototype.getParent_ = function(t) {
                    return e._get("interface/controls/contenteditable.twig")
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    this.getParent(t).render_(e, t, twig.extend({}, this.getBlocks(), i))
                }
                ,
                t.prototype.block_clearer = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    t.append('<div class="feed-compose__before">'),
                    t.append(twig.filter.escape(this.env_, twig.attr("lang"in i ? i.lang : "", "task_for"), "light_escape", null, !0)),
                    t.append('&nbsp;<div class="feed-compose-user-wrapper" id="feed_compose_user">'),
                    new (e._get("interface/notes/feed_user.twig"))(this.env_).render_(t, twig.extend({}, i, "user"in i ? i.user : "")),
                    t.append('</div><span class="feed-compose__before-colon">:</span></div>')
                }
                ,
                t.prototype.block_before_text = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    e.append('<div class="feed-compose__quotation js-quotation"></div>')
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_inbox_group_chat_contenteditable"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/inbox/group_chat/contenteditable", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
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
                    e.append('<header class="chat-inbox__header group-chat-inbox__header"><div class="container-header-icon container-header-direct"><span class="chat-inbox__header__name-chat"><input autocomplete="off" name="title" class="'),
                    "styled_input"in t && t.styled_input || e.append("text-input"),
                    e.append(" group-chat__title "),
                    e.append(twig.filter.escape(this.env_, "input_class_name"in t ? t.input_class_name : "", "light_escape", null, !0)),
                    e.append('" type="text" value="'),
                    e.append(twig.filter.escape(this.env_, "title"in t ? t.title : "", "light_escape", null, !0)),
                    e.append('"/></span><div class="group_title__edit" style="display: none"><span class="group_title__edit__save"><span class="icon icon-amoform-checkbox-inform"></span></span>\x3c!----\x3e<span class="group_title__edit__cancel"><span class="icon icon-inline icon-amoform-checkbox-hide"></span></span></div></div><img class="chat-inbox__close" src="/frontend/images/interface/inbox/close_notification.svg"><div class="group_chat-inbox__content custom-scroll"><div id="members-selector" class="multisuggest users-select-wrapper js-multisuggest users-select-wrapper_editing users-select-wrapper_editing-group_chat"></div></div></header>')
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_inbox_group_chat_header"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/inbox/group_chat/header", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
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
                    e.append('<header class="group_chat-inbox__header chat-inbox__header"><div class="container-header-icon container-header-direct container-header-group"><span class="chat-inbox__header__name-group_chat chat-inbox__header__name-chat"><input autocomplete="off" name="title" class="'),
                    "styled_input"in t && t.styled_input || e.append("text-input"),
                    e.append(" group-chat__title group-chat__title-create "),
                    e.append(twig.filter.escape(this.env_, "input_class_name"in t ? t.input_class_name : "", "light_escape", null, !0)),
                    e.append('" type="text" placeholder="'),
                    e.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Chat name"), "light_escape", null, !0)),
                    e.append('"/></span></div><img class="chat-inbox__close" src="/frontend/images/interface/inbox/close_notification.svg"><div class="chat-inbox__content custom-scroll"><div id="members-selector"></div></div></header>')
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_inbox_group_chat_header_edit"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/inbox/group_chat/header_edit", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
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
                    i.compact_date = !0,
                    t.append('<div class="feed-note-wrapper feed-note-wrapper_hidden feed-note-wrapper-amojo'),
                    "compact"in i && i.compact && t.append(" feed-note-wrapper_compact"),
                    "first_for_day"in i && i.first_for_day && t.append(" feed-note-wrapper_first-for-day"),
                    t.append('">'),
                    new (e._get("interface/inbox/group_chat/item_content.twig"))(this.env_).render_(t, i),
                    t.append("</div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_inbox_group_chat_item"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/inbox/group_chat/item", t)
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
                    return e._get("interface/notes/types/amojo/internal.twig")
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    this.getParent(t).render_(e, t, twig.extend({}, this.getBlocks(), i))
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_inbox_group_chat_item_content"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/inbox/group_chat/item_content", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
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
                    i.countAllUsers = 0,
                    t.append('<ul class="multisuggest__list js-multisuggest-list">'),
                    i._parent = i;
                    var a = "users"in i ? i.users : ""
                      , s = {
                        index0: 0,
                        index: 1,
                        first: !0
                    };
                    if (twig.countable(a)) {
                        var o = twig.count(a);
                        s.revindex0 = o - 1,
                        s.revindex = o,
                        s.length = o,
                        s.last = 1 === o
                    }
                    twig.forEach(a, (function(n, a) {
                        i._key = a,
                        i.item = n,
                        twig.attr(s, "index") <= 7 || (i.item = twig.filter.merge("item"in i ? i.item : "", {
                            class_name: twig.attr("item"in i ? i.item : "", "class_name") + " hide_items-group_chat "
                        })),
                        new (e._get("interface/users_select/item_group_chat.twig"))(this.env_).render_(t, twig.extend({}, i, {
                            item: "item"in i ? i.item : ""
                        })),
                        i.countAllUsers = Number("countAllUsers"in i ? i.countAllUsers : "") + Number(1),
                        ++s.index0,
                        ++s.index,
                        s.first = !1,
                        s.length && (--s.revindex0,
                        --s.revindex,
                        s.last = 0 === s.revindex0)
                    }
                    ), this),
                    i.countAllUsers = ("countAllUsers"in i ? i.countAllUsers : "") - 7,
                    ("countAllUsers"in i ? i.countAllUsers : "") > 0 && (i.countOtherUsers = "+" + ("countAllUsers"in i ? i.countAllUsers : ""),
                    t.append('<li class="group-chat__multisuggest  multisuggest__list-item js-toggle-all-users" data-title="'),
                    t.append(twig.filter.escape(this.env_, "countOtherUsers"in i ? i.countOtherUsers : "", "light_escape", null, !0)),
                    t.append('" ><span class="group-chat__multisuggest--tag" title="'),
                    t.append(twig.filter.escape(this.env_, "countOtherUsers"in i ? i.countOtherUsers : "", "light_escape", null, !0)),
                    t.append('"><span class="group-chat__multisuggest--tag-inner">'),
                    t.append(twig.filter.escape(this.env_, "countOtherUsers"in i ? i.countOtherUsers : "", "light_escape", null, !0)),
                    t.append("</span></span></li>")),
                    t.append("</ul>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_inbox_group_chat_item_wrapper"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/inbox/group_chat/item_wrapper", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
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
                    t.append('<div class="chat-inbox" id="chat-wrapper">'),
                    new (e._get("interface/inbox/group_chat/header.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        url: "avatar"in i ? i.avatar : "",
                        id: "id"in i ? i.id : ""
                    })),
                    "amojo_disabled"in i && i.amojo_disabled ? (t.append('<div class="amojo-disabled-plug">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Sorry, the service is not available at the moment"), "light_escape", null, !0)),
                    t.append("</div>")) : (t.append('<div class="chat-inbox__content custom-scroll">'),
                    new (e._get("interface/inbox/direct_chat/content.twig"))(this.env_).render_(t, i),
                    t.append("</div>"),
                    new (e._get("interface/inbox/direct_chat/reply.twig"))(this.env_).render_(t, i)),
                    t.append("</div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_inbox_group_chat_wrapper"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/inbox/group_chat/wrapper", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
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
                    t.append('<div class="chat-inbox" id="chat-wrapper">'),
                    new (e._get("interface/inbox/group_chat/header_edit.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        url: "avatar"in i ? i.avatar : "",
                        id: "id"in i ? i.id : ""
                    })),
                    "amojo_disabled"in i && i.amojo_disabled ? (t.append('<div class="amojo-disabled-plug">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Sorry, the service is not available at the moment"), "light_escape", null, !0)),
                    t.append("</div>")) : (t.append('<div class="group_chat-inbox__reply chat-inbox__reply"><div class="feed-compose__edit"><div class="feed-compose__inner"><div class="feed-compose__actions"><div class="feed-compose__actions-inner">'),
                    new (e._get("interface/controls/button.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        text: twig.attr("lang"in i ? i.lang : "", "button_save"),
                        class_name: "js-chat-submit feed-note__button",
                        tab_index: "-1",
                        disabled: !1
                    })),
                    new (e._get("interface/controls/cancel_button.twig"))(this.env_).render_(t, twig.extend({}, i, {
                        text: twig.attr("lang"in i ? i.lang : "", "button_cancel"),
                        class_name: "js-chat-edit-cancel feed-note__button_cancel",
                        tab_index: "-1"
                    })),
                    t.append("</div></div></div></div></div></div>")),
                    t.append("</div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_inbox_group_chat_wrapper_edit"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/inbox/group_chat/wrapper_edit", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e),
                    this.setBlocks({
                        search: twig.bind(this.block_search, this),
                        chat: twig.bind(this.block_chat, this)
                    })
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(t) {
                    return e._get("interface/inbox/aside.twig")
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    this.getParent(t).render_(e, t, twig.extend({}, this.getBlocks(), i))
                }
                ,
                t.prototype.block_search = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    i.search_line_class_name = "js-inbox-filter",
                    i.search_line_search_icon = "common--filter-inbox",
                    i.is_search_enabled = !twig.attr("_account_features"in i ? i._account_features : "", "global_inbox") && twig.attr("_account_features"in i ? i._account_features : "", "talks_search"),
                    twig.attr("_account_features"in i ? i._account_features : "", "talks_search") && twig.attr("_account_features"in i ? i._account_features : "", "global_inbox") ? i.search_line_search_icon = "common--filter-inbox-small" : twig.attr("_account_features"in i ? i._account_features : "", "talks_search") && (i.search_line_search_icon = "common--filter-search"),
                    new (e._get("interface/inbox/filter/search_line.twig"))(this.env_).render_(t, {
                        class_name: "search_line_class_name"in i ? i.search_line_class_name : "",
                        search_disabled: !("is_search_enabled"in i && i.is_search_enabled),
                        search_placeholder: "is_search_enabled"in i && i.is_search_enabled ? this.env_.filter("i18n", "Search or filter") : this.env_.filter("i18n", "Filter"),
                        search_icon: "search_line_search_icon"in i ? i.search_line_search_icon : "",
                        sort_options: [{
                            text: this.env_.filter("i18n", "Newest"),
                            class_name: "js-read-sort",
                            svg_icon_left: "sort-check",
                            icon_left_class: "svg-icon__context",
                            additional_data: 'data-sort-type="desc" data-sort-by="last_message_at"'
                        }, {
                            text: this.env_.filter("i18n", "Longest wait"),
                            class_name: "js-read-sort",
                            svg_icon_left: "sort-check",
                            icon_left_class: "svg-icon__context",
                            additional_data: 'data-sort-type="desc" data-sort-by="first_unanswered_message_at"'
                        }, {
                            text: this.env_.filter("i18n", "Starred"),
                            class_name: "js-read-sort",
                            svg_icon_left: "sort-check",
                            icon_left_class: "svg-icon__context",
                            additional_data: 'data-sort-type="desc" data-sort-by="is_starred"'
                        }],
                        widget_creator_enabled: !0,
                        amo_chats_state: "amo_chats_state"in i ? i.amo_chats_state : ""
                    })
                }
                ,
                t.prototype.block_chat = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    e.append('<div class="inbox-direct-chat-container"></div>')
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_inbox_inbox_messaging_aside"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/inbox/inbox_messaging/aside", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
                goog.require("twig.filter");
                var t = function(e) {
                    twig.Template.call(this, e),
                    this.setBlocks({
                        search: twig.bind(this.block_search, this)
                    })
                };
                twig.inherits(t, twig.Template),
                t.prototype.getParent_ = function(t) {
                    return e._get("interface/inbox/aside.twig")
                }
                ,
                t.prototype.render_ = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    this.getParent(t).render_(e, t, twig.extend({}, this.getBlocks(), i))
                }
                ,
                t.prototype.block_search = function(t, i, n) {
                    n = void 0 === n ? {} : n,
                    i.search_line_class_name = "js-inbox-filter",
                    i.search_line_search_icon = "common--filter-inbox",
                    twig.attr("_account_features"in i ? i._account_features : "", "talks_search") && (i.search_line_class_name = ("search_line_class_name"in i ? i.search_line_class_name : "") + " search-container-wrapper--inbox",
                    i.search_line_search_icon = "common--filter-inbox-small"),
                    new (e._get("interface/inbox/filter/search_line.twig"))(this.env_).render_(t, {
                        class_name: "search_line_class_name"in i ? i.search_line_class_name : "",
                        search_placeholder: this.env_.filter("i18n", "Filter"),
                        search_disabled: !0,
                        search_icon: "search_line_search_icon"in i ? i.search_line_search_icon : "",
                        params: "params"in i ? i.params : ""
                    })
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_inbox_inbox_messaging_aside_mentions"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/inbox/inbox_messaging/aside_mentions", t)
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
                    t.append('<style id="inbox_messaging_columns">'),
                    "layout_width"in i && i.layout_width ? i.layout_width_formatted = this.env_.filter("number_format", this.env_, "layout_width"in i ? i.layout_width : "", 4, ".") + "%" : i.layout_width_formatted = "30%",
                    i.layout_width_formatted = "30%",
                    "layout_width_formatted"in i && i.layout_width_formatted && (t.append("#inbox_messaging_wrapper {width: "),
                    t.append(twig.filter.escape(this.env_, "layout_width_formatted"in i ? i.layout_width_formatted : "", "light_escape", null, !0)),
                    t.append(";}#inbox_messaging_wrapper.inbox-filter_open {min-width: 470px;width: 470px;}.inbox-messaging__col-resizer,.inbox-messaging__right-container,.inbox-messaging__welcome {left: "),
                    t.append(twig.filter.escape(this.env_, "layout_width_formatted"in i ? i.layout_width_formatted : "", "light_escape", null, !0)),
                    t.append(";}.inbox-messaging-card-holder.card-holder {left: calc("),
                    t.append(twig.filter.escape(this.env_, "layout_width_formatted"in i ? i.layout_width_formatted : "", "light_escape", null, !0)),
                    t.append(" + 65px);}")),
                    t.append('</style><div class="inbox-messaging-page">'),
                    new (e._get("interface/inbox/inbox_messaging/wrapper.twig"))(this.env_).render_(t, i),
                    t.append('<div class="inbox-messaging__col-resizer js-column-resizer"></div><div class="inbox-messaging__welcome"></div><div class="inbox-messaging__right-container"></div></div>')
                }
                ,
                t.prototype.block_static = function(e, t, i) {
                    i = void 0 === i ? {} : i,
                    e.append(twig.filter.escape(this.env_, this.env_.invoke("inject_static", ["inbox.css", "inbox_messaging.css"], this), "light_escape", null, !0)),
                    "static_file"in t && t.static_file && e.append(twig.filter.escape(this.env_, this.env_.invoke("inject_static", ["static_file"in t ? t.static_file : ""], this), "light_escape", null, !0))
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_inbox_inbox_messaging_page"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/inbox/inbox_messaging/page", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
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
                    t.append('<div class="inbox-messaging__wrapper '),
                    twig.attr("_account_features"in i ? i._account_features : "", "global_inbox") && t.append("inbox-messaging__wrapper--global"),
                    t.append('" id="inbox_messaging_wrapper">'),
                    twig.attr("_account_features"in i ? i._account_features : "", "talks_search") && twig.attr("_account_features"in i ? i._account_features : "", "global_inbox") && (t.append('<div class="inbox-messaging__top-aside"><div class="inbox-messaging-search"><div class="custom-scroll" style="overflow-y: scroll;"><input class="inbox-messaging-search__input" placeholder="'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Search"), "light_escape", null, !0)),
                    t.append('" type="text"/></div><svg class="inbox-messaging-search__icon svg-icon svg-common--filter-search-dims"><use xlink:href="#common--filter-search"></use></svg></div>'),
                    twig.attr("_account_features"in i ? i._account_features : "", "chats_chat_tools") && twig.attr("user"in i ? i.user : "", "is_admin") && t.append('<button class="inbox-messaging__open-tools js-open-chat-tools"><svg class="svg-icon svg-common--gear-dims"><use xlink:href="#common--gear"></use></svg></button>'),
                    t.append("</div>")),
                    t.append('<div class="inbox-messaging__tab inbox-messaging__tab--active" data-type="inbox">'),
                    twig.attr("_account_features"in i ? i._account_features : "", "global_inbox") && (t.append('<div class="inbox-messaging__tab-title">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Inbox messaging (tab)"), "light_escape", null, !0)),
                    t.append('<span class="inbox-messaging__tab-counter hidden js-talks-tab-counter">0</span></div>')),
                    t.append('<div class="inbox-messaging__tab-content">'),
                    new (e._get("interface/inbox/inbox_messaging/aside.twig"))(this.env_).render_(t, {
                        _account_features: "_account_features"in i ? i._account_features : "",
                        amo_chats_state: "amo_chats_state"in i ? i.amo_chats_state : "",
                        wrapper_class_name: "inbox-messaging-wrapper",
                        class_name: "inbox-messaging__aside slide-in",
                        id: "inbox_messaging",
                        aside_id: "inbox_messaging_aside",
                        inbox_id: "inbox_messaging_list",
                        is_visible: !0
                    }),
                    t.append("</div></div>"),
                    twig.attr("_account_features"in i ? i._account_features : "", "global_inbox") && (t.append('<div class="inbox-messaging__tab" data-type="mentions"><div class="inbox-messaging__tab-title">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Mentions"), "light_escape", null, !0)),
                    t.append(" &amp; "),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Team chats"), "light_escape", null, !0)),
                    t.append('<span class="inbox-messaging__tab-counter hidden">0</span></div><div class="inbox-messaging__tab-content">'),
                    new (e._get("interface/inbox/inbox_messaging/aside_mentions.twig"))(this.env_).render_(t, {
                        _account_features: "_account_features"in i ? i._account_features : "",
                        id: "inbox_mentions",
                        aside_id: "inbox_mentions_aside",
                        inbox_id: "inbox_mentions_list",
                        is_visible: !0,
                        params: {
                            rights: "amojo_rights"in i ? i.amojo_rights : ""
                        }
                    }),
                    t.append("</div></div>")),
                    twig.attr("_account_features"in i ? i._account_features : "", "chats_chat_tools") && twig.attr("user"in i ? i.user : "", "is_admin") && (t.append('<div class="inbox-messaging-chat-tools custom-scroll"><div class="inbox-messaging-chat-tools__header"><h2 class="inbox-messaging-chat-tools__title">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Chat tools"), "light_escape", null, !0)),
                    t.append('</h2><button class="inbox-messaging-chat-tools__close-button js-close-chat-tools"><svg class="svg-icon svg-common--cross-close-dims"><use xlink:href="#common--cross-close"></use></svg></button></div><div class="inbox-messaging-chat-tools__content">'),
                    twig.attr("_account_features"in i ? i._account_features : "", "global_marketplace") && (t.append('<a href="/chats/tools/channels/" class="inbox-messaging-chat-tools__tab js-navigate-link" data-type="channels">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Channels"), "light_escape", null, !0)),
                    t.append("</a>")),
                    t.append('<a href="/chats/tools/templates-and-bots/" class="inbox-messaging-chat-tools__tab js-navigate-link" data-type="templates-and-bots">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Templates & Bots"), "light_escape", null, !0)),
                    t.append('</a><a href="/chats/tools/settings/" class="inbox-messaging-chat-tools__tab js-navigate-link" data-type="settings">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Settings"), "light_escape", null, !0)),
                    t.append("</a>"),
                    twig.attr("_account_features"in i ? i._account_features : "", "broadcasting") && (t.append('<a href="/chats/tools/broadcasting/" class="inbox-messaging-chat-tools__tab js-navigate-link" data-type="broadcasting">'),
                    t.append(twig.filter.escape(this.env_, this.env_.filter("i18n", "Broadcasting"), "light_escape", null, !0)),
                    t.append("</a>")),
                    t.append("</div></div>")),
                    t.append("</div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_inbox_inbox_messaging_wrapper"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/inbox/inbox_messaging/wrapper", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
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
                    t._parent = t;
                    var n = twig.range(1, 5);
                    twig.forEach(n, (function(i, n) {
                        t._key = n,
                        t.i = i,
                        e.append('<div class="card-plug__feed-note card-plug__feed-note_inbox"><div class="card-plug__avatar"></div><div class="card-plug__feed-note-line card-plug__animation"></div><div class="card-plug__feed-note-line card-plug__animation" style="width: '),
                        e.append(twig.filter.escape(this.env_, Number(30) + Number(twig.functions.random(this.env_, 40)), "light_escape", null, !0)),
                        e.append('%"></div></div>')
                    }
                    ), this)
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_inbox_plugs_chat"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/inbox/plugs/chat", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
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
                    t._parent = t;
                    var n = twig.range(1, 3);
                    twig.forEach(n, (function(i, n) {
                        t._key = n,
                        t.i = i,
                        e.append('<div class="notification__item notification-inner notification__item-plug"><div class="notification-chat__non-select"><div class="notification__item-avatar notifications__animation__loader"></div></div><div class="notification-inner__container_text notification-inner__container_text-plug"><div class="notification-inner__info_message"><span class="notification__item-plug-line notifications__animation__loader notifications__animation__loader-delay" style="width: '),
                        e.append(twig.filter.escape(this.env_, Number(30) + Number(twig.functions.random(this.env_, 30)), "light_escape", null, !0)),
                        e.append('%"></span></div><div class="notification-inner__info_message"><span class="notification__item-plug-line notifications__animation__loader notifications__animation__loader-delay" style="width: '),
                        e.append(twig.filter.escape(this.env_, Number(60) + Number(twig.functions.random(this.env_, 30)), "light_escape", null, !0)),
                        e.append('%"></span></div></div></div>')
                    }
                    ), this)
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_inbox_plugs_message"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/inbox/plugs/message", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
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
                    e.append('<div class="inbox-messaging-onboarding__layout"><div class="inbox-messaging-onboarding__skeleton-container"><div class="inbox-messaging-onboarding__block"><div class="inbox-messaging-onboarding__message-skeleton"><div class="inbox-messaging-onboarding__message-skeleton-avatar"></div><div class="inbox-messaging-onboarding__message-skeleton-text-container"><div class="inbox-messaging-onboarding__message-skeleton-text inbox-messaging-onboarding__message-skeleton-text_top"></div><div class="inbox-messaging-onboarding__message-skeleton-text inbox-messaging-onboarding__message-skeleton-text_bottom"></div></div></div><div class="inbox-messaging-onboarding__message-skeleton inbox-messaging-onboarding__message-skeleton_reversed"><div class="inbox-messaging-onboarding__message-skeleton-avatar"></div><div class="inbox-messaging-onboarding__message-skeleton-text-container"><div class="inbox-messaging-onboarding__message-skeleton-text inbox-messaging-onboarding__message-skeleton-text_top"></div><div class="inbox-messaging-onboarding__message-skeleton-text inbox-messaging-onboarding__message-skeleton-text_bottom"></div></div></div></div><div class="inbox-messaging-onboarding__block"><div class="inbox-messaging-onboarding__input-skeleton"><div class="inbox-messaging-onboarding__input-skeleton-line"></div><div class="inbox-messaging-onboarding__input-skeleton-bottom"><div class="inbox-messaging-onboarding__input-skeleton-button"></div><div class="inbox-messaging-onboarding__input-skeleton-dots"><div class="inbox-messaging-onboarding__input-skeleton-dot"></div><div class="inbox-messaging-onboarding__input-skeleton-dot"></div><div class="inbox-messaging-onboarding__input-skeleton-dot"></div></div></div></div></div></div><div class="inbox-messaging-onboarding__call-to-action"><p class="inbox-messaging-onboarding__call-to-action-text">'),
                    e.append(twig.filter.escape(this.env_, "text"in t ? t.text : "", "light_escape", null, !0)),
                    e.append("</p>"),
                    "isAdmin"in t && t.isAdmin && (e.append('<button class="js-inbox-onboarding-button button-input button-input_blue inbox-messaging-onboarding__call-to-action-button"><span class="button-input-inner__text">'),
                    e.append("button"in t ? t.button : ""),
                    e.append("</span></button>")),
                    e.append("</div></div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_inbox_inbox_messaging_onboarding_skeleton"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/inbox/inbox_messaging/onboarding/skeleton", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
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
                    t.append('<div class="inbox-messaging-direct-chat"><div class="inbox-messaging-direct-chat__pattern"></div><div class="inbox-messaging-direct-chat__container">'),
                    new (e._get("interface/inbox/direct_chat/wrapper.twig"))(this.env_).render_(t, i),
                    t.append("</div></div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_inbox_inbox_messaging_chats_direct_chat"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/inbox/inbox_messaging/chats/direct_chat", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
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
                    t.append('<div class="inbox-messaging-direct-chat"><div class="inbox-messaging-direct-chat__pattern"></div><div class="inbox-messaging-direct-chat__container">'),
                    new (e._get("interface/inbox/group_chat/wrapper.twig"))(this.env_).render_(t, i),
                    t.append("</div></div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_inbox_inbox_messaging_chats_group_chat"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/inbox/inbox_messaging/chats/group_chat", t)
            }(),
            function() {
                "use strict";
                goog.require("twig"),
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
                    t.append('<div class="inbox-messaging-direct-chat"><div class="inbox-messaging-direct-chat__pattern"></div><div class="inbox-messaging-direct-chat__container">'),
                    new (e._get("interface/inbox/group_chat/wrapper_edit.twig"))(this.env_).render_(t, i),
                    t.append("</div></div>")
                }
                ,
                t.prototype.getTemplateName = function() {
                    return "interface_inbox_inbox_messaging_chats_group_chat_create"
                }
                ,
                t.prototype.isTraitable = function() {
                    return !1
                }
                ,
                e._add("interface/inbox/inbox_messaging/chats/group_chat_create", t)
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
        e._sentryDebugIds[t] = "6dd61430-26e8-4d9c-84d4-0e588229aadd",
        e._sentryDebugIdIdentifier = "sentry-dbid-6dd61430-26e8-4d9c-84d4-0e588229aadd")
    } catch (e) {}
}();
//# sourceMappingURL=65779.78a321214df8e9b5ed6a.js.map
